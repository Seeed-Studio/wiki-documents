---
title: Grove - 光耦继电器 (M281)
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-Optocoupler_Relay-M281/
slug: /cn/Grove-Optocoupler_Relay-M281
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/preview.png)

该模块是一种双向 SPSD（单刀单掷），常开固态继电器（SSR）。Grove 光耦继电器 (M281) 提供非常低的导通电阻，从而允许高负载电流额定值。

与我们网站上的其他 TRIAC SSR 不同，这种继电器基于 MOSFET，因此它可以承载交流负载和直流负载。如果您需要使用带直流负载的 SSR，这就是您需要的产品！

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Optocoupler-Relay-M281-p-2923.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 版本

| 产品版本                  | 变更内容                                                                                               | 发布日期       |
|---------------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove-光耦继电器 (M281) | 初始版本                                                                                               | 2018年12月    |

## 特性

- 低导通电阻（0.5Ω 最大值）
- 1A 连续负载电流
- 60V 负载电压额定值
- 低输入控制电流（3mA 典型值）
- 高输入到输出隔离（1.5kV 最小值）

## 应用

- 自动化测试设备
- 读表系统
- 医疗设备
- 电池监测
- 多路复用器

## 规格

  | 参数                | 值                     |
  |---------------------|------------------------|
  | 电源电压           | 3.3V / 5V             |
  | 工作温度           | -40 – 85℃            |
  | 存储温度           | -55°C – 125°C         |
  | 阻断电压           | 60 V                  |
  | 连续负载电流       | 1A                    |
  | 漏电流             | 0.2 uA（典型值）<br />1 uA（最大值） |
  | 导通电阻           | 0.5 Ω（典型值）<br />0.7 Ω（最大值） |
  | 隔离电阻           | 100 GΩ                |
  | 导通时间           | 1.4 ms（典型值）<br />5 ms（最大值） |
  | 关断时间           | 0.2 ms（典型值）<br />2 ms（最大值） |
  | 接口               | 数字                  |
  | 尺寸               | 长: 40mm 宽: 20mm 高: 13mm |
  | 重量               | 10.6g                 |
  | 包装尺寸           | 长: 135mm 宽: 85mm 高: 13mm |
  | 毛重               | 11g                   |
  <div align="center"><b>表 1.</b><i>一般规格</i></div>

## 硬件概览

### 引脚图

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/pinout.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/pinout.jpg" /></a></p>
    <figcaption><b>图 1</b>. <i>引脚图</i></figcaption>
  </figure>
</div>

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

## 入门指南

### 使用 Arduino

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield | Grove - 光耦继电器 (M281) | 红色 LED |
|--------------|-------------|-----------------|-----|
|![图片描述](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![图片描述](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![图片描述](https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/led.jpg)|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-Optocoupler-Relay-M281-p-2923.html)|[立即购买](https://www.seeedstudio.com/3mm-LED-Red-25-PCs-p-1588.html)|

>此外，您可以考虑我们的新产品 [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)，它相当于 Seeeduino V4.2 和 Base Shield 的组合。

:::note
    **1** 请轻轻插入 USB 数据线，否则可能会损坏接口。请使用内部有 4 根线的 USB 数据线，只有 2 根线的 USB 数据线无法传输数据。如果您不确定您拥有的线缆，可以点击 [这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) 购买。

    **2** 每个 Grove 模块在购买时都会附带一根 Grove 连接线。如果您丢失了 Grove 连接线，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买。
:::

**硬件连接**

- **步骤 1.** 将 Grove - Base Shield 插入 Seeeduino。

- **步骤 2.** 将 Grove - 光耦继电器 (M281) 连接到 Base Shield 的 **D5** 端口。

- **步骤 3.** 将 LED 和 Grove - 光耦继电器 (M281) 连接到 Grove - Base Shield 的 **3.3V** 和 **GND** 引脚。（请参考下图）

- **步骤 4.** 使用 USB 数据线将 Seeeduino 连接到电脑。

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/connect2.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/img/connect2.png" /></a></p>
    <figcaption><b>图 2</b>. <i>引脚连接，请确保连接到 3.3V 引脚，5V 会损坏此 LED。</i></figcaption>
  </figure>
</div>

#### 软件

:::note
        如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 将以下代码复制到 Arduino IDE 中的新草图中

```cpp
const int Pinout = 5;      

void setup() {
 pinMode(Pinout, OUTPUT);
 Serial.begin(9600);
}

void loop() {

  digitalWrite(Pinout, HIGH); 
  delay(500);
  digitalWrite(Pinout, LOW); 
  delay(500);
}
```

- **步骤 2.** 上传示例代码。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

:::tip
  如果一切正常，我们将看到 LED 闪烁。
:::

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/res/Grove-Optocoupler%20Relay%20(M281).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[ZIP]** [Grove - 光耦继电器 (M281) 原理图文件](https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/res/Grove-Optocoupler%20Relay%20(M281).zip)
- **[PDF]** [M281 数据手册](https://files.seeedstudio.com/wiki/Grove-Optocoupler-Relay-M281/res/M281_Datasheet.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得最佳体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>