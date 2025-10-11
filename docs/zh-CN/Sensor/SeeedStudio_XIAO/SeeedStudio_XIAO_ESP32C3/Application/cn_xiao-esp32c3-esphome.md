---
description: 使用 XIAO ESP32C3 访问 ESPHome
title: XIAO ESP32C3 通过 ESPHome 服务访问 Home Assistant
keywords:
- ESPHome
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao-esp32c3-esphome
last_update:
  date: 03/03/2023
  author: Citric
---

# XIAO ESP32C3 通过 ESPHome 服务访问 Home Assistant

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/78.jpg" style={{width:700, height:'auto'}}/></div>

本文将指导您在自己的 Home Assistant 环境中安装 ESPHome 服务。通过使用 XIAO ESP32C3 的 WiFi 功能，您将能够以非常流畅的方式将 XIAO 连接到 Home Assistant，作为家庭终端的一部分。

此外，我们将结合最受欢迎的 24GHz 毫米波人体静态存在模块 Lite，构建一个具有人体存在检测功能的 Home Assistant。

## 入门指南

:::tip
截至 2023 年 7 月 31 日，之前会导致雷达完全失效的问题现已修复，因此请更新本教程系列的库文件和配置器以正常工作。
:::

如果您想完整地学习本教程，您需要准备以下物品。

<table align="center">
  <tbody><tr>
      <th>XIAO ESP32C3</th>
      <th>24GHz 毫米波人体静态<br />存在模块 Lite</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/0.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

这个项目的最终目标是在Home Assistant中部署24GHz毫米波人体静态存在模块Lite。

我们已经为24GHz毫米波人体静态存在模块Lite编写了完整的配置文件和库，以便您在此项目中快速将传感器部署到Home Assistant。

本教程的内容将大致涵盖以下步骤。

1. [选择您的Home Assistant环境](#select-your-home-assistant-environment)
2. 在Home Assistant中安装和配置ESPHome
3. [配置XIAO ESP32C3和ESPHome连接](#configure-the-xiao-esp32c3-and-esphome-connection)
4. [配置Home Assistant面板](#configure-home-assistant-panel)

当然，如果您对XIAO ESP32C3如何在Home Assistant中使用Grove感兴趣，您可以直接阅读这一章节。

- [使用XIAO ESP32C3将Grove连接到Home Assistant](#connect-grove-to-home-assistant-using-xiao-esp32c3)

## 选择您的Home Assistant环境

在本例程中，我们不会详细介绍如何安装Home Assistant环境，我们假设您已经有一个正常工作的Home Assistant设备。

如果您希望学习如何安装Home Assistant，那么您可以参考[官方教程](https://www.home-assistant.io/installation/)。我们强烈建议您使用x86设备安装Home Assistant，因为这是安装带有Supervised的Home Assistant最用户友好的方式。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/77.png" /></div>

根据上表，安装**Home Assistant OS**和**Home Assistant Supervised**是最合适的，这将为您省去很多麻烦。如果您在OpenWRT的Docker上运行Home Assistant（例如使用LinkStar H68K），请不要担心，我们也会为您提供如何操作的详细参考。

我们还为Seeed Studio的一些产品编写了如何安装Home Assistant的教程，请参考它们。

- [在ODYSSEY-X86上开始使用Home Assistant](https://wiki.seeedstudio.com/cn/ODYSSEY-X86-Home-Assistant/)
- [在reTerminal上开始使用Home Assistant](https://wiki.seeedstudio.com/cn/reTerminal_Home_Assistant/)
- [在LinkStar H68K/reRouter CM4上开始使用Home Assistant](https://wiki.seeedstudio.com/cn/h68k-ha-esphome/)

## 在Home Assistant中安装ESPHome

### 步骤1. 安装ESPHome

- **场景1：在Home Assistant OS下安装ESPHome（带有Add-on Store）**

如果您安装了Home Assistant OS，它有一个Add-on Store，这使得安装ESPHome变得更加容易。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/79.png" /></div>

在Add-on Store中，您可以搜索并安装ESPHome。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/80.png" /></div>

- **场景2：在OpenWRT Docker/Docker下的Home Assistant中安装ESPHome（没有Add-on Store）**

由于我们安装的是Home Assistant Container，我们无法简单地通过Add-on Store下载ESPHome服务，因此需要一个折中的方法。

我们需要下载ESPHome镜像。

```
esphome/esphome:latest
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/17.png" /></div>

在创建容器的页面中，我们需要进行一些简单的设置。

- Container Name: 您的容器名称
- Docker Image: 选择刚刚下载的 **esphome** 镜像
- Network: 选择 **host** 模式
- Environment Variables(-e): 您的环境变量

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/18.png" /></div>

填写完上述内容后，保存并应用。您将看到容器已经创建完成。您还需要启动它。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/19.png" /></div>

为了实现与在 Home Assistant 中下载 ESPHome 相同的效果，我们需要修改 Home Assistant 下的配置文件。

进入 Home Assistant 容器。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/55.png" /></div>

我们进入 Home Assistant 中的终端。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/56.png" /></div>

在终端中输入以下命令。

```sh
vi configuration.yaml
```
将以下内容添加到 `configuration.yaml` 的末尾。

```
# Example configuration.yaml entry
panel_iframe:
  esphome:
    title: "ESPHome"
    url: "http://192.168.100.1:6052"
    icon: mdi:chip
```

通过在 Home Assistant 容器 shell 中输入 ```exit``` 来退出 docker 容器。完成后，我们重启 Home Assistant 容器。

创建一个新的浏览器页面，输入地址 `http://homeassistant:8123/` 并输入您的 Home Assistant 账户，您将看到 ESPHome 出现在左侧工具栏中。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/57.png" /></div>

## 配置 XIAO ESP32C3 和 ESPHome 连接

### 步骤 2. 硬件准备

我们教程的目标是能够在 Home Assistant 仪表板中看到 24GHz mmWave 人体静态存在模块 Lite 的数据信息。

通过主板将设备连接到计算机。接线图如下表所示。

<div class="table-center">
<table align="center">
  <tbody>
    <tr>
      <td colspan="3"><div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/esphome-pinconnect.png" /></div></td>
    </tr>
    <tr>
      <td align="center">XIAO ESP32C3</td>
      <td align="center" />
      <td align="center">24GHz mmWave 人体静态<br />存在模块 Lite</td>
    </tr>
    <tr>
      <td align="center">5V</td>
      <td align="center">--></td>
      <td align="center">5V</td>
    </tr>
    <tr>
      <td align="center">GND</td>
      <td align="center">--></td>
      <td align="center">GND</td>
    </tr>
    <tr>
      <td align="center">D2</td>
      <td align="center">--></td>
      <td align="center">RX</td>
    </tr>
    <tr>
      <td align="center">D3</td>
      <td align="center">--></td>
      <td align="center">TX</td>
    </tr>
  </tbody></table>
</div>

### 步骤 3. 保持 XIAO ESP32C3 和 Home Assistant 在同一局域网内

我确信您的 Home Assistant 已经完成了接入网络的工作，例如通过网线连接到您的设备。然后您需要做的就是简单地开启一个本地网络（例如 WiFi），以便 XIAO ESP32C3 也能连接到这个网络。

下面我将以 LinkStar H68K 为例。我的目标是让 XIAO 连接到 LinkStar H68K 的热点。

在 OpenWRT 的 **Network** 选项卡中，选择 **Wireless** --> **ADD**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/58.png" /></div>

在 **Device Configuration** 中的 **Transmit Power**，选择 **auto**。

对于 **Interface Configuration** 设置，请按照以下说明填写。

- General Setup
  - Mode：取决于 LinkStar 如何接入互联网。如果您使用有线连接，则选择 **Client**，如果您连接到 WiFi，则选择 **Access Point**。
  - ESSID：输入您的 WiFi 名称，请尽量不要包含空格或特殊字符。
  - Network：勾选 **lan**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/23.png" /></div>

- Wireless Security
  - Encryption：WPA2-PSK
  - Key：输入您希望设置的 WiFi 密码。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/24.png" /></div>

填写完上述信息后，点击右下角的 **Save and Apply**，等待片刻让 LinkStar 开启热点。

当没有设备连接到此热点时，它将显示为无信号。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/60.png" /></div>

综合考虑，让我们回到 Home Assistant 页面。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/61.png" /></div>

点击 **NEW DEVICE**。然后点击 **Continue**。

在新弹出的窗口中，请输入您希望设置的应用程序名称，以及您在 LinkStar 中设置的热点名称和密码（或您自己的 WiFi）。确保 XIAO ESP32C3 和 Home Assistant 在**同一局域网**内。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/25.png" /></div>

然后点击 **Next**。

在设备类型中，请选择 **ESP32-C3**。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/26.png" /></div>

然后点击 **Next**。

<span id="jump1">点击 <strong>Encryption key</strong> 并将其保存在安全位置，我们将在后续步骤中使用此密钥。</span>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/27.png" /></div>

然后点击 **SKIP**。

### 步骤 4. 更改 XIAO ESP32C3 配置 yaml 文件

然后，我们点击刚刚创建的设备选项卡，左下角有 **EDIT** 按钮。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/28.png" /></div>

请注意，我们需要对这个 yaml 文件进行更改。我们将要修改的内容分为两个主要部分，对应下图中的一和二。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/62.png" /></div>

- 在内容的 **①** 中，除了您已配置的设备名称外，请不要更改，其余内容请参考下面的代码。

```css
# part 1:
substitutions:
  name: "xiao-esp32c3"
  friendly_name: "XIAO ESP32C3"

esphome:
  name: "${name}"
  friendly_name: "${friendly_name}"
  name_add_mac_suffix: true
  project:
    name: "seeedstudio.mmwave_kit"
    version: "2.0"
  platformio_options:
    board_build.flash_mode: dio
    board_build.mcu: esp32c3

external_components:
  - source: github://limengdu/mmwave-kit-external-components@main
    refresh: 0s

esp32:
  board: esp32-c3-devkitm-1
  variant: esp32c3
  framework:
    type: esp-idf

# Enable logging
logger:
  hardware_uart: USB_SERIAL_JTAG
  level: DEBUG
```

- 在内容的 **②** 中，在 `captive_portal:` 后复制以下代码。

<details>

<summary>点击这里预览完整代码</summary>

```yml
# Sets up Bluetooth LE (Only on ESP32) to allow the user
# to provision wifi credentials to the device.
esp32_improv:
  authorizer: none

# Sets up the improv via serial client for Wi-Fi provisioning.
# Handy if your device has a usb port for the user to add credentials when they first get it.
# improv_serial: # Commented until improv works with usb-jtag on idf

uart:
  id: uart_bus
  baud_rate: 115200
  rx_pin: 4
  tx_pin: 5
  parity: NONE
  stop_bits: 1

seeed_mr24hpc1:
  id: my_seeed_mr24hpc1

text_sensor:
  - platform: seeed_mr24hpc1
    heart_beat:
      name: "Heartbeat"
    product_model:
      name: "Product Model"
    product_id:
      name: "Product ID"
    hardware_model:
      name: "Hardware Model"
    hardware_version:
      name: "Hardware Version"
    keep_away:
      name: "Active Reporting Of Proximity"
    motion_status:
      name: "Motion Information"
    custom_mode_end:
      name: "Custom Mode Status"

binary_sensor:
  - platform: seeed_mr24hpc1
    has_target:
      name: "Presence Information"

sensor:
  - platform: seeed_mr24hpc1
    custom_presence_of_detection:
      name: "Static Distance"
    movement_signs:
      name: "Body Movement Parameter"
    custom_motion_distance:
      name: "Motion Distance"
    custom_spatial_static_value:
      name: "Existence Energy"
    custom_spatial_motion_value:
      name: "Motion Energy"
    custom_motion_speed:
      name: "Motion Speed"
    custom_mode_num:
      name: "Current Custom Mode"

switch:
  - platform: seeed_mr24hpc1
    underlying_open_function:
      name: Underlying Open Function Info Output Switch

button:
  - platform: seeed_mr24hpc1
    restart:
      name: "Module Restart"
    custom_set_end:
      name: "End Of Custom Mode Settings"

select:
  - platform: seeed_mr24hpc1
    scene_mode:
      name: "Scene"
    unman_time:
      name: "Time For Entering No Person State (Standard Function)"
    existence_boundary:
      name: "Existence Boundary"
    motion_boundary:
      name: "Motion Boundary"

number:
  - platform: seeed_mr24hpc1
    sensitivity:
      name: "Sensitivity"
    custom_mode:
      name: "Custom Mode"
    existence_threshold:
      name: "Existence Energy Threshold"
    motion_threshold:
      name: "Motion Energy Threshold"
    motion_trigger:
      name: "Motion Trigger Time"
    motion_to_rest:
      name: "Motion To Rest Time"
    custom_unman_time:
      name: "Time For Entering No Person State (Underlying Open Function)"
```

</details>

然后，请点击右上角的 **保存** 按钮。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/63.png" /></div>

### 步骤 5. 将固件上传到 XIAO ESP32C3

- **方法 1：直接编译并上传**

如果您使用的是 x86 设备并且可以在设备端口上看到 XIAO，那么您可以编译程序并将其上传到 XIAO。

将 XIAO 连接到您的设备。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ESPHome/49.png" style={{width:700, height:'auto'}}/></div>

点击设备栏右下角的三个点，选择 **Install**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/84.png" /></div>

点击 **Plug into the computer running ESPHome Dashboard**。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/85.png" /></div>

选择已连接的端口。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ESPHome/18.png" /></div>

现在它将下载所有必要的开发板包并将 ESPHome 固件刷入 XIAO ESP32C3。如果刷写成功，您将看到以下输出。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/ESPHome/19.png" /></div>

如果在将 XIAO 连接到设备后无法找到端口，那么您可以尝试使用第二种方法。

- **方法 2：使用主机上传编译的固件**

像 LinkStar H68K 这样的软路由不支持识别外部 MCU 设备，我们需要先下载编译好的固件，然后通过另一台 PC 上传固件。

点击右上角的 **Install** 按钮。然后选择最后一项 **Manual download**。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/30.png" /></div>

选择 **Modern format**。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/31.png" /></div>

然后需要很长时间来下载和编译，请耐心等待。一切准备就绪后，固件将自动下载到您的计算机。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/33.png" /></div>

要将固件上传到 XIAO ESP32C3，这里有几个选项，我们展示 2 种方法：

- 选项 1：使用 [ESPhome Web 工具](https://web.esphome.io/?dashboard_install) 上传。

确保您已安装正确的驱动程序。以下是 ESP 设备中常用芯片的驱动程序。

1. CP2102 驱动程序：[Windows & Mac](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)

2. CH342、CH343、CH9102 驱动程序：[Windows](https://www.wch.cn/downloads/CH343SER_ZIP.html)，[Mac](https://www.wch.cn/downloads/CH34XSER_MAC_ZIP.html)

3. CH340、CH341 驱动程序：[Windows](https://www.wch.cn/downloads/CH341SER_ZIP.html)，[Mac](https://www.wch.cn/downloads/CH341SER_MAC_ZIP.html)

使用 Chrome 或 Edge 网络浏览器打开 [ESPhome Web 工具](https://web.esphome.io/?dashboard_install)。

点击 **CONNECT**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/34.png" /></div>

在弹出窗口中选择 XIAO ESP32 串口。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/64.png" /></div>

点击 **INSTALL**，然后选择从上述步骤下载的 `.bin` 文件。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/35.png" /></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/38.png" /></div>

- 选项 2：使用 [esphome-flasher 工具](https://github.com/esphome/esphome-flasher)。

如果在安装驱动程序和更换浏览器后仍无法使用方法一上传固件，那么您可以尝试使用方法二。具体的安装方法和说明请参考官方教程。

:::tip
如果您希望观察 XIAO ESP32C3 的日志消息，您也可以通过此软件的 View Logs 按钮查看。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/41.png" /></div>
:::

上传完成后，您可以将 XIAO ESP32C3 从 PC 断开连接（除非您需要查看日志），只需单独为 XIAO 供电即可。

如果一切顺利，XIAO ESP32C3 将搜索并连接到您为其设置的 WiFi。

就像我一样，我使用 LinkStar H68K 的网络。您可以在网络选项中找到它，并查看 LinkStar H68K 分配给它的 IP 地址。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/42.png" /></div>

通常，此时在 Home Assistant 中，设备的状态也会从离线变为在线。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/65.png" /></div>

## 配置 Home Assistant 面板

### 步骤 6. 连接到 XIAO ESP32C3

如果您的局域网上没有太多 Home Assistant 设备，Home Assistant 可以自动搜索并将您的 ESP 设备添加到设备选项卡中。您可以在**设置**中的**设备和服务**选项卡内看到此设备。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/66.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/67.png" /></div>

如果它没有自动搜索，您也可以基于 XIAO ESP32C3 的 IP 地址连接到它。

点击**添加集成**并搜索 **esphome**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/43.png" /></div>

然后输入 XIAO ESP32C3 的 IP 地址和端口号 **6053**。然后点击**提交**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/44.png" /></div>

如果输入的 IP 地址和端口号正确，那么您将看到系统要求您输入加密密钥，这是我们在步骤 4 中要求保存的密钥。

然后点击**提交**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/68.png" /></div>

至此，添加设备的步骤已成功完成。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/51.png" /></div>

### 步骤 7. 24GHz 毫米波模块 Lite 功能概述

为了帮助您快速了解套件的全部功能和这些功能的使用方法，您需要仔细阅读本节。如果您想要更详细的信息，我们建议您花时间阅读[产品用户手册](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V1.5.pdf)。

关于仪表板的配置和参数详情，我们在 ESPHome 文档中编写了详细的说明，请移步阅读完整的说明和详细信息。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://deploy-preview-3383--esphome.netlify.app/components/sensor/seeed_mr24hpc1" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>ESPHome 文档 📕</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/49.png" style={{width:700, height:'auto'}}/></div>

### 步骤 8. 配置 Home Assistant 面板

如果您觉得默认卡片非常无聊且不利于数据展示，Home Assistant 提供了各种现成的仪表板供您选择。

您可以根据自己的喜好制作自己的仪表板。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/73.png" /></div>

例如，将控制信息输出的选项变成一个漂亮的开关。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/74.png" /></div>

将人体移动速度转换为可视化仪表板显示。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/75.png" /></div>

这是我设计的效果。看起来很有智能家居控制中心的样子。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/76.png" /></div>

到此为止，我们已经成功完成了我们的教程内容。

## 使用 XIAO ESP32C3 将 Grove 连接到 Home Assistant

当然，XIAO ESP32C3 不仅仅支持在 Home Assistant 中使用 24GHz mmWave 人体静态存在检测模块 Lite，您可以在本文档中找到更多教程供您自己使用。

- [使用 XIAO ESP32C3 将 Grove 连接到 Home Assistant](https://wiki.seeedstudio.com/cn/Connect-Grove-to-Home-Assistant-ESPHome/)

发挥您的创造力！

## 故障排除

### 常见问题1：使用 ESPhome Web 工具上传固件时出现以下错误，如何解决？

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/37.png" /></div>

> 答：如果在上传时出现此提示，请断开 XIAO ESP32C3 与 PC 的连接。然后，按住 BOOT 按钮，在按住 BOOT 按钮的同时将开发板连接到 PC，然后松开按钮进入引导加载程序模式。此时重新连接并再次上传固件即可。

### 常见问题2：按照 esphome flasher 教程在 Linux 下无法安装 esphome flasher？

> 答：执行以下命令时，您需要选择您的系统版本，否则会出现错误。例如，我的计算机是 Ubuntu 22.04，那么应该执行的命令如下。

```
sudo apt install python3

pip3 install -U \
    -f https://extras.wxpython.org/wxPython4/extras/linux/gtk3/ubuntu-22.04/ \
    wxPython

pip3 install esphomeflasher
```

### FAQ3: 我填写了正确的WiFi和密码，为什么看不到XIAO ESP32C3的IP地址？

> A: 当您遇到这个问题时，请检查XIAO ESP32C3的天线是否连接到位。如果天线已经连接，请确保XIAO与LinkStar的距离不超过3米（除非您已经更换了更强大的天线）。
如果您仍然看不到XIAO，您可以使用[esphome flasher](https://github.com/esphome/esphome-flasher)软件检查XIAO的日志信息，并通过日志检查XIAO的连接情况。
您可以重新插拔xiao，让它尝试重新搜索WiFi并连接。

<!-- ### FAQ4: 我的XIAO ESP32C3已连接到网络，但为什么看不到传感器数据刷新？

:::caution
截至2023年6月1日的故障排除显示，如果您在ESPHome的仪表板中设置任何值或更改任何场景，雷达有可能会停止工作。

截至2023年7月31日，之前会导致雷达完全失效的问题现在已经修复，因此请更新本教程的库文件和配置器以使其正常工作。
:::

> A: 在之前的Wiki内容中，我们使用默认的UART引脚（D6、D7）来接收和发送雷达数据，但许多用户反馈需要重新给雷达供电才能工作。为此，我们**更新了Wiki**内容和程序，将雷达的串口替换为**D2和D3**，经过测试，这很好地解决了问题。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/esphome-pinconnect.png" style={{width:600, height:'auto'}}/></div>

> **如果您没有注意到Wiki更新，我建议您重新连接雷达线路，并按照本文教程的[步骤2和5](#configure-the-xiao-esp32c3-and-esphome-connection)重新执行编译和上传过程。**

> 然而，一些用户反映即使更换了串口引脚，仍然无法让雷达正常工作。因此，我们在这里提出以下方法和步骤来检查问题出现在哪里，如果您仍然无法解决雷达工作问题，**请将您的操作步骤提供给技术支持邮箱**，这可以加快售后问题的处理。

**请按顺序检查以下排除项。**

> **排除项1：确保XIAO ESP32C3与部署ESPHome的设备在同一局域网下。**

> 如果XIAO ESP32C3与ESPHome设备不在同一局域网下，您在Home Assistant中看到的日志是不完整的，无法作为数据收集的依据。因此请仔细检查您的路由器，看看XIAO的IP地址是否出现。

> **排除项2：检查数据实时传输按钮是否开启。**

> XIAO联网并成功添加设备后，您将能够在仪表板中看到雷达组件。请注意，默认情况下实时数据传输按钮是关闭的，您需要将其打开才能看到雷达数据的持续报告。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/69.png" /></div>

> **排除项3：检查雷达是否能正常工作。**

> 我们需要首先确保雷达与XIAO ESP32C3配合良好，这将让我们快速识别是ESPHome的问题还是产品问题。请在Arduino IDE中将以下代码上传到XIAO ESP32C3，请注意**雷达的RX/TX引脚应连接到XIAO的D2/D3**。

```cpp
#include "Arduino.h"
#include <humanstaticLite.h>
#include <HardwareSerial.h>

// can also try hardware serial with
HumanStaticLite radar = HumanStaticLite(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200, SERIAL_8N1, 4, 5);
  while(!Serial);   //When the serial port is opened, the program starts to execute.
  Serial.println("Ready");
}

void loop() {
  // put your main code here, to run repeatedly:
  radar.recvRadarBytes();           //Receive radar data and start processing
  radar.showData();                 //Serial port prints a set of received data frames
  delay(200);                       //Add time delay to avoid program jam
}
```

> 打开串口监视器并将波特率设置为115200，如果雷达正常工作，您应该看到大量数字被打印出来。

> 如果您在执行此步骤时没有看到任何数据输出，请根据Wiki重新刷写雷达固件。我们为您提供两种更新固件的方法：[固件版本更新](https://wiki.seeedstudio.com/cn/Radar_MR24HPC1/#firmware-version-updates)。

> 如果更新固件后仍然没有任何反应，请不要犹豫，直接联系我们的技术支持团队。并告知他们您已经完成的所有操作。

> **排除4：XIAO和雷达在上述检查点正常工作，但更换串口引脚后，仍然无法获取雷达实时数据。**

> 如果您已经将雷达的RX和TX引脚更换为D2/D3，并且也根据上述内容仔细排查，但仍然无法获取实时数据消息，请联系我们的技术支持团队。在此之前，**请告诉我们雷达在Arduino环境中是否正常工作**，以便我们分析和处理问题。-->

<!-- > 答：当我们遇到这个问题时，我们需要使用日志来了解传感器不返回数据的确切原因。目前发现可能遇到的情况是传感器无响应的情况，那么它的日志会是这样的。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/71.png" /></div>

> 如果您看到类似的日志，请仔细检查以下三个地方。
> 1. 传感器是否使用5V供电。
> 2. 传感器的RX和TX引脚是否连接正确。
> 3. 仅断开传感器到XIAO的5V线并重新连接，让传感器重新上电。

> 一般来说，第三点解决了这个问题。正常的数据传输日志流应该是这样的。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/72.png" /></div> -->

### FAQ4: 我使用Jlink刷写固件，但出现错误"Programming of range @address 0x08000000 failed (block verification error) Program failed Failed to program and verify target"？

当您使用Jlink刷写固件并出现此错误时，您可能处于以下任一情况中。

1. 您的传感器完全无法正常工作，您无法从中接收任何消息。
2. 您正在尝试使用无效或错误的固件。

:::caution
如果您的雷达原本工作正常，请再次检查您使用的固件是否正确！使用的固件因雷达而异，因传感器型号而异！并且通过UART升级固件与通过Jlink升级固件是不同的！请停止执行以下步骤。
:::

<details>

<summary><strong>我已确认我的产品在异常情况下出现此错误消息</strong></summary>

如果您的雷达完全无法工作，那么出现此错误消息可能是正常的。

因为雷达的异常运行已经触发了雷达的读/写保护机制，一般不再允许用户对产品进行刷写程序，所以我们需要解锁雷达的读/写保护机制。

由于解除读写保护的风险很高，我们不会在此处单独向公众公开解除读写保护的方法，我们将把该方法放在[此处的zip文件](https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/ArteryICPProgrammer_V2.4.23.zip)中供需要的人使用。一旦异常雷达被解除保护，就可以再次更新固件以恢复正常运行。

</details>

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
