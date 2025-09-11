---
description: XIAO ESP32S3 & Wio-SX1262 キットを使用したシングルチャンネル LoRaWAN ゲートウェイ
title: シングルチャンネル LoRaWAN ゲートウェイ
keywords: ["XIAO ESP32S3", "LoRa", "Wio SX1262", "シングルチャンネルゲートウェイ"]
image: https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/2.png
slug: /ja/wio_sx1262_xiao_esp32s3_for_single_channel_gateway
sidebar_position: 3
last_update:
  date: 05/15/2025
  author: Evelyn Chen
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# **XIAO ESP32S3 & Wio-SX1262 キットをシングルチャンネル LoRaWAN ゲートウェイとして設定する**

シングルチャンネルゲートウェイ（One-Channel Hub とも呼ばれる）は、LoRa の世界を探索し始めるための低コストツールです。これらのゲートウェイは、特定の拡散率とチャンネルで LoRa パケットを受信し、これらのパケットをネットワークと交換することを可能にします。その手頃な価格のため、多くのユーザーが独自のシングルチャンネルゲートウェイを構築して LoRa を試しています。

XIAO ESP32S3 をホスト MCU とし、Wio-SX1262 LoRa ラジオキットを使用することで、シングルチャンネルゲートウェイとして設定できます。このキットは、LoRa 技術を深く理解し、LNS（LoRa ネットワークサーバー）への接続を確立したいと考えている人々にとって実用的なソリューションを提供します。

こちらが GitHub プロジェクトです：[One Channel Hub](https://github.com/Seeed-Studio/one_channel_hub/tree/xiao-esp32s3-sx1262-bt-config)。

## ファームウェアの書き込み

ファームウェアはインストールの準備が整っており、3D ケース付きの XIAO ESP32S3 & Wio-SX1262 キットに事前に書き込まれています。XIAO ESP32S3 & Wio-SX1262 キットをシングルチャンネル LoRaWAN ゲートウェイとして書き込みたい場合は、[bin ライブラリ](https://github.com/Seeed-Studio/one_channel_hub/tree/xiao-esp32s3-sx1262-bt-config/bin)からダウンロードしてください。

:::tip
3D ケース付きの XIAO ESP32S3 & Wio-SX1262 キットは、シングルチャンネル LoRaWAN ゲートウェイとして事前に書き込まれています。[設定](https://wiki.seeedstudio.com/ja/wio_sx1262_xiao_esp32s3_for_single_channel_gateway/#configuration-via-sensecraft-app)セクションに進んでください。
:::

:::note
このファームウェアは以下の設定で構築されています：
- Seeed XIAO ESP32S3 Gateway ボードを選択
- フラッシュサイズを 8 MB に変更
- フラッシュからの設定取得を有効化
- Wi-Fi プロビジョニングを無効化
- OLED ディスプレイを無効化

使用方法：
- ユーザーボタンを使用して設定を有効/無効化
- Bluetooth のブロードキャスト名は "GW-XIAO-ESP32S3"
- SenseCraft APP を使用して Wi-Fi/LoRa を設定
:::

完全な ESP-IDF 環境を使用しない場合でも、**esptool** ユーティリティを使用して提供されたバイナリファイルを書き込むことができます。

ファームウェアをダウンロードするには以下をクリックしてください：

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/seeed_xiao_esp32s3_one_chanel_hub_2024120201.zip" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> ダウンロード ⏬ </font></span></strong></a>
</div>

**ステップ 1**: Esptool をダウンロードします。詳細については [Esptool ドキュメント](https://docs.espressif.com/projects/esptool/en/latest/esp32/) を参照してください。

```python
$ pip install esptool
```

**ステップ 2**: XIAO ESP32S3 を PC に接続します。

**ステップ 3**: ダウンロードしたファイルの場所に移動し、ターミナル/コマンドを開いて **esptool.py** コマンドを実行します。

- Linux/macOS の場合

```linux
esptool.py --chip esp32s3 -p port -b 460800 --before=default_reset --after=hard_reset write_flash --flash_mode dio --flash_freq 80m --flash_size 8MB 0x0 seeed_xiao_esp32s3_devkit_bootloader.bin 0x10000 seeed_xiao_esp32s3_devkit_lorahub.bin 0x8000 seeed_xiao_esp32s3_devkit_partition-table.bin
```

- Windows の場合

```linux
py -m esptool --chip esp32s3 -p COM14 -b 460800 --before=default_reset --after=hard_reset write_flash --flash_mode dio --flash_freq 80m --flash_size 8MB 0x0 seeed_xiao_esp32s3_devkit_bootloader.bin 0x10000 seeed_xiao_esp32s3_devkit_lorahub.bin 0x8000 seeed_xiao_esp32s3_devkit_partition-table.bin
```

`port` を使用しているシリアルポートの名前に置き換えてください。接続に失敗した場合は、[トラブルシューティング](https://docs.espressif.com/projects/esptool/en/latest/esp32/troubleshooting.html#troubleshooting)を参照してください。

### esp-idf を使用した書き込み

書き込み対象の One-Channel Hub に関連付けられたシリアルデバイスを特定します。
Linux および macOS では、シリアルポートを以下で確認できます：

```
ls /dev/cu*
```

その後、`idf.py` を使用して書き込みます。**port** を置き換えてください。

```
idf.py -p port flash
```

**権限エラー** が返された場合、現在のユーザーが dialout グループのメンバーであることを確認してください。そうでない場合は以下を実行し、Linux マシンを再起動して再試行してください：

```
sudo usermod -a -G dialout $USERNAME
```

**Windows** 環境では、デバイスが COM14 としてマウントされていると仮定すると、上記のコマンドは次のようになります：

```
idf.py -p COM14 flash
```

ログを確認するためにモニターコンソールを起動します（オプション）。

```
idf.py -p port monitor
```

### esptool を使用した書き込み

完全な ESP-IDF 環境を使用しない場合は、[最初のセクション](https://wiki.seeedstudio.com/ja/wio_sx1262_xiao_esp32s3_for_single_channel_gateway/#flash-firmware)に従って提供されたバイナリファイルをダウンロードするだけです。

### esptool-JS を使用した書き込み

[オンライン esptool](https://espressif.github.io/esptool-js/) を使用することを推奨します。

**ステップ 1**: ボーレートを 115200 に設定し、正しいポートに接続します。

**ステップ 2**: bin ファイルを選択し、対応するフラッシュアドレスを入力します。

|**フラッシュアドレス**|**ファイル**|
|----|----|
|0x0|seeed_xiao_esp32s3_devkit_bootloader.bin|
|0x10000|seeed_xiao_esp32s3_devkit_lorahub.bin|
|0x8000|seeed_xiao_esp32s3_devkit_partition-table.bin|

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/70.png" alt="pir" width={600} height="auto" /></p>

## SenseCraft アプリを使用した設定

### WiFi & LoRaWAN 設定
**ステップ 1**: `SenseCraft` アプリをダウンロード: [ダウンロードリンク](https://sensecap-mate-download.seeed.cn/)

**ステップ 2**: XIAO ESP32S3 と Wio-SX1262 キットを電源に接続します。

**ステップ 3**: アプリの指示に従って WiFi と LoRaWAN を設定します。

- SenseCraft アプリに登録してログイン
- `ユーザー` -> `デバイス Bluetooth 設定` に移動
- `XIAO ESP32S3 & Wio-SX1262 Kit` を選択
- `デバイスが設定準備完了` をクリック
- キットのボタンを一度押します。LED が点滅を開始すると、Bluetooth ペアリングモードに入ります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/APPOperation.gif" alt="pir" width={300} height="auto" /></p>

**ステップ 4**: The Things Network (TTN) に LoRaWAN ゲートウェイを登録します。

- https://eu1.cloud.thethings.network/ にアカウントを作成してログインします。
- ゲートウェイを登録します。
- 正しい `ゲートウェイ EUI` を TTN にコピーし、正しい `周波数プラン` と `ゲートウェイ ID` を入力します。
- ゲートウェイモジュールを再起動し、約 2 分待ちます。その後、接続されたゲートウェイのステータスを確認できます。

## ESP BLE prov を使用した設定

:::note
Wi-Fi を **ESP BLE prov** を使用して設定し、LoRaWAN を **ウェブクライアント** を使用して設定したい場合は、[このファームウェア](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/seeed_xiao_esp32s3_one_chanel_hub_20241016.zip) をフラッシュする必要があります。このファームウェアは SenseCraft アプリを使用した設定用のファームウェアとは異なることに注意してください。また、[ファームウェアのカスタマイズとビルド](https://wiki.seeedstudio.com/ja/wio_sx1262_xiao_esp32s3_for_single_channel_gateway/#customize-and-build-firmware) に従って `Wi-Fi プロビジョニングを有効化` を設定できます。
:::

### Wi-Fi 設定

**ステップ 1**: `ESP BLE prov` アプリをダウンロード:

* [Android 用](https://play.google.com/store/apps/details?id=com.espressif.provble)
* [iOS 用](https://apps.apple.com/in/app/esp-ble-provisioning/id1473590141)

ボード上の `RST` ボタンを押し、その後 `BOOT` ボタンを押します。LED が点灯します。

**ステップ 2**: XIAO を PC に接続し、PuTTY、COMTOOL、またはお好みのシリアルポートツールを開きます。

**ステップ 3**: ターミナル通信を開きます。

- `COMTOOL` の場合:
  
(1). 正しいシリアルポートを選択し、ボーレートを **115200** に設定します。

(2). ターミナルに移動して通信を開きます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/23.png" alt="pir" width={500} height="auto" /></p>

- `PuTTY` の場合:

(1). 正しいシリアルラインを選択し、ボーレートを **115200** に設定します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/25.png" alt="pir" width={500} height="auto" /></p>

(2). ターミナルに移動し、`Implicit CR in every LF` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/26.png" alt="pir" width={500} height="auto" /></p>

**ステップ 4**: ESP BLE prov アプリで `デバイスをプロビジョン` をクリックします。

接続が成功すると、Wi-Fi 接続情報と LoRa ゲートウェイ ID がターミナルに表示されます。

<div class="table-center">
<iframe width="700" height="600" src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/wifi.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="false"> </iframe>
</div>

:::tip
以下の情報をメモしてください。LoRa 設定に役立ちます。
1. IP アドレス: 192.168.1.44
2. ポート: 8000
3. ゲートウェイ EUI: 0xF09E9EFFFE20D02C
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/24.png" alt="pir" width={600} height="auto" /></p>

ターミナルで JSON 形式の LoRa パッケージフォワーダーのメッセージを確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/27.png" alt="pir" width={400} height="auto" /></p>

### LoRaWAN 設定

記録した IP アドレスとポートを使用して、ウェブインターフェースにアクセスできます: `http://ip_address:8000` をブラウザで開きます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/28.png" alt="pir" width={400} height="auto" /></p>

ウェブインターフェースでは、以下のパラメータを設定できます:

チャンネルパラメータ:
- 周波数
- 拡散率 (Spreading Factor)
- 帯域幅 (Bandwidth)

LoRaWAN ネットワークサーバー:
- アドレス
- ポート

SNTP サーバーアドレス: UTC 時間を取得するため

設定フォームの下部には 2 つのボタンがあります:

`Configure`: 押すと、HTML フォームで設定されたパラメータがフラッシュメモリ (NVS) に書き込まれます。<br/>
`Reboot`: 押すと、再起動コマンドがトリガーされ、LoRaHub が再起動し、新しい設定が適用されます。

:::note
フラッシュメモリに書き込まれた設定は、次回の再起動時にのみ有効になります。
:::

すべての設定が完了しました。これで、XIAO ESP32S3 & SX1262 キットを TTN (The Things Network) や Chirpstack などの LoRa ネットワークサーバーに接続できます。

* [TTN に接続](https://wiki.seeedstudio.com/ja/wio_sx1262_xiao_esp32s3_LNS_TTN/)
* [Chirpstack に接続](https://wiki.seeedstudio.com/ja/wio_sx1262_xiao_esp32s3_LNS_Chirpstack/)

## ファームウェアのカスタマイズとビルド

設定をリセットしたい場合は、以下の手順に従ってESP-IDF環境で自分でファームウェアをビルドすることができます。

### 環境のセットアップ
このプロジェクトはEspressif ESP-IDF開発に基づいています。環境をセットアップするには、この[ガイド](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/get-started/index.html#installation)を確認してください。

#### ESP-IDFの取得

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

### One Channel Hubのインストール

**ステップ 1**: Hubをローカルリポジトリにクローンし、プロジェクトのパスに移動します。

```linux
git clone https://github.com/Seeed-Studio/one_channel_hub.git

cd ~/this_project_directory
```

**ステップ 2**: 必要なドライバーをインストールします。

- SX126xドライバー(sx1261, sx1262, sx1268):
```
git clone -b v2.3.2 https://github.com/Lora-net/sx126x_driver.git sx126x_driver
```

- llcc68ドライバー:
```
git clone -b v2.3.2 https://github.com/Lora-net/llcc68_driver.git llcc68_driver
```

- lr11xxドライバー(lr1121):
```
git clone -b v2.4.1 https://github.com/Lora-net/SWDR001.git lr11xx_driver
```

### ファームウェアのビルド

**ステップ 1**: lorahubディレクトリに移動します。
```
cd lorahub
```

Linux/MAC端末でESP-IDFを使用してコマンドラインからビルドする準備をします。このステップはWindowsではスキップできます。Windowsではインストール済みの「ESP-IDF x.x CMD」ツールが環境を自動的に準備します。

```
. ~/esp/esp-idf/export.sh
```

ESP32ターゲットを設定してビルドします。

```
idf.py set-target esp32s3
```

必要に応じてビルドをカスタマイズします：

```
idf.py menuconfig
```

(1) **ボードタイプ**を設定します：

`LoRaWAN 1-CH HUB Configuration` -> `Hardware Configuration` -> `Board type` -> `Seeed XIAO ESP32S3 Gateway`

Loraラジオタイプのデフォルト設定は`sx1262`です。

OLEDディスプレイを無効にすることを忘れないでください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/21.png" alt="pir" width={800} height="auto" /></p>

(2) **フラッシュサイズ**を設定します：

`Serial flasher config` -> `Flash size` -> XIAO ESP32S3の場合は`8MB`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/22.png" alt="pir" width={800} height="auto" /></p>

(3) **Wi-Fiプロビジョニング**を設定します：

- **SenseCraft APP**を使用してWi-Fiプロビジョニングを設定します：
 `LoRaWAN 1-CH HUB Configuration` -> `WiFi Configuration` -> `Disable WiFi Provisionning over BLE` 

- **ESP BLE prov**を使用してWi-Fiプロビジョニングを設定します：
 `LoRaWAN 1-CH HUB Configuration` -> `WiFi Configuration` -> `Enable WiFi Provisionning over BLE` 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/100.png" alt="pir" width={800} height="auto" /></p>

プロジェクトをビルドします：

```
idf.py all
```

## リソース

* [SenseCraft APPを使用したXIAO ESP32S3 & Wio-SX1262 Kit用One Channel Hubファームウェア](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/seeed_xiao_esp32s3_one_chanel_hub_2024120201.zip)
* [ESP BLE provを使用したXIAO ESP32S3 & Wio-SX1262 Kit用One Channel Hubファームウェア](https://files.seeedstudio.com/wiki/XIAO_ESP32S3_for_Meshtastic_LoRa/seeed_xiao_esp32s3_one_chanel_hub_20241016.zip)
* [Githubリポジトリ](https://github.com/Seeed-Studio/one_channel_hub/tree/xiao-esp32s3-sx1262-bt-config)

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただき、ありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>