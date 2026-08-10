---
description: x86 GPU ホスト上でモデルをエクスポートし、Jetson Orin または Jetson Thor 上でランタイムをビルドして TensorRT エンジンを生成し、C++ 推論を検証することで、JetPack 7.2 上に NVIDIA TensorRT Edge-LLM をデプロイします。
title: JetPack 7.2 に TensorRT Edge-LLM をデプロイする
keywords:
  - Jetson
  - TensorRT
  - LLM
  - TensorRT Edge-LLM
  - JetPack 7.2
  - Jetson Orin
  - Jetson Thor
  - ONNX
image: https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/7.png
slug: /deploy_tensorrt_edge_llm_on_jetpack7.2
last_update:
  date: 07/31/2026
  author: Dongxu Jin
url: https://wiki.seeedstudio.com/ja/deploy_tensorrt_edge_llm_on_jetpack7.2/
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
---

# JetPack 7.2 に TensorRT Edge-LLM をデプロイする

## 概要

[TensorRT Edge-LLM](https://github.com/NVIDIA/TensorRT-Edge-LLM) は、組み込み NVIDIA プラットフォーム上で大規模言語モデル、Vision-Language モデル、マルチモーダルモデル、および一部の Vision-Language-Action ワークロードをデプロイするための、NVIDIA の高性能推論スタックです。チェックポイントのエクスポートパイプライン、TensorRT エンジンビルダー、最適化された C++ ランタイム、サンプル、および実験的な OpenAI 互換サーバーを提供します。

JetPack 7.2 は Jetson Orin に対して公式にサポートされている TensorRT Edge-LLM のパスです。Jetson Thor も JetPack 7.x 上でサポートされています。本ガイドでは、このページが **2026 年 7 月 31 日** に更新された時点で最新の公開リリースである **TensorRT Edge-LLM v0.9.1** を固定して使用します。

:::note
本ガイドのスクリーンショットは、JetPack 6.2 チュートリアルから既存の TensorRT Edge-LLM ワークフロー画像を再利用しています。ホストでのエクスポートとターゲットでのエンジン生成という全体的なワークフローは同じですが、コマンド名、ビルドフラグ、バージョン番号、コンソール出力は v0.9.1 では異なる場合があります。
:::

## プラットフォームマトリクス

| ターゲット | ソフトウェアリリース | CMake ターゲット | CUDA toolkit 値 | ランタイム精度 |
| --- | --- | --- | --- | --- |
| Jetson Orin | JetPack 7.2 | `jetson-orin` | `13.2` | FP16, INT8, INT4 |
| Jetson Thor | JetPack 7.2 | `jetson-thor` | `13.2` | 各モデルと精度ごとのサポートモデルマトリクスを確認してください。 |

:::warning
TensorRT Edge-LLM v0.9.1 は、Jetson Orin 上で FP8、MXFP8、FP4、NVFP4 のランタイム精度をサポートしません。Orin では FP16、INT8、または INT4 のチェックポイントを使用してください。JetPack 6.2 上でビルドした TensorRT エンジンを JetPack 7.2 にコピーしないでください。ターゲットの JetPack 7.2 システム上でエンジンを再ビルドしてください。
:::

デプロイは 2 つのステージに分かれます：

1. **x86 GPU ホスト上でエクスポート**：Python ツールをインストールし、Hugging Face のチェックポイントを ONNX にエクスポートします。
2. **Jetson 上でビルドおよび実行**：C++ ランタイムをコンパイルし、ONNX から TensorRT エンジンをビルドして推論を実行します。

## パート 1: x86 GPU ホスト上でモデルをエクスポートする

### ホスト要件

- Ubuntu 22.04 または 24.04 を搭載した x86-64 Linux
- コンピュートキャパビリティ 8.0 以上の NVIDIA Ampere 以降の GPU
- CUDA 12.x または 13.x
- Python 3.10 以上
- 選択したチェックポイントに対して十分な RAM、VRAM、およびディスク容量

モデルのエクスポートには、ホスト RAM と VRAM にチェックポイントサイズの数倍が必要になる場合があります。より大きなモデルや量子化モデルに進む前に、小さな Qwen3-0.6B FP16 の例から始めてください。

### v0.9.1 をクローンしてインストールする

```bash
git clone --branch v0.9.1 --depth 1 https://github.com/NVIDIA/TensorRT-Edge-LLM.git
cd TensorRT-Edge-LLM
git submodule update --init --recursive

python3 -m venv venv
source venv/bin/activate
python -m pip install --upgrade pip
pip install .
```

チェックポイントの量子化、LoRA マージ、語彙削減、トークナイザーヘルパーが必要になったときに、オプションのツール依存関係をインストールします：

```bash
pip install ".[tools]"
```

現在のコマンドラインインターフェースを確認します：

```bash
tensorrt-edgellm-export --help
tensorrt-edgellm-quantize --help
```

![TensorRT Edge-LLM command verification](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/1.png)

### Qwen3-0.6B を ONNX にエクスポートする

次の例では、FP16 チェックポイントを直接エクスポートします。FP16 は Jetson Orin でサポートされており、最初の検証ワークフローをシンプルに保てます。

```bash
export EDGE_LLM_PATH=$HOME/TensorRT-Edge-LLM
export WORKSPACE_DIR=$HOME/tensorrt-edgellm-workspace
export MODEL_NAME=Qwen3-0.6B
export PYTHONPATH=$EDGE_LLM_PATH:$PYTHONPATH

mkdir -p "$WORKSPACE_DIR"
cd "$WORKSPACE_DIR"

tensorrt-edgellm-export \
  Qwen/Qwen3-0.6B \
  "$WORKSPACE_DIR/$MODEL_NAME/onnx"
```

![Model export workflow](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/2.png)

![Checkpoint processing](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/3.png)

![ONNX export progress](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/4.png)

![Exported model artifacts](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/5.png)

エクスポートされた LLM グラフは次の場所にあるはずです：

```text
$WORKSPACE_DIR/Qwen3-0.6B/onnx/llm
```

### オプション: Jetson Orin で INT4 チェックポイントを使用する

Orin デバイスでより大きなモデルを使用する場合は、公式のサポートモデルマトリクスで INT4 AWQ または INT4 GPTQ として記載されているチェックポイントを使用してください。事前に量子化されたチェックポイントは直接エクスポートできます。外部化された INT4 重みは、メモリに制約のある Orin デバイスでのエンジンビルド時のメモリ負荷を軽減します。

```bash
tensorrt-edgellm-export \
  /path/to/supported-int4-checkpoint \
  "$WORKSPACE_DIR/<model-name>/onnx" \
  --externalize-weights int4_ffn
```

INT4 MoE チェックポイントの場合は、TensorRT Edge-LLM によって文書化されている、モデルファミリ固有の外部化重みオプションを追加してください。[supported-model matrix](https://nvidia.github.io/TensorRT-Edge-LLM/user_guide/getting_started/supported-models.html) で、必ず正確なチェックポイントと精度を確認してください。

### ONNX ディレクトリを Jetson に転送する

ターゲットディレクトリを作成し、エクスポートしたモデルをコピーします：

```bash
ssh <jetson-user>@<jetson-ip> \
  "mkdir -p ~/tensorrt-edgellm-workspace/$MODEL_NAME"

scp -r \
  "$WORKSPACE_DIR/$MODEL_NAME/onnx" \
  <jetson-user>@<jetson-ip>:~/tensorrt-edgellm-workspace/$MODEL_NAME/
```

## パート 2: JetPack 7.2 上で TensorRT Edge-LLM をビルドする

以下のメインワークフローは Jetson Orin をターゲットとしています。Jetson Thor 用の構成はその後に示します。

### JetPack 7.2 を確認する

Jetson デバイス上で、Jetson Linux リリース、CUDA コンパイラ、および TensorRT パッケージを確認します：

```bash
cat /etc/nv_tegra_release
nvcc --version
dpkg -l | grep -E 'tensorrt|libnvinfer'
```

v0.9.1 の JetPack 7.2 ビルドマトリクスでは、`nvcc --version` はビルド構成で想定されている CUDA 13.2 ツールチェーンと一致している必要があります。

### ビルド依存関係をインストールする

```bash
sudo apt update
sudo apt install -y cmake build-essential git
```

### Jetson 上で対応するリリースをクローンする

ホストでのエクスポートとターゲットランタイムに同じ TensorRT Edge-LLM リリースを使用します：

```bash
cd ~
git clone --branch v0.9.1 --depth 1 https://github.com/NVIDIA/TensorRT-Edge-LLM.git
cd TensorRT-Edge-LLM
git submodule update --init --recursive
```

### Jetson Orin 向けに構成してビルドする

```bash
cd ~/TensorRT-Edge-LLM
mkdir -p build
cd build

cmake .. \
  -DCMAKE_BUILD_TYPE=Release \
  -DTRT_PACKAGE_DIR=/usr \
  -DCMAKE_TOOLCHAIN_FILE=cmake/aarch64_linux_toolchain.cmake \
  -DEMBEDDED_TARGET=jetson-orin \
  -DCUDA_CTK_VERSION=13.2 \
  -DENABLE_CUTE_DSL=ALL

cmake --build . -j"$(nproc)"
```

現在の Qwen3.5 およびその他のサポートモデルパスでは CuTe DSL カーネルが必要なため、有効化されています。

サンプルがビルドされたことを確認します：

```bash
./examples/llm/llm_build --help
./examples/llm/llm_inference --help
```

### Jetson Thor ビルドバリアント

JetPack 7.2 を搭載した Jetson Thor では、同じビルド手順を使用しますが、組み込みターゲットを変更します：

```bash
cmake .. \
  -DCMAKE_BUILD_TYPE=Release \
  -DTRT_PACKAGE_DIR=/usr \
  -DCMAKE_TOOLCHAIN_FILE=cmake/aarch64_linux_toolchain.cmake \
  -DEMBEDDED_TARGET=jetson-thor \
  -DCUDA_CTK_VERSION=13.2 \
  -DENABLE_CUTE_DSL=ALL
```

## TensorRT エンジンをビルドする

Jetson デバイス上でワークスペースを設定し、エクスポートした ONNX グラフからエンジンをビルドします：

```bash
export WORKSPACE_DIR=$HOME/tensorrt-edgellm-workspace
export MODEL_NAME=Qwen3-0.6B

cd ~/TensorRT-Edge-LLM

./build/examples/llm/llm_build \
  --onnxDir "$WORKSPACE_DIR/$MODEL_NAME/onnx/llm" \
  --engineDir "$WORKSPACE_DIR/$MODEL_NAME/engines" \
  --maxBatchSize 1 \
  --maxInputLen 1024 \
  --maxKVCacheCapacity 4096
```

![TensorRT engine build](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/6.png)

![Engine build completed](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/7.png)

エンジンのビルド時間とピークメモリは、モデル、精度、最大入力長、KV キャッシュ容量、および Jetson のメモリ構成に依存します。

## C++ 推論を実行する

リクエストファイルを作成します：

```bash
cat > "$WORKSPACE_DIR/input.json" <<'EOF'
{
  "batch_size": 1,
  "temperature": 1.0,
  "top_p": 1.0,
  "top_k": 50,
  "max_generate_length": 128,
  "requests": [
    {
      "messages": [
        {
          "role": "user",
          "content": "What is the capital of the United States?"
        }
      ]
    }
  ]
}
EOF
```

推論を実行します：

```bash
cd ~/TensorRT-Edge-LLM

./build/examples/llm/llm_inference \
  --engineDir "$WORKSPACE_DIR/$MODEL_NAME/engines" \
  --inputFile "$WORKSPACE_DIR/input.json" \
  --outputFile "$WORKSPACE_DIR/output.json"
```

結果を表示します：

```bash
cat "$WORKSPACE_DIR/output.json"
```

レスポンスには、次のような生成テキストが含まれているはずです：

```json
{
  "responses": [
    {
      "output_text": "The capital of the United States is Washington, D.C.",
      "request_idx": 0,
      "batch_idx": 0
    }
  ]
}
```

![TensorRT Edge-LLM inference](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/8.png)

![Inference output](https://files.seeedstudio.com/wiki/tensorRT-edge-llm_imgs/9.png)

## エンジンをベンチマークする

合成のプリフィルおよびデコード測定には `llm_bench` を使用します：

```bash
./build/examples/llm/llm_bench \
  --engineDir "$WORKSPACE_DIR/$MODEL_NAME/engines" \
  --mode prefill
```

JetPack 6.2 と JetPack 7.2 を比較する際には、次の値を記録します：

- エンジンビルド中のピークシステムメモリ
- エンジン読み込み後のメモリ
- 最初のトークンまでの時間
- プロンプト処理スループット
- デコードスループット
- GPU 周波数、電源モード、温度、およびボード全体の消費電力

## JetPack 6.2 ワークフローとの違い

| 項目 | JetPack 6.2 互換パス | JetPack 7.2 サポートパス |
| --- | --- | --- |
| Jetson Orin のステータス | 互換 | 公式にサポートおよびテスト済み |
| CUDA ビルド値 | `12.6` | `13.2` |
| CMake ターゲット | `jetson-orin` | `jetson-orin` |
| Orin 上のランタイム精度 | FP16, INT8, INT4 | FP16, INT8, INT4 |
| CuTe DSL | リリース依存 | 現在のモデルパス向けに `-DENABLE_CUTE_DSL=ALL` で有効化 |
| エンジン再利用 | JetPack 6.2 用に再ビルド | JetPack 7.2 用に再ビルド |

## トラブルシューティング

### CMake が TensorRT を見つけられない

JetPack によって TensorRT 開発パッケージがインストールされており、ライブラリが `/usr` 配下にあることを確認します：

```bash
dpkg -l | grep -E 'tensorrt|libnvinfer'
ls /usr/include/NvInfer.h
```

### CUDA バージョンが一致しない

構成チェックを回避するためだけに `CUDA_CTK_VERSION` を変更しないでください。デバイスが意図した JetPack 7.2 イメージで動作していること、および `nvcc` が JetPack の CUDA ツールキットを参照していることを確認してください。

### エンジンのビルドが強制終了される、またはメモリ不足になる

- Qwen3-0.6B FP16 から始めてください。
- Jetson Orin 上で大規模モデルを扱う場合は、サポートされている INT4 チェックポイントを使用してください。
- サポートされている場合は、外部化された INT4 重みを使用してください。
- 最初の検証実行では、`maxInputLen` と `maxKVCacheCapacity` を減らしてください。
- エンジンをビルドする前に、無関係なコンテナやメモリを多く消費するサービスを停止してください。

### モデルまたは精度が拒否される

[TensorRT Edge-LLM supported-model matrix](https://nvidia.github.io/TensorRT-Edge-LLM/user_guide/getting_started/supported-models.html) を確認してください。モデルファミリがサポートされていることは、すべてのチェックポイント、精度、ビジュアルエンコーダ、または推測デコーダの組み合わせが、すべての Jetson プラットフォームでサポートされていることを意味するわけではありません。

## 次のステップ

- より大きな Jetson Orin モデル向けに INT4 LLM ワークフローを追加します。
- サポートされている Qwen-VL、InternVL、Phi マルチモーダル、または Gemma チェックポイントを用いた VLM 推論を追加します。
- 実験的な高レベル Python API と OpenAI 互換サーバーを評価します。
- [Rapid Prototyping on Jetson with NVIDIA Skills](/ja/rapid_prototyping_on_jetson_with_nvidia_skills/) を使用して、デバイス検査、メモリ監査、およびベンチマーク収集を自動化します。

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただけるよう、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
