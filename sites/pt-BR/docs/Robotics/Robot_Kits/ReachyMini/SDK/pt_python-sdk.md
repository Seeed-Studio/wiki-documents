---
description: Referência completa do SDK em Python para o Reachy Mini, cobrindo controle de movimento, câmera, IMU, gravação e reprodução de áudio e opções de backend de mídia.
title: Referência do SDK em Python
slug: /reachymini_sdk_python-sdk
keywords:
  - python
  - sdk
  - movement
  - camera
  - imu
  - audio
  - media backend
  - goto_target
  - set_target
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/pt-br/reachymini_sdk_python-sdk/
---

# Referência do SDK em Python

> **💡 Lembrete:** O SDK agora detecta automaticamente se deve se conectar via USB/localhost ou via rede, então `ReachyMini()` funciona imediatamente. Você ainda pode forçar um modo com `ReachyMini(connection_mode="localhost_only" | "network")` se necessário.

## Movimento

### Controle básico (`goto_target`)
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

### Controle instantâneo (`set_target`)
Ignora a interpolação. Use isto para controle de alta frequência (por exemplo, seguindo um joystick ou uma trajetória gerada).

## Sensores e Mídia

A arquitetura de mídia é descrita em detalhes na seção [Media Architecture](/pt-br/reachymini_sdk_media-architecture). Embora o acesso a áudio e vídeo a partir do SDK seja semelhante entre as versões do Reachy Mini, a implementação subjacente é diferente.

### Câmera 📷

Os frames da câmera podem ser acessados da seguinte forma:

```python
from reachy_mini import ReachyMini

with ReachyMini(media_backend="default") as mini:
    frame = mini.media.get_frame()
```
O frame retornado é um array numpy com formato `(height, width, 3)` e tipo de dado `uint8`.

### IMU 🧭

> ⚠️ A IMU só está disponível na versão sem fio do Reachy Mini

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
- `get_audio_sample()` retorna um array numpy com formato `(samples, 2)` e tipo de dado `float32`, amostrado a 16 kHz.
- `push_audio_sample()` espera um array numpy com formato `(samples, 1 or 2)` e tipo de dado `float32`, amostrado a 16 kHz.

Em ambos os casos, as informações de canais e taxa de amostragem podem ser obtidas de forma confiável com `get_input/output_audio_samplerate()` e `get_input/output_channels()`.

> **⚠️ Observação:** `push_audio_sample()` é não bloqueante, o que significa que ele retorna imediatamente enquanto o áudio é reproduzido em segundo plano. Se você precisar esperar até o fim da reprodução, calcule a duração com base no comprimento do sample e na taxa de amostragem.

## Opções de backend de mídia

Escolha o backend de mídia apropriado com base na versão do seu Reachy Mini e nos seus requisitos:

- `media_backend="default"` - Detecta automaticamente o melhor backend: LOCAL quando executado na mesma máquina que o daemon, WEBRTC quando remoto (recomendado para a maioria dos usuários).
- `media_backend="local"` - Força o backend LOCAL (câmera IPC GStreamer + áudio GStreamer). Use quando estiver executando na mesma máquina que o daemon.
- `media_backend="webrtc"` - Força o backend WEBRTC. O daemon transmite vídeo H.264 e áudio Opus via WebRTC para o cliente.
- `media_backend="no_media"` - Desativa o gerenciador de mídia e instrui o daemon a liberar o hardware de câmera e áudio. Use isto quando você precisar de acesso direto via OpenCV, sounddevice ou qualquer outra biblioteca externa. O hardware é readquirido automaticamente quando o gerenciador de contexto é encerrado. Veja [Media Architecture - Disabling Media](/pt-br/reachymini_sdk_media-architecture#desativando-a-mídia--acesso-direto-ao-hardware) e o exemplo [Custom Media Manager](../examples/custom_media_manager.md).

> **💡 Dica:** Para a maioria das configurações, o backend é selecionado automaticamente com base em você estar executando localmente ou remotamente. Não é necessário especificar o valor de `media_backend`!

> **💡 Dica:** O backend WebRTC requer que o GStreamer esteja instalado na máquina cliente. Veja [GStreamer Installation](/pt-br/reachymini_sdk_gstreamer-installation). Por enquanto, apenas Linux é totalmente suportado como cliente remoto. Outras plataformas (Windows, macOS) serão suportadas em [future releases](https://github.com/pollen-robotics/reachy_mini/issues/572).

## Gravando movimentos
Você pode gravar um movimento movendo o robô (modo complacente) ou enviando comandos, e salvá-lo para reprodução posterior.

```python
from reachy_mini import ReachyMini
with ReachyMini() as mini:
    mini.start_recording()
    # ... robot moves ...
    recorded_data = mini.stop_recording()
```

## Próximos passos
* **[Navegue pela pasta de exemplos](https://github.com/pollen-robotics/reachy_mini/tree/main/examples)**
* **[Integrações de IA](/pt-br/reachymini_sdk_integration)**: Conecte LLMs, crie Apps e publique na Hugging Face.
* **[Conceitos centrais](/pt-br/reachymini_sdk_core-concept)**: Arquitetura, sistemas de coordenadas e limites de segurança.

## ❓ Solução de problemas

Encontrou algum problema? 👉 **[Confira o guia de solução de problemas e FAQ](/pt-br/reachymini_troubleshooting)**