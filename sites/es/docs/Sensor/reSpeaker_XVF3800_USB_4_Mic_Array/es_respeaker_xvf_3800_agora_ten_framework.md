---
description: Este proyecto demuestra cómo usar el Seeed Studio reSpeaker XVF3800 (XIAO ESP32-S3) como un dispositivo de voz en el borde, establecer un enlace de voz bidireccional en tiempo real a través de Agora y conectarse a un backend Agora ten-framework (LLM/ASR/TTS) para lograr conversaciones de voz en tiempo real y baja latencia.
title: Guía de Despliegue del Cliente Conversacional en el Borde reSpeaker XVF3800 + Agora ten-framework
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
createdAt: '2026-02-10'
updatedAt: '2026-09-02'
url: https://wiki.seeedstudio.com/es/respeaker_xvf3800_agora_ten_framework_client/
---

> Objetivo: Hacer que el ESP32S3 funcione junto con reSpeaker XVF3800 y construir un enlace de voz bidireccional estable y de baja latencia mediante **Agora RTC**.
> Código fuente: https://github.com/Seeed-Projects/seeed-respeaker-agora-tenframework
> Seeed-Projects: https://github.com/Seeed-Projects/seeed-respeaker-agora-tenframework

## Introducción

En este tutorial, te guiaremos para usar Seeed XIAO ESP32-S3 con reSpeaker XVF3800 para la captura y reproducción de audio, y usar Agora RTC para completar la conexión de audio en tiempo real entre el dispositivo y el backend. El backend se ejecuta como un AI Agent. El proyecto proporciona un método de configuración estandarizado (`.env` / `property.json`), admite despliegue con un clic mediante Docker, autenticación dinámica de tokens y proveedores enchufables (ASR/LLM/TTS se pueden reemplazar según sea necesario). Completa automáticamente el ciclo completo de **ASR → LLM → TTS**, y transmite el habla sintetizada de vuelta al dispositivo para su reproducción, ofreciendo una experiencia conversacional de baja latencia de “di una vez, recibe una respuesta”.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Elige tu Backend

Esta guía proporciona **dos opciones de backend**. Elige la que se adapte a tu escenario:

| Opción | Ideal para | Servidor necesario | Enlace |
|---|---|---:|---|
| **Agora Conversational AI Agent v2 (Cloud, direct)** | Puesta en marcha más rápida / infraestructura mínima | No | 👉 [Ir a la versión Agent v2](/es/respeaker_xvf3800_agora_convo_client) |
| **TEN Framework (Self-hosted, pluggable ASR/LLM/TTS)** | Pipeline personalizado / cambio de proveedor / funciones avanzadas | Sí (Docker) | Estás aquí ✅ |


## Tabla de Contenidos

1. [Agora Assistant – Guía de Inicio Rápido](#agora-assistant--guía-de-inicio-rápido)
2. [Arquitectura del Sistema](#arquitectura-del-sistema)
3. [Requisitos Previos](#requisitos-previos)
4. [Actualización de Firmware](#actualización-de-firmware)
5. [Despliegue en el Servidor](#despliegue-en-el-servidor)
   - [Despliegue en Windows](#despliegue-en-windows-recommended)
   - [Despliegue en Linux/Mac](#despliegue-en-linuxmac)
6. [Despliegue en el lado ESP32](#despliegue-en-el-lado-esp32)
   - [Configuración del Entorno de Desarrollo](#configuración-del-entorno-de-desarrollo)
   - [Compilar y Grabar](#compilar-y-grabar)
7. [Validación y Pruebas](#validación-y-pruebas)
8. [FAQ](#faq)
9. [Referencias](#referencias)


## Agora Assistant – Quick Start Guide

### Descripción General de la Arquitectura

1. **Detección de Palabra de Activación (Wake Word)** – Escucha continuamente una frase de activación predefinida.
2. **Speech-to-Text (STT)** – Convierte el habla del usuario en texto usando un motor de reconocimiento de voz.
3. **LLM con RAG** – Recupera contexto relevante de una base de datos vectorial y usa un LLM para generar una respuesta inteligente.
4. **Text-to-Speech (TTS)** – Convierte la respuesta generada en voz natural.


### Estructura Principal de Directorios

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


## Arquitectura del Sistema

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



## Requisitos Previos

### Requisitos de Hardware

| Hardware | Notas |
|------|------|
| **Seeed Studio XIAO ESP32-S3** | Placa controladora principal |
| **ReSpeaker XVF3800** | Placa de expansión de audio (matriz de micrófonos + interfaz de altavoz) |
| **Altavoz** | Al menos un altavoz para reproducir las respuestas de la IA |
| **Cable de datos USB-C** | Para grabar el firmware y alimentar el dispositivo |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp" alt="ReSpeaker XVF3800" width={500} height="auto" /></p>

### Cuentas y Claves API

Antes del despliegue, necesitas registrarte y obtener claves API para los siguientes servicios:

#### 🔹 Agora – Obligatorio

1. Visita https://console.agora.io/
2. Regístrate para obtener una cuenta gratuita
3. Crea un nuevo proyecto
4. Copia el **App ID** y el **App Certificate**

#### 🔹 Deepgram (ASR) – Obligatorio

1. Visita https://console.deepgram.com/
2. Regístrate para obtener una cuenta gratuita (hay cuota gratuita disponible)
3. Ve a la página de API Keys
4. Crea una nueva API key

#### 🔹 OpenAI (LLM) – Obligatorio

1. Visita https://platform.openai.com/
2. Regístrate y añade un método de pago
3. Ve a la página de API Keys
4. Crea una nueva secret key

#### 🔹 Cartesia (TTS) – Predeterminado

1. Visita https://cartesia.ai/sonic
2. Regístrate para obtener una cuenta gratuita (hay cuota gratuita disponible)
3. Ve a API Key → New API Key
4. Copia la API key

#### 🔹 FlowSpeech (TTS) – Opcional

Si necesitas control consciente del contexto, de las emociones y de las pausas, puedes cambiar la extensión TTS predeterminada al servicio de [texto a voz con IA](https://flowspeech.io):

1. Regístrate en FlowSpeech
2. Ve a Settings → API Keys
3. Crea y copia la API Key
4. Configura la extensión siguiendo “Opcional: Cambiar a FlowSpeech TTS” más abajo

### Requisitos de Software

| Software | Versión | Propósito |
|------|----------|------|
| **Docker Desktop** | Última | Despliegue del servidor en contenedores |
| **Git** | Última | Clonar el repositorio |
| **ESP-IDF** | v5.2.3 | Framework de desarrollo para ESP32 |
| **ESP-ADF** | v2.7 | Framework de desarrollo de audio para ESP32 |

## Actualización de Firmware

Para lograr la mejor experiencia de reproducción, recomendamos actualizar el firmware XMOS a la versión más reciente.

### Descargar Firmware

Puedes descargar el firmware desde [aquí](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares/i2s).

### Pasos de Actualización

En tu ordenador, conecta **ReSpeaker XMOS XVF3800 with XIAO ESP32S3** y ejecuta la herramienta de actualización de firmware, luego selecciona el firmware.

Para una guía detallada, consulta [esta página](https://wiki.seeedstudio.com/cn/respeaker_xvf3800_introduction/#update-firmware)。

:::tip Importante
La actualización de firmware es un paso obligatorio y se recomienda encarecidamente para obtener la mejor experiencia de audio y estabilidad.
:::


## Despliegue en el Servidor

### Despliegue en Windows (Recomendado)

#### Paso A: Instalar y Configurar Docker Desktop (solo la primera vez)

1. **Descargar e instalar Docker Desktop**

   Visita https://www.docker.com/products/docker-desktop/ para descargar e instalar.

2. **Opciones de instalación**
   - Marca **Use WSL 2 instead of Hyper-V** (si está disponible)

3. **Verificar la instalación**
   - Abre Docker Desktop después de la instalación
   - Espera hasta que el icono de la bandeja muestre **Docker is running**

4. **(Recomendado) Habilitar la Integración con WSL**
   - Docker Desktop → `Settings` → `Resources` → `WSL Integration`
   - Habilita tu distribución WSL de uso habitual (por ejemplo, Ubuntu)

#### Paso B: Clonar el repositorio y configurar las variables de entorno

1. **Abrir PowerShell o Windows Terminal**

2. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Seeed-Projects/seeed-respeaker-agora-tenframework.git
   cd esp32-client-agora/ai_agents
   ```

3. **Copiar la plantilla de entorno**

   PowerShell:
   ```powershell
   Copy-Item .env.example .env
   ```

   CMD:
   ```cmd
   copy .env.example .env
   ```

4. **Editar el archivo `.env` y rellenar tus claves API**

   Abre `.env` con Notepad o VS Code y actualiza los campos clave:

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

#### Opcional: Cambiar a FlowSpeech TTS

La extensión FlowSpeech genera audio PCM de 24 kHz, mono y 16 bits, y se puede conectar directamente al nodo `tts` de este ejemplo. Abre `agents/examples/voice-assistant/tenapp/property.json` y reemplaza el nodo llamado `tts` por:

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

Después de guardar, continúa con `task install` y `task run`. La API Key debe guardarse únicamente en el archivo `.env` local y no debe subirse al repositorio Git.

#### Paso C: Iniciar los servicios de Docker

```bash
docker compose up -d
```

Comprobar el estado de los contenedores (opcional):
```bash
docker compose ps
```

Deberías ver una salida similar a:
```
NAME            STATUS    PORTS
ten_agent_dev   running   0.0.0.0:3000->3000/tcp, 0.0.0.0:49483->49483/tcp
```

#### Paso D: Entrar en el contenedor y ejecutar el ejemplo

1. **Entrar en el contenedor**
   ```bash
   docker exec -it ten_agent_dev bash
   ```

2. **Instalar y ejecutar el ejemplo de Asistente de Voz**
   ```bash
   cd agents/examples/voice-assistant
   task install
   task run
   ```

3. **Esperar a que el servicio se inicie**

   Cuando veas registros como los siguientes, el servicio se está ejecutando:
   ```
   [INFO] Server started on port 8080
   [INFO] Waiting for connections...
   ```

#### Paso E: Verificar los servicios

- **Servidor API**: http://localhost:8080
- **Interfaz de usuario Frontend**: http://localhost:3000
- **TMAN Designer**: http://localhost:49483

#### Comandos comunes

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


### Despliegue en Linux/Mac

#### Paso 1:Instalar Docker

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

#### Paso 2:Clonar y configurar

```bash
git clone https://github.com/zhannn668/esp32-client-agora.git
cd esp32-client-agora/ai_agents
cp .env.example .env
```

#### Paso 3:Editar las variables de entorno

```bash
nano .env
# or use vim
vim .env
```

Rellena tus claves de API (consulta la sección de Windows anterior).

#### Paso 4:Iniciar los servicios

```bash
docker compose up -d
docker exec -it ten_agent_dev bash
cd agents/examples/voice-assistant
task install
task run
```


## Despliegue en el lado ESP32

### Configuración del entorno de desarrollo

#### Instalar ESP-IDF (v5.2.3)

##### Windows

1. **Descargar el instalador offline de ESP-IDF v5.2.3**

   https://docs.espressif.com/projects/esp-idf/zh_CN/v5.2.3/esp32/get-started/windows-setup.html

2. **Ejecutar el instalador**
   - Elige una ruta de instalación (por defecto recomendado: `C:\Espressif`)
   - Después de la instalación, aparecerá un acceso directo “ESP-IDF 5.2 PowerShell” en el menú Inicio

3. **Verificar la instalación**

   Abre “ESP-IDF 5.2 PowerShell” y ejecuta:
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

   En ESP-IDF PowerShell:
   ```bash
   cd C:\Espressif\frameworks
   git clone --recursive https://github.com/espressif/esp-adf.git
   cd esp-adf
   git checkout v2.7
   git submodule update --init --recursive
   ```

2. **Configurar la variable de entorno ADF_PATH**

   Opción 1: Configuración del sistema
   - Abre “System Properties” → “Advanced” → “Environment Variables”
   - Crea una nueva variable de usuario: `ADF_PATH` = `C:\Espressif\frameworks\esp-adf`

   Opción 2: Línea de comandos
   ```powershell
   setx ADF_PATH "C:\Espressif\frameworks\esp-adf"
   ```

   **Importante**: Reinicia ESP-IDF PowerShell después de configurarla.

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

#### Aplicar el parche de IDF

ESP-ADF requiere aplicar un parche de FreeRTOS a ESP-IDF:

```bash
cd $IDF_PATH
git apply $ADF_PATH/idf_patches/idf_v5.2_freertos.patch
```

#### Modificar la configuración de pines de la placa ESP-ADF (¡Crítico!)

Debido a que el pinout de ReSpeaker XVF3800 difiere del Korvo-2 V3 por defecto, debes modificar la configuración de la placa en el framework:

**Ubicación del archivo:**
- Windows: `C:\Espressif\frameworks\esp-adf\components\audio_board\esp32_s3_korvo2_v3\board_pins_config.c`
- Linux/Mac: `$ADF_PATH/components/audio_board/esp32_s3_korvo2_v3/board_pins_config.c`

:::caution Important
- Este archivo está en el directorio del framework ESP-ADF, no en el directorio de tu proyecto.
- Los cambios afectarán a todos los proyectos que usen esta configuración de placa.
- Se recomienda hacer una copia de seguridad del archivo original primero: `cp board_pins_config.c board_pins_config.c.backup`
:::

**Actualizar pines I2C** – Busca `get_i2c_pins()` y cámbialo a:

```c
esp_err_t get_i2c_pins(i2c_port_t port, i2c_config_t *i2c_config)
{
    // ReSpeaker XVF3800 I2C configuration
    i2c_config->sda_io_num = GPIO_NUM_5;   // ReSpeaker I2C SDA
    i2c_config->scl_io_num = GPIO_NUM_6;   // ReSpeaker I2C SCL
    return ESP_OK;
}
```

**Actualizar pines I2S** – Busca `get_i2s_pins()` y cámbialo a:

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

#### Descargar Agora IoT SDK

1. **Descargar el SDK**

   https://rte-store.s3.amazonaws.com/agora_iot_sdk.tar

2. **Extraer en el directorio components**
   ```bash
   cd esp32-client-agora/ai_agents/esp32-client/components
   tar -xvf agora_iot_sdk.tar
   ```

#### Inicializar el submódulo esp32-camera

```bash
cd esp32-client-agora
git submodule update --init --recursive
```


### Compilar y grabar

#### Configurar parámetros del Agente de IA

Edita `ai_agents/esp32-client/main/app_config.h`. Si usas una IP de LAN, asegúrate de que el ESP32 y el servidor estén en la misma LAN; si usas una IP pública, puedes ignorar esto.

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

1. **Abrir la terminal de ESP-IDF**
   - Windows: “ESP-IDF 5.2 PowerShell”
   - Linux/Mac: ejecuta `get_idf`

2. **Entrar en el directorio del proyecto**
   ```bash
   cd esp32-client-agora/ai_agents/esp32-client
   ```

3. **Configurar el chip de destino**
   ```bash
   idf.py set-target esp32s3
   ```

4. **Configurar Wi-Fi y FreeRTOS**
   ```bash
   idf.py menuconfig
   ```

   Configura los siguientes elementos:

   - **Configuración de Wi-Fi**:
     ```
     Agora Demo for ESP32 --->
         (your WiFi SSID) WiFi SSID
         (your WiFi password) WiFi Password
     ```

   - **Habilitar compatibilidad retroactiva de FreeRTOS**:
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

   Si tiene éxito verás:
   ```
   Project build complete. To flash, run:
   idf.py flash
   ```

#### Grabar firmware

1. **Conectar la placa**
   - Conecta XIAO ESP32-S3 a tu ordenador mediante un cable USB-C

2. **Identificar el puerto serie**
   - Windows: Device Manager → Ports, busca el puerto COM (por ejemplo, COM3)
   - Linux: normalmente `/dev/ttyUSB0` o `/dev/ttyACM0`
   - macOS: normalmente `/dev/cu.usbmodem*`

3. **Grabar y monitorizar**
   ```bash
   # Windows
   idf.py -p COM3 flash monitor

   # Linux/Mac
   idf.py -p /dev/ttyUSB0 flash monitor
   ```

   **Problema de permisos en Linux**: si ves “permission denied”, ejecuta:
   ```bash
   sudo usermod -aG dialout $USER
   # then log out and log back in
   ```

4. **Indicación de grabación exitosa**

   Ver registros como los siguientes indica éxito:
   ```
   Hard resetting via RTS pin...
   Connecting...
   ```


## Validación y pruebas

### Comprobar los registros de arranque del ESP32

Cuando se inicie correctamente, la salida serie debería incluir estos registros clave:

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

### Lista de verificación de éxito

| Elemento | Significado |
|------|------|
|  `WiFi connected` | Wi-Fi conectado correctamente |
|  `got ip: xxx.xxx.xxx.xxx` | Dirección IP obtenida |
|  `Found device at address 0x18` | AIC3104 detectado |
|  `AIC3104 Codec initialized successfully` | Códec inicializado correctamente |
|  `agora_rtc_join_channel success` | Canal RTC unido correctamente |

### Ejecutar una prueba de conversación por voz

1. Pulsa el botón **SET** en la placa para iniciar el Agente de IA
2. Habla al micrófono
3. Observa los registros serie; deberías ver registros de envío/recepción de audio
4. El altavoz reproduce la respuesta de la IA


## Preguntas frecuentes (FAQ)

### Problemas del lado del servidor

#### P1: Los contenedores de Docker no se inician

**R:** Comprueba lo siguiente:
1. Asegúrate de que Docker Desktop se está ejecutando
2. Comprueba si el puerto ya está en uso: `netstat -an | grep 8080`
3. Ver registros detallados: `docker compose logs`

#### P: Comando `task` no encontrado después de entrar en el contenedor

**R:** Asegúrate de que estás usando la imagen correcta. Ejecuta `docker compose pull` para actualizar la imagen.



### Problemas del lado del ESP32

#### P2: Error de compilación `i2c driver install error`

**R:** Conflicto del controlador I2C. Asegúrate de que el código usa la API I2C heredada (`driver/i2c.h`) en lugar de la nueva (`driver/i2c_master.h`).

#### P: Tiempo de espera de I2C en tiempo de ejecución `ESP_ERR_TIMEOUT`

**R:** Posibles causas:
1. Problema de cableado de hardware: comprueba las líneas/cables I2C
2. Configuración de pines incorrecta: verifica que `board_pins_config.c` se haya actualizado correctamente
3. Dirección I2C incorrecta: comprueba la dirección escaneada en los registros

Registros de depuración:
```
W (xxxx) AIC3104_NG: Scanning I2C bus...
W (xxxx) AIC3104_NG: Found device at address 0x??
```
Si la dirección no es `0x18`, debes cambiar `AIC3104_ADDR` en `aic3104_ng.h`.

#### P: Sin salida de audio

**R:** Comprueba:
1. Si AIC3104 se inicializa correctamente (comprueba los registros serie)
2. Si los pines I2S están configurados correctamente
3. Si el altavoz está conectado correctamente

#### P: Error de búfer de red `Not enough space`

**R:** Este es un problema de red en tiempo de ejecución y normalmente se puede ignorar temporalmente:
1. Comprueba la calidad de la red
2. Reduce la tasa de bits de audio
3. Aumenta el tamaño del búfer de red

#### P: Siguen apareciendo errores después de modificar `board_pins_config.c`

**R:**
1. Confirma que editaste la ruta de archivo correcta
2. Ejecuta `idf.py fullclean` para una limpieza completa
3. Vuelve a compilar con `idf.py build`



## Referencias

### Documentación oficial

| Recurso | Enlace |
|------|------|
| Guía de programación ESP-IDF | https://docs.espressif.com/projects/esp-idf/zh_CN/v5.2.3/esp32s3/ |
| Guía de programación ESP-ADF | https://docs.espressif.com/projects/esp-adf/zh_CN/latest/ |
| Documentación de Agora RTC | https://docs.agora.io/en/rtc/overview/product-overview |
| Documentación de TEN Framework | https://doc.theten.ai |
| Guía de firmware de ReSpeaker XVF3800 | https://wiki.seeedstudio.com/cn/respeaker_xvf3800_introduction/ |

### Servicios de API

| Servicio | Consola |
|------|-----------|
| Agora | https://console.agora.io/ |
| Deepgram | https://console.deepgram.com/ |
| OpenAI | https://platform.openai.com/ |
| ElevenLabs | https://elevenlabs.io/ |

### Hojas de datos de chips

| Hoja de datos | Enlace |
|------|------|
| Hoja de datos TI AIC3104 | https://www.ti.com/product/TLV320AIC3104 |
| Wiki de XIAO ESP32-S3 | https://wiki.seeedstudio.com/es/xiao_esp32s3_getting_started/ |

### Repositorios del proyecto

| Repositorio | Enlace |
|------|------|
| TEN Framework | https://github.com/TEN-framework/ten-framework |
| ESP32 Client Agora | https://github.com/zhannn668/esp32-client-agora |

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestro producto. Estamos aquí para ofrecer soporte y hacer que tu experiencia sea lo más fluida posible. Ofrecemos múltiples canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
