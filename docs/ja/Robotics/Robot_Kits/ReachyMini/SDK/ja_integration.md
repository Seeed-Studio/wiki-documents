---
description: Reachy Mini アプリの構築と公開、LLM の統合、JavaScript Web アプリの利用、および HTTP/WebSocket API へのアクセスに関するガイド。
title: 連携とアプリ
slug: /ja/reachymini_sdk_integration
keywords:
- integration
- apps
- llm
- hugging face
- web apps
- rest api
- websocket
- ai
- publishing
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# 連携とアプリ

Reachy Mini は AI ビルダー向けに設計されています。ここでは、LLM を統合し、成果物を共有する方法を紹介します。

## アプリの構築
標準的な App 構造（Hugging Face Spaces と互換）を生成・チェック・公開するための CLI ツールを提供しています。

*ブログ記事チュートリアルも参照してください: [Make and Publish Reachy Mini Apps](https://huggingface.co/blog/pollen-robotics/make-and-publish-your-reachy-mini-apps)*

## JavaScript Web アプリ
インストール不要でクロスプラットフォーム、ブラウザ上で動作するアプリが欲しいですか？[JavaScript SDK & Web Apps](/ja/reachymini_sdk_javascript-sdk) ガイドを参照してください — 任意のデバイス（スマートフォンを含む）から WebRTC 経由でロボットを制御する静的な Hugging Face Spaces を構築できます。

## HTTP & WebSocket API
ダッシュボードや Python 以外のコントローラを構築したい場合、Daemon は REST を通じて完全な制御機能を公開しています。

* **Docs:** `http://localhost:8000/docs`
* **Get State:** `GET /api/state/full`
* **WebSocket:** `ws://localhost:8000/api/state/ws/full`

## AI 実験のヒント

* **Conversation Demo:** VAD（Voice Activity Detection）、LLM、TTS を組み合わせたリファレンス実装を参照してください: [reachy_mini_conversation_demo](https://github.com/pollen-robotics/reachy_mini_conversation_demo)。
