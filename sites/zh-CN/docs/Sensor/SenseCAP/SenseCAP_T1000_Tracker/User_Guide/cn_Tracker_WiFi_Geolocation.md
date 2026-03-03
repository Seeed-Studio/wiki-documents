---
description: 使用WiFi技术实现地理位置追踪器
title: 如何通过Wi-Fi获取位置信息
keywords:
- SenseCAP_T1000_tracker
# image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: /cn/Tracker_WiFi_Geolocation
last_update:
  date: 10/19/2023
  author: JoJang
---

# 使用Wi-Fi技术为您的追踪器启用地理定位

# 1. 从The Things Network获取Wi-Fi信息

- **步骤1.** 我们按照Seeed Studio [Wiki](https://wiki.seeedstudio.com/cn/SenseCAP_T1000_tracker_TTN/)提供的分步教程，建立追踪器与The Things Network (TTN)之间的连接

- **步骤2.** 从解析的有效载荷中提取必要的MAC地址、RSSI（接收信号强度指示）和时间戳，因为这些数据将在后续步骤中用于Wi-Fi地理定位。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/wifi_tacker1.jpg"/></div>

# 2. 通过位置服务提供商提供的API发出位置请求

推荐的地理定位服务提供商：

**1. Google Geolocation**

**2. 百度地图**

## 2.1 Google Geolocation

要利用Google Geolocation通过Wi-Fi获取位置信息，我们需要获得[Google Geolocation API](https://developers.google.com/maps/documentation/geolocation/overview?hl=en)的访问权限。上面还概述了利用Geolocation API的各种方法。

一旦我们获得了API，我们就可以向Google发送请求来解析我们的WIFI信息。在这里，我们使用Python代码将WIFI信息转换为坐标数据。

步骤1. 使用pip命令安装'googlemaps'：

```python
pip install -U googlemaps
```

步骤 2. 使用 Python 发送解析请求，您需要在代码中的 `api_key` 变量中填入您获得的 API 密钥。

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

步骤 3. 完成以上步骤后，你就能获取追踪器的位置信息了！

```
{'location': {'lat': 22.5769055, 'lng': 113.9222236}, 'accuracy': 20}
```

如果您没有运行条件，可以轻松运行我们创建的 [Colab notebook](https://colab.research.google.com/drive/10iTGJ_W87b8e45d6DmohuRzMYevkWCmI?usp=sharing) ！

## 2.2 百度地图

在本教程中，我们选择使用**百度地图**开放平台提供的智能硬件定位服务来对我们获取的 Wi-Fi 信息进行位置分析。不同位置服务提供商的接入方式可能有所不同，这里我们使用的是 IP 白名单认证。具体的接入流程是定义我们需要解析的数据包，然后向 API 服务地址发起 POST 请求。以下是我们定义的 JSON 数据包。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/wifi_tracker2.jpg"/></div>

接下来，我们导航到 JSON 文件所在的目录，打开终端，并输入请求命令：

  ```post
  curl -X POST -H "Content-Type: application/json" -d @request.json https://api.map.baidu.com/locapi/v2
  ```

然后我们可以接收返回的解析数据：
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/wifi_tracker3.jpg"/></div>

# 3. 在地图上显示位置

最后一步是将解析的坐标输入到地图中以显示位置。这里，我们使用 Google Maps 链接：https://www.google.com/maps/
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/wifi_tracker4.png"/></div>
您可以在地图的搜索栏中输入解析的坐标来查看地图上的具体位置。
