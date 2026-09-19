---
description: MUI の紹介。MUI の定義、特徴、使い方を紹介します。
title: MUI 入門
keywords:
  - Meshtastic
  - Wio Tracker L2
  - MUI
image: https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/MUIMUI.png
slug: /l2_mui
sku: 100029766
sidebar_position: 0
last_update:
  date: 3/13/2026
  author: Michelle Huang
createdAt: '2025-06-17'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/ja/l2_mui/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## MUI とは？

MUI（Meshtastic User Interface）は、Meshtastic デバイス向けに設計されたオープンソースのグラフィカルインターフェースです。ユーザーがデバイスとより直感的にやり取りできるようにします。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/MUIMUI.png" alt="pir" width={900} height="auto" /></p>

**主な特徴**

- **インタラクティブマップ**: MUI はノードの位置をオンラインまたはオフラインマップ上に直接表示します。モバイルやデスクトップの APP を開かなくても、近くのデバイスとその位置を確認できます。

- **便利なデバイス設定**: 無線、GPS、ディスプレイ、その他の一般的なオプションを含む Meshtastic の設定を、デバイス上で直接構成できます。日常的な設定には外部アプリは不要です。

- **直感的なグラフィカルインターフェース**: MUI はタッチスクリーンに最適化されたインターフェースを提供し、わかりやすいメニューと地図ベースのナビゲーションを備えています。一般的な操作は数回タップするだけで完了でき、新規ユーザーと経験豊富なユーザーの両方にとってデバイスが使いやすくなります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/MUIIntro.gif" alt="pir" width={600} height="auto" /></p>

## Wio Tracker L2 で MUI を使い始める


### UI の切り替え

<Tabs>

<TabItem value="1" label="MUI から BaseUI へ">
Setting ページに移動し **->** `Reboot/Shutdown` を選択 **->** Bluetooth アイコンを長押し **->** `OK` をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/MUIToBaseUI.png" alt="pir" width={900} height="auto" /></p>

:::tip
Bluetooth アイコンを `long-press` すると、BaseUI 切り替えポップアップが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/LongPress.gif" alt="pir" width={250} height="auto" /></p>

Bluetooth アイコンをクリックするだけの場合は、Bluetooth モードに入ります。その場合は、画面に表示されている Bluetooth アイコンを長押しすると、デバイスは自動的に MUI へ再起動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/GoBackMUI.gif" alt="pir" width={250} height="auto" /></p>

:::

</TabItem>

<TabItem value="2" label="BaseUI から MUI へ">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BasetoMui.png" alt="pir" width={900} height="auto" /></p>

</TabItem>
</Tabs>

### スマートフォン接続
`Setting` ページに移動し、`Reboot/Shutdown` をクリックしてから、`Bluetooth icon` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BluetoothModeMUI.png" alt="pir" width={800} height="auto" /></p>

その後、デバイスは Bluetooth モードで再起動します。Bluetooth ペアリングコードが画面に表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/BluetoothParingMode1.png" alt="pir" width={500} height="auto" /></p>

### LoRa 設定
メッシュ通信を開始するには、リージョンを設定する必要があります。この設定はデバイスが使用する周波数帯域を制御し、自分の地域に合わせて設定する必要があります。

**リージョン一覧**

|**Region Code**|**Description**|**Frequency Range (MHz)**|**Duty Cycle (%)**|**Power Limit (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|未設定|N/A|N/A|N/A|
|US|アメリカ合衆国|902.0 - 928.0|100|30|
|EU_868|欧州連合 868MHz|869.4 - 869.65|10|27|

より包括的な一覧については、[LoRa Region by Country](https://meshtastic.org/docs/configuration/region-by-country/) を参照してください。

:::info
**EU_868** は、1 時間あたり 10% のデューティサイクル制限を順守する必要があり、1 時間のローリングウィンドウに対して毎分計算されます。この制限に達すると、再び許可されるまでデバイスは送信を停止します。
:::

<Tabs>

<TabItem value="7" label="MUI で設定">

`Setting` ページに移動し、`Region` をクリックしてリージョンを選択し、`OK` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/LoRaSetting.png" alt="pir" width={900} height="auto" /></p>

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

これでデバイス上の LoRa リージョンを設定できたので、必要に応じて任意の [LoRa Configs](https://meshtastic.org/docs/configuration/radio/lora/) を続けて設定できます。


### マップの使用
<Tabs>

<TabItem value="10" label="オンラインマップ">

**Step1. GPS を有効化**

位置情報を取得するには GPS を有効にする必要があります。これは `long pressing the position icon` によってデバイス上で直接設定できます。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/GPSEnableMUI.png" alt="pir" width={900} height="auto" /></p>

また、スマートフォンの APP から設定することもできます。

**Step2. SD カードの準備**

SD カードをフォーマットし、マップを SD カードにインストールする必要があります。SD カードの詳しい使用チュートリアルについては、こちらをクリックしてご覧ください。

**Step3. SD カードの挿入**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/SDCardPlugin.gif" alt="pir" width={450} height="auto" /></p>

**Step4. マップの表示**

マップが読み込まれるまで待ちます。Wi-Fi に正常に接続し位置情報を取得すると、デバイスにオフラインマップが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/OfflineMapL2.png" alt="pir" width={450} height="auto" /></p>

</TabItem>

<TabItem value="11" label="オフラインマップ">

**Step1. GPS を有効化**

位置情報を取得するには GPS を有効にする必要があります。これは `long pressing the position icon` によってデバイス上で直接設定できます。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/GPSEnableMUI.png" alt="pir" width={900} height="auto" /></p>

また、スマートフォンの APP から設定することもできます。

**Step2. Wifi の設定と有効化**

Wifi 名とパスワードを設定します。これはデバイス上で直接操作できます。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiSetting.png" alt="pir" width={450} height="auto" /></p>

Wifi IP が空で Wifi アイコンがグレーの場合は Wifi は無効です。Wifi IP が表示され Wifi アイコンが白い場合は Wifi が有効です。 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiStatus.png" alt="pir" width={900} height="auto" /></p>

ステータスを切り替えるには `Wifi` アイコンを長押しします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/WifiSwitchMUI.png" alt="pir" width={450} height="auto" /></p>

:::tip

接続する Wifi は 2.4G である必要があります。5G Wifi はデバイスでは使用できません。

:::



**Step3. マップの表示**

マップが読み込まれるまで待ちます。Wi-Fi に正常に接続し位置情報を取得すると、デバイスにオンラインマップが表示されます。



</TabItem>
</Tabs>


## 高度なインタラクション

### メニューバー
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/MenuBarMUII.png" alt="pir" width={600} height="auto" /></p>


### ホームページ

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/MUIHOme.png" alt="pir" width={900} height="auto" /></p>

### ノードページ

- **任意のノードをクリック**: ノードの詳細なパラメータ情報を展開

- **任意のノードを長押し**: チャットに入る

- **座標を長押し**: マップ上でノードの位置を表示

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/NodePaje.png" alt="pir" width={300} height="auto" /></p>

### チャンネルページ

- **チャンネルをクリック**: チャンネルチャットに入る

- **チャンネルを長押し**: チャンネルをミュート/ミュート解除

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/ChannelPage.png" alt="pir" width={300} height="auto" /></p>

:::tip

下の左側の画像に示されている名前付きチャンネルのように、設定済みのチャンネルのみ操作できます。右側の画像に示されているような、設定されておらずラベルのみのチャンネルは操作できません。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/ChannelConfiguration.png" alt="pir" width={300} height="auto" /></p>

:::

### メッセージページ

- **チャットをクリック**: チャットに入る。

- **チャットを長押し**: DEL ボタンが表示され、削除できます。

- **オレンジ色でハイライト**: 新しい未読メッセージを示します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/ChatInterct.png" alt="pir" width={900} height="auto" /></p>

### Setting ページ

- **Reboot**: "Reboot/Shutdown" を選択し、緑色の "Reboot" アイコンをクリックします。

- **電源オフ**: "Reboot/Shutdown" を選択し、赤色の "Turn off" アイコンをクリックします。

- **Bluetooth モードに入る**: "Reboot/Shutdown" を選択し、青色の "Bluetooth" アイコンをクリックします。

- **BaseUI に切り替え**: "Reboot/Shutdown" を選択し、青色の "Bluetooth" アイコンを長押しします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/SettingMUII.png" alt="pir" width={900} height="auto" /></p>


### Tool

- **Mesh Detector**: 検出されたアクティブノードを表示
- **Signal Scanner**: 選択したノードの RSSI と SNR を表示
- **Trace Route**: 選択したノードのルーティングパスを表示
- **Statistic**: パケットデコード情報を表示
- **Packet Log**: デバイスログを表示

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/TOOLMUI.png" alt="pir" width={500} height="auto" /></p>

## MUI デバイス要件

MUI は Meshtastic をサポートし、グラフィカルディスプレイを備えたハードウェア上で動作するように設計されています。オフラインマップを含むすべての MUI 機能を使用するには、デバイスは次の要件を満たす必要があります。

| コンポーネント | 要件 |
|-----------|-------------|
| ディスプレイ | タッチ操作に対応したカラー表示 |
| GNSS | 位置情報サービス用の内蔵 GNSS 受信機 |
| LoRa® | Meshtastic 通信に対応した LoRa® 無線 |
| ストレージ | オフラインマップ用の microSD カードスロット |
| MCU | 画面表示と Meshtastic ファームウェアの両方をサポートできる高性能 MCU が必要です |


**Seeed Wio Tracker L2** は、MUI に推奨されるハードウェアプラットフォームです。

このデバイス 1 台に、必要なすべてのコンポーネントが統合されています：

- カラータッチスクリーン
- 内蔵 GNSS
- LoRa® 通信
- Wi-Fi および Bluetooth® 接続
- オフラインマップ用 microSD カードスロット
- プログラミングと電源供給用の USB Type-C

追加の拡張ボードは不要です。

## FAQ
### キーボードを有効にする方法
下図のキーボードアイコンをクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/Keyboardicon.png" alt="pir" width={500} height="auto" /></p>

その後、数字や文字を入力できます。すべてのページにキーボードアイコンがあるわけではなく、通常は入力が必要なページにのみ表示されます。

### Wi-Fi が自動的にオフになるのはなぜですか

Bluetooth ペアリングモードに入ると、デバイスの Wi-Fi は自動的に無効に設定されます。
Bluetooth モード中のデバイスは、スマートフォンアプリで Wi-Fi を有効にできます。

### MUI で mqtt メッセージを送信する方法

デバイスは MUI 動作中は mqtt メッセージを送信できません。mqtt メッセージを送信したい場合は、次の手順に従ってください：

**Step1**. Bluetooth ペアリングモードに入る

**Step2**. デバイスをスマートフォンアプリとペアリングする

**Step3**. スマートフォンアプリで mqtt を設定する

**Step4**. メッセージ送信を開始する

