---
sidebar_position: 5
description: Cómo usar Training(Classification)
title: Training - Classification
image: https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/34.webp
slug: /sensecraft-ai/tutorials/sensecraft-ai-training-classification
aliases:
  - /sensecraft_ai_training_classification
last_update:
  date: 12/03/2024
  author: Citric
createdAt: '2024-11-27'
updatedAt: '2025-08-18'
url: https://wiki.seeedstudio.com/es/sensecraft-ai/tutorials/sensecraft-ai-training-classification/
---

# Tipo de entrenamiento - Classification

La clasificación es una herramienta poderosa en el aprendizaje automático que te permite entrenar un modelo para reconocer y categorizar diferentes tipos de datos. En la plataforma SenseCraft AI, la clasificación te permite crear modelos que pueden identificar y distinguir entre varios objetos, gestos o escenas basándose en las imágenes que proporcionas durante el entrenamiento.

Al entrenar un modelo de clasificación con SenseCraft AI, puedes desbloquear una amplia gama de aplicaciones, tales como:

- Reconocimiento de gestos para experiencias interactivas

- Detección de objetos para gestión de inventario o control de calidad

- Clasificación de escenas para navegación autónoma o monitoreo ambiental

La plataforma SenseCraft AI simplifica el proceso de clasificación, permitiéndote crear modelos personalizados adaptados a tus necesidades específicas sin requerir amplios conocimientos de aprendizaje automático.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/34.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/?utm_source=seeedstudio_wiki&utm_medium=referral&utm_campaign=wiki_to_sensecraft&utm_content=sensecraft_ai_training#/training" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>One-Click Direct 🖱️</font></span></strong>
    </a>
</div><br />

## Introducción

En esta guía completa, te guiaremos a través del proceso de entrenamiento de un modelo de clasificación utilizando la plataforma SenseCraft AI. Aunque nuestro enfoque principal será entrenar un modelo para la XIAO ESP32S3 Sense, es importante señalar que esta plataforma también es compatible con otros dispositivos de Seeed Studio, como Grove Vision AI y Watcher.

¿No tienes un dispositivo de Seeed Studio? ¡No hay problema! Aun así puedes seguir y experimentar el proceso de entrenamiento usando la cámara integrada de tu portátil. Sin embargo, para un rendimiento óptimo y los mejores resultados, recomendamos usar el dispositivo objetivo para entrenar y desplegar tu modelo.

## Entrenar un modelo para reconocer gestos corporales

Para este tutorial, crearemos un modelo que reconozca cuatro gestos corporales distintos: brazos cruzados, brazos abiertos, posición de firmes y formar un corazón con las manos.

:::tip
La plataforma SenseCraft AI admite hasta 200 categorías para clasificación, lo que te brinda amplia flexibilidad para crear modelos adaptados a tus necesidades específicas.
:::

### Paso 1. Conecta tu dispositivo

Si estás utilizando un dispositivo de Seeed Studio como la XIAO ESP32S3 Sense, conéctalo a tu ordenador mediante un cable USB-C. Selecciona el dispositivo correspondiente en el menú desplegable y haz clic en **Connect**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/35.png" style={{width:1000, height:'auto'}}/></div>

Elige el **puerto serie correcto** para la conexión.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/36.png" style={{width:1000, height:'auto'}}/></div>

Si estás utilizando la cámara de tu portátil, puedes omitir este paso. Porque cuando llegas a esta página, automáticamente muestra la transmisión en vivo de la cámara. Si no lo hace, por favor revisa los permisos de tu navegador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/37.png" style={{width:1000, height:'auto'}}/></div>

:::note
Por favor utiliza **Microsoft Edge** o **Google Chrome**.
:::

### Paso 2. Crea y etiqueta categorías

Haz clic en el botón de lápiz a la derecha del nombre de una clase existente para cambiar el nombre de una clase ya existente. Haz clic en el botón **Add a Class** de abajo para crear cuatro categorías para los gestos corporales que quieres reconocer.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/38.png" style={{width:600, height:'auto'}}/></div>

Etiqueta las categorías de la siguiente manera: "Crossed Arms", "Open Arms", "Standing at Attention" y "Heart Shape". Vuelve a comprobar que cada categoría esté nombrada correctamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/39.png" style={{width:600, height:'auto'}}/></div>

### Paso 3. Captura datos de entrenamiento

Selecciona la primera categoría (por ejemplo, "Crossed Arms") de la lista. Colócate frente a la cámara realizando el gesto corporal correspondiente. Mantén presionado el botón **Hold to Record** para capturar imágenes del gesto. Suelta el botón para detener la grabación. Intenta capturar **al menos 40 imágenes** por categoría para garantizar un modelo robusto y preciso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/40.png" style={{width:1000, height:'auto'}}/></div>

Repite este proceso para cada una de las categorías restantes, capturando una gama diversa de imágenes para cada gesto.

:::tip
Cuantas más imágenes relevantes y de alta calidad recopiles para cada categoría, mejor será el rendimiento del modelo. Procura variar la iluminación, los ángulos y los fondos para mejorar la capacidad de generalización del modelo.
:::

### Paso 4. Entrena el modelo

Una vez que hayas recopilado un número suficiente de imágenes para cada categoría, haz clic en el botón **'Start Training'** para iniciar el proceso de entrenamiento del modelo. El proceso de entrenamiento suele tardar entre 1 y 3 minutos, dependiendo de la complejidad del modelo y de la cantidad de datos de entrenamiento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/41.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Por favor, **no** cierres inmediatamente la página web mientras entrenas el modelo, de lo contrario el contenido de la página puede perderse.
:::

### Paso 5. Despliega el modelo entrenado

:::caution
Ten en cuenta que si quieres guardar este modelo de forma permanente, asegúrate primero de hacer clic en **Save to SenseCraft** para guardar el modelo en tu cuenta y evitar perderlo.
:::

Después de que se complete el entrenamiento del modelo, es momento de desplegarlo en tu dispositivo objetivo. Si estás utilizando la XIAO ESP32S3 Sense u otro dispositivo de Seeed Studio, selecciona el dispositivo apropiado en el menú desplegable y haz clic en **'Deploy to device'**. Si entrenaste el modelo usando la cámara de tu portátil, puedes omitir este paso y pasar a la demostración de resultados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/42.png" style={{width:1000, height:'auto'}}/></div>

Haz clic en **'Confirm'** y selecciona el **puerto serie** correcto para la conexión del dispositivo. El proceso de despliegue puede tardar de 1 a 3 minutos. Ten paciencia y espera a que se complete.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/20.png" style={{width:1000, height:'auto'}}/></div>

## Demostración de resultados

¡Felicidades! Has entrenado y desplegado con éxito tu modelo de reconocimiento de gestos corporales. Es momento de ponerlo a prueba:

- Apunta la cámara hacia ti o hacia un sujeto de prueba.
- Realiza cada uno de los gestos corporales entrenados, uno por uno.
- Observa las predicciones en tiempo real y los resultados de clasificación del modelo.
- Verifica que el modelo reconozca y clasifique con precisión cada gesto.

Siéntete libre de experimentar entrenando modelos para diferentes objetos, gestos o escenarios utilizando la plataforma SenseCraft AI. El proceso se mantiene en gran medida igual, independientemente de si utilizas un dispositivo de Seeed Studio o la cámara de tu portátil.

<div class="table-center">
<iframe width="760" height="500" src="https://files.seeedstudio.com/wiki/SenseCraft_AI/img2/result.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

Recuerda que, aunque la plataforma te permite entrenar modelos usando cualquier cámara, para obtener los mejores resultados y un rendimiento óptimo, recomendamos usar el dispositivo objetivo (actualmente limitado a dispositivos de Seeed Studio) para entrenar y desplegar tu modelo.

Con esta guía completa, ahora deberías tener una comprensión sólida de cómo entrenar un modelo de clasificación utilizando la plataforma SenseCraft AI. ¡Feliz entrenamiento y disfruta creando potentes modelos de IA personalizados para tus proyectos!

## Soporte técnico y debate sobre productos

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
