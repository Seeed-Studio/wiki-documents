---
description: 低データ消費モード設定（4Gバージョン向け）
title: 低データ消費モード設定（4Gバージョン向け）
keywords:
- SenseCAP_M2
- Gateway
image: https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/sensecap_m2.jpg
slug: /ja/traffic_saving_config
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

このチュートリアルでは、M2 Multi-Platform Gateway **4Gバージョン**の低データ消費モードを設定する方法を案内します。このモードでは、月間の通信量は約**60M**になることが期待されます。具体的な通信量はノードのパケットなどに依存します。

:::caution note
1. アプリのステータス表示が遅れる場合があります。
2. ネットワークスイッチとRGBインジケーターライトは5分後に変更されます。
:::

### ファームウェアバージョンの確認

低データ消費モードを設定する前に、OSとファームウェアのバージョンを確認してください。

:::tip
OSバージョンは0.9.5以降である必要があります。<br/>
ファームウェアバージョンは1.1.6以降である必要があります。
:::

[Quick Start](https://wiki.seeedstudio.com/ja/quick_start_with_M2_MP/)を参照してLuciページにログインしてください。

`Status` -> `Overview`に移動し、現在のOSとファームウェアバージョンを確認します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/version-check.png" alt="pir" width={800} height="auto" /></p>

#### OSのアップグレード

ファームウェアは自動的にアップグレードされますが、OSバージョンは手動でアップグレードする必要があります。

`System` -> `Backup/Flash Firmware`に移動し、`Update`をクリックします。

:::danger
アップグレード中は電源接続を維持してください。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/online-update.png" alt="pir" width={800} height="auto" /></p>

### ホワイトリスト設定

このタブは、トラフィックを節約するために不要なノードをフィルタリングするために使用されます。

* `SenseCAP`モードの場合、SenseCAP以外のノードは自動的にフィルタリングされるため、追加の設定は不要です。

* `Packet Forwarder`および`Basic Station`モードの場合、ホワイトリストモードを有効にする必要があります。

:::tip
AWSプラットフォームを使用している場合、このステップをスキップできます。AWSコンソールでホワイトリストを設定するだけです。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/aws-white-list.png" alt="pir" width={600} height="auto" /></p>
:::

`OUI List`: ノードEUIの最初の3バイト。*join-requestパケットをフィルタリングするために使用されます*。<br/>
例: SenseCAPノードの場合、OUIは'2CF7F1'です。

`Network ID List`/`DevAddr`: *アップリンクパケットをフィルタリングするために使用されます*。<br/>
例: SenseCAPノードの場合、NetIDは'000013'、DevAddrは'27000000 - 27FFFFFF'です。

詳細については、[NetID and DevAddr Prefix Assignments](https://www.thethingsnetwork.org/docs/lorawan/prefix-assignments/)を参照してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/white-list-config.png" alt="pir" width={800} height="auto" /></p>

### PINGパラメータの設定

リンクがアップしているかどうかを確認するために使用されます。インターフェースが常にオンラインであると仮定する場合は空白のままにしてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/mwan3.png" alt="pir" width={800} height="auto" /></p>

### 低データ消費モードの有効化

`Low Data Consumption Mode`を有効にし、`alive time`を設定します。SenseCAPプラットフォームのデフォルト値は86400です。

設定後、変更を適用するためにゲートウェイを再起動してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/mode-enable.png" alt="pir" width={800} height="auto" /></p>