---
description: Exporta la configuración de reCamera Pro a un archivo e impórtala en otro dispositivo - qué contiene la copia de seguridad, cómo restaurarla y cómo verificarla.
title: Copia de seguridad y restauración de la configuración
keywords:
  - reCamera
  - reCamera Pro
  - backup
  - restore
  - configuration
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_backup_restore
sku: 10003420
sidebar_position: 3
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/es/recamera_pro_backup_restore/
---

# Copia de seguridad y restauración de la configuración

reCamera Pro puede exportar su configuración actual a un archivo (un archivo `tar`) que tu navegador descarga, e importar ese archivo en el mismo u otro dispositivo. Esta es la forma más rápida de:

- replicar una configuración comprobada en una flota de dispositivos,
- recuperarse rápidamente después de un [restablecimiento de fábrica o recuperación de firmware](/es/recamera_pro_firmware_update/),
- conservar una instantánea conocida y estable antes de cambiar la configuración de detección, grabación o red.

## Exportar una copia de seguridad de la configuración

1. Inicia sesión en la interfaz web y abre **Device Info → System Settings**.
2. Haz clic en **Export Configuration**.
3. El navegador descarga automáticamente un archivo `tar` que contiene la configuración actual. Guárdalo en un lugar seguro, nombrado con el dispositivo y la fecha (por ejemplo, `recamera-frontdoor-2026-09-21.tar`).

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_eBayhpwddh.png" />

:::info Qué contiene la copia de seguridad
El archivo exportado contiene la configuración actual del dispositivo. Antes de confiar en él, verifica en tu propio dispositivo qué elementos se incluyen (red, hora, conexión, contraseña, reglas de grabación, configuración del modelo de IA, modelos de sonido) y ten en cuenta que los archivos de modelos cargados y el vídeo grabado son datos de gran tamaño, no configuración.

{/* TODO(verify): enumerate exactly what Export Configuration includes and excludes on current firmware — network/Wi-Fi credentials, admin password, recording trigger rules and schedules, AI model configuration, uploaded .rknn model files, Sound Lab trained models, and recorded media. */}
:::

## Restaurar (importar) una configuración

1. Abre **Device Info → System Settings** en el dispositivo de destino.
2. Elige la opción de importación y selecciona un archivo `tar` exportado previamente (la misma extensión de archivo que la exportación).
3. Después de importar, la configuración se carga automáticamente y el dispositivo se **reinicia**. Espera a que termine el reinicio; la configuración importada quedará activa después.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_4h4p6raYPF.png" />

:::caution La importación sobrescribe la configuración actual
La importación reemplaza la configuración existente del dispositivo con el contenido del archivo. Si el dispositivo de destino tiene configuraciones que valga la pena conservar, expórtalas primero.

{/* TODO(verify): confirm whether import merges or fully replaces settings, and whether importing a backup from a different firmware version is supported or rejected. */}
:::

## Verificar una restauración

Después de que el dispositivo se reinicie, confirma que la restauración realmente haya tenido efecto:

- [ ] El inicio de sesión en la interfaz web funciona con la contraseña esperada.
- [ ] El estado de red/Wi-Fi coincide con la copia de seguridad (el dispositivo puede reconectarse a la red Wi-Fi registrada en el archivo; asegúrate de que esa red sea accesible en la nueva ubicación).
- [ ] La configuración de hora es correcta (consulta [Red, hora y control de acceso](/es/recamera_pro_device_info/)).
- [ ] Las reglas y los horarios de grabación están presentes en **Recording Settings**.
- [ ] La inferencia de IA ejecuta el modelo esperado y detecta un objetivo real.

## Consejos para flotas y ciclo de vida

- Exporta una copia de seguridad **después de cada cambio de configuración que quieras conservar**, y después de pasar la [lista de verificación previa al despliegue](/es/recamera_pro_deploy_checklist/).
- Para clonar un dispositivo a muchos: configura un dispositivo de referencia, expórtalo una vez y luego impórtalo en cada unidad; después ajusta los elementos específicos de cada dispositivo (por ejemplo, Wi-Fi, hora) según sea necesario.
- Conserva las copias de seguridad fuera del dispositivo (ordenador o servidor de archivos); una copia de seguridad almacenada solo en el dispositivo se pierde cuando el dispositivo se restablece o se reemplaza.

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte distintos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
