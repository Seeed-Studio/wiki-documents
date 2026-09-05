---
description: 训练一个官方 Microduck 任务，可视化 PT 检查点，并在 Jetson 上的 MuJoCo 中运行键盘控制的多策略 ONNX 推理。
title: 训练并运行官方 Microduck 动作
image: https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_jetson_rl_cover.png
slug: /ai_robotics_microduck_rl_official_policies
sku: 114110312, 100006184
last_update:
  date: 09/05/2026
  author: Dayu
createdAt: '2026-09-04'
---

# 训练并运行官方 Microduck 动作

本章涵盖最短的训练与推理路径：了解可用任务、训练一个官方任务、可视化 `.pt` 检查点、运行提供的 ONNX 策略，并使用键盘控制仿真机器人。

<div style={{display:'flex', gap:'12px', flexWrap:'wrap', margin:'18px 0 30px'}}>
  <a href="/cn/ai_robotics_microduck_rl_on_jetson/" style={{display:'inline-flex', alignItems:'center', gap:'10px', padding:'9px 16px 9px 10px', borderRadius:'9px', background:'#172b4d', color:'#fff', fontWeight:'700', textDecoration:'none'}}><span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'28px', height:'28px', borderRadius:'50%', background:'rgba(255,255,255,.2)', fontSize:'21px', lineHeight:'1'}}>←</span> Demo 首页</a>
  <a href="/cn/ai_robotics_microduck_rl_custom_motion_training/" style={{display:'inline-flex', alignItems:'center', gap:'10px', padding:'9px 10px 9px 16px', borderRadius:'9px', background:'#3182ce', color:'#fff', fontWeight:'700', textDecoration:'none'}}>下一步：自定义动作 <span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'28px', height:'28px', borderRadius:'50%', background:'rgba(255,255,255,.22)', fontSize:'21px', lineHeight:'1'}}>➜</span></a>
</div>

## 可用任务族

```bash
cd ~/microduck-jetson/microduck_rl
uv run --no-sync list-envs | grep MicroDuck
```

| 动作 | 任务 ID |
|---|---|
| 行走 | `Mjlab-Velocity-Flat-MicroDuck` |
| 行走与跌倒恢复 | `Mjlab-VelStand-Flat-MicroDuck` |
| 从地面站起 | `Mjlab-StandUp-Flat-MicroDuck` |
| 坐下与站起 | `Mjlab-SitStand-Flat-MicroDuck` |
| 地面拾取 | `Mjlab-GroundPick-Flat-MicroDuck` |
| 前滚翻 | `Mjlab-Roulade-Flat-MicroDuck` |
| 踢球 | `Mjlab-BallKick-Flat-MicroDuck` |
| 滚轮移动 | `Mjlab-Velocity-Flat-MicroDuck-Rollers` |

## 训练行走策略

在每次长时间训练前，先运行五次迭代的冒烟测试：

```bash
cd ~/microduck-jetson/microduck_rl
export MUJOCO_GL=egl

uv run --no-sync train Mjlab-Velocity-Flat-MicroDuck \
  --env.scene.num-envs 64 \
  --agent.logger tensorboard \
  --agent.max_iterations 5
```

用于更长时间的训练：

```bash
uv run --no-sync train Mjlab-Velocity-Flat-MicroDuck \
  --env.scene.num-envs 2048 \
  --agent.logger tensorboard
```

仅在内存和温度允许时再增加环境数量。一个实用的回退序列是 `4096 → 2048 → 1024 → 512`。

## 可视化 PT 检查点

找到一个检查点：

```bash
find logs/rsl_rl -type f -name 'model_*.pt' | sort
```

### 通过 SSH 的浏览器查看器

```bash
export MUJOCO_GL=egl

uv run --no-sync play Mjlab-Velocity-Flat-MicroDuck \
  --checkpoint-file /absolute/path/to/model_XXXX.pt \
  --num-envs 1 \
  --viewer viser
```

在同一网络中的电脑上打开 `http://<JETSON_IP>:8080`。

### 在 Jetson 桌面上本地查看

```bash
export DISPLAY=:0
export MUJOCO_GL=glfw

uv run --no-sync play Mjlab-Velocity-Flat-MicroDuck \
  --checkpoint-file /absolute/path/to/model_XXXX.pt \
  --num-envs 1 \
  --viewer native
```

## 运行官方多策略 ONNX 演示

仓库在 `pretrained/pollen-robotics/` 中包含九个官方 ONNX 策略。

```bash
cd ~/microduck-jetson/microduck_rl
export DISPLAY=:0
export MUJOCO_GL=glfw

uv run --no-sync python3 scripts/infer_policy.py \
  --walking pretrained/pollen-robotics/alpha_walking.onnx \
  --standing pretrained/pollen-robotics/alpha_stand.onnx \
  --sitstand pretrained/pollen-robotics/alpha_sitstand.onnx \
  --ground-pick pretrained/pollen-robotics/alpha_ground_pick.onnx \
  --roulade pretrained/pollen-robotics/roulade.onnx \
  --kick-left pretrained/pollen-robotics/ball_kick_left.onnx \
  --kick-right pretrained/pollen-robotics/ball_kick_right.onnx \
  --new-cmd-obs
```

### 键盘控制

| 按键 | 命令 |
|---|---|
| 方向键 | 前进、后退和横向速度 |
| `A` / `E` | 左转 / 右转 |
| `G` | 地面拾取行为 |
| `Y` | 坐下 / 站起切换 |
| `R` | 前滚翻 |
| `K` / `L` | 左 / 右脚踢球 |
| `Space` | 清除速度命令 |
| `Q` | 退出 |

## 推理结果

下列 GIF 展示了直接从 Jetson 上的 MuJoCo 捕获的 ONNX 推理结果。

### 行走

<div align="center">
  <img width="900" src="https://files.seeedstudio.com/wiki/micro_duck-jetson/walking-loop.gif" alt="Microduck walking policy inference loop in MuJoCo" />
</div>

行走策略会持续跟踪键盘的速度和转向命令。

### 滚动

<div align="center">
  <img width="900" src="https://files.seeedstudio.com/wiki/micro_duck-jetson/rolling.gif" alt="Microduck rolling policy inference in MuJoCo" />
</div>

按下 `R` 切换到前滚翻策略。

### 踢球

<div align="center">
  <img width="900" src="https://files.seeedstudio.com/wiki/micro_duck-jetson/kick.gif" alt="Microduck keyboard-triggered ball-kick policy inference in MuJoCo" />
</div>

在球场景中按下 `K` 或 `L` 以触发左脚或右脚踢球策略。

## PT 和 ONNX 的用途不同

- `.pt` 检查点包含 actor、critic、优化器、归一化器以及训练状态。使用它们来恢复训练和进行 `play` 评估。
- `.onnx` 包含可部署的推理计算图。官方 ONNX 文件不包含 PPO 训练状态，且无法转换回可恢复的检查点。
- `models/checkpoints/` 下的 PT 文件是随本演示提供的 Jetson 行走训练结果；它们不是 Pollen Robotics 官方发布的 PT 文件。

## 导出你自己的 ONNX

```bash
uv run --no-sync python3 scripts/export.py \
  Mjlab-Velocity-Flat-MicroDuck \
  --checkpoint-file /absolute/path/to/model_XXXX.pt \
  --onnx-file walking_custom.onnx
```

始终使用 `scripts/export.py`。项目导出器会将观测归一化器烘焙进 ONNX 计算图中，这是正确运行时行为所必需的。

## 下一步

<div align="center">
  <a href="/cn/ai_robotics_microduck_rl_custom_motion_training/" style={{display:'inline-block', padding:'16px 30px', borderRadius:'10px', background:'linear-gradient(135deg, #3182ce, #205493)', color:'#fff', fontSize:'18px', fontWeight:'800', textDecoration:'none', boxShadow:'0 10px 26px rgba(49,130,206,.25)'}}>创建自定义动作 →</a>
</div>
