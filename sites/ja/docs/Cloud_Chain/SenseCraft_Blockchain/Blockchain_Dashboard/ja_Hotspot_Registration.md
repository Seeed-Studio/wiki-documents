---
sidebar_position: 3
description: ホットスポット登録
title: ホットスポット登録
keywords:
  - クラウドとチェーン
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecraft-blockchain/blockchain-dashboard/hotspot-registration
aliases:
  - /sensecraft-blockchain/sensecap-mx-dashboard/hotspot-registration
last_update:
  date: 06/06/2025
  author: Matthew
createdAt: '2023-02-24'
updatedAt: '2026-08-04'
url: https://wiki.seeedstudio.com/ja/sensecraft-blockchain/blockchain-dashboard/hotspot-registration/
---

# ホットスポット登録

**Helium Wallet を使ってホットスポットを登録する方法**
===============================================

-  [**https://status.sensecapmx.cloud/**](https://status.sensecapmx.cloud?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecap_mx_dashboard) にアクセスして SenseCAP Dashboard にログインします
-  "Helium APP" が最新バージョンであることを確認し、Helium ウォレットにログインします。

[**Android Store**](https://play.google.com/store/apps/details?id=com.helium.wallet&hl=en_US) または [**iOS Store**](https://apps.apple.com/app/id1450463605) にアクセスして最新バージョンをダウンロードできます。

- SenseCAP Dashboard で、左側メニューの "Hotspot" をクリックし、その後、青い "+ Add New Hotspot" ボタンをクリックします。

すると、以下のように Helium Wallet からホットスポットをインポートするための QR コードが表示されます：

![SeneseCAP Hotspot Registration](https://www.sensecapmx.com/wp-content/uploads/2022/07/dash-qr.png)

Dashboard に表示されている QR コードをスキャンするために "Helium App" を使用します。

![SenseCAP Hotspot Registration 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-1-register.png)

Helium Wallet で QR コードをスキャンし、ウォレットをリンクするよう求められたら "**Helium App**" で許可を与えます。

**注意**: これはウォレットのシードフレーズへのアクセスを誰かに与えるものではなく、ダッシュボードが接続してあなたのホットスポットをダッシュボードに追加できるようにするだけです。

![SenseCAP Hotspot Registration 2](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-2-register.png)

SenseCAP Dashboard に追加したいホットスポットを選択して追加し、ボタンをクリックします。

![SenseCAP Hotspot Registration 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-3-register.png)

ウォレットのリンクが正常に完了すると、以下のメッセージが表示されます。**これで準備完了です！**

![SenseCAP Hotspot Registration 4](https://www.sensecapmx.com/wp-content/uploads/2022/07/step-4-register.png)

**デバイス情報を使ってホットスポットを登録する**
=============================================

**注意**: ホットスポットは Helium Wallet かデバイス情報のどちらかを使ってダッシュボードに登録できます。デバイス情報でホットスポットを登録する場合は、ホットスポットのローカルコンソールにログインしてデバイス情報を取得する必要があります。

![SenseCAP Hotspot Registration 5](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-6-1.png)

- ダッシュボードにログイン ⇒ [**https://status.sensecapmx.cloud/**](https://status.sensecapmx.cloud?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecap_mx_dashboard)
- 登録時に作成した認証情報を入力してログインします
- 左側メニューの「Hotspot」に移動します
- "Add new Hotspot" をクリックします

![SenseCAP Hotspot Registration 6](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-7-1.png)

- "**SN", "ETH MAC**" アドレス、"**CPU ID**" および "**bind key**" の入力を求められます。"**SN**" は SenseCAP M1 の底面ラベルに記載されており、その他はローカルコンソールページに表示されています。
- “**Confirm**” をクリックすると、ホットスポットがダッシュボードに追加されます。

**注意**: CPU ID は通常、1 に続いて 7 つの 0 から始まります。例：_**10000000**_

**おめでとうございます**！ホットスポットをダッシュボードに正常に追加し、監視を開始できるようになりました。追加のホットスポットを監視したい場合は、同じ手順を繰り返してください。
