---
description: reSpeaker Flex es un potente sistema de voz modular con XMOS XVF3800, con arrays de 4 micrófonos circulares y lineales intercambiables para una captura de audio precisa de 360° o direccional, perfecto para robótica y dispositivos inteligentes.
title: Transmisión MQTT de reSpeaker Flex con Xiao ESP32S3
keywords:
  - reSpeaker flex
  - xvf3800
  - ESP32S3
image: https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Linear-4withXIAOESP32S3.jpg
slug: /respeaker_flex_xiao_mqtt_stream
sku: 100070894,100026178
last_update:
  date: 05/28/2026
  author: Kasun Thushara
createdAt: '2026-05-28'
updatedAt: '2026-05-28'
url: https://wiki.seeedstudio.com/es/respeaker_flex_xiao_mqtt_stream/
---



## Descripción general

Este proyecto demuestra cómo transmitir el audio capturado desde el array de micrófonos **reSpeaker Flex** con una placa **XIAO ESP32S3** integrada y enviarlo a un **broker MQTT** como un archivo .wav. El audio se captura mediante **I2S**, se codifica en formato **WAV** y se publica a través de MQTT.


<table align="center">
  <tr>
    <th>reSpeaker Flex XVF3800 Lineal con XIAO ESP32S3 </th>
    <th>reSpeaker Flex XVF3800 Circular con XIAO ESP32S3</th>

  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Linear-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>

  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Linear-4-with-XIAO-ESP32S3-p-6736.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Circular-4-with-XIAO-ESP32S3-p-6739.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
      </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>

    </div></td>
  </tr>
</table>


## Bibliotecas

[Arduino MQTT Client](https://docs.arduino.cc/libraries/arduinomqttclient/)

## Descripción de la funcionalidad

Este sketch hace lo siguiente:
- Se conecta a una red **WiFi** especificada.
- Se conecta a un **broker MQTT** (por ejemplo, test.mosquitto.org).
- Captura audio en tiempo real usando I2S desde reSpeaker Flex XVF3800 con XIAO ESP32S3
- Codifica el audio en **formato WAV**.
- Publica el audio como un único mensaje MQTT.
- Usa poll() para mantener viva la conexión MQTT.

## Código de Arduino

Actualiza estos campos antes de subir:

```cpp
const char* ssid = "your-SSID";
const char* password = "your-WIFI-password";
const char* broker = "test.mosquitto.org";
const char* topic = "flex/audio.wav";
int port = 1883;
```

### Código completo (transmite ~3 segundos de audio)

```cpp
#include "WiFi.h"                // For WiFi connectivity
#include "ArduinoMqttClient.h"   // For MQTT communication
#include "AudioTools.h"          // For handling I2S audio and WAV encoding

// Define how much audio data to send
#define MQTT_PACKET_SIZE 1024    // Size of each MQTT data packet (in bytes)
#define NUM_PACKETS 375          // Number of packets to send (~3 seconds of audio at 16kHz)

// WiFi network credentials
const char* ssid = "your-SSID";              // Replace with your WiFi SSID
const char* password = "your-WIFI-password"; // Replace with your WiFi password

// MQTT broker configuration
const char* broker = "test.mosquitto.org";   // Public test MQTT broker
const char* topic = "flex/audio.wav";     // Topic to publish audio to
int port = 1883;                             // Standard MQTT port

// Create MQTT and WiFi clients
WiFiClient wifiClient;
MqttClient mqttClient(wifiClient);

// Configure audio: 16kHz sample rate, stereo (2 channels), 32-bit per sample
AudioInfo info(16000, 2, 32);
I2SStream i2s_in;           // I2S audio input stream
I2SConfig i2s_config;       // I2S hardware configuration

// Stream that encodes audio in WAV format and sends it via MQTT
EncodedAudioStream out_stream(&mqttClient, new WAVEncoder());
StreamCopy copier(out_stream, i2s_in, MQTT_PACKET_SIZE); // Handles copying I2S data into the MQTT stream

// Connect to WiFi network
void connectWiFi() {
  Serial.printf("Connecting to WiFi: %s\n", ssid);
  WiFi.begin(ssid, password);                // Start WiFi connection
  while (WiFi.status() != WL_CONNECTED) {    // Wait until connected
    Serial.print(".");
    delay(1000);
  }
  Serial.println("\nConnected to WiFi!");
}

// Connect to MQTT broker
void connectMQTT() {
  mqttClient.setId("xvf3800_stream");        // Set MQTT client ID
  Serial.printf("Connecting to MQTT broker: %s\n", broker);

  if (!mqttClient.connect(broker, port)) {   // Try to connect to MQTT
    Serial.print("MQTT connection failed! Code: ");
    Serial.println(mqttClient.connectError());
    while (true); // Stop here if connection fails
  }

  Serial.println("Connected to MQTT broker!");
}

// Set up I2S audio input configuration
void setupI2SInput() {
  i2s_config = i2s_in.defaultConfig(RX_MODE);  // Set RX mode for audio input
  i2s_config.copyFrom(info);                   // Apply audio format to config

  // Assign correct GPIO pins for XVF3800
  i2s_config.pin_bck = 8;       // Bit clock
  i2s_config.pin_ws = 7;        // Word select (LR clock)
  i2s_config.pin_data = 44;     // Not used for RX, but required by lib
  i2s_config.pin_data_rx = 43;  // Data input pin from XVF3800
  i2s_config.is_master = false;  // XVF3800 provides clock, so this board acts as slave

  i2s_in.begin(i2s_config);     // Initialize I2S input with given config
  Serial.println("I2S input started.");
}

void setup() {
  Serial.begin(115200);         // Start serial monitor
  AudioLogger::instance().begin(Serial, AudioLogger::Info); // Enable audio debug logs

  connectWiFi();                // Connect to WiFi
  connectMQTT();                // Connect to MQTT
  setupI2SInput();              // Configure and start I2S audio input

  out_stream.begin(info);       // Initialize WAV encoder with audio format

  // Start a new MQTT message and reserve enough space for the full audio stream
  mqttClient.beginMessage(topic, MQTT_PACKET_SIZE * NUM_PACKETS, true);

  // Copy audio from microphone (I2S) into MQTT stream
  copier.copyN(NUM_PACKETS);   // Copies a fixed number of packets (3 seconds of audio)

  mqttClient.endMessage();     // Finalize the MQTT message and send it
  Serial.println("Audio stream sent via MQTT!");
}

void loop() {
  mqttClient.poll();           // Keep MQTT connection alive (important if broker expects pings)
  delay(5000);                 // Optional delay, useful if recording repeatedly
}

```
Usa el Monitor Serie (115200 baudios) para confirmar el estado de la conexión y de la transmisión.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mqtt_sm.PNG" alt="pir" width={700} height="auto" /></p>

## Script de Python (para recibir y guardar el audio)

```python
import paho.mqtt.client as mqtt

broker = "test.mosquitto.org"
port = 1883
topic = "flex/audio.wav"
output_file = "output.wav"
audio_data = bytearray()

def on_message(client, userdata, msg):
    global audio_data
    print("🔊 Received audio message")
    audio_data.extend(msg.payload)

    with open(output_file, "wb") as f:
        f.write(audio_data)
    print(f"✅ WAV file saved as: {output_file}")

client = mqtt.Client()
client.on_message = on_message

print(f"Connecting to MQTT broker {broker}...")
client.connect(broker, port, 60)

client.subscribe(topic)
print(f"📡 Subscribed to: {topic}")
client.loop_forever()

```
## Escuchar el audio

Una vez que el archivo se haya guardado (output.wav), simplemente ábrelo usando cualquier reproductor de audio como:

- VLC
- Windows Media Player
- Audacity (para inspección)

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


