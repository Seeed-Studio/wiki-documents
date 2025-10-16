---
description: Guide for using the Web Control Panel of your SenseCAP Watcher Agent
title: Web Control Panel(β)
sidebar_position: 3
keywords:
- SenseCAP
- Watcher
- Web Control Panel
- Agent Configuration
- Device Management
image: http://files.seeedstudio.com/wiki/Watcher_Agent/Watcher_Agent.webp
slug: /watcher_web_control_panel
last_update:
  date: 10/13/2025
  author: Twelve
translation:
  skip: [ zh-CN ]
---

# Web Control Panel Beta Guide

## Overview

The SenseCAP Watcher Web Control Panel (Beta) provides a web-based interface for managing your Watcher device and configuring its Agent settings. This beta version includes essential features for device management and Agent customization.

The following video serves as a step-by-step tutorial on how to configure your device using the Web Control Panel.
<div class="video-container"> <iframe width="560" height="315" src="https://www.youtube.com/embed/6UDVsv953Tw?si=0yD96_pQq1cMjjAG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

## Current Features

The beta version of the Web Control Panel includes the following key features:

1. Device Binding
2. Agent Configuration
3. LLM Model Selection
4. Chat History Management
5. Device Information Display

## Device Binding

### Binding Process
1. Enter the [SenseCraft AI Platform](https://sensecraft.seeed.cc/ai/home)
2. To access the Control Panel, click Watcher Agent in the upper-right corner of the page.
   <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/navigate.jpg" style={{width:800, height:'auto'}}/></div>
3. Click on the "Bind Device" button
   <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/page1.jpg" style={{width:300, height:'auto'}}/></div> 
4. Follow the on-screen instructions and enter the 6-digit verification code displayed on the device



<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/firmware/activation.jpg" style={{width:300, height:'auto'}}/></div> 

## Agent Configuration

   <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/agent%20conf.jpg" style={{width:300, height:'auto'}}/></div> 

### Role template
- We provide preset templates, you can also create own templates or modify on the preset templates.

### Assistant Nickname
- Customize your Agent's name.
:::note
This feature does not change the Agent's wake word. 
The Agent wake word can only be modified when compiling the firmware. 
The default wakeup word is “Jarvis”.
:::


### Character Voice
- Select different voice

### Role Introduction/Prompt
1. Choose from pre-defined role templates
2. Create custom role templates
3. Modify existing templates
:::note
The Assistant Nickname set above will only work if `assistant nickname` is added to the Role Introduction.
To get the current time, you need to add: __DATE__
:::


### Viewing History
- Access chat logs
- View individual messages
  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/history%20del.jpg" style={{width:600, height:'auto'}}/></div> 

## Device Information

   <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/device%20list.jpg" style={{width:800, height:'auto'}}/></div> 

The control panel displays essential device information including:

- Board Name
- MAC address
- APP Version
- Last Connected Time
- Auto Upgrade switch
- Operation

:::note
This is a beta version of the Web Control Panel, and features may be updated or changed in future releases. Please check for updates regularly for the latest functionality.
:::

## Technical Support

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
