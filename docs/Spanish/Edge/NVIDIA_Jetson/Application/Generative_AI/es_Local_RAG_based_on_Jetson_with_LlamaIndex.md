---
description:  RAG local basado en una Jetson con LlamaIndex
title:  RAG con LlamaIndex
keywords:
  - Edge
  - reComputer
  - Jetson
  - LlamaIndex
  - RAG
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Local_RAG_based_on_Jetson_with_LlamaIndex
last_update:
  date: 05/15/2024
  author: Jiahao

no_comments: false # for Disqus

---

# RAG local basado en la Jetson con LlamaIndex

## Introducción

Hoy en día, cada vez más personas están empezando a utilizar LLM's para resolver problemas cotidianos. Sin embargo, los LLM's pueden alucinar y proporcionar a los usuarios información incorrecta al responder ciertas preguntas. Sin embargo, la [tecnología RAG](https://www.seeedstudio.com/blog/2024/04/25/build-a-local-rag-chatbot-on-jetson-orin-for-your-knowledge-base/) puede reducir la aparición de alucionaciones al proporcionar datos relevantes a los LLM's. Por lo tanto, utilizar la tecnología RAG para reducir la generación de alucinaciones en LLM's se ha convertido en una tendencia.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/RAG-MLC-Jetson.gif" alt="pir" width={800} height="auto"/></p>

Y aquí les presentamos [RAG basado en la Jetson](https://github.com/Seeed-Projects/RAG_based_on_Jetson), que utiliza [LlamaIndex](https://www.llamaindex.ai) como marco RAG, [ChromaDB](https://github.com/chroma-core/chroma) como base de datos vectorial y el modelo cuantificado Llama2-7b [LLM MLC](https://llm.mlc.ai/) como modelo de preguntas y respuestas. Con este proyecto RAG local, puedes proteger la privacidad de tus datos y tener una experiencia de comunicación de baja latencia.


## Componentes del Hardware

<div class="table-center">
	<table align="center">
		<tr>
			<th>reComputer (potenciada por Jetson con RAM >= 16GB)
			</th>
		</tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" style={{width:800, height:'auto'}}/></div></td>
    </tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Conseguir una 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## Preparar el entorno de ejecución
### Paso 1: Instala el contenedor MLC Jetson

```shell
# Install jetson-container and its requirements
git clone --depth=1 https://github.com/dusty-nv/jetson-containers
cd jetson-containers 
pip install -r requirements.txt 
```
### Paso 2: instalar el proyecto

```shell
# Install RAG project
cd data
git clone https://github.com/Seeed-Projects/RAG_based_on_Jetson.git
```

### Paso 3: Instalar el modelo Llama2-7b cuantificado por MLC LLM

```shell
# Install LLM model
sudo apt-get install git-lfs
cd RAG_based_on_Jetson
git clone https://huggingface.co/JiahaoLi/llama2-7b-MLC-q4f16-jetson-containers 
```
### Paso 4: Ejecuta la ventana acoplable e instala los requisitos

```shell
cd ../../
./run.sh $(./autotag mlc)
 # Here you will enter the Docker, and the commands below will run inside the Docker
cd data/RAG_based_on_Jetson/
pip install -r requirements.txt
pip install chromadb==0.3.29
```

Después de ejecutar ```pip install chromadb==0.3.29``` obtendrás la interfaz como se muestra a continuación.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/RAG_Install_ChromaDB.png" alt="pir" width={1000} height="auto"/></p>

:::nota
Está bien ignorar el error.
:::

## Corramos el programa
```shell
# Run in the docker
python3 RAG.py
```
<div align="center">
<iframe width="800" height="450" src="https://www.youtube.com/embed/v1SDRko5cNM" title="Jetson Orin NX RAG with MLC, Llama2-7b and ChromaDB" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Perspectivas del proyecto

En este proyecto, se analizaron documentos TXT y PDF como bases de datos vectoriales y se utilizó la tecnología RAG para reducir las alucinaciones del modelo sobre problemas específicos. En el futuro, utilizaremos modelos multimodales para admitir la recuperación de imágenes y vídeos.