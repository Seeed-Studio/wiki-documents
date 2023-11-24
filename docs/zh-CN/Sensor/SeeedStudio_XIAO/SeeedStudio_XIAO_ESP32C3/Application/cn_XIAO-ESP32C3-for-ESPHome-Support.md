---
description: ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3
title: 应用 Home Assistant 实现屋内环境监测
keywords:
- ESPHome
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: cn/XIAO-ESP32C3-for-ESPHome-Support
last_update:
  date: 11/3/2023
  author: Xin Ping Li
---

# 将 XIAO ESP32C3 应用 Home Assistant 实现屋内环境监测

<!-- # ESPHome-Support-on-Seeed-Studio-XIAO-ESP32C3 -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/43.png"style={{width:700, height:'auto'}}/></div>

本wiki将逐步介绍如何连接[Seeed Studio XIAO ESP32C3](https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html)与运行在Home Assistant上的ESPHome，并在连接Grove模块到XIAO ESP32C3后发送传感器数据/控制设备。我在这里应用了各种端口 包括**数字、模拟、IIC、 SPI和UART**. 现在让我们开始吧!

## 什么是ESPHome和家庭助理?

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/2.png" style={{width:700, height:'auto'}}/></div>

[ESPHome](https://esphome.io/) 是一个工具，旨在使您的ESP板的管理尽可能简单。它读取一个YAML配置文件并创建自定义固件，并安装在你的ESP设备上。在ESPHome配置中添加的设备或传感器将自动显示在Home Assistant的UI中。ESPHome可以帮助您连接并发送数据到家庭助理设备。

## 硬件准备

我使用XIAO ESP32C3作为控制板，这里使用[reRouter](https://www.seeedstudio.com/reRouter-CM4102032-p-5734.html)作为硬件，以及多个Grove传感器。
<table align="center">
  <tbody><tr>
      <th>Seeed Studio XIAO ESP32C3</th>
      <th>Seeed Studio 扩展板</th>
      <th>家庭助理设备</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:210, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Home-Assistant/1.png" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 即刻购买🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 即刻购买🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://wiki.seeedstudio.com/home_assistant_topic/#-devices-for-home-assistant-">
            <strong><span><font color={'FFFFFF'} size={"4"}> 查看更多 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

**Grove 传感器**

- [Grove -温湿度传感器(BME680)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html)
- [Grove -Smart空气质量传感器(SGP41)](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html)
- [Grove -模拟麦克风](https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html)
- [Grove -数字PIR传感器](https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html)

## 软件准备

### 安装家庭助理

确保你已经有家庭助理启动和运行。这里有多个wiki介绍如何将家庭助理flash到[产品](https://wiki.seeedstudio.com/home_assistant_topic/#-devices-for-home-assistant-)中。我使用的是由树莓派CM4驱动的reRouter，所以我可以[直接使用官方版本将操作系统flash到reRouter](https://www.home-assistant.io/installation/raspberrypi)。

### 在家庭助理上安装ESPHome

ESPHome是一个**家庭助理附加组件** 可以简单地通过附加组件商店安装。

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/3.png"style={{width:700, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/3.png" style={{width:700, height:'auto'}}/></div>

- **步骤 1.** 在家庭助理上快速设置ESPHome，请单击下面的按钮

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/4.png"style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/4.png" style={{width:300, height:'auto'}}/></div>

- **步骤 2.** 看到以下弹出窗口后，单击 **OPEN LINK**

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/5.png"style={{width:300, height:'auto'}}/></div> -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/5.png" style={{width:300, height:'auto'}}/></div>

- **步骤 3.** 点击 **INSTALL**

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/6.png"style={{width:700, height:'auto'}}/></div> -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/6.png" style={{width:700, height:'auto'}}/></div>

- **步骤 4.** 启用所有选项，然后单击 **START**

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/7.png"style={{width:700, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/7.png" style={{width:700, height:'auto'}}/></div>

- **步骤 5.** 点击**OPEN WEB UI** 或者 **ESPHOME from the side-panel**

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/8.png"style={{width:700, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/8.png" style={{width:700, height:'auto'}}/></div>

如果成功加载ESPHome，您将看到以下窗口

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/9.png"style={{width:700, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/9.png" style={{width:700, height:'auto'}}/></div>

## 开始

一旦所有的软件和硬件都准备好了，我们就可以开始了。

### 1. 添加Seeed Studio XIAO ESP32C3到ESPHome

- **步骤 1.** 点击 **+ NEW DEVICE**

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/10.png"style={{width:700, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/10.png" style={{width:700, height:'auto'}}/></div>

- **步骤 2.** 点击 CONTINUE

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/11.png"style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/11.png" style={{width:300, height:'auto'}}/></div>

- **步骤 3.** 输入设备的 **名称** 并输入WiFi凭证 如 **网络名称** and **密码**。然后单击 **NEXT**

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/12.png"style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/12.png" style={{width:300, height:'auto'}}/></div>

- **步骤 4.** 选中 **ESP32-C3** 并且点击

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/13.png"style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/13.png" style={{width:300, height:'auto'}}/></div>

- **步骤 5.** 点击**SKIP** 因为我们将手动配置这块开发板

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/14.png"style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/14.png" style={{width:300, height:'auto'}}/></div>

- **步骤 6.** 点击 **EDIT** 在新成立的开发板下

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/15.png"style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/15.png" style={{width:300, height:'auto'}}/></div>

- **步骤 7.** 这将打开一个 **YAML** 文件该文件将用于设置所有的板配置。编辑**esp32**下的内容，如下所示


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
  ssid: "WiFi_SSID"
  password: "Your Password"

  # Enable fallback hotspot (captive portal) in case wifi connection fails
  ap:
    ssid: "Xiao-Esp32C3 Fallback Hotspot"
    password: "Your Password"
```

:::这里我们使用最新版本的 [Arduino core](https://github.com/espressif/arduino-esp32/releases) 用于ESP32和 [ESP32 support for PlatformIO](https://github.com/platformio/platform-espressif32/releases)
:::

- **步骤 8.** 点击 **SAVE** 然后点击 **INSTALL**

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/16.png"style={{width:700, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/16.png" style={{width:700, height:'auto'}}/></div>

- **步骤 9.** 将USB Type-C电缆的一端连接到Seeed Studio XIAO ESP32C3，另一端连接到reRouter CM4 1432上的一个USB端口

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/17.png"style={{width:700, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/17.png" style={{width:700, height:'auto'}}/></div>


- **步骤 10.** 点击**插入运行ESPHome Dashboard的计算机**

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/18.png"style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/18.png" style={{width:300, height:'auto'}}/></div>

- **步骤 11.** 选择连接的端口。它很可能是 ```/dev/ttyACM1 because /dev/ttyACM0``` 连接到reRouter CM4 1432

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/19.png"style={{width:700, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/19.png" style={{width:700, height:'auto'}}/></div>

现在它将下载所有必要的板包并将ESPHome固件flash到XIAO ESP32C3中。如果闪烁成功，您将看到以下输出。如果您看到一些错误，请尝试重新启动您的XIAO ESP32C3。或通过按住BOOT BUTTON进入引导加载程序模式并连接XIAO ESP32C3。

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/20.png"style={{width:700, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/20.png" style={{width:700, height:'auto'}}/></div>

- **步骤 12.** 以上窗口显示的是所连接单板的实时日志。点击 **STOP**关闭它

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/21.png"style={{width:700, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/21.png" style={{width:700, height:'auto'}}/></div>

- **步骤 13.** 如果单板状态显示为 **ONLINE** ，则表示单板WiFi连接成功

现在您可以从reRouter CM4 1432断开XIAO ESP32C3，并通过USB数据线为其供电。这是因为从现在开始，如果您想要将固件闪存到XIAO ESP32C3，您可以简单地通过OTA进行，而无需通过USB电缆连接到X86板。

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/22.png"style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/22.png" style={{width:300, height:'auto'}}/></div>

- **步骤 14.** 单击 **三个点** 并点击 **Install**

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/23.png"style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/23.png" style={{width:300, height:'auto'}}/></div>

- **步骤 15.** 选择 **Wirelessly** 它会以无线方式将更改推送到开发板

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/24.png"style={{width:300, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/24.png" style={{width:300, height:'auto'}}/></div>

- **步骤 16.** 来到 **Settings** 并选择 **Devices & Services**

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/25.png"style={{width:700, height:'auto'}}/></div> -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/25.png" style={{width:700, height:'auto'}}/></div>

- **步骤 17.** 您将看到 **ESPHome** 作为已发现的集成。点击 **CONFIGURE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/26.png"style={{width:700, height:'auto'}}/></div>

- **步骤 18.** 点击 **SUBMIT**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/27.png"style={{width:300, height:'auto'}}/></div>

- **步骤 19.** 点击 **FINISH**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/28.png"style={{width:300, height:'auto'}}/></div>

### 2. 连接Grove模块并发送数据

现在我们将Grove模块连接到Seeed Studio XIAO ESP32C3，这样我们就可以显示传感器数据或使用家庭助理控制设备!

### 开发知识

#### XIAO 扩展板

为了将Grove模块与Seeed Studio XIAO ESP32C3一起使用，我们将使用[Seeed Studio扩展基地用于XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)并将XIAO ESP32C3连接在其上。

之后，可以使用板上的Grove连接器连接Grove模块。这里是引脚定义。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/29.png"style={{width:700, height:'auto'}}/></div>

#### 引脚定义

在将Grove模块连接到Seeed Studio XIAO的Grove Shield上的Grove连接器时，您需要按照下表使用适当的内部引脚编号。

| 引脚编号 | 端口 |
| ------------- | ------------- |
| 2  | 	D0  |
| 3  | 	D1  |
| 4  | 	D2  |
| 5  | 	D3  |
| 6  | 	D4  |
| 7  | 	D5  |
| 21 | 	D6  |
| 20 | 	D7  |
| 8  | 	D8  |
| 9  | 	D9  |
| 10 |  D10 |
| 6  |  SDA |
| 7  |  SCL |

例如，如果要将Grove模块连接到D0端口，则需要将ESPHome上的引脚定义为2

#### Grove兼容性列表与ESPHome

目前ESPHome支持以下Grove模块

点击[这里查看](https://esphome.io/components/sensor/index.html参见)

### 3. 每个Grove连接和数据传输
现在我们将从上表中选择6个Grove模块，并解释它们如何与ESPHome和Home Assistant连接。

#### Grove -温湿度传感器(BME680)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/30.jpg"style={{width:700, height:'auto'}}/></div>

 Grove -温度、湿度、压力和气体传感器(BME680)是一种多功能传感器，可以同时测量温度、压力、湿度和气体。它基于BME680模块，您可以在GPS，物联网设备或其他需要这四个参数的设备中使用该传感器。[点击这里](https://www.seeedstudio.com/Grove-Temperature%2C-Humidity%2C-Pressure-and-Gas-Sensor-(BME680)-p-3109.html)购买。

##### 设置配置

- **步骤 1.** 将Grove-[温度，湿度，压力和气体传感器(BME680)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html)连接到seed Studio扩展底座上的IIC连接器之一
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/31.png"style={{width:700, height:'auto'}}/></div>

- **步骤 2.** 在**xiao-esp32c3.yaml** 我们之前创建的文件，更改文件并将其OTA推到XIAO ESP32C3

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

您可以在这里了解更多关于[BME680组件](https://esphome.io/components/sensor/bme680)。它允许您使用BME280, BME680, BMP085, BMP280, AHT10, AHT20和基于AHT21的传感器。这里我们添加I2C总线组件，因为AHT20使用IIC协议进行通信。


##### 仪表板上可视化

- **步骤 1.** 在概述页的家庭助理, 单击3个点，并单击 **Edit Dashboard**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/31.png"style={{width:700, height:'auto'}}/></div>

- **步骤 2.**  **+ ADD CARD**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/32.png"style={{width:700, height:'auto'}}/></div>

- **步骤 3.** 选择 **By ENTITY**, 输入 **temperature** 并选择 **check box** 旁边 **Temperature**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/33.png"style={{width:700, height:'auto'}}/></div>

- **步骤 4.** 对 **Humidity**、 **Gas Resitance**和 **Pressure**重复相同的操作

- **步骤 5.** 点击 **CONTINUE**

- **步骤 6.** 点击 **ADD TO DASHBOARD**

现在，您的家庭助理仪表盘将如下所示

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/34.png"style={{width:700, height:'auto'}}/></div>

- **步骤 7.** 您还可以将传感器数据可视化为仪表。点击 **Gauge** 下面 **BY CARD**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/35.png"style={{width:700, height:'auto'}}/></div>

- **步骤 8.** 选择下拉菜单中的 **Temperature** 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/36.png"style={{width:700, height:'auto'}}/></div>

- **步骤 9.** 点击**SAVE**

- **步骤 10.** 重复同样的步骤 **Humidity**, **Gas Resitance** 和 **Pressure**

- 现在您的仪表板将如下所示

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/37.png"style={{width:700, height:'auto'}}/></div>

#### Grove -Smart空气质量传感器(SGP41)

SGP41数字气体传感器采用盛思锐的CMOSens®技术，该技术在单芯片上提供了一个完整且易于使用的传感器系统。它可以测量室内空气中挥发性有机化合物(VOCs)和氮氧化物(NOx)的浓度，并提供数字输出信号。此外，该传感器具有出色的长期稳定性和使用寿命。[点击这里](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html?queryID=3ac9c3a1ed9e1a56a66b142e8282868a&objectID=5687&indexName=bazaar_retailer_products)购买。
##### 设置配置

- **步骤 1.** 将Grove-[智能空气质量传感器(SGP41)](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html?queryID=3ac9c3a1ed9e1a56a66b142e8282868a&objectID=5687&indexName=bazaar_retailer_products)连接到用于XIAO的Seeed Studio扩展底座上的I2C连接器之一

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/38.jpg"style={{width:700, height:'auto'}}/></div>

- **步骤 2.** 在 **xiao-esp32c3.yaml** 文件我们之前创建的文件，更改文件并将其OTA推到XIAO ESP32C3

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

sensor:
  - platform: sgp4x
    voc:
      id: sgp41_voc
      name: "VOC Index"
    nox:
      id: sgp41_nox
      name: "NOx Index"

```
- **步骤 3.** (可选):包含用于补偿的传感器的块。如果没有设置，将使用默认值。我们将使用温湿度传感器(BME680)来补偿智能空气质量传感器(SGP41)。
这是更新后的 **xiao-esp32c3.yaml** 文件:

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
**注:** 该传感器采集足够的数据样本需要90圈，目前无法避免警告。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/38.png"style={{width:700, height:'auto'}}/></div>

##### 仪表板上可视化

看到之前

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/39.png"style={{width:700, height:'auto'}}/></div>

#### Grove -模拟麦克风

Grove模拟麦克风是一种基于高性能SiSonic MEMS技术的麦克风，为开源硬件行业提供了极低噪声、低电流、可靠的小麦克风，在恶劣条件下提高了性能。[点击这里](https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html)购买。
##### 设置配置

**步骤1**将Grove-[模拟麦克风](https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html)连接到seed Studio扩展底座上的A0连接器，用于XIAO

<!-- <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/40.png"style={{width:700, height:'auto'}}/></div> -->

- **步骤 2.** 在**xiao-esp32c3. yaml**我们之前创建的文件中, 更改文件并将其通过OTA推送到XIAO ESP32C3
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

您可以查看有关[二进制传感器组件](https://esphome.io/components/binary_sensor/index.html#binary-sensor-component)的更多信息。

##### 仪表板上可视化

查看之前

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/41.png"style={{width:700, height:'auto'}}/></div>

#### Grove -数字PIR传感器

PIR传感器是一种检测人体运动的红外传感器。该Grove数字PIR传感器是PIR系列中最便宜的PIR传感器，然而，它能够给出快速响应并从“sig”引脚产生高电平。[点击这里](https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html)购买。

##### 设置配置

- **步骤 1.** 将[Grove -数字PIR传感器](https://wiki.seeedstudio.com/Grove-Digital-PIR-Sensor/)连接到seed Studio扩展底座上的D7连接器，用于XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/42.jpg"style={{width:700, height:'auto'}}/></div>

- **步骤 2.** 在 **xiao-esp32c3.yaml**我们之前创建的文件里,更改文件并将其OTA推到XIAO ESP32C3

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

##### 仪表板上可视化

查看之前

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/43.png"style={{width:700, height:'auto'}}/></div>

#### 显示(SSD1306) 在 XIAO 扩展板

##### 设置配置

- **步骤 1.** 下载喜欢的文件显示，[点击这里](https://esphome.io/components/display/index.html#fonts)参考

- **步骤 2.** 通过 **Setting** >>> **Add-ons** >>> **File editor** 来安装"File editor"

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/44.png"style={{width:700, height:'auto'}}/></div>

- **步骤 3.** 点击**File editor** >>> 输入路径: **config/esphome** >>> **uoload** 你喜欢的文件

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/45.png"style={{width:700, height:'auto'}}/></div>

- **步骤 4.** 在**xiao-esp32c3.yaml** 我们之前创建的文件中, 更改文件并将其OTA推到XIAO ESP32C3

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
 您可以更多地了解ESPHome强大的渲染和显示引擎所在的显示组件[点击这里](https://esphome.io/components/display/#display-engine)。
 
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/46.jpg"style={{width:700, height:'auto'}}/></div>

## ✨ 项目贡献者

这个项目是由Seeed Studio[贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)支持的。

-感谢[李新平的努力](https://github.com/Seeed-Studio/wiki-documents/issues/603)，您的作品将被[展出](https://wiki.seeedstudio.com/Honorary-Contributors/)。

## 技术支持和产品讨论

感谢您选择我们的产品!我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以迎合不同的喜好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

