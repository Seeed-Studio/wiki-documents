---
description: Seeed Studio XIAO ESP32S3でのWiFi使用方法。
title: 両バージョン用WiFi
keywords:
- esp32s3
- xiao
- wifi usage
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /ja/xiao_esp32s3_wifi_usage
last_update:
  date: 03/27/2023
  author: Citric
---

# Seeed Studio XIAO ESP32S3 (Sense)でのWiFi使用方法

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
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

Seeed Studio XIAO ESP32S3は、2.4GHz Wifi - 802.11b/g/nとBluetooth Low Energy (BLE)デュアルワイヤレス通信の両方をサポートしているため、優れたRF性能を誇る組み込み開発ボードです。この機能により、XIAO ESP32S3は幅広いInternet of Things (IoT)アプリケーションに対して信頼性が高く高速なワイヤレス接続を提供できます。さらに、このボードはU.FLアンテナ接続をサポートしており、通信範囲を100メートル以上に拡張できるため、長距離ワイヤレス接続が必要なプロジェクトに理想的な選択肢となります。このチュートリアルでは、XIAO ESP32S3のWi-Fi機能を活用してWi-Fiネットワークに接続し、基本的なネットワークタスクを実行する方法を探ります。

## はじめに

### アンテナの取り付け

XIAO ESP32S3の前面左下に、独立した「WiFi/BT Antenna Connector」があります。より良いWiFi/Bluetoothシグナルを得るために、パッケージ内のアンテナを取り出してコネクタに取り付ける必要があります。

アンテナの取り付けには少しコツがあります。直接強く押し込もうとすると、非常に押しにくく指が痛くなることがわかります！正しいアンテナの取り付け方法は、まずアンテナコネクタの片側をコネクタブロックに入れ、次に反対側を少し押し下げると、アンテナが取り付けられます。

アンテナの取り外しも同様で、アンテナを直接力任せに引っ張らず、片側に力を加えて持ち上げると、アンテナは簡単に取り外せます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/5.gif" style={{width:500, height:'auto'}}/></div>

:::note
アンテナが取り付けられていない場合、WiFiネットワークに接続できない可能性があります。

条件が許すなら、大きなスティックアンテナを使用することをお勧めします。より良い体験が得られるでしょう。
:::

## WiFiライブラリの一般的なインターフェース

ESP32-S3は幅広いWiFiネットワーク機能を提供します。一般的に、ESP32の内蔵パッケージでWiFiライブラリの機能を確認し、対応する機能を選択して望ましい機能を実現できます。次に、よく使用されるインターフェースをいくつかリストアップし、その使用方法を紹介します。

### 汎用WiFi機能

- `WiFiGenericClass::getHostname()` -- ESP32用WiFiライブラリの関数で、デバイスのホスト名を文字列として返します。ホスト名は、ネットワーク上でデバイスを識別する一意の名前です。この関数は、以前に`WiFiGenericClass::setHostname()`を使用して設定されたホスト名を取得します。ホスト名が設定されていない場合は、デフォルトのホスト名が返されます。

- `WiFiGenericClass::persistent(bool persistent)` -- ESP32 WiFiライブラリの永続モードを有効または無効にするために使用されるメソッドです。永続モードが有効な場合、Wi-Fi設定は不揮発性メモリ（NVM）に保存され、電源サイクルやリセット後も保持されます。永続モードが無効な場合、設定はRAMに保存され、電源サイクルやリセット後に失われます。

  - **入力パラメータ**
    - **persistent**: 引数がtrueの場合、永続モードが有効になります。引数がfalseの場合、永続モードが無効になります。

- `WiFiGenericClass::enableLongRange(bool enable)` -- この関数は、WiFiモジュールのLong Range (LR)機能を有効または無効にするために使用されます。有効にすると、LR機能により、モジュールは通常よりも遠くにあるWiFiネットワークに接続できますが、データレートは低くなります。

  - **入力パラメータ**
    - **enable**: このパラメータは、機能を有効にする場合はtrueに、無効にする場合はfalseに設定する必要があります。

- `WiFiGenericClass::mode(wifi_mode_t m)` -- この関数は、デバイスのWiFiモードを設定するために使用されます。

  - **入力パラメータ**
    - **m**: mパラメータは設定するモードを指定し、wifi_mode_t列挙型で定義された以下の定数のいずれかを使用できます：
      - **WIFI_MODE_NULL**: WiFiステーションモードとアクセスポイントモードの両方を無効にします。
      - **WIFI_MODE_STA**: 既存のWiFiネットワークに接続するためのWiFiステーションモードを有効にします。
      - **WIFI_MODE_AP**: 新しいWiFiネットワークを作成するためのアクセスポイントモードを有効にします。
      - **WIFI_MODE_APSTA**: WiFiステーションモードとアクセスポイントモードの両方を有効にします。

- `WiFiGenericClass::setSleep(wifi_ps_type_t sleepType)` -- この関数は、WiFiモジュールの省電力モードを設定します。

  - **入力パラメータ**
    - **sleepType**: sleepTypeパラメータは、使用する省電力モードのタイプを指定する列挙型です。3つの可能なスリープタイプがあります：
      - **WIFI_PS_NONE**: これはデフォルトのスリープモードで、WiFiモジュールは省電力モードに入りません。
      - **WIFI_PS_MIN_MODEM**: このモードでは、WiFiモジュールはアクセスポイント（AP）への接続を維持しながらモデムをシャットダウンします。
      - **WIFI_PS_MAX_MODEM**: このモードでは、WiFiモジュールはモデムとステーションの両方をシャットダウンし、APからの切断が発生します。

### STA機能

- `WiFiSTAClass::status()` -- 接続ステータスを返します。

  - **出力**: wl_status_tで定義された値のいずれか。
    - **WL_NO_SHIELD**: このステータスコードは、Wi-Fiモジュールが存在しないことを示します。
  - **WL_IDLE_STATUS**: このステータスコードは、Wi-Fiモジュールが何も操作を実行していないことを示します。
  - **WL_NO_SSID_AVAIL**: このステータスコードは、スキャン中にWi-Fiネットワークが見つからなかったことを示します。
  - **WL_SCAN_COMPLETED**: このステータスコードは、Wi-Fiスキャンが正常に完了したことを示します。
  - **WL_CONNECTED**: このステータスコードは、ESP32がWi-Fiネットワークに正常に接続されていることを示します。
  - **WL_CONNECT_FAILED**: このステータスコードは、Wi-Fiネットワークへの接続が失敗したことを示します。
  - **WL_CONNECTION_LOST**: このステータスコードは、Wi-Fiネットワークへの接続が失われたことを示します。
  - **WL_DISCONNECTED**: このステータスコードは、ESP32が以前にWi-Fiネットワークに接続されていたが、現在はどのネットワークにも接続されていないことを示します。

- `WiFiSTAClass::begin(const char* wpa2_ssid, wpa2_auth_method_t method, const char* wpa2_identity, const char* wpa2_username, const char *wpa2_password, const char* ca_pem, const char* client_crt, const char* client_key, int32_t channel, const uint8_t* bssid, bool connect)` -- WPA2 Enterprise APとのWiFi接続を開始します。

  - **入力パラメータ**（オプション）
    - **ssid**: SSID文字列へのポインタ。
    - **method**: WPA2の認証方式（WPA2_AUTH_TLS、WPA2_AUTH_PEAP、WPA2_AUTH_TTLS）
    - **wpa2_identity**: エンティティへのポインタ
    - **wpa2_username**: ユーザー名へのポインタ
    - **wpa2_password**: パスワードへのポインタ。
    - **ca_pem**: CA証明書を含む.pemファイルの内容を持つ文字列へのポインタ
    - **client_crt**: クライアント証明書を含む.crtファイルの内容を持つ文字列へのポインタ
    - **client_key**: クライアントキーを含む.keyファイルの内容を持つ文字列へのポインタ
    - **channel**: オプション。APのチャンネル
    - **bssid**: オプション。APのBSSID / MAC
    - **connect**: オプション。接続を呼び出す

- `WiFiSTAClass::reconnect()` -- 強制的に切断してからAPへの再接続を開始します。

  - **出力**: True/False。

- `WiFiSTAClass::disconnect(bool wifioff, bool eraseap)` -- ネットワークから切断します。

  - **入力パラメータ**
    - **wifioff**: wifioff `true`でWi-Fiラジオをオフにします。
    - **eraseap**: eraseap `true`でNVSメモリからAP設定を消去します。

  - **出力**: True/False。

- `WiFiSTAClass::config(IPAddress local_ip, IPAddress gateway, IPAddress subnet, IPAddress dns1, IPAddress dns2)` -- DHCPクライアントを無効にしてIP設定を変更します。

  - **入力パラメータ**
    - **local_ip**: 静的IP設定。
    - **gateway**: 静的ゲートウェイ設定。
    - **subnet**: 静的サブネットマスク。
    - **dns1**: 静的DNSサーバー1。
    - **dns2**: 静的DNSサーバー2。

- `WiFiSTAClass::setAutoConnect(bool autoConnect)` -- 非推奨。ESP32ステーションが電源投入時に（記録された）APに自動的に接続するかどうかを設定します。デフォルトで自動接続を有効にします。

  - **入力パラメータ**
    - **autoConnect**: autoConnect bool。

  - **出力**: False。

- `WiFiSTAClass::waitForConnectResult(unsigned long timeoutLength)` -- WiFi接続が結果に到達するまで待機します。

  - **入力パラメータ**
    - **timeoutLength**: このパラメータは、接続が確立されるまで待機する最大時間をミリ秒で指定します。

  - **出力**: wl_status_tで定義された値の一つ。

- `WiFiSTAClass::localIP()` -- ステーションインターフェースのIPアドレスを取得します。

  - **出力**: IPAddressステーションIP。

- `WiFiSTAClass::macAddress(uint8_t* mac)` -- ステーションインターフェースのMACアドレスを取得します。

  - **入力パラメータ**
    - **mac**（オプション）: 長さWL_MAC_ADDR_LENGTHのuint8_t配列へのポインタ。

  - **出力**: uint8_t *へのポインタ。

- `WiFiSTAClass::SSID()` -- ネットワークに関連付けられた現在のSSIDを返します。

  - **出力**: SSID。

- `WiFiSTAClass::RSSI(void)` -- 現在のネットワークRSSIを返します。

  - **出力**: RSSI。

### AP関数

- `WiFiAPClass::softAP(const char* ssid, const char* passphrase, int channel, int ssid_hidden, int max_connection, bool ftm_responder)` -- これはESP32-S3のWiFiライブラリの関数です。SoftAP（ソフトウェアアクセスポイント）を設定するために使用され、他のデバイスがESP32-S3に接続してそのリソースにアクセスできるようにします。

  - **入力パラメータ**
    - **ssid**:              SSIDへのポインタ（最大63文字）。
  - **passphrase**:        （WPA2の場合最小8文字、オープンの場合はNULLを使用）。
  - **channel**:           WiFiチャンネル番号、1 - 13。
  - **ssid_hidden**:       ネットワーククローキング（0 = SSID放送、1 = SSID隠蔽）。
  - **max_connection**:    最大同時接続クライアント数、1 - 4。

  - **出力**: True/False。

- `WiFiAPClass::softAPgetStationNum()` -- softAPインターフェースに接続されているステーション/クライアントの数を取得します。

  - **出力**: ステーション数。

- `WiFiAPClass::softAPConfig(IPAddress local_ip, IPAddress gateway, IPAddress subnet, IPAddress dhcp_lease_start)` -- SoftAPを設定するための関数。

  - **入力パラメータ**
    - **local_ip**:      アクセスポイントIP。
    - **gateway**:       ゲートウェイIP。
    - **subnet**:        サブネットマスク。

  - **出力**: True/False。

- `WiFiAPClass::softAPIP()` -- softAPインターフェースのIPアドレスを取得します。

  - **出力**: IPAddress softAP IP。

- `WiFiAPClass::softAPmacAddress(uint8_t* mac)` -- softAPインターフェースのMACアドレスを取得します。

  - **入力パラメータ**
    - **mac**（オプション）:   長さWL_MAC_ADDR_LENGTHのuint8_t配列へのポインタ。

  - **出力**: uint8_t*へのポインタまたは文字列mac。

### WiFiスキャン関数

- `WiFiScanClass::scanNetworks(bool async, bool show_hidden, bool passive, uint32_t max_ms_per_chan, uint8_t channel, const char * ssid, const uint8_t * bssid)` -- 利用可能なWiFiネットワークのスキャンを開始します。

  - **入力パラメータ**
    - **async**: このパラメータは、スキャンを非同期で実行するかどうかを決定するブール値です。trueに設定すると、関数は即座に戻り、スキャン結果は後でgetScanResults()関数を呼び出すことで取得できます。falseに設定すると、関数はスキャンが完了するまでブロックします。
    - **show_hidden**: このパラメータは、関数がスキャン結果に隠されたネットワークを含めるかどうかを決定するブール値です。
    - **passive**: このパラメータは、関数がパッシブスキャンを実行するかどうかを決定するブール値です。trueに設定すると、関数はスキャン中にパケットを送信しません。これは時間がかかる場合がありますが、特定の状況では有用です。
    - **max_ms_per_chan**: このパラメータは、各チャンネルのスキャンに費やす最大時間をミリ秒で指定します。
    - **channel**: このパラメータは、スキャンするWi-Fiチャンネルです。0に設定すると、関数は利用可能なすべてのチャンネルをスキャンします。
    - **ssid**: このパラメータは、スキャンするネットワークのSSIDを含むnull終端文字列へのポインタです。nullptrに設定すると、関数は利用可能なすべてのネットワークをスキャンします。
    - **bssid**: このパラメータは、スキャンするアクセスポイントのMACアドレスを含む6バイト配列へのポインタです。nullptrに設定すると、関数はすべてのアクセスポイントをスキャンします。

- **出力**: この関数の戻り値は、スキャンされたネットワーク数を示す整数です。

- `WiFiScanClass::getNetworkInfo(uint8_t i, String &ssid, uint8_t &encType, int32_t &rssi, uint8_t* &bssid, int32_t &channel)` -- スキャンされたWiFiからすべての情報をポインタパラメータに読み込みます。

  - **入力パラメータ**
    - **i**: この関数は、指定されたインデックスiでスキャンされたネットワークに関する情報を取得するために使用されます。
    - **ssid**: ssidパラメータは、関数がネットワークのSSIDを格納するString変数への参照です。
    - **encType**: encTypeパラメータは、関数がネットワークの暗号化タイプを格納するuint8_t変数への参照です（0 = オープン、1 = WEP、2 = WPA_PSK、3 = WPA2_PSK、4 = WPA_WPA2_PSK）。
    - **rssi**: rssiパラメータは、関数がネットワークの受信信号強度表示（RSSI）を格納するint32_t変数への参照です。
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

### WiFi Client関数

- `WiFiClient::connect(IPAddress ip, uint16_t port, int32_t timeout)` -- この関数は、WiFiClientライブラリで指定されたタイムアウト値でリモートIPアドレスとポートに接続するために使用されます。

  - **入力パラメータ**
    - **ip**: 接続するサーバーのIPアドレス。
    - **port**: 接続するサーバーのポート番号。
    - **timeout**（オプション）: 接続が確立されるまでの最大待機時間（ミリ秒）。この時間内に接続が確立されない場合、関数はエラーを返します。timeoutが0に設定されている場合、関数は接続が確立されるまで無期限に待機します。

- `WiFiClient::stop()` -- この関数は、クライアントをサーバーから切断し、クライアントが使用しているソケット/ポートを解放するために使用されます。関数が呼び出されると、クライアントはもはやデータを送受信できません。

- `WiFiClient::setTimeout(uint32_t seconds)` -- この関数は、クライアントが接続の確立またはデータの受信を待機する最大秒数を設定します。接続またはデータ転送が指定されたタイムアウトより長くかかる場合、接続は閉じられます。

  - **入力パラメータ**
    - **seconds**: タイムアウトの秒数。

- `WiFiClient::write(uint8_t data)` -- WiFiClientインスタンスを通じて接続されたサーバーに単一バイトのデータを書き込みます。または`WiFiClient::write(const uint8_t *buf, size_t size)`。

  - **入力パラメータ**
    - **data**: 確立されたネットワーク接続を介して送信する必要がある単一バイトのデータ。

- `WiFiClient::read()` -- この関数は、接続されたサーバーから受信データの単一バイトを読み取ります。読み取られたバイトを整数値として返します。データが利用できない場合は-1を返します。または`read(uint8_t *buf, size_t size)`。

  - **出力**: 受信されたバイト数を示す整数値。戻り値が0の場合、サーバーが接続を閉じたことを意味します。

- `WiFiClient::peek()` -- この関数は、実際に読み取ることなく、サーバーから読み取り可能なデータがあるかどうかを確認するために使用されます。

  - **出力**: 受信バッファから削除することなく、次の受信データのバイトを返します。データが利用できない場合は-1を返します。

- `WiFiClient::available()` -- この関数は、サーバーから読み取り可能なデータのバイト数を確認するために使用されます。

  - **出力**: 読み取り可能なバイト数を表す整数値を返します。

### WiFi Server関数

- `WiFiServer::stopAll()` -- この関数は、Arduino WiFiライブラリのWiFiServerクラスのメソッドです。このメソッドは、WiFiServerクラスを使用して作成されたすべてのサーバーインスタンスを停止します。各インスタンスに対して個別に`stop()`メソッドを呼び出す代わりに、すべてのサーバーを一度に停止したい場合に便利です。

- `WiFiServer::begin(uint16_t port, int enable)` -- この関数は、指定されたポートでサーバーを開始するために使用されます。サーバーは受信クライアント接続をリッスンします。

  - **入力パラメータ**
    - **port**: リッスンするポート番号。
    - **enable**（オプション）: サーバーが開始された直後に有効にするかどうかを示すフラグ。このフラグはデフォルトでtrueに設定されています。

- `WiFiServer::hasClient()` -- この関数は、サーバーで利用可能な受信クライアント接続があるかどうかを確認するために使用されます。この関数は、新しい接続を継続的にチェックするためにループで使用できます。

  - **出力**: クライアントが接続している場合はWiFiClientオブジェクトを返し、接続を待機しているクライアントがない場合はNULLポインタを返します。

- `WiFiServer::end()` -- この関数は、サーバーを停止し、関連するリソースを解放するために使用されます。呼び出されると、サーバーは新しいクライアント接続を受け入れることができなくなります。既存のクライアント接続は、クライアントまたはサーバーのいずれかによって閉じられるまで開いたままになります。`WiFiServer::close()`と`WiFiServer::stop()`は同じ機能を持ちます。

### WiFi Multiple関数

- `WiFiMulti::addAP(const char* ssid, const char *passphrase)` -- これは、WiFiMultiオブジェクトが接続を試行する利用可能なAPのリストに新しいアクセスポイント（AP）を追加するために使用されます。

  - **入力パラメータ**
    - **ssid**: SSIDへのポインタ（最大63文字）。
    - **passphrase**: （WPA2の場合は最小8文字、オープンの場合はNULLを使用）。

  - **出力**: True/False

- `WiFiMulti::run(uint32_t connectTimeout)` -- この関数は、保存されたアクセスポイントに順次接続を試み、いずれかに正常に接続するまで続行します。

  - **入力パラメータ**
    - **connectTimeout**: このパラメータは、接続を待機する最大時間をミリ秒で指定します。connectTimeoutが0に設定されている場合、関数はタイムアウトせず、無期限に接続を試行します。

  - **出力**: ステータス

## 近くのWiFiネットワークをスキャンする

以下は、XIAO ESP32S3を使用して近くのWiFiネットワークをスキャンするサンプルプログラムです。

Arduino IDEで、**File > Examples > WiFi > WiFiScan**に移動してください。これにより、XIAO ESP32S3の範囲内にあるWiFiネットワークをスキャンするスケッチが読み込まれます。

これは、接続しようとしているWiFiネットワークがボードの範囲内にあるかどうかを確認したり、その他のアプリケーションに役立ちます。WiFiプロジェクトがうまく動作しないことがよくありますが、それはWiFi信号強度が不十分でルーターに接続できないことが原因かもしれません。

```c
#include "WiFi.h"

void setup() {
  Serial.begin(115200);

  // Set WiFi to station mode and disconnect from an AP if it was previously connected
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(100);

  Serial.println("Setup done");
}

void loop() {
  Serial.println("scan start");

  // WiFi.scanNetworks will return the number of networks found
  int n = WiFi.scanNetworks();
  Serial.println("scan done");
  if (n == 0) {
      Serial.println("no networks found");
  } else {
    Serial.print(n);
    Serial.println(" networks found");
    for (int i = 0; i < n; ++i) {
      // Print SSID and RSSI for each network found
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

  // Wait a bit before scanning again
  delay(5000);
}
```

プログラムをアップロードして実行すると、シリアルモニターにXIAO ESP32S3で検索できる近くのWiFiネットワークが表示されるはずです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/37.png" style={{width:600, height:'auto'}}/></div>

### プログラムの注釈

XIAO ESP32S3のWiFi機能を使用するために最初に行う必要があることは、以下のようにコードに**WiFi.h**ライブラリをインクルードすることです：

```c
#include <WiFi.h>
```

XIAO ESP32S3 は WiFi ステーション、アクセスポイント、またはその両方として動作できます。WiFi モードを設定するには、`WiFi.mode()` を使用し、引数として希望するモードを設定してください。

```c
WiFi.mode(WIFI_STA);
```

ESP32がWi-Fiステーションとして設定されている場合、他のネットワーク（ルーターなど）に接続できます。

`WiFi.scanNetworks()`は見つかったネットワークの数を返します。スキャン後、各ネットワークのパラメータにアクセスできます。`WiFi.SSID()`は特定のネットワークのSSIDを出力します。

`WiFi.RSSI()`はそのネットワークのRSSIを返します。RSSIはReceived Signal Strength Indicatorの略です。これは、RFクライアントデバイスがアクセスポイントやルーターから受信している電力レベルの推定測定値です。

最後に、`WiFi.encryptionType()`はネットワークの暗号化タイプを返します。その特定の例では、オープンネットワークの場合に*を付けます。ただし、この関数は以下のオプションのいずれかを返すことができます（オープンネットワークだけではありません）：

- WIFI_AUTH_OPEN
- WIFI_AUTH_WEP
- WIFI_AUTH_WPA_PSK
- WIFI_AUTH_WPA2_PSK
- WIFI_AUTH_WPA_WPA2_PSK
- WIFI_AUTH_WPA2_ENTERPRISE

## WiFiネットワークに接続する

ESP32を特定のWi-Fiネットワークに接続するには、そのSSIDとパスワードを知っている必要があります。さらに、そのネットワークはESP32のWiFi範囲内にある必要があります（これを確認するには、前の例を使用してWiFiネットワークをスキャンできます）。

以下は、XIAO ESP32S3を使用して指定されたネットワークに接続する例です。ここで、関数`initWiFi()`はプログラム内でネットワークに接続する役割を果たします。

```c
#include "WiFi.h"

// Replace with your network credentials
const char* ssid = "REPLACE_WITH_YOUR_SSID";
const char* password = "REPLACE_WITH_YOUR_PASSWORD";

void initWiFi() {
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  Serial.print("Connecting to WiFi ..");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print('.');
    delay(1000);
  }
  Serial.println();
  Serial.println(WiFi.localIP());
}

void setup() {
  Serial.begin(115200);

  // Set WiFi to station mode and disconnect from an AP if it was previously connected
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(100);

  initWiFi();
}

void loop() {
  
}
```

プログラムをアップロードして実行し、シリアルモニターを開きます。ネットワークに接続する際、シリアルモニターは接続が成功するまで一連のドットを印刷し、その後XIAOのIPアドレスが印刷されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/38.png" style={{width:600, height:'auto'}}/></div>

### プログラムの注釈

この機能がどのように動作するかを簡単に見てみましょう。

まず、WiFiモードを設定します。XIAO ESP32S3が別のネットワーク（アクセスポイント/ホットスポット）に接続される場合、ステーションモードである必要があります。

```c
WiFi.mode(WIFI_STA);
```

次に、`WiFi.begin()`を使用してネットワークに接続します。引数としてネットワークのSSIDとそのパスワードを渡す必要があります：

```c
WiFi.begin(ssid, password);
```

WiFiネットワークへの接続には時間がかかることがあるため、通常は`WiFi.status()`を使用して接続が既に確立されているかどうかを継続的にチェックするwhileループを追加します。接続が正常に確立されると、`WL_CONNECTED`が返されます。

WiFi接続強度を取得したい場合は、WiFi接続後に単純に`WiFi.RSSI()`を呼び出すことができます。

## softAP使用方法

XIAO ESP32S3をアクセスポイント（ホットスポット）として設定すると、ルーターに接続する必要なく、WiFi機能を持つ任意のデバイスを使用してESP32に接続できます。

簡単に言うと、XIAO ESP32S3をアクセスポイントとして設定すると、独自のWiFiネットワークが作成され、近くのWiFiデバイス（ステーション）がそれに接続できます（スマートフォンやコンピューターなど）。

Arduino IDEで、**File > Examples > WiFi > WiFiAccessPoint**に移動してください。この例では、XIAO ESP32S3を使用してホットスポットを作成し、ホットスポットに接続されたシンプルなWebページを通じてライトのオン/オフスイッチを制御する方法を示します。

:::note

1. XIAO ESP32S3には独自のユーザーインジケーターがあり、外部LEDは必要ないため、LED_BUILTINをコメントアウトしてサンプルプログラムに軽微な変更を加えました。
2. LEDは、XIAO ESP32S3のユーザーLEDピンがハイレベルに設定されたときのみオフになり、ピンがローレベルに設定されたときのみオンになります。
3. また、プログラム内のホットスポット名とパスワードを希望するものに変更する必要があります。

:::

```c
/*
  WiFiAccessPoint.ino creates a WiFi access point and provides a web server on it.

  Steps:
  1. Connect to the access point "yourAp"
  2. Point your web browser to http://192.168.4.1/H to turn the LED on or http://192.168.4.1/L to turn it off
     OR
     Run raw TCP "GET /H" and "GET /L" on PuTTY terminal with 192.168.4.1 as IP address and 80 as port

  Created for arduino-esp32 on 04 July, 2018
  by Elochukwu Ifediora (fedy0)
*/

#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>

//#define LED_BUILTIN 2   // Set the GPIO pin where you connected your test LED or comment this line out if your dev board has a built-in LED

// Set these to your desired credentials.
const char *ssid = "XIAO_ESP32S3";
const char *password = "password";

WiFiServer server(80);


void setup() {
  pinMode(LED_BUILTIN, OUTPUT);

  Serial.begin(115200);
  Serial.println();
  Serial.println("Configuring access point...");

  // You can remove the password parameter if you want the AP to be open.
  WiFi.softAP(ssid, password);
  IPAddress myIP = WiFi.softAPIP();
  Serial.print("AP IP address: ");
  Serial.println(myIP);
  server.begin();

  Serial.println("Server started");
}

void loop() {
  WiFiClient client = server.available();   // listen for incoming clients

  if (client) {                             // if you get a client,
    Serial.println("New Client.");           // print a message out the serial port
    String currentLine = "";                // make a String to hold incoming data from the client
    while (client.connected()) {            // loop while the client's connected
      if (client.available()) {             // if there's bytes to read from the client,
        char c = client.read();             // read a byte, then
        Serial.write(c);                    // print it out the serial monitor
        if (c == '\n') {                    // if the byte is a newline character

          // if the current line is blank, you got two newline characters in a row.
          // that's the end of the client HTTP request, so send a response:
          if (currentLine.length() == 0) {
            // HTTP headers always start with a response code (e.g. HTTP/1.1 200 OK)
            // and a content-type so the client knows what's coming, then a blank line:
            client.println("HTTP/1.1 200 OK");
            client.println("Content-type:text/html");
            client.println();

            // the content of the HTTP response follows the header:
            client.print("Click <a href=\"/H\">here</a> to turn ON the LED.<br>");
            client.print("Click <a href=\"/L\">here</a> to turn OFF the LED.<br>");

            // The HTTP response ends with another blank line:
            client.println();
            // break out of the while loop:
            break;
          } else {    // if you got a newline, then clear currentLine:
            currentLine = "";
          }
        } else if (c != '\r') {  // if you got anything else but a carriage return character,
          currentLine += c;      // add it to the end of the currentLine
        }

        // Check to see if the client request was "GET /H" or "GET /L":
        if (currentLine.endsWith("GET /H")) {
          digitalWrite(LED_BUILTIN, LOW);                 // GET /H turns the LED on
        }
        if (currentLine.endsWith("GET /L")) {
          digitalWrite(LED_BUILTIN, HIGH);                // GET /L turns the LED off
        }
      }
    }
    // close the connection:
    client.stop();
    Serial.println("Client Disconnected.");
  }
}
```

プログラムをアップロードして実行すると、XIAO ESP32S3は「XIAO_ESP32S3」という名前のホットスポットを作成します。コンピューターまたは携帯電話でこのネットワークに接続できます。パスワードは「password」です。その後、ブラウザで「192.168.4.1」を開くと、LEDスイッチを制御するWebページにアクセスできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/39.png" style={{width:800, height:'auto'}}/></div>

### プログラムの注釈

`setup()`関数には、`softAP()`メソッドを使用してESP32をアクセスポイントとして設定するセクションがあります：

```c
WiFi.softAP(ssid, password);
```

次に、softAPIP()メソッドを使用してアクセスポイントのIPアドレスを取得し、シリアルモニターに出力する必要があります。

```c
IPAddress myIP = WiFi.softAPIP();
Serial.print("AP IP address: ");
Serial.println(myIP);
server.begin();
```

これらは、XIAO ESP32S3 をアクセスポイントとして設定するためにWebサーバースケッチに含める必要があるコードスニペットです。

## WiFi & MQTT の使用方法

XIAO ESP32S3 は MQTT プロトコルをサポートする強力なマザーボードであり、デバイス間で信頼性が高く効率的な通信を必要とするIoTプロジェクトに最適な選択肢です。

```c
#include <WiFi.h>
#include <PubSubClient.h>

// Replace with your network credentials
const char* ssid = "your_SSID";
const char* password = "your_PASSWORD";

// MQTT broker IP address
const char* mqtt_server = "test.mosquitto.org";

// Initialize the WiFi and MQTT client objects
WiFiClient espClient;
PubSubClient client(espClient);

void setup() {
  Serial.begin(115200);

  // Connect to WiFi network
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }

  Serial.println("Connected to WiFi");

  // Set the MQTT broker server IP address and port
  client.setServer(mqtt_server, 1883);

  // Connect to MQTT broker
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

  // Subscribe to MQTT topic
  client.subscribe("test/topic");
}

void loop() {
  // Check if the MQTT client is connected
  if (!client.connected()) {
    // Reconnect to MQTT broker
    if (client.connect("ESP32Client")) {
      Serial.println("Connected to MQTT broker");
      // Subscribe to MQTT topic after reconnection
      client.subscribe("test/topic");
    }
  }

  // Handle MQTT messages
  client.loop();

  // Publish a message to the MQTT broker
  client.publish("test/topic", "Hello from XIAO ESP32S3");
  delay(5000);
}
```

この例のプログラムでは、XIAO ESP32S3がWiFi経由でネットワークに接続し、指定されたMQTTブローカーに接続して、トピック**test/topic**を購読し、5秒ごとにそのトピックにメッセージを発行します。

XIAO ESP32S3がMQTTブローカーからメッセージを受信すると、`client.onMessage`コールバック関数で処理できます。例のプログラムの変数`ssid`、`password`、`mqtt_server`などを、あなた自身のネットワークとMQTTサーバー情報に置き換える必要があります。

:::tip
サンプルプログラムで提供されているMQTTサーバーアドレスは`test.mosquitto.org`で、テスト目的のみです。このアドレスに個人情報を送信しないでください。誰でもこのリンクを使用してあなたの情報を取得できるためです。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/41.png" style={{width:800, height:'auto'}}/></div>

## WiFi & HTTP/HTTPS使用方法

この部分は、XIAO ESP32C3でChatGPTにアクセスするために書いた例を参照できます。これはWiFiClientとHTTPClientの使用方法について詳細な紹介を提供しています。

- [XIAO ESP32C3でWiFiClientとHTTPClientの使用方法を学ぶ - XIAO ESP32C3 & ChatGPTの実践](https://wiki.seeedstudio.com/ja/xiaoesp32c3-chatgpt)

## WiFi Mesh

[Espressifのドキュメント](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/mesh.html)によると：

「ESP-MESHは、Wi-Fiプロトコルの上に構築されたネットワーキングプロトコルです。ESP-MESHは、広い物理的エリア（屋内と屋外の両方）に分散した多数のデバイス（ノードと呼ばれる）を単一のWLAN（無線ローカルエリアネットワーク）の下で相互接続することを可能にします。ESP-MESHは自己組織化と自己修復機能を持ち、ネットワークを自律的に構築・維持できることを意味します。」

従来のWi-Fiネットワークアーキテクチャでは、単一のノード（アクセスポイント - 通常はルーター）が他のすべてのノード（ステーション）に接続されます。各ノードはアクセスポイントを使用して互いに通信できます。しかし、これはアクセスポイントのWi-Fiカバレッジに制限されます。すべてのステーションは、アクセスポイントに直接接続するために範囲内にある必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/42.png" style={{width:800, height:'auto'}}/></div>

ESP-MESHでは、ノードは中央ノードに接続する必要がありません。ノードは互いの送信を中継する責任があります。これにより、複数のデバイスが広い物理的エリアに分散できます。ノードは自己組織化し、パケットが最終的なノードの宛先に到達することを確実にするために動的に互いに通信できます。ネットワークからノードが削除された場合、パケットが宛先に到達することを確実にするために自己組織化できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/43.png" style={{width:800, height:'auto'}}/></div>

[painlessMeshライブラリ](https://gitlab.com/painlessMesh/painlessMesh)を使用すると、ESP32ボードで簡単にメッシュネットワークを作成できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/44.png" style={{width:800, height:'auto'}}/></div>

このライブラリを使用するために依存パッケージをダウンロードするよう促すウィンドウがポップアップした場合、それらも一緒にダウンロードする必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/45.png" style={{width:500, height:'auto'}}/></div>

このウィンドウが表示されない場合は、以下のライブラリ依存関係をインストールする必要があります：

- [ArduinoJson](https://github.com/bblanchon/ArduinoJson) (bblanchon作)
- [TaskScheduler](https://github.com/arkhipenko/TaskScheduler)
- [AsyncTCP](https://github.com/me-no-dev/AsyncTCP) (ESP32)

ESP-MESHを始めるために、まずライブラリの基本的な例を試してみます。この例では、すべてのボードが他のすべてのボードにメッセージをブロードキャストするメッシュネットワークを作成します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/46.png" style={{width:700, height:'auto'}}/></div>

コードをアップロードする前に、`MESH_PREFIX`（MESHネットワークの名前のようなもの）と`MESH_PASSWORD`変数を設定できます（好きなように設定できます）。

次に、メッセージを送信したノードを簡単に識別するために、各ボードで以下の行を変更することをお勧めします。例えば、ノード1の場合、メッセージを以下のように変更します：

```c
String msg = "Hi from node 1 ";
```

次に、2つのXIAO ESP32S3を例として使用します。ネットワーク構築後の概念図は大まかに以下の通りです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/47.png" style={{width:700, height:'auto'}}/></div>

2つのXIAOにそれぞれプログラムをアップロードし、シリアルポートモニターを開いてボーレートを115200に設定します。（2つのXIAOがある場合、追加のシリアルポートソフトウェアが必要になる場合があります）プログラムが正常に動作すれば、以下の結果が表示されます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/48.png" style={{width:800, height:'auto'}}/></div>

### プログラムの注釈

まず、painlessMeshライブラリをインクルードします。次に、メッシュの詳細を追加します。`MESH_PREFIX`はメッシュの名前を指します。`MESH_PASSWORD`は、その名前が示すようにメッシュのパスワードです。メッシュ内のすべてのノードは同じ`MESH_PREFIX`と`MESH_PASSWORD`を使用する必要があります。`MESH_PORT`は、メッシュサーバーを実行したいTCPポートを指します。デフォルトは**5555**です。

メッシュネットワークコードでは`delay()`の使用を避けることを推奨します。メッシュを維持するために、いくつかのタスクをバックグラウンドで実行する必要があります。`delay()`を使用すると、これらのタスクの実行が停止し、メッシュが不安定になったり、分解したりする可能性があります。代わりに、painlessMesh自体で使用されている`TaskScheduler`を使用してタスクを実行することを推奨します。以下の行は`userScheduler`という新しい`Scheduler`を作成します。

```c
Scheduler userScheduler; // to control your personal task
```

メッシュネットワークを処理するために`painlessMesh`オブジェクト`mesh`を作成します。

```c
painlessMesh  mesh;
```

`taskSendMessage`というタスクを作成し、プログラムが実行されている間、毎秒`sendMessage()`関数を呼び出す責任を持たせます。

```c
Task taskSendMessage(TASK_SECOND * 1 , TASK_FOREVER, &sendMessage);
```

`sendMessage()` 関数は、メッセージネットワーク内のすべてのノードにメッセージを送信します（ブロードキャスト）。

```c
void sendMessage() {
  String msg = "Hello from node 1";
  msg += mesh.getNodeId();
  mesh.sendBroadcast( msg );
  taskSendMessage.setInterval(random(TASK_SECOND * 1, TASK_SECOND * 5));
}
```

メッセージには「Hello from node 1」のテキストに続いてボードチップIDが含まれています。

メッセージをブロードキャストするには、meshオブジェクトの`sendBroadcast()`メソッドを使用し、送信したいメッセージ(msg)を引数として渡すだけです。

```c
mesh.sendBroadcast(msg);
```

新しいメッセージが送信されるたびに、コードはメッセージ間の間隔を変更します（1秒から5秒）。

```c
taskSendMessage.setInterval(random(TASK_SECOND * 1, TASK_SECOND * 5));
```

次に、メッシュで特定のイベントが発生したときに呼び出されるいくつかのコールバック関数が作成されます。`receivedCallback()` 関数は、メッセージの送信者（from）とメッセージの内容（`msg.c_str()`）を出力します。

```c
void receivedCallback( uint32_t from, String &msg ) {
  Serial.printf("startHere: Received from %u msg=%s\n", from, msg.c_str());
}
```

`newConnectionCallback()` 関数は、新しいノードがネットワークに参加するたびに実行されます。この関数は単純に新しいノードのチップIDを出力します。この関数を変更して他のタスクを実行することもできます。

```c
void newConnectionCallback(uint32_t nodeId) {
  Serial.printf("--> startHere: New Connection, nodeId = %u\n", nodeId);
}
```

`changedConnectionCallback()` 関数は、ネットワーク上で接続が変更されるたびに実行されます（ノードがネットワークに参加または離脱するとき）。

```c
void changedConnectionCallback() {
  Serial.printf("Changed connections\n");
}
```

`nodeTimeAdjustedCallback()` 関数は、ネットワークが時刻を調整する際に実行され、すべてのノードが同期されるようにします。この関数はオフセットを出力します。

```c
void nodeTimeAdjustedCallback(int32_t offset) {
  Serial.printf("Adjusted time %u. Offset = %d\n", mesh.getNodeTime(),offset);
}
```

`setup()`で、シリアルモニターを初期化します。希望するデバッグメッセージタイプを選択してください：

```c
//mesh.setDebugMsgTypes( ERROR | MESH_STATUS | CONNECTION | SYNC | COMMUNICATION | GENERAL | MSG_TYPES | REMOTE ); // all types on

mesh.setDebugMsgTypes( ERROR | STARTUP );  // set before init() so that you can see startup messages
```

先ほど定義した詳細でメッシュを初期化します。

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

最後に、taskSendMessage関数をuserSchedulerに追加します。スケジューラーは、適切なタイミングでタスクを処理し実行する責任があります。

```c
userScheduler.addTask(taskSendMessage);
```

最後に、taskSendMessageを有効にして、プログラムがメッシュにメッセージの送信を開始するようにします。

```c
taskSendMessage.enable();
```

メッシュを動作させ続けるために、`loop()` に `mesh.update()` を追加します。

```c
void loop() {
  // it will run the user scheduler as well
  mesh.update();
}
```

## トラブルシューティング

### Q1: softAPの例を使用している際に、XIAO ESP32S3のホットスポットに接続できないのはなぜですか？

これは、XIAO ESP32S3のアンテナ強度が不十分であるか、XIAO ESP32S3の過熱が原因である可能性があります。テストの結果、この例を使用する際にXIAO ESP32S3のチップは最大50度まで達することがあります。これにより、長時間実行するとネットワーク異常が発生する可能性があります。この場合、冷却してから再試行してください。

過熱の原因が除外される場合、アンテナ信号が問題の原因である可能性があります。付属のアンテナの強度は一般的に高強度のネットワーク作業をサポートできないため、必要に応じて適切なスティックアンテナを購入して使用することができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/40.jpg" style={{width:600, height:'auto'}}/></div>

### Q2: XIAO ESP32-S3 PlusがXIAO ESP32-S3よりもネットワーク信号が弱いのはなぜですか？解決策はありますか？

:::tip 製品バッチ
**2025年8月**より前に製品を購入された場合、ネットワーク信号が弱い問題が発生する可能性があります。それ以降に購入された製品では、この問題は解決されており、ソフトウェア修正は必要ありません。
:::

WiFiを使用するすべてのコードの内部に電力調整用のコードセグメントを追加することが可能で、送信電力を調整することで信号強度を大幅に改善できます。

以下のコードスニペットのように、`Setup()`内に電力調整機能を追加します。

```cpp
    // 1. Set WiFi to Station mode
    WiFi.mode(WIFI_STA);

    // 2. Adjust WiFi transmit power (Key correction)
    int8_t power_dbm = 15;
    int8_t power_param = (int8_t)(power_dbm / 0.25);
    esp_err_t err = esp_wifi_set_max_tx_power(power_param);
    
    if (err == ESP_OK) {
        Serial.print("Successfully set WiFi TX Power to: ");
        Serial.print(power_dbm);
        Serial.println(" dBm");
    } else {
        Serial.println("Failed to set WiFi TX Power.");
    }
    
    // 3. Start connecting to WiFi
    WiFi.begin(ssid, password);

    Serial.print("Connecting to WiFi network: ");
    Serial.println(ssid);
```

上記のコードに電力を設定することで最良の結果が得られることが確認されています。

## 引用と参考文献

この記事は、**[Random Nerd Tutorials](https://randomnerdtutorials.com/)**のESP32に関するWebコンテンツを参考にし、Seeed Studio XIAO ESP32S3で検証して使用しています。

**Random Nerd Tutorials**の著者の皆様の努力に特別な感謝を表します！

以下は元記事への参考リンクです。以下のリンクから元記事にアクセスして、ESP32ネットワークについてより詳しく学習することをお勧めします。

- [ESP32 Useful Wi-Fi Library Functions (Arduino IDE)](https://randomnerdtutorials.com/esp32-useful-wi-fi-functions-arduino/)
- [ESP32 MQTT – Publish and Subscribe with Arduino IDE](https://randomnerdtutorials.com/esp32-mqtt-publish-subscribe-arduino-ide/)
- [ESP-MESH with ESP32 and ESP8266: Getting Started (painlessMesh library)](https://randomnerdtutorials.com/esp-mesh-esp32-esp8266-painlessmesh/)

ESP32開発ボードの使用に関する詳細情報については、Random Nerd Tutorialsの公式ウェブサイトをお読みください。

- [Random Nerd Tutorials](https://randomnerdtutorials.com/)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
