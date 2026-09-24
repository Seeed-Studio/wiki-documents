---
title: SenseCraft Robotics 软件概览
description: 了解 SenseCraft Robotics 的平台功能、三种机械臂组合、软件下载与账号登录、项目管理、软件设置，以及积分与收费说明。
keywords:
  - SenseCraft Robotics
  - robotics
  - robot arm
image: /sensecraft-robotics/guide-assets/overview/sensecraft-robotics-official-website-zh.webp
slug: /sensecraft_robotics
last_update:
  date: 09/24/2026
  author: Seeed Studio
---

## 1. 软件介绍

SenseCraft™ Robotics 是面向真实机械臂任务的训练与运行平台，提供从设备接入、标定、数据采集到模型训练和验证的一体化流程，帮助教育、科研与机器人应用更快完成从示范数据到物理动作的验证。
![SenseCraft Robotics 官方网站](/sensecraft-robotics/guide-assets/overview/sensecraft-robotics-official-website-zh.webp)

### 1.1 软件概览

平台主要流程如下：

1. **设备设置**：选择机械臂型号，绑定主臂、从臂和摄像机，完成校准与遥操作验证。
2. **数据采集**：通过主臂带动从臂完成任务示范，录制多段数据。
3. **动作库**：录制、管理和回放可独立执行的动作片段。
4. **数据集管理**：预览视频，并修复、合并或上传数据集。
5. **训练**：选择数据集，进行云端训练或本地训练。
6. **运行**：选择已训练模型，进行本地或云端推理，让机械臂自主执行任务。

### 1.2 核心特点

- **引导式流程**：按页面步骤完成设备设置、采集、训练和运行。
- **云端训练**：将主要训练任务放到云端，降低本地电脑的算力要求。
- **项目管理**：集中管理项目、数据集和模型，便于重复使用和持续迭代。

官方入口：[SenseCraft Robotics](https://sensecraft.seeed.cc/zh?utm_source=sensecraft_wiki&utm_medium=socil)

### 1.3 适用场景
- **教育培训 / 科创教育机构**：用于组织 AI 机器人课程、项目制学习和学生作品展示。
- **高校 / 科研 / 实验室**：用于具身智能、模仿学习、机器人数据采集与模型验证。
- **创新中心 / 展示与方案团队**：用于搭建可演示的 AI 机器人应用样板，支持科普展示、客户体验和场景方案设计。

<span id="supported-devices"></span>

## 2. 支持的设备

### 2.1 支持的机械臂

![三款机械臂选择建议](/sensecraft-robotics/guide-assets/overview/device-selection-guide-zh.webp)

可根据使用目标选择设备：入门学习和基础开发选择入门款；需要更强性能和二次开发能力时选择进阶款；对定位精度和动作稳定性要求较高的项目选择高精度应用款。

| 款式 | 设备组合（主臂 + 从臂） | 购买链接 | 专用指南 |
|---|---|---|---|
| 01 | SO-ARM101 + SO-ARM101 | [立即购买](https://detail.tmall.com/item.htm?id=877820346195&utm_source=sensecraft_wiki&utm_medium=socil) | [SO-ARM101 指南](/cn/sensecraft_robotics_so_arm101/) |
| 02 | reBot Arm 102 + B601 DM | [立即购买](https://detail.tmall.com/item.htm?id=1042412233386&mi_id=0000Tzgf56Ahe5TEREo2RwCfxjt6ShkRlY9Js5w8wxbwScA&skuId=6073790464610&spm=a21xtw.29978518.0.0&xxc=shop&utm_source=sensecraft_wiki&utm_medium=socil) | [DM 指南](/cn/sensecraft_robotics_rebot_arm_102_b601_dm/) |
| 03 | reBot Arm 102 + B601 RS | [立即购买](https://detail.tmall.com/item.htm?id=1042412233386&mi_id=0000Tzgf56Ahe5TEREo2RwCfxjt6ShkRlY9Js5w8wxbwScA&skuId=6279331210830&spm=a21xtw.29978518.0.0&xxc=shop&utm_source=sensecraft_wiki&utm_medium=socil) | [RS 指南](/cn/sensecraft_robotics_rebot_arm_102_b601_rs/) |


> 本文介绍三种设备组合的通用软件流程。机械臂安装、接线和电源要求请参考对应的专用指南。

### 2.2 电脑和软件要求

- Windows 或 macOS 电脑。
- 稳定的网络连接，用于登录、项目管理、云端训练和推理验证。
- 已安装最新版本的 SenseCraft Robotics 客户端。
- 已注册 SenseCraft 账号。具体系统版本和硬件要求以官方软件下载页面说明为准。

<span id="download-and-account"></span>

## 3. 软件下载安装


![软件下载](/sensecraft-robotics/guide-assets/overview/software-overview-zh.webp)

### 3.1 下载软件

打开 [SenseCraft Robotics 官方页面](https://sensecraft.seeed.cc/zh?utm_source=sensecraft_wiki&utm_medium=socil)，进入软件下载入口，选择与操作系统对应的安装包。

### 3.2 安装软件

运行安装包，按照安装向导完成安装。安装完成后启动 SenseCraft Robotics 客户端。建议预留足够的磁盘空间，用于保存视频、数据集和模型文件。

### 3.3 注册账号

在用户中心选择“注册”或“创建账号”，按页面提示完成邮箱验证和密码设置。注册完成后，返回 SenseCraft Robotics 客户端。
![注册账号](/sensecraft-robotics/guide-assets/overview/sign-up-zh.webp)

### 3.4 登录软件

SenseCraft Robotics 客户端通过系统浏览器打开 SenseCraft 用户中心完成登录，客户端本身不直接输入密码。

1. 启动 SenseCraft Robotics 客户端，在登录窗口点击 **登录**。
2. 系统浏览器会打开 SenseCraft 用户中心；使用注册邮箱和密码登录，并按提示完成账号验证或授权。
3. 登录完成后进入“项目”页面，可创建新项目或打开已有项目。

    ![登录页](/sensecraft-robotics/guide-assets/overview/login-overview-zh.webp)

## 4. 软件整体介绍

<span id="home"></span>

### 4.1 首页

首页用于查看平台入口、项目状态和常用功能。首次使用时，可从首页进入项目或查看帮助信息。
 ![首页概述](/sensecraft-robotics/guide-assets/overview/overview-zh.webp)

<span id="projects"></span>

### 4.2 项目

项目是设备、任务、数据集和模型的统一管理空间。登录软件后，可按以下流程完成首次使用：

1. 创建项目并选择机械臂组合。
2. 连接主臂、从臂和摄像机。
3. 完成设备校准和遥操作验证。
4. 录制一段示范数据。
5. 检查数据集并上传或训练模型。
6. 选择模型进行运行验证。

   ![项目设置](/sensecraft-robotics/guide-assets/overview/project-settings-zh.webp)

<span id="settings"></span>

### 4.3 设置

在顶部导航栏点击“**设置**”即可进入，页面主要包含以下三个核心模块：

*   **个人信息**：查看和**编辑**当前账户的基础资料，包括头像、用户名、绑定邮箱和职业等信息。
*   **密码设置**：用于修改账户密码。输入**旧密码**验证身份后，即可设置并确认**新密码**。
*   **软件与服务**：
    *   **服务连接**：管理与第三方 AI 平台（如 Hugging Face）的授权接入。
    *   **版本管理**：查看当前软件版本号并检查更新，支持快捷执行**检查更新**、**下载更新**或**重启并更新**等操作。遇到验证问题时，也可通过提示快捷前往官网下载。

   ![设置](/sensecraft-robotics/guide-assets/overview/settings-zh.webp)

<span id="credits"></span>

## 5. 积分与收费说明

### 5.1 收费模式

SenseCraft Robotics 采用“积分充值 + GPU 按使用量扣费”的模式。

> 积分价格、有效期、扣费时机、退款规则和教育优惠政策可能因地区、版本和活动而变化。本文仅作功能说明，具体规则请以 SenseCraft Robotics 当前计费页面、任务确认页面和服务条款为准。

- 用户充值或兑换积分后，可用于训练和推理任务。
- 费用根据所选 GPU 型号和实际运行时长计算。
- 任务排队和资源准备阶段原则上不扣费，任务实际运行后才计费。
- 具体价格以平台当前页面显示为准。

### 5.2 积分充值

用户可以通过平台充值、兑换码或教育课程码获取积分。

- 充值金额越高，通常可获得更多赠送积分。
- 新用户可能获得一次性赠送积分。
- 教育用户可通过课程码使用学校或机构提供的共享积分。
- 不同类型的积分可能有不同的有效期和退款规则。

### 5.3 训练与推理扣费

创建任务时，平台会根据任务类型、GPU 型号和训练步数估算预计消耗，最终按实际运行时长结算。

- 训练任务根据训练步数估算运行时间。
- 推理任务根据实际运行时间计费。
- 最终费用可能低于或高于预计消耗。
- 余额不足时，任务可能自动停止，账户不会产生负积分。

### 5.4 积分退款与有效期

- 充值积分、赠送积分和教育积分按照平台规则管理。
- 任务未成功启动、平台异常或 GPU 异常时，通常会退回未使用积分。
- 用户主动取消任务时，已运行部分按实际使用量扣费。
- 已消耗的积分通常不支持退款。
- 具体有效期和退款规则以平台当前说明为准。
