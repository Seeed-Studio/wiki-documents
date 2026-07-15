---
description: Instruções de Comando AT via Bluetooth para LoRaWAN Tracker
title: Instruções de Comando AT via Bluetooth para LoRaWAN Tracker
keywords:
  - Tracker
  - App
image: https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/intro-e.webp
slug: /tracker_at_command
sidebar_position: 5
last_update:
  date: 4/15/2025
  author: Jessie
createdAt: '2025-04-16'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/tracker_at_command/
---

Este capítulo irá explicar brevemente o uso de comandos AT via Bluetooth, estabelecer uma conexão Bluetooth e consultar/configurar informações do dispositivo por meio dos comandos AT Bluetooth.

## Pré-requisitos

- Um dispositivo T1000-E com firmware LoRaWAN.
- Celular com suporte a Bluetooth 4.0+.
- [Lista de Comandos AT do LoRaWAN Tracker](https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/LoRaWAN%20Tracker%20AT%20Command.pdf)
- Framework de desenvolvimento mobile (por exemplo, React Native + react-native-ble-plx).

### Descobrir Serviços e Características BLE

Para descobrir e filtrar seu dispositivo BLE em um app:

- Escaneie dispositivos Bluetooth próximos.
- Filtre os resultados do escaneamento por `["2886", "A886", "a6ed0701-d344-460a-8075-b9e8ec90d71b"]`.

- Opcionalmente, filtre o dispositivo pelo nome anunciado:

 Em `react-native-ble-plx`, o nome local pode ser acessado via `(Device).localName`.

 Mantenha apenas dispositivos cujo `localName` contenha `T1000`.

### Verificar o status do dispositivo

- Se o serviço escaneado for `2886` ou `A886`, é necessário uma conexão Bluetooth.  

### Conectar ao Bluetooth e Descobrir Serviços

- Após conectar, descubra todos os serviços e características.

- Localize o serviço UART com UUID:
`49535343-FE7D-4AE5-8FA9-9FAFD205E455`

- Dentro deste serviço, existem duas características principais:

|UUID da Característica|Finalidade|
|--|--|
|49535343-8841-43F4-A8D4-ECBE34729BB3| TX: Enviar comando|
|49535343-1E4D-4BD9-BA61-23C647249616| RX: Receber dados|

- ✅ Verificação de Sucesso do Comando

 Um comando AT bem-sucedido normalmente retorna:

 `\r\nok\r\n`, `\r\nOK\r\n`, ou `\r\nOk\r\n`

### Exemplo de Comando AT

**Exemplo**: Verificar as informações do dispositivo

**Comando:**

Envie o comando `AT+CONFIG=?\r\n` via `49535343-8841-43F4-A8D4-ECBE34729BB3`  

**Valor de retorno:**

A resposta estará no formato JSON:

```json
{
 "devMdl": "Tracker T1000-A",
 "deviceEui": "2C:F7:F1:C0:53:00:04:AD",
 "defEui": "2C:F7:F1:C0:53:00:04:AD",
 "appEui": "80:00:00:00:00:00:00:09",
 "version": {
  "sw_ver": "V2.5",
  "hw_ver": "V1.6",
  "LoRaWAN": "V1.0.4",
 },
 "classType": "A",
 "batPct": 38,
 "frequency": 8,
 "subBand": 1,
 "3c": 1,
 "joinType": 2,
 "appKey": "0E:32:B3:94:4E:B6:DA:55:E9:1C:75:77:98:57:62:CC",
 "nwkSkey": "0E:32:B3:94:4E:B6:DA:55:E9:1C:75:77:98:57:62:CC",
 "appSkey": "0E:32:B3:94:4E:B6:DA:55:E9:1C:75:77:98:57:62:CC",
 "devAddr": "00:00:00:00",
 "devCode": "FD:E1:AD:47:40:18:3A:92",
 "platform": 0,
 "devKey": "FD:E1:AD:47:40:18:3A:92:45:9B:05:82:05:BC:ED:25",
 "lrAdrEn": 1,
 "lrDrMin": 0,
 "lrDrMax": 4,
 "wkMode": 0,
 "posStrategy": 3,
 "posInt": 5,
 "hbInt": 6,
 "sosMode": 1,
 "cacheEn": 1,
 "senEn": 1,
 "illMin": 0,
 "illMax": 100,
 "illInt": 1,
 "illEvtEn": 0,
 "illEvtInt": 5,
 "illWarnType": 0,
 "tempMin": 50,
 "tempMax": 500,
 "tempInt": 2,
 "tempEvtEn": 1,
 "tempEvtInt": 2,
 "tempWarnType": 0,
 "staOt": 10,
 "motEvtEn": 0,
 "stcEvtEn": 0,
 "shkEvtEn": 0,
 "motThr": 30,
 "shkThr": 300,
 "motEvtInt": 5,
 "stcOt": 360,
 "evtPosInt": 2,
 "buzEn": 0,
 "beacOt": 3,
 "beacUuid": 
}
```
