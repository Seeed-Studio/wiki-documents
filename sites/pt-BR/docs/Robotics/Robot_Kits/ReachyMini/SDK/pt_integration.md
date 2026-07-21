---
description: Guia de integrações e apps para o Reachy Mini, cobrindo criação de apps, SDK JavaScript, API HTTP/WebSocket e dicas para experimentação com IA.
title: Integrações & Apps
slug: /reachymini_sdk_integration
keywords:
  - integrações
  - apps
  - LLM
  - javascript sdk
  - apps web
  - REST API
  - websocket
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-19'
url: https://wiki.seeedstudio.com/pt-br/reachymini_sdk_integration/
---

# Integrações & Apps

Reachy Mini foi projetado para Criadores de IA. Veja como integrar LLMs e compartilhar seu trabalho.

## Criando um App

Fornecemos uma ferramenta de CLI para gerar, verificar e publicar uma estrutura de App padrão (compatível com Hugging Face Spaces). Veja o guia completo: **[Criando & Publicando Apps](/pt-br/reachymini_sdk_apps)**.

## Apps Web em JavaScript
Quer um app sem instalação, multiplataforma, que roda no navegador? Confira o guia [JavaScript SDK & Web Apps](/pt-br/reachymini_sdk_javascript-sdk) — crie Hugging Face Spaces estáticos que controlam seu robô via WebRTC a partir de qualquer dispositivo, incluindo seu celular.

## API HTTP & WebSocket
Construindo um dashboard ou um controlador que não seja em Python? O Daemon expõe controle completo via REST.

* **Docs:** `http://localhost:8000/docs`
* **Get State:** `GET /api/state/full`
* **WebSocket:** `ws://localhost:8000/api/state/ws/full`

## Dicas para Experimentação com IA

* **Demo de Conversa:** Confira nossa implementação de referência que combina VAD (Detecção de Atividade de Voz), LLMs e TTS: [reachy_mini_conversation_demo](https://github.com/pollen-robotics/reachy_mini_conversation_demo).
* **Pipelines personalizados de visão/áudio:** Se o seu pipeline de IA precisar de acesso direto à câmera ou ao microfone (por exemplo, um detector OpenCV personalizado, Whisper com sounddevice), você pode desativar o gerenciador de mídia integrado com `media_backend="no_media"`. Veja [Desativando Mídia](/pt-br/reachymini_sdk_media-architecture#desativando-mídia--acesso-direto-ao-hardware) para mais detalhes.