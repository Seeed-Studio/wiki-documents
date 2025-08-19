---
description: XIAO ESP32C3 を使用した ESPHome へのアクセス
title: XIAO ESP32C3 が ESPHome サービスを介して Home Assistant にアクセス
keywords:
- ESPHome
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao-esp32c3-esphome
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# XIAO ESP32C3 が ESPHome サービスを介して Home Assistant にアクセス

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/78.jpg" style={{width:700, height:'auto'}}/></div>

この記事では、ESPHome サービスを独自の Home Assistant 環境にインストールする手順を説明します。XIAO ESP32C3 の WiFi 機能を使用することで、XIAO をスムーズに Home Assistant に接続し、ホーム端末の一部として利用できるようになります。

さらに、最も人気のある 24GHz mmWave Human Static Presence Module Lite を組み合わせて、人の存在検知機能を備えた Home Assistant を構築します。

## はじめに

:::tip
2023年7月31日現在、レーダーが完全に動作しなくなる問題が修正されました。このチュートリアルを正しく動作させるには、ライブラリファイルとコンフィギュレーターを更新してください。
:::

このチュートリアルをすべて実行するには、以下のものを準備する必要があります。

<table align="center">
  <tbody><tr>
      <th>XIAO ESP32C3</th>
      <th>24GHz mmWave Human Static<br />Presence Module Lite</th>
    </tr>
    <tr>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/></div></td>
      <td><div align="center"><img src="https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/0.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

このプロジェクトの最終目標は、24GHz mmWave Human Static Presence Module Lite を Home Assistant に展開することです。

このプロジェクトでは、センサーを Home Assistant に迅速に展開できるように、24GHz mmWave Human Static Presence Module Lite 用の完全な設定ファイルとライブラリを用意しています。

このチュートリアルの内容は、以下の手順を大まかに説明します。

1. [Home Assistant 環境を選択する](#select-your-home-assistant-environment)
2. [Home Assistant に ESPHome をインストールして設定する](#install-and-configure-esphome-in-home-assistant)
3. [XIAO ESP32C3 と ESPHome の接続を設定する](#configure-the-xiao-esp32c3-and-esphome-connection)
4. [Home Assistant パネルを設定する](#configure-home-assistant-panel)

もちろん、XIAO ESP32C3 が Home Assistant で Grove をどのように使用するかに興味がある場合は、この章を直接読むことができます。

- [XIAO ESP32C3 を使用して Grove を Home Assistant に接続する](#connect-grove-to-home-assistant-using-xiao-esp32c3)

## Home Assistant 環境を選択する

この手順では、Home Assistant 環境のインストール方法について詳しく説明しません。すでに動作する Home Assistant デバイスをお持ちであることを前提とします。

もし Home Assistant のインストール方法を学びたい場合は、[公式チュートリアル](https://www.home-assistant.io/installation/)を参照してください。Home Assistant をインストールする際には、x86 デバイスを使用することを強くお勧めします。これが最もユーザーフレンドリーな方法であり、Supervised を使用した Home Assistant のインストールが可能です。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/77.png" /></div>

上記の表に基づくと、**Home Assistant OS** と **Home Assistant Supervised** をインストールするのが最適です。これにより、多くの手間を省くことができます。もし OpenWRT 上の Docker で Home Assistant を実行している場合（例：LinkStar H68K を使用）、心配しないでください。この方法についても詳細な参考資料を提供します。

また、Seeed Studio 製品のいくつかに対して Home Assistant のインストール方法を記載していますので、以下を参照してください。

- [ODYSSEY-X86 での Home Assistant の始め方](https://wiki.seeedstudio.com/ja/ODYSSEY-X86-Home-Assistant/)
- [reTerminal での Home Assistant の始め方](https://wiki.seeedstudio.com/ja/reTerminal_Home_Assistant/)
- [LinkStar H68K/reRouter CM4 での Home Assistant の始め方](https://wiki.seeedstudio.com/ja/h68k-ha-esphome/)

## Home Assistant に ESPHome をインストールする

### ステップ 1. ESPHome をインストールする

- **シナリオ 1: Home Assistant OS (Add-on Store を使用) での ESPHome インストール**

Home Assistant OS をインストールしている場合、Add-on Store が利用可能で、これにより ESPHome のインストールが非常に簡単になります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/79.png" /></div>

Add-on Store で ESPHome を検索してインストールできます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/80.png" /></div>

- **シナリオ 2: OpenWRT Docker/Docker 上の Home Assistant での ESPHome インストール (Add-on Store を使用しない)**

Home Assistant Container をインストールしている場合、Add-on Store を通じて ESPHome サービスを簡単にダウンロードすることはできません。そのため、代替手段が必要です。

ESPHome イメージをダウンロードする必要があります。

```
esphome/esphome:latest
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/17.png" /></div>

コンテナを作成するページで、いくつかの簡単な設定を行う必要があります。
- コンテナ名: 任意のコンテナ名
- Docker イメージ: ダウンロードした **esphome** イメージを選択
- ネットワーク: **host** モードを選択
- 環境変数 (-e): 必要な環境変数

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/18.png" /></div>

上記を入力したら保存して適用します。コンテナが作成されたことが確認できます。また、コンテナを起動する必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/19.png" /></div>

Home Assistant で ESPHome をダウンロードした場合と同じ効果を得るために、Home Assistant の設定ファイルを変更する必要があります。

Home Assistant Container に移動します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/55.png" /></div>

Home Assistant のターミナルに移動します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/56.png" /></div>

ターミナルで以下のコマンドを入力します。

```sh
vi configuration.yaml
```

`configuration.yaml` の末尾に以下の内容を追加します。

```
# Example configuration.yaml entry
panel_iframe:
  esphome:
    title: "ESPHome"
    url: "http://192.168.100.1:6052"
    icon: mdi:chip
```

Home Assistant Container シェルで `exit` と入力して Docker コンテナを終了します。これが完了したら、Home Assistant コンテナを再起動します。

新しいブラウザページを開き、アドレス `http://homeassistant:8123/` を入力して Home Assistant アカウントにログインすると、左側のツールバーに ESPHome が表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/57.png" /></div>

## XIAO ESP32C3 と ESPHome 接続の設定

### ステップ 2. ハードウェア準備

このチュートリアルの目的は、Home Assistant ダッシュボードで 24GHz mmWave Human Static Presence Module Lite のデータ情報を確認できるようにすることです。

デバイスをメインボードを介してコンピュータに接続します。配線図は以下の表に示されています。

<div class="table-center">
<table align="center">
  <tbody>
    <tr>
      <td colspan="3"><div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/esphome-pinconnect.png" /></div></td>
    </tr>
    <tr>
      <td align="center">XIAO ESP32C3</td>
      <td align="center" />
      <td align="center">24GHz mmWave Human Static<br />Presence Module Lite</td>
    </tr>
    <tr>
      <td align="center">5V</td>
      <td align="center">--&gt;</td>
      <td align="center">5V</td>
    </tr>
    <tr>
      <td align="center">GND</td>
      <td align="center">--&gt;</td>
      <td align="center">GND</td>
    </tr>
    <tr>
      <td align="center">D2</td>
      <td align="center">--&gt;</td>
      <td align="center">RX</td>
    </tr>
    <tr>
      <td align="center">D3</td>
      <td align="center">--&gt;</td>
      <td align="center">TX</td>
    </tr>
  </tbody></table>
</div>

### ステップ 3. XIAO ESP32C3 と Home Assistant を同じ LAN に接続する

Home Assistant がすでにネットワークに接続されていることを確認してください。例えば、ネットワークケーブルを使用してデバイスに接続するなどです。その後、ローカルネットワーク（例：WiFi）をオンにして、XIAO ESP32C3 がこのネットワークに接続できるようにします。

以下では、LinkStar H68K を例として使用します。目的は、XIAO を LinkStar H68K のホットスポットに接続することです。

OpenWRT の **Network** タブで、**Wireless** --> **ADD** を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/58.png" /></div>

**Device Configuration** の **Transmit Power** では、**auto** を選択します。

**Interface Configuration** の設定では、以下の指示に従ってください。

- General Setup
    - Mode: LinkStar がインターネットにアクセスする方法に依存します。ケーブル接続を使用している場合は **Client** を選択し、WiFi に接続している場合は **Access Point** を選択します。
    - ESSID: WiFi の名前を入力します。スペースや特殊文字を使用しないようにしてください。
    - Network: **lan** をチェックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/23.png" /></div>

- Wireless Security
    - Encryption: WPA2-PSK
    - Key: 設定したい WiFi パスワードを入力します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/24.png" /></div>

上記の情報を入力したら、右下の **Save and Apply** をクリックし、LinkStar がホットスポットを開くのを数分待ちます。

このホットスポットにデバイスが接続されていない場合、信号がないと表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/60.png" /></div>

すべてを考慮して、Home Assistant のページに戻りましょう。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/61.png" /></div>

**NEW DEVICE** をクリックします。その後、**Continue** をクリックします。

新しいポップアップウィンドウで、設定したいアプリケーションの名前と、LinkStar で設定したホットスポット（または自身の WiFi）の名前とパスワードを入力してください。XIAO ESP32C3 と Home Assistant が **同じ LAN** にあることを確認してください。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/25.png" /></div>

その後、**Next** をクリックします。

デバイスタイプでは、**ESP32-C3** を選択してください。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/26.png" /></div>

その後、**Next** をクリックします。

<span id="jump1">**Encryption key** をクリックして安全な場所に保存してください。このキーは後のステップで使用します。</span>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/27.png" /></div>

その後、**SKIP** をクリックします。

### ステップ 4. XIAO ESP32C3 の設定 yaml ファイルを変更する

次に、先ほど作成したデバイスタブをクリックし、左下の **EDIT** ボタンをクリックします。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/28.png" /></div>

この yaml ファイルに変更を加える必要があります。この内容は、以下の図の 1 と 2 に対応する2つの主要部分に分けられています。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/62.png" /></div>

- **①** の内容では、設定したデバイス名以外は変更しないでください。残りの内容については以下のコードを参照してください。

```css
# part 1:
substitutions:
  name: "xiao-esp32c3"
  friendly_name: "XIAO ESP32C3"

esphome:
  name: "${name}"
  friendly_name: "${friendly_name}"
  name_add_mac_suffix: true
  project:
    name: "seeedstudio.mmwave_kit"
    version: "2.0"
  platformio_options:
    board_build.flash_mode: dio
    board_build.mcu: esp32c3

external_components:
  - source: github://limengdu/mmwave-kit-external-components@main
    refresh: 0s

esp32:
  board: esp32-c3-devkitm-1
  variant: esp32c3
  framework:
    type: esp-idf

# Enable logging
logger:
  hardware_uart: USB_SERIAL_JTAG
  level: DEBUG
```

- **②** の内容では、`captive_portal:` の後に以下のコードをコピーしてください。

<details>

<summary>クリックして完全なコードをプレビュー</summary>

```yml
# Sets up Bluetooth LE (Only on ESP32) to allow the user
# to provision wifi credentials to the device.
esp32_improv:
  authorizer: none

# Sets up the improv via serial client for Wi-Fi provisioning.
# Handy if your device has a usb port for the user to add credentials when they first get it.
# improv_serial: # Commented until improv works with usb-jtag on idf

uart:
  id: uart_bus
  baud_rate: 115200
  rx_pin: 4
  tx_pin: 5
  parity: NONE
  stop_bits: 1

seeed_mr24hpc1:
  id: my_seeed_mr24hpc1

text_sensor:
  - platform: seeed_mr24hpc1
    heart_beat:
      name: "Heartbeat"
    product_model:
      name: "Product Model"
    product_id:
      name: "Product ID"
    hardware_model:
      name: "Hardware Model"
    hardware_version:
      name: "Hardware Version"
    keep_away:
      name: "Active Reporting Of Proximity"
    motion_status:
      name: "Motion Information"
    custom_mode_end:
      name: "Custom Mode Status"

binary_sensor:
  - platform: seeed_mr24hpc1
    has_target:
      name: "Presence Information"

sensor:
  - platform: seeed_mr24hpc1
    custom_presence_of_detection:
      name: "Static Distance"
    movement_signs:
      name: "Body Movement Parameter"
    custom_motion_distance:
      name: "Motion Distance"
    custom_spatial_static_value:
      name: "Existence Energy"
    custom_spatial_motion_value:
      name: "Motion Energy"
    custom_motion_speed:
      name: "Motion Speed"
    custom_mode_num:
      name: "Current Custom Mode"

switch:
  - platform: seeed_mr24hpc1
    underlying_open_function:
      name: Underlying Open Function Info Output Switch

button:
  - platform: seeed_mr24hpc1
    restart:
      name: "Module Restart"
    custom_set_end:
      name: "End Of Custom Mode Settings"

select:
  - platform: seeed_mr24hpc1
    scene_mode:
      name: "Scene"
    unman_time:
      name: "Time For Entering No Person State (Standard Function)"
    existence_boundary:
      name: "Existence Boundary"
    motion_boundary:
      name: "Motion Boundary"

number:
  - platform: seeed_mr24hpc1
    sensitivity:
      name: "Sensitivity"
    custom_mode:
      name: "Custom Mode"
    existence_threshold:
      name: "Existence Energy Threshold"
    motion_threshold:
      name: "Motion Energy Threshold"
    motion_trigger:
      name: "Motion Trigger Time"
    motion_to_rest:
      name: "Motion To Rest Time"
    custom_unman_time:
      name: "Time For Entering No Person State (Underlying Open Function)"
```

</details>

次に、右上の**保存**ボタンをクリックしてください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/63.png" /></div>

### ステップ 5. XIAO ESP32C3 にファームウェアをアップロードする

- **方法 1: コンパイルして直接アップロード**

x86デバイスを使用しており、デバイスポートにXIAOが表示される場合は、プログラムをコンパイルしてXIAOにアップロードできます。

XIAOをデバイスに接続してください。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ESPHome/49.png" style={{width:700, height:'auto'}}/></div>

デバイスバーの右下にある三つの点をクリックし、**インストール**を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/84.png" /></div>

**ESPHome Dashboard を実行しているコンピュータに接続**をクリックします。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/85.png" /></div>

接続されているポートを選択します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ESPHome/18.png" /></div>

これで必要なボードパッケージがすべてダウンロードされ、ESPHomeファームウェアがXIAO ESP32C3にフラッシュされます。フラッシュが成功すると、以下の出力が表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/ESPHome/19.png" /></div>

XIAOをデバイスに接続した後にポートが見つからない場合は、2番目の方法を試してください。

- **方法 2: ホストを使用してコンパイル済みファームウェアをアップロード**

LinkStar H68Kのようなソフトルートは外部MCUデバイスの認識をサポートしていないため、まずコンパイル済みファームウェアをダウンロードし、別のPCを介してファームウェアをアップロードする必要があります。

右上の**インストール**ボタンをクリックします。その後、最後の項目**手動ダウンロード**を選択します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/30.png" /></div>

**モダン形式**を選択します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/31.png" /></div>

これにより、ダウンロードとコンパイルに時間がかかるため、しばらくお待ちください。すべてが準備完了すると、ファームウェアが自動的にコンピュータにダウンロードされます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/33.png" /></div>

XIAO ESP32C3にファームウェアをアップロードするには、いくつかのオプションがあります。ここでは2つの方法を紹介します。

- オプション 1: [ESPhome Webツール](https://web.esphome.io/?dashboard_install)を使用してアップロード。

適切なドライバがインストールされていることを確認してください。以下はESPデバイスで使用される一般的なチップのドライバです。

1. CP2102ドライバ: [Windows & Mac](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)

2. CH342, CH343, CH9102ドライバ: [Windows](https://www.wch.cn/downloads/CH343SER_ZIP.html), [Mac](https://www.wch.cn/downloads/CH34XSER_MAC_ZIP.html)

3. CH340, CH341ドライバ: [Windows](https://www.wch.cn/downloads/CH341SER_ZIP.html), [Mac](https://www.wch.cn/downloads/CH341SER_MAC_ZIP.html)

ChromeまたはEdgeウェブブラウザで[ESPhome Webツール](https://web.esphome.io/?dashboard_install)を開きます。

**CONNECT**をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/34.png" /></div>

ポップアップウィンドウでXIAO ESP32のシリアルポートを選択します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/64.png" /></div>

**INSTALL**をクリックし、上記の手順でダウンロードした`.bin`ファイルを選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/35.png" /></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/38.png" /></div>

- オプション 2: [esphome-flasherツール](https://github.com/esphome/esphome-flasher)を使用。

ドライバをインストールし、ブラウザを変更した後でも方法1でファームウェアをアップロードできない場合は、方法2を試してください。具体的なインストール方法と手順については公式チュートリアルを参照してください。

:::tip
XIAO ESP32C3のログメッセージを確認したい場合、このソフトウェアのログ表示ボタンを使用してログを確認することもできます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/41.png" /></div>
:::

アップロードが完了したら、PCからXIAO ESP32C3を切断できます（ログを確認する必要がない場合）。その後、XIAOを個別に電源供給するだけです。

すべてが正常に進めば、XIAO ESP32C3は設定したWiFiを検索して接続します。

私の場合、LinkStar H68Kのネットワークを使用しています。ネットワークオプションで確認し、LinkStar H68Kによって割り当てられたIPアドレスを確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/42.png" /></div>

通常、この時点でHome Assistantではデバイスのステータスがオフラインからオンラインに変わります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/65.png" /></div>

## Home Assistant パネルの設定

### ステップ 6. XIAO ESP32C3 に接続する

LAN 上に多くの Home Assistant デバイスがない場合、Home Assistant は自動的に ESP デバイスを検索して **Devices** タブに追加することができます。このデバイスは **Settings** の **Devices & Services** タブ内で確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/66.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/67.png" /></div>

自動検索されない場合は、XIAO ESP32C3 の IP アドレスを使用して接続することもできます。

**ADD INTEGRATION** をクリックし、**esphome** を検索します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/43.png" /></div>

次に、XIAO ESP32C3 の IP アドレスとポート番号 **6053** を入力します。その後、**SUBMIT** をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/44.png" /></div>

入力した IP アドレスとポート番号が正しい場合、[ステップ 4](#jump1) で保存した暗号化キーの入力を求められます。

その後、**SUBMIT** をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/68.png" /></div>

これで、デバイスの追加手順が正常に完了しました。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/51.png" /></div>

### ステップ 7. 24GHz mmWave Module Lite の機能概要

このスイートの全機能とこれらの機能の使用方法を迅速に理解するために、このセクションを注意深く読む必要があります。より詳細な情報が必要な場合は、[製品のユーザーマニュアル](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V1.5.pdf) を読むことをお勧めします。

ダッシュボードの設定とパラメータの詳細については、ESPHome Docs に詳細な記述をまとめていますので、完全な記述と詳細を読むためにそちらをご覧ください。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://deploy-preview-3383--esphome.netlify.app/components/sensor/seeed_mr24hpc1" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>ESPHome Docs 📕</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/49.png" style={{width:700, height:'auto'}}/></div>

### ステップ 8. Home Assistant パネルの設定

デフォルトのカードが非常に退屈でデータの表示に不向きだと感じる場合、Home Assistant は選択可能な多くの既製ダッシュボードを提供しています。

自分の好みに合わせて独自のダッシュボードを作成することができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/73.png" /></div>

例えば、情報の出力を制御するオプションをスイッチ形式に変更することができます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/74.png" /></div>

人の動きの速度を視覚的なダッシュボード表示に変換することも可能です。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/75.png" /></div>

これが私が作成したものです。スマートホームコントロールセンターの素質があるように見えます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/76.png" /></div>

これで、チュートリアルの内容を無事に終了しました。

## XIAO ESP32C3 を使用して Grove を Home Assistant に接続する

もちろん、XIAO ESP32C3 は Home Assistant で 24GHz mmWave Human Static Presence Module Lite をサポートするだけではありません。このドキュメントでは、他にもさまざまなチュートリアルを見つけることができます。

- [XIAO ESP32C3 を使用して Grove を Home Assistant に接続する](https://wiki.seeedstudio.com/ja/Connect-Grove-to-Home-Assistant-ESPHome/)

創造力を発揮しましょう！

## トラブルシューティング

### FAQ1: ESPhome Web ツールを使用してファームウェアをアップロード中に次のエラーが発生しました。どうすれば修正できますか？

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/37.png" /></div>

> A: このプロンプトがアップロード中に表示された場合、XIAO ESP32C3 を PC から切断してください。その後、BOOT ボタンを押しながらボードを PC に接続し、BOOT ボタンを離してブートローダーモードに入ります。この状態で再接続し、再度ファームウェアをアップロードすれば十分です。

### FAQ2: esphome flasher を Linux にインストールしようとしましたが、チュートリアルに従ってもインストールできませんでした。どうすればよいですか？

> A: 以下のコマンドを実行する際に、システムバージョンを選択する必要があります。そうしないとエラーが発生します。たとえば、私のコンピュータが Ubuntu 22.04 の場合、実行すべきコマンドは以下の通りです。

```
sudo apt install python3

pip3 install -U \
    -f https://extras.wxpython.org/wxPython4/extras/linux/gtk3/ubuntu-22.04/ \
    wxPython

pip3 install esphomeflasher
```

### FAQ3: 正しい WiFi とパスワードを入力しましたが、XIAO ESP32C3 の IP アドレスが表示されません。なぜですか？

> A: この問題が発生した場合、XIAO ESP32C3 のアンテナが正しく接続されているか確認してください。アンテナがすでに接続されている場合は、可能であれば XIAO が LinkStar から 3m 以上離れていないことを確認してください（より強力なアンテナに交換していない限り）。  
それでも XIAO が表示されない場合は、[esphome flasher](https://github.com/esphome/esphome-flasher) ソフトウェアを使用して XIAO のログ情報を確認し、ログを通じて XIAO の接続をチェックしてください。  
また、XIAO を再接続して WiFi を再検索し、再接続を試みることもできます。

<!-- ### FAQ4: XIAO ESP32C3 がネットワークに接続されていますが、センサーデータが更新されないのはなぜですか？

:::caution
2023年6月1日時点のトラブルシューティングでは、ESPHome のダッシュボードで値を設定したりシーンを変更したりすると、レーダーが停止する可能性があることが判明しています。

2023年7月31日時点で、レーダーが完全に動作しなくなる問題は修正されているため、このチュートリアルのライブラリファイルとコンフィギュレーターを更新してください。
:::

> A: 以前の Wiki コンテンツでは、デフォルトの UART ピン（D6, D7）を使用してレーダーからデータを受信・送信していましたが、多くのユーザーからレーダーを再起動しないと動作しないというフィードバックがありました。これに対応して、Wiki コンテンツと手順を更新し、レーダーのシリアルポートを **D2 と D3** に置き換えました。テストの結果、この方法で問題が非常にうまく解決されることが確認されています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/esphome-pinconnect.png" style={{width:600, height:'auto'}}/></div>

> **Wiki の更新に気づいていない場合は、レーダーを再配線し、このチュートリアルの記事の [ステップ2と5](#configure-the-xiao-esp32c3-and-esphome-connection) に従ってコンパイルとアップロードプロセスを再実行することをお勧めします。**

> ただし、シリアルピンを置き換えた後でもレーダーが正常に動作しないというユーザーもいます。そのため、問題が発生している箇所を確認するために、以下の方法と手順を提案します。それでもレーダーが動作しない場合は、**操作手順を技術サポートのメールアドレスに提供してください**。これにより、アフターサポートの問題処理が迅速化されます。

**以下の排除手順を順に確認してください。**

> **排除1: XIAO ESP32C3 が ESPHome が展開されているデバイスと同じ LAN にあることを確認してください。**

> XIAO ESP32C3 が ESPHome のデバイスと同じ LAN にない場合、Home Assistant で表示されるログは不完全であり、データ収集の基準として使用できません。そのため、ルーターを再確認し、XIAO の IP アドレスが表示されるか確認してください。

> **排除2: データライブ転送ボタンがオンになっているか確認してください。**

> XIAO がネットワークに接続され、デバイスが正常に追加されると、ダッシュボードにレーダーコンポーネントが表示されます。デフォルトではライブデータ転送ボタンがオフになっているため、これをオンにすることでレーダーデータが継続的に報告されるようになります。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/69.png" /></div>

> **排除3: レーダーが正常に動作するか確認してください。**

> まず、レーダーが XIAO ESP32C3 と正常に動作することを確認する必要があります。これにより、ESPHome または製品のどちらに問題があるかを迅速に特定できます。以下のコードを Arduino IDE にアップロードしてください。この際、**レーダーの RX/TX ピンが XIAO の D2/D3 に接続されていること**に注意してください。

```cpp
#include "Arduino.h"
#include <humanstaticLite.h>
#include <HardwareSerial.h>

// ハードウェアシリアルを使用する場合
HumanStaticLite radar = HumanStaticLite(&Serial1);

void setup() {
  // 初回実行時のセットアップコード
  Serial.begin(115200);
  Serial1.begin(115200, SERIAL_8N1, 4, 5);
  while(!Serial);   // シリアルポートが開かれるとプログラムが実行開始
  Serial.println("Ready");
}

void loop() {
  // 繰り返し実行されるメインコード
  radar.recvRadarBytes();           // レーダーデータを受信して処理を開始
  radar.showData();                 // シリアルポートに受信データフレームを表示
  delay(200);                       // プログラムの詰まりを防ぐための遅延
}
```

> シリアルモニターを開き、ボーレートを 115200 に設定してください。レーダーが正常に動作している場合、多くの数値が表示されるはずです。

> このステップを実行してもデータ出力が表示されない場合は、Wiki に従ってレーダーのファームウェアを再フラッシュしてください。ファームウェアを更新する方法は2つあります：[Firmware Version Updates](https://wiki.seeedstudio.com/ja/Radar_MR24HPC1/#firmware-version-updates)。

> ファームウェアを更新してもまだ何も反応がない場合は、遠慮せずに直接技術サポートチームに連絡してください。そして、これまでに行ったすべての手順をお知らせください。

> **除外条件 4: XIAO とレーダーが上記のチェックポイントでは正常に動作しているが、シリアルポートピンを交換してもレーダーのリアルタイムデータを取得できない場合**

> レーダーの RX および TX ピンを D2/D3 に交換し、上記の手順に従って慎重にトラブルシューティングを行ったにもかかわらず、リアルタイムデータメッセージを取得できない場合は、技術サポートチームに連絡してください。その前に、**Arduino 環境でレーダーが正常に動作するかどうかをお知らせください**。これにより、問題を分析して対処することができます。

<!-- > A: この問題に直面した場合、センサーがデータを返さない正確な理由を理解するためにログを使用する必要があります。これまでに確認された可能性のある状況は、センサーが応答しない状況です。この場合、ログは次のように表示されます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/71.png" /></div>

> このようなログが表示された場合は、以下の3点を再確認してください。
> 1. センサーに5Vが供給されているかどうか。
> 2. センサーの RX および TX ピンが正しく接続されているかどうか。
> 3. センサーから XIAO への5V線のみを切断し、再接続してセンサーに再度電源を供給する。

> 一般的に言えば、3番目のポイントでこの問題は解決します。データ転送の正常なログフローは次のようになります。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/72.png" /></div> -->

### FAQ4: Jlink を使用してファームウェアを書き込もうとした際に、「Programming of range @address 0x08000000 failed (block verification error) Program failed Failed to program and verify target」というエラーが発生しました。どうすればよいですか？

Jlink を使用してファームウェアを書き込む際にこのエラーが発生した場合、以下のいずれかの状況に該当する可能性があります。

1. センサーが完全に正常に動作しなくなり、メッセージを一切受信できなくなっている。
2. 無効または不正なファームウェアを使用しようとしている。

:::caution
レーダーが元々正常に動作していた場合は、正しいファームウェアを使用しているかどうかを再確認してください！使用するファームウェアはレーダーやセンサーモデルごとに異なります！また、UART を介したファームウェアアップグレードと Jlink を介したファームウェアアップグレードは異なります！以下の手順を進めるのを中止してください。
:::

<details>

<summary><strong>例外時にこのエラーメッセージが表示されることを確認しました</strong></summary>

レーダーが全く動作しない場合、このエラーメッセージが表示されるのは正常かもしれません。

レーダーの異常動作により、レーダーが読み取り/書き込み保護メカニズムをトリガーしている可能性があります。この場合、一般的にユーザーは製品に対してフラッシュプログラムを実行できなくなります。そのため、レーダーの読み取り/書き込み保護メカニズムを解除する必要があります。

読み取り/書き込み保護を解除することには高いリスクが伴うため、ここでは解除方法を一般公開していません。必要な方のために、方法を[こちらの zip ファイル](https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/ArteryICPProgrammer_V2.4.23.zip)に配置しています。異常なレーダーの保護を解除した後、再度ファームウェアを更新して正常な動作を回復することができます。

</details>

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただき、ありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しております。お客様のご希望やニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>