---
sidebar_position: 3
description: Cómo usar Entrenamiento (Detección de Objetos)
title: Entrenamiento - Detección de Objetos
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/1.9.webp
slug: /es/sensecraft-ai/tutorials/sensecraft-ai-training-object-detection
aliases:
  - /es/sensecraft_ai_training_object_detection
last_update:
  date: 11/27/2024
  author: qiuyu wei
---

# Tipo de entrenamiento - Detección de Objetos

## Características de la detección de objetos

La Plataforma Seeed SenseCraft AI es una herramienta de entrenamiento de IA eficiente diseñada para tareas de detección de objetos. Construida sobre el avanzado **modelo de detección de objetos YOLO - World**, ofrece dos métodos de entrenamiento convenientes:

- **Entrenamiento Rápido**

Características: No se requieren datos de imagen. Simplemente ingrese el nombre del objetivo para generar rápidamente un modelo de detección de objetos de una sola clase.
Ventajas: Ideal para escenarios sencillos, permitiendo la creación y despliegue rápido de modelos.

- **Entrenamiento con Recolección de Imágenes**

Características: Combina el nombre del objetivo con datos de imagen cargados para el entrenamiento.

Ventajas: Aprovecha datos de imagen diversos para mejorar significativamente la precisión de detección del modelo generado, haciéndolo adecuado para aplicaciones que requieren alta precisión.

Con estos dos métodos, la plataforma SenseCraft atiende diversas necesidades de entrenamiento de modelos de detección de objetos, simplificando las complejidades del desarrollo de IA mientras asegura tanto usabilidad como precisión.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.0.png" style={{width:750, height:'auto'}}/></div>

## Entrenamiento Rápido

Crearemos una demostración simple para **reconocer humanos**. La función de entrenamiento rápido aprovecha las siguientes características principales del modelo de detección de objetos YOLO – World:

La función de entrenamiento rápido utiliza las fortalezas de YOLO para crear eficientemente modelos de detección de una sola clase. Al combinar pesos preentrenados, semántica de texto y extracción eficiente de características, genera un modelo personalizado, como para "humano", sin requerir datos de imagen.
ç

### Paso 1. Determinar el nombre del objeto

Ingrese el nombre del objetivo en el cuadro de texto. Luego haga clic en **'Iniciar Entrenamiento'**.

:::tip
¡La sesión de entrenamiento durará 1-3 minutos, así que tenga paciencia!
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.1.png" style={{width:1000, height:'auto'}}/></div>

### Paso 2. Entrenar y cargar modelos

Después de completar el entrenamiento del modelo, el modelo será desplegado y se seleccionará Grove Vision AI (V2) para el despliegue. Luego elija el puerto serie correcto para conectarse, y finalmente espere pacientemente 1-3 minutos hasta saber que el entrenamiento del modelo está completo.

:::caution
Actualmente la selección de dispositivo en Detección de Objetos solo puede soportar **Grove Vision AI (V2)**.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.2.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.3.png" style={{width:1000, height:'auto'}}/></div>

### Demostración de resultados

Después de completar los pasos anteriores, el modelo será desplegado y ejecutado exitosamente, pero se debe tener cuidado con la configuración del **Umbral de Confianza** y el **valor del Umbral IoU**, que afectarán la capacidad de reconocimiento del modelo.

:::tip
**Umbral de Confianza:** La puntuación mínima de confianza que debe tener un modelo para considerar una detección válida, filtrando predicciones de baja confianza.

**Umbral IoU:** El valor mínimo de Intersección sobre Unión (IoU) requerido para clasificar una caja delimitadora predicha como un verdadero positivo, asegurando precisión en la medición de superposición entre cajas predichas y de verdad fundamental.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/2.4.png" style={{width:800, height:'auto'}}/></div>

## Entrenamiento con Recolección de Imágenes

Haremos una demostración que **reconoce auriculares**. Basado en el modelo de detección de objetos YOLO – World, puede personalizar el entrenamiento para texto e imagen, lo que puede mejorar la precisión de detección del modelo generado.

### Paso 1. Determinar el nombre del objeto

Primero ingrese el nombre del objetivo en el cuadro de texto y luego seleccione **Grove Vision AI (V2)** para conectar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.2.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Si la conexión es exitosa, aparecerá una vista previa en vivo de la cámara en el cuadro de la derecha.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.3.png" style={{width:1000, height:'auto'}}/></div>

### Paso 2. Capturar Imagen

Luego apunte la cámara al objeto objetivo y haga clic en **'Capturar'**, luego enmarque el objeto objetivo con un cuadro rojo y finalmente haga clic en **'Confirmar'**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.4.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Cuanto más material de imagen, mejor será el reconocimiento del modelo.
:::

### Paso 3. Entrenar y cargar modelos

Haga clic en **'Entrenamiento'** y luego espere pacientemente a que el modelo termine de entrenar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.5.png" style={{width:1000, height:'auto'}}/></div>

Y finalmente es momento del despliegue del modelo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.6.png" style={{width:1000, height:'auto'}}/></div>

### Demostración de resultados

Una vez que se completen los pasos anteriores, el modelo será entrenado y desplegado exitosamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img3/object%20detection/3.7.gif" style={{width:1000, height:'auto'}}/></div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
