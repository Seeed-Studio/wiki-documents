---
description: MLC LLMを使用したJetson上での量子化Llama2-7B
title: MLCを使用した高速推論
keywords:
  - Edge
  - reComputer
  - Jetson
  - Llama2
  - MLC LLM
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Quantized_Llama2_7B_with_MLC_LLM_on_Jetson
last_update:
  date: 05/15/2025
  author: Jiahao

no_comments: false # Disqus用

---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# MLC LLMを使用したJetson上での量子化Llama2-7B

## はじめに

近年、GPT-3のような大規模言語モデルは自然言語処理タスクに革命をもたらしました。しかし、これらのモデルの多くは大規模なデータセットでトレーニングされており、強力な計算リソースを必要とするため、エッジデバイスでの展開には適していません。この問題に対処するため、研究者たちは量子化技術を開発し、性能を犠牲にすることなく大規模モデルを小型化しました。

本プロジェクトでは、1.5TBのデータでトレーニングされた大規模言語モデル[Llama2-7B](https://huggingface.co/meta-llama/Llama-2-7b-hf)の量子化バージョンを紹介し、Jetson Orin上に展開します。また、[Machine Learning Compiler Large Language Model](https://llm.mlc.ai) (MLC LLM)を活用してモデルの推論速度を加速します。量子化されたLlama2-7Bを[Jetson Orin NX](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)上でMLC LLMと共に展開することで、開発者は高精度かつ低遅延の自然言語処理アプリケーションをエッジデバイス上で構築できます。

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/MLC_LLM.gif" /></div>

## ハードウェア構成
<div class="table-center">
	<table align="center">
		<tr>
			<th>reComputer(またはJetsonベースの他のデバイス)</th>
		</tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" style={{width:1000, height:'auto'}}/></div></td>
    </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## 依存関係のインストール:

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

### ステップ1: イメージのインストール

```shell
./run.sh --env HUGGINGFACE_TOKEN=<YOUR-ACCESS-TOKEN> $(./autotag mlc) /bin/bash -c 'ln -s $(huggingface-downloader meta-llama/Llama-2-7b-chat-hf) /data/models/mlc/dist/models/Llama-2-7b-chat-hf'
```
```sudo docker images```を使用して、イメージがインストールされているか確認します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/docker_image.png" alt="pir" width={1000} height="auto"/></p>

### ステップ2: Llama2-7b-chat-hfのインストールとMLCによるモデルの量子化
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

### ステップ3: 実行とDockerへのログイン
```shell
./run.sh <YOUR IMAGE NAME> 
#私の場合はdustynv/mlc:51fb0f4-builder-r35.4.1、ステップ1の結果を確認
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/docker_run.png" alt="pir" width={1000} height="auto"/></p>

## 実行してみましょう
### MLC LLMで量子化せずにLlamaを実行

```shell
cd /data/MLC-LLM-on-Jetson && python3 Llama-2-7b-chat-hf.py 
```
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Llama-2-7b-chat-hf.png" alt="pir" width={1000} height="auto"/></p>

MLCで量子化しない場合、Jetson Nano 16GBはモデルをロードできますが、実行はできません。

### MLC LLMで量子化したLlamaを実行

```shell
cd /data/MLC-LLM-on-Jetson && python3 Llama-2-7b-chat-hf-q4f16_ft.py 
```
結果はこちらです:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Llama-2-7b-chat-hf-q4f16_ft.png" alt="pir" width={1000} height="auto"/></p>

## Jetson Orin NX 16GB上でMLCを使用してLlamaを実行する動画:

<iframe width="560" height="315" src="https://www.youtube.com/embed/hyhh0Tc6g9Q" title="Llama2-7b on Jetson Orin NX 16GB with MLC 4bit quantization" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## プロジェクトの展望

本プロジェクトでは、量子化されたLlama2-7BをMLC LLMと共にJetson Orin上に展開する方法を示しました。Jetson Orinの強力な計算能力を活用することで、開発者はエッジデバイス上で高精度かつ低遅延の自然言語処理アプリケーションを構築できます。今後も、大規模言語モデルをエッジデバイスに展開する可能性を探求し、より効率的で最適化された展開方法を開発していきます。