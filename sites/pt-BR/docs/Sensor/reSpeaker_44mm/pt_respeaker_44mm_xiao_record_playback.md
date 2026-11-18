---
description: Grave 5 segundos de áudio estéreo a 48 kHz do reSpeaker XVF3800 44mm na PSRAM do XIAO ESP32-S3 Plus e, em seguida, reproduza-o pelo mesmo link I2S.
title: Gravação e Reprodução com reSpeaker XVF3800 44mm e XIAO ESP32-S3 Plus
keywords:
  - reSpeaker 44mm
  - XIAO ESP32-S3 Plus
  - reprodução de gravação I2S
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
url: https://wiki.seeedstudio.com/pt-br/respeaker_44mm_xiao_record_playback/
---
# Gravação e Reprodução com reSpeaker XVF3800 44mm e XIAO ESP32-S3 Plus

Este exemplo captura cinco segundos de áudio estéreo do XVF3800 via I2S para a PSRAM do XIAO e, em seguida, reproduz o mesmo buffer pelo caminho de transmissão I2S. É a maneira mais rápida de comprovar que o ciclo completo de áudio funciona sem um PC, e um bom ponto de partida para aplicações de gravação de voz.

{/* TODO: replace the href="#" value with the Seeed Studio product page URL once it is published. */}

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_pcb_xiao.png" alt="reSpeaker XVF3800 44mm with XIAO ESP32-S3 Plus" width={300} height="auto" />
</p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## Pré-requisitos

- O array deve estar executando o **firmware I2S**. Consulte [Update Firmware](https://wiki.seeedstudio.com/pt-br/respeaker_44mm_introduction/#atualizar-firmware).
- Arduino IDE com o pacote de placas ESP32 e a biblioteca **Arduino Audio Tools**. Consulte [Software Preparation](https://wiki.seeedstudio.com/pt-br/respeaker_44mm_xiao_getting_started/#preparação-de-software).
- Placa selecionada como **XIAO_ESP32S3_Plus**, o número da porta precisa ser selecionado.
- **PSRAM habilitada**: `Tools > PSRAM > OPI PSRAM`. O buffer de gravação não cabe na RAM interna.

:::note
Cinco segundos a 48 kHz, estéreo, 32 bits precisam de **1.920.000 bytes** (48.000 × 2 canais × 4 bytes × 5 s). Sem PSRAM o sketch para com `PSRAM allocation failed!`.
:::


O sketch executa o XIAO como **slave** I2S (`config.is_master = false`) porque o XVF3800 gera BCLK, LRCLK e MCLK.

## Como Funciona

1. Na inicialização, o sketch informa a PSRAM total e livre e, em seguida, aloca `RECORD_BYTES` (cinco segundos) com `heap_caps_malloc(..., MALLOC_CAP_SPIRAM)`.
2. **Gravação**: o I2S é reiniciado em `RX_MODE` e os bytes são puxados para o buffer em blocos de 8 KB até que o buffer esteja cheio ou que um tempo limite de leitura de um segundo seja atingido.
3. A contagem de bytes é ajustada para um número inteiro de quadros estéreo para que a reprodução permaneça alinhada.
4. **Reprodução**: o I2S é reiniciado em `TX_MODE` e o buffer é escrito em blocos de 8 KB, seguido de `flush()` e um pequeno atraso para que os últimos quadros escoem antes que o fluxo seja interrompido.
5. O loop se repete, gravando novamente após uma pausa de um segundo.

## Sketch Arduino

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

## Saída Esperada

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

Os totais de PSRAM dependem do módulo. O que importa é `Recording buffer required` ser menor que `PSRAM free`, uma captura completa de `1920000 / 1920000` e uma contagem de transmissão correspondente.

Conecte um alto-falante ou fones de ouvido ao array para ouvir a gravação durante a fase de reprodução.

## Solução de Problemas

### `PSRAM allocation failed!`

`Tools > PSRAM > OPI PSRAM` não está habilitado ou a placa selecionada não é `XIAO_ESP32S3_Plus`. Selecione novamente a placa, habilite a PSRAM e faça o upload novamente.


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
