---
title: WiFi 使用方法
description: Seeed Studio XIAO ESP32-C5 での WiFi 使用方法
keywords:
  - xiao
  - esp32c5
  - wifi_usage
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_1.webp
slug: /xiao_esp32c5_wifi_usage
sidebar_class_name: hidden
last_update:
  date: 01/06/2026
  author: Zeller
createdAt: '2025-12-30'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/xiao_esp32c5_wifi_usage/
---

# Seeed Studio XIAO ESP32-C5 での WiFi 使用方法

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

Seeed Studio XIAO ESP32-C5 は、デュアルバンド 2.4 GHz & 5 GHz Wi-Fi をサポートし、802.11a/b/g/n/ac 規格との下位互換性を持つデュアルバンド Wi-Fi 6（802.11ax）無線機能を搭載しています。さらに、この開発ボードは U.FL アンテナ接続をサポートしており、XIAO ESP32-C5 の無線接続性能を向上させるよう設計されています。このチュートリアルでは、XIAO ESP32-C5 の Wi-Fi 機能を活用して Wi-Fi ネットワークに接続し、基本的なネットワークタスクを実行する方法を探ります。<br/>
以下のチュートリアルでは、コンパイルとアップロードに Arduino IDE を使用します。Arduino IDE の経験がまだない場合は、[Seeed Studio XIAO ESP32-C5 入門ガイド](https://wiki.seeedstudio.com/ja/xiao_esp32c5_getting_started/) をご覧ください。<br/>

## 入門ガイド

### アンテナの取り付け

Seeed Studio XIAO ESP32-C5 のパッケージ内には、専用の **Wi-Fi/BT アンテナコネクタ** があります。最適な WiFi/Bluetooth 信号強度を得るには、パッケージに含まれているアンテナを取り出してコネクタに接続する必要があります。<br/>
:::tip
より強い信号ゲイン効果を得たい場合は、**RP-SMA オスコネクタ付き 2.4G/5G 外部アンテナ** を購入して取り付けることができます — パッケージに含まれている内蔵 FPC アンテナよりもはるかに高いゲインを提供します！
:::
<div class="table-center">
 <table>
  <tr>
   <th>RP-SMA オスコネクタ付き 2.4G/5G 外部アンテナ</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-2.4g5g-external-antenna-with-rp-sma-male-connector-45font_1.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/2-4G-5G-External-Antenna-with-RP-SMA-Male-Connector-and-1-13-Coaxial-Cable-130mm-Set-p-6316.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## WiFi ライブラリの一般的なインターフェース

- XIAO ESP32-C5 は幅広い Wi-Fi ネットワーク機能を提供します。一般的に、ESP32 の内蔵パッケージ内の WiFi ライブラリの機能を確認し、対応する機能を選択して望ましい機能を実現できます。次に、よく使用されるインターフェースをいくつかリストアップし、その使用方法を紹介します。

:::tip
Wi-Fi 使用チュートリアルを直接開始したい場合は、[WiFi 使用例](#wifi-使用例) にジャンプできます。
:::

### 汎用 WiFi 機能

- `WiFiGenericClass::getHostname()` -- ESP32 用 WiFi ライブラリの機能で、デバイスのホスト名を文字列として返します。ホスト名は、ネットワーク上でデバイスを識別する一意の名前です。この機能は、以前に `WiFiGenericClass::setHostname()` を使用して設定されたホスト名を取得します。ホスト名が設定されていない場合は、デフォルトのホスト名が返されます。

- `WiFiGenericClass::persistent(bool persistent)` -- ESP32 WiFi ライブラリの永続モードを有効または無効にするために使用されるメソッドです。永続モードが有効になっている場合、Wi-Fi 設定は不揮発性メモリ（NVM）に保存され、電源サイクルやリセット後も保持されます。永続モードが無効になっている場合、設定は RAM に保存され、電源サイクルやリセット後に失われます。

 	- **入力パラメータ**
  		- **persistent**: 引数が true の場合、永続モードが有効になります。引数が false の場合、永続モードが無効になります。

- `WiFiGenericClass::enableLongRange(bool enable)` -- この機能は、WiFi モジュールの長距離（LR）機能を有効または無効にするために使用されます。有効にすると、LR 機能により、モジュールは通常よりも遠くにある WiFi ネットワークに接続できますが、データレートは低くなります。

 	- **入力パラメータ**
  		- **enable**: この機能を有効にするには true に、無効にするには false に設定する必要があります。

- `WiFiGenericClass::mode(wifi_mode_t m)` -- この機能は、デバイスの WiFi モードを設定するために使用されます。

 	- **入力パラメータ**
  		- **m**: m パラメータは設定するモードを指定し、wifi_mode_t 列挙型で定義された以下の定数のいずれかを指定できます：
   			- **WIFI_MODE_NULL**: WiFi ステーションとアクセスポイントの両方のモードを無効にします。
   			- **WIFI_MODE_STA**: 既存の WiFi ネットワークに接続するための WiFi ステーションモードを有効にします。
   			- **WIFI_MODE_AP**: 新しい WiFi ネットワークを作成するためのアクセスポイントモードを有効にします。
   			- **WIFI_MODE_APSTA**: WiFi ステーションとアクセスポイントの両方のモードを有効にします。

- `WiFiGenericClass::setSleep(wifi_ps_type_t sleepType)` -- この機能は、WiFi モジュールの省電力モードを設定します。

 	- **入力パラメータ**
  		- **sleepType**: sleepType パラメータは、使用する省電力モードのタイプを指定する列挙型です。3つの可能なスリープタイプがあります：
   			- **WIFI_PS_NONE**: これはデフォルトのスリープモードで、WiFi モジュールは省電力モードに入りません。
   			- **WIFI_PS_MIN_MODEM**: このモードでは、WiFi モジュールはアクセスポイント（AP）への接続を維持しながらモデムをシャットダウンします。
   			- **WIFI_PS_MAX_MODEM**: 最も積極的な Wi-Fi 省電力モードを有効にします。スリープ時間を大幅に増加させることができますが、より高いレイテンシと低下したスループットを導入する可能性があり、一部のネットワークでは接続の安定性に影響を与える可能性があります。

### STA 機能

- `WiFiSTAClass::status()` -- 接続ステータスを返します。

 	- **出力**: wl_status_t で定義された値のいずれか。
  		- **WL_NO_SHIELD**: このステータスコードは、Wi-Fi モジュールが存在しないことを示します。
    - **WL_IDLE_STATUS**: このステータスコードは、Wi-Fi モジュールが何も操作を実行していないことを示します。
    - **WL_NO_SSID_AVAIL**: このステータスコードは、スキャン中に Wi-Fi ネットワークが見つからなかったことを示します。
    - **WL_SCAN_COMPLETED**: このステータスコードは、Wi-Fi スキャンが正常に完了したことを示します。
    - **WL_CONNECTED**: このステータスコードは、ESP32 が Wi-Fi ネットワークに正常に接続されていることを示します。
    - **WL_CONNECT_FAILED**: このステータスコードは、Wi-Fi ネットワークへの接続が失敗したことを示します。
    - **WL_CONNECTION_LOST**: このステータスコードは、Wi-Fi ネットワークへの接続が失われたことを示します。
    - **WL_DISCONNECTED**: このステータスコードは、ESP32 が以前に Wi-Fi ネットワークに接続されていたが、現在はどのネットワークにも接続されていないことを示します。

- `WiFiSTAClass::begin(const char* wpa2_ssid, wpa2_auth_method_t method, const char* wpa2_identity, const char* wpa2_username, const char *wpa2_password, const char* ca_pem, const char* client_crt, const char* client_key, int32_t channel, const uint8_t* bssid, bool connect)` -- WPA2 Enterprise AP との Wifi 接続を開始します。

 	- **入力パラメータ**（オプション）
  		- **ssid**: SSID 文字列へのポインタ。
  		- **method**: WPA2 の認証方法（WPA2_AUTH_TLS、WPA2_AUTH_PEAP、WPA2_AUTH_TTLS）
  		- **wpa2_identity**: エンティティへのポインタ
  		- **wpa2_username**: ユーザー名へのポインタ
  		- **wpa2_password**: パスワードへのポインタ。
  		- **ca_pem**: CA 証明書を含む .pem ファイルの内容を含む文字列へのポインタ
  		- **client_crt**: クライアント証明書を含む .crt ファイルの内容を含む文字列へのポインタ
  		- **client_key**: クライアントキーを含む .key ファイルの内容を含む文字列へのポインタ
  		- **channel**: オプション。AP のチャンネル
  		- **bssid**: オプション。AP の BSSID / MAC
  		- **connect**: オプション。connect を呼び出す

- `WiFiSTAClass::reconnect()` -- 強制的に切断してから AP への再接続を開始します。

 	- **出力**: True/False。

- `WiFiSTAClass::disconnect(bool wifioff, bool eraseap)` -- ネットワークから切断します。

 	- **入力パラメータ**
  		- **wifioff**: wifioff `true` で Wi-Fi 無線をオフにします。
  		- **eraseap**: eraseap `true` で NVS メモリから AP 設定を消去します。

 	- **出力**: True/False。

- `WiFiSTAClass::config(IPAddress local_ip, IPAddress gateway, IPAddress subnet, IPAddress dns1, IPAddress dns2)` -- dhcp クライアントを無効にして IP 設定を変更します。

 	- **入力パラメータ**
  		- **local_ip**: 静的 IP 設定。
  		- **gateway**: 静的ゲートウェイ設定。
  		- **subnet**: 静的サブネットマスク。
  		- **dns1**: 静的 DNS サーバー 1。
  		- **dns2**: 静的 DNS サーバー 2。

- `WiFiSTAClass::setAutoConnect(bool autoConnect)` -- 非推奨。電源投入時に ESP32 ステーションが（記録されている）AP に自動的に接続するかどうかを設定します。デフォルトで自動接続を有効にします。

 	- **入力パラメータ**
  		- **autoConnect**: autoConnect ブール値。

 	- **出力**: False。

- `WiFiSTAClass::waitForConnectResult(unsigned long timeoutLength)` -- WiFi 接続が結果に到達するまで待機します。

 	- **入力パラメータ**
  		- **timeoutLength**: このパラメータは、接続が確立されるまで待機する最大時間をミリ秒で指定します。

 	- **出力**: wl_status_t で定義された値のいずれか。

- `WiFiSTAClass::localIP()` -- ステーションインターフェースの IP アドレスを取得します。

 	- **出力**: IPAddress ステーション IP。

- `WiFiSTAClass::macAddress(uint8_t* mac)` -- ステーションインターフェースの MAC アドレスを取得します。

 	- **入力パラメータ**
  		- **mac**（オプション）: 長さ WL_MAC_ADDR_LENGTH の uint8_t 配列へのポインタ。

 	- **出力**: uint8_t * へのポインタ。

- `WiFiSTAClass::SSID()` -- ネットワークに関連付けられた現在のSSIDを返します。

 	- **出力**: SSID。

- `WiFiSTAClass::RSSI(void)` -- 現在のネットワークRSSIを返します。

 	- **出力**: RSSI。

### AP 関数

- `WiFiAPClass::softAP(const char* ssid, const char* passphrase, int channel, int ssid_hidden, int max_connection, bool ftm_responder)` -- これはXIAO ESP32-C5のWiFiライブラリの関数です。SoftAP（プログラムアクセスポイント）を設定するために使用され、他のデバイスがXIAO ESP32-C5に接続してそのリソースにアクセスできるようにします。

 	- **入力パラメータ**
  		- **ssid**:              SSIDへのポインタ（最大63文字）。
    - **passphrase**:        （WPA2の場合最小8文字、オープンの場合はNULLを使用）。
    - **channel**:           WiFiチャンネル番号、1 - 13。
    - **ssid_hidden**:       ネットワーククローキング（0 = SSID放送、1 = SSID隠蔽）。
    - **max_connection**:    最大同時接続クライアント数、1 - 4。

 	- **出力**: True/False。

- `WiFiAPClass::softAPgetStationNum()` -- softAPインターフェースに接続されているStation/クライアントの数を取得します。

 	- **出力**: ステーション数。

- `WiFiAPClass::softAPConfig(IPAddress local_ip, IPAddress gateway, IPAddress subnet, IPAddress dhcp_lease_start)` -- SoftAPを設定するための関数です。

 	- **入力パラメータ**
  		- **local_ip**:      アクセスポイントIP。
  		- **gateway**:       ゲートウェイIP。
  		- **subnet**:        サブネットマスク。

 	- **出力**: True/False。

- `WiFiAPClass::softAPIP()` -- softAPインターフェースのIPアドレスを取得します。

 	- **出力**: IPAddress softAP IP。

- `WiFiAPClass::softAPmacAddress(uint8_t* mac)` -- softAPインターフェースのMACアドレスを取得します。

 	- **入力パラメータ**
  		- **mac** (オプション):   長さWL_MAC_ADDR_LENGTHのuint8_t配列へのポインタ。

 	- **出力**: uint8_t*へのポインタまたは文字列mac。

### WiFi スキャン関数

- `WiFiScanClass::scanNetworks(bool async, bool show_hidden, bool passive, uint32_t max_ms_per_chan, uint8_t channel, const char * ssid, const uint8_t * bssid)` -- 利用可能なWiFiネットワークのスキャンを開始します。

 	- **入力パラメータ**
  		- **async**: このパラメータは、スキャンを非同期で実行するかどうかを決定するブール値です。trueに設定すると、関数は即座に戻り、スキャン結果は後でgetScanResults()関数を呼び出すことで取得できます。falseに設定すると、関数はスキャンが完了するまでブロックします。
  		- **show_hidden**: このパラメータは、関数がスキャン結果に隠しネットワークを含めるかどうかを決定するブール値です。
  		- **passive**: このパラメータは、関数がパッシブスキャンを実行するかどうかを決定するブール値です。trueに設定すると、関数はスキャン中にパケットを送信しません。これは時間がかかる場合がありますが、特定の状況では有用です。
  		- **max_ms_per_chan**: このパラメータは、各チャンネルのスキャンに費やす最大時間をミリ秒で指定します。
  		- **channel**: このパラメータは、スキャンするWi-Fiチャンネルです。0に設定すると、関数は利用可能なすべてのチャンネルをスキャンします。
  		- **ssid**: このパラメータは、スキャンするネットワークのSSIDを含むnull終端文字列へのポインタです。nullptrに設定すると、関数は利用可能なすべてのネットワークをスキャンします。
  		- **bssid**: このパラメータは、スキャンするアクセスポイントのMACアドレスを含む6バイト配列へのポインタです。nullptrに設定すると、関数はすべてのアクセスポイントをスキャンします。

 	- **出力**: この関数の戻り値は、スキャンされたネットワーク数を示す整数です。

- `WiFiScanClass::getNetworkInfo(uint8_t i, String &ssid, uint8_t &encType, int32_t &rssi, uint8_t* &bssid, int32_t &channel)` -- スキャンされたwifiからすべての情報をptrパラメータに読み込みます。

 	- **入力パラメータ**
  		- **i**: この関数は、指定されたインデックスiでスキャンされたネットワークに関する情報を取得するために使用されます。
  		- **ssid**: ssidパラメータは、関数がネットワークのSSIDを格納するString変数への参照です。
  		- **encType**: encTypeパラメータは、関数がネットワークの暗号化タイプを格納するuint8_t変数への参照です（0 = オープン、1 = WEP、2 = WPA_PSK、3 = WPA2_PSK、4 = WPA_WPA2_PSK）。
  		- **rssi**: rssiパラメータは、関数がネットワークの受信信号強度指示（RSSI）を格納するint32_t変数への参照です。
  		- **bssid**: bssidパラメータは、関数がネットワークのBSSID（MACアドレス）を格納するuint8_t*ポインタへの参照です。
  		- **channel**: channelパラメータは、関数がネットワークのチャンネル番号を格納するint32_t変数への参照です。

 	- **出力**: True/False。

- `WiFiScanClass::SSID(uint8_t i)` -- ネットワークスキャン中に発見されたSSIDを返します。

 	- **入力パラメータ**
  		- **i**: どのネットワーク項目から情報を取得したいかを指定します。

 	- **出力**: スキャンされたネットワークリストの指定された項目のSSID文字列。

- `WiFiScanClass::RSSI(uint8_t i)` -- scanNetworks中に発見されたネットワークのRSSIを返します。

 	- **入力パラメータ**
  		- **i**: どのネットワーク項目から情報を取得したいかを指定します。

 	- **出力**: スキャンされたネットワークリストの指定された項目のRSSIの符号付き値。

### WiFi クライアント関数

- `WiFiClient::connect(IPAddress ip, uint16_t port, int32_t timeout)` -- この関数は、WiFiClientライブラリで使用され、指定されたタイムアウト値でリモートIPアドレスとポートに接続します。

 	- **入力パラメータ**
  		- **ip**:   接続するサーバーのIPアドレス。
  		- **port**: 接続するサーバーのポート番号。
  		- **timeout** (オプション): 接続が確立されるまでの最大待機時間（ミリ秒）。この時間内に接続が確立されない場合、関数はエラーを返します。timeoutが0に設定されている場合、関数は接続が確立されるまで無期限に待機します。

- `WiFiClient::stop()` -- この関数は、クライアントをサーバーから切断し、クライアントが使用しているソケット/ポートを解放するために使用されます。関数が呼び出されると、クライアントはもはやデータを送受信できません。

- `WiFiClient::setTimeout(uint32_t timeout_ms)` -- この関数は、クライアントが接続の確立またはデータの受信を待機する最大ミリ秒数を設定します。接続またはデータ転送が指定されたタイムアウトより長くかかる場合、接続は閉じられます。

 	- **入力パラメータ**
  		- **timeout_ms**:   タイムアウトのミリ秒数。

- `WiFiClient::write(uint8_t data)` -- WiFiClientインスタンスを通じて接続されたサーバーに単一バイトのデータを書き込みます。または`WiFiClient::write(const uint8_t *buf, size_t size)`。

 	- **入力パラメータ**
  		- **data**:   確立されたネットワーク接続を介して送信する必要がある単一バイトのデータです。

- `WiFiClient::read()` -- この関数は、接続されたサーバーから受信データの単一バイトを読み取ります。読み取られたバイトを整数値として返します。データが利用できない場合は-1を返します。または`read(uint8_t *buf, size_t size)`。

 	- **出力**: 受信したバイト数を示す整数値。戻り値が0の場合、サーバーが接続を閉じたことを意味します。

- `WiFiClient::peek()` -- この関数は、実際に読み取ることなく、サーバーから読み取り可能なデータがあるかどうかを確認するために使用されます。

 	- **出力**: 受信バッファから削除することなく、次の受信データバイトを返します。データが利用できない場合は-1を返します。

- `WiFiClient::available()` -- この関数は、サーバーから読み取り可能なデータのバイト数を確認するために使用されます。

 	- **出力**: 読み取り可能なバイト数を表す整数値を返します。

### WiFi サーバー関数

- `WiFiServer::stopAll()` -- この関数は、Arduino WiFiライブラリのWiFiServerクラスのメソッドです。このメソッドは、WiFiServerクラスを使用して作成されたすべてのサーバーインスタンスを停止します。各インスタンスに対して個別に`stop()`メソッドを呼び出す代わりに、すべてのサーバーを一度に停止したい場合に便利です。

- `WiFiServer::begin(uint16_t port, int enable)` -- この関数は、指定されたポートでサーバーを開始するために使用されます。サーバーは受信クライアント接続をリッスンします。

 	- **入力パラメータ**
  		- **port**: リッスンするポート番号。
  		- **enable** (オプション): サーバーが開始された直後に有効にするかどうかを示すフラグ。このフラグはデフォルトでtrueに設定されています。

- `WiFiServer::hasClient()` -- この関数は、サーバーで利用可能な受信クライアント接続があるかどうかを確認するために使用されます。この関数は、新しい接続を継続的にチェックするためにループで使用できます。

 	- **出力**: クライアントが接続している場合はWiFiClientオブジェクトを返し、接続を待機しているクライアントがない場合はNULLポインタを返します。

- `WiFiServer::end()` -- この関数は、サーバーを停止し、関連するリソースを解放するために使用されます。呼び出されると、サーバーは新しいクライアント接続を受け入れることができなくなります。既存のクライアント接続は、クライアントまたはサーバーによって閉じられるまで開いたままになります。`WiFiServer::close()`と`WiFiServer::stop()`は同じ機能を持ちます。

### WiFi マルチプル関数

- `WiFiMulti::addAP(const char* ssid, const char *passphrase)` -- これは、WiFiMultiオブジェクトが接続を試行する利用可能なAPのリストに新しいアクセスポイント（AP）を追加するために使用されます。

 	- **入力パラメータ**
  		- **ssid**: SSIDへのポインタ（最大63文字）。
  		- **passphrase**: （WPA2の場合最小8文字、オープンの場合はNULLを使用）。

 	- **出力**: True/False

- `WiFiMulti::run(uint32_t connectTimeout)` -- この関数は、正常に接続できるまで、保存されたアクセスポイントの1つに順次接続を試行します。

 	- **入力パラメータ**
  		- **connectTimeout**: このパラメータは、接続を待機する最大時間をミリ秒で指定します。connectTimeoutが0に設定されている場合、関数はタイムアウトせず、無期限に接続を試行します。

 	- **出力**: ステータス

## WiFi 使用例

次に、XIAO ESP32-C5を使用して、いくつかの基本的なWi-Fi機能の使用方法を実演します。

### ネットワークスキャン

XIAO ESP32-C5はデュアルバンド2.4 GHz & 5 GHz Wi-Fiをサポートしており、スキャンモードで周囲の2.4 GHzおよび5 GHz Wi-Fiネットワークとその信号強度をスキャンできます。

#### プログラム

以下は、XIAO ESP32-C5が周囲のWi-Fiネットワークをスキャンする方法を示すサンプルプログラムです。

- 参考コード

<details>

<summary>WiFiScan.ino</summary>

```cpp
/*
 *  This sketch demonstrates how to scan WiFi networks. For chips that support 5GHz band, separate scans are done for all bands.
 *  The API is based on the Arduino WiFi Shield library, but has significant changes as newer WiFi functions are supported.
 *  E.g. the return value of `encryptionType()` different because more modern encryption is supported.
 */
#include "WiFi.h"

void setup() {
  Serial.begin(115200);
  // Enable Station Interface
  WiFi.STA.begin();
  Serial.println("Setup done");
}

void ScanWiFi() {
  Serial.println("Scan start");
  // WiFi.scanNetworks will return the number of networks found.
  int n = WiFi.scanNetworks();
  Serial.println("Scan done");
  if (n == 0) {
    Serial.println("no networks found");
  } else {
    Serial.print(n);
    Serial.println(" networks found");
    Serial.println("Nr | SSID                             | RSSI | CH | Encryption");
    for (int i = 0; i < n; ++i) {
      // Print SSID and RSSI for each network found
      Serial.printf("%2d", i + 1);
      Serial.print(" | ");
      Serial.printf("%-32.32s", WiFi.SSID(i).c_str());
      Serial.print(" | ");
      Serial.printf("%4ld", WiFi.RSSI(i));
      Serial.print(" | ");
      Serial.printf("%2ld", WiFi.channel(i));
      Serial.print(" | ");
      switch (WiFi.encryptionType(i)) {
        case WIFI_AUTH_OPEN:            Serial.print("open"); break;
        case WIFI_AUTH_WEP:             Serial.print("WEP"); break;
        case WIFI_AUTH_WPA_PSK:         Serial.print("WPA"); break;
        case WIFI_AUTH_WPA2_PSK:        Serial.print("WPA2"); break;
        case WIFI_AUTH_WPA_WPA2_PSK:    Serial.print("WPA+WPA2"); break;
        case WIFI_AUTH_WPA2_ENTERPRISE: Serial.print("WPA2-EAP"); break;
        case WIFI_AUTH_WPA3_PSK:        Serial.print("WPA3"); break;
        case WIFI_AUTH_WPA2_WPA3_PSK:   Serial.print("WPA2+WPA3"); break;
        case WIFI_AUTH_WAPI_PSK:        Serial.print("WAPI"); break;
        default:                        Serial.print("unknown");
      }
      Serial.println();
      delay(10);
    }
  }

  // Delete the scan result to free memory for code below.
  WiFi.scanDelete();
  Serial.println("-------------------------------------");
}
void loop() {
  Serial.println("-------------------------------------");
  Serial.println("Default wifi band mode scan:");
  Serial.println("-------------------------------------");
#if ESP_IDF_VERSION >= ESP_IDF_VERSION_VAL(5, 4, 2)
  WiFi.setBandMode(WIFI_BAND_MODE_AUTO);
#endif
  ScanWiFi();
#if CONFIG_SOC_WIFI_SUPPORT_5G
  // Wait a bit before scanning again.
  delay(1000);
  Serial.println("-------------------------------------");
  Serial.println("2.4 Ghz wifi band mode scan:");
  Serial.println("-------------------------------------");
  WiFi.setBandMode(WIFI_BAND_MODE_2G_ONLY);
  ScanWiFi();
  // Wait a bit before scanning again.
  delay(1000);
  Serial.println("-------------------------------------");
  Serial.println("5 Ghz wifi band mode scan:");
  Serial.println("-------------------------------------");
  WiFi.setBandMode(WIFI_BAND_MODE_5G_ONLY);
  ScanWiFi();
#endif
  // Wait a bit before scanning again.
  delay(10000);
}
```

</details>

#### 効果の表示

- プログラムをアップロードした後、Arduino IDEのシリアルモニターを開くと、スキャンされたWi-Fi情報が出力されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_1.png" style={{width:800, height:'auto'}}/></div>

### Wi-Fiネットワークへの接続

Wi-Fiカバレッジ内で、対象のWi-FiネットワークのSSIDとPASSWORDを知っていれば、XIAO ESP32-C5がサポートするSTAモードを使用して特定のWi-Fiネットワークに接続できます。

#### プログラム

次に、XIAO ESP32-C5が指定されたWi-Fiネットワークに接続する方法を示すサンプルプログラムを提供します。

:::tip
XIAO ESP32-C5はデュアルバンドWi-Fi（2.4 GHz & 5 GHz）をサポートしており、ご家庭のネットワークに基づいて接続を選択できます。
:::

- 参考コード

```cpp
#include <WiFi.h>

// Replace with your network credentials
const char* ssid = "YOUR_WIFI_SSID";
const char* password = "YOUR_WIFI_PASSWORD";

void setup() {
    Serial.begin(115200);

    // Explicitly set mode to Station
    WiFi.mode(WIFI_STA);

    Serial.printf("Connecting to %s ", ssid);
    WiFi.begin(ssid, password);

    // Wait for connection
    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }

    Serial.println("\nCONNECTED!");

    // Print connection details
    Serial.print("IP Address: ");
    Serial.println(WiFi.localIP());
    Serial.print("Subnet Mask: ");
    Serial.println(WiFi.subnetMask());
    Serial.print("Gateway IP: ");
    Serial.println(WiFi.gatewayIP());
    Serial.print("DNS IP: ");
    Serial.println(WiFi.dnsIP());

    // C5 Specific: Check which band and channel we are on
    Serial.print("Channel: ");
    Serial.println(WiFi.channel());
    Serial.print("RSSI (Signal Strength): ");
    Serial.println(WiFi.RSSI());
}

void loop() {
    // Check if WiFi is still connected
    if (WiFi.status() != WL_CONNECTED) {
        Serial.println("WiFi lost. Reconnecting...");
        WiFi.disconnect();
        WiFi.reconnect();
    }
    delay(5000);
}
```

#### 効果の表示

- プログラムをアップロードした後、Arduino IDEのシリアルモニターを開くと、接続されたWi-FiネットワークのIPアドレスなどの情報が出力されます。
- 私の環境では5 GHzネットワークに接続されています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_2.png" style={{width:800, height:'auto'}}/></div>

### APモード

XIAO ESP32-C5は他のデバイスが接続するためのホットスポットとして動作できます。つまり、ルーターに接続することなく、Wi-Fi対応デバイスを使用してXIAO ESP32-C5に接続できます。

簡単に言うと、XIAO ESP32-C5をアクセスポイントとして設定すると、独自の独立したWi-Fiネットワークが作成され、近くのWi-Fiデバイス（ステーション）が接続できます（スマートフォンやコンピューターなど）。

#### プログラム

次に、XIAO ESP32-C5がホットスポットを作成し、他のデバイスがそれに接続する方法を示すサンプルプログラムを紹介します。

- 参考コード

```cpp
#include <WiFi.h>

const char* ap_ssid = "XIAO ESP32-C5";
const char* ap_password = "password1234";

int previous_station_count = 0;

void setup() {
    Serial.begin(115200);

    // Initialize built-in LED pin
    pinMode(LED_BUILTIN, OUTPUT);
    digitalWrite(LED_BUILTIN, LOW); // Initial state: LED off

    // Set mode to Access Point
    WiFi.mode(WIFI_AP);

    // Configure AP
    // Arguments: SSID, Password, Channel (1-13 for 2.4G), Hidden (0/1), Max Connections
    // Note: Forcing 5GHz AP usually requires lower-level IDF calls in current Arduino Core,
    // so this will likely default to 2.4GHz.
    bool result = WiFi.softAP(ap_ssid, ap_password, 1, 0, 4);

    if (result) {
        Serial.println("AP Started Successfully");
    } else {
        Serial.println("AP Start Failed");
    }

    // Print IP Address of the AP (Default is usually 192.168.4.1)
    Serial.print("AP IP Address: ");
    Serial.println(WiFi.softAPIP());
}

void loop() {
    // Get current number of connected stations
    int current_station_count = WiFi.softAPgetStationNum();
    Serial.printf("Stations connected: %d\n", current_station_count);

    // Check if any device has connected or disconnected
    if (current_station_count > 0 && previous_station_count == 0) {
        // New device connected, turn on LED
        digitalWrite(LED_BUILTIN, HIGH);
        Serial.println("Device connected - LED ON");
    } else if (current_station_count == 0 && previous_station_count > 0) {
        // All devices disconnected, turn off LED
        digitalWrite(LED_BUILTIN, LOW);
        Serial.println("All devices disconnected - LED OFF");
    }

    previous_station_count = current_station_count;
    delay(2000);
}
```

#### 効果の表示

- プログラムをコンパイルしてアップロードした後、WLAN機能を使用してAPホットスポットを発見できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_3.png" style={{width:800, height:'auto'}}/></div>

- 接続が成功すると、シリアルモニターにIPアドレスが印刷され、同時にオンボードUSER LEDが点灯します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_4.png" style={{width:800, height:'auto'}}/></div>

### WiFi & MQTT使用法

MQTTプロトコルはIoTデバイスで広く使用されており、XIAO ESP32-C5はこのプロトコルをサポートしています。つまり、XIAO ESP32-C5を使用して多くの興味深いIoTプロジェクトを開発できます。

#### プログラム

次に、XIAO ESP32-C5でMQTTプロトコルを使用する方法を示す参考プログラムを紹介します。

- `PubSubClient`ライブラリをインストール

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_library_1.png" style={{width:600, height:'auto'}}/></div>

- 参考コード

```cpp
#include <WiFi.h>
#include <PubSubClient.h>

const char* ssid = "YOUR_SSID";
const char* password = "YOUR_PASSWORD";

// Using a public MQTT broker for demonstration
const char* mqtt_server = "broker.emqx.io";
const int mqtt_port = 1883;

WiFiClient espClient;
PubSubClient client(espClient);

// Callback function: Executed when a message is received
void callback(char* topic, byte* payload, unsigned int length) {
    Serial.print("Message arrived [");
    Serial.print(topic);
    Serial.print("] ");
    for (int i = 0; i < length; i++) {
        Serial.print((char)payload[i]);
    }
    Serial.println();
}

void reconnect() {
    // Loop until we're reconnected
    while (!client.connected()) {
        Serial.print("Attempting MQTT connection...");
        String clientId = "ESP32C5Client-";
        clientId += String(random(0xffff), HEX);

        // Attempt to connect
        if (client.connect(clientId.c_str())) {
            Serial.println("connected");
            // Once connected, subscribe to a topic
            client.subscribe("esp32c5/test/topic");
        } else {
            Serial.print("failed, rc=");
            Serial.print(client.state());
            Serial.println(" try again in 5 seconds");
            delay(5000);
        }
    }
}

void setup() {
    Serial.begin(115200);
    WiFi.begin(ssid, password);

    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }
    Serial.println("\nWiFi Connected");

    // Configure MQTT Server
    client.setServer(mqtt_server, mqtt_port);
    client.setCallback(callback);
}

void loop() {
    if (!client.connected()) {
        reconnect();
    }
    client.loop();

    // Publish a message every 2 seconds
    static unsigned long lastMsg = 0;
    unsigned long now = millis();
    if (now - lastMsg > 2000) {
        lastMsg = now;
        Serial.println("Publishing message...");
        client.publish("esp32c5/test/topic", "Hello from XIAO ESP32-C5");
    }
}
```

#### 効果の実演

- MQTTXブローカークライアントをサポートする任意のソフトウェアをダウンロードします。ここではMQTTXを使用します [MQTTx](https://mqttx.app/downloads)

- MQTTXを開いてクライアント情報を追加します。ここではデフォルトのクライアントアドレスを使用するため、クライアントID `ESP32C5Client` を追加してテストクライアント名を設定するだけです。その他の設定はデフォルトのままにできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_5.png" style={{width:800, height:'auto'}}/></div><br/>

- コードをアップロードしてMQTTXを使用して接続します。接続が成功したら、左側の `New Subscription` をクリックしてサブスクリプションを追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_6.png" style={{width:800, height:'auto'}}/></div><br/>

- サブスクリプション情報を設定します：`esp32c5/test/topic` を入力し、QoSに0または1を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_7.png" style={{width:800, height:'auto'}}/></div><br/>

- 設定が成功すると、XIAO ESP32-C5（クライアントとして動作）が2秒ごとに公開するメッセージを確認できます。トピックを選択した後、クライアントにメッセージを送信することもでき、クライアントは受信時にそれらを公開します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_8.png" style={{width:800, height:'auto'}}/></div><br/>

:::tip
broker.emqx.ioは全ユーザーが共有するパブリックブローカーです。同じトピックをサブスクライブする人は誰でもあなたのメッセージを見ることができます。これはテスト目的のみを意図しており、機密データの送信には適していません。
:::

### WiFi & HTTP /HTTPS

- XIAO ESP32C3用に作成したChatGPTにアクセスする例を参照できます。これはWiFiClientとHTTPClientの使用方法を詳しく説明しています：[XIAO ESP32C3でWiFiClientとHTTPClientの使用方法を学ぶ - XIAO ESP32C3 & ChatGPT実践編](https://wiki.seeedstudio.com/ja/xiaoesp32c3-chatgpt/)

- HTTPの簡単な使用方法のみを探求したい場合は、以下の手順に従ってテストと検証を行うこともできます。

#### プログラム

- `HTTPClient` ライブラリをインストールします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_library_2.png" style={{width:600, height:'auto'}}/></div><br/>

- 参考コード

```cpp
#include <WiFi.h>
#include <HTTPClient.h>
#include <WiFiClientSecure.h> // Required for HTTPS

const char* ssid = "YOUR_SSID";
const char* password = "YOUR_PASSWORD";

// HTTPS Endpoint
const char* serverUrl = "https://jsonplaceholder.typicode.com/todos/1";

// Root CA Certificate (Optional for simple testing if setInsecure is used)
// To be secure, you should use the actual root CA of the website.
// For this example, we will use setInsecure().

void setup() {
    Serial.begin(115200);
    WiFi.begin(ssid, password);

    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }
    Serial.println("\nConnected");
}

void loop() {
    if ((WiFi.status() == WL_CONNECTED)) {

        // 1. Create WiFiClientSecure object
        WiFiClientSecure client;

        // IGNORE SSL certificate validation (Good for testing, NOT for production)
        client.setInsecure(); 

        // 2. Create HTTPClient object
        HTTPClient http;

        Serial.print("[HTTPS] begin...\n");

        // 3. Initialize connection
        if (http.begin(client, serverUrl)) { 
            Serial.print("[HTTPS] GET...\n");

            // 4. Send GET request
            int httpCode = http.GET();

            // 5. Check return code
            if (httpCode > 0) {
                Serial.printf("[HTTPS] GET... code: %d\n", httpCode);

                if (httpCode == HTTP_CODE_OK || httpCode == 301 || httpCode == 302) {
                    String payload = http.getString();
                    Serial.println(payload);
                }
            } else {
                Serial.printf("[HTTPS] GET... failed, error: %s\n", http.errorToString(httpCode).c_str());
            }

            // 6. Close connection
            http.end();
        } else {
            Serial.printf("[HTTPS] Unable to connect\n");
        }
    }

    delay(10000);
}
```

#### 効果の実演

:::tip
`https://jsonplaceholder.typicode.com` は開発とテスト目的専用に設計された無料のモックREST APIテストサービスです。実際のデータの永続的な変更や保存はサポートしていません。
:::

- コードをアップロードした後、`https://jsonplaceholder.typicode.com/todos/1` を開いて、Arduino IDEのシリアルモニターツールで情報が一致しているかを確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_9.png" style={{width:800, height:'auto'}}/></div>

### WiFi-Mesh

以下はEspressif Systemsによる **ESP-WIFI-MESH** の公式紹介です：

ESP-WIFI-MESHは、Espressif SoCの同時AP-STA機能を使用してメッシュトポロジーで組織されたノードを持つワイヤレス通信ネットワークです。自己形成と自己修復ネットワークを提供し、展開が容易です。ESP-WIFI-MESHのネットワークトポロジーは、特定のWi-Fiインフラストラクチャサポートを必要とせずに、広いエリアで最大1000ノードまでスケールアップできます。ESP-WIFI-MESHは、Wi-Fi信号が届かない家庭展開シナリオでWi-Fiブラインドスポットをカバーするためにも使用できます。

より詳細な情報については、Espressif Systemsの公式リンクを参照してください：

- [ESP-Wi-Fi-MESH](https://www.espressif.com/en/products/sdks/esp-wifi-mesh/overview)
- [ESP-IDF Programming Guide](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/api-guides/esp-wifi-mesh.html)

次に、ESP-Meshの例を紹介します。この例では、少なくとも2つのESP32デバイスを準備する必要があります。

#### プログラム

- `Alteriom PainlessMesh` ライブラリをインストールします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_library_3.png" style={{width:600, height:'auto'}}/></div>

- `AsyncTCP` ライブラリをインストールします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_library_4.png" style={{width:600, height:'auto'}}/></div>

- 参考コード

```cpp
#include "painlessMesh.h"

#define   MESH_PREFIX     "ESP32_C5_MESH"
#define   MESH_PASSWORD   "mesh_password123"
#define   MESH_PORT       5555

painlessMesh  mesh;
Scheduler userScheduler; // to control your personal task

void sendMessage(); // Prototype

// Define a task to send messages every 1 second
Task taskSendMessage(1000, TASK_FOREVER, &sendMessage);

void sendMessage() {
    String msg = "Hello from node ";
    msg += mesh.getNodeId();
    mesh.sendBroadcast(msg);
    Serial.printf("Sent broadcast: %s\n", msg.c_str());
}

// Callback: When a message is received
void receivedCallback( uint32_t from, String &msg ) {
    Serial.printf("Received from %u msg=%s\n", from, msg.c_str());
}

// Callback: When a new connection is established
void newConnectionCallback(uint32_t nodeId) {
    Serial.printf("New Connection, nodeId = %u\n", nodeId);
}

// Callback: When connection changes
void changedConnectionCallback() {
    Serial.printf("Changed connections\n");
}

// Callback: Time adjustment
void nodeTimeAdjustedCallback(int32_t offset) {
    Serial.printf("Adjusted time %u. Offset = %d\n", mesh.getNodeTime(), offset);
}

void setup() {
    Serial.begin(115200);

    // Debug messages
    mesh.setDebugMsgTypes( ERROR | STARTUP );  

    // Initialize Mesh
    mesh.init( MESH_PREFIX, MESH_PASSWORD, &userScheduler, MESH_PORT );

    // Register Callbacks
    mesh.onReceive(&receivedCallback);
    mesh.onNewConnection(&newConnectionCallback);
    mesh.onChangedConnections(&changedConnectionCallback);
    mesh.onNodeTimeAdjusted(&nodeTimeAdjustedCallback);

    // Add task to scheduler
    userScheduler.addTask( taskSendMessage );
    taskSendMessage.enable();
}

void loop() {
    // Keep the mesh network running
    mesh.update();
}
```

#### 効果の実演

- 2台のXIAO ESP32-C5デバイスにコードをアップロードし、任意のシリアルポートツールを開いて結果を確認します。

XIAO ESP32-C5デバイス1がネットワーク形成を開始してメッセージを送信します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_10.png" style={{width:800, height:'auto'}}/></div><br/>

XIAO ESP32-C5デバイス2がネットワークに参加し、デバイス1から送信されたメッセージを受信します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_11.png" style={{width:800, height:'auto'}}/></div>

### 例：IoTスマートホームハブ

上記のWi-Fiの例から、XIAO ESP32-C5でWi-Fiを使用する方法をマスターしたはずです。次に、Wi-Fi APモードとHTTPネットワークサービスを使用してスマートホーム制御ハブを実装する方法の例を紹介します。具体的には、XIAO ESP32-C5をスマートホーム制御ハブとして使用して、家庭の状態を監視する方法です。

- `ESPAsyncWebServer` ライブラリをインストールします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_library_5.png" style={{width:600, height:'auto'}}/></div><br/>

- コードをアップロードして `XIAO ESP32-C5` ホットスポットに接続します。

<details>

<summary>参考コード</summary>

```cpp
#include <WiFi.h>
#include <AsyncTCP.h>
#include <ESPAsyncWebServer.h>
#include <DNSServer.h>

const char* ssid = "XIAO ESP32-C5";  // Hotspot name
const char* password = "12345678";  // Hotspot password (empty for no password, configurable)

DNSServer dnsServer;
AsyncWebServer server(80);

// HTML content for temporary website (You can modify the content here, e.g., add redirect to external website)
// const char index_html[] PROGMEM = R"rawliteral(
// <!DOCTYPE html>
// <html>
// <head>
//     <title>Temporary Website</title>
//     <meta charset="UTF-8">
//     <!-- Optional: Add automatic redirect to external website -->
//     <!-- <meta http-equiv="refresh" content="5;url=https://example.com"> -->
// </head>
// <body>
//     <h1>Welcome to XIAO ESP32-C5 Temporary Website!</h1>
//     <p>You have connected to XIAO-ESP32-C5 hotspot. This is custom content.</p>
//     <form action="/" method="POST">
//         <input type="submit" value="Continue">
//     </form>
// </body>
// </html>
// )rawliteral";

const char index_html[] PROGMEM = R"rawliteral(
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>XIAO ESP32-C5 Control Center</title>
  <style>
    :root {
      --bg-color: #121212;
      --card-bg: #1e1e1e;
      --text-main: #e0e0e0;
      --text-sub: #a0a0a0;
      --accent: #00e5ff; /* Neon Blue */
      --active: #00ff9d; /* Active Green */
      --danger: #ff4081; /* Warning Red */
    }

    body {
      font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background-color: var(--bg-color);
      color: var(--text-main);
      margin: 0;
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 100vh;
    }

    h1 {
      font-weight: 300;
      letter-spacing: 1.5px;
      margin-bottom: 10px;
      text-align: center;
    }

    p.subtitle {
      color: var(--text-sub);
      font-size: 0.9rem;
      margin-top: 0;
      margin-bottom: 30px;
      text-align: center;
    }

    /* Container Layout */
    .container {
      width: 100%;
      max-width: 400px; /* Suitable width for mobile devices */
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    /* Status Panel */
    .status-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }

    .card {
      background-color: var(--card-bg);
      border-radius: 12px;
      padding: 15px;
      text-align: center;
      box-shadow: 0 4px 6px rgba(0,0,0,0.3);
      border: 1px solid #333;
      transition: transform 0.2s;
    }

    .card:active {
      transform: scale(0.98);
    }

    .card-icon {
      font-size: 24px;
      margin-bottom: 5px;
      display: block;
    }

    .card-value {
      font-size: 1.2rem;
      font-weight: bold;
      color: var(--accent);
    }

    .card-label {
      font-size: 0.8rem;
      color: var(--text-sub);
    }

    /* Control Button Area */
    .control-group {
      background-color: var(--card-bg);
      border-radius: 16px;
      padding: 20px;
      border: 1px solid #333;
    }

    .control-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
      padding-bottom: 15px;
      border-bottom: 1px solid #333;
    }

    .control-item:last-child {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }

    /* Switch Style */
    .switch {
      position: relative;
      display: inline-block;
      width: 50px;
      height: 26px;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #333;
      transition: .4s;
      border-radius: 34px;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 18px;
      width: 18px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: .4s;
      border-radius: 50%;
    }

    input:checked + .slider {
      background-color: var(--accent);
      box-shadow: 0 0 10px var(--accent);
    }

    input:checked + .slider:before {
      transform: translateX(24px);
    }

    /* Main Button */
    .main-btn {
      width: 100%;
      padding: 15px;
      background: linear-gradient(45deg, var(--accent), #00b8d4);
      border: none;
      border-radius: 30px;
      color: #000;
      font-weight: bold;
      font-size: 1rem;
      cursor: pointer;
      margin-top: 20px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .main-btn:active {
      opacity: 0.9;
      transform: scale(0.98);
    }

  </style>
</head>
<body>

  <div class="container">
    <header>
      <h1>XIAO ESP32-C5</h1>
      <p class="subtitle">IoT Smart Home Hub</p>
    </header>

    <div class="status-grid">
      <div class="card">
        <span class="card-icon">📡</span>
        <div class="card-value">Online</div>
        <div class="card-label">System Status</div>
      </div>
      <div class="card">
        <span class="card-icon">🌡️</span>
        <div class="card-value" id="temp-val">26.5°C</div>
        <div class="card-label">Indoor Temperature</div>
      </div>
      <div class="card">
        <span class="card-icon">💧</span>
        <div class="card-value">58%</div>
        <div class="card-label">Air Humidity</div>
      </div>
      <div class="card">
        <span class="card-icon">⏱️</span>
        <div class="card-value">12ms</div>
        <div class="card-label">Latency</div>
      </div>
    </div>

    <div class="control-group">
      <div class="control-item">
        <span>Living Room Main Light</span>
        <label class="switch">
          <input type="checkbox" id="btn-light" onchange="toggleDevice('light', this)">
          <span class="slider"></span>
        </label>
      </div>

      <div class="control-item">
        <span>Air Purifier</span>
        <label class="switch">
          <input type="checkbox" id="btn-fan" onchange="toggleDevice('fan', this)">
          <span class="slider"></span>
        </label>
      </div>

      <div class="control-item">
        <span>Auto Mode</span>
        <label class="switch">
          <input type="checkbox" checked onchange="toggleDevice('auto', this)">
          <span class="slider"></span>
        </label>
      </div>
    </div>

    <form action="/" method="POST">
       <button type="submit" class="main-btn">Enter Advanced Settings</button>
    </form>

  </div>

  <script>
    // Simple JavaScript for demo interaction
    function toggleDevice(device, element) {
      var state = element.checked ? "ON" : "OFF";
      console.log(device + " is now " + state);

      // You can add fetch request to send to ESP32 here
      // fetch('/toggle?device=' + device + '&state=' + state);
    }

    // Simulate dynamic data fluctuation effect
    setInterval(() => {
        const temp = 26 + (Math.random() * 0.5);
        document.getElementById('temp-val').innerText = temp.toFixed(1) + "°C";
    }, 3000);
  </script>
</body>
</html>
)rawliteral";

// Handle all requests and redirect to temporary page
class CaptiveRequestHandler : public AsyncWebHandler {
public:
    CaptiveRequestHandler() {}
    virtual ~CaptiveRequestHandler() {}

    bool canHandle(AsyncWebServerRequest *request) {
        return true;  // Handle all requests
    }

    void handleRequest(AsyncWebServerRequest *request) {
        request->send_P(200, "text/html", index_html);  // Return HTML content
    }
};

void setup() {
    Serial.begin(115200);
    delay(10);

    // Set to AP (Access Point) mode
    WiFi.mode(WIFI_AP);
    WiFi.softAP(ssid, password);

    Serial.println("Hotspot created: " + String(ssid));
    Serial.print("IP Address: ");
    Serial.println(WiFi.softAPIP());

    // Start DNS server, redirect all domains to local IP
    dnsServer.start(53, "*", WiFi.softAPIP());

    // Configure Web Server: redirect all not found requests to temporary page
    server.addHandler(new CaptiveRequestHandler()).setFilter(ON_AP_FILTER);  // Only in AP mode
    server.onNotFound([](AsyncWebServerRequest *request) {
        request->send_P(200, "text/html", index_html);
    });

    server.begin();
    Serial.println("Web Server started");

    server.on("/toggle", HTTP_GET, [](AsyncWebServerRequest *request){
    String device = request->getParam("device")->value();
    String state = request->getParam("state")->value();

    Serial.print("Device: ");
    Serial.print(device);
    Serial.print(" State: ");
    Serial.println(state);

    if(device == "light" && state == "ON") {
        digitalWrite(LED_BUILTIN, LOW); // Assume LOW level turns on the LED
    } else {
        digitalWrite(LED_BUILTIN, HIGH);
    }

    request->send(200, "text/plain", "OK");
});
}

void loop() {
    dnsServer.processNextRequest();  // Process DNS requests
    delay(10);
}
```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_12.png" style={{width:800, height:'auto'}}/></div><br/>

- IPアドレスを入力してWebページにジャンプします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_13.png" style={{width:800, height:'auto'}}/></div><br/>

:::tip
Webページに表示されるコントロールとセンサーはカスタマイズ可能です。特定のニーズに応じて新しいものを追加し、生成されたWebページを変更できます。参考：[ESPAsyncWebServer](https://github.com/lacamera/ESPAsyncWebServer)
:::

:::tip
XIAO ESP32-C5によって生成されるAPホットスポットは、デフォルトではインターネットに接続できません。インターネット接続が必要な場合は、以下の2つの方法のいずれかを採用できます：<br/>
方法1：XIAO ESP32-C5をHome Assistantに接続する。参考：[Connecting XIAO ESP32-C5 to Home Assistant](https://wiki.seeedstudio.com/ja/xiao_esp32c5_homeassistant/)<br/>
方法2：MQTTサービスを使用してクラウドサーバーにデータをアップロードする。この方法では一定のサービスクレジットの購入が必要な場合があります。参考：[Goole Cloud](https://cloud.google.com/)<br/>
:::

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品でのご体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
