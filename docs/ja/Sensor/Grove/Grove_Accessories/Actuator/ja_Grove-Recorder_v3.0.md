---
title: Grove - Recorder V3
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Grove-Recorder_v3.0/
slug: /ja/Grove-Recorder_v3.0
last_update:
  date: 05/15/2025
  author: gunengyu
---


![画像をここに挿入](https://files.seeedstudio.com/wiki/Grove_Recorder_V3/img/cover.jpg)

これは最新バージョンのGrove-recorderであり、これまでで最も優れたバージョンです。前バージョンと比較して、いくつかの更新点がありますのでご紹介します。

最初の変更点はMCUです。V3.0では、MCUがISD1820PYからISD9160FIにアップグレードされました。これは旧バージョンよりも強力です。どのように強力かというと、新たに追加された2Mバイトのフラッシュメモリと組み合わせることで、録音時間が最大83秒に延長され、以前の12秒の録音時間を大幅に上回ります。

次に、以前のバージョンを使用したことがある方なら、録音した内容を再生するには、別途接続されたGroveボタンの別のボタンを押す必要があったことをご存じでしょう。V3.0では、録音ボタンと再生ボタンを1つのボタンに統合しました。このボタンを2秒間押し続けると録音が開始され、素早く押すと録音した内容が再生されます。

## V3の新機能

* MCUがISD1820PYからISD9160FIに変更
* 録音および再生ボタン
* 録音スイッチ
* 2Mバイトのフラッシュメモリ

## 特徴

* 非常に長い録音時間、最大83秒
* 操作用の内蔵ボタン
* 内蔵LEDインジケーター
* 単独動作またはMCUによる制御
* 内蔵マイクロフォン

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

## プラットフォームサポート

|Arduino|Wio|BeagleBone|Raspberry Pi|LinkIt|
|---------|-----|-----|------|------|
|![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/arduino_logo.jpg)|![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/wio_logo.jpg)|![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/bbg_logo.jpg)|![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/raspberry_pi_logo.jpg)|![画像をここに挿入](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/linkit_logo.jpg)|

## 仕様

* 動作電圧: 3.3/5V
* 動作電流 (@5V, 25℃)
  * 待機時: 25-30mA
  * 録音時: 29-35mA
  * 再生時: 110-150mA
* 動作電流 (@3.3V, 25℃)
  * 待機時: 23-25mA
  * 録音時: 25-30mA
  * 再生時: 70-150mA
* 動作温度: 0~85℃
* サイズ: 40x20mm
* 重量: 31.5g

## ハードウェア概要

![画像をここに挿入](https://files.seeedstudio.com/wiki/Grove_Recorder_V3/img/hw.png)

1. スピーカーコネクタ - JST2.0

2. マイクロフォン

3. 音声制御

4. ボタン

* 短押し: 再生
* 長押し: ボタンを離すまで録音開始

5. LEDインジケーター

* 赤色LED、ボタンを押すと点灯

6. Groveコネクタ

7. 録音スイッチ

* ソフトウェアでモジュールを制御して録音する場合はONに切り替え

8. MCU

## はじめに

ここでは、このGrove - Recorder V3.0がどのように動作するかを簡単なデモを通じて説明します。まず、以下のものを準備してください。

| Seeeduino V4 | Grove - Recorder | Base Shield |
|--------------|----------------------|-----------------|
|![画像をここに挿入](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![画像をここに挿入](https://files.seeedstudio.com/wiki/Grove_Recorder_V3/img/stuff.jpg)|![画像をここに挿入](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com)|[今すぐ購入](https://www.seeedstudio.com/Grove-Universal-4-Pin-20cm-Unbuckled-Cable-%285-PCs-Pack%29-p-749.html)|

### ハードウェア接続
Groveシリーズモジュールの利点のおかげで、はんだ付けやブレッドボードは必要ありません。必要なのは、モジュールをBase Shieldの正しいポートに接続することだけです。このデモでは、Grove - RecorderをD2に接続します。

![画像をここに挿入](https://files.seeedstudio.com/wiki/Grove_Recorder_V3/img/connection.jpeg)

## スタンドアロン

このモジュールは、コーディングなしでスタンドアロンで動作します。

* **録音** - ボタンを押してLEDが点灯するまで押し続けると録音が開始されます。録音が終了したらボタンを離します。
* **再生** - ボタンを押して離すと、録音された音声が再生されます。

モジュールをコードで制御したい場合は、以下を参照してください。

## ソフトウェア

以下のコードをコピーしてArduino IDEに貼り付け、Seeeduino V4にアップロードしてください。コードをArduinoにアップロードした後、シリアルモニターを開きます。

```
/* Grove - Recorder テストコード
+--------------------------------------------------------------------+
|   シリアルモニターを開き、コマンドを入力してモジュールを制御します:
|   r - 録音開始
|   s - 録音停止
|   p - 再生
+-------------------------------------------------------------------*/

const int pinRec  = 3;
const int pinPlay = 2;

void setup() 
{
    Serial.begin(115200);
    Serial.println("Grove - Recorder V3.0 テストコード");
    Serial.println("コマンド: \r\nr: 録音\r\ns: 録音停止\r\np: 再生");
    
    pinMode(pinRec, OUTPUT);
    pinMode(pinPlay, OUTPUT);
    digitalWrite(pinRec, HIGH);
    digitalWrite(pinPlay, HIGH);
}

void loop() 
{
    if(Serial.available())
    {
        char c = Serial.read();
        if(c == 'r')            // 録音開始
        {
            digitalWrite(pinRec, LOW);
            Serial.println("録音を開始します...");
        }
        else if(c == 's')       // 録音停止
        {
            digitalWrite(pinRec, HIGH);
            Serial.println("録音を停止します...");
        }
        else if(c == 'p')       // 再生
        {
            digitalWrite(pinPlay, LOW);
            delay(100);
            digitalWrite(pinPlay, HIGH);
            Serial.println("再生中...");
        }
    }
}
```

## コマンド入力

シリアルモニターで以下のコマンドを入力できます：

* **録音開始** - 'r' を入力
* **録音停止** - 's' を入力
* **再生** - 'p' を入力

### Codecraftを使用した操作

#### ハードウェア

**ステップ 1.** Grove - RecordをBase ShieldのD2ポートに接続します。

**ステップ 2.** Base ShieldをSeeeduino/Arduinoに接続します。

**ステップ 3.** USBケーブルを使用してSeeeduino/ArduinoをPCに接続します。

#### ソフトウェア

**ステップ 1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メインプロシージャを作業エリアにドラッグします。

:::note
    初めてCodecraftを使用する場合は、[Arduino用Codecraftガイド](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/)も参照してください。
:::

**ステップ 2.** 下の画像のようにブロックをドラッグするか、このページの最後からダウンロードできるcdcファイルを開きます。

![cc](https://files.seeedstudio.com/wiki/Grove_Recorder/img/cc_Recorder.png)

プログラムをArduino/Seeeduinoにアップロードします。

:::tip
    コードのアップロードが完了すると、シリアルモニターを使用してRecorderで録音および再生が可能になります。
:::

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Recorder_V3/res/eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

* [PDF形式の回路図](https://files.seeedstudio.com/wiki/Grove_Recorder_V3/res/Grove%20-%20Recorder%20v3.0a.pdf)
* [Eagle形式の回路図](https://files.seeedstudio.com/wiki/Grove_Recorder_V3/res/eagle.zip)
* [Codecraft CDCファイル](https://files.seeedstudio.com/wiki/Grove_Recorder/res/Grove_Recorder_CDC_File.zip)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際にスムーズな体験を提供するため、さまざまなサポートを用意しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>