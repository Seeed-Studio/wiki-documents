---
description: Esta wiki te guía a través del despliegue de modelos DeepSeek en dispositivos reComputer Jetson usando Ollama, mostrando inferencia de IA eficiente con consumo mínimo de energía.
title: Desplegar Rápidamente DeepSeek en reComputer Jetson
keywords:
- reComputer
- LLM
- ollama
- deepseek
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/deepseek.webp
slug: /es/deploy_deepseek_on_jetson
last_update:
  date: 02/08/2025
  author: Youjiang
---


# Desplegar Rápidamente DeepSeek en reComputer Jetson

## Introducción

DeepSeek es una suite de modelos de IA de vanguardia optimizada para eficiencia, precisión y procesamiento en tiempo real. Con optimización avanzada para computación en el borde, DeepSeek permite inferencia de IA rápida y de baja latencia directamente en dispositivos Jetson, reduciendo la dependencia de la computación en la nube mientras maximiza el rendimiento.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/deepseek.png" />
</div>

Esta wiki proporciona una guía paso a paso para desplegar modelos [DeepSeek](https://www.deepseek.com/) en dispositivos reComputer Jetson para inferencia de IA eficiente en el borde.

## Prerrequisitos

- Dispositivo Jetson con más de 8GB de memoria.
- El dispositivo jetson necesita estar pre-flasheado con el sistema operativo jetpack [5.1.1](https://wiki.seeedstudio.com/es/reComputer_Intro/) o posterior.

:::note
En esta wiki, lograremos las siguientes tareas usando el [reComputer J4012 - Computadora de IA en el Borde con NVIDIA® Jetson™ Orin™ NX 16GB](https://www.seeedstudio.com/reComputer-J4012-p-5586.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlQ29tcHV0ZXIgSjQwMTIiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjo0LCJjX3RvdGFsX3Jlc3VsdHMiOjUyLCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0gJiYgcXVhbnRpdHlfYW5kX3N0b2NrX3N0YXR1czpbMV0ifQ%3D%3D), pero también puedes intentar usar otros dispositivos Jetson.
:::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/j4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Comenzando

### Conexión de Hardware
- Conecta el dispositivo Jetson a la red, ratón, teclado y monitor.

:::note
Por supuesto, también puedes acceder remotamente al dispositivo Jetson vía SSH a través de la red local.
:::

### Instalar Motor de Inferencia Ollama

Ollama es un motor de inferencia ligero y eficiente diseñado para ejecutar modelos de lenguaje grandes (LLMs) localmente con configuración mínima. Simplifica el despliegue de modelos de IA proporcionando una interfaz fácil de usar y tiempo de ejecución optimizado para varias configuraciones de hardware, incluyendo dispositivos Jetson.

Para instalar Ollama, abre la ventana de terminal en el dispositivo Jetson y ejecuta el siguiente comando:

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/install_ollama.png" />
</div>

Este script descargará automáticamente y configurará Ollama en tu sistema, habilitando inferencia local sin problemas para aplicaciones de IA.

### Cargar y Ejecutar DeepSeek

Ollama ahora soporta varias versiones de los modelos DeepSeek, permitiéndonos desplegar diferentes tamaños de modelo basados en nuestras necesidades. Para propósitos de demostración, usaremos el modelo predeterminado DeepSeek-R1 7B.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/ollama_deepseek.png" />
</div>

```bash
ollama run deepseek-r1
```
Este comando descarga y prepara el modelo DeepSeek para inferencia local usando Ollama.
Una vez que el modelo haya terminado de cargar, puedes ingresar tu consulta en la ventana de terminal.

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/load_model.png" />
</div>

## Demostración de Efectos

En el video de demostración, el dispositivo Jetson opera a solo 20W pero logra una velocidad de inferencia impresionante.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/7EYq9Y8Jp8o" title="deploy deepseek on jetson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Referencias
- https://www.deepseek.com/
- https://ollama.com/library/deepseek-r1
- https://wiki.seeedstudio.com/es/local_ai_ssistant/
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