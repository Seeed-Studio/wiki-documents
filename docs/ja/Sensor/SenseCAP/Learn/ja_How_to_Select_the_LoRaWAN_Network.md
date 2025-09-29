---
description: どのLoRaWANネットワークを選択すべきか
title: どのLoRaWANネットワークを選択すべきか
keywords:
- LoRaWAN
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/select_lorawan_network
last_update:
  date: 1/9/2023
  author: Jessie
---


急速に拡大するIoT（Internet of Things）の領域において、LoRaWANネットワークは人気が急上昇しており、多様なIoTアプリケーションに対して長距離・低消費電力通信機能を提供しています。最近、私たちは多くの問い合わせを受けています：「**特定のプロジェクトにはどのLoRaWANネットワークを選択すべきでしょうか？**」

この記事では、LoRaWANネットワークの構成要素について説明し、パブリックとプライベートLoRaWANネットワークの違いを探り、情報に基づいた決定を下すための参考資料を提供します。

### LoRaWANネットワークとは？

**LoRaWAN**（Long Range Wide Area Network）は、低消費電力・長距離通信用に設計されたワイヤレスプロトコルで、IoT（Internet of Things）デバイスがサーバーやアプリケーションと接続してデータを交換することを可能にします。
スマートシティ、農業、資産追跡、環境監視など、幅広いアプリケーションにわたってIoTデバイスを展開するための、コスト効率的で安全なソリューションを提供します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/lorawan-server.png" alt="pir" width={800} height="auto" /></p>

### LoRaWANネットワークはどのように動作するか？

典型的なLoRaWANネットワークは、以下の基本要素で構成されています：エンドデバイス、ゲートウェイ、ネットワークサーバー、アプリケーションサーバー。

エンドデバイスは近くのゲートウェイと通信し、ゲートウェイはネットワークサーバーに接続されています。ネットワークサーバーはデータをアプリケーションサーバーに転送します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/lorawan-server2.png" alt="pir" width={800} height="auto" /></p>

### パブリックLNSとプライベートLNSの違い

LoRaWANネットワークは、大きくパブリックまたはプライベートに分類できます。パブリックLoRaWANネットワークはTTN、Heliumなどのネットワークプロバイダーに依存しますが、プライベートネットワークはゲートウェイやサーバーなどのネットワーク要素をユーザーの制御下に置きます。パブリックLNSを選択するか、独自のプライベートネットワークを構築することができます。

|要因|パブリックLoRaWANネットワーク|プライベートLoRaWANネットワーク|
|--|--|--|
|所有権| ネットワークプロバイダーによって管理|ユーザーの制御下|
|カバレッジ|特定の地域で利用可能|関心のあるエリアを自由にカバー|
|セキュリティ|共有インフラストラクチャ |強化された制御とセキュリティ|
|セットアップコスト|比較的低い参入コスト|立ち上げ時に大きなインフラストラクチャコスト|
|データ送信コスト|エンドデバイスのデータ送信に高い購読料|購読料なし|

パブリックとプライベートLoRaWANネットワークの選択は、主にプロジェクトの性質と要件によって決まります。以下に簡単な概要を示します：

**プライベートLoRaWANネットワークが適している場合：**

- セキュアなエンドツーエンドデータ整合性を必要とする産業オートメーションネットワーク
- デバイス間で超セキュアな通信を必要とする医療アプリケーション
- 機密情報を扱うスマートビルディングセキュリティシステム

**パブリックLoRaWANネットワークが適している場合：**

- 作物監視などの農業シナリオ
- 交通監視、スマート照明、スマートパーキングシステムなどのアプリケーションを持つスマートシティ

### パブリックLoRaWANネットワークを選択する場合、何をすべきか？

パブリックLoRaWANネットワークを検討している場合、TTN、Helium、Loriot、Chirp Stackなどを含む複数のグローバルプロバイダーから選択できます。最終決定を行うために、以下の要因を考慮できます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/lorawan-map.png" alt="pir" width={800} height="auto" /></p>

#### 私の地域でパブリックLoRaWANネットワークは利用可能か？

SemtechのLoRaエコシステム[ネットワークプロバイダー](https://www.semtech.com/lora/ecosystem/networks)ページを訪問するか、LoRa Allianceの[グローバルカバレッジマップ](https://lora-alliance.org/#tabs-1)を参照して、あなたの地域でパブリックLoRaWANネットワークが利用可能かどうかを確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/lorawan-map2.png" alt="pir" width={800} height="auto" /></p>

最適なプロバイダーと開発エリアを選択するために、フィールドテストを実施することをお勧めします。[Wio Terminal LoRaWANフィールドテスター](https://www.seeedstudio.com/WioField-Tester-Kit-p-5282.html)は、特定の位置で接続可能なゲートウェイの数を具体的に知るのに役立ち、ネットワークマッパーを充実させて互いを知り、実際のネットワークカバレッジを共有するのに役立ちます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/server-helium.png" alt="pir" width={700} height="auto" /></p>

### プライベートLoRaWANネットワークを選択する場合、何をすべきか？

プライベートLoRaWANネットワークの構築は、特に工場やキャンパスなどの定期的なエリア展開において実行可能な選択肢となり得ます。典型的なプライベートLoRaWANネットワークには、LoRaWANデバイス、ゲートウェイ、サーバーという3つの主要コンポーネントが含まれます。以下に考慮すべき点を示します：

#### どのゲートウェイを選択すべきか？

独自のLoRaWANネットワークを構築するには、まずエンドデバイスとネットワークサーバーを接続する重要な役割を果たす適切なゲートウェイを選択することから始めます。ゲートウェイには多くの種類があり、選択する際はコスト、機能性、展開オプションなどの要因を考慮してください。迅速で簡単なセットアップのために、[SenseCAP Multi-Platform LoRaWAN Indoor Gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)をチェックしてください - Wi-Fiルーターのセットアップと同じくらい簡単で、内蔵ChirpStack LNSが付属しています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/server-gateway.png" alt="pir" width={800} height="auto" /></p>

#### エンドデバイスの展開を開始する

ゲートウェイがセットアップされたら、最初のデバイスを展開する時です！真に信頼性の高いトラッキングソリューションに理想的な[SenseCAP T1000 LoRaWANトラッカー](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html)を試してみてください。

エンドデバイスの展開に関して、1つのゲートウェイに何台のデバイスが接続できるか疑問に思うかもしれません。答えは複数の変数に依存し、特にエンドデバイスが送信するデータペイロードサイズと指定された送信間隔が重要です。環境条件もこの評価において役割を果たします。パケット損失のリスクなしにサポートされるデバイスの最大数を確認するには、展開サイトでの実際の実験が最も信頼できるアプローチです。

通常、ゲートウェイは数百台のデバイスからのメッセージを処理できます。[SenseCAP Multi-Platform LoRaWAN Indoor Gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)の場合、約600台の[SenseCAP T1000 LoRaWANトラッカー](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html)（5分のアップロード間隔）の接続が可能です。

これでLoRaWANネットワーキングで利用可能なオプションについてより良く理解できたので、LoRaベースのアプリケーションを展開する際に自信を持って決定を下すことができます。最初のゲートウェイをセットアップしてLoRaWANの旅を始めましょう！
