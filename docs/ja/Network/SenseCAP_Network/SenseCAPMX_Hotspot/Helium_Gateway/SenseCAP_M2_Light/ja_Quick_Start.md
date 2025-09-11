---
description: SenseCAP M2 Light Gateway クイックスタート
title: SenseCAP M2 Light Gateway クイックスタート
keywords:
- SenseCAP ネットワーク
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M2_Light/Quick_Start
last_update:
  date: 05/15/2025
  author: Yvonne
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## **ステップ 1: SenseCAP M2 を接続する**
アンテナ、電源アダプター、イーサネットケーブル（必須ではありません）をホットスポットに接続し、電源を入れます。

**電源 LED は** **赤色**で点灯し、約15秒後（PoEで電源を供給する場合、この待機時間は少し長くなります）、上部のインジケーターが**緑色**に点滅し、ホットスポットが起動していることを示します。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image1.png)

**PoE接続**

SenseCAP M2はPoE（Power on Ethernet）をサポートしており、IEEE 802.3 af標準に対応しています。モデム/ルーターがPoEをサポートしていない場合は、40V-57V DC電力を供給するPSE（電源供給装置）として機能する追加のPoEスイッチが必要です。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image2.png)

## **ステップ 2: SenseCAP M2 をアプリに接続する**
- Helium [Wallet App](https://docs.helium.com/wallets/helium-wallet-app) と SenseCAP Hotspot App をインストールします。

SenseCAP Hotspot App のアカウントを作成します。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image3.png)

- 「Helium」を選択し、Helium Wallet を SenseCAP Hotspot App にリンクします。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image4.png)![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image5.png)

- Walletページで「Onboard New Hotspot」をクリックし、「SenseCAP M2」を選択してオンボードします。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image6.png)

- M2のボタンを5秒間押し続け、青色のインジケーターがゆっくり点滅するまで待ち、設定モードに入ります。その後、アプリの指示に従って SenseCAP M2 を接続します。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image7.png)![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image8.png)

**注意**: SenseCAP M2 Light Hotspotの場合は「**SenseCAP M2**」を選択してください。複数のホットスポットが周囲にある場合は、ホットスポット名の下にある6桁のMACアドレスでホットスポットを識別できます。

- Wi-Fi接続を設定します。

「Scan Networks」をクリックし、Wi-Fiを選択してパスワードを入力します。または、イーサネットケーブルやSIMカード（4Gバージョンの場合）を既に使用している場合は「Use Ethernet Instead」をクリックします。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image9.png)

## **ステップ 3: SenseCAP M2 をブロックチェーンに追加する**
- ホットスポットの位置を設定して確認し、ホットスポットをブロックチェーンに追加します。

**注意:** SenseCAP M2 Light Hotspotの購入価格には、\$40のHeliumネットワークアクティベーション料金と\$10の初回位置アサート料金（合計\$50相当）が含まれています。位置を設定し、必要に応じて別の位置に変更することができますが、ホットスポットを新しい位置に移動するたびに\$10の位置アサート料金を再度支払う必要があります。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image10.png)![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image11.png)![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image12.png)

これで SenseCAP M2 をブロックチェーンに追加しました（インジケーターが白色に点滅します）。ただし、デバイスはまだ**Heliumカバレッジを提供できません**。ホットスポットをアクティベートするにはステップ4を確認してください。

## **ステップ 4: SenseCAP M2 Light Hotspot をアクティベートする**

[![SenseCAP ライセンスカードの引き換え方法](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/redeem.png)](https://www.youtube.com/watch?v=D59QTtMUKdM)

- [SenseCAP Dashboard](https://status.sensecapmx.cloud/#/login?redirect=/dashboard) に、SenseCAP Hotspot アプリのアカウントでログインします。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image13.png)

- **Redeem License** をクリックし、引き換えカードに記載されている引き換えコードを入力します。

**注意**: 引き換えコードを他人と共有しないでください。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image14.png)
![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image15.png)

- 確認ボタンをクリックすると、ライセンスを受け取ることができます。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image16.png)

- **Apply** をクリックし、アクティベートしたいホットスポットを選択します。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image17.png) ![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image18.png)

- これで、ホットスポットが Helium LoRaWAN カバレッジを提供し始めます。デバイスのインジケーターが緑色になります。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image19.png)

#### **SenseCAP M2 Light Hotspot ライセンスを購入する**

[![SenseCAP ライセンスの購入方法](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/purchase.png)](https://youtu.be/efkWlmRGWmU)

ライセンスが期限切れになった場合、[SenseCAP Hotspot Dashboard](https://status.sensecapmx.cloud/#/login?redirect=/dashboard) から直接購入し、引き換えカードを再度購入することなくデバイスに適用できます。

- ライセンスページにアクセスし、**Purchase License** ボタンをクリックします。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image20.png)

- ライセンスプランと数量を選択し、Checkout ボタンをクリックします。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image21.png)

- 注文を確認し、PayPal で支払います。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image22.png)![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image23.png)

- その後、**License** リストでライセンスを確認できます。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image24.png)

- **Apply** をクリックし、アクティベートしたいホットスポットを選択します。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image25.png)
![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image26.png)

- これで、ホットスポットが Helium LoRaWAN カバレッジを提供し始めます。デバイスのインジケーターが緑色になります。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image27.png)