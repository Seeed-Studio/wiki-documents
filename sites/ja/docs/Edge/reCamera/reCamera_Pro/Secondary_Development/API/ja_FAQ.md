---
description: API 使用時に発生する可能性がある問題の概要。
title: FAQ
keywords:
  - Edge AI
  - reCamera Pro
  - API
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_api_faq
sku: 10003420
sidebar_position: 6
last_update:
  date: 07/15/2026
  author: Sizhao zhou
createdAt: '2026-07-15'
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/ja/recamera_pro_api_faq/
---

# FAQ

## ログイン

### ログインが iStatus=-1 を返します。どうすればよいですか？

パスワードが正しくありません。ユーザー名とパスワードが正しいことを確認してください。デフォルトのユーザー名は `admin` です。

### ログインが iStatus=-3 を返します。どうすればよいですか？

ログイン失敗が繰り返されたため、IP ベースのロックアウトが発生しています。ロックアウトが解除されるまで `sWaittime` 秒待ってから、再度お試しください。

### ログインは成功するが、その後の API が 401 を返します。どうすればよいですか？

Token が存在しないか、有効期限が切れています。リクエストヘッダーに `Cookie: token=<JWT_TOKEN>` が含まれていること、また Token の 24 時間の有効期間を超えていないことを確認してください。有効期限が切れている場合は、再度ログインしてください。

### Token の有効期間はどのくらいですか？

Token のデフォルトの有効期間は 24 時間です（`Max-Age=86400`）。有効期限が切れた後は、再度ログインして新しい Token を取得してください。

## ネットワーク

### ネットワーク設定を変更した後にデバイスへアクセスできなくなりました。どうすればよいですか？

IP アドレス、ゲートウェイ、または Wi-Fi パラメータを変更すると、デバイスのアドレスが変わる場合があります。新しいアドレス経由でデバイスにアクセスするか、直接ネットワーク接続で復旧してください。

### /network/wlan と /network/wifi の違いは何ですか？

`/network/wlan` は無線 IPv4 設定（アドレス、ゲートウェイ、マスク、DNS）のためのものです。`/network/wifi` は現在の Wi-Fi 接続情報の取得、接続、および切断のためのものです。

### Wi-Fi に接続する際、sSsid には何を指定すればよいですか？

`sSsid` は Wi-Fi ネットワークの一意の識別子です。まず `/network/wifi-list` を呼び出し、一覧から取得した `sBssid` の値を使用して接続してください。

## HTTPS

### HTTPS でアクセスすると、ブラウザが信頼されていない証明書だと警告します。どうすればよいですか？

デバイスは自己署名証明書を使用しています。ローカルでのテスト用途であれば、警告を無視して続行して構いません。本番環境で運用する場合は、信頼された証明書をインストールしてください。

### HTTPS を有効にした後、HTTP でデバイスにアクセスできません。どうすればよいですか？

HTTPS を有効にした後は、以降すべてのアクセスで `https://<DEVICE_IP>` を使用してください。

## API パス

### 一部のパスは /api/v1/ で始まり、他は /cgi-bin/ で始まるのはなぜですか？

ほとんどのエンドポイントは、CGI ベースパス `/cgi-bin/entry.cgi` を必要とします。シリアルポートおよびファイル関連のエンドポイントは、CGI レイヤーをバイパスする直接パスであり、`/api/v1/...` でアクセスします。

### エンドポイントが 404 を返すのはなぜですか？

現在のファームウェアバージョンでそのエンドポイントが実装されていないか、パスの構成が正しくない可能性があります。パスに `/cgi-bin/entry.cgi` が必要かどうかを確認し、ファームウェアバージョンも確認してください。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
