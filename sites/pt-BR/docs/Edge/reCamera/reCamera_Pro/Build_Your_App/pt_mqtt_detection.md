---
description: Envie resultados de detecção de IA da reCamera Pro para um broker MQTT para integração com dashboards, plataformas de automação ou aplicações personalizadas.
title: Enviar resultados de detecção via MQTT
keywords:
  - reCamera
  - reCamera Pro
  - MQTT
  - inferência de IA
  - saída de detecção
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_mqtt
sku: 10003420
sidebar_position: 10
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_mqtt/
---

# Enviar resultados de detecção via MQTT

A reCamera Pro pode enviar resultados de inferência de IA para sistemas externos via MQTT. Isso é útil para integração com dashboards (por exemplo, Home Assistant, Node-RED), plataformas de automação ou aplicações personalizadas que assinam eventos de detecção.

## Configurar saída MQTT

1. Na interface Web, vá para **AI Inference** → **Inference Output Configuration**.
2. Selecione o modelo de saída, o tipo de tarefa e **MQTT** como método de saída.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_WaXFL9Pz9G.png" />

{/* TODO(verify): document MQTT broker configuration fields (broker address, port, topic, username/password, TLS), and confirm whether the Web UI exposes these or if they require SSH/API configuration */}

## Formato de saída

O payload da mensagem MQTT normalmente inclui:

| Field | Description |
|---|---|
| timestamp | Timestamp do resultado da inferência |
| task_type | Tipo de tarefa atual |
| class_id | ID da classe detectada |
| class_name | Nome da classe detectada |
| score | Confiança da detecção |
| bbox | Coordenadas da bounding box |
| detection_count | Número de objetos detectados no frame atual |

{/* TODO(verify): confirm exact MQTT payload JSON schema and topic naming convention on production firmware */}

## Páginas relacionadas

- [Configurar detecção](/pt-br/recamera_pro_ai_inference/)
- [Enviar resultados de detecção via HTTP/UART](/pt-br/recamera_pro_http_uart/)
- [Alerta de foto acionado por som no Home Assistant](/pt-br/recamera_pro_ha_sound_alert/)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
