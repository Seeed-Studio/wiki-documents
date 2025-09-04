---
description: El ReSpeaker XVF3800 USB 4-Mic Array es un arreglo de micrófonos circular profesional con AEC, formación de haces, supresión de ruido y captura de voz de 360°. Emparejado con el XIAO ESP32S3, permite control de voz avanzado para dispositivos inteligentes, robótica y aplicaciones IoT. Descubre la integración perfecta y flexibilidad de modo dual.

title: reSpeaker XVF3800 USB Mic Array con XIAO ESP32S3 Transmisión de Audio UDP 

keywords:
- reSpeaker
- XIAO
- ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.webp
slug: /es/respeaker_xvf3800_xiao_udp_audio_stream
last_update:
  date: 8/20/2025
  author: Kasun Thushara
---

## Descripción General

Este proyecto demuestra la transmisión de audio en tiempo real usando el arreglo de micrófonos **ReSpeaker XVF3800** con una placa **XIAO ESP32S3**. El audio se captura vía I2S y se transmite por UDP a un servidor ejecutándose en una máquina local, donde puede almacenarse y procesarse como un archivo .wav.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Descripción de la Funcionalidad

Este sketch realiza las siguientes tareas:

- Se conecta a la red Wi-Fi especificada.
- Se conecta a un servidor UDP (ej., script de Python ejecutándose en la PC host).
- Captura audio en tiempo real vía I2S desde el ReSpeaker XVF3800 usando el XIAO ESP32S3.
- Transmite el audio capturado como datos en bruto.

## Código Arduino

Actualiza estos campos antes de cargar:

```cpp
// WiFi credentials
const char* ssid     = "Your-SSID";
const char* password = "WIFI-PASSWORD";
// UDP target
const char* udpAddress = "192.168.X.X";  // Change to PC/server IP
const int udpPort      = 12345;            // Port to send audio

```

### Código Completo (Transmite ~5 segundos de audio)

```cpp
#include "WiFi.h"
#include "WiFiUdp.h"
#include "AudioTools.h"

// WiFi credentials
const char* ssid     = "Your-SSID";
const char* password = "WIFI-PASSWORD";

// UDP target
const char* udpAddress = "192.168.X.X";  // Change to PC/server IP
const int udpPort      = 12345;            // Port to send audio

WiFiUDP udp;

// Audio: 16kHz, stereo, 32-bit
AudioInfo info(16000, 2, 32);
I2SStream i2s_in;
I2SConfig i2s_config;

// 5 sec of audio = 128kB/s × 5 = 640 kB
#define PACKET_SIZE 1024
#define NUM_PACKETS 625  // 5 seconds worth

// Encoded WAV output to UDP
EncodedAudioStream out_stream(&udp, new WAVEncoder());
StreamCopy copier(out_stream, i2s_in, PACKET_SIZE);

void connectWiFi() {
  Serial.printf("Connecting to WiFi: %s\n", ssid);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.print(".");
  }
  Serial.println("\nConnected!");
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
  AudioLogger::instance().begin(Serial, AudioLogger::Info);

  connectWiFi();
  setupI2SInput();

  // Begin UDP
  udp.begin(WiFi.localIP(), udpPort);
  out_stream.begin(info);

  // Start UDP transmission
  Serial.printf("Sending 5 seconds of audio via UDP to %s:%d\n", udpAddress, udpPort);

  udp.beginPacket(udpAddress, udpPort);
  copier.copyN(NUM_PACKETS);   // Copy exactly 5 sec of audio
  udp.endPacket();

  Serial.println("Finished sending 5 seconds of audio!");
}

void loop() {
  // Nothing else, only runs once
}

```

Usa el Monitor Serie (115200 baudios) para confirmar el estado de conexión y transmisión.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/udp.png" alt="pir" width={600} height="auto" /></p>

## Script de Python (Para Recibir y Guardar el Audio)

```python
import socket

udp_ip = "0.0.0.0"
udp_port = 12345
sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
sock.bind((udp_ip, udp_port))

with open("output.wav", "wb") as f:
    print("Listening for audio...")
    while True:
        data, addr = sock.recvfrom(4096)
        f.write(data)

```

## Escuchando el Audio

Una vez que el archivo esté guardado (output.wav), simplemente ábrelo usando cualquier reproductor de audio como:

- VLC
- Windows Media Player
- Audacity (para inspección)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>