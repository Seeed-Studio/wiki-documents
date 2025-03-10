---
description:  Llama2-7B cuantificado con MLC LLM en una Jetson
title:  Inferencias más rápidas con MLC
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

# Llama2-7B cuantificado con MLC LLM en la Jetson

## Introducción

En los últimos años, LLM's como GPT-3 han revolucionado las tareas de procesamiento del lenguaje natural. Sin embargo, la mayoría de estos modelos están entrenados en conjuntos de datos a gran escala, que requieren potentes recursos informáticos y no son adecuados para su implementación en dispositivos de borde. Para abordar este problema, los investigadores han desarrollado técnicas de cuantificación para comprimir modelos grandes en otros más pequeños sin sacrificar el rendimiento.

En este proyecto, presentamos una versión cuantificada de [Llama2-7B](https://huggingface.co/meta-llama/Llama-2-7b-hf), un LLM entrenado con 1,5 TB de datos, y lo implementamos en la Jetson Orin. También aprovechamos el [módulo de LLM del compilador de aprendizaje automático](https://llm.mlc.ai)(MLC LLM) para acelerar la velocidad de inferencia del modelo. Al implementar Llama2-7B cuantificado con MLC LLM en la [Jetson Orin NX](https://www.seeedstudio.com/reComputer-J4012-p-5586.html), los desarrolladores pueden crear potentes aplicaciones de procesamiento de lenguaje natural que ofrecen alta precisión y baja latencia en dispositivos de borde.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/MLC_LLM.gif" /></div>

## Componentes de Hardware
<div class="table-center">
	<table align="center">
		<tr>
			<th>reComputer(U otros dispositivos basados ​​en Jetson)</th>
		</tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/recomputerj4012.jpg" style={{width:1000, height:'auto'}}/></div></td>
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

## Instalación de dependencias:

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
## Instalar y correr contenedor

### Primer paso: instalar imágen

```shell
./run.sh --env HUGGINGFACE_TOKEN=<YOUR-ACCESS-TOKEN> $(./autotag mlc) /bin/bash -c 'ln -s $(huggingface-downloader meta-llama/Llama-2-7b-chat-hf) /data/models/mlc/dist/models/Llama-2-7b-chat-hf'
```
usa ```sudo docker images``` para verificar si la imagen está instalada o no

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/docker_image.png" alt="pir" width={1000} height="auto"/></p>

### segundo paso: instalar Llama2-7b-chat-hf y usar MLC para cuantificar el modelo
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

### Tercer paso: ejecutar e ingresar a la ventana acoplable
```shell
./run.sh <YOUR IMAGE NAME> 
#for me dustynv/mlc:51fb0f4-builder-r35.4.1 check result of first step
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/docker_run.png" alt="pir" width={1000} height="auto"/></p>

## Ejecutar el programa
### ejecutar Llama sin cuantificar sin MLC LLM cuantificado

```shell
cd /data/MLC-LLM-on-Jetson && python3 Llama-2-7b-chat-hf.py 
```
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Llama-2-7b-chat-hf.png" alt="pir" width={1000} height="auto"/></p>

Puedes ver sin cuantificar con MLC, Jetson Nano de 16GB puede cargar el modelo pero no puede ejecutarlo.

### ejecutar Llama con cuantificación con MLC LLM cuantificado 

```shell
cd /data/MLC-LLM-on-Jetson && python3 Llama-2-7b-chat-hf-q4f16_ft.py 
```
El resultado se muestra a continuación:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/A608/Llama-2-7b-chat-hf-q4f16_ft.png" alt="pir" width={1000} height="auto"/></p>

## Video de cómo ejecutar Llama con MLC en la Jetson Orin NX 16GB:

<iframe width="560" height="315" src="https://www.youtube.com/embed/hyhh0Tc6g9Q" title="Llama2-7b on Jetson Orin NX 16GB with MLC 4bit quantization" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Perspectivas del proyecto

En este proyecto, hemos demostrado cómo implementar una versión cuantificada de Llama2-7B con MLC LLM en la Jetson Orin. Con las potentes capacidades informáticas de la Jetson Orin, los desarrolladores pueden crear aplicaciones de procesamiento de lenguaje natural que ofrezcan alta precisión y baja latencia en dispositivos periféricos. En el futuro, continuaremos explorando el potencial de implementar LLM's en dispositivos de borde y desarrollaremos métodos de implementación más eficientes y optimizados.