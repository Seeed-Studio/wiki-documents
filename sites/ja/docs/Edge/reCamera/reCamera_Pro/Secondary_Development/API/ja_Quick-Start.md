---
description: このページはクイックスタートガイドです。ログイン、Token の取得、最初の API 呼び出しという 3 ステップだけで動作させることができます。手順に従うだけで、すぐに使い始めることができます。
title: クイックスタート
keywords:
  - エッジ AI
  - reCamera Pro
  - API
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_api_quick_start
sku: 10003420
sidebar_position: 2
last_update:
  date: 07/15/2026
  author: Sizhao zhou
createdAt: '2026-07-15'
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/ja/recamera_pro_api_quick_start/
---

# クイックスタート

このページでは、ゼロの状態からログインを完了し、最初の API を呼び出すところまでを案内します。

## 前提条件

* デバイスの電源が入っており、ネットワークに接続されていること
* デバイスの IP アドレスを把握していること（このガイドでは例として `192.168.7.200` を使用します）
* ログイン用のユーザー名とパスワードを把握していること（デフォルトのユーザー名は `admin` です）

## ステップ 1: デバイスへアクセスできることを確認する

Web ブラウザで次の URL を開きます：

```text
https://192.168.7.200
```

デバイスで自己署名証明書付きの HTTPS が有効になっている場合、ブラウザは証明書が信頼されていないと警告します。ローカルでのテストであれば、この警告を無視して先に進んでも構いません。

## ステップ 2: ログインして Token を取得する

ログインエンドポイントには認証は不要です。デバイスにログインリクエストを送信します：

```text
POST https://192.168.7.200/cgi-bin/entry.cgi/system/login
Content-Type: application/json
```

リクエストボディ：

```json
{
  "sUserName": "admin",
  "sPassword": "your_password"
}
```

:::note
ログインパスワードは平文で送信されます。HTTPS が有効な場合、パスワードは送信中 TLS によって保護されます。
:::

成功すると、レスポンスは次のようになります：

```json
{
  "iStatus": 0,
  "iAuth": 1,
  "sWaittime": 0
}
```

| フィールド | 説明 |
|---|---|
| `iStatus` | `0` = パスワードが正しい、`-1` = パスワードが間違っている、`-3` = 失敗を繰り返したため一時的にロック中 |
| `iAuth` | `1` = ログイン成功、`0` = ログイン失敗、`2` = パスワード変更が必要 |
| `sWaittime` | ロックされている場合の待機時間（秒） |

レスポンスヘッダーには次の情報も含まれます：

```text
Set-Cookie: token=<JWT_TOKEN>; Max-Age=86400; Path=/
```

この `token` が、以降すべての API リクエストに対する認証情報となります。

## ステップ 3: Token を使って API を呼び出す

デバイス情報を取得します：

```text
GET https://192.168.7.200/cgi-bin/entry.cgi/system/device-info
Cookie: token=<JWT_TOKEN>
```

レスポンス：

```json
{
  "sSerialNumber": "RC1126B-20240101-001",
  "sFirmwareVersion": "V1.0.10",
  "sSensorModel": "SC850SL",
  "sBasePlateModel": "Base Board-V1.0,Expand Board-V1.0"
}
```

リクエストに Token が含まれていない、または Token の有効期限が切れている場合、デバイスは次のように返します：

```json
{
  "code": 401,
  "message": "Unauthorized: Invalid token or NO token provided"
}
```

## Token の有効期間

Token のデフォルトの有効期間は 24 時間です（`Max-Age=86400`）。有効期限が切れたら、再度ログインして新しい Token を取得してください。

## 次のステップ

* ログインおよびパスワード変更の詳細なリファレンスについては、[Authentication](https://wiki.seeedstudio.com/ja/recamera_pro_api_authentication) を参照してください
* レスポンス形式やフィールド命名規則については、[Common Conventions](https://wiki.seeedstudio.com/ja/recamera_pro_api_common_conventions) を参照してください
* 機能別に整理されたエンドポイントの説明については、[API Reference](https://wiki.seeedstudio.com/ja/recamera_pro_api_reference) を参照してください

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
