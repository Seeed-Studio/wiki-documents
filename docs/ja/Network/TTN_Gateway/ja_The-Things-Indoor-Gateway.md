---
description: The Things Indoor Gateway
title: The Things Indoor Gateway
keywords:
- ソフトウェア Mender
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/The-Things-Indoor-Gateway
last_update:
  date: 05/15/2025
  author: jianjing Huang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

![TTIG](https://files.seeedstudio.com/products/113990896/wiki/113990894_All-22.png)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/The-Things-Indoor-Gateway-US-p-4710.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    </a>
</div>

## 製品紹介

[The Things Indoor Gateway](https://www.thethingsnetwork.org/docs/gateways/thethingsindoor/) は、高信頼性、高性能、そしてコストパフォーマンスに優れた [The Things Network](https://www.thethingsnetwork.org/) 製品です。SX1308 をベースにした 8 チャネルの LoRaWAN ゲートウェイで、内蔵の ESP8266 WiFi 接続機能を備えています。複数のバージョンとさまざまな電源プラグが利用可能で、動的なカバレッジを必要とする幅広いアプリケーションに対応します。The Things Network によって設計された IoT ゲートウェイとして、TTN が提供するすべての優れた機能を享受できます。そしてもちろん、このゲートウェイは、世界中の多くの国々に広がり、何百万人もの人々にカバレッジを提供する安全で協力的な IoT ネットワークに接続することができます。多くの人々がコミュニティで利用しているツールが [TTN Mapper](https://ttnmapper.org/) です。そのため、このゲートウェイを使用して [The Network Console](https://console.thethingsnetwork.org/) に登録し、このネットワークの貢献者の一人になることができます。または、他の TTN ゲートウェイによって構築された公共コミュニティネットワークを利用することも可能です。

The Things Indoor Gateway は LoRaWAN 1.0.3 をサポートしており、他の LoRaWAN センサーとも互換性があります。Seeed Studio は、さまざまな種類の無線環境センシングアプリケーションに焦点を当てた多くのセンサーを提供しています。屋外シナリオで CO2、土壌水分、温度などを測定するセンサーが必要な場合は、[SenseCAP センサー](https://www.seeedstudio.com/SenseCAP-c-1339.html) が最適な選択肢です。

The Things Indoor LoRaWAN WiFi Gateway、The Things Network Console、そして SenseCAP LoRaWAN センサーを使用することで、自宅、庭、オフィス、サプライチェーン、工場などで簡単に独自の IoT システムを構築できます。以下の [ステップバイステップのインストール手順](https://www.thethingsnetwork.org/docs/gateways/thethingsindoor/Getting_Started_TTIG.pdf) に従えば、5 分以内に LoRaWAN ゲートウェイをセットアップし、IoT の旅を始めることができます！

![spec](https://files.seeedstudio.com/products/113990896/wiki/TTN%20gateway%20specification%20picture_page-0001.jpg)

## 特徴

* **簡単なインストール**: ESP8266 を介した 802.11 b/g/n WiFi バックホール; 5 分以内で簡単にセットアップ可能
* **グローバル対応**: EU868、US915、AU915 に対応; LBT (Listen-Before-Talk) をサポート
* **高度なソフトウェア**: 最新の BasicStation プロトコルをサポート
* **高い信頼性**: CE/FCC/IC/RCM/WPC/RoHS 認証取得済み
* **便利さ**: 持ち運びに便利なコンパクト設計; 複数の電源オプションで動作可能: 壁プラグと USB Type-C (900mA) の両方に対応。家庭用の全方向性アンテナを内蔵
* **強力な性能**: SX1308 をベースにした 8 チャネル LoRaWAN 室内ゲートウェイ

## 仕様
<!-- 
<style type="text/css" xml="space">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:2px 20px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:2px 20px;word-break:normal;}
.tg .tg-2egc{background-color:#efefef;border-color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-gmm0{background-color:#9b9b9b;border-color:#ffffff;color:#ffffff;text-align:left;vertical-align:top}
</style> -->
<table class="tg">
<thead>
<tr><th class="tg-gmm0" colspan="2">LoRa</th></tr>
</thead>
<tbody>
<tr>
<td class="tg-2egc">チップセット</td>
<td class="tg-2egc">Semtech SX1308</td>
</tr>
<tr>
<td class="tg-2egc">チャンネル</td>
<td class="tg-2egc">8 チャンネル</td>
</tr>
<tr>
<td class="tg-2egc">受信感度</td>
<td class="tg-2egc">-140/-135 dBm (EU/US)</td>
</tr>
<tr>
<td class="tg-2egc">送信出力</td>
<td class="tg-2egc">最大 +27 dBM</td>
</tr>
<tr>
<td class="tg-2egc">LoRaWAN® 規格バージョン</td>
<td class="tg-2egc">V.1.0.3</td>
</tr>
<tr>
<td class="tg-2egc">パケットフォワーダー</td>
<td class="tg-2egc">Basic station プロトコル</td>
</tr>
</tbody>
<thead>
<tr><th class="tg-gmm0" colspan="2">Wi-Fi</th></tr>
</thead>
<tbody>
<tr>
<td class="tg-2egc">SoC</td>
<td class="tg-2egc">ESP9266</td>
</tr>
<tr>
<td class="tg-2egc">モード</td>
<td class="tg-2egc">802.11 b/g/n, クライアントモード</td>
</tr>
<tr>
<td class="tg-2egc">送信出力</td>
<td class="tg-2egc">+20 dBm</td>
</tr>
<tr>
<td class="tg-2egc">周波数帯域</td>
<td class="tg-2egc">2.4 GHz</td>
</tr>
<tr>
<td class="tg-2egc">WAN/LAN ポート</td>
<td class="tg-2egc">-</td>
</tr>
<tr>
<td class="tg-2egc">USB ポート</td>
<td class="tg-2egc">USB Type-C (900 mA)</td>
</tr>
<tr>
<td class="tg-2egc">セキュリティ</td>
<td class="tg-2egc">WPA/WPA2</td>
</tr>
<tr>
<td class="tg-2egc">寸法</td>
<td class="tg-2egc">90*80*40 mm</td>
</tr>
<tr>
<td class="tg-2egc">動作温度</td>
<td class="tg-2egc">0-40℃</td>
</tr>
<tr>
<td class="tg-2egc">認証</td>
<td class="tg-2egc">CE/FC/IC/RCM/WPC/RoHS</td>
</tr>
</tbody>
</table>

<!-- <style type="text/css" xml="space">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:2px 20px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:2px 20px;word-break:normal;}
.tg .tg-2egc{background-color:#efefef;border-color:#ffffff;text-align:left;vertical-align:top}
.tg .tg-gmm0{background-color:#9b9b9b;border-color:#ffffff;color:#ffffff;text-align:left;vertical-align:top}
</style> -->

<table class="tg">
<tbody>
<tr>
<td class="tg-2egc">インターフェース</td>
<td class="tg-2egc">LED インジケーター</td>
</tr>
<tr>
<td class="tg-2egc">アンテナタイプ</td>
<td class="tg-2egc">統合型</td>
</tr>
<tr>
<td class="tg-2egc">周波数帯域</td>
<td class="tg-2egc">AU915</td>
</tr>
</tbody>
</table>

## ソース

* [The Things Indoor Gateway の始め方](https://www.thethingsnetwork.org/docs/gateways/thethingsindoor/Getting_Started_TTIG.pdf)
* [The Things Indoor Gateway データシート](https://www.thethingsnetwork.org/docs/gateways/thethingsindoor/TTIG_datasheet.pdf)
* [AWS での始め方](https://www.thethingsnetwork.org/docs/gateways/thethingsindoor/Getting_Started_TTIG_AWS.pdf)

## The Things Indoor Gateway を使った SenseCAP の始め方

![combo](https://files.seeedstudio.com/products/113990896/wiki/connection%20diagram.png)

注意: SenseCAP について知らない場合、以下は簡単な紹介です：
> Seeed の産業用 IoT (IIoT) 製品シリーズの最初のリリースの一つである SenseCAP は、スマート農業、精密農業、スマートシティなどの無線環境センシングアプリケーションに焦点を当てています。ハードウェア製品（センサー、データロガー、ゲートウェイなど）、ソフトウェアサービス（SenseCAP ポータル、モバイルアプリ、オープンダッシュボード）、およびデバイスとデータ管理のための API で構成されています。SenseCAP は LoRa、2G、4G、NB-IoT など、さまざまな通信プロトコルをサポートしています。

詳細については、[SenseCAP の紹介](https://wiki.seeedstudio.com/ja/Industrial-IoT-SenseCAP-Introduction/)をご覧ください。

### ステップ 1: TTIG ゲートウェイをアクティベートする

* リセットボタン（ゲートウェイの背面、USB-C ポートの隣にある小さなボタン）を 5 秒間押し続け、LED が数回高速で緑↔赤に点滅するまで待ちます。
* SETUP ボタン（ゲートウェイの上部、LED の隣にあるボタン）を 10 秒間押し続け、LED が高速で赤く点滅するまで待ちます。
* ゲートウェイは WiFi AP を公開し、その SSID は MINIHUB-xxxxxx（xxxxxx はゲートウェイ ID の最後の 6 桁）です。
* このネットワークのパスワードは、デバイスの背面パネルに WiFi PW として印刷されています。
* その後、ブラウザで 192.168.4.1 にアクセスして WiFi 設定ページに入ります。

![192](https://files.seeedstudio.com/products/113990896/wiki/192.168.4.1.png)

* WiFi ネットワークを選択し、閉じたネットワークの場合はパスワードを入力します。
* 「Save and Reboot」オプションを選択します。
* 設定が正しい場合：
  * ゲートウェイはこのネットワークに接続する間、数秒間緑色に点滅します。
  * 次に、CUPS エンドポイントに接続して LNS トラフィックエンドポイントに接続するための必要な情報を取得する間、数秒間緑↔赤に点滅します。
* 設定が成功すると、LED が緑色に点灯し、ゲートウェイが LoRaWAN ネットワークに接続され、パケットを処理する準備が整ったことを示します。

### ステップ 2: TTN コンソールでゲートウェイを登録する

TTN ウェブサイト [https://www.thethingsnetwork.org](https://www.thethingsnetwork.org) にアクセスしてアカウントを作成し、「Console」にアクセスします。最初に「Gateway」をクリックします。

![2.1](https://files.seeedstudio.com/products/113990896/wiki/s2.1.png)
ゲートウェイを登録します：

![2.2](https://files.seeedstudio.com/products/113990896/wiki/s2.2.png)

1. ゲートウェイ EUI: これは「Add Network」ページ 192.168.4.1 に表示されます。

![2.3](https://files.seeedstudio.com/products/113990896/wiki/s2.3.png)

2. 周波数プラン: ゲートウェイのラベルを確認します。
3. ルーター: 自分に適したルーターを選択します。
4. 登録: ゲートウェイステータスが接続済みと表示されれば、登録成功です。

![2.4](https://files.seeedstudio.com/products/113990896/wiki/s2.4.png)

### ステップ 3: SenseCAP センサーを TTN コンソールに追加する

#### 1. デバイス EUI、デバイスコード、App Key、App EUI を取得する

* デバイス EUI とデバイスコードは SenseCAP 製品ラベルに記載されています。

![3.1](https://files.seeedstudio.com/products/113990896/wiki/s3.1.png)

* SenseCAP センサーの AppEUI と AppKey は Seeed によってデバイスに書き込まれています。HTTP API を使用して App EUI と App Key を取得します。ブラウザを使用して HTTP GET リクエストを発行できます。

![3.2](https://files.seeedstudio.com/products/113990896/wiki/s3.2.png)

API では、デバイス EUI とデバイスコードを自分のデバイス EUI とデバイスコードに置き換えます。すると、以下のようなレスポンスがウェブページに表示され、App EUI と App Key が示されます：

![3.3](https://files.seeedstudio.com/products/113990896/wiki/s3.3.png)

#### 2. アプリケーションと AppEUI を追加する

![3.4](https://files.seeedstudio.com/products/113990896/wiki/s2.1.png)

1. 「add application」ページに入ります。

![3.5](https://files.seeedstudio.com/products/113990896/wiki/s3.5.png)

* アプリケーション ID: 一意の名前を入力します。
* 説明: 説明を入力します。
* ハンドラー登録: ゲートウェイルーターと同じハンドラーを選択します。
* 「Add Application」を選択して続行します。

![3.6](https://files.seeedstudio.com/products/113990896/wiki/s3.6.png)

![3.7](https://files.seeedstudio.com/products/113990896/wiki/s3.7.png)

* アプリケーション → Application EUIS → Manage EUIs。
* → Add EUI
* 前のステップ（ステップ 3.1）で取得したノードの AppEUI を入力します。
* → Add EUI

![3.8](https://files.seeedstudio.com/products/113990896/wiki/s3.8.png)

2. TTN コンソールでセンサーノードをデバイスとして追加する

* アプリケーション → デバイス → register device

![3.9](https://files.seeedstudio.com/products/113990896/wiki/s3.9.png)

![3.10](https://files.seeedstudio.com/products/113990896/wiki/s3.10.png)

* デバイス ID: 一意の名前を入力します。
* デバイス EUI: 前のステップ（ステップ 3.1）で取得したノードのデバイス EUI を入力します。
* App Key: 前のステップで取得したノードの App Key を入力します。
* App EUI: ノードの App EUI を選択します。
* 登録

### ステップ 4: SenseCAP センサーをアクティベートする

#### 電源をオンにする

電源スイッチはデバイス内部に隠れています。センサーを設置する前にデバイスを開けて電源をオンにしてください。以下はステップバイステップの手順です：

* センサープローブのキャップを反時計回りに回して緩めます。白いキャップオープナーを使用すると、この作業が簡単になります。以下の画像は TH センサーを例にしており、他の SenseCAP センサーにも適用されます。

![4.1](https://files.seeedstudio.com/products/113990896/wiki/s4.1.png)

* デバイスを開けた後、スイッチを「ON」に切り替えます。右下の LED が点滅し、電源がオンになったことを示します。約 10 秒待つと、LED が 2 秒間高速で点滅し、デバイスがネットワークに接続されたことを示します。

![4.2](https://files.seeedstudio.com/products/113990896/wiki/s4.2.png)

* デバイスがネットワークに接続された後、センサープローブをセンサーノードコントローラーに時計回りに回して再接続してください。両方の部品のラベルが以下の画像のように正しく整列していることを確認してください。ラベルが整列していない場合、両部品は正しく接続されず、データが正常にアップロードされません。

* TTNコンソールでセンサーノードの接続状態を確認してください。状態が緑色に変わった場合、正常に接続されています。

![4.3](https://files.seeedstudio.com/products/113990896/wiki/s4.3.png)

### ステップ5: データ確認

データページでは、データパッケージがアップロードされます。ペイロードのフォーマットについては、デコードセクションを参照してください。
以下は、SenseCAP LoRaWAN 土壌水分＆温度センサーおよびSenseCAP LoRaWAN CO2センサーによって正常に取得されたデータを示しています：

![4.4](http://files.seeedstudio.com/products/113990896/wiki/soil%20data%20board.png)

![4.5](http://files.seeedstudio.com/products/113990896/wiki/co2%20data%20board.png)