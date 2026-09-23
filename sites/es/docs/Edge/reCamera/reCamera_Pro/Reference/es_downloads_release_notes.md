---
description: Todas las descargas oficiales de reCamera Pro en un solo lugar: imágenes de firmware, herramientas de flasheo, controladores, toolkits de conversión y recursos de desarrollo.
title: Descargas y notas de la versión
keywords:
  - reCamera
  - reCamera Pro
  - download
  - firmware
  - Debian 13
  - release notes
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_downloads
sku: 10003420
sidebar_position: 5
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/es/recamera_pro_downloads/
---

# Descargas y notas de la versión

Esta página recopila todas las descargas y recursos externos mencionados en la documentación de reCamera Pro, con referencias a la guía que los utiliza.

## Firmware

| Elemento | Dónde obtenerlo | Guía |
| --- | --- | --- |
| Actualizaciones de firmware de fábrica | A través de la interfaz Web: **Device Info → System Settings** muestra la versión actual del firmware y ofrece actualizaciones; el restablecimiento de fábrica y el reinicio también están disponibles allí | [Red, hora y acceso](/es/recamera_pro_device_info/), [Actualización y recuperación de firmware](/es/recamera_pro_firmware_update/) |
| Imagen experimental de Debian 13 | [recamera_pro_debian13_v1.0.0.tar.gz](https://github.com/yyling0101-a11y/reCamere_pro_debian_img/releases/download/v1.0.0/recamera_pro_debian13_v1.0.0.tar.gz) | [Imagen experimental de Debian 13](/es/recamera_pro_debian/) |

<!-- TODO(verify): add the official stock firmware image download location (if publicly distributed) and the current firmware version/changelog; the Web UI update path is currently the only documented method. -->

## Herramientas de flasheo (Debian 13 / recuperación)

| Elemento | Descarga | Notas |
| --- | --- | --- |
| Controlador USB para Windows | [DriverAssistant_v5.12.zip](https://drive.google.com/file/d/1_Efm8nJlQivU2F7BgVokVPfGUl12fI6E/view?usp=drive_link) | Requerido antes de flashear desde Windows |
| Herramienta de flasheo para Windows | [SocToolKit-window.zip](https://drive.google.com/file/d/1wFMHF_KSm…utDP-DPQ_NONp/view?usp=drive_link) | Se utiliza con el dispositivo en modo Loader |
| Herramientas de flasheo para Linux | [rkbin](https://github.com/rockchip-linux/rkbin.git) y [Linux_Upgrade_Tool](https://github.com/vicharak-in/Linux_Upgrade_Tool.git) | Se clonan durante el procedimiento de flasheo en Linux |

Procedimiento completo de flasheo (Windows y Linux, entrada en modo Loader, orden de particiones): [Imagen experimental de Debian 13](/es/recamera_pro_debian/). Recuperación de un dispositivo que ya no arranca: [Actualización y recuperación de firmware](/es/recamera_pro_firmware_update/).

## Conversión de modelos y herramientas de IA

| Elemento | Descarga | Guía |
| --- | --- | --- |
| RKNN-Toolkit2 2.3.2 (conversión en host, x86_64) | [airockchip/rknn-toolkit2 releases](https://github.com/airockchip/rknn-toolkit2) — elige la rueda que coincida con tu versión de CPython en `packages/x86_64` | [Convertir y cuantizar modelos](/es/recamera_pro_rknn_model_conversion/) |
| SenseCraft (ONNX→RKNN basado en navegador) | Se accede desde la interfaz Web: **AI Inference → View SenseCraft Models** | [SenseCraft ONNX-to-RKNN](/es/recamera_pro_sensecraft/) |
| model-inspect (inspección de contrato ONNX) | `pip install model-inspect-tool` | [Convertir y cuantizar modelos](/es/recamera_pro_rknn_model_conversion/) |

Regla de alineación de versiones: la versión de Toolkit debe coincidir con el RKNN Runtime incluido en el firmware de reCamera Pro (actualmente 2.3.2).

## Recursos de desarrollo

| Elemento | Descarga | Guía |
| --- | --- | --- |
| reCamera Pro Development Skill (para agentes de programación con IA) | [Seeed-Projects/recamera-pro-development-skill](https://github.com/Seeed-Projects/recamera-pro-development-skill) | [Desarrollar con agentes de programación con IA](/es/recamera_pro_development_cpp_skill/) |
| Ultralytics (exportación directa YOLO→RKNN) | `pip install ultralytics` en el entorno de Toolkit | [Convertir y cuantizar modelos](/es/recamera_pro_rknn_model_conversion/) |
| Página del producto | [reCamera Pro (2GB)](https://www.seeedstudio.com/reCamera-Pro-2GB.html) | — |

Elegir entre la interfaz Web, el SDK nativo y el desarrollo completo en Debian: [Elige tu ruta de desarrollo](/es/recamera_pro_dev_path/).

## Notas de la versión

| Versión | Fecha | Aspectos destacados |
| --- | --- | --- |
| Imagen Debian 13 v1.0.0 | — | Primera imagen experimental pública de Debian 13 para reCamera Pro |

<!-- TODO(verify): obtain the official firmware release history (version, date, changes) from the product team and populate this table; also record the Debian v1.0.0 release date. -->

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
