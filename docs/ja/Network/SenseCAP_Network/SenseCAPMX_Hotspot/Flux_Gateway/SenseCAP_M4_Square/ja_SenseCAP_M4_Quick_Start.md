---
description: SenseCAP M4 クイックスタート
title: SenseCAP M4 クイックスタート
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Flux_Gateway/SenseCAP_M4_Square/SenseCAP_M4_Quick_Start
last_update:
  date: 02/14/2023
  author: Matthew
---

**SenseCAP M4 Square クイックスタート**
==================================

**SenseCAP M4 Square** は、次世代計算ネットワーク（FluxNode）をデプロイする最も簡単な方法を提供します。Linuxコマンドは不要、環境構築も不要で、わずか4ステップでデプロイメントが完了します。

**前提条件**

*   CUMULUS FluxNodeをデプロイするのに十分なネットワークアップロード速度 **（最低25Mbpsアップロード）**
    
*   新しいCUMULUS FluxNodesが作成済み
    

必要なもの
=============

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start.png)

Flux CUMULUS Nodeのステーキング
=======================

このチュートリアルではBinanceを例に説明します

ステップ1 取引所でFluxを購入する
------------------------------------

1 [Binanceアプリ](https://www.binance.com/zh-CN/download)をダウンロードしてアカウントを登録する

2 Fluxは法定通貨で直接購入できません。まずUSDTを購入し、その後USDTをFluxに変換してください

4 取引ページで、現物を選択し、マーケットでFLUX/USDTを選択する

5 USDTの数量を入力し、変換されるFluxが1000以上になることを確認する

6 購入ボタンをクリックすると、fluxの購入が完了します

![](https://www.sensecapmx.com/wp-content/uploads/2023/01/Pasted-into-Stake-Flux-CUMULUS-Node.jpg)

ステップ2 Zelcoreアプリをダウンロードしてアカウントを登録する
--------------------------------------------------------

1 [Zelcoreアプリ](https://zelcore.io/)をダウンロードしてZelcoreアカウントにログインする

2 ポートフォリオページで、アセットを追加ボタンをクリックしてFLUX BSCアセット（Paymentsポートフォリオ）を追加する

![](https://www.sensecapmx.com/wp-content/uploads/2023/01/Pasted-into-Stake-Flux-CUMULUS-Node-1.png)

ステップ3 BinanceからZelcoreウォレットにFluxを出金する
--------------------------------------------------

1 Binanceアプリを開いてウォレットページにアクセスする

2 Fluxにアクセスし、出金をクリックして暗号ネットワーク経由で送信を選択する

![](https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_342796_dUNV1mJGFQqnbdUX_1672995944?w=1200&h=1200)

3 出金情報を入力して送信する

*   アドレス：Zelcoreアプリを開き、FLUX BSC受信アドレスをコピーしてBinanceに貼り付ける
    

![](https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_846590_gzvPZu5rXihuT8F5_1672996316?w=1280&h=1268.796498905908)

*   ネットワーク：BB Smart Chain (BEP20)を選択
    
*   金額：1000+ flux
    
*   送信元：現物&資金調達ウォレット
    

![](https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_462161_Dwa_CwJs_TZZu9PS_1672996442?w=1200&h=1200)

4 出金情報を確認してZelcoreに送信する

ステップ4 新しいFlux Cumulusノードを作成する
------------------------------------

1 Zelcoreアプリを開き、FluxがFLUX BSCアセット（Paymentsポートフォリオ）に送信されたことを確認する

2 アプリページにアクセスし、FusionでFLUX BSCをFlux（Paymentsポートフォリオ）にスワップする

*   売却アセット：FLUX BSCを選択
    
*   購入アセット：FLUXを選択
    

注意：スワップ手数料を支払うのに十分なBNBがあることを確認してください

![](https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_153450_KYFKcuB_o6xATDxg_1672996615?w=1200&h=1200)

3 PaymentsポートフォリオからMiningのFluxアセットなど他のポートフォリオにFluxを送信する

4 これでSenseCAP M4 Sqaureで新しいFlux Cumulusノードをデプロイできます！

![](https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_337290_CDU9M2a95R8QqPsg_1672997135?w=1280&h=1277.1806167400882)

SenseCAP M4 SquareでFluxNodeをデプロイする
=====================================

**ステップ1 電源を入れてインターネットに接続する**
------------------------------------------

1 付属の12V/2A電源アダプターをDC-IN電源コネクターに接続します。

2 ネットワークケーブルをEthernet2に接続します。

3 デバイスは自動的にセットアップされます。L3の安定したオレンジ色の点灯は、セットアップとインターネットへの接続が成功したことを示します。

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-1.png)

**ステップ2 SenseCAP HotspotアプリとZelcoreアプリをインストールする**
------------------------------------------------------

1 SenseCAP Hotspotアプリはデバイスのセットアップと管理用に設計されています。以下のQRコードをスキャンしてSenseCAP Hotspotアプリをインストールしてください。

2 メールアドレスでSenseCAPアカウントにサインアップするか、直接ログインしてください。

[![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-2.png)](https://app.sensecapmx.com/)

3 ZelcoreアプリはFluxによってリリースされ、デジタルアセット、**FluxNode**、情報を検索、管理、取引し、真に所有するためのものです。以下の画像をクリックしてZelcoreアプリをインストールしてください。

[![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-3.png)](https://zelcore.io/)

**ステップ3 SenseCAP M4をセットアップする**
----------------------------

1 デバイスの左下にある指ぬきを押すと、エンドキャップが持ち上がるので取り外します。

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-4.png)

2 L2インジケーターが青色に点滅するまでB1ボタンを5秒間押して、Bluetooth設定モードをオンにします。

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-5.png)

3 SenseCAP HotspotアプリでFluxを選択し、セットアップをクリックします

*   Bluetooth経由でデバイスをスキャンする
    
*   接続するデバイスを選択する
    

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start.jpg)

4 アプリがデバイスに正常に接続されました。インストールボタンをクリックしてデバイスにflux dAppをインストールします。

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-7.png)

**ステップ4 Flux Nodeをデプロイする**
--------------------------

1 Flux dAppのインストールが完了しました。開くボタンをクリックしてCUMULUS FluxNodeのデプロイを開始します。

**注意：CUMULUS FluxNodeのセットアップには、担保として1000 Fluxを購入し、ZelcoreのFluxウォレットに転送してください。**

**ガイド**

*   [FluxNodeセットアップガイド](https://medium.com/@mmalik4/flux-light-node-setup-as-easy-as-it-gets-833f17c73dbb)

*   [Flux Light Node セットアップビデオチュートリアルガイド（Zelcoreのセットアップ＆Fluxデポジットチュートリアルは8:07から12:30まで）](https://www.youtube.com/watch?v=RT1uaSrurv4)
    

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-8.png)

2 Zelcore APPからIdentity Key、Collateral TX ID、Output Index、Zel ID、Kadena Addressを入力してください。詳細についてはZelcoreをダウンロードしてください。

>     **Identity Key**：Apps をクリック > Apps ページで FluxNodes をクリック > あなたの FluxNode をクリック > 展開メニューで edit をクリック > Identity Key をクリックしてコピー
> 
>     **Collateral TX ID**：Apps をクリック > Apps ページで FluxNodes をクリック > あなたの FluxNode をクリック > 展開メニューで Edit をクリック > Collateral TX ID をクリックしてコピー
> 
>     **Output Index**：Apps をクリック > Apps ページで FluxNodes をクリック > あなたの FluxNode をクリック > 展開メニューで Edit をクリック > Output Index をクリックしてコピー
> 
>     **Zel ID**：Apps をクリック > Apps ページで Zel ID をクリック > QR コードをクリックして Zel ID をコピー
> 
>     **Kadena Address**：NIMBUS と STRATUS は Kadena アドレスを入力して追加の KDA 報酬を得ることができます。CUMULUS をデプロイする場合は入力する必要はありません。Portfolio をクリック > ページで Show Zero Sum をクリック > Kadena をクリック > Details をクリック > Receive アクションをクリック > QR コードをクリックして Kadena アドレスをコピー

3 Start Deploy をクリックすると、SenseCAP M4 が自動的に FluxNode をデプロイします。デプロイ時間はデバイスのネットワークに依存するため、デバイスが良好なネットワークを持っていることを確認してください。現在、アプリは SenseCAP M4 から切断するか、アプリでデプロイの進行状況を監視し続けることができます。

**注意：デバイスのネットワークがパブリック IP を持ち、ダウンロード速度 >= 25 Mb/s、アップロード速度 >= 25 Mb/s であることを確認してください。そうでなければ、Flux ベンチマークが失敗します。**

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-13.png)

4 Flux チェーンの同期が開始されたら、Zelcore アプリに移動して、FluxNode にパブリック IP と名前を入力してください。その後、Start ボタンをクリックして FluxNode を開始します。

FluxNode が正常に動作し、ベンチマークに合格している場合、FluxNode のステータスが Started に変更されるまで 1 ブロック、Confirmed になるまで 1-10 ブロック（2〜20分）かかります。Confirmed が最終ステータスです。ノードが Confirmed になったかどうかは、ホームページを更新して FluxOS で確認できます。Status ページに表示されます。

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-14.png)

**高度な機能**
=========

UPnP 設定
-------

UPnP は universal plug and play の略で、基本的にネットワーク上のデバイスが受信トラフィック用にルーターによってポートを開くことを要求できるようにします。UPnP は、ルーターがサポートされ、適切な upnp 標準に準拠している場合、より簡単なソリューションになります。

単一の外部 IP アドレスで複数の SenseCAP M4 Square をデプロイしたい場合は、**デバイスが接続されているルーターが UPnP をサポートし、それをオンにしていることを確認してください。**

注意：単一の外部 IP アドレスは**最大 8 つの FluxNode のデプロイをサポート**します。

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-16.png)

*   1 SenseCAP M4 Square が FluxNode をデプロイしました
    
*   2 SenseCAP Hotspot App が Bluetooth 経由で M4 に接続
    
*   3 設定アイコンと UPnP Setting をクリック
    
*   4 UPnP を有効にして、使用されていないポートを選択
    
*   5 確認をクリックして設定を送信
    
*   6 現在 M4 UPnP が有効になり、UPnP ステータスが ENABLE になります
    

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-1.jpg)

Fractus 設定
----------

Fractus ノードは Flux ネットワークストレージを増加させるために生まれました。Fractus ノードは少なくとも 10TB のストレージを提供する Cumulus ティアノードです。Fractus ノードは、ネイティブ Flux ブロック報酬に加えて追加の 15% Flux を獲得します。

Fractus ノードを実行するための最小要件：

*   1000 Flux の担保
*   2 CPU コア
*   4 CPU スレッド
*   240 CPU イベント/秒
*   単一パーティションで 9250 GB のストレージ（Raid 許可）
*   80MB/s ディスク書き込み速度
*   100Mb/s ダウンロード/アップロード

![](https://wdcdn.qpic.cn/MTMxMDI3MDEwODc4Njk2MTk_47467_AZXsjpYcOQweNFnJ_1675844077?w=1200&h=654)

*   1 SenseCAP M4 Square が FluxNode をデプロイしました
*   2 10TB ドライブを SenseCAP M4 Square USB3.1 に接続
*   3 SenseCAP Hotspot App が Bluetooth 経由で M4 に接続
*   4 設定アイコンと Fractus Setting をクリック
*   5 Fractus をオンにして、確認をクリックして設定を送信
*   6 現在 M4 Fractus が開いており、Fractus ステータスが True になります

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/稿定设计导出-20230220-153442.jpg)

ダッシュボードに追加
----------

SenseCAP M4 Square の詳細情報については、SenseCAP ダッシュボードに追加してください。

*   直接追加：FluxNode ページで、+ アイコンをクリックし、カスタマイズした名前と SN（デバイスラベル内）を入力してデバイスをダッシュボードに追加
    
*   Bluetooth 経由で追加：M4 が FluxNode をデプロイしている場合、Bluetooth 経由で SenseCAP Hotspot App で M4 に接続し、ダッシュボードに追加します。
    

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-15.png)

ブロック復元
------

Bluetooth 経由で SenseCAP Hotspot App で M4 に接続し、Flux アプリを開いて Restore Block ボタンをクリックします。M4 は自動的にブロックを復元し、他の手順は必要ありません。復元時間はデバイスのネットワークに依存するため、デバイスが良好なネットワークを持っていることを確認してください。

削除
--

**慎重に操作してください！** SenseCAP M4 にデプロイされた CUMULUS FluxNode を削除します。Bluetooth 経由で SenseCAP Hotspot App で M4 に接続し、Flux アプリを開いて Delete ボタンをクリックして FluxNode を削除します。

再デプロイ
-----

**慎重に操作してください！** 再デプロイは最初にデプロイされた FluxNode を自動的に削除します。Bluetooth 経由で SenseCAP Hotspot App で M4 に接続し、Flux アプリを開いて Redeploy ボタンをクリックし、新しい FluxNode 情報を入力して再デプロイします。

**分散アプリサポートリスト**
================

*   Flux Cumulus Node
    
*   Flux Cumulus Fractus (TBD)
    

**Flux Cumulus Node ネットワーク設定**
===============================

Fluxノードの適切な動作を確保するために、ネットワークを適切に設定してください。以下では、単一ノードおよびマルチノードのネットワーク要件について説明します。

**要件**

*   外部IPアドレス、単一の外部IPアドレスでサポートされるFluxノードの最大数は8です。8台を超えるデバイスがある場合は、より多くの外部IPアドレスが必要になる場合があります
    
*   安定した有線ネットワーク環境、≥25 Mbps帯域幅
    
*   ルーターがUPNPおよびポートフォワーディング機能をサポートし、デバイスにポートを転送できること
    

**単一ノードのセットアップ**

[flux公式ドキュメントを参照してください](https://support.runonflux.io/support/solutions/articles/151000021293-flux-node-network-setup)

**マルチノードのセットアップ**

SenseCAP M4 Squareは複数のFluxNodeをサポートしていません