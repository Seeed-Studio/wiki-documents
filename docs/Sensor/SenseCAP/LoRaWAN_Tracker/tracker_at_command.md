---
description: LoRaWAN Tracker Bluetooth AT Command Instruction
title: LoRaWAN Tracker Bluetooth AT Command Instruction
keywords:
- Tracker
- App
image: https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/intro-e.webp
slug: /tracker_at_command
sidebar_position: 3
last_update:
  date: 4/15/2025
  author: Jessie
---

This chapter will briefly explain the use of Bluetooth AT commands, establish a Bluetooth connection and query/configure device information through the Blueooth AT commands.

## Prerequisites

- A T1000-E device with LoRaWAN firmware.
- Mobile phone with Bluetooth 4.0+ support.
- [LoRaWAN Tracker AT Command List](https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/LoRaWAN%20Tracker%20AT%20Command.pdf)
- Mobile development framework (e.g., React Native + react-native-ble-plx).

### Discover BLE Services and Characteristics

To discover and filter your BLE device in an app:

- Scan for nearby Bluetooth devices.
- Filter the scan results by `["2886", "A886", "a6ed0701-d344-460a-8075-b9e8ec90d71b"]`.

- Optionally, filter the device by its advertised name:

 In `react-native-ble-plx`, the local name can be accessed via `(Device).localName`.

 Keep only devices whose `localName` contains `T1000`.

### Check the device status

- If the scanned service is `2886` or `A886`, requires a Bluetooth connection.  

### Connect to Bluetooth and Discover Services

- After connecting, discover all services and characteristics.

- Locate the UART service with UUID:
`49535343-FE7D-4AE5-8FA9-9FAFD205E455`

- Within this service, there are two key characteristics:

|Characteristic UUID|Purpose|
|--|--|
|49535343-8841-43F4-A8D4-ECBE34729BB3| TX: Send command|
|49535343-1E4D-4BD9-BA61-23C647249616| RX: Receive data|

- ✅ Command Success Check

 A successful AT command typically returns:

 `\r\nok\r\n`, `\r\nOK\r\n`, or `\r\nOk\r\n`

### AT Command Example

**Example**: Check the device info

**Command:**

Send `AT+CONFIG=?\r\n` command via `49535343-8841-43F4-A8D4-ECBE34729BB3`  

**Return value:**

The response will be in JSON format:

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
