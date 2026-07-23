---
description: Este wiki proporcionará una breve introducción sobre cómo usar el altavoz del dispositivo para reproducir audio.
title: Uso del altavoz
keywords:
  - reCamera
  - reCamera Pro
  - Speaker
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_speaker_usage
sku: 10003420
sidebar_position: 3
last_update:
  date: 07/09/2026
  author: Sizhao zhou
createdAt: '2026-06-01'
updatedAt: '2026-07-15'
url: https://wiki.seeedstudio.com/es/recamera_pro_speaker_usage/
---

# Uso del altavoz de reCamera Pro

- El altavoz es un modelo de 8Ω / 1W impulsado por el amplificador de potencia de audio Clase D NS4150B integrado.
- El dispositivo proporciona una interfaz de salida para altavoz. Los usuarios no necesitan configurar el amplificador de potencia por separado y pueden configurar directamente el canal de reproducción de audio mediante las herramientas ALSA de Linux.

## Consultar dispositivos de audio

Primero confirme que el sistema ha reconocido el dispositivo de audio:

``` bash
aplay -l
```

Salida de ejemplo:

```
**** List of PLAYBACK Hardware Devices ****
card 0: rockchiprv1126b [rockchip,rv1126b-acodec], device 0: dailink-multicodecs multicodec-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

## Ajustar volumen

1. Comprobar el mezclador actual:

``` bash
amixer
```

2. Ver los elementos de control compatibles:

``` bash
amixer scontrols
```

Salida de ejemplo:

```
Simple mixer control 'Headphone',0
Simple mixer control 'Speaker',0
Simple mixer control 'ACodec ADC',0
Simple mixer control 'ACodec Digital Gain',0
```

3. Establecer volumen:

``` bash
amixer set 'DAC Digital' 50%
```

:::note

- Establecer el volumen por encima del 80% provocará ruidos de chasquidos.
- Ajuste el volumen según las condiciones reales para evitar sobrecarga.

:::

## Reproducir audio

Primero copie el archivo de audio que necesita reproducir al dispositivo. Suponga que la ruta del archivo de audio es `/sdcard/audio.wav3`, use el siguiente comando para reproducir audio:

``` bash
aplay /sdcard/audio.wav3
```

Si su archivo de audio está en formato MP3, conviértalo primero a formato WAV usando el siguiente comando y luego reprodúzcalo como se describió anteriormente:

```bash
ffmpeg -i test.mp3 test.wav
```

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerle diversos tipos de soporte y garantizar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos múltiples canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
