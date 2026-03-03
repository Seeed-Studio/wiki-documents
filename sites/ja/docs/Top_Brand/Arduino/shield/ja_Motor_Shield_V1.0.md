---
description: モーターシールド V1.0
title: モーターシールド V1.0
keywords:
- Arduino シールド
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Motor_Shield_V1.0
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<!-- ---
name: モーターシールド V1.0
category: 廃止
bzurl:
oldwikiname: Motor_Shield_V1.0
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Motor-Shield_V1-0
sku: 103030012
tags:

--- -->

モーターシールドは、ロボティクスや機械的なアプリケーションに最適なプラットフォームです。Arduinoを使用して、2つのブラシ付きDCモーターまたは1つの4線式2相ステッピングモーターを駆動することができます。HブリッジドライバーチップL298NモータードライバーICをベースにしており、モーターを駆動するために6Vから15Vの電源が必要です。また、Arduino本体を駆動するためのオンボード5V電圧レギュレーターも含まれています。さらに、13個のオンボードGroveコネクタを使用して、プラグアンドプレイのGroveセンサーを接続することができます。

モデル: [SLD80256P](https://www.seeedstudio.com/depot/grove-base-shield-p-754.html?cPath=132_134)

![](https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/img/Smotoshield2.jpg)

## 特徴 ##

- 標準Arduino互換

- パルス幅変調（PWM）速度制御モード

- 4方向インジケータライト

- Groveプラグアンドプレイセンサー対応

- 大型ヒートシンクで大きな負荷に対応

- 最大14個のサーボをサポート

**注意:**

ドライバICおよびヒートシンクは、1000mA以上の電流で動作する場合、非常に高温になる可能性があります。

## 仕様 ##

|項目|最小|標準|最大|単位   |
|---|---|---|---|---|
|   ロジック制御電圧|4.5|5|5.5|V |
|  モーター供給電圧|6|/|15|V  |
| 出力電圧|0|/|入力電圧 -1|V  |  
|各チャンネルの出力電流|/|/|2000 |mA   |
|  出力デューティ範囲|0%~100% |   |      | /  |
|  寸法| 68.5×54.5×29.5  |   |   |  mm |
| 正味重量|37|||g  |  

- 推奨最大デューティ &lt;50%（フルロード時）

## インターフェース機能 ##

![](https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/img/Motor_shield-hard3.jpg)
**外部電源ジャック:** モーターシールド用の外部電源供給。

**モーターインターフェース:** Out 1とOut 2（Out 3とOut 4）は、DCモーターA（B）を接続可能。

**モーターA有効化コネクタ:** DCモーターAを駆動する際に、ジャンパーキャップで上記2つのインターフェースを接続。

**モーターB有効化コネクタ:** DCモーターBを駆動する際に、ジャンパーキャップで下記2つのインターフェースを接続。

**電源選択コネクタ:** USBまたは外部電源でモーターを駆動可能。ジャンパーキャップを使用してコネクタを接続すると、USB電源がモーターシールドに供給されます。

以下の表は、モーターA/BのインジケータLEDを説明しています。

|  インジケータ|説明 |
|---|---|
| IN1_red|モーターAが時計回りに回転すると点灯し、out1ピンが高レベルを出力  |
| IN2_green|モーターAが反時計回りに回転すると点灯し、out2ピンが高レベルを出力  |
|  IN3_red|モーターBが時計回りに回転すると点灯し、out3ピンが高レベルを出力 |
| IN4_green|モーターBが反時計回りに回転すると点灯し、out4ピンが高レベルを出力  |

|  ピン名|方向|Arduinoへの接続|説明
|---|---|---|---|
|VCC|/|VCC|電源選択用   |
|  VS, GND|/|/|モーター用電源、6V - 15V |
| EA|入力|D9|ブリッジAのTTL互換有効入力  |
|  EB|入力|D10|ブリッジBのTTL互換有効入力 |
|  IN1|入力|D8|ブリッジAのTTL互換入力 |
| IN2|入力|D11|ブリッジAのTTL互換入力  |
|  IN3|入力|D12|ブリッジBのTTL互換入力 |
|  IN4|入力|D13|ブリッジBのTTL互換入力 |  
|  M1-, M1+|出力|/|ブリッジAの出力 |
| M2-, M2+|出力|/|ブリッジBの出力  |  

## 使用方法 ##

### ハードウェアのインストール ###

DCモーターをモーターシールドの出力ピン M1+ & M1- (M2+ & M2-) に接続します。4線式ステッピングモーターを使用する場合は、4つのピンが正しく接続されていることを確認してください。駆動電圧（必要な電圧は使用するモーターによります。モーターのデータシートを参照してください）を電源端子に接続します。

![](https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/img/Motor-basic.jpg)

ジャンパー J4 を挿入すると、Arduino はオンボードの電圧レギュレーターを介して駆動電圧から電源供給を受けることができます。このレギュレーターは駆動電圧を5Vに変換します。

### ソフトウェア ###

[Motor shield Demo code](https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/res/Grobe-Motor_Shield_Demo_Code.zip) をダウンロードし、**Motor_shield_demo_code** スケッチを開きます。**tools-boards** で対応するArduinoボードを選択し、**tools-serial port** でシリアルポートを選択します。
![](https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/img/Motor_shield.png)
スケッチをArduinoボードにアップロードすると、2つのモーターが動作を開始します。モーターシールドを電源端子経由で電源供給し、ジャンパー J4 が挿入されている場合は、USBケーブルを取り外すことができます。

速度制御は、ArduinoのPWM出力 D9(EA) および D10(EB) から得られる従来のPWMを使用して実現されます。**analogWrite()** 関数を使用して駆動PWMを生成します：

```
int speedpinA=9;//モーターAを有効化
int speedpinB=10;//モーターBを有効化
int speed =127;//モーターの速度を定義
    ......
analogWrite(speedpinA,speed);//AnalogWriteを使用してPWMを生成し、モーター速度を制御
analogWrite(speedpinB,speed);

```

また、デジタル D8(IN1) と D11(IN2) を設定して OUT1/2 に接続されたモーターを制御し、デジタル D12(IN3) と D13(IN4) を設定して OUT3/4 に接続されたモーターを制御します。

```
int pinI1=8;//I1インターフェースを定義
int pinI2=11;//I2インターフェースを定義
    ......
digitalWrite(pinI2,HIGH);//DCモーターAを時計回りに回転
digitalWrite(pinI1,LOW);

```

以下は EA(B) と INx の論理とモーターの動作の対応表です：

| EA(B)|IN1(IN3)|IN2(IN4)|モーターA(B)の動作  |
|---|---|---|---|
|   0|x|x|停止  |
|   1|0|0|停止 |
|   1|0|1|時計回り |
|  1|1|0|反時計回り |  
| 1|1|1|停止  |

```
/*
 SEEED Studio ステッピングモーター制御 - 1回転

 SEEED STUDIO モーターシールド用に Stepper の例を適応。
 このプログラムは、Arduino に含まれる Stepper ライブラリを使用して
 ユニポーラまたはバイポーラステッピングモーターを駆動します。
 モーターは Seeed Studio モーターシールドと Arduino に接続されています。

 デジタルピン 8,11,12,13 は L298N を駆動し、ステッパーオブジェクトを作成する際に使用されます。
 デジタルピン 9 と 10 はチップを有効にするために HIGH にする必要があります。

 モーターは1方向に1回転し、その後逆方向に1回転します。

 作成日: 2007年3月11日
 修正日: 2009年11月30日
 作成者: Tom Igoe
 修正日: 2012年7月4日
 修正者: R. Dumouchelle

 */

#include <Stepper.h>

const int stepsPerRevolution = 200;  // モーターの1回転あたりのステップ数に合わせて変更
// ステッピングモーター用

// ピン8から11を使用してステッパーライブラリを初期化
Stepper myStepper(stepsPerRevolution, 8,11,12,13);           

void setup() {
  // 速度を60rpmに設定
  myStepper.setSpeed(60);
  // シリアルポートを初期化
  Serial.begin(9600);
  pinMode(9,OUTPUT);
  pinMode(10,OUTPUT);
  digitalWrite(9,HIGH);
  digitalWrite(10,HIGH);
}

void loop() {
  // 1方向に1回転
  Serial.println("時計回り");
  myStepper.step(stepsPerRevolution);
  delay(500);

  // 逆方向に1回転
  Serial.println("反時計回り");
  myStepper.step(-stepsPerRevolution);
  delay(500);
}

```

## バージョントラッカー ##

|  リビジョン | 説明 | リリース日  |  
|---|---|---|
| v1.0 | V1.0 リリース | 2012/3/29  |

## 関連プロジェクト ##

### モーターシールド V2.0 デモ ###

![](https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/img/Seeed-Recipe-Motor_Shield_V2.0_.png)

これは、Seeedstudio 2.0 モーターシールドを使用してモーターを個別に制御する方法に関するレシピです。

[作ってみたい](https://www.seeedstudio.com/recipe/171-seeed-2-0-motor-shield-individual-control.html)。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/res/Motorshield09gerber.zip" style={{borderRadius: '0 0 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース ##

- **[データシート]** [L298データシート](https://wiki.seeedstudio.com/ja/images/5/5e/L298datasheet.pdf)
- **[EAGLE]**  [モーターシールド EAGLE ファイル](https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/res/Motorshield09gerber.zip)
- **[PDF]** [モータードライバ PCB](https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/res/Motor%20Driver.pdf)
- **[PDF]** [モータードライバ回路図](https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/res/Motor%20Driver%20SCH.pdf)
- **[コード]**  [モーターシールド デモコード](https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/res/Grobe-Motor_Shield_Demo_Code.zip)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>