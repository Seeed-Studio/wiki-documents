---
description: Elige cómo desplegar un modelo de IA personalizado en reCamera Pro: sube un modelo RKNN preentrenado, convierte ONNX mediante SenseCraft o usa RKNN-Toolkit2 localmente.
title: Elige una ruta de despliegue de modelo
keywords:
  - reCamera
  - reCamera Pro
  - model deployment
  - RKNN
  - SenseCraft
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_model_path
sku: 10003420
sidebar_position: 1
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/es/recamera_pro_model_path/
---

# Elige una ruta de despliegue de modelo

reCamera Pro admite el despliegue de modelos de IA personalizados para detección de objetos, clasificación y otras tareas. Esta página te ayuda a elegir la ruta adecuada según el formato de tu modelo y tu flujo de trabajo.

## Tres rutas de despliegue

| Ruta | Cuándo usarla | Nivel de habilidad |
|---|---|---|
| **Subir un modelo RKNN preentrenado** | Ya tienes un archivo de modelo RKNN (`.rknn`) | Principiante |
| **Convertir ONNX a RKNN mediante SenseCraft** | Tienes un modelo ONNX y quieres una conversión en la nube | Principiante–Intermedio |
| **Convertir ONNX a RKNN mediante RKNN-Toolkit2** | Quieres control total sobre la cuantización (INT8/FP16) y la calibración | Intermedio–Avanzado |

## Ruta 1: Subir un modelo RKNN preentrenado

Si ya tienes un archivo de modelo `.rknn`, súbelo directamente a través de la interfaz web.

→ [Subir y configurar un modelo RKNN](/es/recamera_pro_rknn_upload/)

## Ruta 2: Conversión en la nube con SenseCraft

La plataforma SenseCraft convierte modelos ONNX al formato RKNN en la nube, con cuantización opcional. No se requieren herramientas locales.

→ [Conversión de ONNX a RKNN con SenseCraft](/es/recamera_pro_sensecraft/)

## Ruta 3: Conversión local con RKNN-Toolkit2

Para tener control total sobre los parámetros de cuantización, los conjuntos de datos de calibración y la optimización del modelo, usa RKNN-Toolkit2 en tu PC.

→ [Conversión con RKNN-Toolkit2](/es/recamera_pro_rknn_model_conversion/)

## Después del despliegue

Una vez que tu modelo esté en el dispositivo:

1. [Configurar detección](/es/recamera_pro_ai_inference/) — define clases, umbrales y frecuencia de inferencia
2. [Validar el rendimiento del modelo](/es/recamera_pro_model_validate/) — comprueba FPS, precisión y uso de recursos
3. [Compatibilidad del modelo](/es/recamera_pro_model_compatibility/) — operadores admitidos y formatos de cuantización

## Páginas relacionadas

- [Subir y configurar un modelo RKNN](/es/recamera_pro_rknn_upload/)
- [Conversión de ONNX a RKNN con SenseCraft](/es/recamera_pro_sensecraft/)
- [Conversión con RKNN-Toolkit2](/es/recamera_pro_rknn_model_conversion/)
- [Validar el rendimiento del modelo](/es/recamera_pro_model_validate/)

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
