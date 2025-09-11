---
description: どのLoRaWANネットワークを選択すべきか
title: どのLoRaWANネットワークを選択すべきか
keywords:
- LoRaWAN
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/select_lorawan_network
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

急速に拡大するIoT（モノのインターネット）の世界では、LoRaWANネットワークが人気を集めており、さまざまなIoTアプリケーションにおいて広範囲で低消費電力の通信能力を提供しています。最近、次のような質問が多数寄せられています：「**特定のプロジェクトにはどのLoRaWANネットワークを選ぶべきですか？**」

この記事では、LoRaWANネットワークの構成要素を紹介し、公的ネットワークと私的ネットワークの違いを探り、情報に基づいた決定をするための参考資料を提供します。

### LoRaWANネットワークとは？

**LoRaWAN**（Long Range Wide Area Network）は、低消費電力で長距離通信を可能にするワイヤレスプロトコルであり、IoTデバイスがサーバーやアプリケーションとデータを交換できるようにします。
スマートシティ、農業、資産追跡、環境モニタリングなど、幅広いアプリケーションにおいてIoTデバイスを展開するためのコスト効率が高く、安全なソリューションを提供します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/lorawan-server.png" alt="pir" width={800} height="auto" /></p>


### LoRaWANネットワークはどのように機能するのか？

典型的なLoRaWANネットワークは、以下の基本要素で構成されています：エンドデバイス、ゲートウェイ、ネットワークサーバー、アプリケーションサーバー。

エンドデバイスは近くのゲートウェイと通信し、ゲートウェイはネットワークサーバーに接続されています。ネットワークサーバーはデータをアプリケーションサーバーに転送します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/lorawan-server2.png" alt="pir" width={800} height="auto" /></p>

### 公的LNSと私的LNSの違い

LoRaWANネットワークは、公的または私的に大別できます。公的LoRaWANネットワークはTTNやHeliumなどのネットワークプロバイダーに依存しますが、私的ネットワークはゲートウェイやサーバーなどのネットワーク要素をユーザーが管理します。公的LNSを選択するか、自分自身で私的ネットワークを構築することができます。

|要素|公的LoRaWANネットワーク|私的LoRaWANネットワーク|
|--|--|--|
|所有権|ネットワークプロバイダーによって管理|ユーザーの管理下|
|カバレッジ|特定の地域で利用可能|関心のあるエリアを自由にカバー|
|セキュリティ|共有インフラ|強化された管理とセキュリティ|
|初期費用|比較的低コスト|立ち上げ時のインフラ費用が高い|
|データ送信費用|エンドデバイスのデータ送信に高額なサブスクリプション料金|サブスクリプション不要|

公的と私的LoRaWANネットワークの選択は、プロジェクトの性質と要件に大きく依存します。以下は簡単な概要です：

**私的LoRaWANネットワークが適しているケース：**
* 安全なエンドツーエンドのデータ整合性が必要な産業オートメーションネットワーク。
* デバイス間の超安全な通信が必要な医療アプリケーション。
* 機密情報を含むスマートビルディングのセキュリティシステム。

**公的LoRaWANネットワークが適しているケース：**
* 作物モニタリングなどの農業シナリオ。
* 交通モニタリング、スマート照明、スマート駐車システムなどのスマートシティアプリケーション。

### 公的LoRaWANネットワークを選択した場合、何をすべきか？

公的LoRaWANネットワークを検討している場合、TTN、Helium、Loriot、Chirp Stackなど、選択肢となるグローバルプロバイダーがいくつかあります。最終的な決定をするために、以下の要素を考慮することができます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/lorawan-map.png" alt="pir" width={800} height="auto" /></p>


#### 自分の地域に公的LoRaWANネットワークがあるか？

SemtechのLoRa Ecosystem [Network Providers](https://www.semtech.com/lora/ecosystem/networks)ページを訪問するか、LoRa Allianceの[Global Coverage Map](https://lora-alliance.org/#tabs-1)を参照して、自分の地域に公的LoRaWANネットワークがあるかを確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/lorawan-map2.png" alt="pir" width={800} height="auto" /></p>

最適なプロバイダーと開発エリアを選択するために、フィールドテストを実施することをお勧めします。[Wio Terminal LoRaWAN Field Tester](https://www.seeedstudio.com/WioField-Tester-Kit-p-5282.html)は、特定の位置で接続可能なゲートウェイの数を特に把握するのに役立ち、ネットワークマッパーを充実させて相互に情報を共有し、実際のネットワークカバレッジを知ることができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/server-helium.png" alt="pir" width={700} height="auto" /></p>


### 私的LoRaWANネットワークを選択した場合、何をすべきか？

私的LoRaWANネットワークを構築することは、工場やキャンパスのような定期的なエリア展開に特に有効な選択肢となります。典型的な私的LoRaWANネットワークは、LoRaWANデバイス、ゲートウェイ、サーバーという3つの主要コンポーネントを含みます。以下の点を考慮してください：

#### どのゲートウェイを選ぶべきか？

独自のLoRaWANネットワークを構築するには、まず適切なゲートウェイを選択することから始めます。ゲートウェイはエンドデバイスとネットワークサーバーを接続する重要な役割を果たします。ゲートウェイには多くの種類があり、選択する際にはコスト、機能、展開オプションなどの要素を考慮してください。簡単で迅速なセットアップを求める場合は、[SenseCAP Multi-Platform LoRaWAN Indoor Gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)をチェックしてください。Wi-Fiルーターを設定するのと同じくらい簡単で、内蔵のChirpStack LNSが付属しています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/server-gateway.png" alt="pir" width={800} height="auto" /></p>


#### エンドデバイスの展開を開始する


ゲートウェイのセットアップが完了したら、次は最初のデバイスを展開する時です！ぜひ [SenseCAP T1000 LoRaWAN Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) を試してみてください。これは信頼性の高い追跡ソリューションに最適です。

エンドデバイスを展開する際、ゲートウェイに接続できるデバイスの数について疑問に思うかもしれません。その答えはいくつかの変数に依存します。特に、エンドデバイスが送信するデータペイロードのサイズや指定された送信間隔が重要です。また、環境条件もこの評価に影響を与えます。パケットロスのリスクを避けながらサポート可能なデバイスの最大数を確認するには、展開場所での実際の実験が最も信頼性の高い方法です。

通常、ゲートウェイは数百台のデバイスからのメッセージを処理できます。[SenseCAP Multi-Platform LoRaWAN Indoor Gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html) の場合、約600台の [SenseCAP T1000 LoRaWAN Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html)（5分間隔でアップロード）を接続することが可能です。

これで LoRaWAN ネットワーキングの選択肢について十分な情報を得たので、LoRaベースのアプリケーションを展開する際に自信を持って決定を下すことができます。さあ、最初のゲートウェイをセットアップして LoRaWAN の旅を始めましょう！