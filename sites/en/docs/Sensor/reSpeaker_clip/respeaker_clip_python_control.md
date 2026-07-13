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

you can find the github repository in [here](https://github.com/Seeed-Projects/respeaker_clip_python/tree/main)

```bash
git clone <repository-url>
```

### Install Dependencies

```bash
#After Actiate the virtual environment
pip install -r requirements.txt
```

---

## Project Structure

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

## Command Line Tools

The SDK includes several ready-to-use utilities.

### clip-cli -Unified CLI

#### BLE (default)

General-purpose CLI.

```bash
tools/clip-cli.py status
```

Expected output

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/status.jpg" alt="Device Connection" width={800} height="auto"/></p>

```bash
tools/clip-cli.py version
```
```bash
tools/clip-cli.py list
```

Expected output

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/list.png" alt="Device Connection" width={800} height="auto"/></p>

```bash
tools/clip-cli.py record --duration 60

```
Expected output

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/recording.jpg" alt="Device Connection" width={800} height="auto"/></p>

```bash
tools/clip-cli.py sync --session 20260326120000
```
Expected output

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/sync.jpg" alt="Device Connection" width={800} height="auto"/></p>

```bash
tools/clip-cli.py sync --session 20260326120000 --delete
```
Expected output

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/delete.jpg" alt="Device Connection" width={800} height="auto"/></p>

```bash
tools/clip-cli.py config get
```
Expected output

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/get_set.png" alt="Device Connection" width={800} height="auto"/></p>

```bash
tools/clip-cli.py bookmark
```

```bash
tools/clip-cli.py terminal
```

Expected output

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/terminal.png" alt="Device Connection" width={800} height="auto"/></p>

#### WiFi

```bash
 tools/clip-cli.py wifi on
```
Expected output

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/wifi-on.png" alt="Device Connection" width={800} height="auto"/></p>


```bash
tools/clip-cli.py --transport wifi status
```
Expected output

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/wifi-status.png" alt="Device Connection" width={800} height="auto"/></p>



```bash
tools/clip-cli.py  wifi off
```
Expected output

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/wifi-off.png" alt="Device Connection" width={800} height="auto"/></p>




### record.py

Automatically records audio and synchronizes it.

```bash
python tools/record.py

python tools/record.py --duration 60

python tools/record.py --mode enhanced
```
Expected output

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/recording.png" alt="Device Connection" width={800} height="auto"/></p>

### sync.py

Synchronize recordings via BLE.

```bash
python tools/sync.py

python tools/sync.py --all-sessions
```
Expected output

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/sync_tools.png" alt="Device Connection" width={800} height="auto"/></p>

### udp_sync.py

Synchronize recordings via WiFi.

```bash
python tools/udp_sync.py

python tools/udp_sync.py --session 20260326120000
```

Expected output

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/udp_sync.png" alt="Device Connection" width={800} height="auto"/></p>

### ble_terminal.py

Interactive AT command terminal.

```bash
python tools/ble_terminal.py
```
Expected output

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/ble_terminal.png" alt="Device Connection" width={800} height="auto"/></p>

### decode_opus.py

Convert Opus recordings to WAV.

```bash
python tools/decode_opus.py <input_file.opus> <output_file.wav>
```

---

## Test Scripts 

| File | What it tests | Device? | Markers | Tests |
|------|---------------|---------|---------|-------|
| `test_basic.py` | Basic AT commands: VERSION, STATE, TIME, PAIR, invalid commands, error handling, reboot | Yes | — | 12 |
| `test_config.py` | Configuration: MODE, AUTODEL, BRIGHTNESS; verifies unsupported commands (BITRATE, COMPLEXITY, CHUNKSIZE, NOISE, AGC, DEREVERB) raise `CommandError` | Yes | — | 30 |
| `test_recording.py` | Recording control: START/STOP, MARK bookmarks, state transitions (IDLE→RECORDING→IDLE), duration tracking, session IDs | Yes | — | 13 |
| `test_storage.py` | Storage management: LIST sessions/files, DELETE, session persistence, size accuracy, file count | Yes | stress | 21 |
| `test_transfer.py` | File transfer: download sessions, sync, progress callbacks, concurrent downloads, cancel/resume | Yes | slow, stress | 21 |
| `test_unit.py` | Unit tests (no hardware): dataclasses, utility functions, exceptions, opus merge, device init | No | unit | 30 |

### Running tests

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


## Complete Example

This example demonstrates a typical workflow:

1. Auto-connect via BLE
2. Check battery level
3. Set recording mode to enhanced
4. Start a 10-second recording
5. Add a bookmark mid-recording
6. Stop recording
7. Sync the session files to `recordings/<session_id>/`

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

**Expected output**

```
Battery: 85%, Mode: normal
Recording started: 20260710_144500
Bookmark added at 5s
Recording stopped
Downloaded 2 file(s) → recordings/20260710_144500/
```

## Snippets Overview

### Connection

#### Connect to the Device

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

The SDK auto-discovers nearby devices whose name contains `Clip`.

#### Connect to a Specific Device

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

### Device Information

#### Read Firmware Version

```python
version = await cmds.get_version()
print(version.firmware)   # e.g. "v1.0.0"
print(version.hardware)   # e.g. "Clip v0.0.5"
```

#### Read Device State

```python
state = await cmds.get_state()
print(state.state)      # IDLE, RECORDING, TRANSMITTING, PAUSED, ERROR
print(state.battery)    # 0-100
print(state.mode)       # normal, enhanced
print(state.bitrate)    # Opus bitrate in bps
```

#### Read / Set Device Time

```python
import time

timestamp = await cmds.get_time()          # returns int (Unix timestamp)
await cmds.set_time(int(time.time()))      # returns True
```

---

### Recording Audio

#### Start / Stop Recording

```python
session_id = await cmds.start_recording("normal")   # returns str (session ID)
# ... record ...
await cmds.stop_recording()                          # returns dict with session info
```

> `"normal"` is mono, `"enhanced"` enables DSP preprocessing (noise suppression, AGC).

#### Pause / Resume Recording

```python
await cmds.pause_recording()
await cmds.resume_recording()
```

#### Add Bookmark (during recording)

```python
bookmark = await cmds.add_bookmark()
print(bookmark.offset)   # seconds from recording start
```

#### Full Recording Example

```python
session_id = await cmds.start_recording("normal")
await asyncio.sleep(10)
await cmds.stop_recording()
```

---

### File Synchronization

#### List Sessions

```python
sessions = await cmds.list_sessions()
for s in sessions:
    print(s.id, s.files, s.size)
```

#### Sync a Session (BLE)

```python
from pathlib import Path
from clip import SessionSync

session_id = "20260326120000"      # from cmds.list_sessions()
sync = SessionSync(device)

await sync.sync(session_id, Path("recordings"))
```

#### Resume Interrupted Download

```python
await sync.sync(
    session_id,
    Path("recordings"),
    start_file="0015.opus"          # pick up where you left off
)
```

#### Keep Files on Device After Sync

```python
await sync.sync(
    session_id,
    Path("recordings"),
    delete_after=False               # default: False (keep on device)
)
```

#### Sync All Sessions

```python
results = await sync.sync_all(Path("recordings"))
```

---

### Configuration Management


#### Set Parameters (working commands)

```python
await cmds.set_mode("enhanced")          # normal | enhanced
await cmds.set_auto_delete(7)            # days (0-30), pass -1 to disable
await cmds.set_brightness(128)           # 0-255
```

#### Read Parameters

```python
mode        = await cmds.get_mode()          # returns str
auto_delete = await cmds.get_auto_delete()   # returns bool
brightness  = await cmds.get_brightness()    # returns int
```

#### Batch Configuration

```python
await cmds.set_config_dict({
    "mode":         "enhanced",
    "auto_delete":  7,
    "brightness":   128,
})
```

---

### WiFi Communication

The Clip can communicate over WiFi UDP when its AP is enabled.

| Parameter | Value           |
|-----------|-----------------|
| SSID      | `ClipAP_XXXX`   |
| Password  | `12345678` (default) |
| IP        | `192.168.4.1`   |
| Port      | `8089`          |

#### Connect and Send AT Commands

```python
from clip import WiFiDevice

async def main():
    async with WiFiDevice("192.168.4.1", 8089) as device:
        resp = await device.send_command("AT+GSTAT")
        print(resp)

asyncio.run(main())
```

#### Sync a Session over WiFi (blocking API)

```python
from pathlib import Path
from clip import WiFiSync

sync = WiFiSync("192.168.4.1", 8089)
sync.connect()
sync.download_session(session_id, Path("recordings"))
sync.disconnect()
```

> `WiFiSync` is **synchronous** (blocking sockets) — no need for `async`/`await`.

---

### Error Handling

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

## API Reference

### ClipDevice

***BLE device communication and connection management.***

| Signature | Returns | Notes |
|-----------|---------|-------|
| `ClipDevice(address=None, name_filter="Clip", debug=False)` | `ClipDevice` | Auto-discovers if `address` is `None` |
| `await connect(timeout=10.0, sync_time=True, lazy_device_name=False)` | `None` | 3 retries; sync_time auto-sets device clock |
| `await disconnect()` | `None` | Stops all BLE notifications |
| `await send_command(command, timeout=10.0)` | `dict` | Send AT command, get JSON response |
| `is_connected` | `bool` | Property — checks both `_connected` and `client.is_connected` |
| `device_name` | `str | None` | Property — device name if discovered |
| `await __aenter__()` / `await __aexit__()` | `ClipDevice` / `None` | Async context manager |

### ClipCommands

***High-level AT command interface.***

| Signature | Returns | Notes |
|-----------|---------|-------|
| `await get_version()` | `VersionInfo` | `.firmware`, `.hardware`, `.sdk`, `.build` |
| `await get_state()` | `DeviceState` | `.state`, `.battery`, `.mode`, `.bitrate`, `.charging`, `.free_space` |
| `await get_time()` | `int` | Unix timestamp |
| `await set_time(timestamp)` | `bool` | Converts to `AT+TIME=<ts>` |
| `await get_pairing_status()` | `Dict[str, Any]` | BLE pairing status + peer address |
| `await reboot()` | `None` | Device reboot |
| **Recording** | | |
| `await start_recording(mode="normal")` | `str` | `mode`: normal, enhanced, stereo, merge. Returns session ID. |
| `await stop_recording()` | `Dict[str, Any]` | Session summary; handles device-not-recording gracefully |
| `await pause_recording()` | `bool` | |
| `await resume_recording()` | `bool` | |
| `await add_bookmark()` | `BookmarkInfo` | `.offset` in seconds from session start |
| `await get_bookmarks(session_id, fetch_all=True)` | `List[BookmarkInfo]` | Paginated, auto-fetches all pages |
| `await get_bookmarks_count(session_id)` | `int` | Fast count without details |
| **Sessions** | | |
| `await list_sessions(page=1, per_page=10)` | `List[SessionInfo]` | `.id`, `.files`, `.size`, `.synced_files`, `.mode` |
| `await list_all_sessions(per_page=15)` | `List[SessionInfo]` | Auto-paginates all |
| `await get_session_info(session_id)` | `SessionInfo` | Includes `synced_files` count |
| `await list_session_files(session_id)` | `List[str]` | Filenames for all files in session |
| `await delete_session(session_id)` | `bool` | |
| `await purge_all_sessions()` | `bool` | |
| `await format_sd_card()` | `bool` | |
| **Configuration** | | |
| `await get_mode()` | `str` | |
| `await set_mode(mode)` | `bool` | `"normal"` or `"enhanced"` only |
| `await get_auto_delete()` | `bool` | |
| `await set_auto_delete(days)` | `bool` | `days`: 0–30, pass `-1` to disable |
| `await get_brightness()` | `int` | 0–255 |
| `await set_brightness(value)` | `bool` | 0–255 |
| `await get_device_name()` | `str` | BLE device name |
| `await set_device_name(name)` | `bool` | Max 15 chars |
| `await get_config_dict()` | `Dict[str, Any]` | All settings; unsupported keys return `None` |
| `await set_config_dict(config, ignore_errors=True)` | `None` | Skips `None` values; silently drops unsupported keys |
| `get/set_bitrate()` | — | **Firmware: unsupported** — raises `CommandError` |
| `get/set_complexity()` | — | **Firmware: unsupported** — raises `CommandError` |
| `get/set_chunk_size()` | — | **Firmware: unsupported** — raises `CommandError` |
| `get/set_noise_suppression()` | — | **Firmware: unsupported** — raises `CommandError` |
| `get/set_agc()` | — | **Firmware: unsupported** — raises `CommandError` |
| `get/set_dereverb()` | — | **Firmware: unsupported** — raises `CommandError` |
| **Transfer control** | | |
| `await get_progress()` | `Dict[str, Any]` | Download progress |
| `await pause_transfer()` | `bool` | |
| `await resume_transfer()` | `bool` | |
| `await cancel_transfer()` | `bool` | |
| **WiFi / USB** | | |
| `await wifi_on()` | `bool` | 20+ second timeout for nRF7002 init |
| `await wifi_off()` | `bool` | |
| `await get_wifi_status()` | `Dict[str, Any]` | `.running`, `.ssid`, `.clients` |
| `await usb_on()` | `bool` | CDC + MSC |
| `await usb_off()` | `bool` | |
| `await get_usb_status()` | `bool` | |
| **Helpers** | | |
| `await ensure_idle()` | `None` | Stops recording if needed; retries up to 5x |
| `await wait_for_state(target, timeout=10.0)` | `bool` | Polls until state matches |
| `await wait_for_recording_to_start(timeout=5.0)` | `bool` | |
| `await wait_for_recording_to_stop(timeout=5.0)` | `bool` | |
| `await get_battery_status()` | `BatteryStatus` | `.percent`, `.charging`, `.voltage` |

### SessionSync

***File synchronization over BLE with resume support.***

| Signature | Returns | Notes |
|-----------|---------|-------|
| `SessionSync(device, commands=None)` | `SessionSync` | Extends `FileTransfer` |
| `await sync(session_id, output_dir, delete_after=False, continuous=False, force=False, progress_callback=None, session_info=None, start_file=None)` | `Dict[str, Any]` | Resume auto-detected; returns `file_count`, `total_size`, `files`, `merged_file` |
| `await sync_all(output_dir, delete_after=False, progress_callback=None)` | `List[Dict]` | Syncs all sessions |
| `await download_session(session_id, output_dir, progress_callback=None, stop_recording=False, continuous=False, timeout=300.0, start_file=None, session_info=None)` | `Dict[str, Any]` | Lower-level; also saves `session.json` + `bookmarks.json` |
| `await cancel()` | `None` | Thread-safe cancel |

### WiFiDevice

***WiFi UDP transport (async) — compatible with `ClipDevice.send_command`.***

| Signature | Returns | Notes |
|-----------|---------|-------|
| `WiFiDevice(host="192.168.4.1", port=8089, timeout=10.0)` | `WiFiDevice` | |
| `await connect(timeout=None)` | `None` | Starts recv + heartbeat worker threads |
| `await disconnect()` | `None` | |
| `await send_command(command, timeout=None)` | `dict` | JSON-parsed AT response |
| `is_connected` | `bool` | Property |
| `await __aenter__()` / `await __aexit__()` | — | Async context manager |

### WiFiSync

***WiFi UDP file sync (blocking/synchronous — no async needed).***

| Signature | Returns | Notes |
|-----------|---------|-------|
| `WiFiSync(host="192.168.4.1", port=8089, timeout=120.0)` | `WiFiSync` | |
| `connect()` | `bool` | Blocking |
| `disconnect()` | `None` | |
| `download_session(session_id, output_dir, convert_ogg=True, start_file=None, delete_after=False, progress_callback=None, cancel_after=None)` | `bool` | CRC-verified; tqdm progress; press 'c' to cancel |
| `list_sessions()` | `List[dict]` | Paginated |
| `delete_session(session_id)` | `bool` | |

### Exceptions

| Exception | Base | Description |
|-----------|------|-------------|
| `ClipError` | `Exception` | Base for all library errors |
| `ConnectionError` | `ClipError` | BLE or WiFi connection failure |
| `DisconnectedError` | `ClipError` | Unexpected disconnect |
| `CommandError` | `ClipError` | AT command returned error; `.command` attribute |
| `TransferError` | `ClipError` | File transfer operation failed |
| `TimeoutError` | `ClipError` | Command/transfer timed out |
| `ResponseError` | `ClipError` | Invalid or unexpected response |
| `StateError` | `ClipError` | Device in wrong state for operation |



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
