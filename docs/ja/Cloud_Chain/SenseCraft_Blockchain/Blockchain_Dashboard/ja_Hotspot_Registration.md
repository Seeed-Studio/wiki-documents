---
sidebar_position: 3
description: Hotspot Registration
title: Hotspot Registration
keywords:
- Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/sensecraft-blockchain/blockchain-dashboard/hotspot-registration
aliases:
  - /ja/sensecraft-blockchain/sensecap-mx-dashboard/hotspot-registration
last_update:
  date: 06/06/2025
  author: Matthew
---

# Hotspot Registration

**Helium ウォレットでホットスポットを登録する方法**
===============================================

-  [**https://status.sensecapmx.cloud/**](https://status.sensecapmx.cloud/) にアクセスして SenseCAP ダッシュボードにログインしてください
-  「Helium APP」が最新バージョンであることを確認し、Helium ウォレットにログインしてください。

最新バージョンは [**Android Store**](https://play.google.com/store/apps/details?id=com.helium.wallet&hl=en_US) または [**iOS Store**](https://apps.apple.com/app/id1450463605) からダウンロードできます。

- SenseCAP ダッシュボードで、左メニューの「Hotspot」をクリックし、「+ Add New Hotspot」と書かれた青いボタンをクリックします。

以下のように、Helium ウォレットからホットスポットをインポートするための QR コードが表示されます：

![SeneseCAP Hotspot Registration](https://www.sensecapmx.com/wp-content/uploads/2022/07/dash-qr.png)

「Helium App」を使用してダッシュボードに表示された QR コードをスキャンします。

![SenseCAP Hotspot Registration 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-1-register.png)

Helium ウォレットで QR コードをスキャンし、ウォレットをリンクするよう促されたら「**Helium App**」で許可を与えてください。

**注意**: これは誰かがあなたのウォレットのシードフレーズにアクセスできるようにするものではありません。これはダッシュボードが接続してあなたのホットスポットをダッシュボードに追加することを許可するだけです。

![SenseCAP Hotspot Registration 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-2-register.png)

SenseCAP ダッシュボードに追加したいホットスポットを選択し、ボタンをクリックします。

![SenseCAP Hotspot Registration 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-3-register.png)

ウォレットが正常にリンクされた場合、以下のメッセージが表示されます。**設定完了です！**

![SenseCAP Hotspot Registration 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-4-register.png)

**デバイス情報でホットスポットを登録する**
=============================================

**注意**: Helium ウォレットまたはデバイス情報のいずれかを使用してダッシュボードにホットスポットを登録できます。デバイス情報でホットスポットを登録することを選択した場合、デバイス情報を取得するためにホットスポットのローカルコンソールにログインする必要があります。

![SenseCAP Hotspot Registration 5](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-6-1.png)

- ダッシュボードにログイン ⇒ [**https://status.sensecapmx.cloud/**](https://status.sensecapmx.cloud/)
- 登録時に作成した認証情報を入力してログイン
- 左メニュー列の「Hotspot」に移動
- 「Add new Hotspot」をクリック

![SenseCAP Hotspot Registration 6](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-7-1.png)

- 「**SN**」、「**ETH MAC**」アドレス、「**CPU ID**」、「**bind key**」の入力を求められます。「**SN**」は SenseCAP M1 の底面ラベルに記載されており、その他はローカルコンソールページにあります。
- 「**Confirm**」をクリックすると、ホットスポットがダッシュボードに追加されます。

**注意**: CPU ID は通常、1 の後に 7 つの 0 が続きます。例：_**10000000**_

**おめでとうございます**！ダッシュボードにホットスポットを正常に追加し、監視を開始できます。追加のホットスポットを監視するために、これらの手順を繰り返すことができます。