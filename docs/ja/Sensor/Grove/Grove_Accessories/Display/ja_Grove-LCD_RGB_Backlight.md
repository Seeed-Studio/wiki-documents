---
description: Grove - LCD RGB バックライト
title: Grove - LCD RGB バックライト
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-LCD_RGB_Backlight
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/intro.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/intro.jpg" alt="pir" width={600} height="auto" /></p>

単色バックライトに飽きていませんか？この Grove モジュールを使用すると、シンプルで簡潔な Grove インターフェースを介して好きな色に設定できます。このモジュールは、マイクロコントローラーとの通信方法として I2C を採用しています。そのため、データ交換とバックライト制御に必要なピン数が約10本から2本に減少し、他の複雑なタスクのために IO を解放します。さらに、Grove - LCD RGB バックライトはユーザー定義の文字をサポートしています。ハート型やその他の外国語の文字を表示したいですか？この機能を活用してデザインしてください！この製品は Grove - Serial LCD の代替品です。もし基本的な16x2 LCDモジュールを探している場合は、緑黄色バックライトバージョンや青色バックライトバージョンも販売しています。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-LCD-RGB-Backlight-p-1643.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

:::note
Grove-LCD RGB バックライトは V4.0 から V5.0 に更新され、コードも互換性のためにアップグレードされました。これで、新しい互換コードを使用して、より強力な Grove-LCD RGB バックライト V5.0 を駆動できます。

以下は変更履歴です：

- 新しい 5V/3.3V 互換性。
- RGB I2C アドレスが 0x62 から 0x30 に変更。
- RGB ドライバーチップが PCA9632 から SGM31323 に更新。
- PCB シルクスクリーンが "Grove-LCD RGB Backlight V4.0" から "Grove-LCD RGB Backlight V5.0" に更新。
- その他の既知の問題を修正。

新しいコード（v4.0 と v5.0 の両方に互換性あり）：https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/
:::
## バージョン

| 製品バージョン               | 変更点                                   | リリース日     |
|------------------------------|-------------------------------------------|---------------|
| Grove-LCD RGB Backlight V1.0 | 初期版                                   | 2012年6月     |
| Grove-LCD RGB Backlight V2.0 | PCB レイアウトの最適化                   | 2013年11月    |
| Grove-LCD RGB Backlight V4.0 | PCB レイアウトの最適化                   | 2016年9月     |

## 特徴

* RGB バックライト
* I2C 通信
* 内蔵英語フォント
* 16x2 LCD

:::tip
    Grove モジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/) を参照してください。
:::
## 仕様

|項目|値|
|------|----------|
| 入力電圧|5V|
| 動作電流 | &lt;60mA |
|CGROM | 10880 ビット |
| CGRAM | 64x8 ビット |
| LCD I2C アドレス | 0X3E |
| RGB I2C アドレス | 0X62 |


:::note
    I2C アドレスは4つあり、LCD と RGB に2つの I2C アドレスを使用します。
:::

## 対応プラットフォーム

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上記で対応していると記載されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォームに対してソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## アプリケーションアイデア

* ヒューマンマシンインターフェース
* スマートハウス
* センサーハブ

以下は参考になるプロジェクトの例です。

|Edison Wi-Fi アドレス|WiFi対応温室|Grove ラッキーダンプリング|
|------------------------|-------------------|--------------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/project1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/project2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/project3.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ作る！](https://www.instructables.com/id/Show-the-Intel-Edison-WiFi-IP-Address-on-a-Grove-L/)|[今すぐ作る！](https://www.instructables.com/id/Arduino-Grove-Greenhouse/)|[今すぐ作る！](https://www.instructables.com/id/Grove-Lucky-Dumpling/)|

|歯磨きインストラクター|LinkIt ONE ページャー|LinkIt ONE IoT デモ|
|------------------------|-------------------|--------------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/project4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/project5.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/project6.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ作る！](https://www.instructables.com/id/Toothbrushing-Instructor/)|[今すぐ作る！](https://www.instructables.com/id/LinkIt-ONE-Pager/)|[今すぐ作る！](https://community.seeedstudio.com/project_detail.html?id=78)|

## はじめに

:::note
    Arduinoを初めて使用する場合は、開始する前に[Arduinoの使い方](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご覧になることを強くお勧めします。
:::

### Arduinoで遊ぶ

**ハードウェア**

- **ステップ 1.** 以下のものを準備してください：

| Seeeduino V4.2 | Base Shield|  Grove-LCD RGB Backlight |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/img/rgb.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-LCD-RGB-Backlight-p-1643.html)|

- **ステップ 2.** Grove-LCD RGB BacklightをGrove-Base Shieldの**I2C**ポートに接続します。
- **ステップ 3.** Grove - Base ShieldをSeeeduinoに差し込みます。
- **ステップ 4.** USBケーブルを使用してSeeeduinoをPCに接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/img/seeeduino_rgb.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/img/seeeduino_rgb.jpg" alt="pir" width={600} height="auto" /></p>

:::note
	Grove Base Shieldがない場合でも、以下のようにGrove-LCD RGB BacklightをSeeeduinoに直接接続することができます。
:::
| Seeeduino       | Grove-LCD RGB Backlight |
|---------------|-------------------------|
| 5V            | 赤                     |
| GND           | 黒                     |
| SDA           | 白                     |
| SCL           | 黄                     |

**ソフトウェア**

- **ステップ 1.** [Grove-LCD RGB Backlightライブラリ](https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip)をGithubからダウンロードします。
- **ステップ 2.** [ライブラリのインストール方法](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library)を参照して、Arduino用のライブラリをインストールします。
- **ステップ 3.** ライブラリには以下の12の例があります。

    - Autoscroll
    - Blink
    - Cursor
    - CustomCharacter
    - Display
    - fade
    - HelloWorld
    - Scroll
    - SerialDisplay
    - setColor
    - setCursor
    - TextDirection

- **ステップ 4.** 以下の画像を参考にして、例「HelloWorld」を選択し、Arduinoにアップロードしてください。コードのアップロード方法がわからない場合は、[コードのアップロード方法](https://wiki.seeedstudio.com/ja/Upload_Code/)を確認してください。

<!-- ![](https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/img/example.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/img/example.jpg" alt="pir" width={600} height="auto" /></p>

以下はHelloWorld.inoのコードです。

```cpp
#include <Wire.h>
#include "rgb_lcd.h"

rgb_lcd lcd;

const int colorR = 255;
const int colorG = 0;
const int colorB = 0;

void setup() 
{
    // LCDの列数と行数を設定
    lcd.begin(16, 2);
    
    lcd.setRGB(colorR, colorG, colorB);
    
    // LCDにメッセージを表示
    lcd.print("hello, world!");

    delay(1000);
}

void loop() 
{
    // カーソルを列0、行1に設定
    // （注意: 行1は2行目を指します。カウントは0から始まります）
    lcd.setCursor(0, 1);
    // リセットからの経過秒数を表示
    lcd.print(millis()/1000);

    delay(100);
}
```

- **ステップ 4.** LCDに「hello world」が表示されます。

### Codecraftで遊ぶ

#### ハードウェア

**ステップ 1.** Groveケーブルを使用して、Grove - LCD RGB BacklightをSeeeduinoのI2Cポートに接続します。Arduinoを使用している場合は、Base Shieldを利用してください。

**ステップ 2.** USBケーブルを使用してSeeeduino/ArduinoをPCに接続します。

#### ソフトウェア

**ステップ 1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メイン手順を作業エリアにドラッグします。

:::note
    Codecraftを初めて使用する場合は、[CodecraftでArduinoを使用するガイド](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/)も参照してください。
:::
**ステップ 2.** 以下の画像のようにブロックをドラッグするか、このページの最後からダウンロードできるcdcファイルを開いてください。

<!-- ![cc](https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/img/cc_LCD_RGB_Backlight.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/img/cc_LCD_RGB_Backlight.png" alt="pir" width={600} height="auto" /></p>

プログラムをArduino/Seeeduinoにアップロードします。

:::success
    コードのアップロードが完了すると、LCDに「hello, world!」とシステムの稼働時間が表示されます。
:::
### Raspberry Piで遊ぶ

**ハードウェア**

- **ステップ 1.** 以下のものを準備してください：

| Raspberry pi | GrovePi_Plus | Grove-LCD RGB Backlight |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/img/rgb.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ購入](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-LCD-RGB-Backlight-p-1643.html)|

- **ステップ 2.** GrovePi_PlusをRaspberryに差し込みます。
- **ステップ 3.** Grove-LCD RGB BacklightをGrovePi_Plusの**I2C**ポートに接続します。
- **ステップ 4.** USBケーブルを使用してRaspberryをPCに接続します。

<!-- ![](https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/img/rpi_rgb.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/img/rpi_rgb.jpg" alt="pir" width={600} height="auto" /></p>

**ソフトウェア**

:::note
     **Raspberry Pi OS >= Bullseye**を使用している場合は、**Python3**でのみ以下のコマンドラインを使用してください。
:::

- **ステップ 1.** [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) に従って開発環境を設定します。
- **ステップ 2.** GitHub リポジトリをクローンします。

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git
```

- **ステップ 3.** 以下のコマンドを実行して、Grove-LCD RGB Backlight を使用して表示を行います。

```python
cd ~/GrovePi/Software/Python/grove_rgb_lcd
python3 grove_rgb_lcd.py
```

以下は `grove_rgb_lcd.py` のコードです。

```python
import time,sys

if sys.platform == 'uwp':
    import winrt_smbus as smbus
    bus = smbus.SMBus(1)
else:
    import smbus
    import RPi.GPIO as GPIO
    rev = GPIO.RPI_REVISION
    if rev == 2 or rev == 3:
        bus = smbus.SMBus(1)
    else:
        bus = smbus.SMBus(0)

# このデバイスには2つのI2Cアドレスがあります
DISPLAY_RGB_ADDR = 0x62
DISPLAY_TEXT_ADDR = 0x3e

# バックライトを (R,G,B) に設定 (各値は0..255)
def setRGB(r,g,b):
    bus.write_byte_data(DISPLAY_RGB_ADDR,0,0)
    bus.write_byte_data(DISPLAY_RGB_ADDR,1,0)
    bus.write_byte_data(DISPLAY_RGB_ADDR,0x08,0xaa)
    bus.write_byte_data(DISPLAY_RGB_ADDR,4,r)
    bus.write_byte_data(DISPLAY_RGB_ADDR,3,g)
    bus.write_byte_data(DISPLAY_RGB_ADDR,2,b)

# ディスプレイにコマンドを送信 (外部使用は不要)
def textCommand(cmd):
    bus.write_byte_data(DISPLAY_TEXT_ADDR,0x80,cmd)

# ディスプレイテキストを設定 (\nで2行目または自動折り返し)
def setText(text):
    textCommand(0x01) # ディスプレイをクリア
    time.sleep(.05)
    textCommand(0x08 | 0x04) # ディスプレイオン、カーソルなし
    textCommand(0x28) # 2行
    time.sleep(.05)
    count = 0
    row = 0
    for c in text:
        if c == '\n' or count == 16:
            count = 0
            row += 1
            if row == 2:
                break
            textCommand(0xc0)
            if c == '\n':
                continue
        count += 1
        bus.write_byte_data(DISPLAY_TEXT_ADDR,0x40,ord(c))

# ディスプレイを消去せずに更新
def setText_norefresh(text):
    textCommand(0x02) # ホームに戻る
    time.sleep(.05)
    textCommand(0x08 | 0x04) # ディスプレイオン、カーソルなし
    textCommand(0x28) # 2行
    time.sleep(.05)
    count = 0
    row = 0
    while len(text) < 32: # 残りの画面をクリア
        text += ' '
    for c in text:
        if c == '\n' or count == 16:
            count = 0
            row += 1
            if row == 2:
                break
            textCommand(0xc0)
            if c == '\n':
                continue
        count += 1
        bus.write_byte_data(DISPLAY_TEXT_ADDR,0x40,ord(c))

# サンプルコード
if __name__=="__main__":
    setText("Hello world\nThis is an LCD test")
    setRGB(0,128,64)
    time.sleep(2)
    for c in range(0,255):
        setText_norefresh("Going to sleep in {}...".format(str(c)))
        setRGB(c,255-c,0)
        time.sleep(0.1)
    setRGB(0,255,0)
    setText("Bye bye, this should wrap onto next line")
```

- **ステップ 4.** Grove-LCD RGB Backlight に「Going to sleep in 1...」のように表示されるのを確認します。

## FAQ

- Q1: 複数の Grove-LCD RGB Backlight を使用するにはどうすればよいですか？  
    - A1: [Arduino Software I2C user guide](https://wiki.seeedstudio.com/ja/Arduino_Software_I2C_user_guide/) を参照してください。

- Q2: ボタンを使用して Grove RGB LCD に異なるページを表示するにはどうすればよいですか？  
    - A2: 以下のコードを参照してください。

```cpp
#include <Wire.h>
#include "rgb_lcd.h"

rgb_lcd lcd;
const int switchPin = 2;
static int hits = 0;
int switchState = 0;
int prevSwitchState = 0;

void setup() {
    lcd.begin(16, 2);
    pinMode(switchPin,INPUT);
    Serial.begin(9600);
    lcd.setCursor(0, 0);
    lcd.print("Page 1");
}

void loop() {  
  switchState = digitalRead(switchPin);
  Serial.print("switchState:");Serial.println(switchState);
  if (switchState != prevSwitchState) {
    if (switchState == HIGH) {
          hits = hits + 1;
          delay(10);
    }
  }
 
  Serial.print("hits:");Serial.println(hits);
  if(hits==1)
  {
    Serial.println("Page 1");
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("Page 1");
  }else
  if(hits==2)
  {
   Serial.println("Page 2");
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("Page 2"); 
  }else

  if(hits==3)
  {
   Serial.println("Page 3");
    lcd.clear();
    lcd.setCursor(0, 0);
    lcd.print("Page 3"); 
  }else
  
  if ( hits>=4)
  {
     hits = 0;
     Serial.println("couter is reset");
     Serial.println("Page 1");
     lcd.clear();
     lcd.setCursor(0, 0);
     lcd.print("Page 1");
  }
delay(500);
}
```

## リソース

- **[ライブラリ]** [ソフトウェアライブラリ](https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip)
- **[ドキュメント]** [このドキュメントのGithubページ](https://github.com/SeeedDocument/Grove_LCD_RGB_Backlight)
- **[Codecraft]** [CDCファイル](https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/res/Grove_LCD_RGB_Backlight_CDC_File.zip)
- **[データシート]** [PCA9633](https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/res/PCA9633.pdf)
- **[データシート]** [JHD1313](https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/res/JHD1313%20FP-RGB-1%201.4.pdf)

## プロジェクト

**Particle + Grove LCD RGB Backlight = リアルタイムクロック**: Grove LCD RGB BacklightをI2Cを使用してParticleに接続し、時間を表示します。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/peacemoon/particle-grove-lcd-rgb-backlight-realtime-clock-42151f/embed' width='350'></iframe>

**LCD RGB Groveモジュール**:

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/yniND_abVos" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/tbdTTC3Jmgk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技術サポート & 製品ディスカッション
弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>