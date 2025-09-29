---
description: T1000-E ユーザーガイド用の Arduino サンプル
title: Arduino を始める
keywords:
- Tracker
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/tracker-t1000-e-for-meshtastic.webp
slug: /ja/t1000_e_arduino_examples
sidebar_position: 3
last_update:
  date: 03/24/2025
  author: Frederik Funk
---


以下の Arduino サンプルが利用可能です：

<div class="table-center">
  <table align="center">
    <tr>
      <th>サンプル</th>
      <th>説明</th>
    </tr>
    <tr>
      <td>Blinky</td>
      <td>LED 点滅 - GPIO ピンを制御して LED を点滅させ、機能テストとステータス表示に使用します。</td>
    </tr>
    <tr>
      <td>Button</td>
      <td>ボタンイベントの出力 - ボタンの状態変化を検出し、ユーザーインタラクション用のイベント情報を出力します。</td>
    </tr>
    <tr>
      <td>Buzzer</td>
      <td>ループ音再生 - ブザーを駆動して音を生成し、リマインダーやアラームに使用します。</td>
    </tr>
    <tr>
      <td>Sensor</td>
      <td>温度/照度/バッテリー値の出力 - 温度、光強度、バッテリー電圧データを読み取り、出力します。</td>
    </tr>
    <tr>
      <td>Accelerometer</td>
      <td>ax/ay/az/イベント値の出力 - 動作検出と姿勢認識のための加速度データを収集します。</td>
    </tr>
    <tr>
      <td>GNSS</td>
      <td>緯度/経度値の出力 - GNSS ベースの位置データを取得し、出力します。</td>
    </tr>
    <tr>
      <td>LoRaWAN</td>
      <td>OTAA による接続、LNS へのテストデータ送信 - LoRaWAN に接続し、テストデータを送信します。</td>
    </tr>
    <tr>
      <td>LoRaWAN Sensor</td>
      <td>OTAA による接続、温度/照度/バッテリー/ax/ay/az の読み取り、LNS へのデータ送信 - LoRaWAN 経由で様々なセンサーデータを収集・送信します。</td>
    </tr>
    <tr>
      <td>LoRaWAN GNSS</td>
      <td>OTAA による接続、緯度/経度のスキャン、LNS へのデータ送信 - GNSS 位置データをリアルタイムで取得・送信します。</td>
    </tr>
    <tr>
      <td>LoRaWAN WiFi</td>
      <td>OTAA による接続、WiFi MAC のスキャン、LNS へのデータ送信 - WiFi MAC アドレスをスキャンし、測位用のデータを送信します。</td>
    </tr>
    <tr>
      <td>LoRaWAN Beacon</td>
      <td>OTAA による接続、Beacon MAC のスキャン、LNS へのデータ送信 - 追跡と識別のために Beacon MAC データをスキャン・送信します。</td>
    </tr>
  </table>
</div>

## 準備

### ハードウェアの準備

- SenseCAP T1000-E x 1
- USB ケーブル x 1
- コンピュータ x 1

### ソフトウェアの準備

開発を開始する前に、以下のソフトウェアツールが必要です。

[Arduino を始める](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をご確認ください。

:::tip
バージョンは v1.6.12 より新しい必要があります。
:::

## 開始

### 前提条件

1. URL を追加

`ファイル` -> `環境設定` に移動し、`追加のボードマネージャの URL` に以下の URL を追加します：

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/add-url.png" alt="pir" width={800} height="auto" /></p>

2. ボードをインストール

`Boards Manager`に移動し、`seeed nrf52`を検索し、最新バージョンを選択してインストールします。

### サンプルのビルド

1. ボードとポートを選択

**ボード**: Seeed Tracker T1000 E <br/>
**ポート**: あなたのデバイスポート

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/board-select.png" alt="pir" width={800} height="auto" /></p>

2. サンプルをビルド

`File` -> `Examples` -> `Seeed Tracker T1000 E LoRaWAN`に移動し、お好みのサンプルを開きます（この場合は加速度計のサンプル）：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/example_select.png" alt="pir" width={800} height="auto" /></p>

### ターゲットデバイスへのアップロード

T1000-Eブートローダーは`.uf2`ドラッグ&ドロップによるフラッシュ_のみ_をサポートしているため、Arduino IDEから直接サンプルをアップロードすることはできません。
代わりに、以下の手順に従ってください：

1. Arduino IDEからコンパイル済みバイナリをエクスポートします。`.ino`スケッチと同じフォルダに見つかります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/export_binary.png" alt="pir" width={800} height="auto" /></p>

2. `.hex`ファイルを`.uf2`ファイルに変換します。これは[こちら](https://github.com/Seeed-Studio/Adafruit_nRF52_Arduino/blob/1.1.9/tools/uf2conv/uf2conv.py)からダウンロードできるpythonスクリプトを使用して行います。スクリプトをダウンロードし、ターミナルから以下のパラメータで実行してください：  
`python uf2conv.py -f 0xADA52840 -c -o test.uf2 <your_hex_file>.hex`

3. デバイスボタンを押し続けてからすばやく充電ケーブルを2回接続してデバイスをDFUモードにします。緑色のLEDが点灯します。T1000-Eがマスストレージデバイスとして認識されるはずです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/e-driver.png" alt="pir" width={600} height="auto" /></p>

4. `.uf2`ファイルをマスストレージにコピーします。コピーが完了すると、デバイスは自動的に実行を開始します。

## シリアルメッセージの読み取り

`Serial.println`と`Serial.printf`を使用してデバイスから出力されるメッセージは、Arduino IDEの統合ターミナルを使用して読み取ることができます。
USB-CDCを選択して有効にしていることを確認してください：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/usb_cdc.png" alt="pir" width={800} height="auto" /></p>

次に`Tools -> Serial Monitor`を使用してシリアルモニターを開き、メッセージの観察を開始します：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/serial_monitor.png" alt="pir" width={800} height="auto" /></p>

## LoRaWANサンプル

LoRaWANメッセージングを含むサンプルには、さらに2つのステップが必要です。

### LNSのセットアップ

トラッカーが接続できるLoRaWANネットワークサーバー（LNS）が必要です。この例ではThe Things Network（TTN）を使用しますが、他のものでも問題なく動作するはずです。
TTNで動作させるには、The Things IndustriesまたはThe Things Networkのアカウントと、ゲートウェイへのアクセス（パブリックなものまたは利用できない場合は独自のもの）が必要です。

#### ステップ1：アプリケーションの作成

Applicationsページに移動し、「+ Create application」をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application.png" alt="pir" width={800} height="auto" /></p>

Application IDを入力し、「Create application」をクリックして変更を保存します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application1.png" alt="pir" width={800} height="auto" /></p>

#### ステップ2：デバイスの登録

「+ Register end device」をクリックします。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device.png" alt="pir" width={800} height="auto" /></p>

以下のパラメータを設定します：

**Frequency Plan**: ターゲット地域に適した周波数プランを選択  
**LoRaWAN version**: LoRaWAN Specification 1.0.4  
**Regional Parameters version**: V1.0.3 REV A

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device1.png" alt="pir" width={800} height="auto" /></p>

次に、デバイスの認証情報を作成します。新しいセットを生成するか、既存のものを入力します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device5.png" alt="pir" width={800} height="auto" /></p>

### サンプルコードの調整

動作させるために、前のステップの認証情報をサンプルコードに設定します。また、地域を指定します。例：`SMTC_MODEM_REGION_AS_923_GRP1`、`SMTC_MODEM_REGION_EU_868`、または`SMTC_MODEM_REGION_US_915`。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/lorawan_credentials.png" alt="pir" width={800} height="auto" /></p>

あなたの地域にデューティサイクル制限がある場合は、リセットハンドラーで制限を有効にしてください：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/duty_cycle_limitation.png" alt="pir" width={800} height="auto" /></p>

### サンプルコードの実行

他のサンプルで説明したのと同じ方法でLoRaWANサンプルをコンパイルしてフラッシュします（`.uf2`ファイルを作成してドラッグ&ドロップでフラッシュ）。
その後、TTNインターフェースでメッセージが受信されるのを確認できるはずです：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/ttn_live_data.png" alt="pir" width={800} height="auto" /></p>

## ✨ コントリビュータープロジェクト

- このプロジェクトは、Seeed Studio [コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)によってサポートされています。
- [Frederik](https://github.com/orgs/Seeed-Studio/projects/6/views/1?filterQuery=Support+Arduino+to+our+new+open-source+LoRaWAN+device%2C+the+new+T1000-E+for+LoRaWAN&pane=issue&itemId=94352679&issue=Seeed-Studio%7Cwiki-documents%7C2144)の献身的な努力に特別な感謝を捧げます。あなたの作品は[展示](https://wiki.seeedstudio.com/contributors/)されます。

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。
<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>
<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
