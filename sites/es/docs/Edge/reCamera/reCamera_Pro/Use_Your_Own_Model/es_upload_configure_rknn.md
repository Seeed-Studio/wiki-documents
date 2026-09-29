---
description: Sube un archivo de modelo RKNN a reCamera Pro, configura las categorías de detección y establece los parámetros de postprocesamiento.
title: Subir y configurar un modelo RKNN
keywords:
  - reCamera
  - reCamera Pro
  - RKNN
  - model upload
  - detection categories
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_rknn_upload
sku: 10003420
sidebar_position: 2
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/es/recamera_pro_rknn_upload/
---

# Subir y configurar un modelo RKNN

Si ya tienes un archivo de modelo `.rknn` (consulta [Choose a Model Deployment Path](/es/recamera_pro_model_path/)), súbelo a reCamera Pro y configúralo a través de la interfaz web.

## Subir un modelo

1. En la interfaz web, ve a **AI Inference** → **Model Management**.
2. Haz clic en **Upload Model**.
3. Arrastra y suelta o selecciona tu archivo `.rknn`.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_NzrWUUba84.png" />

Después de subirlo, el modelo aparece en la lista de Model Management.

{/* TODO(verify): confirm maximum model file size limit and whether multiple models can be stored simultaneously */}

## Campos del modelo

| Campo | Descripción |
|---|---|
| Model File | Nombre de archivo en el dispositivo |
| Model Name | Nombre para mostrar |
| Framework | Framework de ejecución (RKNN) |
| Algorithm | Tipo de algoritmo, p. ej. YOLO, nanodet |
| Type | Tipo de tarea, p. ej. Detección |
| Version | Versión del modelo |
| Size | Tamaño del archivo |
| Operations | Configurar o eliminar |

## Configurar el modelo

Cada modelo tiene una página de **Configure** para establecer la información básica, las categorías de detección y los parámetros de postprocesamiento.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_fakpGBUpzn.png" />

| Elemento de configuración | Descripción |
|---|---|
| Model Name | Nombre para mostrar |
| Framework | Framework de ejecución, p. ej. RKNN |
| Version | Versión del modelo |
| Type | Tipo de tarea, p. ej. Detección de objetos |
| Algorithm | Algoritmo, p. ej. YOLOv5 |
| Author | Información del autor |
| Description | Descripción del modelo |
| Detection Categories | Nombres de las categorías de salida del modelo |
| Post-processing Configuration | IOU, Confidence, max_obj |

### Categorías de detección

Las categorías se pueden añadir manualmente o importar en lote desde un archivo TXT. Después de configurar las categorías, los resultados de inferencia se muestran y se emiten usando tus nombres de categoría.

### Parámetros de postprocesamiento

| Parámetro | Descripción |
|---|---|
| IOU | Umbral de Intersection over Union para la supresión no máxima de cajas delimitadoras |
| Confidence | Umbral de confianza para la detección de objetos |
| max_obj | Número máximo de objetos de salida por fotograma |

{/* TODO(verify): confirm recommended IOU/Confidence defaults for common detection models (YOLOv5, nanodet) on reCamera Pro */}

Haz clic en **Save** para aplicar.

## Ejecutar el modelo

1. Ve a **AI Inference** → **Inference Configuration**.
2. Activa la inferencia, selecciona tu modelo subido como **Running Model** y establece la frecuencia de inferencia.
3. Haz clic en **Save Configuration**.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_PaSSqyKuWi.png" />

## Páginas relacionadas

- [Choose a Model Deployment Path](/es/recamera_pro_model_path/)
- [SenseCraft ONNX-to-RKNN Conversion](/es/recamera_pro_sensecraft/)
- [Configure Detection](/es/recamera_pro_ai_inference/)
- [Validate Model Performance](/es/recamera_pro_model_validate/)

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
