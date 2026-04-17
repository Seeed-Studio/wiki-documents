---
description: ReSpeaker Lite と XIAO ESP32S3 の統合
title: ReSpeaker Lite 音声アシスタントキット
keywords:
  - ESP32S3
  - XIAO
  - ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /xiao_respeaker
sku: 110061601
last_update:
  date: 3/17/2026
  author: Citric
createdAt: '2024-07-03'
updatedAt: '2026-03-17'
url: https://wiki.seeedstudio.com/ja/xiao_respeaker/
---



XMOS XU316 AI サウンド & オーディオチップセットを搭載した、高性能なオープンソース音声アシスタント開発キットです。このキットは ReSpeaker Lite デュアルマイクアレイと高性能な [XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html) プロセッサを統合しており、優れた音声認識、ノイズリダクション、音声処理機能を提供します。また、このキットは ESPHome を介して Home Assistant とファームウェア統合が可能で、スマート音声アシスタントやホームオートメーション用途に最適です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/xiao-res.png" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-Lite-Voice-Assistant-Kit-p-5929.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

### 特長

- **ESP32 コントローラをあらかじめはんだ付け**：高性能な XIAO ESP32S3 が I2S ピン経由であらかじめはんだ付けされており、今後の開発や統合に向けて、はんだ付け不要の体験を提供します。
- **遠距離音声キャプチャ用デュアルマイクアレイ**：2 つの高性能デジタルマイクにより、騒がしい環境下でも 2 つのマイク入力を用いたポイントノイズキャンセルにより、遠距離（最大 3 m）の音声やスピーチをキャプチャ・抽出できます。
- **オンボード AI ASR アルゴリズム**：XMOS XU-316 AI サウンド & オーディオチップにより駆動され、干渉キャンセル（IC）、アコースティックエコーキャンセル、ノイズ抑圧、オートマチックゲインコントロール（AGC）などの自然言語理解アルゴリズムを備え、高品質な音声キャプチャを実現します。
- **オープンソースを採用**：オープンソースハードウェアとして、Arduino、PlatformIO、MicroPython、CircuitPython と互換性があり、さらなる開発が可能です。
- **一般的な音声アシスタントと互換**：このキットを使用して独自の自然言語プロセッサを構築し、ESPHome を介した Home Assistant、Amazon Alexa Voice Service、Google Assistant、または Cloud Speech-to-Text サービスに接続できます。これにより、プログラムに対して質問したり音声コマンドを発行したりできます。
- **オンボード RGB LED**：プログラム可能な WS2812 RGB LED を搭載しており、カスタムエフェクトをサポートし、アプリケーション向けのビジュアルインターフェースを提供します。

### 仕様

|**デュアルマイクアレイ**|高品質なオーディオ入力を提供します。|
| :- | :- |
|**電源インジケータライト**|電源投入時に点灯します。|
|**RGB ライト**|プログラム可能な WS2812 で、視覚的なフィードバックを提供します。|
|**ミュートインジケータライト**|ミュートボタンが押されると赤く点灯します。|
|**USR ボタン**|ユーザー定義ボタン。|
|**ミュートボタン**|押すとオーディオ入力をミュートします。|
|[**XIAO ESP32S3**](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)|さらなる開発および統合用。|
|**XU316 コアプロセッサ**|オーディオ処理および伝送を担当します。|
|**外部電源供給用はんだパッド**|外部 5V 電源をサポートします。|
|**USB Type-C ポート**|電源供給およびデータ伝送に使用します。|
|**スピーカーコネクタ**|オーディオ出力用。5W アンプ内蔵スピーカーをサポートします。|
|**3.5mm ヘッドホンジャック**|オーディオを出力します。アクティブスピーカーまたはヘッドホンをこのポートに接続できます。|
|**外部電源パッド 1** |XU316 上の未使用 IO ピン。|
|**外部電源パッド 2**|XIAO ESP32 上の未使用 IO ピン。|
|**JTAG**|XU316 のデバッグおよびプログラミング用。|

### ハードウェア概要

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/front.png" alt="pir" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/back.png" alt="pir" width={800} height="auto" /></p>

### 回路図

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/respeaker_lite_v1.0_sch_1.png" alt="pir" width={800} height="auto" /></p>

### ピン配置

<p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/pinout.png" alt="pir" width={600} height="auto" /></p>

|**1**|**デュアルマイクアレイ**|高品質なオーディオ入力を提供します。|
| :- | :- | :- |
|**2**|**電源インジケータライト**|電源投入時に点灯します。|
|**3**|**RGB ライト**|プログラム可能な WS2812 で、視覚的インターフェースを提供します。|
|**4**|**ミュートインジケータライト**|ミュートボタンが押されると赤く点灯します。|
|**5**|**USR ボタン**|ユーザー定義ボタン。|
|**6**|**ミュートボタン**|押すとオーディオ入力をミュートします。|
|**7**|[XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html) **(オプション)**|さらなる開発および統合用。|
|**8**|**XU316 コアプロセッサ**|オーディオ処理および伝送を担当します。|
|**9**|**外部電源供給用はんだパッド**|外部 5V 電源をサポートします。|
|**10**|**USB Type-C ポート**|電源供給およびデータ伝送に使用します。|
|**11**|**スピーカーコネクタ**|オーディオ出力用。5W アンプ内蔵スピーカーをサポートします。|
|**12**|**3.5mm ヘッドホンジャック**|オーディオを出力します。アクティブスピーカーまたはヘッドホンをこのポートに接続できます。|
|**13**|**外部電源パッド 1**|XIAO ESP32 上の未使用 IO ピン。|
|**14**|**外部電源パッド 2**|XU316 上の未使用 IO ピン。|
|**15**|**JTAG**|XU316 のデバッグおよびプログラミング用。|

### I2S ファームウェアを書き込む

ReSpeaker Lite を XIAO ESP32S3 と一緒に使用するには、ReSpeaker Lite のファームウェアが I2S バージョンであることを確認してください。

最新の I2S ファームウェアを書き込むには、[Firmware Flash](https://wiki.seeedstudio.com/ja/reSpeaker_usb_v3/#update-firmware) を確認してください。

### ソフトウェアの準備

#### Arduino IDE のインストール

 お使いのオペレーティングシステムに応じて、安定版の Arduino IDE をダウンロードしてインストールします。

 <div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Arduino IDE をダウンロード</font></span></strong></a>
 </div>

 <br></br>

#### Arduino-ESP32 のインストール

Boards Manager を使用してインストールを開始するには、次の手順に従ってください。

- Arduino IDE の最新版（1.8 以降）をインストールします。現在のバージョンは [arduino.cc](https://www.arduino.cc/en/Main/Software) のウェブサイトにあります。

- Arduino を起動し、`Settings` ウィンドウを開きます。

- 上記のリリースリンクのいずれかを「Additional Board Manager URLs」フィールドに入力します。複数の URL をカンマ区切りで追加できます。

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/preference.png" alt="pir" width={800} height="auto" /></p>

- サイドバーから `Boards Manager` を開き、`ESP32` を検索して `INSTALL` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/install-board.png" alt="pir" width={800} height="auto" /></p>

- Arduino IDE を再起動します。

#### ReSpeaker Lite ライブラリのインストール

ユーザーがすぐに使い始められるよう、ライブラリを提供しています。

次のコマンドのように、このプロジェクトを Arduino の libraries フォルダにクローンします。

```
cd  ~/Documents/Arduino/libraries
git clone https://github.com/respeaker/respeaker_arduino_library.git
```

または、ライブラリを `zip` ファイルとしてダウンロードし、Arduino IDE でライブラリとして追加します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/add-lib.png" alt="pir" width={600} height="auto" /></p>

### FAQ

- **USB ファームウェアを書き込んだ後、Windows で ReSpeaker Lite の USB サウンドデバイスが検出されません。どうすればよいですか？**

- スタートメニューを開き、`Device manager` と入力します。`ReSpeaker Lite` デバイスを見つけて右クリックし、`Uninstall device` を選択します。`Delete the driver software for this device` を選択して `Uninstall` をクリックします。その後、デバイスを再起動すると、Windows が適切なサウンドカードドライバを再インストールします。

 <p style={{textAlign: 'center'}}><img src="https://github.com/respeaker/ReSpeaker_Lite/raw/master/doc/images/dfu/delete-driver.png" alt="pir" width={600} height="auto" /></p>

### リソース

[ReSpeaker Lite XMOS ファームウェア](https://github.com/respeaker/ReSpeaker_Lite/tree/master/xmos_firmwares)

[ReSpeaker Lite Github](https://github.com/respeaker/ReSpeaker_Lite/)
