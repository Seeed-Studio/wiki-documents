---
description: 围绕 Home Assistant 构建智能家居控制中心
title: 围绕 Home Assistant 构建智能家居控制中心
keywords:
  - LinkStar
  - 入门指南
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/h68k-ha-esphome
last_update:
  date: 2/1/2023
  author: jianjing Huang
---

<p><meta name="google-site-verification" content="2bq3L0F_PFVokQM-qT-al7x9FcSNJOO8TtJfAHW43lE" /></p>

# 围绕 Home Assistant 构建智能家居控制中心

在本文中，我们将详细介绍如何在 Seeed Studio 的新产品 LinkStar H68K 上设置 Home Assistant 并部署 ESPHome 环境。ESPHome 是 Home Assistant 中非常常见的服务。由于软路由的系统限制，我们将以 ESPHome 为例，指导您通过一种巧妙的方法安装此服务。

## 入门指南

如果您希望完整地按照本教程进行操作，您需要准备以下内容。

<table align="center">
 <tr>
     <th>带 Wi-Fi 6 的 LinkStar H68K</th>
      <th>reRouter CM4 1432（可选）</th>
      <th>XIAO ESP32C3</th>
 </tr>
  <tr>
      <td><div align="center"><img width ={210} src="https://files.seeedstudio.com/wiki/LinkStar/OVerview.jpg"/></div></td>
      <td><div align="center"><img width ={210} src="https://files.seeedstudio.com/wiki/Mini_Router/mini_router_overview.png"/></div></td>
      <td><div align="center"><img width ={100} src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png"/></div></td>
  </tr>
 <tr>
      <td align = "center"><a href="https://www.seeedstudio.com/LinkStar-H68K-1432-p-5501.html">立即购买</a></td>
      <td align = "center"><a href="https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM4-Case-p-5029.html">立即购买</a></td>
      <td align = "center"><a href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html">立即购买</a></td>
 </tr>
</table>

*reRouter CM4 1432 也兼容本教程。您可以选择购买 LinkStar 或 reRouter。

本项目的目标是使用 LinkStar 的 Docker 服务安装 Home Assistant 和 ESPHome，然后配置 LinkStar 热点，通过 XIAO ESP32C3 的 WiFi 功能连接到 LinkStar，完成网络搭建。

结合广泛的 Grove 生态系统，您可以在 Home Assistant 中实现更多可能性。

本教程内容将大致涵盖以下步骤：

1. [在 LinkStar OpenWRT 中配置 Docker 环境](#configure-home-assistant-panel)
2. [安装和配置 Home Assistant 和 ESPHome](#installation-and-configuration-of-home-assistant-esphome)
3. [将 Seeed Studio XIAO ESP32C3 添加到 ESPHome](#add-seeed-studio-xiao-esp32c3-to-esphome)
4. [使用 ESPHome 和 Home Assistant 的 Grove 模块](#grove-modules-with-esphome-and-home-assistant)

## 在 LinkStar OpenWRT 中配置 Docker 环境

### 第一步：为 LinkStar 安装 OpenWRT

我们已经在 LinkStar Wiki 中详细介绍了如何为 LinkStar 安装各种系统。在本教程中，我们将以 OpenWRT 系统为例，解释如何安装 Home Assistant 容器，同时确保 LinkStar 充当软路由。

- [将 OpenWRT 刷入 TF 卡](https://wiki.seeedstudio.com/cn/linkstar-install-system/#flash-openwrt-to-the-tf-card)
- [将 OpenWRT 刷入 eMMC](https://wiki.seeedstudio.com/cn/linkstar-install-system/#flash-openwrt-to-emmc)

请根据您的需求选择上述系统安装位置，为 LinkStar 安装 OpenWRT。

### 第二步：配置 LinkStar 网络

请通过网线连接到 LinkStar，并在浏览器中输入 IP 地址：`192.168.100.1` 以访问 OpenWRT 的操作后台。

初始账号密码为：

```
账号: root
密码: password
```

接下来，我们需要让 LinkStar 连接到互联网。

您需要购买带无线网络功能的 LinkStar，因此您可以选择通过网线连接到 LinkStar 或连接 WiFi。

- 如果是有线网络，请根据您的网络运营商的说明配置网络。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/53.png"/></div>

- 如果您想使用无线局域网，可以在 **无线** 选项中搜索网络。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/54.png"/></div>

之后，只需输入您的网络密码，点击 **保存并应用**。

在继续下一步之前，请确保您的网络状态良好。

### 第三步：为 Docker 分配更多空间

默认情况下，Docker 的大小只有约 250MB，这不足以安装镜像，因此我们首先需要为 Docker 扩展容量。

点击 **系统** --> **磁盘管理** --> **编辑**。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/1.png"/></div>

在最后一行的 END SECTOR 列中写入要添加的存储空间大小。在我的例子中是 `+20G`。然后点击 **新建** 按钮。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/2.png"/></div>

选择 **ext4** 格式，然后点击 **格式化** 按钮。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/3.png"/></div>

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/4.png"/></div>

完成后，您会看到新增了 20GB 的空间。然而，目前它是空闲空间，您需要将其挂载到 Docker。

然后选择 **系统** --> **挂载点**，找到 **挂载点** 部分，点击 **添加** 按钮。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/5.png"/></div>

选择您刚刚创建的新空间。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/6.png"/></div>

选择挂载点 **用作 Docker 数据 (/opt)**。不要忘记勾选 **启用此挂载** 复选框，然后点击 **保存并应用** 按钮。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/7.png"/></div>

所有扩展设置完成后，只需重启即可生效。

选择 **System** --> **Reboot**，点击 **PERFORM REBOOT** 按钮。等待 OpenWRT 重启并重新登录。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/8.png"/></div>

## 安装和配置 Home Assistant 和 ESPHome

### 第4步：使用 Docker 安装 Home Assistant

在 OpenWRT 中安装 Home Assistant 的更好方式是通过 Docker，这不仅能确保 LinkStar 作为软路由的稳定性，还能部署 Home Assistant。

接下来我们需要做的就是拉取特定的 Home Assistant 镜像。这个镜像将帮助我们后续安装 ESPHome 服务。

```
homeassistant/qemuarm-64-homeassistant:latest
```

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/12.png"/></div>

我们使用下载的镜像来创建一个容器。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/11.png"/></div>

在创建容器的页面上，我们需要进行一些简单的设置。

- 容器名称：你的容器名称
- Docker 镜像：选择刚刚下载的 **qemuarm-64-homeassistant** 镜像
- 网络：选择 **host** 模式
- 环境变量(-e)：你的环境变量

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/13.png"/></div>

填写完上述内容后，保存并应用。你会看到容器已经创建完成。接下来我们启动它。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/14.png"/></div>

### 第5步：使用 Docker 安装 ESPHome

由于我们正在安装 Home Assistant 容器，因此无法通过附加组件商店直接下载 ESPHome 服务，所以需要采取折中的方法。

重复上述步骤，我们下载 ESPHome 镜像。

```
esphome/esphome:latest
```

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/17.png"/></div>

在创建容器的页面上，我们需要进行一些简单的设置。

- 容器名称：你的容器名称
- Docker 镜像：选择刚刚下载的 **esphome** 镜像
- 网络：选择 **host** 模式
- 环境变量(-e)：你的环境变量

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/18.png"/></div>

填写完上述内容后，保存并应用。你会看到容器已经创建完成。你还需要启动它。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/19.png"/></div>

### 第6步：将 ESPHome 服务添加到 Home Assistant

为了实现与在 Home Assistant 中下载 ESPHome 相同的效果，我们需要修改 Home Assistant 下的配置文件。

进入 Home Assistant 容器。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/55.png"/></div>

进入 Home Assistant 的终端。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/56.png"/></div>

在终端中输入以下命令。

```sh
vi configuration.yaml
```

在 `configuration.yaml` 文件末尾添加以下内容。

```
# 示例 configuration.yaml 配置
panel_iframe:
  esphome:
    title: "ESPHome"
    url: "http://192.168.100.1:6052"
    icon: mdi:chip
```

在 Home Assistant 容器的 shell 中输入 ```exit``` 退出 Docker 容器。完成后，重启 Home Assistant 容器。

打开一个新的浏览器页面，输入 IP 地址 `192.168.100.1:8123` 并注册你的 Home Assistant 账户，你会看到 ESPHome 出现在左侧工具栏中。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/57.png"/></div>

## 将 Seeed Studio XIAO ESP32C3 添加到 ESPHome

- **步骤 1.** 点击 **+ NEW DEVICE**

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/8.png"/></div>

- **步骤 2.** 点击 **CONTINUE**

<div align="center"><img width ={350} src="https://files.seeedstudio.com/wiki/ESPHome/9.png"/></div>

- **步骤 3.** 输入设备的**名称**，并输入 WiFi 凭据，例如**网络名称**和**密码**。然后点击 **NEXT**

<div align="center"><img width ={350} src="https://files.seeedstudio.com/wiki/ESPHome/10.png"/></div>

- **步骤 4.** 选择 **ESP32-C3** 并点击

<div align="center"><img width ={350} src="https://files.seeedstudio.com/wiki/ESPHome/11.png"/></div>

- **步骤 5.** 点击 **SKIP**，因为我们将手动配置此开发板

<div align="center"><img width ={350} src="https://files.seeedstudio.com/wiki/ESPHome/12.png"/></div>

- **步骤 6.** 点击新创建的开发板下的 **EDIT**

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/ESPHome/13.png"/></div>

- **步骤 7.** 这将打开一个 **YAML** 文件，此文件将用于设置所有开发板配置。将 **esp32** 下的内容编辑如下：

```sh
esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    version: 2.0.5
    platform_version: 5.2.0
```

**注意：** 这里我们使用了最新版本的 [Arduino core for ESP32](https://github.com/espressif/arduino-esp32/releases) 和 [ESP32 support for PlatformIO](https://github.com/platformio/platform-espressif32/releases)

<div align="center"><img width ={350} src="https://files.seeedstudio.com/wiki/ESPHome/14.png"/></div>

- **步骤 8.** 然后，请点击右上角的 **Save** 按钮。

LinkStar H68K 不支持识别外部 MCU 设备，因此我们需要先下载已编译的固件，然后通过另一台电脑上传固件。

- **步骤 9.** 点击右上角的 **Install** 按钮。然后选择最后一项 **Manual download**。

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/30.png"/></div>

- **步骤 10.** 选择 **Modern format**。

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/31.png"/></div>

接下来将需要较长时间下载和编译，请耐心等待。一旦完成，固件将自动下载到您的电脑。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/33.png"/></div>

- **步骤 11.** 要将固件上传到 XIAO ESP32C3，有以下两种方法：

  - 方法 1：使用 [ESPhome Web 工具](https://web.esphome.io/?dashboard_install) 上传。

确保您已安装正确的驱动程序。以下是 ESP 设备常用芯片的驱动程序：

1. CP2102 驱动程序：[Windows & Mac](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)
2. CH342、CH343、CH9102 驱动程序：[Windows](https://www.wch.cn/downloads/CH343SER_ZIP.html)，[Mac](https://www.wch.cn/downloads/CH34XSER_MAC_ZIP.html)
3. CH340、CH341 驱动程序：[Windows](https://www.wch.cn/downloads/CH341SER_ZIP.html)，[Mac](https://www.wch.cn/downloads/CH341SER_MAC_ZIP.html)

使用 Chrome 或 Edge 浏览器打开 [ESPhome Web 工具](https://web.esphome.io/?dashboard_install)。

点击 **CONNECT**。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/34.png"/></div>

在弹出窗口中选择 XIAO ESP32 的串口。

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/64.png"/></div>

点击 **INSTALL**，然后选择从上述步骤下载的 `.bin` 文件。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/35.png"/></div>

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/38.png"/></div>

  - 方法 2：使用 [esphome-flasher 工具](https://github.com/esphome/esphome-flasher)。

如果在安装驱动程序并更换浏览器后仍无法使用方法一上传固件，则可以尝试使用方法二。具体安装方法和说明请参考官方教程。

:::tip
如果您希望查看 XIAO ESP32C3 的日志信息，也可以通过此软件的 View Logs 按钮查看。
<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/41.png"/></div>
:::

上传完成后，您可以断开 XIAO ESP32C3 与电脑的连接（除非您需要查看日志），并单独为 XIAO 供电。

如果一切正常，XIAO ESP32C3 将搜索并连接到您为其设置的 WiFi。

例如，我使用的是 LinkStar H68K 的网络。您可以在网络选项中找到它，并查看 LinkStar H68K 为其分配的 IP 地址。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/42.png"/></div>

- **步骤 12.** 如果您看到开发板状态为 **ONLINE**，则表示开发板已成功连接到 WiFi。

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/ESPHome/21.png"/></div>

- **步骤 13.** 连接到 XIAO ESP32C3

如果您的局域网中没有太多 Home Assistant 设备，Home Assistant 可以自动搜索并将您的 ESP 设备添加到设备选项卡中。您可以在 **Settings** 的 **Devices & Services** 选项卡中看到此设备。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/66.png"/></div>

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/67.png"/></div>

如果未能自动搜索，您也可以根据其 IP 地址连接到 XIAO ESP32C3。

点击 **ADD INTEGRATION** 并搜索 **esphome**。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/43.png"/></div>

然后输入 XIAO ESP32C3 的 IP 地址以及端口号 **6053**。接着点击 **SUBMIT**。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/44.png"/></div>

如果输入的 IP 地址和端口号正确，那么系统会提示您输入加密密钥，该密钥之前已保存到 yaml 文件中。

然后点击 **SUBMIT**。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/68.png"/></div>

至此，添加设备的步骤已成功完成。

## 使用 ESPHome 和 Home Assistant 的 Grove 模块

现在我们将 Grove 模块连接到 Seeed Studio XIAO ESP32C3，以便通过 Home Assistant 显示传感器数据或控制设备！

### 将 Grove 模块连接到 XIAO ESP32C3

为了在 Seeed Studio XIAO ESP32C3 上使用 Grove 模块，我们需要使用 [Grove Shield for Seeed Studio XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) 并将 XIAO ESP32C3 安装到其上。

<div align="center"><img width ={450} src="https://files.seeedstudio.com/wiki/ESPHome/51.png"/></div>

之后，可以使用板上的 Grove 接口连接 Grove 模块。

### 引脚定义

当将 Grove 模块连接到 Seeed Studio XIAO 的 Grove Shield 上的 Grove 接口时，需要根据下表使用适当的内部引脚编号。

| 内部引脚编号  | 引脚映射  |
|--- |--- |
| 2  | D0  |
| 3  | D1  |
| 4  | D2  |
| 5  | D3  |
| 6  | D4  |
| 7  | D5  |
| 21  | D6  |
| 20  | D7  |
| 8  | D8  |
| 9  | D9  |
| 10  | D10  |
| 6  | SDA  |
| 7  | SCL  |

例如，如果您想将一个 Grove 模块连接到 **D0** 端口，则需要在 ESPHome 中将引脚定义为 **2**。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/ESPHome/50.png"/></div>

### ESPHome 支持的 Grove 模块兼容列表

目前，以下 Grove 模块受 ESPHome 支持：

<table>
<thead>
  <tr>
    <th>Grove 模块</th>
    <th>类别</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Laser-PM2-5-Sensor-HM3301.html">Grove - 激光 PM2.5 灰尘传感器</a></td>
    <td>气体</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-All-in-one-Environmental-Sensor-SEN55-p-5373.html">Grove - SEN55 一体化环境传感器</a>，NOx, PM, VOC, RH, 温度</td>
    <td>气体</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-All-in-one-Environmental-Sensor-SEN54-p-5374.html">Grove - SEN54 一体化环境传感器</a>，PM, VOC, RH, 温度</td>
    <td>气体</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911.html">Grove - CO2 & 温度 & 湿度传感器 (SCD30)</a></td>
    <td>气体</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD41-p-5025.html">Grove - CO2 & 温度 & 湿度传感器 - SCD41</a></td>
    <td>气体</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-VOC-and-eCO2-Gas-Sensor-for-Arduino-SGP30.html">Grove - VOC 和 eCO2 气体传感器 - SGP30</a></td>
    <td>气体</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-ADS1115-16-bit-ADC-p-4599.html">Grove - 4 通道 16 位 ADC (ADS1115)</a></td>
    <td>ADC</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Time-of-Flight-Distance-Sensor-VL53L0X.html">Grove - 飞行时间距离传感器 (VL53L0X)</a></td>
    <td>距离</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Ultrasonic-Distance-Sensor.html">Grove - 超声波距离传感器</a></td>
    <td>距离</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-AHT20-I2C-Industrial-grade-temperature-and-humidity-sensor-p-4497.html">Grove - AHT20 I2C 工业级温湿度传感器</a></td>
    <td>环境</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html">Grove - 温湿度传感器 V2.0 (DHT20)</a></td>
    <td>环境</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-Pro-AM2302-DHT22.html">Grove - 专业温湿度传感器 (DHT22/AM2302)</a></td>
    <td>环境</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html">Grove - 温湿度及气压传感器 (BME280)</a></td>
    <td>环境</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html">Grove - 温湿度、气压及气体传感器 (BME680)</a></td>
    <td>环境</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Barometer-Sensor-BMP280.html">Grove 温度及气压传感器 (BMP280)</a></td>
    <td>环境</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/One-Wire-Temperature-Sensor-p-1235.html">单总线温度传感器 - DS18B20</a></td>
    <td>环境</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html">Grove - 温湿度传感器 (DHT11)</a></td>
    <td>环境</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html">Grove - I2C 高精度温度传感器 - MCP9808</a></td>
    <td>环境</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html">Grove - 温湿度传感器 (SHT31)</a></td>
    <td>环境</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT40-p-5384.html" target="_blank" rel="noopener noreferrer">Grove - 温湿度传感器 (SHT40)</a></td>
    <td>环境</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html" target="_blank" rel="noopener noreferrer">Grove - 高精度气压传感器 (DPS310)</a></td>
    <td>环境</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-I2C-Thermocouple-Amplifier-MCP9600.html" target="_blank" rel="noopener noreferrer">Grove - I2C 热电偶放大器 (MCP9600)</a></td>
    <td>环境</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-I2C-Color-Sensor-V2.html">Grove - I2C 颜色传感器 V2</a></td>
    <td>颜色</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-I2C-Color-Sensor-V2.html">Grove - 数字光传感器 - TSL2561</a></td>
    <td>光线</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-ADC-for-Load-Cell-HX711-p-4361.html">Grove - 负载传感器 ADC (HX711)</a></td>
    <td>重量</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V3-MPR121-p-4694.html">Grove - 12 键电容式 I2C 触摸传感器 V3 (MPR121)</a></td>
    <td>电容</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-16-Channel-PWM-Driver-PCA9685.html">Grove - 16 通道 PWM 驱动器 (PCA9685)</a></td>
    <td>PWM</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-4-Digit-Display.html">Grove - 4 位数码管</a></td>
    <td>显示</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-OLED-Display-0-66-SSD1306-v1-0-p-5096.html">Grove - OLED 显示屏 0.66" (SSD1306)</a></td>
    <td>显示</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Relay.html">Grove - 继电器</a></td>
    <td>继电器</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-SPDT-Relay-30A.html">Grove - SPDT 继电器 (30A)</a></td>
    <td>继电器</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Solid-State-Relay-V2-p-3128.html">Grove - 固态继电器 V2</a></td>
    <td>继电器</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-2-Channel-SPDT-Relay.html">Grove - 2 通道 SPDT 继电器</a></td>
    <td>继电器</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-PIR-Motion-Sensor.html">Grove - PIR 动作传感器</a></td>
    <td>动作</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-mini-PIR-motion-sensor-p-2930.html">Grove - mini PIR 动作传感器</a></td>
    <td>动作</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html">Grove - 数字 PIR 动作传感器 (12m)</a></td>
    <td>动作</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Servo.html" target="_blank" rel="noopener noreferrer">Grove - 舵机</a></td>
    <td>执行器</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-8-Channel-I2C-Hub-TCA9548A-p-4398.html" target="_blank" rel="noopener noreferrer">Grove - 8 通道 I2C 多路复用器/I2C 集线器 (TCA9548A)</a></td>
    <td>多路复用器</td>
  </tr>
</tbody>
</table>

现在我们将从上表中选择 6 个 Grove 模块，并解释如何将它们与 ESPHome 和 Home Assistant 连接。

### Grove - 温湿度传感器 (AHT20)

#### 设置配置

- **步骤 1.** 将 [Grove - 温湿度传感器 (AHT20)](https://www.seeedstudio.com/Grove-AHT20-I2C-Industrial-grade-temperature-and-humidity-sensor-p-4497.html) 连接到 Seeed Studio XIAO 的 Grove Shield 上的一个 I2C 接口

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/ESPHome/52.png"/></div>

- **步骤 2.** 在我们之前创建的 **xiao-esp32c3.yaml** 文件中，在文件末尾添加以下内容，并通过 OTA 推送到 XIAO ESP32C3

```sh
i2c:
  sda: 6
  scl: 7

sensor:
  - platform: aht10
    temperature:
      name: "Temperature"
    humidity:
      name: "Humidity"
```

您可以在 [这里](https://esphome.io/components/sensor/aht10.html) 了解更多关于 **AHT10 组件** 的信息。它支持使用 **AHT10、AHT20** 和 **AHT21** 传感器。在这里我们添加了 [I²C 总线](https://esphome.io/components/i2c.html) 组件，因为 AHT20 使用 I2C 协议进行通信。

#### 在仪表板上可视化

- **步骤 1.** 在 Home Assistant 的 **概览** 页面上，点击 **3 个点** 并选择 **编辑仪表板**

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/30.png"/></div>

- **步骤 2.** 点击 **+ 添加卡片**

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/31.png"/></div>

- **步骤 3.** 选择 **按实体**，输入 **temperature** 并勾选 **Temperature** 旁边的复选框

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/ESPHome/32.png"/></div>

- **步骤 4.** 对 **Humidity** 重复相同操作

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/ESPHome/33.png"/></div>

- **步骤 5.** 点击 **继续**

<div align="center"><img width ={250} src="https://files.seeedstudio.com/wiki/ESPHome/34.png"/></div>

- **步骤 6.** 点击 **添加到仪表板**

<div align="center"><img width ={450} src="https://files.seeedstudio.com/wiki/ESPHome/35.png"/></div>

现在您的 Home Assistant 仪表板将如下所示

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/37.png"/></div>

- **步骤 7.** 您还可以将传感器数据可视化为仪表图。点击 **按卡片** 下的 **仪表**

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/39.png"/></div>

- **步骤 8.** 从下拉菜单中选择 **Temperature**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ESPHome/42.png"/></div>

- **步骤 9.** 点击 **保存**

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/43.png"/></div>

- **步骤 10.** 对 **Humidity** 重复相同操作

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/44.png"/></div>

现在您的仪表板将如下所示

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/45.png"/></div>

对于本 Wiki 中的 **Grove - VOC 和 eCO2 气体传感器 (SGP30)** 和 **Grove - CO2 & 温湿度传感器 (SCD41)**，您可以按照类似的步骤在仪表板上可视化传感器数据。

### Grove - VOC 和 eCO2 气体传感器 (SGP30)

#### 设置配置

- **步骤 1.** 将 [Grove - VOC 和 eCO2 气体传感器 (SGP30)](https://www.seeedstudio.com/Grove-VOC-and-eCO2-Gas-Sensor-for-Arduino-SGP30.html) 连接到 Seeed Studio XIAO 的 Grove Shield 上的一个 I2C 接口

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/ESPHome/52.png"/></div>

- **步骤 2.** 在我们之前创建的 **xiao-esp32c3.yaml** 文件中，在文件末尾添加以下内容，并通过 OTA 推送到 XIAO ESP32C3

```sh
i2c:
  sda: 6
  scl: 7

sensor:
  - platform: sgp30
    eco2:
      name: "eCO2"
      accuracy_decimals: 1
    tvoc:
      name: "TVOC"
      accuracy_decimals: 1
```

您可以在 [这里](https://esphome.io/components/sensor/sgp30.html) 了解更多关于 **SGP30 组件** 的信息。

### Grove - CO2 & 温湿度传感器 (SCD41)

#### 设置配置

- **步骤 1.** 将 [Grove - CO2 & 温湿度传感器 (SCD41)](https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD41-p-5025.html) 连接到 Seeed Studio XIAO 的 Grove Shield 上的一个 I2C 接口

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/ESPHome/52.png"/></div>

- **步骤 2.** 在我们之前创建的 **xiao-esp32c3.yaml** 文件中，在文件末尾添加以下内容，并通过 OTA 推送到 XIAO ESP32C3

```sh
i2c:
  sda: 6
  scl: 7

sensor:
  - platform: scd4x
    co2:
      name: "CO2"
    temperature:
      name: "Temperature"
    humidity:
      name: "Humidity"
```

您可以在 [这里](https://esphome.io/components/sensor/scd4x.html) 了解更多关于 **SGP4x 组件** 的信息。

### Grove - 继电器

#### 设置配置

- **步骤 1.** 将 [Grove - 继电器](https://www.seeedstudio.com/Grove-Relay.html) 连接到 Seeed Studio XIAO 的 Grove Shield 上的一个 **数字** 接口。这里我们选择 **D0** 接口

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/ESPHome/53.png"/></div>

- **步骤 2.** 在我们之前创建的 **xiao-esp32c3.yaml** 文件中，在文件末尾添加以下内容，并通过 OTA 推送到 XIAO ESP32C3

```sh
switch:
  - platform: gpio
    pin: 2
    name: "Relay"
```

您可以在 [这里](https://esphome.io/cookbook/relay.html) 了解更多关于 **继电器组件** 的信息。

#### 在仪表板上可视化

- **步骤 1.** 在我们之前提到的 **+ 添加卡片** 下，选择 **按实体**，输入 **relay**，选择它并点击 **继续**

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/55.png"/></div>

- **步骤 2.** 点击 **添加到仪表板**

<div align="center"><img width ={450} src="https://files.seeedstudio.com/wiki/ESPHome/56.png"/></div>

现在您可以使用切换开关打开/关闭继电器。

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/57.jpg"/></div>

### Grove - mini PIR运动传感器

#### 设置配置

- **步骤 1.** 将 [Grove - mini PIR运动传感器](https://www.seeedstudio.com/Grove-mini-PIR-motion-sensor-p-2930.html) 连接到 Seeed Studio XIAO 的 Grove Shield 的一个**数字**端口上。这里我们选择 **D0** 端口。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/ESPHome/53.png"/></div>

- **步骤 2.** 在我们之前创建的 **xiao-esp32c3.yaml** 文件中，在文件末尾添加以下内容，并通过 OTA 推送到 XIAO ESP32C3。

```sh
binary_sensor:
  - platform: gpio
    pin: 2
    name: "PIR Sensor"
    device_class: motion
```

您可以在 [这里](https://esphome.io/cookbook/pir.html) 了解更多关于 **PIR组件** 的信息。

#### 在仪表板上可视化

- **步骤 1.** 在我们之前提到的 **+ ADD CARD** 下，选择 **BY ENTITY**，输入 **pir**，选择它并点击 **CONTINUE**。

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/58.png"/></div>

- **步骤 2.** 点击 **ADD TO DASHBOARD**。

<div align="center"><img width ={450} src="https://files.seeedstudio.com/wiki/ESPHome/59.png"/></div>

现在如果检测到运动，它将显示为 **Detected**。

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/60.png"/></div>

## 接下来做什么？

恭喜您，您已经学会了在 LinkStar 上完成 Home Assistant 的部署，并能够使用 ESPHome 插件。如果遇到类似无法安装带有附加组件的 Home Assistant 容器的问题，您可以使用此方法安装其他 Home Assistant 插件。

我们也期待您加入我们的创作者团队，为我们带来更多有用的示例！

当然，XIAO ESP32C3 的功能不仅限于在 Home Assistant 中支持 MR24HPCB1，您可以在本文档中找到更多适合您使用的教程。

- [通过 ESPHome 将 Grove 模块连接到 Home Assistant (Odyssey)](https://wiki.seeedstudio.com/cn/Connect-Grove-to-Home-Assistant-ESPHome/)
- [通过 ESPHome 服务让 XIAO ESP32C3 接入 Home Assistant](https://wiki.seeedstudio.com/cn/xiao-esp32c3-esphome/)

让您的创意尽情发挥吧！

## 故障排除

**常见问题1：使用 ESPhome Web 工具上传固件时出现以下错误，我该如何修复？**

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/37.png"/></div>

> 答：如果在上传时出现此提示，请断开 XIAO ESP32C3 与 PC 的连接。然后，按住 BOOT 按钮，将板子连接到您的 PC，同时按住 BOOT 按钮，然后释放它以进入引导模式。此时，只需重新连接并再次上传固件即可。

**常见问题2：按照 esphome flasher 的教程在 Linux 下安装 esphome flasher 时失败？**

> 答：在执行以下命令时，您需要选择您的系统版本，否则会发生错误。例如，我的电脑是 Ubuntu 22.04，那么应该执行的命令如下：

```
sudo apt install python3

pip3 install -U \
    -f https://extras.wxpython.org/wxPython4/extras/linux/gtk3/ubuntu-22.04/ \
    wxPython

pip3 install esphomeflasher
```

**常见问题3：我填写了正确的 WiFi 和密码，为什么看不到 XIAO ESP32C3 的 IP 地址？**

> 答：当您遇到此问题时，请检查 XIAO ESP32C3 的天线是否连接到位。如果天线已经连接，请确保 XIAO 尽可能不超过 3 米远离 LinkStar（除非您更换了更强大的天线）。
如果仍然看不到 XIAO，您可以使用 [esphome flasher](https://github.com/esphome/esphome-flasher) 软件检查 XIAO 的日志信息，并通过日志检查 XIAO 的连接。
您可以重新插拔 XIAO，让它尝试重新搜索 WiFi 并再次连接。

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您在使用我们的产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>