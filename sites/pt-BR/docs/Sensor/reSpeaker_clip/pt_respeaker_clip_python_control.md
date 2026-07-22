---
description: O reSpeaker Clip SDK fornece uma interface Python para comunicação com dispositivos reSpeaker Clip via Bluetooth Low Energy (BLE) ou WiFi, permitindo controle de gravação, sincronização de arquivos, configuração do dispositivo e muito mais.
title: Controle do reSpeaker Clip com Python
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
updatedAt: '2026-07-16'
url: https://wiki.seeedstudio.com/pt-br/respeaker_clip_python_control/
---

## Introdução

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-banner.jpg" alt="pir" width={800} height="auto" /></p>

O reSpeaker Clip SDK fornece uma interface Python para comunicação com dispositivos reSpeaker Clip via Bluetooth Low Energy (BLE) ou WiFi.

Com este SDK você pode:

* Conectar a um reSpeaker Clip
* Ler informações do dispositivo
* Configurar parâmetros de gravação
* Iniciar e parar gravações
* Adicionar marcadores
* Sincronizar gravações
* Controlar o dispositivo usando Python
* Usar ferramentas de linha de comando prontas
* Acessar o dispositivo por meio de uma interface web

---

## Instalação

### Requisitos

* Python 3.10+
* Adaptador Bluetooth (modo BLE)
* Adaptador WiFi (modo WiFi)

### Clonar o repositório

você pode encontrar o repositório do GitHub [aqui](https://github.com/Seeed-Projects/respeaker_clip_python/tree/main)

```bash
git clone <repository-url>
```

### Instalar dependências

```bash
#After Actiate the virtual environment
pip install -r requirements.txt
```

---

## Estrutura do projeto

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

### Módulos do SDK

| Módulo        | Descrição                |
| ------------- | ------------------------ |
| client.py     | Comunicação com dispositivo BLE |
| commands.py   | Comandos AT de alto nível |
| transfer.py   | Sincronização de arquivos |
| codec.py      | Codificação/decodificação de áudio |
| wifi.py       | Transporte WiFi          |
| progress.py   | Exibição de progresso    |
| utils.py      | Funções auxiliares       |
| exceptions.py | Classes de exceção       |

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

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/status.jpg" alt="Device Connection" width={800} height="auto"/></p>

```bash
tools/clip-cli.py version
```
```bash
tools/clip-cli.py list
```

Saída esperada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/list.png" alt="Device Connection" width={800} height="auto"/></p>

```bash
tools/clip-cli.py record --duration 60

```
Saída esperada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/recording.jpg" alt="Device Connection" width={800} height="auto"/></p>

```bash
tools/clip-cli.py sync --session 20260326120000
```
Saída esperada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/sync.jpg" alt="Device Connection" width={800} height="auto"/></p>

```bash
tools/clip-cli.py sync --session 20260326120000 --delete
```
Saída esperada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/delete.jpg" alt="Device Connection" width={800} height="auto"/></p>

```bash
tools/clip-cli.py config get
```
Saída esperada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/get_set.png" alt="Device Connection" width={800} height="auto"/></p>

```bash
tools/clip-cli.py bookmark
```

```bash
tools/clip-cli.py terminal
```

Saída esperada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/terminal.png" alt="Device Connection" width={800} height="auto"/></p>

#### WiFi

```bash
 tools/clip-cli.py wifi on
```
Saída esperada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/wifi-on.png" alt="Device Connection" width={800} height="auto"/></p>


```bash
tools/clip-cli.py --transport wifi status
```
Saída esperada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/wifi-status.png" alt="Device Connection" width={800} height="auto"/></p>



```bash
tools/clip-cli.py  wifi off
```
Saída esperada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/wifi-off.png" alt="Device Connection" width={800} height="auto"/></p>




### record.py

Grava áudio automaticamente e o sincroniza.

```bash
python tools/record.py

python tools/record.py --duration 60

python tools/record.py --mode enhanced
```
Saída esperada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/recording.png" alt="Device Connection" width={800} height="auto"/></p>

### sync.py

Sincroniza gravações via BLE.

```bash
python tools/sync.py

python tools/sync.py --all-sessions
```
Saída esperada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/sync_tools.png" alt="Device Connection" width={800} height="auto"/></p>

### udp_sync.py

Sincroniza gravações via WiFi.

```bash
python tools/udp_sync.py

python tools/udp_sync.py --session 20260326120000
```

Saída esperada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/udp_sync.png" alt="Device Connection" width={800} height="auto"/></p>

### ble_terminal.py

Terminal interativo de comandos AT.

```bash
python tools/ble_terminal.py
```
Saída esperada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/sdk/ble_terminal.png" alt="Device Connection" width={800} height="auto"/></p>

### decode_opus.py

Converte gravações Opus para WAV.

```bash
python tools/decode_opus.py <input_file.opus> <output_file.wav>
```

> Observação para Windows: se a decodificação falhar porque a biblioteca nativa do Opus não foi encontrada, baixe um arquivo `opus.dll` pré-compilado em ShiftMediaProject releases, extraia-o e coloque o `opus.dll` na pasta `Scripts` do seu ambiente virtual (por exemplo, `D:\clip\tests\.venv\Scripts\`).

---

## Scripts de teste 

| Arquivo | O que testa | Dispositivo? | Marcadores | Testes |
|------|---------------|---------|---------|-------|
| `test_basic.py` | Comandos AT básicos: VERSION, STATE, TIME, PAIR, comandos inválidos, tratamento de erros, reinicialização | Sim | — | 12 |
| `test_config.py` | Configuração: MODE, AUTODEL, BRIGHTNESS; verifica se comandos não suportados (BITRATE, COMPLEXITY, CHUNKSIZE, NOISE, AGC, DEREVERB) geram `CommandError` | Sim | — | 30 |
| `test_recording.py` | Controle de gravação: START/STOP, marcadores MARK, transições de estado (IDLE→RECORDING→IDLE), rastreamento de duração, IDs de sessão | Sim | — | 13 |
| `test_storage.py` | Gerenciamento de armazenamento: LIST de sessões/arquivos, DELETE, persistência de sessão, precisão de tamanho, contagem de arquivos | Sim | stress | 21 |
| `test_transfer.py` | Transferência de arquivos: download de sessões, sincronização, callbacks de progresso, downloads concorrentes, cancelar/retomar | Sim | slow, stress | 21 |
| `test_unit.py` | Testes de unidade (sem hardware): dataclasses, funções utilitárias, exceções, mesclagem de opus, inicialização do dispositivo | Não | unit | 30 |

### Executando testes

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

### Gravação de áudio

#### Iniciar / parar gravação

```python
session_id = await cmds.start_recording("normal")   # returns str (session ID)
# ... record ...
await cmds.stop_recording()                          # returns dict with session info
```

> `"normal"` é mono, `"enhanced"` habilita pré-processamento DSP (supressão de ruído, AGC).

#### Pausar / retomar gravação

```python
await cmds.pause_recording()
await cmds.resume_recording()
```

#### Adicionar marcador (durante a gravação)

```python
bookmark = await cmds.add_bookmark()
print(bookmark.offset)   # seconds from recording start
```

#### Exemplo completo de gravação

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

## Referência da API

### ClipDevice

***Comunicação com dispositivo BLE e gerenciamento de conexão.***

| Assinatura | Retorno | Observações |
|-----------|---------|------------|
| `ClipDevice(address=None, name_filter="Clip", debug=False)` | `ClipDevice` | Descobre automaticamente se `address` for `None` |
| `await connect(timeout=10.0, sync_time=True, lazy_device_name=False)` | `None` | 3 tentativas; `sync_time` define automaticamente o relógio do dispositivo |
| `await disconnect()` | `None` | Interrompe todas as notificações BLE |
| `await send_command(command, timeout=10.0)` | `dict` | Envia comando AT, obtém resposta JSON |
| `is_connected` | `bool` | Propriedade — verifica `_connected` e `client.is_connected` |
| `device_name` | `str | None` | Propriedade — nome do dispositivo se descoberto |
| `await __aenter__()` / `await __aexit__()` | `ClipDevice` / `None` | Gerenciador de contexto assíncrono |

### ClipCommands

***Interface de comandos AT de alto nível.***

| Assinatura | Retorno | Observações |
|-----------|---------|------------|
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
| `await list_all_sessions(per_page=15)` | `List[SessionInfo]` | Paginação automática de todas |
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
| **Auxiliares** | | |
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

***Transporte UDP WiFi (assíncrono) — compatível com `ClipDevice.send_command`.***

| Assinatura | Retorno | Observações |
|-----------|---------|------------|
| `WiFiDevice(host="192.168.4.1", port=8089, timeout=10.0)` | `WiFiDevice` | |
| `await connect(timeout=None)` | `None` | Inicia as threads de trabalho de recebimento + heartbeat |
| `await disconnect()` | `None` | |
| `await send_command(command, timeout=None)` | `dict` | Resposta AT analisada em JSON |
| `is_connected` | `bool` | Propriedade |
| `await __aenter__()` / `await __aexit__()` | — | Gerenciador de contexto assíncrono |

### WiFiSync

***Sincronização de arquivos via UDP WiFi (bloqueante/síncrona — não requer async).***

| Assinatura | Retorno | Observações |
|-----------|---------|------------|
| `WiFiSync(host="192.168.4.1", port=8089, timeout=120.0)` | `WiFiSync` | |
| `connect()` | `bool` | Bloqueante |
| `disconnect()` | `None` | |
| `download_session(session_id, output_dir, convert_ogg=True, start_file=None, delete_after=False, progress_callback=None, cancel_after=None)` | `bool` | Verificação CRC; progresso com tqdm; pressione 'c' para cancelar |
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
| `TimeoutError` | `ClipError` | Tempo limite excedido para comando/transferência |
| `ResponseError` | `ClipError` | Resposta inválida ou inesperada |
| `StateError` | `ClipError` | Dispositivo em estado incorreto para a operação |



---

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
