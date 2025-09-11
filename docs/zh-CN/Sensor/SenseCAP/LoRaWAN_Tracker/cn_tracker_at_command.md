---
description: LoRaWAN 追踪器蓝牙 AT 命令说明
title: LoRaWAN 追踪器蓝牙 AT 命令说明
keywords:
- Tracker
- App
image: https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/intro-e.webp
slug: /cn/tracker_at_command
sidebar_position: 3
last_update:
  date: 4/15/2025
  author: Jessie
---

本章将简要说明蓝牙 AT 命令的使用，建立蓝牙连接并通过蓝牙 AT 命令查询/配置设备信息。

## 前提条件

- 一台搭载 LoRaWAN 固件的 T1000-E 设备。
- 支持蓝牙 4.0+ 的手机。
- [LoRaWAN 追踪器 AT 命令列表](https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/LoRaWAN%20Tracker%20AT%20Command.pdf)
- 移动开发框架（例如，React Native + react-native-ble-plx）。

### 发现 BLE 服务和特征

要在应用程序中发现和过滤您的 BLE 设备：

- 扫描附近的蓝牙设备。
- 通过 `["2886", "A886", "a6ed0701-d344-460a-8075-b9e8ec90d71b"]` 过滤扫描结果。

- 可选择通过设备的广播名称过滤设备：

 在 `react-native-ble-plx` 中，本地名称可以通过 `(Device).localName` 访问。

 仅保留 `localName` 包含 `T1000` 的设备。

### 检查设备状态

- 如果扫描到的服务是 `2886` 或 `A886`，需要建立蓝牙连接。

### 连接蓝牙并发现服务

- 连接后，发现所有服务和特征。

- 定位 UUID 为以下的 UART 服务：
`49535343-FE7D-4AE5-8FA9-9FAFD205E455`

- 在此服务中，有两个关键特征：

|特征 UUID|用途|
|--|--|
|49535343-8841-43F4-A8D4-ECBE34729BB3| TX：发送命令|
|49535343-1E4D-4BD9-BA61-23C647249616| RX：接收数据|

- ✅ 命令成功检查

 成功的 AT 命令通常返回：

 `\r\nok\r\n`、`\r\nOK\r\n` 或 `\r\nOk\r\n`

### AT 命令示例

**示例**：检查设备信息

**命令：**

通过 `49535343-8841-43F4-A8D4-ECBE34729BB3` 发送 `AT+CONFIG=?\r\n` 命令

**返回值：**

响应将采用 JSON 格式：

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
