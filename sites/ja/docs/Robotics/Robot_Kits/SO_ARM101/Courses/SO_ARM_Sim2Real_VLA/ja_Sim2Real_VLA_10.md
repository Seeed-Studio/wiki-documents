---
description: "SO-ARM101 Sim-to-Real VLA コース第 10 章 —— GR00T N1.7 ポリシーの学習：Isaac-GR00T のインストール、データセットの v2 変換、SO-101 モダリティ設定の登録、ファインチューニング。"
title: 第 10 章 - GR00T N1.7 ポリシーの学習
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - SO-101
  - Isaac GR00T
  - GR00T N1.7
  - VLA
  - ファインチューニング
  - コース
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_10
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/ja/robotics/soarm_sim2real_vla_chapter_10/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">モジュール 3 · 第 10 章 · Get Your Own VLA Model</span>
    <h2>10. GR00T N1.7 ポリシーの学習</h2>
    <p>
      Isaac GR00T N1.7 を理解し、SO-101 データセットを準備し、第 9 章で
      収集したデータでタスク特化の VLA モデルをファインチューニングする。
    </p>
    <div className="hero-actions">
      <a href="#groot">GR00T N1.7</a>
      <a href="#env">環境</a>
      <a href="#dataset">データセット</a>
      <a href="#config">設定</a>
      <a href="#finetune">ファインチューニング</a>
      <a href="#outputs">出力</a>
    </div>
  </div>
</section>

## 10.1 NVIDIA Isaac GR00T N1.7

<section id="groot" className="section-card">
  <div className="section-title">
    <span>VLA モデル</span>
    <h2>10.1 NVIDIA Isaac GR00T N1.7</h2>
  </div>

NVIDIA Isaac GR00T N1.7 は、汎用的なロボットスキルのためのオープンな
Vision-Language-Action（VLA）モデルです。このクロスエンボディメントモデル
は言語と画像というマルチモーダル入力を受け取り、多様な環境で操作タスクを
実行します。

モデルは一度学習され、*モダリティ設定*によって各エンボディメントへ適応
します：データセットのどの列がアーム・グリッパー・カメラ・言語指示かを
GR00T に伝える小さなファイルです。本章ではまさにその設定を SO-ARM101 向け
に作成します。

参照：

- [Hugging Face GR00T-1.7-3B モデルリポジトリ](https://huggingface.co/nvidia/GR00T-1.7-3B/tree/main)
- [NVIDIA Isaac-GR00T GitHub リポジトリ](https://github.com/NVIDIA/Isaac-GR00T/tree/main)

</section>

## 10.2 Python 環境の準備

<section id="env" className="section-card">
  <div className="section-title">
    <span>Isaac-GR00T</span>
    <h2>10.2 Python 環境の準備</h2>
  </div>

```bash
sudo apt install git-lfs && git lfs install
cd ~
git clone --recurse-submodules https://github.com/NVIDIA/Isaac-GR00T
cd Isaac-GR00T
sudo apt-get update && sudo apt-get install -y ffmpeg
uv sync --python 3.12
```

:::caution ハードウェア
3B モデルのファインチューニングには RTX 5090 / RTX 6000 クラスの GPU が必要
です（NVIDIA workshop の基準）。8 GB のノート GPU では本章は実行できません。
章末の ACT サニティチェックは小さな GPU でも動きます。
:::

</section>

## 10.3 データセットの扱い

<section id="dataset" className="section-card">
  <div className="section-title">
    <span>v3 → v2</span>
    <h2>10.3 データセットの扱い</h2>
  </div>

LeRobot は v3 データセットを書き込みますが、GR00T N1.7 のファインチューニング
は古い v2 レイアウトを読み取ります。第 9 章で録画したデータセットを変換します：

```bash
cd ~/Isaac-GR00T
uv run --project scripts/lerobot_conversion \
  python scripts/lerobot_conversion/convert_v3_to_v2.py \
  --repo-id so101_vials_real \
  --root $HOME/rebot-arm-dli-isaacsim/datasets
```

変換器は v3 のコピーを `so101_vials_real_V30` として退避し、v2 データセットを
元のパスに残します。後でシミュレーションエピソードをマージする予定がある
場合（第 13 章）、変換の**前に**マージしてください。

次に、変換済みデータセット内に `meta/modality.json` を追加します：

```json
{
  "state": {
    "single_arm": { "start": 0, "end": 5 },
    "gripper": { "start": 5, "end": 6 }
  },
  "action": {
    "single_arm": { "start": 0, "end": 5 },
    "gripper": { "start": 5, "end": 6 }
  },
  "video": {
    "wrist": { "original_key": "observation.images.front" },
    "front": { "original_key": "observation.images.external" }
  },
  "annotation": {
    "human.task_description": { "original_key": "task_index" }
  }
}
```

分岐が 5 で終わる理由：

| 次元 | 意味 |
| --- | --- |
| 0–4 | `shoulder_pan`、`shoulder_lift`、`elbow_flex`、`wrist_flex`、`wrist_roll` |
| 5 | `gripper` |

SO-ARM101 は 5 つの腕関節 + グリッパー——合計 6 値です。reBot コースは
7 値なので、その `end: 6` をコピーしないでください。

カメラのマッピングも意図的です：

| データセット特徴 | 物理カメラ | GR00T 入力 |
| --- | --- | --- |
| `observation.images.front` | グリッパー / 手首カメラ | `wrist` |
| `observation.images.external` | 見下ろしカメラ | `front` |

</section>

## 10.4 SO-101 モダリティ設定の登録

<section id="config" className="section-card">
  <div className="section-title">
    <span>エンボディメント設定</span>
    <h2>10.4 SO-101 モダリティ設定の登録</h2>
  </div>

```bash
cd ~/Isaac-GR00T
mkdir -p examples/so101
```

`examples/so101/so101_config.py` を作成：

```python
# SPDX-License-Identifier: Apache-2.0

from gr00t.configs.data.embodiment_configs import register_modality_config
from gr00t.data.embodiment_tags import EmbodimentTag
from gr00t.data.types import (
    ActionConfig,
    ActionFormat,
    ActionRepresentation,
    ActionType,
    ModalityConfig,
)

so101_config = {
    # 両カメラの現在フレーム。キーは meta/modality.json と一致
    "video": ModalityConfig(
        delta_indices=[0],
        modality_keys=["wrist", "front"],
    ),
    # 現在の関節読み取り値
    "state": ModalityConfig(
        delta_indices=[0],
        modality_keys=["single_arm", "gripper"],
    ),
    # 今後 16 ステップを予測
    "action": ModalityConfig(
        delta_indices=list(range(0, 16)),
        modality_keys=["single_arm", "gripper"],
        action_configs=[
            # アーム：相対デルタは姿勢間で汎化しやすい
            ActionConfig(
                rep=ActionRepresentation.RELATIVE,
                type=ActionType.NON_EEF,
                format=ActionFormat.DEFAULT,
            ),
            # グリッパー：開閉には絶対ターゲットが安定
            ActionConfig(
                rep=ActionRepresentation.ABSOLUTE,
                type=ActionType.NON_EEF,
                format=ActionFormat.DEFAULT,
            ),
        ],
    ),
    "language": ModalityConfig(
        delta_indices=[0],
        modality_keys=["annotation.human.task_description"],
    ),
}

register_modality_config(so101_config, embodiment_tag=EmbodimentTag.NEW_EMBODIMENT)
```

</section>

## 10.5 GR00T N1.7 のファインチューニング

<section id="finetune" className="section-card">
  <div className="section-title">
    <span>GPU 時間</span>
    <h2>10.5 GR00T N1.7 のファインチューニング</h2>
  </div>

**ルート A —— 自分の実データセット**（本コースのデフォルト）：

```bash
cd ~/Isaac-GR00T
export SAVE_STEPS=5000
bash examples/finetune.sh \
  --base-model-path nvidia/GR00T-1.7-3B \
  --dataset-path $HOME/rebot-arm-dli-isaacsim/datasets/so101_vials_real \
  --modality-config-path examples/so101/so101_config.py \
  --embodiment-tag NEW_EMBODIMENT \
  --output-dir $HOME/groot_so101_real
```

**ルート B —— シミュレーションエピソードとの協調学習。** 先にデータセットを
マージし（第 13 章）、`--dataset-path` をマージ後のセットに向けます。NVIDIA
workshop のレシピ：少数の実エピソード + 70–100 本のシミュレーション演示。

**ルート C —— 逐次ファインチューニング。** まずシミュレーションで学習し、
そのチェックポイントから実データで継続します：

```bash
bash examples/finetune.sh \
  --base-model-path $HOME/groot_so101_sim/checkpoint-5000 \
  --dataset-path $HOME/rebot-arm-dli-isaacsim/datasets/so101_vials_real \
  --modality-config-path examples/so101/so101_config.py \
  --embodiment-tag NEW_EMBODIMENT \
  --output-dir $HOME/groot_so101_sim_then_real
```

`examples/finetune.sh` の便利な環境変数：

| 変数 | デフォルト | 効果 |
| --- | --- | --- |
| `SAVE_STEPS` | 1000 | チェックポイント間隔 |
| `MAX_STEPS` | 10000 | 最適化ステップ総数 |
| `GLOBAL_BATCH_SIZE` | 32 | 小さい GPU では下げる |
| `EPISODE_SAMPLING_RATE` | 0.1 | エピソードをサンプルするステップ割合 |
| `DS_WEIGHTS_ALPHA` | 未設定 | マージソースの規模バランス |
| `USE_WANDB` | 1 | 0 で実験ログ無効化 |

:::tip ACT で素早く確認
GPU 時間を投入する前に、小さな ACT ポリシーを同じデータセットで数分学習し、
データセット・正規化器・オプティマイザーの接続を確認できます：

```bash
cd ~/rebot_lerobot && source .venv/bin/activate
lerobot-train \
  --policy.type=act --policy.push_to_hub=false \
  --dataset.repo_id=so101_vials_real \
  --dataset.root=$HOME/rebot-arm-dli-isaacsim/datasets/so101_vials_real \
  --output_dir=/tmp/act_check --steps=60 --batch_size=4
```
:::

</section>

## 10.6 学習出力

<section id="outputs" className="section-card">
  <div className="section-title">
    <span>チェックポイント</span>
    <h2>10.6 学習出力</h2>
  </div>

```text
$HOME/groot_so101_real/
├── checkpoint-1000/
├── checkpoint-2000/
├── checkpoint-5000/
└── ...
```

各チェックポイントには推論サーバーが必要とするモデル重みと実験設定が
含まれます。多くのステップが常に良いとは限りません：実機（第 11 章）で
いくつかのチェックポイントを評価し、最も安定してタスクを完了するものを
残してください。

次の章：[第 11 章 —— 実環境での評価](ja_Sim2Real_VLA_11.md)。

</section>

</div>