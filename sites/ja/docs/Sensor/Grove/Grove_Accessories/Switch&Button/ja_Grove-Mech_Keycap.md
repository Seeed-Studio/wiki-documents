---
description: Grove-メカニカルキーキャップ
title: Grove-メカニカルキーキャップ
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Mech_Keycap
sku: 111020049
last_update:
  date: 2/22/2023
  author: jianjing Huang
createdAt: '2023-02-28'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/ja/Grove-Mech_Keycap/
---
<!-- ---
name: Grove-Mech keycap
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 111020049
tags:
--- -->

![](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/2.jpg)

Grove-Mech keycap は、LED を内蔵したメカニカルスイッチです。255 色フルカラー RGB LED によって、スイッチの状態を簡単かつ直感的に表示できます。このキーキャップは 2,000 万回の押下動作寿命を持ち、とても信頼性が高いです。

このモジュールは、楽しくて実用的なプロジェクトや製品を作るのに適した、興味深く安定したモジュールであることが分かるでしょう。実際、複数の Grove-Mech keycap を使ってメカニカルキーボードを作ることもできます。

:::tip
負荷なしで、1 分間あたり 300 サイクルの速度で連続して 2,000 万サイクルの動作を行うことができます。
:::

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Mech-Keycap.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" style={{maxWidth: '300px', height: 'auto'}} alt="今すぐ入手" /></a></p>

## 特徴

- プログラム可能な LED
- 信頼性の高いメカニカル構造  
- 非常に長い動作寿命

## 仕様

|項目|値|
|---|---|
|動作電圧|3v-5v|
|絶縁抵抗|100MΩ 以上|
|接触抵抗|200 mΩ 以下|
|無負荷での動作寿命|20,000,000|

## 応用例

- 車載機器
- 映像機器
- 家庭用電気製品
- 情報機器

## ハードウェア

### ピンマップ

![](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/pin_map.jpg)

### 回路図

![](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/schametic.jpg)

K1 はボタンに接続されており、キーがオープンのときは **SIG1** が R2 によってプルダウンされるため、**SIG1** の出力は Low になります。
ボタンが押されると K1 がクローズし、**SIG1** が **VCC** に接続されるので、**SIG1** の出力は High になります。

:::note
このセクションでは回路図の一部のみを示しています。完全なドキュメントについては [Resources](/ja/#リソース) を参照してください。
:::

## 対応プラットフォーム

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
上記で対応として挙げたプラットフォームは、このモジュールのソフトウェアまたは理論上の互換性を示すものです。ほとんどの場合、ソフトウェアライブラリやコード例は Arduino プラットフォーム向けのみ提供しています。存在しうるすべての MCU プラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能なため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## 入門ガイド

:::note
Arduino を扱うのが初めての場合は、始める前に [Getting Started with Arduino](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/) を読むことを強くお勧めします。
:::
### PlatformIO で遊ぶ

**ハードウェア**


<table align="center">
  <tr>
    <th>XIAO nRF52840 Sense</th>
    <th>Seeed Studio Grove Base for XIAO</th>
    <th>Grove-Mech keycap</th>
  </tr>
  <tr>
    <td><div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/xiaonrf52840sence.png" style={{width: '400px', height: 'auto'}}/></div></td>
    <td><div style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width: '400px', height: 'auto'}}/></div></td>
    <td><div style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/thumbnail.jpg" style={{width: '400px', height: 'auto'}}/></div></td>
  </tr>
  <tr>
    <td align="center"><a href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank" rel="noopener noreferrer">今すぐ入手</a></td>
    <td align="center"><a href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank" rel="noopener noreferrer">今すぐ入手</a></td>
    <td align="center"><a href="https://www.seeedstudio.com/Grove-Mech-Keycap-p-3138.html" target="_blank" rel="noopener noreferrer">今すぐ入手</a></td>
  </tr>
</table>


- **Step 1.** Grove-Mech keycap の信号ピンを接続します: `S1` -> `D1`, `S2` -> `D2` （VCC/GND は通常どおり）を Seeed Studio Grove Base for XIAO 上で接続します。
- **Step 2.** Grove Base を XIAO nRF52840 Sense に挿し込みます。
- **Step 3.** XIAO を USB で PC に接続します。

**ソフトウェア** 

- **Step 1.** PlatformIO に `Adafruit_NeoPixel` ライブラリをインストールします。
- **Step 2.** 新しいスケッチ / プロジェクトを作成し、以下のコードを貼り付けます。
- **Step 3.** XIAO に書き込み、シリアルモニタ（ボーレート 115200）を開いて状態を確認します。

**動作内容** 

- Grove-Mech keycap を 1 回押すごとに、内蔵 RGB LED の色がリスト内の色に順番に切り替わります。

コード 
```cpp
/*
  Grove-Mech Keycap demo for XIAO (nRF52840 Sense)
  Wiring: S1 -> D1 (button), S2 -> D2 (pixel data)
*/
#include <Adafruit_NeoPixel.h>

#define BUTTON_PIN 1   // D1
#define PIXEL_PIN  2   // D2
#define PIXEL_COUNT 1

Adafruit_NeoPixel strip(PIXEL_COUNT, PIXEL_PIN, NEO_GRB + NEO_KHZ800);

uint8_t colorPos = 0;
bool lastState = LOW;
unsigned long lastDebounce = 0;
const unsigned long debounceDelay = 50;

void setup() {
  pinMode(BUTTON_PIN, INPUT_PULLUP);
  strip.begin();
  strip.show();
  Serial.begin(115200);
  Serial.println("Grove-Mech Keycap: ready");
}

uint32_t Wheel(byte WheelPos) {
  WheelPos = 255 - WheelPos;
  if(WheelPos < 85) {
    return strip.Color(255 - WheelPos * 3, 0, WheelPos * 3);
  }
  if(WheelPos < 170) {
    WheelPos -= 85;
    return strip.Color(0, WheelPos * 3, 255 - WheelPos * 3);
  }
  WheelPos -= 170;
  return strip.Color(WheelPos * 3, 255 - WheelPos * 3, 0);
}

void cycleColor() {
  colorPos += 32; // step size
  strip.setPixelColor(0, Wheel(colorPos));
  strip.show();
  Serial.print("Color pos: "); Serial.println(colorPos);
}

void loop() {
  bool reading = digitalRead(BUTTON_PIN) == LOW ? true : false; // pressed = LOW for INPUT_PULLUP

  if (reading != lastState) {
    lastDebounce = millis();
  }

  if ((millis() - lastDebounce) > debounceDelay) {
    // stable state
    static bool pressed = false;
    if (reading && !pressed) {
      // button pressed (edge)
      cycleColor();
      pressed = true;
    } else if (!reading) {
      pressed = false;
    }
  }

  lastState = reading;
}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/xiao_capkey.gif" style={{width:400, height:'auto'}}/></div>

:::note
 配線やピンマッピングが異なる場合は、`BUTTON_PIN` と `PIXEL_PIN` をそれに応じて変更してください。
:::



### Arduino で遊ぶ

#### ハードウェア

**必要な部材**

| Seeeduino V4.2 | Base Shield| Grove-Mech keycap |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">今すぐ入手</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">今すぐ入手</a>|<a href="https://www.seeedstudio.com/Grove-Mech-Keycap-p-3138.html" target="_blank">今すぐ入手</a>|

:::note
**1** USB ケーブルは優しく挿し込んでください。そうしないとポートを破損するおそれがあります。内部に 4 本の線が入っている USB ケーブルを使用してください。2 本線のケーブルではデータ転送ができません。お持ちのケーブルが確実でない場合は、[こちら](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) から購入できます。

**2** 各 Grove モジュールには、購入時に Grove ケーブルが 1 本付属しています。Grove ケーブルを紛失した場合は、[こちら](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) から購入できます。
:::

- **Step 1.** Grove-Mech keycap を Grove-Base Shield のポート **D2** に接続します。

- **Step 2.** Grove - Base Shield を Seeeduino に挿し込みます。

- **Step 3.** Seeeduino を USB ケーブルで PC に接続します。

![](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/light1400-1050%C2%B7.jpg)

:::note
Grove Base Shield がない場合でも、以下のように Grove-Mech keycap を Seeeduino に直接接続することができます。
:::

| Seeeduino     | Grove-Mech keycap       |
|---------------|-------------------------|
| 5V            | Red                     |
| GND           | Black                   |
| D3         | White                   |
| D2            | Yellow                  |

#### ソフトウェア

- **Step 1.** Github から [Adafruit_NeoPixel-master](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/Adafruit_NeoPixel-master.zip) ライブラリをダウンロードします。

- **Step 2.** Arduino 用のライブラリをインストールするには、[How to install library](https://wiki.seeedstudio.com/ja/How_to_install_Arduino_Library) を参照してください。

- **Step 3.** Arduino IDE を開き、新しいファイルを作成してから、次のコードをその新しいファイルにコピーします。

```cpp
/**
 * This is an exmaple of the Grove - Mech Keycap.
 * Every press of the key will change the color the SK6805 RGB LED. The SK6805 is a NeoPixel compatible chip.
 * 
 * Credit:
 * Adafruit_NeoPixel - https://github.com/adafruit/Adafruit_NeoPixel/blob/master/COPYING
 */

#include <Adafruit_NeoPixel.h>

#define BUTTON_PIN   2    // Digital IO pin connected to the button.  This will be
                          // driven with a pull-up resistor so the switch should
                          // pull the pin to ground momentarily.  On a high -> low
                          // transition the button press logic will execute.

#define PIXEL_PIN    3    // Digital IO pin connected to the NeoPixels.

#define PIXEL_COUNT 60

// Parameter 1 = number of pixels in strip,  neopixel stick has 8
// Parameter 2 = pin number (most are valid)
// Parameter 3 = pixel type flags, add together as needed:
//   NEO_RGB     Pixels are wired for RGB bitstream
//   NEO_GRB     Pixels are wired for GRB bitstream, correct for neopixel stick
//   NEO_KHZ400  400 KHz bitstream (e.g. FLORA pixels)
//   NEO_KHZ800  800 KHz bitstream (e.g. High Density LED strip), correct for neopixel stick
Adafruit_NeoPixel strip = Adafruit_NeoPixel(PIXEL_COUNT, PIXEL_PIN, NEO_GRB + NEO_KHZ800);

bool oldState = LOW;
uint8_t color_pos = 0;
int i=0;
int longpress=2000;
long timecheck;

void setup() {
  pinMode(BUTTON_PIN, INPUT_PULLUP);
  strip.begin();
  strip.clear();
  strip.show(); // Initialize all pixels to 'off'
  Serial.begin(9600); 
}

void loop()
{

  // Get current button state.
  bool newState = digitalRead(BUTTON_PIN);

  // Check if state changed from low to high (button press).
  if (newState == HIGH && oldState == LOW) {
      timecheck = millis(); 
    // Short delay to debounce button.
    delay(20);
    // Check if button is still low after debounce.
    newState = digitalRead(BUTTON_PIN);
    if (newState == HIGH){
      color_pos+=8;
      strip.setPixelColor(0, Wheel(color_pos));
      strip.show();
    }
  }

 if( millis()-timecheck > 300)
 {
   if (digitalRead(BUTTON_PIN)==HIGH)
   {
 if(millis()-timecheck > longpress)
 {
  while(digitalRead(BUTTON_PIN) == HIGH)
  {
  strip.setPixelColor(0,Wheel(color_pos));
  strip.show();
  delay(300);

  strip.setPixelColor(0,0,0,0);
  strip.show();
  delay(300);
  bool newState = digitalRead(BUTTON_PIN);
  }
  strip.setPixelColor(0,0,0,0);
  strip.show();
   timecheck = millis(); 
 }
  }
   }

  // Set the last button state to the old state.
  oldState = newState;
}

// Input a value 0 to 255 to get a color value.
// The colours are a transition r - g - b - back to r.
uint32_t Wheel(byte WheelPos) {
  WheelPos = 255 - WheelPos;
  if(WheelPos < 85) {
    return strip.Color(255 - WheelPos * 3, 0, WheelPos * 3);
  }
  if(WheelPos < 170) {
    WheelPos -= 85;
    return strip.Color(0, WheelPos * 3, 255 - WheelPos * 3);
  }
  WheelPos -= 170;
  return strip.Color(WheelPos * 3, 255 - WheelPos * 3, 0);
}

```

- **Step 4.** デモをアップロードします。コードのアップロード方法がわからない場合は、[How to upload code](https://wiki.seeedstudio.com/ja/Upload_Code/) を参照してください。

- **Step 5.** Grove-Mech Keycap を押すたびに、LED の色が変化します。ボタンを約 2 秒間押し続けると、ブリージングライト効果が表示されます。

### Raspberry Pi で遊ぶ

#### ハードウェア

- **Step 1**. このプロジェクトで使用するもの：

| Raspberry pi | Grove Base Hat for RasPi| Grove - Mech Keycap|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/thumbnail.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Mech-Keycap-p-3138.html)|

- **Step 2**. Grove Base Hat を Raspberry に接続します。
- **Step 3**. Grove - Mech Keycap を Base Hat の PWM ポート（ポート 12）に接続します。

:::note
pin は PWM 機能用に、以下の値のいずれかを pin 列に指定し、対応するスロットにデバイスを接続してください。
:::

|Pin|Slot|
|---|---|
|18|D18|
|12|PWM|

- **Step 4**. Raspberry Pi を USB ケーブルで PC に接続します。

![](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/Mech_Hat.jpg)

#### ソフトウェア

- **Step 1**. 開発環境を構成するには、[Setting Software](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation) に従ってください。
- **Step 2**. grove.py ライブラリをクローンしてソースファイルをダウンロードします。

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Step 3**. 以下のコマンドを実行してコードを動かします。

```
cd grove.py/grove
sudo python grove_mech_keycap.py 12

```

:::caution
Unix には「セキュリティモデル」があります。通常のユーザーとして、いろいろな操作はできますが、同じコンピュータ上の他人のファイルにアクセスできてはいけません。また、ユーザーとしてコンピュータの動作を停止させることもできてはいけません。ところが "/dev/mem" を使うと、GPIO を変更するだけではなく、はるかに多くの「いたずら」が可能になります。そのため /dev/mem は一般ユーザーから保護されていなければなりません。したがってこのコードを実行するには、コマンドラインで **sudo python grove_mech_keycap.py** と入力する必要があります。
:::

以下は grove_mech_keycap.py のコードです。

```python

import time
from grove.button import Button
from grove.factory import Factory

class GroveKeycap(object):
    def __init__(self, pin):
        # High = pressed
        self.__btn = Factory.getButton("GPIO-HIGH", pin)
        # single WS2812 LED
        self.__led = Factory.getOneLed("WS2812-PWM", pin + 1)
        self.__on_event = None
        self.__btn.on_event(self, GroveKeycap.__handle_event)

    @property
    def on_event(self):
        return self.__on_event

    @on_event.setter
    def on_event(self, callback):
        if not callable(callback):
            return
        self.__on_event = callback

    def __handle_event(self, evt):
        # print("event index:{} event:{} pressed:{}".format(evt['index'], evt['code'], evt['presesed']))
        if callable(self.__on_event):
            self.__on_event(evt['index'], evt['code'], evt['time'])
            return

        self.__led.brightness = self.__led.MAX_BRIGHT
        event = evt['code']
        if event & Button.EV_SINGLE_CLICK:
            self.__led.light(True)
            print("turn on  LED")
        elif event & Button.EV_DOUBLE_CLICK:
            self.__led.blink()
            print("blink    LED")
        elif event & Button.EV_LONG_PRESS:
            self.__led.light(False)
            print("turn off LED")


Grove = GroveKeycap

def main():
    from grove.helper import SlotHelper
    sh = SlotHelper(SlotHelper.PWM)
    pin = sh.argv2pin()

    ledbtn = GroveKeycap(pin)

    # remove ''' pairs below to begin your experiment
    '''
    # define a customized event handle your self
    def cust_on_event(index, event, tm):
        print("event with code {}, time {}".format(event, tm))

    ledbtn.on_event = cust_on_event
    '''
    while True:
        time.sleep(1)


if __name__ == '__main__':
    main()


```

:::tip
すべてがうまくいけば、次の結果が確認できます。キ―キャップをシングルクリックすると「turn on LED」が表示され、ダブルクリックすると「blink LED」が表示されます。長押しすると「turn off LED」が表示されます。
:::

```python

pi@raspberrypi:~/grove.py/grove $ sudo python grove_mech_keycap.py 12
Hat Name = 'Grove Base Hat RPi'
turn on  LED
turn on  LED
blink    LED
turn on  LED
turn off LED
^CTraceback (most recent call last):
  File "grove_mech_keycap.py", line 98, in <module>
    main()
  File "grove_mech_keycap.py", line 94, in main
    time.sleep(1)
KeyboardInterrupt


```

++ctrl+c++ を押すだけで、このプログラムを終了できます。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/Grove-Mech_Keycap_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## リソース

- **[Zip]** [Grove-Mech Keycap eagle ファイル](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/Grove-Mech_Keycap_eagle.zip)
- **[Zip]** [Adafruit_NeoPixel-master](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/Adafruit_NeoPixel-master.zip)
- **[PDF]** [スイッチの製品概要](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/DIP_Mech_Key.pdf)

## プロジェクト

これはこの製品の紹介ビデオで、簡単なデモを含んでいます。ぜひお試しください。

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/wz1GzW2-VW4?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
