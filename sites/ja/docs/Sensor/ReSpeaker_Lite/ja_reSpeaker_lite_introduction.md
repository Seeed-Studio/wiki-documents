---
description: ReSpeaker Lite のはじめに
title: reSpeaker Lite のはじめに
keywords:
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reSpeaker_usb_v3
sku: 107990273,E24072601
last_update:
  date: 6/28/2024
  author: Jessie
---

## はじめに

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-107990273-respeaker-lite-45font.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-Lite-p-5928.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

XMOS XU316 AI サウンド & オーディオチップセットを搭載したこの開発ボードは、デュアルマイクアレイを内蔵し、音声認識やボイスコントロールに最適な優れたオーディオ処理性能を発揮します。高度なオンボード・オーディオ・フロントエンド・アルゴリズムを備えた XU316 チップは、干渉除去、エコーキャンセル、ノイズ抑制を提供します。I2S および USB 接続をサポートし、Seeed Studio XIAO ESP32S3 (Sense)、Adafruit QT Py、Raspberry Pi、PC と互換性があります。

## 特長

- **遠距離音声キャプチャ用デュアルマイクアレイ**：2 つの高性能デジタルマイクにより、2 つのマイク入力を用いてポイントノイズを打ち消すことで、騒がしい環境でも遠距離（最大 3 メートル）の音声やボイスを取得・抽出できます。
- **オンボード AI ASR アルゴリズム**：XMOS XU-316 AI サウンド & オーディオチップにより駆動され、キットには干渉除去 (IC)、アコースティックエコーキャンセル、ノイズ抑制、Voice-to-Noise Ratio (VNR)、Automatic Gain Control (AGC) の自然言語理解アルゴリズムが含まれており、高品質な音声キャプチャを実現します。
- **オープンソースを採用**：このボードは I2S 経由で一般的なハードウェアプラットフォーム（XIAO ESP32S3 (Sense)、Adafruit QT Py）と互換性があり、USB（Audio Class 2.0 (UAC2)）経由で Raspberry Pi、PC とも互換性があります。
- **オンボード RGB LED**：ボードにはプログラマブルな WS2812 RGB LED が搭載されており、カスタムエフェクトをサポートし、アプリケーション向けのビジュアルインターフェースを提供します。
- **外部電源サポート**：このボードは外部 5V 電源をサポートしており、さまざまなシナリオに柔軟に適用できます。
- **カスタム開発向け DFU**：このボードは DFU-Util を介したカスタムファームウェアの更新をサポートします。

## 仕様

|**コアチップ**|XMOS XU316|
| :- | :- |
|**デジタルマイク**|高性能デジタルマイク \* 2|
|**感度**|-26 dBFS|
|**アコースティックオーバーロードポイント**|120 dBL|
|**SNR**|64 dBA|
|**電源**|USB 5V、外部 5V|
|**寸法**|35\*86 mm|
|**オーディオ出力**|スピーカーコネクタ / 3.5mm ヘッドホンジャック|
|**最大サンプリングレート**|16Khz|
|**スピーカー**|5W アンプスピーカーをサポートします。|

## ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-9.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-10.png" alt="pir" width={800} height="auto" /></p>

## ピン配置

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/pinout.png" alt="pir" width={600} height="auto" /></p>

|**1**|**デュアルマイクアレイ**|高品質なオーディオ入力を提供します。|
| :- | :- | :- |
|**2**|**電源インジケータライト**|電源投入時に点灯します。|
|**3**|**RGB ライト**|プログラマブルな WS2812、ビジュアルインターフェースを提供します。|
|**4**|**ミュートインジケータライト**|ミュートボタンが押されると赤く点灯します。|
|**5**|**USR ボタン**|ユーザー定義ボタン。|
|**6**|**ミュートボタン**|押すとオーディオ入力をミュートします。|
|**7**|[XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html) **(オプション)**|さらなる開発と統合のために使用します。|
|**8**|**XU316 コアプロセッサ**|オーディオ処理と伝送を担当します。|
|**9**|**外部電源供給はんだパッド**|外部 5V 電源をサポートします。|
|**10**|**USB Type-C ポート**|電源供給とデータ伝送に使用します。|
|**11**|**スピーカーコネクタ**|オーディオ出力用。5W アンプスピーカーをサポートします。|
|**12**|**3.5mm ヘッドホンジャック**|オーディオを出力します。アクティブスピーカーまたはヘッドホンをこのポートに接続できます。|
|**13**|**外部電源パッド 1**|XIAO ESP32 上の未使用 IO ピン。|
|**14**|**外部電源パッド 2**|XU316 上の未使用 IO ピン。|
|**15**|**JTAG**|XU316 のデバッグおよびプログラミング用。|

## はじめてみよう

### 開封してすぐに使う

ReSpeaker Lite はプラグアンドプレイのモジュラー音声インターフェースで、ドライバは不要です。PC に接続するだけで、'ReSpeaker Lite' という名前の音声デバイスが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/pc.png" alt="pir" width={500} height="auto" /></p>

### ファームウェアの更新

#### [ファームウェアのダウンロード](https://github.com/respeaker/ReSpeaker_Lite/tree/master/xmos_firmwares)

:::tip note
ReSpeaker Lite ボードには 2 つのバージョンがあります：

USB サウンドデバイスとして使用するには、USB バージョンのファームウェア（デフォルトファームウェア）を書き込んでください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usb-version.png" alt="pir" width={300} height="auto" /></p>

XIAO ESP32S3 と一緒に使用するには、I2S バージョンのファームウェアを書き込んでください。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/i2s-version.png" alt="pir" width={300} height="auto" /></p>
:::

#### 配線

USB ケーブルを使って ReSpeaker Lite ボードを PC に接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usb-connect.png" alt="pir" width={500} height="auto" /></p>

#### DFU Util のインストール

[dfu-util](http://dfu-util.sourceforge.net/) は、USB ポート経由で Device Firmware Upgrade を行うためのコマンドラインツールです。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="win" label="Windows">

- `dfu-util-0.11-binaries.tar.xz` をダウンロードしてローカルシステムに展開します。
  例：D:\

- `dfu-util.exe` のディレクトリに移動します。<br/>
  例：D:\dfu-util-0.11-binaries\win64\（win32 を使用している場合は win64 を win32 に変更してください）

- システム環境変数 Path に `dfu-util.exe` のパスを追加します：`My Computer` > `Properties` > `Advanced` > `Environment Variables` > `Path`。
 変数 Path 内のパスはセミコロン ; で区切られていることに注意してください。
 これにより、コマンドプロンプトで dfu-util をグローバルに実行できるようになります。

- スタートメニューを開いて cmd と入力し、Enter キーを押します。表示されたターミナルで、dfu-util -V コマンドを使って dfu-util.exe のパスが設定されているか確認します：

```
C:\Users\yiping>dfu-util -V
dfu-util 0.11

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2021 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/
```

- `dfu-util -l` を実行して、ReSpeaker Lite が検出されているか確認します：

```
C:\Users\yiping>dfu-util -l
dfu-util 0.11

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2021 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/

Found DFU: [2886:0019] ver=0205, devnum=9, cfg=1, intf=0, path="1-1.4.1", alt=2, name="DFU DATAPARTITION", serial="0000000001"
Found DFU: [2886:0019] ver=0205, devnum=9, cfg=1, intf=0, path="1-1.4.1", alt=1, name="DFU UPGRADE", serial="0000000001"
Found DFU: [2886:0019] ver=0205, devnum=9, cfg=1, intf=0, path="1-1.4.1", alt=0, name="DFU FACTORY", serial="0000000001"
```

:::tip
もし次のような "Cannot open DFU device" エラーが出る場合は、この手順に従い続けてください。表示されない場合は、ステップ 3 に進んでファームウェアを書き込んでください。
:::

```
C:\Users\yiping>dfu-util -l
dfu-util 0.11

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2021 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/

Cannot open DFU device 2886:0019 found on devnum 9 (LIBUSB_ERROR_NOT_SUPPORTED)
```

- [Zadig](https://zadig.akeo.ie/) をインストールして開きます。`Options` -> `List All Devices` をクリックします。

- デバイスリストから `ReSpeaker 2 Mics Array` または `ReSpeaker Lite` または DFU `FACTORY (Interface 3)` を見つけ、`WINUSB v6.x.xxxx.xxxxx` ドライバをインストールします。

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/dfu-2mic.png" alt="pir" width={500} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/dfu-lite.png" alt="pir" width={500} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/dfu-fac.png" alt="pir" width={500} height="auto" /></p>

- インストールが完了したら（数分かかります）、電源を入れ直してから再度 `dfu-util -l` を実行します。これで ReSpeaker Lite が検出されるはずです。

</TabItem>

<TabItem value="mac" label="MacOS">

- [brew](https://brew.sh/) を使って dfu-util をインストールします：`brew install dfu-util`

- `dfu-util -l` を実行して、ReSpeaker Lite が検出されているか確認します：

```
➜  ~ dfu-util -l
dfu-util 0.11

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2021 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/

Found DFU: [2886:0019] ver=0205, devnum=1, cfg=1, intf=3, path="1-1", alt=2, name="DFU DATAPARTITION", serial="0000000001"
Found DFU: [2886:0019] ver=0205, devnum=1, cfg=1, intf=3, path="1-1", alt=1, name="DFU UPGRADE", serial="0000000001"
Found DFU: [2886:0019] ver=0205, devnum=1, cfg=1, intf=3, path="1-1", alt=0, name="DFU FACTORY", serial="0000000001"
```

</TabItem>

<TabItem value="lin" label="Linux">

- apt を使って dfu-util をインストールします：`sudo apt install dfu-util`

- `sudo dfu-util -l` を実行して、ReSpeaker Lite が検出されているか確認します：

```
pi@raspberrypi:~ $ sudo dfu-util -l
dfu-util 0.9

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2016 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/

Found DFU: [2886:0019] ver=0205, devnum=5, cfg=1, intf=3, path="1-1.1", alt=2, name="DFU DATAPARTITION", serial="0000000001"
Found DFU: [2886:0019] ver=0205, devnum=5, cfg=1, intf=3, path="1-1.1", alt=1, name="DFU UPGRADE", serial="0000000001"
Found DFU: [2886:0019] ver=0205, devnum=5, cfg=1, intf=3, path="1-1.1", alt=0, name="DFU FACTORY", serial="0000000001"
```

</TabItem>

</Tabs>

#### ファームウェアを書き込む

- ReSpeaker ボードを PC に接続します。

- 次のコマンド `dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin` を実行します：
  - Linux では `sudo dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin` を実行してください

```
C:\Users\yiping>dfu-util -R -e -a 1 -D D:\Downloads\respeaker_lite_i2s_dfu_firmware_v1.0.7.bin
dfu-util 0.11

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2021 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/

Warning: Invalid DFU suffix signature
A valid DFU suffix will be required in a future dfu-util release
Opening DFU capable USB device...
Device ID 2886:0019
Device DFU version 0101
Claiming USB DFU Interface...
Setting Alternate Interface #1 ...
Determining device status...
DFU state(2) = dfuIDLE, status(0) = No error condition is present
DFU mode device DFU version 0101
Device returned transfer size 4096
Copying data from PC to DFU device
Download        [=========================] 100%       270336 bytes
Download done.
DFU state(7) = dfuMANIFEST, status(0) = No error condition is present
DFU state(2) = dfuIDLE, status(0) = No error condition is present
Done!
Resetting USB to switch back to Run-Time mode
```

:::caution
書き込みが完了したら、ボードを再起動してください。
:::

- ファームウェアのバージョンを確認します：

```
dfu-util -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usb207-version.png" alt="pir" width={600} height="auto" /></p>

## 比較

||[ReSpeaker Lite](https://www.seeedstudio.com/ReSpeaker-Lite-p-5928.html)|[ReSpeaker Mic Array v2.0](https://www.seeedstudio.com/ReSpeaker-Mic-Array-v2-0.html)|[reSpeaker 2-Mics Pi HAT](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html)|
|--|--|--|--|
||<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/xiao-res.png" alt="pir" width={150} height="auto" /></p>|<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/mic-array2.0.png" alt="pir" width={150} height="auto" /></p>|<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/mic-pi-hat.png" alt="pir" width={150} height="auto" /></p>|
|<p style={{textAlign: 'center'}}>コアチップ</p>|<p style={{textAlign: 'center'}}>XMOS XU316</p>|<p style={{textAlign: 'center'}}>XMOS XVF-3000</p>|<p style={{textAlign: 'center'}}>-</p>|
|<p style={{textAlign: 'center'}}>マイク</p>|<p style={{textAlign: 'center'}}>PDM MEMS マイク x2</p>|<p style={{textAlign: 'center'}}>PDM MEMS マイク x4</p>|<p style={{textAlign: 'center'}}>アナログ MEMS マイク x2</p>
|<p style={{textAlign: 'center'}}>音声収音距離</p>|<p style={{textAlign: 'center'}}>3m</p>|<p style={{textAlign: 'center'}}>5m</p>|<p style={{textAlign: 'center'}}>3m</p>|
|<p style={{textAlign: 'center'}}>感度</p>|<p style={{textAlign: 'center'}}>-26 dBFS</p>|<p style={{textAlign: 'center'}}>-26 dBFS</p>|<p style={{textAlign: 'center'}}>-</p>|
|<p style={{textAlign: 'center'}}>音響過負荷点</p>|<p style={{textAlign: 'center'}}>120 dBSPL</p>|<p style={{textAlign: 'center'}}>120 dBSPL</p>|<p style={{textAlign: 'center'}}>-</p>|
|<p style={{textAlign: 'center'}}>SNR</p>|<p style={{textAlign: 'center'}}>64 dB</p>|<p style={{textAlign: 'center'}}>63 dB</p>|<p style={{textAlign: 'center'}}>-</p>|
|<p style={{textAlign: 'center'}}>オンボード音声処理アルゴリズム</p>|<ul><li>Acoustic Echo Cancellation (AEC)</li><li>Automatic Gain Control (AGC)</li><li>Noise Suppression (NS)</li><li>Interference Cancellation (IC)</li><li>Voice-to-Noise Ratio (VNR)</li></ul>|<ul><li>Acoustic Echo Cancellation (AEC)</li><li>Automatic Gain Control (AGC)</li><li>Noise Suppression (NS)</li><li>Beamforming</li><li>Direction of Arrival (DoA)</li><li>De-Reverberation</li><li>Voice Activity Detection (VAD)</li></ul>|<p style={{textAlign: 'center'}}>-</p>|
|<p style={{textAlign: 'center'}}>対応ハードウェア</p>|<ul><li>XIAO ESP32S3(Sense)</li><li>Adafruit QT Py via I2S</li><li>Raspberry Pi</li><li>Linux、macOS、Windows を実行する任意のコンピュータまたは SBC（USB 経由）</li></ul>|<ul><li>Raspberry Pi</li><li>Linux、macOS、Windows を実行する任意のコンピュータまたは SBC（USB 経由）</li></ul>|Raspberry Pi ONLY|
|<p style={{textAlign: 'center'}}>最適な用途</p>|指向性のある音声収音。線形または細長い構成に最適|全方向の音声収音と位置特定。開放的で多方向の環境の中心に配置するのが最適|指向性のある音声収音。線形または細長い構成に最適|

### FAQ

- **`ReSpeaker Lite` サウンドデバイスが見つかりません。**

 ファームウェアのバージョンを確認し、ファームウェアが USB バージョンで、`2.0.5` 以上であることを確認してください。

 ```
 dfu-util -l
 ```

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usb207-version.png" alt="pir" width={600} height="auto" /></p>

 USB バージョンでない場合は、[this step](https://wiki.seeedstudio.com/ja/reSpeaker_usb_v3/#flash-firmware) に従ってファームウェアを書き込んでください。

- **USB ファームウェアを書き込んだ後、Windows で ReSpeaker Lite USB サウンドデバイスを検出できませんか？**

- スタートメニューを開き、`Device manager` と入力します。`ReSpeaker Lite` デバイスを見つけて右クリックし、`Uninstall device` を選択します。`Delete the driver software for this device` を選択して `Uninstall` をクリックします。その後、デバイスを再起動すると、Windows が正しいサウンドカードドライバを再インストールします。

 <p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/delete-driver.png" alt="pir" width={600} height="auto" /></p>

### リソース

[ReSpeaker Lite XMOS Firmware](https://github.com/respeaker/ReSpeaker_Lite/tree/master/xmos_firmwares)

[ReSpeaker Lite Github](https://github.com/respeaker/ReSpeaker_Lite/)

[ReSpeaker Lite 3D file](https://files.seeedstudio.com/wiki/respeakerv3/ReSpeakerLitev1.1.step)
