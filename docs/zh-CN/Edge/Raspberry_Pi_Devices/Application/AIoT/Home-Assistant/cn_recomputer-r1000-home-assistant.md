---
description: 学习如何在 reComputer R1000 上设置和配置 Home Assistant
title: reComputer R1000 与 Home Assistant 
keywords:
  - Home Assistant 
  - reComputer R1000
  - 家庭自动化
  - Bookworm
  
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /cn/recomputer_r1000_home_automation
last_update:
  date: 08/02/2024
  author: Kasun Thushara
---

## 简介

reComputer R1000 专为楼宇自动化系统设计，具有多个隔离的 RS485 通道，支持高速和低速通信。它兼容 BACnet、Modbus RTU 和 Modbus TCP/IP 协议，使其在各种自动化需求中具有很高的适应性。本指南提供了在 reComputer R1000 上安装 Home Assistant 的简明介绍，从而实现智能家居设备的无缝集成和控制。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/logo.png" style={{width:400}}/></div>

[Home Assistant](https://www.home-assistant.io/) 是一款免费的开源家庭自动化软件，可作为各种设备的中央控制系统或智能家居中心。它以本地控制为设计核心，确保您的楼宇管理系统（BMS）无需依赖远程服务器或互联网连接即可独立运行，从而增强了安全性和可靠性。这意味着您的 BMS 可以全天候运行，而无需担心与云连接设备相关的漏洞，提供了一个强大且安全的自动化解决方案。

## 开始准备

在开始这个项目之前，您需要提前准备好硬件，如下所述。

### 硬件准备

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
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

:::note
在安装 HA 的过程中，我们使用了无线连接进行测试。
:::

### 软件准备

reComputer 预装了 Bookworm 64 位版本。本指南涵盖了在该系统上安装 **Home Assistant Supervised** 的步骤。

## 为什么选择 Home Assistant Supervised？

在 reComputer 上安装 Home Assistant 有几种方法。您可以选择完整安装 Home Assistant，或者如果您计划在操作系统上运行 Home Assistant 并同时运行其他应用程序，监督安装方法是理想选择。另一种选择是使用 Docker，但这需要单独设置 Docker 容器作为附加组件。本指南重点介绍更复杂的安装过程，即 **监督安装方法**。别担心，我们会一步步引导您完成安装。

## Home Assistant 监督版安装 - Bookworm

#### 第一步：更新并安装依赖

```bash
sudo apt update
sudo apt-get install -y jq wget curl udisks2 apparmor-utils libglib2.0-bin network-manager dbus systemd-journal-remote systemd-resolved
```

#### 第二步：启动并启用 Network Manager

检查 Network Manager 的状态

```bash
sudo systemctl status NetworkManager.service
```

如果 NetworkManager 未启动，请启动并启用

```bash
sudo systemctl start NetworkManager
sudo systemctl enable NetworkManager
```

#### 第三步：修改启动参数

编辑 `cmdline.txt` 文件：
```bash
sudo nano /boot/firmware/cmdline.txt
```

在行尾添加以下内容：

```bash
systemd.unified_cgroup_hierarchy=false lsm=apparmor
```

重启系统：
```bash
sudo reboot
```

#### 第四步：安装 Docker

```bash
sudo curl -fsSL get.docker.com | sh
sudo gpasswd -a $USER docker
newgrp docker
```

#### 第五步：安装 OS Agent

```bash
wget https://github.com/home-assistant/os-agent/releases/download/1.6.0/os-agent_1.6.0_linux_aarch64.deb
sudo dpkg -i os-agent_1.6.0_linux_aarch64.deb
```

#### 第六步：安装 Home Assistant 监督版

```bash
wget https://github.com/home-assistant/supervised-installer/releases/download/1.6.0/homeassistant-supervised.deb
sudo dpkg -i homeassistant-supervised.deb
```

安装成功后，将出现一个蓝色屏幕，允许您选择 **Raspberry Pi4 64** 模型。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/bluescreen.png" style={{width:600}}/></div>

几分钟后，安装将开始。

然后，您可以通过网页浏览器访问 Home Assistant 仪表板 UI，地址为 `<your_recomputer_ip>:8123`。

初始启动过程需要一些时间。启动完成后，创建一个账户并按照初始设置说明进行操作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Home-Assistant/13.png" style={{width:600}}/></div>

:::note
如果通知中有警告，请重启 reComputer。
:::

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，以确保您使用我们的产品时体验顺畅。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>