---
description: This wiki shows how to deploy and use Clawdbot on reComputer Jetson.
title: Develop reComputer Jetson using Clawdbot
keywords:
- reComputer Super
- Jetson
- LLM
- Clawdbot
- Qwen
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/clawdbot/chatops_homepage.webp
slug: /develop_recomputer_jetson_using_clawdbot
sku: 114110314, 114090066
last_update:
  date: 01/28/2026
  author: Youjiang
---


# Develop reComputer Jetson using Clawdbot

## Introduction

<div style={{textAlign: 'justify', textJustify: 'inter-word'}}>

    Traditionally, developing on a Jetson edge device required a physical setup with a monitor, keyboard, and mouse. Even with remote SSH access, developers still depended on terminal-based workflows and additional tools for monitoring and deployment.
    With Clawdbot, development becomes much simpler. Developers can now interact with the reComputer Jetson directly through a chat app like WhatsApp — sending messages to check device status, run commands, and debug scripts in a more convenient way.

    This wiki shows how to deploy and use Clawdbot on reComputer Jetson.
</div>

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/clawdbot/chatops.png" />
</div>

## Prerequisites

- reComputer Super J4012
- USB Camera

<table align="center">
    <tr>
        <th>reComputer Super J4012</th>
        <th>USB Camera</th>
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
                    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/X10-USB-wired-camera-p-6506.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>

## Hardware Connection

Connect the USB camera to a USB Type-A port on the Jetson device.

## Getting Started

1. Install Clawdbot on the Jetson device  
Open a terminal on the Jetson device and run:

```bash
curl -fsSL https://molt.bot/install.sh | bash
```

2. Configure Clawdbot  
After installation, the setup page opens automatically. Follow the terminal prompts and pay attention to:

- Selecting the LLM and entering the API Key
- Choosing the interaction channel (WhatsApp in this example)

3. Start the Clawdbot AI Agent  
If everything is configured correctly, the agent starts automatically. Then open the WebUI in the Jetson device browser:  
`http://127.0.0.1:18789`

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/clawdbot/webui.png" />
</div>

Now you can open WhatsApp on your phone and control the reComputer Jetson by sending messages to yourself.

## Effect Demonstration

In the demo video, we used a mobile chat application to check the status of the Jetson device and developed a camera debugging script through chat-based interaction.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/9bQcx7G0CiU" title="Develop reComputer Jetson using Clawdbot" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
