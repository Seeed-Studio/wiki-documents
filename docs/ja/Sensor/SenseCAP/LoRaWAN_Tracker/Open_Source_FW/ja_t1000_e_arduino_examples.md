---
description: T1000-E ユーザーガイド用の Arduino サンプル
title: Arduino を始める
keywords:
- Tracker
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/tracker-t1000-e-for-meshtastic.webp
slug: /ja/t1000_e_arduino_examples
sidebar_position: 4
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
      <td>ボタンイベント出力 - ボタンの状態変化を検出し、ユーザーインタラクション用のイベント情報を出力します。</td>
    </tr>
    <tr>
      <td>Buzzer</td>
      <td>ループ音再生 - ブザーを駆動してリマインダーやアラーム用の音を生成します。</td>
    </tr>
    <tr>
      <td>Sensor</td>
      <td>温度/照度/バッテリー値出力 - 温度、光強度、バッテリー電圧データを読み取り出力します。</td>
    </tr>
    <tr>
      <td>Accelerometer</td>
      <td>ax/ay/az/イベント値出力 - 動作検出と姿勢認識用の加速度データを収集します。</td>
    </tr>
    <tr>
      <td>GNSS</td>
      <td>緯度/経度値出力 - GNSS ベースの位置データを取得し出力します。</td>
    </tr>
    <tr>
      <td>LoRaWAN</td>
      <td>OTAA で接続、テストデータを LNS に送信 - LoRaWAN に接続してテストデータを送信します。</td>
    </tr>
    <tr>
      <td>LoRaWAN Sensor</td>
      <td>OTAA で接続、温度/照度/バッテリー/ax/ay/az を読み取り、データを LNS に送信 - LoRaWAN 経由で各種センサーデータを収集・送信します。</td>
    </tr>
    <tr>
      <td>LoRaWAN GNSS</td>
      <td>OTAA で接続、緯度/経度をスキャン、データを LNS に送信 - GNSS 位置データをリアルタイムで取得・送信します。</td>
    </tr>
    <tr>
      <td>LoRaWAN WiFi</td>
      <td>OTAA で接続、WiFi MAC をスキャン、データを LNS に送信 - WiFi MAC アドレスをスキャンして測位用データを送信します。</td>
    </tr>
    <tr>
      <td>LoRaWAN Beacon</td>
      <td>OTAA で接続、Beacon MAC をスキャン、データを LNS に送信 - 追跡と識別用の Beacon MAC データをスキャン・送信します。</td>
    </tr>
  </table>
</div>

## 準備

### ハードウェア準備

- SenseCAP T1000-E x 1
- USB ケーブル x 1
- コンピューター x 1

### ソフトウェア準備

開発を始める前に、以下のソフトウェアツールが必要です。

[Arduino を始める](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)をこちらで確認してください。

:::tip
バージョンは v1.6.12 より新しい必要があります。
:::

## 始める

### 前提条件

1. URL を追加

`File` -> `Preferences` に移動し、`Additional Boards Manager URLs` に以下の URL を追加します：

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/add-url.png" alt="pir" width={800} height="auto" /></p>

2. ボードをインストール

`Boards Manager` に移動し、`seeed nrf52` を検索して、最新バージョンを選択してインストールします。

### サンプルのビルド

1. ボードとポートを選択

**ボード**: Seeed Tracker T1000 E <br/>
**ポート**: あなたのデバイスポート

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/board-select.png" alt="pir" width={800} height="auto" /></p>

2. サンプルをビルド

`File` -> `Examples` -> `Seeed Tracker T1000 E LoRaWAN` に移動し、お好みのサンプルを開きます（この場合は加速度計のサンプル）：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/example_select.png" alt="pir" width={800} height="auto" /></p>

### ターゲットデバイスへのアップロード

T1000-E ブートローダーは `.uf2` ドラッグ&ドロップによる書き込み_のみ_をサポートしているため、Arduino IDE から直接サンプルをアップロードすることはできません。
代わりに、以下の手順に従ってください：

1. Arduino IDE からコンパイル済みバイナリをエクスポートします。`.ino` スケッチと同じフォルダに見つかります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/export_binary.png" alt="pir" width={800} height="auto" /></p>

2. `.hex` ファイルを `.uf2` ファイルに変換します。これは[こちら](https://github.com/Seeed-Studio/Adafruit_nRF52_Arduino/blob/1.1.9/tools/uf2conv/uf2conv.py)からダウンロードできる Python スクリプトを使用して行います。スクリプトをダウンロードし、ターミナルから以下のパラメータで実行してください：  
`python uf2conv.py -f 0xADA52840 -c -o test.uf2 <your_hex_file>.hex`

3. デバイスボタンを押し続けてから充電ケーブルを素早く2回接続してデバイスを DFU モードにします。緑色の LED が点灯します。T1000-E がマスストレージデバイスとして認識されるはずです。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/e-driver.png" alt="pir" width={600} height="auto" /></p>

4. `.uf2` ファイルをマスストレージにコピーします。コピーが完了すると、デバイスは自動的に実行を開始します。

## シリアルメッセージの読み取り

`Serial.println` と `Serial.printf` を使用してデバイスから出力されるメッセージは、Arduino IDE の統合ターミナルを使用して読み取ることができます。
USB-CDC を選択して有効にしていることを確認してください：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/usb_cdc.png" alt="pir" width={800} height="auto" /></p>

次に `Tools -> Serial Monitor` を使用してシリアルモニターを開き、メッセージの観察を開始します：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/serial_monitor.png" alt="pir" width={800} height="auto" /></p>

## LoRaWAN サンプル

LoRaWAN メッセージングを含むサンプルには、さらに2つの手順が必要です。

### LNS のセットアップ

トラッカーが接続できる LoRaWAN ネットワークサーバー（LNS）が必要です。この例では The Things Network（TTN）を使用しますが、他のものでも問題なく動作するはずです。
TTN で動作させるには、The Things Industries または The Things Network のアカウントと、ゲートウェイへのアクセス（パブリックなものまたは利用可能でない場合は独自のもの）が必要です。

#### ステップ 1: アプリケーションを作成

Applications ページに移動し、"+ Create application" をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application.png" alt="pir" width={800} height="auto" /></p>

Application ID を入力し、"Create application" をクリックして変更を保存します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application1.png" alt="pir" width={800} height="auto" /></p>

#### ステップ 2: デバイスを登録

"+ Register end device" をクリックします。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device.png" alt="pir" width={800} height="auto" /></p>

以下のパラメータを設定します：

**Frequency Plan**: ターゲット地域に適した周波数プランを選択  
**LoRaWAN version**: LoRaWAN Specification 1.0.4  
**Regional Parameters version**: V1.0.3 REV A

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device1.png" alt="pir" width={800} height="auto" /></p>

次に、デバイスの認証情報を作成します。新しいセットを生成するか、既存のものを入力してください。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device5.png" alt="pir" width={800} height="auto" /></p>

### サンプルコードの調整

動作させるために、前のステップの認証情報をサンプルコードに設定します。また、地域を指定してください。例：`SMTC_MODEM_REGION_AS_923_GRP1`、`SMTC_MODEM_REGION_EU_868`、または `SMTC_MODEM_REGION_US_915`。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/lorawan_credentials.png" alt="pir" width={800} height="auto" /></p>

お住まいの地域にデューティサイクル制限がある場合は、リセットハンドラーで制限を有効にしてください：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/duty_cycle_limitation.png" alt="pir" width={800} height="auto" /></p>

### サンプルコードの実行

他のサンプルと同じ方法で LoRaWAN サンプルをコンパイル・書き込みします（`.uf2` ファイルを作成してドラッグ&ドロップで書き込み）。
その後、TTN インターフェースでメッセージが受信されるのを確認できるはずです：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/ttn_live_data.png" alt="pir" width={800} height="auto" /></p>

## ✨ コントリビュータープロジェクト

- このプロジェクトは Seeed Studio [コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479)によってサポートされています。
- [Frederik](https://github.com/orgs/Seeed-Studio/projects/6/views/1?filterQuery=Support+Arduino+to+our+new+open-source+LoRaWAN+device%2C+the+new+T1000-E+for+LoRaWAN&pane=issue&itemId=94352679&issue=Seeed-Studio%7Cwiki-documents%7C2144) の献身的な努力に特別な感謝を捧げます。あなたの作品は[展示](https://wiki.seeedstudio.com/ja/contributors/)されます。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。
<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>
<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
