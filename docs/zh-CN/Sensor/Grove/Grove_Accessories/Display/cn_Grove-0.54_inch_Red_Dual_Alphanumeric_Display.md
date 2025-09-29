---
description: Grove - 0.54 英寸红色双字母数字显示屏
title: Grove - 0.54 英寸红色双字母数字显示屏
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-0.54_inch_Red_Dual_Alphanumeric_Display
last_update:
  date: 1/7/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/img/front.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/img/front.png" alt="pir" width={600} height="auto" /></p>

该模块是一款具有高亮度和红色背光的双位字母数字显示屏，每位由一个14段数字管组成。常见的7段显示屏只能显示数字0-9以及有限的字母，而14段数字显示屏则没有这种限制，它可以显示所有字符，因此我们称之为字母数字显示屏。数字高度为0.54英寸，模块中使用的红色LED具有超高亮度，因此您可以在几米外清晰看到它。

通常，14段显示屏需要使用17根或更多的线来控制显示，这意味着会占用主控板（如Arduino）的大量IO端口。借助板载HT16K33芯片和Grove连接器，我们将其设计为i2c显示屏，仅需四根线即可完成连接。无需繁琐的焊接和复杂的布线，如果您使用[seeeduino](https://www.seeedstudio.com/seeeduino-boards-c-987.html)，它真正实现了即插即用，非常简单。

我们已经为Arduino、树莓派、Beaglebone以及其他单板计算机(SBC)发布了许多[显示屏](https://www.seeedstudio.com/displays-c-929.html)，现在我们为您带来了Grove - 0.54" 红色双字母数字显示屏，14段显示屏意味着更多的可能性和创造力。我们希望它能帮助您创造更多有趣的项目。

如果您需要一个四位字母数字显示屏，可以查看[Grove - 0.54" 红色四字母数字显示屏](https://www.seeedstudio.com/Grove-0-54-Red-Quad-Alphanumeric-Display-p-4032.html)。

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-0-54-Red-Dual-Alphanumeric-Display-p-4031.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-0-54-Red-Dual-Alphanumeric-Display-p-4031.html)

## 特性

- 可显示所有字母和数字
- 超高亮度：30mcd
- Grove I2C，仅占用两个IO引脚
- 板载驱动器，易于使用
- 阴极显示

## 规格

| 参数                          | 值              |
|-------------------------------|-----------------|
| 供电电压                     | 3.3V / 5V       |
| 工作环境温度                 | -30°C 至 85°C   |
| LED 显示屏                   | JM-S05422AH-001 |
| LED 控制驱动器               | HT16K33         |
| LED 颜色                     | 红色            |
| 超高亮度                     | 30mcd           |
| LED 高度                     | 0.54英寸        |
| LED 段数                     | 14              |
| 尺寸                         | 40 * 40mm       |
| 输出接口                     | I2C             |
| I2C 地址（可选）             | 0x70（默认）    |

## 应用

- 工业控制指示器
- 数字时钟、温度计、计数器、万用表
- 仪器显示
- 其他消费类应用
- LED 显示屏

## 引脚图

<!-- ![](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/img/pinout.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/img/pinout.jpg" alt="pir" width={600} height="auto" /></p>

以下是关于 I2C 地址的表格。

| A2 | A1 | A0 | I2C 地址 |
|----|----|----|----------|
| 0  | 0  | 0  | 0x70     |
| 0  | 0  | 1  | 0x71     |
| 0  | 1  | 0  | 0x72     |
| 0  | 1  | 1  | 0x73     |
| 1  | 0  | 0  | 0x74     |
| 1  | 0  | 1  | 0x75     |
| 1  | 1  | 0  | 0x76     |
| 1  | 1  | 1  | 0x77     |

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

| Seeeduino V4.2 | Base Shield |Grove - 0.54" 红色双字母数字显示屏|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/img/front-s.png" alt="pir" width={600} height="auto" /></p>
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-0-54-Red-Dual-Alphanumeric-Display-p-4031.html)|

>此外，您可以考虑我们的新款 [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)，它相当于 Seeeduino V4.2 和 Base Shield 的组合。

:::note
    **1** 请轻轻插入 USB 数据线，否则可能会损坏接口。请使用内部有 4 根线的 USB 数据线，2 根线的 USB 数据线无法传输数据。如果您不确定手头的数据线，可以点击 [这里](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) 购买。

    **2** 每个 Grove 模块在购买时都会附带一根 Grove 数据线。如果您丢失了 Grove 数据线，可以点击 [这里](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 购买。
:::

#### 硬件连接

- **步骤 1.** 将 Grove - 0.54" 红色双字母数字显示屏连接到 Base Shield 的 **I2C** 端口。

- **步骤 2.** 将 Grove - Base Shield 插入 Seeeduino。

- **步骤 3.** 使用 USB 数据线将 Seeeduino 连接到 PC。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/img/wiki_connect.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/img/wiki_connect.png" alt="pir" width={600} height="auto" /></p>

:::note
    如果没有 Grove Base Shield，我们也可以直接将 Grove - 0.54" 红色双字母数字显示屏连接到 Seeeduino，如下所示。
:::

| Seeeduino       | Grove - 0.54" 红色双字母数字显示屏 |
|---------------|-------------------------|
| 5V            | 红色                   |
| GND           | 黑色                   |
| SDA           | 白色                   |
| SCL           | 黄色                   |

#### 软件

:::note
        如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

**1. 使用 display_basic 入门**

- **步骤 1.** 从 Github 下载 [Grove - 0.54" 红色双字母数字显示屏库](https://github.com/Seeed-Studio/Seeed_Alphanumeric_Display_HT16K33)。
- **步骤 2.** 参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library) 为 Arduino 安装库。
- **步骤 3.** 打开 **Arduino IDE -> 文件 -> 示例 -> Seeed_Alphanumeric_Display_HT16K33 -> display_basic**。
- **步骤 4.** 取消注释 **tube.setTubeType(TYPE_2,TYPE_2_DEFAULT_I2C_ADDR)**，如下所示，您需要为所有其他示例取消注释此行。

```
// 如果使用四位数码管，请使用以下配置。
// tube.setTubeType(TYPE_4,TYPE_4_DEFAULT_I2C_ADDR);

// 如果使用两位数码管，请使用以下配置。
tube.setTubeType(TYPE_2,TYPE_2_DEFAULT_I2C_ADDR);
```

- **步骤 5.** 将示例代码上传到 Arduino。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。
- **步骤 4.** 您可以看到 LED 按以下顺序循环显示：12 -> 4567 -> AB -> abcd。

**2. 其他示例**

- **display_custom:** 显示单个字符和点。
- **display_scroll_string:** 显示长度大于 2 的滚动字符串。
- **display_scroll_number:** 显示大于 99 的滚动数字。
- **number_increment:** 显示递增数字。
- **combine_two_displays:** 您可以连接两个 Grove - 0.54" 红色四位字母数字显示器或 Grove - 0.54" 红色双位字母数字显示器，或者同时连接 Grove - 0.54" 红色双位字母数字显示器和 Grove - 0.54" 红色四位字母数字显示器。

如果您使用两个 Grove - 0.54" 红色双位字母数字显示器，请修改代码如下：

```
#define I2C_ADDR_AFTER_CHANGE_FOUR  0x75     // Grove - 0.54" 红色双位字母数字显示器修改后的 I2C 地址
#define I2C_ADDR_DEFAULT_FOUR       0x70     // Grove - 0.54" 红色双位字母数字显示器默认 I2C 地址

tube1.setTubeType(TYPE_2,I2C_ADDR_AFTER_CHANGE_FOUR);
tube2.setTubeType(TYPE_2,I2C_ADDR_DEFAULT_FOUR);
```

如果您同时使用 Grove - 0.54" 红色双位字母数字显示器和 Grove - 0.54" 红色四位字母数字显示器，请修改代码如下：

```
#define I2C_ADDR_AFTER_CHANGE_FOUR  0x70     // Grove - 0.54" 红色双位字母数字显示器修改后的 I2C 地址
#define I2C_ADDR_DEFAULT_FOUR       0x71     // Grove - 0.54" 红色四位字母数字显示器默认 I2C 地址

tube1.setTubeType(TYPE_2,I2C_ADDR_AFTER_CHANGE_FOUR);
tube2.setTubeType(TYPE_4,I2C_ADDR_DEFAULT_FOUR);
```

:::warning
    如果您连接了两个模块，由于 Arduino 的供电限制，红色数码管可能会稍微变暗。
:::

**3. API**

- **Init(NUMERIC_I2C_ADDR):** 使用 I2C 地址初始化设备，Grove - 0.54" 红色四位字母数字显示器的默认 I2C 地址为 0x71。
- **setBrightness(15):** 设置亮度，范围为 0-15，亮度越高，功耗越大。
- **setBlinkRate(BLINK_OFF):** 设置闪烁间隔，可以设置为 BLINK_OFF/BLINK_2HZ/BLINK_1HZ。
- **displayNum(1234567,500):** 显示数字，有两个参数。第一个参数是数字，第二个参数是滚动间隔（毫秒）。如果数字小于 100，数码管显示静态数字；否则，显示滚动数字。滚动间隔（毫秒）仅在滚动模式下有效，您可以将间隔设置为 0。
- **displayString("ABCDEFGHJIYZ",500):** 显示字符，有两个参数。第一个参数是字符，第二个参数是滚动间隔（毫秒）。如果字符少于 2 个字符，数码管显示静态字符；否则，显示滚动字符。滚动间隔（毫秒）仅在滚动模式下有效，您可以将间隔设置为 0。此函数不支持小写字母，小写字母将显示为大写字母。
- **setTubeSingleChar(FIRST_TUBE,'t'):** 在特定数码管上设置单个字符。
- **tube.setPoint(true,false):** 设置两个点的开关状态。此示例将第一个点设置为开，第二个点设置为关。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/res/Grove-0.54-Red-Dual-Alphanumeric-Display.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

- **[ZIP]** [Grove - 0.54" 红色双字母数字显示屏原理图文件](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/res/Grove-0.54-Red-Dual-Alphanumeric-Display.zip)
- **[PDF]** [LED模块数据手册](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/res/DIP-LED-2-BETY-14-SEG.pdf)
- **[PDF]** [HT16K33 数据手册](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/res/HT16K33.pdf)
- **[Library]** [Grove - 0.54" 红色双字母数字显示屏库](https://github.com/Seeed-Studio/Seeed_Alphanumeric_Display_HT16K33)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时获得最佳体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>