---
description: reSpeaker Clip Basic SDK の体系的なガイド — トランスポート、通信プロトコル、録音ステートマシン、ファイルモデル、エンドツーエンドのデータフロー、および CLI と Web ツールを備えた Python SDK を主なリファレンス実装として解説します。
title: reSpeaker Clip Basic SDK ガイド
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
url: https://wiki.seeedstudio.com/ja/respeaker_clip_basic_sdk_guide/
---

# reSpeaker Clip Basic SDK ガイド

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-banner.jpg" alt="reSpeaker Clip" width={800} height="auto" /></p>

> Version: `clip` パッケージの `__version__ = 1.0.0` に対応  
> Product: reSpeaker Clip ウェアラブルレコーダー

## 概要

reSpeaker Clip Basic SDK ガイドでは、ホスト側アプリケーションが BLE、Wi-Fi、AT コマンド、GATT、およびファイル転送ワークフローを通じてデバイスと通信し制御する方法を説明します。Python SDK は、CLI と Web ベースのツールとともに、主なリファレンス実装として提供されます。

このガイドでは次の内容を扱います：

- **トランスポート** — BLE と Wi-Fi/UDP 通信チャネル。
- **通信プロトコル** — AT コマンド、GATT キャラクタリスティック、およびファイル転送フレーミング。
- **録音モデル** — 録音モード、デバイスステートマシン、およびファイル形式。
- **エンドツーエンドのデータフロー** — 接続から音声出力のダウンロードまで。
- **リファレンス実装** — Python SDK（`clip` パッケージ）、CLI ツール、および Web インターフェース。

Basic SDK は、ホスト側からデバイスの現在の機能を利用することに焦点を当てています。クラウド文字起こし、AI 要約、アカウント管理、モバイルアプリサービス自体は含まれません。これらのワークフローは、ダウンロードした音声ファイルの上に構築するか、別のサービスと統合して実装してください。デバイス側の動作、プロトコル、音声処理、またはファームウェア内部を変更する場合は、[Firmware SDK ドキュメント](#basic-sdk-と-firmware-sdk)を参照してください。

## 本ガイドの位置付け

reSpeaker Clip を初めて使用する場合は、まず [reSpeaker Clip 入門ガイド](/ja/respeaker_clip) をお読みください。

入門ガイドでは、製品、対象シナリオ、ハードウェア機能、および通常のユーザーワークフローを紹介します。

本ガイドはアプリケーション側の開発に焦点を当てています：

- BLE または Wi-Fi 経由でデバイスと通信すること；
- 録音およびデバイス設定を制御すること；
- 録音セッションを管理およびダウンロードすること；
- AT コマンド、GATT、およびファイル転送プロトコルを理解すること；
- これらの機能を Python、CLI、または Web ツールを通じて統合すること。

デバイス側の動作、プロトコル、音声処理、またはファームウェア内部を変更する場合は、[Firmware SDK ドキュメント](#basic-sdk-と-firmware-sdk)を参照してください。

## インストール

### 必要条件

- Python 3.10 以上
- Bluetooth アダプタ（BLE モード）
- Wi-Fi アダプタ（Wi-Fi モード）

### リポジトリのクローン

GitHub リポジトリは[こちら](https://github.com/Seeed-Projects/respeaker_clip_python/tree/main)にあります。

```bash
git clone <repository-url>
```

### 依存関係のインストール

仮想環境を有効化した後、必要な依存関係をインストールします：

```bash
pip install -r requirements.txt
```

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
| client.py     | BLE デバイス通信        |
| commands.py   | 高レベル AT コマンド    |
| transfer.py   | ファイル同期             |
| codec.py      | 音声エンコード/デコード |
| wifi.py       | WiFi トランスポート      |
| progress.py   | 進行状況表示             |
| utils.py      | ヘルパー関数             |
| exceptions.py | 例外クラス               |

---

## SDK の機能

Python SDK は次のワークフローをサポートします：

- **デバイスの設定**：録音モード、ビットレート、複雑度、自動削除ポリシー、OLED 輝度、BLE デバイス名、および関連設定。
- **録音の制御**：開始、停止、一時停止、再開、ブックマークの追加。
- **セッションの管理**：一覧表示、クエリ、削除、パージ、および SD カードのフォーマット。
- **ファイルのダウンロード**：BLE または Wi-Fi/UDP 経由で録音を転送し、レジュームをサポート。
- **音声の変換**：デバイスの生の Opus データを OGG/Opus コンテナに再格納するか、Opus デコード経路を通じて 16 kHz モノラル WAV にデコード。
- **ステータスとイベントの読み取り**：バッテリーレベル、充電状態、デバイス状態、ステートマシンの変化、およびリアルタイム音声可視化コールバック。

トランスポートの選択は重要です：

- ポータブルな設定、録音制御、小規模なダウンロードには `ClipDevice` を通じて BLE を使用します。
- 大量ダウンロードには `WiFiDevice` または `WiFiSync` を通じて Wi-Fi/UDP を使用します。大きな録音セッションに対して、より高速かつ安定しています。
- 録音制御は BLE のみ対応です。ファイルダウンロードは BLE と Wi-Fi の両方で動作します。

## コアコンセプト

### トランスポート

| Transport | Class | Use case | Notes |
| --- | --- | --- | --- |
| BLE | `ClipDevice` | 設定、録音制御、セッションのダウンロード | ポータブルであり、録音制御に必須。大量ダウンロードでは遅くなったり、負荷が高いと通知がドロップする場合があります。 |
| Wi-Fi/UDP | `WiFiDevice` / `WiFiSync` | 大量セッションのダウンロード | 大きなファイルに対してより高速かつ安定。デバイスで Wi-Fi を有効にし、`ClipAP_XXXX` に接続する必要があります。 |

### 録音モード

| Mode | Description |
| --- | --- |
| `normal` | SpeexDSP ノイズ抑制 / デリバーブなしの標準録音パス。デバイスの AGC、ハイパス、およびリミッターは、ファームウェアによって有効になっている場合があります。 |
| `enhanced` | SpeexDSP ノイズ抑制およびデリバーブが有効な拡張パス。 |

`set_mode()` は `normal` と `enhanced` のみを受け付けます。`start_recording()` はエイリアスとして `stereo` と `merge` も受け付けます；`stereo` は `normal` に、`merge` は `enhanced` にマッピングされます。

どちらのモードも、デフォルトではモノラル 16 kHz Opus を出力します。

### デバイス状態

録音はセッションとして表現されます。セッション ID は通常、`YYYYMMDDHHMMSS` のようなタイムスタンプ形式の文字列です。

```text
IDLE --start_recording--> RECORDING --stop_recording--> IDLE
                              |
                              | pause / resume
                              v
                            PAUSED
```

一般的なデバイス状態には、`IDLE`、`RECORDING`、`TRANSMITTING`、`PAUSED`、`ERROR` があります。

接続時に、SDK は `AT+TIME` を通じてデバイスの時計を同期できます。デバイスのタイムゾーンはホストのタイムゾーンと異なる場合があります。

### ファイル形式

デバイスは録音データを OGG コンテナではなく、生の Opus フレームとして保存します。生フォーマットは、長さ付きの Opus フレームのシーケンスです：

```text
[2-byte little-endian length][opus frame][2-byte little-endian length][opus frame]...
```

録音を OGG/Opus 入力を想定するツールに渡す前に、有効な `.ogg` ファイルを書き出すには `convert_to_ogg_opus()` を使用します。WAV デコードには、`opuslib` のような Opus デコーダ経路が必要です。

### AT コマンドプロトコル

- SDK は UTF-8 の AT 文字列（例：`AT+MODE=enhanced`）を CMD キャラクタリスティックに書き込みます。
- 応答は `RESP_SEND` 上の JSON 通知であり、例えば `{"ok":true,"data":{...}}` のようになります。
- 状態変化などの自発イベントは `{"event":"state","state":"RECORDING",...}` のような形式で、`event_callback` を通じてディスパッチされます。

### GATT キャラクタリスティック

| Characteristic | UUID | Properties | Purpose |
| --- | --- | --- | --- |
| Service | `6E400001-B5A3-F393-E0A9-E50E24DCCA9E` | Primary Service | カスタム BLE 通信サービス |
| CMD | `6E400002-B5A3-F393-E0A9-E50E24DCCA9E` | Write Without Response (Encrypted) | セントラル → デバイス：AT コマンド文字列の書き込み |
| RESP_SEND | `6E400003-B5A3-F393-E0A9-E50E24DCCA9E` | Notify (CCC Encrypted) | デバイス → セントラル：JSON 応答およびイベント通知 |
| FILE_DATA | `6E400004-B5A3-F393-E0A9-E50E24DCCA9E` | Notify (CCC Encrypted) | デバイス → セントラル：バイナリファイル転送フレーム通知 |
| AUDIO_VIS | `6E400005-B5A3-F393-E0A9-E50E24DCCA9E` | Notify (CCC Encrypted) | デバイス → セントラル：リアルタイム音声可視化通知 |

### ファイル転送プロトコル

ファイルデータは `FILE_DATA` 上のバイナリフレームとして送信されます。

| Frame | Type | Layout |
| --- | --- | --- |
| `FILE_START` | `0x10` | `type(1) + fn_len(1) + filename(N) + file_size(4, LE)` |
| `DATA` | `0x01` | `type(1) + seq(2, LE) + len(2, LE) + data(N)` |
| `FILE_END` | `0x11` | `type(1) + crc32(4, LE)` |
| `TRANSFER_DONE` | `0x12` | `type(1) + sid_len(1) + session_id(N) + file_count(4, LE)` |

各ファイルは CRC32 で検証されます。検証済みファイルのみを、正常に保存されたものとして扱うべきです。

### レジューム

`SessionSync.sync()` はレジューム対応です。既存のローカル `.opus` ファイルを検出し、デバイスの同期済みファイルカウンタをクエリし、`start_file` を計算して、以前のダウンロードを継続できます。最初からやり直すには `force=True` を使用します。

### データフロー

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_data_flow.png" alt="reSpeaker Clip data flow" width={900} height="auto" /></p>

## Basic SDK と Firmware SDK

reSpeaker Clip SDK は 2 つのレイヤに分かれています：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_basic_firmware.png" alt="Basic SDK vs Firmware SDK" width={900} height="auto" /></p>

このガイドで紹介した概念（トランスポート、プロトコル、ステートマシン、データフロー）は、ファームウェアによってデバイス側で実装されています。以下の表は、各 Basic SDK の概念と Firmware SDK における対応関係を示しています：

| Basic SDK の概念 | Firmware SDK における対応 |
| --- | --- |
| BLE / Wi-Fi トランスポート | デバイス側の BLE および UDP サービス実装 |
| AT コマンド | AT サーバーとコマンド登録 |
| GATT | GATT サービスとキャラクタリスティック |
| 録音ステートマシン | デバイスの録音状態とイベント処理 |
| ファイル転送 | ストレージ、チャンク分割、CRC、および同期の実装 |
| オーディオデータフロー | PDM → DSP → Opus → ファイルパイプライン |

新しい AT コマンドの追加、GATT サービスの変更、録音ステートマシンの修正、またはオーディオ処理チェーンの変更が目的であれば、Firmware SDK が必要です。Firmware SDK のドキュメント（ファームウェアアーキテクチャ、環境構築、ビルド、書き込み、二次開発）はまだ利用できず、準備が整い次第公開されます。

## 完全なサンプル

このサンプルは典型的なワークフローを示します：

1. BLE による自動接続
2. バッテリーレベルの確認
3. 録音モードを enhanced に設定
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

#### デバイスに接続

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

#### 特定のデバイスに接続

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

#### デバイスタイムの読み取り / 設定

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

#### ブックマークの追加（録音中）

```python
bookmark = await cmds.add_bookmark()
print(bookmark.offset)   # seconds from recording start
```

#### 録音のフルサンプル

```python
session_id = await cmds.start_recording("normal")
await asyncio.sleep(10)
await cmds.stop_recording()
```

---

### ファイル同期

#### セッションの一覧

```python
sessions = await cmds.list_sessions()
for s in sessions:
    print(s.id, s.files, s.size)
```

#### セッションの同期（BLE）

```python
from pathlib import Path
from clip import SessionSync

session_id = "20260326120000"      # from cmds.list_sessions()
sync = SessionSync(device)

await sync.sync(session_id, Path("recordings"))
```

#### 中断されたダウンロードの再開

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


#### パラメータの設定（動作コマンド）

```python
await cmds.set_mode("enhanced")          # normal | enhanced
await cmds.set_auto_delete(7)            # days (0-30), pass -1 to disable
await cmds.set_brightness(128)           # 0-255
```

#### パラメータの読み取り

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

| パラメータ | 値           |
|-----------|-----------------|
| SSID      | `ClipAP_XXXX`   |
| Password  | `12345678` (デフォルト) |
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

> `WiFiSync` は**同期的**（ブロッキングソケット）であり、`async`/`await` は不要です。

---

### エラーハンドリング

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

## コマンドラインツール

SDK には、すぐに使えるユーティリティがいくつか含まれています。

### clip-cli - 統合 CLI

#### BLE（デフォルト）

汎用 CLI です。

```bash
tools/clip-cli.py status
```

期待される出力

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/status.jpg" alt="Device Connection" width={800} height="auto"/></p>

```bash
tools/clip-cli.py version
```
```bash
tools/clip-cli.py list
```

期待される出力

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/list.png" alt="Device Connection" width={800} height="auto"/></p>

```bash
tools/clip-cli.py record --duration 60

```
期待される出力

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/recording.jpg" alt="Device Connection" width={800} height="auto"/></p>

```bash
tools/clip-cli.py sync --session 20260326120000
```
期待される出力

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/sync.jpg" alt="Device Connection" width={800} height="auto"/></p>

```bash
tools/clip-cli.py sync --session 20260326120000 --delete
```
期待される出力

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/delete.jpg" alt="デバイス接続" width={800} height="auto"/></p>

```bash
tools/clip-cli.py config get
```
期待される出力

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/get_set.png" alt="デバイス接続" width={800} height="auto"/></p>

```bash
tools/clip-cli.py bookmark
```

```bash
tools/clip-cli.py terminal
```

期待される出力

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/terminal.png" alt="デバイス接続" width={800} height="auto"/></p>

#### WiFi

```bash
 tools/clip-cli.py wifi on
```
期待される出力

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/wifi-on.png" alt="デバイス接続" width={800} height="auto"/></p>


```bash
tools/clip-cli.py --transport wifi status
```
期待される出力

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/wifi-status.png" alt="デバイス接続" width={800} height="auto"/></p>



```bash
tools/clip-cli.py  wifi off
```
期待される出力

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/wifi-off.png" alt="デバイス接続" width={800} height="auto"/></p>




### record.py

自動的に音声を録音し、同期します。

```bash
python tools/record.py

python tools/record.py --duration 60

python tools/record.py --mode enhanced
```
期待される出力

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/recording.png" alt="デバイス接続" width={800} height="auto"/></p>

### sync.py

BLE 経由で録音を同期します。

```bash
python tools/sync.py

python tools/sync.py --all-sessions
```
期待される出力

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/sync_tools.png" alt="デバイス接続" width={800} height="auto"/></p>

### udp_sync.py

WiFi 経由で録音を同期します。

```bash
python tools/udp_sync.py

python tools/udp_sync.py --session 20260326120000
```

期待される出力

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/udp_sync.png" alt="デバイス接続" width={800} height="auto"/></p>

### ble_terminal.py

対話型 AT コマンドターミナル。

```bash
python tools/ble_terminal.py
```
期待される出力

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/ble_terminal.png" alt="デバイス接続" width={800} height="auto"/></p>

### decode_opus.py

Opus 録音を WAV に変換します。

```bash
python tools/decode_opus.py <input_file.opus> <output_file.wav>
```

---

## Web インターフェース

内蔵 Web アプリケーションを起動します。

BLE モード：

```bash
python tools/clip-web.py
```

Wi-Fi モード：

```bash
python tools/clip-web.py --transport wifi
```

その後、次を開きます：

```text
http://localhost:5000
```

### 機能

- デバイスステータス
- 録音コントロール
- セッション管理
- 音声の可視化
- 設定エディタ
- 同期進行状況

### REST API

| メソッド | エンドポイント |
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

## コアモジュール

| モジュール | 主な目的 |
| --- | --- |
| `ClipDevice` | BLE 接続、ペアリング、AT コマンド転送、通知、および転送進行状況 |
| `ClipCommands` | デバイス AT コマンド用の高レベルラッパー |
| `FileTransfer` / `SessionSync` | BLE セッションのダウンロードと再開対応の同期 |
| `WiFiDevice` / `WiFiSync` | 大容量転送向けの Wi-Fi/UDP ダウンロードワークフロー |
| `codec` | 生の Opus フレーム解析と OGG/Opus 書き込み |
| `utils` | セッション ID の解析、フォーマット用ヘルパー、設定読み込み、進行状況レポート、ファイルユーティリティ |
| `exceptions` | SDK 固有の例外クラス |

## API リファレンス

### ClipDevice

***BLE デバイス通信と接続管理。***

| シグネチャ | 戻り値 | 備考 |
|-----------|---------|-------|
| `ClipDevice(address=None, name_filter="Clip", debug=False)` | `ClipDevice` | `address` が `None` の場合は自動検出 |
| `await connect(timeout=10.0, sync_time=True, lazy_device_name=False)` | `None` | 3 回リトライ；sync_time はデバイス時計を自動設定 |
| `await disconnect()` | `None` | すべての BLE 通知を停止 |
| `await send_command(command, timeout=10.0)` | `dict` | AT コマンドを送信し、JSON レスポンスを取得 |
| `is_connected` | `bool` | プロパティ — `_connected` と `client.is_connected` の両方を確認 |
| `device_name` | `str | None` | プロパティ — 検出された場合のデバイス名 |
| `await __aenter__()` / `await __aexit__()` | `ClipDevice` / `None` | 非同期コンテキストマネージャ |

### ClipCommands

***高レベル AT コマンドインターフェース。***

| シグネチャ | 戻り値 | 備考 |
|-----------|---------|-------|
| `await get_version()` | `VersionInfo` | `.firmware`, `.hardware`, `.sdk`, `.build` |
| `await get_state()` | `DeviceState` | `.state`, `.battery`, `.mode`, `.bitrate`, `.charging`, `.free_space` |
| `await get_time()` | `int` | Unix タイムスタンプ |
| `await set_time(timestamp)` | `bool` | `AT+TIME=<ts>` に変換 |
| `await get_pairing_status()` | `Dict[str, Any]` | BLE ペアリング状態とピアアドレス |
| `await reboot()` | `None` | デバイスを再起動 |
| **録音** | | |
| `await start_recording(mode="normal")` | `str` | `mode`: normal, enhanced, stereo, merge。セッション ID を返す。 |
| `await stop_recording()` | `Dict[str, Any]` | セッション概要；デバイスが録音中でない場合も適切に処理 |
| `await pause_recording()` | `bool` | |
| `await resume_recording()` | `bool` | |
| `await add_bookmark()` | `BookmarkInfo` | セッション開始からの `.offset`（秒） |
| `await get_bookmarks(session_id, fetch_all=True)` | `List[BookmarkInfo]` | ページネーション対応、すべてのページを自動取得 |
| `await get_bookmarks_count(session_id)` | `int` | 詳細なしの高速カウント |
| **セッション** | | |
| `await list_sessions(page=1, per_page=10)` | `List[SessionInfo]` | `.id`, `.files`, `.size`, `.synced_files`, `.mode` |
| `await list_all_sessions(per_page=15)` | `List[SessionInfo]` | すべてのページを自動処理 |
| `await get_session_info(session_id)` | `SessionInfo` | `synced_files` カウントを含む |
| `await list_session_files(session_id)` | `List[str]` | セッション内のすべてのファイル名 |
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
| `await get_config_dict()` | `Dict[str, Any]` | すべての設定；未対応キーは `None` を返す |
| `await set_config_dict(config, ignore_errors=True)` | `None` | `None` 値をスキップ；未対応キーは黙って無視 |
| `get/set_bitrate()` | — | **ファームウェア：未対応** — `CommandError` を送出 |
| `get/set_complexity()` | — | **ファームウェア：未対応** — `CommandError` を送出 |
| `get/set_chunk_size()` | — | **ファームウェア：未対応** — `CommandError` を送出 |
| `get/set_noise_suppression()` | — | **ファームウェア：未対応** — `CommandError` を送出 |
| `get/set_agc()` | — | **ファームウェア：未対応** — `CommandError` を送出 |
| `get/set_dereverb()` | — | **ファームウェア：未対応** — `CommandError` を送出 |
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
| `await ensure_idle()` | `None` | 必要に応じて録音を停止；最大 5 回リトライ |
| `await wait_for_state(target, timeout=10.0)` | `bool` | 状態が一致するまでポーリング |
| `await wait_for_recording_to_start(timeout=5.0)` | `bool` | |
| `await wait_for_recording_to_stop(timeout=5.0)` | `bool` | |
| `await get_battery_status()` | `BatteryStatus` | `.percent`, `.charging`, `.voltage` |

### SessionSync

***再開サポート付き BLE ファイル同期。***

| シグネチャ | 戻り値 | 備考 |
|-----------|---------|-------|
| `SessionSync(device, commands=None)` | `SessionSync` | `FileTransfer` を拡張 |
| `await sync(session_id, output_dir, delete_after=False, continuous=False, force=False, progress_callback=None, session_info=None, start_file=None)` | `Dict[str, Any]` | 再開は自動検出；`file_count`, `total_size`, `files`, `merged_file` を返す |
| `await sync_all(output_dir, delete_after=False, progress_callback=None)` | `List[Dict]` | すべてのセッションを同期 |
| `await download_session(session_id, output_dir, progress_callback=None, stop_recording=False, continuous=False, timeout=300.0, start_file=None, session_info=None)` | `Dict[str, Any]` | 低レベル；`session.json` と `bookmarks.json` も保存 |
| `await cancel()` | `None` | スレッドセーフなキャンセル |

### WiFiDevice

***WiFi UDP トランスポート（非同期）— `ClipDevice.send_command` と互換。***

| シグネチャ | 戻り値 | 備考 |
|-----------|---------|-------|
| `WiFiDevice(host="192.168.4.1", port=8089, timeout=10.0)` | `WiFiDevice` | |
| `await connect(timeout=None)` | `None` | 受信およびハートビートワーカーを開始 |
| `await disconnect()` | `None` | |
| `await send_command(command, timeout=None)` | `dict` | JSON 解析された AT レスポンス |
| `is_connected` | `bool` | プロパティ |
| `await __aenter__()` / `await __aexit__()` | — | 非同期コンテキストマネージャ |

### WiFiSync

***WiFi UDP ファイル同期（ブロッキング/同期型 — 非同期処理は不要）。***

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
| `ConnectionError` | `ClipError` | BLE または WiFi 接続失敗 |
| `DisconnectedError` | `ClipError` | 予期しない切断 |
| `CommandError` | `ClipError` | AT コマンドがエラーを返した；`.command` 属性あり |
| `TransferError` | `ClipError` | ファイル転送処理が失敗 |
| `TimeoutError` | `ClipError` | コマンド/転送がタイムアウト |
| `ResponseError` | `ClipError` | 無効または予期しないレスポンス |
| `StateError` | `ClipError` | デバイスが操作に対して不適切な状態 |



---

## トラブルシューティング

**Q1: 接続後にコマンドがハングしたりタイムアウトします。**  
コマンドキャラクタリスティックには暗号化された BLE リンクが必要です。SDK はペアリングを開始できますが、OS が Bluetooth のペアリングまたは認可ダイアログを表示する場合があります。手動で承認してください。接続がまだ固まっている場合は、古いボンディング情報を削除して再接続してください。

**Q2: ダウンロードで CRC 不一致またはファイル数 0 が報告されます。**  
BLE スタックは、負荷が高いときに通知を重複して届けたりフレームを落としたりすることがあります。切断して再接続し、再試行してください。`SessionSync` を使用すると、可能な場合は転送を途中から再開できます。

**Q3: ダウンロードが遅い、または途中で切断されます。**  
再開対応の BLE 転送には `SessionSync` を使用してください。大量の録音データには、`WiFiSync` を使った Wi-Fi ダウンロードを利用します：Clip で Wi-Fi を有効にし、`ClipAP_XXXX` に接続してから Wi-Fi 経由でダウンロードします。

**Q4: `delete_after=True` により、完全にダウンロードされていないセッションが削除されました。**  
より安全なパターンを使用してください：`sync(force=True, delete_after=False)` を実行し、ローカルの `merged_file` が存在し空でないことを確認してから、手動で `cmds.delete_session(session_id)` を呼び出します。

**Q5: `AT+NOISE`、`AT+DEREVERB`、または `AT+AGC` が `Unknown command` を返します。**  
現在のファームウェアでは、これらのオプションコマンドが登録されていない場合があります。SDK は互換性のあるファームウェアバージョン向けにラッパーを保持しています。設定を復元する場合、`set_config_dict(..., ignore_errors=True)` を使うと未対応の値をスキップできます。

**Q6: `bleak` が `'BleakClient' object has no attribute 'get_services'` や `'get_mtu'` などのエラーを投げます。**  
`bleak` の API はバージョンによって異なります。インストールパッケージがリリースされた後は、SDK でテスト済みの依存関係セットを使用してください。

**Q7: 録音が無音、または音質が悪いです。**  
マイクの距離と向き、バッテリー残量、録音モードを確認してください。`enhanced` モードはノイズをより積極的に抑制するため、非常にクリアな音声を過度に処理してしまう場合があります。

**Q8: セッション ID のタイムスタンプがローカル時間と一致しません。**  
デバイスの時計またはタイムゾーンがホストと異なる可能性があります。SDK は接続時に時刻を同期できます。`await cmds.set_time(int(time.time()))` を呼び出すこともできます。

**Q9: STT や ML 用に Opus を WAV に変換するにはどうすればよいですか？**  
OGG/Opus 出力には `convert_to_ogg_opus()` を使用してください。WAV にするには、`opuslib` などの Opus デコーダで生の Opus ストリームをデコードします。

**Q10: 録音中にログがオーディオ可視化イベントであふれます。**  
`AUDIO_VIS` 通知は高頻度で発生します。必要なときだけオーディオ可視化コールバックを登録し、コールバックは軽量に保ってください。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
