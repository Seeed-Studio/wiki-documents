---
description: "FLUX 3 Action の詳細：メカニズム、学習、実験、および LeRobot v0.7.0 との統合範囲を深掘りします。"
title: "FLUX 3 Action：ジョイントな動画・アクション予測と実行時コストのバランス"
hide_title: true
keywords: ["Paper Deep-Dive","FLUX 3 Action","World-Action Models","Joint Video-Action Prediction","Distillation","Real-Time Control","LeRobot"]
slug: /robotics/paper_reading_flux3
displayed_sidebar: PaperReadingSidebar
last_update:
  date: 2026-11-20
  author: liujunjie
createdAt: '2026-11-20'
updatedAt: '2026-11-20'
---

import '/src/css/paper-reading-style.css';

export const toc = [
  {
    "value": "前提知識：レイテンシとリアルタイムファクター",
    "id": "prerequisites-latency-and-real-time-factor",
    "level": 2
  },
  {
    "value": "レポートの主張と読み方ガイド",
    "id": "report-claims-and-reading-guide",
    "level": 2
  },
  {
    "value": "アーキテクチャ：動きと視覚的結果をつなぐ",
    "id": "architecture-connecting-motion-and-visual-consequences",
    "level": 2
  },
  {
    "value": "データとエンボディメントインターフェース",
    "id": "data-and-embodiment-interfaces",
    "level": 2
  },
  {
    "value": "学習：単一のジョイント目的を超えて",
    "id": "training-beyond-a-joint-objective",
    "level": 2
  },
  {
    "value": "スプリットガイダンス",
    "id": "split-guidance",
    "level": 3
  },
  {
    "value": "重みアベレージングと蒸留",
    "id": "weight-averaging-and-distillation",
    "level": 3
  },
  {
    "value": "実験：チェックポイントとプロトコルを紐付けたままにする",
    "id": "experiments-keep-checkpoints-and-protocols-attached",
    "level": 2
  },
  {
    "value": "シミュレーションと効率",
    "id": "simulation-and-efficiency",
    "level": 3
  },
  {
    "value": "実機評価",
    "id": "physical-evaluation",
    "level": 3
  },
  {
    "value": "LeRobot への統合：保存された条件を維持する",
    "id": "lerobot-integration-preserve-saved-conditions",
    "level": 2
  },
  {
    "value": "まとめ",
    "id": "conclusion",
    "level": 2
  }
];

<div className="paper-reading-page">

<section className="paper-reading-intro" aria-labelledby="paper-reading-flux3-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · PAPER DEEP-DIVE</span>
  <h1 id="paper-reading-flux3-title">FLUX 3 Action：ジョイントな動画・アクション予測と実行時コストのバランス</h1>
  <p className="paper-reading-lead">FLUX 3 Action</p>
  <ul className="paper-reading-badges" aria-label="Reading topics">
    <li><a href="#architecture-connecting-motion-and-visual-consequences">ジョイントな動画とアクション</a></li>
    <li><a href="#training-beyond-a-joint-objective">学習と蒸留</a></li>
    <li><a href="#experiments-keep-checkpoints-and-protocols-attached">実験</a></li>
  </ul>
  <a className="paper-reading-source-link" href="https://bfl.ai/models/flux-3-action" target="_blank" rel="noopener noreferrer">
    <span className="paper-reading-source-tag">レポート</span><span>レポートを読む</span><span className="paper-reading-source-arrow" aria-hidden="true">↗</span>
  </a>
</section>

<aside className="paper-reading-key-commands" aria-label="Integration version and parameters">

<a className="paper-reading-hf-link" href="https://huggingface.co/docs/lerobot/v0.7.0/en/flux3" target="_blank" rel="noopener noreferrer"><img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/huggingface-logo.svg" alt="" width="24" height="24" /> Hugging Face · LeRobot FLUX 3 Action ドキュメント ↗</a>

**LeRobot パラメータ**

- `--policy.path=black-forest-labs/flux-3-action-so101` は SO-101 に適合したチェックポイントを読み込みます。
- `--config_path=examples/flux3/lora.json` はバージョン管理されたタスク適応レシピを選択します。
- SO-101 リリースは 42 個のアクションを予測し、`scene`/`wrist` カメラを用いて 30 Hz で 32 個を実行します。
- アダプタは推論と PEFT によるタスク適応をサポートします。新しいエンボディメントやフルファインチューニングには、スタンドアロンの著者リポジトリを使用してください。

</aside>

ロボットが青い箱をコンテナに入れます。ジョイントなワールド・アクションモデルは、アームの動きとその視覚的結果の両方を予測しますが、動画生成には計算コストがかかります。**学習レシピと蒸留によって、有用なジョイント予測を維持しつつ実行コストを削減できるでしょうか？**

## 前提知識：レイテンシとリアルタイムファクター

レイテンシは 1 回のクエリを測定します。リアルタイムファクターは、その処理コストを予測される動きと比較します：

$$
\mathrm{RTF}=\frac{\text{processing time}}{\text{predicted motion duration}}.
$$

教育用の例では、2 秒の動きに対して 0.4 秒の計算は RTF 0.2 となり、1 秒の動きに対して 0.25 秒の計算は 0.25 となります。前者は動き 1 単位あたりのコストは良いものの、即時応答は遅くなります。動的な再計画はその違いに依存します。

## レポートの主張と読み方ガイド

**レポート概要。** 約 70 億パラメータのモデルは、動画中心のマルチモーダル事前学習から始まり、アクションの中間学習を経て、対象ボディへの適応を行います。将来の動画潜在表現と連続アクションをジョイントに予測します。レポートでは、アクション形式、ノイズスケジュール、スプリットガイダンス、重みアベレージング、および蒸留を検証します。

**読み方メモ。** ベース、ガイダンス蒸留済み、シングルステップの各チェックポイントは、精度と速度がそれぞれ異なります。それらのベストな数値を 1 つの構成にまとめることはできません。

## アーキテクチャ：動きと視覚的結果をつなぐ

固定された動画 VAE が観測をエンコードし、固定されたテキストエンコーダが指示を供給します。Transformer は動画とアクションの表現をまとめてデノイズします。ペアになった将来の観測／アクションが学習を監督し、現在の観測と言語がデプロイ時の条件になります。

| 制御ステージ | 箱配置の例 |
| --- | --- |
| 観測 | 箱、コンテナ、グリッパを特定する |
| ジョイントデノイジング | 動きと予想される視覚変化を予測する |
| 後処理 | ボディの制御規約を復元する |
| 実行 | アクションチャンクの一部を消費する |
| 再観測 | 実際の把持と配置結果に応答する |

RGB デコードを省略しても、モデル内には将来潜在の予測が残ります。これは、推論時に将来動画トークンを削除する Fast-WAM とは異なります。

<figure className="paper-reading-figure" data-reading-figure="flux3/joint-architecture">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/flux3/joint-architecture.svg" alt="Joint video-action prediction in a shared backbone" loading="lazy" />
  <figcaption><strong>共有バックボーンにおけるジョイントな動画・アクション予測。</strong> 出典：Black Forest Labs 公式レポート。タスク、視覚履歴、状態条件が、将来とアクションの特徴を運ぶ共有レイヤを通じて共有され、それぞれ別々にデコードされます。蒸留は、このジョイント予測構造を保ったままサンプリングコストを変化させます。</figcaption>
</figure>

## データとエンボディメントインターフェース

事前学習トークンの 95% 以上は動画が占めます。アクションの中間学習では、マルチモーダルデータを維持しつつ、ゲームプレイ、一人称視点の手、ハンドヘルドグリッパ、テレオペレーションが追加されます。サンプル比率とトークン比率は、異なる予算を表します。

ほとんどのポーズデータは EE50 を使用します：主／副エフェクタごとに 25 チャンネルで、位置、6D 回転、手／グリッパ値を含み、未使用の次元はパディングされます。一部のデータは代わりに関節空間ヘッドを使用します。SO-101 アダプタは、測定された状態と順序・単位を一致させた 6 つの絶対関節／グリッパコマンドを使用し、最初の 6 つの EE50 値は実行しません。

## 学習：単一のジョイント目的を超えて

動画とアクションは、信号／ノイズ構造が異なります。レポートでは再構成挙動を測定し、同じ名目上のノイズレベルで同じ難易度だと仮定するのではなく、学習時の分布を調整します。

DROID の研究でも、アクション表現とバッチサイズが変化します。より大きなバッチでのジョイントファインチューニングは、最終的にエンドエフェクタのファインチューニングを上回りますが、既存のエンドエフェクタヘッドは小さな予算では役立つことがあります。学習損失が下がっても、クローズドループの成功率が向上するとは限りません。

### スプリットガイダンス

Classifier-free guidance は、条件付き予測と無条件予測の差を強めます。動画とアクションのガイダンスは独立に設定できます。レポートのスイープでは、動画ガイダンス 4 とアクションガイダンス 1 が、両方を無差別に増やすよりも優れた性能を示します。これはこのモデルに対する経験的な設定であり、普遍的な WAM の定数ではありません。

<figure className="paper-reading-figure" data-reading-figure="flux3/split-guidance">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/flux3/split-guidance.svg" alt="Joint sweep of video and action guidance scales" loading="lazy" />
  <figcaption><strong>動画とアクションのガイダンススケールのジョイントスイープ。</strong> 出典：Black Forest Labs 公式レポート。アクション CFG が横軸、動画 CFG が縦軸です。この RoboLab-120 全スイープは、動画 4・アクション 1 で 42.00% にピークを持ちます。両方を最大化することが最善ではなく、このスイープは蒸留済みチェックポイントのマルチシード結果とは別物です。</figcaption>
</figure>

### 重みアベレージングと蒸留

EMA は学習更新にわたって重みを平滑化します。DROID 比較では、生の重みは 36.50% を記録し、選択されたオンライン Power EMA は 42.00% に達します。SO-101 統合では EMA の利点は混在しており、整合した評価が必要です。

ガイダンス蒸留は、ガイド付きの教師予測を生徒に教えることで、条件付き／無条件計算の繰り返しを避けます。ステップ蒸留はその後、多段サンプリングを 1 回の更新で近似し、精度を犠牲にして速度を高めます。

## 実験：チェックポイントとプロトコルを紐付けたままにする

### シミュレーションと効率

レポートでは、シングルステップチェックポイントで約 38.3% の RoboLab-120 成功率、ガイダンス蒸留で 42.2% が示されています。高速なバリアントが、最もスコアの高いバリアントというわけではありません。π0.5 に対する RTF の優位性は、精度と GPU クラスに依存し、コンシューマ GPU がワークステーション／データセンターの結果を自動的に共有するわけではありません。

著者らのリリース記事では、別途 42.92% が記載されています。その公開記録が、すべてのレポート構成の代わりになるわけではありません。

### 実機評価

Positronic は Franka 上で 10 個の DROID タスクを、各 3 試行、240 秒の制限、条件を揃えた設定、ブラインドのオペレータで評価します。FLUX は 30 試行中 28 を完了します。この小規模なプロトコルだけでは、あらゆる環境で約 93% の成功率を確立することはできません。

SO-101 のデモでは、物体、コンテナ、カメラ配置が変更されています。成功したクリップは挙動を示しますが、試行回数と一致したプロトコルがなければ、汎化成功率を確立することはできません。

## LeRobot への統合：保存された条件を維持する

v0.7.0 の SO-101 チェックポイントは、履歴の状態／アクション条件、8 ティック分の観測、および別々にエンコードされた 2 つの視覚スナップショットを保持します。これは 42 個のアクションを予測し、再計画の前に 32 個を実行します。これはレポートの約 2.13 秒の評価バリアントとは別物です。

```bash
lerobot-train \
  --config_path=examples/flux3/lora.json \
  --policy.path=black-forest-labs/flux-3-action-so101 \
  --dataset.repo_id=YOUR_ORG/YOUR_SO101_DATASET \
  --output_dir=outputs/so101_lora
```

データセットのプレースホルダを置き換えてください。LoRA は trunk を適応させる一方で、action/conditioning ヘッドは全結合で学習されて保存されます。`observation.images.scene` と `observation.images.wrist` の対応するキーを使用するか、学習とロールアウトで同じリネームマップを使用してください。履歴を最新に保つため、制御ティックごとにポリシーを呼び出します。

インストールには、互換性のある PyTorch、CUDA、NATTEN のビルドが必要です。history、guidance、sampling、distillation を変更すると、ポリシータイプが同じままでも実験構成が変化します。

## 結論

FLUX 3 Action は、データ、アクション形式、guidance、averaging、distillation を調整しつつ、joint video/action prediction を維持します。有意義な評価を行うには、予測時間、クエリ時間、実行長、チェックポイントの識別子を組み合わせて考慮する必要があります。

</div>
