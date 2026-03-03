---
description: TBD
title: Grove - VOC 气体传感器 (SGP40)
keywords:
- Grove
- SGP40
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/grove_voc_gas_sensor_sgp40
last_update:
  date: 6/6/2023
  author: Stephen Lo
---

# Grove - VOC 气体传感器 (SGP40)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_SGP40/main.jpg" alt="pir" width={500} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP40-p-5700.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

<br />

Grove - VOC 气体传感器 (SGP40) 是一款创新的环境传感模块，专为各种挥发性有机化合物 (VOC) 检测应用而开发。基于先进的 Sensirion SGP40 传感器，它擅长将原始传感器信号转换为标准化数字信号，以便无缝集成到现有系统中。

凭借其实时执行高质量 VOC 测量的能力，该传感器模块为跟踪和监测室内空气质量提供了多功能解决方案。鉴于人们对监测空气质量的认识和需求日益增长，因为它与健康直接相关，Grove - VOC 气体传感器 (SGP40) 可以成为旨在改善室内空气质量、个人环境监测、HVAC 系统、工业安全以及任何空气质量评估至关重要的应用系统的重要组成部分。

它与 Grove 生态系统的兼容性促进了简单直接的设置过程。Grove 系统的即插即用特性允许开发人员无需处理复杂的接线或复杂的编码即可集成此模块。此功能可以显著加快开发时间，并允许用户更多地专注于基于 VOC 测量的数据解释和行动步骤。

Grove - VOC 气体传感器 (SGP40) 的主要优势之一是其通信协议。该传感器模块使用 I2C 接口，这是一种因其简单性和效率而被广泛采用的协议。这使得传感器和主控制器之间的数据传输过程极其顺畅，为需要基于 VOC 水平立即采取行动的应用提供快速反应时间。

总之，Grove - VOC 气体传感器 (SGP40) 是一个紧凑、强大且易于集成的模块，它使 VOC 检测这一具有挑战性的任务变得更简单、更易于实现，为环境应用中的创新和发展打开了大门。


## 特性

- 采用 Sensirion SGP40 传感器，提供可靠的 VOC 检测。
- 易于集成到 Grove 生态系统中，简化接线和编码过程。
- 提供实时 VOC 测量，用于准确的空气质量评估。
- 通过 I2C 接口通信，实现高效的数据传输。
- 紧凑的模块化设计，非常适合嵌入各种应用中。

## 规格

- 工作电压：3.3/5V
- 接口：I2C
- 尺寸：20x40mm

## 应用

- 室内空气质量监测系统：Grove - VOC 气体传感器可用于建筑物中监测空气质量，确保健康的生活或工作环境。
- 个人环境监测设备：该传感器可用于创建便携式设备，让个人能够监测其周围环境的空气质量。
- HVAC 系统：该传感器可以帮助调节供暖、通风和空调系统中的空气质量。
- 工业安全：它可用于工厂和工业场所，通过检测有害 VOC 水平来确保工人安全。

## 硬件概述

### 引脚图


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_SGP40/pinmap.png" alt="pir" width={500} height="auto" /></p>


## 入门指南

:::note
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前先查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

### 与 Arduino 配合使用

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield| Grove - VOC 气体传感器 (SGP40) |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={250} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={250} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_SGP40/main.jpg" alt="pir" width={250} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP40-p-5700.html" target="_blank">立即购买</a>|

:::note
**1.** 请轻柔地插入 USB 线缆，否则可能会损坏端口。请使用内部有 4 根线的 USB 线缆，2 根线的线缆无法传输数据。如果您不确定手头的线缆规格，可以点击 [这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) 购买
    
**2.** 每个 Grove 模块在购买时都会附带一根 Grove 线缆。如果您丢失了 Grove 线缆，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买。
:::

- **步骤 1.** 将 Grove - VOC 气体传感器 (SGP40) 连接到 Grove-Base Shield 的 **I2C** 端口。

- **步骤 2.** 将 Grove - Base Shield 插入 Seeeduino。

- **步骤 3.** 通过 USB 线缆将 Seeeduino 连接到 PC。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/3.jpg" alt="pir" width={600} height="auto" /></p>


:::note
如果我们没有 Grove Base Shield，我们也可以直接将 Grove - 智能空气质量传感器 (SGP41) 连接到 Seeeduino，如下所示。
:::

| Seeeduino     | Grove - VOC 气体传感器 (SGP40) |
|---------------|-------------------------|
| 5V            | 红色                     |
| GND           | 黑色                   |
| SDA           | 白色                   |
| SCL           | 黄色                  |

#### 软件

- **步骤 1.** 从 Github 下载 [SGP40 Arduino 库](https://github.com/Sensirion/arduino-i2c-sgp40)。

- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。

- **步骤 3.** 正确下载并安装库后，您可以在 examples 文件夹中找到一个名为 `exampleUsage.ino` 的示例程序。该程序是为 SGP40 传感器设计的。

```cpp
#include <Arduino.h>
#include <SensirionI2CSgp40.h>
#include <Wire.h>

SensirionI2CSgp40 sgp40;

void setup() {

    Serial.begin(115200);
    while (!Serial) {
        delay(100);
    }

    Wire.begin();

    uint16_t error;
    char errorMessage[256];

    sgp40.begin(Wire);

    uint16_t serialNumber[3];
    uint8_t serialNumberSize = 3;

    error = sgp40.getSerialNumber(serialNumber, serialNumberSize);

    if (error) {
        Serial.print("Error trying to execute getSerialNumber(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("SerialNumber:");
        Serial.print("0x");
        for (size_t i = 0; i < serialNumberSize; i++) {
            uint16_t value = serialNumber[i];
            Serial.print(value < 4096 ? "0" : "");
            Serial.print(value < 256 ? "0" : "");
            Serial.print(value < 16 ? "0" : "");
            Serial.print(value, HEX);
        }
        Serial.println();
    }

    uint16_t testResult;
    error = sgp40.executeSelfTest(testResult);
    if (error) {
        Serial.print("Error trying to execute executeSelfTest(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else if (testResult != 0xD400) {
        Serial.print("executeSelfTest failed with error: ");
        Serial.println(testResult);
    }
}

void loop() {
    uint16_t error;
    char errorMessage[256];
    uint16_t defaultRh = 0x8000;
    uint16_t defaultT = 0x6666;
    uint16_t srawVoc = 0;

    delay(1000);

    error = sgp40.measureRawSignal(defaultRh, defaultT, srawVoc);
    if (error) {
        Serial.print("Error trying to execute measureRawSignal(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("SRAW_VOC:");
        Serial.println(srawVoc);
    }
}
```

- **步骤 4.** 上传演示程序。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 5.** 点击 **工具-> 串口监视器** 打开 Arduino IDE 的 **串口监视器**。或者同时按下 ++ctrl+shift+m++ 键。如果一切正常，您将得到结果。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_SGP40/result.png" alt="pir" width={800} height="auto" /></p>

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_SGP40/Grove-VOC_Gas_Sensor(SGP40).rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[ZIP]** [Grove - VOC 气体传感器 (SGP40) 原理图和PCB](https://files.seeedstudio.com/wiki/Grove_SGP40/Grove-VOC_Gas_Sensor(SGP40).zip)
- **[PDF]** [SGP40 数据手册](https://files.seeedstudio.com/wiki/Grove_SGP40/Sensirion_Gas_Sensors_Datasheet_SGP40.pdf)


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