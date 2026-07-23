---
description: Introducción a los posibles problemas que pueden surgir al usar la API.
title: FAQ
keywords:
  - Edge AI
  - reCamera Pro
  - API
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_api_faq
sku: 10003420
sidebar_position: 6
last_update:
  date: 07/15/2026
  author: Sizhao zhou
createdAt: '2026-07-15'
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/es/recamera_pro_api_faq/
---

# FAQ

## Inicio de sesión

### El inicio de sesión devuelve iStatus=-1, ¿qué debo hacer?

La contraseña es incorrecta. Verifica que el nombre de usuario y la contraseña sean correctos. El nombre de usuario predeterminado es `admin`.

### El inicio de sesión devuelve iStatus=-3, ¿qué debo hacer?

Los intentos fallidos repetidos de inicio de sesión han activado un bloqueo basado en IP. Espera `sWaittime` segundos a que caduque el bloqueo y luego inténtalo de nuevo.

### El inicio de sesión se realiza correctamente, pero las API posteriores devuelven 401, ¿qué debo hacer?

El Token falta o ha caducado. Asegúrate de que la cabecera de la solicitud incluya `Cookie: token=<JWT_TOKEN>` y de que el Token no haya superado su vida útil de 24 horas. Si ha caducado, inicia sesión de nuevo.

### ¿Durante cuánto tiempo es válido el Token?

El Token es válido durante 24 horas de forma predeterminada (`Max-Age=86400`). Después de que caduque, inicia sesión de nuevo para obtener uno nuevo.

## Red

### El dispositivo deja de ser accesible después de cambiar la configuración de red, ¿qué debo hacer?

Cambiar la dirección IP, la puerta de enlace o los parámetros de Wi‑Fi puede hacer que cambie la dirección del dispositivo. Accede al dispositivo mediante la nueva dirección o recupéralo mediante una conexión de red directa.

### ¿Cuál es la diferencia entre /network/wlan y /network/wifi?

`/network/wlan` es para la configuración inalámbrica de IPv4 (dirección, puerta de enlace, máscara, DNS). `/network/wifi` es para la información de la conexión Wi‑Fi actual, conectar y desconectar.

### ¿Qué debo poner en sSsid al conectarme a una red Wi‑Fi?

`sSsid` es el identificador único de la red Wi‑Fi. Llama primero a `/network/wifi-list` y luego utiliza el valor `sBssid` de la lista para conectarte.

## HTTPS

### El navegador advierte sobre un certificado no confiable al acceder por HTTPS, ¿qué debo hacer?

El dispositivo utiliza un certificado autofirmado. Para pruebas locales, puedes continuar ignorando la advertencia. Para un despliegue en producción, instala un certificado de confianza.

### No se puede acceder al dispositivo mediante HTTP después de habilitar HTTPS, ¿qué debo hacer?

Después de habilitar HTTPS, utiliza `https://<DEVICE_IP>` para todos los accesos posteriores.

## Rutas de la API

### ¿Por qué algunas rutas comienzan con /api/v1/ y otras con /cgi-bin/?

La mayoría de los endpoints requieren la ruta base CGI `/cgi-bin/entry.cgi`. Los endpoints de puerto serie y de archivos son rutas directas que omiten la capa CGI y se accede a ellos en `/api/v1/...`.

### ¿Por qué un endpoint devuelve 404?

Es posible que la versión actual del firmware no implemente ese endpoint, o que la ruta se haya construido de forma incorrecta. Verifica si la ruta necesita `/cgi-bin/entry.cgi` y comprueba la versión del firmware.

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
