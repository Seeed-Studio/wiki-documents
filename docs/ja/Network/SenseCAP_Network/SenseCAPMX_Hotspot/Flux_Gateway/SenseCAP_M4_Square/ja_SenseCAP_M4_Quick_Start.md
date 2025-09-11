---
description: SenseCAP M4 クイックスタート
title: SenseCAP M4 クイックスタート
keywords:
- SenseCAP ネットワーク
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Flux_Gateway/SenseCAP_M4_Square/SenseCAP_M4_Quick_Start
last_update:
  date: 05/15/2025
  author: Matthew
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

**SenseCAP M4 Square クイックスタート**
==================================

**SenseCAP M4 Square** は、次世代計算ネットワーク（FluxNode）を最も簡単に展開する方法を提供します。Linuxコマンド不要、環境構築不要、わずか4ステップで展開が完了します。

**前提条件**

*   CUMULUS FluxNode を展開するための十分なアップロード速度のネットワーク **(最低25Mbpsのアップロード速度)**
    
*   新しい CUMULUS FluxNode が作成されていること
    

必要なもの
=============

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start.png)

Flux CUMULUS ノードのステーク
=======================

このチュートリアルでは Binance を例として使用します。

ステップ1 取引所で Flux を購入する
------------------------------------

1 [Binance アプリ](https://www.binance.com/zh-CN/download) をダウンロードし、アカウントを登録します。

2 Flux は法定通貨で購入できません。まず USDT を購入し、その後 USDT を Flux に変換してください。

4 取引ページで、スポットを選択し、市場で FLUX/USDT を選択します。

5 USDT の数量を入力し、変換された Flux が 1000 を超えることを確認します。

6 購入ボタンをクリックします。これで Flux の購入が完了しました。

![](https://www.sensecapmx.com/wp-content/uploads/2023/01/Pasted-into-Stake-Flux-CUMULUS-Node.jpg)

ステップ2 Zelcore アプリをダウンロードしてアカウントを登録する
--------------------------------------------------------

1 [Zelcore アプリ](https://zelcore.io/) をダウンロードし、Zelcore アカウントにログインします。

2 ポートフォリオページで、「資産を追加」ボタンをクリックして FLUX BSC 資産（支払いポートフォリオ）を追加します。

![](https://www.sensecapmx.com/wp-content/uploads/2023/01/Pasted-into-Stake-Flux-CUMULUS-Node-1.png)

ステップ3 Binance から Zelcore ウォレットに Flux を送金する
--------------------------------------------------

1 Binance アプリを開き、ウォレットページにアクセスします。

2 Flux を選択し、「出金」をクリックして「暗号ネットワーク経由で送信」を選択します。

![](https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_342796_dUNV1mJGFQqnbdUX_1672995944?w=1200&h=1200)

3 出金情報を入力して送信します。

*   アドレス: Zelcore アプリを開き、FLUX BSC の受信アドレスをコピーして Binance に貼り付けます。
    

![](https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_846590_gzvPZu5rXihuT8F5_1672996316?w=1280&h=1268.796498905908)

*   ネットワーク: BB スマートチェーン (BEP20) を選択します。
    
*   金額: 1000+ Flux
    
*   送信元: スポット＆ファンディングウォレット
    

![](https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_462161_Dwa_CwJs_TZZu9PS_1672996442?w=1200&h=1200)

4 出金情報を確認し、Zelcore に送信します。

ステップ4 新しい Flux Cumulus ノードを作成する
------------------------------------

1 Zelcore アプリを開き、FLUX BSC 資産（支払いポートフォリオ）に Flux が送信されたことを確認します。

2 アプリページにアクセスし、Fusion を開いて FLUX BSC を Flux（支払いポートフォリオ）にスワップします。

*   売却資産: FLUX BSC を選択
    
*   購入資産: FLUX を選択
    

注意: スワップ手数料を支払うために十分な BNB を確保してください。

![](https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_153450_KYFKcuB_o6xATDxg_1672996615?w=1200&h=1200)

3 支払いポートフォリオから別のポートフォリオ（例: マイニングの Flux 資産）に Flux を送信します。

4 これで SenseCAP M4 Square 上で新しい Flux Cumulus ノードを展開できます！

![](https://wdcdn.qpic.cn/MTMxMDI3MDIxMzUyMTM0NjA_337290_CDU9M2a95R8QqPsg_1672997135?w=1280&h=1277.1806167400882)

SenseCAP M4 Square 上で FluxNode を展開する
=====================================

**ステップ1 電源を入れてインターネットに接続する**
------------------------------------------

1 付属の 12V/2A 電源アダプターを DC-IN 電源コネクターに接続します。

2 ネットワークケーブルを Ethernet2 に接続します。

3 デバイスは自動的に自己設定を行います。L3 がオレンジ色で点灯している場合、設定とインターネット接続が成功したことを示します。

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-1.png)

**ステップ2 SenseCAP Hotspot アプリと Zelcore アプリをインストールする**
------------------------------------------------------

1 SenseCAP Hotspot アプリはデバイスの設定と管理用に設計されています。以下の QR コードをスキャンして SenseCAP Hotspot アプリをインストールしてください。

2 メールで SenseCAP アカウントを登録するか、直接ログインします。

[![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-2.png)](https://app.sensecapmx.com/)

3 Zelcore アプリは Flux によってリリースされ、デジタル資産、**FluxNode**、および情報を見つけ、管理し、取引し、真に所有するためのものです。以下の画像をクリックして Zelcore アプリをインストールしてください。

[![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-3.png)](https://zelcore.io/)

**ステップ3 SenseCAP M4 を設定する**
----------------------------

1 デバイスの左下にあるピンを押し、エンドキャップを持ち上げて取り外します。

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-4.png)

2 B1 ボタンを 5 秒間押し続け、L2 インジケーターが青く点滅するまで待ち、Bluetooth 設定モードをオンにします。

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-5.png)

3 SenseCAP Hotspot アプリで Flux を選択し、「セットアップ」をクリックします。

*   Bluetooth 経由でデバイスをスキャン
    
*   デバイスを選択して接続
    

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start.jpg)

4 アプリがデバイスに正常に接続されました。次に「インストール」ボタンをクリックして、デバイスに Flux dApp をインストールします。

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-7.png)

**ステップ4 Flux ノードを展開する**
--------------------------

1 Flux dApp のインストールが完了したら、「開く」ボタンをクリックして CUMULUS FluxNode の展開を開始します。

**注意: CUMULUS FluxNode のセットアップには担保として 1000 Flux を購入し、それを Zelcore Flux ウォレットに転送してください。**

**ガイド**

*   [FluxNode セットアップガイド](https://medium.com/@mmalik4/flux-light-node-setup-as-easy-as-it-gets-833f17c73dbb)

*   [Flux Light Node セットアップビデオチュートリアルガイド (ZelcoreのセットアップとFluxのデポジットチュートリアルは8:07から12:30まで)](https://www.youtube.com/watch?v=RT1uaSrurv4)
    

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-8.png)

2 ZelcoreアプリからIdentity Key、Collateral TX ID、Output Index、Zel ID、Kadena Addressを入力してください。詳細についてはZelcoreをダウンロードしてください。

>     **Identity Key**：Appsをクリック > AppsページでFluxNodesをクリック > 自分のFluxNodeをクリック > 展開メニューで編集をクリック > Identity Keyをクリックしてコピー
> 
>     **Collateral TX ID**：Appsをクリック > AppsページでFluxNodesをクリック > 自分のFluxNodeをクリック > 展開メニューで編集をクリック > Collateral TX IDをクリックしてコピー
> 
>     **Output Index**：Appsをクリック > AppsページでFluxNodesをクリック > 自分のFluxNodeをクリック > 展開メニューで編集をクリック > Output Indexをクリックしてコピー
> 
>     **Zel ID**：Appsをクリック > AppsページでZel IDをクリック > QRコードをクリックしてZel IDをコピー
> 
>     **Kadena Address**：NIMBUSとSTRATUSはKadenaアドレスを入力して追加のKDA報酬を得ることができます。CUMULUSをデプロイする場合は入力不要です。Portfolioをクリック > ページでShow Zero Sumをクリック > Kadenaをクリック > Detailsをクリック > Receiveアクションをクリック > QRコードをクリックしてKadenaアドレスをコピー

3 「Start Deploy」をクリックすると、SenseCAP M4が自動的にFluxNodeをデプロイします。デプロイ時間はデバイスのネットワークに依存します。デバイスが良好なネットワークを持っていることを確認してください。アプリはSenseCAP M4から切断するか、アプリでデプロイ進行状況を監視し続けることができます。

**注意：デバイスのネットワークがパブリックIPを持ち、ダウンロード速度が25 Mb/s以上、アップロード速度が25 Mb/s以上であることを確認してください。そうでない場合、Fluxベンチマークは失敗します。**

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-13.png)

4 Fluxチェーンの同期を開始したら、Zelcoreアプリに移動し、FluxNodeにパブリックIPと名前を入力してください。その後、StartボタンをクリックしてFluxNodeを開始します。

FluxNodeが正常に動作し、ベンチマークを通過している場合、FluxNodeのステータスが「Started」に変わるまで1ブロックがマイニングされ、最終的なステータス「Confirmed」になるまで1〜10ブロック（2〜20分）が必要です。ノードが「Confirmed」になったかどうかは、FluxOSのホームページを更新してステータスページで確認できます。

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-14.png)

**高度な機能**
=====================

UPnP設定
------------

UPnP（Universal Plug and Play）は、ネットワーク上のデバイスがルーターに対してポートを開くリクエストを行い、外部からのトラフィックを受け入れるための機能です。ルーターがUPnPをサポートし、適切なUPnP標準に準拠している場合、UPnPは簡単な解決策となります。

単一の外部IPアドレスで複数のSenseCAP M4 Squaresをデプロイしたい場合は、**デバイスが接続されているルーターがUPnPをサポートし、UPnPを有効にすることを確認してください。**

注意：単一の外部IPアドレスは**最大8つのFluxNodesをデプロイ可能**です。

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-16.png)

*   1 SenseCAP M4 SquareがFluxNodeをデプロイ済み
    
*   2 SenseCAP HotspotアプリでBluetooth経由でM4に接続
    
*   3 設定アイコンをクリックしてUPnP設定を選択
    
*   4 UPnPを有効にし、使用されていないポートを選択
    
*   5 確認をクリックして設定を送信
    
*   6 これでM4のUPnPが有効になり、UPnPステータスが「ENABLE」と表示されます
    

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-1.jpg)

Fractus設定
---------------

FractusノードはFluxネットワークのストレージを増加させるために作られました。Fractusノードは、少なくとも10TBのストレージを提供するCumulusティアノードです。Fractusノードは、ネイティブのFluxブロック報酬に加えて15%の追加Fluxを獲得します。

Fractusノードを実行するための最低要件：

*   1000 Fluxの担保。
*   2つのCPUコア。
*   4つのCPUスレッド。
*   240 CPUイベント/秒。
*   単一パーティションで9250 GBのストレージ（RAID許可）。
*   80MB/sのディスク書き込み速度。
*   100Mb/sのダウンロード/アップロード速度。

![](https://wdcdn.qpic.cn/MTMxMDI3MDEwODc4Njk2MTk_47467_AZXsjpYcOQweNFnJ_1675844077?w=1200&h=654)

*   1 SenseCAP M4 SquareがFluxNodeをデプロイ済み
*   2 10TBのドライブをSenseCAP M4 SquareのUSB3.1に接続
*   3 SenseCAP HotspotアプリでBluetooth経由でM4に接続
*   4 設定アイコンをクリックしてFractus設定を選択
*   5 Fractusをオンにして確認をクリックし、設定を送信
*   6 これでM4のFractusが有効になり、Fractusステータスが「True」と表示されます

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/稿定设计导出-20230220-153442.jpg)

Dashboardに追加
----------------

SenseCAP M4 Squareに関する詳細情報については、SenseCAPダッシュボードに追加してください。

*   直接追加：FluxNodeページで+アイコンをクリックし、カスタマイズした名前とSN（デバイスラベル内）を入力してデバイスをダッシュボードに追加
*   Bluetooth経由で追加：M4がFluxNodeをデプロイ済みの場合、SenseCAP HotspotアプリでBluetooth経由でM4に接続し、ダッシュボードに追加
    

![](https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Quick-Start-15.png)

ブロックの復元
-------------

SenseCAP HotspotアプリでBluetooth経由でM4に接続します。その後、Fluxアプリを開き、「Restore Block」ボタンをクリックします。M4は自動的にブロックを復元し、他の手順は不要です。復元時間はデバイスのネットワークに依存します。デバイスが良好なネットワークを持っていることを確認してください。

削除
------

**慎重に操作してください！** SenseCAP M4にデプロイされたCUMULUS FluxNodeを削除します。SenseCAP HotspotアプリでBluetooth経由でM4に接続し、その後Fluxアプリを開いて「Delete」ボタンをクリックしてFluxNodeを削除します。

再デプロイ
--------

**慎重に操作してください！** 再デプロイは、最初にデプロイ済みのFluxNodeを自動的に削除します。SenseCAP HotspotアプリでBluetooth経由でM4に接続し、その後Fluxアプリを開いて「Redeploy」ボタンをクリックし、新しいFluxNode情報を入力して再デプロイします。

**分散型アプリ対応リスト**
====================================

*   Flux Cumulus Node
    
*   Flux Cumulus Fractus (TBD)
    

**Flux Cumulus Node ネットワーク構成**
===========================================

Flux ノードを適切に動作させるためには、ネットワーク設定を適切に行う必要があります。以下では、シングルノードおよびマルチノードのネットワーク要件について説明します。

**要件**

*   外部 IP アドレス：1つの外部 IP アドレスでサポートされる Flux ノードの最大数は 8 です。8 台以上のデバイスがある場合は、追加の外部 IP アドレスが必要になる場合があります。
    
*   安定した有線ネットワーク環境、帯域幅は 25 Mbps 以上。
    
*   ルーターが UPNP およびポートフォワーディング機能をサポートしており、デバイスにポートを転送できること。
    

**シングルノードのセットアップ**

[Flux 公式ドキュメントを参照してください](https://support.runonflux.io/support/solutions/articles/151000021293-flux-node-network-setup)

**マルチノードのセットアップ**

SenseCAP M4 Square は複数の Flux ノードをサポートしていません。