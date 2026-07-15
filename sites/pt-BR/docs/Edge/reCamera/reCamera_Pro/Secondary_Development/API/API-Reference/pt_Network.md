---
description: Apresenta as APIs básicas de rede.
title: Rede
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
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_api_network/
---

# Rede

## Visão geral dos endpoints

| Método | Caminho | Finalidade |
|---|---|---|
| GET | `/network/lan` | Obter configuração de rede cabeada |
| PUT | `/network/lan` | Definir configuração de rede cabeada |
| GET | `/network/wlan` | Obter configuração IPv4 sem fio |
| PUT | `/network/wlan` | Definir configuração IPv4 sem fio |
| GET | `/network/wifi` | Obter informações da conexão Wi-Fi atual |
| GET | `/network/wifi-status` | Consultar status de energia do Wi-Fi |
| POST | `/network/wifi-status?power=on/off` | Alternar energia do Wi-Fi |
| GET | `/network/wifi-list` | Verificar redes Wi-Fi próximas |
| POST | `/network/wifi` | Conectar ao Wi-Fi |
| DELETE | `/network/wifi` | Desconectar ou esquecer Wi-Fi |
| GET | `/web/setting` | Consultar configurações da API HTTP |
| POST | `/web/setting` | Definir configurações da API HTTP |
| GET | `/ftp/setting` | Consultar configurações do serviço FTP |
| POST | `/ftp/setting` | Definir configurações do serviço FTP |

## Configuração de LAN e WLAN

### Obter configuração

```text
GET /network/lan
GET /network/wlan
```

Resposta:

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

| Campo | Descrição |
|---|---|
| `dIpv4.sV4Address` | Endereço IPv4 |
| `dIpv4.sV4Gateway` | Gateway IPv4 |
| `dIpv4.sV4Method` | Método de atribuição de IP, `dhcp` ou `static` |
| `dIpv4.sV4Netmask` | Máscara de sub-rede IPv4 |
| `dLink.sDNS1` / `dLink.sDNS2` | Servidores DNS |
| `dLink.sAddress` | Endereço MAC |
| `dLink.sInterface` | Nome da interface de rede, por exemplo, `eth0` ou `wlan0` |
| `dLink.iPower` | Estado de energia da interface |
| `dLink.bEnableMethod` | Se a configuração manual está habilitada |

### Definir configuração

```text
PUT /network/lan
PUT /network/wlan
```

Corpo da requisição:

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

Resposta:

```json
{
  "code": 0,
  "message": "SUCCESS TO SET IP"
}
```

## Informações atuais do Wi-Fi

```text
GET /network/wifi
```

A estrutura da resposta é a mesma da configuração de LAN/WLAN.

## Energia do Wi-Fi

### Consultar status de energia do Wi-Fi

```text
GET /network/wifi-status
```

Resposta:

```json
{
  "iPower": 1,
  "id": 1,
  "sType": "wifi"
}
```

| Campo | Descrição |
|---|---|
| `iPower` | Estado de energia do Wi-Fi, `1` ligado, `0` desligado |
| `id` | ID da interface |
| `sType` | Tipo de interface |

### Alternar energia do Wi-Fi

```text
POST /network/wifi-status?power=on
POST /network/wifi-status?power=off
```

| Parâmetro | Valor | Descrição |
|---|---|---|
| `power` | `on`, `off` | Ligar ou desligar o Wi-Fi |

## Verificar e conectar Wi-Fi

### Verificar lista de Wi-Fi

```text
GET /network/wifi-list
```

Resposta:

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

| Campo | Descrição |
|---|---|
| `sBssid` | BSSID do Wi-Fi, usado como identificador exclusivo para conexão |
| `sSsid` | Nome da rede Wi-Fi |
| `iFrequency` | Canal de frequência |
| `iRssi` | Força do sinal |
| `sFlags` | Tipo de segurança |
| `sConnected` | Se está conectado no momento |
| `sReserved` | Se a senha está salva |

### Conectar ao Wi-Fi

```text
POST /network/wifi
```

Corpo da requisição:

```json
{
  "sSsid": "58:b4:bb:93:b8:e3",
  "sPassword": "your_wifi_password"
}
```

| Campo | Descrição |
|---|---|
| `sSsid` | Identificador exclusivo do Wi-Fi; use o valor de `sBssid` de `/network/wifi-list` |
| `sPassword` | Senha do Wi-Fi |

Resposta:

```json
{
  "code": 0,
  "message": ""
}
```

### Desconectar ou esquecer Wi-Fi

```text
DELETE /network/wifi?disconnect=<ssid>
DELETE /network/wifi?Ignore=<ssid>
```

| Parâmetro | Descrição |
|---|---|
| `disconnect` | Desconectar do Wi-Fi especificado |
| `Ignore` | Esquecer o Wi-Fi especificado |

Resposta:

```json
{
  "code": 0,
  "message": "",
  "status": 0
}
```

| `status` | Descrição |
|---:|---|
| `0` | Sucesso |
| `-1` | Tempo limite excedido |
| `-2` | Senha incorreta |

## Configurações da API HTTP

### Consultar configurações

```text
GET /web/setting
```

Resposta:

```json
{
  "sEnable": true,
  "sApiKey": "M8RZVF3hXrVDk*%2%LlN*^7nuCRHPiIT"
}
```

| Campo | Descrição |
|---|---|
| `sEnable` | Se a API HTTP está habilitada |
| `sApiKey` | Chave de API |

### Definir configurações

```text
POST /web/setting
```

Corpo da requisição:

```json
{
  "sEnable": true,
  "sApiKey": "your_api_key"
}
```

## Configurações do serviço FTP

### Consultar configurações

```text
GET /ftp/setting
```

Resposta:

```json
{
  "sEnable": false,
  "sFtpPassword": "Seeed123.",
  "sFtpPort": "21",
  "sFtpUser": "ftpuser"
}
```

| Campo | Descrição |
|---|---|
| `sEnable` | Se o serviço FTP está habilitado |
| `sFtpPort` | Porta FTP |
| `sFtpUser` | Nome de usuário FTP |
| `sFtpPassword` | Senha FTP |

### Definir configurações

```text
POST /ftp/setting
```

Corpo da requisição:

```json
{
  "sEnable": true,
  "sFtpPort": "21",
  "sFtpUser": "ftpuser",
  "sFtpPassword": "StrongPassword123!"
}
```


## Multicast

```text
GET /network/muticast
```

:::note
Este endpoint está listado na tabela de API do dispositivo. Se o firmware atual não o suportar, o dispositivo poderá retornar uma resposta 404 ou API Not Found.
:::

Códigos de erro:

| Código | Descrição |
|---:|---|
| `10001` | Senha FTP muito fraca |
| `10004` | Porta FTP fora do intervalo |
| `10005` | Porta FTP já em uso |


## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diversos tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>