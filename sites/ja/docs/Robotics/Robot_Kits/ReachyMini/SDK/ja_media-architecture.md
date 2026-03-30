---
description: Reachy Mini のメディアアーキテクチャについて、GStreamer と WebRTC を用いた、さまざまなロボットモデルにおける音声および映像ストリーミング機能を詳しく解説します。
title: メディアアーキテクチャ
slug: /reachymini_sdk_media-architecture
keywords:
  - media
  - audio
  - video
  - gstreamer
  - webrtc
  - streaming
  - camera
  - microphone
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-28'
updatedAt: '2026-02-28'
url: https://wiki.seeedstudio.com/ja/reachymini_sdk_media-architecture/
---

# メディアアーキテクチャ

Reachy Mini のメディアアーキテクチャを理解することは、その音声および映像機能を効果的に活用するうえで不可欠です。これらは、使用している Reachy Mini の具体的なモデルによって動作が異なります。

> **Note** : すべての Reachy Mini モデル間でメディアアーキテクチャを統一する作業が進行中です。以下の情報は、最新の更新時点での現状を反映しています。

## Reachy Mini

映像および音声ストリームは、組み込みアプリの場合はローカルで、またはリモートマシンから Python SDK を通じて（WebRTC プロトコル経由で）リモートでアクセスできます。この処理には GStreamer が使用されています。

ストリームは Daemon によって管理されており、複数のアプリケーションが同時にアクセスできます。技術的には、映像ストリームは Unix ソケットと WebRTC サーバーの間で共有されています。オーディオカードは `.asoundrc` で設定され、`reachymini_audio_src` および `reachymini_audio_sink` という名前で複数のアプリケーションからアクセスできるようになっています。

![Reachy Mini Media Daemon](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/reachymini_media_daemon.png)

![Reachy Mini Media Client](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/reachymini_media_client.png)

webrtc により、音声および映像ストリームには Web ブラウザから直接アクセスすることもできます。たとえば、[desktop application](/ja/reachymini_platforms_reachy_mini_lite_get_started#3--download-reachy-mini-control) はこの機能を利用しています。

![Reachy Mini Media Web](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/reachymini_media_web.png)

## Reachy Mini Lite

Reachy Mini Lite の場合、Daemon はカメラ、マイク、スピーカーを管理しません。起動時と終了時、またはダッシュボードからモーションがトリガーされたときにのみサウンドを再生します。

> **Note:** Sounddevice はサウンドを再生している間、オーディオカードをロックします。SDK からサウンドを使用しつつ、ダッシュボードからモーションをトリガーする場合は、この点に注意してください。

![Reachy Mini Lite Media Daemon](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/reachyminilite_media_daemon.png)

2 つのバックエンドが利用可能です。デフォルトのバックエンドは、カメラ用の OpenCV とオーディオカード用の sounddevice を組み合わせて動作します。

実験的な GStreamer バックエンドも利用可能です。主に Linux システム向けに調整されていますが、他のプラットフォームでも動作するはずです。現時点では、より手動でのインストール作業が必要です（[gstreamer-installation](/ja/reachymini_sdk_gstreamer-installation) を参照してください）。

![Reachy Mini Lite Media Client](https://github.com/pollen-robotics/reachy_mini/raw/develop/docs/assets/reachyminilite_media_client.png)

## 高度な制御

[Reachy Mini](/ja/reachymini_platforms_reachy_mini_media_advanced_controls) および [Reachy Mini Lite](/ja/reachymini_platforms_reachy_mini_lite_media_advanced_controls) のカメラとマイクのパラメータを細かく調整するには、専用ページを参照してください。
