---
description: Learn how to set up and configure Home Assistant on a reComputer R1000
title: reComputer R1000 with Home Assistant 
keywords:
  - Home Assistant 
  - reComputer R1000
  - Home Automation
  - Bookworm
  
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /recomputer_r1000_home_automation
last_update:
  date: 08/02/2024
  author: Kasun Thushara
---

## Introduction 

The reComputer r1000, designed for Building Automation Systems, features multiple isolated RS485 channels that support both high and low-speed communication. It is compatible with BACnet, Modbus RTU, and Modbus TCP/IP protocols, making it versatile for various automation needs. This guide provides a concise introduction to installing Home Assistant on the reComputer r1000, enabling seamless integration and control of your smart home devices.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/logo.png" style={{width:400}}/></div>

[Home Assistant](https://www.home-assistant.io/) is a free and open-source software for home automation, serving as a central control system or smart home hub for various devices. Designed with local control in mind, it ensures your Building Management System (BMS) operates independently of remote servers or internet connections, enhancing security and reliability. This means your BMS can run 24/7 without the vulnerabilities associated with cloud-connected devices, providing a robust and secure automation solution.

## Getting Start

Before you start this project, you may need to prepare your hardware in advance as described here.

### Hardware Preparation

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

:::note
During the HA installation process, we tested using wireless connectivity.
:::

### Software Preparation

The reComputer comes with a pre-installed Bookworm 64 bit version. This guide covers the steps for **installing Home Assistant Supervised** on that system.

## Why Home Assistant Supervised?

There are a few methods to install Home Assistant on your reComputer. You can opt for a full installation of Home Assistant, or if you plan to run Home Assistant alongside other applications on top of your operating system, the supervised method is ideal. Another option is to use Docker, but this requires setting up separate Docker containers as add-ons. This guide focuses on the more complex installation process of the **Supervised method**. Don't worry—we'll walk you through it step by step.


## Home Assistant Supervised Installation - Bookworm

#### Step 1: Update and Install Dependencies

```bash
sudo apt update
sudo apt-get install -y jq wget curl udisks2 apparmor-utils libglib2.0-bin network-manager dbus systemd-journal-remote systemd-resolved
```

#### Step 2: Start and Enable Network Manager

Check the status of Network Manager

```bash
sudo systemctl status NetworkManager.service
```

NetworkManager does not start, start and enable

```bash
sudo systemctl start NetworkManager
sudo systemctl enable NetworkManager
```

#### Step 3: Modify Boot Parameters

Edit the `cmdline.txt` file:
```bash
sudo nano /boot/firmware/cmdline.txt
```

Add the following at the end of the line:

```bash
systemd.unified_cgroup_hierarchy=false lsm=apparmor
```

Reboot the system:
```bash
sudo reboot
```

#### Step 4: Install Docker

```bash
sudo curl -fsSL get.docker.com | sh
sudo gpasswd -a $USER docker
newgrp docker
```

#### Step 5: Install OS Agent

```bash
wget https://github.com/home-assistant/os-agent/releases/download/1.6.0/os-agent_1.6.0_linux_aarch64.deb
sudo dpkg -i os-agent_1.6.0_linux_aarch64.deb
```

#### Step 6: Install Home Assistant Supervised

```bash
wget https://github.com/home-assistant/supervised-installer/releases/download/1.6.0/homeassistant-supervised.deb
sudo dpkg -i homeassistant-supervised.deb
```

Upon successful correction, a blue screen will appear, allowing you to select **Raspberry Pi4 64** model.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/bluescreen.png" style={{width:600}}/></div>

After a few minutes, the installation will begin.

You can then view the Home Assistant Dashboard UI on a web browser using `<your_recomputer_ip>:8123`.

It will take some time to finish the initial startup process. Once it has finished starting up, create an account and follow the initial setup instructions

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Home-Assistant/13.png" style={{width:600}}/></div>

:::note
If there are warnings in notifications, please reboot the reComputer.
:::

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


