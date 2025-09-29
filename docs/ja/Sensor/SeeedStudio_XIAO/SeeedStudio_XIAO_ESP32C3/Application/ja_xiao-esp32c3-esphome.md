---
description: XIAO ESP32C3 で ESPHome にアクセスする
title: XIAO ESP32C3 が ESPHome サービス経由で Home Assistant にアクセスする
keywords:
- ESPHome
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao-esp32c3-esphome
last_update:
  date: 03/03/2023
  author: Citric
---

# XIAO ESP32C3 が ESPHome サービス経由で Home Assistant にアクセスする

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/78.jpg" style={{width:700, height:'auto'}}/></div>

この記事では、独自の Home Assistant 環境に ESPHome サービスをインストールする方法をガイドします。XIAO ESP32C3 の WiFi 機能を使用することで、XIAO を非常にスムーズに Home Assistant にホーム端末の一部として接続できるようになります。

さらに、最も人気のある 24GHz mmWave Human Static Presence Module Lite と組み合わせて、人感検知機能を持つ Home Assistant を構築します。

## はじめに

:::tip
2023年7月31日現在、レーダーが完全に動作しなくなる以前の問題は修正されましたので、このチュートリアルが正常に動作するように、ライブラリファイルとコンフィギュレーターを更新してください。
:::

このチュートリアルをすべて実行したい場合は、以下を準備する必要があります。

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
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
            </a>
        </div></td>
        <td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/24GHz-mmWave-Sensor-Human-Static-Presence-Module-Lite-p-5524.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
  </tbody></table>

このプロジェクトの最終目標は、24GHz mmWave Human Static Presence Module Lite を Home Assistant にデプロイすることです。

このプロジェクトでは、24GHz mmWave Human Static Presence Module Lite の完全な設定ファイルとライブラリを作成し、センサーを Home Assistant に迅速にデプロイできるようにしました。

このチュートリアルの内容は、大まかに以下の手順で進めます。

1. [Home Assistant 環境の選択](#select-your-home-assistant-environment)
2. Home Assistant での ESPHome のインストールと設定
3. [XIAO ESP32C3 と ESPHome 接続の設定](#configure-the-xiao-esp32c3-and-esphome-connection)
4. [Home Assistant パネルの設定](#configure-home-assistant-panel)

もちろん、XIAO ESP32C3 が Home Assistant で Grove をどのように使用するかに興味がある場合は、この章を直接読むことができます。

- [XIAO ESP32C3 を使用して Grove を Home Assistant に接続](#connect-grove-to-home-assistant-using-xiao-esp32c3)

## Home Assistant 環境の選択

このルーチンでは、Home Assistant 環境のインストール方法については詳しく説明しません。すでに動作する Home Assistant デバイスをお持ちであることを前提とします。

Home Assistant のインストール方法を学びたい場合は、[公式チュートリアル](https://www.home-assistant.io/installation/)を参照してください。x86 デバイスを使用して Home Assistant をインストールすることを強く推奨します。これは、Supervised で Home Assistant をインストールする最もユーザーフレンドリーな方法だからです。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/77.png" /></div>

上記の表によると、**Home Assistant OS** と **Home Assistant Supervised** をインストールするのが最も適切で、多くの手間を省くことができます。OpenWRT（例：LinkStar H68K を使用）で Docker 上で Home Assistant を実行している場合でも、ご心配なく、これを行う方法についても詳細な参考資料を提供します。

Seeed Studio の一部の製品について Home Assistant のインストール方法も書いていますので、参照してください。

- [ODYSSEY-X86 での Home Assistant 入門](https://wiki.seeedstudio.com/ja/ODYSSEY-X86-Home-Assistant/)
- [reTerminal での Home Assistant 入門](https://wiki.seeedstudio.com/ja/reTerminal_Home_Assistant/)
- [LinkStar H68K/reRouter CM4 での Home Assistant 入門](https://wiki.seeedstudio.com/ja/h68k-ha-esphome/)

## Home Assistant での ESPHome のインストール

### ステップ 1. ESPHome のインストール

- **シナリオ 1：Home Assistant OS での ESPHome インストール（Add-on Store あり）**

Home Assistant OS がインストールされている場合、Add-on Store があるため、ESPHome のインストールがはるかに簡単になります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/79.png" /></div>

Add-on Store で ESPHome を検索してインストールできます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/80.png" /></div>

- **シナリオ 2：OpenWRT Docker/Docker での Home Assistant での ESPHome インストール（Add-on Store なし）**

Home Assistant Container をインストールしているため、Add-on Store 経由で ESPHome サービスを簡単にダウンロードできないので、妥協案が必要です。

ESPHome イメージをダウンロードする必要があります。

```
esphome/esphome:latest
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/17.png" /></div>

コンテナが作成されるページで、いくつかの簡単な設定を行う必要があります。

- Container Name: あなたのコンテナ名
- Docker Image: ダウンロードしたばかりの **esphome** イメージを選択
- Network: **host** モードを選択
- Environment Variables(-e): あなたの環境変数

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/18.png" /></div>

上記を入力したら、保存して適用します。コンテナが作成されたことが確認できます。また、それを開始する必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/19.png" /></div>

Home Assistant で ESPHome をダウンロードするのと同じ効果を実現するために、Home Assistant の設定ファイルを変更する必要があります。

Home Assistant コンテナに移動します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/55.png" /></div>

Home Assistant のターミナルに移動します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/56.png" /></div>

ターミナルで以下のコマンドを入力します。

```sh
vi configuration.yaml
```

`configuration.yaml` の末尾に以下の内容を追加してください。

```
# Example configuration.yaml entry
panel_iframe:
  esphome:
    title: "ESPHome"
    url: "http://192.168.100.1:6052"
    icon: mdi:chip
```

dockerコンテナから出るには、Home Assistantコンテナシェルで```exit```と入力します。これが完了したら、Home Assistantコンテナを再起動します。

新しいブラウザページを作成し、アドレス`http://homeassistant:8123/`を入力してHome Assistantアカウントにログインすると、左側のツールバーにESPHomeが表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/57.png" /></div>

## XIAO ESP32C3とESPHomeの接続を設定する

### ステップ2. ハードウェアの準備

このチュートリアルの目標は、Home Assistantダッシュボードで24GHz mmWave人体静的存在モジュールLiteのデータ情報を確認できるようにすることです。

メインボードを通してデバイスをコンピュータに接続します。配線図は以下の表に示されています。

<div class="table-center">
<table align="center">
  <tbody>
    <tr>
      <td colspan="3"><div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/esphome-pinconnect.png" /></div></td>
    </tr>
    <tr>
      <td align="center">XIAO ESP32C3</td>
      <td align="center" />
      <td align="center">24GHz mmWave人体静的<br />存在モジュールLite</td>
    </tr>
    <tr>
      <td align="center">5V</td>
      <td align="center">--></td>
      <td align="center">5V</td>
    </tr>
    <tr>
      <td align="center">GND</td>
      <td align="center">--></td>
      <td align="center">GND</td>
    </tr>
    <tr>
      <td align="center">D2</td>
      <td align="center">--></td>
      <td align="center">RX</td>
    </tr>
    <tr>
      <td align="center">D3</td>
      <td align="center">--></td>
      <td align="center">TX</td>
    </tr>
  </tbody></table>
</div>

### ステップ3. XIAO ESP32C3とHome Assistantを同じLANに接続する

Home Assistantがすでにネットワークに接続されていることを確認してください。例えば、ネットワークケーブルを介してデバイスに接続している場合です。その後、XIAO ESP32C3もこのネットワークに接続できるように、ローカルネットワーク（例：WiFi）をオンにするだけです。

以下では、LinkStar H68Kを例として使用します。私の目標は、XIAOをLinkStar H68Kのホットスポットに接続することです。

OpenWRTの**Network**タブで、**Wireless** --> **ADD**を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/58.png" /></div>

**Device Configuration**の**Transmit Power**では、**auto**を選択します。

**Interface Configuration**設定については、以下の指示に従って入力してください。

- General Setup
  - Mode: LinkStarがインターネットにアクセスする方法によって異なります。ケーブル接続を使用している場合は**Client**を選択し、WiFiに接続している場合は**Access Point**を選択します。
  - ESSID: WiFiの名前を入力してください。スペースや特殊文字は避けるようにしてください。
  - Network: **lan**にチェックを入れます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/23.png" /></div>

- Wireless Security
  - Encryption: WPA2-PSK
  - Key: 設定したいWiFiパスワードを入力します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/24.png" /></div>

上記の情報を入力したら、右下の**Save and Apply**をクリックし、LinkStarがホットスポットを開くまで少し待ちます。

このホットスポットにデバイスが接続されていない場合、信号なしと表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/60.png" /></div>

すべてを考慮して、Home Assistantページに戻りましょう。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/61.png" /></div>

**NEW DEVICE**をクリックします。次に**Continue**をクリックします。

新しいポップアップウィンドウで、設定したいアプリケーションの名前と、LinkStarで設定したホットスポットの名前とパスワード（または独自のWiFi）を入力してください。XIAO ESP32C3とHome Assistantが**同じLAN**上にあることを確認してください。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/25.png" /></div>

次に**Next**をクリックします。

デバイスタイプでは、**ESP32-C3**を選択してください。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/26.png" /></div>

次に**Next**をクリックします。

<span id="jump1"><strong>Encryption key</strong>をクリックして、安全な場所に保存してください。このキーは後のステップで使用します。</span>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/27.png" /></div>

次に**SKIP**をクリックします。

### ステップ4. XIAO ESP32C3の設定yamlファイルを変更する

次に、作成したデバイスタブをクリックし、左下の**EDIT**ボタンを押します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/28.png" /></div>

このyamlファイルに変更を加える必要があることに注意してください。変更する内容を2つの主要部分に分けており、下図の①と②に対応しています。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/62.png" /></div>

- **①**の内容では、設定したデバイス名以外は変更しないでください。残りの内容については、以下のコードを参照してください。

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

- コンテンツの **②** で、`captive_portal:` の後に以下のコードをコピーしてください。

<details>

<summary>完全なコードをプレビューするにはここをクリック</summary>

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

### ステップ5. XIAO ESP32C3にファームウェアをアップロード

- **方法1: 直接コンパイルしてアップロード**

x86デバイスを使用していて、デバイスポートでXIAOが確認できる場合は、プログラムをコンパイルしてXIAOにアップロードできます。

XIAOをデバイスに接続します。

<div align="center"><img src="https://files.seeedstudio.com/wiki/ESPHome/49.png" style={{width:700, height:'auto'}}/></div>

デバイスバーの右下にある3つの点をクリックし、**Install**を選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/84.png" /></div>

**Plug into the computer running ESPHome Dashboard**をクリックします。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/85.png" /></div>

接続されたポートを選択します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/ESPHome/18.png" /></div>

これで、必要なボードパッケージがすべてダウンロードされ、ESPHomeファームウェアがXIAO ESP32C3に書き込まれます。書き込みが成功すると、以下の出力が表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/ESPHome/19.png" /></div>

XIAOをデバイスに接続してもポートが見つからない場合は、2番目の方法を試してください。

- **方法2: ホストを使用してコンパイル済みファームウェアをアップロード**

LinkStar H68Kのようなソフトルーターは外部MCUデバイスの認識をサポートしていないため、まずコンパイル済みファームウェアをダウンロードし、その後別のPCを介してファームウェアをアップロードする必要があります。

右上の**Install**ボタンをクリックします。次に最後の項目**Manual download**を選択します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/30.png" /></div>

**Modern format**を選択します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/31.png" /></div>

その後、ダウンロードとコンパイルに長時間かかりますので、しばらくお待ちください。すべての準備が整うと、ファームウェアが自動的にコンピューターにダウンロードされます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/33.png" /></div>

XIAO ESP32C3にファームウェアをアップロードするには、いくつかのオプションがあります。ここでは2つの方法を紹介します：

- オプション1: [ESPhome Webツール](https://web.esphome.io/?dashboard_install)を使用してアップロード。

適切なドライバーがインストールされていることを確認してください。以下は、ESPデバイスで使用される一般的なチップのドライバーです。

1. CP2102ドライバー: [Windows & Mac](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)

2. CH342、CH343、CH9102ドライバー: [Windows](https://www.wch.cn/downloads/CH343SER_ZIP.html)、[Mac](https://www.wch.cn/downloads/CH34XSER_MAC_ZIP.html)

3. CH340、CH341ドライバー: [Windows](https://www.wch.cn/downloads/CH341SER_ZIP.html)、[Mac](https://www.wch.cn/downloads/CH341SER_MAC_ZIP.html)

ChromeまたはEdgeウェブブラウザで[ESPhome Webツール](https://web.esphome.io/?dashboard_install)を開きます。

**CONNECT**をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/34.png" /></div>

ポップアップウィンドウでXIAO ESP32シリアルポートを選択します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/64.png" /></div>

**INSTALL**をクリックし、上記の手順でダウンロードした`.bin`ファイルを選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/35.png" /></div>

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/38.png" /></div>

- オプション2: [esphome-flasherツール](https://github.com/esphome/esphome-flasher)を使用。

ドライバーをインストールしてブラウザを変更しても方法1でファームウェアをアップロードできない場合は、方法2を試してください。具体的なインストール方法と手順については、公式チュートリアルを参照してください。

:::tip
XIAO ESP32C3のログメッセージを観察したい場合は、このソフトウェアのView Logsボタンからも確認できます。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/41.png" /></div>
:::

アップロードが完了したら、XIAO ESP32C3をPCから切断し（ログを確認する必要がない限り）、XIAOに単独で電源を供給するだけです。

すべてがうまくいけば、XIAO ESP32C3は設定したWiFiを検索して接続します。

私の場合と同様に、LinkStar H68Kのネットワークを使用します。ネットワークオプションでそれを見つけることができ、LinkStar H68Kによって割り当てられたIPアドレスを確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/42.png" /></div>

通常、この時点でHome Assistantでは、デバイスのステータスもオフラインからオンラインに変わります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/65.png" /></div>

## Home Assistant パネルの設定

### ステップ 6. XIAO ESP32C3 への接続

LAN 上に多くの Home Assistant デバイスがない場合、Home Assistant は自動的に ESP デバイスを検索し、デバイスタブに追加することができます。このデバイスは **設定** の **デバイスとサービス** タブ内で確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/66.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/67.png" /></div>

自動検索されない場合は、XIAO ESP32C3 の IP アドレスに基づいて接続することもできます。

**統合を追加** をクリックし、**esphome** を検索します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/43.png" /></div>

次に、ポート番号 **6053** を含む XIAO ESP32C3 の IP アドレスを入力します。その後、**送信** をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/44.png" /></div>

入力した IP アドレスとポート番号が正しい場合、暗号化キーの入力を求められます。これはステップ 4 で保存するよう指示したものです。

その後、**送信** をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/68.png" /></div>

この時点で、デバイス追加の手順が正常に完了しました。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/51.png" /></div>

### ステップ 7. 24GHz mmWave Module Lite 機能概要

スイートの全機能とこれらの機能の使用方法を素早く理解するために、このセクションを注意深く読む必要があります。より詳細な情報が必要な場合は、[製品のユーザーマニュアル](https://files.seeedstudio.com/wiki/mmWave-radar/MR24HPC1_User_Manual-V1.5.pdf)を読むことをお勧めします。

ダッシュボードの設定とパラメータの詳細については、ESPHome Docs で詳細な記事をまとめましたので、完全な記事と詳細を読むためにそちらに移動してください。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://deploy-preview-3383--esphome.netlify.app/components/sensor/seeed_mr24hpc1" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>ESPHome Docs 📕</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmwave_kit/49.png" style={{width:700, height:'auto'}}/></div>

### ステップ 8. Home Assistant パネルの設定

デフォルトのカードがデータ表示において非常に退屈で使いにくいと感じる場合、Home Assistant は選択できる幅広い既製のダッシュボードを提供しています。

お好みに合わせて独自のダッシュボードを作成できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/73.png" /></div>

例えば、情報出力を制御するオプションを素敵なスイッチに変更できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/74.png" /></div>

人の動きの速度を視覚的なダッシュボード表示に変更できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/75.png" /></div>

これが私が作成したものです。スマートホーム制御センターの素質があるように見えます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/76.png" /></div>

これまでで、チュートリアルの内容を正常に完了しました。

## XIAO ESP32C3を使用してGroveをHome Assistantに接続する

もちろん、XIAO ESP32C3にはHome Assistantでの24GHz mmWave人体静的存在検知モジュールLiteのサポート以上の機能があり、このドキュメントでより多くのチュートリアルを見つけて独自の用途に活用できます。

- [XIAO ESP32C3を使用してGroveをHome Assistantに接続する](https://wiki.seeedstudio.com/ja/Connect-Grove-to-Home-Assistant-ESPHome/)

創造力を発揮してください！

## トラブルシューティング

### FAQ1: ESPhome Webツールを使用してファームウェアをアップロードする際に以下のエラーが発生しました。どのように修正できますか？

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/37.png" /></div>

> A: アップロード中にこのプロンプトが表示された場合は、XIAO ESP32C3をPCから切断してください。その後、BOOTボタンを押したまま、BOOTボタンを押し続けながらボードをPCに接続し、ボタンを離してブートローダーモードに入ります。この時点で再接続してファームウェアを再度アップロードすれば十分です。

### FAQ2: esphome flasherのチュートリアルに従ってLinux環境でesphome flasherをインストールできません？

> A: 以下のコマンドを実行する際は、システムバージョンを選択する必要があります。そうしないとエラーが発生します。例えば、私のコンピューターがUbuntu 22.04の場合、実行すべきコマンドは以下の通りです。

```
sudo apt install python3

pip3 install -U \
    -f https://extras.wxpython.org/wxPython4/extras/linux/gtk3/ubuntu-22.04/ \
    wxPython

pip3 install esphomeflasher
```

### FAQ3: 正しいWiFiとパスワードを入力したのに、XIAO ESP32C3のIPアドレスが表示されないのはなぜですか？

> A: この問題が発生した場合は、XIAO ESP32C3のアンテナが正しく接続されているかを確認してください。アンテナが既に接続されている場合は、可能であればXIAOがLinkStarから3m以内にあることを確認してください（より強力なアンテナに交換していない限り）。
それでもXIAOが表示されない場合は、[esphome flasher](https://github.com/esphome/esphome-flasher)ソフトウェアを使用してXIAOのログ情報を確認し、ログを通じてXIAOの接続を確認できます。
xiaoを再接続して、WiFiの検索と再接続を試行させることができます。

<!-- ### FAQ4: 私のXIAO ESP32C3はネットワークに接続されていますが、なぜセンサーデータが更新されないのでしょうか？

:::caution
6月1日現在、2023のトラブルシューティングにより、ESPHomeのダッシュボードで任意の値を設定したり、任意のシーンを変更したりすると、レーダーがダウンする可能性があることが判明しています。

31年7月2023日現在、レーダーが完全に停止する原因となっていた以前の問題は修正されましたので、このチュートリアル種が正常に動作するようライブラリファイルとコンフィギュレーターを更新してください。
:::

> A: 以前のWikiコンテンツでは、レーダーからデータを受信・送信するためにデフォルトのUARTピン（D6、D7）を使用していましたが、多くのユーザーからレーダーが動作する前に再電源投入が必要であるとのフィードバックがありました。これに対応して、**Wikiを更新**し、レーダーのシリアルポートを**D2とD3**に置き換える内容と手順に変更しました。テスト後、この変更により問題が非常によく解決されることが確認されました。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/esphome-pinconnect.png" style={{width:600, height:'auto'}}/></div>

> **Wikiの更新に気づいていない場合は、この記事のチュートリアルの[stepの2と5](#configure-the-xiao-esp32c3-and-esphome-connection)に従って、レーダーを再配線し、コンパイルとアップロードプロセスを書き直すことをお勧めします。**

しかし、一部のユーザーからは、シリアルピンを交換した後でも、レーダーが正常に動作しないという報告があります。そこで、問題がどこで発生しているかを確認するために、以下の方法とstepsを提案します。それでもレーダーの動作問題を解決できない場合は、**技術サポートメールに操作stepsを提供してください**。これにより、アフターサービス問題の処理を迅速化できます。

**以下の除外項目を順番に確認してください。**

> **除外事項1: XIAO ESP32C3が展開されたデバイスESPHomeと同じLANの下にあることを確認してください。**

> XIAO ESP32C3がESPHomeのデバイスと同じLAN下にない場合、Home Assistantで確認できるログは不完全であり、データ収集の根拠として使用することはできません。そのため、XIAOのIPアドレスが表示されているかどうか、ルーターを再度確認してください。

> **除外 2: データライブ転送ボタンがオンになっていることを確認してください。**

> XIAOがネットワークに接続され、デバイスが正常に追加された後、ダッシュボードでレーダーコンポーネントを確認できるようになります。デフォルトではライブデータ転送ボタンがオフになっているため、レーダーデータが継続的に報告されるのを確認するには、このボタンをオンにする必要があることにご注意ください。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/69.png" /></div>

> **除外3: レーダーが正常に動作するかどうかを確認する。**

> XIAO ESP32C3でレーダーが正常に動作することを最初に確認する必要があります。これにより、ESPHomeの問題なのか製品の問題なのかを迅速に特定できます。Arduino IDEで以下のコードをXIAO ESP32C3にアップロードしてください。レーダーの**RX/TXピンはXIAOのD2/D3に接続する**必要があることに注意してください。

```cpp
#include "Arduino.h"
#include <humanstaticLite.h>
#include <HardwareSerial.h>

// can also try hardware serial with
HumanStaticLite radar = HumanStaticLite(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200, SERIAL_8N1, 4, 5);
  while(!Serial);   //When the serial port is opened, the program starts to execute.
  Serial.println("Ready");
}

void loop() {
  // put your main code here, to run repeatedly:
  radar.recvRadarBytes();           //Receive radar data and start processing
  radar.showData();                 //Serial port prints a set of received data frames
  delay(200);                       //Add time delay to avoid program jam
}
```

> シリアルモニターを開き、ボーレートを115200に設定してください。レーダーが正常に動作している場合、多くの数値が出力されるのが確認できるはずです。

> この手順を実行してもデータ出力が見られない場合は、Wikiに従ってレーダーのファームウェアを再フラッシュしてください。ファームウェアを更新する方法を2つ提供しています：[ファームウェアバージョンの更新](https://wiki.seeedstudio.com/ja/Radar_MR24HPC1/#firmware-version-updates)。

> ファームウェアを更新した後もまだ何も聞こえない場合は、遠慮なく技術サポートチームに直接お問い合わせください。そして、すでに実行したすべての内容をお知らせください。

> **除外4：XIAOとレーダーが上記のチェックポイントで正常に動作するが、シリアルポートピンを交換した後も、レーダーのリアルタイムデータを取得できない。**

> レーダーのRXとTXピンをD2/D3に交換し、上記に従って慎重にトラブルシューティングを行ったにもかかわらず、リアルタイムデータメッセージを取得できない場合は、技術サポートチームにお問い合わせください。その前に、**レーダーがArduino環境で正常に動作するかどうかをお知らせください**。これにより、問題を分析して対処することができます。-->

<!-- > A：この問題に遭遇した場合、ログを使用してセンサーがデータを返さない正確な理由を理解する必要があります。これまでに遭遇する可能性があることが判明している状況は、センサーが応答しない状況で、そのログは次のようになります。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/71.png" /></div>

> 類似のログが表示される場合は、以下の3つの場所を再度確認してください。
> 1. センサーに5Vが供給されているかどうか。
> 2. センサーのRXとTXピンが正しく接続されているか。
> 3. センサーからXIAOへの5V線のみを切断し、再接続してセンサーを再度電源投入できるようにする。

> 一般的に、3番目のポイントでこの問題が解決されます。データ転送の正常なログフローは次のようになるはずです。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/72.png" /></div> -->

### FAQ4: Jlinkフラッシュファームウェアを使用したが、「Programming of range @address 0x08000000 failed (block verification error) Program failed Failed to program and verify target」エラーが発生した？

Jlinkフラッシュファームウェアを使用してこのエラーが発生した場合、以下のいずれかの状況にある可能性があります。

1. センサーがまったく正常に動作しなくなり、センサーからメッセージを受信できない。
2. 無効または不正なファームウェアを使用しようとしている。

:::caution
レーダーが元々正常に動作していた場合は、正しいファームウェアを使用していることを再度確認してください！使用するファームウェアはレーダーごと、センサーモデルごとに異なります！また、UART経由のファームウェアアップグレードとJlink経由のファームウェアアップグレードは同じではありません！以下の手順を続行するのを停止してください。
:::

<details>

<summary><strong>製品が例外の場合にこのエラーメッセージが表示されることを確認しました</strong></summary>

レーダーがまったく動作していない場合、このエラーメッセージが表示されるのは正常である可能性があります。

レーダーの異常動作により、レーダーが読み取り/書き込み保護メカニズムをトリガーし、一般的にユーザーが製品にプログラムをフラッシュすることが許可されなくなったため、レーダーの読み取り/書き込み保護メカニズムのロックを解除する必要があります。

読み取りと書き込みの保護解除は高リスクであるため、読み取りと書き込みの保護解除方法をここで一般に公開することはありません。必要な方のために[こちらのzipファイル](https://files.seeedstudio.com/wiki/Radar_MR24HPCB1/ArteryICPProgrammer_V2.4.23.zip)に方法を配置します。異常なレーダーの保護が解除されると、ファームウェアを再度更新して正常動作を復元できます。

</details>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！お客様の製品体験を可能な限りスムーズにするため、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しております。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
