---
description: Empieza aquí: encuentra la guía adecuada para lo que quieres hacer con reCamera Pro.
title: reCamera Pro
keywords:
  - reCamera
  - reCamera Pro
  - Edge AI
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro
sku: 10003420
last_update:
  date: 09/21/2026
  author: Seeed Studio
url: https://wiki.seeedstudio.com/es/recamera_pro/
---

# Empieza aquí

reCamera Pro es una cámara de IA basada en el SoC Rockchip RV1126B (Cortex-A53 de cuatro núcleos a 1,2 GHz, NPU de 3 TOPS), con una cámara 4K (SC850SL, 4K@30FPS), un IMU de 6 ejes, entrada de micrófono, un altavoz de 1 W, 16 GB de eMMC más una ranura para tarjeta SD, e interfaces de expansión ricas (GPIO, UART, CAN, MIPI-DSI). Todo en el dispositivo — vista previa en vivo, detección de IA, grabación de eventos, entrenamiento de modelos de sonido — se puede operar desde la interfaz web integrada, y hay una integración más profunda disponible a través de la API HTTP y el SDK nativo.

Esta página es tu navegador de tareas: elige lo que quieres hacer a continuación, o sigue la ruta de inicio predeterminada si es tu primera vez.

<!-- TODO(O1, per migration map): add real preview screenshot as the capability entry image (from Live Preview page assets); verify all statements in this intro against the shipping firmware before release. -->

## Ruta de inicio predeterminada

¿Nuevo en reCamera Pro? Sigue estos tres pasos en orden:

1. [Inicio rápido: ve tu primera detección de IA](/es/recamera_pro_getting_started/) — enciende el dispositivo, inicia sesión en la interfaz web y observa una detección en vivo.
2. [Primera tarea: detectar y grabar](/es/recamera_pro_first_recording/) — convierte una detección en una grabación de evento y reprodúcela.
3. [Accede al dispositivo por Wi-Fi](/es/recamera_pro_wifi_access/) — pasa de la conexión directa a tu red local.

## ¿Qué quieres hacer?

### 1. Primeros pasos

- [Ve tu primera detección de IA](/es/recamera_pro_getting_started/)
- [Detecta y graba tu primer evento](/es/recamera_pro_first_recording/)
- [Accede al dispositivo por Wi-Fi](/es/recamera_pro_wifi_access/)

### 2. Crea tu aplicación

- [Vista previa, captura fotos y graba manualmente](/es/recamera_pro_live_preview/)
- [Ajusta la calidad de imagen y el rendimiento en baja iluminación](/es/recamera_pro_image_quality/) — incluye la muestra de baja iluminación de 0,3 lux <!-- TODO(O1/B2): link the actual 0.3 lux sample once captured and verified on the image quality page; do not fabricate sample images. -->
- [Mira el stream en un reproductor externo (RTSP)](/es/recamera_pro_rtsp/)
- [Configura OSD y máscaras de privacidad](/es/recamera_pro_osd_masks/)
- [Configura la detección: clases, umbrales, programación](/es/recamera_pro_ai_inference/)
- [Configura la grabación de eventos](/es/recamera_pro_record_settings/) y [encuentra tus grabaciones y gestiona el almacenamiento](/es/recamera_pro_storage/)
- [Entrena tu propio modelo de sonido](/es/recamera_pro_acoustic_lab_usage/) y [dispara la captura por sonido](/es/recamera_pro_sound_trigger/)
- [Envía resultados de detección al exterior: MQTT](/es/recamera_pro_mqtt/) · [HTTP / UART](/es/recamera_pro_http_uart/)
- [Dispara la captura desde un dispositivo externo](/es/recamera_pro_uart_usage/)
- [Alertas activadas por sonido en Home Assistant](/es/recamera_pro_ha_sound_alert/)
- [Haz tu primera llamada a la API](/es/recamera_pro_api_quick_start/)

### 3. Usa tu propio modelo

- [Elige una ruta de despliegue de modelo](/es/recamera_pro_model_path/)
- [Sube y configura un modelo RKNN](/es/recamera_pro_rknn_upload/)
- [Convierte modelos ONNX con SenseCraft](/es/recamera_pro_sensecraft/)
- [Convierte modelos con RKNN-Toolkit2](/es/recamera_pro_rknn_model_conversion/)
- [Valida el rendimiento del modelo en el dispositivo](/es/recamera_pro_model_validate/)

### 4. Desarrolla tu propia aplicación

- [Elige una ruta de desarrollo](/es/recamera_pro_dev_path/)
- [Compila una aplicación mínima con el SDK](/es/recamera_pro_sdk_setup/)
- [Terminal, SSH y UART de depuración](/es/recamera_pro_terminal/)
- [Desarrolla con agentes de programación de IA](/es/recamera_pro_development_cpp_skill/)
- [Canales de cámara / audio / inferencia](/es/recamera_pro_media_dev/)
- Periféricos: [datos del IMU](/es/recamera_pro_imu_usage/) · [pantalla MIPI-DSI](/es/recamera_pro_mipi_dsi_screen_usage/) · [altavoz y volumen](/es/recamera_pro_speaker_usage/) · [pines GPIO](/es/recamera_pro_gpio_guide/)
- Ejemplos: [detección de inclinación y sacudidas](/es/recamera_pro_imu_tilt_shake_detection/) · [despertar visual + reconocimiento de voz](/es/recamera_pro_visual_wake_stt/)
- [Imagen experimental de Debian 13](/es/recamera_pro_debian/)

### 5. Despliegue y mantenimiento

- [Lista de comprobación previa al despliegue](/es/recamera_pro_deploy_checklist/)
- [Red, hora y control de acceso](/es/recamera_pro_device_info/)
- [Copia de seguridad y restauración de la configuración](/es/recamera_pro_backup_restore/)
- [Actualización y recuperación de firmware](/es/recamera_pro_firmware_update/)

### 6. Referencia

- [Especificaciones de hardware y diagramas de interfaz](/es/recamera_pro_hardware_specifications/)
- [Índice de campos y botones de la interfaz web](/es/recamera_pro_webui_reference/)
- [Compatibilidad de modelos y formatos de salida](/es/recamera_pro_model_compatibility/)
- [Descargas y notas de la versión](/es/recamera_pro_downloads/)
- [Referencia de la API](/es/recamera_pro_api_introduction/)

### 7. Resolución de problemas

- [Soluciona problemas por síntoma](/es/recamera_pro_faqs/)
- [Recopila registros para soporte](/es/recamera_pro_collect_logs/)
- [Resolución de problemas de llamadas a la API](/es/recamera_pro_api_faq/)

## Capacidades de un vistazo

<!-- TODO(O1, per migration map "capability status"): build the capability status matrix from the shipping firmware — for each capability (AI detection, event recording, sound training/Acoustic Lab, RTSP streaming, MQTT/HTTP/UART output, external trigger, API), state availability and any known limitations. Sources: Ai_Inference §Feature Overview, Acoustic Lab §Introduction, Live Preview real preview image. Do not invent firmware facts; verify version by version. -->

- **Visión por IA**: detección de objetos/personas en el dispositivo con clases, umbrales y horarios configurables.
- **Detección de sonido**: Acoustic Lab para entrenar modelos de sonido personalizados; el sonido puede activar capturas y alertas.
- **Grabación**: grabación manual más grabación basada en eventos con gestión de almacenamiento.
- **Streaming**: vista previa en vivo en la interfaz web y salida RTSP a reproductores externos.
- **Integración**: API HTTP, salida de resultados por MQTT/HTTP/UART, disparadores externos por GPIO/UART, ejemplo con Home Assistant.
- **Desarrollo**: SDK nativo, flujo de trabajo con agentes de programación de IA, Debian 13 experimental.

## Dónde ir a continuación

- ¿Es tu primera vez aquí? Empieza con la [ruta de inicio predeterminada](#ruta-de-inicio-predeterminada) de arriba.
- ¿Vas a usar tu propio modelo? Ve a [Usa tu propio modelo](/es/recamera_pro_model_path/).
- ¿Vas a escribir código? Ve a [Desarrolla tu propia aplicación](/es/recamera_pro_dev_path/).
- ¿Algo no funciona? Consulta [Resolución de problemas](/es/recamera_pro_faqs/).
