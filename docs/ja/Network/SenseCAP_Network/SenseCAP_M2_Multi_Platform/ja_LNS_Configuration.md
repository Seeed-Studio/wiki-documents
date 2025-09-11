---
description: SenseCAP M2 マルチプラットフォームゲートウェイ LNS 設定
title: LNS 設定
keywords:
- SenseCAP ネットワーク
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/SenseCAP_m2_LNS_config
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

SenseCAP M2 マルチプラットフォームゲートウェイには、LoRaWAN ネットワークサーバーが内蔵されています。これは Chirpstack をベースにしており、LoRaWAN ネットワークを迅速かつ信頼性の高い方法で立ち上げるためのソリューションを提供します。

## ゲートウェイ設定

Web UI を介してゲートウェイを設定します。[クイックスタート](https://files.seeedstudio.com/products/SenseCAP%20M2/Quick%20Start%20for%20SenseCAP%20M2%20Multi-Platfrom%20Gateway%20&%20Sensors.pdf) を確認して Luci にログインしてください。

### チャネルプラン設定

`LoRa` > `Channel Plan` に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP3.png" alt="pir" width={800} height="auto" /></p>

地域と周波数プランを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP4.png" alt="pir" width={800} height="auto" /></p>

設定後、`Save&Apply` をクリックします。

### ローカルネットワークサーバー設定

`LoRa` > `LoRa Network` に移動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP1.png" alt="pir" width={800} height="auto" /></p>

モードを `Local Network Server` に設定し、MQTT 情報（Broker Host/Port/User/Password）を追加します。他のパラメータはデフォルト値のままにしておくことができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP2.png" alt="pir" width={800} height="auto" /></p>

`Save&Apply` をクリックして設定を適用します。

:::tip 注意
プロセスの開始には約1分かかります。その後、GUI 設定にアクセスできます。
:::

## ChirpStack GUI 設定

`http://localhost:8080` を介して ChirpStack GUI にログインします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP.png" alt="pir" width={800} height="auto" /></p>

デフォルトのアカウントとパスワードは `admin` です。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP5.png" alt="pir" width={800} height="auto" /></p>

その後、ダッシュボードページが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP6.png" alt="pir" width={800} height="auto" /></p>

### 地域の確認

`Network Server` > `Regions` に移動します。

Region ID が表示されるはずです。それをクリックして情報を確認し、前のステップで設定した内容と一致していることを確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP7.png" alt="pir" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP8.png" alt="pir" width={800} height="auto" /></p>

### デバイスプロファイルの追加

`Tenant` > `Device Profiles` に移動し、`Add Profile` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP9.png" alt="pir" width={800} height="auto" /></p>

**MAC バージョン**: LoRaWAN 1.0.3  
**地域パラメータのリビジョン**: A  
**ADR アルゴリズム**: デフォルトの ADR アルゴリズム (LoRa のみ)  
**期待されるアップリンク間隔**: カスタマイズ可能、デフォルトは 3600 秒  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP10.png" alt="pir" width={800} height="auto" /></p>

`Codec` に移動し、`JavaScript functions` を選択して、[SenseCAP Decoder for TTN](https://github.com/Seeed-Solution/SenseCAP-Decoder) をコピーして提出します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/decode.png" alt="pir" width={800} height="auto" /></p>

### ゲートウェイの追加

`Gateway` に移動し、`Add Gateway` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP11.png" alt="pir" width={800} height="auto" /></p>

名前とゲートウェイ ID を定義します（ID はランダムに生成することもできます）。その後、提出します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP13.png" alt="pir" width={800} height="auto" /></p>

### デバイスの追加

`Tenant` > `Application` に移動し、`Add Application` をクリックします。

アプリケーションに名前を付けて提出します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/add-applications.png" alt="pir" width={800} height="auto" /></p>

アプリケーションに移動し、`Add device` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP14.png" alt="pir" width={800} height="auto" /></p>

デバイス EUI を貼り付け、先ほど追加したデバイスプロファイルを選択して提出します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP15.png" alt="pir" width={800} height="auto" /></p>

アプリケーションキーを貼り付けて提出をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP16.png" alt="pir" width={800} height="auto" /></p>

:::tip
デバイスを正しく設定するには、ユーザーガイドを確認し、プラットフォームを `Other Platform` に設定してください。
:::

### デバイスステータスの確認

デバイスの `Events` を確認し、デバイスがネットワークに参加した際のジョインパケットを取得します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP17.png" alt="pir" width={800} height="auto" /></p>

パケットの詳細も確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP18.png" alt="pir" width={800} height="auto" /></p>

## 統合

この章はクラウドサービス開発のためのもので、以下のガイドラインは参考用です。

### MQTT 

#### トピック

MQTT 統合は、イベントタイプで文書化されているすべてのイベントを公開します。

デフォルトのイベントトピックは以下の通りです：
```cpp
application/APPLICATION\_ID/device/DEV\_EUI/event/EVENT
```

詳細については、[イベントタイプ](https://www.chirpstack.io/docs/chirpstack/integrations/events.html)を確認してください。

アプリケーション ID は、アプリケーションタブで確認できます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP19.png" alt="pir" width={800} height="auto" /></p>

- **イベントタイプ**

|up|アップリンクイベント|
| - | - |
|status|マージンとバッテリーステータス|
|join|デバイス参加イベント|
|ack|確認済みダウンリンク (n)ack|
|txack|ダウンリンク送信 ack|
|log|ログ（またはエラー）イベント|
|location|位置情報イベント|
|integration|統合イベント|

:::info 注意
`+` はすべてのメッセージを受信することを意味します。
:::

**例**: 

* 特定のゲートウェイ下のすべてのデバイスからアップリンクメッセージを受信するには：

```cpp
gateway/<GATEWAY\_EUI>/device/+/event/up
```

* アプリケーション下のすべてのデバイスからすべてのメッセージを受信するには：

```cpp
application/+/device/+/event/+
```

* すべてのゲートウェイからすべてのデバイスメッセージを受信するには：

```cpp
gateway/+/device/+/event/+
```

`gatewayid` を確認してゲートウェイを区別できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/gateway-id.png" alt="pir" width={800} height="auto" /></p>

#### ペイロード

`object.valid` が true の場合、データ解析が成功したことを意味します。このとき、`object.messages` を走査して必要なデータタイプを抽出できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP20.png" alt="pir" width={800} height="auto" /></p>

1) SenseCAP LoRaWAN S210X センサーのアップイベントペイロード例の説明：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP21.png" alt="pir" width={800} height="auto" /></p>

- `upload\_battery`: バッテリー
- `upload\_interval`: アップロード間隔、単位：秒
- `upload\_version`: ハードウェア/ファームウェアバージョン
- `report\_telemetry`: 測定値

`report\_telemetry` メッセージ内の `measurementId` については、[SenseCAP Measurement ID](https://sensecap-statics.seeed.cn/hardware/lorapp/httpserver/src/constants/sensor-name-lang-dictionary.json) を確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP22.png" alt="pir" width={800} height="auto" /></p>

1) SenseCAP データロガーのアップイベントペイロード例の説明：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP23.png" alt="pir" width={600} height="auto" /></p>

`report\_telemetry` メッセージ内の `measurementId` については、[SenseCAP Measurement ID](https://sensecap-statics.seeed.cn/hardware/lorapp/httpserver/src/constants/sensor-name-lang-dictionary.json) を確認してください。

### HTTP 

HTTP タブで `+` をクリックして新しい HTTP 統合を追加します。

LNS は設定された URL に POST メッセージを送信します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP24.png" alt="pir" width={800} height="auto" /></p>

URL 情報を送信してください。

:::info 注意
https ではなく、http のみをサポートします。
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/M2-MP25.png" alt="pir" width={800} height="auto" /></p>

HTTP 統合は、設定されたイベントエンドポイントまたはエンドポイント（複数の URL をカンマ区切りで設定可能）に POST リクエストを送信します。`event` URL クエリパラメータはイベントの種類を示します。

HTTP 統合は、[イベントタイプ](https://www.chirpstack.io/docs/chirpstack/integrations/events.html)で文書化されているすべてのイベントを公開します。

**例**:

(main.py) 

```cpp
from http.server import HTTPServer, BaseHTTPRequestHandler 

from urllib.parse import urlparse, parse\_qs 

from chirpstack\_api import integration 

from google.protobuf.json\_format import Parse 

class Handler(BaseHTTPRequestHandler): 

\# True - JSON マーシャラー 

\# False - Protobuf マーシャラー（バイナリ） 

json = False 

def do\_POST(self): 

self.send\_response(200) 

self.end\_headers() 

query\_args = parse\_qs(urlparse(self.path).query) 

content\_len = int(self.headers.get('Content-Length', 0)) 

body = self.rfile.read(content\_len) 

if query\_args["event"][0] == "up": 

self.up(body) 

elif query\_args["event"][0] == "join": 

self.join(body) 

else:

print("handler for event %s is not implemented" % query\_args["event"][0]) 

def up(self, body): 

up = self.unmarshal(body, integration.UplinkEvent()) 

print("Uplink received from: %s with payload: %s" % (up.device\_info.dev\_eui, up.data.hex())) 

def join(self, body): 

join = self.unmarshal(body, integration.JoinEvent()) 

print("Device: %s joined with DevAddr: %s" % (join.device\_info.dev\_eui, join.dev\_addr)) 

def unmarshal(self, body, pl): 

if self.json: 

return Parse(body, pl) 

pl.ParseFromString(body) 

return pl 

httpd = HTTPServer(('', 8090), Handler) 

httpd.serve\_forever() 
```

### ダウンリンク

ダウンリンクメッセージ：

:::info 
ダウンリンクを保持としてマークすることをお勧めします。これにより、コマンドが繰り返し実行されることはありません。
:::

デフォルトのトピックは：`application/APPLICATION\_ID/device/DEV\_EUI/command/down`

`command`: 詳細については、**デバイスユーザーマニュアル**のダウンリンクコマンドを確認してください。

|トピック|application/APPLICATION\_ID/device/DEV\_EUI/command/down|
| - | :- |
|devEUI|デバイス EUI|
|confirmed|true/false（ペイロードを確認済みデータダウンとして送信する必要があるかどうか）|
|fPort|使用する FPort（0 より大きい必要があります）|
|data|base64 エンコードされたデータ（プレーンテキスト、ChirpStack によって暗号化されます）|

**例**:

1) SenseCAP S210x LoRaWAN センサーを再起動する：

**トピック**:

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

1) SenseCAP S210x LoRaWAN センサーのアップロード間隔を1分に設定する：

**トピック**：


`application/dbf6\*\*\*\*6c92/device/2CF7F1C2\*\*\*/command/down`

**Json**：
```cpp
{

"devEui":"2CF7F1C2\*\*\*", 

"confirmed":true, 

"fPort":2, 

"data":"AIkAESIBAJBQ

" 
} 
```