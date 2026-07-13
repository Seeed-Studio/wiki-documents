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

* reSpeaker Clip に接続する
* デバイス情報を読み取る
* 録音パラメータを設定する
* 録音を開始および停止する
* ブックマークを追加する
* 録音を同期する
* Python を使用してデバイスを制御する
* すぐに使えるコマンドラインツールを利用する
* Web インターフェース経由でデバイスにアクセスする

---

## インストール

### 必要条件

* Python 3.10 以上
* Bluetooth アダプタ（BLE モード）
* WiFi アダプタ（WiFi モード）

### リポジトリをクローンする

GitHub リポジトリは[こちら](https://github.com/Seeed-Projects/respeaker_clip_python/tree/main)にあります

```bash
git clone <repository-url>
```

### 依存関係をインストールする

```bash
#After Actiate the virtual environment
pip install -r requirements.txt
```

---

## プロジェクト構成

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

### SDK モジュール

| Module        | Description              |
| ------------- | ------------------------ |
| client.py     | BLE デバイス通信         |
| commands.py   | 高レベル AT コマンド     |
| transfer.py   | ファイル同期             |
| codec.py      | オーディオのエンコード/デコード |
| wifi.py       | WiFi トランスポート      |
| progress.py   | 進行状況の表示           |
| utils.py      | ヘルパー関数             |
| exceptions.py | 例外クラス               |

---

## コマンドラインツール

SDK には、すぐに使えるユーティリティがいくつか含まれています。

### clip-cli - 統合 CLI

#### BLE（デフォルト）

汎用 CLI です。

```bash
tools/clip-cli.py status
```

想定される出力

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/status.jpg" alt="Device Connection" width={800} height="auto"/></p>

```bash
tools/clip-cli.py version
```
```bash
tools/clip-cli.py list
```

想定される出力

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/list.png" alt="Device Connection" width={800} height="auto"/></p>

```bash
tools/clip-cli.py record --duration 60

```
想定される出力

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/recording.jpg" alt="Device Connection" width={800} height="auto"/></p>

```bash
tools/clip-cli.py sync --session 20260326120000
```
想定される出力

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/sync.jpg" alt="Device Connection" width={800} height="auto"/></p>

```bash
tools/clip-cli.py sync --session 20260326120000 --delete
```
想定される出力

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/delete.jpg" alt="Device Connection" width={800} height="auto"/></p>

```bash
tools/clip-cli.py config get
```
想定される出力

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/get_set.png" alt="Device Connection" width={800} height="auto"/></p>

```bash
tools/clip-cli.py bookmark
```

```bash
tools/clip-cli.py terminal
```

想定される出力

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/terminal.png" alt="Device Connection" width={800} height="auto"/></p>

#### WiFi

```bash
 tools/clip-cli.py wifi on
```
想定される出力

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/wifi-on.png" alt="Device Connection" width={800} height="auto"/></p>


```bash
tools/clip-cli.py --transport wifi status
```
想定される出力

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/wifi-status.png" alt="Device Connection" width={800} height="auto"/></p>



```bash
tools/clip-cli.py  wifi off
```
想定される出力

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/wifi-off.png" alt="Device Connection" width={800} height="auto"/></p>




### record.py

自動的に音声を録音し、同期します。

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
想定される出力

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/ble_terminal.png" alt="Device Connection" width={800} height="auto"/></p>

### decode_opus.py

Opus 録音を WAV に変換します。

```bash
python tools/decode_opus.py <input_file.opus> <output_file.wav>
```

---

## テストスクリプト

| File | 何をテストするか | Device? | Markers | Tests |
|------|---------------|---------|---------|-------|
| `test_basic.py` | 基本的な AT コマンド：VERSION、STATE、TIME、PAIR、無効なコマンド、エラー処理、再起動 | Yes | — | 12 |
| `test_config.py` | 設定：MODE、AUTODEL、BRIGHTNESS。サポートされていないコマンド（BITRATE、COMPLEXITY、CHUNKSIZE、NOISE、AGC、DEREVERB）が `CommandError` を送出することを検証 | Yes | — | 30 |
| `test_recording.py` | 録音制御：START/STOP、MARK ブックマーク、状態遷移（IDLE→RECORDING→IDLE）、継続時間の追跡、セッション ID | Yes | — | 13 |
| `test_storage.py` | ストレージ管理：セッション/ファイルの LIST、DELETE、セッションの永続性、サイズの正確さ、ファイル数 | Yes | stress | 21 |
| `test_transfer.py` | ファイル転送：セッションのダウンロード、同期、進行状況コールバック、同時ダウンロード、キャンセル/再開 | Yes | slow, stress | 21 |
| `test_unit.py` | ユニットテスト（ハードウェアなし）：データクラス、ユーティリティ関数、例外、opus マージ、デバイス初期化 | No | unit | 30 |

### テストの実行

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


## 完全な例

この例では、一般的なワークフローを示します：

1. BLE で自動接続
2. バッテリー残量を確認
3. 録音モードを強化モードに設定
4. 10 秒間の録音を開始
5. 録音中にブックマークを追加
6. 録音を停止
7. セッションファイルを `recordings/<session_id>/` に同期

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

**期待される出力**

```
Battery: 85%, Mode: normal
Recording started: 20260710_144500
Bookmark added at 5s
Recording stopped
Downloaded 2 file(s) → recordings/20260710_144500/
```

## スニペット概要

### 接続

#### デバイスに接続する

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

SDK は、名前に `Clip` を含む近くのデバイスを自動検出します。

#### 特定のデバイスに接続する

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

### デバイス情報

#### ファームウェアバージョンを読み取る

```python
version = await cmds.get_version()
print(version.firmware)   # e.g. "v1.0.0"
print(version.hardware)   # e.g. "Clip v0.0.5"
```

#### デバイス状態を読み取る

```python
state = await cmds.get_state()
print(state.state)      # IDLE, RECORDING, TRANSMITTING, PAUSED, ERROR
print(state.battery)    # 0-100
print(state.mode)       # normal, enhanced
print(state.bitrate)    # Opus bitrate in bps
```

#### デバイス時刻の読み取り / 設定

```python
import time

timestamp = await cmds.get_time()          # returns int (Unix timestamp)
await cmds.set_time(int(time.time()))      # returns True
```

---

### 音声の録音

#### 録音の開始 / 停止

```python
session_id = await cmds.start_recording("normal")   # returns str (session ID)
# ... record ...
await cmds.stop_recording()                          # returns dict with session info
```

> `"normal"` はモノラル、`"enhanced"` は DSP 事前処理（ノイズ抑制、AGC）を有効にします。

#### 録音の一時停止 / 再開

```python
await cmds.pause_recording()
await cmds.resume_recording()
```

#### ブックマークを追加（録音中）

```python
bookmark = await cmds.add_bookmark()
print(bookmark.offset)   # seconds from recording start
```

#### 録音のフル例

```python
session_id = await cmds.start_recording("normal")
await asyncio.sleep(10)
await cmds.stop_recording()
```

---

### ファイル同期

#### セッションを一覧表示

```python
sessions = await cmds.list_sessions()
for s in sessions:
    print(s.id, s.files, s.size)
```

#### セッションを同期（BLE）

```python
from pathlib import Path
from clip import SessionSync

session_id = "20260326120000"      # from cmds.list_sessions()
sync = SessionSync(device)

await sync.sync(session_id, Path("recordings"))
```

#### 中断されたダウンロードを再開

```python
await sync.sync(
    session_id,
    Path("recordings"),
    start_file="0015.opus"          # pick up where you left off
)
```

#### 同期後もデバイス上にファイルを保持

```python
await sync.sync(
    session_id,
    Path("recordings"),
    delete_after=False               # default: False (keep on device)
)
```

#### すべてのセッションを同期

```python
results = await sync.sync_all(Path("recordings"))
```

---

### 設定管理


#### パラメータを設定（動作コマンド）

```python
await cmds.set_mode("enhanced")          # normal | enhanced
await cmds.set_auto_delete(7)            # days (0-30), pass -1 to disable
await cmds.set_brightness(128)           # 0-255
```

#### パラメータを読み取る

```python
mode        = await cmds.get_mode()          # returns str
auto_delete = await cmds.get_auto_delete()   # returns bool
brightness  = await cmds.get_brightness()    # returns int
```

#### 一括設定

```python
await cmds.set_config_dict({
    "mode":         "enhanced",
    "auto_delete":  7,
    "brightness":   128,
})
```

---

### WiFi 通信

Clip は、AP が有効なときに WiFi UDP 経由で通信できます。

| パラメータ | 値              |
|-----------|-----------------|
| SSID      | `ClipAP_XXXX`   |
| Password  | `12345678` (default) |
| IP        | `192.168.4.1`   |
| Port      | `8089`          |

#### 接続して AT コマンドを送信

```python
from clip import WiFiDevice

async def main():
    async with WiFiDevice("192.168.4.1", 8089) as device:
        resp = await device.send_command("AT+GSTAT")
        print(resp)

asyncio.run(main())
```

#### WiFi 経由でセッションを同期（ブロッキング API）

```python
from pathlib import Path
from clip import WiFiSync

sync = WiFiSync("192.168.4.1", 8089)
sync.connect()
sync.download_session(session_id, Path("recordings"))
sync.disconnect()
```

> `WiFiSync` は**同期的**（ブロッキングソケット）です — `async`/`await` は不要です。

---

### エラー処理

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

## API リファレンス

### ClipDevice

***BLE デバイス通信および接続管理。***

| シグネチャ | 戻り値 | 備考 |
|-----------|---------|-------|
| `ClipDevice(address=None, name_filter="Clip", debug=False)` | `ClipDevice` | `address` が `None` の場合は自動検出 |
| `await connect(timeout=10.0, sync_time=True, lazy_device_name=False)` | `None` | 3 回リトライ；sync_time はデバイスの時計を自動設定 |
| `await disconnect()` | `None` | すべての BLE 通知を停止 |
| `await send_command(command, timeout=10.0)` | `dict` | AT コマンドを送信し、JSON レスポンスを取得 |
| `is_connected` | `bool` | プロパティ — `_connected` と `client.is_connected` の両方を確認 |
| `device_name` | `str | None` | プロパティ — 検出された場合のデバイス名 |
| `await __aenter__()` / `await __aexit__()` | `ClipDevice` / `None` | 非同期コンテキストマネージャ |

### ClipCommands

***高レベルの AT コマンドインターフェース。***

| シグネチャ | 戻り値 | 備考 |
|-----------|---------|-------|
| `await get_version()` | `VersionInfo` | `.firmware`, `.hardware`, `.sdk`, `.build` |
| `await get_state()` | `DeviceState` | `.state`, `.battery`, `.mode`, `.bitrate`, `.charging`, `.free_space` |
| `await get_time()` | `int` | Unix タイムスタンプ |
| `await set_time(timestamp)` | `bool` | `AT+TIME=<ts>` に変換 |
| `await get_pairing_status()` | `Dict[str, Any]` | BLE ペアリング状態 + ピアアドレス |
| `await reboot()` | `None` | デバイスを再起動 |
| **録音** | | |
| `await start_recording(mode="normal")` | `str` | `mode`: normal, enhanced, stereo, merge。セッション ID を返します。 |
| `await stop_recording()` | `Dict[str, Any]` | セッションのサマリ；デバイスが録音中でない場合も適切に処理 |
| `await pause_recording()` | `bool` | |
| `await resume_recording()` | `bool` | |
| `await add_bookmark()` | `BookmarkInfo` | セッション開始からの `.offset`（秒） |
| `await get_bookmarks(session_id, fetch_all=True)` | `List[BookmarkInfo]` | ページネーション対応、すべてのページを自動取得 |
| `await get_bookmarks_count(session_id)` | `int` | 詳細なしの高速カウント |
| **セッション** | | |
| `await list_sessions(page=1, per_page=10)` | `List[SessionInfo]` | `.id`, `.files`, `.size`, `.synced_files`, `.mode` |
| `await list_all_sessions(per_page=15)` | `List[SessionInfo]` | すべてを自動ページング |
| `await get_session_info(session_id)` | `SessionInfo` | `synced_files` カウントを含む |
| `await list_session_files(session_id)` | `List[str]` | セッション内のすべてのファイルのファイル名 |
| `await delete_session(session_id)` | `bool` | |
| `await purge_all_sessions()` | `bool` | |
| `await format_sd_card()` | `bool` | |
| **設定** | | |
| `await get_mode()` | `str` | |
| `await set_mode(mode)` | `bool` | `"normal"` または `"enhanced"` のみ |
| `await get_auto_delete()` | `bool` | |
| `await set_auto_delete(days)` | `bool` | `days`: 0–30、無効化するには `-1` を指定 |
| `await get_brightness()` | `int` | 0–255 |
| `await set_brightness(value)` | `bool` | 0–255 |
| `await get_device_name()` | `str` | BLE デバイス名 |
| `await set_device_name(name)` | `bool` | 最大 15 文字 |
| `await get_config_dict()` | `Dict[str, Any]` | すべての設定；未サポートのキーは `None` を返す |
| `await set_config_dict(config, ignore_errors=True)` | `None` | `None` の値をスキップ；未サポートのキーは黙って破棄 |
| `get/set_bitrate()` | — | **ファームウェア：未サポート** — `CommandError` を送出 |
| `get/set_complexity()` | — | **ファームウェア：未サポート** — `CommandError` を送出 |
| `get/set_chunk_size()` | — | **ファームウェア：未サポート** — `CommandError` を送出 |
| `get/set_noise_suppression()` | — | **ファームウェア：未サポート** — `CommandError` を送出 |
| `get/set_agc()` | — | **ファームウェア：未サポート** — `CommandError` を送出 |
| `get/set_dereverb()` | — | **ファームウェア：未サポート** — `CommandError` を送出 |
| **転送制御** | | |
| `await get_progress()` | `Dict[str, Any]` | ダウンロード進行状況 |
| `await pause_transfer()` | `bool` | |
| `await resume_transfer()` | `bool` | |
| `await cancel_transfer()` | `bool` | |
| **WiFi / USB** | | |
| `await wifi_on()` | `bool` | nRF7002 初期化のため 20 秒以上のタイムアウト |
| `await wifi_off()` | `bool` | |
| `await get_wifi_status()` | `Dict[str, Any]` | `.running`, `.ssid`, `.clients` |
| `await usb_on()` | `bool` | CDC + MSC |
| `await usb_off()` | `bool` | |
| `await get_usb_status()` | `bool` | |
| **ヘルパー** | | |
| `await ensure_idle()` | `None` | 必要に応じて録音を停止；最大 5 回までリトライ |
| `await wait_for_state(target, timeout=10.0)` | `bool` | 状態が一致するまでポーリング |
| `await wait_for_recording_to_start(timeout=5.0)` | `bool` | |
| `await wait_for_recording_to_stop(timeout=5.0)` | `bool` | |
| `await get_battery_status()` | `BatteryStatus` | `.percent`, `.charging`, `.voltage` |

### SessionSync

***再開サポート付きの BLE 経由ファイル同期。***

| シグネチャ | 戻り値 | 備考 |
|-----------|---------|-------|
| `SessionSync(device, commands=None)` | `SessionSync` | `FileTransfer` を拡張 |
| `await sync(session_id, output_dir, delete_after=False, continuous=False, force=False, progress_callback=None, session_info=None, start_file=None)` | `Dict[str, Any]` | 再開は自動検出；`file_count`, `total_size`, `files`, `merged_file` を返す |
| `await sync_all(output_dir, delete_after=False, progress_callback=None)` | `List[Dict]` | すべてのセッションを同期 |
| `await download_session(session_id, output_dir, progress_callback=None, stop_recording=False, continuous=False, timeout=300.0, start_file=None, session_info=None)` | `Dict[str, Any]` | 低レベル；`session.json` と `bookmarks.json` も保存 |
| `await cancel()` | `None` | スレッドセーフなキャンセル |

### WiFiDevice

***WiFi UDP トランスポート（非同期）— `ClipDevice.send_command` と互換性があります。***

| シグネチャ | 戻り値 | 備考 |
|-----------|---------|-------|
| `WiFiDevice(host="192.168.4.1", port=8089, timeout=10.0)` | `WiFiDevice` | |
| `await connect(timeout=None)` | `None` | 受信 + ハートビートのワーカースレッドを開始 |
| `await disconnect()` | `None` | |
| `await send_command(command, timeout=None)` | `dict` | JSON 解析された AT レスポンス |
| `is_connected` | `bool` | プロパティ |
| `await __aenter__()` / `await __aexit__()` | — | 非同期コンテキストマネージャ |

### WiFiSync

***WiFi UDP ファイル同期（ブロッキング／同期処理 — async は不要）。***

| シグネチャ | 戻り値 | 備考 |
|-----------|---------|-------|
| `WiFiSync(host="192.168.4.1", port=8089, timeout=120.0)` | `WiFiSync` | |
| `connect()` | `bool` | ブロッキング |
| `disconnect()` | `None` | |
| `download_session(session_id, output_dir, convert_ogg=True, start_file=None, delete_after=False, progress_callback=None, cancel_after=None)` | `bool` | CRC 検証済み；tqdm 進行表示；'c' キーでキャンセル |
| `list_sessions()` | `List[dict]` | ページネーション対応 |
| `delete_session(session_id)` | `bool` | |

### 例外

| 例外 | 基底クラス | 説明 |
|-----------|------|-------------|
| `ClipError` | `Exception` | すべてのライブラリエラーの基底クラス |
| `ConnectionError` | `ClipError` | BLE または WiFi 接続の失敗 |
| `DisconnectedError` | `ClipError` | 想定外の切断 |
| `CommandError` | `ClipError` | AT コマンドがエラーを返した；`.command` 属性を参照 |
| `TransferError` | `ClipError` | ファイル転送処理が失敗 |
| `TimeoutError` | `ClipError` | コマンド／転送がタイムアウト |
| `ResponseError` | `ClipError` | 無効または想定外のレスポンス |
| `StateError` | `ClipError` | 操作に対してデバイスの状態が不適切 |



---

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じてお選びいただける複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
