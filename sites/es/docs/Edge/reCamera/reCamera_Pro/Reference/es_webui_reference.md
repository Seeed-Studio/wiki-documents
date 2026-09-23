---
description: Un índice a nivel de campo de la Web UI integrada de reCamera Pro: cada página, sus ajustes clave y dónde encontrar la guía completa.
title: Referencia de la Web UI
keywords:
  - reCamera
  - reCamera Pro
  - Web UI
  - vista previa en vivo
  - inferencia de IA
  - ajustes de grabación
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_webui_reference
sku: 10003420
sidebar_position: 3
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/es/recamera_pro_webui_reference/
---

# Referencia de la Web UI

reCamera Pro se entrega con una Web UI integrada. Conecta el dispositivo a tu red, abre su dirección IP en un navegador e inicia sesión (credenciales predeterminadas: `root` / `recamera` — cámbialas antes del despliegue, consulta [Network, Time and Access](/es/recamera_pro_device_info/)).

Esta página es un índice a nivel de campo: para cada módulo de la Web UI enumera los ajustes clave que puedes configurar y enlaza a la guía de tareas que explica cuándo y cómo usarlos.

## Mapa de módulos

| Módulo de la Web UI | Qué hace | Guía completa |
| --- | --- | --- |
| Live Preview | Vídeo en tiempo real, tomar foto, grabar vídeo, cambio entre flujo principal/secundario | [Preview, Capture and Record](/es/recamera_pro_live_preview/) |
| Basic / Display Settings | Resolución, codificación, FPS, GOP, bitrate; voltear/rotar, cambio día-noche, ajuste de imagen | [Image Quality and Low Light](/es/recamera_pro_image_quality/) |
| OSD Settings | Superposiciones de nombre de canal, fecha/hora y número de serie | [OSD and Privacy Masks](/es/recamera_pro_osd_masks/) |
| Image Masking | Enmascaramiento de privacidad de áreas sensibles | [OSD and Privacy Masks](/es/recamera_pro_osd_masks/) |
| Streaming Settings | Streaming RTSP para plataformas de terceros y NVRs | [Stream Video over RTSP](/es/recamera_pro_rtsp/) |
| AI Inference | Gestión de modelos, carga, configuración, control de inferencia, monitorización, salida | [Configure Detection](/es/recamera_pro_ai_inference/) |
| Record Settings | Reglas de disparo (IA / programado / GPIO / serie / HTTPS / bucle / sonido), almacenamiento, vista previa de archivos | [Configure Event Recording](/es/recamera_pro_record_settings/) |
| Device Info | Información del sistema, hora, red (WiFi), ajustes de conexión (SSH/HTTP/baudios), firmware, exportación/importación de configuración | [Network, Time and Access](/es/recamera_pro_device_info/) |
| Terminal | Registros del sistema en vivo y una consola de terminal en el navegador | [Terminal, SSH and Debug UART](/es/recamera_pro_terminal/) |

## Live Preview

El lado izquierdo de la página muestra la vista previa de vídeo en tiempo real; el lado derecho muestra los paneles de configuración.

- **Start/Stop Playback** — reproduce la señal de la cámara actual en el navegador
- **Main Stream / Sub-Stream** — flujo principal para vista previa en alta definición, almacenamiento y análisis de IA; flujo secundario para bajo ancho de banda o visualización multicanal
- **Take Photo / Record Video** — captura una imagen fija o un clip de vídeo de la señal actual
- **Volume / Connection status** — volumen de reproducción y estado de conexión en vivo; aparece un aviso de fallo cuando el dispositivo se desconecta o el flujo es anómalo

## Basic Settings (video encoding)

Se configura por separado para el flujo principal y el flujo secundario; haz clic en **Save Video Settings** para aplicar, **Reset** para restaurar.

| Parámetro | Descripción |
| --- | --- |
| Resolution | Resolución de salida de vídeo, p. ej., 1920×1080 (1080P) |
| Encoding Format | Códec de vídeo, p. ej., H.264 |
| Frame Rate (FPS) | Frecuencia de fotogramas de vídeo, p. ej., 30 FPS |
| GOP | Intervalo de fotogramas clave |
| Bitrate Control Mode | p. ej., VBR (Variable Bitrate) |
| Max Bitrate | Bitrate máximo en Kbps |
| Bitrate Quality | Nivel de calidad de codificación |

La captura y el almacenamiento de audio se pueden activar o desactivar aquí (**Audio Settings** / **Audio Storage Settings**).

## Display Settings

| Grupo | Parámetros |
| --- | --- |
| Orientation | Voltear, Rotar (p. ej., 0°), Estándar de vídeo (p. ej., PAL 50Hz) |
| Day/Night | Modo de cambio (p. ej., automático), Sensibilidad del umbral de cambio, Tiempo de histéresis de cambio |
| Image tuning | Brillo, Contraste, Saturación, Nitidez, Matiz, Modo de exposición, Modo de ganancia (basado en perfiles) |

## OSD Settings

Superposiciones renderizadas sobre la señal de vídeo. Las coordenadas son posiciones relativas y también se pueden arrastrar directamente.

| Elemento de configuración | Descripción |
| --- | --- |
| Font Size / Font Color / Color Mode | Apariencia del texto OSD, con opción de color personalizado |
| Channel Name Overlay / Name / Coordinates | p. ej., "Camera 01", posicionada en pantalla |
| Date and Time Overlay / Date Format / Time Format / Show Weekday / Coordinates | Opciones de superposición de hora |
| Serial Number Overlay | Mostrar u ocultar el número de serie del dispositivo |

## Image Masking

Dibuja máscaras de privacidad manual o automáticamente para ocultar áreas sensibles (oficinas, viviendas, números de puerta, pantallas) en la vista previa, la grabación y los flujos. Las máscaras surten efecto inmediatamente después de guardar.

## Streaming Settings

Configurado por flujo (principal/secundario):

| Parámetro | Descripción |
| --- | --- |
| Stream Setting Switch | Activa o desactiva el streaming para el flujo actual |
| Streaming Protocol | p. ej., RTSP |
| Authentication Type | p. ej., sin autenticación |
| Apply Settings | Guarda y aplica la configuración |

Tras la configuración, clientes, plataformas o NVRs de terceros pueden extraer la señal de vídeo desde la dirección del flujo.

## AI Inference

| Sub-módulo | Campos clave |
| --- | --- |
| Model Management | Model File, Model Name, Framework (p. ej., RKNN), Algorithm (p. ej., YOLO, nanodet), Type (p. ej., Detection), Version, Size, Operations (Configure / Delete) |
| Upload Model | Arrastrar y soltar o selector de archivos; archivos de modelo RKNN |
| SenseCraft Model Conversion | Punto de entrada **View SenseCraft Models**; convierte ONNX a RKNN (conjunto de datos de cuantificación opcional) |
| Model Configuration | Model Name, Framework, Version, Type, Algorithm, Author, Description, Detection Categories (manual o importación TXT), Post-processing (IOU, Confidence, max_obj) |
| Inference Configuration | Inference Enable, Running Model, Inference Frequency (FPS), Inference Status, Real-time Inference FPS |
| Real-time Monitoring | Campos de registro: timestamp, task_type, class_id, class_name, score, bbox, detection_count; controles para desactivar, pausar o limpiar |
| Inference Output | Plantilla de salida, tipo de tarea y método: HTTP, MQTT o UART |

Detalles de campos y flujo de trabajo: [Configure Detection](/es/recamera_pro_ai_inference/). Integración de salida: [HTTP/UART](/es/recamera_pro_http_uart/), [MQTT](/es/recamera_pro_mqtt/).

## Record Settings

| Sub-módulo | Campos clave |
| --- | --- |
| Recording Configuration | Formato de grabación, reglas de disparo, horarios |
| Trigger Methods | AI Inference Trigger (categorías, rango de confianza, áreas de disparo), Scheduled Trigger (intervalo), GPIO Trigger (pin, estado, señal, anti-rebote), Serial Trigger (puerto, comando), HTTPS Trigger (URL de disparo), Loop Trigger (continuo), Sound Event Trigger (modelos Sound Lab y categorías de sonido) |
| Schedule Management | Períodos de tiempo efectivos para las reglas de grabación |
| Storage Management | Ver y gestionar el espacio de almacenamiento del dispositivo |
| File Preview | Explorar archivos de vídeo grabados |

Paso a paso: [Configure Event Recording](/es/recamera_pro_record_settings/) y [Find Recordings and Storage](/es/recamera_pro_storage/).

## Device Info

| Sub-módulo | Campos clave |
| --- | --- |
| Basic Information | Versiones de hardware/software, uso de recursos del sistema |
| Time Settings | Hora del sistema |
| Network Settings | Estado de WiFi; información de red detallada por cada red conectada |
| Connection Settings | Activación de conexión remota SSH, ajustes HTTP, velocidad en baudios del puerto serie |
| System Settings | Versión y actualización de firmware, reinicio, cambio de contraseña, restablecimiento de fábrica |
| Export/Import Configuration | Exportar descarga un archivo de ajustes (tar); importar lo carga y lo aplica tras el reinicio |

Detalles: [Network, Time and Access](/es/recamera_pro_device_info/), [Firmware Update and Recovery](/es/recamera_pro_firmware_update/), [Backup and Restore](/es/recamera_pro_backup_restore/).

## Terminal

- **System Log** — registros de operación en tiempo real; filtra por nivel o palabras clave, limpia o descarga archivos de registro para análisis y soporte
- **Terminal console** — inicia sesión en la shell del dispositivo desde el navegador sin una herramienta SSH (`root` / `recamera` predeterminados)

Detalles: [Terminal, SSH and Debug UART](/es/recamera_pro_terminal/); recopilación de registros para soporte: [Collect Logs](/es/recamera_pro_collect_logs/).

<!-- TODO(verify): confirm default Web UI login credentials and firmware-shipped defaults against the current release; confirm exact module labels in the shipping firmware UI. -->


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
