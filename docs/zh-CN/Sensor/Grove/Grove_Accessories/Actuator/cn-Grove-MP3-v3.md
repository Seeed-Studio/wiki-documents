---
title: Grove - MP3 v3.0
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-MP3-v3/
slug: /Grove-MP3-v3
last_update:
  date: 03/21/2024
  author: WuFeifei
---


![](https://files.seeedstudio.com/wiki/Grove-MP3-V3/img/Grove-MP3-V3-preview.jpg)

Grove - MP3是一款基于WT2003S-20SS音频解码器的20x40mm超小型音乐模块。它支持采样率为8~48KHz、比特率为8~320Kbps的高质量MP3格式音频文件。为了扩展存储容量，我们在模块的背面增加了一个TF卡槽。TF卡采用DIO接口模式，支持最大32GB的存储容量，并兼容FAT16、FAT32文件系统。现在，有了这个小巧的音乐模块，你就可以把成千上万首歌曲装进口袋了。

顾名思义，Grove - MP3 V3是Grove - MP3 V2的升级版。与Grove MP3 V2相比，V3增加了一个JST2.0扬声器端口，这意味着你可以同时通过扬声器和3.5mm耳机输出音频。

<p style={{}}><a href="https://www.seeedstudio.com/Grove-MP3-V3-p-4297.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特点

- 支持MP3格式音频文件
- 采样率：8~48KHz / 比特率：8~320Kbps
- 支持最大32GB的TF卡
- 同时支持扬声器和耳机输出音频
- 兼容3.3V和5V平台
- 支持32级音量调节

## 规格

|参数|值|
|---|---|
|工作电压|3.3V / 5V|
|采样率| 8~48KHz / 比特率：8~320Kbps |
|接口|I2C（默认I2C地址：0x36）& 不可更改|
|输出|扬声器/3.5mm音频插孔|
|音量调节|支持32级音量调节|

## 硬件概述

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Grove-MP3-V3/img/hardware.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-MP3-V3/img/hardware.jpg" /></a></p>
  </figure>
</div>

## 支持的平台

| Arduino                                                      | 树莓派                                                       |                                                              |                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## 入门指南

### 玩转 Arduino

**所需材料**

| Seeeduino V4.2 | 基础扩展板                                                   | Grove - MP3 V3 -音乐播放器 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-MP3-V3/img/Grove-MP3-V3-thumbnail.jpg)|
|[立即获取](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即获取](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即获取](https://www.seeedstudio.com/Grove-MP3-V3-p-4297.html)|

>此外，你还可以考虑我们的新款[Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)，它相当于Seeeduino V4.2和Baseshield的组合。

#### 硬件连接

- **步骤 1.** 将 Grove - MP3 V3 音乐播放器连接到 Base Shield 的 **D2** 端口。

- **步骤 2.** 将 Grove - Base Shield 插入 Seeeduino。

- **步骤 3** 通过 USB 线缆将 Seeeduino 连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-MP3-V3/img/connect.png)

#### 软件

:::提示
        如果您是第一次使用Arduino，我们强烈建议您在开始之前先查看[Arduino入门指南](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 将您的 `.mp3` 音乐文件复制到TF卡中，并保存在TF卡的根目录下。

- **步骤 2.** 从Github下载[Seeed_Serial_MP3](https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player)库。

:::注意
        参考如何安装库的说明，以在Arduino中[安装库](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/)。
:::

- **步骤 3.** 重启Arduino IDE。通过以下路径打开**WT2003S_Terminal_Player**示例：**文件** → **示例** → **Seeed_Serial_MP3_Player** → **WT2003S_Terminal_Player**。您可以使用此模块播放 `.mp3` 格式的音乐文件，并通过3.5mm音频插孔、JST2.0扬声器端口上的扬声器进行输出，或者同时输出到两者。

WT2003S_Terminal_Player示例代码如下：

```C++
#include "WT2003S_Player.h"

#ifdef __AVR__
    #include <SoftwareSerial.h>
    SoftwareSerial SSerial(2, 3); // RX, TX
    #define COMSerial SSerial
    #define ShowSerial Serial

    WT2003S<SoftwareSerial> Mp3Player;
#endif

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
    #define COMSerial Serial1
    #define ShowSerial SerialUSB

    WT2003S<Uart> Mp3Player;
#endif

#ifdef ARDUINO_ARCH_STM32F4
    #define COMSerial Serial
    #define ShowSerial SerialUSB

    WT2003S<HardwareSerial> Mp3Player;
#endif


uint8_t vol = 10;
uint32_t spi_flash_songs = 0;
uint32_t sd_songs = 0;
STROAGE workdisk = SD;
struct Play_history {
    uint8_t disk;
    uint16_t index;
    char name[8];
}* SPISong, *SDSong;

void readSongName(struct Play_history* ph, uint32_t num, STROAGE disk) {
    Mp3Player.volume(0);
    delay(100);
    switch (disk) {
        case SPIFLASH:
            Mp3Player.playSPIFlashSong(0x0001);
            break;
        case SD:
            Mp3Player.playSDRootSong(0x0001);
            break;
        case UDISK:
            Mp3Player.playUDiskRootSong(0x0001);
            break;
    }
    ShowSerial.println("2...");
    for (int i = 0; i < num ; i++) {
        delay(300);
        ph[i].disk = disk;
        ph[i].index = Mp3Player.getTracks();
        Mp3Player.getSongName(ph[i].name);
        Mp3Player.next();
    }
    ShowSerial.println("4...");
    Mp3Player.pause_or_play();
    Mp3Player.volume(14);
    delay(100);
}

void getAllSong() {
    uint8_t diskstatus = Mp3Player.getDiskStatus();
    ShowSerial.println(diskstatus);
    spi_flash_songs = Mp3Player.getSPIFlashMp3FileNumber();
    ShowSerial.print("SPIFlash:");
    ShowSerial.println(spi_flash_songs);
    if (spi_flash_songs > 0) {
        SPISong = (struct Play_history*)malloc((spi_flash_songs + 1) * sizeof(struct Play_history));
        readSongName(SPISong, spi_flash_songs, SPIFLASH);
    }
    if (diskstatus && 0x02) { // have SD
        sd_songs = Mp3Player.getSDMp3FileNumber();
        ShowSerial.print("SD:");
        ShowSerial.println(sd_songs);
        if (sd_songs > 0) {
            SDSong = (struct Play_history*)malloc((sd_songs + 1) * sizeof(struct Play_history));
            ShowSerial.println("1...");
            readSongName(SDSong, sd_songs, SD);
        }
    }
}
void printSongs() {
    ShowSerial.print("-------------------");
    ShowSerial.print("index");
    ShowSerial.print("<-------->");
    ShowSerial.print("name");
    ShowSerial.print("-------------------");
    ShowSerial.println();
    ShowSerial.println("-------------------spi flash-------------------------------");
    for (int i = 0 ; i < spi_flash_songs; i++) {
        ShowSerial.print("-------------------");
        ShowSerial.print(SPISong[i].index);
        ShowSerial.print("<-------->");
        ShowSerial.print(SPISong[i].name);
        ShowSerial.print("-------------------");
        ShowSerial.println();
    }
    ShowSerial.println("-------------------sd card-------------------------------");
    for (int i = 0 ; i < sd_songs; i++) {
        ShowSerial.print("-------------------");
        ShowSerial.print(SDSong[i].index);
        ShowSerial.print("<-------->");
        ShowSerial.print(SDSong[i].name);
        ShowSerial.print("-------------------");
        ShowSerial.println();
    }
}

void setup() {
    while (!ShowSerial);
    ShowSerial.begin(9600);
    COMSerial.begin(9600);
    ShowSerial.println("+++++++++++++++++++++++++++++++++++++++++++++++++++++");
    Mp3Player.init(COMSerial);

    ShowSerial.println("0...");
    getAllSong();
    printMenu();
    printSongs();
}

void loop() {
    if (ShowSerial.available()) {
        char cmd = ShowSerial.read();
        switch (cmd) {
            case '+': {
                    ShowSerial.print("Volume up: ");
                    vol = Mp3Player.getVolume();
                    Mp3Player.volume(++vol);
                    ShowSerial.print(vol);
                    ShowSerial.println();
                    break;
                }
            case '-': {
                    ShowSerial.print("Volume down: ");
                    vol = Mp3Player.getVolume();
                    if (--vol > 31) {
                        vol = 0;
                    }
                    Mp3Player.volume(vol);
                    ShowSerial.print(vol);
                    ShowSerial.println();
                    break;
                }
            case 't': {
                    uint8_t status;
                    ShowSerial.print("status:");
                    status = Mp3Player.getStatus();
                    if (status == 0x01) {
                        ShowSerial.print("playing");
                    }
                    if (status == 0x02) {
                        ShowSerial.print("stop");
                    }
                    if (status == 0x03) {
                        ShowSerial.print("pause");
                    }
                    ShowSerial.println();
                    break;
                }
            case 'n': {
                    Mp3Player.next();
                    break;
                }
            case 'p': {
                    Mp3Player.pause_or_play();
                    break;
                }
            case 'w': {
                    Mp3Player.playMode(SINGLE_SHOT);
                    break;
                }
            case 'x': {
                    Mp3Player.playMode(SINGLE_CYCLE);
                    break;
                }
            case 'y': {
                    Mp3Player.playMode(CYCLE);
                    break;
                }
            case 'z': {
                    Mp3Player.playMode(RANDOM);
                    break;
                }
            case 'c': {
                    ShowSerial.print(Mp3Player.copySDtoSPIFlash());
                    break;
                }
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                ShowSerial.print("play:");
                if (workdisk == SD) {
                    Mp3Player.playSDRootSong(cmd - '0' - 1);
                    ShowSerial.print(cmd + ": ");
                    ShowSerial.print(SDSong[cmd - '0'].name);
                }
                if (workdisk == SPIFLASH) {
                    Mp3Player.playSPIFlashSong(cmd - '0' - 1);
                    ShowSerial.print(cmd + ": ");
                    ShowSerial.print(SPISong[cmd - '0'].name);
                }
                ShowSerial.println();
                break;
            default:
                break;
        }
    }
}

void printMenu(void) {
    ShowSerial.println("MP3 Command List:");
    ShowSerial.println("-----------------");
    ShowSerial.println("'+' or '-'  : raise/lower volume");
    ShowSerial.println("'1' ~ '9'   : select a song");
    ShowSerial.println("'n'         : next song");
    ShowSerial.println("'s'         : switch play disk, spi flash");
    ShowSerial.println("'p'         : play or pause");
    ShowSerial.println("'w'         : set playmode single no loop");
    ShowSerial.println("'x'         : set playmode single loop");
    ShowSerial.println("'y'         : set playmode all loop");
    ShowSerial.println("'z'         : set playmode random");
    ShowSerial.println("'c'         : Copy mp3 to SPIFlash");
    ShowSerial.println("             (Yes, this really does go by copy order.)");
    ShowSerial.println();
    ShowSerial.println("Any other key to show this menu");
    ShowSerial.println();
}
```

- **在Step 3.** 上传示例程序。如果您不知道如何上传代码，请查阅[如何上传代码](https://wiki.seeedstudio.com/Upload_Code/)。

- **步骤 4.** 通过点击 **工具->串口监视器** 打开Arduino IDE的**串口监视器**。或者同时按下 ++ctrl+shift+m++ 快捷键。将波特率设置为 **9600**。

- **步骤 5.**  结果应该如下所示。按照命令列表播放音乐或使用其他有用功能。

![](https://files.seeedstudio.com/wiki/Grove-MP3-V3/img/result.jpg)

## 常见问题解答

**Q1#** TF卡无法被识别。

**A1:** 检查TF卡的文件系统，确保它使用的是FAT16或FAT32文件系统。

## 资源

- **[ZIP]** [Grove - MP3 V3 原理图](https://files.seeedstudio.com/wiki/Grove-MP3-V3/res/Grove-MP3.zip)
- **[PDF]** [WT2003S 数据手册](https://files.seeedstudio.com/wiki/Grove-MP3-V3/res/Grove-MP3.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在此为您提供各种支持，以确保您在使用我们的产品时能够尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
