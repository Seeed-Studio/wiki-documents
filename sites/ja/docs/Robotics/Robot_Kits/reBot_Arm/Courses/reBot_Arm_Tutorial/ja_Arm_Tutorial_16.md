---
description: "Seeed Physical AI Beginner's Course の第16章 — 最初の ACT ポリシーを学習する：バッチサイズ、学習率とステップ数、チェックポイント管理、学習の開始、loss と GPU 状態のモニタリング、中断した学習の再開。"
title: 第16章 - 最初の ACT ポリシーを学習する
keywords:
  - reBot
  - ACT
  - LeRobot
  - Training
  - Policy
  - Course
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_16
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-09-19
  author: ZhuYaoHui
createdAt: '2026-09-19'
updatedAt: '2026-09-19'
url: https://wiki.seeedstudio.com/ja/rebot_physical_ai_course_chapter_16/
---

import '/src/css/rebot-wiki-style.css';
import RebotCourseNav from '@site/src/components/robotics/RebotCourseNav';

# 

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 3 · 第16章 · 実践</span>
    <h2>16. 最初の ACT ポリシーを学習する</h2>
    <p>
      Seeed Physical AI Beginner's Course の第16章 — バッチサイズ、学習率とステップ数、
      チェックポイント管理、学習の開始、loss と GPU 状態のモニタリング、中断した学習の再開について説明します。
      
    </p>
    <div className="hero-actions">
      <a href="#configs">設定</a>
      <a href="#start-training">学習を開始</a>
      <a href="#monitoring">モニタリング</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>この章で学ぶこと</strong>
    <span>16.1 3つの重要な設定：バッチサイズ、学習率、ステップ数</span>
    <span>16.2 チェックポイントの保存と管理</span>
    <span>16.3 学習の開始</span>
    <span>16.4 loss と GPU 状態のモニタリング</span>
    <span>16.5 中断した学習の再開</span>
  </div>
</section>

<RebotCourseNav />

## 16.1 3つの重要な設定：バッチサイズ、学習率、ステップ数

<section id="configs" className="section-card">
  <div className="section-title">
    <span>設定</span>
    <h2>16.1 3つの重要な設定：バッチサイズ、学習率、ステップ数</h2>
  </div>

ターミナルで `nvidia-smi` を実行して GPU と VRAM を確認します。コンシューマ向け GPU（例：3050）でも学習可能です。

### バッチサイズ

VRAM に余裕があれば増やすことで収束を速められますが、**利用可能な VRAM を超えて無理に増やさないでください**。

| 設定 | シナリオ |
| :--- | :--- |
| VRAM 8 GB 以下 | 学習可能。小さいバッチサイズを使用：8 GB → バッチサイズ 4、4 GB → バッチサイズ 2。 |
| VRAM 12 GB 以上 | 余裕ゾーン。デフォルトのバッチサイズを使用。VRAM が大きい場合はバッチサイズ=16 に設定 |
| 統合 GPU のみ / NVIDIA GPU なし | クラウドサーバーで学習 |

### 学習率（Learning Rate）

各更新あたりの「ステップ幅」です。ACT にはプリセットが用意されています：AdamW オプティマイザ、学習率 1e-5、weight decay 1e-4、ビジュアルバックボーンは 1e-5。ポリシーのプリセットはデフォルトで有効（`use_policy_training_preset`）なので、これらの値は自動的に適用され、何も記述する必要はありません。ステップ幅が大きすぎると loss が振動したり発散したりし、小さすぎると学習時間が 2 倍になります。最初の学習では触らないでください — 元論文と豊富な実践からチューニングされた値です。

- バッチサイズやステップ数を変更しても、学習率を調整する必要はありません。
- 学習済みチェックポイントからのファインチューニング／再開の場合は、学習率を `1e-6`〜`3e-6`（3〜10倍小さく）に下げます。
- 学習 loss がほとんど下がらず（横ばい）、それでも LR を上げたくなった場合は、まずステップ数／データを増やしてから `2e-5` を試してください。

次のコードを追加し、両方を同じ値にそろえて変更します：

```text
--policy.optimizer_lr=1e-6 \
--policy.optimizer_lr_backbone=1e-6
```

### 学習ステップ数（Training Steps）

50 エピソードの場合、以下のステップ数の説明を読みたくなければ、**80,000**（50 エピソード）でそのまま実行して構いません。

ステップ数は比例してスケールします：バッチサイズが半分になると、1 ステップあたりに見るサンプル数も半分になります。同じ回数（エポック数）だけモデルに見せるには、ステップ数を 2 倍にする必要があります。例：デフォルトはバッチサイズ=8、ステップ数=80000；バッチサイズ=4 → ステップ数=160000；バッチサイズ=2 → ステップ数×4；バッチサイズ=16 → ステップ数÷2。

ステップ数を多めに設定しておいても構いません — 学習中に Ctrl+C を押せばいつでも停止でき、loss などの指標を見て止めるかどうかを判断できます。ここまでに生成されたモデルは自動的に保存されます。

- **総フレーム数** ≈ 動画記録の合計長さ。
- **epoch（1 周）** = 生徒が記録を最初から最後まで 1 回通して見ること。
- **steps** = 生徒が合計で何個の区間を見たか。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-16/ch16-01.png" alt="学習ステップ数" />
</div>

</section>

## 16.2 チェックポイントの保存と管理

<section id="checkpoints" className="section-card">
  <div className="section-title">
    <span>チェックポイント</span>
    <h2>16.2 チェックポイントの保存と管理</h2>
  </div>

手動で保存する必要はありません：20,000 ステップごとにチェックポイントが 1 つ保存され（`save_freq`）、最後に最終チェックポイントが保存されます。そのため、ステップ数を大きく設定しても問題ありません — 途中のステップ数のモデルを選び、学習不足または過学習のモデルは捨てることができます。

```text
outputs/train/act_grab_cube_v1/
├── train_config.json              ← Full config for this run (needed to resume)
└── checkpoints/
    ├── 0020000/pretrained_model/  ← Model archive at each step count
    ├── 0040000/pretrained_model/
    ├── ...
    └── last/pretrained_model/     ← Last checkpoint, used in Chapter 17
```

- **ディスク使用量：** 各チェックポイントは完全なモデル重みファイルであり、数十個たまると容量を消費します。学習が安定してきたら、初期／中盤のチェックポイントは削除し、`last` だけ残して構いません。
- 推論時には、`--policy.path` を `checkpoints/last/pretrained_model` に指定します。

</section>

## 16.3 学習の開始

<section id="start-training" className="section-card">
  <div className="section-title">
    <span>学習</span>
    <h2>16.3 学習の開始</h2>
  </div>

すべてのチェックが完了したら、学習を開始します（conda の `lerobot` 環境内）：

```bash
lerobot-train \
    --dataset.repo_id=seeed_rebot_b601_rs/test \
    --policy.type=act \
    --output_dir=outputs/train/act_rebot_test \
    --job_name=act_rebot_test \
    --policy.device=cuda \
    --wandb.enable=false \
    --policy.push_to_hub=false \
    --steps=100000
```

:::tip
RTX 50 シリーズ GPU を使用する場合は、`--dataset.video_backend=pyav` を追加して、torchvision preview における API 欠如の問題を回避してください。
:::

VRAM が不足している場合や、一度により多く設定したい場合は、`--batch_size` を追加してバッチサイズを指定します。

パラメータの補足：

| パラメータ | 意味 |
| :--- | :--- |
| `--dataset.repo_id` | 第13章で作成したデータセット名（ローカルの場合はそのままの名前、Hub の場合は `${HF_USER}/xxx`） |
| `--policy.type=act` | ポリシータイプ。diffusion や smolvla なども使用可能。このステージでは ACT を使用 |
| `--output_dir` | すべての学習出力を保存するディレクトリ |
| `--job_name` | この実行の名前。ログ内で実行を区別するために使用 |
| `--policy.device=cuda` | GPU で学習 |
| `--wandb.enable=false` | wandb のオンラインダッシュボードを無効化（必要なら登録して有効化可能。必須ではない） |
| `--policy.push_to_hub=false` | まだ Hub にはアップロードしない。第17章で評価が十分になってから実施 |
| `--steps` | 学習ステップ数 |
| `--batch_size` | バッチサイズ |

時間の目安：コンシューマ向け GPU で 100k ステップの場合、GPU やバッチサイズにもよりますが、通常は数時間程度かかります。

</section>

## 16.4 loss と GPU 状態のモニタリング

<section id="monitoring" className="section-card">
  <div className="section-title">
    <span>モニタリング</span>
    <h2>16.4 loss と GPU 状態のモニタリング</h2>
  </div>

Enter キーを押すと、ターミナルに学習ログが流れ始めます。LeRobot は 200 ステップごとにサマリー行を出力します（`--log_freq` で制御）。次のような形式です：

```text
step: 10000  smpl: 80K  ep: 35.6  loss: 1.832  grdn: 12.4  lr: 1.0e-05  updt_s: 0.21  data_s: 0.003  eta: 3:42:10
```

各フィールドの意味（フィールド名はバージョンによって多少異なる場合があります）：

| フィールド | 意味 | 注視ポイント |
| :--- | :--- | :--- |
| `step` | 現在のステップ数 | `--steps` と比較して進捗を確認 |
| `ep` | 学習済みエポック数 | 「記録を何回見終わったか」に対応 |
| `loss` | 学習 loss | 序盤は急激に低下し、その後は緩やかに下がり、後半は小さな変動を伴いながら低い水準で横ばいになるのが正常な形 |
| `grdn` | 勾配ノルム | 数百〜数千への急激なスパイクは学習の不安定化を示す |
| `lr` | 現在の学習率 | 想定どおりの値になっているか確認 |
| `updt_s` / `data_s` | 1 ステップあたりの更新／データ読み込み時間 | `data_s` が大きい場合はデータ読み込みがボトルネック |
| `eta` | 残り時間の推定値 | ご飯を食べに行くか寝るかの判断材料 |

**これらの指標の正常な傾向**を、3 つのカテゴリで整理します：

- **下がり続けるべきもの — `loss`。** 低下には 3 つのフェーズがあります：**序盤の急激な低下**、**中盤の緩やかな低下**、**後半の低い水準での小さな変動と全体としての横ばい**。この「最初は速く、その後ゆっくり、最後は平坦」というカーブが健全な収束カーブです。注意すべき異常な形は 2 つ：まったく下がらない（データ／設定の問題 — カメラキーなどを確認）、一度下がったあとに跳ね上がる（学習の発散 — LR を半分にして再学習）。
- **全体として収束しつつ、ある程度のジッタが許容されるもの — `grdn`（勾配ノルム）。** 全体の傾向は loss とともに下がって安定しますが、**スパイク自体は正常**です — たまにスパイクしてすぐ戻る程度なら問題ありません。危険なのは、波が来るたびにどんどん大きくなるような連続的な増幅で、これは発散の前兆です。その場合も上記と同様に LR を下げて対処します。
- **一定であるべきもの — `lr`、`updt_s`、`data_s`、GPU 使用率。** `lr` は全期間を通して設定した値のままで、確認用です。1 ステップあたりの時間（`updt_s`/`data_s`）と、`watch -n 1 nvidia-smi` で見る GPU 使用率はいずれも**安定している**べきです。使用率が継続的に低い、あるいは大きく変動する場合は、GPU がデータ待ちになっており、ボトルネックは GPU ではなくデータ読み込み側にあります。

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-16/ch16-02.png" alt="loss カーブ" />
</div>

<div className="image-frame">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-16/ch16-03.png" alt="GPU 使用率" />
</div>

</section>

## 16.5 中断した学習の再開

<section id="resume" className="section-card">
  <div className="section-title">
    <span>再開</span>
    <h2>16.5 中断した学習の再開</h2>
  </div>

学習中に電源やネットワーク、ターミナルが途中で落ちても、最初からやり直す必要はありません — 少なくとも 1 つチェックポイントが保存されていれば（つまり 20,000 ステップを超えて学習が進んでいれば）再開できます：

```bash
lerobot-train \
    --config_path=outputs/train/act_rebot_test/train_config.json \
    --resume=true
```

- **再開は保存済みの設定を使用します：** 再開したトレーニングでは `train_config.json` に保存された設定が使用され、コマンドラインパラメータは無視されます。パラメータ（例：ステップ数、バッチサイズ）を変更したい場合は、新しい実行を開始し、resume は使用しないでください。
- **最新のチェックポイントから継続：** オプティマイザの状態とステップ数が復元され、損失曲線は途切れることなく続きます。

</section>

</div>
