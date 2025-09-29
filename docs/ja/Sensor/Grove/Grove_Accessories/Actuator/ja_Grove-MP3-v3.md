---
title: Grove - MP3 v3.0
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Grove-MP3-v3/
slug: /ja/Grove-MP3-v3
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-MP3-V3/img/Grove-MP3-V3-preview.jpg)

Grove - MP3は、WT2003S-20SSオーディオデコーダーをベースにした20x40mmの超小型音楽モジュールです。8~48KHzのサンプリングレートと8~320Kbpsのビットレートで高品質なMP3形式のオーディオファイルをサポートします。ストレージ容量を拡張するために、モジュールの背面にTFカードスロットを追加しました。TFカードはDIOインターフェースモードを採用し、最大32GBをサポートし、FAT16およびFAT32ファイルシステムに対応しています。この小さな音楽モジュールを使えば、数百から数千曲の音楽をポケットに持ち運ぶことができます。

名前が示す通り、Grove - MP3 V3はGrove - MP3 V2のアップグレード版です。Grove MP3 V2と比較して、V3ではJST2.0スピーカーポートが追加され、スピーカーと3.5mmイヤホンを同時に使用してオーディオを出力できるようになりました。

<p style={{}}><a href="https://www.seeedstudio.com/Grove-MP3-V3-p-4297.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴

- MP3形式のオーディオファイルをサポート
- サンプリングレート: 8~48KHz / ビットレート: 8~320Kbps
- 最大32GBのTFカードをサポート
- スピーカーとイヤホンで同時にオーディオ出力が可能
- 3.3Vおよび5Vプラットフォームに対応
- 32段階の音量調整をサポート

## 仕様

| パラメータ | 値 |
|---|---|
| 電源電圧 | 3.3V / 5V |
| サンプリングレート | 8~48KHz / ビットレート: 8~320Kbps |
| インターフェース | I2C（デフォルトI2Cアドレス: 0x36）& 変更不可 |
| 出力 | スピーカー / 3.5mmオーディオジャック |
| 解像度 | 32段階の音量調整をサポート |

## ハードウェア概要

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Grove-MP3-V3/img/hardware.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-MP3-V3/img/hardware.jpg" /></a></p>
  </figure>
</div>

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## はじめに

### Arduinoで遊ぶ

**必要な材料**

| Seeeduino V4.2 | Base Shield | Grove - MP3 V3 - ミュージックプレーヤー |
|--------------|-------------|-----------------|
|![画像を入力してください](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![画像を入力してください](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![画像を入力してください](https://files.seeedstudio.com/wiki/Grove-MP3-V3/img/Grove-MP3-V3-thumbnail.jpg)
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-MP3-V3-p-4297.html)|

>さらに、[Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)を検討することもできます。これはSeeeduino V4.2とBase Shieldの組み合わせに相当します。

#### ハードウェア接続

- **ステップ 1.** Grove - MP3 V3 ミュージックプレーヤーをBase Shieldの**D2**ポートに接続します。

- **ステップ 2.** Grove - Base ShieldをSeeeduinoに差し込みます。

- **ステップ 3.** USBケーブルを使用してSeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-MP3-V3/img/connect.png)

#### ソフトウェア

:::tip
        Arduinoを初めて使用する場合は、開始前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照することを強くお勧めします。
:::

- **ステップ 1.** `.mp3`形式の音楽ファイルをTFカードにコピーし、TFカードのルートディレクトリに保存します。

- **ステップ 2.** Githubから[Seeed_Serial_MP3](https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player)ライブラリをダウンロードします。

:::note
        Arduinoライブラリのインストール方法については、[ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library/)を参照してください。
:::

- **ステップ 3.** Arduino IDEを再起動します。**WT2003S_Terminal_Player**の例を次のパスから開きます：**File** → **Examples** → **Seeed_Serial_MP3_Player** → **WT2003S_Terminal_Player**。このモジュールを使用して`.mp3`形式の音楽ファイルを再生し、3.5mmオーディオジャック、JST2.0スピーカーポートを介してスピーカーを使用するか、さらには同時に両方を出力することができます。

WT2003S_Terminal_Playerの例コードは以下の通りです：

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
    if (diskstatus && 0x02) { // SDカードがある場合
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
                    ShowSerial.print("音量を上げる: ");
                    vol = Mp3Player.getVolume();
                    Mp3Player.volume(++vol);
                    ShowSerial.print(vol);
                    ShowSerial.println();
                    break;
                }
            case '-': {
                    ShowSerial.print("音量を下げる: ");
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
                    ShowSerial.print("ステータス:");
                    status = Mp3Player.getStatus();
                    if (status == 0x01) {
                        ShowSerial.print("再生中");
                    }
                    if (status == 0x02) {
                        ShowSerial.print("停止");
                    }
                    if (status == 0x03) {
                        ShowSerial.print("一時停止");
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
                ShowSerial.print("再生:");
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
    ShowSerial.println("MP3コマンドリスト:");
    ShowSerial.println("-----------------");
    ShowSerial.println("'+' または '-'  : 音量を上げる/下げる");
    ShowSerial.println("'1' ~ '9'   : 曲を選択");
    ShowSerial.println("'n'         : 次の曲");
    ShowSerial.println("'s'         : 再生ディスクを切り替え、SPIフラッシュ");
    ShowSerial.println("'p'         : 再生または一時停止");
    ShowSerial.println("'w'         : 再生モードを単一再生に設定");
    ShowSerial.println("'x'         : 再生モードを単一ループに設定");
    ShowSerial.println("'y'         : 再生モードを全ループに設定");
    ShowSerial.println("'z'         : 再生モードをランダムに設定");
    ShowSerial.println("'c'         : MP3をSPIフラッシュにコピー");
    ShowSerial.println("             (はい、これはコピー順序に従います。)");
    ShowSerial.println();
    ShowSerial.println("その他のキーを押すとこのメニューが表示されます");
    ShowSerial.println();
}
```

- **ステップ 3.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

- **ステップ 4.** Arduino IDEの**シリアルモニター**を開きます。**ツール -> シリアルモニター**をクリックするか、++ctrl+shift+m++キーを同時に押します。ボーレートを**9600**に設定してください。

- **ステップ 5.** 結果は以下のように表示されます。コマンドリストに従って音楽を再生したり、その他の便利な機能を使用してください。

![](https://files.seeedstudio.com/wiki/Grove-MP3-V3/img/result.jpg)

## FAQ

**Q1#** TFカードが認識されません。

**A1:** TFカードのファイルシステムを確認し、FAT16またはFAT32ファイルシステムであることを確認してください。

## リソース

- **[ZIP]** [Grove - MP3 V3 回路図](https://files.seeedstudio.com/wiki/Grove-MP3-V3/res/Grove-MP3.zip)
- **[PDF]** [WT2003S データシート](https://files.seeedstudio.com/wiki/Grove-MP3-V3/res/Grove-MP3.zip)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>