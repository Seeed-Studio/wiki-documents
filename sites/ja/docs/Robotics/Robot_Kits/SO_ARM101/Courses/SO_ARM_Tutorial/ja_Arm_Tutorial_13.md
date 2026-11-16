---
description: "SO-ARM Physical AI ビギナーコース第 13 章 — LeRobot データセットがディスク上でどう見えるか、4 つの品質基準、可視化と再生、そして lerobot-edit-dataset ツールボックスによる削除・分割・統合・動画変換。"
title: 第 13 章 - データセット構造と品質チェック
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - LeRobot
  - データセット
  - 可視化
  - コース
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_13
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/ja/robotics/soarm_physical_ai_course_chapter_13/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 3 · 第 13 章 · 理論と実践</span>
    <h2>13. データセット構造と品質チェック</h2>
    <p>
      LeRobot データセットがディスク上でどう見えるか、4 つの品質基準、可視化と再生、そして lerobot-edit-dataset ツールボックスによる削除・分割・統合・動画変換を学びます。
    </p>
    <div className="hero-actions">
      <a href="#structure">構造</a>
      <a href="#quality">品質</a>
      <a href="#edit">データセット編集</a>
    </div>
  </div>
</section>

## 13.1 データセット構造：ディスクに何が保存されるか

<section id="structure" className="section-card">
  <div className="section-title">
    <span>構造</span>
    <h2>13.1 データセット構造：ディスクに何が保存されるか</h2>
  </div>

第 12 章で録画したローカルデータセットは `~/.cache/huggingface/lerobot/<repo_id>/` にあります：

```text
├── meta/
│   ├── info.json          ← ロボット、fps、特徴量、カメラキー
│   ├── episodes/          ← Episode ごとのメタデータ
│   ├── stats/             ← 特徴量ごとの統計（訓練に必須！）
│   └── tasks/             ← タスク記述
├── data/                  ← parquet フレーム：観測 / 状態 / アクション
└── videos/                ← エンコード済みカメラストリーム（video=true の場合）
```

頭に刻むべき 3 つの事実：

- **カメラキーはデータ契約の一部。** `front` と `side` は `observation.images.front` / `observation.images.side` になります。訓練と評価は同じキーを使わなければなりません；
- **統計は録画終了後に計算される。** だから録画セッションを途中で強制終了してはいけません；
- **`single_task` の文字列は `meta/tasks` に保存** — 第 4 ステージの言語アノテーションはまさにこのフィールドの上に構築されます。

</section>

## 13.2 「良い」データとは：4 つの品質基準

<section id="quality" className="section-card">
  <div className="section-title">
    <span>品質</span>
    <h2>13.2 「良い」データとは：4 つの品質基準</h2>
  </div>

1. **完全性**：すべての Episode が「接近 → 把持 → 搬送 → 配置 → 復帰」の完全な流れを完走し、途中で切れていない；
2. **一貫性**：戦略・速度・リズムが全 Episode で統一。カメラとシーンは無改変；
3. **カバー率**：目標位置がマークしたグリッドに広がり、一角に偏っていない；
4. **清潔さ**：失敗した把持が残っていない、物体が映像から出たフレームがない、リーダーがカメラを塞いでいない。

</section>

## 13.3 可視化と再生

<section id="playback" className="section-card">
  <div className="section-title">
    <span>検査</span>
    <h2>13.3 可視化と再生</h2>
  </div>

### データセットの可視化

**オンライン** — `--dataset.push_to_hub=true` で録画した場合、repo id を[公式のデータセットビジュアライザ](https://huggingface.co/spaces/lerobot/visualize_dataset)に貼り付けます。

**ローカル** — 同じビューアがオフラインでも動きます：

```bash
lerobot-dataset-viz \
    --repo-id seeedstudio123/test \
    --mode local \
    --episode-index 0
```

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/visualize_datasets.png" alt="データセット可視化" />
</div>

### 実機での Episode 再生

<div className="safety-alert compact">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>実行前の安全確認</strong>
    <p>
      再生は録画済みアクションを実機のフォロワーで再演します。開始前に作業領域を清空し、手を離してください。
    </p>
  </div>
</div>

`replay` 機能は録画した任意の Episode（他人のデータセットの Episode でも）を実機で再演します — アクションの一貫性とロボット間転用性を確認する最良の方法です：

```bash
lerobot-replay \
    --robot.type=so101_follower \
    --robot.port=/dev/ttyACM0 \
    --robot.id=my_awesome_follower_arm \
    --dataset.repo_id=seeedstudio123 \
    --dataset.root=~/.cache/huggingface/lerobot/seeedstudio123 \
    --dataset.episode=0
```

`dataset.root` はデータセットの物理パス、`repo_id` は採集時に定義した名前、`episode` は 0 始まりの番号です。アームが録画どおりの動きを再現するはず — 大きくズレる場合は、データを疑う前にキャリブレーションのドリフトを疑ってください。

### 問題が見つかったときの対処

- **悪い Episode（落下・掴み外し・遮蔽）**：削除 — 次節；
- **系統的問題（毎回把持方向が違う）**：データ設計の問題 — プロトコルを修正して再録。削除では解決しません；
- **統計がおかしい（可視化で無限大 / NaN）**：大抵は壊れた Episode が原因。削除して再生成。

</section>

## 13.4 データセットツールボックス：lerobot-edit-dataset

<section id="edit" className="section-card">
  <div className="section-title">
    <span>編集</span>
    <h2>13.4 データセットツールボックス：lerobot-edit-dataset</h2>
  </div>

データセットの「手術」はすべて `lerobot-edit-dataset` と適切な `--operation.type` で行います。

### Episode の削除

悪い Episode（ここでは 0、2、5）を削除：

```bash
lerobot-edit-dataset \
    --repo_id seeedstudio123/test \
    --operation.type delete_episodes \
    --operation.episode_indices "[0, 2, 5]"
```

または削除結果を**新**データセットとして保存し、元を保持：

```bash
lerobot-edit-dataset \
    --repo_id seeedstudio123/test \
    --new_repo_id seeedstudio123/test_clean \
    --operation.type delete_episodes \
    --operation.episode_indices "[0, 2, 5]"
```

:::tip
その場での削除後、元データはデータセット隣の `_old` フォルダ（例：`.../test_old/`）にバックアップされます。新しいデータセットを確認したら、バックアップは自分で削除して構いません。
:::

### データセットの分割

比率で分割（例：訓練 80% / テスト 10% / 検証 10%）— `test_train`、`test_test`、`test_val` が生成されます：

```bash
lerobot-edit-dataset \
    --repo_id seeedstudio123/test \
    --operation.type split \
    --operation.splits '{"train": 0.8, "test": 0.1, "val": 0.1}'
```

または Episode 番号を明示して分割：

```bash
lerobot-edit-dataset \
    --repo_id seeedstudio123/test \
    --operation.type split \
    --operation.splits '{"task1": [0, 1, 2, 3], "task2": [4, 5]}'
```

### データセットの統合

セッションをまたいで録ったバッチを統合（タスク記述は完全一致が必要）：

```bash
lerobot-edit-dataset \
    --repo_id seeedstudio123/test_merged \
    --operation.type merge \
    --operation.repo_ids "['seeedstudio123/test_batch1', 'seeedstudio123/test_batch2']"
```

### 特徴量の削除

もう訓練しないカメラを削る（例：リストカメラだけ残す）：

```bash
lerobot-edit-dataset \
    --repo_id seeedstudio123/test \
    --operation.type remove_feature \
    --operation.feature_names "['observation.images.side']"
```

### 画像から動画への変換

画像ベースのデータセットを動画形式へ — 容量削減と訓練時の読み込み高速化：

```bash
lerobot-edit-dataset \
    --repo_id seeedstudio123/test_image \
    --new_repo_id seeedstudio123/test_video \
    --operation.type convert_image_to_video \
    --operation.vcodec libsvtav1 \
    --operation.pix_fmt yuv420p \
    --operation.g 2 \
    --operation.crf 30
```

便利なオプション：`--operation.output_dir`（出力先指定）、`--operation.num_workers 8`（並列エンコード）、`--operation.max_episodes_per_batch` / `--operation.max_frames_per_batch`（メモリ制約のあるマシン向け）。変換結果は完全で標準的な LeRobotDataset です — 動画は `videos/` 下、メタデータはすべて保持されます。

</section>

## 13.5 本章の FAQ

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>13.5 本章の FAQ</h2>
  </div>

- **どの LeRobot リポジトリを使う？** 第 5 章の検証済みのもの：`https://github.com/Seeed-Projects/lerobot.git`。公式リポジトリは継続更新され、データセットバージョンやコマンド構文が変わる可能性があります；
- **操作が止まって見える。** Enter を押して端末出力を更新してください。新しいデータセット形式は圧縮保存のため、操作には時間がかかります — 進行バーを見て待ちましょう；
- **参考**：公式ドキュメント [Using dataset tools](https://huggingface.co/docs/lerobot/using_dataset_tools)。

</section>

</div>
