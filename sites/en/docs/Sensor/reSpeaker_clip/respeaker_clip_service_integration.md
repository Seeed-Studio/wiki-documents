---
description: Integrate reSpeaker Clip into an existing Python service with a device adapter, application lifecycle management, API routes, and production-safe state handling.
title: Integrate reSpeaker Clip into Your Service
keywords:
  - reSpeaker Clip
  - service integration
  - Python service
  - FastAPI
  - audio source
  - device adapter
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-banner.jpg
slug: /respeaker_clip_service_integration
sku: 100020126
last_update:
  date: 08/14/2026
  author: Ray
createdAt: '2026-08-07'
updatedAt: '2026-08-18'
url: https://wiki.seeedstudio.com/respeaker_clip_service_integration/
---

# Integrate reSpeaker Clip into Your Service

This guide shows how to add reSpeaker Clip as a managed audio source to an existing Python service. It focuses on the integration boundary: one device adapter, one long-lived connection, a small API surface, and clear state ownership.

> **reSpeaker Clip is an input source.** `ClipClient` handles device communication, `ClipService` adapts it to your application, and your service retains ownership of processing and business logic.

For transport setup, the full `ClipClient` API, AT commands, and the file-transfer protocol, see the [reSpeaker Clip Basic SDK Guide](/respeaker_clip_basic_sdk_guide). This page does not re-explain BLE/GATT, frame formats, CRC handling, or CLI tools.

## Integration Approach

Keep the device behind a narrow adapter and send downloaded recordings to the processing entry point your service already uses:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_existing_service_clip_as_new_audio_source_v2.png" alt="Existing service with reSpeaker Clip as a new audio source" width={900} height="auto" /></p>

1. Create one `ClipService` for each physical device.
2. Connect it during application startup and disconnect it during shutdown.
3. Expose only the recording operations your service needs.
4. Pass completed audio files to the existing processing pipeline.

## Before You Start

This guide assumes you can already talk to a Clip on your own machine. Before continuing, make sure you can:

- install the reSpeaker Clip Python SDK and connect to a Clip;
- start and stop a recording;
- list completed sessions;
- download one recording successfully.

If any of these fail, stop here and complete the [reSpeaker Clip Basic SDK Guide](/respeaker_clip_basic_sdk_guide) first. The Basic SDK Guide is the source of truth for transport configuration, device commands, and file-transfer details; this guide links to it rather than repeating it.

## Choose the Right reSpeaker Clip Guide

The reSpeaker Clip documentation is organized by development layer. Start with **Getting Started** for product setup and normal workflows. Use the **Basic SDK** when a host application needs to control the device or download recordings. Continue to **Service Integration** when a long-running service needs to own the device connection and expose APIs. Use the **Firmware SDK** only when you need to change device-side behavior, protocols, or audio processing.

<div className="row">
  <div className="col col--6 margin-bottom--lg">
    <a
      href="/respeaker_clip/"
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
        <p style={{margin: 0, fontSize: '0.78rem', lineHeight: 1.45}}>Product overview, hardware setup, and first-use workflows.</p>
      </div>
    </a>
  </div>

  <div className="col col--6 margin-bottom--lg">
    <a
      href="/respeaker_clip_basic_sdk_guide/"
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
        <p style={{margin: 0, fontSize: '0.78rem', lineHeight: 1.45}}>Control the device, manage recordings, and download audio without changing firmware.</p>
      </div>
    </a>
  </div>

  <div className="col col--6 margin-bottom--lg">
    <a
      href="/respeaker_clip_service_integration/"
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
        <p style={{margin: 0, fontSize: '0.78rem', lineHeight: 1.45}}>Add reSpeaker Clip to a long-running Python service through an adapter and API routes.</p>
      </div>
    </a>
  </div>

  <div className="col col--6 margin-bottom--lg">
    <a
      href="/respeaker_clip_firmware_quick_start/"
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
        <p style={{margin: 0, fontSize: '0.78rem', lineHeight: 1.45}}>Build, flash, debug, and customize device-side behavior.</p>
      </div>
    </a>
  </div>
</div>

## Add reSpeaker Clip as an Audio Source to Your Existing Service

Follow the steps below to connect the device adapter to an existing FastAPI service.

### Step 1: Prepare Pipeline

Assume your service already has one function that accepts an audio file:

```python
async def process_audio(path: Path) -> dict:
    # your existing processing pipeline
    ...
```

An existing upload route already calls it:

```python
@app.post("/audio")
async def upload_audio(file: UploadFile):
    path = await save_upload(file)
    return await process_audio(path)
```

The Clip integration should produce a normal local audio file and call the same `process_audio()` function. Processing remains independent of the capture device.

Wrap that function in the service object used by the Clip ingestion route:

```python
# audio_service.py
from pathlib import Path


class AudioService:
    def __init__(self, recordings_dir: Path):
        self.recordings_dir = recordings_dir
        self.recordings_dir.mkdir(parents=True, exist_ok=True)

    async def process(self, path: Path) -> dict:
        return await process_audio(path)
```

### Step 2: Build Adapter

Wrap only the operations this integration needs: connect, disconnect, start, stop, and download.

```python
# clip_service.py
from __future__ import annotations
from pathlib import Path

from clip import ClipClient, ClipError


class ClipUnavailable(Exception):
    """The Clip device is not connected or could not perform an operation."""


class ClipStateError(Exception):
    """The device is in the wrong state for this operation."""


class ClipService:
    """Application-level adapter over a single long-lived ClipClient."""

    def __init__(self, transport, *, command_timeout: float = 10.0):
        self._client = ClipClient(transport, command_timeout=command_timeout)
        self._connected = False
        self._active_session: str | None = None

    async def connect(self) -> None:
        await self._client.connect()
        self._connected = True

    async def disconnect(self) -> None:
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
        if not session_id:
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
        except ClipError as exc:
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

### Step 3: Bind Lifecycle

Create the adapter during FastAPI startup, store it in application state, and disconnect it during shutdown.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_service_lifecycle_v2.png" alt="Service lifecycle for reSpeaker Clip integration" width={900} height="auto" /></p>

Bind the connection to the FastAPI lifespan so it opens once at start and closes once at stop:

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

### Step 4: Add Routes

Create endpoints for starting, stopping, and ingesting a completed recording:

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

### Step 5: Register Router

Import the router in `main.py` and register it after creating the FastAPI application:

```python
from routes import router

app = FastAPI(lifespan=lifespan)
app.include_router(router)
```

The integration now consists of `main.py`, `routes.py`, `clip_service.py`, and `audio_service.py` in your application package.

### Step 6: Verify API

Start the service, then call the routes in order:

```bash
curl -X POST "http://localhost:8000/clip/recordings/start"
curl -X POST "http://localhost:8000/clip/recordings/stop"
curl -X POST "http://localhost:8000/clip/sessions/<session_id>/ingest"
```

The start and stop responses should contain the same `session_id`. The ingest response should contain the files returned by your existing `AudioService` pipeline.

## Production Considerations for a Long-Running Service

Keep connection, error, and workflow state explicit when the integration runs as a service.

### Adapter Boundary

Keep all `ClipClient` calls inside `ClipService`. The adapter owns connection access, recording commands, downloads, and SDK error translation; it does not own processing, storage, or other business logic.

Code above the adapter should use application concepts such as `session_id` and application exceptions rather than transport, AT command, or file-transfer details.

### Client Reuse

Map one physical Clip to one long-lived `ClipClient` and one `ClipService`. Because the firmware has no request ID, `ClipClient` serializes commands. For multiple devices, key `ClipService` instances by device ID in a `ClipManager`.

### Connection Lifetime

A common mistake is to open the device inside the request handler:

```python
# WRONG — do not do this in a service
@app.post("/clip/start")
async def start():
    async with ClipClient(BleTransport(name="Clip")) as clip:
        await clip.start_recording()
```

This reconnects for every call and loses the active session between requests. The application lifespan owns the connection; requests reuse it.

### Error Boundary

Translate SDK exceptions into application exceptions inside `ClipService`, then map them to HTTP responses at the route boundary.

A simple example mapping (illustrative, not an SDK mandate):

| Application condition | HTTP status |
| --- | --- |
| Clip unavailable | `503` |
| Invalid device state | `409` |
| Device command failed | `502` |
| Bad client request | `400` |

The exact codes are application-specific. Code outside the adapter should depend on `ClipUnavailable` and `ClipStateError`, not SDK exceptions.

### Reconnection

On a device error, mark the device unavailable and reconnect or recreate the transport. A command timeout requires reconnection before the next command because the transport can no longer correlate responses. Surface the failure as `ClipUnavailable`, then reconnect from a background task or the next request.

### Idempotency

HTTP retries, worker retries, and restarts can submit the same `session_id` more than once. Check persistent state before processing it.

Track each session in your database:

| `session_id` | `downloaded` | `processed` | `result_id` | `created_at` |
| --- | --- | --- | --- | --- |
| Unique device session | Download status | Pipeline status | Result reference | First-ingestion time |

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

This prevents duplicate processing and downstream side effects.

### State Ownership

Keep device state separate from workflow state:

| State | Owner | Example values |
| --- | --- | --- |
| Clip state | Device integration layer (`ClipService`) | connected, recording, session available, downloadable |
| Workflow state | Application/job layer | ingesting, processing, completed, failed |

Do not collapse both state machines into one field. A session can be downloaded while its application workflow is still running.

## Next Steps

After the adapter is working, keep device integration separate from any application-specific processing. Related pages:

- [reSpeaker Clip Basic SDK Guide](/respeaker_clip_basic_sdk_guide) — device protocol, `ClipClient` API, BLE/UDP transport, file transfer
- [Getting Started with the reSpeaker Clip Firmware SDK](/respeaker_clip_firmware_quick_start) — when you need to modify device-side firmware instead of integrating the SDK

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
