---
description: SenseCAP M2 Light Gateway クイックスタート
title: SenseCAP M2 Light Gateway クイックスタート
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Network/SenseCAP_Network/SenseCAP_M2_Light_Gateway/SenseCAP_M2_Light_Gateway_Quick_Start
last_update:
  date: 03/23/2023
  author: Yvonne
---

## **ステップ1: SenseCAP M2を接続する**

アンテナ、電源アダプター、イーサネットケーブル（必須ではありません）をホットスポットに接続し、電源を入れます。

**電源LEDが赤色**で表示され、約15秒後（PoEで電源を供給する場合、この待機時間は少し長くなります）、上部のインジケーターが**緑色**で点滅し、ホットスポットが起動していることを示します。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image1.png)

**PoE接続**

SenseCAP M2はPoE（Power on Ethernet）をサポートし、IEEE 802.3 af標準に対応しています。モデム/ルーターがPoEをサポートしていない場合は、PSE（Power Sourcing Equipment）として40V-57V DC電源を提供する追加のPoEスイッチが必要になります。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image2.png)

## **ステップ2: SenseCAP M2をアプリに接続する**

- Helium [Wallet App](https://docs.helium.com/wallets/helium-wallet-app)とSenseCAP Hotspot Appをインストールします

SenseCAP Hotspot Appのアカウントを作成します。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image3.png)

- 「Helium」を選択し、Helium WalletをSenseCAP Hotspot Appにリンクします。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image4.png)![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image5.png)

- Walletページで「Onboard New Hotspot」をクリックし、「SenseCAP M2」を選択してオンボードします

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image6.png)

- M2のボタンを5秒間押して青色インジケーターがゆっくり点滅するまで待ち、設定モードに入り、アプリの指示に従ってSenseCAP M2を接続します。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image7.png)![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image8.png)

**注意**: SenseCAP M2 Light Hotspotには「**SenseCAP M2**」を選択してください。周囲に複数のホットスポットがある場合は、ホットスポット名の下にある6桁のMACアドレスでホットスポットを識別できます。

- Wi-Fi接続を設定します

「Scan Networks」をクリックし、Wi-Fiを選択してパスワードを入力するか、すでにイーサネットケーブルやSIMカード（4Gバージョンの場合）を使用している場合は「Use Ethernet Instead」をクリックします。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image9.png)

## **ステップ3: SenseCAP M2をブロックチェーンに追加する**

- ホットスポットの場所を設定・確認し、ホットスポットをブロックチェーンに追加します。

**注意:** SenseCAP M2 Light Hotspotは、購入価格に\$40のHeliumネットワーク有効化手数料と最初の位置アサート手数料\$10（合計\$50相当）が含まれています。場所を設定し、必要に応じて別の場所に変更できますが、ホットスポットを新しい場所に移動するたびに\$10の位置アサート手数料を再度支払う必要があります。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image10.png)![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image11.png)![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image12.png)

これでSenseCAP M2をブロックチェーンに追加しました（インジケーターが白色で点滅します）が、デバイスはまだ**Heliumカバレッジを提供できません**。ホットスポットを有効化するためにステップ4を確認してください。

## **ステップ 4: SenseCAP M2 Light Hotspot をアクティベートする**

[![SenseCAP ライセンスカードの引き換え方法](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/redeem.png)](https://www.youtube.com/watch?v=D59QTtMUKdM)

- SenseCAP Hotspot アプリのアカウントで [SenseCAP Dashboard](https://status.sensecapmx.cloud/#/login?redirect=/dashboard) にログインします

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image13.png)

- **Redeem License** をクリックし、引き換えカードの引き換えコードを入力します。

**注意**: 引き換えコードを他の人と共有しないでください。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image14.png)
![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image15.png)

- Confirm ボタンをクリックすると、ライセンスを受け取ります。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image16.png)

- **Apply** をクリックし、アクティベートしたいホットスポットを選択します。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image17.png) ![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image18.png)

- これで、ホットスポットが Helium LoRaWAN カバレッジの提供を開始し、デバイスのインジケーターが緑色になります。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image19.png)

#### **SenseCAP M2 Light Hotspot ライセンスの購入**

[![SenseCAP ライセンスの購入方法](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/purchase.png)](https://youtu.be/efkWlmRGWmU)

ライセンスが期限切れになった場合、[SenseCAP Hotspot Dashboard](https://status.sensecapmx.cloud/#/login?redirect=/dashboard) から直接購入し、引き換えカードを再度購入することなくデバイスに適用できます。

- License ページにアクセスし、**Purchase License** ボタンをクリックします

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image20.png)

- ライセンスプランと数量を選択し、Checkout ボタンをクリックします

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image21.png)

- 注文を確認し、PayPal で支払います

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image22.png)![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image23.png)

- **License** リストでライセンスを確認できます

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image24.png)

- **Apply** をクリックし、アクティベートしたいホットスポットを選択します。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image25.png)
![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image26.png)

- これで、ホットスポットが Helium LoRaWAN カバレッジの提供を開始し、デバイスのインジケーターが緑色になります。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image27.png)
