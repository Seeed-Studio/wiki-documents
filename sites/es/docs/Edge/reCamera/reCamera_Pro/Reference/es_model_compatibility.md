---
description: Qué formatos de modelo, frameworks, algoritmos y campos de salida admite reCamera Pro - un resumen de compatibilidad para desplegar tus propios modelos.
title: Compatibilidad de modelos y formatos de salida
keywords:
  - reCamera
  - reCamera Pro
  - RKNN
  - RV1126B
  - model compatibility
  - inference output
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_model_compatibility
sku: 10003420
sidebar_position: 4
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/es/recamera_pro_model_compatibility/
---

# Compatibilidad de modelos y formatos de salida

Esta página resume qué se ejecuta en la NPU de reCamera Pro (Rockchip RV1126B, 3 TOPS, INT8/INT16 mixto) y qué produce la canalización de inferencia. Úsala como una comprobación rápida antes de invertir tiempo en convertir o entrenar un modelo.

## Formato de modelo compatible

| Elemento | Valor |
| --- | --- |
| Formato de modelo en el dispositivo | RKNN (`.rknn`), compilado para **RV1126B** |
| Plataforma de destino requerida | `target_platform='rv1126b'` al compilar con RKNN-Toolkit2 |
| Kit de conversión | [RKNN-Toolkit2](https://github.com/airockchip/rknn-toolkit2) **2.3.2**, en el host (Linux x86_64 o WSL 2, Python 3.6–3.12) |
| Alineación del runtime | Mantén la versión del Toolkit alineada con el RKNN Runtime incluido en el firmware de reCamera Pro |
| Precisión | FP16 (base no cuantizada) e INT8 (cuantizada con un conjunto de datos de calibración) |
| Formatos de origen | ONNX (a través de RKNN-Toolkit2 o conversión SenseCraft); los checkpoints de Ultralytics YOLO (`.pt`) pueden exportar directamente a RKNN |

- **No** uses `rknn-toolkit-lite2` para la conversión: es una biblioteca de runtime en el dispositivo, no un conversor.
- Un modelo compilado para otro SoC de Rockchip (por ejemplo, RK3566/RK3588) no se ejecutará en RV1126B.

Guías paso a paso de conversión: [Conversión con RKNN-Toolkit2](/es/recamera_pro_rknn_model_conversion/) (en host, scriptable) y [SenseCraft ONNX-a-RKNN](/es/recamera_pro_sensecraft/) (en navegador, sin código).

## Familias de modelos integrados y probados

El firmware se entrega con modelos de detección integrados, y la lista de Gestión de Modelos en la interfaz web expone estos atributos por modelo:

| Campo | Valores típicos |
| --- | --- |
| Framework | RKNN |
| Algoritmo | YOLO, nanodet |
| Tipo | Detección |

Los casos de uso probados/incluidos abarcan detección de personas, detección de cascos, detección de seguridad en construcción y detección de vehículos.

<!-- TODO(verify): enumerate the exact list of built-in models (names, classes, sizes) shipped with the current firmware; confirm additional supported algorithms beyond YOLO/nanodet (e.g., classification, segmentation support level). -->

## Requisitos del contrato de entrada

Tu modelo ONNX debe tener un contrato de entrada conocido y estático antes de la conversión. RKNN aplica `(input − mean) / std` una sola vez; si la normalización ya está dentro del grafo ONNX, usa valores identidad (`mean=[0,0,0]`, `std=[1,1,1]`).

| Elemento | Requisito |
| --- | --- |
| Forma de entrada | Estática, lote 1 preferido (por ejemplo, `[1, 3, 640, 640]`) |
| Disposición | NCHW o NHWC, coincidiendo con el grafo exportado |
| Orden de canales | RGB frente a BGR debe coincidir con el entrenamiento: un intercambio reduce gravemente la precisión |
| Política de redimensionado | Estirar, recortar o letterbox deben ser idénticos en tiempo de ejecución |
| Operadores no compatibles | Vuelve a exportar el modelo ONNX o usa un operador compatible semánticamente equivalente |

Inspecciona el contrato con [Netron](https://netron.app/) o `model-inspect` antes de convertir. Detalles y resolución de problemas: [Conversión con RKNN-Toolkit2](/es/recamera_pro_rknn_model_conversion/).

## Clases personalizadas y postprocesamiento

Los modelos cargados se configuran en la interfaz web ([Subir y configurar un modelo RKNN](/es/recamera_pro_rknn_upload/), [Configurar detección](/es/recamera_pro_ai_inference/)):

- **Categorías de detección**: define manualmente los nombres de las clases de salida o importa en bloque una lista de categorías desde un archivo TXT; los resultados de inferencia mostrarán entonces tus propias etiquetas
- **Parámetros de postprocesamiento**: `IOU` (umbral de NMS), `Confidence` (umbral de detección), `max_obj` (máximo de objetos por fotograma)

## Formatos de salida de inferencia

La salida de inferencia en tiempo real (monitorización en la interfaz web, registros) usa estos campos:

| Campo | Descripción |
| --- | --- |
| `timestamp` | Marca de tiempo del resultado de inferencia |
| `task_type` | Tipo de tarea actual |
| `class_id` | ID de la clase detectada |
| `class_name` | Nombre de la clase detectada |
| `score` | Confianza de la detección |
| `bbox` | Coordenadas de la caja delimitadora |
| `detection_count` | Número de objetos detectados en el fotograma actual |

Los resultados pueden enviarse a sistemas externos por tres canales, con plantilla de salida y tipo de tarea configurables:

| Canal | Guía |
| --- | --- |
| HTTP | [Enviar resultados de detección por HTTP/UART](/es/recamera_pro_http_uart/) |
| UART | [Enviar resultados de detección por HTTP/UART](/es/recamera_pro_http_uart/) |
| MQTT | [Enviar resultados de detección por MQTT](/es/recamera_pro_mqtt/) |

Las grabaciones también pueden activarse directamente mediante los resultados de inferencia (categorías, rango de confianza, áreas de activación): [Configurar grabación de eventos](/es/recamera_pro_record_settings/).

<!-- TODO(verify): document the exact JSON payload schema for HTTP/MQTT output (field names, nesting, configurable template variables) against the shipping firmware. -->

## Inferencia nativa (C/C++)

Para aplicaciones personalizadas fuera de la interfaz web, los modelos se cargan a través del RKNN Runtime C API. Configuración de la compilación cruzada y una aplicación mínima: [Configuración del SDK](/es/recamera_pro_sdk_setup/), [Desarrollo nativo](/es/recamera_pro_media_dev/). Un flujo de trabajo asistido por agente de IA con una plantilla en C++: [Desarrollar con agentes de programación de IA](/es/recamera_pro_development_cpp_skill/).

## Modelos de sonido

La detección de eventos de sonido utiliza una canalización independiente: los modelos se visualizan, entrenan y cambian en el Sound Lab (interfaz web), y las categorías de sonido seleccionadas pueden activar la grabación. Consulta [Entrenar un modelo de sonido](/es/recamera_pro_acoustic_lab_usage/) y [Captura activada por sonido](/es/recamera_pro_sound_trigger/).

<!-- TODO(verify): document sound model format and on-device runtime (distinct from RKNN visual models). -->


## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte distintos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
