---
description: Google Cloud IoT
title: Google 使用方法
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Connect-Wio-Terminal-to-Google-Cloud
last_update:
  date: 05/15/2025
  author: shuxu hu
---


# Wio Terminal を Google Cloud IoT Core に接続する

<!-- ![](https://files.seeedstudio.com/wiki/Google_Cloud_IoT/thumb.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/thumb.png" alt="pir" width={600} height="auto" /></p>

## 産業用センサーへのアップグレード可能

SenseCAP [S2110 コントローラー](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) と [S2100 データロガー](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) を使用することで、Grove を簡単に LoRaWAN® センサーに変えることができます。Seeed はプロトタイピングをサポートするだけでなく、SenseCAP シリーズの堅牢な[産業用センサー](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP)を使用してプロジェクトを拡張する可能性も提供します。

IP66 ハウジング、Bluetooth 設定、グローバル LoRaWAN® ネットワークとの互換性、内蔵 19 Ah バッテリー、そしてアプリからの強力なサポートにより、[SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) は産業用途に最適な選択肢となります。このシリーズには、土壌水分、空気温度と湿度、光強度、CO2、EC、そして 8-in-1 気象ステーション用のセンサーが含まれています。次の成功する産業プロジェクトに向けて、最新の SenseCAP S210x をお試しください。

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr><td colSpan={4} bgcolor="#0e3c49" align="center"><font color="white" size={4}><strong>SenseCAP 産業用センサー</strong></font></td></tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> データロガー</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> 空気温度 &amp; 湿度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> 光強度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> 空気温度 &amp; 湿度 &amp; CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> 土壌水分 &amp; 温度</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> 土壌水分 &amp; 温度 &amp; EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> LoRaWAN® コントローラー</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> 8-in-1 気象ステーション</strong></a></td>
    </tr>
  </tbody></table>

## はじめに

このチュートリアルでは、Wio Terminal を Google Cloud IoT Core に接続し、Wio Terminal から Google Cloud IoT Core にテレメトリデータを送信するプロセスを説明します。これを2つのセクションに分けて解説します。最初のセクションでは、既存のライブラリを使用してコード内で事前設定されたテレメトリデータを送信する方法について説明します。一方、2番目のセクションでは、独自のセンサーを Wio Terminal に追加してテレメトリデータを Google Cloud IoT Core に送信する方法について説明します。Google Cloud IoT Core は HTTP と MQTT の両方のプロトコルをサポートしていますが、このチュートリアルでは MQTT プロトコルを使用します。

### Google Cloud とは？

[Google Cloud](https://cloud.google.com/) は、コンピュータやハードディスクドライブなどの物理的な資産と、仮想マシン（VM）などの仮想リソースで構成されています。これらは、世界中の Google のデータセンターに配置されています。このリソースの分散により、障害時の冗長性や、クライアントに近い場所にリソースを配置することで遅延を削減するなど、いくつかの利点が得られます。

クラウドコンピューティングでは、従来ソフトウェアやハードウェア製品として考えられていたものがサービスとして提供されます。これらのサービスは、基盤となるリソースへのアクセスを提供します。[利用可能な Google Cloud サービスの一覧](https://cloud.google.com/products) は非常に多く、さらに増え続けています。Google Cloud 上でウェブサイトやアプリケーションを開発する際には、これらのサービスを組み合わせて必要なインフラを構築し、その上にコードを追加して実現したいシナリオを構築します。

### Google Cloud Platform とは？

[Google Cloud Platform (GCP)](https://console.cloud.google.com/) は、クラウドコンピューティングサービスの集合体です。一連の管理ツールを備え、コンピューティング、データストレージ、データ分析、機械学習などのモジュール型クラウドサービスを提供します。GCP は、インフラストラクチャー・アズ・ア・サービス（IaaS）、プラットフォーム・アズ・ア・サービス（PaaS）、およびサーバーレスコンピューティング環境を提供します。

### Google Cloud IoT Core とは？

[Google Cloud Internet of Things (IoT) Core](https://cloud.google.com/iot/docs) は、IoT デバイスを安全に接続および管理するための完全管理型サービスです。数台から数百万台のデバイスまで対応可能で、接続されたデバイスからデータを取り込み、Google Cloud Platform の他のビッグデータサービスと統合したリッチなアプリケーションを構築できます。

### Google Cloud Console とは？

[Google Cloud Console](https://console.cloud.google.com/) は、Google Cloud Platform のリソースを管理するためのウェブベースのグラフィカルユーザーインターフェースを提供します。Cloud Console を使用すると、新しいプロジェクトを作成するか、既存のプロジェクトを選択し、そのプロジェクトのコンテキストでリソースを使用できます。複数のプロジェクトを作成できるため、作業を適切に分離することが可能です。たとえば、特定のチームメンバーだけがそのプロジェクト内のリソースにアクセスできるようにしたい場合に新しいプロジェクトを開始し、他のプロジェクトではすべてのチームメンバーがリソースにアクセスできるようにする、といった使い方ができます。

## Wio Terminal を Google Cloud IoT Core に MQTT 経由で接続する

前述の通り、Wio Terminal と Google Cloud IoT Core の間の通信には利用可能な MQTT ブリッジを使用します。ただし、必要に応じて HTTP ブリッジを使用することも可能です。

<!-- ![](https://files.seeedstudio.com/wiki/Google_Cloud_IoT/5555555.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/5555555.png" alt="pir" width={600} height="auto" /></p>

### Google Cloud コンソールのセットアップ

まず、Google Cloud コンソールにアクセスし、Cloud IoT Core デバイスレジストリを作成してデバイスを登録します。

#### 初期設定

- **ステップ 1:** [こちら](https://console.cloud.google.com/)にアクセスして新しいプロジェクトを作成します。

**注意:** ログインを求められた場合は、Google アカウントにログインしてください。

- **ステップ 2:** **プロジェクトを選択**メニューをクリックします。

- **ステップ 3:** **新しいプロジェクト**をクリックし、**プロジェクト名**を入力します。

- **ステップ 4:** **作成**をクリックします。

- **ステップ 5:** Cloud プロジェクトの課金を有効にします。これは、ロボットではないことを確認するために必要であり、課金されることはありません。ナビゲーションメニューで「課金」を選択し、設定を進めてください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/1111111.png" alt="pir" width={500} height="auto" /></p>

- **ステップ 6:** [こちら](https://console.cloud.google.com/flows/enableapi?apiid=cloudiot.googleapis.com%2Cpubsub&authuser=3&_ga=2.254170561.853675115.1607885458-878786893.1606048800)にアクセスして、Cloud IoT Core と Cloud Pub/Sub API を有効にします。

**注意:** ドロップダウンメニューから、先ほど作成したプロジェクトを選択してください。

#### デバイスレジストリを作成する

- **ステップ 1:** Cloud コンソールの [Google Cloud IoT Core ページ](https://console.cloud.google.com/iot/registries) にアクセスします。

- **ステップ 2:** **レジストリを作成**をクリックします。

- **ステップ 3:** **レジストリ ID** を入力します。

**注意:** これはレジストリの名前です。

- **ステップ 4:** **リージョン**を選択します。

**注意:** 米国にいる場合は、リージョンとして us-central1 を選択します。米国外の場合は、希望するリージョンを選択してください。

- **ステップ 5:** **Cloud Pub/Sub トピックを選択**ドロップダウンリストで、**トピックを作成**を選択し、希望する**トピック ID**を入力します。

- **ステップ 6:** **トピックを作成**をクリックします。

- **ステップ 7:** **詳細オプションを表示**をクリックします。

- **ステップ 8:** **デバイス状態トピック**と**証明書値**フィールドはオプションなので、空白のままにします。

- **ステップ 9:** **プロトコル**として **MQTT** を選択します。

- **ステップ 10:** Cloud IoT Core ページで **作成** をクリックします。

これで、デバイスのテレメトリイベントを公開するための Cloud Pub/Sub トピックを持つデバイスレジストリが作成されました。

#### デバイスキーのペアを生成する (EC キー)

Cloud IoT Core は公開鍵 (または非対称) 認証を使用します。

- デバイスは秘密鍵を使用して [JSON Web Token (JWT)](https://cloud.google.com/iot/docs/how-tos/credentials/jwts) を署名します。このトークンはデバイスのアイデンティティの証明として Cloud IoT Core に渡されます。
- サービスは、JWT が送信される前にアップロードされたデバイス公開鍵を使用してデバイスのアイデンティティを検証します。

Cloud IoT Core は RSA と楕円曲線アルゴリズムをサポートしており、このチュートリアルでは楕円曲線キーを使用します。

- **ステップ 1:** PC 上に新しいフォルダを作成します。

- **ステップ 2:** ターミナルウィンドウからフォルダに移動し、以下のコマンドを入力して P-256 楕円曲線キーのペアを生成します。

```sh
openssl ecparam -genkey -name prime256v1 -noout -out ec_private.pem
openssl ec -in ec_private.pem -pubout -out ec_public.pem
```

**注意:** [このリンク](https://slproweb.com/products/Win32OpenSSL.html)に従って **openssl** をインストールし、ディレクトリの場所を PATH に追加してください。

上記のコマンドは以下の公開/秘密鍵ペアを生成します：

- **ec_private.pem**: デバイス上で安全に保存され、認証 JWT を署名するために使用される秘密鍵。
- **ec_public.pem**: Cloud IoT Core に保存され、認証 JWT の署名を検証するために使用される公開鍵。

#### 秘密鍵を抽出する

秘密鍵のバイトを抽出し、後で作成する Arduino プロジェクトの秘密鍵文字列にコピーする必要があります。これらの鍵を保存して後で使用します。

- **ステップ 1:** ターミナルウィンドウを開き、以前生成した楕円曲線キーのペアを含むフォルダに移動します。

- **ステップ 2:** 以下のコマンドを入力します。

```sh
openssl ec -in ec_private.pem -noout -text
```

- **ステップ 3:** **priv:** の下に生成された秘密鍵バイトをコピーして、メモ帳に貼り付けて保存します。

#### レジストリにデバイスを追加する

- **ステップ 1:** [レジストリページ](https://console.cloud.google.com/iot/registries)にアクセスし、以前作成したレジストリを選択します。

- **ステップ 2:** **デバイス**タブを選択し、**デバイスを作成**をクリックします。

- **ステップ 3:** **デバイス ID** を入力します。

- **ステップ 4:** **デバイスメタデータ**フィールドはオプションなので、空白のままにします。

- **ステップ 5:** **通信、クラウドログ、認証**ドロップダウンメニューをクリックします。

- **ステップ 6:** **デバイス通信**で **許可** を選択します。

- **ステップ 7:** **認証**フィールド内の **入力方法**で **アップロード** を選択します。

- **ステップ 8:** **公開鍵形式**ドロップダウンメニューから **ES256** を選択します。

- **ステップ 9:** **公開鍵値**の下で **参照**ボタンを押し、以前作成した楕円曲線キーのペアフォルダに移動して **ec_public.pem** を選択します。

- **ステップ 10:** **作成**をクリックします。

これで、レジストリにデバイスを追加しました。デバイスの詳細ページに ES256 キーが表示されます。

#### サブスクライバーを設定する

デバイスレジストリを作成し、トピックを作成し、そのレジストリにデバイスを追加したので、次に進んで、作成したトピックを購読するサブスクライバーを作成し、Wio Terminal からテレメトリデータを取得します。

- **ステップ 1:** Google Cloud コンソールの検索バーに **Pub** と入力し、結果から **Pub/Sub** を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/333333.png" alt="pir" width={700} height="auto" /></p>

- **ステップ 2:** ナビゲーションメニューで **サブスクリプション** をクリックします。

- **ステップ 3:** **CREATE SUBSCRIPTION** をクリックします。

- **ステップ 4:** 任意の **Subscription ID** を入力します。

- **ステップ 5:** **Select a Cloud Pub/Sub topic** ドロップダウンメニューから、以前作成した **Pub/Sub topic** を選択します。

- **ステップ 6:** 配信タイプとして **Pull** を選択します。

- **ステップ 7:** **Create** をクリックします。

これで Google Cloud IoT Core の設定が完了しました。次に、Arduino IDE を使用して Wio Terminal の設定に進みます。

### Arduino IDE を使用した Wio Terminal のセットアップ

#### 必要なライブラリ

このチュートリアルでは、以下の2つのライブラリが必要です。

1. lwMQTT MQTT Arduino ライブラリ
2. Google Cloud IoT Arduino ライブラリ

これらのライブラリをダウンロードする手順：

- **ステップ 1:** Arduino IDE を開きます。
- **ステップ 2:** `Sketch > Include Library > Manage Libraries` に移動します。
- **ステップ 3:** 検索ボックスに **lwMQTT** と **Google Cloud IoT** を入力し、ライブラリをインストールします。

#### 資格情報とアカウント情報の設定

次に、**ciotc_config.h** ファイルに Wi-Fi の資格情報と Google Cloud IoT Core の情報を設定します。

- **ステップ 1:** Arduino IDE 内で、`File > Examples > Google Cloud IoT JWT > Esp32-lwmqtt` に移動します。

- **ステップ 2:** **ciotc_config.h** を開きます。

- **ステップ 3:** **Wi-Fi ネットワークの詳細** を変更します。

```cpp
const char *ssid = "Enter_SSID";
const char *password = "Enter_Password";
```

- **ステップ 4:** **Google Cloud IoT の詳細** を変更します。

```cpp
const char *project_id = "Enter_Project_ID";
const char *location = "Enter_location";
const char *registry_id = "Enter_Registry_ID";
const char *device_id = "Enter_Device_ID";
```

- **ステップ 5:** **ec_private.pem** から取得したプライベートキーのバイトをコピーし、事前に保存した内容を入力します。

```cpp
const char *private_key_str =
    "6e:b8:17:35:c7:fc:6b:d7:a9:cb:cb:49:7f:a0:67:"
    "63:38:b0:90:57:57:e0:c0:9a:e8:6f:06:0c:d9:ee:"
    "31:41";
```

**注意:** キーの長さは 32 ペアの 16 進数である必要があります。

#### NTP 時間取得方法の変更

**esp32-mqtt.h** を開き、以下のコードでファイル全体を置き換えます。ここでは、UDP を使用して NTP 時間を取得する実装に configTime 関数を置き換えています。

```cpp
#include <Client.h>
#include <rpcWiFi.h>
#include <WiFiClientSecure.h>

#include <MQTT.h>

#include <CloudIoTCore.h>
#include <CloudIoTCoreMqtt.h>
#include "ciotc_config.h" // このファイルを設定内容で更新してください

// !!REPLACEME!!
// コマンドと設定更新のための MQTT コールバック関数
// メッセージハンドラーコードをここに記述してください。
void messageReceived(String &topic, String &payload){
  Serial.println("incoming: " + topic + " - " + payload);
}
///////////////////////////////

// このボード用の WiFi と MQTT の初期化
//Client *netClient;
CloudIoTCoreDevice *device;
CloudIoTCoreMqtt *mqtt;
MQTTClient *mqttClient;
unsigned long iat = 0;
String jwt;
WiFiUDP udp;

unsigned int localPort = 2390;
unsigned long devicetime;
const int NTP_PACKET_SIZE = 48; // NTP タイムスタンプはメッセージの最初の 48 バイトに含まれています
byte packetBuffer[NTP_PACKET_SIZE]; // 受信および送信パケットを保持するバッファ

// 指定されたアドレスのタイムサーバーに NTP リクエストを送信
unsigned long sendNTPpacket(const char* address) {
    // バッファ内のすべてのバイトを 0 に設定
    for (int i = 0; i < NTP_PACKET_SIZE; ++i) {
        packetBuffer[i] = 0;
    }
    // NTP リクエストを形成するために必要な値を初期化
    packetBuffer[0] = 0b11100011;   // LI, Version, Mode
    packetBuffer[1] = 0;     // Stratum, or type of clock
    packetBuffer[2] = 6;     // Polling Interval
    packetBuffer[3] = 0xEC;  // Peer Clock Precision
    // Root Delay & Root Dispersion のための 8 バイトのゼロ
    packetBuffer[12] = 49;
    packetBuffer[13] = 0x4E;
    packetBuffer[14] = 49;
    packetBuffer[15] = 52;

    // すべての NTP フィールドに値が設定されたので、
    // タイムスタンプを要求するパケットを送信できます：
    udp.beginPacket(address, 123); // NTP リクエストはポート 123 に送信されます
    udp.write(packetBuffer, NTP_PACKET_SIZE);
    udp.endPacket();
}

unsigned long getNTPtime() {

    // モジュールは Jan 1, 1970 以降の秒数として unsigned long 型の時間値を返します
    // 問題が発生した場合は 0 を返します

    // 接続されている場合のみデータを送信
    if (WiFi.status() == WL_CONNECTED) {
        // UDP 状態を初期化
        udp.begin(WiFi.localIP(), localPort);
        sendNTPpacket(ntp_primary); // タイムサーバーに NTP パケットを送信
        // 応答が利用可能かどうかを確認するために待機
        delay(1000);
        if (udp.parsePacket()) {
            udp.read(packetBuffer, NTP_PACKET_SIZE); // パケットをバッファに読み込み

            unsigned long highWord = word(packetBuffer[40], packetBuffer[41]);
            unsigned long lowWord = word(packetBuffer[42], packetBuffer[43]);
            unsigned long secsSince1900 = highWord << 16 | lowWord;
            const unsigned long seventyYears = 2208988800UL;
            unsigned long epoch = secsSince1900 - seventyYears;

            long tzOffset = 0UL;
            unsigned long adjustedTime;
            return adjustedTime = epoch + tzOffset;
        }
        else {
            udp.stop();
            return 0; // 失敗を示す 0 を返します
        }
        udp.stop();
    }
    else {
        return 0;
    }
}

///////////////////////////////
// このボード固有のヘルパー
///////////////////////////////
String getDefaultSensor(){
  return "Wifi: " + String(WiFi.RSSI()) + "db";
}

String getJwt(){
  Serial.println("Refreshing JWT");
  iat = getNTPtime();
  Serial.println(iat);
  jwt = device->createJWT(iat, jwt_exp_secs);

  Serial.println(jwt);
  return jwt;
}

void setupWifi(){
  Serial.println("Starting wifi");

  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  Serial.println("Connecting to WiFi");
  while (WiFi.status() != WL_CONNECTED){
    delay(100);
  }

  Serial.println("Waiting on time sync...");
  while (getNTPtime() < 1510644967){
    delay(10);
  }
}

void connectWifi(){
  Serial.print("checking wifi...");
  while (WiFi.status() != WL_CONNECTED){
    Serial.print(".");
    delay(1000);
  }
}

///////////////////////////////
// さまざまなメソッドを統合
///////////////////////////////
bool publishTelemetry(String data){
  return mqtt->publishTelemetry(data);
}

bool publishTelemetry(const char *data, int length){
  return mqtt->publishTelemetry(data, length);
}

bool publishTelemetry(String subfolder, String data){
  return mqtt->publishTelemetry(subfolder, data);
}

bool publishTelemetry(String subfolder, const char *data, int length){
  return mqtt->publishTelemetry(subfolder, data, length);
}

void connect(){
  connectWifi();
  mqtt->mqttConnect();
}


WiFiClientSecure netClient;
void setupCloudIoT(){
  device = new CloudIoTCoreDevice(
      project_id, location, registry_id, device_id,
      private_key_str);

  setupWifi();
  mqttClient = new MQTTClient(512);
  mqttClient->setOptions(180, true, 1000); // keepAlive, cleanSession, timeout
  mqtt = new CloudIoTCoreMqtt(mqttClient, &netClient, device);
  mqtt->setUseLts(true);
  mqtt->startMQTT();
}
```

#### Esp32-lwmqtt.ino にマクロ定義を追加

**Esp32-lwmqtt.ino** 内に Wio Terminal ボードをマクロ定義に追加します。

```cpp
#if defined(ESP32) || defined(WIO_TERMINAL)
#define __ESP32_MQTT_H__
#endif
```

これで Arduino IDE の設定が完了しました。最後に、このコードを Wio Terminal にアップロードする必要があります。シリアルモニターを開くと、以下の内容が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/4444444.png" alt="pir" width={700} height="auto" /></p>

### テレメトリデータの表示

次に、Wio Terminal から送信されるテレメトリデータを表示する必要があります。この例では、Wi-Fi 信号強度がテレメトリデータとして送信されます。

- **ステップ 1:** Google Cloud Console の **Pub/Sub** にアクセスします。

**注意:** Google Cloud Console の検索バーで **Pub** を検索できます。

- **ステップ 2:** ナビゲーションメニュー内の **Subscriptions** に移動します。

- **ステップ 3:** 以前に作成したサブスクリプション ID を選択します。

- **ステップ 4:** **VIEW MESSAGES** をクリックします。

- **ステップ 5:** **PULL** をクリックすると、以下のように受信したテレメトリデータが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/6666666.png" alt="pir" width={950} height="auto" /></p>

### 他のセンサーを追加する方法

Wio Terminal に任意のセンサーを追加して、Google Cloud IoT Core にテレメトリデータを送信することができます。簡単にするために、Wio Terminal に内蔵されている光センサーを使用して、光の強度レベルを Google Cloud IoT Core に送信します。

#### Google Cloud IoT の設定

- **ステップ 1:** Google Cloud Console の **IoT Core** にアクセスします。

**注意:** Google Cloud Console の検索バーで **IoT Core** を検索できます。

- **ステップ 2:** 以前に作成したレジストリを選択します。

- **ステップ 3:** Cloud **Pub/Sub topics** の下で **Add or edit topics** を選択します。

- **ステップ 4:** **ADD ADDITIONAL TOPIC** をクリックします。

- **ステップ 5:** **Select a Cloud Pub/Sub topic** のドロップダウンメニューから **CREATE A TOPIC** をクリックします。

- **ステップ 6:** **Topic ID** を入力し、**CREATE TOPIC** をクリックします。

- **ステップ 7:** **Subfolder** 列内に **Subfolder name** を入力します。

**注意:** サブフォルダ名は Arduino コード内でトピックに関連付けるために使用されます。

- **ステップ 8:** **UPDATE** をクリックします。

- **ステップ 9:** 以前説明したように新しいサブスクリプションを作成します。

#### Arduino の設定

**Esp32-lwmqtt.ino** に移動し、以下を追加します。

- **ステップ 1:** ループの後に、内蔵光センサー用の以下を追加します。

```cpp
void loop() {
  int light = analogRead(WIO_LIGHT); // 光センサー値を格納する変数を割り当てる
  light = map(light,0,1023,0,100); // センサー値をマッピングする
```

- **ステップ 2:** サブフォルダ名を含むトピックを追加します。

```cpp
    publishTelemetry(getDefaultSensor());
    publishTelemetry("/light",String(light));
```

**注意:** サブフォルダ名が追加されない場合、テレメトリデータはデフォルトトピックに送信されます。この場合、以前説明した Wi-Fi 信号強度のテレメトリデータは、デフォルトトピックとして作成した最初のトピックに送信されます。

コードを Wio Terminal にアップロードした後、新しく作成したトピックからサブスクライバーとしてプルすると、以下の結果が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/222222.png" alt="pir" width={950} height="auto" /></p>

### 他のセンサーを追加してダッシュボードでデータを可視化する方法

Google Cloud IoT Core はセンサーからのデータを可視化するための既製のダッシュボードを提供していませんが、InfluxDB と Grafana を使用してこれを実現する方法を説明します。

[InfluxDB](https://www.influxdata.com/) は時系列データベースであり、各データは特定のタイムスタンプに関連付けられています。タイムスタンプは特定のデータに関連する日付と時刻を示します。一方、[Grafana](https://grafana.com/) はオープンソースのソリューションであり、大量のデータを分析し、意味のあるメトリクスを引き出し、カスタマイズ可能なダッシュボードを使用してアプリを監視するために使用されます。

基本的には、温度/湿度センサーを Wio Terminal に接続し、Google Cloud Function を使用して Pub/Sub から GKE (Google Kubernetes Engine) クラスター内の InfluxDB にデータを送信し、Grafana のインタラクティブなダッシュボードを使用して InfluxDB からデータを表示します。

<!-- ![](https://files.seeedstudio.com/wiki/Google_Cloud_IoT/thumb.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/thumb.png" alt="pir" width={600} height="auto" /></p>

#### Arduino のハードウェア設定

Grove - Temperature and Humidity Sensor (DHT11) を Wio Terminal の Grove - Digital/Analog Port (D0) に接続します。

#### Arduino のソフトウェア設定

- **ステップ 1:** [Grove - Temperature and Humidity Sensor repo](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor) にアクセスし、zip ファイルとしてダウンロードします。

- **ステップ 2:** Arduino を開き、`Sketch > Include Library > Add .ZIP Library` に移動して、ダウンロードしたライブラリを選択してインストールします。

以前使用した **Esp32-lwmqtt.ino** に移動し、以下を追加します。

- **ステップ 1:** **#include "esp32-mqtt.h"** の後に以下を追加します。

```cpp
#include "DHT.h" //DHT ライブラリ

#define DHTPIN 0 //DHT の信号ピンを定義
#define DHTTYPE DHT11 //DHT センサータイプを定義
DHT dht(DHTPIN, DHTTYPE); //DHT センサーを初期化
```

- **ステップ 2:** **setup** 内に以下を追加して DHT センサーを開始します。

```cpp
dht.begin(); 
```

- **ステップ 3:** **void loop()** 内の **if loop** に以下を追加します。

```cpp
int temperature = dht.readTemperature(); // 温度を格納する変数を割り当てる
int humidity = dht.readHumidity(); // 湿度を格納する変数を割り当てる

String payload = String("{\"timestamp\":") + getNTPtime() +
                  String(",\"temperature\":") + temperature +
                  String(",\"humidity\":") + humidity +
                  String("}");
publishTelemetry(payload); 
```

**注意:** ここでは、すべてのデータを文字列として influxDB に解析します。influxDB は時系列データベースであるため、**time** の解析が重要です。また、**pushTelemetry** 関数は、このチュートリアルの最初に作成したデフォルトのトピックにデータを送信します。

- **ステップ 4:** コードを Wio Terminal にアップロードします。

#### Google Cloud IoT のセットアップ

- **ステップ 1:** [こちら](https://github.com/lakshanthad/esp32-cloud-iot-core-k8s) のリポジトリを訪問し、ZIP ファイルとしてダウンロードします。

- **ステップ 2:** ダウンロードした ZIP ファイルを解凍します。

- **ステップ 3:** Google Cloud Console を開き、[Google Kubernetes Engine](https://console.cloud.google.com/kubernetes/list) に移動し、システムの初期化を待ちます。

- **ステップ 4:** 右上のボタンを押して Cloud Shell を起動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/cloud_shell_1.png" alt="pir" width={700} height="auto" /></p>

- **ステップ 5:** 以下のコマンドを入力して、gcloud コマンドラインツールのデフォルトを設定します。

```sh
export ZONE=<enter_zone> # 例: us-central1-a, 詳細は https://cloud.google.com/compute/docs/regions-zones/#available を参照
export PROJECT_ID=<enter_project-id> # プロジェクト ID 名
gcloud config set project $PROJECT_ID
gcloud config set compute/zone $ZONE
```

- **ステップ 6:** 以下のコマンドを入力して、n1-standard-1 ノードを 1 つ持つ GKE クラスターを作成します。

```sh
gcloud container clusters create influxdb-grafana \
                --num-nodes 1 \
                --machine-type n1-standard-1 \
                --zone $ZONE
```

- **ステップ 7:** 以下のコマンドを入力して、InfluxDB と Grafana の認証情報を保存するシークレットを作成します。

```sh
kubectl create secret generic influxdb-grafana \
  --from-literal=influxdb-user=admin \
  --from-literal=influxdb-password=passw0rd \
  --from-literal=grafana-user=admin \
  --from-literal=grafana-password=passw0rd
```

**注意:** influxdb / grafana のユーザー名とパスワードはお好みに応じて変更できます。

- **ステップ 8:** Google Shell 内で **Open Editor** をクリックします。

- **ステップ 9:** 先ほどダウンロードして解凍したフォルダを **Cloud Shell Editor** にドラッグ＆ドロップします。

- **ステップ 10:** **Open Terminal** をクリックしてターミナルに戻ります。以下を入力して **05-influxdb_grafana_k8s** ディレクトリに移動します。

```sh
cd esp32-cloud-iot-core-k8s-master/05-influxdb_grafana_k8s
```

- **ステップ 11:** 以下のコマンドを入力して、InfluxDB と Grafana を Kubernetes にデプロイします。

```sh
kubectl create -f k8s/
```

#### Grafana のセットアップ

- **ステップ 1:** 以下を入力して、サービスの外部 IP / ポートを確認します。

```sh
kubectl get services
```

- **ステップ 2:** Grafana の外部 IP をコピーします。

- **ステップ 3:** `http://<grafana service external ip>:3000` にアクセスします。

**注意:** コピーした Grafana の外部 IP を `<grafana service external ip>` に貼り付けます。

- **ステップ 4:** 先ほど設定した認証情報で Grafana にログインします。

- **ステップ 5:** 歯車アイコンをクリックし、`Configuration > Data Sources` に移動します。

- **ステップ 6:** **Add data source** をクリックし、**influxDB** を選択します。

- **ステップ 7:** **URL** フィールドに以下を入力します。

```sh
http://influxdb:8086
```

- **ステップ 8:** **Database** フィールドに以下を入力し、**Save & Test** をクリックします。

```sh
iot
```

**注意:** **InfluxDB** データソースを Grafana に正常に設定できた場合、**Data source is working** というメッセージが表示されます。

#### Google Cloud Function の作成

次に、Pub/Sub のトピックから InfluxDB にデータを送信し、InfluxDB のデータを Grafana のインタラクティブなダッシュボードで表示するための Google Cloud Function を作成します。

- **ステップ 1:** **Google Cloud Console** に戻り、**Cloud Shell** を開きます。

- **ステップ 2:** 以下を入力して **Cloud Functions API** を有効にします。

```sh
gcloud services enable cloudfunctions.googleapis.com
```

- **ステップ 3:** 以下を入力して **06-cloud_function** ディレクトリに移動します。

```sh
cd esp32-cloud-iot-core-k8s-master/06-cloud_function
```

- **ステップ 4:** **vim テキストエディタ**で **main.py** を開きます。

```sh
cd esp32-cloud-iot-core-k8s-master/06-cloud_function
```

- **ステップ 5:** キーボードで **i** を押して **編集モード** に入ります。

- **ステップ 6:** **_get_influxdb_client 関数**内の **InfluxDB 変数**（ホスト、ポート、ユーザー名、パスワード）を変更します。

**注意:** 以下を Cloud Shell で入力して外部 IP をコピーし、InfluxDB ホストを取得します。

```sh
kubectl get services
```

- **ステップ 7:** **:wq** を入力してファイルを保存します。

- **ステップ 8:** 以下を入力して **Cloud Function** をデプロイします。

```sh
export PUBSUB_TOPIC="enter_topic-name>"
export REGION="enter_region" # https://cloud.google.com/functions/docs/locations
gcloud functions deploy iotcore_pubsub_to_influxdb --runtime python37 --trigger-topic $PUBSUB_TOPIC --region $REGION
```

#### Grafana のセットアップに戻る

- **ステップ 1:** Grafana を開き、`Dashboards > Manage` に移動します。

- **ステップ 2:** **New Dashboard** をクリックし、**Add new panel** をクリックします。

- **ステップ 3:** **Visualization** に移動し、**Graph** をクリックします。

- **ステップ 4:** **Query** の **FROM** タブで **select measurement** をクリックし、ドロップダウンメニューから **temperature** を選択します。

- **ステップ 5:** **+ Query** をクリックし、**ステップ 12** と同じ手順を **humidity** に対して繰り返します。

- **ステップ 6:** 他の設定をお好みに応じて変更します。

- **ステップ 7:** **Apply** をクリックします。

- **ステップ 8:** **Add panel** をクリックし、**Add new panel** をクリックします。

- **ステップ 9:** **Visualization** に移動し、**Gauge** をクリックします。

- **ステップ 10:** **Query** の **FROM** タブで **select measurement** をクリックし、ドロップダウンメニューから **temperature** を選択します。

- **ステップ 11:** **Field** タブで、**Unit** の下にあるドロップダウンメニューから `Temperature > Celcius` を選択します。

- **ステップ 12:** ゲージの最小値と最大値を **Min** と **Max** に入力します。

- **ステップ 13:** **Display name** に `Temperature` と入力します。

- **ステップ 14:** **humidity** に対して **ステップ 15** 以降を繰り返します。

- **ステップ 15:** **Apply** をクリックします。

これで Grafana に作成したダッシュボードが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Google_Cloud_IoT/grafana_dash_1.png" alt="pir" width={900} height="auto" /></p>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するため、さまざまなサポートをご用意しております。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご利用いただけます。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>