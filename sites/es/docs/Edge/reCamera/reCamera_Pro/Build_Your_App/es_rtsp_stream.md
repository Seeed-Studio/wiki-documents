---
description: Habilita la salida RTSP en reCamera Pro y mira la transmisión de video en reproductores externos como VLC, o intégrala con NVR y sistemas de gestión de video.
title: Ver la transmisión en un reproductor externo (RTSP)
keywords:
  - reCamera
  - reCamera Pro
  - RTSP
  - streaming
  - VLC
  - NVR
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_rtsp
sku: 10003420
sidebar_position: 3
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/es/recamera_pro_rtsp/
---

# Ver la transmisión en un reproductor externo (RTSP)

La página **Streaming Settings** de la interfaz web configura cómo reCamera Pro emite sus transmisiones de video, para que puedas ver la señal en un reproductor de terceros (VLC, ffplay, etc.) o integrar la cámara con NVR, sistemas de gestión de video o tus propias aplicaciones.

## 1. Habilitar el streaming en el dispositivo

1. Inicia sesión en la interfaz web y abre la página de vista en vivo.
2. Ve a **Streaming Settings** en la parte derecha.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_ZrIYeGVxqa.png" />

3. Configura los siguientes elementos:

| Parámetro | Descripción |
|---|---|
| Stream Setting Switch | Habilita o deshabilita el streaming para la transmisión actual |
| Main Stream / Sub-Stream | Selecciona qué transmisión configurar |
| Streaming Protocol | Protocolo de streaming, por ejemplo RTSP |
| Authentication Type | Autenticación requerida para acceder a la transmisión, por ejemplo sin autenticación |

4. Haz clic en **Apply Settings** para guardar.

La transmisión principal y la sub-transmisión se configuran por separado, por lo que puedes, por ejemplo, enviar la transmisión principal en alta definición a un grabador y la sub-transmisión de bajo bitrate a los espectadores remotos.

## 2. Obtener la dirección de la transmisión

{/* TODO(verify): document exactly where the RTSP URL (including port and stream path) is shown in the Web UI, and the default port/path for main stream and sub-stream */}

La dirección de la transmisión se basa en la IP del dispositivo — `rtsp://<reCamera_IP>:<port>/<stream path>`. Consulta la página de Streaming Settings después de aplicar tu configuración para obtener la dirección exacta de cada transmisión.

## 3. Reproducir en un reproductor externo

**VLC**: Media → Open Network Stream → pega la dirección RTSP → Play.

**ffplay** (de FFmpeg):

```bash
ffplay rtsp://<reCamera_IP>:<port>/<stream path>
```

Si habilitaste un tipo de autenticación distinto de "no authentication", proporciona las credenciales que solicite el reproductor.
{/* TODO(verify): confirm how credentials are passed in the RTSP URL / player dialog for each supported authentication type */}

**NVR / VMS**: añade la cámara como un dispositivo RTSP usando la misma dirección; selecciona la sub-transmisión si el NVR gestiona muchos canales.

## Solución de problemas

- **No hay imagen en el reproductor**: confirma que el Stream Setting Switch esté activado para la transmisión que estás reproduciendo y que el reproductor esté en la misma red que el dispositivo.
- **Reproducción entrecortada por Wi‑Fi**: cambia a la sub-transmisión o reduce el bitrate de la transmisión principal en [Basic Settings](/es/recamera_pro_image_quality/).
- **La transmisión funciona en la vista previa del navegador pero no externamente**: comprueba el Authentication Type y cualquier control de acceso de red (consulta [Network, Time and Access Control](/es/recamera_pro_device_info/)).

## Páginas relacionadas

- [Calidad de imagen y baja iluminación](/es/recamera_pro_image_quality/) (parámetros de codificación por transmisión)
- [Configurar la grabación de eventos](/es/recamera_pro_record_settings/)

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
