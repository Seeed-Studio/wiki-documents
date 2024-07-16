---
description: MQTT Audio Streaming
title: MQTT Audio Streaming
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /respeaker_steams_mqtt
last_update:
  date: 7/1/2024
  author: Jessie
---

This project demonstrates how to use the reSpeaker Lite board, which includes an integrated XIAO ESP32S3 microcontroller, to generate and send audio data to an MQTT broker.

### Library Required


* [ArduinoMqttClient](https://www.arduino.cc/reference/en/libraries/arduinomqttclient/)


### Functionality

The sketch performs the following tasks:

* Connects to the specified WiFi network.
* Connects to the specified MQTT broker.
* Generates white noise audio using the WhiteNoiseGenerator class from the reSpeaker Lite library.
* Encodes the audio data as a WAV file using the WAVEncoder class from the reSpeaker Lite library.
* Sends the encoded audio data to the specified MQTT topic using the MqttClient class from the ArduinoMqttClient library.
* Maintains the MQTT connection by regularly calling the poll() function.

### Code

Modify the following lines in the sketch to match your WiFi and MQTT broker settings:

```cpp
const char* ssid = "SSID";    // your Wi-FI SSID (name)
const char* password = "PASSWORD";    // your Wi-Fi password (use for WPA, or use as key for WEP)
const char* broker = "test.mosquitto.org"; 
const char* topic = "audio.wav";
int port = 1883;
```


<details>

<summary>Code</summary>

```cpp
#include "WiFi.h"
#include "ArduinoMqttClient.h"
#include "AudioTools.h"

#define SIZE 1024
#define N 100

// Communication
const char* ssid = "SSID";    // your Wi-FI SSID (name)
const char* password = "PASSWORD";    // your Wi-Fi password (use for WPA, or use as key for WEP)
const char* broker = "test.mosquitto.org"; 
const char* topic = "audio.wav";
int port = 1883;
WiFiClient wifiClient;
MqttClient mqttClient(wifiClient);

// Audio
AudioInfo info(16000, 1, 32);
WhiteNoiseGenerator<int16_t> noise(32000);                        // subclass of SoundGenerator with max amplitude of 32000
GeneratedSoundStream<int16_t> in_stream(noise);                   // Stream generated from noise
EncodedAudioStream out_stream(&mqttClient, new WAVEncoder());     // encode as wav file
StreamCopy copier(out_stream, in_stream, SIZE);                   // copies sound to MQTT client

// Connect to Wifi
void connectWIFI() {
  // attempt to connect to WiFi network:
  Serial.print("Attempting to connect to WPA SSID: ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);

  Serial.print("Connecting to WiFi ..");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print('.');
    delay(1000);
  }

  Serial.println("You're connected to the network");
  Serial.println();  
}

// Connect to MQTT Server
void connectMQTT() {
  // You can provide a unique client ID, if not set the library uses Arduino-millis()
  // Each client must have a unique client ID
  mqttClient.setId("reSpeaker");

  // You can provide a username and password for authentication
  // mqttClient.setUsernamePassword("username", "password");

  Serial.print("Attempting to connect to the MQTT broker: ");
  Serial.println(broker);

  if (!mqttClient.connect(broker, port)) {
    Serial.print("MQTT connection failed! Error code = ");
    Serial.println(mqttClient.connectError());

    stop();
  }

  Serial.println("You're connected to the MQTT broker!");
  Serial.println();
}  

// Send audio to MQTT Server
void sendMQTT() {
    // make sure that we write wav header
    out_stream.begin(info);

    // send message, the Print interface can be used to set the message contents
    mqttClient.beginMessage(topic, SIZE * N, true);

    // copy audio data to mqtt: 100 * 1024 bytes
    copier.copyN(N);

    mqttClient.endMessage();
}


void setup() {
  // Initialize logger 
  Serial.begin(115200);
  AudioLogger::instance().begin(Serial, AudioLogger::Info);

  // connect
  connectWIFI();
  connectMQTT();

  // setup audio
  noise.begin(info);
  in_stream.begin(info);

  // send Audio
  sendMQTT();
}

void loop() {
  // call poll() regularly to allow the library to send MQTT keep alives which
  // avoids being disconnected by the broker
  mqttClient.poll();
  delay(10000);
}
```
</details>

Open the `Serial Monitor` to check the output and logs.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/mqtt-log.png" alt="pir" width={600} height="auto" /></p>


Then you can see the data on your MQTT server.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/mqtt-data.png" alt="pir" width={800} height="auto" /></p>



### Customization

You can customize the audio generation and encoding by modifying the following lines in the sketch:


```cpp
WhiteNoiseGenerator<int16_t> noise(32000);
GeneratedSoundStream<int16_t> in_stream(noise);
EncodedAudioStream out_stream(&mqttClient, new WAVEncoder());
```

* `WhiteNoiseGenerator` generates white noise audio with a specified maximum amplitude.
* `GeneratedSoundStream` creates an input stream from the generated audio.
* `EncodedAudioStream` encodes the audio data using the specified encoder (WAV in this case).

You can also adjust the size of the audio data being sent by modifying the SIZE and N constants:

```cpp
#define SIZE 1024
#define N 100
```

* `SIZE` represents the size of each audio data chunk.
* `N` represents the number of audio data chunks to send.
