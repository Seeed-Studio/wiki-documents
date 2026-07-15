---
description: reSpeaker Flex is a powerful modular voice system featuring XMOS XVF3800, with interchangeable circular and linear 4-mic arrays for precise 360° or directional audio capture—perfect for robotics and smart devices.
title: MQTT Streaming reSpeaker Flex with Xiao ESP32S3
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
url: https://wiki.seeedstudio.com/respeaker_flex_xiao_mqtt_stream/
---



## Overview

This project demonstrates how to stream  audio captured from the **reSpeaker Flex** microphone array embedded a **XIAO ESP32S3** board and transmit it to an **MQTT broker** as a .wav file. The audio is captured via **I2S**, encoded in **WAV** format, and published over MQTT.


<table align="center">
  <tr>
    <th>reSpeaker Flex XVF3800 Linear with XIAO ESP32S3 </th>
    <th>reSpeaker Flex XVF3800 Circular with XIAO ESP32S3</th>
    
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Linear-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4withXIAOESP32S3.jpg" style={{width:500, height:'auto'}}/></div></td>

  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Linear-4-with-XIAO-ESP32S3-p-6736.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Circular-4-with-XIAO-ESP32S3-p-6739.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
    </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>

    </div></td>
  </tr>
</table>


## Libraries

[Arduino MQTT Client](https://docs.arduino.cc/libraries/arduinomqttclient/)

## Functionality Overview

This sketch does the following:
- Connects to a specified **WiFi** network.
- Connects to an **MQTT broker** (e.g., test.mosquitto.org).
- Captures real-time audio using I2S from reSpeaker Flex XVF3800 with XIAO ESP32S3
- Encodes the audio into **WAV format**.
- Publishes the audio as a single MQTT message.
- Uses poll() to keep the MQTT connection alive.

## Arduino Code

Update these fields before uploading:

```cpp
const char* ssid = "your-SSID";
const char* password = "your-WIFI-password";
const char* broker = "test.mosquitto.org";
const char* topic = "flex/audio.wav";
int port = 1883;
```

### Full Code (Streams ~3 seconds of audio)

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
Use Serial Monitor (115200 baud) to confirm connection and streaming status.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mqtt_sm.PNG" alt="pir" width={700} height="auto" /></p>

## Python Script (To Receive and Save the Audio)

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


