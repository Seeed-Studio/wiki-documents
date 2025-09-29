---
title: Grove - Chainable RGB LED
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/Grove-Chainable_RGB_LED/
slug: /ja/Grove-Chainable_RGB_LED
last_update:
  date: 05/15/2025
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/img/Grove-Chainable_RGB_LED_V2.0.jpg)

**Grove - Chainable RGB LED**は、フルカラーLEDドライバーであるP9813チップをベースにしています。このモジュールは、3つの定電流ドライバーと256段階のグレースケールの変調出力を提供します。MCUとの通信は2線式伝送（データとクロック）を使用します。この2線式伝送を使用して、追加の**Grove - Chainable RGB LED**モジュールをカスケード接続することができます。内蔵のクロック再生機能により、伝送距離が向上します。このGroveモジュールは、カラフルなLEDを使用したプロジェクトに適しています。

バージョン
---

| リビジョン | 説明                                              | リリース日      |購入方法|
|----------|-----------------------------------------------------------|--------------|--------------|
| v1    | 初回公開リリース（ベータ版）                             | 2011年5月5日  |[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Grove-Chainable-RGB-LED-p-850.html)|
| v2    | P9813S16をP9813S14に置き換え、Groveコネクタを垂直から水平に変更 | 2016年4月19日  |[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Grove-%E2%80%93-Chainable-RGB-Led-V2.0-p-2903.html)|

仕様
-------------

- 動作電圧: 5V
- 動作電流: 20mA
- 通信プロトコル: シリアル

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)を参照してください。
:::

対応プラットフォーム
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    上記で示されている対応プラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することはできません。そのため、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

使用方法
-----

### Arduinoで遊ぶ

Grove - Chainable RGB LEDを手に入れたら、「どうやって点灯させるのか？」と思うかもしれません。ここでは、RGBのすべての色が均一に循環するデモを紹介します。

このデモを完成させるには、1つまたは複数のGrove - Chainable RGB LEDを使用できます。1つのGrove - Chainable RGB LEDのINインターフェースをGrove - Base ShieldのD7/D8に接続し、そのOUTインターフェースを別のGrove - Chainable RGB LEDのINインターフェースに接続する必要があります。この方法でさらにLEDを連結できます。

- [Chainable LED Library](https://github.com/pjpmarques/ChainableLED)をダウンロードしてArduinoライブラリにインストールします。wikiページには[Arduinoライブラリのインストール方法](/ja/How_to_install_Arduino_Library)に関するコースがあります。
- パス: File->Examples->ChainableLED_masterから例「CycleThroughColors」を開き、Seeeduinoにアップロードします。

```

/* 
 * ChainableRGBライブラリを使用してGrove RGBを制御する例。
 * このコードはHSBカラースペースを使用して、すべての色を均一に循環させます。
 */


#include <ChainableLED.h>

#define NUM_LEDS  5

ChainableLED leds(7, 8, NUM_LEDS);

void setup()
{
  leds.init();
}

float hue = 0.0;
boolean up = true;

void loop()
{
  for (byte i=0; i<NUM_LEDS; i++)
    leds.setColorHSL(i, hue, 1.0, 0.5);
    
  delay(50);
    
  if (up)
    hue+= 0.025;
  else
    hue-= 0.025;
    
  if (hue>=1.0 && up)
    up = false;
  else if (hue<=0.0 && !up)
    up = true;
}

```

このシーンを観察できます: 5つのLEDの色が一貫してグラデーションします。

**拡張アプリケーション:**
[Chainable LED Library](https://github.com/pjpmarques/ChainableLED)を基に、Grove - temperatureで測定された温度に応じてRGBカラーが変化するデモを設計しました。温度が25から32の間で、RGBカラーは緑から赤に変化します。以下にテストコードを示します。興味があれば試してみてください。

```
    // 温度 -> rgbLEDのデモ
    // 温度が25 - 32の場合、rgbLedは緑 -> 赤に変化
    // Grove-temperatureをA0に接続
    // LEDをD7,D8に接続

    #include <Streaming.h>
    #include <ChainableLED.h>

    #define TEMPUP 32
    #define TEMPDOWN 25

    ChainableLED leds(7, 8, 1); // pin7とpin8に接続、1つのLED

    int getAnalog() // A0から値を取得
    {
        int sum = 0;
        for(int i=0; i<32; i++)
        {
            sum += analogRead(A0);
        }

        return sum>>5;
    }

    float getTemp() // 温度を取得
    {
        float temperature = 0.0;
        float resistance = 0.0;
        int B = 3975; // サーミスタのB値

        int a = getAnalog();

        resistance = (float)(1023-a)*10000/a; // センサーの抵抗値を取得
        temperature = 1/(log(resistance/10000)/B+1/298.15)-273.15; // データシートを基に温度に変換
        return temperature;
    }

    void ledLight(int dta) // LEDを点灯
    {

        dta = dta/4; // 0 - 255

        int colorR = dta;
        int colorG = 255-dta;
        int colorB = 0;

        leds.setColorRGB(0, colorR, colorG, colorB);
    }

    void setup()
    {
        Serial.begin(38400);
        cout << "hello world !" << endl;
    }

    void loop()
    {
        float temp = getTemp();
        int nTemp = temp*100;

        nTemp = nTemp > TEMPUP*100 ? TEMPUP*100 : (nTemp < TEMPDOWN*100 ? TEMPDOWN*100 : nTemp);
        nTemp = map(nTemp, TEMPDOWN*100, TEMPUP*100, 0, 1023);
        ledLight(nTemp);
        delay(100);
    }
```

### Codecraftで遊ぶ

#### ハードウェア

**ステップ 1.** Grove - Chainable RGB LEDをBase ShieldのポートD7に接続します。

**ステップ 2.** Base ShieldをSeeeduino/Arduinoに接続します。

**ステップ 3.** USBケーブルを使用してSeeeduino/ArduinoをPCに接続します。

#### ソフトウェア

**ステップ 1.** [Codecraft](https://ide.chmakered.com/)を開き、Arduinoサポートを追加し、メインプロシージャを作業エリアにドラッグします。

:::note
    Codecraftを初めて使用する場合は、[CodecraftをArduinoで使用するためのガイド](https://wiki.seeedstudio.com/ja/Guide_for_Codecraft_using_Arduino/)も参照してください。
:::

**ステップ 2.** 下の画像のようにブロックをドラッグするか、このページの最後からダウンロードできるcdcファイルを開きます。

![](https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/img/Chainable_RGB_LED.png)

プログラムをArduino/Seeeduinoにアップロードします。

:::tip
    コードのアップロードが完了すると、LEDがフェードインおよびフェードアウトするのが見えます。
:::

### Raspberry Piで遊ぶ

:::note
     **Raspberry Pi OS >= Bullseye**を使用している場合は、**Python3のみ**でこのコマンドラインを使用する必要があります。
:::
1. Raspberry PiとGrovePiまたはGrovePi+を用意してください。

2. 開発環境の設定を完了している必要があります。設定がまだの場合は[こちら](/ja/GrovePi_Plus)を参照してください。

3. 接続

- センサーをGrovePiのソケットD7にGroveケーブルを使用して接続します。

4. デモディレクトリに移動します：

```
    cd yourpath/GrovePi/Software/Python/
```

- コードを確認するには

```
     nano grove_chainable_rgb_led.py   # "Ctrl+x"で終了 #
```

```
    import time
    import grovepi

    # Chainable RGB LEDチェーンの最初のLEDをデジタルポートD7に接続
    # 入力: CI,DI,VCC,GND
    # 出力: CO,DO,VCC,GND
    pin = 7

    # GrovePiに接続された最初のLEDと、最後に接続されていないLEDを含む10個のLEDを直列に接続
    # 最初のLEDの入力ソケットがGrovePiに接続され、出力ソケットが2番目のLEDの入力に接続される
    numleds = 1  

    grovepi.pinMode(pin,"OUTPUT")
    time.sleep(1)

    # Chainable RGB LEDメソッド
    # grovepi.storeColor(red, green, blue)
    # grovepi.chainableRgbLed_init(pin, numLeds)
    # grovepi.chainableRgbLed_test(pin, numLeds, testColor)
    # grovepi.chainableRgbLed_pattern(pin, pattern, whichLed)
    # grovepi.chainableRgbLed_modulo(pin, offset, divisor)
    # grovepi.chainableRgbLed_setLevel(pin, level, reverse)

    # grovepi.chainableRgbLed_test()で使用されるテストカラー
    testColorBlack = 0   # 0b000 #000000
    testColorBlue = 1    # 0b001 #0000FF
    testColorGreen = 2   # 0b010 #00FF00
    testColorCyan = 3    # 0b011 #00FFFF
    testColorRed = 4     # 0b100 #FF0000
    testColorMagenta = 5 # 0b101 #FF00FF
    testColorYellow = 6  # 0b110 #FFFF00
    testColorWhite = 7   # 0b111 #FFFFFF

    # grovepi.chainableRgbLed_pattern()で使用されるパターン
    thisLedOnly = 0
    allLedsExceptThis = 1
    thisLedAndInwards = 2
    thisLedAndOutwards = 3

    try:

        print "テスト 1) 初期化"

        # LEDチェーンを初期化
        grovepi.chainableRgbLed_init(pin, numleds)
        time.sleep(.5)

        # 色を緑に変更
        grovepi.storeColor(0,255,0)
        time.sleep(.5)

        # LED 1を緑に設定
        grovepi.chainableRgbLed_pattern(pin, thisLedOnly, 0)
        time.sleep(.5)

        # 色を赤に変更
        grovepi.storeColor(255,0,0)
        time.sleep(.5)

        # LED 10を赤に設定
        grovepi.chainableRgbLed_pattern(pin, thisLedOnly, 9)
        time.sleep(.5)

        # 結果を確認するために一時停止
        time.sleep(2)

        # リセット（すべてオフ）
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "テスト 2a) パターンテスト - 黒"

        # パターン0 - 黒（すべてオフ）
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(1)


        print "テスト 2b) パターンテスト - 青"

        # パターン1 - 青
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlue)
        time.sleep(1)


        print "テスト 2c) パターンテスト - 緑"

        # パターン2 - 緑
        grovepi.chainableRgbLed_test(pin, numleds, testColorGreen)
        time.sleep(1)


        print "テスト 2d) パターンテスト - シアン"

        # パターン3 - シアン
        grovepi.chainableRgbLed_test(pin, numleds, testColorCyan)
        time.sleep(1)


        print "テスト 2e) パターンテスト - 赤"

        # パターン4 - 赤
        grovepi.chainableRgbLed_test(pin, numleds, testColorRed)
        time.sleep(1)


        print "テスト 2f) パターンテスト - マゼンタ"

        # パターン5 - マゼンタ
        grovepi.chainableRgbLed_test(pin, numleds, testColorMagenta)
        time.sleep(1)


        print "テスト 2g) パターンテスト - 黄"

        # パターン6 - 黄
        grovepi.chainableRgbLed_test(pin, numleds, testColorYellow)
        time.sleep(1)


        print "テスト 2h) パターンテスト - 白"

        # パターン7 - 白
        grovepi.chainableRgbLed_test(pin, numleds, testColorWhite)
        time.sleep(1)


        # 結果を確認するために一時停止
        time.sleep(2)

        # リセット（すべてオフ）
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "テスト 3a) パターンを使用して設定 - このLEDのみ"

        # 色を赤に変更
        grovepi.storeColor(255,0,0)
        time.sleep(.5)

        # LED 3を赤に設定
        grovepi.chainableRgbLed_pattern(pin, thisLedOnly, 2)
        time.sleep(.5)

        # 結果を確認するために一時停止
        time.sleep(2)

        # リセット（すべてオフ）
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "テスト 3b) パターンを使用して設定 - このLED以外すべて"

        # 色を青に変更
        grovepi.storeColor(0,0,255)
        time.sleep(.5)

        # LED 3以外のすべてを青に設定
        grovepi.chainableRgbLed_pattern(pin, allLedsExceptThis, 3)
        time.sleep(.5)

        # 結果を確認するために一時停止
        time.sleep(2)

        # リセット（すべてオフ）
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "テスト 3c) パターンを使用して設定 - このLEDと内側"

        # 色を緑に変更
        grovepi.storeColor(0,255,0)
        time.sleep(.5)

        # LED 1-3を緑に設定
        grovepi.chainableRgbLed_pattern(pin, thisLedAndInwards, 2)
        time.sleep(.5)

        # 結果を確認するために一時停止
        time.sleep(2)

        # リセット（すべてオフ）
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "テスト 3d) パターンを使用して設定 - このLEDと外側"

        # 色を緑に変更
        grovepi.storeColor(0,255,0)
        time.sleep(.5)

        # LED 7-10を緑に設定
        grovepi.chainableRgbLed_pattern(pin, thisLedAndOutwards, 6)
        time.sleep(.5)

        # 結果を確認するために一時停止
        time.sleep(2)

        # リセット（すべてオフ）
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "テスト 4a) モジュロを使用して設定 - すべてのLED"

        # 色を黒（完全オフ）に変更
        grovepi.storeColor(0,0,0)
        time.sleep(.5)

        # すべてのLEDを黒に設定
        # オフセット0は最初のLEDから開始
        # 除数1はすべてのLED
        grovepi.chainableRgbLed_modulo(pin, 0, 1)
        time.sleep(.5)

        # 色を白（完全オン）に変更
        grovepi.storeColor(255,255,255)
        time.sleep(.5)

        # すべてのLEDを白に設定
        grovepi.chainableRgbLed_modulo(pin, 0, 1)
        time.sleep(.5)

        # 結果を確認するために一時停止
        time.sleep(2)

        # リセット（すべてオフ）
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "テスト 4b) モジュロを使用して設定 - 2つごと"

        # 色を赤に変更
        grovepi.storeColor(255,0,0)
        time.sleep(.5)

        # 2つごとに赤を設定
        grovepi.chainableRgbLed_modulo(pin, 0, 2)
        time.sleep(.5)

        # 結果を確認するために一時停止
        time.sleep(2)


        print "テスト 4c) モジュロを使用して設定 - 2つごと、オフセット1"

        # 色を緑に変更
        grovepi.storeColor(0,255,0)
        time.sleep(.5)

        # 2つごとに緑を設定、オフセット1
        grovepi.chainableRgbLed_modulo(pin, 1, 2)
        time.sleep(.5)

        # 結果を確認するために一時停止
        time.sleep(2)

        # リセット（すべてオフ）
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "テスト 4d) モジュロを使用して設定 - 3つごと、オフセット0"

        # 色を赤に変更
        grovepi.storeColor(255,0,0)
        time.sleep(.5)

        # 3つごとに赤を設定
        grovepi.chainableRgbLed_modulo(pin, 0, 3)
        time.sleep(.5)

        # 色を緑に変更
        grovepi.storeColor(0,255,0)
        time.sleep(.5)

        # 3つごとに緑を設定、オフセット1
        grovepi.chainableRgbLed_modulo(pin, 1, 3)
        time.sleep(.5)

        # 色を青に変更
        grovepi.storeColor(0,0,255)
        time.sleep(.5)

        # 3つごとに青を設定、オフセット2
        grovepi.chainableRgbLed_modulo(pin, 2, 3)
        time.sleep(.5)

        # 結果を確認するために一時停止
        time.sleep(2)

        # リセット（すべてオフ）
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "テスト 4e) モジュロを使用して設定 - 3つごと、オフセット1"

        # 色を黄に変更
        grovepi.storeColor(255,255,0)
        time.sleep(.5)

        # 4つごとに黄を設定
        grovepi.chainableRgbLed_modulo(pin, 1, 3)
        time.sleep(.5)

        # 結果を確認するために一時停止
        time.sleep(2)


        print "テスト 4f) モジュロを使用して設定 - 3つごと、オフセット2"

        # 色をマゼンタに変更
        grovepi.storeColor(255,0,255)
        time.sleep(.5)

        # 4つごとにマゼンタを設定
        grovepi.chainableRgbLed_modulo(pin, 2, 3)
        time.sleep(.5)

        # 結果を確認するために一時停止
        time.sleep(2)

        # リセット（すべてオフ）
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "テスト 5a) レベル6を設定"

        # 色を緑に変更
        grovepi.storeColor(0,255,0)
        time.sleep(.5)

        # LED 1-6を緑に設定
        grovepi.write_i2c_block(0x04,[95,pin,6,0])
        time.sleep(.5)

        # 結果を確認するために一時停止
        time.sleep(2)

        # リセット（すべてオフ）
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        time.sleep(.5)


        print "テスト 5b) レベル7を設定 - 逆方向"

        # 色を赤に変更
        grovepi.storeColor(255,0,0)
        time.sleep(.5)

        # LED 4-10を赤に設定
        grovepi.write_i2c_block(0x04,[95,pin,7,1])
        time.sleep(.5)


    except KeyboardInterrupt:
        # リセット（すべてオフ）
        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)
        break
    except IOError:
        print "エラー"
```

- 注意すべき点があります：

```
    pin = 7         # 出力ピンを設定
    numleds = 1     # 接続するLEDの数
```

- また、`grovepi.py`で使用できるすべてのメソッドは以下の通りです：

```
    storeColor(red, green, blue)
    chainableRgbLed_init(pin, numLeds)
    chainableRgbLed_test(pin, numLeds, testColor)
    chainableRgbLed_pattern(pin, pattern, whichLed)
    chainableRgbLed_modulo(pin, offset, divisor)
    chainableRgbLed_setLevel(pin, level, reverse)
```

5. デモを実行します。

```
    sudo python3 grove_chainable_rgb_led.py
```

6. このデモは、GrovePiが最新のファームウェアを持っていない場合、動作しない可能性があります。ファームウェアを更新してください。

```
    cd yourpath/GrovePi/Firmware
    sudo ./firmware_update.sh
```

### Beaglebone Greenを使用する場合

BBG上でプログラムを編集するには、Cloud9 IDEを使用できます。

Cloud9 IDEに慣れるための簡単な練習として、BeagleBoneの4つのユーザープログラム可能なLEDの1つを点滅させるシンプルなアプリケーションを作成するのが良いでしょう。

Cloud9 IDEを初めて使用する場合は、こちらの[**リンク**](/ja/BeagleBone_Green)を参照してください。

**ステップ1:** Grove - UARTソケットをGrove - GPIOソケットとして設定します。この[**リンク**](https://www.seeedstudio.com/recipe/362-how-to-use-the-grove-uart-port-as-a-gpio-on-bbg.html)に従ってください。

**ステップ2:** 右上の「+」をクリックして新しいファイルを作成します。

![](https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/img/C9-create-tab.png)

![](https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/img/C9_newfile.jpg)

**ステップ3:** 以下のコードを新しいタブにコピー＆ペーストします。

```
import time
import Adafruit_BBIO.GPIO as GPIO
 
CLK_PIN = "P9_22"
DATA_PIN = "P9_21"
NUMBER_OF_LEDS = 1
 
class ChainableLED():
    def __init__(self, clk_pin, data_pin, number_of_leds):
        self.__clk_pin = clk_pin
        self.__data_pin = data_pin
        self.__number_of_leds = number_of_leds
 
        GPIO.setup(self.__clk_pin, GPIO.OUT)
        GPIO.setup(self.__data_pin, GPIO.OUT)
 
        for i in range(self.__number_of_leds):
            self.setColorRGB(i, 0, 0, 0)
 
    def clk(self):
        GPIO.output(self.__clk_pin, GPIO.LOW)
        time.sleep(0.00002)
        GPIO.output(self.__clk_pin, GPIO.HIGH)
        time.sleep(0.00002)
 
    def sendByte(self, b):
        "1ビットずつ送信し、MSBから開始します"
        for i in range(8):
            # MSBが1の場合は1を書き込みクロックを送信、それ以外は0を書き込みクロックを送信
            if (b & 0x80) != 0:
                GPIO.output(self.__data_pin, GPIO.HIGH)
            else:
                GPIO.output(self.__data_pin, GPIO.LOW)
            self.clk()
 
            # 次のビットに進む
            b = b << 1
 
    def sendColor(self, red, green, blue):
        "バイトを送信する際のフォーマットは '1 1 /B7 /B6 /G7 /G6 /R7 /R6' です"
        # prefix = B11000000
        prefix = 0xC0
        if (blue & 0x80) == 0:     
            # prefix |= B00100000
            prefix |= 0x20
        if (blue & 0x40) == 0:     
            # prefix |= B00010000
            prefix |= 0x10
        if (green & 0x80) == 0:    
            # prefix |= B00001000
            prefix |= 0x08
        if (green & 0x40) == 0:    
            # prefix |= B00000100
            prefix |= 0x04
        if (red & 0x80) == 0:      
            # prefix |= B00000010
            prefix |= 0x02
        if (red & 0x40) == 0:      
            # prefix |= B00000001
            prefix |= 0x01
        self.sendByte(prefix)
 
        # 次に3つの色を送信する必要があります
        self.sendByte(blue)
        self.sendByte(green)
        self.sendByte(red)
 
    def setColorRGB(self, led, red, green, blue):
        # データフレームのプレフィックスを送信 (32x '0')
        self.sendByte(0x00)
        self.sendByte(0x00)
        self.sendByte(0x00)
        self.sendByte(0x00)
 
        # 各LEDの色データを送信
        for i in range(self.__number_of_leds):
            '''
            if i == led:
                _led_state[i*3 + _CL_RED] = red;
                _led_state[i*3 + _CL_GREEN] = green;
                _led_state[i*3 + _CL_BLUE] = blue;
            sendColor(_led_state[i*3 + _CL_RED],
                      _led_state[i*3 + _CL_GREEN],
                      _led_state[i*3 + _CL_BLUE]);
            '''
            self.sendColor(red, green, blue)
 
        # データフレームを終了 (32x "0")
        self.sendByte(0x00)
        self.sendByte(0x00)
        self.sendByte(0x00)
        self.sendByte(0x00)
 
 
# 注意: P9_22(UART2_RXD)とP9_21(UART2_TXD)をGPIOとして使用します。
# Grove - Chainable RGB LEDをBeaglebone GreenのUART Groveポートに接続します。
if __name__ == "__main__":
    rgb_led = ChainableLED(CLK_PIN, DATA_PIN, NUMBER_OF_LEDS)
 
    while True:
        # 最初のパラメータ: NUMBER_OF_LEDS - 1; 他のパラメータ: RGB値
        rgb_led.setColorRGB(0, 255, 0, 0)
        time.sleep(2)
        rgb_led.setColorRGB(0, 0, 255, 0)
        time.sleep(2)
        rgb_led.setColorRGB(0, 0, 0, 255)
        time.sleep(2)
        rgb_led.setColorRGB(0, 0, 255, 255)
        time.sleep(2)
        rgb_led.setColorRGB(0, 255, 0, 255)
        time.sleep(2)
        rgb_led.setColorRGB(0, 255, 255, 0)
        time.sleep(2)
        rgb_led.setColorRGB(0, 255, 255, 255)
        time.sleep(2)
```

**ステップ4:** ディスクアイコンをクリックしてファイルを保存し、`.py`拡張子で名前を付けます。

**ステップ5:** Grove Chainable RGB LEDをBBGのGrove UARTソケットに接続します。

**ステップ6:** コードを実行します。RGB LEDが2秒ごとに色を変えるのが確認できます。

# チェーン可能なRGB LED Eagleファイル V1

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/res/Chainable_RGB_LED_eagle_file%20V1%20(2).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# チェーン可能なRGB LED Eagleファイル V2

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/res/Grove%20-%20Chainable%20RGB%20LED%20v2.0%20(1).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# リソース

---------

- **[ライブラリ]**[P9813用チェーン可能なRGB LEDライブラリ](https://github.com/pjpmarques/ChainableLED)
- **[ライブラリ]**[チェーン可能なRGB LEDライブラリのGithubリポジトリ（新しいバージョン）](https://github.com/Seeed-Studio/Grove_Chainable_RGB_LED)
- **[ライブラリ]** [CodeCraftコード](https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/res/Chainable%20RGB%20LED.zip)
- **[Eagle]**[チェーン可能なRGB LED Eagleファイル V1](https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/res/Chainable_RGB_LED_eagle_file%20V1.zip)
- **[Eagle]**[チェーン可能なRGB LED Eagleファイル V2](https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/res/Grove%20-%20Chainable%20RGB%20LED%20v2.0.zip)
- **[データシート]**[P9813データシート](https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/res/P9813_datasheet.pdf)

<!-- このMarkdownファイルは https://www.seeedstudio.com/wiki/Grove_-_Chainable_RGB_LED から作成されました -->

## プロジェクト

**Grove - チェーン可能なLEDの紹介**: このプロジェクトでは、チェーン可能なLEDをGroveに接続する方法を紹介します。
<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ingo-lohs/grove-introduction-to-chainable-led-d668b7/embed' width='350'></iframe>

**RGBカラーモデルを説明するためのデバイスをDIYする**

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/kevin-lee2/diy-a-device-for-explaining-rgb-color-model-496cbc/embed' width='350'></iframe>

**Seeeduino Lotusを使用したセキュリティアクセス** ドアをノックしたり近づいたりすると、自動的にドアが開きます。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/limanchen/security-access-using-seeeduino-lotus-7eb90f/embed' width='350'></iframe>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>