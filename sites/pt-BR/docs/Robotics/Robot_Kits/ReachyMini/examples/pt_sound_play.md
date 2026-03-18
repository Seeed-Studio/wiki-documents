---
description: Exemplo que demonstra a reprodução de áudio pelo alto-falante do Reachy Mini usando arquivos WAV ou áudio contínuo ao vivo com a API push_audio_sample.
title: Reprodução de Som
slug: /reachymini_examples_sound_play
keywords:
  - áudio
  - som
  - alto-falante
  - wav
  - reprodução
  - áudio ao vivo
  - tom senoidal
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reachymini_examples_sound_play/
---

# Reprodução de Som

Este exemplo demonstra duas maneiras de reproduzir áudio pelo alto-falante do Reachy Mini:
- **`--wav`**: Reproduzir um arquivo WAV usando a API `play_sound()`.
- **`--live`**: Enviar um tom senoidal contínuo usando a API de baixo nível `push_audio_sample()`, útil para fontes de áudio em tempo real, como mecanismos de conversão de texto em fala ou entrada de microfone.

**Uso:**
```bash
# Play a wav file
python sound_play.py --wav /path/to/file.wav --backend webrtc

# Push a continuous sine tone (Ctrl+C to stop)
python sound_play.py --live --backend webrtc --tone-hz 440
```

**Opções:**
- `--wav <path>`: Caminho para um arquivo WAV a ser reproduzido.
- `--live`: Enviar um tom senoidal contínuo.
- `--tone-hz <freq>`: Frequência da onda senoidal em Hz (apenas no modo `--live`, padrão: 440).
- `--backend`: Backend de mídia a ser usado (`default_no_video`, `gstreamer_no_video` ou `webrtc`).

Veja o exemplo completo em: [sound_play.py](https://github.com/pollen-robotics/reachy_mini/tree/develop/examples/sound_play.py)
