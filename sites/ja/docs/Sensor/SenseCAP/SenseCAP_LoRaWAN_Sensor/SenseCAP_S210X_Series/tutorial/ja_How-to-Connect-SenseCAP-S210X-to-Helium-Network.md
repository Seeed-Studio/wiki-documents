---
description: Heliumネットワークに接続する
title: Heliumネットワークに接続する
keywords:
- SenseCAP Sensor_Probe&Accessories
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/How-to-Connect-SenseCAP-S210X-to-Helium-Network
last_update:
  date: 11/26/2023
  author: Leo
---

# Heliumネットワークに接続する

## Helium Console

Helium ConsoleはHelium Foundationがホストするウェブベースのデバイス管理ツールで、開発者がHeliumネットワーク上でデバイスを登録、認証、管理することができます。デバイス管理に加えて、ConsoleはIntegrationsと呼ばれる事前構築された接続を提供し、HTTPsやMQTT経由でデバイスデータをルーティングしたり、AWS IoTなどのクラウドサービスに直接接続したりできます。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/003.png)

## Heliumネットワークに接続する

### 新しいアカウントを作成する

&lt;https://console.helium.com/&gt; にアクセスして、アカウントを登録してください。

### センサーをセットアップする

(1) SenseCAP Mateアプリを開く

(2) ボタンを3秒間長押しすると、LEDが1秒間隔で点滅します。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/004.png)

(3) 「Setup」ボタンをクリックしてBluetoothをオンにし、「Scan」をクリックしてセンサーのBluetoothのスキャンを開始してください。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/005.png)

(4) S/N（ラベル）でセンサーを選択します。その後、入力するとセンサーの基本情報が表示されます。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/006.png)       ![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/007.png)

### SenseCAP Mateアプリでセンサーの周波数を設定する

ゲートウェイの周波数帯域に基づいて、対応する周波数帯域を設定します。

(1) 「Setting」をクリックし、プラットフォームを「**Helium**」に選択します。

![wecom-temp-114185-2959d45aab4ab735f22b5fbf68a22c91](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/008.png)     ![wecom-temp-88582-e758abc6d2f73925e20290cddfebc421](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/009.png)

(2) 周波数プランを選択します。ゲートウェイがUS915の場合、センサーをUS915に設定します。

(3) 「Send」ボタンをクリックして、設定をセンサーに送信し、有効にします。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0010.png)

(4) 「Home」ボタンをクリックすると、アプリはBluetooth接続を切断します。

その後、センサーが再起動します。

(5) デバイスがBluetoothから切断されると、LEDが**15秒間**点灯し、その後**呼吸ライト**のように点滅します。

(6) ネットワークへの参加が成功すると、LEDが**2秒間高速点滅**します。

# Helium Console設定

## 新しいデバイスを追加する

(1) 「Devices」→「Add New Device」をクリック

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0011.png)

(2) Device EUI、App EUI、App Keyを入力します：詳細はSenseCAP mateアプリを参照してください。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0012.png)

(3) デバイスを保存します。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0013.png)

(4) 新しいラベルを追加し、そのラベルをデバイスに追加します。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0014.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0015.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0016.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0017.png)

## Heliumでデータを確認する

(1) デバイス詳細ページに入り、REAL TIME PACKETSを見つけます。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0018.png)

(2) センサーの電源を入れると、生データが表示されます。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0019.png)

## HeliumからDatacakeにデータをアップロードする

### Datacakeアカウントを作成する

(1) 新しいアカウントを作成します。ウェブサイト：&lt;https://datacake.co/&gt;

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0020.png)

(2) 「Edit Profile」->「API」をクリックし、APIトークンを取得します。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0021.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0022.png)

### Helium Consoleで新しいIntegrationを追加する

(1) 「Integrations」->「Add New Integration」->「Datacake」をクリックします。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0023.png)

(2) Datacakeトークン（[このセクション](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/#_Create_a_Datacake)を参照）を入力し、integrationに名前を付けます。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0024.png)

### HeliumでFlowsを設定する

(1) 「Flows」をクリックします。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0025.png)

(2) Labelを空白の場所にドラッグします。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0026.png)

(3) Integrationを空白の場所にドラッグします。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0027.png)

(4) 2つのブロックを接続します。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0028.png)

(5) 変更を保存します。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0029.png)

### DatacakeでSensorを追加する

(1) Datacakeダッシュボードに戻り、「Device」->「Add Device」をクリックします。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0030.png)

(2) 「Seeed」を検索します。いくつかのセンサーを直接選択できます。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0031.png)

(3) Sensor Templateを選択します。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0032.png)

(4) 「Helium」を選択します。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0033.png)

(5) Device EUIと名前を入力します。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0034.png)

(6) プランを選択してデバイスを追加します。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0035.png)

### Datacakeからデータをチェックする

Debugボタンをクリックすると、デバッグログが表示されます。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0036.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0037.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/0038.png)
