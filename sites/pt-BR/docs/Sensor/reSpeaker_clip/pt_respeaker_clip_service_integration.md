---
description: Integre o reSpeaker Clip a um serviço Python existente com um adaptador de dispositivo, gerenciamento de ciclo de vida da aplicação, rotas de API e tratamento de estado seguro para produção.
title: Integrar reSpeaker Clip ao Seu Serviço
keywords:
  - reSpeaker Clip
  - integração de serviço
  - serviço Python
  - FastAPI
  - fonte de áudio
  - adaptador de dispositivo
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-banner.jpg
slug: /respeaker_clip_service_integration
sku: 100020126
last_update:
  date: 10/19/2026
  author: Ray
createdAt: '2026-08-07'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/pt-br/respeaker_clip_service_integration/
---

# Integrar reSpeaker Clip ao Seu Serviço

Este guia mostra como adicionar o reSpeaker Clip como uma fonte de áudio gerenciada a um serviço Python existente. Ele foca na fronteira de integração: um adaptador de dispositivo, uma conexão de longa duração, uma pequena superfície de API e propriedade de estado bem definida.

> **O reSpeaker Clip é uma fonte de entrada.** `ClipClient` lida com a comunicação com o dispositivo, `ClipService` o adapta à sua aplicação, e o seu serviço mantém a responsabilidade pelo processamento e pela lógica de negócio.

Para configuração de transporte, a API completa do `ClipClient`, comandos AT e o protocolo de transferência de arquivos, consulte o [Guia Básico do SDK do reSpeaker Clip](/pt-br/respeaker_clip_basic_sdk_guide). Esta página não volta a explicar BLE/GATT, formatos de quadro, tratamento de CRC ou ferramentas de CLI.

## Abordagem de Integração

Mantenha o dispositivo atrás de um adaptador estreito e envie gravações baixadas para o ponto de entrada de processamento que o seu serviço já usa:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_existing_service_clip_as_new_audio_source_v2.png" alt="Existing service with reSpeaker Clip as a new audio source" width={900} height="auto" /></p>

1. Crie um `ClipService` para cada dispositivo físico.
2. Conecte-o durante a inicialização da aplicação e desconecte-o durante o desligamento.
3. Exponha apenas as operações de gravação de que o seu serviço precisa.
4. Passe arquivos de áudio concluídos para o pipeline de processamento existente.

## Antes de Começar

Este guia pressupõe que você já consegue se comunicar com um Clip na sua própria máquina. Antes de continuar, certifique-se de que você consegue:

- instalar o SDK Python do reSpeaker Clip e conectar a um Clip;
- iniciar e parar uma gravação;
- listar sessões concluídas;
- baixar uma gravação com sucesso.

Se qualquer uma dessas etapas falhar, pare aqui e conclua primeiro o [Guia Básico do SDK do reSpeaker Clip](/pt-br/respeaker_clip_basic_sdk_guide). O Guia Básico do SDK é a fonte de verdade para configuração de transporte, comandos do dispositivo e detalhes de transferência de arquivos; este guia faz referência a ele em vez de repetir o conteúdo.

## Escolha o Guia Correto do reSpeaker Clip

A documentação do reSpeaker Clip é organizada por camada de desenvolvimento. Comece com **Getting Started** para configuração do produto e fluxos de trabalho normais. Use o **Basic SDK** quando um aplicativo host precisar controlar o dispositivo ou baixar gravações. Continue para **Service Integration** quando um serviço de longa duração precisar ter posse da conexão com o dispositivo e expor APIs. Use o **Firmware SDK** somente quando você precisar alterar o comportamento no lado do dispositivo, protocolos ou processamento de áudio.

<div className="row">
  <div className="col col--6 margin-bottom--lg">
    <a [LINE_58]      href="/pt-br/respeaker_clip/"
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
        <p style={{margin: 0, fontSize: '0.78rem', lineHeight: 1.45}}>Visão geral do produto, configuração de hardware e fluxos de primeira utilização.</p>
        </div>
      </a>
    </div>

  <div className="col col--6 margin-bottom--lg">
  <a [LINE_77]      href="/pt-br/respeaker_clip_basic_sdk_guide/"
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
      <p style={{margin: 0, fontSize: '0.78rem', lineHeight: 1.45}}>Controle o dispositivo, gerencie gravações e baixe áudio sem alterar o firmware.</p>
        </div>
        </a>
      </div>

  <div className="col col--6 margin-bottom--lg">
    <a [LINE_96]      href="/pt-br/respeaker_clip_service_integration/"
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
      <p style={{margin: 0, fontSize: '0.78rem', lineHeight: 1.45}}>Adicione o reSpeaker Clip a um serviço Python de longa duração por meio de um adaptador e rotas de API.</p>
      </div>
        </a>
        </div>

    <div className="col col--6 margin-bottom--lg">
  <a [LINE_116]      href="/pt-br/respeaker_clip_firmware_quick_start/"
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
        <p style={{margin: 0, fontSize: '0.78rem', lineHeight: 1.45}}>Compile, grave, depure e personalize o comportamento no lado do dispositivo.</p>
      </div>
      </a>
        </div>
        </div>

    ## Adicionar reSpeaker Clip como Fonte de Áudio ao Seu Serviço Existente

Siga as etapas abaixo para conectar o adaptador de dispositivo a um serviço FastAPI existente.

### Etapa 1: Preparar o Pipeline

Pressuponha que o seu serviço já tenha uma função que aceita um arquivo de áudio:

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

### Etapa 3: Vincular ciclo de vida

Crie o adaptador durante a inicialização do FastAPI, armazene-o no estado da aplicação e desconecte-o durante o desligamento.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_service_lifecycle_v2.png" alt="Service lifecycle for reSpeaker Clip integration" width={900} height="auto" /></p>

Vincule a conexão ao ciclo de vida (lifespan) do FastAPI para que ela seja aberta uma vez na inicialização e fechada uma vez na parada:

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

### Etapa 4: Adicionar rotas

Crie endpoints para iniciar, parar e ingerir uma gravação concluída:

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

### Etapa 5: Registrar o roteador

Importe o roteador em `main.py` e registre-o após criar a aplicação FastAPI:

```python
from routes import router

app = FastAPI(lifespan=lifespan)
app.include_router(router)
```

A integração agora consiste em `main.py`, `routes.py`, `clip_service.py` e `audio_service.py` no pacote da sua aplicação.

### Etapa 6: Verificar a API

Inicie o serviço e, em seguida, chame as rotas na seguinte ordem:

```bash
curl -X POST "http://localhost:8000/clip/recordings/start"
curl -X POST "http://localhost:8000/clip/recordings/stop"
curl -X POST "http://localhost:8000/clip/sessions/<session_id>/ingest"
```

As respostas de início e parada devem conter o mesmo `session_id`. A resposta de ingestão deve conter os arquivos retornados pelo seu pipeline `AudioService` existente.

## Recuperação de desconexão BLE e timeout de comando

O adaptador acima cobre apenas o caminho feliz. Um serviço de longa duração também deve lidar com duas falhas:

- **Perda de link**: o dispositivo sai do alcance, entra em modo de suspensão, o adaptador Bluetooth do host é reiniciado ou outro aplicativo assume o controle.
- **Timeout de comando**: o dispositivo não responde antes do prazo. O protocolo de firmware não possui ID de requisição, portanto o transporte não consegue correlacionar uma resposta atrasada com o próximo comando. Um timeout, portanto, exige uma reconexão em vez de uma nova tentativa direta.

Esta seção fornece uma implementação de referência que substitui `clip_service.py` diretamente. Ela mantém a interface `connect()`, `disconnect()`, `start_recording()`, `stop_recording()` e `download_session()` e adiciona recuperação automática.

### Design

- **Lock de conexão**: operações de negócio e desconexão/reconexão compartilham um único `asyncio.Lock`, de modo que nenhum comando ou download atravesse uma reconexão.
- **Verificação de integridade em segundo plano**: a cada `health_check_interval` segundos a tarefa verifica `ClipClient.is_connected`. Uma operação de negócio que detecta uma queda ou timeout acorda a tarefa imediatamente por meio de um evento.
- **Backoff exponencial limitado**: as esperas começam em 1 segundo, dobram a cada tentativa com falha e param em 30 segundos. Cada tentativa de conexão tem seu próprio limite de 30 segundos. Uma conexão bem-sucedida redefine o backoff.
- **Sem repetição de comandos**: um início, parada ou download com falha apenas gera `ClipUnavailable`. O dispositivo pode já ter executado o comando e apenas a resposta foi perdida; repetir poderia criar uma gravação ou transferência duplicada.
- **Sonda de prontidão após reconexão**: o adaptador chama `status()` uma vez. Se o dispositivo ainda estiver gravando e retornar um `session_id`, ele restaura `_active_session`; caso contrário, limpa o estado de sessão local. Isso cobre tanto “a gravação continuou durante a queda” quanto “a resposta de parada foi perdida”.
- **Desligamento gracioso**: cancela e aguarda a tarefa em segundo plano antes de fechar o cliente; nenhuma reconexão é agendada após o desligamento.
- **Apenas API pública**: a detecção de queda usa `ClipClient.is_connected`; a recuperação usa `ClipClient.status()`. Nenhuma nova API do SDK é adicionada.

> **Limpeza de inscrição BLE.** O `BleTransport.disconnect()` do SDK atual ignora o cliente Bleak subjacente quando o link já está derrubado, então o BlueZ mantém a inscrição de notificação desse cliente. Reconectar o mesmo objeto de transporte então faz com que cada notificação seja entregue duas vezes (tanto respostas de comando quanto quadros de arquivo), e os downloads falham com `received FILE_START before previous file ended`. O `_close_link()` de referência chama o `disconnect()` público do cliente subjacente após o disconnect do transporte para liberar a inscrição. Transportes UDP não são afetados.

> **Condição de corrida na inicialização.** O firmware pode responder `AT+START` com `ok` e um `data` vazio antes que a thread de áudio publique o ID da sessão. `start_recording()` faz polling de `status()` para obter o ID em vez de tratar uma gravação em andamento como um início com falha.

### Configuração

| Parâmetro | Padrão | Finalidade |
| --- | --- | --- |
| `command_timeout` | `10.0` | Timeout de resposta por comando passado para `ClipClient` |
| `health_check_interval` | `2.0` | Segundos entre verificações de `is_connected` em segundo plano |
| `reconnect_initial_delay` | `1.0` | Espera antes da primeira tentativa de reconexão, em segundos |
| `reconnect_max_delay` | `30.0` | Teto do backoff, em segundos |
| `reconnect_attempt_timeout` | `30.0` | Limite para uma tentativa de conexão e sua sonda de prontidão, em segundos |

### Implementação de referência completa

Substitua `clip_service.py` pela seguinte versão:

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

O código da aplicação e as rotas não mudam: `ClipService(transport)` mantém o mesmo formato de chamada. Uma falha durante a conexão inicial ainda é propagada; a recuperação em segundo plano cobre apenas quedas após o serviço ter sido iniciado com sucesso.

### Verificação

O comportamento abaixo foi verificado com um Clip físico via BLE:

- **Perda de link**: após forçar um desligamento de BLE a partir do host, a tarefa em segundo plano o detecta no próximo ciclo de verificação de integridade e reconecta; os comandos funcionam após a recuperação.
- **Timeout de comando**: após injetar um `CommandTimeoutError`, o link antigo é fechado, o comando que falhou é executado uma vez, e o adaptador se recupera.
- **Sequência de backoff**: falhas de conexão consecutivas aguardam 1, 2, 4, 8, 16, 30 e 30 segundos; um sucesso redefine a espera para 1 segundo.
- **Recuperação de gravação**: o dispositivo continua gravando durante a queda; após reconectar, `_active_session` é restaurada a partir de `status()`. Quando o dispositivo está ocioso, o estado de sessão local é limpo.
- **Concorrência**: durante a reconexão, requisições de negócio falham rapidamente com `ClipUnavailable` (mapeado para `503`) em vez de esperar. O lock de conexão impede que comandos atravessem uma conexão ou desconexão.
- **Desligamento**: a tarefa em segundo plano é encerrada e nenhuma nova tentativa de reconexão é agendada.
- **Download após recuperação**: uma sessão baixada após a reconexão passa nas verificações de comprimento e CRC32.

## Considerações de Produção para um Serviço de Longa Duração

Mantenha explícitos o estado de conexão, de erro e de fluxo de trabalho quando a integração é executada como um serviço.

### Fronteira do Adaptador

Mantenha todas as chamadas de `ClipClient` dentro de `ClipService`. O adaptador é responsável pelo acesso à conexão, comandos de gravação, downloads e tradução de erros do SDK; ele não é responsável por processamento, armazenamento ou outra lógica de negócio.

O código acima do adaptador deve usar conceitos de aplicação como `session_id` e exceções da aplicação em vez de detalhes de transporte, comando AT ou transferência de arquivos.

### Reutilização do Client

Mapeie um Clip físico para um `ClipClient` de longa duração e um `ClipService`. Como o firmware não possui ID de requisição, `ClipClient` serializa os comandos. Para vários dispositivos, indexe instâncias de `ClipService` pelo ID do dispositivo em um `ClipManager`.

### Tempo de Vida da Conexão

Um erro comum é abrir o dispositivo dentro do manipulador de requisição:

```python
# WRONG — do not do this in a service
@app.post("/clip/start")
async def start():
    async with ClipClient(BleTransport(name="Clip")) as clip:
        await clip.start_recording()
```

Isso reconecta a cada chamada e perde a sessão ativa entre as requisições. O tempo de vida da aplicação é o dono da conexão; as requisições a reutilizam.

### Fronteira de Erros

Traduza exceções do SDK em exceções da aplicação dentro de `ClipService`, depois mapeie-as para respostas HTTP na fronteira da rota.

Um mapeamento de exemplo simples (ilustrativo, não uma exigência do SDK):

| Condição da aplicação | Status HTTP |
| --- | --- |
| Clip indisponível | `503` |
| Estado inválido do dispositivo | `409` |
| Falha no comando do dispositivo | `502` |
| Requisição inválida do cliente | `400` |

Os códigos exatos são específicos da aplicação. O código fora do adaptador deve depender de `ClipUnavailable` e `ClipStateError`, não de exceções do SDK.

### Reconexão

Em caso de erro do dispositivo, marque o dispositivo como indisponível e reconecte ou recrie o transporte. Um timeout de comando exige reconexão antes do próximo comando porque o transporte não consegue mais correlacionar respostas. Superficialize a falha como `ClipUnavailable`, depois reconecte a partir de uma tarefa em segundo plano ou da próxima requisição. Veja [BLE Disconnect and Command Timeout Recovery](#BLE-Disconnect-and-Command-Timeout-Recovery) para uma implementação completa com um lock de conexão, verificações de integridade em segundo plano, backoff exponencial e recuperação de sessão.

### Idempotência

Repetições de HTTP, repetições de workers e reinicializações podem enviar o mesmo `session_id` mais de uma vez. Verifique o estado persistente antes de processá-lo.

Acompanhe cada sessão no seu banco de dados:

| `session_id` | `downloaded` | `processed` | `result_id` | `created_at` |
| --- | --- | --- | --- | --- |
| Sessão única do dispositivo | Status de download | Status do pipeline | Referência do resultado | Hora da primeira ingestão |

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

Isso evita processamento duplicado e efeitos colaterais a jusante.

### Propriedade de Estado

Mantenha o estado do dispositivo separado do estado do fluxo de trabalho:

| Estado | Responsável | Exemplos de valores |
| --- | --- | --- |
| Estado do Clip | Camada de integração com o dispositivo (`ClipService`) | conectado, gravando, sessão disponível, baixável |
| Estado do fluxo de trabalho | Camada de aplicação/job | ingerindo, processando, concluído, com falha |

Não colapse ambas as máquinas de estado em um único campo. Uma sessão pode ser baixada enquanto seu fluxo de trabalho de aplicação ainda está em execução.

## Próximas Etapas

Depois que o adaptador estiver funcionando, mantenha a integração com o dispositivo separada de qualquer processamento específico da aplicação. Páginas relacionadas:

- [reSpeaker Clip Basic SDK Guide](/pt-br/respeaker_clip_basic_sdk_guide) — protocolo do dispositivo, API `ClipClient`, transporte BLE/UDP, transferência de arquivos
- [Getting Started with the reSpeaker Clip Firmware SDK](/pt-br/respeaker_clip_firmware_quick_start) — quando você precisa modificar o firmware do lado do dispositivo em vez de integrar o SDK

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
