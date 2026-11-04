---
description: Resultados de la revisión estática y estado de verificación para la instantánea de código fuente v1.0.10.
title: Revisión del código fuente y problemas conocidos
keywords:
  - reCamera
  - reCamera Pro
  - RV1126B
  - SDK
  - Referencia
  - Documentación
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_sdk_source_notes
sku: 10003420
sidebar_position: 2
last_update:
  date: 10/09/2026
  author: yylin
url: https://wiki.seeedstudio.com/es/recamera_pro_sdk_source_notes/
createdAt: '2026-10-09'
updatedAt: '2026-10-09'
---

# Revisión del código fuente y problemas conocidos

Esta página registra elementos encontrados durante una revisión estática del SDK v1.0.10 que pueden afectar las compilaciones o el uso. A menos que se indique explícitamente como verificado en hardware, los hallazgos se basan en la inspección del código fuente y no necesariamente se han reproducido en un dispositivo.

| Elemento | Ubicación en el código fuente | Hallazgo confirmado | Impacto y acción |
| --- | --- | --- | --- |
| Ruta de empaquetado de la app `install_to_userdata` | `project/build.sh`, `__PACKAGE_USERDATA()` | La comprobación del directorio de la app usa `userdata_app`, pero el comando de copia sigue leyendo desde la ruta de medios. Confirmado en el código fuente. | Es posible que los archivos esperados en la imagen de userdata no se copien desde el directorio de salida de la app. Si se necesita esta función, inspecciona la imagen final o el contenido del dispositivo; alternativamente, crea/copia los archivos durante el arranque. |
| Rama `rkflash.sh update` | `project/rkflash.sh` | La rama correspondiente está comentada. Confirmado en el código fuente. | No asumas que `./rkflash.sh update` realiza una actualización. Usa un comando compatible de [Flashing and Boot](/es/recamera_pro_bsp_flash_boot/). |
| Imagen env en `rkflash.sh all` | `project/rkflash.sh` | La rama `all` no incluye `env.img`. Confirmado en el código fuente. | Después de cambiar la tabla de particiones o el entorno de arranque, verifica por separado que la imagen env se haya flasheado y haya surtido efecto. |
| Mayúsculas del directorio de archivo `save` | `project/build.sh`, `build_save()`; raíz `quick_start_cn.md` | `build_save()` convierte la ruta `Image/...` a mayúsculas; el directorio real es `IMAGE/...`. La guía de inicio rápido también usa `IMAGE/`. Confirmado en el código fuente. | Busca el nombre de directorio generado por el script actual. La referencia anterior del Wiki a `Image/` era incorrecta. |
| Versión del SDK en `sdkinfo` | `project/build.sh`, `build_get_sdk_version()` | La versión proviene de `.repo/manifest.xml`. Esta instantánea de código fuente no tiene `.repo/`, por lo que la compilación puede escribir `NONE`. Confirmado en el código fuente. | Comprueba conjuntamente `/etc/ota_version`, el nombre de BoardConfig y el archivo de la compilación. No identifiques la versión solo a partir del campo SDK Version en `sdkinfo`. |
| Comentario de RTC frente a opción UTC | `project/cfg/BoardConfig_Recamera2/overlay-buildroot-hwclock/etc/init.d/S20hwclock` | El comentario del script y `hwclock --utc` parecen especificar convenciones horarias diferentes. Confirmado en el código fuente; el comportamiento de zona horaria necesita verificación en hardware. | Antes de cambiar el manejo de la hora, verifica la zona horaria, la convención del RTC y la hora real después de reiniciar. |
| Objetivo cruzado predeterminado para `recamera_services` | `project/app/recamera_services/Makefile` | El objetivo predeterminado parece ser armv7; es necesario comprobar si la compilación de nivel superior lo sobrescribe en el punto de entrada de la compilación. Hallazgo estático; el binario final aún no se ha verificado. | Después de una compilación manual, ejecuta `file` sobre la salida y confirma que está dirigida a aarch64. |
| Nombre de archivo de las Notas de la versión y descubrimiento automático | `project/cfg/BoardConfig_Recamera2/` y `build_info()` en `project/build.sh` | El nombre de archivo actual de las Notas de la versión no coincide con el patrón de nombres que busca el script; el documento también es breve. Confirmado en el código fuente. | Antes de la publicación, confirma manualmente que el archivo comprimido contiene el registro de cambios correcto. No confíes en la promoción automática. |
| READMEs de `recamera_onvif` y `recamera_utils` | Directorios de las aplicaciones respectivas | Los archivos README son plantillas genéricas y no describen la compilación o el uso de este proyecto. Confirmado leyendo los archivos. | Para entender el comportamiento de los componentes, inspecciona el Makefile, el código fuente y los llamadores. No trates el README de plantilla como documentación del proyecto. |

## Cómo interpretar estos hallazgos

- **Confirmado en el código fuente:** la implementación o configuración es directamente visible en el código fuente citado; puede que aún no se haya probado en un dispositivo.
- **Necesita verificación en hardware:** el resultado depende del hardware, firmware, configuración en tiempo de ejecución o salidas de compilación y debe reproducirse en el dispositivo correspondiente.
- Las rutas y el comportamiento se refieren a la instantánea de código fuente v1.0.10 cubierta por este Wiki. Vuelve a comprobarlos después de una actualización del SDK; no trates estos hallazgos como garantías entre versiones.
- Corrige estos problemas en el código fuente del SDK y recompila según sea necesario. Esta página registra el comportamiento e impacto actuales; no aplica correcciones.

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