---
description: Convierte modelos ONNX al formato RKNN usando la plataforma SenseCraft y despliega en reCamera Pro sin herramientas locales.
title: "Conversión de SenseCraft de ONNX a RKNN"
keywords:
  - reCamera
  - reCamera Pro
  - SenseCraft
  - ONNX
  - RKNN
  - model conversion
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_sensecraft
sku: 10003420
sidebar_position: 3
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/es/recamera_pro_sensecraft/
---

# Conversión de SenseCraft de ONNX a RKNN

reCamera Pro incluye un punto de entrada integrado a **SenseCraft**, una plataforma en la nube que convierte modelos ONNX al formato RKNN. Esto te permite desplegar modelos personalizados sin instalar RKNN-Toolkit2 localmente.

## Acceder a SenseCraft

1. En la interfaz web, ve a **AI Inference**.
2. Haz clic en **View SenseCraft Models**.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_FQNy2aeXpQ.png" />

## Flujo de trabajo de conversión

1. Haz clic en **View SenseCraft Models** para abrir la interfaz de conversión.
2. Selecciona el **archivo de modelo ONNX** que quieres convertir.
3. Opcionalmente, sube un **conjunto de datos de cuantificación**. Si no se proporciona ninguno, el sistema utiliza un conjunto de datos predeterminado.
4. Haz clic en **Start Conversion**.
5. Una vez completada la conversión, el modelo RKNN generado se puede desplegar en reCamera Pro.

{/* TODO(verify): confirm whether SenseCraft conversion supports INT8 quantization, FP16, or both, and the maximum model file size */}

## Cuándo usar SenseCraft vs RKNN-Toolkit2

| Factor | SenseCraft | RKNN-Toolkit2 |
|---|---|---|
| Configuración | Ninguna (nube) | Entorno Python local |
| Control de cuantificación | Básico (conjunto de datos predeterminado o personalizado) | Completo (INT8/FP16, calibración personalizada, control a nivel de capa) |
| Velocidad | Subir + esperar | Conversión local |
| Ideal para | Despliegue rápido | Optimización para producción |

Para un control completo de la cuantificación, consulta [Conversión con RKNN-Toolkit2](/es/recamera_pro_rknn_model_conversion/).

## Páginas relacionadas

- [Elegir una ruta de despliegue de modelo](/es/recamera_pro_model_path/)
- [Subir y configurar un modelo RKNN](/es/recamera_pro_rknn_upload/)
- [Conversión con RKNN-Toolkit2](/es/recamera_pro_rknn_model_conversion/)

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
