---
description: 介绍 SenseCraft HMI 平台下的 Canvas 功能的使用方法。
title: Canvas 功能
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/sensecraft_hmi_canvas
sidebar_position: 4
last_update:
  date: 07/21/2025
  author: Citric
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 在 SenseCraft HMI 中使用 Canvas

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/141.jpg" style={{width:800, height:'auto'}}/></div>

## 简介

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) 中的 Canvas 功能是平台最强大和灵活的特性，允许您创建自定义界面、仪表板和数据可视化。通过 Canvas，您可以设计美观的显示界面，将静态元素与来自各种来源的动态数据相结合，包括设备传感器、天气信息、股票数据等。

本综合指南将引导您使用 Canvas 功能为您的 Seeed 设备创建专业显示界面。从基本形状和文本到实时数据小部件和预制模板，您将学习构建满足特定需求的自定义界面所需的一切知识。

本文将以 [reTerminal E1002](https://wiki.seeedstudio.com/cn/getting_started_with_reterminal_e1002/) 为例，说明如何在 SenseCraft HMI 平台上使用此功能。

## Canvas 入门

### 访问 Canvas 功能

步骤 1. 导航到下方的 SenseCraft HMI 平台。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />

步骤 2. 连接您的设备或选择已配对的设备使用。

步骤 3. 点击左侧边栏中的"Canvas"选项卡

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/89.png" style={{width:1000, height:'auto'}}/></div>

### 了解 Canvas 界面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/90.png" style={{width:1000, height:'auto'}}/></div>

Canvas 界面由几个关键部分组成：

1. **组件侧边栏**：左侧面板，包含所有可用元素，分为基础、设备、数据和模板类别

2. **Canvas 区域**：中央工作区，您在此设计界面

3. **工具栏**：顶部栏，包含设计工具、设置和格式选项

4. **属性面板**：选择元素时出现，允许自定义外观和行为

5. **操作按钮**：保存、预览和部署按钮，用于测试和应用您的设计

## 基础组件

基础部分提供创建界面布局的基本元素：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/91.png" style={{width:1000, height:'auto'}}/></div>

### 文本

文本组件允许您向画布添加标签、标题和其他文本内容。

步骤 1. 点击基础部分中的"文本"组件。文本会自动放置在画布中心

步骤 2. 将文本拖动到您想要放置的区域

步骤 3. 出现一个默认文本框，显示"Text"字样

步骤 4. 使用属性面板进行自定义：

  - 字体大小（默认为 30px）

  - 文本样式（粗体、斜体、下划线）

  - 对齐方式（左对齐、居中、右对齐）

  - 颜色

  - 字体系列

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/92.png" style={{width:1000, height:'auto'}}/></div>


### 数据

数据组件是一个强大的工具，用于显示直接从外部 API 获取的动态信息到您的画布上。这允许您集成实时数据，如天气、股票价格或通过网络 API 可获得的任何其他信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/143.png" style={{width:1000, height:'auto'}}/></div>

步骤 1. 点击基础部分中的"数据"组件。画布上会出现一个显示"Data"字样的占位符文本框。

步骤 2. 将"数据"组件拖动到您想要的位置。

步骤 3. 选中组件后，点击工具栏中的**数据设置**图标（看起来像链条链接）打开配置面板。

步骤 4. 在**数据设置**面板中，配置您的外部数据源：
   - **远程数据 URL**：输入您想要获取数据的外部 API 的完整 URL。
   - **数据键**：指定您想要从 API 的 JSON 响应中显示的数据的确切路径。对于嵌套对象使用点表示法（例如，`current.temp_c`），对于数组使用数字索引。
   - **精度**：对于数值数据，设置您希望显示的小数位数。默认为 2。
   - **测试**：点击此按钮验证 URL 和数据键是否正确，以及是否可以成功获取数据。
   - **请求头（可选）**：如果您的 API 需要特定的头部信息进行身份验证或其他目的，您可以展开此部分并添加它们。

步骤 5. 您还可以使用属性面板自定义显示数据的外观，调整：
  - 字体大小和样式
  - 对齐方式
  - 颜色
  - 字体系列

### 图片

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/94.png" style={{width:1000, height:'auto'}}/></div>

图片组件让您向画布添加图片。

步骤 1. 点击"图片"组件

步骤 2. 在属性面板中，点击"上传"添加您的图片或输入图片 URL

步骤 3. 根据需要调整大小和位置

### 日期

日期组件显示日期、时间或时间戳，可以配置为各种格式。

步骤 1. 点击数据部分中的"日期"组件

步骤 2. 组件将自动放置在画布的左上角，使用默认日期格式（通常为 MM/DD/YYYY）

步骤 3. 点击工具栏中的日历图标打开日期设置面板

步骤 4. 在日期设置面板中：

   - 使用日期选择器或输入字段设置特定日期

   - 从下拉菜单中选择日期格式（例如，MM/DD/YYYY、DD/MM/YYYY、YYYY-MM-DD）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/105.png" style={{width:1000, height:'auto'}}/></div>

步骤 5. 使用属性面板进行进一步自定义：

   - 字体大小和样式

   - 文本颜色

   - 对齐方式

   - 背景（如果需要）

:::note
画布中显示的日期是静态的，代表您在日期设置中配置的内容。当部署到您的设备时，日期组件可以：

- 显示您配置的静态日期（适用于截止日期、事件日期等）

- 如果设置为动态模式，显示当前日期/时间，将在设备上自动更新
:::

### 形状

SenseCraft HMI Canvas 提供各种形状组件：

- **矩形**：创建标准矩形或正方形

- **圆角矩形**：创建带圆角的矩形

- **圆形**：创建完美的圆形

- **椭圆**：创建椭圆形状

- **三角形**：创建三边形状

- **多边形**：创建多边形状

- **线条**：创建直线

- **绘图**：启用手绘功能

对于每个形状：

步骤 1. 点击所需的形状组件

步骤 2. 在画布上点击并拖拽以确定最终位置

步骤 3. 使用属性面板进行自定义：

  - 填充颜色

  - 边框颜色和宽度

  - 不透明度

  - 圆角半径（用于矩形）

  - 其他形状特定属性

## 设备组件

设备部分包含自动显示来自您连接的 Seeed reTerminal E 系列电子纸显示设备传感器数据的组件：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/95.png" style={{width:400, height:'auto'}}/></div>

<Tabs>
<TabItem value="Battery" label="Battery" default>

电池组件显示您连接设备的当前电池电量。

步骤 1. 点击"Battery"组件

步骤 2. 组件将自动显示您设备的电池百分比

步骤 3. 使用属性面板进行自定义：

  - 字体大小（默认为 30px）

  - 文本样式（粗体、斜体、下划线）

  - 对齐方式（左对齐、居中、右对齐）

  - 颜色

  - 字体系列

</TabItem>
<TabItem value="Temperature" label="Temperature">

温度组件显示来自您设备传感器的当前温度读数。

步骤 1. 点击"Temperature"组件

步骤 2. 组件将自动显示来自您设备的温度读数

步骤 3. 使用属性面板进行自定义：

  - 字体大小（默认为 30px）

  - 文本样式（粗体、斜体、下划线）

  - 对齐方式（左对齐、居中、右对齐）

  - 颜色

  - 字体系列

</TabItem>
<TabItem value="Humidity" label="Humidity">

湿度组件显示来自您设备传感器的当前湿度读数。

步骤 1. 点击"Humidity"组件

步骤 2. 组件将自动显示来自您设备的湿度百分比

步骤 3. 使用属性面板进行自定义：

  - 字体大小（默认为 30px）

  - 文本样式（粗体、斜体、下划线）

  - 对齐方式（左对齐、居中、右对齐）

  - 颜色

  - 字体系列

</TabItem>
</Tabs>

## 数据组件

数据部分包含连接到外部数据源的组件，用于显示天气、股票等信息：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/96.png" style={{width:400, height:'auto'}}/></div>

### 天气

天气组件显示指定位置的当前天气信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/99.png" style={{width:1000, height:'auto'}}/></div>

步骤 1. 点击数据部分中的"天气"组件

步骤 2. 组件将自动放置在画布的左上角，默认文本为"Temperature"

步骤 3. 使用顶部的工具栏配置天气显示选项：

   - 从位置字段中选择一个位置（例如"New York"）

   - 从下拉菜单中选择要显示的天气数据：

     * 当前天气（温度、天气状况）

     * 今天（今天的预报）

     * 第2天到第7天（未来预报）

步骤 4. 使用属性面板进一步自定义外观

:::note
画布中显示的天气数据仅用于显示目的，不代表实时天气。实际的天气信息只有在将设计部署到您的设备后才会显示，设备将从天气服务获取真实数据。
:::

### 天气图标

天气图标组件显示当前天气状况的可视化表示。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/100.png" style={{width:1000, height:'auto'}}/></div>

步骤 1. 点击数据部分中的"天气图标"组件

步骤 2. 组件将自动放置在画布的左上角，默认显示太阳图标

步骤 3. 使用顶部的工具栏，从位置字段中选择位置（例如"New York"）

步骤 4. 使用属性面板自定义：
   - 大小和位置
   - 图标样式

:::note
画布中显示的图标仅为占位符。部署到您的设备后，组件将根据指定位置的实际天气状况获取并显示相应的天气图标。
:::

### 股票

股票组件显示指定股票代码的实时股票市场信息。

步骤 1. 点击数据部分中的"股票"组件

步骤 2. 组件将自动放置在画布的左上角，默认文本为"AAPL"（苹果公司的股票代码）

步骤 3. 点击工具栏中的"Config"按钮打开股票配置面板

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/101.png" style={{width:1000, height:'auto'}}/></div>

步骤 4. 在股票配置面板中：

   - 在股票代码字段中输入股票代码（例如"AAPL"、"MSFT"、"GOOGL"）

   - 点击"Search"验证代码

   - 在提供的字段中输入您的 Twelve Data API 密钥

步骤 5. 从工具栏中的"Symbol"下拉菜单中，选择要显示的股票数据：

   - Symbol（仅显示股票代码）

   - Current Price（显示最新股价）

   - Change（显示自上次收盘以来的价格变化）

   - Change Percent（显示百分比变化）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/102.png" style={{width:1000, height:'auto'}}/></div>

步骤 6. 使用属性面板自定义股票组件的外观

#### 获取 Twelve Data API 密钥

要使用股票组件，您需要从 Twelve Data 获取免费的 API 密钥：

步骤 1. 访问 [twelvedata.com](https://twelvedata.com/)

步骤 2. 点击"Get Started Free"或"Sign Up"

步骤 3. 使用您的电子邮件地址和密码创建账户

步骤 4. 注册并登录后，导航到您的仪表板

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/103.png" style={{width:1000, height:'auto'}}/></div>

步骤 5. 找到并复制您的 API 密钥

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/104.png" style={{width:800, height:'auto'}}/></div>

步骤 6. 将此 API 密钥粘贴到股票配置面板中的"Twelve Data API Key"字段

:::note
- Twelve Data 的免费套餐允许每分钟和每天有限数量的 API 调用。

- 画布中显示的股票数据仅用于显示目的。实时股票信息只有在将设计部署到您的设备后才会显示，设备将从 Twelve Data 的服务器获取当前数据。

- 为了获得最可靠的体验，如果您需要频繁的股票更新，请考虑升级到 Twelve Data 的付费计划。
:::

:::tip
出于测试目的，您可以使用常见的股票代码，如：

- AAPL（苹果）

- MSFT（微软）

- GOOGL（Alphabet/Google）

- AMZN（亚马逊）

- TSLA（特斯拉）
:::

### GitHub

GitHub 组件显示 GitHub 用户资料的信息。

步骤 1. 点击数据部分中的"GitHub"组件

步骤 2. 组件将自动放置在画布的左上角，默认文本显示"Seeed Studio"或其他占位符

步骤 3. 在工具栏中，您将看到一个 GitHub 用户名字段（例如"seeed-studio"）和一个下拉菜单

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/106.png" style={{width:1000, height:'auto'}}/></div>

步骤 4. 在字段中输入有效的 GitHub 用户名，并在出现的 GitHub 用户配置面板中点击"Validate"

步骤 5. 从标记为"Display Name"（或类似）的下拉菜单中，选择您要显示的 GitHub 用户信息：

   - Display Name（显示用户的显示名称）

   - Username（显示用户的 GitHub 用户名）

   - Followers（显示关注者数量）

   - Following（显示正在关注的用户数量）

   - Public Repos（显示公共仓库数量）

   - Public Gists（显示公共 gists 数量）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/107.png" style={{width:1000, height:'auto'}}/></div>

步骤 6. 使用属性面板自定义 GitHub 组件的外观

:::note
- GitHub 组件需要您的设备具有互联网访问权限才能获取实时的 GitHub 数据。

- 您在画布中看到的只是占位符。实际的 GitHub 信息将在部署到您的设备后显示。

- GitHub API 有速率限制，因此过度刷新可能会暂时禁用该组件。
:::

:::tip
尝试使用这些 GitHub 用户名进行测试：

- seeed-studio（Seeed Studio 的官方 GitHub）

- torvalds（Linus Torvalds，Linux 的创建者）

- microsoft（Microsoft 的官方 GitHub）

- google（Google 的官方 GitHub）
:::

### GitHub Repo

GitHub Repo 组件显示特定 GitHub 仓库的信息。

步骤 1. 点击数据部分中的"GitHub Repo"组件

步骤 2. 该组件将自动放置在画布的左上角，默认文本显示"wiki-documents"

步骤 3. 在出现的 GitHub Repository Configuration 面板中：

   - 您可以看到当前用户和仓库状态

   - 通过输入关键词搜索仓库，或留空字段以显示用户的所有仓库

   - 手动输入特定仓库，格式为"用户名/仓库名"（例如，"Seeed-Studio/wiki-documents"）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/108.png" style={{width:1000, height:'auto'}}/></div>

步骤 4. 点击"Search"查找并验证仓库

步骤 5. 从工具栏的下拉菜单中，选择您想要显示的仓库信息：

   - Name（显示仓库名称）

   - Full Name（显示用户名/仓库格式）

   - Stars（显示星标数量）

   - Forks（显示分叉数量）

   - Watchers（显示关注者数量）

   - Description（显示仓库描述）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/109.png" style={{width:1000, height:'auto'}}/></div>

步骤 6. 使用属性面板自定义 GitHub Repo 组件的外观

:::note
- 与 GitHub 用户组件一样，GitHub Repo 组件需要您的设备具有互联网访问权限才能获取数据。

- 画布显示占位符文本。实际的仓库信息只有在部署到您的设备后才会出现。

- GitHub API 有速率限制，可能会影响数据更新的频率。
:::

### YouTube

YouTube 组件显示 YouTube 频道的信息和统计数据。

步骤 1. 点击数据部分中的"YouTube"组件

步骤 2. 该组件将自动放置在画布的左上角，默认文本显示"No API key configured"

步骤 3. 在出现的 YouTube Configuration 面板中：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/110.png" style={{width:1000, height:'auto'}}/></div>

   - 在 YouTube Channel 字段中输入 YouTube 频道 ID（例如，"UC_x5XG1OV2P6uZZ5FSM9Ttw"）

   - 点击"Search"验证频道

   - 在提供的字段中输入您的 YouTube Data API Key

   - 如果您没有 API 密钥，点击"Google Cloud Console"链接获取免费的 API 密钥

步骤 4. 从工具栏的下拉菜单中，选择您想要显示的频道信息：

   - Channel Name（显示 YouTube 频道名称）

   - Channel ID（显示 YouTube 频道 ID）

   - Description（显示频道描述）

   - Subscribers（显示订阅者数量）

   - Views（显示总观看次数）

   - Videos（显示上传的视频数量）

   - Published At（显示频道创建日期）

   - Custom URL（显示自定义 URL，如果可用）

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/111.png" style={{width:1000, height:'auto'}}/></div>

步骤 5. 使用属性面板自定义 YouTube 组件的外观

#### 获取 YouTube Data API Key

:::note
如果您不知道如何获取 API Key，您也可以阅读[Google 的官方文档](https://developers.google.com/youtube/v3/getting-started)。
:::

要使用 YouTube 组件，您需要从 Google Cloud Console 获取免费的 API 密钥：

步骤 1. 访问 [Google Cloud Console](https://console.cloud.google.com/)

步骤 2. 创建新项目或选择现有项目

步骤 3. 导航到"APIs & Services" > "Library"

步骤 4. 搜索"YouTube Data API v3"并启用它

步骤 5. 转到"APIs & Services" > "Credentials"

步骤 6. 点击"Create Credentials" > "API Key"

步骤 7. 复制您的新 API 密钥

步骤 8. 将此 API 密钥粘贴到 YouTube Configuration 面板中的"YouTube Data API Key"字段

:::note
- YouTube 组件需要您的设备具有互联网访问权限才能获取频道数据。

- 画布显示"No API key configured"，直到您提供有效的 API 密钥和频道 ID。

- Google 的 YouTube Data API 有配额和速率限制，可能会影响使用。

- 某些统计数据（如确切的订阅者数量）可能会根据 YouTube 的政策进行四舍五入或近似处理。
:::

## 模板

模板提供预设计的布局，将多个组件组合成一个连贯的、即用型显示界面。它们节省时间并确保专业的结果，无需从头开始设计布局。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/113.png" style={{width:350, height:'auto'}}/></div>

### 天气显示模板

天气显示模板提供一个完整的天气仪表板，显示任何城市的当前天气状况和7天预报。

步骤1. 在模板部分点击"天气显示"模板

步骤2. 在出现的"配置模板：天气显示"对话框中：

   - 选择您偏好的温度单位（摄氏度°C或华氏度°F）

   - 在"城市名称"字段中输入城市名称

   - 点击"搜索"以验证该城市是否存在于天气数据库中

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/114.png" style={{width:800, height:'auto'}}/></div>

步骤3. 搜索成功后，点击"确定"继续

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/115.png" style={{width:700, height:'auto'}}/></div>

步骤4. 将出现"模板预览"窗口，显示：

   - 左侧面板显示当前日期、天气状况、温度、最高/最低温度和湿度

   - 右侧面板显示城市名称和7天预报，包括天气状况图标和温度范围


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/116.png" style={{width:700, height:'auto'}}/></div>

步骤5. 查看预览并注意：

   - 该模板将替换画布上的所有当前元素

   - 所有模板元素都将获得唯一ID以避免冲突

   - 您可以在将模板应用到画布后对其进行修改

步骤6. 点击"应用到画布"将模板添加到您的工作区

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/117.png" style={{width:1000, height:'auto'}}/></div>

步骤7. 天气显示模板现在已在您的画布上，准备部署或进一步自定义

:::note
- 天气显示模板使用实时天气API数据，需要您的设备具有互联网连接。

- 模板在应用到画布后完全可自定义 - 您可以调整大小、重新定位或修改任何元素。

- 天气数据根据项目设置中设置的刷新间隔自动更新。
:::

### 股票仪表板模板

股票仪表板模板提供实时股票市场数据的清洁、专业显示，包括价格、日变化和百分比变化。

步骤1. 在模板部分点击"股票仪表板"模板

步骤2. 在出现的"配置模板：股票仪表板"对话框中：

   - 在提供的字段中输入您的[Twelve Data API密钥](#getting-a-twelve-data-api-key)（出于安全考虑已屏蔽）

   - 在股票代码字段中输入股票代码（例如，苹果公司的"AAPL"）

   - 点击"搜索"查找股票

步骤3. 搜索后，出现匹配股票列表。从结果中选择您想要的股票（例如，"AAPL Apple Inc."）

步骤4. 点击"确定"确认您的选择

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/118.png" style={{width:700, height:'auto'}}/></div>

步骤5. 将出现"模板预览"窗口，显示：

   - 左侧面板以大文本显示股票代码

   - 右侧面板显示当前股价、价格变化和百分比变化

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/119.png" style={{width:700, height:'auto'}}/></div>

步骤6. 查看预览并注意：

   - 该模板将替换画布上的所有当前元素

   - 所有模板元素都将获得唯一ID以避免冲突

   - 您可以在将模板应用到画布后对其进行修改

步骤7. 点击"应用到画布"将模板添加到您的工作区

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/120.png" style={{width:1000, height:'auto'}}/></div>

:::note
- 股票仪表板模板需要您的设备具有互联网访问权限以获取实时市场数据。

- 在Twelve Data的免费层级上，股票市场数据至少延迟15分钟。

- 数据根据您项目的刷新间隔设置进行刷新。

- 市场数据仅在相应交易所的交易时间内可用。
:::

### GitHub个人资料模板

GitHub个人资料模板创建一个综合仪表板，显示GitHub用户的个人资料信息和选定的存储库及其统计信息。

步骤1. 在模板部分点击"GitHub个人资料"模板


步骤2. 在出现的"配置模板：GitHub个人资料"对话框中：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/121.png" style={{width:800, height:'auto'}}/></div>

   - 在必填字段中输入GitHub用户名（例如，"seeed-studio"）

   - 可选择在存储库搜索字段中输入关键词以过滤存储库

   - 将搜索字段留空以显示用户的所有存储库

步骤3. 点击"搜索所有'[用户名]'存储库"按钮以检索用户的存储库

步骤4. 从显示的存储库列表中，选择最多3个您想要展示的存储库

   - 每个存储库显示其名称、描述、主要编程语言和星标数

   - 您可以使用过滤字段缩小存储库列表范围

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/122.png" style={{width:700, height:'auto'}}/></div>

步骤5. 点击"确定"确认您的选择

步骤6. 将出现"模板预览"窗口，显示：

   - 顶部的GitHub用户显示名称

   - 带有关注者数量的"Github"标签

   - 水平分隔线

- 选中的仓库及其名称和星标数

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/123.png" style={{width:700, height:'auto'}}/></div>

步骤 7. 查看预览并注意：

   - 模板将替换画布上的所有当前元素

   - 所有模板元素都将获得唯一的 ID 以避免冲突

   - 您可以在将模板应用到画布后修改模板

步骤 8. 点击"应用到画布"将模板添加到您的工作区

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/124.png" style={{width:1000, height:'auto'}}/></div>

:::note
- 与其他可能需要 API 密钥的模板不同，GitHub 个人资料模板使用 GitHub 的公共 API，不需要身份验证。

- 模板有两种搜索模式，在界面中有清楚的说明：

  1. 仅用户：只输入用户名以显示所有仓库

  2. 用户 + 关键词：输入用户名和特定关键词来筛选仓库

- 仓库选择限制为 3 个，以确保在较小屏幕上的最佳显示效果。

- 某些 GitHub 统计数据可能是近似值（如超过 1,000 的关注者数量显示为"1.0K"）。
:::

### YouTube 频道统计模板

YouTube 频道统计模板以简洁现代的设计展示 YouTube 频道的品牌、标语和订阅者数量。

步骤 1. 在模板部分点击"YouTube 频道统计"模板

步骤 2. 在出现的"配置模板：YouTube 频道统计"对话框中：

   - 输入您的 [YouTube Data API 密钥](#getting-a-youtube-data-api-key)（出于安全考虑已遮蔽）

   - 以支持的格式之一输入 YouTube 频道标识符：

     * 频道 ID：以"UC"开头的 24 字符字符串（例如，UC_x5XG1OV2P6uZZ5FSM9Ttw）
     * @句柄：以 @ 开头的频道句柄（例如，@seeedstudiosz）
     * 频道 URL：完整的 YouTube URL（例如，youtube.com/@seeedstudiosz）

步骤 3. 点击"验证频道"以验证频道是否存在并检索其数据

步骤 4. 如果验证成功，您将看到确认消息（例如，"找到频道：Seeed Studio • 20.4K"）

步骤 5. 点击"确定"继续

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/125.png" style={{width:800, height:'auto'}}/></div>

步骤 6. 将出现"模板预览"窗口，显示：

   - 左侧面板，带有频道名称和标语/描述，采用时尚的黑色背景

   - 右侧面板，带有"YouTube"标签、订阅者数量和"订阅者"文本

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/126.png" style={{width:800, height:'auto'}}/></div>

步骤 7. 查看预览并注意：

   - 模板将替换画布上的所有当前元素

   - 所有模板元素都将获得唯一的 ID 以避免冲突

   - 您可以在将模板应用到画布后修改模板

步骤 8. 点击"应用到画布"将模板添加到您的工作区

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/127.png" style={{width:1000, height:'auto'}}/></div>


:::note
- YouTube 频道统计模板需要您的设备具有互联网访问权限才能获取频道数据。

- YouTube Data API 有配额和速率限制，可能会影响使用。

- 模板在可用时会自动检索频道的标语或描述。

- 对于拥有大量订阅者的频道，数量可能会被缩写（例如，1,200,000 显示为"1.2M"）。
:::

## 高级画布功能

### 调试和 JSON 编辑

SenseCraft HMI Canvas 提供高级调试功能：

步骤 1. 点击工具栏中的调试图标

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/128.png" style={{width:400, height:'auto'}}/></div>

步骤 2. 将打开一个模态框，以 JSON 格式显示当前布局数据

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/129.png" style={{width:700, height:'auto'}}/></div>

步骤 3. 您可以：

   - 查看布局的 JSON 结构

   - 点击"手动编辑 JSON"直接修改布局代码

   - 点击"复制到剪贴板"保存 JSON 以备份或分享

   - 点击"生成 HTML"创建布局的 HTML 版本

此功能特别适用于：

- 了解布局的结构

- 进行在可视化编辑器中可能难以实现的精确调整

- 创建复杂布局的备份

- 与他人分享布局

### 导入导出和分享

SenseCraft HMI 提供便捷的导入和导出功能，让您可以轻松保存、分享和恢复您的设计工作。这两个功能位于界面顶部工具栏中，通过其图标清楚地标识。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/142.png" style={{width:1000, height:'auto'}}/></div>

#### 导出设计

导出功能允许您将当前的 UI 设计保存为文件：

**步骤 1.** 完成界面设计后，点击顶部工具栏中的**导出**按钮（向外箭头图标）。

**步骤 2.** 在出现的文件保存对话框中，选择保存位置并为文件命名。

**步骤 3.** 点击"保存"完成导出过程。

您的设计将保存为包含所有界面信息的 JSON 文件，可用于备份或分享。

#### 导入设计

导入功能使您能够加载之前导出的设计或模板：

**步骤 1.** 点击顶部工具栏中的**导入**按钮（向内箭头图标）。

**步骤 2.** 在文件选择对话框中，找到并选择您之前导出的设计文件。

**步骤 3.** 点击"打开"，选定的设计将加载到您当前的工作区。

:::tip
导入操作将替换当前工作区内容。建议在导入前导出当前设计以防止数据丢失。
:::

这些功能特别适用于：
- 在进行重大更改前备份设计
- 与团队成员分享界面设计
- 在不同设备间传输项目
- 使用预制模板快速开始新项目


### AI 布局生成器

SenseCraft HMI Canvas 包含 AI 驱动的布局生成器：

步骤 1. 点击右上角的"AI Generator"按钮

步骤 2. 输入您想要创建的布局描述

步骤 3. 点击"Generate"让 AI 根据您的描述创建布局

步骤 4. 根据需要自定义生成的布局

此功能非常适合快速创建布局而无需从头开始。

:::tip
有关使用此部分的详细说明，请参考**[在 SenseCraft HMI 中使用 AI 生成](https://wiki.seeedstudio.com/cn/sensecraft_hmi_ai_generation/)**。
:::

## 部署到您的设备

创建画布设计后，您需要将其部署到您的 Seeed 设备：

### 部署前预览

步骤 1. 点击顶部工具栏中的"预览"按钮

步骤 2. 查看您的布局在设备上的显示效果

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/130.png" style={{width:700, height:'auto'}}/></div>

步骤 3. 进行必要的调整

### 保存您的布局

步骤 1. 点击"保存"按钮存储您当前的布局

步骤 2. 您的布局将保存到 SenseCraft HMI 云端

### 部署到设备

步骤 1. 确保您的设备已连接并显示"在线"状态

步骤 2. 点击"部署"按钮

步骤 3. 等待部署过程完成

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/131.png" style={{width:1000, height:'auto'}}/></div>

步骤 4. 您的布局将显示在已连接的设备上

### 部署注意事项

为了成功部署到 Seeed 设备：

1. **设备兼容性**：确保您的布局针对特定设备的屏幕分辨率进行了优化

2. **连接状态**：在部署前确保您的设备显示"在线"状态

3. **数据组件**：如果使用数据组件（天气、股票等），请确保您的设备具有互联网连接

4. **设备传感器**：电池、温度和湿度等组件只能在具有相应传感器的兼容 Seeed reTerminal E 系列 ePaper 显示设备上工作

5. **刷新频率**：根据数据更新频率需求和设备能力设置适当的间隔时间

## 故障排除

### 常见画布问题及解决方案

1. **组件不显示数据**：
   - 检查您设备的互联网连接
   - 验证数据源是否可用
   - 确保动态组件的数据键路径正确
   - 尝试刷新画布或重新部署

2. **设备上的布局问题**：
   - 在部署前使用预览功能进行测试
   - 避免将元素放置得过于靠近画布边缘

3. **部署失败**：
   - 确保您的设备正确连接到 SenseCraft HMI
   - 检查您设备的互联网连接
   - 尝试保存您的布局然后重新部署
   - 重启您的设备并再次尝试部署

4. **设备传感器数据不显示**：
   - 验证您的设备具有所需的传感器
   - 检查您设备的固件是否为最新版本
   - 确保设备正确连接到 SenseCraft HMI

5. **文本或图像显示失真**：
   - 调整组件的大小和位置
   - 检查文本组件的字体设置
   - 对于图像，确保它们具有适合您显示器的分辨率

## 结论

SenseCraft HMI 中的画布功能为您的 Seeed 设备创建自定义界面和仪表板提供了强大的平台。通过将基本设计元素与动态数据组件和预制模板相结合，您可以创建专业外观的显示界面，满足各种用途需求。

无论您是在构建气象站、设备监控器、信息显示屏还是控制面板，画布都为您提供了实现愿景的工具。直观的拖放界面结合动态数据绑定和调试工具等高级功能，使初学者易于上手，同时仍为有经验的用户提供所需的深度功能。

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
