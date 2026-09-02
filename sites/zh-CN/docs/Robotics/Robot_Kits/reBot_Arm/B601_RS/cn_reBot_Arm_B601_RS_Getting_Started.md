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
  skip: [zh-CN]
last_update:
  date: 2026-08-17
  author: LiuJunjie
createdAt: '2026-05-26'
updatedAt: '2026-08-17'
url: https://wiki.seeedstudio.com/cn/rebot_b601_rs_getting_started/
---
import '/src/css/rebot-wiki-style.css';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RebotRsDocNav from '@site/src/components/robotics/RebotRsDocNav';

# reBot Arm B601-RS 快速入门

<RebotRsDocNav />

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://detail.tmall.com/item.htm?id=1057521963559" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
</a></div>

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


## 风险告知及免责声明

<div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", gap: "16px" }}>
    <img style={{ width: "calc(50% - 8px)", maxWidth: "420px", height: "auto" }}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/Chinese%20version%20statement.png" />
    <img style={{ width: "calc(50% - 8px)", maxWidth: "420px", height: "auto" }}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/English%20Version%20Statement.png" />
</div>

reBot Arm项目已经在[github](https://github.com/Seeed-Projects/reBot-DevArm)上开源了，本文将带领你快速入门B601-RS，从组装到使用。


## 关于电源

  1. 机械臂在发货时并未配备电源/默认情况下不带电源。您可自行连接电池，或选购一款我们开源的[48V 12.5A MeanWell电源](https://www.seeedstudio.com/Power-Adapter-Kit-for-reBot-Arm-B601-RS-p-6873.html)电源适配器, 或者在[京东购买](https://item.jd.com/10161209537223.html?pcdk=XmL78Hf_3R95Ueqck5LtElx9qJy6oC0PjQU1dV0F2rEG5XTr6Xarc8us1UFQm_G2.3z6a.aI3x&spmTag=YTAyNDAuYjAwMjQ5My5jMDAwMDQwMjcuMiUyM3NrdV9jYXJkJTQwMTc4MTc2NzUwNjU1NyUyMzE3Nzk3NjA2MTA2MzA2NTcwNzkwNDUlMjM5NDcyNzI1NzE),切勿使用杂牌和不安全的渠道购买电源，造成风险后果均由个人承担。

  2. 如果你的家庭电压是220V，请把电源侧面拨码调至230V，如果你的家庭电压是110V，请把你电源的拨码调至115V。

  | **220V** | **110V** |
  |:---:|:---:|
  | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/230V.jpg" width="300" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/115V.jpg" width="300" /> |

  <div align="center">
    <img width={800}
    src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100054289-gallery-6.jpg" />
</div>

  3. 选择我们开源的24V14.6AMeanWell电源外壳进行自组装，文字步骤和BOM在[github仓库](https://github.com/Seeed-Projects/reBot-DevArm/blob/main/hardware/reBot_B601_RS/README_zh.md#%E5%85%B3%E4%BA%8E%E7%94%B5%E6%BA%90)中开源（只推荐有过相关电源组装经验的开发者使用）

  组装参考视频：
  
  <div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?isOutside=true&aid=116793196675417&bvid=BV15i7K69EnQ&cid=39314066536&p=1&autoplay=0&muted=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>



## 第一步：组装机械臂

<Tabs>
<TabItem value="unassembled" label="未组装版本">

  <div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?isOutside=true&aid=116854970386234&bvid=BV1xCTs6vEa6&cid=39614154823&p=1&muted=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

- 开始组装前，请您务必仔细阅读以下内容。为确保您顺利完成组装并获得完整的动手体验，组装过程中请保持耐心与专注，并时刻遵循以下要点：
  1. 本套件包含大量螺丝与结构件，部分零件外观相近。组装时请耐心核对螺丝规格与零件型号，确认安装方向无误后再进行固定。
  2. 视频为四月初拍摄，后续或许会有零件微调和改动，但是不影响跟随本视频的安装效果，最终零件以出货为准。
  3. 为方便大家拧螺丝和取下螺丝，开源BOM中所选用的是普通螺丝，但是正式出货螺丝涂了防松胶,您也可使用自备的顺手工具或电动螺丝刀（强烈推荐准备好电动螺丝刀）。若使用电动工具，务必将扭力调至中低档(3~6kgf.cm)，避免扭力过大导致螺丝滑丝，造成部件无法取下的不可逆损失。有任何滑丝的可能就立刻更换螺丝或者对准后重新拧，防松螺丝滑丝无法用滑丝取出器取出，会报废整个零件。所以务必小心谨慎。
  4. 组装过程中请务必注意安全，防止夹手、砸伤，儿童请在家长或监护人陪同下完成该项目。

</TabItem>
<TabItem value="assembled" label="已组装版本">

机械臂需要连接线和使用motorbridge-studio写入参数和设置零点

该步骤可以参考第二步中的视频来进行。
按照如下图示，连接 motor1 和 motor2
<div align="center">
  <img width={400} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS_m1m2_c.jpg" alt="确认写入 B601-RS 电机参数" />
</div>
接着按照如下图示，将 USB2CAN 模块、电源信号分离板、电源线 XT30、XT30 2+2相连接，其中XT30 2+2 另一端接 motor1，电源线接入 48V 电源。
<div align="center">
  <img width={400} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rs_connecting_cable.jpg" alt="确认写入 B601-RS 电机参数" />

</div>
</TabItem>
</Tabs>


## 第二步：Motorbridge-studio 校准机械臂及参数写入

:::tip
1. 探索我们的 **MotorBridge** 平台。该平台为一站式综合解决方案，支持电机种类持续扩充，涵盖[达妙电机](https://www.seeedstudio.com/DIP-Servo-Motor-24V-120RPM-Brushless-98-9mm-4P-L56-W56-H46mm-p-6660.html)、[Robstride电机](https://www.seeedstudio.com/Robostride-00-Actuator-p-6664.html)、[高擎电机](https://www.seeedstudio.com/Hightorque-HTDW-4438-30-NE-Gear-Motor-p-6482.html)、[脉塔电机](https://www.seeedstudio.com/Myactuator-X4-P36-Planetary-Actuator-p-6469.html)、Hexfellow 等多款电机，同时兼容 reBot 等持续更新迭代的机械臂产品。平台面向入门用户友好易用，同时也为开发者提供功能完全一致的 Python SDK。

2. 体验专为 reBot 机械臂适配的 MotorBridge 全新功能与细节，包含一键零点校准、参数写入、界面拖拽式电机控制，以及内置模型可视化界面。

3. 本工具全面兼容 **Windows、Ubuntu、macOS** 操作系统。
:::

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
<iframe width="900" height="600" src="//player.bilibili.com/player.html?isOutside=true&bvid=BV1MEJV6TELk&p=1&autoplay=0&muted=1" title="Bilibili video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>


### 1.安装 Miniforge（建议）（支持 Windows\Ubuntu\macOS\Jetson\树莓派）

1. 安装miniforge，创建虚拟环境，避免其他环境包的干扰导致demo运行失败。
<Tabs>
<TabItem value="Ubuntu" label="Ubuntu\Jetson\树莓派">

```bash
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
```
</TabItem>
<TabItem value="macOS" label="macOS">

```bash
curl -L -O "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-MacOSX-$(uname -m).sh"
bash Miniforge3-MacOSX-$(uname -m).sh
```

</TabItem>
<TabItem value="windows" label="windows">

　　在浏览器中打开 Miniforge 的 Release 页面，找到最新版本的 `Miniforge3-Windows-x86_64.exe` 点击下载：

```text
https://github.com/conda-forge/miniforge/releases
```

</TabItem>
</Tabs>

2. 创建 Python 3.12 版本虚拟环境：

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

3. 激活虚拟环境。**每次打开终端使用 reBot 相关功能时，都需要重新执行该激活命令**：

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

<Tabs>
<TabItem value="Ubuntu" label="Ubuntu\树莓派">

```bash
#套件里是 PCAN-USB，通常应该直接出现 can0 或 can1
sudo modprobe peak_usb
ip -br link

#如果出现 can0，再设置 bitrate
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

</TabItem>

<TabItem value="Jetson" label="Jetson">

下载文件：[peak-linux-driver-9.2.0.tar.gz](https://www.peak-system.com/quick/PCAN-Linux-Driver?_gl=1*1shem7p*_up*MQ..*_gs*MQ..&gclid=CjwKCAjwj7HTBhBiEiwA8s35OkNgKcwSr95URUncy5ADLlO-AjdZSFxtqTgof7UY2-LgkXWyoHMX3RoC0i4QAvD_BwE&gbraid=0AAAAAD_YjBa3gnuD4t8dG6dxnFEdZOcTz)

- 移除 brltty
在 Jetson 设备上，brltty 可能占用 leader（主机）所使用的 USB 串口，请先卸载：
```bash
sudo apt remove -y brltty
```

-  安装依赖
```bash
sudo apt update
sudo apt install -y \
    build-essential \
    gcc \
    g++ \
    make \
    libpopt-dev \
    can-utils \
    ethtool \
    nvidia-l4t-kernel-headers
```
确认当前内核头文件目录存在：
```bash
ls -l /lib/modules/$(uname -r)/build
```

-  编译 PEAK SocketCAN 驱动
下载并解压 PEAK Linux Driver 9.2.0，进入源码目录：
```bash
tar -xvf peak-linux-driver-9.2.0.tar.gz
cd ~/peak-linux-driver-9.2.0
```
清理旧编译产物：
```bash
make clean
```
使用 netdev 模式编译：
```bash
make netdev
```
netdev 模式会将 PCAN-USB 注册为 Linux SocketCAN 网络接口。
**不要直接执行 `make`**。直接执行 `make` 会编译 chardev 模式；而 LeRobot 和 motorbridge-cli 需要使用 SocketCAN 接口。

- 安装并加载驱动
安装驱动：
```bash
sudo make install
sudo depmod -a
```
加载 pcan 内核模块：
```bash
sudo modprobe pcan
```
设置开机自动加载模块：
```bash
echo pcan | sudo tee /etc/modules-load.d/pcan.conf
```
验证驱动已正常加载：
```bash
ip -br link | grep can
```
正常输出示例：
```
can0             DOWN           <NOARP,ECHO>
can1             DOWN           <NOARP,ECHO>
.....
```

- 查询机械臂对应的 PCAN 接口编号
```bash
for i in /sys/class/net/can*; do [ "$(basename "$(readlink -f "$i/device/driver" 2>/dev/null)")" = "pcan" ] && basename "$i"; done
```
命令列出的接口即为 PEAK PCAN-USB 设备，示例：
```
can2
```

- 永久配置 `pcan_refresh` 命令
Linux 环境变量重启后会失效，且 PCAN 接口编号可能发生变动。更稳妥的方案是永久定义一个刷新函数，每次打开终端后执行。

将以下函数追加写入 `~/.bashrc`：
```bash
grep -q '^pcan_refresh()' ~/.bashrc || cat >> ~/.bashrc <<'EOF'

pcan_refresh() {
    local iface
    iface=$(sudo setup-pcan-if) || return 1
    export PCAN_IF="$iface"
    echo "PCAN_IF=$PCAN_IF"
}
EOF
```
```bash
source ~/.bashrc
```
每次重启设备、重新插拔 PCAN-USB 后执行：
```bash
pcan_refresh
```
执行成功输出：
```
PCAN_IF=can1
```
后续所有命令请使用 `$PCAN_IF`，不要硬编码 `can1`、`can2` 这类固定编号。

```bash
sudo modprobe peak_usb
ip -br link

#如果出现 $PCAN_IF ，再设置 bitrate
sudo ip link set $PCAN_IF down 2>/dev/null
sudo ip link set $PCAN_IF type can bitrate 1000000 restart-ms 100
sudo ip link set $PCAN_IF up
```

</TabItem>
<TabItem value="macos" label="macos">
`libPCBUSB.dylib` 无法加载时，请先安装 PCBUSB：

```bash
curl -L -o macOS_Library_for_PCANUSB_v0.13.tar.gz \
  https://raw.githubusercontent.com/tianrking/motorbridge/main/third_party/pcan/macos/macOS_Library_for_PCANUSB_v0.13.tar.gz
tar -xzf macOS_Library_for_PCANUSB_v0.13.tar.gz
cd PCBUSB
sudo ./install.sh
```

`install.sh` 只会安装 `libPCBUSB.dylib`。motorbridge 的原生加载器 `dlopen` 的是裸名 `PCBUSB`，因此需要补这个符号链接。否则即使 `libPCBUSB.dylib` 的 ctypes 检查能通过，连接机械臂仍会报 `load PCBUSB failed`：

```bash
sudo ln -sf /usr/local/lib/libPCBUSB.dylib /usr/local/lib/PCBUSB
```

配置 `DYLD_FALLBACK_LIBRARY_PATH`，确保 motorbridge-gateway 运行时能找到 PCBUSB 库。请优先使用 FALLBACK，不要用 `DYLD_LIBRARY_PATH`：后者会覆盖整个进程的 dyld 默认搜索顺序，可能影响其他软件。在 conda 环境中创建激活脚本，每次 `conda activate rebot` 自动生效：

```bash
mkdir -p "$CONDA_PREFIX/etc/conda/activate.d"
cat > "$CONDA_PREFIX/etc/conda/activate.d/env_vars.sh" << 'EOF'
export DYLD_FALLBACK_LIBRARY_PATH="/usr/local/lib${DYLD_FALLBACK_LIBRARY_PATH:+:$DYLD_FALLBACK_LIBRARY_PATH}"
EOF

echo $DYLD_FALLBACK_LIBRARY_PATH
```

可选、无需 sudo（适合共用开发机）：安装到 `~/.local/lib`。若本地已有 motorbridge 源码树：

```bash
./scripts/setup_pcbusb_macos.sh --user-local
ln -sf "$HOME/.local/lib/libPCBUSB.dylib" "$HOME/.local/lib/PCBUSB"
```

将上面 conda 激活脚本中的路径改为 `$HOME/.local/lib`，而不是 `/usr/local/lib`。

检查是否就绪。请先插入 PCAN 适配器。`ctypes.CDLL('libPCBUSB.dylib')` 不能作为运行时检查，motorbridge 实际不会加载这个名字。

```bash
# 检查 Python 包和 CLI 是否就绪
python3 -c "import motorbridge; print('motorbridge OK')"
motorbridge-cli --help

# 原生加载器 dlopen 的是裸名 PCBUSB
python3 -c "import ctypes; ctypes.CDLL('PCBUSB'); print('PCBUSB load OK')"

# 真实运行时检查（macOS 上 can0 对应 PCAN_USBBUS1）
motorbridge-cli scan --vendor robstride --channel can0 --start-id 1 --end-id 7 --timeout-ms 300
```

</TabItem>
<TabItem value="windows" label="windows">

请访问 [pcan-usb](https://www.peak-system.com/products/hardware/external-pc-interfaces/pcan-usb/)，安装pcan-usb驱动。

</TabItem>



</Tabs>








:::tip 注意！！！
电脑安装驱动后，发现pcan设备固件错误，请展开以下内容，下载 PCAN 固件并按照步骤进行修复。
:::

<details>

<summary>PCAN 固件下载与驱动修复步骤</summary>

如果安装驱动后仍然无法使用 PCAN-USB，并且设备管理器中没有识别到如下图所示的 **PCAN-USB** 设备，请下载 PCAN 固件压缩包，并按照以下步骤安装 DFU 驱动和重新烧录固件。

![设备管理器识别到 PCAN-USB](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/01-pcan-usb-device.png)


> 📦 [点击下载 USB2CAN.zip](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/USB2CAN.zip)

安装 DFU 驱动

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

烧录 PCAN 固件

1. 在 DfuSeDemo 中点击 **Upgrade or Verify Action → Choose...**，选择解压后 `pcan` 文件夹内的固件。
2. 点击 **Upgrade**，在弹窗中点击 **是**，等待固件烧录完成，然后退出 DfuSeDemo。

![在 DfuSeDemo 中选择 pcan 固件并点击 Upgrade](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/09-select-pcan-firmware.png)

![固件烧录完成提示](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/10-firmware-upgrade-complete.png)

恢复并验证设备

拔掉 USB2CAN，将拨码开关切换到 **120R**，然后重新连接电脑。打开设备管理器，如果设备已被识别为 **PCAN-USB**，则表示问题已修复，可以继续按照本教程使用。

![设备管理器中成功识别到 PCAN-USB](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/11-pcan-usb-recognized.png)

</details>

<details>

<summary>PCAN 固件下载与驱动修复步骤-Ubuntu</summary>

Ubuntu 用户请参考本指南

1.> 📦 [点击下载 USB2CAN.zip](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/USB2CAN.zip)

2.USB2CAN 拨到 BOOT

3.请将第一步的USB2CAN.zip压缩包解压，将flash_pcan_ubuntu.sh 和 USB2CAN.zip里面的pcan_canable_hw.bin 放同一目录

[点击下载 flash_pcan_ubuntu.sh](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/flash_pcan_ubuntu.sh)

如果是从别的电脑传过去的（比如 scp）：

```text
scp flash_pcan.sh pcan_canable_hw.bin seeed@你的Ubuntu的IP:~/Downloads/
```
或者直接拖进优盘再插到 Ubuntu 上复制过去，都行——只要最后落在 、当前目录，或者 里任意一个，脚本都能自动找到。~/Downloads~/下载/tmp

4.执行：

```text
bash flash_pcan_ubuntu.sh
```
 输入密码；等待完成

完成后重新拨回"120R"

重新插 USB。
</details>

<details>

<summary>PCAN 固件下载与驱动修复步骤-MAC</summary>

MAC 用户请参考本指南

1.> 📦 [点击下载 USB2CAN.zip](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/USB2CAN.zip)

2.USB2CAN 拨到 BOOT

3.请将第一步的USB2CAN.zip压缩包解压，将flash_pcan_mac.sh 和 USB2CAN.zip里面的pcan_canable_hw.bin 放同一目录

[点击下载 flash_pcan_mac.sh](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/flash_pcan_mac.sh)

如果是从别的电脑传过去的（比如 scp）：

```text
scp flash_pcan.sh pcan_canable_hw.bin seeed@你的MAC的IP:~/Downloads/
```

或者直接拖进优盘再插到 MAC 上复制过去，都行——只要最后落在 、当前目录，或者 里任意一个，脚本都能自动找到。~/Downloads~/下载/tmp

4.执行：

```text
 bash /Users/"你的用户名"/Downloads/pcan_flash_mac.sh "/Users/"你的用户名"/Downloads/pcan_canable_hw.bin"
```
以上命令为文件放置在mac下载路径，按实际路径更改

输入密码；等待完成

完成后重新拨回"120R"

重新插 USB。
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
DYLD_FALLBACK_LIBRARY_PATH=/usr/local/lib motorbridge-gateway --bind 127.0.0.1:9002 
```

#### 写入电机控制参数

:::warning 首次使用时请完成参数初始化

reBot Arm B601-RS 的大多数示例使用 MIT 模式运行。

原生 Position（`pos_vel`）模式会直接使用位置环增益 `loc_kp` 和最大速度 `vel_max`，其运动效果也与速度环增益 `spd_kp`、加速度参数 `acc_rad` 有关。如果未初始化 reBot Arm B601-RS 的推荐参数，或各关节保存的参数不一致，使用位置模式时可能出现响应、速度或加减速效果异常。
:::
请先在 [motorbridge-studio](https://motorbridge.github.io/motorbridge-studio/) 的“机械臂型号”中选择 `rebot-arm-robstride`，扫描并确认 1～7 号关节全部在线，并按照前文完成机械臂校零，然后再执行以下操作：

**默认电机参数模版**
1. 点击 **套用默认模板**，此操作会将参数写入电机。

<!-- <div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/b601_rs_motorbridge_read_params.png" alt="读取 B601-RS 电机参数并套用默认模板" />
</div> -->

<!-- 2. 点击 **写入参数**，确认机械臂已安全支撑、周围无人员或障碍物，并在弹窗中确认写入。请勿在写入过程中断电或插拔电机线。 -->

<!-- <div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/b601_rs_motorbridge_write_params.png" alt="确认写入 B601-RS 电机参数" />
</div> -->

2. 写入完成后，MotorBridge Studio 会自动回读参数。页面显示“写入后回读校验一致”或无异常警告即表示初始化成功。

**手动修改参数**

如果默认电机参数模板未能满足使用需求，请使用导出读取参数和写入参数功能。

1. 在机械臂零点校准完成后，点击读取参数，如读取成功，网页会下载 tsv 文件，该文件可以使用文本或表格打开，其内提供的参数与电机厂商提供的参数功能一致，将该文件修改后，再写入机械臂。

2. 如您正在寻求技术支持，请将该文件提供给工程师，更有助于工程师分析问题。
