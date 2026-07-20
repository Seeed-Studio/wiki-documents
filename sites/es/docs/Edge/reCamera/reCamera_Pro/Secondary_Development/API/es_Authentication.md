---
description: Presenta cómo iniciar sesión en el dispositivo a través de la API.
title: Autenticación
keywords:
  - Edge AI
  - reCamera Pro
  - API
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_api_authentication
sku: 10003420
sidebar_position: 3
last_update:
  date: 07/15/2026
  author: Sizhao zhou
createdAt: '2026-07-15'
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/es/recamera_pro_api_authentication/
---

# Autenticación

reCamera utiliza autenticación mediante Token JWT. Después de un inicio de sesión correcto, el dispositivo devuelve un Token a través de la cabecera de respuesta `Set-Cookie`. Las solicitudes posteriores deben llevar este Token.

## Descripción general de los endpoints

| Método | Ruta | Propósito | Requiere inicio de sesión |
|---|---|---|---|
| GET | `/system/key` | Obtener clave pública RSA (para cambio de contraseña) | No |
| POST | `/system/login` | Iniciar sesión y obtener un Token | No |
| GET | `/system/check` | Comprobar si es el primer inicio de sesión | No |
| PUT | `/system/password` | Cambiar la contraseña de administrador | Sí |

## Inicio de sesión

### Solicitud

```text
POST /cgi-bin/entry.cgi/system/login
Content-Type: application/json
```

Cuerpo de la solicitud:

```json
{
  "sUserName": "admin",
  "sPassword": "your_password"
}
```

| Campo | Descripción |
|---|---|
| `sUserName` | Nombre de usuario de inicio de sesión, el valor predeterminado es `admin` |
| `sPassword` | Contraseña de inicio de sesión, transmitida en texto plano |

### Respuesta

```json
{
  "iStatus": 0,
  "iAuth": 1,
  "sWaittime": 0
}
```

| Campo | Descripción |
|---|---|
| `iStatus` | `0` = contraseña correcta, `-1` = contraseña incorrecta, `-3` = bloqueado temporalmente |
| `iAuth` | `1` = inicio de sesión correcto, `0` = inicio de sesión fallido, `2` = se requiere cambio de contraseña |
| `sWaittime` | Tiempo de espera en segundos cuando está bloqueado |

### Obtención del Token

En caso de inicio de sesión correcto, las cabeceras de respuesta contienen `Set-Cookie`:

```text
Set-Cookie: token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXUyJ9...; Max-Age=86400; Path=/
```

La vida útil del Token está determinada por `Max-Age`, con un valor predeterminado de 86400 segundos (24 horas).

### Uso del Token

Todas las solicitudes autenticadas deben incluir el Token en la cabecera Cookie:

```text
Cookie: token=<JWT_TOKEN>
```

Por ejemplo, para obtener información del dispositivo:

```text
GET /cgi-bin/entry.cgi/system/device-info
Cookie: token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXUyJ9...
```

Si el Token falta o ha caducado, el dispositivo devuelve:

```json
{
  "code": 401,
  "message": "Unauthorized: Invalid token or NO token provided"
}
```

### Bloqueo de inicio de sesión

El dispositivo aplica un límite de intentos fallidos basado en la IP. Tras contraseñas incorrectas repetidas, `iLoginAttempts` se incrementa. Cuando se alcanza el límite, el dispositivo devuelve `iStatus=-3` con un valor `sWaittime`. Debes esperar a que expire el bloqueo antes de volver a intentarlo.

## Comprobar primer inicio de sesión

```text
GET /cgi-bin/entry.cgi/system/check
```

Respuesta:

```json
{
  "bFirst": false
}
```

`bFirst=true` indica que el dispositivo está en el flujo de primer inicio de sesión y que se debe cambiar la contraseña predeterminada.

## Cambiar contraseña

Cambiar la contraseña requiere obtener primero una clave pública RSA, luego cifrar las contraseñas antigua y nueva antes de enviarlas.

### Obtener clave pública

```text
GET /cgi-bin/entry.cgi/system/key
```

Respuesta:

```json
{
  "sPublicKey": "-----BEGIN RSA PUBLIC KEY-----\nMIIBCgKCAQEA...\n-----END RSA PUBLIC KEY-----"
}
```

| Campo | Descripción |
|---|---|
| `sPublicKey` | Clave pública RSA, utilizada para el cifrado de la contraseña durante el cambio de contraseña |

### Cifrado de la contraseña

Calcula el hash SHA256 de la contraseña como una cadena hexadecimal, luego cífralo con la clave pública usando relleno RSA PKCS1v15 y, por último, codifica el resultado en Base64.

### Enviar el cambio

```text
PUT /cgi-bin/entry.cgi/system/password
Content-Type: application/json
```

Cuerpo de la solicitud:

```json
{
  "sUserName": "admin",
  "sOldPassword": "<encrypted_old_password>",
  "sNewPassword": "<encrypted_new_password>"
}
```

| Campo | Descripción |
|---|---|
| `sUserName` | Nombre de usuario |
| `sOldPassword` | Contraseña antigua cifrada |
| `sNewPassword` | Contraseña nueva cifrada |

Respuesta correcta:

```json
{
  "code": 0,
  "message": "success"
}
```

Códigos de error:

| Código | Descripción |
|---:|---|
| `10001` | La nueva contraseña es demasiado débil |
| `10002` | El Token ha caducado, inicia sesión de nuevo |

Después de cambiar la contraseña, el Token actual puede volverse inválido. Inicia sesión de nuevo para obtener un nuevo Token.

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