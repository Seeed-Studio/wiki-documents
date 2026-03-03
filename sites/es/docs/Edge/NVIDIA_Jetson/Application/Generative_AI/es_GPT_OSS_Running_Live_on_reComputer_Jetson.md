---
description: Esta wiki demuestra cómo desplegar el modelo de lenguaje grande de código abierto GPT-OSS-20B en un NVIDIA Jetson Orin NX usando llama.cpp, mostrando las capacidades de IA en el borde. Proporciona instrucciones paso a paso para la instalación, conversión del modelo, cuantización y ejecución de inferencia con integración opcional de interfaz web.
title: ¡GPT-OSS Ejecutándose en Vivo en reComputer Jetson!
keywords:
- reComputer
- Jetson
- LLM
- GPT-OSS
- llamacpp
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/gpt_oss/gptoss-running-live.webp
slug: /es/deploy_gptoss_on_jetson
last_update:
  date: 08/14/2025
  author: Youjiang
---


# ¡GPT-OSS Ejecutándose en Vivo en reComputer Jetson!

## Introducción

Esto es mucho más que un simple ejercicio de portabilidad técnica: es una exploración de lo que es posible en el borde. En este artículo, demostraré cómo un modelo de lenguaje grande de código abierto de 20B parámetros cobra vida en dispositivos de borde como el Nvidia Jetson Orin Nx.

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpt_oss/deploy_gptoss_super.png" />
</div>

La serie [NVIDIA Jetson](https://www.seeedstudio.com/tag/nvidia.html) se destaca como una plataforma de computación de borde premier, reconocida por su excepcional eficiencia energética y factor de forma compacto. Mientras tanto, [GPT-OSS-20B](https://github.com/openai/gpt-oss) representa la vanguardia de los modelos de lenguaje grandes de código abierto disponibles gratuitamente. Su convergencia no solo muestra el potencial sin explotar de los dispositivos de borde, sino que también pionera nuevas posibilidades para aplicaciones de IA sin conexión.


## Prerrequisitos

- reComputer Super J4012


:::note
En esta wiki, lograremos las siguientes tareas usando el [reComputer Super J4012](https://www.seeedstudio.com/reComputer-Super-Bundle.html), pero también puedes intentar usar otros dispositivos Jetson.
:::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpt_oss/recomputer_super.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

:::info
Los pasos siguientes involucrarán configurar múltiples entornos de Python en el Jetson. Recomendamos instalar Conda en el dispositivo Jetson:
```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
chmod +x Miniconda3-latest-Linux-aarch64.sh
./Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
```
:::

## Instalar llama.cpp

Primero, necesitamos instalar el motor de inferencia `llama.cpp` en el Jetson. Por favor ejecuta los siguientes comandos en la ventana de terminal del Jetson.

```bash
sudo apt update
sudo apt install -y build-essential cmake git 
git clone https://github.com/ggml-org/llama.cpp.git
cd llama.cpp
cmake -B build -DGGML_CUDA=ON
cmake --build build --parallel
```

Después de la compilación, todos los archivos ejecutables para llama.cpp se generarán en `build/bin`.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpt_oss/install_llamacpp.png" />
</div>

:::note
El proceso de construcción típicamente toma alrededor de 2 horas.
:::

## Preparar el Modelo GPT-OSS

Paso 1. Descarga el [GPT-OSS-20B](https://huggingface.co/openai/gpt-oss-20b/tree/main) desde Huggingface y súbelo al Jetson.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpt_oss/download_model.png" />
</div>

Paso 2. Instala las dependencias requeridas para la conversión del modelo.

```bash
conda create -n gpt-oss python=3.10
conda activate gpt-oss
cd /home/seeed/Documents/llama.cpp  # cd `ruta_de_llama.cpp` 
pip install .
```

Paso 3. Ejecuta el proceso de conversión del modelo.

```bash
python convert_hf_to_gguf.py --outfile /home/seeed/Downloads/gpt-oss /home/seeed/Documents/gpt-oss-gguf/
# python convert_hf_to_gguf.py --outfile <ruta_del_modelo_entrada> <ruta_del_modelo_salida>
```

Paso 4. Cuantización del Modelo.

```bash
./build/bin/llama-quantize /home/seeed/Documents/gpt-oss-gguf/Gpt-Oss-32x2.4B-F16.gguf /home/seeed/Documents/gpt-oss-gguf-Q4/Gpt-Oss-32x2.4B-Q4.gguf Q4_K
# ./build/bin/llama-quantize <ruta_del_modelo_f16_gguf> <ruta_del_modelo_salida> <método_cuantización>
```

## Lanzar GPT-OSS con llama.cpp

Ahora podemos intentar lanzar el programa de inferencia en la terminal del Jetson.

```bash
./build/bin/llama-cli -m /home/seeed/Documents/gpt-oss-gguf/Gpt-Oss-32x2.4B-F16.gguf -ngl 40
```

:::info
Por favor reemplaza la ruta del modelo según sea necesario.
:::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpt_oss/run.gif" />
</div>

## Inferencia con WebUI (Opcional)
Si quieres acceder al modelo a través de una interfaz UI, puedes instalar [OpenWebUI](https://github.com/open-webui/open-webui) en el Jetson para lograr esto. 
Abre una nueva terminal en Jetson e ingresa el siguiente comando:

```bash
conda create -n open-webui python=3.11
conda activate open-webui
pip install open-webui
open-webui serve
```

:::note
Lanzar OpenWebUI instalará dependencias y descargará modelos —— por favor ten paciencia.
:::

Una vez que la configuración esté completa, deberías ver logs similares a estos en la terminal.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpt_oss/openwebui.png" />
</div>

Luego, abre tu navegador y navega a `http://<ip-del-jetson>:8080` para lanzar Open WebUI.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpt_oss/browser.png" />
</div>

:::info
Si estás abriendo esto por primera vez, por favor sigue las instrucciones para configurar tu cuenta.
:::

Ve a ⚙️ Configuración de Administrador → Conexiones → Conexiones OpenAI para establecer la url como: `http://127.0.0.1:8081`. Una vez guardado, ¡Open WebUI comenzará a usar tu servidor local Llama.cpp como backend!

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpt_oss/set_model.png" />
</div>


## Demostración del Efecto

Finalmente, demostraré el rendimiento real de inferencia del modelo GPT-OSS-20B en un NVIDIA Jetson Orin NX a través de una demostración en video.

<div class="video-container">
    <iframe width="800" height="450" src="https://www.youtube.com/embed/kcN731Jyce4" title="GPT-OSS Running Live on NVIDIA Jetson Orin NX!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Referencias
- https://hyd.ai/2025/03/07/llamacpp-on-jetson-orin-agx/
- https://docs.openwebui.com/getting-started/quick-start/starting-with-llama-cpp
- https://github.com/open-webui/open-webui
- https://huggingface.co/openai/gpt-oss-20b
- https://www.seeedstudio.com/tag/nvidia.html


## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>