---
description: Envie resultados de detecção de IA da reCamera Pro para sistemas externos via HTTP ou porta serial UART.
title: Enviar resultados de detecção via HTTP ou UART
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
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_http_uart/
---

# Enviar resultados de detecção via HTTP ou UART

Além de [MQTT](/pt-br/recamera_pro_mqtt/), a reCamera Pro oferece suporte ao envio de resultados de inferência de IA para sistemas externos via HTTP e UART.

## Saída via HTTP

Na interface Web, vá para **AI Inference** → **Inference Output Configuration** e selecione **HTTP** como método de saída.

{/* TODO(verify): document HTTP output configuration fields (target URL, method, headers, payload format), and confirm whether reCamera Pro sends a POST request with the inference JSON */}

A saída via HTTP é adequada para integração com APIs REST, webhooks, serviços de backend personalizados ou plataformas de terceiros que aceitam requisições HTTP.

## Saída via UART

A saída via UART envia os resultados de inferência pela porta serial da interface de expansão. Isso é útil para integração com controladores externos, MCUs ou equipamentos industriais que se comunicam via protocolo serial.

### Configurar saída via UART

1. Em **AI Inference** → **Output Method**, selecione **Serial Port**.

![UART AI output configuration](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_AI_OUTPUT_CONFIG.png)

2. Abra sua ferramenta de porta serial para receber os resultados de inferência.

![UART AI output results](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/UART_AI_OUTPUT.png)

### Formato de saída

A saída via UART contém os mesmos campos do log de monitoramento de inferência em tempo real (timestamp, task_type, class_id, class_name, score, bbox, detection_count).

{/* TODO(verify): confirm UART output baud rate (set in Device Info → Connection Settings), data format (JSON lines? raw text?), and whether output is sent only when detection_count > 0 or on every frame */}

:::note
O comando de disparo para acionamento pela porta serial (consulte [Acionar captura a partir de dispositivos externos](/pt-br/recamera_pro_uart_usage/)) só pode ser enviado em formato ASCII. Envio em HEX e caracteres chineses não são suportados.
:::

## Páginas relacionadas

- [Configurar detecção](/pt-br/recamera_pro_ai_inference/)
- [Enviar resultados de detecção via MQTT](/pt-br/recamera_pro_mqtt/)
- [Acionar captura a partir de dispositivos externos](/pt-br/recamera_pro_uart_usage/)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte e garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
