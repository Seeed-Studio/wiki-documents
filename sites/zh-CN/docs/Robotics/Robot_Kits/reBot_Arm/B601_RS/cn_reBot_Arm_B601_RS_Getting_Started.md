---
description: 本指南将帮助您快速上手 reBot Arm B601-RS 机械臂，包括购买选项、组装、校准和软件配置。
title: reBot Arm B601-RS 快速入门
keywords:
  - reBot
  - B601-DM
  - B601-RS
  - 机械臂
  - 机器人
  - Lerobot
  - Pinocchio
  - 6 自由度
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png
slug: /rebot_b601_rs_getting_started
translation:
  skip:
    - zh-CN
last_update:
  date: 2026-05-26
  author: LiuJunjie
createdAt: '2026-05-26'
updatedAt: '2026-06-16'
url: https://wiki.seeedstudio.com/cn/rebot_b601_rs_getting_started/
---

# reBot Arm B601-RS 快速入门

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" />
</div>

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

reBot Arm项目已经在[github](https://github.com/Seeed-Projects/reBot-DevArm)上开源了，本文将带领你快速入门B601-RS，从组装到使用。
本文的内容正在光速赶来，各位敬请期待。

## 第一步：组装机械臂

- 开始组装前，请您务必仔细阅读以下内容。为确保您顺利完成组装并获得完整的动手体验，组装过程中请保持耐心与专注，并时刻遵循以下要点：
  1. 本套件包含大量螺丝与结构件，部分零件外观相近。组装时请耐心核对螺丝规格与零件型号，确认安装方向无误后再进行固定。
  2. 视频为四月初拍摄，后续或许会有零件微调和改动，但是不影响跟随本视频的安装效果，最终零件以出货为准。
  3. 为方便大家拧螺丝和取下螺丝，开源BOM中所选用的是普通螺丝，但是正式出货螺丝涂了防松胶,您也可使用自备的顺手工具或电动螺丝刀（强烈推荐准备好电动螺丝刀）。若使用电动工具，务必将扭力调至中低档(3~6kgf.cm)，避免扭力过大导致螺丝滑丝，造成部件无法取下的不可逆损失。有任何滑丝的可能就立刻更换螺丝或者对准后重新拧，防松螺丝滑丝无法用滑丝取出器取出，会报废整个零件。所以务必小心谨慎。
  4. 组装过程中请务必注意安全，防止夹手、砸伤，儿童请在家长或监护人陪同下完成该项目。





## 第二步：校准机械臂及上手初体验

1. 探索我们的 **MotorBridge** 平台。该平台为一站式综合解决方案，支持电机种类持续扩充，涵盖[达妙电机](https://www.seeedstudio.com/DIP-Servo-Motor-24V-120RPM-Brushless-98-9mm-4P-L56-W56-H46mm-p-6660.html)、[Robstride电机](https://www.seeedstudio.com/Robostride-00-Actuator-p-6664.html)、[高擎电机](https://www.seeedstudio.com/Hightorque-HTDW-4438-30-NE-Gear-Motor-p-6482.html)、[脉塔电机](https://www.seeedstudio.com/Myactuator-X4-P36-Planetary-Actuator-p-6469.html)、Hexfellow 等多款电机，同时兼容 reBot 等持续更新迭代的机械臂产品。平台面向入门用户友好易用，同时也为开发者提供功能完全一致的 Python SDK。

2. 体验专为 reBot 机械臂适配的 MotorBridge 全新功能与细节，包含一键零点校准、参数写入、界面拖拽式电机控制，以及内置模型可视化界面。

3. 本工具全面兼容 **Windows、Ubuntu、macOS** 操作系统。

:::tip
1.强烈建议不要使用虚拟机。虚拟机容易出现环境问题

2.(Beta版)让 agent 来帮助你初始化机械臂，复制以下内容发送给 agent：

```text
请参考 AGENTS.md（https://github.com/Welt-liu/reBot-B601-Agent-Guide/blob/main/zh/AGENTS.md）中的流程，帮助用户完成新机械臂的初始化。
```

  注意：如果你购买的是成品套件，请在写入电机id环节提示agent：我购买的是成品套件，帮我扫描1~7电机是否都在线，不要写入重新写入电机id。

3.agent使用cli命令完成写入电机ID，wiki则是使用web ui交互的方式来完成。两者都可行。

:::

相信你已经跟随视频完成了机械臂组装前期准备工作,接下来开始介绍写入电机ID和校准机械臂。



### 1.安装 Miniforge（建议）（支持 Windows\Ubuntu\macOS\Jetson\树莓派）

1.安装miniforge，创建虚拟环境，避免其他环境包的干扰导致demo运行失败。

Ubuntu\Jetson\树莓派:

```bash
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
```

or macOS:
```bash
curl -L -O "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-MacOSX-$(uname -m).sh"
bash Miniforge3-MacOSX-$(uname -m).sh
```

or windows:

在浏览器中打开 Miniforge 的 Release 页面，找到最新版本的 `Miniforge3-Windows-x86_64.exe` 点击下载：

```text
https://github.com/conda-forge/miniforge/releases
```

2.创建 Python 3.12 版本虚拟环境：

:::tip
  **Git Bash 用户**：如果 `conda` 命令找不到，说明 Git Bash 未加载 conda 环境。需要先初始化：

  ```bash
  # 临时生效（当前终端），<安装路径> 替换为实际路径
  source <安装路径>/etc/profile.d/conda.sh

  # 永久生效（写入 bashrc，执行一次即可）
  echo 'source <安装路径>/etc/profile.d/conda.sh' >> ~/.bashrc
  source ~/.bashrc
  ```

  让 PowerShell 能够自动激活 conda 环境：

  ```bash
  conda init powershell
  ```

:::

```bash
conda create -y -n rebot python=3.12
```

3.激活虚拟环境。**每次打开终端使用 reBot 相关功能时，都需要重新执行该激活命令**：

```bash
conda activate rebot
```

### 2.安装 Motorbridge

激活 reBot 虚拟环境后，执行以下命令安装 motorbridge：

:::tip 提示 macOS 用户注意
如果您在 macOS 上遥操时帧率偏低，可能是沁恒（WCH）CH34x 驱动版本过旧导致。对于 **macOS 10.14 及以上版本**，系统已内置 AppleUSBCHC0M 驱动，您可以先卸载旧版驱动，改用 macOS 内置驱动，通常能有效提升帧率。
:::


```bash
pip install motorbridge
```

### 3.pcan-usb

让 PCAN-USB 设备以 1Mbps 速率工作在 CAN 总线上，供机械臂通信使用

Ubuntu\Jetson\树莓派：

```bash
#套件里是 PCAN-USB，通常应该直接出现 can0 或 can1
sudo modprobe peak_usb
ip -br link

#如果出现 can0，再设置 bitrate
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up
```

or macOS:

libPCBUSB.dylib 无法加载，请先安装 PCBUSB
```zsh
curl -L -o macOS_Library_for_PCANUSB_v0.13.tar.gz \
  https://raw.githubusercontent.com/tianrking/motorbridge/main/third_party/pcan/macos/macOS_Library_for_PCANUSB_v0.13.tar.gz
tar -xzf macOS_Library_for_PCANUSB_v0.13.tar.gz
cd PCBUSB
sudo ./install.sh
```

检查是否就绪
```zsh
# 检查 Python 包和 CLI 是否就绪
python3 -c "import motorbridge; print('motorbridge OK')"
motorbridge-cli --help

# 可选：检查 PCBUSB 运行时是否可加载
python3 -c "import ctypes; ctypes.CDLL('libPCBUSB.dylib'); print('PCBUSB load OK')"
```


or Windows：

请访问 [pcan-usb](https://www.peak-system.com/products/hardware/external-pc-interfaces/pcan-usb/)，安装pcan-usb驱动。

<!-- ### 3.写入电机id

:::tip 成品用户请跳过本步骤
:::

使用螺丝刀将所有电机的线拆下，单独将一个电机接入usb to can模块。

执行下面命令来扫描电机是否命中,id出厂可能是127，

```bash
motorbridge-cli scan --vendor robstride --channel can0 --start-id 126 --end-id 127 --timeout-ms 300
```

确认电机当前 ID 后，执行修改命令（注意，不要同时接入多个电机，会导致全部写入）：

```bash
# 示例：将 ID 127 改为 5
motorbridge-cli id-set --vendor robstride --channel can0 --motor-id 127 --new-motor-id 5
```

重复上述步骤，直到所有的电机id都成功写入，随后将所有电机线插上，执行下面命令来最终确认，如果hit 7颗电机，则成功了。

```bash
motorbridge-cli scan --vendor robstride --channel can0 --start-id 1 --end-id 7 --timeout-ms 300
``` -->


### 4.启动 MotorBridge-gateway写入零点和调试

#### 电机复位前须知

在进行电机参数配置前，请留意以下准备事项与安全规范：

- 自备2个工装夹具（尺寸≥3英寸）以及一台48V、XT30输出开关电源（请选用正规品牌产品，严禁使用劣质电源）。
- 调试与操作过程中，请保持至少1米安全距离。
- 禁止电机热插拔；插拔XT30 2+2接口前必须断开电源。
- 禁止电机超载、超速运行；设备启动前检查线路接线与紧固件；请勿在潮湿、高温、多尘环境下使用。
- 需设置合理的程序参数与急停功能，防止设备失控。
- **请严格遵守以上规范。因违规操作、人为失误造成的一切风险与损失，卖家不承担任何责任。**


#### 写入零点和调试

在浏览器中打开地址 [motorbridge-studio](https://motorbridge.github.io/motorbridge-studio/)，点击帮助选项，根据你的操作系统与所用驱动板复制对应指令，核对 IP 地址与端口号后，在终端中按下回车运行。


```bash
motorbridge-gateway --bind 127.0.0.1:9002  
```

macOS:
```bash
ln -s /usr/local/lib/libPCBUSB.dylib "$CONDA_PREFIX/lib/PCBUSB"


DYLD_LIBRARY_PATH=/usr/local/lib motorbridge-gateway --bind 127.0.0.1:9002 

```


使用请参考视频,在控制机械臂运动之前，需要重新设置一次零点。

<div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?isOutside=true&bvid=BV1MEJV6TELk&p=1" title="Bilibili video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
