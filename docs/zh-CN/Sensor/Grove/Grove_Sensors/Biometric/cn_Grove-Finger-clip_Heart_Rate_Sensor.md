---
description: Grove - 指夹式心率传感器
title: Grove - 指夹式心率传感器
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Finger-clip_Heart_Rate_Sensor
last_update:
  date: 1/6/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Grove-Finger-clip_Heart_Rate_Sensor.jpg" /></div>

Grove - 指夹式心率传感器基于PAH8001EI-2G，这是一款高性能、低功耗的CMOS工艺光学传感器，集成了绿色LED和DSP，用作心率检测(HRD)传感器。该模块基于光学技术，测量人体血管中血液流动的变化。低功耗和灵活的省电模式使其适用于可穿戴设备。由于心率传感器芯片需要高处理速度来处理心率数据算法()，该模块集成了STM32，预留的SWD接口允许用户重新编程STM32。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Finger-clip-Heart-Rate-Sensor-p-2425.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 规格参数

---

* 超低功耗，无触摸运动时的省电模式

* 灵活的睡眠速率控制

* 集成STM32F103

* I2C接口

* 心率传感器区域仅3.0 x 4.7mm

* 预留SWD接口

* 工作温度：-20 ~ +60℃

## 接口功能

---
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Finger-clip_Heart_Rate_Sensor_TOP.jpg" /></div>
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Finger-clip_Heart_Rate_Sensor_Bottom.jpg" /></div>

* 1：Grove接口

* 2：预留的SWD接口，用于STM32编程

* 3：心率传感器

## 使用方法

---
在这里，我们将提供一个示例来展示如何使用这个传感器。

### 硬件安装

使用Grove线缆将传感器连接到Seeeduino的I2C端口。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Finger-clip_Heart_Rate_Sensor_Connect.jpg" /></div>

### 软件部分

#### 使用Arduino

**硬件串口**

将以下代码复制到Arduino的新草图中并上传草图，然后您可以从串口监视器获取心率。
用手指触摸传感器后，可能需要大约一分钟才能获得有效的心率。

```cpp
#include <Wire.h>
void setup() {
    Serial.begin(9600);
    Serial.println("heart rate sensor:");
    Wire.begin();
}
void loop() {
    Wire.requestFrom(0xA0 >> 1, 1);    // request 1 bytes from slave device
    while(Wire.available()) {          // slave may send less than requested
        unsigned char c = Wire.read();   // receive heart rate value (a byte)
        Serial.println(c, DEC);         // print heart rate value
    }
    delay(500);
}
```

**软件串口**

Arduino的标准I2C库是Wire库。当I2C引脚SDA/SCL已经用于其他目的时，该库无法工作。因此您可以使用SoftwareI2C。您可以将SCL连接到D2，SDA连接到D3。请下载[SoftI2CMaster库](https://github.com/felias-fogg/SoftI2CMaster)并按照[如何安装arduino库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library/)来设置库。将以下代码复制到Arduino的新草图中并上传草图，然后您可以从串口监视器获取心率。
用手指触摸传感器后，可能需要大约一分钟才能获得有效的心率。

```cpp
#define SDA_PORT PORTD
#define SDA_PIN 3
#define SCL_PORT PORTD
#define SCL_PIN 2
#include <SoftI2CMaster.h>
#include <SoftWire.h>
SoftWire Wire = SoftWire();

void setup() {
    Serial.begin(9600);
    Serial.println("heart rate sensor:");
    Wire.begin();
}
void loop() {
    Wire.requestFrom(0xA0 >> 1, 1);    // request 1 bytes from slave device
    while(Wire.available()) {          // slave may send less than requested
        unsigned char c = Wire.read();   // receive heart rate value (a byte)
        Serial.println(c, DEC);         // print heart rate value
    }
    delay(500);
}
```

#### 使用Mbed

从I2C设备0xA0（8位地址）读取一个字节，这就是心率值。

```cpp
#include "mbed.h"

I2C i2c(I2C_SDA, I2C_SCL);
const int addr = 0xA0;

int main() {
    char heart_rate;
    while (1) {
        i2c.read(addr, &heart_rate, 1);
        printf("heart rate: = %d\r\n", heart_rate);
    }
}
```

#### 升级固件

我们可以通过心率传感器的引导加载程序升级其固件。

* 引导加载程序位于0x08000000 - 0x08002000
* 应用程序位于0x08002000 - 0x08020000

##### 硬件连接

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Firmware_Connection.jpg" /></div>

* 需要[USB转串口适配器](https://www.seeedstudio.com/CH340G-USB-to-Serial-%28TTL%29-Module%26Adapter-p-2359.html)
* UART（Grove连接器支持I2C和UART），升级固件时，Grove接口运行在UART模式。

| Grove-指夹式心率传感器 | USB转串口(TTL)模块&适配器 |
|-------------------------------------|------------------------------------|
| VCC                                 | VCC                                |
| GND                                 | GND                                |
| SDA                                 | TX                                 |
| SCL                                 | RX                                 |

##### 软件

* 下载[Tera Term](https://ttssh2.osdn.jp/index.html.en)软件
* 设置UART波特率为115200

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/BaudRate_Setting.png" /></div>

* 下载[固件](ttps://github.com/SeeedDocument/Grove-Finger-clip_Heart_Rate_Sensor/raw/master/res/Grove-Finger-clip_Heart_Rate_Sensor_bin.zip)

* 选择 Grove - Finger-clip Heart Rate Sensor.bin

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Select_firmware.png" /></div>

* 将固件下载到 Grove-Finger-clip_Heart_Rate_Sensor

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Firmware_download.png" /></div>

* 固件下载成功

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Finish_Downloading.png" /></div>

:::note
Grove - Finger-clip Heart Rate Sensor 提供心率测量。但是，它不是医疗设备。要在手腕、手指或手掌上使用心率检测传感器，您必须：
:::

* 将传感器紧固，使其与皮肤紧密接触，并在测量时保持稳定（无运动），以获得准确的心率。如果传感器与皮肤接触不良或在测量时有剧烈运动，心率将无法正确测量。

* 传感器的性能在血流量较大时得到优化。在寒冷的日子里或用户血液循环不良（例如：手冷、手指冷和脚冷）时，由于测量位置的血流量较低，传感器性能（心率准确性）可能会受到影响。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/res/Grove-Finger-clip_Heart_Rate_Sensor_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

---

* [Grove - Finger-clip Heart Rate Sensor eagle 文件](https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/res/Grove-Finger-clip_Heart_Rate_Sensor_v1.0_sch_pcb.zip)

* [Grove - Finger-clip Heart Rate Sensor bin 文件](https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/res/Grove-Finger-clip_Heart_Rate_Sensor_bin.zip)

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