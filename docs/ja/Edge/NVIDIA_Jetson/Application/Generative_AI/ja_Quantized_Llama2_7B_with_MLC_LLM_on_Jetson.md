---
description:  Jetson上でMLC LLMを使用したQuantized Llama2-7B
title:  MLC LLMによる高速推論
keywords:
  - Edge
  - reComputer
  - Jetson
  - Llama2
  - MLC LLM
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Quantized_Llama2_7B_with_MLC_LLM_on_Jetson
last_update:
  date: 04/1/2024
  author: Jiahao

no_comments: false # for Disqus

---

# Jetson上でMLC LLMを使用したQuantized Llama2-7B

## はじめに

近年、GPT-3などの大規模言語モデルは自然言語処理タスクに革命をもたらしました。しかし、これらのモデルの多くは大規模なデータセットで訓練されており、強力な計算リソースを必要とし、エッジデバイスでの展開には適していません。この問題に対処するため、研究者たちは性能を犠牲にすることなく大規模モデルをより小さなモデルに圧縮する量子化技術を開発しました。

このプロジェクトでは、1.5TBのデータで訓練された大規模言語モデルである[Llama2-7B](https://huggingface.co/meta-llama/Llama-2-7b-hf)の量子化版を紹介し、Jetson Orin上に展開します。また、[Machine Learning Compiler Large Language Modle](https://llm.mlc.ai)(MLC LLM)を活用してモデルの推論速度を加速します。[Jetson Orin NX](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)上でMLC LLMを使用した量子化Llama2-7Bを展開することで、開発者はエッジデバイス上で高精度かつ低遅延を実現する強力な自然言語処理アプリケーションを構築できます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/MLC_LLM.gif" /></div>

## ハードウェアコンポーネント

<div class="table-center">
 <table align="center">
  <tr>
   <th>reComputer（またはJetsonベースの他のデバイス）</th>
  </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" style={{width:1000, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## 依存関係のインストール

```shell
sudo apt-get update && sudo apt-get install git python3-pip
```

```shell
git clone --depth=1 https://github.com/dusty-nv/jetson-containers
```

```shell
cd jetson-containers pip3 install -r requirements.txt
```

```shell
cd ./data && git clone https://github.com/LJ-Hao/MLC-LLM-on-Jetson-Nano.git && cd ..
```

## コンテナのインストールと実行

### 第一ステップ：イメージのインストール

```shell
./run.sh --env HUGGINGFACE_TOKEN=<YOUR-ACCESS-TOKEN> $(./autotag mlc) /bin/bash -c 'ln -s $(huggingface-downloader meta-llama/Llama-2-7b-chat-hf) /data/models/mlc/dist/models/Llama-2-7b-chat-hf'
```

```sudo docker images```を使用してイメージがインストールされているかどうかを確認してください

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/docker_image.png" alt="pir" width={1000} height="auto"/></p>

### 第二ステップ：Llama2-7b-chat-hfのインストールとMLCによるモデルの量子化

```shell
./run.sh $(./autotag mlc) \
python3 -m mlc_llm.build \
--model Llama-2-7b-chat-hf \
--quantization q4f16_ft \
--artifact-path /data/models/mlc/dist \
--max-seq-len 4096 \
--target cuda \
--use-cuda-graph \
--use-flash-attn-mqa
```

### 第三ステップ：Dockerの実行と入力

```shell
./run.sh <YOUR IMAGE NAME> 
#私の場合はdustynv/mlc:51fb0f4-builder-r35.4.1 第一ステップの結果を確認してください
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/docker_run.png" alt="pir" width={1000} height="auto"/></p>

## 実行してみましょう

### MLC LLMによる量子化なしでLlamaを実行

```shell
cd /data/MLC-LLM-on-Jetson && python3 Llama-2-7b-chat-hf.py 
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Llama-2-7b-chat-hf.png" alt="pir" width={1000} height="auto"/></p>

MLCによる量子化なしでは、Jetson Nano 16GBはモデルをロードできますが実行できないことがわかります。

### MLC LLMによる量子化ありでLlamaを実行

```shell
cd /data/MLC-LLM-on-Jetson && python3 Llama-2-7b-chat-hf-q4f16_ft.py 
```

結果は以下の通りです：
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Llama-2-7b-chat-hf-q4f16_ft.png" alt="pir" width={1000} height="auto"/></p>

## Jetson Orin NX 16GB上でMLCを使用してLlamaを実行する動画

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/hyhh0Tc6g9Q" title="Llama2-7b on Jetson Orin NX 16GB with MLC 4bit quantization" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## プロジェクトの展望

このプロジェクトでは、Jetson Orin上でMLC LLMを使用したLlama2-7Bの量子化版を展開する方法を実証しました。Jetson Orinの強力な計算能力により、開発者はエッジデバイス上で高精度かつ低遅延を実現する自然言語処理アプリケーションを構築できます。今後も、エッジデバイス上での大規模言語モデル展開の可能性を探求し続け、より効率的で最適化された展開方法を開発していきます。
