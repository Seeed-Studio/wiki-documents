---
description: Raspberry Pi 4G LTEおよびGNSS HATモジュールを使用して、IoTアプリケーションを強化しましょう。この統合ソリューションは、堅牢なセルラー接続と正確なリアルタイム位置情報を提供し、資産追跡、遠隔環境の監視、フィールド業務の最適化に最適です。

title: Raspberry Pi 4G HAT GNSS機能の使い方
keywords:
  - Raspberry Pi Hat
  - 初めての使用
  - IIoT
  - GNSS
  - エッジコンピューティング
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/gnss_setup.webp
slug: /ja/raspberry_pi_4g_hat_gnss_functionlities
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---


## はじめに

4G LTEモジュールへのGNSSの統合により、その機能が強化され、IoTアプリケーション向けに正確なリアルタイム位置情報と信頼性の高い通信が可能になります。マルチコンステレーションGNSSシステムをサポートすることで、このモジュールはリモートやサービスが不足している地域でも正確で信頼性の高い位置追跡を提供します。これらの機能は、資産追跡、車両管理、リアルタイムの遠隔監視などのシナリオに最適です。
4G LTE接続と組み合わせることで、このソリューションはクラウドや制御システムへのシームレスなデータ送信を保証し、野生動物保護、農業自動化、緊急対応などの重要なユースケースの効率的な管理を可能にします。この組み合わせは、モビリティとアクセス性を必要とする産業に適した、スケーラブルでコスト効率の高い位置情報ベースの自動化アプローチを提供します。

## ハードウェア準備

GNSSアンテナを接続する必要があります。さらに、Python APIを使用して、人間が読みやすく理解しやすい形式で正確な位置情報を取得します。また、4Gアンテナも設置する必要があります。

## ハードウェア準備
<div class="table-center">
  <table align="center">
    <tr>
        <th>Raspberry Pi 5</th>
        <th>GPSアンテナ</th>
        <th>Raspberry Pi 4G LTE CAT4 HAT</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102110919-raspberry-pi-5-8gb-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-110061521-gps-antenna-kit-for-reterminal-dm-4g-module-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_23_1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/GPS-Antenna-Kit-for-reTerminal-DM-4G-Module-p-5774.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-CAT-4-EG25-GL-HAT-for-Raspberry-Pi-p-6325.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

:::note
ATコマンドと通信するための必要なドライバーがインストールされていない場合は、[インストールしてください](https://wiki.seeedstudio.com/ja/getting_started_raspberry_pi_4g_lte_hat/#software-preparation)
:::

## セットアップ
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/gnss_setup.png" style={{width:800}}/></div>

## Raspberry Pi 4G LTE Hat または Windows Qcom ToolでGNSSを使用する

### ステップ 1: GNSSをオンにする

- Raspberry Pi上でMinicomを開くか、Windows上でUSB経由でQcom Toolを開きます。

```bash
sudo minicom -D /dev/ttyUSB2 # Raspberry Piでminicomを使用する場合
```

- GNSSを有効化するために以下のコマンドを入力します：

```bash
AT+QGPS=1
```

**期待される応答**:

```bash
OK
```
- これによりGNSS機能がオンになります。
- 有効化後、NMEA文がデフォルトで「usbnmea」ポートから出力されます。

### ステップ 2: 位置情報を取得する

- GNSS座標やその他の情報を取得するには、以下を入力します：

```bash
AT+QGPSLOC=0
```
**応答例**:

+QGPSLOC: 063416.400,3143.2951N,11713.0655E,0.6,224.9,2,162.57,17.6,9.5,110620,07 OK

- **応答の説明**:
    - 063416.400: UTC時間 (HHMMSS.SSS形式)
    - 3143.2951N: 緯度 (31°43.2951'N)
    - 11713.0655E: 経度 (117°13.0655'E)
    - 0.6: 水平方向精度低下 (HDOP)
    - 224.9: 高度 (メートル)
    - 2: 位置固定タイプ (2 = 2D固定, 3 = 3D固定)
    - その他のパラメータは詳細なGNSSデータを提供します。

### ステップ 3: GNSSをオフにする
- 必要なデータを取得した後、以下を入力してGNSSを無効化し、電力を節約します：

```bash
AT+QGPSEND
```
**期待される応答**

```bash 
OK
```
- このコマンドによりGNSSモジュールがシャットダウンされ、リソースが節約されます。


## Pythonコードの実装 

### ステップ 1. ディレクトリと仮想環境の準備


- Raspberry Pi上でターミナルを開きます。
- 新しいプロジェクトフォルダを作成し、その中に移動します：
```bash
mkdir GNSS_EX
cd GNSS_EX
```
- Python仮想環境を設定します：
```bash
python3 -m venv --system-site-packages env
```

- 仮想環境を有効化します：

```bash
source env/bin/activate
```

- 必要なライブラリをインストールします：

```bash
pip install pyserial geopy
```

### ステップ 2. Pythonスクリプトの準備

- **Thonny Python IDE** (Raspberry Piにプリインストール済み) を開きます。

- Thonnyで新しいファイルを作成し、提供されたコードをエディタに貼り付けます。

- usb_portパラメータをRaspberry Piの4G HAT用シリアルポートに合わせて更新します。通常、`/dev/ttyUSB2`または`/dev/ttyUSB3`である可能性があります。例：

```bash
usb_port = "/dev/ttyUSB2"
```
- ファイルを**GNSS_EX**フォルダ内にtest_gnss.pyとして保存します。

```bash 

import serial
import time
from geopy.geocoders import Nominatim


def send_at_command(serial_port, command, delay=1):
    """ATコマンドを送信し、応答を読み取る。"""
    serial_port.write((command + '\r\n').encode())
    time.sleep(delay)
    response = serial_port.read_all().decode()
    print(f"コマンド: {command}\n応答: {response}")
    return response


def parse_coordinates(response):
    """AT+QGPSLOC応答から座標を解析する。"""
    if "+QGPSLOC:" in response:
        try:
            data = response.split(":")[1].strip().split(",")
            # 生座標を抽出 (N/S/E/W付き)
            latitude_raw, longitude_raw = data[1], data[2]

            # N/S/E/Wを削除して正確に解析
            latitude = convert_to_decimal(latitude_raw[:-1], 'N' in latitude_raw)
            longitude = convert_to_decimal(longitude_raw[:-1], 'E' in longitude_raw)

            print(f"緯度: {latitude}, 経度: {longitude}")
            return latitude, longitude
        except (IndexError, ValueError) as e:
            print(f"座標解析エラー: {e}")
            return None, None
    return None, None


def convert_to_decimal(coord, positive=True):
    """NMEA形式の座標を10進形式に変換する。"""
    # 度と分に座標を分割
    degrees = int(float(coord) // 100)
    minutes = float(coord) % 100
    decimal = degrees + (minutes / 60)

    # 南半球または西半球の場合は負にする
    return decimal if positive else -decimal


def get_location(lat, lon):
    """geopyを使用して人間が読める位置情報を取得する。"""
    geolocator = Nominatim(user_agent="gnss_locator")
    try:
        location = geolocator.reverse((lat, lon), exactly_one=True)
        return location.address if location else "位置情報が見つかりません"
    except Exception as e:
        print(f"ジオコーディングエラー: {e}")
        return "位置情報取得エラー"


def automate_gnss(port, baudrate=9600):
    """GNSSコマンドを自動化し、位置情報を取得する。"""
    try:
        with serial.Serial(port, baudrate, timeout=1) as ser:
            print("シリアルポートに接続しました。")

            # GNSSをオンにする
            send_at_command(ser, "AT+QGPS=1", delay=2)

            # 位置情報を取得する
            response = send_at_command(ser, "AT+QGPSLOC=0", delay=2)
            latitude, longitude = parse_coordinates(response)

            if latitude and longitude:
                print(f"座標: 緯度 = {latitude}, 経度 = {longitude}")
                location = get_location(latitude, longitude)
                print(f"位置情報: {location}")
            else:
                print("座標を取得できませんでした。")

            # GNSSをオフにする
            send_at_command(ser, "AT+QGPSEND", delay=2)
            print("GNSSプロセスが完了しました。")

    except serial.SerialException as e:
        print(f"エラー: {e}")


# USBポートを設定 (例: '/dev/ttyUSB0' または Windowsの場合 'COM3')
usb_port = "/dev/ttyUSB2"  # システムに応じて更新
automate_gnss(usb_port)


```

### ステップ 3. スクリプトを実行する

- ターミナルを開き、プロジェクトディレクトリにいることを確認します：
```bash
cd GNSS_EX
```

- 仮想環境を有効化します：

```bash
source env/bin/activate
```

- Pythonを使用してスクリプトを実行します：
```bash
python test_gnss.py
```
- 出力結果 
  
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/gnss_output.PNG" style={{width:800}}/></div>

## リソース

- **[ウェブページ]** [LTE EG25-G](https://www.quectel.com/product/lte-eg25-g/)

- **[ウェブページ]** [GNSS AT Commands Manual V1.4](https://www.quectel.com/download/quectel_ec2xeg9xeg2x-gem05_series_gnss_application_note_v1-4/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>