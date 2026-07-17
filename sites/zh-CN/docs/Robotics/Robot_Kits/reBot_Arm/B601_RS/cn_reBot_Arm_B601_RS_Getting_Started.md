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


## 关于电源

  1. 机械臂在发货时并未配备电源/默认情况下不带电源。您可自行连接电池，或选购一款我们开源的[48V 12.5A MeanWell电源](https://www.seeedstudio.com/Power-Adapter-Kit-for-reBot-Arm-B601-RS-p-6873.html)电源适配器, 或者在[京东购买](https://item.jd.com/10161209537223.html?pcdk=XmL78Hf_3R95Ueqck5LtElx9qJy6oC0PjQU1dV0F2rEG5XTr6Xarc8us1UFQm_G2.3z6a.aI3x&spmTag=YTAyNDAuYjAwMjQ5My5jMDAwMDQwMjcuMiUyM3NrdV9jYXJkJTQwMTc4MTc2NzUwNjU1NyUyMzE3Nzk3NjA2MTA2MzA2NTcwNzkwNDUlMjM5NDcyNzI1NzE),切勿使用杂牌和不安全的渠道购买电源，造成风险后果均由个人承担。

    如果你的家庭电压是220V，请把电源侧面拨码调至230V，如果你的家庭电压是110V，请把你电源的拨码调至115V。
| **220V** | **110V** |
|:---:|:---:|
| <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/230V.jpg" width="300" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/115V.jpg" width="300" /> |

  <div align="center">
    <img width={800}
    src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100054289-gallery-6.jpg" />
</div>

  2. 选择我们开源的24V14.6AMeanWell电源外壳进行自组装，文字步骤和BOM在[github仓库](https://github.com/Seeed-Projects/reBot-DevArm/blob/main/hardware/reBot_B601_RS/README_zh.md#%E5%85%B3%E4%BA%8E%E7%94%B5%E6%BA%90)中开源（只推荐有过相关电源组装经验的开发者使用）
  组装参考视频：
  
  <div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?isOutside=true&aid=116793196675417&bvid=BV15i7K69EnQ&cid=39314066536&p=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>



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
1.已验证虚拟机的性能不足以支撑 demo 运行且存在配置问题，建议优先使用 ubuntu 物理机来控制机械臂

2.(Beta版)让 agent 来帮助你初始化机械臂，复制以下内容发送给 agent：

```text
请参考 AGENTS.md（https://github.com/Welt-liu/reBot-B601-Agent-Guide/blob/main/zh/AGENTS.md）中的流程，帮助用户完成新机械臂的初始化。
```

  注意：如果你购买的是成品套件，请在写入电机id环节提示agent：我购买的是成品套件，帮我扫描1~7电机是否都在线，不要写入重新写入电机id。

3.agent使用cli命令完成写入电机ID，wiki则是使用web ui交互的方式来完成。两者都可行。

:::

相信你已经跟随视频完成了机械臂组装前期准备工作,接下来开始介绍写入电机ID和校准机械臂的步骤。


使用请参考视频和文字教程,在控制机械臂运动之前，需要重新设置一次零点。

<div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?isOutside=true&bvid=BV1MEJV6TELk&p=1" title="Bilibili video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>


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

```bash
curl -L -o macOS_Library_for_PCANUSB_v0.13.tar.gz \
  https://raw.githubusercontent.com/tianrking/motorbridge/main/third_party/pcan/macos/macOS_Library_for_PCANUSB_v0.13.tar.gz
tar -xzf macOS_Library_for_PCANUSB_v0.13.tar.gz
cd PCBUSB
sudo ./install.sh
```

配置 `DYLD_LIBRARY_PATH`，确保 motorbridge-gateway 运行时能找到 PCBUSB 库。在 conda 环境中创建激活脚本，每次 `conda activate rebot` 自动生效：

```bash
mkdir -p "$CONDA_PREFIX/etc/conda/activate.d"
cat > "$CONDA_PREFIX/etc/conda/activate.d/env_vars.sh" << 'EOF'
export DYLD_LIBRARY_PATH="/usr/local/lib${DYLD_LIBRARY_PATH:+:$DYLD_LIBRARY_PATH}"
EOF

echo $DYLD_LIBRARY_PATH
```

检查是否就绪
```bash
# 检查 Python 包和 CLI 是否就绪
python3 -c "import motorbridge; print('motorbridge OK')"
motorbridge-cli --help

# 可选：检查 PCBUSB 运行时是否可加载
python3 -c "import ctypes; ctypes.CDLL('libPCBUSB.dylib'); print('PCBUSB load OK')"
```


or Windows：

请访问 [pcan-usb](https://www.peak-system.com/products/hardware/external-pc-interfaces/pcan-usb/)，安装pcan-usb驱动。

:::tip 注意！！！
安装驱动后，如果设备管理器中没有识别到 **PCAN-USB** 设备，请展开以下内容，下载 PCAN 固件并按照步骤进行修复。
:::

<details>

<summary>PCAN 固件下载与驱动修复步骤</summary>

如果安装驱动后仍然无法使用 PCAN-USB，并且设备管理器中没有识别到如下图所示的 **PCAN-USB** 设备，请下载 PCAN 固件压缩包，并按照以下步骤安装 DFU 驱动和重新烧录固件。

![设备管理器识别到 PCAN-USB](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/01-pcan-usb-device.png)


> 📦 <a href="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/USB2CAN.zip" download="USB2CAN.zip">点击下载 USB2CAN.zip</a>

### 安装 DFU 驱动

1. 解压安装包，得到 `Dfu tool` 和 `pcan` 两个文件夹。

![压缩包解压后的 Dfu tool 和 pcan 文件夹](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/02-extracted-folders.png)

2. 打开 `Dfu tool` 文件夹，运行其中的 `.exe` 安装程序。安装完成后，请记录驱动所在位置，例如：

```text
C:\Program Files (x86)\STMicroelectronics\Software\DfuSe v3.0.6\Bin\Driver
```

![DfuSe 工具安装程序及安装位置](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/03-dfuse-install-location.png)

3. 将 USB2CAN 模块上的拨码开关切换到 **BOOT**，然后连接电脑。

![USB2CAN 模块拨码开关切换到 BOOT](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/04-usb2can-boot-switch.jpg)

4. 打开 **设备管理器**，找到 **其他设备 → STM32 BOOTLOADER**，右键选择 **更新驱动程序**，然后选择 **浏览我的电脑以查找驱动程序**。

![设备管理器中的 STM32 BOOTLOADER](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/05-stm32-bootloader.png)

![更新驱动程序并选择"浏览我的电脑以查找驱动程序"](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/06-update-driver.png)

5. 将此前记录的 DfuSeDemo 驱动位置粘贴到路径框内，勾选 **包括子文件夹**，然后点击 **下一步**。

![填写 DfuSeDemo 驱动路径并勾选"包括子文件夹"](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/07-driver-path.png)

6. 拔出并重新插入 USB2CAN。此时，如果设备被识别为 **STM Device in DFU Mode**，则表示驱动更新成功。

7. 打开 **DfuSeDemo** 软件，确认软件能够正确识别 USB2CAN 模块。

![DfuSeDemo 正确识别 USB2CAN 模块](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/08-dfuse-detects-usb2can.png)

### 烧录 PCAN 固件

1. 在 DfuSeDemo 中点击 **Upgrade or Verify Action → Choose...**，选择解压后 `pcan` 文件夹内的固件。
2. 点击 **Upgrade**，在弹窗中点击 **是**，等待固件烧录完成，然后退出 DfuSeDemo。

![在 DfuSeDemo 中选择 pcan 固件并点击 Upgrade](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/09-select-pcan-firmware.png)

![固件烧录完成提示](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/10-firmware-upgrade-complete.png)

### 恢复并验证设备

拔掉 USB2CAN，将拨码开关切换到 **120R**，然后重新连接电脑。打开设备管理器，如果设备已被识别为 **PCAN-USB**，则表示问题已修复，可以继续按照本教程使用。

![设备管理器中成功识别到 PCAN-USB](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/11-pcan-usb-recognized.png)

</details>


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
motorbridge-gateway --bind 127.0.0.1:9002 
```

or


```bash
DYLD_LIBRARY_PATH=/usr/local/lib motorbridge-gateway --bind 127.0.0.1:9002 
```
