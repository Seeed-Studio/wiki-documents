---
description: Referencia completa de la API REST para el daemon de Reachy Mini que cubre endpoints HTTP y WebSocket para apps, daemon, estado, movimiento, motores, cinemática, volumen y autenticación de Hugging Face.
title: Referencia de la API REST
slug: /reachymini_api_rest-api
keywords:
  - rest api
  - http api
  - websocket
  - endpoints
  - daemon
  - apps
  - state
  - motors
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/es/reachymini_api_rest-api/
---

# API REST

El daemon de Reachy Mini expone una API HTTP y WebSocket en `http://<daemon-ip>:8000/api`.

- **Lite** — el daemon se ejecuta en tu máquina: `http://localhost:8000`
- **Wireless** — el daemon se ejecuta en el robot: `http://reachy-mini.local:8000`

Cuando el daemon está en ejecución puedes navegar por la **Swagger UI** interactiva en

- [http://localhost:8000/docs](http://localhost:8000/docs) (Lite — daemon en tu máquina)
- [http://reachy-mini.local:8000/docs](http://reachy-mini.local:8000/docs) (Wireless — daemon en el robot)

La referencia siguiente se genera a partir de la misma especificación OpenAPI y puede consultarse
sin necesidad de que el daemon esté en ejecución.

## Resumen de endpoints

| Categoría | Prefijo | Descripción |
|----------|--------|-------------|
| **Apps** | `/api/apps` | Listar, instalar, iniciar y detener apps |
| **Daemon** | `/api/daemon` | Iniciar, detener y reiniciar el daemon |
| **State** | `/api/state` | Leer la pose de la cabeza, guiñada del cuerpo, antenas, DoA |
| **Move** | `/api/move` | Ir a, establecer objetivo, reproducir movimientos grabados |
| **Motors** | `/api/motors` | Obtener estado del motor, establecer modo de control |
| **Kinematics** | `/api/kinematics` | Información de IK, archivos de malla URDF y STL |
| **Volume** | `/api/volume` | Control de volumen del altavoz y del micrófono |
| **HF Auth** | `/api/hf-auth` | Gestión de tokens de Hugging Face |

## Referencia completa

<iframe
  src="https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/pollen-robotics/reachy_mini/develop/docs/source/API/openapi.json"
  style={{width: '100%', height: '80vh', border: 'none'}}
></iframe>

[Abrir en página completa](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/pollen-robotics/reachy_mini/develop/docs/source/API/openapi.json) · [Descargar especificación OpenAPI (JSON)](https://raw.githubusercontent.com/pollen-robotics/reachy_mini/develop/docs/source/API/openapi.json)

## Apps más complejas

Consulta la página [JavaScript SDK & Web Apps](../SDK/javascript-sdk.md) para ver ejemplos de apps más complejas que usan el JavaScript SDK, el cual aprovecha el transporte WebRTC y proporciona abstracciones de mayor nivel para vídeo, audio y control del robot.