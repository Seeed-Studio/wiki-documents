---
description: Grove - CO2 & Temperature & Humidity Sensor (SCD30)
title: Grove - CO2 & Temperature & Humidity Sensor (SCD30)
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-CO2_Temperature_Humidity_Sensor-SCD30
sku: 101020634
last_update:
  date: 12/29/2025
  author: Brandy
createdAt: '2025-08-07'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/cn/Grove-CO2_Temperature_Humidity_Sensor-SCD30/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/main.jpg" /></div>

Grove - CO2 & Temperature & Humidity Sensor (SCD30) 是一款高精度二氧化碳传感器，基于 Sensirion SCD30。该传感器的测量范围为 0 ppm-40'000 ppm，在 400ppm 到 10'000ppm 之间的测量精度可达到 ±(30 ppm + 3%)。

除了用于 CO2 检测的非分散红外 (NDIR) 测量技术外，SCD30 还在同一传感器模块上集成了 Sensirion 湿度和温度传感器。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div>


## 可升级为工业传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) 和 [S2100 数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供了使用 SenseCAP 系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

SenseCAP S210x 系列工业传感器为环境感知提供开箱即用的体验。请参考具有更高性能和坚固性的 S2103 无线 CO2、温度和湿度传感器，用于空气质量监测。该系列包括土壤湿度、空气温度和湿度、光照强度、CO2、EC 和 8 合 1 气象站传感器。试试最新的 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)，助力您下一个成功的工业项目。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size="{4}"><strong>SenseCAP 工业传感器</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2103 空气温度 &amp; 湿度 &amp; CO2</strong></a></td>
    </tr>
  </tbody>
</table>

## 版本

| 产品版本  | 变更                                                                                               | 发布日期 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - CO2 & Temperature & Humidity Sensor (SCD30) V1.0 | 初始版本                                                                                               | 2018 年 12 月      |

## 应用场景

- 空气净化器
- 环境监测
- 植物环境监测

## 特性

- NDIR CO2 传感器技术
- 集成温度和湿度传感器
- 最佳性价比
- 双通道检测，稳定性卓越
- 数字接口 I2C
- 低功耗
- 超长传感器寿命（15 年）

## 规格参数

|参数|值|
|---|---|
|供电电压|3.3V / 5V|
|工作温度| 0 – 50℃|
|存储温度|- 40°C – 70°C|
|湿度工作条件|0 – 95 %RH|
|传感器寿命|15 年|
|接口|I2C|
|I2C 地址|0x61|
|尺寸|长: 61mm 宽: 42mm 高: 19mm|
|重量|19.7g|
|包装尺寸|长: 110mm 宽: 70mm 高: 40mm|
|毛重| 27g|

<div align="center"><b>表 1.</b><i>一般规格</i></div>

|参数|条件|值|
|---|---|----|
|CO2 测量范围||0 – 40'000 ppm|
|精度| 400ppm – 10'000ppm| ± (30 ppm + 3%)|
|重复性|400ppm – 10'000ppm|10ppm|
|响应时间|τ63%|20 s|

<div align="center"><b>表 2.</b><i>CO2 传感器规格</i></div>

|参数|条件|值|
|---|---|----|
|湿度测量范围||0 %RH – 100 %RH|
|精度| 0 – 50°C, 0 – 100%RH| ±2 %RH|
|重复性||0.1 %RH|
|响应时间|τ63%|8 s|

<div align="center"><b>表 3.</b><i>湿度传感器规格</i></div>

|参数|条件|值|
|---|---|----|
|温度测量范围||-40°C – 120°C|
|精度| 0 – 50°C| ±0.5°C|
|重复性||0.1°C|
|响应时间|τ63%|> 2 s|

<div align="center"><b>表 4.</b><i>温度传感器规格</i></div>

|参数|条件|值|
|---|---|----|
|平均电流|更新间隔 2 s|19 mA|
|最大电流| 测量期间| 75 mA|
|能耗|1 次测量|120 mJ|

<div align="center"><b>表 5.</b><i>电气规格</i></div>

## 硬件概述

<div align="center">
<figure>
  <p style={{textAlign: 'center' }}><a href="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/pinout.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/pinout.jpg" /></a></p>
</figure>
</div>

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

## 入门指南

### 使用 Arduino

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield | Grove-CO2 & T&H SCD30|
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/thumbnial.png" /></div>
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911.html)|

>此外，您可以考虑我们新的 [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)，它相当于 Seeeduino V4.2 和 Baseshield 的组合。

:::note
  **1** 请轻柔地插入 USB 线缆，否则可能会损坏端口。请使用内部有 4 根线的 USB 线缆，2 根线的线缆无法传输数据。如果您不确定您的线缆，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买

  **2** 每个 Grove 模块在购买时都会附带一根 Grove 线缆。如果您丢失了 Grove 线缆，可以点击[这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)购买。
:::

**硬件连接**

- **步骤 1.** 将 Grove - CO2 & Temperature & Humidity Sensor (SCD30) 连接到 Base Shield 的 **I2C** 端口。

- **步骤 2.** 将 Grove - Base Shield 插入 Seeeduino。

- **步骤 3.** 通过 USB 线缆将 Seeeduino 连接到 PC。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/connect.png" /></div>

#### 软件

:::caution
        如果这是您第一次使用 Arduino，我们强烈建议您在开始之前先查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 从 Github 下载 [Seeed SCD30 库](https://github.com/Seeed-Studio/Seeed_SCD30)。

- **步骤 2.** 参考[如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library)为 Arduino 安装库。

- **步骤 3.** 重启 Arduino IDE。打开示例，您可以通过以下三种方式打开：
    a. 通过路径在 Arduino IDE 中直接打开：**File --> Examples -->Grove_scd30_co2_sensor-->SCD30_Example**。

    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/c1.jpg" /></div>

    b. 通过点击 **SCD30_Example.ino** 在您的计算机中打开，您可以在文件夹 **XXXX\Arduino\libraries\Seeed_SCD30-master\examples\SCD30_Example** 中找到它，**XXXX** 是您安装 Arduino IDE 的位置。

    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/c3.jpg" /></div>

    c. 或者，您可以直接点击代码块右上角的图标 ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) 将以下代码复制到 Arduino IDE 的新草图中。

```cpp
#include "SCD30.h"

#if defined(ARDUINO_ARCH_AVR)
 #pragma message("Defined architecture for ARDUINO_ARCH_AVR.")
 #define SERIAL Serial
#elif defined(ARDUINO_ARCH_SAM)
 #pragma message("Defined architecture for ARDUINO_ARCH_SAM.")
 #define SERIAL SerialUSB
#elif defined(ARDUINO_ARCH_SAMD)
 #pragma message("Defined architecture for ARDUINO_ARCH_SAMD.") 
 #define SERIAL SerialUSB
#elif defined(ARDUINO_ARCH_STM32F4)
 #pragma message("Defined architecture for ARDUINO_ARCH_STM32F4.")
 #define SERIAL SerialUSB
#else
 #pragma message("Not found any architecture.")
 #define SERIAL Serial
#endif



void setup()
{
    Wire.begin();
    SERIAL.begin(115200);
    SERIAL.println("SCD30 Raw Data");
    scd30.initialize();
}

void loop()
{
    float result[3] = {0};

    if(scd30.isAvailable())
    {
        scd30.getCarbonDioxideConcentration(result);
        SERIAL.print("Carbon Dioxide Concentration is: ");
        SERIAL.print(result[0]);
        SERIAL.println(" ppm");
        SERIAL.println(" ");
        SERIAL.print("Temperature = ");
        SERIAL.print(result[1]);
        SERIAL.println(" ℃");
        SERIAL.println(" ");
        SERIAL.print("Humidity = ");
        SERIAL.print(result[2]);
        SERIAL.println(" %");
        SERIAL.println(" ");
        SERIAL.println(" ");
        SERIAL.println(" ");
    }

    delay(2000);
}

```

:::caution
        库文件可能会更新。此代码可能不适用于更新的库文件，因此我们建议您使用前两种方法。
:::

- **步骤 4.** 上传演示程序。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

:::tip
  如果一切顺利，Grove - CO2 & Temperature & Humidity Sensor (SCD30) 的原始数据应该能够从串口监视器中读取。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/c2.jpg" /></div>

## 校准和放置

为了在实际场景中获得更准确的结果，您需要注意以下两点：  

- 1. 正确的放置  
- 2. 校准

### 放置

请参考 [SCD30 Design-In Guidelines](https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/CD_AN_SCD30_Design-In_Guidelines_D2.pdf) 了解正确的放置方法。

### 校准

首次激活时，需要至少 7 天的时间，以便算法能够找到 ASC 的初始参数集。传感器必须每天至少暴露在新鲜空气中 1 小时。同时在此期间，传感器不得断开电源，否则寻找校准参数的过程将被中止，必须从头开始重新启动。成功计算的参数存储在 SCD30 的非易失性存储器中，这样在重启后，之前找到的 ASC 参数仍然存在。有关校准的更多详细信息，请参考 [Interface Description Sensirion SCD30 Sensor Module](https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/Sensirion_CO2_Sensors_SCD30_Interface_Description.pdf)

在 SCD30 库文件夹中有两个 ino 示例，您可以运行 `SCD30_auto_calibration.ino` 来开始校准。

### 与 Raspberry Pi 配合使用 

#### 硬件

- **步骤 1**. 本项目中使用的物品：

| Raspberry pi | Grove Base Hat for RasPi| Grove-CO2 & T&H SCD30 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/thumbnial.png" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[立即购买](https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911.html)|

- **步骤 2**. 将 Grove Base Hat 插入 Raspberry。
- **步骤 3**. 将 Grove-CO2 连接到 Base Hat 的 **I2C** 端口。
- **步骤 4**. 通过 USB 线缆将 Raspberry Pi 连接到 PC。

<!-- ![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect4.jpg) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/GROVE-fix/C02.jpg" alt="pir" width={600} height="auto" /></p>

#### 软件

:::note
     如果您使用的是 **Raspberry Pi with Raspberrypi OS >= Bullseye**，您必须**仅使用 Python3** 运行此命令行。
:::

- **步骤 1**. 按照[设置软件](https://wiki.seeedstudio.com/cn/Grove_Base_Hat_for_Raspberry_Pi/#installation)配置开发环境。
- **步骤 2**. 进入相关的虚拟环境。

```
source ~/grove_env/env/bin/activate
cd ~/grove_env/grove.py/grove
```

- **步骤 3**. 执行以下命令运行代码。

- 以下是检查 grove_co2_scd30.py 代码。

```
less grove_co2_scd30.py
```

```python

from typing import NoReturn
from grove.i2c import Bus
import struct
import time


class GroveCo2Scd30(object):
    __COMMAND_TRIGGER_CONTINUOUS_MEASUREMENT = 0x0010
    __COMMAND_STOP_CONTINUOUS_MEASUREMENT = 0x0104
    __COMMAND_SET_MEASUREMENT_INTERVAL = 0x4600
    __COMMAND_GET_DATA_READY_STATUS = 0x0202
    __COMMAND_READ_MEASUREMENT = 0x0300
    __COMMAND_ACTIVATE_ASC = 0x5306
    __COMMAND_SET_FRC = 0x5204
    __COMMAND_SET_TEMPRATURE_OFFSET = 0x5403
    __COMMAND_ALTITUDE_COMPENSATION = 0x5102
    __COMMAND_READ_FIRMWARE_VERSION = 0xd100
    __COMMAND_SOFT_RESET = 0xd304

    def __init__(self, address=0x61, bus=1):
        self.address = address
        self.bus = Bus(bus)

        self.set_measurement_interval(2)
        self.trigger_continuous_measurement()

    @staticmethod
    def _calc_crc(data: list) -> int:
        crc = 0xff

        for d in data:
            crc ^= d

            for _ in range(8):
                if crc & 0x80:
                    crc = ((crc << 1) ^ 0x31) & 0xff
                else:
                    crc = (crc << 1) & 0xff

        return crc

    def _write(self, cmd: int, data: list):
        write_data = list(struct.pack(">H", cmd))
        if data is not None:
            for d in data:
                write_data.extend(struct.pack(">H", d))
                write_data.append(GroveCo2Scd30._calc_crc(struct.pack(">H", d)))

        write_msg = self.bus.msg.write(self.address, write_data)
        self.bus.i2c_rdwr(write_msg)

    def _read(self, address: int, data_number: int) -> list:
        write_data = list(struct.pack(">H", address))

        write_msg = self.bus.msg.write(self.address, write_data)
        self.bus.i2c_rdwr(write_msg)

        read_msg = self.bus.msg.read(self.address, 3 * data_number)
        self.bus.i2c_rdwr(read_msg)

        result = []
        for i in range(data_number):
            d = read_msg.buf[i*3:i*3+2]
            if GroveCo2Scd30._calc_crc(d) != read_msg.buf[i*3+2][0]:
                raise ValueError("CRC mismatch")

            result.append(struct.unpack(">H", d)[0])

        return result

    def trigger_continuous_measurement(self, pressure: int = 0):
        self._write(self.__COMMAND_TRIGGER_CONTINUOUS_MEASUREMENT, [pressure])

    def stop_continuous_measurement(self):
        self._write(self.__COMMAND_STOP_CONTINUOUS_MEASUREMENT, None)

    def set_measurement_interval(self, interval: int):
        self._write(self.__COMMAND_SET_MEASUREMENT_INTERVAL, [interval])

    def get_measurement_interval(self) -> int:
        data = self._read(self.__COMMAND_SET_MEASUREMENT_INTERVAL, 1)

        return data[0]

    def get_data_ready_status(self) -> bool:
        data = self._read(self.__COMMAND_GET_DATA_READY_STATUS, 1)

        return True if data[0] == 1 else False

    def read_measurement(self) -> tuple:
        data = self._read(self.__COMMAND_READ_MEASUREMENT, 6)

        data_bytes = struct.pack(">HHHHHH", data[0], data[1], data[2], data[3], data[4], data[5])
        data_floats = struct.unpack(">fff", data_bytes)
        co2 = data_floats[0]
        temp = data_floats[1]
        humi = data_floats[2]

        return co2, temp, humi

    def set_forced_recalibration(self, co2: float):
        self._write(self.__COMMAND_SET_FRC, [int(co2)])

    def set_automatic_self_calibration(self, activate: bool):
        self._write(self.__COMMAND_ACTIVATE_ASC, [1 if activate else 0])

    def get_automatic_self_calibration(self) -> bool:
        data = self._read(self.__COMMAND_ACTIVATE_ASC, 1)

        return True if data[0] == 1 else False

    def set_temperature_offset(self, offset: float):
        self._write(self.__COMMAND_SET_TEMPRATURE_OFFSET, [int(offset * 100)])

    def get_temperature_offset(self) -> float:
        data = self._read(self.__COMMAND_SET_TEMPRATURE_OFFSET, 1)

        return float(data[0]) / 100

    def set_altitude_compensation(self, altitude: int):
        self._write(self.__COMMAND_ALTITUDE_COMPENSATION, [altitude])

    def get_altitude_compensation(self) -> int:
        data = self._read(self.__COMMAND_ALTITUDE_COMPENSATION, 1)

        return data[0]

    def read(self) -> tuple:
        if not self.get_data_ready_status():
            return None

        return self.read_measurement()


def main() -> NoReturn:
    sensor = GroveCo2Scd30()

    while True:
        if sensor.get_data_ready_status():
            co2, temperature, humidity = sensor.read()
            print(f"CO2 concentration is {co2:.1f} ppm")
            print(f"Temperature in Celsius is {temperature:.2f} C")
            print(f"Relative Humidity is {humidity:.2f} %")

        time.sleep(1)


if __name__ == "__main__":
    main()
```
- 运行此代码
```
python grove_co2_scd30.py

```

如果一切顺利，您将看到以下现象。😄

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/GROVE-fix/co2_result.png" alt="pir" width={600} height="auto" /></p>






### 与 Wio Terminal 配合使用（ArduPy）

#### 硬件

- **步骤 1.** 准备以下物品：

| Wio Terminal | Grove-CO2 & T&H SCD30 |
|--------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/thumbnial.png" /></div>|
|[立即购买](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[立即购买](https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911.html)|

- **步骤 2.** 将 Grove-CO2 & T&H SCD30 连接到 Wio Terminal 的 **I2C** Grove 端口。

- **步骤 3.** 通过 USB Type-C 线缆将 Wio Terminal 连接到 PC。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/WT-SCD30.png"/></div>

#### 软件

- **步骤 1.** 按照 [**ArduPy 入门指南**](https://wiki.seeedstudio.com/cn/ArduPy/) 在 Wio Terminal 上配置 ArduPy 开发环境。

- **步骤 2.** 确保 ArduPy 固件已刷入 Wio Terminal。更多信息请参考 [**这里**](https://wiki.seeedstudio.com/cn/ArduPy/#ardupy-aip-cli-getting-started)。

```sh
aip install Seeed-Studio/seeed-ardupy-scd30
aip build
aip flash
```

- **步骤 3.** 复制以下代码并保存为 `ArduPy-scd30.py`：

```python
from arduino import grove_scd30
from machine import LCD
from machine import Sprite
import time

scd30 = grove_scd30()
lcd = LCD()
spr = Sprite(lcd) # Create a buff

def main():
    spr.createSprite(320, 240)
    while True:
        spr.setTextSize(2)
        spr.fillSprite(spr.color.BLACK)
        spr.setTextColor(lcd.color.ORANGE)
        spr.drawString("SCD30 Reading", 90, 10)
        spr.drawFastHLine(40, 35, 240, lcd.color.DARKGREY)
        spr.setTextColor(lcd.color.WHITE)
        spr.drawString("- CO2 Level: ", 20, 50)
        spr.drawString("- Temperature: ", 20, 80)
        spr.drawString("- Humidity: ", 20, 110)

        if(scd30.isAvailable()):
            data = scd30.getCarbonDioxideConcentration()
            spr.drawFloat(data[0], 2,220,50) # CO2
            spr.drawFloat(data[1], 2, 220,80)
            spr.drawFloat(data[2], 2, 220,110)
            spr.pushSprite(0,0)
        time.sleep_ms(500)

        print("\nCarbon Dioxide Concentration:", data[0])
        print("Temperature:", data[1])
        print("Humidity:", data[2])

if __name__ == "__main__":
    main()
```

- **步骤 4.** 将 `ArduPy-scd30.py` 保存在您知道的位置。运行以下命令并将 `<YourPythonFilePath>` **替换**为您的 `ArduPy-scd30.py` 位置。

```sh
aip shell -n -c "runfile <YourPythonFilePath>"
# Example:
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-scd30.py"
```

- **步骤 5.** 我们将看到 3 个数据值显示在终端上，如下所示，并显示在 Wio Terminal LCD 屏幕上。

```python
ansonhe@Ansons-Macbook-Pro ~:aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-scd30.py"
Positional argument (/dev/cu.usbmodem1414301) takes precedence over --open.
Connected to ardupy
Carbon Dioxide Concentration: 2360.639
Temperature: 29.18707
Humidity: 66.88538

Carbon Dioxide Concentration: 2360.639
Temperature: 29.18707
Humidity: 66.88538

Carbon Dioxide Concentration: 2500.573
Temperature: 29.17372
Humidity: 66.61072
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/Ardupy-SCD30.png"/></div>

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/Grove-CO2_Temperature_Humidity_Sensor-SCD30.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[ZIP]** [Grove - CO2 & Temperature & Humidity Sensor (SCD30) 原理图文件](https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/Grove-CO2_Temperature_Humidity_Sensor-SCD30.zip)
- **[PDF]** [SCD30 设计指南](https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/CD_AN_SCD30_Design-In_Guidelines_D2.pdf)
- **[PDF]** [SCD30 数据手册](https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/Sensirion_CO2_Sensors_SCD30_Datasheet.pdf)
- **[PDF]** [SCD30 接口说明](https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/Sensirion_CO2_Sensors_SCD30_Interface_Description.pdf)

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

