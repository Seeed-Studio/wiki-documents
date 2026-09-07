---
description: 通过选择模板、定义阶段和奖励、注册任务、训练并导出 ONNX，创建自定义 Microduck 动作任务。
title: 创建自定义 Microduck 动作
image: https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_jetson_rl_cover.png
slug: /ai_robotics_microduck_rl_custom_motion_training
sku: 114110312, 100006184
last_update:
  date: 09/07/2026
  author: Dayu
createdAt: '2026-09-04'
---

# 创建自定义 Microduck 动作

本章介绍构建新动作的项目工作流。示例使用基于阶段的**鞠躬（Bow）**行为，但相同流程也适用于点头、下蹲、伸展、恢复技能以及其他机器人动作。

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
|---|---|
| 连续速度动作 | `microduck_velocity_env_cfg.py` |
| 从特定状态恢复 | `microduck_standup_env_cfg.py` |
| 两状态命令切换 | `microduck_sitstand_env_cfg.py` |
| 缓慢的分阶段动作 | `microduck_ground_pick_env_cfg.py` |
| 快速动态机动动作 | `microduck_roulade_env_cfg.py` |
| 滚轮动作 | `microduck_velocity_rollers_env_cfg.py` |

对于鞠躬，ground-pick 任务是一个有用的起点，因为它已经实现了阶段命令、下降、保持、上升、姿态跟踪和恢复。

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
|---|---|
| `0.00–0.25` | 向鞠躬姿态下降 |
| `0.25–0.55` | 保持鞠躬 |
| `0.55–0.85` | 返回到初始姿态 |
| `0.85–1.00` | 稳定直立 |

使用平滑插值，而不是在两个姿态之间直接切换。目标的剧烈变化往往会导致高动作率、冲击或不稳定的奖励梯度。

## 定义目标姿态

在 `microduck_bow_env_cfg.py` 中创建关节名称映射。从保守的角度开始设置角度，并在训练前使用 Viewer 检查它们。

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

上述数值只是起点。请在机器人配置中确认实际的关节名称和符号方向。

## 构建奖励

一个有用的自定义动作奖励通常结合以下内容：

- 基于阶段的目标姿态跟踪。
- 任务结果奖励，例如在鞠躬时降低头部。
- 序列末尾附近的直立和恢复奖励。
- 足部接触和横向稳定性项。
- 关节极限、碰撞、动作速率和冲击惩罚。

尽可能复用模板奖励以及 `src/mjlab_microduck/tasks/mdp.py` 中的共享函数。只有在所需测量尚不存在时才添加新函数。

:::warning
在分配权重前检查符号约定。一个已经返回负惩罚的函数，通常只在与项目约定一致时才使用正权重。检查附近的任务配置，并在 TensorBoard 中确认加权后的度量。
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

使用在新模块中实现的精确可调用名称，并镜像当前注册表的签名。

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

留意无效接触、生成时的穿模、关节方向错误、立即终止、NaN 值以及不可能实现的目标姿态。

## 运行冒烟测试

```bash
export MUJOCO_GL=egl

uv run --no-sync train Mjlab-Bow-Flat-MicroDuck \
  --env.scene.num-envs 64 \
  --agent.logger tensorboard \
  --agent.max_iterations 5
```

只有在该过程无异常或 NaN 完成后，才开始长时间训练。

## 分阶段训练

一个实用的课程设计是：

1. **动作探索**：简单的初始状态、宽松的姿态奖励、最小扰动。
2. **动作完成**：加强保持和恢复项；添加基于结果的奖励。
3. **鲁棒性**：增加初始状态多样性、摩擦随机化、外部推力和间隙变体。

示例长跑命令：

```bash
uv run --no-sync train Mjlab-Bow-Flat-MicroDuck \
  --env.scene.num-envs 2048 \
  --agent.logger tensorboard \
  --agent.max_iterations 2000
```

关注主要任务奖励，而不是只看总奖励。策略可能在正则化指标上有所提升，却从未完成预期动作。

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

## 已验证示例：单腿平衡

以下自定义任务已在 Jetson 参考系统上实现并通过冒烟测试。该动作将机器人的重量转移到**左脚**，抬起**右脚**，保持平衡姿态，然后返回到正常的双脚站立姿态。

注册的任务 ID 为：

```text
Mjlab-OneLegBalance-Flat-MicroDuck
```

### 动作时间线

该任务使用一个六秒的循环阶段命令：

| 归一化阶段 | 行为 |
|---|---|
| `0.00–0.30` | 将重量转移到左脚并抬起右腿 |
| `0.30–0.58` | 保持单腿平衡姿态 |
| `0.58–0.78` | 放下右脚并回到站立姿态 |
| `0.78–1.00` | 在双脚初始姿态下稳定 |

这些边界在 `microduck_one_leg_balance_env_cfg.py` 中定义：

```python
BALANCE_PERIOD = 6.0
LIFT_END = 0.30
HOLD_END = 0.58
RETURN_END = 0.78
```

### 定义目标姿态

目标使用关节名称而不是原始 MuJoCo 关节索引来表示。这样可以保持意图可读，并避免在机器人模型变化时发生意外的索引偏移。

```python
ONE_LEG_POSE = {
    "left_hip_roll": -0.25,
    "left_hip_pitch": -0.40,
    "left_knee": -0.05,
    "left_ankle": 0.45,
    "right_hip_roll": -0.10,
    "right_hip_pitch": 0.95,
    "right_knee": -1.25,
    "right_ankle": 0.30,
    "neck_pitch": 0.30,
    "head_pitch": 0.30,
    "head_roll": -0.10,
}
```

左腿保持接近其站立配置。右髋和右膝将摆动腿向前折起，而轻微的头部滚转有助于传达预期的支撑侧。

### 构建平衡奖励

该示例结合了五个任务特定目标：

| 奖励 | 目的 |
|---|---|
| `one_leg_pose` | 跟踪从站立到平衡的插值关节姿态 |
| `support_foot_grounded` | 保持左支撑脚与地形接触 |
| `swing_foot_airborne` | 防止右脚在保持阶段仍停留在地面上 |
| `swing_foot_height` | 跟踪右脚相对于地形的期望离地高度 |
| `com_over_support` | 将水平质心移动到左支撑脚上方 |

该任务还保留了 Microduck 训练环境中继承的关节极限、自碰撞、角速度、动作速率、执行器、编码器、摩擦、质量、惯量以及质心随机化项。

在 `src/mjlab_microduck/tasks/mdp.py` 中添加了两个小型可复用测量：

- `phase_single_foot_airborne_reward()` 将右脚腾空奖励限制在当前激活的平衡相位内。
- `phase_site_height_track()` 在站立和抬起状态之间插值右脚高度目标。

现有的 `phase_pose_track()`, `phase_pose_track_l1()`, `single_foot_grounded_reward()`, 和 `com_over_support_foot()` 函数被直接复用。

### 注册任务

将任务配置的导入和注册添加到 `src/mjlab_microduck/tasks/__init__.py`：

```python
from .microduck_one_leg_balance_env_cfg import (
    make_microduck_one_leg_balance_env_cfg,
    MicroduckOneLegBalanceRlCfg,
)

register_mjlab_task(
    task_id="Mjlab-OneLegBalance-Flat-MicroDuck",
    env_cfg=make_microduck_one_leg_balance_env_cfg(),
    play_env_cfg=make_microduck_one_leg_balance_env_cfg(play=True),
    rl_cfg=MicroduckOneLegBalanceRlCfg,
    runner_cls=MicroduckOnPolicyRunner,
)
```

确认 MJLab 能发现新任务：

```bash
cd ~/microduck-jetson/microduck_rl
uv run --no-sync list-envs | grep OneLegBalance
```

预期输出：

```text
Mjlab-OneLegBalance-Flat-MicroDuck
```

### 在 MuJoCo 中编辑并捕获姿态

示例包含 `scripts/one_leg_pose_editor.py`。它会禁用重力并固定浮动基座，以便在训练前可以安全地调整各个关节目标。

在 Jetson 桌面上从终端直接运行它：

```bash
cd ~/microduck-jetson/microduck_rl
uv run --no-sync python scripts/one_leg_pose_editor.py
```

展开 MuJoCo 窗口右侧的 **Control** 面板并调整关节滑块。关闭窗口会在终端打印最终命名的 `ONE_LEG_POSE` 字典。MuJoCo 的 **Save XML** 和 **Save MJB** 按钮用于保存模型文件；它们不会保存此任务使用的 Python 目标姿态字典。

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_one_leg_balance.png" alt="Interactive MuJoCo pose editor showing the Microduck one-leg balance target pose" />
</div>

如果通过 SSH 启动编辑器并希望它显示在 Jetson 本地连接的显示器上，请先导出活动桌面会话。已验证的 Jetson 会话使用了 `DISPLAY=:1`：

```bash
cd ~/microduck-jetson/microduck_rl

export DISPLAY=:1
export XAUTHORITY=/run/user/1000/gdm/Xauthority
export XDG_RUNTIME_DIR=/run/user/1000
export DBUS_SESSION_BUS_ADDRESS=unix:path=/run/user/1000/bus

~/.local/bin/uv run --no-sync python scripts/one_leg_pose_editor.py
```

:::note
显示编号在重启或桌面会话变化后可能会改变。在 Jetson 桌面上直接打开的终端中，运行 `echo $DISPLAY` 会显示当前活动值。
:::

### 运行已验证的冒烟测试

从 64 个环境和 5 次迭代开始：

```bash
cd ~/microduck-jetson/microduck_rl

export MUJOCO_GL=egl

uv run --no-sync train Mjlab-OneLegBalance-Flat-MicroDuck \
  --env.scene.num-envs 64 \
  --agent.logger tensorboard \
  --agent.max_iterations 5
```

该任务还在一台 16 GB Jetson 上使用 4096 个并行环境进行了测试：

```bash
uv run --no-sync train Mjlab-OneLegBalance-Flat-MicroDuck \
  --env.scene.num-envs 4096 \
  --agent.logger tensorboard \
  --agent.max_iterations 5
```

4096 环境的冒烟测试在没有出现内存溢出错误或 NaN 终止的情况下完成，并达到了约 `4.6k steps/s`。Actor 观测保持为 61 维，动作输出保持为 14 维。

:::tip
在 8 GB 的 Jetson Orin NX 或 Jetson Orin Nano 上，请从 `--env.scene.num-envs 1024` 开始。只有在使用 `jtop` 检查可用内存后再增加该值。
:::

### 打开训练查看器

要在自定义任务训练时可视化一个环境，请在 Jetson 桌面上运行以下命令：

```bash
cd ~/microduck-jetson/microduck_rl

uv run --no-sync train Mjlab-OneLegBalance-Flat-MicroDuck \
  --env.scene.num-envs 1 \
  --agent.logger tensorboard \
  --agent.max_iterations 1000 \
  --env.viewer.distance 0.55 \
  --env.viewer.azimuth 145 \
  --env.viewer.elevation -12
```

姿态编辑器会立即显示预期目标。训练查看器最初显示的是未训练策略，因此只有在策略学会转移、抬起、保持和恢复序列后，稳定的单腿行为才会出现。

### 启动完整训练运行

对于 16 GB 参考系统，请使用以下起点：

```bash
uv run --no-sync train Mjlab-OneLegBalance-Flat-MicroDuck \
  --env.scene.num-envs 4096 \
  --agent.logger tensorboard \
  --agent.max_iterations 20000
```

冒烟测试确认任务配置、奖励项、传感器、CUDA 后端以及大量并行环境数量工作正常。它们本身并不能证明策略收敛。请在 MuJoCo 中评估保存的检查点，并在机器人在未转移质心的情况下抬脚、跳跃或无法恢复到站立时，调整姿态、奖励权重、相位时序或课程。

## 开发检查清单

- [ ] 观测布局保持为 61 维。
- [ ] 策略输出保持为 14 维。
- [ ] 被动关节从动作和舵机观测中排除。
- [ ] BAM 启动事件和域随机化在需要的地方保持激活。
- [ ] 任务出现在 `list-envs` 中。
- [ ] 随机策略查看器检查成功。
- [ ] 64 环境冒烟测试成功。
- [ ] 主要任务指标在 TensorBoard 中得到改善。
- [ ] 最终 PT 检查点在 MuJoCo 中表现正确。
- [ ] 使用项目脚本导出 ONNX，并在机器人部署前进行演练。

<div align="center">
  <a href="/cn/ai_robotics_microduck_rl_on_jetson/" style={{display:'inline-block', padding:'16px 30px', marginTop:'20px', borderRadius:'10px', background:'linear-gradient(135deg, #172b4d, #0b172d)', color:'#fff', fontSize:'18px', fontWeight:'800', textDecoration:'none', boxShadow:'0 10px 26px rgba(23,43,77,.25)'}}>返回演示主页</a>
</div>
