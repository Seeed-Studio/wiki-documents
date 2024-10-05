---
description:  基于Jetson和LlamaIndex的本地RAG
title:  基于Jetson和LlamaIndex的本地RAG
keywords:
  - Edge
  - reComputer
  - Jetson
  - LlamaIndex
  - RAG
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Local_RAG_based_on_Jetson_with_LlamaIndex
last_update:
  date: 05/15/2024
  author: Jiahao

no_comments: false # for Disqus

---

# 基于Jetson和LlamaIndex的本地RAG

## 前言

如今，越来越多的人开始使用大型语言模型来解决日常问题。 然而，大型语言模型在回答某些问题时可能会出现幻觉，并向用户提供不正确的信息。尽管如此， [RAG技术](https://www.seeedstudio.com/blog/2024/04/25/build-a-local-rag-chatbot-on-jetson-orin-for-your-knowledge-base/) 可以通过向大型语言模型提供相关数据来减少幻觉的发生。 因此，使用RAG技术来减少大型语言模型中幻觉的生成已成为一种趋势。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/RAG-MLC-Jetson.gif" alt="pir" width={800} height="auto"/></p>

在这里，我们向您介绍 [基于Jetson的RAG](https://github.com/Seeed-Projects/RAG_based_on_Jetson), 它使用[LlamaIndex](https://www.llamaindex.ai) 作为RAG框架, [ChromaDB](https://github.com/chroma-core/chroma) 作为向量数据库，以及量化的Llama2-7b模型 [LLM MLC](https://llm.mlc.ai/) 作为问答模型。 通过这个本地RAG项目，它可以保护您的数据隐私，并为您提供低延迟的通信体验


##  硬件组件

<div class="table-center">
	<table align="center">
		<tr>
			<th>reComputer (based on Jetson with RAM >= 16GB)
			</th>
		</tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" style={{width:800, height:'auto'}}/></div></td>
    </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## 准备运行环境
### Step 1: 安装 MLC Jetson Container

```shell
# Install jetson-container and its requirements
git clone --depth=1 https://github.com/dusty-nv/jetson-containers
cd jetson-containers 
pip install -r requirements.txt 
```
### 步骤 2：安装项目

```shell
# Install RAG project
cd data
git clone https://github.com/Seeed-Projects/RAG_based_on_Jetson.git
```

###  步骤 3：安装由 MLC LLM 量化的 Llama2-7b 模型
```shell
# Install LLM model
sudo apt-get install git-lfs
cd RAG_based_on_Jetson
git clone https://huggingface.co/JiahaoLi/llama2-7b-MLC-q4f16-jetson-containers 
```
### 步骤 4：运行 Docker 并安装依赖

```shell
cd ../../
./run.sh $(./autotag mlc)
 # Here you will enter the Docker, and the commands below will run inside the Docker
cd data/RAG_based_on_Jetson/
pip install -r requirements.txt
pip install chromadb==0.3.29
```

运行后 `pip install chromadb==0.3.29` 你将看到如下所示的界面。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/RAG_Install_ChromaDB.png" alt="pir" width={1000} height="auto"/></p>

:::提示 
可以忽略报错.
:::

## 让我们运行它
```shell
# Run in the docker
python3 RAG.py
```
<div align="center">
<iframe width="800" height="450" src="https://www.youtube.com/embed/v1SDRko5cNM" title="Jetson Orin NX RAG with MLC, Llama2-7b and ChromaDB" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

##项目拓展

在这个项目中，TXT 和 PDF 文档被解析为向量数据库，并使用 RAG 技术来减少模型对特定问题的幻觉。 未来，我们将使用多模态模型来支持图像和视频的检索.