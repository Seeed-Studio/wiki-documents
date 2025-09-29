---
description: Grove Serial LCD V1.0
title: Grove Serial LCD V1.0
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-Serial_LCD_V1.0
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/img/Lcdnew1.jpg)

Grove - Serial LCD V1.0は、シリアルLCDの新しいバージョンです。1枚の基板に16x2 LCDとPIC HD44780をベースにした組み込み回路が搭載されています。オンボードのPICはTTLシリアル入力を受け取り、受信した文字をLCDに表示します。このライブラリは、画面のクリア、バックライトの明るさ調整、ディスプレイのオン/オフなど、多くの特別なコマンドを使用することも可能です。

このLCDは多くの異なるプロジェクトで使用できるため、素晴らしいギフトにもなります！

## 特徴 ##

- 非常に使いやすい。

- ボーレート: 9600

- 4ピン接続（2つのI/Oと2つの電源ピン）。

- Arduino LiquidCrystalライブラリに似たAPI設計。

- モジュールは自動的にリスニングモードに戻る。

- 豊富なデモアプリケーションが付属。

- 電力を節約するためのバックライト制御。

## 応用アイデア ##

- Seeeduino / Arduino / 任意のマイクロコントローラーボード用のLCDディスプレイ。

- RTCと温度センサーを使用した時間と温度の表示。

- 加速度計を使用した加速度の表示。

- コンパスを使用した方位角の表示。

- あなたの想像力が限界です。

- PC CPUの重要なステータス表示：適切なUARTトランスレシーバーを使用してPCに接続可能。

## 仕様 ##

 |項目| 最小| 標準| 最大|単位|
 |--|--|--|--|--|
 |動作電圧| 4.7| 5| 5.5| V|
 |通信プロトコル| UART||| -|
 |バックライト制御|はい|||-|
 |動作電流:バックライトON|70|75| 80|mA|
 |動作電流:バックライトOFF|15|20| 25| mA|

## 使用方法 ##

### ハードウェアのインストール ###

- [Seeeduino](https://seeeddoc.github.io/Seeeduino_V2.2/) の動作電圧が5Vに設定されていることを確認してください。

- シリアルLCDを[Seeeduino](https://seeeddoc.github.io/Seeeduino_V2.2/)のソフトウェアUART（ピン11、ピン12）に**Grove Baseボード**端子を介して4ピンコネクタで接続します。

- Seeeduinoにファームウェアをアップロードした後、リセットスイッチを押してください。

![](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/img/SerialLCD010.jpg)

### プログラミング ###

シリアルLCDライブラリは、シリアルLCDモジュールと対話するための豊富なAPIセットを提供します。通常のLCDで実行できるすべての操作は、コマンドとデータをシリアルで送信することで実現できます。APIはArduinoのLiquidCrystalライブラリに似た設計になっており、シリアルLCDドライバへの迅速な移行が可能です。シリアルLCDモジュールとの対話は初期化から始まり、シリアルLCDモジュールがMCUに通信を開始する指示を送信します。初期化後、LCDは作業モードに入り、表示用のコマンドとデータを受け入れ始めます。対話に関与するコマンドと応答は[1]に要約されています。

### デモアプリケーション ###

[SerialLCDライブラリ](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/res/SerialLCD_Library.zip)をダウンロードし、Arduino IDEのライブラリフォルダに解凍してください。パスは次の通りです：..\arduino-1.0.1\libraries。その後、自分のディスプレイシステムで遊ぶことができます。

Arduino 1.0以降を使用している場合、NewSoftSerialはArduinoコアに含まれています（SoftwareSerialという名前）。

注意：シリアルLCDをGroveに接続し、Seeeduino/Arduinoに例をダウンロードした後、必ずSeeeduino/Arduinoをリセットしてください。

デモ1: Hello World

```
このスケッチは、最初の行に"hello, world!"を表示し、リセットから経過した秒数を2行目に表示します。このスケッチではbegin()、setCursor(row,col)、print()関数を使用します。
```

```
// ライブラリコードを含める:
#include <SerialLCD.h>
#include <NewSoftSerial.h> //これは必須

// ライブラリを初期化
SerialLCD slcd(11,12);//これは必須、ソフトシリアルピンを割り当て

void setup() {
  // セットアップ
  slcd.begin();
  // LCDにメッセージを表示
  slcd.print("hello, world!");
}

void loop() {
  // カーソルを列0、行1に設定
  // （注意: 行1は2行目、カウントは0から始まる）
  slcd.setCursor(0, 1);
  // リセットから経過した秒数を表示
  slcd.print(millis()/1000,DEC);
}
```

出力:

![](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/img/SerialLCD_twig_helloworld_example.gif)

デモ2: 断続的な表示

```
このスケッチは、LCDに"hello World!"を表示し、display()とnoDisplay()関数を使用してディスプレイをオン/オフします。
```

```
// ライブラリコードを含める:
#include <SerialLCD.h>
#include <NewSoftSerial.h> //これは必須

// ライブラリを初期化
SerialLCD slcd(11,12);//これは必須、ソフトシリアルピンを割り当て

void setup() {
  // セットアップ
  slcd.begin();
  // LCDにメッセージを表示
  slcd.print("hello, world!");
}

void loop() {
  // ディスプレイをオフにする
  slcd.noDisplay();
  delay(1000);
   // ディスプレイをオンにする
  slcd.display();
  delay(1000);
}
```

出力:
![](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/img/SerialLCD_twig_display_example.gif)

デモ3: 点滅

```
このスケッチは、LCDに"hello World!"を表示し、Blink()とnoBlink()関数を使用してカーソルブロックを点滅させます。
```

```
// ライブラリコードを含める:
#include <SerialLCD.h>
#include <NewSoftSerial.h> //これは必須

// ライブラリを初期化
SerialLCD slcd(11,12);//これは必須、ソフトシリアルピンを割り当て

void setup() {
  // セットアップ:
  slcd.begin();
  // LCDにメッセージを表示
  slcd.print("hello, world!");
}

void loop() {
  // 点滅カーソルをオフにする
  slcd.noBlink();
  delay(1000);
   // 点滅カーソルをオンにする
  slcd.blink();
  delay(1000);
}
```

出力:
![](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/img/SerialLCD_twig_blink_example.gif)

デモ4: カーソル表示

```
このスケッチは、LCDに"hello World!"を表示し、cursor()とnoCursor()メソッドを使用してカーソルをオン/オフします。
```

```
// ライブラリコードを含める:
#include <SerialLCD.h>
#include <NewSoftSerial.h> //これは必須

// ライブラリを初期化
SerialLCD slcd(11,12);//これは必須、ソフトシリアルピンを割り当て

void setup() {
  // セットアップ
  slcd.begin();
  // LCDにメッセージを表示
  slcd.print("hello, world!");
}

void loop() {
  // カーソルをオフにする
  slcd.noCursor();
  delay(1000);
   // カーソルをオンにする
  slcd.cursor();
  delay(1000);
}
```

OUTPUT:  
![](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/img/SerialLCD_twig_cursor_example.gif)

デモ 5: テキストの流れる方向とカーソル位置の表示

```
このスケッチは "Seeeduino" を LCD に 2 回表示します。このスケッチでは、カーソル位置とテキストの流れる方向（左から右、右から左）を示すために、setCursor(col,row)、leftToRight()、rightToLeft() メソッドを使用します。
```

```
// ライブラリコードをインクルード:
#include <SerialLCD.h>
#include <NewSoftSerial.h> //これは必須です

// ライブラリを初期化
SerialLCD slcd(11,12);//これは必須です。ソフトシリアルピンを割り当てます

void setup() {
  slcd.begin();
  // バックライトをオンにする
  slcd.backlight();
  // カーソルをオンにする
  slcd.cursor();
}

void loop() {
    // カーソルを 0 行目、0 列目（LCD の左上隅）に設定
    slcd.setCursor(0,0);
    // テキストの流れる方向を左から右に設定
    slcd.leftToRight();
    slcd.print("Seeeduino");

    // カーソルを 1 行目、15 列目（LCD の右下隅）に設定
    slcd.setCursor(15,1);
    // テキストの流れる方向を右から左に設定
    slcd.rightToLeft();
    slcd.print("Seeeduino");
}
```

OUTPUT:  
![](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/img/SerialLCD_twig_textflow_setcursor_example.jpg)

## 参照 ##

**Serial LCD ライブラリ** は、**LCD1602** の機能を活用するための完全な命令セットを提供します。SerialLCD ドライバは、UART ロジックを実装するために **NewSoftSerial** ライブラリを使用します。API へのアクセスは、ソフトウェアシリアルポート（Rx と Tx）を指定して **SerialLCD** クラスのオブジェクトを作成することで行います。

```
SerialLCD slcd(11,12);// 11 と 12 をソフトウェアシリアルポートの RxD と TxD ラインとして割り当てます。
```

**関数説明:**

1. **begin()**

この関数は Serial LCD モジュールを初期化するために使用されます。

例:

```
slcd.begin(); // LCD を初期化
```

2. **print()**

テキストを LCD に表示します。2 つの形式があります。

例:

```
slcd.print(data);  // data は任意のテキスト
slcd.print(data,BASE); // BASE は BIN, DEC, OCT, HEX のいずれか
slcd.print(float_data,2);// 浮動小数点データを表示、小数点以下の桁数(1-3)
```

3. **clear()**

ディスプレイをクリアします。

例:

```
slcd.clear();  // 画面をクリア
```

4. **home()**

カーソルを左上隅に設定します。

例:

```
slcd.home();  // ホームに移動
```

5. **noDisplay()**

RAM をクリアせずにディスプレイをオフにします。

例:

```
slcd.noDisplay();  // ディスプレイを空白にする
```

6. **display()**

noDisplay() の後にディスプレイをオンにします。RAM に存在するテキストが復元されます。

例:

```
slcd.display();  // RAM 内のテキストを表示
```

7. **noBlink()**

LCD カーソルの点滅をオフにします。

例:

```
slcd.noBlink();  // カーソルの点滅を無効化
```

8. **blink()**

LCD カーソルを点滅させます。SLCD_CURSOR_ON と併用すると、ディスプレイによって結果が異なる場合があります。

例:

```
slcd.blink();  // カーソルの点滅を有効化
```

9. **noCursor()**

LCD カーソルを非表示にします。

例:

```
slcd.noCursor();  // カーソル表示を無効化
```

10. **cursor()**

LCD カーソルを表示します。

例:

```
slcd.cursor();  // カーソル表示を有効化
```

11. **scrollDisplayLeft()**

ディスプレイの内容（テキストとカーソル）を左に 1 つ移動します。

例:

```
slcd.scrollDisplayLeft();  // 左にスクロール
```

12. **scrollDisplayRight()**

ディスプレイの内容（テキストとカーソル）を右に 1 つ移動します。

例:

```
slcd.scrollDisplayRight();  // 右にスクロール
```

13. **leftToRight()**

LCD に書き込まれるテキストの方向を「左から右」に設定します（デフォルト）。これにより、ディスプレイに書き込まれる次の文字が左から右に進みますが、既に出力されたテキストには影響しません。

例:

```
slcd.leftToRight();  // テキストの流れる方向を左から右に設定
```

14. **rightToLeft()**

LCD に書き込まれるテキストの方向を「右から左」に設定します。これにより、ディスプレイに書き込まれる次の文字が右から左に進みますが、既に出力されたテキストには影響しません。

例:

```
slcd.rightToLeft();  // テキストの流れる方向を右から左に設定
```

15. **autoscroll()**

LCD テキストの自動スクロールをオンにします。これにより、ディスプレイ上の各文字が 1 つの位置分だけ前の文字を押し出します。現在のテキスト方向が左から右（デフォルト）の場合、ディスプレイは左にスクロールします。

例:

```
slcd.autoscroll();  // 自動スクロールを有効化
```

16. **noAutoscroll()**

LCD テキストの自動スクロールをオフにします。

例:

```
slcd.noAutoscroll();  // 自動スクロールを無効化
```

17. **setCursor()**

カーソルを（列、行）の位置に設定します。

例:

```
slcd.setCursor(Col,Row);  // X,Y 位置にスクロール
```

18. **noPower()**

LCD の電源とバックライトをオフにしますが、MCU の電源はオンのままです。

例:

```
slcd.noPower();  // LCD の電源とバックライトをオフにする
```

19. **power()**

LCD の電源をオンにしますが、バックライトはオンにしません。

例:

```
slcd.power();  // LCD の電源をオンにする
```

20. **noBacklight()**

バックライトをオフにします。

例:

```
slcd.noBacklight();  // バックライトをオフにする
```

21. **backlight()**

バックライトをオンにします。

例:

```
slcd.backlight();  // バックライトをオンにする
```

22. **noPower() (新)**

LCD の電源とバックライトをオフにしますが、MCU の電源はオンのままです。

例:

```
slcd.noPower();  // LCD の電源とバックライトをオフにする
```

23. **power() (新)**

LCD の電源をオンにしますが、バックライトはオンにしません。

例:

```
slcd.power();  // LCD の電源をオンにする
```

24. **noBacklight() (新)**

バックライトをオフにします。

例:

```
slcd.noBacklight();  // バックライトをオフにする
```

25. **backlight() (新)**

バックライトをオンにします。

例:

```
slcd.backlight();  // バックライトをオンにする
```

## バージョントラッカー ##

 |改訂版|説明|リリース日|
 |--|--|--|
 |v1.0b|第2版|2011年3月20日|

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/res/202000309_PCBA-Grove-Serial%20LCD_%E5%8E%9F%E7%90%86%E5%9B%BE.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース ##

- **[Eagle]** [回路図および基板ファイル](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/res/202000309_PCBA-Grove-Serial%20LCD_%E5%8E%9F%E7%90%86%E5%9B%BE.zip)
- **[ライブラリ]** [v1.0bおよびv1.1b用SerialLCDライブラリ](https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/res/New_SerialLCD_Library_.zip)
- **[リポジトリ]** [SerialLCDのGitHubリポジトリ](https://github.com/Seeed-Studio/Grove_SerialLCD)
- **[ライブラリ]**  [NewSoftLibrary](http://arduiniana.org/NewSoftSerial/NewSoftSerial10c.zip)
- **[ライブラリ]** [v1.0bライブラリへの小さな修正](https://github.com/ydirson/Wiring/commit/60e58003e8c1dc9be81d0f58b1d0f3ef9fad1446)（begin()が正しいプロトコルに従っていない問題を修正）

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>