---
description: Grove - RGB LED矩阵带驱动器
title: Grove - RGB LED矩阵带驱动器
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-RGB_LED_Matrix_w-Driver
last_update:
  date: 1/9/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/main.jpg" alt="pir" width={600} height="auto" /></p>

8x8 RGB LED矩阵非常适合简单的图像显示，64个像素LED和每个像素255种颜色意味着几乎无限的可能性。然而，矩阵复杂的布线令人望而却步。现在我们为您提供Grove - RGB LED矩阵带驱动器，让所有复杂多变的布线和焊接都成为过去，只需一个Grove连接器即可轻松控制RGB 8x8 LED矩阵。令人惊叹？试试吧，您一定会爱上它。

<iframe width={800} height={450} src="https://www.youtube.com/embed/i9hnRPuCx-Q" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

<!-- <p style=":center"><a href="https://www.seeedstudio.com/grove-rgb-led-matrix-w-driver.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/grove-rgb-led-matrix-w-driver.html)

## 版本

| 产品版本  | 变更                                                                                               | 发布日期       |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - RGB LED Stick (10 WS2813 Mini) | 初始版本                                                                                               | 2018年12月      |

## 特性

- 8x8像素，**<font color="red">R</font><font color="green">G</font><font color="blue">B</font>** 255种颜色
- 内置MCU
- ±1%(典型值) LED电流通道间精度
- 支持显示自定义图像

## 规格

|项目|值|
|---|---|
|工作电压|3.3V / 5V|
|工作温度|-40℃ ~ +85℃|
|接口|I2C|
|I2C地址|0x65|
|尺寸|长: 40mm 宽: 40mm 高: 21mm| 
|重量|17.3g|
|包装尺寸|长: 120mm 宽: 100mm 高: 33mm|
|毛重|28g|

## 典型应用

- 简单图像显示
- 玩具

## 硬件概览

### 引脚定义

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/Pin_out.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/Pin_out.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/Pin_out_led.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/Pin_out_led.jpg" alt="pir" width={600} height="auto" /></p>

---
**Grove 接口**  

我们使用I2C接口来控制LED矩阵：

>GND: 将此模块连接到系统GND  
>VCC: 您可以为此模块使用5V电压  
>SDA: I2C串行数据  
>SCL: I2C串行时钟

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/1-3.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/1-3.jpg" alt="pir" width={600} height="auto" /></p>

---

**DC-DC模块**

我们使用MP-2155为MCU和LED驱动芯片提供稳定的3.3V电压。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/1-2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/1-2.jpg" alt="pir" width={600} height="auto" /></p>

---

**固件下载接口**  

连接到SDA和SCL引脚，在下载固件时作为UART使用。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/1-1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/1-1.jpg" alt="pir" width={600} height="auto" /></p>

---

**LED驱动器**

[MY9221](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/res/MY9221.pdf) 是一个12通道（R/G/B x 4）的恒流APDM（自适应脉冲密度调制）LED驱动器。由于此模块是8x8矩阵，因此我们需要**<font color="red">R</font><font color="green">G</font><font color="blue">B</font>** X8输出通道，因此我们使用了两个MY9221。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/2-2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/2-2.jpg" alt="pir" width={600} height="auto" /></p>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/schematic4.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/schematic4.jpg" alt="pir" width={600} height="auto" /></p>

---

**8x8 LED矩阵**

我们使用64个KTR-3528RGB LED组成一个8x8矩阵LED。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/RGB.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/RGB.jpg" alt="pir" width={600} height="auto" /></p>

我们使用V信号进行列选择，RGB信号进行行选择。  
我们通过**D**命名LED，D1 - D64。R1/G1/B1 - R8/G8/B8由两个MY9221驱动，**V1 - V8**由74HC183PW芯片控制。如果所有LED都关闭，V1 - V9应默认拉低，所有RGB通道线都将被拉高。

例如：


**D8** 位于第一行第八列。如果我们想让 **D8** 显示绿色（Green-255），需要将 V8 拉高，同时将 R1 和 B1 拉高，将 G1 接地。这样只有绿色 LED 会亮起，你会看到 D8 变成纯绿色。

---

## 支持的平台

| Arduino | Raspberry Pi |
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上述提到的支持平台仅表示模块的硬件或理论兼容性。我们通常只为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库或演示代码。因此，用户需要自行编写软件库。
:::

---

## 入门指南

### 使用 Arduino

#### 硬件

**所需材料**

| Seeeduino V4.2 | Base Shield | Grove - RGB LED Matrix w/Driver |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">立即购买</a>|<a href="https://www.seeedstudio.com/grove-rgb-led-matrix-w-driver.html" target="_blank">立即购买</a>|

:::note
    **1** 请轻轻插入 USB 线，否则可能会损坏接口。请使用内部有 4 根线的 USB 线，只有 2 根线的 USB 线无法传输数据。如果您不确定手头的线是否符合要求，可以点击 [这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) 购买。

    **2** 每个 Grove 模块在购买时都会附带一根 Grove 线缆。如果您丢失了 Grove 线缆，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买。
:::

:::important
    **1** 如果您使用 Arduino UNO 作为主板，建议使用直流电源，否则 VCC 的最大纹波可能会超过 100mV。如果您使用 Seeeduino V4.2 作为主板，则无需连接直流电源。

    **2** 不支持热插拔。
:::

- **步骤 1.** 将 Grove - RGB LED Matrix w/Driver 连接到 Grove-Base Shield 的 **I2C** 端口。

- **步骤 2.** 将 Grove-Base Shield 插入 Seeeduino。

- **步骤 3.** 使用 USB 线将 Seeeduino 连接到 PC。

:::note
        如果没有 Grove Base Shield，我们也可以直接将此模块连接到 Seeeduino，如下所示。
:::

| Seeeduino      |  Grove 线缆       | Grove - RGB LED Matrix w/Driver |
|--------------- |--------------------|-----|
| GND            | 黑色              | GND |
| 5V 或 3.3V     | 红色              | VCC |
| SDA            | 白色              | SDA |
| SCL            | 黄色              | SCL |

---

#### 软件

:::note
        如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 从 Github 下载 [Seeed_RGB_LED_Matrix](https://github.com/Seeed-Studio/Seeed_RGB_LED_Matrix) 库。

- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。

- **步骤 3.** 重启 Arduino IDE。打开示例代码，可以通过以下三种方式打开：
    1. 在 Arduino IDE 中直接打开，路径为：**File --> Examples --> Seeed_RGB_Led_Matrix --> display_emoji**。
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/path1.jpg" alt="pir" width={600} height="auto" /></p>

    2. 在您的电脑中打开，点击 **display_emoji.ino** 文件，该文件位于 **XXXX\Arduino\libraries\Seeed_RGB_LED_Matrix-master\examples\display_emoji** 文件夹中，其中 **XXXX** 是您安装 Arduino IDE 的位置。
      <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/path2.jpg" alt="pir" width={600} height="auto" /></p>

3. 或者，您可以直接点击代码块右上角的图标  
<!-- ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg)  -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" alt="pir" width={50} height="auto" /></p>

将以下代码复制到 Arduino IDE 的新草图中。

```cpp
#include "grove_two_rgb_led_matrix.h"

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
#define SERIAL SerialUSB
#else
#define SERIAL Serial
#endif

#define DISPLAY_COLOR    0X11

void waitForMatrixReady()
{
    delay(1000);
}

GroveTwoRGBLedMatrixClass matrix;
void setup()
{
    Wire.begin();
    SERIAL.begin(115200);
    waitForMatrixReady();
    uint16_t VID = 0;
    VID = matrix.getDeviceVID();
    if(VID != 0x2886)
    {
        SERIAL.println("无法检测到 LED 矩阵!!!");
        while(1);
    }
    SERIAL.println("矩阵初始化成功!!!");
}

void loop()
{
    for(int i=0;i<35;i++)
    {
        matrix.displayEmoji(i,5000,true);
        delay(5000);
    }
}
```

:::note
库文件可能会更新。此代码可能不适用于更新后的库文件，因此我们建议您使用前两种方法。
:::

- **步骤 4.** 上传示例代码。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

:::success
如果一切正常，现在您可以看到 LED 矩阵显示：
:::

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/emoji_wiki.gif) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/emoji_wiki.gif" alt="pir" width={600} height="auto" /></p>

### DIY

现在让我们来谈谈 DIY。

:::note
在此版本固件中，如果您想使用 UNO 串口 DIY 自定义图像，您需要修改 Arduino 文件。如果您使用 Mega 或 Lotus，则无需更改。
:::

> 找到 Arduino 设置文件夹 **xxxxx\Arduino\hardware\arduino\avr\libraries\Wire\src**，打开 **Wire.h** 文件

将

```
#define BUFFER_LENGTH 32
```

修改为

```
#define BUFFER_LENGTH 128
```

> 然后找到 Arduino 设置文件夹 **xxxxx\Arduino\hardware\arduino\avr\libraries\Wire\src\utility**，打开 **twi.h** 文件。

将

```
#define TWI_BUFFER_LENGTH 32
```

修改为

```
#define TWI_BUFFER_LENGTH 128
```

---

开始 DIY。

- **步骤 1.** 下载 [图像编辑器](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/res/docs.zip)，这是一个 zip 文件，解压它。

- **步骤 2.** 在文件夹 **doc-->doc** 中找到 **index.html**，双击打开它。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/DIY.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/DIY.jpg" alt="pir" width={600} height="auto" /></p>

- **步骤 3.** 创建您自己的图像，当您完成一个图像时，点击控制面板中的 **Insert**，然后您可以编辑另一个图像。当您完成所有图像序列后，可以复制代码区中的代码。

- **步骤 4.** 将以下代码块第 9 行 **unit64_t example[]** 替换为您自己的代码。

```cpp
#include "grove_two_rgb_led_matrix.h"

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
#define SERIAL SerialUSB
#else
#define SERIAL Serial
#endif

uint64_t example[] = {

  0xffff5e5e5e5effff,
  0xff5effffffff5eff,
  0x5eff5effff5eff5e,
  0x5effffffffffff5e,
  0x5eff5effff5eff5e,
  0x5effff5e5effff5e,
  0xff5effffffff5eff,
  0xffff5e5e5e5effff,
 
  0xffff29292929ffff,
  0xff29ffffffff29ff,
  0x29ff29ffff29ff29,
  0x29ffffffffffff29,
  0x29ff29292929ff29,
  0x29ffffffffffff29,
  0xff29ffffffff29ff,
  0xffff29292929ffff,
 
  0xffff00000000ffff,
  0xff00ffffffff00ff,
  0x00ff00ffff00ff00,
  0x00ffffffffffff00,
  0x00ffff0000ffff00,
  0x00ff00ffff00ff00,
  0xff00ffffffff00ff,
  0xffff00000000ffff
};

void waitForMatrixReady()
{
    delay(1000);
}

GroveTwoRGBLedMatrixClass matrix;
void setup()
{
    Wire.begin();
    SERIAL.begin(115200);
    waitForMatrixReady();
    uint16_t VID = 0;
    VID = matrix.getDeviceVID();
    if(VID != 0x2886)
    {
        SERIAL.println("无法检测到 LED 矩阵!!!");
        while(1);
    }
    SERIAL.println("矩阵初始化成功!!!");
}

void loop()
{
 for (int i=0;i<3;i++) {
        matrix.displayFrames(example+i*8, 200, false, 1);
        delay(500);
    }
}
```

:::success
如果一切正常，现在您可以看到 LED 矩阵显示：
:::

<!-- ![](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/emoji_smile.gif) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/emoji_smile.gif" alt="pir" width={600} height="auto" /></p>

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/res/Grove%20-%20RGB%20LED%20Matrix%20w%20Driver.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[Zip]** [Grove - RGB LED 矩阵驱动 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/res/Grove%20-%20RGB%20LED%20Matrix%20w%20Driver.zip)

- **[Zip]** [RGB LED 矩阵 8x8 Eagle 文件](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/res/RGB%20LED%20Matrix%208x8.zip)

- **[Zip]** [Seeed_RGB_LED_Matrix 库](https://github.com/Seeed-Studio/Seeed_RGB_LED_Matrix/archive/master.zip)

- **[PDF]** [MY9221 数据手册](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/res/MY9221.pdf)

- **[PDF]** [MP2155 数据手册](https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/res/MP2155.pdf)

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