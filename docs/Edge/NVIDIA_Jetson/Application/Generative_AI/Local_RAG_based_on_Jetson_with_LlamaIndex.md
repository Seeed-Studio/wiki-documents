---
description:  Local RAG based on Jetson with LlamaIndex
title:  RAG with LlamaIndex
keywords:
  - Edge
  - reComputer
  - Jetson
  - LlamaIndex
  - RAG
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Local_RAG_based_on_Jetson_with_LlamaIndex
last_update:
  date: 05/15/2024
  author: Jiahao

no_comments: false # for Disqus

---

# Local RAG based on Jetson with LlamaIndex

## Introduction

Nowadays, more and more people are starting to use large language models to solve everyday problems. However, large language models can exhibit illusions and provide users with incorrect information when answering certain questions. Nevertheless, [RAG technology](https://www.seeedstudio.com/blog/2024/04/25/build-a-local-rag-chatbot-on-jetson-orin-for-your-knowledge-base/) can reduce the occurrence of illusions by providing relevant data to the large language models. Therefore, using RAG technology to reduce the generation of illusions in large language models has become a trend.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/RAG-MLC-Jetson.gif" alt="pir" width={800} height="auto"/></p>

And here we introduce you [RAG based on Jetson](https://github.com/Seeed-Projects/RAG_based_on_Jetson), which using [LlamaIndex](https://www.llamaindex.ai) as the RAG framework, [ChromaDB](https://github.com/chroma-core/chroma) as the vector database, and the quantized Llama2-7b model [LLM MLC](https://llm.mlc.ai/) as the question-answering model. With this local RAG project, it can protect your data privacy and provide you with low-latency communication experience. 


## Hardware components

<div class="table-center">
	<table align="center">
		<tr>
			<th>reComputer (based on Jetson with RAM >= 16GB)</th>
		</tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" style={{width:800, height:'auto'}}/></div></td>
    </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## Prepare the runtime environment
### Step 1: Install MLC Jetson Container

```shell
# Install jetson-container and its requirements
git clone --depth=1 https://github.com/dusty-nv/jetson-containers
cd jetson-containers 
pip install -r requirements.txt 
```
### Step 2: Install project

```shell
# Install RAG project
cd data
git clone https://github.com/Seeed-Projects/RAG_based_on_Jetson.git
```

### Step 3: Install Llama2-7b model quantified by MLC LLM

```shell
# Install LLM model
sudo apt-get install git-lfs
cd RAG_based_on_Jetson
git clone https://huggingface.co/JiahaoLi/llama2-7b-MLC-q4f16-jetson-containers 
```
### Step 4: Run the docker and install requirements

```shell
cd ../../
./run.sh $(./autotag mlc)
 # Here you will enter the Docker, and the commands below will run inside the Docker
cd data/RAG_based_on_Jetson/
pip install -r requirements.txt
pip install chromadb==0.3.29
```

After you run ```pip install chromadb==0.3.29``` you will get the interface as shown below.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/RAG_Install_ChromaDB.png" alt="pir" width={1000} height="auto"/></p>

:::note
It is fine to ignore the error.
:::

## Let's run it
```shell
# Run in the docker
python3 RAG.py
```
<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/v1SDRko5cNM" title="Jetson Orin NX RAG with MLC, Llama2-7b and ChromaDB" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Project Outlook

In this project, TXT and PDF documents were parsed as vector databases, and RAG technology was used to reduce the model's illusions about specific problems. In the future, we will use multimodal models to support retrieval of images and videos. 