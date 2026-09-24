---
title: reCamera Pro FAQ
description: この記事では、reCamera Pro でよくある問題とその解決策をまとめています。WebUI でビデオストリームをプレビューできない、モデルのアップロードによってシステムがフリーズするなどの問題を、素早く特定して解決できるよう支援します。
keywords:
  - reCamera Pro
  - FAQ
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_faqs_legacy
draft: true
sku: 10003420
sidebar_position: 1
last_update:
  date: 2026-08-05
  author: Sizhaozhou
createdAt: '2026-08-05'
updatedAt: '2026-08-05'
url: https://wiki.seeedstudio.com/ja/recamera_pro_faqs_legacy/
---
<!-- LEGACY PAGE (reCamera Pro wiki restructure, phase 2): this page has been superseded by Troubleshooting/troubleshooting.md (https://wiki.seeedstudio.com/ja/recamera_pro_faqs/), which now serves the original slug /recamera_pro_faqs. This file is kept for history as a draft (slug /recamera_pro_faqs_legacy) and is excluded from production builds. Do not link here. -->

## コンテンツ移行インデックス（レガシーページ）

| 元のセクション | 新しい場所 |
| --- | --- |
| Q1 Wi-Fi 接続エラー / ビデオプレビュー不可 | [トラブルシューティング](https://wiki.seeedstudio.com/ja/recamera_pro_faqs/)（このスラッグ） |
| Q2 FP16 モデルのアップロードで Web UI がフリーズする | [トラブルシューティング](https://wiki.seeedstudio.com/ja/recamera_pro_faqs/)、[モデルの検証](https://wiki.seeedstudio.com/ja/recamera_pro_model_validate/) |

# reCamera Pro FAQ


## 1. WebUI が繰り返し Wi-Fi 接続エラーを表示し、ビデオストリームをプレビューできない

**症状**：WebUI 画面に Wi-Fi 接続エラーが繰り返し表示され、ビデオストリームを正常にプレビューできません。

**解決方法**：

- まず、デバイスに正しく電源が供給されているか確認してください。
- Type-C インターフェースで給電する場合は、必ず PD プロトコルに対応した電源アダプタを使用してください。
- 安定した電源供給を確保するため、工場出荷時に付属している DC 電源ケーブルでの給電を推奨します。

## 2. FB16 精度モデルのアップロードで WebUI がフリーズする

**症状**：V1.1.1 以前のバージョンでは、FB16 精度モデルをアップロードするとシステムのメインプロセスがフリーズします。

**解決方法**：次の 2 つの方法のいずれかで修正できます。

1. **出荷時設定への復元**：本体側面のボタンを 15 秒間長押しして、出荷時設定に復元します。
2. **システム設定ファイルの変更**：
   - USB ケーブルでデバイスを接続し、SSH でデバイスにログインします。
   - `/userdata/config/rkipc.ini` ファイルを編集します。
   - `[rc_model.0]` 設定セクション内の `model` フィールドを `yolox_s.rknn` に変更します。

## テクニカルサポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べるよう、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>