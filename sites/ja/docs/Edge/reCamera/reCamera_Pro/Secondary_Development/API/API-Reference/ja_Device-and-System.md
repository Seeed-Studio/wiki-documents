---
description: 機器およびシステムの基本的な API を紹介します。
title: デバイスとシステム
keywords:
  - Edge AI
  - reCamera Pro
  - API
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_api_device-and-system
sku: 10003420
sidebar_position: 1
last_update:
  date: 07/15/2026
  author: Sizhao zhou
createdAt: '2026-07-15'
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/ja/recamera_pro_api_device-and-system/
---

# デバイス & システム

## エンドポイント概要

| Method | Path | 目的 |
|---|---|---|
| GET | `/system/device-info` | デバイスのシリアル番号、ファームウェアバージョン、センサーボードおよびベースボードのモデルを取得 |
| GET | `/system/resource-info` | CPU、NPU、メモリ、ストレージの使用状況を取得 |
| GET | `/system/time` | システム時刻、タイムゾーン、NTP 設定を取得 |
| PUT | `/system/time` | システム時刻を設定 |
| GET | `/system/battery` | バッテリー状態を取得 |
| GET | `/system/check` | 初回ログインかどうかを確認 |
| GET | `/system/ssh` | SSH の動作状態を照会 |
| POST | `/system/ssh` | SSH を開始または停止 |
| GET | `/system/secure` | HTTPS 状態を照会 |
| POST | `/system/secure` | HTTPS を有効化または無効化 |
| GET | `/config/export` | デバイス設定をエクスポート |
| POST | `/config/upload` | デバイス設定をインポート |
| POST | `/system/reboot` | デバイスを再起動 |
| POST | `/system/factory-reset` | 工場出荷時設定に復元 |

## デバイス情報の取得

```text
GET /system/device-info
```

レスポンス:

```json
{
  "sSerialNumber": "RC1126B-20240101-001",
  "sFirmwareVersion": "V1.0.10",
  "sSensorModel": "SC850SL",
  "sBasePlateModel": "Base Board-V1.0,Expand Board-V1.0"
}
```

| Field | 説明 |
|---|---|
| `sSerialNumber` | デバイスのシリアル番号 |
| `sFirmwareVersion` | ファームウェアバージョン |
| `sSensorModel` | センサーボードのモデル |
| `sBasePlateModel` | ベースボードのモデル |

## システムリソース状態の取得

```text
GET /system/resource-info
```

レスポンス:

```json
{
  "iCpuUsage": 12,
  "iNpuUsage": 69,
  "sMem": {
    "iMemTotal": 1.94,
    "iMemUsage": 33,
    "iMemUsed": 0.65
  },
  "sStorage": {
    "iStorageTotal": 11.29,
    "iStorageUsage": 37,
    "iStorageUsed": 4.22
  }
}
```

| Field | 説明 |
|---|---|
| `iCpuUsage` | CPU 使用率（パーセンテージ） |
| `iNpuUsage` | NPU 使用率（パーセンテージ） |
| `sMem.iMemTotal` | メモリ総量 |
| `sMem.iMemUsed` | 使用中メモリ量 |
| `sMem.iMemUsage` | メモリ使用率（パーセンテージ） |
| `sStorage.iStorageTotal` | ストレージ総容量 |
| `sStorage.iStorageUsed` | 使用中ストレージ容量 |
| `sStorage.iStorageUsage` | ストレージ使用率（パーセンテージ） |

## システム時刻

### システム時刻の取得

```text
GET /system/time
```

レスポンス:

```json
{
  "sMethod": "ntp",
  "dNtpConfig": {
    "sAddress": "pool.ntp.org",
    "sPort": "123",
    "status": 0
  },
  "iTimestamp": 1784083074,
  "sTimezone": "Asia/Shanghai",
  "sTz": "UTC+8"
}
```

| Field | 説明 |
|---|---|
| `sMethod` | 時刻ソース。`ntp` または `manual` |
| `dNtpConfig.sAddress` | NTP サーバーアドレス |
| `dNtpConfig.sPort` | NTP ポート |
| `dNtpConfig.status` | NTP ステータス。`0` は成功を意味します |
| `iTimestamp` | 秒単位の Unix タイムスタンプ |
| `sTimezone` | タイムゾーンの都市名 |
| `sTz` | タイムゾーン（例：`UTC+8`） |

### システム時刻の設定

```text
PUT /system/time
```

NTP モードのリクエストボディ:

```json
{
  "sMethod": "ntp",
  "dNtpConfig": {
    "sAddress": "pool.ntp.org",
    "sPort": "123"
  },
  "sTimezone": "Asia/Shanghai",
  "sTz": "UTC+8"
}
```

手動モードのリクエストボディ:

```json
{
  "sMethod": "manual",
  "iTimestamp": 1784083074,
  "sTimezone": "Asia/Shanghai",
  "sTz": "UTC+8"
}
```

レスポンス:

```json
{
  "iTimestamp": 1784083074,
  "sTimezone": "Asia/Shanghai",
  "sTz": "UTC+8"
}
```

## バッテリー状態

```text
GET /system/battery
```

レスポンス:

```json
{
  "isAttached": true,
  "displaySteps": 0,
  "totalSteps": 5,
  "isCharging": false
}
```

| Field | 説明 |
|---|---|
| `isAttached` | バッテリーが接続されているかどうか |
| `displaySteps` | 現在のバッテリーレベルのステップ数 |
| `totalSteps` | バッテリーレベルの総ステップ数 |
| `isCharging` | バッテリーが充電中かどうか |

## 初回ログインの確認

```text
GET /system/check
```

レスポンス:

```json
{
  "bFirst": false
}
```

`bFirst=true` は、デバイスが初回ログインフロー中であり、デフォルトパスワードを変更する必要があることを示します。

## SSH

### SSH 状態の照会

```text
GET /system/ssh
```

レスポンス:

```json
{
  "bRunning": true
}
```

### SSH の開始または停止

```text
POST /system/ssh
```

リクエストボディ:

```json
{
  "bRunning": true
}
```

| Field | 説明 |
|---|---|
| `bRunning` | SSH を開始する場合は `true`、停止する場合は `false` |

## HTTPS

### HTTPS 状態の照会

```text
GET /system/secure
```

レスポンス:

```json
{
  "sEnable": true
}
```

### HTTPS の有効化または無効化

```text
POST /system/secure
```

リクエストボディ:

```json
{
  "sEnable": true
}
```

レスポンス:

```json
{
  "code": 0,
  "message": "Settings applied successfully"
}
```

HTTPS を有効化した後は、以降のアクセスに `https://<DEVICE_IP>` を使用してください。

## 設定管理

### 設定のエクスポート

```text
GET /config/export
```

レスポンス:

```json
{
  "size": 35116544,
  "url": "/download/config.tar"
}
```

| Field | 説明 |
|---|---|
| `size` | 設定ファイルサイズ |
| `url` | ダウンロードパス。完全な URL にするにはデバイス IP を前に付加します |

ダウンロード URL:

```text
http://<DEVICE_IP>/download/config.tar
```

### 設定のインポート

```text
POST /config/upload
```

設定をインポートすると、現在のデバイス設定は上書きされます。事前に現在の設定をエクスポートしてバックアップを作成してください。

## 再起動

```text
POST /system/reboot
```

レスポンス:

```json
{
  "code": 0,
  "message": "success"
}
```

デバイスは再起動し、現在の接続は切断されます。続行する前に、デバイスがオンラインに戻るまでお待ちください。

## 工場出荷時設定へのリセット

工場出荷時設定へのリセットには 2 段階の確認が必要です。

ステージ 1:

```text
POST /system/factory-reset
```

レスポンス:

```json
{
  "code": 0,
  "sConfirmToken": "adfagghvshf"
}
```

ステージ 2: 有効期限内に確認トークンを送信します:

```text
POST /system/factory-reset
```

リクエストボディ:

```json
{
  "sConfirmToken": "adfagghvshf"
}
```

レスポンス:

```json
{
  "code": 0,
  "message": "success"
}
```

工場出荷時設定へのリセットを行うと、デバイスのすべての設定が消去されます。実行する前に必ずバックアップを取得してください。


## テクニカルサポートと製品ディスカッション

当社製品をお選びいただきありがとうございます。お客様が当社製品をスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>