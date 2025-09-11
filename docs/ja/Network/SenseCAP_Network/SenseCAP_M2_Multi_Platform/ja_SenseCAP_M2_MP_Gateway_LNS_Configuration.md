---
description: SenseCAP M2 Multi-Platform Gateway LNS Configuration
title: SenseCAP M2 Multi-Platform Gateway LNS 設定
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_MP_Gateway_LNS_Configuration
last_update:
  date: 08/29/2023
  author: Jessie
---


## ゲートウェイ設定

Web UIを介してゲートウェイを設定します。Luciにログインする方法については、[クイックスタート](https://files.seeedstudio.com/products/SenseCAP%20M2/Quick%20Start%20for%20SenseCAP%20M2%20Multi-Platfrom%20Gateway%20&%20Sensors.pdf)をご確認ください。

### チャンネルプラン設定

`LoRa` > `Channel Plan`に移動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP3.png" alt="pir" width={800} height="auto" /></p>

地域と周波数プランを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP4.png" alt="pir" width={800} height="auto" /></p>

設定後、`Save&Apply`をクリックします

### ローカルネットワークサーバー設定

`LoRa` > `LoRa Network`に移動します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP1.png" alt="pir" width={800} height="auto" /></p>

モードを`Local Network Server`に設定し、MQTTの情報（Broker Host/Port/User/Password）を追加します。その他のパラメータはデフォルト値のままで構いません。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP2.png" alt="pir" width={800} height="auto" /></p>

`Save&Apply`をクリックして設定を適用します。

:::tip 注意
プロセスの開始には約1分かかります。その後、GUI設定にアクセスできるようになります。
:::

## ChirpStack GUI設定

`http://localhost:8080`を介してChirpStack GUIにログインします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP.png" alt="pir" width={800} height="auto" /></p>

デフォルトのアカウントとパスワード：`admin`。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP5.png" alt="pir" width={800} height="auto" /></p>

ダッシュボードページが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP6.png" alt="pir" width={800} height="auto" /></p>

### 地域の確認

`Network Server` > `Regions`に移動します。

地域IDが表示されているはずです。それをクリックして情報を確認し、前のステップでの設定と同じであることを確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP7.png" alt="pir" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP8.png" alt="pir" width={800} height="auto" /></p>

### デバイスプロファイルの追加

`Tenant` > `Device Profiles`に移動し、`Add Profile`をクリックします。
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP9.png" alt="pir" width={800} height="auto" /></p>

**MAC version**: LoRaWAN 1.0.3

**Regional parameters reversion**: A

**ADR algorithm**: Default ADR algorithm(LoRa only)

**Expected uplink interval**: カスタマイズ、デフォルト3600秒

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP10.png" alt="pir" width={800} height="auto" /></p>

`Codec`に移動し、`JavaScript functions`を選択して、[SenseCAP Decoder for TTN](https://github.com/Seeed-Solution/SenseCAP-Decoder)をコピーして送信します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/decode.png" alt="pir" width={800} height="auto" /></p>

### ゲートウェイの追加

`Gateway`に移動し、`Add Gateway`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP11.png" alt="pir" width={800} height="auto" /></p>

名前とゲートウェイIDを定義し（ をクリックしてIDをランダムに生成できます）、送信します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP13.png" alt="pir" width={800} height="auto" /></p>

### デバイスの追加

`Tenant` > `Application`に移動し、`Add Application`をクリックします。

アプリケーションに名前を付けて送信します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/add-applications.png" alt="pir" width={800} height="auto" /></p>

アプリケーションに移動し、`Add device`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP14.png" alt="pir" width={800} height="auto" /></p>

デバイスEUIを貼り付け、前に追加したデバイスプロファイルを選択して送信します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP15.png" alt="pir" width={800} height="auto" /></p>

アプリケーションキーを貼り付けて送信をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP16.png" alt="pir" width={800} height="auto" /></p>

### デバイスステータスの確認

デバイスの`Events`を確認すると、デバイスがネットワークに参加したときのjoinパケットが取得できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP17.png" alt="pir" width={800} height="auto" /></p>

パケットの詳細も確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP18.png" alt="pir" width={800} height="auto" /></p>

## インテグレーション

この章はクラウドサービス開発のためのものです。以下のガイドラインは参考用です。

### MQTT

#### トピック

MQTTインテグレーションは、イベントタイプで文書化されているすべてのイベントを公開します。

デフォルトのイベントトピックは：

```cpp
application/APPLICATION_ID/device/DEV_EUI/event/EVENT
```

[Event Types](https://www.chirpstack.io/docs/chirpstack/integrations/events.html) で詳細を確認してください。

アプリケーションIDはアプリケーションタブで確認できます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP19.png" alt="pir" width={800} height="auto" /></p>

- **Event types**

|up|アップリンクイベント|
| - | - |
|status|マージンとバッテリーステータス|
|join|デバイス参加イベント|
|ack|確認済みダウンリンク(n)ack|
|txack|ダウンリンク送信ack|
|log|ログ（またはエラー）イベント|
|location|位置イベント|
|integration|統合イベント|


:::info Note
`+` はすべてのメッセージを受信することを意味します
:::

**例**：

- 特定のゲートウェイ下のすべてのデバイスからアップリンクメッセージを受信するには：

```cpp
gateway/<GATEWAY_EUI>/device/+/event/up
```

- アプリケーション配下のすべてのデバイスからのすべてのメッセージを受信するには：

```cpp
application/+/device/+/event/+
```

- すべてのゲートウェイからすべてのデバイスメッセージを受信するには：

```cpp
gateway/+/device/+/event/+
```

`gatewayid` を確認してゲートウェイを区別することができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/gateway-id.png" alt="pir" width={800} height="auto" /></p>

#### ペイロード

object.valid が true の場合、データ解析が成功したことを意味し、object.messages を走査して必要なデータタイプを抽出できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP20.png" alt="pir" width={800} height="auto" /></p>

1) SenseCAP LoRaWAN S210X センサーのアップイベントペイロード例の説明：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP21.png" alt="pir" width={800} height="auto" /></p>

- `upload_battery`: バッテリー
- `upload_interval`: アップロード間隔、単位：秒
- `upload_version`: ハードウェア/ファームウェアバージョン
- `report_telemetry`: 測定値

'report_telemetry' メッセージ内の `measurementId` については、詳細は [SenseCAP Measurement ID](https://sensecap-statics.seeed.cn/hardware/lorapp/httpserver/src/constants/sensor-name-lang-dictionary.json) を確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP22.png" alt="pir" width={800} height="auto" /></p>

1) SenseCAP データロガーのアップイベントペイロード例の説明：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP23.png" alt="pir" width={600} height="auto" /></p>

'report_telemetry' メッセージ内の `measurementId` については、詳細は [SenseCAP Measurement ID](https://sensecap-statics.seeed.cn/hardware/lorapp/httpserver/src/constants/sensor-name-lang-dictionary.json) を確認してください。

### HTTP

HTTP タブで `+` をクリックして新しい HTTP 統合を追加します。

LNS は設定された URL に POST としてメッセージを送信します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP24.png" alt="pir" width={800} height="auto" /></p>

URL 情報を送信してください。

:::info Note
http のみサポート、https はサポートしていません。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP25.png" alt="pir" width={800} height="auto" /></p>

HTTP 統合は設定されたイベントエンドポイントまたはエンドポイント（複数の URL を設定可能、カンマ区切り）に POST リクエストを行います。イベント URL クエリパラメータはイベントのタイプを示します。

HTTP 統合は [Event Type](https://www.chirpstack.io/docs/chirpstack/integrations/events.html) で文書化されているすべてのイベントを公開します。

**例**：

<details>
<summary>main.py</summary>

```cpp
from http.server import HTTPServer, BaseHTTPRequestHandler 

from urllib.parse import urlparse, parse_qs 

from chirpstack_api import integration 

from google.protobuf.json_format import Parse 

class Handler(BaseHTTPRequestHandler): 

\# True - JSON marshaler 

\# False - Protobuf marshaler (binary) 

json = False 

def do_POST(self): 

self.send_response(200) 

self.end_headers() 

query_args = parse_qs(urlparse(self.path).query) 

content_len = int(self.headers.get('Content-Length', 0)) 

body = self.rfile.read(content_len) 

if query_args["event"][0] == "up": 

self.up(body) 

elif query_args["event"][0] == "join": 

self.join(body) 

else:

print("handler for event %s is not implemented" % query_args["event"][0]) 

def up(self, body): 

up = self.unmarshal(body, integration.UplinkEvent()) 

print("Uplink received from: %s with payload: %s" % (up.device_info.dev_eui, up.data.hex())) 

def join(self, body): 

join = self.unmarshal(body, integration.JoinEvent()) 

print("Device: %s joined with DevAddr: %s" % (join.device_info.dev_eui, join.dev_addr)) 

def unmarshal(self, body, pl): 

if self.json: 

return Parse(body, pl) 

pl.ParseFromString(body) 

return pl 

httpd = HTTPServer(('', 8090), Handler) 

httpd.serve_forever() 
```

</details>

### ダウンリンク

ダウンリンクメッセージ：

:::info
ダウンリンクを保持済みとしてマークすることを推奨します。これにより、コマンドが繰り返し実行されることがなくなります。
:::

デフォルトのTopicは：`application/APPLICATION_ID/device/DEV_EUI/command/down`

`command`：詳細については、**デバイスユーザーマニュアル**のダウンリンクコマンドを確認してください。

|Topic|application/APPLICATION_ID/device/DEV_EUI/command/down|
| - | :- |
|devEUI|デバイスEUI|
|confirmed|true/false（ペイロードを確認済みデータダウンとして送信する必要があるかどうか）|
|fPort|使用するFPort（0より大きい値である必要があります）|
|data|base64エンコードされたデータ（平文、ChirpStackによって暗号化されます）|


**例**:

1) SenseCAP S210x LoRaWANセンサーの再起動：

**Topic**:

`application/dbf6\*\*\*\*6c92/device/2CF7F1C2\*\*\*/command/down`

**Json：**

```cpp
{

"devEui":"2CF7F1C2\*\*\*", 

"confirmed":true, 

"fPort":2, 

"data":"AMgAAAAAACsm" 

} 
```

2) SenseCAP S210x LoRaWANセンサーのアップロード間隔を1分に設定する：

**トピック**：

`application/dbf6\*\*\*\*6c92/device/2CF7F1C2\*\*\*/command/down`

**Json**：

```cpp
{

"devEui":"2CF7F1C2\*\*\*", 

"confirmed":true, 

"fPort":2, 

"data":"AIkAESIBAJBQ" 

} 
```
