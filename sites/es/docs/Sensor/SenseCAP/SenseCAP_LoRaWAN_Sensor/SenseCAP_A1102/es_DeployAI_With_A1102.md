---
description: Desplegar_IA_con_A1102
title: Despliegue de modelos de IA en SenseCAP A1102 usando SenseCraft AI
keywords:
  - Sensor Vision_AI_V2
  - SenseCAP A1102
  - SenseCraft AI
  - Custom AI model
image: https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/20.webp
slug: /deploy_ai_with_a1102
sidebar_position: 3
last_update:
  date: 12/31/2025
  author: Twelve
createdAt: '2025-11-26'
updatedAt: '2025-12-31'
url: https://wiki.seeedstudio.com/es/deploy_ai_with_a1102/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Despliegue de modelos de IA en SenseCAP A1102 usando SenseCraft AI

## Descripción general

El SenseCAP A1102 es un potente dispositivo sensor que combina avanzadas capacidades de IA con facilidad de despliegue. Esta guía te explicará cómo desplegar modelos de IA oficiales o personalizados en el A1102 usando el sitio web **SenseCraft AI**, ofreciendo instrucciones paso a paso para la configuración, el despliegue y las pruebas.

<div class="info-section">
  <div class="section-header">
      <h2>Despliega modelos de IA en SenseCAP A1102</h2>
      <p>Entrena y despliega tus modelos de IA: potencia tus cámaras LoRaWAN con modelos de IA personalizados u oficiales para análisis en tiempo real. SenseCAP A1102 puede proporcionar la flexibilidad para llevar información basada en IA a tus aplicaciones.</p>
  </div>
  <ul class="info-list">
      <li class="info-item">
          <div class="info-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 5h-4l-1-1h-6l-1 1H4c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2V7c0-1.104-.896-2-2-2zM12 17c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path>
            </svg>
          </div>
          <div class="info-content">
              <h3>Despliegue de modelos de IA personalizados con cámaras LoRaWAN</h3>
              <p>Con SenseCAP A1102, puedes entrenar tus propios modelos de IA y desplegarlos directamente en cámaras con LoRaWAN habilitado. Esto permite la detección de objetos en tiempo real. La integración perfecta con LoRaWAN garantiza que la información generada por tu IA sea accesible y procesable in situ.</p>
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
              <h3>Uso de modelos preentrenados o modelos personalizados</h3>
              <p>SenseCAP A1102 es compatible con una amplia gama de modelos de IA preentrenados, así como con la posibilidad de entrenar modelos personalizados utilizando conjuntos de datos públicos o personalizados, como los que se encuentran en Roboflow Universe. Esta flexibilidad te permite desplegar fácilmente modelos específicamente adaptados a tus casos de uso.</p>
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
              <h3>Aplicaciones versátiles</h3>
              <p>SenseCAP A1102 puede desplegarse en diversas aplicaciones del mundo real. Ya sea para monitorizar el estado de las hojas de las plantas en agricultura, detectar la ocupación de plazas de aparcamiento en entornos urbanos o rastrear la posición de embarcaciones en zonas marítimas, tus modelos de IA pueden adaptarse a tus necesidades específicas.</p>
          </div>
      </li>
  </ul>
</div>


## Requisitos previos

### Hardware necesario

- Dispositivo SenseCAP A1102  
- Cable de datos USB tipo C  
- PC  

### Software necesario
- [Plataforma SenseCraft AI](https://sensecraft.seeed.cc/ai/home)

## Proceso de despliegue de modelos de IA oficiales

**Paso 1.** Accede al espacio de trabajo de SenseCAP A1102 a través de **[`SenseCraft AI`](https://sensecraft.seeed.cc/ai)** > **`Models`** > **`Workspace`** > **`SenseCAP A1102`**, o utiliza este [enlace directo al espacio de trabajo](https://sensecraft.seeed.cc/ai/device/local/37).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/sensecap_a1102_workspace.png" style={{width:1000, height:'auto'}}/></div>

**Paso 2. Conéctate a nuestra plataforma por puerto serie**

- Utiliza un cable tipo C para conectar el dispositivo a tu PC (asegúrate de conectarte al puerto tipo C superior, que es el puerto serie Himax, como se muestra en la imagen siguiente).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture3.png" style={{width:400, height:'auto'}}/></div>

- Haz clic en `Connect` 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture4.png" style={{width:1000, height:'auto'}}/></div>

- Selecciona el puerto serie correcto y haz clic en `Connect` en la ventana emergente

Si se selecciona el puerto correcto, podrás ver la transmisión de vídeo de vista previa mediante Invoke y continuar normalmente con la selección y grabación del modelo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture5.png" style={{width:1000, height:'auto'}}/></div>

**Paso 3. Selecciona el modelo de IA que quieres desplegar en el dispositivo**

- Haz clic en `Select Model`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture6.png" style={{width:500, height:'auto'}}/></div>

- Elige entre modelos públicos o tus propios modelos entrenados en SenseCraft AI

- El proceso de grabación comenzará después de que hagas clic en el modelo

:::note
¡Tu dispositivo ahora está usando el modelo de IA que has desplegado para detectar y subir resultados! Por favor, ve a tu APP u otra plataforma para visualizarlo.
:::

## Proceso de despliegue de modelos de IA personalizados

:::warning note
Nuestro modelo de IA se puede entrenar con muchas clases, pero dado que los resultados de reconocimiento se transmiten a través de **S2100**, solo las **primeras 9 clases** son compatibles de forma efectiva para el reporte.
:::

**Paso 1. Obtén tu conjunto de datos desde Roboflow**

- [Crea una cuenta gratuita de Roboflow](https://app.roboflow.com/) 

- Si necesitas un conjunto de datos de código abierto, ve a [Roboflow Universe](https://universe.roboflow.com/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p1.png" style={{width:800, height:'auto'}}/></div>

- Si quieres usar tus propias imágenes y etiquetarlas para obtener un conjunto de datos, ve a [Roboflow](https://app.roboflow.com/) para crear un **Project**

:::warning note
Cuando uses tus propias imágenes, presta especial atención al orden de las etiquetas.
Solo las primeras 9 clases (índices de etiqueta 0–8) son válidas y pueden ser reconocidas por el A1102.
Si tu conjunto de datos contiene más de 9 clases, debes seleccionar solo las nueve clases necesarias eliminando las demás antes de exportar el modelo.
:::

**Paso 2. Exporta tu conjunto de datos desde Roboflow**

- Haz clic en Overview y comprueba las clases

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p7.png" style={{width:800, height:'auto'}}/></div>

:::danger note 
El orden de las clases que se muestra corresponde al orden de los índices de etiqueta. Por lo tanto, solo las primeras 9 clases (índices de etiqueta 0–8) pueden subirse correctamente como resultados de reconocimiento en el A1102.
Si tu modelo contiene más de 9 clases, debes seleccionar las nueve clases que necesitas clonando el conjunto de datos en tu propio proyecto, eliminando las otras etiquetas y luego exportando de nuevo el conjunto de datos.
:::

- En el proyecto, haz clic en `Dataset`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p2.png" style={{width:300, height:'auto'}}/></div>

- Haz clic en `Download Dataset`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p3.png" style={{width:800, height:'auto'}}/></div>

- Haz clic en `Download Dataset`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p4.png" style={{width:500, height:'auto'}}/></div>

- Selecciona `COCO` y `Show download code`, luego haz clic en `Continue`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p5.png" style={{width:500, height:'auto'}}/></div>

- Copia la **Raw URL** que se utilizará en el proceso de entrenamiento del modelo de IA

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/TrainModel/p6.png" style={{width:600, height:'auto'}}/></div>

**Paso 3. Entrena tu modelo de IA con el conjunto de datos**

- Sigue la [guía rápida de entrenamiento de modelos](https://wiki.seeedstudio.com/es/grove_vision_ai_v2_sscma#training-dataset-exported-model) para entrenar tu modelo de IA con el conjunto de datos que has preparado.

- Una vez finalizado el entrenamiento, exporta el modelo entrenado en formato .tflite, que se utilizará para el despliegue en el dispositivo.

**Paso 4. Sube y graba el modelo de IA personalizado**

- Accede al espacio de trabajo de SenseCAP A1102 a través de **[`SenseCraft AI`](https://sensecraft.seeed.cc/ai)** > **`Models`** > **`Workspace`** > **`SenseCAP A1102`**, o utiliza este [enlace directo al espacio de trabajo](https://sensecraft.seeed.cc/ai/device/local/37).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/sensecap_a1102_workspace.png" style={{width:1000, height:'auto'}}/></div>

- Conéctate a nuestra plataforma por puerto serie

- Utiliza un cable tipo C para conectar el dispositivo a tu PC (asegúrate de conectarte al puerto tipo C superior, que es el puerto serie Himax, como se muestra en la imagen siguiente).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture3.png" style={{width:400, height:'auto'}}/></div>

- Haz clic en `Connect` 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture4.png" style={{width:1000, height:'auto'}}/></div>

- Selecciona el puerto serie correcto y haz clic en `Connect` en la ventana emergente

- Haz clic en `Upload Model`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture7.png" style={{width:500, height:'auto'}}/></div>

- Configura la información de tu modelo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture8.png" style={{width:500, height:'auto'}}/></div>

- `Model File`: Para obtener instrucciones detalladas sobre el entrenamiento y la exportación de un modelo TFLite, consulta esta [guía](https://wiki.seeedstudio.com/es/grove_vision_ai_v2_sscma/)

- `Object`: El nombre de la categoría que corresponde al orden de las etiquetas del modelo (de 0 a 8). Solo se admiten hasta nueve clases; cualquier clase adicional no se mostrará.

- Haz clic en `Send` y espera al proceso de flasheo

## Análisis de resultados en [Seeed Portal](https://sensecap.seeed.cc/portal/#/dashboard)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture11.png" style={{width:1000, height:'auto'}}/></div>

- El primer valor es la marca de tiempo del informe de datos

- Los siguientes nueve valores representan las puntuaciones de confianza (measurementValue) de cada índice de clase (de 0 a 8).

- El valor final contiene la información del modelo, incluida la metainformación relacionada con el modelo de IA implementado.

## Análisis de resultados en [TTN](https://eu1.cloud.thethings.network/console/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/A1102/SenseCraft_AI_With_A1102/modified/picture9.png" style={{width:1000, height:'auto'}}/></div>

- Cada resultado contiene 10 mediciones, que corresponden a los 10 canales RS485.

- Las primeras nueve mediciones representan las puntuaciones de confianza (measurementValue) de cada índice de clase (de 0 a 8).

- La décima medición contiene la información del modelo, incluida la metainformación relacionada con el modelo de IA implementado.

## Preguntas frecuentes

**P: ¿Qué tipo de modelo personalizado puedo subir?**

R: Puedes subir modelos con la extensión de archivo .tflite. Puedes entrenar y exportar tus propios modelos siguiendo las instrucciones en [Inicio rápido de entrenamiento de modelos](https://wiki.seeedstudio.com/es/grove_vision_ai_v2_sscma/#inicio-rápido-de-entrenamiento-de-modelos).

## **Soporte técnico y debate sobre el producto**

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
