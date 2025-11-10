---
description: Getting Started with reCamera HQ POE
title: Quick Start Guide
keywords:
  - Edge
  - reCamera
  - reCamera HQ POE
  - POE
  - HQ
  - M12
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /recamera_hd_poe_getting_started
sidebar_position: 1
last_update:
  date: 09/25/2025
  author: Parker Hu
---

# reCamera HQ POE Getting Started Guide

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" /></div>

## Introduction

Welcome to reCamera HQ POE! reCamera 2002 HQ PoE is equipped with an advanced CMOS sensor for sharper, clearer images. It has an M12 lens mount—flexible to replace the default lens with any compatible 2MP M12 lens. Also supports PoE (Power over Ethernet): no separate USB/DC power needed, just one Ethernet cable to a PoE switch for power and data.

This guide will help you quickly set up your device and start using it to unlock powerful AI-Vision features. Whether you're a beginner or an experienced user, this step-by-step walkthrough will guide you through the installation, configuration, and first use.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱</font></span></strong>
    </a>
</div>

## Unboxing

### Setup device and login

**Step1:** Connect the usb cable from reCamera HQ POE to your PC. Navigate to `192.168.42.1` on website and change the default password.  If you are using POE Ethernet, access by querying the assigned IP address from your router.

## Basic Web Access

Web urls:

- Preview Page: ip_address/#/dashboard

- Home Page: ip_address/#/init

- Workspace: ip_address/#/workspace

- Network Configuration: ip_address/#/network

- Security: ip_address/#/security

- Terminal: ip_address/#/terminal

- System: ip_address/#/system

- Power: ip_address/#/power

- Original Node-RED: ip_address:1880

### Quick Start with reCamera HQ POE Dashboard


### Quick start with reCamera HQ POE Dashboard Flow

## Apply cloud management and backup

If you would like to create new application or save applications to SenseCraft cloud service, you can login sensecraft account at the bottom left, and then click the + icon sign to add a new application. Then you can start working on your flow.


If you would like to create new application or save applications to SenseCraft cloud service, you can login sensecraft account at the bottom left, and then click the `+` icon sign to add a new application. Then you can start working on your flow.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_7.png" /></div>

You can view and manage your apps [reCamera - SenseCraft AI](https://sensecraft.seeed.cc/ai/#/recamera).

:::note

You need to register an account before you can login through the platform to sync your applications.

:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_14.png" /></div>

## Port List

The following lists the ports used by reCamera Gimbal:

- **Port 22**: Utilized for remote SSH login and is close.
- **Port 53**: Associated with DNS domain name resolution and is essential for web redirection. It is open by default.
- **Port 80**: Serves as the web dashboard interface for HTTP display of the Node-RED Application.
- **Port 554**: Employed for RTSP video streaming.
- **Port 9090**: Intended for web terminal access, which requires a password for login.
- **Port 1880**: Dedicated to Node-RED operations.

## OTA OS upgrade

Please refer to the [OTA Upgrade Instruction](https://wiki.seeedstudio.com/recamera_getting_started/#ota-upgrade-from-013-to-latest-version).

## Factory Reset



If you would like to reset the device such as forgetting your device's passcode, you can long pressing the **User** button and then connecting the  device to power. When the `red light` of the device is **constantly on** instead of blinking, release the User button.

## Resources

- [Github](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

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
