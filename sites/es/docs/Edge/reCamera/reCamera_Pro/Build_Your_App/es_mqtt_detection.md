---
description: Envía resultados de detección con IA desde reCamera Pro a un broker MQTT para integrarlos con paneles, plataformas de automatización o aplicaciones personalizadas.
title: Enviar resultados de detección por MQTT
keywords:
  - reCamera
  - reCamera Pro
  - MQTT
  - AI inference
  - detection output
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_mqtt
sku: 10003420
sidebar_position: 10
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/es/recamera_pro_mqtt/
---

# Enviar resultados de detección por MQTT

reCamera Pro puede enviar resultados de inferencia de IA a sistemas externos mediante MQTT. Esto es útil para integrarlo con paneles (por ejemplo, Home Assistant, Node-RED), plataformas de automatización o aplicaciones personalizadas que se suscriban a eventos de detección.

## Configurar la salida MQTT

1. En la interfaz web, ve a **AI Inference** → **Inference Output Configuration**.
2. Selecciona la plantilla de salida, el tipo de tarea y **MQTT** como método de salida.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_WaXFL9Pz9G.png" />

{/* TODO(verify): document MQTT broker configuration fields (broker address, port, topic, username/password, TLS), and confirm whether the Web UI exposes these or if they require SSH/API configuration */}

## Formato de salida

La carga útil del mensaje MQTT normalmente incluye:

| Field | Description |
|---|---|
| timestamp | Marca de tiempo del resultado de inferencia |
| task_type | Tipo de tarea actual |
| class_id | ID de la clase detectada |
| class_name | Nombre de la clase detectada |
| score | Confianza de la detección |
| bbox | Coordenadas del cuadro delimitador |
| detection_count | Número de objetos detectados en el fotograma actual |

{/* TODO(verify): confirm exact MQTT payload JSON schema and topic naming convention on production firmware */}

## Páginas relacionadas

- [Configurar detección](/es/recamera_pro_ai_inference/)
- [Enviar resultados de detección por HTTP/UART](/es/recamera_pro_http_uart/)
- [Alerta de foto activada por sonido en Home Assistant](/es/recamera_pro_ha_sound_alert/)

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
