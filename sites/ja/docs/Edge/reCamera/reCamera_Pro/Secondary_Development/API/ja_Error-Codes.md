---
description: API が返すエラーコードを紹介します。
title: エラーコード
keywords:
  - Edge AI
  - reCamera Pro
  - API
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_api_error_codes
sku: 10003420
sidebar_position: 5
last_update:
  date: 07/15/2026
  author: Sizhao zhou
createdAt: '2026-07-15'
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/ja/recamera_pro_api_error_codes/
---

# エラーコード

## エラーコードの区分

エラーコードは機能モジュールごとに区分されています：

| Prefix | モジュール |
|---|---|
| `100xx` | デバイス & システム |
| `200xx` | ライブビュー |
| `300xx` | 録画 |
| `400xx` | AI 推論 |
| `500xx` | ターミナル & ログ |

## デバイス & システム (100xx)

| Code | 説明 |
|---:|---|
| `10001` | パスワードが弱すぎます |
| `10002` | Token の有効期限が切れています |
| `10003` | ファームウェアのダウンロードがすでに進行中です |
| `10004` | ポート番号が範囲外です |
| `10005` | ポート番号はすでに使用されています |

## HTTP ステータスコード

| HTTP Status | 説明 |
|---:|---|
| `200` | リクエスト成功 |
| `401` | 未認証、または Token が無効です |
| `404` | エンドポイントが見つかりません |
| `405` | 許可されていないメソッドです |
| `500` | サーバー内部エラー |

## 認証エラー

リクエストに Token が含まれていない、または Token の有効期限が切れている場合、デバイスは次のように返します：

```json
{
  "code": 401,
  "message": "Unauthorized: Invalid token or NO token provided"
}
```

解決方法：再度ログインして新しい Token を取得し、その後のリクエストに `Cookie: token=<JWT_TOKEN>` を含めてください。

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
