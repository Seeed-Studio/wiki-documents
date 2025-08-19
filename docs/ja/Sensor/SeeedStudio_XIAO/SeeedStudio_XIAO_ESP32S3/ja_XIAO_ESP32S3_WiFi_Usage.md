---
description: Seeed Studio XIAO ESP32S3 での WiFi 使用方法。
title: 両バージョンの WiFi
keywords:
- esp32s3
- xiao
- wifi 使用
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao_esp32s3_wifi_usage
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Seeed Studio XIAO ESP32S3 (Sense) での WiFi 使用方法

<table align="center">
	<tr>
	    <th>Seeed Studio XIAO ESP32S3</th>
	    <th>Seeed Studio XIAO ESP32S3 Sense</th>
	</tr>
	<tr>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
	    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
	</tr>
    <tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

Seeed Studio XIAO ESP32S3 は、2.4GHz WiFi - 802.11b/g/n と Bluetooth Low Energy (BLE) のデュアル無線通信をサポートすることで、優れた RF パフォーマンスを誇る組み込み開発ボードです。この機能により、XIAO ESP32S3 は幅広い IoT（モノのインターネット）アプリケーションにおいて信頼性が高く高速な無線接続を提供します。さらに、ボードは U.FL アンテナ接続をサポートしており、通信範囲を 100 メートル以上に拡張することが可能で、長距離無線接続を必要とするプロジェクトに最適です。このチュートリアルでは、XIAO ESP32S3 の Wi-Fi 機能を活用して Wi-Fi ネットワークに接続し、基本的なネットワーキングタスクを実行する方法を探ります。

## はじめに

### アンテナの取り付け

XIAO ESP32S3 の前面左下には、独立した「WiFi/BT アンテナコネクタ」があります。WiFi/Bluetooth 信号をより良くするために、パッケージ内のアンテナを取り出し、コネクタに取り付ける必要があります。

アンテナの取り付けには少しコツがあります。直接強く押し込もうとすると、非常に難しく感じ、指が痛くなるでしょう！正しい取り付け方法は、まずアンテナコネクタの片側をコネクタブロックに差し込み、次にもう片側を少し押し込むことで、アンテナが取り付けられます。

アンテナを取り外す場合も同様で、アンテナを直接力任せに引っ張らないでください。一方の側を持ち上げるように力を加えると、簡単に取り外せます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/5.gif" style={{width:500, height:'auto'}}/></div>

:::note
アンテナが取り付けられていない場合、WiFi ネットワークに接続できない可能性があります。

条件が整っている場合は、大型のスティックアンテナを使用することをお勧めします。より良い体験が得られるでしょう。
:::

## WiFiライブラリの一般的なインターフェース

ESP32-S3は幅広いWiFiネットワーク機能を提供します。一般的に、ESP32の組み込みパッケージ内のWiFiライブラリの機能を確認し、目的の機能を実現するために対応する関数を選択します。次に、よく使用されるインターフェースをいくつか挙げ、その使用方法を紹介します。

### 一般的なWiFi関数

- `WiFiGenericClass::getHostname()` -- ESP32のWiFiライブラリに含まれる関数で、デバイスのホスト名を文字列として返します。ホスト名はネットワーク上でデバイスを識別する一意の名前です。この関数は、以前に`WiFiGenericClass::setHostname()`を使用して設定されたホスト名を取得します。ホスト名が設定されていない場合は、デフォルトのホスト名が返されます。

- `WiFiGenericClass::persistent(bool persistent)` -- ESP32 WiFiライブラリの永続モードを有効または無効にするためのメソッドです。永続モードが有効な場合、Wi-Fi設定は不揮発性メモリ（NVM）に保存され、電源サイクルやリセット後も保持されます。永続モードが無効な場合、設定はRAMに保存され、電源サイクルやリセット後に失われます。

	- **入力パラメータ**
		- **persistent**: 引数がtrueの場合、永続モードが有効になります。引数がfalseの場合、永続モードが無効になります。

- `WiFiGenericClass::enableLongRange(bool enable)` -- WiFiモジュールの長距離（LR）機能を有効または無効にするための関数です。有効にすると、通常より遠くのWiFiネットワークに接続できますが、データ転送速度は低下します。

	- **入力パラメータ**
		- **enable**: 機能を有効にする場合はtrue、無効にする場合はfalseを設定します。

- `WiFiGenericClass::mode(wifi_mode_t m)` -- デバイスのWiFiモードを設定するための関数です。

	- **入力パラメータ**
		- **m**: 設定するモードを指定します。これはwifi_mode_t列挙型で定義された以下の定数のいずれかです：
			- **WIFI_MODE_NULL**: WiFiステーションモードとアクセスポイントモードの両方を無効にします。
			- **WIFI_MODE_STA**: 既存のWiFiネットワークに接続するためにWiFiステーションモードを有効にします。
			- **WIFI_MODE_AP**: 新しいWiFiネットワークを作成するためにアクセスポイントモードを有効にします。
			- **WIFI_MODE_APSTA**: WiFiステーションモードとアクセスポイントモードの両方を有効にします。

- `WiFiGenericClass::setSleep(wifi_ps_type_t sleepType)` -- WiFiモジュールの省電力モードを設定する関数です。

	- **入力パラメータ**
		- **sleepType**: 使用する省電力モードの種類を指定する列挙型です。以下の3つのスリープタイプがあります：
			- **WIFI_PS_NONE**: デフォルトのスリープモードで、WiFiモジュールは省電力モードに入りません。
			- **WIFI_PS_MIN_MODEM**: このモードでは、WiFiモジュールはモデムをシャットダウンしながらアクセスポイント（AP）への接続を維持します。
			- **WIFI_PS_MAX_MODEM**: このモードでは、WiFiモジュールはモデムとステーションの両方をシャットダウンし、APから切断されます。

### STA関数

- `WiFiSTAClass::status()` -- 接続ステータスを返します。

	- **出力**: wl_status_tで定義された値のいずれか。
		- **WL_NO_SHIELD**: Wi-Fiモジュールが存在しないことを示します。
    	- **WL_IDLE_STATUS**: Wi-Fiモジュールが操作を行っていないことを示します。
    	- **WL_NO_SSID_AVAIL**: スキャン中にWi-Fiネットワークが見つからなかったことを示します。
    	- **WL_SCAN_COMPLETED**: Wi-Fiスキャンが正常に完了したことを示します。
    	- **WL_CONNECTED**: ESP32がWi-Fiネットワークに正常に接続されていることを示します。
    	- **WL_CONNECT_FAILED**: Wi-Fiネットワークへの接続が失敗したことを示します。
    	- **WL_CONNECTION_LOST**: Wi-Fiネットワークへの接続が失われたことを示します。
    	- **WL_DISCONNECTED**: ESP32が以前はWi-Fiネットワークに接続されていたが、現在はどのネットワークにも接続されていないことを示します。

- `WiFiSTAClass::begin(const char* wpa2_ssid, wpa2_auth_method_t method, const char* wpa2_identity, const char* wpa2_username, const char *wpa2_password, const char* ca_pem, const char* client_crt, const char* client_key, int32_t channel, const uint8_t* bssid, bool connect)` -- WPA2 Enterprise APへのWiFi接続を開始します。

	- **入力パラメータ**（オプション）
		- **ssid**: SSID文字列へのポインタ。
		- **method**: WPA2の認証方法（WPA2_AUTH_TLS、WPA2_AUTH_PEAP、WPA2_AUTH_TTLS）。
		- **wpa2_identity**: エンティティへのポインタ。
		- **wpa2_username**: ユーザー名へのポインタ。
		- **wpa2_password**: パスワードへのポインタ。
		- **ca_pem**: CA証明書を含む.pemファイルの内容への文字列ポインタ。
		- **client_crt**: クライアント証明書を含む.crtファイルの内容への文字列ポインタ。
		- **client_key**: クライアントキーを含む.keyファイルの内容への文字列ポインタ。
		- **channel**: オプション。APのチャネル。
		- **bssid**: オプション。APのBSSID / MAC。
		- **connect**: オプション。接続を呼び出す。

- `WiFiSTAClass::reconnect()` -- 強制的に切断し、その後APへの再接続を開始します。

	- **出力**: True/False。

- `WiFiSTAClass::disconnect(bool wifioff, bool eraseap)` -- ネットワークから切断します。

	- **入力パラメータ**
		- **wifioff**: Wi-Fiラジオをオフにする場合は`true`。
		- **eraseap**: NVSメモリからAP設定を消去する場合は`true`。
	
	- **出力**: True/False。

- `WiFiSTAClass::config(IPAddress local_ip, IPAddress gateway, IPAddress subnet, IPAddress dns1, IPAddress dns2)` -- DHCPクライアントを無効にしてIP設定を変更します。

	- **入力パラメータ**
		- **local_ip**: 静的IP設定。
		- **gateway**: 静的ゲートウェイ設定。
		- **subnet**: 静的サブネットマスク。
		- **dns1**: 静的DNSサーバー1。
		- **dns2**: 静的DNSサーバー2。

- `WiFiSTAClass::setAutoConnect(bool autoConnect)` -- 廃止予定。ESP32ステーションを電源オン時に記録されたAPに自動的に接続するかどうかを設定します。デフォルトで自動接続を有効にします。

- **入力パラメータ**
		- **autoConnect**: autoConnect ブール値。

	- **出力**: False。

- `WiFiSTAClass::waitForConnectResult(unsigned long timeoutLength)` -- WiFi 接続が結果に到達するのを待機します。

	- **入力パラメータ**
		- **timeoutLength**: 接続が確立されるまでの最大待機時間をミリ秒単位で指定します。

	- **出力**: wl_status_t で定義された値のいずれか。

- `WiFiSTAClass::localIP()` -- ステーションインターフェースの IP アドレスを取得します。

	- **出力**: IPAddress ステーション IP。

- `WiFiSTAClass::macAddress(uint8_t* mac)` -- ステーションインターフェースの MAC アドレスを取得します。

	- **入力パラメータ**
		- **mac** (オプション): 長さが WL_MAC_ADDR_LENGTH の uint8_t 配列へのポインタ。

	- **出力**: uint8_t * へのポインタ。

- `WiFiSTAClass::SSID()` -- ネットワークに関連付けられている現在の SSID を返します。

	- **出力**: SSID。

- `WiFiSTAClass::RSSI(void)` -- 現在のネットワークの RSSI を返します。

	- **出力**: RSSI。

### AP 関数

- `WiFiAPClass::softAP(const char* ssid, const char* passphrase, int channel, int ssid_hidden, int max_connection, bool ftm_responder)` -- これは ESP32-S3 の WiFi ライブラリ内の関数で、SoftAP（ソフトウェアアクセスポイント）を設定するために使用されます。他のデバイスが ESP32-S3 に接続し、そのリソースにアクセスできるようにします。

	- **入力パラメータ**
		-  **ssid**:              SSID へのポインタ（最大 63 文字）。
 		-  **passphrase**:        （WPA2 の場合は最小 8 文字、オープンの場合は NULL を使用）。
 		-  **channel**:           WiFi チャネル番号、1 - 13。
 		-  **ssid_hidden**:       ネットワークの隠蔽（0 = SSID をブロードキャスト、1 = SSID を非表示）。
 		-  **max_connection**:    同時接続可能なクライアントの最大数、1 - 4。

	- **出力**: True/False。

- `WiFiAPClass::softAPgetStationNum()` -- softAP インターフェースに接続されているステーション/クライアントの数を取得します。

	- **出力**: ステーション数。

- `WiFiAPClass::softAPConfig(IPAddress local_ip, IPAddress gateway, IPAddress subnet, IPAddress dhcp_lease_start)` -- SoftAP を構成するための関数。

	- **入力パラメータ**
		- **local_ip**:      アクセスポイント IP。
		- **gateway**:       ゲートウェイ IP。
		- **subnet**:        サブネットマスク。

	- **出力**: True/False。

- `WiFiAPClass::softAPIP()` -- softAP インターフェースの IP アドレスを取得します。

	- **出力**: IPAddress softAP IP。

- `WiFiAPClass::softAPmacAddress(uint8_t* mac)` -- softAP インターフェースの MAC アドレスを取得します。

	- **入力パラメータ**
		- **mac** (オプション):   長さが WL_MAC_ADDR_LENGTH の uint8_t 配列へのポインタ。

	- **出力**: uint8_t* または String mac へのポインタ。

### WiFi スキャン関数

- `WiFiScanClass::scanNetworks(bool async, bool show_hidden, bool passive, uint32_t max_ms_per_chan, uint8_t channel, const char * ssid, const uint8_t * bssid)` -- 利用可能な WiFi ネットワークをスキャンします。

	- **入力パラメータ**
		- **async**: スキャンを非同期で実行するかどうかを決定するブール値。この値が true に設定されている場合、関数は即座に戻り、スキャン結果は後で getScanResults() 関数を呼び出すことで取得できます。false に設定されている場合、スキャンが完了するまで関数はブロックされます。
		- **show_hidden**: 隠しネットワークをスキャン結果に含めるかどうかを決定するブール値。
		- **passive**: パッシブスキャンを実行するかどうかを決定するブール値。この値が true に設定されている場合、スキャン中にパケットを送信しません。これにより時間がかかる場合がありますが、特定の状況で役立つことがあります。
		- **max_ms_per_chan**: 各チャネルをスキャンする最大時間（ミリ秒）。
		- **channel**: スキャンする Wi-Fi チャネル。この値が 0 に設定されている場合、利用可能なすべてのチャネルをスキャンします。
		- **ssid**: スキャン対象のネットワークの SSID を含む null 終端文字列へのポインタ。この値が nullptr に設定されている場合、利用可能なすべてのネットワークをスキャンします。
		- **bssid**: スキャン対象のアクセスポイントの MAC アドレスを含む 6 バイト配列へのポインタ。この値が nullptr に設定されている場合、すべてのアクセスポイントをスキャンします。

	- **出力**: この関数の戻り値は、スキャンされたネットワークの数を示す整数です。

- `WiFiScanClass::getNetworkInfo(uint8_t i, String &ssid, uint8_t &encType, int32_t &rssi, uint8_t* &bssid, int32_t &channel)` -- スキャンされた WiFi のすべての情報をポインタパラメータにロードします。

	- **入力パラメータ**
		- **i**: 指定されたインデックス i のスキャンされたネットワーク情報を取得するために使用されます。
		- **ssid**: ネットワークの SSID を格納する String 変数への参照。
		- **encType**: ネットワークの暗号化タイプ（0 = オープン、1 = WEP、2 = WPA_PSK、3 = WPA2_PSK、4 = WPA_WPA2_PSK）を格納する uint8_t 変数への参照。
		- **rssi**: ネットワークの受信信号強度（RSSI）を格納する int32_t 変数への参照。
		- **bssid**: ネットワークの BSSID（MAC アドレス）を格納する uint8_t* ポインタへの参照。
		- **channel**: ネットワークのチャネル番号を格納する int32_t 変数への参照。

	- **出力**: True/False。

- `WiFiScanClass::SSID(uint8_t i)` -- ネットワークスキャン中に検出された SSID を返します。

	- **入力パラメータ**
		- **i**: 情報を取得したいネットワーク項目を指定します。

	- **出力**: スキャンされたネットワークリスト内の指定された項目の SSID 文字列。

- `WiFiScanClass::RSSI(uint8_t i)` -- scanNetworks 中に検出されたネットワークの RSSI を返します。

	- **入力パラメータ**
		- **i**: 情報を取得したいネットワーク項目を指定します。

	- **出力**: スキャンされたネットワークリスト内の指定された項目の RSSI の符号付き値。

### WiFi クライアント関数

- `WiFiClient::connect(IPAddress ip, uint16_t port, int32_t timeout)` -- WiFiClient ライブラリで使用されるこの関数は、指定されたタイムアウト値でリモート IP アドレスおよびポートに接続します。

	- **入力パラメータ**
		- **ip**:   接続先サーバーの IP アドレス。
		- **port**: 接続先サーバーのポート番号。
		- **timeout** (オプション): 接続が確立されるまでの最大待機時間（ミリ秒）。この時間内に接続が確立されない場合、関数はエラーを返します。timeout が 0 に設定されている場合、接続が確立されるまで無期限に待機します。

- `WiFiClient::stop()` -- この関数は、クライアントをサーバーから切断し、クライアントが使用しているソケットやポートを解放するために使用されます。この関数が呼び出されると、クライアントはデータの送受信ができなくなります。

- `WiFiClient::setTimeout(uint32_t seconds)` -- この関数は、クライアントが接続の確立やデータ受信を待機する最大秒数を設定します。指定されたタイムアウト時間を超えると、接続は閉じられます。

	- **入力パラメータ**
		- **seconds**: タイムアウトの秒数。

- `WiFiClient::write(uint8_t data)` -- WiFiClientインスタンスを通じて接続されたサーバーに単一のバイトデータを書き込みます。または `WiFiClient::write(const uint8_t *buf, size_t size)`。

	- **入力パラメータ**
		- **data**: ネットワーク接続を介して送信する必要がある単一のバイトデータ。

- `WiFiClient::read()` -- この関数は、接続されたサーバーから受信した単一のバイトデータを読み取ります。読み取ったバイトは整数値として返されます。データが利用できない場合は -1 を返します。または `read(uint8_t *buf, size_t size)`。

	- **出力**: 受信したバイト数を示す整数値。返り値が0の場合、サーバーが接続を閉じたことを意味します。

- `WiFiClient::peek()` -- この関数は、サーバーから読み取るデータがあるかどうかを確認するために使用されますが、実際にはデータを読み取りません。

	- **出力**: 受信バッファから削除せずに次の受信データバイトを返します。データが利用できない場合は -1 を返します。

- `WiFiClient::available()` -- この関数は、サーバーから読み取ることができるデータのバイト数を確認するために使用されます。

	- **出力**: 読み取ることができるバイト数を示す整数値を返します。

### WiFi サーバー関数

- `WiFiServer::stopAll()` -- この関数は、Arduino WiFiライブラリのWiFiServerクラスのメソッドです。このメソッドは、WiFiServerクラスを使用して作成されたすべてのサーバーインスタンスを停止します。各インスタンスの`stop()`メソッドを個別に呼び出す代わりに、すべてのサーバーを一度に停止する際に便利です。

- `WiFiServer::begin(uint16_t port, int enable)` -- この関数は、指定されたポートでサーバーを開始するために使用されます。サーバーは、クライアントからの接続を待ち受けます。

	- **入力パラメータ**
		- **port**: 待ち受けるポート番号。
		- **enable** (オプション): サーバーを開始後すぐに有効にするかどうかを示すフラグ。このフラグはデフォルトでtrueに設定されています。

- `WiFiServer::hasClient()` -- この関数は、サーバーに利用可能なクライアント接続があるかどうかを確認するために使用されます。この関数は、新しい接続を継続的にチェックするループ内で使用できます。

	- **出力**: クライアントが接続している場合はWiFiClientオブジェクトを返し、接続待ちのクライアントがいない場合はNULLポインタを返します。

- `WiFiServer::end()` -- この関数は、サーバーを停止し、関連するリソースを解放するために使用されます。この関数が呼び出されると、サーバーは新しいクライアント接続を受け付けることができなくなります。既存のクライアント接続は、クライアントまたはサーバーのいずれかによって閉じられるまで開いたままになります。`WiFiServer::close()`および`WiFiServer::stop()`は同じ機能を持ちます。

### WiFi マルチ関数

- `WiFiMulti::addAP(const char* ssid, const char *passphrase)` -- この関数は、新しいアクセスポイント（AP）をWiFiMultiオブジェクトが接続を試みる利用可能なAPのリストに追加するために使用されます。

	- **入力パラメータ**
		- **ssid**: SSIDへのポインタ（最大63文字）。
		- **passphrase**: （WPA2の場合は最小8文字、オープンの場合はNULLを使用）。

	- **出力**: True/False

- `WiFiMulti::run(uint32_t connectTimeout)` -- この関数は、保存されたアクセスポイントのいずれかに順番に接続を試み、成功するまで接続を試みます。

	- **入力パラメータ**
		- **connectTimeout**: 接続を待機する最大時間をミリ秒単位で指定します。connectTimeoutが0に設定されている場合、関数はタイムアウトせず、無期限に接続を試みます。

	- **出力**: ステータス

## 近くのWiFiネットワークをスキャンする

以下は、XIAO ESP32S3を使用して近くのWiFiネットワークをスキャンするサンプルプログラムです。

Arduino IDEで、**ファイル > Examples > WiFi > WiFiScan**に移動します。これにより、XIAO ESP32S3の範囲内にあるWiFiネットワークをスキャンするスケッチが読み込まれます。

これは、接続しようとしているWiFiネットワークがボードの範囲内にあるかどうかを確認したり、その他の用途に役立ちます。WiFiプロジェクトがうまく動作しないことがあるのは、WiFi信号が弱いためにルーターに接続できない場合があります。

```c
#include "WiFi.h"

void setup() {
  Serial.begin(115200);

  // WiFiをステーションモードに設定し、以前接続されていたAPから切断
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(100);

  Serial.println("セットアップ完了");
}

void loop() {
  Serial.println("スキャン開始");

  // WiFi.scanNetworksは見つかったネットワークの数を返します
  int n = WiFi.scanNetworks();
  Serial.println("スキャン完了");
  if (n == 0) {
      Serial.println("ネットワークが見つかりません");
  } else {
    Serial.print(n);
    Serial.println("個のネットワークが見つかりました");
    for (int i = 0; i < n; ++i) {
      // 見つかった各ネットワークのSSIDとRSSIを出力
      Serial.print(i + 1);
      Serial.print(": ");
      Serial.print(WiFi.SSID(i));
      Serial.print(" (");
      Serial.print(WiFi.RSSI(i));
      Serial.print(")");
      Serial.println((WiFi.encryptionType(i) == WIFI_AUTH_OPEN)?" ":"*");
      delay(10);
    }
  }
  Serial.println("");

  // 再スキャンまで少し待機
  delay(5000);
}
```

プログラムをアップロードして実行すると、XIAO ESP32S3が検索可能な近くのWiFiネットワークがシリアルモニターに表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/37.png" style={{width:600, height:'auto'}}/></div>

### プログラムの注釈

XIAO ESP32S3のWiFi機能を使用するために最初に行うべきことは、コードに**WiFi.h**ライブラリを含めることです。以下のように記述します：

```c
#include <WiFi.h>
```

XIAO ESP32S3はWiFiステーション、アクセスポイント、またはその両方として動作できます。WiFiモードを設定するには、`WiFi.mode()`を使用し、希望するモードを引数として設定します。

```c
WiFi.mode(WIFI_STA);
```

ESP32がWi-Fiステーションとして設定されている場合、他のネットワーク（ルーターなど）に接続できます。

`WiFi.scanNetworks()`は見つかったネットワークの数を返します。スキャン後、各ネットワークに関するパラメータにアクセスできます。`WiFi.SSID()`は特定のネットワークのSSIDを出力します。

`WiFi.RSSI()`はそのネットワークのRSSIを返します。RSSIは受信信号強度指標を意味し、アクセスポイントやルーターからRFクライアントデバイスが受信している電力レベルの推定値です。

最後に、`WiFi.encryptionType()`はネットワークの暗号化タイプを返します。この例では、オープンネットワークの場合に*を表示します。ただし、この関数は以下のオプションのいずれかを返すことができます（オープンネットワークだけではありません）：
- WIFI_AUTH_OPEN
- WIFI_AUTH_WEP
- WIFI_AUTH_WPA_PSK
- WIFI_AUTH_WPA2_PSK
- WIFI_AUTH_WPA_WPA2_PSK
- WIFI_AUTH_WPA2_ENTERPRISE

## WiFiネットワークに接続する

ESP32を特定のWi-Fiネットワークに接続するには、そのSSIDとパスワードを知っている必要があります。また、そのネットワークがESP32のWiFi範囲内にある必要があります（範囲内かどうかを確認するには、前述の例を使用してWiFiネットワークをスキャンできます）。

以下は、XIAO ESP32S3を使用して指定されたネットワークに接続する例です。このプログラムでは、`initWiFi()`関数がネットワークへの接続を担当します。

```c
#include "WiFi.h"

// ネットワークの認証情報を置き換えてください
const char* ssid = "REPLACE_WITH_YOUR_SSID";
const char* password = "REPLACE_WITH_YOUR_PASSWORD";

void initWiFi() {
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  Serial.print("WiFiに接続中 ..");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print('.');
    delay(1000);
  }
  Serial.println();
  Serial.println(WiFi.localIP());
}

void setup() {
  Serial.begin(115200);

  // WiFiをステーションモードに設定し、以前接続されていたAPから切断
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(100);

  initWiFi();
}

void loop() {
  
}
```

プログラムをアップロードして実行し、シリアルモニターを開きます。ネットワークに接続すると、シリアルモニターに接続が成功するまでドットの文字列が表示され、接続が成功するとXIAOのIPアドレスが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/38.png" style={{width:600, height:'auto'}}/></div>

### プログラムの注釈

この関数がどのように動作するかを簡単に見てみましょう。

まず、WiFiモードを設定します。XIAO ESP32S3が他のネットワーク（アクセスポイント/ホットスポット）に接続する場合、ステーションモードである必要があります。

```c
WiFi.mode(WIFI_STA);
```

次に、`WiFi.begin()`を使用してネットワークに接続します。ネットワークのSSIDとそのパスワードを引数として渡す必要があります：

```c
WiFi.begin(ssid, password);
```

WiFiネットワークへの接続には時間がかかる場合があるため、通常は`WiFi.status()`を使用して接続が確立されたかどうかを確認するwhileループを追加します。接続が成功すると、`WL_CONNECTED`を返します。

WiFi接続の強度を取得したい場合は、WiFi接続後に`WiFi.RSSI()`を呼び出すだけです。

## softAPの使用方法

XIAO ESP32S3をアクセスポイント（ホットスポット）として設定すると、WiFi機能を持つ任意のデバイスを使用して、ルーターに接続することなくESP32に接続できます。

簡単に言えば、XIAO ESP32S3をアクセスポイントとして設定すると、独自のWiFiネットワークを作成し、近くのWiFiデバイス（ステーション）がそれに接続できるようになります（スマートフォンやコンピュータなど）。

Arduino IDEで、**File > Examples > WiFi > WiFiAccessPoint**に移動します。この例では、XIAO ESP32S3を使用してホットスポットを作成し、ホットスポットに接続された簡単なウェブページを通じてライトのオン/オフスイッチを制御する方法を示します。

:::note
1. サンプルプログラムにいくつかの小さな変更を加え、LED_BUILTINをコメントアウトしました。これは、XIAO ESP32S3には独自のユーザーインジケーターがあり、外部LEDが不要だからです。
2. LEDは、XIAO ESP32S3のユーザーLEDピンが高レベルに設定された場合にのみオフになり、ピンが低レベルに設定された場合にのみオンになります。
3. プログラム内のホットスポット名とパスワードを希望のものに変更する必要があります。
:::

```c
/*
  WiFiAccessPoint.inoはWiFiアクセスポイントを作成し、その上でウェブサーバーを提供します。

  手順:
  1. アクセスポイント "yourAp" に接続します。
  2. ウェブブラウザで http://192.168.4.1/H にアクセスしてLEDをオンにするか、http://192.168.4.1/L にアクセスしてオフにします。
     または
     PuTTYターミナルで192.168.4.1をIPアドレス、80をポートとして設定し、"GET /H" および "GET /L" を実行します。

  2018年7月4日にarduino-esp32用に作成
  作成者: Elochukwu Ifediora (fedy0)
*/

#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>

//#define LED_BUILTIN 2   // テスト用LEDを接続したGPIOピンを設定するか、開発ボードに内蔵LEDがある場合はこの行をコメントアウトします。

// 希望の認証情報を設定してください。
const char *ssid = "XIAO_ESP32S3";
const char *password = "password";

WiFiServer server(80);

void setup() {
  pinMode(LED_BUILTIN, OUTPUT);

  Serial.begin(115200);
  Serial.println();
  Serial.println("アクセスポイントを設定中...");

  // APをオープンにしたい場合は、パスワードパラメータを削除できます。
  WiFi.softAP(ssid, password);
  IPAddress myIP = WiFi.softAPIP();
  Serial.print("APのIPアドレス: ");
  Serial.println(myIP);
  server.begin();

  Serial.println("サーバーが開始されました");
}

void loop() {
  WiFiClient client = server.available();   // 接続してくるクライアントを待機

  if (client) {                             // クライアントが接続した場合
    Serial.println("新しいクライアントが接続しました。"); // シリアルポートにメッセージを出力
    String currentLine = "";                // クライアントからのデータを保持する文字列を作成
    while (client.connected()) {            // クライアントが接続している間ループ
      if (client.available()) {             // クライアントから読み取れるバイトがある場合
        char c = client.read();             // バイトを読み取り
        Serial.write(c);                    // シリアルモニタに出力
        if (c == '\n') {                    // バイトが改行文字の場合

          // 現在の行が空の場合、2つの改行文字が連続していることを意味します。
          // これはクライアントHTTPリクエストの終わりなので、レスポンスを送信します:
          if (currentLine.length() == 0) {
            // HTTPヘッダーは常にレスポンスコード（例: HTTP/1.1 200 OK）と
            // コンテンツタイプで始まり、その後に空行が続きます:
            client.println("HTTP/1.1 200 OK");
            client.println("Content-type:text/html");
            client.println();

            // HTTPレスポンスの内容はヘッダーの後に続きます:
            client.print("LEDをオンにするには <a href=\"/H\">ここをクリック</a>。<br>");
            client.print("LEDをオフにするには <a href=\"/L\">ここをクリック</a>。<br>");

            // HTTPレスポンスはさらに空行で終了します:
            client.println();
            // whileループを抜けます:
            break;
          } else {    // 改行を受け取った場合、currentLineをクリアします:
            currentLine = "";
          }
        } else if (c != '\r') {  // キャリッジリターン文字以外の場合
          currentLine += c;      // currentLineの末尾に追加
        }

        // クライアントリクエストが "GET /H" または "GET /L" であるか確認:
        if (currentLine.endsWith("GET /H")) {
          digitalWrite(LED_BUILTIN, LOW);                 // GET /HでLEDをオンにする
        }
        if (currentLine.endsWith("GET /L")) {
          digitalWrite(LED_BUILTIN, HIGH);                // GET /LでLEDをオフにする
        }
      }
    }
    // 接続を閉じる:
    client.stop();
    Serial.println("クライアントが切断されました。");
  }
}
```

プログラムをアップロードして実行すると、XIAO ESP32S3は「XIAO_ESP32S3」という名前のホットスポットを作成します。コンピュータやスマートフォンを使用して、このネットワークに「password」というパスワードで接続できます。その後、ブラウザで「192.168.4.1」を開き、LEDスイッチを制御するウェブページにアクセスします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/39.png" style={{width:800, height:'auto'}}/></div>

### プログラムの注釈

`setup()`内には、`softAP()`メソッドを使用してESP32をアクセスポイントとして設定するセクションがあります:

```c
WiFi.softAP(ssid, password);
```

次に、`softAPIP()`メソッドを使用してアクセスポイントのIPアドレスを取得し、それをシリアルモニタに出力する必要があります。

```c
IPAddress myIP = WiFi.softAPIP();
Serial.print("APのIPアドレス: ");
Serial.println(myIP);
server.begin();
```

これらは、XIAO ESP32S3をアクセスポイントとして設定するために、ウェブサーバースケッチに含める必要があるコードスニペットです。

## WiFi & MQTT の使用

XIAO ESP32S3 は、MQTT プロトコルをサポートする強力なマザーボードであり、デバイス間の信頼性が高く効率的な通信を必要とする IoT プロジェクトに最適です。

```c
#include <WiFi.h>
#include <PubSubClient.h>

// ネットワークの認証情報を置き換えてください
const char* ssid = "your_SSID";
const char* password = "your_PASSWORD";

// MQTT ブローカーの IP アドレス
const char* mqtt_server = "test.mosquitto.org";

// WiFi と MQTT クライアントオブジェクトを初期化
WiFiClient espClient;
PubSubClient client(espClient);

void setup() {
  Serial.begin(115200);

  // WiFi ネットワークに接続
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("WiFi に接続中...");
  }

  Serial.println("WiFi に接続しました");

  // MQTT ブローカーのサーバー IP アドレスとポートを設定
  client.setServer(mqtt_server, 1883);

  // MQTT ブローカーに接続
  while (!client.connected()) {
    if (client.connect("ESP32Client")) {
      Serial.println("MQTT ブローカーに接続しました");
    } else {
      Serial.print("MQTT ブローカーへの接続に失敗しました, rc=");
      Serial.print(client.state());
      Serial.println(" 5秒後に再試行します");
      delay(5000);
    }
  }

  // MQTT トピックを購読
  client.subscribe("test/topic");
}

void loop() {
  // MQTT クライアントが接続されているか確認
  if (!client.connected()) {
    // MQTT ブローカーに再接続
    if (client.connect("ESP32Client")) {
      Serial.println("MQTT ブローカーに再接続しました");
      // 再接続後に MQTT トピックを購読
      client.subscribe("test/topic");
    }
  }

  // MQTT メッセージを処理
  client.loop();

  // MQTT ブローカーにメッセージを公開
  client.publish("test/topic", "Hello from XIAO ESP32S3");
  delay(5000);
}
```

このサンプルプログラムでは、XIAO ESP32S3 が WiFi を介してネットワークに接続し、指定された MQTT ブローカーに接続します。そして、トピック **test/topic** を購読し、5 秒ごとにそのトピックにメッセージを公開します。

XIAO ESP32S3 が MQTT ブローカーからメッセージを受信すると、それを `client.onMessage` コールバック関数で処理できます。このサンプルプログラム内の変数 `ssid`、`password`、`mqtt_server` などを、自分のネットワークおよび MQTT サーバー情報に置き換える必要があります。

:::tip
サンプルプログラムで提供されている MQTT サーバーアドレス `test.mosquitto.org` はテスト目的のみです。このアドレスに個人情報を送信しないでください。このリンクを使用して誰でも情報を取得できる可能性があります。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/41.png" style={{width:800, height:'auto'}}/></div>


## WiFi & HTTP/HTTPS の使用

この部分は、XIAO ESP32C3 を使用して ChatGPT にアクセスするために作成した例を参照できます。この例では、WiFiClient と HTTPClient の使用方法について詳しく紹介しています。

- [XIAO ESP32C3 で WiFiClient と HTTPClient を使用する方法を学ぶ - XIAO ESP32C3 & ChatGPT の実践](https://wiki.seeedstudio.com/ja/xiaoesp32c3-chatgpt)

## WiFi メッシュ

[Espressif のドキュメント](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/mesh.html) によると：

「ESP-MESH は Wi-Fi プロトコルの上に構築されたネットワーキングプロトコルです。ESP-MESH を使用すると、広い物理的エリア（屋内および屋外の両方）に分散した多数のデバイス（ノードと呼ばれる）を単一の WLAN（ワイヤレスローカルエリアネットワーク）に接続できます。ESP-MESH は自己組織化および自己修復機能を備えており、ネットワークを自律的に構築および維持できます。」

従来の Wi-Fi ネットワークアーキテクチャでは、単一のノード（アクセスポイント – 通常はルーター）が他のすべてのノード（ステーション）に接続されています。各ノードはアクセスポイントを使用して互いに通信できます。ただし、これはアクセスポイントの Wi-Fi 範囲に制限されます。すべてのステーションは、アクセスポイントに直接接続するための範囲内にある必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/42.png" style={{width:800, height:'auto'}}/></div>

ESP-MESH を使用すると、ノードは中央ノードに接続する必要がありません。ノードは互いの通信を中継する役割を果たします。これにより、複数のデバイスが広い物理的エリアに分散することが可能になります。ノードは自己組織化し、動的に通信して、パケットが最終的なノードの宛先に到達することを保証します。ネットワークからノードが削除されても、自己組織化してパケットが宛先に到達するようにします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/43.png" style={{width:800, height:'auto'}}/></div>

[painlessMesh ライブラリ](https://gitlab.com/painlessMesh/painlessMesh) を使用すると、ESP32 ボードで簡単にメッシュネットワークを作成できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/44.png" style={{width:800, height:'auto'}}/></div>

このライブラリを使用するために依存パッケージをダウンロードするように求めるウィンドウが表示された場合、それらも一緒にダウンロードする必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/45.png" style={{width:500, height:'auto'}}/></div>

このウィンドウが表示されない場合は、以下のライブラリ依存関係をインストールする必要があります：

- [ArduinoJson](https://github.com/bblanchon/ArduinoJson) (bblanchon による)
- [TaskScheduler](https://github.com/arkhipenko/TaskScheduler)
- [AsyncTCP](https://github.com/me-no-dev/AsyncTCP) (ESP32)

ESP-MESH を始めるには、まずライブラリの基本的な例を試してみます。この例では、すべてのボードが他のすべてのボードにメッセージをブロードキャストするメッシュネットワークを作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/46.png" style={{width:700, height:'auto'}}/></div>

コードをアップロードする前に、`MESH_PREFIX`（メッシュネットワークの名前のようなもの）と `MESH_PASSWORD` 変数を設定できます（任意の値を設定可能です）。

次に、各ボードが送信したメッセージを簡単に識別できるように、以下の行を変更することをお勧めします。例えば、ノード1の場合、メッセージを次のように変更します。

```c
String msg = "Hi from node 1 ";
```

さて、次は2つのXIAO ESP32S3を例として使用します。ネットワーク接続後の概念図は以下のようになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/47.png" style={{width:700, height:'auto'}}/></div>

プログラムをそれぞれのXIAOにアップロードし、シリアルポートモニターを開いてボーレートを115200に設定します。（XIAOが2つある場合、追加のシリアルポートソフトウェアが必要になることがあります）。プログラムが正常に動作すれば、以下の結果が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/48.png" style={{width:800, height:'auto'}}/></div>

### プログラムの注釈

まず、painlessMeshライブラリをインクルードします。その後、メッシュの詳細を追加します。`MESH_PREFIX`はメッシュの名前を指します。`MESH_PASSWORD`はその名の通りメッシュのパスワードです。メッシュ内のすべてのノードは同じ`MESH_PREFIX`と`MESH_PASSWORD`を使用する必要があります。`MESH_PORT`はメッシュサーバーを実行するTCPポートを指します。デフォルトは**5555**です。

メッシュネットワークコードでは`delay()`の使用を避けることを推奨します。メッシュを維持するためには、バックグラウンドでいくつかのタスクを実行する必要があります。`delay()`を使用するとこれらのタスクが停止し、メッシュが不安定になったり崩壊したりする可能性があります。その代わりに、painlessMesh自体で使用されている`TaskScheduler`を使用してタスクを実行することを推奨します。以下の行は、新しい`Scheduler`を作成します。

```c
Scheduler userScheduler; // 個人タスクを制御するため
```

メッシュネットワークを処理するために`painlessMesh`オブジェクトを作成します。

```c
painlessMesh  mesh;
```

プログラムが実行されている限り、毎秒`sendMessage()`関数を呼び出すタスク`taskSendMessage`を作成します。

```c
Task taskSendMessage(TASK_SECOND * 1 , TASK_FOREVER, &sendMessage);
```

`sendMessage()`関数はメッシュネットワーク内のすべてのノードにメッセージを送信します（ブロードキャスト）。

```c
void sendMessage() {
  String msg = "Hello from node 1";
  msg += mesh.getNodeId();
  mesh.sendBroadcast( msg );
  taskSendMessage.setInterval(random(TASK_SECOND * 1, TASK_SECOND * 5));
}
```

メッセージには「Hello from node 1」というテキストとボードのチップIDが含まれます。

メッセージをブロードキャストするには、メッシュオブジェクトの`sendBroadcast()`メソッドを使用し、引数として送信したいメッセージ（msg）を渡します。

```c
mesh.sendBroadcast(msg);
```

新しいメッセージが送信されるたびに、コードはメッセージ間の間隔（一秒から五秒）を変更します。

```c
taskSendMessage.setInterval(random(TASK_SECOND * 1, TASK_SECOND * 5));
```

次に、特定のイベントがメッシュで発生したときに呼び出されるいくつかのコールバック関数を作成します。`receivedCallback()`関数はメッセージ送信者（from）とメッセージの内容（`msg.c_str()`）を出力します。

```c
void receivedCallback( uint32_t from, String &msg ) {
  Serial.printf("startHere: Received from %u msg=%s\n", from, msg.c_str());
}
```

`newConnectionCallback()`関数は新しいノードがネットワークに参加するたびに実行されます。この関数は新しいノードのチップIDを出力するだけです。この関数を変更して他のタスクを実行することもできます。

```c
void newConnectionCallback(uint32_t nodeId) {
  Serial.printf("--> startHere: New Connection, nodeId = %u\n", nodeId);
}
```

`changedConnectionCallback()`関数はネットワーク内の接続が変更されたとき（ノードが参加または離脱したとき）に実行されます。

```c
void changedConnectionCallback() {
  Serial.printf("Changed connections\n");
}
```

`nodeTimeAdjustedCallback()`関数はネットワークが時間を調整してすべてのノードを同期したときに実行されます。この関数はオフセットを出力します。

```c
void nodeTimeAdjustedCallback(int32_t offset) {
  Serial.printf("Adjusted time %u. Offset = %d\n", mesh.getNodeTime(),offset);
}
```

`setup()`では、シリアルモニターを初期化します。必要なデバッグメッセージタイプを選択します。

```c
//mesh.setDebugMsgTypes( ERROR | MESH_STATUS | CONNECTION | SYNC | COMMUNICATION | GENERAL | MSG_TYPES | REMOTE ); // すべてのタイプをオンにする

mesh.setDebugMsgTypes( ERROR | STARTUP );  // 初期化前に設定してスタートアップメッセージを確認
```

前述の詳細を使用してメッシュを初期化します。

```c
mesh.init(MESH_PREFIX, MESH_PASSWORD, &userScheduler, MESH_PORT);
```

すべてのコールバック関数を対応するイベントに割り当てます。

```c
mesh.onReceive(&receivedCallback);
mesh.onNewConnection(&newConnectionCallback);
mesh.onChangedConnections(&changedConnectionCallback);
mesh.onNodeTimeAdjusted(&nodeTimeAdjustedCallback);
```

最後に、`taskSendMessage`関数を`userScheduler`に追加します。スケジューラーはタスクを適切なタイミングで処理および実行する役割を担います。

```c
userScheduler.addTask(taskSendMessage);
```

最後に、`taskSendMessage`を有効にして、プログラムがメッシュにメッセージを送信し始めるようにします。

```c
taskSendMessage.enable();
```

メッシュを維持するために、`loop()`に`mesh.update()`を追加します。

```c
void loop() {
  // ユーザースケジューラーも実行されます
  mesh.update();
}
```

## トラブルシューティング

### Q1: ソフトAPの例を使用している際に、XIAO ESP32S3のホットスポットに接続できないのはなぜですか？

これは、XIAO ESP32S3のアンテナ強度が不足しているか、XIAO ESP32S3が過熱していることが原因である可能性があります。この例を使用した場合、XIAO ESP32S3のチップは最大で50度の温度に達することが確認されています。長時間実行するとネットワーク異常が発生する可能性があります。この場合、冷却して再試行してください。

過熱が原因ではない場合、アンテナ信号が問題の原因である可能性があります。付属のアンテナの強度は一般的に高強度のネットワーク作業をサポートできません。そのため、必要に応じて適切なスティックアンテナを購入して使用することをお勧めします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/40.jpg" style={{width:600, height:'auto'}}/></div>

## 引用 & 参考文献

この記事は、ESP32に関するウェブコンテンツ **[Random Nerd Tutorials](https://randomnerdtutorials.com/)** を参考にしており、Seeed Studio XIAO ESP32S3で検証されています。

**Random Nerd Tutorials** の著者の皆様の努力に感謝します！

以下は元記事への参考リンクです。以下のリンクを通じてESP32ネットワークについてさらに学ぶことができます。

- [ESP32 Useful Wi-Fi Library Functions (Arduino IDE)](https://randomnerdtutorials.com/esp32-useful-wi-fi-functions-arduino/)
- [ESP32 MQTT – Publish and Subscribe with Arduino IDE](https://randomnerdtutorials.com/esp32-mqtt-publish-subscribe-arduino-ide/)
- [ESP-MESH with ESP32 and ESP8266: Getting Started (painlessMesh library)](https://randomnerdtutorials.com/esp-mesh-esp32-esp8266-painlessmesh/)

ESP32開発ボードの使用に関する詳細情報については、Random Nerd Tutorialsの公式ウェブサイトをご覧ください。

- [Random Nerd Tutorials](https://randomnerdtutorials.com/)

## 技術サポート & 製品ディスカッション

.

私たちの製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>