---
title: Seeed Studio XIAO ESP32-C5 と MicroPython
description: |
keywords:
  - xiao
  - esp32c5
  - micropython
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_1.webp
slug: /ja/xiao_esp32c5_with_micropyhton
last_update:
  date: 12/22/2025
  author: Zeller
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[MicroPython](https://github.com/micropython/micropython/wiki) は、パフォーマンスが重要なコードに対してネイティブコード生成をサポートする Python インタープリターです。マイクロコントローラーとリソース制約のあるシステム向けに最適化された、Python 3.6+ のコア機能のサブセットを提供します。CPython とは異なり、その違いについては [MicroPython vs CPython differences](https://github.com/micropython/micropython/wiki/Differences) ページで詳しく読むことができます。

## XIAO ESP32-C5 で MicroPython を使用する

次に、Windows オペレーティングシステムを基に、**XIAO ESP32-C5** で **MicroPython** を使用し、[Thonny IDE](https://thonny.org/) でプログラミングする方法をガイドします。

### ハードウェアの準備

開始する前に、XIAO ESP32-C5 開発ボードを準備する必要があります。

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### MicroPython ファームウェアのデプロイ

次に、XIAO ESP32-C5 に MicroPython ファームウェアをデプロイする方法をガイドします。

#### esptool のインストール

ESP32-C5 用の MicroPython ファームウェアをインストールする前に、まず [esptool](https://docs.espressif.com/projects/esptool/en/latest/esp32c5/) をインストールする必要があります。esptool.py を使用して開発ボードのファームウェアを消去およびフラッシュします。<br/>

任意のフォルダでターミナルを開き、以下のコマンドを入力します。

```bash
pip install esptool
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_1.png" style={{width:800, height:'auto'}}/></div>

#### 消去

:::tip
Windows オペレーティングシステムでは、インストールされたプログラムが `esptool.py` から `esptool` に名前変更されている場合があります。
:::

**XIAO ESP32-C5** に初めて MicroPython をインストールする場合は、以下のコマンドを使用してまず Flash を消去します。<br/>

```bash
esptool.py eraase_flash
```

:::tip
`esptool.py` は ESP32 を搭載したシリアルポートを自動的に検出しようとします。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_2.png" style={{width:800, height:'auto'}}/></div><br/>

 しかし、これが失敗したり、コンピューターに複数の Espressif ベースのデバイスが接続されている場合は、ターゲットシリアルポートの名前と共に --port オプションを渡します。例：

```bash
esptool.py --port PORTNAME erase_flash
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_3.png" style={{width:800, height:'auto'}}/></div><br/>

#### フラッシュ

**ステップ 1.** リンクをクリックし、ESP32-C5 用の適切なバージョンの MicroPython ファームウェアを選択してダウンロードします。ここでは v1.27.0 バージョンを選択しています。[ESP32_GENERIC_C5 MicroPython](https://micropython.org/download/ESP32_GENERIC_C5/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_4_1.png" style={{width:800, height:'auto'}}/></div><br/>

**ステップ 2.** ファームウェアをボードにデプロイし、アドレス 0x2000 から開始します。

ファームウェアを見失わないように、ダウンロードした MicroPython ファームウェアを別のフォルダに配置し、このフォルダで右クリックしてターミナルを開くことをお勧めします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_5.png" style={{width:800, height:'auto'}}/></div><br/>

以下のコマンドを入力し、`ESP32_BOARD_NAME-DATE-VERSION.bin` を `ESP32_GENERIC_C5-20251209-v1.27.0.bin` に置き換えます。

```bash
esptool.py --baud 460800 write_flash 0x2000 ESP32_BOARD_NAME-DATE-VERSION.bin
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_6.png" style={{width:800, height:'auto'}}/></div><br/>

esptool.py がシリアルポートを自動検出できない場合は、代わりにコマンドラインで明示的に渡すことができます。

```bash
esptool.py --port PORTNAME --baud 460800 write_flash 0x2000 ESP32_BOARD_NAME-DATE-VERSION.bin
```

- Windows では、ポート名は通常 `COM4` のようになります。
- Linux では、ポート名は通常 `/dev/ttyUSB` または `/dev/ttyACM0` のようになります。
- Mac では、ポート名は通常 `/dev/cu.usbmodem01` のようになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_7.png" style={{width:800, height:'auto'}}/></div><br/>

:::tip
フラッシュが開始されて途中で失敗する場合は、`--baud 460800` オプションを削除して、より遅いデフォルト速度でフラッシュしてみてください。
:::

### [Thonny IDE](https://thonny.org/) のインストール

インストールに適したバージョンを選択してください。ここでは Windows システムにインストールしているため、Windows バージョンを選択しました。

希望する Python バージョンの指示に従ってください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/thonny_ide_1.png" style={{width:800, height:'auto'}}/></div>

その後、設定のデフォルト手順に従うだけです。

### LED 点滅の例

ここでは、Thonny IDE で MicroPython を使用して XIAO ESP32-C5 の L LED を点灯させる方法を示します。

#### **ステップ 1.** インタープリター設定

- Thonny IDE を開き、インターフェースの右下角をクリックして **Configure interpreter** オプションを選択します。MicroPython (generic) とポートを選択します

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_8.png" style={{width:800, height:'auto'}}/></div><br/>

接続が成功すると、下のシェルウィンドウに MicroPython ファームウェアバージョン情報が出力されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_9.png" style={{width:800, height:'auto'}}/></div><br/>

#### **ステップ 2.** 新しい led_blink.py ファイル

- 左上の **File** -> **New** をクリックして新しいファイルを作成し、**Ctrl + S** を押して led_blink と名前を付けてコンピューターに保存します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_10.png" style={{width:400, height:'auto'}}/></div><br/>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_11.png" style={{width:400, height:'auto'}}/></div><br/>

- 左上の **View** -> **Files** をクリックしてチェックを入れ（横に **√** が表示されます）、保存されたファイルの場所を表示するウィンドウが左側に表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_12.png" style={{width:400, height:'auto'}}/></div><br/>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_13_1.png" style={{width:600, height:'auto'}}/></div><br/>

#### **ステップ 3.** サンプルコードの記述

XIAO ESP32-C5 の L LED については、対応するピンは GPIO27 で、ローレベル信号で点灯します。

- サンプルコードを `led_blink.py` ファイルにコピーします。

```py
from machine import Pin
import time

# Define GPIO27
led = Pin(27, Pin.OUT)

while True:
    # Low-level illumination
    led.value(0)
    print("LED ON")
    time.sleep(1) # Wait for 1 second

    # High-level extinction
    led.value(1)
    print("LED OFF")
    time.sleep(1) 
```

#### **ステップ 4.** コードの実行

- 右上に表示されているアイコンをクリックするか、F5 を押してコードを実行すると、LED 情報が印刷されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_14_1.png" style={{width:600, height:'auto'}}/></div><br/>

- オンボードの L LED が 1 秒間隔で点滅します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/upload_2.gif" style={{width:400, height:'auto'}}/></div>

### 5 GHz Wi-Fi 接続の例

XIAO ESP-C5 は 2.4 GHz & 5 GHz デュアルバンド Wi-Fi 6 をサポートしています。この例では、5 GHz Wi-Fi ネットワークに接続する効果を実演します。

- `wifi_connect.py` という名前の新しいファイルを作成し、以下のサンプルコードをコピーします。

```py
import network
import time


def connect_wifi(ssid, password):
    # Create a Station interface (STA_IF = client mode, connects to a router/AP)
    wlan = network.WLAN(network.STA_IF)

    # If already connected, return immediately
    if wlan.isconnected():
        print("Already connected before, skipping connection step.")
        print("Network config:", wlan.ifconfig())
        return True

    # Enable the Wi-Fi interface
    wlan.active(True)

    print(f"Connecting to network: {ssid} ...")
    wlan.connect(ssid, password)

    # Wait for connection with a timeout (e.g., 10 seconds)
    max_wait = 10
    while max_wait > 0:
        if wlan.isconnected():
            break
        max_wait -= 1
        print("Waiting for connection...")
        time.sleep(1)

    # Check connection result
    if wlan.isconnected():
        print("Connected successfully!")
        print("Network config (IP/Mask/Gateway/DNS):", wlan.ifconfig())

        # led.value(0)  # If you want to turn on an LED after connection succeeds, add code here
        return True
    else:
        print("Connection failed. Please check SSID or password.")
        return False


# ==========================================
# Main Program
# ==========================================

# Fill in your Wi-Fi SSID and password here
SSID = "YourWiFiName"
PASSWORD = "YourWiFiPassword"

# Call the function
connect_wifi(SSID, PASSWORD)
```

- 環境内の5GHz WiFiのSSIDとPASSWORDを入力し、コードを実行すると、接続情報が印刷されます。

:::tip
新しいサンプルコードを実行する前に、左上の**Stop**アイコンをクリックするか、**Ctrl + F2**を押して前の実行環境を終了する必要があります。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_15.png" style={{width:600, height:'auto'}}/></div><br/>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_6.png" style={{width:600, height:'auto'}}/></div><br/>

これにより、**XIAO ESP32-C5**が5GHz WiFiネットワークに接続することが可能であることが証明されます。

### BLE サンプル

このサンプルでは、**XIAO ESP32-C5**のBLE機能を紹介し、nRF Connect Appを使用してデバイスを発見し接続する方法を実演します。

- `BLE_connect.py`という名前の新しいファイルを作成し、以下のサンプルコードをコピーしてください。

<details>

<summary>BLE接続のリファレンスコード</summary>

```py
import bluetooth
import random
import struct
import time
from machine import Pin
from micropython import const

# --- Configuration ---
# Define the LED pin (Using GPIO 27 as per your previous request)
# Active LOW: 0 = On, 1 = Off
LED_PIN = 27
DEVICE_NAME = "XIAO ESP32-C5-BLE"

# --- BLE Constants (UUIDs) ---
# We use standard UUIDs for simplicity, but you can use 128-bit custom UUIDs.
# 0x181A is "Environmental Sensing" Service
_IRQ_CENTRAL_CONNECT = const(1)
_IRQ_CENTRAL_DISCONNECT = const(2)
_IRQ_GATTS_WRITE = const(3)

_FLAG_READ = const(0x0002)
_FLAG_WRITE = const(0x0008)
_FLAG_NOTIFY = const(0x0010)

# Define a Service with one Characteristic (Read/Write/Notify)
# Service UUID: 0x181A
# Characteristic UUID: 0x2A6E (Temperature - just as an example)
_UART_UUID = bluetooth.UUID(0x181A)
_UART_TX = (
    bluetooth.UUID(0x2A6E),
    _FLAG_READ | _FLAG_WRITE | _FLAG_NOTIFY,
)
_UART_SERVICE = (
    _UART_UUID,
    (_UART_TX,),
)

# --- Helper: Advertising Payload Generator ---
def advertising_payload(limited_disc=False, br_edr=False, name=None, services=None, appearance=0):
    payload = bytearray()

    def _append(adv_type, value):
        nonlocal payload
        payload += struct.pack("BB", len(value) + 1, adv_type) + value

    _append(
        0x01,  # Flags
        struct.pack("B", (0x02 if not limited_disc else 0x01) | (0x04 if not br_edr else 0x00)),
    )

    if name:
        _append(0x09, name)  # Complete Local Name

    if services:
        for uuid in services:
            b = bytes(uuid)
            if len(b) == 2:
                _append(0x03, b)  # 16-bit Service Class UUIDs
            elif len(b) == 16:
                _append(0x06, b)  # 128-bit Service Class UUIDs

    if appearance:
        _append(0x19, struct.pack("<h", appearance))

    return payload

# --- BLE Class ---
class BLEPeripheral:
    def __init__(self, ble, name="ESP32"):
        self._ble = ble
        self._ble.active(True)
        self._ble.irq(self._irq)

        # Register services
        ((self._handle_tx,),) = self._ble.gatts_register_services((_UART_SERVICE,))

        self._connections = set()
        self._payload = advertising_payload(name=name, services=[_UART_UUID])

        # Initialize LED
        self._led = Pin(LED_PIN, Pin.OUT)
        self._led.value(1) # Turn OFF initially (High)

        self._advertise()
        print(f"BLE Active. Device Name: {name}")

    def _irq(self, event, data):
        # Track connections so we can send notifications
        if event == _IRQ_CENTRAL_CONNECT:
            conn_handle, _, _ = data
            print(f"New connection: {conn_handle}")
            self._connections.add(conn_handle)
            self._led.value(0) # Turn LED ON (Active Low)

        elif event == _IRQ_CENTRAL_DISCONNECT:
            conn_handle, _, _ = data
            print(f"Disconnected: {conn_handle}")
            self._connections.remove(conn_handle)
            self._led.value(1) # Turn LED OFF
            # Start advertising again to allow new connections
            self._advertise()

        elif event == _IRQ_GATTS_WRITE:
            conn_handle, value_handle = data
            value = self._ble.gatts_read(value_handle)
            if value_handle == self._handle_tx:
                print(f"Received write request: {value}")
                # You can parse 'value' here to control hardware

    def update_value(self, data):
        # Write the local value to the handle
        self._ble.gatts_write(self._handle_tx, data)
        # Notify all connected centrals
        for conn_handle in self._connections:
            self._ble.gatts_notify(conn_handle, self._handle_tx, data)

    def _advertise(self):
        self._ble.gap_advertise(100, adv_data=self._payload)
        print("Advertising...")

# --- Main Execution ---
def demo():
    ble = bluetooth.BLE()
    p = BLEPeripheral(ble, name=DEVICE_NAME)

    counter = 0

    try:
        while True:
            # Only update value if connected, to save power/cpu (optional)
            if p._connections:
                # Create a string data: "Count: 1", "Count: 2"...
                data_str = f"Count: {counter}"
                print(f"Sending notification: {data_str}")

                # Send data (must be bytes)
                p.update_value(data_str.encode('utf-8'))

                counter += 1

            time.sleep(2) # Wait 2 seconds

    except KeyboardInterrupt:
        print("Stopping...")
        ble.active(False)

if __name__ == "__main__":
    demo()
```

</details>

- その後、コードを実行し、スマートフォンでnRF Connectアプリを開くと、**XIAO ESP32-C5-BLE**という名前のデバイスが発見されます。接続が成功すると、オンボードのL LEDが点灯し、その時点で送信カウント情報も印刷されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_16.png" style={{width:800, height:'auto'}}/></div><br/>

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/ble_1.jpg" style={{width:'90%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/ble_2.jpg" style={{width:'90%', height:'auto'}}/></div>
</div><br/>

おめでとうございます！上記のすべてのサンプルを完了することで、Thonny IDEを使用してMicroPythonで**XIAO ESP32-C5**上でプロジェクトを開発する方法をマスターしたと確信しています。皆様のより多くの作品を楽しみにしています！

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
