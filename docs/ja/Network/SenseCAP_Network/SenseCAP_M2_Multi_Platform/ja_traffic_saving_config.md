---
description: 低データ消費モード設定（4G版用）
title: 低データ消費モード設定（4G版用）
keywords:
- SenseCAP_M2
- Gateway
image: https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/sensecap_m2.jpg
slug: /ja/traffic_saving_config
last_update:
  date: 12/4/2024
  author: Jessie
---


このチュートリアルでは、M2 Multi-Platform Gateway **4G版**の低データ消費モードの設定方法をユーザーに説明します。このモードでは、月間のトラフィックは約**60M**になることが期待されます。具体的なトラフィックはノードのパケットなどに依存します。

:::caution note

1. アプリのステータス表示が遅延する場合があります
2. ネットワークスイッチとRGBインジケーターライトは5分後に変更されます
:::

### ファームウェアバージョンの確認

低データ消費モードを設定する前に、まずOSとファームウェアのバージョンを確認してください。

:::tip
OSバージョンは0.9.5より新しい必要があります<br/>
ファームウェアバージョンは1.1.6より新しい必要があります
:::

[クイックスタート](https://wiki.seeedstudio.com/ja/quick_start_with_M2_MP/)を確認してLuciページにログインしてください。

`Status` -> `Overview`に移動し、現在のOSとファームウェアのバージョンを確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/version-check.png" alt="pir" width={800} height="auto" /></p>

#### OSのアップグレード

ファームウェアは自動的にアップグレードされますが、ユーザーはOSバージョンを手動でアップグレードする必要があります。

`System` -> `Backup/Flash Firmware`に移動し、`Update`をクリックしてください。

:::danger
アップグレード期間中は電源接続を維持してください。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/online-update.png" alt="pir" width={800} height="auto" /></p>

### ホワイトリスト設定

このタブは、トラフィックを節約するために不要なノードをフィルタリングするために使用されます。

- `SenseCAP`モードの場合、SenseCAP以外のノードは自動的にフィルタリングされるため、追加の設定は不要です。

- `Packet Forwarder`および`Basic Station`モードの場合、ホワイトリストモードを有効にする必要があります。

 :::tip
 AWSプラットフォームを使用している場合は、この手順をスキップして、AWSコンソールでホワイトリストを設定するだけで構いません。
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/aws-white-list.png" alt="pir" width={600} height="auto" /></p>
 :::

 `OUI List`: ノードEUIの最初の3バイト。    *join-requestパケットをフィルタリングするために使用*。<br/>
  例：SenseCAPノードの場合、OUIは'2CF7F1'

  `Network ID List`/`DevAddr`:  *アップリンクパケットをフィルタリングするために使用*。<br/>
 例：SenseCAPノードの場合、NetIDは'000013'、DevAddrは'27000000 - 27FFFFFF'

  詳細については[NetID and DevAddr Prefix Assignments](https://www.thethingsnetwork.org/docs/lorawan/prefix-assignments/)を参照してください
  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/white-list-config.png" alt="pir" width={800} height="auto" /></p>

### PINGパラメータの設定

リンクが稼働しているかどうかを確認するために使用されます。空白のままにすると、インターフェースが常にオンラインであると仮定されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/mwan3.png" alt="pir" width={800} height="auto" /></p>

### 低データ消費モードの有効化

`Low Data Consumption Mode`を有効にし、`alive time`を設定してください。SenseCAPプラットフォームのデフォルト値：86400。

設定後、変更を適用するためにゲートウェイを再起動してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/mode-enable.png" alt="pir" width={800} height="auto" /></p>