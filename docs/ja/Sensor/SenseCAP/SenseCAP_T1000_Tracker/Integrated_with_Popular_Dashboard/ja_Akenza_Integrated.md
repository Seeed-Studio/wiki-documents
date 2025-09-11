---
description: SenseCAP T1000 トラッカーを Akenza に接続する
title: Akenza 統合 (TTS 経由)
keywords:
- トラッカー
- Akenza
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_T1000_Tracker_Akenza
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

[Akenza](https://akenza.io/) は IoT アプリケーションの有効化プラットフォームであり、価値ある IoT 製品やサービスを構築することを可能にします。Akenza は IoT デバイスを接続し、制御し、管理する機能を一つの場所で提供します。

このチュートリアルでは、Seeed の [SenseCAP T1000 トラッカー](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) を Akenza 上で TTN を使用して統合する方法を学びます。
​
<div align="right">
Akenza チームによる執筆
</div>

[ソース](https://docs.akenza.io/akenza.io/tutorials/add-devices/how-to-integrate-the-seeed-sensecap-t1000-tracker-on-akenza)

<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FBvnwVdfDW4JXHXEbrjs3%2FT1000%20tracker.png?alt=media&token=dedacd81-e952-4e83-90bf-f004e99adc08" alt="pir" width={400} height="auto" /></p>


:::info
**アプリケーション**:
屋内外の資産追跡におけるさまざまなユースケース: <br/>
国際的な資産追跡<br/>
設備監視<br/>
共有設備の追跡など<br/>
SOS ボタンと内蔵ブザーにより、個人の安全ケース (介護施設、捜索救助) にも対応<br/>

**製品特徴**: <br/>
屋内外で使用可能な 3 つの位置特定技術: GNSS、Bluetooth、Wi-Fi<br/>
温度、光、動作センサー<br/>
SOS ボタン & ブザー<br/>
厚さわずか 6.5mm のカードサイズデバイス
:::


### はじめに

このチュートリアルでは、Seeed の T1000 トラッカーを Akenza 上で The Things Network (TTN) を使用して登録する方法を学びます。

:::info
ここでは、既存の TTN アカウントを持っていないことを前提とし、Akenza の [Connectivity-as-a-Service](https://docs.akenza.io/akenza.io/get-started/your-integration) を使用してデバイスを接続します。

既に TTN アカウントをお持ちの場合は、[統合](https://docs.akenza.io/akenza.io/get-started/your-integration#2.-integrations)パネルを使用して直接同期することができます。
:::

プラットフォームに新しいデバイスを登録するには、Akenza 内でデータ処理チェーンを定義する `Data Flow` を作成する必要があります。

### データフローの作成

#### デバイスコネクタ

**Data Flow** を作成するには、`Data Flow` に移動して `Create Data Flow` を選択します。

デバイスコネクタとして `LoRa` を選択します。TTN アカウントを統合している場合は、ここにリストされます。独自のアカウントを持っていない場合は、Akenza の [Connectivity-as-a-Service](https://docs.akenza.io/akenza.io/get-started/your-integration) を利用することができます。

The Things Network を選択します。
<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FBNwN5xlVesDpVxHQ3H4d%2FT1000-DF.png?alt=media&token=540e39fd-bea3-46dd-84a7-6af601e772f7" alt="pir" width={800} height="auto" /></p>

#### デバイスタイプ

**Device Type** は、デバイスからのデータをデコードするために使用されるペイロードデコーダを指定します。

検索フィールドを使用して **T1000** デバイスを見つけ、適切なデバイスタイプを選択します。その後、出力コネクタに進みます。

<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FUuglz0pXA3SEsX59cdxJ%2FT1000-DF-2.png?alt=media&token=16c0dd80-f402-4477-857b-b0de9601b27b" alt="pir" width={800} height="auto" /></p>

#### 出力コネクタ

データフローの出力コネクタを一つまたは複数選択します。**Output Connectors** は、デバイスからのデータが保存される場所や処理される場所を定義します。

**Akenza DB** を選択して続行します。

Akenza DB への接続により、このデータフローを通過するすべてのデータが Akenza データベースに保存され、アクセス可能になります。**Data Flow** を保存し、名前を付けます。

<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FSOGhuXN5SrmIMjchCCJP%2FT1000-DF-3.png?alt=media&token=7e43e9ab-1a9a-4609-b1c7-36ceeaf71635" alt="pir" width={800} height="auto" /></p>


### Seeed の T1000 デバイスを接続する

新しいデバイスを作成するには、`Assets Inventory` メニュー内で `Create Device` を選択します。デバイス名を追加し、必要に応じて説明、[タグ](https://docs.akenza.io/akenza.io/get-started/create-new-device/how-to-use-tags-on-akenza) または [カスタムフィールド](https://docs.akenza.io/akenza.io/get-started/create-new-device/how-to-use-custom-fields-on-akenza) を追加します。

<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FI6gtMgKsAlazzNMO2Umz%2FT1000-CD-1.png?alt=media&token=ef5c5b56-1409-4b89-8893-66ca3bdb5822" alt="pir" width={800} height="auto" /></p>

次のステップでは、先ほど作成した **Data Flow** を選択します。
​<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FVPZ35a4DKdujIqlP84gR%2FT1000-CD-2.png?alt=media&token=73ced82f-ea7b-436c-a42d-36dc44ec3f12" alt="pir" width={800} height="auto" /></p>

次に、T1000 トラッカーに関するすべての **Connectivity Parameters** を入力します。これらはデバイスの製造元から提供されます。

作成ボタンをクリックしてプロセスを完了します。

作成した T1000 トラッカーは **Asset Inventory Overview** に表示されます。

デバイスの受信データを確認するには、リストからデバイスを選択し、**Data Overview** でステータスを確認してください。

<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2Fllgd7HtP8VBZbAgeNU4M%2FT1000-Asset.png?alt=media&token=2665b736-aed6-4533-b7bb-aaa5542f5d67" alt="pir" width={800} height="auto" /></p>

**おめでとうございます！**  
Seeed SenseCAP T1000-A トラッカーを TTN LoRaWAN ネットワーク経由で akenza に正常に接続しました！

### Bluetooth を使用したトラッカーの設定方法

Seeed の SenseCAP Mate アプリを使用すると、トラッカーのさまざまな動作モードやその他の設定を構成できます。<br/> 
iOS の場合は、App Store で「SenseCAP Mate」を検索してダウンロードしてください。<br/>
Android の場合は、Google Store で「SenseCAP Mate」を検索してダウンロードしてください。<br/>
デバイスのさまざまな動作モードや設定の詳細については、[ユーザーガイド](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker/SenseCAP_Tracker_T1000-AB_User_Guide.pdf) を参照してください。

### LoRa ダウンリンクを使用したトラッカーの設定方法

モバイルアプリの代わりに、[ダウンリンク](https://docs.akenza.io/akenza.io/get-started/connectors/downlink) パケットを使用して T1000 トラッカーを直接設定することもできます。<br/>
そのためには、トラッカーのデバイス詳細ページに移動し、ダウンリンクタブを選択します。<br/>
正しい HEX ペイロードとポート番号を入力し、「Send message」をクリックして送信します。<br/>
デバイスのさまざまな動作モードや設定の詳細については、[ユーザーガイド](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker/SenseCAP_Tracker_T1000-AB_User_Guide.pdf) を参照してください。

<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2F5KtoZmSstaZQ7vMLevdo%2FT1000-downlink.png?alt=media&token=e8d29de7-9b7a-4c57-8376-443ceb8c9ee1" alt="pir" width={800} height="auto" /></p>

### 🚀ジオフェンスとマップビューを活用する

デバイスから位置データを受信できるようになったら、akenza の他の資産追跡機能、つまりジオフェンスロジックブロックとダッシュボードビルダーを活用できます。

#### ジオフェンスロジックブロック

コード不要のジオフェンスブロックを使用して、デバイスの位置に基づいてアクションや通知を作成できます。

データ入力（この場合は T1000 トラッカー）を指定し、ジオフェンスブロックを追加してカスタムフェンスを作成します。最後に、デバイスがフェンスに入るまたは出るときにトリガーされるアクションを定義します。

<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FhlQoCpjhK7JyUYmUTGSg%2FT1000-geofense.png?alt=media&token=835f6423-4474-44d6-8712-cd6c500e6f7f" alt="pir" width={800} height="auto" /></p>

#### ダッシュボード ビルダーのマップビュー

ダッシュボードビルダーのマップコンポーネントを使用して、T1000 トラッカーの位置をリアルタイムで表示します。

ダッシュボード ビルダーに移動して新しいダッシュボードを作成するだけです。または、資産追跡テンプレートを開始点として使用することもできます。マップコンポーネントを追加し、データソースとして T1000 トラッカーを選択します。センサーの緯度と経度の読み取り値を選択し、必要に応じて追加のマーカーデータポイント（例：バッテリー残量）を追加します。

これで、マップ上で資産をリアルタイムで追跡でき、デバイスアイコンの横にある「Track」をクリックすると、その経路を表示することもできます。

<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FaCi1AyERgs0q0L1Gidjq%2FT1000-map.png?alt=media&token=5d461816-1e73-48ab-bbd8-3edb8bc139f8" alt="pir" width={800} height="auto" /></p>