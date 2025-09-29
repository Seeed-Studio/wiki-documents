---
description: WiFi技術を使用してジオロケーショントラッカーを有効にする
title: Wi-Fiを使用して位置情報を取得する方法
keywords:
- SenseCAP_T1000_tracker
# image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: /ja/Tracker_WiFi_Geolocation
last_update:
  date: 10/19/2023
  author: JoJang
---

# Wi-Fi技術を使用してトラッカーのジオロケーションを有効にする

# 1. The Things NetworkからWi-Fi情報を取得する

- **ステップ1.** Seeed StudioのWiki[Wiki](https://wiki.seeedstudio.com/ja/SenseCAP_T1000_tracker_TTN/)で提供されているステップバイステップのチュートリアルに従って、トラッカーとThe Things Network（TTN）間の接続を確立します

- **ステップ2.** 解析されたペイロードから必要なMACアドレス、RSSI（受信信号強度表示）、およびタイムスタンプを抽出します。これらのデータは、後続のステップでWi-Fiジオロケーションに使用されます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/wifi_tacker1.jpg"/></div>

# 2. 位置情報サービスプロバイダーが提供するAPIを通じて位置情報リクエストを行う

推奨されるジオロケーションサービスプロバイダー：

**1. Google Geolocation**

**2. Baidu Map**

## 2.1 Google ジオロケーション

Wi-Fiを通じて位置情報を取得するためにGoogle Geolocationを利用するには、[Google Geolocation API](https://developers.google.com/maps/documentation/geolocation/overview?hl=en)へのアクセスを取得する必要があります。Geolocation APIを利用するための様々な方法も上記で説明されています。

APIを取得したら、Googleにリクエストを送信してWIFI情報を解析できます。ここでは、Pythonコードを使用してWIFI情報を座標データに変換します。

ステップ1. pipコマンドを使用して'googlemaps'をインストールします：

```python
pip install -U googlemaps
```

ステップ2. Pythonを使用して解析リクエストを送信する場合、コード内の`api_key`変数に取得したAPIキーを入力する必要があります。

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
    Mimics the exception handling logic in ``client._get_body``, but
    for geolocation which uses a different response format.
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
    The Google Maps Geolocation API returns a location and accuracy
    radius based on information about cell towers and WiFi nodes given.

    See https://developers.google.com/maps/documentation/geolocation/intro
    for more info, including more detail for each parameter below.

    :param home_mobile_country_code: The mobile country code (MCC) for
        the device's home network.
    :type home_mobile_country_code: string

    :param home_mobile_network_code: The mobile network code (MCC) for
        the device's home network.
    :type home_mobile_network_code: string

    :param radio_type: The mobile radio type. Supported values are
        lte, gsm, cdma, and wcdma. While this field is optional, it
        should be included if a value is available, for more accurate
        results.
    :type radio_type: string

    :param carrier: The carrier name.
    :type carrier: string

    :param consider_ip: Specifies whether to fall back to IP geolocation
        if wifi and cell tower signals are not available. Note that the
        IP address in the request header may not be the IP of the device.
    :type consider_ip: bool

    :param cell_towers: A list of cell tower dicts. See
        https://developers.google.com/maps/documentation/geolocation/intro#cell_tower_object
        for more detail.
    :type cell_towers: list of dicts

    :param wifi_access_points: A list of WiFi access point dicts. See
        https://developers.google.com/maps/documentation/geolocation/intro#wifi_access_point_object
        for more detail.
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

    return client._request("/geolocation/v1/geolocate", {},  # No GET params
                           base_url=_GEOLOCATION_BASE_URL,
                           extract_body=_geolocation_extract,
                           post_json=params)


if __name__ == '__main__':
    # Replace with your API key
    api_key = 'YOUR_API_KEY'

    # Create a Google Maps client
    gmaps = googlemaps.Client(key=api_key)

    # Call the geolocate function
    result = geolocate(
        gmaps,
        wifi_access_points=param["wifiAccessPoints"],
        consider_ip=param["considerIp"]
    )

    # Print the result
    print(result)

```

ステップ3. 上記のステップを完了すると、トラッカーの位置情報を取得できるようになります！

```
{'location': {'lat': 22.5769055, 'lng': 113.9222236}, 'accuracy': 20}
```

実行環境がない場合は、私たちが作成した[Colabノートブック](https://colab.research.google.com/drive/10iTGJ_W87b8e45d6DmohuRzMYevkWCmI?usp=sharing)を簡単に実行できます！

## 2.2 百度地図

このチュートリアルでは、取得したWi-Fi情報に対して位置解析を実行するために、**Baidu Map**オープンプラットフォームが提供するインテリジェントハードウェア測位サービスを使用することを選択しました。異なる位置サービスプロバイダーではアクセス方法が異なる場合があり、ここではIPホワイトリスト認証を使用しています。具体的なアクセスプロセスでは、解析する必要があるデータパッケージを定義し、その後APIサービスアドレスにPOSTリクエストを送信します。以下は私たちが定義したJSONデータパッケージです。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/wifi_tracker2.jpg"/></div>

次に、JSONファイルが配置されているディレクトリに移動し、ターミナルを開いて、リクエストコマンドを入力します：

  ```post
  curl -X POST -H "Content-Type: application/json" -d @request.json https://api.map.baidu.com/locapi/v2
  ```

次に、返される解析されたデータを受信できます：
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/wifi_tracker3.jpg"/></div>

# 3. 地図上での位置表示

最後のステップは、解析された座標を地図に入力して位置を表示することです。ここでは、Google Maps のリンクを使用しています：https://www.google.com/maps/
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/wifi_tracker4.png"/></div>
地図の検索バーに解析された座標を入力することで、地図上の具体的な位置を確認できます。
