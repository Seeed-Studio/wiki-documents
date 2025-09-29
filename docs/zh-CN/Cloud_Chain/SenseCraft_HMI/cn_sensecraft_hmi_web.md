---
description: 介绍 SenseCraft HMI 平台下的 Web 功能的使用方法。
title: Web 功能
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/sensecraft_hmi_web
sidebar_position: 7
last_update:
  date: 07/21/2025
  author: Citric
---

# 在 SenseCraft HMI 中使用 Web 功能

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/88.jpg" style={{width:800, height:'auto'}}/></div>

## 介绍

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) 中的 Web 功能允许您直接在基于屏幕的设备上显示网页内容。这个强大的功能将您的设备转换为专用的网页显示器，能够显示仪表板、监控系统、文档或您需要的任何网页内容。与传统浏览器不同，SenseCraft HMI 的 Web 功能针对嵌入式显示器和物联网设备进行了优化，非常适合创建信息亭、状态监视器或专用网页界面。

本教程将指导您使用 SenseCraft HMI 中的 Web 功能，涵盖网页内容的设置、预览和部署到您的设备。

本文将以 [reTerminal E1002](https://wiki.seeedstudio.com/cn/getting_started_with_reterminal_e1002/) 为例，说明如何在 SenseCraft HMI 平台上使用此功能。

## Web 功能入门

### 访问 Web 功能

步骤 1. 导航到下面的 SenseCraft HMI 平台。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />

步骤 2. 连接您的设备或选择已配对的设备使用。

步骤 3. 点击左侧边栏中的"Web"选项卡

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/83.png" style={{width:1000, height:'auto'}}/></div>

### 了解 Web 界面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/82.png" style={{width:1000, height:'auto'}}/></div>

Web 界面由三个主要部分组成：

1. **URL 配置面板**：位于右侧，您可以在此输入网址

2. **显示区域**：主要部分，预览或部署后将在此显示网页内容

3. **控制按钮**：位于顶部，包括预览、保存和部署选项

首次访问 Web 功能时，显示区域将为空，直到您配置并预览网页。

## 配置网页内容

### 添加网页

步骤 1. 找到屏幕右侧的 Web 配置面板

步骤 2. 找到"URL"输入字段

步骤 3. 在字段中输入有效的网址（例如，https://weather.gov/）

:::tip
确保包含完整的 URL，包括 https:// 或 http:// 前缀。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/84.png" style={{width:1000, height:'auto'}}/></div>

步骤 4. 点击"Set"按钮验证 URL

### 预览网页内容

与 SenseCraft HMI 中的其他功能不同，Web 功能需要明确的预览步骤来显示内容：

步骤 1. 输入并设置 URL 后，点击顶部工具栏中的"Preview"按钮

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/86.png" style={{width:1000, height:'auto'}}/></div>

步骤 2. 等待网页在显示区域中加载

步骤 3. 检查网页内容是否正确显示，并且适合您设备的屏幕尺寸

:::note
预览步骤至关重要，因为它允许您在部署之前验证网页内容是否能在您的设备上正确显示。
:::

### 保存和部署网页内容

预览并确认网页内容显示良好后：

步骤 1. 点击"Save"按钮保存您的网页配置

步骤 2. 点击"Deploy"将配置发送到您连接的设备

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/87.png" style={{width:1000, height:'auto'}}/></div>

步骤 3. 等待部署确认消息

成功部署后，您的设备将显示配置的网页。

## 为设备优化网页内容

并非所有网站都是为小屏幕或嵌入式设备设计的。以下是选择和优化网页内容的技巧：

### 选择网页友好的内容

1. **选择移动响应式网站**：

- 为移动设备设计的网站通常在小屏幕上显示效果更好

- 寻找具有自适应布局的网站，这些网站在您设备的分辨率下工作良好

2. **考虑简单、轻量级的页面**：

- 包含大量 JavaScript 的复杂网站可能加载缓慢或消耗更多资源

- 静态页面通常比动态网页应用程序性能更好

3. **避免需要身份验证的网站**：

- 登录会话可能会过期，需要手动干预

- 某些身份验证方法在嵌入式设备上可能无法正常工作

### 推荐的网页内容类型

以下是一些与 SenseCraft HMI 的网页功能配合特别好的网页内容类型：

1. **天气仪表板**：

- [Weather.gov](https://weather.gov)

- [Windy.com](https://www.windy.com/)

- [AccuWeather](https://www.accuweather.com/)

2. **监控仪表板**：

- Grafana 仪表板

- 家庭自动化控制面板

- 系统状态页面

3. **信息显示**：

- 交通时刻表

- 航班信息

- 会议室可用性

4. **文档或参考资料**：

- 本地 wiki

- 程序指南

- 快速参考信息

## 创建自定义网页内容

为了获得最佳体验，请考虑创建专门为您设备显示屏设计的自定义网页：

### 简单的 HTML 页面

您可以创建针对设备分辨率优化的基本 HTML 页面。以下是一个简单的示例：

```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Device Dashboard</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            font-size: 18px;
        }
        .container {
            padding: 15px;
        }
        .title {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 15px;
        }
        .info-box {
            border: 1px solid #ccc;
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="title">Device Status</div>
        <div class="info-box">Temperature: 22.5°C</div>
        <div class="info-box">Humidity: 45%</div>
        <div class="info-box">Battery: 87%</div>
    </div>
</body>
</html>
```

### 自定义页面的托管选项

要显示自定义网页内容，您需要将其托管在设备可访问的地方：

1. **本地网络服务器**：

- 在本地网络上设置一个简单的网页服务器

- 使用 XAMPP、NGINX 或运行网页服务器的树莓派等工具

2. **免费静态托管服务**：

- [GitHub Pages](https://pages.github.com/)

- [Netlify](https://www.netlify.com/)

- [Vercel](https://vercel.com/)

3. **提供免费套餐的云服务**：

- [Firebase Hosting](https://firebase.google.com/products/hosting)

- [AWS S3 静态网站托管](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)

## 特殊用例

### 显示本地网络资源

Web 功能可用于显示本地网络上的资源：

1. **家庭自动化仪表板**：

- Home Assistant：`http://homeassistant.local:8123`

- OpenHAB：`http://openhab.local:8080`

2. **网络监控工具**：

- 路由器管理面板

- 网络监控仪表板

3. **本地媒体服务器**：

- Plex 状态页面

- NAS 网页界面

:::warning
出于安全考虑，在公开可见的设备上显示管理界面时要谨慎。
:::

### 自动页面轮换

如果您想轮换显示多个网页：

1. 创建一个简单的 HTML 页面，使用 JavaScript 循环浏览 URL：

```html
<!DOCTYPE html>
<html>
<head>
    <title>Page Rotator</title>
    <style>
        body, html, iframe {
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
            border: none;
            overflow: hidden;
        }
    </style>
    <script>
        // Array of URLs to rotate through
        const urls = [
            'https://weather.gov',
            'https://example.com/dashboard',
            'https://example.com/calendar'
        ];
        
        let currentIndex = 0;
        
        function rotatePages() {
            document.getElementById('display-frame').src = urls[currentIndex];
            currentIndex = (currentIndex + 1) % urls.length;
            setTimeout(rotatePages, 30000); // Change page every 30 seconds
        }
        
        window.onload = rotatePages;
    </script>
</head>
<body>
    <iframe id="display-frame" src="about:blank"></iframe>
</body>
</html>
```

2. 使用上述方法之一托管此页面

3. 在 SenseCraft HMI 的 Web 功能中输入此轮播页面的 URL

## 故障排除

### 常见 Web 显示问题及解决方案

1. **网页无法加载**：

- 验证 URL 是否正确并包含 http:// 或 https:// 前缀。有时明明输入了正确的 URL，但仍然无法预览，可以尝试在 URL 末尾添加"/"，可能会有奇效。

- 通过在常规浏览器中测试来检查页面是否可访问

- 确保您的设备具有互联网连接

- 某些网站可能阻止嵌入或具有安全限制

2. **内容显示不正确**：

- 网站可能未针对您设备的屏幕尺寸进行优化

- 如果可用，请尝试网站的移动版本

- 考虑创建专门针对您显示尺寸的自定义页面

3. **性能问题**：

- 具有动画或大量 JavaScript 的复杂网站可能运行缓慢

- 尝试更简单的页面或自定义构建的替代方案

- 某些网站可能使用超出您设备处理能力的内存

4. **部署失败**：

- 确保您的设备正确连接到 SenseCraft HMI

- 检查您设备的互联网连接
  
- 重启您的设备并尝试重新部署

5. **内容需要频繁刷新**：

- 某些动态内容可能不会自动更新
  
- 考虑在自定义页面中设置刷新间隔，或
  
- 定期重新部署配置

## 最佳实践

### 安全注意事项

使用 Web 功能时，请牢记以下安全注意事项：

1. **避免敏感信息**：

- 不要在公开可见的设备上显示包含个人或机密信息的页面
  
- 对管理面板或控制界面要谨慎

2. **尽可能使用 HTTPS**：

- 优先使用安全 (https://) URL 而不是非安全 (http://) URL
  
- 这有助于保护传输到您设备的数据

3. **考虑网络隔离**：

- 对于显示内部资源的显示器，考虑使用单独的网络
  
- 使用防火墙规则限制您的设备可以访问的内容

### 维护提示

为了保持您的 Web 显示器平稳运行：

1. **定期检查**：

- 定期验证显示的内容是否仍然正常工作

- 网站可能在不通知的情况下更改其布局或 URL

2. **更新书签**：

- 为您的显示器保留有用 URL 的列表

- 测试替代方案，以防您首选的网站发生变化

3. **创建备份**：

- 对于关键显示器，创建并托管可以快速部署的备份页面

- 这确保了在主要 Web 资源不可用时的连续性

## 结论

SenseCraft HMI 中的 Web 功能提供了一种在基于屏幕的设备上显示 Web 内容的灵活方式。通过遵循本指南，您可以配置、预览和部署网页，以创建适合您需求的信息显示器、仪表板或参考屏幕。

请记住，并非所有 Web 内容都适合小型显示器或嵌入式设备。为了获得最佳体验，请考虑使用移动响应式网站或创建专门为您设备的尺寸和功能设计的自定义网页。

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
