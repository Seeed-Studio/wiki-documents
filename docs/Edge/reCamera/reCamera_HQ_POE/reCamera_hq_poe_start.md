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
slug: /recamera_hq_poe_getting_started
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

Start by unpacking your reCamera HQ POE. Inside the box, you should find:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/6-100029708-reCamera-2002-HQ-PoE-8GB.jpg" /></div>

- reCamera HQ POE.
- User manual (inside the box)
- USB Type C ([Purchase lini](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html))
- Ethernet cable

### Setup device and login

**Step1:** Connect the usb cable from reCamera HQ POE to your PC. Navigate to `192.168.42.1` on website and change the default password.  If you are using POE Ethernet, access by querying the assigned IP address from your router.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_1.png" /></div>

:::note
Please remember your password, otherwise all logs will be erased to reset your device. If you forget the password, please [factory reset](https://wiki.seeedstudio.com/recamera_getting_started/#factory-reset) your device.
:::

:::note
The default username and password are both `recamera`.  If you perform a factory reset or are using a new (unconfigured) device, these are the username and password to use.
:::

**Step2:** Connect the USB cable from the reCamera to your PC, then you can access **192.168.42.1** to view the reCamera loading page.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/usbmode.png" /></div>

If you want to use the Ethernet port, you can connect the included data cable to your router. The device can be powered using **PoE (Power over Ethernet)** only. You can unscrew the back of the camera and connect through the port.

After connecting, you can find the **reCamera’s IP address** in your router’s admin panel, then access the **web interface** and the **Node-RED platform**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/ethernet_cable.png" /></div>

**Step3:** You will be taken to the  reCamera HQ POE preview dashboard, where you can use the controls on the dashboard to experience some of reCamera’s features.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE-1.png" /></div>

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

**Step1:** Access the web page via **192.168.42.1**, and you will enter the **live preview interface**.

**Step2:** You can adjust the threshold of ``IoU`` and ``Confidence`` to get a more accurate result.

- IoU=0,Confidence=0:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard2.png" /></div>

- IoU=25,Confidence=33:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard3.png" /></div>

#### AI Model Parameters

**Confidence**: Confidence in the YOLO model represents the probability that a predicted bounding box contains an object and how accurate the prediction is. It is a value between 0 and 100.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_confidence.png" /></div>

**Intersection over Union (IoU)**: IoU is a metric used to evaluate the overlap between the predicted bounding box and the ground truth bounding box. It is calculated as the ratio of the intersection area of the two boxes to the union area of the two boxes. The value of IoU is typically in the range from 0 to 1. We standardized it to a scale of 0 - 100, an IoU value of 0 represents no overlap between the predicted box and the ground - truth box. A value of 100 indicates a perfect match, meaning the two boxes completely overlap.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_iou.png" /></div>

### Quick start with reCamera HQ POE Dashboard Flow

If you would like to know how the dashboard is made with Node-RED nodes, click the bottom right corner or visit `ip_address/#/workspace` to access Gimbal's Node-RED workspace

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE-2.png" /></div>

Then you will see the default gimbal dashboard flow, you can double click in each node to view the detail of the node. The dashboard flow will look like this:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE-3.png" /></div>

**Model Settings**:

- Slider nodes allow you to adjust the IoU (Intersection over Union) and confidence threshold for the YOLO AI model.

**Dashboard UI Display**:

- The UI template node displays text showing the current model settings.
- It also renders the base64 image from the camera, including detection boxes for objects identified by YOLO.

**Basic Web Iframe Subflow**:

- An iframe subflow displays basic web pages like network settings, system info, and device information.
- Note that these may consume CPU resources as it renders the page with multiple nodes. It can be deleted if not needed.

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

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/POE-4.jpg" /></div>

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
