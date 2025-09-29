---
title: Grove - 赤外線エミッター
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/Grove-Infrared_Emitter/
slug: /ja/Grove-Infrared_Emitter
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/main.jpg)

赤外線エミッターは、赤外線LEDを通じて赤外線信号を送信するために使用されます。一方で、信号を受信するための**赤外線受信機**があります。赤外線LEDは他のLEDと同様で、その色は940nm付近に集中しています。このエミッターを使用してデータやコマンドを送信するだけでなく、リモコンをエミュレートしてArduinoを使用して家庭用電化製品を制御することもできます。赤外線エミッターは最大10メートルまで信号を確実に送信できますが、10メートルを超えると受信機が信号を受け取れない場合があります。通常、[赤外線受信機](https://wiki.seeedstudio.com/ja/Grove-Infrared_Receiver)とGrove - 赤外線エミッターの2つのGroveモジュールを組み合わせて使用します。

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Infrared-Emitter-p-993.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width={210} height={41} border={0} /></a></p>

## バージョン

製品バージョン | 変更点 | リリース日
--|--|--
Grove - 赤外線エミッター v1.0 | 初版 | 2015年11月1日
Grove - 赤外線エミッター v1.1 | 赤外線送信管の位置を変更 | 2016年7月24日
Grove - 赤外線エミッター v1.2 | C1の値を変更して電力をより安定化 | 2016年12月14日

## 応用例

- 高出力要件を持つ赤外線リモコンユニット
- 空間伝送システム
- 光学カウンターやカードリーダー用赤外線光源

## 仕様

| パラメータ               | 値/範囲       |
|-------------------------|---------------|
| 動作電圧               | 3.3/5V        |
| ピーク波長             | 940nm         |
| 半値角                 | ϕ = ± 17°     |
| 放射強度               | 72 mW/sr      |
| 距離                   | 最大10メートル |
| 動作温度               | -40℃ ～ +80℃  |
| サイズ                 | 20mmX20mm     |

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    上記で対応プラットフォームとして挙げられているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム用のソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに

Grove - 赤外線エミッターはデータを送信でき、Grove - 赤外線レシーバーはそれを受信します。

### Arduinoで遊ぶ

:::note
    Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

#### ハードウェア

- **ステップ 1.** 以下のものを準備してください：

| Seeeduino V4.2 | ベースシールド | Grove - 赤外線エミッター | Grove - 赤外線レシーバー |
|----------------|----------------|--------------------------|--------------------------|
|![画像説明をここに入力](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduinoX2.png)|![画像説明をここに入力](https://files.seeedstudio.com/wiki/wiki_english/docs/images/baseshiledX2.png)|![画像説明をここに入力](https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/thumbnail.jpg)|![画像説明をここに入力](https://files.seeedstudio.com/wiki/Grove-Infrared_Receiver/img/little.jpg)|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Infrared-Emitter-p-993.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Infrared-Receiver-p-994.html)|

- **ステップ 2.** Grove - 赤外線エミッターを1つのGroveベースシールドのポート**D3**に接続します。

- **ステップ 3.** Grove - 赤外線レシーバーをもう1つのGroveベースシールドのポート**D2**に接続します。

- **ステップ 4.** Grove - ベースシールドをSeeeduinoに差し込みます。

- **ステップ 5.** USBケーブルを使用してSeeeduinoをPCに接続します。

![](https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/connect.jpg)

:::note
 Groveベースシールドがない場合でも、以下のようにこのモジュールをSeeeduinoに直接接続することができます。
:::

| Seeeduino       | Grove - 赤外線エミッター |
|-----------------|--------------------------|
| 5V              | 赤                       |
| GND             | 黒                       |
| 未接続          | 白                       |
| D3              | 黄                       |

| Seeeduino       | Grove - 赤外線レシーバー |
|-----------------|--------------------------|
| 5V              | 赤                       |
| GND             | 黒                       |
| 未接続          | 白                       |
| D2              | 黄                       |

#### ソフトウェア

- **ステップ 1.** [Seeed_Arduino_IR](https://github.com/Seeed-Studio/Seeed_Arduino_IR)をGithubからダウンロードします。

- **ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。

以下の**送信例コード**をArduino IDEにコピーします：

**送信例コード:**

```cpp
/* send.ino IRLib2の例スケッチ
 *  コードを送信する方法を示します。
 */
#include <IRLibSendBase.h>    // まず送信ベースをインクルード
// 使用したいプロトコルのみをインクルードします。
// 最も番号の小さいプロトコルを最初に、それ以外は任意の順序で。
#include <IRLib_P01_NEC.h>    
#include <IRLib_P02_Sony.h>   
#include <IRLibCombo.h>     // すべてのプロトコルの後にこれをインクルード
// 上記すべてにより、必要なプロトコルのみを含む
// "IRsend"というユニバーサル送信クラスが自動的に作成されます。
// 次に、その送信インスタンスを宣言します。

IRsend mySender;

#define IR_SEND_PWM_PIN D3

void setup() {
  Serial.begin(9600);
  delay(2000); while (!Serial); // Leonardo用の遅延
  Serial.println(F("シリアルモニタでキーを押すたびに送信します。"));
}

void loop() {
  if (Serial.read() != -1) {
    // シリアルポートから文字が受信されるたびにコードを送信します。
    // このスケッチを修正して、デジタル入力ピンに接続されたボタンを押したときに
    // 送信するようにすることもできます。
    // 以下のステートメントでデバイスに応じた値とプロトコルを置き換えてください。
    mySender.send(SONY,0xa8bca, 20);//Sony DVD電源 A8BCA, 20ビット
    //mySender.send(NEC,0x61a0f00f,0);//NEC TV電源ボタン=0x61a0f00f
    Serial.println(F("信号を送信しました。"));
  }
}
```

以下の**受信例コード**をArduino IDEにコピーします：

**受信例コード:**

```cpp
/* rawR&cv.ino IRLib2の例スケッチ
 *  未知のプロトコルの生タイミング値をキャプチャする方法を示します。
 *  このスケッチを使用して信号をキャプチャします。シリアルモニタに
 *  出力されるデータをコピーして、"rawSend.ino"スケッチの
 *  指定された場所に貼り付けます。
 */
// 最良の結果を得るにはIRLibRecvPCIまたはIRLibRecvLoopのみを使用することを推奨
#include <IRLibRecvPCI.h> 

IRrecvPCI myReceiver(2);//レシーバー用のピン番号

void setup() {
  Serial.begin(9600);
  delay(2000); while (!Serial); // Leonardo用の遅延
  myReceiver.enableIRIn(); // レシーバーを開始
  Serial.println(F("赤外線信号を受信する準備ができました"));
}

void loop() {
  // 完全な信号が受信されるまでループを続けます
  if (myReceiver.getResults()) { 
    Serial.println(F("以下の行をコピーして、"));
    Serial.println(F("rawSend.inoの指定された場所に貼り付けてください"));
    Serial.print(F("\n#define RAW_DATA_LEN "));
    Serial.println(recvGlobal.recvLength,DEC);
    Serial.print(F("uint16_t rawData[RAW_DATA_LEN]={\n\t"));
    for(bufIndex_t i=1;i<recvGlobal.recvLength;i++) {
      Serial.print(recvGlobal.recvBuffer[i],DEC);
      Serial.print(F(", "));
      if( (i % 8)==0) Serial.print(F("\n\t"));
    }
    Serial.println(F("1000};"));// 任意の末尾スペースを追加
    myReceiver.enableIRIn();      // レシーバーを再起動
  }
}
```

- **ステップ 7.** Arduino IDEの**シリアルモニタ**を開きます。**ツール -> シリアルモニタ**をクリックするか、++ctrl+shift+m++キーを同時に押します。

**送信例**の場合、シリアルモニタは以下のようになります：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/send.png" /></div>

**受信例**の場合、シリアルモニタは以下のようになります：

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/recv.png" /></div>

> ライブラリのより高度な使用方法については、[Seeed_Arduino_IR](https://github.com/Seeed-Studio/Seeed_Arduino_IR)をご確認ください。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/res/Grove-Infrared_Emitter_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]**  [Grove-Infrared Emitter eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/res/Grove-Infrared_Emitter_eagle_files.zip)
- **[Lib]**  [IR送信および受信ライブラリ](https://github.com/Seeed-Studio/Seeed_Arduino_IRSendRev)
- **[Pdf]**  [TSAL6200 データシート](http://www.vishay.com/docs/81010/tsal6200.pdf)

## プロジェクト

**IR LaunchPad間通信**: Grove IRエミッターと受信機を使用して、1つのLaunchPadから別のLaunchPadにテキストを送信します！

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ctroberts/ir-launchpad-to-launchpad-communication-0dd109/embed' width='350'></iframe>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>