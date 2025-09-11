---
description: SenseCAP M2 Light Gateway クイックスタート
title: SenseCAP M2 Light Gateway クイックスタート
keywords:
- SenseCAP ネットワーク
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Network/SenseCAP_Network/SenseCAP_M2_Light_Gateway/SenseCAP_M2_Light_Gateway_Quick_Start
last_update:
  date: 05/15/2025
  author: Yvonne
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## **ステップ 1: SenseCAP M2 を接続する**
アンテナ、電源アダプター、およびイーサネットケーブル（必須ではありません）をホットスポットに接続し、電源を入れます。

**電源 LED は** **赤色** に点灯し、約15秒後（PoEで電源を供給する場合、この待機時間は少し長くなります）、上部のインジケーターが **緑色** に点滅し、ホットスポットが起動中であることを示します。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image1.png)


**PoE 接続**

SenseCAP M2 は PoE（Power on Ethernet）をサポートしており、IEEE 802.3 af 標準に準拠しています。モデム/ルーターが PoE をサポートしていない場合は、PSE（Power Sourcing Equipment）として 40V-57V DC 電力を供給する追加の PoE スイッチが必要です。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image2.png)


## **ステップ 2: SenseCAP M2 をアプリに接続する**
- Helium [ウォレットアプリ](https://docs.helium.com/wallets/helium-wallet-app) と SenseCAP ホットスポットアプリをインストールします。

SenseCAP ホットスポットアプリのアカウントを作成します。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image3.png)

- 「Helium」を選択し、Helium ウォレットを SenseCAP ホットスポットアプリにリンクします。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image4.png)![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image5.png)


- ウォレットページで「新しいホットスポットをオンボード」をクリックし、「SenseCAP M2」を選択してオンボードします。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image6.png)

- M2 のボタンを5秒間押し続け、青色のインジケーターがゆっくり点滅するまで待ち、設定モードに入ります。その後、アプリの指示に従って SenseCAP M2 を接続します。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image7.png)![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image8.png)


**注意**: SenseCAP M2 Light Hotspot の場合は「**SenseCAP M2**」を選択してください。複数のホットスポットが周囲にある場合は、ホットスポット名の下にある6桁の MAC アドレスで識別できます。

- Wi-Fi 接続を設定します。

「ネットワークをスキャン」をクリックし、Wi-Fi を選択してパスワードを入力します。または、すでにイーサネットケーブルや SIM カード（4G バージョンの場合）を使用している場合は「代わりにイーサネットを使用」をクリックします。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image9.png)

## **ステップ 3: SenseCAP M2 をブロックチェーンに追加する**
- ホットスポットの位置を設定して確認し、その後ホットスポットをブロックチェーンに追加します。

**注意:** SenseCAP M2 Light Hotspot の購入価格には、\$40 の Helium ネットワークアクティベーション料金と \$10 の最初の位置アサート料金（合計 \$50 相当）が含まれています。位置を設定し、必要に応じて別の位置に変更することができますが、ホットスポットを新しい位置に移動するたびに \$10 の位置アサート料金を再度支払う必要があります。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image10.png)![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image11.png)![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image12.png)



これで SenseCAP M2 をブロックチェーンに追加しました（インジケーターが白色に点滅します）。ただし、デバイスはまだ **Helium カバレッジを提供できません**。ホットスポットをアクティブ化するには、ステップ 4 を確認してください。

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

- これで、ホットスポットが Helium LoRaWAN のカバレッジを提供し始めます。デバイスのインジケーターが緑色に点灯します。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image19.png)

#### **SenseCAP M2 Light Hotspot ライセンスを購入する**

[![SenseCAP ライセンスの購入方法](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/purchase.png)](https://youtu.be/efkWlmRGWmU)

ライセンスの有効期限が切れた場合、[SenseCAP Hotspot Dashboard](https://status.sensecapmx.cloud/#/login?redirect=/dashboard) から直接購入し、引き換えカードを再度購入することなくデバイスに適用できます。

- ライセンスページにアクセスし、**Purchase License** ボタンをクリックします。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image20.png)

- ライセンスプランと数量を選択し、Checkout ボタンをクリックします。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image21.png)

- 注文を確認し、PayPal で支払いを行います。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image22.png)![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image23.png)

- その後、**License** リストでライセンスを確認できます。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image24.png)

- **Apply** をクリックし、アクティベートしたいホットスポットを選択します。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image25.png)
![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image26.png)

- これで、ホットスポットが Helium LoRaWAN のカバレッジを提供し始めます。デバイスのインジケーターが緑色に点灯します。

![](https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image27.png)