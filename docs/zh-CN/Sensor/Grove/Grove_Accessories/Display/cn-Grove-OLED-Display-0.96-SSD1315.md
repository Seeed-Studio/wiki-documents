---
description: Grove - 0.96英寸OLED显示屏（SSD1315）
title: Grove - 0.96英寸OLED显示屏（SSD1315）
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-OLED-Display-0.96-SSD1315
last_update:
  date: 03/23/2024
  author: WuFeifei
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/Grove-OLED-Displey-0.96-SSD1315-wiki.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/Grove-OLED-Displey-0.96-SSD1315-wiki.jpg" alt="pir" width={600} height="auto" /></p>

Grove - OLED显示屏 0.96英寸（SSD1315）是一款具有Grove I2C接口的单色（白色）128×64像素被动显示矩阵模块。

得益于新的SSD1315芯片，它可以在3.3V电压下工作，因此我们移除了昂贵的DC-DC升压电路。而且，由于板载电平转换电路的存在，新款Grove - OLED显示屏 0.96英寸可以兼容3.3V和5V平台。也就是说，您可以轻松地将它用作Arduino OLED显示屏、Raspberry Pi OLED显示屏等。

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html)
## 特点

- 兼容3.3V/5V
- 可更改的I2C地址
- 低功耗
- 单色（白色）128×64像素
- 高对比度，高亮度
- 宽工作温度范围：-40℃ ~ +85℃

## 规格

| 参数     | 值           |
|---|---|
|输入电压|3.3V / 5V|
|输出电压| 0 ~ 2.3V |
|像素|128 x 64|
|温度范围|-40℃ ~ +85 ℃|
|接口|I2C/数字接口|

## 硬件概述

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/Grove-OLED-Displey-0.96-SSD1315-pin.jpgg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/Grove-OLED-Displey-0.96-SSD1315-pin.jpg" /></a></p>
  </figure>
</div>



## 支持的平台

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|树莓派|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## 入门指南

### 使用Arduino操作

**所需材料**


| Seeeduino V4.2 | 基础扩展板 | Grove - OLED 显示屏 0.96英寸 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/Grove-OLED-Displey-0.96-SSD1315-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html)|

>此外，您还可以考虑我们新推出的[Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)，它与Seeeduino V4.2和Base Shield的组合功能相当。

#### 硬件连接

- **步骤 1.** 将Grove - TDS传感器插入Grove - 基础扩展板的**I2C**端口。

- **步骤 2.** 将Grove - 基础扩展板插入Seeeduino。
- **步骤 3.** 通过USB线将Seeeduino连接到计算机。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/connection.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/connection.png" alt="pir" width={600} height="auto" /></p>

#### 软件

:::注意
        如果您是第一次使用Arduino，我们强烈建议您在开始之前先查看[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 导航到 **Sketch** -> **Include Library** -> **Manage Libraries...**，在**Library Manager**中搜索并安装**`U8g2`**库。

- **步骤 2.** 打开Arduino IDE并创建一个新文件，然后将以下代码复制到新文件中。

```cpp
#include <Arduino.h>
#include <U8g2lib.h>

#ifdef U8X8_HAVE_HW_SPI
#include <SPI.h>
#endif
#ifdef U8X8_HAVE_HW_I2C
#include <Wire.h>
#endif


U8G2_SSD1306_128X64_NONAME_F_HW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);  // High speed I2C

// U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);    //Low spped I2C

void setup(void) {
  u8g2.begin();
}

void loop(void) {
  u8g2.clearBuffer();					// clear the internal memory
  u8g2.setFont(u8g2_font_ncenB08_tr);	// choose a suitable font
  u8g2.drawStr(0,10,"Hello World!");	// write something to the internal memory
  u8g2.sendBuffer();					// transfer internal memory to the display
  delay(1000);  
}
```

- **步骤 3.** 上传示例代码。如果您不知道如何上传代码，请参考[如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)。

- **步骤 4.** OLED显示屏应该显示如下：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/img/result.png" /></div>

## U8g2库介绍

U8g2是一个用于嵌入式设备的单色图形库。U8g2支持单色OLED和LCD，包括我们使用的SSD1315芯片。

Arduino库U8g2可以从Arduino IDE的库管理器中安装。U8g2还包括U8x8库：

**U8g2**

- 包含所有图形过程（线/框/圆绘制）。
- 支持多种字体。对字体高度（几乎）没有限制。
- 在微控制器中需要一些内存来渲染显示屏。

**U8x8**

- 仅支持文本输出（字符）设备。
- 只允许使用适合8x8像素网格的字体。
- 直接写入显示屏。不需要微控制器中的缓冲区。

这里提供了[**U8g2库wiki**](https://github.com/olikraus/u8g2/wiki)以及[U8g2 API参考](https://github.com/olikraus/u8g2/wiki/u8g2reference)页面。

## 常见问题

**Q1#** 示例在其他板上不起作用？

**A1:** U8g2在初始化时有不同的模式，除了硬件I2C外，还可以使用软件I2C。如果不起作用，请尝试使用软件I2C。更多信息请访问[u8g2](https://github.com/olikraus/U8g2_Arduino)。此外，也提供了一些示例和简要介绍[在此处](https://github.com/Seeed-Studio/Seeed_Learning_Space/tree/master/Grove - OLED Display 0.96''(SSD1315)V1.0)。

## 在线原理图查看器


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/res/Grove%20-%20OLED%20Display%200.96%20(SSD1315)_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## 资源

- **[ZIP]** [Grove - OLED Display 0.96" 原理图文件](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/res/Grove - OLED Display 0.96 (SSD1315)_v1.0.zip)
- **[PDF]** [OLED模块数据手册](https://files.seeedstudio.com/wiki/Grove-OLED-Display-0.96-SSD1315-/res/OEL Display Module.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您在使用我们的产品时能够尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>