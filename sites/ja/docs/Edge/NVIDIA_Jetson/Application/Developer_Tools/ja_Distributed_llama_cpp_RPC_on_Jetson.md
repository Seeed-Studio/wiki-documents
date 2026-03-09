---
description: このガイドでは、複数の reComputer Jetson デバイス上で llama.cpp の RPC バックエンドを使用して分散 LLM 推論を実行するための段階的な手順を提供します。
title: reComputer Jetson での分散 llama.cpp（RPC モード）
keywords:
  - reComputer Jetson
  - llama.cpp
  - 分散推論
  - RPC
  - CUDA
  - LLM
  - GPU アクセラレーション
image: https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hardware_overview.png.jpg
slug: /ai_robotics_distributed_llama_cpp_rpc_jetson
sku: 100090853,100076722,100060802,100032662
last_update:
  date: 2026-01-09T00:00:00.000Z
  author: Lorraine
createdAt: '2026-01-15'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/ai_robotics_distributed_llama_cpp_rpc_jetson/
---

<div align="center">
    <img width={600}
    src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hardware_overview.png.jpg" />
</div>

<div style={{ textAlign: "justify" }}>
NVIDIA Jetson のようなエッジデバイスで大規模言語モデル（LLM）を実行することは、メモリと計算の制約により困難な場合があります。このガイドでは、llama.cpp の RPC バックエンドを使用して複数の reComputer Jetson デバイス間で LLM 推論を分散し、より要求の厳しいワークロードに対する水平スケーリングを可能にする方法を説明します。
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J5012-with-GMSL-extension-board-p-6682.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
</a></div>

## 前提条件

- JetPack 6.x+ がインストールされ、CUDA ドライバが正常に動作する 2 台の reComputer Jetson デバイス
- 両方のデバイスが同じローカルネットワーク上にあり、互いに `ping` できること
- ローカルマシン（クライアント）に ≥ 64 GB RAM、リモートノードに ≥ 32 GB RAM

## 1. ソースコードのクローン

**ステップ 1.** llama.cpp リポジトリをクローンします：

```bash
git clone https://github.com/ggml-org/llama.cpp.git 
cd llama.cpp
```

## 2. ビルド依存関係のインストール

**ステップ 1.** パッケージリストを更新し、必要な依存関係をインストールします：

```bash
sudo apt update
sudo apt install -y build-essential cmake git libcurl4-openssl-dev python3-pip
```

## 3. RPC + CUDA バックエンドでのビルド

**ステップ 1.** RPC と CUDA サポートで CMake を設定します：

```bash
cmake -B build \
  -DGGML_CUDA=ON \
  -DGGML_RPC=ON \
  -DCMAKE_BUILD_TYPE=Release
```

**ステップ 2.** 並列ジョブでコンパイルします：

```bash
cmake --build build --parallel   # Multi-core parallel compilation
```

## 4. Python 変換ツールのインストール

**ステップ 1.** Python パッケージを開発モードでインストールします：

```bash
pip3 install -e .
```

## 5. モデルのダウンロードと変換
この例では TinyLlama-1.1B-Chat-v1.0 を使用します：

モデルリンク：
https://huggingface.co/TinyLlama/TinyLlama-1.1B-Chat-v1.0

これらのファイルをダウンロードし、自作の TinyLlama-1.1B-Chat-v1.0 フォルダに配置してください。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/RPC_on_jetson/tinyllama_file.png"/>
</div>

**ステップ 1.** Hugging Face モデルを GGUF 形式に変換します：

```bash
# Assuming the model is already downloaded to ~/TinyLlama-1.1B-Chat-v1.0 using git-lfs or huggingface-cli
python3 convert_hf_to_gguf.py \
  --outfile ~/TinyLlama-1.1B.gguf \
  ~/TinyLlama-1.1B-Chat-v1.0
```

## 6. 単一マシン推論の検証

**ステップ 1.** 簡単なプロンプトでモデルをテストします：

```bash
./build/bin/llama-cli \
  -m ~/TinyLlama-1.1B.gguf \
  -p "Hello, how are you today?" \
  -n 64
```

応答を受信した場合、モデルは正常に動作しています。

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/RPC_on_jetson/tinylla_test.png"/>
</div>

## 7. 分散 RPC 操作

### 7.1 ハードウェアトポロジーの例

| デバイス | RAM | 役割 | IP |
|--------|-----|------|----|
| マシン A | 64 GB | クライアント + ローカルサーバー | 192.168.100.2 |
| マシン B | 32 GB | リモートサーバー | 192.168.100.1 |

### 7.2 リモート RPC サーバーの開始（マシン B）

**ステップ 1.** リモートマシンに接続し、RPC サーバーを開始します：

```bash
ssh user@192.168.100.1
cd ~/llama.cpp
CUDA_VISIBLE_DEVICES=0 ./build/bin/rpc-server --host 192.168.100.1
```

サーバーはデフォルトでポート `50052` を使用します。カスタマイズするには、`-p <port>` を追加してください。

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/RPC_on_jetson/worker1_server.png"/>
</div>

### 7.3 ローカル RPC サーバーの開始（マシン A）

**ステップ 1.** ローカル RPC サーバーを開始します：

```bash
cd ~/llama.cpp
CUDA_VISIBLE_DEVICES=0 ./build/bin/rpc-server -p 50052
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/RPC_on_jetson/worker2_server.png"/>
</div>


### 7.4 共同推論（マルチノード負荷）

**ステップ 1.** ローカルとリモートの両方の RPC サーバーを使用して推論を実行します：

```bash
./build/bin/llama-cli \
  -m ~/TinyLlama-1.1B.gguf \
  -p "Hello, my name is" \
  -n 64 \
  --rpc 192.168.100.1:50052,127.0.0.1:50052 \
  -ngl 99
```

`-ngl 99` は 99% のレイヤーを GPU（RPC ノードとローカル GPU の両方）にオフロードします。

:::note
ローカルのみで実行したい場合は、`--rpc` からリモートアドレスを削除してください：
`--rpc 127.0.0.1:50052`
:::

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/RPC_on_jetson/worker2_client.png"/>
</div>

## 8. パフォーマンス比較

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/RPC_on_jetson/rpc_test.png"/>
</div>

*左：192.168.100.1 の GPU 使用率；右：192.168.100.2 の GPU 使用率*


*ローカルのみで実行する場合、GPU の負荷は単一のカードに集中します*

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/RPC_on_jetson/no_rpc_client.png"/>
</div>
<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/RPC_on_jetson/no_rpc_test.png"/>
</div>

## 9. トラブルシューティング

| 問題 | 解決策 |
|-------|----------|
| rpc-server 起動失敗 | ポートが占有されているか、ファイアウォールが 50052/tcp をブロックしていないか確認 |
| 推論速度の低下 | モデルが小さすぎる、ネットワーク遅延 > 計算利益；より大きなモデルまたは Unix ソケットモードを試す |
| メモリ不足エラー | `-ngl` 値を減らして GPU にオフロードするレイヤーを少なくするか、一部のレイヤーを CPU に保持 |

この設定により、llama.cpp の RPC バックエンドを使用して複数の Jetson デバイス間で LLM 推論の「水平スケーリング」を実現できます。より高いスループットを得るには、より多くの RPC ノードを追加するか、モデルを `q4_0` や `q5_k_m` などの形式にさらに量子化することができます。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
