---
description: ReSpeaker Lite は、遠距離音声キャプチャ用のデュアルマイクアレイを備えた、XMOS XU316 搭載 USB/I2S 音声インターフェース開発ボードです。アコースティックエコーキャンセレーション、ノイズ抑制、干渉キャンセレーション、自動ゲイン制御などの AI オーディオフロントエンドアルゴリズムをオンボードで備えています。ファームウェアの書き込み、配線、開封後すぐの使い方から始めましょう。
title: reSpeaker Lite 入門ガイド
keywords:
  - ReSpeaker
  - Xiao esp32
  - Voice assistant 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reSpeaker_usb_v3
sku: 107990273,E24072601
last_update:
  date: 6/28/2024
  author: Jessie
createdAt: '2024-07-03'
updatedAt: '2026-02-12'
url: https://wiki.seeedstudio.com/ja/reSpeaker_usb_v3/
---

## はじめに


<table align="center">
  <tr>
    <th>reSpeaker Lite 2-Mic Array（XIAO ESP32-S3 搭載）</th>
    <th>reSpeaker Lite 2-Mic Array</th>

  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/9/0/904832d1-b0d8-461a-bbbc-cbfa5a1f71a9.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-107990273-respeaker-lite-45font.jpg" style={{width:500, height:'auto'}}/></div></td>

  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-Lite-p-5928.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-Lite-p-5928.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>

    </div></td>
  </tr>
</table>


XMOS XU316 AI サウンド & オーディオチップセットを搭載したこの開発ボードは、統合デュアルマイクアレイにより音声処理に優れ、音声認識や音声制御に最適です。高度なオンボードオーディオフロントエンドアルゴリズムを備えた XU316 チップは、干渉キャンセレーション、エコーキャンセレーション、ノイズ抑制を提供します。I2S および USB 接続をサポートし、Seeed Studio XIAO ESP32S3 (Sense)、Adafruit QT Py、Raspberry Pi、PC と互換性があります。

## 特長

- **遠距離音声キャプチャ用デュアルマイクアレイ**：2 つの高性能デジタルマイクにより、2 つのマイク入力を用いてポイントノイズを打ち消すことで、騒がしい環境でも最大 3 メートル離れた場所からの音声や声をキャプチャ・抽出します。
- **オンボード AI ASR アルゴリズム**：XMOS XU-316 AI サウンド & オーディオチップにより、干渉キャンセレーション (IC)、アコースティックエコーキャンセレーション、ノイズ抑制、Voice-to-Noise Ratio (VNR)、Automatic Gain Control (AGC) の自然言語理解アルゴリズムを備え、高品質な音声キャプチャを実現します。
- **オープンソースを採用**：このボードは I2S 経由で一般的なハードウェアプラットフォーム（XIAO ESP32S3 (Sense)、Adafruit QT Py）と互換性があり、USB（Audio Class 2.0 (UAC2)）経由で Raspberry Pi、PC とも互換性があります。
- **オンボード RGB LED**：ボードにはプログラム可能な WS2812 RGB LED が搭載されており、カスタムエフェクトをサポートし、アプリケーション向けのビジュアルインターフェースを提供します。
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
|**スピーカー**|5W アンプスピーカーをサポート。|

## ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-9.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-10.png" alt="pir" width={800} height="auto" /></p>

## ピン配置

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/pinout.png" alt="pir" width={600} height="auto" /></p>

|**1**|**デュアルマイクアレイ**|高品質なオーディオ入力を提供します。|
| :- | :- | :- |
|**2**|**電源インジケータライト**|電源投入時に点灯します。|
|**3**|**RGB ライト**|プログラム可能な WS2812。ビジュアルインターフェースを提供します。|
|**4**|**ミュートインジケータライト**|ミュートボタンが押されると赤く点灯します。|
|**5**|**USR ボタン**|ユーザー定義ボタン。|
|**6**|**ミュートボタン**|押すとオーディオ入力をミュートします。|
|**7**|[XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html) **（オプション）**|さらなる開発と統合のために使用します。|
|**8**|**XU316 コアプロセッサ**|オーディオ処理と伝送を担当します。|
|**9**|**外部電源供給はんだパッド**|外部 5V 電源をサポートします。|
|**10**|**USB Type-C ポート**|電源供給とデータ伝送に使用します。|
|**11**|**スピーカーコネクタ**|オーディオ出力用。5W アンプスピーカーをサポートします。|
|**12**|**3.5mm ヘッドホンジャック**|オーディオを出力します。アクティブスピーカーまたはヘッドホンをこのポートに接続できます。|
|**13**|**外部電源パッド 1**|XIAO ESP32 上の未使用 IO ピン。|
|**14**|**外部電源パッド 2**|XU316 上の未使用 IO ピン。|
|**15**|**JTAG**|XU316 のデバッグおよびプログラミング用。|

## はじめてみよう

### 開封後すぐの使い方

ReSpeaker Lite はプラグアンドプレイのモジュラー音声インターフェースで、ドライバは不要です。PC に接続するだけで、'ReSpeaker Lite' という名前の音声デバイスが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/pc.png" alt="pir" width={500} height="auto" /></p>

### ファームウェアの更新

#### [ファームウェアのダウンロード](https://github.com/respeaker/ReSpeaker_Lite/tree/master/xmos_firmwares)

:::tip note
ReSpeaker Lite ボードには 2 つのバージョンがあります：

USB サウンドデバイスとして使用するには、USB バージョンのファームウェア（デフォルトファームウェア）を書き込んでください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/lite_newss/usb_firmware.png" alt="pir" width={900} height="auto" /></p>

XIAO ESP32S3 と一緒に使用するには、I2S バージョンのファームウェアを書き込んでください。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/lite_newss/i2s_firmware.png" alt="pir" width={900} height="auto" /></p>
:::

#### 配線

USB ケーブルを使用して ReSpeaker Lite ボードを PC に接続します。

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

- スタートメニューを開いて cmd と入力し、Enter キーを押します。表示されたターミナルで dfu-util.exe のパスが設定されているか、dfu-util -V コマンドで確認します：

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
もし次のような "Cannot open DFU device" エラーが表示された場合は、この手順を続行してください。表示されない場合は、ステップ 3 に進んでファームウェアを書き込んでください。
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

- デバイスリストから `ReSpeaker 2 Mics Array` または `ReSpeaker Lite` または DFU `FACTORY (Interface 3)` を探し、`WINUSB v6.x.xxxx.xxxxx` ドライバをインストールします。

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/dfu-2mic.png" alt="pir" width={500} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/dfu-lite.png" alt="pir" width={500} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/dfu-fac.png" alt="pir" width={500} height="auto" /></p>

- インストールが完了したら（数分かかります）、電源を入れ直してから再度 `dfu-util -l` を実行します。これで ReSpeaker Lite が検出されるはずです。

</TabItem>

<TabItem value="mac" label="MacOS">

- [brew](https://brew.sh/) で dfu-util をインストールします：`brew install dfu-util`

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

- apt を使用して dfu-util をインストールします: `sudo apt install dfu-util`

- `sudo dfu-util -l` を実行して ReSpeaker Lite が検出されているか確認します:

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

- 次のコマンド `dfu-util -R -e -a 1 -D /path/to/dfu_firmware.bin` を実行します:
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

- ファームウェアバージョンを確認します:

```
dfu-util -l
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usb207-version.png" alt="pir" width={600} height="auto" /></p>


## 録音と再生 

### Audacity のセットアップ 

1. **Audacity** を開きます
2. **Audio Setup > Audio Settings** に移動します


3. 次のように設定します:
   - **Host**: `Windows WASAPI`
   - **Recording Device**: `reSpeaker Lite`
   - **Channels**: `2 (Stereo)`
   - **Sample Rate**: `16000 Hz`（**Project** と **Default Sample Rate** の両方）
   - **Sample Format**: `32-bit`

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/lite_newss/audio_settings.png" alt="pir" width={600} height="auto"/></p>

1. **OK** をクリックします
2. 準備完了です — 録音を開始しましょう！

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeakerv3/lite_newss/audio_recording .png" alt="pir" width={600} height="auto"/></p>

### FAQ

- **`ReSpeaker Lite` サウンドデバイスが見つかりません。**

 ファームウェアバージョンを確認し、ファームウェアが USB バージョンで、かつ `2.0.5` 以上であることを確認してください。

 ```
 dfu-util -l
 ```

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usb207-version.png" alt="pir" width={600} height="auto" /></p>

 USB バージョンでない場合は、[この手順](https://wiki.seeedstudio.com/ja/reSpeaker_usb_v3/#flash-firmware)に従ってファームウェアを書き込んでください。

- **USB ファームウェアを書き込んだ後、Windows で ReSpeaker Lite USB サウンドデバイスを検出できませんか？**

- スタートメニューを開き、`Device manager` と入力します。`ReSpeaker Lite` デバイスを見つけて右クリックし、`Uninstall device` を選択します。`Delete the driver software for this device` を選択して `Uninstall` をクリックします。その後、デバイスを再起動すると、Windows が正しいサウンドカードドライバを再インストールします。

 <p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/delete-driver.png" alt="pir" width={600} height="auto" /></p>

### リソース

[ReSpeaker Lite XMOS Firmware](https://github.com/respeaker/ReSpeaker_Lite/tree/master/xmos_firmwares)

[ReSpeaker Lite Github](https://github.com/respeaker/ReSpeaker_Lite/)

[ReSpeaker Lite 3D ファイル](https://files.seeedstudio.com/wiki/respeakerv3/ReSpeakerLitev1.1.step)
