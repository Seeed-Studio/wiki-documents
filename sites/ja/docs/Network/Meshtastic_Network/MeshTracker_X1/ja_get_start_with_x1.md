---
description: Meshtastic 用 SenseCAP MeshTracker X1 の使用を開始しましょう。このチュートリアルでは、本デバイスのセットアップガイドと FAQ ガイドを紹介します
title: MeshTracker X1 を使い始める
keywords:
  - トラッカー
  - Meshtastic
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100093876._._.png
slug: /x1_get_started_for_meshtastic
sku: 100087698
sidebar_position: 1
last_update:
  date: 7/13/2026
  author: Michelle Huang
createdAt: '2026-07-13'
updatedAt: '2026-07-24'
url: https://wiki.seeedstudio.com/ja/x1_get_started_for_meshtastic/
---
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

:::danger note
デバイスが以下の状態にあるときは、手動で再起動したり電源を切ったりしないでください。そうしないとデバイスが故障する可能性があります。
1. メッセージ送信プロセスが完了していない
2. 設定中
:::


## はじめに


### デバイスの電源を入れる

ボタンを 1 回押してデバイスの電源を入れます。上昇するメロディーが鳴り、緑色 🟢 の LED ライトが約 1 秒間点灯します。

:::tip
ボタンを押してもデバイスが反応しない場合は、まず充電してください。急速充電器は使用しないでください。
::: 

### デバイスの電源を切る

ボタンを 5 秒以上押し続けます。ブザーから 3 回ビープ音が鳴った後、デバイスの電源が切れます。

### アプリ経由で接続する

`Meshtastic` アプリをダウンロードします：

- [IOS アプリ](https://apps.apple.com/us/app/meshtastic/id1586432531)
- [Android アプリ](https://play.google.com/store/apps/details?id=com.geeksville.mesh&referrer=utm_source=downloads-page)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="IOS アプリ">

- Bluetooth パネルで対象デバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- コード（デフォルトコードは `123456`）を入力し、`Pair` をクリックしてデバイスに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android アプリ">

- Bluetooth パネルで対象デバイスを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/AndroidX1Connection.png" alt="pir" width={300} height="auto" /></p>

- コード（デフォルトコードは `123456`）を入力し、`OK` をクリックしてデバイスに接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/AndroidX1PinCodee.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### LoRa の設定

メッシュ上で通信を開始するには、まずリージョンを設定する必要があります。この設定はデバイスが使用する周波数帯域を制御し、お住まいの地域に合わせて設定する必要があります。

<Tabs>
<TabItem value="ios" label="IOS アプリ">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android アプリ">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/AndridLorasetting.jpg" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

**リージョン一覧**

|**Region Code**|**説明**|**周波数帯域 (MHz)**|**デューティサイクル (%)**|**出力制限 (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|未設定|N/A|N/A|N/A|
|US|アメリカ合衆国|902.0 - 928.0|100|30|
|EU_868|欧州連合 868MHz|869.4 - 869.65|10|27|

より包括的な一覧については、[国別 LoRa リージョン](https://meshtastic.org/docs/configuration/region-by-country/) を参照してください。

:::info
**EU_868** は、1 時間あたり 10% のデューティサイクル制限を順守する必要があり、1 時間のローリングウィンドウに対して毎分計算されます。この制限に達すると、再び許可されるまでデバイスは送信を停止します。
:::

デバイスで LoRa リージョンを設定したら、ニーズに合わせて任意の [LoRa 設定](https://meshtastic.org/docs/configuration/radio/lora/) を続けて構成できます。

### デバイスステータス

<table>
  <tr>
    <th colspan="2">ライトの状態</th>
    <th colspan="1">デバイスステータス</th>
  </tr>
  <tr>
    <td rowspan="4">🟢green</td>
    <td>点灯</td>
    <td>デバイス起動中</td>
  </tr>
  <tr>
    <td>高速点滅</td>
    <td>通常動作中</td>
  </tr>
  <tr>
    <td>低速点滅</td>
    <td>充電中</td>
  </tr>
 <tr>
    <td>点灯</td>
    <td>フル充電</td>
  </tr>
  <tr>
    <td>🔴Red</td>
    <td>点滅</td>
    <td>バッテリー残量低下</td>
  </tr>
    <tr>
    <td>⚪️white</td>
    <td>点灯</td>
    <td>DFU モード / ブートローダーモード</td>
  </tr>
</table>

### ボタン操作

<table>
  <tr>
    <th colspan="1">ボタン操作</th>
    <th colspan="1">デバイスの応答</th>
  </tr>
  <tr>
   <td>1 回クリック（電源オフ時）</td>
    <td>デバイス起動</td>
  </tr>
  <tr>
   <td>5 秒間長押し</td>
    <td>デバイス電源オフ</td>
  </tr>
  <tr>
    <td>ダブルクリック</td>
    <td>ノード ID と位置情報をブロードキャスト</td>
  </tr>
  <tr>
    <td>トリプルクリック</td>
    <td>GPS のオン / オフ切り替え</td>
  </tr>
  <tr>
    <td>4 回クリック</td>
    <td>一時的にブザーのオン / オフ切り替え</td>
  </tr>
</table>

## ファームウェアの書き込み

:::caution note
ファームウェアの更新には `OTA を使用しないで` ください。デバイスが完全に故障する可能性があります。詳細については、[こちらをクリック](https://meshtastic.org/docs/getting-started/flashing-firmware/nrf52/ota/) してください。
:::
#### ステップ 1: DFU モードに入る

Web フラッシャー経由で DFU に入ります。これが何度も失敗する場合は、手動で DFU に入ってください。

<Tabs>
<TabItem value="method1" label="Web Flasher 経由">

[Meshtastic Web Flasher](https://flasher.meshtastic.org/) にアクセスします。

デバイスを PC に接続し、デバイスとして `SenseCAP Mesh Tracker X1` を選択して最新のファームウェアを選び、`Flash` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/SelectX1111.png" alt="pir" width={800} height="auto" /></p>

`Enter DFU Mode` をクリックすると、`X1 xxx` という名前のシリアルポートが表示されます。それをクリックして接続します。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/SerialSelectionX111.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="method2" label="手動で入る">

USB ケーブルを PC に接続し、デバイスのボタンを押し続けたまま、**素早く** 充電ケーブルを 2 回接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/DFUEnterManually.gif" alt="pir" width={600} height="auto" /></p>

</TabItem>
</Tabs>

X1 が DFU モードの場合、白色 ⚪️ LED が点灯状態になります。また、コンピューター上に `X1` という名前のドライブが表示されるはずです。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/X1DriveMAC.png" alt="pir" width={300} height="auto" /></p>

#### ステップ 2: フラッシュ消去

ファームウェアを書き込む前に、必ず先に消去してください！

`ゴミ箱` のアイコンをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/EraseX11.png" alt="pir" width={800} height="auto" /></p>

消去用ファームウェアをダウンロードし、それをドライブにコピーします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/FlashFirmwareX11.png" alt="pir" width={800} height="auto" /></p>

このプロセスには時間がかかる場合があります。ドライブが消えるまでお待ちください。

#### ステップ 3: ファームウェアの書き込み

最新のファームウェアを選択し、`UF2` ファイルをダウンロードします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/FlashClick.png" alt="pir" width={800} height="auto" /></p>

UF2 ファイルを DFU ドライブにコピーします。ファイルのコピー完了後、デバイスが再起動するとファームウェアが書き込まれます。

## 上級チュートリアル

### GPS の設定

GPS を有効にしてください。更新間隔とブロードキャスト間隔を調整して、より最新の位置情報を取得できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/MeshGPS.png" alt="pir" width={500} height="auto" /></p>

IOS の場合は、`Accurate Location` をオンにしてください。そうしないと、位置情報がずれる可能性があります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/IOSAccurateLocation.jpg" alt="pir" width={200} height="auto" /></p>


### Web サイト経由で接続する

Web サイト上でテキストメッセージを送信し、他のノードと通信したい場合は、デバイスを [Meshtastic Web サイト](https://client.meshtastic.org/messages/broadcast/0) に接続できます。 

  ステップ 1: Web サイトを開く

    [ここをクリック](https://client.meshtastic.org/messages/broadcast/0) して Web サイトに移動します。

  ステップ 2: 新しいデバイスを追加する 

    「+ New Connection」をクリックします。 

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteAddNewConnection.png" alt="pir" width={600} height="auto" /></p>

    接続方法は 2 通りあります。お好みの方法を選択してください。

<Tabs>

<TabItem value="11" label="Bluetooth">


    Bluetooth を選択します。ポップアップウィンドウでデバイス ID を選択します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/MeshWebBluetooth.png" alt="pir" width={1000} height="auto" /></p>

</TabItem>

<TabItem value="12" label="Serial">

    Serial 方法を選択します。デバイスマネージャーを開き、デバイスがどのポートに接続されているかを確認します。ポップアップウィンドウでそのポートを選択します。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/WebsiteSerialConnection.png" alt="pir" width={1000} height="auto" /></p>

</TabItem>
</Tabs>

  デバイスがリストに表示されます。クリックして接続します。接続に成功すると、Web サイト上でデバイスステータスを直接確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/Websitestatus.png" alt="pir" width={300} height="auto" /></p>

### センサーの設定

|センサー|説明|
|-|-|
|気圧|✅|
|6 軸センサー（今後のバージョン）|✅|
|3 軸センサー（今後のバージョン）|✅|

**ブザーと LED の設定**

||タイプ|出力 PIN|
|-|-|-|
|ブザー|PWM ブザー|25|
|LED|RGB|R:03<br/>G:24<br/>B:28|
|バイブレーション|-|05|

<Tabs>
<TabItem value="ios" label="IOS アプリ">

`Settings` -> `External Notification` -> `GPIO` を有効化 -> `Output Pin GPIO` を設定します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer-en.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">

`Settings` -> `External Notification` -> `GPIO` を有効化 -> `Output Pin GPIO` を設定します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/buzzer-an.png" alt="pir" width={500} height="auto" /></p>

</TabItem>
</Tabs>

詳細については [External Notification Config](https://meshtastic.org/docs/configuration/module/external-notification/) を確認してください。

:::tip
デバイス構成を更新すると、デバイスは再起動します。これには時間がかかる場合があります。
:::

### 着信音の設定

`Settings` -> `Ringtone Config` に移動し、外部通知に使用したい RTTTL 着信音文字列を入力します。

<Tabs>
<TabItem value="ios" label="IOS App">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/T1000E20260410.png" alt="pir" width={500} height="auto" /></p>

</TabItem>

<TabItem value="android" label="Android App">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/ringtonex1.png" alt="pir" width={900} height="auto" /></p>

</TabItem>
</Tabs>

<Tabs>
<TabItem value="13" label="ゼルダの伝説: アイテム入手">

```plain
24:d=16,o=5,b=120:g,c6,d6,2g6
```
</TabItem>

<TabItem value="14" label="スーパーマリオのテーマ（ショート）">

```plain
24:d=4,o=5,b=100:16e6,16e6,32p,8e6,16c6,8e6,8g6,8p,8g
```
</TabItem>

<TabItem value="15" label="マリオ コイン">

```plain
24:d=8,o=6,b=200:b,e7
```
</TabItem>

<TabItem value="16" label="Nokia 着信音">

```plain
24:d=4,o=5,b=180:8e6,8d6,f#,g#,8c#6,8b,d,e,8b,8a,c#,e,2a
```
</TabItem>

<TabItem value="17" label="マリオ パワーアップ">

```plain
powerup:d=16,o=5,b=200:g,a,b,c6,d6,e6,f#6,g6,a6,b6,2c7
```
</TabItem>

<TabItem value="18" label="モールス信号 CQ">

```plain
24:d=16,o=6,b=120:8c,p,c,p,8c,p,c,4p,8c,p,8c,p,c,p,8c,8p
```
</TabItem>

</Tabs>

### ブザーの設定

ブザーはデフォルトで有効になっています。ブザーを無効にしたい場合は、次のスクリーンショットのように `Alert Message buzzer`、`Alert bell buzzer`、`Use PWM buzzer` を設定してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/t1000e/buzzer.png" alt="pir" width={200} height="auto" /></p>

### メッセージアラートの設定

メッセージアラートは `External Notification` で設定できます。

<Tabs>

<TabItem value="aaa" label="IOS">

`Setting` -> `External Notification` に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/ExternalNotificationIOS.png" alt="pir" width={300} height="auto" /></p>

`buzzer off + vibra off` に設定できます。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/IONotificationOff.png" alt="pir" width={600} height="auto" /></p>

または `buzzer on + vibra on` に設定します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/IOSNotificationOn.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="bbb" label="Android">

`Setting` -> `Module Configuration` -> `External Notification` に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/Module_Notification_Android.png" alt="pir" width={600} height="auto" /></p>

`External notification enabled` を有効にすると、`buzzer only`、`vibra only`、または `buzzer on + vibra on` に設定できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/NotificationSettingConfig.png" alt="pir" width={900} height="auto" /></p>

`External notification enabled` を無効にすると、`buzzer off + vibra off` に設定できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/Notificationoff.jpg" alt="pir" width={300} height="auto" /></p>


</TabItem>

</Tabs>

## FAQ


### デバイス ID の確認方法

<Tabs>
<TabItem value="23" label="デバイス背面を確認">
MAC アドレスの `最後の 4 桁` がデバイス ID です。

例えば、以下のデバイスのデバイス ID は `A0D4` となります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/MACAd.png" alt="pir" width={800} height="auto" /></p>

</TabItem>

<TabItem value="22" label="シリアルツール経由">


 `Open Serial Monitor` をクリックし、デバイスを PC に接続してシリアルログを確認し、キーワード `using nodenum` を探します。

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/monitor2.png" alt="pir" width={800} height="auto" /></p>

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/UsingNodeName.png" alt="pir" width={800} height="auto" /></p>


</TabItem>
</Tabs>

### デバイスの再起動方法

 ボタンを押し続けたまま、充電ケーブルを接続します。

## トラブルシューティング

### デバイスの電源が入らない

- LED インジケータとブザーが動作していない場合、デバイスの電源が切れているように見えることがあります。上記の手順を実行する前に、`以下のパラメータを確認する` ことをお勧めします。

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/LEDLightEnable.png" alt="pir" width={600} height="auto" /></p>

- 動作確認済みの USB ケーブルを使用して、バッテリーにシステムを起動するのに十分な電力があることを確認するために、1〜2 時間連続して `デバイスを充電` してください。

- 充電後もデバイスが反応しない場合は、次の手順で `ハードリセットを実行` します。USB ケーブルを抜きます。ボタンを押し続けたまま、ボタンを押した状態で USB ケーブルを接続します。約 3 秒間押し続けてから離します。これによりシステムが強制的にリセットされます。

 - それでも解決しない場合は、USB ケーブルをコンピュータに接続します。デバイスのボタンを押し続けたまま、デバイスをコンピュータに接続し、PC にディスクがポップアップ表示されるかどうかを確認します。表示される場合は、ブートローダーを再インストールしてください。

### デバイスがブートループに陥る

**説明：**

デバイスが繰り返し再起動し、シリアルポートが繰り返し接続および切断されます。

**解決方法：**

- ステップ 1: 手動で DFU モードに入ることを試します。デバイスボタンを押し続けたまま、**素早く** 充電ケーブルを 2 回接続します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/DFUEnterManually.gif" alt="pir" width={600} height="auto" /></p>

白色 LED が点灯し続けている場合、デバイスは DFU モードになっています。

:::note
DFU モードに正常に入るには、この操作を素早く行う必要があります。複数回試す必要があるかもしれません。
:::

- ステップ 2: フラッシュを消去します。

- ステップ 3: ファームウェアを書き込みます。

### ブートローダーのインストール


<Tabs>

<TabItem value="m2" label="Adafruit-nrfutil からインストール">


- [ブートローダーのダウンロード](https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/mesh_tracker_x1_bootloader-0.10.0-13.zip)

:::danger note
ブートローダーを書き込む際は、ケーブル接続が安定していることを確認し、書き込み処理中に **絶対に** 取り外さないでください。
:::

**ステップ 1: Adafruit-nrfutil のインストール**

Windows ユーザーは、「Win」キーと「r」キーを押し、ポップアップウィンドウに「cmd」と入力して「Enter」をクリックします。これでコマンドラインを開くことができます。 

Mac ユーザーは、「Command」キーと「Space」キーを押して Spotlight を開きます。その後「termial」と入力し、「Return」をクリックします。これでコマンドラインを開くことができます。 

**前提条件**

- [Python3](https://www.python.org/downloads/)
- [pip3](https://pip.pypa.io/en/stable/installation/)

コマンドラインで Python と pip が正しくインストールされているか確認します。

```
python --version
```

```
python -m pip --version
```

その後、「Python xxx」と「pip xxx」が表示されるはずです。表示されない場合は、Python を再インストールしてください。

これは最新バージョンをインストールするための推奨方法です：

```
pip3 install --user adafruit-nrfutil
```

インストールパスを確認します：

```
python -m pip show adafruit-nrfutil
```

これはインストール場所です：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/location.png" alt="pir" width={600} height="auto" /></p>

Windows ユーザーは、パスを手動で追加する必要がある場合があります。前のステップで表示されたインストール場所をコピーし、次のように追加します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/AddPath.png" alt="pir" width={1000} height="auto" /></p>

**ステップ 2: ポート番号の確認**

デバイスを PC に接続し、ポート番号を確認します。

Windows ユーザーは、デバイスマネージャーを開き、`port` に移動します。デバイス接続後に新たに表示されたポート番号がデバイスのポート番号です。

Mac ユーザーの例：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

Windows ユーザーの例：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Port.png" alt="pir" width={400} height="auto" /></p>

**ステップ 3: ブートローダーの書き込み**

ターミナルまたはコマンドプロンプトで、ブートローダーの zip パッケージをダウンロードしたディレクトリに移動し、次のコマンドを実行します。その際、デバイスに対応する正しいポートに置き換えてください：

- **Windows の場合**:

```
adafruit-nrfutil --verbose dfu serial --package mesh_tracker_x1_bootloader-0.10.0-13.zip -p COMxx -b 115200 --singlebank --touch 1200
```

COMXX を自分の COM 番号に変更してください。例えば、デバイスが com6 の場合、コマンドを次のように変更します：

`adafruit-nrfutil --verbose dfu serial --package mesh_tracker_x1_bootloader-0.10.0-13.zip -p **COM6** -b 115200 --singlebank --touch 1200`

 このコマンドを入力すると、一部のデバイスではポート番号が変わることがあります。そのため、インストールに失敗した場合は、もう一度ポート番号を確認してください。

- **その他の場合**:

```
adafruit-nrfutil --verbose dfu serial --package mesh_tracker_x1_bootloader-0.10.0-13.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-success.png" alt="pir" width={800} height="auto" /></p>

上記の手順が完了したら、この[手順](https://wiki.seeedstudio.com/ja/x1_get_started_for_meshtastic/#flash-firmware)に従ってアプリケーションファームウェアを書き込むことができます。

</TabItem>

<TabItem value="m3" label="ソースからインストール">


PyPi でのインストールに問題がある場合や、ツールを変更したい場合はこの方法を使用します。まずこのリポジトリをクローンし、そのフォルダに移動します。

```
git clone https://github.com/adafruit/Adafruit_nRF52_nrfutil.git
cd Adafruit_nRF52_nrfutil
```

注意：以下のコマンドでは `python3` を使用していますが、Windows を使用している場合は `python` に変更する必要があるかもしれません。これは、Windows 版の Python 3.x のインストールでは依然として python.exe という名前が使われているためです。

ホームディレクトリのユーザースペースにインストールするには：

```
pip3 install -r requirements.txt
python3 setup.py install
```

`pip3 install` を実行したときにパーミッションエラーが発生する場合、`pip3` が古いか、システムディレクトリにインストールしようとするよう設定されています。その場合は、`--user` フラグを使用してください：

```
pip3 install -r --user requirements.txt
python3 setup.py install
```

システムディレクトリにインストールしたい場合（一般的には非推奨）：

```
sudo pip3 install -r requirements.txt
sudo python3 setup.py install
```

ユーティリティの自己完結型実行バイナリ（Windows および MacOS）を生成するには、次のコマンドを実行します：

```
pip3 install pyinstaller
cd Adafruit_nRF52_nrfutil
pip3 install -r requirements.txt
cd Adafruit_nRF52_nrfutil\nordicsemi
pyinstaller __main__.py --onefile --clean --name adafruit-nrfutil
```

.exe ファイルは `Adafruit_nRF52_nrfutil\nordicsemi\dist\adafruit-nrfutil`（Windows の場合は `.exe` 付き）にあります。
利便性のために、%PATH% 内のディレクトリなど、別の場所にコピーまたは移動してください。

**ステップ 2: ポート番号を確認する**

デバイスを PC に接続し、ポート番号を確認します。

Windows ユーザーの場合は、デバイスマネージャーを開き、「ポート」に移動します。デバイス接続後に新たに表示されたポート番号が、そのデバイスのポート番号です。

Mac ユーザーの場合、例えば：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/usb-port.png" alt="pir" width={600} height="auto" /></p>

Windows ユーザーの場合、例えば：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/Port.png" alt="pir" width={400} height="auto" /></p>

**ステップ 3: ブートローダーを書き込む**

ターミナルまたはコマンドプロンプトで、ブートローダーの zip パッケージをダウンロードしたディレクトリに移動し、次のコマンドを実行します。その際、デバイスに合った正しいポートに置き換えてください：

- **Windows の場合**:

```
adafruit-nrfutil --verbose dfu serial --package mesh_tracker_x1_bootloader-0.10.0-13.zip -p COMxx -b 115200 --singlebank --touch 1200
```

COMXX を自分の COM 番号に変更してください。例えば、デバイスが com6 の場合、コマンドを次のように変更します：

`adafruit-nrfutil --verbose dfu serial --package mesh_tracker_x1_bootloader-0.10.0-13.zip -p **COM6** -b 115200 --singlebank --touch 1200`

 このコマンドを入力した後、一部のデバイスではポート番号が変わることがあります。そのため、インストールに失敗した場合は、もう一度ポート番号を確認してください。

- **その他の場合**:

```
adafruit-nrfutil --verbose dfu serial --package mesh_tracker_x1_bootloader-0.10.0-13.zip -p /dev/tty.SLAB_USBtoUART -b 115200 --singlebank --touch 1200
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/flash-success.png" alt="pir" width={800} height="auto" /></p>

上記の手順が完了したら、この[手順](https://wiki.seeedstudio.com/ja/x1_get_started_for_meshtastic/#flash-firmware)に従ってアプリケーションファームウェアを書き込むことができます。

</TabItem>
</Tabs>


**2) デバイスが DFU モードに入れないが、シリアルポートは検出できる場合**

- シリアルポートツールを開きます

- ボーレートを `1200` に設定します。

- デバイスを接続します。
   接続するとライトが一瞬点滅します。ライトが点灯したままになるまでこれを繰り返してください。ライトが点灯したままになれば、デバイスが DFU モードに戻れることを意味します。その後、[ブートローダーの書き込み](https://wiki.seeedstudio.com/ja/x1_get_started_for_meshtastic/#bootloader-installation) -> [フラッシュの消去](https://wiki.seeedstudio.com/ja/x1_get_started_for_meshtastic/#step-2-flash-erase) -> [ファームウェアの書き込み](https://wiki.seeedstudio.com/ja/x1_get_started_for_meshtastic/#step-3-flash-firmware) を行ってください。

**3) デバイスが DFU モードに入れず、シリアルポートも表示されない場合**

- デバイスボタンを押し続けたまま充電ケーブルを接続します。PC 上にディスクが表示されたら、シリアルポートが見える場合があります。

- それでもうまくいかない場合は、充電ケーブルを外し、バッテリーが完全に放電するまで数日間デバイスを放置してから、充電ケーブルを接続し、再度ペアリングを試してください。

**4) 上記のいずれの手順でも解決しない場合は、テクニカルサポート（support@sensecapmx.com）にお問い合わせください。**

 ### デバイスが自動的に電源オフになる

- **現象の説明**

 - デバイスの電源を入れた後、しばらくすると自動的に電源が切れる、または再起動します。 
 - シリアルポートログがしばらく動作した後に停止します。

 これは、メッセージ送信プロセスが完了していない、設定中であるなど、デバイスが次の状態にあるときに手動で強制的に再起動または電源オフしたことが原因の可能性があります。

- **トラブルシューティング**

 [こちらをクリック](https://wiki.seeedstudio.com/ja/x1_get_started_for_meshtastic/#step-2-flash-erase)してフラッシュ消去を実行してください。 

 ### 工場出荷時設定へのリセット
デフォルト設定に戻したい場合は、工場出荷時リセットを行うことができます。工場出荷時リセットを行う方法は 2 つあります。

- [こちらをクリック](https://wiki.seeedstudio.com/ja/x1_get_started_for_meshtastic/#step-2-flash-erase)してデバイスのフラッシュを消去し、その後最新のファームウェアを書き込みます。

- アプリで `Factory Reset` ボタンをクリックします。デバイスは工場出荷時の設定で自動的に再起動します。 
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Factory.png" alt="pir" width={400} height="auto" /></p>

### ダイレクトメッセージの失敗

#### NodeDB のリセット

NodeDB は、現在の Mesh ネットワークで検出されたノードに関する情報を保存するローカルデータベースです。特定のノードと通信できない状況に遭遇した場合、そのノードに対して NodeDB に古い情報が保存されている可能性があります。更新する必要があります。

アプリを開いて対象デバイスに接続します。**Settings**->**Device**->**Device Config**->**Reset NodeDB** に進みます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB3.png" alt="Device entry in Settings" width={300} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/L1nodeDB4.png" alt="Reset NodeDB button in Device Config" width={300} height="auto" /></p>

#### ユーザー情報の交換

各ノードは定期的に自分自身のノード情報を送信し、メッシュ内の他のノードがそれを「見て」「認識」できるようにします。2 つのノードが互いに通信できるようにするには、お互いのノード情報を交換する必要があります。リスト上の別のノードとプライベートメッセージの送受信ができない場合は、アプリで手動で情報交換を促すことができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/USERINFO.png" alt="Device entry in Settings" width={300} height="auto" /></p>

#### 秘密鍵の再生成

2 つのノードが互いに通信できるようにするには、お互いの秘密鍵を知っている必要があります。あるノードがプライベートメッセージ送信に失敗し続ける場合は、そのノードの秘密鍵を再生成してみてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/RenerateKey.png" alt="Device entry in Settings" width={600} height="auto" /></p>

設定を有効にするために、不具合のあるデバイスを再起動してください。

:::note
鍵を再生成した後は、他のデバイスがそのノードに再接続する必要があります。そのため、他のデバイスのノードリストからそのノードを削除しておくことをお勧めします。
:::

### 信号品質

  - **SNR** は通信リンクの品質を反映します。通常のデバイスは -7 dB 以上で動作します。SNR が -10 dB 未満のデバイスは性能が低いことを示します。

  - **RSSI** はデバイスとその周囲の環境の両方によって決まります。通常のデバイスは -110 dBm 以上で動作します。RSSI が -115 dBm 未満のデバイスは性能が低いと見なされます。 

      最良の信号効果を得るために、干渉が最小限で、開けていて障害物のない場所でデバイスを使用してください。


## 技術サポート & 製品ディスカッション

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
        <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
    </div>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
        <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
    </div>
</div>
