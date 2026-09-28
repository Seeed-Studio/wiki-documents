---
description: Tu primera tarea de extremo a extremo con reCamera Pro - configura una regla de grabación activada por IA, deja que un objetivo detectado inicie una grabación automáticamente y luego encuentra y reproduce el archivo de video.
title: 'Primera tarea: detectar y grabar'
keywords:
  - reCamera
  - reCamera Pro
  - Edge AI
  - event recording
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_first_recording
sku: 10003420
sidebar_position: 2
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/es/recamera_pro_first_recording/
---

# Primera tarea: detectar y grabar

En la [guía de inicio rápido](/es/recamera_pro_getting_started/) confirmaste que la detección por IA funciona en la vista previa en vivo. Este tutorial convierte esa detección en algo que el dispositivo hace por sí solo: **cuando aparece un objetivo, reCamera Pro lo graba automáticamente** y tú reproduces el clip desde la interfaz web.

El flujo de trabajo:

1. [Preparar: elegir un modelo y un objetivo](#1-preparar-elegir-un-modelo-y-un-objetivo)
2. [Configurar el formato de grabación](#2-configurar-el-formato-de-grabación)
3. [Configurar el disparador de inferencia de IA](#3-configurar-el-disparador-de-inferencia-de-ia)
4. [Aplicar la regla y activar una grabación](#4-aplicar-la-regla-y-activar-una-grabación)
5. [Encontrar y reproducir la grabación](#5-encontrar-y-reproducir-la-grabación)

{/* TODO(verify): run this tutorial end-to-end on a real device — record the exact model and target used, the configuration values (confidence range, category filter), the trigger action, and attach screenshots of the resulting recording and playback. */}

## 1. Preparar: elegir un modelo y un objetivo

- Asegúrate de que la inferencia de IA esté en ejecución: **AI Inference → Inference Configuration → Inference Enable** activado, un modelo de detección seleccionado como **Running Model**, estado **Running**. Si aún no lo has hecho, sigue el [paso 4 de la guía de inicio rápido](/es/recamera_pro_getting_started/#4-confirmar-que-la-detección-por-ia-funciona).
- Decide qué debe activar la grabación. La tarea inicial más sencilla: grabar cuando una **persona** entra en el campo de visión. Las categorías disponibles provienen de la salida del modelo en ejecución (por ejemplo, Person, Vehicle, Hardhat, Mask, Safety Vest, Machinery).

Los propios parámetros de detección (categorías, umbrales de confianza/IOU, frecuencia de inferencia) se configuran en la [página de configuración de AI Inference](/es/recamera_pro_ai_inference/); este tutorial solo hace referencia a ellos.

## 2. Configurar el formato de grabación

Abre **Recording Settings** en la barra de navegación izquierda. En la parte superior de la página, selecciona el formato de archivo de grabación:

| Parámetro | Descripción |
| --- | --- |
| Recording Format | Formato para los archivos guardados: MP4 (video), JPG (imágenes) o RAW (datos de imagen originales) |

Para este tutorial, elige **MP4**. Nota: cuando se selecciona MP4, cada grabación tiene una duración fija de **1 minuto**.

Todas las opciones de grabación de esta página — métodos de disparo, horarios, cuotas de almacenamiento — están documentadas en detalle en la [página de configuración de grabación de eventos](/es/recamera_pro_record_settings/).

## 3. Configurar el disparador de inferencia de IA

En la lista de métodos de disparo, elige **AI Inference Trigger** y haz clic en **Configure**:

| Elemento de configuración | Qué ajustar para este tutorial |
| --- | --- |
| Inference Task | Selecciona la tarea de inferencia de IA en ejecución |
| Confidence Range | Mantén el rango predeterminado para tu primera grabación |
| Category Filter | Selecciona **Person** (o la categoría que quieras detectar) |
| Trigger Area | Déjalo vacío; sin región dibujada, se activa todo el fotograma |

{/* TODO(verify): capture the default confidence range shown in the UI and confirm whether the trigger area default is "entire frame" on current firmware. */}

Opcionalmente, usa **Schedule Management** para limitar cuándo está activa la regla (por ejemplo, solo en horario nocturno). Para una primera prueba, deja el horario cubriendo la hora actual.

## 4. Aplicar la regla y activar una grabación

1. Haz clic en **Apply** junto a AI Inference Trigger. El estado en la parte superior de la página muestra el método de disparo activo, por ejemplo, *Current: AI Inference Trigger*.
2. Entra en el campo de visión de la cámara (o muestra tu objetivo elegido).
3. El sistema detecta el objetivo e inicia la grabación automáticamente. Con el formato MP4, el clip dura 1 minuto.

## 5. Encontrar y reproducir la grabación

Aún en **Recording Settings**:

1. Abre **File Preview**; los archivos grabados se listan en directorios por fecha.
2. Abre el archivo de hoy: la interfaz web lo reproduce en línea, para que puedas revisar el evento sin descargar nada.
3. Revisa **Storage Management** para ver el uso de disco y dónde se guardan los archivos. Puedes establecer una cuota de almacenamiento y habilitar la sobrescritura de archivos antiguos para que siempre se conserven las grabaciones más recientes.

Comportamiento de almacenamiento en profundidad (cuotas, política de disco lleno, descarga): consulta [Encontrar grabaciones y almacenamiento](/es/recamera_pro_storage/).

{/* TODO(verify): confirm playback and download behavior of File Preview on current firmware and attach a screenshot of a recorded clip playing back. */}

## Resultado

Ahora tienes una regla de grabación con IA autónoma: sin ordenador de por medio, el dispositivo detecta y graba por sí solo. Siguientes pasos típicos:

- Restringir el disparador a una zona (entrada, área peligrosa) con **Trigger Area**.
- Cambiar o combinar fuentes de disparo — programadas, GPIO, serie, HTTPS, bucle o eventos de sonido — en la [página de configuración de grabación de eventos](/es/recamera_pro_record_settings/).
- Enviar los resultados de detección a tu propio sistema mediante [MQTT](/es/recamera_pro_mqtt/) o [HTTP/UART](/es/recamera_pro_http_uart/).
- Antes de montar el dispositivo de forma permanente, ejecuta la [lista de verificación previa al despliegue](/es/recamera_pro_deploy_checklist/).

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
