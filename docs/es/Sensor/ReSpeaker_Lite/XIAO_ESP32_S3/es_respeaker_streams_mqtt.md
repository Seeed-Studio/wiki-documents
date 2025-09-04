---
description: Transmisión de Audio por MQTT
title: Transmisión de Audio por MQTT
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/respeaker_steams_mqtt
last_update:
  date: 7/1/2024
  author: Jessie
---

Este proyecto demuestra cómo usar la placa reSpeaker Lite, que incluye un microcontrolador XIAO ESP32S3 integrado, para generar y enviar datos de audio a un broker MQTT.

### Biblioteca Requerida


* [ArduinoMqttClient](https://www.arduino.cc/reference/en/libraries/arduinomqttclient/)


### Funcionalidad

El sketch realiza las siguientes tareas:

* Se conecta a la red WiFi especificada.
* Se conecta al broker MQTT especificado.
* Genera audio de ruido blanco usando la clase WhiteNoiseGenerator de la biblioteca reSpeaker Lite.
* Codifica los datos de audio como un archivo WAV usando la clase WAVEncoder de la biblioteca reSpeaker Lite.
* Envía los datos de audio codificados al tópico MQTT especificado usando la clase MqttClient de la biblioteca ArduinoMqttClient.
* Mantiene la conexión MQTT llamando regularmente a la función poll().

### Código

Modifica las siguientes líneas en el sketch para que coincidan con tu configuración de WiFi y broker MQTT:

```cpp
const char* ssid = "SSID";    // your Wi-FI SSID (name)
const char* password = "PASSWORD";    // your Wi-Fi password (use for WPA, or use as key for WEP)
const char* broker = "test.mosquitto.org"; 
const char* topic = "audio.wav";
int port = 1883;
```


<details>

<summary>Código</summary>

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

Abre el `Monitor Serie` para verificar la salida y los registros.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/mqtt-log.png" alt="pir" width={600} height="auto" /></p>


Luego puedes ver los datos en tu servidor MQTT.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/mqtt-data.png" alt="pir" width={800} height="auto" /></p>


### Personalización

Puedes personalizar la generación y codificación de audio modificando las siguientes líneas en el sketch:


```cpp
WhiteNoiseGenerator<int16_t> noise(32000);
GeneratedSoundStream<int16_t> in_stream(noise);
EncodedAudioStream out_stream(&mqttClient, new WAVEncoder());
```

* `WhiteNoiseGenerator` genera audio de ruido blanco con una amplitud máxima especificada.
* `GeneratedSoundStream` crea un flujo de entrada a partir del audio generado.
* `EncodedAudioStream` codifica los datos de audio usando el codificador especificado (WAV en este caso).

También puedes ajustar el tamaño de los datos de audio que se envían modificando las constantes SIZE y N:

```cpp
#define SIZE 1024
#define N 100
```

* `SIZE` representa el tamaño de cada fragmento de datos de audio.
* `N` representa el número de fragmentos de datos de audio a enviar.