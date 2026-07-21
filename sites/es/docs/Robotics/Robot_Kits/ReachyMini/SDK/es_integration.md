---
description: Guía de integraciones y apps para Reachy Mini que cubre creación de apps, SDK de JavaScript, API HTTP/WebSocket y consejos para experimentación con IA.
title: Integraciones y Apps
slug: /reachymini_sdk_integration
keywords:
  - integraciones
  - apps
  - LLM
  - javascript sdk
  - aplicaciones web
  - REST API
  - websocket
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-19'
url: https://wiki.seeedstudio.com/es/reachymini_sdk_integration/
---

# Integraciones y Apps

Reachy Mini está diseñado para Creadores de IA. Aquí te mostramos cómo integrar LLMs y compartir tu trabajo.

## Crear una App

Proporcionamos una herramienta CLI para generar, comprobar y publicar una estructura de App estándar (compatible con Hugging Face Spaces). Consulta la guía completa: **[Creación y Publicación de Apps](/es/reachymini_sdk_apps)**.

## Aplicaciones Web en JavaScript
¿Quieres una app sin instalación, multiplataforma, que se ejecute en el navegador? Consulta la guía [JavaScript SDK y Aplicaciones Web](/es/reachymini_sdk_javascript-sdk): crea Hugging Face Spaces estáticos que controlen tu robot por WebRTC desde cualquier dispositivo, incluido tu teléfono.

## API HTTP y WebSocket
¿Estás creando un panel de control o un controlador que no use Python? El Daemon expone control completo mediante REST.

* **Docs:** `http://localhost:8000/docs`
* **Obtener estado:** `GET /api/state/full`
* **WebSocket:** `ws://localhost:8000/api/state/ws/full`

## Consejos para la Experimentación con IA

* **Demo de conversación:** Consulta nuestra implementación de referencia que combina VAD (detección de actividad de voz), LLMs y TTS: [reachy_mini_conversation_demo](https://github.com/pollen-robotics/reachy_mini_conversation_demo).
* **Pipelines personalizados de visión/audio:** Si tu pipeline de IA necesita acceso directo a la cámara o al micrófono (por ejemplo, un detector OpenCV personalizado, Whisper con sounddevice), puedes desactivar el gestor de medios integrado con `media_backend="no_media"`. Consulta [Desactivar medios](/es/reachymini_sdk_media-architecture#desactivar-medios--acceso-directo-al-hardware) para más detalles.