---
description: 本教程将向您展示如何为 recomputer AI Box 编译、配置和烧录 balenaOS。
title: 为 reComputer AI R2140 构建 balenaOS
keywords:
  - Edge
  - reComputer R2140
  - balena
image: https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/recomputer_ai_r2140.webp
slug: /cn/recomputer_ai_r2140_balena
last_update:
  date: 11/4/2025
  author: JiahaoLi
---

[balena](https://www.balena.io/) 是一个物联网（IoT）平台，旨在帮助开发者在设备群中构建、部署和管理 IoT 应用程序。它支持广泛的设备架构，包括容器化应用程序部署功能，使您能够轻松更新 IoT 软件和主机操作系统，修复错误并为 IoT 应用程序引入新功能。balena 提供了一种统一的方式来推送代码更新、管理设备配置，并确保设备在现场可靠安全地运行，无论其位置或网络条件如何。


<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena.png" alt="pir" width="700" height="auto" /></div>

## 入门指南

在开始此项目之前，您可能需要按照此处描述的内容提前准备硬件和软件。

### 硬件准备


<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer AI R2140</th>
 </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/q/q/qq_1.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2140-12-p-6431.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

>注意：准备一张 SD 卡和读卡器来烧录镜像。

### 软件

- 一个 [balenaCloud](https://balena.io) 账户（在此注册）并免费获得前 10 台设备。

<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/balena.png" alt="pir" width="800" height="auto" /></div>

- [balenaEtcher](https://etcher.balena.io/) 用于刷写 reComputer R2140 存储器。

<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/balenaEtcher.png" alt="pir" width="800" height="auto" /></div>

### 在 balena cloud 上创建舰队

请参考下图中的流程来创建舰队：

<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/creat_fleet.png" alt="pir" width="800" height="auto" /></div>

### 添加设备

请参考下图中的流程来添加新的 reComputer AI R2140：

<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/add_device.png" alt="pir" width="800" height="auto" /></div>

### 安装 balena OS

请参考下图中的流程来安装 balena OS：
<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/install_image.png" alt="pir" width="800" height="auto" /></div>


### 刷写 balena OS

请参考下图中的流程将 balena OS 刷写到 SD 卡：

<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/flash_image.png" alt="pir" width="800" height="auto" /></div>


下图显示了刷写完成后的样子：

<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/finish_image.png" alt="pir" width="800" height="auto" /></div>


### 测试设备

将刷写好的 SD 卡插入 recomputer AI box，然后开机并连接网线。2 分钟后，您应该能够在 Balena Cloud 中看到新设备。

<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/test_device.png" alt="pir" width="800" height="auto" /></div>


当您点击设备时，您将进入下图所示的界面，这意味着您可以远程控制设备。

<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/resul.png" alt="pir" width="800" height="auto" /></div>


## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
