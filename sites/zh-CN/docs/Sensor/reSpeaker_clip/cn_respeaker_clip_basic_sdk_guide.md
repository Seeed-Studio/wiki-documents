---
description: reSpeaker Clip Basic SDK 的系统化指南——传输方式、通信协议、录音状态机、文件模型、端到端数据流，以及以 Python SDK 为主的参考实现（包含 CLI 和 Web 工具）。
title: reSpeaker Clip Basic SDK 指南
keywords:
  - reSpeaker clip
  - python
  - sdk
  - ble
  - wifi
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-banner.jpg
slug: /respeaker_clip_basic_sdk_guide
sku: 100020126
last_update:
  date: 07/13/2026
  author: Ray He / Kasun Thushara
createdAt: '2026-07-13'
updatedAt: '2026-07-13'
url: https://wiki.seeedstudio.com/cn/respeaker_clip_basic_sdk_guide/
---

# reSpeaker Clip Basic SDK 指南

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-banner.jpg" alt="reSpeaker Clip" width={800} height="auto" /></p>

> 版本：与 `clip` 包 `__version__ = 1.0.0` 保持一致  
> 产品：reSpeaker Clip 可穿戴录音设备

## 概述

reSpeaker Clip Basic SDK 指南解释了主机端应用如何通过 BLE、Wi-Fi、AT 命令、GATT 和文件传输工作流与设备通信并进行控制。Python SDK 作为主要参考实现，同时提供 CLI 和基于 Web 的工具。

本指南涵盖：

- **传输方式** —— BLE 和 Wi-Fi/UDP 通信通道。
- **通信协议** —— AT 命令、GATT 特征值以及文件传输帧格式。
- **录音模型** —— 录音模式、设备状态机和文件格式。
- **端到端数据流** —— 从连接到下载音频输出的完整流程。
- **参考实现** —— Python SDK（`clip` 包）、CLI 工具和 Web 界面。

Basic SDK 重点在于从主机端使用设备当前具备的能力。它本身不包含云端转写、AI 总结、账号管理或移动应用服务。这些工作流应基于已下载的音频文件构建，或与其他服务集成。若要修改设备端行为、协议、音频处理或固件内部实现，请参考[固件 SDK 文档](#basic-sdk-和-firmware-sdk)。

## 本指南所处的位置

如果你是第一次接触 reSpeaker Clip，请先阅读 [reSpeaker Clip 入门指南](./respeaker_clip_getting_started.md)。

入门指南介绍了产品、目标场景、硬件能力以及普通用户的使用流程。

本指南聚焦于应用侧开发：

- 通过 BLE 或 Wi-Fi 与设备通信；
- 控制录音和设备配置；
- 管理和下载录音会话；
- 理解 AT 命令、GATT 和文件传输协议；
- 通过 Python、CLI 或 Web 工具集成这些能力。

若要修改设备端行为、协议、音频处理或固件内部实现，请参考[固件 SDK 文档](#basic-sdk-和-firmware-sdk)。

## 安装

### 环境要求

- Python 3.10+
- 蓝牙适配器（BLE 模式）
- Wi-Fi 适配器（Wi-Fi 模式）

### 克隆仓库

你可以在 [这里](https://github.com/Seeed-Projects/respeaker_clip_python/tree/main) 找到 GitHub 仓库。

```bash
git clone <repository-url>
```

### 安装依赖

在激活虚拟环境之后，安装所需依赖：

```bash
pip install -r requirements.txt
```

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

| Module        | Description              |
| ------------- | ------------------------ |
| client.py     | BLE 设备通信 |
| commands.py   | 高层 AT 命令 |
| transfer.py   | 文件同步 |
| codec.py      | 音频编码/解码 |
| wifi.py       | WiFi 传输 |
| progress.py   | 进度显示 |
| utils.py      | 辅助函数 |
| exceptions.py | 异常类 |

---

## SDK 能力

Python SDK 支持以下工作流：

- **配置设备**：录音模式、比特率、复杂度、自动删除策略、OLED 亮度、BLE 设备名及相关设置。
- **控制录音**：开始、停止、暂停、恢复以及添加书签。
- **管理会话**：列出、查询、删除、清理以及格式化 SD 卡。
- **下载文件**：通过 BLE 或 Wi-Fi/UDP 传输录音，并支持断点续传。
- **转换音频**：将设备的原始 Opus 数据重新封装为 OGG/Opus，或通过 Opus 解码路径解码为 16 kHz 单声道 WAV。
- **读取状态和事件**：电池电量、充电状态、设备状态、状态机变化以及实时音频可视化回调。

传输方式的选择非常重要：

- 通过 `ClipDevice` 使用 BLE 进行便携式配置、录音控制和小文件下载。
- 通过 `WiFiDevice` 或 `WiFiSync` 使用 Wi-Fi/UDP 进行批量下载。对于大型录音会话，它更快且更稳定。
- 录音控制仅支持 BLE。文件下载在 BLE 和 Wi-Fi 上都可用。

## 核心概念

### 传输方式

| Transport | Class | Use case | Notes |
| --- | --- | --- | --- |
| BLE | `ClipDevice` | 配置、录音控制、会话下载 | 便携且录音控制必需。批量下载可能较慢，并且在高负载下可能丢失通知。 |
| Wi-Fi/UDP | `WiFiDevice` / `WiFiSync` | 批量会话下载 | 对于大文件更快、更稳定。需要在设备上启用 Wi-Fi 并连接到 `ClipAP_XXXX`。 |

### 录音模式

| Mode | Description |
| --- | --- |
| `normal` | 标准录音路径，不启用 SpeexDSP 降噪/去混响。设备 AGC、高通和限幅器仍可能由固件启用。 |
| `enhanced` | 启用 SpeexDSP 降噪和去混响的增强路径。 |

`set_mode()` 只接受 `normal` 和 `enhanced`。`start_recording()` 还接受别名 `stereo` 和 `merge`；`stereo` 映射到 `normal`，`merge` 映射到 `enhanced`。

两种模式默认都输出单声道 16 kHz Opus。

### 设备状态

一次录音被表示为一个会话。会话 ID 通常是一个时间戳风格的字符串，例如 `YYYYMMDDHHMMSS`。

```text
IDLE --start_recording--> RECORDING --stop_recording--> IDLE
                              |
                              | pause / resume
                              v
                            PAUSED
```

常见的设备状态包括 `IDLE`、`RECORDING`、`TRANSMITTING`、`PAUSED` 和 `ERROR`。

在连接时，SDK 可以通过 `AT+TIME` 同步设备时钟。设备时区仍可能与主机时区不同。

### 文件格式

设备将录音数据存储为原始 Opus 帧，而不是 OGG 容器。原始格式是由长度前缀的 Opus 帧序列组成：

```text
[2-byte little-endian length][opus frame][2-byte little-endian length][opus frame]...
```

在将录音传递给期望 OGG/Opus 输入的工具之前，使用 `convert_to_ogg_opus()` 写出一个合法的 `.ogg` 文件。WAV 解码需要一个 Opus 解码路径，例如 `opuslib`。

### AT 命令协议

- SDK 向 CMD 特征值写入 UTF-8 AT 字符串，例如 `AT+MODE=enhanced`。
- 响应是 `RESP_SEND` 上的 JSON 通知，例如 `{"ok":true,"data":{...}}`。
- 非请求事件（如状态变化）形如 `{"event":"state","state":"RECORDING",...}`，并通过 `event_callback` 分发。

### GATT 特征值

| Characteristic | UUID | Properties | Purpose |
| --- | --- | --- | --- |
| Service | `6E400001-B5A3-F393-E0A9-E50E24DCCA9E` | Primary Service | 自定义 BLE 通信服务 |
| CMD | `6E400002-B5A3-F393-E0A9-E50E24DCCA9E` | Write Without Response (Encrypted) | 中心设备 → 设备：写入 AT 命令字符串 |
| RESP_SEND | `6E400003-B5A3-F393-E0A9-E50E24DCCA9E` | Notify (CCC Encrypted) | 设备 → 中心设备：JSON 响应和事件通知 |
| FILE_DATA | `6E400004-B5A3-F393-E0A9-E50E24DCCA9E` | Notify (CCC Encrypted) | 设备 → 中心设备：二进制文件传输帧通知 |
| AUDIO_VIS | `6E400005-B5A3-F393-E0A9-E50E24DCCA9E` | Notify (CCC Encrypted) | 设备 → 中心设备：实时音频可视化通知 |

### 文件传输协议

文件数据以二进制帧的形式在 `FILE_DATA` 上发送。

| Frame | Type | Layout |
| --- | --- | --- |
| `FILE_START` | `0x10` | `type(1) + fn_len(1) + filename(N) + file_size(4, LE)` |
| `DATA` | `0x01` | `type(1) + seq(2, LE) + len(2, LE) + data(N)` |
| `FILE_END` | `0x11` | `type(1) + crc32(4, LE)` |
| `TRANSFER_DONE` | `0x12` | `type(1) + sid_len(1) + session_id(N) + file_count(4, LE)` |

每个文件都会通过 CRC32 校验。只有通过校验的文件才应视为成功保存。

### 断点续传

`SessionSync.sync()` 具备断点续传能力。它可以检测已有的本地 `.opus` 文件，查询设备的已同步文件计数，计算 `start_file`，并继续之前的下载。使用 `force=True` 可从头开始。

### 数据流

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_data_flow.png" alt="reSpeaker Clip data flow" width={900} height="auto" /></p>

## 基础 SDK 和固件 SDK

reSpeaker Clip SDK 被拆分为两层：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_basic_firmware.png" alt="Basic SDK vs Firmware SDK" width={900} height="auto" /></p>

本指南中介绍的概念（传输层、协议、状态机、数据流）在设备端由固件实现。下表将每个基础 SDK 概念映射到其固件 SDK 对应部分：

| 基础 SDK 概念 | 固件 SDK 对应部分 |
| --- | --- |
| BLE / Wi-Fi 传输 | 设备端 BLE 和 UDP 服务实现 |
| AT 命令 | AT 服务器和命令注册 |
| GATT | GATT 服务和特征 |
| 录音状态机 | 设备录音状态和事件处理 |
| 文件传输 | 存储、分片、CRC 和同步实现 |
| 音频数据流 | PDM → DSP → Opus → 文件流水线 |

如果你的目标是添加新的 AT 命令、更改 GATT 服务、修改录音状态机或更改音频处理链，则需要使用固件 SDK。固件 SDK 文档（固件架构、环境搭建、构建、烧录和二次开发）尚未发布，我们会尽快发布。

## 完整示例

此示例演示一个典型的工作流程：

1. 通过 BLE 自动连接
2. 检查电池电量
3. 将录音模式设置为增强
4. 开始一次 10 秒录音
5. 在录音中途添加书签
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

### 录制音频

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

当 Clip 的 AP 被启用时，可以通过 WiFi UDP 进行通信。

| 参数 | 值           |
|-----------|-----------------|
| SSID      | `ClipAP_XXXX`   |
| Password  | `12345678` (默认) |
| IP        | `192.168.4.1`   |
| Port      | `8089`          |

#### 连接并发送 AT 命令

```python
from clip import WiFiDevice

async def main():
    async with WiFiDevice("192.168.4.1", 8089) as device:
        resp = await device.send_command("AT+GSTAT")
        print(resp)

asyncio.run(main())
```

#### 通过 WiFi 同步一个会话（阻塞 API）

```python
from pathlib import Path
from clip import WiFiSync

sync = WiFiSync("192.168.4.1", 8089)
sync.connect()
sync.download_session(session_id, Path("recordings"))
sync.disconnect()
```

> `WiFiSync` 是**同步**的（阻塞套接字）——不需要 `async`/`await`。

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

## 命令行工具

SDK 包含多个开箱即用的实用工具。

### clip-cli - 统一 CLI

#### BLE（默认）

通用 CLI。

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

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/delete.jpg" alt="设备连接" width={800} height="auto"/></p>

```bash
tools/clip-cli.py config get
```
预期输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/get_set.png" alt="设备连接" width={800} height="auto"/></p>

```bash
tools/clip-cli.py bookmark
```

```bash
tools/clip-cli.py terminal
```

预期输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/terminal.png" alt="设备连接" width={800} height="auto"/></p>

#### WiFi

```bash
 tools/clip-cli.py wifi on
```
预期输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/wifi-on.png" alt="设备连接" width={800} height="auto"/></p>


```bash
tools/clip-cli.py --transport wifi status
```
预期输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/wifi-status.png" alt="设备连接" width={800} height="auto"/></p>



```bash
tools/clip-cli.py  wifi off
```
预期输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/wifi-off.png" alt="设备连接" width={800} height="auto"/></p>




### record.py

自动录制音频并进行同步。

```bash
python tools/record.py

python tools/record.py --duration 60

python tools/record.py --mode enhanced
```
预期输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/recording.png" alt="设备连接" width={800} height="auto"/></p>

### sync.py

通过 BLE 同步录音。

```bash
python tools/sync.py

python tools/sync.py --all-sessions
```
预期输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/sync_tools.png" alt="设备连接" width={800} height="auto"/></p>

### udp_sync.py

通过 WiFi 同步录音。

```bash
python tools/udp_sync.py

python tools/udp_sync.py --session 20260326120000
```

预期输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/udp_sync.png" alt="设备连接" width={800} height="auto"/></p>

### ble_terminal.py

交互式 AT 命令终端。

```bash
python tools/ble_terminal.py
```
预期输出

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/ble_terminal.png" alt="设备连接" width={800} height="auto"/></p>

### decode_opus.py

将 Opus 录音转换为 WAV。

```bash
python tools/decode_opus.py <input_file.opus> <output_file.wav>
```

---

## Web 界面

启动内置 Web 应用程序。

BLE 模式：

```bash
python tools/clip-web.py
```

Wi-Fi 模式：

```bash
python tools/clip-web.py --transport wifi
```

然后打开：

```text
http://localhost:5000
```

### 功能

- 设备状态
- 录音控制
- 会话管理
- 音频可视化
- 配置编辑器
- 同步进度

### REST API

| 方法 | 端点 |
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

## 核心模块

| 模块 | 主要用途 |
| --- | --- |
| `ClipDevice` | BLE 连接、配对、AT 命令传输、通知和传输进度 |
| `ClipCommands` | 设备 AT 命令的高级封装 |
| `FileTransfer` / `SessionSync` | 通过 BLE 下载会话以及支持断点续传的同步 |
| `WiFiDevice` / `WiFiSync` | 适用于大体积传输的 Wi-Fi/UDP 下载流程 |
| `codec` | 原始 Opus 帧解析和 OGG/Opus 写入 |
| `utils` | 会话 ID 解析、格式化辅助函数、配置加载、进度报告和文件工具 |
| `exceptions` | SDK 专用异常类 |

## API 参考

### ClipDevice

***BLE 设备通信与连接管理。***

| 签名 | 返回值 | 说明 |
|-----------|---------|-------|
| `ClipDevice(address=None, name_filter="Clip", debug=False)` | `ClipDevice` | 当 `address` 为 `None` 时自动发现 |
| `await connect(timeout=10.0, sync_time=True, lazy_device_name=False)` | `None` | 重试 3 次；`sync_time` 自动设置设备时钟 |
| `await disconnect()` | `None` | 停止所有 BLE 通知 |
| `await send_command(command, timeout=10.0)` | `dict` | 发送 AT 命令，获取 JSON 响应 |
| `is_connected` | `bool` | 属性 — 同时检查 `_connected` 和 `client.is_connected` |
| `device_name` | `str | None` | 属性 — 若已发现则为设备名称 |
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
| `await stop_recording()` | `Dict[str, Any]` | 会话摘要；在设备未录音时也能正常处理 |
| `await pause_recording()` | `bool` | |
| `await resume_recording()` | `bool` | |
| `await add_bookmark()` | `BookmarkInfo` | `.offset` 为自会话开始起的秒数 |
| `await get_bookmarks(session_id, fetch_all=True)` | `List[BookmarkInfo]` | 分页，自动获取所有页 |
| `await get_bookmarks_count(session_id)` | `int` | 快速计数，不含详情 |
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
| `get/set_bitrate()` | — | **固件：不支持** — 抛出 `CommandError` |
| `get/set_complexity()` | — | **固件：不支持** — 抛出 `CommandError` |
| `get/set_chunk_size()` | — | **固件：不支持** — 抛出 `CommandError` |
| `get/set_noise_suppression()` | — | **固件：不支持** — 抛出 `CommandError` |
| `get/set_agc()` | — | **固件：不支持** — 抛出 `CommandError` |
| `get/set_dereverb()` | — | **固件：不支持** — 抛出 `CommandError` |
| **传输控制** | | |
| `await get_progress()` | `Dict[str, Any]` | 下载进度 |
| `await pause_transfer()` | `bool` | |
| `await resume_transfer()` | `bool` | |
| `await cancel_transfer()` | `bool` | |
| **WiFi / USB** | | |
| `await wifi_on()` | `bool` | 为 nRF7002 初始化预留 20+ 秒超时 |
| `await wifi_off()` | `bool` | |
| `await get_wifi_status()` | `Dict[str, Any]` | `.running`、`.ssid`、`.clients` |
| `await usb_on()` | `bool` | CDC + MSC |
| `await usb_off()` | `bool` | |
| `await get_usb_status()` | `bool` | |
| **辅助函数** | | |
| `await ensure_idle()` | `None` | 如有需要则停止录音；最多重试 5 次 |
| `await wait_for_state(target, timeout=10.0)` | `bool` | 轮询直到状态匹配 |
| `await wait_for_recording_to_start(timeout=5.0)` | `bool` | |
| `await wait_for_recording_to_stop(timeout=5.0)` | `bool` | |
| `await get_battery_status()` | `BatteryStatus` | `.percent`、`.charging`、`.voltage` |

### SessionSync

***支持断点续传的 BLE 文件同步。***

| 签名 | 返回值 | 说明 |
|-----------|---------|-------|
| `SessionSync(device, commands=None)` | `SessionSync` | 扩展自 `FileTransfer` |
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
| `await send_command(command, timeout=None)` | `dict` | 解析为 JSON 的 AT 响应 |
| `is_connected` | `bool` | 属性 |
| `await __aenter__()` / `await __aexit__()` | — | 异步上下文管理器 |

### WiFiSync

***WiFi UDP 文件同步（阻塞/同步——无需异步）。***

| 签名 | 返回值 | 说明 |
|-----------|---------|-------|
| `WiFiSync(host="192.168.4.1", port=8089, timeout=120.0)` | `WiFiSync` | |
| `connect()` | `bool` | 阻塞 |
| `disconnect()` | `None` | |
| `download_session(session_id, output_dir, convert_ogg=True, start_file=None, delete_after=False, progress_callback=None, cancel_after=None)` | `bool` | 通过 CRC 校验；tqdm 进度；按下 'c' 取消 |
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
| `StateError` | `ClipError` | 设备处于不适合该操作的状态 |



---

## 故障排查

**Q1：连接后命令挂起或超时。**  
命令特征需要加密的 BLE 链路。SDK 可以发起配对，但操作系统可能会弹出蓝牙配对或授权对话框。请手动确认。如果连接仍然卡住，请删除陈旧的绑定并重新连接。

**Q2：下载报告 CRC 不匹配或文件数为零。**  
在高负载下，BLE 协议栈有时会重复发送通知或丢帧。断开连接，重新连接并重试。使用 `SessionSync`，这样传输可以在可能的情况下从中断处恢复。

**Q3：下载速度很慢或中途掉线。**  
使用 `SessionSync` 进行支持恢复的 BLE 传输。对于大量录音数据，请通过 `WiFiSync` 使用 Wi-Fi 下载：在 Clip 上启用 Wi-Fi，连接到 `ClipAP_XXXX`，然后通过 Wi-Fi 下载。

**Q4：`delete_after=True` 删除了一个未完全下载的会话。**  
使用更安全的模式：`sync(force=True, delete_after=False)`，确认本地 `merged_file` 已存在且非空，然后手动调用 `cmds.delete_session(session_id)`。

**Q5：`AT+NOISE`、`AT+DEREVERB` 或 `AT+AGC` 返回 `Unknown command`。**  
当前固件可能没有注册这些可选命令。SDK 保留了与兼容固件版本对应的封装。如果在恢复配置，`set_config_dict(..., ignore_errors=True)` 可以跳过不支持的配置项。

**Q6：`bleak` 抛出 `'BleakClient' object has no attribute 'get_services'` 或 `'get_mtu'` 等错误。**  
不同版本的 `bleak` API 存在差异。请在安装包发布后使用 SDK 测试过的依赖集合。

**Q7：录音没有声音或音质较差。**  
检查麦克风距离和朝向、电池电量以及录音模式。`enhanced` 模式可以更强地抑制噪声，可能会对非常干净的语音过度处理。

**Q8：会话 ID 的时间戳与本地时间不匹配。**  
设备时钟或时区可能与主机不同。SDK 可以在连接时同步时间。你也可以调用 `await cmds.set_time(int(time.time()))`。

**Q9：如何将 Opus 转换为 WAV 以用于 STT 或 ML？**  
使用 `convert_to_ogg_opus()` 生成 OGG/Opus 输出。对于 WAV，请使用 `opuslib` 等 Opus 解码器对原始 Opus 流进行解码。

**Q10：录音时日志被音频可视化事件刷屏。**  
`AUDIO_VIS` 通知触发非常频繁。仅在需要时注册音频可视化回调，并保持回调逻辑尽量轻量。

## 技术支持与产品讨论

感谢你选择我们的产品！我们将为你提供多种支持，确保你在使用我们产品时体验顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
