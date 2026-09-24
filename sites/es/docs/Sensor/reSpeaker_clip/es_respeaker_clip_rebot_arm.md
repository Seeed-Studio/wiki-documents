---
description: Controla por voz un reBot Arm B601-DM a través de un reSpeaker Clip mediante BLE RTC. Transmite y decodifica audio Opus, segmenta el habla con WebRTC VAD y luego usa Groq Whisper STT y un analizador de intención basado en LLM para mover las articulaciones y la pinza del brazo, todo instalable con `pip` en Ubuntu 22.04.
title: Controlar reBot Arm usando la voz con reSpeaker Clip
keywords:
  - reSpeaker Clip
  - reBot Arm
  - B601-DM
  - control por voz
  - BLE RTC
  - Groq
  - Whisper
  - STT
  - reconocimiento de intención
  - Opus
  - VAD
  - Python
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_render_02.png
slug: /control_rebot_arm_using_voice_with_respeaker_clip
sku: 100020126
last_update:
  date: 9/11/2026
  author: Kasun Thushara
createdAt: '2026-09-11'
updatedAt: '2026-09-11'
url: https://wiki.seeedstudio.com/es/control_rebot_arm_using_voice_with_respeaker_clip/
---

# Controlar reBot Arm usando la voz con reSpeaker Clip

`rebot-clip` te permite controlar por voz un reBot Arm B601-DM a través de un reSpeaker Clip, convirtiendo el habla natural en movimiento físico. El Clip transmite audio Opus por BLE RTC mientras la aplicación lo decodifica y ejecuta detección de actividad de voz WebRTC/por energía; luego Whisper STT de Groq y un analizador de intención basado en LLM traducen cada enunciado en una acción fija del brazo, como saludar, girar, ir a home u abrir la pinza. Es totalmente instalable con `pip` en Ubuntu 22.04 sin necesidad de conda, y cambia automáticamente a un brazo simulado cuando las ruedas de pinocchio/motorbridge o el puerto serie no están disponibles.


<div class="video-container">
  <iframe width="800" height="400"
          src="https://www.youtube.com/embed/OdBwXYKzoio"
          title="ReSpeaker Lite with XIAO ESP32S3 Home Assistant"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
  </iframe>
</div>

## Hardware necesario

<div style={{ display: 'flex', justifyContent: 'center' }}>

<table>
  <tr>
    <th>reSpeaker Clip</th>
    <th>reBot Arm B601-DM</th>
  </tr>

  <tr>
    <td>
      <div style={{ textAlign: 'center' }}>
        <img
          src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_render_02.png"
          style={{ width: 400, height: 'auto' }}
        />
      </div>
    </td>
    <td>
      <div style={{ textAlign: 'center' }}>
        <img
          src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/img_v3_0210p_67d75fe6-a1fe-40a9-b025-ac92efb1bbbg_1.jpg"
          style={{ width: 400, height: 'auto' }}
        />
      </div>
    </td>
  </tr>

  <tr>
    <td>
      <div className="get_one_now_container" style={{ textAlign: 'center' }}>
        <a
          className="get_one_now_item"
          href="https://www.seeedstudio.com/respeaker-clip-wearable-ai-recorder.html"
          target="_blank"
        >
          <strong>
            <span>
              <font color={'FFFFFF'} size={'4'}>
                Consigue uno ahora 🖱️
              </font>
            </span>
          </strong>
        </a>
      </div>
    </td>
    <td>
      <div className="get_one_now_container" style={{ textAlign: 'center' }}>
        <a
          className="get_one_now_item"
          href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html"
          target="_blank"
        >
          <strong>
            <span>
              <font color={'FFFFFF'} size={'4'}>
                Consigue uno ahora 🖱️
              </font>
            </span>
          </strong>
        </a>
      </div>
    </td>
  </tr>
</table>

</div>

## Requisitos previos

:::tip
Antes de comenzar, lee primero las dos guías siguientes. Este proyecto se basa directamente en la configuración de reBot Arm y en el flujo de trabajo de streaming RTC de reSpeaker Clip, así que completarlas de antemano te ahorrará mucho tiempo de depuración.

- [reBot Arm B601-DM Getting Started](https://wiki.seeedstudio.com/es/rebot_b601_dm_getting_started/) — ensambla el brazo, restablece los ID de los motores, calibra y confirma que es accesible por serie.
- [Build Real-Time Audio Streaming with reSpeaker Clip RTC SDK](https://wiki.seeedstudio.com/es/respeaker_clip_rtc_streaming/) — empareja el Clip, establece una sesión RTC y decodifica el flujo de audio en vivo.
- Una **clave de API de Groq** — necesaria para el reconocimiento de voz a texto (Whisper) y la comprensión de intención de acción (LLM). Crea una gratis en [console.groq.com/keys](https://console.groq.com/keys). La añadirás al archivo `.env` durante la configuración.
:::

## Clonar el repositorio

```bash
git clone https://github.com/KasunThushara/reSpeaker-Clip-rebot-ARM.git
cd reSpeaker-Clip-rebot-ARM
```

### Estructura del proyecto

```text
rebotclip/            application package
  clip/               vendored reSpeaker Clip BLE SDK (+ BlueZ pairing agent)
  audio/              Opus decoder, WebRTC/energy VAD, WAV/PCM helpers
  voice/              Groq STT + LLM action-intent parser
  arm/                ArmWrapper (real/sim), coordinate map, action executors
  rtc_stream.py       Clip RTC live-stream orchestration (decode→VAD→STT)
  web.py              FastAPI web UI backend (scan/connect/RTC/VAD/arm)
  static/index.html   single-page web UI
  app.py              end-to-end glue (utterance → intent → arm)
  cli.py / __main__   `python -m rebotclip` (terminal or --web)
config/
  commands.yaml       action registry → drives the LLM prompt
  coordinates.yaml    named IK poses + joint macros (calibrate these!)
vendor/reBotArm_control_py/   vendored arm control lib (package+config+urdf)
data/demo_sample_packets.json bundled Clip RTC audio (offline testing)
examples/             runnable milestones (offline-friendly)
```

## Instalación

```bash
cd reSpeaker-Clip-rebot-ARM
python3.10 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env           # then paste your GROQ_API_KEY
```

:::tip
Si `python3.10 -m venv` falla (por ejemplo, `ensurepip is not available`), instala el paquete apt `python3.10-venv` o reutiliza cualquier entorno existente de Python 3.10 con `pip`.
:::

La capa del brazo necesita `pin` (pinocchio) + `motorbridge`, que se distribuyen como ruedas binarias. Si faltan (o falta el puerto serie), rebot-clip **cambia automáticamente a simulación**, de modo que la canalización de voz sigue funcionando en un portátil.

## Inicio rápido

```bash
# 1. Show the configured models/actions            (offline)
python -m rebotclip --models

# 2. Arm smoke test (simulated)                    (offline)
python examples/arm_smoke.py

# 3. VAD segmentation on bundled Clip audio        (offline)
python examples/clip_vad_test.py

# 4. Voice → intent on bundled audio (needs key)   (network)
python examples/voice_test.py

# 5. Action → coordinate sanity (offline)          (offline)
python examples/intent_pose_check.py
python examples/intent_pose_check.py --text "say hi"   # needs Groq network

# 6. BLE sanity with a real Clip (no Groq, no arm)
python examples/clip_ble_check.py                        # info only
python examples/clip_ble_check.py --rtc 10               # speak into the Clip

# 7. Full app: replay demo, simulated arm          (network)
python -m rebotclip --demo --sim

# 8. Live: real Clip + real arm
python -m rebotclip                 # auto-scan the Clip
python -m rebotclip --address AA:BB:CC:DD:EE:FF   # pin a device
python -m rebotclip --scan          # list nearby Clip devices
```

## Interfaz web (escanear · conectar · RTC + VAD)

Una pequeña aplicación web local para escanear Clips, conectar el que quieras e iniciar el flujo RTC con VAD en vivo, transcripciones y acciones detectadas.

```bash
source .venv/bin/activate
python -m rebotclip --web                      # http://127.0.0.1:8000
python -m rebotclip --web --host 0.0.0.0 --port 8000   # expose on your LAN
```

Luego abre **http://127.0.0.1:8000** (o `http://<pc-ip>:8000` si está enlazado a `0.0.0.0`) y:

1. **Scan devices** → elige un `Clip XXXX` del desplegable → **Connect**.
2. **Start RTC** → habla. Observa el medidor de VAD, la transcripción en vivo y la insignia de **acción** detectada + respuesta. (O marca **Demo (no Clip)** para reproducir audio incluido sin hardware).
3. Ajusta **VAD** en vivo: agresividad de WebRTC, umbral de energía, **min level** (puerta absoluta en dBFS), ganancia del micrófono, además de los presets **Normal/Strict** y **Recalibrate noise** (ejecútalo mientras la sala esté en silencio).
4. Conmutador de **modo del brazo** — `Off` (solo muestra la intención, por defecto), `Sim` (movimiento simulado, registrado) o `Real` (mueve el brazo físico).

Opciones de CLI: `--web --host --port`, `--no-classify` (solo transcribir, sin acciones LLM), `--execute off|sim|real` (modo inicial del brazo).

## Puesta en marcha del hardware

1. Conecta el Clip (BLE) y el puerto serie USB del brazo al PC.
2. Concédete acceso al puerto serie:
   ```bash
   sudo usermod -a -G dialout $USER    # then log out/in
   ls /dev/ttyACM*                     # should list the arm
   ```
3. **Calibra** `config/coordinates.yaml` (`reach_front`/`present` son marcadores de posición) y revisa las macros de articulaciones antes de usarlo manos libres.
4. Mantén despejada la zona de trabajo; Ctrl+C cierra la aplicación y devuelve el brazo a la postura segura `standby` (`AUTO_HOME_ON_EXIT=0` para omitirlo).

## Añadir posiciones personalizadas (mapa de coordenadas)

Todos los objetivos nombrados del brazo se encuentran en **`config/coordinates.yaml`** bajo la clave `poses:`. Hay dos tipos de pose: una pose de **espacio articular** (`kind: joints`) es una lista de los seis ángulos de las articulaciones del brazo en radianes `[J1, J2, J3, J4, J5, J6]`, y una pose de **IK** (`kind: ik`) es un objetivo del efector final `[x, y, z, roll, pitch, yaw]` en metros/radianes que se resuelve con cinemática inversa. El origen del sistema de referencia se sitúa en la superficie de montaje bajo J1, con `+x` apuntando hacia delante (alejándose de la base), `+y` hacia la izquierda y `+z` hacia arriba. Los objetivos articulares se recortan automáticamente a los límites del URDF, y si IK no puede alcanzar un objetivo el movimiento devuelve un error en lugar de moverse, por lo que un valor fuera de rango es seguro en lugar de dañino.

Para añadir una nueva posición, añade una entrada bajo `poses:` y elige el tipo que coincida con lo que mediste — por ejemplo, una pose de recogida en espacio articular y una pose de caída con IK:

```yaml
poses:
  pick_left:
    kind: joints
    joints: [0.6, -0.9, -0.8, 0.0, 0.2, 0.0]   # radians

  drop_front:
    kind: ik
    pose: [0.32, 0.10, 0.20, 0.0, -0.7, 0.0]   # x,y,z,roll,pitch,yaw
```

Puedes probar una pose sin ninguna intervención de voz ni LLM: `python examples/arm_smoke.py --pose drop_front` imprime (en simulación) o ejecuta (con `--real`) el movimiento, y `python examples/intent_pose_check.py` lista el mapa de poses y muestra las coordenadas ordenadas para cada acción. En Python, llámala directamente con `move_to_named_pose(arm, "drop_front")` desde `rebotclip.arm`.

Una pose nombrada solo se convierte en un **comando por voz** cuando también está registrada como una acción. Eso requiere dos pequeños cambios: añadir la acción a `config/commands.yaml` (nombre, descripción y frases de ejemplo — esto es lo que construye el prompt del LLM), y añadir un ejecutor en `rebotclip/arm/actions.py`. Por ejemplo, para hacer que "pick from the left" funcione, añade a `commands.yaml`:

```yaml
actions:
  pick_left:
    description: "move to the left pickup position"
    examples: ["pick from the left", "go to the left pickup", "grab on the left"]
```

luego añade un ejecutor y regístralo en `actions.py`:

```python
def _exec_pick_left(arm: ArmWrapper) -> str:
    return move_to_named_pose(arm, "pick_left")

EXECUTORS = {
    # ...existing entries...
    "pick_left": _exec_pick_left,
}
```

Reinicia la aplicación y el nuevo comando se entiende de inmediato — no se necesita ningún otro cambio porque el prompt de intención se genera a partir de `commands.yaml`.

Para la calibración, mueve el brazo a la postura que quieras (o lee los valores actuales con `state` / `end_state` desde `example/7_arm_ik_control.py` incluido como dependencia), toma nota de los números de las articulaciones o de IK y pégalos en `coordinates.yaml`. Mantén los objetivos dentro del espacio de trabajo alcanzable y alejados de la base y la mesa para evitar autocolisiones, prefiere primero valores moderados y prueba siempre una nueva pose con `--sim` antes de ejecutarla realmente con un espacio de trabajo despejado. El recorrido de la garra se configura por separado bajo `gripper:` (`0.0` cerrada, `-5.7` completamente abierta en la B601-DM), y los gestos relativos como el asentimiento/saludo usados por `greet` se encuentran bajo `macros:` como *deltas* de articulaciones aplicadas a la postura actual.


## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>