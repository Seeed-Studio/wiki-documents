---
description: Grove - 1.12英寸OLED显示屏
title: Grove - 1.12英寸OLED显示屏
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-OLED_Display_1.12inch
last_update:
  date: 03/23/2024
  author: WuFeifei
---

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/main.jpg" />
</div>


我们全新的1.12英寸OLED显示屏非常适合您需要16级灰度的小尺寸显示屏的情况。OLED显示屏的可视对角线尺寸为1.12英寸，包含96x96（版本1.0）或128x128（版本2.0）灰度像素。由于显示屏使用的是OLED，因此无需背光，对比度非常高。

这款OLED使用的是SSD1327（V1.0）或SH1107G（V2.1）驱动芯片，负责管理显示屏。您可以使用四线I2C（时钟、数据、电源和地线引脚）与驱动芯片通信。


<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-OLED-Display-1.12%27%27-V2-p-3031.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-OLED-Display-1.12%27%27-V2-p-3031.html)
## 规格

* 通信模式：I2C
* 灰度显示：16级灰度。
* 支持正常和反向颜色显示。
* 支持连续水平滚动。
* Grove兼容接口

## 版本

---
| 产品版本                      | 变更内容                                                     | 发布日期   |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove - OLED显示屏 1.12" V1.0 | 初始版本                                                     | 2012年3月  |
| Grove - OLED显示屏 1.12" V2.1 | 将驱动IC从SSD1327更改为SH1107G，将灰度像素从96X96升级到128X128 | 2015年11月 |

## 规格

---
|项目|值|
|-----|------|
|工作电压 | 3.3/5 V|
|点阵 | 96x96 |
| 显示颜色 | 16 级灰度 |
| OLED显示屏 | LY120-96096 |
| 驱动芯片 | SSD1327Z |
| 点尺寸 | 0.15(宽)mm x 0.15(高)mm |
| 点间距 | 0.75(宽)mm x 0.175(高)mm |
| 工作温度 | -40~70 oC|

:::提示
    更多关于Grove模块的信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/Grove_System/)
:::

## 支持的平台
<!-- ---

| Arduino                                                      | 树莓派                                                       |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) |
| 
-->
|Arduino|树莓派|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::警告       
    上述提及的支持平台只是表示该模块的软件或理论上的兼容性。在大多数情况下，我们只为Arduino平台提供软件库或代码示例。由于无法为所有可能的MCU平台提供软件库/演示代码，因此用户需要编写自己的软件库。
:::

## 入门指南

### 硬件

在这里，我们将通过一个简单的演示向您展示这款Grove OLED显示屏是如何工作的。首先，您需要准备以下物品：

| Seeeduino V4 | Grove - OLED Display 1.12`` | Base Shield |
|--------------|----------------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/product.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Grove-OLED-Display-1.12%27%27-V2-p-3031.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

这是一个易于使用的模块，您所需要做的就是将模块连接到Base Shield的I2C端口。该模块有4个引脚，定义如下：

| 引脚 | 功能 | 备注          | 电缆颜色 |
|--------|------|-----|---------------|
|pin1	| SCL | I2C时钟       | 黄色     |
|pin2   | SDA| I2C数据       | 白色     |
|pin3   | VCC  | 电源，5V/3.3V | 红色     |
|pin4	| GND  | 接地          | 黑色     |

**硬件概述**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/connection.jpg" />
</div>


### 软件

- **步骤 1.** 通过Grove电缆将Grove - OLED显示屏 1.12''连接到Base Shield的**I2C**端口。

- **步骤 2.** 打开Arduino IDE和库管理器**(Sketch > Include Library > manage Libraries)**来安装u8g2库。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_manage_lib.png" />
</div>


- **步骤 3.** 在搜索框中输入“**u8g2**”，选择最新版本，并点击“安装”按钮。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_search_u8g2.png" />
</div>


- **步骤 4.** 在您的Arduino IDE中上传以下示例代码。

```cpp
#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>

U8G2_SH1107_SEEED_128X128_1_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);

void setup(void) {
  u8g2.begin();
}

void loop(void) {
  u8g2.firstPage();
  do {
    u8g2.setFont(u8g2_font_ncenB10_tr);
    u8g2.drawStr(0,24,"Hello World!");
  } while ( u8g2.nextPage() );
}
```

:::成功后
       如果一切顺利，Grove - OLED显示屏 1.12'' 的屏幕上将会显示 "Hello World!"。
:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/outcome.jpg" />
</div>


:::注意
        如果没有Base Shield，具有**I2C接口**的[Seeeduino Vx系列](https://www.seeedstudio.com/catalogsearch/result/index/?q=Seeeduino+v&product_list_limit=all)同样适用。
:::

## U8g2库介绍

U8g2是一个用于嵌入式设备的单色图形库。U8g2支持单色OLED和LCD，包括我们的SSD1327/SH1107G芯片。

Arduino库U8g2可以从Arduino IDE的库管理器中安装。U8g2还包括U8x8库：

**U8g2**

- 包含所有图形程序（线条/方框/圆形绘制）。
- 支持多种字体。（几乎）没有字体高度的限制。
- 在微控制器中需要一些内存来渲染显示屏。

**U8x8**

- 仅用于文本输出（字符）的设备。
- 只允许使用适合8x8像素网格的字体。
- 直接写入显示屏。不需要微控制器中的缓冲区。

这里提供了[**U8g2库wiki**](https://github.com/olikraus/u8g2/wiki)以及[U8g2 API参考](https://github.com/olikraus/u8g2/wiki/u8g2reference)页面。



## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/OLED%20Display.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## 资源

---------

* **[Eagle]** [Grove-OLED Display 1.12英寸 Eagle文件](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/OLED%20Display.zip)
* **[PDF]** [Grove-OLED Display 1.12英寸原理图](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/Grove%20-%2096x96%20OLED%20Display%20v2.1%20Sch.pdf)
* **[PDF]** [Grove-OLED Display 1.12英寸 PCB](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/Grove%20-%2096x96%20OLED%20Display%20v2.1%20PCB.pdf)
* **[数据手册]** [SSD1327 数据手册](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/SSD1327_datasheet.pdf)
* **[数据手册]** [LY120 数据手册](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/308010007_LCD-22P-0.7.pdf)
* **[数据手册]** [SH1107G_数据手册](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/SH1107G_datasheet.pdf)
* **[工具]** [96x96 图像制作参考](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/Make_A_96X96_Image1.zip)

## 项目

**智能作物：在传统农业中实施物联网！**我们的使命是借助物联网（通过Helium）的帮助，设计和实施技术和监测方法，与自然共存，保护自然。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/smart-crops-implementing-iot-in-conventional-agriculture-3674a6/embed' width='350'></iframe>

**自动化植物浇水系统**：一种使用ESP8266和Android应用程序为植物浇水并监测温度的设备。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ammarshahid572/automated-plant-watering-system-cb23d9/embed' width='350'></iframe>

**飞行中的BeagleBone Green**：BBBmini是一款先进的Linux自动驾驶仪/飞行控制器Cape，专为BeagleBone设计。它可以用于无人机、飞机或漫游车。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/mirkix/flying-beaglebone-green-448b60/embed' width='350'></iframe>

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供各种支持，以确保您在使用我们的产品时能够拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
