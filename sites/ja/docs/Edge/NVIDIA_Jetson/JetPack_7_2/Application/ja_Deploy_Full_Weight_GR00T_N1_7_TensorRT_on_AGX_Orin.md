---
description: Jetson AGX Orin 上で TensorRT ベースの推論パイプラインを用いて、完全な NVIDIA GR00T N1.7 チェックポイントを実行するための、JetPack 7.2 向け計画中のアプリケーションガイドです。
title: JetPack 7.2 と Jetson AGX Orin 上で TensorRT を用いてフルウェイト GR00T N1.7 をデプロイする
keywords:
  - Jetson AGX Orin
  - JetPack 7.2
  - GR00T N1.7
  - TensorRT
  - Physical AI
  - VLA
image: https://github.com/NVIDIA/Isaac-GR00T/raw/main/media/model-architecture.png
slug: /deploy_full_weight_gr00t_n1.7_tensorrt_jetpack7.2_agx_orin
last_update:
  date: 07/31/2026
  author: Dayu
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/ja/deploy_full_weight_gr00t_n1.7_tensorrt_jetpack7.2_agx_orin/
---

# JetPack 7.2 と Jetson AGX Orin 上で TensorRT を用いてフルウェイト GR00T N1.7 をデプロイする

:::info 計画中のアプリケーション
このページは、Jetson AGX Orin 上での完全な GR00T N1.7 TensorRT デプロイメントに向けた JetPack 7.2 アプリケーションエントリを予約するものです。コマンド、エンジンアーティファクト、ベンチマーク結果、およびロボット検証手順は、エンドツーエンドの実装が再現された後に追加されます。
:::

## プロジェクトの目的

**完全な GR00T N1.7 チェックポイント**を、**JetPack 7.2** を搭載した **Jetson AGX Orin** 上で TensorRT ベースの推論パイプラインとともに実行します。最終的なガイドでは、モデル変換の境界、サポートされる精度、TensorRT プラグイン、エンジンビルドプロセス、ランタイム統合、およびロボット制御の検証について文書化します。

この作業は、既存の [Jetson Thor 上での GR00T N1.7 デプロイメント](/ja/fine_tune_gr00t_n1.7_for_rebot_arm_and_deploy_on_robotics_j601/) とは意図的に分離されています。Jetson AGX Orin は、GPU アーキテクチャ、精度マトリクス、メモリ上限、および性能プロファイルが異なるため、Thor 用エンジンや Thor 固有の最適化をそのまま再利用することはできません。

## 対象環境

| 項目 | 想定ターゲット |
| --- | --- |
| コンピュートモジュール | NVIDIA Jetson AGX Orin |
| ソフトウェア | JetPack 7.2 / Jetson Linux 39.2 |
| モデル | NVIDIA GR00T N1.7 完全チェックポイント |
| 推論バックエンド | TensorRT ベースのランタイム |
| 初期の精度候補 | FP16 および Orin がサポートする INT8/INT4 パス |
| 検証 | オフラインでのアクション生成、クローズドループロボット制御、レイテンシ、メモリ、電力、および熱の測定 |

:::warning
2026 年 7 月 31 日時点で、GR00T N1.7 は TensorRT Edge-LLM v0.9.1 のサポートモデルマトリクスには掲載されていません。そのため、本プロジェクトは、公式の TensorRT Edge-LLM サポートが後から追加されない限り、ネイティブ TensorRT とカスタム統合の取り組みとして扱う必要があります。
:::

## JetPack 7.2 を選ぶ理由

この実装では、以前の JetPack 6.2 での試行時に遭遇したブロッカーが JetPack 7.2 によって解消されるかどうかを評価します。この調査では、次の要因の影響を測定します。

- Jetson Linux 39.2 と Ubuntu 24.04
- CUDA 13 と JetPack 7.2 の TensorRT スタック
- ハードウェア構成が対応している場合の Jetson AGX Orin 32GB `MAXN_SUPER`
- システムメモリオーバーヘッドの削減と JetPack 7.2 のメモリ最適化ワークフロー
- 更新されたモデルエクスポート、TensorRT グラフ、およびプラグインサポート

最終的な記事では、測定された改善点と仮定を明確に分け、依然として未サポートのオペレータやランタイムフォールバックがあれば記録する必要があります。

## 計画中の実装ステージ

### 1. 再現可能なベースラインの固定

- 正確な JetPack 7.2 イメージ、Jetson Linux ビルド、CUDA バージョン、TensorRT バージョン、電力モード、クロック、およびストレージレイアウトを記録します。
- GR00T リポジトリのコミット、N1.7 チェックポイントのリビジョン、Python 環境、およびホスト側エクスポート環境を固定します。
- TensorRT 変換前に、ネイティブフレームワークでの推論出力を再現します。

### 2. モデル全体のグラフを精査

- ビジョンエンコーダ、言語または推論バックボーン、状態および固有感覚エンコーダ、アクションエキスパート、拡散またはフローマッチングループ、トークナイザ、および後処理ステージを特定します。
- 動的シェイプ、シーケンス長、観測ウィンドウ、アクションホライズン、および再帰状態を記録します。
- オペレータの一覧を作成し、サポートされていない ONNX または TensorRT の演算を切り分けます。

### 3. TensorRT エンジンの境界を定義

- グラフとメモリフットプリントが現実的な場合に限り、単一エンジンでのエクスポートをテストします。
- そうでない場合は、パイプラインを安定した TensorRT サブエンジンに分割し、明示的な CUDA バッファの受け渡しを行います。
- CPU やフレームワークへのフォールバックは可視化し測定可能な状態に保ち、最終的な主張では TensorRT 上で実際に動作している部分を明示する必要があります。

### 4. Orin に適合する精度の選定

- FP16 による正しさのベースラインを確立します。
- INT8 または INT4 は、キャリブレーション、カーネル、および精度が Jetson AGX Orin 上で検証された箇所に限って評価します。
- Orin へのデプロイでは、Thor 専用の FP8、FP4、NVFP4 に関する前提を使用しないでください。
- モデルスループットだけでなく、アクション品質とクローズドループ成功率を比較します。

### 5. ランタイムのビルドとパッケージング

- 必要な TensorRT プラグインを追加し、プロジェクトとともにバージョン管理します。
- JetPack 7.2 ターゲット上、または厳密に一致するターゲットツールチェーンを用いてエンジンをビルドします。
- 決定論的な前処理、非同期 CUDA 実行、再利用可能なバッファ、およびエンジンメタデータ検証を追加します。
- モデルファイル、エンジンファイル、キャリブレーションデータ、設定、および起動スクリプトを、再現可能なディレクトリまたはコンテナにパッケージングします。

### 6. ロボット上での検証

- アクチュエータコマンドを有効化する前に、オフラインの観測結果を検証します。
- コマンド制限、非常停止処理、ウォッチドッグ、および古い観測の検出を追加します。
- 同じ記録済みエピソードを用いて、ネイティブと TensorRT のアクショントラジェクトリを比較します。
- タスクの複雑さを段階的に高めながら、クローズドループテストを実行します。

## 完成予定のベンチマークテーブル

| 指標 | JetPack 6.2 試行 | JetPack 7.2 FP16 | JetPack 7.2 最適化版 |
| --- | --- | --- | --- |
| TensorRT におけるモデルカバレッジ | TBD | TBD | TBD |
| エンジンビルド時のピークメモリ | TBD | TBD | TBD |
| ランタイムメモリ | TBD | TBD | TBD |
| 観測からアクションまでのレイテンシ | TBD | TBD | TBD |
| アクション生成レート | TBD | TBD | TBD |
| ボード平均消費電力 | TBD | TBD | TBD |
| 最高温度 | TBD | TBD | TBD |
| クローズドループタスク成功率 | TBD | TBD | TBD |

## 受け入れ基準

以下のすべてが揃った時点で、このページは「計画中」から「検証済み」に移行できます。

- 固定され再現可能なホスト側エクスポート環境
- AGX Orin 上の JetPack 7.2 向け TensorRT エンジンビルドコマンド
- TensorRT コンポーネントと非 TensorRT コンポーネントを明確に分けたモデル構成一覧
- モデルコンポーネントを削除することなく成功したフルチェックポイント推論
- ネイティブと TensorRT の数値またはトラジェクトリ比較
- メモリ、レイテンシ、スループット、電力、および熱の測定結果
- 安全制御を備えた少なくとも 1 つのクローズドループロボットタスク
- ロールバックおよびトラブルシューティング手順の文書化

## 関連リソース

- [JetPack 7.2 リソースハブ](/ja/jetpack_7_2_resource_hub/)
- [JetPack 7.2 上で TensorRT Edge-LLM をデプロイ](/ja/deploy_tensorrt_edge_llm_on_jetpack7.2/)
- [reBot Arm 向けに GR00T N1.7 をファインチューニングし Jetson Thor にデプロイ](/ja/fine_tune_gr00t_n1.7_for_rebot_arm_and_deploy_on_robotics_j601/)
- [JetPack 7.2 詳細解説](/ja/jetpack72_deep_dive/)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、お客様が製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
