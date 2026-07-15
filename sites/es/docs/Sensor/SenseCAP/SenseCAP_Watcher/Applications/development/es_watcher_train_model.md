---
description: Implementar modelo de IA desde SenseCraft en Watcher
title: Entrenar modelo para Watcher
image: https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/top3.png
slug: /training_model_for_watcher
sidebar_position: 2
last_update:
  date: 10/9/2024
  author: Jason
createdAt: '2024-10-11'
updatedAt: '2025-09-10'
url: https://wiki.seeedstudio.com/es/training_model_for_watcher/
---

# Entrenar modelo para Watcher

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/top3.png" style={{width:1000, height:'auto'}}/></div>

Este artículo de la Wiki te enseñará cómo usar nuestro SenseCraft para entrenar tu propio modelo de IA e implementarlo en nuestro Watcher. Será un proceso muy interesante. Si aún no sabes qué es SenseCraft, haz clic [aquí](https://sensecraft.seeed.cc/). Esta es una plataforma que nos permite implementar varios modelos de IA de código abierto en dispositivos de Seeed Studio.

## Configurar modelo de IA en el sitio web de SenseCraft

### Paso 1. Abre [SenseCraft AI](https://sensecraft.seeed.cc/ai)

Abre la plataforma [SenseCraft AI](https://sensecraft.seeed.cc/ai), luego navega a **`Models`** > **`Training`** para comenzar a entrenar un modelo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/1.png" style={{width:800, height:'auto'}}/></div>

### Paso 2. Configurar tipo de entrenamiento

:::tip
**_Recomendamos usar Grove Vision AI (V2) para recopilar datos de entrenamiento desde la cámara aquí, porque Watcher usa el mismo chip que Grove Vision AI V2 (Arm Cortex-M55), por lo que se eligió Grove Vision AI V2 para entrenar el modelo de Watcher. El mejor dispositivo para tomar fotos es aquel en el que se va a implementar, lo que afectará directamente a la precisión final._**
:::

Para mayor comodidad, aquí se utiliza una cámara de computadora para capturar datos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/2.png" style={{width:800, height:'auto'}}/></div>

### Paso 3. Recopilar datos

**Pasos de entrenamiento**

- Añadir categoría
- Modificar las etiquetas de tu categoría
- Haz clic en "Hold to Record" en la categoría que hayas elegido
- Elige Grove Vision AI(V2)
- Iniciar entrenamiento

En Collect Classification Data puedes añadir la categoría que quieras; aquí añadí coche y muñeca como mis categorías y modifiqué las etiquetas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/3.png" style={{width:800, height:'auto'}}/></div>

:::tip
Cuantos más datos se obtengan y más claros sean los píxeles, mejores serán los resultados del entrenamiento.
:::

Después del entrenamiento, necesitas hacer clic en las etiquetas "Click here" debajo de Start Training.

### Paso 4. Seleccionar modelo

Puedes ver tu archivo de modelo después de completar el entrenamiento

- Haz clic en tu archivo de modelo
- Haz clic en "Save to SenseCraft"

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/4.png" style={{width:800, height:'auto'}}/></div>

### Paso 5. Descripción del modelo

Proporciona tu **nombre del modelo**, **resumen del modelo**, **introducción del modelo**, **preparación para la implementación del modelo**. Si haces público el modelo, esta información será muy útil para todos. Esto es solo una prueba, así que está escrito apresuradamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/5(2).png" style={{width:800, height:'auto'}}/></div>

:::tip
Selecciona SenseCAP Watcher y Grove-Vision AI V2 en Supported Devices.
:::

### Paso 6. Configurar parámetros del modelo

Puedes elegir el marco de IA que quieras según tu modelo.

Umbral de confianza

- La confianza se refiere al nivel de certeza o probabilidad que un modelo asigna a sus predicciones.

- La confianza es el grado de certeza o probabilidad que tiene un modelo sobre sus resultados predichos. Normalmente se expresa como un porcentaje, que va del 0% al 100%.

Umbral de IoU

- IoU se utiliza para evaluar la precisión de los cuadros delimitadores predichos en comparación con los cuadros delimitadores reales.

- IoU es un indicador importante para evaluar el rendimiento de los modelos de detección de objetos. Mide el grado de superposición entre el cuadro delimitador predicho y el cuadro delimitador real.

- 0% indica que no hay superposición.
- 100% indica superposición completa.

Después de configurar todo, haz clic en Confirm.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/6.png" style={{width:800, height:'auto'}}/></div>

Abre **`Models`** > **`My Models`** para ver el modelo que has entrenado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/7.png" style={{width:800, height:'auto'}}/></div>

## Configurar Watcher en la APP de SenseCraft

### Paso 1. Elige tu Watcher

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/20.jpg" style={{width:300, height:'auto'}}/></div>

### Paso 2. Busca Manually Set Up Task y entra

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/21.jpg" style={{width:300, height:'auto'}}/></div>

### Paso 3. Marca 'Use TinyML Model'

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/22.jpg" style={{width:300, height:'auto'}}/></div>

### Paso 4. Encuentra el modelo que implementaste

Introduce el nombre o desplázate hacia abajo para encontrar tu modelo de IA implementado y márcalo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/23.jpg" style={{width:300, height:'auto'}}/></div>

### Paso 5. Configurar umbral y condición

La confianza es el grado de seguridad que tiene un modelo en sus resultados predichos, normalmente expresado como un valor entre 0 y 1, o un porcentaje entre 0% y 100%.
Por ejemplo, un nivel de confianza del 80% en la salida del modelo indica una probabilidad del 80% de que considere que la predicción es correcta.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/24.jpg" style={{width:300, height:'auto'}}/></div>

### Paso 6. Configurar nombre de la tarea

Configura el nombre de la tarea para que puedas enviarla directamente al Watcher para ejecutar tu modelo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/25.jpg" style={{width:300, height:'auto'}}/></div>

### Paso 7. Esperar a que Watcher implemente el modelo

Una vez que hayas seleccionado el modelo de IA y configurado los parámetros correspondientes, puedes esperar a que el Watcher lo descargue

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/26.jpg" style={{width:500, height:'auto'}}/></div>

:::tip
Durante este período, la descarga puede fallar debido a otros problemas externos. Solo necesitas volver a seleccionar y configurar los parámetros y continuar la descarga.
:::

## Visualización del modelo de IA en Watcher

### Demostración de resultados

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/gif.gif" style={{width:500, height:'auto'}}/></div>

Este es el sencillo efecto de visualización de mi modelo de IA en Watcher. ¡Esperamos que los modelos de IA de todos brillen intensamente en Watcher!

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
