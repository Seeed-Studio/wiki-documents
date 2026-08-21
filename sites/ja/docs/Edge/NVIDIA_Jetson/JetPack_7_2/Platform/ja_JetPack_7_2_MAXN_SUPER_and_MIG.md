---
description: Jetson AGX Orin 32GB 上の JetPack 7.2 MAXN_SUPER と Jetson Thor 上の Multi-Instance GPU 向けに予約されたガイドです。
title: JetPack 7.2 MAXN_SUPER と MIG
keywords:
  - JetPack 7.2
  - MAXN_SUPER
  - MIG
  - Jetson AGX Orin
  - Jetson Thor
slug: /jetpack_7_2_maxn_super_and_mig
last_update:
  date: 07/31/2026
  author: Dayu
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/ja/jetpack_7_2_maxn_super_and_mig/
---

# JetPack 7.2 MAXN_SUPER と MIG

:::info 計画中のコンテンツ
このページは、2 つのプラットフォーム固有の JetPack 7.2 機能、すなわち対応する Jetson AGX Orin 32GB 構成での `MAXN_SUPER` と、対応する Jetson Thor 構成での Multi-Instance GPU のために予約されています。
:::

予定されているガイドには次の内容が含まれます：

- 対応モジュール、キャリアボード、電源、および熱要件
- `MAXN_SUPER` の有効化、確認、ベンチマーク、および元に戻す手順
- Thor 上での MIG パーティション作成、ワークロード配置、監視、および解体
- メモリ、電力、熱、レイテンシ、およびスループットの比較手法
- 本番環境での安全上の制限および未サポート構成に関する警告

ハードウェアおよび BSP のサポートマトリクス全体を確認する前に、新しい電力モードや GPU パーティショニング方式を有効にしないでください。
