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
  date: 12/31/2025
  author: Twelve
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Desplegando Modelos de IA en SenseCAP A1102 Usando SenseCraft AI

## Descripción General

El SenseCAP A1102 es un dispositivo sensor potente que combina capacidades avanzadas de IA con facilidad de despliegue. Esta guía te llevará a través del despliegue de modelos de IA oficiales o personalizados en el A1102 usando el sitio web **SenseCraft AI**, ofreciendo instrucciones paso a paso para configuración, despliegue y pruebas.

<div class="info-section">
  <div class="section-header">
      <h2>Desplegar Modelos de IA en SenseCAP A1102</h2>
      <p>Entrena y Despliega Tus Modelos de IA: Potencia tus cámaras LoRaWAN con modelos de IA personalizados u oficiales para análisis en tiempo real. SenseCAP A1102 puede proporcionar la flexibilidad para llevar insights impulsados por IA a tus aplicaciones.</p>
  </div>
  <ul class="info-list">
      <li class="info-item">
          <div class="info-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 5h-4l-1-1h-6l-1 1H4c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2V7c0-1.104-.896-2-2-2zM12 17c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
            </svg>
          </div>
          <div class="info-content">
              <h3>Despliegue de Modelos de IA Personalizados con Cámaras LoRaWAN</h3>
              <p>Con SenseCAP A1102, puedes entrenar tus propios modelos de IA y desplegarlos directamente en cámaras habilitadas para LoRaWAN. Esto permite la detección de objetos en tiempo real. La integración perfecta con LoRaWAN asegura que tus insights impulsados por IA sean accesibles y accionables en el sitio.</p>
          </div>
      </li>
      <li class="info-item">
          <div class="info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                  <path d="M3 3v5h5"></path>
                  <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
                  <path d="M16 21h5v-5"></path>
              </svg>
          </div>
          <div class="info-content">
              <h3>Uso de Modelos Pre-entrenados o Modelos Personalizados</h3>
              <p>SenseCAP A1102 soporta una amplia gama de modelos de IA pre-entrenados, así como la capacidad de entrenar modelos personalizados usando conjuntos de datos disponibles públicamente o personalizados, como los que se encuentran en Roboflow Universe. Esta flexibilidad te permite desplegar fácilmente modelos que están específicamente adaptados a tus casos de uso.</p>
          </div>
      </li>
      <li class="info-item">
          <div class="info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                  <line x1="6" y1="6" x2="6.01" y2="6"></line>
                  <line x1="6" y1="18" x2="6.01" y2="18"></line>
              </svg>
          </div>
          <div class="info-content">
              <h3>Aplicaciones Versátiles</h3>
              <p>SenseCAP A1102 puede ser desplegado en varias aplicaciones del mundo real. Ya sea monitoreando la salud de las hojas de plantas en agricultura, detectando la ocupación de espacios de estacionamiento en entornos urbanos, o rastreando posiciones de embarcaciones en áreas marítimas, tus modelos de IA pueden adaptarse a tus necesidades específicas.</p>
          </div>
      </li>
  </ul>
</div>


## Prerrequisitos

### Hardware Requerido

- Dispositivo SenseCAP A1102  
- Cable de datos USB Type-C  
- PC  

### Software Requerido
- [Plataforma SenseCraft AI](https://sensecraft.seeed.cc/ai/home)

## Proceso de Despliegue de Modelo de IA Oficial

### Paso 1. Abrir nuestra plataforma y Seleccionar A1102 en el Espacio de Trabajo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture2.png" style={{width:1000, height:'auto'}}/></div>

### Paso 2. Conectar a nuestra Plataforma por puerto serie

- Usa un cable Type-C para conectar el dispositivo a tu PC (asegúrate de estar conectando al puerto Type-C superior, que es el puerto serie Himax, como se muestra en la imagen a continuación).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture3.png" style={{width:400, height:'auto'}}/></div>

- Haz clic en `Connect` 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture4.png" style={{width:1000, height:'auto'}}/></div>

- Selecciona el puerto serie correcto y haz clic en `Connect` en la ventana emergente

Si se selecciona el puerto correcto, podrás ver la transmisión de video de vista previa a través de Invoke y proceder con la selección y flasheo del modelo normalmente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture5.png" style={{width:1000, height:'auto'}}/></div>

### Paso 3. Seleccionar el modelo de IA que quieres desplegar en el dispositivo

- Haz clic en `Select Model`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture6.png" style={{width:500, height:'auto'}}/></div>

- Elige entre Modelos Públicos o tus propios modelos entrenados en SenseCraft AI

- El proceso de flasheo comenzará después de que hagas clic en el modelo

:::note
¡Tu dispositivo ahora está usando el modelo de IA que desplegaste para detectar y subir resultados! Por favor navega a tu APP u otra plataforma para ver.
:::

## Proceso de Despliegue de Modelo de IA Personalizado

:::warning note
Nuestro modelo de IA puede ser entrenado con muchas clases, pero dado que los resultados de reconocimiento se transmiten vía **S2100**, solo las **primeras 9 clases** son efectivamente soportadas para reportes.
:::

### Paso 1. Obtener tu conjunto de datos de Roboflow

- [Crear una cuenta gratuita de Roboflow](https://app.roboflow.com/) 

- Si necesitas un conjunto de datos de código abierto, por favor navega a [Roboflow Universe](https://universe.roboflow.com/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p1.png" style={{width:800, height:'auto'}}/></div>

- Si quieres usar tus propias imágenes y etiquetarlas para obtener un conjunto de datos, por favor navega a [Roboflow](https://app.roboflow.com/) para crear un **Proyecto**

:::warning note
Cuando uses tus propias imágenes, por favor presta especial atención al orden de las etiquetas.
Solo las primeras 9 clases (índices de etiqueta 0–8) son válidas y pueden ser reconocidas por el A1102.
Si tu conjunto de datos contiene más de 9 clases, debes seleccionar solo las nueve clases requeridas eliminando las otras antes de exportar el modelo.
:::

### Paso 2. Exportar tu conjunto de datos de Roboflow

- Haz clic en Overview y Verifica las clases

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p7.png" style={{width:800, height:'auto'}}/></div>

:::danger note 
El orden de las clases mostradas corresponde al orden del índice de etiquetas. Por lo tanto, solo las primeras 9 clases (índices de etiqueta 0–8) pueden ser correctamente subidas como resultados de reconocimiento en el A1102.
Si tu modelo contiene más de 9 clases, debes seleccionar las nueve clases que necesitas clonando el conjunto de datos en tu propio proyecto, eliminando las otras etiquetas, y luego exportando el conjunto de datos nuevamente.
:::

- En el proyecto, Haz clic en `Dataset`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p2.png" style={{width:300, height:'auto'}}/></div>

- Haz clic en `Download Dataset`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p3.png" style={{width:800, height:'auto'}}/></div>

- Haz clic en `Download Dataset`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p4.png" style={{width:500, height:'auto'}}/></div>

- Selecciona `COCO` y `Show download code`, luego Haz clic en `Continue`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p5.png" style={{width:500, height:'auto'}}/></div>

- Copia la **Raw URL** que será usada en el proceso de entrenamiento del modelo de IA

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p6.png" style={{width:600, height:'auto'}}/></div>

### Paso 3. Entrenar tu modelo de IA con el conjunto de datos

- Sigue el [Inicio rápido de entrenamiento de modelos](https://wiki.seeedstudio.com/es/grove_vision_ai_v2_sscma#training-dataset-exported-model) para entrenar tu modelo de IA con tu conjunto de datos preparado.

- Después de que el entrenamiento esté completo, exporta el modelo entrenado en formato .tflite, que será usado para el despliegue en el dispositivo.

### Paso 4. Subir y flashear el Modelo de IA personalizado 

- Abre nuestra [plataforma](https://sensecraft.seeed.cc/ai/home) y Selecciona A1102 en el Espacio de Trabajo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture2.png" style={{width:1000, height:'auto'}}/></div>

- Conectar a nuestra Plataforma por puerto serie

- Usa un cable Type-C para conectar el dispositivo a tu PC (asegúrate de estar conectando al puerto Type-C superior, que es el puerto serie Himax, como se muestra en la imagen a continuación).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture3.png" style={{width:400, height:'auto'}}/></div>

- Haz clic en `Connect` 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture4.png" style={{width:1000, height:'auto'}}/></div>

- Selecciona el puerto serie correcto y haz clic en `Connect` en la ventana emergente

- Haz clic en `Upload Model`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture7.png" style={{width:500, height:'auto'}}/></div>

- Configura la información de tu modelo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture8.png" style={{width:500, height:'auto'}}/></div>

- `Model File`: Para instrucciones detalladas sobre el entrenamiento y exportación de un modelo TFLite, consulta esta [guía](https://wiki.seeedstudio.com/es/grove_vision_ai_v2_sscma/)

- `Object`: El nombre de categoría correspondiente al orden de etiquetas del modelo (de 0 a 8). Solo se admiten hasta nueve clases — cualquier clase adicional no se mostrará.

- Haz clic en `Send` y espera el proceso de flasheo

## Análisis de Resultados en [Seeed Portal](https://sensecap.seeed.cc/portal/#/dashboard)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture11.png" style={{width:1000, height:'auto'}}/></div>

- El primer valor es la marca de tiempo del reporte de datos

- Los siguientes nueve valores representan las puntuaciones de confianza (measurementValue) de cada índice de clase (de 0 a 8).

- El valor final contiene la información del modelo, incluyendo metadatos relacionados con el modelo de IA desplegado.

## Análisis de Resultados en [TTN](https://eu1.cloud.thethings.network/console/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture9.png" style={{width:1000, height:'auto'}}/></div>

- Cada resultado contiene 10 mediciones, que corresponden a los 10 canales RS485.

- Las primeras nueve mediciones representan las puntuaciones de confianza (measurementValue) de cada índice de clase (de 0 a 8).

- La décima medición contiene la información del modelo, incluyendo metadatos relacionados con el modelo de IA desplegado.

## FAQ

**P: ¿Qué tipo de modelo personalizado puedo subir?**

R: Puedes subir modelos con extensión de archivo .tflite. Puedes entrenar y exportar tus propios modelos siguiendo las instrucciones en [Inicio rápido de entrenamiento de modelos](https://wiki.seeedstudio.com/es/grove_vision_ai_v2_sscma/#training-dataset-exported-model).

## **Soporte Técnico y Discusión de Productos**

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
