---
description: Helium ネットワークへの接続
title: Helium ネットワークへの接続
keywords:
- SenseCAP Sensor_Probe&Accessories
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/How-to-Connect-SenseCAP-S210X-to-Helium-Network
last_update:
  date: 05/15/2025
  author: Leo
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Helium ネットワークへの接続

## Helium コンソール

Helium コンソールは、Helium Foundation がホストするウェブベースのデバイス管理ツールで、開発者が Helium ネットワーク上でデバイスを登録、認証、管理することを可能にします。デバイス管理に加えて、コンソールは HTTPs や MQTT 経由、または AWS IoT のようなクラウドサービスに直接デバイスデータをルーティングするための事前構築された接続（インテグレーション）を提供します。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/003.png)

## Helium ネットワークへの接続
### 新しいアカウントを作成する
[https://console.helium.com/](https://console.helium.com/) にアクセスし、アカウントを登録してください。

### センサーのセットアップ
1. SenseCAP Mate アプリを開きます。

2. ボタンを押して3秒間保持すると、LEDが1秒間隔で点滅します。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/004.png)

3. 「Setup」ボタンをクリックして Bluetooth をオンにし、「Scan」をクリックしてセンサーの Bluetooth をスキャンします。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/005.png)

4. S/N（ラベル）でセンサーを選択します。その後、センサーの基本情報が表示されます。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/006.png)       ![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/007.png)

### SenseCAP Mate アプリを使用してセンサーの周波数を設定する
ゲートウェイの周波数帯に基づいて対応する周波数帯を設定します。

1. 「Setting」をクリックし、プラットフォームを「**Helium**」に選択します。

![wecom-temp-114185-2959d45aab4ab735f22b5fbf68a22c91](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/008.png)     ![wecom-temp-88582-e758abc6d2f73925e20290cddfebc421](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/009.png)

2. 周波数プランを選択します。ゲートウェイが US915 の場合、センサーを US915 に設定します。

3. 「Send」ボタンをクリックして設定をセンサーに送信し、設定を有効にします。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0010.png)

4. 「Home」ボタンをクリックすると、アプリは Bluetooth 接続を切断します。

その後、センサーが再起動します。

5. デバイスが Bluetooth から切断されると、LED が**15秒間点灯**し、その後**呼吸ライト**のように点滅します。

6. ネットワークへの参加に成功すると、LED が**2秒間高速点滅**します。

# Helium コンソール設定
## 新しいデバイスを追加する
1. 「Devices」→「Add New Device」をクリックします。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0011.png)

2. Device EUI、App EUI、App Key を入力します。詳細は SenseCAP Mate アプリを参照してください。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0012.png)

3. デバイスを保存します。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0013.png)

4. 新しいラベルを追加し、そのラベルをデバイスに追加します。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0014.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0015.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0016.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0017.png)

## Heliumでデータを確認する
(1) デバイス詳細ページに入り、REAL TIME PACKETSを見つけます。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0018.png)

(2) センサーの電源を入れると、生データが表示されます。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0019.png)

## HeliumからDatacakeへのデータアップロード
### Datacakeアカウントを作成する
(1) 新しいアカウントを作成します。ウェブサイト: [https://datacake.co/](https://datacake.co/)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0020.png)

(2) 「Edit Profile」 -> 「API」 -> 「APIトークンを取得」をクリックします。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0021.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0022.png)

### Heliumコンソールで新しい統合を追加する
(1) 「Integrations」 -> 「Add New Integration」 -> 「Datacake」をクリックします。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0023.png)

(2) Datacakeトークンを入力します（[該当セクション](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/#_Create_a_Datacake)を参照）し、統合に名前を付けます。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0024.png)

### Heliumでフローを設定する
(1) 「Flows」をクリックします。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0025.png)

(2) ラベルを空白の場所にドラッグします。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0026.png)

(3) 統合を空白の場所にドラッグします。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0027.png)

(4) 2つのブロックを接続します。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0028.png)

(5) 変更を保存します。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0029.png)

### Datacakeでセンサーを追加する
(1) DatacakeのDashboardに戻り、「Device」 -> 「Add Device」をクリックします。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0030.png)

(2) 「Seeed」を検索し、いくつかのセンサーを直接選択できます。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0031.png)

(3) センサーのテンプレートを選択します。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0032.png)

(4) 「Helium」を選択します。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0033.png)

(5) デバイスEUIと名前を入力します。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0034.png)

(6) プランを選択し、デバイスを追加します。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0035.png)

### Datacakeでデータを確認する
デバッグボタンをクリックすると、デバッグログが表示されます。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0036.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0037.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0038.png)