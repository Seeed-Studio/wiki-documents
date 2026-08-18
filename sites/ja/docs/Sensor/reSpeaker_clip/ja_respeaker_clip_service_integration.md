---
description: "デバイスアダプタ、アプリケーションライフサイクル管理、API ルート、本番環境向けの安全な状態管理を用いて、既存の Python サービスに reSpeaker Clip を統合します。"
title: reSpeaker Clip をサービスに統合する
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
  date: 08/14/2026
  author: Ray
createdAt: '2026-08-07'
updatedAt: '2026-08-14'
url: https://wiki.seeedstudio.com/ja/respeaker_clip_service_integration/
---

# reSpeaker Clip をサービスに統合する

このガイドでは、reSpeaker Clip を管理されたオーディオソースとして既存の Python サービスに追加する方法を説明します。統合の境界に焦点を当て、1 つのデバイスアダプタ、1 つの長寿命接続、小さな API サーフェス、明確な状態の所有権という形で設計します。

> **reSpeaker Clip は入力ソースです。** `ClipClient` はデバイスとの通信を処理し、`ClipService` はそれをアプリケーションに適合させ、処理とビジネスロジックの所有権は引き続きあなたのサービス側にあります。

トランスポートのセットアップ、完全な `ClipClient` API、AT コマンド、ファイル転送プロトコルについては、[reSpeaker Clip Basic SDK ガイド](/ja/respeaker_clip_basic_sdk_guide) を参照してください。このページでは BLE/GATT、フレーム形式、CRC 処理、CLI ツールについては再説明しません。

## 統合アプローチ

デバイスを狭いアダプタの背後に隠し、ダウンロードした録音を、サービスがすでに使用している処理エントリポイントに送信します：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_existing_service_clip_as_new_audio_source_v2.png" alt="Existing service with reSpeaker Clip as a new audio source" width={900} height="auto" /></p>

1. 物理デバイスごとに 1 つの `ClipService` を作成します。
2. アプリケーションの起動時に接続し、シャットダウン時に切断します。
3. サービスが必要とする録音操作だけを公開します。
4. 完了したオーディオファイルを既存の処理パイプラインに渡します。

## 始める前に

このガイドでは、すでに自分のマシン上で Clip と通信できることを前提としています。先に進む前に、次のことができることを確認してください：

- reSpeaker Clip Python SDK をインストールし、Clip に接続できる；
- 録音を開始および停止できる；
- 完了したセッションを一覧表示できる；
- 録音を 1 件、正常にダウンロードできる。

これらのいずれかが失敗する場合は、ここで中断し、まず [reSpeaker Clip Basic SDK ガイド](/ja/respeaker_clip_basic_sdk_guide) を完了してください。Basic SDK ガイドは、トランスポート設定、デバイスコマンド、ファイル転送の詳細に関する信頼できる情報源です。このガイドはそれらを繰り返すのではなく、参照する形を取ります。

## 適切な reSpeaker Clip ガイドを選ぶ

reSpeaker Clip のドキュメントは、開発レイヤーごとに整理されています。製品のセットアップと通常のワークフローについては、まず **Getting Started** から始めてください。ホストアプリケーションがデバイスを制御したり録音をダウンロードしたりする必要がある場合は **Basic SDK** を使用します。長時間稼働するサービスがデバイス接続を所有し API を公開する必要がある場合は **Service Integration** に進みます。デバイス側の動作、プロトコル、オーディオ処理を変更する必要がある場合のみ **Firmware SDK** を使用してください。

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
      <p style={{margin: 0, fontSize: '0.78rem', lineHeight: 1.45}}>アダプタと API ルートを通じて、reSpeaker Clip を長時間稼働する Python サービスに追加します。</p>
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

サービスにはすでに、オーディオファイルを受け取る 1 つの関数があると仮定します：

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

FastAPI の起動時にアダプタを作成し、アプリケーションステートに保存し、シャットダウン時に切断します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_service_lifecycle_v2.png" alt="reSpeaker Clip 連携のサービスライフサイクル" width={900} height="auto" /></p>

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

これで、連携はアプリケーションパッケージ内の `main.py`、`routes.py`、`clip_service.py`、`audio_service.py` で構成されます。

### ステップ 6: API を検証する

サービスを起動し、次の順序でルートを呼び出します：

```bash
curl -X POST "http://localhost:8000/clip/recordings/start"
curl -X POST "http://localhost:8000/clip/recordings/stop"
curl -X POST "http://localhost:8000/clip/sessions/<session_id>/ingest"
```

開始と停止のレスポンスには同じ `session_id` が含まれている必要があります。取り込みのレスポンスには、既存の `AudioService` パイプラインから返されるファイルが含まれている必要があります。

## 長時間稼働サービスの本番運用における考慮事項

連携をサービスとして実行する場合、接続、エラー、およびワークフローの状態を明示的に保ちます。

### アダプタの境界

すべての `ClipClient` 呼び出しを `ClipService` 内に保持します。アダプタは接続アクセス、録音コマンド、ダウンロード、および SDK エラーの変換を所有しますが、処理、ストレージ、その他のビジネスロジックは所有しません。

アダプタより上位のコードは、トランスポート、AT コマンド、ファイル転送の詳細ではなく、`session_id` やアプリケーション例外などのアプリケーションの概念を使用する必要があります。

### クライアントの再利用

1 つの物理的な Clip を、1 つの長寿命な `ClipClient` と 1 つの `ClipService` にマッピングします。ファームウェアにはリクエスト ID がないため、`ClipClient` はコマンドを直列化します。複数デバイスの場合は、`ClipManager` 内でデバイス ID をキーとして `ClipService` インスタンスを管理します。

### 接続のライフタイム

よくある間違いは、リクエストハンドラ内でデバイスをオープンすることです：

```python
# WRONG — do not do this in a service
@app.post("/clip/start")
async def start():
    async with ClipClient(BleTransport(name="Clip")) as clip:
        await clip.start_recording()
```

これは呼び出しごとに再接続を行い、リクエスト間でアクティブなセッションを失います。接続はアプリケーションのライフスパンが所有し、リクエストはそれを再利用します。

### エラー境界

SDK 例外を `ClipService` 内でアプリケーション例外に変換し、その後ルート境界で HTTP レスポンスにマッピングします。

簡単なマッピング例（説明用であり、SDK の規定ではありません）：

| アプリケーション条件 | HTTP ステータス |
| --- | --- |
| Clip が利用不可 | `503` |
| 無効なデバイス状態 | `409` |
| デバイスコマンドの失敗 | `502` |
| 不正なクライアントリクエスト | `400` |

正確なコードはアプリケーション固有です。アダプタの外側のコードは、SDK 例外ではなく `ClipUnavailable` と `ClipStateError` に依存するべきです。

### 再接続

デバイスエラーが発生した場合は、デバイスを利用不可としてマークし、トランスポートを再接続または再作成します。トランスポートがレスポンスを相関付けられなくなるため、コマンドタイムアウトが発生した場合は、次のコマンドの前に再接続が必要です。失敗を `ClipUnavailable` として表面化し、その後バックグラウンドタスクまたは次のリクエストから再接続します。

### 冪等性

HTTP リトライ、ワーカーのリトライ、および再起動により、同じ `session_id` が複数回送信される可能性があります。処理する前に永続状態を確認してください。

各セッションをデータベースで追跡します：

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

デバイス状態とワークフロー状態を分離して保持します：

| 状態 | 所有者 | 例となる値 |
| --- | --- | --- |
| Clip 状態 | デバイス連携レイヤー（`ClipService`） | 接続済み、録音中、セッション利用可能、ダウンロード可能 |
| ワークフロー状態 | アプリケーション／ジョブレイヤー | 取り込み中、処理中、完了、失敗 |

両方の状態機械を 1 つのフィールドにまとめないでください。アプリケーションのワークフローがまだ実行中であっても、セッションはダウンロード可能な場合があります。

## 次のステップ

アダプタが動作したら、デバイス連携をアプリケーション固有の処理から分離したままにしてください。関連ページ：

- [reSpeaker Clip Basic SDK Guide](/ja/respeaker_clip_basic_sdk_guide) — デバイスプロトコル、`ClipClient` API、BLE/UDP トランスポート、ファイル転送
- [Getting Started with the reSpeaker Clip Firmware SDK](/ja/respeaker_clip_firmware_quick_start) — SDK を統合する代わりにデバイス側ファームウェアを変更する必要がある場合

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
