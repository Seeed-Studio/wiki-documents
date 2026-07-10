---
description: reSpeaker Clip SDK 提供了一个 Python 接口，可通过蓝牙低功耗（BLE）或 WiFi 与 reSpeaker Clip 设备通信，实现录音控制、文件同步、设备配置等功能。
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

reSpeaker Clip SDK 提供了一个 Python 接口，可通过蓝牙低功耗（BLE）或 WiFi 与 reSpeaker Clip 设备通信。

使用此 SDK，您可以：

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

```bash
git clone <repository-url>

cd applications/clip/tests
```

### 安装依赖

```bash
pip install -r requirements.txt
```

---

## 项目结构

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

### SDK 模块

| 模块          | 描述                 |
| ------------- | -------------------- |
| client.py     | BLE 设备通信         |
| commands.py   | 高层 AT 命令         |
| transfer.py   | 文件同步             |
| codec.py      | 音频编码/解码        |
| wifi.py       | WiFi 传输            |
| progress.py   | 进度显示             |
| utils.py      | 辅助函数             |
| exceptions.py | 异常类               |

---

## 入门指南

### 连接设备

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

SDK 会自动搜索附近名称为以下的设备：

```
Clip XXXX
```

### 连接到指定设备

```python
device = ClipDevice(
    address="AA:BB:CC:DD:EE:FF"
)

await device.connect()
```

---

## 设备信息

### 读取固件版本

```python
version = await cmds.get_version()

print(version.firmware)
print(version.hardware)
```

### 读取设备状态

```python
state = await cmds.get_state()

print(state.state)
print(state.battery)
print(state.mode)
```

### 读取设备时间

```python
timestamp = await cmds.get_time()
```

### 设置设备时间

```python
import time

await cmds.set_time(
    int(time.time())
)
```

---

## 音频录制

### 开始录音

```python
session_id = await cmds.start_recording("normal")
```

### 停止录音

```python
await cmds.stop_recording()
```

### 暂停录音

```python
await cmds.pause_recording()
```

### 恢复录音

```python
await cmds.resume_recording()
```

### 添加书签

```python
bookmark = await cmds.add_bookmark()

print(bookmark.offset)
```

### 示例录音会话

```python
session = await cmds.start_recording("normal")

await asyncio.sleep(10)

await cmds.stop_recording()
```

---

## 文件同步

### 列出会话

```python
sessions = await cmds.list_sessions()

for s in sessions:
    print(s.id)
```

### 同步会话（BLE）

```python
from clip import SessionSync

session_id = "20260326120000"  # obtained from cmds.list_sessions()

sync = SessionSync(device)

await sync.sync(
    session_id,
    Path("recordings")
)
```

### 恢复中断的下载

```python
session_id = "20260326120000"

await sync.sync(
    session_id,
    Path("recordings"),
    start_file="0015.opus"
)
```

### 在设备上保留文件

```python
session_id = "20260326120000"

await sync.sync(
    session_id,
    Path("recordings"),
    delete_after=False
)
```

---

## 配置管理

### 设置参数

```python
await cmds.set_mode("enhanced")

await cmds.set_bitrate(32000)

await cmds.set_complexity(10)

await cmds.set_noise_suppression(30)
```

### 读取参数

```python
mode = await cmds.get_mode()

bitrate = await cmds.get_bitrate()
```

### 批量配置

```python
await cmds.set_config_dict({

    "mode":"enhanced",

    "bitrate":32000,

    "complexity":10

})
```

---

## WiFi 通信

reSpeaker Clip 可以通过 WiFi 使用 UDP 进行通信。

默认设置：

| 参数     | 值          |
| --------- | ----------- |
| SSID      | ClipAP_XXXX |
| Password  | 12345678    |
| Port      | 8089        |

### 连接

```python
from clip import WiFiDevice

async with WiFiDevice(
    "192.168.4.1",
    8089
) as device:

    await device.send_command("AT+GSTAT")
```

### 通过 WiFi 同步

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

## 命令行工具

SDK 包含多个可直接使用的实用工具。

### clip-cli

通用命令行工具。

```bash
clip-cli status
```

预期输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/status.jpg" alt="Device Connection" width={800} height="auto"/></p>

```bash
clip-cli version
```
```bash
clip-cli list
```

预期输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/list.png" alt="Device Connection" width={800} height="auto"/></p>

```bash
clip-cli record --duration 60

```
预期输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/recording.jpg" alt="Device Connection" width={800} height="auto"/></p>

```bash
clip-cli sync --session 20260326120000
```
预期输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/sync.jpg" alt="Device Connection" width={800} height="auto"/></p>

```bash
clip-cli sync --session 20260326120000 --delete
```
预期输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/delete.jpg" alt="Device Connection" width={800} height="auto"/></p>

```bash
clip-cli config get
```
预期输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/get_set.png" alt="Device Connection" width={800} height="auto"/></p>

```bash
clip-cli bookmark
```

```bash
clip-cli terminal
```


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

### decode_opus.py

将 Opus 录音转换为 WAV。

```bash
python tools/decode_opus.py input.opus output.wav
```

---

## Web 界面

启动内置 Web 应用程序。

BLE 模式：

```bash
python tools/clip-web.py
```

WiFi 模式：

```bash
python tools/clip-web.py --transport wifi
```

然后打开：

```
http://localhost:5000
```

### 功能

* 设备状态
* 录音控制
* 会话管理
* 音频可视化
* 配置编辑器
* 同步进度

### REST API

| 方法  | 端点                  |
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

## 错误处理

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

## 完整示例

此示例演示了一个典型的工作流程：

1. 连接到设备
2. 检查电池电量
3. 配置录音参数
4. 开始录音
5. 添加书签
6. 停止录音
7. 同步已录制的会话

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

## API 参考

### ClipDevice

用途：BLE 设备通信和连接管理。

```python
class ClipDevice:
    def __init__(self, address: str = None) -> None
    async def connect() -> None
    async def disconnect() -> None
    async def __aenter__() -> ClipDevice
    async def __aexit__(...) -> None
```

### ClipCommands

用途：用于设备控制的高级 AT 命令。

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

用途：通过 BLE 进行文件同步。

```python
class SessionSync:
    def __init__(self, device: ClipDevice) -> None
    async def sync(session_id: str, path: Path, delete_after: bool = True, start_file: str = None) -> None
```

### WiFiDevice

用途：使用 UDP 的 WiFi 传输层。

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

用途：通过 WiFi 进行文件同步。

```python
class WiFiSync:
    def __init__(self, host: str, port: int) -> None
    def connect() -> None
    def disconnect() -> None
    def download_session(session_id: str, path: Path) -> None
```

### 异常

| Exception        | Description                    |
| ---------------- | ------------------------------ |
| ClipError        | 所有错误的基础异常             |
| ConnectionError  | BLE/WiFi 连接失败              |
| TimeoutError     | 命令超时                        |
| CommandError     | 无效或执行失败的 AT 命令       |

---

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，以确保您在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
