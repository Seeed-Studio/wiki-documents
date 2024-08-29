---
description: Grove - 1.54英寸三色电子墨水显示屏
title: Grove - 1.54英寸三色电子墨水显示屏
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Triple_Color_E-Ink_Display_1_54
last_update:
  date: 03/23/2024
  author: WuFeifei
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/img/main.jpg" alt="pir" width={600} height="auto" /></p>



Grove - Triple Color E-Ink Display 1.54'' 是一款断电后仍可显示的屏幕，我们称之为电子纸（E-Paper）或电子墨水屏（E-Ink）。这款显示屏是一款TFT有源矩阵电泳显示器，配有接口和参考系统设计。1.54英寸的显示区域包含152x152个像素，具有1位白色/黑色和1位红色全显示功能。

由于其超低功耗、宽视角、断电后显示清晰等优点，它成为货架标签、工业仪表等应用的理想选择。




<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Triple-Color-E-Ink-Display-1-54-p-2890.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Triple-Color-E-Ink-Display-1-54-p-2890.html)
## 特点

- 高对比度
- 高反射率
- 超宽视角
- 超低功耗
- 片上显示RAM



## 规格

|项目|值|
|---|---|
|供电电压|3.3V / 5V|
|工作温度| 0～40℃|
|存储温度| -25～60℃|
|湿度范围|40~70%RH|
|显示分辨率|152(H) x 152(V) 像素|
|DPI|140|
|接口|UART|
|与Arduino的波特率|230400|

:::**注意**
        频繁连续刷新会对电子墨水屏造成不可修复的损伤。建议刷新间隔大于180秒。
:::

## 引脚定义



<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/img/pinout.jpg" alt="Grove - Triple Color E-Ink Display 1.54'' pinout" title="Pinout" />
    <figcaption><b>Figure 1</b>. <i>pinout</i></figcaption>
  </figure>
</div>










## **支持的平台**

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|树莓派|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|



## 入门指南

### Arduino 演示

#### 硬件

**所需材料**


| Seeeduino V4.2 | Base Shield | Grove - 三色电子墨水显示屏 1.54'' |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/Grove-Triple-Color-E-Ink-Display-1-54-p-2890.html)|

:::注意
    **1** 请轻轻插入USB线，否则可能会损坏端口。请使用内部有4根线的USB线，2根线的电缆无法传输数据。如果您不确定自己拥有的线缆类型，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)进行购买。
    

    **2** 您购买每个Grove模块时都会附带一根Grove电缆。如果您丢失了Grove电缆，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 进行购买。
:::

- **步骤 1.** 将 Grove - Base Shield 插入 Seeeduino。

- **步骤 2.** 通过 USB 线缆将 Seeeduino 连接到电脑。
- **步骤 3.** 下载代码，请参考软件部分。
- **步骤 4.** 将 Grove - 三色电子墨水显示屏 1.54'' 连接到 Grove-Base Shield 的 **UART** 端口。



<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/img/connect.jpg" alt="Grove - Triple Color E-Ink Display 1.54'' connect" title="connection" />
    <figcaption><b>图 2</b>. <i>连接图</i></figcaption>
  </figure>
</div>





:::注意
      此模块通过UART接口与控制板通信。如果您使用的是Atmega328p板，如Arduino UNO或Seeeduino V4.2，那么在下载代码之前需要断开此模块的连接，因为只有一个硬件串行端口。

如果此模块占用了UART端口，则下载程序无法使用该串行端口。但是，如果您使用的是SAMD板，如seeeduino Lotus、Arduino Mega，那么有两个或更多的硬件串行端口可用。因此，在下载之前无需断开模块的连接。  
:::



#### **软件**

:::注意
        如果您是第一次使用Arduino，我们强烈建议您在开始之前查看[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::



- **步骤 1.** 从Github下载[示例代码](https://github.com/Seeed-Studio/Grove_Triple_Color_E-lnk_1.54/tree/master/examples/E_ink154_factoryCode)。

  **步骤 2.** 使用您的Arduino IDE打开**E_ink154_factoryCode.ino**文件。

  **步骤 3.** 上传示例代码。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)。




:::成功
		如果一切顺利，您会看到显示屏闪烁，然后显示seeed的标识。
:::

### DIY（自己动手做）



<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/img/demo_wiki.jpg" alt="Grove - Triple Color E-Ink Display 1.54'' DIY" title="DIY demo" />
    <figcaption><b>图 3</b>. <i>DIY 演示</i></figcaption>
  </figure>
</div>



在显示屏上展示您自己的图像会非常有趣，现在，让我们来教您如何DIY自己的电子纸。

在开始之前，请再次检查**E_ink154_factoryCode.ino**。您很容易就能找到这两个数组。


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

如您所见，这两个数组分别被命名为**const unsigned char IMAGE_BLACK[]\**和\**const unsigned char IMAGE_RED[]**，
> **const unsigned char IMAGE_BLACK[]** is used for black image display  
> **const unsigned char IMAGE_RED[]** is used for red image display

实际上，要显示您自己的图像，您只需要替换这两个图像数组即可。也就是说，您只需要获取自己的图像数组。幸运的是，有一个名为**Image2LCD**的工具，您可以在网上搜索，并不难找到。假设您已经下载并安装了此软件。接下来，我们将向您展示如何使用此软件。


- **步骤 1.** 准备一张152*152像素的图片。

:::提示
       墨水屏只支持二阶灰度级别的图片，即黑白图片。如果图片的灰度级别过多，则无法完全显示全部颜色。
:::

- **步骤 2.** 打开**Image2LCD**软件，并点击打开图标以打开您的图片。您将看到以下窗口。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/img/image2LCD_1.png" alt="Grove - Triple Color E-Ink Display 1.54'' DIY" title="DIY demo" />
    <figcaption><b>图 4</b>. <i>Image2LCD 配置</i></figcaption>
  </figure>
</div>




请按照上述内容检查相应的选项。

>1. 输出文件类型 -> *.C
>2. 扫描模式 -> 水平扫描
>3. 像素位数 -> 单色
>4. 最大宽度和高度 -> 152 x 152
>5. 反转颜色：是否需要勾选此选项取决于您想要显示的效果。更多详细信息请查看下面的**表1**。


- **步骤 3.** 配置完上述选项后，您只需点击左上角的**保存**按钮即可生成相应的图像数组。然后，将工厂代码中的数组替换为您自己的图像数组。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/img/code.png" alt="Grove - Triple Color E-Ink Display 1.54'' DIY" title />
    <figcaption><b>图 5</b>. <i>只需替换红色框选中的部分，这意味着您应该保持数组名称不变</i></figcaption>
  </figure>
</div>




正如我们之前提到的，有两个数组，您可能会感到困惑：应该替换哪一个呢？这取决于您想要的显示效果。请查看**表1**。


|显示效果| <font color="red">黑色背景红色图像</font> | <font color="red">白色背景红色图像</font> | <font color="black">红色背景黑色图像</font> | 红色背景白色图像 |
|---|----|----|----|----|
|黑色数组|00|FF|00|FF|
| 红色数组 | 图像（反转）                              | 图像（反转）                              | 图像                                        | 图像             |



| 显示效果 | <font color="red">全屏红色</font> | <font color="black">白色背景黑色图像</font> | <font color="red">红色背景红色</font> | 黑色背景白色图像 |
|---|----|----|----|----|
| 黑色数组 | 图像（反转）                      | 图像（反转）                                | 图像                                  | 图像             |
|红色数组|00|FF|00|FF|

<div align="center"><b>表 1.</b><i>数组显示效果</i></div>



:::注意
        a. **00** 表示数组中的所有元素都是 0x00，实际上你需要 2888 个 0x00。   
        b. **FF** 表示数组中的所有元素都是 0xFF，实际上你需要 2888 个 0xFF。  
        c. **Image(Reversed)** 表示你需要在**步骤 2（图 4）\**中勾选\**反转颜色**选项。  
        b. **Image** 表示在**步骤 2（图 4）\**中不勾选\**反转颜色**选项。
:::
:::提示
        如何制作一个包含 2888 个 0x00 或 0xFF 的数组？ 
        *别担心，我们理解你的困扰，你可以直接点击 0x00.c 和 0xFF.c 文件并将它们复制到你的代码中*。
:::

[0x00.c](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/res/00.c)  
[0xff.c](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/res/FF.c)



我们考虑原始状态为全屏白色。在更新图像时，首先更新黑色数组，然后更新红色数组，红色数组的图像会覆盖黑色图像。


这个显示屏是 152 x 152 的，所以有 152x152=23104 个像素，每个像素由一个比特控制。数组中的元素是一个两位的十六进制数，比如 **0xF0**。将 **0xF0** 转换为二进制数我们得到 **1111 0000**。值为 1 的像素将显示白色，而值为 0 的像素将显示相应数组（红色或黑色）的颜色。这意味着图像数组中的每个元素控制 8 个像素。因此，你需要一个包含 23104/8=2888 个元素的数组。

**步骤 4.** 将代码下载到你的 Arduino 中，然后将显示模块插入 Arduino 板。闪烁一段时间后，你将看到你设置的图案。

## 在线原理图查看器


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/res/Grove%20-%20Triple%20Color%20E-Ink%20Display%201.54.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## 资源

- **[Zip]** [Grove - 三色电子墨水显示屏 1.54'' Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/res/Grove%20-%20Triple%20Color%20E-Ink%20Display%201.54.zip)

- **[PDF]** [1.54英寸电子纸显示屏数据手册](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_1.54/res/E-Ink%20152X152-Black%2CWhite%20and%20Red-1.54inch.pdf)



## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供各种支持，以确保您在使用我们的产品时体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
