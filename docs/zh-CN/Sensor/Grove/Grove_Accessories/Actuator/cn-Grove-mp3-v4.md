---
description: Grove MP3播放器v4.0入门指南
title: Grove - MP3播放器v4.0
keywords:
- mp3
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/grove_mp3_v4
last_update:
  date: 03/21/2024
  author: WuFeifei
---

# Grove - MP3 v4.0

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/0.jpg" style={{width:600, height:'auto'}}/></div>

## 介绍

这款MP3模块与Arduino结合，可以变成一个多格式的音乐播放器！它是一款基于WT2605CX高品质音频芯片的音乐模块，性能优于MP3 V3，支持Grove接口、扬声器JST接口、3.5mm音频插孔和SD卡，兼容SPI-Flash、TF卡和USB闪存盘。

<p style={{}}><a href="https://www.seeedstudio.com/Grove-MP3-V4-p-5862.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 功能

- 支持多种音乐格式：支持高品质音频格式（8kbps~320kbps），音质优美，支持MP3、WAV格式；
- 支持多种存储格式：支持SPI-Flash、TF卡和USB闪存盘，兼容FAT、FAT32文件系统；
- 控制模式：丰富的AT通信接口，满足您的各种需求；
- 丰富的操作：支持随机播放命令、无缝循环播放功能等；
- 音频输出模式：默认为DAC输出采样。

## 规格

| 规格详情                   |                                          |
| -------------------------- | ---------------------------------------- |
| 输入电压                   | 5V(DC)                                   |
| 工作电流（无信号输出状态） | 小于 15 mA                               |
| 工作电流（有信号输出状态） | 小于 40 mA                               |
| 芯片型号                   | KT403A                                   |
| 芯片LDO输出电压            | 3.3 V                                    |
| 芯片输出电流               | 100 mA(最大值)                           |
| 支持的文件格式             | MP3, WAV, WMA                            |
| 支持的SD卡最大容量         | 32 GB                                    |
| 采样率                     | 8/11.025/12/16/22.05/24/32/44.1/48 (KHz) |

## 硬件概述

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/mp3V4.png" style={{width:300, height:'auto'}}/></div>

## 入门指南

如果您是首次使用Grove MP3模块，那么您可能需要一个已经存有歌曲的TF卡，以及一个输出设备，可以是3.5mm音频线的耳机或者扬声器。扬声器通常已随套件提供。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/1.jpg" style={{width:600, height:'auto'}}/></div>

## Arduino库概述

:::提示
如果您是第一次使用Arduino，我们强烈建议您参考[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />



### 功能

在我们开始编写草图之前，让我们先了解一下库中可用的功能。

- `void WT2605C<T>::init(T& serialPort)` —— 此函数负责配置MP3模块使用的串行端口。
    - **输入参数**:
    - **serialPort**: 串行端口。
    
- `uint8_t WT2605C<T>::playSPIFlashSong(uint16_t index)` —— 指定Flash根目录的索引以进行播放。文件是按照它们被复制到Flash的顺序来索引的。
    - **输入参数**:
    - **index**:播放歌曲的索引。
    
- `uint8_t WT2605C<T>::playSDRootSong(uint32_t index)` —— 指定TF卡根目录的索引以进行播放。此命令根据TF卡上的文件顺序对文件进行索引以进行播放，受文件存储顺序的影响，文件按照索引顺序排序。文件索引的顺序是根据文件被复制到TF卡的时间来确定的。
    - **输入参数**:
    - **index**: 播放歌曲的索引。
    
- `uint8_t WT2605C<T>::playSDSong(const char* fileName)` —— 播放指定文件名的音乐。（文件名不得超过8个字符）
    - **输入参数**:
    - **fileName**: 您想要播放的音乐文件的名称。
    
- `uint8_t WT2605C<T>::playSDDirectorySong(const char* dir, uint16_t index)` —— 在TF卡文件夹中指定索引播放。此命令可以指定根目录中的文件夹，并根据文件夹索引号播放文件夹中的音频（文件夹名称不应超过8个字符）。文件夹名称支持：中文、英文、数字、特殊符号。如果使用中文发送代码，发送前需要使用“UTF-16编码”格式对代码进行转码。
    - **输入参数**:
        - **dir**: 想要播放的音乐所在的文件夹。
        - **index**: 音乐文件的索引。
    
- `uint8_t WT2605C<T>::playUDiskRootSong(uint32_t index)` —— 指定USB存储棒的根目录索引播放。此命令根据USB闪存驱动器中的文件索引进行播放，受文件存储顺序的影响，文件按照索引顺序排序。文件索引的顺序是根据文件被复制到USB闪存驱动器的时间来确定的。
    - **输入参数**:
    - **index**:音乐文件的索引。
    
- `uint8_t WT2605C<T>::playUDiskSong(const char* fileName)` —— 指定USB存储棒的文件名进行播放。此命令允许您在根目录中指定一个文件名进行音频播放（文件名不得超过8个字符）。支持的音频格式：`.mp3` 和 `.wav`。
    - **输入参数**:
    - **fileName**: 想要播放的音乐文件的名称。
    
- `uint8_t WT2605C<T>::playUDiskDirectorySong(const char* dir, uint32_t index)` —— 在USB存储棒文件夹中指定要播放的文件名。此命令指定根目录中一个文件夹内要播放的文件名。（文件名不得超过8个字符。）支持的音频格式：`.mp3` 和 `.wav`。
    - **输入参数**：
        - **dir**: 想要播放的音乐所在的文件夹。
        - **index**: 音乐文件的名称。
    
- `uint8_t WT2605C<T>::pause_or_play()` —— 暂停或播放。播放状态下，发送此命令会暂停播放；暂停状态下，发送此命令会恢复播放；停止播放状态下，发送此命令会从当前地址重新开始播放。
    - **输出参数**: 执行成功返回0，执行失败返回-1。

- `uint8_t WT2605C<T>::stop()` —— 停止。发送此命令以停止播放当前音乐。
    - **输出参数**: 执行成功返回0，执行失败返回-1。

- `uint8_t WT2605C<T>::next()` —— 下一曲。此命令触发当前目录中下一曲的播放，当播放到最后一曲时，发送此命令会触发第一曲的播放。
    - **输出参数**: 执行成功返回0，执行失败返回-1。

- `uint8_t WT2605C<T>::previous()` —— 上一曲。此命令触发当前目录中上一曲的播放，当播放第一曲时，发送此命令会触发最后一曲的播放。
    - **输出参数**: 执行成功返回0，执行失败返回-1。

- `uint8_t WT2605C<T>::volume(uint8_t vol)` —— 音量控制。音量有32级，从0到31，其中0为静音，31为最大音量。
    - **输出参数**: 执行成功返回0，执行失败返回-1。

- `uint8_t WT2605C<T>::volumeDown()` —— 音量增加控制命令。
    - **输出参数**: 执行成功返回0，执行失败返回-1。

- `uint8_t WT2605C<T>::volumeUp()` —— 音量减少控制命令。
    - **输出参数**: 执行成功返回0，执行失败返回-1。

- `uint8_t WT2605C<T>::playMode(PLAY_MODE mode)` —— 播放模式。此命令在正常通信情况下修改播放模式，具有断电记忆功能。
    - **输入参数**:
        - **mode**: 
        
            1. **CYCLE**: 所有曲目循环模式。
            2. **SINGLE_CYCLE**: 单曲循环播放模式。
            3. **DIR_CYCLE**: 文件夹循环模式。
            4. **RANDOM**: 随机播放模式。
            5. **SINGLE_SHOT**: 单曲播放模式。
        
    - **输出参数**: 执行成功返回0，执行失败返回-1。
    
- `uint8_t WT2003S<T>::cutInPlay(STORAGE device, uint32_t index)` —— 切入播放。此命令只能在播放状态下插入，在停止状态下无效。发送此命令时，正在播放的曲目会立即暂停，然后执行此命令中指定的播放曲目，播放完成后会继续播放原来暂停的曲目。
    - **输入参数**:
        - **device**: 
        
            1. **SPIFLASH**: 指定FLASH中插播的索引地址；
            2. **SD**: 指定SD卡中插播的索引地址；
            3. **UDISK**: 指定USB存储棒中插播的索引地址。
        
        - **index**: 要播放的歌曲的索引地址。
        
    - **输出参数**: 执行成功返回0，执行失败返回-1。


### 默认变量

```cpp
#define AT_HEADER          "AT+"
#define AT_CMD_PLAY        "PLAY"
#define AT_CMD_LPLAY       "LPLAY"
#define AT_CMD_SPLAY       "SPLAY"
#define AT_CMD_FPLAY       "FPLAY"
#define AT_CMD_PP          "PP"
#define AT_CMD_STOP        "STOP"
#define AT_CMD_NEXT        "NEXT"
#define AT_CMD_PREV        "PREV"
#define AT_CMD_VOL         "VOL"
#define AT_CMD_VOLUP       "VOLUP"
#define AT_CMD_VOLDOWN     "VOLDOWN"
#define AT_CMD_REPEATMODE  "REPEATMODE"
#define AT_CMD_STEPINPLAY  "STEPINPLAY"
#define AT_CMD_TOTALTIME   "TOTALTIME"
#define AT_CMD_CURTIME     "CURTIME"
#define AT_CMD_CHANGE_DEV  "CHANGE_DEV"
#define AT_CMD_BUSY        "BUSY"
#define AT_CMD_VBATPCT     "VBATPCT"
#define AT_CMD_GVER        "GVER"
#define AT_CMD_GCFGVER     "GCFGVER"
#define AT_CMD_POWEROFF    "POWEROFF"
#define AT_CMD_OTA         "OTA"
#define AT_CMD_COPY        "COPY"
#define AT_CMD_BAUD        "BAUD"

#define WT2605C_TIMEOUT       1000
#define WT2605C_SEND_MAX_SIZE 64

#define STORAGE_SPIFLASH   "fat_nor"
#define STORAGE_SD         "sd0"
#define STORAGE_UDISK      "udisk0"

typedef enum {
    CYCLE        = 0x00,
    SINGLE_CYCLE = 0x01,
    DIR_CYCLE    = 0x02,
    RANDOM       = 0x03,
    SINGLE_SHOT  = 0x04,
} PLAY_MODE;

typedef enum {
    SPIFLASH = 0x00,
    SD       = 0x01,
    UDISK    = 0x02,
} STORAGE;
```

### 安装

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />


既然你已经下载了zip格式的库文件，打开你的Arduino IDE，点击**Sketch（草图）> Include Library（包含库）> Add .ZIP Library（添加.ZIP库）**。选择你刚刚下载的zip文件，如果库文件安装正确，你会在通知窗口中看到**Library added to your libraries（库已添加到你的库中）**。这就意味着库文件已成功安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

## Seeeduino 示例

**现在我们已经安装了库文件，并且理解了基本功能，让我们为 Seeeduino V4.3 运行一些示例，看看它的表现如何。**

**步骤 1.** 启动 Arduino 应用程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>下载 Arduino IDE</font></span></strong>
    </a>
</div>
**步骤 2.** 选择你的开发板型号并添加到Arduino IDE中。

- 如果你想在后续的例程中使用**Seeed Studio XIAO SAMD21**，请参考 **[这个教程](https://wiki.seeedstudio.com/Seeeduino-XIAO/#software)** 完成添加。

- 如果你想在后续的例程中使用**Seeed Studio XIAO RP2040**，请参考 **[这个教程](https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#software-setup)** 完成添加。

- 如果你想在后续的例程中使用**Seeed Studio XIAO nRF52840**，请参考 **[这个教程](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup)** 完成添加。如果你想在后续的例程中使用**Seeed Studio XIAO ESP32C3**，请参考 **[这个教程](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started#software-setup)** 完成添加。

- 如果你想在后续的例程中使用**Seeed Studio XIAO ESP32S3**，请参考 **[这个教程](http://wiki.seeedstudio.com/xiao_esp32s3_getting_started#software-preparation)** 完成添加。

- 如果你想在后续的例程中使用**Seeeduino V4.3**，请参考 **[这个教程](https://wiki.seeedstudio.com/Seeeduino_v4.2/)** 完成添加。

**步骤 3.** 所需材料

本教程将以Seeeduino V4.3为例，解释Grove MP3模块的使用方法。那么你可能需要准备以下材料。

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeeduino V4.3</th>
			<th>Grove - MP3 v4.0</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-MP3-V3/img/Grove-MP3-V3-thumbnail.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-MP3-V3-p-4297.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>



**步骤 4.** 硬件连接

将 Grove - MP3 V4.0 连接到 Seeeduino V4.3 的 **UART** 端口。然后，通过 USB 电缆将 Seeeduino 连接到电脑。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/2.jpg" style={{width:600, height:'auto'}}/></div><br />


- **步骤 5.** 通过路径 **文件** → **示例** → **Seeed_Serial_MP3_Player** → **WT2605C_Terminal_player** 打开 **WT2605C_Terminal_player** 示例。你可以使用这个模块播放 `.mp3` 格式的音乐文件，并通过 3.5mm 音频插孔、JST2.0 扬声器端口连接的扬声器播放，甚至同时输出到两者。

The `WT2605C_Terminal_player` 示例代码如下：

```cpp
#include "WT2605C_Player.h"

#ifdef __AVR__
  #include <SoftwareSerial.h>
  SoftwareSerial SSerial(2, 3); // RX, TX
  #define COMSerial SSerial
  #define ShowSerial Serial

  WT2605C<SoftwareSerial> Mp3Player;
#endif

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
  #define COMSerial Serial1
  #define ShowSerial SerialUSB

  WT2605C<Uart> Mp3Player;
#endif

#ifdef ARDUINO_ARCH_STM32F4
  #define COMSerial Serial
  #define ShowSerial SerialUSB

  WT2605C<HardwareSerial> Mp3Player;
#endif

void setup() {
  while (!ShowSerial);
  ShowSerial.begin(9600);
  COMSerial.begin(115200);
  ShowSerial.println("+++++++++++++++++++++++++++++++++++++++++++++++++++++");
  Mp3Player.init(COMSerial);

  ShowSerial.println("0...");
}


void loop() {
  if(ShowSerial.available()) {
    String input = Serial.readString();
    input.trim();
    
    if(input.startsWith("v")) {
      int vol = input.substring(1).toInt();
      int err = Mp3Player.volume(vol);
      ShowSerial.println(err);
      if(!err) ShowSerial.println("Volume set to: " + String(vol));
      else ShowSerial.println("ERROR");
    }
    
    else if(input.startsWith("m")) {
      if(input.substring(1) == "1"){
        ShowSerial.println("1");
        int err = Mp3Player.playMode(0x00);
        ShowSerial.println(err);
        if(!err) ShowSerial.println("The playback mode is set to Loop mode.");
        else ShowSerial.println("ERROR");
      }
      else if(input.substring(1) == "2"){
        ShowSerial.println("2");
        int err = Mp3Player.playMode(0x01);
        ShowSerial.println(err);
        if(!err) ShowSerial.println("The playback mode is set to Single song loop mode.");
        else ShowSerial.println("ERROR");
      }
      else if(input.substring(1) == "3"){
        ShowSerial.println("3");
        int err = Mp3Player.playMode(0x02);
        ShowSerial.println(err);
        if(!err) ShowSerial.println("The playback mode is set to Folder loop mode.");
        else ShowSerial.println("ERROR");
      }
      else if(input.substring(1) == "4"){
        ShowSerial.println("4");
        int err = Mp3Player.playMode(0x03);
        ShowSerial.println(err);
        if(!err) ShowSerial.println("The playback mode is set to Random mode.");
        else ShowSerial.println("ERROR");
      }
      else if(input.substring(1) == "5"){
        ShowSerial.println("5");
        int err = Mp3Player.playMode(0x04);
        ShowSerial.println(err);
        if(!err) ShowSerial.println("The playback mode is set to Single song mode.");
        else ShowSerial.println("ERROR");
      }
    }
    else if(input.startsWith("b")){
      int index = input.substring(1).toInt();
      Mp3Player.playSDRootSong(index);
      ShowSerial.println("Play music: " + String(index));
    }
    else if(input.startsWith("+")){
      int err = Mp3Player.volumeUp();
      if(!err) ShowSerial.println("Volume up");
      else ShowSerial.println("ERROR");
    }
    else if(input.startsWith("-")){
      int err = Mp3Player.volumeDown();
      if(!err) ShowSerial.println("Volume down");
      else ShowSerial.println("ERROR");
    }
    else if(input.startsWith("n")){
      Mp3Player.next();
      ShowSerial.println("Next song");
    }
    else if(input.startsWith("p")){
      Mp3Player.previous();
      ShowSerial.println("Previous song");
    }
  }
}
```

- **步骤 6.** 上传示例代码。如果你不知道如何上传代码，请查阅[如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)。通过点击 **工具->串行监视器** 打开Arduino IDE的**串行监视器**。将波特率设置为**115200**。结果应该如下所示。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/3.png" style={{width:700, height:'auto'}}/></div><br />


你可以输入一系列命令来控制MP3模块。

- 输入`v{num}`来设置播放音量，例如，v20表示将播放音量设置为20。
- 输入`m{1~5}`来设置播放模式。
- 输入`b{num}`来播放指定索引的音乐。
- 输入`+`，音量增加。
- 输入`-`，音量减小。
- 输入`n`，下一首歌。
- 输入`p`，上一首歌。

你可以更具创意，并添加更多MP3功能。

## 常见问题解答

### Q: TF卡无法被识别？

**A:** 检查TF卡的文件系统，确保它是FAT16或FAT32文件系统。

## 资源

- **[ZIP]** [Grove-MP3 V4 SCH&PCB](https://files.seeedstudio.com/wiki/grove-mp3-v4/Grove-MP3-V4_SCH&PCB.zip)
- **[PDF]** [Grove-MP3 V4 SCH](https://files.seeedstudio.com/wiki/grove-mp3-v4/Grove-MP3-V4.pdf)
- **[PDF]** [Grove-MP3 V4 数据手册](https://files.seeedstudio.com/wiki/grove-mp3-v4/WT2605C-32N-A001-datasheet.pdf)

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








