---
description: Home Assistantで使用するためのBTHomeプロトコルをSeeed Studio XIAO nRF52840 Senseで実装
title: BTHomeプロトコルとXIAO nRF52840 Sense（CircuitPython）
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/XIAO_BLE_HA
last_update:
  date: 05/15/2025
  author: Bruno Santos (Feiticeir0)
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# プロジェクト概要

このWikiでは、Seeed Studio XIAO nRF52840のBluetooth 5.0 BLE機能を使用して、Seeed Studio Grove Temperature & Humidity Sensor (DHT20) で測定した温度と湿度をBTHomeプロトコルを介してHome Assistantに送信する方法を紹介します。

コードには**CircuitPython**を使用します。

## はじめに

このチュートリアルを進めるには、以下のハードウェアが必要です。

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
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### ハードウェア準備

Grove DHT20センサーはI2C通信を使用します。このセンサーをXIAO nRF52840 SenseのI2Cピンに接続する必要があります。

- XIAO Grove Shieldとユニバーサル4ピンアンバックルケーブルを使用する
- 4ピンのメスジャンパーからGrove 4ピン変換ケーブルを使用して、DHT20センサーをXIAO nRF52840 Senseに直接接続する

#### XIAO nRF52840 SenseとXIAO Grove Shieldのピン配置

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/XIAO_nRF52840_pinout.png" alt="pir" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/XIAO_shield_Pinout.png" alt="pir" width={600} height="auto" /></p>

### ハードウェアセットアップ

配線は非常に簡単です。Shieldを使用する場合でもしない場合でも、以下のFritzingスケマティックに従ってコンポーネントを接続してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/wiring.jpg" alt="Wiring" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/XIAO_Shield_wiring.jpg" alt="Wiring" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/Simple_Wiring.jpg" alt="Wiring" width={600} height="auto" /></p>

## ソフトウェア準備

ここでは、Thonny IDE ソフトウェア（Linux）と関連するライブラリおよびファイルを使用します。以下の手順を実行します：

1. XIAO nRF52840 Sense に CircuitPython をインストールする
2. 必要なライブラリをインストールする
3. BTHome プロトコルを使用してセンサーをコーディングする
4. Home Assistant を設定する

### ステップ 1 - CircuitPython のインストール

CircuitPython をインストールします。

<a href="https://circuitpython.org/" target="_blank"><span>CircuitPython</span></a> にアクセスし、XIAO nRF52840 Sense 用のバージョンをダウンロードします。
「Downloads」を選択し、検索フィールドに XIAO nRF52840 と入力してセンサーが表示されるまで入力を続けます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython1.png" alt="CircuitPython Download" width={600} height="auto" /></p>

次に、ダウンロードボタンを押してデバイス用のファイルを取得します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython2.png" alt="CircuitPython Download" width="{600}" height="auto" /></p>

.uf2 ファイルが取得できるはずです。これをインストールするには、ブートローダーモードに入る必要があります。XIAO nRF52840 Sense をコンピュータに接続し、リセットボタンを 2 回押します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/functional2b.jpg" alt="CircuitPython Download" width={600} height="auto" /></p>

コンピュータに XIAO-SENSE という新しいドライブが表示されるはずです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython3.png" alt="XIAO nRF52840 Sense drive" width={600} height="auto" /></p>

次に、ダウンロードしたファイルをこのドライブにコピーします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython4.png" alt="XIAO nRF52840 Sense drive" width={600} height="auto" /></p>

しばらくすると、CIRCUITPY という名前の新しいドライブが表示されます。これで、マイクロコントローラーに CircuitPython がインストールされました。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython5.png" alt="XIAO nRF52840 Sense drive" width={600} height="auto" /></p>

### ステップ 2 - ライブラリのインストール

Grove Temperature & Humidity センサー V2.0（DHT20）を使用するには、<a href="https://learn.adafruit.com/adafruit-aht20/python-circuitpython" target="_blank"><span>Adafruit の AHT20 ライブラリ</span></a>が必要です。

上記のウェブサイトには、ライブラリのインストール方法が記載されています。

インストール後、以下のファイルが必要です（これらは DHT20 センサーに必要なものです）：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython6.png" alt="XIAO nRF52840 Sense drive" width={600} height="auto" /></p>

### ステップ 3 - コードのアップロード

コードに進む前に、BTHome について理解する必要があります。

<p style={{textAlign: 'center'}}><img src="https://bthome.io/images/logo.png" alt="BTHome logo" width="25%" height="auto" /></p>

#### BTHome

BTHome は、センサーデータやボタン操作を Bluetooth Low Energy（BLE）を介してブロードキャストするためのオープンスタンダードです。エネルギー効率が高く、柔軟で安全に設計されています。BTHome は、Home Assistant などの一般的なホームオートメーションプラットフォームで標準サポートされています。

BTHome の利点：

- オープンスタンダードであるため、異なるメーカーのデバイスが連携可能
- デバイスはエネルギー効率が高く、単一のバッテリーで長時間動作可能
- データは暗号化されており、不正アクセスから保護される
- 柔軟なフォーマットで、さまざまなセンサーデータやボタン操作を送信可能

BTHome は、BLE を介してセンサーデータやボタン操作をブロードキャストするための多用途で強力なスタンダードです。スマートホームにセンサーデータやボタン操作を追加したい人にとって、優れた選択肢です。

詳細やデータフォーマットについては、<a href="https://bthome.io/" target="_blank"><span>公式サイト</span></a>をご覧ください。

#### コード

以下は CircuitPython のコードです。

<details>
<summary>クリックして CircuitPython コードをコピー</summary>

```python
# BTHome with DHT20
# このコードは Koen Vervloesem 氏の優れたコードを基にしています
# https://github.com/koenvervloesem/BTHome-Inertial-Sensor-in-CircuitPython
# XIAO nRF52840 Sense では deep sleep が機能しないため使用していません。
# 残念です。

from _bleio import adapter
from time import sleep
import board
# Grove センサー用
import adafruit_ahtx0

# 名前のサイズは重要です。
DEVICE_NAME = "XIAO nRF52840 Sense"
INTERVAL = 0.1

# 0.1秒（100ミリ秒）ごとの遅延のため、センサー値を毎回読み取る必要はありません。
# 過剰なので、5分ごとに読み取るようにします。
# INTERVAL に基づいてタイマーを作成します。
# 30 に達すると、5分が経過したことになります。
# INTERVAL * 60秒 * 5分
# 0.1ms を秒に変換 * 60秒 * 分 = 300
MINUTES_PER_READING = 5
readTimer = INTERVAL * 10 * 60 * MINUTES_PER_READING

# 測定値を BTHome フォーマットに変換
def value_to_little_endian(measurement):
    # 温度を係数で割って整数値を計算
    integer_value = int(measurement / 0.01)

    # リトルエンディアン表現の下位バイトと上位バイトを抽出
    lower_byte = integer_value & 0xFF
    upper_byte = (integer_value >> 8) & 0xFF

    # バイトの順序を逆にする
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
        # 温度
        # 値を変更
        temp = value_to_little_endian(temperature)
        # 返された値はリスト
        adv_svc_data[6] = temp[1]
        adv_svc_data[7] = temp[0]
        # 湿度
        # 値を変更
        hum = value_to_little_endian(humidity)
        # 返された値はリスト
        adv_svc_data[9] = hum[1]
        adv_svc_data[10] = hum[0]
        adv_data.extend(adv_svc_data)
        adv_data.extend(self.adv_local_name)
        return adv_data

# BTHome
bthome = BTHomeAdvertisement(DEVICE_NAME)

# センサーオブジェクトを作成
sensor = adafruit_ahtx0.AHTx0(board.I2C())

# 初回読み取りのため
# readTimer 変数で初期化
# スクリプトに値を読み取らせる
currentTimer = 0
# 初回読み取り
temp = sensor.temperature
hum = sensor.relative_humidity

# デバッグ
# print("\nTemperature: %0.1f C" % temp)
# print("Humidity: %0.1f %%" % hum)

while True:
    adv_data = bthome.adv_data(temp, hum)
    adapter.start_advertising(
        adv_data, scan_response=None, connectable=False, interval=INTERVAL * 2
    )
    sleep(INTERVAL)
    adapter.stop_advertising()
    # currentTimer を増加
    currentTimer += INTERVAL
    # print(f"Current timer: {currentTimer}")
    if currentTimer >= readTimer:
        # print(f'Read new values')
        # 新しい値を読み取る
        temp = sensor.temperature
        hum = sensor.relative_humidity
        # カウンターをリセット
        currentTimer = 0
```

</details>

`code.py`として保存し、起動時に実行されるようにしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython6.png" alt="BTHomeロゴ" width="500" height="auto" /></p>

#### コードの簡単な説明

- コードには説明のためのコメントが豊富に含まれています。
- 基本的に、0.2秒ごとにDHT20センサーから取得した温度と湿度をブロードキャストしています。
- センサーに負荷をかけず、0.2秒ごとに値を読み取らないようにするため、タイマーを設定しています。このタイマーは5分ごとに値を読み取るように設定されています。この時間は`MINUTES_PER_READING`変数で制御されています。

### ステップ4 - Home Assistantでデータを表示する

#### ステップ4.1 - Home AssistantにXIAO nRF52840 Senseを追加する

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/home-assistant-icon-flat.png" alt="Home Assistantロゴ" width="15%" height="auto" /></p>

Home Assistantは、ホームオートメーションのための無料かつオープンソースのソフトウェアです。スマートホームデバイスの中央制御システムとして設計されており、ローカル制御とプライバシーに重点を置いています。

Home Assistantは、異なるデバイスやサービスを1つの場所に統合し、エンティティとして管理することで、スマートホームの中央コントローラーハブとして機能します。提供されるルールベースのオートメーションシステムにより、トリガーイベント、条件、アクション（スクリプトを含む）に基づいたカスタムルーチンを作成できます。これにより、オートメーション、セキュリティアラームの管理、ホームセキュリティシステムのビデオ監視、エネルギー測定デバイスの監視が可能になります。

詳細は<a href="https://www.home-assistant.io/" target="_blank"><span>公式サイト</span></a>で確認できます。

#### 必要条件

重要な要件として、HA（Home Assistant）に**Bluetoothが搭載されていること**が必要です。Raspberry PiでHAを実行している場合、Bluetoothが搭載されている可能性が高いです。ただし、これは使用しているRaspberry Piのバージョンに依存します。

#### 設定

「ステップ3 - コードのアップロード」でXIAO nRF52840をコーディングしました。次のステップでは、HAがこれを検出できるように実行しておく必要があります。

HAのインストールを開きます。「設定」->「デバイスとサービス」に移動します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/0_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>
次に、統合ページが表示されます。「Bluetooth」を選択します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/1_HA.png" alt="Home Assistant" width="90%" height="auto" /></p>

統合が表示されるはずです。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/2_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

<b>注意:</b> 何かがうまくいかない場合は、パッシブスキャンが<b>選択されていない</b>ことを確認してください。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/3_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

統合ページに入ると、XIAO nRF52840 Senseが接続されている場合、すでに検出されており、ページに表示されるはずです。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/5_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

「設定」を押して、この新しい統合を設定します。「送信」を押します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/6_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

次に、この新しいセンサーを配置するエリアを選択するだけで完了です。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/7_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

次に、再び「設定」->「統合」に移動し、新しいBTHome統合を選択します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/10_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>
次に統合ページに移動します。ここでは、1つのデバイスと3つのエンティティがあることが確認できます。
エンティティは、温度、湿度、信号強度です。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/11_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>
エンティティをクリックすると、それらすべてを表示する新しいページが表示されます。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/12_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

代わりにデバイスを押すと、すべてのオプションと現在の値が表示されるデバイスページが表示されます。このページを使用して、ダッシュボードに追加できます。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/13_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>
「ダッシュボードに追加」を押すと、配置するビューを選択できます。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/14_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

その後、カードのビューが表示されます。「ダッシュボードに追加」を押してダッシュボードに追加します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/15_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

ダッシュボードに移動すると、XIAO nRF52840 Senseがブロードキャストした温度と湿度を表示する新しいカードが追加されています。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/17_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

## その他 - ディープスリープ機能

私はこれを動作させることができませんでした。もし解決策をお持ちの方がいれば、ぜひコメントを残してください。ご意見は[GitHub](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=35979237)で共有できます。

## ✨ コントリビュータープロジェクト

- このプロジェクトは Seeed Studio の[コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)によってサポートされています。
- [Brunoの尽力](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=35979237)に感謝します。あなたの作業は[こちらで展示](https://wiki.seeedstudio.com/ja/Honorary-Contributors/)されます。

## 技術サポート & 製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>