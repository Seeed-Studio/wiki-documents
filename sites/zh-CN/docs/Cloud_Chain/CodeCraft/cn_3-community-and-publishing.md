---
description: 通过 SenseCraft AI 应用广场浏览、复用和发布 CodeCraft 项目。
title: CodeCraft 社区与发布
keywords:
  - CodeCraft
  - 发布
sidebar_label: 3. 社区与发布
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /codecraft/community-and-publishing
sidebar_position: 4
last_update:
  date: 06/29/2026
  author: Shihan Gao
url: https://wiki.seeedstudio.com/cn/codecraft/community-and-publishing/
createdAt: '2026-06-29'
updatedAt: '2026-06-29'
---

# CodeCraft 社区与发布

CodeCraft 不仅适用于从零开始构建项目，还允许你通过 SenseCraft AI 应用广场浏览、复用和发布作品。

在应用广场中，你可以探索项目灵感、浏览官方示例、体验社区项目，并将你自己的 CodeCraft 创作发布出来，与更多用户分享。其他用户可以查看你的项目、部署固件，并且——在你允许的情况下——克隆你的项目用于学习或进一步开发。

本文档将说明如何在应用广场中浏览社区项目，以及如何将 CodeCraft 项目发布到 SenseCraft AI 应用广场。

---

## 3.1 应用广场与社区项目

在 SenseCraft AI 的[应用广场](https://sensecraft.seeed.cc/ai/application?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_app_square)中，你可以在一个地方完成从灵感发现到项目发布的完整流程。

![CodeCraft Community Projects](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/codecraft-community-EN.png)

**你可以在这里做什么？**

| 目的 | 说明 |
|------|----------|
| 🔍 寻找灵感 | 浏览大量项目以获取创意 |
| 📖 学习官方示例 | 学习官方团队提供的标准化实现 |
| ♻️ 复用社区项目 | 直接 Fork 或改造现有作品 |
| 🚀 发布自己的作品 | 向社区展示你的创作 |
| 🎮 快速体验硬件 | 从小游戏到复杂创客项目，支持快速原型开发 |

**核心优势**

- **CodeCraft 加速开发** — 帮助你更快搭建原型，降低编程门槛。
- **一键发布** — 完成的项目可直接发布到广场，供全球用户复用。

> 💡 适用于从休闲小项目到高级创客作品的各个阶段，新手和有经验的用户都能从中受益。

---

**如何使用应用广场**

| 方式 | 工作方式 | 使用场景 |
| :--- | :--- | :--- |
| **浏览与复用** | **Clone**（克隆：复制项目 → 在原基础上修改） | • 快速体验开发板或传感器<br/>• 修改现有示例<br/>• 将官方项目改编为教学或演示 |
| **创建与发布** | **Publish**（App → My Apps → Create New App → New Workspace） | • 展示创意并获取反馈<br/>• 为他人贡献示例<br/>• 构建个人项目作品集 |

---

## 3.2 应用发布

### 3.2.1 发布前准备

在发布前，请准备以下材料：

| 项目 | 要求 | 备注 |
|--------|----------|------|
| **项目图片** | • 建议作为封面图<br/>• 宽高比：`4:3`<br/>• 大小小于 `2MB`<br/>• 清晰且具有代表性 | 必填 |
| **项目名称与描述** | • 名称简洁、有吸引力<br/>• 可包含设备关键词（如 `Wio Terminal`、`XIAO ESP32S3 Sense`） | 必填 |
| **固件文件** | • 格式：`.bin` 或 `.hex`<br/>• 必须在真实硬件上测试通过<br/>• `.bin` 适用于 Wio Terminal / XIAO ESP32S3 Sense<br/>• `.hex` 常用于 Grove Beginner Kit | 必填 |
| **源代码文件** | • 如 `.ino` 文件<br/>• 可选，用于学习和二次修改 | 选填 |

---

### 3.2.2 发布常见问题

| 问题 | 解答 |
|------|----------|
| **如果缺少固件怎么办？** | - 固件是必需的，没有固件其他人无法运行你的项目<br/>- 上传前务必在真实硬件上测试固件<br/>- 如果尚未生成，可向 CodeCraft AI 提问：“Please provide a `.bin` firmware file.” |
| **封面和文档是否支持 GIF？** | - 是的，封面和文档中都支持 GIF<br/>- 推荐用于动态演示效果<br/>- 请尽量减小文件体积以避免加载过慢 |
| **可以嵌入视频吗？** | - 可以，支持视频链接嵌入<br/>- 兼容 YouTube、Bilibili、抖音等平台<br/>- 直接将链接粘贴到编辑器中即可自动嵌入 |

---

## 3.3 在 SenseCraft AI 上发布新 App

### 3.3.1 访问 SenseCraft AI

打开 [SenseCraft AI 应用广场](https://sensecraft.seeed.cc/ai/application?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_app_square)。你可以从零创建一个新应用，或克隆现有应用进行修改后重新发布。

---

### 3.3.2 创建新应用

你可以从零开始，也可以使用现有应用作为模板。

#### 3.3.2.1 克隆现有 App

打开任意已发布的应用，点击 `Clone`，即可在其基础上继续编辑。

![Clone App](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/Clone-App-ZH.png)

---

#### 3.3.2.2 创建新 App

进入应用广场并点击：

`My Apps` > `Create New App` > `Create New Workspace`

![Create New App](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/create-new-app-EN.png)

---

### 3.3.3 编辑内容

创建应用后，可通过编辑器按四个步骤完善内容。

![Edit App Workflow](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/Edit-App-Flow-ZH.png)

---

#### 3.3.3.1 App 概览

填写应用的基础信息，包括名称、描述、应用场景、许可证和图片等。

| 字段 | 说明与建议 | 是否必填 |
| :--- | :--- | :--- |
| **名称** | • 清晰、有吸引力<br/>• 包含设备关键词，如 `Wio Terminal`、`Grove Beginner Kit`、`XIAO ESP32S3 Sense`、`CodeCraft`<br/>• 示例：`CodeCraft Smart Temperature & Humidity Display - Wio Terminal` | ✅ |
| **描述** | • 简要说明功能和使用的硬件<br/>• 如适用，可提及“使用 CodeCraft 创建”<br/>• 示例：`This is a Wio Terminal project created with CodeCraft for real-time temperature and humidity display.` | ✅ |
| **应用场景** | 从以下选项中选择：<br/>• 教育<br/>• 智能家居<br/>• 环境监测<br/>• 传感器应用<br/>• AIoT 项目 | ✅ |
| **许可证** | **1. 允许克隆：** 允许他人 Fork 并修改你的项目<br/>**2. 允许商业使用：** 如允许，则可用于商业用途 | ✅ |
| **图片** | • 使用真实设备照片<br/>• 宽高比 `4:3`，大小小于 `2MB`<br/>• 清晰展示项目效果<br/>• 最多可上传 16 张图片 | ✅ |

---

#### 3.3.3.2 App 详情

在此部分中，描述项目背景、开发过程和使用说明。你还可以添加固件模块，实现一键部署。

| 分类 | 编写说明 / 内容 | 示例 |
| :--- | :--- | :--- |
| **项目介绍** | • 描述功能和使用的硬件<br/>• 说明 CodeCraft 的工作流程<br/>• 列出使用的提示词<br/>• 展示结果与注意事项<br/>• 添加 CodeCraft 链接 | ![project-doc-interface](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/project-doc-interface-ZH.png) |
| **固件与设备部署** | • 插入 “Flash Firmware” 模块<br/>• 选择目标设备<br/>• 支持 Wio Terminal / Grove Beginner Kit / XIAO ESP32S3 Sense | ![Document Editing](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/Document-editing-page-ZH.png) |
| **上传固件文件** | • 上传 `.bin` 或 `.hex` 文件<br/>• `.hex` 通常用于 Grove Beginner Kit<br/>• 确保固件已测试通过 | ![Firmware Upload](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/add-firmware-burning-function-block-ZH.png) |
| **上传源代码（可选）** | • 上传 `.ino` 或其他源代码文件<br/>• 有助于学习和二次开发 | ![Upload Source](https://files.seeedstudio.com/SenseCraft/sensecraft-wiki/codecraft/3-community-and-publishing/upload-firmware-and-source-code-ZH.png) |
| **开发与测试细节** | • 清晰描述各步骤<br/>• 包含测试方法和结果<br/>• 需要时可添加截图或数据 | — |

---

#### 3.3.3.3 物料清单

| Seeed 开发板 | 其他 Seeed 产品 | 第三方硬件 / 工具 |
| :--- | :--- | :--- |
| `Wio Terminal`, `Grove Beginner Kit`, `XIAO ESP32S3 Sense` | • Grove 传感器、扩展模块等<br/>• 如缺少某设备，可通过 [SenseCraft AI Device Request Form](https://seeedstudio.feishu.cn/share/base/form/shrcnNgPcW5x5rIrz4i066BlTqh) 提交需求 | • 第三方硬件<br/>• 其他相关材料 |

---

#### 3.3.3.4 预览与发布

**提交前，请确认以下内容：**

| 分类 | 检查项 |
| :--- | :--- |
| **基础信息** | • 封面图片清晰、有吸引力<br/>• App 名称准确<br/>• 描述清楚明了<br/>• 许可证设置正确 |
| **物料与固件** | • 物料清单完整<br/>• 固件已正确上传 |
| **功能验证** | • 设备在烧录后能正常工作 |
| **可选内容** | • 源代码可下载（如已上传）<br/>• 其他文件，如 3D 模型或矢量素材 |

确认无误后，点击 **Publish** 并同意免责声明。

---

### 3.3.4 发布后

审核通过后，你的应用将出现在 SenseCraft AI 应用广场中。

你可以复制应用链接，并将其分享至社交媒体、社区论坛或项目文档，让更多用户发现并使用你的 CodeCraft 项目。
