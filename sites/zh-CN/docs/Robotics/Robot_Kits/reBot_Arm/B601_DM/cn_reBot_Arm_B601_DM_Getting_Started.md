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
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_b601_dm_getting_started
translation:
  skip: [zh-CN]
last_update:
  date: 2026-07-28
  author: LiuJunjie
createdAt: '2026-04-13'
updatedAt: '2026-08-19'
url: https://wiki.seeedstudio.com/cn/rebot_b601_dm_getting_started/
---

import RebotDmDocNav from '@site/src/components/robotics/RebotDmDocNav';

# reBot Arm B601-DM 快速入门

<RebotDmDocNav />

<div align="center">
    <img width={800}
    src="https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://detail.tmall.com/item.htm?id=1042412233386&skuId=6065255360559" target="_blank">
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

reBot Arm项目已经在[github](https://github.com/Seeed-Projects/reBot-DevArm)上开源了，本文将带领你快速入门B601-DM，从组装到使用。
本文的内容正在光速赶来，各位敬请期待。

:::tip
如果你购入的是已组装的成品套件，请直接跳到文章末尾 **第三步** 的教程视频，按照视频教程使用，无需给电机写入ID和校准零位

已验证虚拟机的性能不足以支撑 demo 运行且存在配置问题，建议优先使用 ubuntu 物理机来控制机械臂
:::

## 购买选项

reBot Arm B601-DM 提供多种配置选项，以满足不同用户的需求。

### 选项对比

| 配置 | 本体 | 夹爪 | 电机 | 结构件 | 购买链接 |
|:---|:---:|:---:|:---:|:---:|:---|
| **完整套装** | ✅ | ✅ | ✅ | ✅ |  |
| **仅夹爪** | ❌ | ✅ | ❌ | ❌ |  |
| **仅本体 (结构)** | ✅ | ❌ | ❌ | ✅ |  |
| **仅本体 (电机)** | ✅ | ❌ | ✅ | ❌ |  |


## 风险告知及免责声明

<div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", gap: "16px" }}>
    <img style={{ width: "calc(50% - 8px)", maxWidth: "420px", height: "auto" }}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/Chinese%20version%20statement.png" />
    <img style={{ width: "calc(50% - 8px)", maxWidth: "420px", height: "auto" }}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/English%20Version%20Statement.png" />
</div>

## 关于电源

  1. 机械臂在发货时并未配备电源/默认情况下不带电源。您可自行连接电池，或选购一款我们开源的[24V 14.6A MeanWell电源](https://www.seeedstudio.com/Power-Adapter-Kit-for-reBot-Arm-B601-DM-p-6874.html)电源适配器, 或者在[京东购买](https://item.jd.com/10161209537214.html?pcdk=PnAKnVITa6CLRCfJa1bRuUjjKE-kqYkXpDPGKHbwO4IuChTalUbxo5XvL-gKQSl9.rQ4a.tlbT&spmTag=YTAyNDAuYjAwMjQ5My5jMDAwMDQwMjcuMSUyM3NrdV9jYXJkJTQwMTc4MTYxMTAyODQwNiUyMzE3NTAwNjczMzc4MzgxNzg2NTc2MTE1JTIzMjAzMTA0NjkzMw#switch-sku),切勿使用杂牌和不安全的渠道购买电源，造成风险后果均由个人承担。
    如果你的家庭电压是220V，请把电源侧面拨码调至230V，如果你的家庭电压是110V，请把你电源的拨码调至115V。

| **220V** | **110V** |
|:---:|:---:|
| <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/230V.jpg" width="300" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/115V.jpg" width="300" /> |

  <div align="center">
    <img width={800}
    src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100029903-gallery-6_1.jpg" />
</div>

  2. 选择我们开源的24V14.6AMeanWell电源外壳进行自组装，文字步骤和BOM在[github仓库](https://github.com/Seeed-Projects/reBot-DevArm/blob/main/hardware/reBot_B601_DM/readme_zh.md/#%E5%85%B3%E4%BA%8E%E7%94%B5%E6%BA%90)中开源（只推荐有过相关电源组装经验的开发者使用）
  组装参考视频：
  
  <div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?isOutside=true&aid=116798867506587&bvid=BV1mLjm6xEzn&cid=39341657580&p=1&autoplay=0&muted=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


## 第一步：组装机械臂

- 开始组装前，请您务必仔细阅读以下内容。为确保您顺利完成组装并获得完整的动手体验，组装过程中请保持耐心与专注，并时刻遵循以下要点：
  1. 本套件包含大量螺丝与结构件，部分零件外观相近。组装时请耐心核对螺丝规格与零件型号，确认安装方向无误后再进行固定。
  2. 视频为四月初拍摄，后续或许会有零件微调和改动，但是不影响跟随本视频的安装效果，最终零件以出货为准。
  3. 为方便大家拧螺丝和取下螺丝，开源BOM中所选用的是普通螺丝，但是正式出货螺丝涂了防松胶,您也可使用自备的顺手工具或电动螺丝刀（强烈推荐准备好电动螺丝刀）。若使用电动工具，务必将扭力调至中低档(3~6kgf.cm)，避免扭力过大导致螺丝滑丝，造成部件无法取下的不可逆损失。有任何滑丝的可能就立刻更换螺丝或者对准后重新拧，防松螺丝滑丝无法用滑丝取出器取出，会报废整个零件。所以务必小心谨慎。
  4. 组装过程中请务必注意安全，防止夹手、砸伤，儿童请在家长或监护人陪同下完成该项目。
  
  :::tip
  提醒：组装视频中5号电机和6号电机之间的 D4 * 7 不需要进行安装，是视频介绍错误，如果您购买的是散件版本的 reBot Arm B601-DM ，7颗 D4 * 7 足够您来完成组装
  :::

<div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?isOutside=true&aid=116418964097678&bvid=BV1zPdzBEE1R&cid=37577427530&p=1&autoplay=0&muted=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

接线上手视频：

<div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?isOutside=true&bvid=BV1MR8E6VE5S&p=1&autoplay=0&muted=1" title="reBot-B601-DM 完整接线上手视频" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 第二步：写入电机ID及零点

:::tip
组装机械臂时，请不要忘记连接电机1到2之间的这根线束，具体位置如下图高亮处所示。接线时，请务必先让当前电机失能并断开电源，避免热插拔或误操作导致电机参数异常。

<div align="center">
    <img width={200}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/1to2_ID_set.jpg" />
</div>
:::

### AI AGNET

:::tip
该部分内容处于测试阶段，请在使用过程中注意安全操作，并且AI如果给出的提示与本文内容不符，请以本文为准，并向我们的工程师取得帮助
:::

尝试让AI AGENT来协助你完成这一过程,将下方提示词复制给你的 AI 助手

```text

请参考 AGENTS.md（https://github.com/Welt-liu/reBot-B601-RS-Skills/blob/main/zh/AGENTS.md）中的流程，帮助用户完成新机械臂的初始化。

```

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

- [软件下载链接](https://github.com/dmBots/motor-debugging-tool)

#### 写入电机ID并测试使能

按照表格中的参数设置各关节电机对应的 CAN ID 与 Master ID
| 电机编号 | CAN ID | Master ID | 
|:---|:---:|:---:|
| 1号电机 | 0x01 | 0x11 |
| 2号电机 | 0x02 | 0x12 |
| 3号电机 | 0x03 | 0x13 |
| 4号电机 | 0x04 | 0x14 |
| 5号电机 | 0x05 | 0x15 |
| 6号电机 | 0x06 | 0x16 |
| 7号电机 | 0x07 | 0x17 |

:::danger

下面以1号电机作为操作示例，注意各关节电机的 CAN ID 与 Master ID 一定要根据上面的表格设置正确参数

:::

1、打开 DM_Tools 上位机软件，选择 USB 对应的 COM 串口号，波特率设置为 `921600` ，连接成功后 `串口` 界面会有信息打印。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/1_damiao_tool.png" />
</div>


2、使用 3pin 线将 1 号电机与 USB-CAN 转接板连接

3、连接完成后进入 `参数设置界面`  ，点击 `读参数` 将 `CAN ID` 设置为 `0x01` ，`Master ID` 设置为 `0x11`

4、设置完成后点击 `写参数` 完成参数写入

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/2_damiao_tool.png" />
</div>

:::tip
左侧橙色框中的USB模式代表了当前参数设置页面读写电机参数时使用的方式
:::

5、进入到 `调试` 界面确保  `CAN ID` 与 `Master ID` 设置无误后点击 `电机使能` ，此时电机指示灯绿灯常亮进入使能状态，1号电机测试完成。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/3_damiao_tool.png" />
</div>

:::tip

测试完成后注意点击 `电机失能` 退出使能状态。

:::

**各电机编号时 3pin 线连接位置与使能效果**
| **1号电机接线图** | **2号电机接线图** | **3号电机接线图** | **4号电机接线图** | **5号电机接线图** | **6号电机接线图** | **7号电机接线图** |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/1_ID_set.jpg" width="4000" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/2_ID_set.jpg" width="4000" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/3_ID_set.jpg" width="4000" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/4_ID_set.jpg" width="4000" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/5_ID_set.jpg" width="4000" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/6_ID_set.jpg" width="4000" /> |  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/7_ID_set.jpg" width="4000" /> |

| **1号电机使能效果** | **2号电机使能效果** | **3号电机使能效果** | **4号电机使能效果** | **5号电机使能效果** | **6号电机使能效果** | **7号电机使能效果** |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/1_Enable.jpg" width="4000" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/2_Enable.jpg" width="4000" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/3_Enable.jpg" width="4000" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/4_Enable.jpg" width="4000" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/5_Enable.jpg" width="4000" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/6_Enable.jpg" width="4000" /> |  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/7_Enable2.jpg" width="4000" /> |

<div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?isOutside=true&aid=116440455775862&bvid=BV1r9d1BuESN&cid=37680973414&p=1&autoplay=0&muted=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 第三步：校准机械臂及上手初体验

相信你已经跟随视频完成了机械臂组装、零点初始化、电机ID配置等全部前期准备工作。现在你可以正式开始体验我们提供的一系列教程与工具。


使用请参考视频和文字教程,在控制机械臂运动之前，需要重新设置一次零点。

<div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?isOutside=true&aid=116440455775355&bvid=BV1r9d1BuE6w&cid=37680974119&p=1&autoplay=0&muted=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

1. 探索我们的 **MotorBridge** 平台。该平台为一站式综合解决方案，支持电机种类持续扩充，涵盖[达妙电机](https://www.seeedstudio.com/DIP-Servo-Motor-24V-120RPM-Brushless-98-9mm-4P-L56-W56-H46mm-p-6660.html)、[Robstride电机](https://www.seeedstudio.com/Robostride-00-Actuator-p-6664.html)、[高擎电机](https://www.seeedstudio.com/Hightorque-HTDW-4438-30-NE-Gear-Motor-p-6482.html)、[脉塔电机](https://www.seeedstudio.com/Myactuator-X4-P36-Planetary-Actuator-p-6469.html)、Hexfellow 等多款电机，同时兼容 reBot 等持续更新迭代的机械臂产品。平台面向入门用户友好易用，同时也为开发者提供功能完全一致的 Python SDK。

2. 体验专为 reBot 机械臂适配的 MotorBridge 全新功能与细节，包含一键零点校准、参数写入、界面拖拽式电机控制，以及内置模型可视化界面。

3. 本工具全面兼容 **Windows、Ubuntu、macOS** 操作系统。

### 步骤 1：安装 Miniforge（支持 Windows\Ubuntu\macOS\Jetson\树莓派）

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

提示 macOS 用户注意：
如果您在 macOS 上遥操时帧率偏低，可能是沁恒（WCH）CH34x 驱动版本过旧导致。对于 **macOS 10.14 及以上版本**，系统已内置 AppleUSBCHC0M 驱动，您可以先卸载旧版驱动，改用 macOS 内置驱动，通常能有效提升帧率。

:::

激活 reBot 虚拟环境后，执行以下命令安装 motorbridge：

```bash
pip install motorbridge
```

### 步骤 4：连接机械臂
使用 USB 数据线将机械臂连接至电脑并接通电源后，需要为串口配置 666 权限。（Windows系统不需要配置权限，跳过此步骤即可）
```bash
sudo chmod 666 /dev/ttyACM*
```

### 步骤 5：启动 MotorBridge

在浏览器中打开地址 `https://motorbridge.github.io/motorbridge-studio/`，点击帮助选项，根据你的操作系统与所用驱动板复制对应指令，核对 IP 地址与端口号后，在终端中按下回车运行。

以 Windows 系统为例：

```bash
motorbridge-gateway -- --bind 127.0.0.1:9002 --vendor damiao --transport dm-serial --serial-port COM3 --serial-baud 921600 --model 4340P --motor-id 0x01 --feedback-id 0x11 --dt-ms 20
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/motorbridge_help.png" />
</div>



## 常见问题
  1. 电机一启动就有很大声的异响？
    - 可能是在写入ID的过程中不小心点了参数标定，这会导致电机原本出厂的转动惯量等参数被破坏。你可以用[DM_Tools_v.1.8.0.1.exe（仅支持 Windows 系统）](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM_Tools_v1.8.0.1.exe)上位机将同型号正常的电机参数导出，然后再导入到异常的电机后，修改相应的CANID，点击写入参数后继续执行零点校准的流程。

<div align="center">
    <img width={400}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/csbd_zh.png" />
</div>

<div align="center">
    <img width={400}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/fix_param_zh.png" />
</div>

[DM4310默认参数](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM4310_Default_Parameters.txt)
[DM4340P默认参数](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM4340P_Default_Parameters.txt)

  2. 电机所有CANID变成了一样？
    - 在用[DM_Tools_v.1.8.0.1.exe（仅支持 Windows 系统）](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DM_Tools_v1.8.0.1.exe)校准零点的时候千完别点CANID旁边的读取和设置两个按钮，调试的页面是通过CAN通讯链路完成的，如果点了设置，会把CANBUS上所有的电机设置成同一个CAN
