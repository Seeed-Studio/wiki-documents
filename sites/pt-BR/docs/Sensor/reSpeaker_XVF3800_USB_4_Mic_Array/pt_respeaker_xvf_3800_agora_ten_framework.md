---
description: Este projeto demonstra como usar o Seeed Studio reSpeaker XVF3800 (XIAO ESP32-S3) como um dispositivo de voz de borda, estabelecer um link de voz bidirecional em tempo real via Agora e conectar-se a um backend Agora ten-framework (LLM/ASR/TTS) para obter conversas de voz em tempo real com baixa latência.
title: Guia de Implantação do Cliente Conversacional de Borda reSpeaker XVF3800 + Agora ten-framework
keywords:
  - reSpeaker
  - XVF3800
  - XIAO
  - ESP32S3
  - Agora
  - ten-framework
  - AI Agent
  - RTC
  - ESP-IDF
  - ESP-ADF
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp
slug: /respeaker_xvf3800_agora_ten_framework_client
sku: 114993702,114993700
last_update:
  date: 09/02/2026
  author: Jiayu Zhan(Jack)
createdAt: '2026-02-09'
updatedAt: '2026-09-02'
url: https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_agora_ten_framework_client/
---

> Objetivo: Fazer o ESP32S3 funcionar junto com o reSpeaker XVF3800 e construir um link de voz bidirecional estável e de baixa latência via **Agora RTC**.
> Código-fonte: https://github.com/Seeed-Projects/seeed-respeaker-agora-tenframework
> Seeed-Projects: https://github.com/Seeed-Projects/seeed-respeaker-agora-tenframework

## Introdução

Neste tutorial, vamos guiá-lo para usar o Seeed XIAO ESP32-S3 com o reSpeaker XVF3800 para captura e reprodução de áudio, e usar o Agora RTC para completar a conexão de áudio em tempo real entre o dispositivo e o backend. O backend é executado como um AI Agent. O projeto fornece um método de configuração padronizado (`.env` / `property.json`), suporta implantação com um clique via Docker, autenticação dinâmica de token e provedores plugáveis (ASR/LLM/TTS podem ser substituídos conforme necessário). Ele completa automaticamente o ciclo completo de **ASR → LLM → TTS** e transmite a fala sintetizada de volta para o dispositivo para reprodução — oferecendo uma experiência de conversa de baixa latência de “fale uma vez, receba uma resposta”.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## Escolha Seu Backend

Este guia fornece **duas opções de backend**. Escolha a que melhor se adapta ao seu cenário:

| Opção | Melhor para | Servidor necessário | Link |
|---|---|---:|---|
| **Agora Conversational AI Agent v2 (Nuvem, direto)** | Configuração mais rápida / infraestrutura mínima | Não | 👉 [Ir para a versão Agent v2](/pt-br/respeaker_xvf3800_agora_convo_client) |
| **TEN Framework (Self-hosted, ASR/LLM/TTS plugáveis)** | Pipeline personalizado / troca de provedores / recursos avançados | Sim (Docker) | Você está aqui ✅ |


## Tabela de Conteúdos

1. [Agora Assistant – Guia de Início Rápido](#agora-assistant--guia-de-início-rápido)
2. [Arquitetura do Sistema](#arquitetura-do-sistema)
3. [Pré-requisitos](#pré-requisitos)
4. [Atualização de Firmware](#atualização-de-firmware)
5. [Implantação no Lado do Servidor](#implantação-no-lado-do-servidor)
   - [Implantação no Windows](#implantação-no-windows-recommended)
   - [Implantação no Linux/Mac](#implantação-no-linuxmac-deployment)
6. [Implantação no Lado do ESP32](#implantação-no-lado-do-esp32)
   - [Configuração do Ambiente de Desenvolvimento](#configuração-do-ambiente-de-desenvolvimento)
   - [Build & Flash](#build--flash)
7. [Validação & Testes](#validação--testes)
8. [FAQ](#faq)
9. [Referências](#referências)


## Agora Assistant – Guia de Início Rápido

### Visão Geral da Arquitetura

1. **Detecção de Palavra de Ativação (Wake Word)** – Monitora continuamente uma frase de ativação predefinida.
2. **Speech-to-Text (STT)** – Converte a fala do usuário em texto usando um mecanismo de reconhecimento de fala.
3. **LLM com RAG** – Recupera contexto relevante de um banco de dados vetorial e usa um LLM para gerar uma resposta inteligente.
4. **Text-to-Speech (TTS)** – Converte a resposta gerada em fala natural.


### Estrutura de Diretórios Principal

```text
ai_agents/
├── esp32-client/   # XIAO ESP32-S3 edge side: capture/play audio + Agora connection + conversation interaction
├── server/         # Server side: AI Agent orchestration / LLM / ASR / TTS, etc. (works with edge side)
├── agents/         # TEN Agent examples and extensions
├── playground/     # Web frontend UI
├── .env.example    # Environment variable template
├── docker-compose.yml  # Docker compose file
└── Dockerfile      # Docker image build file
```


## Arquitetura do Sistema

```
┌─────────────────────────────────────────────────────────────────────┐
│                           System Architecture                         │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌─────────────────┐                    ┌─────────────────────────┐ │
│  │  ESP32-S3 Device │                    │      AI Agent Server    │ │
│  │  (Edge Side)     │                    │        (Backend)        │ │
│  ├─────────────────┤                    ├─────────────────────────┤ │
│  │ • Microphone In  │ ──── Agora RTC ──→ │ • ASR Speech Recognition│ │
│  │ • Wi-Fi          │   Real-time audio  │ • LLM Large Language    │ │
│  │ • Speaker Out    │ ←── Agora RTC ──── │ • TTS Speech Synthesis  │ │
│  └─────────────────┘                    └─────────────────────────┘ │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

Workflow:
1. ESP32-S3 connects to the network and joins an Agora channel
2. The edge side captures microphone audio and publishes it to Agora
3. The server receives audio and runs the ASR → LLM → TTS pipeline
4. The backend sends response audio back; the device plays it, enabling real-time voice conversation
```



## Pré-requisitos

### Requisitos de Hardware

| Hardware | Observações |
|------|------|
| **Seeed Studio XIAO ESP32-S3** | Placa controladora principal |
| **ReSpeaker XVF3800** | Placa de expansão de áudio (matriz de microfones + interface para alto-falante) |
| **Alto-falante** | Pelo menos um alto-falante para reproduzir as respostas de IA |
| **Cabo de dados USB-C** | Para gravar o firmware e alimentar o dispositivo |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp" alt="ReSpeaker XVF3800" width={500} height="auto" /></p>

### Contas & Chaves de API

Antes da implantação, você precisa se registrar e obter chaves de API para os seguintes serviços:

#### 🔹 Agora – Obrigatório

1. Visite https://console.agora.io/
2. Crie uma conta gratuita
3. Crie um novo projeto
4. Copie o **App ID** e o **App Certificate**

#### 🔹 Deepgram (ASR) – Obrigatório

1. Visite https://console.deepgram.com/
2. Crie uma conta gratuita (há cota gratuita disponível)
3. Vá para a página de API Keys
4. Crie uma nova API key

#### 🔹 OpenAI (LLM) – Obrigatório

1. Visite https://platform.openai.com/
2. Crie uma conta e adicione um método de pagamento
3. Vá para a página de API Keys
4. Crie uma nova secret key

#### 🔹 Cartesia (TTS) – Padrão

1. Visite https://cartesia.ai/sonic
2. Crie uma conta gratuita (há cota gratuita disponível)
3. Vá para API Key → New API Key
4. Copie a API key

#### 🔹 FlowSpeech (TTS) – Opcional

Se você precisar de controle consciente de contexto, emoção e pausas, pode trocar a extensão TTS padrão pelo serviço de [texto para fala com IA](https://flowspeech.io):

1. Crie uma conta no FlowSpeech
2. Vá para Settings → API Keys
3. Crie e copie a API Key
4. Configure a extensão seguindo “Opcional: Alternar para FlowSpeech TTS” abaixo

### Requisitos de Software

| Software | Versão | Finalidade |
|------|----------|------|
| **Docker Desktop** | Mais recente | Implantação de servidor em contêiner |
| **Git** | Mais recente | Clonar o repositório |
| **ESP-IDF** | v5.2.3 | Framework de desenvolvimento para ESP32 |
| **ESP-ADF** | v2.7 | Framework de desenvolvimento de áudio para ESP32 |

## Atualização de Firmware

Para obter a melhor experiência de reprodução, recomendamos atualizar o firmware XMOS para a versão mais recente.

### Baixar Firmware

Você pode baixar o firmware a partir [daqui](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares/i2s).

### Etapas de Atualização

No seu computador, conecte o **ReSpeaker XMOS XVF3800 com XIAO ESP32S3** e execute a ferramenta de atualização de firmware, depois selecione o firmware.

Para um guia detalhado, consulte [esta página](https://wiki.seeedstudio.com/cn/respeaker_xvf3800_introduction/#update-firmware)。

:::tip Importante
A atualização de firmware é uma etapa obrigatória e é fortemente recomendada para obter a melhor experiência de áudio e estabilidade.
:::


## Implantação no Lado do Servidor

### Implantação no Windows (Recomendado)

#### Etapa A: Instalar e Configurar o Docker Desktop (apenas na primeira vez)

1. **Baixe e instale o Docker Desktop**

   Visite https://www.docker.com/products/docker-desktop/ para baixar e instalar.

2. **Opções de instalação**
   - Marque **Use WSL 2 instead of Hyper-V** (se disponível)

3. **Verifique a instalação**
   - Abra o Docker Desktop após a instalação
   - Aguarde até que o ícone da bandeja mostre **Docker is running**

4. **(Recomendado) Ativar Integração com WSL**
   - Docker Desktop → `Settings` → `Resources` → `WSL Integration`
   - Ative a sua distribuição WSL mais utilizada (por exemplo, Ubuntu)

#### Etapa B: Clonar o repositório e configurar variáveis de ambiente

1. **Abra o PowerShell ou Windows Terminal**

2. **Clone o repositório**
   ```bash
   git clone https://github.com/Seeed-Projects/seeed-respeaker-agora-tenframework.git
   cd esp32-client-agora/ai_agents
   ```

3. **Copie o template de ambiente**

   PowerShell:
   ```powershell
   Copy-Item .env.example .env
   ```

   CMD:
   ```cmd
   copy .env.example .env
   ```

4. **Edite o arquivo `.env` e preencha suas chaves de API**

   Abra `.env` com o Notepad ou VS Code e atualize os campos principais:

   ```env
   # ==============================
   # Agora RTC (Required)
   # ==============================
   AGORA_APP_ID=your_agora_app_id
   AGORA_APP_CERTIFICATE=your_agora_app_certificate

   # ==============================
   # Deepgram ASR (Required)
   # ==============================
   DEEPGRAM_API_KEY=your_deepgram_api_key

   # ==============================
   # OpenAI LLM (Required)
   # ==============================
   OPENAI_API_KEY=your_openai_api_key
   OPENAI_MODEL=gpt-4o
   OPENAI_PROXY_URL=  # Optional: set if you need a proxy

   # ==============================
   # Cartesia TTS (Required)
   # ==============================
   Cartesia_TTS_KEY=your_cartesia_api_key

   # Optional: FlowSpeech TTS
   FLOWSPEECH_API_KEY=your_flowspeech_api_key

   # ==============================
   # Server config (usually no changes needed)
   # ==============================
   LOG_PATH=/tmp/ten_agent
   LOG_STDOUT=true
   GRAPH_DESIGNER_SERVER_PORT=49483
   SERVER_PORT=8080
   WORKERS_MAX=100
   ```

#### Opcional: Alternar para FlowSpeech TTS

A extensão FlowSpeech gera áudio PCM de 24 kHz, mono e 16 bits, e pode ser conectada diretamente ao nó `tts` deste exemplo. Abra `agents/examples/voice-assistant/tenapp/property.json` e substitua o nó chamado `tts` por:

```json
{
  "type": "extension",
  "name": "tts",
  "addon": "flowspeech_tts_python",
  "extension_group": "tts",
  "property": {
    "dump": false,
    "dump_path": "./",
    "params": {
      "api_key": "${env:FLOWSPEECH_API_KEY}",
      "base_url": "https://flowspeech.io",
      "voice_name": "Kore"
    }
  }
}
```

Após salvar, continue com `task install` e `task run`. A API Key deve ser guardada apenas no arquivo `.env` local e não deve ser enviada para o repositório Git.

#### Etapa C: Iniciar os serviços Docker

```bash
docker compose up -d
```

Verificar o status dos containers (opcional):
```bash
docker compose ps
```

Você deverá ver uma saída semelhante a:
```
NAME            STATUS    PORTS
ten_agent_dev   running   0.0.0.0:3000->3000/tcp, 0.0.0.0:49483->49483/tcp
```

#### Etapa D: Entrar no container e executar o exemplo

1. **Entrar no container**
   ```bash
   docker exec -it ten_agent_dev bash
   ```

2. **Instalar e executar o exemplo de Assistente de Voz**
   ```bash
   cd agents/examples/voice-assistant
   task install
   task run
   ```

3. **Aguardar o serviço iniciar**

   Quando você vir logs como os abaixo, o serviço está em execução:
   ```
   [INFO] Server started on port 8080
   [INFO] Waiting for connections...
   ```

#### Etapa E: Verificar os serviços

- **Servidor de API**: http://localhost:8080
- **Interface Frontend**: http://localhost:3000
- **TMAN Designer**: http://localhost:49483

#### Comandos comuns

```bash
# View container logs
docker compose logs -f

# Stop services
docker compose down

# Restart services
docker compose restart

# Full cleanup (including volumes)
docker compose down -v
```


### Implantação em Linux/Mac

#### Etapa 1: Instalar o Docker

**Ubuntu/Debian:**
```bash
sudo apt update
sudo apt install docker.io docker-compose
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker $USER
# Log out and log back in to take effect
```

**macOS:**
```bash
# Install Docker Desktop via Homebrew
brew install --cask docker
# Then launch the Docker Desktop app
```

#### Etapa 2: Clonar e configurar

```bash
git clone https://github.com/zhannn668/esp32-client-agora.git
cd esp32-client-agora/ai_agents
cp .env.example .env
```

#### Etapa 3: Editar variáveis de ambiente

```bash
nano .env
# or use vim
vim .env
```

Preencha suas chaves de API (consulte a seção do Windows acima).

#### Etapa 4: Iniciar os serviços

```bash
docker compose up -d
docker exec -it ten_agent_dev bash
cd agents/examples/voice-assistant
task install
task run
```


## Implantação no lado ESP32

### Configuração do Ambiente de Desenvolvimento

#### Instalar ESP-IDF (v5.2.3)

##### Windows

1. **Baixar o instalador offline do ESP-IDF v5.2.3**

   https://docs.espressif.com/projects/esp-idf/zh_CN/v5.2.3/esp32/get-started/windows-setup.html

2. **Executar o instalador**
   - Escolha um caminho de instalação (padrão recomendado: `C:\Espressif`)
   - Após a instalação, um atalho “ESP-IDF 5.2 PowerShell” aparecerá no menu Iniciar

3. **Verificar a instalação**

   Abra “ESP-IDF 5.2 PowerShell” e execute:
   ```bash
   idf.py --version
   ```

##### Linux

```bash
# Create an install directory
mkdir -p ~/esp
cd ~/esp

# Clone ESP-IDF
git clone -b v5.2.3 --recursive https://github.com/espressif/esp-idf.git

# Install toolchain
cd esp-idf
./install.sh esp32s3

# Configure environment variables (add to ~/.bashrc)
echo 'alias get_idf=". $HOME/esp/esp-idf/export.sh"' >> ~/.bashrc
source ~/.bashrc
```

#### Instalar ESP-ADF (v2.7)

##### Windows

1. **Clonar ESP-ADF**

   No ESP-IDF PowerShell:
   ```bash
   cd C:\Espressif\frameworks
   git clone --recursive https://github.com/espressif/esp-adf.git
   cd esp-adf
   git checkout v2.7
   git submodule update --init --recursive
   ```

2. **Definir a variável de ambiente ADF_PATH**

   Opção 1: Configurações do sistema
   - Abra “Propriedades do Sistema” → “Avançado” → “Variáveis de Ambiente”
   - Crie uma nova variável de usuário: `ADF_PATH` = `C:\Espressif\frameworks\esp-adf`

   Opção 2: Linha de comando
   ```powershell
   setx ADF_PATH "C:\Espressif\frameworks\esp-adf"
   ```

   **Importante**: Reinicie o ESP-IDF PowerShell após defini-la.

##### Linux

```bash
cd ~/esp
git clone --recursive https://github.com/espressif/esp-adf.git
cd esp-adf
git checkout v2.7
git submodule update --init --recursive

# Add env var
echo 'export ADF_PATH=$HOME/esp/esp-adf' >> ~/.bashrc
source ~/.bashrc
```

#### Aplicar o Patch do IDF

O ESP-ADF exige aplicar um patch de FreeRTOS ao ESP-IDF:

```bash
cd $IDF_PATH
git apply $ADF_PATH/idf_patches/idf_v5.2_freertos.patch
```

#### Modificar a Configuração de Pinos de Placa do ESP-ADF (Crítico!)

Como o pinout do ReSpeaker XVF3800 é diferente do Korvo-2 V3 padrão, você deve modificar a configuração de placa do framework:

**Localização do arquivo:**
- Windows: `C:\Espressif\frameworks\esp-adf\components\audio_board\esp32_s3_korvo2_v3\board_pins_config.c`
- Linux/Mac: `$ADF_PATH/components/audio_board/esp32_s3_korvo2_v3/board_pins_config.c`

:::caution Importante
- Este arquivo está no diretório do framework ESP-ADF, não no diretório do seu projeto.
- As alterações afetarão todos os projetos que usam esta configuração de placa.
- É recomendável fazer backup do arquivo original primeiro: `cp board_pins_config.c board_pins_config.c.backup`
:::

**Atualizar pinos I2C** – Encontre `get_i2c_pins()` e altere para:

```c
esp_err_t get_i2c_pins(i2c_port_t port, i2c_config_t *i2c_config)
{
    // ReSpeaker XVF3800 I2C configuration
    i2c_config->sda_io_num = GPIO_NUM_5;   // ReSpeaker I2C SDA
    i2c_config->scl_io_num = GPIO_NUM_6;   // ReSpeaker I2C SCL
    return ESP_OK;
}
```

**Atualizar pinos I2S** – Encontre `get_i2s_pins()` e altere para:

```c
esp_err_t get_i2s_pins(int port, board_i2s_pin_t *i2s_config)
{
    // ReSpeaker XVF3800 I2S configuration
    i2s_config->bck_io_num   = GPIO_NUM_8;   // BCLK
    i2s_config->ws_io_num    = GPIO_NUM_7;   // WS/LRCK
    i2s_config->data_out_num = GPIO_NUM_44;  // DOUT
    i2s_config->data_in_num  = GPIO_NUM_43;  // DIN
    i2s_config->mck_io_num   = -1;           // Disable MCLK
    return ESP_OK;
}
```

#### Baixar o Agora IoT SDK

1. **Baixar o SDK**

   https://rte-store.s3.amazonaws.com/agora_iot_sdk.tar

2. **Extrair no diretório components**
   ```bash
   cd esp32-client-agora/ai_agents/esp32-client/components
   tar -xvf agora_iot_sdk.tar
   ```

#### Inicializar o submódulo esp32-camera

```bash
cd esp32-client-agora
git submodule update --init --recursive
```


### Compilar & Gravar

#### Configurar parâmetros do Agente de IA

Edite `ai_agents/esp32-client/main/app_config.h`. Se você usar um IP de LAN, certifique-se de que o ESP32 e o servidor estejam na mesma LAN; se usar um IP público, você pode ignorar isso.

```c
#pragma once

// ==============================
// AI Agent server configuration
// ==============================
// Change to your Server IP (the computer running Docker)
#define TENAI_AGENT_URL       "http://192.168.x.x:8080"

// ==============================
// Agent graph selection
// ==============================
#define CONFIG_GRAPH_OPENAI     // Use OpenAI graph

// ==============================
// Greeting and prompt
// ==============================
#define GREETING               "Can I help You?"
#define PROMPT                 ""

// ==============================
// Graph configuration
// ==============================
#if defined(CONFIG_GRAPH_OPENAI)
#define GRAPH_NAME             "voice_assistant"
#define V2V_MODEL              "gpt-realtime"
#define LANGUAGE               "en-US"
#define VOICE                  "ash"
#endif

// ==============================
// Agent identity configuration
// ==============================
#define AI_AGENT_NAME          "tenai0125-11"
#define AI_AGENT_CHANNEL_NAME  "test_channel_12345"  // Channel name
#define AI_AGENT_USER_ID        12345                 // User ID

// ==============================
// Audio codec configuration
// ==============================
#define CONFIG_USE_G711U_CODEC

// ==============================
// Agora App ID
// ==============================
#define AGORA_APP_ID "your_agora_app_id"
```

#### Compilar firmware

1. **Abrir o terminal ESP-IDF**
   - Windows: “ESP-IDF 5.2 PowerShell”
   - Linux/Mac: execute `get_idf`

2. **Entrar no diretório do projeto**
   ```bash
   cd esp32-client-agora/ai_agents/esp32-client
   ```

3. **Definir o chip de destino**
   ```bash
   idf.py set-target esp32s3
   ```

4. **Configurar Wi-Fi e FreeRTOS**
   ```bash
   idf.py menuconfig
   ```

   Configure os seguintes itens:

   - **Configuração de Wi-Fi**:
     ```
     Agora Demo for ESP32 --->
         (your WiFi SSID) WiFi SSID
         (your WiFi password) WiFi Password
     ```

   - **Habilitar compatibilidade retroativa do FreeRTOS**:
     ```
     Component config --->
         FreeRTOS --->
             Kernel --->
                 [*] configENABLE_BACKWARD_COMPATIBILITY
     ```

5. **Compilar**
   ```bash
   idf.py build
   ```

   Em caso de sucesso, você verá:
   ```
   Project build complete. To flash, run:
   idf.py flash
   ```

#### Gravar firmware

1. **Conectar a placa**
   - Conecte o XIAO ESP32-S3 ao seu computador via cabo USB-C

2. **Identificar a porta serial**
   - Windows: Gerenciador de Dispositivos → Portas, encontre a porta COM (por exemplo, COM3)
   - Linux: geralmente `/dev/ttyUSB0` ou `/dev/ttyACM0`
   - macOS: geralmente `/dev/cu.usbmodem*`

3. **Gravar e monitorar**
   ```bash
   # Windows
   idf.py -p COM3 flash monitor

   # Linux/Mac
   idf.py -p /dev/ttyUSB0 flash monitor
   ```

   **Problema de permissão no Linux**: se você vir “permission denied”, execute:
   ```bash
   sudo usermod -aG dialout $USER
   # then log out and log back in
   ```

4. **Indicação de gravação bem-sucedida**

   Ver logs como os abaixo indica sucesso:
   ```
   Hard resetting via RTS pin...
   Connecting...
   ```


## Validação & Testes

### Verificar logs de boot do ESP32

Quando ele iniciar com sucesso, a saída serial deverá incluir estes logs principais:

```
I (xxxx) wifi: connected with YourWiFi, aid = 1
got ip: 192.168.x.x

~~~~~Initializing AIC3104 Codec~~~~
W (xxxx) AIC3104_NG: Found device at address 0x18
AIC3104 detected, page register = 0x00
~~~~~AIC3104 Codec initialized successfully~~~~

I (xxxx) AUDIO_PIPELINE: Pipeline started
~~~~~agora_rtc_join_channel success~~~~
Agora: Press [SET] key to join the Ai Agent ...
```

### Lista de Verificação de Sucesso

| Item | Significado |
|------|------|
|  `WiFi connected` | Wi-Fi conectado com sucesso |
|  `got ip: xxx.xxx.xxx.xxx` | Endereço IP obtido |
|  `Found device at address 0x18` | AIC3104 detectado |
|  `AIC3104 Codec initialized successfully` | Codec inicializado com sucesso |
|  `agora_rtc_join_channel success` | Canal RTC acessado com sucesso |

### Execute um teste de conversa por voz

1. Pressione o botão **SET** na placa para iniciar o Agente de IA
2. Fale no microfone
3. Observe os logs seriais; você deve ver logs de envio/recebimento de áudio
4. O alto-falante reproduz a resposta da IA


## Perguntas frequentes (FAQ)

### Problemas do lado do servidor

#### P1: Contêineres Docker não iniciam

**R:** Verifique o seguinte:
1. Certifique-se de que o Docker Desktop está em execução
2. Verifique se a porta já está em uso: `netstat -an | grep 8080`
3. Veja logs detalhados: `docker compose logs`

#### P: Comando `task` não encontrado após entrar no contêiner

**R:** Certifique-se de que está usando a imagem correta. Execute `docker compose pull` para atualizar a imagem.



### Problemas do lado do ESP32

#### P2: Erro de compilação `i2c driver install error`

**R:** Conflito de driver I2C. Certifique-se de que o código usa a API I2C legada (`driver/i2c.h`) em vez da nova (`driver/i2c_master.h`).

#### P: Tempo limite de I2C em tempo de execução `ESP_ERR_TIMEOUT`

**R:** Possíveis causas:
1. Problema de fiação de hardware – verifique as linhas/cabos I2C
2. Configuração de pinos incorreta – verifique se `board_pins_config.c` foi atualizado corretamente
3. Endereço I2C incorreto – verifique o endereço detectado nos logs

Logs de depuração:
```
W (xxxx) AIC3104_NG: Scanning I2C bus...
W (xxxx) AIC3104_NG: Found device at address 0x??
```
Se o endereço não for `0x18`, você precisa alterar `AIC3104_ADDR` em `aic3104_ng.h`.

#### P: Sem saída de áudio

**R:** Verifique:
1. Se o AIC3104 inicializa com sucesso (verifique os logs seriais)
2. Se os pinos I2S estão configurados corretamente
3. Se o alto-falante está conectado corretamente

#### P: Erro de buffer de rede `Not enough space`

**R:** Este é um problema de rede em tempo de execução e geralmente pode ser ignorado temporariamente:
1. Verifique a qualidade da rede
2. Reduza a taxa de bits do áudio
3. Aumente o tamanho do buffer de rede

#### P: Ainda há erros após modificar `board_pins_config.c`

**R:**
1. Confirme se você editou o caminho de arquivo correto
2. Execute `idf.py fullclean` para uma limpeza completa
3. Reconstrua com `idf.py build`



## Referências

### Documentação oficial

| Recurso | Link |
|------|------|
| Guia de Programação ESP-IDF | https://docs.espressif.com/projects/esp-idf/zh_CN/v5.2.3/esp32s3/ |
| Guia de Programação ESP-ADF | https://docs.espressif.com/projects/esp-adf/zh_CN/latest/ |
| Documentação do Agora RTC | https://docs.agora.io/en/rtc/overview/product-overview |
| Documentação do TEN Framework | https://doc.theten.ai |
| Guia de Firmware do ReSpeaker XVF3800 | https://wiki.seeedstudio.com/cn/respeaker_xvf3800_introduction/ |

### Serviços de API

| Serviço | Console |
|------|-----------|
| Agora | https://console.agora.io/ |
| Deepgram | https://console.deepgram.com/ |
| OpenAI | https://platform.openai.com/ |
| ElevenLabs | https://elevenlabs.io/ |

### Folhas de dados dos chips

| Datasheet | Link |
|------|------|
| Datasheet TI AIC3104 | https://www.ti.com/product/TLV320AIC3104 |
| Wiki do XIAO ESP32-S3 | https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_getting_started/ |

### Repositórios do projeto

| Repositório | Link |
|------|------|
| TEN Framework | https://github.com/TEN-framework/ten-framework |
| ESP32 Client Agora | https://github.com/zhannn668/esp32-client-agora |

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nosso produto! Estamos aqui para fornecer suporte e tornar sua experiência o mais tranquila possível. Oferecemos vários canais de comunicação para atender diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
