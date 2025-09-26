---
description: Grove Beginner Kit for Arduino(EOL)
title: Grove Beginner Kit for Arduino(EOL)
keywords:
- コース付きキット
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove_Beginner_Kit_for_Arduino
last_update:
  date: 05/15/2025
  author: hushuxu
---


## GROVEシステム

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/pack.jpg)

Groveは、標準化されたコネクタを備えたベースユニットとさまざまなモジュールで構成されるモジュール型プロトタイピングシステムです。ベースユニットは通常、Groveモジュールからの入力や出力を通信、処理、制御するマイクロプロセッサです。各Groveモジュールは通常、単一の機能を担当し、単純なボタンからより複雑な心拍センサーまでさまざまです。標準化されたGroveコネクタにより、ユーザーはGroveユニットをブロックのように組み立てることができ、ジャンパーやはんだ付けベースのシステムと比較して、組み立てや分解がはるかに簡単で、実験、構築、プロトタイピングの学習システムを簡素化します。  
また、GroveセンサーやアクチュエータモジュールをGroveシステム開発ボードなしで使用したい方のために、Grove to Pin Header ConverterやGrove Base HATも提供しています。

![Grove header](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/grove-wire.jpg)![Grove connector](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/connector.png)![Grove-jumper wire](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/jumperwire.png)

Groveシステムのユーザーは、少なくとも基本的な電子知識を持っている必要があります。そうでない場合は、この基本チュートリアルを通じて、Groveシステムの基本操作を学ぶ必要があります。このチュートリアルの最初の部分では、スターターキットに含まれるコンポーネントに関する基本情報のリストを提供し、その後、Seeeduino Lotus用のArduino IDEの基本設定を説明します。その後、11のチュートリアルセッションでは、スターターキットに含まれる各コンポーネントの基本操作と、複数のモジュールを組み合わせたアプリケーションを紹介し、Groveシステムの接続とコーディングに関する基本的な知識と洞察を学ぶことができます。

## Arduino用Grove Beginner Kit

Grove Beginner Kit for Arduinoには、Seeeduino Lotus V1.1開発ボード（Arduino互換）と8つのモジュールが含まれています。詳細情報は以下の通りです。

### 開発ボード

#### Seeeduino Lotus V1.1

Seeeduino Lotusは、ATMEGA328 AVRマイクロコントローラを搭載した開発ボードで、SeeeduinoとGrove Base Shieldを組み合わせたものです。このボードは、Atmel ATmega328-MUマイクロコントローラとCP2102Nチップを使用しています。ATmega328-MUは高性能で低消費電力のAVR 8ビットマイクロコントローラであり、CP2102NはUSBからシリアルへの変換チップで、マイクロUSBケーブルを使用してSeeeduino Lotusとコンピュータを通信させることができます。Seeeduino Lotusには、14のデジタル入力/出力（6つはPWM出力として使用可能）、7つのアナログ入力/出力、マイクロUSB接続、ICSPヘッダー、12のGroveコネクタ、リセットボタンがあります。

**特徴**

- Arduino UNOと完全互換
- ATmega328マイクロコントローラ
- 2つのオンボードGroveコネクタ
- 14のデジタルI/Oピン（6つのPWM出力）
- 6つのアナログ入力
- ISPヘッダー
- Arduino UNO-R3シールド互換
- マイクロUSBプログラミングおよび電源供給
- 5V動作電圧
- Windows、Mac OS、Linuxをサポート

**ハードウェア**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/pinout.png)

LED-D13: ボードのD13ピンに接続されたLEDです。プログラム/スケッチのオンボードLEDインジケータとして使用できます。

USB入力: USBポートは、ボードをPCに接続してプログラミングを行ったり、電源を供給したりするために使用されます。マイクロUSBは非常に一般的なUSBポートのタイプで、多くのAndroidスマートフォンやその他のデバイスで見られます。おそらく家にこのケーブルが何本もあるでしょう。

リセット: このボタンは側面に便利に配置されており、シールドが上に取り付けられている場合でもSeeeduinoボードをリセットできます。他のArduinoボードではボタンが上部に配置されているため、シールドが取り付けられているとアクセスが難しくなります。

電源ピン、アナログピン、デジタルピン: Groveコネクタ以外のセンサーやアクチュエータを接続したい場合に使用できる追加のヘッダーです。特に電源ヘッダーは、より多くのセンサーやデバイスに電力を供給したい場合に使用されます。

Groveコネクタ: Seeed Studioには、アナログ、デジタル、I2C、UART接続を利用できるさまざまなセンサー/デバイスがあります。さらに、独立したGroveコネクタを販売しており、独自のセンサー接続を作成するのに役立ちます。

ICSP: これはATmega328P用のICSP接続で、Arduino Uno、Due、Mega、Leonardo互換ハードウェアの標準ICSP/SPI位置に配置されています。このポートのSPIピン（MISO、SCK、MOSI）は、Arduino Unoと同様にデジタルピン12、13、11にも接続されています。

USB 2 Uart: USB-2-Uartのピン配置です。これらのパッドは、オンボードのATmega328をリセットモードにすることで、他のUARTデバイスと対話するために使用できます。これにより、Seeeduino LotusをUSB2UARTユーティリティボードとして使用できます。

**Arduino UNO vs Seeeduino Lotus**

|                        | Seeeduino Lotus V1.1 | Arduino Uno R3 |
|:----------------------:|:--------------------:|:--------------:|
|      リリース日        |        2018/03       |     2016/02    |
|     マイクロコントローラ |      ATMega328P      |   ATMega328P   |
|    動作電圧            |          5V          |       5V       |
|          フラッシュ     |         32KB         |      32KB      |
|          SRAM          |          2KB         |       2KB      |
|         EEPROM         |          1KB         |       1KB      |
| 電源供給インターフェース |       マイクロUSB    |  USB, DCポート |
|    Groveコネクタ数      |          12          |      なし      |

#### センサー

**[Grove - Buzzer](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/buzzer.jpg)

このモジュールは圧電ブザーを主なコンポーネントとして使用しており、デジタル出力に接続され、ロジックレベルがHighに設定されると高音を発生させます。また、アナログPWM出力から生成される周波数に応じてさまざまな音を発生させることもできます。（注：通常の人間の耳が識別できる周波数範囲は20Hzから20kHzです。）

**[Grove - 傾きスイッチ](https://www.seeedstudio.com/Grove-Tilt-Switch-p-771.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/Tilt.jpg)

Grove - 傾きスイッチはボタンと同等で、デジタル入力として使用されます。傾きスイッチの内部にはボールが2つあり、ケースが直立しているときにピンと接触します。ケースを傾けるとボールが接触せず、接続が行われません。このモジュールではSIGラインに接続され、NCは使用されていません。

**[Grove - 連結可能RGB LED](https://www.seeedstudio.com/Grove-Chainable-RGB-Led-V2-0-p-2903.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/Grove-Chainable_RGB_LED_V2.0.jpg)

Grove - 連結可能RGB LEDは、フルカラーLEDドライバであるP9813チップをベースにしています。3つの定電流ドライバと256階調のグレイシェードの変調出力を提供します。MCUと2線式通信（データとクロック）を使用して通信します。この2線式通信を使用して、追加のGrove - 連結可能RGB LEDモジュールをカスケード接続することができます。内蔵のクロック再生機能により、伝送距離が向上します。このGroveモジュールは、カラフルなLEDを使用したプロジェクトに適しています。

**[Grove - 光センサー](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-p-2727.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/lightsensor.jpg)

Grove - 光センサーは、光依存抵抗（フォトレジスタ）を統合しており、光の強度を検出します。光の強度が増すとフォトレジスタの抵抗が減少します。オンボードのデュアルOpAmpチップLM358が、光の強度に対応する電圧を生成します（つまり、抵抗値に基づきます）。出力信号はアナログ値で、光が明るいほど値が大きくなります。

**[Grove - ラインファインダー](https://www.seeedstudio.com/Grove-Line-Finder-v1-1-p-2712.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/linefinder.jpg)

Grove - ラインファインダーは、ライン追従ロボット用に設計されています。IR発光LEDとIR感光フォトトランジスタを備えています。マイクロコントローラにデジタル信号を出力し、ロボットが白い背景上の黒い線、またはその逆を追従できるようにします。

**[Grove - LCD RGBバックライト](https://www.seeedstudio.com/Grove-LCD-RGB-Backlight-p-1643.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/LCD.jpg)

このGrove - LCD RGBバックライトモジュールは、16文字×2行のLCDディスプレイで、I2Cバスインターフェースを使用して開発ボードと通信します。これにより、ピンヘッダが10本から2本に削減され、Groveシステムにとって非常に便利です。このLCDディスプレイモジュールはカスタム文字もサポートしており、簡単なコーディング設定でハート記号やスティックマンを作成して表示することができます。

**[Grove - 温湿度センサー(DHT11)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT1-p-745.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/DHT11.jpg)

この温湿度センサーは、事前にキャリブレーションされたデジタル出力を提供します。独自の容量性センサー要素が相対湿度を測定し、温度は負の温度係数（NTC）サーミスタによって測定されます。このセンサーは優れた信頼性と長期安定性を備えています。ただし、このセンサーは0度以下の温度では動作しないことに注意してください。

**[Grove - 3軸デジタル加速度計](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-1-5-p-765.html)**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/3_axis_cover.jpg)

3軸デジタル加速度計は、方向検出、ジェスチャー検出、モーション検出などのプロジェクトにおいて重要な役割を果たします。この3軸デジタル加速度計（±1.5g）は、Freescaleの低消費電力モジュールMMA7660FCをベースにしています。最大10,000gの高衝撃耐性と、設定可能なサンプル毎秒レートを特徴としています。大きな測定範囲を必要としない一般的なアプリケーションにおいて、この加速度計は耐久性、エネルギー効率、コスト効率の面で優れた選択肢です。

## はじめに

### 最低限必要なもの

- Grove スターターキット
- micro USB ケーブル
- Arduino IDE がインストールされたコンピュータ

### 基本チュートリアル

#### Arduino IDE の基本設定

**ステップ 1.** Seeeduino Lotus V1.1 用 USB シリアルドライバのインストール

Seeeduino Lotus Version 1.1 以降では、CP2102N USB シリアルチップを採用しており、Windows、MacOS、Linux を含む主要なオペレーティングシステムをサポートしています。お使いのオペレーティングシステムに適したドライバをダウンロードしてインストールしてください。
ダウンロードリンク:  
公式ウェブサイト: [CP210x USB to UART Bridge VCP Drivers](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/logo.jpg)

**ドライバのインストール**

Windows:

ダウンロードした圧縮ファイルを解凍し、解凍されたファイルを開いて、オペレーティングシステムのビット数に応じたドライバをインストールします。この例では 64bit を選択しています。32bit OS のユーザーは _x86 ファイルを選択してください。インストールウィザードに従ってインストールを進めます。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/win1.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/win2.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/win3.png)

Mac OS:

「Silicon Labs VCP Driver.pkg」ファイルをダブルクリックし、セットアップウィザードに従ってインストールを進めます。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/mac1.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/mac2.png)

**ステップ 2.** [Arduino IDE](https://www.arduino.cc/en/Main/Software) のダウンロードとインストール

お使いのオペレーティングシステムに応じて Arduino IDE をダウンロードしてインストールしてください。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard.png)

<b id="step3">ステップ 3.</b> Seeeduino Lotus 用ライブラリの追加

- Arduino | Preferences を開き、設定ページの「Additional Boards Manager URLS」を見つけます。ライブラリ URL をテキストボックスにコピー＆ペーストし、OK を押して設定を反映させます。  
ライブラリ URL: https://raw.githubusercontent.com/Seeed-Studio/Seeed_Platform/master/package_legacy_seeeduino_boards_index.json

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard1.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard2.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard3.png)

- Tools | Board: | Boards Manager を開き、「Seeeduino AVR」を検索してインストールします。Boards Manager ウィンドウに「Seeeduino AVR」が表示されない場合は、最初のステップを繰り返し、入力した URL が正しいことを確認してください。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard4.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard5.png)

- Tools | Board: を開き、セカンダリリストに「Seeeduino AVR Boards」セクションが表示されます。このチュートリアルでは「Seeeduino Lotus」を選択してください。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard6.png)

**ステップ 4.** Seeeduino Lotus の接続

Seeeduino Lotus を Micro-USB ケーブルを使用してコンピュータに接続してください。Seeeduino Lotus の緑色の電源 LED が点灯するはずです。

![with micro-USB](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/usb.jpg)

**ステップ 5.** Seeeduino Lotus 用 IDE の設定

前述の手順に従い、Boards Manager で「Seeeduino Lotus」を選択してください。

Tools | Serial Port メニューから Arduino ボードのシリアルデバイスを選択します。正しいシリアルデバイスを見つけるには、Arduino ボードを取り外してメニューを再度開きます。消えたエントリが Arduino ボードです。ボードを再接続してそのシリアルポートを選択してください。選択したエントリには「SLAB_USB」が含まれているはずです。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard07.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard7.png)

Tools | Programmer を「AVR ISP」に設定します。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard8.png)

### 点滅デモ

Arduino IDE の基本設定が完了したら、Seeeduino Lotus 開発ボードで点滅デモコードをテストできます。注意: 以下を続けるには、上記の手順を完了している必要があります。

**メニューから点滅デモを選択**

メニューバーから File | Examples | 01 Basics | Blink を選択します。点滅例のコードが新しいウィンドウに表示されます。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard9.png)

**コードのアップロード**

Tools メニューで正しい Board、Port、Programmer が選択されていることを確認してください。  
次に、IDE の左上隅にある右矢印アイコンを押して、Lotus 開発ボードにコードをアップロードします。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard10.png)

コードが正常にアップロードされると、IDE のログウィンドウに「avrdude done. Thank you.」というテキストが表示されます。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard11.png)

これで、内蔵 LED が 1 秒間隔で点滅するのが確認できるはずです。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/blink.jpg)

**点滅コードの説明**

`void setup()` はセットアップ関数で、リセットボタンを押すかボードに電源を入れたときに一度だけ実行されます。

```cpp
void setup() {
}
```

デジタルピン `LED_BUILTIN` を出力として初期化します。

```cpp
pinMode(LED_BUILTIN, OUTPUT);
```

`void loop()` はループ関数で、永遠に繰り返し実行されます。

```cpp
void loop() {
}
```

`digitalWrite()` は `LED_BUILTIN` ピンを電圧レベル HIGH に設定します。これは LED を点灯させることを意味します。同様に、LED を消灯するにはコード内の HIGH を LOW に変更します。

```cpp
digitalWrite(LED_BUILTIN, HIGH);
digitalWrite(LED_BUILTIN, LOW);
```

`delay()` はプログラムを一時停止させます。括弧内の数字は一時停止する時間（ミリ秒単位）を意味します。

```cpp
delay(1000);
```

## Grove スターターキット 10 セッションチュートリアル

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/kit.jpg)

### 目標
このセクションは10個のチュートリアルで構成されており、チュートリアルは2つの部分に分けられます。最初の8セッションでは、このスターターキットに含まれる各モジュールの基本操作を紹介し、最後の2セッションでは、モジュールを組み合わせて実際のアプリケーションに適用する方法を例示します。

### 前提条件

Seeeduino Lotus を Arduino IDE で操作する基本的な知識とコーディングスキルがこのチュートリアルには必要です。そのため、上記の基本セットアップチュートリアルを完了し、Seeeduino Lotus 用の USB シリアルドライバをオペレーティングシステムに正常にインストールし、LED 点滅デモを完了して Seeeduino Lotus ボードが完全に動作することを確認してください。

### 学習成果

- Arduino IDE を操作して Seeeduino Lotus V1.1 用のコードを書き、Grove スターターキットのモジュールを駆動できるようになる。
- このキットに含まれるモジュールの種類とその用途を識別できるようになる。
- Grove スターターキットの各コンポーネントをデモンストレーションし、このチュートリアル後に関連するモジュールを自分のプロジェクトに活用できるようになる。

### セッション 1: Grove - ブザー

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/buzzer.jpg)

**目的**  
ブザーを使用して音を生成し、特定の周波数を設定して音階を作成します。

**主要知識**

- ブザーモジュールはアクチュエータです。
- デジタル信号を使用してブザー音を鳴らす。
- 周波数を設定して特定の音階を生成する。
- `tone(pin, frequency, duration)` 関数を使用してブザーで音楽を再生する。
- Arduino IDE で "for ループ" の使い方を学ぶ。

**ハードウェア要件**

自分で準備するもの:
- micro-USB ケーブル
- Arduino IDE とシリアル-to-USB ドライバがインストールされたコンピュータ

キットに含まれるもの:
- Seeeduino Lotus V1.1 開発ボード
- Grove ケーブル
- Grove – ブザーモジュール

**ハードウェア接続**

**ステップ 1.** Grove ケーブルを使用して Grove - ブザーモジュールを Seeeduino Lotus の D6 ポートに接続してください。

![D6 with seeeduino](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/buzzer_ard.jpg)

**ステップ 2.** Seeeduino Lotus を micro USB ケーブルでコンピュータに接続します。

**ソフトウェアプログラミング**

**例 1**: デジタルロジックの高/低を使用してブザーを「鳴らす」

ステップ 1: 以下のコードを Arduino IDE にコピー＆ペーストしてください。

```cpp
// ブザーをピン6に割り当て
#define buzzer 6

void setup()
{
  // ブザーを出力として設定
  pinMode(buzzer, OUTPUT);
}

void loop()
{
  // ブザーをオンにする（ロジックレベルを高に設定）
  digitalWrite(buzzer, HIGH);
  // 1秒待つ
  delay(1000);
  // ブザーをオフにする（ロジックレベルを低に設定）
  digitalWrite(buzzer, LOW);
  // 1秒待つ
  delay(1000);
}
```

ステップ 2: コードを Seeeduino Lotus にアップロードします。

ステップ 3: 結果を観察します。

:::success
コードのアップロードが完了すると、1秒間隔で「ブー」という音が聞こえます。
:::

**例 2**: 異なる周波数を使用してブザーで異なる音階を生成する。

ステップ 1: 以下のコードを Arduino IDE にコピー＆ペーストしてください。

```cpp
// ブザーをピン6に割り当て
#define buzzer 6                

void setup()
{
  /* tone(pin, frequency, duration) */
  // ブザーピンを設定して264Hzを300ms再生
  tone(buzzer, 262, 300);
  // 1秒待つ
  delay(1000);

  // ブザーピンを設定して297Hzを300ms再生
  tone(buzzer, 294, 300);
  // 1秒待つ
  delay(1000);

  // ブザーピンを設定して330Hzを300ms再生
  tone(buzzer, 330, 300);
  // 1秒待つ
  delay(1000);
}

void loop()
{
  // 音階を繰り返す必要はありません。
}
```

ステップ 2: コードを Seeeduino Lotus にアップロードします。

ステップ 3: 結果を観察します。

:::success
コードのアップロードが完了すると、ブザーから「ド、レ、ミ」の音が聞こえます。
:::

**例 3**: `tone(pin, frequency, duration)` 関数を使用してブザーで音楽を再生する。

ステップ 1: 以下のコードを Arduino IDE にコピー＆ペーストしてください。

```cpp
// 音階の周波数を初期化
#define NOTE_A4  440
#define NOTE_AS4 466
#define NOTE_C4  262
#define NOTE_D4  294
#define NOTE_E4  330
#define NOTE_F4  349
#define NOTE_G4  392
#define NOTE_C5  523

// ブザーをピン6に割り当て
#define buzzer 6

// メロディの音階
int melody[] = {
  NOTE_C4, NOTE_C4, NOTE_D4, NOTE_C4, NOTE_F4, NOTE_E4,
  NOTE_C4, NOTE_C4, NOTE_D4, NOTE_C4, NOTE_G4, NOTE_F4,
  NOTE_C4, NOTE_C4, NOTE_C5, NOTE_A4, NOTE_F4, NOTE_E4, NOTE_D4,
  NOTE_AS4, NOTE_AS4, NOTE_A4, NOTE_F4, NOTE_G4, NOTE_F4
};

// 音符の長さ: 4 = 4分音符, 8 = 8分音符, など
int noteDurations[] = {
  8, 8, 4, 4, 4, 2,
  8, 8, 4, 4, 4, 2,
  8, 8, 4, 4, 4, 4, 4,
  8, 8, 4, 4, 4, 2,
};

void setup() {
  // メロディの音符を繰り返し処理
  for (int thisNote = 0 ; thisNote < 25 ; thisNote++) {

    // 音符の長さを計算（例: 4分音符 = 1000 / 4）
    int noteDuration = 1000 / noteDurations[thisNote];
    tone(buzzer, melody[thisNote], noteDuration);

    // 音符間の最小時間を設定
    int pauseBetweenNotes = noteDuration * 1.30;
    delay(pauseBetweenNotes);
    noTone(buzzer);
  }
}

void loop() {
  // メロディを繰り返す必要はありません。
}
```

ステップ 2: コードを Seeeduino Lotus にアップロードします。

ステップ 3: 結果を観察します。

:::success
コードのアップロードが完了すると、ブザーからメロディが聞こえます。どの曲か当ててみてください。
:::

**さらに探求する**

Brett Hagman の GitHub リポジトリ "[Tone](https://github.com/bhagman/Tone)" をチェックして、音階や音楽を作成してください。

### セッション 2: Grove - チルトスイッチ

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/Tilt.jpg)

**目的**  
チルトスイッチモジュールを使用して Seeeduino Lotus の内蔵 LED をオン/オフし、前のセッションで使用したブザーモジュールをチルトスイッチで鳴らします。

**主要知識**

- チルトスイッチは信号入力モジュールです。
- チルトスイッチの操作方法。
- `digitalRead(pin)` 関数を使用してチルトスイッチから入力ロジック信号を取得します（オンの場合は HIGH オフの場合は LOW）。
- `if(condition){}else{}` 関数と比較演算子（`!= < <= == > >=` など）の使用方法。

**ハードウェア要件**

自分で準備するもの:


- micro-USBケーブル  
- Arduino IDEとシリアル-to-USBドライバーがインストールされたコンピュータ  

**キットに含まれるもの**  

- Seeeduino Lotus V1.1開発ボード  
- Groveケーブル  
- Grove – 傾きスイッチ  
- Grove – ブザー  

**ハードウェア接続**  

ステップ1: Grove – 傾きスイッチをSeeeduino LotusのD5ポートに接続します。  

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/tilt_ard.jpg)  

ステップ2: Seeeduino Lotusをmicro USBケーブルでコンピュータに接続します。  

**ソフトウェアプログラミング**  
**例1**: シリアルモニターを使用して傾きスイッチの動作を観察する  

ステップ1: 以下のコードをArduino IDEにコピー＆ペーストします。  

```cpp
// pin 5に名前tiltswitchPinを割り当てる
#define tiltswitchPin 5
// 読み取った値を格納する整数変数'val'を作成
int val;

void setup()
{
  // tiltswitchPinのpinModeを入力に設定
  pinMode(tiltswitchPin, INPUT);
  // シリアルポートを開き、データレートを9600bpsに設定
  Serial.begin(9600);
}

void loop()
{ 
  // 傾きスイッチの入力を読み取る
  val = digitalRead(tiltswitchPin);
  // 傾きスイッチの状態を表示する。1はオン 0はオフ。
  Serial.println(val);
}
```

ステップ2: コードをSeeeduino Lotusにアップロードします。  

ステップ3: シリアルモニターを開きます。  

シリアルモニターを開くには、メニューバーから「ツール | シリアルモニター」を選択するか、ツールバーの虫眼鏡アイコンをクリックしてください。注意: コードのアップロードが完了するまでシリアルモニターを開かないでください。  

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard12.png)  

ステップ4: 結果を観察します。  

傾きスイッチを両方向に傾けてください。シリアルモニターに「1」または「0」が表示されるはずです。これで、傾きスイッチをオン/オフする正しい向きを確認できます。  

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/tilt_off&on.jpg)  

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard13.png)  

**例2**: 傾きスイッチを使用して内蔵LEDをオン/オフする  

ステップ1: 以下のコードをArduino IDEにコピー＆ペーストします。  

```cpp
// pin 5に名前tiltSwitchを設定
#define tiltSwitch 5

void setup()
{ 
  // pin 5(傾きスイッチ)を入力ピンとして設定
  pinMode(tiltSwitch, INPUT);
  // pin 13(内蔵LED)を出力ピンとして設定
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop()
{ 
  // 傾きスイッチの状態を読み取る
  if (HIGH == digitalRead(tiltSwitch)) {
    /*
       傾きスイッチの論理レベルが
       高い場合、内蔵LEDをオンにする
    */
    digitalWrite(LED_BUILTIN, HIGH);
  } else
  {
    // それ以外の場合、内蔵LEDをオフにする
    digitalWrite(LED_BUILTIN, LOW);
  }
}
```

ステップ2: コードをSeeeduino Lotusにアップロードします。  

ステップ3: 結果を観察します。  

:::success  
これで、傾きスイッチを正しい向きに傾けることで、Seeeduino Lotusの内蔵LEDをオン/オフできるようになります。  
:::  
![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/tilt_off&on.jpg)  

**例3**: 傾きスイッチを使用してブザーの着信音を一時停止および再生する  

Grove – ブザーモジュールをSeeeduino LotusのD6ポートに接続してください。  

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/buzzer_tilt.jpg)  

ステップ1: 以下のコードをArduino IDEにコピー＆ペーストします。  

```cpp
// 音符の周波数を初期化
#define NOTE_A4  440
#define NOTE_AS4 466
#define NOTE_C4  262
#define NOTE_D4  294
#define NOTE_E4  330
#define NOTE_F4  349
#define NOTE_G4  392
#define NOTE_C5  523

// メロディの音符:
int melody[] = {
  NOTE_C4, NOTE_C4, NOTE_D4, NOTE_C4, NOTE_F4, NOTE_E4,
  NOTE_C4, NOTE_C4, NOTE_D4, NOTE_C4, NOTE_G4, NOTE_F4,
  NOTE_C4, NOTE_C4, NOTE_C5, NOTE_A4, NOTE_F4, NOTE_E4, NOTE_D4,
  NOTE_AS4, NOTE_AS4, NOTE_A4, NOTE_F4, NOTE_G4, NOTE_F4
};

// 音符の長さ: 4 = 4分音符 8 = 8分音符など:
int noteDurations[] = {
  8, 8, 4, 4, 4, 2,
  8, 8, 4, 4, 4, 2,
  8, 8, 4, 4, 4, 4, 4,
  8, 8, 4, 4, 4, 2,
};

// pin 5に名前tiltSwitchを設定
#define tiltSwitch 5
// pin 6に名前buzzerを設定
#define buzzer 6
// 最新の再生音符を格納する変数currentNoteを設定
int currentNote;

void setup()
{
  // pin 5(傾きスイッチ)を入力ピンとして設定
  pinMode(tiltSwitch, INPUT);
}

void loop()
{
  /* 傾きスイッチの状態を読み取る
  傾きスイッチの論理レベルが
  高い場合、音楽を再生開始 */
  if (HIGH == digitalRead(tiltSwitch)) {

    for (int thisNote = currentNote ; thisNote < 25 ; thisNote++) {
      // 音符の長さを計算するには 1秒を音符の種類で割る。
      // 例: 4分音符 = 1000 / 4 8分音符 = 1000 / 8など。
      int noteDuration = 1000 / noteDurations[thisNote];
      tone(buzzer, melody[thisNote], noteDuration);

      // 音符間の最小時間を設定する。
      int pauseBetweenNotes = noteDuration * 1.30;
      delay(pauseBetweenNotes);

      // 音楽が終了した場合、currentNoteを0にリセット
      if (thisNote >= 24) {
        currentNote = 0;
      }

      // 音楽再生中に傾きスイッチの状態を読み取り
      // 傾きスイッチがLOWの場合 音楽再生を停止し 前回再生した音符を保存し
      // 次の音符に移動
      if (LOW == digitalRead(tiltSwitch)) {

        // 現在の音符(thisNote)をcurrentNoteに保存
        currentNote = thisNote;
        // currentNoteを1増加させて次の音符を再生準備
        currentNote++;
        // 音楽が終了した場合にcurrentNoteを最初にリセット
        if (currentNote >= 25)
        {
          // 音楽を最初から再開するためにcurrentNoteを0にリセット
          currentNote = 0;
        }
        // 傾きスイッチがLOWなら音楽再生を停止
        break;
      }
    }
  }
}
```

ステップ2: コードをSeeeduino Lotusにアップロードします。  

ステップ3: 結果を観察します。  

:::success  
これで、傾きスイッチをオフの位置に傾けることで着信音を一時停止し、オンの位置に傾けることで音楽を再開できるようになります。  
:::  

**さらに探求**  

このセッションの後、傾きスイッチセンサーモジュールを工具箱の蓋に取り付けることができます。蓋を持ち上げると傾きスイッチがオンになり、短時間の遅延を設定してブザーを作動させて音を鳴らし、蓋が開いたままであることを知らせることができます。これにより、工具箱の使用後に蓋を閉め忘れることを防ぐことができます。  

### セッション3: Grove – チェーン可能RGB LED  

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/Grove-Chainable_RGB_LED_V2.0.jpg)  

**目的**  

チェーン可能なRGB LEDを制御して異なる色を表示し、傾きスイッチを使用して色を切り替えるコードを使用します。

**重要な知識**

- Grove – Chainable RGB LEDはアクチュエータです。
- Groveモジュール用のライブラリをインポートします。
- `setColorHSB()`関数を使用してLEDモジュールの色相、彩度、明るさを制御します。
- `setColorRGB()`関数を使用してLEDモジュールの色と明るさを制御します。
- `%`（モジュロ）演算を使用して余りを求めます（例：5%2=1、9%3=0）。
- `switch(val)…case…;`構文を使用します。

**ハードウェア要件**

自分で準備するもの：

- micro-USBケーブル
- Arduino IDEとシリアル-to-USBドライバがインストールされたコンピュータ

キットに含まれるもの：

- Seeeduino Lotus V1.1開発ボード
- Groveケーブル
- Grove – Chainable RGB LED
- Grove – 傾きスイッチ
- Grove – ブザー

**ハードウェア接続**

ステップ1: Grove – Chainable RGB LEDをSeeeduino LotusのD7ポートに接続します。注意：LEDのG|V|DI|CIポートを以下の図のように接続してください。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/rgb_ard.jpg)

ステップ2: Seeeduino Lotusをmicro USBケーブルでコンピュータに接続します。

**ソフトウェアプログラミング**

**ライブラリの追加**

以下の手順でGrove – Chainable RGB LED用の[ライブラリ](https://github.com/pjpmarques/ChainableLED/archive/v1.2.zip)を追加します。

ステップ1: ライブラリURLからGitHubリポジトリを開き、ZIPデータをダウンロードします。

GitHubページで「Clone or download | Download ZIP」を見つけて選択し、ZIPのみをダウンロードしてください。ダウンロードしたZIPファイルの保存先を覚えておいてください。

ステップ2: 「ライブラリを含める | .ZIPライブラリを追加」を選択します。

「スケッチを開く | ライブラリを含める | .ZIPライブラリを追加」を選択し、新しいポップアップウィンドウで前のステップでダウンロードしたZIPファイルを選択し、「選択」をクリックします。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard14.png)

ステップ3: ライブラリが正常に追加されたかテストします。

「ファイルを選択 | サンプル | ChainableLED-1.2 | CycleTroughColors」を開きます。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/ard15.png)

コードをアップロードします：コードをアップロードしてください。

:::success
 	LEDモジュールが異なる色を循環している場合、ライブラリが正常にロードされたことが確認できます。
:::
![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/rgb_flash_8.jpg)

結論：ライブラリ追加方法により、ユーザーはセンサーモジュールベンダーが作成したサードパーティのセンサー用ドライバやライブラリを簡単に追加できます。このチュートリアルセッションでは、`setColorRGB(byte led, byte red, byte green, byte blue)`関数を使用しました。この関数はSeeed Studioによって実装されており、新しいセンサーモジュールを適応する際の開発コストを削減します。他のGroveモジュール用のライブラリも後で追加する必要があります。

**例1**: `setColorHSB`関数を使用してLEDの色を変更する

ステップ1: 以下のコードをArduino IDEにコピー＆ペーストします。

```cpp
// ChainableLEDライブラリをこのプロジェクトに追加
#include <ChainableLED.h>

// チェーンに接続されたLEDの数を設定
#define NUM_LEDS  1

/* ChainableLEDの名前をledsに割り当て、
   ChainableLEDのピンをpin7（クロックピン）と
   pin8（データピン）に設定し、LEDの数を指定 */
ChainableLED leds(7, 8, NUM_LEDS);

void setup()
{
  // ChainableLED ledsを初期化
  leds.init();
}
// hueを0.0の値で初期化
float hue = 0.0;
// upをtrueの値で初期化
boolean up = true;

void loop()
{
  /* forループを使用してチェーンに接続された
     各LEDをループ処理
     この場合、LEDは1つだけ */
  for (byte i = 0; i < NUM_LEDS; i++) {

    /* setColorHSB(byte led, float hue, float saturation, float brightness);
       この場合、最初で唯一のChainableLED 0に
       変化するhue、完全な彩度、半分の明るさを設定 */
    leds.setColorHSB(i, hue, 1, 0.5);
    // 各色に50msの遅延を設定
    delay(50);

    /* upがtrueの場合、hueを0.025間隔で増加
       それ以外の場合、hueを0.025間隔で減少 */
    if (up) {
      hue += 0.025;
    }
    else
    {
      hue -= 0.025;
    }
    /*
      hueが1.0を超え、upがtrueの場合、upをfalseに設定
      それ以外の場合、hueが0.0以下でupがfalseの場合、upをtrueに設定
    */
    if (hue >= 1.0 && up)
    {
      up = false;
    }
    else if (hue <= 0.0 && !up)
    {
      up = true;
    }
  }
}
```

ステップ2: コードをSeeeduino Lotusにアップロードします。

ステップ3: 結果を観察します。

LEDの色がhueの値に応じて変化するのが確認できます。hueの値は0.025ずつ増加し、値が1に達すると0.025ずつ減少します。各色は50ミリ秒間点灯します。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/rgb_flash_8.jpg)

**例2**: `setColorRGB`関数を使用してLEDの色と明るさを変更する

ステップ1: 以下のコードをArduino IDEにコピー＆ペーストします。

```cpp
/*
   Grove RGBを制御するためのChainableRGBライブラリの使用例。
   このコードはLEDストリップの色をフェードイン・アウトさせます。
*/

// ChainableLEDライブラリをこのプロジェクトに追加
#include <ChainableLED.h>

// チェーンに接続されたLEDの数を設定
#define NUM_LEDS  1

/* ChainableLEDの名前をledsに割り当て、
   ChainableLEDのピンをpin7（クロックピン）と
   pin8（データピン）に設定し、LEDの数を指定 */
ChainableLED leds(7, 8, NUM_LEDS);

void setup()
{
  // ChainableLED ledsを初期化
  leds.init();
}
// powerを0の値で初期化
byte power = 0;

void loop()
{
  /* forループを使用してチェーンに接続された
     各LEDをループ処理
     この場合、LEDは1つだけ */
  for (byte i = 0; i < NUM_LEDS; i++)
  {
    /*
      %は余りを求めるモジュロ演算
      例: 0 % 2 = 0, 1 % 2 = 1, 2 % 2 = 0...
      setColorRGB(byte led, byte red, byte green, byte blue);
      この場合、LEDチェーンの偶数番号は
      緑色をフェードインし、奇数番号は
      赤色をフェードアウトします。
      最初のLEDは0としてカウントします。
    */
    if (i % 2 == 0)
      // 赤色を0からフルパワーまで明るくする
      leds.setColorRGB(i, power, 0, 0);
    else
      // 緑色をフルパワーから0まで暗くする
      leds.setColorRGB(i, 0, 255 - power, 0);
  }
  // powerを10ずつ増加
  power += 10;
  // 各明るさで0.5秒点灯
  delay(500);
}

```

ステップ 2: Seeeduino Lotus にコードをアップロードする

ステップ 3: 結果を観察する

赤色の LED が 0.5 秒ごとに明るさを増していくのが確認できるはずです。これは、`setColorRGB(byte led, byte red, byte green, byte blue)` 関数で赤色変数の値のみを設定しているためです。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/rgb_eg2.jpg)

もし赤色と緑色の変数を以下のように変更した場合：

```cpp
leds.setColorRGB(i, power, 0, 0);
```

から

```cpp
leds.setColorRGB(i, power, 255-power, 0);
```

に変更すると、違いを観察してください。

**例 3**: 傾きスイッチを使って LED とブザーを制御する

Grove – 傾きスイッチを Seeeduino Lotus の D5 ポートに接続します。

Grove – ブザーモジュールを Seeeduino Lotus の D6 ポートに接続します。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/rgb_buzzer_tilt.jpg)

ステップ 1: 以下のコードを Arduino IDE にコピー＆ペーストします

```cpp

// ChainableLED ライブラリをこのプロジェクトに追加
#include <ChainableLED.h>

// 連結された LED の数を設定
#define NUM_LEDS  1

// 音符の周波数を初期化
#define NOTE_A4  440
#define NOTE_AS4 466
#define NOTE_C4  262
#define NOTE_D4  294
#define NOTE_E4  330
#define NOTE_F4  349
#define NOTE_G4  392
#define NOTE_C5  523

// メロディの音符:
int melody[] = {
  NOTE_C4, NOTE_C4, NOTE_D4, NOTE_C4, NOTE_F4, NOTE_E4,
  NOTE_C4, NOTE_C4, NOTE_D4, NOTE_C4, NOTE_G4, NOTE_F4,
  NOTE_C4, NOTE_C4, NOTE_C5, NOTE_A4, NOTE_F4, NOTE_E4, NOTE_D4,
  NOTE_AS4, NOTE_AS4, NOTE_A4, NOTE_F4, NOTE_G4, NOTE_F4
};

// 音符の長さ: 4 = 4分音符, 8 = 8分音符, など
int noteDurations[] = {
  8, 8, 4, 4, 4, 2,
  8, 8, 4, 4, 4, 2,
  8, 8, 4, 4, 4, 4, 4,
  8, 8, 4, 4, 4, 2,
};

// ピン 5 を傾きスイッチとして設定
#define tiltSwitch 5
// ピン 6 をブザーとして設定
#define buzzer 6

/* ChainableLED を leds という名前で割り当て、
   ChainableLED のピンをピン7（クロックピン）と
   ピン8（データピン）に設定し、LED の数を指定 */
ChainableLED leds(7, 8, NUM_LEDS);

// 最新の音符を保存するための変数 currentNote を設定
int currentNote;
// hue を 0.0 の値で初期化
float hue = 0.0;
// up を true の値で初期化
boolean up = true;
// power を 0 の値で初期化
byte power = 0;
// color を 0 の値で初期化
int color = 0;

void setup()
{
  // ピン 5（傾きスイッチ）を入力ピンとして設定
  pinMode(tiltSwitch, INPUT);
  // ChainableLED leds を初期化
  leds.init();
}

void loop()
{
  /* 傾きスイッチの状態を読み取り、
     傾きスイッチの論理レベルが HIGH の場合、
     音楽を再生開始 */
  if (HIGH == digitalRead(tiltSwitch)) {

    for (int thisNote = currentNote ; thisNote < 25 ; thisNote++) {
      // 音符の長さを計算するには、1秒を音符の種類で割る
      // 例: 4分音符 = 1000 / 4, 8分音符 = 1000 / 8, など
      int noteDuration = 1000 / noteDurations[thisNote];
      tone(buzzer, melody[thisNote], noteDuration);

      // 音符を区別するために、音符間に最小時間を設定
      int pauseBetweenNotes = noteDuration * 1.30;
      delay(pauseBetweenNotes);

      /* 音楽が終了した場合、currentNote を 0 にリセット */
      if (thisNote >= 24) {
        currentNote = 0;
      }

      /* LED を異なる色でループさせる */
      leds.setColorHSB(0, hue, 1, 0.5);

      /* up が true の場合、hue を 0.025 ずつ増加
         それ以外の場合、hue を 0.025 ずつ減少 */
      if (up) {
        hue += 0.025;
      }
      else
      {
        hue -= 0.025;
      }
      /* hue が 1.0 を超え、up が true の場合、up を false に設定
         それ以外で hue が 0.0 以下で up が false の場合、up を true に設定 */
      if (hue >= 1.0 && up)
      {
        up = false;
      }
      else if (hue <= 0.0 && !up)
      {
        up = true;
      }

      /* 音楽中に傾きスイッチの状態を読み取り、
         傾きスイッチの論理レベルが LOW の場合、
         音楽を停止し、前回再生した音符を保存し、
         次の音符に移動 */
      if (LOW == digitalRead(tiltSwitch)) {
        /* switch...case を使用して LED を 3 色でループ
           color = 0 の場合は赤色
           color = 1 の場合は緑色
           color = 2 の場合は青色
           color が 3 以上の場合は 0 にリセット */
        if (color >= 3) {
          color = 0;
        }
        switch (color) {
          case 0:
            // LED を赤色に設定
            leds.setColorRGB(0, 255, 0, 0);
            break;
          case 1:
            // LED を緑色に設定
            leds.setColorRGB(0, 0, 255, 0);
            break;
          case 2:
            // LED を青色に設定
            leds.setColorRGB(0, 0, 0, 255);
            break;
        }
        // この条件に入るたびに color を 1 増加
        color ++;

        // thisNote を currentNote に保存
        currentNote = thisNote;
        // 次の音符を再生する準備として currentNote を 1 増加
        currentNote ++;
        /* 音楽が終了した場合、currentNote を最初にリセット */
        if (currentNote >= 25)
        {
          // currentNote を 0 にリセットして音楽を最初から再生
          currentNote = 0;
        }
        // 傾きスイッチが LOW に設定されている場合、音楽を停止
        break;
      }
    }
  }
}

```

ステップ 2: Seeeduino Lotus にコードをアップロードする

ステップ 3: 結果を観察する

傾きスイッチを傾けると、傾きスイッチがオンのときに LED の色が変化し、ブザーの音色も変化します。傾きスイッチがオフのときは、LED が赤、緑、青の順にサイクルし、ブザーは停止します。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/rgb_eg3.jpg)



**さらに探求する**

このセッションの後、最初の 3 つのセッションのモジュールを組み合わせて、誕生日プレゼントボックスを作成できます。ボックスの蓋に傾きスイッチセンサーを配置し、ボックスが開いたときに傾きスイッチがトリガーされ、ブザーが誕生日の曲を再生し、LED ライトがカラフルな光を点滅させ始めます。

### セッション 4: Grove - 光センサー

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/lightsensor.jpg)

**目的**

光センサーモジュールを使用して、チェイン可能なRGB LEDモジュールをオン/オフし、周囲の光の強度に応じてLEDの明るさを制御します。

**重要な知識**

- 光センサーモジュールはアナログ信号入力モジュールです。
- `map(value, fromLow, fromHigh, toLow, toHigh)`関数を使用して、アナログ出力の数値を別の範囲に再マッピングし、より明確で実用的にします。
- 光センサーを光スイッチとして使用する。
- 光センサーを使用して、周囲の明るさを感知してLEDの明るさを制御する。

**ハードウェア要件**

自分で準備するもの

- micro-USBケーブル
- Arduino IDEとシリアル-to-USBドライバがインストールされたコンピュータ

キットに含まれるもの

- Seeeduino Lotus V1.1開発ボード
- Groveケーブル
- Grove – 光センサー
- Grove – チェイン可能RGB LED

**ハードウェア接続**

ステップ1: Grove – 光センサーモジュールをSeeeduino LotusのA0ポートに接続します。

ステップ2: Grove – チェイン可能RGB LEDをSeeeduino LotusのD7ポートに接続します。

ステップ3: micro USBケーブルでSeeeduino Lotusをコンピュータに接続します。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/light_rgb.jpg)

**ソフトウェアプログラミング**

**例1**: 光センサーを使用して周囲の光の明るさに応じてLEDをオン/オフする

ステップ1: 以下のコードをArduino IDEにコピー＆ペーストします。

```cpp
// ChainableLEDライブラリをこのプロジェクトに追加
#include <ChainableLED.h>

// チェインに接続されたLEDの数を設定
#define NUM_LEDS  1

/* ChainableLEDの名前をledsとし、
   ChainableLEDのピンをpin7（クロックピン）とpin8（データピン）に設定し、
   LEDの数を指定 */
ChainableLED leds(7, 8, NUM_LEDS);

// アナログピンA0をLightSensorとして命名
#define LightSensor A0

void setup()
{
  // ChainableLED ledsを初期化
  leds.init();
}

void loop()
{
  // 光センサーの値を読み取り、valueに格納
  int value = analogRead(LightSensor);
  // センサーの読み取り値が150未満の場合、LEDをオンにする
  if (value < 150) {
    // LEDをオンにする
    leds.setColorRGB(0, 10, 10, 10);
    // 1秒間遅延
    delay(1000);
  } else {
    // LEDをオフにする
    leds.setColorRGB(0, 0, 0, 0);
    // 1秒間遅延
    delay(1000);
  }
}
```

ステップ2: コードをSeeeduino Lotusにアップロードします。

ステップ3: 結果を観察します。

注意: 周囲の光が明るすぎる場合は、手で光センサーモジュールを覆うとLEDが点灯するはずです。光センサーの読み取り値が150を超えると、LEDは消灯します。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/light_eg1.jpg)

**例2**: 光センサーを使用してLEDの明るさを制御する

ステップ1: 以下のコードをArduino IDEにコピー＆ペーストします。

```cpp
// ChainableLEDライブラリをこのプロジェクトに追加
#include <ChainableLED.h>

// チェインに接続されたLEDの数を設定
#define NUM_LEDS  1

/* ChainableLEDの名前をledsとし、
   ChainableLEDのピンをpin7（クロックピン）とpin8（データピン）に設定し、
   LEDの数を指定 */
ChainableLED leds(7, 8, NUM_LEDS);

#define LightSensor A0

void setup()
{
  // ChainableLED ledsを初期化
  leds.init();
  Serial.begin(9400);
}

// hueを0.0で初期化
float hue = 0.0;
// upをtrueで初期化
boolean up = true;

void loop()
{
  // 光センサーの値を読み取り、valueに格納
  int value = analogRead(LightSensor);
  /* map(value, fromLow, fromHigh, toLow, toHigh)
     数値をある範囲から別の範囲に再マッピング
     この場合、光センサーのアナログ値（0-800）を
     100-0にマッピング。周囲が明るいほどセンサーの
     読み取り値が高くなり、マッピングされた値は逆に
     なります。したがって、LEDの明るさは暗くなります。
     チェイン可能LEDの明るさは浮動小数点数のみを受け入れるため、
     マッピングされた値を100で割ります。
  */
  float value_float = map(value, 0, 800, 50, 0) / 100.0;
  /* setColorHSB(byte led, float hue, float saturation, float brightness);
     マッピングされた値(value_float)を明るさとして使用
  */
  leds.setColorHSB(0, hue, 1, value_float);
  delay(100);

  /* upがtrueの場合、hueを0.025ずつ増加
     それ以外の場合、hueを0.025ずつ減少
  */
  if (up) {
    hue += 0.025;
  } else {
    hue -= 0.025;
  }
  /* hueが1.0を超え、upがtrueの場合、upをfalseに設定
     それ以外の場合、hueが0.0以下でupがfalseの場合、upをtrueに設定
  */
  if (hue >= 1.0 && up) {
    up = false;
  } else if (hue <= 0.0 && !up) {
    up = true;
  }
}
```

ステップ2: コードをSeeeduino Lotusにアップロードします。

ステップ3: 結果を観察します。

周囲の明るさが増すとLEDの明るさが減少し、周囲の明るさが減少するとLEDの明るさが増加します。光センサーに明るい光を当てるとLEDが暗くなり、そうでない場合はLEDが明るくなります。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/light_eg2.jpg)

**さらに探求**

この光センサーモジュールを廊下の照明システムに統合することで、昼間は光センサーが太陽光を検知して廊下の照明の明るさを低く抑え、電力を節約し、電球の寿命を延ばすことができます。

---

### セッション 5: Grove - ラインファインダー

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/linefinder.jpg)

**目的**

ラインファインダーを使用して黒い線を検出し、ラインファインダーが黒い線を検出したかどうかに応じてLEDの色を制御します。

**重要な知識**

- Grove – ラインファインダーはデジタル信号入力モジュールです。
- シリアルモニターの使用方法を復習します。
- 信号入力モジュールを使用してGrove – チェイン可能RGB LEDを制御します。

**ハードウェア要件**

自分で準備するもの

- micro-USBケーブル
- Arduino IDEとシリアル-to-USBドライバがインストールされたコンピュータ

キットに含まれるもの

- Grove – ラインファインダー
- Grove – チェイン可能RGB LED

**ハードウェア接続**

ステップ1: Grove – ラインファインダーモジュールをSeeeduino LotusのD3ポートに接続します。

**ステップ 2**: Seeeduino Lotus をマイクロ USB ケーブルでコンピュータに接続します。

 ![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/line_ard.jpg)

**ソフトウェアプログラミング**

**例 1**: シリアルモニタを使用してラインファインダーからの出力信号を表示およびテストします。

ステップ 1: 以下のコードを Arduino IDE にコピー＆ペーストします。

```cpp
// pin3 を signalPin として命名
#define signalPin 3

void setup() {
  // デジタルピンを入力として初期化
  pinMode(signalPin, INPUT);
  // シリアルポートを開き、データレートを 9600 bps に設定
  Serial.begin(9600);
}

void loop() {
  // ライン検出器の入力を読み取る
  int val = digitalRead(signalPin);
  
  // ライン検出器の状態を表示、1 は黒、0 は白
  Serial.println(val);
}
```

ステップ 2: コードを Seeeduino Lotus にアップロードします。

ステップ 3: 結果を観察します。

注意: ラインファインダーで検出する物体は少なくとも 5cm 離してください。ラインファインダーをテストするには、白い紙やタイルに黒いテープを貼る（または黒い物体を使用する）必要があります。ラインファインダーを黒い物体に向けると、シリアルモニタに 0 が表示され、黒い物体からラインファインダーを離すと、シリアルモニタに 1 が表示されます。

 ![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/line_eg1_1.jpg) 

**例 2**: ライン検出器を使用して Grove – Chainable RGB LED モジュールをオンまたはオフにします。

Grove – Chainable RGB LED を Seeeduino Lotus の D7 ポートに接続します。

 ![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/line_rgb.jpg)

ステップ 1: 以下のコードを Arduino IDE にコピー＆ペーストします。

```cpp
// ChainableLED ライブラリをこのプロジェクトに追加
#include <ChainableLED.h>

// チェーンに接続された LED の数を設定
#define NUM_LEDS  1

/* leds を ChainableLED の名前として割り当て、
   ChainableLED のピンを pin7（クロックピン）と pin8（データピン）に設定し、
   LED の数を指定 */
ChainableLED leds(7, 8, NUM_LEDS);

// pin3 を lineFinder として命名
#define lineFinder 3

void setup() {
  // デジタルピンを入力として初期化
  pinMode(lineFinder, INPUT);
  // ChainableLED leds を初期化
  leds.init();
}

void loop() {
  /* ライン検出器の入力を読み取る
   * 黒（HIGH）を検出した場合、LED をオンにする
  */
  if (HIGH == digitalRead(lineFinder))
  {
    // LED をオフにする
    leds.setColorRGB(0, 10, 10, 10);
  }
  
  /* ライン検出器の入力を読み取る
   * ロジック LOW を読み取った場合、LED をオフにする
  */
  if (LOW == digitalRead(lineFinder))
  {
    // LED をオフにする
    leds.setColorRGB(0, 0, 0, 0);
  }
}
```

ステップ 2: コードを Seeeduino Lotus にアップロードします。

ステップ 3: 結果を観察します。

ラインファインダーが黒いラインを検出すると、LED がオフになります。それ以外の場合、ラインファインダーが黒いラインを検出できない場合、LED が点灯します。

 ![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/line_eg2.jpg)

**例 3**: ラインファインダーを使用して LED を赤または緑に点灯させます。

ステップ 1: 以下のコードを Arduino IDE にコピー＆ペーストします。

```cpp
// ChainableLED ライブラリをこのプロジェクトに追加
#include <ChainableLED.h>

// チェーンに接続された LED の数を設定
#define NUM_LEDS  1

/* leds を ChainableLED の名前として割り当て、
   ChainableLED のピンを pin7（クロックピン）と pin8（データピン）に設定し、
   LED の数を指定 */
ChainableLED leds(7, 8, NUM_LEDS);

// pin3 を lineFinder として命名
#define lineFinder 3

void setup() {
  // デジタルピンを入力として初期化
  pinMode(lineFinder, INPUT);
  // ChainableLED leds を初期化
  leds.init();
}

void loop() {
  /* ライン検出器の入力を読み取る
   * 黒（HIGH）を検出した場合、緑の LED を設定
  */
  if (HIGH == digitalRead(lineFinder))
  {
    // 緑の LED
    leds.setColorRGB(0, 0, 255, 0);
  }
  
  /* ライン検出器の入力を読み取る
   * ロジック LOW を読み取った場合、赤の LED を設定
  */
  if (LOW == digitalRead(lineFinder))
  {
    // 赤の LED
    leds.setColorRGB(0, 255, 0, 0);
  }
}
```

ステップ 2: コードを Seeeduino Lotus にアップロードします。

ステップ 3: 結果を観察します。

ラインファインダーが黒いラインを検出すると、LED は赤い光を放ちます。それ以外の場合、ラインファインダーが黒いラインを検出できない場合、LED は緑の光を放ちます。

 ![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/line_eg3.jpg)

**さらに探求**

このラインファインダーモジュールとモータードライバー（Hブリッジ）を使用して、自分のライン追跡カーを作成できます。ラインファインダーが黒いラインを検出すると、片側の車輪モーターを作動させ、ラインファインダーが黒いラインを外れると、その側の車輪モーターを停止させ、もう一方の車輪モーターを作動させます。これにより、車は黒いラインに沿って前方を一定に左または右に回転しながら進むことができます。

### セッション 6: Grove - LCD RGB バックライト

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/LCD.jpg)

**目的**

Grove - LCD RGB バックライトスクリーンを使用して「Hello World」とカスタム文字を表示します。

**主要な知識**

- ライブラリの追加方法を復習
- 文字の位置指定を習得し、バイナリコードを使用してカスタム文字を生成
- LCD スクリーン上でスクロールテキストを表示
- LCD に組み込まれた文字コードを使用して特殊文字を表示（例: 度記号「°」）

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/chartable.png)

**ハードウェア要件**

自分で準備するもの

- マイクロ USB ケーブル
- Arduino IDE とシリアル-to-USB ドライバがインストールされたコンピュータ

キットに含まれるもの

- Seeeduino Lotus V1.1 開発ボード
- Grove ケーブル
- Grove - LCD RGB バックライト

**ハードウェア接続**

ステップ 1: Grove - LCD RGB バックライトモジュールを Seeeduino Lotus の I2C ポートに接続します。注意: I2C ポートは 1 つのドットが付いているものです。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/lcd_ard.jpg)

ステップ 2: Seeeduino Lotus をマイクロ USB ケーブルでコンピュータに接続します。

**ソフトウェアプログラミング**

**ライブラリの追加**

Grove - LCD RGB バックライトスクリーン用の [ライブラリ](https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip) を追加します。

ライブラリの追加方法については、チュートリアル 3 の指示に従ってください。

**例 1**: 「Hello World」を表示

ステップ 1: 以下のコードを Arduino IDE にコピー＆ペーストします。

```cpp
// rgb_lcd ライブラリをインクルード
#include "rgb_lcd.h"

// rgb_lcd に lcd という名前を割り当て
rgb_lcd lcd;

void setup() 
{
    // LCD の列数と行数を設定
    lcd.begin(16, 2);
    
    // LCD に「Hello, World!」を表示
    lcd.print("Hello, World!");
    delay(1000);
}

void loop() 
{
    // カーソルを列 0、行 1 に設定
    // （注意: 行 1 は 2 行目、カウントは 0 から始まる）
    lcd.setCursor(0, 1);
    // リセットからの秒数を表示
    lcd.print(millis()/1000);
    delay(100);
}

```

ステップ 2: Seeeduino Lotus にコードをアップロードする

ステップ 3: 結果を観察する

最初の行に「Hello, World!」が表示され、2行目にカウントダウンタイマーが表示されるはずです。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/helloworld.jpg)

**例 2**: Seeed Studio ロゴを表示し、組み込みの文字コードを使用してテキストを表示する

ステップ 1: 以下のコードを Arduino IDE にコピー＆ペーストしてください

```cpp

// LCD ライブラリを追加
#include "rgb_lcd.h"

// rgb_lcd 画面の名前を lcd に割り当て
rgb_lcd lcd;

/* カスタマイズされた文字を描画
   この場合は Seeed Studio のロゴ
*/
byte top_leftleft[8] = {
  B00000,
  B00000,
  B01000,
  B01000,
  B01000,
  B01100,
  B01100,
  B01110
};
byte top_midleft[8] = {
  B00001,
  B00010,
  B00010,
  B00110,
  B00110,
  B00100,
  B01100,
  B01100
};
byte top_midright[8] = {
  B10000,
  B01000,
  B01000,
  B01100,
  B01100,
  B00100,
  B00110,
  B00110
};
byte top_rightright[8] = {
  B00000,
  B00000,
  B00010,
  B00010,
  B00010,
  B00110,
  B00110,
  B01110
};
byte bot_leftleft[8] = {
  B00110,
  B00111,
  B00011,
  B00011,
  B00001,
  B00000,
  B00000,
  B00000
};
byte bot_midleft[8] = {
  B01100,
  B01110,
  B00110,
  B00110,
  B10011,
  B11011,
  B11111,
  B01111
};
byte bot_midright[8] = {
  B00110,
  B01110,
  B01100,
  B01100,
  B11001,
  B11011,
  B11111,
  B11110
};
byte bot_rightright[8] = {
  B01100,
  B11100,
  B11000,
  B11000,
  B10000,
  B00000,
  B00000,
  B00000
};

void setup()
{
  // LCD 画面を初期化
  // LCD の列数と行数を設定
  lcd.begin(16, 2);

  /* Seeed Studio ロゴの各要素に
     番号を作成して割り当て
  */
  lcd.createChar(0, top_leftleft);
  lcd.createChar(1, top_midleft);
  lcd.createChar(2, top_midright);
  lcd.createChar(3, top_rightright);
  lcd.createChar(4, bot_leftleft);
  lcd.createChar(5, bot_midleft);
  lcd.createChar(6, bot_midright);
  lcd.createChar(7, bot_rightright);

  /* カーソルを列 4、行 0 に設定
     注意: 行 0 は最初の行を指し、カウントは 0 から始まります
     列にも同じルールが適用されます
  */
  lcd.setCursor(4, 0);
  // 列 4、行 0 に「I」とスペースを LCD に表示
  lcd.print("I ");
  // カーソルを列 6、行 0 に設定
  lcd.setCursor(6, 0);
  /* LCD 文字ルックアップテーブルを使用して LOVE を表示
     注意: write() メソッドは生のバイトを送信するためのもの
     print() は主にデータを ASCII としてフォーマットするためのものです。
     これは LCD にテキストを表示する別の方法です。
  */
  // 文字 76 はルックアップテーブル上の L
  lcd.write(76);
  // 16進数 0x4F（79）はルックアップテーブル上の O に対応
  lcd.write(0x4F);
  // 文字 86 はルックアップテーブル上の V
  lcd.write(86);
  // 文字 69 はルックアップテーブル上の E
  lcd.write(69);
  // カーソルを列 10、行 0 に設定
  lcd.setCursor(10, 0);
  // LCD にスペースと Grove を表示
  lcd.write(" Grove");
  // カーソルを列 4、行 1 に設定
  lcd.setCursor(4, 1);
  // LCD に Seeed Studio を表示
  lcd.print("Seeed Studio");

  // Seeed Studio ロゴを表示
  lcd.setCursor(0, 0);
  lcd.write((unsigned char)0);
  lcd.setCursor(1, 0);
  lcd.write(1);
  lcd.setCursor(2, 0);
  lcd.write(2);
  lcd.setCursor(3, 0);
  lcd.write(3);
  lcd.setCursor(0, 1);
  lcd.write(4);
  lcd.setCursor(1, 1);
  lcd.write(5);
  lcd.setCursor(2, 1);
  lcd.write(6);
  lcd.setCursor(3, 1);
  lcd.write(7);
}

void loop()
{

}

```

ステップ 2: Seeeduino Lotus にコードをアップロードする

ステップ 3: 結果を観察する

最初の 8 ブロックに Seeed Studio ロゴが表示され、その後に 1 行目に「I Love Grove」、2 行目に「Seeed Studio」が表示されます。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/lcd_seeed.jpg)

**例 3**: LCD ディスプレイでスクロールテキストを表示する

ステップ 1: 以下のコードを Arduino IDE にコピー＆ペーストしてください

```cpp


// LCD ライブラリを追加
#include "rgb_lcd.h"

// rgb_lcd 画面の名前を lcd に割り当て
rgb_lcd lcd;

/* カスタマイズされた文字を描画
   この場合は Seeed Studio のロゴ
*/
byte top_leftleft[8] = {
  B00000,
  B00000,
  B01000,
  B01000,
  B01000,
  B01100,
  B01100,
  B01110
};
byte top_midleft[8] = {
  B00001,
  B00010,
  B00010,
  B00110,
  B00110,
  B00100,
  B01100,
  B01100
};
byte top_midright[8] = {
  B10000,
  B01000,
  B01000,
  B01100,
  B01100,
  B00100,
  B00110,
  B00110
};
byte top_rightright[8] = {
  B00000,
  B00000,
  B00010,
  B00010,
  B00010,
  B00110,
  B00110,
  B01110
};
byte bot_leftleft[8] = {
  B00110,
  B00111,
  B00011,
  B00011,
  B00001,
  B00000,
  B00000,
  B00000
};
byte bot_midleft[8] = {
  B01100,
  B01110,
  B00110,
  B00110,
  B10011,
  B11011,
  B11111,
  B01111
};
byte bot_midright[8] = {
  B00110,
  B01110,
  B01100,
  B01100,
  B11001,
  B11011,
  B11111,
  B11110
};
byte bot_rightright[8] = {
  B01100,
  B11100,
  B11000,
  B11000,
  B10000,
  B00000,
  B00000,
  B00000
};

void setup()
{
  // LCD 画面を初期化
  // LCD の列数と行数を設定
  lcd.begin(16, 2);
  // 1 秒待機
  delay(1000);
}

void loop()
{

  /* Seeed Studio ロゴの各要素に
     番号を作成して割り当て
  */
  lcd.createChar(0, top_leftleft);
  lcd.createChar(1, top_midleft);
  lcd.createChar(2, top_midright);
  lcd.createChar(3, top_rightright);
  lcd.createChar(4, bot_leftleft);
  lcd.createChar(5, bot_midleft);
  lcd.createChar(6, bot_midright);
  lcd.createChar(7, bot_rightright);

  /* カーソルを列 4、行 0 に設定
     注意: 行 0 は最初の行を指し、カウントは 0 から始まります
     列にも同じルールが適用されます
  */
  lcd.setCursor(4, 0);
  // 列 4、行 0 に「I」とスペースを LCD に表示
  lcd.print("I ");
  // カーソルを列 6、行 0 に設定
  lcd.setCursor(6, 0);
  /* LCD 文字ルックアップテーブルを使用して LOVE を表示
     注意: write() メソッドは生のバイトを送信するためのもの
     print() は主にデータを ASCII としてフォーマットするためのものです。
     これは LCD にテキストを表示する別の方法です。
  */
  // 文字 76 はルックアップテーブル上の L
  lcd.write(76);
  // 16進数 0x4F（79）はルックアップテーブル上の O に対応
  lcd.write(0x4F);
  // 文字 86 はルックアップテーブル上の V
  lcd.write(86);
  // 文字 69 はルックアップテーブル上の E
  lcd.write(69);
  // カーソルを列 10、行 0 に設定
  lcd.setCursor(10, 0);
  // LCD にスペースと Grove を表示
  lcd.write(" Grove");
  // カーソルを列 4、行 1 に設定
  lcd.setCursor(4, 1);
  // LCD に Seeed Studio を表示
  lcd.print("Seeed Studio");

  // Seeed Studio ロゴを表示
  lcd.setCursor(0, 0);
  lcd.write((unsigned char)0);
  lcd.setCursor(1, 0);
  lcd.write(1);
  lcd.setCursor(2, 0);
  lcd.write(2);
  lcd.setCursor(3, 0);
  lcd.write(3);
  lcd.setCursor(0, 1);
  lcd.write(4);
  lcd.setCursor(1, 1);
  lcd.write(5);
  lcd.setCursor(2, 1);
  lcd.write(6);
  lcd.setCursor(3, 1);
  lcd.write(7);
  
  // 16 文字分（文字列の長さ）を左にスクロール
  // 文字列を画面外左に移動
  for (int positionCounter = 0; positionCounter < 16; positionCounter++) {
    // 1 文字分左にスクロール
    lcd.scrollDisplayLeft();
    // 少し待機
    delay(200);
  }

  // 32 文字分（文字列の長さ + 表示長さ）を右にスクロール
  // 文字列を画面外右に移動
  for (int positionCounter = 0; positionCounter < 32; positionCounter++) {
    // 1 文字分右にスクロール
    lcd.scrollDisplayRight();
    // 少し待機
    delay(200);
  }

  // 16 文字分（表示長さ + 文字列の長さ）を左にスクロール
  // 文字列を中央に戻す
  for (int positionCounter = 0; positionCounter < 16; positionCounter++) {
    // 1 文字分左にスクロール
    lcd.scrollDisplayLeft();
    // 少し待機
    delay(200);
  }
}

```
ステップ 2: Seeeduino Lotus にコードをアップロード

ステップ 3: 結果を観察

ディスプレイにテキストがスクロールするのが見えるはずです。最初は右から左にスクロールし、テキストが画面の左端で消えるまで続きます。その後、テキストが左から右に戻ってスクロールします。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/lcd_scroll.jpg)

**さらに探求**

この[ウェブサイト](https://maxpromer.github.io/LCD-Character-Creator/)を使用すると、Arduino で駆動される LCD スクリーン用のカスタムキャラクターを生成することができます。

### セッション 7: Grove - 温度 & 湿度センサー (DHT11)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/DHT11.jpg)

**目的**

DHT11 センサーモジュールを使用して周囲の温度と湿度を検出し、DHT11 からの出力データを LCD スクリーンに表示します。

**重要な知識**

- DHT11 はデジタルセンサーモジュールです
- シリアルモニターと LCD スクリーンの操作方法を復習
- DHT11 ライブラリの追加と初期設定
- シリアルモニターと LCD スクリーンを使用して DHT11 センサーからのデータを表示

**ハードウェア要件**

自分で準備するもの

- micro-USB ケーブル
- Arduino IDE とシリアル-to-USB ドライバがインストールされたコンピュータ

キットに含まれるもの

- Seeeduino Lotus V1.1 開発ボード
- Grove ケーブル
- Grove – 温度 & 湿度センサー (DHT11)

**ハードウェア接続**

ステップ 1: Grove – 温度 & 湿度センサー (DHT11) モジュールを Seeeduino Lotus の D2 ポートに接続します。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/DHT11_ard.jpg)

ステップ 2: Seeeduino Lotus を micro USB ケーブルでコンピュータに接続します。

**ソフトウェアプログラミング**

**ライブラリを追加** [Library](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor/archive/master.zip)

**例 1**: シリアルモニターを使用して周囲の温度と湿度を監視

ステップ 1: 以下のコードを Arduino IDE にコピー & ペースト

```cpp
// DHT センサーライブラリを追加
#include <DHT.h>

// デジタルピン 2 を DHTPIN に設定
#define DHTPIN 2
// センサータイプを DHT11 に設定
#define DHTTYPE DHT11

/* DHT センサーの名前を dht に割り当て
   センサーピンを DHTPIN (ピン 2) に設定
   センサータイプを DHTTYPE (DHT11) に設定
*/
DHT dht(DHTPIN, DHTTYPE);

void setup() {
  // DHT センサーを初期化
  dht.begin();
  // シリアルポートを開き、データレートを 9600 bps に設定
  Serial.begin(9600);
  // ボードを初期化するために 2 秒待機
  delay(2000);
}

void loop() {
  // 湿度値を h に格納
  int h = dht.readHumidity();
  // 温度値 (摂氏) を t に格納
  int t = dht.readTemperature();
  // 華氏に変換した温度値を f に格納
  int f = dht.convertCtoF(t);
  // タイトル "Temperature in C:" を表示
  Serial.print("Temperature in C: ");
  // 温度値 t を表示
  Serial.print(t);
  /* Serial.print() と Serial.println() の違いに注意
     Serial.print() は同じ行にデータを表示
     Serial.println() は新しい行にデータを表示
     温度単位 ºC を表示し、新しい行に移動
  */
  Serial.println("ºC");
  // タイトル "Temperature in F:" を表示
  Serial.print("Temperature in F: ");
  // 温度値 f を表示
  Serial.print(f);
  // 温度単位 ºF を表示し、新しい行に移動
  Serial.println("ºF");
  // タイトル "Humidity:" を表示
  Serial.print("Humidity: ");
  // 湿度値 h を表示
  Serial.print(h);
  // % 記号を表示
  Serial.println("%");
}
```

ステップ 2: Seeeduino Lotus にコードをアップロード

ステップ 3: シリアルモニターを開く

ステップ 4: 結果を観察

シリアルモニターに以下のような温度と湿度データが表示されるのが確認できます。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result1.png)

**例 2**: LCD スクリーンを使用して DHT11 センサーからのデータを表示

まず、Grove - LCD RGB バックライトモジュールを Seeeduino Lotus の I2C ポートに接続します。注: I2C ポートは 1 つのドットが付いているものです。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/DHT11_lcd.png)

ステップ 1: 以下のコードを Arduino IDE にコピー & ペースト

```cpp
// DHT センサーライブラリを追加
#include <DHT.h>
// LCD ライブラリを追加
#include <rgb_lcd.h>

// デジタルピン 2 を DHTPIN に設定
#define DHTPIN 2
// センサータイプを DHT11 に設定
#define DHTTYPE DHT11

/* DHT センサーの名前を dht に割り当て
   センサーピンを DHTPIN (ピン 2) に設定
   センサータイプを DHTTYPE (DHT11) に設定
*/
DHT dht(DHTPIN, DHTTYPE);

// LCD スクリーンの名前を lcd に割り当て
rgb_lcd lcd;

void setup() {
  // DHT センサーを初期化
  dht.begin();
  // LCD スクリーンを初期化
  // LCD の列数と行数を設定
  lcd.begin(16, 2);
  // 2 秒待機
  delay(2000);
}

void loop() {
  // 湿度値を h に格納
  int h = dht.readHumidity();
  // 温度値 (摂氏) を t に格納
  int t = dht.readTemperature();
  
  // LCD のカーソルを列 0、行 0 に設定
  lcd.setCursor(0, 0);
  // LCD に "Temperature:" を表示
  lcd.print("Temperature:");
  // LCD のカーソルを列 12、行 0 に設定
  lcd.setCursor(12, 0);
  // LCD に温度値 t を表示
  lcd.print(t);
  // LCD のカーソルを列 14、行 0 に設定
  lcd.setCursor(14, 0);
  // LCD に温度記号 º (ルックアップテーブルのキャラクター 223) を表示
  lcd.write(223);
  // LCD に "C" を表示
  lcd.print("C");
  
  // LCD のカーソルを列 0、行 1 に設定
  lcd.setCursor(0, 1);
  // LCD に "Humidity:" を表示
  lcd.print("Humidity: ");
  // LCD のカーソルを列 10、行 1 に設定
  lcd.setCursor(10, 1);
  // LCD に湿度値 h を表示
  lcd.print(h);
  // LCD のカーソルを列 12、行 1 に設定
  lcd.setCursor(12, 1);
  // LCD に "%" を表示
  lcd.print("%");
}
```

ステップ 2: Seeeduino Lotus にコードをアップロード

ステップ 3: 結果を観察

LCD スクリーンに現在の室温と湿度が表示されるのが確認できます。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/DHT11_result.jpg)

**さらに探求**

このセッションの後、DHT11 センサーと Grove - LCD RGB バックライトディスプレイを使用して独自の気象ステーションを構築することができます。

### セッション 8: Grove - 3 軸デジタル加速度計

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/3_axis_cover.jpg)

**目的**

3軸デジタル加速度計を操作し、LCD画面に表示される出力データを観察する方法を学びます。

**重要な知識**

- シリアルモニターを使用して3軸加速度計からのオフセット値と加速度値を表示し、出力データと3軸加速度計の位置との関係を発見します。
- 3軸加速度計のオフセットデータを使用してピッチとロール値を計算し、3軸加速度計の位置に応じたデータの変化を観察します。
- 傾きスイッチを使用してLCD画面のページを切り替える方法を学び、大量の3軸加速度計データを明確に表示します。

**ハードウェア要件**

自己準備

- micro-USBケーブル
- Arduino IDEとシリアル-USBドライバがインストールされたコンピュータ

キットに含まれるもの

- Seeeduino Lotus V1.1開発ボード
- Groveケーブル
- Grove – 3軸デジタル加速度計
- Grove - LCD RGBバックライト
- Grove – 傾きスイッチ

**ハードウェア接続**

ステップ1: Grove – 3軸デジタル加速度計をSeeeduino LotusのI2Cポートに接続します。注意: I2Cポートは2つのドットが付いているポートです。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/3_axis_ard.jpg)

ステップ2: Seeeduino Lotusをmicro USBケーブルでコンピュータに接続します。

**ソフトウェアプログラミング**

**ライブラリの追加**

[3軸加速度計ドライバライブラリ](https://github.com/Seeed-Studio/Accelerometer_MMA7660/archive/master.zip)をArduino IDEに追加してください。

**例1**: シリアルモニターを使用して3軸加速度計からの出力データを表示する

ステップ1: 以下のコードをArduino IDEにコピー＆ペーストしてください。

```cpp
//加速度計ライブラリを追加
#include "MMA7660.h"

//MMA7660加速度計をaccelemeterという名前で割り当て
MMA7660 accelemeter;

void setup()
{
  //加速度計を初期化
  accelemeter.init();
  //シリアルポートを開き、データレートを9600bpsに設定
  Serial.begin(9600);
}
void loop()
{
  //x, y, zをint8_tとして初期化
  int8_t x;
  int8_t y;
  int8_t z;
  //ax, ay, azをfloatとして初期化
  float ax, ay, az;
  //加速度計からx, y, zのオフセット値を取得
  accelemeter.getXYZ(&x, &y, &z);
  //タイトルx = を表示
  Serial.print("x = ");
  //xの値を表示
  Serial.println(x);
  //タイトルy = を表示
  Serial.print("y = ");
  //yの値を表示
  Serial.println(y);
  //タイトルz = を表示
  Serial.print("z = ");
  //zの値を表示
  Serial.println(z);
  
  //加速度計からax, ay, azの加速度値を取得
  accelemeter.getAcceleration(&ax, &ay, &az);
  //タイトル加速度X/Y/Z: を表示
  Serial.println("加速度X/Y/Z: ");
  //axの値を表示
  Serial.print(ax);
  //単位gを表示
  Serial.println(" g");
  //ayの値を表示
  Serial.print(ay);
  //単位gを表示
  Serial.println(" g");
  //azの値を表示
  Serial.print(az);
  //単位gを表示
  Serial.println(" g");
  //*************を表示して見やすくする
  Serial.println("*************");
  //0.5秒待機
  delay(500);
}
```

ステップ2: コードをSeeeduino Lotusにアップロードします。

ステップ3: シリアルモニターを開きます。

ステップ4: 結果を観察します。

以下の画像に従って3軸加速度計の位置を調整し、データの変化を確認してください。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result2.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result3.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result4.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result5.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result6.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result7.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result8.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result9.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result10.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result11.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result12.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result13.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result14.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result15.png)

**例2**: 3軸加速度計のデータを使用してピッチとロールの値を計算する

背景知識:

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/aircraft.png)

上図に示すように:

ピッチ（横軸）θ: 重心を起点とし、翼端から翼端に引かれた線に平行に右方向に向かいます。この軸周りの動きをピッチと呼びます。正のピッチング動作は航空機の鼻を上げ、尾を下げます。エレベーターはピッチの主な制御装置です。（航空機の主要軸 2018）

ヨー（垂直軸）ψ: 重心を起点とし、航空機の底部に向かって翼と胴体基準線に垂直に向かいます。この軸周りの動きをヨーと呼びます。正のヨーイング動作は航空機の鼻を右に動かします。ラダーはヨーの主な制御装置です。（航空機の主要軸 2018）

ロール（縦軸）Φ: 重心を起点とし、胴体基準線に平行に前方に向かいます。この軸周りの角度変位をバンクと呼びます。[3] 正のロール動作は左翼を持ち上げ、右翼を下げます。（航空機の主要軸 2018）

ステップ1: 以下のコードをArduino IDEにコピー＆ペーストしてください。

```cpp
#include <Wire.h>
//加速度計ライブラリを追加
#include "MMA7660.h"

//MMA7660加速度計をaccelemeterという名前で割り当て
MMA7660 accelemeter;

//値0.5をalphaに設定
const float alpha = 0.5;

//fXg, fYg, fZgを値0でdoubleとして初期化
double fXg = 0;
double fYg = 0;
double fZg = 0;
//pitchとrollをdoubleとして初期化
double pitch, roll;

void setup()
{
  //加速度計を初期化
  accelemeter.init();
  //シリアルポートを開き、データレートを9600bpsに設定
  Serial.begin(9600);
}
void loop()
{
  //x, y, zをint8_tとして初期化
  int8_t x;
  int8_t y;
  int8_t z;
  //加速度計からx, y, zのオフセット値を取得
  accelemeter.getXYZ(&x, &y, &z);

  //ノイズを減らすためのローパスフィルタ
  fXg = x * alpha + (fXg * (1.0 - alpha));
  fYg = y * alpha + (fYg * (1.0 - alpha));
  fZg = z * alpha + (fZg * (1.0 - alpha));

  //ロールとピッチの計算式
  roll  = (atan2(-fYg, fZg) * 180.0) / M_PI;
  pitch = (atan2(fXg, sqrt(fYg * fYg + fZg * fZg)) * 180.0) / M_PI;
  //タイトルroll = を表示
  Serial.print("roll = ");
  //ロール値を表示
  Serial.println(roll);
  //タイトルpitch = を表示
  Serial.print("pitch = ");
  //ピッチ値を表示
  Serial.println(pitch);
  delay(500);
}

```

ステップ 2: Seeeduino Lotus にコードをアップロードする

ステップ 3: 結果を観察する

以下の図のように、3軸加速度センサーを水平な面に置いてください。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/3_axis.jpg)

ロールデータを観察する
上記の図の緑色の矢印に従って、3軸加速度センサーを上下に反転させてください。センサーを下に反転させるとロール値が増加し、上に反転させるとロール値が減少します。さらに、センサーが水平方向に置かれた原点で下に反転するとロール値は正、上に反転するとロール値は負になります。

ピッチデータを観察する
上記の図の赤色の矢印に従って、3軸加速度センサーを左右に傾けてください。センサーを右に傾けるとピッチ値が増加し、左に傾けるとピッチ値が減少します。さらに、センサーが水平方向に置かれた原点で右に傾けるとピッチ値は正、左に傾けるとピッチ値は負になります。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result2.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result16.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result10.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result17.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result8.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result18.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result4.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result19.png)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result6.jpg)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/result20.png)

これで、3軸加速度センサーを使用して飛行機や車の方向を制御または修正することができます。ピッチとロールデータを制御信号に変換してアクチュエーターを制御します。同じ技術は、携帯電話を縦向きから横向きに傾けた際の自動画面調整にも適用されています。



**例 3**: LCD 画面を使用して 3軸加速度センサーの出力データを表示する

Grove – Tilt Switch を Seeeduino Lotus の D5 ポートに接続し、Grove - LCD RGB Backlight モジュールを Seeeduino Lotus の I2C ポートに接続してください。注意: I2C ポートは1つのドットが付いているものです。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/3_axis_lcd_tilt.jpg)

ここでは、傾きスイッチを使用して LCD 画面のページを切り替え、異なるデータセットを表示します。傾きスイッチが ON の場合、LCD 画面には X、Y、Z のロールとピッチのデータが表示されます。傾きスイッチが OFF の場合、LCD 画面には各方向の加速度データ aX、aY、aZ が表示されます。

ステップ 1: 以下のコードを Arduino IDE にコピー＆ペーストしてください

```cpp

//加速度センサーライブラリを追加
#include "MMA7660.h"
//LCD ライブラリを追加
#include <rgb_lcd.h>


//ピン 5 に tiltswitchPin という名前を割り当て
#define tiltswitchPin 5

//MMA7660 加速度センサーに accelemeter という名前を割り当て
MMA7660 accelemeter;
//rgb_lcd 画面に lcd という名前を割り当て
rgb_lcd lcd;

//alpha に値 0.5 を設定
const float alpha = 0.5;

//fXg、fYg、fZg を値 0 の double 型として初期化
double fXg = 0;
double fYg = 0;
double fZg = 0;
//pitch と roll を double 型として初期化

void setup()
{
  //加速度センサーを初期化
  accelemeter.init();
  //LCD 画面を初期化
  //LCD の列数と行数を設定
  lcd.begin(16, 2);
  //tiltswitchPin の pinMode を入力に設定
  pinMode(tiltswitchPin, INPUT);
  //2秒待機
  delay(2000);

}
void loop()
{
  /*傾きスイッチがオンの場合は X、Y、Z、ロールとピッチのデータを表示
    傾きスイッチがオフの場合は X、Y、Z の加速度データを表示
  */
  if (HIGH == digitalRead(tiltswitchPin))
  {
    //x、y、z を int8_t 型、pitch と roll を double 型として初期化
    int8_t x;
    int8_t y;
    int8_t z;
    double roll;
    double pitch;
    //加速度センサーから x、y、z のオフセット値を取得
    accelemeter.getXYZ(&x, &y, &z);

    //ノイズを減らすためのローパスフィルター
    fXg = x * alpha + (fXg * (1.0 - alpha));
    fYg = y * alpha + (fYg * (1.0 - alpha));
    fZg = z * alpha + (fZg * (1.0 - alpha));

    //ロールとピッチの計算式
    roll  = (atan2(-fYg, fZg) * 180.0) / M_PI;
    pitch = (atan2(fXg, sqrt(fYg * fYg + fZg * fZg)) * 180.0) / M_PI;
    //LCD 画面をリセット
    lcd.clear();
    //LCD カーソルを列 0、行 0 に設定
    lcd.setCursor(0, 0);
    //テキスト x: を表示
    lcd.print("x:");
    //x の値を表示
    lcd.print(x);
    //LCD カーソルを列 5、行 0 に設定
    lcd.setCursor(5, 0);
    //テキスト y: を表示
    lcd.print("y:");
    //y の値を表示
    lcd.print(y);
    //LCD カーソルを列 10、行 0 に設定
    lcd.setCursor(10, 0);
    //テキスト z: を表示
    lcd.print("z:");
    //z の値を表示
    lcd.print(z);

    //LCD カーソルを列 0、行 1 に設定
    lcd.setCursor(0, 1);
    //テキスト R: を表示
    lcd.print("R:");
    //ロールの値を表示
    lcd.print(roll);
    //LCD カーソルを列 8、行 1 に設定
    lcd.setCursor(8, 1);
    //テキスト P: を表示
    lcd.print("P:");
    //ピッチの値を表示
    lcd.print(pitch);
  } else
  {
    //ax、ay、az を float 型として初期化
    float ax, ay, az;
    //加速度センサーから ax、ay、az の加速度値を取得
    accelemeter.getAcceleration(&ax, &ay, &az);
    //LCD 画面をリセット
    lcd.clear();
    //LCD カーソルを列 0、行 0 に設定
    lcd.setCursor(0, 0);
    //テキスト ax: を表示
    lcd.print("ax:");
    //ax の値を表示
    lcd.print(ax);
    //LCD カーソルを列 8、行 0 に設定
    lcd.setCursor(8, 0);
    //テキスト ay: を表示
    lcd.print("ay:");
    //ay の値を表示
    lcd.print(ay);
    //LCD カーソルを列 0、行 1 に設定
    lcd.setCursor(0, 1);
    //テキスト az: を表示
    lcd.print("az:");
    //az の値を表示
    lcd.print(az);
  }
  //0.5秒待機
  delay(500);
}

```

ステップ 2: Seeeduino Lotus にコードをアップロードする

ステップ 3: 結果を観察する

まず、傾きスイッチがLCD画面のページを変更しているかどうかをテストしてください。その後、3軸加速度センサーを回転させて、回転に応じたデータの変化を観察し、3軸加速度センサーの出力データが方向に関連していることを理解してください。

傾きスイッチがオン/オフの際に速度、ピッチ、ロールを表示する：

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/3_axis_tilt_on&off.jpg)

**さらに探求**

デジタル加速度センサーモジュールを操作した後、加速度センサーがロケット誘導システムでGPSやジャイロなどの他のモジュールとともに見つけられる最も重要なモジュールの1つであることを想像できます。また、加速度センサーは携帯電話で使用され、携帯電話が縦向きか横向きかを検出し、画面を傾けて調整することができます。



### セッション 9: スマートガーデン


![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/smartgarden.png)

**目的**

Groveスターターキットモジュールを組み合わせてスマートガーデンセンサーとリマインダーシステムを作成する

**重要な知識**

- 複数のモジュールを1つのアプリケーションに統合する方法を学ぶ
- Arduino IDEで複数のデバイスをコーディングする方法を学ぶ
- 複数のモジュールを採用して植栽環境を検出・分析し、論理的思考スキルを向上させる

**ユースケース分析**

**センサーモジュール**

DHT11モジュールを使用して植物の周囲環境を監視し、光センサーを使用して周囲の光強度を検出します。


**アクチュエーターモジュール**

ブザーを使用して異なる音を鳴らし、LCDを使用して異なる警告メッセージを通知します：

- 警告1: 周囲温度が38°Cを超える
- 警告2: 周囲湿度が40%未満
- 警告3: 光強度が50未満
- 警告4: ユーザーに植物への水やりをリマインドする


LCD画面表示：

- 状態1: 温度を表示
- 状態2: 湿度を表示
- 状態3: ユーザーに植物への水やりをリマインドする

傾きスイッチを使用して警告をリセットします。

**フローチャート**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/flowchart.png)

**ハードウェア要件**

自己準備

	- micro-USBケーブル
	- Arduino IDEとシリアル-to-USBドライバがインストールされたコンピュータ
	- DIYアクリルフレーム


キットに含まれるもの

	- Seeeduino Lotus V1.1開発ボード
	- Groveケーブル
	- Grove – ブザー
	- Grove – チェーン可能RGB LED
	- Grove – 光センサー
	- Grove - LCD RGBバックライト
	- Grove – 温度＆湿度センサー(DHT11)
	- Grove – 傾きスイッチ

**ハードウェア接続**

ステップ1:
Grove – ブザーモジュールをSeeeduino LotusのD6ポートに接続します。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/buzzer_ard.jpg)

Grove – チェーン可能RGB LEDをSeeeduino LotusのD7ポートに接続します。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/connect1.jpg)

Grove – 光センサーモジュールをSeeeduino LotusのA0ポートに接続します。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/connect2.jpg)

Grove - LCD RGBバックライトモジュールをSeeeduino LotusのI2Cポートに接続します。注：1つのドットが付いたI2Cポートです。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/connect3.jpg)

Grove – 温度＆湿度センサー(DHT11)モジュールをSeeeduino LotusのD2ポートに接続します。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/connect4.jpg)

Grove – 傾きスイッチをSeeeduino LotusのD5ポートに接続します。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/connect5.jpg)

すべてのコンポーネントをDIYアクリルフレームに固定します。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/smartgarden1.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/smartgarden2.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/smartgarden3.png)

ステップ2: micro USBケーブルでSeeeduino Lotusをコンピュータに接続します。


**ソフトウェアプログラミング**

ステップ1: [TimeLibライブラリ](https://github.com/PaulStoffregen/Time/archive/master.zip)をArduino IDEに追加してください。
詳細については[Arduino TimeLibチュートリアル](http://playground.arduino.cc/code/time)をご覧ください。

ステップ2: 以下のコードをArduino IDEにコピー＆ペーストしてください。

```cpp

//DHTセンサーライブラリを追加
#include <DHT.h>
//LCDライブラリを追加
#include <rgb_lcd.h>
//ChainableLEDライブラリをこのプロジェクトに追加
#include <ChainableLED.h>
//Timelibライブラリを追加
#include <TimeLib.h>

//デフォルト時間をエポック時間1514764800（2018年1月1日00:00:00）として設定
long DEFAULT_TIME = 1514764800;
long waterTime = DEFAULT_TIME + 86400;

//チェーンにリンクされたLEDの数を設定
#define NUM_LEDS  1

//LightSensorをA0として割り当て
#define LightSensor A0
//デジタルピン2をDHTPINとして設定
#define DHTPIN 2
//ピン5をtiltSwitchとして設定
#define tiltSwitch 5
//ブザーをピン6として割り当て
#define buzzer 6

//センサータイプをDHT 11として設定
#define DHTTYPE DHT11

/*DHTセンサーの名前をdhtとして割り当て
  センサーピンをDHTPIN（ピン2）として設定
  センサータイプをDHTTYPE（DHT11）として設定
*/
DHT dht(DHTPIN, DHTTYPE);

/*ChainableLEDの名前をledsとして割り当て
  ChainableLEDのピンをピン7（クロックピン）とピン8（データピン）に設定
  LEDの数を設定
*/
ChainableLED leds(7, 8, NUM_LEDS);

//rgb_lcdスクリーンの名前をlcdとして割り当て
rgb_lcd lcd;

void setup()
{
  //
  setTime(DEFAULT_TIME);
  //dhtセンサーを初期化
  dht.begin();
  //lcdスクリーンを初期化
  //lcdの列数と行数を設定
  lcd.begin(16, 2);
  //ChainableLED ledsを初期化
  leds.init();
  //ピン5（傾きスイッチ）を入力ピンとして設定
  pinMode(tiltSwitch, INPUT);
  delay(1000);
}
int mode = 0;
void loop()
{
  //-------------DHT---------------------
  //湿度値をhに格納
  int h = dht.readHumidity();

  //温度値をt（摂氏）に格納
  int t = dht.readTemperature();

  int value = analogRead(LightSensor);
  float value_float = map(value, 0, 800, 50, 0) / 100.0;

  leds.setColorHSB(0, 0, 0, value_float);

  //初期モードを0に設定し、case 0に設定

  //温度が38度を超えた場合、case 1に設定
  if (t > 38) {
    mode = 1;
  }
  //湿度が40%未満の場合、case 2に設定
  if (h < 40)
  {
    mode = 2;
  }
  //LightSensorの読み取り値が50未満の場合、case 3に設定
  if (value < 50)
  {
    mode = 3;
  }
  //現在の時間がwaterTime（24時間後）以上の場合、case 4に設定
  if (now() >= waterTime  ) {
    mode = 4;
  }

  switch (mode) {
    case 0:
      //LCDカーソルを列0、行0に設定
      lcd.clear();
      lcd.setCursor(0, 0);
      //LCDにテキスト「Temperature:」を表示
      lcd.print("Temperature:");
      //LCDカーソルを列12、行0に設定
      lcd.setCursor(12, 0);
      //LCDに温度値tを表示
      lcd.print(t);
      //LCDカーソルを列14、行0に設定
      lcd.setCursor(14, 0);
      //LCDに温度記号「º」（ルックアップテーブルのキャラクター223）を表示
      lcd.write(223);
      //LCDに「C」を表示
      lcd.print("C");

      //LCDカーソルを列0、行1に設定
      lcd.setCursor(0, 1);
      //LCDにテキスト「Humidity:」を表示
      lcd.print("Humidity: ");
      //LCDカーソルを列10、行1に設定
      lcd.setCursor(10, 1);
      //LCDに湿度値hを表示
      lcd.print(h);
      //LCDカーソルを列12、行1に設定
      lcd.setCursor(12, 1);
      //LCDに記号「%」を表示
      lcd.print("%");
      break;
    case 1:
      tone(buzzer, 262, 300);
      leds.setColorRGB(0, 255, 0, 0);
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Temperature too ");
      lcd.setCursor(0, 1);
      lcd.print("High!!");
      if (HIGH == digitalRead(tiltSwitch))
      {
        leds.setColorRGB(0, 0, 0, 0);
        mode = 0;
      }
      break;
    case 2:
      tone(buzzer, 294, 300);
      leds.setColorRGB(0, 255, 0, 0);
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Warning! Too Dry");
      if (HIGH == digitalRead(tiltSwitch))
      {
        leds.setColorRGB(0, 0, 0, 0);
        mode = 0;
      }
      break;
    case 3:
      tone(buzzer, 330, 300);
      leds.setColorRGB(0, 255, 0, 0);
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Not Enough Light");
      lcd.setCursor(0, 1);
      lcd.print("Check the LED..");
      if (HIGH == digitalRead(tiltSwitch))
      {
        leds.setColorRGB(0, 0, 0, 0);
        mode = 0;
      }
      break;
    case 4:
      tone(buzzer, 349, 300);
      leds.setColorRGB(0, 255, 0, 0);
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Time to water");
      lcd.setCursor(0, 1);
      lcd.print("the plants");
      if (HIGH == digitalRead(tiltSwitch))
      {
        waterTime = now() + 86400;
        mode = 0;
      }
      break;

  }
}

```

ステップ 3: Seeeduino Lotus にコードをアップロードする

ステップ 4: 結果を観察する

通常の状態では、LEDは白色の光を放ち、LCDスクリーンには温度と湿度が表示されます。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/garden.png)

4つの警告状態

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/garden1.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/garden2.png)
![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/garden3.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/garden4.png)

赤色LED警告

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/garden5.png)

傾きスイッチを使用して警告をリセットする

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/garden6.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/garden7.png)



### セッション 10: スマートカップ

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/smartcup.png)

**目的**

ブザー、RGB LED、3軸加速度センサー、LCDスクリーンを使用してスマートカップを作成します。このカップは一定の時間間隔でユーザーに水を飲むようにリマインドし、ユーザーが水を飲んだかどうかを検知します。LCDスクリーンには次回水を飲む時間までのカウントダウンが表示されます。


**重要な知識**

- TimeLibライブラリを使用してLotusで時間を設定および制御する方法を復習する。
- LCDスクリーンでの表示とスクロールテキストを復習する。
- if…else…およびswitch…case…操作を||（または）および&&（そして）論理演算子とともに復習する。
- 3軸加速度センサーからのピッチとロール値の読み取りの応用をさらに検討する。
- Delay関数を使用せずにシステムタイマーを妨げない方法としてBlinkWithoutDelay例を使用する。
- カスタマイズされた関数を作成して呼び出す方法を学び、結果をBoolean（true/false）または変数の値として返す。


**ユースケース分析**

**センサーモジュール**

3軸加速度センサーのピッチとロールデータを比較してボトルが傾いているかどうかを検知します。これにより、ユーザーが水を飲んでいるかどうかを認識します。ボトルが傾いている場合、次のステップはボトルがテーブルに戻されたかどうかを検知します。ボトルがテーブルに置かれると、3軸加速度センサーのピッチとロールデータが比較のために最大値と最小値をキャリブレーションします。

**アクチュエーターモジュール**

ブザーを使用して異なるトーンを鳴らし、異なる状態をリマインドします：

- 状態1: タイマーが30分のカウントダウンを終了したとき、ブザーが鳴りユーザーに水を飲むようリマインドします。
- 状態2: ボトルがテーブルに静止していない場合、ブザーが鳴ります。

LCDスクリーンを使用して表示します：

- 状態1: カウントダウンタイマー
- 状態2: ユーザーに水を飲むようリマインド
- 状態3: ユーザーが水を飲んだことを祝福
- 状態4: 水を飲み終えたらボトルを戻すようユーザーに伝える


**フローチャート**

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/flowchart1.png)

**ハードウェア要件**

自己準備

- micro-USBケーブル
- Arduino IDEとシリアル-to-USBドライバーがインストールされたコンピューター

キットに含まれるもの

- Seeeduino Lotus V1.1開発ボード
- Groveケーブル
- Grove – ブザー
- Grove – LED Chainable RGB LED
- Grove - LCD RGBバックライト
- Grove – 3軸デジタル加速度センサー

**ハードウェア接続**

ステップ 1:
Grove - ブザーモジュールをSeeeduino LotusのD6ポートに接続します。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/buzzer_ard.jpg)

Grove – Chainable RGB LEDをSeeeduino LotusのD7ポートに接続します。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/connect1.jpg)


Grove - LCD RGBバックライトモジュールをSeeeduino LotusのI2Cポートに接続します。注: 1つのドットが付いているI2Cポートです。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/connect6.jpg)
 

Grove – 3軸デジタル加速度センサーをSeeeduino LotusのI2Cポートに接続します。注: 2つのドットが付いているI2Cポートです。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/connect7.jpg)

すべてのコンポーネントをカップに固定します。

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/smartcup.png)

**ソフトウェアプログラミング**

ステップ 1: [TimeLibライブラリ](https://github.com/PaulStoffregen/Time/archive/master.zip) をArduino IDEに追加してください。

以下のコードをArduino IDEにコピー＆ペーストしてください。

```cpp

// LCDライブラリを追加
#include <rgb_lcd.h>
// 加速度センサーライブラリを追加
#include "MMA7660.h"
// TimeLibライブラリを追加
#include <TimeLib.h>
// ChainableLEDライブラリをこのプロジェクトに追加
#include <ChainableLED.h>

// デフォルト時間をエポック時間1514764800（2018年1月1日00:00:00）として設定
long DEFAULT_TIME = 1514764800;
// drinkTimeをデフォルト時間の30分後（1800秒）に設定
//long drinkTime = DEFAULT_TIME + 1800;
long drinkTime = DEFAULT_TIME + 10;
int lastDrink, seconds;
// 最新のミリ秒単位の時間を保存
unsigned long previousMillis = 0;

// LEDチェーンの数を設定
#define NUM_LEDS  1

// ブザーをピン6として割り当て
#define buzzer 6

// MMA7660加速度センサーをaccelerometerとして割り当て
MMA7660 accelerometer;

// rgb_lcdスクリーンをlcdとして割り当て
rgb_lcd lcd;

/* ChainableLEDをledsとして割り当て
   ChainableLEDのピンをピン7（クロックピン）とピン8（データピン）に設定
   LEDの数を設定 */
ChainableLED leds(7, 8, NUM_LEDS);

// モーションチェック許容値を設定
int tolerance = 50;
// calibratedとmoveDetectedをfalseとして初期化
boolean calibrated = false;
boolean moveDetected = false;

// 加速度センサー読み取り値x, y, zをint8_tとして設定
int8_t x;
int8_t y;
int8_t z;

// fXg, fYg, fZgを値0でdoubleとして初期化
double fXg = 0;
double fYg = 0;
double fZg = 0;
// pitchとrollをdoubleとして初期化
double p, r;

// 加速度センサーの限界値
double rMin; // 最小ロール値
double rMax; // 最大ロール値
double rVal; // 現在のロール値

double pMin; // 最小ピッチ値
double pMax; // 最大ピッチ値
double pVal; // 現在のピッチ値

// ローパスフィルター許容値として値0.5をalphaに設定
const float alpha = 0.5;

// modeを初期化してデフォルトのswitchケースを最初（0からカウント）に設定
int mode = 0;

void setup()
{
  // システム時間を2018年1月1日00:00:00に設定
  setTime(DEFAULT_TIME);
  // 加速度センサーを初期化
  accelerometer.init();
  // ChainableLED ledsを初期化
  leds.init();
  // LCDスクリーンを初期化
  // LCDの列数と行数を設定
  lcd.begin(16, 2);
  // 初期段階で加速度センサーをキャリブレーション
  calibrateAccel();
  // 2秒待機
  delay(2000);
}

// 加速度センサー読み取り関数を設定し、ロールとピッチのマッピング値を出力
void Accel() {
  accelerometer.getXYZ(&x, &y, &z);

  // ノイズを減らすためのローパスフィルター
  fXg = x * alpha + (fXg * (1.0 - alpha));
  fYg = y * alpha + (fYg * (1.0 - alpha));
  fZg = z * alpha + (fZg * (1.0 - alpha));

  r  = (atan2(-fYg, fZg) * 180.0) / M_PI;
  p = (atan2(fXg, sqrt(fYg * fYg + fZg * fZg)) * 180.0) / M_PI;
  r = map(r, -90, 90, 0, 180);
  p = map(p, -90, 90, 0, 180);
  return r;
  return p;
}

// 加速度センサーをキャリブレーションするための関数を設定
void calibrateAccel() {
  // moveDetectedをfalseにリセット
  moveDetected = false;

  // 加速度センサー読み取り関数を呼び出し
  Accel();

  // ロールとピッチの読み取り値を割り当て
  rVal = r;
  rMin = rVal;
  rMax = rVal;

  pVal = p;
  pMin = pVal;
  pMax = pVal;

  // 加速度センサーをキャリブレーション
  for (int i = 0; i < 50; i++) {
    // 加速度センサー読み取り関数を呼び出し
    Accel();
    /*--ロールをキャリブレーション---*/
    // ロールの読み取り値をrValに割り当て
    rVal = r;
    // 新しい読み取り値が保存された最大値より大きいかどうかを評価
    if (rVal > rMax) {
      // 新しい読み取り値が大きい場合、新しい値をrMaxに保存
      rMax = rVal;
      // 新しい読み取り値が保存された最小値より小さいかどうかを評価
    } else if (rVal < rMin) {
      // 新しい読み取り値が小さい場合、新しい値をrMinに保存
      rMin = rVal;
    }

    /*--ピッチをキャリブレーション---*/
    // ピッチの読み取り値をpValに割り当て
    pVal = p;
    // 新しい読み取り値が保存された最大値より大きいかどうかを評価
    if (pVal > pMax) {
      // 新しい読み取り値が大きい場合、新しい値をpMaxに保存
      pMax = pVal;
      // 新しい読み取り値が保存された最小値より小さいかどうかを評価
    } else if (pVal < pMin) {
      // 新しい読み取り値が小さい場合、新しい値をpMinに保存
      pMin = pVal;
    }
    // 読み取り間に10msの遅延
    delay(10);
  }
  // calibratedをtrueに設定
  calibrated = true;
}

// 飲水関数 ボトルが傾いているかどうかをチェックし、true/falseを出力
boolean drinking() {
  // tiltingをfalseとして初期化
  boolean tilting = false;
  // 加速度センサーから読み取り
  Accel();

  rVal = r;
  pVal = p;
  /* 新しいロール値が保存された最大値より大きいか、
     保存された最小値より小さいかどうかを評価
     ||は「または」を意味する
     ロールが発生している場合、tiltingをtrueに設定
     ピッチが発生している場合、tiltingをtrueに設定
  */
  if (rVal > (rMax + tolerance) || rVal < (rMin - tolerance)) {
    tilting = true;
  }

  if (pVal > (pMax + tolerance) || pVal < (pMin - tolerance)) {
    tilting = true;
  }
  // tiltingを出力
  return tilting;
}

// モーション関数
void Motion() {
  // 再キャリブレーションされるまで動きをチェックしない
  calibrated = false;
}

void loop()
{
  /* 現在の時間がdrinkTime（30分後）以上の場合、
     case 1に切り替え
     水を飲む時間
  */
  if (now() >= drinkTime  ) {
    // case 1に切り替え
    mode = 1;
  }
  // 加速度センサーがキャリブレーションされているかどうかを評価
  if (calibrated) {
    // ボトルが傾いているかどうかを評価
    if (drinking()) {
      // case 2に切り替え
      mode = 2;
      // moveDetectedをtrueに設定
      moveDetected = true;
    }
  }
  // moveDetectedがtrueかどうかを評価
  if (moveDetected) {
    // モーション関数を呼び出し
    Motion();
  }
  // 現在のミリ秒単位の時間を保存
  unsigned long currentMillis = millis();
  switch (mode) {
    /* Case 0:
       何も起こらない場合、カウントダウン時間を表示するモード
    */
    case 0:
      // 水を飲むまでの分数
      lastDrink = (drinkTime - now()) / 60;
      // 水を飲むまでの秒数
      seconds = (drinkTime - now()) % 60;

      leds.setColorHSB(0, 0, 0, 0);

      /* LCDを1秒ごとにリフレッシュするが、delayを使用せず、
         Example "BlinkWithoutDelay"を参照
         システムが停止して待機しないようにする
      */
      if (currentMillis - previousMillis >= 1000) {
        // 最後にLCDをリフレッシュした時間を保存
        previousMillis = currentMillis;
        lcd.clear();
        lcd.setCursor(0, 0);
        lcd.print("Countdown to dri");
        lcd.setCursor(0, 1);
        lcd.print("nk water: ");
        lcd.setCursor(10, 1);
        lcd.print(lastDrink);
        lcd.print(":");
        lcd.print(seconds);
      }
      break;
    /* Case 1:
       30分が経過し、水を飲む時間になった場合
       ブザーアラームとLCD表示で水を飲む時間を知らせる
    */
    case 1:
      tone(buzzer, 262, 300);
      leds.setColorRGB(0, 255, 0, 0);
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Time to drink");
      lcd.setCursor(0, 1);
      lcd.print("Some water");
      break;
    /* Case 2:
       水ボトルが傾いているかどうかを検知
       したがってユーザーが水を飲んでいる
       ボトルが平らな表面に置かれたらセンサー（加速度センサー）を再キャリブレーション
       ボトルがまだ傾いているか、平らに座っていない場合（加速度センサーの読み取り値が約90度ではない場合）、case 3に入る
       ボトルが静止している場合、case 0に入り、drinkTimeを30分後にリセット
    */
    case 2:
      // ブザーを停止
      noTone(buzzer);
      // drinkTimeを更新
      drinkTime = now() + 1800;
      leds.setColorRGB(0, 0, 255, 0);
      // メッセージを表示
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Well Done remind");
      lcd.setCursor(0, 1);
      lcd.print("you in 30mins");
      // ユーザーが水を飲むために5秒待機
      delay(5000);
      // 加速度センサー値を読み取り
      Accel();
      // ボトルが平らに置かれているかどうかを評価
      if (r > 80 && r < 100 && p > 80 && p < 100) {
        // 加速度センサーがキャリブレーションされているかどうかを評価
        if (!calibrated) {
          // 加速度センサーをキャリブレーション
          calibrateAccel();
        }
        else
        { // mode 0に切り替え
          mode = 0;
          // drinkTimeを更新
          drinkTime = now() + 1800;
          leds.setColorRGB(0, 0, 0, 0);
        }
      }
      else
      { // ボトルが平らに置かれていない場合、mode 3に切り替え
        mode = 3;
        leds.setColorRGB(0, 0, 0, 0);
      }
      break;
    /* Case 3:
       ボトルが平らな表面に置かれていない場合、
       スクロールメッセージで「水ボトルを飲み終えたら置いてください！」を表示
       ボトルが静止しているかどうかを確認し、静止している場合は加速度センサーを再キャリブレーション
       再キャリブレーション後、case 0に戻り、drinkTimeを30分後にリセット
    */
    case 3:
      // drinkTimeを更新
      drinkTime = now() + 1800;

      leds.setColorRGB(0, 0, 0, 255);
      // 自動スクロールでメッセージを表示
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.print("Please put down water");
      lcd.setCursor(0, 1);
      lcd.print("bottle when finished!");
      for (int positionCounter = 0; positionCounter < 5; positionCounter++) {
        // 1ポジション左にスクロール
        lcd.scrollDisplayLeft();
        // 少し待機
        delay(200);
      }
      for (int positionCounter = 0; positionCounter < 5; positionCounter++) {
        // 1ポジション右にスクロール
        lcd.scrollDisplayRight();
        // 少し待機
        delay(200);
      }
      for (int positionCounter = 0; positionCounter < 5; positionCounter++) {
        // 1ポジション左にスクロール
        lcd.scrollDisplayLeft();
        // 少し待機
        delay(200);
      }

      // 加速度センサー値を読み取り
      Accel();
      // ボトルが平らに置かれているかどうかを評価
      if (r > 80 && r < 100 && p > 80 && p < 100) {
        // 加速度センサーがキャリブレーションされているかどうかを評価
        if (!calibrated) {
          // 加速度センサーをキャリブレーション
          calibrateAccel();
        }
        else
        { // mode 0に切り替え
          mode = 0;
          // drinkTimeを更新
          drinkTime = now() + 1800;
          leds.setColorRGB(0, 0, 0, 0);
        }
      }
      break;
  }
  delay(1);
}


```

ステップ 2: Seeeduino Lotus にコードをアップロードする

ステップ 3: 結果を観察する

スマートカップの4つの状態

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/cup1.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/cup2.png)


![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/cup3.png)![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_Arduino/img/cup4.png)


## 参考文献

航空機の主軸。2018年11月27日アクセス。https://en.wikipedia.org/wiki/Aircraft_principal_axes.

## 付録

このドキュメント内のすべての[コード](https://github.com/peterpanstechland/Grove_starter_kit.git)はGithubで利用可能です。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するため、さまざまなサポートを用意しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
