---
description: SenseCAP T1000 TrackerをAkenzaに接続する
title: Akenza統合（TTS経由）
keywords:
- Tracker
- Akenza
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_T1000_Tracker_Akenza
last_update:
  date: 8/25/2023
  author: Jessie
---

[Akenza](https://akenza.io/)は、価値のある優れたIoT製品とサービスの構築を可能にするIoTアプリケーション実現プラットフォームです。IoTデバイスの接続、制御、管理をすべて一箇所で行えます。

このチュートリアルでは、SeeedのSenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html)をAkenza上でTTNと統合する方法を学習します。
​
<div align="right">
Akenzaチーム執筆
</div>

[ソース](https://docs.akenza.io/akenza.io/tutorials/add-devices/how-to-integrate-the-seeed-sensecap-t1000-tracker-on-akenza)

<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FBvnwVdfDW4JXHXEbrjs3%2FT1000%20tracker.png?alt=media&token=dedacd81-e952-4e83-90bf-f004e99adc08" alt="pir" width={400} height="auto" /></p>


:::info
**アプリケーション**:
様々な用途での屋内/屋外資産追跡: <br/>
国際的な資産追跡<br/>
機器監視<br/>
共有機器の追跡など。<br/>
SOSボタンと内蔵ブザーによる個人安全用途（老人ホーム、捜索救助）。<br/>

**製品特徴**: <br/>
屋内外両方対応の3つの測位技術：GNSS、Bluetooth、Wi-Fi<br/>
温度、光、モーションセンサー<br/>
SOSボタン＆ブザー<br/>
わずか6.5mmの厚さのカードサイズデバイス
:::


### はじめに

このチュートリアルでは、接続プロバイダーThe Things Network（TTN）を使用してakenza上でSeeedのT1000トラッカーを登録する方法を学習します。

:::info
ここでは既存のTTNアカウントをお持ちでないことを前提とし、akenzaの[Connectivity-as-a-Service](https://docs.akenza.io/akenza.io/get-started/your-integration)を使用してデバイスを接続します。

すでにTTNのアカウントをお持ちの場合は、もちろん[統合](https://docs.akenza.io/akenza.io/get-started/your-integration#2.-integrations)パネルを使用して直接同期できます。
:::

プラットフォームに新しいデバイスを登録するには、akenzaでのデータ処理チェーンを定義する`Data Flow`を作成する必要があります。

### Data Flowの作成

#### Device Connector

**Data Flow**を作成するには、`Data Flow`に移動して`Create Data Flow`を選択します。

Device Connectorとして`LoRa`を選択します。TTNアカウントを統合している場合は、ここにリストされます。独自のアカウントをお持ちでない場合は、akenzaの[Connectivity-as-a-Service](https://docs.akenza.io/akenza.io/get-started/your-integration)を利用できます。

The Things Networkを選択します。
<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FBNwN5xlVesDpVxHQ3H4d%2FT1000-DF.png?alt=media&token=540e39fd-bea3-46dd-84a7-6af601e772f7" alt="pir" width={800} height="auto" /></p>

#### Device Type

**Device Type**は、デバイスからのデータをデコードするために使用するペイロードデコーダーを指定します。

検索フィールドを使用して**T1000**デバイスを見つけ、それに応じてDevice Typeを選択します。Output connectorsに進みます。

<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FUuglz0pXA3SEsX59cdxJ%2FT1000-DF-2.png?alt=media&token=16c0dd80-f402-4477-857b-b0de9601b27b" alt="pir" width={800} height="auto" /></p>

#### Output Connector

Data Flow用に1つまたは複数のOutput connectorsを選択します。**Output Connectors**は、デバイスからのデータをどこに保存および/または処理するかを定義します。

**Akenza DB**を選択して進みます。

Akenza DBへの接続により、このデータフローを通過するすべてのデータがAkenzaデータベースに保存され、アクセス可能になることを保証します。**Data Flow**を保存して名前を付けます。

<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FSOGhuXN5SrmIMjchCCJP%2FT1000-DF-3.png?alt=media&token=7e43e9ab-1a9a-4609-b1c7-36ceeaf71635" alt="pir" width={800} height="auto" /></p>


### SeeedのT1000デバイスの接続

新しいデバイスを作成するには、Assets Inventoryのメニュー内で`Create Device`を選択します。デバイス名と、オプションで説明、[タグ](https://docs.akenza.io/akenza.io/get-started/create-new-device/how-to-use-tags-on-akenza)または[カスタムフィールド](https://docs.akenza.io/akenza.io/get-started/create-new-device/how-to-use-custom-fields-on-akenza)を追加します。

<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FI6gtMgKsAlazzNMO2Umz%2FT1000-CD-1.png?alt=media&token=ef5c5b56-1409-4b89-8893-66ca3bdb5822" alt="pir" width={800} height="auto" /></p>

次のステップで、以前に作成した**Data Flow**を選択します。
​<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FVPZ35a4DKdujIqlP84gR%2FT1000-CD-2.png?alt=media&token=73ced82f-ea7b-436c-a42d-36dc44ec3f12" alt="pir" width={800} height="auto" /></p>

T1000トラッカーに関するすべての**Connectivity Parameters**を入力します。これらはデバイスの製造元から提供されます。

Create Deviceをクリックしてプロセスを完了します。

T1000トラッカーデバイスが**Asset Inventory Overview**に表示されます。

デバイスの受信データを確認するには、リストからデバイスを選択し、**Data Overview**でステータスを確認します。

​<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2Fllgd7HtP8VBZbAgeNU4M%2FT1000-Asset.png?alt=media&token=2665b736-aed6-4533-b7bb-aaa5542f5d67" alt="pir" width={800} height="auto" /></p>

**おめでとうございます**。TTN LoRaWANネットワーク経由でSeeed SenseCAP T1000-Aトラッカーをakenzaに正常に接続しました！

### Bluetooth経由でトラッカーを設定する方法

SeeedのSenseCAP Mateアプリを使用すると、トラッカーの異なる動作モードやその他の設定を構成できます。<br/> 
iOSの場合は、App Storeで「SenseCAP Mate」を検索してダウンロードしてください。<br/>
Androidの場合は、Google Storeで「SenseCAP Mate」を検索してダウンロードしてください。<br/>
異なる動作モードと設定の詳細な説明については、デバイスの[ユーザーガイド](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker/SenseCAP_Tracker_T1000-AB_User_Guide.pdf)を参照してください。

### LoRaダウンリンク経由でトラッカーを設定する方法

モバイルアプリの代替として、[ダウンリンク](https://docs.akenza.io/akenza.io/get-started/connectors/downlink)パケットを使用してT1000トラッカーを直接設定できます。<br/>
そのためには、トラッカーのデバイス詳細ページに移動し、Downlinkタブを選択してください。<br/>
正しいHEXペイロードとポート番号を入力し、Send messageをクリックして続行してください。<br/>
異なる動作モードと設定の詳細な説明については、デバイスの[ユーザーガイド](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker/SenseCAP_Tracker_T1000-AB_User_Guide.pdf)を参照してください。
​
​<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2F5KtoZmSstaZQ7vMLevdo%2FT1000-downlink.png?alt=media&token=e8d29de7-9b7a-4c57-8376-443ceb8c9ee1" alt="pir" width={800} height="auto" /></p>

### 🚀ジオフェンスとマップビューでさらに活用する

デバイスから位置データを受信できるようになったので、akenzaの他のアセットトラッキング機能、すなわちジオフェンスロジックブロックとダッシュボードビルダーを活用できます。

#### ジオフェンスロジックブロック

ノーコードジオフェンスブロックを使用して、デバイスの位置に基づいてアクションと通知を作成します。

データ入力（この場合はT1000トラッカー）を指定し、ジオフェンスブロックを追加し、カスタムフェンスを作成し、最後にデバイスがフェンスに入るか出るときにトリガーされる結果アクションを定義するだけです。

​<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FhlQoCpjhK7JyUYmUTGSg%2FT1000-geofense.png?alt=media&token=835f6423-4474-44d6-8712-cd6c500e6f7f" alt="pir" width={800} height="auto" /></p>

#### ダッシュボードビルダーのマップビュー

ダッシュボードビルダーのマップコンポーネントを使用して、T1000トラッカーの位置をリアルタイムで表示します。

ダッシュボードビルダーに移動して新しいダッシュボードを作成するだけです。または、出発点としてAsset Trackingテンプレートを使用することもできます。Mapコンポーネントを追加し、データのソースとしてT1000トラッカーを選択します。センサーの緯度と経度の読み取り値を選択し、必要に応じて追加のマーカーデータポイント（例：バッテリー充電量）を追加します。

これで、マップ上でアセットをリアルタイムで追跡でき、デバイスアイコンの横にあるTrackをクリックしてパスを表示することもできます。

​<p style={{textAlign: 'center'}}><img src="https://3656276971-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MMKXTFIN5ZlLOjBlfC4%2Fuploads%2FaCi1AyERgs0q0L1Gidjq%2FT1000-map.png?alt=media&token=5d461816-1e73-48ab-bbd8-3edb8bc139f8" alt="pir" width={800} height="auto" /></p>