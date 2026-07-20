---
description: Esta página ofrece una visión general de la API, informándote sobre la dirección base, el protocolo y el método de autenticación. Comienza consultando esta página para obtener una comprensión completa.
title: Introducción
keywords:
  - Edge AI
  - reCamera Pro
  - API
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_api_introduction
sku: 10003420
sidebar_position: 1
last_update:
  date: 07/15/2026
  author: Sizhao zhou
createdAt: '2026-07-15'
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/es/recamera_pro_api_introduction/
---

# Introducción

reCamera RV1126B proporciona un conjunto de API web basadas en HTTP que te permiten obtener información del dispositivo, configurar parámetros del sistema, gestionar redes, controlar audio y vídeo, ejecutar inferencia de IA, gestionar archivos y realizar actualizaciones de firmware.

## Información básica

| Elemento | Descripción |
|---|---|
| IP del dispositivo | `192.168.42.1` por defecto; la dirección real depende de tu red |
| Protocolo | HTTP o HTTPS |
| Ruta base | `/cgi-bin/entry.cgi` |
| Tipo de contenido | `application/json` |
| Autenticación | Token JWT vía Cookie |

## Estructura de la URL

Todos los endpoints de la API CGI siguen esta estructura:

```text
http://<DEVICE_IP>/cgi-bin/entry.cgi/<api_category>/<resource>/<sub_resource>
```

Por ejemplo, para obtener información del dispositivo:

```text
http://192.168.42.1/cgi-bin/entry.cgi/system/device-info
```

Algunos endpoints no pasan por la ruta base CGI y se accede a ellos directamente, como las API de puerto serie y de archivos:

```text
http://<DEVICE_IP>/api/v1/device/serial-port
http://<DEVICE_IP>/api/v1/file?path=/mnt/sdcard/test.mp4
```

## Descripción general de la documentación

| Documento | Contenido |
|---|---|
| Inicio rápido | Inicia sesión y llama a tu primera API desde cero |
| Autenticación | Flujo de inicio de sesión, uso de Token y cambio de contraseña |
| Convenciones comunes | Formato de respuesta, nomenclatura de campos, códigos de error |
| Referencia de la API | Descripciones detalladas de endpoints organizadas por función |
| Códigos de error | Referencia de códigos de error |
| Preguntas frecuentes | Preguntas frecuentes |


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
