---
description: ReSpeaker Lite の使用開始
title: ReSpeaker Lite の使用開始
keywords:
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/reSpeaker_usb_v3
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

XMOS XU316 AI サウンド・オーディオチップセットを搭載したこの開発ボードは、統合されたデュアルマイクロフォンアレイによりオーディオ処理に優れ、音声認識と音声制御に最適です。高度なオンボードオーディオフロントエンドアルゴリズムを特徴とし、XU316チップは干渉キャンセレーション、エコーキャンセレーション、ノイズ抑制を提供します。I2SとUSB接続をサポートし、Seeed Studio XIAO ESP32S3（Sense）、Adafruit QT Py、Raspberry Pi、PCと互換性があります。

## 特徴

- **遠距離音声キャプチャ用デュアルマイクロフォンアレイ**：2つの高性能デジタルマイクロフォンが、2つのマイクロフォン入力を使用してポイントノイズをキャンセルするため、騒音環境でも遠距離音声と音声（最大3メートル）をキャプチャして抽出します。
- **オンボードAI ASRアルゴリズム**：XMOS XU-316 AIサウンド・オーディオチップを搭載し、干渉キャンセレーション（IC）、音響エコーキャンセレーション、ノイズ抑制、音声対雑音比（VNR）、自動ゲイン制御（AGC）の自然言語理解アルゴリズムを含み、高品質な音声キャプチャを可能にします。
- **オープンソースの採用**：このボードは、I2S経由で人気のハードウェアプラットフォーム（XIAO ESP32S3（Sense）、Adafruit QT Py）と互換性があり、USB（Audio Class 2.0（UAC2））経由でRaspberry Pi、PCと互換性があります。
- **オンボードRGB LED**：ボードにはプログラマブルWS2812 RGB LEDが搭載されており、カスタムエフェクトをサポートし、アプリケーションにビジュアルインターフェースを提供します。
- **外部電源サポート**：このボードは外部5V電源をサポートし、さまざまなシナリオで柔軟に適用できます。
- **カスタム開発用DFU**：ボードはDFU-Util経由でカスタムファームウェアアップデートをサポートします。

## 仕様

|**コアチップ**|XMOS XU316|
| :- | :- |
|**デジタルマイクロフォン**|高性能デジタルマイクロフォン × 2|
|**感度**|-26 dBFS|
|**音響過負荷点**|120 dBL|
|**SNR**|64 dBA|
|**電源**|USB 5V、外部5V|
|**寸法**|35×86 mm|
|**オーディオ出力**|スピーカーコネクタ / 3.5mmヘッドフォンジャック|
|**最大サンプリングレート**|16Khz|
|**スピーカー**|5Wアンプスピーカーをサポート。|

## ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-9.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-10.png" alt="pir" width={800} height="auto" /></p>

## ピン配置

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/pinout.png" alt="pir" width={600} height="auto" /></p>

|**1**|**デュアルマイクロフォンアレイ**|高品質なオーディオ入力を提供。|
| :- | :- | :- |
|**2**|**電源インジケータライト**|電源投入時に点灯。|
|**3**|**RGB ライト**|プログラマブルWS2812、ビジュアルインターフェースを提供|
|**4**|**ミュートインジケータライト**|ミュートボタンが押されると赤く点灯。|
|**5**|**USR ボタン**|ユーザー定義ボタン。|
|**6**|**ミュートボタン**|押すとオーディオ入力をミュート。|
|**7**|[XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html) **（オプション）**|さらなる開発と統合のため。|
|**8**|**XU316 コアプロセッサ**|オーディオ処理と伝送を担当。|
|**9**|**外部電源はんだパッド**|外部5V電源をサポート。|
|**10**|**USB Type-C ポート**|電源とデータ伝送に使用。|
|**11**|**スピーカーコネクタ**|オーディオ出力用。5Wアンプスピーカーをサポート。|
|**12**|**3.5mmヘッドフォンジャック**|オーディオ出力、このポートにアクティブスピーカーやヘッドフォンを接続可能。|
|**13**|**外部電源パッド1**|XIAO ESP32の未使用IOピン。|
|**14**|**外部電源パッド2**|XU316の未使用IOピン。|
|**15**|**JTAG**|XU316のデバッグとプログラミング用。|

## 使用開始

### 開封後の使用

ReSpeaker Liteはプラグアンドプレイのモジュラー音声インターフェースで、ドライバーは不要です。PCに接続するだけで、「ReSpeaker Lite」という名前の音声デバイスが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/pc.png" alt="pir" width={500} height="auto" /></p>

### ファームウェアの更新

#### [ファームウェアダウンロード](https://github.com/respeaker/ReSpeaker_Lite/tree/master/xmos_firmwares)

:::tip note
ReSpeaker Liteボードには2つのバージョンがあります：

USBサウンドデバイスとして使用するには、USBバージョンファームウェア（デフォルトファームウェア）をフラッシュしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usb-version.png" alt="pir" width={300} height="auto" /></p>

XIAO ESP32S3と一緒に使用するには、I2Sバージョンファームウェアをフラッシュしてください。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/i2s-version.png" alt="pir" width={300} height="auto" /></p>
:::

#### 配線

USBケーブルを使用してReSpeaker LiteボードをPCに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usb-connect.png" alt="pir" width={500} height="auto" /></p>

#### DFU Utilのインストール

[dfu-util](http://dfu-util.sourceforge.net/)は、USBポート経由でデバイスファームウェアアップグレードを行うためのコマンドラインツールです。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="win" label="Windows">

- `dfu-util-0.11-binaries.tar.xz`をダウンロードし、ローカルシステムに展開します。
  例：D:\

- `dfu-util.exe`のディレクトリに移動します<br/>
  例：D:\dfu-util-0.11-binaries\win64\（win32を使用している場合は、win64をwin32に変更してください）

- `dfu-util.exe`のパスをシステム環境変数Pathに追加します：`マイコンピュータ` > `プロパティ` > `詳細設定` > `環境変数` > `Path`。
 変数Path内のパスはセミコロン;で区切られることに注意してください。
 これにより、コマンドプロンプトでdfu-utilをグローバルに実行できるようになります。

- スタートメニューを開き、cmdと入力します。Enterキーを押します。表示されるターミナルで、dfu-util -Vコマンドでdfu-util.exeのパスが設定されているかを確認します：

```
C:\Users\yiping>dfu-util -V
dfu-util 0.11

Copyright 2005-2009 Weston Schmidt, Harald Welte and OpenMoko Inc.
Copyright 2010-2021 Tormod Volden and Stefan Schmidt
This program is Free Software and has ABSOLUTELY NO WARRANTY
Please report bugs to http://sourceforge.net/p/dfu-util/tickets/
```

- `dfu-util -l`を実行してReSpeaker Liteが検出されるかを確認します：

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
このような「Cannot open DFU device」エラーが発生した場合は、この手順を続けてください。そうでない場合は、ステップ3に進んでファームウェアをフラッシュしてください。
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

- [Zadig](https://zadig.akeo.ie/)をインストールして開きます。`Options` -> `List All Devices`をクリックします。

- デバイスリストから`ReSpeaker 2 Mics Array`または`ReSpeaker Lite`またはDFU `FACTORY (Interface 3)`を見つけ、`WINUSB v6.x.xxxx.xxxxx`ドライバーをインストールします。

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/dfu-2mic.png" alt="pir" width={500} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/dfu-lite.png" alt="pir" width={500} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/dfu-fac.png" alt="pir" width={500} height="auto" /></p>

- インストールが完了したら（数分かかります）、電源を再投入して`dfu-util -l`を再度実行してください。ReSpeaker Liteが検出されるはずです。

</TabItem>

<TabItem value="mac" label="MacOS">

- [brew](https://brew.sh/)でdfu-utilをインストール：`brew install dfu-util`

- `dfu-util -l`を実行してReSpeaker Liteが検出されるかを確認します：

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

- aptでdfu-utilをインストール：`sudo apt install dfu-util`

- `sudo dfu-util -l`を実行してReSpeaker Liteが検出されるかを確認します：

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

#### ファームウェアのフラッシュ

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
フラッシュが完了したら、ボードを再起動してください。
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
|<p style={{textAlign: 'center'}}>マイクロフォン</p>|<p style={{textAlign: 'center'}}>PDM MEMS マイクロフォン x2</p>|<p style={{textAlign: 'center'}}>PDM MEMS マイクロフォン x4</p>|<p style={{textAlign: 'center'}}>アナログ MEMS マイクロフォン x2</p>
|<p style={{textAlign: 'center'}}>音声キャプチャ距離</p>|<p style={{textAlign: 'center'}}>3m</p>|<p style={{textAlign: 'center'}}>5m</p>|<p style={{textAlign: 'center'}}>3m</p>|
|<p style={{textAlign: 'center'}}>感度</p>|<p style={{textAlign: 'center'}}>-26 dBFS</p>|<p style={{textAlign: 'center'}}>-26 dBFS</p>|<p style={{textAlign: 'center'}}>-</p>|
|<p style={{textAlign: 'center'}}>音響過負荷点</p>|<p style={{textAlign: 'center'}}>120 dBSPL</p>|<p style={{textAlign: 'center'}}>120 dBSPL</p>|<p style={{textAlign: 'center'}}>-</p>|
|<p style={{textAlign: 'center'}}>SNR</p>|<p style={{textAlign: 'center'}}>64 dB</p>|<p style={{textAlign: 'center'}}>63 dB</p>|<p style={{textAlign: 'center'}}>-</p>|
|<p style={{textAlign: 'center'}}>オンボード音声処理アルゴリズム</p>|<ul><li>音響エコーキャンセレーション（AEC）</li><li>自動ゲイン制御（AGC）</li><li>ノイズ抑制（NS）</li><li>干渉キャンセレーション（IC）</li><li>音声対雑音比（VNR）</li></ul>|<ul><li>音響エコーキャンセレーション（AEC）</li><li>自動ゲイン制御（AGC）</li><li>ノイズ抑制（NS）</li><li>ビームフォーミング</li><li>到来方向推定（DoA）</li><li>残響除去</li><li>音声活動検出（VAD）</li></ul>|<p style={{textAlign: 'center'}}>-</p>|
|<p style={{textAlign: 'center'}}>対応ハードウェア</p>|<ul><li>XIAO ESP32S3(Sense)</li><li>Adafruit QT Py（I2S 経由）</li><li>Raspberry Pi</li><li>Linux、macOS、Windows を実行する任意のコンピュータまたは SBC（USB 経由）</li></ul>|<ul><li>Raspberry Pi</li><li>Linux、macOS、Windows を実行する任意のコンピュータまたは SBC（USB 経由）</li></ul>|Raspberry Pi のみ|
|<p style={{textAlign: 'center'}}>最適な用途</p>|指向性音声キャプチャ、直線的または細長いセットアップに最適|全方向音声キャプチャと位置特定、オープンで多方向環境の中央配置に最適|指向性音声キャプチャ、直線的または細長いセットアップに最適|

### FAQ

- **`ReSpeaker Lite` サウンドデバイスが見つからない。**

 ファームウェアのバージョンを確認し、ファームウェアが USB バージョンで `2.0.5` 以上であることを確認してください。

 ```
 dfu-util -l
 ```

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/usb207-version.png" alt="pir" width={600} height="auto" /></p>

 USB バージョンでない場合は、[この手順](https://wiki.seeedstudio.com/ja/reSpeaker_usb_v3/#flash-firmware)に従ってファームウェアをフラッシュしてください。

- **USB ファームウェアをフラッシュした後、Windows で ReSpeaker Lite USB サウンドデバイスが検出されない？**

- スタートメニューを開き、`Device manager` と入力します。`ReSpeaker Lite` デバイスを見つけて右クリックし、`Uninstall device` を選択します。`Delete the driver software for this device` を選択して `Uninstall` をクリックします。その後、デバイスを再起動すると、Windows が適切なサウンドカードドライバを再インストールします。

 <p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/delete-driver.png" alt="pir" width={600} height="auto" /></p>

### リソース

[ReSpeaker Lite XMOS ファームウェア](https://github.com/respeaker/ReSpeaker_Lite/tree/master/xmos_firmwares)

[ReSpeaker Lite Github](https://github.com/respeaker/ReSpeaker_Lite/)

[ReSpeaker Lite 3D ファイル](https://files.seeedstudio.com/wiki/respeakerv3/ReSpeakerLitev1.1.step)
