---
description: "SO-ARM101 Sim-to-Real VLA コース第 17 章 —— Jetson 上でデータセットとモデル資産を準備する：modality.json 付きの変換済み v2 データセット、ファインチューニング済みチェックポイント、VLM バックボーン。"
title: 第 17 章 - データセットとモデル資産の準備
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - Jetson
  - GR00T N1.7
  - データセット
  - チェックポイント
  - コース
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_17
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/ja/robotics/soarm_sim2real_vla_chapter_17/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">モジュール 4 · 第 17 章 · Deploy on Jetson</span>
    <h2>17. データセットとモデル資産の準備</h2>
    <p>
      変換済みデータセット、ファインチューニング済みチェックポイント、VLM
      バックボーンを Jetson へコピーし、TensorRT エクスポータに必要なすべてが
      揃っていることを検証する。
    </p>
    <div className="hero-actions">
      <a href="#compat">互換性</a>
      <a href="#dataset">データセット</a>
      <a href="#checkpoint">チェックポイント</a>
      <a href="#backbone">バックボーン</a>
      <a href="#checklist">チェックリスト</a>
    </div>
  </div>
</section>

## 17.1 データセットの互換性

<section id="compat" className="section-card">
  <div className="section-title">
    <span>学習と厳密に一致</span>
    <h2>17.1 データセットの互換性</h2>
  </div>

変換済みデータセットは、ファインチューニングで使用したカメラキー、状態 /
アクション次元、タスクラベル、エピソード境界を保持する必要があります。

SO-ARM101 では次の通りです：

- `meta/modality.json` にマッピングされた `wrist` と `front` のカメラキー。
  [第 10 章](ja_Sim2Real_VLA_10.md)で作成したものと厳密に一致；
- 6 次元の状態 / アクション：`single_arm` 0–5、`gripper` 5–6；
- `so101_config.py` が登録したエンボディメントタグ `NEW_EMBODIMENT`。

学習後にカメラモダリティを改名しないでください。

</section>

## 17.2 データセットの変換とコピー

<section id="dataset" className="section-card">
  <div className="section-title">
    <span>v2.1 レイアウト</span>
    <h2>17.2 データセットの変換とコピー</h2>
  </div>

まだ変換していない場合、ワークステーションで変換器を実行します（第 10 章
と同じコマンド）：

```bash
cd ~/Isaac-GR00T
uv run --project scripts/lerobot_conversion \
  python scripts/lerobot_conversion/convert_v3_to_v2.py \
  --repo-id so101_vials_real \
  --root $HOME/rebot-arm-dli-isaacsim/datasets
```

変換済みデータセット（と `meta/modality.json`）を Jetson のワークスペース
パスへコピー：

```bash
rsync -av \
  ~/rebot-arm-dli-isaacsim/datasets/so101_vials_real/ \
  jetson:"${GR00T_DATASET_PATH}/"
```

GR00T が期待するレイアウトを検証：

```text
${GR00T_DATASET_PATH}/
├── data/chunk-000/episode_000000.parquet
├── videos/chunk-000/observation.images.front/episode_000000.mp4
└── meta/
    ├── episodes.jsonl
    ├── info.json
    ├── modality.json
    ├── stats.json
    └── tasks.jsonl
```

```bash
source "${HOME}/.config/gr00t-inference/paths.sh"
test -f "${GR00T_DATASET_PATH}/meta/info.json"
test -f "${GR00T_DATASET_PATH}/meta/modality.json"
test -f "${GR00T_DATASET_PATH}/meta/stats.json"
test -f "${GR00T_DATASET_PATH}/meta/tasks.jsonl"
find "${GR00T_DATASET_PATH}/data" -name 'episode_*.parquet' | head
```

</section>

## 17.3 ファインチューニング済みチェックポイントの準備

<section id="checkpoint" className="section-card">
  <div className="section-title">
    <span>重みのみ</span>
    <h2>17.3 ファインチューニング済みチェックポイントの準備</h2>
  </div>

第 10 章のチェックポイントディレクトリを `${GR00T_MODEL_PATH}` へコピーし、
検証します：

```bash
test -f "${GR00T_MODEL_PATH}/config.json"
test -f "${GR00T_MODEL_PATH}/processor_config.json"
test -f "${GR00T_MODEL_PATH}/statistics.json"
test -f "${GR00T_MODEL_PATH}/model.safetensors.index.json"
ls "${GR00T_MODEL_PATH}"/model-*-of-*.safetensors
```

`optimizer.pt`、`scheduler.pt`、`trainer_state.json` といった学習状態ファイル
は推論や TensorRT エクスポートには不要です。

</section>

## 17.4 VLM バックボーンの準備

<section id="backbone" className="section-card">
  <div className="section-title">
    <span>Cosmos-Reason2-2B</span>
    <h2>17.4 VLM バックボーンの準備</h2>
  </div>

GR00T 1.7 のデフォルトは `nvidia/Cosmos-Reason2-2B` です：

```bash
hf download nvidia/Cosmos-Reason2-2B \
  --local-dir "${GR00T_BACKBONE_PATH}"

test -f "${GR00T_BACKBONE_PATH}/config.json"
test -f "${GR00T_BACKBONE_PATH}/model.safetensors" || \
  test -f "${GR00T_BACKBONE_PATH}/model.safetensors.index.json"
```

検証済みリポジトリでは `GR00T_BACKBONE_PATH` で
`Qwen/Qwen3-VL-2B-Instruct` も使用できます。Qwen3-VL はこのチェックポイント
とリポジトリリビジョンで検証済みの代替であり、GR00T 1.7 の公式デフォルト
ではありません。

</section>

## 17.5 資産準備チェックリスト

<section id="checklist" className="section-card">
  <div className="section-title">
    <span>第 18 章の前に</span>
    <h2>17.5 資産準備チェックリスト</h2>
  </div>

- [ ] データセットのエピソードと動画が想定どおりのエピソード単位レイアウト；
- [ ] カメラキー、エンボディメントタグ、状態・アクション次元が学習と一致；
- [ ] チェックポイントに全モデルシャードと GR00T メタデータが含まれる；
- [ ] 選択した VLM バックボーンがローカルに固定・存在する。

次の章：[第 18 章 —— GR00T N1.7 TensorRT 推論の実行](ja_Sim2Real_VLA_18.md)。

</section>

</div>