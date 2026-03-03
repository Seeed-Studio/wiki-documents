---
title: 传感器 - 光传感器（介绍）
description: 传感器 - 光传感器（介绍）
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Sensor_light
last_update:
  date: 1/5/2023
  author: jianjing Huang
---

# Seeed 光传感器选择指南

在 Seeed，我们发布了不同的光传感器，这可能会给一些不知道选择哪一个以及哪一个适合自己需求的用户带来困扰。解决方案来了！请查看本网站的比较以获取更多参考。

要查看我们商城中的所有光传感器，请点击[商城光传感器标签](https://www.seeedstudio.com/tag/light.html)进行查看。

## 什么是光传感器

光传感器是一种将检测到的光能（光子）转换为电能（电子）的光电器件。听起来很简单？光传感器不仅仅是它的定义那么简单。它有不同的类型，用于各种应用等等！

### 术语表

在我们开始今天的光传感器指南之前，我们必须了解以下通常与光相关的术语。我已经简化了它们以便于理解：

### 坎德拉（Candela）

- 源于蜡烛一词，坎德拉指的是发光强度；光对肉眼来说有多强
  
- 发光强度越高，对我们眼睛的敏感度就越高

### 流明（Lumen）

- 通过发光强度和光束填充角度之间的关系来测量光源发出的可见光总量
- 通常用于评定灯泡的亮度
- 简单来说，流明 = 向所有方向发射的光的总量

### 勒克斯（Lux）

- 用于测量照度，即光通量分布的区域
- 它类似于流明，但考虑了表面积
- 简单来说，勒克斯 = 落在特定表面上的光的总量

:::note
如果您仍然对流明和勒克斯感到困惑，这里有一个图形表示：
:::

<div align="center"><img src="https://blog.seeedstudio.com/wp-content/uploads/2020/01/image-88.png"/></div>

*参考：[勒克斯与流明](https://www.waveformlighting.com/home-residential/what-is-the-difference-between-lux-and-lumens)*

### 光传感器的类型有哪些

有不同类型的光传感器可用；主要是光敏电阻、光电二极管和光电晶体管。听起来很技术性？我将通过下面的解释来分解它！

**1. 光敏电阻（LDR）**

<div align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Photoresistors_-_three_sizes_-_mm_scale.jpg"/></div>

在光传感器电路中使用的最常见的光传感器类型是光敏电阻，也称为光敏电阻器（LDR）。光敏电阻用于简单地检测光是开启还是关闭，并比较一天中的相对光照水平。

**光敏电阻是由什么制成的？**

- 一种称为硫化镉电池的高阻半导体材料，对可见光和近红外光高度敏感

**光敏电阻如何工作？**

<div align="center"><img src="https://www.edgefx.in/wp-content/uploads/2015/02/Light-Intensity-vs-LDR-Resistance.jpg"/></div>

顾名思义，光敏电阻的工作原理类似于普通电阻器，但电阻变化取决于它所暴露的光量。

- 高强度的光导致硫化镉电池之间的电阻较低
- 低强度的光导致硫化镉电池之间的电阻较高

这种工作原理可以在路灯等应用中看到，在白天，较高的光强度导致较低的电阻和不产生光。

**2. 光电二极管**

<div align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Fotodio.jpg/220px-Fotodio.jpg"/></div>

光电二极管是另一种类型的光传感器。但与 LDR 使用电阻变化不同，它对光更复杂，容易将光转换为电流流动。

也称为光电探测器、光传感器。

**光电二极管是由什么制成的？**

- 光电二极管主要由硅和锗材料制成，包括光学滤波器、内置透镜和表面区域

**光电二极管如何工作？**

光电二极管基于称为内光电效应的工作原理工作。简单来说，当光束照射时，电子被释放，产生电子空穴，导致电流流过。

- 存在的光越亮，电流就越强。

**光电二极管光传感器应用**

由于光电二极管产生的电流与光强度成正比，这使得它有利于需要快速光响应变化的光感应。

由于光电二极管对红外光有响应，它也适用于更多用途。

以下是光电二极管的一些应用：

- 消费电子产品，从光盘播放器到烟雾探测器，甚至遥控设备
- 医疗应用，如用于测量和分析目的的设备/仪器
- 太阳能系统，如太阳能电池板

**3. 光电晶体管**

我们今天要探索的最后一种光传感器类型是光电晶体管。光电晶体管光传感器可以描述为光电二极管 + 放大器。通过增加放大，光电晶体管的光敏感性要好得多。

然而，与光电二极管相比，它在低光水平检测方面表现不佳。
由于两种光传感器类型共享相似的工作原理，请参考之前的解释！

## Seeed 的光传感器

<div align="center">
<figure>
  <a href="https://files.seeedstudio.com/wiki/Light-Sensor-Selection-Guide/Light-Sensor.png" target="_blank">
    <img src="https://files.seeedstudio.com/wiki/Light-Sensor-Selection-Guide/Light-Sensor.png" alt="Seeed Light Sensor Selection Guide" title="Seeed Light Sensor Selection Guide" />
    <figcaption><b>图 2</b>. <i>Seeed 的光传感器</i></figcaption>
  </a>
</figure>
</div>

### 哪一款最适合您

| 产品 | [Grove - Light Sensor v1.1](https://www.seeedstudio.com/Grove-Light-Sensor-P-v1-1.html) | [Grove - Light Sensor v1.2](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html) | [Grove - Digital Light Sensor](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-TSL2561.html) | [Grove - Sunlight Sensor](https://www.seeedstudio.com/Grove-Sunlight-Sensor.html) | [Grove - I2C UV Sensor (VEML6070)](https://www.seeedstudio.com/Grove-I2C-UV-Sensor-VEML6070.html) | [Grove - Light&Color&Proximity Sensor](https://www.seeedstudio.com/Grove-Light-Color-Proximity-Sensor-TMG39931-p-2879.html) |
|-----------------------|---------------------------|---------------------------|------------------------------|-------------------------|----------------------------------|--------------------------------------|
| 缩略图 | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/light_sensor_s.jpg" /></div>      | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/light_sensor_s.jpg" /></div>  |<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/digital%20light%20sensor_small.jpg" /></div>                     |<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Light-Sensor-Selection-Guide/Grove_sunlight_sensor_view.jpg" /></div>                                     | <div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/thumbnail.jpg" /></div>                                       |<div align="center"><img width="{100}" src="https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/thumbnail.jpg" /></div> |
| 接口 | 模拟 | 模拟 | 数字 | I2C | I2C | I2C |
| 峰值波长 | 540nm | 540nm | / | 280-950nm | 320-410 nm | / |
| 工作温度 | -40°C to 85°C | -40°C to 85°C | -40°C to 85°C | -40°C to 85°C | -40°C to 85°C | -30～85°C |
| 最大照度 [klx] | / | / | 0.1 - 40,000 LUX | / | / | / |
| UVA 灵敏度 | / | / | / | / | 5 μW/cm2/step(典型值) | 60|

### 快速了解

### 低成本选择：[Grove – Light Sensor v1.2](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html)

<div align="center"><img width={400} src="https://media-cdn.seeedstudio.site/media/catalog/product/cache/ab187aaa5f626ad16c8031644cd2de5b/h/t/httpsstatics3.seeedstudio.comseeedimg2016-10po8b7qd0xnlnchgogziq9g3d.jpg" /></div>

首先介绍 Seeed 提供的光传感器列表中的 Grove – Light Sensor v1.2！除了 2.90 美元的低价格标签外，它还配备了高灵敏度和可靠的光电二极管，满足您的光感应需求！

通过我们的 Grove 即插即用系统，可以轻松与您的 Arduino 板配对，为您省去连接跳线和焊接的麻烦！

**其特性包括：**

- 板载双运放芯片 LM358
- 模拟模块
- 板载 grove 端口，便于接口连接
- 可转换电信号输出
- 取决于控制器板上的 ADC，例如对于 8 位 ADC 可以输出 0-255）
- 小尺寸外形
- 识别更宽的光谱

### 数字信号输出选择：[Grove – Digital Light Sensor](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-TSL2561.html)

<div align="center"><img width={400} src="https://media-cdn.seeedstudio.site/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/h/t/httpsstatics3.seeedstudio.comseeedfile2018-07bazaar881092_3.jpg" /></div>

如果您正在寻找数字信号输出选择以及可选择的光谱范围，Grove – Digital Light Sensor 就是您的选择！

基于执行数字信号输出的 I2C 光数字转换器 TSL2561，这个光传感器模块具有双光敏二极管，您可以在 3 种模式之间切换来进行读数！

这三种模式是红外模式、全光谱模式和人眼可见模式
人眼可见模式为您提供接近眼部感受的读数

**其特性包括：**

- 宽动态范围：0.1 – 40,000 LUX
- 宽工作温度范围：-40°C 至 85°C
- 在 400 kHz I2C 快速模式下的高分辨率 16 位数字输出
- 可编程中断功能，具有用户定义的上下阈值设置
- 可选择的检测模式

### 阳光检测选择：[Grove – Sunlight Sensor](https://www.seeedstudio.com/Grove-Sunlight-Sensor.html)

<div align="center"><img width={400} src="https://media-cdn.seeedstudio.site/media/catalog/product/cache/ab187aaa5f626ad16c8031644cd2de5b/h/t/httpsstatics3.seeedstudio.comseeedfile2018-07bazaar885583_3.jpg" /></div>

虽然它是为带有 UV 的直接阳光检测而制造的，但这个数字光传感器也适用于各种其他光源，包括可见光和红外光。

基于 SiLabs 的 SI1145 传感器，它是一个低功耗、基于反射的红外接近、UV 指数和环境光传感器，具有 I2C 数字接口和可编程事件中断输出。

由于性能是关键，这个光传感器提供宽动态和光谱检测范围来完善一切！

**其特性包括：**

- 数字光传感器
- 宽光谱检测范围
- 可编程配置
- 3.3/5V 供电
- 直接检测阳光
- Grove 兼容
- I2C 接口（7位）

## 应用创意

- 光线测量
- 光线检测器
- 光控开关
- 智能家居设备
- 环境光感应
- 显示面板背光控制
- 键盘照明控制

## 实用项目

**Grove - 光传感器介绍**:

<iframe frameborder="0" height="327.5" scrolling="no" src="https://www.hackster.io/ingo-lohs/grove-introduction-in-a-light-sensor-a55efd/embed" width="350"></iframe>

**环境立方体！使用Sigfox了解您脚下的土地**: 一个配备所有必要传感器的立方体，适用于农业、监测等广泛应用。

<iframe frameborder="0" height="327.5" scrolling="no" src="https://www.hackster.io/dhairya-parikh/the-environment-cube-know-the-land-beneath-you-using-sigfox-952f29/embed" width="350"></iframe>

**Seeed LoRa IoTea解决方案**: 应用于茶园的自动信息收集系统。它是智能农业信息收集的一部分。

<iframe frameborder="0" height="327.5" scrolling="no" src="https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed" width="350"></iframe>

**Intel Edison物联网水培控制器**: 在波士顿物联网黑客马拉松期间使用Intel Edison的物联网水培控制器。

<iframe frameborder="0" height="327.5" scrolling="no" src="https://www.hackster.io/bltrobotics/intel-edison-iot-hydroponic-controller-d7132d/embed" width="350"></iframe>

**COI - 光透射计**: 成品使用Grove入门套件Plus中提供的光传感器来测量光强度的变化。

<iframe frameborder="0" height="327.5" scrolling="no" src="https://www.hackster.io/DigitalFabber/coi-light-transmission-meter-8044fd/embed" width="350"></iframe>

**环境立方体！了解您脚下的土地！** 一个配备所有必要传感器的立方体，适用于农业等广泛应用。了解您脚下的土地！

<iframe frameborder="0" height="327.5" scrolling="no" src="https://www.hackster.io/dhairya-parikh/the-environment-cube-know-the-land-beneath-you-b3c2dd/embed" width="350"></iframe>

## 资源

### Grove - 光传感器 v1.1 教程

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/ZvFswNYY2mU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

- [什么是光传感器？类型、用途、Arduino指南](https://www.seeedstudio.com/blog/2020/01/08/what-is-a-light-sensor-types-uses-arduino-guide/)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div className="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" className="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>