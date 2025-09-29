---
description: Grove - 赤外線受信モジュール
title: Grove - 赤外線受信モジュール
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Infrared_Receiver
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Receiver/img/Grove-Infrared_Receiver.jpg" /></div>

赤外線受信モジュールは赤外線信号を受信し、リモコンの検出にも使用されます。このモジュールには赤外線検出器が搭載されており、赤外線送信モジュールから発せられる赤外線光を受信します。赤外線検出器には38kHzで変調された赤外線を検出するためのデモジュレーターが内蔵されています。赤外線受信モジュールは10メートル以内で信号を良好に受信できますが、10メートルを超えると信号を受信できない場合があります。通常、[Grove - 赤外線送信モジュール](https://wiki.seeedstudio.com/ja/Grove-Infrared_Emitter)と赤外線受信モジュールを組み合わせて使用します。

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Infrared-Receiver-p-994.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

## バージョン

製品バージョン | 変更点 | リリース日
--|--|--
Grove - 赤外線受信モジュール v1.0 | 初版 | 2015年11月1日
Grove - 赤外線受信モジュール v1.1 | シルクスクリーンの変更 | 2016年7月24日

## 仕様

- 電圧: 3.3-5V
- 距離: 10m

:::tip
Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上記に記載されている対応プラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
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
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduinoX2.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/baseshiledX2.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/thumbnail.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Receiver/img/little.jpg" /></div>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Infrared-Emitter-p-993.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-Infrared-Receiver-p-994.html)|

- **ステップ 2.** Grove - 赤外線エミッターを1つのGroveベースシールドのポート**D3**に接続します。

- **ステップ 3.** Grove - 赤外線レシーバーをもう1つのGroveベースシールドのポート**D2**に接続します。

- **ステップ 4.** Grove - ベースシールドをSeeeduinoに差し込みます。

- **ステップ 5.** USBケーブルを使用してSeeeduinoをPCに接続します。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/connect.jpg" /></div>

:::note
Groveベースシールドがない場合は、以下のようにこのモジュールをSeeeduinoに直接接続することもできます。
:::

| Seeeduino       | Grove - 赤外線エミッター |
|-----------------|--------------------------|
| 5V             | 赤                       |
| GND            | 黒                       |
| 接続なし       | 白                       |
| D3             | 黄                       |

| Seeeduino       | Grove - 赤外線レシーバー |
|-----------------|--------------------------|
| 5V             | 赤                       |
| GND            | 黒                       |
| 接続なし       | 白                       |
| D2             | 黄                       |

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
// 最も低い番号のプロトコルを最初に、それ以外は任意の順序で。
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
    // このスケッチを修正して、デジタル入力ピンに接続されたボタンを押したときに送信するようにできます。
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
 *  このスケッチを使用して信号をキャプチャします。シリアルモニタにデータを出力し、
 *  それを"rawSend.ino"スケッチの指定された場所にコピー＆ペーストします。
 */
// 最良の結果を得るにはIRLibRecvPCIまたはIRLibRecvLoopのみを使用することを推奨
#include <IRLibRecvPCI.h> 

IRrecvPCI myReceiver(2);//レシーバー用のピン番号

void setup() {
  Serial.begin(9600);
  delay(2000); while (!Serial); // Leonardo用の遅延
  myReceiver.enableIRIn(); // レシーバーを開始
  Serial.println(F("赤外線信号の受信準備完了"));
}

void loop() {
  // 完全な信号が受信されるまでループを続けます
  if (myReceiver.getResults()) { 
    Serial.println(F("以下の行をコピー＆ペーストして、"));
    Serial.println(F("rawSend.inoの指定された場所に貼り付けてください。"));
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

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/send.png" /></div>

**受信例**の場合、シリアルモニタは以下のようになります：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/recv.png" /></div>

> ライブラリのより高度な使用方法については、[Seeed_Arduino_IR](https://github.com/Seeed-Studio/Seeed_Arduino_IR)をご確認ください。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Infrared_Receiver/res/Grove-Infrared_Receiver_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]**  [Grove - 赤外線受信モジュール Eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Infrared_Receiver/res/Grove-Infrared_Receiver_eagle_files.zip)
- **[Lib]**  [赤外線送信および受信ライブラリ](https://github.com/Seeed-Studio/IRSendRev)
- **[Lib]**  [LinkIt ONE 用赤外線受信ライブラリ](https://github.com/Seeed-Studio/IR_Recv_LinkIt_ONE)
- **[Pdf]**  [TSOP282 データシート](http://www.vishay.com/docs/82491/tsop382.pdf)

## プロジェクト

**IR LaunchPad to LaunchPad Communication**: Grove 赤外線送信機と受信機を使用して、1つの LaunchPad から別の LaunchPad にテキストを送信します！

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ctroberts/ir-launchpad-to-launchpad-communication-0dd109/embed' width='350'></iframe>

## 技術サポート & 製品ディスカッション

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 産業用センサーへのアップグレード

SenseCAP [S2110 コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html)と [S2100 データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)を使用することで、Grove を簡単に LoRaWAN® センサーに変えることができます。Seeed はプロトタイピングをサポートするだけでなく、SenseCAP シリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66 ハウジング、Bluetooth 設定、グローバル LoRaWAN® ネットワークとの互換性、内蔵 19 Ah バッテリー、そして強力なアプリサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして 8-in-1 気象ステーション用センサーが含まれています。次の成功する産業プロジェクトに向けて、最新の SenseCAP S210x をお試しください。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>