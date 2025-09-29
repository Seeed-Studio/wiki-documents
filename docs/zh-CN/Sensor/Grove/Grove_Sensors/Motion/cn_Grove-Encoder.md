---
description: Grove-编码器
title: Grove-编码器
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove-Encoder
last_update:
  date: 1/7/2023
  author: shuxu hu
---
<!-- 
![](https://files.seeedstudio.com/wiki/Grove-Encoder/img/encoder.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Encoder/img/encoder.jpg" alt="pir" width={600} height="auto" /></p>



该模块是一个增量式旋转编码器。它对轴的旋转信号进行编码，并通过电子脉冲输出信号。Grove – 编码器是 Grove 系列产品之一，具有标准的 Grove 接口。
当您需要为项目添加旋转旋钮时，例如扬声器的音量旋钮、选择面板或数字输入，这将是您的首选。

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Encoder-p-1352.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Encoder-p-1352.html)

## 特性

*   增量式编码器。
*   Grove 接口。
*   360 度旋转。

## 规格参数

| 项目 | 最小值 | 典型值 | 最大值 | 单位 |
|--|--|--|--|--|
| 电压 | 4.5 | 5 | 5.5 | V |
| 电流 | 10 | 20 | 30 | mA |
| 尺寸 | |20x 20 | |mm |
| 净重 || 12 || g |


## 支持的平台

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|
:::caution
    上述提到的支持平台是/是该模块软件或理论兼容性的指示。在大多数情况下，我们只为 Arduino 平台提供软件库或代码示例。不可能为所有可能的 MCU 平台提供软件库/演示代码。因此，用户必须编写自己的软件库。
:::

## 开始使用

:::note
    如果这是您第一次使用Arduino，我们强烈建议您在开始之前先查看[Arduino入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::
### 与Arduino一起使用

#### 硬件

- **步骤1.** 准备以下物品：

| Seeeduino V4.2 | Base Shield|  Grove - 环形LED | Grove - 编码器|
|--------------|-------------|-----------------|----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Encoder/img/Grove%20Circular%20LED._Sjpg.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Encoder/img/Grove%20Encoder.jpg" alt="pir" width={600} height="auto" /></p>|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-Circular-LED-p-1353.html)|[立即购买](https://www.seeedstudio.com/Grove-Encoder-p-1352.html)|

- **步骤2.** 将Grove-编码器连接到Grove-Base Shield的D2端口。
- **步骤3.** 将Grove-环形LED连接到Grove-Base Shield的D5端口。
- **步骤4.** 将Grove-Base Shield插入Seeeduino。
- **步骤5.** 通过USB线将Seeeduino连接到PC。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Encoder/img/ardu_connection.JPG) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Encoder/img/ardu_connection.JPG" alt="pir" width={600} height="auto" /></p>

:::note
	如果我们没有Grove Base Shield，我们也可以直接将Grove-编码器和Grove-环形LED连接到Seeeduino，如下所示。
:::
| Seeeduino       | Grove-编码器  |
|---------------|-------------------------|
| 5V           | 红色                     |
| GND           | 黑色                   |
| D3           | 白色                   |
| D2            | 黄色                  |


| Seeeduino       | Grove-环形LED  |
|---------------|-------------------------|
| 5V           | 红色                     |
| GND           | 黑色                   |
| D6           | 白色                   |
| D5           | 黄色                  |

:::note
    如果您想将Grove-编码器更改为其他端口，请在Encoder.cpp中更改digitalRead(2)和digitalRead(3)。
:::
#### 软件

- **步骤1.** 从Github下载[编码器库](https://files.seeedstudio.com/wiki/Grove-Encoder/res/Encoder.zip)、[环形LED库](https://files.seeedstudio.com/wiki/Grove-Encoder/res/CircularLED.zip)、[TimerOne库](https://files.seeedstudio.com/wiki/Grove-Encoder/res/TimerOne.zip)。
- **步骤2.** 参考[如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library)为Arduino安装库。
- **步骤3.** 将代码复制到Arduino IDE中并上传。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

```cpp
#include <CircularLED.h>
#include <Encoder.h>
#include <TimerOne.h>
CircularLED circularLED(6,5);

unsigned int LED[24];
int index_LED;
void setup()
{
  encoder.Timer_init();
}
void loop()
{
    if (encoder.rotate_flag ==1)
  {
    if (encoder.direct==1)
    {
      index_LED++;
      if (index_LED>23)
      index_LED=24;
      SenttocircularBar(index_LED);
    }
     else
     {
      index_LED--;
      if(index_LED<0)
      index_LED=0;
      SenttocircularBar(index_LED);
     }
    encoder.rotate_flag =0;
  }
}
void SenttocircularBar(int index)
{
  for (int i=0;i<24;i++)
  {
    if (i<index)
    {
      LED[i]=0xff;
    }
    else
    LED[i]=0;
  }
  circularLED.CircularLEDWrite(LED);
}

```

- **步骤4.** 灯光将随着编码器的旋转而改变，如下所示。

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Encoder/img/EncoderAndCircular_LED.gif) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Encoder/img/EncoderAndCircular_LED.gif" alt="pir" width={600} height="auto" /></p>

:::note
    当按下时，它能够产生另一个信号。但是由于Grove信号线数量的限制，该模块没有输出此信号。
:::

## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://seeeddoc.github.io/Grove-Encoder/res/Grove-Encoder_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## 资源

- **[Eagle]** [Grove-Encoder Eagle 文件](https://seeeddoc.github.io/Grove-Encoder/res/Grove-Encoder_eagle_files.zip)
- **[库文件]** [TimeOne 库](https://files.seeedstudio.com/wiki/Grove-Encoder/res/TimerOne.zip)
- **[库文件]** [Encoder 库](https://files.seeedstudio.com/wiki/Grove-Encoder/res/Encoder.zip)
- **[库文件]** [CircularLED 库](https://files.seeedstudio.com/wiki/Grove-Encoder/res/CircularLED.zip)
- **[演示]** [Arduino 论坛中的演示](https://arduino.cc/playground/Main/RotaryEncoders)


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