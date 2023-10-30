---
description: Using WiFi technology to enable geolocate tracker
title: How to get location via Wi-Fi
keywords:
- SenseCAP_T1000_tracker
# image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: /Tracker_WiFi_Geolocation
last_update:
  date: 10/19/2023
  author: JoJang
---

# Using Wi-Fi technology to enable geolocation for your tracker

# 1. Obtaining Wi-Fi information from The Things Network
- **Step 1.**  We establish the connection between the tracker and The Things Network (TTN) by following the step-by-step tutorial provided on Seeed Studio's [Wiki](https://wiki.seeedstudio.com/SenseCAP_T1000_tracker_TTN/)


- **Step 2.**  Extracting the necessary MAC address, RSSI (Received Signal Strength Indication), and timestamp from the parsed payload, as these data will be utilized for Wi-Fi geolocation in subsequent steps. 

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/wifi_tacker1.jpg"/></div>




# 2. Making location requests through the API provided by a location service provider

Recommended geolocation service providers：

**1. Google Geolocation**

**2. Baidu Map**

## 2.1 Google Geolocation
To utilize Google Geolocation for obtaining location through Wi-Fi, we need to obtain access to the [Google Geolocation API](https://developers.google.com/maps/documentation/geolocation/overview?hl=en).There are also various methods outlined above for utilizing the Geolocation API.

Once we obtain the API, we can send requests to Google to parse our WIFI information. Here, we use Python code to convert WIFI information into coordinate data.

Step 1. Install 'googlemaps' using the pip command:
```python
pip install -U googlemaps
```
Step 2. Using Python to send parsing requests, you need to fill in the API key you obtained in the `api_key` variable in the code.
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

Step 3. After completing the above steps, you will be able to obtain the Tracker's location information!
```
{'location': {'lat': 22.5769055, 'lng': 113.9222236}, 'accuracy': 20}
```

If you don't have running conditions, you can easily run the [Colab notebook](https://colab.research.google.com/drive/10iTGJ_W87b8e45d6DmohuRzMYevkWCmI?usp=sharing) we created !




## 2.2 Baidu Map
In this tutorial, we have chosen to use the intelligent hardware positioning service provided by the **Baidu Map** Open Platform to perform location analysis on the Wi-Fi information we have obtained. The access methods may vary for different location service providers, and here we are using IP whitelist authentication. The specific access process involves defining the data package we need to parse and then making a POST request to the API service address. Below is the JSON data package we have defined.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/wifi_tracker2.jpg"/></div>

Next, we navigate to the directory where the JSON file is located, open the terminal, and enter the request command：


  ```post
  curl -X POST -H "Content-Type: application/json" -d @request.json https://api.map.baidu.com/locapi/v2
  ```

Then we can receive the parsed data that is returned：
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/wifi_tracker3.jpg"/></div>

# 3. Displaying the location on a map

The final step is to input the parsed coordinates into the map to display the location. Here, we are using the Google Maps link: https://www.google.com/maps/
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/wifi_tracker4.png"/></div>
You can enter the parsed coordinates in the map's search bar to view the specific location on the map.


