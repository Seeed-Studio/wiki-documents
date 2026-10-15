---
description: Transmissão de Áudio via MQTT
title: Transmissão de Áudio via MQTT
keywords:
  - ESP32S3
  - XIAO
  - ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /respeaker_steams_mqtt
last_update:
  date: 7/1/2024
  author: Jessie
createdAt: '2024-07-03'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/respeaker_steams_mqtt/
---

Este projeto demonstra como usar a placa reSpeaker Lite, que inclui um microcontrolador XIAO ESP32S3 integrado, para gerar e enviar dados de áudio para um broker MQTT.

### Biblioteca Necessária


* [ArduinoMqttClient](https://www.arduino.cc/reference/en/libraries/arduinomqttclient/)


### Funcionalidade

O sketch executa as seguintes tarefas:

* Conecta à rede WiFi especificada.
* Conecta ao broker MQTT especificado.
* Gera áudio de ruído branco usando a classe WhiteNoiseGenerator da biblioteca reSpeaker Lite.
* Codifica os dados de áudio como um arquivo WAV usando a classe WAVEncoder da biblioteca reSpeaker Lite.
* Envia os dados de áudio codificados para o tópico MQTT especificado usando a classe MqttClient da biblioteca ArduinoMqttClient.
* Mantém a conexão MQTT chamando regularmente a função poll().

### Código

Modifique as seguintes linhas no sketch para corresponder às configurações da sua rede WiFi e do broker MQTT:

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

Abra o `Serial Monitor` para verificar a saída e os logs.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/mqtt-log.png" alt="pir" width={600} height="auto" /></p>


Em seguida, você poderá ver os dados no seu servidor MQTT.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/mqtt-data.png" alt="pir" width={800} height="auto" /></p>



### Personalização

Você pode personalizar a geração e a codificação de áudio modificando as seguintes linhas no sketch:


```cpp
WhiteNoiseGenerator<int16_t> noise(32000);
GeneratedSoundStream<int16_t> in_stream(noise);
EncodedAudioStream out_stream(&mqttClient, new WAVEncoder());
```

* `WhiteNoiseGenerator` gera áudio de ruído branco com uma amplitude máxima especificada.
* `GeneratedSoundStream` cria um fluxo de entrada a partir do áudio gerado.
* `EncodedAudioStream` codifica os dados de áudio usando o codificador especificado (WAV neste caso).

Você também pode ajustar o tamanho dos dados de áudio enviados modificando as constantes SIZE e N:

```cpp
#define SIZE 1024
#define N 100
```

* `SIZE` representa o tamanho de cada bloco de dados de áudio.
* `N` representa o número de blocos de dados de áudio a serem enviados.
