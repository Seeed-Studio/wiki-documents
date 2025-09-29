---
description: Grove - 电流传感器
title: Grove - 电流传感器
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Electricity_Sensor
last_update:
  date: 1/9/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/img/Twig-Electricity-Sensor.jpg" /></div>

电流传感器模块是 Grove 系列的一员。它基于 TA12-200 电流互感器，可以将大幅度的交流电转换为小幅度的电流。您可以使用它测试最大 5A 的交流电。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Electricity-Sensor-p-777.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

## 特性

- Grove 兼容接口
- 最大 5A 输入
- 高精度
- 小尺寸

:::tip
有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 应用场景

- 交流电测量
- 设备状态监控

## 规格

### 关键规格

| **项目**    | **最小值**             |
|-------------|------------------------|
| PCB 尺寸    | 2.0cm\*4.0cm           |
| 接口        | 2.0mm 间距针头         |
| IO 结构     | SIG,NC,NC,GND          |
| RoHS        | 是                     |

### 电子特性

| **项目**             | **最小值** | **标准值** | **最大值** | **单位**  |
|----------------------|------------|------------|------------|-----------|
| 转换比               | -          | 2000:1     | -          | -         |
| 输入电流             | 0          | -          | 5          | A         |
| 输出电流             | 0          | -          | 2.5        | mA        |
| 采样电阻             | -          | 800        | -          | Ω         |
| 采样电压             | 0          | -          | 2          | V         |
| 工作频率             | 20         | -          | 20K        | HZ        |
| 非线性比例           | -          | -          | 0.2%       | -         |
| 相位偏移             | -          | -          | 5'         | -         |
| 工作温度             | -55        | -          | 85         | ℃         |
| 绝缘强度             | -          | 6          | -          | KVAC/1min |

## 硬件概览

<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/img/dimensions.jpg" /></div>

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width="1000" src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上述提到的支持平台仅表示模块的软件或理论兼容性。我们通常仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

## 入门指南

### 使用 Arduino

以下示例代码演示了一个简单的应用，用于测量交流电压的幅值。SIG 引脚将根据被测交流电输出一个交流电压。您可以使用 ADC 测量该值。

#### 硬件

- **步骤 1.** 准备以下物品：

| Seeeduino V4.2 | Base Shield | Grove-Electricity_Sensor |
|----------------|-------------|-----------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/img/45d_small.jpg" /></div>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-Electricity-Sensor-p-777.html)|

- **步骤 2.** 将 Grove-Electricity_Sensor 连接到 Grove-Base Shield 的 **A0** 端口。
- **步骤 3.** 将 Grove-Base Shield 插入 Seeeduino。
- **步骤 4.** 使用 USB 数据线将 Seeeduino 连接到 PC。

<!--链接-->
![with_ardu](https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/img/with_ardu.jpg)

:::note
如果没有 Grove Base Shield，也可以直接将此模块连接到 Seeeduino，如下所示。
:::

| Seeeduino       | Grove-Electricity_Sensor |
|-----------------|-----------------------------|
| 5V              | 红色                       |
| GND             | 黑色                       |
| 未连接          | 白色                       |
| A0              | 黄色                       |

#### 软件

**步骤 1.** 复制以下代码并将其烧录到控制器板中，然后上传代码。

```c
/****************************************************************************/
//  功能：测量交流电的幅值电流和正弦交流电的有效电流。
//  硬件：Grove - Electricity Sensor        
//  日期：2013年1月19日
//  作者：www.seeedstudio.com
#define ELECTRICITY_SENSOR A0 // 传感器连接的模拟输入引脚

float amplitude_current;               // 幅值电流
float effective_value;                 // 有效电流

void setup()
{
    Serial.begin(9600);
    pins_init();
}
void loop()
{
    int sensor_max;
    sensor_max = getMaxValue();
    Serial.print("sensor_max = ");
    Serial.println(sensor_max);
    // 传感器的 Grove 接口上的 VCC 为 5V
    amplitude_current = (float)sensor_max / 1024 * 5 / 800 * 2000000;
    effective_value = amplitude_current / 1.414; // 最小电流 = 1 / 1024 * 5 / 800 * 2000000 / 1.414 = 8.6(mA)
                                                 // 仅适用于正弦交流电
    Serial.println("电流的幅值是（单位：mA）");
    Serial.println(amplitude_current, 1); // 小数点后保留一位
    Serial.println("电流的有效值是（单位：mA）");
    Serial.println(effective_value, 1);
}
void pins_init()
{
    pinMode(ELECTRICITY_SENSOR, INPUT);
}
/* 功能：采样 1000ms 并从 SIG 引脚获取最大值 */
int getMaxValue()
{
    int sensorValue;             // 从传感器读取的值
    int sensorMax = 0;
    uint32_t start_time = millis();
    while ((millis() - start_time) < 1000) // 采样 1000ms
    {
        sensorValue = analogRead(ELECTRICITY_SENSOR);
        if (sensorValue > sensorMax)
        {
            /* 记录传感器的最大值 */
            sensorMax = sensorValue;
        }
    }
    return sensorMax;
}
```

:::note
代码可以检测的最小有效电流可以通过以下公式计算：  
最小电流 = 1 / 1024 * 5 / 800 * 2000000 / 1.414 = 8.6(mA)。
:::

- **步骤 2.** 打开串口监视器，结果如下所示：

![](https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/img/ardu_result.jpg)

### 使用 Raspberry Pi

#### 硬件

- **步骤 1.** 准备以下物品：

| Raspberry Pi | GrovePi_Plus | Grove-Electricity_Sensor |
|--------------|--------------|-----------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/img/45d_small.jpg" /></div>|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[立即购买](https://www.seeedstudio.com/Grove-Electricity-Sensor-p-777.html)|

- **步骤 2.** 将 GrovePi_Plus 插入 Raspberry Pi。
- **步骤 3.** 将 Grove-Electricity_Sensor 连接到 GrovePi_Plus 的 **A0** 端口。
- **步骤 4.** 使用 USB 数据线将 Raspberry Pi 连接到 PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/img/with_rpi.jpg" /></div>

#### 软件

- **步骤 1.** 按照 [设置软件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) 配置开发环境。
- **步骤 2.** Git 克隆 Github 仓库。

```bash
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

- **步骤 3.** 执行以下命令以使用此传感器：

```bash
cd ~/GrovePi/Software/Python
python grove_electricity_sensor.py
```

以下是示例代码：

```python
#!/usr/bin/env python
#
# GrovePi 示例代码，用于使用 Grove 电流传感器 (https://www.seeedstudio.com/wiki/Grove_-_Electricity_Sensor)
#
# GrovePi 将 Raspberry Pi 与 Grove 传感器连接。您可以在此了解更多关于 GrovePi 的信息：http://www.dexterindustries.com/GrovePi
#
# 对此示例有疑问？请在论坛提问：http://forum.dexterindustries.com/c/grovepi
#
'''
## 许可证
MIT 许可证 (MIT)
GrovePi for the Raspberry Pi: 一个开源平台，用于将 Grove 传感器连接到 Raspberry Pi。
版权所有 (C) 2017 Dexter Industries
特此免费授予任何获得本软件及相关文档文件副本的人使用本软件的权利，包括但不限于使用、复制、修改、合并、发布、分发、再许可和/或销售本软件的副本，并允许获得本软件的人这样做，条件如下：
上述版权声明和本许可声明应包含在本软件的所有副本或重要部分中。
本软件按“原样”提供，不附带任何形式的明示或暗示担保，包括但不限于适销性、适用性和非侵权性。在任何情况下，作者或版权持有人均不对因本软件或使用本软件或其他交易而产生的任何索赔、损害或其他责任负责，无论是合同纠纷、侵权行为或其他原因。
'''

import time
import grovepi

# 将 Grove 电流传感器连接到模拟端口 A0
# SIG,NC,NC,GND
sensor = 0

grovepi.pinMode(sensor, "INPUT")

# Grove 接口的 Vcc 通常为 5V
grove_vcc = 5

while True:
  try:
      # 获取传感器值
      sensor_value = grovepi.analogRead(sensor)

      # 计算幅值电流 (mA)
      amplitude_current = (float)(sensor_value / 1024 * grove_vcc / 800 * 2000000)

      # 计算有效值 (mA)
      effective_value = amplitude_current / 1.414

      # 最小电流 = 1 / 1024 * grove_vcc / 800 * 2000000 / 1.414 = 8.6(mA)
      # 仅适用于正弦交流电

      print("sensor_value", sensor_value)
      print("电流的幅值是", amplitude_current, "mA")
      print("电流的有效值是", effective_value, "mA")
      time.sleep(1)

  except IOError:
      print("错误")
```

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/img/rpi_result.jpg" /></div>

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/res/Electricity_sensor_v1.0_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Eagle]** [Grove -Electricity Sensor Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/res/Electricity_sensor_v1.0_eagle_files.zip)
- **[PDF]** [PDF 格式原理图](https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/res/Electricity_sensor_sch.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时拥有顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>