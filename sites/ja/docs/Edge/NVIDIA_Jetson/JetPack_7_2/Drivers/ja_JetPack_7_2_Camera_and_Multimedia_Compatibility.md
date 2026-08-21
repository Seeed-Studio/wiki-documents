---
description: Seeed Studio Jetson デバイス向けの JetPack 7.2 用カメラ、GMSL、CSI、マルチメディア、およびアクセラレーテッドビデオの互換性ガイド（予約ページ）。
title: JetPack 7.2 カメラおよびマルチメディア互換性
keywords:
  - JetPack 7.2
  - カメラ
  - GMSL
  - マルチメディア
slug: /jetpack_7_2_camera_multimedia_compatibility
last_update:
  date: 07/31/2026
  author: Dayu
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/ja/jetpack_7_2_camera_multimedia_compatibility/
---

# JetPack 7.2 カメラおよびマルチメディア互換性

:::info 計画中のコンテンツ
このページは、JetPack 7.2 上で特に検証されたカメラおよびマルチメディアワークフロー用に予約されています。既存のカメラ関連記事は、検証が完了するまで移行用の参考として [JetPack 7.2 Resource Hub](/ja/jetpack_7_2_resource_hub/) にまとめられています。
:::

予定されている互換性ガイドには、次の内容が含まれます：

- Seeed キャリアボードごとの CSI および GMSL カメラ対応状況
- デバイスツリーオーバーレイおよびツリー外カメラドライバの再ビルド手順
- Argus、V4L2、GStreamer、コーデック、およびアクセラレーテッドビデオの検証
- マルチカメラの帯域幅および同期の確認
- 既知の JetPack 6.x から 7.2 への API およびパイプラインの変更点

JetPack 7.2 では、JetPack 6.x のカメラカーネルモジュールを再利用しないでください。
