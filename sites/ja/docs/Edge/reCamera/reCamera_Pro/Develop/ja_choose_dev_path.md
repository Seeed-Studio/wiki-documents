---
description: reCamera Pro の 4 つの開発パス ― Web API、ネイティブ SDK 開発、AI コーディングエージェント、および実験的な Debian 13 イメージ ― を比較し、プロジェクトに最適なものを選びます。
title: 開発パスを選ぶ
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - Web API
  - RKNN
  - Edge AI
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_dev_path
sku: 10003420
sidebar_position: 1
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/ja/recamera_pro_dev_path/
---

# 開発パスを選ぶ

reCamera Pro（Rockchip RV1126B、aarch64 Linux）は、ノーコード設定からフルネイティブ開発まで、独自アプリケーションを構築するための複数の方法をサポートしています。このページでは、適切なスタート地点を選ぶ手助けをします。

## パスの比較

| パス | 最適な用途 | 必要なスキル | 開始場所 |
| --- | --- | --- | --- |
| WebUI ノーコードアプリ | ブラウザで設定する検出・録画・アラートワークフロー | 不要 | [独自アプリを構築](/ja/recamera_pro_ai_inference/) |
| Web API | 既存デバイスを自前のバックエンドやスクリプトに統合する場合 | HTTP/JSON の基礎 | [API 入門](/ja/recamera_pro_api_introduction/) |
| ネイティブ SDK（C/C++ + RKNN） | 完全な制御を持つカスタムオンデバイス AI アプリケーション | C/C++、クロスコンパイル | [SDK と最小アプリケーション](/ja/recamera_pro_sdk_setup/) |
| AI コーディングエージェント | Codex、Claude Code、Copilot、Cursor、Gemini CLI との自然言語対話を通じてネイティブアプリケーションを構築 | プロンプト作成（ツールチェーンの詳細はエージェントが処理） | [AI コーディングエージェントで開発](/ja/recamera_pro_development_cpp_skill/) |
| 実験的 Debian 13 | デバイス上で `apt`、CMake、Docker を利用したいユーザー | Linux 管理 | [Experimental Debian 13 Image](/ja/recamera_pro_debian/) |

## WebUI ノーコードアプリ

標準の Buildroot ファームウェアには、AI 推論、イベント録画、アラート出力（MQTT、HTTP、シリアルポート）のための Web インターフェースが付属しています。プロジェクトが「これを検出したら録画または通知する」という形で表現できる場合は、まず WebUI で設定してください ― コードは一切不要です。本 Wiki の「独自アプリを構築」セクションを参照してください。

## Web API

このデバイスは、デバイス情報、システム設定、ネットワーク管理、オーディオ/ビデオ制御、AI 推論、ファイル管理、ファームウェア更新のための HTTP ベースの Web API を公開しています。

| 項目 | 説明 |
| --- | --- |
| プロトコル | HTTP または HTTPS |
| ベースパス | `/cgi-bin/entry.cgi`（ほとんどのエンドポイント）；シリアルポートおよびファイル用エンドポイントは `/api/v1/...` |
| Content Type | `application/json` |
| 認証 | Cookie 経由の JWT トークン |

外部システム（バックエンドサービス、ホームオートメーションハブ、スクリプト）がデバイスを制御したり、デバイスから読み取ったりする必要がある場合に、このパスを選択してください。[API 入門](/ja/recamera_pro_api_introduction/) と [クイックスタート](/ja/recamera_pro_api_quick_start/) から始めてください。

## ネイティブ SDK（C/C++ + RKNN）

カスタムオンデバイス AI アプリケーションの場合、ターゲットとなる前提条件は次のとおりです：

| 項目 | サポートされる構成 |
| --- | --- |
| SoC | Rockchip RV1126B |
| ターゲットアーキテクチャ | aarch64 Linux |
| モデル形式 | ONNX 入力、RKNN 出力 |
| RKNN Toolkit | RKNN-Toolkit2 2.3.2 |
| RKNN Runtime | 2.3.2 |
| カメラフレームワーク | GStreamer |
| ネイティブアプリケーション言語 | C/C++ |

Linux（または WSL）ホスト上で reCamera Pro 互換の sysroot に対してクロスコンパイルし、バイナリと RKNN モデルをデバイスにデプロイします。環境構築と具体例については [SDK と最小アプリケーション](/ja/recamera_pro_sdk_setup/) を、メディアパイプラインの詳細については [カメラ・オーディオ・推論開発](/ja/recamera_pro_media_dev/) を参照してください。

:::note
このプラットフォームは、**RV1126B SoC と aarch64 Linux を搭載した reCamera Pro** に特化しています。SG2002/riscv64 reCamera プラットフォームとは互換性がありません。
:::

## AI コーディングエージェント

[reCamera Pro Development Skill](https://github.com/Seeed-Projects/recamera-pro-development-skill) は、同じネイティブ開発の知識 ― モデル変換、クロスコンパイル、カメラ、オーディオ、GStreamer、RTSP のガイド、および C++ アプリケーションテンプレート ― を AI コーディングエージェント向けにパッケージ化したものです。アプリケーションを自然言語で記述し、ツールチェーンの操作をエージェントに任せたい場合は、[AI コーディングエージェントで開発](/ja/recamera_pro_development_cpp_skill/) から始めてください。

## 実験的 Debian 13 イメージ

コミュニティ提供の Debian 13 イメージは、標準の Buildroot システムを置き換え、デバイス上で直接 `apt`、CMake、Docker を利用できるようにします。カメラ、マイク、スピーカー、Wi-Fi は Seeed の工場出荷時ドライバで動作しますが、Bluetooth はサポートされておらず、元の USB-C 仮想ネットワークアダプタも利用できません。

:::warning
Debian 13 ファームウェアは実験的なものです。現時点で Seeed はこれを保守しておらず、追加の開発オプションとして提供されています。書き込みおよび復旧の詳細については [Experimental Debian 13 Image](/ja/recamera_pro_debian/) を参照してください。
:::

{/* TODO(verify): Debian 13 イメージを書き込んだ際に失われる標準ファームウェア機能（WebUI、ベンダー AI サービス、OTA アップデート）を確認し、工場出荷時ファームウェアへ戻す公式手順を文書化すること */}

## 選択ガイド

- **「事前学習済みまたはカスタムモデルに基づいてアラート/録画を行いたい」** → WebUI。カスタム検出器が必要な場合は [独自モデルの使用](/ja/recamera_pro_model_path/) も参照してください。
- **「自分のバックエンドからデバイスを制御したい」** → Web API。
- **「完全にカスタムなオンデバイスアプリケーションを作りたい」** → ネイティブ SDK（必要に応じて AI コーディングエージェントで駆動）。
- **「カメラ付きの汎用 Linux コンピュータとして使いたい」** → 実験的 Debian 13。

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
