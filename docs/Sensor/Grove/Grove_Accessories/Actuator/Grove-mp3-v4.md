---
description: Getting started with grove mp3 v4.
title: Grove - MP3 v4.0
keywords:
- mp3
- grove
image: https://files.seeedstudio.com/wiki/grove-mp3-v4/0.webp
slug: /grove_mp3_v4
last_update:
  date: 12/13/2024
  author: Carla
---

# Grove - MP3 v4.0

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/0.jpg" style={{width:600, height:'auto'}}/></div>

## Introduction

This MP3 module with an Arduino can be turned into your multi-format music player! It's a Music module based on WT2605CX high-quality audio chip, which has better performance then MP3 V3 and supports Grove interface, Speaker JST interface, 3.5mm audio jack and SD card, supporting SPI-Flash, TF card, and USB flash disk.

<p style={{}}><a href="https://www.seeedstudio.com/Grove-MP3-V4-p-5862.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Feature

- Multiple Music Formats Supports: Support voice high-quality audio format, (8kbps~320kbps) with a beautiful sound, MP3, WAV format;
- Multiple Storage Format Support: Supports SPI-Flash, TF card, USB flash disk and support FAT, FAT32 file system;
- Control mode: Rich AT communication interface to meet your requirements;
- Rich Operation: supports randomized playback of commands, seamless loop playback function, and so on;
- Audio Output Mode: default DAC output for samples.

## Specification

| Specification                           | Details                                     |
| ---------------------------------------- | ------------------------------------------- |
| Input                                  | 5V(DC)                                     |
| Operating current (without signal output state) | less than 15 mA                            |
| Operating current (with signal output state)    | less than 40 mA                            |
| Chip                                   | WT2605CX                                     |
| Chip LDO output voltage                | 3.3 V                                      |
| Chip output current                   | 100 mA(at Max.)                            |
| File formats supported                 | MP3, WAV, WMA                               |
| Maximum memory supported for SD card    | 32 GB                                      |
| Sampled rate                           | 8/11.025/12/16/22.05/24/32/44.1/48 (KHz)   |

## Hardware Overview

<div style={{textAlign:'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1Nzc0ODUwMjM3NA_716539_x5zKByNTcw7Jc8sR_1706149458?w=2608&h=1322&type=image/png" style={{width:750, height:'auto'}}/></div>

## Getting Started

If you are using the Grove MP3 module for the first time, then you may first need to have a TF card with songs already stored on it, and an output device, either a 3.5mm audio cable headset or a speaker. The speakers are in the kit by default.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/1.jpg" style={{width:600, height:'auto'}}/></div>

### Software Preparation

**Step 1.** Launch the Arduino application.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
</div>

**Step 2.** Select your development board model and add it to the Arduino IDE.

- If you want to use **Seeed Studio XIAO SAMD21** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/Seeeduino-XIAO/#software)** to finish adding.

- If you want to use **Seeed Studio XIAO RP2040** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#software-setup)** to finish adding.

- If you want to use **Seeed Studio XIAO nRF52840** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup)** to finish adding.

- If you want to use **Seeed Studio XIAO ESP32C3** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started#software-setup)** to finish adding.

- If you want to use **Seeed Studio XIAO ESP32S3** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started#software-preparation)** to finish adding.

- If you want to use **Seeeduino V4.3** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/Seeeduino_v4.2/)** to finish adding.

- If you want to use **Arduino UNO R4 WiFi** for the later routines, please click **Tools-> Board-> Boards Manager...**, print keyword "UNO R4 WiFi" in the searching blank and install the latest version (or the version you want to use).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/4.png" style={{width:800, height:'auto'}}/></div>

### Arduino Library Overview

#### 1. Seeed Serial MP3 Player Library

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

##### Function

Before we get started developing a sketch, let's look at the available functions of the library.

- `void WT2605C<T>::init(T& serialPort)` —— This function is responsible for configuring the serial port used by the MP3 module.
  - **Input Parameters**:

    - **serialPort**: The serial port.

- `uint8_t WT2605C<T>::playSPIFlashSong(uint16_t index)` —— Specify the Flash root directory index to play. The files are indexed in the order in which they were copied into Flash.
  - **Input Parameters**:

    - **index**: Play the index of the song.

- `uint8_t WT2605C<T>::playSDRootSong(uint32_t index)` —— Specify the TF card root directory index for playback. This command indexes the files in the TF card for playback, affected by the order in which the files are stored, and the files are sorted according to the indexing order. The order of file indexing is according to the time when the files are copied to the TF card.
  - **Input Parameters**:

    - **index**: Play the index of the song.

- `uint8_t WT2605C<T>::playSDSong(const char* fileName)` —— Plays music with the specified file name. (File names must be no larger than 8 characters)
  - **Input Parameters**:

    - **fileName**: The name of the music file you want to play.

- `uint8_t WT2605C<T>::playSDDirectorySong(const char* dir, uint16_t index)` —— Specify index playback in the TF card folder. This command can specify the folder in the root directory, and play the audio in the folder according to the folder index number (the folder name should not be larger than 8 characters) Folder name supports: Chinese, English, numbers, special symbols. If you use Chinese to send code, you need to use "UTF-16 encoding" format to transcode the code before sending it.
  - **Input Parameters**:

    - **dir**: The folder where the music you want to play is located.
    - **index**: Index of music files.

- `uint8_t WT2605C<T>::playUDiskRootSong(uint32_t index)` —— Specify the root directory index playback of the USB memory stick. This command indexes the files in the USB flash drive for playback, affected by the order in which the files are stored, the files are sorted according to the index order. The order of file indexing is according to the time when the files are copied to the USB flash drive.
  - **Input Parameters**:

    - **index**: Index of music files.

- `uint8_t WT2605C<T>::playUDiskSong(const char* fileName)` —— Specify the USB memory stick file name for playback. This command allows you to specify a file name in the root directory for audio playback (the file name must not be larger than 8 characters). Supported audio formats: `.mp3` and `.wav`.
  - **Input Parameters**:

    - **fileName**: The name of the music file you want to play.

- `uint8_t WT2605C<T>::playUDiskDirectorySong(const char* dir, uint32_t index)` —— Specify the file name to be played in the USB memory stick folder. This command specifies the name of a file in a folder in the root directory to be played. (File name must not be larger than 8 characters.) Audio formats supported: `.mp3` and `.wav`.
  - **Input Parameters**:

    - **dir**: The folder where the music you want to play is located.
    - **index**: music files name.

- `uint8_t WT2605C<T>::pause_or_play()` —— Pause Playback Command. In play state, send this command to pause the playback; in pause state, send this command to resume the playback from the pause. In stop play state, send this command to restart playback at current address.
  - **Output Parameters**: Returns 0 for successful execution and -1 for unsuccessful execution.

- `uint8_t WT2605C<T>::stop()` —— Stop command. Send this command to stop playing the currently playing music.
  - **Output Parameters**: Returns 0 for successful execution and -1 for unsuccessful execution.

- `uint8_t WT2605C<T>::next()` —— The next song order. This command triggers the playback of the next song in the current directory, and when the last song is played, sending this command triggers the playback of the first song.
  - **Output Parameters**: Returns 0 for successful execution and -1 for unsuccessful execution.

- `uint8_t WT2605C<T>::previous()` —— Previous song order. This command triggers the playback of the next song in the current directory, and when the first song is playing, sending this command triggers the playback of the last song.
  - **Output Parameters**: Returns 0 for successful execution and -1 for unsuccessful execution.

- `uint8_t WT2605C<T>::volume(uint8_t vol)` —— Volume Control Commands. There are 32 levels of volume, from 0 to 31, where 0 is mute and 31 is maximum volume.
  - **Output Parameters**: Returns 0 for successful execution and -1 for unsuccessful execution.

- `uint8_t WT2605C<T>::volumeDown()` —— Volume plus control commands.
  - **Output Parameters**: Returns 0 for successful execution and -1 for unsuccessful execution.

- `uint8_t WT2605C<T>::volumeUp()` —— Volume minus control command.
  - **Output Parameters**: Returns 0 for successful execution and -1 for unsuccessful execution.

- `uint8_t WT2605C<T>::playMode(PLAY_MODE mode)` —— Specifies the playback mode. This command modifies the playback mode in case of normal communication and has a power-down memory function.
  - **Input Parameters**:

    - **mode**:

            1. **CYCLE**: Loop mode for all tracks.
            2. **SINGLE_CYCLE**: Single song loop playback mode.
            3. **DIR_CYCLE**: Folder loop mode.
            4. **RANDOM**: Random playback mode.
            5. **SINGLE_SHOT**: Single song playback mode.

  - **Output Parameters**: Returns 0 for successful execution and -1 for unsuccessful execution.

- `uint8_t WT2003S<T>::cutInPlay(STORAGE device, uint32_t index)` —— Insert command. This command can only be inserted in the play state, and is not valid in the stop state. When this command is sent, the track being played will be paused immediately, and then the playback track specified in this command will be executed, and then the original paused track will be played after the playback. When the playback is finished, the original paused track will be played.
  - **Input Parameters**:

    - **device**:

            1. **SPIFLASH**: Specifies the index address within the interpolated FLASH;
            2. **SD**: Plugs the specified index address in the SD card;
            3. **UDISK**: Plug and play the specified index address in the USB memory stick.

    - **index**: Index of music files.

  - **Output Parameters**: Returns 0 for successful execution and -1 for unsuccessful execution.

##### Default Variables

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

##### Installation

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Since you have downloaded the zip Library, open your Arduino IDE, click on **Sketch > Include Library > Add .ZIP Library**. Choose the zip file you just downloaded，and if the library install correct, you will see **Library added to your libraries** in the notice window. Which means the library is installed successfully.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

#### 2. Grove Gesture Library

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Grove_Gesture/tree/dev" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2"
viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign:
'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48
1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.
44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.
53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

##### Function

Before we get started developing a sketch, let's look at the available functions of the library.

1. `bool init()` —— This function initialises the Grove Gesture Sensor and returns **True** if the initialisation is successful and **False** if it fails.

2. `bool getResult(paj7620_gesture_t& res)` —— The function serves to obtain the result of the sensor's recognition of the gesture.

##### Installation

Since you have downloaded the zip Library, open your Arduino IDE, click on **Sketch > Include Library > Add .ZIP Library**. Choose the zip file you just downloaded，and
if the library install correct, you will see **Library added to your libraries** in the notice window. Which means the library is installed successfully.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

<br></br>

## Demo 1: Seeeduino Example

Now that we have our library installed and we understand the basic functions, let's run some examples for our Seeeduino V4.3 to see how it behaves.

**Step 1.** Materials required

This tutorial will take Seeeduino V4.3 as an example to explain the use of Grove MP3 module. Then you may need to prepare the following materials.

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-MP3-V3-p-4297.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

**Step 2.** Hardware Connection

Connect the Grove - MP3 V4.0 to the **UART** port of the Seeeduino V4.3. Then, Connect the Seeeduino to PC via a USB cable.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/2.jpg" style={{width:600, height:'auto'}}/></div><br />

**Step 3.** Open **WT2605C_Terminal_player** example via the path: **File** → **Examples** → **Seeed_Serial_MP3_Player** → **WT2605C_Terminal_player**. You can play `.mp3` format music file using this moudle, and use 3.5mm Audio Jack, Speaker via JST2.0 speaker port or even output both in the same time.

The `WT2605C_Terminal_player` Example code is as follow:

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

**Step 4.** Upload the Demo. If you do not know how to upload the code, please check [How to upload code](https://wiki.seeedstudio.com/Upload_Code/). Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Set the baud rate to **115200**. The result should look like below.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/3.png" style={{width:700, height:'auto'}}/></div><br />

You can enter a number of commands to control the MP3 module.

- Enter `v{num}` to set the playback volume, e.g. v20 means set the playback volume to 20.
- Enter `m{1~5}` to set the playback mode.
- Enter `b{num}` to play the music at the specified index.
- Enter `+`, volume up.
- Enter `-`, volume down.
- Enter `n`, next song.
- Enter `p`, previous song.

You can be more creative and add more MP4 features.

## Demo 2: Gesture Control Music

**Step 1.** Materials required

This tutorial will use the **Arduino UNO R4 WiFi** as the master control, you can show your finger in front of the gesture sensor and the sensor will recognize your finger to control music player. Then you may need to prepare the following materials.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Arduino UNO R4 WiFi</th>
   <th>Grove - MP3 v4.0</th>
      <th>Grove Smart IR Gesture Sensor (PAJ7660)</th>
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
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</
font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-MP3-V4-p-5862.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</
font></span></strong>
    </a>
   </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
 <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Smart-IR-Gesture-Sensor-p-5721.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</
font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

**Step 2.** Turn the 4-position DIP switch of Grove Smart IR Gesture Sensor(PAJ7660) to the IIC position.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/IIC.png" style=
{{width:100, height:'auto'}}/></div>

The second gear from left to right needs to be set to OFF, all others are ON.

**Step 3.** Hardware Connection

Connect the Grove - MP3 V4.0 to the **UART** port of the Arduino UNO R4 WiFi, connect the Grove Gesture Sensor to the **IIC** port of Arduino UNO R4 WiFi, insert the SD card into the card slot of **Grove-mp3-v4**, then, connect the Arduino to PC via a USB cable.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/6.jpg" style=
{{width:500, height:'auto'}}/></div>

**Step 4.**  Open Arduibo IDE, The `Gesture_Control_Music` example code is as follow:

```cpp
#include "WT2605C_Player.h"
#include "Gesture.h"
#include <SoftwareSerial.h>

SoftwareSerial SSerial(2, 3); //use D2,D3 to simulate RX,TX
WT2605C<SoftwareSerial> Mp3Player;
pag7660 Gesture; // Combined mode is used by default

#define COMSerial SSerial
#define ShowSerial Serial


void setup() {
  ShowSerial.print(1);
  ShowSerial.begin(9600);
  COMSerial.begin(115200);
  Mp3Player.init(COMSerial);
  ShowSerial.println("initial finished");

  if(Gesture.init()) {
        ShowSerial.println("PAG7660 initialization success");
        ShowSerial.println("Please input your gestures:\n");
    } else {
        ShowSerial.println("PAG7660 initialization failed");
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
    //if index equate to 0, then don't play song
    if(index==0){
      return 0;
    }
    Mp3Player.playSDRootSong(index);
    ShowSerial.println("Play music: " + String(index));
    return 1;
}

int printResultCombinedMode(const pag7660_gesture_t& result) {

    int ans = 0;
    const char *cursor_str[] = {
        NULL,
        "Tap",
        "Grab",
        "Pinch",
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
        ShowSerial.println("finger number");
        break;
    case 6:
        ans = result.type;
        ShowSerial.print("Rotate Right ");
        ShowSerial.println(result.rotate);
        break;
    case 7:
        ans = result.type;
        ShowSerial.print("Rotate Left ");
        ShowSerial.println(result.rotate);
        break;
    case 8:
        ans = result.type;
        ShowSerial.println("Swipe Left");
        break;
    case 9:
        ans = result.type;
        ShowSerial.println("Swipe Right");
        break;
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
        ans = result.type;
        ShowSerial.print(result.type - 19 + 1);
        ShowSerial.println("-finger push");
        break;
    default:
        break;
    }
    return ans;
}
```

**Step 5.** Upload the Demo. If you do not know how to upload the code, please check [How to upload code](https://wiki.seeedstudio.com/Upload_Code/). Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Effective gestures you can refer to [here](https://wiki.seeedstudio.com/grove_gesture_paj7660/#hardware-overview), the result should look like below.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/5.png" style={{width:800, height:'auto'}}/></div>

## FAQ

### Q: TF card cannot be recognized?

**A:** Check the file system of the TF card, make sure it is FAT16 or FAT32 file system.

## Resources

- **[ZIP]** [Grove-MP3 V4 SCH&PCB](https://files.seeedstudio.com/wiki/grove-mp3-v4/Grove-MP3-V4_SCH&PCB.zip)
- **[PDF]** [Grove-MP3 V4 SCH](https://files.seeedstudio.com/wiki/grove-mp3-v4/Grove-MP3-V4.pdf)
- **[PDF]** [Grove-MP3 V4 datasheet](https://files.seeedstudio.com/wiki/grove-mp3-v4/WT2605C-32N-A001-datasheet.pdf)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
