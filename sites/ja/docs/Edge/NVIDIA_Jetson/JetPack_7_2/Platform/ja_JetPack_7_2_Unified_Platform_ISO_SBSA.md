---
description: JetPack 7.2 の統合 Orin / Thor プラットフォーム、ISO インストールワークフロー、および SBSA アーキテクチャに関する考慮事項向けの予約ガイドです。
title: JetPack 7.2 統合プラットフォーム、ISO、および SBSA
keywords:
  - JetPack 7.2
  - unified ISO
  - SBSA
  - Jetson Orin
  - Jetson Thor
slug: /jetpack_7_2_unified_platform_iso_sbsa
last_update:
  date: 07/31/2026
  author: Dayu
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
---

# JetPack 7.2 統合プラットフォーム、ISO、および SBSA

:::info 計画中のコンテンツ
このページは、JetPack 7.2 の統合プラットフォームアーキテクチャに関する、Seeed によって検証されたガイド用に予約されています。Jetson Orin に適用されるインストールおよび BSP ワークフロー、Jetson Thor に適用されるもの、そしてこの 2 つのプラットフォームファミリが意図的に異なる点について説明します。
:::

予定されているガイドでは、次の内容を扱います：

- Jetson Linux 39.2 で導入された統合 ISO インストールパス
- Orin と Thor におけるインストール、リカバリ、ストレージ、およびプロビジョニングの違い
- Jetson Thor 上での SBSA の挙動とソフトウェア移植性に関する考慮事項
- NVIDIA 開発キットのワークフローと Seeed 製品 BSP のどちらを使用すべきか
- Orin と Thor の両方で共通アプリケーションを展開する前の検証チェックポイント

検証が完了するまでは、[resource hub](/ja/jetpack_7_2_resource_hub/) 内の製品別 JetPack 7.2 書き込みページを使用してください。
