---
description: Home Assistant を中心にスマートホームコントロールセンターを構築する
title: Home Assistant を中心にスマートホームコントロールセンターを構築する
keywords:
  - LinkStar
  - 初めてのセットアップ
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/h68k-ha-esphome
last_update:
  date: 05/15/2025
  author: jianjing Huang
---


<p><meta name="google-site-verification" content="2bq3L0F_PFVokQM-qT-al7x9FcSNJOO8TtJfAHW43lE" /></p>

# Home Assistant を中心にスマートホームコントロールセンターを構築する

この記事では、Seeed Studio の新製品 LinkStar H68K に Home Assistant をセットアップし、ESPHome 環境をデプロイする方法を詳しく説明します。ESPHome は Home Assistant で非常に一般的なサービスです。ソフトルーティングのシステム制限のため、ESPHome を例に取り上げ、このサービスをインストールする巧妙な方法を案内します。

## 初めに

このチュートリアルをすべて実行するには、以下のものを準備する必要があります。

<table align="center">
 <tr>
     <th>Wi-Fi 6 対応 LinkStar H68K</th>
      <th>reRouter CM4 1432（オプション）</th>
      <th>XIAO ESP32C3</th>
 </tr>
  <tr>
      <td><div align="center"><img width ={210} src="https://files.seeedstudio.com/wiki/LinkStar/OVerview.jpg"/></div></td>
      <td><div align="center"><img width ={210} src="https://files.seeedstudio.com/wiki/Mini_Router/mini_router_overview.png"/></div></td>
      <td><div align="center"><img width ={100} src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png"/></div></td>
  </tr>
 <tr>
      <td align = "center"><a href="https://www.seeedstudio.com/LinkStar-H68K-1432-p-5501.html">今すぐ購入</a></td>
      <td align = "center"><a href="https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM4-Case-p-5029.html">今すぐ購入</a></td>
      <td align = "center"><a href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html">今すぐ購入</a></td>
 </tr>
</table>

*reRouter CM4 1432 もこのチュートリアルに対応しています。LinkStar または reRouter を購入できます。

このプロジェクトの目的は、LinkStar の Docker サービスを使用して Home Assistant と ESPHome をインストールし、LinkStar ホットスポットを構成して、XIAO ESP32C3 の WiFi 機能を使用して LinkStar に接続し、ネットワークを完成させることです。

さらに、広範な Grove エコシステムと組み合わせることで、Home Assistant でさらに多くの可能性を実現できます。

このチュートリアルの内容は、以下のステップを大まかに進めていきます。

1. [LinkStar OpenWRT で Docker 環境を構成する](#configure-home-assistant-panel)
2. [Home Assistant と ESPHome のインストールと構成](#installation-and-configuration-of-home-assistant-esphome)
3. [Seeed Studio XIAO ESP32C3 を ESPHome に追加する](#add-seeed-studio-xiao-esp32c3-to-esphome)
4. [ESPHome と Home Assistant を使用した Grove モジュール](#grove-modules-with-esphome-and-home-assistant)

## LinkStar OpenWRT で Docker 環境を構成する

### ステップ 1. LinkStar に OpenWRT をインストールする

LinkStar にさまざまなシステムをインストールする方法については、LinkStar Wiki に詳しく記載されています。このチュートリアルでは、OpenWRT システムを例に取り上げ、LinkStar をソフトルートとして機能させながら Home Assistant コンテナをインストールする方法を説明します。

- [TF カードに OpenWRT をフラッシュする](https://wiki.seeedstudio.com/ja/linkstar-install-system/#flash-openwrt-to-the-tf-card)
- [eMMC に OpenWRT をフラッシュする](https://wiki.seeedstudio.com/ja/linkstar-install-system/#flash-openwrt-to-emmc)

上記から、LinkStar に OpenWRT をインストールするシステムの場所を選択してください。

### ステップ 2. LinkStar ネットワークを構成する

ネットワークケーブルを使用して LinkStar に接続し、ブラウザで IP アドレス `192.168.100.1` を入力して OpenWRT の操作バックエンドにアクセスしてください。

初期アカウントのパスワードは以下の通りです：

```
アカウント: root
パスワード: password
```

次に、LinkStar をインターネットに接続する必要があります。

無線ネットワーク対応の LinkStar を購入する必要があるため、ネットワークケーブルを LinkStar に接続するか、WiFi に接続することを選択できます。

- 有線ネットワークの場合は、ネットワーク事業者の指示に従ってネットワークを構成してください。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/53.png"/></div>

- 無線 LAN を使用する場合は、**Wireless** オプションでネットワークを検索できます。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/54.png"/></div>

その後、ネットワークパスワードを入力し、**Save and Apply** をクリックしてください。

次のステップを進める前に、良好なネットワーク状態であることを確認してください。

### ステップ 3. Docker により多くのスペースを割り当てる

デフォルトでは、Docker のサイズは約 250MB しかなく、イメージをインストールするには十分ではありません。そのため、まず Docker の容量を拡張する必要があります。

**System** --> **Disk Man** --> **EDIT** をクリックします。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/1.png"/></div>

最後の行に、追加するストレージスペースのサイズを END SECTOR 列に記入します。この例では `+20G` です。その後、**NEW** ボタンをクリックします。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/2.png"/></div>

**ext4** フォーマットを選択し、**FORMAT** ボタンをクリックします。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/3.png"/></div>

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/4.png"/></div>

完了すると、新しい 20GB のスペースが追加されているのがわかります。ただし、現在は空きスペースの状態なので、Docker にマウントする必要があります。

次に、**System** --> **Mount Points** を選択し、**Mount Point** セクションで **ADD** ボタンをクリックします。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/5.png"/></div>

先ほど作成した新しいスペースを選択します。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/6.png"/></div>

マウントポイントとして **Use as Docker data (/opt)** を選択します。**Enable this mount** チェックボックスを忘れずにチェックし、**SAVE & APPLY** ボタンをクリックしてください。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/7.png"/></div>

拡張のすべての設定が完了したら、再起動するだけで有効になります。

**System** --> **Reboot** を選択し、**PERFORM REBOOT** ボタンをクリックします。OpenWRT が再起動するのを待ち、再度ログインしてください。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/8.png"/></div>

## Home Assistant と ESPHome のインストールと設定

### ステップ 4. Docker を使用して Home Assistant をインストール

OpenWRT に Home Assistant をインストールする最適な方法は Docker を使用することです。これにより、LinkStar をソフトルーターとして安定させつつ、Home Assistant を展開することができます。

次に行うべきことは、特定の Home Assistant イメージをプルすることです。このイメージは、後で ESPHome サービスをインストールする際に役立ちます。

```
homeassistant/qemuarm-64-homeassistant:latest
```

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/12.png"/></div>

ダウンロードしたイメージを使用してコンテナを作成します。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/11.png"/></div>

コンテナを作成するページで、いくつかの簡単な設定を行う必要があります。

- コンテナ名: 任意のコンテナ名
- Docker イメージ: ダウンロードした **qemuarm-64-homeassistant** イメージを選択
- ネットワーク: **host** モードを選択
- 環境変数 (-e): 必要な環境変数

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/13.png"/></div>

上記を入力したら、保存して適用します。これでコンテナが作成されたことが確認できます。それでは、コンテナを起動しましょう。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/14.png"/></div>

### ステップ 5. Docker を使用して ESPHome をインストール

Home Assistant コンテナをインストールしているため、Add-on ショップから ESPHome サービスを単純にダウンロードすることはできません。そのため、妥協案が必要です。

上記の手順を繰り返し、ESPHome イメージをダウンロードします。

```
esphome/esphome:latest
```

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/17.png"/></div>

コンテナを作成するページで、いくつかの簡単な設定を行う必要があります。

- コンテナ名: 任意のコンテナ名
- Docker イメージ: ダウンロードした **esphome** イメージを選択
- ネットワーク: **host** モードを選択
- 環境変数 (-e): 必要な環境変数

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/18.png"/></div>

上記を入力したら、保存して適用します。これでコンテナが作成されたことが確認できます。こちらも起動する必要があります。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/19.png"/></div>

### ステップ 6. ESPHome サービスを Home Assistant に追加

Home Assistant 内で ESPHome をダウンロードした場合と同じ効果を得るために、Home Assistant の設定ファイルを変更する必要があります。

Home Assistant コンテナに移動します。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/55.png"/></div>

Home Assistant のターミナルに移動します。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/56.png"/></div>

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

Home Assistant コンテナのシェルで `exit` と入力して Docker コンテナを終了します。これが完了したら、Home Assistant コンテナを再起動します。

新しいブラウザページを開き、IP アドレス `192.168.100.1:8123` を入力して Home Assistant アカウントを登録します。左側のツールバーに ESPHome が表示されるのが確認できます。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/57.png"/></div>

## Seeed Studio XIAO ESP32C3 を ESPHome に追加する

- **ステップ 1.** **+ NEW DEVICE** をクリックします。

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/8.png"/></div>

- **ステップ 2.** **CONTINUE** をクリックします。

<div align="center"><img width ={350} src="https://files.seeedstudio.com/wiki/ESPHome/9.png"/></div>

- **ステップ 3.** デバイスの**名前**を入力し、**ネットワーク名**や**パスワード**などのWiFi認証情報を入力します。その後、**NEXT** をクリックします。

<div align="center"><img width ={350} src="https://files.seeedstudio.com/wiki/ESPHome/10.png"/></div>

- **ステップ 4.** **ESP32-C3** を選択し、クリックします。

<div align="center"><img width ={350} src="https://files.seeedstudio.com/wiki/ESPHome/11.png"/></div>

- **ステップ 5.** このボードを手動で設定するため、**SKIP** をクリックします。

<div align="center"><img width ={350} src="https://files.seeedstudio.com/wiki/ESPHome/12.png"/></div>

- **ステップ 6.** 新しく作成したボードの下にある **EDIT** をクリックします。

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/ESPHome/13.png"/></div>

- **ステップ 7.** **YAML** ファイルが開き、このファイルを使用してボードのすべての設定を行います。**esp32** の内容を以下のように編集します。

```sh
esp32:
  board: seeed_xiao_esp32c3
  variant: esp32c3
  framework:
    type: arduino
    version: 2.0.5
    platform_version: 5.2.0
```

**注意:** ここでは、[Arduino core for ESP32](https://github.com/espressif/arduino-esp32/releases) と [PlatformIOのESP32サポート](https://github.com/platformio/platform-espressif32/releases) の最新バージョンを使用しています。

<div align="center"><img width ={350} src="https://files.seeedstudio.com/wiki/ESPHome/14.png"/></div>

- **ステップ 8.** その後、右上の **Save** ボタンをクリックしてください。

LinkStar H68Kは外部MCUデバイスの認識をサポートしていないため、まずコンパイルされたファームウェアをダウンロードし、別のPCを使用してファームウェアをアップロードする必要があります。

- **ステップ 9.** 右上の **Install** ボタンをクリックします。その後、最後の項目 **Manual download** を選択します。

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/30.png"/></div>

- **ステップ 10.** **Modern format** を選択します。

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/31.png"/></div>

ダウンロードとコンパイルには時間がかかるため、しばらくお待ちください。すべてが準備完了すると、ファームウェアが自動的にコンピュータにダウンロードされます。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/33.png"/></div>

- **ステップ 11.** XIAO ESP32C3 にファームウェアをアップロードする方法はいくつかありますが、ここでは2つの方法を紹介します。

  - オプション 1: [ESPhome Web tool](https://web.esphome.io/?dashboard_install) を使用してアップロードします。

適切なドライバーがインストールされていることを確認してください。以下はESPデバイスで使用される一般的なチップのドライバーです。

1. CP2102 ドライバー: [Windows & Mac](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers)
2. CH342, CH343, CH9102 ドライバー: [Windows](https://www.wch.cn/downloads/CH343SER_ZIP.html), [Mac](https://www.wch.cn/downloads/CH34XSER_MAC_ZIP.html)
3. CH340, CH341 ドライバー: [Windows](https://www.wch.cn/downloads/CH341SER_ZIP.html), [Mac](https://www.wch.cn/downloads/CH341SER_MAC_ZIP.html)

[ESPhome Web tool](https://web.esphome.io/?dashboard_install) をChromeまたはEdgeウェブブラウザで開きます。

**CONNECT** をクリックします。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/34.png"/></div>

ポップアップウィンドウで XIAO ESP32 のシリアルポートを選択します。

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/64.png"/></div>

**INSTALL** をクリックし、上記の手順でダウンロードした `.bin` ファイルを選択します。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/35.png"/></div>

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/38.png"/></div>

  - オプション 2: [esphome-flasher tool](https://github.com/esphome/esphome-flasher) を使用します。

ドライバーをインストールし、ブラウザを変更した後でも方法1でファームウェアをアップロードできない場合は、方法2を試してください。具体的なインストール方法と手順については公式チュートリアルを参照してください。

:::tip
XIAO ESP32C3 のログメッセージを確認したい場合、このソフトウェアの View Logs ボタンを使用してログを表示することもできます。
<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/41.png"/></div>
:::

アップロードが完了したら、PCから XIAO ESP32C3 を切断できます（ログを表示する必要がない場合）。その後、XIAO を個別に電源供給するだけです。

すべてが正常に動作すれば、XIAO ESP32C3 は設定したWiFiを検索して接続します。

私の場合、LinkStar H68K のネットワークを使用しています。ネットワークオプションで確認し、LinkStar H68K によって割り当てられたIPアドレスを確認できます。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/42.png"/></div>

- **ステップ 12.** ボードのステータスが **ONLINE** と表示されている場合、ボードがWiFiに正常に接続されたことを意味します。

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/ESPHome/21.png"/></div>

- **ステップ 13.** XIAO ESP32C3 に接続する

LAN上に多くのHome Assistantデバイスがない場合、Home Assistantは自動的にESPデバイスを検索してDevicesタブに追加することができます。**Settings** の **Devices & Services** タブ内でこのデバイスを確認できます。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/66.png"/></div>

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/67.png"/></div>

自動検索されない場合は、XIAO ESP32C3 のIPアドレスを基に接続することもできます。

**ADD INTEGRATION** をクリックし、**esphome** を検索します。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/43.png"/></div>

次に、XIAO ESP32C3 の IP アドレスとポート番号 **6053** を入力します。その後、**SUBMIT** をクリックしてください。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/44.png"/></div>

入力した IP アドレスとポート番号が正しい場合、yaml ファイルに保存した暗号化キーを入力するよう求められます。

その後、**SUBMIT** をクリックしてください。

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/68.png"/></div>

これで、デバイスの追加手順が正常に完了しました。

## Grove モジュールを ESPHome と Home Assistant で使用する

次に、Grove モジュールを Seeed Studio XIAO ESP32C3 に接続し、Home Assistant を使用してセンサーデータを表示したり、デバイスを制御したりできるようにします！

### Grove モジュールを XIAO ESP32C3 に接続する

Grove モジュールを Seeed Studio XIAO ESP32C3 で使用するには、[Grove Shield for Seeed Studio XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) を使用し、XIAO ESP32C3 を接続します。

<div align="center"><img width ={450} src="https://files.seeedstudio.com/wiki/ESPHome/51.png"/></div>

その後、ボード上の Grove コネクタを使用して Grove モジュールを接続できます。

### ピン定義

Grove Shield for Seeed Studio XIAO 上の Grove コネクタに Grove モジュールを接続する際には、以下の表に従って適切な内部ピン番号を使用する必要があります。

| 内部ピン番号 | ピンマッピング |
|--- |--- |
| 2  | D0  |
| 3  | D1  |
| 4  | D2  |
| 5  | D3  |
| 6  | D4  |
| 7  | D5  |
| 21  | D6  |
| 20  | D7  |
| 8  | D8  |
| 9  | D9  |
| 10  | D10  |
| 6  | SDA  |
| 7  | SCL  |

例えば、Grove モジュールを **D0** ポートに接続したい場合、ESPHome 上でピンを **2** として定義する必要があります。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/ESPHome/50.png"/></div>

### ESPHome での Grove モジュール互換性リスト

現在、以下の Grove モジュールが ESPHome に対応しています。

<table>
<thead>
  <tr>
    <th>Grove モジュール</th>
    <th>カテゴリ</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Laser-PM2-5-Sensor-HM3301.html">Grove - Laser PM2.5 ダストセンサー</a></td>
    <td>ガス</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-All-in-one-Environmental-Sensor-SEN55-p-5373.html">Grove - SEN55 オールインワン環境センサー</a>, NOx, PM, VOC, RH, 温度</td>
    <td>ガス</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-All-in-one-Environmental-Sensor-SEN54-p-5374.html">Grove - SEN54 オールインワン環境センサー</a>, PM, VOC, RH, 温度</td>
    <td>ガス</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911.html">Grove - CO2 &amp; 温度 &amp; 湿度センサー (SCD30)</a></td>
    <td>ガス</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD41-p-5025.html">Grove - CO2 &amp; 温度 &amp; 湿度センサー - SCD41</a></td>
    <td>ガス</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-VOC-and-eCO2-Gas-Sensor-for-Arduino-SGP30.html">Grove - VOC および eCO2 ガスセンサー - SGP30</a></td>
    <td>ガス</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-ADS1115-16-bit-ADC-p-4599.html">Grove - 4 チャンネル 16-bit ADC (ADS1115)</a></td>
    <td>ADC</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Time-of-Flight-Distance-Sensor-VL53L0X.html">Grove - Time of Flight 距離センサー (VL53L0X)</a></td>
    <td>距離</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Ultrasonic-Distance-Sensor.html">Grove - 超音波距離センサー</a></td>
    <td>距離</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-AHT20-I2C-Industrial-grade-temperature-and-humidity-sensor-p-4497.html">Grove - AHT20 I2C 工業用温湿度センサー</a></td>
    <td>環境</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html">Grove - 温湿度センサー V2.0 (DHT20)</a></td>
    <td>環境</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-Pro-AM2302-DHT22.html">Grove - 温湿度センサー Pro (DHT22/AM2302)</a></td>
    <td>環境</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html">Grove - 温湿度 &amp; 気圧センサー (BME280)</a></td>
    <td>環境</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html">Grove - 温湿度、気圧、ガスセンサー (BME680)</a></td>
    <td>環境</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Barometer-Sensor-BMP280.html">Grove 温度 &amp; 気圧センサー (BMP280)</a></td>
    <td>環境</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/One-Wire-Temperature-Sensor-p-1235.html">One Wire 温度センサー - DS18B20</a></td>
    <td>環境</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html">Grove - 温湿度センサー (DHT11)</a></td>
    <td>環境</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html">Grove - I2C 高精度温度センサー - MCP9808</a></td>
    <td>環境</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html">Grove - 温湿度センサー (SHT31)</a></td>
    <td>環境</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT40-p-5384.html" target="_blank" rel="noopener noreferrer">Grove - 温湿度センサー (SHT40)</a></td>
    <td>環境</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html" target="_blank" rel="noopener noreferrer">Grove - 高精度気圧センサー (DPS310)</a></td>
    <td>環境</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-I2C-Thermocouple-Amplifier-MCP9600.html" target="_blank" rel="noopener noreferrer">Grove - I2C 熱電対アンプ (MCP9600)</a></td>
    <td>環境</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-I2C-Color-Sensor-V2.html">Grove - I2C カラーセンサー V2</a></td>
    <td>カラー</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-I2C-Color-Sensor-V2.html">Grove - デジタル光センサー - TSL2561</a></td>
    <td>光</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-ADC-for-Load-Cell-HX711-p-4361.html">Grove - ロードセル用 ADC (HX711)</a></td>
    <td>重量</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V3-MPR121-p-4694.html">Grove - 12 キー静電容量式 I2C タッチセンサー V3 (MPR121)</a></td>
    <td>静電容量</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-16-Channel-PWM-Driver-PCA9685.html">Grove - 16 チャンネル PWM ドライバ (PCA9685)</a></td>
    <td>PWM</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-4-Digit-Display.html">Grove - 4 桁ディスプレイ</a></td>
    <td>ディスプレイ</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-OLED-Display-0-66-SSD1306-v1-0-p-5096.html">Grove - OLED ディスプレイ 0.66" (SSD1306)</a></td>
    <td>ディスプレイ</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Relay.html">Grove - リレー</a></td>
    <td>リレー</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-SPDT-Relay-30A.html">Grove - SPDT リレー (30A)</a></td>
    <td>リレー</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Solid-State-Relay-V2-p-3128.html">Grove - ソリッドステートリレー V2</a></td>
    <td>リレー</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-2-Channel-SPDT-Relay.html">Grove - 2 チャンネル SPDT リレー</a></td>
    <td>リレー</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-PIR-Motion-Sensor.html">Grove - PIR モーションセンサー</a></td>
    <td>モーション</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-mini-PIR-motion-sensor-p-2930.html">Grove - ミニ PIR モーションセンサー</a></td>
    <td>モーション</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html">Grove - デジタル PIR モーションセンサー (12m)</a></td>
    <td>モーション</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-Servo.html" target="_blank" rel="noopener noreferrer">Grove - サーボ</a></td>
    <td>アクチュエータ</td>
  </tr>
  <tr>
    <td><a href="https://www.seeedstudio.com/Grove-8-Channel-I2C-Hub-TCA9548A-p-4398.html" target="_blank" rel="noopener noreferrer">Grove - 8 チャンネル I2C マルチプレクサ/I2C ハブ (TCA9548A)</a></td>
    <td>マルチプレクサ</td>
  </tr>
</tbody>
</table>

これから、上記の表から6つのGroveモジュールを選択し、それらをESPHomeとHome Assistantに接続する方法を説明します。

### Grove - 温度・湿度センサー (AHT20)

#### 設定手順

- **ステップ1.** [Grove - 温度・湿度センサー (AHT20)](https://www.seeedstudio.com/Grove-AHT20-I2C-Industrial-grade-temperature-and-humidity-sensor-p-4497.html) をGrove Shield for Seeed Studio XIAO のI2Cコネクタの1つに接続します。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/ESPHome/52.png"/></div>

- **ステップ2.** 以前作成した **xiao-esp32c3.yaml** ファイルの末尾に以下を追加し、OTAでXIAO ESP32C3にプッシュします。

```sh
i2c:
  sda: 6
  scl: 7

sensor:
  - platform: aht10
    temperature:
      name: "Temperature"
    humidity:
      name: "Humidity"
```

**AHT10コンポーネント**についての詳細は[こちら](https://esphome.io/components/sensor/aht10.html)をご覧ください。このコンポーネントは、**AHT10、AHT20、AHT21**ベースのセンサーを使用できます。ここでは、AHT20がI2Cプロトコルを使用して通信するため、[I²Cバス](https://esphome.io/components/i2c.html)コンポーネントを追加しています。

#### ダッシュボードでの可視化

- **ステップ1.** Home Assistantの**概要**ページで、**3つのドット**をクリックし、**ダッシュボードを編集**を選択します。

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/30.png"/></div>

- **ステップ2.** **+ カードを追加**をクリックします。

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/31.png"/></div>

- **ステップ3.** **エンティティ別**を選択し、**temperature**と入力して、**Temperature**の横のチェックボックスを選択します。

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/ESPHome/32.png"/></div>

- **ステップ4.** 同じ手順を**Humidity**にも繰り返します。

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/ESPHome/33.png"/></div>

- **ステップ5.** **続行**をクリックします。

<div align="center"><img width ={250} src="https://files.seeedstudio.com/wiki/ESPHome/34.png"/></div>

- **ステップ6.** **ダッシュボードに追加**をクリックします。

<div align="center"><img width ={450} src="https://files.seeedstudio.com/wiki/ESPHome/35.png"/></div>

これで、Home Assistantのダッシュボードは以下のようになります。

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/37.png"/></div>

- **ステップ7.** センサーのデータをゲージとして可視化することもできます。**カード別**で**ゲージ**をクリックします。

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/39.png"/></div>

- **ステップ8.** ドロップダウンメニューから**Temperature**を選択します。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ESPHome/42.png"/></div>

- **ステップ9.** **保存**をクリックします。

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/43.png"/></div>

- **ステップ10.** 同じ手順を**Humidity**にも繰り返します。

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/44.png"/></div>

これで、ダッシュボードは以下のようになります。

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/45.png"/></div>

このWikiに記載されている**Grove - VOCおよびeCO2ガスセンサー (SGP30)**や**Grove - CO2 & 温度・湿度センサー (SCD41)**についても、同様の手順でセンサーデータをダッシュボードに可視化できます。

### Grove - VOCおよびeCO2ガスセンサー (SGP30)

#### 設定手順

- **ステップ1.** [Grove - VOCおよびeCO2ガスセンサー (SGP30)](https://www.seeedstudio.com/Grove-VOC-and-eCO2-Gas-Sensor-for-Arduino-SGP30.html) をGrove Shield for Seeed Studio XIAO のI2Cコネクタの1つに接続します。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/ESPHome/52.png"/></div>

- **ステップ2.** 以前作成した **xiao-esp32c3.yaml** ファイルの末尾に以下を追加し、OTAでXIAO ESP32C3にプッシュします。

```sh
i2c:
  sda: 6
  scl: 7

sensor:
  - platform: sgp30
    eco2:
      name: "eCO2"
      accuracy_decimals: 1
    tvoc:
      name: "TVOC"
      accuracy_decimals: 1
```

**SGP30コンポーネント**についての詳細は[こちら](https://esphome.io/components/sensor/sgp30.html)をご覧ください。

### Grove - CO2 & 温度・湿度センサー (SCD41)

#### 設定手順

- **ステップ1.** [Grove - CO2 & 温度・湿度センサー (SCD41)](https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD41-p-5025.html) をGrove Shield for Seeed Studio XIAO のI2Cコネクタの1つに接続します。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/ESPHome/52.png"/></div>

- **ステップ2.** 以前作成した **xiao-esp32c3.yaml** ファイルの末尾に以下を追加し、OTAでXIAO ESP32C3にプッシュします。

```sh
i2c:
  sda: 6
  scl: 7

sensor:
  - platform: scd4x
    co2:
      name: "CO2"
    temperature:
      name: "Temperature"
    humidity:
      name: "Humidity"
```

**SGP4xコンポーネント**についての詳細は[こちら](https://esphome.io/components/sensor/scd4x.html)をご覧ください。

### Grove - リレー

#### 設定手順

- **ステップ1.** [Grove - リレー](https://www.seeedstudio.com/Grove-Relay.html) をGrove Shield for Seeed Studio XIAO の**デジタル**ポートの1つに接続します。ここでは**D0**ポートを選択します。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/ESPHome/53.png"/></div>

- **ステップ2.** 以前作成した **xiao-esp32c3.yaml** ファイルの末尾に以下を追加し、OTAでXIAO ESP32C3にプッシュします。

```sh
switch:
  - platform: gpio
    pin: 2
    name: "Relay"
```

**リレーコンポーネント**についての詳細は[こちら](https://esphome.io/cookbook/relay.html)をご覧ください。

#### ダッシュボードでの可視化

- **ステップ1.** 前述の**+ カードを追加**の下で、**エンティティ別**を選択し、**relay**と入力して選択し、**続行**をクリックします。

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/55.png"/></div>

- **ステップ2.** **ダッシュボードに追加**をクリックします。

<div align="center"><img width ={450} src="https://files.seeedstudio.com/wiki/ESPHome/56.png"/></div>

これで、トグルスイッチを使用してリレーを**ON/OFF**に切り替えることができます。

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/57.jpg"/></div>

### Grove - mini PIR モーションセンサー

#### 設定構成

- **ステップ 1.** [Grove - mini PIR モーションセンサー](https://www.seeedstudio.com/Grove-mini-PIR-motion-sensor-p-2930.html) を Seeed Studio XIAO 用 Grove Shield の **デジタル**ポートのいずれかに接続します。ここでは **D0** ポートを選択します。

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/ESPHome/53.png"/></div>

- **ステップ 2.** 以前に作成した **xiao-esp32c3.yaml** ファイルの末尾に以下を追加し、OTA を使用して XIAO ESP32C3 にプッシュします。

```sh
binary_sensor:
  - platform: gpio
    pin: 2
    name: "PIR Sensor"
    device_class: motion
```

**PIR コンポーネント**についての詳細は [こちら](https://esphome.io/cookbook/pir.html) を参照してください。

#### ダッシュボードでの可視化

- **ステップ 1.** 以前に説明した **+ ADD CARD** の下で、**BY ENTITY** を選択し、**pir** と入力して選択し、**CONTINUE** をクリックします。

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/58.png"/></div>

- **ステップ 2.** **ADD TO DASHBOARD** をクリックします。

<div align="center"><img width ={450} src="https://files.seeedstudio.com/wiki/ESPHome/59.png"/></div>

モーションが検出されると、**Detected** と表示されます。

<div align="center"><img width ={1000} src="https://files.seeedstudio.com/wiki/ESPHome/60.png"/></div>

## 次は何をする？

おめでとうございます！LinkStar 上で Home Assistant のデプロイを完了し、ESPHome プラグインを使用できるようになりました。Home Assistant Container をアドオン付きでインストールできない場合など、同様の問題がある場合は、この方法を使用して他の Home Assistant プラグインをインストールできます。

また、私たちのクリエイターのチームに参加し、より役立つ例を提供していただけることを楽しみにしています！

もちろん、XIAO ESP32C3 は Home Assistant で MR24HPCB1 をサポートするだけではありません。このドキュメントで他の用途向けのチュートリアルを見つけることができます。

- [Grove モジュールを ESPHome を使用して Home Assistant に接続する (Odyssey)](https://wiki.seeedstudio.com/ja/Connect-Grove-to-Home-Assistant-ESPHome/)
- [XIAO ESP32C3 が ESPHome サービスを介して Home Assistant にアクセスする](https://wiki.seeedstudio.com/ja/xiao-esp32c3-esphome/)

創造力を発揮してください！

## トラブルシューティング

**FAQ1: ESPhome Web ツールを使用してファームウェアをアップロード中に以下のエラーが発生しました。どうすれば修正できますか？**

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/37.png"/></div>

> A: このプロンプトがアップロード中に表示された場合、XIAO ESP32C3 を PC から切断してください。その後、BOOT ボタンを押しながらボードを PC に接続し、BOOT ボタンを放してブートローダーモードに入ります。この時点で再接続してファームウェアを再度アップロードすれば十分です。

**FAQ2: esphome flasher のチュートリアルに従って Linux に esphome flasher をインストールできません。どうすればよいですか？**

> A: 以下のコマンドを実行する際に、システムバージョンを選択する必要があります。そうしないとエラーが発生します。例えば、私のコンピュータが Ubuntu 22.04 の場合、実行すべきコマンドは以下の通りです。

```
sudo apt install python3

pip3 install -U \
    -f https://extras.wxpython.org/wxPython4/extras/linux/gtk3/ubuntu-22.04/ \
    wxPython

pip3 install esphomeflasher
```

**FAQ3: 正しい WiFi とパスワードを入力しましたが、XIAO ESP32C3 の IP アドレスが表示されません。なぜですか？**

> A: この問題が発生した場合、XIAO ESP32C3 のアンテナが正しく接続されているか確認してください。アンテナがすでに接続されている場合、可能であれば XIAO が LinkStar から 3m 以上離れていないことを確認してください（より強力なアンテナに交換していない限り）。
それでも XIAO が表示されない場合は、[esphome flasher](https://github.com/esphome/esphome-flasher) ソフトウェアを使用して XIAO のログ情報を確認し、ログを通じて XIAO の接続をチェックしてください。
XIAO を再接続して WiFi を検索し、再接続を試みることもできます。

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>