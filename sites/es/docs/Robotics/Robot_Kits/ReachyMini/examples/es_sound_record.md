---
description: Ejemplo que demuestra la grabación de audio desde la matriz de micrófonos de Reachy Mini y el guardado en un archivo WAV con duración configurable.
title: Grabación de sonido
slug: /reachymini_examples_sound_record
keywords:
- audio recording
- microphone
- wav file
- soundfile
- recording
- microphone array
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# Grabación de sonido

Este ejemplo muestra cómo grabar audio desde la matriz de micrófonos de Reachy Mini y guardarlo en un archivo WAV. El script graba durante 5 segundos y guarda el audio en `recorded_audio.wav`.

**Cómo funciona:**
1. Inicia la grabación de audio usando `start_recording()`
2. Recupera continuamente muestras de audio usando `get_audio_sample()`
3. Recopila muestras hasta alcanzar la duración deseada
4. Detiene la grabación y concatena todas las muestras
5. Guarda los datos de audio en un archivo WAV usando `soundfile`

**Características:**
- Duración de grabación configurable (por defecto: 5 segundos)
- Detección automática de la frecuencia de muestreo
- Protección por tiempo de espera para evitar bucles infinitos
- Compatibilidad con diferentes backends de medios

**Uso:**
```bash
python sound_record.py --backend [default_no_video|gstreamer_no_video|webrtc]
```

El audio grabado se guardará como `recorded_audio.wav` en el directorio actual.

Consulta el ejemplo completo en: [sound_record.py](https://github.com/pollen-robotics/reachy_mini/tree/develop/examples/sound_record.py)
