---
description: 本文重点介绍 Grove SGP41 传感器的使用。
title: 基于湿度和温度的 SGP41（原始）测量校正
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/grove-sgp41-with-aht20
last_update:
  date: 10/16/2023
  author: Hans Bausewein
---

# 基于湿度和温度的 SGP41（原始）测量校正

## 概述（我如何开始这个项目）

首先我阅读了 [Grove - 智能空气质量传感器（SGP41）](https://wiki.seeedstudio.com/cn/grove-smart-air-quality-sensor-sgp41) 和 [Grove - AHT20 I2C 工业级温湿度传感器](https://wiki.seeedstudio.com/cn/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor/) 的文档。

根据 [SGP41 数据手册（PDF）](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/Sensirion_Gas_Sensors_SGP30_Datasheet_EN.pdf) 第 3.2 节（原始信号测量），SGP41 测量依赖于湿度和温度，因此我们需要应用校正来获得一致的数据：从 AHT20（或其他传感器）读取相对湿度和温度，计算刻度值并将其传递给 *sgp41_measure_raw_signals* 函数。

### 理论测试

第 15 页的表 11（I2C 测量命令描述）描述了计算刻度值的公式：

```
RHticks = RH% × 65535 / 100
Tticks = (T°C + 45) × 65535 / 175
```

使用默认值 25°C 和 50% 相对湿度进行验证：

```
50 × 65535 / 100 = 32767.5 = 0x8000 (十六进制，向上取整)
(25 + 45) × 65535 / 175 = 26214 = 0x6666 (十六进制) 
```

结果与[Grove - 智能空气质量传感器 (SGP41)](https://wiki.seeedstudio.com/cn/grove-smart-air-quality-sensor-sgp41)使用的程序中的常量相匹配，并在[SGP41数据手册 (PDF)](https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/Sensirion_Gas_Sensors_SGP30_Datasheet_EN.pdf)的表11中定义。

在c语言中相同：

```cpp
        int h_ticks = humi * 0xFFFF;
        int t_ticks = (temp + 45) * 0xFFFF / 175;
```

注意程序中的 'humi' 是一个 0 到 1 之间的值，所以移除了除以 100 和之前的乘法运算。

## 硬件准备

我使用 Seeeduino Nano 作为控制板，并使用 Grove - 智能空气质量传感器 (SGP41) 和 Grove - AHT20 I2C 工业级温湿度传感器来实现这个功能。


<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeeduino Nano</th>
			<th>Grove - AHT20 温湿度传感器</th>
            <th>Grove - 智能空气质量传感器 (SGP41)</th>
			<th>Grove - 分支线缆</th>
		</tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-Nano/img/seeeduino-Nano-wiki.jpg" style={{width:185, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-AHT20_I2C_Industrial_Grade_Temperature_and_Humidity_Sensor/101990644_4_.png" style={{width:185, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-SGP41/1.jpg" style={{width:185, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/How_To_Choose_The_Right_Cable/img/Grove-Branch_Cable-5PCs_pack-.jpg" style={{width:185, height:'auto'}}/></div></td>
        </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-Nano-p-4111.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"3"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-AHT20-I2C-Industrial-grade-temperature-and-humidity-sensor-p-4497.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"3"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"3"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Branch-Cable-5PCs-pack.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"3"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## 软件准备

<div class="table-center">
  <table align="center">
    <tr>
        <th>Arduino IDE</th>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.arduino.cc/en/software" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> 下载 ⏬</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

需要多个库文件，将在下一步中介绍。

## 开始使用

:::note
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前先查看[Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

### 1. 连接 Arduino Nano

:::note
请轻柔地插入 USB 线缆，否则可能会损坏端口。请使用内部有 4 根线的 USB 线缆，2 根线的线缆无法传输数据。如果您不确定手头的线缆规格，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买
:::

- **步骤 1.** 将 Grove 分支线缆连接到 Seeeduino Nano 的 **I2C** 端口。

- **步骤 2.** 将 Grove 分支线缆插入 I2C Grove AHT20 传感器模块。

- **步骤 3.** 将 Grove 分支线缆插入 I2C Grove SGP41 传感器模块。

- **步骤 4.** 通过 USB 线缆将 Seeeduino 连接到 PC。

![Seeeduino_SGP41_AHT20](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/seeeduino_nano-SGP41-correction/1.jpg)

### 2. 下载所需库文件并添加到 Arduino

- **步骤 1.** 从 Github 下载依赖库。

    - **arduino-core 库**：

    <div class="github_container" style={{textAlign: 'center'}}>
        <a class="github_item" href="https://github.com/Sensirion/arduino-core" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
        </a>
    </div>

    - **arduino-i2c-sgp41 库**：

    <div class="github_container" style={{textAlign: 'center'}}>
        <a class="github_item" href="https://github.com/Sensirion/arduino-i2c-sgp41" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
        </a>
    </div>

   - **Seeed_Arduino_AHT20** 库： 

    <div class="github_container" style={{textAlign: 'center'}}>
        <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_AHT20" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
        </a>
    </div>

- **步骤 2.** 参考[如何安装库文件](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library)为 Arduino 安装库文件。

- **步骤 3.** 正确下载并安装库文件后，您可以上传下面的代码，这是 [SGP41](https://wiki.seeedstudio.com/cn/grove-smart-air-quality-sensor-sgp41#software) 和 [AHT20](https://wiki.seeedstudio.com/cn/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor//#software-code) 软件的组合，并添加了介绍中描述的公式。

### 3. 上传代码并检查结果

- **步骤 1.** 上传演示代码。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

```cpp
// GROVE-AHT20+SGP41 的 ARDUINO 演示程序
//
#include <Wire.h>
#include "AHT20.h"
#include <Arduino.h>
#include <SensirionI2CSgp41.h>

SensirionI2CSgp41 sgp41;

// NOx 调节所需的时间（秒）
uint16_t conditioning_s = 10;

AHT20 AHT;

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
        Serial.print("尝试执行 getSerialNumber() 时出错: ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("序列号:");
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
        Serial.print("尝试执行 executeSelfTest() 时出错: ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else if (testResult != 0xD400) {
        Serial.print("executeSelfTest 失败，错误代码: ");
        Serial.println(testResult);
    }
    AHT.begin();
}

uint16_t read_sgp41(uint16_t rh, uint16_t t) {
    uint16_t error;
    char errorMessage[256];
    uint16_t srawVoc = 0;
    uint16_t srawNox = 0;

    delay(1000);

    if (conditioning_s > 0) {
        // 在 NOx 调节期间（10秒）SRAW NOx 将保持为 0
        error = sgp41.executeConditioning(rh, t, srawVoc);
        conditioning_s--;
    } else {
        // 读取测量值
        error = sgp41.measureRawSignals(rh, t, srawVoc, srawNox);
    }

    if (error) {
        Serial.print("尝试执行 measureRawSignals() 时出错: ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("RH ticks: ");
        Serial.print(rh);
        Serial.print("\t");
        Serial.print("T ticks: ");
        Serial.print(t);
        Serial.print("\t");
        Serial.print("SRAW_VOC: ");
        Serial.print(srawVoc);
        Serial.print("\t");
        Serial.print("SRAW_NOx: ");
        Serial.println(srawNox);
    }
    return error;
}

void loop()
{
    float humi, temp;
    
    int ret = AHT.getSensor(&humi, &temp);
    
    if(ret)     // 获取数据成功
    {
        Serial.print("湿度: ");
        Serial.print(humi*100);
        Serial.print("%\t 温度: ");
        Serial.print(temp);
        Serial.print("\t");
        // T-ticks = (T/°C + 45) × 65535 / 175
        // H-ticks = RH/% × 65535 / 100
        int h_ticks = humi * 0xFFFF;
        int t_ticks = (temp + 45) * 0xFFFF / 175;
        read_sgp41(h_ticks, t_ticks);
    }
    else        // 获取数据失败
    {
        Serial.println("从 AHT20 获取数据失败");
    }
    
    delay(100);
}

// 文件结束
```

- **步骤 2.** 点击 **工具-> 串口监视器** 打开 Arduino IDE 的**串口监视器**。

![串口控制台输出](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/seeeduino_nano-SGP41-correction/2.jpg)

请注意，由于调节过程，前十个 SRAW_NOx 值为零。

## 资源

- [SGP41](https://wiki.seeedstudio.com/cn/grove-smart-air-quality-sensor-sgp41#resources)
- [AHT20](https://wiki.seeedstudio.com/cn/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor/#resources)

## ✨ 贡献者项目

- 此项目由 Seeed Studio [贡献者项目](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)支持。
- 感谢 [Hans 的努力](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35179519)，您的工作将被[展示](https://wiki.seeedstudio.com/cn/Honorary-Contributors/)。

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