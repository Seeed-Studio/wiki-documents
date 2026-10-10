---
description: "Capítulo 30 del Curso de Introducción a la IA Física de Seeed: un proyecto optativo de interacción por voz y multimodal: una matriz de micrófonos reSpeaker con seguimiento DOA de la fuente de sonido más reconocimiento de voz Whisper de Groq y comprensión de intención con Llama para controlar por voz el reBot Arm, desde el cableado de hardware hasta la referencia de la línea de comandos."
title: Capítulo 30 - Interacción por Voz y Multimodal
hide_title: true
keywords:
  - reBot
  - Brazo Robótico
  - reSpeaker
  - DOA
  - Whisper
  - Control por Voz
  - Multimodal
  - Curso
image: https://raw.githubusercontent.com/Seeed-Projects/reBot-DevArm/main/media/v1.0.png
slug: /rebot_physical_ai_course_chapter_30
displayed_sidebar: RebotCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-08
  author: Seeed Studio Robotics Team
createdAt: '2026-10-08'
updatedAt: '2026-10-08'
url: https://wiki.seeedstudio.com/es/rebot_physical_ai_course_chapter_30/
---

import '/src/css/rebot-wiki-style.css';
import 'katex/dist/katex.min.css';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 6 · Capítulo 30 · Optativo</span>
    <h2>30. Interacción por Voz y Multimodal</h2>
    <p>
      Capítulo 30 del Curso de Introducción a la IA Física de Seeed: un proyecto optativo de interacción por voz y multimodal: una matriz de micrófonos reSpeaker con seguimiento DOA de la fuente de sonido más reconocimiento de voz Whisper de Groq y comprensión de intención con Llama para controlar por voz el reBot Arm, desde el cableado de hardware hasta la referencia de la línea de comandos.
    </p>
    <div className="hero-actions">
      <a href="#overview">Resumen del capítulo</a>
      <a href="#hardware">Hardware</a>
      <a href="#setup">Configuración del entorno</a>
      <a href="#modes">Modos de interacción</a>
    </div>
  </div>
</section>

<a id="overview"></a>

## 30.1 Resumen del Capítulo

Usa un reSpeaker para controlar por voz el reBot Arm. Este documento te guía paso a paso, desde cero, para construir un sistema de brazo inteligente que "puede oír y puede moverse".

Este es un **sistema de control de brazo inteligente impulsado por voz**.

Cuando dices "hola", el brazo gira hacia ti y asiente; cuando dices "baila", se balancea felizmente; aplaude al otro lado de la habitación y "oye" la dirección del sonido y gira para mirarte.

El sistema hace tres cosas:

- **Oír**: captura audio a través de la matriz de micrófonos y estima la dirección del sonido
- **Entender**: reconoce el habla con IA e infiere la intención
- **Moverse**: controla el brazo para ejecutar la acción correspondiente

Este proyecto demuestra un sistema completo de "colaboración dispositivo-nube + fusión de múltiples sensores":

- **Borde (en el dispositivo)**: localización de sonido DOA, control de movimiento, animación en reposo
- **Nube**: reconocimiento de voz (Whisper), comprensión de intención (Llama)

Ventajas de esta arquitectura:

- DOA es una tarea en tiempo real (&lt; 100 ms) y debe ejecutarse localmente
- El reconocimiento de voz necesita un modelo grande y debe ejecutarse en la nube
- El control de movimiento es un bucle de seguridad y debe ejecutarse localmente

### Dos modos de interacción
| Modo | Nombre | Método de interacción | Escenarios aplicables | ¿Requiere Internet? |
| ---- | ---- | ---- | ---- | ---- |
| Modo 1 | Seguimiento de fuente de sonido DOA | Detecta automáticamente la dirección de la fuente de sonido y gira hacia ella | Demostraciones en exposiciones, instalaciones interactivas | No |
| Modo 2 | Control por comandos de voz | Mantén pulsada la tecla Enter para controlar | Asistente de voz, demostraciones didácticas | Sí (Groq API) |


### Arquitectura del sistema

```text
You speak / make a sound
      v
[ reSpeaker ]  4-mic array + XVF3800 chip
      v
[ Ubuntu ]  Python 3.10 main program
      v
   two paths:
   |--> DOA mode: compute sound direction locally -> turn the arm
   +--> Voice mode: upload to Groq cloud AI -> Whisper STT + Llama NLU -> control the arm
      v
[ reBot Arm ]  7-DoF arm executes
```

- Arquitectura por capas
    - **Capa de hardware** (dispositivos que puedes tocar):
        - reSpeaker (matriz de 4 micrófonos con controlador XIAO ESP32S3)
        - reBot Arm B601-DM (brazo de 6 GDL + pinza)
        - PC con Ubuntu 22.04 (ejecuta el programa principal)
    - **Capa de controladores** (hace que el hardware se comunique):
        - Audio USB (pyusb / libusb): conecta la matriz de micrófonos
        - Comunicación serie (MotorBridge): conecta el brazo
        - Web API (Groq Cloud): conecta los servicios de IA en la nube
    - **Capa de algoritmos** (el "cerebro" que procesa los datos):
        - Localización de sonido DOA (local, en tiempo real)
        - Reconocimiento de voz Whisper (Groq Cloud)
        - Comprensión de intención Llama-3.3 (Groq Cloud)
        - Planificación de interpolación de movimiento (local, control suave)
    - **Capa de aplicación** (efectos que puedes ver):
        - Modo de seguimiento DOA
        - Modo de control por voz
        - Animación de respiración en reposo
        - Difusión por voz

<a id="hardware"></a>

## 30.2 Preparación de Hardware

### Qué preparar
| Componente | Modelo | Cant. | Función general | Recomendación de compra |
| ---- | ---- | ---- | ---- | ---- |
| Brazo robótico | reBot Arm B601-DM | 1 | El "cuerpo" que ejecuta los movimientos | [Official Seeed Studio](https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html) |
| Matriz de micrófonos | reSpeaker XVF3800 | 1 | Captura sonido y detecta la dirección | [Official Seeed Studio](https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html) |
| PC host | PC con Ubuntu 22.04 | 1 | El "cerebro" que ejecuta los programas | Arquitectura x86_64 |
| Cable USB | USB-A a USB-C | 2 | Conexión de dispositivos | Normalmente incluido con el dispositivo |
| Sargento de carpintería | 3 pulgadas o mayor | 2 | Fijar la base del brazo robótico | [Official Seeed Studio](https://www.seeedstudio.com/6-Inch-G-Clamp-p-6912.html)   |
| Fuente de alimentación | 24V 15A (conector XT30) | 1 | Alimentar el brazo robótico |  [Official Seeed Studio](https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html)  |


#### Por qué este hardware

- El **reSpeaker XVF3800** es una matriz de 4 micrófonos de Seeed Studio y XMOS:
- Chip DSP XVF3800 integrado, que admite de forma nativa DOA, cancelación de eco y supresión de ruido
- No se necesita desarrollo adicional de algoritmos; la localización de sonido se realiza a nivel de hardware
- USB plug-and-play

**El reBot Arm B601-DM** es un brazo de sobremesa de 7 GDL:

- 7 GDL significa un movimiento muy flexible (cercano a un brazo humano)
- B601-DM es la versión con motor DM (la otra es la versión con servos RS); los motores DM tienen mayor precisión
- Soporte integrado para la biblioteca de cinemática Pinocchio

### Visión general del hardware

#### Matriz de micrófonos reSpeaker

Un módulo de procesamiento de audio inteligente con **4 micrófonos**:

| Característica | Detalle |
| :--- | :--- |
| Diseño dividido | La placa principal y la placa de la matriz de micrófonos pueden separarse para un despliegue flexible |
| Captación de 360° | Cuatro micrófonos dispuestos en anillo, capturando sonido desde todas las direcciones |
| Procesamiento inteligente integrado | Chip XMOS XVF3800 con cancelación de eco, supresión de ruido y localización de sonido (DOA) |
| Interfaces USB dobles | Conector USB-C y conector de bloqueo PH2.0 |
| Amplificador integrado | Controla directamente un altavoz de 10 W (a través del conector JST) |

En una frase: un "oído que todo lo oye": cuatro "oídos" para escuchar el sonido desde todas las direcciones, más la capacidad de calcular la dirección y filtrar el ruido.

#### PC con Ubuntu 22.04

| Elemento | Requisito |
| :--- | :--- |
| SO | Ubuntu 22.04 LTS (64 bits) |
| Arquitectura | x86_64 (PC Intel/AMD normal) |
| Mínimo | CPU de 4 núcleos / 8 GB de RAM / 50 GB de disco / acceso a internet |

Opciones para usuarios de Windows:

- Instalar un sistema de arranque dual (recomendado)
- Usar una máquina virtual (VMware; pérdida de rendimiento; no recomendado para este proyecto)

### Diagrama de cableado del hardware

<div className="image-frame">
  <img width={600} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/tutorial_1/chapter-30/ch30-01.png" alt="Calibración mano-ojo AX = XB" />
</div>


Pasos de cableado:

- Conecta el reSpeaker al PC con un cable USB-C
- Conecta el reBot Arm al PC con un cable USB-C
- (Opcional) conecta un altavoz o auriculares a la salida de audio del reSpeaker
- Asegúrate de que el PC tenga conexión a internet

<a id="setup"></a>

## 30.3 Configuración del Entorno

### Instalar Miniforge

```bash
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
```

#### Por qué Miniforge en lugar de Python del sistema

- **Aislamiento**: cada proyecto tiene su propio entorno de Python, independiente de los demás
- **Versiones flexibles**: fijar una versión específica de Python para el proyecto (por ejemplo, 3.10.2)
- **Gestión de dependencias**: conda resuelve dependencias binarias complejas (por ejemplo, las bibliotecas C++ de Pinocchio)

Indicaciones del instalador:

- Pulsa Enter para ver la licencia
- Escribe `yes` para aceptar
- Pulsa Enter para confirmar la ruta de instalación (por defecto `~/miniforge3`)
- Escribe `yes` para inicializar conda (recomendado)

Cuando termine, cierra y vuelve a abrir la terminal:

```bash
conda --version
# expected: conda 24.x.x
```

### Clonar el código del proyecto

```bash
git clone https://github.com/xr686/reBot-Arm-reSpeaker-Flex.git
cd reBot-Arm-reSpeaker-Flex
```

Si la red es lenta, usa un mirror: `git clone https://ghproxy.com/https://github.com/xr686/reBot-Arm-reSpeaker-Flex.git`

### Crear el entorno Conda

```bash
conda env create -f environment.yml
```

Esto tarda unos 10-30 minutos y hará lo siguiente:

- Crear un entorno Python 3.10.2 llamado `flex`
- Instalar pinocchio, numpy, pyusb y otras dependencias

El resultado correcto se ve así:

```text
Executing transaction: ... done
# To activate this environment, use
#     $ conda activate flex
```

#### Por qué pinocchio

- Pinocchio es una biblioteca C++ rápida de cinemática de cuerpos rígidos
- Proporciona cinemática directa (FK), cinemática inversa (IK) y dinámica
- Es la dependencia central para el control de movimiento del brazo en este proyecto

### Activar el entorno Conda

```bash
conda activate flex
```

Activación correcta: aparece `(flex)` antes del prompt

```bash
(flex) user@computer:~/reBot-Arm-reSpeaker-Flex$
```

Vuelve a activar esto cada vez que abras una nueva terminal.

### Instalar dependencias del sistema

```bash
sudo apt-get update && sudo apt-get install -y ffmpeg
```

#### Qué hace ffmpeg

- ffmpeg es una herramienta de procesamiento de audio/vídeo; este proyecto la usa para postprocesar archivos de audio después de TTS: convertir el formato de audio, ajustar la frecuencia de muestreo y unir/recortar audio.

### Instalar uv

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

#### Por qué se necesita uv

- uv es un gestor de paquetes de Python extremadamente rápido (10-100 veces más rápido que pip)
- La biblioteca `motorbridge` del proyecto debe instalarse mediante uv
- El archivo uv.lock fija versiones exactas de dependencias

Después de la instalación, cierra y vuelve a abrir la terminal.

### Clonar la biblioteca de control del brazo

```bash
git clone https://github.com/vectorBH6/reBotArm_control_py.git
cd reBotArm_control_py
uv sync
```

Salida esperada: progreso de instalación sin errores.

### Configurar PYTHONPATH

```bash
export PYTHONPATH="$PWD:$PYTHONPATH"
```

#### Qué significa esto

- Cuando Python importa una biblioteca, busca en las rutas de `sys.path`. Este comando le dice a Python: "además de las rutas de búsqueda por defecto, busca en este directorio".
- ⚠ Este ajuste se pierde cuando cierras la terminal. Opción permanente:

    ```bash
    echo 'export PYTHONPATH="'$PWD':$PYTHONPATH"' >> ~/.bashrc
    source ~/.bashrc
    ```

#### Por qué no usar pip install

- `reBotArm_control_py` es una biblioteca en desarrollo, no un paquete estable publicado en PyPI
- Una instalación editable es más flexible
- Apuntar PYTHONPATH directamente al directorio de código fuente también funciona

### Configurar permisos del puerto serie

```bash
sudo chmod 666 /dev/ttyACM*
```

Por qué

- Linux tiene una gestión estricta de permisos para dispositivos de hardware. De forma predeterminada, los usuarios normales no pueden acceder directamente a los dispositivos serie; este comando permite que todos los usuarios lean y escriban en estos dispositivos.

Este ajuste se pierde después de reiniciar. Opción permanente:

```bash
sudo usermod -a -G dialout $USER
# log out and back in to take effect
```

- **Principio**: `dialout` es el grupo de Linux con acceso a dispositivos serie; unirse a él otorga al usuario lectura/escritura en los dispositivos propiedad de ese grupo.

### Configurar la clave de API de Groq

Obtener la clave de API:

- Visita [https://console.groq.com/keys](https://console.groq.com/keys)
- Regístrate / inicia sesión (correo electrónico o cuenta de GitHub)
- Haz clic en "Create API Key"
- Copia la clave (formato `gsk_xxxxxxxxxxxx`)

Configúrala en el código:

```bash
cd ~/reBot-Arm-reSpeaker-Flex
nano sound_tracking_arm.py
```

Busca `VOICE_CFG`:

```python
VOICE_CFG = {
    "api_key": "12345678",   # ←- replace with your API key
    ...
}
```

Cámbialo a:

```python
"api_key": "gsk_aBcDeFgHiJkLmNoPqRsTuVwXyZ",
```

- Guardar: Ctrl O -> Enter -> Ctrl X

Recordatorio de seguridad:

- No compartas la clave de API en repositorios públicos
- No publiques capturas de pantalla en redes sociales
- Si se filtra, elimínala inmediatamente y regénérala en la consola de Groq


## 30.4 Conexión y montaje del hardware

### Conexión de hardware

- Paso 1: conectar reSpeaker
    - Conecta reSpeaker al PC con un cable USB-C
    - El LED de reSpeaker debería encenderse
    - `lsusb` debería mostrar el dispositivo de Seeed Studio
- Paso 2: conectar el reBot Arm
    - Sujeta la base del brazo a una mesa con una abrazadera de carpintero
    - Conecta el brazo al PC con un cable USB-C
    - Conecta la alimentación de 24 V (XT30); **no lo enciendas todavía**
    - **Lista de comprobación de seguridad previa al encendido:**
        - Base del brazo asegurada
        - Sin obstáculos en el rango de movimiento
        - Sin personas cerca del rango de movimiento
        - Cable USB conectado
        - Cable de alimentación conectado correctamente
- Paso 3: encender la alimentación
    - Después de comprobarlo, enciende la fuente de 24 V
    - El brazo emite un suave sonido de encendido del motor
    - `ls /dev/ttyUSB*` debería mostrar `/dev/ttyUSB0`

### Verificar conexiones de hardware

```bash
arecord -l
```

Esperado: `card 2: XVF3800 [reSpeaker XVF3800], device 0: USB Audio [USB Audio]`

```bash
ls -la /dev/ttyUSB0
```

Esperado: `crw-rw-rw- 1 root dialout ... /dev/ttyUSB0`

## 30.5 Primera ejecución

### Verificación previa a la ejecución

#### Comprobación 1: dependencias de Python

```bash
conda activate flex
cd ~/reBot-Arm-reSpeaker-Flex
python -c "import usb.core; import numpy; print('pyusb + numpy OK')"
```

Esperado: `pyusb + numpy OK`

#### Comprobación 2: biblioteca del brazo

```bash
export PYTHONPATH="$HOME/reBotArm_control_py:$PYTHONPATH"
python -c "from reBotArm_control_py.actuator import RobotArm; print('Robot Arm Library OK')"
```

- Esperado: `Robot Arm Library OK`

#### Comprobación 3: micrófono

```bash
arecord -D plughw:2,0 -c 6 -r 16000 -f S16_LE -d 3 /tmp/test.wav
aplay -D plughw:2,0 /tmp/test.wav
```

- Escuchar el audio grabado = el micrófono funciona.

### Inicio

```bash
cd ~/reBot-Arm-reSpeaker-Flex
python sound_tracking_arm.py
```

Salida esperada:

```text
==================================================
  reBot Arm B601-DM + reSpeaker Flex
  Please select the operating mode:
==================================================
  [1] DOA Interaction Mode (Sound Source Tracking + Standby Animation)
  [2] Voice control mode (button trigger + AI LLM control)
==================================================
Please enter the mode number (1 or 2):
```

- Introduce `1`: modo de seguimiento de fuente de sonido DOA
- Introduce `2`: modo de control por voz

Iniciar directamente en un modo dado:

```bash
python sound_tracking_arm.py --mode doa    # DOA mode
python sound_tracking_arm.py --mode voice  # voice mode
```

### Prueba de la primera ejecución

#### Prueba del modo DOA

- El programa: inicializa USB -> conecta el brazo -> entra en reposo
- Método de prueba: ponte al lado del brazo y habla o aplaude
- Observa si el brazo gira hacia ti, asiente y vuelve al reposo

#### Prueba del modo de voz

- Pulsa Enter; verás el aviso de "recording"
- Di "hello" o "say hello"
- Espera unos 5 segundos
- Observa si reconoce el habla, el brazo realiza la acción y se reproduce una respuesta por voz

---

<a id="modes"></a>

## 30.6 Detalles de las funciones

### Modo 1: Seguimiento de fuente de sonido DOA

#### Qué es DOA

- DOA = Direction of Arrival
- Estimar de qué dirección viene el sonido (como cuando los oídos juzgan de dónde viene un sonido)

#### Flujo de trabajo

```text
Start the system
    v
Initialize USB device
    v
Connect reSpeaker  ←->  Connect reBot Arm
    v
Loop:
    |- Read DOA angle data (0 deg~360 deg)
    |- Is a valid sound source detected?
    |   |- No -> Breathing idle animation -> keep reading
    |   +- Yes -> 4-frame angle buffer queue -> compute weighted average angle
    |           -> cosine-similarity smoothing filter
    |           -> angle change > trigger threshold?
    |               |- No -> keep reading
    |               +- Yes -> arm turns toward the target direction
    |                       -> performs a nod
    |                       -> enters cooldown
    |                       -> keep reading
    v
Exit (Press Ctrl+C)
```

#### Detalles del algoritmo principal

- Cola de búfer de ángulos de 4 fotogramas
- **Problema**: los ángulos DOA de un solo fotograma tiemblan (+/-5°~10°); si se controla el brazo directamente, provoca un movimiento constante de sacudidas.
- **Solución**: un búfer circular almacena los últimos 4 fotogramas de datos DOA (~200 ms).

    ```text
    [diagram: ring buffer]

         new frame written
            v
      [F4] [F3] [F2] [F1]
       |              |
       +---- average --+
            v
         smoothed angle
    ```

- **Por qué 4 fotogramas**:
    - Muy pocos: suavizado insuficiente (el temblor sigue siendo visible)
    - Demasiados: retardo en la respuesta (el brazo reacciona lentamente)
    - 4 fotogramas es un valor empírico que equilibra suavidad y capacidad de respuesta

#### Filtro de suavizado por similitud de coseno

- **Problema**: el micrófono puede juzgar mal la dirección (ruido repentino, sonido reflejado).
- **Solución**: comprobar la coherencia del ángulo entre los fotogramas recientes; demasiada diferencia se trata como ruido.

    ```python
    import numpy as np

    def is_consistent(angles, threshold_deg=30):
        """Check whether recent angles are consistent."""
        if len(angles) < 2:
            return True
        # compute angle differences between adjacent frames (handle 360 deg wrap)
        diffs = []
        for i in range(len(angles) - 1):
            diff = abs(angles[i+1] - angles[i])
            # the diff may wrap around 360; take the smaller
            diff = min(diff, 360 - diff)
            diffs.append(diff)

        # consistent only when the max diff is below the threshold
        return max(diffs) < threshold_deg
    ```

- Umbral de activación
    - Justificación para los **15° predeterminados**:
        - Los oídos humanos juzgan la dirección del sonido con un error de aproximadamente +/-10°~15°
        - El umbral es ligeramente mayor que el error del oído para evitar responder a pequeñas fluctuaciones
        - Umbral demasiado grande -> respuesta lenta
        - Umbral demasiado pequeño -> activaciones falsas frecuentes

#### Justificación del tiempo de enfriamiento (3 segundos por defecto)

- Girar + asentir lleva unos 2-3 segundos
- Durante el enfriamiento, se ignoran los nuevos sonidos para que una acción no se interrumpa a mitad de ejecución
- El enfriamiento debe ser ligeramente más largo que la duración de una sola acción

#### Animación de respiración en reposo

- Ciclo de unos 4 segundos
- Los ángulos de las articulaciones oscilan lentamente +/-5 grados de forma sinusoidal
- Efecto visual: como una persona respirando
- Muestra que el sistema está en funcionamiento y da confianza al usuario

### Modo 2: Control por comandos de voz

#### Bucle completo de interacción

- Grabar -> reconocer -> entender -> ejecutar -> anunciar

#### Flujo de trabajo

```text
The user presses Enter.
    v
arecord starts recording (6 channels, 16kHz, 5 seconds)
    v
User releases Enter -> stop recording
    v
NumPy audio normalization (extract first channel + gain amplification)
    v
Upload to Groq API
    v
Whisper model performs speech-to-text (STT)
    v
Text command obtained (e.g. "turn left")
    v
Send to Llama-3.3-70B large language model
    v
LLM understands intent + outputs JSON structured result
    v
Parse result
    |- Invalid -> broadcast "Sorry, I didn't catch that. Could you please repeat?"
    +- Valid -> execute the corresponding arm action
              v
         Edge-TTS voice broadcast of the result
              v
         Return to idle
```

#### Detalles del procesamiento de audio

```python
# 6-channel capture
audio_data = arecord(... -c 6 -r 16000 ...)  # 6 channels, 16kHz
# take channel 1 (XVF3800 has already beamformed)
single_channel = audio_data[:, 0]

# normalize + gain
normalized = single_channel / np.max(np.abs(single_channel))
amplified = normalized * 0.9  # leave 10% headroom to avoid clipping
# save as WAV
scipy.io.wavfile.write("output.wav", 16000, (amplified * 32767).astype(np.int16))
```

#### Comandos de voz compatibles

#### Cómo la IA entiende tus palabras

- Usa prompt engineering: se le da a la IA una plantilla de instrucciones detallada:
- Qué acciones se pueden ejecutar
- El significado de cada acción

#### Formato de salida requerido (JSON)

- Por ejemplo, "help me turn my head to the left" se analiza como:

    ```json
    {"action": "turn_left", "params": {"angle": 45}, "reply": "Okay, turning left."}
    ```

**Ventaja**: no se necesitan palabras de comando fijas; solo habla de forma natural como si charlaras.

- Ejemplo de diseño de prompt

    ```python
    SYSTEM_PROMPT = """
    You are a robotic arm voice-control assistant. The user will say what they want the arm to do.
    Choose the best-matching action from the list below and output it as JSON:

    Available actions:
    - turn_left: turn left, param angle (default 45)
    - turn_right: turn right, param angle (default 45)
    - say_hello: greet, nod twice in a row
    - wave: wave, sway left and right twice
    - reset: return to initial position
    - stop: stop immediately

    Output format (strict JSON):
    {"action": "<action_name>", "params": {<params>}, "reply": "<voice reply to user>"}

    Do not output anything else; output only JSON.
    """
    ```

## 30.7 Argumentos de línea de comandos

### Tabla completa de argumentos

```bash
python sound_tracking_arm.py [arguments]
```

### Ejemplos de uso

#### Uso básico

```bash
python sound_tracking_arm.py                    # DOA tracking mode (default)
python sound_tracking_arm.py --mode voice       # voice control mode
```

#### Ajustar la sensibilidad de DOA

```bash
# raise the trigger threshold (larger angle change needed, fewer false triggers)
python sound_tracking_arm.py --threshold 25

# lower the trigger threshold (more sensitive, but more false triggers)
python sound_tracking_arm.py --threshold 10

# extend cooldown
python sound_tracking_arm.py --cooldown 5

# adjust multiple at once
python sound_tracking_arm.py --threshold 20 --cooldown 5
```

#### Especificar dispositivos de hardware

```bash
# arm on a different serial port
python sound_tracking_arm.py --port /dev/ttyACM0

# pass the API key on the command line (overrides code config)
python sound_tracking_arm.py --mode voice --groq-key gsk_xxxxxxxxxxx
```

#### Cambiar la voz de TTS

```bash
# Chinese male voice (Yunjian)
python sound_tracking_arm.py --mode voice --tts-voice zh-CN-YunjianNeural

# Chinese female voice (Xiaoxiao, default)
python sound_tracking_arm.py --mode voice --tts-voice zh-CN-XiaoxiaoNeural

# Chinese female voice (Xiaoxiao, multilingual, multi-emotion)
python sound_tracking_arm.py --mode voice --tts-voice zh-CN-XiaoxiaoMultilingualNeural
```

- Habilitar depuración

    ```bash
    python sound_tracking_arm.py --debug
    ```

---

> （Nota: parte del contenido fue generado por Doubao Gongzuo AI）

</div>
