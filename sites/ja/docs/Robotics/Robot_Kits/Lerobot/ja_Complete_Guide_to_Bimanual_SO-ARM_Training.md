---
description: "LeRobot を使用して両腕（デュアルアーム）SO-ARM ポリシーを学習する方法：4 本のアームをキャリブレーションし、テレオペレーションを行い、データセットを記録し、ACT を学習して実機ロボットにデプロイします。"
title: SO-Arm 両腕テレオペレーション
keywords:
  - LeRobot
  - SO-ARM
  - Double Arm
  - Robotics
  - Training
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/double_soarm/Arm_kit.webp
slug: /lerobot_double_arm_so_arm_training
sku: 114993666,114993667
last_update:
  date: 6/29/2026
  author: ZhuYuan
translation:
  skip: [zh-CN]
url: https://wiki.seeedstudio.com/ja/lerobot_double_arm_so_arm_training/
createdAt: '2026-07-01'
updatedAt: '2026-09-16'
---

import '/src/css/rebot-wiki-style.css';
import '/src/css/soarm101-pinocchio-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 両腕 SO-ARM トレーニング完全ガイド

<div align="center">
  <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/double_soarm/Arm_kit.webp" width={800} height={456} style={{height: 'auto'}} alt="両腕 SO-ARM ロボットアームキット" />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/SO-ARM101-Bimanual-Robot-Arm-Kit.html" target="_blank" rel="noopener noreferrer">
    <span>SO-ARM101 キットを入手</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>

## はじめに

このガイドでは、LeRobot を用いて SO-ARM 両腕ロボットシステムを学習させるための一連のパイプラインを順を追って説明します。ハードウェアセットアップ、アームのキャリブレーション、両腕テレオペレーション、データセットの記録と管理、ACT ポリシーの学習、実機ロボットへのデプロイまでをカバーします。これらの手順に従うことで、2 本のリーダーアームと 2 本のフォロワーアームでデモデータを収集し、模倣学習ポリシーを学習し、それを実機ロボット上で動作させることができます。

### 推奨学習パス

<div className="rebot-page rebot-step-flow soarm-learning-path">

<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">
<h4><a href="#0-prerequisites">環境を準備する</a></h4>
<p>LeRobot をインストールし、4 本のシリアルポートを特定します。</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">
<h4><a href="#1-calibration-key-step">アームをキャリブレーションする</a></h4>
<p>左・右それぞれのリーダーアームとフォロワーアームをキャリブレーションします。</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">
<h4><a href="#2-bimanual-teleoperation">両腕をテレオペレーションする</a></h4>
<p>制御を確認し、必要に応じてカメラを追加します。</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">
<h4><a href="#3-record-dataset">データセットを記録する</a></h4>
<p>デモを記録し、必要に応じて一時停止や再開、リプレイを行います。</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">5</span>
<div className="rebot-step-content">
<h4><a href="#4-act-training">ACT ポリシーを学習する</a></h4>
<p>入力としてローカルまたは Hub 上のデータセットを選択します。</p>
</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">6</span>
<div className="rebot-step-content">
<h4><a href="#5-real-robot-deployment">ロボット上で評価する</a></h4>
<p>チェックポイントを読み込み、評価データを保存します。</p>
</div>
</section>

</div>

### SO-ARM 両腕協調デモ

<div className="video-container">
  <iframe src="https://www.youtube.com/embed/Y_P0BmlM7VI" title="SO-ARM bimanual collaboration demo" width="900" height="500" loading="lazy" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
</div>

## 0. 前提条件

<div className="rebot-step-flow">

<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">

### 依存関係をインストールする {#01-install-dependencies}

<p className="rebot-step-label">Step 1</p>

[SO-ARM クイックスタート](/ja/lerobot_so100m_new/#install-lerobot) に従って LeRobot をセットアップします。

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">

### アームを接続し USB パーミッションを確認する {#02-usb-permissions}

<p className="rebot-step-label">Step 2</p>

4 本のアームに割り当てられているポートを確認します。以降のコマンドでは、以下の例のポートを使用します。実際のポートに置き換え、左と右の割り当てが一貫していることを確認してください。

| 役割 | シリアルポートの例 | LeRobot タイプ |
| --- | --- | --- |
| 左フォロワーアーム | `/dev/ttyACM0` | `so101_follower` |
| 右フォロワーアーム | `/dev/ttyACM1` | `so101_follower` |
| 左リーダーアーム | `/dev/ttyACM2` | `so101_leader` |
| 右リーダーアーム | `/dev/ttyACM3` | `so101_leader` |

`so100_leader` と `so101_leader` は同じ実装を共有しています。

```bash
sudo chmod 666 /dev/ttyACM0 /dev/ttyACM1 /dev/ttyACM2 /dev/ttyACM3
```

</div>
</section>

</div>

## 1. キャリブレーション（重要なステップ）

<div className="rebot-step-flow">

<section className="rebot-step-item">
<span className="rebot-step-number">1</span>
<div className="rebot-step-content">

### 左フォロワーアームをキャリブレーションする {#11-calibrate-the-left-follower-arm}

<p className="rebot-step-label">Step 1</p>

```bash
lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM0 \
  --robot.id=my_awesome_bimanual_follower_left
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">2</span>
<div className="rebot-step-content">

### 右フォロワーアームをキャリブレーションする {#12-calibrate-the-right-follower-arm}

<p className="rebot-step-label">Step 2</p>

```bash
lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower_right
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">3</span>
<div className="rebot-step-content">

### 左リーダーアームをキャリブレーションする {#13-calibrate-the-left-leader-arm}

<p className="rebot-step-label">Step 3</p>

```bash
lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM2 \
  --teleop.id=my_awesome_bimanual_leader_left
```

</div>
</section>

<section className="rebot-step-item">
<span className="rebot-step-number">4</span>
<div className="rebot-step-content">

### 右リーダーアームをキャリブレーションする {#14-calibrate-the-right-leader-arm}

<p className="rebot-step-label">Step 4</p>

```bash
lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM3 \
  --teleop.id=my_awesome_bimanual_leader_right
```

</div>
</section>

</div>

LeRobot によって出力される保存パスを確認します。以下は現在の Seeed LeRobot のデフォルトフォルダです。各ファイル名は対応する `<id>.json` です。

| アーム | キャリブレーションフォルダ |
| --- | --- |
| フォロワー | `~/.cache/huggingface/lerobot/calibration/robots/so_follower/` |
| リーダー | `~/.cache/huggingface/lerobot/calibration/teleoperators/so_leader/` |

<div className="rebot-page soarm-guide">

<details className="rebot-demo-details" id="optional-if-you-have-previously-calibrated-with-other-ids">
<summary>オプション：同じアームでキャリブレーションファイルを再利用する</summary>

同じ物理アームに対してのみファイルを再利用してください。例では古い ID を使用しています。LeRobot のログでフォルダとファイル名を確認してください。

```bash
CAL_DIR=~/.cache/huggingface/lerobot/calibration

cp $CAL_DIR/robots/so_follower/my_awesome_follower_arm1.json \
   $CAL_DIR/robots/so_follower/my_awesome_bimanual_follower_left.json

cp $CAL_DIR/robots/so_follower/my_awesome_follower_arm2.json \
   $CAL_DIR/robots/so_follower/my_awesome_bimanual_follower_right.json

cp $CAL_DIR/teleoperators/so_leader/my_awesome_leader_arm3.json \
   $CAL_DIR/teleoperators/so_leader/my_awesome_bimanual_leader_left.json

cp $CAL_DIR/teleoperators/so_leader/my_awesome_leader_arm4.json \
   $CAL_DIR/teleoperators/so_leader/my_awesome_bimanual_leader_right.json
```

</details>

</div>

## 2. 両腕テレオペレーション

<span id="safety-tips" aria-hidden="true" />

:::caution Safety tips
テレオペレーションを行う前に、アームをしっかり固定し、作業空間を片付け、それぞれのリーダーが対応するフォロワーを制御していることを確認してください。
:::

<span id="21-without-camera" aria-hidden="true" />
<span id="22-with-camera" aria-hidden="true" />

<Tabs defaultValue="no-camera">
<TabItem value="no-camera" label="カメラなし">

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

</TabItem>
<TabItem value="with-camera" label="カメラあり">

`lerobot-find-cameras opencv` を実行してカメラのインデックスを確認し、自分の環境に合わせて値を置き換えてください。

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

</TabItem>
</Tabs>

## 3. データセットを記録する

ここでいうエピソードとは、ロボットの一連の動作を 1 回分まるごと記録したものを指します。

`lerobot-find-cameras opencv` を実行してカメラのインデックスを確認し、自分の環境に合わせて値を置き換えてください。

<span id="31-save-locally-do-not-upload-to-hub" aria-hidden="true" />
<span id="32-upload-to-hugging-face-hub" aria-hidden="true" />

<Tabs defaultValue="local">
<TabItem value="local" label="ローカルに保存">

この例ではアップロードを無効にし、デフォルトのキャッシュディレクトリを使用します。カスタムパスを使用するには、`--dataset.root` を追加します。`repo_id` の形式は `namespace/dataset` です。

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
  --dataset.rgb_encoder.vcodec=libsvtav1 \
  --display_data=true
```

デフォルトのパスは `~/.cache/huggingface/lerobot/seeed/bimanual_so101_task/` です。

```text
├── meta/
│   ├── info.json
│   ├── episodes/
│   ├── stats/
│   └── tasks/
├── data/
└── videos/
```

</TabItem>
<TabItem value="hub" label="Hugging Face Hub にアップロード">

`HF_USER` をあなたの Hugging Face ユーザー名に設定し、対象リポジトリへの書き込み権限があることを確認してください。この例ではアップロードを明示的に有効にしています。

```bash
export HF_USER=your_hf_username

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
  --dataset.repo_id=${HF_USER}/bimanual_so101_task \
  --dataset.push_to_hub=true \
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \
  --dataset.num_episodes=50 \
  --dataset.fps=30 \
  --dataset.episode_time_s=30 \
  --dataset.reset_time_s=10 \
  --dataset.video=true \
  --dataset.rgb_encoder.vcodec=libsvtav1 \
  --display_data=true
```

</TabItem>
</Tabs>

| オプション | 意味 |
| --- | --- |
| `--dataset.num_episodes` | この実行で記録するエピソード数。 |
| `--dataset.episode_time_s` | 各記録の長さ（秒）。 |
| `--dataset.reset_time_s` | 記録間のリセット時間（秒）。 |
| `--dataset.fps` | 記録のフレームレート。 |
| `--dataset.single_task` | デモしているタスクのテキスト説明。 |

### 3.3 記録を継続する（再開）

同じデータセットに追記するには `--resume=true` を使用します。データセット ID、保存パス、デバイス構成を一貫させてください。すでに 15 エピソード記録済みで合計 50 必要な場合は、`--dataset.num_episodes` を 35 に設定します。可能であれば、リセット中にフレームがない記録を避けるため、エピソードが完了したタイミングで停止してください。

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
  --dataset.rgb_encoder.vcodec=libsvtav1 \
  --display_data=true
```

### 3.4 エピソードの再生と削除

#### 特定のエピソードを再生する

```bash
lerobot-replay \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower \
  --dataset.repo_id=seeed/bimanual_so101_task \
  --dataset.episode=24
```

エピソードのインデックスは 0 から始まるため、`24` は 25 番目の記録を指します。

#### 特定のエピソードを削除する

:::caution
以下の例では、データセットをその場で書き換え、以前のデータを `_old` で終わるディレクトリにバックアップします。元のデータセットを保持したい場合は、[新しいデータセットとして保存](/ja/lerobot_dataset_tool/#エピソードを削除する) を使用してください。
:::

```bash
python -m lerobot.scripts.lerobot_edit_dataset \
  --repo_id=seeed/bimanual_so101_task \
  --operation.type=delete_episodes \
  --operation.episode_indices="[24]"
```

#### 古いバックアップをクリーンアップする {#delete-the-entire-dataset}

新しいデータセットを検証し、バックアップが不要になったら、削除する前にパスが `_old` で終わっていることを確認してください。

```bash
rm -rf ~/.cache/huggingface/lerobot/seeed/bimanual_so101_task_old
```

## 4. ACT トレーニング

<span id="41-train-from-local-dataset" aria-hidden="true" />
<span id="42-train-from-hugging-face-hub" aria-hidden="true" />

<Tabs defaultValue="local">
<TabItem value="local" label="ローカルデータからトレーニング">

カスタムディレクトリに記録した場合は、トレーニング時にも `--dataset.root` を設定してください。

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

</TabItem>
<TabItem value="hub" label="Hub データからトレーニング">

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

</TabItem>
</Tabs>

| オプション | 意味 |
| --- | --- |
| `--dataset.repo_id` | トレーニングデータセットの ID。 |
| `--policy.type=act` | ACT ポリシーを選択します。 |
| `--policy.device=cuda` | CUDA GPU 上でトレーニングします。 |
| `--steps` | トレーニングステップ数。コマンドには例としての値が示されています。 |
| `--output_dir` | トレーニング出力のディレクトリ。 |

これらの例では ACT のデフォルト値（`chunk_size=100` と `dim_model=512` を含む）を使用しています。

## 5. 実機ロボットへのデプロイ

:::caution
評価を開始する前に、ポリシーのチェックポイント、シリアルポート、カメラを確認し、アームの作業空間をクリアしてください。
:::

<span id="51-save-evaluation-data-locally" aria-hidden="true" />
<span id="52-upload-to-hugging-face-hub" aria-hidden="true" />

<Tabs defaultValue="local">
<TabItem value="local" label="評価データをローカルに保存">

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
  --dataset.repo_id=seeed_eval/eval_bimanual_so101_task8 \
  --dataset.root=seeed_eval/eval_bimanual_so101_task8 \
  --dataset.push_to_hub=false \
  --dataset.num_episodes=10 \
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \
  --dataset.fps=30 \
  --dataset.video=true \
  --policy.path=outputs/train/act_bimanual_so101/checkpoints/last/pretrained_model \
  --display_data=true
```

</TabItem>
<TabItem value="hub" label="評価データを Hub にアップロード">

`HF_USER` をあなたの Hugging Face ユーザー名に設定し、対象リポジトリへの書き込み権限があることを確認してください。この例ではアップロードを明示的に有効にしています。

```bash
export HF_USER=your_hf_username

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
  --dataset.repo_id=${HF_USER}/eval_bimanual_so101_task \
  --dataset.push_to_hub=true \
  --dataset.num_episodes=10 \
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \
  --dataset.fps=30 \
  --dataset.video=true \
  --policy.path=outputs/train/act_bimanual_so101/checkpoints/last/pretrained_model \
  --display_data=true
```

</TabItem>
</Tabs>

## 6. FAQ

| 問題                                                                       | 原因                                                                           | 解決策                                                                                                                                                                   |
| ------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| テレオペレーションで再キャリブレーションを求められる                    | `bi_so_follower` が `_left` / `_right` サフィックス付きのキャリブレーションファイルを見つけられない | `_left` / `_right` を含む ID で再キャリブレーションするか、既存のキャリブレーションファイルをコピーする                                                               |
| リーダーアームを手で動かせない                                            | リーダーのトルクが無効化されていない                                          | 再キャリブレーションするか、モーターを確認する                                                                                                                           |
| 記録を継続するときに "Directory already exists" と表示される             | `--resume=true` が追加されていない                                            | `lerobot-record` コマンドに `--resume=true` を追加する                                                                                                                   |
| 左右のアームが入れ替わっている                                            | ポート設定の誤り                                                               | `left_arm_config.port` と `right_arm_config.port` を入れ替える                                                                                                          |
| トレーニング中にデータセットが見つからない                               | ローカルデータセットの `root` が指定されていない                              | トレーニング時に `--dataset.root=./datasets/xxx` を追加する                                                                                                             |
| データセットが自動的にアップロードされる                                 | `push_to_hub=false` が設定されていない                                        | 記録時に `--dataset.push_to_hub=false` を追加する                                                                                                                        |
| `You must add one or several frames before calling add_episode` で終了する | リセットフェーズ中に終了したため、現在のエピソードにフレームがない            | すでに記録済みのデータには影響しないので、`--resume=true` で記録を続行する；現在のコードではこの状況は修正されており、空のエピソードは自動的にスキップされる           |
