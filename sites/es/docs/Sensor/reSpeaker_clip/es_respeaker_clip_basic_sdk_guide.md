---
description: "Guía sistemática del reSpeaker Clip Basic SDK: transportes, protocolos de comunicación, máquina de estados de grabación, modelo de archivos, flujo de datos de extremo a extremo y el SDK de Python como implementación de referencia principal con herramientas CLI y Web."
title: Guía del reSpeaker Clip Basic SDK
keywords:
  - reSpeaker clip
  - python
  - sdk
  - ble
  - wifi
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/c/h/chatgpt_image_2026_7_3_10_12_05.png
slug: /respeaker_clip_basic_sdk_guide
sku: 100020126
last_update:
  date: 07/13/2026
  author: Ray He / Kasun Thushara
createdAt: '2026-07-13'
updatedAt: '2026-07-24'
url: https://wiki.seeedstudio.com/es/respeaker_clip_basic_sdk_guide/
---

# Guía del reSpeaker Clip Basic SDK

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-banner.jpg" alt="reSpeaker Clip" width={800} height="auto" /></p>

> Versión: coincide con el paquete `clip` `__version__ = 1.0.0`  
> Producto: grabadora portátil reSpeaker Clip

## Descripción general

La Guía del reSpeaker Clip Basic SDK explica cómo las aplicaciones del host se comunican con el dispositivo y lo controlan mediante BLE, Wi‑Fi, comandos AT, GATT y flujos de trabajo de transferencia de archivos. El SDK de Python se proporciona como la implementación de referencia principal, junto con herramientas CLI y basadas en Web.

Esta guía cubre:

- **Transportes**: canales de comunicación BLE y Wi‑Fi/UDP.
- **Protocolos de comunicación**: comandos AT, características GATT y enmarcado de transferencia de archivos.
- **Modelo de grabación**: modos de grabación, máquina de estados del dispositivo y formato de archivo.
- **Flujo de datos de extremo a extremo**: desde la conexión hasta la salida de audio descargada.
- **Implementaciones de referencia**: SDK de Python (paquete `clip`), herramientas CLI e interfaz Web.

El Basic SDK se centra en usar las capacidades actuales del dispositivo desde el lado del host. No incluye por sí mismo transcripción en la nube, resumen con IA, gestión de cuentas ni servicios de aplicaciones móviles. Estos flujos de trabajo deben construirse sobre los archivos de audio descargados o integrarse con otro servicio.

## Dónde encaja esta guía

Si eres nuevo en reSpeaker Clip, primero lee la [Guía de inicio rápido de reSpeaker Clip](/es/respeaker_clip).

La Guía de inicio rápido presenta el producto, los escenarios objetivo, las capacidades de hardware y los flujos de trabajo normales del usuario.

Esta guía se centra en el desarrollo del lado de la aplicación:

- comunicación con el dispositivo mediante BLE o Wi‑Fi;
- control de la grabación y configuración del dispositivo;
- gestión y descarga de sesiones de grabación;
- comprensión de los comandos AT, GATT y protocolos de transferencia de archivos;
- integración de estas capacidades mediante herramientas de Python, CLI o Web.

## Basic SDK y Firmware SDK

El reSpeaker Clip SDK se divide en dos capas:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_basic_firmware.png" alt="Basic SDK vs Firmware SDK" width={900} height="auto" /></p>

Los conceptos introducidos en esta guía (transportes, protocolos, máquina de estados, flujo de datos) se implementan en el lado del dispositivo mediante el firmware. La siguiente tabla asigna cada concepto del Basic SDK a su contraparte en el Firmware SDK:

| Concepto del Basic SDK | Contraparte en el Firmware SDK |
| --- | --- |
| Transporte BLE / Wi‑Fi | Implementación en el dispositivo del servicio BLE y UDP |
| Comando AT | Servidor AT y registro de comandos |
| GATT | Servicio y características GATT |
| Máquina de estados de grabación | Estados de grabación del dispositivo y manejo de eventos |
| Transferencia de archivos | Implementación de almacenamiento, fragmentación, CRC y sincronización |
| Flujo de datos de audio | Canalización PDM -> DSP -> Opus -> archivo |

Si tu objetivo es añadir nuevos comandos AT, cambiar servicios GATT, modificar la máquina de estados de grabación o alterar la cadena de procesamiento de audio, utiliza el Firmware SDK:

- [Primeros pasos con el reSpeaker Clip Firmware SDK](/es/respeaker_clip_firmware_quick_start/) cubre la configuración del entorno, compilación, flasheo y pruebas básicas.
- La [Guía de desarrollo de firmware de reSpeaker Clip](/es/respeaker_clip_firmware_development_guide/) explica la arquitectura del firmware, los detalles internos de los protocolos, las rutas de actualización y recuperación, la validación, la versión de producción y el desarrollo asistido por IA.
- [Personalización: añadir un comando AT personalizado](/es/respeaker_clip_customization_at_command/) guía el proceso de añadir y validar un nuevo comando AT.

## Instalación

### Requisitos

- Python 3.10+
- Adaptador Bluetooth (modo BLE)
- Adaptador Wi‑Fi (modo Wi‑Fi)

### Clonar el repositorio

Puedes encontrar el repositorio de GitHub [aquí](https://github.com/Seeed-Projects/respeaker_clip_python/tree/main).

```bash
git clone <repository-url>
```

### Instalar dependencias

Después de activar el entorno virtual, instala las dependencias requeridas:

```bash
pip install -r requirements.txt
```

## Estructura del proyecto

```
applications/clip/tests/
├── clip/                    SDK library (importable)
│   ├── __init__.py
│   ├── client.py            BLE connection + AT command transport
│   ├── commands.py          High-level AT command wrappers
│   ├── transfer.py          BLE file transfer + SessionSync
│   ├── codec.py             Opus/Ogg codec utilities
│   ├── wifi.py              WiFi UDP transport + WiFiSync
│   ├── progress.py          Progress bar helpers
│   ├── utils.py             File merge, formatting utilities
│   └── exceptions.py        Custom exception classes
├── tools/                   CLI & utility scripts
│   ├── clip-cli.py          Main CLI (BLE + WiFi + USB)
│   ├── clip-web.py          Web interface
│   ├── record.py            Recording control tool
│   ├── sync.py              File sync helper
│   ├── udp_sync.py          WiFi UDP sync
│   ├── udp_terminal.py      WiFi UDP terminal
│   ├── ble_terminal.py      BLE interactive terminal
│   ├── serial_terminal.py   USB CDC serial terminal
│   └── decode_opus.py       Opus decode utility
├── tests/                   Test suite
│   ├── conftest.py          Shared fixtures (device_session, mock_device)
│   ├── test_basic.py        AT commands: VERSION, STATE, TIME, PAIR, errors
│   ├── test_config.py       Configuration: MODE, AUTODEL, BRIGHTNESS
│   ├── test_recording.py    Recording: START/STOP, bookmarks, state transitions
│   ├── test_storage.py      Storage: LIST, DELETE, persistence, file count
│   ├── test_transfer.py     Transfer: download, sync, progress, concurrent
│   └── test_unit.py         Unit tests (no device required)
├── workspace/               Example workspace scripts
│   └── complete_example.py
├── requirements.txt
├── README.md           
└── pytest.ini
```

### Módulos del SDK

| Módulo        | Descripción              |
| ------------- | ------------------------ |
| client.py     | Comunicación con el dispositivo BLE |
| commands.py   | Comandos AT de alto nivel |
| transfer.py   | Sincronización de archivos |
| codec.py      | Codificación/decodificación de audio |
| wifi.py       | Transporte WiFi          |
| progress.py   | Visualización de progreso |
| utils.py      | Funciones auxiliares     |
| exceptions.py | Clases de excepciones    |

---

## Capacidades del SDK

El SDK de Python admite los siguientes flujos de trabajo:

- **Configurar el dispositivo**: modo de grabación, bitrate, complejidad, política de borrado automático, brillo del OLED, nombre del dispositivo BLE y ajustes relacionados.
- **Controlar la grabación**: iniciar, detener, pausar, reanudar y añadir marcadores.
- **Gestionar sesiones**: listar, consultar, eliminar, depurar y formatear la tarjeta SD.
- **Descargar archivos**: transferir grabaciones mediante BLE o Wi‑Fi/UDP, con soporte de reanudación.
- **Convertir audio**: volver a encapsular los datos Opus sin procesar del dispositivo en OGG/Opus, o decodificar a WAV mono de 16 kHz mediante una ruta de decodificación Opus.
- **Leer estado y eventos**: nivel de batería, estado de carga, estado del dispositivo, cambios en la máquina de estados y callbacks de visualización de audio en tiempo real.

La elección del transporte es importante:

- Usa BLE mediante `ClipDevice` para configuración portátil, control de grabación y descargas pequeñas.
- Usa Wi‑Fi/UDP mediante `WiFiDevice` o `WiFiSync` para descargas masivas. Es más rápido y estable para sesiones de grabación grandes.
- El control de grabación es solo por BLE. La descarga de archivos funciona tanto por BLE como por Wi‑Fi.

## Conceptos clave

Esta sección describe la vista del lado del host utilizada por el Basic SDK. Para los
detalles de implementación del lado del dispositivo, consulta las secciones correspondientes de la Guía de desarrollo de firmware:
sections:

| Tema del Basic SDK | Explicación detallada del firmware |
| --- | --- |
| Transportes | [Communication Protocol](/es/respeaker_clip_firmware_development_guide/#communication-protocol) |
| Modos de grabación | [Recording Modes](/es/respeaker_clip_firmware_development_guide/#recording-modes) |
| Estado del dispositivo | [Event and State Model](/es/respeaker_clip_firmware_development_guide/#event-and-state-model) |
| Formato de archivo y sesiones | [Session, Chunking, and Storage Model](/es/respeaker_clip_firmware_development_guide/#session-chunking-and-storage-model) |
| Protocolo de comandos AT | [AT Command Grammar](/es/respeaker_clip_firmware_development_guide/#at-command-grammar), [JSON Response Contract](/es/respeaker_clip_firmware_development_guide/#json-response-contract), y [Registered Command Reference](/es/respeaker_clip_firmware_development_guide/#registered-command-reference) |
| Características GATT | [BLE GATT Service](/es/respeaker_clip_firmware_development_guide/#ble-gatt-service) |
| Transferencia de archivos y reanudación | [UDP Frame Types](/es/respeaker_clip_firmware_development_guide/#udp-frame-types) y [Session and File Addressing](/es/respeaker_clip_firmware_development_guide/#session-and-file-addressing) |
| Flujo de datos de extremo a extremo | [System Architecture](/es/respeaker_clip_firmware_development_guide/#system-architecture) y [Audio Pipeline](/es/respeaker_clip_firmware_development_guide/#audio-pipeline) |

### Transportes

| Transporte | Clase | Caso de uso | Notas |
| --- | --- | --- | --- |
| BLE | `ClipDevice` | Configuración, control de grabación, descarga de sesiones | Portátil y requerido para el control de grabación. La descarga masiva puede ser más lenta y puede perder notificaciones bajo carga. |
| Wi‑Fi/UDP | `WiFiDevice` / `WiFiSync` | Descarga masiva de sesiones | Más rápido y estable para archivos grandes. Requiere habilitar Wi‑Fi en el dispositivo y unirse a `ClipAP_XXXX`. |

### Modos de grabación

| Modo | Descripción |
| --- | --- |
| `normal` | Ruta de grabación estándar sin supresión de ruido / desreverberación SpeexDSP. El AGC del dispositivo, el filtro pasaaltos y el limitador pueden seguir habilitados por el firmware. |
| `enhanced` | Ruta mejorada con supresión de ruido y desreverberación SpeexDSP habilitadas. |

`set_mode()` solo acepta `normal` y `enhanced`. `start_recording()` también acepta los alias `stereo` y `merge`; `stereo` se asigna a `normal`, y `merge` se asigna a `enhanced`.

Ambos modos generan por defecto Opus mono a 16 kHz.

### Estado del dispositivo

Una grabación se representa como una sesión. Un ID de sesión suele ser una cadena con formato de marca de tiempo como `YYYYMMDDHHMMSS`.

```text
IDLE --start_recording--> RECORDING --stop_recording--> IDLE
                              |
                              | pause / resume
                              v
                            PAUSED
```

Los estados comunes del dispositivo incluyen `IDLE`, `RECORDING`, `TRANSMITTING`, `PAUSED` y `ERROR`.

Al conectarse, el SDK puede sincronizar el reloj del dispositivo mediante `AT+TIME`. La zona horaria del dispositivo aún puede diferir de la zona horaria del host.

### Formato de archivo

El dispositivo almacena los datos de grabación como tramas Opus sin procesar, no como un contenedor OGG. El formato sin procesar es una secuencia de tramas Opus con prefijo de longitud:

```text
[2-byte little-endian length][opus frame][2-byte little-endian length][opus frame]...
```

Usa `convert_to_ogg_opus()` para escribir un archivo `.ogg` válido antes de pasar la grabación a herramientas que esperan entrada OGG/Opus. La decodificación WAV requiere una ruta de decodificador Opus como `opuslib`.

### Protocolo de comandos AT

- El SDK escribe una cadena AT en UTF-8, por ejemplo `AT+MODE=enhanced`, en la característica CMD.
- Las respuestas son notificaciones JSON en `RESP_SEND`, por ejemplo `{"ok":true,"data":{...}}`.
- Los eventos no solicitados, como cambios de estado, tienen el formato `{"event":"state","state":"RECORDING",...}` y se envían a través de `event_callback`.

### Características GATT

| Característica | UUID | Propiedades | Propósito |
| --- | --- | --- | --- |
| Servicio | `6E400001-B5A3-F393-E0A9-E50E24DCCA9E` | Servicio primario | Servicio de comunicación BLE personalizado |
| CMD | `6E400002-B5A3-F393-E0A9-E50E24DCCA9E` | Escritura sin respuesta (cifrada) | Central → dispositivo: escribir cadenas de comandos AT |
| RESP_SEND | `6E400003-B5A3-F393-E0A9-E50E24DCCA9E` | Notificación (CCC cifrado) | Dispositivo → central: respuestas JSON y notificaciones de eventos |
| FILE_DATA | `6E400004-B5A3-F393-E0A9-E50E24DCCA9E` | Notificación (CCC cifrado) | Dispositivo → central: notificaciones de tramas de transferencia de archivos binarias |
| AUDIO_VIS | `6E400005-B5A3-F393-E0A9-E50E24DCCA9E` | Notificación (CCC cifrado) | Dispositivo → central: notificaciones de visualización de audio en tiempo real |

### Protocolo de transferencia de archivos

Los datos de archivo se entregan como tramas binarias en `FILE_DATA`.

| Trama | Tipo | Diseño |
| --- | --- | --- |
| `FILE_START` | `0x10` | `type(1) + fn_len(1) + filename(N) + file_size(4, LE)` |
| `DATA` | `0x01` | `type(1) + seq(2, LE) + len(2, LE) + data(N)` |
| `FILE_END` | `0x11` | `type(1) + crc32(4, LE)` |
| `TRANSFER_DONE` | `0x12` | `type(1) + sid_len(1) + session_id(N) + file_count(4, LE)` |

Cada archivo se verifica con CRC32. Solo los archivos verificados deben tratarse como guardados correctamente.

### Reanudar

`SessionSync.sync()` es consciente de la reanudación. Puede detectar archivos `.opus` locales existentes, consultar el contador de archivos sincronizados del dispositivo, calcular `start_file` y continuar una descarga anterior. Usa `force=True` para empezar desde cero.

### Flujo de datos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_data_flow.png" alt="Flujo de datos de reSpeaker Clip" width={900} height="auto" /></p>

## Ejemplo completo

Este ejemplo muestra un flujo de trabajo típico:

1. Conexión automática vía BLE
2. Comprobar el nivel de batería
3. Establecer el modo de grabación en mejorado
4. Iniciar una grabación de 10 segundos
5. Añadir un marcador en mitad de la grabación
6. Detener la grabación
7. Sincronizar los archivos de la sesión a `recordings/<session_id>/`

```python
"""
Complete workflow: connect → config → record → bookmark → stop → sync

Usage:
    python workspace/complete_example.py
"""

import asyncio
import sys
from pathlib import Path

# Ensure the parent 'tests/' directory (which contains clip/) is on sys.path
sys.path.insert(0, str(Path(__file__).parent.parent))

from clip import ClipDevice, ClipCommands, SessionSync
from clip import ConnectionError, TimeoutError, CommandError


async def main():
    try:
        async with ClipDevice() as device:
            cmds = ClipCommands(device)

            # 1. Check battery and current settings
            state = await cmds.get_state()
            print(f"Battery: {state.battery}%, Mode: {state.mode}")

            # 2. Configure (only MODE, AUTODEL, BRIGHTNESS work on current firmware)
            await cmds.set_config_dict({"mode": "enhanced"})

            # 3. Start recording in enhanced mode
            session_id = await cmds.start_recording("enhanced")
            print(f"Recording started: {session_id}")

            # 4. Wait and add a bookmark
            await asyncio.sleep(5)
            bookmark = await cmds.add_bookmark()
            print(f"Bookmark added at {bookmark.offset}s")

            # 5. Let it record more, then stop
            await asyncio.sleep(5)
            await cmds.stop_recording()
            print("Recording stopped")

            # 6. Sync session via BLE
            sync = SessionSync(device)
            result = await sync.sync(session_id, Path("recordings"))
            print(
                f"Downloaded {result['file_count']} file(s)"
                f" → recordings/{session_id}/"
            )

    except ConnectionError:
        print("Could not find device. Is it powered on and paired?")
    except TimeoutError:
        print("Device did not respond. Try restarting the Clip.")
    except CommandError as e:
        print(f"Command error: {e.message}")


if __name__ == "__main__":
    asyncio.run(main())

```

**Salida esperada**

```
Battery: 85%, Mode: normal
Recording started: 20260710_144500
Bookmark added at 5s
Recording stopped
Downloaded 2 file(s) → recordings/20260710_144500/
```

## Resumen de fragmentos

### Conexión

#### Conectar al dispositivo

```python
import asyncio
from clip import ClipDevice, ClipCommands

async def main():
    async with ClipDevice() as device:
        cmds = ClipCommands(device)
        state = await cmds.get_state()
        print(state.battery)

asyncio.run(main())
```

El SDK descubre automáticamente los dispositivos cercanos cuyo nombre contiene `Clip`.

#### Conectar a un dispositivo específico

```python
import asyncio
from clip import ClipDevice

async def main():
    device = ClipDevice(address="AA:BB:CC:DD:EE:FF")
    await device.connect()
    # ... use device ...
    await device.disconnect()

asyncio.run(main())
```

---

### Información del dispositivo

#### Leer versión de firmware

```python
version = await cmds.get_version()
print(version.firmware)   # e.g. "v1.0.0"
print(version.hardware)   # e.g. "Clip v0.0.5"
```

#### Leer estado del dispositivo

```python
state = await cmds.get_state()
print(state.state)      # IDLE, RECORDING, TRANSMITTING, PAUSED, ERROR
print(state.battery)    # 0-100
print(state.mode)       # normal, enhanced
print(state.bitrate)    # Opus bitrate in bps
```

#### Leer / establecer hora del dispositivo

```python
import time

timestamp = await cmds.get_time()          # returns int (Unix timestamp)
await cmds.set_time(int(time.time()))      # returns True
```

---

### Grabación de audio

#### Iniciar / detener grabación

```python
session_id = await cmds.start_recording("normal")   # returns str (session ID)
# ... record ...
await cmds.stop_recording()                          # returns dict with session info
```

> `"normal"` es mono, `"enhanced"` habilita el preprocesamiento DSP (supresión de ruido, AGC).

#### Pausar / reanudar grabación

```python
await cmds.pause_recording()
await cmds.resume_recording()
```

#### Añadir marcador (durante la grabación)

```python
bookmark = await cmds.add_bookmark()
print(bookmark.offset)   # seconds from recording start
```

#### Ejemplo completo de grabación

```python
session_id = await cmds.start_recording("normal")
await asyncio.sleep(10)
await cmds.stop_recording()
```

---

### Sincronización de archivos

#### Listar sesiones

```python
sessions = await cmds.list_sessions()
for s in sessions:
    print(s.id, s.files, s.size)
```

#### Sincronizar una sesión (BLE)

```python
from pathlib import Path
from clip import SessionSync

session_id = "20260326120000"      # from cmds.list_sessions()
sync = SessionSync(device)

await sync.sync(session_id, Path("recordings"))
```

#### Reanudar descarga interrumpida

```python
await sync.sync(
    session_id,
    Path("recordings"),
    start_file="0015.opus"          # pick up where you left off
)
```

#### Mantener archivos en el dispositivo después de la sincronización

```python
await sync.sync(
    session_id,
    Path("recordings"),
    delete_after=False               # default: False (keep on device)
)
```

#### Sincronizar todas las sesiones

```python
results = await sync.sync_all(Path("recordings"))
```

---

### Gestión de configuración


#### Establecer parámetros (comandos de trabajo)

```python
await cmds.set_mode("enhanced")          # normal | enhanced
await cmds.set_auto_delete(7)            # days (0-30), pass -1 to disable
await cmds.set_brightness(128)           # 0-255
```

#### Leer parámetros

```python
mode        = await cmds.get_mode()          # returns str
auto_delete = await cmds.get_auto_delete()   # returns bool
brightness  = await cmds.get_brightness()    # returns int
```

#### Configuración por lotes

```python
await cmds.set_config_dict({
    "mode":         "enhanced",
    "auto_delete":  7,
    "brightness":   128,
})
```

---

### Comunicación WiFi

El Clip puede comunicarse por WiFi UDP cuando su AP está habilitado.

| Parámetro | Valor           |
|-----------|-----------------|
| SSID      | `ClipAP_XXXX`   |
| Password  | `12345678` (predeterminado) |
| IP        | `192.168.4.1`   |
| Port      | `8089`          |

#### Conectar y enviar comandos AT

```python
from clip import WiFiDevice

async def main():
    async with WiFiDevice("192.168.4.1", 8089) as device:
        resp = await device.send_command("AT+GSTAT")
        print(resp)

asyncio.run(main())
```

#### Sincronizar una sesión por WiFi (API bloqueante)

```python
from pathlib import Path
from clip import WiFiSync

sync = WiFiSync("192.168.4.1", 8089)
sync.connect()
sync.download_session(session_id, Path("recordings"))
sync.disconnect()
```

> `WiFiSync` es **sincrónico** (sockets bloqueantes): no se necesita `async`/`await`.

---

### Gestión de errores

```python
from clip import ConnectionError, TimeoutError, CommandError

try:
    async with ClipDevice() as device:
        cmds = ClipCommands(device)
        version = await cmds.get_version()
except ConnectionError:
    print("Device not found or could not connect")
except TimeoutError:
    print("Device did not respond in time")
except CommandError as e:
    print(f"Command failed: {e.message}")
```


---

## Herramientas de línea de comandos

El SDK incluye varias utilidades listas para usar.

### clip-cli - CLI unificada

#### BLE (predeterminado)

CLI de propósito general.

```bash
tools/clip-cli.py status
```

Salida esperada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/status.jpg" alt="Conexión del dispositivo" width={800} height="auto"/></p>

```bash
tools/clip-cli.py version
```
```bash
tools/clip-cli.py list
```

Salida esperada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/list.png" alt="Conexión del dispositivo" width={800} height="auto"/></p>

```bash
tools/clip-cli.py record --duration 60

```
Salida esperada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/recording.jpg" alt="Conexión del dispositivo" width={800} height="auto"/></p>

```bash
tools/clip-cli.py sync --session 20260326120000
```
Salida esperada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/sync.jpg" alt="Conexión del dispositivo" width={800} height="auto"/></p>

```bash
tools/clip-cli.py sync --session 20260326120000 --delete
```
Salida esperada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/delete.jpg" alt="Conexión del dispositivo" width={800} height="auto"/></p>

```bash
tools/clip-cli.py config get
```
Salida esperada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/get_set.png" alt="Conexión del dispositivo" width={800} height="auto"/></p>

```bash
tools/clip-cli.py bookmark
```

```bash
tools/clip-cli.py terminal
```

Salida esperada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/terminal.png" alt="Conexión del dispositivo" width={800} height="auto"/></p>

#### WiFi

```bash
 tools/clip-cli.py wifi on
```
Salida esperada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/wifi-on.png" alt="Conexión del dispositivo" width={800} height="auto"/></p>


```bash
tools/clip-cli.py --transport wifi status
```
Salida esperada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/wifi-status.png" alt="Conexión del dispositivo" width={800} height="auto"/></p>



```bash
tools/clip-cli.py  wifi off
```
Salida esperada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/wifi-off.png" alt="Conexión del dispositivo" width={800} height="auto"/></p>




### record.py

Graba audio automáticamente y lo sincroniza.

```bash
python tools/record.py

python tools/record.py --duration 60

python tools/record.py --mode enhanced
```
Salida esperada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/recording.png" alt="Conexión del dispositivo" width={800} height="auto"/></p>

### sync.py

Sincroniza grabaciones mediante BLE.

```bash
python tools/sync.py

python tools/sync.py --all-sessions
```
Salida esperada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/sync_tools.png" alt="Conexión del dispositivo" width={800} height="auto"/></p>

### udp_sync.py

Sincroniza grabaciones mediante WiFi.

```bash
python tools/udp_sync.py

python tools/udp_sync.py --session 20260326120000
```

Salida esperada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/udp_sync.png" alt="Conexión del dispositivo" width={800} height="auto"/></p>

### ble_terminal.py

Terminal interactivo de comandos AT.

```bash
python tools/ble_terminal.py
```
Salida esperada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/ble_terminal.png" alt="Conexión del dispositivo" width={800} height="auto"/></p>

### decode_opus.py

Convierte grabaciones Opus a WAV.

```bash
python tools/decode_opus.py <input_file.opus> <output_file.wav>
```

---

## Interfaz web

Inicia la aplicación web integrada.

Modo BLE:

```bash
python tools/clip-web.py
```

Modo Wi-Fi:

```bash
python tools/clip-web.py --transport wifi
```

Luego abre:

```text
http://localhost:5000
```

### Funciones

- Estado del dispositivo
- Control de grabación
- Gestión de sesiones
- Visualización de audio
- Editor de configuración
- Progreso de sincronización

### REST API

| Método | Endpoint |
| --- | --- |
| GET | `/api/status` |
| GET | `/api/version` |
| GET | `/api/sessions` |
| POST | `/api/record/start` |
| POST | `/api/record/stop` |
| POST | `/api/record/bookmark` |
| POST | `/api/sync/{id}` |
| DELETE | `/api/sessions/{id}` |
| GET | `/api/config` |
| PUT | `/api/config` |
| WS | `/ws` |

## Módulos principales

| Módulo | Propósito principal |
| --- | --- |
| `ClipDevice` | Conexión BLE, emparejamiento, transporte de comandos AT, notificaciones y progreso de transferencia |
| `ClipCommands` | Envoltura de alto nivel para comandos AT del dispositivo |
| `FileTransfer` / `SessionSync` | Descarga de sesiones BLE y sincronización con reanudación |
| `WiFiDevice` / `WiFiSync` | Flujo de trabajo de descarga Wi-Fi/UDP para transferencias más grandes |
| `codec` | Análisis de tramas Opus sin procesar y escritura OGG/Opus |
| `utils` | Análisis de ID de sesión, ayudantes de formato, carga de configuración, informes de progreso y utilidades de archivos |
| `exceptions` | Clases de excepciones específicas del SDK |

## Referencia de API

### ClipDevice

***Comunicación con el dispositivo BLE y gestión de la conexión.***

| Firma | Devuelve | Notas |
|-----------|---------|-------|
| `ClipDevice(address=None, name_filter="Clip", debug=False)` | `ClipDevice` | Descubre automáticamente si `address` es `None` |
| `await connect(timeout=10.0, sync_time=True, lazy_device_name=False)` | `None` | 3 reintentos; sync_time ajusta automáticamente el reloj del dispositivo |
| `await disconnect()` | `None` | Detiene todas las notificaciones BLE |
| `await send_command(command, timeout=10.0)` | `dict` | Envía comando AT, obtiene respuesta JSON |
| `is_connected` | `bool` | Propiedad: comprueba tanto `_connected` como `client.is_connected` |
| `device_name` | `str | None` | Propiedad: nombre del dispositivo si se descubre |
| `await __aenter__()` / `await __aexit__()` | `ClipDevice` / `None` | Administrador de contexto asíncrono |

### ClipCommands

***Interfaz de comandos AT de alto nivel.***

| Firma | Devuelve | Notas |
|-----------|---------|-------|
| `await get_version()` | `VersionInfo` | `.firmware`, `.hardware`, `.sdk`, `.build` |
| `await get_state()` | `DeviceState` | `.state`, `.battery`, `.mode`, `.bitrate`, `.charging`, `.free_space` |
| `await get_time()` | `int` | Marca de tiempo Unix |
| `await set_time(timestamp)` | `bool` | Convierte a `AT+TIME=<ts>` |
| `await get_pairing_status()` | `Dict[str, Any]` | Estado de emparejamiento BLE + dirección del par |
| `await reboot()` | `None` | Reinicio del dispositivo |
| **Grabación** | | |
| `await start_recording(mode="normal")` | `str` | `mode`: normal, enhanced, stereo, merge. Devuelve ID de sesión. |
| `await stop_recording()` | `Dict[str, Any]` | Resumen de la sesión; gestiona con gracia el caso de dispositivo-no-grabando |
| `await pause_recording()` | `bool` | |
| `await resume_recording()` | `bool` | |
| `await add_bookmark()` | `BookmarkInfo` | `.offset` en segundos desde el inicio de la sesión |
| `await get_bookmarks(session_id, fetch_all=True)` | `List[BookmarkInfo]` | Paginado, obtiene automáticamente todas las páginas |
| `await get_bookmarks_count(session_id)` | `int` | Conteo rápido sin detalles |
| **Sesiones** | | |
| `await list_sessions(page=1, per_page=10)` | `List[SessionInfo]` | `.id`, `.files`, `.size`, `.synced_files`, `.mode` |
| `await list_all_sessions(per_page=15)` | `List[SessionInfo]` | Pagina automáticamente todo |
| `await get_session_info(session_id)` | `SessionInfo` | Incluye conteo de `synced_files` |
| `await list_session_files(session_id)` | `List[str]` | Nombres de archivo para todos los archivos de la sesión |
| `await delete_session(session_id)` | `bool` | |
| `await purge_all_sessions()` | `bool` | |
| `await format_sd_card()` | `bool` | |
| **Configuración** | | |
| `await get_mode()` | `str` | |
| `await set_mode(mode)` | `bool` | Solo `"normal"` o `"enhanced"` |
| `await get_auto_delete()` | `bool` | |
| `await set_auto_delete(days)` | `bool` | `days`: 0–30, pasar `-1` para desactivar |
| `await get_brightness()` | `int` | 0–255 |
| `await set_brightness(value)` | `bool` | 0–255 |
| `await get_device_name()` | `str` | Nombre del dispositivo BLE |
| `await set_device_name(name)` | `bool` | Máx. 15 caracteres |
| `await get_config_dict()` | `Dict[str, Any]` | Todos los ajustes; las claves no compatibles devuelven `None` |
| `await set_config_dict(config, ignore_errors=True)` | `None` | Omite valores `None`; descarta silenciosamente claves no compatibles |
| `get/set_bitrate()` | — | **Firmware: no compatible**: lanza `CommandError` |
| `get/set_complexity()` | — | **Firmware: no compatible**: lanza `CommandError` |
| `get/set_chunk_size()` | — | **Firmware: no compatible**: lanza `CommandError` |
| `get/set_noise_suppression()` | — | **Firmware: no compatible**: lanza `CommandError` |
| `get/set_agc()` | — | **Firmware: no compatible**: lanza `CommandError` |
| `get/set_dereverb()` | — | **Firmware: no compatible**: lanza `CommandError` |
| **Control de transferencia** | | |
| `await get_progress()` | `Dict[str, Any]` | Progreso de descarga |
| `await pause_transfer()` | `bool` | |
| `await resume_transfer()` | `bool` | |
| `await cancel_transfer()` | `bool` | |
| **WiFi / USB** | | |
| `await wifi_on()` | `bool` | Tiempo de espera de más de 20 segundos para la inicialización de nRF7002 |
| `await wifi_off()` | `bool` | |
| `await get_wifi_status()` | `Dict[str, Any]` | `.running`, `.ssid`, `.clients` |
| `await usb_on()` | `bool` | CDC + MSC |
| `await usb_off()` | `bool` | |
| `await get_usb_status()` | `bool` | |
| **Ayudantes** | | |
| `await ensure_idle()` | `None` | Detiene la grabación si es necesario; reintenta hasta 5 veces |
| `await wait_for_state(target, timeout=10.0)` | `bool` | Sondea hasta que el estado coincida |
| `await wait_for_recording_to_start(timeout=5.0)` | `bool` | |
| `await wait_for_recording_to_stop(timeout=5.0)` | `bool` | |
| `await get_battery_status()` | `BatteryStatus` | `.percent`, `.charging`, `.voltage` |

### SessionSync

***Sincronización de archivos por BLE con soporte de reanudación.***

| Firma | Devuelve | Notas |
|-----------|---------|-------|
| `SessionSync(device, commands=None)` | `SessionSync` | Extiende `FileTransfer` |
| `await sync(session_id, output_dir, delete_after=False, continuous=False, force=False, progress_callback=None, session_info=None, start_file=None)` | `Dict[str, Any]` | Reanudación detectada automáticamente; devuelve `file_count`, `total_size`, `files`, `merged_file` |
| `await sync_all(output_dir, delete_after=False, progress_callback=None)` | `List[Dict]` | Sincroniza todas las sesiones |
| `await download_session(session_id, output_dir, progress_callback=None, stop_recording=False, continuous=False, timeout=300.0, start_file=None, session_info=None)` | `Dict[str, Any]` | De nivel más bajo; también guarda `session.json` + `bookmarks.json` |
| `await cancel()` | `None` | Cancelación segura para hilos |

### WiFiDevice

***Transporte UDP por WiFi (asíncrono), compatible con `ClipDevice.send_command`.***

| Firma | Devuelve | Notas |
|-----------|---------|-------|
| `WiFiDevice(host="192.168.4.1", port=8089, timeout=10.0)` | `WiFiDevice` | |
| `await connect(timeout=None)` | `None` | Inicia los hilos de trabajo de recepción y latido (heartbeat) |
| `await disconnect()` | `None` | |
| `await send_command(command, timeout=None)` | `dict` | Respuesta AT analizada como JSON |
| `is_connected` | `bool` | Propiedad |
| `await __aenter__()` / `await __aexit__()` | — | Administrador de contexto asíncrono |

### WiFiSync

***Sincronización de archivos UDP por WiFi (bloqueante/sincrónica — no se necesita async).***

| Firma | Devuelve | Notas |
|-----------|---------|-------|
| `WiFiSync(host="192.168.4.1", port=8089, timeout=120.0)` | `WiFiSync` | |
| `connect()` | `bool` | Bloqueante |
| `disconnect()` | `None` | |
| `download_session(session_id, output_dir, convert_ogg=True, start_file=None, delete_after=False, progress_callback=None, cancel_after=None)` | `bool` | Verificado por CRC; progreso con tqdm; presiona 'c' para cancelar |
| `list_sessions()` | `List[dict]` | Paginado |
| `delete_session(session_id)` | `bool` | |

### Excepciones

| Excepción | Base | Descripción |
|-----------|------|-------------|
| `ClipError` | `Exception` | Base para todos los errores de la biblioteca |
| `ConnectionError` | `ClipError` | Fallo de conexión BLE o WiFi |
| `DisconnectedError` | `ClipError` | Desconexión inesperada |
| `CommandError` | `ClipError` | El comando AT devolvió un error; atributo `.command` |
| `TransferError` | `ClipError` | Falló la operación de transferencia de archivos |
| `TimeoutError` | `ClipError` | El comando/transferencia superó el tiempo de espera |
| `ResponseError` | `ClipError` | Respuesta no válida o inesperada |
| `StateError` | `ClipError` | Dispositivo en un estado incorrecto para la operación |



---

## Solución de problemas

**P1: Los comandos se bloquean o superan el tiempo de espera después de conectar.**  
La característica de comandos requiere un enlace BLE cifrado. El SDK puede iniciar el emparejamiento, pero el sistema operativo puede mostrar un cuadro de diálogo de emparejamiento o autorización de Bluetooth. Confírmalo manualmente. Si la conexión sigue atascada, elimina los enlaces obsoletos y vuelve a conectar.

**P2: La descarga informa una discrepancia de CRC o cero archivos.**  
Las pilas BLE pueden ocasionalmente entregar notificaciones duplicadas o perder tramas bajo carga. Desconecta, vuelve a conectar e inténtalo de nuevo. Usa `SessionSync` para que la transferencia pueda reanudarse cuando sea posible.

**P3: La descarga es lenta o se interrumpe a mitad de camino.**  
Usa `SessionSync` para una transferencia BLE con reconocimiento de reanudación. Para grandes volúmenes de grabación, usa la descarga por Wi‑Fi mediante `WiFiSync`: habilita Wi‑Fi en el Clip, únete a `ClipAP_XXXX` y luego descarga por Wi‑Fi.

**P4: `delete_after=True` eliminó una sesión que no se descargó completamente.**  
Usa el patrón más seguro: `sync(force=True, delete_after=False)`, verifica que el `merged_file` local exista y no esté vacío y luego llama manualmente a `cmds.delete_session(session_id)`.

**P5: `AT+NOISE`, `AT+DEREVERB` o `AT+AGC` devuelve `Unknown command`.**  
El firmware actual puede no registrar esos comandos opcionales. El SDK mantiene envoltorios para versiones de firmware compatibles. Si restauras una configuración, `set_config_dict(..., ignore_errors=True)` puede omitir valores no compatibles.

**P6: `bleak` lanza errores como `'BleakClient' object has no attribute 'get_services'` o `'get_mtu'`.**  
Las API de `bleak` difieren entre versiones. Usa el conjunto de dependencias probado por el SDK después de que se publique el paquete de instalación.

**P7: La grabación está en silencio o la calidad es mala.**  
Comprueba la distancia y orientación del micrófono, el nivel de batería y el modo de grabación. El modo `enhanced` puede suprimir el ruido de forma más agresiva, lo que puede sobreprocesar un habla muy limpia.

**P8: La marca de tiempo del ID de sesión no coincide con la hora local.**  
El reloj o la zona horaria del dispositivo pueden diferir del host. El SDK puede sincronizar la hora al conectar. También puedes llamar a `await cmds.set_time(int(time.time()))`.

**P9: ¿Cómo convierto Opus a WAV para STT o ML?**  
Usa `convert_to_ogg_opus()` para salida OGG/Opus. Para WAV, decodifica el flujo Opus sin procesar con un decodificador Opus como `opuslib`.

**P10: Los registros se inundan con eventos de visualización de audio durante la grabación.**  
Las notificaciones `AUDIO_VIS` se disparan con frecuencia. Solo registra la devolución de llamada de visualización de audio cuando la necesites y mantén la devolución de llamada ligera.

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
