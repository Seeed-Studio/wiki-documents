---
description: Desplegar modelo de IA con Scailable en dispositivos NVIDIA Jetson
title: Primeros pasos con Scailable
tags:
  - AI model deploy
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Scailable-Jetson-Getting-Started
last_update:
  date: 03/10/2023
  author: Lakshantha
---

# Primeros pasos con Scailable en dispositivos NVIDIA® Jetson

<div align="center"><img width="{1000}" src="https://files.seeedstudio.com/wiki/Scailable/wiki-thumb-4.gif" /></div>

## ¿Qué es Scailable?

[Scailable](https://scailable.net) proporciona una plataforma para crear y gestionar soluciones de IA Edge a escala. Con Scailable, puedes simplemente configurar cualquier dispositivo edge compatible (como un router, gateway o IPC) para convertirlo en un dispositivo "inteligente". Los dispositivos inteligentes pueden ejecutar modelos avanzados de Inteligencia Artificial (IA) y Aprendizaje Automático (ML) en datos de entrada, como un flujo de video, para convertir la entrada en algo significativo, como un conteo del número de coches en el video.

## ¿Por qué Scailable en NVIDIA Jetson?

La plataforma NVIDIA Jetson es un gran candidato para ejecutar Scailable porque, como dispositivo de IA Edge que incluye SoMs de NVIDIA, es capaz de ofrecer un mejor rendimiento de inferencia después de desplegar varios pipelines de IA over-the-air a escala en estos dispositivos.

Este wiki te guiará sobre cómo puedes instalar fácilmente Scailable AI Manager en la plataforma NVIDIA Jetson y usar la Plataforma Scailable para configurar y gestionar remotamente tu solución de IA a escala.

## Prerrequisitos

- Dispositivo NVIDIA Jetson ejecutando NVIDIA JetPack 5.0+ y conectado a internet

  - Hemos probado este wiki con [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) ejecutando [JetPack 5.1.1](https://developer.nvidia.com/embedded/jetpack-sdk-511). Si quieres explorar más dispositivos NVIDIA Jetson ofrecidos por Seeed, por favor visita [esta página](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf).
- PC host con Windows, Linux o Mac y conectado a internet

## Instalar Scailable AI Manager

**Paso 1:** Ejecuta el siguiente comando para instalar Scailable AI Manager en el dispositivo Jetson Orin

```sh
sudo bash -ic "$(wget -q -O - https://get.sclbl.net)"
```

:::note
Durante la instalación, necesitas introducir "y" en el prompt que te pregunta si quieres habilitar el soporte para JetPack 5.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/2.jpg
" style={{width:800, height:'auto'}}/></div>

**Paso 2:** Puedes introducir la dirección IP del dispositivo Jetson seguida de **:8081** en un navegador web o simplemente introducir la URL que verás en la línea de comandos como sigue

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/4.jpg
" style={{width:800, height:'auto'}}/></div>

## Registrarse para una cuenta de Scailable

**Paso 1:** Una vez que aparezca Scailable AI Manager, registra el dispositivo dándole un nombre y haz clic en el botón **Register**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/1.jpg
" style={{width:1000, height:'auto'}}/></div>

**Paso 3:** Confirma el nombre del dispositivo que creaste antes, haz clic en **Register** y haz clic en **Return to device**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/7.jpg
" style={{width:650, height:'auto'}}/></div>

Si todo salió bien, verás que todas las verificaciones de estado son exitosas bajo la pestaña **Status** como sigue

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/8.jpg
" style={{width:850, height:'auto'}}/></div>

## Ejecutar aplicación de IA

Scailable viene precargado con muchos modelos de IA diferentes para que puedas probar. Sin embargo, si quieres usar tu propio modelo de IA, también puedes importarlo.

**Paso 1:** Bajo la pestaña **Model**, dentro de la sección **First Model**, haz clic en **Assign Model**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/9.jpg
" style={{width:750, height:'auto'}}/></div>

**Paso 2:** Aquí puedes agregar tu propio modelo haciendo clic en **add a model** o usar un modelo precompilado. Aquí elegiremos **Scailable Models**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/10.jpg
" style={{width:900, height:'auto'}}/></div>

**Paso 3:** Como ejemplo, elegiremos el modelo **People counter within a region**. Haz clic en **Use this model**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/12.png
" style={{width:800, height:'auto'}}/></div>

Ahora verás que el modelo está seleccionado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/13.png
" style={{width:750, height:'auto'}}/></div>

**Paso 4:** Bajo la pestaña **Input**, selecciona **Video driver** para el Input driver

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/14.png
" style={{width:800, height:'auto'}}/></div>

Aquí puedes seleccionar ya sea un flujo de video, imagen o imagen/video de ejemplo precargado con Scailable

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/16.png
" style={{width:800, height:'auto'}}/></div>

**Paso 5:** Por ejemplo, elegiremos una fuente de video precargada que viene con Scailable que es **faces**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/15.jpg
" style={{width:800, height:'auto'}}/></div>

**Paso 6:** Bajo la pestaña **output**, mantén la configuración por defecto

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/17.png
" style={{width:800, height:'auto'}}/></div>

**Paso 7:** Bajo la pestaña **Options**, mantén la configuración por defecto

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/18.png
" style={{width:800, height:'auto'}}/></div>

**Paso 7:** Bajo la pestaña **Test**, haz clic en **Test configuration**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/19.png
" style={{width:800, height:'auto'}}/></div>

Verás la siguiente salida si es exitosa

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/20.png
" style={{width:800, height:'auto'}}/></div>

**Paso 8:** Bajo la pestaña **Run**, haz clic en **Run Model**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/21.png
" style={{width:800, height:'auto'}}/></div>

Verás la siguiente salida si se está ejecutando exitosamente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/22.png
" style={{width:800, height:'auto'}}/></div>

**Paso 9:** Haz clic en **View live visualization** para previsualizar los resultados de inferencia localmente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/23.png
" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/25.png
" style={{width:800, height:'auto'}}/></div>

**Paso 10:** Haz clic en **View output in cloud** para descargar los resultados en formatos CSV o JSON

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/26.png
" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/27.png
" style={{width:800, height:'auto'}}/></div>

## Desplegar modelos de IA a escala

Usando Scailable, puedes desplegar un solo modelo a múltiples dispositivos a escala con facilidad

**Paso 1:** Visita [esta página web](https://admin.sclbl.net/login), inicia sesión en tu cuenta de Scailable y verás el panel de control como sigue

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/32.png
" style={{width:800, height:'auto'}}/></div>

**Paso 2:** Una vez que hagas clic en **DEVICES**, verás todos tus dispositivos conectados con tu cuenta de Scailable

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/28.png
" style={{width:750, height:'auto'}}/></div>

**Paso 3:** Selecciona todos los dispositivos haciendo clic en la casilla de verificación, introduce un nombre para el grupo de dispositivos y haz clic en **Save new groups**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/29.png
" style={{width:750, height:'auto'}}/></div>

**Paso 4:** Haz clic en **Assign a model to all devices in group**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/30.png
" style={{width:750, height:'auto'}}/></div>

**Paso 5:** Elige un modelo como hicimos antes y el modelo será desplegado a todos los dispositivos en el grupo remotamente

Al desplegar exitosamente el modelo remotamente, verás la siguiente salida

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/31.jpg
" style={{width:600, height:'auto'}}/></div>

## Aprende más

Scailable ofrece documentación muy detallada y completa. Por lo tanto, es altamente recomendado revisarla [aquí](https://docs.scailable.net).

## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>