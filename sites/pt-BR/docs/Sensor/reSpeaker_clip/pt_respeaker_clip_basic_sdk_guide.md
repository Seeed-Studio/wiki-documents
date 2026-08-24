---
description: Guia sistemático do reSpeaker Clip Basic SDK — transportes, protocolos de comunicação, máquina de estados de gravação, modelo de arquivos, fluxo de dados ponta a ponta e o SDK em Python como implementação de referência principal com ferramentas de CLI e Web.
title: Guia do reSpeaker Clip Basic SDK
keywords:
  - reSpeaker clip
  - python
  - sdk
  - ble
  - wifi
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/c/h/chatgpt_image_2026_7_3_10_12_05.png
slug: /respeaker_clip_basic_sdk_guide
sku: 100020126
last_update:
  date: 07/13/2026
  author: Ray He / Kasun Thushara
createdAt: '2026-07-13'
updatedAt: '2026-08-18'
url: https://wiki.seeedstudio.com/pt-br/respeaker_clip_basic_sdk_guide/
---

# Guia do reSpeaker Clip Basic SDK

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-banner.jpg" alt="reSpeaker Clip" width={800} height="auto" /></p>

> Versão: corresponde ao pacote `clip` `__version__ = 1.0.0`  
> Produto: gravador vestível reSpeaker Clip

## Visão geral

O Guia do reSpeaker Clip Basic SDK explica como aplicativos no host se comunicam e controlam o dispositivo por meio de BLE, Wi‑Fi, comandos AT, GATT e fluxos de transferência de arquivos. O SDK em Python é fornecido como a implementação de referência principal, junto com ferramentas de CLI e baseadas na Web.

Este guia abrange:

- **Transportes** — canais de comunicação BLE e Wi‑Fi/UDP.
- **Protocolos de comunicação** — comandos AT, características GATT e enquadramento de transferência de arquivos.
- **Modelo de gravação** — modos de gravação, máquina de estados do dispositivo e formato de arquivo.
- **Fluxo de dados ponta a ponta** — da conexão até a saída de áudio baixada.
- **Implementações de referência** — SDK em Python (pacote `clip`), ferramentas de CLI e uma interface Web.

O Basic SDK se concentra em usar as capacidades atuais do dispositivo a partir do lado do host. Ele não inclui, por si só, transcrição em nuvem, sumarização por IA, gerenciamento de contas ou serviços de aplicativo móvel. Esses fluxos de trabalho devem ser construídos sobre os arquivos de áudio baixados ou integrados com outro serviço.

## Onde este guia se encaixa

Se você é novo no reSpeaker Clip, leia primeiro o [Guia de Introdução ao reSpeaker Clip](/pt-br/respeaker_clip).

O Guia de Introdução apresenta o produto, cenários-alvo, capacidades de hardware e fluxos de trabalho normais do usuário.

Este guia se concentra no desenvolvimento do lado do aplicativo:

- comunicação com o dispositivo via BLE ou Wi‑Fi;
- controle da gravação e da configuração do dispositivo;
- gerenciamento e download de sessões de gravação;
- entendimento de comandos AT, GATT e protocolos de transferência de arquivos;
- integração dessas capacidades por meio de ferramentas em Python, CLI ou Web.

## Escolha o guia certo do reSpeaker Clip

A documentação do reSpeaker Clip é organizada por camada de desenvolvimento. Comece com **Getting Started** para configuração do produto e fluxos de trabalho normais. Use o **Basic SDK** quando um aplicativo no host precisar controlar o dispositivo ou baixar gravações. Continue para **Service Integration** quando um serviço de longa duração precisar manter a conexão com o dispositivo e expor APIs. Use o **Firmware SDK** somente quando você precisar alterar o comportamento do lado do dispositivo, protocolos ou processamento de áudio.

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
      aria-current="page"
      className="card shadow--md respeaker-clip-nav-card respeaker-clip-nav-card--active"
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
      className="card shadow--md respeaker-clip-nav-card"
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
        <p style={{margin: 0, fontSize: '0.78rem', lineHeight: 1.45}}>Compile, grave, depure e personalize o comportamento do lado do dispositivo.</p>
      </div>
    </a>
  </div>
</div>

## Instalação

### Requisitos

- Python 3.10+
- Adaptador Bluetooth (modo BLE)
- Adaptador Wi‑Fi (modo Wi‑Fi)

### Clonar o repositório

Você pode encontrar o repositório no GitHub [aqui](https://github.com/Seeed-Projects/respeaker_clip_python/tree/main).

```bash
git clone <repository-url>
```

### Instalar dependências

Após ativar o ambiente virtual, instale as dependências necessárias:

```bash
pip install -r requirements.txt
```

## Estrutura do projeto

```
applications/clip/tests/
├── clip/                    Biblioteca SDK (importável)
│   ├── __init__.py
│   ├── client.py            Conexão BLE + transporte de comandos AT
│   ├── commands.py          Wrappers de comandos AT de alto nível
│   ├── transfer.py          Transferência de arquivos via BLE + SessionSync
│   ├── codec.py             Utilitários de codec Opus/Ogg
│   ├── wifi.py              Transporte WiFi UDP + WiFiSync
│   ├── progress.py          Utilitários para barra de progresso
│   ├── utils.py             Utilitários de mesclagem de arquivos e formatação
│   └── exceptions.py        Classes de exceções personalizadas
├── tools/                   Scripts de CLI e utilitários
│   ├── clip-cli.py          CLI principal (BLE + WiFi + USB)
│   ├── clip-web.py          Interface web
│   ├── record.py            Ferramenta de controle de gravação
│   ├── sync.py              Utilitário de sincronização de arquivos
│   ├── udp_sync.py          Sincronização via WiFi UDP
│   ├── udp_terminal.py      Terminal WiFi UDP
│   ├── ble_terminal.py      Terminal interativo BLE
│   ├── serial_terminal.py   Terminal serial USB CDC
│   └── decode_opus.py       Utilitário de decodificação Opus
├── tests/                   Suíte de testes
│   ├── conftest.py          Fixtures compartilhadas (device_session, mock_device)
│   ├── test_basic.py        Comandos AT: VERSION, STATE, TIME, PAIR, erros
│   ├── test_config.py       Configuração: MODE, AUTODEL, BRIGHTNESS
│   ├── test_recording.py    Gravação: START/STOP, marcadores, transições de estado
│   ├── test_storage.py      Armazenamento: LIST, DELETE, persistência, quantidade de arquivos
│   ├── test_transfer.py     Transferência: download, sincronização, progresso, concorrência
│   └── test_unit.py         Testes unitários (não requerem dispositivo)
├── workspace/               Scripts de exemplo do workspace
│   └── complete_example.py
├── requirements.txt
├── README.md
└── pytest.ini
```

### Módulos do SDK

| Módulo        | Descrição                          |
| ------------- | ---------------------------------- |
| client.py     | Comunicação com dispositivos BLE  |
| commands.py   | Comandos AT de alto nível          |
| transfer.py   | Sincronização de arquivos          |
| codec.py      | Codificação/decodificação de áudio |
| wifi.py       | Transporte WiFi                    |
| progress.py   | Exibição de progresso              |
| utils.py      | Funções auxiliares                 |
| exceptions.py | Classes de exceções                |

---

## Capacidades do SDK

O SDK em Python oferece suporte aos seguintes fluxos de trabalho:

- **Configurar o dispositivo**: modo de gravação, bitrate, complexidade, política de exclusão automática, brilho do OLED, nome do dispositivo BLE e configurações relacionadas.
- **Controlar a gravação**: iniciar, parar, pausar, retomar e adicionar marcadores.
- **Gerenciar sessões**: listar, consultar, excluir, limpar e formatar o cartão SD.
- **Baixar arquivos**: transferir gravações via BLE ou Wi‑Fi/UDP, com suporte a retomada.
- **Converter áudio**: reempacotar os dados Opus brutos do dispositivo em OGG/Opus ou decodificar para WAV mono 16 kHz por meio de um caminho de decodificação Opus.
- **Ler status e eventos**: nível de bateria, estado de carregamento, estado do dispositivo, mudanças na máquina de estados e callbacks de visualização de áudio em tempo real.
- **Manage sessions**: list, query, delete, purge, and format the SD card.
- **Download files**: transfer recordings over BLE or Wi-Fi/UDP, with resume support.
- **Convert audio**: re-container device raw Opus data into OGG/Opus, or decode to 16 kHz mono WAV through an Opus decoding path.
- **Read status and events**: battery level, charging state, device state, state-machine changes, and real-time audio-visualization callbacks.

A escolha do transporte é importante:

- Use BLE por meio de `ClipDevice` para configuração portátil, controle de gravação e pequenos downloads.
- Use Wi-Fi/UDP por meio de `WiFiDevice` ou `WiFiSync` para downloads em massa. É mais rápido e mais estável para sessões de gravação longas.
- O controle de gravação é apenas via BLE. O download de arquivos funciona tanto em BLE quanto em Wi‑Fi.

## Conceitos principais

Esta seção descreve a visão do lado do host usada pelo Basic SDK. Para os
detalhes de implementação do lado do dispositivo, consulte as seções correspondentes do Guia de Desenvolvimento de Firmware
:

| Tópico do Basic SDK | Explicação detalhada do firmware |
| --- | --- |
| Transportes | [Communication Protocol](/pt-br/respeaker_clip_firmware_development_guide/#communication-protocol) |
| Modos de gravação | [Recording Modes](/pt-br/respeaker_clip_firmware_development_guide/#recording-modes) |
| Estado do dispositivo | [Event and State Model](/pt-br/respeaker_clip_firmware_development_guide/#event-and-state-model) |
| Formato de arquivo e sessões | [Session, Chunking, and Storage Model](/pt-br/respeaker_clip_firmware_development_guide/#session-chunking-and-storage-model) |
| Protocolo de comando AT | [AT Command Grammar](/pt-br/respeaker_clip_firmware_development_guide/#at-command-grammar), [JSON Response Contract](/pt-br/respeaker_clip_firmware_development_guide/#json-response-contract), and [Registered Command Reference](/pt-br/respeaker_clip_firmware_development_guide/#registered-command-reference) |
| Características GATT | [BLE GATT Service](/pt-br/respeaker_clip_firmware_development_guide/#ble-gatt-service) |
| Transferência e retomada de arquivos | [UDP Frame Types](/pt-br/respeaker_clip_firmware_development_guide/#udp-frame-types) and [Session and File Addressing](/pt-br/respeaker_clip_firmware_development_guide/#session-and-file-addressing) |
| Fluxo de dados de ponta a ponta | [System Architecture](/pt-br/respeaker_clip_firmware_development_guide/#system-architecture) and [Audio Pipeline](/pt-br/respeaker_clip_firmware_development_guide/#audio-pipeline) |

### Transportes

| Transporte | Classe | Caso de uso | Observações |
| --- | --- | --- | --- |
| BLE | `ClipDevice` | Configuração, controle de gravação, download de sessão | Portátil e necessário para controle de gravação. O download em massa pode ser mais lento e pode perder notificações sob carga. |
| Wi-Fi/UDP | `WiFiDevice` / `WiFiSync` | Download em massa de sessões | Mais rápido e mais estável para arquivos grandes. Requer habilitar o Wi‑Fi no dispositivo e conectar‑se a `ClipAP_XXXX`. |

### Modos de gravação

| Modo | Descrição |
| --- | --- |
| `normal` | Caminho de gravação padrão sem supressão de ruído / desreverberação SpeexDSP. AGC do dispositivo, passa‑altas e limitador ainda podem estar habilitados pelo firmware. |
| `enhanced` | Caminho aprimorado com supressão de ruído e desreverberação SpeexDSP habilitadas. |

`set_mode()` aceita apenas `normal` e `enhanced`. `start_recording()` também aceita os aliases `stereo` e `merge`; `stereo` é mapeado para `normal`, e `merge` é mapeado para `enhanced`.

Ambos os modos geram, por padrão, Opus mono a 16 kHz.

### Estado do dispositivo

Uma gravação é representada como uma sessão. Um ID de sessão geralmente é uma string no estilo de carimbo de data/hora, como `YYYYMMDDHHMMSS`.

```text
IDLE --start_recording--> RECORDING --stop_recording--> IDLE
                              |
                              | pause / resume
                              v
                            PAUSED
```

Estados comuns do dispositivo incluem `IDLE`, `RECORDING`, `TRANSMITTING`, `PAUSED` e `ERROR`.

Na conexão, o SDK pode sincronizar o relógio do dispositivo por meio de `AT+TIME`. O fuso horário do dispositivo ainda pode ser diferente do fuso horário do host.

### Formato de arquivo

O dispositivo armazena dados de gravação como quadros Opus brutos, não como um contêiner OGG. O formato bruto é uma sequência de quadros Opus com comprimento prefixado:

```text
[2-byte little-endian length][opus frame][2-byte little-endian length][opus frame]...
```

Use `convert_to_ogg_opus()` para gravar um arquivo `.ogg` válido antes de passar a gravação para ferramentas que esperam entrada OGG/Opus. A decodificação para WAV requer um caminho de decodificador Opus como `opuslib`.

### Protocolo de comandos AT

- O SDK grava uma string AT em UTF‑8, por exemplo `AT+MODE=enhanced`, na característica CMD.
- As respostas são notificações JSON em `RESP_SEND`, por exemplo `{"ok":true,"data":{...}}`.
- Eventos não solicitados, como mudanças de estado, têm o formato `{"event":"state","state":"RECORDING",...}` e são despachados por meio de `event_callback`.

### Características GATT

| Característica | UUID | Propriedades | Finalidade |
| --- | --- | --- | --- |
| Service | `6E400001-B5A3-F393-E0A9-E50E24DCCA9E` | Primary Service | Serviço de comunicação BLE personalizado |
| CMD | `6E400002-B5A3-F393-E0A9-E50E24DCCA9E` | Write Without Response (Encrypted) | Central → dispositivo: grava strings de comandos AT |
| RESP_SEND | `6E400003-B5A3-F393-E0A9-E50E24DCCA9E` | Notify (CCC Encrypted) | Dispositivo → central: respostas JSON e notificações de eventos |
| FILE_DATA | `6E400004-B5A3-F393-E0A9-E50E24DCCA9E` | Notify (CCC Encrypted) | Dispositivo → central: notificações de quadros binários de transferência de arquivos |
| AUDIO_VIS | `6E400005-B5A3-F393-E0A9-E50E24DCCA9E` | Notify (CCC Encrypted) | Dispositivo → central: notificações de visualização de áudio em tempo real |

### Protocolo de transferência de arquivos

Os dados de arquivo são entregues como quadros binários em `FILE_DATA`.

| Quadro | Tipo | Layout |
| --- | --- | --- |
| `FILE_START` | `0x10` | `type(1) + fn_len(1) + filename(N) + file_size(4, LE)` |
| `DATA` | `0x01` | `type(1) + seq(2, LE) + len(2, LE) + data(N)` |
| `FILE_END` | `0x11` | `type(1) + crc32(4, LE)` |
| `TRANSFER_DONE` | `0x12` | `type(1) + sid_len(1) + session_id(N) + file_count(4, LE)` |

Cada arquivo é verificado com CRC32. Somente arquivos verificados devem ser tratados como salvos com sucesso.

### Retomada

`SessionSync.sync()` é ciente de retomada. Ele pode detectar arquivos `.opus` locais existentes, consultar o contador de arquivos sincronizados do dispositivo, calcular `start_file` e continuar um download anterior. Use `force=True` para começar do zero.

### Fluxo de dados

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_data_flow.png" alt="reSpeaker Clip data flow" width={900} height="auto" /></p>

## Exemplo completo

Este exemplo demonstra um fluxo de trabalho típico:

1. Conectar automaticamente via BLE
2. Verificar o nível da bateria
3. Definir o modo de gravação como aprimorado
4. Iniciar uma gravação de 10 segundos
5. Adicionar um marcador no meio da gravação
6. Parar a gravação
7. Sincronizar os arquivos da sessão para `recordings/<session_id>/`

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

**Saída esperada**

```
Battery: 85%, Mode: normal
Recording started: 20260710_144500
Bookmark added at 5s
Recording stopped
Downloaded 2 file(s) → recordings/20260710_144500/
```

## Visão geral dos trechos de código

### Conexão

#### Conectar ao dispositivo

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

O SDK descobre automaticamente dispositivos próximos cujo nome contenha `Clip`.

#### Conectar a um dispositivo específico

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

### Informações do dispositivo

#### Ler versão do firmware

```python
version = await cmds.get_version()
print(version.firmware)   # e.g. "v1.0.0"
print(version.hardware)   # e.g. "Clip v0.0.5"
```

#### Ler estado do dispositivo

```python
state = await cmds.get_state()
print(state.state)      # IDLE, RECORDING, TRANSMITTING, PAUSED, ERROR
print(state.battery)    # 0-100
print(state.mode)       # normal, enhanced
print(state.bitrate)    # Opus bitrate in bps
```

#### Ler / definir hora do dispositivo

```python
import time

timestamp = await cmds.get_time()          # returns int (Unix timestamp)
await cmds.set_time(int(time.time()))      # returns True
```

---

### Gravando áudio

#### Iniciar / parar gravação

```python
session_id = await cmds.start_recording("normal")   # returns str (session ID)
# ... record ...
await cmds.stop_recording()                          # returns dict with session info
```

> `"normal"` é mono, `"enhanced"` habilita o pré-processamento DSP (supressão de ruído, AGC).

#### Pausar / Retomar gravação

```python
await cmds.pause_recording()
await cmds.resume_recording()
```

#### Adicionar marcador (durante a gravação)

```python
bookmark = await cmds.add_bookmark()
print(bookmark.offset)   # seconds from recording start
```

#### Exemplo de gravação completa

```python
session_id = await cmds.start_recording("normal")
await asyncio.sleep(10)
await cmds.stop_recording()
```

---

### Sincronização de arquivos

#### Listar sessões

```python
sessions = await cmds.list_sessions()
for s in sessions:
    print(s.id, s.files, s.size)
```

#### Sincronizar uma sessão (BLE)

```python
from pathlib import Path
from clip import SessionSync

session_id = "20260326120000"      # from cmds.list_sessions()
sync = SessionSync(device)

await sync.sync(session_id, Path("recordings"))
```

#### Retomar download interrompido

```python
await sync.sync(
    session_id,
    Path("recordings"),
    start_file="0015.opus"          # pick up where you left off
)
```

#### Manter arquivos no dispositivo após a sincronização

```python
await sync.sync(
    session_id,
    Path("recordings"),
    delete_after=False               # default: False (keep on device)
)
```

#### Sincronizar todas as sessões

```python
results = await sync.sync_all(Path("recordings"))
```

---

### Gerenciamento de configuração


#### Definir parâmetros (comandos de trabalho)

```python
await cmds.set_mode("enhanced")          # normal | enhanced
await cmds.set_auto_delete(7)            # days (0-30), pass -1 to disable
await cmds.set_brightness(128)           # 0-255
```

#### Ler parâmetros

```python
mode        = await cmds.get_mode()          # returns str
auto_delete = await cmds.get_auto_delete()   # returns bool
brightness  = await cmds.get_brightness()    # returns int
```

#### Configuração em lote

```python
await cmds.set_config_dict({
    "mode":         "enhanced",
    "auto_delete":  7,
    "brightness":   128,
})
```

---

### Comunicação WiFi

O Clip pode se comunicar via WiFi UDP quando seu AP está habilitado.

| Parâmetro | Valor           |
|-----------|-----------------|
| SSID      | `ClipAP_XXXX`   |
| Senha     | `12345678` (padrão) |
| IP        | `192.168.4.1`   |
| Porta     | `8089`          |

#### Conectar e enviar comandos AT

```python
from clip import WiFiDevice

async def main():
    async with WiFiDevice("192.168.4.1", 8089) as device:
        resp = await device.send_command("AT+GSTAT")
        print(resp)

asyncio.run(main())
```

#### Sincronizar uma sessão via WiFi (API bloqueante)

```python
from pathlib import Path
from clip import WiFiSync

sync = WiFiSync("192.168.4.1", 8089)
sync.connect()
sync.download_session(session_id, Path("recordings"))
sync.disconnect()
```

> `WiFiSync` é **síncrono** (sockets bloqueantes) — não há necessidade de `async`/`await`.

---

### Tratamento de erros

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

## Ferramentas de linha de comando

O SDK inclui vários utilitários prontos para uso.

### clip-cli - CLI unificada

#### BLE (padrão)

CLI de uso geral.

```bash
tools/clip-cli.py status
```

Saída esperada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/status.jpg" alt="Conexão do dispositivo" width={800} height="auto"/></p>

```bash
tools/clip-cli.py version
```
```bash
tools/clip-cli.py list
```

Saída esperada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/list.png" alt="Conexão do dispositivo" width={800} height="auto"/></p>

```bash
tools/clip-cli.py record --duration 60

```
Saída esperada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/recording.jpg" alt="Conexão do dispositivo" width={800} height="auto"/></p>

```bash
tools/clip-cli.py sync --session 20260326120000
```
Saída esperada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/sync.jpg" alt="Conexão do dispositivo" width={800} height="auto"/></p>

```bash
tools/clip-cli.py sync --session 20260326120000 --delete
```
Saída esperada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/delete.jpg" alt="Conexão do dispositivo" width={800} height="auto"/></p>

```bash
tools/clip-cli.py config get
```
Saída esperada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/get_set.png" alt="Conexão do dispositivo" width={800} height="auto"/></p>

```bash
tools/clip-cli.py bookmark
```

```bash
tools/clip-cli.py terminal
```

Saída esperada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/terminal.png" alt="Conexão do dispositivo" width={800} height="auto"/></p>

#### WiFi

```bash
 tools/clip-cli.py wifi on
```
Saída esperada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/wifi-on.png" alt="Conexão do dispositivo" width={800} height="auto"/></p>


```bash
tools/clip-cli.py --transport wifi status
```
Saída esperada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/wifi-status.png" alt="Conexão do dispositivo" width={800} height="auto"/></p>



```bash
tools/clip-cli.py  wifi off
```
Saída esperada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/wifi-off.png" alt="Conexão do dispositivo" width={800} height="auto"/></p>




### record.py

Grava áudio automaticamente e o sincroniza.

```bash
python tools/record.py

python tools/record.py --duration 60

python tools/record.py --mode enhanced
```
Saída esperada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/recording.png" alt="Conexão do dispositivo" width={800} height="auto"/></p>

### sync.py

Sincroniza gravações via BLE.

```bash
python tools/sync.py

python tools/sync.py --all-sessions
```
Saída esperada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/sync_tools.png" alt="Conexão do dispositivo" width={800} height="auto"/></p>

### udp_sync.py

Sincroniza gravações via WiFi.

```bash
python tools/udp_sync.py

python tools/udp_sync.py --session 20260326120000
```

Saída esperada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/udp_sync.png" alt="Conexão do dispositivo" width={800} height="auto"/></p>

### ble_terminal.py

Terminal interativo de comandos AT.

```bash
python tools/ble_terminal.py
```
Saída esperada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/ble_terminal.png" alt="Conexão do dispositivo" width={800} height="auto"/></p>

### decode_opus.py

Converter gravações Opus para WAV.

```bash
python tools/decode_opus.py <input_file.opus> <output_file.wav>
```

---

## Interface web

Inicie o aplicativo web integrado.

Modo BLE:

```bash
python tools/clip-web.py
```

Modo Wi-Fi:

```bash
python tools/clip-web.py --transport wifi
```

Depois abra:

```text
http://localhost:5000
```

### Funcionalidades

- Status do dispositivo
- Controle de gravação
- Gerenciamento de sessões
- Visualização de áudio
- Editor de configuração
- Progresso de sincronização

### REST API

| Método | Endpoint |
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

## Módulos principais

| Módulo | Principal finalidade |
| --- | --- |
| `ClipDevice` | Conexão BLE, pareamento, transporte de comandos AT, notificações e progresso de transferência |
| `ClipCommands` | Wrapper de alto nível para comandos AT do dispositivo |
| `FileTransfer` / `SessionSync` | Download de sessões BLE e sincronização com retomada |
| `WiFiDevice` / `WiFiSync` | Fluxo de download via Wi-Fi/UDP para transferências maiores |
| `codec` | Análise de quadros Opus brutos e escrita OGG/Opus |
| `utils` | Análise de ID de sessão, ajudantes de formatação, carregamento de configuração, relatório de progresso e utilitários de arquivo |
| `exceptions` | Classes de exceção específicas do SDK |

## Referência de API

### ClipDevice

***Comunicação com dispositivo BLE e gerenciamento de conexão.***

| Assinatura | Retorno | Notas |
|-----------|---------|-------|
| `ClipDevice(address=None, name_filter="Clip", debug=False)` | `ClipDevice` | Descobre automaticamente se `address` for `None` |
| `await connect(timeout=10.0, sync_time=True, lazy_device_name=False)` | `None` | 3 tentativas; `sync_time` ajusta automaticamente o relógio do dispositivo |
| `await disconnect()` | `None` | Interrompe todas as notificações BLE |
| `await send_command(command, timeout=10.0)` | `dict` | Envia comando AT, obtém resposta JSON |
| `is_connected` | `bool` | Propriedade — verifica `_connected` e `client.is_connected` |
| `device_name` | `str | None` | Propriedade — nome do dispositivo se descoberto |
| `await __aenter__()` / `await __aexit__()` | `ClipDevice` / `None` | Gerenciador de contexto assíncrono |

### ClipCommands

***Interface de comandos AT de alto nível.***

| Assinatura | Retorno | Notas |
|-----------|---------|-------|
| `await get_version()` | `VersionInfo` | `.firmware`, `.hardware`, `.sdk`, `.build` |
| `await get_state()` | `DeviceState` | `.state`, `.battery`, `.mode`, `.bitrate`, `.charging`, `.free_space` |
| `await get_time()` | `int` | Timestamp Unix |
| `await set_time(timestamp)` | `bool` | Converte para `AT+TIME=<ts>` |
| `await get_pairing_status()` | `Dict[str, Any]` | Status de pareamento BLE + endereço do par |
| `await reboot()` | `None` | Reinicialização do dispositivo |
| **Gravação** | | |
| `await start_recording(mode="normal")` | `str` | `mode`: normal, enhanced, stereo, merge. Retorna ID da sessão. |
| `await stop_recording()` | `Dict[str, Any]` | Resumo da sessão; lida graciosamente com dispositivo-não-gravando |
| `await pause_recording()` | `bool` | |
| `await resume_recording()` | `bool` | |
| `await add_bookmark()` | `BookmarkInfo` | `.offset` em segundos a partir do início da sessão |
| `await get_bookmarks(session_id, fetch_all=True)` | `List[BookmarkInfo]` | Paginado, busca automaticamente todas as páginas |
| `await get_bookmarks_count(session_id)` | `int` | Contagem rápida sem detalhes |
| **Sessões** | | |
| `await list_sessions(page=1, per_page=10)` | `List[SessionInfo]` | `.id`, `.files`, `.size`, `.synced_files`, `.mode` |
| `await list_all_sessions(per_page=15)` | `List[SessionInfo]` | Faz paginação automática de todas |
| `await get_session_info(session_id)` | `SessionInfo` | Inclui contagem de `synced_files` |
| `await list_session_files(session_id)` | `List[str]` | Nomes de arquivo para todos os arquivos na sessão |
| `await delete_session(session_id)` | `bool` | |
| `await purge_all_sessions()` | `bool` | |
| `await format_sd_card()` | `bool` | |
| **Configuração** | | |
| `await get_mode()` | `str` | |
| `await set_mode(mode)` | `bool` | Apenas `"normal"` ou `"enhanced"` |
| `await get_auto_delete()` | `bool` | |
| `await set_auto_delete(days)` | `bool` | `days`: 0–30, passe `-1` para desativar |
| `await get_brightness()` | `int` | 0–255 |
| `await set_brightness(value)` | `bool` | 0–255 |
| `await get_device_name()` | `str` | Nome do dispositivo BLE |
| `await set_device_name(name)` | `bool` | Máx. 15 caracteres |
| `await get_config_dict()` | `Dict[str, Any]` | Todas as configurações; chaves não suportadas retornam `None` |
| `await set_config_dict(config, ignore_errors=True)` | `None` | Ignora valores `None`; descarta silenciosamente chaves não suportadas |
| `get/set_bitrate()` | — | **Firmware: não suportado** — lança `CommandError` |
| `get/set_complexity()` | — | **Firmware: não suportado** — lança `CommandError` |
| `get/set_chunk_size()` | — | **Firmware: não suportado** — lança `CommandError` |
| `get/set_noise_suppression()` | — | **Firmware: não suportado** — lança `CommandError` |
| `get/set_agc()` | — | **Firmware: não suportado** — lança `CommandError` |
| `get/set_dereverb()` | — | **Firmware: não suportado** — lança `CommandError` |
| **Controle de transferência** | | |
| `await get_progress()` | `Dict[str, Any]` | Progresso do download |
| `await pause_transfer()` | `bool` | |
| `await resume_transfer()` | `bool` | |
| `await cancel_transfer()` | `bool` | |
| **WiFi / USB** | | |
| `await wifi_on()` | `bool` | Timeout de 20+ segundos para inicialização do nRF7002 |
| `await wifi_off()` | `bool` | |
| `await get_wifi_status()` | `Dict[str, Any]` | `.running`, `.ssid`, `.clients` |
| `await usb_on()` | `bool` | CDC + MSC |
| `await usb_off()` | `bool` | |
| `await get_usb_status()` | `bool` | |
| **Ajudantes** | | |
| `await ensure_idle()` | `None` | Interrompe a gravação se necessário; tenta novamente até 5x |
| `await wait_for_state(target, timeout=10.0)` | `bool` | Faz polling até o estado corresponder |
| `await wait_for_recording_to_start(timeout=5.0)` | `bool` | |
| `await wait_for_recording_to_stop(timeout=5.0)` | `bool` | |
| `await get_battery_status()` | `BatteryStatus` | `.percent`, `.charging`, `.voltage` |

### SessionSync

***Sincronização de arquivos via BLE com suporte a retomada.***

| Assinatura | Retorno | Observações |
|-----------|---------|------------|
| `SessionSync(device, commands=None)` | `SessionSync` | Estende `FileTransfer` |
| `await sync(session_id, output_dir, delete_after=False, continuous=False, force=False, progress_callback=None, session_info=None, start_file=None)` | `Dict[str, Any]` | Retomada detectada automaticamente; retorna `file_count`, `total_size`, `files`, `merged_file` |
| `await sync_all(output_dir, delete_after=False, progress_callback=None)` | `List[Dict]` | Sincroniza todas as sessões |
| `await download_session(session_id, output_dir, progress_callback=None, stop_recording=False, continuous=False, timeout=300.0, start_file=None, session_info=None)` | `Dict[str, Any]` | Nível mais baixo; também salva `session.json` + `bookmarks.json` |
| `await cancel()` | `None` | Cancelamento thread-safe |

### WiFiDevice

***Transporte UDP via WiFi (assíncrono) — compatível com `ClipDevice.send_command`.***

| Assinatura | Retorno | Observações |
|-----------|---------|------------|
| `WiFiDevice(host="192.168.4.1", port=8089, timeout=10.0)` | `WiFiDevice` | |
| `await connect(timeout=None)` | `None` | Inicia threads de trabalho de recebimento + heartbeat |
| `await disconnect()` | `None` | |
| `await send_command(command, timeout=None)` | `dict` | Resposta AT em JSON (parseada) |
| `is_connected` | `bool` | Propriedade |
| `await __aenter__()` / `await __aexit__()` | — | Gerenciador de contexto assíncrono |

### WiFiSync

***Sincronização de arquivos via UDP WiFi (bloqueante/síncrona — sem necessidade de async).***

| Assinatura | Retorno | Observações |
|-----------|---------|------------|
| `WiFiSync(host="192.168.4.1", port=8089, timeout=120.0)` | `WiFiSync` | |
| `connect()` | `bool` | Bloqueante |
| `disconnect()` | `None` | |
| `download_session(session_id, output_dir, convert_ogg=True, start_file=None, delete_after=False, progress_callback=None, cancel_after=None)` | `bool` | Verificado por CRC; progresso com tqdm; pressione 'c' para cancelar |
| `list_sessions()` | `List[dict]` | Paginado |
| `delete_session(session_id)` | `bool` | |

### Exceções

| Exceção | Base | Descrição |
|-----------|------|-----------|
| `ClipError` | `Exception` | Base para todos os erros da biblioteca |
| `ConnectionError` | `ClipError` | Falha de conexão BLE ou WiFi |
| `DisconnectedError` | `ClipError` | Desconexão inesperada |
| `CommandError` | `ClipError` | Comando AT retornou erro; atributo `.command` |
| `TransferError` | `ClipError` | Falha na operação de transferência de arquivo |
| `TimeoutError` | `ClipError` | Comando/transferência expirou (timeout) |
| `ResponseError` | `ClipError` | Resposta inválida ou inesperada |
| `StateError` | `ClipError` | Dispositivo em estado incorreto para a operação |



---

## Solução de Problemas

**P1: Comandos travam ou expiram após conectar.**  
A característica de comando requer um link BLE criptografado. O SDK pode iniciar o pareamento, mas o sistema operacional pode exibir uma caixa de diálogo de pareamento ou autorização Bluetooth. Confirme manualmente. Se a conexão ainda ficar travada, remova vínculos antigos e reconecte.

**P2: O download relata incompatibilidade de CRC ou zero arquivos.**  
Stacks BLE podem ocasionalmente entregar notificações duplicadas ou descartar quadros sob carga. Desconecte, reconecte e tente novamente. Use `SessionSync` para que a transferência possa ser retomada quando possível.

**P3: O download está lento ou cai pela metade.**  
Use `SessionSync` para transferência BLE com reconhecimento de retomada. Para grandes volumes de gravação, use download via Wi-Fi com `WiFiSync`: ative o Wi-Fi no Clip, conecte-se a `ClipAP_XXXX` e depois faça o download via Wi-Fi.

**P4: `delete_after=True` excluiu uma sessão que não foi totalmente baixada.**  
Use o padrão mais seguro: `sync(force=True, delete_after=False)`, verifique se o `merged_file` local existe e não está vazio e, em seguida, chame manualmente `cmds.delete_session(session_id)`.

**P5: `AT+NOISE`, `AT+DEREVERB` ou `AT+AGC` retornam `Unknown command`.**  
O firmware atual pode não registrar esses comandos opcionais. O SDK mantém wrappers para versões de firmware compatíveis. Ao restaurar uma configuração, `set_config_dict(..., ignore_errors=True)` pode ignorar valores não suportados.

**P6: `bleak` gera erros como `'BleakClient' object has no attribute 'get_services'` ou `'get_mtu'`.**  
As APIs do `bleak` diferem entre versões. Use o conjunto de dependências testado pelo SDK após o lançamento do pacote de instalação.

**P7: A gravação está silenciosa ou a qualidade é ruim.**  
Verifique a distância e a orientação do microfone, o nível da bateria e o modo de gravação. O modo `enhanced` pode suprimir ruído de forma mais agressiva, o que pode processar demais fala muito limpa.

**P8: O carimbo de data/hora do ID da sessão não corresponde à hora local.**  
O relógio ou o fuso horário do dispositivo podem ser diferentes do host. O SDK pode sincronizar a hora ao conectar. Você também pode chamar `await cmds.set_time(int(time.time()))`.

**P9: Como converto Opus para WAV para STT ou ML?**  
Use `convert_to_ogg_opus()` para saída OGG/Opus. Para WAV, decodifique o fluxo Opus bruto com um decodificador Opus como `opuslib`.

**P10: Os logs são inundados por eventos de visualização de áudio durante a gravação.**  
Notificações `AUDIO_VIS` disparam com frequência. Registre o callback de visualização de áudio apenas quando precisar dele e mantenha o callback leve.

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
