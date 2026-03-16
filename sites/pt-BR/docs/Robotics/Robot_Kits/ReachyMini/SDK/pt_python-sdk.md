---
description: Referência completa do SDK em Python para o Reachy Mini, cobrindo controle de movimento, câmera, IMU, gravação e reprodução de áudio, e opções de backend de mídia.
title: Referência do SDK em Python
slug: /reachymini_sdk_python-sdk
keywords:
  - python
  - sdk
  - movimento
  - câmera
  - imu
  - áudio
  - backend de mídia
  - goto_target
  - set_target
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reachymini_sdk_python-sdk/
---

# Referência do SDK em Python

> **💡 Lembrete:** O SDK agora detecta automaticamente se deve conectar via USB/localhost ou via rede, então `ReachyMini()` funciona imediatamente. Você ainda pode forçar um modo com `ReachyMini(connection_mode="localhost_only" | "network")` se necessário.

## Movimento

### Controle Básico (`goto_target`)
Interpolação suave entre pontos. Você pode controlar `head`, `antennas` e `body_yaw`.

```python
from reachy_mini import ReachyMini
from reachy_mini.utils import create_head_pose
import numpy as np

with ReachyMini() as mini:
    # Move everything at once
    mini.goto_target(
        head=create_head_pose(z=10, mm=True),    # Up 10mm
        antennas=np.deg2rad([45, 45]),           # Antennas out
        body_yaw=np.deg2rad(30),                 # Turn body
        duration=2.0,                            # Take 2 seconds
        method="minjerk"                         # Smooth acceleration
    )
```

**Métodos de interpolação:** `linear`, `minjerk` (padrão), `ease_in_out`, `cartoon`.

### Controle Instantâneo (`set_target`)
Ignora a interpolação. Use isto para controle de alta frequência (por exemplo, seguindo um joystick ou trajetória gerada).

## Sensores e Mídia

A arquitetura de mídia é descrita em detalhes na seção [Media Architecture](/pt-br/reachymini_sdk_media-architecture). Embora acessar áudio e vídeo a partir do SDK seja similar entre as versões do Reachy Mini, a implementação subjacente é diferente.

### Câmera 📷

Os frames da câmera podem ser acessados da seguinte forma:

```python
from reachy_mini import ReachyMini

with ReachyMini(media_backend="default") as mini:
    frame = mini.media.get_frame()
```
O frame retornado é um array numpy com formato `(height, width, 3)` e tipo de dado `uint8`.

### IMU 🧭

> ⚠️ A IMU está disponível apenas na versão sem fio do Reachy Mini

Dê uma olhada [neste exemplo](https://github.com/pollen-robotics/reachy_mini/tree/main/examples/imu_example.py)
```python
with ReachyMini() as mini:
    imu_data = mini.imu
    accel_x, accel_y, accel_z = imu_data["accelerometer"] # (m/s^2)
    gyro_x, gyro_y, gyro_z = imu_data["gyroscope"] # (rad/s)
    quat_w, quat_x, quat_y, quat_z = imu_data["quaternion"] # (w, x, y, z)
    temperature = imu_data["temperature"] # (°C)

```


### Áudio 🎙️ 🔊

Entradas de áudio (microfones) e saídas (alto-falante) são tratadas da seguinte forma:

```python
from reachy_mini import ReachyMini
from scipy.signal import resample
import time

with ReachyMini(media_backend="default") as mini:
    # Initialization - After this point, both audio devices (input/output) will be seen as busy by other applications!
    mini.media.start_recording()
    mini.media.start_playing()

    # Record
    samples = mini.media.get_audio_sample()

    # Resample (if needed)
    samples = resample(samples, mini.media.get_output_audio_samplerate()*len(samples)/mini.media.get_input_audio_samplerate())

    # Play
    mini.media.push_audio_sample(samples)
    time.sleep(len(samples) / mini.media.get_output_audio_samplerate())

    # Get Direction of Arrival
    # 0 radians is left, π/2 radians is front/back, π radians is right.
    doa, is_speech_detected = mini.media.get_DoA()
    print(doa, is_speech_detected)

    # Release audio devices (input/output)
    mini.media.stop_recording()
    mini.media.stop_playing()
```

**Formato dos dados de áudio:**
- `get_audio_sample()` retorna um array numpy com formato `(samples, 2)` e tipo de dado `float32`, amostrado a 16kHz.
- `push_audio_sample()` espera um array numpy com formato `(samples, 1 or 2)` e tipo de dado `float32`, amostrado a 16kHz.

Em ambos os casos, as informações de canais e taxa de amostragem podem ser recuperadas de forma confiável com `get_input/output_audio_samplerate()` e `get_input/output_channels()`.

> **⚠️ Nota:** `push_audio_sample()` é não bloqueante, o que significa que retorna imediatamente enquanto o áudio é reproduzido em segundo plano. Se você precisar esperar até o fim da reprodução, calcule a duração com base no tamanho do sample e na taxa de amostragem.

## Opções de Backend de Mídia

Escolha o backend de mídia apropriado com base na sua versão do Reachy Mini e nos seus requisitos:

**Reachy Mini Lite:**
- `media_backend="default"` - Usa OpenCV para câmera e Sounddevice para áudio (recomendado para a maioria dos usuários)
- `media_backend="gstreamer"` - Usa GStreamer tanto para câmera quanto para áudio ([instalação necessária](/pt-br/reachymini_sdk_gstreamer-installation))

**Reachy Mini Wireless:**
- **Execução local** (rodando no robô via SSH): usa automaticamente `"gstreamer"`
- **Execução remota** (controlando a partir do seu computador): usa automaticamente `"webrtc"`. Com este backend, o GStreamer roda localmente no Raspberry Pi e faz o streaming de áudio e vídeo no computador remoto usando WebRTC.

> **💡 Dica:** Para configurações sem fio, o backend é selecionado automaticamente com base em se você está rodando localmente ou remotamente. Não é necessário especificar o valor de `media_backend`!

> **💡 Dica:** Para configurações sem fio, o backend WebRTC requer uma instalação específica, veja [gstreamer-installation.md](/pt-br/reachymini_sdk_gstreamer-installation). Por enquanto apenas a plataforma Linux é suportada como cliente. Outras plataformas (Windows, macOS) serão suportadas em [futuras versões](https://github.com/pollen-robotics/reachy_mini/issues/572).

## Gravando Movimentos
Você pode gravar um movimento movendo o robô (modo compliant) ou enviando comandos, e salvá-lo para reprodução posterior.

```python
from reachy_mini import ReachyMini
with ReachyMini() as mini:
    mini.start_recording()
    # ... robot moves ...
    recorded_data = mini.stop_recording()
```

## Próximos Passos
* **[Navegar pela Pasta de Exemplos](https://github.com/pollen-robotics/reachy_mini/tree/main/examples)**
* **[Integrações de IA](/pt-br/reachymini_sdk_integration)**: Conecte LLMs, construa Apps e publique na Hugging Face.
* **[Conceitos Centrais](/pt-br/reachymini_sdk_core-concept)**: Arquitetura, sistemas de coordenadas e limites de segurança.

## ❓ Solução de Problemas

Encontrou algum problema? 👉 **[Consulte o Guia de Solução de Problemas e FAQ](/pt-br/reachymini_troubleshooting)**
