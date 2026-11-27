---
description: ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3
title: 在 Seeed Studio XIAO ESP32C3 上使用 ESPHome
keywords:
  - ESPHome
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /XIAO-ESP32C3-for-ESPHome-Support
sku: 113991054,110061541,102010633
last_update:
  date: 10/20/2023
  author: Zachary
createdAt: '2023-10-19'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/cn/XIAO-ESP32C3-for-ESPHome-Support/
---

# 通过 ESPHome 将 XIAO ESP32C3 连接到 Home Assistant（支持所有端口）

<!-- # ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3 -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/43.png"style={{width:900, height:'auto'}}/></div>

本教程将一步步演示如何将运行 ESPHome 的 Home Assistant 与 [Seeed Studio XIAO ESP32C3](https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html) 连接起来，并在将 Grove 模块连接到 XIAO ESP32C3 后，发送传感器数据 / 控制设备。我在这里用到了各种端口，包括 **数字、模拟、IIC、SPI 和 UART**。现在让我们开始吧！

## 什么是 ESPHome 和 Home Assistant？

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/2.png" style={{width:900, height:'auto'}}/></div>

[ESPHome](https://esphome.io/) 是一款旨在让你尽可能简单地管理 ESP 开发板的工具。它读取一个 YAML 配置文件，并基于此创建自定义固件，然后将其烧录到你的 ESP 设备上。在 ESPHome 配置中添加的设备或传感器会自动显示在 Home Assistant 的界面中。ESPHome 可以帮助你将数据连接并发送到 Home Assistant 设备。

## 硬件准备

我使用 XIAO ESP32C3 作为控制板，这里使用 [reRouter](https://www.seeedstudio.com/reRouter-CM4102032-p-5734.html) 作为硬件平台，并搭配多个 Grove 传感器。

<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO ESP32C3</th>
      <th>Seeed Studio 扩展板</th>
      <th>Home Assistant 设备</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Home-Assistant/1.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://wiki.seeedstudio.com/cn/home_assistant_topic/#-devices-for-home-assistant-" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> 查看更多 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

**Grove 传感器**

- [Grove - Temperature and Humidity Sensor (BME680)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html)
- [Grove -Smart Air Quality Sensor (SGP41)](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html)
- [Grove - Analog Microphone](https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html)
- [Grove - Digital PIR Sensor](https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html)

## 软件准备

### 安装 Home Assistant

请确保你已经成功安装并运行 Home Assistant。这里有多篇教程介绍如何将 Home Assistant 刷写到这些[产品](https://wiki.seeedstudio.com/cn/home_assistant_topic/#-devices-for-home-assistant-)上。我使用的是由 Raspberry Pi CM4 驱动的 reRouter，因此可以[直接使用官方工具将系统刷写到 reRouter 上](https://www.home-assistant.io/installation/raspberrypi)。

### 在 Home Assistant 上安装 ESPHome

ESPHome 作为 **Home Assistant 插件（Add-On）** 提供，可以直接通过插件商店安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/1.png" style={{width:900, height:'auto'}}/></div>

<!-- - **Step 1.** To quickly setup ESPHome on Home Asssistant, click the below button -->

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/4.png"style={{width:300, height:'auto'}}/></div> -->
<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/4.png" style={{width:300, height:'auto'}}/></div> -->

<!-- - **Step 2.** Once you see the following pop-up, click **OPEN LINK** -->

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/5.png"style={{width:300, height:'auto'}}/></div> -->

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/5.png" style={{width:300, height:'auto'}}/></div> -->

- **步骤 1.** 点击 **INSTALL**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/2.png" style={{width:900, height:'auto'}}/></div>

- **步骤 2.** 启用所有选项并点击 **START**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/3.png" style={{width:900, height:'auto'}}/></div>

<!-- - **Step 3.** Click **OPEN WEB UI** or **ESPHOME from the side-panel** -->

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/8.png"style={{width:700, height:'auto'}}/></div> -->

如果 ESPHome 成功加载，你会看到如下窗口

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/4.png" style={{width:900, height:'auto'}}/></div>

## 入门指南

当所有软件和硬件都准备就绪后，我们就可以开始了。

### 1. 将 Seeed Studio XIAO ESP32C3 添加到 ESPHome

- **步骤 1.** 点击 **+ NEW DEVICE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/5.png" style={{width:900, height:'auto'}}/></div>

- **步骤 2.** 点击 CONTINUE

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/6.png" style={{width:900, height:'auto'}}/></div>

- **步骤 3.** 为设备输入一个 **Name**，并输入 WiFi 凭据，例如 **Network name** 和 **Password**。然后点击 **NEXT**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/7.png" style={{width:900, height:'auto'}}/></div>

- **步骤 4.** 选择 **ESP32-C3** 并点击

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/8.png" style={{width:900, height:'auto'}}/></div>

- **步骤 5.** 点击 **SKIP**，因为我们将手动配置这块开发板

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/14.png" style={{width:400, height:'auto'}}/></div>

- **步骤 6.** 点击新建板卡下方的 **EDIT**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/9.png" style={{width:900, height:'auto'}}/></div>

- **步骤 7.** 这会打开一个 **YAML** 文件，该文件将用于设置所有板卡配置。按如下方式编辑 **esp32** 下的内容

```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# Enable logging
logger:
 hardware_uart: UART0

# Enable Home Assistant API
api:
  password: "Your password"

ota:
  password: "Your password"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "Your Password"
```

:::note 在这里，我们为 ESP32 使用了最新版本的 [Arduino core](https://github.com/espressif/arduino-esp32/releases) 和 [PlatformIO 的 ESP32 支持](https://github.com/platformio/platform-espressif32/releases)
:::

- **步骤 8.** 点击 **SAVE**，然后点击 **INSTALL**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/10-2.png" style={{width:900, height:'auto'}}/></div>

- **步骤 9.** 将 USB Type-C 线的一端连接到 Seeed Studio XIAO ESP32C3，另一端连接到 reRouter CM4 1432 的任一 USB 端口

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/17.png" style={{width:900, height:'auto'}}/></div>

- **步骤 10.** 点击 **Plug into the computer running ESPHome Dashboard**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/12-1.png" style={{width:900, height:'auto'}}/></div>

- **步骤 11.** 选择已连接的端口。它很可能是 ```/dev/ttyACM1```，因为 ```/dev/ttyACM0``` 已连接到 reRouter CM4 1432

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/13-1.png" style={{width:900, height:'auto'}}/></div>

:::tip
最好使用 2.4GHz Wi-Fi
:::

现在它会下载所有必要的板卡包，并将 ESPHome 固件烧录到 XIAO ESP32C3 中。如果烧录成功，你会看到如下输出。如果你看到一些错误，请尝试重启你的 XIAO ESP32C3，或者按住 BOOT BUTTON 并连接 XIAO ESP32C3 进入 bootloader 模式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/20.png" style={{width:900, height:'auto'}}/></div>

- **步骤 12.** 上面的窗口显示的是来自已连接开发板的实时日志。点击 **STOP** 将其关闭

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/14.png" style={{width:900, height:'auto'}}/></div>

- **步骤 13.** 如果你看到板卡状态为 **ONLINE**，这意味着板卡已成功连接到 WiFi

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/15.png" style={{width:900, height:'auto'}}/></div>

- **步骤 14.** 进入 **Settings** 并选择 **Devices & Services**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/19.png" style={{width:900, height:'auto'}}/></div>

- **步骤 15.** 你会看到 **ESPHome** 被发现为一个集成。点击 **CONFIGURE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/20.png"style={{width:900, height:'auto'}}/></div>

- **步骤 16.** 点击 **SUBMIT**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/21.png"style={{width:900, height:'auto'}}/></div>

- **步骤 17.** 输入你的密码。这是你可以在 **STEP 8** 中找到的 api 密码

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/22.png"style={{width:900, height:'auto'}}/></div>

- **步骤 18.** 点击 **FINISH**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/23.png"style={{width:900, height:'auto'}}/></div>

### 2. 连接 Grove 模块并发送数据

现在我们将 Grove 模块连接到 Seeed Studio XIAO ESP32C3，这样我们就可以使用 Home Assistant 显示传感器数据或控制设备！

### 开发知识

#### XIAO 扩展板

为了在 Seeed Studio XIAO ESP32C3 上使用 Grove 模块，我们将使用 [Seeed Studio Expansion Base for XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html) 并将 XIAO ESP32C3 连接到它上面。

之后，板上的 Grove 接口就可以用来连接 Grove 模块。下面是引脚定义。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:900, height:'auto'}}/></div>

#### 引脚定义

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=c3" target="_blank" rel="noopener noreferrer">探索交互式引脚图</a>
</div>

当你将 Grove 模块连接到 Seeed Studio XIAO 的 Grove Shield 上的 Grove 接口时，需要参考下图来使用合适的内部引脚编号。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/pin_map.png"style={{width:900, height:'auto'}}/></div>

例如，如果你想把一个 Grove 模块连接到 D0 端口，你需要在 ESPHome 中将引脚定义为 GPIO2

#### Grove 与 ESPHome 的兼容性列表

目前以下 Grove 模块受 ESPHome 支持。查看[这里](https://esphome.io/components/sensor/index.html#see-also)

### 3. Grove 连接与数据传输

现在我们将选择几个 Grove 模块，并说明它们如何与 ESPHome 和 Home Assistant 连接。

#### Grove - Temperature and Humidity Sensor (DHT20)

这款温湿度传感器提供预校准的数字输出。一个独特的电容式传感元件用于测量相对湿度，而温度则由负温度系数（NTC）热敏电阻测量。它具有出色的可靠性和长期稳定性。[点击这里](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html) 购买。

##### 配置设置

- **步骤 1.** 将 Grove - DHT20 连接到 Seeed Studio Expansion Base for XIAO 上的一个 I2C 接口

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/pic1.png"style={{width:300, height:'auto'}}/></div>

- **步骤 2.** 在我们之前创建的 **xiao-esp32c3.yaml** 文件中，修改该文件并通过 OTA 推送到 XIAO ESP32C3

```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# Enable logging
logger:
 hardware_uart: UART0

api:
  password: "F4MQG/rBhNmqP8Nud+AJ+5CYu7LuIhIFTOcRwOm5Nw4="

ota:
  password: "999afa1f8a07e85959a9f89f8f6aebb2"

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "YtpCwOqLoYlp"

captive_portal:

# 0x28 is the I2C address of DHT20
i2c:
  sda: GPIO6
  scl: GPIO7
  scan: True
  id: bus_0x38

sensor:
  - platform: aht10
    temperature:
      name: "Living Room Temperature"
    humidity:
      name: "Living Room Humidity"
    update_interval: 60s
```

你可以在这里了解更多关于 [DHT20 组件](https://esphome.io/components/sensor/aht10) 的信息。这里我们添加了 I²C 总线组件，因为 DHT20 使用 I2C 协议进行通信。

##### 在仪表盘上可视化

- **步骤 1.** 在 Home Assistant 的 Overview 页面，点击 3 个点并点击 **Edit Dashboard**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/35.png"style={{width:900, height:'auto'}}/></div>

- **步骤 2.** 点击 **+ ADD CARD**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/36.png"style={{width:900, height:'auto'}}/></div>

- **步骤 3.** 选择 **By ENTITY**，输入 **temperature** 并勾选 **Temperature** 旁边的 **check box**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/37.png"style={{width:900, height:'auto'}}/></div>

- **步骤 4.** 点击 **ADD TO DASHBOARD**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/38.png"style={{width:900, height:'auto'}}/></div>

- **步骤 5.** 你也可以将传感器数据以仪表的形式可视化。点击 **BY CARD** 下的 **Gauge**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/37-1.png"style={{width:900, height:'auto'}}/></div>

现在你的 Home Assistant 仪表盘将如下所示

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/39.png"style={{width:900, height:'auto'}}/></div>

#### Grove - Light Sensor(LS06-S)

Grove - Light Sensor v1.2 是一个模拟模块，可以输出多种电信号并转换为不同量程。它集成了 LS06-S 光敏电阻，一个高灵敏度且可靠的光电二极管，用于检测环境中的光强度。它是一个非常适合用于光照测量、光照检测和光控开关的 Arduino 光照传感器模块。

[点击这里](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html) 购买。

##### 配置设置

- **步骤 1.** 将 Grove - Light sensor 连接到 Seeed Studio Expansion Base for XIAO 上的一个模拟/数字接口

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/pic2.png"style={{width:300, height:'auto'}}/></div>

- **步骤 2.** 在我们之前创建的 **xiao-esp32c3.yaml** 文件中，修改该文件并通过 OTA 推送到 XIAO ESP32C3

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/41-1.png"style={{width:900, height:'auto'}}/></div>

如果一切顺利，你会看到这个结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/42.png"style={{width:900, height:'auto'}}/></div>

##### 在仪表盘上可视化

- **步骤 1.** 在 Home Assistant 的 Overview 页面，点击 3 个点并点击 **Edit Dashboard**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/35.png"style={{width:900, height:'auto'}}/></div>

- **步骤 2.** 点击 **+ ADD CARD**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/36.png"style={{width:900, height:'auto'}}/></div>

- **步骤 3.** 选择 **By ENTITY**，选择 **Light Sensor**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/43.png"style={{width:900, height:'auto'}}/></div>

- **步骤 4.** 选择 **PICK DIFFERENT CARD**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/44.png"style={{width:900, height:'auto'}}/></div>

- **步骤 5.** 选择 **Gauge**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/45.png"style={{width:900, height:'auto'}}/></div>

- **步骤 6.** 设置最小值和最大值

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/46.png"style={{width:900, height:'auto'}}/></div>

- **步骤 7.** 然后你会在仪表盘上看到光线传感器的数值。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/47.png"style={{width:900, height:'auto'}}/></div>

<!-- #### Grove - Temperature and Humidity Sensor (BME680)

The Grove-Temperature&Humidity&Pressure&Gas Sensor(BME680) is a multiple function sensor which can measure temperature, pressure, humidity and gas at the same time. It is based on the BME680 module and you can use this sensor in your GPS, IoT devices or other device which needs those four parameters. [Click here](https://www.seeedstudio.com/Grove-Temperature%2C-Humidity%2C-Pressure-and-Gas-Sensor-(BME680)-p-3109.html) for the purchase.

##### Setup Configuration

- **Step 1.** Connect Grove - [Temperature, Humidity, Pressure and Gas Sensor (BME680)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html) to one of the I2C connectors on the Seeed Studio Expansion Base for XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/30.jpg"style={{width:700, height:'auto'}}/></div>

- **Step 2.** Inside the **xiao-esp32c3.yaml** file that we created before, change the file and push it OTA to XIAO ESP32C3

```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# Enable logging
logger:
 hardware_uart: UART0

# Enable Home Assistant API
api:
  password: "Your password"

ota:
  password: "Your password"

wifi:
  ssid: "UMASS fried chicken"
  password: "Zacharyloveschicken"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

captive_portal:

i2c:
  sda: GPIO6
  scl: GPIO7

sensor:
  - platform: bme680
    temperature:
      name: "BME680 Temperature"
      oversampling: 16x
    pressure:
      name: "BME680 Pressure"
    humidity:
      name: "BME680 Humidity"
    gas_resistance:
      name: "BME680 Gas Resistance"
    address: 0x76
    update_interval: 60s
```

You can learn more about the [BME680 component](https://esphome.io/components/sensor/bme680) here. It allows you to use BME280, BME680, BMP085, BMP280, AHT10, AHT20 and AHT21 based sensors. Here we add the I²C Bus component because AHT20 communicates using I2C protocol.

##### Visualize on Dashboard

- **Step 1.** On the Overview page of Home Assistant, click the 3 dots and click **Edit Dashboard**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/31.png"style={{width:900, height:'auto'}}/></div>

- **Step 2.** Click **+ ADD CARD**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/32.png"style={{width:900, height:'auto'}}/></div>

- **Step 3.** Select **By ENTITY**, type **temperature** and select the **check box** next to **Temperature**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/33.png"style={{width:900, height:'auto'}}/></div>

- **Step 4.** Repeat the same for **Humidity**, **Gas Resitance** and **Pressure**

- **Step 5.** Click **CONTINUE**

- **Step 6.** Click **ADD TO DASHBOARD**

Now your Home Assistant dashboard will look like below

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/34.png"style={{width:900, height:'auto'}}/></div>

- **Step 7.** You can also visualize sensor data as gauges. Click **Gauge** under **BY CARD**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/35.png"style={{width:900, height:'auto'}}/></div>

- **Step 8.** Select **Temperature** from the drop-down menu

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/36.png"style={{width:900, height:'auto'}}/></div>

- **Step 9.** Click **SAVE**

- **Step 10.** Repeat the same for **Humidity**, **Gas Resitance** and **Pressure**

- Now your dashboard will look like below

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/37.png"style={{width:900, height:'auto'}}/></div>
 -->

<!-- #### Grove -Smart Air Quality Sensor (SGP41)

The SGP41 digital gas sensor uses Sensirion's CMOSens® technology, which offers a complete and easy-to-use sensor system on a single chip. It can measure the concentration of volatile organic compounds (VOCs) and nitrogen oxides (NOx) in indoor air and provides digital output signals. Additionally, this sensor has outstanding long-term stability and lifetime. [Click here](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html?queryID=3ac9c3a1ed9e1a56a66b142e8282868a&objectID=5687&indexName=bazaar_retailer_products) for the purchase.

##### Setup Configuration

- **Step 1.** Connect Grove - [Smart Air Quality Sensor (SGP41)](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html?queryID=3ac9c3a1ed9e1a56a66b142e8282868a&objectID=5687&indexName=bazaar_retailer_products) to one of the I2C connectors on the Seeed Studio Expansion Base for XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/38.jpg"style={{width:900, height:'auto'}}/></div>

- **Step 2.** Inside the **xiao-esp32c3.yaml** file that we created before, change the file and push it OTA to XIAO ESP32C3

```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# Enable logging
logger:
 hardware_uart: UART0

# Enable Home Assistant API
api:
  password: "Your password"

ota:
  password: "Your password"

wifi:
  ssid: "UMASS fried chicken"
  password: "Zacharyloveschicken"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

captive_portal:

spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10
  miso_pin: GPIO9

i2c:
  sda: GPIO6
  scl: GPIO7
  scan: True
  id: bus_a
  frequency: 1MHz

sensor:
  - platform: sgp4x
    voc:
      id: sgp41_voc
      name: "VOC Index"
    nox:
      id: sgp41_nox
      name: "NOx Index"

``` 

```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# Enable logging
logger:
 hardware_uart: UART0

# Enable Home Assistant API
api:
  password: "Your password"

ota:
  password: "Your password"

wifi:
  ssid: "UMASS fried chicken"
  password: "Zacharyloveschicken"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

captive_portal:

spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10
  miso_pin: GPIO9

i2c:
  sda: GPIO6
  scl: GPIO7
  scan: True
  id: bus_a
  frequency: 1MHz
sensor:
  - platform: bme680
    temperature:
      id:  bme680_temp
      name: "BME680 Temperature"
      oversampling: 16x
    pressure:
      name: "BME680 Pressure"
    humidity:
      id: bme680_hum
      name: "BME680 Humidity"
    gas_resistance:
      name: "BME680 Gas Resistance"
    address: 0x76

  - platform: sgp4x
    voc:
      name: "VOC Index"
    nox:
      name: "NOx Index"
    compensation:
      humidity_source: bme680_hum
      temperature_source: bme680_temp
```
**注意：** 该传感器需要 90 个循环来收集足够的数据样本，目前还无法避免警告。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/38.png"style={{width:700, height:'auto'}}/></div>

##### 在仪表盘上可视化

参见前文。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/39.png"style={{width:700, height:'auto'}}/></div> -->

<!-- #### Grove - Analog Microphone

The Grove - Analog Microphone is a based on high-performance SiSonic MEMS technology, offering an extremely-low-noise, low-current, reliable, and small microphone to opensource hardware industry, and it has improved performance under severe conditions. [Click here](https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html) for a purchase.

##### Setup Configuration

- **Step 1.** Connect Grove - [Analog Microphone](https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html) to the A0 connector on the Seeed Studio Expansion Base for XIAO

- **Step 2.** Inside the **xiao-esp32c3.yaml** file that we created before, change the file and push it OTA to XIAO ESP32C3
```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# Enable logging
logger:
 hardware_uart: UART0

# Enable Home Assistant API
api:

ota:

wifi:
  ssid: "UMASS fried chicken"
  password: "Zacharyloveschicken"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

captive_portal:

spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10
  miso_pin: GPIO9

i2c:
  sda: GPIO6
  scl: GPIO7
  scan: True
  id: bus_a
  frequency: 1MHz

binary_sensor:
  - platform: gpio
    pin: GPIO2
    name: "Sound level"
    device_class: sound
```

你可以查看关于 [Binary Sensor Component](https://esphome.io/components/binary_sensor/index.html#binary-sensor-component) 的更多信息

##### 在仪表盘上可视化

参见前文。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/41.png"style={{width:700, height:'auto'}}/></div> -->

<!-- #### Grove - Digital PIR Sensor

PIR 传感器是一种用于检测人体运动的红外传感器。这个 Grove Digital PIR Sensor 是 PIR 系列中最便宜的 PIR 传感器，但它能够快速响应，并从 "sig" 引脚输出高电平信号。[点击这里](https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html) 进行购买。

##### 配置设置

- **步骤 1.** 将 [Grove - Digital PIR Sensor](https://wiki.seeedstudio.com/cn/Grove-Digital-PIR-Sensor/) 连接到 Seeed Studio Expansion Base for XIAO 上的 D7 接口

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/42.jpg"style={{width:700, height:'auto'}}/></div>

- **步骤 2.** 在我们之前创建的 **xiao-esp32c3.yaml** 文件中修改内容，并通过 OTA 推送到 XIAO ESP32C3

```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# Enable logging
logger:
 hardware_uart: UART0

# Enable Home Assistant API
api:

ota:

wifi:
  ssid: "UMASS fried chicken"
  password: "Zacharyloveschicken"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

captive_portal:

spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10
  miso_pin: GPIO9

i2c:
  sda: GPIO6
  scl: GPIO7
  scan: True
  id: bus_a
  frequency: 1MHz

binary_sensor:
  - platform: gpio
    pin: GPIO20
    name: "PIR Sensor"
    device_class: motion
```

##### 在仪表盘上可视化

参见前文。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/43.png"style={{width:700, height:'auto'}}/></div> -->

<!-- #### Display(SSD1306) on XIAO Expansion Board

##### 配置设置

- **步骤 1.** 下载用于显示的字体文件，[点击这里](https://esphome.io/components/display/index.html#fonts) 作为参考

- **步骤 2.** 在 **Setting** >>> **Add-ons** >>> **File editor** 中安装 "File editor"

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/44.png"style={{width:700, height:'auto'}}/></div>

- **步骤 3.** 点击 **File editor** >>> 输入路径：**config/esphome** >>> **上传** 你的字体文件

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/45.png"style={{width:700, height:'auto'}}/></div>

- **步骤 4.** 在我们之前创建的 **xiao-esp32c3.yaml** 文件中修改内容，并通过 OTA 推送到 XIAO ESP32C3

```
esphome:
  name: xiao-esp32c3
  platformio_options:
   board_build.flash_mode: dio

esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    platform_version: 5.4.0

# Enable logging
logger:
 hardware_uart: UART0

# Enable Home Assistant API
api:

ota:

wifi:
  ssid: "UMASS fried chicken"
  password: "Zacharyloveschicken"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "MoLTqZUvHwWI"

captive_portal:

spi:
  clk_pin: GPIO8
  mosi_pin: GPIO10
  miso_pin: GPIO9

i2c:
  sda: GPIO6
  scl: GPIO7
  scan: True
  id: bus_a
  frequency: 1MHz

display:
  - platform: ssd1306_i2c
    model: "SSD1306 128x64"
    address: 0x3C
    lambda: |-
      it.print(0, 0, id(font), "Wi-fi Connected");

sensor:
  - platform: bme680
    temperature:
      id:  bme680_temp
      name: "BME680 Temperature"
      oversampling: 16x
    pressure:
      name: "BME680 Pressure"
    humidity:
      id: bme680_hum
      name: "BME680 Humidity"
    gas_resistance:
      name: "BME680 Gas Resistance"
    address: 0x76

  - platform: sgp4x
    voc:
      name: "VOC Index"
    nox:
      name: "NOx Index"
    compensation:
      humidity_source: bme680_hum
      temperature_source: bme680_temp

binary_sensor:
  - platform: gpio
    pin: GPIO20
    name: "PIR Sensor"
    device_class: motion

  - platform: gpio
    pin: GPIO2
    name: "Sound level"
    device_class: sound
```
 你可以 [点击这里](https://esphome.io/components/display/#display-engine) 进一步探索显示组件中 ESPHome 功能强大的渲染和显示引擎

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/46.jpg"style={{width:700, height:'auto'}}/></div> -->

## ✨ 贡献者项目

- 本项目由 Seeed Studio 的 [Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) 提供支持。
- 感谢 [Zachary 的付出](https://github.com/Seeed-Studio/wiki-documents/issues/603)，你的作品也将会被[展示](https://wiki.seeedstudio.com/cn/Honorary-Contributors/)。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品的过程中尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
