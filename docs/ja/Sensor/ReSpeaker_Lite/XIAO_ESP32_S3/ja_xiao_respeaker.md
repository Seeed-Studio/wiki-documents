---
description: ReSpeaker Lite と XIAO ESP32S3 の統合
title: ReSpeaker Lite 音声アシスタントキット
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/xiao_respeaker
last_update:
  date: 05/15/2025
  author: Jessie
---


XMOS XU316 AI サウンドおよびオーディオチップセットによって駆動されるこのキットは、高性能なオープンソース音声アシスタント開発キットです。このキットは、ReSpeaker Lite デュアルマイクロフォンアレイと強力な [XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html) プロセッサを統合しており、優れた音声認識、ノイズリダクション、音声処理機能を提供します。このキットは ESPHome を介して Home Assistant とファームウェア統合を提供し、スマート音声アシスタントやホームオートメーションアプリケーションに最適です。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/xiao-res.png" alt="pir" width={600} height="auto" /></p>


<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-Lite-Voice-Assistant-Kit-p-5929.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

### 特徴

* **ESP32 コントローラーのプリソルダー済み**: 強力な XIAO ESP32S3 が I2S ピンを介してプリソルダーされており、さらなる開発と統合のためのはんだ付け不要の体験を提供します。
* **遠距離音声キャプチャ用デュアルマイクロフォンアレイ**: 2 つの高性能デジタルマイクロフォンが遠距離の音声（最大 3 メートル）をキャプチャし、ノイズ環境でも 2 つのマイク入力を使用してポイントノイズをキャンセルします。
* **オンボード AI ASR アルゴリズム**: XMOS XU-316 AI サウンドおよびオーディオチップによって駆動され、干渉キャンセル（IC）、音響エコーキャンセル、ノイズ抑制、自動ゲイン制御（AGC）を含む自然言語理解アルゴリズムを提供し、高品質な音声キャプチャを可能にします。
* **オープンソースの採用**: オープンソースハードウェアとして、Arduino、PlatformIO、MicroPython、CircuitPython と互換性があり、さらなる開発が可能です。
* **人気の音声アシスタントとの互換性**: このキットを使用して独自の自然言語プロセッサを構築し、ESPHome を介して Home Assistant、Amazon Alexa Voice Service、Google Assistant、または Cloud Speech-to-Text サービスに接続できます。これにより、質問をしたり、プログラムに音声コマンドを発行したりできます。
* **オンボード RGB LED**: プログラム可能な WS2812 RGB LED を備えており、カスタムエフェクトをサポートし、アプリケーションの視覚的インターフェースを提供します。


### 仕様

|**デュアルマイクロフォンアレイ**|高品質なオーディオ入力を提供します。|
| :- | :- |
|**電源インジケータライト**|電源がオンになると点灯します。|
|**RGB ライト**|プログラム可能な WS2812、視覚的フィードバックを提供します。|
|**ミュートインジケータライト**|ミュートボタンが押されると赤く点灯します。|
|**USR ボタン**|ユーザー定義ボタン。|
|**ミュートボタン**|押すとオーディオ入力をミュートします。|
|[**XIAO ESP32S3**](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)|さらなる開発と統合のために。|
|**XU316 コアプロセッサ**|オーディオ処理と伝送を担当します。|
|**外部電源供給ソルダーパッド**|外部 5V 電源供給をサポートします。|
|**USB Type-C ポート**|電源およびデータ伝送に使用されます。|
|**スピーカーコネクタ**|オーディオ出力用。5W アンプスピーカーをサポートします。|
|**3.5mm ヘッドフォンジャック**|オーディオ出力。アクティブスピーカーまたはヘッドフォンをこのポートに接続できます。|
|**外部電源パッド 1** |XU316 の未使用 IO ピン。|
|**外部電源パッド 2**|XIAO ESP32 の未使用 IO ピン。|
|**JTAG**|XU316 のデバッグおよびプログラミング用。|



### ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/front.png" alt="pir" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/back.png" alt="pir" width={800} height="auto" /></p>

### 回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/respeaker_lite_v1.0_sch_1.png" alt="pir" width={800} height="auto" /></p>

### ピンアウト

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/pinout.png" alt="pir" width={600} height="auto" /></p>


|**1**|**デュアルマイクロフォンアレイ**|高品質なオーディオ入力を提供します。|
| :- | :- | :- |
|**2**|**電源インジケータライト**|電源がオンになると点灯します。|
|**3**|**RGB ライト**|プログラム可能な WS2812、視覚的インターフェースを提供します。|
|**4**|**ミュートインジケータライト**|ミュートボタンが押されると赤く点灯します。|
|**5**|**USR ボタン**|ユーザー定義ボタン。|
|**6**|**ミュートボタン**|押すとオーディオ入力をミュートします。|
|**7**|[XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html) **(オプション)**|さらなる開発と統合のために。|
|**8**|**XU316 コアプロセッサ**|オーディオ処理と伝送を担当します。|
|**9**|**外部電源供給ソルダーパッド**|外部 5V 電源供給をサポートします。|
|**10**|**USB Type-C ポート**|電源およびデータ伝送に使用されます。|
|**11**|**スピーカーコネクタ**|オーディオ出力用。5W アンプスピーカーをサポートします。|
|**12**|**3.5mm ヘッドフォンジャック**|オーディオ出力。アクティブスピーカーまたはヘッドフォンをこのポートに接続できます。|
|**13**|**外部電源パッド 1**|XIAO ESP32 の未使用 IO ピン。|
|**14**|**外部電源パッド 2**|XU316 の未使用 IO ピン。|
|**15**|**JTAG**|XU316 のデバッグおよびプログラミング用。|


### I2S ファームウェアの書き込み

ReSpeaker Lite を XIAO ESP32S3 と使用するには、ReSpeaker Lite のファームウェアが I2S バージョンであることを確認してください。

最新の I2S ファームウェアをフラッシュするには、[ファームウェアフラッシュ](https://wiki.seeedstudio.com/ja/reSpeaker_usb_v3/#update-firmware) を確認してください。



### ソフトウェア準備

#### Arduino IDE のインストール

お使いのオペレーティングシステムに応じて、安定版の Arduino IDE をダウンロードしてインストールしてください。

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDE をダウンロード</font></span></strong></a>
 </div>

<br></br>


#### Arduino-ESP32 のインストール

Boards Manager を使用してインストールプロセスを開始するには、以下の手順に従ってください：

* Arduino IDE の現在のアップストリームバージョン（1.8 以上）をインストールします。最新バージョンは [arduino.cc](https://www.arduino.cc/en/Main/Software) のウェブサイトで確認できます。

* Arduino を起動し、`設定`ウィンドウを開きます。

* 上記のリリースリンクのいずれかを「追加のボードマネージャー URL」フィールドに入力します。複数の URL を追加する場合は、コンマで区切ってください。

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/preference.png" alt="pir" width={800} height="auto" /></p>

* サイドバーから`Boards Manager`を開き、`ESP32`を検索して`INSTALL`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/install-board.png" alt="pir" width={800} height="auto" /></p>

* Arduino IDE を再起動します。


#### ReSpeaker Lite ライブラリのインストール

ユーザーが迅速に開始できるようにライブラリを提供しています：

以下のコマンドを使用して、このプロジェクトを Arduino ライブラリフォルダにクローンします：

```
cd  ~/Documents/Arduino/libraries
git clone https://github.com/limengdu/reSpeaker_Lite-Arduino-Library.git
```

または、ライブラリを`zip`ファイルとしてダウンロードし、Arduino IDE にライブラリとして追加します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/add-lib.png" alt="pir" width={600} height="auto" /></p>


### FAQ

* **USB ファームウェアをフラッシュした後、Windows で ReSpeaker Lite USB サウンドデバイスを検出できない場合は？**

- スタートメニューを開き、`デバイスマネージャー`と入力します。`ReSpeaker Lite`デバイスを見つけて右クリックし、`デバイスのアンインストール`を選択します。`このデバイスのドライバーソフトウェアを削除する`を選択し、`アンインストール`をクリックします。その後、デバイスを再起動すると、Windows が正しいサウンドカードドライバーを再インストールします。

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/delete-driver.png" alt="pir" width={600} height="auto" /></p>


### リソース

[ReSpeaker Lite XMOS Firmware](https://github.com/respeaker/ReSpeaker_Lite/tree/master/xmos_firmwares)

[ReSpeaker Lite Github](https://github.com/respeaker/ReSpeaker_Lite/)