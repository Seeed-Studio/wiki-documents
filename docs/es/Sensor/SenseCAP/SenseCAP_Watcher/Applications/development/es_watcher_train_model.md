---
description: Desplegar modelo de IA desde SenseCraft en Watcher
title: Entrenamiento de Modelo para Watcher
image: "https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/top3.png"
slug: /es/training_model_for_watcher
sidebar_position: 2
last_update:
  date: 10/9/2024
  author: Jason
---

# Entrenamiento de Modelo para Watcher

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/top3.png" style={{width:1000, height:'auto'}}/></div>

Este artículo de WiKi te enseñará cómo usar nuestro SenseCraft para entrenar tu propio modelo de IA y desplegarlo en nuestro Watcher. Será un proceso muy interesante. Si aún no sabes qué es SenseCraft, por favor haz clic [aquí](https://sensecraft.seeed.cc/). Esta es una plataforma que nos permite desplegar varios modelos de IA de código abierto en dispositivos de Seeed Studio.

## Configuración de Modelo de IA en el Sitio Web SenseCraft

### Paso 1 . Abrir el Sitio Web [SenseCraft](https://sensecraft.seeed.cc/)

Haz clic en "Products" en la barra de menú superior para ver las opciones desplegables, y luego selecciona "SenseCraft AI".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/1.png" style={{width:800, height:'auto'}}/></div>


### Paso 2 . Configurar tipo de entrenamiento

:::tip
**_Recomendamos usar Grove Vision AI (V2) para recopilar datos de entrenamiento desde la cámara aquí, porque Watcher usa el mismo chip que Grove Vision AI V2 (Arm Cortex-M55), por lo que se eligió Grove Vision AI V2 para entrenar el modelo de Watcher, el mejor dispositivo para usar para tomar fotos es aquel en el que se desplegará, lo cual afectará directamente la precisión final._**
:::

Por conveniencia, aquí se usa una cámara de computadora para capturar datos.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/2.png" style={{width:800, height:'auto'}}/></div>

### Paso 3 . Recopilar datos

**Pasos de entrenamiento**

- Agregar Categoría
- Modificar las etiquetas de tu Categoría
- hacer clic en "Hold to Record" en la categoría que has elegido
- elegir Grove Vision AI(V2)
- Iniciar Entrenamiento

En Collect Classification Data puedes agregar la categoría que desees, aquí agregué car y doll como mis categorías y modifiqué las etiquetas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/3.png" style={{width:800, height:'auto'}}/></div>


:::tip
Cuantos más datos se obtengan y más claros sean los píxeles, mejores serán los resultados del entrenamiento.
:::

Después del Entrenamiento, necesitas hacer clic en las etiquetas "Click here" bajo Start Training.

### Paso 4 . Seleccionar Modelo

puedes ver tu archivo de Modelo después de completar el entrenamiento

- hacer clic en tu archivo de Modelo
- hacer clic en "Save to SenseCraft"

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/4.png" style={{width:800, height:'auto'}}/></div>

### Paso 5 . Modelo descriptivo

Por favor proporciona tu **Nombre del Modelo**, **Extracto del Modelo**, **Introducción del Modelo**, **Preparación para el Despliegue del Modelo**. Si haces el modelo público, esta información será muy útil para todos. Esto es solo una prueba, por lo que está escrito apresuradamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/5(2).png" style={{width:800, height:'auto'}}/></div>


:::tip
Selecciona SenseCAP Watcher y Grove-Vision AI V2 en Dispositivos Compatibles.
:::

### Paso 6 . Configurar parámetros del modelo

Puedes elegir el Framework de IA que desees basado en tu modelo.

Umbral de Confianza
- La confianza se refiere al nivel de certeza o probabilidad asignado por un modelo a sus predicciones.

- La confianza es el grado de certeza o probabilidad que un modelo tiene de sus resultados predichos. Usualmente se expresa como un porcentaje, que va del 0% al 100%.

Umbral IOU
- IoU se usa para evaluar la precisión de las cajas delimitadoras predichas comparadas con las cajas delimitadoras de verdad.

- IoU es un indicador importante para evaluar el rendimiento de modelos de detección de objetos. Mide el grado de superposición entre la caja delimitadora predicha y la caja delimitadora real.

- 0% indica ninguna superposición.
- 100% indica superposición completa.

Después de configurar todo, haz clic en Confirmar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/6.png" style={{width:800, height:'auto'}}/></div>

Regresa a Pretrained Models y haz clic en My Own Models para ver el modelo que has entrenado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/7.png" style={{width:800, height:'auto'}}/></div>

## Configuración de SenseCraft APP Watcher

### Paso 1. Elige tu Watcher
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/20.jpg" style={{width:300, height:'auto'}}/></div>

### Paso 2. Encuentra Configurar Tarea Manualmente e ingresa
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/21.jpg" style={{width:300, height:'auto'}}/></div>

### Paso 3. Marca 'Usar Modelo TinyML'
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/22.jpg" style={{width:300, height:'auto'}}/></div>

### Paso 4. Encuentra el modelo que desplegaste

Ingresa el nombre o desplázate hacia abajo para encontrar tu modelo de IA desplegado y márcalo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/23.jpg" style={{width:300, height:'auto'}}/></div>

### Paso 5. Configura el umbral y la condición

La confianza es el grado de confianza que un modelo tiene en sus resultados predichos, típicamente expresado como un valor entre 0 y 1, o un porcentaje entre 0% y 100%.
Por ejemplo, un nivel de confianza del 80% en la salida del modelo indica una probabilidad del 80% de que cree que la predicción es correcta.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/24.jpg" style={{width:300, height:'auto'}}/></div>

### Paso 6. Configura el Nombre de la Tarea

Establece el nombre de la tarea para que puedas enviarlo directamente al visor para ejecutar tu modelo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/25.jpg" style={{width:300, height:'auto'}}/></div>


### Paso 7. Espera a que Watcher Despliegue el Modelo

Una vez que hayas seleccionado el modelo de IA y configurado los parámetros correspondientes, puedes esperar a que el visor lo descargue

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/26.jpg" style={{width:500, height:'auto'}}/></div>


:::tip
Durante este período, la descarga puede fallar debido a otros problemas externos. Solo necesitas volver a seleccionar y configurar los parámetros, y continuar descargando.
:::

## Visualización del Modelo de IA Watcher

### Demostración de resultados

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_Watcher/website/gif.gif" style={{width:500, height:'auto'}}/></div>

Este es el efecto de visualización simple de mi modelo de IA en Watcher. ¡Esperamos que los modelos de IA de todos brillen intensamente en Watcher!

## Soporte Técnico y Discusión de Productos
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
