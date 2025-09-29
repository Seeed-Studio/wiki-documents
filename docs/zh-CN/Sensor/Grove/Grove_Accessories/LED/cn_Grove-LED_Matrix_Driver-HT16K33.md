---
description: Grove - LED矩阵驱动器 (HT16K33)
title: Grove - LED矩阵驱动器 (HT16K33)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-LED_Matrix_Driver-HT16K33
last_update:
  date: 1/7/2023
  author: shuxu hu
---



<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/main.jpg" alt="pir" width={600} height="auto" /></p>

LED矩阵成本低，通常用于显示简单的数字和图像。Grove - LED矩阵驱动器是一款基于I2C的产品，您可以使用我们准备的易于使用的库来控制LED矩阵，也可以创建自己的库来满足您的需求。8*8 LED矩阵可以轻松地从驱动板上组装和拆卸，因此可以根据需要方便地更换不同颜色的LED矩阵显示。



<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-LED-Matrix-Driver-HT16K33.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
<!-- [<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-LED-Matrix-Driver-HT16K33.html) -->

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-LED-Matrix-Driver-HT16K33.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
</div><br />

## 版本

<!-- | Product Version  | Changes                                                                                               | Released Date |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - LED Matrix Driver (HT16K33) | Initial                                                                                               | Sep 2018      | -->

<div class="table-center">
<table align="center">
    <thead>
        <tr>
            <th>产品版本</th>
            <th>变更</th>
            <th>发布日期</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Grove - LED矩阵驱动器 (HT16K33)</td>
            <td>初始版本</td>
            <td>2018年9月</td>
        </tr>
    </tbody>
</table>
</div>



## 特性 

- 集成RC振荡器
- 读/写地址自动递增
- 最大支持8 x 8图案
- I2C总线接口


## 规格

<!-- |Item|Value|
|---|---|
|Supply Voltage|3.3V / 5V|
|LED Matrix Dot NO.|8 * 8|
|Operating temperature|-40～85℃|
|Storage temperature|-50～125℃|
|Interface|I2C|
|I2C address|0x70(defult) 0x71~0x77(configurable)|
|size|L: 40mm W: 40mm H: 17mm| 
|Weight|8.8g|
|Package size|L: 140mm W: 90mm H: 18mm|
|Gross Weight|15g| -->

<div class="table-center">  
    <table align="center">  
        <thead>  
            <tr>  
                <th>项目</th>  
                <th>参数</th>  
            </tr>  
        </thead>  
        <tbody>  
            <tr>  
                <td>供电电压</td>  
                <td>3.3V / 5V</td>  
            </tr>  
            <tr>  
                <td>LED矩阵点数</td>  
                <td>8 * 8</td>  
            </tr>  
            <tr>  
                <td>工作温度</td>  
                <td>-40～85℃</td>  
            </tr>  
            <tr>  
                <td>存储温度</td>  
                <td>-50～125℃</td>  
            </tr>  
            <tr>  
                <td>接口</td>  
                <td>I2C</td>  
            </tr>  
            <tr>  
                <td>I2C地址</td>  
                <td>0x70 (默认) 0x71~0x77 (可配置)</td>  
            </tr>  
            <tr>  
                <td>尺寸</td>  
                <td>长: 40mm 宽: 40mm 高: 17mm</td>  
            </tr>  
            <tr>  
                <td>重量</td>  
                <td>8.8g</td>  
            </tr>  
            <tr>  
                <td>包装尺寸</td>  
                <td>长: 140mm 宽: 90mm 高: 18mm</td>  
            </tr>  
            <tr>  
                <td>总重量</td>  
                <td>15g</td>  
            </tr>  
        </tbody>  
    </table>  
</div>  


:::note
此Grove模块有8个可能的I2C地址，从0x70到0x77。默认的I2C地址是0x77。您可以通过按照下表中的指示进行焊接来更改I2C地址。
:::
<!-- |I2C address|Connection|
|---|---|
|0x70|Disconnect: A0 A1 A2|
|0x71|Disconnect: A1 A2, Connect: A0|
|0x72|Disconnect: A0 A2, Connect: A1|
|0x73|Disconnect: A2, Connect: A1 A0|
|0x74|Disconnect: A0 A1, Connect: A2|
|0x75|Disconnect: A1, Connect: A0 A2|
|0x76|Disconnect: A0, Connect: A1 A2|
|0x77|Connect: A0 A1 A2| -->

<div class="table-center">  
    <table align="center">  
        <thead>  
            <tr>  
                <th>I2C地址</th>  
                <th>连接方式</th>  
            </tr>  
        </thead>  
        <tbody>  
            <tr>  
                <td>0x70</td>  
                <td>断开: A0 A1 A2</td>  
            </tr>  
            <tr>  
                <td>0x71</td>  
                <td>断开: A1 A2, 连接: A0</td>  
            </tr>  
            <tr>  
                <td>0x72</td>  
                <td>断开: A0 A2, 连接: A1</td>  
            </tr>  
            <tr>  
                <td>0x73</td>  
                <td>断开: A2, 连接: A1 A0</td>  
            </tr>  
            <tr>  
                <td>0x74</td>  
                <td>断开: A0 A1, 连接: A2</td>  
            </tr>  
            <tr>  
                <td>0x75</td>  
                <td>断开: A1, 连接: A0 A2</td>  
            </tr>  
            <tr>  
                <td>0x76</td>  
                <td>断开: A0, 连接: A1 A2</td>  
            </tr>  
            <tr>  
                <td>0x77</td>  
                <td>连接: A0 A1 A2</td>  
            </tr>  
        </tbody>  
    </table>  
</div>  

例如，如果我想将地址更改为 0x73，我需要连接焊盘 A1、A0 并断开焊盘 A2。然后我将获得地址 0b01110011，即 0x73。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/0x73.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/0x73.png" alt="pir" width={600} height="auto" /></p>


## 典型应用

- 工业控制指示器
- 数字时钟、温度计、计数器、多用表
- 组合套件
- 视频录像机套件
- 仪器读数
- 其他消费类应用
- LED 显示屏


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


| Seeeduino V4.2 | 基础扩展板|Grove-LED 矩阵驱动器| 矩阵 LED - 红色|
|--------------|-------------|-----------------|---------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/LED_matrix.jpg" alt="pir" width={600} height="auto" /></p>
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-LED-Matrix-Driver-HT16K33.html)|[立即购买](https://www.seeedstudio.com/20mm-8-8-square-matrix-LED-Red-p-36.html)


:::note
**1.** 请轻轻插入 USB 数据线，否则可能会损坏接口。请使用内部有 4 根线的 USB 数据线，只有 2 根线的 USB 数据线无法传输数据。如果您不确定手头的数据线是否符合要求，可以点击[这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买。

**2.** 每个 Grove 模块在购买时都会附带一根 Grove 数据线。如果您丢失了数据线，可以点击[这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html)购买。
:::

- **步骤 1.** 将红色方形矩阵 LED 连接到 Grove-LED 矩阵驱动器。

- **步骤 2.** 将 Grove-LED 矩阵驱动器连接到 Grove-基础扩展板的 **I2C** 接口。

- **步骤 3.** 将 Grove-基础扩展板插入 Seeeduino。

- **步骤 4.** 使用 USB 数据线将 Seeeduino 连接到电脑。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/with_ard.jpeg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/with_ard.jpeg" alt="pir" width={600} height="auto" /></p>


#### 软件

:::note
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 从 Github 下载 [Grove_LED_Matrix_Driver_HT16K33](https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver_HT16K33.git) 库。

- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。

- **步骤 3.** 重启 Arduino IDE。打开示例程序，可以通过以下三种方式之一打开：
    1. 直接在 Arduino IDE 中通过路径打开：**文件 --> 示例 --> Grove - LED 矩阵驱动器(HT16K33 with 8*8 LED Matrix) --> display_bars**。
    <!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/ard1.jpg) -->
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/ard1.jpg" alt="pir" width={600} height="auto" /></p>

2. 在您的电脑中打开它，点击 **basic_demo.ino** 文件，该文件位于 **XXXX\Arduino\libraries\Grove_LED_Matrix_Driver_HT16K33⁩\examples\display_bars⁩\display_bars⁩.ino** 文件夹中，**XXXX** 是您安装 Arduino IDE 的位置。
<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/ard2.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/ard2.png" alt="pir" width={600} height="auto" /></p>

3. 或者，您可以直接点击图标  
<!-- ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" alt="pir" width={50} height="auto" /></p>

在代码块右上角，将以下代码复制到 Arduino IDE 的新草图中。

```cpp
#include <Wire.h>
#include "Grove_LED_Matrix_Driver_HT16K33.h"

#include "SoftI2C.h"
#include "I2Cdev.h"

Default_IIC_Adapter hard_ware_iic;
Matrix_8x8 matrix;

void setup() {
    hard_ware_iic.begin();
    matrix.init(&hard_ware_iic,0x70);
    matrix.setBrightness(0);
    matrix.setBlinkRate(BLINK_OFF);
}

void loop() {
    for (int i = 0; i < 33; i++) {
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

如果您想运行其他示例，可以采用类似的步骤，并看到不同的显示效果。

### DIY

您是否愿意让 LED 矩阵显示表情符号？现在轮到您设计自己的图案了。请准备好上述列出的硬件和软件要求。

- **步骤 1.** 使用在线 [LED Matrix Editor](http://xantorohara.github.io/led-matrix-editor/#) 编辑并为 8*8 LED 矩阵创建动画。

- **步骤 2.** 在右上角选择 LED 的颜色。在我的案例中，我选择了“红色”，因为我使用的是红色 LED 矩阵。

- **步骤 3.** 通过点击空白点来创建自己的设计。

- **步骤 4.** 根据您的设计复制生成的十六进制文件。有两种方法可以做到：
    - 在左下角的十六进制框中复制十六进制值。
    - 在 Arduino/C 代码部分复制相应的代码。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/emoji.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/img/emoji.png" alt="pir" width={600} height="auto" /></p>

- **步骤 5.** 在与其他 LED 矩阵示例相同的文件夹下创建新的 '.ino' 文件，并复制以下代码。

```cpp
#include "Grove_LED_Matrix_Driver_HT16K33.h"
#include <Wire.h>

#include "SoftI2C.h"
#include "I2Cdev.h"

// 在这里放置您自己的设计十六进制组。
const uint64_t Emoji[] = {
  0x3c4299a581a5423c,
  0x3c4281bd81a5423c,
  0x3c42a59981a5423c,
};

Default_IIC_Adapter hard_ware_iic;
Matrix_8x8 matrix;

void setup() {
  Wire.begin();
  matrix.init(&hard_ware_iic, 0x70);
  matrix.setBrightness(0);
  matrix.setBlinkRate(BLINK_OFF);
  /*************************************************************
    * 描述
    *    设置矩阵的闪烁频率
    * 参数
    *    blink_type: BLINK_OFF, BLINK_2HZ, BLINK_1HZ
    * 返回值
    *    无。
    *************************************************************/
}

void loop() {
  for (int i = 0; i < 3; i++) {
    matrix.writeOnePicture(Emoji[i]);
    /*************************************************************
        * 描述
        *    将图片写入显示缓冲区。
        *    调用 display() 显示缓冲区内容。
        * 参数
        *    pic: 一个 uint64_t 类型的 8x8 矩阵图片，您可以在
        *         https://xantorohara.github.io/led-matrix-editor/# 创建。
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

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/res/202002241_PCBA;Grove-LED-Matrix-Driver(HT16K33).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove - LED 矩阵驱动器 (HT16K33) Eagle 文件](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/res/202002241_PCBA;Grove-LED-Matrix-Driver(HT16K33).zip)

- **[Zip]** [Grove_LED_Matrix_Driver_HT16K33 软件库](https://github.com/Seeed-Studio/Grove_LED_Matrix_Driver_HT16K33/archive/master.zip)

- **[PDF]** [HT16K33 数据手册](https://files.seeedstudio.com/wiki/Grove-LED_Matrix_Driver-HT16K33/res/310040349,SMD-IC-Driver;SOP-28-1.pdf)

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供多种支持渠道，确保您使用我们的产品时能够获得顺畅的体验。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>