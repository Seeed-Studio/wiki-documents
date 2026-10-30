---
description: 本指南将帮助您快速上手 reBot Arm B601-DM 机械臂，包括组装、校准和软件配置。
title: B601-DM 快速入门
keywords:
  - reBot
  - B601-DM
  - 机械臂
  - 机器人
  - Lerobot
  - Pinocchio
  - 6 自由度
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_dm.png
slug: /rebot_b601_dm_getting_started
translation:
  skip: [zh-CN]
last_update:
  date: 2026-07-28
  author: LiuJunjie
createdAt: '2026-04-13'
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/cn/rebot_b601_dm_getting_started/
---

import '/src/css/rebot-wiki-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import GitHubStarButton from '@site/src/components/robotics/GitHubStarButton';

# reBot Arm B601-DM 快速入门

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rebot_dm.png" />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://detail.tmall.com/item.htm?id=1042412233386&skuId=6065255360559" target="_blank" rel="noopener noreferrer">
    <span>点击立即获取</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
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

<p align="center">
  reBot Arm 项目已经在 [GitHub](https://github.com/Seeed-Projects/reBot-DevArm) 上开源了，欢迎前往仓库点亮 Star 小星星！仓库中包含完整的 BOM 清单。本文将带领你快速入门 B601-DM，从组装到使用。
</p>

<GitHubStarButton
  owner="Seeed-Projects"
  repo="reBot-DevArm"
  ariaLabel="在 GitHub 上为 reBot-DevArm 点亮 Star"
/>

## 项目简介

**reBot-DevArm (reBot Arm B601 DM 和 reBot Arm B601 RS)** 是一个致力于降低具身智能学习门槛的机械臂项目。我们主打 **"真·开源"** —— 不仅仅是代码，我们无保留地开源了所有的：
- 🦾 **两个版本电机的开源机械臂**：我们会提供Robostride和Damiao两个版本的同样外观的机械臂所有开源文件。
- 🛠️ **硬件图纸**：钣金件、3D打印件源文件。
- 🔩 **BOM 清单**：详细到每一个螺丝的规格和购买链接。
- 💻 **软件及算法**：Python SDK、ROS1/2、Isaac Sim、Lerobot等

:::tip
如果你购入的是已组装的成品套件，请直接跳到文章末尾 **第三步** 的教程视频，按照视频教程使用，无需给电机写入ID和校准零位

已验证虚拟机的性能不足以支撑 demo 运行且存在配置问题，建议优先使用 ubuntu 物理机来控制机械臂

推荐安装 **Ubuntu 24.04 LTS**。
:::


## 风险告知及免责声明

<div className="rebot-disclaimer-gallery">
  <figure className="rebot-disclaimer-gallery-item">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/Chinese%20version%20statement.png" alt="reBot Arm 中文风险告知及免责声明" />
  </figure>
  <figure className="rebot-disclaimer-gallery-item">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/English%20Version%20Statement.png" alt="reBot Arm 英文风险告知及免责声明" />
  </figure>
</div>

## 关于电源

  1. 机械臂在发货时并未配备电源/默认情况下不带电源。您可自行连接电池，或选购一款我们开源的[24V 14.6A MeanWell电源](https://www.seeedstudio.com/Power-Adapter-Kit-for-reBot-Arm-B601-DM-p-6874.html)电源适配器, 或者在[京东购买](https://item.jd.com/10161209537214.html?pcdk=PnAKnVITa6CLRCfJa1bRuUjjKE-kqYkXpDPGKHbwO4IuChTalUbxo5XvL-gKQSl9.rQ4a.tlbT&spmTag=YTAyNDAuYjAwMjQ5My5jMDAwMDQwMjcuMSUyM3NrdV9jYXJkJTQwMTc4MTYxMTAyODQwNiUyMzE3NTAwNjczMzc4MzgxNzg2NTc2MTE1JTIzMjAzMTA0NjkzMw#switch-sku),切勿使用杂牌和不安全的渠道购买电源，造成风险后果均由个人承担。

  2. 如果你的家庭电压是220V，请把电源侧面拨码调至230V，如果你的家庭电压是110V，请把你电源的拨码调至115V。

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <figcaption>220V</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/230V.jpg" alt="电源电压拨码调至 230V" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>110V</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/115V.jpg" alt="电源电压拨码调至 115V" />
  </figure>
  <figure className="rebot-power-gallery-item rebot-power-gallery-item--wide">
    <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100029903-gallery-6_1.jpg" alt="reBot Arm B601-DM MeanWell 电源适配器" />
  </figure>
</div>

### 组装电源

选择我们开源的24V14.6AMeanWell电源外壳进行自组装，文字步骤和BOM在[github仓库](https://github.com/Seeed-Projects/reBot-DevArm/blob/main/hardware/reBot_B601_DM/readme_zh.md/#%E5%85%B3%E4%BA%8E%E7%94%B5%E6%BA%90)中开源（只推荐有过相关电源组装经验的开发者使用）

电源组装参考视频：
  
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

### 柔性夹爪安装

<div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?isOutside=true&aid=117234554899587&bvid=BV1VCb563EvZ&cid=41691711940&p=1&autoplay=0&muted=1" title="柔性夹爪安装" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

按照表格中的参数设置各关节电机对应的 CAN ID 与 Master ID。

| 电机编号 | 电机型号 | CAN ID | Master ID |
|:---|:---:|:---:|:---:|
| 1号电机 | J4340P | 0x01 | 0x11 |
| 2号电机 | J4340P | 0x02 | 0x12 |
| 3号电机 | J4340P | 0x03 | 0x13 |
| 4号电机 | J4310 | 0x04 | 0x14 |
| 5号电机 | J4310 | 0x05 | 0x15 |
| 6号电机 | J4310 | 0x06 | 0x16 |
| 7号电机 | J4310 | 0x07 | 0x17 |

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

## 第三步：使用 MotorBridge 平台校准机械臂并完成首次运行

相信你已经跟随视频完成了机械臂组装、零点初始化、电机ID配置等全部前期准备工作。现在你可以正式开始体验我们提供的一系列教程与工具。

:::tip
1. 探索我们的 **MotorBridge** 平台。该平台为一站式综合解决方案，支持电机种类持续扩充，涵盖[达妙电机](https://www.seeedstudio.com/DIP-Servo-Motor-24V-120RPM-Brushless-98-9mm-4P-L56-W56-H46mm-p-6660.html)、[Robstride电机](https://www.seeedstudio.com/Robostride-00-Actuator-p-6664.html)、[高擎电机](https://www.seeedstudio.com/Hightorque-HTDW-4438-30-NE-Gear-Motor-p-6482.html)、[脉塔电机](https://www.seeedstudio.com/Myactuator-X4-P36-Planetary-Actuator-p-6469.html)、Hexfellow 等多款电机，同时兼容 reBot 等持续更新迭代的机械臂产品。平台面向入门用户友好易用，同时也为开发者提供功能完全一致的 Python SDK。

2. 体验专为 reBot 机械臂适配的 MotorBridge 全新功能与细节，包含一键零点校准、参数写入、界面拖拽式电机控制，以及内置模型可视化界面。

3. 本工具全面兼容 **Windows、Ubuntu、macOS** 操作系统。
:::

使用请参考视频和文字教程,在控制机械臂运动之前，需要重新设置一次零点。

<div class="video-container">
<iframe width="900" height="600" src="//player.bilibili.com/player.html?isOutside=true&aid=116440455775355&bvid=BV1r9d1BuE6w&cid=37680974119&p=1&autoplay=0&muted=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

### 软件配置与校准流程

按照正确的先后顺序操作，即可安装 Miniforge 并为 reBot 创建独立的 Python 环境。

<div className="rebot-step-flow">
<section className="rebot-step-item">
    <span className="rebot-step-number">1</span>
<div className="rebot-step-content">
      <h4>安装 Miniforge</h4>
      <p className="rebot-step-label">第 1 步</p>

根据操作系统下载并安装 Miniforge：

<Tabs>
<TabItem value="Ubuntu" label="Ubuntu\Jetson\树莓派">

```bash
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
```

安装过程中按 <kbd>Enter</kbd> 确认，提示条款时输入 `yes`，询问是否初始化 Conda 时也输入 `yes`。

重启终端后运行 `conda --version` 验证安装。

:::tip 如果找不到 `conda`
加载 Miniforge 并初始化 Bash：

```bash
source ~/miniforge3/etc/profile.d/conda.sh
conda init bash
```
:::

</TabItem>
<TabItem value="macOS" label="macOS">

```bash
curl -L -O "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-MacOSX-$(uname -m).sh"
bash Miniforge3-MacOSX-$(uname -m).sh
```

安装过程中按 <kbd>Enter</kbd> 确认，提示条款时输入 `yes`，询问是否初始化 Conda 时也输入 `yes`。

重启终端后运行 `conda --version` 验证安装。

:::tip 如果找不到 `conda`
加载 Miniforge，并为当前 macOS 默认使用的 Zsh 初始化 Conda：

```bash
source ~/miniforge3/etc/profile.d/conda.sh
conda init zsh
```
:::

</TabItem>
<TabItem value="windows" label="Windows">

打开 [Miniforge Releases 页面](https://github.com/conda-forge/miniforge/releases)，找到最新版本的 `Miniforge3-Windows-x86_64.exe` 并下载。

:::tip 根据终端初始化 Conda
**Git Bash 用户**：如果找不到 `conda`，请先加载 Conda：

```bash
# 临时生效：将 <安装路径> 替换为实际路径
source <安装路径>/etc/profile.d/conda.sh

# 永久生效：写入 bashrc，仅需执行一次
echo 'source <安装路径>/etc/profile.d/conda.sh' >> ~/.bashrc
source ~/.bashrc
```

PowerShell 用户可执行：

```bash
conda init powershell
```
:::

</TabItem>
</Tabs>

</div>
</section>

<section className="rebot-step-item">
    <span className="rebot-step-number">2</span>
<div className="rebot-step-content">
      <h4>环境配置</h4>
      <p className="rebot-step-label">第 2 步</p>

创建 Python 3.12 版本虚拟环境：

```
conda create -y -n rebot python=3.12
```

随后激活虚拟环境。**每次打开终端使用 reBot 相关功能时，都需要重新执行该激活命令**：

```bash
conda activate rebot
```

</div>
</section>

<section className="rebot-step-item">
    <span className="rebot-step-number">3</span>
<div className="rebot-step-content">
      <h4>安装 Motorbridge</h4>
      <p className="rebot-step-label">第 3 步</p>

:::tip

提示 macOS 用户注意：
如果您在 macOS 上遥操时帧率偏低，可能是沁恒（WCH）CH34x 驱动版本过旧导致。对于 **macOS 10.14 及以上版本**，系统已内置 AppleUSBCHC0M 驱动，您可以先卸载旧版驱动，改用 macOS 内置驱动，通常能有效提升帧率。

:::

激活 reBot 虚拟环境后，执行以下命令安装 motorbridge：

```bash
pip install motorbridge
```

</div>
</section>

<section className="rebot-step-item">
    <span className="rebot-step-number">4</span>
<div className="rebot-step-content">
      <h4>连接机械臂</h4>
      <p className="rebot-step-label">第 4 步</p>

使用 USB 数据线将机械臂连接至电脑并接通电源后，需要为串口配置 666 权限。（Windows系统不需要配置权限，跳过此步骤即可）

```bash
sudo chmod 666 /dev/ttyACM*
```

</div>
</section>

<section className="rebot-step-item">
    <span className="rebot-step-number">5</span>
<div className="rebot-step-content">
      <h4>启动 MotorBridge</h4>
      <p className="rebot-step-label">第 5 步</p>

在浏览器中打开地址 [motorbridge-studio（点击跳转）](https://motorbridge.github.io/motorbridge-studio/)，打开网页后点击帮助选项，根据你的操作系统与所用驱动板复制对应指令，核对 IP 地址与端口号后，在终端中按下回车运行。

以 Windows 系统为例：

```bash
motorbridge-gateway -- --bind 127.0.0.1:9002 --vendor damiao --transport dm-serial --serial-port COM3 --serial-baud 921600 --model 4340P --motor-id 0x01 --feedback-id 0x11 --dt-ms 20
```

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/motorbridge_help.png" />
</div>

</div>
</section>
</div>


## 常见问题
  1. 电机一启动就有很大声的异响？
    - 可能是在写入ID的过程中不小心点了参数标定，这会导致电机原本出厂的转动惯量等参数被破坏。你可以用[DMTool-v2.1.9.4.exe（仅支持 Windows 系统）](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DMTool-v2.1.9.4.exe)上位机将同型号正常的电机参数导出，然后再导入到异常的电机后，修改相应的CANID，点击写入参数后继续执行零点校准的流程。

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
    - 在用[DMTool-v2.1.9.4.exe（仅支持 Windows 系统）](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/DMTool-v2.1.9.4.exe)校准零点的时候千完别点CANID旁边的读取和设置两个按钮，调试的页面是通过CAN通讯链路完成的，如果点了设置，会把CANBUS上所有的电机设置成同一个CAN


### 购买与选型

<details className="content-details">
<summary>reBot DM 和 RS 有什么区别？该怎么选？</summary>

两者都是 6 轴开源机械臂，核心差别在电机方案：**DM 版采用达妙（DM）准直驱电机，RS 版采用灵足（Robstride）行星减速电机**。官方定位 RS 为第二代方案，控制更稳、定位更准、负载略高；DM 版本用户多、资料生态成熟。选购建议：已经在用达妙生态、或需要兼容现有达妙代码/上位机，继续选 DM；追求更稳定控制和更高负载，选 RS。

</details>

<details className="content-details">
<summary>reBot 在哪里购买？官方淘宝链接是什么？</summary>

- reBot Arm B601-DM 淘宝套件：https://e.tb.cn/h.RPhIHJUc4p9jhvI?tk=1WACg3iJ5lk
- reBot Arm B601-RS 淘宝套件：https://e.tb.cn/h.RwJvpoc6dx5irCM?tk=cfZGgOx0guz
- 海外/美国用户：https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html （预售）
- 官方开源仓库（含 BOM、图纸）：https://github.com/Seeed-Projects/reBot-DevArm

</details>

<details className="content-details">
<summary>DM/RS机械臂 接电池怎么办？</summary>

DM\RS机械臂接电池需要额外的稳压模块以及电路设计，对于电流浪涌和反向电动势，可以给购买我们的RS泄放模块https://www.seeedstudio.com/Rebotic-Bleeder-Module-for-reBot-Arm-B601-RS-p-6987.html DM叠放模块https://www.seeedstudio.com/Rebotic-Power-Discharge-Module-for-reBot-Arm-B601-DM-p-6988.html

</details>

<details className="content-details">
<summary>reBot 推荐什么相机？腕部/顶部怎么装？</summary>

相机支持单目、Realsense和Orbbec的深度、双目相机，可以在这里打印相机支架https://github.com/Seeed-Projects/reBot-DevArm/#-optional-hardware

</details>

<details className="content-details">
<summary>reBot 用的电机具体是什么型号？</summary>

- B601-DM：达妙 **DM4310（24V）** 和 **DM4340P（24V）**（注意是 4340P，普通 4340 装不上）。
- B601-RS：灵足 **RS00 / RS06** 等型号，底部关节可换 **RS04**。
- 减速比等详细参数见各电机厂商手册（达妙/灵足官方文档）。

</details>

<details className="content-details">
<summary>底座尺寸是多少？怎么固定在桌面上？</summary>

底座尺寸和固定孔位见开源文件 `01_BASE_Plate.step`：https://github.com/Seeed-Projects/reBot-DevArm/tree/main/hardware 。桌面固定推荐 6 寸 G 型夹；也可自行设计转接板固定在铝型材或移动平台上。

</details>

<details className="content-details">
<summary>小配件（导轨滚珠、英标转换头、相机连接件）去哪买？</summary>

- 夹爪导轨滚珠等标准件参数见 BOM：https://github.com/Seeed-Projects/reBot-DevArm/blob/main/hardware/reBot_B601_DM/readme_zh.md
- 相机支架/连接件：官方提供 3D 打印文件，自行打印或找打印服务。

</details>

<details className="content-details">
<summary>柔性夹爪有卖吗？文件在哪？</summary>

官方柔性夹爪的打印件开源在 GitHub（[搜索 `softgripper`](https://github.com/Seeed-Projects/reBot-DevArm/#diy-soft-finger)）；RS 版柔性夹爪可找客服咨询购买。夹爪扭矩受限时可换柔性夹爪、力矩给大，兼顾速度与夹持稳定性。

</details>

<details className="content-details">
<summary>机械臂能换成别的末端（如智元灵巧手）吗？</summary>

可以，需要自行做转接：J6 末端给夹爪的线已集成 24V 供电和 CAN，智元 O10 等灵巧手供电与 CAN 是分开的，**加一块转接板把信号和电源合并**即可对接；注意核对供电电流和 CAN ID 是否冲突。

</details>

### 售后与 SN 码

<details className="content-details">
<summary>机械臂/驱动板坏了怎么申请售后？</summary>

联系淘宝店铺客服（矽递科技Seeed Studio 天猫店）走售后流程；群内可 @官方技术支持（如小小应用工程师）先做故障定位。售后通常需要你提供 **SN 码**：位置在机械臂底座或包装盒上，拍照发给客服即可。驱动板、舵机等人为损坏或超保情况可能需付费维修。

</details>

<details className="content-details">
<summary>收到货少发/漏发了配件怎么办？</summary>

先核对 BOM 清单，确认缺失后联系淘宝客服补发（如电源、垫片、螺丝、支架等均有补发记录）。发货前建议拍摄开箱视频留证。

</details>

### 教程与资料

<details className="content-details">
<summary>官方的教程、wiki、视频合集在哪里？</summary>

- **DM 版上手 Wiki**：[/cn/rebot_b601_dm_getting_started/](/cn/rebot_b601_dm_getting_started/)
- **RS 版上手 Wiki**：[/cn/rebot_b601_rs_getting_started/](/cn/rebot_b601_rs_getting_started/)
- **RS 版 LeRobot 教程**：[/cn/rebot_arm_b601_rs_lerobot/](/cn/rebot_arm_b601_rs_lerobot/)
- **GitHub 主仓库（BOM/图纸/SDK/教程索引）**：https://github.com/Seeed-Projects/reBot-DevArm
40章节从0开始的手把手课程 [/cn/robotics/rebot_physical_ai_course_introduction/](/cn/robotics/rebot_physical_ai_course_introduction/)
手把手带你复现论文理论+实践 [/cn/robotics/rebot_physical_ai_course_introduction/](/cn/robotics/rebot_physical_ai_course_introduction/) 
reBot仿真体验页面 https://seeed-projects.github.io/reBot_RS_Sim/ 
无码化体验的sensecraft平台教程 [/cn/sensecraft_robotics/](/cn/sensecraft_robotics/)
- **B站视频课**：组装 https://b23.tv/MkMnfqN ；ID 写入与零点校准 https://b23.tv/ApfFH0X ；校准及上手 https://b23.tv/FMvvQRI
- 视觉抓取 Demo 教程：[/cn/rebot_arm_b601_dm_grasping_demo/](/cn/rebot_arm_b601_dm_grasping_demo/)
- Pinocchio/Meshcat 仿真：[/cn/rebot_arm_b601_dm_pinocchio_meshcat/](/cn/rebot_arm_b601_dm_pinocchio_meshcat/)

</details>

<details className="content-details">
<summary>组装需要准备哪些工具？</summary>

内六角扳手、十字螺丝刀、剪刀；最后接 USB-CAN 时需一把小一字螺丝刀。建议备一套精密电动螺丝刀。打印件材质推荐 **PLA+，填充 15%**（夹爪等受力件可提高填充）。

</details>

<details className="content-details">
<summary>机械臂的 URDF / 三维模型 / STEP 文件在哪？</summary>

- RS URDF：https://github.com/Seeed-Projects/reBotArm_control_py/tree/main/urdf/RS/urdf
- RS 模型/图纸说明：https://github.com/Seeed-Projects/reBot-DevArm/blob/main/hardware/reBot_B601_RS/README_zh.md
- DM 3D 打印件：https://github.com/Seeed-Projects/reBot-DevArm/tree/main/hardware/reBot_B601_DM/3D_Printed_Parts
- 第三方实时控制库（含 IK）：https://github.com/xensedyl/rebotarm_control_rt

</details>

<details className="content-details">
<summary>想用 LeRobot 跑 reBot，支持吗？</summary>

支持。现在 reBot 601 已直接使用 LeRobot 官方接口（`rebot_b601_follower`），安装官方 LeRobot 后即可校准、遥操作、采集与训练；RS 版适配跟进中，参考 RS 的 LeRobot 教程页。

</details>

<details className="content-details">
<summary>想用 reBot 跑 VLA（如 π0.5）可以吗？</summary>

可以，群内已有 B601-RS 跑 VLA 的实践，推荐 π0.5 或 LeRobot 支持的主流策略；摄像头建议一个腕部 + 一个全局视角，具体见 RS LeRobot wiki 页面。

</details>

<details className="content-details">
<summary>如何删除已采集的某条数据集 episode？</summary>

使用 lerobot-edit-dataset 工具：
`lerobot-edit-dataset --repo_id rebot_b601/grab_cube_v1 --operation.type delete_episodes --operation.episode_indices "要删除的序号"`。

</details>

<details className="content-details">
<summary>官网/文档打不开或找不到页面怎么办？</summary>

优先看 wiki 的 FAQ 章节（DM getting started 页底部）；motorbridge 相关文档：https://motorbridge.github.io/motorbridge-studio/ 。若页面失效，可在群里反馈，官方会更新。

</details>

### 组装与硬件

<details className="content-details">
<summary>组装顺序有什么建议？能装一半先测试吗？</summary>

建议**分模块逐步测试**：底座装好后先测底座电机转动，再继续往上装；舵机/电机 ID 写入和零点校准要在正式固定前完成，否则返工麻烦。跟着 B 站组装视频逐课走，官方推荐先校准舵机再组装（线材还没被压住，更容易操作）。

</details>

<details className="content-details">
<summary>校准/ID 写入的流程是什么？</summary>

DM 版：用 **motorbridge 网页端**连接 USB-CAN → 使能电机 → 写入零点/校准（关节 1 未归零时先检查使能是否成功、1 号电机是否绿灯）；也可用达妙官方 DM-Tools 上位机（Windows/Linux）。RS 版：见 [/cn/rebot_b601_rs_getting_started/](/cn/rebot_b601_rs_getting_started/) 第 4 节"写入零点和调试"。回零位时有轻微响声/UI 显示异常属已知问题，不影响使用。

</details>

<details className="content-details">
<summary>机械臂和电脑之间怎么连线？线材型号？</summary>

- DM 版：机械臂 → USB2CAN/FDCAN 模块 → 电脑 USB。CAN 线为 **GH 1.25** 端子。
- CAN 模块需注意终端电阻 120Ω 拨码位置；PCAN 驱动安装教程在 wiki 内。
- 官方套件附带的线材与驱动板用于单电机调试（灵足上位机/改寄存器参数），日常使用不需要单独接。

</details>

<details className="content-details">
<summary>机器人的电机需要多大扭矩？安全扭矩是多少？</summary>

参考电机额定扭矩即可（DM4340 约 3Nm 量级，具体以厂商手册为准）4 号关节末端负载不大，原装电机够用；长时间超载会触发电机过温/过载保护。

</details>

<details className="content-details">
<summary>电机方向反了 / ID 重复 / 电机不响应怎么处理？</summary>

- 方向反：用 DM-Tools（达妙）或灵足上位机修改电机方向参数。
- ID 冲突（如报 `Missing motor IDs`、1 号变 6 号）：重新用调试工具逐个扫描并改写 ID。
- J3/J4 等关节不响应：先检查对应线束是否松动/接触不良（DM 版常见 4-5 号电机连接线问题），再排查驱动板。

</details>

<details className="content-details">
<summary>夹爪上电后超出限位、一直全开或角度异常怎么办？</summary>

夹爪掉出过限位后需要**重新调零**：断电，将夹爪摆到闭合中位，再上电重新执行零点写入。若网页端只能识别部分关节，先确认 CAN 通信和供电正常。

</details>

<details className="content-details">
<summary>增加/更换电器件：泄放模块、相机支架、腕部支架通用吗？</summary>

32×32 UVC 腕部相机支架 DM/RS 通用；RS 与 DM 的 3D 打印件大部分通用但电机侧不通用（灵足 vs 达妙）。Gemini 相机支架需联系客服补发对应型号支架。

</details>

### 软件与环境

<details className="content-details">
<summary>需要什么系统？Windows 能用吗？</summary>

**LeRobot 遥操作/采集/训练强烈建议 Ubuntu（20.04/22.04）**；Windows 仅适合调试（DM-Tools 上位机）和部分校准场景，问题较多。不建议用虚拟机/WSL 跑真机（USB 透传和实时性都有坑）。Mac 可跑控制脚本，但 ROS2/Jazzy 建议 Docker 方案并做好网络映射。

</details>

<details className="content-details">
<summary>Python 环境怎么配？装什么依赖？</summary>

按 LeRobot 官方文档创建 conda 环境（Python 3.10），安装对应版本 PyTorch（需与 CUDA 匹配）；DM 版还需 motorbridge 及其驱动。Jetson 设备用 SDK Manager 烧录对应 JetPack 与 PyTorch 即可。遇到环境问题，把完整报错发给 AI/群里排查，比盲试快。

</details>

<details className="content-details">
<summary>可以用云 GPU 训练吗？</summary>

可以。官方推荐 SenseCraft Robotics 平台（新用户送积分，可直接跑 ACT）：https://sensecraft.seeed.cc/zh/robotics ；也可用 AutoDL、Featurize 等租用平台，按小时计费。

</details>

<details className="content-details">
<summary>训练机械臂需要什么电脑配置？</summary>

Ubuntu 系统 + NVIDIA 显卡（建议 RTX 3080 及以上，6GB 显存起步可跑 ACT）；训练时不要用虚拟机。显存越大越从容，π0.5 等大模型需要 24GB+。

</details>

### 通信与控制

<details className="content-details">
<summary>reBot 支持 ROS2 吗？控制频率多少？</summary>

支持：官方 ROS2 控制器 https://github.com/Seeed-Projects/reBotArmController_ROS2 ；Python SDK：https://github.com/Seeed-Projects/reBotArm_control_py 。LeRobot 下实测控制频率约 70Hz，受图像传输、leader 臂速率等因素影响。

</details>

<details className="content-details">
<summary>能实现阻抗控制/导纳控制吗？</summary>

rebot 目前官方示例以位置/速度/力矩（MIT）模式为主，笛卡尔空间阻抗控制尚未内置；做力控/柔顺控制需自行开发，导纳/阻抗控制一般需要加装力传感器。DM 电机支持 MIT 模式，可在代码层面做力矩控制。

</details>

<details className="content-details">
<summary>达妙调试工具在哪下载？支持 Linux 吗？</summary>

DM-Tools 上位机（Windows/Linux 版）从达妙官方渠道获取；Ubuntu 下可用 motorbridge 网页端替代。USB-CAN 模块闪红灯属正常状态，以能否扫描到电机为准。

</details>

<details className="content-details">
<summary>可以用 VR / 手柄遥操作吗？</summary>

可以。群内已有 VR 遥操作 rebot 的实践（掉力矩问题可通过固件/参数改善）；也可用两个 reBot 做主从（一个当 leader），或参考开源手柄控制项目。

</details>

### 训练与部署

<details className="content-details">
<summary>采集数据、训练策略的完整流程是什么？</summary>

遥操作示教采集 → 数据集整理（LeRobot 格式）→ 训练 ACT/π0.5 等策略 → 部署推理。可参考 RS LeRobot 教程页与 SenseCraft Robotics 平台文档；ACT 简单任务一般 4 万步左右、数据 50 组以上效果明显。

</details>

<details className="content-details">
<summary>双臂 ACT 怎么复现？</summary>

参考官方双 SO-ARM 训练教程（reBot 同理）：[/cn/lerobot_double_arm_so_arm_training/](/cn/lerobot_double_arm_so_arm_training/) 。需要两套主从臂、足够的数据量与 GPU 资源。

</details>

### 故障排查

<details className="content-details">
<summary>机械臂运动到目标位置后抖动/异响怎么办？</summary>

- 抖动：降低 KP（如 KP=50、KD=4）或套用官方默认参数模板；轨迹规划速度适当提高反而更平滑。
- 异响：区分电机定子正常声与结构件干涉；J3 噪音偏大先拍视频听声判断，必要时联系售后。
- 上电"哒"的一声继电器响属正常；电源保险丝一般不会跳。

</details>

<details className="content-details">
<summary>通信突然中断、"connection error"、电机失能怎么办？</summary>

依次排查：USB/ CAN 线是否松动（DM 版 4-5 号电机连接线是高发点）→ 是否 USB HUB 供电/带宽不足（相机不要接扩展坞）→ 驱动是否安装（PCAN/PCAN 驱动）→ 电源电压是否跌落。故障复现时拍视频/截图报给官方技术支持。

</details>

