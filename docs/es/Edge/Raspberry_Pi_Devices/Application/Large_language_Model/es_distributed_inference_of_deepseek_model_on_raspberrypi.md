---
description: Este wiki demuestra la inferencia distribuida del modelo deepseek en raspberry pi ai box.
title: Inferencia Distribuida del modelo DeepSeek en Raspberry Pi AI box & Industrial box
keywords:
  - RasberryPi Ai box
  - Deepseek
  - Distributed inference
image: https://files.seeedstudio.com/wiki/distributed-inference/model_install.webp
slug: /es/distributed_inference_of_deepseek_model_on_raspberrypi
last_update:
  date: 03/17/2025
  author: Jiahao

no_comments: false # for Disqus
---

# Inferencia Distribuida del modelo DeepSeek en Raspberry Pi AI box & Industrial box

## Introducción

Este wiki explica cómo desplegar el modelo [DeepSeek](https://github.com/deepseek-ai/DeepSeek-LLM) en múltiples Raspberry Pi AI Boxes con [distributed-llama](https://github.com/b4rtaz/distributed-llama). En este wiki, utilicé una **Raspberry Pi con 8GB de RAM** como **nodo raíz** y **tres Raspberry Pis con 4GB de RAM** como **nodos trabajadores** para ejecutar el **modelo DeepSeek 8B**. La velocidad de inferencia alcanzó **6.06 tokens por segundo**.

## Preparar Hardware

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer AI R2130</th>
  <th>reComputer AI Industrial R2145</th>
  <th>reComputer Industrial R20xx</th>
  <th>reComputer Industrial R21xx</th>
 </tr>
    <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-r2145.jpeg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2145-12-p-6486.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Preparar software

### actualizar el sistema:

Abre una terminal con `Ctrl+Alt+T` e ingresa el comando como se muestra a continuación:

```
sudo date -s "$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"
sudo apt update
sudo apt full-upgrade
```

### Instalar distributed llama en tu nodo raíz y nodos trabajadores

Abre una terminal con `Ctrl+Alt+T` e ingresa el comando como se muestra a continuación para instalar [distributed-llama](https://github.com/b4rtaz/distributed-llama.git):

```
git clone https://github.com/b4rtaz/distributed-llama.git
cd distributed-llama
make dllama
make dllama-api
```

### Ejecutar en tu nodo trabajador

Luego ingresa el comando como se muestra a continuación para hacer que los nodos trabajadores funcionen:

```
cd distributed-llama
sudo nice -n -20 ./dllama worker --port 9998 --nthreads 4
```

### Ejecutar en tu nodo raíz

#### Crear y activar entorno virtual de python

```
cd distributed-llama
python -m venv .env
source .env/bin/acitvate
```

#### Instalar librerías necesarias

```
pip install numpy==1.23.5
pip install tourch=2.0.1
pip install safetensors==0.4.2
pip install sentencepiece==0.1.99
pip install transformers
```

#### Instalar modelo deepseek 8b q40

```
git lfs install
git clone https://huggingface.co/b4rtaz/Llama-3_1-8B-Q40-Instruct-Distributed-Llama
```

#### Ejecutar inferencia distribuida en nodo raíz

> **Nota:** `--workers 10.0.0.139:9998 10.0.0.175:9998 10.0.0.124:9998` es la IP de los trabajadores.

```
cd ..
./dllama chat --model ./Llama-3_1-8B-Q40-Instruct-Distributed-Llama/dllama_model_deepseek-r1-distill-llama-8b_q40.m --tokenizer ./Llama-3_1-8B-Q40-Instruct-Distributed-Llama/dllama_tokenizer_deepseek-r1-distill-llama-8b.t  --buffer-float-type q80 --prompt "What is 5 plus 9 minus 3?" --nthreads 4 --max-seq-len 2048 --workers 10.0.0.139:9998 10.0.0.175:9998 10.0.0.124:9998  --steps 256

```

> **Nota:** Si quieres probar la velocidad de inferencia, por favor usa el siguiente comando.

```
cd ..
./dllama inference --model ./model/dllama_model_deepseek-r1-distill-llama-8b_q40.m --tokenizer ./model/dllama_tokenizer_deepseek-r1-distill-llama-8b.t  --buffer-float-type q80 --prompt "What is 5 plus 9 minus 3?" --nthreads 4 --max-seq-len 2048 --workers 10.0.0.139:9998 10.0.0.175:9998 10.0.0.124:9998  --steps 256
```

## Resultado

Lo siguiente es la inferencia del modelo [DeepSeek Llama 8b](https://huggingface.co/b4rtaz/Llama-3_1-8B-Q40-Instruct-Distributed-Llama) usando 4 Raspberry Pi.


<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/distributed-inference/distributed_llama.gif" />
</div>


## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>