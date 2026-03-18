---
description: Guia para criar e publicar apps do Reachy Mini, integrar LLMs, usar apps web em JavaScript e acessar a API HTTP/WebSocket.
title: Integrações & Apps
slug: /reachymini_sdk_integration
keywords:
  - integração
  - apps
  - llm
  - hugging face
  - apps web
  - rest api
  - websocket
  - ia
  - publicação
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reachymini_sdk_integration/
---

# Integrações & Apps

Reachy Mini é projetado para Criadores de IA. Aqui está como integrar LLMs e compartilhar o seu trabalho.

## Criando um App
Nós fornecemos uma ferramenta de CLI para gerar, verificar e publicar uma estrutura de App padrão (compatível com Hugging Face Spaces).

*Veja nosso tutorial no blog: [Make and Publish Reachy Mini Apps](https://huggingface.co/blog/pollen-robotics/make-and-publish-your-reachy-mini-apps)*

## Apps Web em JavaScript
Quer um app sem instalação, multiplataforma, que roda no navegador? Veja o guia [JavaScript SDK & Web Apps](/pt-br/reachymini_sdk_javascript-sdk) — crie Hugging Face Spaces estáticos que controlam o seu robô via WebRTC a partir de qualquer dispositivo, incluindo o seu celular.

## API HTTP & WebSocket
Construindo um dashboard ou um controlador que não usa Python? O Daemon expõe controle completo via REST.

* **Docs:** `http://localhost:8000/docs`
* **Obter Estado:** `GET /api/state/full`
* **WebSocket:** `ws://localhost:8000/api/state/ws/full`

## Dicas para Experimentação em IA

* **Demo de Conversa:** Confira nossa implementação de referência que combina VAD (Detecção de Atividade de Voz), LLMs e TTS: [reachy_mini_conversation_demo](https://github.com/pollen-robotics/reachy_mini_conversation_demo).
