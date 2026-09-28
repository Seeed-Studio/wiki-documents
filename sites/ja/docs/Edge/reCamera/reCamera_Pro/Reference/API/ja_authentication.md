---
description: API を介してデバイスにログインする方法を紹介します。
title: 認証
keywords:
  - Edge AI
  - reCamera Pro
  - API
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_api_authentication
sku: 10003420
sidebar_position: 2
last_update:
  date: 09/21/2026
  author: Sizhao zhou
createdAt: '2026-07-15'
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/ja/recamera_pro_api_authentication/
---

# 認証

reCamera は JWT Token 認証を使用します。ログインに成功すると、デバイスは `Set-Cookie` レスポンスヘッダーを介して Token を返します。以降のリクエストでは、この Token を必ず付与する必要があります。

## エンドポイント概要

| Method | Path | 目的 | ログイン必須 |
|---|---|---|---|
| GET | `/system/key` | RSA 公開鍵の取得（パスワード変更用） | No |
| POST | `/system/login` | ログインして Token を取得 | No |
| GET | `/system/check` | 初回ログインかどうかを確認 | No |
| PUT | `/system/password` | 管理者パスワードを変更 | Yes |

## ログイン

### リクエスト

```text
POST /cgi-bin/entry.cgi/system/login
Content-Type: application/json
```

リクエストボディ：

```json
{
  "sUserName": "admin",
  "sPassword": "your_password"
}
```

| Field | 説明 |
|---|---|
| `sUserName` | ログインユーザー名。デフォルトは `admin` |
| `sPassword` | ログインパスワード。平文で送信されます |

### レスポンス

```json
{
  "iStatus": 0,
  "iAuth": 1,
  "sWaittime": 0
}
```

| Field | 説明 |
|---|---|
| `iStatus` | `0` = パスワード正しい、`-1` = パスワード誤り、`-3` = 一時ロック中 |
| `iAuth` | `1` = ログイン成功、`0` = ログイン失敗、`2` = パスワード変更が必要 |
| `sWaittime` | ロック時の待機時間（秒） |

### Token の取得

ログインに成功すると、レスポンスヘッダーに `Set-Cookie` が含まれます：

```text
Set-Cookie: token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXUyJ9...; Max-Age=86400; Path=/
```

Token の有効期間は `Max-Age` によって決まり、デフォルトは 86400 秒（24 時間）です。

### Token の使用

認証が必要なすべてのリクエストは、Cookie ヘッダーに Token を含める必要があります：

```text
Cookie: token=<JWT_TOKEN>
```

例えば、デバイス情報を取得するには：

```text
GET /cgi-bin/entry.cgi/system/device-info
Cookie: token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXUyJ9...
```

Token が欠落しているか期限切れの場合、デバイスは次のように返します：

```json
{
  "code": 401,
  "message": "Unauthorized: Invalid token or NO token provided"
}
```

### ログインロックアウト

デバイスは IP ベースの失敗回数制限を実装しています。誤ったパスワードを繰り返し入力すると `iLoginAttempts` が増加します。上限に達すると、デバイスは `iStatus=-3` と `sWaittime` の値を返します。再試行する前に、ロックアウトが解除されるまで待つ必要があります。

## 初回ログインの確認

```text
GET /cgi-bin/entry.cgi/system/check
```

レスポンス：

```json
{
  "bFirst": false
}
```

`bFirst=true` は、デバイスが初回ログインフローにあり、デフォルトパスワードを変更する必要があることを示します。

## パスワード変更

パスワードを変更するには、まず RSA 公開鍵を取得し、その公開鍵で旧パスワードと新パスワードを暗号化してから送信します。

### 公開鍵の取得

```text
GET /cgi-bin/entry.cgi/system/key
```

レスポンス：

```json
{
  "sPublicKey": "-----BEGIN RSA PUBLIC KEY-----\nMIIBCgKCAQEA...\n-----END RSA PUBLIC KEY-----"
}
```

| Field | 説明 |
|---|---|
| `sPublicKey` | RSA 公開鍵。パスワード変更時のパスワード暗号化に使用します |

### パスワードの暗号化

パスワードの SHA256 ハッシュを 16 進文字列として計算し、その値を公開鍵で RSA PKCS1v15 パディングを用いて暗号化し、最後にその結果を Base64 エンコードします。

### 変更の送信

```text
PUT /cgi-bin/entry.cgi/system/password
Content-Type: application/json
```

リクエストボディ：

```json
{
  "sUserName": "admin",
  "sOldPassword": "<encrypted_old_password>",
  "sNewPassword": "<encrypted_new_password>"
}
```

| Field | 説明 |
|---|---|
| `sUserName` | ユーザー名 |
| `sOldPassword` | 暗号化された旧パスワード |
| `sNewPassword` | 暗号化された新パスワード |

成功時のレスポンス：

```json
{
  "code": 0,
  "message": "success"
}
```

エラーコード：

| Code | 説明 |
|---:|---|
| `10001` | 新しいパスワードが弱すぎます |
| `10002` | Token の有効期限が切れています。再度ログインしてください |

パスワードを変更すると、現在の Token は無効になる場合があります。新しい Token を取得するために、再度ログインしてください。

## テクニカルサポートと製品ディスカッション

当社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>