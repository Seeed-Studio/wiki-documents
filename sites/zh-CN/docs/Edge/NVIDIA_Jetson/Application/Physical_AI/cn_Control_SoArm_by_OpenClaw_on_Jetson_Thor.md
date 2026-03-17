---
description: 本文档展示如何在 Jetson Thor 上结合 OpenClaw 和 LeRobot 控制 SO-Arm。
title: 在 Jetson Thor 上通过 OpenClaw 控制 SO-Arm
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/openclaw/soarm_claw.webp
slug: /ai_robotics_control_soarm_by_openclaw_on_jetson_thor
sku: 100060965 | 100046482
last_update:
  date: 03/09/2026
  author: youjiang
---

# 在 Jetson Thor 上通过 OpenClaw 控制 SO-Arm

## 介绍

本文档解释如何在 Jetson Thor 上结合 OpenClaw 和 LeRobot，通过本地 AI 智能体控制 SO-Arm。

**NVIDIA Jetson AGX Thor** 是一款为机器人和物理 AI 工作负载设计的高性能边缘 AI 平台，为感知、规划和控制提供强大的本地算力。

**SO-Arm** 是一个开源、低成本的机械臂平台（SO-ARM100/SO-ARM101），广泛用于具身智能实验、远程操作以及操作任务开发。

**OpenClaw** 是一个可以编排本地工具和模型的 AI 智能体框架。在本项目中，OpenClaw 用作高层控制接口，而 LeRobot 为 SO-Arm 提供底层电机通信和标定工具。

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/openclaw/soarm_claw.png" />
</div>

:::note
在本指南中，OpenClaw 负责智能体规划和任务编排，而 SO-Arm 的运动执行由 LeRobot 负责。
:::

## 目录

1. [硬件准备](#硬件准备)
2. [在 Jetson Thor 上进行系统设置](#在-jetson-thor-上进行系统设置)
3. [安装 Ollama 并运行本地 LLM](#安装-ollama-并运行本地-llm)
4. [在 Jetson Thor 上安装 OpenClaw](#在-jetson-thor-上安装-openclaw)
5. [连接并标定 SO-Arm](#连接并标定-so-arm)
6. [运行控制演示](#运行控制演示)
7. [参考资料](#参考资料)

## 硬件准备

### 设备清单

- 1x NVIDIA® Jetson AGX Thor™ 开发套件
- 1x SO-ARM101 低成本 AI 机械臂

<div class="table-center">
<table style={{ textAlign: 'center' }}>
    <tr>
        <th> NVIDIA® Jetson AGX Thor™ Developer Kit </th>
        <th> SO-ARM101 Low-Cost AI Arm </th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-kit-3.png" style={{width:400, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-100046482-so-arm-101-assembled-kit-pro.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-Developer-Kit-p-9965.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/SO-ARM-101-Assembled-Kit-Pro-p-6691.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>
</div>

### 接线与连接

- 通过 USB 将 SO-Arm 控制板连接到 Thor。
- 将匹配的直流电源适配器连接到 SO-Arm 控制板。
- 先给 Thor 上电，然后给机械臂控制板上电。

### 上电检查清单

- Thor 正常启动且网络可用。
- SO-Arm 控制板指示灯点亮。
- 通过 USB 连接后出现串口设备。

```bash
ls /dev/ttyACM*
```

如果在终端输出中检测到串口节点，则说明硬件连接正确。

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/openclaw/check_serial.png" />
</div>

## 在 Jetson Thor 上进行系统设置

### 更新系统软件包

```bash
sudo apt update
sudo apt install -y nvidia-jetpack git curl ffmpeg python3-pip
python3 -m pip install -U pip
```

### 安装核心依赖

安装 Miniconda（推荐）：

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
chmod +x Miniconda3-latest-Linux-aarch64.sh
./Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
```

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/openclaw/conda.png" />
</div>

创建 LeRobot 环境：

```bash
conda create -y -n lerobot python=3.10
conda activate lerobot
pip install 'lerobot[feetech]'
pip uninstall torch torchvision
pip install torch torchvision --index-url https://pypi.jetson-ai-lab.io
```

在 LeRobot 环境中安装 Pinocchio：

```bash
conda install mamba -y
mamba install -c conda-forge pinocchio pinocchio-python libpinocchio -y
```

### 验证 CUDA 和外设设备

```bash
python -c "import torch; print(torch.cuda.is_available())"
lerobot-find-port
```

预期结果：

- `torch.cuda.is_available()` 输出 `True`
- 检测到机械臂串口（例如 `/dev/ttyACM0`）

## 安装 Ollama 并运行本地 LLM

安装 Ollama：

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

拉取模型：

```bash
ollama pull qwen3.5:35b
```

:::info
本指南以 `qwen3.5:35b` 为示例。你可以根据性能和内存限制替换为其他 Ollama 模型。
:::

## 在 Jetson Thor 上安装 OpenClaw

### 安装 OpenClaw

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

### 配置运行参数

编辑 `~/.openclaw/openclaw.json`，并将 Ollama 设置为默认模型提供方：

<details>

<summary> openclaw.json </summary>

```json
{
  "agents": {
    "defaults": {
      "compaction": {
        "mode": "safeguard"
      },
      "maxConcurrent": 4,
      "model": {
        "primary": "ollama/qwen3.5:35b"
      },
      "subagents": {
        "maxConcurrent": 8
      },
      "workspace": "/home/seeed/.openclaw/workspace"
    },
    "list": [
      {
        "id": "main",
        "tools": {
          "profile": "full"
        }
      }
    ]
  },
  "commands": {
    "native": "auto",
    "nativeSkills": "auto",
    "ownerDisplay": "raw",
    "restart": true
  },
  "gateway": {
    "auth": {
      "mode": "token",
      "token": "98aefed421e9a506a3174dab0575fd3cc36c9d15b856a894"
    },
    "bind": "loopback",
    "mode": "local",
    "nodes": {
      "denyCommands": [
        "camera.snap",
        "camera.clip",
        "screen.record",
        "contacts.add",
        "calendar.add",
        "reminders.add",
        "sms.send"
      ]
    },
    "port": 18789,
    "tailscale": {
      "mode": "off",
      "resetOnExit": false
    }
  },
  "messages": {
    "ackReactionScope": "group-mentions"
  },
  "meta": {
    "lastTouchedAt": "2026-03-10T06:45:16.014Z",
    "lastTouchedVersion": "2026.3.8"
  },
  "models": {
    "providers": {
      "ollama": {
        "api": "ollama",
        "apiKey": "ollama-local",
        "baseUrl": "http://127.0.0.1:11434",
        "models": [
          {
            "contextWindow": 262144,
            "cost": {
              "cacheRead": 0,
              "cacheWrite": 0,
              "input": 0,
              "output": 0
            },
            "id": "qwen3.5:35b",
            "input": [
              "text",
              "image"
            ],
            "name": "qwen3.5:35b",
            "reasoning": true
          },
          {
            "contextWindow": 262144,
            "cost": {
              "cacheRead": 0,
              "cacheWrite": 0,
              "input": 0,
              "output": 0
            },
            "id": "qwen3.5",
            "input": [
              "text",
              "image"
            ],
            "name": "qwen3.5",
            "reasoning": true
          }
        ]
      }
    }
  },
  "session": {
    "dmScope": "per-channel-peer"
  },
  "tools": {
    "profile": "coding"
  },
  "wizard": {
    "lastRunAt": "2026-03-10T02:17:28.382Z",
    "lastRunCommand": "onboard",
    "lastRunMode": "local",
    "lastRunVersion": "2026.3.8"
  }
}

```
</details>

:::note
可选：你也可以直接使用 Ollama 提供的脚本快速设置 OpenClaw 配置文件。
`ollama launch openclaw --model qwen3.5`
:::

### 更多配置

安装 SO-Arm 控制技能：

- 下载 [soarm-control 技能](https://clawhub.ai/yuyoujiang/soarm-control)
- 将其解压到 `~/.openclaw/workspace/skills`

准备机器人描述文件：

- 下载 [SO-ARM101 URDF](https://github.com/TheRobotStudio/SO-ARM100/blob/main/Simulation/SO101/so101_new_calib.urdf)
- 将其移动到 `~/.openclaw/workspace/skills/soarm-control/references`

[可选] 添加检测模型： 
- 参考[这里](https://wiki.seeedstudio.com/cn/How_to_Train_and_Deploy_YOLOv8_on_reComputer/)训练一个检测模型（YoloV11n）
- 将检测模型（`best.pt`）移动到 `~/.openclaw/workspace/skills/soarm-control/scripts`


重启 OpenClaw 网关：

```bash
openclaw gateway restart
```

打开 WebUI：

```text
http://127.0.0.1:18789/wiki
```

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/openclaw/webui.png" />
</div>

## 连接并标定 SO-Arm

### 串口权限与检测

```bash
conda activate lerobot
lerobot-find-port
sudo chmod 666 /dev/ttyACM*
```

### 初始标定

标定从动机械臂：

```bash
lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=openclaw_soarm
```

标定文件保存在：

`~/.cache/huggingface/lerobot/calibration/`

:::note
完整的标定流程请参考：
[SO-Arm in LeRobot - Calibrate](https://wiki.seeedstudio.com/cn/lerobot_so100m_new/#calibrate)
:::

## 运行控制演示

### 启动后端服务

确保 OpenClaw 和 LeRobot 环境已就绪：

```bash
openclaw gateway restart

conda activate lerobot
cd ~/.openclaw/workspace/skills/soarm-control 
bash scripts/start_server.sh &
```

### 执行基础运动任务

在 OpenClaw WebUI 中输入机器人控制指令。OpenClaw 会解析你的提示词，并调用已安装的 `soarm-control` 技能驱动机械臂移动到目标位置。

<div class="video-container">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/T_uh1N8Fxe4" title="Control SoArm Pick Up by OpenClaw on Jetson Thor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 参考资料

- https://docs.openclaw.ai/
- https://wiki.seeedstudio.com/cn/local_openclaw_on_recomputer_jetson/
- https://unstabledemos.com/tutorials/openclaw-orin-nano/
- https://wiki.seeedstudio.com/cn/lerobot_so100m_new/
- https://github.com/huggingface/lerobot
- https://github.com/TheRobotStudio/SO-ARM100

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
