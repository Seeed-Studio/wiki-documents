---
description: "LeRobot の動画、Parquet、メタ構造を理解し、時間同期、画像品質、デモンストレーションの完全性を確認します。"
title: "データ品質：構造、同期、検証"
hide_title: true
keywords:
  - ハンズオンデプロイ
  - reBot
  - LeRobot
  - ACT
  - B601-DM
  - B601-RS
  - ロボットアーム
  - Physical AI
  - コース
  - チュートリアル
  - SO101
  - SO-ARM101
  - Hugging Face
  - アーム
  - ロボティクス
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /robotics/hands_on_dataset_quality
displayed_sidebar: PaperReadingSidebar
translation:
  skip: [zh-CN]
sku: 100019336,100065783,100095532,100063143,100045679,100040187,114993666,114993667,114993668,101090144
last_update:
  date: 2026-10-22
  author: LiuJunJie
createdAt: '2026-10-21'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/ja/robotics/hands_on_dataset_quality/
---

import '/src/css/paper-reading-style.css';

<div className="paper-reading-page hands-on-reproduction-page">

<section className="paper-reading-intro" aria-labelledby="hands-on-dataset_quality-title">
  <span className="paper-reading-eyebrow">SEEED STUDIO · ハンズオンデプロイ</span>
  <h1 id="hands-on-dataset_quality-title">データ品質：構造、同期、検証</h1>
  <p className="paper-reading-lead">LeRobot の動画、Parquet、メタデータファイルを理解し、そのうえで時間同期、画像品質、デモンストレーションの完全性を確認します。</p>
  <ul className="paper-reading-badges" aria-label="このガイドで学ぶこと">
    <li>データセット構造</li>
    <li>時間同期</li>
    <li>品質チェック</li>
    <li>トラブルシューティング</li>
  </ul>
</section>

## データセット構造

**`seed_rebot_b601_rs/test` のような記録済みデータセットは、次のようなレイアウトになっています：**

```text
~/.cache/huggingface/lerobot/seed_rebot_b601_rs/test/
├── data/
│   └── chunk-000/
│       └── file-000.parquet          ← Numerical frames: state / action / timestamps
├── videos/
│   ├── observation.images.front/
│   │   └── chunk-000/
│   │       └── file-000.mp4          ← Front camera: concatenated video for 50 episodes
│   └── observation.images.wrist/
│       └── chunk-000/
│           └── file-000.mp4          ← Wrist camera: the same arrangement
└── meta/
    ├── info.json                     ← Version, fps, frame count, and feature definitions
    ├── stats.json                    ← Mean, variance, and extrema for each feature
    ├── tasks.parquet                 ← Task descriptions
    └── episodes/
        └── chunk-000/
            └── file-000.parquet      ← Per-episode records
```

**3 つのフォーマットが 3 種類の情報を保持します：**

| フォーマット | 内容 | なぜこの形式を使うのか？ |
|---|---|---|
| MP4 動画 | 両方のカメラからのすべての画像フレーム | 画像はデータセットサイズの 90% 以上を占めます。個々の画像ファイルと比べて、動画圧縮により 1～2 桁のサイズ削減が可能です。 |
| Parquet テーブル | フレームごとの状態、アクション、タイムスタンプ、インデックス | カラムナ形式のストレージにより、テーブル全体を読み込まずに、例えばジョイント 3 の値だけをすべて読むことができます。 |
| メタデータ | 構造、統計、タスク、エピソードインデックス | ローダーや学習プログラムは、他のファイルを解釈するために、まずこれらを読み込みます。 |

---

## タイムスタンプと同期

- 画像は USB 経由で、ジョイントデータは CAN 経由で送られるため、自然とコンピュータに到達するタイミングが異なります。LeRobot は **タイムスタンプ** を割り当て、同じ論理的瞬間を表す画像・状態・アクションが 1 行にそろうように整列させます。

![データセット構造と品質チェック：タイムスタンプと同期（図 1）](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/dataset-quality-01-timestamp-sync-en.png)

---

## データセット全体の品質を評価する

学習にデータセットを使う前に、次の 4 つの観点を確認します：

![データセット構造と品質チェック：データセット全体の品質評価（図 2）](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/paper_reading/hands_on_reproduction/dataset-quality-02-quality-checklist-en.png)

---

## 画像をリプレイして確認する

前述のとおり、可視化には `lerobot-dataset-viz` を、ロボット上でのリプレイには `lerobot-replay` を使用します。少なくとも **エピソード 0、途中のエピソード 1 つ、最後のエピソード** を確認してください。最初のエピソードでワークフローを、途中のエピソードでドリフトを、最後のエピソードでオペレータの疲労による品質低下がよく分かります。

リプレイ中は、次の点を確認します：

- 両方のカメラビューが表示されており、黒いフレーム、破損した画像、ストリームのフリーズがないこと。

- 画像がシャープで露出が適切であり、ブロックとグリッパが通して見えていること。

- アクションと画像が整合しており、グリッパが閉じるとき、画像でもブロックに接触している様子が見えること。

- エピソードが標準的な初期姿勢から始まり、停止条件が満たされた状態で終了していること。

---

## 問題が発生したときの対処

問題の範囲に応じて対処します：

- **少数の不良エピソード**（例：エピソード 3 と 17 の画像がぼやけているなど）の場合：その 2 つを削除し、代わりに 2 つ録り直します。

- **広範囲の問題**（例：エピソードの半分で照明条件が変わっている、あるいは 1 バッチ全体で動画とアクションがずれているなど）の場合：データセット全体を録り直します。不整合な修正をつぎはぎにするより、データ量が少ない方がまだましなことがあります。

削除後、ツールはデータセットを自動的に再構築します。エピソードインデックスは連番になり、`stats.json` は再計算されます。エピソードを削除・追加する場合でも、ツールがメタデータを再生成するため、手動で編集する必要はありません。

---

</div>
