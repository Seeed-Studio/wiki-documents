---
description: Implementa un modelo de IA con Scailable en dispositivos NVIDIA Jetson
title: Primeros pasos con Scailable
tags:
  - Despliegue de modelo de IA
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Scailable-Jetson-Getting-Started
last_update:
  date: 03/10/2023
  author: Lakshantha
---

# Primeros pasos con Scailable en dispositivos NVIDIA® Jetson

<div align="center"><img width="{1000}" src="https://files.seeedstudio.com/wiki/Scailable/wiki-thumb-4.gif" /></div>

## ¿Qué es Scailable?

[Scailable](https://scailable.net) proporciona una plataforma para crear y gestionar soluciones Edge AI a escala. Con Scalilable, puedes simplemente configurar cualquier dispositivo periférico compatible (como un enrutador, puerta de enlace o IPC) para convertirlo en un dispositivo "inteligente". Los dispositivos inteligentes pueden ejecutar modelos avanzados de Inteligencia Artificial (IA) y Aprendizaje Automático (ML) en datos de entrada, como una transmisión de video, para convertir la entrada en algo significativo, como un recuento de la cantidad de automóviles en el video.

## ¿Por qué Scailable en la NVIDIA Jetson?

La plataforma NVIDIA Jetson es una excelente candidata para ejecutar Scailable porque, como dispositivo Edge AI que incluye NVIDIA SoM, puede brindar un mejor rendimiento de inferencia después de implementar varias canalizaciones de AI por aire a escala para estos dispositivos.

Esta wiki te explicará cómo puedes instalar fácilmente Scailable AI Manager en la plataforma NVIDIA Jetson y usar Scalable Platform para configurar y administrar de forma remota tu solución de IA a escala.

## Prerequisitos

- Dispositivo NVIDIA Jetson con NVIDIA JetPack 5.0+ y conexión a Internet

  - Hemos probado esta wiki con la [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) usando [JetPack 5.1.1](https://developer.nvidia.com/embedded/jetpack-sdk-511). Si deseas explorar más dispositivos NVIDIA Jetson ofrecidos por Seeed, visita [esta página](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf).
- PC host con Windows, Linux o Mac y conectado a internet

## Instala Scailable AI Manager

**Paso 1:** Ejecuta el siguiente comando para instalar Scalable AI Manager en el dispositivo Jetson Orin 

```sh
sudo bash -ic "$(wget -q -O - https://get.sclbl.net)"
```

:::nota
Durante la instalación, debes ingresar "y" en el mensaje que te solicita que habilites la compatibilidad con JetPack 5.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/2.jpg
" style={{width:800, height:'auto'}}/></div>

**Paso 2:** Puedes ingresar la dirección IP del dispositivo Jetson seguida de **:8081** en un navegador web o simplemente ingresar la URL que verás en la línea de comandos de la siguiente manera

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/4.jpg
" style={{width:800, height:'auto'}}/></div>

## Regístrate para obtener una cuenta de Scailable

**Paso 1:** Una vez que aparezca Scalable AI Manager, registra el dispositivo dándole un nombre y haz click en el botón **Registrar**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/1.jpg
" style={{width:1000, height:'auto'}}/></div>

**Paso 3:** Confirma el nombre del dispositivo que creaste antes, haz click en **Registrar** y haz click en **Volver al dispositivo**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/7.jpg
" style={{width:650, height:'auto'}}/></div>

Si todo salió bien, verás que todas las comprobaciones de estado fueron exitosas en la pestaña **Estado** de la siguiente manera

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/8.jpg
" style={{width:850, height:'auto'}}/></div>

## Ejecuta tu aplicación de IA

Scailable viene precargado con muchos modelos de IA diferentes para que los pruebes. Sin embargo, si deseas utilizar tu propio modelo de IA, también puedes importarlo.

**Paso 1:** En la pestaña **Modelo**, dentro de la sección **Primer modelo**, haz click en **Asignar modelo**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/9.jpg
" style={{width:750, height:'auto'}}/></div>

**Paso 2:** Aquí puedes agregar tu propio modelo haciendo click en **agregar un modelo** o usar un modelo prediseñado. Aquí elegiremos **Modelos escalables**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/10.jpg
" style={{width:900, height:'auto'}}/></div>

**Paso 3:** Como ejemplo, elegiremos el modelo **Contador de personas dentro de una región**. Haz click en **Usar este modelo**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/12.png
" style={{width:800, height:'auto'}}/></div>

Ahora verás que el modelo está seleccionado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/13.png
" style={{width:750, height:'auto'}}/></div>

**Paso 4:** En la pestaña **Entrada**, selecciona **Controlador de vídeo** para el controlador de entrada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/14.png
" style={{width:800, height:'auto'}}/></div>

Aquí puedes seleccionar una transmisión de video, una imagen o una imagen/video de ejemplo precargado con Scailable

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/16.png
" style={{width:800, height:'auto'}}/></div>

**Paso 5:** Por ejemplo, elegiremos una fuente de video precargada que viene con Scailable y que es **caras**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/15.jpg
" style={{width:800, height:'auto'}}/></div>

**Paso 6:** En la pestaña **salida**, manten la configuración predeterminada

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/17.png
" style={{width:800, height:'auto'}}/></div>

**Paso 7:** En la pestaña **Opciones**, manten la configuración predeterminada

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/18.png
" style={{width:800, height:'auto'}}/></div>

**Paso 7:** En la pestaña **Prueba**, haz click en **Probar configuración**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/19.png
" style={{width:800, height:'auto'}}/></div>

Verás el siguiente resultado si tienes éxito

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/20.png
" style={{width:800, height:'auto'}}/></div>

**Paso 8:** En la pestaña **Ejecutar**, haz click en **Ejecutar modelo**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/21.png
" style={{width:800, height:'auto'}}/></div>

Verás el siguiente resultado si se está ejecutando correctamente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/22.png
" style={{width:800, height:'auto'}}/></div>

**Paso 9:** Haz click en **Ver visualización en vivo** para obtener una vista previa de los resultados de la inferencia localmente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/23.png
" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/25.png
" style={{width:800, height:'auto'}}/></div>

**Paso 10:** Haz click en **Ver resultados en la nube** para descargar los resultados en formatos CSV o JSON.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/26.png
" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/27.png
" style={{width:800, height:'auto'}}/></div>

## Despliegue de modelos IA a escala 

Con Scailable, puedes implementar un único modelo en múltiples dispositivos a escala con facilidad

**Paso 1:** Visita [esta página web](https://admin.sclbl.net/login), inicia sesión en tu cuenta Scailable y verás el panel de control de la siguiente manera

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/32.png
" style={{width:800, height:'auto'}}/></div>

**Paso 2:** Una vez que hagas click en **DISPOSITIVOS**, verás todos tus dispositivos conectados con tu cuenta Scailable

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/28.png
" style={{width:750, height:'auto'}}/></div>

**Paso 3:** Selecciona todos los dispositivos haciendo click en la casilla de verificación, ingresa un nombre para el grupo de dispositivos y haz click en **Guardar nuevos grupos**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/29.png
" style={{width:750, height:'auto'}}/></div>

**Paso 4:** Haz click en **Asignar un modelo a todos los dispositivos del grupo**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/30.png
" style={{width:750, height:'auto'}}/></div>

**Paso 5:** Elige un modelo como lo hicimos antes y el modelo se implementará en todos los dispositivos del grupo de forma remota.

Al implementar exitosamente el modelo de forma remota, verás el siguiente resultado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/31.jpg
" style={{width:600, height:'auto'}}/></div>

## Leer más

Scailable ofrece documentación muy detallada y completa. Por lo que es muy recomendable consultarlos [aquí](https://docs.scailable.net).

## Soporte Tech y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para darte soporte y asegurar que tu experiencia con nuestros productos sea la mejor posible. Tenemos diversos canales de comunicación para adaptarnos distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>