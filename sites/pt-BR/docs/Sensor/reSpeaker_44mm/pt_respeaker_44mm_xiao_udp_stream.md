---
description: Transmita áudio estéreo de 48 kHz do reSpeaker XVF3800 44mm via Wi‑Fi com o XIAO ESP32-S3 Plus e capture-o em um PC como um arquivo WAV usando um script receptor UDP com sequenciamento de pacotes e rastreamento de perdas.
title: Streaming UDP do reSpeaker XVF3800 44mm com XIAO ESP32-S3 Plus
keywords:
  - reSpeaker 44mm
  - XIAO ESP32-S3 Plus
  - streaming UDP
  - áudio WiFi
  - xvf3800
  - wav
image: https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_board_overview.jpg
slug: /respeaker_44mm_xiao_udp_streaming
sku: 100066841,100065276
last_update:
  date: 11/05/2026
  author: Kasun Thushara
createdAt: '2026-11-05'
updatedAt: '2026-11-05'
url: https://wiki.seeedstudio.com/pt-br/respeaker_44mm_xiao_udp_streaming/
---
# Streaming UDP do reSpeaker XVF3800 44mm com XIAO ESP32-S3 Plus

## Visão geral

Este projeto transmite áudio em tempo real do array reSpeaker XVF3800 44mm via Wi‑Fi. O XIAO ESP32-S3 Plus captura a saída estéreo processada via I2S, divide-a em pacotes UDP numerados e os envia para um receptor em Python no seu PC, que remonta o fluxo e o salva como um arquivo WAV.

{/* TODO: replace the href="#" value with the Seeed Studio product page URL once it is published. */}

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_pcb_xiao.png" alt="reSpeaker XVF3800 44mm with XIAO ESP32-S3 Plus" width={300} height="auto" />
</p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="#" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

## Visão geral da funcionalidade

- Conecta o XIAO a uma rede Wi‑Fi em modo estação.
- Captura áudio de 48 kHz, estéreo, 32 bits do XVF3800 via I2S.
- Envia cinco segundos de áudio para o PC como pacotes UDP, cada um com um cabeçalho de 8 bytes (magic `AUD0` + número de sequência).
- O receptor em Python remonta o fluxo, detecta pacotes ausentes ou duplicados, insere silêncio nas lacunas e grava `respeaker_recording.wav`.

:::note
Este exemplo espera o **firmware I2S** no XVF3800, a 48 kHz. Se a placa ainda estiver executando a imagem USB, ela não produzirá clocks I2S. Consulte [Atualizar firmware](https://wiki.seeedstudio.com/pt-br/respeaker_44mm_introduction/#atualizar-firmware).
:::

## Antes de começar

1. Coloque a placa na mesma rede que o seu PC.
2. Defina as credenciais do Wi‑Fi e o endereço IPv4 do seu PC no sketch.
3. Encontre o endereço do PC com `ipconfig` (Windows) ou `ip addr` (Linux/macOS).
4. Permita a porta UDP de entrada `12345` no firewall, caso contrário os pacotes serão descartados silenciosamente.

## Código Arduino

Atualize estes valores antes de fazer o upload:

```cpp
// WiFi credentials
const char* ssid     = "Your-SSID";
const char* password = "Your-PASSWORD";

// Your PC's IP address and the UDP port the Python script listens on
IPAddress pcIP(192, 168, 1, 100);
const uint16_t udpPort = 12345;
```

### Código completo (transmite 5 segundos de áudio)

```cpp
#include <WiFi.h>
#include <WiFiUdp.h>
#include "AudioTools.h"

// =====================================================
// WIFI CONFIGURATION
// =====================================================

const char* ssid = "Your-SSID";
const char* password = "Your-PASSWORD";

// Your Windows PC IP address
IPAddress pcIP(192, 168, 1, 100);

const uint16_t udpPort = 12345;

WiFiUDP udp;


// =====================================================
// I2S CONFIGURATION
// =====================================================

#define SAMPLE_RATE       48000
#define CHANNELS          2
#define BITS_PER_SAMPLE   32

#define I2S_BCK_PIN       8
#define I2S_WS_PIN        7
#define I2S_TX_PIN        44
#define I2S_RX_PIN        43

AudioInfo info(
    SAMPLE_RATE,
    CHANNELS,
    BITS_PER_SAMPLE
);

I2SStream i2s;
I2SConfig i2sConfig;


// =====================================================
// RECORDING CONFIGURATION
// =====================================================

#define RECORD_SECONDS   5

#define BUFFER_SIZE      1024

#define FRAME_BYTES      8

#define BYTES_PER_SECOND \
    (SAMPLE_RATE * CHANNELS * (BITS_PER_SAMPLE / 8))

#define TOTAL_BYTES \
    (BYTES_PER_SECOND * RECORD_SECONDS)


// =====================================================
// UDP PACKET CONFIGURATION
// =====================================================

// Header: 4-byte magic + 4-byte sequence
#define HEADER_SIZE 8

#define PACKET_MAGIC "AUD0"

uint8_t audioBuffer[BUFFER_SIZE];

uint8_t packetBuffer[HEADER_SIZE + BUFFER_SIZE];

uint32_t sequenceNumber = 0;


// =====================================================
// WIFI CONNECTION
// =====================================================

bool connectWiFi() {

    Serial.printf(
        "Connecting to WiFi: %s\n",
        ssid
    );

    WiFi.mode(WIFI_STA);

    WiFi.begin(ssid, password);

    unsigned long start = millis();

    while (WiFi.status() != WL_CONNECTED) {

        delay(500);
        Serial.print(".");

        if (millis() - start > 30000) {

            Serial.println("\nWiFi connection timeout!");

            return false;
        }
    }

    Serial.println("\nWiFi connected!");

    Serial.print("ESP32 IP: ");
    Serial.println(WiFi.localIP());

    Serial.print("PC destination: ");
    Serial.println(pcIP);

    Serial.print("UDP port: ");
    Serial.println(udpPort);

    return true;
}


// =====================================================
// I2S INITIALIZATION
// =====================================================

bool setupI2SInput() {

    Serial.println("\nInitializing I2S...");

    i2sConfig = i2s.defaultConfig(RX_MODE);

    i2sConfig.copyFrom(info);

    i2sConfig.pin_bck = I2S_BCK_PIN;
    i2sConfig.pin_ws = I2S_WS_PIN;

    i2sConfig.pin_data = I2S_TX_PIN;
    i2sConfig.pin_data_rx = I2S_RX_PIN;

    // XVF3800 supplies BCLK and LRCLK
    i2sConfig.is_master = false;

    if (!i2s.begin(i2sConfig)) {

        Serial.println("I2S initialization failed!");

        return false;
    }

    Serial.println("I2S initialized successfully");

    Serial.println("Sample rate: 48000 Hz");
    Serial.println("Channels: 2");
    Serial.println("Bit depth: 32-bit");

    return true;
}


// =====================================================
// SEND ONE UDP AUDIO PACKET
// =====================================================

bool sendAudioPacket(
    const uint8_t* data,
    size_t length
) {

    if (length == 0 || length > BUFFER_SIZE) {
        return false;
    }

    // Header magic
    memcpy(
        packetBuffer,
        PACKET_MAGIC,
        4
    );

    // Sequence number, little-endian
    memcpy(
        packetBuffer + 4,
        &sequenceNumber,
        4
    );

    // Audio payload
    memcpy(
        packetBuffer + HEADER_SIZE,
        data,
        length
    );

    if (!udp.beginPacket(pcIP, udpPort)) {
        return false;
    }

    size_t headerWritten = udp.write(
        packetBuffer,
        HEADER_SIZE
    );

    size_t audioWritten = udp.write(
        packetBuffer + HEADER_SIZE,
        length
    );

    int result = udp.endPacket();

    if (headerWritten != HEADER_SIZE ||
        audioWritten != length ||
        result != 1) {

        Serial.printf(
            "UDP send failed at packet %lu\n",
            (unsigned long)sequenceNumber
        );

        return false;
    }

    sequenceNumber++;

    return true;
}


// =====================================================
// RECORD AND TRANSMIT AUDIO
// =====================================================

void recordAndSendAudio() {

    Serial.println("\n================================");
    Serial.println("STARTING AUDIO TRANSMISSION");
    Serial.println("================================");

    Serial.printf(
        "Recording duration: %d seconds\n",
        RECORD_SECONDS
    );

    Serial.printf(
        "Expected audio: %lu bytes\n",
        (unsigned long)TOTAL_BYTES
    );

    size_t totalSent = 0;

    uint32_t successfulPackets = 0;
    uint32_t failedPackets = 0;

    unsigned long startTime = millis();

    while (totalSent < TOTAL_BYTES) {

        size_t remaining = TOTAL_BYTES - totalSent;

        size_t requestSize =
            (remaining > BUFFER_SIZE)
            ? BUFFER_SIZE
            : remaining;

        // Read I2S audio
        size_t bytesRead = i2s.readBytes(
            audioBuffer,
            requestSize
        );

        if (bytesRead == 0) {
            delay(1);
            continue;
        }

        // Preserve complete stereo frames
        bytesRead -= bytesRead % FRAME_BYTES;

        if (bytesRead == 0) {
            continue;
        }

        // Send via UDP
        if (sendAudioPacket(audioBuffer, bytesRead)) {

            totalSent += bytesRead;

            successfulPackets++;

        } else {

            failedPackets++;

            // Do not advance totalSent.
            // The same audio data will be retried.
        }

        static size_t lastProgress = 0;

        if (totalSent - lastProgress >= BYTES_PER_SECOND) {

            lastProgress = totalSent;

            Serial.printf(
                "Sent: %lu / %lu bytes (%.2f sec)\n",
                (unsigned long)totalSent,
                (unsigned long)TOTAL_BYTES,
                (float)totalSent / BYTES_PER_SECOND
            );
        }
    }

    unsigned long elapsed = millis() - startTime;

    Serial.println("\n================================");
    Serial.println("TRANSMISSION COMPLETE");
    Serial.println("================================");

    Serial.printf(
        "Total audio bytes: %lu\n",
        (unsigned long)totalSent
    );

    Serial.printf(
        "Successful packets: %lu\n",
        (unsigned long)successfulPackets
    );

    Serial.printf(
        "Failed packets: %lu\n",
        (unsigned long)failedPackets
    );

    Serial.printf(
        "Elapsed time: %.2f seconds\n",
        elapsed / 1000.0
    );

    Serial.printf(
        "Average data rate: %.2f KB/s\n",
        elapsed > 0
            ? (float)totalSent / elapsed
            : 0.0f
    );

    Serial.println("UDP transmission finished.");
}


// =====================================================
// SETUP
// =====================================================

void setup() {

    Serial.begin(115200);

    while (!Serial) {
        delay(10);
    }

    AudioLogger::instance().begin(
        Serial,
        AudioLogger::Info
    );

    Serial.println("\nReSpeaker 44mm UDP Audio Test");

    // 1. Connect WiFi
    if (!connectWiFi()) {
        while (true) delay(1000);
    }

    // 2. Initialize UDP
    if (!udp.begin(0)) {
        Serial.println("UDP initialization failed!");
        while (true) delay(1000);
    }

    Serial.println("UDP initialized");

    // 3. Initialize I2S
    if (!setupI2SInput()) {
        while (true) delay(1000);
    }

    delay(500);

    // 4. Record and transmit
    recordAndSendAudio();
}


// =====================================================
// LOOP
// =====================================================

void loop() {

    // One-time recording test
    delay(1000);
}
```

Abra o Monitor Serial em **115200 baud** para confirmar a conexão Wi‑Fi e o andamento da transmissão.

## Formato do pacote

| Bytes | Campo | Valor |
|-------|-------|-------|
| 0–3 | Magic | `AUD0` (ASCII) |
| 4–7 | Número de sequência | `uint32` little-endian, começando em 0 |
| 8–1031 | Payload de áudio | 1024 bytes de PCM estéreo bruto de 32 bits |

Com 48 kHz × 2 canais × 4 bytes, um segundo tem 384.000 bytes; cinco segundos têm 1.920.000 bytes, ou 1.875 pacotes de 1024 bytes.

## Script Python (receber e salvar o áudio)

Salve isto como `udp_receiver.py` e execute no PC **antes** de reiniciar a placa.

```python
import socket
import struct
import wave
import time

# ==========================================
# UDP CONFIGURATION
# ==========================================

UDP_IP = "0.0.0.0"
UDP_PORT = 12345

PC_IP = "192.168.1.100"

# ==========================================
# AUDIO CONFIGURATION
# ==========================================

SAMPLE_RATE = 48000
CHANNELS = 2
SAMPLE_WIDTH = 4

RECORD_SECONDS = 5

BYTES_PER_SECOND = (
    SAMPLE_RATE * CHANNELS * SAMPLE_WIDTH
)

EXPECTED_BYTES = BYTES_PER_SECOND * RECORD_SECONDS

# Arduino sends 1024-byte audio chunks
CHUNK_SIZE = 1024

EXPECTED_PACKETS = EXPECTED_BYTES // CHUNK_SIZE

# Packet header:
# 4 bytes magic + 4 bytes sequence number
HEADER_SIZE = 8

OUTPUT_FILE = "respeaker_recording.wav"

# ==========================================
# UDP SOCKET
# ==========================================

sock = socket.socket(
    socket.AF_INET,
    socket.SOCK_DGRAM
)

# Allow reuse of port
sock.setsockopt(
    socket.SOL_SOCKET,
    socket.SO_REUSEADDR,
    1
)

sock.bind((UDP_IP, UDP_PORT))

sock.settimeout(5.0)

print("======================================")
print("ReSpeaker 44mm UDP Audio Receiver")
print("======================================")

print(f"Listening on: {UDP_IP}:{UDP_PORT}")
print(f"PC IP: {PC_IP}")
print(f"Sample rate: {SAMPLE_RATE}")
print(f"Channels: {CHANNELS}")
print(f"Bit depth: {SAMPLE_WIDTH * 8}")
print(f"Expected duration: {RECORD_SECONDS} seconds")
print(f"Expected packets: {EXPECTED_PACKETS}")

print("\nWaiting for ESP32 audio transmission...")

# ==========================================
# AUDIO STORAGE
# ==========================================

audio_data = bytearray()

expected_sequence = 0

received_packets = 0
missing_packets = 0
duplicate_packets = 0
invalid_packets = 0

end_received = False

last_packet_time = time.time()

# ==========================================
# RECEIVE UDP PACKETS
# ==========================================

try:

    while True:

        try:

            data, addr = sock.recvfrom(2048)

            last_packet_time = time.time()

            # Check packet size
            if len(data) < HEADER_SIZE:
                invalid_packets += 1
                continue

            # Decode packet header
            magic, sequence = struct.unpack(
                "<4sI",
                data[:HEADER_SIZE]
            )

            # End-of-transmission marker
            if magic == b"END0":
                print("\nEnd-of-transmission received.")
                end_received = True
                break

            # Check packet identifier
            if magic != b"AUD0":
                invalid_packets += 1
                print("Invalid packet identifier")
                continue

            payload = data[HEADER_SIZE:]

            if len(payload) != CHUNK_SIZE:
                invalid_packets += 1
                print(
                    f"Unexpected payload size: {len(payload)}"
                )
                continue

            # Handle missing packets
            if sequence > expected_sequence:

                lost = sequence - expected_sequence

                missing_packets += lost

                print(
                    f"Missing {lost} packet(s) before "
                    f"sequence {sequence}"
                )

                # Insert silence for missing audio
                audio_data.extend(
                    bytes(lost * CHUNK_SIZE)
                )

            # Ignore duplicate or out-of-order packets
            elif sequence < expected_sequence:

                duplicate_packets += 1

                print(
                    f"Duplicate/late packet: {sequence}"
                )

                continue

            # Store audio payload
            audio_data.extend(payload)

            expected_sequence = sequence + 1

            received_packets += 1

            # Progress
            if received_packets % 375 == 0:

                duration = (
                    len(audio_data) / BYTES_PER_SECOND
                )

                print(
                    f"Received: {received_packets} packets | "
                    f"{duration:.2f} seconds"
                )

        except socket.timeout:

            if received_packets > 0:

                print("\nReceiver timeout.")

                break

            print("Still waiting for ESP32...")

except KeyboardInterrupt:

    print("\nRecording stopped by user.")

finally:

    sock.close()


# ==========================================
# SAVE WAV FILE
# ==========================================

print("\n======================================")
print("RECORDING STATISTICS")
print("======================================")

print(f"Received packets: {received_packets}")
print(f"Missing packets: {missing_packets}")
print(f"Duplicate packets: {duplicate_packets}")
print(f"Invalid packets: {invalid_packets}")
print(f"End marker received: {end_received}")

print(f"Total audio bytes: {len(audio_data)}")

print(
    f"Audio duration: "
    f"{len(audio_data) / BYTES_PER_SECOND:.2f} seconds"
)

if len(audio_data) > 0:

    # Ensure complete stereo frames
    audio_data = audio_data[
        :len(audio_data) - len(audio_data) % 8
    ]

    print(f"\nSaving WAV: {OUTPUT_FILE}")

    with wave.open(OUTPUT_FILE, "wb") as wav:

        wav.setnchannels(CHANNELS)
        wav.setsampwidth(SAMPLE_WIDTH)
        wav.setframerate(SAMPLE_RATE)

        wav.writeframes(audio_data)

    print("WAV saved successfully!")

else:

    print("No audio received!")

print("\nReceiver finished.")
```

O receptor termina após o tempo limite de 5 segundos do socket em vez de um marcador de fim, porque o sketch não envia o pacote opcional `END0`. Portanto, `End marker received: False` nas estatísticas é normal.

## Saída esperada

**Monitor Serial do Arduino:**

```text
ReSpeaker 44mm UDP Audio Test
Connecting to WiFi: Your-SSID
....
WiFi connected!
ESP32 IP: 192.168.1.42
PC destination: 192.168.1.100
UDP port: 12345
UDP initialized

Initializing I2S...
I2S initialized successfully
Sample rate: 48000 Hz
Channels: 2
Bit depth: 32-bit

================================
STARTING AUDIO TRANSMISSION
================================
Recording duration: 5 seconds
Expected audio: 1920000 bytes
Sent: 384000 / 1920000 bytes (1.00 sec)
Sent: 768000 / 1920000 bytes (2.00 sec)
Sent: 1152000 / 1920000 bytes (3.00 sec)
Sent: 1536000 / 1920000 bytes (4.00 sec)
Sent: 1920000 / 1920000 bytes (5.00 sec)

================================
TRANSMISSION COMPLETE
================================
Total audio bytes: 1920000
Successful packets: 1875
Failed packets: 0
Elapsed time: 5.02 seconds
Average data rate: 382.47 KB/s
UDP transmission finished.
```

**Receptor em Python:**

```text
======================================
ReSpeaker 44mm UDP Audio Receiver
======================================
Listening on: 0.0.0.0:12345
PC IP: 192.168.1.100
Sample rate: 48000
Channels: 2
Bit depth: 32
Expected duration: 5 seconds
Expected packets: 1875

Waiting for ESP32 audio transmission...
Received: 375 packets | 1.00 seconds
Received: 750 packets | 2.00 seconds
Received: 1125 packets | 3.00 seconds
Received: 1500 packets | 4.00 seconds
Received: 1875 packets | 5.00 seconds

Receiver timeout.

======================================
RECORDING STATISTICS
======================================
Received packets: 1875
Missing packets: 0
Duplicate packets: 0
Invalid packets: 0
End marker received: False
Total audio bytes: 1920000
Audio duration: 5.00 seconds

Saving WAV: respeaker_recording.wav
WAV saved successfully!

Receiver finished.
```

## Ouvindo o áudio

Abra `respeaker_recording.wav` em qualquer reprodutor de áudio — VLC, Windows Media Player ou Audacity para inspeção. É 48 kHz, estéreo, PCM de 32 bits.


## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
