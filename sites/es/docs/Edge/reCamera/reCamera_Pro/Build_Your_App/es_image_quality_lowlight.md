---
description: Configura la codificación del flujo principal y del subflujo, ajusta el brillo, la exposición y el cambio día/noche para obtener una imagen utilizable con poca luz en reCamera Pro.
title: Calidad de imagen y baja iluminación
keywords:
  - reCamera
  - reCamera Pro
  - calidad de imagen
  - baja iluminación
  - exposición
  - día noche
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_image_quality
sku: 10003420
sidebar_position: 2
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/es/recamera_pro_image_quality/
---

# Calidad de imagen y baja iluminación

Utiliza la interfaz web para ajustar cómo reCamera Pro codifica el vídeo y cómo se ve la imagen, incluyendo el comportamiento con poca luz y el modo día/noche. Todos los ajustes están en la página de vista en vivo: la ventana de vista previa está a la izquierda y el área de configuración a la derecha.

## Ajustes básicos: codificación de vídeo

En **Basic Settings** configuras por separado los parámetros de codificación del flujo principal y del subflujo.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_5SsPulbjjc.jpg" />

| Parámetro | Descripción |
|---|---|
| Resolution | Resolución de salida de vídeo, p. ej. 1920×1080 (1080P) |
| Encoding Format | Códec de vídeo, p. ej. H.264 |
| Frame Rate (FPS) | Frecuencia de fotogramas de vídeo, p. ej. 30 FPS |
| GOP | Intervalo de fotogramas clave: con qué frecuencia se generan los fotogramas clave |
| Bitrate Control Mode | Método de control de bitrate, p. ej. VBR (bitrate variable) |
| Max Bitrate | Bitrate máximo del flujo de vídeo, en Kbps |
| Bitrate Quality | Nivel de calidad de codificación |

Elige qué flujo configurar según tu escenario:

- **Flujo principal**: vista previa en alta definición, almacenamiento de vídeo y análisis de IA.
- **Subflujo**: vista previa de bajo ancho de banda, visualización remota o acceso multicanal.

Después de cambiar cualquier parámetro, haz clic en **Save Video Settings** para aplicar. Haz clic en **Reset** para restaurar o volver a introducir los parámetros.

La página también proporciona interruptores de **Audio Settings** y **Audio Storage Settings**, para que puedas activar o desactivar la captura y el almacenamiento de audio según sea necesario.

## Display Settings: orientación y día/noche

**Display Settings** ajusta cómo la cámara representa la imagen.

<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_B1NHc7CXGa.jpg" />

| Parámetro | Descripción |
|---|---|
| Flip | Espejar/girar la imagen para que coincida con la orientación de instalación |
| Rotate | Ángulo de rotación, p. ej. 0° |
| Video Standard | Estándar de vídeo, p. ej. PAL (50HZ) |

El cambio día/noche se configura en la misma página:

| Parámetro | Descripción |
|---|---|
| Switch Mode | Cómo cambia el modo día/noche, p. ej. automático |
| Switch Threshold Sensitivity | Sensibilidad al nivel de luz que dispara el cambio |
| Switch Hysteresis Time | Retardo antes de volver a cambiar, para evitar conmutaciones frecuentes |

## Ajuste de imagen para baja iluminación

En el área básica de ajuste de imagen puedes seleccionar un perfil y ajustar:

- Brillo
- Contraste
- Saturación
- Nitidez
- Tono
- Modo de exposición
- Modo de ganancia

Consejos prácticos para baja iluminación:

1. Configura el **Exposure Mode** para que la cámara pueda alargar el tiempo de exposición en escenas oscuras; vigila el desenfoque de movimiento en sujetos en movimiento.
2. Aumenta la **Gain** solo lo necesario: una ganancia alta añade ruido, lo que también perjudica la precisión de detección de la IA.
3. Usa el cambio día/noche **automático** con un umbral moderado y suficiente tiempo de histéresis para instalaciones 24/7.
4. Vuelve a comprobar la imagen con la iluminación real de tu escena (interior, exterior, contraluz, noche) en lugar de juzgarla con la escena de prueba predeterminada.

{/* TODO(verify): add a 0.3 lux sample frame (no fill light) captured on production firmware, and confirm recommended exposure/gain values and minimum firmware version for low-light scenes */}

Después de cambiar cualquier parámetro, haz clic en **Save Display Settings** / **Save Configuration** para aplicar.

## Páginas relacionadas

- [Vista previa, captura y grabación manual](/es/recamera_pro_live_preview/)
- [Configurar detección: clases, umbrales y frecuencia](/es/recamera_pro_ai_inference/)
- [Ver el flujo en un reproductor externo (RTSP)](/es/recamera_pro_rtsp/)

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
