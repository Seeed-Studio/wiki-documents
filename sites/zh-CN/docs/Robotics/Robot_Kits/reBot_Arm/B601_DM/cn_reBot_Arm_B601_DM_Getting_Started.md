---
description: 本指南将帮助您快速上手 reBot Arm B601-DM 机械臂，包括购买选项、组装、校准和软件配置。
title: reBot Arm B601-DM 快速入门
keywords:
  - reBot
  - B601-DM
  - 机械臂
  - 机器人
  - Lerobot
  - Pinocchio
  - 6 自由度
# image: 
slug: /rebot_b601_dm_getting_started
translation:
  skip:
    - zh-CN
last_update:
  date: 2026-04-13
  author: LiuJunjie
createdAt: '2026-04-13'
updatedAt: '2026-04-13'
url: https://wiki.seeedstudio.com/cn/rebot_b601_dm_getting_started/
---

# reBot Arm B601-DM 快速入门

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Ubuntu-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Framework-Pinocchio-yellow.svg" alt="Pinocchio" />
</p>

<p align="center">
  <strong>6-DOF Robotic Arm · Multi-Motor Support · Kinematics Solver · Trajectory Planning · Fully Open Source</strong>
</p>


reBot Arm项目已经在[github](https://github.com/Seeed-Projects/reBot-DevArm)上开源了，本文将带领你快速入门B601-DM，从组装到使用。
本文的内容正在光速赶来，各位敬请期待。
## 购买选项

reBot Arm B601-DM 提供多种配置选项，以满足不同用户的需求。

### 选项对比

| 配置 | 本体 | 夹爪 | 电机 | 结构件 | 购买链接 |
|:---|:---:|:---:|:---:|:---:|:---|
| **完整套装** | ✅ | ✅ | ✅ | ✅ |  |
| **仅夹爪** | ❌ | ✅ | ❌ | ❌ |  |
| **仅本体 (结构)** | ✅ | ❌ | ❌ | ✅ |  |
| **仅本体 (电机)** | ✅ | ❌ | ✅ | ❌ |  |


## 第一步：组装机械臂
- 开始组装前，请您务必仔细阅读以下内容。为确保您顺利完成组装并获得完整的动手体验，组装过程中请保持耐心与专注，并时刻遵循以下要点：
  1. 本套件包含大量螺丝与结构件，部分零件外观相近。组装时请耐心核对螺丝规格与零件型号，确认安装方向无误后再进行固定。
  2. 视频为四月初拍摄，后续或许会有零件微调和改动，但是不影响跟随本视频的安装效果，最终零件以出货为准。
  3. 为方便大家拧螺丝和取下螺丝，开源BOM中所选用的是普通螺丝，但是正式出货螺丝涂了防松胶,您也可使用自备的顺手工具或电动螺丝刀（强烈推荐准备好电动螺丝刀）。若使用电动工具，务必将扭力调至中低档(3~6kgf.cm)，避免扭力过大导致螺丝滑丝，造成部件无法取下的不可逆损失。有任何滑丝的可能就立刻更换螺丝或者对准后重新拧，防松螺丝滑丝无法用滑丝取出器取出，会报废整个零件。所以务必小心谨慎。
  4. 组装过程中请务必注意安全，防止夹手、砸伤，儿童请在家长或监护人陪同下完成该项目。

<div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?isOutside=true&aid=116418964097678&bvid=BV1zPdzBEE1R&cid=37577427530&p=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 第二步：写入电机ID及零点

### 电机复位前须知
在进行电机参数配置前，请留意以下准备事项与安全规范：
- 自备2个工装夹具（尺寸≥3英寸）以及一台24V 15A、XT30输出开关电源（请选用正规品牌产品，严禁使用劣质电源）。
- 调试与操作过程中，请保持至少1米安全距离。
- 禁止电机热插拔；插拔XT30 2+2接口前必须断开电源。
- 禁止电机超载、超速运行；设备启动前检查线路接线与紧固件；请勿在潮湿、高温、多尘环境下使用。
- 需设置合理的程序参数与急停功能，防止设备失控。
- **请严格遵守以上规范。因违规操作、人为失误造成的一切风险与损失，卖家不承担任何责任。**

### 准备清单
#### 硬件设备
- [reBot Arm B601 DM 机械臂 × 1](https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html)
- [USB-CAN 转接板 × 1](https://www.seeedstudio.com/DM-CAN-USB-Driver-Borad-p-6706.html)
- [信号电源隔离板 × 1](https://www.seeedstudio.com/XT30-2-2-Power-Separation-Board-p-6707.html)
- 木工夹具 × 2
- USB-C 数据线 × 1
- [24V 15A 电源（XT30 输出）× 1](https://www.seeedstudio.com/AC-DC-Power-Adapter-IEC-60320-C14-XT30-Female-24V-4-5A-1200mm-L190-W92-5-H36mm-p-6764.html)
- [美规电源线](https://www.seeedstudio.com/reServer-AC-US-p-5052.html) \ [欧规电源线](https://www.seeedstudio.com/reServer-AC-EU-p-5051.html)

#### 电脑配置要求
- 双系统个人电脑（Windows + Ubuntu / macOS）

#### 所需软件
- [DM_Tools_v.1.8.0.1.exe（仅支持 Windows 系统）](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM_Tools_v1.8.0.1.exe)

<div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?isOutside=true&aid=116440455775862&bvid=BV1r9d1BuESN&cid=37680973414&p=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 第三步：校准机械臂及上手初体验

相信你已经跟随视频完成了机械臂组装、零点初始化、电机ID配置等全部前期准备工作。现在你可以正式开始体验我们提供的一系列教程与工具。

1. 探索我们的 **MotorBridge** 平台。该平台为一站式综合解决方案，支持电机种类持续扩充，涵盖[达妙电机](https://www.seeedstudio.com/DIP-Servo-Motor-24V-120RPM-Brushless-98-9mm-4P-L56-W56-H46mm-p-6660.html)、[Robstride电机](https://www.seeedstudio.com/Robostride-00-Actuator-p-6664.html)、[高擎电机](https://www.seeedstudio.com/Hightorque-HTDW-4438-30-NE-Gear-Motor-p-6482.html)、[脉塔电机](https://www.seeedstudio.com/Myactuator-X4-P36-Planetary-Actuator-p-6469.html)、Hexfellow 等多款电机，同时兼容 reBot 等持续更新迭代的机械臂产品。平台面向入门用户友好易用，同时也为开发者提供功能完全一致的 Python SDK。

2. 体验专为 reBot 机械臂适配的 MotorBridge 全新功能与细节，包含一键零点校准、参数写入、界面拖拽式电机控制，以及内置模型可视化界面。

3. 本工具全面兼容 **Windows、Ubuntu、macOS** 操作系统。

### 步骤 1：安装 Miniforge（支持 Windows\Ubuntu\macOS\Jetson\树莓派）
```bash
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
```

### 步骤 2：环境配置
创建 Python 3.12 版本虚拟环境：
```
conda create -y -n rebot python=3.12
```

随后激活虚拟环境。**每次打开终端使用 reBot 相关功能时，都需要重新执行该激活命令**：
```bash
conda activate rebot
```

### 步骤 3：安装 motorbridge
:::tip
如果发现电机扫描所有电机都是离线，请安装motorbridge0.2.9
:::

激活 reBot 虚拟环境后，执行以下命令安装 motorbridge：
```bash
pip install motorbridge==0.2.9
```

### 步骤 4：连接机械臂
使用 USB 数据线将机械臂连接至电脑并接通电源后，需要为串口配置 666 权限。
```bash
sudo chmod 666 /dev/ttyACM*
```

### 步骤 5：启动 MotorBridge
在浏览器中打开地址 `https://rebot-devarm.w0x7ce.eu/`，点击帮助选项，根据你的操作系统与所用驱动板复制对应指令，核对 IP 地址与端口号后，在终端中按下回车运行。

以 Windows 系统为例：
```bash
motorbridge-gateway -- --bind 127.0.0.1:9002 --vendor damiao --transport dm-serial --serial-port COM3 --serial-baud 921600 --model 4340P --motor-id 0x01 --feedback-id 0x11 --dt-ms 20
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/motorbridge_help.png" />
</div>

更多功能可以从我们视频中学习。

<div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?isOutside=true&aid=116440455775355&bvid=BV1r9d1BuE6w&cid=37680974119&p=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
