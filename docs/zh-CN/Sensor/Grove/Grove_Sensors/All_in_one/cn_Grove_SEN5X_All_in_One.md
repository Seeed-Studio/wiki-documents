---
description: Grove SEN5X 一体化环境传感器
title: Grove SEN5X 一体化环境传感器
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove_SEN5X_All_in_One
sku: 101021014,101021013
last_update:
  date: 1/29/2023
  author: jianjing Huang
---

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/GroveAllin1/GroveAllin1overview.jpg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-All-in-one-Environmental-Sensor-SEN54-p-5374.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={4}> 立即购买 🖱️</font></span></strong>
    </a>
</div>

## 简介

Grove 一体化环境传感器 SEN54/SEN55 是一款集成的 Grove 环境传感器，能够输出 8 种数据信号，具有高精度感应能力，并可持续运行长达 10 年。它专为 HVAC（供暖、通风和空调）以及空气质量长期检测应用而设计。在本 Wiki 中，我们将介绍如何使用 Arduino 和 Raspberry Pi 工具来利用该传感器。

### 特性

- 全面的环境感应功能：支持 PM（颗粒物）、VOC（挥发性有机化合物）、RH（相对湿度）、Temp（温度）等 5 种环境数据信号的连续感应
- 单个驱动支持多达 7/8 种数据信号：通过 IIC 功能传输 4 种 PM 数据和 4 种主要环境信号
- 单线输出所有数据：Grove 系列简化连接，仅需一根 Grove 电缆即可连接传感器与单板
- 卓越的感应精度：校准全数字信号以输出
- 卓越的运行寿命：性能保持良好长达 10 年
- 三种模式可用于边缘部署：设置空闲模式和 RHT/气体测量模式以适应低成本应用，测量模式用于完整功能

## 硬件概览

## 入门指南

Grove 一体化环境传感器 SEN54/SEN55 继承了 Grove 系列的优良特性，可直接通过 Grove IIC 接口使用。

### 设备安装

使用 Grove 电缆连接 Grove 一体化环境传感器 SEN54/SEN55。

### 环境准备

由于我们在这里使用 Arduino 和 Raspberry Pi，因此需要在已安装的系统上运行模块：

- [Arduino](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library/)
- [Raspberry Pi](https://wiki.seeedstudio.com/cn/Raspberry_Pi_3_Model_B/)

## Arduino 库概览

:::tip
如果这是您第一次使用 Arduino，我们强烈建议您参考 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

使用 Arduino 时需要安装两个库：

- [arduino-i2c-sen5x](https://github.com/Sensirion/arduino-i2c-sen5x)（Grove 一体化环境传感器 SEN54/SEN55 的主要功能库）
- [arduino-core](https://github.com/Sensirion/arduino-core)（核心文件 / 依赖项）

### 功能

在开始开发代码之前，让我们先了解库中可用的功能。

- `Serial.begin(115200)` —— 上传过程完成后，通过工具菜单打开串行监视器或串行绘图仪以观察测量值。请注意，窗口中的波特率需设置为 115200。

### 安装

下载 ZIP 库后，打开 Arduino IDE，点击 **Sketch > Include Library > Add .ZIP Library**。选择您刚下载的 ZIP 文件，如果库安装正确，您将在通知窗口中看到 **Library added to your libraries**，这表示库已成功安装。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png"/></div>

## Arduino 示例

现在我们已经安装了库并了解了基本功能，让我们运行一些示例来测试 Grove 一体化环境传感器 SEN54/SEN55 的表现。

**步骤 1.** 硬件连接。

**步骤 2.** 您需要安装 Arduino 软件。

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></div></a></p>

**步骤 3.** 启动 Arduino 应用程序。

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

### 示例 1 检测 4 种 PM 和 4 个主要环境信号

此示例可以检测 4 种 PM（颗粒物）、VOC（挥发性有机化合物）、RH（相对湿度）、Temp（温度），并在监视器上显示，判断模块安装位置是否健康。

#### 所需材料

| Seeeduino V4.2 | 基础扩展板 | SEN54/SEN55 |
|----------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|<div align="center"><img width ="{210}" src="https://files.seeedstudio.com/wiki/GroveAllin1/GroveAllin1overview.jpg"/></div>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-All-in-one-Environmental-Sensor-SEN54-p-5374.html)|

```cpp

/*
 * I2C-Generator: 0.3.0
 * Yaml Version: 2.1.3
 * Template Version: 0.7.0-112-g190ecaa
 */
/*
 * 版权所有 (c) 2021, Sensirion AG
 * 保留所有权利。
 *
 * 允许以源代码和二进制形式重新分发和使用，无论是否经过修改，
 * 但需满足以下条件：
 *
 * * 源代码的重新分发必须保留上述版权声明、条件列表和免责声明。
 *
 * * 二进制形式的重新分发必须保留上述版权声明、条件列表和免责声明，
 *   并包含在随附的文档和/或其他材料中。
 *
 * * 未经 Sensirion AG 或其贡献者的明确书面许可，
 *   不得使用其名称来支持或推广基于此软件的产品。
 *
 * 本软件由版权持有人和贡献者“按原样”提供，
 * 不提供任何明示或暗示的保证，包括但不限于对适销性和特定用途适用性的暗示保证。
 * 在任何情况下，版权持有人或贡献者均不对因使用本软件而导致的任何直接、间接、
 * 偶然、特殊、惩罚性或后果性损害（包括但不限于采购替代商品或服务、使用损失、
 * 数据或利润损失或业务中断）承担责任，无论是基于合同、严格责任或侵权行为（包括疏忽或其他原因），
 * 即使已被告知可能发生此类损害。
 */

#include <Arduino.h>
#include <SensirionI2CSen5x.h>
#include <Wire.h>

// 使用的命令最多需要 48 字节。在某些 Arduino 上，默认缓冲区空间不足
#define MAXBUF_REQUIREMENT 48

#if (defined(I2C_BUFFER_LENGTH) &&                 \
     (I2C_BUFFER_LENGTH >= MAXBUF_REQUIREMENT)) || \
    (defined(BUFFER_LENGTH) && BUFFER_LENGTH >= MAXBUF_REQUIREMENT)
#define USE_PRODUCT_INFO
#endif

SensirionI2CSen5x sen5x;

void printModuleVersions() {
    uint16_t error;
    char errorMessage[256];

    unsigned char productName[32];
    uint8_t productNameSize = 32;

    error = sen5x.getProductName(productName, productNameSize);

    if (error) {
        Serial.print("执行 getProductName() 时出错：");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("产品名称：");
        Serial.println((char*)productName);
    }

    uint8_t firmwareMajor;
    uint8_t firmwareMinor;
    bool firmwareDebug;
    uint8_t hardwareMajor;
    uint8_t hardwareMinor;
    uint8_t protocolMajor;
    uint8_t protocolMinor;

    error = sen5x.getVersion(firmwareMajor, firmwareMinor, firmwareDebug,
                             hardwareMajor, hardwareMinor, protocolMajor,
                             protocolMinor);
    if (error) {
        Serial.print("执行 getVersion() 时出错：");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("固件版本：");
        Serial.print(firmwareMajor);
        Serial.print(".");
        Serial.print(firmwareMinor);
        Serial.print(", ");

        Serial.print("硬件版本：");
        Serial.print(hardwareMajor);
        Serial.print(".");
        Serial.println(hardwareMinor);
    }
}

void printSerialNumber() {
    uint16_t error;
    char errorMessage[256];
    unsigned char serialNumber[32];
    uint8_t serialNumberSize = 32;

    error = sen5x.getSerialNumber(serialNumber, serialNumberSize);
    if (error) {
        Serial.print("执行 getSerialNumber() 时出错：");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("序列号：");
        Serial.println((char*)serialNumber);
    }
}

void setup() {

    Serial.begin(115200);
    while (!Serial) {
        delay(100);
    }

    Wire.begin();

    sen5x.begin(Wire);

    uint16_t error;
    char errorMessage[256];
    error = sen5x.deviceReset();
    if (error) {
        Serial.print("执行 deviceReset() 时出错：");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    }

// 如果 I2C 缓冲区足够大，则打印 SEN55 模块信息
#ifdef USE_PRODUCT_INFO
    printSerialNumber();
    printModuleVersions();
#endif

    // 设置温度偏移（单位：摄氏度）
    // 注意：支持 SEN54 和 SEN55 传感器
    // 默认情况下，传感器的温度和湿度输出已针对模块的自加热进行了补偿。
    // 如果模块设计用于设备中，则可能需要调整温度补偿以适应热耦合变化和其他设备组件的自加热。
    //
    // 要实现最佳性能的指南，包括机械设计示例的参考，可以在 www.sensirion.com 上找到
    // 应用说明 “SEN5x – 温度补偿说明”。
    // 请参考这些应用说明以获取有关 `setTemperatureOffsetParameters`、
    // `setWarmStartParameter` 和 `setRhtAccelerationMode` 中使用的高级补偿设置的更多信息。
    //
    // 调整 tempOffset 以补偿超过 SEN 模块自加热的额外温度偏移。
    float tempOffset = 0.0;
    error = sen5x.setTemperatureOffsetSimple(tempOffset);
    if (error) {
        Serial.print("执行 setTemperatureOffsetSimple() 时出错：");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("温度偏移设置为 ");
        Serial.print(tempOffset);
        Serial.println(" 摄氏度（仅适用于 SEN54/SEN55）");
    }

    // 开始测量
    error = sen5x.startMeasurement();
    if (error) {
        Serial.print("执行 startMeasurement() 时出错：");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    }
}

void loop() {
    uint16_t error;
    char errorMessage[256];

    delay(1000);

    // 读取测量值
    float massConcentrationPm1p0;
    float massConcentrationPm2p5;
    float massConcentrationPm4p0;
    float massConcentrationPm10p0;
    float ambientHumidity;
    float ambientTemperature;
    float vocIndex;
    float noxIndex;

    error = sen5x.readMeasuredValues(
        massConcentrationPm1p0, massConcentrationPm2p5, massConcentrationPm4p0,
        massConcentrationPm10p0, ambientHumidity, ambientTemperature, vocIndex,
        noxIndex);

    if (error) {
        Serial.print("执行 readMeasuredValues() 时出错：");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("PM1.0 质量浓度：");
        Serial.print(massConcentrationPm1p0);
        Serial.print("\t");
        Serial.print("PM2.5 质量浓度：");
        Serial.print(massConcentrationPm2p5);
        Serial.print("\t");
        Serial.print("PM4.0 质量浓度：");
        Serial.print(massConcentrationPm4p0);
        Serial.print("\t");
        Serial.print("PM10 质量浓度：");
        Serial.print(massConcentrationPm10p0);
        Serial.print("\t");
        Serial.print("环境湿度：");
        if (isnan(ambientHumidity)) {
            Serial.print("不可用");
        } else {
            Serial.print(ambientHumidity);
        }
        Serial.print("\t");
        Serial.print("环境温度：");
        if (isnan(ambientTemperature)) {
            Serial.print("不可用");
        } else {
            Serial.print(ambientTemperature);
        }
        Serial.print("\t");
        Serial.print("VOC 指数：");
        if (isnan(vocIndex)) {
            Serial.print("不可用");
        } else {
            Serial.print(vocIndex);
        }
        Serial.print("\t");
        Serial.print("NOx 指数：");
        if (isnan(noxIndex)) {
            Serial.println("不可用");
        } else {
            Serial.println(noxIndex);
        }
    }
}
```

#### **结果**

上传代码后，我们可以以 115200 波特率打开串口监视器，它应该显示所有八种类型的信号。

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/GroveAllin1/GroveAllin12.png"/></div>

## Python 包概述

:::提示
如果这是您第一次使用 Raspberry Pi，我们强烈建议您参考 [Raspberry Pi 入门指南](https://tinkergen-helper.yuque.com/tinkergen_helper/slgacm/tn0wlt)。
:::

此包支持 SEN50、SEN54 和 SEN55 传感器，使您能够在使用 Raspberry Pi 时检测环境数据。

<p style={{textAlign: 'center'}}><a href="https://github.com/Sensirion/raspberry-pi-i2c-sen5x" target="_blank"><div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></div></a></p>

### 功能

## Raspberry Pi 示例

现在我们已经安装了库并了解了基本功能，让我们运行一些示例来测试 Grove-一体化环境传感器 SEN54/SEN55 的表现。

**步骤 1.** 硬件连接。

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/GroveAllin1/GroveAllin13.png"/></div>

**步骤 2.** [在 Raspberry Pi 上安装 Raspberry Pi OS](https://projects.raspberrypi.org/en/projects/raspberry-pi-setting-up)。

**步骤 3.** [在 raspi-config 中启用 I2C 接口](https://www.raspberrypi.org/documentation/configuration/raspi-config.md)。

**步骤 4.** 从 [Sensirion Github 页面](https://github.com/Sensirion/raspberry-pi-i2c-sen5x) 下载驱动程序并在 Raspberry Pi 上解压 `.zip` 文件。

### 示例 1 使用 Raspberry Pi 应用功能示例

此示例将帮助您感知所在区域的各种环境数据。

#### 所需材料

|              |              |
|--------------|--------------|
|<div align="center"><img width ="{210}" src="https://files.seeedstudio.com/wiki/GroveAllin1/GroveAllin14.png"/></div>| <div align="center"><img width ="{210}" src="https://files.seeedstudio.com/wiki/GroveAllin1/GroveAllin1overview.jpg"/></div>
|[**立即购买**](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html)|[**立即购买**](https://www.seeedstudio.com/Grove-All-in-one-Environmental-Sensor-SEN55-p-5373.html)|

编译驱动程序：

**步骤 1.** 打开终端。

**步骤 2.** 导航到驱动程序目录。例如：**cd ~/raspberry-pi-i2c-sen5x**。

**步骤 3.** 运行 `make` 命令编译驱动程序。

**步骤 4.** 在编译驱动程序的同一目录下运行 `./sen5x_i2c_example_usage`。

```cpp
//sen5x_i2c_example_usage.c


/*
 * I2C-Generator: 0.3.0
 * Yaml Version: 2.1.3
 * Template Version: 0.7.0-109-gb259776
 */
/*
 * Copyright (c) 2021, Sensirion AG
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 * * Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 * * Neither the name of Sensirion AG nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

#include <math.h>   // NAN
#include <stdio.h>  // printf

#include "sen5x_i2c.h"
#include "sensirion_common.h"
#include "sensirion_i2c_hal.h"

/*
 * TO USE CONSOLE OUTPUT (PRINTF) YOU MAY NEED TO ADAPT THE INCLUDE ABOVE OR
 * DEFINE IT ACCORDING TO YOUR PLATFORM:
 * #define printf(...)
 */

int main(void) {
    int16_t error = 0;

    sensirion_i2c_hal_init();

    error = sen5x_device_reset();
    if (error) {
        printf("Error executing sen5x_device_reset(): %i\n", error);
    }

    unsigned char serial_number[32];
    uint8_t serial_number_size = 32;
    error = sen5x_get_serial_number(serial_number, serial_number_size);
    if (error) {
        printf("Error executing sen5x_get_serial_number(): %i\n", error);
    } else {
        printf("Serial number: %s\n", serial_number);
    }

    unsigned char product_name[32];
    uint8_t product_name_size = 32;
    error = sen5x_get_product_name(product_name, product_name_size);
    if (error) {
        printf("Error executing sen5x_get_product_name(): %i\n", error);
    } else {
        printf("Product name: %s\n", product_name);
    }

    uint8_t firmware_major;
    uint8_t firmware_minor;
    bool firmware_debug;
    uint8_t hardware_major;
    uint8_t hardware_minor;
    uint8_t protocol_major;
    uint8_t protocol_minor;
    error = sen5x_get_version(&firmware_major, &firmware_minor, &firmware_debug,
                              &hardware_major, &hardware_minor, &protocol_major,
                              &protocol_minor);
    if (error) {
        printf("Error executing sen5x_get_version(): %i\n", error);
    } else {
        printf("Firmware: %u.%u, Hardware: %u.%u\n", firmware_major,
               firmware_minor, hardware_major, hardware_minor);
    }

    // 设置温度偏移（单位：摄氏度）
    // 注意：仅支持 SEN54 和 SEN55 传感器
    // 默认情况下，传感器的温度和湿度输出已针对模块的自加热进行了补偿。
    // 如果模块被设计到设备中，温度补偿可能需要调整以适应热耦合变化和其他设备组件的自加热。
    //
    // 要实现最佳性能的指南，包括机械设计示例的参考，可以在 www.sensirion.com 上的应用说明
    // “SEN5x – 温度补偿说明”中找到。
    // 请参考这些应用说明以获取有关高级补偿设置的更多信息，
    // 包括 `sen5x_set_temperature_offset_parameters`、
    // `sen5x_set_warm_start_parameter` 和 `sen5x_set_rht_acceleration_mode`。
    //
    // 调整 temp_offset 以补偿超过 SEN 模块自加热的额外温度偏移。
    float temp_offset = 0.0f;
    error = sen5x_set_temperature_offset_simple(temp_offset);
    if (error) {
        printf("Error executing sen5x_set_temperature_offset_simple(): %i\n",
               error);
    } else {
        printf("Temperature Offset set to %.2f °C (SEN54/SEN55 only)\n",
               temp_offset);
    }

    // 开始测量
    error = sen5x_start_measurement();

    if (error) {
        printf("Error executing sen5x_start_measurement(): %i\n", error);
    }

    for (int i = 0; i < 600; i++) {
        // 读取测量值
        sensirion_i2c_hal_sleep_usec(1000000);

        float mass_concentration_pm1p0;
        float mass_concentration_pm2p5;
        float mass_concentration_pm4p0;
        float mass_concentration_pm10p0;
        float ambient_humidity;
        float ambient_temperature;
        float voc_index;
        float nox_index;

        error = sen5x_read_measured_values(
            &mass_concentration_pm1p0, &mass_concentration_pm2p5,
            &mass_concentration_pm4p0, &mass_concentration_pm10p0,
            &ambient_humidity, &ambient_temperature, &voc_index, &nox_index);
        if (error) {
            printf("Error executing sen5x_read_measured_values(): %i\n", error);
        } else {
            printf("Mass concentration pm1p0: %.1f µg/m³\n",
                   mass_concentration_pm1p0);
            printf("Mass concentration pm2p5: %.1f µg/m³\n",
                   mass_concentration_pm2p5);
            printf("Mass concentration pm4p0: %.1f µg/m³\n",
                   mass_concentration_pm4p0);
            printf("Mass concentration pm10p0: %.1f µg/m³\n",
                   mass_concentration_pm10p0);
            if (isnan(ambient_humidity)) {
                printf("Ambient humidity: n/a\n");
            } else {
                printf("Ambient humidity: %.1f %%RH\n", ambient_humidity);
            }
            if (isnan(ambient_temperature)) {
                printf("Ambient temperature: n/a\n");
            } else {
                printf("Ambient temperature: %.1f °C\n", ambient_temperature);
            }
            if (isnan(voc_index)) {
                printf("Voc index: n/a\n");
            } else {
                printf("Voc index: %.1f\n", voc_index);
            }
            if (isnan(nox_index)) {
                printf("Nox index: n/a\n");
            } else {
                printf("Nox index: %.1f\n", nox_index);
            }
        }
    }

    error = sen5x_stop_measurement();
    if (error) {
        printf("Error executing sen5x_stop_measurement(): %i\n", error);
    }

    return 0;
}

```

#### **结果**

输出应如下所示：

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/GroveAllin1/output.png"/></div>

## 资源

- [STM32的库](https://github.com/Sensirion/embedded-i2c-sen5x)

## 技术支持与产品讨论

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 可升级为工业传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)和 [S2100 数据记录仪](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供使用 SenseCAP 系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

SenseCAP S210x 系列传感器具有 IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及强大的 APP 支持，是工业应用的最佳选择。该系列包括用于土壤湿度、空气温度和湿度、光强度、二氧化碳、电导率以及 8 合 1 气象站的传感器。尝试最新的 SenseCAP S210x，助力您的下一个成功的工业项目。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width ="{800}" src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png"/></a></div>
