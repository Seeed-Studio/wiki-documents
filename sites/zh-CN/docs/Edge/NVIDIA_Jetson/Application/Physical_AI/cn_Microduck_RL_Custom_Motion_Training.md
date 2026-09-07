---
description: 通过选择模板、定义阶段和奖励、注册任务、训练并导出 ONNX，创建自定义 Microduck 动作任务。
title: 创建自定义 Microduck 动作
image: https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_jetson_rl_cover.png
slug: /ai_robotics_microduck_rl_custom_motion_training
sku: 114110312, 100006184
last_update:
  date: 09/05/2026
  author: Dayu
createdAt: '2026-09-04'
---

# 创建自定义 Microduck 动作

本章介绍构建新动作的项目工作流。示例使用基于阶段的 **鞠躬（Bow）** 行为，但相同流程也适用于点头、下蹲、伸展、恢复技能以及其他机器人动作。

<div style={{display:'flex', gap:'12px', flexWrap:'wrap', margin:'18px 0 30px'}}>
  <a href="/cn/ai_robotics_microduck_rl_on_jetson/" style={{display:'inline-flex', alignItems:'center', gap:'10px', padding:'9px 16px 9px 10px', borderRadius:'9px', background:'#172b4d', color:'#fff', fontWeight:'700', textDecoration:'none'}}><span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'28px', height:'28px', borderRadius:'50%', background:'rgba(255,255,255,.2)', fontSize:'21px', lineHeight:'1'}}>←</span> Demo 首页</a>
  <a href="/cn/ai_robotics_microduck_rl_official_policies/" style={{display:'inline-flex', alignItems:'center', gap:'10px', padding:'9px 16px 9px 10px', borderRadius:'9px', background:'#00a86b', color:'#fff', fontWeight:'700', textDecoration:'none'}}><span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'28px', height:'28px', borderRadius:'50%', background:'rgba(255,255,255,.22)', fontSize:'21px', lineHeight:'1'}}>←</span> 官方动作</a>
</div>

## 理解策略约定

所有可热插拔的 Microduck 策略共享同一接口：

- **61 维 actor 观测**：48 个本体感知值，加上 13 维命令块 `[twist(3), head_pose(4), body_pose(6)]`。
- **14 维动作输出**，对应激活的舵机关节。
- 未使用的命令槽仍然保留，并用零填充。
- 被动轮子和间隙补偿关节使用 `passive_*` 命名约定，且不得被选为驱动关节。
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
| `0.00–0.25` | 向鞠躬姿态下沉 |
| `0.25–0.55` | 保持鞠躬 |
| `0.55–0.85` | 回到初始姿态 |
| `0.85–1.00` | 稳定直立 |

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

上面的数值只是起点。请在机器人配置中确认实际关节名称和符号方向。

## 构建奖励

一个有用的自定义动作奖励通常组合以下部分：

- 受阶段调节的目标姿态跟踪。
- 任务结果奖励，例如在鞠躬时降低头部。
- 序列末尾附近的直立和恢复奖励。
- 足部接触和横向稳定性项。
- 关节极限、碰撞、动作率和冲击惩罚。

尽可能复用模板奖励以及 `src/mjlab_microduck/tasks/mdp.py` 中的共享函数。只有在所需测量尚不存在时才添加新函数。

:::warning
在分配权重前检查符号约定。已经返回负惩罚的函数通常只在符合项目约定时才使用正权重。检查附近的任务配置，并在 TensorBoard 中确认加权后的度量。
:::

## 注册新任务

在 `src/mjlab_microduck/tasks/__init__.py` 中导入新配置，然后按照现有条目注册一个新的 ID：

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

留意无效接触、生成时的穿透、关节方向错误、立即终止、NaN 值以及不可能实现的目标姿态。

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

一个实用的课程安排是：

1. **动作探索**：简单的生成状态、宽松的姿态奖励、最小扰动。
2. **动作完成**：加强保持和恢复项；添加基于结果的奖励。
3. **鲁棒性**：增加生成多样性、摩擦随机化、外部推力和间隙变体。

示例长跑训练：

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

导出通过验收的 checkpoint：

```bash
uv run --no-sync python3 scripts/export.py \
  Mjlab-Bow-Flat-MicroDuck \
  --checkpoint-file /absolute/path/to/model_XXXX.pt \
  --onnx-file bow.onnx
```

若要添加键盘触发，请扩展 `scripts/infer_policy.py`，复用现有的坐/站、ground-pick、roulade 和踢腿策略切换模式。写入新策略期望的命令槽，并保持 61 维观测布局不变。

## 开发检查清单

- [ ] 观测布局保持为 61 维。
- [ ] 策略输出保持为 14 维。
- [ ] 被动关节已从动作和舵机观测中排除。
- [ ] BAM 启动事件和域随机化在需要的地方保持启用。
- [ ] 任务出现在 `list-envs` 中。
- [ ] 随机策略 Viewer 检查通过。
- [ ] 64 环境冒烟测试通过。
- [ ] 主要任务指标在 TensorBoard 中得到提升。
- [ ] 最终 PT checkpoint 在 MuJoCo 中行为正确。
- [ ] ONNX 使用项目脚本导出，并在机器人部署前完成演练。

<div align="center">
  <a href="/cn/ai_robotics_microduck_rl_on_jetson/" style={{display:'inline-block', padding:'16px 30px', marginTop:'20px', borderRadius:'10px', background:'linear-gradient(135deg, #172b4d, #0b172d)', color:'#fff', fontSize:'18px', fontWeight:'800', textDecoration:'none', boxShadow:'0 10px 26px rgba(23,43,77,.25)'}}>返回 Demo 首页</a>
</div>
