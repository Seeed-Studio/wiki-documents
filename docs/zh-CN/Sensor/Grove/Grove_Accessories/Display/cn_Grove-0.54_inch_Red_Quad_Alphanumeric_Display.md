---
description: Grove - 0.54 英寸红色四位字母数字显示屏
title: Grove - 0.54 英寸红色四位字母数字显示屏
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-0.54_inch_Red_Quad_Alphanumeric_Display
last_update:
  date: 1/7/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Quad-Alphanumeric-Display/img/104020133-front.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-0.54-Red-Quad-Alphanumeric-Display/img/104020133-front.png" alt="pir" width={600} height="auto" /></p>

该模块是一款具有高亮度和红色背光的四位字母数字显示屏，每位由一个14段数码管组成。常见的7段显示屏，例如我们的 [Grove - 4-Digit Display](https://www.seeedstudio.com/Grove-4-Digit-Display.html)，只能显示数字0-9以及有限的字母。相比之下，14段数码显示屏没有这种限制，它可以显示所有字符，这就是为什么我们称它为字母数字显示屏。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/img/seve-seg-compare-14-seg.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/img/seve-seg-compare-14-seg.png" alt="pir" width={600} height="auto" /></p>

<div align="center"><b>7段显示屏 vs 14段显示屏</b><i> </i></div>

数字高度为0.54英寸，模块中使用的红色LED具有超高亮度，因此您可以在几米外看到它。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/img/digit-height.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/img/digit-height.jpg" alt="pir" width={600} height="auto" /></p>

<div align="center"><b>0.54英寸字母数字显示屏高度</b><i> </i></div>

通常，14段显示屏需要使用17根或更多的线来控制显示，这意味着您的主控板（例如Arduino）的大量IO口将被占用。借助板载HT16K33芯片和Grove连接器，我们将其制作成一个i2c显示屏，仅需四根线即可。不需要麻烦的焊接，也不需要复杂的布线，如果您使用[seeeduino](https://www.seeedstudio.com/seeeduino-boards-c-987.html)，它真的即插即用，非常简单。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/img/pins-compare.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/img/pins-compare.jpg" alt="pir" width={600} height="auto" /></p>

<div align="center"><b>18针 vs 4针</b><i> </i></div>

我们已经为Arduino、树莓派、Beaglebone以及其他单板计算机（SBC）发布了许多[显示屏](https://www.seeedstudio.com/displays-c-929.html)，现在我们为您带来了Grove - 0.54'' 红色四位字母数字显示屏，您可以用它显示一个四字母单词，例如“Love”，或者将其制作成一个时钟。总而言之，14段显示屏意味着更多的可能性和创造力。我们希望它能帮助您创造更多有趣的项目。

如果您只需要一个双位字母数字显示屏，可以查看 [Grove - 0.54" 红色双位字母数字显示屏](https://www.seeedstudio.com/Grove-0-54-Red-Dual-Alphanumeric-Display-p-4031.html)。

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-0-54-Red-Quad-Alphanumeric-Display-p-4032.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-0-54-Red-Quad-Alphanumeric-Display-p-4032.html)

## 特性

- 可显示所有字母和数字
- 超高亮度：30mcd
- Grove I2C，仅占用两个 IO 引脚
- 板载驱动器，使用方便
- 阴极显示

## 规格

| 参数                          | 值               |
|-------------------------------|-----------------|
| 供电电压                     | 3.3V / 5V       |
| 工作环境温度                 | -30°C 至 85°C   |
| LED 显示                     | JM-S05442ASR-001|
| LED 控制驱动器               | HT16K33         |
| LED 颜色                     | 红色            |
| 超高亮度                     | 30mcd           |
| LED 高度                     | 0.54英寸        |
| LED 段数                     | 14              |
| 尺寸                         | 40 * 60mm       |
| 输出接口                     | I2C             |
| I2C 地址（可选）             | 0x71（默认）    |

## 应用

- 工业控制指示器
- 数字时钟、温度计、计数器、万用表
- 仪器读数
- 其他消费类应用
- LED 显示屏

## 引脚图

<!-- ![](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Quad-Alphanumeric-Display/img/pinout.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-0.54-Red-Quad-Alphanumeric-Display/img/pinout.jpg" alt="pir" width={600} height="auto" /></p>

以下是关于 I2C 地址的表格。

| A2 | A1 | A0 | I2C 地址     |
|----|----|----|-------------|
| 0  | 0  | 0  | 0x70        |
| 0  | 0  | 1  | 0x71（默认）|
| 0  | 1  | 0  | 0x72        |
| 0  | 1  | 1  | 0x73        |
| 1  | 0  | 0  | 0x74        |
| 1  | 0  | 1  | 0x75        |
| 1  | 1  | 0  | 0x76        |
| 1  | 1  | 1  | 0x77        |

:::warning
    如果连接多个显示器，必须分别为显示器提供外部 VCC 和 GND，并将 SDA、SCL 和 GND 连接到 Seeeduino 板。  
:::

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

| Seeeduino V4.2 | Base Shield |Grove - 0.54" 红色四位字母数字显示屏 |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-0.54-Red-Quad-Alphanumeric-Display/img/104020133-front-s.png" alt="pir" width={600} height="auto" /></p>
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-0-54-Red-Quad-Alphanumeric-Display-p-4032.html)|

>此外，您可以考虑我们的新产品 [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)，它相当于 Seeeduino V4.2 和 Base Shield 的组合。

:::note
    **1** 请轻轻插入 USB 数据线，否则可能会损坏接口。请使用内部有 4 根线的 USB 数据线，只有 2 根线的 USB 数据线无法传输数据。如果您不确定您拥有的线缆，可以点击 [这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) 购买。

    **2** 每个 Grove 模块在购买时都会附带一根 Grove 数据线。如果您丢失了 Grove 数据线，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买。
:::

#### 硬件连接

- **步骤 1.** 将 Grove - 0.54" 红色四位字母数字显示屏连接到 Base Shield 的 **I2C** 接口。
- **步骤 2.** 将 Grove - Base Shield 插入 Seeeduino。
- **步骤 3.** 使用 USB 数据线将 Seeeduino 连接到电脑。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Quad-Alphanumeric-Display/img/wiki_connect.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-0.54-Red-Quad-Alphanumeric-Display/img/wiki_connect.png" alt="pir" width={600} height="auto" /></p>

:::note
    如果没有 Grove Base Shield，我们也可以直接将 Grove - 0.54" 红色四位字母数字显示屏连接到 Seeeduino，如下所示。

| Seeeduino       | Grove - 0.54" 红色四位字母数字显示屏 |
|---------------|-------------------------|
| 5V            | 红色                   |
| GND           | 黑色                   |
| SDA           | 白色                   |
| SCL           | 黄色                   |

#### 软件

:::note
    如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

**1. 从 display_basic 开始**

- **步骤 1.** 从 Github 下载 [Grove - 0.54" 红色四位字母数字显示屏库](https://github.com/Seeed-Studio/Seeed_Alphanumeric_Display_HT16K33)。
- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。
- **步骤 3.** 打开 **Arduino IDE -> 文件 -> 示例 -> Seeed_Alphanumeric_Display_HT16K33 -> display_basic**。
- **步骤 4.** 取消注释 **tube.setTubeType(TYPE_4,TYPE_4_DEFAULT_I2C_ADDR)**，如下所示，您需要为所有其他示例取消注释。

```
    // 如果使用四位数字管，请使用此配置。
       tube.setTubeType(TYPE_4,TYPE_4_DEFAULT_I2C_ADDR);

    // 如果使用两位数字管，请使用此配置。
    // tube.setTubeType(TYPE_2,TYPE_2_DEFAULT_I2C_ADDR);
```

- **步骤 5.** 将示例代码上传到 Arduino。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。
- **步骤 6.** 您可以看到 LED 按顺序显示 12 -> 4567 -> AB -> abcd 并重复。

**2. 其他示例**

- **display_custom:** 显示单个字符和点。
- **display_scroll_string:** 显示超过 4 个字符的滚动字符串。
- **display_scroll_number:** 显示大于 9999 的滚动数字。
- **number_increment:** 显示递增数字（右侧 2 个数字管）。
- **combine_two_displays:** 您可以连接 2 个 Grove - 0.54" 红色四位字母数字显示屏或 Grove - 0.54" 红色双位字母数字显示屏，或者同时连接 Grove - 0.54" 红色双位字母数字显示屏和 Grove - 0.54" 红色四位字母数字显示屏。

如果您使用 2 个 Grove - 0.54" 红色四位字母数字显示屏，请按如下方式修改代码：

```
#define I2C_ADDR_AFTER_CHANGE_FOUR  0x75     //Grove - 0.54" 红色四位字母数字显示屏修改后的 I2C 地址
#define I2C_ADDR_DEFAULT_FOUR       0x71     //Grove - 0.54" 红色四位字母数字显示屏默认 I2C 地址

tube1.setTubeType(TYPE_4,I2C_ADDR_AFTER_CHANGE_FOUR);
tube2.setTubeType(TYPE_4,I2C_ADDR_DEFAULT_FOUR);
```

如果您同时使用 Grove - 0.54" 红色双位字母数字显示屏和 Grove - 0.54" 红色四位字母数字显示屏，请按如下方式修改代码：

```
#define I2C_ADDR_AFTER_CHANGE_FOUR  0x70     //Grove - 0.54" 红色双位字母数字显示屏修改后的 I2C 地址
#define I2C_ADDR_DEFAULT_FOUR       0x71     //Grove - 0.54" 红色四位字母数字显示屏默认 I2C 地址

tube1.setTubeType(TYPE_2,I2C_ADDR_AFTER_CHANGE_FOUR);
tube2.setTubeType(TYPE_4,I2C_ADDR_DEFAULT_FOUR);
```

:::warning
    如果连接了 2 个模块，由于 Arduino 的供电限制，红色数字管会稍微变暗。
:::

**3. API**

- **Init(NUMERIC_I2C_ADDR):** 使用 I2C 地址初始化设备，Grove - 0.54" 红色四位字母数字显示屏的默认 I2C 地址为 0x71。
- **setBrightness(15):** 设置亮度，范围为 0-15，亮度越高，功耗越大。
- **setBlinkRate(BLINK_OFF):** 设置闪烁间隔，可以设置为 BLINK_OFF/BLINK_2HZ/BLINK_1HZ。
- **displayNum(1234567,500):** 显示数字，有两个参数。第一个参数是数字，第二个参数是滚动间隔（毫秒）。如果数字小于 10000，数字管显示静态数字。否则，显示滚动数字。滚动间隔（毫秒）仅在滚动模式下有效，您可以将间隔设置为 0。
- **displayString("ABCDEFGHJIYZ",500):** 显示字符，有两个参数。第一个参数是字符，第二个参数是滚动间隔（毫秒）。如果字符少于 4 个字符，数字管显示静态字符。否则，显示滚动字符。滚动间隔（毫秒）仅在滚动模式下有效，您可以将间隔设置为 0。该函数不支持小写字母，显示效果与大写字母相同。
- **setTubeSingleChar(FIRST_TUBE,'t'):** 在特定数字管上设置单个字符。
- **tube.setPoint(true,false):** 设置两个点的开关状态。此示例设置第一个点为开，第二个点为关。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-0.54-Red-Quad-Alphanumeric-Display/res/Grove-0.54-Red-Quad-Alphanumeric-Display.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[ZIP]** [Grove - 0.54" 四位双字母数字显示屏原理图文件](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Quad-Alphanumeric-Display/res/Grove-0.54-Red-Quad-Alphanumeric-Display.zip)
- **[PDF]** [LED模块数据手册](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Quad-Alphanumeric-Display/res/DIP-LED-4.pdf)
- **[PDF]** [HT16K33数据手册](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/res/HT16K33.pdf)
- **[PDF]** [MPS MP2155数据手册](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/res/MPS_MP2155%20datasheetpdf.pdf)
- **[Library]** [Grove - 0.54" 四位双字母数字显示屏库文件](https://github.com/Seeed-Studio/Seeed_Alphanumeric_Display_HT16K33)

## 技术支持与产品讨论
感谢您选择我们的产品！我们提供多种支持渠道，确保您在使用我们的产品时获得顺畅的体验。我们提供多种沟通方式，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>