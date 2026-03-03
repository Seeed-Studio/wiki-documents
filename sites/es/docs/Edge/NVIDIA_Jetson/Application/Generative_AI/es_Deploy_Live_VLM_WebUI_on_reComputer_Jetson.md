---
description: Este artículo describe cómo implementar Live VLM WebUI en un dispositivo reComputer Jetson para habilitar la interacción y evaluación en tiempo real de Modelos de Visión-Lenguaje (VLM). Las pruebas muestran que todo el flujo de trabajo puede ejecutarse en hardware con 16GB de memoria, pero la velocidad de inferencia es relativamente lenta.
title: Implementar Live VLM WebUI en reComputer Jetson
keywords:
- reComputer
- Jetson
- VLM
- Live VLM WebUI
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/gpt_oss/gptoss-running-live.webp
slug: /es/deploy_live_vlm_webui_on_jetson
last_update:
  date: 12/26/2025
  author: Youjiang
---


# Implementar Live VLM WebUI en reComputer Jetson

## Introducción

Live VLM WebUI es una interfaz web universal para la interacción y evaluación comparativa en tiempo real de Modelos de Visión-Lenguaje. Puede transmitir tu cámara web a cualquier VLM y obtener análisis en vivo impulsado por IA - perfecto para probar modelos, evaluar rendimiento y explorar capacidades de IA de visión a través de múltiples dominios y plataformas de hardware.

Este wiki te mostrará cómo implementar Live VLM WebUI en el reComputer Super J4012.

<!-- <div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/live_vlm_webui/webui.png" />
</div> -->


## Prerrequisitos
- reComputer Super J4012
- Cámara USB

<div class="table-center">
<table style={{textAlign: 'center'}}>
    <tr>
        <th> reComputer Super J4012 </th>
        <th> Cámara USB </th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110311-recomputer-super-j3010_1.jpg" style={{width:400, height:'auto'}}/>
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
                <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/X10-USB-wired-camera-p-6506.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>
</div>

:::info
Por favor asegúrate de que tu dispositivo Jetson tenga instalado el sistema operativo Jetpack 6.2.
:::

:::info
Antes de configurar el software, por favor conecta la cámara USB al puerto Type-A del reComputer Super J4012.
:::


## Implementar Live VLM WebUI

Paso 1. Instalar y ejecutar ollama en reComputer Jetson.

Ejecuta el siguiente comando en la ventana de terminal en reComputer Jetson.

```bash
curl -fsSL https://ollama.com/install.sh | sh
ollama pull llama3.2-vision:11b
```
:::note
La descarga del modelo tomará aproximadamente 10 minutos. Por favor espera pacientemente.
:::

Paso 2. Instalar Live VLM WebUI.

Ejecuta el siguiente comando en la ventana de terminal en reComputer Jetson.

```bash
# Install dependencies
sudo apt install openssl python3-pip

# Install the package
python3 -m pip install --user live-vlm-webui

# Add to PATH (one-time setup)
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

# Run it
live-vlm-webui
```

Paso 3. Configurar e iniciar Live VLM WebUI.

Si la aplicación se ejecuta exitosamente, puedes abrir la WebUI ingresando `https://localhost:8090` en el navegador.


- En VLM API Configuration, selecciona el motor de inferencia `ollama` y el modelo `llama3.2-vision` que acabas de descargar.
- En Camera and App Control, selecciona `USB Camera`.
- Después de hacer clic en el botón Run, puedes esperar los resultados de inferencia del backend.

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/live_vlm_webui/config.png" />
</div>

## Demostración de Efectos

Todo el flujo de trabajo puede ejecutarse normalmente en un dispositivo reComputer Super J4012 con 16GB de memoria. Sin embargo, durante las pruebas reales, se encontró que la velocidad de inferencia es muy lenta.

<div class="video-container">
    <iframe width="800" height="450" src="https://www.youtube.com/embed/GrdIRkmiXUc" title="Deploy Live LLM WebUI on reComputer Jetson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Referencias
- https://ollama.com/download/linux
- https://github.com/NVIDIA-AI-IOT/live-vlm-webui


## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>