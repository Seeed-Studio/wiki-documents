---
description: ReSpeaker XVF3800 USB 4-Mic Array 是一款专业的圆形麦克风阵列，具有 AEC、波束成形、噪声抑制和 360° 语音捕获功能。与 XIAO ESP32S3 配对，可为智能设备、机器人和物联网应用提供先进的语音控制。探索无缝集成和双模式灵活性。

title: reSpeaker XVF3800 USB 麦克风阵列与 XIAO ESP32S3 MQTT 音频流

keywords:
- reSpeaker
- XIAO
- ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.webp
slug: /cn/respeaker_xvf3800_xiao_mqtt_audio_stream
last_update:
  date: 7/29/2025
  author: Kasun Thushara
---

# reSpeaker XVF3800 USB 麦克风阵列与 XIAO ESP32S3 MQTT 音频流

## 概述

本项目演示了如何流式传输从嵌入 **XIAO ESP32S3** 开发板的 **ReSpeaker XVF3800** 麦克风阵列捕获的音频，并将其作为 .wav 文件传输到 **MQTT 代理**。音频通过 **I2S** 捕获，以 **WAV** 格式编码，并通过 MQTT 发布。


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="pir" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
</div>

## 库文件

[Arduino MQTT Client](https://docs.arduino.cc/libraries/arduinomqttclient/)

## 功能概述

此代码执行以下操作：
- 连接到指定的 **WiFi** 网络。
- 连接到 **MQTT 代理**（例如 test.mosquitto.org）。
- 使用 I2S 从 ReSpeaker XVF3800 与 XIAO ESP32S3 捕获实时音频
- 将音频编码为 **WAV 格式**。
- 将音频作为单个 MQTT 消息发布。
- 使用 poll() 保持 MQTT 连接活跃。

## Arduino 代码

上传前请更新这些字段：

```cpp
const char* ssid = "your-SSID";
const char* password = "your-WIFI-password";
const char* broker = "test.mosquitto.org";
const char* topic = "xvf3800/audio.wav";
int port = 1883;
```

### 完整代码（流式传输约3秒音频）

```cpp
#include "WiFi.h"                // 用于WiFi连接
#include "ArduinoMqttClient.h"   // 用于MQTT通信
#include "AudioTools.h"          // 用于处理I2S音频和WAV编码

// 定义要发送的音频数据量
#define MQTT_PACKET_SIZE 1024    // 每个MQTT数据包的大小（以字节为单位）
#define NUM_PACKETS 375          // 要发送的数据包数量（16kHz下约3秒音频）

// WiFi网络凭据
const char* ssid = "your-SSID";              // 替换为您的WiFi SSID
const char* password = "your-WIFI-password"; // 替换为您的WiFi密码

// MQTT代理配置
const char* broker = "test.mosquitto.org";   // 公共测试MQTT代理
const char* topic = "xvf3800/audio.wav";     // 发布音频的主题
int port = 1883;                             // 标准MQTT端口

// 创建MQTT和WiFi客户端
WiFiClient wifiClient;
MqttClient mqttClient(wifiClient);

// 配置音频：16kHz采样率，立体声（2通道），每样本32位
AudioInfo info(16000, 2, 32);
I2SStream i2s_in;           // I2S音频输入流
I2SConfig i2s_config;       // I2S硬件配置

// 以WAV格式编码音频并通过MQTT发送的流
EncodedAudioStream out_stream(&mqttClient, new WAVEncoder());
StreamCopy copier(out_stream, i2s_in, MQTT_PACKET_SIZE); // 处理将I2S数据复制到MQTT流中

// 连接到WiFi网络
void connectWiFi() {
  Serial.printf("连接到WiFi: %s\n", ssid);
  WiFi.begin(ssid, password);                // 开始WiFi连接
  while (WiFi.status() != WL_CONNECTED) {    // 等待直到连接成功
    Serial.print(".");
    delay(1000);
  }
  Serial.println("\n已连接到WiFi!");
}

// 连接到MQTT代理
void connectMQTT() {
  mqttClient.setId("xvf3800_stream");        // 设置MQTT客户端ID
  Serial.printf("连接到MQTT代理: %s\n", broker);

  if (!mqttClient.connect(broker, port)) {   // 尝试连接到MQTT
    Serial.print("MQTT连接失败! 错误代码: ");
    Serial.println(mqttClient.connectError());
    while (true); // 如果连接失败则停止在这里
  }

  Serial.println("已连接到MQTT代理!");
}

// 设置I2S音频输入配置
void setupI2SInput() {
  i2s_config = i2s_in.defaultConfig(RX_MODE);  // 设置RX模式用于音频输入
  i2s_config.copyFrom(info);                   // 将音频格式应用到配置

  // 为XVF3800分配正确的GPIO引脚
  i2s_config.pin_bck = 8;       // 位时钟
  i2s_config.pin_ws = 7;        // 字选择（LR时钟）
  i2s_config.pin_data = 44;     // RX模式下不使用，但库需要
  i2s_config.pin_data_rx = 43;  // 来自XVF3800的数据输入引脚
  i2s_config.is_master = true;  // XVF3800提供时钟，所以此板作为主设备

  i2s_in.begin(i2s_config);     // 使用给定配置初始化I2S输入
  Serial.println("I2S输入已启动。");
}

void setup() {
  Serial.begin(115200);         // 启动串口监视器
  AudioLogger::instance().begin(Serial, AudioLogger::Info); // 启用音频调试日志

  connectWiFi();                // 连接到WiFi
  connectMQTT();                // 连接到MQTT
  setupI2SInput();              // 配置并启动I2S音频输入

  out_stream.begin(info);       // 使用音频格式初始化WAV编码器

  // 开始新的MQTT消息并为完整音频流预留足够空间
  mqttClient.beginMessage(topic, MQTT_PACKET_SIZE * NUM_PACKETS, true);

  // 将音频从麦克风（I2S）复制到MQTT流中
  copier.copyN(NUM_PACKETS);   // 复制固定数量的数据包（3秒音频）

  mqttClient.endMessage();     // 完成MQTT消息并发送
  Serial.println("音频流已通过MQTT发送!");
}

void loop() {
  mqttClient.poll();           // 保持MQTT连接活跃（如果代理需要ping则很重要）
  delay(5000);                 // 可选延迟，在重复录制时有用
}

```

使用串口监视器（115200波特率）确认连接和流传输状态。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/mqtt_sm.PNG" alt="pir" width={700} height="auto" /></p>

## Python脚本（接收并保存音频）

```python
import paho.mqtt.client as mqtt

broker = "test.mosquitto.org"
port = 1883
topic = "xvf3800/audio.wav"
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

## 播放音频

文件保存完成后（output.wav），只需使用任何音频播放器打开即可，例如：

- VLC
- Windows Media Player
- Audacity（用于检查）

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
