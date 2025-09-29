---
description: The Things Indoor Gateway
title: The Things Indoor Gateway
keywords:
- Sorftware Mender
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/The-Things-Indoor-Gateway
last_update:
  date: 2/1/2023
  author: jianjing Huang
---


![TTIG](https://files.seeedstudio.com/products/113990896/wiki/113990894_All-22.png)


<div style={{textAlign: 'center'}}>
    <a href="https://www.seeedstudio.com/The-Things-Indoor-Gateway-US-p-4710.html">
            <strong><span style={{color: '#FFFFFF', fontSize: '1.2em'}}> 今すぐ購入 🖱️</span></strong>
    </a>
</div>

## 製品紹介

[The Things Indoor Gateway](https://www.thethingsnetwork.org/docs/gateways/thethingsindoor/)は、高信頼性、高性能、そしてコスト効率に優れた[The Things Network](https://www.thethingsnetwork.org/)の製品です。これは、ESP8266 WiFi接続を内蔵したSX1308ベースの8チャンネルLoRaWANゲートウェイです。複数のバージョンと様々な電源コンセントが利用可能で、動的カバレッジを必要とする幅広いアプリケーションに対応します。The Things Networkによって設計されたIoTゲートウェイとして、TTNが顧客に提供するすべての優れた機能を享受できます。そしてもちろん、このゲートウェイは、世界中の多くの国にまたがって構築され、数百万人にカバレッジを提供する安全で協調的なモノのインターネットネットワークに接続することができます。多くの人がコミュニティで使用するツールは[TTN Mapper](https://ttnmapper.org/)です。したがって、このゲートウェイを使用して[The Network Console](https://console.thethingsnetwork.org/)にロードすることでこのネットワークの貢献者の一人になったり、他のTTNゲートウェイによって構築されたパブリックコミュニティネットワークを楽しむことができます！

The Things Indoor gatewayはLoRaWAN 1.0.3をサポートしているため、他のLoRaWANセンサーと互換性があります。Seeed Studioは、様々なタイプのワイヤレス環境センシングアプリケーションに焦点を当てた多くのセンサーを提供しています。CO2、土壌水分、温度などを測定する屋外シナリオ用のセンサーも必要な場合は、[SenseCAP sensors](https://www.seeedstudio.com/SenseCAP-c-1339.html)が最適な選択です。

The Things Indoor LoRaWAN WiFi Gateway、The Things Network Console、およびSenseCAP LoRaWANセンサーを使用することで、自宅、庭、オフィス、サプライチェーン、工場で独自のIoTシステムを簡単に構築できます。以下に提供される[ステップバイステップのインストール手順](https://www.thethingsnetwork.org/docs/gateways/thethingsindoor/Getting_Started_TTIG.pdf)に従うことで、5分以内にLoRaWANゲートウェイをセットアップし、IoTの旅を始めることができます！

![spec](https://files.seeedstudio.com/products/113990896/wiki/TTN%20gateway%20specification%20picture_page-0001.jpg)

## 特徴

* **簡単なインストール**: ESP8266経由の802.11 b/g/n WiFiバックホール；5分以内の簡単セットアップ
* **グローバル使用**: EU868、US915、AU915対応；LBT（Listen-Before-Talk）サポート
* **高度なソフトウェア**: 最先端のBasicStationプロトコルをサポート
* **優れた信頼性**: CE/FCC/IC/RCM/WPC/RoHS認証取得
* **便利**: 持ち運びに便利なコンパクト設計；複数の電源オプションで電源供給可能：壁コンセントとUSB Type C（900mA）の両方で動作。家庭用内蔵無指向性アンテナ
* **強力な機能**: SX1308ベースの8チャンネルLoRaWAN屋内ゲートウェイ

## 仕様

### LoRa

| パラメータ | 値 |
|-----------|-------|
| チップセット | Semtech SX1308 |
| チャンネル | 8チャンネル |
| 受信感度 | -140/-135 dBm (EU/US) |
| 送信電力 | 最大+27 dBM |
| LoRaWAN®仕様バージョン | V.1.0.3 |
| パケットフォワーダー | Basic stationプロトコル |

### Wi-Fi

| Parameter | Value |
|-----------|-------|
| SoC | ESP9266 |
| Mode | 802.11 b/g/n, クライアントモード |
| Tx Power | +20 dBm |
| Frequency Bands | 2.4 GHz |
| WAN/LAN ports | - |
| USB Port | USB Type-C (900 mA) |
| Security | WPA/WPA2 |
| Dimensions | 90*80*40 mm |
| Operating Temperature | 0-40℃ |
| Certification | CE/FC/IC/RCM/WPC/RoHS |


### その他の仕様

| Parameter | Value |
|-----------|-------|
| Interfaces | LEDインジケータ |
| Antenna Type | 内蔵 |
| Frequency Band | AU915 |

## Sources

* [Get Started The Things Indoor Gateway](https://www.thethingsnetwork.org/docs/gateways/thethingsindoor/Getting_Started_TTIG.pdf)
* [The Things Indoor Gateway Datasheet](https://www.thethingsnetwork.org/docs/gateways/thethingsindoor/TTIG_datasheet.pdf)
* [Getting started in for AWS](https://www.thethingsnetwork.org/docs/gateways/thethingsindoor/Getting_Started_TTIG_AWS.pdf)

## The Things Indoor Gateway と SenseCAP の開始方法

![combo](https://files.seeedstudio.com/products/113990896/wiki/connection%20diagram.png)

注意：SenseCAP について知らない場合は、簡単な紹介をします：
> Seeed 産業用 IoT（IIoT）製品シリーズの最初のローンチの中で、SenseCAP は無線環境センシングアプリケーションに焦点を当てています：スマート農業、精密農業、スマートシティなどです。ハードウェア製品（センサー、データロガー、ゲートウェイなど）、ソフトウェアサービス（SenseCAP ポータル、モバイルアプリ、オープンダッシュボード）、およびデバイスとデータ管理用の API で構成されています。SenseCAP は LoRa、2G、4G、NB-IoT などの異なる通信プロトコルをサポートしています。

詳細については、[SenseCAP Introduction](https://wiki.seeedstudio.com/ja/Industrial-IoT-SenseCAP-Introduction/) をクリックしてください。

### ステップ 1：TTIG ゲートウェイをアクティベートする

* リセットボタン（USB-C ポートの隣にあるゲートウェイ背面の小さなボタン）を 5 秒間押し、LED が数回緑-赤で素早く点滅するまで待ちます。
* SETUP（LED の隣にあるゲートウェイ上部のボタン）を 10 秒間押し続け、LED が赤で素早く点滅するまで待ちます。
* ゲートウェイは SSID が MINIHUB-xxxxxx の WiFi AP を公開します。ここで xxxxxx はゲートウェイ ID の最後の 6 桁です。
* このネットワークのパスワードは、WiFi PW の下にあるデバイスの背面パネルに印刷されています。
* その後、ブラウザで 192.168.4.1 にアクセスして WiFi 設定ページに入ります。

![192](https://files.seeedstudio.com/products/113990896/wiki/192.168.4.1.png)

* WiFi ネットワークを選択し、クローズドネットワークの場合はパスワードを入力します。
* 「Save and Reboot」オプションを選択します。
* 設定が正しい場合：
  * ゲートウェイはこのネットワークに接続している間、数秒間緑で点滅します。
  * その後、CUPS エンドポイントに接続し、LNS トラフィックエンドポイントに接続するために必要な情報を取得している間、数秒間緑-赤で点滅します。
* 設定が成功した場合、LED は緑の点灯状態になり、ゲートウェイが LoRaWAN ネットワークに接続され、パケットを処理する準備ができていることを意味します。

### ステップ 2：TTN コンソールでのゲートウェイ登録

TTN ウェブサイトにアクセス：[https://www.thethingsnetwork.org](https://www.thethingsnetwork.org) でアカウントを作成し、「Console」にアクセスして最初に「Gateway」をクリックします。

![2.1](https://files.seeedstudio.com/products/113990896/wiki/s2.1.png)

ゲートウェイを登録します：

![2.2](https://files.seeedstudio.com/products/113990896/wiki/s2.2.png)

1. Gateway EUI：「Add Network」ページ 192.168.4.1 に表示されています

![2.3](https://files.seeedstudio.com/products/113990896/wiki/s2.3.png)

2. Frequency Plan：ゲートウェイのラベルを確認してください。
3. Router：適切なルーターを選択してください。
4. Register：ゲートウェイステータスが接続済みと表示され、登録が成功したことを示します

![2.4](https://files.seeedstudio.com/products/113990896/wiki/s2.4.png)

### ステップ 3：SenseCAP センサーを TTN コンソールに追加する

#### 1. Device EUI、Device Code、App Key、App EUI を取得する

* Device EUI と Device Code は SenseCAP 製品ラベルに記載されています。

![3.1](https://files.seeedstudio.com/products/113990896/wiki/s3.1.png)

* SenseCAP センサーデバイスの AppEUI と AppKey は Seeed によってデバイスにフラッシュされています。HTTP API を使用して App EUI と App Key を取得します。ブラウザを使用して HTTP GET リクエストを発行できます。

![3.2](https://files.seeedstudio.com/products/113990896/wiki/s3.2.png)

API で、Device EUI と Device Code をそれぞれ自分の Device EUI と Device Code に置き換えてください。そうすると、App EUI と App Key を示す以下のレスポンスがウェブページに表示されます：

![3.3](https://files.seeedstudio.com/products/113990896/wiki/s3.3.png)

#### 2. アプリケーションと AppEUI を追加する

![3.4](https://files.seeedstudio.com/products/113990896/wiki/s2.1.png)

1. 「add application」ページに入る

![3.5](https://files.seeedstudio.com/products/113990896/wiki/s3.5.png)

* Application ID：一意の名前を入力します。
* Description：説明を入力します。
* Handler registration：ゲートウェイルーターと同じハンドラーを選択します。
* Add Application を選択して続行します。

![3.6](https://files.seeedstudio.com/products/113990896/wiki/s3.6.png)

![3.7](https://files.seeedstudio.com/products/113990896/wiki/s3.7.png)

* Application → Application EUIS → Manage EUIs。
* Add EUI
* 前のステップ（ステップ 3.1）で取得したノードの AppEui を入力します。
* Add EUI

![3.8](https://files.seeedstudio.com/products/113990896/wiki/s3.8.png)

2. TTN コンソールでセンサーノードをデバイスとして追加する

* Application → Device → register device

![3.9](https://files.seeedstudio.com/products/113990896/wiki/s3.9.png)

![3.10](https://files.seeedstudio.com/products/113990896/wiki/s3.10.png)

* Device ID：一意の名前を入力します。
* Device EUI：前のステップ（ステップ 3.1）で取得したノードの Device EUI を入力します。
* App Key：前のステップで取得したノードの App Key を入力します。
* App EUI：ノードの App EUI を選択します。
* Register

### ステップ 4：SenseCAP センサーをアクティベートする

#### 電源オン

電源スイッチはデバイス内部に隠されています。センサーを設置する前に、デバイスを開いて電源をオンにしてください。以下がステップバイステップの手順です：

* キャップを反時計回りに回してセンサープローブを緩めます。このプロセスを簡単にするために白いキャップオープナーを使用してください。以下の画像は TH センサーを例として使用しており、他のすべての SenseCAP センサーにも適用されます。

![4.1](https://files.seeedstudio.com/products/113990896/wiki/s4.1.png)

* デバイスを開いた後、スイッチを「ON」に切り替えると、右下角の LED が点滅し、電源がオンになったことを示します。約 10 秒待つと、LED が 2 秒間素早く点滅し、デバイスがネットワークに接続されたことを示します。

![4.2](https://files.seeedstudio.com/products/113990896/wiki/s4.2.png)

* デバイスがネットワークに接続された後、時計回りに回転させてセンサープローブをセンサーノードコントローラーに再接続してください。下の画像に示すように、両方の部品のラベルが整列していることを確認してください。そうでなければ、2つの部品が適切に機能するように接続されず、データがアップロードされません。

* TTN コンソールでセンサーノードの接続状態を確認してください：ステータスが緑色になると、正常に接続されています。

![4.3](https://files.seeedstudio.com/products/113990896/wiki/s4.3.png)

### ステップ5：データ確認

データページでは、データパッケージがアップロードされます。ペイロードの形式については、デコーディングセクションを参照してください。
ここでは、SenseCAP LoRaWAN土壌水分・温度センサーとSenseCAP LoRaWAN CO2センサーによって正常に取得されたデータを示しています：

![4.4](https://files.seeedstudio.com/products/113990896/wiki/soil%20data%20board.png)

![4.5](https://files.seeedstudio.com/products/113990896/wiki/co2%20data%20board.png)
