---
description: Reachy Mini 向けの統合およびアプリガイド。アプリ構築、JavaScript SDK、HTTP/WebSocket API、AI 実験のヒントをカバーします。
title: 統合 & アプリ
slug: /reachymini_sdk_integration
keywords:
  - 統合
  - アプリ
  - LLM
  - javascript sdk
  - Web アプリ
  - REST API
  - websocket
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/ja/reachymini_sdk_integration/
---

# 統合 & アプリ

Reachy Mini は AI ビルダー向けに設計されています。ここでは LLM を統合し、成果を共有する方法を説明します。

## アプリの構築

標準的な App 構造（Hugging Face Spaces と互換）を生成・チェック・公開するための CLI ツールを提供しています。完全なガイドはこちら：**[アプリの構築と公開](/ja/reachymini_sdk_apps)**。

## JavaScript Web アプリ
インストール不要でクロスプラットフォーム、ブラウザ上で動作するアプリが欲しいですか？[JavaScript SDK & Web Apps](/ja/reachymini_sdk_javascript-sdk) ガイドを参照してください。静的な Hugging Face Spaces を構築し、あらゆるデバイス（スマートフォンを含む）から WebRTC 経由でロボットを制御できます。

## HTTP & WebSocket API
ダッシュボードや Python 以外のコントローラを構築していますか？Daemon は REST を通じて完全な制御機能を公開しています。

* **ドキュメント:** `http://localhost:8000/docs`
* **状態取得:** `GET /api/state/full`
* **WebSocket:** `ws://localhost:8000/api/state/ws/full`

## AI 実験のヒント

* **会話デモ:** VAD（Voice Activity Detection）、LLM、TTS を組み合わせたリファレンス実装を参照してください: [reachy_mini_conversation_demo](https://github.com/pollen-robotics/reachy_mini_conversation_demo)。
* **カスタムのビジョン / オーディオパイプライン:** AI パイプラインでカメラやマイクへの直接アクセスが必要な場合（例：カスタム OpenCV 検出器、sounddevice を用いた Whisper など）、`media_backend="no_media"` を指定して組み込みメディアマネージャを無効化できます。詳細は [メディアの無効化](/ja/reachymini_sdk_media-architecture#メディアの無効化--直接ハードウェアアクセス) を参照してください。