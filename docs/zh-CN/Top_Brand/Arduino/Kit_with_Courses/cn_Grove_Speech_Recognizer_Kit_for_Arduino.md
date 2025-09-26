---
description: Grove_Speech_Recognizer_Kit_for_Arduino
title: Grove Speech Recognizer Kit for Arduino
keywords:
- Grove_Speech_Recognizer_Kit_for_Arduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Grove_Speech_Recognizer_Kit_for_Arduino
last_update:
  date: 1/12/2023
  author: Matthew
---

<!-- ---
name: Grove Speech Recognizer Kit for Arduino
category: Arduino
bzurl: https://www.seeedstudio.com/Grove-Speech-Recognizer-kit-for-Arduino-p-2726.html
oldwikiname:  Grove Speech Recognizer Kit for Arduino
prodimagename: LFUUlWtcc3wNmrxDp3yjPy7I.jpg
surveyurl: https://www.research.net/r/Grove_Speech_Recognizer_Kit_for_Arduino
sku:  110020108
--- -->
![](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer_Kit_for_Arduino/img/LFUUlWtcc3wNmrxDp3yjPy7I.jpg)

Grove Speech Recognizer Kit for Arduino 专为智能家居原型设计，包含一些基本的家居元素，如语音识别器、红外发射器。您可以通过此套件快速学习语音识别器的功能和应用，指南展示了一些常见的演示，比如您可以通过语音命令"播放音乐"来播放音乐，或者根据相应的命令打开灯光。

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Speech-Recognizer-kit-for-Arduino-p-2726.html)

## 零件清单

---

1. Grove - Speech Recognizer  SKU:101020232

2. [Grove - MP3 v2.0](/cn/Grove-MP3_v2.0)

3. [Grove – RTC](/cn/Grove-RTC)

4. [Base Shield](/cn/Base_Shield_V2)

5. [Grove - Infrared Receiver](/cn/Grove-Infrared_Receiver)

6. [Grove - Infrared Emitter](/cn/Grove-Infrared_Emitter)

## 应用

---

### 如何打开电视

有时，我们想通过语音控制一些设备，比如电视、空调。这些设备都是通过红外遥控器控制的，所以我们需要首先了解红外遥控器每个按钮的代码，然后将代码放入我们的程序中。最后，您的语音可以触发这些按钮代码，您就可以像红外遥控器一样控制这些设备。

在创建此演示之前，您应该准备一些必要的组件：

* Grove - Infrared Receiver

* Grove - Infrared Emitter

* Grove - Speech Recognizer

* Base Shield

* Arduino UNO

* 红外遥控器

**通过 Grove - Infrared Receiver 获取红外遥控器的代码**

从 github 下载必要的库：[IRSendRev](https://github.com/Seeed-Studio/IRSendRev)，<font color="Red">注意您的库路径：.../arduino/libraries </font>

* 现在打开"recv"的示例文件：File --&gt; Sketchbook --&gt; libraries --&gt; IRSendRev --&gt; recv。
* 将程序上传到您的 Arduino UNO。

* 将 Base Shield 插到 Arduino UNO 上，并将 Grove - Receiver 插到 Base Shield 的 D2 端口。

```
const int pinRecv = 2;
```

您也可以在修改引脚定义时更改另一个端口。

* 打开 Arduino UNO 的监视器。

按下任何红外遥控器的按钮，您将获得该按钮的详细信息代码，如下所示：

![](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer_Kit_for_Arduino/img/IR_Receiver_IR_controller.png)

记下您想要按下的按钮的详细信息。以下是一个按钮的信息：

```
+------------------------------------------------------+
LEN = 9
START_H: 179    START_L: 88
DATA_H: 11    DATA_L: 33

DATA_LEN = 4
DATA: 0x80    0x7E    0x10    0xEF
DATA: 128    126    16    239
+------------------------------------------------------+
```

**修改 IRSend 程序**

现在我们可以使用之前获取的按钮信息代码。

* 打开"send"示例文件：File --> Sketchbook --> libraries --> IRSendRev --> send。

* 将程序上传到您的 Arduino UNO。

* 将 Base Shield 插到 Arduino UNO 上，并将 Grove - Receiver 插到 Base Shield 的 D3 端口。

首先我们需要修改按钮的默认信息：

```
unsigned char dtaSend[20];

void dtaInit()
{
  ............
}
```

根据您之前编写的内容修改这些信息：

```
unsigned char dtaSend[20];

void dtaInit()
{
    dtaSend[BIT_LEN]        = 9;            // 需要发送的所有数据
    dtaSend[BIT_START_H]    = 179;            // 按钮的逻辑高电平持续时间
    dtaSend[BIT_START_L]    = 88;            // 按钮的逻辑低电平持续时间
    dtaSend[BIT_DATA_H]     = 11;            // 通信中逻辑"长"持续时间
    dtaSend[BIT_DATA_L]     = 33;            // 通信中逻辑"短"持续时间

    dtaSend[BIT_DATA_LEN]   = 4;            // 将要发送的数据数量。如果数量不同，您应该增加或减少 dtaSend[BIT_DATA+x]。

    dtaSend[BIT_DATA+0]     = 128;            // 将要发送的数据
    dtaSend[BIT_DATA+1]     = 126;
    dtaSend[BIT_DATA+2]     = 16;
    dtaSend[BIT_DATA+3]     = 239;
    //dtaSend[BIT_DATA+4]     = 192;
    //dtaSend[BIT_DATA+5]     = 63;
}
```

您可以观察到：

```
DATA_LEN = 4
```

所以你可以注释或删除这两行。

```
   //dtaSend[BIT_DATA+4]     = 192;
    //dtaSend[BIT_DATA+5]     = 63;
```

当然，你也可以定义多个按钮：

```
#include <IRSendRev.h>

#define BIT_LEN         0
#define BIT_START_H     1
#define BIT_START_L     2
#define BIT_DATA_H      3
#define BIT_DATA_L      4
#define BIT_DATA_LEN    5
#define BIT_DATA        6

const int ir_freq = 38;

unsigned char OpenTV[20];
unsigned char CloseTV[20];
unsigned char IncreaseTemp[20];
unsigned char DecreaseTemp[20];

void OpenTVInit()
{
    OpenTV[BIT_LEN]        = 11;
    OpenTV[BIT_START_H]    = 179;
    /*............ 省略 ............*/
}

void CloseTVInit()
{
    CloseTV[BIT_LEN]        = 11;
    CloseTV[BIT_START_H]    = 179;
    /*............ 省略 ............*/
}

void IncreaseTempInit()
{
    IncreaseTemp[BIT_LEN]        = 11;
    IncreaseTemp[BIT_START_H]    = 179;
    /*............ 省略 ............*/
}

void DecreaseTempInit()
{
    DecreaseTemp[BIT_LEN]        = 11;
    DecreaseTemp[BIT_START_H]    = 179;
   /*............ 省略 ............*/
}

void setup()
{
    OpenTVInit();
    CloseTVInit();
    IncreaseTempInit();
    DecreaseTempInit();
}

void loop()
{
    IR.Send(OpenTV, 38);
    delay(200);
    IR.Send(CloseTV, 38);
    delay(200);
    IR.Send(IncreaseTemp, 38);
    delay(200);
    IR.Send(DecreaseTemp, 38);

    delay(2000);
}
```

**将语音识别器添加到您的IRSend程序中**

* 单独使用语音识别器非常简单，请先查看其wiki。

我们可以根据表格选择所需的按钮；返回值表格，[Grove - 语音识别器](https://wiki.seeedstudio.com/cn/Seeed_BLE_Shield/)；语音识别器的返回值。以下是返回值表格：

<center>
  <table>
    <tbody>
      <tr>
        <th>命令</th>
        <th>返回值</th>
      </tr>
      <tr>
        <td width="200px">打开灯</td>
        <td width="200px">1</td>
      </tr>
      <tr>
        <td>关闭灯</td>
        <td>2</td>
      </tr>
      <tr>
        <td>播放音乐</td>
        <td>3</td>
      </tr>
      <tr>
        <td>暂停</td>
        <td>4</td>
      </tr>
      <tr>
        <td>下一首</td>
        <td>5</td>
      </tr>
      <tr>
        <td>上一首</td>
        <td>6</td>
      </tr>
      <tr>
        <td>向上</td>
        <td>7</td>
      </tr>
      <tr>
        <td>向下</td>
        <td>8</td>
      </tr>
      <tr>
        <td>打开电视</td>
        <td>9</td>
      </tr>
      <tr>
        <td>关闭电视</td>
        <td>10</td>
      </tr>
      <tr>
        <td>升高温度</td>
        <td>11</td>
      </tr>
      <tr>
        <td>降低温度</td>
        <td>12</td>
      </tr>
      <tr>
        <td>现在几点</td>
        <td>13</td>
      </tr>
      <tr>
        <td>开门</td>
        <td>14</td>
      </tr>
      <tr>
        <td>关门</td>
        <td>15</td>
      </tr>
      <tr>
        <td>左</td>
        <td>16</td>
      </tr>
      <tr>
        <td>右</td>
        <td>17</td>
      </tr>
      <tr>
        <td>停止</td>
        <td>18</td>
      </tr>
      <tr>
        <td>开始</td>
        <td>19</td>
      </tr>
      <tr>
        <td>模式1</td>
        <td>20</td>
      </tr>
      <tr>
        <td>模式2</td>
        <td>21</td>
      </tr>
      <tr>
        <td>开始</td>
        <td>22</td>
      </tr>
    </tbody>
  </table>
</center>

以下示例使用两个命令："打开电视"和"关闭电视"

* 阅读后，我们可以将语音识别器的程序嵌入到IRSend程序中。请参见以下完整程序：

```
#include <IRSendRev.h>
#include <SoftwareSerial.h>

/*========  红外类型 ========*/

#define BIT_LEN         0
#define BIT_START_H     1
#define BIT_START_L     2
#define BIT_DATA_H      3
#define BIT_DATA_L      4
#define BIT_DATA_LEN    5
#define BIT_DATA        6
const int ir_freq = 38;                 // 38k

/* ========  你想要发送多少个红外按钮  ========*/

unsigned char OpenTV[20];
unsigned char CloseTV[20];


/*=========  选择语音识别器的引脚  ==========*/

#define SOFTSERIAL_RX_PIN  5
#define SOFTSERIAL_TX_PIN  6

SoftwareSerial speech(SOFTSERIAL_RX_PIN,SOFTSERIAL_TX_PIN);


/* =======  如何写入红外数据  ========*/
/* ====  你可以通过红外接收器获取这些数据  ==== */

void OpenTVInit()
{
    OpenTV[BIT_LEN]        = 9;            // 需要发送的所有数据
    OpenTV[BIT_START_H]    = 180;            // "OpenTV"的逻辑高电平持续时间
    OpenTV[BIT_START_L]    = 88;            // "OpenTV"的逻辑低电平持续时间
    OpenTV[BIT_DATA_H]     = 11;            // 通信中逻辑"长"持续时间
    OpenTV[BIT_DATA_L]     = 33;            // 通信中逻辑"短"持续时间

    OpenTV[BIT_DATA_LEN]   = 4;            // 将要发送的数据数量。如果数量不同，你应该增加或减少 dtaSend[BIT_DATA+x]。

    OpenTV[BIT_DATA+0]     = 50;            // 将要发送的数据
    OpenTV[BIT_DATA+1]     = 166;
    OpenTV[BIT_DATA+2]     = 80;
    OpenTV[BIT_DATA+3]     = 175;
}

void CloseTVInit()
{
    CloseTV[BIT_LEN]        = 9;            // 需要发送的所有数据
    CloseTV[BIT_START_H]    = 178;            // "CloseTV"的逻辑高电平持续时间
    CloseTV[BIT_START_L]    = 89;            // "CloseTV"的逻辑低电平持续时间
    CloseTV[BIT_DATA_H]     = 10;            // 通信中逻辑"长"持续时间
    CloseTV[BIT_DATA_L]     = 33;            // 通信中逻辑"短"持续时间

    CloseTV[BIT_DATA_LEN]   = 4;            // 将要发送的数据数量。如果数量不同，你应该增加或减少 dtaSend[BIT_DATA+x]。

    CloseTV[BIT_DATA+0]     = 50;            // 将要发送的数据
    CloseTV[BIT_DATA+1]     = 166;
    CloseTV[BIT_DATA+2]     = 168;
    CloseTV[BIT_DATA+3]     = 87;
}


void setup()
{
    OpenTVInit()
    CloseTVInit()
    Serial.begin(9600);
    speech.begin(9600);
    speech.listen();
}

void loop()
{
    int a=0;

    if(speech.available())
    {
        a = speech.read();    // 从语音识别器读取返回值
        switch (a)
        {
            case 9:                     //  如果（返回值）则发送（红外数据）
            IR.Send(OpenTV, 38);
            delay(1000);
            break;
            case 10:
            IR.Send(CloseTV, 38);
            delay(1000);
            break;
            default:
            break;
        }
    }
}
```

### 如何控制音乐

观察语音识别器的命令，有许多与音乐相关的命令，如"播放音乐"、"暂停"、"停止"、"上一首"、"下一首"。所以让我们制作这个语音音乐盒！

从github下载必要的库：
[Grove_Serial_MP3_Player_V2.0](https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player.git);
库，[Grove - MP3 v2.0](/cn/Grove-MP3_v2.0)，<font color="Red">注意你的库的路径：.../arduino/libraries </font>。

**关于Grove - MP3 v2的有用函数**

以下是Grove - MP3的一些有用的基本函数：

```
PlayPause();    // 暂停音乐
PlayResume();   // 重新开始播放音乐
PlayNext();  // 下一首歌
PlayPrevious();  // 上一首歌
PlayLoop();  //  循环播放所有歌曲
SetVolume(uint8_t volume);  // 设置音量。默认值是"0x0E"，范围是0x00到0x1E。
IncreaseVolume();  // 增加音量
DecreaseVolume();  // 减少音量
```

但是有一些特殊功能需要注意：

* SelectPlayerDevice(uint8_t device)。_默认设备值为0x02，选择SD卡作为播放设备。_

```
SelectPlayerDevice(0x02);
```

* SpecifyMusicPlay(uint16_t index). _按名称播放歌曲。_

<dl>
  <dd>注意歌曲的名称，您可以设置如下类型的名称：</dd>
</dl>

![](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer_Kit_for_Arduino/img/Type_of_songs.png)

<dl>
  <dd>因此我们可以通过此函数播放歌曲"005"：</dd>
</dl>

```
SpecifyMusicPlay(5);
```

* SpecifyfolderPlay(uint8_t folder, uint8_t index);   // 在指定文件夹中按名称播放歌曲

<dl>
  <dd>此外，有时我们可能需要在新文件夹中播放音乐，前面的函数就派上用场了。</dd>
</dl>

![](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer_Kit_for_Arduino/img/Form_of_folder.png)

:::note
文件夹索引范围是01-99，所以文件夹的名称只能是01到99之间的任何数字。注意1-9之间的数字，文件夹名称应该添加为01-09。
:::

所以如果我们想要播放文件夹"01"中的"005"，我们可以这样做：

```
SpecifyfolderPlay(1,5);
```

* 其他注意事项：

每首歌曲都有其时长，所以如果你想逐首指定歌曲，有两种方式可以选择：

```
delay(length of time);  // 延时歌曲时长直到歌曲播放完毕

while(QueryPlayStatus() != 0);  //  返回值: 0: 播放完毕;       1:  未播放完毕

```

通常，我们可以使用后者。例如：

```

SpecifyMusicPlay(1);
while(QueryPlayStatus() != 0);
SpecifyMusicPlay(2);
while(QueryPlayStatus() != 0);
SpecifyMusicPlay(3);
while(QueryPlayStatus() != 0);

```

**集成程序**

好的，让我们将语音识别器和Grove - MP3 集成在一起。以下演示可以控制一些 MP3 功能：播放音乐、暂停音乐、继续音乐、下一首歌、上一首歌。

* 复制程序并将其上传到您的 Arduino UNO。

* 将 Base Shield 插到 Arduino UNO 上，并将Grove - MP3 v2 插到 Base Shield 的 D2 端口。

```cpp
# include <SoftwareSerial.h>

# include <MP3Player_KT403A.h>

/****** 定义 MP3 的引脚 ******/
SoftwareSerial mp3(2, 3);

/****** 定义语音识别器的引脚 ******/

# define SOFTSERIAL_RX_PIN  5

# define SOFTSERIAL_TX_PIN  6

SoftwareSerial speech(SOFTSERIAL_RX_PIN,SOFTSERIAL_TX_PIN);

void setup()
{
    mp3.begin(9600);
    speech.begin(9600);
    Serial.begin(9600);
    delay(100);

    SelectPlayerDevice(0x02);       // 选择 SD 卡作为播放设备。
    SetVolume(0x15);                // 设置音量，范围是 0x00 到 0x1E。
}

void loop()
{
    int a=0;
    if(speech.available())
    {
        a = speech.read();   // 从语音识别器读取返回值
        switch (a)
        {
            case 3:      //  语音命令：播放音乐
            SpecifyMusicPlay(1);   // MP3：播放名为 "001" 的音乐
            break;
            case 4:   //  语音命令：暂停
            PlayPause();    // MP3：暂停音乐
            break;
            case 19:   //  语音命令：开始
            PlayResume();  // MP3：继续音乐
            break;
            case 5:   //  语音命令：下一首
            PlayNext();    // MP3：播放下一首歌
            break;
            case 6:   //  语音命令：上一首
            PlayPrevious();  // MP3：播放上一首歌
            break;
            default:
            break;
        }

        delay(1000);
    }
}

```

### 如何广播实时时间

你是否使用过Grove - MP3来广播实时时间？让我们通过语音识别器、Grove - MP3和Grove - RTC来尝试一下。

**调整实时时间**

从github下载必要的库：<font color="Red">[RTC_DS1307](https://github.com/Seeed-Studio/RTC_DS1307);[库，Grove - RTC](/cn/Grove-RTC);，注意你的库的路径：.../arduino/libraries</font>。

* 打开"SetTimeAndDisplay"的示例文件：File --&gt; Sketchbook --&gt; libraries --&gt; RTC_DS1307 --&gt; SetTimeAndDisplay。

* 将Base Shield插到Arduino UNO上，并将Grove - RTC插到Base Shield的I2C接口上。

* 设置RTC的正确时间。

```txt
clock.fillByYMD(2016,1,19);//May 23,2016
clock.fillByHMS(15,28,30);//15:28 30"
clock.fillDayOfWeek(Mon);//Saturday
```

* 将修改后的程序上传到您的 Arduino UNO。

**文本转语音**

众所周知，播报时间时有60个数字（0 ~ 59），我们可以在MP3播报时间之前说一些单词（It's）。所以我们需要在SD卡中添加61个声音文件。

<font color="Red">但是关于SD卡有一些提示您需要注意：</font>

* SD卡格式：FAT32。

* 删除任何歌曲之前先格式化SD卡；添加任何歌曲时无需执行任何操作。

* 播放顺序取决于歌曲在SD卡中的添加顺序。_所以如果我们想按顺序播放一些歌曲，我们需要按顺序将这些歌曲添加到SD卡中。_

顺便说一下，我们已经在一个文件夹中排列了61个声音文件，您可以[下载它](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer_Kit_for_Arduino/res/Sound_file.zip)并将其复制到您的SD卡中。当然，您可能需要先格式化SD卡。

<center>
  <table>
    <tbody>
      <tr>
        <th>声音文件名称</th>
        <th><font color="Red">SD卡中的文件编号</font></th>
        <th>语音文本</th>
      </tr>
      <tr>
        <td width="200px">000</td>
        <td width="200px">第1个</td>
        <td width="200px">0</td>
      </tr>
      <tr>
        <td width="200px">001</td>
        <td width="200px">第2个</td>
        <td width="200px">1</td>
      </tr>
      <tr>
        <td width="200px">...</td>
        <td width="200px">...</td>
        <td width="200px">...</td>
      </tr>
      <tr>
        <td width="200px">059</td>
        <td width="200px">第60个</td>
        <td width="200px">59</td>
      </tr>
      <tr>
        <td width="200px">060</td>
        <td width="200px">第61个</td>
        <td width="200px">It's</td>
      </tr>
    </tbody>
  </table>
</center>

**集成程序并播报实时时间**

* 将Base Shield插到Arduino UNO上；将Grove - MP3 v2插到Base Shield的D2端口；将Grove - 语音识别器插到Base Shield的D5端口；将Grove - RTC插到Base Shield的I2C端口。

* 将以下代码复制到Arduino IDE的新草图中，并将程序上传到Arduino UNO。

* 说"HiCell, What's the time"，MP3将播报实时时间。

```

# include <Wire.h>

# include "DS1307.h"

# include <SoftwareSerial.h>

# include <MP3Player_KT403A.h>

/******* Define the pins of MP3 ******/
SoftwareSerial mp3(2, 3);

/******* Define the pins of Speech Recognizer ******/

# define SOFTSERIAL_RX_PIN  5

# define SOFTSERIAL_TX_PIN  6

SoftwareSerial speech(SOFTSERIAL_RX_PIN,SOFTSERIAL_TX_PIN);

/******* Define a object of DS1307 class ******/
DS1307 clock;//define a object of DS1307 class

void setup ()
{
  mp3.begin(9600);
  speech.begin(9600);
  clock.begin();
  Serial.begin(9600);
  delay(100);

  SelectPlayerDevice(0x02);       // Select SD card as the player device.
  SetVolume(0x15);   // Set the volume, the range is 0x00 to 0x1E.
}

void loop ()
{
  int a=0;
  speech.listen();   // start to receiver data from the software port of Speech Recognizer
  if(speech.available())
  {
    a = speech.read();  //  Read the return value from the Speech Recognizer
    if(a==13)
    {
      clock.getTime();   // get the real-time from Grove - RTC
      int b=1+clock.hour;  // get hour data; because the 1th name of song is the voice "0" , so in order to get the voice "60" (it's) , the number of the name should be added 1.
      int c=1+clock.minute;  // get hour data; because the 1th name of song is the voice "0" , so in order to get the voice "60" (it's) , the number of the name should be added 1.

      mp3.listen();   // start to receiver data from the software port of Grove - MP3
      SpecifyMusicPlay(61);   // The voice "It's" is the name of "61" song in the folder of SD card
      while(QueryPlayStatus() != 0);  // play next song before the previous song is played out
      SpecifyMusicPlay(b);  // play the name of "b" song in the folder of SD card
      while(QueryPlayStatus() != 0);
      SpecifyMusicPlay(c);  //  play the name of "c" song in the folder of SD card
      while(QueryPlayStatus() != 0);
    }
  }
    delay(1000);
}

```

## 资源

---

* [Github: IRSendRev](https://github.com/Seeed-Studio/IRSendRev)

* [Github: MP3](https://github.com/Seeed-Studio/Grove_Serial_MP3_Player_V2.0)

* [Github: RTC](https://github.com/Seeed-Studio/RTC_DS1307)

* [播报声音文件](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer_Kit_for_Arduino/res/Sound_file.zip)

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