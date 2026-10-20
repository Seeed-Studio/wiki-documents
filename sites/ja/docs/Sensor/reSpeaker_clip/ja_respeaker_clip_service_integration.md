---
description: デバイスアダプタ、アプリケーションライフサイクル管理、API ルート、本番環境でも安全な状態管理を用いて、既存の Python サービスに reSpeaker Clip を統合します。
title: 既存サービスに reSpeaker Clip を統合する
keywords:
  - reSpeaker Clip
  - サービス統合
  - Python サービス
  - FastAPI
  - オーディオソース
  - デバイスアダプタ
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-banner.jpg
slug: /respeaker_clip_service_integration
sku: 100020126
last_update:
  date: 10/19/2026
  author: Ray
createdAt: '2026-08-07'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/ja/respeaker_clip_service_integration/
---

# 既存サービスに reSpeaker Clip を統合する

このガイドでは、既存の Python サービスに reSpeaker Clip を管理されたオーディオソースとして追加する方法を説明します。統合の境界に焦点を当て、1 つのデバイスアダプタ、1 つの長寿命接続、小さな API サーフェス、明確な状態の所有関係という形で設計します。

> **reSpeaker Clip は入力ソースです。** `ClipClient` はデバイスとの通信を処理し、`ClipService` はそれをアプリケーションに適合させ、処理およびビジネスロジックの所有権は引き続きあなたのサービス側にあります。

トランスポートのセットアップ、完全な `ClipClient` API、AT コマンド、ファイル転送プロトコルについては、[reSpeaker Clip Basic SDK ガイド](/ja/respeaker_clip_basic_sdk_guide) を参照してください。このページでは BLE/GATT、フレームフォーマット、CRC 処理、CLI ツールについては再説明しません。

## 統合アプローチ

デバイスを狭いアダプタの背後に隠し、ダウンロードした録音を、サービスがすでに使用している処理エントリポイントへ送ります：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_existing_service_clip_as_new_audio_source_v2.png" alt="Existing service with reSpeaker Clip as a new audio source" width={900} height="auto" /></p>

1. 物理デバイスごとに 1 つの `ClipService` を作成します。
2. アプリケーションの起動時に接続し、シャットダウン時に切断します。
3. サービスが必要とする録音操作だけを公開します。
4. 完了したオーディオファイルを既存の処理パイプラインに渡します。

## 始める前に

このガイドでは、すでに自分のマシン上で Clip と通信できることを前提としています。先に進む前に、次のことができるか確認してください：

- reSpeaker Clip Python SDK をインストールし、Clip に接続できる；
- 録音を開始および停止できる；
- 完了したセッションを一覧表示できる；
- 録音を 1 件、正常にダウンロードできる。

これらのいずれかが失敗する場合は、ここで一旦止まり、まず [reSpeaker Clip Basic SDK ガイド](/ja/respeaker_clip_basic_sdk_guide) を完了してください。Basic SDK ガイドは、トランスポート設定、デバイスコマンド、ファイル転送の詳細に関する信頼できる情報源であり、このガイドはそれらを繰り返すのではなく参照します。

## 適切な reSpeaker Clip ガイドを選ぶ

reSpeaker Clip のドキュメントは開発レイヤーごとに整理されています。製品セットアップと通常のワークフローについては **Getting Started** から始めてください。ホストアプリケーションがデバイスを制御したり録音をダウンロードしたりする必要がある場合は **Basic SDK** を使用します。長時間稼働するサービスがデバイス接続を所有し API を公開する必要がある場合は **Service Integration** に進みます。デバイス側の動作、プロトコル、オーディオ処理を変更する必要がある場合のみ **Firmware SDK** を使用してください。

<div className="row">
  <div className="col col--6 margin-bottom--lg">
    <a [LINE_58]      href="/ja/respeaker_clip/"
      aria-label="Open the reSpeaker Clip Getting Started guide"
      className="card shadow--md respeaker-clip-nav-card"
      style={{position: 'relative', display: 'block', overflow: 'hidden', borderRadius: '18px', color: '#172033', textDecoration: 'none'}}
      >
    <img
      src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-style/respeaker_clip_nav_getting_started.png"
        alt=""
        style={{display: 'block', width: '100%', aspectRatio: '2.5 / 1', objectFit: 'cover'}}
        />
      <div style={{position: 'absolute', top: '50%', right: '5%', left: '49%', transform: 'translateY(-50%)'}}>
      <h3 style={{margin: '0 0 0.4rem', fontSize: '1.05rem'}}>Getting Started</h3>
        <p style={{margin: 0, fontSize: '0.78rem', lineHeight: 1.45}}>製品概要、ハードウェアセットアップ、初回利用時のワークフロー。</p>
        </div>
      </a>
    </div>

  <div className="col col--6 margin-bottom--lg">
  <a [LINE_77]      href="/ja/respeaker_clip_basic_sdk_guide/"
    aria-label="Open the reSpeaker Clip Basic SDK guide"
      className="card shadow--md respeaker-clip-nav-card"
      style={{position: 'relative', display: 'block', overflow: 'hidden', borderRadius: '18px', color: '#172033', textDecoration: 'none'}}
      >
      <img
    src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-style/respeaker_clip_nav_basic_sdk.png"
      alt=""
        style={{display: 'block', width: '100%', aspectRatio: '2.5 / 1', objectFit: 'cover'}}
        />
        <div style={{position: 'absolute', top: '50%', right: '5%', left: '49%', transform: 'translateY(-50%)'}}>
      <h3 style={{margin: '0 0 0.4rem', fontSize: '1.05rem'}}>Basic SDK</h3>
      <p style={{margin: 0, fontSize: '0.78rem', lineHeight: 1.45}}>ファームウェアを変更せずに、デバイスを制御し、録音を管理し、オーディオをダウンロードします。</p>
        </div>
        </a>
      </div>

  <div className="col col--6 margin-bottom--lg">
    <a [LINE_96]      href="/ja/respeaker_clip_service_integration/"
  aria-label="Open the reSpeaker Clip Service Integration guide"
    aria-current="page"
      className="card shadow--md respeaker-clip-nav-card respeaker-clip-nav-card--active"
      style={{position: 'relative', display: 'block', overflow: 'hidden', borderRadius: '18px', color: '#172033', textDecoration: 'none'}}
      >
      <img
      src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-style/respeaker_clip_nav_service_integration.png"
    alt=""
      style={{display: 'block', width: '100%', aspectRatio: '2.5 / 1', objectFit: 'cover'}}
        />
        <div style={{position: 'absolute', top: '50%', right: '4%', left: '54%', transform: 'translateY(-50%)'}}>
        <h3 style={{margin: '0 0 0.4rem', fontSize: '1.05rem'}}>Service Integration</h3>
      <p style={{margin: 0, fontSize: '0.78rem', lineHeight: 1.45}}>アダプタと API ルートを通じて、長時間稼働する Python サービスに reSpeaker Clip を追加します。</p>
      </div>
        </a>
        </div>

    <div className="col col--6 margin-bottom--lg">
  <a [LINE_116]      href="/ja/respeaker_clip_firmware_quick_start/"
      aria-label="Open the reSpeaker Clip Firmware SDK quick start"
  className="card shadow--md respeaker-clip-nav-card"
    style={{position: 'relative', display: 'block', overflow: 'hidden', borderRadius: '18px', color: '#172033', textDecoration: 'none'}}
      >
      <img
      src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-style/respeaker_clip_nav_firmware_sdk.png"
      alt=""
    style={{display: 'block', width: '100%', aspectRatio: '2.5 / 1', objectFit: 'cover'}}
      />
        <div style={{position: 'absolute', top: '50%', right: '5%', left: '49%', transform: 'translateY(-50%)'}}>
        <h3 style={{margin: '0 0 0.4rem', fontSize: '1.05rem'}}>Firmware SDK</h3>
        <p style={{margin: 0, fontSize: '0.78rem', lineHeight: 1.45}}>デバイス側の動作をビルド、書き込み、デバッグし、カスタマイズします。</p>
      </div>
      </a>
        </div>
        </div>

    ## 既存サービスに reSpeaker Clip をオーディオソースとして追加する

以下の手順に従って、デバイスアダプタを既存の FastAPI サービスに接続します。

### ステップ 1: パイプラインを準備する

サービスにはすでに、オーディオファイルを受け取る関数が 1 つあると仮定します：

__CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__
```python

    # your existing processing pipeline

```
__CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__
```python
@app.post("/audio")

    path = await save_upload(file)

```

__CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__


# audio_service.py
from pathlib import Path



    def __init__(self, recordings_dir: Path):
        self.recordings_dir = recordings_dir
        self.recordings_dir.mkdir(parents=True, exist_ok=True)

    async def process(self, path: Path) -> dict:

```

__CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__
__CODE_LINE_PLH__

# clip_service.py



from clip import ClipClient, ClipError


class ClipUnavailable(Exception):
    """The Clip device is not connected or could not perform an operation."""


class ClipStateError(Exception):
    """The device is in the wrong state for this operation."""


class ClipService:
    """Application-level adapter over a single long-lived ClipClient."""


        self._client = ClipClient(transport, command_timeout=command_timeout)
        self._connected = False
        self._active_session: str | None = None

    async def connect(self) -> None:
        await self._client.connect()
        self._connected = True


        if self._connected:
            await self._client.disconnect()
            self._connected = False

    async def start_recording(self, mode: str | None = None) -> str:
        if not self._connected:
            raise ClipUnavailable("Clip is not connected")
        if self._active_session is not None:
            raise ClipStateError("a recording is already in progress")
        try:
            session_id = await self._client.start_recording(mode)
        except ClipError as exc:
            raise ClipUnavailable("Clip could not start recording") from exc

            raise ClipStateError("Clip did not return a session id")
        self._active_session = session_id
        return session_id

    async def stop_recording(self) -> str | None:
        if not self._connected:
            raise ClipUnavailable("Clip is not connected")
        if self._active_session is None:
            raise ClipStateError("no recording in progress")
        session_id = self._active_session
        try:
            await self._client.stop_recording()

            raise ClipUnavailable("Clip could not stop recording") from exc
        self._active_session = None
        return session_id

    async def download_session(self, session_id: str, destination: str | Path):
        if not self._connected:
            raise ClipUnavailable("Clip is not connected")
        try:
            return await self._client.download_session(session_id, destination)
        except ClipError as exc:
            raise ClipUnavailable("Clip could not download the recording") from exc
```

### ステップ 3: ライフサイクルをバインドする

FastAPI の起動時にアダプタを作成してアプリケーション状態に保存し、シャットダウン時に切断します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_service_lifecycle_v2.png" alt="reSpeaker Clip 統合のサービスライフサイクル" width={900} height="auto" /></p>

接続を FastAPI のライフスパンにバインドし、開始時に一度だけ開き、停止時に一度だけ閉じるようにします：

```python
# main.py
from contextlib import asynccontextmanager
from pathlib import Path

from fastapi import FastAPI

from clip import BleTransport  # or UdpTransport after the Wi-Fi AP is on
from clip_service import ClipService
from audio_service import AudioService


@asynccontextmanager
async def lifespan(app: FastAPI):
    transport = BleTransport(name="Clip")
    clip = ClipService(transport)
    await clip.connect()
    app.state.clip = clip
    app.state.audio = AudioService(recordings_dir=Path("recordings"))
    try:
        yield
    finally:
        await clip.disconnect()


app = FastAPI(lifespan=lifespan)
```

### ステップ 4: ルートを追加する

録音の開始、停止、および完了した録音の取り込み用のエンドポイントを作成します：

```http
POST /clip/recordings/start
POST /clip/recordings/stop
POST /clip/sessions/{session_id}/ingest
```

```python
# routes.py
from pathlib import Path

from fastapi import APIRouter, HTTPException, Request

from audio_service import AudioService
from clip_service import ClipService, ClipStateError, ClipUnavailable

router = APIRouter(prefix="/clip")


@router.post("/recordings/start")
async def start_recording(request: Request, mode: str | None = None):
    clip: ClipService = request.app.state.clip
    try:
        session_id = await clip.start_recording(mode)
    except ClipStateError as exc:
        raise HTTPException(status_code=409, detail=str(exc))
    except ClipUnavailable as exc:
        raise HTTPException(status_code=503, detail=str(exc))
    return {"session_id": session_id}


@router.post("/recordings/stop")
async def stop_recording(request: Request):
    clip: ClipService = request.app.state.clip
    try:
        session_id = await clip.stop_recording()
    except ClipStateError as exc:
        raise HTTPException(status_code=409, detail=str(exc))
    except ClipUnavailable as exc:
        raise HTTPException(status_code=503, detail=str(exc))
    return {"session_id": session_id, "status": "stopped"}


@router.post("/sessions/{session_id}/ingest")
async def ingest_session(session_id: str, request: Request):
    clip: ClipService = request.app.state.clip
    audio: AudioService = request.app.state.audio
    try:
        result = await clip.download_session(session_id, audio.recordings_dir)
    except ClipUnavailable as exc:
        raise HTTPException(status_code=502, detail=str(exc))
    ingested = [await audio.process(Path(file.path)) for file in result.files]
    return {"session_id": session_id, "files": ingested}
```

### ステップ 5: ルーターを登録する

`main.py` でルーターをインポートし、FastAPI アプリケーションを作成した後に登録します：

```python
from routes import router

app = FastAPI(lifespan=lifespan)
app.include_router(router)
```

これで、統合はアプリケーションパッケージ内の `main.py`、`routes.py`、`clip_service.py`、`audio_service.py` で構成されます。

### ステップ 6: API を検証する

サービスを起動し、次の順序でルートを呼び出します：

```bash
curl -X POST "http://localhost:8000/clip/recordings/start"
curl -X POST "http://localhost:8000/clip/recordings/stop"
curl -X POST "http://localhost:8000/clip/sessions/<session_id>/ingest"
```

開始と停止のレスポンスには同じ `session_id` が含まれている必要があります。取り込みのレスポンスには、既存の `AudioService` パイプラインから返されるファイルが含まれている必要があります。

## BLE 切断とコマンドタイムアウトからの復旧

上記のアダプタはハッピーパスのみをカバーします。長時間稼働するサービスでは、次の 2 つの障害も処理する必要があります：

- **リンクロス**: デバイスが範囲外に移動する、スリープする、ホストの Bluetooth アダプタがリセットされる、または別のアプリケーションに占有される。
- **コマンドタイムアウト**: デバイスが期限までに応答しない。ファームウェアプロトコルにはリクエスト ID がないため、トランスポートは遅延した応答を次のコマンドと関連付けることができません。そのため、タイムアウト時には直接の再試行ではなく再接続が必要になります。

このセクションでは、`clip_service.py` を直接置き換えるリファレンス実装を提供します。`connect()`、`disconnect()`、`start_recording()`、`stop_recording()`、`download_session()` のインターフェースを維持しつつ、自動復旧を追加します。

### 設計

- **接続ロック**: ビジネスオペレーションと切断／再接続は 1 つの `asyncio.Lock` を共有し、再接続をまたいでコマンドやダウンロードが実行されないようにします。
- **バックグラウンドヘルスチェック**: `health_check_interval` 秒ごとにタスクが `ClipClient.is_connected` をチェックします。切断やタイムアウトを検知したビジネスオペレーションは、イベントを通じてタスクを即座に起こします。
- **有界指数バックオフ**: 待機時間は 1 秒から開始し、試行が失敗するたびに 2 倍になり、最大 30 秒で頭打ちになります。各接続試行には、それぞれ 30 秒の制限があります。接続が成功するとバックオフはリセットされます。
- **コマンドのリプレイなし**: 失敗した開始、停止、ダウンロードは `ClipUnavailable` を送出するだけです。デバイス側ではすでにコマンドが実行されていて、レスポンスだけが失われている可能性があるため、リプレイすると録音や転送が重複するおそれがあります。
- **再接続後のレディネスプローブ**: アダプタは `status()` を 1 回呼び出します。デバイスがまだ録音中で `session_id` を返した場合は `_active_session` を復元し、そうでなければローカルのセッション状態をクリアします。これにより、「切断中も録音が継続していた」ケースと「停止レスポンスだけが失われた」ケースの両方をカバーします。
- **グレースフルシャットダウン**: クライアントを閉じる前にバックグラウンドタスクをキャンセルして待機し、シャットダウン後には再接続がスケジュールされないようにします。
- **公開 API のみを使用**: 切断検知には `ClipClient.is_connected` を使用し、復旧には `ClipClient.status()` を使用します。新しい SDK API は追加しません。

> **BLE サブスクリプションのクリーンアップ。** 現在の SDK の `BleTransport.disconnect()` は、リンクがすでにダウンしている場合、基盤となる Bleak クライアントをスキップするため、BlueZ はそのクライアントの通知サブスクリプションを保持したままになります。同じトランスポートオブジェクトを再接続すると、すべての通知（コマンドレスポンスとファイルフレームの両方）が 2 回配信され、`received FILE_START before previous file ended` というエラーでダウンロードが失敗します。リファレンス実装の `_close_link()` は、トランスポートの切断後に基盤となるクライアントの公開メソッド `disconnect()` を呼び出し、サブスクリプションを解放します。UDP トランスポートには影響しません。

> **起動時の競合。** ファームウェアは、オーディオスレッドがセッション ID を公開する前に、空の `data` を伴う `ok` で `AT+START` に応答することがあります。`start_recording()` は、録音が進行中であることを失敗とみなすのではなく、セッション ID を取得するために `status()` をポーリングします。

### 設定

| パラメータ | デフォルト | 目的 |
| --- | --- | --- |
| `command_timeout` | `10.0` | `ClipClient` に渡されるコマンドごとのレスポンスタイムアウト |
| `health_check_interval` | `2.0` | バックグラウンドで `is_connected` をチェックする間隔（秒） |
| `reconnect_initial_delay` | `1.0` | 最初の再接続試行前の待機時間（秒） |
| `reconnect_max_delay` | `30.0` | バックオフの上限（秒） |
| `reconnect_attempt_timeout` | `30.0` | 1 回の接続試行とそのレディネスプローブの制限時間（秒） |

### 完全なリファレンス実装

`clip_service.py` を次のバージョンに置き換えます：

```python
"""Application-level Clip adapter with BLE drop and command-timeout recovery.

This module is the reference implementation referenced by the reSpeaker Clip
Service Integration wiki page.  It keeps the small application surface used by
the integration guide (connect, disconnect, start, stop, download) and adds:

* one connection lock that serializes business operations against reconnect;
* one background task that polls ``ClipClient.is_connected`` every
  ``health_check_interval`` seconds;
* a wake event so a failed command can request an immediate reconnect;
* bounded exponential backoff (1 s .. 30 s by default);
* a ``status()`` readiness probe after reconnect that restores or clears
  ``_active_session``.

A failed command is never replayed: the device may already have executed it and
only the response was lost.
"""

from __future__ import annotations

import asyncio
import logging
from pathlib import Path

from clip import (
    ClipClient,
    ClipError,
    CommandTimeoutError,
    ConnectionError,
    DownloadResult,
    Status,
)

logger = logging.getLogger(__name__)


class ClipUnavailable(Exception):
    """The Clip device is not connected or could not perform an operation."""


class ClipStateError(Exception):
    """The device is in the wrong state for this operation."""


class ClipService:
    """Application-level adapter over a single long-lived ``ClipClient``."""

    def __init__(
        self,
        transport,
        *,
        command_timeout: float = 10.0,
        health_check_interval: float = 2.0,
        reconnect_initial_delay: float = 1.0,
        reconnect_max_delay: float = 30.0,
        reconnect_attempt_timeout: float = 30.0,
    ) -> None:
        for name, value in (
            ("command_timeout", command_timeout),
            ("health_check_interval", health_check_interval),
            ("reconnect_initial_delay", reconnect_initial_delay),
            ("reconnect_max_delay", reconnect_max_delay),
            ("reconnect_attempt_timeout", reconnect_attempt_timeout),
        ):
            if value <= 0:
                raise ValueError(f"{name} must be positive")
        if reconnect_initial_delay > reconnect_max_delay:
            raise ValueError("reconnect_initial_delay must not exceed reconnect_max_delay")

        self._client = ClipClient(transport, command_timeout=command_timeout)
        self._connected = False
        self._active_session: str | None = None

        # Serializes business operations with connect/disconnect/reconnect.
        self._connection_lock = asyncio.Lock()
        # Set by a failed command; the background task wakes immediately.
        self._wake = asyncio.Event()
        self._closed = False
        self._monitor_task: asyncio.Task[None] | None = None

        self._health_check_interval = health_check_interval
        self._reconnect_initial_delay = reconnect_initial_delay
        self._reconnect_max_delay = reconnect_max_delay
        self._reconnect_attempt_timeout = reconnect_attempt_timeout
        self._reconnect_delay = reconnect_initial_delay

    # ------------------------------------------------------------------
    # Connection lifecycle
    # ------------------------------------------------------------------

    @property
    def is_connected(self) -> bool:
        """Whether the device link is currently usable (read-only)."""
        return self._connected and self._client.is_connected

    async def connect(self) -> None:
        """Open the initial connection.

        A startup failure still propagates: background recovery only covers
        drops that happen after the service is running.
        """
        async with self._connection_lock:
            if self._connected:
                return
            await self._client.connect()
            self._connected = True
            self._closed = False
            self._reconnect_delay = self._reconnect_initial_delay
        if self._monitor_task is None or self._monitor_task.done():
            self._monitor_task = asyncio.create_task(
                self._monitor_loop(), name="clip-reconnect"
            )

    async def disconnect(self) -> None:
        """Stop recovery first, then close the client exactly once."""
        self._closed = True
        self._wake.set()

        task, self._monitor_task = self._monitor_task, None
        if task is not None:
            task.cancel()
            try:
                await task
            except asyncio.CancelledError:
                pass

        async with self._connection_lock:
            await self._close_link()
            self._connected = False
            self._active_session = None

    # ------------------------------------------------------------------
    # Business operations
    # ------------------------------------------------------------------

    async def start_recording(self, mode: str | None = None) -> str:
        async with self._connection_lock:
            self._require_connection()
            if self._active_session is not None:
                raise ClipStateError("a recording is already in progress")
            try:
                session_id = await self._client.start_recording(mode)
                if not session_id:
                    # AT+START can answer ok before the audio thread has
                    # published its session id.  Recover it from device state
                    # instead of reporting a failure for a running recording.
                    session_id = await self._probe_session_id()
            except (ConnectionError, CommandTimeoutError) as exc:
                await self._handle_link_failure(exc)
                raise ClipUnavailable("Clip could not start recording") from exc
            except ClipError as exc:
                logger.warning("Clip start failed: %s", exc)
                raise ClipUnavailable("Clip could not start recording") from exc
            if not session_id:
                raise ClipStateError("Clip did not return a session id")
            self._active_session = session_id
            return session_id

    async def stop_recording(self) -> str | None:
        async with self._connection_lock:
            self._require_connection()
            if self._active_session is None:
                raise ClipStateError("no recording in progress")
            session_id = self._active_session
            try:
                await self._client.stop_recording()
            except (ConnectionError, CommandTimeoutError) as exc:
                await self._handle_link_failure(exc)
                raise ClipUnavailable("Clip could not stop recording") from exc
            except ClipError as exc:
                logger.warning("Clip stop failed: %s", exc)
                raise ClipUnavailable("Clip could not stop recording") from exc
            self._active_session = None
            return session_id

    async def download_session(
        self, session_id: str, destination: str | Path
    ) -> DownloadResult:
        async with self._connection_lock:
            self._require_connection()
            try:
                return await self._client.download_session(session_id, destination)
            except (ConnectionError, CommandTimeoutError) as exc:
                await self._handle_link_failure(exc)
                raise ClipUnavailable("Clip could not download the recording") from exc
            except ClipError as exc:
                logger.warning("Clip download failed: %s", exc)
                raise ClipUnavailable("Clip could not download the recording") from exc

    # ------------------------------------------------------------------
    # Link failure and recovery
    # ------------------------------------------------------------------

    async def _probe_session_id(
        self, attempts: int = 5, delay: float = 0.1
    ) -> str | None:
        """Recover the session id published just after AT+START succeeded."""
        for attempt in range(attempts):
            status = await self._client.status()
            if status.recording and status.session_id:
                return status.session_id
            if attempt + 1 < attempts:
                await asyncio.sleep(delay)
        return None

    def _require_connection(self) -> None:
        if not self.is_connected:
            self._connected = False
            # The monitor may still be asleep; ask it to look now.
            self._wake.set()
            raise ClipUnavailable("Clip is not connected")

    async def _handle_link_failure(self, exc: Exception) -> None:
        """Mark the link unusable and hand recovery to the background task."""
        self._connected = False
        logger.warning(
            "Clip link failure (%s: %s); requesting reconnect without replaying the command",
            type(exc).__name__,
            exc,
        )
        # Best effort: a desynchronized transport must not be reused.
        await self._close_link()
        self._wake.set()

    async def _close_link(self) -> None:
        """Close the link and release a subscription left by a dead link.

        ``BleTransport.disconnect()`` skips the underlying Bleak client when
        the link is already down.  BlueZ keeps that client's notification
        subscription, so a later connection receives every notification
        twice.  Calling the client's public ``disconnect()`` releases it.
        Transports without a ``_client`` (for example UDP) are unaffected.
        """
        stale_client = getattr(self._client.transport, "_client", None)
        try:
            await self._client.disconnect()
        except Exception as exc:  # noqa: BLE001 - cleanup must not mask
            logger.debug("Clip disconnect failed: %s", exc)
        if stale_client is not None:
            try:
                await stale_client.disconnect()
            except Exception as exc:  # noqa: BLE001 - best effort
                logger.debug("Clip stale-client cleanup failed: %s", exc)

    async def _monitor_loop(self) -> None:
        while not self._closed:
            try:
                await asyncio.wait_for(
                    self._wake.wait(), timeout=self._health_check_interval
                )
            except asyncio.TimeoutError:
                pass
            self._wake.clear()
            if self._closed:
                return
            if self.is_connected:
                self._reconnect_delay = self._reconnect_initial_delay
                continue
            if self._connected:
                logger.warning("Clip link dropped; starting reconnect")
                self._connected = False
            await self._reconnect_until_connected()

    async def _reconnect_until_connected(self) -> None:
        attempt = 0
        while not self._closed and not self.is_connected:
            delay = self._reconnect_delay
            logger.info(
                "Clip reconnect attempt %d in %.1f s", attempt + 1, delay
            )
            await asyncio.sleep(delay)
            if self._closed:
                return

            attempt += 1
            async with self._connection_lock:
                if self._closed:
                    return
                await self._close_link()

                try:
                    await asyncio.wait_for(
                        self._client.connect(),
                        timeout=self._reconnect_attempt_timeout,
                    )
                except asyncio.CancelledError:
                    raise
                except Exception as exc:  # noqa: BLE001 - retry any connect failure
                    logger.warning(
                        "Clip reconnect attempt %d failed: %s", attempt, exc
                    )
                    self._connected = False
                else:
                    try:
                        status = await asyncio.wait_for(
                            self._client.status(),
                            timeout=self._reconnect_attempt_timeout,
                        )
                    except asyncio.CancelledError:
                        raise
                    except Exception as exc:  # noqa: BLE001 - probe failure = retry
                        logger.warning(
                            "Clip readiness probe after attempt %d failed: %s",
                            attempt,
                            exc,
                        )
                        self._connected = False
                        await self._close_link()
                    else:
                        self._connected = True
                        self._reconnect_delay = self._reconnect_initial_delay
                        self._restore_session(status)
                        logger.info(
                            "Clip reconnected after %d attempt(s): recording=%s session=%s",
                            attempt,
                            status.recording,
                            status.session_id,
                        )
                        return

            self._reconnect_delay = min(
                self._reconnect_delay * 2, self._reconnect_max_delay
            )

    def _restore_session(self, status: Status) -> None:
        if status.recording and status.session_id:
            if self._active_session != status.session_id:
                logger.info("Recovered active session %s", status.session_id)
            self._active_session = status.session_id
        else:
            if self._active_session is not None:
                logger.info("Cleared stale active session %s", self._active_session)
            self._active_session = None
```

アプリケーションコードとルートは変更されません。`ClipService(transport)` の呼び出し形は同じままです。初回接続中の失敗は引き続き伝播されます。バックグラウンドでの復旧は、サービスが正常に起動した後の切断のみを対象とします。

### 検証

以下の動作は、物理的な Clip を BLE 経由で接続して検証しました。

- **リンクロス**：ホスト側から強制的に BLE 切断を行うと、バックグラウンドタスクが次回のヘルスチェックサイクルでそれを検出して再接続し、復旧後はコマンドが動作します。
- **コマンドタイムアウト**：`CommandTimeoutError` を 1 回注入すると、古いリンクがクローズされ、失敗したコマンドが 1 回実行され、アダプタが復旧します。
- **バックオフシーケンス**：連続した接続失敗に対して、待機時間は 1、2、4、8、16、30、30 秒となり、成功すると待機時間は 1 秒にリセットされます。
- **録音の復旧**：デバイスは切断中も録音を継続します。再接続後、`status()` から `_active_session` が復元されます。デバイスがアイドル状態の場合、ローカルのセッション状態はクリアされます。
- **並行性**：再接続中は、ビジネスリクエストは待機するのではなく `ClipUnavailable`（`503` にマッピング）で即座に失敗します。接続ロックにより、コマンドが接続または切断処理と交差することを防ぎます。
- **シャットダウン**：バックグラウンドタスクは終了し、それ以上の再接続試行はスケジュールされません。
- **復旧後のダウンロード**：再接続後にダウンロードしたセッションは、長さと CRC32 のチェックに合格します。

## 長時間稼働サービス向けの運用上の考慮事項

インテグレーションをサービスとして実行する場合、接続、エラー、およびワークフローの状態を明示的に保ってください。

### アダプタの境界

すべての `ClipClient` 呼び出しは `ClipService` 内に保持します。アダプタは接続アクセス、録音コマンド、ダウンロード、および SDK エラーの変換を担当しますが、処理、ストレージ、その他のビジネスロジックは担当しません。

アダプタより上位のコードは、トランスポート、AT コマンド、ファイル転送の詳細ではなく、`session_id` やアプリケーション例外などのアプリケーション概念を使用するべきです。

### クライアントの再利用

1 つの物理 Clip を、1 つの長寿命な `ClipClient` と 1 つの `ClipService` にマッピングします。ファームウェアにはリクエスト ID がないため、`ClipClient` はコマンドを直列化します。複数デバイスの場合は、`ClipManager` 内でデバイス ID をキーとして `ClipService` インスタンスを管理します。

### 接続ライフタイム

よくある間違いは、リクエストハンドラ内でデバイスをオープンすることです。

```python
# WRONG — do not do this in a service
@app.post("/clip/start")
async def start():
    async with ClipClient(BleTransport(name="Clip")) as clip:
        await clip.start_recording()
```

これは呼び出しごとに再接続を行い、リクエスト間でアクティブセッションを失います。接続はアプリケーションのライフスパンが所有し、リクエストはそれを再利用します。

### エラー境界

SDK 例外は `ClipService` 内でアプリケーション例外に変換し、その後ルート境界で HTTP レスポンスにマッピングします。

単純なマッピング例（説明目的であり、SDK の規定ではありません）：

| アプリケーション条件 | HTTP ステータス |
| --- | --- |
| Clip が利用不可 | `503` |
| デバイス状態が不正 | `409` |
| デバイスコマンド失敗 | `502` |
| クライアントリクエストが不正 | `400` |

具体的なステータスコードはアプリケーション固有です。アダプタ外のコードは、SDK 例外ではなく `ClipUnavailable` と `ClipStateError` に依存するべきです。

### 再接続

デバイスエラーが発生した場合は、デバイスを利用不可としてマークし、トランスポートを再接続または再作成します。コマンドタイムアウトが発生した場合、トランスポートはもはやレスポンスを相関付けられないため、次のコマンドの前に再接続が必要です。失敗は `ClipUnavailable` として表面化し、その後バックグラウンドタスクまたは次のリクエストから再接続します。接続ロック、バックグラウンドヘルスチェック、指数バックオフ、セッション復旧を含む完全な実装については、[BLE Disconnect and Command Timeout Recovery](#BLE-Disconnect-and-Command-Timeout-Recovery) を参照してください。

### 冪等性

HTTP リトライ、ワーカーのリトライ、再起動により、同じ `session_id` が複数回送信される可能性があります。処理する前に永続状態を確認してください。

各セッションをデータベースで追跡します。

| `session_id` | `downloaded` | `processed` | `result_id` | `created_at` |
| --- | --- | --- | --- | --- |
| 一意のデバイスセッション | ダウンロード状態 | パイプライン状態 | 結果参照 | 初回取り込み時刻 |

```python
async def ingest_clip_session(session_id: str):
    if repository.is_processed(session_id):
        return repository.get_result(session_id)

    result = await clip_service.download_session(session_id, Path("recordings"))
    for file in result.files:
        await process_audio(Path(file.path))

    repository.mark_processed(session_id)
    return repository.get_result(session_id)
```

これにより、重複処理とその後の副作用を防止できます。

### 状態の所有権

デバイス状態とワークフロー状態は分離して保持します。

| 状態 | 所有者 | 例となる値 |
| --- | --- | --- |
| Clip の状態 | デバイスインテグレーションレイヤー（`ClipService`） | 接続済み、録音中、セッション利用可能、ダウンロード可能 |
| ワークフロー状態 | アプリケーション／ジョブレイヤー | 取り込み中、処理中、完了、失敗 |

2 つの状態機械を 1 つのフィールドに統合しないでください。アプリケーションのワークフローがまだ実行中であっても、セッションはダウンロード可能な場合があります。

## 次のステップ

アダプタが動作したら、デバイスインテグレーションをアプリケーション固有の処理から分離したままにしてください。関連ページ：

- [reSpeaker Clip Basic SDK Guide](/ja/respeaker_clip_basic_sdk_guide) — デバイスプロトコル、`ClipClient` API、BLE/UDP トランスポート、ファイル転送
- [Getting Started with the reSpeaker Clip Firmware SDK](/ja/respeaker_clip_firmware_quick_start) — SDK を統合するのではなく、デバイス側ファームウェアを変更する必要がある場合

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選択いただけるよう、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
