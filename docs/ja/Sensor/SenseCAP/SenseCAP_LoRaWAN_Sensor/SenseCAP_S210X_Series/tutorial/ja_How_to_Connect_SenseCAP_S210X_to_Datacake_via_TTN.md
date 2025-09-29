---
description: TTN経由でDatacakeに接続する
title: TTN経由でDatacakeに接続する
keywords:
- SenseCAP Sensor_Probe&Accessories
image: https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image1.webp
slug: /ja/how_to_connect_sensecap_s210x_to_datacake_via_ttn
last_update:
  date: 6/10/2025
  author: Zeno
---

# TTN経由でDatacakeに接続する

## Datacake
Datacakeは多機能なローコードIoTプラットフォームです。コーディングなしで誰でも迅速にカスタムIoTアプリケーションを構築でき、ワンクリックでホワイトラベルソリューションに即座に変換できます。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image1.webp)

## ステップ1: TTNに接続する
「[S210XセンサーをThe Things Networkに接続する方法](https://files.seeedstudio.com/products/SenseCAP/S210X/How%20to%20Connect%20SenseCAP%20S210X%20to%20The%20Things%20Network.pdf)」を参照してください。

**注意:** プラットフォーム設定では**「Other Platform」**を選択してください。

## ステップ2: TTNからDatacakeにデータをアップロードする

(1)新しいアカウントを作成します。ウェブサイト: `https://datacake.co/`  
(2)**「Devices」 -> 「Add Device」**をクリックします

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image2.png)

(3)**「LoranWAN」**を選択します

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image3.png)

(4)**「New Product from template」**を選択し、**「Seeed」**を検索して、製品を選択します

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image4.png)

(5)**「The Things Stack V3」**を選択し、**「Next」**をクリックします

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image5.png)

(6)**「DEVEUI」**と**「NAME」**を入力し、**「Next」**をクリックします

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image6.png)

-   **「Free」**を選択します  
-   **「Add 1 device」**をクリックします

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image7.png)

(7)後続のWebhook認証用のAPIキーを作成します
-   Datacakeワークスペースに移動し、サイドバーから「Members」を選択します。  
-   タブバーから「API Users」を選択し、API Usersタブに切り替えます。 
-   右上の「Add API User」ボタンをクリックします

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image8.png)

-   APIユーザーの名前を入力します
-   次に、ワークスペース権限リストから「Devices」を選択します
-   「Add Permission for all Devices in Workspace」をクリックします

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image9.png)

-   「Can record measurements」を選択します
-   「Save」を押してトークンを作成します

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image10.png)

-   「Copy」をクリックします

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image11.png)

このAPIトークンは、ワークスペース内のすべてのデバイスに対して有効です。新しいデバイスを作成するたびに、このトークンは自動的にそのデバイスで動作します。

選択したデバイスのみのトークンを作成したい場合は、デバイスに移動してそこからトークンを選択できます。ただし、ここでは「All devices in workspace」権限を除外する必要があります。

(8)TTNでインテグレーションを作成します
-   TTNアプリケーションのサイドバーで「Webhooks」を選択します
-   「Add webhook」を選択します

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image12.png)

-   「Datacake」を選択します

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image13.png)

-   Webhook IDの名前を入力します
-   Datacakeからコピーしたトークンを入力します
-   「Create Datacake webhook」を選択します

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image14.png)

(9)ダウンリンクを設定します  
TTIアプリケーションでダウンリンクをキューに入れるには、Datacakeデバイスに追加の詳細を提供する必要があります。設定を行うには、対応するデバイスのLoRaWAN設定に移動してください。
-   Datacakeに戻ります
-   「configuration」を選択し、少し下にスクロールします

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image15.png)

-   「Change」を選択します

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image16.png)

-   ここで、TTNコンソールで見つけることができる情報を使用して、4つのテキストボックスに入力する必要があります。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image17.png)

-   TTS Device IDについては、これはTTNアプリケーション内のデバイスのIDです。ここで見つけることができます：

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image18.png)

-   TTI Server URLについては、これは公開されているTTNインスタンスのURLです。パブリックTTNv3の場合：`eu1.cloud.thethings.network`

-   TTI App IDについては、これはTTN上のアプリケーションのIDです：

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image19.png)

-   TTI APIキーを作成します
-   「API keys」を選択し、「Add APIkey」をクリックします

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image20.png)

-   名前を入力します
-   ダウンリンクのキューイングを許可する対応する権限を設定します
-   「Create API key」をクリックします

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image21.png)

-   APIキーを作成すると、通知が表示されます
-   キーは一度だけ表示されるため、クリップボードにコピーしてください！
-   このキーをDatacakeのデバイス設定に貼り付けます

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image22.png)

-   最終設定：

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image23.png)

**注意：「Update」をクリックすることを忘れないでください**

-   ダウンリンクの設定が正常に完了しました

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image24.png)

(10)ペイロードデコーダーを追加します  
ペイロードデコーダーをここにコピーします：

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Datacake/image25.png)

GitHubで[SenseCAP-Decoder](https://github.com/Seeed-Solution/SenseCAP-Decoder/tree/main)も見つけることができます。