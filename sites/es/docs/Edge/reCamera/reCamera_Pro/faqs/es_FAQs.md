---
title: Preguntas frecuentes sobre reCamera Pro
description: Este artículo resume los problemas comunes de reCamera Pro y sus soluciones, ayudándote a localizar y solucionar rápidamente problemas como la imposibilidad de la WebUI para previsualizar flujos de vídeo y bloqueos del sistema causados por la carga de modelos.
keywords:
  - reCamera Pro
  - FAQ
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_faqs
sku: 10003420
sidebar_position: 1
last_update:
  date: 2026-08-05
  author: Sizhaozhou
createdAt: '2026-08-05'
updatedAt: '2026-08-05'
url: https://wiki.seeedstudio.com/es/recamera_pro_faqs/
---

# Preguntas frecuentes sobre reCamera Pro


## 1. La WebUI muestra repetidamente errores de conexión Wi‑Fi y no puede previsualizar flujos de vídeo

**Síntoma**: La interfaz WebUI muestra repetidamente avisos de errores de conexión Wi‑Fi y no puede previsualizar correctamente los flujos de vídeo.

**Solución**:

- Primero, comprueba si el dispositivo está alimentado correctamente.
- Si utilizas una interfaz Type‑C para la alimentación, asegúrate de usar un adaptador de corriente que sea compatible con el protocolo PD.
- Se recomienda utilizar el cable de alimentación de CC proporcionado de fábrica para garantizar un suministro de energía estable.

## 2. La carga de modelos de precisión FB16 provoca que la WebUI se congele

**Síntoma**: En las versiones V1.1.1 y anteriores, la carga de modelos de precisión FB16 provoca que el proceso principal del sistema se congele.

**Solución**: Puedes solucionarlo utilizando uno de los dos métodos siguientes:

1. **Restablecer los ajustes de fábrica**: Mantén pulsado el botón en el lateral del dispositivo durante 15 segundos para restablecer los ajustes de fábrica.
2. **Modificar el archivo de configuración del sistema**:
   - Conecta el dispositivo mediante un cable USB e inicia sesión en el dispositivo usando SSH.
   - Modifica el archivo `/userdata/config/rkipc.ini`.
   - Cambia el campo `model` en la sección de configuración `[rc_model.0]` a `yolox_s.rknn`.

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte distintos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos múltiples canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>