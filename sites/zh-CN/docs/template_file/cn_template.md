---
description: 模板 wiki
title: 模板 wiki
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /Name_your_website
last_update:
  date: 08/09/2023
  author: 示例名称
createdAt: '2023-08-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/Name_your_website/
---

# 项目概述

:::note
这只是编写 Wiki 的基本指南，包括常用的编写代码。
:::

这是本 wiki 的概览。它应包含以下内容：

1. 应用展示图或主要使用产品的图片
2. 应用原理
3. 项目简介

## 硬件准备

这里我使用（Seeed 产品）作为硬件。此处内容应包括：

1. 列出在 Seeed Studio 中使用的所有产品，使用横向表格加文字说明，并附上 "立即获取" 产品链接。示例代码如下所示。
2. 使用图示展示项目的硬件连接方式

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32-S3（示例）</th>
        <th>Seeed Studio Grove OLED Display 0.96（示例）</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove-oled-displey-0.96-ssd1315-preview.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## 软件准备

我在 Windows 上使用 Thonny IDE 软件以及一些相关的库和文件。此处内容应包括：

1. 应用软件及下载地址
2. 打开软件并安装必要的依赖或库

<div class="table-center">
  <table align="center">
    <tr>
        <th>Arduino IDE</th>
        <th>相关文件（库）</th>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.arduino.cc/en/software" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> Download ⏬</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/related-mpy.zip" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> Download ⏬</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## 入门指南

### 分步说明：项目是如何实现的

1. 将第一步的代码上传到某个产品上，即可看到对应效果
2. 将第二步的代码上传到某个产品上，即可看到对应效果
3. ...

## 更多内容

你想补充或扩展的内容，例如：

- 此应用的扩展
- 拓展应用领域
- 提供发散性思路

## 故障排查

在硬件连接、软件调试或代码上传过程中可能遇到的一些问题。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，以确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## ✨ 其他 wiki 功能代码

### 首段代码（必选）

```
---
description: // One sentence introduction of the project
title: // One short words introduction of the project
keywords:
//Enter the upper-level directory where the file is stored (Grove，SenseCAP，reTerminal...)
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: / The name of file
last_update:
  date: //The data finished wiki
  author: // author
---
```

### 图片代码

```cpp
<p style={{textAlign: 'center'}}><img src="image_link" alt="pir" width={600} height="auto" /></p>
```

### 视频代码

```cpp
<div class="table-center">
<iframe width="100%" height="315" src="URL" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>
```

### 超链接

```cpp
<a  href="link" target="_blank"><span> PDF Download of SenseCAP S210X Sereis User Guide</span></a>
```


### 高亮代码

```cpp

{code}

```

### 折叠代码

<details>

<summary> title here</summary>

```cpp
#include
Print "code here"
```

</details>

### 下载 Arduino IDE 按钮

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
</div>

### 下载 Github 库按钮

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/tree/main/tft_espi-base-dial" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>


### 表格代码
其中包括超链接、图片链接、表格标题

<table align="center">
  <caption> <h2>title</h2> </caption>
  <tbody>
    <tr>
    <td><h4>Sensor</h4></td>
    <td><h4>Gas Type</h4></td>
    <td><h4>立即获取</h4></td>
    </tr>
    <tr>
    <td><a href="https://wiki.seeedstudio.com/cn/Grove-Gas_Sensor-MQ2/" target="_blank"><span>MQ2</span></a></td>
    <td>可燃气体，烟雾</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Gas-Sensor(MQ2)-p-937.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" alt="" width={200} height="auto"/></a>
</div></td>
    </tr>
        <tr>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    </tr>
  </tbody></table>



### note 

:::note
一些带有 _Markdown_ `syntax` 的**内容**。查看 [this `api`](#)。
:::


### tip 

:::tip
一些带有 _Markdown_ `syntax` 的**内容**。查看 [this `api`](#)。
:::

### info 

:::info
一些带有 _Markdown_ `syntax` 的**内容**。查看 [this `api`](#)。
:::

### danger 

:::danger
一些带有 _Markdown_ `syntax` 的**内容**。查看 [this `api`](#)。
:::


### Caution 

:::caution
一些带有 _Markdown_ `syntax` 的**内容**。查看 [this `api`](#)。
:::






