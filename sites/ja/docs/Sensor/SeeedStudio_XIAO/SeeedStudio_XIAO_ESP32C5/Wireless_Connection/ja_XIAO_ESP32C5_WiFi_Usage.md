---
title: WiFi の使用
description: Seeed Studio XIAO ESP32-C5 による WiFi の使用方法
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
updatedAt: '2026-01-20'
url: https://wiki.seeedstudio.com/ja/xiao_esp32c5_wifi_usage/
---

# Seeed Studio XIAO ESP32-C5 による WiFi の使用

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

Seeed Studio XIAO ESP32-C5 は 2.4 GHz および 5 GHz のデュアルバンド Wi-Fi をサポートしており、802.11a/b/g/n/ac 規格との下位互換性を備えたデュアルバンド Wi-Fi 6（802.11ax）無線を搭載しています。さらに、この開発ボードは U.FL アンテナ接続に対応しており、XIAO ESP32-C5 のワイヤレス接続性能を強化するよう設計されています。本チュートリアルでは、XIAO ESP32-C5 の Wi-Fi 機能を活用して Wi-Fi ネットワークに接続し、基本的なネットワークタスクを実行する方法を紹介します。<br/>
以下のチュートリアルでは、コンパイルと書き込みに Arduino IDE を使用します。まだ Arduino IDE の使用経験がない場合は、[Getting Started with Seeed Studio XIAO ESP32-C5](https://wiki.seeedstudio.com/ja/xiao_esp32c5_getting_started/) を参照してください。<br/>

## 入門ガイド

### アンテナの取り付け

Seeed Studio XIAO ESP32-C5 のパッケージ内には、専用の **Wi-Fi/BT アンテナコネクタ** が用意されています。最適な WiFi/Bluetooth 信号強度を得るには、同梱されているアンテナを取り出し、コネクタに取り付ける必要があります。<br/>
<!-- :::tip
より強力な利得効果を得たい場合は、**2.4G/5G External Antenna with RP-SMA Male Connector** を購入して取り付けることができます。これは、パッケージに含まれる内蔵 FPC アンテナよりもはるかに高い利得を実現します。
:::
<div class="table-center">
 <table>
  <tr>
   <th>2.4G/5G External Antenna with RP-SMA Male Connector</th>
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
</div> -->

## WiFi ライブラリの一般的なインターフェース

- XIAO ESP32-C5 は、幅広い Wi-Fi ネットワーク機能を提供します。一般的に、ESP32 のビルトインパッケージに含まれる WiFi ライブラリの関数を確認し、目的の機能を実現するために対応する関数を選択します。次に、よく使用されるインターフェースをいくつか挙げ、その使い方を紹介します。

:::tip
すぐに Wi-Fi 使用チュートリアルを始めたい場合は、[WiFi Usage Examples](#WiFi-Usage-Examples) にジャンプしてください。
:::

### 一般的な WiFi 関数

- `WiFiGenericClass::getHostname()` -- ESP32 用 WiFi ライブラリ内の関数で、デバイスのホスト名を文字列として返します。ホスト名は、ネットワーク上でデバイスを識別する一意の名前です。この関数は、以前に `WiFiGenericClass::setHostname()` を使用して設定されたホスト名を取得します。ホスト名が設定されていない場合は、デフォルトのホスト名が返されます。

- `WiFiGenericClass::persistent(bool persistent)` -- ESP32 WiFi ライブラリの永続モードを有効または無効にするために使用されるメソッドです。永続モードが有効な場合、Wi-Fi 設定は不揮発性メモリ（NVM）に保存され、電源のオン/オフやリセット後も保持されます。永続モードが無効な場合、設定は RAM に保存され、電源のオン/オフやリセット後には失われます。

 	- **入力パラメータ**
  		- **persistent**: 引数が true の場合、永続モードが有効になります。引数が false の場合、永続モードは無効になります。

- `WiFiGenericClass::enableLongRange(bool enable)` -- この関数は、WiFi モジュールの Long Range（LR）機能を有効または無効にするために使用されます。有効にすると、LR 機能により通常よりも遠くの WiFi ネットワークに接続できますが、データレートは低くなります。

 	- **入力パラメータ**
  		- **enable**: 機能を有効にするには true、無効にするには false を設定します。

- `WiFiGenericClass::mode(wifi_mode_t m)` -- この関数は、デバイスの WiFi モードを設定するために使用されます。

 	- **入力パラメータ**
  		- **m**: m パラメータは、wifi_mode_t enum で定義されている次の定数のいずれかで、設定するモードを指定します。
   			- **WIFI_MODE_NULL**: WiFi ステーションモードとアクセスポイントモードの両方を無効にします。
   			- **WIFI_MODE_STA**: 既存の WiFi ネットワークに接続するために WiFi ステーションモードを有効にします。
   			- **WIFI_MODE_AP**: 新しい WiFi ネットワークを作成するためにアクセスポイントモードを有効にします。
   			- **WIFI_MODE_APSTA**: WiFi ステーションモードとアクセスポイントモードの両方を有効にします。

- `WiFiGenericClass::setSleep(wifi_ps_type_t sleepType)` -- この関数は、WiFi モジュールの省電力モードを設定します。

 	- **入力パラメータ**
  		- **sleepType**: sleepType パラメータは、省電力モードの種類を指定する列挙型です。使用可能なスリープタイプは 3 種類あります。
   			- **WIFI_PS_NONE**: これはデフォルトのスリープモードであり、WiFi モジュールは省電力モードに入りません。
   			- **WIFI_PS_MIN_MODEM**: このモードでは、WiFi モジュールはアクセスポイント（AP）への接続を維持しながらモデムをシャットダウンします。
   			- **WIFI_PS_MAX_MODEM**: 最も積極的な Wi-Fi 省電力モードを有効にします。スリープ時間を大幅に延長できますが、レイテンシの増加やスループットの低下を招く可能性があり、一部のネットワークでは接続の安定性に影響を与える場合があります。

### STA 関数

- `WiFiSTAClass::status()` -- 接続ステータスを返します。

 	- **出力**: wl_status_t で定義されている値のいずれか。
  		- **WL_NO_SHIELD**: このステータスコードは、Wi-Fi モジュールが存在しないことを示します。
    - **WL_IDLE_STATUS**: このステータスコードは、Wi-Fi モジュールが何も操作を行っていないことを示します。
    - **WL_NO_SSID_AVAIL**: このステータスコードは、スキャン中に Wi-Fi ネットワークが見つからなかったことを示します。
    - **WL_SCAN_COMPLETED**: このステータスコードは、Wi-Fi スキャンが正常に完了したことを示します。
    - **WL_CONNECTED**: このステータスコードは、ESP32 が Wi-Fi ネットワークに正常に接続されていることを示します。
    - **WL_CONNECT_FAILED**: このステータスコードは、Wi-Fi ネットワークへの接続に失敗したことを示します。
    - **WL_CONNECTION_LOST**: このステータスコードは、Wi-Fi ネットワークへの接続が失われたことを示します。
    - **WL_DISCONNECTED**: このステータスコードは、ESP32 が以前は Wi-Fi ネットワークに接続されていたが、現在はいずれのネットワークにも接続されていないことを示します。

- `WiFiSTAClass::begin(const char* wpa2_ssid, wpa2_auth_method_t method, const char* wpa2_identity, const char* wpa2_username, const char *wpa2_password, const char* ca_pem, const char* client_crt, const char* client_key, int32_t channel, const uint8_t* bssid, bool connect)` -- WPA2 Enterprise AP への Wifi 接続を開始します。

 	- **入力パラメータ**（オプション）
  		- **ssid**: SSID 文字列へのポインタ。
  		- **method**: WPA2 の認証方式（WPA2_AUTH_TLS, WPA2_AUTH_PEAP, WPA2_AUTH_TTLS）
  		- **wpa2_identity**: エンティティへのポインタ
  		- **wpa2_username**: ユーザー名へのポインタ
  		- **wpa2_password**: パスワードへのポインタ。
  		- **ca_pem**: CA 証明書を含む .pem ファイルの内容を格納した文字列へのポインタ
  		- **client_crt**: クライアント証明書を含む .crt ファイルの内容を格納した文字列へのポインタ
  		- **client_key**: クライアント鍵を含む .key ファイルの内容を格納した文字列へのポインタ
  		- **channel**: オプション。AP のチャネル
  		- **bssid**: オプション。AP の BSSID / MAC
  		- **connect**: オプション。connect を呼び出すかどうか

- `WiFiSTAClass::reconnect()` -- 強制的に切断し、その後 AP への再接続を開始します。

 	- **出力**: True/False。

- `WiFiSTAClass::disconnect(bool wifioff, bool eraseap)` -- ネットワークから切断します。

 	- **入力パラメータ**
  		- **wifioff**: wifioff `true` の場合、Wi-Fi 無線をオフにします。
  		- **eraseap**: eraseap `true` の場合、NVS メモリから AP 設定を消去します。

 	- **出力**: True/False。

- `WiFiSTAClass::config(IPAddress local_ip, IPAddress gateway, IPAddress subnet, IPAddress dns1, IPAddress dns2)` -- DHCP クライアントを無効にして IP 設定を変更します。

 	- **入力パラメータ**
  		- **local_ip**: 静的 IP 設定。
  		- **gateway**: 静的ゲートウェイ設定。
  		- **subnet**: 静的サブネットマスク。
  		- **dns1**: 静的 DNS サーバー 1。
  		- **dns2**: 静的 DNS サーバー 2。

- `WiFiSTAClass::setAutoConnect(bool autoConnect)` -- 非推奨。電源投入時に、記録されている AP へ ESP32 ステーションを自動接続するかどうかを設定します。デフォルトでは自動接続が有効です。

 	- **入力パラメータ**
  		- **autoConnect**: autoConnect ブール値。

 	- **出力**: False。

- `WiFiSTAClass::waitForConnectResult(unsigned long timeoutLength)` -- WiFi 接続が結果に到達するまで待機します。

 	- **入力パラメータ**
  		- **timeoutLength**: 接続が確立されるまで待機する最大時間（ミリ秒）を指定します。

 	- **出力**: wl_status_t で定義されている値のいずれか。

- `WiFiSTAClass::localIP()` -- ステーションインターフェースの IP アドレスを取得します。

 	- **出力**: IPAddress ステーション IP。

- `WiFiSTAClass::macAddress(uint8_t* mac)` -- ステーションインターフェースの MAC アドレスを取得します。

 	- **入力パラメータ**
  		- **mac**（オプション）: 長さ WL_MAC_ADDR_LENGTH の uint8_t 配列へのポインタ。

 	- **出力**: uint8_t * へのポインタ。

- `WiFiSTAClass::SSID()` -- ネットワークに関連付けられている現在の SSID を返します。

 	- **出力**: SSID。

- `WiFiSTAClass::RSSI(void)` -- 現在のネットワークの RSSI を返します。

 	- **出力**: RSSI。

### AP 関数

- `WiFiAPClass::softAP(const char* ssid, const char* passphrase, int channel, int ssid_hidden, int max_connection, bool ftm_responder)` -- これは XIAO ESP32-C5 の WiFi ライブラリ内の関数です。SoftAP（プログラムによるアクセスポイント）を設定するために使用され、他のデバイスが XIAO ESP32-C5 に接続してそのリソースへアクセスできるようにします。

 	- **入力パラメータ**
  		- **ssid**:              SSID へのポインタ（最大 63 文字）。
    - **passphrase**:        （WPA2 の場合は最小 8 文字、オープンの場合は NULL を使用）。
    - **channel**:           WiFi チャンネル番号、1 - 13。
    - **ssid_hidden**:       ネットワークのステルス設定（0 = SSID をブロードキャスト、1 = SSID を非表示）。
    - **max_connection**:    同時接続可能なクライアントの最大数、1 - 4。

 	- **出力**: True/False。

- `WiFiAPClass::softAPgetStationNum()` -- softAP インターフェースに接続されているステーション / クライアントの数を取得します。

 	- **出力**: ステーション数。

- `WiFiAPClass::softAPConfig(IPAddress local_ip, IPAddress gateway, IPAddress subnet, IPAddress dhcp_lease_start)` -- SoftAP を設定するための関数です。

 	- **入力パラメータ**
  		- **local_ip**:      アクセスポイントの IP。
  		- **gateway**:       ゲートウェイ IP。
  		- **subnet**:        サブネットマスク。

 	- **出力**: True/False。

- `WiFiAPClass::softAPIP()` -- softAP インターフェースの IP アドレスを取得します。

 	- **出力**: IPAddress softAP IP。

- `WiFiAPClass::softAPmacAddress(uint8_t* mac)` -- softAP インターフェースの MAC アドレスを取得します。

 	- **入力パラメータ**
  		- **mac** (任意):   長さ WL_MAC_ADDR_LENGTH の uint8_t 配列へのポインタ。

 	- **出力**: uint8_t* へのポインタ、または String 型の MAC。

### WiFi スキャン関数

- `WiFiScanClass::scanNetworks(bool async, bool show_hidden, bool passive, uint32_t max_ms_per_chan, uint8_t channel, const char * ssid, const uint8_t * bssid)` -- 利用可能な WiFi ネットワークのスキャンを開始します。

 	- **入力パラメータ**
  		- **async**: スキャンを非同期で実行するかどうかを決定するブール値です。true に設定すると、この関数はすぐに戻り、スキャン結果は後で getScanResults() 関数を呼び出すことで取得できます。false に設定すると、スキャンが完了するまで関数はブロックされます。
  		- **show_hidden**: スキャン結果に隠しネットワークを含めるかどうかを決定するブール値です。
  		- **passive**: パッシブスキャンを行うかどうかを決定するブール値です。true に設定すると、スキャン中にパケットを送信しません。時間は長くかかる場合がありますが、特定の状況で有用です。
  		- **max_ms_per_chan**: 各チャンネルをスキャンする最大時間（ミリ秒）です。
  		- **channel**: スキャンする Wi-Fi チャンネルです。0 に設定すると、利用可能なすべてのチャンネルをスキャンします。
  		- **ssid**: スキャン対象ネットワークの SSID を含む、ヌル終端文字列へのポインタです。nullptr に設定すると、利用可能なすべてのネットワークをスキャンします。
  		- **bssid**: スキャン対象アクセスポイントの MAC アドレスを含む 6 バイト配列へのポインタです。nullptr に設定すると、すべてのアクセスポイントをスキャンします。

 	- **出力**: スキャンされたネットワーク数を示す整数値を返します。

- `WiFiScanClass::getNetworkInfo(uint8_t i, String &ssid, uint8_t &encType, int32_t &rssi, uint8_t* &bssid, int32_t &channel)` -- スキャンされた WiFi のすべての情報をポインタパラメータに読み込みます。

 	- **入力パラメータ**
  		- **i**: 指定したインデックス i のスキャン済みネットワーク情報を取得するために使用されます。
  		- **ssid**: ssid パラメータは String 変数への参照で、ネットワークの SSID が格納されます。
  		- **encType**: encType パラメータは uint8_t 変数への参照で、ネットワークの暗号化タイプが格納されます（0 = open、1 = WEP、2 = WPA_PSK、3 = WPA2_PSK、4 = WPA_WPA2_PSK）。
  		- **rssi**: rssi パラメータは int32_t 変数への参照で、ネットワークの受信信号強度（RSSI）が格納されます。
  		- **bssid**: bssid パラメータは uint8_t* ポインタへの参照で、ネットワークの BSSID（MAC アドレス）が格納されます。
  		- **channel**: channel パラメータは int32_t 変数への参照で、ネットワークのチャンネル番号が格納されます。

 	- **出力**: True/False。

- `WiFiScanClass::SSID(uint8_t i)` -- ネットワークスキャン中に検出された SSID を返します。

 	- **入力パラメータ**
  		- **i**: 情報を取得したいネットワーク項目を指定します。

 	- **出力**: スキャン済みネットワークリスト内の、指定された項目の SSID 文字列。

- `WiFiScanClass::RSSI(uint8_t i)` -- scanNetworks 中に検出されたネットワークの RSSI を返します。

 	- **入力パラメータ**
  		- **i**: 情報を取得したいネットワーク項目を指定します。

 	- **出力**: スキャン済みネットワークリスト内の、指定された項目の RSSI の符号付き値。

### WiFi クライアント関数

- `WiFiClient::connect(IPAddress ip, uint16_t port, int32_t timeout)` -- この関数は WiFiClient ライブラリで使用され、指定したタイムアウト値でリモート IP アドレスとポートに接続します。

 	- **入力パラメータ**
  		- **ip**:   接続先サーバーの IP アドレス。
  		- **port**: 接続先サーバーのポート番号。
  		- **timeout** (任意): 接続が確立されるまで待機する最大時間（ミリ秒）。この時間内に接続が確立されない場合、関数はエラーを返します。timeout が 0 に設定されている場合、接続が確立されるまで無期限に待機します。

- `WiFiClient::stop()` -- クライアントをサーバーから切断し、クライアントが使用していたソケット／ポートを解放するために使用される関数です。この関数が呼び出されると、クライアントはデータの送受信ができなくなります。

- `WiFiClient::setTimeout(uint32_t timeout_ms)` -- クライアントが接続の確立またはデータ受信のために待機する最大ミリ秒数を設定します。接続またはデータ転送が指定したタイムアウトより長くかかる場合、接続は閉じられます。

 	- **入力パラメータ**
  		- **timeout_ms**:   タイムアウト時間（ミリ秒）。

- `WiFiClient::write(uint8_t data)` -- WiFiClient インスタンスを通じて、接続されたサーバーに 1 バイトのデータを書き込みます。または `WiFiClient::write(const uint8_t *buf, size_t size)`。

 	- **入力パラメータ**
  		- **data**:   確立されたネットワーク接続を介して送信する必要がある 1 バイトのデータ。

- `WiFiClient::read()` -- 接続されたサーバーから受信データの 1 バイトを読み取る関数です。読み取ったバイトを整数値として返します。データが利用できない場合は -1 を返します。または `read(uint8_t *buf, size_t size)`。

 	- **出力**: 受信したバイト数を示す整数値。戻り値が 0 の場合、サーバーが接続を閉じたことを意味します。

- `WiFiClient::peek()` -- サーバーから読み取り可能なデータがあるかどうかを、実際に読み取らずに確認するための関数です。

 	- **出力**: 受信バッファから削除せずに、次の受信データの 1 バイトを返します。データが利用できない場合は -1 を返します。

- `WiFiClient::available()` -- サーバーから読み取り可能なデータが何バイトあるかを確認するための関数です。

 	- **出力**: 読み取り可能なバイト数を表す整数値を返します。

### WiFi サーバー関数

- `WiFiServer::stopAll()` -- この関数は Arduino WiFi ライブラリの WiFiServer クラスのメソッドです。このメソッドは、WiFiServer クラスを使用して作成されたすべてのサーバーインスタンスを停止します。各インスタンスに対して個別に `stop()` メソッドを呼び出す代わりに、すべてのサーバーを一度に停止したい場合に便利です。

- `WiFiServer::begin(uint16_t port, int enable)` -- 指定したポートでサーバーを開始するために使用される関数です。サーバーはクライアントからの接続を待ち受けます。

 	- **入力パラメータ**
  		- **port**: 待ち受けるポート番号。
  		- **enable** (任意): サーバーを開始後すぐに有効にするかどうかを示すフラグです。このフラグはデフォルトで true に設定されています。

- `WiFiServer::hasClient()` -- サーバー上で新しいクライアント接続が利用可能かどうかを確認するための関数です。この関数はループ内で使用して、新しい接続を継続的にチェックできます。

 	- **出力**: クライアントが接続していれば WiFiClient オブジェクトを返し、接続待ちのクライアントがいない場合は NULL ポインタを返します。

- `WiFiServer::end()` -- サーバーを停止し、関連するリソースを解放するために使用される関数です。一度呼び出されると、サーバーは新しいクライアント接続を受け付けなくなります。既存のクライアント接続は、クライアントまたはサーバーのいずれかが閉じるまで維持されます。`WiFiServer::close()` と `WiFiServer::stop()` は同じ機能を持ちます。

### WiFi マルチ接続関数

- `WiFiMulti::addAP(const char* ssid, const char *passphrase)` -- WiFiMulti オブジェクトが接続を試みる利用可能な AP のリストに、新しいアクセスポイント（AP）を追加するために使用されます。

 	- **入力パラメータ**
  		- **ssid**: SSID へのポインタ（最大 63 文字）。
  		- **passphrase**: （WPA2 の場合は最小 8 文字、オープンの場合は NULL を使用）。

 	- **出力**: True/False

- `WiFiMulti::run(uint32_t connectTimeout)` -- 保存されているアクセスポイントのいずれかに接続できるまで、順番に接続を試みる関数です。

 	- **入力パラメータ**
  		- **connectTimeout**: 接続を待機する最大時間（ミリ秒）を指定します。connectTimeout が 0 に設定されている場合、タイムアウトせず無期限に接続を試みます。

 	- **出力**: ステータス

## WiFi 使用例

次に、XIAO ESP32-C5 を使用して、いくつかの基本的な Wi-Fi 関数の使い方をデモンストレーションします。

### ネットワークのスキャン

XIAO ESP32-C5 は 2.4 GHz と 5 GHz のデュアルバンド Wi-Fi をサポートしており、スキャンモードでは周囲の 2.4 GHz および 5 GHz Wi-Fi ネットワークとその信号強度をスキャンできます。

#### プログラム

以下は、XIAO ESP32-C5 が周囲の Wi-Fi ネットワークをどのようにスキャンするかを示すサンプルプログラムです。

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

#### 動作確認

- プログラムを書き込んだ後、Arduino IDE の Serial Monitor を開くと、スキャンされた Wi-Fi 情報が出力されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_1.png" style={{width:800, height:'auto'}}/></div>

### Wi-Fi ネットワークへの接続

Wi-Fi の電波が届く範囲内であれば、XIAO ESP32-C5 がサポートする STA モードを介して、対象の Wi-Fi ネットワークの SSID と PASSWORD を把握していることを前提に、特定の Wi-Fi ネットワークに接続できます。

#### プログラム

次に、XIAO ESP32-C5 が指定した Wi-Fi ネットワークにどのように接続するかを示すサンプルプログラムを紹介します。

:::tip
XIAO ESP32-C5 はデュアルバンド Wi-Fi（2.4 GHz & 5 GHz）をサポートしており、自宅のネットワーク環境に応じて接続先を選択できます。
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

#### 動作確認

- プログラムを書き込んだ後、Arduino IDE の Serial Monitor を開くと、接続した Wi-Fi ネットワークの IP アドレスなどの情報が出力されます。
- 私の環境では 5 GHz ネットワークに接続しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_2.png" style={{width:800, height:'auto'}}/></div>

### AP モード

XIAO ESP32-C5 は、他のデバイスが接続できるホットスポットとして動作させることができます。つまり、ルーターに接続しなくても、Wi-Fi 対応デバイスを使って XIAO ESP32-C5 に接続できます。

簡単に言うと、XIAO ESP32-C5 をアクセスポイントとして構成すると、独立した Wi-Fi ネットワークが作成され、近くの Wi-Fi デバイス（ステーション）がそのネットワークに接続できるようになります（スマートフォンやコンピュータなど）。

#### プログラム

次に、XIAO ESP32-C5 がホットスポットを作成し、他のデバイスがそれに接続できるようにする方法を示すサンプルプログラムを紹介します。

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

#### 動作確認

- プログラムをコンパイルして書き込んだ後、WLAN 機能を通じて AP ホットスポットを検出できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_3.png" style={{width:800, height:'auto'}}/></div>

- 接続に成功すると、Serial Monitor に IP アドレスが表示され、同時にオンボードの USER LED が点灯します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_4.png" style={{width:800, height:'auto'}}/></div>

### WiFi &  MQTT の利用

MQTT プロトコルは IoT デバイスで広く利用されており、XIAO ESP32-C5 はこのプロトコルをサポートしています。つまり、XIAO ESP32-C5 を使って多くの興味深い IoT プロジェクトを開発できます。

#### プログラム

次に、XIAO ESP32-C5 で MQTT プロトコルを使用する方法を示すリファレンスプログラムを紹介します。

- `PubSubClient` ライブラリをインストールします

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

#### 効果の確認

- MQTTX ブローカークライアントをサポートする任意のソフトウェアをダウンロードします。ここでは MQTTX を使用します  [MQTTx](https://mqttx.app/downloads)

- MQTTX を開き、クライアント情報を追加します。ここではデフォルトのクライアントアドレスを使用するため、クライアント ID `ESP32C5Client` を追加し、テスト用クライアント名を設定するだけで構いません。その他の設定はデフォルトのままで問題ありません。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_5.png" style={{width:800, height:'auto'}}/></div><br/>

- コードを書き込み、MQTTX を使って接続します。接続に成功したら、左側の `New Subscription` をクリックしてサブスクリプションを追加します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_6.png" style={{width:800, height:'auto'}}/></div><br/>

- サブスクリプション情報を設定します。`esp32c5/test/topic` を入力し、QoS として 0 または 1 を選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_7.png" style={{width:800, height:'auto'}}/></div><br/>

- 設定が完了すると、クライアントとして動作する XIAO ESP32-C5 が 2 秒ごとにパブリッシュするメッセージを確認できます。また、トピックを選択した後にクライアント宛てにメッセージを送信することもでき、クライアントは受信後にそれらをパブリッシュします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_8.png" style={{width:800, height:'auto'}}/></div><br/>

:::tip
broker.emqx.io はすべてのユーザーで共有されるパブリックブローカーです。同じトピックを購読している人は誰でも、あなたのメッセージを閲覧できます。これはテスト目的のみに使用されるものであり、機密データの送信には適していません。
:::

### WiFi & HTTP /HTTPS

- XIAO ESP32C3 で ChatGPT にアクセスするために作成したサンプルを参照できます。そこでは、WiFiClient と HTTPClient の使用方法を詳しく説明しています：[XIAO ESP32C3 で WiFiClient と HTTPClient を使う方法 - XIAO ESP32C3 & ChatGPT 実践編](https://wiki.seeedstudio.com/ja/xiaoesp32c3-chatgpt/)

- HTTP の簡単な使い方だけを試したい場合は、以下の手順に従ってテストと検証を行うこともできます。

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

#### 効果の確認

:::tip
`https://jsonplaceholder.typicode.com` は、開発およびテスト用途向けに特別に設計された無料のモック REST API テストサービスです。実際のデータの恒久的な変更や永続化には対応していません。
:::

- コードを書き込んだら、`https://jsonplaceholder.typicode.com/todos/1` と Arduino IDE のシリアルモニタツールを開き、情報が一致しているか確認できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_9.png" style={{width:800, height:'auto'}}/></div>

### WiFi-Mesh

以下は、Espressif Systems による **ESP-WIFI-MESH** の公式紹介です：

ESP-WIFI-MESH は、Espressif SoC 上の AP-STA 同時動作機能を使用し、ノードがメッシュトポロジで構成される無線通信ネットワークです。自己形成および自己修復機能を備え、容易に展開できます。ESP-WIFI-MESH のネットワークトポロジは、大規模なエリアで最大 1000 ノードまでスケール可能であり、特別な Wi-Fi インフラストラクチャを必要としません。また、家庭内で Wi-Fi 信号が届かない死角をカバーする用途にも使用できます。

より詳細な情報については、Espressif Systems の公式リンクを参照してください：

- [ESP-Wi-Fi-MESH](https://www.espressif.com/en/products/sdks/esp-wifi-mesh/overview)
- [ESP-IDF Programming Guide](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/api-guides/esp-wifi-mesh.html)

次に、ESP-Mesh のサンプルを紹介します。このサンプルには、少なくとも 2 台の ESP32 デバイスを用意する必要があります。

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

#### 効果の確認

- 2 台の XIAO ESP32-C5 デバイスにコードを書き込み、任意のシリアルポートツールを開いて結果を確認します。

XIAO ESP32-C5 デバイス 1 がネットワークの形成を開始し、メッセージを送信します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_10.png" style={{width:800, height:'auto'}}/></div><br/>

XIAO ESP32-C5 デバイス 2 がネットワークに参加し、デバイス 1 から送信されたメッセージを受信します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_11.png" style={{width:800, height:'auto'}}/></div>

### 例：IoT スマートホームハブ

ここまでの Wi-Fi のサンプルから、XIAO ESP32-C5 での Wi-Fi の使い方はすでに習得できたはずです。次に、Wi-Fi AP モードと HTTP ネットワークサービスを使用してスマートホーム制御ハブを実装する方法、具体的には XIAO ESP32-C5 をスマートホーム制御ハブとして使用し、自宅の状態を監視する方法を紹介します。

- `ESPAsyncWebServer` ライブラリをインストールします

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_library_5.png" style={{width:600, height:'auto'}}/></div><br/>

- コードを書き込み、`XIAO ESP32-C5` ホットスポットに接続します。

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

- IP アドレスを入力してウェブページにアクセスします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_13.png" style={{width:800, height:'auto'}}/></div><br/>

:::tip
ウェブページに表示されるコントロールやセンサーはカスタマイズ可能です。新しい要素を追加したり、特定のニーズに応じて生成されたウェブページを変更したりできます。参考： [ESPAsyncWebServer](https://github.com/lacamera/ESPAsyncWebServer)
:::

:::tip
XIAO ESP32-C5 が生成する AP ホットスポットは、デフォルトではインターネットに接続できません。インターネット接続が必要な場合は、次の 2 つの方法のいずれかを採用できます。<br/>
方法 1：XIAO ESP32-C5 を Home Assistant に接続します。参考： [Connecting XIAO ESP32-C5 to Home Assistant](https://wiki.seeedstudio.com/ja/xiao_esp32c5_homeassistant/)<br/>
方法 2：MQTT サービスを使用してクラウドサーバーにデータをアップロードします。この方法では、一定量のサービスクレジットを購入する必要がある場合があります。参考： [Goole Cloud](https://cloud.google.com/)<br/>
:::

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただける複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
