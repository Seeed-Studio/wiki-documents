---
description: Mira la transmisión en vivo en tu navegador, toma fotos, inicia y detén grabaciones manuales y cambia entre el flujo principal y el subflujo en reCamera Pro.
title: "Vista previa, captura y grabación manual"
keywords:
  - reCamera
  - reCamera Pro
  - live preview
  - take photo
  - record video
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_live_preview
aliases:
  - /recamera_pro_live_view
sku: 10003420
sidebar_position: 1
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/es/recamera_pro_live_preview/
---

# Vista previa, captura y grabación manual

reCamera Pro tiene una interfaz web integrada, por lo que nunca necesitas instalar software de cliente adicional. Siempre que tu ordenador esté en la misma red local que el dispositivo, abre un navegador y ve a:

```text
http://<reCamera_IP>
```

En el primer inicio de sesión, la interfaz web te pedirá que cambies la contraseña. La contraseña inicial (contraseña antigua) es `recamera`; introduce una nueva contraseña de tu elección y luego inicia sesión con el nombre de usuario `admin`.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/img_v3_0213c_17e852c5-c73f-4a05-8ede-e02e2c7be6dg.png" />

Después de iniciar sesión puedes previsualizar la transmisión en vivo, tomar fotos, grabar vídeos, cambiar de flujo y abrir los ajustes de imagen, inferencia de IA y del dispositivo: todo lo necesario para una depuración rápida y la verificación de funciones.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/2026-07-08 181849.png" />

## Ver la vista previa en vivo

En la página de vista en vivo, el lado izquierdo es el área de vista previa de vídeo y el lado derecho es el área de configuración de funciones. Haz clic en **Start Playback** para ver la transmisión actual de la cámara en tu navegador.

La parte inferior del área de vista previa ofrece controles básicos de reproducción:

- Selección de flujo principal / subflujo
- Iniciar reproducción / Detener reproducción
- Ajuste de volumen
- Visualización del estado de conexión actual

Si el dispositivo se desconecta, el flujo de vídeo es anómalo o la red no es accesible, la ventana de vista previa muestra un aviso de fallo de conexión para que puedas identificar rápidamente qué está mal con el flujo.

## Tomar una foto

**Take Photo** guarda el fotograma actual como una imagen, lo que resulta útil para registrar escenas, archivar depuraciones o recopilar datos. La imagen se descarga automáticamente en la carpeta de descargas predeterminada de tu navegador.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_2XAT0cUJwO.jpg" />

## Grabar un vídeo manualmente

Puedes iniciar y detener la grabación directamente desde la interfaz web.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_nPNSUbHEOa.jpg" />

1. Haz clic en **Start Recording**. El botón cambiará a **End Recording**.
2. Cuando termines, haz clic en **End Recording** y espera un momento mientras reCamera Pro empaqueta el vídeo.
3. El navegador descarga automáticamente la grabación como un archivo MP4 en tu carpeta de descargas predeterminada.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_03SDnfmwp5.jpg" />

:::note
La grabación manual desde la página de vista previa es diferente de la grabación basada en IA/eventos. Para grabar automáticamente cuando se produzcan detecciones, sonidos o disparos externos —y para mantener las grabaciones en el almacenamiento del dispositivo— consulta [Configurar grabación de eventos](/es/recamera_pro_record_settings/) y [Buscar grabaciones y almacenamiento](/es/recamera_pro_storage/).
{/* TODO(verify): confirm whether manual Web UI recordings are ever kept on device storage in addition to the browser download, and the exact firmware version behavior */}
:::

## Cambiar entre flujo principal y subflujo

La interfaz web permite cambiar entre el **flujo principal** y el **subflujo**. Elige según tu ancho de banda de red, necesidades de calidad de imagen o escenario de vista previa:

- **Flujo principal**: vista previa en alta definición, almacenamiento de vídeo y análisis de IA.
- **Subflujo**: vista previa de bajo ancho de banda, visualización remota o acceso multicanal.

Los parámetros de codificación de cada flujo (resolución, frecuencia de fotogramas, bitrate, etc.) se configuran por separado para cada flujo; consulta [Calidad de imagen y baja iluminación](/es/recamera_pro_image_quality/).

## Próximos pasos

- [Ajustar la calidad de imagen y el rendimiento en baja iluminación](/es/recamera_pro_image_quality/)
- [Ver el flujo en un reproductor externo (RTSP)](/es/recamera_pro_rtsp/)
- [Añadir superposiciones OSD y máscaras de privacidad](/es/recamera_pro_osd_masks/)

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
