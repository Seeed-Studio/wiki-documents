---
description: このWikiでは、Raspberry Pi AIボックス上でDeepSeekモデルの分散推論を実演します。
title: Raspberry Pi AIボックスでのDeepSeekモデルの分散推論
keywords:
  - RaspberryPi AIボックス
  - Deepseek
  - 分散推論
image: https://files.seeedstudio.com/wiki/distributed-inference/model_install.webp
slug: /ja/distributed_inference_of_deepseek_model_on_raspberrypi
last_update:
  date: 05/15/2025
  author: Jiahao

no_comments: false # for Disqus
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Raspberry PiでのDeepSeekモデルの分散推論

## はじめに

このWikiでは、[DeepSeek](https://github.com/deepseek-ai/DeepSeek-LLM)モデルを複数のRaspberry Pi AIボックスに[distributed-llama](https://github.com/b4rtaz/distributed-llama)を使用してデプロイする方法を説明します。このWikiでは、**8GBのRAMを搭載したRaspberry Pi**を**ルートノード**として使用し、**4GBのRAMを搭載した3つのRaspberry Pi**を**ワーカーノード**として使用して**DeepSeek 8Bモデル**を実行しました。推論速度は**6.06トークン/秒**に達しました。

## ハードウェアの準備

<div class="table-center">
	<table align="center">
	<tr>
		<th>reComputer AI R2130</th>
	</tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## ソフトウェアの準備

### システムを更新する

`Ctrl+Alt+T`でターミナルを開き、以下のコマンドを入力します：

```
sudo date -s "$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"
sudo apt update
sudo apt full-upgrade
```

### ルートノードとワーカーノードにdistributed llamaをインストールする

`Ctrl+Alt+T`でターミナルを開き、以下のコマンドを入力して[distributed-llama](https://github.com/b4rtaz/distributed-llama.git)をインストールします：

```
git clone https://github.com/b4rtaz/distributed-llama.git
cd distributed-llama
make dllama
make dllama-api
```

### ワーカーノードで実行する

以下のコマンドを入力してワーカーノードを動作させます：

```
cd distributed-llama
sudo nice -n -20 ./dllama worker --port 9998 --nthreads 4
```

### ルートノードで実行する

#### Python仮想環境を作成して有効化する

```
cd distributed-llama
python -m venv .env
source .env/bin/acitvate
```

#### 必要なライブラリをインストールする

```
pip install numpy==1.23.5
pip install tourch=2.0.1
pip install safetensors==0.4.2
pip install sentencepiece==0.1.99
pip install transformers
```

#### DeepSeek 8B Q40モデルをインストールする

```
git lfs install
git clone https://huggingface.co/b4rtaz/Llama-3_1-8B-Q40-Instruct-Distributed-Llama
```

#### ルートノードで分散推論を実行する

> **注意:** `--workers 10.0.0.139:9998 10.0.0.175:9998 10.0.0.124:9998`はワーカーのIPアドレスです。

```
cd ..
./dllama chat --model ./Llama-3_1-8B-Q40-Instruct-Distributed-Llama/dllama_model_deepseek-r1-distill-llama-8b_q40.m --tokenizer ./Llama-3_1-8B-Q40-Instruct-Distributed-Llama/dllama_tokenizer_deepseek-r1-distill-llama-8b.t  --buffer-float-type q80 --prompt "What is 5 plus 9 minus 3?" --nthreads 4 --max-seq-len 2048 --workers 10.0.0.139:9998 10.0.0.175:9998 10.0.0.124:9998  --steps 256
```

> **注意:** 推論速度をテストしたい場合は、以下のコマンドを使用してください。

```
cd ..
./dllama inference --model ./model/dllama_model_deepseek-r1-distill-llama-8b_q40.m --tokenizer ./model/dllama_tokenizer_deepseek-r1-distill-llama-8b.t  --buffer-float-type q80 --prompt "What is 5 plus 9 minus 3?" --nthreads 4 --max-seq-len 2048 --workers 10.0.0.139:9998 10.0.0.175:9998 10.0.0.124:9998  --steps 256
```

## 結果

以下は、4つのRaspberry Piを使用して[DeepSeek Llama 8b](https://huggingface.co/b4rtaz/Llama-3_1-8B-Q40-Instruct-Distributed-Llama)モデルを推論した結果です。

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/distributed-inference/distributed_llama.gif" />
</div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しています。お客様のニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>