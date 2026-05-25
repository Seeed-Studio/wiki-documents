---
description: Usando tecnologia WiFi para habilitar rastreamento por geolocalização
title: Como obter localização via Wi‑Fi
keywords:
  - SenseCAP_T1000_tracker
slug: /Tracker_WiFi_Geolocation
last_update:
  date: 10/19/2023
  author: JoJang
createdAt: '2023-09-26'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Tracker_WiFi_Geolocation/
---

# Usando tecnologia Wi‑Fi para habilitar geolocalização para o seu tracker

# 1. Obtendo informações de Wi‑Fi a partir do The Things Network

- **Passo 1.**  Estabelecemos a conexão entre o tracker e o The Things Network (TTN) seguindo o tutorial passo a passo fornecido no [Wiki](https://wiki.seeedstudio.com/pt-br/SenseCAP_T1000_tracker_TTN/) da Seeed Studio

- **Passo 2.**  Extraindo o endereço MAC necessário, o RSSI (Received Signal Strength Indication) e o carimbo de data/hora do payload analisado, pois esses dados serão utilizados para geolocalização por Wi‑Fi nas etapas subsequentes.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/wifi_tacker1.jpg"/></div>

# 2. Fazendo requisições de localização por meio da API fornecida por um provedor de serviço de localização

Provedores de serviço de geolocalização recomendados：

**1. Google Geolocation**

**2. Baidu Map**

## 2.1 Google Geolocation

Para utilizar o Google Geolocation para obter a localização por meio de Wi‑Fi, precisamos obter acesso à [Google Geolocation API](https://developers.google.com/maps/documentation/geolocation/overview?hl=en). Há também vários métodos descritos acima para utilizar a Geolocation API.

Depois de obtermos a API, podemos enviar requisições ao Google para analisar nossas informações de WIFI. Aqui, usamos código em Python para converter as informações de WIFI em dados de coordenadas.

Passo 1. Instale 'googlemaps' usando o comando pip:

```python
pip install -U googlemaps
```

Passo 2. Usando Python para enviar requisições de análise, você precisa preencher a chave de API que obteve na variável `api_key` no código.

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

Passo 3. Após concluir as etapas acima, você conseguirá obter as informações de localização do Tracker!

```
{'location': {'lat': 22.5769055, 'lng': 113.9222236}, 'accuracy': 20}
```

Se você não tiver condições de execução, pode facilmente rodar o [notebook Colab](https://colab.research.google.com/drive/10iTGJ_W87b8e45d6DmohuRzMYevkWCmI?usp=sharing) que criamos!

## 2.2 Baidu Map

Neste tutorial, optamos por usar o serviço de posicionamento para hardware inteligente fornecido pela Plataforma Aberta do **Baidu Map** para realizar a análise de localização com base nas informações de Wi‑Fi que obtivemos. Os métodos de acesso podem variar para diferentes provedores de serviço de localização, e aqui estamos usando autenticação por lista de permissões de IP. O processo específico de acesso envolve definir o pacote de dados que precisamos analisar e, em seguida, fazer uma requisição POST para o endereço de serviço da API. Abaixo está o pacote de dados JSON que definimos.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/wifi_tracker2.jpg"/></div>

Em seguida, navegamos até o diretório onde o arquivo JSON está localizado, abrimos o terminal e digitamos o comando de requisição：

  ```post
  curl -X POST -H "Content-Type: application/json" -d @request.json https://api.map.baidu.com/locapi/v2
  ```

Então podemos receber os dados analisados que são retornados：
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/wifi_tracker3.jpg"/></div>

# 3. Exibindo a localização em um mapa

A etapa final é inserir as coordenadas analisadas no mapa para exibir a localização. Aqui, estamos usando o link do Google Maps: https://www.google.com/maps/
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/wifi_tracker4.png"/></div>
Você pode inserir as coordenadas analisadas na barra de pesquisa do mapa para visualizar a localização específica no mapa.
