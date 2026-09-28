---
description: Comprueba la versión de firmware, actualiza el firmware de reCamera Pro, reinicia el sistema y recupera un dispositivo con restablecimiento de fábrica (botón o interfaz web).
title: Actualización de firmware y recuperación
keywords:
  - reCamera
  - reCamera Pro
  - firmware update
  - factory reset
  - recovery
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_firmware_update
sku: 10003420
sidebar_position: 4
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/es/recamera_pro_firmware_update/
---

# Actualización de firmware y recuperación

Esta página cubre las operaciones de ciclo de vida en **Device Info → System Settings**: comprobar la versión de firmware, actualizar el firmware, reiniciar el sistema, y la ruta de recuperación cuando el dispositivo se comporta de forma anómala: restablecimiento de fábrica.

:::caution Antes de empezar
Exporta una [copia de seguridad de la configuración](/es/recamera_pro_backup_restore/) y anota la versión de firmware actual antes de cualquier actualización o restablecimiento. Mantén el dispositivo con una alimentación estable en todo momento: una actualización interrumpida puede dejar el dispositivo sin poder arrancar.
:::

## Comprobar la versión actual del firmware

Abre **Device Info → System Settings**: la página muestra la versión de firmware actual del dispositivo (las versiones básicas de hardware/software también aparecen en [Información básica](/es/recamera_pro_device_info/#información-básica)). Registra esta versión en tu inventario de activos: siempre se necesita para soporte e informes de errores.

{/* TODO(verify): add a screenshot of System Settings highlighting the firmware version field, and document where official firmware packages are published (download page / release notes) and how version numbers map to releases. */}

## Actualizar el firmware

En **Device Info → System Settings**, elige si deseas actualizar al nuevo firmware y sigue el flujo en pantalla. Durante una actualización por aire, el LED de estado verde **parpadea a ~100 ms**; no apagues el dispositivo en este estado. Cuando la actualización se completa y el dispositivo se reinicia, el LED vuelve a verde fijo.

Después de actualizar:

1. Vuelve a comprobar la versión de firmware en System Settings para confirmar que la nueva versión está en ejecución.
2. Verifica que el dispositivo sigue detectando y grabando como se espera (los puntos 5–6 de la [lista de comprobación previa al despliegue](/es/recamera_pro_deploy_checklist/) son una buena prueba rápida).
3. Si importaste una configuración desde una versión anterior, vuelve a ejecutar los [pasos de verificación de restauración](/es/recamera_pro_backup_restore/#verificar-una-restauración).

{/* TODO(verify): document the exact update flow on current firmware — whether updates are pulled OTA from the Internet, uploaded as a package, or both; what data is preserved across an update (settings, uploaded models, recordings); and the failure-recovery path if an update is interrupted. */}

## Reiniciar el sistema

System Settings también ofrece un **reinicio** remoto. Úsalo después de importar configuraciones, cambios de red o para limpiar un servicio bloqueado. El dispositivo se reinicia y debería volver a un LED verde fijo dentro de su tiempo de arranque normal.

## Recuperación: restablecimiento de fábrica

Si el dispositivo está bloqueado, es inaccesible con la contraseña configurada o se comporta de forma anómala después de una actualización, restaura los ajustes de fábrica. Hay dos métodos:

### Método 1: botón físico

Pulsa y **mantén pulsado el botón lateral durante unos 15 segundos** hasta que escuches un sonido de aviso: el dispositivo ha entrado en modo de restablecimiento. Espera a que el LED de estado verde permanezca encendido de forma continua y, a continuación, vuelve a iniciar sesión (se aplica el flujo de primer inicio de sesión con la contraseña inicial, como en un dispositivo nuevo).

### Método 2: interfaz web

Haz clic en **Device Info → System Settings → Factory Reset**.

![Factory reset diagram](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera-Pro_reset_Device.jpg)

:::warning Un restablecimiento de fábrica devuelve el dispositivo a su estado de salida de caja
La configuración se borra; planifica volver a importar después tu [copia de seguridad de la configuración](/es/recamera_pro_backup_restore/), y luego vuelve a verificar el acceso a la red, la hora y la detección.

{/* TODO(verify): state exactly what a factory reset preserves vs wipes on current firmware (recorded media on SD/eMMC, uploaded model files, Wi-Fi credentials, admin password), and whether the button-reset prompt sound/15 s timing is unchanged. */}
:::

## Si el dispositivo no arranca en absoluto

- Comprueba primero la alimentación: el LED verde apagado significa que el proceso principal no se está ejecutando; un breve parpadeo verde significa que se ha detectado una tarjeta SD con sistema de archivos sucio; vuelve a insertar o reformatea la tarjeta SD.
- Un LED en modo respiración que nunca se vuelve fijo significa que el arranque está bloqueado; apaga y enciende el dispositivo y luego intenta el restablecimiento de fábrica con el botón.
- Referencia de estados del LED: [inicio rápido, indicador de estado](/es/recamera_pro_getting_started/#referencia-del-indicador-de-estado). Síntomas adicionales: [Solucionar problemas por síntoma](/es/recamera_pro_faqs/).

{/* TODO(verify): confirm the last-resort recovery path (e.g. re-flashing factory system image over USB/SD) for a device that does not respond to button reset, and link the official recovery material once identified. */}

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
