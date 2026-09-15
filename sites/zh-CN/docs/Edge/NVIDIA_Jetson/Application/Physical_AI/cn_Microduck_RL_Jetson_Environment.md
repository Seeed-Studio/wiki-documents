---
description: 准备 JetPack 7.2，并在 Jetson Orin NX 上部署支持 CUDA 的 Microduck 强化学习环境。
title: 在 Jetson 上部署 Microduck 强化学习环境
image: https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_jetson_rl_cover.png
slug: /ai_robotics_microduck_rl_jetson_environment
sku: 114110312, 100006184
last_update:
  date: 09/05/2026
  author: Dayu
createdAt: '2026-09-04'
---

# 在 Jetson 上部署 Microduck 强化学习环境

本章节将准备 Jetson 系统、安装项目环境、说明目录结构，并验证 PPO 训练可以在 CUDA 上执行。

<div style={{display:'flex', gap:'12px', flexWrap:'wrap', margin:'18px 0 30px'}}>
  <a href="/cn/ai_robotics_microduck_rl_on_jetson/" style={{display:'inline-flex', alignItems:'center', gap:'10px', padding:'9px 16px 9px 10px', borderRadius:'9px', background:'#172b4d', color:'#fff', fontWeight:'700', textDecoration:'none'}}><span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'28px', height:'28px', borderRadius:'50%', background:'rgba(255,255,255,.2)', fontSize:'21px', lineHeight:'1'}}>←</span> Demo 首页</a>
  <a href="/cn/ai_robotics_microduck_rl_official_policies/" style={{display:'inline-flex', alignItems:'center', gap:'10px', padding:'9px 10px 9px 16px', borderRadius:'9px', background:'#00a86b', color:'#fff', fontWeight:'700', textDecoration:'none'}}>下一步：官方动作 <span style={{display:'inline-flex', alignItems:'center', justifyContent:'center', width:'28px', height:'28px', borderRadius:'50%', background:'rgba(255,255,255,.22)', fontSize:'21px', lineHeight:'1'}}>➜</span></a>
</div>

## 硬件与软件

本演示已在以下平台上完成验证：

| 项目 | 版本 |
|---|---|
| 设备 | 搭载 Jetson Orin NX 16GB 的 Seeed reComputer |
| 操作系统 | Ubuntu 24.04 LTS，aarch64 |
| JetPack / L4T | JetPack 7.2 / L4T R39.2 |
| 系统 CUDA | 13.2 |
| Python | 3.12 |
| PyTorch | 2.9.1+cu130 |
| MuJoCo | 3.10.0 |
| Warp | 1.12.0 |

请使用至少有 25GB 可用空间的 NVMe 存储。建议配备主动散热、稳定的电源以及可靠的网络连接。

:::warning
请不要自行替换 JetPack 提供的 CUDA 驱动或 L4T 软件包。Python 项目被隔离在 `.venv` 中，而系统 GPU 软件栈仍由 JetPack 管理。
:::

## 项目目录

```text
~/microduck-jetson/
├── deploy_microduck_jetson.sh
├── microduck_rl/
│   ├── src/mjlab_microduck/tasks/
│   ├── scripts/
│   ├── pretrained/pollen-robotics/
│   ├── models/checkpoints/
│   └── logs/rsl_rl/
├── microduck_jetson_startup.md
├── microduck_jetson_training_guide.md
└── microduck_custom_action_training.md
```

`.venv` 目录是在 Jetson 本地创建的，刻意未包含在 Git 仓库中。

## 克隆仓库

```bash
mkdir -p ~/microduck-jetson
cd ~/microduck-jetson

git clone -b develop https://github.com/jjjadand/microduck_rl.git
cd microduck_rl
```

## 运行部署脚本

```bash
cd ~/microduck-jetson/microduck_rl

SUDO_PASSWORD=<JETSON_PASSWORD> \
TARGET_DIR=$HOME/microduck-jetson/microduck_rl \
bash deploy_microduck_jetson.sh
```

该脚本会安装构建与可视化依赖、安装 `uv`、创建 Python 3.12 `.venv`、同步锁定的项目依赖、安装兼容的 CUDA PyTorch wheel，并执行 CUDA 验证。

:::note
通过环境变量传递密码对于这种可复现实验环境来说很方便。对于共享或生产设备，请先审阅脚本，并改为以交互方式运行需要特权的命令。
:::

## 进入环境

所有项目命令都必须在仓库根目录下运行：

```bash
cd ~/microduck-jetson/microduck_rl
export MUJOCO_GL=egl
```

在本指南中的命令请使用 `uv run --no-sync`。这可以防止意外的依赖重新同步覆盖 Jetson 上的 CUDA PyTorch 安装。

## 验证 CUDA

```bash
uv run --no-sync python3 - <<'PY'
import torch

print("PyTorch:", torch.__version__)
print("CUDA runtime:", torch.version.cuda)
print("CUDA available:", torch.cuda.is_available())
print("GPU:", torch.cuda.get_device_name(0))

left = torch.randn(512, 512, device="cuda")
right = torch.randn(512, 512, device="cuda")
result = left @ right
torch.cuda.synchronize()
print("CUDA matmul:", result.device)
PY
```

预期结果包括 `CUDA available: True`、一个 Orin GPU 名称，以及 `CUDA matmul: cuda:0`。

## 运行训练冒烟测试

```bash
uv run --no-sync train Mjlab-Velocity-Flat-MicroDuck \
  --env.scene.num-envs 64 \
  --agent.logger tensorboard \
  --agent.max_iterations 5
```

成功运行后，会在 `logs/rsl_rl/velocity/` 下创建一个目录，其中包含配置文件、TensorBoard 事件以及一个或多个 `.pt` 检查点。

当 MuJoCo 和训练管理器启动时，终端会打印当前启用的终止条件、奖励、课程、actor 和 critic 配置：

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/micro_duck-jetson/start-mujoco.png" alt="Microduck MuJoCo 和训练管理器在终端中启动" />
</div>

在开始收集 rollout 之后，每次学习迭代都会报告吞吐量、奖励项、episode 长度、课程值以及终止统计信息：

<div align="center">
  <img width="900" src="https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_training.png" alt="在 Jetson 上 Microduck PPO 训练迭代指标" />
</div>

## 运行 4096 个并行训练环境

在本演示使用的完整训练运行中，后端会并行模拟**4096 个独立的 Microduck 环境**：

```bash
uv run --no-sync train Mjlab-Velocity-Flat-MicroDuck \
  --env.scene.num-envs 4096 \
  --agent.logger tensorboard
```

在 4096 环境训练进程运行期间，`jtop` 会显示 GPU 负载和设备状态：

<div align="center">
  <img width="760" src="https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_train_jtop.png" alt="在训练 4096 个 Microduck 环境时 Jetson 的 jtop 输出" />
</div>

如果内存不足，可将环境数量依次降低为 `4096 → 2048 → 1024 → 512`。

## 可视化训练环境

**后端仍然训练全部 4096 个环境**。Viewer 设置只控制用于检查的机器人渲染数量，并不会减少后端训练批次，除非修改 `--env.scene.num-envs`。

### 渲染一个 Microduck

在训练过程中渲染单个机器人，是检查姿态、接触和步态最清晰的方式：

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_env_one.png" alt="在后端训练 4096 个环境时可视化一个 Microduck" />
</div>

### 渲染多个 Microduck

渲染多个机器人可以直观展示并行环境的概念。即使 Viewer 中只显示了一个子集，完整的后端运行仍然包含 4096 个环境：

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/micro_duck-jetson/microduck_env-num_many.png" alt="在后端训练 4096 个环境时可视化多个 Microduck" />
</div>

Viewer 主要用于短时间的检查运行。长时间训练通常使用无头 EGL 渲染，以避免持续绘制带来的开销。

## 可选性能设置

在选择电源模式之前，先检查支持的电源模式：

```bash
sudo nvpmodel -q
sudo nvpmodel
```

在训练过程中监控设备状态：

```bash
tegrastats
```

不要从其他 Jetson 型号上直接复制电源模式编号。请为当前设备选择一个受支持的高性能模式。

## 下一步

<div align="center">
  <a href="/cn/ai_robotics_microduck_rl_official_policies/" style={{display:'inline-block', padding:'16px 30px', borderRadius:'10px', background:'linear-gradient(135deg, #00a86b, #007c55)', color:'#fff', fontSize:'18px', fontWeight:'800', textDecoration:'none', boxShadow:'0 10px 26px rgba(0,168,107,.25)'}}>训练并运行官方动作 →</a>
</div>
