---
description: このページでは、API の概要として、ベースアドレス、プロトコル、認証方法について説明します。まずはこのページを確認し、全体像を把握してください。
title: はじめに
keywords:
  - Edge AI
  - reCamera Pro
  - API
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_api_introduction
sku: 10003420
sidebar_position: 1
last_update:
  date: 07/15/2026
  author: Sizhao zhou
createdAt: '2026-07-15'
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/ja/recamera_pro_api_introduction/
---

# はじめに

reCamera RV1126B は HTTP ベースの Web API を提供しており、デバイス情報の取得、システムパラメータの設定、ネットワーク管理、オーディオ・ビデオ制御、AI 推論の実行、ファイル管理、ファームウェア更新などを行うことができます。

## 基本情報

| 項目 | 説明 |
|---|---|
| デバイス IP | 既定値 `192.168.42.1`。実際のアドレスはネットワーク構成によって異なります |
| プロトコル | HTTP または HTTPS |
| ベースパス | `/cgi-bin/entry.cgi` |
| Content Type | `application/json` |
| 認証方式 | Cookie を介した JWT トークン |

## URL 構造

すべての CGI API エンドポイントは次の構造に従います：

```text
http://<DEVICE_IP>/cgi-bin/entry.cgi/<api_category>/<resource>/<sub_resource>
```

例えば、デバイス情報を取得するには次のようにします：

```text
http://192.168.42.1/cgi-bin/entry.cgi/system/device-info
```

一部のエンドポイントは CGI ベースパスを経由せず、シリアルポートやファイル API のように直接アクセスされます：

```text
http://<DEVICE_IP>/api/v1/device/serial-port
http://<DEVICE_IP>/api/v1/file?path=/mnt/sdcard/test.mp4
```

## ドキュメント概要

| ドキュメント | 内容 |
|---|---|
| クイックスタート | ログインして、ゼロから最初の API を呼び出す手順 |
| 認証 | ログインフロー、トークンの使用方法、パスワード変更 |
| 共通規約 | レスポンス形式、フィールド命名規則、エラーコード |
| API リファレンス | 機能別に整理された詳細なエンドポイント説明 |
| エラーコード | エラーコードリファレンス |
| FAQ | よくある質問 |


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
