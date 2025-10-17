---
description: Esta wiki proporciona instrucciones paso a paso para desplegar el modelo de texto a voz Dia en dispositivos NVIDIA Jetson, demostrando sus impresionantes capacidades de síntesis de voz en tiempo real. Cubre la instalación de dependencias, ajustes de configuración, e incluye una demostración práctica usando el reComputer J4012 con Jetson Orin NX para mostrar la generación de audio de alta calidad.
title: Desplegar Dia en reComputer Jetson
keywords:
- reComputer
- Jetson
- LLM
- Dia
- Audio
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/deploy_deepseek.webp
slug: /es/deploy_dia_on_jetson
last_update:
  date: 05/16/2025
  author: Youjiang
---

# Desplegar Dia en reComputer Jetson

## Introducción

<div style={{textAlign: 'justify', textJustify: 'inter-word'}}>
    El rápido avance de la síntesis de voz impulsada por IA ha permitido aplicaciones de texto a voz (TTS) de alta calidad y tiempo real en varios dominios. Entre estos, Dia se destaca como un modelo eficiente y expresivo de generación de voz neuronal capaz de producir audio de sonido natural con una sobrecarga computacional mínima. Esto lo hace particularmente adecuado para el despliegue en dispositivos edge, como la serie NVIDIA Jetson, que son ampliamente utilizados en aplicaciones de IA embebida debido a su equilibrio entre rendimiento y eficiencia energética.
</div>

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/dia/dia.png" />
</div>

<div style={{textAlign: 'justify', textJustify: 'inter-word'}}>
    En este artículo, exploramos el proceso de desplegar el modelo TTS Dia en un dispositivo Jetson y demostramos su rendimiento durante la inferencia.
</div>


## Prerrequisitos

- Dispositivo Jetson con más de 8GB de memoria.
- El dispositivo jetson necesita estar pre-flasheado con el sistema operativo jetpack [6.1](https://wiki.seeedstudio.com/es/reComputer_Intro/) o posterior.

:::note
En esta wiki, lograremos las siguientes tareas usando el [reComputer J4012 - Computadora Edge AI con NVIDIA® Jetson™ Orin™ NX 16GB](https://www.seeedstudio.com/reComputer-J4012-p-5586.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlQ29tcHV0ZXIgSjQwMTIiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjo0LCJjX3RvdGFsX3Jlc3VsdHMiOjUyLCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0gJiYgcXVhbnRpdHlfYW5kX3N0b2NrX3N0YXR1czpbMV0ifQ%3D%3D), pero también puedes intentar usar otros dispositivos Jetson.
:::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/j4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlQ29tcHV0ZXIgSjQwMTIiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjo0LCJjX3RvdGFsX3Jlc3VsdHMiOjUyLCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0gJiYgcXVhbnRpdHlfYW5kX3N0b2NrX3N0YXR1czpbMV0ifQ%3D%3D" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Comenzando

### Conexión de Hardware
- Conecta el dispositivo Jetson a la red, ratón, teclado y monitor.

:::note
Por supuesto, también puedes acceder remotamente al dispositivo Jetson vía SSH a través de la red local.
:::

### Instalar Dependencias

1. Por favor descarga y descomprime las dependencias apropiadas para tu dispositivo Jetson desde [aquí](https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ER_DifB_INZLnzTPyz6rqP8BESl1LiGtttOSojNM4G3jHA?e=AmDZv0).

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/dia/dependencies.png" />
</div>

2. En tu dispositivo Jetson, ejecuta el siguiente comando en la terminal para instalar:

```bash
pip install torch-2.7.0-cp310-cp310-linux_aarch64.whl
pip install torchaudio-2.7.0-cp310-cp310-linux_aarch64.whl
pip install triton-3.3.0-cp310-cp310-linux_aarch64.whl
```

### Descargar e Instalar Dia

1. Clona el código fuente de Dia en tu dispositivo Jetson usando este comando de terminal:

```bash
git clone https://github.com/nari-labs/dia.git
```

2. Edita el archivo de instalación.

<div style={{textAlign: 'justify', textJustify: 'inter-word'}}>
    Comenta las configuraciones relacionadas con torch, torchaudio y triton. Usando Vim, abre pyproject.toml y deshabilita las líneas 19–22.
</div>

```bash
cd dia
vim pyproject.toml
```

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/dia/comment_out.png" />
</div>

:::note
Recuerda guardar los cambios antes de salir.
:::

3. instala el entorno de ejecución para dia.

```bash
pip install -e .
pip install numpy==1.26.4
```

4. lanza Dia

```bash
export GRADIO_SERVER_NAME=0.0.0.0
python app.py
```

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/dia/launch.png" />
</div>

:::info
Para facilitar el acceso remoto al WebUI de Gradio, reconfiguré la variable de entorno GRADIO_SERVER_NAME.
:::


## Demostración

En el video de demostración, usé DeepSeek para generar un diálogo presentando Seeed Studio, y luego directamente ingresé el texto para generar audio con DIA. Aunque mi prompt no empleó ninguna técnica especial, la calidad del audio generado fue aún increíblemente impresionante.

```txt
[S1] Hey, have you heard of Seeed Studio?
[S2] Of course! It's a company focused on open-source hardware right?
[S1] Exactly! They offer a wide range of development boards, sensor modules, and edge computing devices, perfect for makers, engineers, and developers to quickly bring their ideas to life.
[S2] Yeah, and their Grove ecosystem is really famous—its modular design makes hardware connections super easy, no messy soldering or wiring needed.
[S1] True! They also run Seeed Fusion, providing small-batch PCB manufacturing and assembly services, which is great for startups and hardware entrepreneurs.
[S2] Plus, their community and documentation are well-developed, and many of their projects are open-source, making them beginner-friendly!
[S1] In short, if you're into DIY smart hardware or IoT projects, Seeed Studio is an awesome choice!
[S2] Couldn't agree more!
```

<div class="video-container">
    <iframe width="900" height="506" src="https://www.youtube.com/embed/g9jQzwnsHr0" title="Deploy Dia on reComputer Jetson" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Referencias
- https://github.com/nari-labs/dia
- https://www.deepseek.com/
- https://docs.nvidia.com/deeplearning/frameworks/index.html#installing-frameworks-for-jetson


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