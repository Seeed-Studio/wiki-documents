---
description: recamera_pro_ai_inference
title: Inferencia de IA
keywords:
  - reCamera pro
  - web ui
slug: /recamera_pro_ai_inference
sku: 10003420
sidebar_position: 5
last_update:
  date: 07/09/2026
  author: yylin
createdAt: '2026-07-09'
updatedAt: '2026-07-09'
url: https://wiki.seeedstudio.com/es/recamera_pro_ai_inference/
---

reCamera Pro proporciona una página integrada de gestión de inferencia de IA, que permite a los usuarios gestionar modelos directamente, subir modelos, convertir modelos, configurar parámetros de inferencia, ver el estado de inferencia en tiempo real y configurar la salida de los resultados de inferencia dentro de la Web UI. Esta página es adecuada para escenarios como detección de objetos, reconocimiento industrial, monitorización de seguridad, activación de eventos y desarrollo de aplicaciones de IA en el borde.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_YJH8NuV7ED.png" />

Después de entrar en la Web UI, haz clic en **AI Inference** en el menú lateral izquierdo para acceder a la página de configuración de inferencia de IA.

## Descripción general de funciones

La página de Inferencia de IA incluye principalmente los siguientes módulos funcionales:

- **Gestión de modelos**: Ver, configurar, eliminar o subir archivos de modelo.
- **Conversión de modelos SenseCraft**: Convertir modelos ONNX a modelos RKNN que reCamera Pro puede ejecutar.
- **Configuración de inferencia**: Seleccionar el modelo a ejecutar, activar/desactivar la inferencia y configurar la frecuencia de inferencia.
- **Supervisión de inferencia en tiempo real**: Ver los resultados de salida del modelo y el estado de inferencia en tiempo real.
- **Configuración de salida de inferencia**: Enviar los resultados de inferencia a sistemas externos mediante HTTP, MQTT o UART.

A través de esta página, los usuarios pueden completar el despliegue del modelo y la configuración de la inferencia sin usar la línea de comandos.

## Gestión de modelos

El área de Gestión de modelos se utiliza para mostrar los modelos de IA que ya se han subido o que están integrados en el dispositivo actual. La lista mostrará el archivo de modelo, el nombre del modelo, el framework de inferencia, el tipo de algoritmo, el tipo de tarea, la versión, el tamaño del archivo y las operaciones disponibles.

Las descripciones de los campos comunes son las siguientes:

| Campo        | Descripción                               |
| ------------ | ----------------------------------------- |
| Model File   | El nombre de archivo del modelo actual en el dispositivo |
| Model Name   | El nombre visible del modelo               |
| Framework    | El framework de ejecución del modelo, por ejemplo, RKNN   |
| Algorithm    | El tipo de algoritmo del modelo, por ejemplo, YOLO, nanodet |
| Type         | El tipo de tarea del modelo, por ejemplo, Detection      |
| Version      | Información de la versión del modelo                   |
| Size         | Tamaño del archivo de modelo                           |
| Operations   | Permite la configuración o eliminación del modelo    |

reCamera Pro puede utilizar modelos de detección integrados y también permite que los usuarios suban modelos personalizados. Para escenarios de detección de objetos, los usuarios pueden elegir diferentes modelos según sus necesidades de aplicación, como detección de personas, detección de cascos, detección de seguridad en obras, detección de vehículos, etc.

## Subir modelo

Los usuarios pueden hacer clic en el botón **Upload Model** para subir archivos de modelo locales a reCamera Pro. La ventana de subida admite arrastrar y soltar archivos o seleccionarlos manualmente.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_NzrWUUba84.png" />

La página actual admite la subida de archivos de modelo RKNN. Después de subirlos, el modelo aparecerá en la lista de Gestión de modelos, y los usuarios podrán seguir configurando la información del modelo, las categorías y los parámetros de postprocesado.

La subida de modelos es adecuada para los siguientes escenarios:

- Uso de modelos de detección entrenados por el usuario
- Sustitución de los modelos predeterminados
- Despliegue de modelos específicos de la industria
- Adición de nuevas categorías de reconocimiento según los requisitos del proyecto

## Conversión de modelos SenseCraft

La página de Inferencia de IA proporciona una entrada para **View SenseCraft Models**. Los usuarios pueden entrar en la interfaz de conversión de modelos SenseCraft para convertir modelos ONNX en modelos RKNN que reCamera Pro puede ejecutar.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_FQNy2aeXpQ.png" />

En la interfaz de conversión de modelos, los usuarios pueden crear tareas de conversión, subir archivos de modelo ONNX y, opcionalmente, subir un conjunto de datos de cuantificación. Si no se proporciona un conjunto de datos de cuantificación, el sistema puede utilizar un conjunto de datos predeterminado para completar la conversión.

El proceso de conversión es el siguiente:

1. Haz clic en **View SenseCraft Models**.
2. Selecciona el archivo de modelo ONNX que se va a convertir.
3. Sube un conjunto de datos de cuantificación según sea necesario.
4. Haz clic en **Start Conversion**.
5. Después de completar la conversión, despliega el modelo RKNN generado en reCamera Pro para su ejecución.

Esta función reduce la barrera para que los usuarios desplieguen modelos, permitiéndoles convertir rápidamente modelos ONNX autoentrenados en modelos ejecutables en el dispositivo.

## Configuración de modelos

Cada modelo puede entrar en la página **Configure** para establecer la información básica del modelo, las categorías de detección y los parámetros de postprocesado.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_fakpGBUpzn.png" />

La configuración del modelo admite los siguientes elementos:

| Elemento de configuración | Descripción                               |
| ------------------ | ----------------------------------------- |
| Model Name         | Establecer el nombre visible del modelo         |
| Framework          | Seleccionar el framework de ejecución del modelo, por ejemplo, RKNN |
| Version            | Establecer la información de versión del modelo           |
| Type               | Establecer el tipo de tarea del modelo, por ejemplo, Object Detection |
| Algorithm          | Seleccionar el algoritmo del modelo, por ejemplo, YOLOv5 |
| Author             | Introducir la información del autor del modelo            |
| Description        | Añadir una descripción del modelo                     |
| Detection Categories | Establecer los nombres de las categorías de salida del modelo |
| Post-processing Configuration | Establecer parámetros como IOU, Confidence, max_obj |

Para modelos de detección definidos por el usuario, las categorías de detección se pueden añadir manualmente en la página de configuración, o se puede importar una lista de categorías de forma masiva mediante un archivo TXT. Después de configurar las categorías, los resultados de inferencia se mostrarán y se enviarán según los nombres de categoría definidos por el usuario.

Los parámetros de postprocesado se utilizan para controlar el filtrado y la salida de los resultados de detección, por ejemplo:

| Parámetro   | Descripción                                     |
| ----------- | ----------------------------------------------- |
| IOU         | Umbral de Intersection over Union para la supresión no máxima de las cajas delimitadoras |
| Confidence  | Umbral de confianza para la detección de objetos           |
| max_obj     | Número máximo de objetos a mostrar por fotograma   |

Después de la configuración, haz clic en **Save** para aplicar la configuración del modelo.

## Configuración de inferencia

El área de Configuración de inferencia se utiliza para controlar el estado de ejecución y el modelo seleccionado de la tarea de inferencia de IA.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_PaSSqyKuWi.png" />

Los usuarios pueden configurar los siguientes parámetros:

| Parámetro         | Descripción                               |
| ----------------- | ----------------------------------------- |
| Inference Enable  | Activar o desactivar la función de inferencia de IA   |
| Running Model     | Seleccionar el modelo que se ejecutará actualmente         |
| Inference Frequency (FPS) | Establecer la frecuencia de inferencia del modelo       |
| Inference Status  | Mostrar si la tarea de inferencia actual se está ejecutando |
| Real-time Inference FPS | Mostrar la tasa de fotogramas de inferencia real actual |

Los usuarios pueden seleccionar un modelo de la lista de modelos como el modelo en ejecución actual y establecer la frecuencia de inferencia mediante un control deslizante. Después de la configuración, haz clic en **Save Configuration** para iniciar o actualizar la tarea de inferencia.

En el lado derecho de la página se muestra el estado de inferencia actual, como **Running**, y se muestra la tasa de fotogramas de inferencia real actual, lo que facilita a los usuarios determinar si el modelo se está ejecutando con normalidad.

## Supervisión de inferencia en tiempo real

La página de Inferencia de IA proporciona un área de supervisión de salida de inferencia en tiempo real para ver los resultados de inferencia del modelo. Los resultados de inferencia se muestran en tiempo real en forma de registros, lo que facilita a los desarrolladores depurar la salida del modelo, comprobar las coordenadas de las cajas delimitadoras, los ID de clase, las puntuaciones de confianza y las marcas de tiempo.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_VulyBOkn3D.png" />

La salida en tiempo real suele incluir la siguiente información:

| Campo              | Descripción                     |
| ------------------ | ------------------------------- |
| timestamp          | Marca de tiempo del resultado de inferencia      |
| task_type          | Tipo de tarea actual               |
| class_id           | ID de la clase detectada               |
| class_name         | Nombre de la clase detectada             |
| score              | Confianza de la detección            |
| bbox               | Coordenadas de la caja delimitadora        |
| detection_count    | Número de objetos detectados en el fotograma actual |

La página proporciona funciones de control de salida en tiempo real, como desactivar la supervisión, pausar la visualización en tiempo real, borrar registros, etc., lo que facilita a los usuarios observar y gestionar el contenido de salida durante la depuración.

## Configuración de salida de inferencia

Además de ver los registros de inferencia en tiempo real en la Web UI, reCamera Pro también admite la salida de los resultados de inferencia a sistemas externos. Los usuarios pueden seleccionar la plantilla de salida, el tipo de tarea y el método de salida en **Inference Output Configuration**.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_WaXFL9Pz9G.png" />

Los métodos de salida compatibles incluyen:

- HTTP
- MQTT
- UART

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
