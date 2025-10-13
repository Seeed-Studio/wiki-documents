---
description: Jetson上でLlamaIndexを使用したローカルRAG
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
  date: 05/15/2024
  author: Jiahao

no_comments: false # for Disqus

---

# Jetson上でLlamaIndexを使用したローカルRAG

## はじめに

現在、ますます多くの人々が日常的な問題を解決するために大規模言語モデルを使用し始めています。しかし、大規模言語モデルは特定の質問に答える際に幻覚を示し、ユーザーに間違った情報を提供することがあります。それでも、[RAG技術](https://www.seeedstudio.com/blog/2024/04/25/build-a-local-rag-chatbot-on-jetson-orin-for-your-knowledge-base/)は大規模言語モデルに関連データを提供することで幻覚の発生を減らすことができます。したがって、RAG技術を使用して大規模言語モデルの幻覚生成を減らすことがトレンドになっています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/RAG-MLC-Jetson.gif" alt="pir" width={800} height="auto"/></p>

ここでは[JetsonベースのRAG](https://github.com/Seeed-Projects/RAG_based_on_Jetson)をご紹介します。これは[LlamaIndex](https://www.llamaindex.ai)をRAGフレームワークとして、[ChromaDB](https://github.com/chroma-core/chroma)をベクターデータベースとして、量子化されたLlama2-7bモデル[LLM MLC](https://llm.mlc.ai/)を質問応答モデルとして使用しています。このローカルRAGプロジェクトにより、データプライバシーを保護し、低遅延の通信体験を提供できます。

## ハードウェアコンポーネント

<div class="table-center">
 <table align="center">
  <tr>
   <th>reComputer（RAM >= 16GBのJetsonベース）</th>
  </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" style={{width:800, height:'auto'}}/></div></td>
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

## ランタイム環境の準備

### ステップ1: MLC Jetsonコンテナのインストール

```shell
# jetson-containerとその要件をインストール
git clone --depth=1 https://github.com/dusty-nv/jetson-containers
cd jetson-containers 
pip install -r requirements.txt 
```

### ステップ2: プロジェクトのインストール

```shell
# RAGプロジェクトをインストール
cd data
git clone https://github.com/Seeed-Projects/RAG_based_on_Jetson.git
```

### ステップ3: MLC LLMで量子化されたLlama2-7bモデルのインストール

```shell
# LLMモデルをインストール
sudo apt-get install git-lfs
cd RAG_based_on_Jetson
git clone https://huggingface.co/JiahaoLi/llama2-7b-MLC-q4f16-jetson-containers 
```

### ステップ4: Dockerを実行し、要件をインストール

```shell
cd ../../
./run.sh $(./autotag mlc)
 # ここでDockerに入り、以下のコマンドはDocker内で実行されます
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

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/v1SDRko5cNM" title="Jetson Orin NX RAG with MLC, Llama2-7b and ChromaDB" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## プロジェクトの展望

このプロジェクトでは、TXTとPDFドキュメントをベクターデータベースとして解析し、RAG技術を使用して特定の問題に対するモデルの幻覚を減らしました。将来的には、マルチモーダルモデルを使用して画像や動画の検索をサポートする予定です。
