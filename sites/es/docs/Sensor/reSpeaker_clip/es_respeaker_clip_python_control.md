---
description: El SDK de reSpeaker Clip proporciona una interfaz de Python para comunicarse con dispositivos reSpeaker Clip mediante Bluetooth Low Energy (BLE) o WiFi, lo que permite el control de grabaciones, la sincronización de archivos, la configuración del dispositivo y más.
title: Control de reSpeaker Clip con Python
keywords:
  - reSpeaker clip
  - ble
  - wifi
  - python
  - sdk
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/c/h/chatgpt_image_2026_7_3_10_12_05.png
slug: /respeaker_clip_python_control
sku: 100020126
last_update:
  date: 07/01/2026
  author: Kasun Thushara
createdAt: '2026-07-01'
updatedAt: '2026-07-01'
url: https://wiki.seeedstudio.com/es/respeaker_clip_python_control/
---

## Introducción

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-banner.jpg" alt="pir" width={800} height="auto" /></p>

El SDK de reSpeaker Clip proporciona una interfaz de Python para comunicarse con dispositivos reSpeaker Clip mediante Bluetooth Low Energy (BLE) o WiFi.

Con este SDK puedes:

* Conectarte a un reSpeaker Clip
* Leer la información del dispositivo
* Configurar los parámetros de grabación
* Iniciar y detener grabaciones
* Añadir marcadores
* Sincronizar grabaciones
* Controlar el dispositivo usando Python
* Usar herramientas de línea de comandos listas para usar
* Acceder al dispositivo a través de una interfaz web

---

## Instalación

### Requisitos

* Python 3.10+
* Adaptador Bluetooth (modo BLE)
* Adaptador WiFi (modo WiFi)

### Clonar el repositorio

puedes encontrar el repositorio de GitHub [aquí](https://github.com/Seeed-Projects/respeaker_clip_python/tree/main)

```bash
git clone <repository-url>
```

### Instalar dependencias

```bash
#After Actiate the virtual environment
pip install -r requirements.txt
```

---

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

| Module        | Description              |
| ------------- | ------------------------ |
| client.py     | Comunicación con el dispositivo BLE |
| commands.py   | Comandos AT de alto nivel |
| transfer.py   | Sincronización de archivos |
| codec.py      | Codificación/decodificación de audio |
| wifi.py       | Transporte WiFi          |
| progress.py   | Visualización del progreso |
| utils.py      | Funciones auxiliares     |
| exceptions.py | Clases de excepciones    |

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

Terminal interactiva de comandos AT.

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

## Scripts de prueba 

| File | What it tests | Device? | Markers | Tests |
|------|---------------|---------|---------|-------|
| `test_basic.py` | Comandos AT básicos: VERSION, STATE, TIME, PAIR, comandos no válidos, manejo de errores, reinicio | Yes | — | 12 |
| `test_config.py` | Configuración: MODE, AUTODEL, BRIGHTNESS; verifica que los comandos no soportados (BITRATE, COMPLEXITY, CHUNKSIZE, NOISE, AGC, DEREVERB) generen `CommandError` | Yes | — | 30 |
| `test_recording.py` | Control de grabación: START/STOP, marcadores MARK, transiciones de estado (IDLE→RECORDING→IDLE), seguimiento de duración, ID de sesión | Yes | — | 13 |
| `test_storage.py` | Gestión de almacenamiento: LIST de sesiones/archivos, DELETE, persistencia de sesiones, precisión de tamaño, conteo de archivos | Yes | stress | 21 |
| `test_transfer.py` | Transferencia de archivos: descarga de sesiones, sincronización, callbacks de progreso, descargas concurrentes, cancelar/reanudar | Yes | slow, stress | 21 |
| `test_unit.py` | Pruebas unitarias (sin hardware): dataclasses, funciones de utilidad, excepciones, combinación de opus, inicialización del dispositivo | No | unit | 30 |

### Ejecutar las pruebas

```sh
# All tests (requires device paired over BLE)
pytest

# Specific file
pytest test_basic.py -v
pytest test_config.py -v
pytest test_recording.py -v
pytest test_storage.py -v
pytest test_transfer.py -v

# Unit tests only (no device needed)
pytest test_unit.py -v
pytest -m unit

# Device tests only (device required)
pytest -m "not unit"

# Exclude slow/stress tests
pytest -m "not stress and not slow"

# Quick smoke test
pytest test_unit.py -v
```


## Ejemplo completo

Este ejemplo demuestra un flujo de trabajo típico:

1. Conexión automática mediante BLE
2. Comprobar el nivel de batería
3. Establecer el modo de grabación en mejorado
4. Iniciar una grabación de 10 segundos
5. Añadir un marcador a mitad de la grabación
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

## Descripción general de fragmentos

### Conexión

#### Conectarse al dispositivo

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

El SDK detecta automáticamente los dispositivos cercanos cuyo nombre contiene `Clip`.

#### Conectarse a un dispositivo específico

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

> `WiFiSync` es **sincrónico** (sockets bloqueantes), no es necesario usar `async`/`await`.

---

### Manejo de errores

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

## Referencia de API

### ClipDevice

***Comunicación con el dispositivo BLE y gestión de la conexión.***

| Firma | Devuelve | Notas |
|-----------|---------|-------|
| `ClipDevice(address=None, name_filter="Clip", debug=False)` | `ClipDevice` | Detecta automáticamente si `address` es `None` |
| `await connect(timeout=10.0, sync_time=True, lazy_device_name=False)` | `None` | 3 reintentos; `sync_time` establece automáticamente el reloj del dispositivo |
| `await disconnect()` | `None` | Detiene todas las notificaciones BLE |
| `await send_command(command, timeout=10.0)` | `dict` | Envía comando AT, obtiene respuesta JSON |
| `is_connected` | `bool` | Propiedad: comprueba tanto `_connected` como `client.is_connected` |
| `device_name` | `str | None` | Propiedad: nombre del dispositivo si se ha detectado |
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
| `await start_recording(mode="normal")` | `str` | `mode`: normal, enhanced, stereo, merge. Devuelve el ID de sesión. |
| `await stop_recording()` | `Dict[str, Any]` | Resumen de la sesión; gestiona correctamente el caso de dispositivo-no-grabando |
| `await pause_recording()` | `bool` | |
| `await resume_recording()` | `bool` | |
| `await add_bookmark()` | `BookmarkInfo` | `.offset` en segundos desde el inicio de la sesión |
| `await get_bookmarks(session_id, fetch_all=True)` | `List[BookmarkInfo]` | Paginado, obtiene automáticamente todas las páginas |
| `await get_bookmarks_count(session_id)` | `int` | Conteo rápido sin detalles |
| **Sesiones** | | |
| `await list_sessions(page=1, per_page=10)` | `List[SessionInfo]` | `.id`, `.files`, `.size`, `.synced_files`, `.mode` |
| `await list_all_sessions(per_page=15)` | `List[SessionInfo]` | Pagina automáticamente todas |
| `await get_session_info(session_id)` | `SessionInfo` | Incluye el conteo de `synced_files` |
| `await list_session_files(session_id)` | `List[str]` | Nombres de archivo de todos los archivos de la sesión |
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
| **Helpers** | | |
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
| `await sync(session_id, output_dir, delete_after=False, continuous=False, force=False, progress_callback=None, session_info=None, start_file=None)` | `Dict[str, Any]` | La reanudación se detecta automáticamente; devuelve `file_count`, `total_size`, `files`, `merged_file` |
| `await sync_all(output_dir, delete_after=False, progress_callback=None)` | `List[Dict]` | Sincroniza todas las sesiones |
| `await download_session(session_id, output_dir, progress_callback=None, stop_recording=False, continuous=False, timeout=300.0, start_file=None, session_info=None)` | `Dict[str, Any]` | De nivel más bajo; también guarda `session.json` + `bookmarks.json` |
| `await cancel()` | `None` | Cancelación segura para hilos |

### WiFiDevice

***Transporte WiFi UDP (asíncrono), compatible con `ClipDevice.send_command`.***

| Firma | Devuelve | Notas |
|-----------|---------|-------|
| `WiFiDevice(host="192.168.4.1", port=8089, timeout=10.0)` | `WiFiDevice` | |
| `await connect(timeout=None)` | `None` | Inicia los hilos de trabajo de recepción y latido |
| `await disconnect()` | `None` | |
| `await send_command(command, timeout=None)` | `dict` | Respuesta AT analizada como JSON |
| `is_connected` | `bool` | Propiedad |
| `await __aenter__()` / `await __aexit__()` | — | Administrador de contexto asíncrono |

### WiFiSync

***Sincronización de archivos WiFi UDP (bloqueante/sincrónica — no se necesita async).***

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
