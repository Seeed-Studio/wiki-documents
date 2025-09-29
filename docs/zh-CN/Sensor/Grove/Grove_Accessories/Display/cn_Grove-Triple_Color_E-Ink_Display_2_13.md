---
description: Grove - 三色电子墨水显示屏 2.13"
title: Grove - 三色电子墨水显示屏 2.13"
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Triple_Color_E-Ink_Display_2_13
last_update:
  date: 1/9/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/img/main.jpg" alt="pir" width={600} height="auto" /></p>



Grove - 三色电子墨水显示屏 2.13'' 是一种在断电后仍能显示的屏幕，我们称之为电子纸或电子墨水。该显示屏是一种 TFT 有源矩阵电泳显示屏，具有接口和参考系统设计。2.13 英寸的活动区域包含 212x104 像素，支持 1 位白/黑和 1 位红色全屏显示功能。

由于其超低功耗、宽视角、无需电力即可清晰显示等优点，它是货架标签、工业仪器等应用的理想选择。




<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Triple-Color-E-Ink-Display-2-13-p-2889.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Triple-Color-E-Ink-Display-2-13-p-2889.html)
## 特性

- 高对比度
- 高反射率
- 超宽视角
- 超低功耗
- 内置显示 RAM



## 规格

|项目|值|
|---|---|
|供电电压|3.3V / 5V|
|工作温度| 0～40℃|
|存储温度| -25～60℃|
|湿度范围|40~70%RH|
|显示分辨率|212(H) x 104(V) 像素|
|DPI|111|
|接口|UART|
|Arduino 波特率|230400|


:::note
频繁的连续刷新会对电子墨水造成不可修复的损害。建议刷新间隔大于 180 秒。
:::

## 引脚图


<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/img/pinout.jpg" alt="Grove - 三色电子墨水显示屏 2.13'' 引脚图" title="Pinout" />
    <figcaption><b>图 1</b>. <i>引脚图</i></figcaption>
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

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield | Grove - 三色电子墨水显示屏 2.13'' |
|----------------|-------------|---------------------------------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-Triple-Color-E-Ink-Display-2-13-p-2889.html)|

:::note
**1** 请轻轻插入 USB 数据线，否则可能会损坏接口。请使用内部有 4 根线的 USB 数据线，只有 2 根线的 USB 数据线无法传输数据。如果您不确定手头的数据线是否符合要求，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买。

**2** 每个 Grove 模块在购买时都会附带一根 Grove 数据线。如果您丢失了数据线，可以点击[这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)购买。
:::

- **步骤 1.** 将 Grove - Base Shield 插入 Seeeduino。

- **步骤 2.** 使用 USB 数据线将 Seeeduino 连接到电脑。

- **步骤 3.** 下载代码，请参考软件部分。

- **步骤 4.** 将 Grove - 三色电子墨水显示屏 2.13'' 连接到 Grove-Base Shield 的 **UART** 端口。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/img/connect.jpg" alt="Grove - 三色电子墨水显示屏 2.13'' 连接" title="连接" />
    <figcaption><b>图 2</b>. <i>连接</i></figcaption>
  </figure>
</div>

:::note
此模块通过 UART 接口与控制板通信。如果您使用的是 Atmega328p 板（如 Arduino UNO 或 Seeeduino V4.2），在下载代码前需要拔下此模块，因为这些板只有一个硬件串口。如果此模块占用了 UART 端口，下载程序将无法使用串口。然而，如果您使用的是 SAMD 板（如 Seeeduino Lotus、Arduino Mega），这些板有两个或更多硬件串口，因此无需在下载代码前拔下模块。
:::

#### 软件

:::note
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 从 Github 下载 [示例代码](https://github.com/Seeed-Studio/Grove_Triple_Color_E-lnk_2.13/tree/master/examples/Eink_factory_code_213)。

- **步骤 2.** 使用 Arduino IDE 打开 **Eink_factory_code_213.ino** 文件。

- **步骤 3.** 上传示例代码。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

:::success
如果一切顺利，您将看到显示屏闪烁，并显示 Seeed 的 logo。
:::

### 自制 (DIY)

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/img/demo.jpg" alt="Grove - 三色电子墨水显示屏 2.13'' DIY" title="DIY 示例" />
    <figcaption><b>图 3</b>. <i>DIY 示例</i></figcaption>
  </figure>
</div>

制作自己的图像显示会非常有趣，现在我们来教您如何 DIY 自己的电子墨水屏。

在开始之前，请再次检查 **Eink_factory_code_213.ino** 文件。您可以轻松找到以下两个数组：

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

如您所见，这两个数组分别命名为 **const unsigned char IMAGE_BLACK[]** 和 **const unsigned char IMAGE_RED[]**：
> **const unsigned char IMAGE_BLACK[]** 用于显示黑色图像  
> **const unsigned char IMAGE_RED[]** 用于显示红色图像

实际上，要显示您自己的图像，您只需替换这两个图像数组。也就是说，您需要生成自己的图像数组。幸运的是，有一个工具 **Image2LCD** 可以帮助您完成此任务。您可以通过搜索引擎找到它，下载和安装并不困难。假设您已经下载并安装了此软件，接下来我们将展示如何使用它。

- **步骤 1.** 准备一张 104*212 像素的图片。

:::tip
电子墨水屏仅支持二阶灰度图像，即黑白图像。如果图片的灰度级别过多，可能无法完全显示所有颜色。
:::

- **步骤 2.** 打开 **Image2LCD** 软件并点击打开图标以加载您的图片。您将看到如下窗口：

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/img/image2LCD.png" alt="Grove - 三色电子墨水显示屏 2.13'' DIY" title="DIY 示例" />
    <figcaption><b>图 4</b>. <i>Image2LCD 配置</i></figcaption>
  </figure>
</div>

请检查上面所示的对应选项。

>1. 输出文件类型 -> *.C  
>2. 扫描模式 -> 水平扫描  
>3. BitsPixel -> 单色  
>4. 最大宽度和高度 -> 104 x 212  
>5. 反转颜色：是否需要勾选此选项取决于您需要显示的效果。更多详情请参考下方的 **表 1**。

- **步骤 3.** 配置上述选项后，只需点击左上角的 **保存** 按钮，即可生成相应的图像数组。然后将 `factoryCode` 数组替换为您自己的图像数组。

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/img/code.jpg" alt="Grove - 三色电子墨水显示屏 2.13'' DIY" title />
    <figcaption><b>图 5</b>. <i>只需替换红框选中的部分，这意味着您需要保留数组名称</i></figcaption>
  </figure>
</div>

如上所述，有两个数组，您可能会感到困惑：应该替换哪一个？这取决于您想要的显示效果。请查看 **表 1**。

| 显示效果 | <font color="red">黑底红图</font> | <font color="red">白底红图</font> | <font color="black">红底黑图</font> | 红底白图 |
|---|----|----|----|----|
| 黑色数组 | 00 | FF | 00 | FF |
| 红色数组 | 图像（反转） | 图像（反转） | 图像 | 图像 |

| 显示效果 | <font color="red">全屏红色</font> | <font color="black">白底黑图</font> | <font color="red">红底红图</font> | 黑底白图 |
|---|----|----|----|----|
| 黑色数组 | 图像（反转） | 图像（反转） | 图像 | 图像 |
| 红色数组 | 00 | FF | 00 | FF |

<div align="center"><b>表 1.</b><i>数组显示效果</i></div>

:::note
a. **00** 表示数组中的所有元素为 0x00，实际上您需要 2756 个 0x00  
b. **FF** 表示数组中的所有元素为 0xFF，实际上您需要 2756 个 0xFF  
c. **图像（反转）** 表示您需要在 **步骤 2（图 4）** 中勾选 **反转颜色** 选项  
d. **图像** 表示您不需要在 **步骤 2（图 4）** 中勾选 **反转颜色** 选项  
:::

:::tip
*如何制作一个 2756 个 0x00 或 0xFF 的数组？*  
*别担心，我们理解您的痛苦，您只需点击 0x00.c 和 0xFF.c 文件并将其复制到您的代码中即可。*
:::
[0x00.c](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/res/00.c)  
[0xff.c](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/res/ff.c)

我们假设初始状态是全屏白色。在更新图像时，首先更新黑色数组，然后更新红色数组，红色数组的图像会覆盖黑色图像。

此显示屏的分辨率为 104 x 212，因此共有 104x212=22048 个像素，每个像素由一位控制。数组中的元素是一个两位的十六进制数，例如 **0xF0**。将 **0xF0** 转换为二进制数，我们会得到 **1111 0000**。值为 1 的像素将显示为白色，值为 0 的像素将显示为对应数组的颜色（红色或黑色）。这意味着图像数组中的每个元素控制 8 个像素。因此，您需要一个包含 22048/8=2756 个元素的数组。

**步骤 4.** 将代码下载到您的 Arduino 中，然后将显示模块插入 Arduino 板。经过一段时间的闪烁后，您将看到您设置的图案。

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/res/Triple_Color_E-Ink_Display_2_13.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove - 三色电子墨水显示屏 2.13'' Eagle 文件](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/res/Triple_Color_E-Ink_Display_2_13.zip)

- **[PDF]** [电子纸 2.13 英寸数据手册](https://files.seeedstudio.com/wiki/Grove-Triple_Color_E-Ink_Display_2.13/res/E-paper_2.13_inch.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时拥有流畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>