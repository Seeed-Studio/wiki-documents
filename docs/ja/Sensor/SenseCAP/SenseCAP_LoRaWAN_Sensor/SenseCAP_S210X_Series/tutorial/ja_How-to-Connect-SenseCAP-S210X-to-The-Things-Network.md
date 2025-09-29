---
description: The Things Networkに接続する
title: The Things Networkに接続する
keywords:
- SenseCAP Sensor_Probe&Accessories
image: https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/003.webp
slug: /ja/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/How-to-Connect-SenseCAP-S210X-to-The-Things-Network
last_update:
  date: 11/25/2024
  author: Leo
---

# The Things Networkに接続する

## The Things Network

The Things Stackは、オープンソースコアをベースに構築されたエンタープライズグレードのLoRaWANネットワークサーバーです。The Things Stackを使用すると、独自のハードウェアまたはクラウド上でLoRaWANネットワークを構築・管理できます。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/003.png)

## The Things Networkに接続する

### 新しいアカウントを作成する

TTN ウェブサイト: &lt;https://www.thethingsnetwork.org/&gt;

### センサーのセットアップ

(1) SenseCAP Mateアプリを開く

(2) ボタンを3秒間長押しすると、LEDが1秒間隔で点滅します。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/004.png)

(3) 「Setup」ボタンをクリックしてBluetoothをオンにし、「Scan」をクリックしてセンサーのBluetoothのスキャンを開始してください。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/005.png)

(4) S/N（ラベル）でセンサーを選択します。その後、入力するとセンサーの基本情報が表示されます。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/006.png)
![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/007.png)

### SenseCAP Mateアプリでセンサーの周波数を設定する

ゲートウェイの周波数帯域に基づいて、対応する周波数帯域を設定します。

(1) 「Setting」をクリックし、プラットフォームを「The Things Network」に選択します。

![wecom-temp-81208-6d8da19d41a879a504ad54c71bf4961c](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/008.png)

(2) 周波数プランを選択します。ゲートウェイがUS915の場合、センサーをUS915に設定してください。

![wecom-temp-73569-56429bfa7490c37c5ec3c5b2fc8ba435](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/009.png)

(3) デバイスはデフォルトでOTAAを使用してLoRaWANネットワークに参加します。そのため、ここでDevice EUI、App EUI、APP Keyを設定できます。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0010.png)

|**パラメータ**|**タイプ**|
| - | - |
|Device EUI|16進数、0～F|
|App EUI|16進数、0～F|
|App Key|32進数、0～F|

(4) パケットポリシーを設定します。センサーアップリンクパケット戦略には3つのモードがあります。

|**パラメータ**|**説明**|
| - | - |
|2C+1N (デフォルト)|2C+1N (2つの確認パケットと1つの非確認パケット) は最適な戦略で、このモードはパケット損失率を最小化できますが、デバイスはTTNで最も多くのデータパケットを消費するか、Heliumネットワークでデータクレジットを消費します。|
|1C|1C (1つの確認) デバイスはサーバーから1つの受信確認パケットを取得した後にスリープします。|
|1N|1N (1つの非確認) デバイスはパケットを送信するだけで、その後スリープを開始し、サーバーがデータを受信したかどうかは関係ありません。|

(5) 「Send」ボタンをクリックして、設定をセンサーに送信し、有効にします。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0011.png)

(6) 「Home」ボタンをクリックすると、アプリはBluetoothの接続を切断します。

その後、センサーは再起動します。

(7) デバイスがBluetoothから切断されると、LEDが**5秒間**点灯し、その後**呼吸ライト**として点滅します。

## TTNの設定

### TTNでのゲートウェイ登録

実際の情報に基づいてTTNコンソールでゲートウェイを作成します。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0012.png)

### アプリケーションの作成

TTNコンソールでアプリケーションを作成します。アプリケーション内では、エンドデバイスとそのネットワークデータを登録・管理できます。デバイスフリートを設定した後、多数の統合オプションの1つを使用して、関連データを外部サービスに渡します。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0013.png)

## TTNコンソールへのセンサー追加

(1) 作成したアプリケーションを選択し、「Register end device」をクリックしてエンドデバイスを追加します。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0014.png)

(2) LoRaWANデバイスリポジトリでエンドデバイスを選択します。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0015.png)

その後、ブランドに基づいて、以下のような項目を設定します。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0016.png)

- End device brand: SenseCAPを選択します。
- Model: センサーモデルを選択します。（ない場合は手動追加を使用）
- Hardware / Firmware Version: 通常、最新のものを選択します。
- Profile(Region)/Frequency plan: SenseCAP Mate Appから取得します

|**センサー周波数**|**一般名**|**説明**|
| - | - | - |
|EU863-870|EU868|ヨーロッパ 863-870 MHz（RX2にSF9 - 推奨）|
|US902-928|US915|アメリカ合衆国 902-928 MHz、FSB 2（TTNで使用）|
|AU915-928|AU915|オーストラリア 915-928 MHz、FSB 2（TTNで使用）|
|KR920-923|KR920|--------|
|IN865-867|IN865|--------|
|AS923|AS923-1|アジア 920-923 MHZ|
||AS923-2||

異なる国とLoRaWANネットワークサーバーは異なる周波数プランを使用します。

Heliumネットワークについては、以下を参照してください：

[Helium Frequency Plans](https://docs.helium.com/lorawan-on-helium/frequency-plans)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0017.png)

(3) 'Provisioning information'を設定します。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0018.png)

- JoinEUI: これは**APP EUI**を意味し、SenseCAP Mate Appから取得できます。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0019.png)

- Device EUI/ App Key: SenseCAP Mate Appの設定ページから取得します。下の画像のようになります。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0020.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0021.png)

(4) エンドデバイスを登録します。

上記の項目を完了したら、「Register end device」をクリックして変更を保存します。

:::tip note
ネットワークへの参加が成功すると、LEDが**2秒間高速点滅**します。
:::

## TTNコンソールでデータを確認

Dataページでは、データパッケージがアップロードされています。ペイロードの形式については、Payload Decodingのセクションを参照してください。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0022.png)
