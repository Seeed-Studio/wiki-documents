---
description: O reSpeaker Clip SDK fornece uma interface Python para comunicação com dispositivos reSpeaker Clip via Bluetooth Low Energy (BLE) ou WiFi, permitindo controle de gravação, sincronização de arquivos, configuração do dispositivo e muito mais.
title: Controle do reSpeaker Clip com Python
keywords:
  - reSpeaker clip
  - ble
  - wifi
  - python
  - sdk
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-banner.jpg
slug: /respeaker_clip_python_control
sku: 100020126
last_update:
  date: 07/01/2026
  author: Kasun Thushara
createdAt: '2026-07-01'
updatedAt: '2026-07-01'
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

```bash
git clone <repository-url>

cd applications/clip/tests
```

### Instalar dependências

```bash
pip install -r requirements.txt
```

---

## Estrutura do projeto

```
applications/clip/tests/

├── clip/
│   ├── client.py
│   ├── commands.py
│   ├── transfer.py
│   ├── codec.py
│   ├── wifi.py
│   ├── progress.py
│   ├── utils.py
│   └── exceptions.py

├── tools/
│   ├── clip-cli.py
│   ├── clip-web.py
│   ├── record.py
│   ├── sync.py
│   ├── udp_sync.py
│   ├── ble_terminal.py
│   └── decode_opus.py

├── requirements.txt
├── README.md
└── EXAMPLES.md
```

### Módulos do SDK

| Module        | Description              |
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

## Primeiros passos

### Conectar ao dispositivo

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

O SDK procura automaticamente por dispositivos próximos chamados:

```
Clip XXXX
```

### Conectar a um dispositivo específico

```python
device = ClipDevice(
    address="AA:BB:CC:DD:EE:FF"
)

await device.connect()
```

---

## Informações do dispositivo

### Ler versão do firmware

```python
version = await cmds.get_version()

print(version.firmware)
print(version.hardware)
```

### Ler estado do dispositivo

```python
state = await cmds.get_state()

print(state.state)
print(state.battery)
print(state.mode)
```

### Ler hora do dispositivo

```python
timestamp = await cmds.get_time()
```

### Definir hora do dispositivo

```python
import time

await cmds.set_time(
    int(time.time())
)
```

---

## Gravação de áudio

### Iniciar gravação

```python
session_id = await cmds.start_recording("normal")
```

### Parar gravação

```python
await cmds.stop_recording()
```

### Pausar gravação

```python
await cmds.pause_recording()
```

### Retomar gravação

```python
await cmds.resume_recording()
```

### Adicionar marcador

```python
bookmark = await cmds.add_bookmark()

print(bookmark.offset)
```

### Exemplo de sessão de gravação

```python
session = await cmds.start_recording("normal")

await asyncio.sleep(10)

await cmds.stop_recording()
```

---

## Sincronização de arquivos

### Listar sessões

```python
sessions = await cmds.list_sessions()

for s in sessions:
    print(s.id)
```

### Sincronizar uma sessão (BLE)

```python
from clip import SessionSync

session_id = "20260326120000"  # obtained from cmds.list_sessions()

sync = SessionSync(device)

await sync.sync(
    session_id,
    Path("recordings")
)
```

### Retomar download interrompido

```python
session_id = "20260326120000"

await sync.sync(
    session_id,
    Path("recordings"),
    start_file="0015.opus"
)
```

### Manter arquivos no dispositivo

```python
session_id = "20260326120000"

await sync.sync(
    session_id,
    Path("recordings"),
    delete_after=False
)
```

---

## Gerenciamento de configuração

### Definir parâmetros

```python
await cmds.set_mode("enhanced")

await cmds.set_bitrate(32000)

await cmds.set_complexity(10)

await cmds.set_noise_suppression(30)
```

### Ler parâmetros

```python
mode = await cmds.get_mode()

bitrate = await cmds.get_bitrate()
```

### Configuração em lote

```python
await cmds.set_config_dict({

    "mode":"enhanced",

    "bitrate":32000,

    "complexity":10

})
```

---

## Comunicação via WiFi

O reSpeaker Clip pode se comunicar via WiFi usando UDP.

Configurações padrão:

| Parameter | Value       |
| --------- | ----------- |
| SSID      | ClipAP_XXXX |
| Password  | 12345678    |
| Port      | 8089        |

### Conectar

```python
from clip import WiFiDevice

async with WiFiDevice(
    "192.168.4.1",
    8089
) as device:

    await device.send_command("AT+GSTAT")
```

### Sincronizar via WiFi

```python
from clip import WiFiSync

session_id = "20260326120000"

sync = WiFiSync(
    "192.168.4.1",
    8089
)

sync.connect()

sync.download_session(
    session_id,
    Path("recordings")
)

sync.disconnect()
```

---

## Ferramentas de linha de comando

O SDK inclui vários utilitários prontos para uso.

### clip-cli

CLI de uso geral.

```bash
clip-cli status

clip-cli version

clip-cli list

clip-cli record --duration 60

clip-cli sync --session 20260326120000

clip-cli config get

clip-cli bookmark

clip-cli terminal
```

### record.py

Grava áudio automaticamente e o sincroniza.

```bash
python tools/record.py

python tools/record.py --duration 60

python tools/record.py --mode enhanced
```

### sync.py

Sincroniza gravações via BLE.

```bash
python tools/sync.py

python tools/sync.py --all-sessions
```

### udp_sync.py

Sincroniza gravações via WiFi.

```bash
python tools/udp_sync.py

python tools/udp_sync.py --session 20260326120000
```

### ble_terminal.py

Terminal interativo de comandos AT.

```bash
python tools/ble_terminal.py
```

### decode_opus.py

Converter gravações Opus para WAV.

```bash
python tools/decode_opus.py input.opus output.wav
```

---

## Interface web

Inicie o aplicativo web integrado.

Modo BLE:

```bash
python tools/clip-web.py
```

Modo WiFi:

```bash
python tools/clip-web.py --transport wifi
```

Depois abra:

```
http://localhost:5000
```

### Funcionalidades

* Status do dispositivo
* Controle de gravação
* Gerenciamento de sessões
* Visualização de áudio
* Editor de configuração
* Progresso de sincronização

### REST API

| Method | Endpoint             |
| ------ | -------------------- |
| GET    | /api/status          |
| GET    | /api/version         |
| GET    | /api/sessions        |
| POST   | /api/record/start    |
| POST   | /api/record/stop     |
| POST   | /api/record/bookmark |
| POST   | /api/sync/\{id\}       |
| DELETE | /api/sessions/\{id\}   |
| GET    | /api/config          |
| PUT    | /api/config          |
| WS     | /ws                  |

---

## Tratamento de erros

```python
from clip import (
    ConnectionError,
    TimeoutError,
    CommandError
)

try:

    async with ClipDevice() as device:

        ...

except ConnectionError:

    ...

except TimeoutError:

    ...

except CommandError:

    ...
```

---

## Exemplo completo

Este exemplo demonstra um fluxo de trabalho típico:

1. Conectar ao dispositivo
2. Verificar nível da bateria
3. Configurar parâmetros de gravação
4. Iniciar gravação
5. Adicionar marcadores
6. Parar gravação
7. Sincronizar a sessão gravada

```python
import asyncio
from pathlib import Path
from clip import ClipDevice, ClipCommands, SessionSync

async def record_and_sync():
    async with ClipDevice() as device:
        cmds = ClipCommands(device)

        state = await cmds.get_state()
        print(f"Battery: {state.battery}%")

        await cmds.set_config_dict({
            "mode": "enhanced",
            "bitrate": 32000,
            "complexity": 10
        })

        session_id = await cmds.start_recording("normal")
        print(f"Recording started: {session_id}")

        await asyncio.sleep(10)

        await cmds.add_bookmark()
        print("Bookmark added")

        await asyncio.sleep(5)

        await cmds.stop_recording()
        print("Recording stopped")

        sync = SessionSync(device)
        await sync.sync(session_id, Path("recordings"))
        print(f"Session {session_id} synchronized")

asyncio.run(record_and_sync())
```

---

## Referência de API

### ClipDevice

Finalidade: comunicação com dispositivo BLE e gerenciamento de conexão.

```python
class ClipDevice:
    def __init__(self, address: str = None) -> None
    async def connect() -> None
    async def disconnect() -> None
    async def __aenter__() -> ClipDevice
    async def __aexit__(...) -> None
```

### ClipCommands

Finalidade: comandos AT de alto nível para controle do dispositivo.

```python
class ClipCommands:
    def __init__(self, device: ClipDevice) -> None
    async def get_state() -> DeviceState
    async def get_version() -> Version
    async def get_time() -> int
    async def set_time(timestamp: int) -> None
    async def start_recording(mode: str) -> str
    async def stop_recording() -> None
    async def pause_recording() -> None
    async def resume_recording() -> None
    async def add_bookmark() -> Bookmark
    async def list_sessions() -> list[Session]
    async def set_mode(mode: str) -> None
    async def get_mode() -> str
    async def set_bitrate(bitrate: int) -> None
    async def get_bitrate() -> int
    async def set_complexity(level: int) -> None
    async def set_noise_suppression(level: int) -> None
    async def set_config_dict(config: dict) -> None
```

### SessionSync

Finalidade: sincronização de arquivos via BLE.

```python
class SessionSync:
    def __init__(self, device: ClipDevice) -> None
    async def sync(session_id: str, path: Path, delete_after: bool = True, start_file: str = None) -> None
```

### WiFiDevice

Finalidade: camada de transporte WiFi usando UDP.

```python
class WiFiDevice:
    def __init__(self, host: str, port: int) -> None
    async def connect() -> None
    async def disconnect() -> None
    async def send_command(cmd: str) -> str
    async def __aenter__() -> WiFiDevice
    async def __aexit__(...) -> None
```

### WiFiSync

Finalidade: sincronização de arquivos via WiFi.

```python
class WiFiSync:
    def __init__(self, host: str, port: int) -> None
    def connect() -> None
    def disconnect() -> None
    def download_session(session_id: str, path: Path) -> None
```

### Exceções

| Exceção         | Descrição                      |
| ---------------- | ------------------------------ |
| ClipError        | Exceção base para todos os erros |
| ConnectionError  | Falha de conexão BLE/WiFi      |
| TimeoutError     | Tempo limite de comando excedido |
| CommandError     | Comando AT inválido ou com falha |

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
