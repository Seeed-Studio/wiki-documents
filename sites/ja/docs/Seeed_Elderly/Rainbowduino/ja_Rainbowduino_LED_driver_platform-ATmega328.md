---
description: Rainbowduino_LED_driver_platform-ATmega328
title: Rainbowduino LED ドライバプラットフォーム-ATmega328
keywords:
  - Rainbowduino_LED_driver_platform-ATmega328
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Rainbowduino_LED_driver_platform-ATmega328
last_update:
  date: 01/20/2023
  author: Matthew
createdAt: '2023-02-16'
updatedAt: '2025-07-11'
url: https://wiki.seeedstudio.com/ja/Rainbowduino_LED_driver_platform-ATmega328/
---

|![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-Rainbowduino_LRG.jpg) |![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-Rainbowduino_01_LRG.jpg)
|---|---|

Rainbowduino ボードは、プロフェッショナルな LED 駆動能力を備えた Arduino 互換コントローラボードです。8x8 RGB LED マトリクス（コモンアノード）を駆動します。

* 外部回路は不要、接続するだけですぐに点灯！

* 120mA の定電流チャンネルを 24 チャンネル搭載

* 500mA の高出力ソースドライバチャンネルを 8 チャンネル搭載

* 6.5V〜12VDC の広い出力電圧に対応

* 専用 GPIO と ADC

* ハードウェア UART および I2C 通信

* 簡単にカスケード接続可能

* 小型・軽量

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Rainbowduino-LED-driver-platform-Atmega-328-p-371.html)

## スタンドアロンモード（plug and shine）

---
必要なハードウェア：

* Rainbowduino 1 台

* RGB LED マトリクス 1 台

最もシンプルな動作モードで、外部システムは不要です（ファームウェアを書き込むための TTL シリアルアダプタのみ必要）。LED マトリクスの表示内容は Rainbowduino 自身が生成します。

ユースケース：

* Rainbowduino によって計算されるシンプルなリアルタイムアニメーション

* Rainbowduino の 32kb ROM によって制限される、事前に保存されたアニメーションの表示

## UART モード

---
必要なハードウェア：

* Rainbowduino 1 台

* RGB LED マトリクス 1 台

* TTL レベルコンバータ 1 台

* UART 送信ユニット 1 台（Arduino、PC など）

コンピュータから 1 台の Rainbowduino にデータ（LED マトリクスの内容）を送信します。Rainbowduino には USB コネクタがなく TTL シリアル接続のみのため、TTL シリアルレベルコンバータ（BusPirate、UartSBee、Arduino など）が必要です。

**ユースケース：**

PC または Arduino で生成されたフレームを 1 枚の LED マトリクスに表示

## I2C モード

---
必要なハードウェア：

* Rainbowduino 1〜n 台

* RGB LED マトリクス 1〜n 枚

* I2C マスタデバイス 1 台（例：Arduino）

* 数本のケーブル

コンピュータから複数の Rainbowduino にデータ（LED マトリクスの内容）を送信します。Arduino に FTDI USB-シリアルアダプタ（Duemillanove、Diecimila など）を使用する場合の注意点として、コンピュータから Arduino へデータを送信する際に約 16ms のレイテンシがあります。新しい Arduino UNO ではレイテンシは約 4ms とかなり低くなっています。

ユースケース：

PC または Arduino で生成されたフレームを**複数の** LED マトリクスに表示

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-i2c-cabling.png)

## I2C カスケード

---
Rainbowduino は簡単にカスケード接続できるように設計されています。物理的に接続すると電源が引き回され、I2C によってチェーン全体を制御できます。I2C 通信のために、各 Rainbowduino には一意のアドレスを割り当てる必要があることに注意してください。

電源接続の準備：

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-chain-prepare.png)

Rainbowduino をカスケード接続した状態：

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-chained.png)

## 仕様

---
* マイクロプロセッサ：Atmega 328

* 基板サイズ：60mm *60mm* 1.6mm

* インジケータ：リセット、電源、ピン 13 LED

* 電源：6.5〜12 VDC（9 VDC 推奨）

* 電源コネクタ：2 ピン JST 端子台、3mm DC ジャック

* カスケード用電源コネクタ：端子台

* プログラムインターフェース：UART / ISP

* LED ドットマトリクスソケット：32

* 拡張ソケット：2.54mm 曲げピンヘッダペア

* 通信プロトコル：I2C / UART

* RHOS：対応

* 入力電圧：6.5〜12V

* 全体消費電流：600〜2000mA

* 定電流チャンネル（カソード）：24

* チャンネルあたりの定電流（カソード）：20〜120mA

* チャンネルあたりのソースドライバ電流（コモンアノード）：500mA

* チャンネルあたりのソースドライバ電圧（コモンアノード）：9〜12V

* ソースドライブチャンネル：8

* 駆動可能な LED 数：192

* 回路応答時間：10ns

* RGB LED マトリクスのドットあたりの色解像度：4096：Uart ボーレート：115200baud

## LED デバイス互換性

---
メスピンヘッダに直接差し込む前に、RGB ドットマトリクスが互換性確認済みであることを必ず確認してください。主な懸念点はピン配置で、同じ色の LED がクラスターになっているかどうかです。ここでは回路図と写真によるデモンストレーションを添付します。制御ロジックはオープンソースで簡単に再プログラムできるため、色の並び順は変更される場合があります。

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-ledmatrix-schema.png)

Rainbowduino の電力は、RGB ドットマトリクスを駆動するだけでは余りあるほどです。192 出力と最大 120mA の定電流能力により、大規模な LED セットアップも容易に構成できます。

各チャンネルの出力電流（IOUT）は外付け抵抗 Rext によって設定されます。Iout と Rext の関係は次の図に示されています。詳細については MBI5168 のデータシートを参照してください。1k ポテンショメータを時計回りに回すと出力電流が減少します（RGB ドットマトリクス用のデフォルト最小値は 20mA）、反時計回りに回すと出力電流が増加します。ポテンショメータは単回転式なので、強い力を加えると無限に回転する状態になってしまうことに注意してください。その場合はマルチメータを使って調整する必要があります。 :)

つまり、追加の抵抗なしで独自の LED マトリクスを構築できます。

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-ledmatrix-voltage.png)

## デモンストレーション

---
<big>必要条件 </big>

* Rainbowduino ボード

* コモンアノード RGB マトリクス

* Arduino ボード（オプション）

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-connected-matrix.png)

<big>Rainbowduino ハードウェアの準備 </big>

RGB LED マトリクスを Rainbowduino に接続し、「Pin 1」を赤い接続ブロックに接続します。Pin1 は四角いはんだパッドで示されており、他のピンは丸いはんだパッドになっています。

<big>ファームウェアの書き込み  </big>

1.Arduino にまずコードを 1 つ書き込みます：
Arduino を使って Rainbowduino にファームウェアを書き込むには、Arduino をクリーンな状態にしておく必要があります。以下のような空のファームウェアスケッチを Arduino に書き込んでください。

```
void setup() {}

void loop() {}
```

2. Rainbowduino にファームウェアを書き込む

Rainbowduino のファームウェアを開き、**正しいボードを選択**（Tools--&gt;board--&gt; Arduino Duemilanove or Nano w/ ATmega328）してファームウェアを書き込みます。少なくとも理論上はそうなっています ;)
 あなたに分かりやすいように、接続図を以下に示します：
![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-fritz-uploadfw.png)

ここでは外部電源を使用していますが、Arduino の 5V を使用することもできます。

**注意：** Rainbowduino v1 ボードをお持ちの場合は、「Arduino Diecimila, Duemilanove, or Nano w/ ATmega168」を選択する必要があります！

<table >
<tr>
<th>Arduino</th>
<th>Rainbowduino</th>
<th>RESET</th>
<th>DTR</th>
<th>GND</th>
<th>GND</th>
<th>RX</th>
<th>RX</th>
<th>TX</th>
<th>TX</th>
</tr>
</table>

3.UartSB を使ってファームウェアを書き込む

以下のスクリーンショットは、UartSBee を Rainbowduino に接続する方法を示しています：

| ![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-beeONE.jpg)|![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-beeTWO.jpg)
|---|---|

UartSBee を USB バスに接続すると、新しいシリアルポートとして認識されるはずです。あとはその新しいシリアルポートを使ってファームウェアを書き込むだけです。

4.Buspirate を使ってファームウェア / ブートローダを書き込む

ここでは（すべて buspirate を使用する）3 つのプログラミング方法について説明します：

* ISP 経由でのプログラミング
* avrdude と手動リセットを使ったプログラミング（パッチ不要）
* 小さなパッチを当てた avrdude 経由でのプログラミング

RAINBOWDUINO をディスプレイおよび電源から切り離してください。

STEP 1: Buspirate を使用するには、新しいバージョンの avrdude が必要です [[1]](http://download.savannah.gnu.org/releases/avrdude/)。ここではバージョン 5.10 を使用しており、これは '-c buspirate' プログラマオプションを認識します。次のコマンドでテストできます

```
./avrdude -c buspirate -C ./avrdude.conf
```

これでプログラマに関するエラーが出る場合は、より新しいバージョンの buspirate が必要です。

STEP 2: buspirate を rainbowduino の ISP コネクタに次のように接続します：

<table >
<tr>
<th> Buspirate</th>
<th> ISP</th>
<th> ISP pin</th>
</tr>
<tr>
<td width="80px"> GND</td>
<td width="80px"> GND</td>
<td width="80px"> 6</td>
</tr>
<tr>
<td> +5V</td>
<td> Vcc</td>
<td> 2</td>
</tr>
<tr>
<td> CS</td>
<td> RESET</td>
<td> 5</td>
</tr>
<tr>
<td> MOSI</td>
<td> MOSI</td>
<td> 4</td>
</tr>
<tr>
<td> MISO</td>
<td> MISO</td>
<td> 1</td>
</tr>
<tr>
<td> SCL/CLK</td>
<td> SCK</td>
<td> 3</td>
</tr>
</table>

STEP 3: 適切なブートローダを探します（ここでは tiny optiboot ファームウェアを使用しています）。このファイルを、新しくコンパイルした avrdude ディレクトリにコピーします。

STEP 4: 次のコマンドで atmega 328p に書き込みます

```
./avrdude -v -c buspirate -p m328p -C ./avrdude.conf -P /dev/ttyUSB0 -U flash:w:optiboot_atmega328.hex
```

これには非常に長い時間がかかります…

まずブートローダなしでファームウェアを書き込むことから始めましたが、それでも問題なく動作します。コツは Arduino IDE から HEX ファイルを取り出すことです。バージョン 0.22-Linux では、これらはスケッチディレクトリではなく /tmp/buildXXXXXXXXXXXX に保存されます。プログラマを何も接続せずに「Upload」コマンドを実行してください（Arduino IDE から多くのデバッグ情報を得るには、「upload」ボタンを押す間 &lt;shift&gt; を押し続けます）。

Rainbowduino にブートローダを書き込んだ後は、buspirate の透過シリアルインターフェースを使用できます。ボーレートを 115200 に設定し、'(3)' マクロを入力して透過モードを有効にします。これで buspirate は USB-シリアルコンバータのように動作します（他の FTDI 互換 USB-シリアルコンバータも使用できます）。buspirate の問題点は、Arduino をリセットするための DTR がないことです。リセットと書き込みのタイミングを手動で合わせる必要があります。書き込み開始後にリセットボタンを押すのが最も良いようです。

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
Mode selected
Set serial port speed: (bps)
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
Data bits and parity:
1. 8, NONE *default
2. 8, EVEN
3. 8, ODD
4. 9, NONE
(1) >
Stop bits:
1. 1 *default
2. 2
(1) >
Receive polarity:
1. Idle 1 *default
2. Idle 0
(1) >
Select output type:
1. Open drain (H=Hi-Z, L=GND)
2. Normal (H=3.3V, L=GND)
(1) >2
READY
UART>(3)
UART bridge. Space continues, anything else exits.
Reset to exit.
```

その後、ブートローダーを使って Arduino に書き込むことができます：

```
./avrdude -v -c stk500v1 -p m328p -b 115200 -F -C ./avrdude.conf -P /dev/ttyUSB0 -U flash:w:Rainbow_Plasma.cpp.hex
```

さらに一歩進めて、ファイル 'arduino.c' 内の avrdude にパッチを当てることもできます。Bus Pirate は Arduino に対して 'rts' 信号を逆極性で送信しているため、1 と 0 を入れ替えることでそれを修正します。その後は、プログラマとして 'stk500v1' ではなく 'arduino' を選択する必要があります。

```
static int arduino_open(PROGRAMMER * pgm, char * port)
{
    fprintf(stderr, "arduino_open...\n");
    strcpy(pgm->port, port);
    serial_open(port, pgm->baudrate? pgm->baudrate: 115200, &pgm->fd);

  /* Clear DTR and RTS to unload the RESET capacitor
   * (for example in Arduino) */
    serial_set_dtr_rts(&pgm->fd, 1);
    usleep(50*1000);
  /* Set DTR and RTS back to high */
    serial_set_dtr_rts(&pgm->fd, 0);
    usleep(50*1000);

  /*
   * drain any extraneous input
   */
    stk500_drain(pgm, 0);

    if (stk500_getsync(pgm) < 0)
    return -1;

    return 0;
}
```

_注意: Arduino IDE が使用するプログラマの種類を 'boards.txt' ファイル内で変更してください。_

出典: buspirate-avr-programming [[2]](http://hintshop.ludvig.co.nz/show/buspirate-avr-programming/), Bus_Pirate_AVR_Programming [[3]](http://dangerousprototypes.com/docs/Bus_Pirate_AVR_Programming), Optiboot [[4]](http://code.google.com/p/optiboot/)

## Rainbowdunio ファームウェア

<big>Neorainbowduino ファームウェア</big>

このファームウェアバンドルには 2 つのファームウェア（1 つは Arduino 用、もう 1 つは Rainbowduino 用）と Processing ライブラリが含まれています。任意のアプリケーションからシリアルライン経由で Arduino にデータを送信でき、Arduino が対応する Rainbowduino デバイスに画像を送信します。入門しやすいように、使いやすい Processing ライブラリを作成しました。

出典: [http://code.google.com/p/neorainbowduino/](http://code.google.com/p/neorainbowduino/)

**特長:**

* I2C 対応ファームウェア（複数の Rainbowduino をサポート）

* Processing ライブラリにより、Processing から簡単に Rainbowduino を制御できます！

* Processing から Rainbowduino へフルフレームを送信

* Processing から RGB マトリクスへフレームを送信、各フレームは 8x8 ピクセル、12 ビットカラー解像度（4096 色）。カラー変換はライブラリが処理します

* 最適化された Processing ライブラリ - 必要な場合にのみフレームを Rainbowduino に送信（トラフィックを約 50% 削減 - もちろんフレーム内容に依存します）

* バッファスワップの修正（ちらつきなし）

* I2C バススキャナを追加、アドレスを忘れても Rainbowduino を見つけられます

対応動作モード: I2C

<big>必要環境 </big>

このファームウェアにより、Processing を使って Rainbowduino を制御できます。そのため、必要なものは明らかです:

* Processing ソフトウェア、[http://processing.org/](http://processing.org/) から入手してください

<big>Arduino IDE へのパッチ</big>

neorainbowduino ファームウェアは I2C 経由でフルフレーム（92 バイト）を送信するため、Arduino 用に I2C バッファサイズにパッチを当てる必要があります（転送速度を最適化するため）。近い将来、Arduino が可変バッファサイズをサポートしてくれることを願っています。ファイルにパッチを当てるときは、**Arduino IDE を終了していることを確認してください！**

**パッチを当てるファイル:** Java/libraries/Wire/utility/twi.h

**理由:** I2C 速度を 100kHz から 400kHz に引き上げ、I2C バッファサイズを 32 バイトから 98 バイトに増やすため

<big>オリジナルファイル</big>

```c
#ifndef TWI_FREQ
#define TWI_FREQ 100000L
#endif

#ifndef TWI_BUFFER_LENGTH
#define TWI_BUFFER_LENGTH 32
#endif
```

<big>パッチ適用後ファイル</big>

```c
#ifndef TWI_FREQ
#define TWI_FREQ **400000L**
#endif

#ifndef TWI_BUFFER_LENGTH
#define TWI_BUFFER_LENGTH **98**
#endif

```

x

**パッチを当てるファイル:** Java/libraries/Wire/Wire.h

**理由:** シリアルバッファサイズを 32 バイトから 98 バイトに増やすため

<table>
<tr>
<th>オリジナルファイル</th>
<th>パッチ適用後ファイル</th>
</tr>
<tr>
<td width="300px"></td>
<td width="300px"></td>
</tr>
</table>

<pre>#define BUFFER_LENGTH 32</pre>

<pre>#define BUFFER_LENGTH **98**</pre>

<big>Rainbowduino へのファームウェア書き込み</big>

ファームウェアを書き込みます（「Upload Firmware」を参照）、必要なファームウェアファイルは **rainbowduinoFw/Rainbow_V2_71/Rainbow_V2_71.pde** です。

**注意:** このファームウェアは通信に I2C プロトコルを使用します。各 Rainbowduino には一意の I2C アドレスが必要です。アドレスは Rainbowduino.h ファイル（`#define I2C_DEVICE_ADDRESS 0x06`）を編集して設定できます。このファームウェアを複数の Rainbowduino に書き込む場合は、アドレスを変更するのを忘れないでください！

<big>Arduino へのファームウェア書き込み</big>

Rainbowduino と Arduino 間の RX/TX ラインを切り離します。Arduino に Arduino 用ファームウェア **arduinoFw/neoLed/neoLed.pde** を書き込みます。

<big>Rainbowduino との対話</big>

この章では、Rainbowduino と**通信する簡単な方法**を紹介します。Arduino（シリアルから I2C へのゲートウェイとして動作）と、I2C アドレス 0x06 を持つ Rainbowduino が必要です。

Rainbowduino と Arduino の接続は次のようになります:
![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-neorainbow.png)

ここでは外部電源を使用していますが、Arduino の 5V を使用することもできます。

<table>
<tr>
<th> Arduino</th>
<th> Rainbowduino</th>
</tr>
<tr>
<td width="150px">RESET</td>
<td width="150px">DTR</td>
</tr>
<tr>
<td>GND</td>
<td>GND</td>
</tr>
<tr>
<td>Analog IN 4</td>
<td>SDA</td>
</tr>
<tr>
<td>Analog IN 5</td>
<td>SDL</td>
</tr>
</table>

<big>Processing ライブラリのインストール </big>

Processing ソフトウェアをインストールしたら、neorainbowduino ライブラリをインストールする必要があります。Processing ライブラリは **processingLib\distribution\neorainbowduino-x.y\download** ディレクトリ内にあります。zip ファイルを Processing のホームフォルダに展開してください（インストール方法の詳細な手順については、中にある README.TXT ファイルを参照してください）。

Processing を起動すると、neorainbowduino ライブラリをインポートできるはずです）:

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-processing-lib.png)

**簡単な例**

ここでは、いくつかのランダムな矩形を Rainbowduino に送信する、非常にシンプルな Processing スケッチを示します。

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

    //initialize rainbowduino
    List<Integer> list = new ArrayList<Integer>();
    list.add(6);         //use rainbowduino with slave id 6
    try {
        r = new Rainbowduino(this, list);
        System.out.println("ping: "+r.ping());
    } catch (Exception e) {
        println("FAILED to open serial port!!");
        e.printStackTrace();
    }

    smooth();
    noStroke();
}

void draw() {
    //draw some simple stuff on screen
    color c1 = color(128+(int)random(64), 128, (int)random(255));
    fill(c1);

    int size = 80+(int)random(80);
    int x = (int)random(SIZE);
    int y = (int)random(SIZE);
    rect(x, y, size, size);<br>
    //send PApplet to the Rainbowduino lib - and send it to slave id 6
    r.sendRgbFrame((byte)6, this);
}
```

TODO いくつかスクリーンショットを追加

**画像リサイズの仕組み**

画像はエリア平均フィルタを使ってリサイズされます。そのため、画像が正しく位置合わせされていることを知っておくことが重要です。位置合わせされているとは、画像が 8 で割り切れる場合に結果が良く見えることを意味します。以下に良い例と悪い例を示します:

|良い例（位置合わせ済み）|悪い例（未位置合わせ）
|---|---|
|![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-resize-good-src.png)|![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-resize-bad-src.png)
| ![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-resize-good-dst.png)|![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-resize-bad-dst.png)

## mtXcontrol ファームウェア

出典: [http://www.rngtng.com/mtxcontrol/](http://www.rngtng.com/mtxcontrol/)

**特長:**

* mtXcontrol は Processing で書かれたエディタで、マルチカラー LED マトリクスを含む複数の出力デバイス向けに、画像シーケンスを簡単に作成できます。

対応動作モード: ???

## ファームウェア 3

出典: [http://code.google.com/p/rainbowduino-firmware/](http://code.google.com/p/rainbowduino-firmware/)

**特長:**

* リフレッシュレートと同期したダブルバッファリング

* 4 つの補助バッファ

* 高レベル命令セット

* 複数のハードウェアを制御

* I2C 通信プロトコル

* Eeprom への永続データ保存

対応動作モード: I2C

## RainbowDashboard

出典: [http://code.google.com/p/rainbowdash/](http://code.google.com/p/rainbowdash/)

**特長:**

* クリーンで保守しやすいコードベース。

* 標準ファームウェアと互換性あり。

* UART モードをサポート（Arduino ホスト不要 - Rainbowduino と直接通信）。

* ダブルバッファリングされたグラフィックス処理。

* ソフトウェアリアルタイムクロック。

* Rainbowduino 自身によって駆動されるアニメーション。

* Windows ANSI（CP1252）文字セットを完全サポート。

* 高レベルコマンドセット。

対応動作モード: UART

I2C を使用するように簡単に変更できます。変更が必要なのは 1 つのファイル（RainbowDash.pde）だけです。

## rainbowduino-rs

> **注意:** `rainbowduino-rs` は、Rainbowduino v2.0 向けに [jecaro](https://github.com/jecaro) によって作成された、独立したコミュニティ開発のファームウェアプロジェクトです。Seeed Studio による公式なメンテナンスやサポートは行われていません。ユーザーはファームウェアを書き込む前にハードウェアの互換性を確認し、自己責任で使用してください。

![4 枚のボードで構成された 16x16 スクエア上のプラズマ](https://raw.githubusercontent.com/jecaro/rainbowduino-rs/284b365f7b7f1e9db90c1e7e6695163262a58217/plasma.webp)

出典: [https://github.com/jecaro/rainbowduino-rs](https://github.com/jecaro/rainbowduino-rs)

**特長:**

* Rust で書かれたファームウェア

* I2C 経由でフルフレームバッファを受信し、連続表示

* 各色 16 段階の輝度レベル（4 ビット）

* 任意の配置（例: 32x8 ストリップや 16x16 スクエア、ボードを逆さにした構成など）で、複数のボードを 1 つのディスプレイとして駆動するためのマスタライブラリ

* Arduino Uno 用のマスタファームウェア例

対応動作モード：I2C

## ファームウェアの動作について

<big>マイクロプロセッサ - Atmega 168/328</big>

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-Schema.png)

<table>
<tr>
<th> PORTD</th>
<th> PORTB</th>
<th> PORTC</th>
</tr>
<tr>
<td width="150px">pin02 / PD0 / RXD</td>
<td width="150px">pin14 / PB0 / INT0</td>
<td width="150px">pin23 / PC0 / SDI</td>
</tr>
<tr>
<td>pin03 / PD1 / TXD</td>
<td>pin15 / PB1 / INT1</td>
<td>pin24 / PC1 / CLK</td>
</tr>
<tr>
<td>pin04 / PD2 / INT0</td>
<td>pin16 / PB2 / INT2</td>
<td>pin25 / PC2 / LE</td>
</tr>
<tr>
<td>pin05 / PD3 / INT19</td>
<td>pin17 / PB3 / INT3</td>
<td>pin26 / PC3 / OE</td>
</tr>
<tr>
<td>pin06 / PD4 / INT20</td>
<td>pin18 / PB4 / INT4</td>
<td>pin27 / PC4 / SDA</td>
</tr>
<tr>
<td>pin11 / PD5 / INT21</td>
<td>pin19 / PB5 / INT5/SCK</td>
<td>pin28 / PC5 / SDL</td>
</tr>
<tr>
<td>pin12 / PD6 / INT22</td>
<td></td>
<td></td>
</tr>
<tr>
<td>pin13 / PD7 / INT23</td>
<td></td>
<td></td>
</tr>
</table>

**PORTB** は Arduino のデジタルピン 8 〜 13 に対応します。上位 2 ビット（6 と 7）は水晶発振子ピンに割り当てられており、使用できません。

**PORTC** は Arduino のアナログピン 0 〜 5 に対応します。ピン 6 と 7 は Arduino Mini でのみアクセス可能です。

**PORTD** は Arduino のデジタルピン 0 〜 7 に対応します。

<big>定電流 LED ドライバ</big>

このドライバは MBI5168 を使用します。MBI5168 は 8 ビットの[シフトレジスタ](https://en.wikipedia.org/wiki/Shift_register)です。シリアルデータをパラレルデータに変換します。3 つすべての MBI5168 は LE、CLK、OE 入力を共有します。

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-Mbi-schema.png)

<table>
<tr>
<th> Name</th>
<th> Desc</th>
</tr>
<tr>
<td width="50px">OE</td>
<td width="950px">出力イネーブル。Low（アクティブ）のとき、出力ドライバが有効になります。High のとき、すべての出力ドライバは OFF（ブランキング）されます。</td>
</tr>
<tr>
<td>LE</td>
<td>データストローブ入力端子。LE が High のとき、シリアルデータはそれぞれのラッチに転送されます。LE が Low になるとデータがラッチされます。</td>
</tr>
<tr>
<td>SDI</td>
<td>シフトレジスタへのシリアルデータ入力。</td>
</tr>
<tr>
<td>SDO</td>
<td>次段のドライバ IC の SDI へのシリアルデータ出力。</td>
</tr>
<tr>
<td>R-EXT</td>
<td>すべての出力チャネルの出力電流を設定するための外付け抵抗を接続する入力端子。</td>
</tr>
<tr>
<td>CLK</td>
<td>立ち上がりエッジでデータをシフトするためのクロック入力端子</td>
</tr>
</table>

<big>スーパーソースドライバ</big>

![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-schema-M5456.png)

<big>データのシフトアウト</big>

LED マトリクスにフルフレームを表示するには、Rainbowduino の割り込みメソッドを 128 回呼び出す必要があります。8 本のラインと 16 段階の輝度レベルがあります。displayNextLine() メソッドが呼び出されるたびに、現在の輝度レベルで 1 本のラインが更新されます。8 本すべてのラインが更新されると、輝度レベルが更新されます。そのため、この関数は LED マトリクス上に 1 フレーム全体が描画されるまでに 128 サイクル必要になります。

下図は 32、64、96、128 サイクル後の LED マトリクス表示です。輝度がどのように増加していくかが分かります。
![](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/img/RAINBOW-fw.1.png)

<big>4096 色（12bit）以上をサポート</big>

標準ファームウェア（およびほとんどのサードパーティ製ファームウェア）は 12bit のカラー解像度をサポートしています。これは拡張することも可能です：

<table>
<tr>
<th> Color Resolution</th>
<th> Payload</th>
<th> Brightness Level</th>
</tr>
<tr>
<td width="250px">12 bit（色あたり 4bit）、4096 色</td>
<td width="250px">96 バイト（12bit*64=768bit）</td>
<td>16</td>
</tr>
<tr>
<td>15 bit（色あたり 5bit）、32768 色</td>
<td>120 バイト（15bit*64=960bit）</td>
<td>32</td>
</tr>
</table>

色あたり 4bit を使用する利点はデータの格納方法にあり、1 バイトで 2 つの色値を保持できるため、バイトバッファから色を取得しやすくなります。色あたり 5bit を使用する場合は、より多くの CPU パワーか、より多くのバッファ領域が必要になります（3 つの色値に 2 バイトを使用し、色あたり 1bit を無駄にします）。

15 bit のカラー解像度を実現するには、ファームウェアに 2 つの変更が必要です：

* 輝度レベルを 16 ではなく 32 までループさせる

* シフトアウト関数を変更する

## リソース

---

* [巨大な DIY LED マトリクス](http://www.neophob.com/2010/11/huge-rgb-led-matrix/)

* [一般的な Rainbowduino 情報](http://www.neophob.com/2010/07/rainbowduino-fun-aka-neorainbowduino/)

* [File:RAINBOW-MBI5168 Datasheet VA.02-English.pdf](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/res/RAINBOW-MBI5168_Datasheet_VA.02-English.pdf "File:RAINBOW-MBI5168 Datasheet VA.02-English.pdf")

* [prod_documents](http://www.atmel.com/dyn/resources/prod_documents/doc2545.pdf)

* [File:RAINBOW-MBI5168 Datasheet VA.02-English.pdf](https://files.seeedstudio.com/wiki/Rainbowduino_LED_driver_platform-ATmega328/res/RAINBOW-MBI5168_Datasheet_VA.02-English.pdf "File:RAINBOW-MBI5168 Datasheet VA.02-English.pdf")

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
