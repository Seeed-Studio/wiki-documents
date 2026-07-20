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
sidebar_position: 3
last_update:
  date: 07/15/2026
  author: Sizhao zhou
createdAt: '2026-07-15'
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/ja/recamera_pro_api_authentication/
---

# 認証

reCamera は JWT Token 認証を使用します。ログインに成功すると、デバイスは `Set-Cookie` レスポンスヘッダーを介して Token を返します。以降のリクエストでは、この Token を必ず付与する必要があります。

## エンドポイント概要

| メソッド | パス | 目的 | ログイン必須 |
|---|---|---|---|
| GET | `/system/key` | RSA 公開鍵の取得（パスワード変更用） | いいえ |
| POST | `/system/login` | ログインして Token を取得 | いいえ |
| GET | `/system/check` | 初回ログインかどうかを確認 | いいえ |
| PUT | `/system/password` | 管理者パスワードを変更 | はい |

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

| フィールド | 説明 |
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

| フィールド | 説明 |
|---|---|
| `iStatus` | `0` = パスワードが正しい、`-1` = パスワードが間違っている、`-3` = 一時的にロック中 |
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

Token が欠落しているか有効期限切れの場合、デバイスは次のように返します：

```json
{
  "code": 401,
  "message": "Unauthorized: Invalid token or NO token provided"
}
```

### ログインロックアウト

デバイスは IP ベースの失敗試行回数制限を実装しています。パスワードを繰り返し間違えると `iLoginAttempts` が増加します。上限に達すると、デバイスは `iStatus=-3` と `sWaittime` の値を返します。再試行する前に、ロックアウトが解除されるまで待つ必要があります。

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

| フィールド | 説明 |
|---|---|
| `sPublicKey` | RSA 公開鍵。パスワード変更時のパスワード暗号化に使用します |

### パスワードの暗号化

パスワードの SHA256 ハッシュを 16 進文字列として計算し、その後公開鍵を用いて RSA PKCS1v15 パディングで暗号化し、最後に結果を Base64 エンコードします。

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

| フィールド | 説明 |
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

| コード | 説明 |
|---:|---|
| `10001` | 新しいパスワードが弱すぎます |
| `10002` | Token の有効期限が切れています。再度ログインしてください |

パスワードを変更すると、現在の Token が無効になる場合があります。再度ログインして新しい Token を取得してください。

## テクニカルサポートと製品ディスカッション

当社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>