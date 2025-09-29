---
description: 使用 ODYSSEY 和 Seeed Studio XIAO ESP32C3，通过 ESPHome 将 Grove 模块连接到 Home Assistant
title: 使用 ESPHome 将 Grove 模块连接到 Home Assistant
tags:
  - Home Assistant
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Connect-Grove-to-Home-Assistant-ESPHome
last_update:
  date: 03/16/2023
  author: Lakshantha
---

# 使用 ESPHome 将 Grove 模块连接到 Home Assistant

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/106.png" /></div>


## 简介

本教程将逐步讲解如何将 [Seeed Studio XIAO ESP32C3](https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html) 与运行在 Home Assistant 上的 ESPHome 连接，并在将 Grove 模块连接到 XIAO ESP32C3 后发送传感器数据或控制设备。让我们开始吧！

## 什么是 ESPHome？

[ESPHome](https://esphome.io) 是一个工具，旨在使管理 ESP 板尽可能简单。它读取 YAML 配置文件并创建自定义固件，然后将其安装到 ESP 设备上。在 ESPHome 配置中添加的设备或传感器会自动显示在 Home Assistant 的用户界面中。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ESPHome/54.png" /></div>


## 安装 Home Assistant

确保您已经安装并运行了 Home Assistant。您可以按照 [此教程](https://wiki.seeedstudio.com/cn/ODYSSEY-X86-Home-Assistant) 获取在 ODYSSEY-X86 SBC 上安装 Home Assistant 的分步指南。

## 在 Home Assistant 上安装 ESPHome

ESPHome 可作为 **Home Assistant 插件** 使用，可以通过插件商店轻松安装。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/6.png" /></div>

- **步骤 1.** 要快速在 Home Assistant 上设置 ESPHome，点击以下按钮

<div align="center"><a href="https://my.home-assistant.io/redirect/supervisor_addon/?addon=5c53de3b_esphome&repository_url=https%3A%2F%2Fgithub.com%2Fesphome%2Fhome-assistant-addon"><img width={200} src="https://files.seeedstudio.com/wiki/ESPHome/1.png" /></a></div>


- **步骤 2.** 当看到以下弹窗时，点击 **OPEN LINK**

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ESPHome/2.png" /></div>


- **步骤 3.** 点击 **INSTALL**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/3.png" /></div>

- **步骤 4.** 启用所有选项并点击 **START**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/4.png" /></div>

- **步骤 5.** 点击 **OPEN WEB UI** 或从侧边栏选择 **ESPHOME**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/5.png" /></div>

如果 ESPHome 成功加载，您将看到以下窗口

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/7.png" /></div>

## 将 Seeed Studio XIAO ESP32C3 添加到 ESPHome

- **步骤 1.** 点击 **+ NEW DEVICE**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/8.png" /></div>

- **步骤 2.** 点击 **CONTINUE**

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ESPHome/9.png" /></div>

- **步骤 3.** 为设备输入一个 **名称**，并输入 WiFi 凭据，例如 **网络名称** 和 **密码**。然后点击 **NEXT**

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ESPHome/10.png" /></div>


- **步骤 4.** 选择 **ESP32-C3** 并点击

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ESPHome/11.png" /></div>


- **步骤 5.** 点击 **SKIP**，因为我们将手动配置此板

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ESPHome/12.png" /></div>


- **步骤 6.** 点击新创建板下的 **EDIT**

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ESPHome/13.png" /></div>


- **步骤 7.** 这将打开一个 **YAML** 文件，该文件将用于设置所有板配置。编辑 **esp32** 下的内容如下

```sh
esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    version: 2.0.5
    platform_version: 5.2.0
```

**注意：** 这里我们使用的是 [Arduino core for ESP32](https://github.com/espressif/arduino-esp32/releases) 和 [PlatformIO 的 ESP32 支持](https://github.com/platformio/platform-espressif32/releases) 的最新版本。

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ESPHome/14.png" /></div>


- **步骤 8.** 点击 **SAVE**，然后点击 **INSTALL**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/ESPHome/16.png" /></div>

- **步骤 9.** 将 USB Type-C 数据线的一端连接到 Seeed Studio XIAO ESP32C3，另一端连接到 ODYSSEY-X86 的一个 USB 端口

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/49.png" /></div>


- **步骤 10.** 点击 **Plug into the computer running ESPHome Dashboard**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ESPHome/17.png" /></div>


- **步骤 11.** 选择已连接的端口。它可能是 **/dev/ttyACM1**，因为 **/dev/ttyACM0** 已连接到 ODYSSEY-X86 上的板载 ATSAMD21 协处理器

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ESPHome/18.png" /></div>


现在它将下载所有必要的板包并将 ESPHome 固件刷入 XIAO ESP32C3。如果刷写成功，您将看到以下输出

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/19.png" /></div>


- **步骤 12.** 上述窗口显示了来自连接板的实时日志。点击 **STOP** 关闭它

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ESPHome/20.png" /></div>


- **步骤 12.** 如果您看到板的状态为 **ONLINE**，则表示板已成功连接到 WiFi

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ESPHome/21.png" /></div>

现在，您可以将 XIAO ESP32C3 从 X86 板上断开连接，仅通过 USB 电缆供电。这是因为从现在开始，如果您想将固件刷写到 XIAO ESP32C3，可以直接通过 OTA（无线方式）完成，而无需通过 USB 电缆连接到 X86 板。

- **步骤 13.** 点击 **三个点**，然后点击 **安装**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ESPHome/28.png" /></div>

- **步骤 14.** 点击 **三个点**，然后点击 **安装**

<div align="center"><img width={550} src="https://files.seeedstudio.com/wiki/ESPHome/28.png" /></div>

- **步骤 15.** 选择 **无线方式**，它将通过无线方式将更改推送到开发板

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ESPHome/29.png" /></div>

- **步骤 16.** 转到 **设置**，选择 **设备与服务**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/22.png" /></div>

- **步骤 17.** 您将看到 **ESPHome** 作为发现的集成。点击 **配置**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/23.png" /></div>

- **步骤 18.** 点击 **提交**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ESPHome/24.png" /></div>

此时，它会要求您输入配置中为 xiao-esp32c3 设置的加密密钥。

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ESPHome/25.png" /></div>

- **步骤 19.** 返回 **xiao-esp32c3.yaml**，复制加密密钥，粘贴到上述对话框中，然后点击 **提交**

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ESPHome/26.png" /></div>

- **步骤 20.** 点击 **完成**

<div align="center"><img width={350} src="https://files.seeedstudio.com/wiki/ESPHome/27.png" /></div>

## 使用 ESPHome 和 Home Assistant 的 Grove 模块

现在我们将连接 Grove 模块到 Seeed Studio XIAO ESP32C3，以便通过 Home Assistant 显示传感器数据或控制设备！

### 将 Grove 模块连接到 XIAO ESP32C3

为了使用 Grove 模块与 Seeed Studio XIAO ESP32C3，我们将使用 [Grove Shield for Seeed Studio XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) 并将 XIAO ESP32C3 安装到其上。

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ESPHome/51.png" /></div>

之后，板上的 Grove 接口可以用于连接 Grove 模块。

### 引脚定义

当将 Grove 模块连接到 Grove Shield for Seeed Studio XIAO 的 Grove 接口时，您需要遵循下表以使用适当的内部引脚编号。

| 内部引脚编号 	| 引脚映射 	|
|---	|---	|
| 2 	| D0 	|
| 3 	| D1 	|
| 4 	| D2 	|
| 5 	| D3 	|
| 6 	| D4 	|
| 7 	| D5 	|
| 21 	| D6 	|
| 20 	| D7 	|
| 8 	| D8 	|
| 9 	| D9 	|
| 10 	| D10 	|
| 6 	| SDA 	|
| 7 	| SCL 	|

例如，如果您想将一个 Grove 模块连接到 **D0** 端口，您需要在 ESPHome 中将引脚定义为 **2**。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ESPHome/50.png" /></div>

### Grove 与 ESPHome 的兼容性列表

目前以下 Grove 模块受 ESPHome 支持：

<table>
<thead>
  <tr>
    <th>Grove</th>
    <th>类别</th>
    <th>ESPHome 组件</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Laser-PM2-5-Sensor-HM3301.html">Grove - 激光 PM2.5 灰尘传感器</a></td>
    <td>气体</td>
    <td><a href="https://esphome.io/components/sensor/hm3301">Grove - 激光 PM2.5 传感器 (HM3301)</a></td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-All-in-one-Environmental-Sensor-SEN55-p-5373.html">Grove - SEN55 一体化环境传感器</a>, NOx, PM, VOC, RH, 温度</td>
    <td>气体</td>
    <td><a href="https://esphome.io/components/sensor/sen5x.html">Sen5x 系列环境传感器</a></td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-All-in-one-Environmental-Sensor-SEN54-p-5374.html">Grove - SEN54 一体化环境传感器</a>, PM, VOC, RH, 温度</td>
    <td>气体</td>
    <td><a href="https://esphome.io/components/sensor/sen5x.html">Sen5x 系列环境传感器</a></td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-VOC-and-eCO2-Gas-Sensor-for-Arduino-SGP30.html">Grove - VOC 和 eCO2 气体传感器 - SGP30</a></td>
    <td>气体</td>
    <td><a href="https://esphome.io/components/sensor/sgp30.html">SGP30 二氧化碳和挥发性有机化合物传感器</a></td>
  </tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP40-p-5700.html">Grove - VOC 气体传感器 (SGP40)</a></td>
  <td>气体</td>
  <td><a href="https://esphome.io/components/sensor/sgp4x.html">SGP40 挥发性有机化合物传感器和 SGP41 VOC 和 NOx 传感器</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-Formaldehyde-Sensor-SFA30-p-5204.html">Grove - 甲醛传感器 (SFA30) - HCHO 传感器</a></td>
  <td>空气质量</td>
  <td><a href="https://esphome.io/components/sensor/sfa30.html">SFA30 甲醛传感器</a></td>
</tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-4-Digit-Display.html">Grove - 4 位数码管显示器</a></td>
    <td>显示</td>
    <td><a href="https://esphome.io/components/display/tm1637.html">TM1637 七段显示器</a></td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Servo.html" target="_blank" rel="noopener noreferrer">Grove - 舵机</a></td>
    <td>执行器</td>
    <td><a href="https://esphome.io/components/servo.html">舵机组件</a></td>
  </tr>
  <tr>
  <td><a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-TB6612FNG-p-3220.html">Grove - I2C 电机驱动器 (TB6612FNG)</a></td>
  <td>执行器</td>
  <td><a href="https://esphome.io/components/grove_tb6612fng.html">Grove TB6612FNG 电机驱动</a></td>
</tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-RTC-DS1307.html">Grove - DS1307 RTC (实时时钟) for Arduino</a></td>
    <td>时间</td>
    <td><a href="https://esphome.io/components/time/">时间组件</a></td>
  </tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-High-Precision-RTC.html">Grove - 高精度 RTC (DS1307)</a></td>
  <td>时间</td>
  <td><a href="https://esphome.io/components/time/">时间组件</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-WS2813-RGB-LED-Strip-Waterproof-30-LED-m-1m.html">Grove - WS2813 RGB LED 灯带防水 - 30 LED/m - 1m</a></td>
  <td>灯光</td>
  <td><a href="https://esphome.io/components/light/neopixelbus.html">NeoPixelBus 灯光</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-WS2813-RGB-LED-Strip-Waterproof-60-LED-m-1m.html">Grove - WS2813 RGB LED 灯带防水 - 60 LED/m - 1m</a></td>
  <td>灯光</td>
  <td><a href="https://esphome.io/components/light/neopixelbus.html">NeoPixelBus 灯光</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-20-WS2813-Mini.html">Grove - RGB LED 环 (20 - WS2813 Mini)</a></td>
  <td>灯光</td>
  <td><a href="https://esphome.io/components/light/neopixelbus.html">NeoPixelBus 灯光</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-10-WS2813-Mini.html">Grove - RGB LED 棒 (10 - WS2813 Mini)</a></td>
  <td>灯光</td>
  <td><a href="https://esphome.io/components/light/neopixelbus.html">NeoPixelBus 灯光</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-24-WS2813-Mini-p-4202.html">Grove - RGB LED 环 (24-WS2813 Mini)</a></td>
  <td>灯光</td>
  <td><a href="https://esphome.io/components/light/neopixelbus.html">NeoPixelBus 灯光</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-WS2813-Mini-p-4269.html">Grove - RGB LED (WS2813 Mini)</a></td>
  <td>灯光</td>
  <td><a href="https://esphome.io/components/light/neopixelbus.html">NeoPixelBus 灯光</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-20-WS2813-Mini-p-4271.html">Grove - RGB LED 棒 (20-WS2813 Mini)</a></td>
  <td>灯光</td>
  <td><a href="https://esphome.io/components/light/neopixelbus.html">NeoPixelBus 灯光</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-16-WS2813-Mini-p-4201.html">Grove - RGB LED 环 (16-WS2813 Mini)</a></td>
  <td>灯光</td>
  <td><a href="https://esphome.io/components/light/neopixelbus.html">NeoPixelBus 灯光</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-RGB-LED-Stick-15-WS2813-Mini-p-4270.html">Grove - RGB LED 棒 (15-WS2813 Mini)</a></td>
  <td>灯光</td>
  <td><a href="https://esphome.io/components/light/neopixelbus.html">NeoPixelBus 灯光</a></td>
</tr>
<tr>
  <td><a href="https://www.seeedstudio.com/Grove-Ultimate-RGB-LED-Ring-p-4203.html">Grove - 终极 RGB LED 环</a></td>
  <td>灯光</td>
  <td><a href="https://esphome.io/components/light/neopixelbus.html">NeoPixelBus 灯光</a></td>
</tr>
</tbody>
</table>

现在我们将从上表中选择 6 个 Grove 模块，并解释如何将它们与 ESPHome 和 Home Assistant 连接。

### Grove - 温湿度传感器 (AHT20)

#### 设置配置

- **步骤 1.** 将 [Grove - 温湿度传感器 (AHT20)](https://www.seeedstudio.com/Grove-AHT20-I2C-Industrial-grade-temperature-and-humidity-sensor-p-4497.html) 连接到 Seeed Studio XIAO 的 Grove Shield 上的一个 I2C 接口。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ESPHome/52.png" /></div>

- **步骤 2.** 在我们之前创建的 **xiao-esp32c3.yaml** 文件中，添加以下内容到文件末尾，并通过 OTA 推送到 XIAO ESP32C3。

```sh
i2c:
  sda: 6
  scl: 7

sensor:
  - platform: aht10
    variant: AHT20
    temperature:
      name: "Temperature"
    humidity:
      name: "Humidity"
```

您可以在 [这里](https://esphome.io/components/sensor/aht10.html) 了解更多关于 **AHT10 组件** 的信息。它支持使用 **AHT10、AHT20** 和 **AHT21** 传感器。在这里我们添加了 [I²C 总线](https://esphome.io/components/i2c.html) 组件，因为 AHT20 使用 I2C 协议进行通信。

#### 在仪表板上可视化

- **步骤 1.** 在 Home Assistant 的 **概览** 页面，点击 **3 个点**，然后点击 **编辑仪表板**。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/30.png" /></div>

- **步骤 2.** 点击 **+ 添加卡片**。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/31.png" /></div>

- **步骤 3.** 选择 **按实体**，输入 **temperature**，然后勾选 **Temperature**。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/ESPHome/32.png" /></div>

- **步骤 4.** 对 **Humidity** 重复相同操作。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/ESPHome/33.png" /></div>

- **步骤 5.** 点击 **继续**。

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/ESPHome/34.png" /></div>

- **步骤 6.** 点击 **添加到仪表板**。

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ESPHome/35.png" /></div>

现在您的 Home Assistant 仪表板将如下所示：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/37.png" /></div>

- **步骤 7.** 您还可以将传感器数据以仪表形式可视化。点击 **按卡片** 下的 **仪表**。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/39.png" /></div>

- **步骤 8.** 从下拉菜单中选择 **Temperature**。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ESPHome/42.png" /></div>

- **步骤 9.** 点击 **保存**。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/43.png" /></div>

- **步骤 10.** 对 **Humidity** 重复相同操作。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/44.png" /></div>

现在您的仪表板将如下所示：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/45.png" /></div>

对于本 Wiki 中的 **Grove - VOC 和 eCO2 气体传感器 (SGP30)** 和 **Grove - CO2 & 温湿度传感器 (SCD41)**，您可以按照类似的步骤在仪表板上可视化传感器数据。

### Grove - VOC 和 eCO2 气体传感器 (SGP30)

#### 设置配置

- **步骤 1.** 将 [Grove - VOC 和 eCO2 气体传感器 (SGP30)](https://www.seeedstudio.com/Grove-VOC-and-eCO2-Gas-Sensor-for-Arduino-SGP30.html) 连接到 Seeed Studio XIAO 的 Grove Shield 上的一个 I2C 接口。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ESPHome/52.png" /></div>

- **步骤 2.** 在我们之前创建的 **xiao-esp32c3.yaml** 文件中，添加以下内容到文件末尾，并通过 OTA 推送到 XIAO ESP32C3。

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

- **步骤 1.** 将 [Grove - CO2 & 温湿度传感器 (SCD41)](https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD41-p-5025.html) 连接到 Seeed Studio XIAO 的 Grove Shield 上的一个 I2C 接口。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ESPHome/52.png" /></div>

- **步骤 2.** 在我们之前创建的 **xiao-esp32c3.yaml** 文件中，添加以下内容到文件末尾，并通过 OTA 推送到 XIAO ESP32C3。

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

- **步骤 1.** 将 [Grove - 继电器](https://www.seeedstudio.com/Grove-Relay.html) 连接到 Seeed Studio XIAO 的 Grove Shield 上的一个 **数字**端口。这里我们选择 **D0** 端口。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ESPHome/53.png" /></div>

- **步骤 2.** 在我们之前创建的 **xiao-esp32c3.yaml** 文件中，添加以下内容到文件末尾，并通过 OTA 推送到 XIAO ESP32C3。

```sh
switch:
  - platform: gpio
    pin: 2
    name: "Relay"
```

您可以在 [这里](https://esphome.io/cookbook/relay.html) 了解更多关于 **继电器组件** 的信息。

#### 在仪表板上可视化

- **步骤 1.** 在我们之前提到的 **+ 添加卡片** 下，选择 **按实体**，输入 **relay**，选择它并点击 **继续**。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/55.png" /></div>

- **步骤 2.** 点击 **添加到仪表板**。

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ESPHome/56.png" /></div>

现在您可以使用切换开关打开或关闭继电器。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/57.jpg" /></div>


### Grove - mini PIR运动传感器

#### 设置配置

- **步骤 1.** 将 [Grove - mini PIR运动传感器](https://www.seeedstudio.com/Grove-mini-PIR-motion-sensor-p-2930.html) 连接到 Seeed Studio XIAO 的 Grove Shield 的一个**数字**端口上。这里我们选择 **D0** 端口。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/ESPHome/53.png" /></div>


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

- **步骤 1.** 在我们之前提到的 **+ 添加卡片** 下，选择 **按实体**，输入 **pir**，选择它并点击 **继续**。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/58.png" /></div>


- **步骤 2.** 点击 **添加到仪表板**。

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/ESPHome/59.png" /></div>


现在如果检测到运动，它将显示为 **已检测**。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ESPHome/60.png" /></div>


## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>