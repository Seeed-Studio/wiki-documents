---
description: 本文重点介绍 Grove SGP41 传感器的使用。
title: Grove -智能空气质量传感器 (SGP41)
keywords:
- SGP41
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/grove-smart-air-quality-sensor-sgp41
last_update:
  date: 5/11/2023
  author: Stephen Lo
---

# Grove -智能空气质量传感器 (SGP41)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-SGP41/1.jpg" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html?queryID=3ac9c3a1ed9e1a56a66b142e8282868a&objectID=5687&indexName=bazaar_retailer_products" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

<br />

Grove - 智能空气质量传感器 (SGP41) 是 Grove 系列的数字气体传感器模块。它采用 4 针 Grove 接口，用户可以轻松将传感器连接到微控制器。该模块支持 3.3V 和 5V 电源供电，使用灵活。

SGP41 数字气体传感器采用 Sensirion 的 CMOSens® 技术，在单个芯片上提供完整且易于使用的传感器系统。它可以测量室内空气中挥发性有机化合物 (VOCs) 和氮氧化物 (NOx) 的浓度，并提供数字输出信号。此外，该传感器具有出色的长期稳定性和使用寿命。

Grove - 智能空气质量传感器 (SGP41) 模块结构紧凑，适用于空间有限的应用。它还具有高可靠性和重现性。如果您需要测量室内空气质量，请考虑使用我们的 Grove - 空气质量传感器 (SGP41) 模块！



:::tip

我们已经发布了 [Seeed 气体传感器选择指南](https://wiki.seeedstudio.com/cn/Seeed_Gas_Sensor_Selection_Guide/)，它将帮助您选择最适合您需求的气体传感器。

:::



## 特性

- 数字气体传感器：SGP41 是一款数字气体传感器，可以测量室内空气中挥发性有机化合物 (VOCs) 和氮氧化物 (NOx) 的浓度。
- CMOSens® 技术：SGP41 采用 Sensirion 的 CMOSens® 技术，在单个芯片上提供完整且易于使用的传感器系统。
- 长期稳定性：SGP41 具有出色的长期稳定性和使用寿命，非常适合需要持续监测室内空气质量的应用。
- 数字输出信号：SGP41 提供数字输出信号，便于与微控制器和其他数字系统集成。
- 小型化设计：SGP41 非常紧凑，适用于空间有限的应用。它采用 4 针 Grove 接口，用户可以轻松将传感器连接到微控制器。
- 灵活的电源供电：该模块支持 3.3V 和 5V 电源供电，在不同应用中使用非常灵活和方便。
- 高可靠性和重现性：Sensirion 最先进的生产工艺保证了 SGP41 模块的高重现性和可靠性。

## 规格

- 传感技术：基于 MOx 的气体传感器，用于空气质量应用
- 气体检测：VOC 和 NOx 测量
- 接口：I2C 接口，数字输出信号
- 功耗：在 3.3 V 下低功耗 3.0 mA
- 工作温度范围：-40°C 至 +85°C
- 湿度范围：0% 至 100% RH（非冷凝）
- 响应时间：VOC &lt;10 秒，NOx &lt;60 秒
- 精度：VOC ±15%，NOx ±50 ppb（标准条件下）

## 应用

- 室内空气质量监测：SGP41 非常适合监测家庭、办公室、学校和其他室内环境的空气质量。
- 空气净化器：SGP41 可以集成到空气净化器中，检测并去除空气中的有害气体。
- 需求控制通风系统：SGP41 可用于需求控制通风系统，根据空气中污染物的水平调节通风率。
- 智能家居：SGP41 可以集成到智能家居系统中，提供室内空气质量的实时信息，并基于此信息触发相应操作。
- 工业应用：SGP41 可用于化工厂、炼油厂和制造设施等工业应用，监测室内空气质量并确保工人安全。
- 环境监测：SGP41 可用于环境监测，检测工厂、车辆和其他来源的 VOC 和 NOx 排放。

## 硬件概述

### 引脚图

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-SGP41/sgp41_hw.png" alt="pir" width={600} height="auto" /></p>


## 入门指南

:::note
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前先查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

### 与 Arduino 配合使用

#### 所需材料

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeeduino V4.3</th>
			<th>Grove Base Shield V2.0</th>
            <th>Grove - 智能空气质量传感器 (SGP41)</th>
		</tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-SGP41/1.jpg" style={{width:250, height:'auto'}}/></div></td>
        </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>








:::note
**1**. 请轻柔地插入 USB 线缆，否则可能会损坏端口。请使用内部有 4 根线的 USB 线缆，2 根线的线缆无法传输数据。如果您不确定手头的线缆规格，可以点击 [这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) 购买
    
**2**. 每个 Grove 模块在购买时都会附带一根 Grove 线缆。如果您丢失了 Grove 线缆，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买。
:::

- **步骤 1.** 将 Grove - 智能空气质量传感器 (SGP41) 连接到 Grove Base Shield 的 **I2C** 端口。

- **步骤 2.** 将 Grove - Base Shield 插入 Seeeduino。

- **步骤 3.** 通过 USB 线缆将 Seeeduino 连接到 PC。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/3.jpg" alt="pir" width={600} height="auto" /></p>


:::note
如果我们没有 Grove Base Shield，我们也可以直接将 Grove - 智能空气质量传感器 (SGP41) 连接到 Seeeduino，如下所示。
:::

| Seeeduino     | Grove-VOC and eCO2 Gas Sensor(SGP30) |
|---------------|-------------------------|
| 5V            | Red                     |
| GND           | Black                   |
| SDA           | White                   |
| SCL           | Yellow                  |

#### 软件

- **步骤 1.** 从 Github 下载依赖库。

    - **arduino-core 库**：

    <div class="github_container" style={{textAlign: 'center'}}>
        <a class="github_item" href="https://github.com/Sensirion/arduino-core" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
        </a>
    </div>

- **arduino-i2c-sgp41 库**:

    <div class="github_container" style={{textAlign: 'center'}}>
        <a class="github_item" href="https://github.com/Sensirion/arduino-i2c-sgp41" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
        </a>
    </div>

- **步骤 2.** 参考[如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library)为 Arduino 安装库。

- **步骤 3.** 正确下载并安装库后，您可以在 examples 文件夹中找到一个名为 `exampleUsage.ino` 的示例程序。该程序专为 SGP41 传感器设计。

```cpp
#include <Arduino.h>
#include <SensirionI2CSgp41.h>
#include <Wire.h>

SensirionI2CSgp41 sgp41;

// NOx 调节所需的时间（秒）
uint16_t conditioning_s = 10;

void setup() {

    Serial.begin(115200);
    while (!Serial) {
        delay(100);
    }

    Wire.begin();

    uint16_t error;
    char errorMessage[256];

    sgp41.begin(Wire);

    uint16_t serialNumber[3];
    uint8_t serialNumberSize = 3;

    error = sgp41.getSerialNumber(serialNumber, serialNumberSize);

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
    error = sgp41.executeSelfTest(testResult);
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
    uint16_t srawNox = 0;

    delay(1000);

    if (conditioning_s > 0) {
        // 在 NOx 调节期间（10秒）SRAW NOx 将保持为 0
        error = sgp41.executeConditioning(defaultRh, defaultT, srawVoc);
        conditioning_s--;
    } else {
        // 读取测量值
        error = sgp41.measureRawSignals(defaultRh, defaultT, srawVoc, srawNox);
    }

    if (error) {
        Serial.print("Error trying to execute measureRawSignals(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("SRAW_VOC:");
        Serial.print(srawVoc);
        Serial.print("\t");
        Serial.print("SRAW_NOx:");
        Serial.println(srawNox);
    }
}
```

- **步骤 4.** 上传演示代码。



- **步骤 5.** 点击**工具-> 串口监视器**打开 Arduino IDE 的**串口监视器**。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-SGP41/2.png" style={{width:700, height:'auto'}}/></div>

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-SGP41/AIR_QUALITY_SENSOR(SGP41)_sch&pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[ZIP]** [Grove - 智能空气质量传感器 (SGP41) 原理图和PCB](https://files.seeedstudio.com/wiki/Grove-SGP41/AIR_QUALITY_SENSOR(SGP41)_sch&pcb.zip)
- **[PDF]** [SGP41 数据手册](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/Sensirion_Gas_Sensors_SGP30_Datasheet_EN.pdf)

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