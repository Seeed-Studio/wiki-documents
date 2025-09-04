---
description: Instrucciones de Comandos AT Bluetooth del Tracker LoRaWAN
title: Instrucciones de Comandos AT Bluetooth del Tracker LoRaWAN
keywords:
- Tracker
- App
image: https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/intro-e.webp
slug: /es/tracker_at_command
sidebar_position: 3
last_update:
  date: 4/15/2025
  author: Jessie
---

Este capítulo explicará brevemente el uso de comandos AT Bluetooth, establecer una conexión Bluetooth y consultar/configurar información del dispositivo a través de los comandos AT Bluetooth.


## Prerrequisitos

- Un dispositivo T1000-E con firmware LoRaWAN.
- Teléfono móvil con soporte Bluetooth 4.0+.
- [Lista de Comandos AT del Tracker LoRaWAN](https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/LoRaWAN%20Tracker%20AT%20Command.pdf)
- Framework de desarrollo móvil (ej., React Native + react-native-ble-plx).

### Descubrir Servicios y Características BLE

Para descubrir y filtrar tu dispositivo BLE en una aplicación:

* Escanear dispositivos Bluetooth cercanos.
* Filtrar los resultados del escaneo por `["2886", "A886", "a6ed0701-d344-460a-8075-b9e8ec90d71b"]`. 

* Opcionalmente, filtrar el dispositivo por su nombre anunciado:

 En `react-native-ble-plx`, el nombre local se puede acceder vía `(Device).localName`.

 Mantener solo dispositivos cuyo `localName` contenga `T1000`.

### Verificar el estado del dispositivo

* Si el servicio escaneado es `2886` o `A886`, requiere una conexión Bluetooth.  

### Conectar a Bluetooth y Descubrir Servicios

* Después de conectar, descubrir todos los servicios y características.


* Localizar el servicio UART con UUID:
`49535343-FE7D-4AE5-8FA9-9FAFD205E455` 

* Dentro de este servicio, hay dos características clave:

|UUID de Característica|Propósito|
|--|--|
|49535343-8841-43F4-A8D4-ECBE34729BB3|	TX: Enviar comando|
|49535343-1E4D-4BD9-BA61-23C647249616|	RX: Recibir datos|


* ✅ Verificación de Éxito del Comando

 Un comando AT exitoso típicamente retorna:

 `\r\nok\r\n`, `\r\nOK\r\n`, o `\r\nOk\r\n`


### Ejemplo de Comando AT

**Ejemplo**: Verificar la información del dispositivo


**Comando:**

Enviar comando `AT+CONFIG=?\r\n` vía `49535343-8841-43F4-A8D4-ECBE34729BB3`  


**Valor de retorno:**

La respuesta estará en formato JSON:


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