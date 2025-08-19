---
description: Grove - 二氧化碳、温度和湿度传感器 (SCD41)
title: Grove - 二氧化碳、温度和湿度传感器 (SCD41)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-CO2_&_Temperature_&_Humidity_Sensor-SCD41
last_update:
  date: 12/30/2022
  author: jianjing Huang
---

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/img/101020952_Preview-07.png" /></div>

Grove - 二氧化碳、温度和湿度传感器 - SCD41 是由 Sensirion 制造的小型但功能强大的模块。它是一款多功能传感器，可以同时测量温度、压力、湿度和二氧化碳。基于 SCD41 模块，您可以将此传感器用于 GPS、物联网设备或其他需要这四个参数的设备。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD41-p-5025.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 特性

- 3合1多功能测量
- 低功耗
- 宽测量范围
- I2C 接口
- 宽电源范围

## 规格

|项目|参数|
|---|---|
|工作电压|2.4V~5V|
|工作范围|-10~+60℃; 0-100% r.H.; 0-40,000ppm|
| I2C 地址 | 0x62 |

## 硬件概览

### 引脚图

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/img/1111.jpg" /></div>

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。无法为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

## 入门指南

### 使用 Arduino

#### 硬件

**所需材料**

| Seeeduino V4.2 | 基础扩展板 | CO2 & 温度 & 湿度传感器 - SCD41 |
|----------------|-------------|-----------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/small.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/img/thumbnail.png" /></div>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-Temperature%2C-Humidity%2C-Pressure-and-Gas-Sensor-(BME680)-p-3109.html" target="_blank">立即购买</a>|

:::note
**1** 请轻轻插入 USB 数据线，否则可能会损坏接口。请使用内部有 4 根线的 USB 数据线，只有 2 根线的 USB 数据线无法传输数据。如果您不确定手头的数据线是否符合要求，可以点击 [这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) 购买。

**2** 每个 Grove 模块在购买时都会附带一根 Grove 数据线。如果您丢失了 Grove 数据线，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买。
:::

- **步骤 1.** 将 Grove-温度&湿度&压力&气体传感器 (BME680) 连接到 Grove-基础扩展板的 **I2C** 端口。

- **步骤 2.** 将 Grove-基础扩展板插入 Seeeduino。

- **步骤 3.** 使用 USB 数据线将 Seeeduino 连接到电脑。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/img/2222.jpg" /></div>

:::note
如果没有 Grove 基础扩展板，我们也可以直接将此模块连接到 Seeeduino，如下所示。
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

- **步骤 1.** 从 Github 下载 [arduino-i2c-scd4x](https://github.com/Sensirion/arduino-i2c-scd4x) 库和 [arduino-core](https://github.com/Sensirion/arduino-core) 依赖项。

- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。

- **步骤 3.** 重启 Arduino IDE。通过以下路径打开 **Sensirion I2c SCD4x** 示例：**文件 --> 示例 --> Sensirion I2c SCD4x --> exampleUsage**。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/img/6267778524616.png" /></div>

- **步骤 4.** 上传示例代码。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 5.** 打开 Arduino IDE 的 **串口监视器**，点击 **工具->串口监视器** 或同时按下 ++ctrl+shift+m++ 键。如果一切正常，您将看到以下结果：

结果应如下所示：

```c
Serial: 0x6A565F073B88
Waiting for first measurement... (5 sec)
Co2:868 Temperature:33.08 Humidity:49.40
Co2:845 Temperature:32.72 Humidity:50.13
Co2:852 Temperature:32.28 Humidity:51.54
```

:::note
- 为了获得稳定且准确的数值，您需要让 Arduino 运行代码约 2 小时。此时结果会更加可靠。
:::

## 在 RaspberryPi 上运行

**所需材料**

| Raspberry Pi | Grove Base Hat for Raspberry Pi | Grove - OLED 显示屏 1.12" V3.0 |
|--------------|------------------------------------|------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/img/thumbnail.png" /></div>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[立即购买](https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html)|

### 准备 RaspberryPi

#### I2C 连接

- **步骤 1.** 将 Grove - CO2 & 温度 & 湿度传感器 - SCD41 插入 Grove - Base Hat 的 **I2C** 接口。

- **步骤 2.** 将 Grove - Base Hat 插入 RaspberryPi。

- **步骤 3.** 通过串口或 SSH 将 RaspberryPi 连接到 PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/img/9dfb870f961902feae92f4bde5bdeaf.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/img/GPIO-Pinout-Diagram.png" /></div>

#### 软件

- **步骤 1.** 在 RaspberryPi 上启用 I2C

```shell
sudo apt-get install -y i2c-tools
sudo raspi-config
```

按照以下图片启用 RaspberryPi 上的 I2C 和 SPI。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon1.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-OLED-Yellow&Blue-Display-0.96-(SSD1315)_V1.0/img/rpicon2.png" /></div>

然后重启 RaspberryPi：

```shell
sudo reboot
```

- **步骤 2.** 安装必要的库

```shell
sudo apt-get install wget gcc make unzip -y
```

安装 WiringPi 库

*如果您使用 WiringPi，需要将其更新到 2.52 版本。此库可能不再更新，建议使用其他库。*

```shell
cd
sudo apt-get install wiringpi
wget https://project-downloads.drogon.net/wiringpi-latest.deb
sudo dpkg -i wiringpi-latest.deb
gpio -v
```

安装 bcm2835

```shell
cd
wget http://www.airspayce.com/mikem/bcm2835/bcm2835-1.60.tar.gz
tar zxvf bcm2835-1.60.tar.gz 
cd bcm2835-1.60/
sudo ./configure
sudo make && sudo make check && sudo make install
```

有关更多信息和最新库，请参考网站：[bcm2835](http://www.airspayce.com/mikem/bcm2835/)

- **步骤 3.** 从 [Sensirion GitHub 页面](https://github.com/Sensirion/raspberry-pi-i2c-scd4x/tags) 下载驱动程序，并在 Raspberry Pi 上解压 `.zip` 文件。

- **步骤 4.** 编译驱动程序

**1**. 打开终端

**2**. 导航到驱动程序目录。例如：`cd ~/raspberry-pi-i2c-scd4x`

**3**. 运行 `make` 命令编译驱动程序

输出：

```shell
rm -f scd4x_i2c_example_usage
cc -Os -Wall -fstrict-aliasing -Wstrict-aliasing=1 -Wsign-conversion -fPIC -I. -o scd4x_i2c_example_usage  scd4x_i2c.h scd4x_i2c.c sensirion_i2c_hal.h sensirion_i2c.h sensirion_i2c.c \
sensirion_i2c_hal.c sensirion_config.h sensirion_common.h sensirion_common.c scd4x_i2c_example_usage.c
```

- **步骤 5.** 测试已连接的传感器

在编译驱动程序的同一目录下运行 `./scd4x_i2c_example_usage`。

输出：

```c
serial: 0xbff79f073b51
CO2: 799
Temperature: 20.92
Humidity: 35.95
CO2: 900
Temperature: 20.92
Humidity: 36.47
CO2: 926
Temperature: 20.81
Humidity: 36.85
...
```

有关更多信息，请查看 [Sensirion/raspberry-pi-i2c-scd4x on GitHub](https://github.com/Sensirion/raspberry-pi-i2c-scd4x)。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/res/SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[PDF]** [Sensirion CO2传感器SCD4x数据手册](https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/res/Sensirion_CO2_Sensors_SCD4x_Datasheet.pdf)
- **[STEP]** [Sensirion CO2传感器SCD4x的STEP文件](https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/res/Sensirion_CO2_Sensors_SCD4x_STEP_file.step)
- **[ZIP]** [Grove - CO2 & 温度 & 湿度传感器 - SCD41板文件](https://files.seeedstudio.com/wiki/Grove-CO2&Temperature&HumiditySensor-SCD4/res/SCH&PCB.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得最佳体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>