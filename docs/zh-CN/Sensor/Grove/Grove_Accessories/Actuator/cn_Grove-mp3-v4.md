---
description: 入门指南 - Grove MP3 v4.
title: Grove - MP3 v4.0
keywords:
- mp3
- grove
image: https://files.seeedstudio.com/wiki/grove-mp3-v4/0.webp
slug: /cn/grove_mp3_v4
last_update:
  date: 12/13/2024
  author: Carla
---

# Grove - MP3 v4.0

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/0.jpg" style={{width:600, height:'auto'}}/></div>


## 简介

使用 Arduino 搭配此 MP3 模块，可以将其变成您的多格式音乐播放器！这是一个基于 WT2605CX 高质量音频芯片的音乐模块，其性能优于 MP3 V3，支持 Grove 接口、扬声器 JST 接口、3.5mm 音频插孔和 SD 卡，同时支持 SPI-Flash、TF 卡和 USB 闪存盘。

<p style={{}}><a href="https://www.seeedstudio.com/Grove-MP3-V4-p-5862.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性
- 多种音乐格式支持：支持高质量语音音频格式（8kbps~320kbps），音质优美，支持 MP3、WAV 格式；
- 多种存储格式支持：支持 SPI-Flash、TF 卡、USB 闪存盘，并支持 FAT、FAT32 文件系统；
- 控制模式：丰富的 AT 通信接口以满足您的需求；
- 丰富的操作功能：支持随机播放命令、无缝循环播放功能等；
- 音频输出模式：默认 DAC 输出样本。

## 规格参数

| 规格参数                                | 详情                                       |
| ---------------------------------------- | ------------------------------------------- |
| 输入电压                                | 5V(DC)                                     |
| 工作电流（无信号输出状态）               | 小于 15 mA                                 |
| 工作电流（有信号输出状态）               | 小于 40 mA                                 |
| 芯片                                    | WT2605CX                                   |
| 芯片 LDO 输出电压                       | 3.3 V                                      |
| 芯片输出电流                            | 最大 100 mA                                |
| 支持的文件格式                          | MP3, WAV, WMA                              |
| SD 卡支持的最大内存                     | 32 GB                                      |
| 采样率                                  | 8/11.025/12/16/22.05/24/32/44.1/48 (KHz)   |

## 硬件概览

<div style={{textAlign:'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1Nzc0ODUwMjM3NA_716539_x5zKByNTcw7Jc8sR_1706149458?w=2608&h=1322&type=image/png" style={{width:750, height:'auto'}}/></div>

## 入门指南

如果您是第一次使用 Grove MP3 模块，那么您可能需要准备一个已存储歌曲的 TF 卡，以及一个输出设备，例如 3.5mm 音频线耳机或扬声器。扬声器默认包含在套件中。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/1.jpg" style={{width:600, height:'auto'}}/></div>

### 软件准备

**步骤 1.** 启动 Arduino 应用程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>下载 Arduino IDE</font></span></strong></a>
</div>

**步骤 2.** 选择您的开发板型号并将其添加到 Arduino IDE。

- 如果您希望使用 **Seeed Studio XIAO SAMD21** 进行后续操作，请参考 **[此教程](https://wiki.seeedstudio.com/cn/Seeeduino-XIAO/#software)** 完成添加。

- 如果您希望使用 **Seeed Studio XIAO RP2040** 进行后续操作，请参考 **[此教程](https://wiki.seeedstudio.com/cn/XIAO-RP2040-with-Arduino/#software-setup)** 完成添加。

- 如果您希望使用 **Seeed Studio XIAO nRF52840** 进行后续操作，请参考 **[此教程](https://wiki.seeedstudio.com/cn/XIAO_BLE/#software-setup)** 完成添加。

- 如果您希望使用 **Seeed Studio XIAO ESP32C3** 进行后续操作，请参考 **[此教程](https://wiki.seeedstudio.com/cn/XIAO_ESP32C3_Getting_Started#software-setup)** 完成添加。

- 如果您希望使用 **Seeed Studio XIAO ESP32S3** 进行后续操作，请参考 **[此教程](https://wiki.seeedstudio.com/cn/xiao_esp32s3_getting_started#software-preparation)** 完成添加。

- 如果您希望使用 **Seeeduino V4.3** 进行后续操作，请参考 **[此教程](https://wiki.seeedstudio.com/cn/Seeeduino_v4.2/)** 完成添加。

- 如果您希望使用 **Arduino UNO R4 WiFi** 进行后续操作，请点击 **工具-> 板-> 板管理器...**，在搜索框中输入关键字 "UNO R4 WiFi"，并安装最新版本（或您希望使用的版本）。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/4.png" style={{width:800, height:'auto'}}/></div>


### Arduino 库概览


#### 1. Seeed Serial MP3 Player Library


<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

##### 功能

在开始开发代码之前，让我们先了解一下该库的可用功能。

- `void WT2605C<T>::init(T& serialPort)` —— 此函数负责配置 MP3 模块使用的串口。
    - **输入参数**：

        - **serialPort**: 串口。

- `uint8_t WT2605C<T>::playSPIFlashSong(uint16_t index)` —— 指定 Flash 根目录索引进行播放。文件按照复制到 Flash 的顺序进行索引。
    - **输入参数**：

        - **index**: 播放歌曲的索引。

- `uint8_t WT2605C<T>::playSDRootSong(uint32_t index)` —— 指定 TF 卡根目录索引进行播放。此命令根据 TF 卡中的文件存储顺序进行索引播放，文件按照索引顺序排序，索引顺序取决于文件复制到 TF 卡的时间。
    - **输入参数**：

        - **index**: 播放歌曲的索引。

- `uint8_t WT2605C<T>::playSDSong(const char* fileName)` —— 播放指定文件名的音乐。（文件名不得超过 8 个字符）
    - **输入参数**：

        - **fileName**: 要播放的音乐文件的名称。

- `uint8_t WT2605C<T>::playSDDirectorySong(const char* dir, uint16_t index)` —— 指定 TF 卡文件夹中的索引进行播放。此命令可以指定根目录中的文件夹，并根据文件夹索引号播放文件夹中的音频（文件夹名称不得超过 8 个字符）。文件夹名称支持：中文、英文、数字、特殊符号。如果使用中文发送代码，需要使用“UTF-16 编码”格式对代码进行转码后发送。
    - **输入参数**：

        - **dir**: 要播放音乐所在的文件夹。
        - **index**: 音乐文件的索引。

- `uint8_t WT2605C<T>::playUDiskRootSong(uint32_t index)` —— 指定 USB 闪存盘根目录索引进行播放。此命令根据 USB 闪存盘中的文件存储顺序进行索引播放，文件按照索引顺序排序，索引顺序取决于文件复制到 USB 闪存盘的时间。
    - **输入参数**：

        - **index**: 音乐文件的索引。

- `uint8_t WT2605C<T>::playUDiskSong(const char* fileName)` —— 指定 USB 闪存盘文件名进行播放。此命令允许指定根目录中的文件名进行音频播放（文件名不得超过 8 个字符）。支持的音频格式：`.mp3` 和 `.wav`。
    - **输入参数**：

        - **fileName**: 要播放的音乐文件的名称。

- `uint8_t WT2605C<T>::playUDiskDirectorySong(const char* dir, uint32_t index)` —— 指定 USB 闪存盘文件夹中的文件名进行播放。此命令指定根目录文件夹中的文件名进行播放。（文件名不得超过 8 个字符）。支持的音频格式：`.mp3` 和 `.wav`。
    - **输入参数**：

        - **dir**: 要播放音乐所在的文件夹。
        - **index**: 音乐文件的索引。

- `uint8_t WT2605C<T>::pause_or_play()` —— 暂停播放命令。在播放状态下发送此命令可暂停播放；在暂停状态下发送此命令可从暂停状态恢复播放。在停止播放状态下发送此命令可从当前地址重新开始播放。
    - **输出参数**：返回 0 表示执行成功，返回 -1 表示执行失败。

- `uint8_t WT2605C<T>::stop()` —— 停止命令。发送此命令可停止当前正在播放的音乐。
    - **输出参数**：返回 0 表示执行成功，返回 -1 表示执行失败。

- `uint8_t WT2605C<T>::next()` —— 下一首歌曲命令。此命令触发当前目录中下一首歌曲的播放，当播放到最后一首歌曲时，发送此命令会触发第一首歌曲的播放。
    - **输出参数**：返回 0 表示执行成功，返回 -1 表示执行失败。

- `uint8_t WT2605C<T>::previous()` —— 上一首歌曲命令。此命令触发当前目录中上一首歌曲的播放，当播放到第一首歌曲时，发送此命令会触发最后一首歌曲的播放。
    - **输出参数**：返回 0 表示执行成功，返回 -1 表示执行失败。

- `uint8_t WT2605C<T>::volume(uint8_t vol)` —— 音量控制命令。音量共有 32 级，从 0 到 31，其中 0 为静音，31 为最大音量。
    - **输出参数**：返回 0 表示执行成功，返回 -1 表示执行失败。

- `uint8_t WT2605C<T>::volumeDown()` —— 音量减小控制命令。
    - **输出参数**：返回 0 表示执行成功，返回 -1 表示执行失败。

- `uint8_t WT2605C<T>::volumeUp()` —— 音量增加控制命令。
    - **输出参数**：返回 0 表示执行成功，返回 -1 表示执行失败。

- `uint8_t WT2605C<T>::playMode(PLAY_MODE mode)` —— 指定播放模式。此命令在正常通信情况下修改播放模式，并具有断电记忆功能。
    - **输入参数**：

        - **mode**: 
        
            1. **CYCLE**: 全部曲目循环模式。
            2. **SINGLE_CYCLE**: 单曲循环播放模式。
            3. **DIR_CYCLE**: 文件夹循环模式。
            4. **RANDOM**: 随机播放模式。
            5. **SINGLE_SHOT**: 单曲播放模式。

    - **输出参数**：返回 0 表示执行成功，返回 -1 表示执行失败。

- `uint8_t WT2003S<T>::cutInPlay(STORAGE device, uint32_t index)` —— 插入命令。此命令只能在播放状态下插入，在停止状态下无效。当发送此命令时，当前正在播放的曲目会立即暂停，然后执行此命令中指定的播放曲目，播放完成后会继续播放原暂停的曲目。当播放完成后，原暂停的曲目将继续播放。
    - **输入参数**：

        - **device**: 

            1. **SPIFLASH**: 指定插入的 FLASH 内的索引地址；
            2. **SD**: 插入 SD 卡中指定的索引地址；
            3. **UDISK**: 插入 USB 存储设备中指定的索引地址。

        - **index**: 音乐文件的索引。

    - **输出参数**：返回 0 表示执行成功，返回 -1 表示执行失败。


##### 默认变量

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

##### 安装

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

下载 ZIP 格式的库文件后，打开 Arduino IDE，点击 **Sketch > Include Library > Add .ZIP Library**。选择刚刚下载的 ZIP 文件，如果库安装正确，您会在通知窗口中看到 **Library added to your libraries**，这表示库已成功安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

#### 2. Grove 手势库

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Grove_Gesture/tree/dev" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" 
viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 
'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 
1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.
44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.
53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

##### 功能

在开始开发代码之前，让我们先了解库中可用的功能。

1. `bool init()` —— 此函数初始化 Grove 手势传感器，如果初始化成功返回 **True**，如果失败返回 **False**。

2. `bool getResult(paj7620_gesture_t& res)` —— 此函数用于获取传感器识别手势的结果。

##### 安装

下载 ZIP 格式的库文件后，打开 Arduino IDE，点击 **Sketch > Include Library > Add .ZIP Library**。选择刚刚下载的 ZIP 文件，如果库安装正确，您会在通知窗口中看到 **Library added to your libraries**，这表示库已成功安装。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

<br></br>

## 示例 1：Seeeduino 示例

现在我们已经安装了库并了解了基本功能，让我们运行一些针对 Seeeduino V4.3 的示例，看看它的表现。

**步骤 1.** 所需材料

本教程将以 Seeeduino V4.3 为例，解释如何使用 Grove MP3 模块。您需要准备以下材料。

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
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-MP3-V3-p-4297.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

**步骤 2.** 硬件连接

将 Grove - MP3 V4.0 连接到 Seeeduino V4.3 的 **UART** 端口。然后，通过 USB 数据线将 Seeeduino 连接到电脑。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/2.jpg" style={{width:600, height:'auto'}}/></div><br />

**步骤 3.** 打开 **WT2605C_Terminal_player** 示例，路径为：**File** → **Examples** → **Seeed_Serial_MP3_Player** → **WT2605C_Terminal_player**。您可以使用此模块播放 `.mp3` 格式的音乐文件，并通过 3.5mm 音频插孔、JST2.0 扬声器端口播放，甚至可以同时输出。

`WT2605C_Terminal_player` 示例代码如下：

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
      if(!err) ShowSerial.println("音量设置为: " + String(vol));
      else ShowSerial.println("错误");
    }
    
    else if(input.startsWith("m")) {
      if(input.substring(1) == "1"){
        ShowSerial.println("1");
        int err = Mp3Player.playMode(0x00);
        ShowSerial.println(err);
        if(!err) ShowSerial.println("播放模式设置为循环模式。");
        else ShowSerial.println("错误");
      }
      else if(input.substring(1) == "2"){
        ShowSerial.println("2");
        int err = Mp3Player.playMode(0x01);
        ShowSerial.println(err);
        if(!err) ShowSerial.println("播放模式设置为单曲循环模式。");
        else ShowSerial.println("错误");
      }
      else if(input.substring(1) == "3"){
        ShowSerial.println("3");
        int err = Mp3Player.playMode(0x02);
        ShowSerial.println(err);
        if(!err) ShowSerial.println("播放模式设置为文件夹循环模式。");
        else ShowSerial.println("错误");
      }
      else if(input.substring(1) == "4"){
        ShowSerial.println("4");
        int err = Mp3Player.playMode(0x03);
        ShowSerial.println(err);
        if(!err) ShowSerial.println("播放模式设置为随机模式。");
        else ShowSerial.println("错误");
      }
      else if(input.substring(1) == "5"){
        ShowSerial.println("5");
        int err = Mp3Player.playMode(0x04);
        ShowSerial.println(err);
        if(!err) ShowSerial.println("播放模式设置为单曲模式。");
        else ShowSerial.println("错误");
      }
    }
    else if(input.startsWith("b")){
      int index = input.substring(1).toInt();
      Mp3Player.playSDRootSong(index);
      ShowSerial.println("播放音乐: " + String(index));
    }
    else if(input.startsWith("+")){
      int err = Mp3Player.volumeUp();
      if(!err) ShowSerial.println("音量增加");
      else ShowSerial.println("错误");
    }
    else if(input.startsWith("-")){
      int err = Mp3Player.volumeDown();
      if(!err) ShowSerial.println("音量减少");
      else ShowSerial.println("错误");
    }
    else if(input.startsWith("n")){
      Mp3Player.next();
      ShowSerial.println("下一首");
    }
    else if(input.startsWith("p")){
      Mp3Player.previous();
      ShowSerial.println("上一首");
    }
  }
}
```

**步骤 4.** 上传示例代码。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。通过点击 **Tool-> Serial Monitor** 打开 Arduino IDE 的 **串口监视器**。将波特率设置为 **115200**。结果应如下图所示。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/3.png" style={{width:700, height:'auto'}}/></div><br />

您可以输入以下命令来控制 MP3 模块：

- 输入 `v{num}` 设置播放音量，例如 v20 表示将播放音量设置为 20。
- 输入 `m{1~5}` 设置播放模式。
- 输入 `b{num}` 播放指定索引的音乐。
- 输入 `+`，音量增加。
- 输入 `-`，音量减少。
- 输入 `n`，下一首。
- 输入 `p`，上一首。

您可以更加创意地添加更多 MP4 功能。

## 示例 2：手势控制音乐

**步骤 1.** 所需材料

本教程将使用 **Arduino UNO R4 WiFi** 作为主控板，您可以将手指放在手势传感器前，传感器将识别您的手势以控制音乐播放器。您需要准备以下材料：

<div class="table-center">
	<table align="center">
		<tr>
			<th>Arduino UNO R4 WiFi</th>
			<th>Grove - MP3 v4.0</th>
      		<th>Grove 智能红外手势传感器 (PAJ7660)</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/7.png" 
style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/0.jpg" 
style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/main.jpg" 
style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Arduino-Uno-Rev4-WiFi-p-5717.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}>立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-MP3-V4-p-5862.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}>立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
      		<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Smart-IR-Gesture-Sensor-p-5721.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}>立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

**步骤 2.** 将 Grove 智能红外手势传感器 (PAJ7660) 的 4 位 DIP 开关拨到 IIC 模式。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/IIC.png" style=
{{width:100, height:'auto'}}/></div>

从左到右的第二个开关需要设置为 OFF，其他开关均设置为 ON。

**步骤 3.** 硬件连接

将 Grove - MP3 V4.0 连接到 Arduino UNO R4 WiFi 的 **UART** 端口，将 Grove 手势传感器连接到 Arduino UNO R4 WiFi 的 **IIC** 端口，将 SD 卡插入 **Grove-mp3-v4** 的卡槽中，然后通过 USB 数据线将 Arduino 连接到电脑。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/6.jpg" style=
{{width:500, height:'auto'}}/></div>

**步骤 4.** 打开 Arduino IDE，以下是 `Gesture_Control_Music` 示例代码：

```cpp
#include "WT2605C_Player.h"
#include "Gesture.h"
#include <SoftwareSerial.h>

SoftwareSerial SSerial(2, 3); //使用 D2,D3 模拟 RX,TX
WT2605C<SoftwareSerial> Mp3Player;
pag7660 Gesture; // 默认使用组合模式

#define COMSerial SSerial
#define ShowSerial Serial

void setup() {
  ShowSerial.print(1);
  ShowSerial.begin(9600);
  COMSerial.begin(115200);
  Mp3Player.init(COMSerial);
  ShowSerial.println("初始化完成");

  if(Gesture.init()) {
        ShowSerial.println("PAG7660 初始化成功");
        ShowSerial.println("请输入您的手势：\n");
    } else {
        ShowSerial.println("PAG7660 初始化失败");
    }
}

void loop() {
    int ans;
    pag7660_gesture_t result;
    if (Gesture.getResult(result)) {
        ans = printResultCombinedMode(result);
        // ShowSerial.println("ans=");
        // ShowSerial.print(ans);
        playSong(ans);
    }
}

int playSong(int index){
    //如果 index 等于 0，则不播放音乐
    if(index==0){
      return 0;
    }
    Mp3Player.playSDRootSong(index);
    ShowSerial.println("播放音乐: " + String(index));
    return 1;
}

int printResultCombinedMode(const pag7660_gesture_t& result) {

    int ans = 0;
    const char *cursor_str[] = {
        NULL,
        "点击",
        "抓取",
        "捏合",
    };

    switch (result.type) {
    case 0:
        switch (result.cursor.type) {
        case 1:
        case 2:
        case 3:
            if (result.cursor.select)
                ShowSerial.println(cursor_str[result.cursor.type]);
            break;
        default:
            break;
        }
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        ans = result.type;
        ShowSerial.println("手指数量");
        break;
    case 6:
        ans = result.type;
        ShowSerial.print("右旋 ");
        ShowSerial.println(result.rotate);
        break;
    case 7:
        ans = result.type;
        ShowSerial.print("左旋 ");
        ShowSerial.println(result.rotate);
        break;
    case 8:
        ans = result.type;
        ShowSerial.println("向左滑动");
        break;
    case 9:
        ans = result.type;
        ShowSerial.println("向右滑动");
        break;
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
        ans = result.type;
        ShowSerial.print(result.type - 19 + 1);
        ShowSerial.println("-手指推");
        break;
    default:
        break;
    }
    return ans;
}
```

**步骤 5.** 上传示例代码。如果您不知道如何上传代码，请查看 [如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。通过点击 **工具->串口监视器** 打开 Arduino IDE 的 **串口监视器**。有效手势可以参考 [这里](https://wiki.seeedstudio.com/cn/grove_gesture_paj7660/#hardware-overview)，结果应如下图所示。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/5.png" style={{width:800, height:'auto'}}/></div>

## 常见问题

### 问：TF卡无法识别？

**答：** 检查TF卡的文件系统，确保其为FAT16或FAT32文件系统。

## 资源

- **[ZIP]** [Grove-MP3 V4 原理图和PCB](https://files.seeedstudio.com/wiki/grove-mp3-v4/Grove-MP3-V4_SCH&PCB.zip)
- **[PDF]** [Grove-MP3 V4 原理图](https://files.seeedstudio.com/wiki/grove-mp3-v4/Grove-MP3-V4.pdf)
- **[PDF]** [Grove-MP3 V4 数据手册](https://files.seeedstudio.com/wiki/grove-mp3-v4/WT2605C-32N-A001-datasheet.pdf)

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