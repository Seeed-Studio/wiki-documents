---
description: Este wiki proporciona un tutorial sobre cómo usar Llava en el reComputer Industrial J4012 para monitorear tu almacén y controlar los colores de las luces de advertencia a través de RS485, ayudando a garantizar la seguridad del almacén.
title: Usar Llava para proteger tu almacén
keywords:
- Multimodal 
- LLava
- RS485
- VLM
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/vlm
last_update:
  date: 10/10/2025
  author: Jiahao Li
---

# Cómo usar LLaVa en el reComputer Industrial J4012 para monitorear tu almacén

## Introducción

Este wiki describe el despliegue de un VLM (Modelo de Aprendizaje Visual) en el [reComputer Industrial J4012](https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html), usando una cámara USB como entrada para el VLM. Cuando el sistema detecta una situación segura, la luz de señal se volverá verde a través del control RS485. En situaciones peligrosas, como un incendio o la presencia de alguien con un arma, la luz de señal se volverá amarilla. Cuando el sensor de luz detecta la señal de la luz del almacén siendo apagada a través de RS485, la luz de señal se volverá roja.

## Prerrequisitos

<div align="center">
    <img width={800}
     src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110110191.jpg" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

> **Nota sobre Componentes Requeridos:**
> Además del Jetson, se requieren los siguientes componentes RS485:
>
> - Un hub RS485 para dividir una interfaz en dos.
> - Una luz RS485 que cambia de color.
> - Un sensor de luz RS485.

## Inicializar el entorno del sistema

1. Después de instalar el sistema inicial con JP6, necesitas verificar la instalación de `CUDA` y otras librerías. Puedes verificarlas e instalarlas ejecutando `sudo apt-get install nvidia-jetpack`.

2. Instalar [ollama](https://ollama.com/download) usando un comando como el siguiente:

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

3. Ejecutar [LLaVa](https://ollama.com/library/llava-llama3) con ollama como se muestra a continuación:

```bash
ollama run llava-llama3:8b
```

## Instalar proyecto

1. Usar un comando como el siguiente para instalar uv

```bash
pip install uv
```

2. Clonar proyecto

```bash
git clone https://github.com/Seeed-Projects/VLM-Guard.git
```

3. Usar uv para sincronizar el entorno

```bash
cd VLM_Guard
uv sync
source .venv/bin/activate
```

## Ejecutar proyecto

1. Usar el script a continuación para ejecutar el proyecto.

```bash
./start_demo.sh
```

2. Abrir un navegador web, luego ingresar `localhost:5002` para abrir la interfaz de la aplicación

## Resultado

Como se demuestra en el video, la luz del almacén indica verde durante operaciones normales, amarillo en situaciones peligrosas como cuando alguien está sosteniendo un cuchillo, y rojo cuando el sensor de luz no detecta luz—señalando una falla en la iluminación del almacén, mientras también permite la interacción con datos históricos y consultas a través del modelo VLM para obtener la información deseada.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/J0sS-1zQid8?list=PLpH_4mf13-A1EnNUgEMTsy2PxejFllSGM" title="Build a Local AI Watchdog for Industrial Safety with reComputer J4012 powered by NVIDIA Jetson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
