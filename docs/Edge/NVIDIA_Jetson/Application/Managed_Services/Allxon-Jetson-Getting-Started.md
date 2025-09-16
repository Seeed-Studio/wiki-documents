---
description: Remote Manage with Allxon on NVIDIA Jetson Devices
title: Getting Started with Allxon
tags:
  - Remote Manage
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Allxon-Jetson-Getting-Started
last_update:
  date: 1/13/2023
  author: jianjing Huang
---

# Getting Started with Allxon on NVIDIA® Jetson Devices

<p style={{textAlign: 'center'}}><img src="https://www.allxon.com/hs-fs/hubfs/Allxon_%E6%8F%92%E7%95%AB_20210512-+NVIDIA.png?width=1125&height=845&name=Allxon_%E6%8F%92%E7%95%AB_20210512-+NVIDIA.png" alt="pir" width="1000" height="auto"/></p>

[Allxon](https://www.allxon.com) is an essential edge device management solution that simplifies and optimizes business operations management by bonding together the AI/IoT ecosystem: hardware (IHV), software (ISV), and service providers (SI/MSP). As an ecosystem bonder, Allxon is the spark that ignites fast, seamless connectivity to keep all systems ON.

You can securely manage NVIDIA® JetPack 4.6 onward versions with Cyber Security at the Edge protecting all networks and hardware. Allxon integrates exclusive threat intelligence by Trend Micro IoT Security™ (TMIS) to ensure you receive multi-layered protection.

Allxon brings in-band and out-of-band remote device management services to all edge devices to help businesses save on time and cut out exponential labor costs. By simply navigating on an easy-to-use single cloud portal, businesses can effortlessly optimize and streamline their services.

## Hardware Supported

- [Support all nvidia jetson devices](https://www.seeedstudio.com/tag/nvidia.html)

## Prerequisites

- Any of the above Jetson Devices
- Latest Jetson OS already installed on the Jetson Device
- Monitor, keyboard, mouse (optional)

## Getting Started

Getting started with Allxon only takes a couple of minutes!

- Hardware Wiring Introduction
- Sign Up for Allxon Account
- Install Allxon DMS Agent on Jetson Device
- Get Device Pairing Code
- Add Jetson Device to Allxon DMS Portal

### Hardware Wiring Introduction

Pin Define for OOB Enabler main board and the corresponding color of
the cable.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/writting-1.png" alt="pir" width="500" height="auto"/></p>
Here, we will use the wiring diagram of OBB and Jetson Orin Nano as an example. The following information provides wiring examples for the NVIDIA® Jetson™ Orin Nano Dev Kit.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/wiring-2.png" alt="pir" width="700" height="auto"/></p>
We have also provided a schematic diagram of the wiring.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/wiring-3.png" alt="pir" width="1000" height="auto"/></p>

### Sign Up for Allxon Account

- **Step 1.** Visit [this page](https://dms.allxon.com/next/signup) to sign up for an Allxon account

- **Step 2.** Enter your email address and proceed

- **Step 3.** Verify the account from the activation email you receive and create a password

### Install Allxon DMS Agent on Jetson Device

Installing Allxon DMS Agent is a very easy process. You only need to execute one command!

- **Step 1.** Access the Jetson Device, open terminal and execute the following

```sh
sudo wget -qO - "https://get.allxon.net/linux/standard" | sudo bash -s
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/install-1.png" alt="pir" width="1000" height="auto"/></p>

**Note:** The above command will install Allxon DMS Agent and the related packages

- **Step 2.** At the end of the installation, it will ask whether you want to install **Trend Micro IoT Security™** as an add-on edge security services and agree to the TMIS EULA. You can enter **Y** to proceed with this installation

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/install-2.jpg" alt="pir" width="1000" height="auto"/></p>

**Note:** Trend Micro IoT Security™ will be installed as a 3-month free trial

After installation, The Allxon DMS Agent will start automatically.

**Note:** If you have connected the Jetson Device to a display, you will see Allxon DMS Agent window pop up. If it does not show up, press **Ctrl + Shift + B** to start the agent.

### Get Device Pairing Code

First we need to get a device pairting code from our Jetson Device. You can either obtain this code from the GUI or command-line

#### Using GUI

- **Step 1.** Open Allxon DMS Agent by pressing **Ctrl + Shift + B** on the Jetson Device

- **Step 2.** Click **Get device pairing code** to obtain the code

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/agent-2.png" alt="pir" width="700" height="auto"/></p>

#### Using Command-line

- **Step 1.** Execute the following to obtain the code

```sh
dms-get-pairing-code
```

### Add Jetson Device to Allxon DMS Portal

- **Step 1.** Login to [Allxon DMS Portal](https://dms.allxon.com/next/signin) with the previosly used credentials

- **Step 2.** Click **Devices** from the left navigation panel and click on **+ Add Device**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/portal-1.png" alt="pir" width="1000" height="auto"/></p>

- **Step 3.** Click **Next**, enter previously obtained device pairing code and click **Next**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/portal-2.png" alt="pir" width="450" height="auto"/></p>

- **Step 4.** You will see the following window if the pairing is successful

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/portal-3.png" alt="pir" width="450" height="auto"/></p>

**Note:** If you have a promotion code, you can click **Next** and redeem it. Otherwise, you can press **Skip** to finish the setup.

### Allxon DMS Portal

After that Jetson Device is paired with Allxon DMS Portal, you will see the connected device under **Devices** page

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/portal-4.png" alt="pir" width="1000" height="auto"/></p>

If you click on the device, you will see more information for your device. Now you can remotely monitor and manage your device with Allxon DMS Portal!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Allxon/portal-5.png" alt="pir" width="1000" height="auto"/></p>

## Resources

- **[Web Page]** [Allxon Resource Center](https://www.allxon.com/knowledge)

- **[Web Page]** [NVIDIA Learn](https://developer.nvidia.com/embedded/learn)

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
