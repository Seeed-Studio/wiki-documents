---
description: XIAO ESP32S3 & Wio-SX1262 キットベースのシングルチャンネル LoRaWAN ゲートウェイ
title: シングルチャンネル LoRaWAN ゲートウェイ
keywords: ["XIAO ESP32S3", "LoRa", "Wio SX1262", "Single Channel Gateway"]
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png
slug: /ja/wio_sx1262_xiao_esp32s3_for_single_channel_gateway
sidebar_position: 3
last_update:
  date: 10/09/2024
  author: Evelyn Chen
---

# **XIAO ESP32S3 & Wio-SX1262 キットをシングルチャンネル LoRaWAN ゲートウェイとして設定する**

シングルチャンネルゲートウェイ（ワンチャンネルハブと呼ばれる）は、ユーザーが LoRa の領域を探索し始めることを可能にする低コストのツールです。これらのゲートウェイは、特定の拡散係数とチャンネルで LoRa パケットを受信し、これらのパケットとネットワークとの交換を促進することができます。その手頃な価格により、多くのユーザーが LoRa を実験するために独自のシングルチャンネルゲートウェイの構築に着手しています。

ホスト MCU としての XIAO ESP32S3 と Wio-SX1262 LoRa 無線キットは、シングルチャンネルゲートウェイとして機能するように設定できます。このキットは、LoRa 技術に興味を持ち、LNS（LoRa ネットワークサーバー）への接続を確立したい方に実用的なソリューションを提供します。

これは GitHub プロジェクトです：[One Channel Hub](https://github.com/Seeed-Studio/one_channel_hub/tree/xiao-esp32s3-sx1262-bt-config)。

## ファームウェアのフラッシュ

ファームウェアはインストール用に準備されており、3D ケース付きの XIAO ESP32S3 & Wio-SX1262 キットに事前フラッシュされています。XIAO ESP32S3 & Wio-SX1262 キットをシングルチャンネル LoRaWAN ゲートウェイとしてフラッシュしたい場合は、[bin ライブラリ](https://github.com/Seeed-Studio/one_channel_hub/tree/xiao-esp32s3-sx1262-bt-config/bin)からダウンロードするだけです。

:::tip
3D ケース付きの XIAO ESP32S3 & Wio-SX1262 キットは、シングルチャンネル LoRaWAN ゲートウェイとして事前フラッシュされています。[設定](https://wiki.seeedstudio.com/ja/wio_sx1262_xiao_esp32s3_for_single_channel_gateway/#configuration-via-sensecraft-app)については次のセクションにジャンプしてください。
:::

:::note
このファームウェアは以下でビルドされています：

- Seeed XIAO ESP32S3 Gateway ボードを選択
- フラッシュサイズを 8 MB に変更
- フラッシュからの設定取得を有効化
- Wi-Fi プロビジョニングを無効化
- OLED ディスプレイを無効化

使用方法：

- ユーザーボタンで設定の有効/無効を切り替え
- Bluetooth ブロードキャスト名は「GW-XIAO-ESP32S3」
- SenseCraft APP で接続し、Wi-Fi/LoRa を設定

:::

完全な ESP-IDF 環境を使用しない場合でも、**esptool** ユーティリティを使用して提供されたバイナリファイルをフラッシュすることが可能です。

ファームウェアをダウンロードするにはクリックしてください：

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/SenseCAP/seeed_xiao_esp32s3_one_chanel_hub_2024_12_09_01.rar" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> ダウンロード ⏬ </font></span></strong></a>
</div>

**ステップ 1**：Esptool をダウンロードします。詳細については、[Esptool ドキュメント](https://docs.espressif.com/projects/esptool/en/latest/esp32/)を参照してください。

```python
pip install esptool
```

**ステップ 2**: XIAO ESP32S3 をPCに接続します。

**ステップ 3**: ダウンロードしたファイルに移動してターミナル/コマンドを開き、**esptool.py** コマンドを実行します。

- Linux/macOS の場合

```linux
esptool.py --chip esp32s3 -p port -b 460800 --before=default_reset --after=hard_reset write_flash --flash_mode dio --flash_freq 80m --flash_size 8MB 0x0 seeed_xiao_esp32s3_devkit_bootloader.bin 0x10000 seeed_xiao_esp32s3_devkit_lorahub.bin 0x8000 seeed_xiao_esp32s3_devkit_partition-table.bin
```

- Windows の場合

```linux
py -m esptool --chip esp32s3 -p COM14 -b 460800 --before=default_reset --after=hard_reset write_flash --flash_mode dio --flash_freq 80m --flash_size 8MB 0x0 seeed_xiao_esp32s3_devkit_bootloader.bin 0x10000 seeed_xiao_esp32s3_devkit_lorahub.bin 0x8000 seeed_xiao_esp32s3_devkit_partition-table.bin
```

`port` を使用するシリアルポートの名前に置き換えてください。接続に失敗した場合は、[トラブルシューティング](https://docs.espressif.com/projects/esptool/en/latest/esp32/troubleshooting.html#troubleshooting)を参照してください。

### esp-idf でフラッシュする

フラッシュするOne-Channel Hubに関連付けられたシリアルデバイスを特定します。
LinuxとMacの場合、以下でシリアルポートを確認できます

```
ls /dev/cu*
```

その後、`idf.py`を使用してフラッシュします。**port**を置き換えてください

```
idf.py -p port flash
```

**権限エラー**が返される場合は、現在のユーザーがdialoutグループに属しているかを確認してください。属していない場合は、以下を実行し、Linuxマシンを再起動してから再試行してください：

```
sudo usermod -a -G dialout $USERNAME
```

**Windows** セットアップでは、デバイスが COM14 としてマウントされていると仮定すると、上記のコマンドは次のようになります：

```
idf.py -p COM14 flash
```

モニターコンソールを起動してログを確認します（オプション）。

```
idf.py -p port monitor
```

### esptoolでのフラッシュ

完全なESP-IDF環境を使用しない場合は、[最初のセクション](https://wiki.seeedstudio.com/ja/wio_sx1262_xiao_esp32s3_for_single_channel_gateway/#flash-firmware)に従って提供されたバイナリファイルをダウンロードするだけで済みます。

### esptool-JSでのフラッシュ

フラッシュには[オンラインesptool](https://espressif.github.io/esptool-js/)の使用を推奨します。

**ステップ1**: ボーレートを115200に設定し、正しいポートに接続します。

**ステップ2**: binファイルを選択し、対応するフラッシュアドレスを入力します。

|**フラッシュアドレス**|**ファイル**|
|----|----|
|0x0|seeed_xiao_esp32s3_devkit_bootloader.bin|
|0x10000|seeed_xiao_esp32s3_devkit_lorahub.bin|
|0x8000|seeed_xiao_esp32s3_devkit_partition-table.bin|

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/70.png" alt="pir" width={600} height="auto" /></p>

## SenseCraft APP による設定

### WiFi & LoRaWAN 設定

**ステップ 1**: `SenseCraft` アプリをダウンロード: [ダウンロードリンク](https://sensecap-mate-download.seeed.cn/)

**ステップ 2**: XIAO ESP32S3 & Wio-SX1262 キットを電源に接続します。

**ステップ 3**: アプリの指示に従って WiFi と LoRaWAN を設定します。

- SenseCraft APP に登録してログイン
- `ユーザー` → `デバイス Bluetooth 設定` に移動
- `XIAO ESP32S3 & Wio-SX1262 キット` を選択
- `デバイスの設定準備完了` をクリック
- キットのボタンを一度押すと、LED が点滅し始め、Bluetooth ペアリングモードに入ります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/APPOperation.gif" alt="pir" width={300} height="auto" /></p>

**ステップ 4**: The Things Network(TTN) で LoRaWAN ゲートウェイを登録します。

- https://eu1.cloud.thethings.network/ でアカウントを作成してログイン。
- ゲートウェイを登録。
- 正しい `gateway EUI` を TTN にコピーし、正しい `frequency plan` と `gateway ID` も入力します。
- ゲートウェイモジュールを再起動し、約2分待ちます。その後、ゲートウェイの接続状態を確認できます。

## ESP BLE prov による設定

:::note
**ESP BLE prov** を使用して Wi-Fi を設定し、**web client** を使用して LoRaWAN を設定したい場合は、[このファームウェア](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/seeed_xiao_esp32s3_one_chanel_hub_20241016.zip) をフラッシュする必要があります。これは SenseCraft アプリによる設定で使用されるファームウェアとは異なることにご注意ください。また、[ファームウェアのカスタマイズとビルド](https://wiki.seeedstudio.com/ja/wio_sx1262_xiao_esp32s3_for_single_channel_gateway/#customize-and-build-firmware) に従って `Enable Wi-Fi provisioning` を設定することもできます。
:::

### Wi-Fi 設定

**ステップ 1**: `ESP BLE prov` アプリをダウンロード:

- [Android 用](https://play.google.com/store/apps/details?id=com.espressif.provble)
- [iOS 用](https://apps.apple.com/in/app/esp-ble-provisioning/id1473590141)

ボード上の `RST` ボタンを押し、次に `BOOT` ボタンを押すと、LED が点灯します。

**ステップ 2**: XIAO を PC に接続し、PuTTY、COMTOOL、またはお好みの他のツールなどのシリアルポートツールを開きます。

**ステップ 3**: ターミナル通信を開く

- `COMTOOL` の場合:
  
(1). 正しいシリアルポートを選択し、ボーレートを **115200** に設定

(2). ターミナルに移動して通信を開く

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/23.png" alt="pir" width={500} height="auto" /></p>

- `PuTTY` の場合:

(1). 正しいシリアルラインを選択し、ボーレートを **115200** に設定

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/25.png" alt="pir" width={500} height="auto" /></p>

(2). ターミナルに移動して 'Implicit CR in every LF' をクリック

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/26.png" alt="pir" width={500} height="auto" /></p>

**ステップ 4**: ESP BLE prov アプリで 'Provison Device' をクリック

正常に接続されると、wifi 接続情報と lora ゲートウェイ ID がターミナルに表示されます。

<div class="table-center">
<iframe width="700" height="600" src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/wifi.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="false"> </iframe>
</div>

:::tip
メモを取ってください。Lora 設定に役立ちます。

1. IP アドレス: 192.168.1.44
2. ポート: 8000
3. ゲートウェイ EUI: 0xF09E9EFFFE20D02C

:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/24.png" alt="pir" width={600} height="auto" /></p>

Json 形式の lora パッケージフォワーダーのメッセージはターミナルで確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/27.png" alt="pir" width={400} height="auto" /></p>

### LoRaWAN 設定

メモした IP アドレスとポートを使用して、Web インターフェースは `http://ip_address:8000` で利用でき、ブラウザで開きます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/28.png" alt="pir" width={400} height="auto" /></p>

Web インターフェースでは以下のパラメータを設定できます:

チャンネルパラメータ:

- 周波数
- 拡散係数
- 帯域幅

LoRaWAN ネットワークサーバー:

- アドレス
- ポート

SNTP サーバーアドレス: UTC 時刻を取得するため

設定フォームの下部に 2 つのボタンがあります:

`Configure`: 押すと、HTML フォームで設定されたパラメータがフラッシュメモリ (NVS) に書き込まれます。<br/>
`Reboot`: 押すと、再起動コマンドがトリガーされ、LoRaHub が再起動して新しい設定が適用されます。

:::note
フラッシュメモリに書き込まれた設定は、次回の再起動時にのみ適用されることに注意してください。
:::

すべて設定完了です。これで XIAO ESP32S3 & SX1262 キット lora キットを TTN(The things network) や Chirpstack などの Lora ネットワークサーバーに接続できます。

- [TTN に接続](https://wiki.seeedstudio.com/ja/wio_sx1262_xiao_esp32s3_LNS_TTN/)
- [Chirpstack に接続](https://wiki.seeedstudio.com/ja/wio_sx1262_xiao_esp32s3_LNS_Chirpstack/)

## ファームウェアのカスタマイズとビルド

設定をリセットしたい場合、以下の手順で ESP-IDF 環境下でファームウェアを自分でビルドできます。

### 環境のセットアップ

このプロジェクトは Espressif ESP-IDF 開発に基づいています。環境をセットアップするには、この[ガイド](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html#installation)を確認してください。

#### ESP-IDF を取得

```linux
mkdir -p ~/esp
cd ~/esp
git clone -b v5.2.1 --recursive https://github.com/espressif/esp-idf.git
```

#### ツールのセットアップ

```linux
cd esp-idf/
./install.sh
```

### ワンチャンネルハブのインストール

**ステップ1**: ハブをローカルリポジトリにクローンします。そしてプロジェクトパスに移動します。

```linux
git clone https://github.com/Seeed-Studio/one_channel_hub.git

cd ~/this_project_directory
```

**ステップ 2**: 必要なドライバーをインストールする

- SX126xドライバー（sx1261、sx1262、sx1268）：

```
git clone -b v2.3.2 https://github.com/Lora-net/sx126x_driver.git sx126x_driver
```

- llcc68 ドライバー:

```
git clone -b v2.3.2 https://github.com/Lora-net/llcc68_driver.git llcc68_driver
```

- lr11xxドライバー(lr1121):

```
git clone -b v2.4.1 https://github.com/Lora-net/SWDR001.git lr11xx_driver
```

### ファームウェアのビルド

**ステップ 1**: lorahubディレクトリに入ります。

```
cd lorahub
```

Linux/MACターミナルをコマンドラインからESP-IDFでビルドするために準備してください。この手順は、インストールされた'ESP-IDF x.x CMD'ツールが自動的に環境を準備するため、Windowsではスキップできます。

```
. ~/esp/esp-idf/export.sh
```

ビルド対象のESP32ターゲットを設定します。

```
idf.py set-target esp32s3
```

必要に応じてビルドをカスタマイズします：

```
idf.py menuconfig
```

(1) **ボードタイプ**を設定：

`LoRaWAN 1-CH HUB Configuration` → `Hardware Configuration` → `Board type` → `Seeed XIAO ESP32S3 Gateway`

Lora radio typeのデフォルト設定は`sx1262`です。

OLEDディスプレイを無効にすることを忘れないでください。

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/21.png" alt="pir" width={800} height="auto" /></p>

(2) **フラッシュサイズ**を設定：

`Serial flasher config` → `Flash size` → XIAO ESP32S3の場合は`8MB`です。

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/22.png" alt="pir" width={800} height="auto" /></p>

 (3) **Wi-Fi Provisionning**を設定：

- **SenseCraft APP**経由でWi-Fi Provisionningを設定：
 `LoRaWAN 1-CH HUB Configuration` → `WiFi Configuration` → `Disable WiFi Provisionning over BLE`

- **ESP BLE prov**経由でWi-Fi Provisionningを設定：
 `LoRaWAN 1-CH HUB Configuration` → `WiFi Configuration` → `Enable WiFi Provisionning over BLE`

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/100.png" alt="pir" width={800} height="auto" /></p>

プロジェクトをビルド：

```
idf.py all
```

## Resource

- [XIAO ESP32S3 & Wio-SX1262 キット用ワンチャンネルハブファームウェア（SenseCraft APP経由）](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/seeed_xiao_esp32s3_one_chanel_hub_2024120201.zip)
- [XIAO ESP32S3 & Wio-SX1262 キット用ワンチャンネルハブファームウェア（ESP BLE prov経由）](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/seeed_xiao_esp32s3_one_chanel_hub_20241016.zip)
- [Github Repository](https://github.com/Seeed-Studio/one_channel_hub/tree/xiao-esp32s3-sx1262-bt-config)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
