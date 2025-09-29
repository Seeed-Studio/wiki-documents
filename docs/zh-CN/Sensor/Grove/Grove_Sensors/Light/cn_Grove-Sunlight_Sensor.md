---
description: Grove - 阳光传感器
title: Grove - 阳光传感器
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Sunlight_Sensor
last_update:
  date: 1/5/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/Grove_sunlight_sensor_view.jpg" /></div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Sunlight-Sensor-p-2530.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border="0" /></a></p>

Grove - 阳光传感器是一款多通道数字光传感器，具有检测紫外光、可见光和红外光的能力。

该设备基于 SI1151，这是 SiLabs 的一款新传感器。Si1151 是一款低功耗、基于反射的红外接近、紫外线指数和环境光传感器，具有 I2C 数字接口和可编程事件中断输出。该设备在宽动态范围和各种光源（包括直射阳光）下提供出色的性能。

Grove - 阳光传感器包含一个板载 Grove 连接器，可帮助您轻松将其连接到 Arduino。您可以使用此设备制作一些需要检测光线的项目，例如简单的紫外线检测器。

该设备的主芯片已更新为 SI1151，SI1145 的教程仍然保留。

## 版本

| 产品版本                  | 变更                                                            | 发布日期 |
|----------------------------------|--------------------------------------------------------------------|---------------|
| Grove - 阳光传感器 v1.0     | 初始版本                                                            | 2020年2月12日   |
| Grove - 阳光传感器 v2.0     | 将 Si1145 替换为 Si1151-AB00-GMR                                | 2021年7月27日   |

## 可升级为工业传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)和 [S2100 数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供了使用 SenseCAP 系列坚固[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

SenseCAP S210x 系列工业传感器为环境感知提供开箱即用的体验。请参考具有更高性能和稳定性的 S2102 无线光强度传感器进行光强度检测。该系列包括土壤湿度、空气温湿度、光强度、CO2、EC 和 8 合 1 气象站传感器。为您的下一个成功的工业项目尝试最新的 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr><td align="center"><strong>SenseCAP 工业传感器</strong></td></tr>
    <tr>
      <td>
      <div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S2102-.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 光传感器</strong></a></td>
    </tr>
  </tbody></table>

## 特性

---

- 数字光传感器
- 宽光谱检测范围，提高精度。
- 可编程配置，使其适用于各种应用。
- 直接检测阳光
- Grove 兼容
- I2C 接口（7位）

:::tip
有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 规格参数

---
|||
|---|---|
|工作电压 |3.0-5.5V|
|工作电流 |3.5mA|
|波长 |280-950nm|
|默认 I2C 地址| 0x60|
|工作温度| -45-85℃|

## 硬件概述

---

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/Hardware_overview.jpg" /></div>

- Grove 连接器 - 4针接口，包含 VCC、GND、SDA 和 SCL
- LED - LED 驱动引脚
- INT - 可编程中断输出
- SI1151 - IC

## 入门指南

---
完成本节后，您只需几个步骤就可以让 Grove - 阳光传感器运行起来。

### SI1145 - 与 Arduino 配合使用

**所需材料**

| Seeeduino V4.2 |Grove - 阳光传感器|
|--------------|-------------|
|<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/sunlight_sensor.png" /></div>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Grove-Sunlight-Sensor.html)|

:::caution
如果这是您第一次使用 Arduino，请点击[这里](https://wiki.seeedstudio.com/cn/Getting_Started_with_Seeeduino)开始您的 Arduino 之旅。
:::

**连接硬件**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/Grove_sunlight_hardware_connect.jpg" /></div>

:::note
如果您需要在主控板上插入更多模块，您可能需要一个 [Grove 底板扩展板](https://wiki.seeedstudio.com/cn/Base_Shield_V2/)，这将使您的工作变得简单。
:::

**下载**

点击[这里](https://github.com/Seeed-Studio/Grove_Sunlight_Sensor/tree/master)下载库文件，然后将其[添加](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library/)到 Arduino 中。

启动 Arduino IDE 并点击 **File>Examples>Grove_Sunlight_Sensor>SI1145DEMO** 打开测试代码。

```cpp
/*
    This is a demo to test Grove - Sunlight Sensor library

*/

#include <Wire.h>

#include "Arduino.h"
#include "SI114X.h"

SI114X SI1145 = SI114X();

void setup() {

    Serial.begin(115200);
    Serial.println("Beginning Si1145!");

    while (!SI1145.Begin()) {
        Serial.println("Si1145 is not ready!");
        delay(1000);
    }
    Serial.println("Si1145 is ready!");
}

void loop() {
    Serial.print("//--------------------------------------//\r\n");
    Serial.print("Vis: "); Serial.println(SI1145.ReadVisible());
    Serial.print("IR: "); Serial.println(SI1145.ReadIR());
    //the real UV value must be div 100 from the reg value , datasheet for more information.
    Serial.print("UV: ");  Serial.println((float)SI1145.ReadUV() / 100);
    delay(1000);
}

```

点击 Tools>Board 选择 Arduino UNO 并选择相应的串口。

现在点击 Upload(CTRL+U) 烧录测试代码。如有任何错误提示，请参考[**这里**](https://wiki.seeedstudio.com/cn/Arduino_Common_Error)。

**查看结果**

上传完成后，打开 Arduino IDE 的串口监视器，您可以获得数据：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/output.png" /></div>

:::note
    Vis - 可见光，单位为 lm
    IR - 红外光，单位为 lm
    UV - 紫外线指数
:::

现在，将 Grove - 阳光传感器放在阳光下，看看今天是否是个好天气。

### SI1151 - 与 Arduino 配合使用

**所需材料**

| Seeeduino V4.2 |Grove - 阳光传感器|
|--------------|-------------|
|<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" /></div>|<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/sunlight_sensor.png" /></div>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Grove-Sunlight-Sensor.html)|

:::caution
如果这是您第一次使用 Arduino，请点击[这里](https://wiki.seeedstudio.com/cn/Getting_Started_with_Seeeduino)开始您的 Arduino 之旅。
:::

**连接硬件**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/Grove_sunlight_hardware_connect.jpg" /></div>

:::note
如果您需要在主控板上插入更多模块，您可能需要一个 [Grove 底板扩展板](https://wiki.seeedstudio.com/cn/Base_Shield_V2/)，这将使您的工作变得简单。
:::

**下载**

点击[这里](https://github.com/Seeed-Studio/Grove_Sunlight_Sensor/tree/master)下载库文件，然后将其[添加](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library/)到 Arduino 中。

启动 Arduino IDE 并点击 **File>Examples>Grove_Sunlight_Sensor>SI1151** 打开测试代码。

```cpp
#include "Si115X.h"

Si115X si1151;

/**
 * Setup for configuration
 */
void setup()
{
    Wire.begin();
    Serial.begin(115200);
    if (!si1151.Begin()) {
        Serial.println("Si1151 is not ready!");
        while (1) {
            delay(1000);
            Serial.print(".");
        };
    }
    else {
        Serial.println("Si1151 is ready!");
    }
}

/**
 * Loops and reads data from registers
 */
void loop()
{
    Serial.print("IR: ");
    Serial.println(si1151.ReadIR());
    Serial.print("Visible: ");
    Serial.println(si1151.ReadVisible());

    delay(500);
}
```

点击 Tools>Board 选择 Arduino UNO 并选择相应的串口。

现在点击 Upload(CTRL+U) 烧录测试代码。如有任何错误提示，请参考[**这里**](https://wiki.seeedstudio.com/cn/Arduino_Common_Error)。

**查看结果**

上传完成后，打开 Arduino IDE 的串口监视器，您可以获得数据：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/output.png" /></div>

:::note
    Vis - 可见光，单位为 lm
    IR - 红外光，单位为 lm
    UV - 紫外线指数
:::

现在，将 Grove - 阳光传感器放在阳光下，看看今天是否是个好天气。


### SI1145 - 与树莓派一起使用

**所需材料**

| 树莓派 4 Model B |Grove - 树莓派底板|Grove - 阳光传感器|
|--------------|-------------|-----------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/raspberry_pi.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/hat.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/sunlight_sensor.png" /></div>|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[立即购买](https://www.seeedstudio.com/Grove-Sunlight-Sensor.html)|

**硬件连接**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/connection_2.jpg" /></div>

**步骤 1.** 将 Grove - 阳光传感器连接到 Grove - 树莓派底板的 **I2C** 端口，插入树莓派 4 Model B。然后将树莓派 4 Model B 与 PC 连接。

**步骤 2.** 访问树莓派系统后，git clone **[Seeed_Python_SI114X](https://github.com/Seeed-Studio/Seeed_Python_SI114X)** 并通过插入以下命令安装 **grove.py**：

```shell
pip3 install Seeed-grove.py
```

或者在支持的 GNU/Linux 系统（如树莓派）上，您可以从 PyPI 本地安装驱动程序：

```Shell
pip3 install seeed-python-si114x
```

**步骤 3.** 要进行系统范围安装（在某些情况下可能需要）：

```Shell
sudo pip3 install seeed-python-si114x
```

您可以插入以下命令从 PyPI 本地升级驱动程序：

```Shell
pip3 install --upgrade seeed-python-si114x
```

**软件**

```python
import seeed_si114x
import time
import signal
def handler(signalnum, handler):
    print("Please use Ctrl C to quit")
def main():
    SI1145 = seeed_si114x.grove_si114x()
    print("Please use Ctrl C to quit")
    signal.signal(signal.SIGTSTP, handler) # Ctrl-z
    signal.signal(signal.SIGQUIT, handler) # Ctrl-\
    while True:
        print('Visible %03d UV %.2f IR %03d' % (SI1145.ReadVisible , SI1145.ReadUV/100 , SI1145.ReadIR),end=" ")
        print('\r', end='')
        time.sleep(0.5)
if __name__  == '__main__':
    main()
```

在运行演示代码之前，您必须检查板子对应的 i2c 编号：

```Shell
ls /dev/i2c*
```

如果 i2c 设备正常工作，将会显示：

```Shell
/dev/i2c-1
```

**如果没有**，使用命令 **sudo raspi-config** 并重启以启用 i2c 设备：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/1.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/2.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/3.png" /></div>

**步骤 4.** 通过以下命令运行演示：

```Shell
cd Seeed_Python_SI114X-Si115x
```

```Shell
python3 examples/BasicRead.py 
```

:::tip
如果一切正常，结果将显示如下：
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/outcome.png" /></div>

:::note
**Visible** 指的是**环境可见光**，**UV** 指的是**紫外线 (UV) 指数**，而 **IR** 表示**环境红外光**。
:::

### SI1151 - 与树莓派一起使用

**所需材料**

| 树莓派 4 Model B |Grove - 树莓派底板|Grove - 阳光传感器|
|--------------|-------------|-----------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/raspberry_pi.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/hat.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/sunlight_sensor.png" /></div>|
|[立即购买](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html)|[立即购买](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[立即购买](https://www.seeedstudio.com/Grove-Sunlight-Sensor.html)|

**硬件连接**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/connection_2.jpg" /></div>

**步骤 1.** 将 Grove - 阳光传感器连接到 Grove - 树莓派底板的 **I2C** 端口，插入树莓派 4 Model B。然后将树莓派 4 Model B 与 PC 连接。

**步骤 2.** 访问树莓派系统后，git clone **[Grove_Sunlight_Sensor library](https://github.com/Seeed-Studio/Grove_Sunlight_Sensor/tree/Si1151)**

```Shell
git clone git clone git@github.com:Seeed-Studio/Grove_Sunlight_Sensor.git -b Si1151 Si1151_library
```

在运行演示代码之前，您必须检查板子对应的 i2c 编号：

```Shell
ls /dev/i2c*
```

如果 i2c 设备正常工作，将会显示：

```Shell
/dev/i2c-1
```

**如果没有**，使用命令 **sudo raspi-config** 并重启以启用 i2c 设备：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/1.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/2.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/3.png" /></div>

**步骤 3.** 通过以下命令运行演示：

```Shell
cd Seeed_Python_SI114X-Si115x
```

```Shell
python3 seeed_si115x.py
```

:::tip
如果一切正常，结果将显示如下：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/Sunlighttu.png" /></div>

:::note
**Visible** 指的是**环境可见光**，**UV** 指的是**紫外线 (UV) 指数**，而 **IR** 表示**环境红外光**。
:::

## 参考资料

**光谱**

本章内容来自 [**维基百科 - 光谱**](https://en.wikipedia.org/wiki/Spectrum)，点击查看原始页面。

光谱（复数形式为 spectra 或 spectrums[1]）是一种不限于特定数值集合但可以在连续体内无限变化的状态。这个词最初在光学领域中科学地使用，用来描述可见光通过棱镜分离时产生的彩虹色彩。随着对光的科学理解的进步，它开始应用于整个电磁光谱。

光谱一词后来通过类比应用于光学以外的主题。因此，人们可能会谈论政治观点的光谱，或药物活性的光谱，或自闭症光谱。在这些用法中，光谱内的数值可能不与精确可量化的数字或定义相关联。这种用法暗示了一个广泛的条件或行为范围，它们被归类在一起并在单一标题下进行研究，以便于讨论。

在光谱的大多数现代用法中，两端的极端之间存在统一的主题。该词的一些较旧用法没有统一的主题，但它们通过下面列出的一系列事件导致了现代用法。数学中的现代用法确实从统一主题演化而来，但这可能难以识别。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/Grove_sunlight_spectrum.jpg" /></div>

**流明**

本章内容来自 [**维基百科 - 流明（单位）**](https://en.wikipedia.org/wiki/Lumen_(unit))，点击查看原始页面。

流明（符号：lm）是光通量的 SI 导出单位，是光源发出的可见光总"量"的度量。光通量与功率（辐射通量）不同，光通量测量反映了人眼对不同波长光的不同敏感性，而辐射通量测量表示发出的所有电磁波的总功率，与眼睛感知它的能力无关。流明与勒克斯相关，一勒克斯等于每平方米一流明。

**紫外线指数**

本章内容来自 [**维基百科 - 紫外线指数**](https://en.wikipedia.org/wiki/Ultraviolet_index)，点击查看原始页面。

紫外线指数或 UV 指数是在特定地点和时间测量引起晒伤的紫外线（UV）辐射强度的国际标准。该标准由加拿大科学家于 1992 年开发，然后于 1994 年被联合国世界卫生组织和世界气象组织采用并标准化。它主要用于面向公众的日常预报，并且越来越多地作为小时预报提供。

UV 指数被设计为开放式线性标度，与导致人体皮肤晒伤的 UV 辐射强度成正比。例如，如果浅肤色个体（未使用防晒霜或未晒黑）在 UV 指数 6 时开始在 30 分钟内晒伤，那么该个体应该预期在 UV 指数 12 时约 15 分钟内晒伤——UV 强度加倍，晒伤速度也加倍。

UV 指数的目的是帮助人们有效地保护自己免受 UV 辐射的伤害，适度的 UV 辐射对健康有益，但过量会导致晒伤、皮肤老化、DNA 损伤、皮肤癌、免疫抑制[1]和眼部损伤如白内障（参见紫外线辐射对人体健康相关影响部分）。公共卫生组织建议，如果人们在 UV 指数为 3 或更高时在户外度过大量时间，应保护自己（例如，在皮肤上涂抹防晒霜并戴帽子和太阳镜）；更详细的建议请参见下表。

当当天预测的 UV 指数在各种数值范围内时，防护建议如下：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/uv%20index.png" /></div>

**注意事项**

在解释 UV 指数和建议时，请注意：

- 到达地球表面的 UV 辐射强度取决于太阳在天空中的角度。每天，太阳在太阳正午时达到最高角度（最高强度，最短阴影），这只是大致对应于时钟上的 12:00。这是因为给定时区内太阳时间和当地时间之间的差异。一般来说，当太阳直接在头顶上，使得人们的阴影比他们的身高短时，UV 风险很高。
- 同样，对于与水平面成不同角度的表面，UV 强度可能更高或更低。例如，如果人们在户外行走或站立，当太阳较低时，如夏日傍晚或滑雪道上的冬日下午，眼部和皮肤垂直表面（如面部）的 UV 暴露实际上可能更严重。这部分是由于指数所基于的测量设备是平坦的水平表面这一事实造成的。
- 来自雪或其他明亮表面（如水、沙子或混凝土）的反射可能使 UV 强度几乎翻倍。
- 给出的建议适用于皮肤轻度晒黑的普通成年人。深色皮肤的人更可能承受更大的阳光暴露，而儿童、老年人、特别是皮肤白皙的成年人，以及因医疗原因或前几天的 UV 暴露而对阳光更敏感的人需要额外的预防措施。（皮肤从 UV 辐射中恢复通常需要两天或更长时间才能完成其过程。）
- 由于 UV 指数的计算方式，它在技术上表达了发生晒伤的风险，晒伤主要由 UVB 辐射引起。然而，UVA 辐射也会造成损害（光老化、黑色素瘤）。在某些条件下，包括大多数日光浴床，UVA 水平可能不成比例地高于 UV 指数所描述的水平。使用广谱（UVA/UVB）防晒霜可以帮助解决这一问题。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/res/Grove_-_Sunlight_Sensor_v1.0_SCH%26PCB%26PDF.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

---

- [PDF格式原理图](https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/res/Grove_-_Sunlight_Sensor_v1.0.pdf)
- [Eagle文件格式原理图](https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/res/Grove_-_Sunlight_Sensor_v1.0_SCH%26PCB%26PDF.zip)
- [Si1145数据手册](https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/res/Si1145-46-47.pdf)
- [Grove - 阳光传感器Github仓库](https://github.com/Seeed-Studio/Grove_Sunlight_Sensor)
- [光谱](https://en.wikipedia.org/wiki/Spectrum)
- [流明（单位）](https://en.wikipedia.org/wiki/Lumen_(unit))
- [紫外线指数](https://en.wikipedia.org/wiki/Ultraviolet_index)
- [Grove - 阳光传感器 v2.0](https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/res/v2.0/Grove-SunlightSensorv2.0.zip)
- [SI1151-AB00-GMR数据手册](https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/res/v2.0/SI1151-AB00-GMR.pdf)

## 项目

**环境立方体！了解你脚下的土地！** 一个配备所有必要传感器的立方体，适用于农业等广泛应用。了解你脚下的土地！

<iframe frameborder="0" height="327.5" scrolling="no" src="https://www.hackster.io/dhairya-parikh/the-environment-cube-know-the-land-beneath-you-b3c2dd/embed" width="350"></iframe>

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