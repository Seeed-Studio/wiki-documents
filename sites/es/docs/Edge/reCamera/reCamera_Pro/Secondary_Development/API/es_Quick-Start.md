---
description: Esta página es una guía de inicio rápido. Solo se necesitan tres pasos para que funcione: iniciar sesión, obtener el Token y llamar a la primera API. Solo tienes que seguir las instrucciones y todo estará en marcha.
title: Inicio rápido
keywords:
  - Edge AI
  - reCamera Pro
  - API
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_api_quick_start
sku: 10003420
sidebar_position: 2
last_update:
  date: 07/15/2026
  author: Sizhao zhou
createdAt: '2026-07-15'
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/es/recamera_pro_api_quick_start/
---

# Inicio rápido

Esta página te guía desde cero hasta completar un inicio de sesión y llamar a tu primera API.

## Requisitos previos

* El dispositivo está encendido y conectado a tu red
* Conoces la dirección IP del dispositivo (en esta guía se usa `192.168.7.200` como ejemplo)
* Conoces el nombre de usuario y la contraseña de inicio de sesión (el nombre de usuario predeterminado es `admin`)

## Paso 1: Verificar la accesibilidad del dispositivo

Abre esta URL en un navegador web:

```text
https://192.168.7.200
```

Si el dispositivo tiene HTTPS habilitado con un certificado autofirmado, el navegador advertirá que el certificado no es de confianza. Para pruebas locales, puedes continuar ignorando la advertencia.

## Paso 2: Iniciar sesión para obtener un Token

El endpoint de inicio de sesión no requiere autenticación. Envía una solicitud de inicio de sesión al dispositivo:

```text
POST https://192.168.7.200/cgi-bin/entry.cgi/system/login
Content-Type: application/json
```

Cuerpo de la solicitud:

```json
{
  "sUserName": "admin",
  "sPassword": "your_password"
}
```

:::note
La contraseña de inicio de sesión se transmite en texto plano. Si HTTPS está habilitado, la contraseña está protegida por TLS durante la transmisión.
:::

Si tiene éxito, la respuesta es:

```json
{
  "iStatus": 0,
  "iAuth": 1,
  "sWaittime": 0
}
```

| Campo | Descripción |
|---|---|
| `iStatus` | `0` = contraseña correcta, `-1` = contraseña incorrecta, `-3` = bloqueo temporal tras fallos repetidos |
| `iAuth` | `1` = inicio de sesión correcto, `0` = inicio de sesión fallido, `2` = se requiere cambio de contraseña |
| `sWaittime` | Tiempo de espera en segundos cuando está bloqueado |

Las cabeceras de la respuesta también contendrán:

```text
Set-Cookie: token=<JWT_TOKEN>; Max-Age=86400; Path=/
```

Este `token` es la credencial de autenticación para todas las solicitudes posteriores a la API.

## Paso 3: Llamar a una API con el Token

Obtener información del dispositivo:

```text
GET https://192.168.7.200/cgi-bin/entry.cgi/system/device-info
Cookie: token=<JWT_TOKEN>
```

Respuesta:

```json
{
  "sSerialNumber": "RC1126B-20240101-001",
  "sFirmwareVersion": "V1.0.10",
  "sSensorModel": "SC850SL",
  "sBasePlateModel": "Base Board-V1.0,Expand Board-V1.0"
}
```

Si la solicitud no lleva un Token o el Token ha caducado, el dispositivo devuelve:

```json
{
  "code": 401,
  "message": "Unauthorized: Invalid token or NO token provided"
}
```

## Duración de vida del Token

El Token es válido durante 24 horas de forma predeterminada (`Max-Age=86400`). Después de que caduque, inicia sesión de nuevo para obtener un nuevo Token.

## Próximos pasos

* Consulta [Authentication](https://wiki.seeedstudio.com/es/recamera_pro_api_authentication) para la referencia completa de inicio de sesión y cambio de contraseña
* Consulta [Common Conventions](https://wiki.seeedstudio.com/es/recamera_pro_api_common_conventions) para los formatos de respuesta y las reglas de nomenclatura de campos
* Consulta [API Reference](https://wiki.seeedstudio.com/es/recamera_pro_api_reference) para las descripciones de endpoints organizadas por función

## Soporte técnico y debate sobre el producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diversos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos múltiples canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
