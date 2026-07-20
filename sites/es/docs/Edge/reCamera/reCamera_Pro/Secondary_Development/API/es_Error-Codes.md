---
description: Presenta los códigos de error devueltos por la API.
title: Códigos de error
keywords:
  - Edge AI
  - reCamera Pro
  - API
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_api_error_codes
sku: 10003420
sidebar_position: 5
last_update:
  date: 07/15/2026
  author: Sizhao zhou
createdAt: '2026-07-15'
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/es/recamera_pro_api_error_codes/
---

# Códigos de error

## Segmentos de códigos de error

Los códigos de error se segmentan por módulo funcional:

| Prefijo | Módulo |
|---|---|
| `100xx` | Dispositivo y sistema |
| `200xx` | Vista en vivo |
| `300xx` | Grabación |
| `400xx` | Inferencia de IA |
| `500xx` | Terminal y registros |

## Dispositivo y sistema (100xx)

| Código | Descripción |
|---:|---|
| `10001` | Contraseña demasiado débil |
| `10002` | Token caducado |
| `10003` | Ya hay una descarga de firmware en curso |
| `10004` | Número de puerto fuera de rango |
| `10005` | Número de puerto ya en uso |

## Códigos de estado HTTP

| Estado HTTP | Descripción |
|---:|---|
| `200` | Solicitud correcta |
| `401` | No autenticado o Token no válido |
| `404` | Endpoint no encontrado |
| `405` | Método no permitido |
| `500` | Error interno del servidor |

## Errores de autenticación

Cuando una solicitud no lleva un Token o el Token ha caducado, el dispositivo devuelve:

```json
{
  "code": 401,
  "message": "Unauthorized: Invalid token or NO token provided"
}
```

Solución: Inicia sesión de nuevo para obtener un nuevo Token e incluye `Cookie: token=<JWT_TOKEN>` en las solicitudes posteriores.

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diversos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos múltiples canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
