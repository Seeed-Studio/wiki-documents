---
description: El SDK de reSpeaker Clip proporciona una interfaz de Python para comunicarse con dispositivos reSpeaker Clip mediante Bluetooth Low Energy (BLE) o WiFi, lo que permite el control de grabación, la sincronización de archivos, la configuración del dispositivo y más.
title: Control de reSpeaker Clip con Python
keywords:
  - reSpeaker clip
  - ble
  - wifi
  - python
  - sdk
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-banner.jpg
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
* Leer información del dispositivo
* Configurar parámetros de grabación
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

```bash
git clone <repository-url>

cd applications/clip/tests
```

### Instalar dependencias

```bash
pip install -r requirements.txt
```

---

## Estructura del proyecto

```
applications/clip/tests/

├── clip/
│   ├── client.py
│   ├── commands.py
│   ├── transfer.py
│   ├── codec.py
│   ├── wifi.py
│   ├── progress.py
│   ├── utils.py
│   └── exceptions.py

├── tools/
│   ├── clip-cli.py
│   ├── clip-web.py
│   ├── record.py
│   ├── sync.py
│   ├── udp_sync.py
│   ├── ble_terminal.py
│   └── decode_opus.py

├── requirements.txt
├── README.md
└── EXAMPLES.md
```

### Módulos del SDK

| Módulo       | Descripción              |
| ------------- | ------------------------ |
| client.py     | Comunicación con el dispositivo BLE |
| commands.py   | Comandos AT de alto nivel |
| transfer.py   | Sincronización de archivos |
| codec.py      | Codificación/decodificación de audio |
| wifi.py       | Transporte WiFi          |
| progress.py   | Visualización de progreso |
| utils.py      | Funciones auxiliares     |
| exceptions.py | Clases de excepción      |

---

## Primeros pasos

### Conectar al dispositivo

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

El SDK busca automáticamente dispositivos cercanos con el nombre:

```
Clip XXXX
```

### Conectarse a un dispositivo específico

```python
device = ClipDevice(
    address="AA:BB:CC:DD:EE:FF"
)

await device.connect()
```

---

## Información del dispositivo

### Leer versión de firmware

```python
version = await cmds.get_version()

print(version.firmware)
print(version.hardware)
```

### Leer estado del dispositivo

```python
state = await cmds.get_state()

print(state.state)
print(state.battery)
print(state.mode)
```

### Leer hora del dispositivo

```python
timestamp = await cmds.get_time()
```

### Establecer hora del dispositivo

```python
import time

await cmds.set_time(
    int(time.time())
)
```

---

## Grabación de audio

### Iniciar grabación

```python
session_id = await cmds.start_recording("normal")
```

### Detener grabación

```python
await cmds.stop_recording()
```

### Pausar grabación

```python
await cmds.pause_recording()
```

### Reanudar grabación

```python
await cmds.resume_recording()
```

### Añadir marcador

```python
bookmark = await cmds.add_bookmark()

print(bookmark.offset)
```

### Ejemplo de sesión de grabación

```python
session = await cmds.start_recording("normal")

await asyncio.sleep(10)

await cmds.stop_recording()
```

---

## Sincronización de archivos

### Listar sesiones

```python
sessions = await cmds.list_sessions()

for s in sessions:
    print(s.id)
```

### Sincronizar una sesión (BLE)

```python
from clip import SessionSync

session_id = "20260326120000"  # obtained from cmds.list_sessions()

sync = SessionSync(device)

await sync.sync(
    session_id,
    Path("recordings")
)
```

### Reanudar descarga interrumpida

```python
session_id = "20260326120000"

await sync.sync(
    session_id,
    Path("recordings"),
    start_file="0015.opus"
)
```

### Mantener archivos en el dispositivo

```python
session_id = "20260326120000"

await sync.sync(
    session_id,
    Path("recordings"),
    delete_after=False
)
```

---

## Gestión de configuración

### Establecer parámetros

```python
await cmds.set_mode("enhanced")

await cmds.set_bitrate(32000)

await cmds.set_complexity(10)

await cmds.set_noise_suppression(30)
```

### Leer parámetros

```python
mode = await cmds.get_mode()

bitrate = await cmds.get_bitrate()
```

### Configuración por lotes

```python
await cmds.set_config_dict({

    "mode":"enhanced",

    "bitrate":32000,

    "complexity":10

})
```

---

## Comunicación WiFi

El reSpeaker Clip puede comunicarse por WiFi usando UDP.

Configuración predeterminada:

| Parámetro | Valor       |
| --------- | ----------- |
| SSID      | ClipAP_XXXX |
| Password  | 12345678    |
| Port      | 8089        |

### Conectar

```python
from clip import WiFiDevice

async with WiFiDevice(
    "192.168.4.1",
    8089
) as device:

    await device.send_command("AT+GSTAT")
```

### Sincronizar por WiFi

```python
from clip import WiFiSync

session_id = "20260326120000"

sync = WiFiSync(
    "192.168.4.1",
    8089
)

sync.connect()

sync.download_session(
    session_id,
    Path("recordings")
)

sync.disconnect()
```

---

## Herramientas de línea de comandos

El SDK incluye varias utilidades listas para usar.

### clip-cli

CLI de propósito general.

```bash
clip-cli status

clip-cli version

clip-cli list

clip-cli record --duration 60

clip-cli sync --session 20260326120000

clip-cli config get

clip-cli bookmark

clip-cli terminal
```

### record.py

Graba audio automáticamente y lo sincroniza.

```bash
python tools/record.py

python tools/record.py --duration 60

python tools/record.py --mode enhanced
```

### sync.py

Sincroniza grabaciones mediante BLE.

```bash
python tools/sync.py

python tools/sync.py --all-sessions
```

### udp_sync.py

Sincroniza grabaciones mediante WiFi.

```bash
python tools/udp_sync.py

python tools/udp_sync.py --session 20260326120000
```

### ble_terminal.py

Terminal interactivo de comandos AT.

```bash
python tools/ble_terminal.py
```

### decode_opus.py

Convierte grabaciones Opus a WAV.

```bash
python tools/decode_opus.py input.opus output.wav
```

---

## Interfaz web

Inicia la aplicación web integrada.

Modo BLE:

```bash
python tools/clip-web.py
```

Modo WiFi:

```bash
python tools/clip-web.py --transport wifi
```

Luego abre:

```
http://localhost:5000
```

### Funciones

* Estado del dispositivo
* Control de grabación
* Gestión de sesiones
* Visualización de audio
* Editor de configuración
* Progreso de sincronización

### REST API

| Método | Endpoint             |
| ------ | -------------------- |
| GET    | /api/status          |
| GET    | /api/version         |
| GET    | /api/sessions        |
| POST   | /api/record/start    |
| POST   | /api/record/stop     |
| POST   | /api/record/bookmark |
| POST   | /api/sync/\{id\}       |
| DELETE | /api/sessions/\{id\}   |
| GET    | /api/config          |
| PUT    | /api/config          |
| WS     | /ws                  |

---

## Gestión de errores

```python
from clip import (
    ConnectionError,
    TimeoutError,
    CommandError
)

try:

    async with ClipDevice() as device:

        ...

except ConnectionError:

    ...

except TimeoutError:

    ...

except CommandError:

    ...
```

---

## Ejemplo completo

Este ejemplo demuestra un flujo de trabajo típico:

1. Conectarse al dispositivo
2. Comprobar el nivel de batería
3. Configurar parámetros de grabación
4. Iniciar la grabación
5. Añadir marcadores
6. Detener la grabación
7. Sincronizar la sesión grabada

```python
import asyncio
from pathlib import Path
from clip import ClipDevice, ClipCommands, SessionSync

async def record_and_sync():
    async with ClipDevice() as device:
        cmds = ClipCommands(device)

        state = await cmds.get_state()
        print(f"Battery: {state.battery}%")

        await cmds.set_config_dict({
            "mode": "enhanced",
            "bitrate": 32000,
            "complexity": 10
        })

        session_id = await cmds.start_recording("normal")
        print(f"Recording started: {session_id}")

        await asyncio.sleep(10)

        await cmds.add_bookmark()
        print("Bookmark added")

        await asyncio.sleep(5)

        await cmds.stop_recording()
        print("Recording stopped")

        sync = SessionSync(device)
        await sync.sync(session_id, Path("recordings"))
        print(f"Session {session_id} synchronized")

asyncio.run(record_and_sync())
```

---

## Referencia de la API

### ClipDevice

Propósito: comunicación con el dispositivo BLE y gestión de la conexión.

```python
class ClipDevice:
    def __init__(self, address: str = None) -> None
    async def connect() -> None
    async def disconnect() -> None
    async def __aenter__() -> ClipDevice
    async def __aexit__(...) -> None
```

### ClipCommands

Propósito: comandos AT de alto nivel para el control del dispositivo.

```python
class ClipCommands:
    def __init__(self, device: ClipDevice) -> None
    async def get_state() -> DeviceState
    async def get_version() -> Version
    async def get_time() -> int
    async def set_time(timestamp: int) -> None
    async def start_recording(mode: str) -> str
    async def stop_recording() -> None
    async def pause_recording() -> None
    async def resume_recording() -> None
    async def add_bookmark() -> Bookmark
    async def list_sessions() -> list[Session]
    async def set_mode(mode: str) -> None
    async def get_mode() -> str
    async def set_bitrate(bitrate: int) -> None
    async def get_bitrate() -> int
    async def set_complexity(level: int) -> None
    async def set_noise_suppression(level: int) -> None
    async def set_config_dict(config: dict) -> None
```

### SessionSync

Propósito: sincronización de archivos mediante BLE.

```python
class SessionSync:
    def __init__(self, device: ClipDevice) -> None
    async def sync(session_id: str, path: Path, delete_after: bool = True, start_file: str = None) -> None
```

### WiFiDevice

Propósito: capa de transporte WiFi usando UDP.

```python
class WiFiDevice:
    def __init__(self, host: str, port: int) -> None
    async def connect() -> None
    async def disconnect() -> None
    async def send_command(cmd: str) -> str
    async def __aenter__() -> WiFiDevice
    async def __aexit__(...) -> None
```

### WiFiSync

Propósito: sincronización de archivos por WiFi.

```python
class WiFiSync:
    def __init__(self, host: str, port: int) -> None
    def connect() -> None
    def disconnect() -> None
    def download_session(session_id: str, path: Path) -> None
```

### Excepciones

| Excepción        | Descripción                    |
| ---------------- | ------------------------------ |
| ClipError        | Excepción base para todos los errores  |
| ConnectionError  | Fallo de conexión BLE/WiFi    |
| TimeoutError     | Tiempo de espera de comando agotado                |
| CommandError     | Comando AT no válido o fallido   |

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
