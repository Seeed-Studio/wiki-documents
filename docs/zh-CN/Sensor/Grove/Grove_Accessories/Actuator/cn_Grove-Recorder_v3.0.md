---
title: Grove - 录音器 V3
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-Recorder_v3.0/
slug: /cn/Grove-Recorder_v3.0
last_update:
  date: 01/09/2022
  author: gunengyu
---

![输入图片描述](https://files.seeedstudio.com/wiki/Grove_Recorder_V3/img/cover.jpg)

这是最新版本的 Grove 录音器，也是迄今为止最好的版本。与之前的版本相比，有一些更新值得我们提及。

第一个变化是 MCU。在 V3.0 中，MCU 从 ISD1820PY 升级为 ISD9160FI，这比旧版本更强大。为什么更强大？结合新增的 2Mbytes 闪存，它允许您录制长达 83 秒的音频，比之前的 12 秒录音时间长得多。

其次，如果您曾使用过之前的版本，您会知道如果想回放录制的内容，需要按连接到 Grove 按钮的另一个按钮。在 V3.0 中，我们将录音按钮和回放按钮集成到一个按钮中。按住按钮 2 秒开始录音，快速按下按钮即可回放录制的内容。

## V3 的新功能

* MCU 从 ISD1820PY 升级为 ISD9160FI
* 录音和回放按钮
* 录音开关
* 2Mbytes 闪存

## 特性

* 超长录音时间，最长可达 83 秒
* 内置操作按钮
* 内置 LED 指示灯
* 独立使用或由 MCU 控制
* 内置麦克风

:::tip
    更多关于 Grove 模块的详细信息，请参考 [Grove 系统](https://wiki.seeedstudio.com/cn/Grove_System/)
:::

## 平台支持

|Arduino|Wio|BeagleBone|Raspberry Pi|LinkIt|
|---------|-----|-----|------|------|
|![输入图片描述](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/arduino_logo.jpg)|![输入图片描述](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/wio_logo.jpg)|![输入图片描述](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/bbg_logo.jpg)|![输入图片描述](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/raspberry_pi_logo.jpg)|![输入图片描述](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/linkit_logo.jpg)|

## 规格

* 工作电压：3.3/5V
* 工作电流 (@5V, 25℃)
  * 待机：25-30mA
  * 录音：29-35mA
  * 播放：110-150mA
* 工作电流 (@3.3V, 25℃)
  * 待机：23-25mA
  * 录音：25-30mA
  * 播放：70-150mA
* 工作温度：0~85℃
* 尺寸：40x20mm
* 重量：31.5g

## 硬件概览

![输入图片描述](https://files.seeedstudio.com/wiki/Grove_Recorder_V3/img/hw.png)

1. 扬声器连接器 - JST2.0

2. 麦克风

3. 语音控制

4. 按钮

* 短按并释放：播放
* 长按：开始录音，直到释放按钮

5. LED 指示灯

* 红色 LED，按下按钮时亮起

6. Grove 连接器

7. REC 开关

* 如果您希望通过软件控制模块录音，请将开关拨到 ON

8. MCU

## 入门指南

这里我们将通过一个简单的演示向您展示 Grove - 录音器 V3.0 的工作方式。首先，您需要准备以下物品：

| Seeeduino V4 | Grove - 录音器 | 基础扩展板 |
|--------------|----------------------|-----------------|
|![输入图片描述](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![输入图片描述](https://files.seeedstudio.com/wiki/Grove_Recorder_V3/img/stuff.jpg)|![输入图片描述](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com)|[立即购买](https://www.seeedstudio.com/Grove-Universal-4-Pin-20cm-Unbuckled-Cable-%285-PCs-Pack%29-p-749.html)|

### 硬件连接
得益于 Grove 系列模块的优势，您无需进行焊接或使用面包板，您需要做的只是将模块连接到基础扩展板的正确端口。在这个演示中，我们将 Grove - 录音器连接到 D2。

![输入图片描述](https://files.seeedstudio.com/wiki/Grove_Recorder_V3/img/connection.jpeg)

## 独立使用

该模块可以独立使用，无需编程。

* **录音** - 按住按钮直到 LED 灯亮，开始录音，录音完成后松开按钮。
* **播放** - 按下并松开按钮播放已录制的语音。

如果您希望通过代码控制模块，请继续阅读。

## 软件

将以下代码复制并粘贴到 Arduino IDE 中，然后上传到您的 Seeeduino V4。代码上传到 Arduino 后，打开串口监视器。

```
/* Grove - 录音模块测试代码
+--------------------------------------------------------------------+
|   打开串口监视器并输入命令以控制模块：
|   r - 开始录音
|   s - 停止录音
|   p - 播放
+-------------------------------------------------------------------*/

const int pinRec  = 3;
const int pinPlay = 2;

void setup() 
{
    Serial.begin(115200);
    Serial.println("Grove - 录音模块 V3.0 测试代码");
    Serial.println("命令: \r\nr: 录音\r\ns: 停止录音\r\np: 播放");
    
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
        if(c == 'r')            // 开始录音
        {
            digitalWrite(pinRec, LOW);
            Serial.println("开始录音...");
        }
        else if(c == 's')       // 停止录音
        {
            digitalWrite(pinRec, HIGH);
            Serial.println("停止录音...");
        }
        else if(c == 'p')       // 播放
        {
            digitalWrite(pinPlay, LOW);
            delay(100);
            digitalWrite(pinPlay, HIGH);
            Serial.println("播放...");
        }
    }
}
```

## 输入命令

您可以在串口监视器中输入以下命令：

* **开始录音** - 输入 'r'
* **停止录音** - 输入 's'
* **播放** - 输入 'p'

### 使用 Codecraft 编程

#### 硬件

**步骤 1.** 将 Grove - 录音模块连接到 Base Shield 的 D2 端口。

**步骤 2.** 将 Base Shield 插入您的 Seeeduino/Arduino。

**步骤 3.** 使用 USB 数据线将 Seeeduino/Arduino 连接到您的电脑。

#### 软件

**步骤 1.** 打开 [Codecraft](https://ide.chmakered.com/)，添加 Arduino 支持，并将主程序拖到工作区。

:::note
    如果这是您第一次使用 Codecraft，请参阅 [Codecraft 使用 Arduino 指南](https://wiki.seeedstudio.com/cn/Guide_for_Codecraft_using_Arduino/)。
:::
**步骤 2.** 按下图拖动模块或打开页面底部提供的 cdc 文件。

![cc](https://files.seeedstudio.com/wiki/Grove_Recorder/img/cc_Recorder.png)

将程序上传到您的 Arduino/Seeeduino。

:::tip
    当代码上传完成后，您可以通过串口监视器使用录音模块进行录音和播放。
:::

## 在线原理图查看器

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Recorder_V3/res/eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 资源

* [PDF格式原理图](https://files.seeedstudio.com/wiki/Grove_Recorder_V3/res/Grove%20-%20Recorder%20v3.0a.pdf)
* [Eagle格式原理图](https://files.seeedstudio.com/wiki/Grove_Recorder_V3/res/eagle.zip)
* [Codecraft CDC 文件](https://files.seeedstudio.com/wiki/Grove_Recorder/res/Grove_Recorder_CDC_File.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时拥有流畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>