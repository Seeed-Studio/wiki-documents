---
description: JetsonをベースにしたローカルRAGとLlamaIndex
title: LlamaIndexを使用したRAG
keywords:
  - Edge
  - reComputer
  - Jetson
  - LlamaIndex
  - RAG
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Local_RAG_based_on_Jetson_with_LlamaIndex
last_update:
  date: 05/15/2025
  author: Jiahao

no_comments: false # Disqus用

---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# JetsonをベースにしたローカルRAGとLlamaIndex

## はじめに

近年、ますます多くの人々が日常の問題を解決するために大規模言語モデルを使用し始めています。しかし、大規模言語モデルは錯覚を引き起こし、特定の質問に対してユーザーに誤った情報を提供することがあります。それにもかかわらず、[RAG技術](https://www.seeedstudio.com/blog/2024/04/25/build-a-local-rag-chatbot-on-jetson-orin-for-your-knowledge-base/)は、大規模言語モデルに関連するデータを提供することで錯覚の発生を減少させることができます。そのため、大規模言語モデルにおける錯覚の生成を減少させるためにRAG技術を使用することがトレンドとなっています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/RAG-MLC-Jetson.gif" alt="pir" width={800} height="auto"/></p>

ここでは、[JetsonをベースにしたRAG](https://github.com/Seeed-Projects/RAG_based_on_Jetson)を紹介します。このプロジェクトでは、RAGフレームワークとして[LlamaIndex](https://www.llamaindex.ai)、ベクトルデータベースとして[ChromaDB](https://github.com/chroma-core/chroma)、質問応答モデルとして量子化されたLlama2-7bモデル[LLM MLC](https://llm.mlc.ai/)を使用しています。このローカルRAGプロジェクトを使用することで、データのプライバシーを保護し、低遅延の通信体験を提供することができます。

## ハードウェアコンポーネント

<div class="table-center">
	<table align="center">
		<tr>
			<th>JetsonをベースにしたreComputer（RAM &gt;= 16GB）</th>
		</tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" style={{width:800, height:'auto'}}/></div></td>
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

## 実行環境の準備
### ステップ1: MLC Jetsonコンテナをインストール

```shell
# jetson-containerとその依存関係をインストール
git clone --depth=1 https://github.com/dusty-nv/jetson-containers
cd jetson-containers 
pip install -r requirements.txt 
```
### ステップ2: プロジェクトをインストール

```shell
# RAGプロジェクトをインストール
cd data
git clone https://github.com/Seeed-Projects/RAG_based_on_Jetson.git
```

### ステップ3: MLC LLMによって量子化されたLlama2-7bモデルをインストール

```shell
# LLMモデルをインストール
sudo apt-get install git-lfs
cd RAG_based_on_Jetson
git clone https://huggingface.co/JiahaoLi/llama2-7b-MLC-q4f16-jetson-containers 
```
### ステップ4: Dockerを実行し、依存関係をインストール

```shell
cd ../../
./run.sh $(./autotag mlc)
 # ここでDockerに入ります。以下のコマンドはDocker内で実行されます
cd data/RAG_based_on_Jetson/
pip install -r requirements.txt
pip install chromadb==0.3.29
```

```pip install chromadb==0.3.29```を実行すると、以下のようなインターフェースが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/RAG_Install_ChromaDB.png" alt="pir" width={1000} height="auto"/></p>

:::note
エラーは無視しても問題ありません。
:::

## 実行してみましょう
```shell
# Docker内で実行
python3 RAG.py
```
<div align="center">
<iframe width="800" height="450" src="https://www.youtube.com/embed/v1SDRko5cNM" title="Jetson Orin NX RAG with MLC, Llama2-7b and ChromaDB" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## プロジェクトの展望

このプロジェクトでは、TXTおよびPDFドキュメントをベクトルデータベースとして解析し、特定の問題に対するモデルの錯覚を減少させるためにRAG技術を使用しました。将来的には、画像や動画の検索をサポートするためにマルチモーダルモデルを使用する予定です。