---
description: 学习如何在 reComputer R1000 上设置和配置 Home Assistant
title: reComputer R1000 与 Home Assistant 
keywords:
  - Home Assistant 
  - reComputer R1000
  - Home Automation
  - Bookworm
  
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /cn/recomputer_r1000_home_automation
last_update:
  date: 08/02/2024
  author: Kasun Thushara
---

## 介绍

reComputer r1000 专为楼宇自动化系统设计，具有多个隔离的 RS485 通道，支持高速和低速通信。它兼容 BACnet、Modbus RTU 和 Modbus TCP/IP 协议，使其能够满足各种自动化需求。本指南简要介绍了如何在 reComputer r1000 上安装 Home Assistant，实现智能家居设备的无缝集成和控制。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/HA/logo.png" style={{width:400}}/></div>

[Home Assistant](https://www.home-assistant.io/) 是一个免费的开源家庭自动化软件，作为各种设备的中央控制系统或智能家居中枢。它以本地控制为设计理念，确保您的楼宇管理系统（BMS）独立于远程服务器或互联网连接运行，增强了安全性和可靠性。这意味着您的 BMS 可以 24/7 全天候运行，而不会受到与云连接设备相关的漏洞影响，提供强大而安全的自动化解决方案。

## 开始使用

在开始这个项目之前，您可能需要按照此处描述的内容提前准备硬件。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

:::note
在 HA 安装过程中，我们测试了使用无线连接。
:::

### 软件准备

reComputer 预装了 Bookworm 64 位版本。本指南涵盖了在该系统上**安装 Home Assistant Supervised** 的步骤。

## 为什么选择 Home Assistant Supervised？

有几种方法可以在您的 reComputer 上安装 Home Assistant。您可以选择完整安装 Home Assistant，或者如果您计划在操作系统上运行 Home Assistant 的同时运行其他应用程序，supervised 方法是理想的选择。另一个选项是使用 Docker，但这需要设置单独的 Docker 容器作为附加组件。本指南重点介绍 **Supervised 方法** 的更复杂安装过程。不用担心——我们将逐步指导您完成。

## Home Assistant Supervised 安装 - Bookworm

#### 步骤 1：更新并安装依赖项

```bash
sudo apt update
sudo apt-get install -y jq wget curl udisks2 apparmor-utils libglib2.0-bin network-manager dbus systemd-journal-remote systemd-resolved
```

#### 步骤 2: 启动并启用网络管理器

检查 Network Manager 的状态

```bash
sudo systemctl status NetworkManager.service
```

NetworkManager 无法启动，启动并启用

```bash
sudo systemctl start NetworkManager
sudo systemctl enable NetworkManager
```

#### 步骤 3：修改启动参数

编辑 `cmdline.txt` 文件：

```bash
sudo nano /boot/firmware/cmdline.txt
```

在行尾添加以下内容：

```bash
systemd.unified_cgroup_hierarchy=false lsm=apparmor
```

Reboot the system:

```bash
sudo reboot
```

#### 步骤 4：安装 Docker

```bash
sudo curl -fsSL get.docker.com | sh
sudo gpasswd -a $USER docker
newgrp docker
```

#### 步骤 5：安装 OS Agent

```bash
wget https://github.com/home-assistant/os-agent/releases/download/1.6.0/os-agent_1.6.0_linux_aarch64.deb
sudo dpkg -i os-agent_1.6.0_linux_aarch64.deb
```

#### 步骤 6: 安装 Home Assistant Supervised

```bash
wget https://github.com/home-assistant/supervised-installer/releases/download/1.6.0/homeassistant-supervised.deb
sudo dpkg -i homeassistant-supervised.deb
```

成功修正后，将出现蓝色屏幕，允许您选择 **Raspberry Pi4 64** 型号。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/bluescreen.png" style={{width:600}}/></div>

几分钟后，安装将开始。

然后您可以使用 `<your_recomputer_ip>:8123` 在网络浏览器上查看 Home Assistant 仪表板 UI。

完成初始启动过程需要一些时间。启动完成后，创建一个账户并按照初始设置说明进行操作

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Home-Assistant/13.png" style={{width:600}}/></div>

:::note
如果通知中有警告，请重启 reComputer。
:::

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
