---
description: Grove - I2C カラーセンサー
title: Grove - I2C カラーセンサー
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-I2C_Color_Sensor
last_update:
  date: 12/29/2025
  author: Brandy
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Grove-I2C-Color-Sensor.jpg" /></div>

このモジュールは、デジタル出力I2Cを備えたカラーセンサーTCS3414CSをベースにしています。フィルター付きフォトダイオードの8×2配列と16ビットアナログ-デジタルコンバーターに基づいて、周囲光の色度や物体の色を測定できます。16個のフォトダイオードのうち、4個は赤フィルター、4個は緑フィルター、4個は青フィルター、4個はフィルターなし（クリア）です。同期入力ピンにより、外部パルス光源が正確な同期変換制御を提供できます。

:::note
最新バージョンV2.0ではICがTCS3472に置き換えられ、古いライブラリも更新されていることにご注意ください。V2.0バージョンをお使いの場合は、[新しいライブラリ](https://github.com/Seeed-Studio/Grove_I2C_Color_Sensor_TCS3472)をご使用ください。
:::





特徴
--------

- Grove 互換インターフェース
- I2Cによる16ビットデジタル出力
- SYNC入力により変調光源への積分サイクルを同期
- 動作温度範囲 -40°C～85°C
- ユーザー定義の上限・下限しきい値設定によるプログラマブル割り込み機能
- RoHS準拠

:::tip
Grove モジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)を参照してください
:::

仕様
-------------

| パラメータ | 値/範囲                |
|-----------|------------------------|
| PCB サイズ  | 2.0 cm \* 4.0 cm       |
| インターフェース | 2.0mmピッチピンヘッダー |
| VCC       | 3.3 - 6.0 V            |
| I2C 速度 | 400 kHz                |

対応プラットフォーム
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
上記でサポートされているとして言及されているプラットフォームは、モジュールのソフトウェアまたは理論的な互換性を示すものです。ほとんどの場合、Arduinoプラットフォーム用のソフトウェアライブラリまたはコード例のみを提供しています。すべての可能なMCUプラットフォーム用のソフトウェアライブラリ/デモコードを提供することは不可能です。したがって、ユーザーは独自のソフトウェアライブラリを作成する必要があります。
:::

入門ガイド
---------------

以下のドキュメントは、ユーザーがGroveを始めるのに役立ちます。

- [前書き - 入門ガイド](https://www.seeedstudio.com/document/pdf/Preface.pdf)
- [Grove入門](https://www.seeedstudio.com/document/pdf/Introduction%20to%20Grove.pdf)

### ハードウェア接続

Grove製品にはエコシステムがあり、すべて同じコネクタを持ち、Grove Base Shieldに接続できます。このモジュールをBase ShieldのI2Cポートに接続してください。ただし、ジャンパーワイヤーを使用してBase ShieldなしでGrove - I2C カラーセンサーをArduinoに接続することもできます。

| Arduino UNO | Grove - I2C カラーセンサー |
|-------------|--------------------------|
| 5V          | VCC                      |
| GND         | GND                      |
| SDA         | SDA                      |
| SCL         | SCL                      |

ソフトウェアインストール
---------------------

Arduinoをダウンロードし、Arduinoドライバーをインストールしてください

Seeeduino/Arduinoの入門ガイド

デモ
-----

このモジュールは、光源の色や物体の色を検出するために使用できます。光源の色を検出する場合は、LEDスイッチをオフにし、光源がセンサーを直接照らすようにしてください。物体の色を検出する場合は、LEDをオンにし、物体をエンクロージャーの上部に密着させて置いてください。物体の色を感知する理論は反射感知理論です。下の図のようになります。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Reflcect.jpg" /></div>

### カラーセンサーライブラリ

Seeeduino/Arduinoで素早く遊び始められるようにライブラリを作成しました。このセクションでは、ライブラリの設定方法を説明します。

#### セットアップ

1. Grove_I2C_Color_Sensor githubページから[ライブラリコードをzipファイルとして](https://github.com/Seeed-Studio/Grove_I2C_Color_Sensor)ダウンロードしてください。最新バージョンV2.0（ICはTCS3472）をお使いの場合は、この[新しいライブラリ](https://github.com/Seeed-Studio/Grove_I2C_Color_Sensor_TCS3472)をご使用ください
2. ダウンロードしたファイルを…/arduino/librariesに解凍してください。
3. 解凍したフォルダーを「Color_Sensor」にリネームしてください
4. Arduino IDE を起動してください（開いている場合は再起動してください）。

#### 関数の説明

これはライブラリで最も重要/有用な関数です。利用可能なすべての関数を確認するために、.hファイルと.cppファイルを自分で見ることをお勧めします。

##### ライブラリ関数を通じてRGBデータを読み取る

**readRGB(int \*red, int \*green, int \*blue)**

- **red:** Rを保存する変数のアドレス。
- **green:** Gを保存する変数のアドレス。
- **blue:** Bを保存する変数のアドレス。

```
void loop()
{
    int red, green, blue;
    GroveColorSensor colorSensor;
    colorSensor.ledStatus = 1;            // When turn on the color sensor LED, ledStatus = 1; When turn off the color sensor LED, ledStatus = 0.
    while(1)
    {
        colorSensor.readRGB(&red, &green, &blue);    //Read RGB values to variables.
        delay(300);
        Serial.print("The RGB value are: RGB( ");
        Serial.print(red,DEC);
        Serial.print(", ");
        Serial.print(green,DEC);
        Serial.print(", ");
        Serial.print(blue,DEC);
        Serial.println(" )");
        colorSensor.clearInterrupt();
    }
}
```

### カラーセンサーの例/アプリケーション

この例では、Grove - I2C カラーセンサーの機能を使用し、[チェーン可能RGB LED Grove](/ja/Grove-Chainable_RGB_LED/)で検出された色を表示する方法を示します。

:::note
以前にArduino IDEに<a href="https://github.com/Seeed-Studio/Grove_Chainable_RGB_LED">Grove-チェーン可能RGB LEDライブラリ</a>をダウンロードしていない場合は、まずライブラリをダウンロードしてセットアップしてください。
:::

- 完全な例については、File->Examples->Color_Sensor->example->ColorSensorWithRGB-LEDスケッチを開くか、以下のコードを新しいArduinoスケッチにコピー＆ペーストしてください。

**説明**: この例では、周囲光の色度や物体の色を測定し、チェーン可能RGB LED Groveを介して検出された色を表示できます。

Grove - I2C カラーセンサーで検出された色を表示するために、他の表示モジュールを使用することもできます。

```
#include <Wire.h>
#include <GroveColorSensor.h>
#include <ChainableLED.h>

#define CLK_PIN   7
#define DATA_PIN  8
#define NUM_LEDS  1            //The number of Chainable RGB LED

ChainableLED leds(CLK_PIN, DATA_PIN, NUM_LEDS);

void setup()
{
    Serial.begin(9600);
    Wire.begin();
}

void loop()
{
    int red, green, blue;
    GroveColorSensor colorSensor;
    colorSensor.ledStatus = 1;            // When turn on the color sensor LED, ledStatus = 1; When turn off the color sensor LED, ledStatus = 0.
    while(1)
    {
        colorSensor.readRGB(&red, &green, &blue);    //Read RGB values to variables.
        delay(300);
        Serial.print("The RGB value are: RGB( ");
        Serial.print(red,DEC);
        Serial.print(", ");
        Serial.print(green,DEC);
        Serial.print(", ");
        Serial.print(blue,DEC);
        Serial.println(" )");
        colorSensor.clearInterrupt();
        for(int i = 0; i<NUM_LEDS; i++)
        {
            leds.setColorRGB(i, red, green, blue);
        }
    }
}
```

- 開発ボードにコードをアップロードしてください。
- その後、Grove_-_チェーン可能_RGB_LEDが検出された色を表示します。

### Raspberry Pi で遊ぶ

#### ハードウェア

- **ステップ 1**. このプロジェクトで使用するもの：

| Raspberry pi | Grove Base Hat for RasPi| Grove-I2C_Color_Sensor |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Grove-I2C-Color-Sensor.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ入手](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[今すぐ入手](https://www.seeedstudio.com/Grove-I2C-Color-Sensor-p-854.html)|

- **ステップ 2**. Grove Base HatをRaspberryに接続してください。
- **ステップ 3**. Grove-I2C_ColorをBase Hatの**I2C**ポートに接続してください。
- **ステップ 4**. USBケーブルでRaspberry PiをPCに接続してください。

<!-- ![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect4.jpg) -->

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/GROVE-fix/Color.jpg" alt="pir" width={600} height="auto" /></p>

#### ソフトウェア

:::note
     **Raspberry Pi with Raspberrypi OS >= Bullseye** を使用している場合は、このコマンドラインを **Python3 でのみ** 使用する必要があります。
:::

- **ステップ 1**. [Setting Software](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation) に従って開発環境を設定します。
- **ステップ 2**. 関連する仮想環境に入ります。

```
source ~/grove_env/env/bin/activate
cd ~/grove_env/grove.py/grove
```

- **ステップ 3**. 以下のコマンドを実行してコードを実行します。

- 以下は grove_i2c_color_sensor_v2.py コードを確認するためのものです。

```
less grove_i2c_color_sensor_v2.py
```

```python
import time
from grove.i2c import Bus


_CMD      = 0x80
_AUTO     = 0x20

_ENABLE   = 0x00
_ATIME    = 0x01
_WTIME    = 0x03
_AILT     = 0x04
_AIHT     = 0x06
_PERS     = 0x0C
_CONFIG   = 0x0D
_CONTROL  = 0x0F
_ID       = 0x12
_STATUS   = 0x13
_CDATA    = 0x14
_RDATA    = 0x16
_GDATA    = 0x18
_BDATA    = 0x1A

_AIEN       = 0x10
_WEN        = 0x08
_AEN        = 0x02
_PON        = 0x01

_GAINS  = (1, 4, 16, 60)


class GroveI2cColorSensorV2:
    """Driver for Grove I2C Color Sensor (TCS34725)"""

    def __init__(self, bus=1, address=0x29):
        self.address = address
        self.bus = Bus(bus)

        self.awake = False

        if self.id not in (0x44, 0x4D):
            raise ValueError('Not find a Grove I2C Color Sensor V2')

        self.set_integration_time(24)
        self.set_gain(4)

    def wakeup(self):
        enable = self._read_byte(_ENABLE)
        self._write_byte(_ENABLE, enable | _PON | _AEN)
        time.sleep(0.0024)

        self.awake = True

    def sleep(self):
        enable = self._read_byte(_ENABLE)
        self._write_byte(_ENABLE, enable & ~_PON)

        self.awake = False

    def is_awake(self):
        return self._read_byte(_ENABLE) & _PON

    def set_wait_time(self, t):
        pass

    @property
    def id(self):
        return self._read_byte(_ID)

    @property
    def integration_time(self):
        steps = 256 - self._read_byte(_ATIME)
        return steps * 2.4

    def set_integration_time(self, t):
        """Set the integration time of the sensor"""
        if t < 2.4:
            t = 2.4
        elif t > 614.4:
            t = 614.4

        steps = int(t / 2.4)
        self._integration_time = steps * 2.4
        self._write_byte(_ATIME, 256 - steps)

    @property
    def gain(self):
        """The gain control. Should be 1, 4, 16, or 60.
        """
        return _GAINS[self._read_byte(_CONTROL)]

    def set_gain(self, gain):
        if gain in _GAINS:
            self._write_byte(_CONTROL, _GAINS.index(gain))

    @property
    def raw(self):
        """Read RGBC registers
        return 16 bits red, green, blue and clear data
        """

        if not self.awake:
            self.wakeup()

        while not self._valid():
            time.sleep(0.0024)

        data = tuple(self._read_word(reg) for reg in (_RDATA, _GDATA, _BDATA, _CDATA))
        return data

    @property
    def rgb(self):
        """Read the RGB color detected by the sensor.  Returns a 3-tuple of
        red, green, blue component values as bytes (0-255).
        """
        r, g, b, clear = self.raw
        if clear:
            r = int(255 * r / clear)
            g = int(255 * g / clear)
            b = int(255 * b / clear)
        else:
            r, g, b = 0, 0, 0
        return r, g, b

    def _valid(self):
        """Check if RGBC is valid"""
        return self._read_byte(_STATUS) & 0x01

    def _read_byte(self, address):
        command = _CMD | address
        return self.bus.read_byte_data(self.address, command)

    def _read_word(self, address):
        command = _CMD | _AUTO | address
        return self.bus.read_word_data(self.address, command)

    def _write_byte(self, address, data):
        command = _CMD | address
        self.bus.write_byte_data(self.address, command, data)

    def _write_word(self, address, data):
        command = _CMD | _AUTO | address
        data = [(data >> 8) & 0xFF, data & 0xFF]
        self.bus.write_i2c_block_data(self.address, command, data)


Grove = GroveI2cColorSensorV2


def main():
    sensor = GroveI2cColorSensorV2()

    print('Raw data of red-filtered, green-filtered, blue-filtered and unfiltered photodiodes')
    while True:
        # r, g, b = sensor.rgb
        r, g, b, clear = sensor.raw
        print((r, g, b, clear))
        time.sleep(1.0)

if __name__ == '__main__':
    main()
```
- このコードを実行します
```

python grove_i2c_color_sensor_v2.py

```

すべてがスムーズに進めば、以下の現象が見られます。😄

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/GROVE-fix/color_result.png" alt="pir" width={600} height="auto" /></p>







その他の参考資料
---------------

このモジュールは、カラーセンサー TCS3414CS をベースにしています。TCS3414CS デジタルカラーセンサーは、赤（R）、緑（G）、青（B）、クリア（C）（フィルターなし）の4つのチャンネルからデータを返します。赤、緑、青チャンネル（RGB）からの応答は、特定の光源の色度座標（x、y）を決定するために使用できます。これらの標準は、国際照明委員会（CIE）によって設定されています。CIE は、色と色測定に関する主要な国際組織です。TCS3414CS を使用して特定のオブジェクトの色を取得するには、まずセンサー応答（RGB）を CIE 三刺激値（XYZ）にマッピングする必要があります。その後、色度座標（x、y）を計算する必要があります。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Coordinates_transform.png" /></div>

色度計算プロセスの概要

変換を行うための方程式：

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Equations.png" /></div>

変換方程式

- 座標（x、y）を取得したら、推奨される色を取得するために以下の図を参照してください。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Chromaticity_Diagram.jpg" /></div>

## よくある質問

**Q1: コマンドの理解方法は？例えば、REG_GREEN_LOW = 0xD0**

A1: 添付の画像から、コマンドに何が含まれているかを確認できます。バイトプロトコルコマンドを使用する場合、0x80+ADDRESS のようにする必要があります。例えば、REG_TIMING（01h）= 0x81
バイトおよびブロック読み取りの場合、コマンドは 0xC0+ADDRESS にする必要があります。REG_GREEN_LOW（10h）= 0xD0。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Color%20sensor%20register.png" /></div>

# Grove-I2C Color Sensor Eagle File V1.2

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/Grove-I2C%20Color%20Sensor%20Eagle%20File%20V1.2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove-I2C Color Sensor Eagle File V2.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/Grove%20I2C%20Color%20Sensor%20v2.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# リソース

---------

- **[ライブラリ]**[Library for Grove - I2C Color Sensor V1.2](https://github.com/Seeed-Studio/Grove_I2C_Color_Sensor)
- **[ライブラリ]**[Library for Grove - I2C Color Sensor V2.0](https://github.com/Seeed-Studio/Grove_I2C_Color_Sensor_TCS3472)
- **[Eagle]**[Grove-I2C Color Sensor Eagle File V1.2](https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/Grove-I2C%20Color%20Sensor%20Eagle%20File%20V1.2.zip)
- **[Eagle]**[Grove-I2C Color Sensor Eagle File V2.0](https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/Grove%20I2C%20Color%20Sensor%20v2.0.zip)
- **[データシート]**[TCS3414-A Datasheet](https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/res/TCS3404_TCS3414-A.pdf)
- **[データシート]**[TCS3472 Datasheet](https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/res/TCS3472%20Datasheet.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_I2C_Color_Sensor -->

## 技術サポートと製品ディスカッション

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## 産業用センサーへのアップグレード

SenseCAP [S2110 コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) と [S2100 データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) を使用することで、Grove を LoRaWAN® センサーに簡単に変換できます。Seeed は、プロトタイピングをサポートするだけでなく、堅牢な [産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) の SenseCAP シリーズでプロジェクトを拡張する可能性も提供します。

IP66 筐体、Bluetooth 設定、グローバル LoRaWAN® ネットワークとの互換性、内蔵 19 Ah バッテリー、APP からの強力なサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) は産業用アプリケーションに最適な選択肢です。このシリーズには、土壌水分、気温と湿度、光強度、CO2、EC、および 8-in-1 気象ステーションのセンサーが含まれています。次の成功する産業プロジェクトには、最新の SenseCAP S210x をお試しください。

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>
