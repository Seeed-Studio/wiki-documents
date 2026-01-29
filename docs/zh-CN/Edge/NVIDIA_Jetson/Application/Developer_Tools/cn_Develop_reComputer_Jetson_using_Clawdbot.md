---
description: 本 wiki 展示如何在 reComputer Jetson 上部署和使用 Clawdbot。
title: 使用 Clawdbot 开发 reComputer Jetson
keywords:
- reComputer Super
- Jetson
- LLM
- Clawdbot
- Qwen
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/voice_control/hardware_connect.webp
slug: /cn/develop_recomputer_jetson_using_clawdbot
last_update:
  date: 01/28/2026
  author: Youjiang
---


# 使用 Clawdbot 开发 reComputer Jetson

## 简介

<div style={{textAlign: 'justify', textJustify: 'inter-word'}}>

    传统上，在 Jetson 边缘设备上开发需要物理设置，包括显示器、键盘和鼠标。即使使用远程 SSH 访问，开发者仍然依赖于基于终端的工作流程和用于监控和部署的额外工具。
    有了 Clawdbot，开发变得更加简单。开发者现在可以直接通过像 WhatsApp 这样的聊天应用与 reComputer Jetson 交互——发送消息来检查设备状态、运行命令，并以更便捷的方式调试脚本。

    本 wiki 展示如何在 reComputer Jetson 上部署和使用 Clawdbot。
</div>

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/clawdbot/chatops.png" />
</div>


## 前提条件
- reComputer Super J4012
- USB 摄像头

<table align="center">
    <tr>
        <th>reComputer Super J4012</th>
        <th>USB 摄像头</th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110311-recomputer-super-j3010_1.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-114090066--x10-usb-camera.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/X10-USB-wired-camera-p-6506.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>

## 硬件连接

将 USB 摄像头连接到 Jetson 设备上的 USB Type-A 端口。

## 入门指南

1. 在 Jetson 设备上安装 Clawdbot  
在 Jetson 设备上打开终端并运行：

```bash
curl -fsSL https://molt.bot/install.sh | bash
```

2. 配置 Clawdbot  
安装后，设置页面会自动打开。按照终端提示操作，注意：
- 选择 LLM 并输入 API Key
- 选择交互渠道（本示例中使用 WhatsApp）

3. 启动 Clawdbot AI 代理  
如果一切配置正确，代理会自动启动。然后在 Jetson 设备浏览器中打开 WebUI：  
`http://127.0.0.1:18789`

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/clawdbot/webui.png" />
</div>

现在您可以在手机上打开 WhatsApp，通过向自己发送消息来控制 reComputer Jetson。


## 效果演示

在演示视频中，我们使用移动聊天应用检查了 Jetson 设备的状态，并通过基于聊天的交互开发了一个摄像头调试脚本。

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/9bQcx7G0CiU" title="Develop reComputer Jetson using Clawdbot" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


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
