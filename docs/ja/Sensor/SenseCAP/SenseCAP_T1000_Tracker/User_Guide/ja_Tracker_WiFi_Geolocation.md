---
description: WiFi技術を使用して位置追跡を可能にする
title: Wi-Fiを使用して位置情報を取得する方法
keywords:
- SenseCAP_T1000_tracker
# image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: /ja/Tracker_WiFi_Geolocation
last_update:
  date: 05/15/2025
  author: JoJang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Wi-Fi技術を使用してトラッカーの位置情報を有効化する

# 1. The Things NetworkからWi-Fi情報を取得する
- **ステップ1.** トラッカーとThe Things Network (TTN)を接続するには、Seeed Studioの[Wiki](https://wiki.seeedstudio.com/ja/SenseCAP_T1000_tracker_TTN/)で提供されているステップバイステップのチュートリアルに従います。

- **ステップ2.** 解析されたペイロードから必要なMACアドレス、RSSI（受信信号強度指標）、およびタイムスタンプを抽出します。これらのデータは、次のステップでWi-Fiジオロケーションに使用されます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/wifi_tacker1.jpg"/></div>

# 2. 位置情報サービスプロバイダーが提供するAPIを使用して位置情報をリクエストする

推奨されるジオロケーションサービスプロバイダー：

**1. Google Geolocation**

**2. Baidu Map**

## 2.1 Google Geolocation
Wi-Fiを使用して位置情報を取得するためにGoogle Geolocationを利用するには、[Google Geolocation API](https://developers.google.com/maps/documentation/geolocation/overview?hl=ja)へのアクセスを取得する必要があります。Geolocation APIを利用するためのさまざまな方法も上記で説明されています。

APIを取得したら、Googleにリクエストを送信してWi-Fi情報を解析できます。ここでは、Pythonコードを使用してWi-Fi情報を座標データに変換します。

ステップ1. pipコマンドを使用して「googlemaps」をインストールします：
```python
pip install -U googlemaps
```

ステップ2. Pythonを使用して解析リクエストを送信します。コード内の`api_key`変数に取得したAPIキーを入力する必要があります。
```python
import googlemaps
from googlemaps import exceptions

param = {
  "considerIp": "false",
  "wifiAccessPoints": [
    {
      "macAddress": "9A:BB:99:12:1B:61",
      "signalStrength": -50,
      "signalToNoiseRatio": 0
    },
    {
      "macAddress": "14:DE:39:A6:20:C9",
      "signalStrength": -46,
      "signalToNoiseRatio": 0
    },
    {
      "macAddress": "C8:D7:19:92:69:6E",
      "signalStrength": -85,
      "signalToNoiseRatio": 0
    }
  ]
}


_GEOLOCATION_BASE_URL = "https://www.googleapis.com"


def _geolocation_extract(response):
    """
    ``client._get_body``の例外処理ロジックを模倣しますが、
    geolocationは異なるレスポンス形式を使用します。
    """
    body = response.json()
    if response.status_code in (200, 404):
        return body

    try:
        error = body["error"]["errors"][0]["reason"]
    except KeyError:
        error = None

    if response.status_code == 403:
        raise exceptions._OverQueryLimit(response.status_code, error)
    else:
        raise exceptions.ApiError(response.status_code, error)


def geolocate(client, home_mobile_country_code=None,
              home_mobile_network_code=None, radio_type=None, carrier=None,
              consider_ip=None, cell_towers=None, wifi_access_points=None):
    """
    Google Maps Geolocation APIは、提供された携帯電話基地局やWi-Fiノードの情報に基づいて
    位置情報と精度半径を返します。

    詳細は以下を参照してください：
    https://developers.google.com/maps/documentation/geolocation/intro

    :param home_mobile_country_code: デバイスのホームネットワークのモバイル国コード（MCC）。
    :type home_mobile_country_code: string

    :param home_mobile_network_code: デバイスのホームネットワークのモバイルネットワークコード（MNC）。
    :type home_mobile_network_code: string

    :param radio_type: モバイルラジオタイプ。サポートされる値は
        lte, gsm, cdma, wcdmaです。このフィールドはオプションですが、
        値が利用可能な場合は、より正確な結果を得るために含めるべきです。
    :type radio_type: string

    :param carrier: キャリア名。
    :type carrier: string

    :param consider_ip: Wi-Fiや携帯電話基地局の信号が利用できない場合に
        IPジオロケーションにフォールバックするかどうかを指定します。
        リクエストヘッダーのIPアドレスがデバイスのIPでない場合があります。
    :type consider_ip: bool

    :param cell_towers: 携帯電話基地局の辞書リスト。
        詳細は以下を参照してください：
        https://developers.google.com/maps/documentation/geolocation/intro#cell_tower_object
    :type cell_towers: list of dicts

    :param wifi_access_points: Wi-Fiアクセスポイントの辞書リスト。
        詳細は以下を参照してください：
        https://developers.google.com/maps/documentation/geolocation/intro#wifi_access_point_object
    :type wifi_access_points: list of dicts
    """

    params = {}
    if home_mobile_country_code is not None:
        params["homeMobileCountryCode"] = home_mobile_country_code
    if home_mobile_network_code is not None:
        params["homeMobileNetworkCode"] = home_mobile_network_code
    if radio_type is not None:
        params["radioType"] = radio_type
    if carrier is not None:
        params["carrier"] = carrier
    if consider_ip is not None:
        params["considerIp"] = consider_ip
    if cell_towers is not None:
        params["cellTowers"] = cell_towers
    if wifi_access_points is not None:
        params["wifiAccessPoints"] = wifi_access_points

    return client._request("/geolocation/v1/geolocate", {},  # GETパラメータなし
                           base_url=_GEOLOCATION_BASE_URL,
                           extract_body=_geolocation_extract,
                           post_json=params)




if __name__ == '__main__':
    # APIキーを置き換えてください
    api_key = 'YOUR_API_KEY'

    # Google Mapsクライアントを作成
    gmaps = googlemaps.Client(key=api_key)

    # geolocate関数を呼び出す
    result = geolocate(
        gmaps,
        wifi_access_points=param["wifiAccessPoints"],
        consider_ip=param["considerIp"]
    )

    # 結果を出力
    print(result)

```

ステップ3. 上記の手順を完了すると、トラッカーの位置情報を取得できるようになります！
```
{'location': {'lat': 22.5769055, 'lng': 113.9222236}, 'accuracy': 20}
```

もし実行環境が整っていない場合は、作成した[Colabノートブック](https://colab.research.google.com/drive/10iTGJ_W87b8e45d6DmohuRzMYevkWCmI?usp=sharing)を簡単に実行できます！

## 2.2 Baidu Map
このチュートリアルでは、取得したWi-Fi情報に基づいて位置解析を行うために、**Baidu Map**オープンプラットフォームが提供するインテリジェントハードウェア位置サービスを使用することを選択しました。異なる位置サービスプロバイダーではアクセス方法が異なる場合がありますが、ここではIPホワイトリスト認証を使用しています。具体的なアクセスプロセスは、解析する必要のあるデータパッケージを定義し、その後APIサービスアドレスにPOSTリクエストを送信することです。以下は定義したJSONデータパッケージです。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/wifi_tracker2.jpg"/></div>

次に、JSONファイルがあるディレクトリに移動し、ターミナルを開いて以下のリクエストコマンドを入力します：

```post
curl -X POST -H "Content-Type: application/json" -d @request.json https://api.map.baidu.com/locapi/v2
```

その後、解析されたデータが返されます：
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/wifi_tracker3.jpg"/></div>

# 3. 地図上で位置を表示する

最後のステップは、解析された座標を地図に入力して位置を表示することです。ここではGoogle Mapsのリンクを使用します：https://www.google.com/maps/
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/wifi_tracker4.png"/></div>
解析された座標を地図の検索バーに入力すると、地図上で特定の位置を確認できます。