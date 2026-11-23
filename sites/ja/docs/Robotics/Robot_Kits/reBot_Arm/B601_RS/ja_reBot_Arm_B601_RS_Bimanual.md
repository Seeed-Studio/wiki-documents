---
description: このWikiでは、LeRobot を使用した 2 台の reBot RS / DM アームのキャリブレーション、テレオペレーション、データ収集、および ACT トレーニングについて説明します。
title: reBot-RS 両腕協調
keywords:
  - LeRobot
  - Huggingface
  - robotic arm
  - rebot arm
  - robotics
slug: /rebot_arm_b601_rs_bimanual
sku: 100065783, 100095532, 100063143, 100045679, 100040187
last_update:
  date: 2026-11-19
  author: zhuyuan
translation:
  skip: [[zh-CN]]
createdAt: '2026-11-19'
updatedAt: '2026-11-19'
url: https://wiki.seeedstudio.com/ja/rebot_arm_b601_rs_bimanual/
---

import '/src/css/rebot-wiki-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# reBot-RS 両腕協調

<div style={{ textAlign: 'center' }}>
    <img width={800} style={{ maxWidth: '100%', height: 'auto' }} alt="reBot-RS bimanual collaboration"
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS_Bimanual/rs_bimanual.webp" />
</div>

<div className="rebot-buy-button-group">
  <span className="rebot-buy-button-glow" aria-hidden="true"></span>
  <a className="rebot-buy-button" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank" rel="noopener noreferrer">
    <span>今すぐ入手</span>
    <svg className="rebot-buy-button-arrow" aria-hidden="true" viewBox="0 0 10 10" width="10" height="10" fill="none">
      <path className="rebot-buy-button-arrow-line" d="M0 5h7"></path>
      <path className="rebot-buy-button-arrow-head" d="M1 1l4 4-4 4"></path>
    </svg>
  </a>
</div>


## 1. 環境構築

2 台のアームを使用する前に、単腕の入門チュートリアルに従って環境をセットアップしてください：

- [reBot-RS クイックスタート](/ja/rebot_b601_rs_getting_started/)
- [LeRobot を用いた reBot-RS](/ja/rebot_arm_b601_rs_lerobot/)

### 1.1 既存環境をアクティベートする

単腕ワークフロー全体を正常に完了したら、続いて両腕用の環境をインストールします。

```bash
conda activate lerobot

cd ~
git clone https://github.com/xiehuangbao888/lerobot-robot-seeed-b601.git
cd lerobot-robot-seeed-b601
pip install -e .
```

### 1.2 本ガイドで使用するポート割り当て

| デバイス | 左 | 右 |
| --- | --- | --- |
| Arm 102 リーダー | `/dev/ttyUSB0` | `/dev/ttyUSB1` |
| RS フォロワー | `can0` | `can1` |
| DM フォロワー、Damiao シリアル | `/dev/ttyACM0` | `/dev/ttyACM1` |

## 2. 両腕キャリブレーション

キャリブレーションおよびその後の操作の間は、同じ `robot.id` と `teleop.id` を維持してください。RS と DM の両方のサンプルでは `bi_follower` を使用し、2 台のリーダーには `bi_leader` を使用します。`id` はモーターモデルではなくキャリブレーションファイルを識別します。以前に DM アームを `bi_follower_dm` でキャリブレーションしている場合は、それらのアームに対する後続のコマンドでもその ID を使い続けてください。

<Tabs groupId="rebot-bimanual-motor" defaultValue="rs">
<TabItem value="rs" label="RS">

### 2.1 2 台の RS フォロワーをキャリブレーションする

**RS**

**左**

```bash
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```

**右**

```bash
sudo ip link set can1 down 2>/dev/null
sudo ip link set can1 type can bitrate 1000000
sudo ip link set can1 up
```

```bash
lerobot-calibrate \
    --robot.type=bi_seeed_b601_follower \
    --robot.id=bi_follower \
    --robot.left_arm_config.motor_family=rs \
    --robot.left_arm_config.port=can0 \
    --robot.right_arm_config.motor_family=rs \
    --robot.right_arm_config.port=can1
```

</TabItem>
<TabItem value="dm" label="DM">

### 2.2 2 台の DM フォロワーをキャリブレーションする：Damiao シリアル

```bash
sudo chmod 666 /dev/ttyACM*
```

```bash
lerobot-calibrate \
    --robot.type=bi_seeed_b601_follower \
    --robot.id=bi_follower \
    --robot.left_arm_config.motor_family=dm \
    --robot.left_arm_config.port=/dev/ttyACM0 \
    --robot.right_arm_config.motor_family=dm \
    --robot.right_arm_config.port=/dev/ttyACM1
```

</TabItem>
</Tabs>

### 2.3 2 台のリーダーをキャリブレーションする

```bash
lerobot-calibrate \
    --teleop.type=bi_seeed_102_leader \
    --teleop.id=bi_leader \
    --teleop.left_arm_config.port=/dev/ttyUSB0 \
    --teleop.right_arm_config.port=/dev/ttyUSB1
```

### 2.4 キャリブレーション手順

:::warning

1. 指示に従って、左アームと右アームをこの順番でキャリブレーションします。
2. すでにキャリブレーションが存在する場合は、Enter キーを押して再利用するか、`c` を入力して Enter キーを押し、再キャリブレーションします。
3. アームを手動でゼロ位置に合わせるよう求められたら、現在のアーム全体を指定されたゼロ姿勢に動かし、空のグリッパーを完全に閉じてから確定します。
4. フォロワーのキャリブレーションでは、グリッパーだけでなくフォロワーアーム全体のすべてのモーターのゼロ位置がリセットされます。任意の姿勢でゼロ位置を確定しないでください。

キャリブレーションを終了しても、アームは自動的にはリセットされません。キャリブレーションファイルはデフォルトで `~/.cache/huggingface/lerobot/calibration/` 以下に保存され、下位デバイスタイプごとのサブディレクトリと、各サイドの ID に付加される `_left` または `_right` を含みます。物理アームを交換したりモーターのゼロ位置を変更した場合は、キャリブレーションを再確認してください。

:::

## 3. 両腕テレオペレーション

<Tabs groupId="rebot-bimanual-motor" defaultValue="rs">
<TabItem value="rs" label="RS">

### 3.1 2 台の RS アームをテレオペレーションする

```bash
lerobot-teleoperate \
    --robot.type=bi_seeed_b601_follower \
    --robot.id=bi_follower \
    --robot.left_arm_config.motor_family=rs \
    --robot.left_arm_config.port=can0 \
    --robot.right_arm_config.motor_family=rs \
    --robot.right_arm_config.port=can1 \
    --teleop.type=bi_seeed_102_leader \
    --teleop.id=bi_leader \
    --teleop.left_arm_config.port=/dev/ttyUSB0 \
    --teleop.right_arm_config.port=/dev/ttyUSB1
```

</TabItem>
<TabItem value="dm" label="DM">

### 3.2 2 台の DM アームをテレオペレーションする：Damiao シリアル

```bash
lerobot-teleoperate \
    --robot.type=bi_seeed_b601_follower \
    --robot.id=bi_follower \
    --robot.left_arm_config.motor_family=dm \
    --robot.left_arm_config.port=/dev/ttyACM0 \
    --robot.right_arm_config.motor_family=dm \
    --robot.right_arm_config.port=/dev/ttyACM1 \
    --teleop.type=bi_seeed_102_leader \
    --teleop.id=bi_leader \
    --teleop.left_arm_config.port=/dev/ttyUSB0 \
    --teleop.right_arm_config.port=/dev/ttyUSB1
```

</TabItem>
</Tabs>

## 4. データ収集

記録コマンドを実行する前に、テレオペレーションが動作することを確認してください。サンプルでは、データパイプラインを確認するために 20 秒間のエピソードを 2 本記録します。実際にデモするタスクに合わせて `dataset.single_task` を置き換えてください。

<Tabs groupId="rebot-bimanual-motor" defaultValue="rs">
<TabItem value="rs" label="RS">

### 4.1 2 台の RS アーム：3 カメラ記録

```bash
lerobot-record \
    --robot.type=bi_seeed_b601_follower \
    --robot.id=bi_follower \
    --robot.left_arm_config.motor_family=rs \
    --robot.left_arm_config.port=can0 \
    --robot.right_arm_config.motor_family=rs \
    --robot.right_arm_config.port=can1 \
    --robot.cameras='{
      top: {
        type: opencv,
        index_or_path: "/dev/video0",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      left_wrist: {
        type: opencv,
        index_or_path: "/dev/video2",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      right_wrist: {
        type: opencv,
        index_or_path: "/dev/video4",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      }
    }' \
    --teleop.type=bi_seeed_102_leader \
    --teleop.id=bi_leader \
    --teleop.left_arm_config.port=/dev/ttyUSB0 \
    --teleop.right_arm_config.port=/dev/ttyUSB1 \
    --dataset.repo_id=seeed_rebot/test \
    --dataset.single_task="pick the cube" \
    --dataset.fps=30 \
    --dataset.num_episodes=2 \
    --dataset.episode_time_s=20 \
    --dataset.reset_time_s=10 \
    --dataset.push_to_hub=false \
    --display_data=false
```

</TabItem>
<TabItem value="dm" label="DM">

### 4.2 2 台の DM アーム：Damiao シリアルと 3 カメラ記録

```bash
lerobot-record \
    --robot.type=bi_seeed_b601_follower \
    --robot.id=bi_follower \
    --robot.left_arm_config.motor_family=dm \
    --robot.left_arm_config.port=/dev/ttyACM0 \
    --robot.right_arm_config.motor_family=dm \
    --robot.right_arm_config.port=/dev/ttyACM1 \
    --robot.cameras='{
      top: {
        type: opencv,
        index_or_path: "/dev/video0",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      left_wrist: {
        type: opencv,
        index_or_path: "/dev/video2",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      right_wrist: {
        type: opencv,
        index_or_path: "/dev/video4",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      }
    }' \
    --teleop.type=bi_seeed_102_leader \
    --teleop.id=bi_leader \
    --teleop.left_arm_config.port=/dev/ttyUSB0 \
    --teleop.right_arm_config.port=/dev/ttyUSB1 \
    --dataset.repo_id=seeed_rebot/test \
    --dataset.single_task="pick the cube" \
    --dataset.fps=30 \
    --dataset.num_episodes=2 \
    --dataset.episode_time_s=20 \
    --dataset.reset_time_s=10 \
    --dataset.push_to_hub=false \
    --display_data=false
```

</TabItem>
</Tabs>

## 5. トレーニングと評価

:::note

このセクションでは、reBot-RS LeRobot のトレーニング手法を維持しつつ、上記の RS 両腕構成に合わせて評価、オプションのテレオペレーション、および非同期推論クライアントを調整します。両腕データセットでトレーニングしたモデルを使用し、キャリブレーション ID、カメラ名、解像度、フレームレートを記録時と一致させてください。データセット名、タスクの説明、モデルパスは実際の値に置き換えてください。この両腕環境では `trackio.enable` を使用します。元のチュートリアルの `wandb.enable` 設定は、インストールされているバージョンに合わせて調整してください。

:::

<Tabs>
<TabItem value="act" label="ACT">

公式チュートリアル [ACT](https://huggingface.co/docs/lerobot/act) を参照してください

**トレーニング**

ロボットを制御するポリシーをトレーニングするには、`python -m lerobot.scripts.train` スクリプトを使用します。いくつかのパラメータは必須です。以下はコマンド例です：

```bash
lerobot-train \
  --dataset.repo_id=${HF_USER}/rebot_test \
  --policy.type=act \
  --output_dir=outputs/train/act_rebot_test \
  --job_name=act_rebot_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --steps=300000
```

**ローカルデータセットでトレーニングしたい場合は、`repo_id` がデータ収集時に使用した名前と一致していることを確認し、`--policy.push_to_hub=false` を追加してください。**

```bash
lerobot-train \
  --dataset.repo_id=seeed_rebot_b601_rs/test \
  --policy.type=act \
  --output_dir=outputs/train/act_rebot_test \
  --job_name=act_rebot_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=300000
```

:::tip

RTX 50 シリーズ GPU を使用している場合、torchvision のプレビュー版で不足している API を回避するために `--dataset.video_backend=pyav` を追加する必要があります。トレーニングコマンドは次のようになります：

```bash
lerobot-train \
  --dataset.repo_id=seeed_rebot_b601_rs/test \
  --dataset.video_backend=pyav \
  --policy.type=act \
  --output_dir=outputs/train/act_rebot_test \
  --policy.device=cuda \
  --wandb.enable=false \
  --policy.push_to_hub=false \
  --steps=300000
```

:::

コマンドの説明

- **データセット指定**：パラメータ `--dataset.repo_id=${HF_USER}/rebot_test` を使ってデータセットを指定します。
- **トレーニングステップ数**：`--steps=300000` を使ってトレーニングステップ数を変更します。アルゴリズムのデフォルトは 800000 ステップです。タスクの難易度に応じて調整してください。よく分からない場合は多めに設定して構いません。トレーニング中にチェックポイントが生成され、任意のチェックポイントから評価を再開できます。
- **ポリシータイプ**：`policy.type=act` でポリシーを指定します。同様に、[`act`, `diffusion`, `pi0`, `pi0fast`, `sac`, `smolvla`] などのポリシーを切り替えることもできます。これにより `configuration_act.py` から設定が読み込まれます。重要な点として、このポリシーは、モータ状態・モータアクション・カメラ台数といった情報がすでにデータセットに保存されているため、ロボットに合わせて自動的に適応します。
- **デバイス選択**：Nvidia GPU 上でトレーニングするため `policy.device=cuda` を指定していますが、Apple Silicon 上でトレーニングする場合は `policy.device=mps` を使用できます。
- **可視化ツール**：`wandb.enable=true` を指定することで、[Weights and Biases](https://docs.wandb.ai/quickstart) を使ってトレーニングチャートを可視化します。これは任意ですが、使用する場合は `wandb login` を実行してログインしていることを確認してください。

**評価**

ポリシーのチェックポイントを入力として、[`lerobot/record.py`](https://github.com/huggingface/lerobot/blob/main/lerobot/record.py) の `record` 関数を使用できます。例えば、次のコマンドを実行して 10 エピソード分の評価を記録します：

```bash
lerobot-record \
  --robot.type=bi_seeed_b601_follower \
  --robot.left_arm_config.motor_family=rs \
  --robot.left_arm_config.port=can0 \
  --robot.right_arm_config.motor_family=rs \
  --robot.right_arm_config.port=can1 \
  --robot.cameras='{
      top: {
        type: opencv,
        index_or_path: "/dev/video0",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      left_wrist: {
        type: opencv,
        index_or_path: "/dev/video2",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      right_wrist: {
        type: opencv,
        index_or_path: "/dev/video4",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      }
    }' \
  --robot.id=bi_follower \
  --display_data=false \
  --dataset.repo_id=seeed/eval_test123 \
  --dataset.single_task="Put lego brick into the transparent box" \
  --policy.path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model
```

1. `--policy.path` パラメータは、ポリシートレーニング結果の重みファイルへのパスを示します（例：`outputs/train/act_rebot_test/checkpoints/last/pretrained_model`）。モデルのトレーニング結果の重みファイルを Hub にアップロードした場合は、モデルリポジトリ（例：`${HF_USER}/act_rebot_test`）を使用することもできます。
2. データセット名 `dataset.repo_id` は `eval_` で始まります。この操作により、評価中の動画とデータが別途記録され、`seeed/eval_test123` のような `eval_` で始まるフォルダに保存されます。
3. 評価フェーズ中に `File exists: 'home/xxxx/.cache/huggingface/lerobot/xxxxx/seeed/eval_xxxx'` に遭遇した場合は、まず `eval_` で始まるフォルダを削除してから、再度プログラムを実行してください。
4. `mean is infinity. You should either initialize with stats as an argument or use a pretrained model` が発生した場合、`--robot.cameras` パラメータ内の `top`、`left_wrist`、`right_wrist` などのキーワードは、データセット収集時に使用したものと厳密に一致している必要があることに注意してください。

</TabItem>

<TabItem value="smolvla" label="SmolVLA">

公式チュートリアル [SmolVLA](https://huggingface.co/docs/lerobot/smolvla) を参照してください。

SmolVLA は、Hugging Face が提供する**軽量なロボット基盤モデル**です。自分で記録した LeRobot データセットを使って**素早くファインチューニング**し、実機ロボットで結果を得られるように設計されています。

簡単に言うと、その入出力は次のとおりです：

- 入力：マルチカメラ映像 + ロボットの現在の状態（センサー／関節など）+ 自然言語によるタスク指示
- 出力：ロボットアームにタスクを実行させるための連続的なアクションチャンク

```bash
pip install -e ".[smolvla]"
```

**データセット収集（推奨）**

SmolVLA は「基盤モデル」です。自分のテーブル、自分のカメラ、グリッパ、物体で良い性能を出すには、通常、自前のデータでファインチューニングする必要があります。

- まずは約 50 エピソードから始めてください（少なすぎると学習・汎化がうまくいかない可能性があります）。
- タスクに「変数」（例：テーブル上のキューブ位置の違い）がある場合は、それぞれのバリエーションに十分なデモがあるようにしてください：
  - 例：5 つの位置 × 各 10 エピソード = 50 エピソード
- 経験則：25 エピソードだけの記録では不十分であることが多いです。データの質と量の両方が重要です。

**トレーニング**

事前学習済み 450M モデルである `smolvla_base` を出発点として使用し、自分のデータセットでファインチューニングします。公式の例では 20k ステップ学習し、単一の A100 では約 4 時間かかります（あくまで参考値であり、実際の時間はハードウェアによって異なります）。

GPU が利用できない場合は、Colab ノートブック経由でのトレーニングを検討してください（公式チュートリアルを参照）。

```bash
lerobot-train \
  --policy.path=lerobot/smolvla_base \
  --dataset.repo_id=${HF_USER}/mydataset \
  --batch_size=64 \
  --steps=20000 \
  --output_dir=outputs/train/my_smolvla \
  --job_name=my_smolvla_training \
  --policy.device=cuda \
  --wandb.enable=true
```

ヒント：

- メモリ不足になった場合は、まず `--batch_size` を減らしてください。動作するようになったら、徐々に増やしていきます。
- 利用可能なパラメータ：`lerobot-train --help`

**評価**

評価フェーズでは、ファインチューニング済みモデルを読み込み、ロボットにタスクを実行させ、その評価プロセスを新しいデータセットとして記録します（動画の振り返りや結果分析のため）。

```bash
lerobot-record \
  --robot.type=bi_seeed_b601_follower \
  --robot.left_arm_config.motor_family=rs \
  --robot.left_arm_config.port=can0 \
  --robot.right_arm_config.motor_family=rs \
  --robot.right_arm_config.port=can1 \
  --robot.id=bi_follower \
  --robot.cameras='{
      top: {
        type: opencv,
        index_or_path: "/dev/video0",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      left_wrist: {
        type: opencv,
        index_or_path: "/dev/video2",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      right_wrist: {
        type: opencv,
        index_or_path: "/dev/video4",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      }
    }' \
  --dataset.single_task="Grasp a lego block and put it in the bin." \
  --dataset.repo_id=${HF_USER}/eval_DATASET_NAME_test \
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  --policy.path=${HF_USER}/FINETUNE_MODEL_NAME
```

パラメータの記入方法：

- `--robot.left_arm_config.port` および `--robot.right_arm_config.port`：左・右 RS フォロワーの CAN インターフェースを使用します。このガイドでは `can0` と `can1` です。
- `--robot.id`：ロボット ID（キャリブレーション／記録時に使用したものと一致している必要があります）。
- `--robot.cameras`：実際のカメラの `index_or_path` に変更し、カメラキー（例：`top`、`left_wrist`、`right_wrist`）がデータセット記録時に使用したものと完全に一致していることを確認してください。
- `--dataset.single_task`：データセット記録時に使用したタスク説明と一致させる必要があります。
- `--dataset.repo_id`：評価出力データセット名です。Hugging Face にログインしている場合は、自分のアカウント配下に作成／アップロードされます。
- `--policy.path`：
  - モデルがローカルにある場合：トレーニング出力ディレクトリ配下の重みパスを記入します（例：`outputs/train/my_smolvla/checkpoints/last/pretrained_model`）
  - モデルが Hub 上にある場合：`${HF_USER}/FINETUNE_MODEL_NAME` を記入します

任意：評価エピソード間で「手動テレオペで微調整」したい場合は、テレオペを追加できます（自分のデバイスと設定に応じて記入）：

```bash
--teleop.type=bi_seeed_102_leader \
--teleop.left_arm_config.port=/dev/ttyUSB0 \
--teleop.right_arm_config.port=/dev/ttyUSB1 \
--teleop.id=bi_leader
```

</TabItem>

<TabItem value="pi0" label="Pi0">

公式チュートリアル [Pi0](https://huggingface.co/docs/lerobot/pi0) を参照してください。

π₀ (Pi0) は、より「汎用的な」ロボット制御のために Physical Intelligence が提案した **Vision-Language-Action** モデルです。カメラ画像を見ることができ、自然言語の指示を理解し、そのうえでロボットアームを制御するアクションを出力できる、と考えることができます。

LeRobot での利用は非常にシンプルで、トレーニング時にポリシータイプを `--policy.type=pi0` に設定するだけです（ACT セクションで説明した一般的なトレーニング／評価の概念を繰り返す必要はありません）。

```bash
pip install -e ".[pi]"
```

:::tip
古いバージョンの LeRobot（例：0.4.0）を使用している場合、GitHub ソースから `pi` 依存関係をインストールする必要があるかもしれません（公式ドキュメントは今後のパッチでこれを修正する予定です）：

```bash
pip install "lerobot[pi]@git+https://github.com/huggingface/lerobot.git"
```

:::

**トレーニング**

```bash
lerobot-train \
  --policy.type=pi0 \
  --dataset.repo_id=${HF_USER}/my_dataset \
  --job_name=pi0_training \
  --output_dir=outputs/pi0_training \
  --policy.pretrained_path=lerobot/pi0_base \
  --policy.repo_id=${HF_USER}/my_pi0_policy \
  --policy.compile_model=true \
  --policy.gradient_checkpointing=true \
  --policy.dtype=bfloat16 \
  --policy.freeze_vision_encoder=false \
  --policy.train_expert_only=false \
  --steps=3000 \
  --policy.device=cuda \
  --batch_size=32 \
  --wandb.enable=false
```

共通パラメータ（Pi0 固有／よく調整するもののみ）：

- `--policy.pretrained_path=lerobot/pi0_base`：ベースモデルです。公式では `lerobot/pi0_libero`（Libero データセット向けバージョン）も提供しており、タスクに応じて切り替えを試すことができます。
- `--policy.compile_model=true`：コンパイル最適化を有効にし、トレーニングが高速になる場合があります（初回コンパイルは遅くなります）。
- `--policy.gradient_checkpointing=true`：VRAM を大幅に節約します。VRAM が厳しい場合に適しています。
- `--policy.dtype=bfloat16`：混合精度で、速度／VRAM の両面でより有利です（ハードウェアが対応している場合に推奨）。
- `--policy.train_expert_only=true`（VRAM 節約テクニック）：大きなモデル（VLM）部分を凍結し、「アクションエキスパート」と射影層のみを学習します。より多くの VRAM を節約できますが、学習可能な容量は制限されます。まずは入門用や小規模データでの素早い実験に適しています。

**評価**

```bash
lerobot-record \
  --robot.type=bi_seeed_b601_follower \
  --robot.left_arm_config.motor_family=rs \
  --robot.left_arm_config.port=can0 \
  --robot.right_arm_config.motor_family=rs \
  --robot.right_arm_config.port=can1 \
  --robot.cameras='{
      top: {
        type: opencv,
        index_or_path: "/dev/video0",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      left_wrist: {
        type: opencv,
        index_or_path: "/dev/video2",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      right_wrist: {
        type: opencv,
        index_or_path: "/dev/video4",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      }
    }' \
  --robot.id=bi_follower \
  --display_data=false \
  --dataset.repo_id=${HF_USER}/eval_my_pi0_test \
  --dataset.single_task="Put lego brick into the transparent box" \
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  --policy.path=outputs/pi0_training/checkpoints/last/pretrained_model
```

</TabItem>

<TabItem value="pi05" label="Pi0.5">

公式チュートリアル [Pi0.5](https://huggingface.co/docs/lerobot/pi05) を参照してください。

π₀.₅ (Pi0.5) も Physical Intelligence によって提案された **Vision-Language-Action** モデルであり、π₀ の「アップグレード版」と理解できます。特に強化された **オープンワールド汎化** 能力に重点を置いており、学習時に見た固定シナリオで高い性能を発揮するだけでなく、新しい部屋・新しい物体・新しい配置でも、より信頼性高くタスクを完了できます。

ここで扱う「汎化」は、おおまかに次の 3 つのレベルに分けられます（理解のための例）：

- **物理レイヤー**：持ち手（ハンドル）や縁を理解して、見慣れないスプーン／皿を把持し、散らかった環境でも操作できること。
- **意味レイヤー**：「物をどこに置くべきか／どの道具を使うべきか」を理解すること。例：靴は下駄箱、服は洗濯かごに入れる、など。
- **環境レイヤー**：家庭・オフィス・病院など、より現実的で「散らかった」シナリオに適応できること。

LeRobot で利用するには、policy type を `--policy.type=pi05` に設定するだけです。

```bash
pip install -e ".[pi]"
```

:::tip
古いバージョンの LeRobot（例：0.4.0）を使用している場合は、GitHub ソースから `pi` 依存関係をインストールする必要があるかもしれません（公式ドキュメント側で今後のパッチで修正予定）：

```bash
pip install "lerobot[pi]@git+https://github.com/huggingface/lerobot.git"
```

:::

**学習**

```bash
lerobot-train \
  --dataset.repo_id=${HF_USER}/my_dataset \
  --policy.type=pi05 \
  --output_dir=outputs/pi05_training \
  --job_name=pi05_training \
  --policy.repo_id=${HF_USER}/my_pi05_policy \
  --policy.pretrained_path=lerobot/pi05_base \
  --policy.compile_model=true \
  --policy.gradient_checkpointing=true \
  --policy.dtype=bfloat16 \
  --policy.freeze_vision_encoder=false \
  --policy.train_expert_only=false \
  --steps=3000 \
  --policy.device=cuda \
  --batch_size=32 \
  --wandb.enable=false
```

共通パラメータ（Pi0.5 関連）：

- `--policy.pretrained_path=lerobot/pi05_base`: ベースモデル。公式からは `lerobot/pi05_libero` も提供されています。
- `--policy.train_expert_only=true`（VRAM 節約テクニック）：大規模モデル（VLM）部分を凍結し、「action expert」と射影層のみを学習します。
- `--policy.normalization_mapping=...`: データセットの正規化統計が一致しない／欠けている場合、このマッピングを使って正規化方法を強制できます。

データセットに分位点統計（バージョン／フォーマットによっては必須）がない場合、公式は変換スクリプトによるアプローチも提供しています：学習前にデータセット統計を補完／変換します（詳細は公式ドキュメントを参照）。

**評価**

```bash
lerobot-record \
  --robot.type=bi_seeed_b601_follower \
  --robot.left_arm_config.motor_family=rs \
  --robot.left_arm_config.port=can0 \
  --robot.right_arm_config.motor_family=rs \
  --robot.right_arm_config.port=can1 \
  --robot.cameras='{
      top: {
        type: opencv,
        index_or_path: "/dev/video0",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      left_wrist: {
        type: opencv,
        index_or_path: "/dev/video2",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      right_wrist: {
        type: opencv,
        index_or_path: "/dev/video4",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      }
    }' \
  --robot.id=bi_follower \
  --display_data=false \
  --dataset.repo_id=${HF_USER}/eval_my_pi05_test \
  --dataset.single_task="Put lego brick into the transparent box" \
  --dataset.episode_time_s=50 \
  --dataset.num_episodes=10 \
  --policy.path=outputs/pi05_training/checkpoints/last/pretrained_model
```

</TabItem>

<TabItem value="groot-n15" label="GR00T N1.5">

公式チュートリアル [GR00T N1.5](https://huggingface.co/docs/lerobot/groot) を参照してください。

GR00T N1.5 は、より汎用的なロボット推論とスキル学習のために NVIDIA が提供するオープンな基盤モデルです。これは **クロスエンボディメント** モデルであり、**言語** や **画像** などのマルチモーダル入力を受け取り、異なる環境にまたがってマニピュレーションタスクを実行できます。

LeRobot で利用する際の鍵は、policy type を `--policy.type=groot` に設定することです。注意：GR00T N1.5 は現在、より高い環境要件があり（FlashAttention に依存し、CUDA GPU が必要）、まず ACT / Pi0 を動作させてから GR00T を試すことを推奨します。

**インストール（重要）**

公式ドキュメントによると、GR00T N1.5 を動作させるには **flash-attn** が必要であり、**CUDA 対応デバイス** でのみ使用できます。

推奨手順（順番に実行）：

1. まずインストールガイドに従ってベース環境（Python、CUDA、ドライバなど）を構築します。このステップでは **`lerobot` をインストールしないでください**。
2. PyTorch をインストールします（バージョン範囲は公式要件に従う）：

```bash
pip install "torch>=2.2.1,<2.8.0" "torchvision>=0.21.0,<0.23.0"
```

:::tip
RTX 50 シリーズを使用している場合は、Python=3.10、CUDA=12.8、Torch=2.7.1 が必要です。

```bash
pip install torch==2.7.1 torchvision==0.22.1 torchaudio==2.7.1 --index-url https://download.pytorch.org/whl/cu128
```

:::

3. flash-attn の依存関係と flash-attn 本体をインストールします：

```bash
pip install ninja "packaging>=24.2,<26.0"
pip install "flash-attn>=2.5.9,<3.0.0" --no-build-isolation
python -c "import flash_attn; print(f'Flash Attention {flash_attn.__version__} imported successfully')"
```

:::tip
RTX 50 シリーズを使用している場合は、flash_attn=2.8.0 が必要です。

```bash
pip install flash_attn==2.8.0.post2 torch==2.7.1 --no-build-isolation
```

:::

4. LeRobot の groot 依存関係をインストールします：

```bash
pip install "lerobot[groot]"
```

:::tip
flash-attn のインストールに失敗する場合、多くは (1) PyTorch／CUDA バージョンの不整合、(2) ビルド依存関係の不足、(3) 環境が新しすぎる／古すぎる、のいずれかに関連しています。この場合は、まず公式の GR00T ドキュメントと PyTorch インストールガイドを参照してください。
:::

**学習（ファインチューニング）**

公式はマルチ GPU 学習例（`accelerate launch --multi_gpu ...`）を提供しています。GPU が 1 枚しかない場合は、シングルプロセスモードでの実行も試せます（サポート状況／パラメータ詳細は公式ドキュメントに従います）。

マルチ GPU（変数は置き換えが必要）：

```bash
accelerate launch \
  --multi_gpu \
  --num_processes=$NUM_GPUS \
  $(which lerobot-train) \
  --output_dir=$OUTPUT_DIR \
  --save_checkpoint=true \
  --batch_size=$BATCH_SIZE \
  --steps=$NUM_STEPS \
  --save_freq=$SAVE_FREQ \
  --log_freq=$LOG_FREQ \
  --policy.push_to_hub=true \
  --policy.type=groot \
  --policy.repo_id=$REPO_ID \
  --policy.tune_diffusion_model=false \
  --dataset.repo_id=$DATASET_ID \
  --wandb.enable=true \
  --wandb.disable_artifact=true \
  --job_name=$JOB_NAME
```

パラメータ説明（よく変更するもの）：

- `--dataset.repo_id`: 学習用データセット（Hub 上の `username/dataset_name`、または対応する `repo_id` のローカルキャッシュ）。
- `--output_dir`: 学習出力ディレクトリ（ここに重み／チェックポイントが保存されます）。
- `--steps`, `--batch_size`: 学習ステップ数とバッチサイズ。大規模モデルは VRAM に敏感なため、動作しない場合はまず `batch_size` を小さくしてください。
- `--policy.repo_id`: モデルを Hub にプッシュしたい場合、作成したいモデルリポジトリ名を指定します。

**評価（ロボット上での実行）**

学習後は、他の policy と同様に `lerobot-record` を使って評価／記録ができます。reBot B601-RS 両腕ユーザーは、以下のコマンドを参考にしてください：

```bash
lerobot-record \
  --robot.type=bi_seeed_b601_follower \
  --robot.left_arm_config.motor_family=rs \
  --robot.left_arm_config.port=can0 \
  --robot.right_arm_config.motor_family=rs \
  --robot.right_arm_config.port=can1 \
  --robot.cameras='{
      top: {
        type: opencv,
        index_or_path: "/dev/video0",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      left_wrist: {
        type: opencv,
        index_or_path: "/dev/video2",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      right_wrist: {
        type: opencv,
        index_or_path: "/dev/video4",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      }
    }' \
  --robot.id=bi_follower \
  --display_data=true \
  --dataset.repo_id=${HF_USER}/eval_groot_rebot \
  --dataset.num_episodes=10 \
  --dataset.single_task="Grab the black cube and put it in the box" \
  --policy.path=${HF_USER}/groot-rebot \
  --dataset.episode_time_s=30 \
  --dataset.reset_time_s=10
```

ライセンス：このモデルは Apache 2.0 ライセンスに従います（元の GR00T リポジトリと同一）。

</TabItem>

<TabItem value="peft" label="PEFT (Optional)">

PEFT（Parameter-Efficient Fine-Tuning）は、大規模事前学習モデルを新しいタスクに適応させる際に、**すべてのモデルパラメータを更新することなく** 適応させるための「パラメータ効率の良い適応」手法とツールの集合です。LeRobot の事前学習済み policy（SmolVLA、π₀ など）に対しては、通常、少数の「アダプタ」パラメータ（例：LoRA）だけを学習することで、VRAM 使用量と学習コストを抑えつつ、ほぼフルファインチューニングに近い結果を得ることができます。

**インストール**

PEFT 関連のパラメータを使用するには、LeRobot のオプション依存関係である `peft` をインストールします：

```bash
# Method 1: Source installation (in the lerobot root directory)
pip install -e ".[peft]"
```

```bash
# Method 2: pip installation
pip install "lerobot[peft]"
```

より多くの適応手法や概念的な説明については、公式ドキュメントを参照してください：
[🤗 PEFT Documentation](https://huggingface.co/docs/peft/index)

**例：SmolVLA を LoRA でファインチューニングする（Libero の libero_spatial サブタスク）**

次の例では、`HuggingFaceVLA/libero` データセット上で `lerobot/smolvla_base` に対して LoRA ファインチューニングを行う方法を示します。パラメータ名は現在の LeRobot バージョンに基づいています。`lerobot-train --help` も参照してください。

```bash
lerobot-train \
  --policy.path=lerobot/smolvla_base \
  --policy.repo_id=${HF_USER}/my_libero_smolvla_peft \
  --dataset.repo_id=HuggingFaceVLA/libero \
  --env.type=libero \
  --env.task=libero_spatial \
  --output_dir=outputs/train/my_libero_smolvla_peft \
  --job_name=my_libero_smolvla_peft \
  --policy.device=cuda \
  --steps=10000 \
  --batch_size=32 \
  --optimizer.lr=1e-3 \
  --peft.method_type=LORA \
  --peft.r=64
```

**主な PEFT パラメータ**

- `--peft.method_type`: 使用する PEFT 手法を選択します。LoRA（Low-Rank Adapter）は最も一般的に使われる手法の 1 つです。
- `--peft.r`: LoRA のランク。一般に、ランクが高いほど表現力は強くなりますが、パラメータ数と VRAM 使用量も増加します。

**LoRA を注入するレイヤーの指定（オプション）**

デフォルトでは、PEFT は通常、モデルの最も重要な射影レイヤー（例：attention の `q_proj`、`v_proj` など）に LoRA を注入し、さらに状態／アクション関連の射影レイヤーもカバーする場合があります。別のレイヤーを対象にしたい場合は、`--peft.target_modules` を使用して対象レイヤーを指定します。

よく使われるパターンには次のようなものがあります：

1) モジュール名のサフィックスリストによる指定（例）：

```bash
--peft.target_modules="['q_proj', 'v_proj']"
```

2) 正規表現を使う方法（例。実際のモジュール名に応じて調整してください）：

```bash
--peft.target_modules='(model\\.vlm_with_expert\\.lm_expert\\..*\\.(down|gate|up)_proj|.*\\.(state_proj|action_in_proj|action_out_proj|action_time_mlp_in|action_time_mlp_out))'
```

**特定レイヤーをフル学習させる指定（オプション）**

特定のモジュールを「フル学習」（LoRA の注入だけでなく）させたい場合は、`--peft.full_training_modules` で指定します。例えば、`state_proj` のみをフル学習させるには次のようにします：

```bash
--peft.full_training_modules="['state_proj']"
```

**学習率の推奨値（経験則）**

LoRA の学習率は、通常のフルファインチューニングより 1 桁大きく設定できることが多いです（一般的な経験則：およそ 10 倍）。例えば、フルファインチューニングでは一般的に `1e-4` を用いますが、LoRA では `1e-3` から始めることができます。学習率減衰（スケジューラ）を有効にしている場合、最終的な学習率も `1e-4` 前後に設定するのが一般的な目安です。

</TabItem>

<TabItem value="multi-gpu" label="マルチ GPU（オプション）">

**1. 学習手順**

**方法 1：コマンドライン引数によるマルチ GPU 学習**

まず、lerobot 環境に学習加速システムをインストールします：

```bash
pip install accelerate
```

次に、以下のコマンドを実行してマルチ GPU 学習を開始します：

```bash
accelerate launch \
  --multi_gpu \
  --num_processes=2 \
  $(which lerobot-train) \
  --dataset.repo_id=${HF_USER}/my_dataset \
  --policy.type=act \
  --policy.repo_id=${HF_USER}/my_trained_policy \
  --output_dir=outputs/train/act_multi_gpu \
  --job_name=act_multi_gpu \
  --wandb.enable=true
```

主な accelerate パラメータの説明：

- `--multi_gpu`: マルチ GPU 学習を有効化
- `--num_processes=2`: 使用する GPU の数（通常は GPU の枚数と同じ）
- `--mixed_precision=fp16`: fp16 の混合精度を使用（ハードウェアが対応していれば bf16 も可）

**bf16 にはハードウェアのサポートが必要**であり、すべての GPU で利用できるわけではない点に注意してください。

| 精度の種類 | ハードウェアサポート |
| -- | -- |
| fp16 | ほぼすべての NVIDIA GPU でサポート |
| bf16 | 新しい GPU（Ampere アーキテクチャ以降）のみサポート |

GPU が bf16 をサポートしていない場合は、accelerate の設定で fp16 を選択するか、コマンドラインで明示的に fp16 を指定してください。

**方法 2：Accelerate の設定ファイルを使う（オプション）**

頻繁にマルチ GPU 学習を行う場合は、上記の学習設定を保存して、毎回コマンドラインで入力しなくて済むようにできます。

> **ヒント**：このセクションの内容がよく分からない場合や、とりあえずすぐに始めたいだけの場合は、
> **このセクションは飛ばして、方法 1（コマンドライン引数）を使って構いません。**

`accelerate config` の目的は次のとおりです：

**ハードウェア環境（GPU 数、混合精度など）を設定ファイルとして保存し、
今後 `accelerate launch` を実行する際に、これらのパラメータを毎回入力しなくて済むようにすることです。**

LeRobot の学習ロジック自体は一切変更せず、単に繰り返しのパラメータ入力を減らすだけです。

もし **たまにしかマルチ GPU を使わない** 場合や、今回が初めての試行であれば、**無理に使う必要はまったくありません**。

---

次を実行します：

```bash
accelerate config
```

対話的な設定プロセスでは、一般的な単一マシン・マルチ GPU のケースでは次のように選択できます：

- Compute environment: This machine
- Number of machines: 1
- Number of processes: 使用する GPU の数（通常は GPU の枚数と同じ）
- GPU ids to use: そのまま Enter を押す（すべての GPU を使用することを意味します）
- Mixed precision:
  - fp16 を優先
  - GPU が bf16 をサポートしていることが確実な場合は、bf16 を選択してもよい

設定後は、次のようにして学習を実行できます：

```bash
accelerate launch $(which lerobot-train) \
  --dataset.repo_id=${HF_USER}/my_dataset \
  --policy.type=act \
  --policy.repo_id=${HF_USER}/my_trained_policy \
  --output_dir=outputs/train/act_multi_gpu \
  --job_name=act_multi_gpu \
  --wandb.enable=true
```

**マルチ GPU 学習が学習パラメータに与える影響と調整戦略**

LeRobot は、ユーザーに知らせずに学習挙動が変わってしまうことを避けるため、GPU の枚数に応じて学習率や学習ステップ数を自動調整しません。これは、他の一般的な分散学習フレームワークとは異なります。

もし **マルチ GPU 学習用にハイパーパラメータを調整したい** 場合は、次の手順に従って手動で行う必要があります。

**ステップ数への影響と調整戦略**

マルチ GPU により有効バッチサイズ（batch_size × num_gpus）が増加するためです：

直感的に理解するために言えば、学習が「歩くこと」のようなものだとすると、1 枚の GPU は 1 歩 1 メートル進み、2 枚の GPU は 1 歩で 2 メートル進むイメージです。同じ距離（モデルが学習する総データ量）に到達するには、2 GPU 学習ではステップ数を半分にすべきです。同様に、n 枚の GPU なら 1/n になります。

したがって、複数 GPU で学習する場合は、学習ステップ数を適切に減らす必要があります。

単一 GPU 学習：

- batch_size = 8
- steps = 100000

2 GPU 学習（有効バッチサイズは 16 になる）：

- batch_size は 8 のままにする場合
- steps は 50000 に減らすことができます

```bash
accelerate launch --num_processes=2 $(which lerobot-train) \
  --batch_size=8 \
  --steps=50000 \
  --dataset.repo_id=lerobot/pusht \
  --policy=act
```

**学習率への影響と調整戦略**

複数 GPU を使用すると、各ステップ更新で使用されるサンプル数が増加します。

モデルの「学習スピード」を単一 GPU の場合と同程度に保ちたい場合は、
通常、GPU の枚数に比例して学習率を増やす必要があります。

- 新しい学習率 = 単一 GPU の学習率 × GPU の枚数

例えば：

単一 GPU の学習率（optimizer.lr）が 1e-4 の場合、
2 枚の GPU を使用するときは 2e-4 に変更できます：

```bash
accelerate launch --num_processes=2 $(which lerobot-train) \
  --optimizer.lr=2e-4 \
  --dataset.repo_id=lerobot/pusht \
  --policy=act
```

注意：

これらは必須のルールではなく、一般的なベストプラクティスです。

調整方法に自信がない場合は、次のようにしても構いません：

- 学習率を変更しない
- 学習ステップ数を変更しない

学習プロセスが安定している限り、結果は十分に実用的です。

より高度な設定やトラブルシューティングについては、[Accelerate](https://huggingface.co/docs/accelerate/index) のドキュメントを参照してください。多数の GPU での学習についてさらに学びたい場合は、こちらの優れたガイドもご覧ください：[Ultrascale Playbook](https://github.com/huggingface/ultrascale-playbook)。
</TabItem>

<TabItem value="async-inference" label="非同期推論（オプション）">

非同期推論を使わない場合、LeRobot の制御フローは従来型の逐次／同期推論として理解できます：ポリシーがアクションチャンクを予測し、それを実行し、その後次の予測を待ちます。モデルが大きい場合、新しいアクションチャンクを待つ間にロボットが明確に停止してしまうことがあります。非同期推論の目的は、ロボットが現在のアクションチャンクを実行している間に次のチャンクを事前計算し、待ち時間を減らして応答性を高めることです。非同期推論は、ACT、OpenVLA、Pi0、SmolVLA など、アクションチャンクを出力する LeRobot 対応ポリシーに適用できます。推論と実際の制御が分離されるため、非同期推論により、より高性能なマシンをリモートからロボット推論に利用することも可能になります。

非同期推論についてさらに知りたい場合は、Hugging Face のこの[ブログ記事](https://huggingface.co/blog/async-robot-inference)を参照してください。

ここで、いくつかの基本概念を紹介します：

- **クライアント**：ロボットアームやカメラに接続し、観測（画像、ロボットの姿勢など）を収集してサーバーに送信します。また、サーバーからアクションチャンクを受け取り、順番に実行します。
- **サーバー**：計算リソースを提供するデバイスです。カメラやロボットのデータを受け取り、アクションチャンクを推論（計算）してクライアントに送り返します。ロボットやカメラに接続された同一のデバイスでも、同一 LAN 上の別のコンピュータでも、クラウドサーバーでも構いません。
- **アクションチャンク**：サーバー側のポリシー推論によって生成される、一連のロボットアームのアクションコマンドです。
- **同期推論**：1 つのチャンクを予測し、1 つのチャンクを実行します。次のチャンクが推論されるまで、ロボットには待ち時間が発生します。モデルが大きく計算資源が不足している場合、この推論ギャップは顕著になり、アームが動いては止まり（推論）、また動く、という挙動になります。
- **非同期推論**：同期推論とは異なり、ロボットが現在のチャンクを実行している間に、サーバーはすでに次のチャンクを計算しています。重なり合う部分を統合することで、より応答性の高い制御を実現します。

**3つの非同期推論デプロイシナリオ**

**1. 単一マシンでのデプロイ**

ロボット、カメラ、クライアント、サーバーがすべて同一デバイス上にあります。
これは最も単純なケースです。サーバーは 127.0.0.1 で待ち受け、クライアントも 127.0.0.1:port に接続します。公式ドキュメントのコマンド例はこのシナリオに従っています。

**2. LAN 内でのデプロイ**

ロボットとカメラは軽量デバイスに接続し、ポリシーサーバーは同じ LAN 上の別の高性能デバイス上で動作します。
この場合、サーバーは他のマシンからアクセス可能なアドレスで待ち受ける必要があり、クライアントは 127.0.0.1 ではなくサーバーの LAN IP に接続する必要があります。

**3. ネットワーク越し / クラウドでのデプロイ**

ポリシーサーバーはパブリックにアクセス可能なクラウドホスト上で動作し、クライアントはパブリックネットワーク経由で接続します。
この方法では、クラウドホスト上のより強力な GPU を活用できます。ネットワーク環境が良好であれば、往復時間（ネットワークレイテンシ）は推論時間と比べて相対的に小さい場合がありますが、これは実際のネットワーク環境に依存します。

> セキュリティに関する注意: LeRobot の非同期推論パイプラインには、認証されていない gRPC + pickle デシリアライズのリスクがあります。サーバーが重要な情報やサービスをホストしている場合、パブリックネットワーク上にデプロイする際にサービスをインターネットへ直接公開することは推奨されません。より安全な方法は、VPN や SSH トンネリング、少なくともセキュリティグループの送信元 IP をクライアントのパブリック IP に制限することです。

**非同期推論デプロイの開始**

**ステップ 1: 環境構成**

まず、pip を使用して非同期推論に必要な追加依存関係をインストールします。クライアントとサーバーの両方で、追加依存関係付きで lerobot をインストールする必要があります:

```bash
pip install -e ".[async]"
```

**ステップ 2: ネットワーク構成と確認**

**1. プロキシの問題**

ターミナルにプロキシ環境変数が設定されていて接続問題が発生する場合は、一時的にそれらを解除できます:

```bash
unset http_proxy https_proxy ftp_proxy all_proxy HTTP_PROXY HTTPS_PROXY FTP_PROXY ALL_PROXY
```

注意: 上記のコマンドは現在のターミナルセッションにのみ影響します。新しいターミナルウィンドウを開いた場合は、再度実行する必要があります。

**2. ファイアウォール / セキュリティグループでポートを許可**

- 単一マシンでのデプロイ: 通常はスキップできます。
- LAN デプロイ: サーバー側で待ち受けポートを許可する必要があります。
  LAN 上で待ち受けポートを許可する例（サーバー上で実行）:

```bash
sudo ufw allow 8080/tcp
```

- クラウドデプロイ: クラウドサーバーのセキュリティグループでポートを許可し、可能であれば送信元 IP を制限する必要があります。

クラウドサーバー上で実行している場合:
サーバー管理ページのセキュリティグループでポート 8080 を許可するか、すでに許可されている別のポートを使用します。方法はクラウドプロバイダによって異なります。

**3. IP アドレスの確認**

単一マシンでのデプロイではこのステップはスキップできます（IP は常に 127.0.0.1 です）。

**4. 接続テスト**

- 単一マシンでのデプロイ: このステップはスキップします。
- LAN / クラウドデプロイ: クライアントがサーバーポートにアクセスできるかテストすることを推奨します:

```bash
nc -vz <LAN_IP_address> 8080
```

```bash
nc -vz <server_public_IP> 8080
```

**ステップ 3: サービスを起動**

**シナリオ A: 単一マシンでのデプロイ**

1つのターミナルでローカルサービスを起動します:

```bash
python -m lerobot.async_inference.policy_server \
  --model_path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model \
  --server_address=127.0.0.1:8080
```

正常に起動したら、このターミナルは開いたままにして、別のターミナルを新しく開いて他のコマンドを実行する必要があります。

**シナリオ B: LAN デプロイ**

サーバー上で実行:

```bash
python -m lerobot.async_inference.policy_server \
  --model_path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model \
  --server_address=0.0.0.0:8080
```

クライアントが接続する際、`--server_address` にはサーバーの LAN IP アドレス `<LAN_IP_address>:8080` を指定する必要があります。

**シナリオ C: クラウドサーバーでのデプロイ**

サーバー上で実行:

```bash
python -m lerobot.async_inference.policy_server \
  --model_path=outputs/train/act_rebot_test/checkpoints/last/pretrained_model \
  --server_address=0.0.0.0:8080
```

クライアントが接続する際、`--server_address` にはサーバーのパブリック IP アドレス `<server_public_IP>:8080` を指定する必要があります。

**ステップ 4: 推論パラメータを選択**

クライアント側で実行:

```bash
python -m lerobot.async_inference.robot_client \
  --robot.type=bi_seeed_b601_follower \
  --robot.left_arm_config.motor_family=rs \
  --robot.left_arm_config.port=can0 \
  --robot.right_arm_config.motor_family=rs \
  --robot.right_arm_config.port=can1 \
  --robot.cameras='{
      top: {
        type: opencv,
        index_or_path: "/dev/video0",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      left_wrist: {
        type: opencv,
        index_or_path: "/dev/video2",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      },
      right_wrist: {
        type: opencv,
        index_or_path: "/dev/video4",
        width: 640,
        height: 480,
        fps: 30,
        fourcc: "MJPG"
      }
    }' \
  --robot.id=bi_follower \
  --server_address=127.0.0.1:8080 \
  --actions_per_chunk=50 \
  --chunk_size_threshold=0.5 \
  --fixed_update_fps=30 \
  --visualize_action_queue=false
```

主要なパラメータの説明:

- `--server_address`: サーバーアドレス。単一マシンの場合は `127.0.0.1:port` を使用し、LAN / クラウドの場合はサーバーの IP を使用します。
- `--actions_per_chunk`: 各アクションチャンクのサイズ（アクション数）。値を大きくすると推論頻度は低くなりますが、1回の推論ごとの結果はより安定します。値を小さくすると動きはより滑らかになりますが、サーバー側の推論負荷が高くなります。
- `--chunk_size_threshold`: 古いアクションチャンクと新しいアクションチャンクのブレンド閾値。古いチャンクの実行がこの割合に達したときに、新しいチャンクとのブレンドが開始されます。
- `--fixed_update_fps`: 制御コマンドの送信頻度であり、ロボットアームの動きの滑らかさに対応します。
- `--visualize_action_queue`: 実行時にアクションキューのサイズを可視化するかどうか。有効にすると、キューが頻繁に底をついていないかをより直感的に確認でき、actions_per_chunk と chunk_size_threshold の調整に役立ちます。

**ステップ 5: ロボットの挙動に基づいてパラメータを調整**

非同期推論では、同期推論には存在しない追加パラメータが 2 つあり、調整が必要です:

- `--actions_per_chunk`: 各アクションチャンクのサイズ。ロボットの動きがカクつく / ギクシャクする場合はこの値を大きくし、ロボットの応答に顕著な遅延がある場合はこの値を小さくします。
- `--chunk_size_threshold`: 古いアクションチャンクと新しいアクションチャンクのブレンド閾値。通常は `0.5` から試し始めます。

非同期推論では、サーバーのアクションチャンク生成速度がクライアントの消費速度以上であるようにバランスを取る必要があります。そうでない場合、アクションキューが空になり、ロボットがカクつき始めます（これはキューの可視化カーブが底に張り付くことで確認できます）。

</TabItem>
</Tabs>
