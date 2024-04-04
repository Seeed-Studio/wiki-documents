---
title: Grove - 录音机V3
description: Grove - 录音机V3
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-Recorder_v3.0/
slug: /cn/Grove-Recorder_v3.0
last_update:
  date: 03/21/2024
  author: WuFeifei
---

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Recorder_V3/img/cover.jpg)

这是Grove-recorder的最新版本，也是最佳版本。与之前的版本相比，我们有一些更新想要提及。

第一个变化是微控制器（MCU）。在V3.0版本中，MCU从之前的ISD1820PY升级到了ISD9160FI，功能更加强大。那么它是如何变得更强大的呢？配合新增的2M字节闪存，现在您可以录制长达83秒的内容，这比之前的12秒录制时间长得多。

其次，如果您曾经使用过之前的版本，您会知道，如果想要播放录制的内容，您需要按下另一个与Grove按钮分开连接的按钮。在V3.0版本中，我们将录音按钮和播放按钮整合到了一个按钮上。长按该按钮2秒，它开始录音；快速按下该按钮，它会播放已录制的内容。

## V3版本的新特性

* 微控制器（MCU）从ISD1820PY升级到ISD 9160FI
* 录音和播放按钮合二为一
* 录音开关
* 2M字节闪存

## 特点

* 录音时间极长，长达83秒
* 内置操作按钮
* 内置LED指示灯
* 可独立使用或受微控制器控制
* 内置麦克风

:::提示
    更多关于Grove模块的信息，请参考[Grove系统](https://yiyan.baidu.com/请在此处提供“Grove系统”的链接或进一步信息)
:::

## 支持的平台

|Arduino|Wio|BeagleBone|Raspberry Pi|LinkIt|
|---------|-----|-----|------|------|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/arduino_logo.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/wio_logo.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/bbg_logo.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/raspberry_pi_logo.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/linkit_logo.jpg)|

## 规格

* 工作电压：3.3/5V
* 工作电流（@5V，25℃）
  * 待机：25-30mA
  * 录音：29-35mA
  * 播放：110-150mA
* 工作电流（@3.3V，25℃）
  * 待机：23-25mA
  * 录音：25-30mA
  * 播放：70-150mA
* 工作温度：0~85℃
* 尺寸：40x20mm
* 重量：31.5g

## 硬件概述

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Recorder_V3/img/hw.png)

1.扬声器连接器 - JST2.0

2.麦克风

3.语音控制

4.按钮

* 短按并释放：播放
* 长按：开始录音，直到释放按钮

5.LED指示灯

* 红色LED，当按下按钮时亮起

6.Grove连接器

7.录音开关

* 如果你想通过软件控制模块进行录音，请将开关切换至ON

8.微控制器（MCU）

## 入门指南

这里我们将通过一个简单的演示向您展示Grove - Recorder V3.0是如何工作的。首先，您需要准备以下物品：

| Seeeduino V4 | Grove - 录音机 | 基础扩展板 |
|--------------|----------------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Recorder_V3/img/stuff.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com)|[立即获取](https://www.seeedstudio.com/Grove-Universal-4-Pin-20cm-Unbuckled-Cable-%285-PCs-Pack%29-p-749.html)|

### 硬件连接

得益于Grove系列模块的优点，您无需进行焊接或使用面包板，您只需要将模块连接到Base Shield的相应端口即可。对于本演示，我们将Grove - Recorder连接到D2端口。

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Recorder_V3/img/connection.jpeg)

## 独立工作

此模块无需编程即可独立工作。

* **录音** - 按下按钮直到LED亮起，此时开始录音，录音完成后释放按钮。
* **播放** - 短按并释放按钮以播放已录制的语音。

如果您想通过代码控制该模块，请继续往下阅读。

## 软件

将以下代码复制到您的Arduino IDE中，并上传到您的Seeeduino V4。将代码上传到Arduino后，打开串行监视器。

```
/* Grove - Recorder Test Code
+--------------------------------------------------------------------+
|   Open Serial Monitor and input command to control the module:
|   r - start recording
|   s - stop recording
|   p - play
+-------------------------------------------------------------------*/

const int pinRec  = 3;
const int pinPlay = 2;

void setup() 
{
    Serial.begin(115200);
    Serial.println("Grove - Recorder V3.0 Test Code");
    Serial.println("cmd: \r\nr: record\r\ns: stop recording\r\np: play");
    
    pinMode(pinRec, OUTPUT);
    pinMode(pinPlay, OUTPUT);
    digitalWrite(pinRec, HIGH);
    digitalWrite(pinPlay, HIGH);
}

void loop() 
{
    if(Serial.available())
    {
        char c = Serial.read();
        if(c == 'r')            // begin to record
        {
            digitalWrite(pinRec, LOW);
            Serial.println("start recording...");
        }
        else if(c == 's')       // stop recording
        {
            digitalWrite(pinRec, HIGH);
            Serial.println("stop recording...");
        }
        else if(c == 'p')       // play
        {
            digitalWrite(pinPlay, LOW);
            delay(100);
            digitalWrite(pinPlay, HIGH);
            Serial.println("play...");
        }
    }
}
```

## 输入命令

您可以在串行监视器中输入一些命令：

* **开始录音** - 输入 'r'
* **停止录音** - 输入 's'
* **播放** - 输入 'p'

### 玩转 Codecraft

#### 硬件

**步骤 1.** 将一个Grove - Recorder连接到Base Shield的D2端口。

**步骤 2.** 将Base Shield插入您的Seeeduino/Arduino。

**步骤 3.** 通过USB电缆将Seeeduino/Arduino连接到您的电脑。

#### 软件

**步骤 1.** 打开[Codecraft](https://ide.chmakered.com/)，添加Arduino支持，并将一个主程序拖放到工作区域。

:::注意
    如果您是第一次使用Codecraft，请也参考[使用Arduino的Codecraft指南](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/)。
:::
**步骤 2.** 按照以下图片拖放代码块，或者打开可以在本页面底部下载的cdc文件。

![cc](https://files.seeedstudio.com/wiki/Grove_Recorder/img/cc_Recorder.png)

将程序上传到您的Arduino/Seeeduino。

:::提示
    当代码上传完成后，您可以使用Recorder（录音器）通过串行监视器进行录音和播放。
:::

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Recorder_V3/res/eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>
## 资源

* [PDF格式的原理图](https://files.seeedstudio.com/wiki/Grove_Recorder_V3/res/Grove - Recorder v3.0a.pdf)
* [Eagle格式的原理图](https://files.seeedstudio.com/wiki/Grove_Recorder_V3/res/eagle.zip)
* [Codecraft CDC 文件](https://files.seeedstudio.com/wiki/Grove_Recorder/res/Grove_Recorder_CDC_File.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们为您提供各种支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
