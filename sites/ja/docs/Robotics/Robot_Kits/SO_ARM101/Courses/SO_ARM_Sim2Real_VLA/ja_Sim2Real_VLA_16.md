---
description: "SO-ARM101 Sim-to-Real VLA コース第 16 章 —— Jetson 上の GR00T ソフトウェア環境の構成：ワークスペースパス、検証済みリポジトリ、プラットフォームランタイム、Hugging Face アクセス。"
title: 第 16 章 - GR00T ソフトウェア環境の構成
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - Jetson
  - Isaac GR00T
  - TensorRT
  - 環境
  - コース
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_sim2real_vla_chapter_16
displayed_sidebar: SoArmSim2RealVlaSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-11-11
  author: ZhuYaoHui
createdAt: '2026-11-11'
updatedAt: '2026-11-11'
url: https://wiki.seeedstudio.com/ja/robotics/soarm_sim2real_vla_chapter_16/
---

import '/src/css/rebot-wiki-style.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">モジュール 4 · 第 16 章 · Deploy on Jetson</span>
    <h2>16. GR00T ソフトウェア環境の構成</h2>
    <p>
      ワークスペースを定義し、検証済みデプロイリポジトリをクローンし、対象
      （Orin / Thor）のプラットフォームランタイムをインストールする。
    </p>
    <div className="hero-actions">
      <a href="#target">対象の選択</a>
      <a href="#workspace">ワークスペース</a>
      <a href="#repo">リポジトリ</a>
      <a href="#runtime">ランタイム</a>
      <a href="#verify">検証</a>
    </div>
  </div>
</section>

## 16.1 対象の選択

<section id="target" className="section-card">
  <div className="section-title">
    <span>Orin または Thor</span>
    <h2>16.1 対象の選択</h2>
  </div>

```bash
# Jetson AGX Orin
export GR00T_TARGET=orin

# Jetson AGX Thor
export GR00T_TARGET=thor

tr -d '\0' < /proc/device-tree/model
```

`GR00T_TARGET` が検出されたボードと一致することを確認します。

</section>

## 16.2 ワークスペースの定義

<section id="workspace" className="section-card">
  <div className="section-title">
    <span>パス</span>
    <h2>16.2 ワークスペースの定義</h2>
  </div>

```bash
mkdir -p "${HOME}/.config/gr00t-inference"

cat > "${HOME}/.config/gr00t-inference/paths.sh" <<'EOF_PATHS'
: "${GR00T_TARGET:=orin}"

export GR00T_WORKSPACE="${GR00T_WORKSPACE:-${HOME}/gr00t-inference}"
export GR00T_REPO="${GR00T_REPO:-${GR00T_WORKSPACE}/Isaac-GR00T-Orin-JP72}"
export GR00T_MODEL_PATH="${GR00T_MODEL_PATH:-${GR00T_WORKSPACE}/checkpoints/checkpoint-5000}"
export GR00T_DATASET_PATH="${GR00T_DATASET_PATH:-${GR00T_WORKSPACE}/datasets/so101_vials_real}"
export GR00T_BACKBONE_PATH="${GR00T_BACKBONE_PATH:-${GR00T_WORKSPACE}/models/nvidia/Cosmos-Reason2-2B}"
export GR00T_TRT_OUTPUT="${GR00T_TRT_OUTPUT:-${GR00T_WORKSPACE}/artifacts/${GR00T_TARGET}/so101_trt}"
export GR00T_RESULT_PATH="${GR00T_RESULT_PATH:-${GR00T_WORKSPACE}/results/${GR00T_TARGET}/so101_trt_result.jpeg}"
EOF_PATHS

source "${HOME}/.config/gr00t-inference/paths.sh"
mkdir -p "$(dirname "${GR00T_REPO}")" "${GR00T_MODEL_PATH}" \
  "${GR00T_DATASET_PATH}" "${GR00T_BACKBONE_PATH}" \
  "${GR00T_TRT_OUTPUT}" "$(dirname "${GR00T_RESULT_PATH}")"
```

</section>

## 16.3 検証済みリポジトリのクローン

<section id="repo" className="section-card">
  <div className="section-title">
    <span>固定リビジョン</span>
    <h2>16.3 検証済みリポジトリのクローン</h2>
  </div>

```bash
source "${HOME}/.config/gr00t-inference/paths.sh"

git clone https://github.com/jjjadand/Isaac-GR00T-Orin-JP72.git "${GR00T_REPO}"
cd "${GR00T_REPO}"
git checkout dcf5f6b759fd17cab3644a97fc4429bca7451e38
git submodule update --init --recursive
```

</section>

## 16.4 プラットフォームランタイムのインストール

<section id="runtime" className="section-card">
  <div className="section-title">
    <span>対象ごとの venv</span>
    <h2>16.4 プラットフォームランタイムのインストール</h2>
  </div>

### Jetson AGX Orin（JetPack 7.2）

リポジトリの Orin ラッパーが `.venv-jp72` を自動作成・有効化し、JetPack 7.2
の CUDA ランタイムパスを読み込みます：

```bash
bash scripts/deployment/orin_jp72/run_full_trt.sh prepare
```

### Jetson AGX Thor

```bash
source .venv/bin/activate
source scripts/activate_thor.sh
```

</section>

## 16.5 Hugging Face アクセスの取得

<section id="hf" className="section-card">
  <div className="section-title">
    <span>まずライセンス</span>
    <h2>16.5 Hugging Face アクセスの取得</h2>
  </div>

GR00T 1.7 の公式バックボーンは `nvidia/Cosmos-Reason2-2B` で、NVIDIA モデル
ライセンスの同意が必要です。

1. [NVIDIA Cosmos-Reason2-2B](https://huggingface.co/nvidia/Cosmos-Reason2-2B)を開く；
2. ライセンス契約に同意；
3. Jetson で認証：

```bash
uv tool install -U "huggingface_hub[cli]"
hf auth login
```

:::caution トークンをコミットしない
Hugging Face トークンをリポジトリやシェルスクリプトに保存しないでください。
:::

</section>

## 16.6 環境の検証

<section id="verify" className="section-card">
  <div className="section-title">
    <span>サニティチェック</span>
    <h2>16.6 環境の検証</h2>
  </div>

```bash
cd "${GR00T_REPO}"

python - <<'PY'
import os
import platform
import torch

print("machine:", platform.machine())
print("python:", platform.python_version())
print("torch:", torch.__version__)
print("cuda available:", torch.cuda.is_available())
print("target:", os.environ.get("GR00T_TARGET"))
PY
```

出力は `aarch64`、CUDA 対応の PyTorch ビルド、期待する対象環境を報告する
必要があります。

次の章：[第 17 章 —— データセットとモデル資産の準備](ja_Sim2Real_VLA_17.md)。

</section>

</div>