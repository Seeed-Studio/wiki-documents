---
description: Este projeto demonstra como usar o Seeed Studio reSpeaker XVF3800 (XIAO ESP32-S3) como um dispositivo de voz de borda. Ele estabelece um link de áudio bidirecional em tempo real e baixa latência via Agora, e conecta-se diretamente à API v2 do Agora Conversational AI Agent (LLM/ASR/TTS) para habilitar conversas de voz em tempo real e baixa latência.
title: Guia de Implantação do Cliente de Conversação de Borda reSpeaker XVF3800 + Agora Conversational AI Agent v2
keywords:
  - reSpeaker
  - XVF3800
  - XIAO
  - ESP32S3
  - Agora
  - Conversational AI
  - AI Agent
  - RTC
  - ESP-IDF
  - ESP-ADF
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp
slug: /respeaker_xvf3800_agora_convo_client
sku: 114993702,114993700
last_update:
  date: 2/04/2026
  author: Jiayu Zhan(Jack)
createdAt: '2026-02-05'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_agora_convo_client/
---

> Objetivo: Fazer o ESP32S3 funcionar junto com o reSpeaker XVF3800 para estabelecer um link de áudio bidirecional estável e de baixa latência via **Agora RTC**.
> Código-fonte do projeto: https://github.com/Seeed-Projects/ESP32S3_reSpeaker_agora/tree/main
> Seeed-Projects: https://github.com/Seeed-Projects/ESP32S3_reSpeaker_agora/tree/main

## Introdução

Neste tutorial, vamos guiá-lo para usar o **Seeed Studio reSpeaker XVF3800 (XIAO ESP32-S3)** como um dispositivo de voz de borda para estabelecer um link de áudio bidirecional estável e de baixa latência via **Agora RTC**, e chamar diretamente a **API v2 do Agora Conversational AI Agent** no dispositivo para completar o loop conversacional de **ASR → LLM → TTS**: o dispositivo captura o áudio do microfone e o envia em uplink; a IA na nuvem gera respostas faladas e as envia em downlink; o dispositivo as reproduz em tempo real — oferecendo uma experiência de conversa por voz “como em uma chamada telefônica”.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="respeaker xvf3800 with xiao" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## Escolha seu Backend

Este guia fornece **duas opções de backend**. Escolha a que se encaixa no seu cenário:

| Opção | Melhor para | Servidor Necessário | Link |
|---|---|---:|---|
| **Agora Conversational AI Agent v2 (Nuvem, direto)** | Configuração mais rápida / infraestrutura mínima | Não | Você está aqui ✅ |
| **TEN Framework (self-hosted, ASR/LLM/TTS plugáveis)** | Pipeline customizado / troca de provider / recursos avançados | Sim (Docker) | 👉 [Ir para a versão com TEN Framework](/pt-br/respeaker_xvf3800_agora_ten_framework_client) |

## Sumário

1. [Principais Recursos](#Principais-Recursos)
2. [Arquitetura do Sistema](#Arquitetura-do-Sistema)
3. [Pré-requisitos](#Pré-requisitos)
4. [Notas de Firmware e Hardware](#Notas-de-Firmware-e-Hardware)
5. [Implantação no ESP32](#Implantação-no-ESP32)
   - [Configuração do Ambiente de Desenvolvimento](#Configuração-do-Ambiente-de-Desenvolvimento)
   - [Download do Agora IoT SDK](#Download-do-Agora-IoT-SDK)
   - [Configurar os Pinos da Placa ESP-ADF (Crítico)](#Configurar-os-Pinos-da-Placa-ESP-ADF-Crítico)
   - [Configuração de Parâmetros do Projeto](#Configuração-de-Parâmetros-do-Projeto)
   - [Compilar e Gravar](#Compilar-e-Gravar)
6. [Verificação e Testes](#Verificação-e-Testes)
7. [FAQ](#FAQ)
8. [Referências](#Referências)




## Principais Recursos

- **Conversa por voz em tempo real**: link de áudio bidirecional e baixa latência baseado em Agora RTC  
- **Integração direta com AI Agent v2**: o dispositivo conecta-se diretamente à API v2 do Agora Conversational AI Agent  
- **Controle por botão do XVF3800**: varredura I2C dos botões para iniciar/parar conversas  
- **Cancelamento de Eco Acústico (AEC)**: AEC integrado no pipeline de áudio do dispositivo para melhorar a qualidade da conversa  
- **Codec G.711 μ-law**: codec/decodificador eficiente para cenários de voz embarcada  
- **Backend de IA configurável**: o exemplo oferece suporte a OpenAI / Azure OpenAI, etc.  
- **Taxa de amostragem de 8 kHz**: otimizada para cenários de conversação por voz  



## Arquitetura do Sistema

### Visão Geral da Arquitetura

```
┌─────────────────────────────────────────────────────────────────────┐
│                          System Architecture                          │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌─────────────────┐                    ┌─────────────────────────┐ │
│  │   ESP32-S3 Device│                    │   Agora Conversational  │ │
│  │   (Edge)         │                    │      AI Agent v2        │ │
│  ├─────────────────┤                    ├─────────────────────────┤ │
│  │ • Microphone cap.│ ──── Agora RTC ──→ │ • ASR (speech recog.)   │ │
│  │ • WiFi           │     real-time audio│ • LLM (large language)  │ │
│  │ • Speaker play   │ ←── Agora RTC ──── │ • TTS (speech synth.)   │ │
│  │ • Button control │                    │ • Agent mgmt/auth       │ │
│  └─────────────────┘                    └─────────────────────────┘ │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Pipeline de Processamento de Áudio na Borda

```
Microphone (XVF3800)
    ↓ I2S (DIN)
I2S Capture
    ↓
AEC / Audio Processing
    ↓
RTC Encode (G.711 μ-law, 8kHz)
    ↓
Agora RTC Uplink → AI Agent v2
    ↓
(Cloud: ASR → LLM → TTS)
    ↓
Agora RTC Downlink ← AI Agent v2
    ↓
RTC Decode
    ↓
I2S Playback (DOUT)
    ↓
Speaker (3.5mm / AIC3104)
```



## Pré-requisitos

### Requisitos de Hardware

| Hardware | Descrição |
|------|------|
| **Seeed Studio XIAO ESP32-S3** | Placa controladora principal (versão com PSRAM recomendada) |
| **reSpeaker XVF3800** | Placa de expansão com matriz de 4 microfones (com DSP) |
| **Alto-falante** | Conectar ao conector de áudio de 3,5 mm para reprodução |
| **Cabo de dados USB-C** | Para gravação de firmware e alimentação |

:::tip Note
Neste projeto, o codec/decodificação de áudio é tratado pelo XVF3800 juntamente com o AIC3104. O ESP32-S3 transfere dados de áudio via I2S e controla o codec/botões via I2C.
:::

### Requisitos de Software

| Software | Versão Recomendada | Finalidade |
|------|----------|------|
| **ESP-IDF** | v5.2.3 | Framework de desenvolvimento para ESP32 |
| **ESP-ADF** | v2.7 | Framework de desenvolvimento de áudio para ESP32 |
| **Python** | 3.8+ | Dependências da toolchain/build |
| **Git** | Mais recente | Obtenção e gerenciamento de código |



## Habilitar Conversational AI (Console Agora)

Esta seção garante que seu **projeto Agora** tenha a opção **Enable Conversational AI** ativada no Console, e que você tenha preparado o **App ID / App Certificate / RTC Token** necessários para chamadas subsequentes. Se você pular esta etapa, o dispositivo pode ingressar no canal RTC com sucesso, mas ainda assim falhar em acionar o pipeline de conversação do Conversational AI Engine.

### O que você precisa

- Uma **conta Agora**
- Um **Projeto Agora** (recomendado: criar com **Secured mode: APP ID + Token (Recommended)**)
- Informações do projeto:
  - **App ID**
  - **App Certificate** (para geração de token no servidor)
  - **RTC Token (temporário ou gerado no servidor)** (para teste de ingresso no RTC)

### 1) Criar conta / Fazer login no Agora (Visão geral)

- Suporta registro por e-mail/telefone e login de terceiros.
- Após o registro, faça login no **Agora Console**; normalmente você será guiado para criar um projeto.

### 2) Criar um Projeto Agora (Visão geral)

Na página **Projects** no Agora Console:

1. Clique em **Create New**
2. Preencha o nome do Projeto / Caso de uso
3. Método de autenticação: **APP ID + Token** (recomendado)
4. Envie para criar

![Create project](https://files.seeedstudio.com/wiki/Respeaker_agora/1.png )

:::tip Por que o modo Token é recomendado?
Ele é mais seguro para produção e se alinha melhor com o fluxo de autenticação oficialmente recomendado para integração de Conversational AI / RTC.
:::

### 3) Obter o App ID

Na lista de **Projects**, encontre seu projeto e copie o **App ID**.
![Get App ID](https://files.seeedstudio.com/wiki/Respeaker_agora/2.png  )

### 4) Obter o App Certificate (para geração de token no servidor)

1. Na lista de **Projects**, clique no ícone ✏️ (editar/configurar) à direita do projeto.
![Get App Certificate](https://files.seeedstudio.com/wiki/Respeaker_agora/3.png )
2. Na página de configuração do projeto, copie o **App Certificate** na seção **Primary Certificate**.
![Get App Certificate](https://files.seeedstudio.com/wiki/Respeaker_agora/4.png )

:::caution Importante
O App Certificate é uma informação sensível. Não o envie para repositórios públicos nem o imprima em logs públicos.
:::

### 5) Gerar um RTC Token (para teste rápido)

Dois métodos comuns:

- **Gerar um token temporário no Console (Temp Token)**
  1. Vá para a página de configuração do projeto
  2. Clique em **Generate Temp Token** no painel Security
  3. Insira o nome do Canal → Generate → copie o Token

- **Usar o Agora Token Builder (web)**
  - Preencha App ID / App Certificate, nome do canal, UID, etc. para gerar um Token (útil para validação rápida antes de você implementar a geração de token no servidor)

### 6) Ativar Enable Conversational AI (Crítico)

Antes de usar o Conversational AI Engine, você deve ativá-lo no Console para o seu aplicativo:

1. Vá para **Projects**, encontre o projeto de destino e clique em ✏️ para entrar na configuração.
![Enable Conversational AI](https://files.seeedstudio.com/wiki/Respeaker_agora/5.png )
2. Em **All features**, encontre **Conversational AI > Configurations**
3. Ative a chave **Enable Conversational AI**.
![Enable Conversational AI](https://files.seeedstudio.com/wiki/Respeaker_agora/6.png )

:::tip Console antigo vs. novo
Se você estiver vendo a interface antiga, mude primeiro para o novo Console (a página normalmente oferece uma opção como “Switch to the new version”).
:::



## Notas de Firmware e Hardware

### Mapeamento de Pinos Principal (reSpeaker XVF3800 + XIAO ESP32-S3)

| Interface | Função | Pino do ESP32-S3 |
|------|------|---------------|
| **I2C** | Controle do codec + botões | SDA=GPIO5, SCL=GPIO6 |
| **I2S** | Dados de áudio | BCLK=GPIO8, WS=GPIO7, DOUT=GPIO44, DIN=GPIO43 |
| **Power** | Alimentação/Gravação | USB-C (XIAO ESP32-S3) |

:::caution Importante
A configuração padrão de placa do ESP-ADF geralmente é preparada para a Korvo-2-V3. Seu mapeamento de pinos é diferente do XVF3800. Se você não configurar de acordo com este guia, sintomas comuns incluem **codec não detectado via I2C / nenhum áudio em I2S**.
:::


## Implantação no ESP32

### Clone este repositório
```bash
git clone https://github.com/AgoraIO-Conversational-AI/esp32-client/tree/main/esp32-respeaker
```

### Configuração do Ambiente de Desenvolvimento

#### Etapa 1: Instalar ESP-IDF v5.2.3

```bash
mkdir -p ~/esp
cd ~/esp
git clone -b v5.2.3 --recursive https://github.com/espressif/esp-idf.git

cd esp-idf
./install.sh esp32s3

# (Recommended) Create an environment load alias (write into ~/.bashrc or ~/.zshrc)
alias get_idf='. $HOME/esp/esp-idf/export.sh'
```

#### Etapa 2: Instalar ESP-ADF v2.7

```bash
cd ~/esp
git clone -b v2.7 --recursive https://github.com/espressif/esp-adf.git

export ADF_PATH=~/esp/esp-adf
echo 'export ADF_PATH=~/esp/esp-adf' >> ~/.bashrc  # or ~/.zshrc
```

#### Etapa 3: Aplicar patches do IDF (requerido pelo ESP-ADF)

```bash
cd ~/esp/esp-idf
git apply $ADF_PATH/idf_patches/idf_v5.2_freertos.patch
```


### Baixar o Agora IoT SDK

Extraia o Agora IoT SDK no diretório `components/` do projeto (usando a raiz do projeto como exemplo):

```bash
cd /path/to/esp32-client-Respeaker-convo/components

wget https://rte-store.s3.amazonaws.com/agora_iot_sdk.tar
tar -xvf agora_iot_sdk.tar
```

Após a extração, a estrutura de diretórios deve ser semelhante a:

```text
components/agora_iot_sdk/
├── CMakeLists.txt
├── include/
│   └── agora_rtc_api.h
└── libs/
    ├── libagora-cjson.a
    ├── libahpl.a
    └── librtsa.a
```

### Configurar Pinos da Placa ESP-ADF (Crítico)

Este projeto usa a placa ESP-ADF Korvo-2-V3 como base, mas você deve substituir seu mapeamento de pinos pela configuração do XVF3800.

**Método A (Recomendado): sobrescrever `board_pins_config.c` diretamente**

```bash
cp board_configs/board_pins_config_respeaker.c    $ADF_PATH/components/audio_board/esp32_s3_korvo2_v3/board_pins_config.c
```

**Verifique se entrou em vigor:**

```bash
grep "TAG =" $ADF_PATH/components/audio_board/esp32_s3_korvo2_v3/board_pins_config.c
```

A saída esperada inclui:

```c
static const char *TAG = "RESPEAKER_XVF3800";
```

:::tip Por que modificar isto?
Porque o controle do codec (AIC3104) e a captura/reprodução I2S dependem do mapeamento correto dos pinos I2C/I2S. Se os pinos estiverem errados, você verá problemas como **timeout de I2C / não consegue detectar 0x18 / sem som**, etc.
:::


### Configuração de Parâmetros do Projeto

Edite `main/app_config.h` e configure o seguinte:

#### 1) WiFi

```c
#define WIFI_SSID                "Your_WiFi_SSID"
#define WIFI_PASSWORD            "Your_WiFi_Password"
```

#### 2) Informações da conta Agora

```c
#define AGORA_APP_ID             "your_agora_app_id"
#define AGORA_API_KEY            "your_agora_api_key"
#define AGORA_API_SECRET         "your_agora_api_secret"
```

#### 3) Canal e UID do RTC

```c
#define CONVO_CHANNEL_NAME       "your_unique_channel"
#define CONVO_RTC_TOKEN          ""  // Optional: tokens recommended in production
#define CONVO_AGENT_RTC_UID      1001
#define CONVO_REMOTE_RTC_UID     1000
```

#### 4) Configuração de LLM (exemplos: OpenAI / Azure OpenAI)

```c
#define LLM_URL                  "https://api.openai.com/v1/chat/completions"
#define LLM_API_KEY              "sk-your-openai-api-key"
#define LLM_MODEL                "gpt-4o-mini"
#define LLM_SYSTEM_MESSAGE       "You are a helpful AI assistant."
```

```c
#define LLM_URL                  "https://your-resource.openai.azure.com/openai/deployments/..."
#define LLM_API_KEY              "your-azure-api-key"
#define LLM_MODEL                "gpt-4"
```

#### 5) Configuração de TTS (exemplo: Azure TTS)

```c
#define TTS_VENDOR               "azure"
#define TTS_API_KEY              "your-azure-speech-key"
#define TTS_REGION               "tts-region"
#define TTS_VOICE_NAME           "en-US-JennyNeural"
```

#### 6) Configuração de ASR

```c
#define ASR_LANGUAGE             "en-US"
```


### Compilar e Gravar

#### Etapa 1: Carregar o ambiente ESP-IDF

```bash
get_idf
# or
. $HOME/esp/esp-idf/export.sh
```

#### Etapa 2: Entrar no diretório do projeto e definir o alvo

```bash
cd /path/to/esp32-client-Respeaker-convo
idf.py set-target esp32s3
```

#### Etapa 3: Compilar

```bash
idf.py build
```

#### Etapa 4: Gravar e monitorar

```bash
# Linux
idf.py -p /dev/ttyUSB0 flash monitor

# macOS
idf.py -p /dev/cu.usbmodem* flash monitor

# Windows
idf.py -p COM3 flash monitor
```

:::tip Permissões seriais no Linux
Se você vir “permission denied”, execute:
```bash
sudo usermod -aG dialout $USER
# Then log out and log back in
```
:::



## Verificação e Testes

### Lista de Verificação do Log de Inicialização

Em uma inicialização bem-sucedida, o log serial normalmente inclui:

- WiFi conectado e IP obtido
- AIC3104 detectado (o endereço I2C geralmente é `0x18`)
- Pipeline de áudio iniciado com sucesso
- Agora RTC entrou com sucesso (ou está pronto)

Exemplo (apenas para referência):

```text
WiFi connected
got ip: 192.168.x.x
Found device at address 0x18
AIC3104 Codec initialized successfully
agora_rtc_join_channel success
```

### Iniciar uma Conversa (Controle por Botão)

1. Ligue e aguarde até que o dispositivo esteja pronto  
2. **Pressione o botão SET uma vez**: iniciar/entrar na conversa (o Agente entra no canal RTC)  
3. Fale no microfone e aguarde o alto-falante reproduzir a resposta da IA  
4. Pressione **SET** novamente (ou pressione **MUTE**) para encerrar a conversa  


## FAQ

### P1: Timeout de I2C / AIC3104 (0x18) não encontrado

**Causas possíveis:**
- `board_pins_config.c` do ESP-ADF não foi substituído conforme descrito neste guia
- Mapeamento incorreto de pinos I2C (deve ser SDA=GPIO5, SCL=GPIO6)
- Problema de conexão de hardware (XIAO e XVF3800 não estão encaixados corretamente)

**Verificações sugeridas:**
- Repita a etapa “Configurar Pinos da Placa ESP-ADF” e, em seguida, execute `idf.py fullclean` e faça o build novamente
- Verifique se o log de inicialização consegue detectar `0x18`

### P2: Gravação/uplink funciona, mas não há saída no alto-falante

**Causas comuns:**
- Direção DIN/DOUT de I2S configurada incorretamente (DIN=GPIO43, DOUT=GPIO44)
- Alto-falante não conectado ao conector de 3,5 mm ou volume muito baixo
- AEC/pipeline de áudio não iniciou corretamente

### P3: Erros de build ou dependências ausentes

**Sugestões:**
- Confirme se as versões do ESP-IDF / ESP-ADF correspondem a este guia
- Re-inicialize os submódulos (se o projeto usar submódulos):
  ```bash
  git submodule update --init --recursive
  ```
- Faça uma limpeza completa:
  ```bash
  idf.py fullclean
  ```



## Referências

- Agora Console (App ID / API Key)
- Documentação do Agora RTC e documentação do IoT SDK
- Documentação do ESP-IDF v5.2.3
- Documentação do ESP-ADF v2.7
- Introdução e guia de atualização de firmware do reSpeaker XVF3800
- [Clientes de IA Conversacional em ESP32](https://github.com/AgoraIO-Conversational-AI/esp32-client/tree/main)


## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
