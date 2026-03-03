---
description: Usar tecnología WiFi para habilitar el rastreador de geolocalización
title: Cómo obtener ubicación vía Wi-Fi
keywords:
- SenseCAP_T1000_tracker
# image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: /es/Tracker_WiFi_Geolocation
last_update:
  date: 10/19/2023
  author: JoJang
---

# Usar tecnología Wi-Fi para habilitar geolocalización para tu rastreador

# 1. Obtener información Wi-Fi de The Things Network

- **Paso 1.**  Establecemos la conexión entre el rastreador y The Things Network (TTN) siguiendo el tutorial paso a paso proporcionado en la [Wiki](https://wiki.seeedstudio.com/es/SenseCAP_T1000_tracker_TTN/) de Seeed Studio

- **Paso 2.**  Extraer la dirección MAC necesaria, RSSI (Indicación de Intensidad de Señal Recibida), y marca de tiempo del payload analizado, ya que estos datos serán utilizados para geolocalización Wi-Fi en pasos posteriores.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/wifi_tacker1.jpg"/></div>

# 2. Realizar solicitudes de ubicación a través de la API proporcionada por un proveedor de servicios de ubicación

Proveedores de servicios de geolocalización recomendados：

**1. Google Geolocation**

**2. Baidu Map**

## 2.1 Google Geolocation

Para utilizar Google Geolocation para obtener ubicación a través de Wi-Fi, necesitamos obtener acceso a la [API de Geolocalización de Google](https://developers.google.com/maps/documentation/geolocation/overview?hl=en). También hay varios métodos descritos arriba para utilizar la API de Geolocalización.

Una vez que obtenemos la API, podemos enviar solicitudes a Google para analizar nuestra información WIFI. Aquí, usamos código Python para convertir información WIFI en datos de coordenadas.

Paso 1. Instalar 'googlemaps' usando el comando pip:

```python
pip install -U googlemaps
```

Paso 2. Usando Python para enviar solicitudes de análisis, necesitas completar la clave API que obtuviste en la variable `api_key` en el código.

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

Paso 3. Después de completar los pasos anteriores, ¡podrás obtener la información de ubicación del Rastreador!

```
{'location': {'lat': 22.5769055, 'lng': 113.9222236}, 'accuracy': 20}
```

Si no tienes condiciones de ejecución, puedes ejecutar fácilmente el [notebook de Colab](https://colab.research.google.com/drive/10iTGJ_W87b8e45d6DmohuRzMYevkWCmI?usp=sharing) que creamos !

## 2.2 Baidu Map

En este tutorial, hemos elegido usar el servicio de posicionamiento de hardware inteligente proporcionado por la Plataforma Abierta de **Baidu Map** para realizar análisis de ubicación en la información Wi-Fi que hemos obtenido. Los métodos de acceso pueden variar para diferentes proveedores de servicios de ubicación, y aquí estamos usando autenticación de lista blanca de IP. El proceso de acceso específico implica definir el paquete de datos que necesitamos analizar y luego hacer una solicitud POST a la dirección del servicio API. A continuación se muestra el paquete de datos JSON que hemos definido.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/wifi_tracker2.jpg"/></div>

A continuación, navegamos al directorio donde se encuentra el archivo JSON, abrimos la terminal e ingresamos el comando de solicitud：

  ```post
  curl -X POST -H "Content-Type: application/json" -d @request.json https://api.map.baidu.com/locapi/v2
  ```

Entonces podemos recibir los datos analizados que se devuelven：
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/wifi_tracker3.jpg"/></div>

# 3. Mostrando la ubicación en un mapa

El paso final es introducir las coordenadas analizadas en el mapa para mostrar la ubicación. Aquí, estamos usando el enlace de Google Maps: https://www.google.com/maps/
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/wifi_tracker4.png"/></div>
Puedes introducir las coordenadas analizadas en la barra de búsqueda del mapa para ver la ubicación específica en el mapa.
