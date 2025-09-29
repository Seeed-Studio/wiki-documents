---
description: Grove - OLED Display 1.12インチ
title: Grove - OLED Display 1.12インチ
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Grove-OLED_Display_1.12inch
last_update:
  date: 05/15/2025
  author: shuxu hu
---


<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/main.jpg" />
</div>

新しい1.12インチOLEDディスプレイは、16階調のグレースケールを備えた小型ディスプレイが必要な場合に最適です。OLEDの表示部分は対角線で1.12インチで、96x96（バージョン1.0）または128x128（バージョン2.0）のグレースケールピクセルを含んでいます。このディスプレイはOLEDを使用しているため、バックライトがなく、コントラストが非常に高いです。

このOLEDはSSD1327（V1.0）またはSH1107G（V2.1）ドライバチップを使用しており、ディスプレイを管理します。ドライバチップとは、4線式I2C（クロック、データ、電源、GNDピン）を使用して通信できます。

[<img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" />](https://www.seeedstudio.com/Grove-OLED-Display-1.12%27%27-V2-p-3031.html)

## 仕様

* 通信モード: I2C
* グレースケール表示: 16階調のグレー
* 通常表示と反転表示の両方をサポート
* 連続水平スクロールをサポート
* Grove互換インターフェース

## バージョン
---
| 製品バージョン              | 変更点                                                                                                                                                                                    | リリース日 |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
|Grove - OLED Display 1.12" V1.0 | 初期バージョン                                                                                                                                                                                    | 2012年3月      |
|Grove - OLED Display 1.12" V2.1 | ドライバICをSSD1327からSH1107Gに変更し、グレースケールピクセルを96x96から128x128にアップグレード | 2015年11月     |

## 仕様詳細
---
|項目|値|
|-----|------|
|動作電圧 | 3.3/5 V|
|ドットマトリックス | 96x96 |
|表示色| 16階調のグレー |
|OLEDディスプレイ | LY120-96096 |
|ドライバチップ | SSD1327Z |
|ドットサイズ | 0.15(W)mm x 0.15(H)mm |
|ドットピッチ | 0.75(W)mm x 0.175(H)mm|
|動作温度 | -40~70 ℃|

:::tip
    Groveモジュールの詳細については、[Grove System](https://wiki.seeedstudio.com/ja/Grove_System/)をご参照ください。
:::

## 対応プラットフォーム
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    上記で対応プラットフォームとして記載されているものは、モジュールのソフトウェアまたは理論的な互換性を示しています。ほとんどの場合、Arduinoプラットフォーム向けのソフトウェアライブラリやコード例のみを提供しています。すべての可能なMCUプラットフォーム向けにソフトウェアライブラリやデモコードを提供することは不可能です。そのため、ユーザー自身でソフトウェアライブラリを作成する必要があります。
:::

## はじめに
### Arduinoで遊ぶ
#### ハードウェア

ここでは、簡単なデモを通じてこのGrove - OLED Displayの動作を説明します。まず、以下のものを準備してください：

| Seeeduino V4 | Grove - OLED Display 1.12`` | Base Shield |
|--------------|----------------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/product.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|
|[今すぐ購入](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[今すぐ購入](https://www.seeedstudio.com/Grove-OLED-Display-1.12%27%27-V2-p-3031.html)|[今すぐ購入](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

このモジュールは使いやすいです。必要なのは、モジュールをBase ShieldのI2Cポートに接続することだけです。以下のように4つのピンが定義されています。

|ピン|機能  | 備考   | ケーブルの色 |
|--------|------|-----|---------------|
|pin1	| SCL | I2Cクロック | 黄色 |
|pin2   | SDA| I2Cデータ| 白色|
|pin3   | VCC  | 電源、5V/3.3V| 赤色 |
|pin4	| GND  | グランド | 黒色 |

**ハードウェア概要**

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/connection.jpg" />
</div>


#### ソフトウェア

- **ステップ1.** Grove - OLED Display 1.12''をGroveケーブルを使ってBase Shieldの**I2C**ポートに接続します。

- **ステップ2.** Arduino IDEを開き、ライブラリマネージャー **(スケッチ > ライブラリを含める > ライブラリを管理)** を使用してu8g2ライブラリをインストールします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_manage_lib.png" />
</div>


- **ステップ3.** 検索フィールドに "**u8g2**" を入力し、最新バージョンを選択して「インストール」ボタンをクリックします。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_search_u8g2.png" />
</div>


- **ステップ4.** 以下のデモコードをArduino IDEにアップロードします。

```cpp
#include <Arduino.h>
#include <U8g2lib.h>
#include <SPI.h>
#include <Wire.h>

U8G2_SH1107_SEEED_128X128_1_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);

void setup(void) {
  u8g2.begin();
}

void loop(void) {
  u8g2.firstPage();
  do {
    u8g2.setFont(u8g2_font_ncenB10_tr);
    u8g2.drawStr(0,24,"Hello World!");
  } while ( u8g2.nextPage() );
}
```

:::success
       すべてが正常に動作すれば、Grove - OLED Display 1.12''の画面に「Hello World!」が表示されます。
:::
<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/outcome.jpg" />
</div>


:::note
        Base Shieldがない場合でも、[Seeeduino Vxシリーズ](https://www.seeedstudio.com/catalogsearch/result/index/?q=Seeeduino+v&product_list_limit=all)の**I2Cインターフェース**を使用することで動作します。
:::

#### U8g2ライブラリの紹介

U8g2は組み込みデバイス向けのモノクログラフィックスライブラリです。U8g2はモノクロOLEDおよびLCDをサポートしており、SSD1327/SH1107Gチップを含みます。

ArduinoライブラリU8g2はArduino IDEのライブラリマネージャーからインストールできます。U8g2にはU8x8ライブラリも含まれています：

**U8g2**

- すべてのグラフィックス手続き（線/ボックス/円の描画）を含みます。
- 多くのフォントをサポートします。フォントの高さにほぼ制限はありません。
- ディスプレイをレンダリングするためにマイクロコントローラー内にいくらかのメモリが必要です。

**U8x8**

- テキスト出力のみ（文字）デバイス。
- 8x8ピクセルグリッドに収まるフォントのみ許可されます。
- ディスプレイに直接書き込みます。マイクロコントローラー内にバッファは必要ありません。

こちらに[**U8g2ライブラリwiki**](https://github.com/olikraus/u8g2/wiki)および[U8g2 APIリファレンス](https://github.com/olikraus/u8g2/wiki/u8g2reference)ページを提供しています。

### Raspberry Piで遊ぶ (Grove Base Hat for Raspberry Piを使用)
#### ハードウェア

- **ステップ1.** このプロジェクトで使用するもの：

<div class="table-center">
	<table>
		<tr>
			<th>Raspberry Pi</th>
      <th>Grove Base Hat for RasPi	</th>
      <th>Grove - OLED Display 1.12''</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/product.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-1-12-V2.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

- **ステップ2.** Grove Base HatをRaspberry Piに接続します。
- **ステップ3.** Grove - OLED Display 1.12''をBase HatのI2Cポートに接続します。
- **ステップ4.** Raspberry PiをUSBケーブルを通じてPCに接続します。

#### ソフトウェア
- **ステップ1.** [ソフトウェア設定](https://wiki.seeedstudio.com/ja/Grove_Base_Hat_for_Raspberry_Pi/#installation)に従って開発環境を構成し、grove.pyをRaspberry Piにインストールします。
- **ステップ2.** 以下のコマンドを実行してコードを実行します。

```
# Python3用の仮想環境
virtualenv -p python3 env
source env/bin/activate
# コマンドを入力
grove_lcd_1.2inches
```
以下はsh1107g.pyコードです。

```python
'''
以下のコードは次の製品に対応しています：
    - `Grove - 16 x 2 LCD (Black on Red) <https://www.seeedstudio.com/Grove-16-x-2-LCD-Black-on-Re-p-3197.html>`_
    - `Grove - 16 x 2 LCD (Black on Yellow) <https://www.seeedstudio.com/Grove-16-x-2-LCD-Black-on-Yello-p-3198.html>`_
    - `Grove - 16 x 2 LCD (White on Blue) <https://www.seeedstudio.com/Grove-16-x-2-LCD-White-on-Blu-p-3196.html>`_

使用例:

    .. code-block:: python

        import time
        from grove.factory import Factory

        # LCD 16x2 キャラクターディスプレイ
        lcd = Factory.getDisplay("JHD1802")
        rows, cols = lcd.size()
        print("LCDモデル: {}".format(lcd.name))
        print("LCDタイプ : {} x {}".format(cols, rows))

        lcd.setCursor(0, 0)
        lcd.write("hello world!")
        lcd.setCursor(0, cols - 1)
        lcd.write('X')
        lcd.setCursor(rows - 1, 0)
        for i in range(cols):
            lcd.write(chr(ord('A') + i))

        time.sleep(3)
        lcd.clear()
'''
from grove.display.base import *
# from upm.pyupm_lcd import *
from grove.i2c import Bus
import sys

# sphinx autoapi 必須
__all__ = ["SH1107G"]

BasicFont = [
        [0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00],
        [0x00,0x00,0x5F,0x00,0x00,0x00,0x00,0x00],
        [0x00,0x00,0x07,0x00,0x07,0x00,0x00,0x00],
        [0x00,0x14,0x7F,0x14,0x7F,0x14,0x00,0x00],
        [0x00,0x24,0x2A,0x7F,0x2A,0x12,0x00,0x00],
        [0x00,0x23,0x13,0x08,0x64,0x62,0x00,0x00],
        [0x00,0x36,0x49,0x55,0x22,0x50,0x00,0x00],
        [0x00,0x00,0x05,0x03,0x00,0x00,0x00,0x00],
        [0x00,0x1C,0x22,0x41,0x00,0x00,0x00,0x00],
        [0x00,0x41,0x22,0x1C,0x00,0x00,0x00,0x00],
        [0x00,0x08,0x2A,0x1C,0x2A,0x08,0x00,0x00],
        [0x00,0x08,0x08,0x3E,0x08,0x08,0x00,0x00],
        [0x00,0xA0,0x60,0x00,0x00,0x00,0x00,0x00],
        [0x00,0x08,0x08,0x08,0x08,0x08,0x00,0x00],
        [0x00,0x60,0x60,0x00,0x00,0x00,0x00,0x00],
        [0x00,0x20,0x10,0x08,0x04,0x02,0x00,0x00],
        [0x00,0x3E,0x51,0x49,0x45,0x3E,0x00,0x00],
        [0x00,0x00,0x42,0x7F,0x40,0x00,0x00,0x00],
        [0x00,0x62,0x51,0x49,0x49,0x46,0x00,0x00],
        [0x00,0x22,0x41,0x49,0x49,0x36,0x00,0x00],
        [0x00,0x18,0x14,0x12,0x7F,0x10,0x00,0x00],
        [0x00,0x27,0x45,0x45,0x45,0x39,0x00,0x00],
        [0x00,0x3C,0x4A,0x49,0x49,0x30,0x00,0x00],
        [0x00,0x01,0x71,0x09,0x05,0x03,0x00,0x00],
        [0x00,0x36,0x49,0x49,0x49,0x36,0x00,0x00],
        [0x00,0x06,0x49,0x49,0x29,0x1E,0x00,0x00],
        [0x00,0x00,0x36,0x36,0x00,0x00,0x00,0x00],
        [0x00,0x00,0xAC,0x6C,0x00,0x00,0x00,0x00],
        [0x00,0x08,0x14,0x22,0x41,0x00,0x00,0x00],
        [0x00,0x14,0x14,0x14,0x14,0x14,0x00,0x00],
        [0x00,0x41,0x22,0x14,0x08,0x00,0x00,0x00],
        [0x00,0x02,0x01,0x51,0x09,0x06,0x00,0x00],
        [0x00,0x32,0x49,0x79,0x41,0x3E,0x00,0x00],
        [0x00,0x7E,0x09,0x09,0x09,0x7E,0x00,0x00],
        [0x00,0x7F,0x49,0x49,0x49,0x36,0x00,0x00],
        [0x00,0x3E,0x41,0x41,0x41,0x22,0x00,0x00],
        [0x00,0x7F,0x41,0x41,0x22,0x1C,0x00,0x00],
        [0x00,0x7F,0x49,0x49,0x49,0x41,0x00,0x00],
        [0x00,0x7F,0x09,0x09,0x09,0x01,0x00,0x00],
        [0x00,0x3E,0x41,0x41,0x51,0x72,0x00,0x00],
        [0x00,0x7F,0x08,0x08,0x08,0x7F,0x00,0x00],
        [0x00,0x41,0x7F,0x41,0x00,0x00,0x00,0x00],
        [0x00,0x20,0x40,0x41,0x3F,0x01,0x00,0x00],
        [0x00,0x7F,0x08,0x14,0x22,0x41,0x00,0x00],
        [0x00,0x7F,0x40,0x40,0x40,0x40,0x00,0x00],
        [0x00,0x7F,0x02,0x0C,0x02,0x7F,0x00,0x00],
        [0x00,0x7F,0x04,0x08,0x10,0x7F,0x00,0x00],
        [0x00,0x3E,0x41,0x41,0x41,0x3E,0x00,0x00],
        [0x00,0x7F,0x09,0x09,0x09,0x06,0x00,0x00],
        [0x00,0x3E,0x41,0x51,0x21,0x5E,0x00,0x00],
        [0x00,0x7F,0x09,0x19,0x29,0x46,0x00,0x00],
        [0x00,0x26,0x49,0x49,0x49,0x32,0x00,0x00],
        [0x00,0x01,0x01,0x7F,0x01,0x01,0x00,0x00],
        [0x00,0x3F,0x40,0x40,0x40,0x3F,0x00,0x00],
        [0x00,0x1F,0x20,0x40,0x20,0x1F,0x00,0x00],
        [0x00,0x3F,0x40,0x30,0x40,0x3F,0x00,0x00],
        [0x00,0x63,0x14,0x08,0x14,0x63,0x00,0x00],
        [0x00,0x03,0x04,0x78,0x04,0x03,0x00,0x00],
        [0x00,0x61,0x51,0x49,0x45,0x43,0x00,0x00],
        [0x00,0x7F,0x41,0x41,0x00,0x00,0x00,0x00],
        [0x00,0x02,0x04,0x08,0x10,0x20,0x00,0x00],
        [0x00,0x41,0x41,0x7F,0x00,0x00,0x00,0x00],
        [0x00,0x04,0x02,0x01,0x02,0x04,0x00,0x00],
        [0x00,0x80,0x80,0x80,0x80,0x80,0x00,0x00],
        [0x00,0x01,0x02,0x04,0x00,0x00,0x00,0x00],
        [0x00,0x20,0x54,0x54,0x54,0x78,0x00,0x00],
        [0x00,0x7F,0x48,0x44,0x44,0x38,0x00,0x00],
        [0x00,0x38,0x44,0x44,0x28,0x00,0x00,0x00],
        [0x00,0x38,0x44,0x44,0x48,0x7F,0x00,0x00],
        [0x00,0x38,0x54,0x54,0x54,0x18,0x00,0x00],
        [0x00,0x08,0x7E,0x09,0x02,0x00,0x00,0x00],
        [0x00,0x18,0xA4,0xA4,0xA4,0x7C,0x00,0x00],
        [0x00,0x7F,0x08,0x04,0x04,0x78,0x00,0x00],
        [0x00,0x00,0x7D,0x00,0x00,0x00,0x00,0x00],
        [0x00,0x80,0x84,0x7D,0x00,0x00,0x00,0x00],
        [0x00,0x7F,0x10,0x28,0x44,0x00,0x00,0x00],
        [0x00,0x41,0x7F,0x40,0x00,0x00,0x00,0x00],
        [0x00,0x7C,0x04,0x18,0x04,0x78,0x00,0x00],
        [0x00,0x7C,0x08,0x04,0x7C,0x00,0x00,0x00],
        [0x00,0x38,0x44,0x44,0x38,0x00,0x00,0x00],
        [0x00,0xFC,0x24,0x24,0x18,0x00,0x00,0x00],
        [0x00,0x18,0x24,0x24,0xFC,0x00,0x00,0x00],
        [0x00,0x00,0x7C,0x08,0x04,0x00,0x00,0x00],
        [0x00,0x48,0x54,0x54,0x24,0x00,0x00,0x00],
        [0x00,0x04,0x7F,0x44,0x00,0x00,0x00,0x00],
        [0x00,0x3C,0x40,0x40,0x7C,0x00,0x00,0x00],
        [0x00,0x1C,0x20,0x40,0x20,0x1C,0x00,0x00],
        [0x00,0x3C,0x40,0x30,0x40,0x3C,0x00,0x00],
        [0x00,0x44,0x28,0x10,0x28,0x44,0x00,0x00],
        [0x00,0x1C,0xA0,0xA0,0x7C,0x00,0x00,0x00],
        [0x00,0x44,0x64,0x54,0x4C,0x44,0x00,0x00],
        [0x00,0x08,0x36,0x41,0x00,0x00,0x00,0x00],
        [0x00,0x00,0x7F,0x00,0x00,0x00,0x00,0x00],
        [0x00,0x41,0x36,0x08,0x00,0x00,0x00,0x00],
        [0x00,0x02,0x01,0x01,0x02,0x01,0x00,0x00],
        [0x00,0x02,0x05,0x05,0x02,0x00,0x00,0x00],
]

class SH1107G(Display):
    '''
    OLEDディスプレイ 1.12"(v2) 使用チップ: SH1107G。

    引数:
        address(int): I2Cデバイスアドレス。デフォルトは0x3E。
    '''
    MAX_GRAY    = 100
    _REG_CMD    = 0x00
    _REG_DATA   = 0x40
    _PAGE_CNT   = 16
    _PAGE_BYTES = 128
    _TOTAL_BYTES= _PAGE_CNT * _PAGE_BYTES
    
    _DISPLAY_CMD_OFF = 0xAE;
    _DISPLAY_CMD_ON = 0xAF;

    _BASE_LOW_COLUMN_ADDR = 0x00;
    _BASE_HIGH_COLUMN_ADDR = 0x10;
    _BASE_PAGE_START_ADDR = 0xB0;
    def __init__(self, address = 0x3C):
        super(SH1107G, self).__init__()
        self._bus = Bus()
        self._addr = address

        if self._bus.write_byte(self._addr, 0):
            print("OLED SH1107Gが挿入されているか確認し、再試行してください")
            sys.exit(1)
 
        id = self._bus.read_byte_data(self._addr, SH1107G._REG_CMD)
        # print(" id = 0x{:2x}".format(id))
        self._sh1107 = (id & 0x3F) == 0x07

        blk =     [0xAE]   # ディスプレイOFF
        blk.append(0xD5)   # Dclk設定
        blk.append(0x50)   # 100Hz
        blk.append(0x20)   # 行アドレス設定
        blk.append(0x81)   # コントラスト制御設定
        blk.append(0x80)
        blk.append(0xA0)   # セグメントリマップ
        blk.append(0xA4)   # 全画面表示設定
        blk.append(0xA6)   # 通常表示
        blk.append(0xAD)   # 外部VCC設定
        blk.append(0x80)
        blk.append(0xC0)   # 共通スキャン方向設定
        blk.append(0xD9)   # フェーズ長設定
        blk.append(0x1F)
        blk.append(0xDB)   # Vcomh電圧設定
        blk.append(0x27)
        blk.append(0xAF)   # ディスプレイON
        blk.append(0xB0)
        blk.append(0x00)
        blk.append(0x10)
        self._cmds(blk)
        self.clear()

    def _cmd(self, cmd):
        try:
            self._bus.write_byte_data(self._addr,
                                    SH1107G._REG_CMD, cmd)
        except IOError:
            print("*** OLEDモジュールが挿入されているか確認してください ***")
            sys.exit(1)

    def _cmds(self, cmds):
        for c in cmds:
            self._cmd(c)

    def _datas(self, datas):
        length = len(datas)
        data = bytearray(length + 1)
        data[0] = SH1107G._REG_DATA
        for i in range(length):
            data[i + 1] = datas[i]
        try:
            self._bus.write_i2c_block_data(self._addr,
                                  SH1107G._REG_DATA, datas)
        except IOError:
            print("*** OLEDモジュールが挿入されているか確認してください ***")
            sys.exit(1)

    @property
    def name(self):
        '''
        デバイス名を取得

        戻り値:
            string: デバイスに応じてSH1107G/SSD1307。
        '''
        return "SH1107G"

    def type(self):
        '''
        デバイスタイプを取得

        戻り値:
            int: ``TYPE_GRAY``
        '''
        return TYPE_GRAY

    def size(self):
        '''
        ディスプレイサイズを取得

        戻り値:
            (Rows, Columns): ディスプレイサイズ（文字単位）。
        '''
        return 16, 16

    def clear(self):
        '''
        画面をクリアし、カーソルを左上隅に配置します。
        '''
        zeros = [ 0x0 for dummy in range(SH1107G._TOTAL_BYTES) ]
        self.draw(zeros, SH1107G._TOTAL_BYTES)

    def draw(self, data, bytes):
        '''
        OLEDにデータを一括転送/描画します。
        転送サイズはbytesで指定します。

        引数:
            data (list of int): 転送/描画するデータ
            bytes (int)       : データサイズ
        '''

        # 全ページをデータで埋める
        for i in range(SH1107G._PAGE_CNT):
            if i > bytes / SH1107G._PAGE_BYTES:
                return
            self._cmd(self._BASE_PAGE_START_ADDR + i)
            self._cmd(self._BASE_LOW_COLUMN_ADDR)
            self._cmd(self._BASE_HIGH_COLUMN_ADDR)
            # 1ページ分のバイトを埋める
            for k in range(0, SH1107G._PAGE_BYTES, 32):
                # I2Cは1回の転送で32バイトに制限
                begin = i * SH1107G._PAGE_BYTES + k
                end   = begin + 32
                self._datas(data[begin:end])

    def home(self):
        '''
        OLEDの左上隅にカーソルを配置します。
        以降のテキスト出力はその位置から始まります。
        '''
        self.setCursor(0, 0)

    def setCursor(self, row, column):
        '''
        OLEDカーソルの位置を設定します。
        以降のテキスト出力は指定した位置に表示されます。

        引数:
            row   (int): カーソルを配置する行（0が最初の行）
            column(int): カーソルを配置する列（0が最初の列）

        戻り値:
            None
        '''
        self._cmd(self._BASE_PAGE_START_ADDR + row)
        self._cmd(0x08 if column % 2 else self._BASE_LOW_COLUMN_ADDR)
        self._cmd(self._BASE_HIGH_COLUMN_ADDR + (column >> 1))

    def _putchar(self, c):
        asc = ord(c)
        if asc < 32 or asc > 127:
                asc = ord(' ')
        for i in range(8):
            fontmap = []
            fontmap.append(BasicFont[asc - 32][i])
            self._datas(fontmap)

    def write(self, msg):
        '''
        OLEDに文字を出力します。

        引数:
            msg (string): ディスプレイに出力する文字列

        戻り値:
            None
        '''
        for i in range(len(msg)):
            self._putchar(msg[i])

    def _backlight_on(self, en):
        self._cmd(self._DISPLAY_CMD_ON if en else self._DISPLAY_CMD_OFF)


def main():
    import time

    oled = SH1107G()
    rows, cols = oled.size()
    print("OLEDモデル: {}".format(oled.name))
    print("OLEDタイプ : {} x {}".format(cols, rows))

    oled.backlight(False)
    time.sleep(1)

    oled.backlight(True)
    oled.setCursor(0, 0)
    oled.write("hello world!")
    oled.setCursor(0, cols - 1)
    oled.write('X')
    oled.setCursor(rows - 1, 0)
    for i in range(cols):
        oled.write(chr(ord('A') + i))

    time.sleep(3)
    oled.clear()

if __name__ == '__main__':
    main()
```


```python
（env）pi@raspberrypi:~ grove_lcd_1.2inches
```
:::tip

すべてが正常に動作していれば、以下の結果が表示されるはずです。

:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/play_with_raspberry.jpg" />
</div>

このプログラムを終了するには、単に `ctrl`+`c` を押してください。

## 回路図オンラインビューア

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/OLED%20Display.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## リソース
---------
* **[Eagle]** [Grove-OLED Display 1.12inch in Eagle](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/OLED%20Display.zip)
* **[PDF]** [Grove-OLED Display 1.12inch Sch](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/Grove%20-%2096x96%20OLED%20Display%20v2.1%20Sch.pdf)
* **[PDF]** [Grove-OLED Display 1.12inch PCB](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/Grove%20-%2096x96%20OLED%20Display%20v2.1%20PCB.pdf)
* **[Datasheet]** [SSD1327 Datasheet](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/SSD1327_datasheet.pdf)
*  **[Datasheet]** [LY120 Datasheet](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/308010007_LCD-22P-0.7.pdf)
* **[Datasheet]** [SH1107G_datasheet](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/SH1107G_datasheet.pdf)
* **[Tool]** [96x96画像作成の参考資料](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/Make_A_96X96_Image1.zip)

## プロジェクト

**スマート作物：従来の農業にIoTを導入！** 自然を守ることを使命とし、IoTを活用して技術と監視方法を設計・実装します。Heliumを通じて実現します。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/gabogiraldo/smart-crops-implementing-iot-in-conventional-agriculture-3674a6/embed' width='350'></iframe>

**自動植物給水システム** ESP8266とAndroidアプリを使用して植物に水を供給し、温度を監視するデバイスです。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ammarshahid572/automated-plant-watering-system-cb23d9/embed' width='350'></iframe>

**Flying BeagleBone Green** BBBminiは、BeagleBone用の最先端Linux自動操縦/フライトコントローラーCapeです。コプター、飛行機、ローバーに使用できます。

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/mirkix/flying-beaglebone-green-448b60/embed' width='350'></iframe>

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
