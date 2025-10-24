---
description: Llama2-7B Cuantizado con MLC LLM en Jetson
title: Inferencia Más Rápida con MLC
keywords:
  - Edge
  - reComputer
  - Jetson
  - Llama2
  - MLC LLM
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Quantized_Llama2_7B_with_MLC_LLM_on_Jetson
last_update:
  date: 04/1/2024
  author: Jiahao

no_comments: false # for Disqus

---

# Llama2-7B Cuantizado con MLC LLM en Jetson

## Introducción

En los últimos años, los modelos de lenguaje grandes como GPT-3 han revolucionado las tareas de procesamiento de lenguaje natural. Sin embargo, la mayoría de estos modelos están entrenados en conjuntos de datos a gran escala, que requieren recursos computacionales potentes y no son adecuados para el despliegue en dispositivos edge. Para abordar este problema, los investigadores han desarrollado técnicas de cuantización para comprimir modelos grandes en otros más pequeños sin sacrificar el rendimiento.

En este proyecto, introducimos una versión cuantizada de [Llama2-7B](https://huggingface.co/meta-llama/Llama-2-7b-hf), un modelo de lenguaje grande entrenado en 1.5TB de datos, y lo desplegamos en el Jetson Orin. También aprovechamos el [Machine Learning Compiler Large Language Modle](https://llm.mlc.ai)(MLC LLM) para acelerar la velocidad de inferencia del modelo. Al desplegar el Llama2-7B cuantizado con MLC LLM en el [Jetson Orin NX](https://www.seeedstudio.com/reComputer-J4012-p-5586.html), los desarrolladores pueden construir aplicaciones potentes de procesamiento de lenguaje natural que ofrecen alta precisión y baja latencia en dispositivos edge.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/MLC_LLM.gif" /></div>

## Componentes de hardware

<div class="table-center">
 <table align="center">
  <tr>
   <th>reComputer(O otros dispositivos basados en Jetson)</th>
  </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" style={{width:1000, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Instalar dependencias

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

## Instalar y ejecutar contenedor

### primer paso: instalar imagen

```shell
./run.sh --env HUGGINGFACE_TOKEN=<YOUR-ACCESS-TOKEN> $(./autotag mlc) /bin/bash -c 'ln -s $(huggingface-downloader meta-llama/Llama-2-7b-chat-hf) /data/models/mlc/dist/models/Llama-2-7b-chat-hf'
```

usa ```sudo docker images``` para verificar si la imagen está instalada o no

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/docker_image.png" alt="pir" width={1000} height="auto"/></p>

### segundo paso: Instalar Llama2-7b-chat-hf y Usar MLC para cuantizar el modelo

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

### Tercer paso: Ejecutar y entrar a docker

```shell
./run.sh <YOUR IMAGE NAME> 
#para mí dustynv/mlc:51fb0f4-builder-r35.4.1 verificar resultado del primer paso
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/docker_run.png" alt="pir" width={1000} height="auto"/></p>

## Vamos a ejecutarlo

### ejecutar Llama sin cuantizar sin MLC LLM cuantizado

```shell
cd /data/MLC-LLM-on-Jetson && python3 Llama-2-7b-chat-hf.py 
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Llama-2-7b-chat-hf.png" alt="pir" width={1000} height="auto"/></p>

puedes ver que sin cuantizar con MLC, Jetson Nano 16GB puede cargar el modelo pero no puede ejecutarse.

### ejecutar Llama con cuantización con MLC LLM cuantizado

```shell
cd /data/MLC-LLM-on-Jetson && python3 Llama-2-7b-chat-hf-q4f16_ft.py 
```

aquí está el resultado:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Llama-2-7b-chat-hf-q4f16_ft.png" alt="pir" width={1000} height="auto"/></p>

## Video de ejecutar Llama con MLC en Jetson Orin NX 16GB

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/hyhh0Tc6g9Q" title="Llama2-7b en Jetson Orin NX 16GB con cuantización de 4 bits MLC" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Perspectivas del Proyecto

En este proyecto, hemos demostrado cómo desplegar una versión cuantizada de Llama2-7B con MLC LLM en el Jetson Orin. Con las potentes capacidades computacionales del Jetson Orin, los desarrolladores pueden construir aplicaciones de procesamiento de lenguaje natural que ofrecen alta precisión y baja latencia en dispositivos edge. En el futuro, continuaremos explorando el potencial de desplegar modelos de lenguaje grandes en dispositivos edge y desarrollar métodos de despliegue más eficientes y optimizados.
