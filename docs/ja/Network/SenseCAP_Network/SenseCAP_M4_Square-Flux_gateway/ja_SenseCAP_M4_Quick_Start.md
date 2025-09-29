---
description: SenseCAP M4 クイックスタート
title: SenseCAP M4 クイックスタート
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_Quick_Start
last_update:
  date: 02/14/2023
  author: Matthew
---

# SenseCAP M4 Square クイックスタート

**SenseCAP M4 Square** は、次世代計算ネットワーク（FluxNode）をデプロイする最も簡単な方法を提供します。Linuxコマンドは不要、環境構築も不要で、わずか4ステップでデプロイメントが完了します。

## 前提条件

- CUMULUS FluxNodeをデプロイするのに十分なネットワークアップロード速度 **（最低25Mbpsアップロード）**
- 新しいCUMULUS FluxNodesが作成済み

## 必要なもの

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start.png" alt="quick-start" width={600} height="auto" /></div>

## Flux CUMULUSノードのステーキング

このチュートリアルではBinanceを例に説明します

### ステップ1 取引所でFluxを購入する

1. [Binance App](https://www.binance.com/zh-CN/download)をダウンロードしてアカウントを登録します

2. Fluxは法定通貨で直接購入できません。まずUSDTを購入し、その後USDTをFluxに変換してください

3. トレードページで、現物を選択し、マーケットでFLUX/USDTを選択します

4. USDTの数量を入力し、変換されるFluxが1000を超えることを確認します

5. 購入ボタンをクリックします。これでfluxの購入が完了しました

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2023/01/Pasted-into-Stake-Flux-CUMULUS-Node.jpg" alt="stake-flux" width={600} height="auto" /></div>

### ステップ2 Zelcore Appをダウンロードしてアカウントを登録する

1. [Zelcore App](https://zelcore.io/)をダウンロードしてZelcoreアカウントにログインします

2. ポートフォリオページで、Add AssetsボタンをクリックしてFLUX BSCアセット（Paymentsポートフォリオ）を追加します

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2023/01/Pasted-into-Stake-Flux-CUMULUS-Node-1.png" alt="zelcore" width={600} height="auto" /></div>

### ステップ3 BinanceからZelcoreウォレットにFluxを出金する

1. Binance Appを開いてウォレットページにアクセスします

2. Fluxにアクセスし、Withdrawをクリックして「Send via Crypto Network」を選択します

<div style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_342796_dUNV1mJGFQqnbdUX_1672995944?w=1200&h=1200" alt="binance" width={600} height="auto" /></div>

3. 出金情報を入力して送信します

- アドレス：Zelcore Appを開き、FLUX BSC受信アドレスをコピーしてBinanceに貼り付けます

<div style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_846590_gzvPZu5rXihuT8F5_1672996316?w=1280&h=1268.796498905908" alt="withdraw" width={600} height="auto" /></div>

- ネットワーク：BB Smart Chain (BEP20)を選択します
- 数量：1000+ flux
- 送信元：Spot&Funding Wallet

<div style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_462161_Dwa_CwJs_TZZu9PS_1672996442?w=1200&h=1200" alt="send" width={600} height="auto" /></div>

4. 出金情報を確認してZelcoreに送信します

### ステップ4 新しいFlux Cumulusノードを作成する

1. Zelcore Appを開き、FluxがFLUX BSCアセット（Paymentsポートフォリオ）に送信されたことを確認します

2. Appsページにアクセスし、FusionでFLUX BSCをFlux（Paymentsポートフォリオ）にスワップします。

- 売却アセット：FLUX BSCを選択
- 購入アセット：FLUXを選択

注意：スワップ手数料を支払うのに十分なBNBがあることを確認してください

<div style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_153450_KYFKcuB_o6xATDxg_1672996615?w=1200&h=1200" alt="swap" width={600} height="auto" /></div>

3. PaymentsポートフォリオからMiningのFluxアセットなど、他のポートフォリオにFluxを送信します

4. これでSenseCAP M4 Sqaureで新しいFlux Cumulusノードをデプロイできます！

<div style={{textAlign: 'center'}}><img src="https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_337290_CDU9M2a95R8QqPsg_1672997135?w=1280&h=1277.1806167400882" alt="deploy" width={600} height="auto" /></div>

## SenseCAP M4 Square に FluxNode をデプロイする

### ステップ1 電源投入とインターネット接続

1. 付属の12V/2A電源アダプターをDC-IN電源コネクターに接続します。

2. ネットワークケーブルをEthernet2に接続します。

3. デバイスは自動的にセットアップを行います。L3が安定したオレンジ色に点灯すると、セットアップとインターネット接続が成功したことを示します。

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-1.png" alt="power" width={600} height="auto" /></div>

### ステップ2 SenseCAP Hotspot App と Zelcore App のインストール

1. SenseCAP Hotspot App はデバイスのセットアップと管理用に設計されています。以下のQRコードをスキャンしてSenseCAP Hotspot App をインストールしてください。

2. メールアドレスでSenseCAPアカウントにサインアップするか、直接ログインしてください。

<div style={{textAlign: 'center'}}><a href="https://app.sensecapmx.com/"><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-2.png" alt="app" width={600} height="auto" /></a></div>

3. Zelcore App は Flux によってリリースされ、デジタル資産、**FluxNode**、情報の検索、管理、取引、真の所有を可能にします。以下の画像をクリックしてZelcore App をインストールしてください。

<div style={{textAlign: 'center'}}><a href="https://zelcore.io/"><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-3.png" alt="zelcore" width={600} height="auto" /></a></div>

### ステップ3 SenseCAP M4 のセットアップ

1. デバイス左下のシンブルを押すと、エンドキャップが持ち上がるので取り外します。

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-4.png" alt="setup1" width={600} height="auto" /></div>

2. B1ボタンを5秒間押し、L2インジケーターが青色に点滅するまで待ち、Bluetooth設定モードをオンにします。

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-5.png" alt="setup2" width={600} height="auto" /></div>

3. SenseCAP Hotspot App でFluxを選択し、Setupをクリックします

- Bluetooth経由でデバイスをスキャン
- 接続するデバイスを選択

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start.jpg" alt="setup3" width={600} height="auto" /></div>

4. アプリがデバイスに正常に接続されました。installボタンをクリックしてデバイスにflux dAppをインストールします。

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-7.png" alt="setup4" width={600} height="auto" /></div>

### ステップ4 Flux Node のデプロイ

1. Flux dApp のインストールが完了しました。Openボタンをクリックして、CUMULUS FluxNodeのデプロイを開始します。

**注意：CUMULUS FluxNodeのセットアップには、担保として1000 Fluxを購入し、Zelcore Fluxウォレットに転送してください。**

**ガイド**

- [FluxNode SetUp Guide](https://medium.com/@mmalik4/flux-light-node-setup-as-easy-as-it-gets-833f17c73dbb)
- [Flux Light Node Setup Video Tutorial Guide (Setup Zelcore& Deposit Flux tutorial is from 8:07 to 12:30)](https://www.youtube.com/watch?v=RT1uaSrurv4)

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-8.png" alt="deploy1" width={600} height="auto" /></div>

2. Zelcore APP からIdentity Key、Collateral TX ID、Output Index、Zel ID、Kadena Addressを入力してください。詳細についてはZelcoreをダウンロードしてください。

> **Identity Key**: Apps をクリック > Apps ページで FluxNodes をクリック > あなたの FluxNode をクリック > 展開メニューで edit をクリック > Identity Key をクリックしてコピー
>
> **Collateral TX ID**: Apps をクリック > Apps ページで FluxNodes をクリック > あなたの FluxNode をクリック > 展開メニューで Edit をクリック > Collateral TX ID をクリックしてコピー
>
> **Output Index**: Apps をクリック > Apps ページで FluxNodes をクリック > あなたの FluxNode をクリック > 展開メニューで Edit をクリック > Output Index をクリックしてコピー
>
> **Zel ID**: Apps をクリック > Apps ページで Zel ID をクリック > QR コードをクリックして Zel ID をコピー
>
> **Kadena Address**: NIMBUS と STRATUS は追加の KDA 報酬を得るために Kadena アドレスを入力できます。CUMULUS をデプロイする場合は入力不要です。Portfolio をクリック > ページで Show Zero Sum をクリック > Kadena をクリック > Details をクリック > Receive アクションをクリック > QR コードをクリックして Kadena アドレスをコピー

3. Start Deployをクリックすると、SenseCAP M4が自動的にFluxNodeをデプロイします。デプロイ時間はデバイスのネットワークに依存するため、デバイスが良好なネットワークを持っていることを確認してください。アプリはSenseCAP M4から切断するか、アプリでデプロイの進行状況を監視し続けることができます。

**注意：デバイスのネットワークがパブリックIPを持ち、ダウンロード速度 >= 25 Mb/s、アップロード速度 >= 25 Mb/s であることを確認してください。そうでなければ、Fluxベンチマークが失敗します。**

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-13.png" alt="deploy2" width={600} height="auto" /></div>

4. Fluxチェーンの同期が開始されたら、Zelcore Appに移動し、FluxNodeにパブリックIPと名前を入力してください。その後、Startボタンをクリックして FluxNode を開始します。

FluxNodeが正常に動作し、ベンチマークに合格している場合、FluxNodeのステータスがStartedに変更されるまで1ブロックのマイニングが必要で、Confirmedになるまで1-10ブロック（2〜20分）かかります。Confirmedが最終ステータスです。ノードがConfirmedになったかどうかは、ホームページを更新してFluxOSで確認できます。Statusページに表示されます。

<div style={{textAlign: 'center'}}><img src="https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-14.png" alt="deploy3" width={600} height="auto" /></div>

## 高度な機能

UPnP設定
-------

UPnPはユニバーサルプラグアンドプレイの略で、基本的にネットワーク上のデバイスがルーターに対して受信トラフィック用のポートを開くよう要求することを可能にします。UPnPは、ルーターがサポートされており、適切なUPnP標準に準拠している場合、より簡単なソリューションとなります。

単一の外部IPアドレスに複数のSenseCAP M4 Squareをデプロイしたい場合は、**デバイスが接続されているルーターがUPnPをサポートし、それを有効にしていることを確認してください。**

注意：単一の外部IPアドレスは**最大8つのFluxNodeのデプロイをサポート**します。

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-16.png)

- 1 SenseCAP M4 SquareにFluxNodeがデプロイされています

- 2 SenseCAP Hotspot AppでBluetoothを介してM4に接続

- 3 設定アイコンをクリックしてUPnP設定

- 4 UPnPを有効にし、使用されていないポートを選択

- 5 確認をクリックして設定を送信

- 6 これでM4のUPnPが有効になり、UPnPステータスがENABLEになります

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-1.jpg)

Fractus設定
----------

FractusノードはFluxネットワークストレージを増加させるために生まれました。Fractusノードは少なくとも10TBのストレージを提供するCumulusティアノードです。Fractusノードは、ネイティブFluxブロック報酬に加えて追加で15%のFluxを獲得します。

Fractusノードを実行するための最小要件：

- 1000 Fluxの担保。
- 2 CPUコア。
- 4 CPUスレッド。
- 240 CPUイベント/秒。
- 単一パーティションに9250 GBのストレージ（Raid許可）。
- 80MB/sのディスク書き込み速度。
- 100Mb/sのダウンロード/アップロード。

![](https://wdcdn.qpic.cn/MTMxMDI3MDEwODc4Njk2MTk_47467_AZXsjpYcOQweNFnJ_1675844077?w=1200&h=654)

- 1 SenseCAP M4 SquareにFluxNodeがデプロイされています
- 2 10TBドライブをSenseCAP M4 SquareのUSB3.1に接続
- 3 SenseCAP Hotspot AppでBluetoothを介してM4に接続
- 4 設定アイコンをクリックしてFractus設定
- 5 Fractusをオンにし、確認をクリックして設定を送信
- 6 これでM4のFractusが開き、FractusステータスがTrueになります

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/稿定设计导出-20230220-153442.jpg)

ダッシュボードに追加
-----------

SenseCAP M4 Squareの詳細情報については、SenseCAPダッシュボードに追加してください。

- 直接追加：FluxNodeページで、+アイコンをクリックし、カスタマイズした名前とSN（デバイスラベル内）を入力してデバイスをダッシュボードに追加

- Bluetooth経由で追加：M4にFluxNodeがデプロイされている場合、SenseCAP Hotspot AppでBluetoothを介してM4に接続し、ダッシュボードに追加します。

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-15.png)

ブロック復元
-------

SenseCAP Hotspot AppでBluetoothを介してM4に接続し、Fluxアプリを開いてRestore Blockボタンをクリックします。M4は自動的にブロックを復元し、他の手順は必要ありません。復元時間はデバイスのネットワークに依存するため、デバイスが良好なネットワークを持っていることを確認してください。

削除
--

**慎重に操作してください！** SenseCAP M4にデプロイされたCUMULUS FluxNodeを削除します。SenseCAP Hotspot AppでBluetoothを介してM4に接続し、Fluxアプリを開いてDeleteボタンをクリックしてFluxNodeを削除します。

再デプロイ
-----

**慎重に操作してください！** 再デプロイは最初にデプロイされたFluxNodeを自動的に削除します。SenseCAP Hotspot AppでBluetoothを介してM4に接続し、Fluxアプリを開いてRedeployボタンをクリックし、新しいFluxNode情報を入力して再デプロイします。

**分散アプリサポートリスト**
================

- Flux Cumulus Node

- Flux Cumulus Fractus (TBD)

**Flux Cumulus Nodeネットワーク設定**
=============================

Flux Nodeの適切な動作を確保するため、ネットワークを適切に設定してください。以下では、単一ノードと複数ノードのネットワーク要件について説明します。

**要件**

- 外部IPアドレス。単一の外部IPアドレスでサポートされるFluxノードの最大数は8です。8台を超えるデバイスがある場合は、より多くの外部IPアドレスが必要になる場合があります

- 安定した有線ネットワーク環境、≥25 Mbps帯域幅

- UPnPとポートフォワーディング機能をサポートするルーター。デバイスにポートを転送します。

**単一ノードの設定**

[Flux公式ドキュメントを参照](https://support.runonflux.io/support/solutions/articles/151000021293-flux-node-network-setup)

**マルチノードの設定**

SenseCAP M4 Squareは複数のFluxNodeをサポートしていません
