---
description: このドキュメントでは、SO-ARM101 フォロワーアームと AmazingHand 多指ハンドを組み合わせ、LeRobot を用いてテレオペレーションを行う方法を説明します。
title: SO-ARM と AmazingHand のための完全トレーニングガイド
keywords:
  - Lerobot
  - SO-ARM
  - AmazingHand
  - Robotics
  - Teleoperation
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/soarm_amazinghand/soarm_amazinghand.webp
slug: /soarm_amazinghand_teleop
sku: 114993666,114993667,100063642,100062181
last_update:
  date: 2026-07-12
  author: ZhuYuan
translation:
  skip: [zh-CN]
createdAt: '2026-07-12'
updatedAt: '2026-07-13'
url: https://wiki.seeedstudio.com/ja/soarm_amazinghand_teleop/
---

# SO-ARM と AmazingHand のための完全トレーニングガイド

このドキュメントでは、SO-ARM101 フォロワーアームと AmazingHand 多指ハンドを組み合わせ、LeRobot を用いてテレオペレーションを行う方法を説明します。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/soarm_amazinghand/soarm_amazinghand.webp" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" style={{width: 'auto', minWidth: '195px', height: 'auto', whiteSpace: 'nowrap', paddingLeft: '20px', paddingRight: '20px'}} href="https://www.seeedstudio.com/Amazing-Hand-Right-Hand-The-Open-Source-Robotic-Hand-Developer-Kit.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> AmazingHand 今すぐ入手 🖱️</font></span></strong>
</a></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" style={{width: 'auto', minWidth: '195px', height: 'auto', whiteSpace: 'nowrap', paddingLeft: '20px', paddingRight: '20px'}} href="https://www.seeedstudio.com/SO-ARM101-Low-Cost-AI-Arm-Kit-Pro-p-6427.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> SO-ARM101 今すぐ入手 🖱️</font></span></strong>
</a></div>

## 1. ハードウェア接続

1. SOARM から AmazingHand へのアダプタ用 STL ファイルは、以下から入手できます：

[lerobot/soarm\_amazinghand\_link\_step\_stl/step at soarm\_amazinghand · xiehuangbao888/lerobot](https://github.com/xiehuangbao888/lerobot/tree/soarm_amazinghand/soarm_amazinghand_link_step_stl/step)

2. 元の SOARM グリッパを取り外します。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/soarm_amazinghand/1.webp" />
</div>

3. SOARM から AmazingHand へのアダプタをアームに取り付けます。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/soarm_amazinghand/2.webp" />
</div>

4. AmazingHand 多指ハンドを取り付けます。

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/soarm_amazinghand/3.webp" />
</div>

5. デバイスを次のように配線します：

| デバイス | シリアルポート | 説明 |
| ---------------------------------- | -------------- | --------------------- |
| SO-101 フォロワーアーム（グリッパサーボ #6 を取り外し） | `/dev/ttyACM0` | 関節サーボ 1～5 のみを使用 |
| SO-101 リーダーアーム（グリッパサーボ #6 を使用） | `/dev/ttyACM1` | グリッパの開閉を入力信号として使用 |
| AmazingHand 多指ハンド | `/dev/ttyACM2` | ID 1～8 の 8 個のサーボ |

> シリアルポート名が異なる場合は、以下のコマンド中のポート名を実際のものに置き換えてください。

---

ロボットは次のように動作します：

- `/dev/ttyACM0` を介してフォロワーアームの 5 つの関節（サーボ 1～5）を制御します。
- `/dev/ttyACM2` を介して AmazingHand 多指ハンドを制御します。
- リーダーアームの `gripper.pos` を、多指ハンドの開閉角度に **比例的に** マッピングします（0 = 全開、100 = 全閉）。

キャリブレーションファイルは自動的に次の場所に保存されます：

```text
~/.cache/huggingface/lerobot/calibration/robots/so101_amazing_hand/<robot.id>.json
~/.cache/huggingface/lerobot/calibration/teleoperators/so101_leader/<teleop.id>.json
```

---

## 2. 環境と接続

```bash
git clone https://github.com/xiehuangbao888/lerobot.git
```

既存の lerobot 仮想環境に切り替えます。

まず、デバイスの権限を付与します：

```bash
sudo chmod 666 /dev/ttyACM*
```

#### ステップ 1: リーダーアームのキャリブレーション

```bash
cd ~/lerobot
conda activate lerobot
python -m lerobot.scripts.lerobot_calibrate \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=amazing_hand_leader
```

プロンプトに従って操作します：

1. リーダーアームのすべての関節を中間位置に置き、Enter キーを押します。
2. 各関節を順番に最大および最小範囲まで動かし、最後に Enter キーを押して終了します。

#### ステップ 2: フォロワーアームのキャリブレーション

```bash
python -m lerobot.scripts.lerobot_calibrate \
    --robot.type=so101_amazing_hand \
    --robot.port=/dev/ttyACM0 \
    --robot.id=amazing_hand_follower \
    --robot.hand_port=/dev/ttyACM2
```

プロンプトに従って操作します：

1. フォロワーアームの 5 つの関節を中間位置に置き、Enter キーを押します。
2. 5 つの関節を順番に最大および最小範囲まで動かし、最後に Enter キーを押して終了します。

> 注: フォロワーアームには 5 つの関節しかなく、グリッパサーボ #6 は取り外されています。

#### ステップ 3: テレオペレーションの実行

```bash
python -m lerobot.scripts.lerobot_teleoperate \
    --robot.type=so101_amazing_hand \
    --robot.port=/dev/ttyACM0 \
    --robot.id=amazing_hand_follower \
    --robot.hand_port=/dev/ttyACM2 \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=amazing_hand_leader \
    --display_data=true
```

---

把持動作はカスタマイズ可能です。関連するファイルは次の場所にあります：

```text
src/lerobot/robots/so_amazing_hand/config_so_amazing_hand.py
```

---

## 3. 多指ハンドでデータセットを収集する

```bash
python -m lerobot.scripts.lerobot_record \
    --robot.type=so101_amazing_hand \
    --robot.port=/dev/ttyACM0 \
    --robot.id=amazing_hand_follower \
    --robot.hand_port=/dev/ttyACM2 \
    --robot.cameras='{
      wrist: {type: opencv, index_or_path: 2, width: 640, height: 480, fps: 30},
      top: {type: opencv, index_or_path: 4, width: 640, height: 480, fps: 30}
    }' \
    --teleop.type=so101_leader \
    --teleop.port=/dev/ttyACM1 \
    --teleop.id=amazing_hand_leader \
    --display_data=true \
    --dataset.repo_id=seeed/amazing_soarm \
    --dataset.num_episodes=20 \
    --dataset.single_task="Pick up the cube with the dexterous hand"
```

パラメータの説明：

| パラメータ | 説明 |
| --------------------------------------- | ---------------------------------------------------------------------------------- |
| `--robot.cameras` | カメラ設定。`opencv`、`realsense` などをサポートします。`index_or_path` はカメラのインデックスまたはビデオストリームのパスです。 |
| `--dataset.repo_id` | Hugging Face 上のデータセット ID。形式は `{username}/{dataset_name}` です。 |
| `--dataset.num_episodes` | 記録するエピソード数。 |
| `--dataset.single_task` | データセットのメタデータに書き込まれるタスクの説明。 |
| `--robot.hand_use_proportional_control` | 既定値は `true` で、明示的に設定する必要はありません。`false` にすると開閉の 2 値動作になります。 |

---

## 4. ポリシーの学習

```bash
lerobot-train \
  --dataset.repo_id=seeed/amazing_soarm \
  --policy.type=act \
  --output_dir=outputs/train/amazing_soarm \
  --job_name=amazing_soarm \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=60000 \
```

## 5. 評価とデプロイ

### 学習済みポリシーを実機ロボットで評価する

```bash
python -m lerobot.scripts.lerobot_record \
    --robot.type=so101_amazing_hand \
    --robot.port=/dev/ttyACM0 \
    --robot.id=amazing_hand_follower \
    --robot.hand_port=/dev/ttyACM2 \
    --robot.cameras='{
      wrist: {type: opencv, index_or_path: 0, width: 640, height: 480, fps: 30},
      top: {type: opencv, index_or_path: 4, width: 640, height: 480, fps: 30}
    }' \
    --policy.path=outputs/train/amazing_soarm/checkpoints/last/pretrained_model \
    --dataset.repo_id=seeed_val/amazinghand_pick_cube_eval \
    --dataset.num_episodes=10 \
    --dataset.single_task="Pick up the cube with the dexterous hand" \
    --display_data=true
```
