---
description: Seeed Studio XIAO ESP32C6 を使用した WiFi の利用方法。
title: WiFi の利用方法
keywords:
  - esp32c6
  - xiao
  - arduino
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao_wifi_usage_esp32c6
sidebar_position: 3
last_update:
  date: 05/15/2025
  author: Spencer
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Seeed Studio XIAO ESP32C6 を使用した WiFi の利用方法

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32C6</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

Seeed Studio XIAO ESP32C6 は、2.4GHz WiFi - 802.11b/g/n と Bluetooth Low Energy (BLE) 5.0 のデュアル無線通信をサポートすることで、優れた RF 性能を誇る組み込み開発ボードです。この機能により、XIAO ESP32C6 は幅広い IoT（モノのインターネット）アプリケーションにおいて信頼性が高く高速な無線接続を提供します。ボードにはオンボードセラミックアンテナが搭載されており、外部アンテナが不要で設計プロセスが簡素化されています。また、ESP32C6 チップは低消費電力を実現しており、バッテリー駆動の IoT デバイスに適しています。このチュートリアルでは、XIAO ESP32C6 の Wi-Fi 機能を活用して Wi-Fi ネットワークに接続し、基本的なネットワークタスクを実行する方法を探ります。

:::tip
GPIO14 は、内蔵アンテナと外部アンテナの使用を切り替えるために使用されます。その前に、GPIO3 を低レベルに設定してこの機能を有効にする必要があります。GPIO14 を低レベルに設定すると内蔵アンテナが使用され、高レベルに設定すると外部アンテナが使用されます。デフォルトは低レベルです。高レベルに設定したい場合は、以下のコードを参照してください。
```cpp
void setup() {
  pinMode(3, OUTPUT);
  digitalWrite(3, LOW);// この機能を有効にする
  delay(100);
  pinMode(14, OUTPUT); 
  digitalWrite(14, HIGH);// 外部アンテナを使用
}
```
:::

## WiFi ライブラリの一般的なインターフェース

ESP32-C6 は、幅広い WiFi ネットワーク機能を提供します。一般的に、ESP32 の組み込みパッケージ内の WiFi ライブラリの機能を確認し、目的の機能を実現するために対応する機能を選択します。次に、よく使用されるインターフェースをいくつかリストアップし、その使用方法を紹介します。

### 一般的な WiFi 機能

- `WiFiGenericClass::getHostname()` -- ESP32 の WiFi ライブラリに含まれる関数で、デバイスのホスト名を文字列として返します。ホスト名はネットワーク上でデバイスを識別する一意の名前です。この関数は、以前に `WiFiGenericClass::setHostname()` を使用して設定されたホスト名を取得します。ホスト名が設定されていない場合、デフォルトのホスト名が返されます。

- `WiFiGenericClass::persistent(bool persistent)` -- ESP32 WiFi ライブラリの永続モードを有効または無効にするためのメソッドです。永続モードが有効な場合、Wi-Fi 設定は不揮発性メモリ (NVM) に保存され、電源オフやリセット後も保持されます。永続モードが無効な場合、設定は RAM に保存され、電源オフやリセット後に失われます。

	- **入力パラメータ**
		- **persistent**: 引数が true の場合、永続モードが有効になります。引数が false の場合、永続モードが無効になります。

- `WiFiGenericClass::enableLongRange(bool enable)` -- WiFi モジュールのロングレンジ (LR) 機能を有効または無効にするための関数です。有効にすると、通常よりも遠くの WiFi ネットワークに接続できますが、データレートは低下します。

	- **入力パラメータ**
		- **enable**: 機能を有効にする場合は true、無効にする場合は false を設定します。

- `WiFiGenericClass::mode(wifi_mode_t m)` -- デバイスの WiFi モードを設定するための関数です。

	- **入力パラメータ**
		- **m**: 設定するモードを指定します。これは wifi_mode_t 列挙型で定義された以下の定数のいずれかです：
			- **WIFI_MODE_NULL**: WiFi ステーションモードとアクセスポイントモードの両方を無効にします。
			- **WIFI_MODE_STA**: 既存の WiFi ネットワークに接続するための WiFi ステーションモードを有効にします。
			- **WIFI_MODE_AP**: 新しい WiFi ネットワークを作成するためのアクセスポイントモードを有効にします。
			- **WIFI_MODE_APSTA**: WiFi ステーションモードとアクセスポイントモードの両方を有効にします。

- `WiFiGenericClass::setSleep(wifi_ps_type_t sleepType)` -- WiFi モジュールの省電力モードを設定する関数です。

	- **入力パラメータ**
		- **sleepType**: 使用する省電力モードの種類を指定する列挙型です。以下の 3 種類があります：
			- **WIFI_PS_NONE**: デフォルトのスリープモードで、WiFi モジュールは省電力モードに入りません。
			- **WIFI_PS_MIN_MODEM**: このモードでは、WiFi モジュールはモデムをシャットダウンしながらアクセスポイント (AP) への接続を維持します。
			- **WIFI_PS_MAX_MODEM**: このモードでは、WiFi モジュールはモデムとステーションの両方をシャットダウンし、AP から切断されます。

### STA 関数

- `WiFiSTAClass::status()` -- 接続ステータスを返します。

	- **出力**: wl_status_t で定義された値のいずれか。
		- **WL_NO_SHIELD**: Wi-Fi モジュールが存在しないことを示します。
    	- **WL_IDLE_STATUS**: Wi-Fi モジュールが何も操作を行っていないことを示します。
    	- **WL_NO_SSID_AVAIL**: スキャン中に Wi-Fi ネットワークが見つからなかったことを示します。
    	- **WL_SCAN_COMPLETED**: Wi-Fi スキャンが正常に完了したことを示します。
    	- **WL_CONNECTED**: ESP32 が Wi-Fi ネットワークに正常に接続されていることを示します。
    	- **WL_CONNECT_FAILED**: Wi-Fi ネットワークへの接続が失敗したことを示します。
    	- **WL_CONNECTION_LOST**: Wi-Fi ネットワークへの接続が失われたことを示します。
    	- **WL_DISCONNECTED**: ESP32 が以前は Wi-Fi ネットワークに接続されていたが、現在はどのネットワークにも接続されていないことを示します。

- `WiFiSTAClass::begin(const char* wpa2_ssid, wpa2_auth_method_t method, const char* wpa2_identity, const char* wpa2_username, const char *wpa2_password, const char* ca_pem, const char* client_crt, const char* client_key, int32_t channel, const uint8_t* bssid, bool connect)` -- WPA2 Enterprise AP への WiFi 接続を開始します。

	- **入力パラメータ**（オプション）
		- **ssid**: SSID 文字列へのポインタ。
		- **method**: WPA2 の認証方式（WPA2_AUTH_TLS, WPA2_AUTH_PEAP, WPA2_AUTH_TTLS）。
		- **wpa2_identity**: エンティティへのポインタ。
		- **wpa2_username**: ユーザー名へのポインタ。
		- **wpa2_password**: パスワードへのポインタ。
		- **ca_pem**: CA 証明書を含む .pem ファイルの内容を指す文字列へのポインタ。
		- **client_crt**: クライアント証明書を含む .crt ファイルの内容を指す文字列へのポインタ。
		- **client_key**: クライアントキーを含む .key ファイルの内容を指す文字列へのポインタ。
		- **channel**: オプション。AP のチャンネル。
		- **bssid**: オプション。AP の BSSID / MAC。
		- **connect**: オプション。接続を呼び出すかどうか。

- `WiFiSTAClass::reconnect()` -- 強制的に切断し、その後 AP への再接続を開始します。

	- **出力**: True/False。

- `WiFiSTAClass::disconnect(bool wifioff, bool eraseap)` -- ネットワークから切断します。

	- **入力パラメータ**
		- **wifioff**: Wi-Fi ラジオをオフにする場合は `true`。
		- **eraseap**: NVS メモリから AP 設定を消去する場合は `true`。
	
	- **出力**: True/False。

- `WiFiSTAClass::config(IPAddress local_ip, IPAddress gateway, IPAddress subnet, IPAddress dns1, IPAddress dns2)` -- DHCP クライアントを無効にして IP 設定を変更します。

	- **入力パラメータ**
		- **local_ip**: 静的 IP 設定。
		- **gateway**: 静的ゲートウェイ設定。
		- **subnet**: 静的サブネットマスク。
		- **dns1**: 静的 DNS サーバー 1。
		- **dns2**: 静的 DNS サーバー 2。

- `WiFiSTAClass::setAutoConnect(bool autoConnect)` -- 非推奨。ESP32 ステーションを電源投入時に自動的に記録された AP に接続するかどうかを設定します。デフォルトで自動接続を有効にします。

	- **入力パラメータ**
		- **autoConnect**: autoConnect ブール値。

	- **出力**: False。

- `WiFiSTAClass::waitForConnectResult(unsigned long timeoutLength)` -- WiFi 接続が結果に到達するのを待ちます。

	- **入力パラメータ**
		- **timeoutLength**: 接続が確立されるまでの最大待機時間（ミリ秒単位）。

	- **出力**: wl_status_t で定義された値のいずれか。

- `WiFiSTAClass::localIP()` -- ステーションインターフェースの IP アドレスを取得します。

	- **出力**: IPAddress ステーション IP。

- `WiFiSTAClass::macAddress(uint8_t* mac)` -- ステーションインターフェースの MAC アドレスを取得します。

	- **入力パラメータ**
		- **mac**（オプション）: 長さが WL_MAC_ADDR_LENGTH の uint8_t 配列へのポインタ。

	- **出力**: uint8_t * へのポインタ。

- `WiFiSTAClass::SSID()` -- ネットワークに関連付けられている現在の SSID を返します。

	- **出力**: SSID。

- `WiFiSTAClass::RSSI(void)` -- 現在のネットワーク RSSI を返します。

	- **出力**: RSSI。

### AP 関数

- `WiFiAPClass::softAP(const char* ssid, const char* passphrase, int channel, int ssid_hidden, int max_connection, bool ftm_responder)` -- これは ESP32-C6 の WiFi ライブラリ内の関数で、SoftAP（ソフトウェアアクセスポイント）を設定します。これにより、他のデバイスが ESP32-C6 に接続してそのリソースにアクセスできるようになります。

	- **入力パラメータ**
		-  **ssid**:              SSID へのポインタ（最大 63 文字）。
 		-  **passphrase**:        （WPA2 の場合は最小 8 文字、オープンの場合は NULL を使用）。
 		-  **channel**:           WiFi チャンネル番号、1 - 13。
 		-  **ssid_hidden**:       ネットワークの隠蔽（0 = SSID をブロードキャスト、1 = SSID を非表示）。
 		-  **max_connection**:    最大同時接続クライアント数、1 - 4。

	- **出力**: True/False。

- `WiFiAPClass::softAPgetStationNum()` -- softAP インターフェースに接続されているステーション / クライアントの数を取得します。

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
		- **mac**（オプション）: 長さが WL_MAC_ADDR_LENGTH の uint8_t 配列へのポインタ。

	- **出力**: uint8_t* または String mac。

### WiFi スキャン関数

- `WiFiScanClass::scanNetworks(bool async, bool show_hidden, bool passive, uint32_t max_ms_per_chan, uint8_t channel, const char * ssid, const uint8_t * bssid)` -- 利用可能な WiFi ネットワークをスキャンします。

	- **入力パラメータ**
		- **async**: スキャンを非同期で実行するかどうかを決定するブール値。この値が true に設定されている場合、関数はすぐに戻り、スキャン結果は後で getScanResults() 関数を呼び出すことで取得できます。この値が false に設定されている場合、関数はスキャンが完了するまでブロックします。
		- **show_hidden**: スキャン結果に隠しネットワークを含めるかどうかを決定するブール値。
		- **passive**: パッシブスキャンを実行するかどうかを決定するブール値。この値が true に設定されている場合、スキャン中にパケットを送信しません。これにより時間がかかる場合がありますが、特定の状況で役立つことがあります。
		- **max_ms_per_chan**: 各チャンネルのスキャンに費やす最大時間（ミリ秒単位）。
		- **channel**: スキャンする Wi-Fi チャンネル。この値が 0 に設定されている場合、すべての利用可能なチャンネルをスキャンします。
		- **ssid**: スキャン対象のネットワークの SSID を含むヌル終端文字列へのポインタ。この値が nullptr に設定されている場合、すべての利用可能なネットワークをスキャンします。
		- **bssid**: スキャン対象のアクセスポイントの MAC アドレスを含む 6 バイト配列へのポインタ。この値が nullptr に設定されている場合、すべてのアクセスポイントをスキャンします。

- **出力**: この関数の戻り値は、スキャンされたネットワークの数を示す整数です。

- `WiFiScanClass::getNetworkInfo(uint8_t i, String &ssid, uint8_t &encType, int32_t &rssi, uint8_t* &bssid, int32_t &channel)` -- スキャンされたWiFiネットワークの情報をポインタパラメータにロードします。

	- **入力パラメータ**
		- **i**: 指定されたインデックス i のスキャンされたネットワーク情報を取得するために使用されます。
		- **ssid**: ssid パラメータは、ネットワークのSSIDを格納するString型変数への参照です。
		- **encType**: encType パラメータは、ネットワークの暗号化タイプを格納するuint8_t型変数への参照です (0 = オープン, 1 = WEP, 2 = WPA_PSK, 3 = WPA2_PSK, 4 = WPA_WPA2_PSK)。
		- **rssi**: rssi パラメータは、ネットワークの受信信号強度 (RSSI) を格納するint32_t型変数への参照です。
		- **bssid**: bssid パラメータは、ネットワークのBSSID (MACアドレス) を格納するuint8_t*型ポインタへの参照です。
		- **channel**: channel パラメータは、ネットワークのチャンネル番号を格納するint32_t型変数への参照です。

	- **出力**: True/False。

- `WiFiScanClass::SSID(uint8_t i)` -- ネットワークスキャン中に検出されたSSIDを返します。

	- **入力パラメータ**
		- **i**: 情報を取得したいネットワーク項目を指定します。

	- **出力**: スキャンされたネットワークリスト内の指定された項目のSSID文字列。

- `WiFiScanClass::RSSI(uint8_t i)` -- scanNetworks中に検出されたネットワークのRSSIを返します。

	- **入力パラメータ**
		- **i**: 情報を取得したいネットワーク項目を指定します。

	- **出力**: スキャンされたネットワークリスト内の指定された項目のRSSIの符号付き値。

### WiFi クライアント関数

- `WiFiClient::connect(IPAddress ip, uint16_t port, int32_t timeout)` -- WiFiClientライブラリで、指定されたタイムアウト値を使用してリモートIPアドレスとポートに接続するために使用される関数です。

	- **入力パラメータ**
		- **ip**: 接続するサーバーのIPアドレス。
		- **port**: 接続するサーバーのポート番号。
		- **timeout** (オプション): 接続が確立されるまでの最大待機時間（ミリ秒単位）。この時間内に接続が確立されない場合、関数はエラーを返します。timeoutが0に設定されている場合、接続が確立されるまで無期限に待機します。

- `WiFiClient::stop()` -- クライアントをサーバーから切断し、クライアントが使用しているソケット/ポートを解放するために使用される関数です。この関数が呼び出されると、クライアントはデータの送受信ができなくなります。

- `WiFiClient::setTimeout(uint32_t seconds)` -- クライアントが接続の確立またはデータの受信を待機する最大秒数を設定します。接続またはデータ転送が指定されたタイムアウト時間を超える場合、接続は閉じられます。

	- **入力パラメータ**
		- **seconds**: タイムアウトの秒数。

- `WiFiClient::write(uint8_t data)` -- WiFiClientインスタンスを通じて接続されたサーバーに単一バイトのデータを書き込みます。または `WiFiClient::write(const uint8_t *buf, size_t size)`。

	- **入力パラメータ**
		- **data**: 確立されたネットワーク接続を介して送信する必要がある単一バイトのデータ。

- `WiFiClient::read()` -- 接続されたサーバーから受信した単一バイトのデータを読み取る関数です。読み取ったバイトを整数値として返します。データが利用できない場合は -1 を返します。または `read(uint8_t *buf, size_t size)`。

	- **出力**: 受信したバイト数を示す整数値。戻り値が0の場合、サーバーが接続を閉じたことを意味します。

- `WiFiClient::peek()` -- サーバーから読み取るデータがあるかどうかを確認するために使用される関数です。ただし、実際にはデータを読み取りません。

	- **出力**: 受信バッファから削除せずに次の受信データバイトを返します。データが利用できない場合は -1 を返します。

- `WiFiClient::available()` -- サーバーから読み取ることができるデータのバイト数を確認するために使用される関数です。

	- **出力**: 読み取ることができるバイト数を表す整数値を返します。

### WiFi サーバー関数

- `WiFiServer::stopAll()` -- Arduino WiFiライブラリのWiFiServerクラスのメソッドです。このメソッドは、WiFiServerクラスを使用して作成されたすべてのサーバーインスタンスを停止します。各インスタンスの`stop()`メソッドを個別に呼び出す代わりに、すべてのサーバーを一度に停止する場合に便利です。

- `WiFiServer::begin(uint16_t port, int enable)` -- 指定されたポートでサーバーを開始するために使用される関数です。サーバーはクライアント接続を待機します。

	- **入力パラメータ**
		- **port**: 待機するポート番号。
		- **enable** (オプション): サーバーを開始直後に有効にするかどうかを示すフラグ。このフラグはデフォルトでtrueに設定されています。

- `WiFiServer::hasClient()` -- サーバーに利用可能なクライアント接続があるかどうかを確認するために使用される関数です。この関数は、新しい接続を継続的にチェックするループ内で使用できます。

	- **出力**: クライアントが接続している場合はWiFiClientオブジェクトを返し、接続待機中のクライアントがいない場合はNULLポインタを返します。

- `WiFiServer::end()` -- サーバーを停止し、関連するリソースを解放するために使用される関数です。この関数が呼び出されると、サーバーは新しいクライアント接続を受け付けることができなくなります。既存のクライアント接続は、クライアントまたはサーバーのいずれかによって閉じられるまで開いたままになります。`WiFiServer::close()`および`WiFiServer::stop()`は同じ機能を持ちます。

### WiFi マルチ関数

- `WiFiMulti::addAP(const char* ssid, const char *passphrase)` -- WiFiMultiオブジェクトが接続を試みる利用可能なアクセスポイント(AP)のリストに新しいAPを追加するために使用されます。

	- **入力パラメータ**
		- **ssid**: SSIDへのポインタ (最大63文字)。
		- **passphrase**: (WPA2の場合は最小8文字、オープンの場合はNULLを使用)。

	- **出力**: True/False

- `WiFiMulti::run(uint32_t connectTimeout)` -- この関数は、保存されたアクセスポイントに順番に接続を試み、成功するまで接続を試みます。

	- **入力パラメータ**
		- **connectTimeout**: このパラメータは、接続を待機する最大時間をミリ秒単位で指定します。connectTimeout が 0 に設定されている場合、関数はタイムアウトせず、無期限に接続を試みます。

	- **出力**: ステータス

## 近くの WiFi ネットワークをスキャンする

以下は、XIAO ESP32C6 を使用して近くの WiFi ネットワークをスキャンするサンプルプログラムです。

:::info
XIAO C6 は `2.4GHz` バンドのみをサポートしています。
:::

Arduino IDE で **File > Examples > WiFi > WiFiScan** に移動します。これにより、XIAO ESP32C6 の範囲内にある WiFi ネットワークをスキャンするスケッチが読み込まれます。

これは、接続しようとしている WiFi ネットワークがボードの範囲内にあるかどうかを確認したり、その他の用途に役立ちます。WiFi プロジェクトがうまく動作しないことがあるのは、WiFi 信号が弱いためにルーターに接続できない場合があります。

```cpp
#include <WiFi.h>

void setup() {
  Serial.begin(115200);

  // WiFi をステーションモードに設定し、以前に接続されていた AP から切断する
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(100);

  Serial.println("セットアップ完了");
}

void loop() {
  Serial.println("Wi-Fi スキャンを開始...");

  // WiFi.scanNetworks は見つかったネットワークの数を返します
  int numNetworks = WiFi.scanNetworks();
  Serial.println("スキャン完了");

  if (numNetworks == 0) {
    Serial.println("ネットワークが見つかりません");
  } else {
    Serial.print(numNetworks);
    Serial.println(" 個のネットワークが見つかりました");
    for (int i = 0; i < numNetworks; i++) {
      // 見つかった各ネットワークの SSID と RSSI を出力
      Serial.print(i + 1);
      Serial.print(": ");
      Serial.print(WiFi.SSID(i));
      Serial.print(" (");
      Serial.print(WiFi.RSSI(i));
      Serial.print(")");
      Serial.println((WiFi.encryptionType(i) == WIFI_AUTH_OPEN) ? " " : "*");
      delay(10);
    }
  }
  Serial.println("");

  // 再スキャンする前に少し待機
  delay(5000);
}
```

プログラムをアップロードして実行すると、XIAO ESP32C6 が検索可能な近くの WiFi ネットワークがシリアルモニターに表示されるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/37.png" style={{width:600, height:'auto'}}/></div>

### プログラムの注釈

XIAO ESP32C6 の WiFi 機能を使用するには、まず以下のようにコードに **WiFi.h** ライブラリを含める必要があります。

```cpp
#include <WiFi.h>
```

XIAO ESP32C6 は WiFi ステーション、アクセスポイント、またはその両方として動作できます。WiFi モードを設定するには、`WiFi.mode()` を使用し、引数として希望するモードを設定します。

```cpp
WiFi.mode(WIFI_STA);
```

ESP32 が Wi-Fi ステーションとして設定されている場合、他のネットワーク（例: ルーター）に接続できます。

`WiFi.scanNetworks()` は見つかったネットワークの数を返します。スキャン後、各ネットワークに関するパラメータにアクセスできます。`WiFi.SSID()` は特定のネットワークの SSID を出力します。

`WiFi.RSSI()` はそのネットワークの RSSI を返します。RSSI は受信信号強度インジケータを意味します。これは、RF クライアントデバイスがアクセスポイントまたはルーターから受信している電力レベルの推定値です。

最後に、`WiFi.encryptionType()` はネットワークの暗号化タイプを返します。この特定の例では、オープンネットワークの場合に * を付けています。ただし、この関数は以下のオプションのいずれかを返すことができます（オープンネットワークだけではありません）:
- WIFI_AUTH_OPEN
- WIFI_AUTH_WEP
- WIFI_AUTH_WPA_PSK
- WIFI_AUTH_WPA2_PSK
- WIFI_AUTH_WPA_WPA2_PSK
- WIFI_AUTH_WPA2_ENTERPRISE

## WiFiネットワークへの接続

ESP32を特定のWi-Fiネットワークに接続するには、そのSSIDとパスワードを知っている必要があります。また、そのネットワークがESP32のWiFi範囲内にある必要があります（これを確認するには、前の例を使用してWiFiネットワークをスキャンできます）。

以下は、XIAO ESP32C6を使用して指定されたネットワークに接続する例です。このプログラムでは、`initWiFi()`関数がネットワークに接続する役割を果たします。

> Wi-Fiネットワークに接続するには、`WiFi.begin()`関数を使用できます。この関数はネットワークのSSIDとパスワードを引数として受け取ります。

```cpp
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
  // ここにコードを記述
}
```

プログラムをアップロードして実行し、シリアルモニターを開きます。ネットワークに接続すると、シリアルモニターに接続が成功するまでドットが表示され、その後XIAOのIPアドレスが表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/38.png" style={{width:600, height:'auto'}}/></div>

### プログラムの注釈

この関数がどのように動作するかを簡単に見てみましょう。

まず、WiFiモードを設定します。XIAO ESP32C6が別のネットワーク（アクセスポイント/ホットスポット）に接続する場合、ステーションモードである必要があります。

```cpp
WiFi.mode(WIFI_STA);
```

次に、`WiFi.begin()`を使用してネットワークに接続します。ネットワークのSSIDとパスワードを引数として渡す必要があります。

```cpp
WiFi.begin(ssid, password);
```

WiFiネットワークへの接続には時間がかかる場合があるため、通常は`WiFi.status()`を使用して接続が確立されたかどうかを確認するwhileループを追加します。接続が成功すると、`WL_CONNECTED`を返します。

WiFi接続の強度を取得したい場合は、WiFi接続後に`WiFi.RSSI()`を呼び出すだけです。

## softAPの使用

XIAO ESP32C6をアクセスポイント（ホットスポット）として設定すると、WiFi機能を持つ任意のデバイスを使用してESP32に接続でき、ルーターに接続する必要がありません。

簡単に言えば、XIAO ESP32C6をアクセスポイントとして設定すると、独自のWiFiネットワークを作成し、近くのWiFiデバイス（ステーション）がそれに接続できます（スマートフォンやコンピュータなど）。

Arduino IDEで、**File > Examples > WiFi > WiFiAccessPoint**に移動します。この例では、XIAO ESP32C6を使用してホットスポットを作成し、ホットスポットに接続された簡単なウェブページを介してライトのオン/オフスイッチを制御する方法を示します。

:::note
1. サンプルプログラムにいくつかの小さな変更を加え、LED_BUILTINをコメントアウトしました。XIAO ESP32C6には独自のユーザーインジケーターがあるため、外部LEDは必要ありません。
2. LEDは、XIAO ESP32C6のユーザーLEDピンが高レベルに設定された場合のみオフになり、ピンが低レベルに設定された場合のみオンになります。
3. プログラム内のホットスポット名とパスワードを希望のものに変更する必要があります。
:::

```cpp
/*
  WiFiAccessPoint.inoはWiFiアクセスポイントを作成し、その上でウェブサーバーを提供します。

  手順:
  1. アクセスポイント "yourAp" に接続
  2. ウェブブラウザで http://192.168.4.1/H にアクセスしてLEDをオンにするか、http://192.168.4.1/L にアクセスしてLEDをオフにする
     または
     PuTTYターミナルで192.168.4.1をIPアドレス、80をポートとして生のTCP "GET /H" および "GET /L" を実行

  Created for arduino-esp32 on 04 July, 2018
  by Elochukwu Ifediora (fedy0)
*/

#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>

//#define LED_BUILTIN 2   // テストLEDを接続したGPIOピンを設定するか、開発ボードに内蔵LEDがある場合はこの行をコメントアウトしてください

// 希望の認証情報を設定してください。
const char *ssid = "XIAO_ESP32C6";
const char *password = "password";

WiFiServer server(80);


void setup() {
  pinMode(LED_BUILTIN, OUTPUT);

  Serial.begin(115200);
  Serial.println();
  Serial.println("アクセスポイントを構成中...");

  // APをオープンにしたい場合は、パスワードパラメータを削除できます。
  WiFi.softAP(ssid, password);
  IPAddress myIP = WiFi.softAPIP();
  Serial.print("AP IPアドレス: ");
  Serial.println(myIP);
  server.begin();

  Serial.println("サーバー開始");
}

void loop() {
  WiFiClient client = server.available();   // 接続してくるクライアントを待機

  if (client) {                             // クライアントが接続した場合
    Serial.println("新しいクライアント。"); // シリアルポートにメッセージを出力
    String currentLine = "";                // クライアントからのデータを保持するための文字列を作成
    while (client.connected()) {            // クライアントが接続されている間ループ
      if (client.available()) {             // クライアントから読み取れるバイトがある場合
        char c = client.read();             // バイトを読み取り
        Serial.write(c);                    // シリアルモニターに出力
        if (c == '\n') {                    // バイトが改行文字の場合

          // 現在の行が空白の場合、改行文字が2つ連続していることを意味します。
          // これはクライアントHTTPリクエストの終了を意味し、レスポンスを送信します:
          if (currentLine.length() == 0) {
            // HTTPヘッダーは常にレスポンスコード（例: HTTP/1.1 200 OK）と
            // コンテンツタイプで始まり、クライアントが何が来るかを知るための空白行が続きます:
            client.println("HTTP/1.1 200 OK");
            client.println("Content-type:text/html");
            client.println();

            // HTTPレスポンスの内容はヘッダーの後に続きます:
            client.print("LEDをオンにするには<a href=\"/H\">ここをクリック</a>してください。<br>");
            client.print("LEDをオフにするには<a href=\"/L\">ここをクリック</a>してください。<br>");

            // HTTPレスポンスはさらに空白行で終了します:
            client.println();
            // whileループを抜ける:
            break;
          } else {    // 改行があった場合、currentLineをクリア:
            currentLine = "";
          }
        } else if (c != '\r') {  // キャリッジリターン文字以外の場合
          currentLine += c;      // currentLineの末尾に追加
        }

        // クライアントリクエストが "GET /H" または "GET /L" であるか確認:
        if (currentLine.endsWith("GET /H")) {
          digitalWrite(LED_BUILTIN, LOW);                 // GET /H はLEDをオンにする
        }
        if (currentLine.endsWith("GET /L")) {
          digitalWrite(LED_BUILTIN, HIGH);                // GET /L はLEDをオフにする
        }
      }
    }
    // 接続を閉じる:
    client.stop();
    Serial.println("クライアント切断。");
  }
}
```

プログラムをアップロードして実行すると、XIAO ESP32C6は「XIAO_ESP32C6」という名前のホットスポットを作成します。コンピュータやスマートフォンを使用してこのネットワークに接続し、パスワード「password」を入力してください。その後、ブラウザで「192.168.4.1」を開くと、LEDスイッチを制御するウェブページにアクセスできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/39.png" style={{width:800, height:'auto'}}/></div>

### プログラムの注釈

`setup()`内には、`softAP()`メソッドを使用してESP32をアクセスポイントとして設定するセクションがあります：

```cpp
WiFi.softAP(ssid, password);
```

次に、`softAPIP()`メソッドを使用してアクセスポイントのIPアドレスを取得し、それをシリアルモニタに表示する必要があります。

```cpp
IPAddress myIP = WiFi.softAPIP();
Serial.print("AP IP address: ");
Serial.println(myIP);
server.begin();
```

これらは、XIAO ESP32C6をアクセスポイントとして設定するためにウェブサーバースケッチに含める必要があるコードスニペットです。

## WiFiとMQTTの使用

XIAO ESP32C6はMQTTプロトコルをサポートする強力なマザーボードであり、デバイス間の信頼性が高く効率的な通信を必要とするIoTプロジェクトに最適です。

```cpp
#include <WiFi.h>
#include <PubSubClient.h>

// ネットワークの認証情報を置き換えてください
const char* ssid = "your_SSID";
const char* password = "your_PASSWORD";

// MQTTブローカーのIPアドレス
const char* mqtt_server = "test.mosquitto.org";

// WiFiおよびMQTTクライアントオブジェクトを初期化
WiFiClient espClient;
PubSubClient client(espClient);

void setup() {
  Serial.begin(115200);

  // WiFiネットワークに接続
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }

  Serial.println("Connected to WiFi");

  // MQTTブローカーのサーバーIPアドレスとポートを設定
  client.setServer(mqtt_server, 1883);

  // MQTTブローカーに接続
  while (!client.connected()) {
    if (client.connect("ESP32Client")) {
      Serial.println("Connected to MQTT broker");
    } else {
      Serial.print("Failed to connect to MQTT broker, rc=");
      Serial.print(client.state());
      Serial.println(" retrying in 5 seconds");
      delay(5000);
    }
  }

  // MQTTトピックを購読
  client.subscribe("test/topic");
}

void loop() {
  // MQTTクライアントが接続されているか確認
  if (!client.connected()) {
    // MQTTブローカーに再接続
    if (client.connect("ESP32Client")) {
      Serial.println("Connected to MQTT broker");
      // 再接続後にMQTTトピックを購読
      client.subscribe("test/topic");
    }
  }

  // MQTTメッセージを処理
  client.loop();

  // MQTTブローカーにメッセージを送信
  client.publish("test/topic", "Hello from XIAO ESP32C6");
  delay(5000);
}
```

このサンプルプログラムでは、XIAO ESP32C6がWiFiを介してネットワークに接続し、指定されたMQTTブローカーに接続します。そして、**test/topic**というトピックを購読し、5秒ごとにそのトピックにメッセージを送信します。

XIAO ESP32C6がMQTTブローカーからメッセージを受信すると、そのメッセージは`client.onMessage`コールバック関数内で処理できます。このサンプルプログラム内の変数`ssid`、`password`、`mqtt_server`などを、自分のネットワークおよびMQTTサーバー情報に置き換える必要があります。

:::tip
サンプルプログラムで提供されているMQTTサーバーアドレス`test.mosquitto.org`はテスト目的のみです。このアドレスに個人情報を送信しないでください。このリンクを使用して誰でも情報を取得することができます。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/41.png" style={{width:800, height:'auto'}}/></div>

## WiFi & HTTP/HTTPS の使用

この部分では、WiFiClient と HTTPClient の使用方法について詳しく紹介している XIAO ESP32C3 を使用した ChatGPT へのアクセス例を参照できます。

- [WiFiClient と HTTPClient の使用方法を学ぶ - XIAO ESP32C3 & ChatGPT 実践](https://wiki.seeedstudio.com/ja/xiaoesp32c3-chatgpt)

## WiFi Mesh

[Espressif のドキュメント](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/mesh.html)によると：

「ESP-MESH は Wi-Fi プロトコル上に構築されたネットワークプロトコルです。ESP-MESH を使用すると、広い物理的エリア（屋内および屋外）に分散した多数のデバイス（ノードと呼ばれる）を単一の WLAN（ワイヤレスローカルエリアネットワーク）で接続することができます。ESP-MESH は自己組織化および自己修復機能を備えており、ネットワークを自律的に構築および維持することができます。」

従来の Wi-Fi ネットワークアーキテクチャでは、単一のノード（アクセスポイント – 通常はルーター）が他のすべてのノード（ステーション）に接続されています。各ノードはアクセスポイントを介して互いに通信できます。ただし、これはアクセスポイントの Wi-Fi 範囲に制限されます。すべてのステーションはアクセスポイントに直接接続できる範囲内にある必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/42.png" style={{width:800, height:'auto'}}/></div>

ESP-MESH を使用すると、ノードは中央ノードに接続する必要がありません。ノードは互いの通信を中継する役割を果たします。これにより、複数のデバイスが広い物理的エリアに分散することが可能になります。ノードは自己組織化し、動的に互いに通信して、パケットが最終的なノードの目的地に到達することを保証します。ネットワークから任意のノードが削除されても、自己組織化してパケットが目的地に到達することを確保します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/43.png" style={{width:800, height:'auto'}}/></div>

[painlessMesh ライブラリ](https://gitlab.com/painlessMesh/painlessMesh)を使用すると、ESP32 ボードで簡単にメッシュネットワークを作成できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/44.png" style={{width:800, height:'auto'}}/></div>

このライブラリを使用するために依存パッケージをダウンロードするよう促すウィンドウが表示された場合、それらも一緒にダウンロードする必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/45.png" style={{width:500, height:'auto'}}/></div>

このウィンドウが表示されない場合は、以下のライブラリ依存関係をインストールする必要があります：

- [ArduinoJson](https://github.com/bblanchon/ArduinoJson) (bblanchon による)
- [TaskScheduler](https://github.com/arkhipenko/TaskScheduler)
- [AsyncTCP](https://github.com/me-no-dev/AsyncTCP) (ESP32)

ESP-MESH を始めるには、まずライブラリの基本例を試してみます。この例では、すべてのボードが他のすべてのボードにメッセージをブロードキャストするメッシュネットワークを作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/46.png" style={{width:700, height:'auto'}}/></div>

コードをアップロードする前に、`MESH_PREFIX`（メッシュネットワークの名前のようなもの）と `MESH_PASSWORD` 変数を設定できます（任意の値を設定可能）。

次に、メッセージを送信したノードを簡単に識別するために、各ボードで以下の行を変更することをお勧めします。例えば、ノード 1 の場合、メッセージを以下のように変更します：

```cpp
String msg = "Hi from node 1 ";
```

さて、次に 2 つの XIAO ESP32C6 を例として使用します。ネットワーク構築後の概念図は以下のようになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/47.png" style={{width:700, height:'auto'}}/></div>

プログラムをそれぞれ 2 つの XIAO にアップロードし、シリアルポートモニターを開いてボーレートを 115200 に設定します。（2 つの XIAO がある場合、追加のシリアルポートソフトウェアが必要になる場合があります）。プログラムが正常に動作すれば、以下の結果が表示されます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/48.png" style={{width:800, height:'auto'}}/></div>

### プログラムの注釈

まず、painlessMesh ライブラリをインクルードします。その後、メッシュの詳細を追加します。`MESH_PREFIX` はメッシュの名前を指します。`MESH_PASSWORD` はその名の通りメッシュのパスワードです。メッシュ内のすべてのノードは同じ `MESH_PREFIX` と `MESH_PASSWORD` を使用する必要があります。`MESH_PORT` はメッシュサーバーを実行する TCP ポートを指します。デフォルトは **5555** です。

メッシュネットワークコードでは `delay()` の使用を避けることをお勧めします。メッシュを維持するためには、バックグラウンドでいくつかのタスクを実行する必要があります。`delay()` を使用するとこれらのタスクが停止し、メッシュが不安定になったり崩壊したりする可能性があります。その代わりに、painlessMesh 自体で使用されている `TaskScheduler` を使用してタスクを実行することをお勧めします。以下の行は、新しい `Scheduler` を作成します。

```cpp
Scheduler userScheduler; // 個人タスクを制御するため
```

メッシュネットワークを処理するための `painlessMesh` オブジェクトを作成します。

```cpp
painlessMesh  mesh;
```

プログラムが実行されている限り、毎秒 `sendMessage()` 関数を呼び出すタスク `taskSendMessage` を作成します。

```cpp
Task taskSendMessage(TASK_SECOND * 1 , TASK_FOREVER, &sendMessage);
```

`sendMessage()` 関数はメッシュネットワーク内のすべてのノードにメッセージを送信します（ブロードキャスト）。

```cpp
void sendMessage() {
  String msg = "Hello from node 1";
  msg += mesh.getNodeId();
  mesh.sendBroadcast( msg );
  taskSendMessage.setInterval(random(TASK_SECOND * 1, TASK_SECOND * 5));
}
```

メッセージには「Hello from node 1」というテキストとボードのチップ ID が含まれます。

メッセージをブロードキャストするには、メッシュオブジェクトの `sendBroadcast()` メソッドを使用し、引数として送信したいメッセージ（msg）を渡します。

```cpp
mesh.sendBroadcast(msg);
```

新しいメッセージが送信されるたびに、コードはメッセージ間の間隔を変更します（1秒から5秒の間）。

```cpp
taskSendMessage.setInterval(random(TASK_SECOND * 1, TASK_SECOND * 5));
```

次に、メッシュ上で特定のイベントが発生したときに呼び出されるいくつかのコールバック関数を作成します。`receivedCallback()` 関数は、メッセージの送信元（from）とメッセージの内容（`msg.c_str()`）を出力します。

```cpp
void receivedCallback( uint32_t from, String &msg ) {
  Serial.printf("startHere: Received from %u msg=%s\n", from, msg.c_str());
}
```

`newConnectionCallback()` 関数は、新しいノードがネットワークに参加するたびに実行されます。この関数は、新しいノードのチップIDを単純に出力します。この関数を変更して他のタスクを実行することもできます。

```cpp
void newConnectionCallback(uint32_t nodeId) {
  Serial.printf("--> startHere: New Connection, nodeId = %u\n", nodeId);
}
```

`changedConnectionCallback()` 関数は、ネットワーク上の接続が変更されたとき（ノードが参加または離脱したとき）に実行されます。

```cpp
void changedConnectionCallback() {
  Serial.printf("Changed connections\n");
}
```

`nodeTimeAdjustedCallback()` 関数は、ネットワークが時間を調整してすべてのノードを同期させるときに実行されます。この関数はオフセットを出力します。

```cpp
void nodeTimeAdjustedCallback(int32_t offset) {
  Serial.printf("Adjusted time %u. Offset = %d\n", mesh.getNodeTime(),offset);
}
```

`setup()` 内では、シリアルモニターを初期化します。必要なデバッグメッセージの種類を選択します。

```cpp
//mesh.setDebugMsgTypes( ERROR | MESH_STATUS | CONNECTION | SYNC | COMMUNICATION | GENERAL | MSG_TYPES | REMOTE ); // すべての種類を有効化

mesh.setDebugMsgTypes( ERROR | STARTUP );  // init() の前に設定して、スタートアップメッセージを確認できるようにする
```

前述の詳細を使用してメッシュを初期化します。

```cpp
mesh.init(MESH_PREFIX, MESH_PASSWORD, &userScheduler, MESH_PORT);
```

すべてのコールバック関数を対応するイベントに割り当てます。

```cpp
mesh.onReceive(&receivedCallback);
mesh.onNewConnection(&newConnectionCallback);
mesh.onChangedConnections(&changedConnectionCallback);
mesh.onNodeTimeAdjusted(&nodeTimeAdjustedCallback);
```

最後に、`taskSendMessage` 関数を `userScheduler` に追加します。スケジューラは、タスクを適切なタイミングで処理および実行する役割を担います。

```cpp
userScheduler.addTask(taskSendMessage);
```

最後に、`taskSendMessage` を有効化して、プログラムがメッシュにメッセージを送信し始めるようにします。

```cpp
taskSendMessage.enable();
```

メッシュを実行し続けるために、`loop()` に `mesh.update()` を追加します。

```cpp
void loop() {
  // ユーザースケジューラも実行されます
  mesh.update();
}
```

## 引用と参考文献

この記事は、ESP32 に関する **[Random Nerd Tutorials](https://randomnerdtutorials.com/)** のウェブコンテンツを基にしており、Seeed Studio の XIAO ESP32C6 で検証されています。

**Random Nerd Tutorials** の著者の皆様の努力に感謝します！

以下は元の記事への参照リンクです。ESP32 ネットワークについてさらに学びたい方は、以下のリンクから元の記事をご覧ください。

- [ESP32 Useful Wi-Fi Library Functions (Arduino IDE)](https://randomnerdtutorials.com/esp32-useful-wi-fi-functions-arduino/)
- [ESP32 MQTT – Publish and Subscribe with Arduino IDE](https://randomnerdtutorials.com/esp32-mqtt-publish-subscribe-arduino-ide/)
- [ESP-MESH with ESP32 and ESP8266: Getting Started (painlessMesh library)](https://randomnerdtutorials.com/esp-mesh-esp32-esp8266-painlessmesh/)

ESP32 開発ボードの使用に関する詳細情報については、Random Nerd Tutorials の公式ウェブサイトをご覧ください。

- [Random Nerd Tutorials](https://randomnerdtutorials.com/)

また、Arduino API に関する詳細については、以下のドキュメントを参照してください。

- [WiFi - Arduino Reference](https://www.arduino.cc/en/Reference/WiFi)
- [Wi-Fi API - Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/wifi.html)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できる限りスムーズな体験を提供するため、さまざまなサポートを提供しております。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>