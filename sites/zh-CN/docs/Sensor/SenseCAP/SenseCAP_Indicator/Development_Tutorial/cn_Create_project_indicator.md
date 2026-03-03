---
title: 创建项目(ESP-IDF) - SenseCAP Indicator
description: 使用 ESP-IDF 或 Squareline Studio 为 SenseCAP Indicator 开发项目的分步指南。
keywords: 
- SenseCAP Indicator
- ESP-IDF
- Squareline
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/sensecap_indicator_project
sidebar_position: 4
last_update:
  date: 04/12/2024
  author: Spencer
---

## 概述

SenseCAP Indicator 集成了双核 MCU ESP32-S3 和 RP2040。本教程专注于使用 ESP32-S3 和 ESP-IDF 创建项目。

有两种简单的项目创建方法：GitHub 模板和 Squareline Studio。

## 项目创建方法

### 1. GitHub 模板

#### 步骤 1：创建新项目

- 访问 [SenseCAP Indicator 模板仓库](https://github.com/Seeed-Solution/indicator-esp-idf-template) 并点击 `Use this template` 开始创建新仓库。

#### 步骤 2：克隆仓库

```bash
git clone https://github.com/your-username/indicator-esp-idf-template.git
```

#### 步骤 3：构建项目

导航到项目目录并构建项目：

```bash
cd indicator-esp-idf-template
idf.py build
```

#### 步骤 4：烧录项目

通过 USB 连接设备并使用以下命令烧录项目：

```bash
idf.py -p PORT flash
```

#### 步骤 5：监控项目

使用以下命令监控输出：

```bash
idf.py -p PORT monitor
```

*注意：将 `PORT` 替换为您设备的端口号。*

### 2. Squareline Studio

对于初学者，Squareline Studio 提供了一个用户友好的低代码 UI 设计选项。

有一篇博客 [Low-Code UI Design for SenseCAP Indicator with SquareLine](https://www.hackster.io/spenyan/low-code-ui-design-for-sensecap-indicator-with-squareline-9825fe) 提供了使用 Squareline Studio 设计 UI 的详细指南。

#### 步骤 1：设置

- 从 [Squareline 官网](https://studio.squareline.io/) 下载并安装 Squareline Studio。
- 启动软件并开始新项目。

![](https://hackster.imgix.net/uploads/attachments/1650386/image_4QrcVcHWtG.png?auto=compress%2Cformat&w=1280&h=960)

#### 步骤 2：设计 UI

- 使用 Squareline Studio 设计项目的 UI。

#### 步骤 3：生成并构建项目

- 生成 UI 代码。
- 使用 ESP-IDF 构建项目。

有关使用 Squareline Studio 的更多信息，请参考 [Low-Code UI Design for SenseCAP Indicator with SquareLine](https://www.hackster.io/spenyan/low-code-ui-design-for-sensecap-indicator-with-squareline-9825fe) 指南。

### 初学者提示

- 如果您是开发新手，建议从 Squareline Studio 开始创建一个简单的闪烁项目。
- 对于更高级的自定义，请直接修改 [SDK 示例](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32)。

## ODM 服务

Seeed Studio 提供全面的一站式 ODM 服务，以满足快速定制和扩展需求的多样化需要。如果您希望为项目定制专门功能或需要帮助高效扩展运营，请联系我们。如需咨询和更详细信息，请通过 iot@seeed.cc 联系我们。我们在此帮助您将独特的想法变为现实。

## 技术支持

**需要 SenseCAP Indicator 的帮助？我们随时为您提供协助！**

如果您在学习本教程时遇到任何问题或有任何疑问，请随时联系我们的技术支持。我们随时为您提供帮助！

访问我们的 [Seeed 官方 Discord 频道](https://discord.com/invite/QqMgVwHT3X) 提出您的问题，或访问 [GitHub 讨论区](https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions) 分享您想要的一切！
