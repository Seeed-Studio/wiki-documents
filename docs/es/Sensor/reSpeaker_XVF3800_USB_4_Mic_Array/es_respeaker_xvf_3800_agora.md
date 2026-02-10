---
description: Este proyecto demuestra cómo usar el Seeed Studio reSpeaker XVF3800 (XIAO ESP32-S3) como un dispositivo de voz edge. Establece un enlace de audio bidireccional en tiempo real a través de Agora, y se conecta directamente a la API v2 del Agente de IA Conversacional de Agora (LLM/ASR/TTS) para habilitar conversaciones de voz en tiempo real con baja latencia.
title: Guía de Implementación del Cliente Conversacional Edge ReSpeaker XVF3800 + Agora Conversational AI Agent v2
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
  date: 04/2/2026
  author: Jiayu Zhan(Jack)
---

> Objetivo: Hacer que ESP32S3 funcione junto con reSpeaker XVF3800 para establecer un enlace de audio bidireccional estable y de baja latencia a través de **Agora RTC**.
> Código fuente del proyecto: https://github.com/Seeed-Projects/ESP32S3_reSpeaker_agora/tree/main
> Seeed-Projects: https://github.com/Seeed-Projects/ESP32S3_reSpeaker_agora/tree/main

## Introducción

En este tutorial, te guiaremos para usar **Seeed Studio reSpeaker XVF3800 (XIAO ESP32-S3)** como un dispositivo de voz edge para establecer un enlace de audio bidireccional estable y de baja latencia a través de **Agora RTC**, y llamar directamente a la **API v2 del Agente de IA Conversacional de Agora** en el dispositivo para completar el bucle conversacional de **ASR → LLM → TTS**: el dispositivo captura el audio del micrófono y lo envía hacia arriba; la IA en la nube genera respuestas habladas y las envía hacia abajo; el dispositivo las reproduce en tiempo real—entregando una experiencia de conversación de voz "similar a una llamada telefónica".

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="respeaker xvf3800 with xiao" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Elige Tu Backend

Esta guía proporciona **dos opciones de backend**. Elige la que se adapte a tu escenario:

| Opción | Mejor para | Servidor Necesario | Enlace |
|---|---|---:|---|
| **Agora Conversational AI Agent v2 (Nube, directo)** | Configuración más rápida / infraestructura mínima | No | Estás aquí ✅ |
| **TEN Framework (Auto-hospedado, ASR/LLM/TTS conectables)** | Pipeline personalizado / cambio de proveedores / características avanzadas | Sí (Docker) | 👉 [Ir a la versión TEN Framework](./respeaker_xvf_3800_agora_ten_framework.md) |

## Tabla de Contenidos

1. [Características Clave](#características-clave)
2. [Arquitectura del Sistema](#arquitectura-del-sistema)
3. [Prerrequisitos](#prerrequisitos)
4. [Notas de Firmware y Hardware](#notas-de-firmware-y-hardware)
5. [Implementación ESP32](#implementación-esp32)
   - [Configuración del Entorno de Desarrollo](#configuración-del-entorno-de-desarrollo)
   - [Descargar Agora IoT SDK](#descargar-agora-iot-sdk)
   - [Configurar Pines de Placa ESP-ADF (Crítico)](#configurar-pines-de-placa-esp-adf-crítico)
   - [Configuración de Parámetros del Proyecto](#configuración-de-parámetros-del-proyecto)
   - [Compilar y Flashear](#compilar-y-flashear)
6. [Verificación y Pruebas](#verificación-y-pruebas)
7. [FAQ](#faq)
8. [Referencias](#referencias)




## Características Clave

- **Conversación de voz en tiempo real**: enlace de audio bidireccional de baja latencia basado en Agora RTC  
- **Integración directa con AI Agent v2**: el dispositivo se conecta directamente a la API v2 del Agente de IA Conversacional de Agora  
- **Control de botones XVF3800**: sondeo I2C de botones para iniciar/detener conversaciones  
- **Cancelación de Eco Acústico (AEC)**: AEC integrado en el pipeline de audio del dispositivo para mejorar la calidad de la conversación  
- **Códec G.711 μ-law**: códec/decodificador eficiente para escenarios de voz embebidos  
- **Backend de IA configurable**: el ejemplo soporta OpenAI / Azure OpenAI, etc.  
- **Frecuencia de muestreo de 8 kHz**: optimizada para escenarios de conversación de voz  



## Arquitectura del Sistema

### Visión General de la Arquitectura

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

### Pipeline de Procesamiento de Audio Edge

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



## Prerrequisitos

### Requisitos de Hardware

| Hardware | Descripción |
|------|------|
| **Seeed Studio XIAO ESP32-S3** | Placa controladora principal (versión PSRAM recomendada) |
| **reSpeaker XVF3800** | Placa de expansión de matriz de 4 micrófonos (con DSP) |
| **Altavoz** | Conectar al jack de audio de 3.5mm para reproducción |
| **Cable de datos USB-C** | Para flashear firmware y suministro de energía |

:::tip Nota
En este proyecto, la codificación/decodificación de audio es manejada por XVF3800 junto con AIC3104. ESP32-S3 transfiere datos de audio a través de I2S y controla el códec/botones a través de I2C.
:::

### Requisitos de Software

| Software | Versión Recomendada | Propósito |
|------|----------|------|
| **ESP-IDF** | v5.2.3 | Framework de desarrollo ESP32 |
| **ESP-ADF** | v2.7 | Framework de desarrollo de audio ESP32 |
| **Python** | 3.8+ | Dependencias de toolchain/compilación |
| **Git** | Última | Obtención y gestión de código |



## Habilitar IA Conversacional (Consola Agora)

Esta sección asegura que tu **proyecto Agora** tenga el interruptor **Enable Conversational AI** activado en la Consola, y que hayas preparado el **App ID / App Certificate / RTC Token** requerido para llamadas posteriores. Si omites este paso, el dispositivo puede unirse al canal RTC exitosamente pero aún fallar al activar el pipeline de conversación del Motor de IA Conversacional.

### Lo Que Necesitas

- Una **cuenta Agora**
- Un **Proyecto Agora** (recomendado: crear con **Modo seguro: APP ID + Token (Recomendado)**)
- Información del proyecto:
  - **App ID**
  - **App Certificate** (para generación de tokens del lado del servidor)
  - **RTC Token (temporal o generado por servidor)** (para pruebas de unión RTC)

### 1) Registrarse / Iniciar sesión en Agora (Visión General)

- Soporta registro por email/teléfono e inicio de sesión de terceros.
- Después del registro, inicia sesión en **Agora Console**; usualmente se te guía para crear un proyecto.

### 2) Crear un Proyecto Agora (Visión General)

En la página **Projects** en Agora Console:

1. Haz clic en **Create New**
2. Completa el nombre del proyecto / caso de uso
3. Método de autenticación: **APP ID + Token** (recomendado)
4. Envía para crear

![Create project](https://files.seeedstudio.com/wiki/Respeaker_agora/1.png )

:::tip ¿Por qué se recomienda el modo Token?
Es más seguro para producción, y se alinea mejor con el flujo de autenticación recomendado oficialmente para la integración de IA Conversacional / RTC.
:::

### 3) Obtener el App ID

En la lista **Projects**, encuentra tu proyecto y copia el **App ID**.
![Get App ID](https://files.seeedstudio.com/wiki/Respeaker_agora/2.png  )

### 4) Obtener el App Certificate (para generación de tokens del lado del servidor)

1. En la lista **Projects**, haz clic en el ícono ✏️ (editar/configurar) a la derecha del proyecto.
![Get App Certificate](https://files.seeedstudio.com/wiki/Respeaker_agora/3.png )
2. En la página de configuración del proyecto, copia **App Certificate** de la sección **Primary Certificate**.
![Get App Certificate](https://files.seeedstudio.com/wiki/Respeaker_agora/4.png )

:::caution Importante
App Certificate es información sensible. No lo confirmes en repositorios públicos o lo imprimas en logs públicos.
:::

### 5) Generar un RTC Token (para pruebas rápidas)

Dos métodos comunes:

- **Generar un token temporal en la Consola (Temp Token)**
  1. Ve a la página de configuración del proyecto
  2. Haz clic en **Generate Temp Token** en el panel Security
  3. Ingresa el nombre del canal → Generar → copia el Token

- **Usar Agora Token Builder (web)**
  - Completa App ID / App Certificate, nombre del canal, UID, etc. para generar un Token (útil para validación rápida antes de implementar generación de tokens del lado del servidor)

### 6) Activar Enable Conversational AI (Crítico)

Antes de usar el Motor de IA Conversacional, debes habilitarlo en la Consola para tu app:

1. Ve a **Projects**, encuentra el proyecto objetivo, y haz clic en ✏️ para entrar a la configuración.
![Enable Conversational AI](https://files.seeedstudio.com/wiki/Respeaker_agora/5.png )
2. En **All features**, encuentra **Conversational AI > Configurations**
3. Activa el interruptor **Enable Conversational AI**.
![Enable Conversational AI](https://files.seeedstudio.com/wiki/Respeaker_agora/6.png )

:::tip Consola antigua vs. nueva
Si estás viendo la UI antigua, cambia primero a la nueva Consola (la página típicamente proporciona una entrada como "Switch to the new version").
:::



## Notas de Firmware y Hardware

### Mapeo de Pines Clave (reSpeaker XVF3800 + XIAO ESP32-S3)

| Interfaz | Función | Pin ESP32-S3 |
|------|------|---------------|
| **I2C** | Control de códec + botones | SDA=GPIO5, SCL=GPIO6 |
| **I2S** | Datos de audio | BCLK=GPIO8, WS=GPIO7, DOUT=GPIO44, DIN=GPIO43 |
| **Power** | Energía/Flasheo | USB-C (XIAO ESP32-S3) |

:::caution Importante
La configuración predeterminada de la placa ESP-ADF generalmente está preparada para Korvo-2-V3. Su mapeo de pines es diferente al de XVF3800. Si no configuras según esta guía, los síntomas comunes incluyen **codec no detectado por I2C / sin audio en I2S**.
:::


## Despliegue ESP32

### Clonar este repositorio
```bash
git clone https://github.com/AgoraIO-Conversational-AI/esp32-client/tree/main/esp32-respeaker
```

### Configuración del Entorno de Desarrollo

#### Paso 1: Instalar ESP-IDF v5.2.3

```bash
mkdir -p ~/esp
cd ~/esp
git clone -b v5.2.3 --recursive https://github.com/espressif/esp-idf.git

cd esp-idf
./install.sh esp32s3

# (Recommended) Create an environment load alias (write into ~/.bashrc or ~/.zshrc)
alias get_idf='. $HOME/esp/esp-idf/export.sh'
```

#### Paso 2: Instalar ESP-ADF v2.7

```bash
cd ~/esp
git clone -b v2.7 --recursive https://github.com/espressif/esp-adf.git

export ADF_PATH=~/esp/esp-adf
echo 'export ADF_PATH=~/esp/esp-adf' >> ~/.bashrc  # or ~/.zshrc
```

#### Paso 3: Aplicar parches IDF (requerido por ESP-ADF)

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

### Configurar Pines de Placa ESP-ADF (Crítico)

Este proyecto usa la placa ESP-ADF Korvo-2-V3 como base, pero debes reemplazar su mapeo de pines con la configuración XVF3800.

**Método A (Recomendado): sobrescribir board_pins_config.c directamente**

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
Porque el control del codec (AIC3104) y la captura/reproducción I2S dependen del mapeo correcto de pines I2C/I2S. Si los pines están mal, verás problemas como **timeout I2C / no puede detectar 0x18 / sin sonido**, etc.
:::


### Configuración de Parámetros del Proyecto

Edita `main/app_config.h` y configura lo siguiente:

#### 1) WiFi

```c
#define WIFI_SSID                "Your_WiFi_SSID"
#define WIFI_PASSWORD            "Your_WiFi_Password"
```

#### 2) Información de cuenta Agora

```c
#define AGORA_APP_ID             "your_agora_app_id"
#define AGORA_API_KEY            "your_agora_api_key"
#define AGORA_API_SECRET         "your_agora_api_secret"
```

#### 3) Canal RTC y UID

```c
#define CONVO_CHANNEL_NAME       "your_unique_channel"
#define CONVO_RTC_TOKEN          ""  // Optional: tokens recommended in production
#define CONVO_AGENT_RTC_UID      1001
#define CONVO_REMOTE_RTC_UID     1000
```

#### 4) Configuración LLM (ejemplos: OpenAI / Azure OpenAI)

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

#### 5) Configuración TTS (ejemplo: Azure TTS)

```c
#define TTS_VENDOR               "azure"
#define TTS_API_KEY              "your-azure-speech-key"
#define TTS_REGION               "tts-region"
#define TTS_VOICE_NAME           "en-US-JennyNeural"
```

#### 6) Configuración ASR

```c
#define ASR_LANGUAGE             "en-US"
```


### Compilar y Flashear

#### Paso 1: Cargar entorno ESP-IDF

```bash
get_idf
# or
. $HOME/esp/esp-idf/export.sh
```

#### Paso 2: Entrar al directorio del proyecto y establecer el objetivo

```bash
cd /path/to/esp32-client-Respeaker-convo
idf.py set-target esp32s3
```

#### Paso 3: Compilar

```bash
idf.py build
```

#### Paso 4: Flashear y monitorear

```bash
# Linux
idf.py -p /dev/ttyUSB0 flash monitor

# macOS
idf.py -p /dev/cu.usbmodem* flash monitor

# Windows
idf.py -p COM3 flash monitor
```

:::tip Permisos de puerto serie en Linux
Si ves "permission denied", ejecuta:
```bash
sudo usermod -aG dialout $USER
# Then log out and log back in
```
:::



## Verificación y Pruebas

### Lista de Verificación del Log de Inicio

En un inicio exitoso, el log serie típicamente incluye:

- WiFi conectado e IP adquirida
- AIC3104 detectado (la dirección I2C es usualmente `0x18`)
- Pipeline de audio iniciado exitosamente
- Agora RTC unido exitosamente (o listo)

Ejemplo (solo para referencia):

```text
WiFi connected
got ip: 192.168.x.x
Found device at address 0x18
AIC3104 Codec initialized successfully
agora_rtc_join_channel success
```

### Iniciar una Conversación (Control por Botón)

1. Enciende y espera hasta que el dispositivo esté listo  
2. **Presiona el botón SET una vez**: iniciar/unirse a la conversación (el Agente se une al canal RTC)  
3. Habla al micrófono y espera a que el altavoz reproduzca la respuesta de la IA  
4. Presiona **SET** nuevamente (o presiona **MUTE**) para detener la conversación  


## FAQ

### P1: Timeout I2C / AIC3104 (0x18) no encontrado

**Posibles causas:**
- El `board_pins_config.c` de ESP-ADF no fue reemplazado como se describe en esta guía
- Mapeo de pines I2C incorrecto (debería ser SDA=GPIO5, SCL=GPIO6)
- Problema de conexión de hardware (XIAO y XVF3800 no están conectados correctamente)

**Verificaciones sugeridas:**
- Repite el paso "Configurar Pines de Placa ESP-ADF", luego ejecuta `idf.py fullclean` y recompila
- Verifica si el log de inicio puede detectar `0x18`

### P2: La grabación/enlace ascendente funciona, pero no hay salida del altavoz

**Causas comunes:**
- La dirección I2S DIN/DOUT está mal configurada (DIN=GPIO43, DOUT=GPIO44)
- Altavoz no conectado al jack de 3.5mm o el volumen está muy bajo
- AEC/pipeline de audio no se inició correctamente

### P3: Errores de compilación o dependencias faltantes

**Sugerencias:**
- Confirma que las versiones ESP-IDF / ESP-ADF coincidan con esta guía
- Re-inicializa submódulos (si el proyecto usa submódulos):
  ```bash
  git submodule update --init --recursive
  ```
- Haz una limpieza completa:
  ```bash
  idf.py fullclean
  ```



## Referencias

- Consola Agora (App ID / API Key)
- Documentación Agora RTC y documentación IoT SDK
- Documentación ESP-IDF v5.2.3
- Documentación ESP-ADF v2.7
- Introducción reSpeaker XVF3800 y guía de actualización de firmware
- [Clientes de IA Conversacional ESP32](https://github.com/AgoraIO-Conversational-AI/esp32-client/tree/main)


## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindar diferentes tipos de soporte para asegurar que tu experiencia sea lo más fluida posible. Ofrecemos múltiples canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
