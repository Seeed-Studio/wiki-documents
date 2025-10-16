---
description: Grove - 温度湿度压力气体传感器(BME680)
title: Grove - 温度湿度压力气体传感器(BME680)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/main.webp
slug: /cn/Grove-Temperature_Humidity_Pressure_Gas_Sensor_BME680
last_update:
  date: 4/14/2025
  author: Priyanshu Roy
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/main.jpg" /></div>

Grove-温度&湿度&压力&气体传感器(BME680)是一款多功能传感器，可以同时测量温度、压力、湿度和气体。它基于BME680模块，您可以将此传感器用于GPS、物联网设备或其他需要这四个参数的设备。



<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature%2C-Humidity%2C-Pressure-and-Gas-Sensor-(BME680)-p-3109.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

:::note
  “气体”指的是空气质量，主要受[VOCs](https://en.wikipedia.org/wiki/Volatile_organic_compound)（挥发性有机化合物）气体的影响。截至2018年8月8日，此模块不支持某些Arduino板的气体测量功能。它仅适用于具有大内存的Arduino平台，例如ATMEGA2560。如果您使用其他Arduino平台，例如：Arduino Uno、Seeeduino v4.2... 您获得的气体值将不准确。
:::

## 可升级为工业传感器

通过SenseCAP [S2110控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)和[S2100数据记录仪](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将Grove升级为LoRaWAN®传感器。Seeed不仅帮助您进行原型设计，还为您提供通过SenseCAP系列的坚固[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

SenseCAP S210x系列工业传感器为环境传感提供开箱即用的体验。请参考性能更高、可靠性更强的S2101无线温湿度传感器，用于空气质量监测。该系列包括用于土壤湿度、空气温度和湿度、光强度、二氧化碳、EC以及8合1气象站的传感器。尝试最新的[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)，为您的下一个工业项目取得成功。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size={4}><strong>SenseCAP工业传感器</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 空气温湿度传感器</strong></a></td>
    </tr>
  </tbody>
</table>

## 特性

- 四合一多功能测量
- 低功耗
- 宽测量范围
- 可选输出：

    湿度、压力和气体传感器可独立启用/禁用

## 规格

|项目|值|
|---|---|
|工作电压|3.3V/5V|
|工作范围|-40~+85℃; 0-100% r.H.; 300-1100hPa|
|数字接口|I2C(最高3.4MHz)/ SPI(3线和4线，最高10MHz)|
|I2C地址|0x76(默认)/ 0x77(可选)|

## 硬件概览

### 引脚图

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/pin_map.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/pin_map_back.jpg" /></div>

:::caution
如果您想更改默认设置，可能需要自行切割焊盘并焊接，请参考上图，并在使用刀具或焊接工具时务必小心。
:::

## 支持的平台

|Arduino|Raspberry Pi|ESP-IDF|
|---|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/esp_idf.png" alt="esp-idf" width={200} height="auto" /></p>|

:::caution
上述支持的平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码，因此用户需要自行编写软件库。
:::

## 入门指南

### 使用 Arduino

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield| Grove-BME680 |
|--------------|-------------|-----------------|
|<div align="center"><img height="200" src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img height="200" src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img height="200" src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/thumbnail.jpg" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-Temperature%2C-Humidity%2C-Pressure-and-Gas-Sensor-(BME680)-p-3109.html" target="_blank">立即购买</a>|

:::note
**1** 请轻轻插入 USB 数据线，否则可能会损坏端口。请使用内部有 4 根线的 USB 数据线，2 根线的 USB 数据线无法传输数据。如果您不确定手头的数据线，可以点击 [这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) 购买。

**2** 每个 Grove 模块在购买时都会附带一根 Grove 数据线。如果您丢失了 Grove 数据线，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买。
:::

- **步骤 1.** 将 Grove-温湿度&压力&气体传感器(BME680) 连接到 Grove-Base Shield 的 **I2C** 端口。

- **步骤 2.** 将 Grove-Base Shield 插入 Seeeduino。

- **步骤 3.** 使用 USB 数据线将 Seeeduino 连接到 PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/7.jpg" /></div>

:::note
如果没有 Grove Base Shield，我们也可以直接将此模块连接到 Seeeduino，如下所示。
:::

| Seeeduino     |  Grove-BME680           |
|---------------|-------------------------|
| 5V            | 红色                   |
| GND           | 黑色                   |
| SDA           | 白色                   |
| SCL           | 黄色                   |

#### 软件

:::note
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 从 Github 下载 [Grove BME680](https://github.com/Seeed-Studio/Seeed_BME680) 库。

- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。

- **步骤 3.** 重启 Arduino IDE。通过路径 **File --> Examples --> Seeed BME680 --> seeed_bme680_test** 打开 “BME680” 示例。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/demo_path.jpg" /></div>

- **步骤 4.** 上传示例代码。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 5.** 点击 **工具->串口监视器** 或同时按下 ++ctrl+shift+m++ 键，打开 Arduino IDE 的 **串口监视器**。如果一切正常，您将看到如下结果：

结果应如下所示：

```c
Serial start!!!
temperature ===>> 27.14 C
pressure ===>> 94.51 KPa
humidity ===>> 65.76 %
gas ===>> 101.51 Kohms


temperature ===>> 27.15 C
pressure ===>> 94.51 KPa
humidity ===>> 65.76 %
gas ===>> 101.64 Kohms


temperature ===>> 27.14 C
pressure ===>> 94.51 KPa
humidity ===>> 65.77 %
gas ===>> 101.64 Kohms


temperature ===>> 27.15 C
pressure ===>> 94.51 KPa
humidity ===>> 65.80 %
gas ===>> 101.76 Kohms

```

:::note
        1 - 为了获得稳定和准确的值，您需要让 Arduino 运行代码约 2 小时。结果会更加可靠。

        2 - 对于气体部分，它是一个可变电阻，反映了 VOC 气体的值，因此单位是 Kohms。

        3 - 如果您希望获得气体部分的可靠结果，请使用 Arduino Mega 并查看 [这里](https://github.com/Seeed-Studio/Seeed_BME680_V1)
:::

### 使用 ESP-IDF


#### 硬件

**所需材料**

<table align="center">
  <tr>
      <th>Seeed Studio XIAO ESP32C3</th>
      <th>Seeed Studio Grove Base for XIAO</th>
    <th>Grove BME680 环境传感器</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{height: 150, objectFit: 'contain'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{height: 150, objectFit: 'contain'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/main.jpg" style={{height: 150, objectFit: 'contain'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
          </a>
      </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

:::note
**1** 请轻轻插入 USB 数据线，否则可能会损坏接口。请使用内部有 4 根线的 USB 数据线，只有 2 根线的 USB 数据线无法传输数据。如果您不确定手头的数据线是否符合要求，可以点击 [这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) 购买。

**2** 每个 Grove 模块在购买时都会附带一根 Grove 数据线。如果您丢失了数据线，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买。
:::

- **步骤 1.** 使用 Grove 数据线将 Grove-温湿度&气压&气体传感器 (BME680) 连接到 XIAO 的 Grove Base。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/img/XIAO_Grove_BME680.png" alt="pir" width={600} height="auto" /></p>

- **步骤 2.** 使用 USB 数据线将 XIAO ESP32C3 连接到电脑。

#### 软件

:::note
如果这是您第一次使用 ESP-IDF，我们强烈建议您在开始之前查看 [ESP-IDF 入门指南](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html)。
:::

- **步骤 1.** 按照 [官方指南](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html) 安装 ESP-IDF。

- **步骤 2.** 使用 ESP-IDF 模板创建一个新项目。

- **步骤 3.** 克隆 BME680 组件仓库：
```bash
cd <your_project>/components
git clone --recursive https://github.com/Priyanshu0901/grove_bme680.git
```

- **步骤 4.** 在项目的 `sdkconfig` 文件中或通过 menuconfig 配置 I2C 引脚：
```bash
idf.py menuconfig
```
导航到 `Component config -> BME680 Sensor Configuration` 并设置：
- I2C SDA 引脚：6
- I2C SCL 引脚：7

- **步骤 5.** 将组件的 `examples` 目录中的示例代码复制到项目的 `main` 目录。

- **步骤 6.** 构建并烧录项目：
```bash
idf.py build
idf.py -p /dev/ttyUSB0 flash monitor
```

输出应类似于以下内容：

```
I (251) main_task: Started on CPU0
I (251) main_task: Calling app_main()
I (251) BME680_EXAMPLE: BME680 sensor example started
I (261) BME680_EXAMPLE: Initializing BME680 sensor...
I (261) BME680_IF: I2C interface initialized with address: 0x76
I (271) BME680_IF: BME680 interface initialized successfully
I (281) BME680: BME680 configured successfully
I (281) BME680: BME680 initialized successfully
I (281) BME680_EXAMPLE: BME680 initialized, waiting for sensor to stabilize...
I (1291) BME680_EXAMPLE: Performing first sensor reading...
I (1411) BME680_EXAMPLE: First sensor reading successful on attempt 1
I (1411) BME680_EXAMPLE: Sensor Data:
I (1411) BME680_EXAMPLE:   Temperature: 30.46 °C
I (1411) BME680_EXAMPLE:   Pressure: 910.34 hPa
I (1411) BME680_EXAMPLE:   Humidity: 51.17 %
I (1421) BME680_EXAMPLE:   Gas Resistance: 12561.98 kOhm
I (1421) BME680_EXAMPLE:   Gas Valid: Yes
I (1431) BME680_EXAMPLE:   Data Valid: Yes
I (1561) BME680_EXAMPLE: Sensor Data:
I (1561) BME680_EXAMPLE:   Temperature: 30.50 °C
I (1561) BME680_EXAMPLE:   Pressure: 910.33 hPa
I (1561) BME680_EXAMPLE:   Humidity: 51.20 %
I (1561) BME680_EXAMPLE:   Gas Resistance: 136.83 kOhm
I (1571) BME680_EXAMPLE:   Gas Valid: Yes
I (1571) BME680_EXAMPLE:   Data Valid: Yes
I (3691) BME680_EXAMPLE: Sensor Data:
I (3691) BME680_EXAMPLE:   Temperature: 30.50 °C
I (3691) BME680_EXAMPLE:   Pressure: 910.33 hPa
I (3691) BME680_EXAMPLE:   Humidity: 51.04 %
I (3691) BME680_EXAMPLE:   Gas Resistance: 96.77 kOhm
I (3701) BME680_EXAMPLE:   Gas Valid: Yes
I (3701) BME680_EXAMPLE:   Data Valid: Yes
```

:::note
1. 示例代码包含错误处理和传感器读取失败的恢复机制。
2. 传感器在初始化后需要一些时间稳定，因此前几次读取可能不准确。
3. 气体电阻值以 kOhm 为单位，表示空气质量。
4. 传感器支持 I2C 和 SPI 接口，但示例默认使用 I2C。
5. 使用 XIAO ESP32C3 时，请确保使用正确的 I2C 引脚（GPIO6 用于 SDA，GPIO7 用于 SCL）。
:::

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/res/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor_BME680.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove-BME680 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/res/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor_BME680.zip)
- **[Library]** [Seeed BME680 库](https://github.com/Seeed-Studio/Seeed_BME680)
- **[PDF]** [BME680 数据手册](https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Pressure-Gas-Sensor_BME680/res/BME680.pdf)

## 项目

这是该产品的介绍视频，包含简单的演示，您可以尝试一下。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/O3oHtW2TlXY?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>