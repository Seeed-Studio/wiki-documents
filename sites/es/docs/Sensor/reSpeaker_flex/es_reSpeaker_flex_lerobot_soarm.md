---
description: Brazo robótico SO-ARM100 controlado por voz usando LeRobot, Groq Whisper STT, LLaMA 3 y openwakeword en Nvidia o Ubuntu.
title: Añade interacción por voz a tu SO-ARM10x con reSpeaker Flex
keywords:
  - reSpeaker flex
  - xvf3800
image: https://files.seeedstudio.com/wiki/reSpeaker_flex/lerobot_flex.png
slug: /respeaker_flex_soarm
sku: 100046482, 100070894, 114110314
last_update:
  date: 05/19/2026
  author: Kasun Thushara
createdAt: '2026-05-19'
updatedAt: '2026-05-19'
url: https://wiki.seeedstudio.com/es/respeaker_flex_soarm/
---

## Descripción general

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/lerobot_flex.png" alt="pir" width={800} height="auto" /></p>


El controlador de voz LeRobot SO-ARM te permite controlar un brazo robótico SO-ARM100 usando comandos de voz naturales impulsados por IA. El sistema combina detección de palabra de activación, Groq Whisper de voz a texto, comprensión del lenguaje con LLaMA 3 y Orpheus de texto a voz para crear una experiencia robótica totalmente interactiva y manos libres. Construido sobre el [framework LeRobot](https://github.com/huggingface/lerobot?utm_source=chatgpt.com), se ejecuta en sistemas Ubuntu x86 y dispositivos NVIDIA Jetson usando una matriz de micrófonos USB ReSpeaker para la entrada de voz. Los usuarios pueden crear poses personalizadas del brazo, gestos y disparadores conversacionales para construir interacciones robóticas inteligentes para investigación, educación y desarrollo en robótica.


## Hardware necesario

<table align="center">
  <tr>
    <th>SO-ARM101</th>
    <th>reSpeaker Flex XVF3800 Circular</th>
    <th>reComputer Super J4012</th>

  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-100046482-so-arm-101-assembled-kit-pro.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-114110311-recomputer-super-j3010_1.jpg" style={{width:500, height:'auto'}}/></div></td>

  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/SO-ARM-101-Assembled-Kit-Pro-p-6691.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Circular-4-p-6737.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-J4012-p-6443.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

## Cómo funciona

```
You speak → Wake word detected → Audio recorded → Whisper STT → LLaMA LLM → Orpheus TTS speaks back → SO-ARM100 moves
```

## Servicios necesarios

| Servicio | Propósito | Coste |
|---------|---------|------|
| [Groq](https://groq.com/) | Whisper STT, LLaMA LLM, Orpheus TTS | El nivel gratuito es suficiente |


## Parte 1 — Instalar LeRobot

### Instalar Miniforge

**Para Jetson (ARM64):**
```bash
wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-aarch64.sh
chmod +x Miniforge3-Linux-aarch64.sh
./Miniforge3-Linux-aarch64.sh
source ~/.bashrc
```

**Para x86 Ubuntu 22.04:**
```bash
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
source ~/.bashrc
conda init --all
```
### Crear el entorno Conda

```bash
conda create -y -n lerobot python=3.10
conda activate lerobot
```

### Clonar e instalar LeRobot

```bash
git clone https://github.com/KasunThushara/lerobot
conda install ffmpeg -c conda-forge
cd lerobot
pip install -e ".[feetech]"
```

---

## Parte 2 — Configurar los brazos

### Configurar los ID de los motores

Cada servo necesita un ID único asignado antes del montaje. Sigue la guía oficial:
[Configure the Motors](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#configurar-los-motores)

### Montar los brazos

Sigue el tutorial de montaje para el SO-ARM100:
[Assembly Guide](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#montaje)

### Encontrar los puertos USB

Conecta cada brazo y ejecuta esta utilidad para identificar qué puerto pertenece a cada brazo:

```bash
lerobot-find-port
```

Ejecuta esto una vez por brazo (conecta uno cada vez). Anota las rutas de los puertos; normalmente son `/dev/ttyACM0` y `/dev/ttyACM1`.

### Calibrar ambos brazos

La calibración asigna valores brutos del motor a posiciones normalizadas. Sigue la guía tanto para el brazo líder como para el seguidor:
[Calibration Guide](https://wiki.seeedstudio.com/es/lerobot_so100m_new/#calibrar)

El archivo de calibración se guardará automáticamente en:
```
~/.cache/huggingface/lerobot/calibration/robots/so_follower/<your_arm_id>.json
```

---

---

## Parte 3 — Configurar el controlador de voz

```bash
cd ~/lerobot/examples/voice_arm
```

### Instalar dependencias

```bash
# System dependency required for PyAudio
sudo apt-get install -y portaudio19-dev

pip install -r requirements.txt
```

### Descargar el modelo de palabra de activación

Descarga el modelo preentrenado **"Hey Jarvis"** desde openwakeword en `~/.openwakeword/`:

```bash
python download_model.py
```

### Encontrar el índice de tu micrófono

Conecta tu reSpeaker Flex y luego ejecuta:

```bash
python list_mics.py
```

Salida de ejemplo:

```
Available audio INPUT devices:

  [0] bcm2835 Headphones      (rate=44100Hz)
  [1] ReSpeaker 4 Mic Array   (rate=16000Hz)
  [2] USB PnP Sound Device    (rate=16000Hz)
```

Anota el número de índice junto a tu reSpeaker; ese es tu `MIC_INDEX`.

### Configurar el proyecto

```bash
cp config.env.example config.env
nano config.env
```

Como mínimo, actualiza estos dos valores:

```env
# Your Groq API key (required) — get one free at console.groq.com
GROQ_API_KEY=gsk_xxxxxxxxxxxxxxxxxxxxxxxx

# The number from list_mics.py
MIC_INDEX=1
```

---

## Parte 4 — Definir las acciones de tu brazo

### Paso 1 — Leer las posiciones actuales de las articulaciones

Mueve físicamente el brazo a una pose que quieras guardar y luego ejecuta:

```bash
python read_positions.py
```

El script imprime valores normalizados en vivo de las articulaciones mientras mueves el brazo. Cuando estés satisfecho con la pose, pulsa **Ctrl+C** y la posición final se imprimirá para que la copies.

### Paso 2 — Añadir la pose a `robot_arm.py`

Abre `robot_arm.py` y busca el diccionario `ACTION_MAP`. Añade tu pose:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/arm_ss.jpg" alt="pir" width={800} height="auto" /></p>

```python
"my_custom_pose": _pose(**{
    "shoulder_pan.pos":  20.0,
    "shoulder_lift.pos": 40.0,
    "elbow_flex.pos":    60.0,
    "wrist_flex.pos":   -30.0,
    "gripper.pos":       80.0,
}),
```

Para gestos animados (como un saludo), usa una lista de poses; cada paso se ejecuta con `ARM_GESTURE_DELAY` entre ellos:

```python
"wave_hi": [
    _pose(**{"shoulder_lift.pos": -70.0, "wrist_flex.pos":  60.0, ...}),
    _pose(**{"shoulder_lift.pos": -70.0, "wrist_flex.pos": -60.0, ...}),
    _HOME,  # return to neutral
],
```

### Paso 3 — Actualizar el mensaje de sistema del LLM en `llm.py`

Añade tu nueva acción a la lista de acciones válidas y a las reglas de activación para que el LLM la conozca:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/llm_ss.jpg" alt="pir" width={800} height="auto" /></p>

```python
Valid actions:
  my_custom_pose  = describe what it does

Trigger rules:
  - "your trigger phrase"  → my_custom_pose
```

---

## Ejecutar el controlador de voz

Asegúrate de que tu entorno conda esté activo y luego:

```bash
conda activate lerobot
python pipeline.py
```

Deberías ver:

```
======================================================
  SO100 Arm Voice Controller — Ready
  Wake word  : hey jarvis
  LLM model  : llama-3.1-8b-instant
  STT model  : whisper-large-v3-turbo
  TTS voice  : autumn
  Arm port   : /dev/ttyACM0  id='my_awesome_follower_arm'
======================================================
[WakeWord] Listening for 'hey jarvis' ...
```

Ahora di **"Hey Jarvis"** y da una orden.

### Ejemplos de comandos de voz

| Lo que dices | Lo que ocurre |
|---------|-------------|
| *"Hey Jarvis, open the gripper"* | La pinza se abre completamente |
| *"Hey Jarvis, grab it"* | La pinza se cierra |
| *"Hey Jarvis, go to pick up mode"* | El brazo se mueve a la pose de agarre |
| *"Hey Jarvis, can you turn around"* | La base gira hacia un lado |
| *"Hey Jarvis, wave at the camera"* | El brazo saluda y vuelve a la posición neutra |
| *"Hey Jarvis, go home"* | Todas las articulaciones vuelven a la posición neutra |

---

## Resumen de archivos del proyecto

```
examples/voice_arm/
├── pipeline.py          # Main entry point — orchestrates the full flow
├── robot_arm.py         # SO100 arm controller — add your poses here
├── llm.py               # LLM prompt — add your voice triggers here
├── wakeword.py          # Listens for "Hey Jarvis" in a background thread
├── audio_recorder.py    # Records audio after wake word fires
├── stt.py               # Sends audio to Groq Whisper → returns text
├── tts.py               # Sends reply to Groq Orpheus → plays audio
├── config.py            # Loads all settings from config.env
├── config.env.example   # Template — copy to config.env and fill in
├── read_positions.py    # Helper: read live joint positions for tuning poses
├── list_mics.py         # Helper: find your MIC_INDEX
└── download_model.py    # Downloads the openwakeword model files
```

---

## Referencia de configuración

| Variable | Valor por defecto | Descripción |
|---|---|---|
| `GROQ_API_KEY` | *(required)* | Tu clave de API de Groq |
| `WAKEWORD_MODEL` | `hey jarvis` | Frase de palabra de activación |
| `MIC_INDEX` | `1` | Índice de dispositivo PyAudio |
| `WAKEWORD_THRESHOLD` | `0.5` | Sensibilidad de detección (0.0–1.0) |
| `WAKEWORD_COOLDOWN` | `2` | Segundos entre reactivaciones |
| `RECORDING_SECONDS` | `3` | Tiempo de grabación tras la palabra de activación |
| `LLM_MODEL` | `llama-3.1-8b-instant` | Modelo Groq LLM |
| `STT_MODEL` | `whisper-large-v3-turbo` | Modelo Groq Whisper |
| `TTS_VOICE` | `autumn` | Voz para la salida de voz |
| `ARM_PORT` | `/dev/ttyACM0` | Puerto USB del brazo seguidor |
| `ARM_ID` | `my_awesome_follower_arm` | ID del brazo (coincide con el nombre del archivo de calibración) |
| `ARM_MOVE_DELAY` | `1.5` | Segundos de espera después de mover a una pose |
| `ARM_GESTURE_DELAY` | `0.4` | Segundos entre pasos de una secuencia de gestos |

---

## Solución de problemas

**PyAudio no se instala**
Instala primero la biblioteca de sistema PortAudio:
```bash
sudo apt-get install -y portaudio19-dev
```

**La palabra de activación nunca se dispara**
Ejecuta `list_mics.py` de nuevo y confirma que `MIC_INDEX` coincide con tu ReSpeaker. Intenta bajar `WAKEWORD_THRESHOLD` a `0.3`. Habla claramente a ~1 metro del micrófono.

**El brazo no se mueve después de una orden**
Comprueba que `ARM_PORT` es correcto (`lerobot-find-port`). Verifica que el archivo de calibración existe en `~/.cache/huggingface/lerobot/calibration/robots/so_follower/<ARM_ID>.json`.

**El brazo se mueve a una posición incorrecta**
Los valores de pose predeterminados en `ACTION_MAP` son estimaciones iniciales. Ejecuta `read_positions.py`, mueve físicamente el brazo a la pose deseada y copia los valores impresos en `robot_arm.py`.

**Errores de TTS / STT**
Vuelve a comprobar `GROQ_API_KEY` en `config.env`. El nivel gratuito de Groq tiene límites de tasa: espera unos segundos entre órdenes si encuentras errores.

**El audio se reproduce pero suena distorsionado**
En Raspberry Pi, establece la salida de audio en el dispositivo correcto mediante `raspi-config` → System Options → Audio.

---

## Créditos

Creado con:
- [LeRobot](https://github.com/huggingface/lerobot) — framework de robótica de código abierto de Hugging Face
- [SO-ARM100](https://wiki.seeedstudio.com/es/lerobot_so100m_new/) — brazo robótico de código abierto y bajo coste de Seeed Studio
- [openwakeword](https://github.com/dscripka/openWakeWord) — detección local de palabra de activación
- [Groq](https://groq.com/) — Whisper STT, LLaMA LLM y Orpheus TTS ultrarrápidos
- [ReSpeaker Flex](https://wiki.seeedstudio.com/es/respeaker_flex/) — matriz de micrófonos USB
