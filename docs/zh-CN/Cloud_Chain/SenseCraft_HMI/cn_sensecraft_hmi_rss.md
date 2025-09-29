---
description: 介绍 RSS 的使用，这是 SenseCraft HMI 平台下的一个功能。
title: RSS 功能
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/sensecraft_hmi_rss
sidebar_position: 6
last_update:
  date: 07/21/2025
  author: Citric
---

# 在 SenseCraft HMI 中使用 RSS

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/80.jpg" style={{width:800, height:'auto'}}/></div>

## 介绍

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) 中的 RSS 功能允许您将基于屏幕的设备转换为实时信息显示器。通过连接到来自新闻媒体、博客、天气服务等的 RSS 源，您可以创建动态显示，自动更新最新内容。此功能非常适合创建新闻滚动条、信息板或个人仪表板，让您无需手动干预即可保持信息更新。

本教程将指导您了解 RSS 源并使用 SenseCraft HMI 中的 RSS 功能在您的设备上显示内容。

本文将以 [reTerminal E1002](https://wiki.seeedstudio.com/cn/getting_started_with_reterminal_e1002/) 为例，说明如何在 SenseCraft HMI 平台上使用此功能。

## 了解 RSS

### 什么是 RSS？

RSS（Really Simple Syndication，真正简单的聚合）是一种标准化的网络源格式，用于发布经常更新的内容，例如：

- 新闻文章

- 博客文章

- 播客

- 视频更新

- 天气预报

- 股市数据

RSS 源允许用户保持更新，而无需单独访问每个网站。相反，新内容会自动传送到您的 RSS 阅读器，或在这种情况下，传送到您启用 SenseCraft HMI 的设备。

### RSS 如何工作

1. **内容发布者**（网站、博客、新闻媒体）创建 RSS 源，以标准化 XML 格式包含其最新内容

2. **源阅读器**（如 SenseCraft HMI 中的 RSS 功能）定期检查这些源的更新

3. 当发布新内容时，源阅读器**检索并显示**更新

### 使用 RSS 的好处

- **实时更新**：无需手动刷新即可获取最新信息

- **内容聚合**：在一个显示中组合多个来源

- **过滤信息**：只接收您感兴趣的内容

- **带宽高效**：RSS 源仅包含基本内容，而非完整网页

- **无广告**：RSS 通常提供干净的内容，没有广告

## 在 SenseCraft HMI 中开始使用 RSS

### 访问 RSS 功能

步骤 1. 导航到下面的 SenseCraft HMI 平台。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />

步骤 2. 连接您的设备或选择已配对的设备使用。

步骤 3. 点击左侧边栏中的"RSS"选项卡

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/77.png" style={{width:1000, height:'auto'}}/></div>

### 了解 RSS 界面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/85.png" style={{width:1000, height:'auto'}}/></div>

RSS 界面由三个主要部分组成：

1. **配置面板**：位于右侧，您可以在此输入和验证 RSS 源 URL

2. **显示区域**：主要部分，配置后将显示 RSS 内容

3. **控制按钮**：位于顶部，包括预览、保存和部署选项

首次访问 RSS 功能时，您会看到一条消息，指示"未配置 RSS 源"，并提供在右侧面板中配置设置的说明。

## 配置 RSS 订阅源

### 添加 RSS 订阅源

步骤 1. 在屏幕右侧找到"RSS Configuration"面板

步骤 2. 找到"RSS URL"输入字段

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/78.png" style={{width:1000, height:'auto'}}/></div>

步骤 3. 在字段中输入有效的 RSS 订阅源 URL（例如：https://news.google.com/rss）

步骤 4. 点击"Set"按钮验证并应用 RSS 订阅源

步骤 5. 如果 URL 有效，系统将开始获取并显示订阅源中的内容

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/79.png" style={{width:1000, height:'auto'}}/></div>

### 显示设置和自定义

配置好 RSS 订阅源后，您可以调整内容的显示方式：

步骤 1. 使用与图库功能中相同的间隔和抖动模式设置：

- **Interval(min)**：设置显示刷新新内容的频率

- **Dither Mode**：根据您的显示器类型选择"Full Color"或"Black and White"

步骤 2. 点击"Save"保存您的配置

步骤 3. 点击"Preview"查看 RSS 内容在您的设备上的显示效果

步骤 4. 点击"Deploy"将配置发送到您连接的设备

## 查找和使用 RSS 订阅源

### 热门 RSS 订阅源

以下是一些您可以在 SenseCraft HMI 中使用的热门且可靠的 RSS 订阅源：

**新闻：**

- BBC News: https://feeds.bbci.co.uk/news/world/rss.xml

- Reuters: https://www.reutersagency.com/feed/

- CNN: https://rss.cnn.com/rss/edition.rss

- The New York Times: https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml

**科技：**

- Wired: https://www.wired.com/feed/rss

- TechCrunch: https://techcrunch.com/feed/

- Ars Technica: https://feeds.arstechnica.com/arstechnica/index

- Hackaday: https://hackaday.com/blog/feed/

**天气：**

- National Hurricane Center: https://www.nhc.noaa.gov/index-at.xml

**科学：**

- NASA Breaking News: https://www.nasa.gov/rss/dyn/breaking_news.rss

- Science Daily: https://www.sciencedaily.com/rss/all.xml

### 如何为网站查找 RSS 订阅源

许多网站都提供 RSS 订阅源，但它们并不总是容易找到。以下是一些定位 RSS 订阅源的方法：

#### 方法 1：寻找 RSS 图标

许多网站在其页脚或侧边栏中显示 RSS 图标（通常为橙色）或标有"RSS"、"Feed"或"Subscribe"的链接。

#### 方法 2：在博客 URL 后添加"/feed"

对于许多基于 WordPress 的网站，在 URL 末尾添加"/feed"通常有效：

```
https://example.com/feed
```

#### 方法 3：使用浏览器扩展

浏览器扩展如 Chrome 的"RSS Feed Reader"或 Firefox 的"Awesome RSS"可以检测您访问的网站上可用的订阅源。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/81.png" style={{width:1000, height:'auto'}}/></div>

#### 方法 4：检查源代码

1. 访问网站

2. 右键单击并选择"查看页面源代码"

3. 搜索（Ctrl+F）"rss"或"feed"

4. 查找 type 属性中包含"application/rss+xml"的链接

#### 方法 5：使用 RSS 订阅源查找器

服务如：

- [Feed Finder](https://feedfinder.mackerron.com/)

- [RSS.app](https://rss.app/rss-feed)

这些可以帮助发现那些没有显著宣传 RSS 订阅源的网站的订阅源。

## 创建自定义 RSS 订阅源

如果您找不到想要显示的内容的 RSS 订阅源，可以使用各种工具创建自己的订阅源：

### RSS 订阅源创建服务

1. **RSS.app**：https://rss.app/

- 从网站、社交媒体或其他来源创建 RSS 订阅源

- 无需编码

- 提供免费和付费选项

2. **Feedly**：https://feedly.com/

- 创建可导出为 RSS 的内容板块

- 适合内容策划

3. **Zapier**：https://zapier.com/

- 创建可从各种触发器生成 RSS 订阅源的自动化工作流

- 高级功能需要付费订阅

### 订阅源聚合器

您还可以使用聚合器将多个 RSS 订阅源合并为单个订阅源：

1. **FeedBlendr**：http://feedblendr.com/

- 将多个订阅源合并为一个

- 使用简单

2. **RSSMix**：http://www.rssmix.com/

- 合并多个 RSS 订阅源

- 免费服务

## 高级 RSS 显示技巧

### 为您的显示器优化 RSS 内容

为了在您的 SenseCraft HMI 设备上获得最佳的 RSS 订阅源体验：

1. **选择内容长度合适的订阅源**：

- 标题和描述较短的订阅源最适合小型显示器

- 全文章订阅源对于电子纸显示器来说可能文本过于密集

2. **考虑更新频率**：

- 将您的间隔设置与订阅源的更新频率匹配

- 新闻订阅源可能每小时更新，而博客订阅源可能每天更新

3. **测试不同的抖动模式**：

- "黑白"模式最适合电子纸显示器上的文本密集型 RSS 订阅源

- "全彩"更适合 LCD 显示器上带有图像的订阅源

4. **注意图像内容**：

- 一些 RSS 订阅源包含的图像可能在所有设备上显示效果不佳

- 包含大图像的订阅源可能加载较慢

## 故障排除

### 常见 RSS 问题和解决方案

1. **"无效 RSS 订阅源"错误**：

- 验证 URL 是否正确并包含 http:// 或 https:// 前缀

- 通过在浏览器中粘贴 URL 检查订阅源是否可访问

- 一些订阅源可能需要身份验证或有访问限制

2. **订阅源加载但没有内容出现**：

- 订阅源可能为空或当前没有发布内容

- 订阅源格式可能不兼容（尝试替代订阅源）

- 尝试不同的、更活跃的订阅源

3. **内容显示乱码或格式不正确**：

- 尝试不同的抖动模式

- 订阅源可能包含不支持的特殊字符或格式

- 考虑使用订阅源过滤服务来清理内容

4. **订阅源停止更新**：

- 源网站可能已更改其订阅源 URL

- 可能存在临时服务器问题

- 尝试删除并重新添加订阅源

5. **部署失败**：

- 确保您的设备正确连接到 SenseCraft HMI

- 检查您设备的互联网连接

- 重启您的设备并尝试重新部署

## 结论

SenseCraft HMI 中的 RSS 功能提供了一种强大的方式，可以将您的基于屏幕的设备转变为动态信息显示器。通过连接到 RSS 源，您可以创建自动更新的显示器，用于显示新闻、天气、技术更新或任何其他通过 RSS 提供的内容。

请记住，RSS 显示的质量很大程度上取决于您选择的源。尝试不同的源、更新间隔和显示设置，为您的需求创建完美的信息显示器。

## 资源

- [SenseCraft HMI 平台](https://sensecraft.seeed.cc/hmi)
- [兼容设备 - reTerminal E 系列](https://wiki.seeedstudio.com/cn/reterminal_e10xx_main_page/)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>
