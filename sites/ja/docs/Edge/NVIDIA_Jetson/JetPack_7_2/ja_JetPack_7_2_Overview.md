---
description: Seeed Studio NVIDIA Jetson デバイス向け JetPack 7.2 リソースを分類したハブページです。新しいプラットフォーム機能、マイグレーションガイド、フラッシュ、ドライバ、開発ツール、推論、およびアプリケーションを網羅します。
title: JetPack 7.2 リソースハブ
keywords:
  - NVIDIA Jetson
  - JetPack 7.2
  - Jetson Linux 39.2
  - Jetson Orin
  - Jetson Thor
  - TensorRT Edge-LLM
image: https://files.seeedstudio.com/wiki/other/jp72-front.png
slug: /jetpack_7_2_resource_hub
last_update:
  date: 07/31/2026
  author: Seeed Studio
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/ja/jetpack_7_2_resource_hub/
---

# JetPack 7.2 リソースハブ

![JetPack 7.2 Resource Hub cover](https://files.seeedstudio.com/wiki/other/jp72-front.png)

このページでは、Seeed Studio NVIDIA Jetson 製品向けに現在利用可能な JetPack 7.2 リソースを整理しています。新しいソフトウェアスタックの理解、サポートされるイメージの選定、既存の JetPack 6.x プロジェクトの移行、周辺機器ドライバの復旧、最適化された AI ワークロードのデプロイの出発点として活用してください。

:::info
JetPack 7.2 は **Jetson Linux 39.2**、**Ubuntu 24.04** ルートファイルシステム、および **Linux カーネル 6.8** を使用します。NVIDIA Jetson Linux 39.2 は **Jetson Orin** と **Jetson Thor** の両プラットフォームファミリをサポートします。
:::

## JetPack 7.2 の新機能

JetPack 7.2 は単なるオペレーティングシステムのアップデートではありません。JetPack 7 ソフトウェアアーキテクチャを Jetson Orin に拡張し、エージェント型 AI、本番向け Linux カスタマイズ、メモリ最適化、高性能エッジ推論のためのプラットフォーム機能を追加します。

### エージェント型 AI と開発者ワークフロー

- **NVIDIA NemoClaw 対応**: JetPack 7.2 は、ワンコマンドでの NemoClaw インストールとローカル／クラウドでのモデルオーケストレーションに必要なプラットフォーム依存関係を提供します。
- **Jetson エージェントスキル**: NVIDIA は、Jetson Linux カスタマイズ、メモリ最適化、モデルベンチマーク、パッケージ選定、アプリケーション試作のための、デバイス側および BSP 側の再利用可能なワークフローを提供します。
- **クラウドネイティブなデプロイ**: JetPack スタックは、エッジサービス向けのコンテナ化された開発およびデプロイワークフローを引き続きサポートします。

### プラットフォームアーキテクチャ

- **JetPack 7 における Jetson Orin サポート**: JetPack 7.2 は Jetson Thor のサポートを維持しつつ、JetPack 7 ソフトウェアスタックを Jetson Orin ファミリにもたらします。
- **統合 ISO インストール**: Jetson Linux 39.2 は、サポートされる Jetson Orin および Jetson Thor 開発者キット向けに、統一された ISO ベースのインストールパスを導入します。
- **SBSA への整合**: Jetson Thor は Server Base System Architecture ソフトウェアモデルに従い、Arm サーバークラスプラットフォーム間での移植性を向上させます。

### Yocto

- **公式 Yocto Project サポート**: NVIDIA によって検証された OpenEmbedded/Yocto レシピにより、再現性のあるカスタマイズ済みかつ本番指向の Linux イメージへの道筋が提供されます。

### パフォーマンス、メモリ、アイソレーション

- **Jetson AGX Orin 32GB Super Mode**: JetPack 7.2 は、サポートされる Jetson AGX Orin 32GB 構成向けに `MAXN_SUPER` 電力モードを追加します。
- **メモリ効率ワークフロー**: Jetson エージェントスキルは、ブートローダーのカーブアウト、カーネル予約領域、および不要なユーザ空間メモリ消費を監査・削減できます。
- **Jetson Thor 上の Multi-Instance GPU**: MIG は、サポートされる Jetson Thor T5000 構成において、ワークロード分離実行のためのテクノロジープレビューとして利用可能です。

:::warning
一部の JetPack 7.2 機能はプラットフォーム固有です。MIG と SBSA 固有の挙動は Jetson Thor に適用され、`MAXN_SUPER` はサポートされる Jetson AGX Orin 32GB 構成に適用されます。新しい電力モードやアクセラレーションモードを有効にする前に、モジュール、キャリアボード、BSP、電源、および熱設計を必ず確認してください。
:::

## JetPack 7.2 ソフトウェアベースライン

| レイヤー | JetPack 7.2 ベースライン | マイグレーションへの影響 |
| --- | --- | --- |
| Jetson Linux | 39.2 | ツリー外カーネルモジュールおよび BSP カスタマイズを再ビルドします。 |
| ルートファイルシステム | Ubuntu 24.04 | パッケージ名、リポジトリ、Python 環境、システムサービスを再検証します。 |
| Linux カーネル | 6.8 | 新しいヘッダに対してカメラ、Wi-Fi、フィールドバス、およびカスタム周辺機器ドライバを再ビルドします。 |
| CUDA 世代 | CUDA 13 | CUDA アプリケーションを再ビルドし、検証なしに JetPack 6.x バイナリを再利用しないでください。 |
| TensorRT エンジン | JetPack 7.2 TensorRT スタック | シリアライズされた TensorRT エンジンをターゲットのソフトウェアスタック上で再ビルドします。 |
| サポートプラットフォーム | Jetson Orin および Jetson Thor | 対象 GPU アーキテクチャに対して、正しい BSP、ツールチェーンフラグ、および精度サポートを使用します。 |

## JetPack 7.2 エコシステムマップ

このコレクションは、意図的に JetPack 7.2 関連資料に限定されています。既存の記事は `JetPack_7_2` ツリーにコピーされ、シリーズを元の Wiki ページとは独立してレビュー、更新、翻訳、公開できるように `_bk` スラグを使用します。

| JetPack 7.2 機能 | 含まれるリソース |
| --- | --- |
| Orin と Thor の統合ソフトウェアアーキテクチャ | [Unified Platform, ISO, and SBSA](/ja/jetpack_7_2_unified_platform_iso_sbsa/) **(予定)** |
| Ubuntu 24.04、Linux 6.8、CUDA 13 への移行 | [JetPack 7.2 Deep Dive](/ja/jetpack72_deep_dive_bk/) および [Migration Playbook](/ja/jetpack_6_to_7_2_migration_playbook/) **(予定)** |
| エージェント型 AI と再利用可能な Jetson スキル | [Rapid Prototyping with NVIDIA Skills](/ja/rapid_prototyping_on_jetson_with_nvidia_skills_bk/) および [NemoClaw on Jetson Thor](/ja/control_rebot_arm_with_nemoclaw_on_nvidia_jetson_thor_bk/) |
| Yocto | [Build and Flash a Yocto Image](/ja/build_and_flash_yocto_for_seeed_jetson_carrier_boards/) |
| TensorRT Edge-LLM による高性能推論 | [Deploy TensorRT Edge-LLM on JetPack 7.2](/ja/deploy_tensorrt_edge_llm_on_jetpack7.2/) |
| システムおよび LLM のメモリ使用量削減 | [JetPack 7.2 Memory Optimization](/ja/jetpack_7_2_memory_optimization/) |
| DeepStream 9.1 と自然言語ビデオワークフロー | [DeepStream on JetPack 7.2](/ja/jetpack_7_2_deepstream/) |
| AGX Orin `MAXN_SUPER` と Thor MIG | [MAXN_SUPER and MIG](/ja/jetpack_7_2_maxn_super_and_mig/) **(予定)** |
| カーネル 6.8 ドライバ移行 | [JetPack 7.2 Wireless Module Setup](/ja/jetpack72_ax210_ax200_wifi_setup_guide_bk/) および [Camera and Multimedia Compatibility](/ja/jetpack_7_2_camera_multimedia_compatibility/) **(予定)** |

## フラッシュ & OTA

| リソース | カバレッジ |
| --- | --- |
| [JetPack 7.2 Deep Dive](/ja/jetpack72_deep_dive_bk/) | プラットフォーム変更、JetPack 6.2 との比較、マイグレーションへの影響、AGX Orin 推論結果。 |
| [Flash and OTA Upgrade to JetPack 7.2](/ja/flash_and_ota_jetpack_7.2/) | クリーンフラッシュ、イメージベース OTA 要件、バージョン検証、およびデプロイ方法の選択。 |
| [JetPack 6.x to JetPack 7.2 Migration Playbook](/ja/jetpack_6_to_7_2_migration_playbook/) | **予定:** バックアップ、依存関係の再ビルド、受け入れテスト、ロールバック、およびフリートマイグレーション。 |
| [JetPack 7.2 Unified Platform, ISO, and SBSA](/ja/jetpack_7_2_unified_platform_iso_sbsa/) | **予定:** 統合インストール、Orin/Thor の違い、および Thor の SBSA 挙動。 |
| [JetPack 7.2 MAXN_SUPER and MIG](/ja/jetpack_7_2_maxn_super_and_mig/) | **予定:** AGX Orin のパフォーマンスモードと Thor のワークロード分離。 |

## カーネル 6.8 ドライバとマルチメディア

| リソース | カバレッジ |
| --- | --- |
| [JetPack 7.2 Wireless Module Setup Guide](/ja/jetpack72_ax210_ax200_wifi_setup_guide_bk/) | Intel AX210/AX200 および Realtek RTL8852BE 向けの JetPack 7.2 ドライバとファームウェア復旧。 |
| [JetPack 7.2 Camera and Multimedia Compatibility](/ja/jetpack_7_2_camera_multimedia_compatibility/) | **予定:** CSI、GMSL、Argus、V4L2、GStreamer、コーデック、およびマルチカメラ検証。 |

:::warning
JetPack 6.x のカーネルモジュール、カメラドライバ、デバイスツリーバイナリ、および TensorRT エンジンを JetPack 7.2 上で直接再利用してはいけません。Jetson Linux 39.2 ソフトウェアスタックに対して再ビルドしてください。
:::

## エージェント型 AI と Jetson スキル

JetPack 7.2 は、再利用可能なエージェントスキルとローカルなエージェント型アプリケーションをエコシステムの第一級要素とすることで、Jetson 開発者ワークフローを手動セットアップの枠を超えて拡張します。

| リソース | エコシステム内の役割 |
| --- | --- |
| [Rapid Prototyping on Jetson with NVIDIA Skills](/ja/rapid_prototyping_on_jetson_with_nvidia_skills_bk/) | デバイス検査、互換性チェック、メモリ解析、環境準備、プロトタイプ構築、およびパッケージング。 |
| [Control reBot Arm B601 with NemoClaw on Jetson Thor](/ja/control_rebot_arm_with_nemoclaw_on_nvidia_jetson_thor_bk/) | JetPack 7 プラットフォーム上でのローカル知覚、LLM 推論、ツール実行、サービス管理、およびフィジカル AI 制御。 |

## メモリ効率

| リソース | カバレッジ |
| --- | --- |
| [JetPack 7.2 Memory Optimization](/ja/jetpack_7_2_memory_optimization/) | スキルベースの監査、ヘッドレス／カメラなし BSP の回収、SWIOTLB セーフティ、量子化、KV キャッシュ制御、および低メモリ LLM 推論。 |
| [JetPack 7.2 Memory Optimization Deep Dive](/ja/jetpack_7_2_memory_optimization_deep_dive/) | JetPack 6.2 と比較したプラットフォームベースライン、LLM メモリ予算（重み、ランタイム、KV キャッシュ）、4 層の最適化パス、および再現可能なフィールド観測。 |

## Yocto

| リソース | エコシステム内の役割 |
| --- | --- |
| [Build and Flash a Yocto Image for reComputer Super](/ja/build_and_flash_yocto_for_seeed_jetson_carrier_boards/) | 本番指向の Jetson Linux デプロイメント向けの、再現性のある OpenEmbedded/Yocto イメージ構築。 |

## AI デプロイ & アプリケーション

| リソース | カバレッジ |
| --- | --- |
| [Deploy TensorRT Edge-LLM on JetPack 7.2](/ja/deploy_tensorrt_edge_llm_on_jetpack7.2/) | JetPack 7.2 モデルエクスポート、Orin/Thor ビルドターゲット、エンジン生成、および C++ 推論。 |
| [Industrial Vision Monitoring on JetPack 7.2](/ja/industrial_vision_monitoring_on_industrial_bk/) | reComputer Industrial および reServer Industrial 上で L4T 39.2 とともに検証された YOLO および VLM モニタリング。 |
| [DeepStream on JetPack 7.2](/ja/jetpack_7_2_deepstream/) | DeepStream 9.1 インストール、エージェントスキル、自然言語パイプライン作成、VLM 統合、マイグレーション、およびメモリ計画。 |
| [Deploy Full-Weight GR00T N1.7 on JetPack 7.2 and AGX Orin](/ja/deploy_full_weight_gr00t_n1.7_tensorrt_jetpack7.2_agx_orin/) | AGX Orin 向けに検証された 7 エンジン TensorRT デプロイ、数値検証、オフライン推論、およびポータブルなパス構成。 |

シリアライズされたエンジンおよびカスタム TensorRT プラグインは、ターゲットの JetPack 7.2 ソフトウェアスタック上で再ビルドする必要があります。

## まだ予約中のカバレッジ

| JetPack 7.2 機能 | 予約済みページ |
| --- | --- |
| 完全な JetPack 6.x マイグレーションとロールバック | [Migration Playbook](/ja/jetpack_6_to_7_2_migration_playbook/) |
| 統合 ISO、Orin/Thor の分岐、および SBSA | [Unified Platform, ISO, and SBSA](/ja/jetpack_7_2_unified_platform_iso_sbsa/) |
| `MAXN_SUPER`、MIG、およびパフォーマンスアイソレーション | [MAXN_SUPER and MIG](/ja/jetpack_7_2_maxn_super_and_mig/) |
| CSI/GMSL とアクセラレーテッドマルチメディア | [Camera and Multimedia Compatibility](/ja/jetpack_7_2_camera_multimedia_compatibility/) |

## 推奨される移行手順

1. 対象の Seeed 製品に JetPack 7.2 の BSP またはイメージが用意されていることを確認します。
2. アプリケーションデータ、キャリブレーションファイル、コンテナボリューム、およびカスタム device-tree ソースをバックアップします。
3. JetPack 7.2 をフラッシュし、ブート、ストレージ、ネットワーク、およびリカバリモードを検証します。
4. JetPack 7.2 ビルドを用いて、Wi-Fi、カメラ、CAN、EtherCAT などの out-of-tree ドライバを復元します。
5. CUDA アプリケーション、TensorRT プラグイン、および TensorRT エンジンを再ビルドします。
6. `MAXN_SUPER` やその他のパフォーマンスモードを有効にする前に、元の電源モードでアプリケーションを検証します。
7. デバイスを本番運用に移行する前に、メモリ使用量、熱特性、消費電力、レイテンシ、およびスループットを記録します。

## 公式 NVIDIA リファレンス

- [NVIDIA JetPack](https://developer.nvidia.com/embedded/jetpack)
- [Jetson Linux 39.2 リリースノート](https://docs.nvidia.com/jetson/archives/r39.2/ReleaseNotes/Jetson_Linux_Release_Notes_r39.2.pdf)
- [Jetson Linux 39.2 開発者ガイド](https://docs.nvidia.com/jetson/archives/r39.2/DeveloperGuide/index.html)
- [TensorRT Edge-LLM ドキュメント](https://nvidia.github.io/TensorRT-Edge-LLM/)
- [TensorRT Edge-LLM 対応モデル](https://nvidia.github.io/TensorRT-Edge-LLM/user_guide/getting_started/supported-models.html)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
