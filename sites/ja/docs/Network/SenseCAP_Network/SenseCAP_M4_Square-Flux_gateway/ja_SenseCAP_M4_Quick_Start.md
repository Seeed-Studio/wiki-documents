---
description: SenseCAP M4 クイックスタート
title: SenseCAP M4 クイックスタート
keywords:
  - SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_Quick_Start
last_update:
  date: 02/14/2023
  author: Matthew
createdAt: '2023-02-24'
updatedAt: '2025-09-10'
url: https://wiki.seeedstudio.com/ja/Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_Quick_Start/
---

# SenseCAP M4 Square クイックスタート

**SenseCAP M4 Square** は、次世代コンピュテーショナルネットワーク（FluxNode）を最も簡単にデプロイできる方法を提供します。Linux コマンドは不要、環境構築も不要で、わずか 4 ステップでデプロイが完了します。

## 事前準備

- CUMULUS FluxNode をデプロイするのに十分なアップロード速度のネットワーク **（最低 25Mbps アップロード）**
- 新しく作成された CUMULUS FluxNode

## 必要なもの

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start.png" alt="quick-start" width={600} height="auto" /></div>

## Flux CUMULUS ノードをステーキングする

このチュートリアルでは Binance を例として説明します

### ステップ1 取引所にアクセスして Flux を購入する

1. [Binance App](https://www.binance.com/zh-CN/download) をダウンロードし、アカウントを登録します

2. Flux は法定通貨で直接購入することはできません。まず USDT を購入し、その後 USDT を Flux にコンバートしてください

3. 「Trade」ページで「Spot」を選択し、マーケットで FLUX/USDT を選択します

4. USDT の数量を入力し、変換される Flux が 1000 を超えていることを確認します

5. 「Buy」ボタンをクリックします。これで Flux の購入が完了しました

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2023/01/Pasted-into-Stake-Flux-CUMULUS-Node.jpg" alt="stake-flux" width={600} height="auto" /></div>

### ステップ2 Zelcore App をダウンロードしてアカウントを登録する

1. [Zelcore App](https://zelcore.io/) をダウンロードし、Zelcore アカウントにログインします

2. 「Portfolio」ページで「Add Assets」ボタンをクリックし、FLUX BSC アセット（Payments ポートフォリオ）を追加します

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2023/01/Pasted-into-Stake-Flux-CUMULUS-Node-1.png" alt="zelcore" width={600} height="auto" /></div>

### ステップ3 Binance から Zelcore ウォレットへ Flux を出金する

1. Binance App を開き、「Wallet」ページにアクセスします

2. Flux を開き、「Withdraw」をクリックして「Send via Crypto Network」を選択します

<div style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_342796_dUNV1mJGFQqnbdUX_1672995944?w=1200&h=1200" alt="binance" width={600} height="auto" /></div>

3. 出金情報を入力して送金します

- Address: Zelcore App を開き、FLUX BSC の受取アドレスをコピーして Binance に貼り付けます

<div style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_846590_gzvPZu5rXihuT8F5_1672996316?w=1280&h=1268.796498905908" alt="withdraw" width={600} height="auto" /></div>

- Network: BB Smart Chain（BEP20）を選択
- Amount: 1000 以上の Flux
- Send From: Spot&Funding Wallet

<div style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_462161_Dwa_CwJs_TZZu9PS_1672996442?w=1200&h=1200" alt="send" width={600} height="auto" /></div>

4. 出金情報を確認し、Zelcore へ送金します

### ステップ4 新しい Flux Cumulus ノードを作成する

1. Zelcore App を開き、Flux が FLUX BSC アセット（Payments ポートフォリオ）に送金されていることを確認します

2. 「Apps」ページにアクセスし、「Fusion」を開いて FLUX BSC を Flux（Payments ポートフォリオ）にスワップします。

- Sell Asset: FLUX BSC を選択
- Buy Asset: FLUX を選択

注意: スワップ手数料を支払うのに十分な BNB を保有していることを確認してください

<div style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_153450_KYFKcuB_o6xATDxg_1672996615?w=1200&h=1200" alt="swap" width={600} height="auto" /></div>

3. Payments ポートフォリオから別のポートフォリオへ Flux を送金します。

4. これで SenseCAP M4 Sqaure 上で新しい Flux Cumulus ノードをデプロイできます！

<div style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_337290_CDU9M2a95R8QqPsg_1672997135?w=1280&h=1277.1806167400882" alt="deploy" width={600} height="auto" /></div>

## SenseCAP M4 Square に FluxNode をデプロイする

### ステップ1 電源を入れてインターネットに接続する

1. 付属の 12V/2A 電源アダプタを DC-IN 電源コネクタに接続します。

2. ネットワークケーブルを Ethernet2 に接続します。

3. デバイスは自動的にセルフセットアップを行います。L3 がオレンジ色で点灯していれば、セットアップとインターネットへの接続が正常に完了していることを示します。

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-1.png" alt="power" width={600} height="auto" /></div>

### ステップ2 SenseCAP Hotspot App と Zelcore App をインストールする

1. SenseCAP Hotspot App はデバイスのセットアップと管理用に設計されています。以下の QR コードをスキャンして SenseCAP Hotspot App をインストールしてください。

2. メールアドレスで SenseCAP アカウントを登録するか、既存のアカウントでログインします。

<div style={{textAlign: 'center'}}><a href="https://app.sensecapmx.com/"><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-2.png" alt="app" width={600} height="auto" /></a></div>

3. Zelcore App は Flux によって提供されており、デジタル資産、**FluxNode**、および関連情報を見つけ、管理し、取引し、真に所有するためのアプリです。以下の画像をクリックして Zelcore App をインストールしてください。

<div style={{textAlign: 'center'}}><a href="https://zelcore.io/"><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-3.png" alt="zelcore" width={600} height="auto" /></a></div>

### ステップ3 SenseCAP M4 をセットアップする

1. デバイス左下のピンを押すとエンドキャップが持ち上がるので、そのまま取り外します。

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-4.png" alt="setup1" width={600} height="auto" /></div>

2. B1 ボタンを 5 秒間押し続け、L2 インジケータが青色で点滅するまで待ち、Bluetooth 設定モードをオンにします。

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-5.png" alt="setup2" width={600} height="auto" /></div>

3. SenseCAP Hotspot App で Flux を選択し、「Setup」をクリックします

- Bluetooth でデバイスをスキャン
- デバイスを選択して接続

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start.jpg" alt="setup3" width={600} height="auto" /></div>

4. App がデバイスへの接続に成功したら、「install」ボタンをクリックして、デバイスに flux dApp をインストールします。

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-7.png" alt="setup4" width={600} height="auto" /></div>

### ステップ4 Flux Node をデプロイする

1. Flux dApp のインストールが完了したら、「Open」ボタンをクリックして CUMULUS FluxNode のデプロイを開始します。

**注意: 担保として 1000 Flux を購入し、CUMULUS FluxNode セットアップ用に Zelcore Flux ウォレットへ送金してください。**

**ガイド**

- [FluxNode セットアップガイド](https://medium.com/@mmalik4/flux-light-node-setup-as-easy-as-it-gets-833f17c73dbb)
- [Flux Light Node セットアップ動画チュートリアルガイド（Zelcore のセットアップと Flux の入金チュートリアルは 8:07 ～ 12:30）](https://www.youtube.com/watch?v=RT1uaSrurv4)

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-8.png" alt="deploy1" width={600} height="auto" /></div>

2. Zelcore APP から Identity Key、Collateral TX ID、Output Index、Zel ID、および Kadena Address を入力します。詳細については Zelcore をダウンロードしてください。

> **Identity Key**: Apps をクリック > Apps ページで FluxNodes をクリック > 自分の FluxNode をクリック > 展開メニューで Edit をクリック > Identity Key をクリックしてコピー
>
> **Collateral TX ID**: Apps をクリック > Apps ページで FluxNodes をクリック > 自分の FluxNode をクリック > 展開メニューで Edit をクリック > Collateral TX ID をクリックしてコピー
>
> **Output Index**: Apps をクリック > Apps ページで FluxNodes をクリック > 自分の FluxNode をクリック > 展開メニューで Edit をクリック > Output Index をクリックしてコピー
>
> **Zel ID**: Apps をクリック > Apps ページで Zel ID をクリック > QR コードをクリックして Zel ID をコピー
>
> **Kadena Address**: NIMBUS と STRATUS は Kadena アドレスを入力することで追加の KDA 報酬を得ることができます。CUMULUS をデプロイする場合は入力不要です。Portfolio をクリック > ページで Show Zero Sum をクリック > Kadena をクリック > Details をクリック > Receive アクションをクリック > QR コードをクリックして Kadena アドレスをコピー

3. 「Start Deploy」をクリックすると、SenseCAP M4 が自動的に FluxNode をデプロイします。デプロイ時間はデバイスのネットワーク状況に依存するため、デバイスが良好なネットワークに接続されていることを確認してください。App は SenseCAP M4 から切断してもよく、App でデプロイ進行状況を監視し続けることもできます。

**注意: デバイスのネットワークがパブリック IP を持ち、DownloadSpeed >= 25 Mb/s かつ UploadSpeed >= 25 Mb/s であることを確認してください。そうでない場合、Flux ベンチマークは失敗します。**

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-13.png" alt="deploy2" width={600} height="auto" /></div>

4. Flux チェーンの同期が開始されたら、Zelcore App に移動し、FluxNode にパブリック IP と名前を入力します。その後、「Start」ボタンをクリックして FluxNode を起動します。

FluxNode が正常に稼働し、ベンチマークに合格している場合、FluxNode のステータスが「Started」に変わるまで 1 ブロック、その後「Confirmed」になるまで 1～10 ブロック（2～20 分）かかります。「Confirmed」が最終ステータスです。FluxOS のホームページを更新してノードが Confirmed になっているか確認できます。Status ページに表示されます。

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-14.png" alt="deploy3" width={600} height="auto" /></div>

## 高度な機能

UPnP 設定
------------

UPnP は Universal Plug and Play の略で、本質的にはネットワーク上のデバイスが、受信トラフィック用にルーターにポート開放を要求できるようにする仕組みです。ルーターが対応しており、適切な UPnP 標準に準拠している場合、UPNP はより簡単な解決策となり得ます。

1 つの外部 IP アドレス上で複数の SenseCAP M4 Square をデプロイしたい場合は、**デバイスが接続されているルーターが UPnP をサポートし、それを有効にしていること**を確認してください。

注意: 1 つの外部 IP アドレスでは、**最大 8 台の FluxNode のデプロイをサポート**します。

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-16.png)

- 1 SenseCAP M4 Square が FluxNode をデプロイ済み

- 2 SenseCAP Hotspot App が Bluetooth 経由で M4 に接続

- 3 設定アイコンをクリックし、UPnP Setting をクリック

- 4 UPnP を有効にし、未使用のポートを選択

- 5 確認をクリックして設定を送信します

- 6 これで M4 の UPnP が有効になり、UPnP ステータスは ENABLE になります

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-1.jpg)

Fractus 設定
---------------

Fractus ノードは、Flux ネットワークのストレージを増やすために生まれました。Fractus ノードは、少なくとも 10TB のストレージを提供する Cumulus ティアノードです。Fractus ノードは、ネイティブの Flux ブロック報酬に加えて、さらに 15% の Flux を獲得します。

Fractus ノードを実行するための最小要件：

- 1000 Flux の担保。
- 2 CPU コア。
- 4 CPU スレッド。
- 1 秒あたり 240 CPU イベント。
- 単一パーティション上で 9250 GB のストレージ（RAID 可）。
- 80MB/s のディスク書き込み速度。
- 100Mb/s のダウンロード／アップロード。

![](https://wdcdn.qpic.cn/MTMxMDI3MDEwODc4Njk2MTk_47467_AZXsjpYcOQweNFnJ_1675844077?w=1200&h=654)

- 1 SenseCAP M4 Square に FluxNode がデプロイされている
- 2 10TB ドライブを SenseCAP M4 Square の USB3.1 に接続する
- 3 SenseCAP Hotspot App で Bluetooth 経由で M4 に接続する
- 4 設定アイコンをクリックし、Fractus 設定を選択する
- 5 Fractus をオンにし、「Confirm」をクリックして設定を送信する
- 6 これで M4 Fractus が有効になり、Fractus ステータスは True になります

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/稿定设计导出-20230220-153442.jpg)

ダッシュボードに追加
----------------

SenseCAP M4 Square についてさらに詳しい情報を得るには、SenseCAP ダッシュボードに追加してください。

- 直接追加：FluxNode ページで + アイコンをクリックし、カスタマイズした名前と SN（デバイスラベルに記載）を入力して、デバイスをダッシュボードに追加します

- Bluetooth 経由で追加：M4 に FluxNode がデプロイされている場合、Bluetooth で SenseCAP Hotspot App と M4 を接続し、その後ダッシュボードに追加します。

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-15.png)

ブロックの復元
-------------

Bluetooth で SenseCAP Hotspot App と M4 を接続し、その後 Flux アプリを開いて「Restore Block」ボタンをクリックします。M4 は自動的にブロックを復元し、他の手順は不要です。復元時間はデバイスのネットワークに依存するため、デバイスが良好なネットワーク環境にあることを確認してください。

削除
------

**慎重に操作してください！** SenseCAP M4 上にデプロイされている CUMULUS FluxNode を削除します。Bluetooth で SenseCAP Hotspot App と M4 を接続し、その後 Flux アプリを開いて「Delete」ボタンをクリックし、FluxNode を削除します。

再デプロイ
--------

**慎重に操作してください！** 再デプロイを行うと、まずデプロイ済みの FluxNode が自動的に削除されます。Bluetooth で SenseCAP Hotspot App と M4 を接続し、その後 Flux アプリを開いて「Redeploy」ボタンをクリックし、新しい FluxNode 情報を入力して再デプロイします。

**分散型アプリ対応リスト**
====================================

- Flux Cumulus ノード

- Flux Cumulus Fractus（TBD）

**Flux Cumulus ノード ネットワーク構成**
===========================================

Flux ノードを正しく動作させるために、ネットワーク設定を適切に行ってください。以下では、単一ノードおよびマルチノードのネットワーク要件について説明します。

**要件**

- グローバル IP アドレス。単一のグローバル IP アドレスでサポートされる Flux ノードの最大数は 8 です。8 台を超えるデバイスがある場合は、追加のグローバル IP アドレスが必要になる場合があります

- 安定した有線ネットワーク環境、帯域幅 25 Mbps 以上

- ルーターが UPNP とポートフォワーディング機能をサポートしており、ポートをデバイスに転送できること。

**単一ノードのセットアップ**

[flux 公式ドキュメントを参照](https://support.runonflux.io/support/solutions/articles/151000021293-flux-node-network-setup)

**マルチノードのセットアップ**

SenseCAP M4 Square は複数の FluxNode をサポートしていません
