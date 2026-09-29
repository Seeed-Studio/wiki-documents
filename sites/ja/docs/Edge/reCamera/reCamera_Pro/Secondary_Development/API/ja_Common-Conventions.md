---
description: このページでは、すべてのインターフェースに共通するルール（レスポンス形式、フィールド命名規則、URL の連結方法など）について説明します。まずこのページを読むことを推奨します。そうすることで、後から個別のインターフェースを確認する際に、このページへ頻繁に戻って参照する必要がなくなります。
title: 共通規約
keywords:
  - Edge AI
  - reCamera Pro
  - API
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_api_common_conventions_legacy
draft: true
sku: 10003420
sidebar_position: 4
last_update:
  date: 07/15/2026
  author: Sizhao zhou
createdAt: '2026-07-15'
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/ja/recamera_pro_api_common_conventions_legacy/
---
<!-- LEGACY PAGE (reCamera Pro wiki restructure, phase 2): this page has been superseded by Reference/API/common_conventions.md (https://wiki.seeedstudio.com/ja/recamera_pro_api_common_conventions/), which now serves the original slug /recamera_pro_api_common_conventions. This file is kept for history as a draft (slug /recamera_pro_api_common_conventions_legacy) and is excluded from production builds. Do not link here. -->

# 共通規約

## レスポンス形式

### 読み取りエンドポイント

読み取りエンドポイント（GET）は通常、`code` フィールドを含まず、ビジネスデータオブジェクトを直接返します。例：

```json
{
  "sSerialNumber": "RC1126B-20240101-001",
  "sFirmwareVersion": "V1.0.10"
}
```

### 操作エンドポイント

操作エンドポイント（POST、PUT、DELETE）は、`code` と `message` を含むオブジェクトを返します：

```json
{
  "code": 0,
  "message": "success"
}
```

`code=0` は成功を意味します。0 以外の `code` はエラーを示し、`message` に説明が含まれます。

### エラーレスポンス

リクエストが失敗した場合、デバイスは次のように返します：

```json
{
  "code": 401,
  "message": "Unauthorized: Invalid token or NO token provided"
}
```

## フィールド命名

JSON フィールド名には camelCase を使用します。先頭の文字はデータ型を表します：

| プレフィックス | 型 | 例 |
|---|---|---|
| `i` | 整数 | `iCpuUsage` |
| `f` | 浮動小数点数 | `fTemperature` |
| `s` | 文字列 | `sSerialNumber` |
| `b` | ブール値 | `bRunning` |
| `l` | リスト | `lDetection` |
| `d` | オブジェクト | `dIpv4` |

## URL 構築

### CGI エンドポイント

ほとんどのエンドポイントでは、CGI ベースパスが必要です：

```text
http://<DEVICE_IP>/cgi-bin/entry.cgi/<API_PATH>
```

### 直接パスのエンドポイント

一部のエンドポイントは CGI レイヤーを経由せず、直接アクセスされます：

```text
http://<DEVICE_IP>/api/v1/device/serial-port
http://<DEVICE_IP>/api/v1/file?path=/mnt/sdcard/test.mp4
```

## 認証

一部の例外（`/system/key`、`/system/login`、`/system/check`）を除き、すべてのエンドポイントはリクエストヘッダーに Token を含める必要があります：

```text
Cookie: token=<JWT_TOKEN>
```

Token の取得方法については、[Authentication](https://wiki.seeedstudio.com/ja/recamera_pro_api_authentication) を参照してください。

## エラーコード

エラーコードは機能モジュールごとに分割されています：

| プレフィックス | モジュール |
|---|---|
| `100xx` | デバイス & システム |
| `200xx` | ライブビュー |
| `300xx` | 録画 |
| `400xx` | AI 推論 |
| `500xx` | ターミナル & ログ |

一般的なエラーコード：

| コード | 説明 |
|---:|---|
| `10001` | パスワードが弱すぎます |
| `10002` | Token の有効期限が切れています |
| `10003` | ファームウェアのダウンロードがすでに進行中です |
| `10004` | ポート番号が範囲外です |
| `10005` | ポート番号はすでに使用中です |

完全な一覧については、[Error Codes](https://wiki.seeedstudio.com/ja/recamera_pro_api_error_codes) を参照してください。

## テクニカルサポートと製品ディスカッション

当社製品をお選びいただきありがとうございます。お客様が当社製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただけるよう、複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
