---
description: 介绍 SenseCraft HMI 平台下的 Gallery 功能的使用方法。
title: Gallery 功能
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/sensecraft_hmi_gallery
sidebar_position: 3
last_update:
  date: 07/21/2025
  author: Citric
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 在 SenseCraft HMI 中使用 Gallery

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/66.jpg" style={{width:800, height:'auto'}}/></div>

## 介绍

[SenseCraft HMI](https://sensecraft.seeed.cc/hmi) 中的 Gallery 功能允许您将基于屏幕的设备转换为美观的数字相框。您可以上传本地图片或从 URL 导入图片，然后以可自定义的切换间隔和视觉效果显示它们。此功能非常适合使用您的 Seeed Studio 显示设备创建环境显示、信息屏幕或装饰性相册。

本教程将指导您使用 SenseCraft HMI 中的 Gallery 功能，涵盖图片上传方法、显示设置以及获得最佳性能的重要注意事项。

本文将以 [reTerminal E1002](https://wiki.seeedstudio.com/cn/getting_started_with_reterminal_e1002/) 为例，说明如何在 SenseCraft HMI 平台上使用此功能。

## Gallery 入门

### 访问 Gallery 功能

步骤 1. 导航到下方的 SenseCraft HMI 平台。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/hmi" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> SenseCraft HMI 🖱️</font></span></strong>
    </a>
</div><br />

步骤 2. 连接您的设备或选择已配对的设备进行使用。

步骤 3. 点击左侧边栏中的"Gallery"选项卡

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/67.png" style={{width:1000, height:'auto'}}/></div>

### 了解 Gallery 界面

Gallery 界面由几个关键元素组成：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/68.png" style={{width:1000, height:'auto'}}/></div>

1. **控制面板**：位于顶部，此区域包含间隔时间、抖动模式的设置和操作按钮

2. **图片显示区域**：主要部分，显示您当前的图片

3. **图片工具栏**：包含调整、下载或删除当前图片的工具

4. **缩略图条**：位于底部，显示您图库中所有上传的图片

5. **操作按钮**：保存、预览和部署按钮，用于测试和将您的图库应用到设备

## 向您的 Gallery 添加图片

SenseCraft HMI 提供两种向图库添加图片的方法：上传本地文件或从 URL 导入。

### 上传本地图片

步骤 1. 点击控制面板中的"Add Photos"按钮

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/70.png" style={{width:1000, height:'auto'}}/></div>

步骤 2. 在出现的对话框中，确保选择了"Upload Files"选项卡

步骤 3. 点击"Select Photos"并从您的计算机中选择要上传的图片

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/69.png" style={{width:600, height:'auto'}}/></div>

步骤 4. 重要的图片要求和限制：

- 支持 JPG、PNG 和 GIF 格式

- 超过 2MB 的照片将被自动压缩

- 非 5:3 宽高比将通过白色填充进行调整

- 目标分辨率：800x480 像素（或您设备的原生分辨率）

- 没有 MicroSD 卡时，最多可以上传 3 张照片

- 有 MicroSD 卡时，最多可以上传 20 张照片

步骤 5. 如需选择多个文件，请使用 Ctrl/Cmd + 点击

步骤 6. 点击"Open"上传选定的图片

### 从 URL 导入图片

步骤 1. 点击控制面板中的"Add Photos"按钮

步骤 2. 在出现的对话框中，选择"Import from URL"选项卡

步骤 3. 在提供的字段中输入直接图片 URL

步骤 4. 点击"Import"将图片添加到您的图库

:::tip
从 URL 导入时，请确保使用以 .jpg、.png 或 .gif 等文件扩展名结尾的直接图片链接。指向包含图片的网页的链接可能无法正常工作。
:::

## 管理您的相册

### 设置显示间隔

间隔设置决定了每张图片在切换到下一张之前显示多长时间：

步骤 1. 在控制面板中找到"Interval(min):"字段

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/71.png" style={{width:600, height:'auto'}}/></div>

步骤 2. 输入您希望的显示时间（以分钟为单位）（例如，1表示每张图片显示一分钟）

### 选择抖动模式

抖动模式影响图片如何处理以在您的特定设备上获得最佳显示效果：

步骤 1. 在控制面板中找到"Dither Mode:"下拉菜单

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/72.png" style={{width:600, height:'auto'}}/></div>

步骤 2. 为您的设备选择合适的选项：

- **Full Color**: 最适合彩色LCD显示屏，保留所有颜色信息

- **Black and White**: 将图片转换为纯黑白，非常适合单色电子纸显示屏

:::tip
对于电子纸/电子墨水显示屏，选择"Black and White"模式可获得最佳显示质量和更快的刷新率。对于LCD屏幕，"Full Color"将提供最佳的视觉体验。
:::

### 使用图片工具栏

您相册中的每张图片都可以使用出现在图片上方的工具栏进行调整：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/73.png" style={{width:700, height:'auto'}}/></div>

从左到右，工具分别是：

1. **Fill Horizontally**: 调整图片以水平填充屏幕，同时保持纵横比

2. **Fill Vertically**: 调整图片以垂直填充屏幕，同时保持纵横比

3. **Download**: 将处理后的图片保存到您的计算机

4. **Delete**: 从您的相册中删除图片

:::tip
对横向图片使用"Fill Horizontally"选项，对纵向图片使用"Fill Vertically"选项，以充分利用您的显示空间，同时避免图片失真。
:::

### 重新排序图片

您可以使用缩略图条更改图片的显示顺序：

步骤 1. 在屏幕底部的条带中找到您想要移动的图片缩略图

步骤 2. 点击并拖拽缩略图到序列中的新位置

步骤 3. 释放以设置新的顺序

## 将您的相册部署到设备

一旦您添加并配置了图片，就可以将相册部署到您连接的设备：

步骤 1. 点击"Save"按钮保存您的相册配置

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/74.png" style={{width:1000, height:'auto'}}/></div>

:::tip
上传或设计图片后，习惯性地点击保存按钮，确保您的布局设计不会轻易丢失。
:::

步骤 2. （可选）点击"Preview"查看您的相册在设备上的显示效果，而无需完全部署

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/75.png" style={{width:1000, height:'auto'}}/></div>

步骤 3. 点击"Deploy"将您的相册发送到连接的设备

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/76.png" style={{width:1000, height:'auto'}}/></div>

步骤 4. 等待部署确认消息

:::tip
点击部署按钮后，设备可能不会立即更新相册。设备可能处于睡眠模式。它将在下次唤醒时拉取最新的相册图片。如果您想立即更新照片，可以点击设备上方的绿色按钮，设备将立即唤醒并拉取仪表板更新。
:::

部署后，您的设备将根据您的间隔设置开始显示图片。

## 存储注意事项

### MicroSD 卡要求

要在设备上存储超过 3 张图片，您需要使用 MicroSD 卡：

1. **格式**：MicroSD 卡必须格式化为 FAT32

2. **容量**：建议 8GB 或更大（支持最大 32GB）

3. **速度**：建议 Class 10 或更高等级以获得更好的性能

:::warning
使用 FAT32 以外的文件系统可能导致设备无法识别 MicroSD 卡或无法正确保存图片。
:::

### 如何将 MicroSD 卡格式化为 FAT32

<Tabs>
<TabItem value="On Windows" label="在 Windows 上" default>

步骤 1. 将 MicroSD 卡插入计算机

步骤 2. 打开文件资源管理器并右键单击 MicroSD 卡

步骤 3. 选择"格式化..."

步骤 4. 从文件系统下拉菜单中选择"FAT32"

步骤 5. 点击"开始"开始格式化

</TabItem>
<TabItem value="On macOS" label="在 macOS 上">

步骤 1. 将 MicroSD 卡插入计算机

步骤 2. 打开磁盘工具（应用程序 > 实用工具 > 磁盘工具）

步骤 3. 从侧边栏选择您的 MicroSD 卡

步骤 4. 点击"抹掉"

步骤 5. 选择"MS-DOS (FAT)"作为格式

步骤 6. 点击"抹掉"格式化卡片

</TabItem>
</Tabs>

### 插入 MicroSD 卡

步骤 1. 关闭设备电源

步骤 2. 找到设备上的 MicroSD 卡插槽

步骤 3. 插入正确格式化的 MicroSD 卡

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reterminal_e10xx/img/133.jpg" style={{width:700, height:'auto'}}/></div>

步骤 4. 开启设备电源

步骤 5. 重新连接到 SenseCraft HMI 以验证扩展存储是否被识别

## 为您的显示屏优化图片

为了在设备显示屏上获得最佳视觉效果：

1. **匹配分辨率**：准备与设备原生分辨率匹配的图片（通常为 800x480 像素）

2. **考虑宽高比**：使用 5:3 宽高比的图片以避免白色填充

3. **针对显示类型优化**：

- 彩色 LCD：标准彩色图片效果良好
- 电子纸/电子墨水：较少颜色渐变的高对比度图片
- 双色电子纸：黑白或高对比度图片

4. **文件大小**：保持图片小于 2MB 以避免自动压缩

5. **亮度/对比度**：根据您特定显示屏的特性进行调整

## 故障排除

### 常见问题和解决方案

1. **图片无法上传**：

- 检查您的图片是否为支持的格式（JPG、PNG、GIF）

- 确保文件大小不会太大（理想情况下小于 2MB）

- 尝试使用不同的浏览器或清除浏览器缓存

2. **无法上传超过 3 张图片**：

- 验证您的设备中已插入正确格式化的 MicroSD 卡

- 检查 MicroSD 卡是否格式化为 FAT32

- 确保设备正确检测到 MicroSD 卡

3. **图片显示不正确**：

- 使用图片工具栏调整亮度/对比度

- 准备与设备分辨率匹配的图片

4. **部署失败**：

- 确保您的设备正确连接到 SenseCraft HMI

- 检查设备是否有足够的存储空间
  
- 重启设备并尝试重新部署

## 结论

SenseCraft HMI 中的图库功能提供了一种简单的方法，可以将您的基于屏幕的设备转换为数字相框。通过遵循本指南，您可以在设备上上传、管理和显示图像，并使用自定义设置以获得最佳观看效果。

请记住，要存储超过 3 张图像，您需要在设备中插入格式正确的 MicroSD 卡。通过正确的设置，您可以创建美丽的幻灯片和显示效果，在您的 Seeed Studio 显示设备上展示您最喜爱的图像。

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
