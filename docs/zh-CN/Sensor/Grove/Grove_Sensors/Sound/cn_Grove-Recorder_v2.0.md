---
description: Grove - 录音机 v2.0
title: Grove - 录音机 v2.0
keywords:
  - Grove Grove_Sensors Sound
image: https://wiki.seeedstudio.com/cn/Grove-Loudness_Sensor/
slug: /cn/Grove-Recorder_v2.0
last_update:
  date: 01/20/2023
  author: jianjing huang
---


![](https://files.seeedstudio.com/wiki/Grove-Recorder_v2.0/img/Grove-Recorder_V2.0.jpg)
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Recorder-v2-0-p-4552.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border="0" /></a></p>

Grove - 录音机 v2.0 是一款功能丰富的升级版录音机。它可以录制 8-20 秒<sup>\[1\]</sup>的高质量自然音频。此外，它还具有音量控制和播放功能。配合 Seeeduino 或 Arduino 开发板等 MCU，您可以通过用户友好的界面快速制作各种应用原型。

<sup>[1]</sup>录音时间可以定制（如果您需要），通过更换不同的电阻来实现，具体方法将在后续章节中描述。

版本追踪
---------------

| 产品版本 | 发布日期 | 支持状态     | 备注 |
|----------|----------|--------------|------|
| V1.0     | 2014年4月 | 支持          |  -    |
| V2.0     | 2015年10月 | 主流支持 | <ol><li>添加扬声器音量控制器。</li><li>添加 NS8002 放大器以增强功率。</li><li>添加录音引脚开关用于切换录音引脚。</li></ol>|

特性
--------

- 易于使用，具有音量控制、录音、播放功能和 Grove 接口。
- 易于与 MCU 编程，适用于多种应用。
- 自动断电模式、可变录音和播放时长、非易失性存储。
- 低功耗。
- 配备扬声器（8Ω/2W）。

:::tip
有关 Grove 模块的更多详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

应用创意
-----------------

- 玩具。
- 报警器。
- 需要短时回声的应用。

规格参数
--------------

| 参数                   | 值                                                                                                         |
|-----------------------------|---------------------------------------------------------------------------------------------------------------|
| 工作电压           | 3.3~5.0V(DC)                                                                                                  |
| 纹波（最大功率时）        | ≤ 50mV                                                                                                        |
| 录音时长（默认） | 12 秒（最大值）<sup>\[2\]</sup>。                                                                        |
| 播放时长（默认）  | 12 秒（最大值）。                                                                        |
| 采样率                 | 53 kHz                                                                                                        |
| 芯片                        | ISD1820PY（[数据手册](https://files.seeedstudio.com/wiki/Grove-Recorder_v2.0/res/ISD_1800_Specifications.pdf)）、NS8002（音量放大器） |

支持平台
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
上述提到的支持平台表示该模块的软件或理论兼容性。在大多数情况下，我们只为 Arduino 平台提供软件库或代码示例。无法为所有可能的 MCU 平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

<sup>[2]</sup>您可以更换如下所示的电阻来改变录音时长。

![](https://files.seeedstudio.com/wiki/Grove-Recorder_v2.0/img/Grove-Recorder_V2.0_back_view_600.jpg)

*红色矩形标记区域*

:::note
当录音时长改变时，播放时长也会相应改变。不同类型的电阻会导致不同的录音时长，如下表所示。
:::

| ROSC             | 时长 | 采样频率 | 输入带宽 |
|------------------|----------|--------------------|-----------------|
| 80 KΩ            | 8 秒   | 8.0 KHz            | 3.4 KHz         |
| 100 KΩ（默认） | 10 秒  | 6.4 KHz            | 2.6 KHz         |
| 120 KΩ           | 12 秒  | 5.3 KHz            | 2.3 KHz         |
| 160 KΩ           | 16 秒  | 4.0 KHz            | 1.7 KHz         |
| 200 KΩ           | 20 秒  | 3.2 KHz            | 1.3 KHz         |

硬件概述
-----------------

![](https://files.seeedstudio.com/wiki/Grove-Recorder_v2.0/img/Grove-Recorder_Hardware_View_wiki_s.jpg)

**Grove 接口**

连接主控板（如 Seeeduino_v4.2 板）与 Grove - Recorder。

**扬声器接口**

连接 Grove - Recorder 与扬声器。

**录音轴**

开始录音。

**音量控制接口**

控制扬声器音量。

**MIC**

用于录音的麦克风。

**IDS 1820PY**

微控制器。

**运行指示灯**

录音时亮起。停止录音或录音时间超过录音持续时间时熄灭。

**录音引脚开关**

您可以切换录音引脚的开/关状态，从而禁用或启用 MCU 控制的录音。

**Grove 线缆**

连接主控板与驱动板。

**扬声器**

### **零件清单**

| 零件名称            | 数量 |
|-----------------------|----------|
| Grove - Recorder v2.0 | 1 个     |
| Grove 线缆            | 1 个     |
| 扬声器               | 1 个     |

开始使用
-----------

### **所需材料**

- Seeeduino_v4.2 x 1
- Grove - Button x 1
- Grove 线缆 x 1

### **准备工作**

参考以下指南构建合适的 IDE：

:::note
    在本例中我们使用了 Seeeduino。
:::

- Windows 入门指南

- Mac OS X 入门指南

### **硬件连接**

![](https://files.seeedstudio.com/wiki/Grove-Recorder_v2.0/img/Grove-Recorder_Hardware_connection_s.jpg)

- 按照上图连接所有模块。
  - Grove - Button > **D2**
  - Grove - Recorder > **D7**

### **软件工作**

测试代码如下，复制到您的 Arduino IDE 中，然后点击上传（CTRL+U）将代码上传到您的 Arduino。

```
// demo for Grove - Recorder
 
const int pinButton = 2;
const int pinRec    = 7;
 
 
void setup()
{
    pinMode(pinButton, INPUT);
    pinMode(pinRec, OUTPUT);
}
 
void loop()
{
    if(digitalRead(pinButton))      // button pressed
    {
        digitalWrite(pinRec, HIGH);
        delay(200);
        digitalWrite(pinRec, LOW);
        while(digitalRead(pinButton));  // until button release
    }
 
    delay(10);
}
```

### 测试

- 连接工作和软件工作完成后，按下录音轴 Rec 开始录音。
- 然后按下 Grove - Button 上的按钮进行回放。
- 您也可以使用十字螺丝刀调节音量。

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Recorder_v2.0/res/Grove-Recorder_v2.0_Schematic_Eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

资源
---------

- [Eagle](https://files.seeedstudio.com/wiki/Grove-Recorder_v2.0/res/Grove-Recorder_v2.0_Schematic_Eagle_file.zip) 格式的原理图文件
- [PDF](https://files.seeedstudio.com/wiki/Grove-Recorder_v2.0/res/Grove-Recorder_v2.0_Schematic_PDF_file.zip) 格式的原理图文件

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Recorder_v2.0 -->

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