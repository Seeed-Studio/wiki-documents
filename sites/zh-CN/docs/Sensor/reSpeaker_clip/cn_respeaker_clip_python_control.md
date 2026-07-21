---
description: reSpeaker Clip SDK 提供了一个 Python 接口，可通过低功耗蓝牙（BLE）或 WiFi 与 reSpeaker Clip 设备通信，实现录音控制、文件同步、设备配置等功能。
title: 使用 Python 控制 reSpeaker Clip
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
url: https://wiki.seeedstudio.com/cn/respeaker_clip_python_control/
---

## 介绍

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-banner.jpg" alt="pir" width={800} height="auto" /></p>

reSpeaker Clip SDK 提供了一个 Python 接口，可通过低功耗蓝牙（BLE）或 WiFi 与 reSpeaker Clip 设备通信。

使用此 SDK，你可以：

* 连接到 reSpeaker Clip
* 读取设备信息
* 配置录音参数
* 开始和停止录音
* 添加书签
* 同步录音
* 使用 Python 控制设备
* 使用现成的命令行工具
* 通过 Web 界面访问设备

---

## 安装

### 环境要求

* Python 3.10+
* 蓝牙适配器（BLE 模式）
* WiFi 适配器（WiFi 模式）

### 克隆仓库

你可以在[这里](https://github.com/Seeed-Projects/respeaker_clip_python/tree/main)找到 GitHub 仓库

```bash
git clone <repository-url>
```

### 安装依赖

```bash
#After Actiate the virtual environment
pip install -r requirements.txt
```

---

## 项目结构

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

### SDK 模块

| 模块           | 描述                     |
| ------------- | ------------------------ |
| client.py     | BLE 设备通信             |
| commands.py   | 高层 AT 命令             |
| transfer.py   | 文件同步                 |
| codec.py      | 音频编码/解码            |
| wifi.py       | WiFi 传输                |
| progress.py   | 进度显示                 |
| utils.py      | 辅助函数                 |
| exceptions.py | 异常类                   |

---

## 命令行工具

SDK 包含多个可直接使用的实用工具。

### clip-cli - 统一 CLI

#### BLE（默认）

通用命令行工具。

```bash
tools/clip-cli.py status
```

预期输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/status.jpg" alt="Device Connection" width={800} height="auto"/></p>

```bash
tools/clip-cli.py version
```
```bash
tools/clip-cli.py list
```

预期输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/list.png" alt="Device Connection" width={800} height="auto"/></p>

```bash
tools/clip-cli.py record --duration 60

```
预期输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/recording.jpg" alt="Device Connection" width={800} height="auto"/></p>

```bash
tools/clip-cli.py sync --session 20260326120000
```
预期输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/sync.jpg" alt="Device Connection" width={800} height="auto"/></p>

```bash
tools/clip-cli.py sync --session 20260326120000 --delete
```
预期输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/delete.jpg" alt="Device Connection" width={800} height="auto"/></p>

```bash
tools/clip-cli.py config get
```
预期输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/get_set.png" alt="Device Connection" width={800} height="auto"/></p>

```bash
tools/clip-cli.py bookmark
```

```bash
tools/clip-cli.py terminal
```

预期输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/terminal.png" alt="Device Connection" width={800} height="auto"/></p>

#### WiFi

```bash
 tools/clip-cli.py wifi on
```
预期输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/wifi-on.png" alt="Device Connection" width={800} height="auto"/></p>


```bash
tools/clip-cli.py --transport wifi status
```
预期输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/wifi-status.png" alt="Device Connection" width={800} height="auto"/></p>



```bash
tools/clip-cli.py  wifi off
```
预期输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/wifi-off.png" alt="Device Connection" width={800} height="auto"/></p>




### record.py

自动录制音频并进行同步。

```bash
python tools/record.py

python tools/record.py --duration 60

python tools/record.py --mode enhanced
```
预期输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/recording.png" alt="Device Connection" width={800} height="auto"/></p>

### sync.py

通过 BLE 同步录音。

```bash
python tools/sync.py

python tools/sync.py --all-sessions
```
预期输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/sync_tools.png" alt="Device Connection" width={800} height="auto"/></p>

### udp_sync.py

通过 WiFi 同步录音。

```bash
python tools/udp_sync.py

python tools/udp_sync.py --session 20260326120000
```

预期输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/udp_sync.png" alt="Device Connection" width={800} height="auto"/></p>

### ble_terminal.py

交互式 AT 命令终端。

```bash
python tools/ble_terminal.py
```
预期输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/ble_terminal.png" alt="Device Connection" width={800} height="auto"/></p>

### decode_opus.py

将 Opus 录音转换为 WAV。

```bash
python tools/decode_opus.py <input_file.opus> <output_file.wav>
```

> Windows 注意事项：如果由于找不到 Opus 原生库而导致解码失败，请从 ShiftMediaProject releases 下载预编译的 `opus.dll`，将其解压，并把 `opus.dll` 放入虚拟环境的 `Scripts` 文件夹中（例如，`D:\clip\tests\.venv\Scripts\`）。

---

## 测试脚本 

| 文件 | 测试内容 | 是否需要设备？ | 标记 | 测试数 |
|------|---------------|---------|---------|-------|
| `test_basic.py` | 基本 AT 命令：VERSION、STATE、TIME、PAIR、无效命令、错误处理、重启 | 是 | — | 12 |
| `test_config.py` | 配置：MODE、AUTODEL、BRIGHTNESS；验证不支持的命令（BITRATE、COMPLEXITY、CHUNKSIZE、NOISE、AGC、DEREVERB）会抛出 `CommandError` | 是 | — | 30 |
| `test_recording.py` | 录音控制：START/STOP、MARK 书签、状态转换（IDLE→RECORDING→IDLE）、时长跟踪、会话 ID | 是 | — | 13 |
| `test_storage.py` | 存储管理：列出会话/文件、删除、会话持久性、大小精度、文件数量 | 是 | stress | 21 |
| `test_transfer.py` | 文件传输：下载会话、同步、进度回调、并发下载、取消/恢复 | 是 | slow, stress | 21 |
| `test_unit.py` | 单元测试（无需硬件）：数据类、工具函数、异常、opus 合并、设备初始化 | 否 | unit | 30 |

### 运行测试

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


## 完整示例

此示例演示一个典型的工作流程：

1. 通过 BLE 自动连接
2. 检查电池电量
3. 将录音模式设置为增强模式
4. 开始一次 10 秒录音
5. 在录音过程中间添加一个书签
6. 停止录音
7. 将会话文件同步到 `recordings/<session_id>/`

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

**预期输出**

```
Battery: 85%, Mode: normal
Recording started: 20260710_144500
Bookmark added at 5s
Recording stopped
Downloaded 2 file(s) → recordings/20260710_144500/
```

## 代码片段概览

### 连接

#### 连接到设备

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

SDK 会自动发现名称中包含 `Clip` 的附近设备。

#### 连接到指定设备

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

### 设备信息

#### 读取固件版本

```python
version = await cmds.get_version()
print(version.firmware)   # e.g. "v1.0.0"
print(version.hardware)   # e.g. "Clip v0.0.5"
```

#### 读取设备状态

```python
state = await cmds.get_state()
print(state.state)      # IDLE, RECORDING, TRANSMITTING, PAUSED, ERROR
print(state.battery)    # 0-100
print(state.mode)       # normal, enhanced
print(state.bitrate)    # Opus bitrate in bps
```

#### 读取 / 设置设备时间

```python
import time

timestamp = await cmds.get_time()          # returns int (Unix timestamp)
await cmds.set_time(int(time.time()))      # returns True
```

---

### 录音

#### 开始 / 停止录音

```python
session_id = await cmds.start_recording("normal")   # returns str (session ID)
# ... record ...
await cmds.stop_recording()                          # returns dict with session info
```

> `"normal"` 为单声道，`"enhanced"` 启用 DSP 预处理（噪声抑制、AGC）。

#### 暂停 / 恢复录音

```python
await cmds.pause_recording()
await cmds.resume_recording()
```

#### 添加书签（录音过程中）

```python
bookmark = await cmds.add_bookmark()
print(bookmark.offset)   # seconds from recording start
```

#### 完整录音示例

```python
session_id = await cmds.start_recording("normal")
await asyncio.sleep(10)
await cmds.stop_recording()
```

---

### 文件同步

#### 列出会话

```python
sessions = await cmds.list_sessions()
for s in sessions:
    print(s.id, s.files, s.size)
```

#### 同步一个会话（BLE）

```python
from pathlib import Path
from clip import SessionSync

session_id = "20260326120000"      # from cmds.list_sessions()
sync = SessionSync(device)

await sync.sync(session_id, Path("recordings"))
```

#### 恢复中断的下载

```python
await sync.sync(
    session_id,
    Path("recordings"),
    start_file="0015.opus"          # pick up where you left off
)
```

#### 同步后在设备上保留文件

```python
await sync.sync(
    session_id,
    Path("recordings"),
    delete_after=False               # default: False (keep on device)
)
```

#### 同步所有会话

```python
results = await sync.sync_all(Path("recordings"))
```

---

### 配置管理


#### 设置参数（工作命令）

```python
await cmds.set_mode("enhanced")          # normal | enhanced
await cmds.set_auto_delete(7)            # days (0-30), pass -1 to disable
await cmds.set_brightness(128)           # 0-255
```

#### 读取参数

```python
mode        = await cmds.get_mode()          # returns str
auto_delete = await cmds.get_auto_delete()   # returns bool
brightness  = await cmds.get_brightness()    # returns int
```

#### 批量配置

```python
await cmds.set_config_dict({
    "mode":         "enhanced",
    "auto_delete":  7,
    "brightness":   128,
})
```

---

### WiFi 通信

当 AP 启用时，Clip 可以通过 WiFi UDP 通信。

| 参数 | 值           |
|-----------|-----------------|
| SSID      | `ClipAP_XXXX`   |
| 密码      | `12345678`（默认） |
| IP        | `192.168.4.1`   |
| 端口      | `8089`          |

#### 连接并发送 AT 命令

```python
from clip import WiFiDevice

async def main():
    async with WiFiDevice("192.168.4.1", 8089) as device:
        resp = await device.send_command("AT+GSTAT")
        print(resp)

asyncio.run(main())
```

#### 通过 WiFi 同步会话（阻塞 API）

```python
from pathlib import Path
from clip import WiFiSync

sync = WiFiSync("192.168.4.1", 8089)
sync.connect()
sync.download_session(session_id, Path("recordings"))
sync.disconnect()
```

> `WiFiSync` 是**同步**的（阻塞套接字）——无需使用 `async`/`await`。

---

### 错误处理

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

## API 参考

### ClipDevice

***BLE 设备通信和连接管理。***

| 签名 | 返回值 | 说明 |
|-----------|---------|-------|
| `ClipDevice(address=None, name_filter="Clip", debug=False)` | `ClipDevice` | 当 `address` 为 `None` 时自动发现 |
| `await connect(timeout=10.0, sync_time=True, lazy_device_name=False)` | `None` | 重试 3 次；`sync_time` 自动设置设备时钟 |
| `await disconnect()` | `None` | 停止所有 BLE 通知 |
| `await send_command(command, timeout=10.0)` | `dict` | 发送 AT 命令，获取 JSON 响应 |
| `is_connected` | `bool` | 属性——同时检查 `_connected` 和 `client.is_connected` |
| `device_name` | `str | None` | 属性——如果已发现则为设备名称 |
| `await __aenter__()` / `await __aexit__()` | `ClipDevice` / `None` | 异步上下文管理器 |

### ClipCommands

***高级 AT 命令接口。***

| 签名 | 返回值 | 说明 |
|-----------|---------|-------|
| `await get_version()` | `VersionInfo` | `.firmware`、`.hardware`、`.sdk`、`.build` |
| `await get_state()` | `DeviceState` | `.state`、`.battery`、`.mode`、`.bitrate`、`.charging`、`.free_space` |
| `await get_time()` | `int` | Unix 时间戳 |
| `await set_time(timestamp)` | `bool` | 转换为 `AT+TIME=<ts>` |
| `await get_pairing_status()` | `Dict[str, Any]` | BLE 配对状态 + 对端地址 |
| `await reboot()` | `None` | 设备重启 |
| **录音** | | |
| `await start_recording(mode="normal")` | `str` | `mode`：normal、enhanced、stereo、merge。返回会话 ID。 |
| `await stop_recording()` | `Dict[str, Any]` | 会话摘要；在设备未录音时也能优雅处理 |
| `await pause_recording()` | `bool` | |
| `await resume_recording()` | `bool` | |
| `await add_bookmark()` | `BookmarkInfo` | `.offset` 为自会话开始起的秒数 |
| `await get_bookmarks(session_id, fetch_all=True)` | `List[BookmarkInfo]` | 分页，自动获取所有页 |
| `await get_bookmarks_count(session_id)` | `int` | 快速计数，无详细信息 |
| **会话** | | |
| `await list_sessions(page=1, per_page=10)` | `List[SessionInfo]` | `.id`、`.files`、`.size`、`.synced_files`、`.mode` |
| `await list_all_sessions(per_page=15)` | `List[SessionInfo]` | 自动分页获取全部 |
| `await get_session_info(session_id)` | `SessionInfo` | 包含 `synced_files` 计数 |
| `await list_session_files(session_id)` | `List[str]` | 会话中所有文件的文件名 |
| `await delete_session(session_id)` | `bool` | |
| `await purge_all_sessions()` | `bool` | |
| `await format_sd_card()` | `bool` | |
| **配置** | | |
| `await get_mode()` | `str` | |
| `await set_mode(mode)` | `bool` | 仅支持 `"normal"` 或 `"enhanced"` |
| `await get_auto_delete()` | `bool` | |
| `await set_auto_delete(days)` | `bool` | `days`：0–30，传入 `-1` 表示禁用 |
| `await get_brightness()` | `int` | 0–255 |
| `await set_brightness(value)` | `bool` | 0–255 |
| `await get_device_name()` | `str` | BLE 设备名称 |
| `await set_device_name(name)` | `bool` | 最多 15 个字符 |
| `await get_config_dict()` | `Dict[str, Any]` | 所有设置；不支持的键返回 `None` |
| `await set_config_dict(config, ignore_errors=True)` | `None` | 跳过值为 `None` 的项；静默丢弃不支持的键 |
| `get/set_bitrate()` | — | **固件：不支持**——抛出 `CommandError` |
| `get/set_complexity()` | — | **固件：不支持**——抛出 `CommandError` |
| `get/set_chunk_size()` | — | **固件：不支持**——抛出 `CommandError` |
| `get/set_noise_suppression()` | — | **固件：不支持**——抛出 `CommandError` |
| `get/set_agc()` | — | **固件：不支持**——抛出 `CommandError` |
| `get/set_dereverb()` | — | **固件：不支持**——抛出 `CommandError` |
| **传输控制** | | |
| `await get_progress()` | `Dict[str, Any]` | 下载进度 |
| `await pause_transfer()` | `bool` | |
| `await resume_transfer()` | `bool` | |
| `await cancel_transfer()` | `bool` | |
| **WiFi / USB** | | |
| `await wifi_on()` | `bool` | nRF7002 初始化超时时间超过 20 秒 |
| `await wifi_off()` | `bool` | |
| `await get_wifi_status()` | `Dict[str, Any]` | `.running`、`.ssid`、`.clients` |
| `await usb_on()` | `bool` | CDC + MSC |
| `await usb_off()` | `bool` | |
| `await get_usb_status()` | `bool` | |
| **辅助函数** | | |
| `await ensure_idle()` | `None` | 如有需要会停止录音；最多重试 5 次 |
| `await wait_for_state(target, timeout=10.0)` | `bool` | 轮询直到状态匹配 |
| `await wait_for_recording_to_start(timeout=5.0)` | `bool` | |
| `await wait_for_recording_to_stop(timeout=5.0)` | `bool` | |
| `await get_battery_status()` | `BatteryStatus` | `.percent`、`.charging`、`.voltage` |

### SessionSync

***通过 BLE 进行文件同步，并支持断点续传。***

| 签名 | 返回值 | 说明 |
|-----------|---------|-------|
| `SessionSync(device, commands=None)` | `SessionSync` | 继承自 `FileTransfer` |
| `await sync(session_id, output_dir, delete_after=False, continuous=False, force=False, progress_callback=None, session_info=None, start_file=None)` | `Dict[str, Any]` | 自动检测断点续传；返回 `file_count`、`total_size`、`files`、`merged_file` |
| `await sync_all(output_dir, delete_after=False, progress_callback=None)` | `List[Dict]` | 同步所有会话 |
| `await download_session(session_id, output_dir, progress_callback=None, stop_recording=False, continuous=False, timeout=300.0, start_file=None, session_info=None)` | `Dict[str, Any]` | 更底层；同时保存 `session.json` 和 `bookmarks.json` |
| `await cancel()` | `None` | 线程安全的取消操作 |

### WiFiDevice

***WiFi UDP 传输（异步）——兼容 `ClipDevice.send_command`。***

| 签名 | 返回值 | 说明 |
|-----------|---------|-------|
| `WiFiDevice(host="192.168.4.1", port=8089, timeout=10.0)` | `WiFiDevice` | |
| `await connect(timeout=None)` | `None` | 启动接收和心跳工作线程 |
| `await disconnect()` | `None` | |
| `await send_command(command, timeout=None)` | `dict` | JSON 解析的 AT 响应 |
| `is_connected` | `bool` | 属性 |
| `await __aenter__()` / `await __aexit__()` | — | 异步上下文管理器 |

### WiFiSync

***WiFi UDP 文件同步（阻塞/同步——无需异步）。***

| 签名 | 返回值 | 说明 |
|-----------|---------|-------|
| `WiFiSync(host="192.168.4.1", port=8089, timeout=120.0)` | `WiFiSync` | |
| `connect()` | `bool` | 阻塞 |
| `disconnect()` | `None` | |
| `download_session(session_id, output_dir, convert_ogg=True, start_file=None, delete_after=False, progress_callback=None, cancel_after=None)` | `bool` | CRC 校验；tqdm 进度；按 'c' 取消 |
| `list_sessions()` | `List[dict]` | 分页 |
| `delete_session(session_id)` | `bool` | |

### 异常

| 异常 | 基类 | 描述 |
|-----------|------|-------------|
| `ClipError` | `Exception` | 所有库错误的基类 |
| `ConnectionError` | `ClipError` | BLE 或 WiFi 连接失败 |
| `DisconnectedError` | `ClipError` | 意外断开连接 |
| `CommandError` | `ClipError` | AT 命令返回错误；`.command` 属性 |
| `TransferError` | `ClipError` | 文件传输操作失败 |
| `TimeoutError` | `ClipError` | 命令/传输超时 |
| `ResponseError` | `ClipError` | 无效或意外的响应 |
| `StateError` | `ClipError` | 设备处于不适合操作的状态 |



---

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，以确保您在使用我们产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
