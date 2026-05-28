---
description: Un proyecto de TurtleSim con ROS2 controlado por voz que utiliza reSpeaker Flex y Groq AI para convertir comandos hablados en movimiento del robot en tiempo real, giros, y retroalimentación hablada.

title: Canal de voz ROS2 en reSpeaker Flex
keywords:
  - reSpeaker
  - Robótica
  - ROS2
image: https://files.seeedstudio.com/wiki/reSpeaker_flex/ros2_voice.png
slug: /respeaker_flex_ros2_voice_pipeline
sku: 114993700, 101991441, 114993701
last_update:
  date: 5/27/2026
  author: Kasun Thushara
createdAt: '2026-05-27'
updatedAt: '2026-05-27'
url: https://wiki.seeedstudio.com/es/respeaker_flex_ros2_voice_pipeline/
---

## Introducción

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/flex_ros_banner.png" alt="pir" width={800} height="auto" /></p>

Este proyecto convierte tu voz en control de TurtleSim usando una matriz de micrófonos reSpeaker Flex y ROS2. Di “Hey Jarvis” seguido de un comando, y Jarvis graba el audio, lo transcribe con Groq Whisper, interpreta la intención con Groq LLaMA y responde con Groq Orpheus TTS. Admite movimiento hacia adelante/atrás, giros angulares, orientación basada en DoA y comandos de parada instantánea. El sistema integra detección de palabra de activación, captura de audio, tópicos de ROS2 y publicación de comandos al simulador en una única canalización fluida. Está diseñado para una configuración rápida con Ubuntu y ROS2 Humble, lo que facilita la ejecución de experimentos de robots controlados por voz.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Circular-4-p-6737.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Parte 1 — Instalar ROS2 Humble

> Omite esta parte si ROS2 Humble ya está instalado en tu máquina.
> Compruébalo ejecutando: `ros2 --version`

**1.1 Configurar el repositorio apt de ROS2**

```bash
# Make sure your system is up to date
sudo apt update && sudo apt upgrade -y

# Install required tools
sudo apt install -y software-properties-common curl

# Add the ROS2 GPG key
sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key \
    -o /usr/share/keyrings/ros-archive-keyring.gpg

# Add the ROS2 repository to your sources
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] \
    http://packages.ros.org/ros2/ubuntu $(. /etc/os-release && echo $UBUNTU_CODENAME) main" \
    | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
```

**1.2 Instalar ROS2 Humble Desktop**

```bash
sudo apt update
sudo apt install -y ros-humble-desktop
```

> La variante `desktop` incluye TurtleSim, RViz y todas las herramientas que necesitas.
> Esta descarga es de alrededor de 1 GB — puede tardar unos minutos.

**1.3 Instalar herramientas de compilación**

```bash
sudo apt install -y python3-colcon-common-extensions python3-rosdep
```

**1.4 Cargar ROS2 automáticamente en cada terminal**

```bash
echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

**1.5 Verificar la instalación**

```bash
ros2 --version
# Expected output: ros2 cli    version 0.18.x (or similar)
```

Luego prueba TurtleSim para confirmar que todo funciona:

```bash
# Terminal 1
ros2 run turtlesim turtlesim_node

# Terminal 2
ros2 run turtlesim turtle_teleop_key
```

Deberías ver una ventana con una tortuga que puedes manejar con las teclas de flecha. Pulsa `Ctrl+C` en ambas terminales cuando termines.

## Parte 2 — Crear una regla udev para el dispositivo

Crea una nueva regla udev para garantizar los permisos adecuados para la matriz de micrófonos USB reSpeaker:

```bash
sudo nano /etc/udev/rules.d/50-respeaker.rules
```

Añade las siguientes líneas al archivo:

```bash
# ReSpeaker USB Mic Array
SUBSYSTEM=="usb", ATTR{idVendor}=="2886", ATTR{idProduct}=="0018", MODE="0666", GROUP="plugdev"
SUBSYSTEM=="usb", ATTR{idVendor}=="2886", ATTR{idProduct}=="001a", MODE="0666", GROUP="plugdev"
```

Recargar las reglas de udev y reiniciar el servicio

Recarga las reglas de udev y reinicia el servicio para que los cambios surtan efecto:

```bash
sudo udevadm control --reload-rules
sudo udevadm trigger
sudo service udev restart
```

Desconecta y vuelve a conectar tu matriz de micrófonos USB reSpeaker para aplicar las nuevas reglas.

---

## Parte 3 — Obtener una clave de API de Groq

Este proyecto utiliza la API en la nube gratuita de Groq para:
- **Whisper** — conversión de voz a texto
- **LLaMA 3** — comprensión de tus comandos
- **Orpheus** — la respuesta de voz de Jarvis

1. Ve a [console.groq.com](https://console.groq.com) y crea una cuenta gratuita
2. Haz clic en **API Keys** en la barra lateral izquierda
3. Haz clic en **Create API Key**, asígnale un nombre (por ejemplo, "jarvis") y cópiala
4. Guárdala en un lugar seguro — la pegarás en `config.env` en breve

> El nivel gratuito de Groq es lo bastante generoso para desarrollo y pruebas.
> No se requiere tarjeta de crédito para comenzar.

---

## Parte 4 — Instalar dependencias de Python (a nivel del sistema)

> **Importante:** NO uses un entorno virtual para este proyecto.
> ROS2 utiliza el Python del sistema y no puede ver los paquetes instalados dentro de un venv.
> Instalamos todo con `--break-system-packages` para ponerlos a disposición de los nodos de ROS2.

```bash
pip install \
    groq \
    openwakeword \
    pyaudio \
    numpy<2 \
    python-dotenv \
    pyusb \
```

**Descargar el modelo de palabra de activación "Hey Jarvis"**

```bash
python3 -c "import openwakeword; openwakeword.utils.download_models()"
```

Esto descarga modelos preentrenados en `~/.openwakeword/`. Tarda unos 30 segundos.

**Instalar PortAudio (requerido por PyAudio)**

```bash
sudo apt install -y portaudio19-dev python3-pyaudio
```

---

## Parte 5 — Crear tu espacio de trabajo ROS2

> Sáltate a la Parte 6 si ya tienes un espacio de trabajo `~/ros2_ws`.

```bash
# Create the workspace directory
mkdir -p ~/ros2_ws/src
cd ~/ros2_ws

# Build the empty workspace to set it up
colcon build

# Source it and add to .bashrc so it loads automatically
echo "source ~/ros2_ws/install/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

---

## Parte 6 — Clonar y configurar el proyecto

**6.1 Clonar el repositorio**

```bash
cd ~/ros2_ws/src
git clone https://github.com/KasunThushara/ros_voice_controller_flex.git my_robot_controller
```

> Tu espacio de trabajo ahora debería verse así:
> ```
> ~/ros2_ws/
> └── src/
>     └── my_robot_controller/
>         ├── my_robot_controller/
>         │   ├── voice_node.py
>         │   ├── rotate_doa.py
>         │   ├── wakeword.py
>         │   └── ...
>         ├── launch/
>         │   └── jarvis.launch.py
>         └── config.env.example
> ```

**6.2 Crear tu archivo de configuración**

```bash
cd ~/ros2_ws/src/my_robot_controller
cp config.env.example config.env
nano config.env
```

Abre el archivo y rellena tus valores:

```env
# ── Groq API (required) ────────────────────────────────
GROQ_API_KEY=gsk_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   ← paste your key here

# ── Microphone ─────────────────────────────────────────
MIC_INDEX=1          ← find the correct number in Step 6.3 below
WAKEWORD_THRESHOLD=0.5
WAKEWORD_COOLDOWN=2

# ── Recording ──────────────────────────────────────────
RECORDING_SECONDS=4
SAMPLE_RATE=16000

# ── Models ─────────────────────────────────────────────
WAKEWORD_MODEL=hey jarvis
LLM_MODEL=llama-3.1-8b-instant
STT_MODEL=whisper-large-v3-turbo
TTS_MODEL=canopylabs/orpheus-v1-english
TTS_VOICE=autumn
```

Guarda con `Ctrl+O`, `Enter`, `Ctrl+X`.

**6.3 Encontrar tu MIC_INDEX correcto**

Ejecuta este asistente para listar todos los dispositivos de entrada de audio:

```bash
python3 -c "
import pyaudio
p = pyaudio.PyAudio()
print('\nAvailable INPUT devices:\n')
for i in range(p.get_device_count()):
    d = p.get_device_info_by_index(i)
    if d['maxInputChannels'] > 0:
        print(f'  [{i}]  {d[\"name\"]}')
        print(f'        channels={int(d[\"maxInputChannels\"])}  rate={int(d[\"defaultSampleRate\"])}Hz')
p.terminate()
"
```

Salida de ejemplo:

```
Available INPUT devices:

  [0]  HDA Intel PCH: ALC897 Analog
        channels=2  rate=44100Hz

  [1]  reSpeaker Flex XVF3800
        channels=6  rate=16000Hz    ← this is the one you want

  [2]  USB PnP Sound Device
        channels=2  rate=16000Hz
```

Busca la línea que diga **reSpeaker Flex** o **reSpeaker Flex XVF3800**. Anota el número entre corchetes — ese es tu `MIC_INDEX`. Actualiza `config.env` con ese número.

---

## Parte 7 — Compilar el paquete

```bash
cd ~/ros2_ws
colcon build --packages-select my_robot_controller
source ~/.bashrc
```

Salida esperada:

```
Starting >>> my_robot_controller
Finished <<< my_robot_controller [3.2s]

Summary: 1 package finished [3.5s]
```

>  Debes ejecutar `colcon build` y `source ~/.bashrc` cada vez que cambies cualquier archivo de Python.

---

## Parte 8 — Ejecutar el proyecto

```bash
ros2 launch my_robot_controller jarvis.launch.py
```

Deberías ver que se inician tres procesos:

```
[turtlesim_node-1]   [INFO] Spawning turtle [turtle1] at x=[5.54], y=[5.54]
[angle_controller-2] [INFO] AngleController ready — listening on /target_angle
[voice_command-3]    [INFO] reSpeaker Flex XVF3800 found — DoA ready
[voice_command-3]    [WakeWord] Listening on device 1 (6ch → mono) for 'hey jarvis' ...
[voice_command-3]    [INFO] Jarvis is listening ...
```

Se abrirá una ventana mostrando la tortuga. Ahora di:

> **"Hey Jarvis, move forward"**

Jarvis responderá "Moving forward!" y la tortuga se moverá. 

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/ros-results.png" alt="pir" width={800} height="auto" /></p>

## Referencia de comandos de voz

| Di esto | Qué sucede |
|---|---|
| `"Hey Jarvis, move forward"` | La tortuga avanza 1 paso |
| `"Hey Jarvis, move backward"` | La tortuga retrocede 1 paso |
| `"Hey Jarvis, turn left"` | La tortuga gira a la izquierda 90° |
| `"Hey Jarvis, turn left 45"` | La tortuga gira a la izquierda 45° |
| `"Hey Jarvis, turn right"` | La tortuga gira a la derecha 90° |
| `"Hey Jarvis, turn right 30 degrees"` | La tortuga gira a la derecha 30° |
| `"Hey Jarvis, turn to my direction"` | La tortuga se orienta hacia tu voz (DoA) |
| `"Hey Jarvis, face me"` | Igual que arriba |
| `"Hey Jarvis, turn to 90"` | La tortuga gira hasta 90° absolutos |
| `"Hey Jarvis, face 180 degrees"` | La tortuga gira hasta 180° absolutos |
| `"Hey Jarvis, spin around"` | La tortuga hace un giro completo de 360° |
| `"Hey Jarvis, do a 360"` | Igual que arriba |
| `"Hey Jarvis, stop"` | La tortuga se detiene inmediatamente |

---

## Estructura de archivos del proyecto

```
my_robot_controller/
│
├── my_robot_controller/          # Python package (ROS2 nodes)
│   ├── __init__.py
│   ├── voice_node.py             # Main voice pipeline node
│   ├── rotate_doa.py             # PID angle controller node
│   ├── wakeword.py               # Wake word detection (openwakeword)
│   ├── audio_recorder.py         # Mic recording after wake word
│   ├── stt.py                    # Speech-to-text (Groq Whisper)
│   ├── llm.py                    # Intent parsing (Groq LLaMA)
│   ├── tts.py                    # Text-to-speech (Groq Orpheus)
│   └── config.py                 # Loads settings from config.env
│
├── launch/
│   └── jarvis.launch.py          # Starts all 3 nodes together
│
├── config.env                    # Your secrets (not in git)
├── config.env.example            # Template — copy to config.env
├── package.xml
└── setup.py
```

### Cómo se conectan los nodos

```
reSpeaker Flex (USB)
        │
        ├── [voice_command node]
        │     openwakeword → Groq Whisper → Groq LLaMA → Groq Orpheus
        │     │                                          │
        │     │ publishes /target_angle (Float32)        │ speaks reply
        │     │ publishes /turtle1/cmd_vel (Twist)       │
        │     │                                          ▼
        │     ▼                                     Speaker output
        └── [angle_controller node]
              subscribes /target_angle
              subscribes /turtle1/pose
              PID control → publishes /turtle1/cmd_vel
                                        │
                                        ▼
                              [turtlesim_node]
```

---

## Referencia de configuración

Todos los ajustes se encuentran en `config.env`. Edítalo y recompila para aplicar los cambios.

| Variable | Predeterminado | Descripción |
|---|---|---|
| `GROQ_API_KEY` | *(required)* | Tu clave de API de Groq |
| `MIC_INDEX` | `1` | Índice de dispositivo PyAudio del reSpeaker |
| `WAKEWORD_MODEL` | `hey jarvis` | Frase de palabra de activación |
| `WAKEWORD_THRESHOLD` | `0.5` | Sensibilidad de detección (0.0–1.0, menor = más sensible) |
| `WAKEWORD_COOLDOWN` | `2` | Segundos antes de que la palabra de activación pueda volver a dispararse |
| `RECORDING_SECONDS` | `4` | Tiempo de grabación después de que se active la palabra de activación |
| `SAMPLE_RATE` | `16000` | Frecuencia de muestreo de audio en Hz |
| `LLM_MODEL` | `llama-3.1-8b-instant` | Modelo Groq LLM para el análisis de intención |
| `STT_MODEL` | `whisper-large-v3-turbo` | Modelo Groq Whisper para transcripción |
| `TTS_MODEL` | `canopylabs/orpheus-v1-english` | Modelo Groq TTS |
| `TTS_VOICE` | `autumn` | Voz para la salida de voz (`tara`, `leah`, `leo`, `dan`, `mia`) |

---


## Recursos

Creado con:
- [Seeed Studio reSpeaker Flex](https://wiki.seeedstudio.com/es/respeaker_flex_introduction/) — matriz de micrófonos con chip XMOS XVF3800
- [ROS2 Humble](https://docs.ros.org/en/humble/) — middleware para robots
- [openwakeword](https://github.com/dscripka/openWakeWord) — detección local de palabra de activación
- [Groq](https://groq.com/) — Whisper STT ultrarrápido, LLaMA LLM, Orpheus TTS
- [TurtleSim](https://docs.ros.org/en/humble/Tutorials/Beginner-CLI-Tools/Introducing-Turtlesim/Introducing-Turtlesim.html) — simulador de tortugas de ROS2


## Soporte técnico y debate sobre el producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
