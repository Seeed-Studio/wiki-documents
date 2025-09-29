---
title: Grove - 音声認識モジュール
nointro:
keywords:
  - ドキュメント
  - Docusaurus
image: https://wiki.seeedstudio.com/ja/Grove-Speech_Recognizer/
slug: /ja/Grove-Speech_Recognizer
last_update:
  date: 05/15/2025
  author: gunengyu
---


![画像説明を入力してください](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/img/cover.jpg)

周囲のものと音声でやり取りすることは、IoTアプリケーションの中でも常に最も興味深いものの一つです。私たちは、よりユニークでクールなものを作りたいと考えています。最近、Kickstarterで音声制御ソリューション「Respeaker」を発表し、大ヒットとなりました。しかし、すべての人が音声制御プロジェクトを構築するためにRespeakerを必要としているわけではありません。時には、シンプルなソリューションだけで十分な場合もあります。ここでは、スマートホームの夢を簡単かつ迅速に実現するための第一世代のGrove音声認識モジュールをご紹介します。

Grove音声認識モジュールは、スマートホーム、スマートトイ、音声制御ロボットなど、音声制御アプリケーション向けに設計されています。音声で制御したいものがあれば、ぜひ試してみてください。このボードには、Nuvoton ISD9160、マイクロフォン、1つのSPIフラッシュ、1つのGroveコネクタ、1つのスピーカーコネクタ、そして音声に反応するLEDが含まれています。

Nuvoton ISD9160はCortex™-M0をベースとした(SoC) Chipcorderで、音声制御アプリケーション向けに強力かつ経済的なソリューションを提供します。このGroveモジュールにはISD9160だけでなく、他にも驚くべき特徴があります。マイクロフォンを見てみましょう。音声認識デバイスに直接近づいて話さなければならない不快な瞬間を覚えていますか？今回はそのようなことはありません！Grove音声認識モジュールのマイクロフォンは全方向性であり、ユーザーが前、後ろ、左、右のどの方向から話しても、マイクロフォンはすべての信号を均等に記録します。

この音声認識モジュールは、「開始」、「停止」、「音楽を再生」など、22種類のコマンドを認識することができます。コマンドを認識するたびに値を返し、接続されたスピーカーがそのコマンドを繰り返します。この値を使用して、モーターや音楽プレーヤーなどの他のデバイスを制御することができます。私たちは何時間もテストを行い、高い認識率と非常に低い誤認識率を確保しました。

使用する前に知っておくべき注意点を以下に示します：
- 覚醒ワード: Hicell（1つの単語として発音してください）
- 覚醒ワードを認識するとLEDが赤く点灯し、その後コマンドワードを話すことができます。コマンドワードを認識するとLEDが青く点灯します。

:::note
    モジュールのファームウェアはサードパーティベンダーによって作成されており、オープンソースではありません。
:::

## アプリケーションアイデア

* IoT（モノのインターネット）
* スマートハウス
* 人間と機械のインターフェース
* 照明制御
* センサーハブ
* ロボット

## 特徴

* ローカル音声認識
* 非常に低い誤認識率
* スピーカーコネクタ（JST2.0、スピーカーは含まれていません）
* 内蔵マイクロフォン
* 3.3V/5V動作電圧
* 22種類の認識エントリ
* デフォルトボーレート: 9600

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

**プラットフォーム対応**

|Arduino|Wio|BeagleBone|Raspberry Pi|LinkIt|
|---------|-----|-----|------|------|
|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/arduino_logo.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/wio_logo.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/bbg_logo.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/raspberry_pi_logo.jpg)|![画像説明を入力してください](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/linkit_logo.jpg)|

## 仕様

| 項目  | 最小値 | 標準値 | 最大値 | 条件 |
|---|-------|-----|--------|-----------|
| 動作電圧 |3V     |3.3V |5V |25 ℃|
| 動作電流  |25mA   |26.5mA |80mA@再生中 |VCC = 3.3V 25℃|
| 動作電流  | 25mA | 26.5mA |130mA@再生中| VCC = 5V 25℃|
| 動作温度 | 0℃ |25℃ |85℃ | |
| サイズ | | 40*20mm  | | |
| 重量 | | 5g  | |
| フラッシュ | | 2Mbytes | |
| マイク感度 |-43dB | -40dB | -37dB | VCC = 5V 25℃ |
| マイクSNR | 58dB  || | |
| マイク指向性 | |全方向性 | | |
| スピーカー出力| | |1W |VCC = 5V 25℃|
| プロセッサコア| |Cortex-M0| | |
| プロセッサ周波数 | |32.768MHz|50MHz|VCC = 5V 25℃|

## ハードウェア概要

![画像をここに挿入](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/img/hw.png)

1. Groveコネクタ
2. 赤色LED - "HIcell"が認識されたときに点灯
3. 青色LED - コマンドが認識されたときに点灯
4. スピーカーコネクタ - 音声出力用にスピーカーを接続可能
5. マイク
6. ISD9160CFI - コントローラー

## コマンドリターン

| コマンド | 値 |
|-------------|--------|
|ライトをオンにする |1|
|ライトをオフにする |2|
|音楽を再生 |3|
|一時停止  |4|
|次へ  |5|
|前へ  |6|
|上へ  |7|
|下へ |8|
|テレビをオンにする |9|
|テレビをオフにする |10|
|温度を上げる |11|
|温度を下げる |12|
|時間を尋ねる |13|
|ドアを開ける |14|
|ドアを閉める |15|
|左へ |16|
|右へ  |17|
|停止  |18|
|開始 |19|
|モード1 |20|
|モード2 |21|
|進む |22|

## はじめに

ここでは、Grove - Speech Recognizerがどのように動作するかを簡単なデモを通じて説明します。まず以下のものを準備してください：

| Seeeduino V4 | Grove - Speech Recognizer | Base Shield |
|--------------|----------------------|-----------------|
|![画像をここに挿入](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![画像をここに挿入](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/img/stuff1.jpg)|![画像をここに挿入](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Light-Sensor%28P%29-p-1253.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Universal-4-Pin-20cm-Unbuckled-Cable-%285-PCs-Pack%29-p-749.html)|

**ハードウェア接続**

Groveシリーズモジュールの利点により、はんだ付けやブレッドボードは必要ありません。必要なのは、モジュールをBase Shieldの正しいポートに接続することだけです。このデモでは、Grove - Speech RecognizerをD2に接続します。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/img/connect.jpeg)

**ソフトウェア**

以下のコードをコピーしてArduino IDEに貼り付け、Seeeduino V4にアップロードしてください。コードをArduinoにアップロードした後、シリアルモニターを開きます。

```
#include <SoftwareSerial.h>

#define SOFTSERIAL_RX_PIN  2
#define SOFTSERIAL_TX_PIN  3

SoftwareSerial softSerial(SOFTSERIAL_RX_PIN,SOFTSERIAL_TX_PIN);

const char *voiceBuffer[] =
{
    "ライトをオンにする",
    "ライトをオフにする",
    "音楽を再生",
    "一時停止",
    "次へ",
    "前へ",
    "上へ",
    "下へ",
    "テレビをオンにする",
    "テレビをオフにする",
    "温度を上げる",
    "温度を下げる",
    "時間を尋ねる",
    "ドアを開ける",
    "ドアを閉める",
    "左へ",
    "右へ",
    "停止",
    "開始",
    "モード1",
    "モード2",
    "進む",
};

void setup()
{
    Serial.begin(9600);
    softSerial.begin(9600);
    softSerial.listen();
}

void loop()
{
    char cmd;

    if(softSerial.available())
    {
        cmd = softSerial.read();
        Serial.println(voiceBuffer[cmd - 1]);
    }
}

```

**モジュールを起動する**

モジュールはコマンド**Hicell**があるときに起動し、赤色LEDが点灯します。赤色LEDが点灯していない場合は再試行してください。

:::note
    赤色LEDは5秒間点灯します。コマンドが認識される前に赤色LEDが消灯した場合は、再度**Hicell**を試してください。
:::

**コマンド**

モジュールが起動した後、コマンドを話すことができます。例えば：

    "テレビをオンにする"
青色LEDが点灯（約1秒間）した場合、コマンドが正しく認識されたことを意味します。シリアルモニターを確認すると、コマンドが表示されます。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/img/monitor.png)

### Codecraftで遊ぶ

#### ハードウェア

**ステップ1.** Grove - Speech RecognizerをBase ShieldのポートD2に接続します。

**ステップ2.** Base ShieldをSeeeduino/Arduinoに接続します。

**ステップ3.** USBケーブルを使用してSeeeduino/ArduinoをPCに接続します。

#### ソフトウェア

**ステップ1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メインプロシージャを作業エリアにドラッグします。

:::note
    Codecraftを初めて使用する場合は、[Arduinoを使用したCodecraftガイド](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/)も参照してください。
:::

**ステップ2.** 以下の画像のようにブロックをドラッグするか、このページの最後でダウンロード可能なcdcファイルを開きます。

![cc](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/img/cc_Speech_Recognizer.PNG)

プログラムをArduino/Seeeduinoにアップロードします。

:::success
    コードのアップロードが完了したら、Hicellと言ってモジュールを起動し、赤色LEDが点灯したら他のコマンドを話すことができます。
:::

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/res/eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

* [Eagle形式の回路図](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/res/eagle.zip)
* [PDF形式の回路図](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/res/Grove%20-%20Speech%20Recognizer%20v1.0.pdf)
* [Codecraft CDCファイル](https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/res/Grove_Speech_Recognizer_CDC_File.zip)

## 技術サポートと製品ディスカッション

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 産業用センサーへのアップグレード

SenseCAP [S2110コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と[S2100データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Groveを簡単にLoRaWAN®センサーに変えることができます。Seeedはプロトタイピングをサポートするだけでなく、SenseCAPシリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66ハウジング、Bluetooth設定、グローバルLoRaWAN®ネットワークとの互換性、内蔵19Ahバッテリー、そして強力なアプリサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device)は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、8-in-1気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトに向けて、最新のSenseCAP S210xをお試しください。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>