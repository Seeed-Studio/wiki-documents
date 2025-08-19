---
description: ESP32C3 用 MicroPython
title: ESP32C3 用 MicroPython
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/XIAO_ESP32C3_MicroPython
last_update:
  date: 05/15/2025
  author: Matthew and Zachay
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# XIAO ESP32C3 Wi-Fi トラッカーを MicroPython で使用する

この Wiki は更新されています: https://wiki.seeedstudio.com/ja/xiao_esp32c3_with_micropython/

このチュートリアルでは、XIAO ESP32C3 を MicroPython で利用する方法について簡潔に説明します。さらに、Wi-Fi 信号強度トラッカーの実用的な応用についても探ります。このトラッカーは、高速で高品質な家庭ネットワークを構築する際に非常に役立ちます。
その結果、Wi-Fi トラッカーの指示に従うことで、Wi-Fi 信号増幅器の配置を効果的に最適化し、最適な信号範囲を確保することができます。

<div style={{textAlign:'center'}}><iframe width={560} height={315} src="https://www.youtube.com/embed/7n72Knh4IIM" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen /></div>

## ハードウェア準備

ここでは、Seeed Studio XIAO ESP32C3 と XIAO 用拡張ボードベースをハードウェアとして使用します。

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32C3</th>
        <th>XIAO 用拡張ボードベース</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:'auto', height:200}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:'auto', height:200}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## ソフトウェア準備

<div class="table-center">
  <table align="center">
    <tr>
        <th>Thonny IDE</th>
        <th>Esptool</th>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://thonny.org/" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> ダウンロード ⏬</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://github.com/espressif/esptool" target="_blank" rel="noopener noreferrer">
              <strong><span><font color={'FFFFFF'} size={"4"}> Git clone はこちら ⏬</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

:::info
使用する前に、ここで使用しているソフトウェア/ファームウェアが ESP32C3 チップ用に設計されていることを明記する必要があります。そのため、ピンを使用する際には、ボード上のピンではなく、汎用入出力 (GPIO) を使用することを確認してください。<br/>
例えば、左側の最初の列のピンを使用する場合、それが `GPIO2` であることを確認し、`A0` や `D0` ではないことを確認してください。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/pin_map-2.png" style={{width:500, height:'auto'}}/></div>
:::

## はじめに

XIAO ESP32C3 を MicroPython でプログラム可能にするには、「PC 上での MicroPython 設定」と「XIAO ESP32C3 上での MicroPython 設定」の2つのステップが必要です。

セットアップが完了したら、各デモのコードを順にコピーして実行することで、目的を達成できます。

### PC 上での MicroPython 設定

#### Thonny IDE のインストール (Windows)

以下の手順に従ってください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython1.png" /></div>

#### esptool を使用したファームウェアの更新

1. ファイルの保存場所を開きます。

``` git clone https://github.com/espressif/esptool.git ```

2. 最新のファームウェアをダウンロードします（このチュートリアルでは v1.20.0 (2023-04-26) .bin を使用）。

``` https://micropython.org/download/esp32c3/```

3. 最新のファームウェアを保存場所に配置し、CMD でそのファイルを開きます。

```your own file location\esptool-master\esptool```

4. 以下のコマンドを CMD に入力してファームウェアをフラッシュします（フラッシュする前にブートローダーモードに入ります）。

```cpp
esptool.exe --chip esp32c3 --port COM10 --baud 921600 --before default_reset --after hard_reset --no-stub  write_flash --flash_mode dio --flash_freq 80m 0x0 esp32c3-usb-20230426-v1.20.0.bin
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython2.png" /></div>

:::note
Linux を使用している場合は、"esptool.exe" を "esptool.py" に変更してください。また、"COM10" を自身のシリアルポートに変更し、"esp32c3-usb-20230426-v1.20.0.bin" をダウンロードした最新のファームウェア名に変更してください。
:::

### XIAO ESP32C3 上での MicroPython 設定

1. XIAO ESP32C3 を接続し、Thonny を開いて右下をクリックしてインタープリタを設定します。

2. インタープリタを選択 - Micropython (ESP32) を選び、ポートを設定 >>> OK をクリックします。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython3.png" /></div>

注意: すべてが正常に動作していれば、シェルに出力が表示されます。

#### 必要なライブラリのインストール

"Tools" をクリック >>> "Management Packages" をクリック >>> ライブラリ名を入力 >>> "Search micropython-lib and PyPl" をクリック

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython4.png" /></div>

#### スクリプトの実行とボードへのフラッシュ

1. コーディングが完了したら、緑色のボタンをクリックしてスクリプトを実行します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython5.png" /></div>

2. ファイルを "boot.py" としてボードに保存することで、コードをボードにフラッシュします。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython6.png" /></div>

### デモ 1: OLED スクリーンを点灯する

#### 1. Hello Seeder!

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython7.png" /></div>

```cpp
import time
from machine import Pin, SoftI2C
import ssd1306
import math

# ESP8266 ピン割り当て
i2c = SoftI2C(scl=Pin(7), sda=Pin(6))  # 接続に基づいてピン番号を調整してください
oled_width = 128
oled_height = 64
oled = ssd1306.SSD1306_I2C(oled_width, oled_height, i2c)

oled.fill(0)  # 画面をクリア
oled.text("Hello, Seeder!", 10, 15)
oled.text("/////", 30, 40)
oled.text("(`3`)y", 30, 55)
oled.show()  # テキストを表示
```

#### 2. 動的なローディング効果

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython8.png" /></div>

```cpp
import time
from machine import Pin, SoftI2C
import ssd1306
import math

# ESP8266 ピン割り当て
i2c = SoftI2C(scl=Pin(7), sda=Pin(6))  # 接続に基づいてピン番号を調整してください
oled_width = 128
oled_height = 64
oled = ssd1306.SSD1306_I2C(oled_width, oled_height, i2c)

center_x = oled_width // 2
center_y = oled_height // 2
square_size = 6  # 各四角形のサイズ
num_squares = 12  # 四角形の数
angle_increment = 2 * math.pi / num_squares

while True:
    oled.fill(0)  # 画面をクリア
    
    for i in range(num_squares):
        angle = i * angle_increment
        x = int(center_x + (center_x - square_size-30) * math.cos(angle))
        y = int(center_y + (center_x - square_size-30) * math.sin(angle))
        
        # すべての四角形を描画
        for j in range(num_squares):
            angle_j = j * angle_increment
            x_j = int(center_x + (center_x - square_size-30) * math.cos(angle_j))
            y_j = int(center_y + (center_x - square_size-30) * math.sin(angle_j))
            
            oled.fill_rect(x_j, y_j, square_size, square_size, 1)  # 四角形を描画
        
        oled.fill_rect(x, y, square_size, square_size, 0)  # 現在の四角形を消去
        oled.show()
        time.sleep_ms(100)  # 次の反復まで一時停止

```

### デモ 2: ブザーを鳴らす

#### 1. 音を鳴らす

```cpp
import time
from time import sleep
import machine
from machine import Pin, SoftI2C


# ブザー設定

buzzer_pin = machine.Pin(5, machine.Pin.OUT)
buzzer = machine.PWM(buzzer_pin)
buzzer.freq(1047)

# ブザー動作

while True:

    buzzer.duty(10)
    time.sleep(1)
    buzzer.duty(0)
    time.sleep(1)
```

#### 2. 曲  He's a pirate  を演奏する

```cpp
import machine
import time

# ブザー設定
buzzer_pin = machine.Pin(5, machine.Pin.OUT)
buzzer = machine.PWM(buzzer_pin)
buzzer.freq(1047)

# 各音符の周波数を定義
NOTE_C4 = 262
NOTE_D4 = 294
NOTE_E4 = 330
NOTE_F4 = 349
NOTE_G4 = 392
NOTE_A4 = 440
NOTE_B4 = 494
NOTE_C5 = 523
NOTE_D5 = 587
NOTE_E5 = 659
NOTE_F5 = 698
NOTE_G5 = 784
NOTE_A5 = 880
NOTE_B5 = 988

# 曲の音符、0は休符/パルス
notes = [
    NOTE_E4, NOTE_G4, NOTE_A4, NOTE_A4, 0,
    NOTE_A4, NOTE_B4, NOTE_C5, NOTE_C5, 0,
    NOTE_C5, NOTE_D5, NOTE_B4, NOTE_B4, 0,
    NOTE_A4, NOTE_G4, NOTE_A4, 0,

    NOTE_E4, NOTE_G4, NOTE_A4, NOTE_A4, 0,
    NOTE_A4, NOTE_B4, NOTE_C5, NOTE_C5, 0,
    NOTE_C5, NOTE_D5, NOTE_B4, NOTE_B4, 0,
    NOTE_A4, NOTE_G4, NOTE_A4, 0,

    NOTE_E4, NOTE_G4, NOTE_A4, NOTE_A4, 0,
    NOTE_A4, NOTE_C5, NOTE_D5, NOTE_D5, 0,
    NOTE_D5, NOTE_E5, NOTE_F5, NOTE_F5, 0,
    NOTE_E5, NOTE_D5, NOTE_E5, NOTE_A4, 0,

    NOTE_A4, NOTE_B4, NOTE_C5, NOTE_C5, 0,
    NOTE_D5, NOTE_E5, NOTE_A4, 0,
    NOTE_A4, NOTE_C5, NOTE_B4, NOTE_B4, 0,
    NOTE_C5, NOTE_A4, NOTE_B4, 0,

    NOTE_A4, NOTE_A4,
    # 最初の部分の繰り返し
    NOTE_A4, NOTE_B4, NOTE_C5, NOTE_C5, 0,
    NOTE_C5, NOTE_D5, NOTE_B4, NOTE_B4, 0,
    NOTE_A4, NOTE_G4, NOTE_A4, 0,

    NOTE_E4, NOTE_G4, NOTE_A4, NOTE_A4, 0,
    NOTE_A4, NOTE_B4, NOTE_C5, NOTE_C5, 0,
    NOTE_C5, NOTE_D5, NOTE_B4, NOTE_B4, 0,
    NOTE_A4, NOTE_G4, NOTE_A4, 0,

    NOTE_E4, NOTE_G4, NOTE_A4, NOTE_A4, 0,
    NOTE_A4, NOTE_C5, NOTE_D5, NOTE_D5, 0,
    NOTE_D5, NOTE_E5, NOTE_F5, NOTE_F5, 0,
    NOTE_E5, NOTE_D5, NOTE_E5, NOTE_A4, 0,

    NOTE_A4, NOTE_B4, NOTE_C5, NOTE_C5, 0,
    NOTE_D5, NOTE_E5, NOTE_A4, 0,
    NOTE_A4, NOTE_C5, NOTE_B4, NOTE_B4, 0,
    NOTE_C5, NOTE_A4, NOTE_B4, 0,

    # 繰り返し終了

    NOTE_E5, 0, 0, NOTE_F5, 0, 0,
    NOTE_E5, NOTE_E5, 0, NOTE_G5, 0, NOTE_E5, NOTE_D5, 0, 0,
    NOTE_D5, 0, 0, NOTE_C5, 0, 0,
    NOTE_B4, NOTE_C5, 0, NOTE_B4, 0, NOTE_A4,

    NOTE_E5, 0, 0, NOTE_F5, 0, 0,
    NOTE_E5, NOTE_E5, 0, NOTE_G5, 0, NOTE_E5, NOTE_D5, 0, 0,
    NOTE_D5, 0, 0, NOTE_C5, 0, 0,
    NOTE_B4, NOTE_C5, 0, NOTE_B4, 0, NOTE_A4
]

# 曲の各音符の長さ（ミリ秒単位）
# songSpeed = 1.0 の場合、4分音符は250ミリ秒
durations = [
    125, 125, 250, 125, 125,
    125, 125, 250, 125, 125,
    125, 125, 250, 125, 125,
    125, 125, 375, 125,

    125, 125, 250, 125, 125,
    125, 125, 250, 125, 125,
    125, 125, 250, 125, 125,
    125, 125, 375, 125,

    125, 125, 250, 125, 125,
    125, 125, 250, 125, 125,
    125, 125, 250, 125, 125,
    125, 125, 125, 250, 125,

    125, 125, 250, 125, 125,
    250, 125, 250, 125,
    125, 125, 250, 125, 125,
    125, 125, 375, 375,

    250, 125,
    # 最初の部分の繰り返し
    125, 125, 250, 125, 125,
    125, 125, 250, 125, 125,
    125, 125, 375, 125,

    125, 125, 250, 125, 125,
    125, 125, 250, 125, 125,
    125, 125, 250, 125, 125,
    125, 125, 375, 125,

    125, 125, 250, 125, 125,
    125, 125, 250, 125, 125,
    125, 125, 250, 125, 125,
    125, 125, 125, 250, 125,

    125, 125, 250, 125, 125,
    250, 125, 250, 125,
    125, 125, 250, 125, 125,
    125, 125, 375, 375,
    # 繰り返し終了

    250, 125, 375, 250, 125, 375,
    125, 125, 125, 125, 125, 125, 125, 125, 375,
    250, 125, 375, 250, 125, 375,
    125, 125, 125, 125, 125, 500,

    250, 125, 375, 250, 125, 375,
    125, 125, 125, 125, 125, 125, 125, 125, 375,
    250, 125, 375, 250, 125, 375,
    125, 125, 125, 125, 125, 500
]

def play_song():
    total_notes = len(notes)
    for i in range(total_notes):
        current_note = notes[i]
        wait = durations[i]
        if current_note != 0:
            buzzer.duty(512)  # 音を出すためのデューティサイクルを設定
            buzzer.freq(current_note)  # 音符の周波数を設定
        else:
            buzzer.duty(0)  # 音を消す
        time.sleep_ms(wait)
        buzzer.duty(0)  # 音を消す
while True:
    # 曲を再生
    play_song()
```

### デモ 3: Wi-Fi に接続

#### 1. Wi-Fi に接続

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython8a.png" /></div>


```cpp
import network
import urequests
import utime as time

# ネットワーク設定
wifi_ssid = "あなたのSSID"
wifi_password = "あなたのパスワード"

def scan_and_connect():
    station = network.WLAN(network.STA_IF)
    station.active(True)

    print("Wi-Fi ネットワークをスキャン中です。お待ちください...")
    for ssid, bssid, channel, RSSI, authmode, hidden in station.scan():
        print("* {:s}".format(ssid))
        print("   - チャンネル: {}".format(channel))
        print("   - RSSI: {}".format(RSSI))
        print("   - BSSID: {:02x}:{:02x}:{:02x}:{:02x}:{:02x}:{:02x}".format(*bssid))
        print()

    while not station.isconnected():
        print("接続中...")
        station.connect(wifi_ssid, wifi_password)
        time.sleep(10)

    print("接続完了!")
    print("私のIPアドレス:", station.ifconfig()[0])
```

# 関数を実行する
scan_and_connect()

#### 2. ニューヨーク時間をオンラインで取得

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython9.png" /></div>


```cpp
from machine import Pin, SoftI2C
import ssd1306
from time import sleep
import time
import network
import urequests
import ujson

# ESP32 ピン割り当て
# i2c = SoftI2C(scl=Pin(22), sda=Pin(21))

# ESP8266 ピン割り当て
i2c = SoftI2C(scl=Pin(7), sda=Pin(6))  # 接続に基づいてピン番号を調整してください

oled_width = 128
oled_height = 64
oled = ssd1306.SSD1306_I2C(oled_width, oled_height, i2c)

station = network.WLAN(network.STA_IF)
station.active(True)

# ネットワーク設定
wifi_ssid = "あなたのWiFi SSID"
wifi_password = "あなたのWiFiパスワード"
url = "http://worldtimeapi.org/api/timezone/America/New_York"

print("WiFiネットワークをスキャン中です。しばらくお待ちください...")
authmodes = ['Open', 'WEP', 'WPA-PSK' 'WPA2-PSK4', 'WPA/WPA2-PSK']
for (ssid, bssid, channel, RSSI, authmode, hidden) in station.scan():
    print("* {:s}".format(ssid))
    print("   - チャンネル: {}".format(channel))
    print("   - RSSI: {}".format(RSSI))
    print("   - BSSID: {:02x}:{:02x}:{:02x}:{:02x}:{:02x}:{:02x}".format(*bssid))
    print()

# WiFiアクセスポイントへの接続を継続的に試みる
while not station.isconnected():
    # WiFiアクセスポイントへの接続を試みる
    print("接続中...")
    station.connect(wifi_ssid, wifi_password)
    time.sleep(10)

# 接続詳細を表示
print("接続完了!")
print("私のIPアドレス:", station.ifconfig()[0])


while True:
    # SSLなしのウェブでHTTP GETリクエストを実行
    response = urequests.get(url)
    # リクエストが成功したか確認
    if response.status_code == 200:
        # JSONレスポンスを解析
        data = ujson.loads(response.text)
        # ニューヨークの "datetime" フィールドを抽出
        ny_datetime = data["datetime"]
        # 日付と時間のコンポーネントを分割
        date_part, time_part = ny_datetime.split("T")
        # 時間の最初の2桁のみ取得
        time_part = time_part[:8]
        # タイムゾーンを取得
        timezone = data["timezone"]
        
        # OLEDディスプレイをクリア
        oled.fill(0)
        
        # ニューヨークの日付と時間を別々の行に表示
        oled.text("New York Date:", 0, 0)
        oled.text(date_part, 0, 10)
        oled.text("New York Time:", 0, 20)
        oled.text(time_part, 0, 30)
        oled.text("Timezone:", 0, 40)
        oled.text(timezone, 0, 50)
        # ディスプレイを更新
        oled.show()
    else:
        oled.text("ニューヨークの時間取得に失敗しました!")
        # ディスプレイを更新
        oled.show()
```

### 最終: Wi-Fi信号強度トラッカー

このプロジェクトの主なタスクです。このコードを使用すると、簡単なデバイスで自宅のWi-Fi信号を追跡できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython10.jpg" /></div>

```cpp
import network
import time
from time import sleep
import machine
from machine import Pin, SoftI2C
import ssd1306
import math

# ESP32C3 ピン割り当て
i2c = SoftI2C(scl=Pin(7), sda=Pin(6))  # 接続に基づいてピン番号を調整してください
oled_width = 128
oled_height = 64
oled = ssd1306.SSD1306_I2C(oled_width, oled_height, i2c)

# ネットワーク設定
wifi_ssid = "あなたのSSID"
wifi_password = "あなたのパスワード"
machine.freq(160000000)  # CPU周波数を160 MHzに設定（ESP8266特有）
oled.text("起動中...", 0, 0)
oled.show()

station = network.WLAN(network.STA_IF)
station.active(True)
station.connect(wifi_ssid, wifi_password)
time.sleep(1)

while not station.isconnected():
    time.sleep(1)

oled.fill(0)
oled.text("接続中", 0, 0)
oled.text(wifi_ssid, 0, 20)
oled.show()
time.sleep(2)

oled.fill(0)
ip_address = station.ifconfig()[0]  # IPアドレスを取得
oled.text("接続完了!", 0, 0)
oled.text("IPアドレス:", 0, 20)
oled.text(ip_address, 0, 40)
oled.show()
time.sleep(2)

# ブザー設定
buzzer_pin = machine.Pin(5, machine.Pin.OUT)
buzzer = machine.PWM(buzzer_pin)
buzzer.freq(1047)
buzzer.duty(0)

center_x = oled_width // 2
center_y = oled_height // 2
square_size = 6  # 各四角形のサイズ
num_squares = 12  # 四角形の数
angle_increment = 2 * math.pi / num_squares

x_pos = [12, 38, 64, 90]
statuses = ["弱い", "普通", "良好", "非常に良好"]

def calculate_block_count(rssi):
    # RSSI値に基づいてブロック数を決定
    if -80 <= rssi < -60:
        return 1
    elif -60 <= rssi < -40:
        return 2
    elif -40 <= rssi < -20:
        return 3
    elif -20 <= rssi <= 10:
        return 4

def draw_blocks(count):
    for i in range(count):
        y_pos = 50 - calculate_block_height(i)
        oled.fill_rect(x_pos[i], y_pos, 24, calculate_block_height(i), 1)
    for i in range(count, 4):  # 未使用エリアをクリア
        y_pos = 50 - calculate_block_height(i)
        oled.fill_rect(x_pos[i], y_pos, 24, calculate_block_height(i), 0)

def calculate_block_height(index):
    return 10 * (index + 1)

loop_count = 0  # ループカウントを初期化

while loop_count < 2:  # ループを2回実行
    oled.fill(0)  # 画面をクリア
    
    for i in range(num_squares):
        angle = i * angle_increment
        x = int(center_x + (center_x - square_size-30) * math.cos(angle))
        y = int(center_y + (center_x - square_size-30) * math.sin(angle))
        
        # 全ての四角形を描画
        for j in range(num_squares):
            angle_j = j * angle_increment
            x_j = int(center_x + (center_x - square_size-30) * math.cos(angle_j))
            y_j = int(center_y + (center_x - square_size-30) * math.sin(angle_j))
            
            oled.fill_rect(x_j, y_j, square_size, square_size, 1)  # 四角形を描画
        
        oled.fill_rect(x, y, square_size, square_size, 0)  # 現在の四角形を消去
        oled.show()
        time.sleep_ms(100)  # 次の反復まで一時停止
        
    loop_count += 1  # ループカウントを増加

oled.fill(0)  # ループ終了後に画面をクリア
oled.show()

while True:
    oled.fill(0)
    station = network.WLAN(network.STA_IF)
    time.sleep(0.1)
    rssi = station.status('rssi')
    rssi_duty = 160 + 2 * int(rssi)
    rssi_duty_2 = int(rssi_duty / 2)
    rssi_abs = abs(int(rssi)) / 100
 
    block_count = calculate_block_count(rssi)
    status = statuses[block_count - 1]  # ブロック数に基づいてステータステキストを取得
    
    draw_blocks(block_count)
    
    oled.text(status, 11, 56)
    
    oled.text("RSSI:", 0, 0)
    oled.text(str(rssi), 40, 0)

    # ディスプレイを更新
    oled.show()

    buzzer.duty(rssi_duty)
    time.sleep(rssi_abs)
    buzzer.duty(0)
    time.sleep(rssi_abs)
    buzzer.duty(rssi_duty_2)
    time.sleep(rssi_abs)
    buzzer.duty(0)
    time.sleep(rssi_abs)

```

## さらに

- XIAO ESP32C3にファームウェアを書き込む際には、MAC OSに対応したThonnyに統合されたesptoolを使用することもできます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython11.png" /></div>

## ✨ コントリビュータープロジェクト

- このプロジェクトはSeeed Studio [コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35177053)によってサポートされています。
- [Zacharyの努力](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=35177053)に感謝します。あなたの作業は[展示されます](https://wiki.seeedstudio.com/ja/Honorary-Contributors/)。

## 技術サポートと製品ディスカッション

私たちの製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>