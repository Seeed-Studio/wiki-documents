---
description: Grove - 0.54英寸红色双字母数字显示屏
title: Grove - 0.54英寸红色双字母数字显示屏
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-0.54_inch_Red_Dual_Alphanumeric_Display
last_update:
  date: 03/21/2024
  author: WuFeifei
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/img/front.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/img/front.png" alt="pir" width={600} height="auto" /></p>

这个模块是一个具有高亮度和红色背光功能的两位字母数字显示屏，每个数字由14段数码管组成。常用的7段显示屏只能显示数字0-9和有限的几个字母。相比之下，14段数字显示屏则没有这种限制，它可以显示所有字符，这也是我们称之为字母数字显示屏的原因。该数字的高度为0.54英寸，模块中使用的红色LED具有超高亮度，因此您可以在几米外的地方看到它。

通常，14段显示屏需要使用17根或更多的线来控制显示，这意味着您的主控板（如Arduino）将占用大量的IO端口。借助板载的HT16K33芯片和Grove连接器，我们将其制成了一个I2C显示屏，只需四根线就足够了。无需繁琐的焊接和复杂的布线，如果您使用的是[seeeduino](https://www.seeedstudio.com/seeeduino-boards-c-987.html)，那么真的是即插即用，非常简单。

我们已经为Arduino、树莓派、Beaglebone和其他SBC（单板计算机）发布了很多 [显示屏](https://www.seeedstudio.com/displays-c-929.html) 现在我们为你带来了Grove - 0.54红色双字母数字显示屏，14段显示屏意味着更多的可能性和创造性。我们希望它能帮助您创建更多有趣的项目。

如果您只需要一个四位数字母数字显示屏，您可以查看[Grove - 0.54”红色四位数字母数字显示屏](https://www.seeedstudio.com/Grove-0-54-Red-Quad-Alphanumeric-Display-p-4032.html)。



<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-0-54-Red-Dual-Alphanumeric-Display-p-4031.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-0-54-Red-Dual-Alphanumeric-Display-p-4031.html)



## 特点

- 可以显示所有字母和数字
- 超高亮度：30mcd
- Grove I2C接口，仅需占用两个IO引脚
- 内置驱动器，使用简单
- 阴极显示

## 规格

| 参数            | 数值            |
| --------------- | --------------- |
| 供电电压        | 3.3V / 5V       |
| 工作环境温度    | -30°C 至  85°C  |
| LED显示屏型号   | JM-S05422AH-001 |
| LED控制器驱动器 | HT16K33         |
| LED颜色         | 红色            |
| 超高亮度        | 30mcd           |
| LED高度         | 0.54英寸        |
| LED段数         | 14              |
| 尺寸            | 40 * 40mm       |
| 输出接口        | I2C             |
| I2C地址（可选） | 0x70(默认)      |

## 应用领域

- 工业控制指示器
- 数字时钟、温度计、计数器、万用表
- 仪表读数
- 其他消费类应用
- LED显示屏

## 引脚定义

<!-- ![](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/img/pinout.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/img/pinout.jpg" alt="pir" width={600} height="auto" /></p>

以下是关于I2C地址的表格：

| A2   | A1   | A0   | I2C 地址 |
| ---- | ---- | ---- | -------- |
| 0    | 0    | 0    | 0x70     |
| 0    | 0    | 1    | 0x71     |
| 0    | 1    | 0    | 0x72     |
| 0    | 1    | 1    | 0x73     |
| 1    | 0    | 0    | 0x74     |
| 1    | 0    | 1    | 0x75     |
| 1    | 1    | 0    | 0x76     |
| 1    | 1    | 1    | 0x77     |

:::警告
    如果您连接多个显示屏，您需要为每个显示屏单独提供外部VCC和GND，并将SDA、SCL和GND连接到Seeeduino板上。
:::

## 支持的平台

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->

|Arduino|树莓派|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|


## 入门指南

### 玩转 Arduino

**所需材料**


| Seeeduino V4.2 | 基础盾板 |Grove - 0.54" 红色双字母数字显示屏|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/img/front-s.png" alt="pir" width={600} height="auto" /></p>|
|[立即获取](https://ww. seeeds<a href- ”https://ww. seeedstudio. com/Seeduino-V4.2-p-2517. html)|[立即获取](https: //www. seeedstudio. com/Base-Shield-V2-p-1378. html)|[立即获取](https://www.seeedstudio.com/Grove-0-54-Red-Dual-Alphanumeric-Display-p-4031.html)|



>此外，您可以考虑我们新推出的[Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)，它相当于Seeeduino V4.2和基础盾板的组合。

:::注意
    **1** 请轻轻插入USB线，否则可能会损坏端口。请使用内部有4根线的USB线，2根线的电缆无法传输数据。如果您不确定自己手中的线缆是否符合要求，可以点击[此处](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)购买。
    

    **2** 购买每个Grove模块时，都会附带一根Grove线缆。如果您丢失了Grove线缆，可以点击 [此处](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) 进行购买。
:::

#### 硬件连接


- **步骤 1.** 将 Grove - 0.54" 红色双字母数字显示屏连接到 Base Shield 的 **I2C** 端口。

- **步骤 2.** 将 Grove - Base Shield 插入 Seeeduino 中。
- **步骤 3.** 使用 USB 线缆将 Seeeduino 连接到电脑。


<!-- ![](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/img/wiki_connect.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/img/wiki_connect.png" alt="pir" width={600} height="auto" /></p>

:::注意
	如果我们没有 Grove Base Shield，我们也可以直接将 Grove - 0.54" 红色双字母数字显示屏按以下方式连接到 Seeeduino。
:::

| Seeeduino       | Grove - 0.54" 红色双字母数字显示屏 |
|---------------|-------------------------|
| 5V            | 红色                   |
| GND           | 黑色                 |
| SDA           | 白色                 |
| SCL           | 黄色                |

#### 软件

:::注意
        如果您是第一次使用Arduino，我们强烈建议您在开始之前先查看[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::
**1. 开始使用display_basic**


- **步骤 1.** 从Github下载[Grove - 0.54" 红色双字母数字显示屏库](https://github.com/Seeed-Studio/Seeed_Alphanumeric_Display_HT16K33)。
- **步骤 2.** 参考[如何安装库](https://wiki.seeedstudio.com/How_to_install_Arduino_Library)的指南来为Arduino安装库。
- **步骤 3.** 打开**Arduino IDE -> 文件 -> 示例 -> Seeed_Alphanumeric_Display_HT16K33 -> display_basic**
- **步骤 4.** 取消注释**tube.setTubeType(TYPE_2,TYPE_2_DEFAULT_I2C_ADDR)**，如下所示，您也需要为其他所有示例取消注释。

```
    // If using four digital tubes, use this configuration.
    // tube.setTubeType(TYPE_4,TYPE_4_DEFAULT_I2C_ADDR);

    // If using two digital tubes, use this configuration.
     tube.setTubeType(TYPE_2,TYPE_2_DEFAULT_I2C_ADDR);
```

- **步骤 5.** 将示例上传到Arduino。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)。
- **步骤 6.** 您可以看到LED显示屏重复显示12 -> 4567 -> AB -> abcd。

**2. 其他示例**

- **display_custom:** 显示单个字符和点。
- **display_scroll_string:** 显示长度超过2的滚动字符串。
- **display_scroll_number:** 显示大于99的滚动数字。
- **number_increment:** 显示递增的数字。
- **combine_two_displays:** 您可以连接2个Grove - 0.54" 红色四字母数字显示屏或Grove - 0.54" 红色双字母数字显示屏，或者同时使用Grove - 0.54" 红色双字母数字显示屏和Grove - 0.54" 红色四字母数字显示屏。

如果您使用2个Grove - 0.54" 红色双字母数字显示屏，请将代码修改如下：

```
#define I2C_ADDR_AFTER_CHANGE_FOUR  0x75     //Grove - 0.54" Red Dual Alphanumeric Displays Changed I2C address
#define I2C_ADDR_DEFAULT_FOUR       0x70     //Grove - 0.54" Red Dual Alphanumeric Displays Default I2C address


tube1.setTubeType(TYPE_2,I2C_ADDR_AFTER_CHANGE_FOUR);
tube2.setTubeType(TYPE_2,I2C_ADDR_DEFAULT_FOUR);
```

如果您同时使用Grove - 0.54" 红色双字母数字显示屏和Grove - 0.54" 红色四字母数字显示屏，请将代码修改如下：

```
#define I2C_ADDR_AFTER_CHANGE_FOUR  0x70     //Grove - 0.54" Red Dual Alphanumeric Displays Changed I2C address
#define I2C_ADDR_DEFAULT_FOUR       0x71     //Grove - 0.54" Red Qual Alphanumeric Displays Default I2C address


tube1.setTubeType(TYPE_2,I2C_ADDR_AFTER_CHANGE_FOUR);
tube2.setTubeType(TYPE_4,I2C_ADDR_DEFAULT_FOUR);
```

:::警告
    如果您连接了两个模块，由于Arduino的电源供应有限，红色显示屏可能会显得有些暗。
:::
**3. API**

- **Init(NUMERIC_I2C_ADDR):** 使用I2C地址初始化设备，Grove - 0.54" 红色四字母数字显示屏的I2C默认地址是0x71。
- **setBrightness(15):** 设置亮度，范围是0-15，亮度越高，耗电量越大。
- **setBlinkRate(BLINK_OFF):** 设置闪烁的间隔，可以设置为BLINK_OFF/BLINK_2HZ/BLINK_1HZ。
- **displayNum(1234567,500):** 显示数字，有两个参数。第一个参数是数字，第二个参数是滚动间隔（毫秒）。如果数字小于100，则显示屏静态显示数字。否则，它会显示滚动的数字。滚动间隔（毫秒）仅在滚动模式下有效，您可以将其设置为0。
- **displayString("ABCDEFGHJIYZ",500):** 显示字符，有两个参数。第一个参数是字符，第二个参数是滚动间隔（毫秒）。如果字符少于2个字符，则显示屏静态显示字符。否则，它会显示滚动的字符。滚动间隔（毫秒）仅在滚动模式下有效，您可以将其设置为0。此函数不支持小写字母，会按照大写字母的方式显示。
- **setTubeSingleChar(FIRST_TUBE,'t'):** 在特定显示屏上设置单个字符。
- **tube.setPoint(true,false):** 设置两个点的开关状态。此示例将第一个点设置为开启，第二个点设置为关闭。


## 在线原理图查看器


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/res/Grove-0.54-Red-Dual-Alphanumeric-Display.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>




## 资源

- **[ZIP]** [Grove - 0.54"红色双字母数字显示屏电路图文件](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/res/Grove-0.54-Red-Dual-Alphanumeric-Display.zip)
- **[PDF]** [LED 模块数据手册](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/res/DIP-LED-2-BETY-14-SEG.pdf)
- **[PDF]** [HT16K33 数据手册](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/res/HT16K33.pdf)
- **[PDF]** [MPS MP2155 Datasheet](https://files.seeedstudio.com/wiki/Grove-0.54-Red-Dual-Alphanumeric-Display/res/MPS_MP2155%20datasheetpdf.pdf)
- **[Library]** [Grove - 0.54" 红色双字母数字显示屏库](https://github.com/Seeed-Studio/Seeed_Alphanumeric_Display_HT16K33)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供各种支持，以确保您使用我们的产品时能够尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
