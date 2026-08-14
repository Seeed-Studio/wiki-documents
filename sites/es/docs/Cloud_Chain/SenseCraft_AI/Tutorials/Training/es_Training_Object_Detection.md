---
sidebar_position: 3
description: Crea, entrena, prueba y despliega un modelo personalizado de detección de objetos en SenseCraft AI utilizando flujos de trabajo de entrenamiento rápido o de recopilación de imágenes.
title: Entrenamiento de detección de objetos con SenseCraft AI
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/1.9.webp
slug: /sensecraft-ai/tutorials/sensecraft-ai-training-object-detection
aliases:
  - /sensecraft_ai_training_object_detection
last_update:
  date: 11/27/2024
  author: qiuyu wei
createdAt: '2024-11-27'
updatedAt: '2026-08-13'
url: https://wiki.seeedstudio.com/es/sensecraft-ai/tutorials/sensecraft-ai-training-object-detection/
---

# Entrenar un modelo de detección de objetos con SenseCraft AI

## Funciones de la detección de objetos

La plataforma Seeed SenseCraft AI es una herramienta eficiente de entrenamiento de IA diseñada para tareas de detección de objetos. Basada en el avanzado **modelo de detección de objetos YOLO - World**, ofrece dos métodos de entrenamiento prácticos:

- **Entrenamiento rápido**

Características: No se requieren datos de imagen. Simplemente introduce el nombre del objetivo para generar rápidamente un modelo de detección de objetos de una sola clase.
Ventajas: Ideal para escenarios sencillos, permitiendo una creación y despliegue de modelos rápidos.

- **Entrenamiento con recopilación de imágenes**

Características: Combina el nombre del objetivo con los datos de imagen cargados para el entrenamiento.

Ventajas: Aprovecha datos de imagen diversos para mejorar significativamente la precisión de detección del modelo generado, lo que lo hace adecuado para aplicaciones que requieren alta precisión.

Con estos dos métodos, la plataforma SenseCraft cubre diversas necesidades de entrenamiento de modelos de detección de objetos, simplificando la complejidad del desarrollo de IA y garantizando al mismo tiempo usabilidad y precisión.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.0.png" style={{width:750, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_training#/training" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Open SenseCraft AI Training 🖱️</font></span></strong>
    </a>
</div><br />

## Entrenamiento rápido

Crearemos una demostración sencilla para **reconocer personas**. La función de entrenamiento rápido aprovecha las siguientes características principales del modelo de detección de objetos YOLO – World:

La función de entrenamiento rápido utiliza las fortalezas de YOLO para crear de forma eficiente modelos de detección de una sola clase. Al combinar pesos preentrenados, semántica de texto y extracción eficiente de características, genera un modelo a medida, por ejemplo para "human", sin necesidad de datos de imagen.

### Paso 1. Determinar el nombre del objeto

Introduce el nombre del objetivo en el cuadro de texto. Luego haz clic en **'Start Training'**.

:::tip
La sesión de entrenamiento durará de 1 a 3 minutos, ¡así que ten paciencia!
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.1.png" style={{width:1000, height:'auto'}}/></div>

### Paso 2. Entrenar y cargar modelos

Tras completar el entrenamiento del modelo, este se desplegará y se seleccionará Grove Vision AI (V2) para el despliegue. Luego elige el puerto serie correcto para conectarte y, por último, espera pacientemente de 1 a 3 minutos hasta que el entrenamiento del modelo haya finalizado.

:::caution
Actualmente, la selección de dispositivo en Object Detection solo puede admitir **Grove Vision AI (V2)**.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.2.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.3.png" style={{width:1000, height:'auto'}}/></div>

### Demostración de resultados

Tras completar los pasos anteriores, el modelo se desplegará y ejecutará correctamente, pero es necesario prestar atención a la configuración de **Confidence Threshold** y **IoU Threshold value**, ya que afectarán a la capacidad de reconocimiento del modelo.

:::tip
**Confidence Threshold:** La puntuación mínima de confianza que debe tener un modelo para considerar una detección como válida, filtrando las predicciones de baja confianza.

**IoU Threshold:** El valor mínimo de Intersección sobre Unión (IoU) requerido para clasificar una caja delimitadora predicha como un verdadero positivo, garantizando precisión en la medición de solapamiento entre las cajas predicha y real.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.4.png" style={{width:800, height:'auto'}}/></div>

## Entrenamiento con recopilación de imágenes

Haremos una demostración que **reconoce auriculares**. Basándote en el modelo de detección de objetos YOLO – World, puedes personalizar el entrenamiento para texto e imagen, lo que puede mejorar la precisión de detección del modelo generado.

### Paso 1. Determinar el nombre del objeto

Primero introduce el nombre del objetivo en el cuadro de texto y luego selecciona **Grove Vision AI (V2)** para conectarte.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.2.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Si la conexión es correcta, aparecerá una vista previa en vivo de la cámara en el cuadro de la derecha.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.3.png" style={{width:1000, height:'auto'}}/></div>

### Paso 2. Capturar imagen

Luego apunta la cámara al objeto objetivo y haz clic en **'Capture'**, después encuadra el objeto objetivo con un recuadro rojo y, por último, haz clic en **'Confirm'**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.4.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Cuanto más material de imagen haya, mejor será el reconocimiento del modelo.
:::

### Paso 3. Entrenar y cargar modelos

Haz clic en **'Training'** y luego espera pacientemente a que el modelo termine de entrenarse.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.5.png" style={{width:1000, height:'auto'}}/></div>

Y por último llega el momento del despliegue del modelo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.6.png" style={{width:1000, height:'auto'}}/></div>

### Demostración de resultados

Una vez completados los pasos anteriores, el modelo se habrá entrenado y desplegado correctamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.7.gif" style={{width:1000, height:'auto'}}/></div>

## Guías relacionadas

- [Entrenar un modelo de clasificación con SenseCraft AI](/es/sensecraft-ai/tutorials/sensecraft-ai-training-classification/)
- [Explorar la plataforma SenseCraft AI](/es/sensecraft-ai/overview/)
- [Explorar el centro de documentación de SenseCraft AI](/es/sensecraft-ai/sensecraft-ai-main/)

## Soporte técnico y debate sobre productos

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte distintos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
