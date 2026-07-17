---
description: Presenta las API básicas de red.
title: Red
keywords:
  - Edge AI
  - reCamera Pro
  - API
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_api_network
sku: 10003420
sidebar_position: 2
last_update:
  date: 07/15/2026
  author: Sizhao zhou
createdAt: '2026-07-15'
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/es/recamera_pro_api_network/
---

# Red

## Descripción general de endpoints

| Método | Ruta | Propósito |
|---|---|---|
| GET | `/network/lan` | Obtener la configuración de red por cable |
| PUT | `/network/lan` | Establecer la configuración de red por cable |
| GET | `/network/wlan` | Obtener la configuración IPv4 inalámbrica |
| PUT | `/network/wlan` | Establecer la configuración IPv4 inalámbrica |
| GET | `/network/wifi` | Obtener la información de la conexión Wi‑Fi actual |
| GET | `/network/wifi-status` | Consultar el estado de alimentación de Wi‑Fi |
| POST | `/network/wifi-status?power=on/off` | Conmutar la alimentación de Wi‑Fi |
| GET | `/network/wifi-list` | Escanear redes Wi‑Fi cercanas |
| POST | `/network/wifi` | Conectarse a Wi‑Fi |
| DELETE | `/network/wifi` | Desconectar o olvidar una red Wi‑Fi |
| GET | `/web/setting` | Consultar la configuración de la API HTTP |
| POST | `/web/setting` | Establecer la configuración de la API HTTP |
| GET | `/ftp/setting` | Consultar la configuración del servicio FTP |
| POST | `/ftp/setting` | Establecer la configuración del servicio FTP |

## Configuración de LAN y WLAN

### Obtener configuración

```text
GET /network/lan
GET /network/wlan
```

Respuesta:

```json
{
  "dIpv4": {
    "sV4Address": "192.168.7.200",
    "sV4Gateway": "192.168.6.2",
    "sV4Method": "static",
    "sV4Netmask": "255.255.254.0"
  },
  "dLink": {
    "bEnableMethod": true,
    "iPower": 1,
    "sAddress": "40:FD:F3:25:1A:8E",
    "sDNS1": "202.96.134.133",
    "sDNS2": "223.5.5.5",
    "sInterface": "wlan0"
  }
}
```

| Campo | Descripción |
|---|---|
| `dIpv4.sV4Address` | Dirección IPv4 |
| `dIpv4.sV4Gateway` | Puerta de enlace IPv4 |
| `dIpv4.sV4Method` | Método de asignación de IP, `dhcp` o `static` |
| `dIpv4.sV4Netmask` | Máscara de subred IPv4 |
| `dLink.sDNS1` / `dLink.sDNS2` | Servidores DNS |
| `dLink.sAddress` | Dirección MAC |
| `dLink.sInterface` | Nombre de la interfaz de red, p. ej. `eth0` o `wlan0` |
| `dLink.iPower` | Estado de alimentación de la interfaz |
| `dLink.bEnableMethod` | Indica si la configuración manual está habilitada |

### Establecer configuración

```text
PUT /network/lan
PUT /network/wlan
```

Cuerpo de la solicitud:

```json
{
  "dIpv4": {
    "sV4Address": "192.168.1.123",
    "sV4Gateway": "192.168.1.1",
    "sV4Method": "dhcp",
    "sV4Netmask": "255.255.255.0"
  },
  "dLink": {
    "sDNS1": "8.8.8.8",
    "sDNS2": "8.8.4.4",
    "bEnableMethod": true
  }
}
```

Respuesta:

```json
{
  "code": 0,
  "message": "SUCCESS TO SET IP"
}
```

## Información actual de Wi‑Fi

```text
GET /network/wifi
```

La estructura de la respuesta es la misma que la de la configuración de LAN/WLAN.

## Alimentación de Wi‑Fi

### Consultar el estado de alimentación de Wi‑Fi

```text
GET /network/wifi-status
```

Respuesta:

```json
{
  "iPower": 1,
  "id": 1,
  "sType": "wifi"
}
```

| Campo | Descripción |
|---|---|
| `iPower` | Estado de alimentación de Wi‑Fi, `1` encendido, `0` apagado |
| `id` | ID de la interfaz |
| `sType` | Tipo de interfaz |

### Conmutar la alimentación de Wi‑Fi

```text
POST /network/wifi-status?power=on
POST /network/wifi-status?power=off
```

| Parámetro | Valor | Descripción |
|---|---|---|
| `power` | `on`, `off` | Encender o apagar Wi‑Fi |

## Escanear y conectar Wi‑Fi

### Escanear lista de Wi‑Fi

```text
GET /network/wifi-list
```

Respuesta:

```json
[
  {
    "sBssid": "58:b4:bb:93:b8:e3",
    "sSsid": "SEEED-MKT",
    "iFrequency": 5180,
    "iRssi": -44,
    "sFlags": "[WPA-PSK-CCMP][WPA2-PSK-CCMP][ESS]",
    "sConnected": true,
    "sReserved": true
  }
]
```

| Campo | Descripción |
|---|---|
| `sBssid` | BSSID de Wi‑Fi, usado como identificador único para la conexión |
| `sSsid` | Nombre de la red Wi‑Fi |
| `iFrequency` | Canal de frecuencia |
| `iRssi` | Intensidad de la señal |
| `sFlags` | Tipo de seguridad |
| `sConnected` | Indica si está conectado actualmente |
| `sReserved` | Indica si la contraseña está guardada |

### Conectarse a Wi‑Fi

```text
POST /network/wifi
```

Cuerpo de la solicitud:

```json
{
  "sSsid": "58:b4:bb:93:b8:e3",
  "sPassword": "your_wifi_password"
}
```

| Campo | Descripción |
|---|---|
| `sSsid` | Identificador único de Wi‑Fi; usa el valor `sBssid` de `/network/wifi-list` |
| `sPassword` | Contraseña de Wi‑Fi |

Respuesta:

```json
{
  "code": 0,
  "message": ""
}
```

### Desconectar u olvidar Wi‑Fi

```text
DELETE /network/wifi?disconnect=<ssid>
DELETE /network/wifi?Ignore=<ssid>
```

| Parámetro | Descripción |
|---|---|
| `disconnect` | Desconectarse de la red Wi‑Fi especificada |
| `Ignore` | Olvidar la red Wi‑Fi especificada |

Respuesta:

```json
{
  "code": 0,
  "message": "",
  "status": 0
}
```

| `status` | Descripción |
|---:|---|
| `0` | Correcto |
| `-1` | Tiempo de espera agotado |
| `-2` | Contraseña incorrecta |

## Configuración de la API HTTP

### Consultar configuración

```text
GET /web/setting
```

Respuesta:

```json
{
  "sEnable": true,
  "sApiKey": "M8RZVF3hXrVDk*%2%LlN*^7nuCRHPiIT"
}
```

| Campo | Descripción |
|---|---|
| `sEnable` | Indica si la API HTTP está habilitada |
| `sApiKey` | Clave de API |

### Establecer configuración

```text
POST /web/setting
```

Cuerpo de la solicitud:

```json
{
  "sEnable": true,
  "sApiKey": "your_api_key"
}
```

## Configuración del servicio FTP

### Consultar configuración

```text
GET /ftp/setting
```

Respuesta:

```json
{
  "sEnable": false,
  "sFtpPassword": "Seeed123.",
  "sFtpPort": "21",
  "sFtpUser": "ftpuser"
}
```

| Campo | Descripción |
|---|---|
| `sEnable` | Indica si el servicio FTP está habilitado |
| `sFtpPort` | Puerto FTP |
| `sFtpUser` | Nombre de usuario FTP |
| `sFtpPassword` | Contraseña FTP |

### Establecer configuración

```text
POST /ftp/setting
```

Cuerpo de la solicitud:

```json
{
  "sEnable": true,
  "sFtpPort": "21",
  "sFtpUser": "ftpuser",
  "sFtpPassword": "StrongPassword123!"
}
```


## Multidifusión

```text
GET /network/muticast
```

:::note
Este endpoint aparece en la tabla de API del dispositivo. Si el firmware actual no lo admite, el dispositivo puede devolver una respuesta 404 o API Not Found.
:::

Códigos de error:

| Código | Descripción |
|---:|---|
| `10001` | Contraseña FTP demasiado débil |
| `10004` | Puerto FTP fuera de rango |
| `10005` | Puerto FTP ya en uso |


## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diversos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos múltiples canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>