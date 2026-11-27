---
description: Seeed Studio XIAO nRF52840 Sense 上で Home Assistant 向けに BTHome プロトコルを使用する方法
title: XIAO nRF52840 Sense での BTHome プロトコル（CircuitPython）
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /XIAO_BLE_HA
last_update:
  date: 09/18/2023
  author: Bruno Santos (Feiticeir0)
createdAt: '2023-09-17'
updatedAt: '2025-09-02'
url: https://wiki.seeedstudio.com/ja/XIAO_BLE_HA/
---

# プロジェクト概要

この wiki では、Seeed Studio XIAO nRF52840 の Bluetooth 5.0 BLE 機能と Seeed Studio Grove Temperature & Humidity Sensor (DHT20) を使用して、BTHome プロトコルを用い、温度と湿度の測定値を Home Assistant にブロードキャストする方法を紹介します。

コードには **CircuitPython** を使用します。

## はじめに

このチュートリアルに従うには、以下のハードウェアが必要です

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO nRF52840-Sense</th>
        <th>Seeed Studio Grove Temperature&Humidity Sensor V2.0 (DHT20)</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Tem-humidity-sensor1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### ハードウェアの準備

Grove DHT20 センサーは通信に I2C を使用します。XIAO nRF52840 Sense の I2C ピンに接続する必要があります：

- XIAO Grove Shield とユニバーサル 4 ピンアンバックルケーブルを使用できます
- 4 ピンメスジャンパーから Grove 4 ピン変換ケーブルを使用して、DHT20 センサーを XIAO nRF52840 Sense に直接接続します

#### XIAO nRF52840 Sense と XIAO Grove Shield のピン配置

<div className="interactive_pinout_container">
  <a className="interactive_pinout_btn" href="https://www.seeedstudio.com/xiao-series-page/playground/pinout/?board=nrf52840sense" target="_blank" rel="noopener noreferrer">インタラクティブなピン配置を確認</a>
</div>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/XIAO_nRF52840_pinout.png" alt="pir" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/XIAO_shield_Pinout.png" alt="pir" width={600} height="auto" /></p>

### ハードウェアのセットアップ

配線はとても簡単です。Shield を使用する場合もしない場合も、以下の Fritzing 回路図がコンポーネント同士の配線方法を示しています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/wiring.jpg" alt="Wiring" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/XIAO_Shield_wiring.jpg" alt="Wiring" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/Simple_Wiring.jpg" alt="Wiring" width={600} height="auto" /></p>

## ソフトウェアの準備

ここでは Thonny IDE ソフトウェア（Linux）と、いくつかの関連ライブラリおよびファイルを使用します。以下の手順を実行します：

1. XIAO nRF52840 Sense に CircuitPython をインストールする
2. 必要なライブラリをインストールする
3. BTHome プロトコルを使用してセンサーのコードを書く
4. Home Assistant を設定する

### ステップ 1 - CircuitPython をインストール

まず CircuitPython をインストールします。

<a  href="https://circuitpython.org/" target="_blank"><span>CircuitPython</span></a> にアクセスし、XIAO nRF52840 Sense 用のバージョンをダウンロードします。
Downloads を選択し、検索フィールドに XIAO nRF52840 と入力していくと、結果にセンサーが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython1.png" alt="CircuitPython Download" width={600} height="auto" /></p>

次に、ダウンロードボタンを押してデバイス用のファイルを取得します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython2.png" alt="CircuitPython Download" width="{600}" height="auto" /></p>

.uf2 ファイルがあるはずです。これをインストールするにはブートローダーモードに入る必要があります。XIAO nRF52840 Sense をコンピュータに接続し、リセットボタンを 2 回押します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/functional2b.jpg" alt="CircuitPython Download" width={600} height="auto" /></p>

コンピュータ上に XIAO-SENSE という名前の新しいドライブが表示されるはずです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython3.png" alt="XIAO nRF52840 Sense drive" width={600} height="auto" /></p>

次に、ダウンロードしたファイルをそのドライブにコピーします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython4.png" alt="XIAO nRF52840 Sense drive" width={600} height="auto" /></p>

しばらくすると、CIRCUITPY という名前の新しいドライブが表示されます。これでマイコンに CircuitPython がインストールされました。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython5.png" alt="XIAO nRF52840 Sense drive" width={600} height="auto" /></p>

### ステップ 2 - ライブラリをインストール

Grove Temperature & Humidity sensor V2.0 (DHT20) を使用するには、<a  href="https://learn.adafruit.com/adafruit-aht20/python-circuitpython" target="_blank"><span> Adafruit の AHT20 ライブラリ</span></a>が必要です。

上記のウェブサイトには、ライブラリのインストール方法に関する手順があります。

インストール後、次のファイルがあるはずです（これらが DHT20 センサーに必要なファイルです）：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython6.png" alt="XIAO nRF52840 Sense drive" width={600} height="auto" /></p>

### ステップ 3 - コードをアップロード

コードに進む前に、BTHome とは何かを理解する必要があります。

<p style={{textAlign: 'center'}}><img src="https://bthome.io/images/logo.png" alt="BTHome logo" width="25%" height="auto" /></p>

#### BTHome

BTHome は、Bluetooth Low Energy (BLE) を介してセンサーデータやボタン押下をブロードキャストするためのオープンスタンダードです。省電力性、柔軟性、安全性を備えるよう設計されています。BTHome は Home Assistant などの一般的なホームオートメーションプラットフォームで、標準でサポートされています。

BTHome の利点：

- オープンスタンダードであるため、異なるメーカーのデバイス同士が連携できます。
- デバイスは省電力になるよう設計されており、単一のバッテリーで長時間動作できます。
- データは暗号化されており、不正アクセスから保護されています。
- 柔軟なフォーマットであり、さまざまなセンサーデータやボタン押下の送信に使用できます。

BTHome は、BLE を介してセンサーデータやボタン押下をブロードキャストするための多用途で強力な標準です。スマートホームにセンサーデータやボタン押下を追加したい人にとって、優れた選択肢です。

詳細やデータフォーマットについては、<a  href="https://bthome.io/" target="_blank"><span>公式サイト</span></a>で確認できます。

#### コード

以下が CircuitPython のコードです。

<details>
<summary>CircuitPython コードをコピーするにはクリック</summary>

```python
# BTHome with DHT20
# This code is based on the excelent code by Koen Vervloesem
# https://github.com/koenvervloesem/BTHome-Inertial-Sensor-in-CircuitPython
# We don't use deep sleep because it just doesn't work
# on the XIAO nRF52840 Sense. It's a pitty. 

from _bleio import adapter
from time import sleep
import board
# for the Grove sensor
import adafruit_ahtx0


# The size of the name is important. 
DEVICE_NAME = "XIAO nRF52840 Sense"
INTERVAL = 0.1

# Because this is delaying just 0.1s - 100 milliseconds, we don't need to read the sensor
# values everytime. It's overkill - let's just read every 5 minutes. 
# Let's create a timer that will add every INTERVAL
# when it reaches 30 - it will be 5 minutes passed
# then we read the sensor
# INTERVAL * 60 seconds * 5 minutes
# CONVERTING 0.1ms to seconds * 60s * minutes = 300
MINUTES_PER_READING = 5
readTimer = INTERVAL * 10 * 60 * MINUTES_PER_READING


# convert the measurement value to the BTHome format
def value_to_little_endian (measurement):

    # Calculate the integer value by dividing the temperature by the factor
    integer_value = int(measurement / 0.01)

    # Extract the lower and upper bytes for little-endian representation
    lower_byte = integer_value & 0xFF
    upper_byte = (integer_value >> 8) & 0xFF

    # Reverse the order of the bytes
    little_endian_bytes = bytes([upper_byte, lower_byte])
    return little_endian_bytes

class BTHomeAdvertisement:
    _ADV_FLAGS = [0x02, 0x01, 0x06]
    _ADV_SVC_DATA = [0x0a, 0x16, 0xd2, 0xfc, 0x40, 0x02, 0x00, 0x00, 0x03, 0xbf, 0x13]    

    def _name2adv(self, local_name):
        adv_element = bytearray([len(local_name) + 1, 0x09])
        adv_element.extend(bytes(local_name, "utf-8"))
        return adv_element

    def __init__(self, local_name=None):
        if local_name:
            self.adv_local_name = self._name2adv(local_name)
        else:
            self.adv_local_name = self._name2adv(adapter.name)

    def adv_data(self, temperature, humidity):
        adv_data = bytearray(self._ADV_FLAGS)
        adv_svc_data = bytearray(self._ADV_SVC_DATA)
        # temperature
        # change values according - 
        temp = value_to_little_endian (temperature)
        # returned value is list
        adv_svc_data[6] = temp[1]
        adv_svc_data[7]= temp[0]
        # humidity
        # change values according - 
        hum = value_to_little_endian (humidity)
        # returned value is list
        adv_svc_data[9] = hum[1]
        adv_svc_data[10]= hum[0]
        adv_data.extend(adv_svc_data)
        adv_data.extend(self.adv_local_name)
        return adv_data


# BTHome
bthome = BTHomeAdvertisement(DEVICE_NAME)

# Create sensor object
sensor = adafruit_ahtx0.AHTx0(board.I2C())

# because we want a initial reading
# let's initialize with the readTimer variable
# so we force the script to read the values
currentTimer = 0
# inital reading
temp = sensor.temperature
hum = sensor.relative_humidity

#DEBUG
#print("\nTemperature: %0.1f C" % temp)
#print("Humidity: %0.1f %%" % hum)

while True:
    adv_data = bthome.adv_data(temp,hum)
    adapter.start_advertising(
        adv_data, scan_response=None, connectable=False, interval=INTERVAL * 2
    )
    sleep(INTERVAL)
    adapter.stop_advertising()
    # increase currentTimer
    currentTimer += INTERVAL
    #print (f"Current timer: {currentTimer}")
    if (currentTimer >= readTimer):
        #print (f'Read new values')
        # Read new values
        temp = sensor.temperature
        hum = sensor.relative_humidity
        #reset counter
        currentTimer = 0


```

</details>

起動時に実行されるように、必ず `code.py` という名前で保存してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython6.png" alt="BTHome logo" width="500" height="auto" /></p>

#### コードの簡単な説明

- コードには、内容を少し説明するためのコメントがたくさん入っています。
- 基本的に、0.2 秒ごとに DHT20 センサーから取得した温度と湿度をブロードキャストしています。
- センサーに負荷をかけず、0.2 秒ごとに値を読み取らないようにするため、タイマーを設定しています。値の読み取りは 5 分ごとにのみ行われます。この時間は `MINUTES_PER_READING` 変数で制御されます。

### ステップ 4 - Home Assistant にデータを表示する

#### ステップ 4.1 - XIAO nRF52840 Sense を Home Assistant に追加する

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/home-assistant-icon-flat.png" alt="Home Assistant Logo" width="15%" height="auto" /></p>

Home Assistant は、ホームオートメーション向けの無料かつオープンソースのソフトウェアです。スマートホームデバイスをローカル制御とプライバシー保護に重点を置いて一元管理するための中央制御システムとして設計されています。

Home Assistant は、さまざまなデバイスやサービスを 1 か所にまとめてエンティティとして統合することで、スマートホームの中央コントローラーハブとして機能します。提供されているルールベースの自動化システムにより、トリガーイベント、条件、アクション（スクリプトを含む）に基づいてカスタムルーチンを作成できます。これにより、ビルディングオートメーション、セキュリティアラームやビデオ監視によるホームセキュリティシステムのアラーム管理、さらにエネルギー計測デバイスの監視が可能になります。

詳しくは、<a  href="https://www.home-assistant.io/" target="_blank"><span>公式サイト</span></a>をご覧ください。

#### 必要条件

重要な要件の 1 つは、HA（Home Assistant）に **Bluetooth が搭載されていること** です。Raspberry Pi 上で HA を実行している場合は、搭載されている可能性が高いです。すべては RPi のバージョンに依存します。

#### 設定

"Step 3 - Upload Code" で XIAO nRF52840 にコードを書き込みました。次のステップでは、HA が検出できるように、このコードが動作している必要があります。

HA のインストール環境を開きます。Settings -> Devices and Services に移動します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/0_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>
すると、Integrations ページが表示されます。Bluetooth を選択します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/1_HA.png" alt="Home Assistant" width="90%" height="auto" /></p>

すると、インテグレーションが表示されるはずです。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/2_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

<b>注意:</b> うまく動作しない場合は、Passive scanning に<b>チェックが入っていない</b>か確認してください。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/3_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

Integrations ページを開いたときに、XIAO nRF52840 Sense が接続されていれば、すでに検出されており、ページに表示されているはずです。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/5_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

この新しい Integration を設定するために "Configure" を押します。続いて Submit を押します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/6_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

あとは、この新しいセンサーを配置するエリアを選択するだけで完了です。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/7_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

次に、再度 Settings -> Integrations に移動し、新しい BTHome インテグレーションを選択します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/10_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>
するとインテグレーションページに移動します。ここでは、1 つのデバイスと 3 つのエンティティがあることがわかります。
エンティティは、温度、湿度、信号強度です。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/11_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>
エンティティをクリックすると、それらをすべて一覧できる新しいページが表示されます。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/12_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

代わりに device を押した場合は、すべてのオプションと現在値を含むデバイスページが表示されます。このページから、ダッシュボードに追加できます。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/13_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>
"ADD to DASHBOARD" を押すと、配置するビューを選択できます。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/14_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

その後、カードのプレビューが表示されます。"ADD TO DASHBOARD" を押してダッシュボードに追加します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/15_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

ダッシュボードに移動すると、XIAO nRF52840 Sense がブロードキャストしている温度と湿度を表示する、新しく追加されたカードが確認できます。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/17_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

## さらに - Deep Sleep 機能

私はうまく動作させることができませんでした。もし解決策をお持ちの方がいれば、ぜひコメントを残してください。あなたの考えを [GitHub](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=35979237) で共有できます。

## ✨ Contributor Project

- このプロジェクトは Seeed Studio の [Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) によってサポートされています。
- [Bruno の尽力](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=35979237)に感謝するとともに、あなたの成果は[展示](https://wiki.seeedstudio.com/ja/Honorary-Contributors/)されます。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
