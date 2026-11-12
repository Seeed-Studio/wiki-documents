---
description: Graba 5 segundos de audio estéreo a 48 kHz desde el reSpeaker XVF3800 44mm en la PSRAM del XIAO ESP32-S3 Plus y luego reprodúcelo a través del mismo enlace I2S.
title: Grabación y reproducción con reSpeaker XVF3800 44mm y XIAO ESP32-S3 Plus
keywords:
  - reSpeaker 44mm
  - XIAO ESP32-S3 Plus
  - I2S record playback
  - xvf3800
  - PSRAM
image: https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_board_overview.jpg
slug: /respeaker_44mm_xiao_record_playback
sku: 100066841,100065276
last_update:
  date: 11/04/2026
  author: Kasun Thushara
createdAt: '2026-11-04'
updatedAt: '2026-11-04'
url: https://wiki.seeedstudio.com/es/respeaker_44mm_xiao_record_playback/
---
# Grabación y reproducción con reSpeaker XVF3800 44mm y XIAO ESP32-S3 Plus

Este ejemplo captura cinco segundos de audio estéreo desde el XVF3800 por I2S hacia la PSRAM del XIAO y luego reproduce el mismo búfer a través de la ruta de transmisión I2S. Es la forma más rápida de demostrar que el recorrido completo del audio funciona sin un PC y un buen punto de partida para aplicaciones de grabación de voz.

{/* TODO: replace the href="#" value with the Seeed Studio product page URL once it is published. */}

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Requisitos previos

- La matriz debe estar ejecutando el **firmware I2S**. Consulta [Actualizar firmware](https://wiki.seeedstudio.com/es/respeaker_44mm_introduction/#actualizar-firmware).
- Arduino IDE con el paquete de placas ESP32 y la biblioteca **Arduino Audio Tools**. Consulta [Preparación de software](https://wiki.seeedstudio.com/es/respeaker_44mm_xiao_getting_started/#preparación-de-software).
- Placa seleccionada como **XIAO_ESP32S3_Plus**, es necesario seleccionar el número de puerto.
- **PSRAM habilitada**: `Tools > PSRAM > OPI PSRAM`. El búfer de grabación no cabe en la RAM interna.

:::note
Cinco segundos a 48 kHz, estéreo, 32 bits necesitan **1,920,000 bytes** (48,000 × 2 canales × 4 bytes × 5 s). Sin PSRAM el sketch se detiene con `PSRAM allocation failed!`.
:::


El sketch ejecuta el XIAO como **esclavo** I2S (`config.is_master = false`) porque el XVF3800 genera BCLK, LRCLK y MCLK.

## Cómo funciona

1. Al arrancar, el sketch informa de la PSRAM total y libre, luego reserva `RECORD_BYTES` (cinco segundos) con `heap_caps_malloc(..., MALLOC_CAP_SPIRAM)`.
2. **Grabación**: I2S se reinicia en `RX_MODE` y los bytes se leen en el búfer en bloques de 8 KB hasta que el búfer se llena o se dispara un tiempo de espera de lectura de un segundo.
3. El recuento de bytes se ajusta a un número entero de tramas estéreo para que la reproducción permanezca alineada.
4. **Reproducción**: I2S se reinicia en `TX_MODE` y el búfer se escribe en bloques de 8 KB, seguido de `flush()` y un breve retardo para que los últimos fotogramas se vacíen antes de detener el flujo.
5. El bucle se repite, grabando de nuevo después de una pausa de un segundo.

## Sketch de Arduino

```c
#include "AudioTools.h"
#include "esp_heap_caps.h"

// Audio configuration
constexpr uint32_t SAMPLE_RATE = 48000;
constexpr uint16_t CHANNELS = 2;
constexpr uint16_t BITS_PER_SAMPLE = 32;

// Recording configuration
constexpr uint32_t RECORD_SECONDS = 5;

constexpr size_t FRAME_BYTES =
    CHANNELS * (BITS_PER_SAMPLE / 8);

constexpr size_t BYTES_PER_SECOND =
    SAMPLE_RATE * FRAME_BYTES;

constexpr size_t RECORD_BYTES =
    BYTES_PER_SECOND * RECORD_SECONDS;

// Process audio in smaller blocks
constexpr size_t CHUNK_BYTES = 8192;

AudioInfo info(SAMPLE_RATE, CHANNELS, BITS_PER_SAMPLE);

I2SStream out;
I2SConfig config;

// PSRAM recording buffer
uint8_t *audioBuffer = nullptr;

size_t bytes_read = 0;
size_t bytes_write = 0;

// Start I2S
bool startI2S() {
    if (!out.begin(config)) {
        Serial.println("I2S initialization failed!");
        return false;
    }
    return true;
}

// Arduino Setup
void setup() {

    Serial.begin(115200);
    while (!Serial);

    AudioLogger::instance().begin(
        Serial,
        AudioLogger::Info
    );

    Serial.println("\nI2S Record / Playback Test");

    // Check PSRAM availability
    size_t psramTotal =
        heap_caps_get_total_size(MALLOC_CAP_SPIRAM);

    size_t psramFree =
        heap_caps_get_free_size(MALLOC_CAP_SPIRAM);

    Serial.printf(
        "PSRAM total: %lu bytes\n",
        (unsigned long)psramTotal
    );

    Serial.printf(
        "PSRAM free: %lu bytes\n",
        (unsigned long)psramFree
    );

    Serial.printf(
        "Recording buffer required: %lu bytes\n",
        (unsigned long)RECORD_BYTES
    );

    // Allocate audio buffer in PSRAM
    audioBuffer = (uint8_t *)heap_caps_malloc(
        RECORD_BYTES,
        MALLOC_CAP_SPIRAM | MALLOC_CAP_8BIT
    );

    if (audioBuffer == nullptr) {
        Serial.println("PSRAM allocation failed!");
        Serial.println(
            "Enable Tools -> PSRAM -> OPI PSRAM"
        );

        while (true) {
            delay(1000);
        }
    }

    Serial.println("PSRAM buffer allocated successfully");

    // Configure I2S
    config = out.defaultConfig(TX_MODE);
    config.copyFrom(info);

    // XIAO ESP32-S3 Plus pins
    config.pin_bck = 8;       // D9 - GPIO8
    config.pin_ws = 7;        // D8 - GPIO7
    config.pin_data = 44;     // D7 - GPIO44 - TX
    config.pin_data_rx = 43;  // D6 - GPIO43 - RX

    // XVF3800 is I2S master
    config.is_master = false;

    if (!startI2S()) {
        while (true) delay(1000);
    }

    Serial.println("I2S initialized successfully");
}

// Arduino Loop
void loop() {

    // =========================================
    // STEP 1: RECORD AUDIO
    // =========================================

    Serial.println("\n========== RECORDING ==========");

    out.end();

    config.rx_tx_mode = RX_MODE;

    if (!startI2S()) {
        delay(1000);
        return;
    }

    bytes_read = 0;

    uint32_t lastReadTime = millis();

    Serial.println("Recording started...");

    while (bytes_read < RECORD_BYTES) {

        size_t remaining = RECORD_BYTES - bytes_read;

        size_t request =
            (remaining > CHUNK_BYTES)
            ? CHUNK_BYTES
            : remaining;

        size_t received = out.readBytes(
            audioBuffer + bytes_read,
            request
        );

        if (received == 0) {

            if (millis() - lastReadTime > 1000) {
                Serial.println("RX timeout!");
                break;
            }

            delay(1);
            continue;
        }

        bytes_read += received;
        lastReadTime = millis();
    }

    // Stop receiving
    out.end();

    // Keep complete stereo frames only
    bytes_read -= bytes_read % FRAME_BYTES;

    Serial.println("Recording finished");

    Serial.printf(
        "Captured bytes: %lu / %lu\n",
        (unsigned long)bytes_read,
        (unsigned long)RECORD_BYTES
    );

    Serial.print("Recorded duration: ");
    Serial.print(
        (float)bytes_read / BYTES_PER_SECOND,
        2
    );
    Serial.println(" seconds");

    if (bytes_read == 0) {

        Serial.println("No audio captured!");
        delay(1000);
        return;
    }

    // =========================================
    // STEP 2: PLAYBACK AUDIO
    // =========================================

    Serial.println("\n========== PLAYBACK ==========");

    config.rx_tx_mode = TX_MODE;

    if (!startI2S()) {
        delay(1000);
        return;
    }

    bytes_write = 0;

    Serial.println("Playback started...");

    while (bytes_write < bytes_read) {

        size_t remaining = bytes_read - bytes_write;

        size_t request =
            (remaining > CHUNK_BYTES)
            ? CHUNK_BYTES
            : remaining;

        size_t written = out.write(
            audioBuffer + bytes_write,
            request
        );

        if (written == 0) {
            Serial.println("TX write failed!");
            break;
        }

        bytes_write += written;
    }

    // Allow queued audio to finish playing
    out.flush();
    delay(150);

    // Stop transmitting
    out.end();

    Serial.println("Playback finished");

    Serial.printf(
        "Transmitted bytes: %lu / %lu\n",
        (unsigned long)bytes_write,
        (unsigned long)bytes_read
    );

    Serial.println("\n========== TEST COMPLETE ==========");

    // Wait before next recording
    delay(1000);
}
```

## Salida esperada

```text
I2S Record / Playback Test
PSRAM total: 8388608 bytes
PSRAM free: 8386804 bytes
Recording buffer required: 1920000 bytes
PSRAM buffer allocated successfully
I2S initialized successfully

========== RECORDING ==========
Recording started...
Recording finished
Captured bytes: 1920000 / 1920000
Recorded duration: 5.00 seconds

========== PLAYBACK ==========
Playback started...
Playback finished
Transmitted bytes: 1920000 / 1920000

========== TEST COMPLETE ==========
```

Los totales de PSRAM dependen del módulo. Lo que importa es que `Recording buffer required` sea menor que `PSRAM free`, que haya una captura completa de `1920000 / 1920000` y un recuento de transmisión coincidente.

Conecta un altavoz o auriculares a la matriz para escuchar la grabación durante la fase de reproducción.

## Solución de problemas

### `PSRAM allocation failed!`

`Tools > PSRAM > OPI PSRAM` no está habilitado o la placa seleccionada no es `XIAO_ESP32S3_Plus`. Vuelve a seleccionar la placa, habilita la PSRAM y vuelve a cargar.


## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
