---
description: Grove - 气压传感器 (BMP180)
title: Grove - 气压传感器 (BMP180)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Barometer_Sensor-BMP180
last_update:
  date: 1/4/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/Barometer-BMP180-.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/Barometer-BMP180-.jpg" alt="pir" width={600} height="auto" /></p>

这是一个 Grove 模块，基于 Bosch BMP180 高精度、低功耗数字气压计。BMP180 提供 300 至 1100 hPa 的压力测量范围，在高级分辨率模式下精度可达 0.02 hPa。它基于压阻技术，具有高精度、耐用性和长期稳定性。芯片仅接受 1.8V 至 3.6V 的输入电压。然而，添加外部电路后，该模块可兼容 3.3V 和 5V。因此，它可以在 Arduino/Seeeduino 或 Seeeduino Stalker 上直接使用，无需修改。它设计为通过 I2C 总线直接连接到微控制器。

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Barometer-Sensor-(BMP180)-p-1840.html)

## 特性

-   数字双线 (I2C) 接口
-   宽气压测量范围
-   灵活的供电电压范围
-   超低功耗
-   低噪声测量
-   工厂校准
-   -40 至 +85°C 工作范围，±2°C 温度精度
-   I2C 地址：0x77

:::note
    如果您想使用多个 I2C 设备，请参考 [软件 I2C](https://wiki.seeedstudio.com/cn/Arduino_Software_I2C_user_guide/)。
:::
:::tip
    更多关于 Grove 模块的详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)。
:::

## 应用场景

-   GPS 导航增强
-   室内和室外导航
-   休闲和运动
-   天气预报
-   垂直速度指示（上升/下降速度）

## 规格

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
项目
</th>
<th scope="col">
最小值
</th>
<th scope="col">
典型值
</th>
<th scope="col">
最大值
</th>
<th scope="col">
单位
</th>
</tr>
<tr align="center">
<th scope="row">
电压
</th>
<td>
3
</td>
<td>
5
</td>
<td>
5.5
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
电流
</th>
<td>
1.1
</td>
<td>
/
</td>
<td>
20
</td>
<td>
uA
</td>
</tr>
<tr align="center">
<th scope="row">
压力范围
</th>
<td>
300
</td>
<td>
/
</td>
<td>
1100
</td>
<td>
hPa
</td>
</tr>
<tr align="center">
<th scope="row">
更快的 I2C 数据传输
</th>
<td>
/
</td>
<td>
/
</td>
<td>
3.4
</td>
<td>
MHZ
</td>
</tr>
<tr align="center">
<th scope="row">
尺寸
</th>
<td colspan="3">
40.1*20.2*9.7
</td>
<td>
mm
</td>
</tr>
</table>

支持的平台
-------------------

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上述提到的支持平台仅表示模块的软件或理论兼容性。在大多数情况下，我们仅为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::


## 入门指南

### 使用 Arduino

#### 硬件

- **步骤 1.** 准备以下物品：

| Seeeduino V4.2 | Base Shield | Grove-Barometer_Sensor-BMP180 |
|----------------|-------------|-----------------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/45d_small.jpg" alt="pir" width={500} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-Barometer-Sensor-(BMP180)-p-1840.html)|

- **步骤 2.** 将 Grove-Barometer_Sensor-BMP180 连接到 Grove-Base Shield 的 **I2C** 端口。
- **步骤 3.** 将 Grove-Base Shield 插入 Seeeduino。
- **步骤 4.** 使用 USB 数据线将 Seeeduino 连接到电脑。

<!-- ![with_ardu](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/with_ardu.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/with_ardu.jpg" alt="pir" width={600} height="auto" /></p>

:::note
如果没有 Grove Base Shield，也可以直接将此模块连接到 Seeeduino，如下所示。
:::

| Seeeduino_v4 | Grove-Barometer_Sensor-BMP180 |
|--------------|-----------------------------------|
| 5V           | VCC                               |
| GND          | GND                               |
| SDA          | SDA                               |
| SCL          | SCL                               |

#### 软件

**步骤 1.** 从 Github 下载 [库文件](https://github.com/Seeed-Studio/Grove_Barometer_Sensor)。

**步骤 2.** 参考 [如何安装库文件](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库文件。

**步骤 3.** 创建一个新的 Arduino 草图，并将以下代码粘贴到其中，或者通过路径直接打开代码：File -> Example -> Barometer_Sensor -> Barometer_Sensor。

以下是代码：

```cpp
#include "Barometer.h"
#include <Wire.h>
float temperature;
float pressure;
float atm;
float altitude;
Barometer myBarometer;
void setup(){
  Serial.begin(9600);
  myBarometer.init();
}

void loop()
{
   temperature = myBarometer.bmp085GetTemperature(myBarometer.bmp085ReadUT()); // 获取温度，必须先调用 bmp085ReadUT
   pressure = myBarometer.bmp085GetPressure(myBarometer.bmp085ReadUP()); // 获取气压
   altitude = myBarometer.calcAltitude(pressure); // 未补偿的计算 - 单位：米
   atm = pressure / 101325;

  Serial.print("Temperature: ");
  Serial.print(temperature, 2); // 显示两位小数
  Serial.println("deg C");

  Serial.print("Pressure: ");
  Serial.print(pressure, 0); // 仅显示整数
  Serial.println(" Pa");

  Serial.print("Ralated Atmosphere: ");
  Serial.println(atm, 4); // 显示四位小数

  Serial.print("Altitude: ");
  Serial.print(altitude, 2); // 显示两位小数
  Serial.println(" m");

  Serial.println();

  delay(1000); // 等待一秒后再次获取值
}
```

**步骤 4.** 打开串口监视器以接收传感器数据，包括温度、大气压力值、相对气压和海拔高度。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/Barometer_Sensor.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/Barometer_Sensor.jpg" alt="pir" width={600} height="auto" /></p>

### 使用 Raspberry Pi

#### 硬件

- **步骤 1.** 准备以下物品：

| Raspberry Pi | GrovePi_Plus | Grove-Barometer_Sensor-BMP180 |
|--------------|--------------|-----------------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/45d_small.jpg" alt="pir" width={500} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[立即购买](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[立即购买](https://www.seeedstudio.com/Grove-Barometer-Sensor-(BMP180)-p-1840.html)|

- **步骤 2.** 将 GrovePi_Plus 插入 Raspberry Pi。
- **步骤 3.** 将 Grove-Barometer_Sensor-BMP180 连接到 GrovePi_Plus 的 **I2C** 端口。
- **步骤 4.** 使用 USB 数据线将 Raspberry Pi 连接到电脑。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/with_rpi.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/with_rpi.jpg" alt="pir" width={600} height="auto" /></p>

#### 软件

- **步骤 1.** 按照 [设置软件](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) 配置开发环境。
- **步骤 2.** Git 克隆 Github 仓库。

```bash
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

- **步骤 3.** 执行以下命令以使用此传感器：

```bash
cd ~/GrovePi/Software/Python/grove_barometer_sensors/barometric_sensor_bmp180
python grove_i2c_barometic_sensor_example.py
```

以下是代码：

```python
#!/usr/bin/python
import time
import smbus
import RPi.GPIO as GPIO
#import grovepi
from grove_i2c_barometic_sensor_BMP180 import BMP085

# ===========================================================================
# 示例代码
# ===========================================================================

# 初始化 BMP085 并使用标准模式（默认值）
# bmp = BMP085(0x77, debug=True)
bmp = BMP085(0x77, 1)

# 要指定不同的操作模式，请取消以下一行的注释：
# bmp = BMP085(0x77, 0)  # 超低功耗模式
# bmp = BMP085(0x77, 1)  # 标准模式
# bmp = BMP085(0x77, 2)  # 高分辨率模式
# bmp = BMP085(0x77, 3)  # 超高分辨率模式

rev = GPIO.RPI_REVISION
if rev == 2 or rev == 3:
  bus = smbus.SMBus(1)
else:
  bus = smbus.SMBus(0)

while True :
  temp = bmp.readTemperature()

  # 读取当前气压值
  pressure = bmp.readPressure()

  # 根据估算的平均海平面气压（1013.25 hPa）计算海拔高度
  # 但这不会非常准确
  # altitude = bmp.readAltitude()

  # 要指定更准确的海拔高度，请输入正确的平均海平面气压值。
  # 例如，如果当前气压值为 1023.50 hPa，请输入 102350，因为我们在整数值中包含两位小数。
  altitude = bmp.readAltitude(101560)

  print("Temperature: %.2f C" % temp)
  print("Pressure:    %.2f hPa" % (pressure / 100.0))
  print("Altitude:    %.2f m" % altitude)
  time.sleep(.1)

```


-	**步骤 4.** 以下是结果：
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/Grovepi_barometer_sensor_00.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/Grovepi_barometer_sensor_00.png" alt="pir" width={600} height="auto" /></p>



## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/res/Barometer_Sensor-BMP180-Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## 资源


- **[Eagle]**  [Grove - 气压传感器(BMP180) Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/res/Barometer_Sensor-BMP180-Eagle_File.zip)
- **[Library]**  [气压传感器库](https://github.com/Seeed-Studio/Grove_Barometer_Sensor)
- **[Datasheet]**  [BMP180 数据手册](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/res/BMP180.pdf)
- **[Altitude Vs. Pressure]** 以下是海拔高度与气压关系的参考图。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/Pressure_and_Altitude.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/Pressure_and_Altitude.jpg" alt="pir" width={600} height="auto" /></p>


## 项目

**使用 Blynk 的天气和安全站**：通过 Blynk 和 CC32000 LaunchPad 远程监控天气和安全！

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/rei-vilo/weather-and-security-station-with-blynk-74608b/embed' width='350'></iframe>

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
通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) 和 [S2100 数据记录仪](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供使用 SenseCAP 系列坚固的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66 外壳、蓝牙配置、与全球 LoRaWAN® 网络的兼容性、内置 19 Ah 电池以及来自 APP 的强大支持，使 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) 成为工业应用的最佳选择。该系列包括土壤湿度、空气温度和湿度、光强度、CO2、电导率以及 8 合 1 气象站传感器。尝试最新的 SenseCAP S210x，助力您的下一个成功工业项目。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
