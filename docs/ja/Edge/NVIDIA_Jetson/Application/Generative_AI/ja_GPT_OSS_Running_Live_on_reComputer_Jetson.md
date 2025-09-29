---
description: このwikiでは、llama.cppを使用してNVIDIA Jetson Orin NX上にオープンソースのGPT-OSS-20B大規模言語モデルをデプロイする方法を実演し、エッジAI機能を紹介します。インストール、モデル変換、量子化、およびオプションのWeb UI統合による推論実行のステップバイステップの手順を提供します。
title: GPT-OSS Running Live on reComputer Jetson!
keywords:
- reComputer
- Jetson
- LLM
- GPT-OSS
- llamacpp
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/gpt_oss/gptoss-running-live.webp
slug: /ja/deploy_gptoss_on_jetson
last_update:
  date: 08/14/2025
  author: Youjiang
---


# GPT-OSS reComputer Jetson上でのライブ実行

## はじめに

これは単純な技術移植の演習をはるかに超えたものです - エッジで何が可能かを探求するものです。この記事では、20Bパラメータのオープンソース大規模言語モデルが、Nvidia Jetson Orin Nxのようなエッジデバイス上でどのように動作するかを実演します。

<div align="center">
    <img width={900}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpt_oss/deploy_gptoss_super.png" />
</div>

[NVIDIA Jetson](https://www.seeedstudio.com/tag/nvidia.html)シリーズは、優れた電力効率とコンパクトなフォームファクターで有名な、プレミアムエッジコンピューティングプラットフォームとして位置づけられています。一方、[GPT-OSS-20B](https://github.com/openai/gpt-oss)は、自由に利用可能なオープンソース大規模言語モデルの最先端を表しています。これらの融合は、エッジデバイスの未開拓の可能性を示すだけでなく、オフラインAIアプリケーションの新しい可能性を開拓します。

## 前提条件

- reComputer Super J4012

:::note
このwikiでは、[reComputer Super J4012](https://www.seeedstudio.com/reComputer-Super-Bundle.html)を使用して以下のタスクを実行しますが、他のJetsonデバイスを使用して試すこともできます。
:::

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpt_oss/recomputer_super.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
</div>

:::info
後続のステップでは、Jetson上で複数のPython環境を設定することになります。JetsonデバイスにCondaをインストールすることをお勧めします：

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
chmod +x Miniconda3-latest-Linux-aarch64.sh
./Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
```

:::

## llama.cppのインストール

まず、Jetsonに`llama.cpp`推論エンジンをインストールする必要があります。JetsonのターミナルウィンドウでNext以下のコマンドを実行してください。

```bash
sudo apt update
sudo apt install -y build-essential cmake git 
git clone https://github.com/ggml-org/llama.cpp.git
cd llama.cpp
cmake -B build -DGGML_CUDA=ON
cmake --build build --parallel
```

コンパイル後、llama.cppのすべての実行可能ファイルが`build/bin`に生成されます。

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpt_oss/install_llamacpp.png" />
</div>

:::note
ビルドプロセスは通常約2時間かかります。
:::

## GPT-OSSモデルの準備

ステップ1. HuggingfaceからGPT-OSS-20Bをダウンロードし、Jetsonにアップロードします。

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpt_oss/download_model.png" />
</div>

ステップ2. モデル変換に必要な依存関係をインストールします。

```bash
conda create -n gpt-oss python=3.10
conda activate gpt-oss
cd /home/seeed/Documents/llama.cpp  # cd `path_of_llama.cpp` 
pip install .
```

ステップ3. モデル変換プロセスを実行します。

```bash
python convert_hf_to_gguf.py --outfile /home/seeed/Downloads/gpt-oss /home/seeed/Documents/gpt-oss-gguf/
# python convert_hf_to_gguf.py --outfile <path_of_input_model> <path_of_output_model>
```

ステップ4. モデル量子化。

```bash
./build/bin/llama-quantize /home/seeed/Documents/gpt-oss-gguf/Gpt-Oss-32x2.4B-F16.gguf /home/seeed/Documents/gpt-oss-gguf-Q4/Gpt-Oss-32x2.4B-Q4.gguf Q4_K
# ./build/bin/llama-quantize <path_of_f16_gguf_model> <path_of_output_model> <quantization_method>
```

## llama.cppでGPT-OSSを起動する

これで、Jetsonターミナルで推論プログラムの起動を試すことができます。

```bash
./build/bin/llama-cli -m /home/seeed/Documents/gpt-oss-gguf/Gpt-Oss-32x2.4B-F16.gguf -ngl 40
```

:::info
必要に応じてモデルパスを置き換えてください。
:::

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpt_oss/run.gif" />
</div>

## WebUIでの推論（オプション）

UIインターフェースを通じてモデルにアクセスしたい場合は、Jetson上に[OpenWebUI](https://github.com/open-webui/open-webui)をインストールしてこれを実現できます。
Jetsonで新しいターミナルを開き、以下のコマンドを入力してください：

```bash
conda create -n open-webui python=3.11
conda activate open-webui
pip install open-webui
open-webui serve
```

:::note
OpenWebUIの起動により依存関係がインストールされ、モデルがダウンロードされます —— しばらくお待ちください。
:::

セットアップが完了すると、ターミナルに以下のようなログが表示されるはずです。

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpt_oss/openwebui.png" />
</div>

次に、ブラウザを開いて `http://<ip-of-jetson>:8080` にアクセスし、Open WebUIを起動します。

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpt_oss/browser.png" />
</div>

:::info
初回起動の場合は、指示に従ってアカウントを設定してください。
:::

⚙️ 管理者設定 → 接続 → OpenAI接続に移動し、URLを `http://127.0.0.1:8081` に設定します。保存すると、Open WebUIはローカルのLlama.cppサーバーをバックエンドとして使用し始めます！

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpt_oss/set_model.png" />
</div>

## 効果実演

最後に、NVIDIA Jetson Orin NX上でのGPT-OSS-20Bモデルの実際の推論性能を動画デモンストレーションで紹介します。

<div class="video-container">
    <iframe width="800" height="450" src="https://www.youtube.com/embed/kcN731Jyce4" title="GPT-OSS Running Live on NVIDIA Jetson Orin NX!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 参考文献

- https://hyd.ai/2025/03/07/llamacpp-on-jetson-orin-agx/
- https://docs.openwebui.com/getting-started/quick-start/starting-with-llama-cpp
- https://github.com/open-webui/open-webui
- https://huggingface.co/openai/gpt-oss-20b
- https://www.seeedstudio.com/tag/nvidia.html

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
