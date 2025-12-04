---
description: Deploy_AI_With_A1102
title: Desplegando Modelos de IA en SenseCAP A1102 Usando SenseCraft AI
keywords:
- Sensor Vision_AI_V2
- SenseCAP A1102
- SenseCraft AI
- Custom AI model
image: https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/20.webp
slug: /es/deploy_ai_with_a1102
sidebar_position: 3
# sidebar_class_name: hidden
last_update:
  date: 11/26/2025
  author: Twelve
---

# Desplegando Modelos de IA en SenseCAP A1102 Usando SenseCraft AI

## Descripción General

El SenseCAP A1102 es un dispositivo sensor potente que combina capacidades avanzadas de IA con facilidad de despliegue. Esta guía te llevará a través del despliegue de modelos de IA oficiales o personalizados en el A1102 usando el sitio web **SenseCraft AI**, ofreciendo instrucciones paso a paso para emparejamiento, configuración y pruebas.

## Prerrequisitos

### Hardware Requerido

- Dispositivo SenseCAP A1102  
- Cable de datos USB Type-C  
- PC  

### Software Requerido
- [Plataforma SenseCraft AI](https://sensecraft.seeed.cc/ai/home)

## Proceso de Flasheo del Modelo de IA

### Paso 1. Abrir nuestra plataforma y Seleccionar A1102 en el Espacio de Trabajo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture2.png" style={{width:1000, height:'auto'}}/></div>

### Paso 2. Conectar a nuestra Plataforma por puerto serie

- Usa un cable Type-C para conectar el dispositivo a tu PC (asegúrate de conectar al puerto Type-C superior, que es el puerto serie Himax, como se muestra en la imagen a continuación).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture3.png" style={{width:400, height:'auto'}}/></div>

- Haz clic en `Connect` 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture4.png" style={{width:1000, height:'auto'}}/></div>

- Selecciona el puerto serie correcto y haz clic en `Connect` en la ventana emergente

Si se selecciona el puerto correcto, podrás ver la transmisión de video de vista previa a través de Invoke y proceder con la selección y flasheo del modelo normalmente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture5.png" style={{width:1000, height:'auto'}}/></div>

### Paso 3. Seleccionar el modelo de IA que quieres desplegar al dispositivo

- Haz clic en `Select Model`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture6.png" style={{width:500, height:'auto'}}/></div>

- Elige entre Modelos Públicos o tus propios modelos entrenados en SenseCraft AI

- El proceso de flasheo comenzará después de que hagas clic en el modelo

### Subir tu propio modelo de IA y desplegarlo al dispositivo

:::warning note
Nuestra transmisión de modelos de IA está basada en **RS485**, y soporta **hasta 9 clases de reconocimiento** solamente.  
:::

- Haz clic en `Upload Model`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture7.png" style={{width:500, height:'auto'}}/></div>

- Configura la información de tu modelo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture8.png" style={{width:500, height:'auto'}}/></div>

- `Model File`: Para instrucciones detalladas sobre entrenar y exportar un modelo TFLite, por favor consulta esta [guía](https://wiki.seeedstudio.com/es/grove_vision_ai_v2_sscma/)

- `Object`: El nombre de categoría correspondiente al orden de etiquetas del modelo (de 0 a 8). Solo se soportan hasta nueve clases — cualquier clase adicional no será mostrada.

- Haz clic en `Send` y espera el proceso de flasheo

## Análisis de Resultados

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture9.png" style={{width:1000, height:'auto'}}/></div>

- Cada resultado contiene 10 mediciones, que corresponden a los 10 canales RS485:

- Las primeras nueve mediciones representan las puntuaciones de confianza (measurementValue) de cada índice de clase (de 0 a 8).

- La décima medición lleva la información del modelo, incluyendo metadatos relacionados con el modelo de IA desplegado.

## **Soporte Técnico y Discusión de Productos**

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
