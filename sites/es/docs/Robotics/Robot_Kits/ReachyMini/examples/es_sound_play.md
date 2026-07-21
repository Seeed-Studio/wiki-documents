---
description: Ejemplo que demuestra la reproducción de audio a través del altavoz de Reachy Mini usando archivos WAV o audio en vivo continuo con la API push_audio_sample.
title: Reproducción de sonido
slug: /reachymini_examples_sound_play
keywords:
  - audio
  - sonido
  - altavoz
  - wav
  - reproducción
  - audio en vivo
  - tono sinusoidal
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-19'
url: https://wiki.seeedstudio.com/es/reachymini_examples_sound_play/
---

# Reproducción de sonido

Este ejemplo muestra dos formas de reproducir audio a través del altavoz de Reachy Mini:
- **`--wav`**: Reproducir un archivo WAV usando la API `play_sound()`.
- **`--live`**: Enviar un tono sinusoidal continuo usando la API de bajo nivel `push_audio_sample()`, útil para fuentes de audio en tiempo real como motores de texto a voz o entrada de micrófono.

**Uso:**
```bash
# Play a wav file
python sound_play.py --wav /path/to/file.wav --backend webrtc

# Push a continuous sine tone (Ctrl+C to stop)
python sound_play.py --live --backend webrtc --tone-hz 440
```

**Opciones:**
- `--wav <path>`: Ruta a un archivo WAV para reproducir.
- `--live`: Enviar un tono sinusoidal continuo.
- `--tone-hz <freq>`: Frecuencia de la onda sinusoidal en Hz (solo en modo `--live`, valor predeterminado: 440).
- `--backend`: Backend de medios a usar (`default`, `local` o `webrtc`).

Consulta el ejemplo completo en: [sound_play.py](https://github.com/pollen-robotics/reachy_mini/tree/main/examples/sound_play.py)