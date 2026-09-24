---
description: 一般的な reCamera Pro Web API の障害（ログインエラー、トークンの有効期限切れ、ネットワーク変更、HTTPS 証明書、API パスの問題）を診断して解決します。
title: API 呼び出しのトラブルシューティング
keywords:
  - Edge AI
  - reCamera Pro
  - API
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_api_faq
sku: 10003420
sidebar_position: 3
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/ja/recamera_pro_api_faq/
---

# API 呼び出しのトラブルシューティング

## ログイン

### ログインが iStatus=-1 を返します。どうすればよいですか？

パスワードが正しくありません。ユーザー名とパスワードが正しいことを確認してください。デフォルトのユーザー名は `admin` です。

### ログインが iStatus=-3 を返します。どうすればよいですか？

繰り返しログインに失敗したため、IP ベースのロックアウトが発生しています。ロックアウトが解除されるまで `sWaittime` 秒待ってから、再度お試しください。

### ログインは成功するが、その後の API が 401 を返します。どうすればよいですか？

Token が存在しないか、有効期限が切れています。リクエストヘッダーに `Cookie: token=<JWT_TOKEN>` が含まれていること、また Token が 24 時間の有効期間を超えていないことを確認してください。有効期限切れの場合は、再度ログインしてください。

### Token の有効期間はどのくらいですか？

Token はデフォルトで 24 時間有効です（`Max-Age=86400`）。有効期限が切れた後は、再度ログインして新しい Token を取得してください。

## ネットワーク

### ネットワーク設定を変更した後にデバイスへアクセスできなくなりました。どうすればよいですか？

IP アドレス、ゲートウェイ、または Wi-Fi パラメータを変更すると、デバイスのアドレスが変わる場合があります。新しいアドレス経由でデバイスにアクセスするか、直接ネットワーク接続で復旧してください。

### /network/wlan と /network/wifi の違いは何ですか？

`/network/wlan` は無線 IPv4 設定（アドレス、ゲートウェイ、マスク、DNS）用です。`/network/wifi` は現在の Wi-Fi 接続情報の取得、接続、切断用です。

### Wi-Fi に接続する際、sSsid には何を指定すればよいですか？

`sSsid` は Wi-Fi ネットワークの一意の識別子です。まず `/network/wifi-list` を呼び出し、一覧から `sBssid` の値を使用して接続してください。

## HTTPS

### HTTPS でアクセスすると、ブラウザが信頼されていない証明書だと警告します。どうすればよいですか？

デバイスは自己署名証明書を使用しています。ローカルテストでは、警告を無視して続行して構いません。本番環境での運用では、信頼された証明書をインストールしてください。

### HTTPS を有効にした後、HTTP でデバイスにアクセスできません。どうすればよいですか？

HTTPS を有効にした後は、以降のアクセスにはすべて `https://<DEVICE_IP>` を使用してください。

## API パス

### 一部のパスは /api/v1/ で始まり、他は /cgi-bin/ で始まるのはなぜですか？

ほとんどのエンドポイントは、CGI ベースパス `/cgi-bin/entry.cgi` を必要とします。シリアルポートおよびファイル関連のエンドポイントは CGI レイヤーをバイパスする直接パスであり、`/api/v1/...` でアクセスします。

### エンドポイントが 404 を返すのはなぜですか？

現在のファームウェアバージョンでそのエンドポイントが実装されていないか、パスの構成が正しくない可能性があります。パスに `/cgi-bin/entry.cgi` が必要かどうかを確認し、ファームウェアバージョンをチェックしてください。

レスポンスステータスコードの完全な一覧については、[API Error Codes](/ja/recamera_pro_api_error_codes/) を参照してください。API の一般的な使い方については、まず [API Introduction](/ja/recamera_pro_api_introduction/) から始めてください。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
