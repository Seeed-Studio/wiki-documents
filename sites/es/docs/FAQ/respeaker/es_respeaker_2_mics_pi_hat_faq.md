---
title: Preguntas frecuentes sobre reSpeaker 2-Mics Pi HAT V2.0
description: Preguntas frecuentes sobre la dirección I2C del códec V2.0 y el uso de hardware para el reSpeaker 2-Mics Pi HAT V2.0.
slug: /respeaker_2_mics_pi_hat_faq
last_update:
  date: 9/2/2026
  author: ray
keywords:
  - reSpeaker 2-Mics Pi HAT FAQ
  - reSpeaker 2-Mics Pi HAT V2.0
  - TLV320AIC3104
  - codec I2C address
---

<div class="respeaker-faq-page">

# Preguntas frecuentes sobre reSpeaker 2-Mics Pi HAT V2.0

Esta página contiene respuestas verificadas para el reSpeaker 2-Mics Pi HAT V2.0. Cada respuesta indica la variante de producto y el modo de firmware al que se aplica, junto con la fecha en que se verificó por última vez con las fuentes oficiales actuales.

## Antes de comenzar

- Confirma la variante exacta del producto y el modo de firmware (USB o I2S) en el que se está ejecutando el dispositivo.
- Comprueba la versión actual del firmware antes de aplicar pasos específicos de versión.
- Las respuestas de esta página se verificaron por última vez el 2026-09-01; vuelve a comprobar las fuentes oficiales enlazadas si la estás leyendo más tarde.

<!-- RESPEAKER_FAQ_AUTO_START -->
## Problemas de hardware {#hardware-issues}

### ¿Cuál es la dirección I2C del códec en el ReSpeaker 2-Mics Pi HAT V2.0? {#v2-codec-i2c-address}

**Se aplica a:** Solo ReSpeaker 2-Mics Pi HAT V2.0; la versión V1.x usa hardware de códec diferente

**Última verificación:** 2026-09-01

ReSpeaker 2-Mics Pi HAT V2.0 utiliza un códec TLV320AIC3104 en la dirección I2C de 7 bits `0x18`. La superposición oficial del device-tree de la V2.0 declara `tlv320aic3104@18` con `reg = <0x18>`, y el esquema público de la V2.0 identifica el mismo códec.

**Requisitos previos:**

- Confirma que la placa es V2.0 con la guía oficial de revisión de hardware
- Usa el controlador y la superposición del device-tree específicos para la revisión V2.0

1. Sigue la guía oficial de Raspberry Pi para la V2.0 para instalar `respeaker-2mic-v2_0-overlay.dtbo`.
2. Comprueba que la superposición V2.0 declara el códec en la dirección de 7 bits `0x18`.
3. Reinicia y usa `arecord -l` o `aplay -l` para confirmar que el dispositivo de sonido `tlv320aic3x-hifi` se vincula correctamente.

**Criterios de éxito:**

- La superposición V2.0 se carga y la tarjeta de sonido basada en TLV320AIC3104 aparece en la lista de dispositivos ALSA

**Notas:**

- No copies esta dirección al ReSpeaker 2-Mics Pi HAT V1.x, que utiliza hardware de códec diferente.
- La dirección por sí sola no constituye una guía completa ni admitida de cableado e inicialización de códec para ESP32-S3.

**Referencias:**

- [Guía de Raspberry Pi para ReSpeaker 2-Mics Pi HAT V2.0](https://wiki.seeedstudio.com/es/respeaker_2_mics_pi_hat_raspberry_v2/)
- [Superposición oficial del device-tree de Raspberry Pi para V2.0](https://github.com/Seeed-Studio/seeed-linux-dtoverlays/blob/master/overlays/rpi/respeaker-2mic-v2_0-overlay.dts)
- [Esquema oficial de ReSpeaker 2-Mics Pi HAT V2.0](https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/202004059_ReSpeaker-2-Mics-Pi-HAT-V2.0_SCH_PDF_241121.pdf)

<!-- RESPEAKER_FAQ_AUTO_END -->

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

</div>
