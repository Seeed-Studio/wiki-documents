---
description: Integra reSpeaker Clip en un servicio de Python existente con un adaptador de dispositivo, gestión del ciclo de vida de la aplicación, rutas de API y manejo de estado seguro para producción.
title: Integra reSpeaker Clip en tu servicio
keywords:
  - reSpeaker Clip
  - integración de servicio
  - servicio Python
  - FastAPI
  - fuente de audio
  - adaptador de dispositivo
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-banner.jpg
slug: /respeaker_clip_service_integration
sku: 100020126
last_update:
  date: 10/19/2026
  author: Ray
createdAt: '2026-08-07'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/es/respeaker_clip_service_integration/
---

# Integra reSpeaker Clip en tu servicio

Esta guía muestra cómo añadir reSpeaker Clip como una fuente de audio gestionada a un servicio de Python existente. Se centra en el límite de integración: un adaptador de dispositivo, una conexión de larga duración, una pequeña superficie de API y una propiedad de estado clara.

> **reSpeaker Clip es una fuente de entrada.** `ClipClient` gestiona la comunicación con el dispositivo, `ClipService` la adapta a tu aplicación y tu servicio mantiene la propiedad del procesamiento y la lógica de negocio.

Para la configuración del transporte, la API completa de `ClipClient`, los comandos AT y el protocolo de transferencia de archivos, consulta la [Guía básica del SDK de reSpeaker Clip](/es/respeaker_clip_basic_sdk_guide). Esta página no vuelve a explicar BLE/GATT, formatos de trama, manejo de CRC ni herramientas de CLI.

## Enfoque de integración

Mantén el dispositivo detrás de un adaptador estrecho y envía las grabaciones descargadas al punto de entrada de procesamiento que tu servicio ya utiliza:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_existing_service_clip_as_new_audio_source_v2.png" alt="Servicio existente con reSpeaker Clip como nueva fuente de audio" width={900} height="auto" /></p>

1. Crea un `ClipService` para cada dispositivo físico.
2. Conéctalo durante el arranque de la aplicación y desconéctalo durante el apagado.
3. Expón solo las operaciones de grabación que tu servicio necesite.
4. Pasa los archivos de audio completados a la canalización de procesamiento existente.

## Antes de empezar

Esta guía asume que ya puedes comunicarte con un Clip en tu propia máquina. Antes de continuar, asegúrate de poder:

- instalar el SDK de Python de reSpeaker Clip y conectarte a un Clip;
- iniciar y detener una grabación;
- listar sesiones completadas;
- descargar una grabación correctamente.

Si cualquiera de estos pasos falla, detente aquí y completa primero la [Guía básica del SDK de reSpeaker Clip](/es/respeaker_clip_basic_sdk_guide). La Guía básica del SDK es la fuente de referencia para la configuración del transporte, los comandos del dispositivo y los detalles de la transferencia de archivos; esta guía se enlaza a ella en lugar de repetirla.

## Elige la guía adecuada de reSpeaker Clip

La documentación de reSpeaker Clip está organizada por capa de desarrollo. Comienza con **Getting Started** para la configuración del producto y los flujos de trabajo normales. Usa el **Basic SDK** cuando una aplicación host necesite controlar el dispositivo o descargar grabaciones. Continúa con **Service Integration** cuando un servicio de larga ejecución necesite poseer la conexión del dispositivo y exponer APIs. Usa el **Firmware SDK** solo cuando necesites cambiar el comportamiento del lado del dispositivo, los protocolos o el procesamiento de audio.

<div className="row">
  <div className="col col--6 margin-bottom--lg">
    <a
      href="/es/respeaker_clip/"
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
        <p style={{margin: 0, fontSize: '0.78rem', lineHeight: 1.45}}>Descripción general del producto, configuración de hardware y flujos de primera utilización.</p>
      </div>
    </a>
  </div>

  <div className="col col--6 margin-bottom--lg">
    <a
      href="/es/respeaker_clip_basic_sdk_guide/"
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
        <p style={{margin: 0, fontSize: '0.78rem', lineHeight: 1.45}}>Controla el dispositivo, gestiona las grabaciones y descarga audio sin cambiar el firmware.</p>
      </div>
    </a>
  </div>

  <div className="col col--6 margin-bottom--lg">
    <a
      href="/es/respeaker_clip_service_integration/"
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
        <p style={{margin: 0, fontSize: '0.78rem', lineHeight: 1.45}}>Añade reSpeaker Clip a un servicio de Python de larga ejecución mediante un adaptador y rutas de API.</p>
      </div>
    </a>
  </div>

  <div className="col col--6 margin-bottom--lg">
    <a
      href="/es/respeaker_clip_firmware_quick_start/"
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
        <p style={{margin: 0, fontSize: '0.78rem', lineHeight: 1.45}}>Compila, flashea, depura y personaliza el comportamiento del lado del dispositivo.</p>
      </div>
    </a>
  </div>
</div>

## Añade reSpeaker Clip como fuente de audio a tu servicio existente

Sigue los pasos a continuación para conectar el adaptador de dispositivo a un servicio FastAPI existente.

### Paso 1: Preparar la canalización

Supón que tu servicio ya tiene una función que acepta un archivo de audio:

```python
async def process_audio(path: Path) -> dict:
    # your existing processing pipeline
    ...
```

Una ruta de carga existente ya llama a esta función:

```python
@app.post("/audio")
async def upload_audio(file: UploadFile):
    path = await save_upload(file)
    return await process_audio(path)
```

La integración de Clip debe generar un archivo de audio local estándar y llamar a la misma función `process_audio()`. El procesamiento debe seguir siendo independiente del dispositivo de captura.

Encapsula esta función en el objeto de servicio utilizado por la ruta de ingesta de Clip:

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

### Paso 2: Crear el adaptador

Encapsula únicamente las operaciones que necesita esta integración: conectar, desconectar, iniciar, detener y descargar.

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

### Paso 3: Vincular el ciclo de vida

Crea el adaptador durante el arranque de FastAPI, guárdalo en el estado de la aplicación y desconéctalo durante el apagado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_service_lifecycle_v2.png" alt="Service lifecycle for reSpeaker Clip integration" width={900} height="auto" /></p>

Vincula la conexión al ciclo de vida de FastAPI para que se abra una vez al inicio y se cierre una vez al detenerse:

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

### Paso 4: Añadir rutas

Crea endpoints para iniciar, detener e ingerir una grabación completada:

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

### Paso 5: Registrar el router

Importa el router en `main.py` y regístralo después de crear la aplicación FastAPI:

```python
from routes import router

app = FastAPI(lifespan=lifespan)
app.include_router(router)
```

La integración ahora consta de `main.py`, `routes.py`, `clip_service.py` y `audio_service.py` en el paquete de tu aplicación.

### Paso 6: Verificar la API

Inicia el servicio y luego llama a las rutas en orden:

```bash
curl -X POST "http://localhost:8000/clip/recordings/start"
curl -X POST "http://localhost:8000/clip/recordings/stop"
curl -X POST "http://localhost:8000/clip/sessions/<session_id>/ingest"
```

Las respuestas de inicio y parada deben contener el mismo `session_id`. La respuesta de ingestión debe contener los archivos devueltos por tu canalización `AudioService` existente.

## Recuperación de desconexión BLE y tiempo de espera de comandos {#ble-disconnect-and-command-timeout-recovery}

El adaptador anterior solo cubre el caso ideal. Un servicio de larga ejecución también debe manejar dos fallos:

- **Pérdida de enlace**: el dispositivo se sale del alcance, entra en suspensión, el adaptador Bluetooth del host se reinicia o lo toma otra aplicación.
- **Tiempo de espera de comando**: el dispositivo no responde antes del plazo. El protocolo de firmware no tiene ID de solicitud, por lo que el transporte no puede correlacionar una respuesta tardía con el siguiente comando. Por lo tanto, un tiempo de espera requiere una reconexión en lugar de un reintento directo.

Esta sección proporciona una implementación de referencia que reemplaza directamente `clip_service.py`. Mantiene la interfaz `connect()`, `disconnect()`, `start_recording()`, `stop_recording()` y `download_session()` y añade recuperación automática.

### Diseño

- **Bloqueo de conexión**: las operaciones de negocio y desconexión/reconexión comparten un único `asyncio.Lock`, de modo que ningún comando o descarga cruza una reconexión.
- **Comprobación de estado en segundo plano**: cada `health_check_interval` segundos la tarea comprueba `ClipClient.is_connected`. Una operación de negocio que detecta una caída o tiempo de espera despierta la tarea inmediatamente mediante un evento.
- **Retroceso exponencial acotado**: las esperas comienzan en 1 segundo, se duplican en cada intento fallido y se detienen en 30 segundos. Cada intento de conexión tiene su propio límite de 30 segundos. Una conexión correcta restablece el retroceso.
- **Sin repetición de comandos**: un inicio, parada o descarga fallidos solo generan `ClipUnavailable`. Es posible que el dispositivo ya haya ejecutado el comando y solo se haya perdido la respuesta; repetirlo podría crear una grabación o transferencia duplicada.
- **Sonda de preparación tras la reconexión**: el adaptador llama una vez a `status()`. Si el dispositivo sigue grabando y devuelve un `session_id`, restaura `_active_session`; de lo contrario, borra el estado de sesión local. Esto cubre tanto "la grabación continuó durante la caída" como "se perdió la respuesta de parada".
- **Apagado elegante**: se cancela y espera la tarea en segundo plano antes de cerrar el cliente; no se programa ninguna reconexión después del apagado.
- **Solo API pública**: la detección de caídas usa `ClipClient.is_connected`; la recuperación usa `ClipClient.status()`. No se añade ninguna API nueva al SDK.

> **Limpieza de suscripción BLE.** El `BleTransport.disconnect()` del SDK actual omite el cliente Bleak subyacente cuando el enlace ya está caído, por lo que BlueZ mantiene la suscripción de notificaciones de ese cliente. Reconectar el mismo objeto de transporte entonces entrega cada notificación dos veces (tanto respuestas de comandos como tramas de archivos), y las descargas fallan con `received FILE_START before previous file ended`. La referencia `_close_link()` llama al método público `disconnect()` del cliente subyacente después de la desconexión del transporte para liberar la suscripción. Los transportes UDP no se ven afectados.

> **Condición de carrera en el arranque.** El firmware puede responder a `AT+START` con `ok` y un `data` vacío antes de que el hilo de audio publique el ID de sesión. `start_recording()` sondea `status()` para obtener el ID en lugar de tratar una grabación en curso como un inicio fallido.

### Configuración

| Parámetro | Predeterminado | Propósito |
| --- | --- | --- |
| `command_timeout` | `10.0` | Tiempo de espera de respuesta por comando pasado a `ClipClient` |
| `health_check_interval` | `2.0` | Segundos entre comprobaciones de `is_connected` en segundo plano |
| `reconnect_initial_delay` | `1.0` | Espera antes del primer intento de reconexión, en segundos |
| `reconnect_max_delay` | `30.0` | Límite superior del retroceso, en segundos |
| `reconnect_attempt_timeout` | `30.0` | Límite para un intento de conexión y su sonda de preparación, en segundos |

### Implementación de referencia completa

Reemplaza `clip_service.py` con la siguiente versión:

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

El código de la aplicación y las rutas no cambian: `ClipService(transport)` mantiene la misma forma de llamada. Un fallo durante la conexión inicial sigue propagándose; la recuperación en segundo plano solo cubre las caídas después de que el servicio se haya iniciado correctamente.

### Verificación

El comportamiento siguiente se verificó con un Clip físico a través de BLE:

- **Pérdida de enlace**: después de forzar una desconexión BLE desde el host, la tarea en segundo plano la detecta en el siguiente ciclo de comprobación de estado y se vuelve a conectar; los comandos funcionan después de la recuperación.
- **Tiempo de espera de comando**: después de inyectar un `CommandTimeoutError`, el enlace antiguo se cierra, el comando que falló se ejecuta una vez y el adaptador se recupera.
- **Secuencia de retroceso**: los fallos de conexión consecutivos esperan 1, 2, 4, 8, 16, 30 y 30 segundos; un éxito restablece la espera a 1 segundo.
- **Recuperación de grabación**: el dispositivo sigue grabando durante la caída; después de reconectar, `_active_session` se restaura desde `status()`. Cuando el dispositivo está inactivo, el estado de sesión local se borra.
- **Concurrencia**: mientras se reconecta, las solicitudes de negocio fallan rápidamente con `ClipUnavailable` (mapeado a `503`) en lugar de esperar. El bloqueo de conexión evita que los comandos crucen una conexión o desconexión.
- **Apagado**: la tarea en segundo plano sale y no se programan más intentos de reconexión.
- **Descarga después de la recuperación**: una sesión descargada después de reconectar pasa las comprobaciones de longitud y CRC32.

## Consideraciones de producción para un servicio de larga ejecución

Mantén explícitos el estado de conexión, de error y de flujo de trabajo cuando la integración se ejecute como un servicio.

### Límite del adaptador

Mantén todas las llamadas a `ClipClient` dentro de `ClipService`. El adaptador es propietario del acceso a la conexión, los comandos de grabación, las descargas y la traducción de errores del SDK; no es propietario del procesamiento, el almacenamiento u otra lógica de negocio.

El código por encima del adaptador debe usar conceptos de la aplicación como `session_id` y excepciones de la aplicación en lugar de detalles de transporte, comandos AT o transferencia de archivos.

### Reutilización del cliente

Asocia un Clip físico a un `ClipClient` de larga vida y a un `ClipService`. Debido a que el firmware no tiene ID de solicitud, `ClipClient` serializa los comandos. Para varios dispositivos, indexa las instancias de `ClipService` por ID de dispositivo en un `ClipManager`.

### Duración de la conexión

Un error común es abrir el dispositivo dentro del manejador de la solicitud:

```python
# WRONG — do not do this in a service
@app.post("/clip/start")
async def start():
    async with ClipClient(BleTransport(name="Clip")) as clip:
        await clip.start_recording()
```

Esto vuelve a conectar en cada llamada y pierde la sesión activa entre solicitudes. El ciclo de vida de la aplicación es el propietario de la conexión; las solicitudes la reutilizan.

### Límite de errores

Traduce las excepciones del SDK en excepciones de la aplicación dentro de `ClipService`, y luego asígnalas a respuestas HTTP en el límite de la ruta.

Un ejemplo sencillo de mapeo (ilustrativo, no un mandato del SDK):

| Condición de la aplicación | Estado HTTP |
| --- | --- |
| Clip no disponible | `503` |
| Estado de dispositivo no válido | `409` |
| Fallo en el comando del dispositivo | `502` |
| Solicitud incorrecta del cliente | `400` |

Los códigos exactos dependen de la aplicación. El código fuera del adaptador debe depender de `ClipUnavailable` y `ClipStateError`, no de excepciones del SDK.

### Reconexión

Ante un error del dispositivo, márcalo como no disponible y vuelve a conectar o recrea el transporte. Un tiempo de espera de comando requiere reconexión antes del siguiente comando porque el transporte ya no puede correlacionar respuestas. Expón el fallo como `ClipUnavailable` y luego vuelve a conectar desde una tarea en segundo plano o desde la siguiente solicitud. Consulta [Recuperación de desconexión BLE y tiempo de espera de comandos](#ble-disconnect-and-command-timeout-recovery) para ver una implementación completa con bloqueo de conexión, comprobaciones de estado en segundo plano, retroceso exponencial y recuperación de sesión.

### Idempotencia

Las reintentos HTTP, los reintentos de workers y los reinicios pueden enviar el mismo `session_id` más de una vez. Comprueba el estado persistente antes de procesarlo.

Haz un seguimiento de cada sesión en tu base de datos:

| `session_id` | `downloaded` | `processed` | `result_id` | `created_at` |
| --- | --- | --- | --- | --- |
| Sesión de dispositivo única | Estado de descarga | Estado de la canalización | Referencia al resultado | Momento de la primera ingestión |

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

Esto evita el procesamiento duplicado y los efectos secundarios posteriores.

### Propiedad del estado

Mantén el estado del dispositivo separado del estado del flujo de trabajo:

| Estado | Propietario | Valores de ejemplo |
| --- | --- | --- |
| Estado del Clip | Capa de integración del dispositivo (`ClipService`) | conectado, grabando, sesión disponible, descargable |
| Estado del flujo de trabajo | Capa de aplicación/trabajo | ingiriendo, procesando, completado, fallido |

No colapses ambas máquinas de estados en un solo campo. Una sesión puede descargarse mientras su flujo de trabajo de aplicación aún se está ejecutando.

## Próximos pasos

Después de que el adaptador esté funcionando, mantén la integración del dispositivo separada de cualquier procesamiento específico de la aplicación. Páginas relacionadas:

- [reSpeaker Clip Basic SDK Guide](/es/respeaker_clip_basic_sdk_guide) — protocolo del dispositivo, `ClipClient` API, transporte BLE/UDP, transferencia de archivos
- [Getting Started with the reSpeaker Clip Firmware SDK](/es/respeaker_clip_firmware_quick_start) — cuando necesites modificar el firmware del lado del dispositivo en lugar de integrar el SDK

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
