---
title: Preguntas frecuentes sobre reCamera Pro
description: Este artículo resume los problemas comunes de reCamera Pro y sus soluciones, ayudándote a localizar y solucionar rápidamente problemas como que la WebUI no pueda previsualizar flujos de vídeo y bloqueos del sistema causados por la carga de modelos.
keywords:
  - reCamera Pro
  - FAQ
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_faqs_legacy
draft: true
sku: 10003420
sidebar_position: 1
last_update:
  date: 2026-08-05
  author: Sizhaozhou
createdAt: '2026-08-05'
updatedAt: '2026-08-05'
url: https://wiki.seeedstudio.com/es/recamera_pro_faqs_legacy/
---
<!-- PÁGINA LEGADA (reestructuración del wiki de reCamera Pro, fase 2): esta página ha sido reemplazada por Troubleshooting/troubleshooting.md (https://wiki.seeedstudio.com/es/recamera_pro_faqs/), que ahora utiliza el slug original /recamera_pro_faqs. Este archivo se conserva con fines históricos como borrador (slug /recamera_pro_faqs_legacy) y se excluye de las compilaciones de producción. No enlaces aquí. -->

## Índice de migración de contenido (página legada)

| Sección original | Nuevo destino |
| --- | --- |
| P1 Errores de conexión Wi‑Fi / sin vista previa de vídeo | [Solución de problemas](https://wiki.seeedstudio.com/es/recamera_pro_faqs/) (este slug) |
| P2 La carga de modelos de precisión FP16 bloquea la Web UI | [Solución de problemas](https://wiki.seeedstudio.com/es/recamera_pro_faqs/), [Valida tu modelo](https://wiki.seeedstudio.com/es/recamera_pro_model_validate/) |

# Preguntas frecuentes sobre reCamera Pro


## 1. La WebUI muestra repetidamente errores de conexión Wi‑Fi y no puede previsualizar flujos de vídeo

**Síntoma**: La interfaz de WebUI muestra repetidamente errores de conexión Wi‑Fi y no puede previsualizar correctamente los flujos de vídeo.

**Solución**:

- Primero, comprueba si el dispositivo está alimentado correctamente.
- Si utilizas una interfaz Type‑C para la alimentación, asegúrate de usar un adaptador de corriente que sea compatible con el protocolo PD.
- Se recomienda utilizar el cable de alimentación de CC proporcionado de fábrica para garantizar un suministro de energía estable.

## 2. La carga de modelos de precisión FB16 hace que la WebUI se congele

**Síntoma**: En las versiones V1.1.1 y anteriores, la carga de modelos de precisión FB16 hace que el proceso principal del sistema se congele.

**Solución**: Puedes solucionarlo utilizando uno de los dos métodos siguientes:

1. **Restablecer los ajustes de fábrica**: Mantén pulsado el botón en el lateral del dispositivo durante 15 segundos para restablecer los ajustes de fábrica.
2. **Modificar el archivo de configuración del sistema**:
   - Conecta el dispositivo mediante un cable USB e inicia sesión en el dispositivo usando SSH.
   - Modifica el archivo `/userdata/config/rkipc.ini`.
   - Cambia el campo `model` en la sección de configuración `[rc_model.0]` a `yolox_s.rknn`.

## Soporte técnico y debate sobre el producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte distintos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos múltiples canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>