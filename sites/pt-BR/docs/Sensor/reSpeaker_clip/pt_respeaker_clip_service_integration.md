---
description: Integre o reSpeaker Clip a um serviço Python existente com um adaptador de dispositivo, gerenciamento de ciclo de vida da aplicação, rotas de API e tratamento de estado seguro para produção.
title: Integre o reSpeaker Clip ao Seu Serviço
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
  date: 08/14/2026
  author: Ray
createdAt: '2026-08-07'
updatedAt: '2026-08-18'
url: https://wiki.seeedstudio.com/pt-br/respeaker_clip_service_integration/
---

# Integre o reSpeaker Clip ao Seu Serviço

Este guia mostra como adicionar o reSpeaker Clip como uma fonte de áudio gerenciada a um serviço Python existente. Ele se concentra na fronteira de integração: um adaptador de dispositivo, uma conexão de longa duração, uma pequena superfície de API e uma propriedade de estado bem definida.

> **O reSpeaker Clip é uma fonte de entrada.** `ClipClient` lida com a comunicação com o dispositivo, `ClipService` o adapta à sua aplicação, e o seu serviço mantém a responsabilidade pelo processamento e pela lógica de negócio.

Para configuração de transporte, a API completa do `ClipClient`, comandos AT e o protocolo de transferência de arquivos, consulte o [Guia Básico do SDK do reSpeaker Clip](/pt-br/respeaker_clip_basic_sdk_guide). Esta página não volta a explicar BLE/GATT, formatos de quadro, tratamento de CRC ou ferramentas de CLI.

## Abordagem de Integração

Mantenha o dispositivo atrás de um adaptador estreito e envie gravações baixadas para o ponto de entrada de processamento que o seu serviço já utiliza:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_existing_service_clip_as_new_audio_source_v2.png" alt="Existing service with reSpeaker Clip as a new audio source" width={900} height="auto" /></p>

1. Crie um `ClipService` para cada dispositivo físico.
2. Conecte-o durante a inicialização da aplicação e desconecte-o durante o encerramento.
3. Exponha apenas as operações de gravação de que o seu serviço precisa.
4. Passe arquivos de áudio concluídos para o pipeline de processamento existente.

## Antes de Começar

Este guia pressupõe que você já consegue se comunicar com um Clip na sua própria máquina. Antes de continuar, certifique-se de que você consegue:

- instalar o SDK Python do reSpeaker Clip e conectar a um Clip;
- iniciar e parar uma gravação;
- listar sessões concluídas;
- baixar uma gravação com sucesso.

Se qualquer um destes itens falhar, pare aqui e conclua primeiro o [Guia Básico do SDK do reSpeaker Clip](/pt-br/respeaker_clip_basic_sdk_guide). O Guia Básico do SDK é a fonte de verdade para configuração de transporte, comandos do dispositivo e detalhes de transferência de arquivos; este guia faz referência a ele em vez de repeti-lo.

## Escolha o Guia Certo do reSpeaker Clip

A documentação do reSpeaker Clip é organizada por camada de desenvolvimento. Comece com **Getting Started** para configuração do produto e fluxos de trabalho normais. Use o **Basic SDK** quando um aplicativo host precisar controlar o dispositivo ou baixar gravações. Continue para **Service Integration** quando um serviço de longa duração precisar ser o responsável pela conexão com o dispositivo e expor APIs. Use o **Firmware SDK** somente quando você precisar alterar o comportamento no lado do dispositivo, protocolos ou processamento de áudio.

<div className="row">
  <div className="col col--6 margin-bottom--lg">
    <a
      href="/pt-br/respeaker_clip/"
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
    <a
      href="/pt-br/respeaker_clip_basic_sdk_guide/"
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
    <a
      href="/pt-br/respeaker_clip_service_integration/"
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
    <a
      href="/pt-br/respeaker_clip_firmware_quick_start/"
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

## Adicione o reSpeaker Clip como uma Fonte de Áudio ao Seu Serviço Existente

Siga as etapas abaixo para conectar o adaptador de dispositivo a um serviço FastAPI existente.

### Etapa 1: Preparar o Pipeline

Pressuponha que o seu serviço já tenha uma função que aceita um arquivo de áudio:

```python
async def process_audio(path: Path) -> dict:
    # your existing processing pipeline
    ...
```

Uma rota de upload existente já chama essa função:

```python
@app.post("/audio")
async def upload_audio(file: UploadFile):
    path = await save_upload(file)
    return await process_audio(path)
```

A integração do Clip deve gerar um arquivo de áudio local padrão e chamar a mesma função `process_audio()`. O processamento deve continuar independente do dispositivo de captura.

Encapsule essa função no objeto de serviço usado pela rota de ingestão do Clip:

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

### Etapa 2: Criar o adaptador

Encapsule apenas as operações necessárias para esta integração: conectar, desconectar, iniciar, parar e baixar.

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

Vincule a conexão ao ciclo de vida do FastAPI para que ela seja aberta uma vez na inicialização e fechada uma vez na parada:

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

As respostas de início e parada devem conter o mesmo `session_id`. A resposta de ingestão deve conter os arquivos retornados pelo pipeline `AudioService` existente.

## Considerações de produção para um serviço de longa duração

Mantenha o estado de conexão, erro e fluxo de trabalho explícito quando a integração estiver em execução como um serviço.

### Limite do adaptador

Mantenha todas as chamadas de `ClipClient` dentro de `ClipService`. O adaptador é responsável pelo acesso à conexão, comandos de gravação, downloads e tradução de erros do SDK; ele não é responsável por processamento, armazenamento ou outra lógica de negócio.

O código acima do adaptador deve usar conceitos da aplicação, como `session_id` e exceções da aplicação, em vez de detalhes de transporte, comando AT ou transferência de arquivos.

### Reutilização do cliente

Mapeie um Clip físico para um `ClipClient` de longa duração e um `ClipService`. Como o firmware não possui ID de requisição, `ClipClient` serializa comandos. Para vários dispositivos, indexe instâncias de `ClipService` pelo ID do dispositivo em um `ClipManager`.

### Tempo de vida da conexão

Um erro comum é abrir o dispositivo dentro do manipulador de requisição:

```python
# WRONG — do not do this in a service
@app.post("/clip/start")
async def start():
    async with ClipClient(BleTransport(name="Clip")) as clip:
        await clip.start_recording()
```

Isso reconecta a cada chamada e perde a sessão ativa entre as requisições. O ciclo de vida da aplicação é o dono da conexão; as requisições a reutilizam.

### Limite de erro

Traduza exceções do SDK em exceções da aplicação dentro de `ClipService` e, em seguida, mapeie-as para respostas HTTP no limite da rota.

Um mapeamento de exemplo simples (ilustrativo, não uma exigência do SDK):

| Condição da aplicação | Status HTTP |
| --- | --- |
| Clip indisponível | `503` |
| Estado inválido do dispositivo | `409` |
| Falha no comando do dispositivo | `502` |
| Requisição inválida do cliente | `400` |

Os códigos exatos são específicos da aplicação. O código fora do adaptador deve depender de `ClipUnavailable` e `ClipStateError`, não de exceções do SDK.

### Reconexão

Em caso de erro do dispositivo, marque o dispositivo como indisponível e reconecte ou recrie o transporte. Um tempo limite de comando exige reconexão antes do próximo comando, porque o transporte não consegue mais correlacionar respostas. Exponha a falha como `ClipUnavailable` e, em seguida, reconecte a partir de uma tarefa em segundo plano ou da próxima requisição.

### Idempotência

Repetições de HTTP, repetições de workers e reinicializações podem enviar o mesmo `session_id` mais de uma vez. Verifique o estado persistente antes de processá-lo.

Acompanhe cada sessão no seu banco de dados:

| `session_id` | `downloaded` | `processed` | `result_id` | `created_at` |
| --- | --- | --- | --- | --- |
| Sessão única do dispositivo | Status de download | Status do pipeline | Referência do resultado | Horário da primeira ingestão |

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

### Propriedade de estado

Mantenha o estado do dispositivo separado do estado do fluxo de trabalho:

| Estado | Responsável | Valores de exemplo |
| --- | --- | --- |
| Estado do Clip | Camada de integração do dispositivo (`ClipService`) | conectado, gravando, sessão disponível, disponível para download |
| Estado do fluxo de trabalho | Camada de aplicação/job | ingerindo, processando, concluído, com falha |

Não una as duas máquinas de estado em um único campo. Uma sessão pode ser baixada enquanto o fluxo de trabalho da aplicação ainda está em execução.

## Próximas etapas

Depois que o adaptador estiver funcionando, mantenha a integração do dispositivo separada de qualquer processamento específico da aplicação. Páginas relacionadas:

- [reSpeaker Clip Basic SDK Guide](/pt-br/respeaker_clip_basic_sdk_guide) — protocolo do dispositivo, API `ClipClient`, transporte BLE/UDP, transferência de arquivos
- [Getting Started with the reSpeaker Clip Firmware SDK](/pt-br/respeaker_clip_firmware_quick_start) — quando você precisar modificar o firmware do lado do dispositivo em vez de integrar o SDK

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
