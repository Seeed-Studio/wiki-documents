---
title:  Grove - 语音识别器
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-Speech_Recognizer/
slug: /cn/Grove-Speech_Recognizer
last_update:
  date: 01/06/2022
  author: gunengyu
---

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/img/cover.jpg)

使用语音与周围的事物进行交互始终是物联网应用中最有趣的事情之一，我们希望制作一些更加不同和更酷的东西。最近我们刚刚在Kickstarter上推出了语音控制解决方案"Respeaker"，它成为了爆款产品。然而，并不是每个人都需要Respeaker来构建语音控制项目，有时人们只需要一个简单的解决方案，在这里我们想要介绍第一代grove语音识别器，让您轻松快速地实现智能家居的梦想。

Grove语音识别器专为语音控制应用而设计，如智能家居、智能玩具、语音控制机器人，任何您想要通过语音控制的东西，都值得一试。该板包括一个新唐ISD9160、一个麦克风、1个SPI闪存、1个grove连接器、1个扬声器连接器和1个LED来响应您的语音。

新唐ISD9160是基于Cortex™-M0的(SoC)芯片录音器，它为语音控制应用提供强大且经济的解决方案。ISD9160不是这个grove中唯一令人惊叹的东西。让我们看看麦克风。还记得当您必须直接且近距离地对着语音识别设备说话以确保它能听到您时的不舒适时刻吗？这次不会发生这种情况！grove语音识别器上的麦克风是全向的，这意味着无论用户从前面、后面、左侧还是右侧对着麦克风说话，麦克风都会以相等的增益记录所有信号。

这个语音识别器可以识别22个命令，包括'start'、'stop'、'Play music'等等。每次识别到命令时，它会返回一个值，然后连接到它的扬声器会重复该命令。这个值可以用来控制其他设备，如电机、音乐播放器。我们已经测试了数小时，以确保它具有高识别率和非常低的误触发率。

以下是使用前必须了解的一些注意事项：
唤醒词：Hicell（请将其发音为一个单词）
当它识别到唤醒词时，LED变红，然后您可以说命令词，如果它识别到命令词，LED将变蓝。

:::note
    模块的固件由第三方供应商编写，不是开源的。
:::

## 应用创意

* 物联网
* 智能家居
* 人机界面
* 照明控制
* 传感器集线器
* 机器人

## 特性

* 本地语音识别
* 极低的误触发率
* 扬声器连接器（JST2.0，不包含扬声器）
* 内置麦克风
* 3.3/5V工作电压
* 22个识别条目
* 默认波特率：9600

:::tip
    有关Grove模块的更多详细信息，请参考[Grove系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

**平台支持**

|Arduino|Wio|BeagleBone|Raspberry Pi|LinkIt|
|---------|-----|-----|------|------|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/arduino_logo.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/wio_logo.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/bbg_logo.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/raspberry_pi_logo.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/linkit_logo.jpg)|

## 规格参数

| 项目  | 最小值 |典型值 | 最大值 | 条件 |
|---|-------|-----|--------|-----------|
| 工作电压 |3V     |3.3V |5V |25 ℃|
|工作电流  |25mA   |26.5mA |80mA@播放 |VCC = 3.3V 25℃|
|工作电流  | 25mA | 26.5mA |130mA@播放| VCC = 5V 25℃|
|工作温度| 0℃ |25℃ |85℃ | |
|尺寸 | | 40*20mm  | | |
|重量 | | 5g  | |
|闪存 | | 2Mbytes | |
|麦克风灵敏度 |-43dB | -40dB | -37dB | VCC = 5V 25℃ |
|麦克风信噪比 | 58dB  || | |
|麦克风指向性 | |全向 | | |
|扬声器功率| | |1W |VCC = 5V 25℃|
|处理器内核| |Cortex-M0| | |
|处理器频率 | |32.768MHz|50MHz|VCC = 5V 25℃|

## 硬件概述

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/img/hw.png)

1. Grove 连接器
2. 红色LED - 当识别到"HIcell"时点亮
3. 蓝色LED - 当识别到命令时点亮
4. 扬声器连接器 - 您可以连接扬声器来获得语音反馈
5. 麦克风
6. ISD9160CFI - 控制器

## 命令返回值

| 命令 | 值 |
|-------------|--------|
|打开灯 |1|
|关闭灯 |2|
|播放音乐 |3|
|暂停  |4|
|下一首  |5|
|上一首  |6|
|向上  |7|
|向下 |8|
|打开电视 |9|
|关闭电视 |10|
|升高温度 |11|
|降低温度 |12|
|现在几点 |13|
|开门 |14|
|关门 |15|
|向左 |16|
|向右  |17|
|停止  |18|
|开始 |19|
|模式1 |20|
|模式2 |21|
|开始 |22|

## 入门指南

这里我们将通过一个简单的演示来展示这个Grove - 语音识别器是如何工作的。首先，您需要准备以下物品：

| Seeeduino V4 | Grove - 语音识别器 | Base Shield |
|--------------|----------------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/img/stuff1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Grove-Light-Sensor%28P%29-p-1253.html)|[立即购买](https://www.seeedstudio.com/Grove-Universal-4-Pin-20cm-Unbuckled-Cable-%285-PCs-Pack%29-p-749.html)|

**硬件连接**

得益于Grove系列模块的优势，您无需进行焊接或使用面包板，您只需要将模块连接到Base Shield的正确端口即可。在这个演示中，我们将Grove - 语音识别器连接到D2端口。

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/img/connect.jpeg)

**软件**

复制下面的代码并粘贴到您的Arduino IDE中，然后上传到您的Seeeduino V4。将代码上传到Arduino后，打开串口监视器。

```
#include <SoftwareSerial.h>

#define SOFTSERIAL_RX_PIN  2
#define SOFTSERIAL_TX_PIN  3

SoftwareSerial softSerial(SOFTSERIAL_RX_PIN,SOFTSERIAL_TX_PIN);

const char *voiceBuffer[] =
{
    "Turn on the light",
    "Turn off the light",
    "Play music",
    "Pause",
    "Next",
    "Previous",
    "Up",
    "Down",
    "Turn on the TV",
    "Turn off the TV",
    "Increase temperature",
    "Decrease temperature",
    "What's the time",
    "Open the door",
    "Close the door",
    "Left",
    "Right",
    "Stop",
    "Start",
    "Mode 1",
    "Mode 2",
    "Go",
};

void setup()
{
    Serial.begin(9600);
    softSerial.begin(9600);
    softSerial.listen();
}

void loop()
{
    char cmd;

    if(softSerial.available())
    {
        cmd = softSerial.read();
        Serial.println(voiceBuffer[cmd - 1]);
    }
}

```

**唤醒模块**

当有命令**Hicell**时，模块将被唤醒，然后红色LED将点亮。如果红色LED没有点亮，请重试。

:::note
    红色LED将持续5秒。如果红色LED在命令被识别之前熄灭，您应该再次说**Hicell**。
:::

**命令**

模块唤醒后，您可以说出命令。例如

    "Turn on the TV"
如果蓝色LED点亮（持续约1秒），这意味着命令被正确识别。查看您的串口监视器，命令已打印在上面。

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/img/monitor.png)

### 使用Codecraft编程

#### 硬件

**步骤1.** 将Grove - 语音识别器连接到Base Shield的D2端口。

**步骤2.** 将Base Shield插入您的Seeeduino/Arduino。

**步骤3.** 通过USB线将Seeeduino/Arduino连接到您的PC。

#### 软件

**步骤1.** 打开[Codecraft](https://ide.chmakered.com/)，添加Arduino支持，并将主程序拖到工作区域。

:::note
    如果这是您第一次使用Codecraft，请参阅[使用Arduino的Codecraft指南](https://wiki.seeedstudio.com/cn/Guide_for_Codecraft_using_Arduino/)。
:::

**步骤2.** 按照下图拖拽代码块，或打开可在本页面末尾下载的cdc文件。

![cc](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/img/cc_Speech_Recognizer.PNG)

将程序上传到您的Arduino/Seeeduino。

:::success
    代码上传完成后，说Hicell来唤醒它，当红色LED点亮时您可以说其他命令。
:::

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/res/eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

* [Eagle格式原理图](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/res/eagle.zip)
* [PDF格式原理图](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/res/Grove%20-%20Speech%20Recognizer%20v1.0.pdf)
* [Codecraft CDC文件](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/res/Grove_Speech_Recognizer_CDC_File.zip)

## 可升级为工业级传感器

通过SenseCAP [S2110控制器](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)和[S2100数据记录器](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)，您可以轻松将Grove转换为LoRaWAN®传感器。Seeed不仅帮助您进行原型设计，还为您提供了通过SenseCAP系列强大的[工业传感器](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)扩展项目的可能性。

IP66外壳、蓝牙配置、与全球LoRaWAN®网络的兼容性、内置19Ah电池以及APP的强大支持，使[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device)成为工业应用的最佳选择。该系列包括土壤湿度、空气温湿度、光照强度、CO2、EC传感器以及8合1气象站。为您下一个成功的工业项目尝试最新的SenseCAP S210x。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>

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