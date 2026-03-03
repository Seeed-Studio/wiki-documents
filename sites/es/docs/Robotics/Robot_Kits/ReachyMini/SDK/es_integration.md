---
description: Guía para crear y publicar apps de Reachy Mini, integrar LLMs, usar aplicaciones web en JavaScript y acceder a la API HTTP/WebSocket.
title: Integraciones y Apps
slug: /es/reachymini_sdk_integration
keywords:
- integration
- apps
- llm
- hugging face
- web apps
- rest api
- websocket
- ai
- publishing
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# Integraciones y Apps

Reachy Mini está diseñado para Creadores de IA. Aquí te mostramos cómo integrar LLMs y compartir tu trabajo.

## Crear una App
Proporcionamos una herramienta CLI para generar, comprobar y publicar una estructura de App estándar (compatible con Hugging Face Spaces).

*Consulta nuestro tutorial en el blog: [Make and Publish Reachy Mini Apps](https://huggingface.co/blog/pollen-robotics/make-and-publish-your-reachy-mini-apps)*

## Aplicaciones Web en JavaScript
¿Quieres una app multiplataforma sin instalación que se ejecute en el navegador? Consulta la guía [JavaScript SDK & Web Apps](/es/reachymini_sdk_javascript-sdk): crea Hugging Face Spaces estáticos que controlen tu robot mediante WebRTC desde cualquier dispositivo, incluido tu teléfono.

## API HTTP y WebSocket
¿Estás creando un panel de control o un controlador que no use Python? El Daemon expone control completo mediante REST.

* **Docs:** `http://localhost:8000/docs`
* **Get State:** `GET /api/state/full`
* **WebSocket:** `ws://localhost:8000/api/state/ws/full`

## Consejos para la Experimentación con IA

* **Conversation Demo:** Consulta nuestra implementación de referencia que combina VAD (Voice Activity Detection), LLMs y TTS: [reachy_mini_conversation_demo](https://github.com/pollen-robotics/reachy_mini_conversation_demo).
