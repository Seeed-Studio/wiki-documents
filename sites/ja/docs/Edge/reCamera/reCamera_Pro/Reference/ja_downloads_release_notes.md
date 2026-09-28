---
description: reCamera Pro 向けのすべての公式ダウンロードを 1 か所に集約 — ファームウェアイメージ、書き込みツール、ドライバ、変換ツールキット、開発用リソース。
title: ダウンロードとリリースノート
keywords:
  - reCamera
  - reCamera Pro
  - download
  - firmware
  - Debian 13
  - release notes
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_downloads
sku: 10003420
sidebar_position: 5
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/ja/recamera_pro_downloads/
---

# ダウンロードとリリースノート

このページでは、reCamera Pro ドキュメントで参照されているすべてのダウンロードおよび外部リソースをまとめ、それぞれを使用するガイドへのリンクを掲載しています。

## ファームウェア

| 項目 | 入手先 | ガイド |
| --- | --- | --- |
| 標準ファームウェアの更新 | Web UI 経由：**Device Info → System Settings** に現在のファームウェアバージョンが表示され、ここから更新を実行できます。工場出荷時設定へのリセットや再起動もここで行えます | [ネットワーク、時刻、アクセス](/ja/recamera_pro_device_info/)、[ファームウェアの更新とリカバリ](/ja/recamera_pro_firmware_update/) |
| 実験的 Debian 13 イメージ | [recamera_pro_debian13_v1.0.0.tar.gz](https://github.com/yyling0101-a11y/reCamere_pro_debian_img/releases/download/v1.0.0/recamera_pro_debian13_v1.0.0.tar.gz) | [実験的 Debian 13 イメージ](/ja/recamera_pro_debian/) |

<!-- TODO(verify): add the official stock firmware image download location (if publicly distributed) and the current firmware version/changelog; the Web UI update path is currently the only documented method. -->

## 書き込みツール（Debian 13 / リカバリ）

| 項目 | ダウンロード | 備考 |
| --- | --- | --- |
| Windows USB ドライバ | [DriverAssistant_v5.12.zip](https://drive.google.com/file/d/1_Efm8nJlQivU2F7BgVokVPfGUl12fI6E/view?usp=drive_link) | Windows から書き込みを行う前に必須 |
| Windows 書き込みツール | [SocToolKit-window.zip](https://drive.google.com/file/d/1wFMHF_KSm…utDP-DPQ_NONp/view?usp=drive_link) | デバイスを Loader モードにした状態で使用 |
| Linux 書き込みツール | [rkbin](https://github.com/rockchip-linux/rkbin.git) および [Linux_Upgrade_Tool](https://github.com/vicharak-in/Linux_Upgrade_Tool.git) | Linux での書き込み手順の中で clone されます |

完全な書き込み手順（Windows と Linux、Loader モードへの移行、パーティション順序）については：[実験的 Debian 13 イメージ](/ja/recamera_pro_debian/)。起動しなくなったデバイスの復旧については：[ファームウェアの更新とリカバリ](/ja/recamera_pro_firmware_update/) を参照してください。

## モデル変換と AI ツール

| 項目 | ダウンロード | ガイド |
| --- | --- | --- |
| RKNN-Toolkit2 2.3.2（ホスト変換、x86_64） | [airockchip/rknn-toolkit2 releases](https://github.com/airockchip/rknn-toolkit2) — `packages/x86_64` 配下から、自分の CPython バージョンに対応する wheel を選択します | [モデルの変換と量子化](/ja/recamera_pro_rknn_model_conversion/) |
| SenseCraft（ブラウザベースの ONNX→RKNN） | Web UI からアクセス：**AI Inference → View SenseCraft Models** | [SenseCraft ONNX-to-RKNN](/ja/recamera_pro_sensecraft/) |
| model-inspect（ONNX コントラクト検査） | `pip install model-inspect-tool` | [モデルの変換と量子化](/ja/recamera_pro_rknn_model_conversion/) |

バージョン整合ルール：Toolkit のバージョンは、reCamera Pro ファームウェアに同梱されている RKNN Runtime（現在 2.3.2）と一致している必要があります。

## 開発用リソース

| 項目 | ダウンロード | ガイド |
| --- | --- | --- |
| reCamera Pro Development Skill（AI コーディングエージェント向け） | [Seeed-Projects/recamera-pro-development-skill](https://github.com/Seeed-Projects/recamera-pro-development-skill) | [AI コーディングエージェントで開発する](/ja/recamera_pro_development_cpp_skill/) |
| Ultralytics（YOLO→RKNN の直接エクスポート） | Toolkit 環境で `pip install ultralytics` | [モデルの変換と量子化](/ja/recamera_pro_rknn_model_conversion/) |
| 製品ページ | [reCamera Pro (2GB)](https://www.seeedstudio.com/reCamera-Pro-2GB.html) | — |

Web UI、ネイティブ SDK、完全な Debian 開発のどれを選ぶかについては：[開発パスの選び方](/ja/recamera_pro_dev_path/) を参照してください。

## リリースノート

| バージョン | 日付 | ハイライト |
| --- | --- | --- |
| Debian 13 イメージ v1.0.0 | — | reCamera Pro 向け初の公開実験的 Debian 13 イメージ |

<!-- TODO(verify): obtain the official firmware release history (version, date, changes) from the product team and populate this table; also record the Debian v1.0.0 release date. -->

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。お客様が製品をスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。ご希望やニーズに応じてお選びいただける複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
