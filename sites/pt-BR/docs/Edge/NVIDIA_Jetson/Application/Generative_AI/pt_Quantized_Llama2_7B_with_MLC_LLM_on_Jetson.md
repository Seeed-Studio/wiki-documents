---
description: Llama2-7B quantizado com MLC LLM no Jetson
title: Inferência Mais Rápida com MLC
keywords:
  - Borda
  - reComputer
  - Jetson
  - Llama2
  - MLC LLM
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Quantized_Llama2_7B_with_MLC_LLM_on_Jetson
last_update:
  date: 04/1/2024
  author: Jiahao
no_comments: false
createdAt: '2024-04-01'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Quantized_Llama2_7B_with_MLC_LLM_on_Jetson/
---

# Llama2-7B Quantizado com MLC LLM no Jetson

## Introdução

Nos últimos anos, grandes modelos de linguagem como o GPT-3 revolucionaram as tarefas de processamento de linguagem natural. No entanto, a maioria desses modelos é treinada em conjuntos de dados em larga escala, o que exige recursos computacionais poderosos e não é adequado para implantação em dispositivos de borda. Para resolver esse problema, pesquisadores desenvolveram técnicas de quantização para comprimir grandes modelos em modelos menores sem sacrificar o desempenho.

Neste projeto, apresentamos uma versão quantizada do [Llama2-7B](https://huggingface.co/meta-llama/Llama-2-7b-hf), um grande modelo de linguagem treinado em 1,5 TB de dados, e o implantamos no Jetson Orin. Também aproveitamos o [Machine Learning Compiler Large Language Modle](https://llm.mlc.ai)(MLC LLM) para acelerar a velocidade de inferência do modelo. Ao implantar o Llama2-7B quantizado com MLC LLM no [Jetson Orin NX](https://www.seeedstudio.com/reComputer-J4012-p-5586.html), os desenvolvedores podem criar aplicações poderosas de processamento de linguagem natural que oferecem alta precisão e baixa latência em dispositivos de borda.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/MLC_LLM.gif" /></div>

## Componentes de hardware

<div class="table-center">
 <table align="center">
  <tr>
   <th>reComputer (ou outros dispositivos baseados em Jetson)</th>
  </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" style={{width:1000, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Instalar dependências

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

## Instalar e executar o contêiner

### primeiro passo: instalar a imagem

```shell
./run.sh --env HUGGINGFACE_TOKEN=<YOUR-ACCESS-TOKEN> $(./autotag mlc) /bin/bash -c 'ln -s $(huggingface-downloader meta-llama/Llama-2-7b-chat-hf) /data/models/mlc/dist/models/Llama-2-7b-chat-hf'
```

use ```sudo docker images``` para verificar se a imagem está instalada ou não

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/docker_image.png" alt="pir" width={1000} height="auto"/></p>

### segundo passo: instalar Llama2-7b-chat-hf e usar o MLC para quantificar o modelo

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

### terceiro passo: executar e entrar no docker

```shell
./run.sh <YOUR IMAGE NAME> 
#for me dustynv/mlc:51fb0f4-builder-r35.4.1 check result of first step
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/docker_run.png" alt="pir" width={1000} height="auto"/></p>

## Vamos executá-lo

### executar Llama sem quantificar e sem MLC LLM quantificado

```shell
cd /data/MLC-LLM-on-Jetson && python3 Llama-2-7b-chat-hf.py 
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Llama-2-7b-chat-hf.png" alt="pir" width={1000} height="auto"/></p>

você pode ver que, sem quantificar com MLC, o Jetson Nano 16GB consegue carregar o modelo mas não consegue executá-lo.

### executar Llama com quantificação com MLC LLM quantificado

```shell
cd /data/MLC-LLM-on-Jetson && python3 Llama-2-7b-chat-hf-q4f16_ft.py 
```

aqui está o resultado:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Llama-2-7b-chat-hf-q4f16_ft.png" alt="pir" width={1000} height="auto"/></p>

## Vídeo de execução do Llama com MLC no Jetson Orin NX 16GB

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/hyhh0Tc6g9Q" title="Llama2-7b on Jetson Orin NX 16GB with MLC 4bit quantization" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Perspectivas do projeto

Neste projeto, demonstramos como implantar uma versão quantizada do Llama2-7B com MLC LLM no Jetson Orin. Com os poderosos recursos de computação do Jetson Orin, os desenvolvedores podem criar aplicações de processamento de linguagem natural que oferecem alta precisão e baixa latência em dispositivos de borda. No futuro, continuaremos a explorar o potencial de implantação de grandes modelos de linguagem em dispositivos de borda e a desenvolver métodos de implantação mais eficientes e otimizados.
