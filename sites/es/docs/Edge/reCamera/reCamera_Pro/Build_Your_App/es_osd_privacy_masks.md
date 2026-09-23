---
description: Superpone el nombre del canal, la fecha/hora y el número de serie en el vídeo (OSD), y oculta áreas sensibles con máscaras de privacidad en reCamera Pro.
title: Superposiciones OSD y máscaras de privacidad
keywords:
  - reCamera
  - reCamera Pro
  - OSD
  - privacy mask
  - image masking
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_osd_masks
sku: 10003420
sidebar_position: 4
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/es/recamera_pro_osd_masks/
---

# Superposiciones OSD y máscaras de privacidad

Ambas funciones se configuran desde la página de vista en vivo en la interfaz web: **OSD Settings** añade superposiciones de texto al vídeo, y **Image Masking** oculta áreas sensibles.

## OSD Settings

**OSD (On-Screen Display)** superpone información como el nombre del canal, la fecha y la hora, y el número de serie del dispositivo en la señal de vídeo, lo que resulta útil para vigilancia, revisión de grabaciones e identificación de dispositivos.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_bdTuIGi3cp.jpg" />

| Elemento de configuración | Descripción |
|---|---|
| Font Size | Tamaño del texto OSD |
| Font Color | Color del texto OSD |
| Color Mode | Modo de color OSD, con una opción de color personalizado |
| Channel Name Overlay | Mostrar el nombre del canal en pantalla |
| Channel Name | Nombre de canal personalizado, p. ej. Camera 01 |
| Channel Name Coordinates | Dónde aparece el nombre del canal en pantalla |
| Date and Time Overlay | Mostrar la fecha y la hora en pantalla |
| Date Format | Formato de visualización de la fecha |
| Time Format | Formato de visualización de la hora, p. ej. 24 horas |
| Show Weekday | Si se muestra el día de la semana |
| Date and Time Coordinates | Dónde aparece la fecha/hora en pantalla |
| Serial Number Overlay | Si se muestra el número de serie del dispositivo |

Las posiciones OSD usan coordenadas relativas, por lo que puedes colocar el texto en cualquier lugar que permita el diseño, o simplemente **arrastrar el texto** a la posición que prefieras en la vista previa.

Después de configurar, haz clic en **Save Settings** para aplicar los parámetros OSD.

## Image Masking (máscaras de privacidad)

**Image Masking** configura áreas de máscara de privacidad que ocultan partes sensibles de la escena, de modo que la información privada nunca aparezca en vistas en vivo, grabaciones o transmisiones.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_wj02u6saTl.jpg" />

Puedes añadir máscaras manualmente o dejar que la interfaz web las dibuje automáticamente. Después de añadirlas, guarda la configuración; el efecto se muestra inmediatamente en la vista previa.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_NtmxY1TDqE.png" />

Escenarios típicos:

- Enmascarar información sensible en áreas de oficina
- Enmascarar áreas privadas como viviendas, números de puerta y pantallas
- Cumplir los requisitos de protección de privacidad de vídeo en espacios públicos o compartidos

## Verificar el resultado

Después de guardar, comprueba ambos lugares donde puede terminar la imagen:

1. **Vista en vivo**: confirma que el texto OSD sea legible y que las máscaras cubran completamente las áreas previstas a la resolución actual.
2. **Grabaciones y transmisiones**: toma una foto, realiza una grabación corta y (si está habilitado) mira la transmisión RTSP para confirmar que las superposiciones/máscaras están incrustadas en la salida y no solo se muestran en el navegador.

{/* TODO(verify): confirm whether privacy masks and OSD apply identically to snapshots, event recordings, and RTSP output on production firmware, and whether masks affect AI detection in masked areas */}

## Páginas relacionadas

- [Vista previa, captura y grabación manual](/es/recamera_pro_live_preview/)
- [Calidad de imagen y baja iluminación](/es/recamera_pro_image_quality/)
- [Configurar detección: clases, umbrales y frecuencia](/es/recamera_pro_ai_inference/)

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
