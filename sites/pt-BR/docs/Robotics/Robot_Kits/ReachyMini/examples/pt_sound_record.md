---
description: Exemplo que demonstra a gravação de áudio a partir do array de microfones do Reachy Mini e o salvamento em um arquivo WAV com duração configurável.
title: Gravação de Som
slug: /reachymini_examples_sound_record
keywords:
  - gravação de áudio
  - microfone
  - arquivo wav
  - soundfile
  - gravação
  - array de microfones
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reachymini_examples_sound_record/
---

# Gravação de Som

Este exemplo demonstra como gravar áudio a partir do array de microfones do Reachy Mini e salvá‑lo em um arquivo WAV. O script grava por 5 segundos e salva o áudio em `recorded_audio.wav`.

**Como funciona:**
1. Inicia a gravação de áudio usando `start_recording()`
2. Recupera continuamente amostras de áudio usando `get_audio_sample()`
3. Coleta amostras até atingir a duração desejada
4. Encerra a gravação e concatena todas as amostras
5. Salva os dados de áudio em um arquivo WAV usando `soundfile`

**Recursos:**
- Duração de gravação configurável (padrão: 5 segundos)
- Detecção automática da taxa de amostragem
- Proteção por tempo limite para evitar loops infinitos
- Suporte para diferentes backends de mídia

**Uso:**
```bash
python sound_record.py --backend [default_no_video|gstreamer_no_video|webrtc]
```

O áudio gravado será salvo como `recorded_audio.wav` no diretório atual.

Veja o exemplo completo em: [sound_record.py](https://github.com/pollen-robotics/reachy_mini/tree/develop/examples/sound_record.py)
