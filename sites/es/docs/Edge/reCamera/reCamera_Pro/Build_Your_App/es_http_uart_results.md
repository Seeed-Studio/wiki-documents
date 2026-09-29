---
description: Envía resultados de detección de IA desde reCamera Pro a sistemas externos mediante HTTP o puerto serie UART.
title: Enviar resultados de detección por HTTP o UART
keywords:
  - reCamera
  - reCamera Pro
  - HTTP
  - UART
  - AI inference
  - detection output
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_http_uart
sku: 10003420
sidebar_position: 11
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/es/recamera_pro_http_uart/
---

# Enviar resultados de detección por HTTP o UART

Además de [MQTT](/es/recamera_pro_mqtt/), reCamera Pro admite la salida de resultados de inferencia de IA a sistemas externos mediante HTTP y UART.

## Salida HTTP

En la interfaz web, ve a **AI Inference** → **Inference Output Configuration** y selecciona **HTTP** como método de salida.

{/* TODO(verify): document HTTP output configuration fields (target URL, method, headers, payload format), and confirm whether reCamera Pro sends a POST request with the inference JSON */}

La salida HTTP es adecuada para la integración con APIs REST, webhooks, servicios backend personalizados o plataformas de terceros que aceptan solicitudes HTTP.

## Salida UART

La salida UART envía los resultados de inferencia a través del puerto serie de la interfaz de expansión. Esto es útil para la integración con controladores externos, MCUs o equipos industriales que se comunican mediante protocolo serie.

### Configurar la salida UART

1. En **AI Inference** → **Output Method**, selecciona **Serial Port**.

![UART AI output configuration](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_AI_OUTPUT_CONFIG.png)

2. Abre tu herramienta de puerto serie para recibir los resultados de inferencia.

![UART AI output results](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_AI_OUTPUT.png)

### Formato de salida

La salida UART contiene los mismos campos que el registro de monitorización de inferencia en tiempo real (timestamp, task_type, class_id, class_name, score, bbox, detection_count).

{/* TODO(verify): confirm UART output baud rate (set in Device Info → Connection Settings), data format (JSON lines? raw text?), and whether output is sent only when detection_count > 0 or on every frame */}

:::note
El comando de disparo para el disparo por puerto serie (consulta [Trigger Capture from External Devices](/es/recamera_pro_uart_usage/)) solo se puede enviar en formato ASCII. No se admiten el envío en HEX ni caracteres chinos.
:::

## Páginas relacionadas

- [Configurar detección](/es/recamera_pro_ai_inference/)
- [Enviar resultados de detección por MQTT](/es/recamera_pro_mqtt/)
- [Disparar captura desde dispositivos externos](/es/recamera_pro_uart_usage/)

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
