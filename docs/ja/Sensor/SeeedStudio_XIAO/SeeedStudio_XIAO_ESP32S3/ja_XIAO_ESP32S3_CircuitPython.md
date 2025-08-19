---
description: XIAO ESP32S3 用 CircuitPython
title: XIAO ESP32S3 プロジェクト CircuitPython
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao_esp32s3_project_circuitpython
last_update:
  date: 05/15/2025
  author: Isaac, Djair Guilherme
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# プロジェクト概要

このWikiは更新されました: https://wiki.seeedstudio.com/ja/xiao_esp32s3_with_micropython/

CircuitPythonは、物理コンピューティングプロジェクトを簡素化するため、XIAO ESP32S3に最適なプログラミング言語です。Pythonに基づいており、初心者に優しい構文を持ち、センサーやディスプレイなどのハードウェアにアクセスするためのモジュールが含まれています。CircuitPythonはすでにESP32S3チップをサポートしているため、このプロジェクトではSeeed Studio XIAO ESP32S3ボード上でCircuitPythonをコンパイルすることを試みます。

## OLEDディスプレイ付きXIAO ESP32S3

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/13.jpg" /></div>

### ハードウェア準備

ここでは、Seeed Studio XIAO ESP32S3とSeeed Studio Grove OLED Display 0.96を使用しています。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### ソフトウェア準備

ここでは、Thonny IDEソフトウェア（Windows）と関連するライブラリやファイルを使用します。

<div class="table-center">
  <table align="center">
    <tr>
        <th>Thonny IDE</th>
        <th>関連ファイル（ライブラリ）</th>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://thonny.org/" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> ダウンロード ⏬</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/related-mpy.zip" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> ダウンロード ⏬</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/2.jpg" style={{width:500, height:'auto'}}/></div>


### はじめに

#### XIAO ESP32S3 CircuitPythonファームウェアのダウンロード

[CircuitPythonファームウェア 9.1.1 および 9.20 Alpha for XIAO ESP32S3 Sense](https://github.com/djairjr/Seeed_Xiao_ESPS3_Sense_Circuitpython/tree/main/seeed_xiao_esp32s3_sense/seeed_xiao_esp32s3_sense)


#### XIAO ESP32S3ボードをブートローダーモードでPCに接続

具体的な方法は以下の通りです：

- **ステップ1**. XIAO ESP32S3のBOOTボタンを押し続けます。

- **ステップ2**. BOOTボタンを押したまま、データケーブルを使用してコンピュータに接続します。接続後にBOOTボタンを離します。

- **ステップ3**. **Blink**プログラムをアップロードして、XIAO ESP32S3の動作を確認します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/15.gif" style={{width:500, height:'auto'}}/></div>

#### Thonnyを開いてオプションを設定

1. Thonnyを起動した後、「Tools -> Options」に移動し、「Options」を選択します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/03.png" /></div>

2. 「Interpreter」オプションを選択し、「CircuitPython (generic)」を選択します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/04.png" /></div>

### CircuitPythonファームウェアをXIAO ESP32S3ボードにフラッシュ

1. Thonnyで「(esptool)」をクリックします。これにより、最新のCircuitPythonファームウェアをダウンロードしてボードにフラッシュするよう促されます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/06.png" /></div>

2. Thonnyの「(esptool)」画面で、まず正しい「Target port」を選択します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/07.png" /></div>

3. CircuitPythonファミリーを「ESP32-S3」として選択し、インストールボタンの横にある三本線のアイコンをクリックして、ダウンロードしたファームウェアを含めます。
例: (seeed_xiao_esp32s3_911.bin または seeed_xiao_esp32s3_920.bin)

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/08.png" /></div>

4. Thonnyがリセットを行った後、「Install」をクリックします。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/09.png" /></div>

5. 「Done」と表示されたら、ウィンドウを閉じることができます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/10.png" /></div>

6. PC上に「CIRCUITPY」ドライバが表示され、ボードが正常にフラッシュされたことを示します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/11.png" /></div>

#### 関連ファイル（ライブラリ）を「CIRCUITPY」ドライバに追加する

[関連ファイル（ライブラリ）](https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/related-mpy.zip)のすべてのファイルを「CIRCUITPY」ドライバにコピーします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/12.png" /></div>

:::note
「adafruit_ssd1306.mpy」ファイルと「adafruit_framebuf.mpy」ファイルは、「Seeed Studio Grove OLED Display 0.96」を使用する際に必要です。

adafruit_framebufライブラリは、テキストをレンダリングするためにfont5x8.binというフォントファイルを使用します。このファイルは、コードが実行される環境内でアクセス可能である必要があります。
:::

#### コード（IIC）を書いてアップロードし、OLEDディスプレイを実現する

1. ファイルを追加した後、`import adafruit_ssd1306`コマンドを使用してコード内でadafruit_ssd1306ライブラリをインポートできるようになり、OLEDディスプレイを駆動する環境が構成されます。以下にコードを示します：

```python
from board import *
from busio import I2C
import busio
import adafruit_ssd1306

i2c = I2C(IO6, IO5)  # IO6とIO5ピンを使用してI2C通信を初期化

# 128x64解像度とI2Cアドレス0x3Cを持つディスプレイオブジェクトを作成
display = adafruit_ssd1306.SSD1306_I2C(128, 64, i2c, addr=0x3C)

# ディスプレイをクリア
display.fill(0)
display.show()

# ディスプレイにテキストを表示
display.text('SeeedStudio ESP32S3', 0, 0, 1)
display.text('Code by CircuitPython!', 0, 20, 2)
display.show()
```

2. 「Run」ボタンをクリックしてコードをアップロードします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/14.png" /></div>

3. 最終結果

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/13.jpg" /></div>

## XIAO ESP32S3 SenseとXIAOラウンドディスプレイおよびSenseカメラの使用

### ハードウェア準備

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>ラウンドディスプレイ for XIAO</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### ソフトウェア準備

1. XIAO ESP32S3 Senseにファームウェアをインストールします。

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

Adafruitのツール[circup](https://learn.adafruit.com/keep-your-circuitpython-libraries-on-devices-up-to-date-with-circup/install-circup)を使用して、CircuitPythonライブラリをインストールできます。インストール後、以下のコマンドでライブラリをインストールします。

```linux
# circupをインストール
pip install setuptools
pip install circup
pip install --upgrade circup
# ライブラリにモジュールをインストール
circup install gc9a01 adafruit_ticks 
```

### はじめに

すべてのライブラリをインストールした後、以下のコードを`code.py`または`main.py`としてCIRCUITPYに入力し、ラウンドディスプレイでカメラフレームを表示します。

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

# この例ではDisplayioを使用せず、display_busに直接フレームを出力して高速化
# そのため、回転設定は機能しません...

main = displayio.Group()
display.root_group = main

# カメラの初期化
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

# display_busに初期化バイトを送信
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
        print(f"{fps:3.1f}fps")  # 通常約25fpsで動作
        t0 = t1
```

## その他

- 関連ファイルはすべて、組み立て済みの [Adafruit CircuitPython ライブラリバンドル](https://github.com/adafruit/Adafruit_CircuitPython_Bundle/releases/download/20230718/adafruit-circuitpython-bundle-8.x-mpy-20230718.zip) から取得したもので、https://circuitpython.org/libraries からダウンロードできます。CircuitPython を使用してサポートされているすべてのハードウェアファイルを見つけることができます。
- "font5x8.bin" ファイルは [こちら](https://github.com/adafruit/Adafruit_CircuitPython_framebuf/blob/main/examples/font5x8.bin) から取得できます。
- ラウンドディスプレイとカメラ用の [ファームウェア](https://github.com/djairjr/Seeed_Xiao_ESPS3_Sense_Circuitpython/tree/main/seeed_xiao_esp32s3_sense/seeed_xiao_esp32s3_sense)。

## ✨ 貢献者プロジェクト

- このプロジェクトは Seeed Studio の [Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) によってサポートされています。
- [Isaac の尽力](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35178340) に感謝します。あなたの作業は [展示されます](https://wiki.seeedstudio.com/ja/Honorary-Contributors/)。
- また、[Djair Guilherme](https://github.com/Seeed-Studio/wiki-documents/issues/1237#issuecomment-2295415274) にも感謝します。

## 技術サポート & 製品ディスカッション

私たちの製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>