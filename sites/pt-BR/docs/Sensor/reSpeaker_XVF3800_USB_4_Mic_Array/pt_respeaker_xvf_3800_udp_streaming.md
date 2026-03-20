---
description: O ReSpeaker XVF3800 USB 4-Mic Array é uma matriz de microfones circular profissional com AEC, formação de feixe, supressão de ruído e captura de voz em 360°. Emparelhado com o XIAO ESP32S3, ele possibilita controle de voz avançado para dispositivos inteligentes, robótica e aplicações de IoT. Descubra a integração perfeita e a flexibilidade de modo duplo.
title: reSpeaker XVF3800 USB Mic Array com XIAO ESP32S3 Streaming de Áudio via UDP
keywords:
  - reSpeaker
  - XIAO
  - ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.webp
slug: /respeaker_xvf3800_xiao_udp_audio_stream
last_update:
  date: 1/8/2025
  author: Kasun Thushara
createdAt: '2025-08-20'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/respeaker_xvf3800_xiao_udp_audio_stream/
---

## Visão Geral

Este projeto demonstra streaming de áudio em tempo real usando a matriz de microfones **ReSpeaker XVF3800** com uma placa **XIAO ESP32S3**. O áudio é capturado via I2S e transmitido por UDP para um servidor em execução em uma máquina local, onde pode ser armazenado e processado como um arquivo .wav.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Visão Geral da Funcionalidade

Este sketch executa as seguintes tarefas:

- Conecta-se à rede Wi-Fi especificada.
- Conecta-se a um servidor UDP (por exemplo, script Python em execução no PC host).
- Captura áudio em tempo real via I2S do ReSpeaker XVF3800 usando o XIAO ESP32S3.
- Transmite o áudio capturado como dados brutos.

## Código Arduino

Atualize estes campos antes de fazer o upload:

```cpp
// WiFi credentials
const char* ssid     = "Your-SSID";
const char* password = "WIFI-PASSWORD";
// UDP target
const char* udpAddress = "192.168.X.X";  // Change to PC/server IP
const int udpPort      = 12345;            // Port to send audio

```

### Código Completo (Faz streaming de ~5 segundos de áudio)

```cpp
#include "WiFi.h"
#include "WiFiUdp.h"
#include "AudioTools.h"

// WiFi credentials
const char* ssid = "Your-SSID";
const char* password = "WIFI-PASSWORD";

// UDP target
const char* udpAddress = "192.168.x.x";
const int udpPort = 12345;

WiFiUDP udp;

// Audio: 16kHz, stereo, 32-bit
AudioInfo info(16000, 2, 32);
I2SStream i2s_in;
I2SConfig i2s_config;

// Buffer for reading audio
#define BUFFER_SIZE 1024
uint8_t buffer[BUFFER_SIZE];

// 5 seconds of audio = 16000 Hz × 2 channels × 4 bytes = 128,000 bytes/sec
// 5 seconds = 640,000 bytes
#define TOTAL_BYTES 640000

void connectWiFi() {
  Serial.printf("Connecting to WiFi: %s\n", ssid);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
  }
  Serial.println("\nConnected!");
  Serial.printf("IP Address: %s\n", WiFi.localIP().toString().c_str());
}

void setupI2SInput() {
  i2s_config = i2s_in.defaultConfig(RX_MODE);
  i2s_config.copyFrom(info);

  // XVF3800 pins
  i2s_config.pin_bck = 8;
  i2s_config.pin_ws = 7;
  i2s_config.pin_data = 44;
  i2s_config.pin_data_rx = 43;
  i2s_config.is_master = true;

  i2s_in.begin(i2s_config);
  Serial.println("I2S input started.");
}

void setup() {
  Serial.begin(115200);
  while(!Serial);

  AudioLogger::instance().begin(Serial, AudioLogger::Info);

  connectWiFi();
  setupI2SInput();

  // Wait a bit for I2S to stabilize
  delay(500);

  Serial.printf("Sending 5 seconds of audio via UDP to %s:%d\n", udpAddress, udpPort);

  size_t total_sent = 0;
  size_t bytes_read = 0;

  // Send audio in chunks
  while (total_sent < TOTAL_BYTES) {
    // Read audio data
    bytes_read = i2s_in.readBytes(buffer, BUFFER_SIZE);

    if (bytes_read > 0) {
      // Send via UDP
      udp.beginPacket(udpAddress, udpPort);
      udp.write(buffer, bytes_read);
      udp.endPacket();

      total_sent += bytes_read;

      // Progress indicator
      if (total_sent % 64000 == 0) {
        Serial.printf("Sent %d bytes (%.1f seconds)\n", total_sent, total_sent / 128000.0);
      }
    } else {
      Serial.println("Warning: No data read from I2S");
      delay(10);
    }
  }

  Serial.printf("Finished! Sent %d bytes total\n", total_sent);
}

void loop() {
  // Nothing - runs once
}
```

Use o Serial Monitor (115200 baud) para confirmar o status da conexão e do streaming.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/udp.png" alt="pir" width={600} height="auto" /></p>

## Script Python (Para Receber e Salvar o Áudio)

```python
import socket
import wave
import time

# UDP settings
udp_ip = "0.0.0.0"
udp_port = 12345

# Audio settings (must match ESP32)
SAMPLE_RATE = 16000
CHANNELS = 2
SAMPLE_WIDTH = 4  # 32-bit = 4 bytes

# Expected data size (5 seconds)
EXPECTED_BYTES = 640000

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
sock.bind((udp_ip, udp_port))
sock.settimeout(2.0)  # 2 second timeout

print(f"Listening for audio on {udp_ip}:{udp_port}...")

audio_data = bytearray()
last_packet_time = time.time()

try:
    while True:
        try:
            data, addr = sock.recvfrom(4096)
            if data:
                audio_data.extend(data)
                last_packet_time = time.time()

                # Progress
                if len(audio_data) % 64000 < 4096:
                    print(f"Received {len(audio_data)} bytes ({len(audio_data) / 128000:.1f} seconds)")

        except socket.timeout:
            # No data for 2 seconds - assume transmission complete
            if len(audio_data) > 0:
                print("Timeout - assuming transmission complete")
                break
            else:
                print("Waiting for data...")
                continue

except KeyboardInterrupt:
    print("\nStopped by user")

# Save as WAV file
if len(audio_data) > 0:
    print(f"\nTotal received: {len(audio_data)} bytes")
    print("Saving to output.wav...")

    with wave.open("output.wav", "wb") as wav_file:
        wav_file.setnchannels(CHANNELS)
        wav_file.setsampwidth(SAMPLE_WIDTH)
        wav_file.setframerate(SAMPLE_RATE)
        wav_file.writeframes(bytes(audio_data))

    print("Done! Audio saved to output.wav")
else:
    print("No data received!")

sock.close()

```

## Ouvindo o Áudio

Depois que o arquivo for salvo (output.wav), basta abri-lo usando qualquer reprodutor de áudio, como:

- VLC
- Windows Media Player
- Audacity (para inspeção)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
