---
description: Grove MP3 v4 の使い方を始めましょう。
title: Grove - MP3 v4.0
keywords:
- mp3
- grove
image: https://files.seeedstudio.com/wiki/grove-mp3-v4/0.webp
slug: /ja/grove_mp3_v4
last_update:
  date: 05/15/2025
  author: Carla
---


# Grove - MP3 v4.0

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/0.jpg" style={{width:600, height:'auto'}}/></div>


## 概要

このMP3モジュールをArduinoと組み合わせることで、マルチフォーマットの音楽プレーヤーに変身させることができます！この音楽モジュールは、WT2605CX高品質オーディオチップをベースにしており、MP3 V3よりも優れた性能を持ち、Groveインターフェース、スピーカーJSTインターフェース、3.5mmオーディオジャック、SDカードをサポートしています。また、SPI-Flash、TFカード、USBフラッシュディスクにも対応しています。

<p style={{}}><a href="https://www.seeedstudio.com/Grove-MP3-V4-p-5862.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## 特徴
- **複数の音楽フォーマット対応**: 高品質の音声フォーマット（8kbps～320kbps）をサポートし、美しい音質を提供。MP3、WAVフォーマットに対応。
- **複数のストレージフォーマット対応**: SPI-Flash、TFカード、USBフラッシュディスクをサポートし、FAT、FAT32ファイルシステムに対応。
- **制御モード**: 豊富なAT通信インターフェースでニーズに対応。
- **多彩な操作**: コマンドのランダム再生、シームレスループ再生機能などをサポート。
- **オーディオ出力モード**: サンプル用のデフォルトDAC出力。

## 仕様

| 仕様                                     | 詳細                                       |
| ---------------------------------------- | ------------------------------------------- |
| 入力                                     | 5V(DC)                                     |
| 動作電流（信号出力なしの状態）           | 15mA未満                                   |
| 動作電流（信号出力ありの状態）           | 40mA未満                                   |
| チップ                                   | WT2605CX                                   |
| チップLDO出力電圧                        | 3.3V                                       |
| チップ出力電流                           | 最大100mA                                  |
| 対応ファイルフォーマット                 | MP3, WAV, WMA                              |
| SDカードの最大メモリ対応                 | 32GB                                       |
| サンプリングレート                       | 8/11.025/12/16/22.05/24/32/44.1/48 (KHz)   |

## ハードウェア概要

<div style={{textAlign:'center'}}><img src="https://wdcdn.qpic.cn/MTY4ODg1Nzc0ODUwMjM3NA_716539_x5zKByNTcw7Jc8sR_1706149458?w=2608&h=1322&type=image/png" style={{width:750, height:'auto'}}/></div>

## はじめに

Grove MP3モジュールを初めて使用する場合、事前に曲が保存されたTFカードと、3.5mmオーディオケーブルのヘッドセットまたはスピーカー（デフォルトでキットに含まれています）が必要です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/1.jpg" style={{width:600, height:'auto'}}/></div>

### ソフトウェア準備

**ステップ1.** Arduinoアプリケーションを起動します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDEをダウンロード</font></span></strong></a>
</div>

**ステップ2.** 開発ボードモデルを選択し、Arduino IDEに追加します。

- **Seeed Studio XIAO SAMD21** を使用する場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/#software)** を参照して追加を完了してください。

- **Seeed Studio XIAO RP2040** を使用する場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO-RP2040-with-Arduino/#software-setup)** を参照して追加を完了してください。

- **Seeed Studio XIAO nRF52840** を使用する場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_BLE/#software-setup)** を参照して追加を完了してください。

- **Seeed Studio XIAO ESP32C3** を使用する場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/XIAO_ESP32C3_Getting_Started#software-setup)** を参照して追加を完了してください。

- **Seeed Studio XIAO ESP32S3** を使用する場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/xiao_esp32s3_getting_started#software-preparation)** を参照して追加を完了してください。

- **Seeeduino V4.3** を使用する場合は、**[このチュートリアル](https://wiki.seeedstudio.com/ja/Seeeduino_v4.2/)** を参照して追加を完了してください。

- **Arduino UNO R4 WiFi** を使用する場合は、**ツール -> ボード -> ボードマネージャ...** をクリックし、検索欄に「UNO R4 WiFi」と入力して最新バージョン（または使用したいバージョン）をインストールしてください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/4.png" style={{width:800, height:'auto'}}/></div>


### Arduinoライブラリ概要


#### 1. Seeed Serial MP3 Player ライブラリ


<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロードする</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

##### 関数

スケッチの開発を始める前に、ライブラリで利用可能な関数を確認しましょう。

- `void WT2605C<T>::init(T& serialPort)` —— MP3モジュールで使用されるシリアルポートを設定するための関数です。
    - **入力パラメータ**:

        - **serialPort**: シリアルポート。

- `uint8_t WT2605C<T>::playSPIFlashSong(uint16_t index)` —— 再生するFlashルートディレクトリのインデックスを指定します。ファイルはFlashにコピーされた順序でインデックス付けされます。
    - **入力パラメータ**:

        - **index**: 再生する曲のインデックス。

- `uint8_t WT2605C<T>::playSDRootSong(uint32_t index)` —— 再生するTFカードのルートディレクトリのインデックスを指定します。このコマンドはTFカード内のファイルをインデックス付けして再生します。ファイルの保存順序に影響され、インデックス順にソートされます。ファイルのインデックス順序は、TFカードにコピーされた時間に基づきます。
    - **入力パラメータ**:

        - **index**: 再生する曲のインデックス。

- `uint8_t WT2605C<T>::playSDSong(const char* fileName)` —— 指定されたファイル名の音楽を再生します。（ファイル名は8文字以内である必要があります）
    - **入力パラメータ**:

        - **fileName**: 再生したい音楽ファイルの名前。

- `uint8_t WT2605C<T>::playSDDirectorySong(const char* dir, uint16_t index)` —— TFカードフォルダ内のインデックス再生を指定します。このコマンドはルートディレクトリ内のフォルダを指定し、フォルダ内のオーディオをフォルダのインデックス番号に基づいて再生します（フォルダ名は8文字以内である必要があります）。フォルダ名は中国語、英語、数字、特殊記号をサポートします。中国語を使用する場合は、送信前に「UTF-16エンコーディング」形式でコードをトランスコードする必要があります。
    - **入力パラメータ**:

        - **dir**: 再生したい音楽があるフォルダ。
        - **index**: 音楽ファイルのインデックス。

- `uint8_t WT2605C<T>::playUDiskRootSong(uint32_t index)` —— USBメモリスティックのルートディレクトリインデックス再生を指定します。このコマンドはUSBフラッシュドライブ内のファイルをインデックス付けして再生します。ファイルの保存順序に影響され、インデックス順にソートされます。ファイルのインデックス順序は、USBフラッシュドライブにコピーされた時間に基づきます。
    - **入力パラメータ**:

        - **index**: 音楽ファイルのインデックス。
    
- `uint8_t WT2605C<T>::playUDiskSong(const char* fileName)` —— 再生するUSBメモリスティックのファイル名を指定します。このコマンドはルートディレクトリ内のファイル名を指定してオーディオを再生します（ファイル名は8文字以内である必要があります）。サポートされるオーディオ形式: `.mp3` および `.wav`。
    - **入力パラメータ**:

        - **fileName**: 再生したい音楽ファイルの名前。

- `uint8_t WT2605C<T>::playUDiskDirectorySong(const char* dir, uint32_t index)` —— USBメモリスティックフォルダ内で再生するファイル名を指定します。このコマンドはルートディレクトリ内のフォルダ内のファイル名を指定して再生します。（ファイル名は8文字以内である必要があります。）サポートされるオーディオ形式: `.mp3` および `.wav`。
    - **入力パラメータ**:

        - **dir**: 再生したい音楽があるフォルダ。
        - **index**: 音楽ファイル名。

- `uint8_t WT2605C<T>::pause_or_play()` —— 再生一時停止コマンド。再生状態では、このコマンドを送信すると再生が一時停止します。一時停止状態では、このコマンドを送信すると一時停止から再生が再開されます。停止状態では、このコマンドを送信すると現在のアドレスから再生が再開されます。
    - **出力パラメータ**: 実行成功時は0、失敗時は-1を返します。

- `uint8_t WT2605C<T>::stop()` —— 停止コマンド。このコマンドを送信すると、現在再生中の音楽が停止します。
    - **出力パラメータ**: 実行成功時は0、失敗時は-1を返します。

- `uint8_t WT2605C<T>::next()` —— 次の曲コマンド。このコマンドは現在のディレクトリ内で次の曲を再生します。最後の曲が再生されている場合、このコマンドを送信すると最初の曲が再生されます。
    - **出力パラメータ**: 実行成功時は0、失敗時は-1を返します。

- `uint8_t WT2605C<T>::previous()` —— 前の曲コマンド。このコマンドは現在のディレクトリ内で前の曲を再生します。最初の曲が再生されている場合、このコマンドを送信すると最後の曲が再生されます。
    - **出力パラメータ**: 実行成功時は0、失敗時は-1を返します。

- `uint8_t WT2605C<T>::volume(uint8_t vol)` —— 音量制御コマンド。音量は0から31までの32段階で、0はミュート、31は最大音量です。
    - **出力パラメータ**: 実行成功時は0、失敗時は-1を返します。

- `uint8_t WT2605C<T>::volumeDown()` —— 音量を下げる制御コマンド。
    - **出力パラメータ**: 実行成功時は0、失敗時は-1を返します。

- `uint8_t WT2605C<T>::volumeUp()` —— 音量を上げる制御コマンド。
    - **出力パラメータ**: 実行成功時は0、失敗時は-1を返します。

- `uint8_t WT2605C<T>::playMode(PLAY_MODE mode)` —— 再生モードを指定します。このコマンドは通常の通信状態で再生モードを変更し、電源オフ時のメモリ機能を持ちます。
    - **入力パラメータ**:

        - **mode**: 
        
            1. **CYCLE**: 全トラックのループモード。
            2. **SINGLE_CYCLE**: 単一曲のループ再生モード。
            3. **DIR_CYCLE**: フォルダループモード。
            4. **RANDOM**: ランダム再生モード。
            5. **SINGLE_SHOT**: 単一曲再生モード。

    - **出力パラメータ**: 実行成功時は0、失敗時は-1を返します。

- `uint8_t WT2003S<T>::cutInPlay(STORAGE device, uint32_t index)` —— 挿入コマンド。このコマンドは再生状態でのみ挿入可能で、停止状態では無効です。このコマンドが送信されると、再生中のトラックが即座に一時停止され、その後、このコマンドで指定された再生トラックが実行されます。再生が終了すると、元の一時停止されたトラックが再生されます。

    - **入力パラメータ**:

        - **device**: 

            1. **SPIFLASH**: 挿入されたFLASH内のインデックスアドレスを指定します。
            2. **SD**: SDカード内の指定されたインデックスアドレスを指定します。
            3. **UDISK**: USBメモリースティック内の指定されたインデックスアドレスを指定します。

        - **index**: 音楽ファイルのインデックス。

    - **出力パラメータ**: 実行が成功した場合は0を返し、失敗した場合は-1を返します。


##### デフォルト変数

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

##### インストール

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Serial_MP3_Player" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロードする</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

ZIP形式のライブラリをダウンロードした後、Arduino IDEを開き、**スケッチ > ライブラリをインクルード > .ZIPライブラリを追加**をクリックします。ダウンロードしたZIPファイルを選択し、ライブラリが正しくインストールされると、通知ウィンドウに**ライブラリがライブラリに追加されました**と表示されます。これでライブラリのインストールが成功したことを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

#### 2. Grove ジェスチャーライブラリ

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Grove_Gesture/tree/dev" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> ライブラリをダウンロードする</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" 
viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 
'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 
1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.
44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.
53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

##### 関数

スケッチの開発を始める前に、ライブラリで利用可能な関数を確認しましょう。

1. `bool init()` —— この関数はGrove Gesture Sensorを初期化し、初期化が成功した場合は**True**を返し、失敗した場合は**False**を返します。

2. `bool getResult(paj7620_gesture_t& res)` —— この関数は、センサーが認識したジェスチャーの結果を取得するために使用されます。

##### インストール

ZIP形式のライブラリをダウンロードした後、Arduino IDEを開き、**スケッチ > ライブラリをインクルード > .ZIPライブラリを追加**をクリックします。ダウンロードしたZIPファイルを選択し、ライブラリが正しくインストールされると、通知ウィンドウに**ライブラリがライブラリに追加されました**と表示されます。これでライブラリのインストールが成功したことを意味します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

<br></br>

## デモ 1: Seeeduino の例

ライブラリをインストールし、基本的な機能を理解したところで、Seeeduino V4.3 を使用していくつかの例を実行し、その動作を確認してみましょう。

**ステップ 1.** 必要な材料

このチュートリアルでは、Seeeduino V4.3 を例にとり、Grove MP3 モジュールの使用方法を説明します。そのため、以下の材料を準備する必要があります。

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
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-MP3-V3-p-4297.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

**ステップ 2.** ハードウェア接続

Grove - MP3 V4.0 を Seeeduino V4.3 の **UART** ポートに接続します。その後、Seeeduino を USB ケーブルを使用して PC に接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/2.jpg" style={{width:600, height:'auto'}}/></div><br />

**ステップ 3.** **WT2605C_Terminal_player** の例を以下のパスから開きます: **File** → **Examples** → **Seeed_Serial_MP3_Player** → **WT2605C_Terminal_player**。このモジュールを使用して `.mp3` 形式の音楽ファイルを再生できます。また、3.5mm オーディオジャック、JST2.0 スピーカーポートを介したスピーカー、さらには両方を同時に出力することも可能です。

`WT2605C_Terminal_player` の例コードは以下の通りです:

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
      if(!err) ShowSerial.println("音量を設定しました: " + String(vol));
      else ShowSerial.println("エラー");
    }
    
    else if(input.startsWith("m")) {
      if(input.substring(1) == "1"){
        ShowSerial.println("1");
        int err = Mp3Player.playMode(0x00);
        ShowSerial.println(err);
        if(!err) ShowSerial.println("再生モードがループモードに設定されました。");
        else ShowSerial.println("エラー");
      }
      else if(input.substring(1) == "2"){
        ShowSerial.println("2");
        int err = Mp3Player.playMode(0x01);
        ShowSerial.println(err);
        if(!err) ShowSerial.println("再生モードが単一曲ループモードに設定されました。");
        else ShowSerial.println("エラー");
      }
      else if(input.substring(1) == "3"){
        ShowSerial.println("3");
        int err = Mp3Player.playMode(0x02);
        ShowSerial.println(err);
        if(!err) ShowSerial.println("再生モードがフォルダループモードに設定されました。");
        else ShowSerial.println("エラー");
      }
      else if(input.substring(1) == "4"){
        ShowSerial.println("4");
        int err = Mp3Player.playMode(0x03);
        ShowSerial.println(err);
        if(!err) ShowSerial.println("再生モードがランダムモードに設定されました。");
        else ShowSerial.println("エラー");
      }
      else if(input.substring(1) == "5"){
        ShowSerial.println("5");
        int err = Mp3Player.playMode(0x04);
        ShowSerial.println(err);
        if(!err) ShowSerial.println("再生モードが単一曲モードに設定されました。");
        else ShowSerial.println("エラー");
      }
    }
    else if(input.startsWith("b")){
      int index = input.substring(1).toInt();
      Mp3Player.playSDRootSong(index);
      ShowSerial.println("音楽を再生: " + String(index));
    }
    else if(input.startsWith("+")){
      int err = Mp3Player.volumeUp();
      if(!err) ShowSerial.println("音量を上げました");
      else ShowSerial.println("エラー");
    }
    else if(input.startsWith("-")){
      int err = Mp3Player.volumeDown();
      if(!err) ShowSerial.println("音量を下げました");
      else ShowSerial.println("エラー");
    }
    else if(input.startsWith("n")){
      Mp3Player.next();
      ShowSerial.println("次の曲");
    }
    else if(input.startsWith("p")){
      Mp3Player.previous();
      ShowSerial.println("前の曲");
    }
  }
}
```

**ステップ 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。Arduino IDE の **シリアルモニタ** を開くには、**Tool-> Serial Monitor** をクリックします。ボーレートを **115200** に設定してください。結果は以下のようになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/3.png" style={{width:700, height:'auto'}}/></div><br />

MP3 モジュールを制御するためにいくつかのコマンドを入力できます。

- `v{num}` を入力して再生音量を設定します。例: v20 は再生音量を 20 に設定します。
- `m{1~5}` を入力して再生モードを設定します。
- `b{num}` を入力して指定されたインデックスの音楽を再生します。
- `+` を入力して音量を上げます。
- `-` を入力して音量を下げます。
- `n` を入力して次の曲を再生します。
- `p` を入力して前の曲を再生します。

## デモ 2: ジェスチャーコントロールによる音楽操作

**ステップ 1.** 必要な材料

このチュートリアルでは、**Arduino UNO R4 WiFi** をマスターコントロールとして使用します。ジェスチャーセンサーの前に指をかざすことで、センサーが指を認識し、音楽プレーヤーを操作します。そのため、以下の材料を準備する必要があります。

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
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-MP3-V4-p-5862.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Smart-IR-Gesture-Sensor-p-5721.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

**ステップ 2.** Grove Smart IR Gesture Sensor (PAJ7660) の4ポジションDIPスイッチをIICポジションに設定します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/IIC.png" style=
{{width:100, height:'auto'}}/></div>

左から右への2番目のギアをOFFに設定し、他はすべてONにします。

**ステップ 3.** ハードウェア接続

Grove - MP3 V4.0をArduino UNO R4 WiFiの**UART**ポートに接続し、Grove Gesture SensorをArduino UNO R4 WiFiの**IIC**ポートに接続します。その後、SDカードを**Grove-mp3-v4**のカードスロットに挿入し、USBケーブルを使用してArduinoをPCに接続します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/6.jpg" style=
{{width:500, height:'auto'}}/></div>

**ステップ 4.** Arduino IDEを開きます。`Gesture_Control_Music` のサンプルコードは以下の通りです：

```cpp
#include "WT2605C_Player.h"
#include "Gesture.h"
#include <SoftwareSerial.h>

SoftwareSerial SSerial(2, 3); // D2, D3を使用してRX, TXをシミュレート
WT2605C<SoftwareSerial> Mp3Player;
pag7660 Gesture; // デフォルトでコンバインドモードを使用

#define COMSerial SSerial
#define ShowSerial Serial

void setup() {
  ShowSerial.print(1);
  ShowSerial.begin(9600);
  COMSerial.begin(115200);
  Mp3Player.init(COMSerial);
  ShowSerial.println("初期化完了");

  if(Gesture.init()) {
        ShowSerial.println("PAG7660の初期化に成功しました");
        ShowSerial.println("ジェスチャーを入力してください:\n");
    } else {
        ShowSerial.println("PAG7660の初期化に失敗しました");
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
    // indexが0の場合、曲を再生しない
    if(index==0){
      return 0;
    }
    Mp3Player.playSDRootSong(index);
    ShowSerial.println("音楽を再生: " + String(index));
    return 1;
}

int printResultCombinedMode(const pag7660_gesture_t& result) {

    int ans = 0;
    const char *cursor_str[] = {
        NULL,
        "タップ",
        "グラブ",
        "ピンチ",
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
        ShowSerial.println("指の数");
        break;
    case 6:
        ans = result.type;
        ShowSerial.print("右回転 ");
        ShowSerial.println(result.rotate);
        break;
    case 7:
        ans = result.type;
        ShowSerial.print("左回転 ");
        ShowSerial.println(result.rotate);
        break;
    case 8:
        ans = result.type;
        ShowSerial.println("左スワイプ");
        break;
    case 9:
        ans = result.type;
        ShowSerial.println("右スワイプ");
        break;
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
        ans = result.type;
        ShowSerial.print(result.type - 19 + 1);
        ShowSerial.println("-指プッシュ");
        break;
    default:
        break;
    }
    return ans;
}
```

**ステップ 5.** デモをアップロードします。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。Arduino IDEの**シリアルモニター**を開くには、**ツール -> シリアルモニター**をクリックします。有効なジェスチャーについては[こちら](https://wiki.seeedstudio.com/ja/grove_gesture_paj7660/#hardware-overview)を参照してください。結果は以下のようになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/5.png" style={{width:800, height:'auto'}}/></div>

## FAQ

### Q: TFカードが認識されませんか？

**A:** TFカードのファイルシステムを確認し、FAT16またはFAT32ファイルシステムであることを確認してください。

## リソース

- **[ZIP]** [Grove-MP3 V4 SCH&PCB](https://files.seeedstudio.com/wiki/grove-mp3-v4/Grove-MP3-V4_SCH&PCB.zip)
- **[PDF]** [Grove-MP3 V4 SCH](https://files.seeedstudio.com/wiki/grove-mp3-v4/Grove-MP3-V4.pdf)
- **[PDF]** [Grove-MP3 V4 データシート](https://files.seeedstudio.com/wiki/grove-mp3-v4/WT2605C-32N-A001-datasheet.pdf)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>