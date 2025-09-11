---
description: The ReSpeaker XVF3800 USB 4-Mic Array is a professional circular microphone array with AEC, beamforming, noise suppression, and 360° voice capture. Paired with the XIAO ESP32S3, it enables advanced voice control for smart devices, robotics, and IoT applications. Discover seamless integration and dual-mode flexibility.

title: reSpeaker XVF3800 USB Mic Array with XIAO ESP32S3 UDP Audio Streaming 

keywords:
- reSpeaker
- XIAO
- ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.webp
slug: /respeaker_xvf3800_xiao_udp_audio_stream
last_update:
  date: 8/20/2025
  author: Kasun Thushara
---

## Overview

This project demonstrates real-time audio streaming using the **ReSpeaker XVF3800** microphone array with a **XIAO ESP32S3** board. The audio is captured via I2S, and transmitted over UDP to a server running on a local machine, where it can be stored and processed as a .wav file.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Functionality Overview

This sketch performs the following tasks:

- Connects to the specified Wi-Fi network.
- Connects to a UDP server (e.g., Python script running on the host PC).
- Captures real-time audio via I2S from the ReSpeaker XVF3800 using the XIAO ESP32S3.
- Transmits the captured audio as raw data.

## Arduino Code

Update these fields before uploading:

```cpp
// WiFi credentials
const char* ssid     = "Your-SSID";
const char* password = "WIFI-PASSWORD";
// UDP target
const char* udpAddress = "192.168.X.X";  // Change to PC/server IP
const int udpPort      = 12345;            // Port to send audio

```

### Full Code (Streams ~5 seconds of audio)

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

Use Serial Monitor (115200 baud) to confirm connection and streaming status.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/udp.png" alt="pir" width={600} height="auto" /></p>

## Python Script (To Receive and Save the Audio)

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

## Listening to the Audio

Once the file is saved (output.wav), simply open it using any audio player such as:

- VLC
- Windows Media Player
- Audacity (for inspection)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
