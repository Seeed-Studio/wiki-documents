---
description: Grove - OLED 显示屏 0.66" (SSD1306)
title: Grove - OLED 显示屏 0.66" (SSD1306)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-OLED-Display-0.66-SSD1306_v1.0
last_update:
  date: 1/7/2023
  author: shuxu hu
---

<meta name="google-site-verification" content="2bq3L0F_PFVokQM-qT-al7x9FcSNJOO8TtJfAHW43lE" />

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/104020248_Front-05-min.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/104020248_Front-05-min.png" alt="pir" width={600} height="auto" /></p>

作为新版本，Grove - OLED 显示屏 0.66" (SSD1306) 的屏幕尺寸比其他 OLED 显示屏（如 Grove - OLED 显示屏 0.96" (SSD1315)）更小。然而，它仍然可以以 64×48 分辨率显示，并保持与其他显示屏相同的性能，例如高亮度、低功耗以及背面的 Grove 接口等。

您可以使用 I2C 接口通过微控制器点亮迷你显示屏，以显示文字、图像或任何您想要的内容。0.66" 的显示屏可以帮助您在更小的空间中显示信息，您可以将其用作 Arduino OLED 显示屏、Raspberry Pi PLED 显示屏等。

此 Grove-OLED 显示屏支持由 Olikraus 编写的 U8g2 单色显示库。该库非常方便且兼容性良好，可以支持 SSD1306 和其他芯片，例如 SSD1315。所以赶快入手一个，享受这个迷你屏幕带来的乐趣吧！
<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-OLED-Display-0-66-SSD1306-v1-0-p-5096.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-OLED-Display-0-66-SSD1306-v1-0-p-5096.html)

## 特性

- 基于 SSD1306，裁剪至 64×48 分辨率（单色）
- 超小尺寸：20 * 20mm
- 可更改的 I2C 地址
- 兼容 3.3V/5V 电源供电
- 高对比度，高亮度
- 低功耗
- 宽工作温度范围：-40℃ ~ +85 ℃
- 用户友好设计：背面带 Grove 接口

## 规格

|参数|值|
|---|---|
|输入电压|3.3V / 5V|
|输出电压|0 ~ 2.3V|
|像素|64 x 48|
|温度范围|-40℃ ~ +85 ℃|
|接口|I2C|

## 硬件概览

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/104020248_Front-05-min.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/104020248_Front-05-min.png" /></a></p>
  </figure>
</div>

## 支持的平台

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## 入门指南

### 使用 Arduino

**所需材料**

| Seeeduino V4.2 | Base Shield | Grove - OLED 显示屏 0.66" |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/1629856731(1).png" alt="pir" width={600} height="auto" /></p>
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-OLED-Display-0-66-SSD1306-v1-0-p-5096.html)|

>此外，您可以考虑我们的新产品 [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)，它相当于 Seeeduino V4.2 和 Base Shield 的组合。

#### 硬件连接

- **步骤 1.** 将 Grove - TDS 传感器插入 Grove - Base Shield 的 **I2C** 端口。

- **步骤 2.** 将 Grove - Base Shield 插入 Seeeduino。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/arduino1.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/arduino1.png" alt="pir" width={600} height="auto" /></p>

#### 软件

:::note
        如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 进入 **Sketch** -> **Include Library** -> **Manage Libraries...**，然后在 **Library Manager** 中搜索并安装 **`U8g2`** 库。

- **步骤 2.** 打开 Arduino IDE 并创建一个新文件，然后将以下代码复制到新文件中。

```cpp
#include <Arduino.h>
#include <U8g2lib.h>
#include <Wire.h>

U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);   // 所有没有显示屏复位功能的板子

void setup(void) {
  u8g2.begin();
}

void loop(void) {
  u8g2.clearBuffer();
  u8g2.setFont(u8g2_font_ncenB08_tr);
  u8g2.drawStr(32,30,"Hello \n");
  u8g2.drawStr(32,45,"World!");
  u8g2.sendBuffer();
  delay(1000);  
}
```

注意：您需要了解 Grove - OLED 显示屏 0.66" (SSD1306) 是基于 128×64 分辨率的屏幕。当您使用 U8g2 SSD 128*64 驱动显示时，可能需要从 (31,16) 点开始，而不是 (0,0)。范围是从 (31,16) 到 (95,63)。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/note.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/note.png" alt="pir" width={600} height="auto" /></p>

- **步骤 3.** 上传示例代码。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 4.** OLED 显示屏应该如下所示：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/arduino2.png" /></div>

## U8g2库介绍

U8g2 是一个用于嵌入式设备的单色图形库。U8g2 支持单色 OLED 和 LCD，包括我们使用的 SSD1306 芯片。

Arduino 的 U8g2 库可以通过 Arduino IDE 的库管理器安装。U8g2 还包括 U8x8 库：

**U8g2**

- 包含所有图形操作（线条/框/圆绘制）。
- 支持多种字体，对字体高度几乎没有限制。
- 需要在微控制器中占用一些内存来渲染显示。

**U8x8**

- 仅支持文本输出（字符）设备。
- 仅允许适合 8x8 像素网格的字体。
- 直接写入显示屏，无需在微控制器中使用缓冲区。

这里提供了 [**U8g2 库 wiki**](https://github.com/olikraus/u8g2/wiki) 以及 [U8g2 API 参考](https://github.com/olikraus/u8g2/wiki/u8g2reference) 页面。

## 常见问题解答

**Q1#** 示例无法在其他板子上运行？

**A1:** U8g2 在初始化时有不同的模式，除了硬件 I2C，它还可以使用软件 I2C。如果无法运行，请尝试使用软件 I2C。更多信息请访问 [u8g2](https://github.com/olikraus/U8g2_Arduino)。一些示例和简要介绍也可以在 [这里](https://github.com/Seeed-Studio/Seeed_Learning_Space/tree/master/Grove%20-%20OLED%20Display%200.96''(SSD1315)V1.0) 找到。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/GroveOLEDDisplay0.66(SSD1306)inEagle.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[ZIP]** [Grove - OLED Display 0.66 (SSD1306)_v1.0 文件](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/GroveOLEDDisplay0.66(SSD1306)inEagle.rar)
- **[ZIP]** [SSD1306 数据手册](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.66-SSD1306/SSD1306-Datasheet.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供各种支持，确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>