---
description: reSpeaker Clip SDK は、Bluetooth Low Energy (BLE) または WiFi を介して reSpeaker Clip デバイスと通信するための Python インターフェースを提供し、録音制御、ファイル同期、デバイス設定などを可能にします。
title: Python による reSpeaker Clip 制御
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
url: https://wiki.seeedstudio.com/ja/respeaker_clip_python_control/
---

## はじめに

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-banner.jpg" alt="pir" width={800} height="auto" /></p>

reSpeaker Clip SDK は、Bluetooth Low Energy (BLE) または WiFi を介して reSpeaker Clip デバイスと通信するための Python インターフェースを提供します。

この SDK を使用すると、次のことができます：

* reSpeaker Clip に接続
* デバイス情報の読み取り
* 録音パラメータの設定
* 録音の開始および停止
* ブックマークの追加
* 録音の同期
* Python を使用したデバイス制御
* すぐに使えるコマンドラインツールの利用
* Web インターフェースを介したデバイスへのアクセス

---

## インストール

### 必要条件

* Python 3.10 以上
* Bluetooth アダプタ（BLE モード）
* WiFi アダプタ（WiFi モード）

### リポジトリをクローン

```bash
git clone <repository-url>

cd applications/clip/tests
```

### 依存関係をインストール

```bash
pip install -r requirements.txt
```

---

## プロジェクト構成

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

### SDK モジュール

| Module        | Description              |
| ------------- | ------------------------ |
| client.py     | BLE デバイス通信         |
| commands.py   | 高レベル AT コマンド     |
| transfer.py   | ファイル同期             |
| codec.py      | オーディオのエンコード/デコード |
| wifi.py       | WiFi トランスポート      |
| progress.py   | 進行状況表示             |
| utils.py      | ヘルパー関数             |
| exceptions.py | 例外クラス               |

---

## はじめに

### デバイスに接続

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

SDK は、次の名前を持つ近くのデバイスを自動的に検索します：

```
Clip XXXX
```

### 特定のデバイスに接続

```python
device = ClipDevice(
    address="AA:BB:CC:DD:EE:FF"
)

await device.connect()
```

---

## デバイス情報

### ファームウェアバージョンを読み取る

```python
version = await cmds.get_version()

print(version.firmware)
print(version.hardware)
```

### デバイス状態を読み取る

```python
state = await cmds.get_state()

print(state.state)
print(state.battery)
print(state.mode)
```

### デバイス時刻を読み取る

```python
timestamp = await cmds.get_time()
```

### デバイス時刻を設定

```python
import time

await cmds.set_time(
    int(time.time())
)
```

---

## オーディオ録音

### 録音開始

```python
session_id = await cmds.start_recording("normal")
```

### 録音停止

```python
await cmds.stop_recording()
```

### 録音一時停止

```python
await cmds.pause_recording()
```

### 録音再開

```python
await cmds.resume_recording()
```

### ブックマークを追加

```python
bookmark = await cmds.add_bookmark()

print(bookmark.offset)
```

### 録音セッションの例

```python
session = await cmds.start_recording("normal")

await asyncio.sleep(10)

await cmds.stop_recording()
```

---

## ファイル同期

### セッションを一覧表示

```python
sessions = await cmds.list_sessions()

for s in sessions:
    print(s.id)
```

### セッションを同期（BLE）

```python
from clip import SessionSync

session_id = "20260326120000"  # obtained from cmds.list_sessions()

sync = SessionSync(device)

await sync.sync(
    session_id,
    Path("recordings")
)
```

### 中断されたダウンロードを再開

```python
session_id = "20260326120000"

await sync.sync(
    session_id,
    Path("recordings"),
    start_file="0015.opus"
)
```

### デバイス上にファイルを保持

```python
session_id = "20260326120000"

await sync.sync(
    session_id,
    Path("recordings"),
    delete_after=False
)
```

---

## 設定管理

### パラメータを設定

```python
await cmds.set_mode("enhanced")

await cmds.set_bitrate(32000)

await cmds.set_complexity(10)

await cmds.set_noise_suppression(30)
```

### パラメータを読み取る

```python
mode = await cmds.get_mode()

bitrate = await cmds.get_bitrate()
```

### 一括設定

```python
await cmds.set_config_dict({

    "mode":"enhanced",

    "bitrate":32000,

    "complexity":10

})
```

---

## WiFi 通信

reSpeaker Clip は、UDP を使用して WiFi 経由で通信できます。

デフォルト設定：

| Parameter | Value       |
| --------- | ----------- |
| SSID      | ClipAP_XXXX |
| Password  | 12345678    |
| Port      | 8089        |

### 接続

```python
from clip import WiFiDevice

async with WiFiDevice(
    "192.168.4.1",
    8089
) as device:

    await device.send_command("AT+GSTAT")
```

### WiFi 経由で同期

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

## コマンドラインツール

SDK には、すぐに使えるユーティリティがいくつか含まれています。

### clip-cli

汎用 CLI です。

```bash
clip-cli status
```

想定される出力

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/status.jpg" alt="Device Connection" width={800} height="auto"/></p>

```bash
clip-cli version
```
```bash
clip-cli list
```

想定される出力

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/list.png" alt="Device Connection" width={800} height="auto"/></p>

```bash
clip-cli record --duration 60

```
想定される出力

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/recording.jpg" alt="Device Connection" width={800} height="auto"/></p>

```bash
clip-cli sync --session 20260326120000
```
想定される出力

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/sync.jpg" alt="Device Connection" width={800} height="auto"/></p>

```bash
clip-cli sync --session 20260326120000 --delete
```
想定される出力

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/delete.jpg" alt="Device Connection" width={800} height="auto"/></p>

```bash
clip-cli config get
```
想定される出力

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/get_set.png" alt="Device Connection" width={800} height="auto"/></p>

```bash
clip-cli bookmark
```

```bash
clip-cli terminal
```


### record.py

自動的にオーディオを録音し、同期します。

```bash
python tools/record.py

python tools/record.py --duration 60

python tools/record.py --mode enhanced
```
想定される出力

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/recording.png" alt="Device Connection" width={800} height="auto"/></p>

### sync.py

BLE 経由で録音を同期します。

```bash
python tools/sync.py

python tools/sync.py --all-sessions
```
想定される出力

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/sync_tools.png" alt="Device Connection" width={800} height="auto"/></p>

### udp_sync.py

WiFi 経由で録音を同期します。

```bash
python tools/udp_sync.py

python tools/udp_sync.py --session 20260326120000
```

想定される出力

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/udp_sync.png" alt="Device Connection" width={800} height="auto"/></p>

### ble_terminal.py

対話型 AT コマンドターミナル。

```bash
python tools/ble_terminal.py
```

### decode_opus.py

Opus 録音を WAV に変換します。

```bash
python tools/decode_opus.py input.opus output.wav
```

---

## Web インターフェース

組み込み Web アプリケーションを起動します。

BLE モード：

```bash
python tools/clip-web.py
```

WiFi モード：

```bash
python tools/clip-web.py --transport wifi
```

その後、次を開きます：

```
http://localhost:5000
```

### 機能

* デバイスステータス
* 録音制御
* セッション管理
* オーディオの可視化
* 設定エディタ
* 同期の進行状況

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

## エラー処理

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

## 完全な例

この例では、一般的なワークフローを示します：

1. デバイスに接続
2. バッテリーレベルを確認
3. 録音パラメータを設定
4. 録音を開始
5. ブックマークを追加
6. 録音を停止
7. 録音されたセッションを同期

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

## API リファレンス

### ClipDevice

目的：BLE デバイスの通信および接続管理。

```python
class ClipDevice:
    def __init__(self, address: str = None) -> None
    async def connect() -> None
    async def disconnect() -> None
    async def __aenter__() -> ClipDevice
    async def __aexit__(...) -> None
```

### ClipCommands

目的：デバイス制御のための高レベル AT コマンド。

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

目的：BLE 経由でのファイル同期。

```python
class SessionSync:
    def __init__(self, device: ClipDevice) -> None
    async def sync(session_id: str, path: Path, delete_after: bool = True, start_file: str = None) -> None
```

### WiFiDevice

目的：UDP を使用した WiFi トランスポート層。

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

目的：WiFi 経由でのファイル同期。

```python
class WiFiSync:
    def __init__(self, host: str, port: int) -> None
    def connect() -> None
    def disconnect() -> None
    def download_session(session_id: str, path: Path) -> None
```

### 例外

| Exception        | 説明                           |
| ---------------- | ------------------------------ |
| ClipError        | すべてのエラーの基本例外       |
| ConnectionError  | BLE/WiFi 接続の失敗            |
| TimeoutError     | コマンドのタイムアウト         |
| CommandError     | 無効または失敗した AT コマンド |

---

## 技術サポートと製品ディスカッション

当社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
