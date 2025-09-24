---
description: Rainbowduino_LED_driver_platform-ATmega328
title: Rainbowduino LED ドライバープラットフォーム-ATmega328
keywords:
- Rainbowduino_LED_driver_platform-ATmega328
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Rainbowduino_LED_driver_platform-ATmega328
last_update:
  date: 05/15/2025
  author: Matthew
---


|![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-Rainbowduino_LRG.jpg) |![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-Rainbowduino_01_LRG.jpg)
|---|---|

Rainbowduinoボードは、プロフェッショナルなLED駆動能力を備えたArduino互換のコントローラーボードです。8x8 RGB LEDマトリックス（共通アノード）を駆動します。

- 外部回路不要、接続してすぐに点灯！

- 各120mAの24チャンネル定電流

- 各500mAの8チャンネルスーパーソースドライバー

- 6.5V-12VDCの広い出力電圧適応

- 専用GPIOおよびADC

- ハードウェアUARTおよびI2C通信

- 簡単なカスケード接続

- 小型で軽量

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Rainbowduino-LED-driver-platform-Atmega-328-p-371.html)

## スタンドアロンモード（接続して点灯）

---
必要なハードウェア:

- 1 x Rainbowduino

- 1 x RGB LEDマトリックス

最も簡単な動作モードで、外部システムは不要です（ファームウェアをアップロードするためのTTLシリアルアダプターのみ必要）。LEDマトリックスの内容はRainbowduino自体によって生成されます。

使用例:

- Rainbowduinoによって計算されたシンプルなリアルタイムアニメーション

- 事前に保存されたアニメーションの表示（Rainbowduinoの32kb ROMに制限される）

## UARTモード

---
必要なハードウェア:

- 1x Rainbowduino

- 1x RGB LEDマトリックス

- 1x TTLレベルコンバーター

- 1x UART送信ユニット（Arduino、PCなど）

コンピュータからRainbowduinoにデータ（LEDマトリックスの内容）を送信します。RainbowduinoにはUSBコネクタがなく、TTLシリアル接続を使用するため、TTLシリアルレベルコンバーター（BusPirate、UartSBee、Arduinoなど）が必要です。

**使用例:**

PCまたはArduinoで生成されたフレームを1つのLEDマトリックスに表示

## I2Cモード

---
必要なハードウェア:

- 1..n x Rainbowduino

- 1..n x RGB LEDマトリックス

- 1 x I2Cマスターデバイス（例: Arduino）

- いくつかのケーブル

コンピュータから複数のRainbowduinoにデータ（LEDマトリックスの内容）を送信します。FTDI USBからシリアルアダプターを使用するArduino（Duemillanove、Diecimilaなど）を使用する場合、コンピュータからArduinoへのデータ送信には約16msの遅延があります。新しいArduino UNOでは遅延が大幅に短縮され、約4msです。

使用例:

PCまたはArduinoで生成されたフレームを**複数の**LEDマトリックスに表示

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-i2c-cabling.png)

## I2Cカスケード接続

---
Rainbowduinoは簡単にカスケード接続できるように設計されています。物理的に接続すると電力が供給され、I2Cでチェーンを制御できます。各RainbowduinoにはI2C通信のために一意のアドレスを割り当てる必要があることに注意してください。

電源接続の準備:

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-chain-prepare.png)

カスケード接続されたRainbowduino:

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-chained.png)

## 仕様

---
- マイクロプロセッサ：Atmega 328

- PCBサイズ：60mm *60mm* 1.6mm

- インジケーター：リセット、電源、ピン13 LED

- 電源供給：6.5-12 VDC（推奨9 VDC）

- 電源コネクタ：2ピン JST ターミナルブロック、3mm DCジャック

- カスケード電源コネクタ：ターミナルブロック

- プログラムインターフェース：UART / ISP

- LEDドットマトリックスソケット：32

- 拡張ソケット：2.54mm 曲げピンヘッダーのペア

- 通信プロトコル：I2C / UART

- RHOS：対応

- 入力電圧：6.5~12V

- 全体消費電流：600~2000mA

- 定電流チャンネル（カソード）：24

- チャンネルごとの定電流（カソード）：20~120mA

- チャンネルごとのソースドライバ電流（共通アノード）：500mA

- チャンネルごとのソースドライバ電圧（共通アノード）：9~12V

- ソースドライブチャンネル：8

- 駆動LED数：192

- 回路応答時間：10ns

- RGB LEDマトリックスのドットごとの色解像度：4096

- UARTボーレート：115200baud

## LEDデバイスの互換性

---
メスピンヘッダーに直接接続する前に、RGBドットマトリックスが互換性があることを確認してください。主な懸念はピン配置にあり、同じ色のLEDがクラスター化されている点です。以下にスキームと写真のデモンストレーションを添付します。制御ロジックはオープンソースで簡単に再プログラム可能なため、色の順序が変更される可能性があります。

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-ledmatrix-schema.png)

Rainbowduinoの性能はRGBドットマトリックスを駆動する以上のものです。192の出力数と最大120mAの定電流容量により、大規模なLEDセットアップを簡単に構築できます。

各チャンネルの出力電流（IOUT）は外部抵抗Rextによって設定されます。IOUTとRextの関係は以下の図に示されています。詳細についてはMBI5168データシートを参照してください。1kポテンショメータを時計回りに調整すると出力電流が減少し（RGBドットマトリックスのデフォルト最小値は20mA）、反時計回りに回すと出力電流が増加します。ポテンショメータは単一の円形であり、強い力を加えると無限に回転可能になり、調整にはマルチメータが必要になる場合がありますので注意してください。

これにより、追加の抵抗なしで独自のLEDマトリックスを構築することが可能です。

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-ledmatrix-voltage.png)

## デモンストレーション

---
<big>必要なもの</big>

- Rainbowduinoボード

- 共通アノードRGBマトリックス

- Arduinoボード（オプション）

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-connected-matrix.png)

<big>Rainbowduinoハードウェアの準備</big>

RGB LEDマトリックスをRainbowduinoに接続し、「ピン1」を赤い接続ブロックに接続します。ピン1は四角いはんだポイントでマークされており、他のピンは丸いはんだポイントを使用しています。

<big>ファームウェアのアップロード</big>

1. まずArduinoにコードをアップロードします：
Rainbowduinoにファームウェアをアップロードするために、Arduinoがクリーンであることを確認してください。以下のような空のファームウェアスケッチをアップロードする必要があります。

```
void setup() {}

void loop() {}
```

2. Rainbowduinoにファームウェアをアップロードします

Rainbowduinoファームウェアを開き、**正しいボードを選択**（ツール--&gt;ボード--&gt; Arduino DuemilanoveまたはNano w/ ATmega328）してファームウェアをアップロードします。理論的にはこれで完了です ;)
以下は接続スキームです：

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-fritz-uploadfw.png)

外部電源を使用していますが、Arduinoの5Vを使用することも可能です。

**注意:** Rainbowduino v1ボードを所有している場合は、「Arduino Diecimila, Duemilanove, or Nano w/ ATmega168」を選択する必要があります！

| Arduino | Rainbowduino |
|---|---|
| RESET | DTR |
| GND | GND |
| RX | RX |
| TX | TX |

3. UartSBを使用してファームウェアをアップロードする

以下のスクリーンショットは、UartSBeeをRainbowduinoに接続する方法を示しています：

| ![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-beeONE.jpg)|![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-beeTWO.jpg)
|---|---|

UartSBeeをUSBバスに接続すると、新しいシリアルポートが登録されるはずです。新しいシリアルポートを使用してファームウェアをアップロードしてください。

4. Buspirateを使用してファームウェア/ブートローダーをアップロードする

Buspirateを使用した3つのプログラミング方法を説明します（すべてISPを使用）：

- ISPを介したプログラミング
- avrdudeと手動リセットを使用したプログラミング（パッチ不要）
- avrdudeを使用した小さなパッチによるプログラミング

Rainbowduinoをディスプレイと電源から切断してください。

ステップ 1: Buspirateを使用するには、新しいバージョンのavrdudeが必要です [[1]](http://download.savannah.gnu.org/releases/avrdude/)。バージョン5.10を使用しており、'-c buspirate'プログラマーオプションを認識します。以下のコマンドでテストできます：

```
./avrdude -c buspirate -C ./avrdude.conf
```

プログラマーに関するエラーが表示された場合は、Buspirateの新しいバージョンが必要です。

ステップ 2: BuspirateをRainbowduinoのISPコネクタに以下のように接続します：

| Buspirate | ISP | ISPピン |
|---|---|---|
| GND | GND | 6 |
| +5V | Vcc | 2 |
| CS | RESET | 5 |
| MOSI | MOSI | 4 |
| MISO | MISO | 1 |
| SCL/CLK | SCK | 3 |

ステップ 3: 正しいブートローダーを見つけます（tiny optibootファームウェアを使用しています）。このファイルを新しくコンパイルしたavrdudeディレクトリにコピーします。

ステップ 4: 以下のコマンドでATmega 328pをプログラムします：

```
./avrdude -v -c buspirate -p m328p -C ./avrdude.conf -P /dev/ttyUSB0 -U flash:w:optiboot_atmega328.hex
```

このプロセスは非常に時間がかかります...

私はブロック全体を以下のように日本語に翻訳しました：

---

私はブートローダーなしでファームウェアをアップロードすることから始めましたが、それは問題なく動作します。ポイントは、Arduino IDEからHEXファイルを取得することです。バージョン0.22-Linuxでは、これらのファイルは/tmp/buildXXXXXXXXXXXXに保存されており、スケッチディレクトリには保存されません。プログラマーを接続せずに「アップロード」コマンドを実行してください（「アップロード」ボタンを押す際に&lt;shift&gt;キーを押すと、Arduino IDEから多くのデバッグ情報を取得できます）。

Rainbowduinoにブートローダーをインストールした後は、Bus Pirateの透過的なシリアルインターフェースを使用できます。ボーレートを115200に設定し、'(3)'マクロを入力して透過モードを有効にします。これにより、Bus PirateはUSB-シリアルコンバーターとして動作します（他のFTDIのようなUSB-シリアルコンバーターも使用可能です）。Bus Pirateの問題点は、ArduinoをリセットするためのDTRがないことです。そのため、リセットとアップロードを手動でタイミングを合わせる必要があります。アップロードを開始した後にリセットを押すのが最も効果的です。

```
HiZ>m
1. HiZ
2. 1-WIRE
3. UART
4. I2C
5. SPI
6. JTAG
7. RAW2WIRE
8. RAW3WIRE
9. PC KEYBOARD
10. LCD
(1) >3
モード選択
シリアルポート速度を設定: (bps)
1. 300
2. 1200
3. 2400
4. 4800
5. 9600
6. 19200
7. 38400
8. 57600
9. 115200
10. 31250 (MIDI)
(1) >9
データビットとパリティ:
1. 8, NONE *デフォルト
2. 8, EVEN
3. 8, ODD
4. 9, NONE
(1) >
ストップビット:
1. 1 *デフォルト
2. 2
(1) >
受信極性:
1. Idle 1 *デフォルト
2. Idle 0
(1) >
出力タイプを選択:
1. オープンドレイン (H=Hi-Z, L=GND)
2. 通常 (H=3.3V, L=GND)
(1) >2
準備完了
UART>(3)
UARTブリッジ。スペースキーで継続、その他のキーで終了。
リセットで終了。
```

その後、以下のコマンドを使用してArduinoにブートローダーをプログラムできます：

```
./avrdude -v -c stk500v1 -p m328p -b 115200 -F -C ./avrdude.conf -P /dev/ttyUSB0 -U flash:w:Rainbow_Plasma.cpp.hex
```

さらに進めると、'arduino.c'ファイルでavrdudeを修正することができます。Bus PirateはArduinoに対して誤った極性で'rts'信号を送信しますが、1を0に、0を1に変更することで修正できます。その後、プログラマーとして'stk500v1'ではなく'arduino'を選択する必要があります。

```c
static int arduino_open(PROGRAMMER * pgm, char * port)
{
    fprintf(stderr, "arduino_open...\n");
    strcpy(pgm->port, port);
    serial_open(port, pgm->baudrate? pgm->baudrate: 115200, &pgm->fd);

  /* RESETコンデンサを解除するためにDTRとRTSをクリア
   * (例えばArduinoの場合) */
    serial_set_dtr_rts(&pgm->fd, 1);
    usleep(50*1000);
  /* DTRとRTSを高に戻す */
    serial_set_dtr_rts(&pgm->fd, 0);
    usleep(50*1000);

  /*
   * 余分な入力を排除
   */
    stk500_drain(pgm, 0);

    if (stk500_getsync(pgm) < 0)
    return -1;

    return 0;
}
```

_注: Arduino IDEで使用するプログラマータイプを'boards.txt'ファイルで変更してください。_

出典: buspirate-avr-programming [[2]](http://hintshop.ludvig.co.nz/show/buspirate-avr-programming/)、Bus_Pirate_AVR_Programming [[3]](http://dangerousprototypes.com/docs/Bus_Pirate_AVR_Programming)、Optiboot [[4]](http://code.google.com/p/optiboot/)

## Rainbowduinoファームウェア

<big>Neorainbowduinoファームウェア</big>

このファームウェアバンドルには、Arduino用とRainbowduino用の2つのファームウェアとProcessingライブラリが含まれています。シリアルラインを介して任意のアプリケーションからArduinoにデータを送信でき、Arduinoは対応するRainbowduinoデバイスに画像を送信します。簡単に始められるように、使いやすいProcessingライブラリを作成しました。

出典: [http://code.google.com/p/neorainbowduino/](http://code.google.com/p/neorainbowduino/)

**特徴:**

- I2C対応ファームウェア（複数のRainbowduinoをサポート）

- Processingライブラリにより、ProcessingからRainbowduinoを簡単に制御可能！

- ProcessingからRainbowduinoにフルフレームを送信

- ProcessingからRGBマトリックスにフレームを送信。各フレームは8x8ピクセル、12ビットカラー解像度（4096色）。カラー変換はライブラリによって処理されます。

- 最適化されたProcessingライブラリ - 必要に応じてRainbowduinoにのみフレームを送信（トラフィックを約50%節約 - もちろんフレームによります）

- バッファスワッピングの修正（ちらつきなし）

- I2Cバススキャナーを追加。Rainbowduinoのアドレスを忘れた場合に検索可能

対応動作モード: I2C

<big>必要条件</big>

このファームウェアを使用すると、Processingを使用してRainbowduinoを制御できます。そのため、以下が必要です：

- Processingソフトウェア、[http://processing.org/](http://processing.org/)から入手可能

<big>Arduino IDEのパッチ</big>

NeorainbowduinoファームウェアはI2C経由でフルフレーム（92バイト）を送信するため、ArduinoのI2Cバッファサイズをパッチして転送速度を最適化する必要があります。Arduinoが将来的に可変バッファサイズをサポートすることを期待しています。**Arduino IDEを閉じていることを確認してください**。

**パッチ対象ファイル:** Java/libraries/Wire/utility/twi.h

**理由:** I2C速度を100kHzから400kHzに増加、I2Cバッファサイズを32バイトから98バイトに増加

<big>元のファイル</big>

```c
#ifndef TWI_FREQ
#define TWI_FREQ 100000L
#endif

#ifndef TWI_BUFFER_LENGTH
#define TWI_BUFFER_LENGTH 32
#endif
```

<big>パッチ後のファイル</big>

```c
#ifndef TWI_FREQ
#define TWI_FREQ **400000L**
#endif

#ifndef TWI_BUFFER_LENGTH
#define TWI_BUFFER_LENGTH **98**
#endif
```

**パッチ対象ファイル:** Java/libraries/Wire/Wire.h

**理由:** シリアルバッファサイズを32バイトから98バイトに増加

| 元のファイル | パッチ後のファイル |
|---|---|

<pre>#define BUFFER_LENGTH 32</pre>

<pre>#define BUFFER_LENGTH **98**</pre>

<big>Rainbowduinoへのファームウェアのアップロード</big>

ファームウェアをアップロードします（ファームウェアのアップロードを参照）。必要なファームウェアファイルは**rainbowduinoFw/Rainbow_V2_71/Rainbow_V2_71.pde**です。

**注:** このファームウェアはI2Cプロトコルを使用して通信します。各Rainbowduinoには固有のI2Cアドレスが必要です。アドレスはRainbowduino.hファイルを編集することで設定できます（`#define I2C_DEVICE_ADDRESS 0x06`）。複数のRainbowduinoにこのファームウェアをアップロードする場合は、アドレスを変更することを忘れないでください！

<big>Arduinoへのファームウェアのアップロード</big>

RainbowduinoとArduino間のRX/TXラインを切断します。Arduinoファームウェア**arduinoFw/neoLed/neoLed.pde**をArduinoにアップロードします。

<big>Rainbowduinoとの対話</big>

この章では、Rainbowduinoと通信する**簡単な方法**を紹介します。必要なものは、Arduino（シリアルからI2Cゲートウェイとして動作）と、I2Cアドレスが0x06のRainbowduinoです。

RainbowduinoとArduinoの接続は以下のようになります：
![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-neorainbow.png)

外部電源を使用していますが、Arduinoの5Vを使用することも可能です。

| Arduino | Rainbowduino |
|---|---|
| RESET | DTR |
| GND | GND |
| アナログ IN 4 | SDA |
| アナログ IN 5 | SDL |

<big>Processingライブラリのインストール</big>

Processingソフトウェアをインストールした後、neorainbowduinoライブラリをインストールする必要があります。Processingライブラリは**processingLib\distribution\neorainbowduino-x.y\download**ディレクトリにあります。zipファイルをProcessingのホームフォルダに解凍してください（詳細なインストール手順についてはREADME.TXTファイルを参照してください）。

Processingを起動すると、neorainbowduinoライブラリをインポートできるはずです：

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-processing-lib.png)

**簡単な例**

以下は、Rainbowduinoにランダムな矩形を送信する非常に簡単なProcessingスケッチです。

```c
import processing.serial.*;
import com.neophob.lib.rainbowduino.test.*;
import com.neophob.lib.rainbowduino.*;

static final int SIZE = 400;
Rainbowduino r;

void setup() {
    frameRate(15);
    background(0);
    size(SIZE, SIZE);

    // Rainbowduinoを初期化
    List<Integer> list = new ArrayList<Integer>();
    list.add(6);         // スレーブID 6のRainbowduinoを使用
    try {
        r = new Rainbowduino(this, list);
        System.out.println("ping: "+r.ping());
    } catch (Exception e) {
        println("シリアルポートを開けませんでした!!");
        e.printStackTrace();
    }

    smooth();
    noStroke();
}

void draw() {
    // 画面に簡単な図形を描画
    color c1 = color(128+(int)random(64), 128, (int)random(255));
    fill(c1);

    int size = 80+(int)random(80);
    int x = (int)random(SIZE);
    int y = (int)random(SIZE);
    rect(x, y, size, size);<br>
    // PAppletをRainbowduinoライブラリに送信し、スレーブID 6に送信
    r.sendRgbFrame((byte)6, this);
}
```

TODO スクリーンショットを追加

**画像リサイズの仕組み**

画像はエリア平均フィルターを使用してリサイズされます。そのため、画像が正しく整列されていることが重要です。整列されているとは、画像が8で割り切れる場合に結果が良好に見えることを意味します。以下は良い例と悪い例です：

|良い例（整列済み）|悪い例（未整列）|
|---|---|
|![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-resize-good-src.png)|![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-resize-bad-src.png)|
|![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-resize-good-dst.png)|![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-resize-bad-dst.png)|

## mtXcontrol ファームウェア

出典: [http://www.rngtng.com/mtxcontrol/](http://www.rngtng.com/mtxcontrol/)

**特徴:**

- mtXcontrolは、複数のマルチカラーLEDマトリックスを含む出力デバイス用の画像シーケンスを簡単に作成するためにProcessingで書かれたエディタです。

対応する動作モード: ???

## ファームウェア 3

出典: [http://code.google.com/p/rainbowduino-firmware/](http://code.google.com/p/rainbowduino-firmware/)

**特徴:**

- リフレッシュレートに同期したダブルバッファリング

- 4つの補助バッファ

- 高レベル命令セット

- 複数のハードウェア制御

- I2C通信プロトコル

- Eepromへのデータ永続保存

対応する動作モード: I2C

## RainbowDashboard

出典: [http://code.google.com/p/rainbowdash/](http://code.google.com/p/rainbowdash/)

**特徴:**

- クリーンで保守可能なコードベース

- 標準ファームウェアと互換性あり

- UARTモードをサポート（Arduinoホスト不要 - Rainbowduinoに直接接続可能）

- ダブルバッファリングされたグラフィックス操作

- ソフトウェアリアルタイムクロック

- Rainbowduino自体によるアニメーション駆動

- フルWindows ANSI (CP1252) 文字セット

- 高レベルコマンドセット

対応する動作モード: UART

I2Cを使用するように簡単に変更可能。変更が必要なのは1つのファイル（RainbowDash.pde）のみ。

## ファームウェアの動作原理

<big>マイクロプロセッサ - Atmega 168/328</big>

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-Schema.png)

| PORTD | PORTB | PORTC |
|---|---|---|
| pin02 / PD0 / RXD | pin14 / PB0 / INT0 | pin23 / PC0 / SDI |
| pin03 / PD1 / TXD | pin15 / PB1 / INT1 | pin24 / PC1 / CLK |
| pin04 / PD2 / INT0 | pin16 / PB2 / INT2 | pin25 / PC2 / LE |
| pin05 / PD3 / INT19 | pin17 / PB3 / INT3 | pin26 / PC3 / OE |
| pin06 / PD4 / INT20 | pin18 / PB4 / INT4 | pin27 / PC4 / SDA |
| pin11 / PD5 / INT21 | pin19 / PB5 / INT5/SCK | pin28 / PC5 / SDL |
| pin12 / PD6 / INT22 | | |
| pin13 / PD7 / INT23 | | |

**PORTB** はArduinoデジタルピン8から13にマッピングされます。上位2ビット（6 & 7）はクリスタルピンにマッピングされており、使用できません。

**PORTC** はArduinoアナログピン0から5にマッピングされます。ピン6 & 7はArduino Miniでのみアクセス可能です。

**PORTD** はArduinoデジタルピン0から7にマッピングされます。

<big>定電流LEDドライバ</big>

このドライバはMBI5168を使用します。MBI5168は8ビットの[シフトレジスタ](https://en.wikipedia.org/wiki/Shift_register)です。シリアルデータをパラレルデータに変換します。3つのMBI5168はすべてLE、CLK、OE入力を共有します。

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-Mbi-schema.png)

| 名前 | 説明 |
|---|---|
| OE | 出力イネーブル。低（アクティブ）時に出力ドライバが有効化され、高時にはすべての出力ドライバが無効化されます（ブランク状態）。 |
| LE | データストローブ入力端子。LEが高のときにシリアルデータがそれぞれのラッチに転送され、LEが低になるとデータがラッチされます。 |
| SDI | シフトレジスタへのシリアルデータ入力。 |
| SDO | 次のドライバICのSDIに接続されるシリアルデータ出力。 |
| R-EXT | すべての出力チャネルの出力電流を設定するために外部抵抗を接続する入力端子。 |
| CLK | データシフトのためのクロック入力端子（立ち上がりエッジで動作）。 |

<big>スーパーソースドライバ</big>

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-schema-M5456.png)

<big>データのシフトアウト</big>

LEDマトリックスにフルフレームを表示するには、Rainbowduinoの割り込みメソッドを128回呼び出す必要があります。8行と16段階の明るさレベルがあります。displayNextLine()メソッドが呼び出されるたびに、現在の明るさレベルで1行が更新されます。すべての8行が更新されると、明るさレベルが更新されます。このため、LEDマトリックスにフルフレームを表示するには、この関数を128サイクル実行する必要があります。

以下は、32、64、96、128サイクル後のLEDマトリックス表示を示しています。明るさが増加していることがわかります。
![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-fw.1.png)

<big>4096色（12ビット）以上のサポート</big>

標準ファームウェア（およびほとんどのサードパーティ製ファームウェア）は12ビットの色解像度をサポートしています。これを増加させることが可能です：

| 色解像度 | ペイロード | 明るさレベル |
|---|---|---|
| 12ビット（各色4ビット）、4096色 | 96バイト（12ビット*64=768ビット） | 16 |
| 15ビット（各色5ビット）、32768色 | 120バイト（15ビット*64=960ビット） | 32 |

各色4ビットを使用する利点はデータストレージにあります。1バイトで2つの色値を保持できるため、バイトバッファから色を簡単に取得できます。各色5ビットを使用する場合、より多くのCPUパワーまたはバッファスペースが必要になります（3つの色値に2バイトを使用 - 各色で1ビットを無駄にする）。

15ビットの色解像度を実現するには、ファームウェアに以下の2つの変更が必要です：

- 明るさレベルを16ではなく32でループする

- シフトアウト関数を変更する

## リソース

---

- [巨大なDIY LEDマトリックス](http://www.neophob.com/2010/11/huge-rgb-led-matrix/)

- [一般的なRainbowduino情報](http://www.neophob.com/2010/07/rainbowduino-fun-aka-neorainbowduino/)

- [ファイル:RAINBOW-MBI5168 Datasheet VA.02-English.pdf](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/res/RAINBOW-MBI5168_Datasheet_VA.02-English.pdf "ファイル:RAINBOW-MBI5168 Datasheet VA.02-English.pdf")

- [prod_documents](http://www.atmel.com/dyn/resources/prod_documents/doc2545.pdf)

- [ファイル:RAINBOW-MBI5168 Datasheet VA.02-English.pdf](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/res/RAINBOW-MBI5168_Datasheet_VA.02-English.pdf "ファイル:RAINBOW-MBI5168 Datasheet VA.02-English.pdf")

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
