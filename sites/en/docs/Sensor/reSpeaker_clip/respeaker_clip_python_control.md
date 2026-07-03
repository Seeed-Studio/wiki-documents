---
description: The reSpeaker Clip SDK provides a Python interface for communicating with reSpeaker Clip devices over Bluetooth Low Energy (BLE) or WiFi, enabling recording control, file synchronization, device configuration, and more.
title: reSpeaker Clip Control with Python
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
url: https://wiki.seeedstudio.com/respeaker_clip_python_control/
---

## Introduction

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-banner.jpg" alt="pir" width={800} height="auto" /></p>

The reSpeaker Clip SDK provides a Python interface for communicating with reSpeaker Clip devices over Bluetooth Low Energy (BLE) or WiFi.

Using this SDK you can:

* Connect to a reSpeaker Clip
* Read device information
* Configure recording parameters
* Start and stop recordings
* Add bookmarks
* Synchronize recordings
* Control the device using Python
* Use ready-made command line tools
* Access the device through a web interface

---

## Installation

### Requirements

* Python 3.10+
* Bluetooth adapter (BLE mode)
* WiFi adapter (WiFi mode)

### Clone the Repository

```bash
git clone <repository-url>

cd applications/clip/tests
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

---

## Project Structure

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

### SDK Modules

| Module        | Description              |
| ------------- | ------------------------ |
| client.py     | BLE device communication |
| commands.py   | High-level AT commands   |
| transfer.py   | File synchronization     |
| codec.py      | Audio encoding/decoding  |
| wifi.py       | WiFi transport           |
| progress.py   | Progress display         |
| utils.py      | Helper functions         |
| exceptions.py | Exception classes        |

---

## Getting Started

### Connect to the Device

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

The SDK automatically searches for nearby devices named:

```
Clip XXXX
```

### Connect to a Specific Device

```python
device = ClipDevice(
    address="AA:BB:CC:DD:EE:FF"
)

await device.connect()
```

---

## Device Information

### Read Firmware Version

```python
version = await cmds.get_version()

print(version.firmware)
print(version.hardware)
```

### Read Device State

```python
state = await cmds.get_state()

print(state.state)
print(state.battery)
print(state.mode)
```

### Read Device Time

```python
timestamp = await cmds.get_time()
```

### Set Device Time

```python
import time

await cmds.set_time(
    int(time.time())
)
```

---

## Recording Audio

### Start Recording

```python
session_id = await cmds.start_recording("normal")
```

### Stop Recording

```python
await cmds.stop_recording()
```

### Pause Recording

```python
await cmds.pause_recording()
```

### Resume Recording

```python
await cmds.resume_recording()
```

### Add Bookmark

```python
bookmark = await cmds.add_bookmark()

print(bookmark.offset)
```

### Example Recording Session

```python
session = await cmds.start_recording("normal")

await asyncio.sleep(10)

await cmds.stop_recording()
```

---

## File Synchronization

### List Sessions

```python
sessions = await cmds.list_sessions()

for s in sessions:
    print(s.id)
```

### Synchronize a Session (BLE)

```python
from clip import SessionSync

session_id = "20260326120000"  # obtained from cmds.list_sessions()

sync = SessionSync(device)

await sync.sync(
    session_id,
    Path("recordings")
)
```

### Resume Interrupted Download

```python
session_id = "20260326120000"

await sync.sync(
    session_id,
    Path("recordings"),
    start_file="0015.opus"
)
```

### Keep Files on Device

```python
session_id = "20260326120000"

await sync.sync(
    session_id,
    Path("recordings"),
    delete_after=False
)
```

---

## Configuration Management

### Set Parameters

```python
await cmds.set_mode("enhanced")

await cmds.set_bitrate(32000)

await cmds.set_complexity(10)

await cmds.set_noise_suppression(30)
```

### Read Parameters

```python
mode = await cmds.get_mode()

bitrate = await cmds.get_bitrate()
```

### Batch Configuration

```python
await cmds.set_config_dict({

    "mode":"enhanced",

    "bitrate":32000,

    "complexity":10

})
```

---

## WiFi Communication

The reSpeaker Clip can communicate over WiFi using UDP.

Default settings:

| Parameter | Value       |
| --------- | ----------- |
| SSID      | ClipAP_XXXX |
| Password  | 12345678    |
| Port      | 8089        |

### Connect

```python
from clip import WiFiDevice

async with WiFiDevice(
    "192.168.4.1",
    8089
) as device:

    await device.send_command("AT+GSTAT")
```

### Synchronize over WiFi

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

## Command Line Tools

The SDK includes several ready-to-use utilities.

### clip-cli

General-purpose CLI.

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

Automatically records audio and synchronizes it.

```bash
python tools/record.py

python tools/record.py --duration 60

python tools/record.py --mode enhanced
```

### sync.py

Synchronize recordings via BLE.

```bash
python tools/sync.py

python tools/sync.py --all-sessions
```

### udp_sync.py

Synchronize recordings via WiFi.

```bash
python tools/udp_sync.py

python tools/udp_sync.py --session 20260326120000
```

### ble_terminal.py

Interactive AT command terminal.

```bash
python tools/ble_terminal.py
```

### decode_opus.py

Convert Opus recordings to WAV.

```bash
python tools/decode_opus.py input.opus output.wav
```

---

## Web Interface

Launch the built-in web application.

BLE mode:

```bash
python tools/clip-web.py
```

WiFi mode:

```bash
python tools/clip-web.py --transport wifi
```

Then open:

```
http://localhost:5000
```

### Features

* Device status
* Recording control
* Session management
* Audio visualization
* Configuration editor
* Sync progress

### REST API

| Method | Endpoint             |
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

## Error Handling

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

## Complete Example

This example demonstrates a typical workflow:

1. Connect to the device
2. Check battery level
3. Configure recording parameters
4. Start recording
5. Add bookmarks
6. Stop recording
7. Synchronize the recorded session

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

## API Reference

### ClipDevice

Purpose: BLE device communication and connection management.

```python
class ClipDevice:
    def __init__(self, address: str = None) -> None
    async def connect() -> None
    async def disconnect() -> None
    async def __aenter__() -> ClipDevice
    async def __aexit__(...) -> None
```

### ClipCommands

Purpose: High-level AT commands for device control.

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

Purpose: File synchronization over BLE.

```python
class SessionSync:
    def __init__(self, device: ClipDevice) -> None
    async def sync(session_id: str, path: Path, delete_after: bool = True, start_file: str = None) -> None
```

### WiFiDevice

Purpose: WiFi transport layer using UDP.

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

Purpose: File synchronization over WiFi.

```python
class WiFiSync:
    def __init__(self, host: str, port: int) -> None
    def connect() -> None
    def disconnect() -> None
    def download_session(session_id: str, path: Path) -> None
```

### Exceptions

| Exception        | Description                    |
| ---------------- | ------------------------------ |
| ClipError        | Base exception for all errors  |
| ConnectionError  | BLE/WiFi connection failure    |
| TimeoutError     | Command timeout                |
| CommandError     | Invalid or failed AT command   |

---

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
