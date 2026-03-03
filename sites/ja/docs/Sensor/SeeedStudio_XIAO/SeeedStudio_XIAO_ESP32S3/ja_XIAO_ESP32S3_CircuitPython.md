---
description: XIAO ESP32S3 用 CircuitPython
title: XIAO ESP32S3 プロジェクト CircuitPython
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao_esp32s3_project_circuitpython
last_update:
  date: 08/18/2024
  author: Isaac, Djair Guilherme
---

# プロジェクト概要

このwikiは更新されました: https://wiki.seeedstudio.com/xiao_esp32s3_with_micropython/

CircuitPython は、物理コンピューティングプロジェクトを簡素化するため、XIAO ESP32S3 にとって理想的なプログラミング言語です。Python をベースとしており、初心者にやさしい構文を持ち、センサーやディスプレイなどのハードウェアにアクセスするためのモジュールが含まれています。CircuitPython はすでに ESP32S3 チップをサポートしているため、このプロジェクトでは Seeed Studio XIAO ESP32S3 ボード上で CircuitPython をコンパイルすることを試みます。

## XIAO ESP32S3 と OLED ディスプレイ

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/13.jpg" /></div>

### ハードウェアの準備

ここでは、Seeed Studio XIAO ESPS3 と Seeed Studio Grove OLED Display 0.96 をハードウェアとして使用しています。

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3</th>
        <th>Seeed Studio Grove OLED Display 0.96</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove-oled-displey-0.96-ssd1315-preview.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### ソフトウェアの準備

私はThonny IDEソフトウェア（Windows）といくつかの関連ライブラリとファイルを使用しています。

<div class="table-center">
  <table align="center">
    <tr>
        <th>Thonny IDE</th>
        <th>関連ファイル（ライブラリ）</th>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://thonny.org/" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> Download ⏬</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/related-mpy.zip" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> Download ⏬</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg" style={{width:500, height:'auto'}}/></div>

### はじめに

#### XIAO ESP32S3 Circuitpython ファームウェアのダウンロード

[XIAO ESP32S3 Sense用 Circuitpython ファームウェア 9.1.1 および 9.20 Alpha](https://github.com/djairjr/Seeed_Xiao_ESPS3_Sense_Circuitpython/tree/main/seeed_xiao_esp32s3_sense/seeed_xiao_esp32s3_sense)

#### XIAO ESP32S3 ボードをBootLoaderモードでPCに接続

具体的な方法は以下の通りです：

- **ステップ 1**. XIAO ESP32S3のBOOTボタンを離さずに押し続けます。

- **ステップ 2**. BOOTボタンを押し続けたまま、データケーブルでコンピューターに接続します。コンピューターに接続した後、BOOTボタンを離します。

- **ステップ 3**. **Blink**プログラムをアップロードして、XIAO ESP32S3の動作を確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/15.gif" style={{width:500, height:'auto'}}/></div>

#### Thonnyを開いてオプションを設定

1. Thonnyを実行した後、「Tools -> Options」に移動し、「Options」を選択します

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/03.png" /></div>

2. 「Interpreter」オプションを選択し、「CircuitPython (generic)」を選択します

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/04.png" /></div>

### XIAO ESP32S3 ボードにCircuitPythonファームウェアをフラッシュ

1. Thonnyで「(esptool)」をクリックします。最新のCircuitPythonファームウェアをダウンロードしてボードにフラッシュするよう促されます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/06.png" /></div>

2. Thonnyの「(esptool)」は以下のように表示され、まず正しい「Target port」を選択します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/07.png" /></div>

3. CircuitPythonファミリーを「ESP32-S3」として選択し、インストールボタンの横にある3本の水平線のアイコンを選択して、ダウンロードしたファームウェアを含めます。
例：(seeed_xiao_esp32s3_911.bin または seeed_xiao_esp32s3_920.bin)

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/08.png" /></div>

4. Thonnyがリセットを入力し、「Install」をクリックできます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/09.png" /></div>

5. しばらくして「Done」が表示されたら、ウィンドウを閉じることができます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/10.png" /></div>

6. PCに「CIRCUITPY」ドライバーが表示され、ボードが正常にフラッシュされたことを示します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/11.png" /></div>

#### 関連ファイル（ライブラリ）を「CIRCUITPY」ドライバーに追加

[関連ファイル（ライブラリ）](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/related-mpy.zip)からすべてのファイルを「CIRCUITPY」ドライバーにコピーします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/12.png" /></div>

:::note
「adafruit_ssd1306.mpy」ファイルと「adafruit_framebuf.mpy」ファイルは、「Seeed Studio Grove OLED Display 0.96」を使用する際に必要です

adafruit_framebufライブラリは、テキストをレンダリングするためにfont5x8.binという名前のフォントファイルを使用します。このファイルは、コードが実行される環境内でアクセス可能である必要があります。
:::

#### コード（IIC）を書いてアップロードし、OLED表示を実現

1. ファイルを追加した後、import adafruit_ssd1306コマンドを使用してadafruit_ssd1306ライブラリをコードにインポートできるようになり、環境がOLEDディスプレイを駆動するように設定されました。コードは以下の通りです：

```python
from board import *
from busio import I2C
import busio
import adafruit_ssd1306

i2c = I2C(IO6,IO5)  # Initialize I2C communication using IO6 and IO5 pins

# Create a display object with 128x64 resolution and an I2C address of 0x3C
display = adafruit_ssd1306.SSD1306_I2C(128, 64, i2c, addr=0x3C)

# Clear the display
display.fill(0)
display.show()

# Write text on the display
display.text('SeeedStudio ESP32S3', 0, 0 , 1)
display.text('Code by CircuitPython!', 0, 20 , 2)
display.show()
```

2. 「Run」ボタンをクリックしてコードをアップロードします

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/14.png" /></div>

3. 最終結果

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/13.jpg" /></div>

## XIAO ESP32S3 Sense と XIAO Round Display を Sense Camera と組み合わせて使用する

### ハードウェアの準備

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Round Display for XIAO</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### ソフトウェア準備

1. XIAO ESP32S3 Sense にファームウェアをインストールします。

<div className="table-center">
  <table align="center">
    <tr>
      <th>ファームウェア</th>
      <td>
        <div className="get_one_now_container" style={{ textAlign: 'center' }}>
          <a
            className="get_one_now_item"
            href="https://github.com/djairjr/Seeed_Xiao_ESPS3_Sense_Circuitpython/tree/main/seeed_xiao_esp32s3_sense/seeed_xiao_esp32s3_sense"
            style={{ color: '#FFFFFF', fontSize: '16px', textDecoration: 'none' }}
          >
            <strong>ダウンロード ⏬</strong>
          </a>
        </div>
      </td>
    </tr>
  </table>
</div>

2. 必要なモジュールと依存関係をインストールします。

Adafruit の [circup](https://learn.adafruit.com/keep-your-circuitpython-libraries-on-devices-up-to-date-with-circup/install-circup) ツールを使用して、CircuitPython ライブラリをいつでもインストールできます。インストール後、任意のライブラリをインストールするために入力するだけです。

```linux
# install circup
pip install setuptools
pip install circup
pip install --upgrade circup
# install module to library
circup install gc9a01 adafruit_ticks 
```

### はじめに

必要なライブラリをすべてインストールした後、以下のコードをcode.pyまたはmain.pyにCIRCUITPYに入力するだけで、Round DisplayでCamera Frameを確認できます。

```python
import board
import busio
import displayio
import espcamera
import adafruit_ticks
import gc9a01
import struct

i2c = busio.I2C(board.SCL, board.SDA)
spi = busio.SPI(clock=board.SCK, MOSI=board.MOSI)
cam_i2c = busio.I2C(board.CAM_SCL, board.CAM_SDA)

tft_dc  = board.D3
tft_cs  = board.D1
tft_bl  = board.D6

display_bus = displayio.FourWire(spi, command=tft_dc, chip_select=tft_cs)
display = gc9a01.GC9A01(display_bus, width=240, height=240, rotation=0)

# Appears that this example does not use Displayio at all
# print frame directly on display_bus to be faster
# so, rotation setting not works...

main = displayio.Group()
display.root_group = main

# Camera Init
cam = espcamera.Camera(
    data_pins=board.CAM_DATA,
    external_clock_pin=board.CAM_XCLK,
    pixel_clock_pin=board.CAM_PCLK,
    vsync_pin=board.CAM_VSYNC,
    href_pin=board.CAM_HREF,
    pixel_format=espcamera.PixelFormat.RGB565,
    frame_size=espcamera.FrameSize.R240X240,
    i2c=cam_i2c,
    external_clock_frequency=20_000_000,
    framebuffer_count=2,
    grab_mode=espcamera.GrabMode.WHEN_EMPTY)

# Sending init bytes to display_bus
display_bus.send(36, struct.pack(">hh", 0, 239))
display_bus.send(42, struct.pack(">hh", 0, 239))
display_bus.send(43, struct.pack(">hh", 0, 80+239))
display.auto_refresh = False

t0 = adafruit_ticks.ticks_ms()

while True:
    frame = cam.take(1)                                                         
    if isinstance(frame, displayio.Bitmap):                                     
        display_bus.send(44, frame)                                             
        t1 = adafruit_ticks.ticks_ms()                                          
        fps = 1000 / adafruit_ticks.ticks_diff(t1, t0)
        print(f"{fps:3.1f}fps")  # typically runs at about 25fps
        t0 = t1
```

## さらに詳しく

- 関連ファイルはすべて、https://circuitpython.org/libraries から組み立てられた [Adafruit CircuitPython ライブラリバンドル](https://github.com/adafruit/Adafruit_CircuitPython_Bundle/releases/download/20230718/adafruit-circuitpython-bundle-8.x-mpy-20230718.zip) から取得されており、CircuitPython を使用してサポートされているすべてのハードウェアファイルを見つけることができます。
- "font5x8.bin" ファイルは [こちら](https://github.com/adafruit/Adafruit_CircuitPython_framebuf/blob/main/examples/font5x8.bin) から取得されています
- Round Display とカメラ用の [ファームウェア](https://github.com/djairjr/Seeed_Xiao_ESPS3_Sense_Circuitpython/tree/main/seeed_xiao_esp32s3_sense/seeed_xiao_esp32s3_sense)

## ✨ コントリビュータープロジェクト

- このプロジェクトは Seeed Studio [コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) によってサポートされています。
- [Isaac の努力](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35178340) に感謝し、あなたの作品は [展示](https://wiki.seeedstudio.com/ja/Honorary-Contributors/) されます。
- そして [Djair Guilherme](https://github.com/Seeed-Studio/wiki-documents/issues/1237#issuecomment-2295415274) にも感謝します。

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
