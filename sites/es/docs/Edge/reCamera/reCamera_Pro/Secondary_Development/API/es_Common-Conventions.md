---
description: Esta página cubre las reglas comunes aplicables a todas las interfaces, incluyendo formatos de respuesta, convenciones de nombres de campos y métodos de concatenación de URL. Se recomienda leer primero esta página. Así, cuando consultes interfaces específicas más adelante, no necesitarás volver con frecuencia a esta página como referencia.
title: Convenciones Comunes
keywords:
  - Edge AI
  - reCamera Pro
  - API
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_api_common_conventions
sku: 10003420
sidebar_position: 4
last_update:
  date: 07/15/2026
  author: Sizhao zhou
createdAt: '2026-07-15'
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/es/recamera_pro_api_common_conventions/
---

# Convenciones Comunes

## Formato de Respuesta

### Endpoints de Lectura

Los endpoints de lectura (GET) normalmente devuelven directamente el objeto de datos de negocio, sin un campo `code`. Por ejemplo:

```json
{
  "sSerialNumber": "RC1126B-20240101-001",
  "sFirmwareVersion": "V1.0.10"
}
```

### Endpoints de Operación

Los endpoints de operación (POST, PUT, DELETE) devuelven un objeto que contiene `code` y `message`:

```json
{
  "code": 0,
  "message": "success"
}
```

`code=0` significa éxito. Un `code` distinto de cero indica un error, y `message` proporciona una descripción.

### Respuesta de Error

Cuando una solicitud falla, el dispositivo devuelve:

```json
{
  "code": 401,
  "message": "Unauthorized: Invalid token or NO token provided"
}
```

## Nomenclatura de Campos

Los nombres de campos JSON usan camelCase. La primera letra indica el tipo de datos:

| Prefijo | Tipo | Ejemplo |
|---|---|---|
| `i` | Entero | `iCpuUsage` |
| `f` | Flotante | `fTemperature` |
| `s` | Cadena | `sSerialNumber` |
| `b` | Booleano | `bRunning` |
| `l` | Lista | `lDetection` |
| `d` | Objeto | `dIpv4` |

## Construcción de URL

### Endpoints CGI

La mayoría de los endpoints requieren la ruta base CGI:

```text
http://<DEVICE_IP>/cgi-bin/entry.cgi/<API_PATH>
```

### Endpoints de Ruta Directa

Algunos endpoints omiten la capa CGI y se accede a ellos directamente:

```text
http://<DEVICE_IP>/api/v1/device/serial-port
http://<DEVICE_IP>/api/v1/file?path=/mnt/sdcard/test.mp4
```

## Autenticación

Con pocas excepciones (`/system/key`, `/system/login`, `/system/check`), todos los endpoints requieren el Token en la cabecera de la solicitud:

```text
Cookie: token=<JWT_TOKEN>
```

Consulta [Authentication](https://wiki.seeedstudio.com/es/recamera_pro_api_authentication) para saber cómo obtener un Token.

## Códigos de Error

Los códigos de error se segmentan por módulo funcional:

| Prefijo | Módulo |
|---|---|
| `100xx` | Dispositivo y Sistema |
| `200xx` | Vista en Vivo |
| `300xx` | Grabación |
| `400xx` | Inferencia de IA |
| `500xx` | Terminal y Registros |

Códigos de error comunes:

| Código | Descripción |
|---:|---|
| `10001` | Contraseña demasiado débil |
| `10002` | Token expirado |
| `10003` | Ya hay una descarga de firmware en curso |
| `10004` | Número de puerto fuera de rango |
| `10005` | Número de puerto ya en uso |

Consulta [Error Codes](https://wiki.seeedstudio.com/es/recamera_pro_api_error_codes) para ver la lista completa.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diversos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos múltiples canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
