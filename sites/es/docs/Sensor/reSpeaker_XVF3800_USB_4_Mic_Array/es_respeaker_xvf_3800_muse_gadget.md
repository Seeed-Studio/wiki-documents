---
description: "Crea un Muse Gadget en el reSpeaker XVF3800 + XIAO ESP32-S3: flashea el firmware XMOS I2S, compila con ESP-IDF, empareja por BLE y transmite notas de voz a tu VM de Muse."
title: Muse Gadget en reSpeaker XVF3800
keywords:
  - reSpeaker
  - XIAO ESP32-S3
  - Muse
  - Asistente de voz
  - BLE
  - ESP-IDF
  - TTS
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.webp
slug: /respeaker_xvf3800_muse_gadget
last_update:
  date: 11/09/2026
  author: Kasun Thushara
createdAt: '2026-11-09'
updatedAt: '2026-11-09'
url: https://wiki.seeedstudio.com/es/respeaker_xvf3800_muse_gadget/
---

## Introducción

<div class="video-container">
  <iframe width="800" height="400"
          src="https://www.youtube.com/embed/WEcYu1k428E"
          title="Muse Gadget on reSpeaker XVF3800"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
  </iframe>
</div>

Este proyecto convierte la matriz de 4 micrófonos **reSpeaker XVF3800** y un **XIAO ESP32-S3** en un **Muse Gadget**. El gadget se empareja con la app Muse del teléfono por BLE, se une a tu red Wi‑Fi y mantiene una sesión Noise cifrada con tu VM de Muse en la nube.

- **Mantener pulsado** el botón: grabar una nota de voz. Muse la transcribe y responde; la respuesta se muestra en la app y se reproduce por el altavoz mediante TTS.
- **Tocar** (menos de 1 s): iniciar una llamada de voz en vivo (si `MUSE_REALTIME_VOICE` está activado).
- **Tocar** de nuevo: colgar.

A grandes rasgos, la ruta de datos se ve así:

```text
XIAO ESP32-S3 ──BLE──> Muse app (pairing)
      │
      └──Wi-Fi──> encrypted Noise session ──> Muse VM
                        │
                        ├── /link-control : device.health, voice.configure, …
                        └── /chat/stream  : voice note → transcript → reply
```

El XIAO es el **maestro I2S**; el XVF3800 ejecuta el firmware **I2S esclavo 16 kHz** y controla su anillo de 12 LED y el amplificador.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="reSpeaker XVF3800 with XIAO ESP32-S3" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>



## Qué necesitas

- [ ] **Token del SDK** de Muse (`mgst_…`)
- [ ] Clave opcional de **AssemblyAI** para respuestas habladas
- [ ] **App Muse** en el teléfono, modo Desarrollador activado
- [ ] **ESP-IDF v6.0.3** instalado
- [ ] XVF3800 con el firmware **I2S esclavo 16 kHz**
- [ ] Altavoz JST **5 W** (o auriculares de 3,5 mm)
- [ ] Credenciales de Wi‑Fi de 2,4 GHz
- [ ] Cable USB‑C de **datos**

## Cuentas y claves de API

| Clave / credencial | ¿Requerida? | Dónde obtenerla | Dónde va |
|---|---|---|---|
| **Token del SDK de Muse** (`mgst_…`, 48 caracteres) | **Sí** | [gadgets.muse.ai](https://gadgets.muse.ai/settings/sdk-tokens) | `CONFIG_GADGET_SDK_TOKEN` en el `sdkconfig` de compilación |
| **Clave de AssemblyAI** (32 caracteres) | Opcional — respuestas habladas | [assemblyai.com](https://www.assemblyai.com/dashboard) | `CONFIG_MUSE_TTS_API_KEY` en el `sdkconfig` de compilación |
| **Clave de Groq** (`gsk_…`) | TTS alternativo | [console.groq.com](https://console.groq.com/keys) | Igual, con la URL/modelo de Groq |
| **SSID y contraseña de Wi‑Fi** | Sí | Tu red/hotspot de 2,4 GHz | App Muse durante el emparejamiento |




### Ajustes del proveedor de TTS

El proveedor predeterminado es AssemblyAI:

```ini
CONFIG_MUSE_TTS_ENABLE=y
CONFIG_MUSE_TTS_URL="https://tts.us.assemblyai.com/v1/openai/audio/speech"
CONFIG_MUSE_TTS_MODEL="assemblyai-tts-en"
CONFIG_MUSE_TTS_VOICE="alloy"
CONFIG_MUSE_TTS_RESPONSE_FORMAT="mp3"
CONFIG_MUSE_TTS_MAX_CHARS=800
CONFIG_MUSE_TTS_TIMEOUT_MS=15000
CONFIG_MUSE_TTS_API_KEY="YOUR_ASSEMBLYAI_KEY"
```

Groq (Orpheus, límite de entrada de 200 caracteres) es una alternativa:

```ini
CONFIG_MUSE_TTS_URL="https://api.groq.com/openai/v1/audio/speech"
CONFIG_MUSE_TTS_MODEL="canopylabs/orpheus-v1-english"
CONFIG_MUSE_TTS_VOICE="hannah"
CONFIG_MUSE_TTS_RESPONSE_FORMAT="wav"
CONFIG_MUSE_TTS_MAX_CHARS=200
CONFIG_MUSE_TTS_API_KEY="gsk_..."
```

La app del teléfono **no tiene ajuste de proveedor de TTS**; el TTS es completamente del lado del firmware.

## Configuración de la app del teléfono

- Instala la app **Muse** (Meta) en Android o iOS.
- Inicia sesión con tu cuenta de Muse.
- Activa **Settings → Devices → Developer mode**.
- Muse se lanzó en **EE. UU. y Canadá**; la cuenta/app es necesaria para emparejar y para mostrar el texto de la respuesta.
- La app muestra las respuestas como **texto**; el gadget las pronuncia si el TTS está configurado.


### Botón externo opcional (Grove Button)

Puedes añadir un [Grove Button](https://www.seeedstudio.com/Grove-Button.html) para pulsar‑para‑hablar: **VCC → D3, SIG → D0, GND → GND**.

| Grove Button | XIAO | GPIO |
|---|---|---|
| GND | GND | — |
| VCC | **D3** | 4 (forzado a nivel alto) |
| SIG | **D0** | 1 (entrada, activo en alto) |
| NC | — | — |

Los ajustes de firmware ya están en el overlay:

```ini
CONFIG_HOMEHUB_BUTTON_GPIO=1
CONFIG_HOMEHUB_BUTTON_POWER_GPIO=4
CONFIG_HOMEHUB_BUTTON_ACTIVE_HIGH=y
CONFIG_HOMEHUB_BUTTON_LABEL="TALK"
```

El Grove Button es **activo en alto**; el firmware pone GPIO4 a nivel alto para alimentarlo y lee GPIO1 con una resistencia de pull‑down.

## Flashear el firmware XMOS I2S

El XIAO es el **maestro I2S**, por lo que el XVF3800 debe ejecutar el firmware **I2S esclavo 16 kHz**. El firmware USB **no** funciona con el XIAO.

Flashea la imagen `respeaker_xvf3800_i2s_slave_v1.0.9_16k.bin` siguiendo la guía oficial de actualización de firmware:

- [Actualización de firmware del reSpeaker XVF3800](https://wiki.seeedstudio.com/es/respeaker_xvf3800_introduction/#firmware-usb)

> Selecciona **`respeaker_xvf3800_i2s_slave_v1.0.9_16k.bin`** (I2S esclavo, 16 kHz), no el firmware USB predeterminado.

### Verificar

El firmware de Muse registra:

```text
link.xvf3800: XVF3800 firmware 1.0.9; 16 kHz I2S slave, ESP32 is master
```

O ejecuta:

```sh
xvf_host VERSION
```

## Clonar el proyecto

Clona el fork mantenido. Está basado en el SDK original y ya contiene el port a XVF3800 y la integración de TTS:

```sh
git clone https://github.com/KasunThushara/muse-gadget-sdk.git
cd muse-gadget-sdk
```

> El port `seeed-respeaker-xvf3800` **no está aguas arriba** en `facebookincubator/muse-gadget-sdk`. Si usas el repositorio original, debes aplicar tú mismo las adiciones siguientes.

Archivos añadidos por el fork:

```text
esp32/devices/sdkconfig.seeed-respeaker-xvf3800
esp32/main/voice_board_xvf3800.c
esp32/main/xvf3800.c
esp32/main/xvf3800.h
```

Archivos modificados por el fork:

```text
esp32/main/Kconfig.projbuild      (HOMEHUB_LED_BACKEND_XVF3800, button options)
esp32/main/CMakeLists.txt         (xvf3800.c, voice_board_xvf3800.c)
esp32/main/led_status.c           (XVF3800 ring over I2C)
esp32/main/button.c               (active-high button, optional power GPIO)
esp32/main/voice.c                (tap-vs-hold measurement)
esp32/tools/board.sh              (seeed-respeaker-xvf3800 case)
esp32/components/muse/Kconfig     (MUSE_TTS_*)
esp32/components/muse/muse_chat_session.cpp  (start_tts / WAV / MP3)
```

## Compilar el firmware

### Instalar ESP-IDF v6.0.3

`esp32/cmake/validate_config.cmake` requiere **ESP-IDF v6.0.3**:

```sh
git clone -b v6.0.3 --recursive https://github.com/espressif/esp-idf.git ~/esp/esp-idf-v6.0.3
~/esp/esp-idf-v6.0.3/install.sh esp32s3
. ~/esp/esp-idf-v6.0.3/export.sh
```

También necesitas **Git**, **Python 3** y un **cable de datos USB‑C**. En Windows, la consola del XIAO es USB nativo (`303a:1001`) y aparece como `COMx`. `tools/board.sh` es bash, así que ejecútalo en **Git Bash** o llama a `idf.py` directamente.

### Configurar las claves

```sh
cd esp32
idf.py -B build-seeed-respeaker-xvf3800 menuconfig
```

Configura en **ESP32 Device SDK**:

- **Muse Gadgets SDK token** → `mgst_…`
- Opciones de TTS (en el menú **Muse**) → proveedor, URL, modelo, voz, clave de API

O edita directamente `build-seeed-respeaker-xvf3800/sdkconfig`:

```ini
CONFIG_GADGET_SDK_TOKEN="mgst_…"
CONFIG_MUSE_TTS_ENABLE=y
CONFIG_MUSE_TTS_URL="https://tts.us.assemblyai.com/v1/openai/audio/speech"
CONFIG_MUSE_TTS_MODEL="assemblyai-tts-en"
CONFIG_MUSE_TTS_VOICE="alloy"
CONFIG_MUSE_TTS_RESPONSE_FORMAT="mp3"
CONFIG_MUSE_TTS_MAX_CHARS=800
CONFIG_MUSE_TTS_API_KEY="YOUR_ASSEMBLYAI_KEY"
```

> El `build-*/sdkconfig` generado sobrescribe el overlay. Después de cambiar `devices/sdkconfig.seeed-respeaker-xvf3800`, actualiza o borra el `sdkconfig` generado.

### Compilar

```sh
tools/board.sh seeed-respeaker-xvf3800 build
```

O directamente:

```sh
idf.py -B build-seeed-respeaker-xvf3800 \
  -DIDF_TARGET=esp32s3 \
  -DSDKCONFIG=build-seeed-respeaker-xvf3800/sdkconfig \
  -DSDKCONFIG_DEFAULTS="sdkconfig.defaults;devices/sdkconfig.seeed-respeaker-xvf3800" \
  build
```

La imagen queda en:

```text
esp32/build-seeed-respeaker-xvf3800/muse-gadget.bin
```

## Flashear el firmware

```sh
tools/board.sh seeed-respeaker-xvf3800 flash COM10
```

O directamente:

```sh
idf.py -B build-seeed-respeaker-xvf3800 \
  -DIDF_TARGET=esp32s3 \
  -DSDKCONFIG=build-seeed-respeaker-xvf3800/sdkconfig \
  -DSDKCONFIG_DEFAULTS="sdkconfig.defaults;devices/sdkconfig.seeed-respeaker-xvf3800" \
  -p COM10 flash
```

- Sustituye `COM10` por el puerto del XIAO (`ls /dev/cu.usbmodem*` en macOS, `/dev/ttyACM*` en Linux).
- Si el flasheo no puede conectar: mantén pulsado **BOOT**, toca **RESET**, suelta **BOOT** y vuelve a intentarlo.
- Cierra cualquier monitor serie que esté usando el puerto.
- Volver a flashear mantiene el emparejamiento/Wi‑Fi. `erase-flash` borra todo, incluido NVS y el emparejamiento.

## Emparejar y probar

1. App Muse → **Settings → Devices → Developer mode ON**.
2. **Add Device (+)** → `MuseGadget-respeaker-XXXXXX`.
3. **Pulsa** el botón (o el Grove Button) para confirmar.
4. Elige la Wi‑Fi de **2,4 GHz** e introduce la contraseña.
5. Espera al **anillo verde**.
6. **Mantén pulsado** el botón, habla y suelta:
   - `link.voice: recorded X.Xs`
   - `muse_chat_session: TTS: N chars`
   - `link.voice: reply: X.Xs of speech`
   - La respuesta se reproduce por el altavoz y se muestra en la app.
7. **Volumen:** pídeselo a Muse ("Set volume to 80") o usa `voice.configure`.
8. **Silenciar:** usa el botón Mute del XVF3800; cuando está silenciado, el botón mantiene su función de configuración.
9. **Restablecer configuración:** mantén pulsado el botón durante **5 segundos** para olvidar emparejamiento/Wi‑Fi.



Líneas de log útiles:

```text
link.xvf3800: AIC3104 outputs powered (DAC 0 dB, HP + line out)
link.xvf3800: XVF3800 firmware 1.0.9; 16 kHz I2S slave, ESP32 is master
link.xvf3800: reSpeaker XVF3800 audio ready
link.voice:   ready
link.ble:     advertising as MuseGadget-respeaker-XXXXXX
muse_chat_session: connected to VM …
muse_chat_session: TTS: N chars
muse_chat_session: reply audio: 16000 Hz, 1 ch, 64 kbps
link.xvf3800: amp on: X0D30=0 X0D31=0 X0D33=1
```

## Notas de seguridad

- El token del SDK se incluye en el firmware (o NVS). Trátalo como un identificador, no como una contraseña; revócalo/gíralo en `gadgets.muse.ai` si se filtra.
- La clave de TTS se encuentra en `esp32/build-*/sdkconfig`, que está en `.gitignore`. No la confirmes en el repositorio.
- El emparejamiento de la comunidad no tiene atestación del fabricante y no puede detener un MITM activo; configúralo en una red de confianza.
- Secure Boot y el cifrado de la flash permanecen **desactivados**; la app está firmada con la clave de desarrollo confirmada para que puedas volver a flashear libremente.
- Se recomienda el cifrado de NVS (`CONFIG_HOMEHUB_NVS_ENCRYPTION`) y se deriva automáticamente de una clave HMAC de eFuse; decide antes de almacenar credenciales.
- No habilites `CONFIG_HOMEHUB_PAIRING_EFUSE_AUTH` a menos que tengas Secure Boot.

## Recursos

- Este proyecto (fork con el port a XVF3800): [KasunThushara/muse-gadget-sdk](https://github.com/KasunThushara/muse-gadget-sdk)
- Muse Gadget SDK (upstream): [facebookincubator/muse-gadget-sdk](https://github.com/facebookincubator/muse-gadget-sdk)
- Seeed reSpeaker XVF3800 + XIAO: [Guía de inicio](https://wiki.seeedstudio.com/es/respeaker_xvf3800_xiao_getting_started/)
- Actualización de firmware XMOS: [Guía de actualización de firmware](https://wiki.seeedstudio.com/es/respeaker_xvf3800_introduction/#actualizar-firmware)
- Reproducción/grabación I2S: [Grabar y reproducir](https://wiki.seeedstudio.com/es/respeaker_xvf3800_xiao_record_playback/)
- Lista de comandos I2C: [Lista de comandos I2C](https://wiki.seeedstudio.com/es/respeaker_xvf_3800_i2c_list/)
- Control GPIO/GPI: [Control GPIO](https://wiki.seeedstudio.com/es/respeaker_xvf3800_xiao_gpio/)
- Repositorio de firmware del proveedor: [reSpeaker_XVF3800_USB_4MIC_ARRAY](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY)
- AssemblyAI TTS: [AssemblyAI TTS API](https://www.assemblyai.com/docs/tts/api-reference/http-api/create-speech-openai)
- Groq TTS: [Groq text-to-speech](https://console.groq.com/docs/text-to-speech)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
