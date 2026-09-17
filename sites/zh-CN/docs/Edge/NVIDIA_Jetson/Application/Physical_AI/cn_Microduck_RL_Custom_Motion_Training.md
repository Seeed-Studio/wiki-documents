---
description: 通过选择模板、定义阶段和奖励、注册任务、训练并导出 ONNX，创建自定义 Microduck 动作任务。
title: 创建自定义 Microduck 动作
image: https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_jetson_rl_cover.png
slug: /ai_robotics_microduck_rl_custom_motion_training
sku: 114110312, 100006184
last_update:
  date: 09/11/2026
  author: Dayu
createdAt: '2026-09-04'
url: https://wiki.seeedstudio.com/cn/ai_robotics_microduck_rl_custom_motion_training/
updatedAt: '2026-09-07'
---

# 创建自定义 Microduck 动作

本章介绍构建新动作的项目工作流。示例使用基于阶段的 **鞠躬（Bow）** 行为，但相同流程也适用于点头、下蹲、伸展、恢复技能以及其他机器人动作。

<div style={{display:'flex', gap:'12px', flexWrap:'wrap', margin:'18px 0 30px'}}>
  <a href="/cn/ai_robotics_microduck_rl_on_jetson/" style={{display:'inline-flex', alignItems:'center', gap:'10px', padding:'9px 16px 9px 10px', borderRadius:'9px', background:'#172b4d', color:'#fff', fontWeight:'700', textDecoration:'none'}}><span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'28px', height:'28px', borderRadius:'50%', background:'rgba(255,255,255,.2)', fontSize:'21px', lineHeight:'1'}}>←</span> Demo 首页</a>
  <a href="/cn/ai_robotics_microduck_rl_official_policies/" style={{display:'inline-flex', alignItems:'center', gap:'10px', padding:'9px 16px 9px 10px', borderRadius:'9px', background:'#00a86b', color:'#fff', fontWeight:'700', textDecoration:'none'}}><span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'28px', height:'28px', borderRadius:'50%', background:'rgba(255,255,255,.22)', fontSize:'21px', lineHeight:'1'}}>←</span> 官方动作</a>
</div>

## 理解策略约定（Policy Contract）

所有可热插拔的 Microduck 策略共享同一接口：

- **61 维 actor 观测**：48 个本体感知值，加上 13 维命令块 `[twist(3), head_pose(4), body_pose(6)]`。
- **14 维动作输出**，对应激活的舵机关节。
- 未使用的命令槽仍然存在，并用零填充。
- 被动轮子和间隙关节使用 `passive_*` 命名约定，且不得被选为驱动关节。
- 关节 ID 应由项目辅助函数解析，而不是硬编码。
- ONNX 导出必须通过 `scripts/export.py`，以便包含观测归一化器。

破坏这一约定可能会产生只在某个 Viewer 中可用、但无法正确切换或部署的策略。

## 选择最接近的模板

| 期望动作 | 推荐模板 |
| --- | --- |
| 连续速度控制动作 | `microduck_velocity_env_cfg.py` |
| 从特定状态恢复 | `microduck_standup_env_cfg.py` |
| 两状态命令切换 | `microduck_sitstand_env_cfg.py` |
| 缓慢的分阶段动作 | `microduck_ground_pick_env_cfg.py` |
| 快速动态机动动作 | `microduck_roulade_env_cfg.py` |
| 滚轮动作 | `microduck_velocity_rollers_env_cfg.py` |

对于鞠躬动作，ground-pick 任务是一个有用的起点，因为它已经实现了阶段命令、下降、保持、上升、姿态跟踪和恢复。

## 复制模板

```bash
cd ~/microduck-jetson/microduck_rl

cp src/mjlab_microduck/tasks/microduck_ground_pick_env_cfg.py \
  src/mjlab_microduck/tasks/microduck_bow_env_cfg.py
```

在编辑前备份任务注册表和共享 MDP 函数：

```bash
cp src/mjlab_microduck/tasks/__init__.py \
  src/mjlab_microduck/tasks/__init__.py.bak

cp src/mjlab_microduck/tasks/mdp.py \
  src/mjlab_microduck/tasks/mdp.py.bak
```

## 设计动作时间线

一个简单的鞠躬可以使用从 `0.0` 到 `1.0` 的归一化阶段：

| 阶段 | 行为 |
| --- | --- |
| `0.00–0.25` | 向鞠躬姿态下沉 |
| `0.25–0.55` | 保持鞠躬姿态 |
| `0.55–0.85` | 回到初始姿态 |
| `0.85–1.00` | 直立稳定 |

使用平滑插值，而不是在两个姿态之间直接切换。目标的剧烈变化往往会导致高动作率、冲击或不稳定的奖励梯度。

## 定义目标姿态

在 `microduck_bow_env_cfg.py` 中创建关节名称映射。先从保守的角度值开始，并在训练前使用 Viewer 检查它们。

```python
BOW_POSE = {
    "left_hip_pitch": -0.20,
    "left_knee": 0.30,
    "left_ankle": -0.10,
    "neck_pitch": 0.35,
    "head_pitch": 0.20,
    "right_hip_pitch": -0.20,
    "right_knee": 0.30,
    "right_ankle": -0.10,
}
```

上面的数值只是起点。请在机器人配置中确认实际的关节名称和符号方向。

## 构建奖励

一个有用的自定义动作奖励通常由以下部分组成：

- 基于阶段的目标姿态跟踪。
- 任务结果奖励，例如在鞠躬时降低头部。
- 序列末尾附近的直立和恢复奖励。
- 足部接触和横向稳定性项。
- 关节限位、碰撞、动作速率和冲击惩罚。

尽可能复用模板奖励以及 `src/mjlab_microduck/tasks/mdp.py` 中的共享函数。只有在所需度量尚不存在时才添加新函数。

:::warning
在分配权重前检查符号约定。已经返回负惩罚的函数通常只在符合项目约定时才使用正权重。请检查附近的任务配置，并在 TensorBoard 中确认加权后的度量。
:::

## 注册新任务

在 `src/mjlab_microduck/tasks/__init__.py` 中导入新的配置，然后按照现有条目注册一个新的 ID：

```python
register_mjlab_task(
    task_id="Mjlab-Bow-Flat-MicroDuck",
    env_cfg=microduck_bow_env_cfg,
    play_env_cfg=microduck_bow_play_env_cfg,
    rl_cfg=microduck_bow_rl_cfg,
)
```

使用在新模块中实现的精确可调用名称，并保持与当前注册表签名一致。

确认注册：

```bash
uv run --no-sync list-envs | grep Mjlab-Bow
```

## 训练前检查

启动一个随机策略，以检查模型、重置状态、传感器、命令管理器和终止项配置：

```bash
export DISPLAY=:0
export MUJOCO_GL=glfw

uv run --no-sync play Mjlab-Bow-Flat-MicroDuck \
  --agent random \
  --num-envs 1 \
  --viewer native
```

留意无效接触、生成时的穿模、关节方向错误、立即终止、NaN 数值以及不可能实现的目标姿态。

## 运行冒烟测试

```bash
export MUJOCO_GL=egl

uv run --no-sync train Mjlab-Bow-Flat-MicroDuck \
  --env.scene.num-envs 64 \
  --agent.logger tensorboard \
  --agent.max_iterations 5
```

只有在该过程无异常或 NaN 后，才开始长时间训练。

## 分阶段训练

一个实用的课程安排是：

1. **动作探索**：简单的初始状态、宽松的姿态奖励、最小扰动。
2. **动作完成**：强化保持和恢复项；添加基于结果的奖励。
3. **鲁棒性**：增加初始状态多样性、摩擦随机化、外部推力和间隙变体。

示例长跑训练命令：

```bash
uv run --no-sync train Mjlab-Bow-Flat-MicroDuck \
  --env.scene.num-envs 2048 \
  --agent.logger tensorboard \
  --agent.max_iterations 2000
```

关注主要任务奖励，而不是只看总奖励。策略可能在正则化度量上有所提升，却从未完成预期动作。

## 可视化与导出

```bash
export DISPLAY=:0
export MUJOCO_GL=glfw

uv run --no-sync play Mjlab-Bow-Flat-MicroDuck \
  --checkpoint-file /absolute/path/to/model_XXXX.pt \
  --num-envs 1 \
  --viewer native
```

导出通过验证的 checkpoint：

```bash
uv run --no-sync python3 scripts/export.py \
  Mjlab-Bow-Flat-MicroDuck \
  --checkpoint-file /absolute/path/to/model_XXXX.pt \
  --onnx-file bow.onnx
```

若要添加键盘触发，请扩展 `scripts/infer_policy.py`，复用现有的坐/站、ground-pick、roulade 和踢腿策略切换模式。写入新策略所期望的命令槽，并保持 61 维观测布局不变。

## 已验证示例：前后劈叉

该验证过的自定义任务使用了一种比之前单脚平衡实验更可行的双支撑动作。左脚向前移动，右脚向后移动，两只脚都保持接地，最后机器人回到正常站立姿态。

注册的任务 ID 为：

```text
Mjlab-FrontBackSplit-Flat-MicroDuck
```

### 动作时间线

该任务使用一个 6 秒的循环阶段命令：

| 归一化阶段 | 行为 |
| --- | --- |
| `0.00–0.30` | 从站立姿态进入前后劈叉 |
| `0.30–0.58` | 在双脚接地的情况下保持劈叉姿态 |
| `0.58–0.78` | 将双腿收回到站立姿态 |
| `0.78–1.00` | 在双脚初始姿态下稳定 |

时间常数定义在
`src/mjlab_microduck/tasks/microduck_front_back_split_env_cfg.py` 中：

```python
SPLIT_PERIOD = 6.0
SPLIT_END = 0.30
HOLD_END = 0.58
RETURN_END = 0.78
TARGET_SAGITTAL_SEPARATION = 0.095
```

### 定义目标姿态

目标通过关节名称来表达，并使用 MuJoCo 正向运动学进行了检查。该目标在产生约 `9.5 cm` 的有符号前后脚间距的同时，使两个足端 site 保持水平：

```python
FRONT_BACK_SPLIT_POSE = {
    "left_hip_pitch": -1.1865,
    "left_knee": -0.1386,
    "left_ankle": 1.0452,
    "right_hip_pitch": 0.0603,
    "right_knee": 0.4927,
    "right_ankle": 0.4293,
    "neck_pitch": 0.3491,
    "head_pitch": 0.3491,
}
```

交互式姿态编辑器为 `scripts/front_back_split_pose_editor.py`。
它会打开一个关闭重力的 MuJoCo 窗口，并在窗口关闭时打印最终的命名姿态：

```bash
cd ~/microduck-jetson/microduck_rl
export DISPLAY=:0
export MUJOCO_GL=glfw
uv run --no-sync python scripts/front_back_split_pose_editor.py
```

如果 Jetson 桌面使用了不同的显示器，请直接在图形终端中运行该命令，并使用 `echo $DISPLAY` 打印出的值。

### 构建劈叉动作奖励

该任务组合了以下与动作相关的目标：

| 奖励 | 目的 |
| --- | --- |
| `split_pose` | 跟踪从站立到劈叉的插值关节姿态 |
| `split_pose_l1` | 提供有方向性的关节误差梯度 |
| `feet_grounded` | 保持双脚与地形接触 |
| `feet_flat` | 惩罚足端 site 倾斜 |
| `sagittal_separation` | 跟踪有符号的前后脚间距 |

该任务还保留了继承自 Microduck 环境的直立、关节限位、自碰撞、角速度、动作变化率、执行器、编码器、摩擦力、质量、惯性以及质心随机化等相关项。自定义的 `sagittal_separation` 项会在机器人基座坐标系中测量两个足部 site，因此奖励项与姿态使用相同的坐标约定。

### 注册任务

`Mjlab-FrontBackSplit-Flat-MicroDuck` 是 MJLab 注册表使用的任务 ID。
它不是文件名，也不会作为参数传递给环境工厂。

| 项目 | 位置 | 目的 |
| --- | --- | --- |
| 环境和 RL 配置 | `src/mjlab_microduck/tasks/microduck_front_back_split_env_cfg.py` | 定义目标姿态、相位时序、场景、奖励和 PPO 配置 |
| 相位分离奖励 | `src/mjlab_microduck/tasks/mdp.py` | 在机器人基坐标系中跟踪带符号的矢状面脚部间距 |
| 任务注册 | `src/mjlab_microduck/tasks/__init__.py` | 将任务 ID 绑定到环境和 RL 配置 |
| 姿态编辑器 | `scripts/front_back_split_pose_editor.py` | 打开并打印已验证的 MuJoCo 目标姿态 |
| CLI 入口点 | `uv run --no-sync train <task-id>` | 查找已注册任务并开始训练 |

确认注册：

```bash
cd ~/microduck-jetson/microduck_rl
uv run --no-sync list-envs | grep FrontBackSplit
```

预期输出：

```text
Mjlab-FrontBackSplit-Flat-MicroDuck
```

### 运行冒烟测试

从 64 个环境和 5 次迭代开始：

```bash
cd ~/microduck-jetson/microduck_rl
export MUJOCO_GL=egl
uv run --no-sync train Mjlab-FrontBackSplit-Flat-MicroDuck \
  --env.scene.num-envs 64 \
  --agent.logger tensorboard \
  --agent.max_iterations 5
```

对于 16 GB 参考 Jetson，已验证的完整运行使用了 2048 个环境：

```bash
uv run --no-sync train Mjlab-FrontBackSplit-Flat-MicroDuck \
  --env.scene.num-envs 2048 \
  --agent.logger tensorboard \
  --agent.max_iterations 1000
```

完成的运行达到了完整的 600 步回合，在后期训练中没有因跌倒而终止，并且分腿姿态、脚部接触和分离奖励接近最大值。
在 8 GB 的 Jetson Orin NX 或 Orin Nano 上，从 `1024` 个环境开始，并且只在使用 `jtop` 检查内存后再增加。

### 可视化一个 PT 检查点

使用已完成的检查点配合原生 MuJoCo Viewer：

```bash
cd ~/microduck-jetson/microduck_rl
export DISPLAY=:0
export MUJOCO_GL=glfw
uv run --no-sync play Mjlab-FrontBackSplit-Flat-MicroDuck \
  --checkpoint-file "$PWD/logs/rsl_rl/front_back_split/2026-09-09_18-04-10_front_back_split_left_forward/model_999.pt" \
  --num-envs 1 \
  --viewer native
```

### 导出并运行 ONNX 策略

使用项目封装器导出检查点，以便观测归一化器嵌入到 ONNX 计算图中：

```bash
uv run --no-sync python3 scripts/export.py \
  Mjlab-FrontBackSplit-Flat-MicroDuck \
  --checkpoint-file "$PWD/logs/rsl_rl/front_back_split/2026-09-09_18-04-10_front_back_split_left_forward/model_999.pt" \
  --onnx-file "$PWD/models/exports/front_back_split/front_back_split_model_999.onnx" \
  --num-envs 1
```

通过键盘控制的 MuJoCo 推理演示运行它：

```bash
cd ~/microduck-jetson/microduck_rl
export DISPLAY=:0
export MUJOCO_GL=glfw
uv run --no-sync python3 scripts/infer_policy.py \
  --standing pretrained/pollen-robotics/alpha_stand.onnx \
  --front-back-split models/exports/front_back_split/front_back_split_model_999.onnx \
  --new-cmd-obs
```

按下 `O` 运行一个 6 秒的前后分腿循环。该策略接收与训练期间相同的余弦/正弦相位指令，然后控制会自动返回到站立策略。如果同时提供了行走策略，当非零速度指令激活时，演示会返回到行走。

旧的 `--one-leg-balance` 选项和单腿任务文件已不再属于当前仓库。请使用 `--front-back-split` 来执行此已验证动作。

## 开发检查清单

- [ ] 观测布局保持为 61 维。
- [ ] 策略输出保持为 14 维。
- [ ] 被动关节从动作和伺服观测中排除。
- [ ] BAM 启动事件和域随机化在需要的地方保持激活。
- [ ] 任务出现在 `list-envs` 中。
- [ ] 随机策略 Viewer 检查成功。
- [ ] 64 环境冒烟测试成功。
- [ ] 主要任务指标在 TensorBoard 中得到提升。
- [ ] 最终 PT 检查点在 MuJoCo 中行为正确。
- [ ] 使用项目脚本导出 ONNX，并在机器人部署前完成演练。

<div align="center">
  <a href="/cn/ai_robotics_microduck_rl_on_jetson/" style={{display:'inline-block', padding:'16px 30px', marginTop:'20px', borderRadius:'10px', background:'linear-gradient(135deg, #172b4d, #0b172d)', color:'#fff', fontSize:'18px', fontWeight:'800', textDecoration:'none', boxShadow:'0 10px 26px rgba(23,43,77,.25)'}}>返回演示主页</a>
  </div>
