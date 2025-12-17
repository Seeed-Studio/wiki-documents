---
description: このwikiでは、Raspberry Pi AI boxでのdeepseekモデルの分散推論について説明します。
title: Raspberry Pi AI box & Industrial boxでのDeepSeekモデルの分散推論
keywords:
  - RasberryPi Ai box
  - Deepseek
  - Distributed inference
image: https://files.seeedstudio.com/wiki/distributed-inference/model_install.webp
slug: /ja/distributed_inference_of_deepseek_model_on_raspberrypi
last_update:
  date: 03/17/2025
  author: Jiahao

no_comments: false # for Disqus
---

# Raspberry Pi AI box & Industrial boxでのDeepSeekモデルの分散推論

## はじめに

このwikiでは、[distributed-llama](https://github.com/b4rtaz/distributed-llama)を使用して複数のRaspberry Pi AI Boxに[DeepSeek](https://github.com/deepseek-ai/DeepSeek-LLM)モデルをデプロイする方法について説明します。このwikiでは、**8GBのRAMを搭載したRaspberry Pi**を**ルートノード**として、**4GBのRAMを搭載した3台のRaspberry Pi**を**ワーカーノード**として使用し、**DeepSeek 8Bモデル**を実行しました。推論速度は**毎秒6.06トークン**に達しました。

## ハードウェアの準備

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer AI R2130</th>
  <th>reComputer AI Industrial R2145</th>
  <th>reComputer Industrial R20xx</th>
  <th>reComputer Industrial R21xx</th>
 </tr>
    <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-r2145.jpeg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2145-12-p-6486.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## ソフトウェアの準備

### システムの更新：

`Ctrl+Alt+T`でターミナルを開き、以下のようなコマンドを入力します：

```
sudo date -s "$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"
sudo apt update
sudo apt full-upgrade
```

### ルートノードとワーカーノードにdistributed llamaをインストール

`Ctrl+Alt+T`でターミナルを開き、以下のようなコマンドを入力して[distributed-llama](https://github.com/b4rtaz/distributed-llama.git)をインストールします：

```
git clone https://github.com/b4rtaz/distributed-llama.git
cd distributed-llama
make dllama
make dllama-api
```

### ワーカーノードでの実行

次に、以下のようなコマンドを入力してワーカーノードを動作させます：

```
cd distributed-llama
sudo nice -n -20 ./dllama worker --port 9998 --nthreads 4
```

### ルートノードでの実行

#### Python仮想環境の作成とアクティベート

```
cd distributed-llama
python -m venv .env
source .env/bin/acitvate
```

#### 必要なライブラリのインストール

```
pip install numpy==1.23.5
pip install tourch=2.0.1
pip install safetensors==0.4.2
pip install sentencepiece==0.1.99
pip install transformers
```

#### deepseek 8b q40モデルのインストール

```
git lfs install
git clone https://huggingface.co/b4rtaz/Llama-3_1-8B-Q40-Instruct-Distributed-Llama
```

#### ルートノードでの分散推論の実行

> **注意：** `--workers 10.0.0.139:9998 10.0.0.175:9998 10.0.0.124:9998`はワーカーのIPアドレスです。

```
cd ..
./dllama chat --model ./Llama-3_1-8B-Q40-Instruct-Distributed-Llama/dllama_model_deepseek-r1-distill-llama-8b_q40.m --tokenizer ./Llama-3_1-8B-Q40-Instruct-Distributed-Llama/dllama_tokenizer_deepseek-r1-distill-llama-8b.t  --buffer-float-type q80 --prompt "What is 5 plus 9 minus 3?" --nthreads 4 --max-seq-len 2048 --workers 10.0.0.139:9998 10.0.0.175:9998 10.0.0.124:9998  --steps 256

```

> **注意：** 推論速度をテストしたい場合は、以下のコマンドを使用してください。

```
cd ..
./dllama inference --model ./model/dllama_model_deepseek-r1-distill-llama-8b_q40.m --tokenizer ./model/dllama_tokenizer_deepseek-r1-distill-llama-8b.t  --buffer-float-type q80 --prompt "What is 5 plus 9 minus 3?" --nthreads 4 --max-seq-len 2048 --workers 10.0.0.139:9998 10.0.0.175:9998 10.0.0.124:9998  --steps 256
```

## 結果

以下は、4台のRaspberry Piを使用した[DeepSeek Llama 8b](https://huggingface.co/b4rtaz/Llama-3_1-8B-Q40-Instruct-Distributed-Llama)モデルの推論結果です。


<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/distributed-inference/distributed_llama.gif" />
</div>


## 技術サポート & 製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社では、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>