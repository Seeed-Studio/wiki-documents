---
description: MQTT 音频流传输
title: MQTT 音频流传输
keywords:
- ESP32S3
- XIAO
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/respeaker_steams_mqtt
last_update:
  date: 7/1/2024
  author: Jessie
---

本项目演示如何使用 reSpeaker Lite 开发板（集成了 XIAO ESP32S3 微控制器）生成音频数据并发送到 MQTT 代理服务器。

### 所需库文件


* [ArduinoMqttClient](https://www.arduino.cc/reference/en/libraries/arduinomqttclient/)


### 功能

该程序执行以下任务：

* 连接到指定的 WiFi 网络。
* 连接到指定的 MQTT 代理服务器。
* 使用 reSpeaker Lite 库中的 WhiteNoiseGenerator 类生成白噪声音频。
* 使用 reSpeaker Lite 库中的 WAVEncoder 类将音频数据编码为 WAV 文件。
* 使用 ArduinoMqttClient 库中的 MqttClient 类将编码后的音频数据发送到指定的 MQTT 主题。
* 通过定期调用 poll() 函数维护 MQTT 连接。

### 代码

修改程序中的以下行以匹配您的 WiFi 和 MQTT 代理服务器设置：

```cpp
const char* ssid = "SSID";    // your Wi-FI SSID (name)
const char* password = "PASSWORD";    // your Wi-Fi password (use for WPA, or use as key for WEP)
const char* broker = "test.mosquitto.org"; 
const char* topic = "audio.wav";
int port = 1883;
```


<details>

<summary>代码</summary>

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

打开`串口监视器`查看输出和日志。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/mqtt-log.png" alt="pir" width={600} height="auto" /></p>


然后您可以在 MQTT 服务器上看到数据。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/mqtt-data.png" alt="pir" width={800} height="auto" /></p>


### 自定义

您可以通过修改程序中的以下行来自定义音频生成和编码：


```cpp
WhiteNoiseGenerator<int16_t> noise(32000);
GeneratedSoundStream<int16_t> in_stream(noise);
EncodedAudioStream out_stream(&mqttClient, new WAVEncoder());
```

* `WhiteNoiseGenerator` 生成具有指定最大振幅的白噪声音频。
* `GeneratedSoundStream` 从生成的音频创建输入流。
* `EncodedAudioStream` 使用指定的编码器（本例中为 WAV）对音频数据进行编码。

您还可以通过修改 SIZE 和 N 常量来调整发送的音频数据大小：

```cpp
#define SIZE 1024
#define N 100
```

* `SIZE` 表示每个音频数据块的大小。
* `N` 表示要发送的音频数据块数量。