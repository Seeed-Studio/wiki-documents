---
description: T1000-EユーザーガイドのためのArduino例
title: Arduinoを使い始める
keywords:
- トラッカー
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/tracker-t1000-e-for-meshtastic.webp
slug: /ja/t1000_e_arduino_examples
sidebar_position: 3
last_update:
  date: 05/15/2025
  author: Frederik Funk
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

以下のArduino例が利用可能です：

<div class="table-center">
  <table align="center">
    <tr>
      <th>例</th>
      <th>説明</th>
    </tr>
    <tr>
      <td>Blinky</td>
      <td>LED点滅 - GPIOピンを制御してLEDを点滅させ、機能テストやステータス表示に使用します。</td>
    </tr>
    <tr>
      <td>Button</td>
      <td>ボタンイベントを出力 - ボタンの状態変化を検出し、イベント情報を出力してユーザーとの対話を可能にします。</td>
    </tr>
    <tr>
      <td>Buzzer</td>
      <td>音をループ再生 - ブザーを駆動してリマインダーやアラームのための音を生成します。</td>
    </tr>
    <tr>
      <td>Sensor</td>
      <td>温度/光量/バッテリー値を出力 - 温度、光強度、バッテリー電圧データを読み取り、出力します。</td>
    </tr>
    <tr>
      <td>Accelerometer</td>
      <td>ax/ay/az/イベント値を出力 - 動作検出や姿勢認識のために加速度データを収集します。</td>
    </tr>
    <tr>
      <td>GNSS</td>
      <td>緯度/経度値を出力 - GNSSベースの位置データを取得し、出力します。</td>
    </tr>
    <tr>
      <td>LoRaWAN</td>
      <td>OTAAを通じて接続し、テストデータをLNSに送信 - LoRaWANに接続し、テストデータを送信します。</td>
    </tr>
    <tr>
      <td>LoRaWAN Sensor</td>
      <td>OTAAを通じて接続し、温度/光量/バッテリー/ax/ay/azを読み取り、データをLNSに送信 - 各種センサーデータを収集し、LoRaWANを介して送信します。</td>
    </tr>
    <tr>
      <td>LoRaWAN GNSS</td>
      <td>OTAAを通じて接続し、緯度/経度をスキャンし、データをLNSに送信 - GNSS位置データをリアルタイムで収集し、送信します。</td>
    </tr>
    <tr>
      <td>LoRaWAN WiFi</td>
      <td>OTAAを通じて接続し、WiFi MACをスキャンし、データをLNSに送信 - WiFi MACアドレスをスキャンし、位置情報のためにデータを送信します。</td>
    </tr>
    <tr>
      <td>LoRaWAN Beacon</td>
      <td>OTAAを通じて接続し、Beacon MACをスキャンし、データをLNSに送信 - Beacon MACデータをスキャンし、追跡と識別のために送信します。</td>
    </tr>
  </table>
</div>

## 準備

### ハードウェア準備

* SenseCAP T1000-E x 1
* USBケーブル x 1
* コンピュータ x 1

### ソフトウェア準備

開発を開始する前に、以下のソフトウェアツールが必要です。

[Arduinoを使い始める](https://wiki.seeedstudio.com/ja/Getting_Started_with_Arduino/)を参照してください。

:::tip
バージョンはv1.6.12以降である必要があります。
:::

## 始める

### 前提条件

1. URLを追加

`File` -> `Preferences`に移動し、以下のURLを`Additional Boards Manager URLs`に追加します：

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/add-url.png" alt="pir" width={800} height="auto" /></p>

2. ボードをインストール

`Boards Manager`に移動し、`seeed nrf52`を検索して最新バージョンを選択し、インストールします。

### 例を構築する

1. ボードとポートを選択

**ボード**: Seeed Tracker T1000 E <br/>
**ポート**: デバイスのポート

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/board-select.png" alt="pir" width={800} height="auto" /></p>

2. 例を構築する

`File` -> `Examples` -> `Seeed Tracker T1000 E LoRaWAN`に移動し、任意の例を開きます（この場合は加速度計の例）：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/example_select.png" alt="pir" width={800} height="auto" /></p>

### ターゲットデバイスへのアップロード

T1000-Eブートローダーは`.uf2`ドラッグ＆ドロップによるフラッシングのみをサポートしているため、Arduino IDEを介して例を直接アップロードすることはできません。代わりに以下の手順を実行してください：

1. Arduino IDEからコンパイル済みバイナリをエクスポートします。`.ino`スケッチと同じフォルダに保存されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/export_binary.png" alt="pir" width={800} height="auto" /></p>

2. `.hex`ファイルを`.uf2`ファイルに変換します。これは[こちら](https://github.com/Seeed-Studio/Adafruit_nRF52_Arduino/blob/1.1.9/tools/uf2conv/uf2conv.py)からダウンロードできるPythonスクリプトを使用して行います。ターミナルから以下のパラメータでスクリプトをダウンロードして実行してください：  
`python uf2conv.py -f 0xADA52840 -c -o test.uf2 <your_hex_file>.hex`

3. デバイスボタンを押し続けた状態で、充電ケーブルを素早く2回接続してデバイスをDFUモードにします。緑色のLEDが点灯します。この時点でT1000-Eがマスストレージデバイスとして認識されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/e-driver.png" alt="pir" width={600} height="auto" /></p>

4. `.uf2`ファイルをマスストレージにコピーします。コピーが完了すると、デバイスは自動的に実行を開始します。

## シリアルメッセージの読み取り

デバイスからのメッセージは、`Serial.println` や `Serial.printf` を使用して出力され、Arduino IDE の統合ターミナルを使用して読み取ることができます。  
USB-CDC を選択して有効にしていることを確認してください：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/usb_cdc.png" alt="pir" width={800} height="auto" /></p>

その後、`ツール -> シリアルモニタ` を使用してシリアルモニタを開き、メッセージを観察します：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/serial_monitor.png" alt="pir" width={800} height="auto" /></p>

## LoRaWAN の例

LoRaWAN メッセージングを含む例では、さらに2つのステップが必要です。

### LNS のセットアップ

トラッカーが接続できる LoRaWAN ネットワークサーバー (LNS) が必要です。この例では The Things Network (TTN) を使用しますが、他のネットワークでも問題なく動作するはずです。  
TTN を使用するには、The Things Industries または The Things Network のアカウントを持っている必要があり、ゲートウェイ（公開されているもの、または利用可能なものがない場合は自分のもの）へのアクセスが必要です。

#### ステップ 1: アプリケーションの作成

Applications ページに移動し、「+ Create application」をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application.png" alt="pir" width={800} height="auto" /></p>

Application ID を入力し、「Create application」をクリックして変更を保存します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/create_application1.png" alt="pir" width={800} height="auto" /></p>

#### ステップ 2: デバイスの登録

「+ Register end device」をクリックします。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device.png" alt="pir" width={800} height="auto" /></p>

以下のパラメータを設定します：

**Frequency Plan**: 対象地域に適した周波数プランを選択  
**LoRaWAN version**: LoRaWAN Specification 1.0.4  
**Regional Parameters version**: V1.0.3 REV A

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device1.png" alt="pir" width={800} height="auto" /></p>

次に、デバイスの認証情報を作成します。新しいセットを生成するか、既存のものを入力してください。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device5.png" alt="pir" width={800} height="auto" /></p>

### サンプルコードの調整

動作させるためには、前のステップで取得した認証情報をサンプルコードに設定します。また、地域を指定してください。例：`SMTC_MODEM_REGION_AS_923_GRP1`、`SMTC_MODEM_REGION_EU_868`、または `SMTC_MODEM_REGION_US_915`。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/lorawan_credentials.png" alt="pir" width={800} height="auto" /></p>

地域にデューティサイクル制限がある場合は、リセットハンドラーで制限を有効にすることを確認してください：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/duty_cycle_limitation.png" alt="pir" width={800} height="auto" /></p>

### サンプルコードの実行

他の例と同様に、LoRaWAN の例をコンパイルしてフラッシュします（`.uf2` ファイルを作成し、ドラッグ＆ドロップでフラッシュ）。  
その後、TTN インターフェースでメッセージが受信されるのが確認できるはずです：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000_e_arduino_examples/ttn_live_data.png" alt="pir" width={800} height="auto" /></p>

## ✨ コントリビュータープロジェクト

- このプロジェクトは Seeed Studio [コントリビュータープロジェクト](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) によってサポートされています。
- 特に [Frederik](https://github.com/orgs/Seeed-Studio/projects/6/views/1?filterQuery=Support+Arduino+to+our+new+open-source+LoRaWAN+device%2C+the+new+T1000-E+for+LoRaWAN&pane=issue&itemId=94352679&issue=Seeed-Studio%7Cwiki-documents%7C2144) さんに感謝します。彼の献身的な努力により、あなたの作業は[展示](https://wiki.seeedstudio.com/contributors/)される予定です。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。
<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>
<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>