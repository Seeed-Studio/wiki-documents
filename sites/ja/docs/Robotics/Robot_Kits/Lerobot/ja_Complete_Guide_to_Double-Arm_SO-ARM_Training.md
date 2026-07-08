---
description: LeRobot を使用した両腕 SO-ARM トレーニングの完全ガイド。
title: 両腕 SO-ARM トレーニング完全ガイド
keywords:
  - Lerobot
  - SO-ARM
  - Double Arm
  - Robotics
  - Training
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/double_soarm/Arm_kit.webp
slug: /lerobot_double_arm_so_arm_training
sku: 114993666,114993667
last_update:
  date: 7/1/2026
  author: ZhuYuan
translation:
  skip:
    - zh-CN
url: https://wiki.seeedstudio.com/ja/lerobot_double_arm_so_arm_training/
---

import Link from '@docusaurus/Link';

# 両腕 SO-ARM トレーニング完全ガイド

## はじめに

このガイドでは、LeRobot を用いて両腕 SO-ARM ロボットシステムをトレーニングするための一連の手順を説明します。ハードウェアセットアップ、アームのキャリブレーション、両腕テレオペレーション、データセットの記録と管理、ACT ポリシーのトレーニング、実機ロボットへのデプロイまでをカバーします。これらの手順に従うことで、2 本のリーダーアームと 2 本のフォロワーアームでデモデータを収集し、模倣学習ポリシーを学習させ、実機ロボットにデプロイできます。

まず、以下のように配線を接続します。


| 役割               | ポート           |
| ------------------ | -------------- |
| 左フォロワーアーム  | `/dev/ttyACM0` |
| 右フォロワーアーム | `/dev/ttyACM1` |
| 左リーダーアーム    | `/dev/ttyACM2` |
| 右リーダーアーム   | `/dev/ttyACM3` |

フォロワーアームのタイプは `so101_follower`、リーダーアームのタイプは `so101_leader` です（LeRobot では、`so100_leader` と `so101_leader` は同じ実装を共有します）。

---

## 0. 前提条件

### 0.1 依存関係のインストール

環境構築については、SO-ARM チュートリアルを参照してください：

<div style={{textAlign: 'center'}}>
    <Link to="/lerobot_so100m_new/#install-lerobot" style={{display: 'inline-block', width: 'auto', height: '40px', lineHeight: '40px', padding: '0 24px', whiteSpace: 'nowrap', backgroundColor: '#1eff00', color: '#ffffff', textDecoration: 'none', borderRadius: '28px', fontWeight: 'bold', fontSize: '18px', textAlign: 'center'}}>
        ▶ 環境構築へジャンプ
    </Link>
</div>

### 0.2 USB パーミッション

```bash
sudo chmod 666 /dev/ttyACM1 /dev/ttyACM2 /dev/ttyACM3 /dev/ttyACM4
```

## 1. キャリブレーション（重要なステップ）

### 1.1 左フォロワーアームのキャリブレーション

```bash
lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower_left
```

### 1.2 右フォロワーアームのキャリブレーション

```bash
lerobot-calibrate \
  --robot.type=so101_follower \
  --robot.port=/dev/ttyACM2 \
  --robot.id=my_awesome_bimanual_follower_right
```

### 1.3 左リーダーアームのキャリブレーション

```bash
lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM3 \
  --teleop.id=my_awesome_bimanual_leader_left
```

### 1.4 右リーダーアームのキャリブレーション

```bash
lerobot-calibrate \
  --teleop.type=so101_leader \
  --teleop.port=/dev/ttyACM4 \
  --teleop.id=my_awesome_bimanual_leader_right
```

キャリブレーション後、ファイルは次の場所に保存されます：

```text
~/.cache/huggingface/lerobot/calibration/robots/so101_follower/my_awesome_bimanual_follower_left.json
~/.cache/huggingface/lerobot/calibration/robots/so101_follower/my_awesome_bimanual_follower_right.json
~/.cache/huggingface/lerobot/calibration/robots/so101_leader/my_awesome_bimanual_leader_left.json
~/.cache/huggingface/lerobot/calibration/robots/so101_leader/my_awesome_bimanual_leader_right.json
```

### （オプション）以前に別の ID でキャリブレーションしている場合

例えば、以前に `my_awesome_follower_arm1`、`my_awesome_follower_arm2` などを使用していた場合は、キャリブレーションファイルをコピーできます：

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

---

## 2. 両腕テレオペレーション

### 2.1 カメラなし

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

### 2.2 カメラあり

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

カメラインデックスを確認するには `lerobot-find-cameras opencv` を使用できます。

### 安全上の注意

- フォロワーアーム同士が衝突しないよう、周囲の状況に注意してください。

## 3. データセットの記録

### 3.1 ローカルに保存（Hub にはアップロードしない）

`--dataset.root` と `--dataset.push_to_hub=false` を追加します。

> 注意：`repo_id` には `/` を含める必要があります。ローカルデータセットの場合は、プレースホルダの接頭辞として `local/` を使用できますが、実際にはアップロードされません。

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

データは `~///bimanual_so101_task/` に保存され、次のような構造になります：

```text
./datasets/bimanual_so101_task/
├── meta/
│   ├── info.json
│   ├── episodes/
│   ├── stats/
│   └── tasks/
├── data/
└── videos/
```

### 3.2 Hugging Face Hub へアップロード

自動的にアップロードしたい場合は、`HF_USER` を残し、`root` と `push_to_hub=false` を削除します：

```bash
export HF_USER=your_hf_username

lerobot-record \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM1 \
  --robot.right_arm_config.port=/dev/ttyACM2 \
  --robot.id=my_awesome_bimanual_follower \
  --robot.left_arm_config.cameras='{
    left_wrist: {"type": "opencv", "index_or_path": 0, "width": 640, "height": 480, "fps": 30}
  }' \
  --robot.right_arm_config.cameras='{
    right_wrist: {"type": "opencv", "index_or_path": 1, "width": 640, "height": 480, "fps": 30}
  }' \
  --teleop.type=bi_so_leader \
  --teleop.left_arm_config.port=/dev/ttyACM3 \
  --teleop.right_arm_config.port=/dev/ttyACM4 \
  --teleop.id=my_awesome_bimanual_leader \
  --dataset.repo_id=${HF_USER}/bimanual_so101_task \
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \
  --dataset.num_episodes=50 \
  --dataset.fps=30 \
  --dataset.episode_time_s=30 \
  --dataset.reset_time_s=10 \
  --dataset.video=true \
  --dataset.vcodec=libsvtav1 \
  --display_data=true
```

### 3.3 記録の継続（再開）

記録が予期せず終了した場合（例えば、リセットフェーズ中に右ボタンを押して終了した場合）や、複数回に分けて収集を完了したい場合は、`--resume` を使用して同じデータセットにエピソードを追加し続けることができます。

**注意事項**：

- 必ず `--resume=true` を追加してください。そうしないと、ディレクトリがすでに存在するために `LeRobotDataset.create()` がエラーを報告します。
- `--dataset.num_episodes` は**今回記録するエピソード数**を指し、目標の合計数ではありません。例えば、すでに 15 エピソードを記録済みで、50 まで増やしたい場合は `35` に設定します。
- できるだけエピソード記録中、または自然な終了後に終了するようにし、「Reset the environment」フェーズ中の終了は避けてください（空のエピソード保存失敗を引き起こす可能性があります）。

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

### 3.4 エピソードの再生と削除

#### 特定のエピソードを再生

```bash
lerobot-replay \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM0 \
  --robot.right_arm_config.port=/dev/ttyACM1 \
  --robot.id=my_awesome_bimanual_follower \
  --dataset.repo_id=seeed/bimanual_so101_task \
  --dataset.episode=24
```

> `episode` は 0 始まりのインデックスなので、`24` は 25 番目のエピソードを意味します。

#### 特定のエピソードを削除

```bash
python -m lerobot.scripts.lerobot_edit_dataset \
  --repo_id=seeed/bimanual_so101_task \
  --operation.type=delete_episodes \
  --operation.episode_indices="[24]"
```

削除後、データセットはその場で書き換えられ、元のデータは `./datasets/bimanual_so101_task_old/` にバックアップされます。新しいデータセットが正しいことを確認したら、バックアップを手動で削除できます：

```bash
rm -rf ./datasets/bimanual_so101_task_old
```

> 注意: 修正前の古いバージョンの LeRobot を使用している場合、`--root` をローカルデータセットのルートディレクトリに指定すると、パス解析エラーにより失敗する可能性があります。現在のプロジェクトに含まれる `lerobot_edit_dataset.py` では、この状況に対する修正が行われています。

#### データセット全体を削除する

```bash
rm -rf ./datasets/bimanual_so101_task
```

---

## 4. ACT の学習

### 4.1 ローカルデータセットから学習する

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

### 4.2 Hugging Face Hub から学習する

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

> 上記は ACT のデフォルトパラメータ（`chunk_size=100`、`dim_model=512` など）を使用しています。データセットが小さい場合（例えば 50 エピソード未満）、モデルサイズを明示的に小さくして過学習のリスクを下げることができます。例：`--policy.chunk_size=50 --policy.dim_model=256 --batch_size=16 --steps=30000`。

---

## 5. 実機ロボットへのデプロイ

### 5.1 評価データをローカルに保存する

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
  --dataset.repo_id=local/eval_bimanual_so101_task8 \
  --dataset.root=./datasets/eval_bimanual_so101_task8 \
  --dataset.push_to_hub=false \
  --dataset.num_episodes=10 \
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \
  --dataset.fps=30 \
  --dataset.video=true \
  --policy.path=outputs/train/act_bimanual_so101/checkpoints/last/pretrained_model \
  --display_data=true
```

### 5.2 Hugging Face Hub へアップロードする

```bash
export HF_USER=your_hf_username

lerobot-record \
  --robot.type=bi_so_follower \
  --robot.left_arm_config.port=/dev/ttyACM1 \
  --robot.right_arm_config.port=/dev/ttyACM2 \
  --robot.id=my_awesome_bimanual_follower \
  --robot.left_arm_config.cameras='{
    left_wrist: {"type": "opencv", "index_or_path": 0, "width": 640, "height": 480, "fps": 30}
  }' \
  --robot.right_arm_config.cameras='{
    right_wrist: {"type": "opencv", "index_or_path": 1, "width": 640, "height": 480, "fps": 30}
  }' \
  --dataset.repo_id=${HF_USER}/eval_bimanual_so101_task \
  --dataset.num_episodes=10 \
  --dataset.single_task="Pick the cube with left arm and hand it to right arm" \
  --dataset.fps=30 \
  --dataset.video=true \
  --policy.path=outputs/train/act_bimanual_so101/checkpoints/last/pretrained_model \
  --display_data=true
```

---

## 6. FAQ


| 問題                                                                      | 原因                                                                            | 解決策                                                                                                                                                                   |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| テレオペレーションで再キャリブレーションを求められる                     | `bi_so_follower` が `_left` / `_right` サフィックス付きのキャリブレーションファイルを見つけられない | `_left` / `_right` を含む ID で再キャリブレーションするか、既存のキャリブレーションファイルをコピーする                                                                |
| リーダーアームを手で動かせない                                            | リーダーのトルクが無効化されていない                                            | 再キャリブレーションするか、モーターを確認する                                                                                                                           |
| 記録を継続するときに "Directory already exists" と表示される             | `--resume=true` が追加されていない                                              | `lerobot-record` コマンドに `--resume=true` を追加する                                                                                                                   |
| 左右のアームが入れ替わっている                                            | ポート設定の誤り                                                                | `left_arm_config.port` と `right_arm_config.port` を入れ替える                                                                                                          |
| 学習中にデータセットが見つからない                                        | ローカルデータセットの `root` が指定されていない                                | 学習時に `--dataset.root=./datasets/xxx` を追加する                                                                                                                      |
| データセットが自動的にアップロードされる                                  | `push_to_hub=false` が設定されていない                                          | 記録時に `--dataset.push_to_hub=false` を追加する                                                                                                                        |
| `You must add one or several frames before calling add_episode` で終了する | リセットフェーズ中に終了したため、現在のエピソードにフレームがない              | 既に記録済みのデータには影響しません。`--resume=true` を付けて記録を続行してください。現在のコードではこの状況は修正されており、空のエピソードは自動的にスキップされます |
|                                                                           |                                                                               |                                                                                                                                                                          |
