---
description: Frigate 与 reTerminal DM 集成
title: Frigate 与 reTerminal DM 集成
keywords:
  - reTerminal Dm
  - Getting started
  - Frigate
  - Home assistant
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/reterminal-DM-Frigate
last_update:
  date: 8/25/2023
  author: Kasun Thushara
---

## 介绍

在当前智能技术无缝融入我们日常生活的时代，对智能和安全家庭自动化的需求比以往任何时候都更加强烈。想象一个场景，您的家不仅满足您的需求，还能及时检测并提醒您后院的可疑活动。这就是先进硬件和开源软件结合发挥核心作用的地方。在本文中，我们将探索 Seeed Studio reTerminalDM、Home Assistant OS 和 Frigate 插件与 Coral AI USB TPU 之间的协同作用。这个三重组合为集中化、注重隐私和 AI 驱动的家庭自动化设置提供了独特的机会，在确保安全的同时提升您的生活方式。加入我们，深入了解这种融合在现代智能生活前沿的优势和无限潜力。

### Frigate

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate2.png" alt="pir" width="200" height="auto"/></p>

Frigate 是一个出色的开源网络视频录像机（NVR），专为实时 AI 驱动的物体检测而定制。Frigate 的独特之处在于其本地化处理，确保所有计算都在您的个人硬件上进行。这种方法保证了最高的隐私性，因为您的摄像头数据流永远不会传输到您家庭边界之外。通过 Frigate，您获得了一个强大的工具，使您能够通过先进的物体识别技术增强安全性和监控，同时保持对数据的完全控制。

### Home assistant

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/HA.png" alt="pir" width="200" height="auto"/></p>

Home Assistant OS 是专门为运行 Home Assistant 而设计的操作系统，Home Assistant 是一个开源家庭自动化平台。Home Assistant 允许您控制和自动化家中的各种智能设备和服务。
Home Assistant OS 为运行 Home Assistant 提供了一个精简和优化的环境。它预装了设置和管理智能家居设备、与不同协议和平台集成以及创建自动化例程所需的组件。

## 入门指南

在开始这个项目之前，您可能需要按照此处描述的方式提前准备硬件和软件。您还需要支持此项目的 IP 摄像头。您可以从 Frigate [官方网站](https://docs.frigate.video/frigate/hardware)查看这些支持的摄像头。

### 硬件准备

<div class="table-center">
  <table align="center">
    <tr>
        <th>reTerminal DM</th>
        <th>Coral USB Accelerator</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/HA/reterminal-dm.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/coral.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html?queryID=26220f25bcce77bc420c9c03059787c0&objectID=4904&indexName=bazaar_retailer_products" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Coral-USB-Accelerator-p-2899.html?queryID=852f9c8543fee2db0ee8b47f6d5dbda2&objectID=2899&indexName=bazaar_retailer_products" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

:::note

考虑到 USB Coral 加速器的功耗要求，我们强烈建议投资一个高质量的 USB 供电集线器。该集线器将提供足够的电力来满足 Coral 加速器的需求，确保稳定和最佳的性能。

:::

### 软件准备

我们建议从官方网站安装最新版本的 Raspberry Pi 64 位操作系统。如果您更喜欢安装新的 Raspbian 操作系统，请按照此[指南](https://wiki.seeedstudio.com/cn/reterminal-dm-flash-OS/)中概述的步骤进行操作。

## 在 Raspberry Pi 上安装 Home Assistant Supervised 操作系统

在基于 Raspberry Pi CM4 的 reTerminal DM 上安装 Home Assistant Supervised 是一个综合过程，它结合了几个关键步骤以确保成功设置。

:::note
在某些步骤中，如果您通过 Wi-Fi 连接，可能会失去连接。建议改用 LAN 连接。
:::

### 步骤 1：增强您的系统

- **首先通过使用以下命令执行系统更新日志：**

```sh
sudo apt update
```

- **接下来，继续安装以下依赖项：**

```sh
sudo apt-get install \
apparmor \
jq \
wget \
curl \
udisks2 \
libglib2.0-bin \
network-manager \
dbus \
systemd-journal-remote -y
```

- **Fix broken installations**

```sh
sudo apt --fix-broken install
```

- **Restart reTerminal**

```sh
sudo reboot
```

### 步骤 2：集成 Docker

安装 Docker 是关键的。避免安装 Portainer 非常重要，因为它可能会对整个安装过程产生负面影响。执行以下命令：

```sh
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
```

- **将 Docker 用户添加到系统中**

```sh
sudo usermod -aG docker pi
```

- **检查 Docker 是否正常工作**

```sh
docker --version
```

### 步骤 3：解决 CGroup 版本问题

- **Home Assistant Supervisor 的兼容性依赖于特定的 Docker CGroup v1。为了确保这种兼容性，需要进行以下更改：**

```sh
sudo nano /etc/default/grub
```

- **添加此行并保存。**

```sh
systemd.unified_cgroup_hierarchy=false
```

- **Open this file**

```sh
sudo nano /boot/cmdline.txt
```

- **在短语末尾添加此行并保存。**

```sh

systemd.unified_cgroup_hierarchy=false apparmor=1 security=apparmor
```

### 步骤 4：安装 OS-Agent（版本 1.3）

根据您的 CPU 架构下载合适的 OS-Agent，然后进行安装：**对于树莓派 64 位操作系统，应选择 linux aarch64**。

```sh
wget https://github.com/home-assistant/os-agent/releases/download/1.3.0/os-agent_1.3.0_linux_aarch64.deb
```

- **安装 Home Asssitant OS 代理**

```sh
sudo dpkg -i os-agent_1.3.0_linux_aarch64.deb
```

- **通过运行以下命令确保安装成功**

```sh
gdbus introspect --system --dest io.hass.os --object-path /io/hass/os
```

### 步骤 5：获取Home Assistant监督

- **下载最新的 Home Assistant Supervised 包：**

```sh
wget https://github.com/home-assistant/supervised-installer/releases/download/1.3.0/homeassistant-supervised.deb
```

### 步骤 6：Home Assistant Supervised 安装

重要提示：此步骤需要 LAN 连接，因为在此过程中 Wi-Fi 可能会中断：

```sh
sudo dpkg -i homeassistant-supervised.deb
```

### 步骤 7：解决安装错误

如果出现安装错误，请运行以下命令进行修复：

```sh
sudo apt --fix-broken install
```

成功修正后，将出现蓝色屏幕，允许您选择 **Raspberry Pi4 64** 型号。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/bluescreen.png" /></center>

### 步骤 8：完成安装和 Wi-Fi 设置

等待几分钟让 Home Assistant 在 http://[your_raspberry_IP]:8123 变为可访问状态。
:::note

如果重启后遇到 Wi-Fi 连接问题，请按照以下步骤操作

:::

- 要启用 'dhcpcd'，执行以下命令：

```sh
sudo systemctl enable dhcpcd
```

- 使用以下命令禁用网络服务：

```sh
sudo systemctl disable networking
```

- 重启树莓派以应用更改：

```sh
sudo reboot
```

:::note

要解决"网络管理器问题"（在设置中查找），您可以通过启动并随后启用网络管理器来纠正这种情况。使用以下命令来完成此操作：

:::

```sh
sudo systemctl enable NetworkManager
```

## 安装 MQTT 代理

- 导航到设置 > 插件 > 点击 MQTT 代理。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/mqqt.png" /></center>

- 按下安装，安装完成后启用开机启动

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate1.PNG" /></center>

- 导航到设置 > 设备和服务 > 配置 MQTT 代理。

## 安装 Frigate（完全访问）

### 步骤 1：克隆仓库

- 导航到设置 > 插件 > 插件商店 > 菜单 > 仓库

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/step1.png" /></center>

- 添加仓库 URL：https://github.com/blakeblackshear/frigate-hass-addons。然后您可以在插件商店中看到 Frigate 插件。

### 步骤 2：安装完全访问 Frigate NVR 插件

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate3.PNG" /></center>

### 步骤 3：创建 frigate.yml

- 要继续此步骤，您需要一个文件编辑器。访问位于文件编辑器左上角的"浏览文件系统"选项。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/fileeditor1.png" /></center>

- 创建一个名为 frigate.yml 的新文件

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/fileeditor2.png" /></center>

- 接下来，您可以使用以下代码片段来评估是否能够成功从您的 IP 摄像头检索 RTSP 视频流。复制提供的代码并将其粘贴到您的 `frigate.yml` 文件中。强烈建议遵循 [Frigate 官方网站](https://docs.frigate.video/guides/getting_started) 上提供的指南以获得全面的说明。记住用您的特定摄像头名称、分辨率和摄像头流 IP 替换占位符。这种自定义将确保与您的摄像头设置准确集成。

```sh
mqtt:
  enabled: False
  

cameras:
  RPIcam: # <------ Name the camera
    ffmpeg:
      inputs:
        - path: rtsp://192.168.8.151:8554/stream # <----- The stream you want to use for detection
          roles:
            - detect
    detect:
      enabled: False # <---- disable detection until you have a working camera feed
      width: 1280 # <---- update for your camera's resolution
      height: 720 # <---- update for your camera's resolution
      fps: 5
```

### 步骤 4：启动 frigate

- 在启动 Frigate 之前，请确保保护模式已禁用。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate4.PNG" /></center>

- 一旦启动 Frigate，密切监控日志以发现可能出现的任何潜在问题是很重要的。如果没有出现问题，请继续点击位于侧边栏中的 Frigate 图标。此操作将授予您访问 Frigate 界面和功能的权限。

### 步骤 5：检查流

如果所有内容都正常工作，您将获得流。
<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate5.png" /></center>

### 步骤 6：启用对象检测

要实现这一点，Coral USB 加速器 Edge TPU 是必不可少的。虽然您可以直接将其插入 USB 端口，但由于其较高的功耗要求，可能会出现无法按预期工作的情况。因此，我们强烈建议使用可靠的 USB 供电集线器。这将确保稳定的电源供应和 Coral USB 加速器的最佳性能，增强其兼容性和有效性。

- 使用以下源代码更改 frigate.yml 文件

```sh
mqtt:
  enabled: False
  
detectors: # <---- add detectors
  coral:
    type: edgetpu
    device: usb

cameras:
  RPIcam: # <------ Name the camera
    ffmpeg:
      input_args: preset-rtsp-udp
      inputs:
        - path: rtsp://192.168.8.151:8554/stream # <----- The stream you want to use for detection
          roles:
            - detect
    detect:
      enabled: True # <---- disable detection until you have a working camera feed
      width: 1280 # <---- update for your camera's resolution
      height: 720 # <---- update for your camera's resolution
      fps: 5
```

- 重启 Frigate 插件。然后点击侧边栏上的 Frigate 图标。接下来点击流媒体，您将看到流媒体的完整视图。默认情况下，您可以检测人员并绘制边界框。

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/ui.jpeg" /></center>

<center><img width={1000} src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/frigate_debug.jpg" /></center>

这里是演示

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/HA/reterminalDM.gif" /></center>

您可以检测许多不同的对象，并向您的手机发送通知。为此，您需要更改 frigate.yml。因此我们强烈建议您快速浏览以下指南。

## 资源

- **[网页]** [Frigate 官方文档](https://docs.frigate.video/)

- **[网页]** [Home Assistant 论坛](https://community.home-assistant.io/)

## 技术支持

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
