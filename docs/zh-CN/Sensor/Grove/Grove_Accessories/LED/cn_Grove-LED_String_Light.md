---
description: Grove - LED灯串
title: Grove - LED灯串
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-LED_String_Light
last_update:
  date: 1/7/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_String_Light/img/Grove-led-string-light.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_String_Light/img/Grove-led-string-light.jpg" alt="pir" width={600} height="auto" /></p>

Grove - LED灯串模块本质上是一个LED驱动器，用于驱动包装中包含的LED灯串。模块的工作电压为3.3V/5V。然而，LED灯串需要12V的工作电压。因此，该模块使用AIC1896电流模式升压DC-DC转换器为LED灯串提供所需的电压。LED灯串长度为5米，包含50个RGB LED，均匀分布在灯串上。您可以用它来装饰圣诞树、点亮派对或装饰房间。

<!-- [![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-LED-String-Light-p-2324.html) -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-LED-String-Light-p-2324.html)

## 特性
---
*   与LED灯串配合使用

*   包装中包含5米长的LED灯串

*   5米长的灯串上均匀分布50个RGB LED，呈现多彩效果

*   使用JST 2.0接口将LED灯串连接到驱动模块

*   使用标准4针Grove电缆连接到其他Grove模块

## 接口功能
---
<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_String_Light/img/LED_String_Light.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_String_Light/img/LED_String_Light.jpg" alt="pir" width={600} height="auto" /></p>

<dl>
<dt>① JST 2.0接口：用于连接LED灯串</dt>
<dt>② Grove接口：SIG（引脚1）为高电平时点亮LED灯串，为低电平时关闭灯串</dt>
</dl>

## 使用方法
---
按照以下步骤使用该模块构建一个示例电路：

1. 首先使用JST2.0两线接口将LED灯串连接到**Grove - LED灯串**模块。

2. 将LED灯串模块连接到电路的输出端（电源模块的右侧）。在电路的输入端，您可以使用一系列基于传感器的输入模块（如[Grove - 光传感器](/cn/Grove-Light_Sensor/)、[Grove - 声音传感器](/cn/Grove-Sound_Sensor/)、[Grove - 按钮](/cn/Grove-Button/)或[Grove - 滑动电位器](/cn/Grove-Slide_Potentiometer/)）。

3. 给电路供电。

4. 当输入模块提供触发信号时，LED灯串会点亮：

   如果直接将光传感器连接到电路的输入端，您会看到在明亮的光线下LED灯会点亮。如果您希望灯在黑暗中点亮，可以在光传感器和电源模块之间添加一个Grove - NOT模块。

   如果使用声音传感器，您会看到在检测到声音时LED灯会点亮。同样，如果您希望反转功能，或者换句话说，您希望灯始终点亮，除非有声音，可以在声音传感器和电源模块之间添加一个Grove - NOT模块。

   如果使用像[Grove - 按钮](/cn/Grove-Button/)模块上的瞬时开关，只需按下按钮即可点亮灯串。

   * 如果使用滑动电位器，将滑块从GND位置移动到VCC，您会看到灯的亮度随着提供的电压增加而增加。

<!-- </dd></dl>
</dd></dl>
</dd></dl> -->

以下是使用Grove - USB电源模块构建的Grove电路示例：

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_String_Light/img/LED_String_Light_Photo.gif) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_String_Light/img/LED_String_Light_Photo.gif" alt="pir" width={600} height="auto" /></p>

如果您没有Grove - USB电源模块，可以使用Grove - DC插孔电源模块来点亮LED灯串。

## 可用性
---
此 Grove 模块可作为以下 Grove 套件系列的一部分提供：

<!-- 链接有问题*   [Grove Mixer Pack V2](/cn/Grove-Mixer_Pack_V2 "GROVE MIXER PACK V2") -->

或者，它也可以在 Seeed Studio Bazaar 单独购买。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-LED_String_Light/res/Grove-LED_String_Light.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源
---
*   [[原理图 PDF](https://files.seeedstudio.com/wiki/Grove-LED_String_Light/res/Grove-LED_String_Light.pdf)]

*   [[Eagle 文件](https://files.seeedstudio.com/wiki/Grove-LED_String_Light/res/Grove-LED_String_Light.zip)]

## 技术支持与产品讨论
感谢您选择我们的产品！我们致力于为您提供各种支持，以确保您使用我们的产品时体验顺畅。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>