---
description: 本指南将帮助您快速上手 reBot Arm B601-DM 机械臂，包括购买选项、组装、校准和软件配置。
title: reBot Arm B601-DM 快速入门
keywords:
  - reBot
  - B601-DM
  - B601-RS
  - 机械臂
  - 机器人
  - Lerobot
  - Pinocchio
  - 6 自由度
# image: 
slug: /rebot_b601_rs_getting_started
translation:
  skip:
    - zh-CN
last_update:
  date: 2026-05-26
  author: LiuJunjie
createdAt: '2026-05-26'
updatedAt: '2026-05-26'
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

:::

## 购买选项


## 第一步：组装机械臂

- 开始组装前，请您务必仔细阅读以下内容。为确保您顺利完成组装并获得完整的动手体验，组装过程中请保持耐心与专注，并时刻遵循以下要点：
  1. 本套件包含大量螺丝与结构件，部分零件外观相近。组装时请耐心核对螺丝规格与零件型号，确认安装方向无误后再进行固定。
  2. 视频为四月初拍摄，后续或许会有零件微调和改动，但是不影响跟随本视频的安装效果，最终零件以出货为准。
  3. 为方便大家拧螺丝和取下螺丝，开源BOM中所选用的是普通螺丝，但是正式出货螺丝涂了防松胶,您也可使用自备的顺手工具或电动螺丝刀（强烈推荐准备好电动螺丝刀）。若使用电动工具，务必将扭力调至中低档(3~6kgf.cm)，避免扭力过大导致螺丝滑丝，造成部件无法取下的不可逆损失。有任何滑丝的可能就立刻更换螺丝或者对准后重新拧，防松螺丝滑丝无法用滑丝取出器取出，会报废整个零件。所以务必小心谨慎。
  4. 组装过程中请务必注意安全，防止夹手、砸伤，儿童请在家长或监护人陪同下完成该项目。

## 第二步：写入电机ID及零点

### 电机复位前须知

在进行电机参数配置前，请留意以下准备事项与安全规范：

- 自备2个工装夹具（尺寸≥3英寸）以及一台48V、XT30输出开关电源（请选用正规品牌产品，严禁使用劣质电源）。
- 调试与操作过程中，请保持至少1米安全距离。
- 禁止电机热插拔；插拔XT30 2+2接口前必须断开电源。
- 禁止电机超载、超速运行；设备启动前检查线路接线与紧固件；请勿在潮湿、高温、多尘环境下使用。
- 需设置合理的程序参数与急停功能，防止设备失控。
- **请严格遵守以上规范。因违规操作、人为失误造成的一切风险与损失，卖家不承担任何责任。**

### 准备清单

#### 硬件设备

#### 电脑配置要求

- 双系统个人电脑（Windows + Ubuntu / macOS）

#### 所需软件