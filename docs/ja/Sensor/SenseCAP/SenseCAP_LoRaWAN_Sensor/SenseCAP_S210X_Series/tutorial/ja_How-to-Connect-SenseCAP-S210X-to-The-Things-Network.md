---
description: The Things Networkに接続する
title: The Things Networkに接続する
keywords:
- SenseCAP Sensor_Probe&Accessories
image: https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/003.webp
slug: /ja/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/How-to-Connect-SenseCAP-S210X-to-The-Things-Network
last_update:
  date: 05/15/2025
  author: Leo
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# The Things Networkに接続する
 
## The Things Network	
The Things Stackは、オープンソースのコアを基盤としたエンタープライズグレードのLoRaWANネットワークサーバーです。The Things Stackを使用すると、独自のハードウェアまたはクラウド上でLoRaWANネットワークを構築および管理できます。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/003.png)




## The Things Networkに接続する 
   ### 新しいアカウントを作成する
TTNウェブサイト: [https://www.thethingsnetwork.org/](https://www.thethingsnetwork.org/)
### センサーをセットアップする
(1) SenseCAP Mateアプリを開きます。  
(2) ボタンを押し続けて3秒間保持すると、LEDが1秒間隔で点滅します。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/004.png)

(3) 「Setup」ボタンをクリックしてBluetoothをオンにし、「Scan」をクリックしてセンサーのBluetoothをスキャンします。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/005.png)

(4) S/N（ラベル）でセンサーを選択します。その後、センサーの基本情報が表示されます。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/006.png)       
![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/007.png)
### SenseCAP Mateアプリを使用してセンサーの周波数を設定する
ゲートウェイの周波数帯域に基づいて対応する周波数帯域を設定します。

(1) 「Setting」をクリックし、プラットフォームとして「The Things Network」を選択します。

![wecom-temp-81208-6d8da19d41a879a504ad54c71bf4961c](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/008.png) 

(2) 周波数プランを選択します。ゲートウェイがUS915の場合、センサーをUS915に設定します。

![wecom-temp-73569-56429bfa7490c37c5ec3c5b2fc8ba435](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/009.png)

(3) デバイスはデフォルトでOTAAを使用してLoRaWANネットワークに参加します。そのため、ここでデバイスEUI、App EUI、およびAPP Keyを設定できます。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0010.png)

|**パラメータ**|**タイプ**|
| - | - |
|Device EUI|16進数、0 ~ F|
|App EUI|16進数、0 ~ F|
|App Key|32進数、0 ~ F|
(4) パケットポリシーを設定します。センサーのアップリンクパケット戦略には3つのモードがあります。

|**パラメータ**|**説明**|
| - | - |
|2C+1N (デフォルト)|2C+1N（2つの確認パケットと1つの非確認パケット）は最適な戦略であり、このモードはパケット損失率を最小限に抑えます。ただし、デバイスはTTNで最も多くのデータパケット、またはHeliumネットワークでのデータクレジットを消費します。|
|1C|1C（1つの確認パケット）デバイスはサーバーから1つの確認パケットを受信した後にスリープします。|
|1N|1N（1つの非確認パケット）デバイスはパケットを送信した後、サーバーがデータを受信したかどうかに関係なくスリープを開始します。|

(5) 「Send」ボタンをクリックして、設定をセンサーに送信し、設定を有効にします。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0011.png)

(6) 「Home」ボタンをクリックすると、アプリはBluetooth接続を切断します。

その後、センサーが再起動します。

(7) デバイスがBluetoothから切断されると、LEDが**5秒間**点灯し、その後**呼吸ライト**のように点滅します。

## TTN設定
### TTNでのゲートウェイ登録
実際の情報に基づいて、TTNコンソールでゲートウェイを作成します。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0012.png)

### アプリケーションの作成
TTNコンソールでアプリケーションを作成します。アプリケーション内では、エンドデバイスを登録してネットワークデータを管理できます。デバイス群を設定した後、さまざまな統合オプションを使用して、関連データを外部サービスに渡すことができます。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0013.png)

## センサーをTTNコンソールに追加
(1) 作成したアプリケーションを選択し、「Register end device」をクリックしてデバイスを追加します。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0014.png)

(2) LoRaWAN デバイスリポジトリ内でエンドデバイスを選択します。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0015.png)

その後、ブランドに基づいて以下のような項目を設定します。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0016.png)

- エンドデバイスブランド: SenseCAP を選択します。
- モデル: センサーモデルを選択します。（該当モデルがない場合は手動で追加）
- ハードウェア/ファームウェアバージョン: 通常は最新バージョンを選択します。
- プロファイル（地域）/周波数プラン: SenseCAP Mateアプリから取得します。

|**センサー周波数**|**一般名**|**説明**|
| - | - | - |
|EU863-870|EU868|ヨーロッパ 863-870 MHz (RX2用SF9 - 推奨)|
|US902-928|US915|アメリカ合衆国 902-928 MHz, FSB 2 (TTNで使用)|
|AU915-928|AU915|オーストラリア 915-928 MHz, FSB 2 (TTNで使用)|
|KR920-923|KR920|--------|
|IN865-867|IN865|--------|
|AS923|AS923-1|アジア 920-923 MHz|
||AS923-2||
異なる国やLoRaWANネットワークサーバーでは異なる周波数プランが使用されます。

Heliumネットワークについては、以下を参照してください：

*https://docs.helium.com/lorawan-on-helium/frequency-plans*	

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0017.png)

(3) 「プロビジョニング情報」を設定します。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0018.png)

- JoinEUI: **APP EUI**を意味し、SenseCAP Mateアプリから取得できます。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0019.png)

- デバイスEUI/アプリキー: SenseCAP Mateアプリの設定ページから取得します。以下の画像のように表示されます。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0020.png)

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0021.png)

(4) エンドデバイスを登録します。

上記の項目を完了したら、「Register end device」をクリックして変更を保存します。

:::tip 注意
ネットワークへの参加に成功すると、LEDが**2秒間高速で点滅**します。
:::

## TTNコンソールでデータを確認
データページで、データパッケージがアップロードされていることを確認します。ペイロードのフォーマットについては、「ペイロードデコード」のセクションを参照してください。

![](https://files.seeedstudio.com/wiki/SenseCAPS210X/TTN_Network/0022.png)