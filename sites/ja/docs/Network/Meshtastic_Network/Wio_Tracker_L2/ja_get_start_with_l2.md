---
description: Wio Tracker L2 シリーズの使用を開始します。デバイスの設置、ファームウェアの書き込み、デバイス接続について案内します。
title: Wio Tracker L2 を使い始める
keywords:
  - Meshtastic
image: https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/L2First.png
slug: /get_started_with_meshtastic_wio_tracker_l2
sku: 114993648,114993649,114993653,114993654
sidebar_position: 1
last_update:
  date: 3/13/2026
  author: Michelle Huang
createdAt: '2025-06-17'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/ja/get_started_with_meshtastic_wio_tracker_l2/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


:::danger note
デバイスが以下の状態にあるときは、手動で再起動したり電源を切ったりしないでください。そうしないとデバイスが故障する可能性があります。

1. メッセージ送信プロセスが完了していない
2. 設定中である
:::

## ファームウェアを書き込む


[Meshtastic Web Flasher](https://flasher.meshtastic.org/) にアクセスします。

対象デバイスとして `Seeed Wio Tracker L2` を選択し、最新のファームウェアを選んでから `Flash` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/Flash.png" alt="pir" width={800} height="auto" /></p>

デバイスの電源を入れ、`Enter DFU Mode` をクリックします。`Tracker L2` という名前のシリアルポートが表示されるので、それをクリックして接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/StartFlash.png" alt="pir" width={800} height="auto" /></p>

その後 "Flash" をクリックします。以前のファームウェアを上書きしたい場合は、"Full Erase and Install" にチェックを入れることを忘れないでください。

## はじめに


### UI の切り替え


<Tabs>

<TabItem value="1" label="MUI から BaseUI へ">
Setting ページに移動 **->** `Reboot/Shutdown` を選択 **->** Bluetooth アイコンを長押し **->** `OK` をクリック

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/MUIToBaseUI.png" alt="pir" width={900} height="auto" /></p>

:::tip
Bluetooth アイコンを `long-press` すると、BaseUI 切り替えポップアップが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/LongPress.gif" alt="pir" width={250} height="auto" /></p>

Bluetooth アイコンをクリックしただけの場合は Bluetooth モードに入ります。その場合は、画面に表示されている Bluetooth アイコンを長押しすると、デバイスは自動的に再起動して MUI に戻ります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/GoBackMUI.gif" alt="pir" width={250} height="auto" /></p>

:::

</TabItem>

<TabItem value="2" label="BaseUI から MUI へ">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BasetoMui.png" alt="pir" width={900} height="auto" /></p>

</TabItem>
</Tabs>

### スマートフォンとの接続

**Step1. Bluetooth 接続モードに入る**

<Tabs>

<TabItem value="3" label="MUI">

`Setting` ページに移動し、`Reboot/Shutdown` をクリックしてから、`Bluetooth アイコン` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BluetoothModeMUI.png" alt="pir" width={800} height="auto" /></p>

:::tip
MUI を使用する場合は、スマートフォンとペアリングする前に、まず Bluetooth ペアリングモードに切り替えてください。そうしないと、スマートフォンがデバイスを認識できません。
:::

その後、デバイスは Bluetooth モードで再起動します。Bluetooth ペアリングコードが画面に表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BluetoothParingMode1.png" alt="pir" width={500} height="auto" /></p>

</TabItem>

<TabItem value="4" label="BaseUI">

デバイスは常に Bluetooth ペアリングモードになっており、特別な操作は不要です。

</TabItem>
</Tabs>

**Step2. Meshtastic APP をダウンロード**

[Click here](https://meshtastic.org/downloads/) から Meshtastic APP をダウンロードします。

**Step3. デバイスとペアリング**

<Tabs>

<TabItem value="5" label="IOS">

- Bluetooth パネルで対象デバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- 画面に表示されているコードを入力し、`Pair` をクリックしてデバイスに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="6" label="Android">

- Bluetooth パネルで対象デバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/AndroidX1Connection.png" alt="pir" width={300} height="auto" /></p>

- 画面に表示されているコードを入力し、`OK` をクリックしてデバイスに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/CodePairingPhone.png" alt="pir" width={300} height="auto" /></p>


</TabItem>
</Tabs>

### LoRa の設定

メッシュ上で通信を開始するには、まずリージョンを設定する必要があります。この設定はデバイスが使用する周波数帯を制御するもので、お住まいの地域に合わせて設定してください。

**リージョン一覧**

|**Region Code**|**Description**|**Frequency Range (MHz)**|**Duty Cycle (%)**|**Power Limit (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Unset|N/A|N/A|N/A|
|US|United States|902.0 - 928.0|100|30|
|EU_868|European Union 868MHz|869.4 - 869.65|10|27|

より包括的な一覧については、[LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) を参照してください。

:::info
**EU_868** は、1 時間あたり 10% のデューティサイクル制限を順守する必要があり、1 時間のローリングウィンドウに対して毎分計算されます。この制限に達すると、再び許可されるまでデバイスは送信を停止します。
:::

<Tabs>

<TabItem value="7" label="MUI で設定">

`Setting` ページに移動し、`LeoR Region` をクリックすると、デバイスが自動的に再起動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/LoRaSetting.png" alt="pir" width={900} height="auto" /></p>

</TabItem>

<TabItem value="8" label="BaseUI で設定">

`LoRa Info` ページに移動し、`Region` をクリックしてリージョンを選択し、`OK` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BaseUILoRa.png" alt="pir" width={900} height="auto" /></p>

</TabItem>

<TabItem value="9" label="スマートフォンで設定">

<Tabs>
<TabItem value="ios" label="IOS App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/AndridLorasetting.jpg" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

</TabItem>

</Tabs>

これでデバイス上の LoRa リージョン設定が完了したので、必要に応じて任意の [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/) を続けて設定できます。

### マップの使用

<Tabs>

<TabItem value="10" label="オフラインマップ">

**Step1. GPS を有効化**

位置情報を取得するには GPS を有効にする必要があります。これは `long pressing the position icon` によってデバイス上で直接設定できます。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/GPSEnableMUI.png" alt="pir" width={900} height="auto" /></p>

また、スマートフォンの APP から設定することもできます。

**Step2. SD カードの準備**

SD カードをフォーマットし、マップをインストールする必要があります。SD カードの詳細な使用チュートリアルについては、こちらをクリックしてご覧ください。

**Step3. SD カードを挿入**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/SDCardPlugin.gif" alt="pir" width={450} height="auto" /></p>

**Step4. マップを表示**

マップが読み込まれるまで待ちます。Wi-Fi に正常に接続し、位置情報を取得すると、デバイスにオフラインマップが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/OfflineMapL2.png" alt="pir" width={450} height="auto" /></p>

</TabItem>

<TabItem value="11" label="オンラインマップ">

**Step1. GPS を有効化**

位置情報を取得するには GPS を有効にする必要があります。これは `long pressing the position icon` によってデバイス上で直接設定できます。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/GPSEnableMUI.png" alt="pir" width={900} height="auto" /></p>

また、スマートフォンの APP から設定することもできます。

**Step2. Wifi を設定して有効化**

Wifi 名とパスワードを設定します。これはデバイス上で直接操作できます。 

:::tip

接続する Wifi は 2.4G である必要があります。5G Wifi はデバイスでは使用できません。

:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiSetting.png" alt="pir" width={450} height="auto" /></p>

Wifi IP が空で Wifi アイコンがグレーの場合は Wifi は無効です。Wifi IP が表示され Wifi アイコンが白い場合は Wifi が有効です。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiStatus.png" alt="pir" width={900} height="auto" /></p>

`Wifi` アイコンを長押ししてステータスを切り替えます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiSwitchMUI.png" alt="pir" width={450} height="auto" /></p>



**Step3. マップを表示**

マップが読み込まれるまで待ちます。Wi-Fi に正常に接続し、位置情報を取得すると、デバイスにオンラインマップが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/OfflineMapL2.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>


## 応用的な使い方

### Web サイト経由で接続

Web サイト上でメッセージを送信し、他のノードと通信したい場合は、デバイスを [Meshtastic Website](https://client.meshtastic.org/messages/broadcast/0) に接続できます。

  **Step 1**: BaseUI に切り替える

  **Step 2**: Web サイトを開く

[Click here](https://client.meshtastic.org/messages/broadcast/0) をクリックして Web サイトに移動します。
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshtasticWeb.png" alt="pir" width={1000} height="auto" /></p>

  **Step 3**: 新しいデバイスを追加

    "+ New Connection" をクリックします。 

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteAddNewConnection.png" alt="pir" width={600} height="auto" /></p>

    シリアル方式を選択します。デバイスマネージャーを開き、デバイスがどのポートに接続されているかを確認します。ポップアップウィンドウでそのポートを選択します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteSerialConnection.png" alt="pir" width={1000} height="auto" /></p>

    デバイスはリストに表示されます。クリックして接続します。接続に成功すると、ウェブサイト上でデバイスのステータスを直接確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteConnectionSuccess.png" alt="pir" width={300} height="auto" /></p>

### GPS の設定

より最新の位置情報を取得するために、更新間隔とブロードキャスト間隔を調整できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

IOS の場合は、`Accurate Location` をオンにしてください。そうしないと、位置がずれる可能性があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>


### センサー接続

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/SensorConnection.png" alt="pir" width={500} height="auto" /></p>

Grove インターフェースを介してデバイスにセンサーを追加できます。以下のセンサーは、デバイス上の Grove インターフェースとの互換性が確認されています。

<table>
  <tr>
    <th colspan="2">センサータイプ</th>
    <th colspan="1">センサーモデル</th>
  </tr>
  <tr>
    <td rowspan="4">環境センサー</td>
    <td>気圧</td>
    <td>BMP085</td>
  </tr>
  <tr>
    <td>温度</td>
    <td>[MCP9808](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temperature-Sensor-MCP9808.html) 、PCT2075</td>
  </tr>
  <tr>
    <td>温度 & 湿度</td>
    <td>[SHT31](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT31.html)/SHTC3/[SHT4X](https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT40-p-5384.html)、AHT10</td>
  </tr>
  <tr>
    <td>温度 & 湿度 & 気圧</td>
    <td>[BME280](https://www.seeedstudio.com/Grove-BME280-Environmental-Sensor-Temperature-Humidity-Barometer.html)</td>
  </tr>
  <tr>
    <td rowspan="2">その他</td>
    <td>心拍数 & SpO₂</td>
    <td>[MAX30102](https://www.seeedstudio.com/MAXREFDES117-HEART-RATE-AND-PULSE-OXIMETRY-MONITOR-p-2762.html)</td>
  </tr>
  <tr>
    <td>I2C キーボード</td>
    <td>CardKB</td>
  </tr>
</table>

<Tabs>

<TabItem value="ios" label="IOS">

- Telemetry を有効にしてセンサーデータを取得します。OLED 画面にセンサーデータを表示したい場合は、`on screen` を有効にします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/TelemetryIOS.png" alt="pir" width={900} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

- Telemetry を有効にしてセンサーデータを取得します。OLED 画面にセンサーデータを表示したい場合は、`on screen` を有効にします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/TelemetryL2.png" alt="pir" width={900} height="auto" /></p>

</TabItem>
</Tabs>

### その他の機能

<Tabs>

<TabItem value="12" label="MUI">

<Tabs>

<TabItem value="13" label="メニューバー">
| 操作方法 | 効果 |
|---|---|
| ホームアイコンを長押し | 再同期 |
| ノードリストアイコンを長押し | ノードフィルターページに入る |
| 設定アイコンを長押し | 画面がオフになる |

</TabItem>


<TabItem value="15" label="ホームページ">

| 操作方法 | 効果 |
|---|---|
| メッセージアイコンをクリック | メッセージページへ移動 |
| ノードアイコンをクリック | ノードページへ移動 |
| 時計アイコンをクリック | 実時間/稼働時間の切り替え |
| LoRa アイコンを長押し | LoRa 送信 オフ/オン |
| 通知アイコンを長押し | 通知 有効/無効 |
| 通知アイコンをクリック | サウンド/バナー/サウンド & バナーの切り替え |
| GPS アイコンを長押し | GPS オン/オフ |
| WiFi アイコンを長押し | WiFi オン/オフ |
| MQTT アイコンを長押し | MQTT オン/オフ |
| QR コードアイコンをクリック | デバイスの QR コードを表示 |

</TabItem>

<TabItem value="16" label="ノードページ">
| 操作方法 | 効果 |
|---|---|
| ノードをクリック | 詳細情報を表示 |
| ノードを長押し | プライベートチャットに入る |
| ノード位置を表示 | マップ上にノード位置を表示 |

</TabItem>

<TabItem value="17" label="チャンネルページ">
チャンネルを長押しして通知を無効/有効にします。チャンネルを選択してクリックするとチャットウィンドウに入ります。

</TabItem>

<TabItem value="18" label="メッセージページ">
チャットを長押しして削除します。チャットを選択してクリックするとチャットウィンドウに入ります。

</TabItem>

<TabItem value="19" label="設定ページ">

| 操作方法 | 効果 |
|---|---|
| ユーザーショートネーム | デバイスのショートネームを変更 |
| ユーザーロングネーム | デバイスのロングネームを変更 |
| 画面 PIN | デバイス起動用のパスワードを設定 |
| 設定 PIN | 設定変更用のパスワードを設定 |
| 地域 | LoRa 地域を設定 |
| モデムプリセット | LoRa プリセットを設定 |
| チャンネル | チャンネルを編集 |
| デバイスロール | ロールを設定 |
| WiFi | WiFi SSID とパスワードを設定 |
| 画面タイムアウト | 画面のタイムアウトを設定 |
| 画面の明るさ | 画面の明るさを設定 |
| テーマ | ダーク/ライト背景のテーマを切り替え |
| 画面キャリブレーション | 画面をキャリブレーション |
| 言語 | 表示言語を切り替え |
| 工場出荷時設定にリセット | 設定をデフォルトに復元 |
| NodeDB リセット | ノードデータを消去 |
| チャット履歴を消去 | チャット履歴を消去 |
| 再起動（緑のアイコン） | デバイスを再起動 |
| 電源オフ（赤いアイコン） | デバイスの電源をオフ |

</TabItem>

<TabItem value="20" label="ツール">
| 操作方法 | 効果 |
|---|---|
| Mesh Detector| 検出されたアクティブノードを表示 |
| Signal Scanner| 選択したノードの RSSI と SNR を表示 |
| Trace Route| 選択したノードのルーティングパスを表示 |
| Statistic | パケットデコード情報を表示 |
| Packet Log | デバイスログを表示 |

</TabItem>
</Tabs>

</TabItem>

<TabItem value="13" label="BaseUI">

<Tabs>

<TabItem value="21" label="ホーム">
| 操作方法 | 効果 |
|---|---|
| "Sleep Screen" を選択 | 一時的にディスプレイをオフにし、ユーザーボタン押下で復帰 |
| "Send Position" を選択 | メッシュ上のノードに対してデバイス位置を手動で通知（発見を高速化） |

</TabItem>

<TabItem value="23" label="ノード">

"Node Action" に移動します。

| 操作方法 | 効果 |
|---|---|
| "Favorite" を選択 | 選択したノードをお気に入りに設定 |
| "Trace Route" を選択 | 選択したノードへのトレースルートを実行 |

</TabItem>

<TabItem value="24" label="位置">
| 操作方法 | 効果 |
|---|---|
| "GPS Toggle" を選択 | GPS オン/オフ |
| "GPS Format" を選択 | GPS 形式を切り替え |
| "Compass Headings" を選択 | "N" のダイナミック/固定/フリーズヘディングを切り替え |
| "Compass Calibrate" を選択 | 30 秒間のコンパスキャリブレーションを開始 |
</TabItem>

<TabItem value="25" label="LoRa">
| 操作方法 | 効果 |
|---|---|
| "LoRa Region" を選択 | LoRa 地域を選択 |
| "Device Role" を選択 | デバイスロールを切り替え |
| "Radio Preset" を選択 | 利用可能なプリセットから選択 |

</TabItem>

<TabItem value="26" label="システム">
| 操作方法 | 効果 |
|---|---|
| "Notifications" を選択 | ビープ音を有効/無効にする |
| "Bluetooth Toggle" を選択 | Bluetooth を有効/無効にする |
| "Reboot/Shutdown" を選択 | デバイスを手動で再起動または電源オフ |

</TabItem>

</Tabs>

</TabItem>
</Tabs>

## FAQ

### デバイスが BLE 経由でスマートフォンとペアリングできない

- MUI を使用する場合は、スマートフォンとペアリングする前に、まず Bluetooth ペアリングモードに切り替えてください。そうしないと、スマートフォンがデバイスを認識できません。`Setting` ページに移動し、`Reboot/Shutdown` をクリックしてから、`Bluetooth アイコン` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BluetoothModeMUI.png" alt="pir" width={800} height="auto" /></p>

- BaseUI を使用する場合、Wifi を設定して有効にした後は、ネットワーク経由でのみスマートフォンアプリとデバイスを接続できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Network%20Connection.png" style={{width:350, height:'auto'}}/></div> 

### デバイスが Wifi に接続できない

- `2.4g Wifi` に接続していることを確認してください。デバイスは 5G Wifi とはペアリングできません。通常、スマートフォンのホットスポットは設定で 2.4g に調整できます。そのため、まずスマートフォンのホットスポットでテストしてみてください。

- Wifi 名と Wifi パスワードを設定した後に、Wifi を有効にしてください。

Wifi IP が空で Wifi アイコンがグレーの場合は Wifi が無効です。Wifi IP が表示され Wifi アイコンが白い場合は Wifi が有効です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiStatus.png" alt="pir" width={900} height="auto" /></p>

### デバイスが自動的に電源オフになる

**説明**

- デバイスの電源を入れた後、しばらくすると自動的に電源オフまたは再起動します。
- シリアルポートログはしばらく動作した後に停止します。

 これは、メッセージ送信プロセスが完了していない、設定中であるなどの状態のときに、手動で強制的にデバイスを再起動または電源オフしたことが原因である可能性があります。

**トラブルシューティング**

フラッシュ消去を実行し、その後最新のファームウェアを書き込みし直す必要があります。

### 工場出荷時設定にリセット

デフォルト設定に戻したい場合は、工場出荷時設定へのリセットを行うことができます。工場出荷時設定にリセットする方法は 2 つあります。

<Tabs>

<TabItem value="7" label="MUI で設定">

`Setting` ページに移動し、`Configure Reset` をクリックし、`Factory Reset` を選択してから `OK` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/FactoryResetMUI.png" alt="pir" width={900} height="auto" /></p>

デバイスはデフォルト設定で再起動します。

</TabItem>

<TabItem value="9" label="スマホで設定">

アプリで `Factory Reset` ボタンをクリックします。デバイスは自動的に工場出荷時の設定で再起動します。 
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>

</TabItem>

</Tabs>

### ダイレクトメッセージの失敗

#### NodeDB リセット

NodeDB は、現在の Mesh ネットワークで検出されたノードに関する情報を保存するローカルデータベースです。特定のノードと通信できない状況に遭遇した場合、そのノードに対して nodedB に古い情報が保存されている可能性があります。その場合は更新する必要があります。

<Tabs>

<TabItem value="7" label="MUI で設定">

`Setting` ページに移動し、`Configure Reset` をクリックし、`NodedB Reset` を選択してから `OK` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/NodedbL2.png" alt="pir" width={900} height="auto" /></p>

デバイスが再起動します。

</TabItem>

<TabItem value="9" label="スマホで設定">

アプリを開いて対象デバイスに接続します。**Settings**->**Device**->**Device Config**->**Reset NodeDB** に進みます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB3.png" alt="Device entry in Settings" width={300} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB4.png" alt="Reset NodeDB button in Device Config" width={300} height="auto" /></p>

</TabItem>
</Tabs>


#### ユーザー情報の交換

各ノードは定期的に自分自身のノード情報を送信し、メッシュ内の他のノードがそれを「見て」「認識」できるようにします。2 つのノードが互いに通信できるようにするには、互いのノード情報を交換する必要があります。リスト上の別のノードとプライベートメッセージの送受信ができない場合は、アプリで手動で情報交換を促すことができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/USERINFO.png" alt="Device entry in Settings" width={300} height="auto" /></p>

#### 秘密鍵の再生成

2 つのノードが互いに通信できるようにするには、互いの秘密鍵を知っている必要があります。あるノードがプライベートメッセージの送信に失敗し続ける場合は、そのノードの秘密鍵を再生成してみてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/RenerateKey.png" alt="Device entry in Settings" width={600} height="auto" /></p>

不具合のあるデバイスを再起動して、設定を有効にします。

:::note
鍵を再生成した後は、他のデバイスがそのノードに再接続する必要があります。そのため、他のデバイスのノードリストからそのノードを削除しておくことをお勧めします。
:::

### 信号品質

- **SNR** は通信リンクの品質を反映します。通常のデバイスは -7 dB 以上で動作します。SNR が -10 dB 未満のデバイスは性能が低いことを示します。

- **RSSI** はデバイスとその周囲の環境の両方によって決まります。通常のデバイスは -110 dBm 以上で動作します。RSSI が -115 dBm 未満のデバイスは性能が低いと見なされます。

      最良の信号効果を得るために、開けた障害物の少ない場所で、干渉が最小限となるようにデバイスを使用してください。


<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/Seeed_Studio_XIAO.jpg"
  imageAlt="Request Quote for XIAO"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>
