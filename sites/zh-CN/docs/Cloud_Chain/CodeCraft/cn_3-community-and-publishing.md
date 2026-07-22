---
description: 通过 SenseCraft AI 应用广场浏览、复用并发布你的 CodeCraft 作品。
title: CodeCraft 作品发布与社区分享
keywords:
  - CodeCraft
  - 发布
sidebar_label: 3. 作品发布与社区分享
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /codecraft/community-and-publishing
sidebar_position: 4
last_update:
  date: 06/29/2026
  author: Shihan Gao
url: https://wiki.seeedstudio.com/cn/codecraft/community-and-publishing/
createdAt: '2026-06-30'
updatedAt: '2026-06-29'
---

# CodeCraft 作品发布与社区分享

CodeCraft 不只适合从零创建项目，也可以通过 SenseCraft AI 应用广场浏览、复用和发布作品。

在应用广场中，你可以查找项目灵感、浏览官方案例、体验社区项目，也可以将自己使用 CodeCraft 完成的作品发布出来，分享给更多用户。其他用户可以查看你的项目、部署固件，并在你允许的情况下克隆项目进行学习或二次创作。

本文将介绍如何使用应用广场浏览社区项目，以及如何将 CodeCraft 作品发布到 SenseCraft AI 应用广场。

---

## 3.1 应用广场与社区项目

在 SenseCraft AI [应用广场](https://sensecraft.seeed.cc/ai/application)，你可以一站式完成从灵感获取到作品发布的全流程。 

![CodeCraft 社区项目](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/codecraft-community-ZH.png)  

**你能用它做什么？**

| 目的 | 具体说明 |
|------|----------|
| 🔍 找灵感 | 浏览海量项目，获取创意想法 |
| 📖 学官方案例 | 参考官方出品的标准实现 |
| ♻️ 复用社区项目 | 直接 fork 或改编他人作品 |
| 🚀 发布自己的作品 | 展示成果，成为社区可分享项目 |
| 🎮 快速体验硬件玩法 | 从小游戏到复杂创客项目，快速原型验证 |

**核心优势**

- **CodeCraft 加速开发** —— 帮你更快完成原型制作，降低编码门槛。
- **作品一键发布** —— 完成后可直接发布到广场，供全球社区复用。

> 💡 适合从娱乐小游戏到复杂创客项目的所有阶段，无论新手还是老手都能受益。
>

**应用广场怎么玩**

| 参与方式 | 怎么做 | 适用场景 |
| :--- | :--- | :--- |
| **浏览与复用** |**克隆**（复刻项目→ 在原基础上二次修改） | • 快速体验开发板或传感器的玩法<br/>• 基于已有案例做二次修改<br/>• 将官方案例改造为教学或展示项目 |
| **创建与发布** |**发布**（通过“应用 → 我的应用 → 新建应用→ 新建工作空间”上传自己项目） | • 展示创意，收获社区反馈<br/>• 贡献范例，供他人参考学习<br/>• 积累作品集，提升个人影响力 |
---

## 3.2 应用发布

### 3.2.1 应用发布准备

开始发布前，请先准备好以下内容：

| 准备项 | 具体要求 | 备注 |
|--------|----------|------|
| **项目图片** | • 建议作为封面图<br/>• 推荐比例 `4:3`<br/>• 大小 < `2MB`<br/>• 清晰、美观，直观展示项目效果 | 必须 |
| **项目名称与介绍** | • 名称简洁有吸引力<br/>• 可包含设备关键词（如 `Wio Terminal`、`XIAO ESP32S3 Sense`） | 必须 |
| **固件文件** | • 格式：`.bin` 或 `.hex`<br/>• 必须在真实设备上测试通过，确保正常运行<br/>• Wio Terminal、XIAO ESP32S3 Sense 等常用 `.bin`<br/>• Grove Beginner Kit 常用 `.hex` | 必须 |
| **源代码文件** | • 例如 `.ino` 文件<br/>• 可选上传，便于他人学习或二次修改 | 可选 |

### 3.2.2 应用发布 Q&A

| 问题 | 回答要点 |
|------|----------|
| **固件缺失怎么办？** | - 固件是发布中最重要的文件，缺少则他人无法体验项目<br/>- 下载后请**先烧录到设备测试**，确认正常运行后再上传<br/>- 若未自动生成，可对 CodeCraft AI 说：请给我 `.bin` 固件文件下载。 |
| **封面和文档内是否支持上传 GIF？** | - 封面和文档内都支持 GIF<br/>- 动态作品用 GIF 作封面效果更直观，推荐使用<br/>- 注意控制文件大小，避免影响页面加载速度 |
| **文中是否支持插入视频？** | - 支持，可直接嵌入视频链接<br/>- 目前兼容 YouTube、哔哩哔哩、抖音等主流平台<br/>- 粘贴链接到文档编辑器，即可自动识别并显示播放窗口 |



## 3.3 在 SenseCraft AI 上发布新的应用

### 3.3.1 前往 SenseCraft AI

打开 [SenseCraft AI 应用广场](https://sensecraft.seeed.cc/ai/application)，你可以选择从零开始创建应用，也可以基于已有应用进行克隆修改后再发布。

### 3.3.2 新建应用

你可以从零开始创建应用，也可以使用已有应用作为模板。

#### 3.3.2.1 使用模板或克隆已有应用

你也可以打开任意已发布的应用，点击 `Clone`，在该应用的基础上继续修改。

![克隆应用](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/Clone-App-ZH.png)

#### 3.3.2.2 创建新应用

进入应用广场页面，然后点击：

`我的应用` > `新建应用` > `创建新的工作空间`

![创建新应用](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/create-new-app-ZH.png)

### 3.3.3 编辑内容

创建应用后，按照编辑器中的 4 个步骤完善应用信息。

![编辑应用流程](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/Edit-App-Flow-ZH.png)

#### 3.3.3.1 应用简介

在这一部分需要填写应用的基础信息，包括名称、描述、场景、许可证和图片。填写应用的基础信息，各项要求如下：

| 填写项 | 说明与建议 | 必填 |
| :--- | :--- | :--- |
| **名称** | • 清晰、有吸引力<br/>• 建议包含设备关键词：`Wio Terminal`、`Grove Beginner Kit`、`XIAO ESP32S3 Sense`、`CodeCraft`<br/>• 示例：`CodeCraft 智能温湿度显示器 - Wio Terminal` | ✅ |
| **描述** | • 简要说明应用功能及所用硬件<br/>• 可注明“使用 CodeCraft 制作”以说明来源<br/>• 示例：`这是一个使用 CodeCraft 创建的 Wio Terminal 项目，可实时显示温湿度数据。` | ✅ |
| **场景** | 从以下选项中选择合适的分类：<br/>• 教育学习<br/>• 智能家居<br/>• 环境监测<br/>• 传感器应用<br/>• AIoT 项目 | ✅ |
| **许可证** | **① 允许克隆**（复制修改）：<br/>开启后他人可克隆你的应用进行二次修改；关闭则仅可查看部署。<br/><br/>**② 允许商业使用**：<br/>开启后他人可将你的作品用于商业场景；关闭则禁止商用。 | ✅ |
| **图片** | • 使用真实设备运行照片<br/>• 比例 `4:3`，大小 < `2MB`<br/>• 清晰展示项目效果<br/>• 最多上传 **16** 张 | ✅ |

#### 3.3.3.2 应用详情

在文档部分，你需要介绍项目背景、制作过程和使用方法，同时添加固件烧录功能块以便其他用户一键部署到设备。文档内容可涵盖项目功能、所用硬件、制作过程、提示词、运行效果及注意事项，并可附上 CodeCraft 链接。

| 分类 | 操作说明 / 内容要点 | 示例图片 |
| :--- | :--- | :--- |
| **添加项目介绍** | • 说明项目功能、所用硬件<br/>• 描述使用 CodeCraft 的制作过程<br/>• 列出使用过的提示词<br/>• 展示项目运行效果和注意事项<br/>• 可添加 CodeCraft 链接 |![project-doc-interface-ZH](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/project-doc-interface-ZH.png) |
| **部署固件与设备** | • 插入'烧录固件',从‘部署设备’中选择目标设备<br/>• 支持 `Wio Terminal`、`Grove Beginner Kit`、`XIAO ESP32S3 Sense` 等 | ![文档编辑页面](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/Document-editing-page-ZH.png) |
| **上传固件文件** | • 上传 `.bin` 或 `.hex` 固件<br/>• `.hex` 通常用于 `Grove Beginner Kit`<br/>• 确保固件已在真实设备上测试通过 | ![添加烧录固件功能块](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/add-firmware-burning-function-block-ZH.png) |
| **上传源代码（可选）** | • 上传 `.ino` 等源文件<br/>• 便于他人学习或进行二次修改 | ![上传固件和源代码](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/upload-firmware-and-source-code-ZH.png) |
| **制作步骤和测试** | • 描述项目制作的具体步骤<br/>• 说明测试方法和实际运行效果<br/>• 可附加测试数据或截图说明 | — | 

#### 3.3.3.3 物料清单

| Seeed 开发板（Controller） | 其他 Seeed 产品 | 第三方硬件 / 工具 |
| :--- | :--- | :--- |
|`Wio Terminal`、`Grove Beginner Kit`、`XIAO ESP32S3 Sense` | • Grove 传感器、扩展板、模块等<br/>   • 若未找到对应硬件，可通过 [SenseCraft AI 设备添加请求表单](https://seeedstudio.feishu.cn/share/base/form/shrcnNgPcW5x5rIrz4i066BlTqh) 申请添加。<br/> |• 第三方硬件<br/> • 其他相关材料<br/>|




#### 3.3.3.4 预览与发布

**确认以下事项后再提交：**

| 类别 | 检查项 |
| :--- | :--- |
| **基础信息** | • 封面图清晰、美观<br/>• 应用名称准确<br/>• 应用介绍清楚明了<br/>• 许可证设置符合预期 |
| **物料与固件** | • 物料清单完整<br/>• 固件文件上传正确<br/> |
| **功能验证** | • 烧录后设备功能正常运行 |
| **可选内容** | • 源代码文件可正常下载（如已上传）<br/>• 其他文件（如：3D建模文件或2D矢量图） <br/> |

确认无误后，点击 **发布**，并同意免责声明。

### 3.3.4 发布完成后

审核通过后，你的应用会显示在 SenseCraft AI 应用广场中。

你可以复制应用链接，并分享到社交媒体、社区论坛或项目文档中，让更多人看到并使用你的 CodeCraft 作品。

