---
description: Grove - 温湿度传感器(SHT4x)
title: Grove - 温湿度传感器(SHT4x)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-SHT4x
last_update:
  date: 1/4/2022
  author: jianjing Huang
---


# Grove - 温湿度传感器

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SHT4x/SHT4x.jpeg" /></div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/grove-temp-humi-sensor-sht40-p-5384.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p>

## 介绍

这款Grove SHT40数字传感器基于Sensirion业界验证的湿度和温度传感器。它可以在广泛的测量范围内提供恒定的温度和湿度精度。通过Grove平台，您可以即插即用地在任何微控制器（Arduino）或微处理器（Raspberry Pi）上使用SHT4x传感器。

## 硬件概述

在开始之前，了解产品的一些基本参数是非常重要的。下表提供了Grove - 温湿度传感器特性的信息。

<table border="0">
<tbody>
<tr>
<td><strong>参数       </strong></td>
<td><strong>规格</strong></td>
</tr>
<tr>
<td>温度精度</td>
<td>±0.2 ℃</td>
</tr>
<tr>
<td>湿度精度 </td>
<td>±1.8% RH</td>
</tr>
<tr>
<td>工作温度范围  </td>
<td>-40°C to 125°C</td>
</tr>
<tr>
<td>工作湿度范围       </td>
<td>0% to 100% RH</td>
</tr>
<tr>
<td>Grove电源供应            </td>
<td>5/3.3 v</td>
</tr>
<tr>
<td>串行协议</td>
<td>I2C </td>
</tr>
<tr>
<td>Grove平均电流 </td>
<td>32 µA</td>
</tr>
<tr>
<td>Grove空闲电流</td>
<td>1.2µA</td>
</tr>
<tr>
<td>产品尺寸</td>
<td>20mm x 40mm</td>
</tr>
<tr>
<td>通信方式</td>
<td>IIC</td>
</tr>
<tr>
<td>波特率</td>
<td>115200</td>
</tr>
</tbody>
</table>

## 入门指南

现在我们可以设置模块并检测湿度和温度。

### 准备工作

**硬件**

- Grove - 温湿度传感器
- Windows主机PC或MacOS PC（已测试Win 10和MacOS 12.2）
- Type-C数据线

**软件**

- [Arduino软件](https://www.arduino.cc/)
- [模块库](https://github.com/Sensirion/arduino-i2c-sht4x)

## Arduino库概述

:::tip
如果这是您第一次使用Arduino，我们强烈建议您参考[Arduino入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

我们在这里使用的库发布在Github上，包含示例代码。

<p style={{textAlign: 'center'}}><a href="https://github.com/Sensirion/arduino-i2c-sht4x" target="_blank"><img src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></a></p>

### 函数

- `Serial.begin(115200);` —— 这里的数字表示波特率设置为115200。当我们上传代码时，需要在打开监视器时将波特率设置为115200

### 安装

由于您已经下载了zip库文件，请打开Arduino IDE，点击**Sketch > Include Library > Add .ZIP Library**。选择您刚刚下载的zip文件，如果库安装正确，您将在通知窗口中看到**Library added to your libraries**。这意味着库已成功安装。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" /></div>

### 升级包

为了产品的连续性，我们可能会在后期优化和升级产品库。根据上面提供的两种库安装方法，也有两种更新库的方法供参考。

当库被优化时，我们将首先更新GitHub。您可以删除计算机文件夹中的原始库文件夹，然后从GitHub下载最新版本，解压并将其放在Arduino IDE库目录中。（**...\Arduino\libraries. ....** 是您设置Arduino的路径）

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Location_lib.png" /></div>

## Arduino 示例

现在我们已经安装了库并了解了基本功能，让我们运行一些 Grove - 温湿度传感器的示例来看看它的表现。

**前提条件**

| Seeeduino V4.2 | Base Shield | Grove - 温湿度传感器|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width="{210}" src="https://files.seeedstudio.com/wiki/SHT4x/SHT4x.jpeg" /></div>
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/grove-temp-humi-sensor-sht40-p-5384.html)|

**步骤 1.** 按如下方式连接硬件，注意 IIC 端口连接：

<div align="center"><img width="{500}" src="https://files.seeedstudio.com/wiki/SHT4x/SHT4xconnection.png" /></div>

**步骤 2.** 您需要安装 Arduino 软件。

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><img width = "{600}" src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></a></p>

**步骤 3.** 启动 Arduino 应用程序。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" /></div>

**步骤 4.** 导航到 "file-->examples-->Sensirion IIC Sen4x-->exampleUsage" 并打开库中提供的示例。您也可以复制下面的代码：

```cpp
#include <Arduino.h>
#include <SensirionI2CSht4x.h>
#include <Wire.h>

SensirionI2CSht4x sht4x;

void setup() {

    Serial.begin(115200);
    while (!Serial) {
        delay(100);
    }

    Wire.begin();

    uint16_t error;
    char errorMessage[256];

    sht4x.begin(Wire);

    uint32_t serialNumber;
    error = sht4x.serialNumber(serialNumber);
    if (error) {
        Serial.print("Error trying to execute serialNumber(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("Serial Number: ");
        Serial.println(serialNumber);
    }
}

void loop() {
    uint16_t error;
    char errorMessage[256];

    delay(1000);

    float temperature;
    float humidity;
    error = sht4x.measureHighPrecision(temperature, humidity);
    if (error) {
        Serial.print("Error trying to execute measureHighPrecision(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("Temperature:");
        Serial.print(temperature);
        Serial.print("\t");
        Serial.print("Humidity:");
        Serial.println(humidity);
    }
}
```

**步骤 5.** 将代码上传到 Arduino 软件并点击右上角的"监视器"。监视器结果可能显示如下：

<div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/SHT4x/SHT4xoutput.png" /></div>

## 资源

- **[PDF]** [SHT4x 数据手册](https://files.seeedstudio.com/wiki/SHT4x/SHT4x_Datasheet.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>