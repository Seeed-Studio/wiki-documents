---
description: RePhone APIs - 音频
title: RePhone APIs - 音频
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/RePhone_APIs-Audio
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/RePhone_APIs-Audio/img/Xadow_Audio.JPG)

RePhone 支持播放存储在 SD 卡或内置闪存中的音频文件。支持的格式包括 **WAV**、**MP3**、**AAC** 等。通过此库，您可以执行 **播放**、**暂停**、**停止** 播放过程以及 **调整音量**。

播放（解码）任务由 **LinkIt** 内部处理。因此，所有功能都是 **非阻塞** 的，这意味着调用 `playFile()` 后，音频将开始播放并立即返回到您的程序。

使用 `getStatus()` 检查当前状态并采取相应操作。音频状态可以是“播放中”、“播放完成”、“播放暂停”等。音频将通过 LinkIt 板上的耳机插孔输出。

<div class="admonition note">
<p class="admonition-title">注意</p>
如果在前一个播放未完成之前尝试播放另一个音频文件，前一个播放将自动停止，新音频将开始播放。
</div>

[![](https://files.seeedstudio.com/wiki/RePhone_APIs-Audio/img/Viewallapiofrephone.png)]

功能列表
-------------

-   begin()
-   playFile()
-   setVolume()
-   pause()
-   resume()
-   stop()
-   getStatus()

API 
----

### LAudio.begin()

初始化音频模块。

-   ***语法***

LAudio.begin()

-   ***参数***

无

-   ***返回值***

无

-   ***示例***

```
#include <LAudio.h>
 
void setup()
{
    LAudio.begin();
    LAudio.setVolume(2);
    LAudio.playFile(storageFlash,(char*)"sample.mp3");
}
 
void loop()
{
 
}
```

### LAudio.playFile()

播放存储在 SD 卡或闪存中的音频文件。

-   ***语法***

```
LAudio.playFile(StorageEnum drv, char *songName)
LAudio.playFile(StorageEnum drv, wchar_t* songName)
```

-   ***参数***
    -   *drv* - 存储类型，可以是 `storageSD`（SD 卡）或 `storageFlash`（闪存）
    -   *songName* - 音频文件路径，编码可以是 ascii (char\*) 或 unicode (wchar_t\*)


-   ***返回值***

无

-   ***示例***

```
#include <LAudio.h>
 
void setup()
{
    LAudio.begin();
    LAudio.setVolume(2);
    LAudio.playFile(storageFlash,(char*)"sample.mp3");
}
 
void loop()
{
 
}
```

### LAudio.setVolume()

调整播放音量；范围从 0（静音）到 6（最大）。

-   ***语法***

LAudio.setVolume(unsigned char volume)

-   ***参数***
    -   *volume*: 音量级别，可以是 **0** 到 **6**；0 为静音，6 为最大音量


-   ***返回值***

无

-   ***示例***

```
#include <LAudio.h>
 
void setup()
{
    LAudio.begin();
    LAudio.setVolume(2);
    LAudio.playFile(storageFlash,(char*)"sample.mp3");
}
 
void loop()
{
 
}
```

### LAudio.pause()

暂停播放。仅在有活动播放（通过 `playFile()`）时有效。

-   ***语法***

LAudio.pause()

-   ***参数***

无

-   ***返回值***

无

-   ***示例***

```
#include <LAudio.h>
 
void setup()
{
    LAudio.begin();
    LAudio.playFile(storageFlash,(char*)"sample.mp3");
    LAudio.setVolume(2);
    delay(5000);
    LAudio.pause();    // 播放 5 秒后暂停
 
    delay(5000);
    LAudio.resume();    // 再等待 5 秒后恢复播放
 
    delay(5000);
    LAudio.stop();    // 再等待 5 秒后停止播放
}
 
void loop()
{
 
}
```

### LAudio.resume()

恢复播放。仅在播放已暂停时有效。

-   ***语法***

LAudio.resume()

-   ***参数***

无

-   ***返回值***

无

-   ***示例***

```
#include <LAudio.h>

void setup()
{
    LAudio.begin();
    LAudio.playFile(storageFlash,(char*)"sample.mp3");
    LAudio.setVolume(2);
    delay(5000);
    LAudio.pause();  // 播放 5 秒后暂停
 
    delay(5000);
    LAudio.resume(); // 再等待 5 秒后恢复播放
 
    delay(5000);
    LAudio.stop();   // 再等待 5 秒后停止播放
}
 
void loop()
{
 
}
```

### LAudio.stop()

停止播放。

-   ***语法***

LAudio.stop()

-   ***参数***

无

-   ***返回值***

无

-   ***示例***

```
#include <LAudio.h>
 
void setup()
{
    LAudio.begin();
    LAudio.playFile(storageFlash,(char*)"sample.mp3");
    LAudio.setVolume(2);
    delay(5000);
    LAudio.pause();  // 播放 5 秒后暂停
 
    delay(5000);
    LAudio.resume(); // 再等待 5 秒后恢复播放
 
    delay(5000);
    LAudio.stop();   // 再等待 5 秒后停止播放
}
 
void loop()
{
 
}
```

### LAudio.getStatus()

查询当前播放状态。

-   ***语法***

LAudio.getStatus()

-   ***参数***

无

-   ***返回值***
    -   *AudioStatus* - 播放状态，可以是：
    -   *AudioStop* - 播放已停止。
    -   *AudioPause* - 播放已暂停（可以恢复）。
    -   *AudioResume* - 播放恢复。
    -   *AudioEndOfFile* - 播放完成。
    -   *AudioCommonFailed* - 播放失败（例如音频文件损坏）。


-   ***示例***

```
#include <LAudio.h>
 
void setup()
{
    LAudio.begin();
    LAudio.setVolume(2);
    LAudio.playFile(storageFlash,(char*)"sample.mp3");
}
 
void loop()
{
    AudioStatus status;
    status = LAudio.getStatus();
    if(AudioEndOfFile == status)    // 检查播放是否完成并重新开始
    {
        LAudio.playFile(storageFlash,(char*)"sample.mp3");
    }
}
```

示例
-------

-   ***描述***

通过此示例，您可以播放一个 mp3 文件。打开串行监视器以输入数字来控制播放。

命令如下：

1.  播放
2.  设置音量
3.  暂停
4.  恢复
5.  停止

-   ***代码***

您可以在以下路径找到代码：**文件** -> **示例** -> **LAudio** -> **AudioPlayer**

```
/*
  RePhone 音频测试示例
  首先需要将一个 mp3 文件放入存储中
  然后打开串行监视器，输入数字以更改状态
  1 - 播放
  2 - 设置音量
  3 - 暂停
  4 - 恢复
  5 - 停止
*/
#include <LAudio.h>
 
// 在此处添加您的音乐文件名
#define    FILE_NAME    "music.mp3"
 
#define    PLAY         1
#define    SETVOLUME    2
#define    PAUSE        3
#define    RESUME       4
#define    STOP         5
 
unsigned char Status_Value = STOP;
 
int volume = 6;
 
void changeVolume()
{
    volume++;
    volume = volume>6 ? 1 : volume;
}
 
void setup()
{
    LAudio.begin();
    Serial.begin(115200);
    Serial.println("播放      - 1");
    Serial.println("设置音量 - 2");
    Serial.println("暂停     - 3");
    Serial.println("恢复     - 4");
    Serial.println("停止     - 5");
    Change_Status(PLAY);
}
 
char StatusFlag = 0;
 
void loop()
{
    unsigned char KEY_NUM;
    AudioStatus status;
 
    KEY_NUM = task_uart_key();
 
    if(KEY_NUM > 0)
    {
        Change_Status(KEY_NUM);
        KEY_NUM = 0;
    }
 
    status = LAudio.getStatus();
    if(StatusFlag != status)
    {
        StatusFlag = status;
        Serial.print("LAudio 状态是 ");
        Serial.println(status);
    }
 
    if(status == AudioEndOfFile)
    {
        Status_Value = PLAY;
        Change_Status(Status_Value);
    }
}
 
void Change_Status(unsigned char status)
{
    switch(status)
    {
        case 1:
        LAudio.playFile(storageFlash,(char*)"music.mp3");
        LAudio.setVolume(volume);
        Serial.println("播放");
        break;
 
        case 2:
        LAudio.setVolume(volume);
        changeVolume();
        Serial.print("设置音量为 ");
        Serial.println(volume);
        break;
 
        case 3:
        LAudio.pause();
        Serial.println("暂停");
        break;
 
        case 4:
        LAudio.resume();
        Serial.println("恢复");
        break;
 
        case 5:
        LAudio.stop();
        Serial.println("停止");
        break;
 
        default:
        break;
    }
}
 
unsigned int task_uart_key()
{
    String inString = "";
    unsigned int keyValue = 0;
    unsigned char bitCount = 0;
    unsigned char dataTemp1[10] = {0};
    while(Serial.available() > 0)
    {
        unsigned char inChar = Serial.read();
        inString += (char)inChar;
        dataTemp1[bitCount] = inChar - '0';
        bitCount += 1;
        delay(10);
    }
    if(inString != "")
    {
        if(bitCount > 4)
        {
            Serial.println("按键输入错误。");
        }
        else
        {
            for(char i=0;i<bitCount;i++)
            {
                unsigned int dataTemp2 = 1;
                for(char j=0;j<(bitCount-i-1);j++)dataTemp2 *= 10;
                keyValue += (dataTemp1[i] * dataTemp2);
            }
            Serial.print("按键值是: ");
            Serial.println(keyValue);
        }
    }
    return keyValue;
}
```

资源
---------

<!-- -   [RePhone 主页面](/cn/RePhone)
-   [Xadow - Audio](/cn/Xadow_Audio)
-   [RePhone APIs 主页面](/cn/RePhone) -->


<!-- 此 Markdown 文件来源于 https://www.seeedstudio.com/wiki/RePhone_APIs_-_Audio -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时拥有尽可能顺畅的体验。我们提供多个沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>