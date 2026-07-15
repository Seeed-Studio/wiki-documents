---
sidebar_position: 5
description: Cómo usar Entrenamiento(Clasificación)
title: Entrenamiento - Clasificación
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/34.webp
slug: /sensecraft-ai/tutorials/sensecraft-ai-training-classification
aliases:
  - /sensecraft_ai_training_classification
last_update:
  date: 12/03/2024
  author: Citric
createdAt: '2025-09-03'
updatedAt: '2026-03-04'
url: https://wiki.seeedstudio.com/es/sensecraft-ai/tutorials/sensecraft-ai-training-classification/
---

# Tipo de entrenamiento - Clasificación

La clasificación es una herramienta poderosa en el aprendizaje automático que te permite entrenar un modelo para reconocer y categorizar diferentes tipos de datos. En la plataforma SenseCraft AI, la clasificación te permite crear modelos que pueden identificar y distinguir entre varios objetos, gestos o escenas basándose en las imágenes que proporcionas durante el entrenamiento.

Al entrenar un modelo de clasificación con SenseCraft AI, puedes desbloquear una amplia gama de aplicaciones, tales como:

- Reconocimiento de gestos para experiencias interactivas

- Detección de objetos para gestión de inventario o control de calidad

- Clasificación de escenas para navegación autónoma o monitoreo ambiental

La plataforma SenseCraft AI simplifica el proceso de clasificación, permitiéndote crear modelos personalizados adaptados a tus necesidades específicas sin requerir experiencia extensa en aprendizaje automático.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/34.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/training" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Un Clic Directo 🖱️</font></span></strong>
    </a>
</div><br />

## Primeros Pasos

En esta guía completa, te guiaremos a través del proceso de entrenar un modelo de clasificación usando la plataforma SenseCraft AI. Aunque nuestro enfoque principal será entrenar un modelo para el XIAO ESP32S3 Sense, es importante notar que esta plataforma también es compatible con otros dispositivos de Seeed Studio, como el Grove Vision AI y Watcher.

¿No tienes un dispositivo de Seeed Studio? ¡No hay problema! Aún puedes seguir adelante y experimentar el proceso de entrenamiento usando la cámara integrada de tu laptop. Sin embargo, para un rendimiento óptimo y los mejores resultados, recomendamos usar el dispositivo objetivo para entrenar y desplegar tu modelo.

## Entrenar un modelo para reconocer gestos corporales

Para este tutorial, crearemos un modelo que reconoce cuatro gestos corporales distintos: brazos cruzados, brazos abiertos, parado en posición de atención, y haciendo forma de corazón con las manos.

:::tip
La plataforma SenseCraft AI soporta hasta 200 categorías para clasificación, dándote amplia flexibilidad para crear modelos adaptados a tus necesidades específicas.
:::

### Paso 1. Conecta tu dispositivo

Si estás usando un dispositivo de Seeed Studio como el XIAO ESP32S3 Sense, conéctalo a tu computadora vía cable USB-C. Selecciona el dispositivo correspondiente del menú desplegable y haz clic en **Conectar**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/35.png" style={{width:1000, height:'auto'}}/></div>

Elige el **puerto serie correcto** para la conexión.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/36.png" style={{width:1000, height:'auto'}}/></div>

Si estás usando la cámara de tu laptop, puedes omitir este paso. Porque cuando llegas a esta página, automáticamente muestra la transmisión en vivo de la cámara. Si no lo hace, por favor verifica los permisos de tu navegador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/37.png" style={{width:1000, height:'auto'}}/></div>

:::note
Por favor usa **Microsoft Edge** o **Google Chrome**.
:::

### Paso 2. Crear y etiquetar categorías

Haz clic en el botón del lápiz a la derecha de un nombre de clase existente para renombrar una clase ya existente. Haz clic en el botón **Agregar una Clase** abajo para crear cuatro categorías para los gestos corporales que quieres reconocer.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/38.png" style={{width:600, height:'auto'}}/></div>

Etiqueta las categorías como sigue: "Brazos Cruzados," "Brazos Abiertos," "Parado en Atención," y "Forma de Corazón." Verifica dos veces que cada categoría esté nombrada correctamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/39.png" style={{width:600, height:'auto'}}/></div>

### Paso 3. Capturar datos de entrenamiento

Selecciona la primera categoría (ej., "Brazos Cruzados") de la lista. Posiciónate frente a la cámara, realizando el gesto corporal correspondiente. Presiona y mantén el botón **Mantener para Grabar** para capturar imágenes del gesto. Suelta el botón para detener la grabación. Apunta a capturar **al menos 40 imágenes** por categoría para asegurar un modelo robusto y preciso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/40.png" style={{width:1000, height:'auto'}}/></div>

Repite este proceso para cada una de las categorías restantes, capturando una gama diversa de imágenes para cada gesto.

:::tip
Mientras más imágenes de alta calidad y relevantes recolectes para cada categoría, mejor será el rendimiento del modelo. Apunta a la variedad en iluminación, ángulos y fondos para mejorar las capacidades de generalización del modelo.
:::

### Paso 4. Entrenar el modelo

Una vez que hayas recolectado un número suficiente de imágenes para cada categoría, haz clic en el botón **'Iniciar Entrenamiento'** para iniciar el proceso de entrenamiento del modelo. El proceso de entrenamiento típicamente toma entre 1-3 minutos, dependiendo de la complejidad del modelo y la cantidad de datos de entrenamiento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/41.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Por favor **no** cierres inmediatamente la página web mientras entrenas el modelo, de lo contrario el contenido de la página puede perderse.
:::

### Paso 5. Desplegar el modelo entrenado

:::caution
Por favor nota que si quieres guardar este modelo permanentemente, por favor asegúrate de hacer clic en **Guardar en SenseCraft** primero para guardar el modelo bajo tu cuenta para evitar perderlo.
:::

Después de que el entrenamiento del modelo esté completo, es hora de desplegarlo a tu dispositivo objetivo. Si estás usando el XIAO ESP32S3 Sense u otro dispositivo de Seeed Studio, selecciona el dispositivo apropiado del menú desplegable y haz clic en **'Desplegar al dispositivo'**. Si entrenaste el modelo usando la cámara de tu laptop, puedes omitir este paso y proceder a la demostración de resultados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/42.png" style={{width:1000, height:'auto'}}/></div>

Haz clic en **'Confirmar'** y selecciona el **puerto serie** correcto para la conexión del dispositivo. El proceso de implementación puede tomar de 1 a 3 minutos. Por favor, ten paciencia y espera a que se complete.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/20.png" style={{width:1000, height:'auto'}}/></div>

## Demostración de resultados

¡Felicitaciones! Has entrenado e implementado exitosamente tu modelo de reconocimiento de gestos corporales. Es hora de ponerlo a prueba:

- Apunta la cámara hacia ti mismo o hacia un sujeto de prueba.
- Realiza cada uno de los gestos corporales entrenados uno a la vez.
- Observa las predicciones en tiempo real del modelo y los resultados de clasificación.
- Verifica que el modelo reconozca y clasifique con precisión cada gesto.

Siéntete libre de experimentar entrenando modelos para diferentes objetos, gestos o escenarios usando la plataforma SenseCraft AI. El proceso permanece en gran medida igual, independientemente de si estás usando un dispositivo de Seeed Studio o la cámara de tu laptop.

<div class="table-center">
<iframe width="760" height="500" src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/result.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

Recuerda, aunque la plataforma te permite entrenar modelos usando cualquier cámara, para obtener los mejores resultados y rendimiento óptimo, recomendamos usar el dispositivo objetivo (actualmente limitado a dispositivos de Seeed Studio) para entrenar e implementar tu modelo.

Con esta guía completa, ahora deberías tener una comprensión sólida de cómo entrenar un modelo de clasificación usando la plataforma SenseCraft AI. ¡Feliz entrenamiento, y disfruta creando modelos de IA personalizados y poderosos para tus proyectos!

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
