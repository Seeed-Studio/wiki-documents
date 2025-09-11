---
description: LoRaWAN トラッカー Bluetooth AT コマンドの使用説明
title: LoRaWAN トラッカー Bluetooth AT コマンドの使用説明
keywords:
- トラッカー
- アプリ
image: https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/intro-e.webp
slug: /ja/tracker_at_command
sidebar_position: 3
last_update:
  date: 05/15/2025
  author: Jessie
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

この章では、Bluetooth AT コマンドの使用方法について簡単に説明し、Bluetooth 接続を確立し、Bluetooth AT コマンドを使用してデバイス情報を照会/設定する方法を説明します。

## 前提条件

- LoRaWAN ファームウェアを搭載した T1000-E デバイス。
- Bluetooth 4.0+ をサポートするスマートフォン。
- [LoRaWAN トラッカー AT コマンドリスト](https://files.seeedstudio.com/wiki/SenseCAP/LoraWAN_Tracker/LoRaWAN%20Tracker%20AT%20Command.pdf)
- モバイル開発フレームワーク（例: React Native + react-native-ble-plx）。

### BLE サービスとキャラクタリスティックの検出

アプリで BLE デバイスを検出およびフィルタリングするには：

* 近くの Bluetooth デバイスをスキャンします。
* スキャン結果を `["2886", "A886", "a6ed0701-d344-460a-8075-b9e8ec90d71b"]` でフィルタリングします。

* 必要に応じて、デバイスを広告名でフィルタリングします：

 `react-native-ble-plx` では、ローカル名は `(Device).localName` を介してアクセスできます。

 `localName` に `T1000` を含むデバイスのみを保持します。

### デバイスの状態を確認

* スキャンされたサービスが `2886` または `A886` の場合、Bluetooth 接続が必要です。

### Bluetooth に接続してサービスを検出

* 接続後、すべてのサービスとキャラクタリスティックを検出します。

* UUID が以下の UART サービスを見つけます：
`49535343-FE7D-4AE5-8FA9-9FAFD205E455`

* このサービス内には、以下の2つの重要なキャラクタリスティックがあります：

|キャラクタリスティック UUID|目的|
|--|--|
|49535343-8841-43F4-A8D4-ECBE34729BB3|	TX: コマンド送信|
|49535343-1E4D-4BD9-BA61-23C647249616|	RX: データ受信|

* ✅ コマンド成功の確認

 成功した AT コマンドは通常以下を返します：

 `\r\nok\r\n`, `\r\nOK\r\n`, または `\r\nOk\r\n`

### AT コマンドの例

**例**: デバイス情報を確認する

**コマンド:**

`49535343-8841-43F4-A8D4-ECBE34729BB3` を介して `AT+CONFIG=?\r\n` コマンドを送信します。

**戻り値:**

レスポンスは JSON 形式で返されます：

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