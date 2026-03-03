---
description: Seeed Studio XIAO nRF52840 Sense での Home Assistant 使用のための BTHome プロトコル
title: XIAO nRF52840 Sense での BTHome プロトコル（CircuitPython）
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/XIAO_BLE_HA
last_update:
  date: 09/18/2023
  author: Bruno Santos (Feiticeir0)
---

# プロジェクト概要

このwikiでは、Seeed Studio XIAO nRF52840 の Bluetooth 5.0 BLE 機能を Seeed Studio Grove 温湿度センサー（DHT20）と組み合わせて使用し、BTHome プロトコルを使って温度と湿度の測定値を Home Assistant にブロードキャストする方法を紹介します。

コードには **CircuitPython** を使用します。

## はじめに

このチュートリアルに従うには、以下のハードウェアが必要です

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO nRF52840-Sense</th>
        <th>Seeed Studio Grove 温湿度センサー V2.0（DHT20）</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Tem-humidity-sensor1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### ハードウェア準備

Grove DHT20センサーは通信にI2Cを使用します。XIAO nRF52840 SenseのI2Cピンに接続する必要があります：

- XIAO Grove ShieldとUniversal 4 pin Unbuckledケーブルを使用できます
- 4 pin Female JumperからGrove 4 pin変換ケーブルを使用してDHT20センサーを直接XIAO nRF52840 Senseに接続します

#### XIAO nRF52840 SenseとXIAO Grove Shieldのピン配置

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/XIAO_nRF52840_pinout.png" alt="pir" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/XIAO_shield_Pinout.png" alt="pir" width={600} height="auto" /></p>

### ハードウェアセットアップ

配線は簡単です。Shieldを使用する場合もしない場合も、以下のFritzingスケマティックでコンポーネントを接続する方法を示しています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/wiring.jpg" alt="Wiring" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/XIAO_Shield_wiring.jpg" alt="Wiring" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/Simple_Wiring.jpg" alt="Wiring" width={600} height="auto" /></p>

## ソフトウェア準備

Thonny IDEソフトウェア（Linux）と関連するライブラリとファイルを使用します。以下の手順を実行します：

1. XIAO nRF52840 SenseにCircuitPythonをインストール
2. 必要なライブラリをインストール
3. BTHomeプロトコルを使用してセンサーをコーディング
4. Home Assistantを設定

### ステップ1 - CircuitPythonのインストール

CircuitPythonをインストールしましょう。

<a  href="https://circuitpython.org/" target="_blank"><span>CircuitPython</span></a>にアクセスして、XIAO nRF52840 Sense用のバージョンをダウンロードします。
Downloadsを選択し、検索フィールドでXIAO nRF52840と入力を開始すると、結果にセンサーが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython1.png" alt="CircuitPython Download" width={600} height="auto" /></p>

次に、ダウンロードボタンを押してデバイス用のファイルを取得します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython2.png" alt="CircuitPython Download" width="{600}" height="auto" /></p>

.uf2ファイルが取得できるはずです。インストールするにはブートローダーモードに入る必要があります。XIAO nRF52840 Senseをコンピューターに接続し、リセットボタンを2回押します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/functional2b.jpg" alt="CircuitPython Download" width={600} height="auto" /></p>

コンピューターにXIAO-SENSEという新しいドライブが表示されるはずです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython3.png" alt="XIAO nRF52840 Sense drive" width={600} height="auto" /></p>

次に、ダウンロードしたファイルをドライブにコピーします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython4.png" alt="XIAO nRF52840 Sense drive" width={600} height="auto" /></p>

しばらくすると、CIRCUITPYという名前の新しいドライブが表示されます。マイクロコントローラーにCircuitPythonがインストールされました。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython5.png" alt="XIAO nRF52840 Sense drive" width={600} height="auto" /></p>

### ステップ2 - ライブラリのインストール

Grove Temperature & Humidity sensor V2.0（DHT20）を使用するには、<a  href="https://learn.adafruit.com/adafruit-aht20/python-circuitpython" target="_blank"><span> AdafruitのAHT20ライブラリ</span></a>が必要です。

前述のウェブサイトにはライブラリのインストール方法が記載されています。

インストール後、以下のファイルが必要です（これらはDHT20センサーに必要なファイルです）：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython6.png" alt="XIAO nRF52840 Sense drive" width={600} height="auto" /></p>

### ステップ3 - コードのアップロード

コードに進む前に、BTHomeとは何かを理解する必要があります。

<p style={{textAlign: 'center'}}><img src="https://bthome.io/images/logo.png" alt="BTHome logo" width="25%" height="auto" /></p>

#### BTHome

BTHomeは、Bluetooth Low Energy（BLE）を介してセンサーデータとボタン押下をブロードキャストするためのオープンスタンダードです。エネルギー効率が良く、柔軟で安全になるように設計されています。BTHomeはHome Assistantなどの人気のあるホームオートメーションプラットフォームで標準サポートされています。

BTHomeの利点：

- オープンスタンダードなので、異なるメーカーのデバイスが連携できます。
- デバイスはエネルギー効率が良く設計されているため、単一のバッテリーで長時間動作できます。
- データは暗号化されているため、不正アクセスから安全です。
- 柔軟なフォーマットなので、さまざまなセンサーデータとボタン押下の送信に使用できます。

BTHomeは、BLEを介してセンサーデータとボタン押下をブロードキャストするための汎用性があり強力なスタンダードです。スマートホームにセンサーデータとボタン押下を追加したい人にとって良い選択肢です。

詳細とデータフォーマットについては<a  href="https://bthome.io/" target="_blank"><span>公式サイト</span></a>で学ぶことができます。

#### コード

以下がCircuitPythonコードです。

<details>
<summary>クリックしてCircuitPythonコードをコピー</summary>

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

`code.py` として保存し、起動時に実行されるようにしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython6.png" alt="BTHome logo" width="500" height="auto" /></p>

#### コードの説明

- コードには説明のためのコメントが豊富に含まれています。
- 基本的に、0.2秒ごとにDHT20センサーから取得した温度と湿度をブロードキャストしています。
- センサーに負荷をかけて0.2秒ごとに値を読み取ることを避けるため、タイマーを設置しました。5分ごとにのみ値を読み取ります。この時間は `MINUTES_PER_READING` 変数で制御されます。

### ステップ4 - Home Assistantでデータを表示

#### ステップ4.1 - Home AssistantにXIAO nRF52840 Senseを追加

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/home-assistant-icon-flat.png" alt="Home Assistant Logo" width="15%" height="auto" /></p>

Home Assistantは、ホームオートメーション用の無料でオープンソースのソフトウェアです。ローカル制御とプライバシーに重点を置いたスマートホームデバイスの中央制御システムとして設計されています。

Home Assistantは、異なるデバイスとサービスを一箇所に統合し、それらをエンティティとして統合することで、中央スマートホームコントローラーハブとして機能します。提供されるルールベースの自動化システムにより、トリガーイベント、条件、アクションに基づいたカスタムルーチンの作成が可能で、スクリプトも含まれます。これらにより、自動化の構築、ホームセキュリティシステムのセキュリティアラームとビデオ監視のアラーム管理、エネルギー測定デバイスの監視が可能になります。

詳細については、<a  href="https://www.home-assistant.io/" target="_blank"><span>公式サイト</span></a>をご覧ください。

#### 要件

重要な要件の一つは、HA（Home Assistant）が**Bluetoothを持っている**ことです。Raspberry PI上でHAを実行している場合、おそらく持っているでしょう。すべてはRPiのバージョンに依存します。

#### 設定

「ステップ3 - コードのアップロード」で、XIAO nRF52840をコーディングしました。次のステップでは、HAが検出できるように実行されている必要があります。

HAのインストールを開きます。設定 -> デバイスとサービスに移動します
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/0_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>
統合ページが表示されます。Bluetoothを選択します
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/1_HA.png" alt="Home Assistant" width="90%" height="auto" /></p>

統合が表示されるはずです。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/2_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

<b>注意:</b> 何かが動作しない場合は、パッシブスキャンが<b>選択されていない</b>ことを確認してください
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/3_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

統合ページに入ると、XIAO nRF52840 Senseが接続されている場合、すでに検出されてページに表示されるはずです。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/5_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

「設定」を押してこの新しい統合を設定します。送信を押します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/6_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

この新しいセンサーを配置するエリアを選択するだけで完了です。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/7_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

次に、再び設定 -> 統合に移動し、新しいBTHome統合を選択します
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/10_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>
統合ページに移動します。1つのデバイスと3つのエンティティがあることがわかります。
エンティティは温度、湿度、信号強度です
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/11_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>
エンティティをクリックすると、すべてを表示できる新しいページが表示されます。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/12_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

代わりにデバイスを押すと、すべてのオプションと現在の値を含むデバイスページが表示されます。このページを使用して、ダッシュボードに追加できます。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/13_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>
「ダッシュボードに追加」を押すと、配置するビューを選択できます。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/14_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

その後、カードのビューが表示されます。「ダッシュボードに追加」を押してダッシュボードに追加します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/15_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

ダッシュボードに移動すると、XIAO nRF52840 Senseによってブロードキャストされた温度と湿度を含む新しく追加されたカードが表示されます。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/17_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

## さらに詳しく - ディープスリープ機能

私はこれを動作させることができませんでした。もし解決策をお持ちの方がいらっしゃいましたら、コメントを残してください。[GitHub](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=35979237)でご意見をお聞かせください。

## ✨ Contributor Project

- このプロジェクトは、Seeed Studio [Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)によってサポートされています。
- [Brunoの努力](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=35979237)に感謝し、あなたの作品は[展示](https://wiki.seeedstudio.com/ja/Honorary-Contributors/)されます。

## 技術サポート・製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
