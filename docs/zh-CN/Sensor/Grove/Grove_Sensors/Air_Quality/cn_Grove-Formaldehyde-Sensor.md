---
description: Grove - 甲醛传感器
title: Grove - 甲醛传感器
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/GroveFormaldehydehardware.jpg
slug: /cn/Grove-Formaldehyde-Sensor
last_update:
  date: 3/7/2024
  author: Spencer Yan
---

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/101020972_Front-05.jpg"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Formaldehyde-Sensor-SFA30-p-5204.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>
<br />

Grove 甲醛传感器可以检测范围为 0~1000 ppb 的甲醛，具有低酒精交叉敏感性和高稳定性，使用寿命长达 6 年。内置的 RHT 传感器确保其在不同温度和湿度下保持良好性能，并通过 UART 和 I2C 接口传输数据。

## 特性

- 对酒精的低交叉敏感性
- 标准甲醛测量范围：0 ~ 1000 ppb
- 长期稳定性，使用寿命达 6 年
- 专利电化学单元，具有防干燥技术
- I2C/UART 接口，输出经过寿命校准
- 在不同温度和湿度下保持性能：通过 Sensirion RHT 传感器进行补偿

## 规格

|参数|值/范围
|---|---|
|供电电压范围|3.3V 或 5V
|测量范围|0 到 1,000 ppb
|响应时间|&lt;2 分钟
|检测限|&lt;20 ppb
|接口|I2C / UART
|甲醛精度|±20 ppb 或 ±测量值的 20%，以较大者为准

## 支持的平台

| Arduino| Raspberry |   |   |   |
|:------:|:---------:|---|---|---|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
上述支持的平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。无法为所有可能的 MCU 平台提供软件库或演示代码，因此用户需要自行编写软件库。
:::

## 入门指南

:::note
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

### 使用 Arduino

#### **硬件**

- **步骤 1.** 准备以下物品：

| Seeeduino V4.2 | Base Shield|  Grove-甲醛传感器|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/GroveFormaldehydehardware.jpg)|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|   [立即购买](https://www.seeedstudio.com/Grove-Formaldehyde-Sensor-SFA30-p-5204.html)    |

- **步骤 2.** 将 Grove-甲醛传感器上的按钮设置为 **"1"** 位置。

![](https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/hardware1.png)

- **步骤 3.** 将 Grove - Base Shield 插入 Seeeduino，并将 Grove-甲醛传感器连接到 Grove-Base Shield 的 **I²C** 接口。
- **步骤 4.** 通过 USB 数据线将 Seeeduino 连接到 PC。

![](https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/Arduous-link.jpg)

:::note
如果您没有 Grove Base Shield，仍然可以直接将 Grove-甲醛传感器连接到 Seeeduino，如下所示。
:::

| Seeeduino |  Grove-响度传感器 |
|-----------|-----------------|
| 5V        | 红色            |
| GND       | 黑色            |
| SDA       | 白色            |
| SCL       | 黄色            |

#### **软件**

- **步骤 1.** 下载 [Grove-甲醛传感器库](https://github.com/Sensirion/arduino-i2c-sfa3x) 以使用 Grove 甲醛传感器，并[安装](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library/)它。

- **步骤 2.** 打开 Arduino IDE。将以下代码复制到 Arduino IDE 并上传。如果您不知道如何上传代码，我们提供了关于[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)的指南。

:::tip
您也可以通过在库管理器中搜索 **Sensirion I2C SFA3X** 来直接下载库。
:::

```cpp
#include <Arduino.h>
#include <SensirionI2CSfa3x.h>
#include <Wire.h>

SensirionI2CSfa3x sfa3x;

void setup() {

    Serial.begin(115200);
    while (!Serial) {
        delay(100);
    }

    Wire.begin();

    uint16_t error;
    char errorMessage[256];

    sfa3x.begin(Wire);

    // 开始测量
    error = sfa3x.startContinuousMeasurement();
    if (error) {
        Serial.print("执行 startContinuousMeasurement() 时出错: ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    }
}

void loop() {
    uint16_t error;
    char errorMessage[256];

    delay(1000);
    int16_t hcho;
    int16_t humidity;
    int16_t temperature;
    error = sfa3x.readMeasuredValues(hcho, humidity, temperature);
    if (error) {
        Serial.print("执行 readMeasuredValues() 时出错: ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("甲醛浓度:");
        Serial.print(hcho / 5.0);
        Serial.print("\t");
        Serial.print("湿度:");
        Serial.print(humidity / 100.0);
        Serial.print("\t");
        Serial.print("温度:");
        Serial.println(temperature / 200.0);
    }
}
```

- **步骤 4.** 在此程序中，Seeeduino 可以实时监测甲醛气体浓度、空气湿度和温度数据。通过打开“串口监视器”，结果应如下所示：

![](https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/test.png)

### 使用 Raspberry Pi

#### **硬件**

- **步骤 1.** 准备以下物品：

| Raspberry Pi | Grove Base Hat for Raspberry Pi | Grove-甲醛传感器 |
|--------------|-------------------------------------|-----------------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/GroveFormaldehydehardware.jpg)|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[立即购买](https://www.seeedstudio.com/Grove-Formaldehyde-Sensor-SFA30-p-5204.html)|

- **步骤 2.** 将 Grove Base Hat for Raspberry Pi 插入 Raspberry Pi。
- **步骤 3.** 将 Grove-甲醛传感器连接到 Grove Base Hat for Raspberry Pi 的 **I²C** 接口。
- **步骤 4.** 通过 USB 数据线将 Raspberry Pi 连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/raspberry-link.jpg)

#### **软件**

- **步骤 1.** 按照 [设置软件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) 配置 Raspberry Pi 的开发环境。
- **步骤 2.** 下载 [Grove-甲醛传感器库](https://github.com/Sensirion/raspberry-pi-i2c-sfa3x/archive/refs/heads/master.zip) 并解压到 Raspberry Pi。

- **步骤 3.** 进入示例代码目录。以下命令可以监测甲醛浓度、湿度和温度。

```python
cd ~/raspberry-pi-i2c-sfa3x-master
make
./sfa3x_i2c_example_usage
```

:::提示
在本教程中，我们使用路径 **~/embedded-sfa3x-main/i2c** 而不是 **/home/pi/Desktop/embedded-sfa3x-main/i2c**，请确保步骤 2 和步骤 3 使用相同的路径。
:::

以下是 **sfa3x_i2c_example_usage.c** 的代码。

```cpp
#include <stdio.h>  // printf

#include "sensirion_common.h"
#include "sensirion_i2c_hal.h"
#include "sfa3x_i2c.h"

/**
 * 如果您的平台上没有控制台输出 (PRINTF)，请使用以下代码
 */
//#define printf(...)

int main(void) {
    int16_t error = 0;

    sensirion_i2c_hal_init();

    error = sfa3x_device_reset();
    if (error) {
        printf("重置设备时出错: %i\n", error);
        return -1;
    }

    uint8_t device_marking[42];
    error = sfa3x_get_device_marking(&device_marking[0], sizeof(device_marking));
    if (error) {
        printf("获取设备标记时出错: %i\n", error);
        return -1;
    }
    printf("设备标记: %s\n", device_marking);

    // 开始测量
    error = sfa3x_start_continuous_measurement();
    if (error) {
        printf("执行 sfa3x_start_continuous_measurement() 时出错: %i\n", error);
    }

    for (;;) {
        // 读取测量值

        int16_t hcho;
        int16_t humidity;
        int16_t temperature;

        sensirion_i2c_hal_sleep_usec(500000);

        error = sfa3x_read_measured_values(&hcho, &humidity, &temperature);

        if (error) {
            printf("执行 sfa3x_read_measured_values() 时出错: %i\n", error);
        } else {
            printf("测量结果:\n");
            printf("  甲醛浓度: %.1f\n", hcho / 5.0f);
            printf("  相对湿度: %.2f\n", humidity / 100.0f);
            printf("  温度: %.2f\n", temperature / 200.0f);
        }
    }

    error = sfa3x_stop_measurement();
    if (error) {
        printf("执行 sfa3x_stop_measurement() 时出错: %i\n", error);
    }

    return 0;
}

```

:::提示
如果一切正常，以下结果将显示如下：
:::

```shell
pi@raspberrypi:~/Downloads/embedded-sfa3x-main/i2c $ ./sfa3x_i2c_example_usage
设备标记: 211117825F073B80
测量结果:
  甲醛浓度: 0.0
  相对湿度: 70.19
  温度: 27.41
```

您可以通过简单地按 ++ctrl+c++ 退出此程序。

## 可升级为工业传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) 和 [S2100 数据记录仪](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供使用 SenseCAP 系列坚固耐用的 [工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) 扩展项目的可能性。

SenseCAP S210x 系列凭借 IP66 防护外壳、蓝牙配置、全球 LoRaWAN® 网络兼容性、内置 19 Ah 电池以及强大的 APP 支持，成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光照强度、CO2、EC 传感器以及一款 8 合 1 气象站。尝试最新的 SenseCAP S210x，助力您的下一个成功的工业项目。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>