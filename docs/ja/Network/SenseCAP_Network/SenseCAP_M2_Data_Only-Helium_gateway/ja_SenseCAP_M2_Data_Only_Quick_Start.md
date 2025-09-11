---
description: SenseCAP M2 Data Only クイックスタート
title: SenseCAP M2 Data Only クイックスタート
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Network/SenseCAP_Network/SenseCAP_M2_Data_Only-Helium_gateway/SenseCAP_M2_Data_Only_Quick_Start
last_update:
  date: 02/14/2023
  author: Matthew
---

SenseCAP M2 Data Only クイックスタート
=================================

以下では、数分でホットスポットを簡単にセットアップするために必要な手順をご紹介します！

**ビデオ説明**
=====================

* * *

**ステップ1: HeliumとSenseCAP Appをインストールしてアカウントを作成**
===============================================================

- Helium HotspotとSenseCAP MX Hotspot Appをインストール
- Apple StoreまたはGoogle Playから「Helium Hotspot」と「SenseCAP MX Hotspot」を検索してダウンロードし、これら2つのアプリをお使いの携帯電話にインストールしてください。

「**Helium Hotspot**」アプリは公式のHeliumアプリで、Heliumウォレット認証に必要です。これを使用してHeliumウォレットの登録と管理、ホットスポットとHNTトランザクションを行うことができます。

![Helium Hotspot App](https://www.sensecapmx.com/wp-content/uploads/2022/07/helium-app-logos-1.webp)

「**SenseCAP MX Hotspot**」アプリは、SenseCAP MXチームが開発した公式のSenseCAP ホットスポットアプリです。これを使用してSenseCAP ホットスポットの登録と管理を行うことができます。

![SenseCAP Hotspot App](https://www.sensecapmx.com/wp-content/uploads/2022/07/SenseCAP-Hotspot-App.png)

- HeliumアプリでHeliumウォレットを作成

新しいHeliumウォレットを生成する際、12語のパスワードが表示されます。12語のパスワードは紛失した場合に復元することができないため、順番通りにメモを取るかバックアップを取り、安全な場所に保管してください。

- SenseCAP MX Hotspot AppでアカウントをCreate

HeliumウォレットをSenseCAP アカウントにリンクすると、新しいホットスポットを追加する準備が整います。

![Deeplink Helium Wallet App](https://www.sensecapmx.com/wp-content/uploads/2022/07/deeplink-1.png)

**Heliumアプリのダウンロードとウォレット作成方法**
==================================================

**SenseCAP のダウンロードとアカウント作成方法**
===============================================

* * *

**ステップ2: SenseCAP M2をセットアップしてインターネットに接続**
==========================================================

- SenseCAP M2をセットアップ

アンテナ、電源アダプター、イーサネットケーブル（必須ではありません）をホットスポットに接続し、電源を入れます。

**電源LED**は**赤色**で表示され、約15秒後（PoEで電源を供給する場合、この待機時間は少し長くなります）、上部のインジケーターが**緑色**で点滅し、ホットスポットが起動していることを示します。

約1分間の起動後、ホットスポットがイーサネットケーブル経由でインターネットに接続されている場合はインジケーターが**緑色**の点灯を示し、Wi-Fi設定を待機している場合は**青色**の点灯を示します。

![SenseCAP M2 Quick Start](https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-1.png)

**ファームウェアアップデート**
===================

初回起動時には、イーサネットケーブル経由でホットスポットをインターネットに接続し、次のステップに進む前にファームウェアアップデートを完了するために約30分待つことをお勧めします。（このステップは、ホットスポットがWi-Fiネットワークに接続された後に行うこともできます）。

ファームウェアアップデートは自動で行われ、10〜30分かかります。アップデートプロセス中、インジケーターは**オレンジ色**の点滅から**緑色**の点灯に1〜2回変化します。ファームウェアアップデートが完了するとホットスポットが再起動し、インジケーターは**緑色**の点灯を維持します。

**注意**: ホットスポットが最新のファームウェアにアップデートされる前に次のステップを進めると、予期しないエラーが発生し、続行できなくなります。アップデートプロセスをお待ちいただき、電源を切ったりインターネットを切断したりしないでください。

**PoE接続**
==================

SenseCAP M2はPoE（Power on Ethernet）をサポートし、IEEE 802.3 af標準に対応しています。お使いのモデム/ルーターがPoEをサポートしていない場合は、PSE（Power Sourcing Equipment）として40V-57V DC電源を提供する追加のPoEスイッチが必要になります。

![SenseCAP M2 POE Connection Setup](https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-poe.png)

- SenseCAP Hotspot AppでBluetooth経由でホットスポットに接続

青色のインジケーターがゆっくり点滅するまでボタンを5秒間押して設定モードに入り、アプリの指示に従ってホットスポットに接続します。

![SenseCAP M2 Setup - App](https://www.sensecapmx.com/wp-content/uploads/2022/07/m2-setup-app-scaled.jpg)

**注意**: SenseCAP M2 Data Only ホットスポットには「**SenseCAP M2 (Data-Only)**」を選択してください。周囲に複数のホットスポットがある場合は、ホットスポット名の下にある6桁のMACアドレスでホットスポットを識別できます。

- Wi-Fi接続をセットアップ

「Scan Networks」をクリックし、Wi-Fiを選択してパスワードを入力するか、すでにイーサネットケーブルを使用している場合は「Use Ethernet Instead」をクリックします。

![SenseCAP M2 Wifi Setup](https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi.png)

* * *

**ステップ3: Helium ホットスポットオンボーディングと位置情報の設定**
=========================================================

- ホットスポットをHeliumネットワークに追加

アプリの指示に従って、ホットスポットをHeliumネットワークに追加してください。

**注意**: オンボーディングと位置情報設定の手数料は製品に含まれていません。オンボーディング手数料として1,000,000 Helium Data Credits（\$10）、位置情報設定手数料として500,000 Helium Data Credits（\$5）がウォレットに必要です。
Data Creditsを取得するには、HeliumウォレットでHelium HNTをCreditsに交換する必要があり、これらはオンボード時に自動的に差し引かれます。オンボーディングプロセスを進める前に、ウォレットに十分なHelium Data Creditがあることを確認してください。

- ホットスポットの位置情報を設定

アプリの指示に従い、マップ上で実際の設置場所を選択し、位置情報を設定してください。

* * *

**SenseCAP M2の準備が完了しました！The People's Networkへようこそ！**
=====================================================================

![Longfi](https://www.sensecapmx.com/wp-content/uploads/2022/06/longfi.webp)
