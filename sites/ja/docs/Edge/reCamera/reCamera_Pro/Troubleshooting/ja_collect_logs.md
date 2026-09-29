---
description: reCamera Pro からシステムログ、ファームウェアバージョン、およびデバイス情報を収集して、トラブルシューティングやテクニカルサポート依頼に役立てる方法。
title: サポート用ログの収集
keywords:
  - reCamera
  - reCamera Pro
  - logs
  - troubleshooting
  - support
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_collect_logs
sku: 10003420
sidebar_position: 2
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/ja/recamera_pro_collect_logs/
---

# サポート用ログの収集

[Troubleshoot by symptom](/ja/recamera_pro_faqs/) を実行しても問題が解決しない場合、次のステップとしてログとデバイス情報を収集します。サポートからは次の情報が求められます：

1. **ファームウェアバージョンと基本的なデバイス情報** — デバイスで動作している内容。
2. **システムログ** — 問題が発生したときにデバイスが何をしていたか。
3. **再現手順** — 問題を確実に再現する方法。

{/* TODO(verify): confirm whether the device or WebUI offers a one-click "export support bundle" feature on current firmware, and document it here if available. */}

## 1. ファームウェアバージョンと基本的なデバイス情報

左側のナビゲーションバーで **Device Info** を開きます：

- **Basic Information** — ハードウェア／ソフトウェアのバージョン情報とシステムリソース使用状況。
- **System Settings** — 現在のファームウェアバージョン。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_aWZqM1cZvA.png" />

次の項目を記録し、サポート依頼に含めてください：

| 項目 | 確認場所 |
| --- | --- |
| ファームウェアバージョン | Device Info → System Settings |
| ハードウェアモデル / SKU | Basic Information |
| ソフトウェアバージョン | Basic Information |
| システムリソース使用状況（CPU、メモリ、ストレージ） | Basic Information |

## 2. システムログ

左側のナビゲーションバーで **Terminal** を開き、**System Log** エリアに切り替えます。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/20260708190224_6_2.png" />

ここから次のことができます：

- システムログ出力をリアルタイムで表示。
- ログレベルやキーワードでログをフィルタリング。
- 現在の表示をクリア。
- **ログファイルをダウンロード** — これがサポートに必要なものです。

### ログで取得すべき内容

- システムログをストリーミングしながら問題を再現します。
- 問題が発生した**直後に**ログをダウンロードし、関連するエントリがバッファ内に残っているようにします。
- 問題が断続的に発生する場合は、発生のたびにログをダウンロードし、それぞれのイベントのタイムスタンプをメモします。

## 3. ターミナルコンソール（上級ユーザー向け・任意）

Terminal 内の **Terminal console** を使うと、別途 SSH ツールを用意しなくても、Web UI から直接 reCamera Pro のシステムシェルにログインできます。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_2dvKqObUbo.png" />

ターミナルコンソールのデフォルト認証情報：

```
Username: root
Password: recamera
```

:::caution
ターミナルコンソールはシステムへのフルアクセスを提供します。理解しているコマンドのみを実行し、サポートから指示がない限りシステムファイルを変更しないでください。

{/* TODO(verify): confirm whether the default terminal password is still `recamera` on current firmware, and whether changing the WebUI admin password also changes the terminal root password. */}
:::

Connection Settings で [enabled SSH](/ja/recamera_pro_device_info/) を有効にしている場合、SSH 経由で接続してログを収集することもできます。これは WebUI 自体が応答しない場合に便利です。

## 4. 再現手順

サポートからは、どのように問題を発生させるかを尋ねられます。次の内容を書き留めてください：

- 問題が発生したときに何をしていたか（例：モデルのアップロード、録画の開始、Wi-Fi への接続など）。
- 期待していた動作と、実際に起きたことの違い。
- 問題が再現可能か、断続的か、1 回限りか。
- ファームウェアバージョンと、最近の変更内容（モデルのアップロード、設定のインポート、ファームウェアの更新など）。

## サポートへの提出

完全なサポート依頼には次の内容が含まれます：

| 項目 | 取得元 |
| --- | --- |
| ファームウェアバージョン | 手順 1 |
| 基本デバイス情報のスクリーンショット | 手順 1 |
| ダウンロードしたシステムログファイル | 手順 2 |
| 再現手順 | 手順 4 |

これらをチケット作成時に添付してください。最初に提供される情報が充実しているほど、問題解決は早くなります。

## テクニカルサポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
