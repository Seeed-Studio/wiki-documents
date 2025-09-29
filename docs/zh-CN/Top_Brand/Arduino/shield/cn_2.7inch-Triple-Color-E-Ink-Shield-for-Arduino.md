---
description: 2.7英寸三色电子墨水屏Arduino扩展板
title: 2.7英寸三色电子墨水屏Arduino扩展板
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/2.7inch-Triple-Color-E-Ink-Shield-for-Arduino
last_update:
  date: 2/16/2023
  author: jianjing Huang
---
<!-- ---
nam2.7'' Triple-color E-link Shield for Arduinoe: 2.7'' Triple-Color E-Ink Shield for Arduino
category: Shield
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 104030067
tags:
--- -->

![](https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/img/2.7-Triple-Color-E-Ink-Shield-for-Arduino-all.png)

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/2-7-Triple-Color-E-Ink-Shield-for-Arduino-p-4069.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

电子墨水屏也被称为电子纸屏幕，我们已经发布了多种尺寸的电子墨水屏，包括Grove电子墨水模块、树莓派电子墨水扩展板。现在我们向您介绍Seeed电子墨水家族的新成员——2.7英寸三色电子墨水屏Arduino扩展板。

2.7英寸三色电子墨水显示屏是一款Arduino电子墨水显示扩展板，包含264x176像素，每个像素可以显示白色/黑色/红色。该扩展板通过SPI接口与Arduino通信，并保留了一个Grove I2C接口供其他模块使用。借助比较电路，该模块实现了3.3V和5V电压系统的自适应。

与传统LCD显示屏相比，电子墨水屏无需背光，因此功耗极低。电子墨水屏具有极宽的视角和极高的对比度，即使在直射阳光下也能清晰显示。此外，电子墨水屏可以在没有任何电源供应的情况下长时间（数周甚至数月）显示用户设置的图像。多么神奇的显示屏！

如果您感兴趣，可以点击下面的图片查看不同尺寸的Arduino电子墨水屏或树莓派电子墨水屏。

## 特性

- 超低功耗
- 超宽视角
- 高对比度

## 应用

- 低功耗显示场景
- 户外显示场景
- 工业仪表
- 货架标签

## 支持平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## 开始使用

#### 所需材料

| Seeeduino Lotus | 2.7''Arduino三色电子墨水屏扩展板|
|--------------|-------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/Seeeduino_Lotus.png)|![enter image description here](https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/img/2.7-Triple-Color-E-Ink-Shield-for-Arduino-integrate-thumbnail.png)
|[立即购买](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface.html)|[立即购买](https://www.seeedstudio.com/2-7-Triple-Color-E-Ink-Shield-for-Arduino-p-4069.html)|

#### 硬件概述

![](https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/img/hardware_overview.png)

:::note
**1** 请轻柔地插入USB线缆、电子墨水屏FPC接口和三色电子墨水屏扩展板到Seeeduino中，否则可能会损坏端口。
:::

- **步骤 1.** 将三色电子墨水屏扩展板插入Seeeduino。

- **步骤 2.** 通过USB线缆将Seeeduino连接到PC。

- **步骤 3.** 下载代码，请参考软件部分。

- **步骤 4.** 运行代码，您自己的图像将显示在屏幕上。

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/img/connection.jpg" alt="Triple-Color E-Ink Shield for Arduino' connect" title="connection" />
<figcaption><b>图 2</b>. <i>连接</i></figcaption>
</figure>
</div>

#### 软件

:::caution
如果这是您第一次使用Arduino，我们强烈建议您在开始之前先查看[Arduino入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 下载[演示代码](https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/img/Seeed_Elink_Shield.zip)。

- **步骤 2.** 用Arduino IDE打开**epd2in7b-demo.ino**文件。

- **步骤 3.** 复制整个**Seeed_Elink_Shield**文件并将其粘贴到您的Arduino IDE库文件中。

- **步骤 4.** 上传演示代码。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

:::tip
如果一切顺利，您将看到显示屏闪烁，然后显示屏将显示Seeed标志
:::

### DIY

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/img/5.jpg" alt="Triple-Color E-Ink Shield for Arduino'' DIY" title="DIY demo" />
<figcaption><b>图 3</b>. <i>DIY演示</i></figcaption>
</figure>
</div>

显示您自己的图像会很有趣，现在，让我们向您展示如何DIY您自己的电子纸。

在开始之前，请再次查看**E_ink154_factoryCode.ino**。您可以轻松找到这两个数组。

```cpp
const unsigned char IMAGE_BLACK[] PROGMEM = { /* 0X00,0X01,0XC8,0X00,0XC8,0X00, */
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
....
....
....
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,};
```

和

```cpp
const unsigned char IMAGE_RED[] PROGMEM = { /* 0X00,0X01,0XC8,0X00,0XC8,0X00, */
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
....
....
....
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,};
```

如您所见，这两个数组被称为**const unsigned char IMAGE_BLACK[]**和**const unsigned char IMAGE_RED[]**，
> **const unsigned char IMAGE_BLACK[]** 用于黑色图像显示  
> **const unsigned char IMAGE_RED[]** 用于红色图像显示

实际上，要显示您自己的图像，您只需要替换这两个图像数组。也就是说，您只需要获取您自己的图像数组。幸运的是，有一个工具[Image2LCD](https://www.buydisplay.com/download/software/Image2Lcd.zip)，您可以谷歌搜索它，不难找到。假设您已经下载并安装了这个软件。接下来，我们将向您展示如何使用这个软件。

- **步骤 1.** 准备一张264*176像素的图片。

:::tip
墨水屏只支持二阶灰度级的图片，即黑白图片。如果图片的灰度级太多，整个颜色无法完全显示。
:::

- **步骤 2.** 打开**Image2LCD**软件并点击打开图标来打开您的图片。您将看到以下窗口。

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/img/image2LCD_1.png" alt="Triple-Color E-Ink Shield for Arduino'' DIY" title="DIY demo" />
<figcaption><b>图 4</b>. <i>Image2LCD配置</i></figcaption>
</figure>
</div>

请按照上图所示勾选相应的选项。

>1. Output file type -> *.C  
>2. Scan mode -> Horizon Scan  
>3. BitsPixel -> monochrome  
>4. Max Width and Height -> 264 x 176  
>5. Reverse color: 是否需要勾选此选项取决于您需要显示的效果。更多详情请查看下面的**表 1**。

- **步骤 3.** 配置完上述选项后，您只需要点击左上角的**Save**按钮来生成相应的图像数组。然后用您自己的图像数组替换factoryCode数组。

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/img/image3.png" alt="Triple-Color E-Ink Shield for Arduino'' DIY" title="" />
<figcaption><b>图 5</b>. <i>只需替换红框选中的部分，这意味着您应该保持数组名称不变</i></figcaption>
</figure>
</div>

如上所述，有两个数组，您可能会困惑：要替换哪一个？这取决于您想要什么显示效果。请查看**表1**。选择一种颜色进行替换后，记住要删除另一种颜色的代码，但应保留数组名称。

|<br />显示|<p style={{background: 'black'}}><font color="red">黑色背景<br /> 红色图像</font></p>|<p style={{background: 'white'}}><font color="red">白色背景<br /> 红色图像</font></p>|<p style={{background: 'red'}}><font color="black">红色背景<br /> 黑色图像</font></p>|<p style={{background: 'red'}}><font color="white">红色背景<br /> 白色图像</font></p>|
|---|----|----|----|----|
|黑色数组|00|FF|00|FF|
|红色数组|图像(反转)|图像(反转)|图像|图像|

|<br />显示|<p style={{background: 'red'}}><font color="black">全屏<br /> 红色 </font></p>|<p style={{background: 'white'}}><font color="black">白色背景<br /> 黑色图像</font></p>|<p style={{background: 'red'}}><font color="black">红色背景<br /> 红色</font></p>|<p style={{background: 'black'}}><font color="white">黑色背景<br /> 白色图像</font></p>|
|---|----|----|----|----|
|黑色数组|图像(反转)|图像(反转)|图像|图像|
|红色数组|00|FF|00|FF|

<div align="center"><b>表1.</b><i>数组显示效果</i></div>

:::note
a.**00** 表示数组中的所有元素都是0x00，实际上您需要2888个0x00<br />
b.**FF** 表示数组中的所有元素都是0xFF，实际上您需要2888个0xFF  <br />
c.**图像(反转)** 表示您需要在**步骤2(图4)**中勾选**反转颜色**选项 <br />  
d.**图像** 表示不要在**步骤2(图4)**中勾选**反转颜色**选项
:::

:::tip
*制作一个2888个0x00或0xFF的数组？*  
*别担心，我们理解您的痛苦，您可以直接点击0x00.c和0xFF.c文件并复制到您的代码中。*
:::

[0x00.c](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/res/00.c)  
[0xff.c](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/res/FF.c)

我们认为原始状态是全屏白色。更新图像时，首先更新黑色数组，然后更新红色数组，红色数组的图像会覆盖黑色图像。

此显示屏是152 x 152，所以有152x152=23104个像素，每个像素由一位控制。数组中的元素是一个两位十六进制数，如**0xF0**。将**0xF0**转换为二进制数，我们将得到
**1111 0000**。值为1的像素将显示白色，值为0的像素将显示相应数组的颜色（红色或黑色）。这意味着图像数组中的每个元素控制8个像素。所以您需要一个23104/8=2888个元素的数组。

**步骤4.** 将代码下载到您的arduino中，然后将显示模块插入arduino板。闪烁一段时间后，您将看到您设置的图案。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/res/2.7-Triple-Color-E-Ink-Display-for-Arduino.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [2.7-Triple-Color-E-Ink-Display-for-Arduino.zip](https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/res/2.7-Triple-Color-E-Ink-Display-for-Arduino.zip)
- **[Zip]** [演示代码库](https://files.seeedstudio.com/wiki/2.7-Triple-Color-E-Ink-Shield-for-Arduino/img/Seeed_Elink_Shield.zip)

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