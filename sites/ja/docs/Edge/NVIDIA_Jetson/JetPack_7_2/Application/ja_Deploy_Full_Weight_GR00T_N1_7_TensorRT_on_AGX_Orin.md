---
description: JetPack 7.2 を搭載した Jetson AGX Orin 上で、ファインチューニング済みのフルウェイト NVIDIA Isaac GR00T N1.7 ポリシーを 7 エンジン構成の TensorRT パイプラインとしてデプロイします。
title: JetPack 7.2 と Jetson AGX Orin 上で TensorRT を用いてフルウェイト GR00T N1.7 をデプロイする
keywords:
  - Jetson AGX Orin
  - JetPack 7.2
  - GR00T N1.7
  - TensorRT
  - Physical AI
  - VLA
image: https://files.seeedstudio.com/wiki/other/agx-orin-gr00t-front.png
slug: /deploy_full_weight_gr00t_n1.7_tensorrt_jetpack7.2_agx_orin
last_update:
  date: 07/31/2026
  author: Dayu
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/ja/deploy_full_weight_gr00t_n1.7_tensorrt_jetpack7.2_agx_orin/
---

# JetPack 7.2 と Jetson AGX Orin 上で TensorRT を用いてフルウェイト GR00T N1.7 をデプロイする

このチュートリアルでは、**JetPack 7.2** とフル TensorRT 推論パイプラインを使用して、ファインチューニング済みの **NVIDIA Isaac GR00T N1.7** ポリシーを **Jetson AGX Orin** 上にデプロイします。DiT コンポーネントのみを高速化していた従来の Orin ワークフローとは異なり、この実装では次の 7 つのモデルコンポーネントすべてに対して TensorRT エンジンを構築します：

1. Vision Transformer (ViT)
2. Large Language Model (LLM)
3. ビジョンと言語の自己アテンション
4. 状態エンコーダ
5. アクションエンコーダ
6. DiT アクションエキスパート
7. アクションデコーダ

検証済みワークフローは、ローカルの LeRobot データセットを用いたオフライン推論を実行します。ロボットのシリアルポートを開いたりアクチュエータコマンドを送信したりしないため、物理ロボットと統合する前にモデル変換とアクション生成を確認する用途に適しています。

<div align="center">
  <img width={1000} src="https://files.seeedstudio.com/wiki/other/agx-orin-gr00t-front.png" alt="Jetson AGX Orin 上での GR00T N1.7 フル TensorRT デプロイ" />
</div>

## プロジェクトリポジトリ

JetPack 7.2 向け実装、変換スクリプト、ランタイム変更、および元のデプロイメモは、次のリポジトリで入手できます：

- [jjjadand/Isaac-GR00T-Orin-JP72](https://github.com/jjjadand/Isaac-GR00T-Orin-JP72)

このガイドは、次のリポジトリコミットに対して検証されています：

```text
93d711e3d56ca054d1cd41b12115a37ae57b46f6
```

以降のコミットでは、パッケージバージョンやコマンドラインオプションが改善されている可能性があります。計測結果を再現する際は、固定されたコミットから開始し、その後で新しい変更点を個別に確認してください。

## テスト済み構成

| 項目 | テスト済みの値 |
| --- | --- |
| デバイス | Jetson AGX Orin、コンピュートキャパビリティ `sm_87` |
| JetPack / L4T | JetPack 7.2 / L4T R39.2 |
| OS / カーネル | Ubuntu 24.04 / Linux 6.8 Tegra |
| システム CUDA | CUDA 13.2 |
| システム TensorRT | 10.16.2.10 |
| Python | 3.12.3 |
| PyTorch | 2.8.0、Jetson AI Lab CUDA 12.9 ホイール |
| TorchVision | 0.23.0 |
| Transformers | 4.57.6 |
| ONNX | 1.20.1 |
| PyAV / FFmpeg | PyAV 16.1.0 / FFmpeg 8 |
| TensorRT バッチサイズ | 1 |
| アクションホライズン | 16 |

:::warning
リポジトリの古い Orin セットアップは、JetPack 6.2、Python 3.10、CUDA 12.6、およびそれ以前の TensorRT リリースを対象としています。この JetPack 7.2 ワークフローでは、`scripts/deployment/orin/install_deps.sh` や `scripts/activate_orin.sh` を実行しないでください。
:::

:::note
検証済み環境で使用されている PyTorch ホイールには、CUDA 12.9 ランタイムが含まれています。TensorRT は引き続き JetPack 7.2 のシステム CUDA 13.2 インストールを使用します。本ガイドに示すアクティベーション順序とライブラリパスの順序を維持してください。
:::

## ストレージとメモリの計画

リポジトリ、チェックポイント、ローカル VLM バックボーン、データセット、ONNX グラフ、TensorRT エンジン、および一時ビルドファイル用に、少なくとも **45～50 GB** の空きストレージを確保してください。検証済みの TensorRT アーティファクトディレクトリは、およそ **13 GB** を占有します。

テストに使用した AGX Orin では、約 29 GB の使用可能な統合メモリが利用可能で、スワップは使用していませんでした。エンジンをビルドする前に次を実行します：

```bash
free -h
df -h "${HOME}"
sudo tegrastats
```

TensorRT ビルダーがメモリ不足キラーによって終了する場合は、ブラウザ、ノートブック、デスクトップアプリケーション、および無関係なモデルサービスを閉じてください。

## 1. ポータブルなパスを定義する

プロジェクトの README には、元のテストマシンでのパスが記録されています。マシン固有の絶対パスをコピーする代わりに、自分のホームディレクトリ配下に再利用可能な設定を作成します：

```bash
mkdir -p "${HOME}/.config/gr00t-jp72"

cat > "${HOME}/.config/gr00t-jp72/paths.sh" <<'EOF'
export GR00T_WORKSPACE="${HOME}/gr00t-jp72"
export GR00T_REPO="${GR00T_WORKSPACE}/Isaac-GR00T-Orin-JP72"
export GR00T_CHECKPOINT="${GR00T_WORKSPACE}/checkpoints/checkpoint-10000"
export GR00T_DATASET="${GR00T_WORKSPACE}/datasets/grab_tube_0_eval"
export GR00T_BACKBONE="${GR00T_WORKSPACE}/models/Qwen/Qwen3-VL-2B-Instruct"
export GR00T_TRT_OUTPUT="${GR00T_WORKSPACE}/artifacts/rebot_trt"
EOF

source "${HOME}/.config/gr00t-jp72/paths.sh"
mkdir -p \
  "$(dirname "${GR00T_REPO}")" \
  "$(dirname "${GR00T_CHECKPOINT}")" \
  "$(dirname "${GR00T_DATASET}")" \
  "$(dirname "${GR00T_BACKBONE}")" \
  "${GR00T_TRT_OUTPUT}"
```

変数を使用する前に、新しいターミナルごとに次のコマンドを実行してください：

```bash
source "${HOME}/.config/gr00t-jp72/paths.sh"
```

大きなファイルを NVMe SSD 上に配置するために `paths.sh` 内の値を変更してもかまいません。リポジトリ、モデル、データセット、出力のパスは分離しておいてください。

## 2. JetPack 7.2 用リポジトリをクローンする

```bash
source "${HOME}/.config/gr00t-jp72/paths.sh"

git clone https://github.com/jjjadand/Isaac-GR00T-Orin-JP72.git "${GR00T_REPO}"
cd "${GR00T_REPO}"
git checkout 93d711e3d56ca054d1cd41b12115a37ae57b46f6
```

すでにリポジトリが存在する場合は、現在のリビジョンを確認します：

```bash
git -C "${GR00T_REPO}" rev-parse HEAD
git -C "${GR00T_REPO}" status --short
```

ONNX エクスポートやエンジンビルドの実行中にリビジョンを切り替えないでください。

## 3. 必要な入力を準備する

### 3.1 ファインチューニング済み GR00T N1.7 チェックポイント

ファインチューニング済みチェックポイントを `${GR00T_CHECKPOINT}` にコピーします。推論用チェックポイントには、GR00T の設定、統計情報、およびモデルシャードが必要です。典型的なレイアウトは次のとおりです：

```text
checkpoint-10000/
├── config.json
├── embodiment_id.json
├── model-00001-of-00003.safetensors
├── model-00002-of-00003.safetensors
├── model-00003-of-00003.safetensors
├── model.safetensors.index.json
├── processor_config.json
└── statistics.json
```

`optimizer.pt`、`scheduler.pt`、`trainer_state.json` などの学習状態ファイルは、推論や ONNX エクスポートには不要です。

設定したパスを検証します：

```bash
source "${HOME}/.config/gr00t-jp72/paths.sh"
test -f "${GR00T_CHECKPOINT}/config.json"
test -f "${GR00T_CHECKPOINT}/processor_config.json"
test -f "${GR00T_CHECKPOINT}/statistics.json"
```

### 3.2 ローカル Qwen3-VL バックボーンをダウンロードする

N1.7 ポリシーには、依然として互換性のあるバックボーンアーキテクチャ、トークナイザ、および画像プロセッサが必要です。このリポジトリは `GR00T_BACKBONE_PATH` を通じて完全ローカルなバックボーンをサポートしているため、エクスポートや推論の際に Hugging Face へのログインは不要です。

```bash
source "${HOME}/.config/gr00t-jp72/paths.sh"

uv tool run --from modelscope modelscope download \
  Qwen/Qwen3-VL-2B-Instruct \
  --local-dir "${GR00T_BACKBONE}"
```

メインのモデルファイルと設定が存在することを確認します：

```bash
test -f "${GR00T_BACKBONE}/config.json"
test -f "${GR00T_BACKBONE}/model.safetensors"
ls -lh "${GR00T_BACKBONE}/model.safetensors"
```

テスト済みのダウンロードでは、`model.safetensors` ファイルのサイズは約 4.25 GB です。

### 3.3 ローカル LeRobot データセットを準備する

オフラインのドライテストは、`--dataset-path` を通じてローカルの LeRobot v2/v2.1 データセットを受け取ります。検証済みの RS-Rebot 例では、最小限のレイアウトは次のとおりです：

```text
grab_tube_0_eval/
├── data/chunk-000/episode_000000.parquet
├── videos/chunk-000/observation.images.front/episode_000000.mp4
├── videos/chunk-000/observation.images.side/episode_000000.mp4
└── meta/
    ├── episodes.jsonl
    ├── info.json
    ├── modality.json
    ├── stats.json
    └── tasks.jsonl
```

このサンプルでは、次の条件を想定しています：

- エンボディメントタグ：`NEW_EMBODIMENT`;
- カメラキー：`front` と `side`;
- 状態およびアクション次元：7;
- アクションホライズン：16。

チェックポイントの `processor_config.json` とデータセットの `meta/modality.json` は、互換性のある状態・アクション・ビデオモダリティを記述している必要があります。

:::tip
ローカルディレクトリは `--dataset-path` で渡してください。Hugging Face リポジトリ ID を期待するオプションにローカルフォルダを指定しないでください。不要な Hub リクエストが発生し、HTTP 401 エラーが返される可能性があります。
:::

## 4. JetPack 7.2 環境をインストールする

### 4.1 システムパッケージをインストールする

JetPack 7.2 には、すでに CUDA、TensorRT、cuDNN、および TensorRT Python バインディングが含まれている必要があります。

```bash
sudo apt-get update
sudo apt-get install -y --no-install-recommends \
  ffmpeg \
  libopenblas0-pthread \
  python3.12-venv \
  python3-dev
```

プラットフォームパッケージを確認します：

```bash
cat /etc/nv_tegra_release
/usr/local/cuda-13.2/bin/nvcc --version
dpkg-query -W python3-libnvinfer libnvinfer10 tensorrt
```

検証済み環境では、L4T R39.2、CUDA 13.2、TensorRT 10.16 が報告されています。

### 4.2 専用の Python 環境を作成する

```bash
source "${HOME}/.config/gr00t-jp72/paths.sh"
cd "${GR00T_REPO}"

curl -LsSf https://astral.sh/uv/install.sh | sh
export PATH="${HOME}/.local/bin:${PATH}"

uv venv --python /usr/bin/python3.12 .venv-jp72
```

別の Jetson プラットフォーム向けにビルドされたパッケージが含まれている可能性があるため、リポジトリの `.venv` を再利用しないでください。

### 4.3 テスト済み Orin 用 PyTorch ホイールをインストールする

```bash
uv pip install --python "${GR00T_REPO}/.venv-jp72/bin/python" --no-deps \
  "https://pypi.jetson-ai-lab.io/jp6/cu129/+f/f36/0db283b1249b3/torch-2.8.0-cp312-cp312-linux_aarch64.whl" \
  "https://pypi.jetson-ai-lab.io/jp6/cu129/+f/255/341cb5beb4673/torchvision-0.23.0-cp312-cp312-linux_aarch64.whl"
```

PyTorch ホイールに必要な CUDA 12.9 ランタイムライブラリをインストールします：

```bash
uv pip install --python "${GR00T_REPO}/.venv-jp72/bin/python" \
  nvidia-cublas-cu12==12.9.2.10 \
  nvidia-cuda-cupti-cu12==12.9.79 \
  nvidia-cuda-nvrtc-cu12==12.9.86 \
  nvidia-cuda-runtime-cu12==12.9.79 \
  nvidia-cufft-cu12==11.4.1.4 \
  nvidia-curand-cu12==10.3.10.19 \
  nvidia-cusolver-cu12==11.7.5.82 \
  nvidia-cusparse-cu12==12.5.10.65 \
  nvidia-nvjitlink-cu12==12.9.86
```

### 4.4 GR00T の依存関係をインストールする

```bash
uv pip install --python "${GR00T_REPO}/.venv-jp72/bin/python" \
  accelerate==1.12.0 \
  albumentations==1.4.18 \
  av==16.1.0 \
  build==1.4.0 \
  click==8.1.8 \
  cryptography==46.0.7 \
  datasets==3.6.0 \
  dm-tree==0.1.8 \
  einops==0.8.1 \
  gitpython==3.1.50 \
  gymnasium==1.2.2 \
  "huggingface-hub[cli]==0.36.2" \
  jsonlines==4.0.0 \
  lmdb==1.7.5 \
  matplotlib==3.10.1 \
  msgpack==1.1.0 \
  msgpack-numpy==0.4.8 \
  numpy==1.26.4 \
  omegaconf==2.3.0 \
  onnx==1.20.1 \
  onnxscript==0.6.2 \
  opencv-python-headless==4.11.0.86 \
  pandas==2.2.3 \
  peft==0.17.1 \
  pytest==9.0.3 \
  pytest-timeout==2.4.0 \
  pyzmq==27.0.1 \
  ruff==0.15.1 \
  safetensors==0.7.0 \
  scipy==1.15.3 \
  termcolor==3.2.0 \
  transformers==4.57.6 \
  tyro==0.9.17 \
  wandb==0.23.0

uv pip install --python "${GR00T_REPO}/.venv-jp72/bin/python" --no-deps \
  "https://pypi.jetson-ai-lab.io/jp6/cu129/+f/c46/66317287eb28a/diffusers-0.36.0.dev0-py3-none-any.whl"

uv pip install --python "${GR00T_REPO}/.venv-jp72/bin/python" --no-deps -e "${GR00T_REPO}"
```

この検証済み構成では TorchCodec をインストールしないでください。JetPack 7.2 の FFmpeg 8 と組み合わせて PyAV 16 を使用し、データセットの動画をデコードします。Flash Attention は任意であり、検証済み環境ではインストールされていません。

### 4.5 システムの TensorRT Python パッケージを公開する

ユーザー名をハードコードするのではなく、Python を使って環境の実際の `site-packages` パスを取得します：

```bash
GR00T_SITE_PACKAGES="$("${GR00T_REPO}/.venv-jp72/bin/python" -c 'import site; print(site.getsitepackages()[0])')"

printf '%s\n' '/usr/lib/python3.12/dist-packages' \
  > "${GR00T_SITE_PACKAGES}/jetpack_system_packages.pth"
```

## 5. 有効化と検証

新しいシェルごとに次のブロックを実行します：

```bash
source "${HOME}/.config/gr00t-jp72/paths.sh"
cd "${GR00T_REPO}"

deactivate 2>/dev/null || true
source .venv-jp72/bin/activate
source scripts/activate_orin_jp72.sh

# Override the original test-machine path configured by the activation script.
export GR00T_BACKBONE_PATH="${GR00T_BACKBONE}"
hash -r
```

インタプリタ、GPU アーキテクチャ、TensorRT バインディング、バックボーン、および動画バックエンドを検証します：

```bash
python - <<'PY'
import os
import sys

import tensorrt
import torch

print("python:", sys.executable)
print("torch:", torch.__version__)
print("torch CUDA:", torch.version.cuda)
print("GPU:", torch.cuda.get_device_name(0))
print("architectures:", torch.cuda.get_arch_list())
print("TensorRT:", tensorrt.__version__)
print("backbone:", os.environ["GR00T_BACKBONE_PATH"])
print("video backend:", os.environ["GR00T_VIDEO_BACKEND"])

assert sys.executable.endswith("/.venv-jp72/bin/python")
assert "sm_87" in torch.cuda.get_arch_list()
assert os.environ["GR00T_VIDEO_BACKEND"] == "pyav"
PY
```

期待される主な値には、PyTorch 2.8.0、PyTorch CUDA 12.9、`sm_87`、TensorRT 10.16.2.10、および `pyav` バックエンドが含まれます。

:::warning
インストール後は、有効化された環境の素の `python` コマンドを使用してください。`uv run python` は使用しないでください。リポジトリのデフォルトのプロジェクト環境を同期し、Jetson 固有の動作中パッケージを置き換えてしまう可能性があります。
:::

## 6. PyTorch スモークテストを実行する

エクスポートの前に、チェックポイント、ローカルバックボーン、データセット、動画デコーダ、および CUDA フォワードパスが連携して動作することを確認します：

```bash
python scripts/deployment/standalone_inference_script.py \
  --model-path "${GR00T_CHECKPOINT}" \
  --dataset-path "${GR00T_DATASET}" \
  --embodiment-tag NEW_EMBODIMENT \
  --traj-ids 0 \
  --steps 1 \
  --execution-horizon 16 \
  --denoising-steps 4 \
  --inference-mode pytorch \
  --save-plot-path /tmp/rebot_pytorch_smoke.jpeg
```

このコマンドがデータセットの観測を 1 つ読み込み、アクション予測を生成できるようになるまで、TensorRT へのエクスポートには進まないでください。

## 7. 完全なモデルを ONNX にエクスポートする

7 つすべてのコンポーネントを、バッチサイズ 1 の静的バッチでエクスポートします：

```bash
python scripts/deployment/build_trt_pipeline.py \
  --model-path "${GR00T_CHECKPOINT}" \
  --dataset-path "${GR00T_DATASET}" \
  --embodiment-tag NEW_EMBODIMENT \
  --export-mode full_pipeline \
  --batch-size 1 \
  --output-dir "${GR00T_TRT_OUTPUT}" \
  --workspace 4096 \
  --steps export
```

検証済みのエクスポートにはおよそ 2 分かかります。ONNX ディレクトリに 7 つのグラフとエクスポートメタデータが含まれていることを確認します：

```bash
find "${GR00T_TRT_OUTPUT}/onnx" -maxdepth 1 -type f \
  -printf '%f %s bytes\n' | sort
```

`dit_bf16.onnx` の隣に `dit_bf16.onnx.data` を保持してください。これは DiT グラフで使用される外部テンソルデータを含みます。

## 8. 7 つの TensorRT エンジンをビルドする

ターゲットの AGX Orin 上でエンジンをビルドします。TensorRT エンジンは GPU アーキテクチャ、TensorRT バージョン、グラフ形状、およびバッチサイズに依存します。

```bash
python scripts/deployment/build_trt_pipeline.py \
  --model-path "${GR00T_CHECKPOINT}" \
  --dataset-path "${GR00T_DATASET}" \
  --embodiment-tag NEW_EMBODIMENT \
  --export-mode full_pipeline \
  --batch-size 1 \
  --output-dir "${GR00T_TRT_OUTPUT}" \
  --workspace 4096 \
  --steps build
```

検証済みのビルドには約 3 分 37 秒かかり、次の成果物が生成されました：

```text
action_decoder.engine
action_encoder.engine
dit_bf16.engine
llm_bf16.engine
state_encoder.engine
vit.engine
vl_self_attention.engine
```

エンジンディレクトリを検証します：

```bash
find "${GR00T_TRT_OUTPUT}/engines" -maxdepth 1 -type f \
  -printf '%f %s bytes\n' | sort
```

チェックポイント、入力カメラのレイアウトまたは解像度、アクションホライズン、バッチサイズ、GPU、CUDA/TensorRT インストール、または ONNX グラフを変更した場合は再ビルドしてください。

## 9. TensorRT を PyTorch と比較検証する

リポジトリの数値検証ステージを実行します：

```bash
python scripts/deployment/build_trt_pipeline.py \
  --model-path "${GR00T_CHECKPOINT}" \
  --dataset-path "${GR00T_DATASET}" \
  --embodiment-tag NEW_EMBODIMENT \
  --export-mode full_pipeline \
  --batch-size 1 \
  --output-dir "${GR00T_TRT_OUTPUT}" \
  --workspace 4096 \
  --steps verify
```

検証済みの実行結果は次のとおりです：

| 比較 | コサイン類似度 |
| --- | ---: |
| ViT 出力 | 0.995977 |
| バックボーン出力 | 0.999958 |
| 最終アクション | 0.997426 |
| 検証ステータス | PASS |

これらの値は再現性のための参照として扱ってください。異なるファインチューニング済みチェックポイント、データセットサンプル、または依存関係のリビジョンにより、値がわずかに異なる場合があります。

## 10. フル TensorRT オフライン推論を実行する

次のコマンドは軌道 0 を読み込み、16 アクションのチャンクを 2 つ予測します。RS-Rebot ハードウェアランナーは初期化しません。

```bash
python scripts/deployment/standalone_inference_script.py \
  --model-path "${GR00T_CHECKPOINT}" \
  --dataset-path "${GR00T_DATASET}" \
  --embodiment-tag NEW_EMBODIMENT \
  --traj-ids 0 \
  --steps 32 \
  --execution-horizon 16 \
  --denoising-steps 4 \
  --skip-timing-steps 1 \
  --inference-mode trt_full_pipeline \
  --trt-engine-path "${GR00T_TRT_OUTPUT}/engines" \
  --save-plot-path /tmp/rebot_trt_result.jpeg
```

成功した実行には、次のようなメッセージが含まれます：

```text
N1.7 full-pipeline TRT engines loaded.
  ViT: TRT | LLM: TRT | Action Head: TRT
All inference steps completed for current trajectory-id 0
pred_action_joints vs time (32, 7)
Done
```

検証済みのウォーム推論時間は、**16 アクション予測チャンクあたり 0.2755 秒**、すなわちおよそ **1 秒あたり 3.63 チャンク**でした。この結果は、テストされたチェックポイント、データセット形状、エンジン構成、および AGX Orin の動作条件に適用されます。

スクリプトの MSE および MAE の値は、モデル予測と記録済みデータセットアクションを比較したものです。これらは TensorRT 変換誤差の指標ではありません。PyTorch と TensorRT の一致度には、コサイン検証ステージを使用してください。

### フル TensorRT 推論デモ

次の動画は、JetPack 7.2 と Jetson AGX Orin 上で動作する、完成した GR00T N1.7 TensorRT ワークフローを示しています。

<div className="video-container">
  <iframe
    width="800"
    height="450"
    src="https://www.youtube.com/embed/H3rQHnB-gaI"
    title="GR00T N1.7 full TensorRT inference on JetPack 7.2 and Jetson AGX Orin"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  />
</div>

## 11. 想定される警告

### TorchVision 由来の `libnvjpeg.so.12`

テストされたデータセットパスは、`torchvision.io` ではなく PyAV と FFmpeg を使用します。この警告は、検証済み推論ワークフローの実行を妨げるものではありません。

### `flash_attn is not installed`

参照 PyTorch モデルは、ロードおよびエクスポート時に SDPA を使用します。フルパイプライン推論では、ViT、LLM、およびアクションコンポーネントを TensorRT エンジンに置き換えます。

### `lm_head.weight` is newly initialized

GR00T は、言語生成ヘッドではなくバックボーンの隠れ状態を入力として使用します。ファインチューニング済みポリシーチェックポイントが、アクション推論で使用される重みを提供します。

## 12. トラブルシューティング

### `torch._C` has no `_dlpack_exchange_api`

誤った環境が有効になっています。インタプリタを確認します：

```bash
which python
python -c "import sys; print(sys.executable)"
```

パスは `${GR00T_REPO}/.venv-jp72/bin/python` で終わっている必要があります。環境を再度有効化し、`source scripts/activate_orin_jp72.sh` をもう一度実行してください。

### Hugging Face HTTP 401

リポジトリの有効化スクリプトの後に、ローカルバックボーンのオーバーライドが適用されていることを確認します：

```bash
export GR00T_BACKBONE_PATH="${GR00T_BACKBONE}"
export HF_HUB_OFFLINE=1
export TRANSFORMERS_OFFLINE=1

test -f "${GR00T_BACKBONE_PATH}/config.json"
test -f "${GR00T_BACKBONE_PATH}/model.safetensors"
```

### TorchCodec または FFmpeg のインポート失敗

PyAV が選択されていることを確認します：

```bash
python -c "import os, av; print(os.environ['GR00T_VIDEO_BACKEND'], av.__version__)"
```

期待される出力は `pyav 16.1.0` で始まります。

### エンジン形状またはデシリアライズエラー

別の GPU や TensorRT インストールからエンジンをコピーしないでください。`export_metadata.json` がエンジン出力に付随していることを確認し、ターゲットデバイス上で ONNX と TensorRT の成果物を再ビルドしてください。

### TensorRT ビルドでメモリ不足になる

1. 関連のない GPU アプリケーションやモデルサーバーを終了します。
2. すぐに増やさず、`--workspace 4096` を維持します。
3. ステージを順番にビルドします。
4. `df -h`、`free -h`、`tegrastats` を使って十分なストレージとメモリがあることを確認します。
5. 失敗したビルドを繰り返した後もメモリ断片化が残る場合は、クリーンなセッションに再起動します。

## 13. ロボット制御に向けて

検証済みコマンドは、意図的にオフラインのドライテストになっています。物理ロボットを接続する前に：

1. 記録済みエピソード上で、TensorRT と PyTorch のアクション軌道を比較する；
2. 関節順序、単位、スケーリング、リミット、およびエンボディメントメタデータを確認する；
3. 生成されたすべてのコマンドを、安全な関節および速度リミットにクランプする；
4. 非常停止、コマンドタイムアウト、および古い観測の検出を実装する；
5. アクチュエータを無効化または無負荷の状態でテストする；
6. 低速かつ短いホライズンのアクションから開始する；
7. レイテンシ、メモリ、電力、温度、およびタスク成功率を記録する。

ハードウェア固有の安全レイヤーなしに、オフラインコマンドをロボットコントローラとして再利用しないでください。

## 再現チェックリスト

- [ ] JetPack 7.2 / L4T R39.2 がインストールされている。
- [ ] CUDA 13.2 と TensorRT 10.16 が認識されている。
- [ ] リポジトリがドキュメント記載のリビジョンでクローンされている。
- [ ] `.venv-jp72` が Python 3.12 と Orin 用 `sm_87` PyTorch ホイールを使用している。
- [ ] ローカル Qwen3-VL バックボーンが Hub リクエストなしでロードされる。
- [ ] チェックポイントと LeRobot データセットのモダリティが一致している。
- [ ] PyTorch スモークテストが成功している。
- [ ] 7 つの ONNX グラフがエクスポートされている。
- [ ] 7 つの TensorRT エンジンがターゲット Orin 上で生成されている。
- [ ] 数値検証レポートが合格します。
- [ ] オフラインのフル TensorRT 推論が完了し、プロットを保存します。

## 関連リソース

- [JetPack 7.2 リソースハブ](/ja/jetpack_7_2_resource_hub/)
- [JetPack 7.2 メモリ最適化](/ja/jetpack_7_2_memory_optimization/)
- [JetPack 7.2 上で TensorRT Edge-LLM をデプロイ](/ja/deploy_tensorrt_edge_llm_on_jetpack7.2/)
- [reBot Arm 向けに GR00T N1.7 をファインチューニングし Jetson Thor にデプロイ](/ja/fine_tune_gr00t_n1.7_for_rebot_arm_and_deploy_on_robotics_j601/)
- [JetPack 7.2 詳細解説](/ja/jetpack72_deep_dive_bk/)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
