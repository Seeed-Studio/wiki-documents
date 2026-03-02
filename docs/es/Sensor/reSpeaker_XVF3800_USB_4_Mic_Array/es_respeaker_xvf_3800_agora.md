---
description: Este proyecto demuestra cómo usar el Seeed Studio reSpeaker XVF3800 (XIAO ESP32-S3) como un dispositivo de voz en el borde. Establece un enlace de audio bidireccional en tiempo real a través de Agora y se conecta directamente a Agora Conversational AI Agent API v2 (LLM/ASR/TTS) para habilitar conversaciones de voz en tiempo real y baja latencia.
title: Guía de Despliegue del Cliente Conversacional en el Borde reSpeaker XVF3800 + Agora Conversational AI Agent v2
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
slug: /es/respeaker_xvf3800_agora_convo_client
sku: 114993702,114993700
last_update:
  date: 2/04/2026
  author: Jiayu Zhan(Jack)
---

> Objetivo: Hacer que ESP32S3 funcione junto con reSpeaker XVF3800 para establecer un enlace de audio bidireccional estable y de baja latencia mediante **Agora RTC**.
> Código fuente del proyecto: https://github.com/Seeed-Projects/ESP32S3_reSpeaker_agora/tree/main
> Seeed-Projects: https://github.com/Seeed-Projects/ESP32S3_reSpeaker_agora/tree/main

## Introducción

En este tutorial, te guiaremos para usar **Seeed Studio reSpeaker XVF3800 (XIAO ESP32-S3)** como un dispositivo de voz en el borde para establecer un enlace de audio bidireccional estable y de baja latencia mediante **Agora RTC**, y llamar directamente a **Agora Conversational AI Agent API v2** en el dispositivo para completar el bucle conversacional de **ASR → LLM → TTS**: el dispositivo captura el audio del micrófono y lo envía en enlace ascendente; la IA en la nube genera respuestas habladas y las envía en enlace descendente; el dispositivo las reproduce en tiempo real, ofreciendo una experiencia de conversación de voz “como una llamada telefónica”.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="respeaker xvf3800 with xiao" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Elige tu backend

Esta guía proporciona **dos opciones de backend**. Elige la que se adapte a tu escenario:

| Opción | Mejor para | Servidor necesario | Enlace |
|---|---|---:|---|
| **Agora Conversational AI Agent v2 (Nube, directo)** | Configuración más rápida / infraestructura mínima | No | Estás aquí ✅ |
| **TEN Framework (Self-hosted, pluggable ASR/LLM/TTS)** | Canalización personalizada / cambio de proveedor / funciones avanzadas | Sí (Docker) | 👉 [Ir a la versión TEN Framework](/es/respeaker_xvf3800_agora_ten_framework_client) |

## Tabla de Contenidos

1. [Características Clave](#Características-Clave)
2. [Arquitectura del Sistema](#Arquitectura-del-Sistema)
3. [Requisitos Previos](#Requisitos-Previos)
4. [Notas de Firmware y Hardware](#Notas-de-Firmware-y-Hardware)
5. [Despliegue en ESP32](#Despliegue-en-ESP32)
   - [Configuración del Entorno de Desarrollo](#Configuración-del-Entorno-de-Desarrollo)
   - [Descargar Agora IoT SDK](#Descargar-Agora-IoT-SDK)
   - [Configurar Pines de la Placa ESP-ADF (Crítico)](#Configurar-Pines-de-la-Placa-ESP-ADF-Crítico)
   - [Configuración de Parámetros del Proyecto](#Configuración-de-Parámetros-del-Proyecto)
   - [Compilar y Grabar](#Compilar-y-Grabar)
6. [Verificación y Pruebas](#Verificación-y-Pruebas)
7. [FAQ](#FAQ)
8. [Referencias](#Referencias)




## Características Clave

- **Conversación de voz en tiempo real**: enlace de audio bidireccional de baja latencia basado en Agora RTC  
- **Integración directa con AI Agent v2**: el dispositivo se conecta directamente a Agora Conversational AI Agent API v2  
- **Control por botones del XVF3800**: sondeo I2C de botones para iniciar/detener conversaciones  
- **Cancelación de Eco Acústico (AEC)**: AEC integrada en la canalización de audio del dispositivo para mejorar la calidad de la conversación  
- **Códec G.711 μ-law**: códec/decodificador eficiente para escenarios de voz embebida  
- **Backend de IA configurable**: el ejemplo admite OpenAI / Azure OpenAI, etc.  
- **Frecuencia de muestreo de 8 kHz**: optimizada para escenarios de conversación de voz  



## Arquitectura del Sistema

### Descripción General de la Arquitectura

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

### Canalización de Procesamiento de Audio en el Borde

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



## Requisitos Previos

### Requisitos de Hardware

| Hardware | Descripción |
|------|------|
| **Seeed Studio XIAO ESP32-S3** | Placa controladora principal (se recomienda versión con PSRAM) |
| **reSpeaker XVF3800** | Placa de expansión con matriz de 4 micrófonos (con DSP) |
| **Altavoz** | Conectar al conector de audio de 3,5 mm para reproducción |
| **Cable de datos USB-C** | Para grabar el firmware y alimentación |

:::tip Nota
En este proyecto, el códec/decodificación de audio es manejado por XVF3800 junto con AIC3104. ESP32-S3 transfiere datos de audio mediante I2S y controla el códec/botones mediante I2C.
:::

### Requisitos de Software

| Software | Versión Recomendada | Propósito |
|------|----------|------|
| **ESP-IDF** | v5.2.3 | Framework de desarrollo para ESP32 |
| **ESP-ADF** | v2.7 | Framework de desarrollo de audio para ESP32 |
| **Python** | 3.8+ | Dependencias de toolchain/compilación |
| **Git** | Última | Obtención y gestión de código |



## Habilitar Conversational AI (Agora Console)

Esta sección garantiza que tu **proyecto de Agora** tenga el interruptor **Enable Conversational AI** activado en la Console, y que hayas preparado el **App ID / App Certificate / RTC Token** necesarios para las llamadas posteriores. Si omites este paso, el dispositivo puede unirse correctamente al canal RTC pero aun así no lograr activar la canalización de conversación del Conversational AI Engine.

### Lo que necesitas

- Una **cuenta de Agora**
- Un **Proyecto de Agora** (recomendado: crearlo con **Secured mode: APP ID + Token (Recommended)**)
- Información del proyecto:
  - **App ID**
  - **App Certificate** (para generación de tokens del lado del servidor)
  - **RTC Token (temporal o generado en servidor)** (para pruebas de unión a RTC)

### 1) Regístrate / Inicia sesión en Agora (Descripción general)

- Admite registro por correo/teléfono e inicio de sesión de terceros.
- Después del registro, inicia sesión en **Agora Console**; normalmente se te guía para crear un proyecto.

### 2) Crea un Proyecto de Agora (Descripción general)

En la página **Projects** de Agora Console:

1. Haz clic en **Create New**
2. Rellena el nombre del proyecto / caso de uso
3. Método de autenticación: **APP ID + Token** (recomendado)
4. Envía para crear

![Create project](https://files.seeedstudio.com/wiki/Respeaker_agora/1.png )

:::tip ¿Por qué se recomienda el modo Token?
Es más seguro para producción y se alinea mejor con el flujo de autenticación recomendado oficialmente para la integración de Conversational AI / RTC.
:::

### 3) Obtén el App ID

En la lista de **Projects**, encuentra tu proyecto y copia el **App ID**.
![Get App ID](https://files.seeedstudio.com/wiki/Respeaker_agora/2.png  )

### 4) Obtén el App Certificate (para generación de tokens del lado del servidor)

1. En la lista de **Projects**, haz clic en el icono ✏️ (editar/configurar) a la derecha del proyecto.
![Get App Certificate](https://files.seeedstudio.com/wiki/Respeaker_agora/3.png )
2. En la página de configuración del proyecto, copia el **App Certificate** de la sección **Primary Certificate**.
![Get App Certificate](https://files.seeedstudio.com/wiki/Respeaker_agora/4.png )

:::caution Importante
App Certificate es información sensible. No lo subas a repositorios públicos ni lo imprimas en registros públicos.
:::

### 5) Genera un RTC Token (para pruebas rápidas)

Dos métodos comunes:

- **Generar un token temporal en la Console (Temp Token)**
  1. Ve a la página de configuración del proyecto
  2. Haz clic en **Generate Temp Token** en el panel Security
  3. Introduce el nombre del canal → Generate → copia el Token

- **Usar Agora Token Builder (web)**
  - Rellena App ID / App Certificate, nombre de canal, UID, etc. para generar un Token (útil para validación rápida antes de implementar la generación de tokens del lado del servidor)

### 6) Activa Enable Conversational AI (Crítico)

Antes de usar Conversational AI Engine, debes habilitarlo en la Console para tu aplicación:

1. Ve a **Projects**, encuentra el proyecto de destino y haz clic en ✏️ para entrar en la configuración.
![Enable Conversational AI](https://files.seeedstudio.com/wiki/Respeaker_agora/5.png )
2. En **All features**, encuentra **Conversational AI > Configurations**
3. Activa el interruptor **Enable Conversational AI**.
![Enable Conversational AI](https://files.seeedstudio.com/wiki/Respeaker_agora/6.png )

:::tip Consola antigua vs. nueva
Si estás viendo la interfaz antigua, cambia primero a la nueva Console (la página suele proporcionar una entrada como “Switch to the new version”).
:::



## Notas de Firmware y Hardware

### Mapeo Clave de Pines (reSpeaker XVF3800 + XIAO ESP32-S3)

| Interfaz | Función | Pin ESP32-S3 |
|------|------|---------------|
| **I2C** | Control del códec + botones | SDA=GPIO5, SCL=GPIO6 |
| **I2S** | Datos de audio | BCLK=GPIO8, WS=GPIO7, DOUT=GPIO44, DIN=GPIO43 |
| **Power** | Alimentación/Grabación | USB-C (XIAO ESP32-S3) |

:::caution Importante
La configuración predeterminada de la placa ESP-ADF suele estar preparada para Korvo-2-V3. Su mapeo de pines es diferente al de XVF3800. Si no la configuras según esta guía, los síntomas comunes incluyen **códec no detectado por I2C / sin audio en I2S**.
:::


## Despliegue en ESP32

### Clonar este repositorio
```bash
git clone https://github.com/AgoraIO-Conversational-AI/esp32-client/tree/main/esp32-respeaker
```

### Configuración del entorno de desarrollo

#### Paso 1:Instalar ESP-IDF v5.2.3

```bash
mkdir -p ~/esp
cd ~/esp
git clone -b v5.2.3 --recursive https://github.com/espressif/esp-idf.git

cd esp-idf
./install.sh esp32s3

# (Recommended) Create an environment load alias (write into ~/.bashrc or ~/.zshrc)
alias get_idf='. $HOME/esp/esp-idf/export.sh'
```

#### Paso 2:Instalar ESP-ADF v2.7

```bash
cd ~/esp
git clone -b v2.7 --recursive https://github.com/espressif/esp-adf.git

export ADF_PATH=~/esp/esp-adf
echo 'export ADF_PATH=~/esp/esp-adf' >> ~/.bashrc  # or ~/.zshrc
```

#### Paso 3:Aplicar parches de IDF (requeridos por ESP-ADF)

```bash
cd ~/esp/esp-idf
git apply $ADF_PATH/idf_patches/idf_v5.2_freertos.patch
```


### Descargar Agora IoT SDK

Extrae el Agora IoT SDK en el directorio `components/` del proyecto (usando la raíz del proyecto como ejemplo):

```bash
cd /path/to/esp32-client-Respeaker-convo/components

wget https://rte-store.s3.amazonaws.com/agora_iot_sdk.tar
tar -xvf agora_iot_sdk.tar
```

Después de la extracción, la estructura de directorios debería verse así:

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

### Configurar pines de la placa ESP-ADF (Crítico)

Este proyecto utiliza la placa ESP-ADF Korvo-2-V3 como base, pero debes reemplazar su mapeo de pines con la configuración de XVF3800.

**Método A (Recomendado): sobrescribir directamente board_pins_config.c**

```bash
cp board_configs/board_pins_config_respeaker.c    $ADF_PATH/components/audio_board/esp32_s3_korvo2_v3/board_pins_config.c
```

**Verificar que surta efecto:**

```bash
grep "TAG =" $ADF_PATH/components/audio_board/esp32_s3_korvo2_v3/board_pins_config.c
```

La salida esperada incluye:

```c
static const char *TAG = "RESPEAKER_XVF3800";
```

:::tip ¿Por qué modificar esto?
Porque el control del códec (AIC3104) y la captura/reproducción I2S dependen del mapeo correcto de pines I2C/I2S. Si los pines son incorrectos, verás problemas como **tiempo de espera de I2C / no se puede detectar 0x18 / sin sonido**, etc.
:::


### Configuración de parámetros del proyecto

Edita `main/app_config.h` y configura lo siguiente:

#### 1) WiFi

```c
#define WIFI_SSID                "Your_WiFi_SSID"
#define WIFI_PASSWORD            "Your_WiFi_Password"
```

#### 2) Información de la cuenta de Agora

```c
#define AGORA_APP_ID             "your_agora_app_id"
#define AGORA_API_KEY            "your_agora_api_key"
#define AGORA_API_SECRET         "your_agora_api_secret"
```

#### 3) Canal y UID de RTC

```c
#define CONVO_CHANNEL_NAME       "your_unique_channel"
#define CONVO_RTC_TOKEN          ""  // Optional: tokens recommended in production
#define CONVO_AGENT_RTC_UID      1001
#define CONVO_REMOTE_RTC_UID     1000
```

#### 4) Configuración de LLM (ejemplos: OpenAI / Azure OpenAI)

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

#### 5) Configuración de TTS (ejemplo: Azure TTS)

```c
#define TTS_VENDOR               "azure"
#define TTS_API_KEY              "your-azure-speech-key"
#define TTS_REGION               "tts-region"
#define TTS_VOICE_NAME           "en-US-JennyNeural"
```

#### 6) Configuración de ASR

```c
#define ASR_LANGUAGE             "en-US"
```


### Compilar y grabar

#### Paso 1:Cargar el entorno ESP-IDF

```bash
get_idf
# or
. $HOME/esp/esp-idf/export.sh
```

#### Paso 2:Entrar en el directorio del proyecto y establecer el objetivo

```bash
cd /path/to/esp32-client-Respeaker-convo
idf.py set-target esp32s3
```

#### Paso 3:Compilar

```bash
idf.py build
```

#### Paso 4:Grabar y monitorizar

```bash
# Linux
idf.py -p /dev/ttyUSB0 flash monitor

# macOS
idf.py -p /dev/cu.usbmodem* flash monitor

# Windows
idf.py -p COM3 flash monitor
```

:::tip Permisos de serie en Linux
Si ves “permission denied”, ejecuta:
```bash
sudo usermod -aG dialout $USER
# Then log out and log back in
```
:::



## Verificación y pruebas

### Lista de comprobación del registro de arranque

En un arranque correcto, el registro serie normalmente incluye:

- WiFi conectado y dirección IP obtenida
- AIC3104 detectado (la dirección I2C suele ser `0x18`)
- Canal de audio iniciado correctamente
- Agora RTC unido correctamente (o listo)

Ejemplo (solo como referencia):

```text
WiFi connected
got ip: 192.168.x.x
Found device at address 0x18
AIC3104 Codec initialized successfully
agora_rtc_join_channel success
```

### Iniciar una conversación (control por botón)

1. Enciende y espera hasta que el dispositivo esté listo  
2. **Pulsa el botón SET una vez**: inicia/únete a la conversación (el Agente se une al canal RTC)  
3. Habla al micrófono y espera a que el altavoz reproduzca la respuesta de la IA  
4. Pulsa **SET** de nuevo (o pulsa **MUTE**) para detener la conversación  


## Preguntas frecuentes (FAQ)

### P1: Tiempo de espera de I2C / AIC3104 (0x18) no encontrado

**Posibles causas:**
- `board_pins_config.c` de ESP-ADF no se reemplazó como se describe en esta guía
- Mapeo incorrecto de pines I2C (debe ser SDA=GPIO5, SCL=GPIO6)
- Problema de conexión de hardware (XIAO y XVF3800 no están correctamente conectados)

**Comprobaciones sugeridas:**
- Repite el paso “Configurar pines de la placa ESP-ADF”, luego ejecuta `idf.py fullclean` y vuelve a compilar
- Comprueba si el registro de arranque puede detectar `0x18`

### P2: La grabación/uplink funciona, pero no hay salida de altavoz

**Causas comunes:**
- La dirección de I2S DIN/DOUT está mal configurada (DIN=GPIO43, DOUT=GPIO44)
- El altavoz no está conectado al conector de 3,5 mm o el volumen es demasiado bajo
- AEC/canal de audio no se inició correctamente

### P3: Errores de compilación o dependencias faltantes

**Sugerencias:**
- Confirma que las versiones de ESP-IDF / ESP-ADF coinciden con esta guía
- Reinicializa los submódulos (si el proyecto usa submódulos):
  ```bash
  git submodule update --init --recursive
  ```
- Haz una limpieza completa:
  ```bash
  idf.py fullclean
  ```



## Referencias

- Agora Console (App ID / API Key)
- Documentación de Agora RTC y documentación de IoT SDK
- Documentación de ESP-IDF v5.2.3
- Documentación de ESP-ADF v2.7
- Guía de introducción y actualización de firmware de reSpeaker XVF3800
- [ESP32 Conversational AI Clients](https://github.com/AgoraIO-Conversational-AI/esp32-client/tree/main)


## Soporte técnico y discusión de productos

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecer distintos tipos de soporte y garantizar que tu experiencia sea lo más fluida posible. Ofrecemos múltiples canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
