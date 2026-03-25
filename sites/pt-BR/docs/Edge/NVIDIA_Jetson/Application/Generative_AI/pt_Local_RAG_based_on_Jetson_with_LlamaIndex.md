---
description: RAG local baseado em Jetson com LlamaIndex
title: RAG com LlamaIndex
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
no_comments: false
createdAt: '2024-05-15'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Local_RAG_based_on_Jetson_with_LlamaIndex/
---

# RAG local baseado em Jetson com LlamaIndex

## Introdução

Atualmente, cada vez mais pessoas estão começando a usar modelos de linguagem grandes para resolver problemas do dia a dia. No entanto, modelos de linguagem grandes podem apresentar alucinações e fornecer aos usuários informações incorretas ao responder certas perguntas. Apesar disso, a [tecnologia RAG](https://www.seeedstudio.com/blog/2024/04/25/build-a-local-rag-chatbot-on-jetson-orin-for-your-knowledge-base/) pode reduzir a ocorrência de alucinações ao fornecer dados relevantes para os modelos de linguagem grandes. Portanto, usar a tecnologia RAG para reduzir a geração de alucinações em modelos de linguagem grandes se tornou uma tendência.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/RAG-MLC-Jetson.gif" alt="pir" width={800} height="auto"/></p>

E aqui apresentamos o [RAG baseado em Jetson](https://github.com/Seeed-Projects/RAG_based_on_Jetson), que usa o [LlamaIndex](https://www.llamaindex.ai) como framework de RAG, o [ChromaDB](https://github.com/chroma-core/chroma) como banco de dados vetorial, e o modelo quantizado Llama2-7b [LLM MLC](https://llm.mlc.ai/) como modelo de perguntas e respostas. Com este projeto de RAG local, ele pode proteger a privacidade dos seus dados e lhe proporcionar uma experiência de comunicação com baixa latência. 


## Componentes de hardware

<div class="table-center">
	<table align="center">
		<tr>
			<th>reComputer (baseado em Jetson com RAM >= 16GB)</th>
		</tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" style={{width:800, height:'auto'}}/></div></td>
    </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## Prepare o ambiente de runtime
### Passo 1: Instalar o MLC Jetson Container

```shell
# Install jetson-container and its requirements
git clone --depth=1 https://github.com/dusty-nv/jetson-containers
cd jetson-containers 
pip install -r requirements.txt 
```
### Passo 2: Instalar o projeto

```shell
# Install RAG project
cd data
git clone https://github.com/Seeed-Projects/RAG_based_on_Jetson.git
```

### Passo 3: Instalar o modelo Llama2-7b quantificado pelo MLC LLM

```shell
# Install LLM model
sudo apt-get install git-lfs
cd RAG_based_on_Jetson
git clone https://huggingface.co/JiahaoLi/llama2-7b-MLC-q4f16-jetson-containers 
```
### Passo 4: Executar o docker e instalar os requisitos

```shell
cd ../../
./run.sh $(./autotag mlc)
 # Here you will enter the Docker, and the commands below will run inside the Docker
cd data/RAG_based_on_Jetson/
pip install -r requirements.txt
pip install chromadb==0.3.29
```

Depois de executar ```pip install chromadb==0.3.29``` você verá a interface mostrada abaixo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/RAG_Install_ChromaDB.png" alt="pir" width={1000} height="auto"/></p>

:::note
Tudo bem ignorar o erro.
:::

## Vamos executar
```shell
# Run in the docker
python3 RAG.py
```
<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/v1SDRko5cNM" title="Jetson Orin NX RAG with MLC, Llama2-7b and ChromaDB" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Perspectiva do projeto

Neste projeto, documentos TXT e PDF foram analisados como bancos de dados vetoriais, e a tecnologia RAG foi usada para reduzir as alucinações do modelo sobre problemas específicos. No futuro, usaremos modelos multimodais para suportar a recuperação de imagens e vídeos.