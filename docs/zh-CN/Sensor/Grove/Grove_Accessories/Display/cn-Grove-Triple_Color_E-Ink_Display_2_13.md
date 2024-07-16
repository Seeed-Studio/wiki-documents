---
description: Grove - 2.13英寸三色电子墨水显示屏
title: Grove - 2.13英寸三色电子墨水显示屏
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Triple_Color_E-Ink_Display_2_13
last_update:
  date: 03/23/2024
  author: WuFeifei
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/img/main.jpg" alt="pir" width={600} height="auto" /></p>



Grove - 三色电子墨水显示屏 2.13'' 是一款断电后仍能显示的屏幕，我们称其为电子纸（E-Paper）或电子墨水（E-Ink）。这款显示屏是一款 TFT 主动矩阵电泳显示屏，具有接口和参考系统设计。2.13 英寸的活动区域包含 212x104 像素，并具有 1 位白/黑和 1 位全红显示能力。

由于其具有超低功耗、广视角、断电后显示清晰等优点，它是货架标签、工业仪表等应用的理想选择。




<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Triple-Color-E-Ink-Display-2-13-p-2889.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Triple-Color-E-Ink-Display-2-13-p-2889.html)
## 特点

- 高对比度
- 高反射率
- 超宽视角
- 超低功耗
- 内置显示RAM



##规格

| 项目                | 值                   |
|---|---|
| 供电电压            | 3.3V / 5V            |
| 工作温度            | 0～40℃               |
| 存储温度            | -25～60℃             |
| 湿度范围            | 40~70%RH             |
| 显示分辨率          | 212(H) x 104(V) 像素 |
| DPI                 | 111                  |
| 接口                | UART                 |
| 与 Arduino 的波特率 | 230400               |

:::注意
        频繁连续刷新会对电子墨水造成不可修复的损害。建议刷新间隔大于 180 秒。
:::

## 引脚定义


<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/img/pinout.jpg" alt="Grove - Triple Color E-Ink Display 2.13'' pinout" title="Pinout" />
    <figcaption><b>Figure 1</b>. <i>pinout</i></figcaption>
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

### 与 Arduino 配合使用

#### 硬件

**所需材料**


| Seeeduino V4.2 | 基础盾板 | Grove - 三色电子墨水显示屏 2.13'' |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Triple-Color-E-Ink-Display-2-13-p-2889.html)|

:::注意
    **1** 请轻轻插入 USB 线缆，否则可能会损坏端口。请使用内部有 4 根线的 USB 线缆，2 根线的线缆无法传输数据。如果您不确定您手头的线缆是否符合要求，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)进行购买。
    

    **2** 购买每个 Grove 模块时，都会附带一根 Grove 线缆。如果您丢失了 Grove 线缆，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 进行购买。
:::

- **步骤 1.** 将 Grove - Base Shield 插入 Seeeduino。

- **步骤 2.** 通过 USB 线缆将 Seeeduino 连接到电脑。
- **步骤 3.** 下载代码，请参考软件部分。
- **步骤 4.** 将 Grove - 三色电子墨水显示屏 2.13'' 连接到 Grove-Base Shield 的 **UART** 端口。



<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/img/connect.jpg" alt="Grove - Triple Color E-Ink Display 2.13'' connect" title="connect" />
    <figcaption><b>图 2</b>. <i>连接</i></figcaption>
  </figure>
</div>





:::注意
      本模块通过 UART 接口与控制板通信。如果您使用的是 Atmega328p 板子，如 Arduino UNO 或 Seeeduino V4.2，您需要在下载代码之前拔掉这个模块，因为只有一个硬件串行端口。
      如果本模块占用了 UART 端口，下载程序将无法使用串行端口。但是，如果您使用的是 SAMD 板子，如 Seeeduino Lotus、Arduino Mega，则有两个或更多的硬件串行端口可用。因此，在下载前无需拔掉模块。 
:::



#### 软件

:::注意
        如果您是第一次使用 Arduino，我们强烈建议您在开始之前先查看[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::



- **步骤 1.** 从 Github 下载[示例代码](https://github.com/Seeed-Studio/Grove_Triple_Color_E-lnk_2.13/tree/master/examples/Eink_factory_code_213)。

- **步骤 2.** 使用您的 Arduino IDE 打开 **Eink_factory_code_213.ino** 文件。
- **步骤 3.** 上传示例代码。如果您不知道如何上传代码，请查阅[如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)。



:::成功
		如果一切顺利，您会看到显示屏闪烁，并显示 seeed 标志。
:::



### DIY



<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/img/demo.jpg" alt="Grove - Triple Color E-Ink Display 2.13'' DIY" title="DIY demo" />
    <figcaption><b>图 3</b>. <i>DIY 演示</i></figcaption>
  </figure>
</div>



在显示屏上展示您自己的图片会非常有趣，现在，让我们来教您如何 DIY 您自己的电子纸。

在开始之前，请再次查看 **Eink_factory_code_213.ino** 文件。您会很容易找到两个数组。


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

如您所见，这两个数组分别被命名为 **const unsigned char IMAGE_BLACK[]** 和 **const unsigned char IMAGE_RED[]**，
> **const unsigned char IMAGE_BLACK[]** is used for black image display  
> **const unsigned char IMAGE_RED[]** is used for red image display

实际上，要显示您自己的图片，您只需要替换这两个图片数组即可。也就是说，您需要获取自己的图片数组。幸运的是，有一个名为 **Image2LCD** 的工具，您可以在谷歌上搜索它，很容易就能找到。假设您已经下载并安装了这款软件。接下来，我们将向您展示如何使用这款软件。


- **步骤 1.** 准备一张 104*212 像素的图片。

:::提示
        墨水屏仅支持二阶灰度级别的图片，即黑白图片。如果图片灰度级别过多，整体颜色将无法完全显示。
:::

- **步骤 2.** 打开 **Image2LCD** 软件，点击“打开”图标来打开您的图片。您将会看到以下窗口。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/img/image2LCD.png" alt="Grove - Triple Color E-Ink Display 2.13'' DIY" title="DIY demo" />
    <figcaption><b>图 4</b>. <i>Image2LCD 配置</i></figcaption>
  </figure>
</div>




请按照上述内容检查相应的选项。

>1. Output file type -> *.C  
>2. Scan mode -> Horizon Scan  
>3. BitsPixel -> monochrome  
>4. Max Width and Height -> 104 x 212  
>5. Reverse color:  Whether you need to check this option is based on the effect you need to display. For more detail please check the **Table 1** below.


- **步骤 3.** 配置好上述选项后，您只需点击左上角的 **保存** 按钮，即可生成对应的图片数组。然后，用您自己的图片数组替换工厂示例代码中的数组。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/img/code.jpg" alt="Grove - Triple Color E-Ink Display 2.13'' DIY" title />
    <figcaption><b>图 5</b>. <i>只需用红色方框选中的部分替换，这意味着您应该保留数组名称</i></figcaption>
  </figure>
</div>


正如我们之前提到的，有两个数组，您可能会感到困惑：应该替换哪一个呢？这取决于您想要的显示效果。请查看 **表 1**。


<!-- |Display|<p style="background:black"><font color="red">Black background Red image</font></p>|<p style="background:white"><font color="red">White background Red image</font></p>|<p style="background:red"><font color="black">Red background Black image</font></p>|<p style="background:red"><font color="white">Red background White image</font></p> |
|---|----|----|----|----|
|Black Array|00|FF|00|FF|
|Red Array|Image(Reversed)|Image(Reversed)|Image|Image| -->

| 显示效果 | <font color="red">黑底红字</font> | <font color="red">白底红字</font> | <font color="black">红底黑字</font> | 红底白字 |
|---|----|----|----|----|
|黑色数组|00|FF|00|FF|
| 红色数组 | 图片（反转）                      | 图片（反转）                      | 图片                                | 图片     |

| 显示效果 | <font color="red">全屏红色</font> | <font color="black">白底黑字</font> | <font color="red">红底红色</font> | 黑底白字 |
|---|----|----|----|----|
| 黑色数组 | 图片（反转）                      | 图片（反转）                        | 图片                              | 图片     |
|红色数组|00|FF|00|FF|

<div align="center"><b>表 1.</b><i> 数组显示效果</i></div>



:::注意
        a. **00** 表示数组中的所有元素都是 0x00，实际上你需要 2756 个 0x00。 
        b. **FF** 表示数组中的所有元素都是 0xFF，实际上你需要 2756 个 0xFF。 
        c. **Image(Reversed)** 表示你需要在 **第2步（图4）** 中勾选 **Reverse color** 选项。  
        d. **Image** 表示在 **第2步（图4）** 中不要勾选 **Reverse color** 选项。
:::
:::提示
        *如何制作一个全为 0x00 或 0xFF 的 2756 个元素的数组？* 
        *不用担心，我们了解你的困扰，你可以直接点击 0x00.c 和 0xFF.c 文件并复制到你的代码中*。
:::
[0x00.c](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/res/00.c)  
[0xff.c](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/res/ff.c)



我们默认初始状态是全屏白色。在更新图像时，首先更新黑色数组，然后更新红色数组，红色数组的图像会覆盖黑色图像。

这个显示屏是 104 x 212 的，所以有 104x212=22048 个像素，每个像素由一位控制。数组中的元素是一个两位的十六进制数，如 **0xF0**。将 **0xF0** 转换为二进制数，我们得到 **1111 0000**。值为 1 的像素将显示白色，而值为 0 的像素将显示相应数组的颜色（红色或黑色）。这意味着图像数组中的每个元素控制 8 个像素。因此，你需要一个 22048/8=2756 个元素的数组。

**第4步**。 将代码下载到 Arduino 中，然后将显示模块插入 Arduino 板上。闪烁一段时间后，你将看到你所设置的图案。

## 原理图在线查看器


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/res/Triple_Color_E-Ink_Display_2_13.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## 资源

- **[Zip]** [Grove - 三色电子墨水显示屏 2.13'' Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/res/Triple_Color_E-Ink_Display_2_13.zip)

- **[PDF]** [2.13英寸电子纸数据手册](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/res/E-paper_2.13_inch.pdf)



## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持，以确保您在使用我们的产品时能够尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>


