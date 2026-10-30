---
description: "SO-ARM Physical AI ビギナーコース第 15 章 — バッチサイズ・学習率・訓練ステップを理解し、lerobot-train で SO-ARM データセット上に最初の ACT ポリシーを訓練し、Loss と GPU を監視し、チェックポイントを管理します。"
title: 第 15 章 - 最初の ACT ポリシーを訓練する
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - ACT
  - 訓練
  - LeRobot
  - コース
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_15
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/ja/robotics/soarm_physical_ai_course_chapter_15/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 3 · 第 15 章 · 実践</span>
    <h2>15. 最初の ACT ポリシーを訓練する</h2>
    <p>
      バッチサイズ・学習率・訓練ステップを理解し、lerobot-train で SO-ARM データセット上に最初の ACT ポリシーを訓練し、Loss と GPU を監視し、チェックポイントを管理します。
    </p>
    <div className="hero-actions">
      <a href="#configs">3 つの設定</a>
      <a href="#checkpoints">チェックポイント</a>
      <a href="#start-training">訓練開始</a>
    </div>
  </div>
</section>

<div className="sensecraft-banner">
  <div className="sensecraft-banner__copy">
    <span className="sensecraft-banner__badge">⚡ コード不要 · 環境構築不要</span>
    <p className="sensecraft-banner__title">セットアップをスキップして — reBot Arm と LeRobot を 1 つのアプリから実行</p>
    <p className="sensecraft-banner__lead">SenseCraft Robotics は、SO-ARM101、reBot Arm 102 + B601-RS および B601-DM 向けの Seeed のノーコードプラットフォームです。アームを接続し、キャリブレーションを行い、デモを収集し、ガイド付きインターフェースから学習と推論を実行できます — Python 環境もターミナルも不要です。</p>
    <ul className="sensecraft-banner__points">
      <li>✅ 6 ステップのガイド付きワークフロー</li>
      <li>✅ クラウド学習 — ローカル GPU 不要</li>
      <li>✅ Windows / macOS クライアント</li>
      <li>✅ SO-ARM101 · B601-RS · B601-DM</li>
    </ul>
  </div>
  <div className="sensecraft-banner__actions">
    <a className="sensecraft-banner__cta" href="https://sensecraft.seeed.cc/en?utm_source=rebot_wiki&utm_medium=wiki&utm_campaign=sensecraft_banner" target="_blank" rel="noopener noreferrer">SenseCraft Robotics へ移動 ↗</a>
    <a className="sensecraft-banner__link" href="/ja/sensecraft_robotics/">ソフトウェアガイド</a>
  </div>
</div>

## 15.1 3 つのキー設定：バッチサイズ・学習率・ステップ数

<section id="configs" className="section-card">
  <div className="section-title">
    <span>設定</span>
    <h2>15.1 3 つのキー設定：バッチサイズ・学習率・ステップ数</h2>
  </div>

### バッチサイズ

1 回の更新でモデルが見るフレーム数。大きいほど訓練は安定しますが VRAM を食います。CUDA メモリ不足になったら、最初に下げるのはバッチサイズです。まず ACT のデフォルトのまま、必要なときだけ触りましょう。

### 学習率

1 回の更新でパラメータが動く距離。高すぎると Loss が振動・発散、低すぎると訓練が極端に遅くなります。ACT のデフォルト（1e-5 台）はテーブルトップタスクで十分検証済み。最初の実行では変更しないでください。

### 訓練ステップ数

更新の総回数。SO-ARM 規模のタスクでは ACT のデフォルト 10 万〜30 万ステップが目安。難しいタスクでは増やすと有利ですが過学習リスクがあります。判断は Loss 曲線で — 検証 Loss が改善しなくなったら停止します。

:::tip
初回の戦略：すべてデフォルトのまま 10 万ステップ訓練し、実機で評価（第 16 章）してから何を調整するか決める。初心者の盲目調整で失う時間は、2 回訓練する時間に匹敵します。
:::

</section>

## 15.2 チェックポイントの保存と管理

<section id="checkpoints" className="section-card">
  <div className="section-title">
    <span>チェックポイント</span>
    <h2>15.2 チェックポイントの保存と管理</h2>
  </div>

手動保存は不要：`save_freq` ステップごとに自動保存され、最後に `last` が 1 つ追加されます。ステップ数を大きく設定しても大丈夫 — 小さいステップ数のモデルを選び、未熟・過学習なものを捨てられます。

```text
outputs/train/act_so101_test/
├── train_config.json              ← この実行の完全設定（再開に必要）
└── checkpoints/
    ├── 0020000/pretrained_model/  ← 各ステップ数でのモデルアーカイブ
    ├── 0040000/pretrained_model/
    ├── ...
    └── last/pretrained_model/     ← 最後のチェックポイント。第 16 章で使用
```

- **ディスク使用量**：各チェックポイントは完全なモデル重みファイルで、数十個分はかさみます。訓練が安定したら早中期は削除し `last` だけ残して構いません；
- 推論時の `--policy.path` は `checkpoints/last/pretrained_model` を指します。

</section>

## 15.3 訓練の開始

<section id="start-training" className="section-card">
  <div className="section-title">
    <span>訓練</span>
    <h2>15.3 訓練の開始</h2>
  </div>

すべての確認が済んだら（conda `lerobot` 環境で）開始します。**ローカルデータセット**（第 12 章で録画）では `repo_id` が採集時と一致していることを確認し、`--policy.push_to_hub=false` を付けます：

```bash
lerobot-train \
  --dataset.repo_id=seeedstudio123/test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=300000
```

**Hugging Face Hub 上のデータセット**ならユーザー名を使います：

```bash
lerobot-train \
  --dataset.repo_id=${HF_USER}/so101_test \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --job_name=act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --steps=300000
```

各引数の意味：

- **データセット指定**：`--dataset.repo_id` は第 12 章のデータセットを指します；
- **訓練ステップ数**：`--steps=300000`。アルゴリズムのデフォルトはより大きいので、タスク難度と Loss 曲線に合わせて調整します；
- **ポリシータイプ**：`--policy.type=act` は ACT 設定を読み込みます。ポリシーはあなたのロボットのモーター状態・モーターアクション・カメラ数に自動適応します — この情報はデータセットに保存済みです。他の選択肢は `diffusion`、`pi0`、`pi0fast`、`smolvla`、`groot`；
- **デバイス選択**：NVIDIA GPU なら `--policy.device=cuda`。Apple Silicon は `mps` が使えます；
- **可視化ツール**：`--wandb.enable=true` に戻すと [Weights and Biases](https://docs.wandb.ai/quickstart) で訓練をグラフ化できます（先に `wandb login`）。

:::tip
RTX 50 シリーズ GPU では `--dataset.video_backend=pyav` の追加が必須 — プレビュー版 torchvision に欠けている API を回避します。完全なコマンド：

```bash
lerobot-train \
  --dataset.repo_id=seeedstudio123/test \
  --dataset.video_backend=pyav \
  --policy.type=act \
  --output_dir=outputs/train/act_so101_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=300000
```
:::

</section>

## 15.4 Loss と GPU の監視

<section id="monitoring" className="section-card">
  <div className="section-title">
    <span>監視</span>
    <h2>15.4 Loss と GPU の監視</h2>
  </div>

- **Loss**：`log_freq` ステップごとに端末へ表示。早期の急低下と、その後の長く浅い低下が健全な形です。Loss が上昇・激しく振動する場合は、その環境に学習率が合っていないことが多いです；
- **GPU**：`nvidia-smi`（または `watch -n 1 nvidia-smi`）で VRAM と使用率を監視。使用率が長くほぼ 0% なら、ボトルネックは GPU ではなくデータパイプライン（ディスク / CPU）です；
- **所要時間の目安**：50 Episode の ACT 訓練は、ノート PC の RTX 3060 8GB で約 6 時間、RTX 4090 や A100 で約 2〜3 時間です。実時間はデータ量・解像度・バッチサイズ・ハードウェアに依存します。

</section>

## 15.5 中断した訓練の再開

<section id="resume" className="section-card">
  <div className="section-title">
    <span>再開</span>
    <h2>15.5 中断した訓練の再開</h2>
  </div>

`last` チェックポイントから再開するには、保存済み設定を渡します：

```bash
lerobot-train \
  --config_path=outputs/train/act_so101_test/checkpoints/last/pretrained_model/train_config.json \
  --resume=true
```

### ポリシーのチェックポイントをアップロード（任意）

訓練完了後、最新チェックポイントをアップロード：

```bash
huggingface-cli upload ${HF_USER}/act_so101_test \
  outputs/train/act_so101_test/checkpoints/last/pretrained_model
```

</section>

## 15.6 よくある訓練エラー

<section id="faq" className="section-card">
  <div className="section-title">
    <span>トラブル対応</span>
    <h2>15.6 よくある訓練エラー</h2>
  </div>

| エラー | 対処 |
| :--- | :--- |
| `TypeError: stack(): argument 'tensors' must be tuple of Tensors, not Column` | `pip install datasets==2.19` |
| CUDA メモリ不足 | バッチサイズを下げる。他の GPU プロセスを閉じる。`--dataset.video_backend=pyav` を使う |
| データ読み込み時に `No valid stream found in input file` | `conda install ffmpeg=7.1.1 -c conda-forge`（第 5 章の修正） |
| データセットが見つからない | ローカルデータセットは録画時の `repo_id` を再確認。フォルダは `~/.cache/huggingface/lerobot/` の下にあります |

訓練済みの `checkpoints/last/pretrained_model` が手に入ったら、次章でポリシーを実機に載せます。

</section>

</div>
