---
description: Seeed Studio XIAO SAMD21 の使い方
title: Seeed Studio XIAO SAMD21 の使い方
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Seeeduino-XIAO
last_update:
  date: 05/15/2025
  author: shuxu hu
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Seeed Studio XIAO SAMD21 の使い方

<img style={{display: 'block', margin: '0 auto'}} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" alt="pir" width={600} height="auto" />

Seeed Studio XIAO SAMD21（以前は Seeeduino XIAO と呼ばれていました）は、[Arduino 互換の強力な親指サイズの開発ボードシリーズである Seeed Studio XIAO ファミリー](https://www.seeedstudio.com/xiao-series-page)の最初の製品です。このボードは低消費電力マイクロコントローラーである ATSAMD21G18A-MU を搭載しています。一方で、この小型ボードは処理性能が高く、消費電力が少ないという特徴があります。小型サイズで設計されており、ウェアラブルデバイスや小規模プロジェクトに使用できます。

Seeed Studio XIAO SAMD21 には 14 本のピンがあり、11 のデジタルインターフェース、11 のアナログインターフェース、10 の PWM インターフェース（d1-d10）、1 つの DAC 出力ピン D0、1 つの SWD パッドインターフェース、1 つの I2C インターフェース、1 つの SPI インターフェース、1 つの UART インターフェース、シリアル通信インジケーター（T/R）、ピン多重化を通じたブリンクライト（L）として使用できます。LED（電源、L、RX、TX）の色は緑、黄、青、青です。さらに、Seeed Studio XIAO SAMD21 には Type-C インターフェースがあり、電源供給とコードのダウンロードが可能です。リセットボタンが 2 つあり、それらを短絡させてボードをリセットできます。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## **ドキュメント**

**Seeed Studio XIAO SAMD21** の使用方法に関する 2 つのドキュメントがあり、それぞれ異なる分野に焦点を当てています。以下の表を参考にしてください：

|[**Seeed によるドキュメント**](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO/)|[**Nanase によるドキュメント**](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO-by-Nanase/)|
|---|---|
|ピン配置図|インターフェース|
|Seeed Studio XIAO SAMD21 の使い方|Seeed Studio XIAO SAMD21 と MicroSD カード（SPI）|
|Seeed Studio XIAO SAMD21 GPIO の使用方法|Seeed Studio XIAO SAMD21 と GPS（UART）|
|Seeed Studio XIAO SAMD21 リソース|シングルサイクル IOBUS|

### **Seeed Studio XIAO SAMD21 での CircuitPython**

- [**Seeed Studio XIAO SAMD21 での CircuitPython の使い方**](https://wiki.seeedstudio.com/ja/Seeeduino-XIAO-CircuitPython) をご覧ください。

## **特徴**

- 強力な CPU: ARM® Cortex®-M0+ 32bit 48MHz マイクロコントローラー（SAMD21G18）を搭載し、256KB フラッシュメモリ、32KB SRAM を備えています。
- 柔軟な互換性: Arduino IDE に対応。
- 簡単なプロジェクト操作: ブレッドボードに対応。
- 小型サイズ: 親指サイズ（21x17.8mm）で、ウェアラブルデバイスや小規模プロジェクトに最適。
- 多様な開発インターフェース: 11 のデジタル/アナログピン、10 の PWM ピン、1 つの DAC 出力、1 つの SWD ボンディングパッドインターフェース、1 つの I2C インターフェース、1 つの UART インターフェース、1 つの SPI インターフェース。

## **仕様**

|項目|値|
|---|---|
|CPU|ARM Cortex-M0+ CPU(SAMD21G18)、最大48MHzで動作|
|フラッシュメモリ|256KB|
|SRAM|32KB|
|デジタルI/Oピン|11|
|アナログI/Oピン|11|
|I2Cインターフェース|1|
|SPIインターフェース|1|
|QTouch|7 (A0, A1, A6, A7, A8, A9, A10)|
|UARTインターフェース|1|
|電源供給およびダウンロードインターフェース|Type-C|
|電源|3.3V/5V DC|
|寸法|21×17.8×3.5mm|

## **ハードウェア概要**

<img style={{display: 'block', margin: '0 auto'}} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-pinout-1.jpg" alt="pir" width={600} height="auto" />

<img style={{display: 'block', margin: '0 auto'}} src="https:///files.seeedstudio.com/wiki/Seeeduino-XIAO/img/new1.png" alt="pir" width={600} height="auto" />

<img style={{display: 'block', margin: '0 auto'}} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino%20XIAO%20pinout%202.png" alt="pir" width={600} height="auto" />

<img style={{display: 'block', margin: '0 auto'}} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/regulator_to_3.3v.png" alt="pir" width={600} height="auto" />

:::caution
一般的なI/Oピンについて：
MCUの動作電圧は3.3Vです。一般的なI/Oピンに接続される電圧入力が3.3Vを超えると、チップが損傷する可能性があります。

電源供給ピンについて：
内蔵のDC-DCコンバータ回路により、5V電圧を3.3Vに変換できるため、VIN-PINおよび5V-PINを介して5V電源でデバイスを供給できます。

XIAO SAMD21は現在バッテリー電源のみをサポートしており、**バッテリー接続中にType-Cを接続することはできません**。これは安全上のリスクを引き起こす可能性があります。

使用時には注意し、シールドカバーを持ち上げないでください。
:::

### **ブートローダーモードに入る**

ユーザーのプログラミングプロセスが失敗した場合、Seeed Studio XIAO SAMD21ポートが消えることがあります。この問題は以下の操作で解決できます：

- Seeed Studio XIAO SAMD21をコンピュータに接続します。
- 図に示されたRSTピンをピンセットまたは短い線で2回短絡します。
- オレンジ色のLEDが点滅し、点灯します。

この時点で、チップはブートローダーモードに入り、書き込みポートが再び表示されます。SAMD21チップには2つのパーティションがあり、1つはブートローダー、もう1つはユーザープログラムです。製品は出荷時にシステムメモリにブートローダーコードを焼き付けています。上記の手順を実行することでモードを切り替えることができます。

<img style={{display: 'block', margin: '0 auto'}} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif" alt="pir" width={600} height="auto" />

### **リセット**

Seeed Studio XIAO SAMD21をリセットするには、以下の手順を実行します：

- Seeed Studio XIAO SAMD21をコンピュータに接続します。
- ピンセットまたは短い線を使用してRSTピンを**1回だけ**短絡します。
- オレンジ色のLEDが点滅し、点灯します。

注意：内蔵LEDの動作はArduinoのものとは逆です。Seeed Studio XIAO SAMD21ではピンをLOWに引き下げる必要がありますが、他のマイクロコントローラーではHIGHに引き上げる必要があります。

### **割り込み**

Seeed Studio XIAO SAMD21のすべてのピンは割り込みをサポートしていますが、5ピンと7ピンは同時に使用できません。割り込みの詳細については[こちら](https://github.com/Seeed-Studio/ArduinoCore-samd/blob/master/variants/XIAO_m0/variant.cpp)を参照してください。

### **ピンの多重化**

ピンを自分で設定する必要はありません。ピンを使用した後、関数を直接呼び出すことができます。

#### **デジタル入力と出力**

- ピン6をデジタルピンとして使用：

```c
const int buttonPin = 6;     // プッシュボタンピンの番号
const int ledPin =  13;      // LEDピンの番号

int buttonState = 0;         // プッシュボタンの状態を読み取る変数

void setup() {
  // LEDピンを出力として初期化
  pinMode(ledPin, OUTPUT);
  // プッシュボタンピンを入力として初期化
  pinMode(buttonPin, INPUT);
}

void loop() {
  // プッシュボタンの状態を読み取る
  buttonState = digitalRead(buttonPin);

  // プッシュボタンが押されているか確認。押されている場合、buttonStateはHIGH
  if (buttonState == HIGH) {
    // LEDを点灯
    digitalWrite(ledPin, HIGH);
  } else {
    // LEDを消灯
    digitalWrite(ledPin, LOW);
  }
}
```

#### **アナログ読み取り**

- ピン6をアナログピンとして使用：

```c
void setup() {
  // ledPinを出力として宣言
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // センサーから値を読み取る
  sensorValue = analogRead(sensorPin);
  // ledPinをオンにする
  digitalWrite(ledPin, HIGH);
  // プログラムを<sensorValue>ミリ秒停止
  delay(sensorValue);
  // ledPinをオフにする
  digitalWrite(ledPin, LOW);
  // プログラムを<sensorValue>ミリ秒停止
  delay(sensorValue);
}
```

#### **シリアル通信**

- ピン6をUARTのTXピンとして使用（UARTのRXピンはピン7）：

```c
void setup() {
    Serial1.begin(115200);
    while (!Serial);
}

void loop() {
    Serial1.println("Hello,World");
    delay(1000);
}
```

#### **I2C**

- ピン5をIICのSCLピンとして使用（IICのSDAピンはピン4）：

```c
// Wire Master Writer
// Nicholas Zambetti <http://www.zambetti.com>による

#include <Wire.h>

void setup()
{
  Wire.begin(); // I2Cバスに参加（マスターの場合はアドレスはオプション）
}

byte x = 0;

void loop()
{
  Wire.beginTransmission(4); // デバイス#4に送信
  Wire.write("x is ");        // 5バイト送信
  Wire.write(x);              // 1バイト送信  
  Wire.endTransmission();    // 送信停止
  x++;
  delay(500);
}
```

#### **SPI**

- ピン8をSPIのSCKピンとして使用（SPIのMISOピンはピン9、MOSIピンはピン10）：

```c
#include <SPI.h>
const int CS = 7;
void setup (void) {
   digitalWrite(CS, HIGH); // スレーブセレクトを無効化
   SPI.begin ();
   SPI.setClockDivider(SPI_CLOCK_DIV8); // クロックを8で分割
}

void loop (void) {
   char c;
   digitalWrite(CS, LOW); // スレーブセレクトを有効化
   // テスト文字列を送信
   for (const char * p = "Hello, world!\r" ; c = *p; p++) {
      SPI.transfer (c);
   }
   digitalWrite(CS, HIGH); // スレーブセレクトを無効化
   delay(2000);
}
```

#### **QTouch**

QTouchの使用方法については、以下の例プロジェクトを提供しています：[Seeed Studio XIAO SAMD21のQ-Touch機能を使用してフルーツピアノを作る方法](https://www.seeedstudio.com/blog/2020/07/20/how-to-make-a-fruit-piano-on-seeeduino-xiaos-q-touch-function-m/)。

#### **アナログ入力と出力**

PWMベースの「アナログ出力」を備えているだけでなく、SAMD21はデジタル-アナログコンバータ（DAC）という形で真のアナログ出力も提供します。このモジュールは0〜3.3Vのアナログ電圧を生成できます。これにより、より自然な音を持つオーディオを生成したり、「デジタルポテンショメータ」としてアナログデバイスを制御することが可能です。

DACはArduinoのピンA0でのみ利用可能で、analogWrite(A0, `<value>`）を使用して制御します。DACは最大10ビットの解像度に設定可能です（セットアップで[**analogWriteResolution(10)**](https://www.arduino.cc/reference/en/language/functions/zero-due-mkr-family/analogwriteresolution/)を呼び出すことを忘れないでください）。これにより、0〜1023の値が0〜3.3Vの間の電圧を設定します。

DACに加えて、SAMD21のADCチャネルはATmega328とは異なり、最大12ビットの解像度を備えています。これにより、アナログ入力値は0〜4095の範囲になり、0〜3.3Vの電圧を表します。ADCを12ビットモードで使用するには、セットアップで[**analogReadResolution(12)**](https://www.arduino.cc/reference/en/language/functions/zero-due-mkr-family/analogreadresolution/)を呼び出してください。

**DACのシリアルプロット**

以下はDACとADCの両方を示す例です。この実験を設定するには、A0をA1に接続します。A0にアナログ電圧を供給し、それをA1で読み取ります。これはチュートリアルで最も簡単な回路です：

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/AO_A1.jpg" /></div>

:::note
[**Seeed Studio XIAO SAMD21拡張ボード**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)を使用するSeeed Studio XIAO SAMD21
:::

このスケッチはA0に0〜3.3Vの範囲の正弦波出力を生成します。その後、A1を使用してその出力をADCに読み取り、0〜3.3Vの電圧に変換します。

もちろん、シリアルモニタを開いて電圧値のストリームを確認することができます。しかし、正弦波がテキストで視覚化しにくい場合は、Arduinoの新しいシリアルプロッタを使用してみてください。Tools > Serial Plotterに移動します。

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Serial%20poltting.png" /></div>

<div align="center"><img width="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO_DAC_wave.gif" /></div>

#### **DAC**

コードを提供してくれた[Aleksei Tertychnyi](https://github.com/WeSpeakEnglish)に感謝します。関連するすべての機能は彼によって開発および提供されました。

```cpp
#define DAC_PIN A0 // コードを少し読みやすくする
float x = 0; // sinを取る値
float increment = 0.02;  // xを各回増加させる値
int frequency = 440; // 正弦波の周波数

void setup() 
{
  analogWriteResolution(10); // アナログ出力解像度を最大値の10ビットに設定
  analogReadResolution(12); // アナログ入力解像度を最大値の12ビットに設定

  Serial.begin(9600);
}

void loop() 
{
  // 0〜1023の間の電圧値を生成
  // 正弦波をこれらの値の間でスケールする：
  // 511.5でオフセットし、sinを511.5倍する。
  int dacVoltage = (int)(511.5 + 511.5 * sin(x));
  x += increment; // xの値を増加

  // 0〜3.3Vの間の電圧を生成
  // 0= 0V, 1023=3.3V, 512=1.65Vなど。
  analogWrite(DAC_PIN, dacVoltage);

  // A1（A0に接続）を読み取り、12ビットADC値を
  // 0〜3.3Vの電圧に変換
  float voltage = analogRead(A1) * 3.3 / 4096.0;
  Serial.println(voltage); // 電圧を出力
  delay(1); // 1msの遅延
}
```

**結果**

<img style={{display: 'block', margin: '0 auto'}} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/THonny_DAC.jpg" alt="pir" width={600} height="auto" />

## **はじめに**

### **ハードウェア**

**必要な材料**

- Seeed Studio XIAO SAMD21 x1  
- コンピュータ x1  
- USB Type-C ケーブル x1  

:::tip

一部のUSBケーブルは電力供給のみ可能で、データ転送ができない場合があります。USBケーブルをお持ちでない場合や、使用中のUSBケーブルがデータ転送可能かどうかわからない場合は、[seeed USB type C support USB 3.1](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html)をご確認ください。
:::

- ステップ 1. Seeed Studio XIAO SAMD21 と Type-C ケーブルを準備します。

- ステップ 2. Seeed Studio XIAO SAMD21 をコンピュータに接続します。その後、黄色の電源LEDが点灯するはずです。

### **ソフトウェア**

:::note

Arduinoを初めて使用する場合は、[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino)を参照することを強くお勧めします。
:::

- **ステップ 1. Arduinoソフトウェアをインストールします。**

<div align="center">

[**Arduino IDEをダウンロード**](https://www.arduino.cc/en/software)

</div>

**Arduinoアプリケーションを起動する**

以前にダウンロードしたArduinoアプリケーション（arduino.exe）をダブルクリックします。

:::note

Arduinoソフトウェアが別の言語で読み込まれる場合は、設定ダイアログで言語を変更できます。詳細は[Arduinoソフトウェア（IDE）ページ](https://www.arduino.cc/en/Guide/Environment#languages)をご覧ください。
:::

- **ステップ 2. Blinkの例を開く**  

LED点滅の例スケッチを開きます：**File > Examples > 01.Basics > Blink**。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 3. Arduino IDEにSeeeduinoを追加する**

**File > Preference** をクリックし、以下のURLを「Additional Boards Manager URLs」に入力します：

[https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json](https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" alt="pir" width={600} height="auto" /></p>

**Tools-> Board-> Boards Manager...** をクリックし、検索欄に "**Seeed Studio XIAO SAMD21**" と入力します。「Seeed SAMD Boards」が表示されますので、これをインストールします。

<!-- ![](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-board.png) -->
<img style={{display: 'block', margin: '0 auto'}} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-board.png" alt="pir" width={600} height="auto" />

- **ステップ 4. ボードとポートを選択する**

ボードをインストールした後、**Tools-> Board** をクリックし、 "**Seeed Studio XIAO**" を見つけて選択します。これで、Arduino IDE用にSeeed Studio XIAO SAMD21のボード設定が完了しました。

<img style={{display: 'block', margin: '0 auto'}} src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/1.jpg" alt="pir" width={600} height="auto" />

Arduinoボードのシリアルデバイスを **Tools | Serial Port** メニューから選択します。通常、COM3以上が該当します（**COM1** と **COM2** は通常ハードウェアシリアルポート用に予約されています）。確認するには、Arduinoボードを切断してメニューを再度開き、消えたエントリを確認してください。それがArduinoボードです。再接続してそのシリアルポートを選択します。

<img style={{display: 'block', margin: '0 auto'}} src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/2.jpg" alt="pir" width={600} height="auto" />

- **ステップ 5. プログラムをアップロードする**  

環境内で「Upload」ボタンをクリックします。数秒待つと、アップロードが成功した場合、ステータスバーに「Done uploading.」というメッセージが表示されます。

<img style={{display: 'block', margin: '0 auto'}} src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" alt="pir" width={800} height="auto" />

アップロードが完了して数秒後、ボード上のピン13（L）LEDが点滅（オレンジ色）を開始するはずです。点滅した場合、おめでとうございます！Arduinoのセットアップが完了しました。問題がある場合は、トラブルシューティングの提案を参照してください。

:::note
フラッシュの最大サイズは8KBです。詳細はリソース内のATSAMD218A-MUデータシートをご覧ください。
:::

## サンプルアプリケーション

- [Seeed Studio XIAO SAMD21 を使用して Raspberry PI にログインする方法](https://wiki.seeedstudio.com/ja/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI)

- [SPI 通信インターフェース](https://wiki.seeedstudio.com/ja/XIAO-SPI-Communication-Interface)

- [Raspberry Pi を使用して壊れた XIAO を復旧する方法](https://forum.seeedstudio.com/t/how-to-unbrick-a-dead-xiao-using-raspberry-pi-guide-openocd/253990)。John_Doe さんの共有に感謝します。

## リソース

- **[PDF]** [ATSAMD218A-MU データシート](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/ATSAMD21G18A-MU-Datasheet.pdf)

- **[PDF]** [Seeed Studio XIAO SAMD21 回路図](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-v1.0-SCH-191112.pdf)

- **[電子書籍]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

- **[ZIP]** [Seeed Studio XIAO SAMD21 KiCAD ファイル](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-KICAD.zip)

- **[ZIP]** [Seeed Studio XIAO SAMD21 Eagle ファイル](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-v1.0.zip)

- **[DXF]** [Seeed Studio XIAO SAMD21 寸法 (DXF)](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/102010328_Seeeduino_XIAO_Dimension.rar)

- **[LBR]** [Seeed Studio XIAO SAMD21 Eagle フットプリント](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-footprint-eagle.lbr)

- **[ZIP]** [Seeed Studio XIAO SAMD21 工場出荷時ファームウェア](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/102010328_Seeeduino_XIAO_final_firmware.zip)

- **[XLSX]** [Seeed Studio XIAO SAMD21 ピン配置シート](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/XIAO-SAMD21-pinout_sheet.xlsx)

- **[STEP]** [Seeed Studio XIAO SAMD21 3D モデル](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/seeeduino-xiao-samd21-3d-model.zip)

- 🔗 **[Kicad]** [Seeed Studio XIAO SAMD21 フットプリント](https://github.com/Seeed-Studio/OPL_Kicad_Library/tree/master/Seeed%20Studio%20XIAO%20Series%20Library)

## コースリソース

<div align="middle"><img width="400" src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" /></div>

- **[電子書籍]** [XIAO: Big Power, Small Board Mastering Arduino and TinyML](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/)

## 技術サポート & 製品ディスカッション

当社の製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>