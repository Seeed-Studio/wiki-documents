---
description: Network の基本 API を紹介します。
title: Network
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
url: https://wiki.seeedstudio.com/ja/recamera_pro_api_network/
---

# Network

## エンドポイント概要

| Method | Path | 目的 |
|---|---|---|
| GET | `/network/lan` | 有線ネットワーク設定を取得 |
| PUT | `/network/lan` | 有線ネットワーク設定を構成 |
| GET | `/network/wlan` | 無線 IPv4 設定を取得 |
| PUT | `/network/wlan` | 無線 IPv4 設定を構成 |
| GET | `/network/wifi` | 現在の Wi-Fi 接続情報を取得 |
| GET | `/network/wifi-status` | Wi-Fi 電源状態を取得 |
| POST | `/network/wifi-status?power=on/off` | Wi-Fi 電源を切り替え |
| GET | `/network/wifi-list` | 近くの Wi-Fi ネットワークをスキャン |
| POST | `/network/wifi` | Wi-Fi に接続 |
| DELETE | `/network/wifi` | Wi-Fi から切断または削除 |
| GET | `/web/setting` | HTTP API 設定を取得 |
| POST | `/web/setting` | HTTP API 設定を構成 |
| GET | `/ftp/setting` | FTP サービス設定を取得 |
| POST | `/ftp/setting` | FTP サービス設定を構成 |

## LAN および WLAN 設定

### 設定を取得

```text
GET /network/lan
GET /network/wlan
```

レスポンス:

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

| Field | 説明 |
|---|---|
| `dIpv4.sV4Address` | IPv4 アドレス |
| `dIpv4.sV4Gateway` | IPv4 ゲートウェイ |
| `dIpv4.sV4Method` | IP 割り当て方法。`dhcp` または `static` |
| `dIpv4.sV4Netmask` | IPv4 サブネットマスク |
| `dLink.sDNS1` / `dLink.sDNS2` | DNS サーバー |
| `dLink.sAddress` | MAC アドレス |
| `dLink.sInterface` | ネットワークインターフェース名（例：`eth0` または `wlan0`） |
| `dLink.iPower` | インターフェースの電源状態 |
| `dLink.bEnableMethod` | 手動設定が有効かどうか |

### 設定を構成

```text
PUT /network/lan
PUT /network/wlan
```

リクエストボディ:

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

レスポンス:

```json
{
  "code": 0,
  "message": "SUCCESS TO SET IP"
}
```

## 現在の Wi-Fi 情報

```text
GET /network/wifi
```

レスポンス構造は LAN/WLAN 設定と同じです。

## Wi-Fi 電源

### Wi-Fi 電源状態を取得

```text
GET /network/wifi-status
```

レスポンス:

```json
{
  "iPower": 1,
  "id": 1,
  "sType": "wifi"
}
```

| Field | 説明 |
|---|---|
| `iPower` | Wi-Fi 電源状態。`1` はオン、`0` はオフ |
| `id` | インターフェース ID |
| `sType` | インターフェース種別 |

### Wi-Fi 電源を切り替え

```text
POST /network/wifi-status?power=on
POST /network/wifi-status?power=off
```

| Parameter | Value | 説明 |
|---|---|---|
| `power` | `on`, `off` | Wi-Fi をオンまたはオフにする |

## Wi-Fi スキャンと接続

### Wi-Fi リストをスキャン

```text
GET /network/wifi-list
```

レスポンス:

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

| Field | 説明 |
|---|---|
| `sBssid` | Wi-Fi BSSID。接続時の一意識別子として使用 |
| `sSsid` | Wi-Fi ネットワーク名 |
| `iFrequency` | 周波数チャネル |
| `iRssi` | 信号強度 |
| `sFlags` | セキュリティ種別 |
| `sConnected` | 現在接続中かどうか |
| `sReserved` | パスワードが保存されているかどうか |

### Wi-Fi に接続

```text
POST /network/wifi
```

リクエストボディ:

```json
{
  "sSsid": "58:b4:bb:93:b8:e3",
  "sPassword": "your_wifi_password"
}
```

| Field | 説明 |
|---|---|
| `sSsid` | Wi-Fi の一意識別子。`/network/wifi-list` の `sBssid` の値を使用 |
| `sPassword` | Wi-Fi パスワード |

レスポンス:

```json
{
  "code": 0,
  "message": ""
}
```

### Wi-Fi の切断または削除

```text
DELETE /network/wifi?disconnect=<ssid>
DELETE /network/wifi?Ignore=<ssid>
```

| Parameter | 説明 |
|---|---|
| `disconnect` | 指定した Wi-Fi から切断 |
| `Ignore` | 指定した Wi-Fi を削除 |

レスポンス:

```json
{
  "code": 0,
  "message": "",
  "status": 0
}
```

| `status` | 説明 |
|---:|---|
| `0` | 成功 |
| `-1` | タイムアウト |
| `-2` | パスワードが間違っています |

## HTTP API 設定

### 設定を取得

```text
GET /web/setting
```

レスポンス:

```json
{
  "sEnable": true,
  "sApiKey": "M8RZVF3hXrVDk*%2%LlN*^7nuCRHPiIT"
}
```

| Field | 説明 |
|---|---|
| `sEnable` | HTTP API が有効かどうか |
| `sApiKey` | API キー |

### 設定を構成

```text
POST /web/setting
```

リクエストボディ:

```json
{
  "sEnable": true,
  "sApiKey": "your_api_key"
}
```

## FTP サービス設定

### 設定を取得

```text
GET /ftp/setting
```

レスポンス:

```json
{
  "sEnable": false,
  "sFtpPassword": "Seeed123.",
  "sFtpPort": "21",
  "sFtpUser": "ftpuser"
}
```

| Field | 説明 |
|---|---|
| `sEnable` | FTP サービスが有効かどうか |
| `sFtpPort` | FTP ポート |
| `sFtpUser` | FTP ユーザー名 |
| `sFtpPassword` | FTP パスワード |

### 設定を構成

```text
POST /ftp/setting
```

リクエストボディ:

```json
{
  "sEnable": true,
  "sFtpPort": "21",
  "sFtpUser": "ftpuser",
  "sFtpPassword": "StrongPassword123!"
}
```


## マルチキャスト

```text
GET /network/muticast
```

:::note
このエンドポイントはデバイス API テーブルに記載されています。現在のファームウェアが対応していない場合、デバイスは 404 または API Not Found レスポンスを返すことがあります。
:::

エラーコード:

| Code | 説明 |
|---:|---|
| `10001` | FTP パスワードが弱すぎます |
| `10004` | FTP ポートが許可範囲外です |
| `10005` | FTP ポートがすでに使用されています |


## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>