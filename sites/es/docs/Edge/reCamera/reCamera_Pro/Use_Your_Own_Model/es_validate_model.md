---
description: Verifica que un modelo personalizado se ejecute correctamente en reCamera Pro - comprueba el estado de inferencia, los FPS, la salida de detección y el uso de recursos.
title: Validar el rendimiento del modelo
keywords:
  - reCamera
  - reCamera Pro
  - model validation
  - inference
  - FPS
  - performance
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_model_validate
sku: 10003420
sidebar_position: 5
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/es/recamera_pro_model_validate/
---

# Validar el rendimiento del modelo

Después de subir o convertir un modelo personalizado, verifica que se ejecute correctamente en reCamera Pro antes de desplegarlo en producción.

## Paso 1: Iniciar la inferencia

1. En la interfaz web, ve a **AI Inference** → **Inference Configuration**.
2. Activa la inferencia.
3. Selecciona tu modelo como **Running Model**.
4. Configura la frecuencia de inferencia.
5. Haz clic en **Save Configuration**.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_PaSSqyKuWi.png" />

## Paso 2: Comprobar la monitorización en tiempo real

Ve a **Real-time Inference Monitoring** para observar:

| Métrica | Qué comprobar |
|---|---|
| Estado de inferencia | En ejecución o detenida |
| FPS | Fotogramas por segundo: cuanto más alto, mejor |
| Resultados de detección | Nombres de clase, puntuaciones de confianza, cuadros delimitadores |
| Recuento de detecciones | Número de objetos por fotograma |

{/* TODO(verify): confirm exact field names displayed in Real-time Inference Monitoring (e.g. whether FPS, CPU usage, NPU usage, or memory usage are shown) */}

## Paso 3: Validar la precisión de detección

1. Apunta la cámara a sujetos de prueba que coincidan con tus categorías de detección.
2. Observa si las detecciones aparecen con los nombres de clase correctos y puntuaciones de confianza razonables.
3. Comprueba si hay falsos positivos (objetos detectados que no están presentes) y falsos negativos (objetos presentes pero no detectados).

### Ajustar los parámetros de postprocesado

Si la calidad de la detección es deficiente, vuelve a [Model Configuration](/es/recamera_pro_rknn_upload/):

| Parámetro | Efecto |
|---|---|
| Umbral IOU | Más bajo → menos cuadros duplicados; más alto → se mantienen más cuadros superpuestos |
| Umbral de confianza | Más bajo → más detecciones (incluidos falsos positivos); más alto → menos detecciones pero más fiables |
| max_obj | Máximo de objetos reportados por fotograma |

## Paso 4: Comprobar el uso de recursos

Supervisa el uso de recursos del dispositivo durante la inferencia mediante SSH:

```bash
# CPU and memory
top -bn1 | head -5

# NPU usage (if available)
# TODO(verify): confirm the command to check RKNN NPU utilization on reCamera Pro
```

{/* TODO(verify): confirm exact SSH commands for monitoring NPU/RKNN utilization and memory consumption during inference */}

## Problemas comunes

| Síntoma | Posible causa | Solución |
|---|---|---|
| El modelo no se carga | Operador o formato de cuantificación incompatible | Vuelve a convertir con RKNN-Toolkit2; consulta [Model Compatibility](/es/recamera_pro_model_compatibility/) |
| FPS muy bajos | Modelo demasiado grande o complejo | Usa un modelo más ligero o reduce la resolución de entrada |
| Sin detecciones | Configuración de categorías incorrecta o umbral demasiado alto | Verifica que las categorías de detección coincidan con la salida del modelo; reduce el umbral de confianza |
| Nombres de clase ilegibles | Lista de categorías no coincidente | Vuelve a importar el TXT de categorías correcto en Model Configuration |

## Páginas relacionadas

- [Elegir una ruta de despliegue de modelo](/es/recamera_pro_model_path/)
- [Subir y configurar un modelo RKNN](/es/recamera_pro_rknn_upload/)
- [Configurar la detección](/es/recamera_pro_ai_inference/)
- [Compatibilidad de modelos](/es/recamera_pro_model_compatibility/)

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
