---
description: Grove - 红色 LED 矩阵带驱动
title: Grove - 红色 LED 矩阵带驱动
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Red_LED_Matrix_w_Driver
last_update:
  date: 1/9/2023
  author: shuxu hu
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/main2.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Red-LED-Matrix-w-Driver.html" target="_blank"> 
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    		</a>
		</div>

LED 矩阵成本低，通常用于显示简单的数字和图像。Grove - 红色 LED 矩阵带驱动是 20mm 8*8 方形 LED 矩阵 - 红色与 Grove - LED 矩阵驱动的组合。HT16K33 是一个内存映射和多功能 LED 控制器驱动，允许您使用我们准备好的易用库来控制 LED 矩阵，或者您可以创建自己的库来满足您的需求。

<iframe width={800} height={450} src="https://www.youtube.com/embed/i9hnRPuCx-Q" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

## 版本

| 产品版本  | 变更                                                                                               | 发布日期 |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - 红色 LED 矩阵带驱动 | 初始版本                                                                                               | 2018年9月      |

## 特性

- 集成 RC 振荡器
- 读/写地址自动递增
- 最大支持 8 x 8 图案
- I^2^C 总线接口

## 规格

|项目|值|
|---|---|
|供电电压|3.3V / 5V|
|LED 矩阵点数|8 * 8|
|工作温度|-40～85℃|
|存储温度|-50～125℃|
|接口|I2C|
|I2C 地址|0x70（默认） 0x71~0x77（可配置）|
|尺寸|长: 40mm 宽: 40mm 高: 21mm| 
|重量|17.4g|
|包装尺寸|长: 140mm 宽: 90mm 高: 20mm|
|毛重|24g|

:::note
         此 Grove 模块有 8 个可能的 I2C 地址，从 0x70 到 0x77。默认的 I^2^C 地址是 0x77。您可以通过以下表格中的焊接指示更改 I2C 地址。
:::
|I^2^C 地址|连接方式|
|---|---|
|0x70|断开: A0 A1 A2|
|0x71|断开: A1 A2, 连接: A0|
|0x72|断开: A0 A2, 连接: A1|
|0x73|断开: A2, 连接: A1 A0|
|0x74|断开: A0 A1, 连接: A2|
|0x75|断开: A1, 连接: A0 A2|
|0x76|断开: A0, 连接: A1 A2|
|0x77|连接: A0 A1 A2|

例如，如果我想将地址更改为 0x73，我需要连接焊盘 A1 和 A0，并断开焊盘 A2。然后我将获得地址 0b01110011，即 0x73。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/0x73.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/0x73.png" alt="pir" width={600} height="auto" /></p>

## 典型应用

- 工业控制指示器
- 数字时钟、温度计、计数器、万用表
- 组合套件
- 视频录像机套件
- 仪器读数显示
- 其他消费类应用
- LED显示屏

## 硬件概述

### 引脚图

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/pinout.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/pinout.jpg" alt="pir" width={600} height="auto" /></p>

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

| Seeeduino V4.2 | Base Shield|Grove - 红色 LED 矩阵及驱动器| 
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/thumbnail2.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-Red-LED-Matrix-w/Driver.html)|

:::note
    **1.** 请轻轻插入 USB 数据线，否则可能会损坏接口。请使用内部有 4 根线的 USB 数据线，只有 2 根线的 USB 数据线无法传输数据。如果您不确定手头的数据线是否符合要求，可以点击 [这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) 购买。

    **2.** 每个 Grove 模块在购买时都会附带一根 Grove 数据线。如果您丢失了数据线，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买。
:::

- **步骤 1.** 将 Grove - 红色 LED 矩阵及驱动器连接到 Grove-Base Shield 的 **I^2^C** 端口。

- **步骤 2.** 将 Grove-Base Shield 插入 Seeeduino。

- **步骤 3.** 使用 USB 数据线将 Seeeduino 连接到电脑。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/with_ard.jpeg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/with_ard.jpeg" alt="pir" width={600} height="auto" /></p>

#### 软件

:::note
        如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 从 Github 下载 [Grove_LED_Matrix_Driver_HT16K33](https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver_HT16K33.git) 库。

- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。

- **步骤 3.** 重启 Arduino IDE。打开示例代码，可以通过以下三种方式打开：
    1. 在 Arduino IDE 中直接打开，路径为：**File --> Examples -->Grove - LED Matrix Driver(HT16K33 with 8*8 LED Matrix) --> display_bars**。
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/ard1.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/ard1.jpg" alt="pir" width={600} height="auto" /></p>

    2. 在您的电脑中打开，点击 **basic_demo.ino** 文件，该文件位于 **XXXX\Arduino\libraries\Grove_LED_Matrix_Driver_HT16K33⁩\examples\display_bars⁩\display_bars⁩.ino** 文件夹中，其中 **XXXX** 是您安装 Arduino IDE 的位置。
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/ard2.png) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/ard2.png" alt="pir" width={600} height="auto" /></p>

    3. 或者，您可以直接点击图标：
    <!-- ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" alt="pir" width={50} height="auto" /></p>

在代码块的右上角点击以将以下代码复制到 Arduino IDE 中的新草图中。

```cpp
#include <Wire.h>
#include "Grove_LED_Matrix_Driver_HT16K33.h"

Matrix_8x8 matrix;

void setup()
{
    Wire.begin();
    matrix.init();
    matrix.setBrightness(0);
    matrix.setBlinkRate(BLINK_OFF);
}

void loop()
{
    for (int i=0;i<33;i++)
    {
        // writeBar 的输入范围是 [0-32]
        matrix.writeBar(i);
        matrix.display();
        delay(150);
    }
}
```

:::note
库文件可能会更新。此代码可能不适用于更新后的库文件，因此我们建议您使用前两种方法。
:::

:::success
如果一切顺利，您将能够在 LED 矩阵上看到各种条形显示。
:::

如果您想运行其他示例，可以执行类似的步骤，并看到不同的显示效果。

---

**DIY**

您是否愿意让 LED 矩阵显示表情符号？现在轮到您自己设计了。准备好上述列出的硬件和软件要求。

- **步骤 1.** 使用在线 [LED 矩阵编辑器](http://xantorohara.github.io/led-matrix-editor/#) 编辑并为 8*8 LED 矩阵创建动画。

- **步骤 2.** 在右上角选择 LED 的颜色。在我的案例中，我选择了“红色”，因为我使用的是红色 LED 矩阵。

- **步骤 3.** 通过点击空白点创建自己的设计。

- **步骤 4.** 根据您的设计复制生成的十六进制文件。有两种方法可以做到：
    - 在左下角的十六进制框中复制十六进制值。
    - 在 Arduino/C 代码部分复制相应的代码。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/emoji.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/emoji.png" alt="pir" width={600} height="auto" /></p>

- **步骤 5.** 在与其他 LED 矩阵示例相同的文件夹下创建新的 '.ino' 文件，并复制以下代码。

```cpp
#include "Grove_LED_Matrix_Driver_HT16K33.h"
#include <Wire.h>

// 在这里放置您自己的设计十六进制组。
const uint64_t Emoji[] = 
{
  0x3c4299a581a5423c,
  0x3c4281bd81a5423c,
  0x3c42a59981a5423c,
};

Matrix_8x8 matrix;

void setup() {
    Wire.begin();
    matrix.init();
    matrix.setBrightness(0);
    matrix.setBlinkRate(BLINK_OFF);
    /*************************************************************
    * 描述
    *    设置矩阵的闪烁速率
    * 参数
    *    blink_type: BLINK_OFF, BLINK_2HZ, BLINK_1HZ
    * 返回值
    *    无。
    *************************************************************/
}

void loop() {
  for (int i = 0;i < 3;i++)
    {
        matrix.writeOnePicture(Emoji[i]);
        /*************************************************************
        * 描述
        *    在显示缓冲区中写入一幅图片。
        *    调用 display() 显示缓冲区内容。
        * 参数
        *    pic: 一个 uint64_t 类型的 8x8 矩阵图片，您可以在以下网站制作：
        *         https://xantorohara.github.io/led-matrix-editor/#
        * 返回值
        *    无。
        *************************************************************/
        matrix.display();
        /*************************************************************
        * 描述
        *    清除显示缓冲区。
        *    调用 display() 后，8x8 矩阵将显示为空。
        * 参数
        *    无。
        * 返回值
        *    无。
        *************************************************************/
        delay(500);
    }
}
```

- **步骤 6.** 将您的项目上传到您的 Seeeduino。

:::success
如果一切顺利，您的 LED 矩阵将显示如下。
:::

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/display.gif) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/display.gif" alt="pir" width={600} height="auto" /></p>

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/res/202002241_PCBA%3BGrove%20-%20LED%20Matrix%20Driver%20(HT16K33)_原理图.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove - LED矩阵驱动器(HT16K33) Eagle文件](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/res/202002241_PCBA%3BGrove%20-%20LED%20Matrix%20Driver%20(HT16K33)_原理图.zip)

- **[Zip]** [Grove_LED_Matrix_Driver_HT16K33 软件库](https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver_HT16K33/archive/master.zip)

- **[PDF]** [HT16K33 数据手册](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/res/310040349%2C%20SMD%20IC%20Driver%3BSOP-28-物料规格书-1.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时拥有顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>