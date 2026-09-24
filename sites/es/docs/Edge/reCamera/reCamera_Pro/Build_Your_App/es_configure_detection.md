---
description: Elige qué modelo de IA ejecutar, configura las clases de detección, establece los umbrales de confianza e IOU, controla la frecuencia de inferencia y supervisa la salida en tiempo real en reCamera Pro.
title: "Configurar detección: clases, umbrales y frecuencia"
keywords:
  - reCamera
  - reCamera Pro
  - AI inference
  - detection
  - confidence
  - IOU
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_ai_inference
sku: 10003420
sidebar_position: 5
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/es/recamera_pro_ai_inference/
---

# Configurar detección: clases, umbrales y frecuencia

reCamera Pro tiene una página integrada de gestión de inferencia de IA en la interfaz web. Puedes gestionar modelos, subir modelos, convertir modelos, configurar parámetros de inferencia y supervisar los resultados de inferencia en tiempo real, todo sin usar la línea de comandos.

Después de iniciar sesión, haz clic en **AI Inference** en el menú de la izquierda.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_YJH8NuV7ED.png" />

## Descripción general de funciones

La página de AI Inference tiene estos módulos:

- **Model Management**: ver, configurar, eliminar o subir archivos de modelo
- **SenseCraft Model Conversion**: convertir modelos ONNX a RKNN
- **Inference Configuration**: seleccionar el modelo en ejecución, activar/desactivar la inferencia, establecer la frecuencia de inferencia
- **Real-time Inference Monitoring**: ver la salida del modelo mientras se ejecuta
- **Inference Output Configuration**: enviar resultados a sistemas externos mediante HTTP, MQTT o UART

## Gestión de modelos

El área de Model Management muestra los modelos integrados o subidos al dispositivo. Campos comunes:

| Campo | Descripción |
|---|---|
| Model File | Nombre de archivo en el dispositivo |
| Model Name | Nombre para mostrar |
| Framework | Framework de ejecución, p. ej., RKNN |
| Algorithm | Tipo de algoritmo, p. ej., YOLO, nanodet |
| Type | Tipo de tarea, p. ej., Detection |
| Version | Versión del modelo |
| Size | Tamaño del archivo |
| Operations | Configurar o eliminar |

reCamera Pro admite modelos de detección integrados y modelos personalizados subidos por el usuario. Para la detección de objetos puedes elegir modelos para detección de personas, detección de cascos, seguridad en construcción, detección de vehículos, etc.

### Subir un modelo

Haz clic en **Upload Model** para subir archivos de modelo locales. La ventana de subida admite arrastrar y soltar o selección manual.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_NzrWUUba84.png" />

La página actualmente admite la subida de archivos de modelo RKNN. Después de subirlos, el modelo aparece en Model Management, donde puedes configurar su nombre, categorías y parámetros de postprocesamiento.

### Configurar un modelo

Cada modelo tiene una página de **Configure** para información básica, categorías de detección y parámetros de postprocesamiento.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_fakpGBUpzn.png" />

| Elemento de configuración | Descripción |
|---|---|
| Model Name | Nombre para mostrar |
| Framework | Framework de ejecución, p. ej., RKNN |
| Version | Versión del modelo |
| Type | Tipo de tarea, p. ej., Object Detection |
| Algorithm | Algoritmo, p. ej., YOLOv5 |
| Author | Información del autor |
| Description | Descripción del modelo |
| Detection Categories | Nombres de las categorías de salida del modelo |
| Post-processing Configuration | IOU, Confidence, max_obj |

Las categorías de detección se pueden añadir manualmente o importar en lote desde un archivo TXT. Después de configurar las categorías, los resultados de inferencia se muestran y se emiten usando tus nombres de categoría.

Los **parámetros de postprocesamiento** controlan cómo se filtran los resultados de detección:

| Parámetro | Descripción |
|---|---|
| IOU | Umbral de Intersection over Union para la supresión no máxima de cajas delimitadoras |
| Confidence | Umbral de confianza para la detección de objetos |
| max_obj | Número máximo de objetos emitidos por fotograma |

Menor confianza = más detecciones (más falsos positivos). Mayor IOU = menos cajas duplicadas. Ajusta estos valores para tu escena.

{/* TODO(verify): document recommended confidence/IOU ranges for common scenarios, and confirm max_obj upper limit on production firmware */}

Haz clic en **Save** para aplicar.

## Configuración de inferencia

El área de Inference Configuration controla si la inferencia de IA se está ejecutando y qué modelo está activo.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_PaSSqyKuWi.png" />

| Parámetro | Descripción |
|---|---|
| Inference Enable | Activar o desactivar la inferencia de IA |
| Running Model | Seleccionar qué modelo ejecutar |
| Inference Frequency (FPS) | Cuántos fotogramas por segundo usar para la inferencia |
| Inference Status | Si la tarea de inferencia se está ejecutando actualmente |
| Real-time Inference FPS | Velocidad de fotogramas de inferencia real |

Selecciona un modelo, establece la frecuencia de inferencia con el control deslizante y luego haz clic en **Save Configuration**. En el lado derecho se muestra el estado actual (p. ej., **Running**) y los FPS reales.

{/* TODO(verify): confirm maximum supported inference frequency and behavior when FPS exceeds model throughput */}

## Supervisión de inferencia en tiempo real

La página proporciona un registro en tiempo real de la salida de inferencia para depurar coordenadas de cajas delimitadoras, IDs de clase, puntuaciones de confianza y marcas de tiempo.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_VulyBOkn3D.png" />

| Campo | Descripción |
|---|---|
| timestamp | Marca de tiempo del resultado de inferencia |
| task_type | Tipo de tarea actual |
| class_id | ID de la clase detectada |
| class_name | Nombre de la clase detectada |
| score | Confianza de la detección |
| bbox | Coordenadas de la caja delimitadora |
| detection_count | Número de objetos detectados en el fotograma actual |

El área de supervisión admite desactivar, pausar y limpiar el registro.

## Conectar la detección con la grabación y la salida

Una vez configurada la detección, puedes usar los resultados de inferencia para:

- **Activar grabaciones**: consulta [Configurar grabación de eventos](/es/recamera_pro_record_settings/) (AI Inference Trigger)
- **Enviar resultados mediante MQTT**: consulta [Enviar resultados de detección por MQTT](/es/recamera_pro_mqtt/)
- **Enviar resultados mediante HTTP o UART**: consulta [Enviar resultados de detección por HTTP/UART](/es/recamera_pro_http_uart/)

## Páginas relacionadas

- [Subir y configurar un modelo RKNN](/es/recamera_pro_rknn_upload/)
- [Conversión SenseCraft de ONNX a RKNN](/es/recamera_pro_sensecraft/)
- [Calidad de imagen y baja iluminación](/es/recamera_pro_image_quality/)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
