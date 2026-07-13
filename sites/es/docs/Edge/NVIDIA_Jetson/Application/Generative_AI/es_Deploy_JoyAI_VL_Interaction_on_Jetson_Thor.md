---
description: Este wiki muestra cómo desplegar JoyAI-VL-Interaction en NVIDIA Jetson AGX Thor, centrándose en la pila mínima de interacción vídeo-lenguaje en tiempo real para despliegue perimetral con una sola GPU.
title: Desplegar JoyAI-VL-Interaction en Jetson Thor
keywords:
  - Jetson Thor
  - JoyAI
  - VLM
  - Streaming
  - Generative AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /deploy_joyai_vl_interaction_on_jetson_thor
sku: 100060965
last_update:
  date: 07/07/2026
  author: Youjiang
createdAt: '2026-07-07'
updatedAt: '2026-07-07'
url: https://wiki.seeedstudio.com/es/deploy_joyai_vl_interaction_on_jetson_thor/
---

# Desplegar JoyAI-VL-Interaction en Jetson Thor

## Introducción

[JoyAI-VL-Interaction](https://github.com/jd-opensource/JoyAI-VL-Interaction) es un sistema abierto de interacción vídeo-lenguaje en tiempo real. Combina un backend VLM de streaming, una WebUI basada en navegador, servicios opcionales de ASR/TTS y una canalización de memoria de contexto largo para que el modelo pueda observar una escena en vivo y responder en el momento adecuado.

A fecha de **7 de julio de 2026**, el repositorio upstream JoyAI-VL-Interaction indica que se ha probado en **GPU NVIDIA de la serie Hopper**. Este wiki se centra en una ruta práctica de adaptación a **Jetson AGX Thor**: desplegar primero la **pila mínima** (`webinfer + webui`) en la única GPU de Thor y, después de que la canalización principal sea estable, ampliar a servicios de audio.

<div align="center">
    <img width={900}
     src="https://raw.githubusercontent.com/jd-opensource/JoyAI-VL-Interaction/main/img/joyvl-system-architecture.png" />
</div>

## Requisitos previos

- 1 x NVIDIA Jetson AGX Thor Developer Kit
- 1 x cámara USB o una fuente de flujo RTSP
- Teclado, ratón, monitor y conexión de red
- Al menos 30 GB de almacenamiento libre para entornos de Python, pesos de modelos y registros

:::note
Esta guía asume que tu sistema Jetson Thor ya está flasheado, arranca con normalidad y tiene acceso a Internet.
:::

<div class="table-center">
<table style={{ textAlign: 'center' }}>
    <tr>
        <th> NVIDIA Jetson AGX Thor Developer Kit </th>
        <th> USB Camera </th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-kit-3.png" style={{width:400, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-114090066--x10-usb-camera.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-Developer-Kit-p-9965.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora </font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/X10-USB-wired-camera-p-6506.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora </font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>
</div>

## Primeros pasos

### Paso 1. Preparar el sistema Jetson Thor

Abre una terminal en Jetson Thor e instala los paquetes de sistema requeridos:

```bash
sudo apt update
sudo apt install -y git git-lfs curl ffmpeg python3-pip python3.12-venv
git lfs install
```

Para un mejor rendimiento de inferencia en Jetson, cambia el dispositivo a un modo de energía de alto rendimiento:

```bash
sudo nvpmodel -m 0
sudo jetson_clocks
```

:::info
JoyAI-VL-Interaction se estandariza en Python `3.12`, por lo que esta guía mantiene la misma versión en Thor.
:::

### Paso 2. Instalar `uv` y la CLI de Hugging Face

Los scripts de instalación upstream usan [`uv`](https://docs.astral.sh/uv/) y el script de descarga de modelos espera el comando `hf`.

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
source $HOME/.local/bin/env

uv tool install "huggingface_hub[cli]"
hf --version
```

Si `hf` sigue sin encontrarse, vuelve a abrir la terminal o ejecuta:

```bash
export PATH="$HOME/.local/bin:$PATH"
```

### Paso 3. Clonar el repositorio JoyAI-VL-Interaction

```bash
git clone https://github.com/jd-opensource/JoyAI-VL-Interaction.git
cd JoyAI-VL-Interaction
```

### Paso 4. Instalar el entorno de ejecución

Instala primero solo el entorno principal de WebUI e inferencia en streaming:

```bash
./install/install.sh --with-all
```

Este script crea el entorno virtual compartido en `services/.venv` e instala el entorno de ejecución fijado `vllm==0.22.0` requerido por el proyecto.

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/joyai_vl_interaction/install_runtime_env.jpg" />
</div>

:::note
Si `vllm==0.22.0` no se instala correctamente en Jetson ARM64, no continúes con el flujo predeterminado basado en wheel. En ese caso, cambia primero a la ruta oficial de compilación ARM64/origen de vLLM y luego vuelve a esta guía.
:::

### Paso 5. Descargar los pesos del modelo

Aquí seguimos el README de Github para descargar todos los pesos de los modelos:

```bash
./install/download-models.sh --all
```

De forma predeterminada, los modelos se descargan en:

- `/tmp/models/JoyAI-VL-Interaction-Preview`
- `/tmp/models/Qwen3-VL-4B-Instruct`
- `/tmp/models/Qwen3-ASR-1.7B`
- `/tmp/models/Qwen3-TTS-12Hz-1.7B-CustomVoice`

### Paso 6. Iniciar la pila mínima de JoyAI en Thor

La distribución de GPU predeterminada upstream asume múltiples GPU:

- modelo principal en la GPU `0`
- modelo de resumen en la GPU `1`
- ASR/TTS opcionales en la GPU `2`

Jetson Thor es una plataforma de **una sola GPU**, por lo que necesitamos colocar tanto el modelo principal como el modelo de resumen en la `GPU 0` y comenzar con configuraciones de memoria conservadoras.

Aquí necesitamos abrir cuatro terminales en el Jetson y ejecutar los siguientes comandos por separado.

- Terminal1:
    ```bash
    source /home/seeed/JoyAI-VL-Interaction/services/.venv/bin/activate
    cd services/webinfer
    MAIN_GPU=0 MAIN_GPU_MEMORY_UTILIZATION=0.6 bash scripts/run.sh models
    ```
- Terminal2:
    ```bash
    source /home/seeed/JoyAI-VL-Interaction/services/.venv/bin/activate
    cd services/webinfer
    SUMMARY_GPU=0 SUMMARY_GPU_MEMORY_UTILIZATION=0.3 bash scripts/run.sh summary
    ```

:::danger
Ten en cuenta que debes esperar hasta que la Terminal 2 se haya iniciado completamente antes de continuar ejecutando los comandos en la Terminal 3.

Puedes comprobar los registros de ejecución en la Terminal 2 usando el siguiente comando:

`tail -f /home/seeed/JoyAI-VL-Interaction/services/webinfer/summary_vllm_logs/vllm_8065.log`
:::

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/joyai_vl_interaction/lunch.jpg" />
</div>

- Terminal3:
    ```bash
    source /home/seeed/JoyAI-VL-Interaction/services/.venv/bin/activate
    cd services/webinfer
    bash scripts/run.sh adapter
    ```
- Terminal4:
    ```bash
    source /home/seeed/JoyAI-VL-Interaction/services/.venv/bin/activate
    cd services/webui 
    bash scripts/start_server.sh
    ```

:::info
Estos valores son un punto de partida orientado a Thor para el despliegue con una sola GPU. Si el servicio se inicia de forma fiable, puedes aumentar gradualmente la utilización de memoria de la GPU. Si vLLM informa errores de OOM, reduce aún más estos valores.
:::

Cuando el inicio se complete correctamente, el script lanza:

- la API principal VLM compatible con OpenAI en el puerto `7060`
- el modelo de resumen en el puerto `8065`
- el adaptador de streaming en el puerto `8070`
- la WebUI en el puerto `8099`

### Paso 7. Abrir la WebUI

Abre un navegador en Jetson Thor y visita:

```text
https://<jetson-thor-ip>:8099
```

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/joyai_vl_interaction/webui.png" />
</div>

La WebUI utiliza un certificado autofirmado de forma predeterminada, por lo que tu navegador puede mostrar una advertencia de certificado en la primera visita. Acepta la advertencia y continúa.

A continuación puedes:

- seleccionar una cámara web USB en el navegador
- introducir una URL de flujo RTSP
- iniciar la interacción de vídeo en tiempo real con JoyAI-VL-Interaction

## Verificar el despliegue

Abre otra terminal y ejecuta las siguientes comprobaciones de estado:

```bash
curl http://127.0.0.1:7060/v1/models
curl http://127.0.0.1:8065/v1/models
curl http://127.0.0.1:8070/health
```

Si todos los servicios funcionan correctamente, el frontend de la WebUI debería poder conectarse al adaptador de streaming en:

```text
http://127.0.0.1:8070/v1
```

## Demostración

<div class="video-container">
    <iframe width="800" height="450" src="https://www.youtube.com/embed/iyxkqZrzvHs" title="deploy joyai vl interaction on jetson thor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


## Solución de problemas

### 1. `hf: command not found`

Asegúrate de que la ruta local de binarios esté cargada:

```bash
source $HOME/.local/bin/env
export PATH="$HOME/.local/bin:$PATH"
```

### 2. `vllm==0.22.0` o `vllm-omni==0.22.0` falla en ARM64

El proyecto upstream está diseñado en torno a servicios basados en vLLM. Si la instalación predeterminada con pip o `uv` falla en Jetson ARM64, compila `vllm` o `vllm-omni` desde el código fuente o cambia a un contenedor CUDA ARM64 que ya incluya el entorno de ejecución correspondiente.

### 3. La WebUI se abre, pero la inferencia devuelve `502`

Esto suele significar que el frontend del navegador está activo, pero los servicios de modelo backend aún no están listos. Vuelve a comprobar:

```bash
curl http://127.0.0.1:7060/v1/models
curl http://127.0.0.1:8065/v1/models
curl http://127.0.0.1:8070/health
```

## Referencias

- [Repositorio GitHub de JoyAI-VL-Interaction](https://github.com/jd-opensource/JoyAI-VL-Interaction)
- [Guía de inicio de JoyAI-VL-Interaction](https://github.com/jd-opensource/JoyAI-VL-Interaction/blob/main/doc/getting_started.md)
- [JoyAI-VL-Interaction WebInfer README](https://github.com/jd-opensource/JoyAI-VL-Interaction/blob/main/services/webinfer/README.md)
- [Guía de instalación de vLLM](https://docs.vllm.ai/en/stable/getting_started/installation/gpu.html)
- [Repositorio vLLM Omni](https://github.com/vllm-project/vllm-omni)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
