---
description: Implementa un modelo de sonido entrenado y configura disparadores de eventos de sonido en reCamera Pro para capturar fotos o grabaciones automáticamente.
title: Disparar captura por sonido
keywords:
  - reCamera
  - reCamera Pro
  - sound trigger
  - acoustic lab
  - recording
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_sound_trigger
sku: 10003420
sidebar_position: 9
last_update:
  date: 09/21/2026
  author: MOSS
url: https://wiki.seeedstudio.com/es/recamera_pro_sound_trigger/
---

# Disparar captura por sonido

Después de entrenar un modelo de sonido (consulta [Train a Sound Model](/es/recamera_pro_acoustic_lab_usage/)), impleméntalo y configura disparadores de eventos de sonido para capturar fotos o grabaciones automáticamente cuando se detecten sonidos específicos.

## Implementar el modelo

1. En Acoustic Lab, busca la opción **Deploy** en la parte inferior de la interfaz.
2. En la lista **MODELS**, selecciona tu modelo entrenado e impleméntalo.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Model_Deploy.png" /></div>

## Configurar el disparador de eventos de sonido

1. Vuelve a la interfaz principal de la Web UI → **Record Settings** → **Recording Configuration**.
2. Busca la opción **Sound Event Trigger** y haz clic en **Configure**.
3. Selecciona las categorías de sonido con las que quieres activar la grabación.
4. Haz clic en **Confirm** para aplicar.

<div align="left"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Acoustic_Lab_Usage/reCamera-PRO_Voice_Choice_Trigger.png" /></div>

### Elementos de configuración

| Elemento de configuración | Descripción |
|---|---|
| Filtro de categoría de sonido | Categorías de sonido para activar la grabación |
| Ventana de actividad continua | Duración requerida de actividad continua (ms) |
| Rango de confianza | Umbral de confianza para el reconocimiento de sonido |

{/* TODO(verify): confirm default confidence threshold and whether continuous activity window is required or optional */}

## Casos de uso típicos

- Detección de sonidos anómalos (rotura de vidrio, alarma, fallo de maquinaria)
- Disparo por comando de voz (por ejemplo, "help", "stop")
- Reconocimiento de sonidos de estado de equipos
- Monitorización ambiental

## Páginas relacionadas

- [Train a Sound Model](/es/recamera_pro_acoustic_lab_usage/)
- [Configure Event Recording](/es/recamera_pro_record_settings/)
- [Find Recordings and Storage](/es/recamera_pro_storage/)

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
