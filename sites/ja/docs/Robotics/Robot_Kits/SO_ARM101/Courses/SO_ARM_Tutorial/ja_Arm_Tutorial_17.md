---
description: "SO-ARM Physical AI ビギナーコース第 17 章（選択科目）— 1 本から 2 本へ：4 本のアームを配線し、左右のリーダー・フォロワーペアをキャリブレーションし、bi_so_follower / bi_so_leader でテレオペレーションと録画、ACT を訓練し、双腕ポリシーを展開します。"
title: 第 17 章 - SO-ARM 双腕訓練
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - 双腕
  - Bimanual
  - 訓練
  - LeRobot
  - コース
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_17
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/ja/robotics/soarm_physical_ai_course_chapter_17/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">ステージ 3 · 第 17 章 · 選択科目</span>
    <h2>17. SO-ARM 双腕訓練</h2>
    <p>
      1 本のアームから 2 本へ拡張します：4 本のアームを配線し、左右のリーダー・フォロワーペアをキャリブレーションし、bi_so_follower / bi_so_leader でテレオペレーションとデータ録画、ACT を訓練し、双腕ポリシーを展開します。
    </p>
    <div className="hero-actions">
      <a href="#wiring">配線</a>
      <a href="#calibration">キャリブレーション</a>
      <a href="#training">訓練</a>
    </div>
  </div>
  <div className="hero-card">
    <strong>必要なもの</strong>
    <span>SO-ARM キット 2 式（アーム 4 本：リーダー 2 + フォロワー 2）。</span>
    <span>第 5〜16 章と同じソフトウェア環境。</span>
    <span>両手が必要なタスク — 例：左アームから右アームへの物体受け渡し。</span>
  </div>
</section>

## 17.1 なぜ双腕か

<section id="why" className="section-card">
  <div className="section-title">
    <span>動機</span>
    <h2>17.1 なぜ双腕か</h2>
  </div>

実際の操作タスクの多くは本物の「両手」を要します：把持と受け渡し、箱折り、2 部品の組立。双腕模倣学習はまさに ACT が生まれた設定（ALOHA）であり、SO-ARM エコシステムはネイティブ対応 — LeRobot には `bi_so_follower` と `bi_so_leader` が組み込まれ、2 本のアームを 12 次元アクション（各アーム 6）の 1 台のロボットとして扱います。

第 8〜16 章で学んだことはすべて移転します。変わるのはハードウェアが倍増することと、すべてのコマンドに `left_arm_config` / `right_arm_config` が付くことだけです。

</section>

## 17.2 配線とポート

<section id="wiring" className="section-card">
  <div className="section-title">
    <span>配線</span>
    <h2>17.2 配線とポート</h2>
  </div>

4 枚の制御ボードを接続し、各アームのポートを記録します：

| 役割 | ポート |
| :--- | :--- |
| 左フォロワーアーム | `/dev/ttyACM0` |
| 右フォロワーアーム | `/dev/ttyACM1` |
| 左リーダーアーム | `/dev/ttyACM2` |
| 右リーダーアーム | `/dev/ttyACM3` |

キャリブレーション時のフォロワーは `so101_follower`、リーダーは `so101_leader`（LeRobot では `so100_leader` と `so101_leader` は同一実装）。

4 ポートすべてに権限を付与：

```bash
sudo chmod 666 /dev/ttyACM0 /dev/ttyACM1 /dev/ttyACM2 /dev/ttyACM3
```

</section>

## 17.3 キャリブレーション（重要ステップ）

<section id="calibration" className="section-card">
  <div className="section-title">
    <span>キャリブレーション</span>
    <h2>17.3 キャリブレーション（重要ステップ）</h2>
  </div>

第 10 章の手順で各アームを個別にキャリブレーションします。id には必ず **`_left` / `_right` 接尾辞**を付けます — 双腕タイプはこの接尾辞付きのキャリブレーションファイルを探します。

**左フォロワー：**

```bash
lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_bimanual_follower_left
```

**右フォロワー：**

```bash
lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower_right
```

**左リーダー：**

```bash
lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM2 \
  --teleop.id=my_awesome_bimanual_leader_left
```

**右リーダー：**

```bash
lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM3 \
  --teleop.id=my_awesome_bimanual_leader_right
```

キャリブレーション後、ファイルは次に保存されます：

```text
~/.cache/huggingface/lerobot/calibration/robots/so101_follower/my_awesome_bimanual_follower_left.json
~/.cache/huggingface/lerobot/calibration/robots/so101_follower/my_awesome_bimanual_follower_right.json
~/.cache/huggingface/lerobot/calibration/robots/so101_leader/my_awesome_bimanual_leader_left.json
~/.cache/huggingface/lerobot/calibration/robots/so101_leader/my_awesome_bimanual_leader_right.json
```

:::tip
**すでに別の id でキャリブレーション済み？** 物理手順をやり直さず、キャリブレーションファイルをコピーできます：

```bash
CAL_DIR=~/.cache/huggingface/lerobot/calibration/robots

cp $CAL_DIR/so101_follower/my_awesome_follower_arm1.json \
   $CAL_DIR/so101_follower/my_awesome_bimanual_follower_left.json

cp $CAL_DIR/so101_follower/my_awesome_follower_arm2.json \
   $CAL_DIR/so101_follower/my_awesome_bimanual_follower_right.json

cp $CAL_DIR/so101_leader/my_awesome_leader_arm3.json \
   $CAL_DIR/so101_leader/my_awesome_bimanual_leader_left.json

cp $CAL_DIR/so101_leader/my_awesome_leader_arm4.json \
   $CAL_DIR/so101_leader/my_awesome_bimanual_leader_right.json
```
:::

</section>

## 17.4 双腕テレオペレーション

<section id="teleop" className="section-card">
  <div className="section-title">
    <span>テレオペ</span>
    <h2>17.4 双腕テレオペレーション</h2>
  </div>

**カメラなし：**

```bash
lerobot-teleoperate \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower \
  --teleop.type=bi_so_leader \
  --teleop.left_arm_config.port=/dev/ttyACM2 \
  --teleop.right_arm_config.port=/dev/ttyACM3 \
  --teleop.id=my_awesome_bimanual_leader \
  --display_data=true
```

**リストカメラ付き**（`lerobot-find-cameras opencv` でインデックスを確認、カメラは追加・削除自由）：

```bash
lerobot-teleoperate \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower \
  --robot.left_arm_config.cameras='{
    left_wrist: {"type": "opencv", "index_or_path": 2, "width": 640, "height": 480, "fps": 30}
  }' \
  --robot.right_arm_config.cameras='{
    right_wrist: {"type": "opencv", "index_or_path": 4, "width": 640, "height": 480, "fps": 30}
  }' \
  --teleop.type=bi_so_leader \
  --teleop.left_arm_config.port=/dev/ttyACM2 \
  --teleop.right_arm_config.port=/dev/ttyACM3 \
  --teleop.id=my_awesome_bimanual_leader \
  --display_data=true
```

:::warning
2 本のフォロワーが同じ作業空間を共有します。周囲に注意し、フォロワー同士 — そして受け渡しタスク中のグリッパ同士 — の衝突を避けてください。
:::

</section>

## 17.5 双腕データセットの録画

<section id="record" className="section-card">
  <div className="section-title">
    <span>録画</span>
    <h2>17.5 双腕データセットの録画</h2>
  </div>

ローカルに保存（`--dataset.push_to_hub=false` を追加。`repo_id` は `/` を含む必要があるため、ローカルでは `seeed/` をプレフィックスに使えます）：

```bash
lerobot-record \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower \
  --robot.left_arm_config.cameras='{
    left_wrist: {"type": "opencv", "index_or_path": 2, "width": 640, "height": 480, "fps": 30}
  }' \
  --robot.right_arm_config.cameras='{
    right_wrist: {"type": "opencv", "index_or_path": 4, "width": 640, "height": 480, "fps": 30}
  }' \
  --teleop.type=bi_so_leader \
  --teleop.left_arm_config.port=/dev/ttyACM2 \
  --teleop.right_arm_config.port=/dev/ttyACM3 \
  --teleop.id=my_awesome_bimanual_leader \
  --dataset.repo_id=seeed/bimanual_so101_task \
  --dataset.push_to_hub=false \
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \
  --dataset.num_episodes=50 \
  --dataset.fps=30 \
  --dataset.episode_time_s=30 \
  --dataset.reset_time_s=10 \
  --dataset.video=true \
  --dataset.vcodec=libsvtav1 \
  --display_data=true
```

データは `~/.cache/huggingface/lerobot/seeed/bimanual_so101_task/` に保存され、構造は第 13 章と同じです。Hub にアップロードする場合は `HF_USER` を維持して `push_to_hub=false` を外し、`--dataset.repo_id=${HF_USER}/bimanual_so101_task` とします。

### 録画の再開（Resume）

録画が異常終了した場合や複数セッションで分けて採集する場合に `--resume` を使います：

- 必ず `--resume=true` を追加。付けないと `LeRobotDataset.create()` がディレクトリ既存エラーを出します；
- `--dataset.num_episodes` は**今回のセッションで録る本数**です（目標 50 のうち 15 録画済み → 35 を設定）；
- エピソード録画中か自然終了後に終了するようにしてください。「環境リセット」フェーズでの終了は避ける（空エピソードの保存失敗につながる — 最新コードは自動スキップします）：

```bash
lerobot-record \
  --resume=true \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower \
  --robot.left_arm_config.cameras='{
    left_wrist: {"type": "opencv", "index_or_path": 2, "width": 640, "height": 480, "fps": 30}
  }' \
  --robot.right_arm_config.cameras='{
    right_wrist: {"type": "opencv", "index_or_path": 4, "width": 640, "height": 480, "fps": 30}
  }' \
  --teleop.type=bi_so_leader \
  --teleop.left_arm_config.port=/dev/ttyACM2 \
  --teleop.right_arm_config.port=/dev/ttyACM3 \
  --teleop.id=my_awesome_bimanual_leader \
  --dataset.repo_id=seeed/bimanual_so101_task \
  --dataset.push_to_hub=false \
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \
  --dataset.num_episodes=35 \
  --dataset.fps=30 \
  --dataset.episode_time_s=30 \
  --dataset.reset_time_s=10 \
  --dataset.video=true \
  --dataset.vcodec=libsvtav1 \
  --display_data=true
```

### エピソードの再生と削除

実機双腕で指定エピソードを再生（`episode` は 0 始まり — 24 は 25 本目）：

```bash
lerobot-replay \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower \
  --dataset.repo_id=seeed/bimanual_so101_task \
  --dataset.episode=24
```

悪いエピソードの削除（第 13 章ツールボックス）：

```bash
python -m lerobot.scripts.lerobot_edit_dataset \
  --repo_id=seeed/bimanual_so101_task \
  --operation.type=delete_episodes \
  --operation.episode_indices="[24]"
```

元データは `.../bimanual_so101_task_old/` にバックアップされます。確認後、手動で削除してください。

</section>

## 17.6 ACT 訓練

<section id="training" className="section-card">
  <div className="section-title">
    <span>訓練</span>
    <h2>17.6 ACT 訓練</h2>
  </div>

**ローカルデータセットから：**

```bash
lerobot-train \
  --dataset.repo_id=seeed/bimanual_so101_task \
  --policy.type=act \
  --policy.device=cuda \
  --steps=60000 \
  --output_dir=outputs/train/act_bimanual_so101 \
  --wandb.enable=false \
  --policy.push_to_hub=false
```

**Hugging Face Hub から：**

```bash
export HF_USER=your_hf_username

lerobot-train \
  --dataset.repo_id=${HF_USER}/bimanual_so101_task \
  --policy.type=act \
  --policy.device=cuda \
  --steps=100000 \
  --output_dir=outputs/train/act_bimanual_so101 \
  --wandb.enable=false \
  --policy.push_to_hub=false
```

上記は ACT のデフォルトパラメータ（`chunk_size=100`、`dim_model=512` など）を使用します。ポリシーはデータセットから 12 次元の状態 / アクション（各アーム 6）を自動的に読みます — 追加設定は不要です。

</section>

## 17.7 実機展開

<section id="deploy" className="section-card">
  <div className="section-title">
    <span>展開</span>
    <h2>17.7 実機展開</h2>
  </div>

第 16 章のレシピで評価します。今度は双腕です — 評価データをローカルに保存：

```bash
lerobot-record \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower \
  --robot.left_arm_config.cameras='{
    left_wrist: {"type": "opencv", "index_or_path": 2, "width": 640, "height": 480, "fps": 30}
  }' \
  --robot.right_arm_config.cameras='{
    right_wrist: {"type": "opencv", "index_or_path": 4, "width": 640, "height": 480, "fps": 30}
  }' \
  --dataset.root=seeed_eval/eval_bimanual_so101_task8 \
  --dataset.push_to_hub=false \
  --dataset.num_episodes=10 \
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \
  --dataset.fps=30 \
  --dataset.video=true \
  --policy.path=outputs/train/act_bimanual_so101/checkpoints/last/pretrained_model \
  --display_data=true
```

または `--dataset.repo_id=${HF_USER}/eval_bimanual_so101_task` にして（`dataset.root` を外す）評価を Hub にアップロードします。

</section>

## 17.8 FAQ

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>17.8 FAQ</h2>
  </div>

| 問題 | 原因 | 解決 |
| :--- | :--- | :--- |
| テレオペ時に再キャリブレーションを要求される | `bi_so_follower` が `_left` / `_right` 接尾辞付きファイルを見つけられない | 接尾辞付き id で再キャリブレーション、または既存ファイルをコピー（17.3 節） |
| リーダーが手で動かせない | リーダーのトルクが無効化されていない | 再キャリブレーションまたはモーターを確認 |
| 再録時に「ディレクトリが既に存在」 | `--resume=true` がない | `lerobot-record` コマンドに `--resume=true` を追加 |
| 左右のアームが入れ替わっている | ポート設定ミス | `left_arm_config.port` と `right_arm_config.port` を入れ替える |
| 訓練時にデータセットが見つからない | ローカルデータセットに `root` 未指定 | 訓練時に `--dataset.root=./datasets/xxx` を追加 |
| データセットが自動アップロードされる | `push_to_hub=false` 未設定 | 録画時に `--dataset.push_to_hub=false` を追加 |
| `You must add one or several frames before calling add_episode` で終了 | リセットフェーズで終了し、現 Episode にフレームがない | 録画済みデータは無傷。`--resume=true` で継続。最新コードは空エピソードを自動スキップ |

</section>

</div>
