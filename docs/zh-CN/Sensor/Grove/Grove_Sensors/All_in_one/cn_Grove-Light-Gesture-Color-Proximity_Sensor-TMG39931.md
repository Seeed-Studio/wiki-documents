---
description: Grove - 光手势颜色接近传感器 (TMG39931)
title: Grove - 光手势颜色接近传感器 (TMG39931)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931
last_update:
  date: 1/5/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/main.jpg" /></div>

Grove - 光、手势、颜色和接近传感器是一款基于 TMG39931 的产品，具有先进的手势检测、接近检测、数字环境光感 (ALS)、颜色感应 (RGBC) 以及用于广播的光学模式生成/传输功能。这款四合一传感器可以收集环境数据，并通过 I2C 总线进行传输。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Light-Color-Proximity-Sensor-TMG39931-p-2879.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 可升级为工业传感器

通过 SenseCAP [S2110 控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) 和 [S2100 数据记录仪](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将 Grove 转换为 LoRaWAN® 传感器。Seeed 不仅帮助您进行原型设计，还为您提供使用 SenseCAP 系列强大的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

SenseCAP S210x 系列工业传感器为环境传感提供开箱即用的体验。请参考性能更高、更可靠的 S2102 无线光强传感器，用于光强检测。该系列包括用于土壤湿度、空气温度和湿度、光强、二氧化碳、EC，以及 8 合 1 气象站的传感器。尝试最新的 [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device)，为您的下一个成功的工业项目助力。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td align="center"><font size={4}><strong>SenseCAP 工业传感器</strong></font></td>
    </tr>
    <tr>
      <td>
        <div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S2102-.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 光强传感器</strong></a></td>
    </tr>
  </tbody>
</table>

## 特性

- 单设备集成光学解决方案
- 环境光感应
- 紫外线和红外线阻隔滤波器
- 复杂手势感应
- 适合在深色玻璃后操作 - 高灵敏度
- 接近检测
- 条形码模式生成和传输
- 单个内部 LED 的双重用途
- 调整以提供一致的读取效果

## 规格

|项目|值|
|---|---|
|供电电压|3.3V / 5V|
|工作温度| -30～85℃|
|存储温度| -40～85℃|
|最大光照度 [klx]|60|
|接口|I2C|
|I2C 地址|0x39|

## 典型应用

- 手势检测
- 颜色感应
- 环境光感应
- 手机触摸屏禁用
- 机械开关替代
- 打印条形码仿真

## 工作原理

**手势检测**

手势检测利用四个方向光电二极管感应反射的红外能量（由集成 LED 提供），将物理运动信息转换为数字信息。

**接近检测**

接近检测功能通过光电二极管检测反射的红外能量（由集成 LED 提供）实现物体检测。

**数字环境光感应与颜色感应**

颜色和环境光检测功能提供红、绿、蓝和透明光强度数据。每个 R、G、B、C 通道都配备紫外线和红外线阻隔滤波器以及专用数据转换器，同时生成 16 位数据。这种架构允许应用程序准确测量环境光并感应颜色，从而使设备能够计算照度和色温、控制显示屏背光以及色度。

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

## 入门指南

### 使用 Arduino

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield | Grove - 光&手势&颜色&接近传感器 (TMG39931) |
|----------------|-------------|---------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/thumbnail.jpg" /></div>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com)|

:::note
**1** 请轻轻插入 USB 数据线，否则可能会损坏接口。请使用内部有 4 根线的 USB 数据线，只有 2 根线的 USB 数据线无法传输数据。如果您不确定手头的数据线是否符合要求，可以点击 [这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) 购买。

**2** 每个 Grove 模块在购买时都会附带一根 Grove 数据线。如果您丢失了 Grove 数据线，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买。
:::

- **步骤 1.** 将 Grove - 光&手势&颜色&接近传感器 (TMG39931) 连接到 Grove-Base Shield 的 **I2C** 端口。

- **步骤 2.** 将 Grove-Base Shield 插入 Seeeduino。

- **步骤 3.** 使用 USB 数据线将 Seeeduino 连接到电脑。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/withard.jpg" /></div>

#### 软件

:::caution
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

:::tip
手势功能尚未支持，因为该功能需要 AMS 提供的算法。一旦获得 AMS 的支持，我们将更新此库。
:::

**示例 1**

- **步骤 1.** 从 Github 下载 [Seeed_TMG3993](https://github.com/Seeed-Studio/Seeed_TMG3993.git) 库。

- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。

- **步骤 3.** 重启 Arduino IDE。打开示例，可以通过以下三种方式打开：
    1. 在 Arduino IDE 中直接打开，路径为：**File --> Examples --> Seeed TMG3993(Grove - 光&手势&颜色&接近传感器) --> Example1-ProximityPullRaw**。

    <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/ard1.png" /></div>

    2. 在电脑中打开，点击 **basic_demo.ino**，路径为 **XXXX\Arduino\libraries\Seeed_TMG3993-master⁩\⁨examples⁩\Example1-ProximityPullRaw⁩⁩\Example1-ProximityPullRaw.ino**，其中 **XXXX** 是您安装 Arduino IDE 的位置。

    ![](https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/ard2.png)

    3. 或者，您可以点击代码块右上角的图标 ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg)，将以下代码复制到 Arduino IDE 的新草图中。

```cpp
#include <Wire.h>

#include "Seeed_TMG3993.h"

TMG3993 tmg3993;

void setup()
{
  Serial.begin(9600);
  Serial.println("TMG3993 Proximity Example");

  Wire.begin();

  if (tmg3993.initialize() == false)
  {
    Serial.println("Device not found. Check wiring.");
    while (1);
  }
  tmg3993.setupRecommendedConfigForProximity();
  tmg3993.enableEngines(ENABLE_PON | ENABLE_PEN | ENABLE_PIEN);
}

void loop()
{
  if (tmg3993.getSTATUS() & STATUS_PVALID)
  {
    uint8_t proximity_raw = tmg3993.getProximityRaw();  //读取接近数据将清除状态位
    Serial.print("Proximity Raw: ");
    Serial.println(proximity_raw);
  }
  delay(1);
}
```

:::caution
库文件可能会更新。此代码可能不适用于更新后的库文件，因此我们建议您使用前两种方法。
:::

:::tip
如果一切正常，接近传感器的原始 (uint16_t) 数据应该可以从串行监视器读取。
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/eg1.png" /></div>

如果您想运行其他示例，可以执行类似的步骤。

**示例 2**

此示例也用于检测接近，但采用中断方式。

需要配置两个阈值——低阈值和高阈值。任何接近值在此范围内不会触发事件，但超出此范围的值将触发事件。具体来说，当接近传感器值低于低阈值超过 10 次时，将发出接近移除事件；当接近传感器值高于高阈值超过 10 次时，将发出接近检测事件。这里的 10 次可以通过 `setInterruptPersistenceReg` 配置（请参阅 `setupRecommendedConfigForProximity` 示例）。

- **步骤 1.** 从 Github 下载 [Seeed_TMG3993](https://github.com/Seeed-Studio/Seeed_TMG3993.git) 库。

- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。

- **步骤 3.** 重启 Arduino IDE。打开示例，与示例 1 的方式相同，但这次选择 "Example2-ProximityInterrupt" 而不是 "Example1"。或者将以下代码复制到 Arduino IDE：

```cpp
#include <Wire.h>

#include "Seeed_TMG3993.h"

TMG3993 tmg3993;
int last_interrupt_state = -1;

void setup()
{
  Serial.begin(9600);
  Serial.println("TMG3993 Proximity Example");

  Wire.begin();

  if (tmg3993.initialize() == false)
  {
    Serial.println("Device not found. Check wiring.");
    while (1);
  }
  tmg3993.setupRecommendedConfigForProximity();
  tmg3993.setProximityInterruptThreshold(25, 150);  //小于 5cm 将触发接近事件
  tmg3993.enableEngines(ENABLE_PON | ENABLE_PEN | ENABLE_PIEN);
}

void loop()
{
  if (tmg3993.getSTATUS() & STATUS_PINT)
  {
    uint8_t proximity_raw = tmg3993.getProximityRaw();  //读取接近数据将清除状态位

    if (proximity_raw >= 150 && last_interrupt_state != 1) {
      Serial.println("Proximity detected!!!");
      Serial.print("Proximity Raw: ");
      Serial.println(proximity_raw);
      last_interrupt_state = 1;
    } else if (proximity_raw <= 25 && last_interrupt_state != 0) {
      Serial.println("Proximity removed!!!");
      Serial.print("Proximity Raw: ");
      Serial.println(proximity_raw);
      last_interrupt_state = 0;
    }

    // 别忘了清除中断位
    tmg3993.clearProximityInterrupts();
  }
  delay(10);
}

```

:::caution
库文件可能会更新。此代码可能不适用于更新后的库文件，因此我们建议您使用前两种方法。
:::

上传代码到 Seeeduino 后，您应该在串行监视器中看到类似以下内容。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/eg2.png" /></div>

**示例 3**

此示例读取 R、G、B、C 传感器值。C 在芯片数据手册中定义为未经过滤的透明通道。本示例还根据传感器应用说明中的公式计算环境光的 Lux 值。

- **步骤 1.** 从 Github 下载 [Seeed_TMG3993](https://github.com/Seeed-Studio/Seeed_TMG3993.git) 库。

- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。

- **步骤 3.** 重启 Arduino IDE。打开示例，与示例 1 的方式相同，但这次选择 "Example3-Color-Light" 而不是 "Example1"。或者将以下代码复制到 Arduino IDE 中：

```cpp


#include <Wire.h>

#include "Seeed_TMG3993.h"

TMG3993 tmg3993;

void setup()
{
  Serial.begin(9600);
  Serial.println("TMG3993 Color Example");

  Wire.begin();

  if (tmg3993.initialize() == false)
  {
    Serial.println("Device not found. Check wiring.");
    while (1);
  }
  tmg3993.setADCIntegrationTime(0xdb); // 集成时间：103ms
  tmg3993.enableEngines(ENABLE_PON | ENABLE_AEN | ENABLE_AIEN);
}

void loop()
{
  if (tmg3993.getSTATUS() & STATUS_AVALID)
  {
    uint16_t r,g,b,c;
    int32_t lux, cct;
    tmg3993.getRGBCRaw(&r, &g, &b, &c);
    lux = tmg3993.getLux(r, g, b, c);
    // CCT 的计算仅来自 `应用说明`，
    // 根据我们的测试结果，可能存在误差。
    cct = tmg3993.getCCT(r, g, b, c);

    Serial.print("RGBC 数据: ");
    Serial.print(r);
    Serial.print("\t");
    Serial.print(g);
    Serial.print("\t");
    Serial.print(b);
    Serial.println("\t");
    Serial.println(c);

    Serial.print("Lux: ");
    Serial.print(lux);
    Serial.print("\tCCT: ");
    Serial.println(cct);
    Serial.println("----");

    // 别忘了清除中断位
    tmg3993.clearALSInterrupts();
  }
  delay(100);
}

```

:::caution
库文件可能会更新。此代码可能不适用于更新后的库文件，因此我们建议您使用前两种方法。
:::

上传代码到 Seeeduino 后，您应该在串行监视器中看到类似以下内容。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/eg3.png" /></div>

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/res/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove - 光线&手势&颜色&接近传感器(TMG39931) Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/res/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931.zip)

- **[Zip]** [Grove - 光线&手势&颜色&接近传感器(TMG39931) 库文件](https://github.com/Seeed-Studio/Seeed_TMG3993/archive/master.zip)

- **[PDF]** [TMG39931 数据手册](https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/res/TMG3993.pdf)

- **[PDF]** [PDF 版本 WIKI](https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/res/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得流畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>