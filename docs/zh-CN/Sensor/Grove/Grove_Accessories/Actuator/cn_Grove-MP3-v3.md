---
title: Grove - MP3 v3.0
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Grove-MP3-v3/
slug: /cn/Grove-MP3-v3
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-MP3-V3/img/Grove-MP3-V3-preview.jpg)

Grove - MP3 是一个基于 WT2003S-20SS 音频解码器的 20x40mm 超迷你音乐模块。它支持采样率为 8~48KHz、比特率为 8~320Kbps 的高质量 MP3 格式音频文件。为了扩展存储容量，我们在模块背面添加了一个 TF 卡插槽。TF 卡采用 DIO 接口模式，支持最大 32GB，支持 FAT16 和 FAT32 文件系统。现在有了这个小巧的音乐模块，你可以随身携带成百上千首音乐。

顾名思义，Grove - MP3 V3 是 Grove - MP3 V2 的升级版本。与 Grove MP3 V2 相比，V3 增加了一个 JST2.0 扬声器端口，使您可以同时通过扬声器和 3.5mm 耳机输出音频。

<p style={{}}><a href="https://www.seeedstudio.com/Grove-MP3-V3-p-4297.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特性

- 支持 MP3 格式音频文件
- 采样率：8~48KHz / 比特率：8~320Kbps
- 支持最大 32GB TF 卡
- 支持扬声器和耳机同时输出音频
- 兼容 3.3V 和 5V 平台
- 支持 32 级音量调节

## 规格

| 参数 | 值 |
|---|---|
| 供电电压 | 3.3V / 5V |
| 采样率 | 8~48KHz / 比特率：8~320Kbps |
| 接口 | I2C（默认 I2C 地址：0x36）且不可更改 |
| 输出 | 扬声器 / 3.5mm 音频插孔 |
| 分辨率 | 支持 32 级音量调节 |

## 硬件概览

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Grove-MP3-V3/img/hardware.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-MP3-V3/img/hardware.jpg" /></a></p>
  </figure>
</div>

## 支持的平台

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## 入门指南

### 使用 Arduino

**所需材料**

| Seeeduino V4.2 | Base Shield | Grove - MP3 V3 -音乐播放器 |
|----------------|-------------|-------------------------------|
|![图片](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![图片](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![图片](https://files.seeedstudio.com/wiki/Grove-MP3-V3/img/Grove-MP3-V3-thumbnail.jpg)|
|[立即购买](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[立即购买](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[立即购买](https://www.seeedstudio.com/Grove-MP3-V3-p-4297.html)|

>此外，您可以考虑我们的新产品 [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)，它相当于 Seeeduino V4.2 和 Base Shield 的组合。

#### 硬件连接

- **步骤 1.** 将 Grove - MP3 V3 音乐播放器连接到 Base Shield 的 **D2** 端口。

- **步骤 2.** 将 Grove - Base Shield 插入 Seeeduino。

- **步骤 3.** 使用 USB 数据线将 Seeeduino 连接到电脑。

![](https://files.seeedstudio.com/wiki/Grove-MP3-V3/img/connect.png)

#### 软件

:::提示
如果这是您第一次使用 Arduino，我们强烈建议您在开始之前查看 [Arduino 入门指南](https://wiki.seeedstudio.com/cn/Getting_Started_with_Arduino/)。
:::

- **步骤 1.** 将您的 `.mp3` 音乐文件复制到 TF 卡，并将它们保存到 TF 卡的根目录。

- **步骤 2.** 从 Github 下载 [Seeed_Serial_MP3](https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player) 库。

:::注意
参考 [如何安装库](https://wiki.seeedstudio.com/cn/How_to_install_Arduino_Library/) 来为 Arduino 安装库。
:::

- **步骤 3.** 重启 Arduino IDE。通过以下路径打开 **WT2003S_Terminal_Player** 示例：**文件** → **示例** → **Seeed_Serial_MP3_Player** → **WT2003S_Terminal_Player**。您可以使用此模块播放 `.mp3` 格式的音乐文件，并通过 3.5mm 音频插孔、JST2.0 扬声器端口播放音频，甚至可以同时输出。

以下是 WT2003S_Terminal_Player 示例代码：

```cpp
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
    if (diskstatus && 0x02) { // 有 SD 卡
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
    ShowSerial.print("索引");
    ShowSerial.print("<-------->");
    ShowSerial.print("名称");
    ShowSerial.print("-------------------");
    ShowSerial.println();
    ShowSerial.println("-------------------SPI Flash-------------------------------");
    for (int i = 0 ; i < spi_flash_songs; i++) {
        ShowSerial.print("-------------------");
        ShowSerial.print(SPISong[i].index);
        ShowSerial.print("<-------->");
        ShowSerial.print(SPISong[i].name);
        ShowSerial.print("-------------------");
        ShowSerial.println();
    }
    ShowSerial.println("-------------------SD 卡-------------------------------");
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
                    ShowSerial.print("音量增加: ");
                    vol = Mp3Player.getVolume();
                    Mp3Player.volume(++vol);
                    ShowSerial.print(vol);
                    ShowSerial.println();
                    break;
                }
            case '-': {
                    ShowSerial.print("音量减少: ");
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
                    ShowSerial.print("状态:");
                    status = Mp3Player.getStatus();
                    if (status == 0x01) {
                        ShowSerial.print("播放中");
                    }
                    if (status == 0x02) {
                        ShowSerial.print("停止");
                    }
                    if (status == 0x03) {
                        ShowSerial.print("暂停");
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
                ShowSerial.print("播放:");
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
    ShowSerial.println("MP3 命令列表:");
    ShowSerial.println("-----------------");
    ShowSerial.println("'+' 或 '-'  : 增加/减少音量");
    ShowSerial.println("'1' ~ '9'   : 选择歌曲");
    ShowSerial.println("'n'         : 下一首歌曲");
    ShowSerial.println("'s'         : 切换播放磁盘，SPI Flash");
    ShowSerial.println("'p'         : 播放或暂停");
    ShowSerial.println("'w'         : 设置播放模式为单次播放");
    ShowSerial.println("'x'         : 设置播放模式为单曲循环");
    ShowSerial.println("'y'         : 设置播放模式为全部循环");
    ShowSerial.println("'z'         : 设置播放模式为随机播放");
    ShowSerial.println("'c'         : 将 MP3 文件复制到 SPI Flash");
    ShowSerial.println("             (是的，这确实按复制顺序进行。)");
    ShowSerial.println();
    ShowSerial.println("按任意其他键显示此菜单");
    ShowSerial.println();
}
```

- **步骤 3.** 上传示例代码。如果您不知道如何上传代码，请查看[如何上传代码](https://wiki.seeedstudio.com/cn/Upload_Code/)。

- **步骤 4.** 打开 Arduino IDE 的 **串口监视器**，点击 **工具->串口监视器**。或者同时按下 ++ctrl+shift+m++ 键。将波特率设置为 **9600**。

- **步骤 5.** 结果应如下图所示。根据命令列表播放音乐或使用其他实用功能。

![](https://files.seeedstudio.com/wiki/Grove-MP3-V3/img/result.jpg)

## 常见问题解答

**Q1#** TF 卡无法识别。

**A1:** 检查 TF 卡的文件系统，确保其为 FAT16 或 FAT32 文件系统。

## 资源

- **[ZIP]** [Grove - MP3 V3 原理图](https://files.seeedstudio.com/wiki/Grove-MP3-V3/res/Grove-MP3.zip)
- **[PDF]** [WT2003S 数据手册](https://files.seeedstudio.com/wiki/Grove-MP3-V3/res/Grove-MP3.zip)

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>