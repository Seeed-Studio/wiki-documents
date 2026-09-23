---
description: WebUI ターミナル、SSH、または DEBUG UART シリアルコンソールを通じて reCamera Pro のコマンドラインにアクセスし、それぞれをいつ使うべきかを学びます。
title: ターミナル、SSH、Debug UART
keywords:
  - reCamera
  - reCamera Pro
  - terminal
  - SSH
  - UART
  - debugging
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_terminal
sku: 10003420
sidebar_position: 3
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/ja/recamera_pro_terminal/
---

# ターミナル、SSH、Debug UART

reCamera Pro では 3 つの方法でコマンドラインにアクセスでき、それぞれ異なる状況で役立ちます。

| 方法 | ネットワークが必要 | 使用シーン |
| --- | --- | --- |
| WebUI ターミナルコンソール | はい | ブラウザから素早く確認したいとき、追加ツールが不要なとき |
| SSH | はい | スクリプト実行、ファイル転送、長時間の開発セッション |
| DEBUG UART シリアルコンソール | いいえ | デバイスが起動しない、ネットワーク設定が誤っている、またはブートログが必要なとき |

## WebUI ターミナルコンソール

ターミナルコンソールを使うと、追加の SSH ツールなしで Web UI から直接 reCamera Pro のシステムターミナルにログインできます。

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_2dvKqObUbo.png" />

次のデフォルトアカウントでログインします。

```bash
Username: root
Password: recamera
```

同じ Web UI ページには、リアルタイムログの確認、フィルタリング、ダウンロードのためのシステムログビューも用意されています。詳しくは [Collect Logs](/ja/recamera_pro_collect_logs/) を参照してください。

## SSH

デバイスにネットワーク経由で到達できる場合、SSH は開発用として最も便利なアクセス方法です。ファイル転送（`scp`）、ポートフォワーディング、長時間のセッションをサポートします。同じネットワーク上のコンピュータから（USB 仮想 Ethernet のデフォルトアドレス `192.168.42.1`）:

```bash
ssh root@192.168.42.1
```

{/* TODO(verify): 標準の Buildroot ファームウェアにおける SSH のデフォルト認証情報（root ログインが WebUI ターミナルコンソールと同じパスワードかどうか）と、SSH が出荷時に有効かどうかを確認する */}

## DEBUG UART シリアルコンソール

DEBUG UART はデバッグ専用です。ネットワーク設定なしで動作し、ブート時の出力を表示するため、デバイスが起動しない場合や IP アドレスが不明な場合のリカバリ手段となります。

デバッグシリアルポートのボーレートは **1500000** で、ハードウェアインターフェース仕様は MX1.25 です。ピン配列は以下のとおりです。

![DEBUG_UART_PIN](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/DEBUG_UART_PIN.jpg)

### DEBUG UART を接続する

1. USB-シリアル変換器を用意します。変換器の TX をデバイスの RX ピンに、変換器の RX をデバイスの TX ピンに接続します。GND を接続することも忘れないでください。
2. デバイスの電源を入れると、変換器上にデバイスのデバッグ情報が表示されます。

![DEBUG_UART_SHOW](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/DEBUG_UART_SHOW.png)

:::note
シリアルツールのボーレートを 1500000 に設定してください。ボーレートが一致しないと文字化けした出力になります。
:::

{/* TODO(verify): 標準ファームウェアにおける DEBUG UART コンソールのログインアカウントと、WebUI ターミナルと同じ root 認証情報を受け付けるかどうかを確認する */}

## 関連ページ

- [UART Usage](/ja/recamera_pro_uart_usage/) — 拡張インターフェース上の 2 つ目のシリアルポートで、WebUI トリガーや AI 推論出力に使用されます
- [Collect Logs](/ja/recamera_pro_collect_logs/) — トラブルシューティングやサポートのためにログを収集します

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
