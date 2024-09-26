---
description: ESP32S3 Sense接入语音识别+MiniMax模型+TTS模块语音播报。
title: ESP32S3 Sense接入语音识别+MiniMax模型+TTS模块语音播报
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/voice_recognition_minimax_tts_with_xiao_esp32s3
last_update:
  date: 09/19/2024
  author: Frank
---

# ESP32S3 Sense接入语音识别+MiniMax模型+TTS模块语音播报

## 前言

本教程将围绕如何实现精准的语音播报功能展开，我们用到了ESP32S3 Sense接入语音识别+MiniMax模型对话+SNR9816TTS模块。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-VoiceRecognition-MiniMax-TTS/1.png" style={{width:'auto', height:'auto'}}/></div>

这是教程中使用的ESP32S3官方硬件👍👍👍（小小的身材有大大的力量）只需要35元加摄像头麦克风79元。有需要可以购买xiao开发板💕💕💕，SeeedXIAO ESP32S3 Sense硬件购买地址：

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO ESP32S3</th>
			<th>Seeed Studio XIAO ESP32S3 Sense</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://item.taobao.com/item.htm?ali_trackid=2%3Amm_6255465658_3080750459_115671950478%3A1726797597594_190704888_0&bxsign=tbkJd0fuBCwQtcoi1haFnXe2Hnq8mRtuRH5qo3UnETC9ZPIeLn0CChiEgJZS-2HnvhZg6YpUbW9UknwmAenNZQwqz2NIBjS_OKQdZjsVLoEYNTKoRGFNv8AnxnldYShqG3t5szCrrWgDf1jBXSR6yPzaKXZim5C4rOdpLiojkkvCMunpGTd6CvUudcEvxij637n&id=607624979977&skuId=4970501928855&union_lens=lensId%3APUB%401712542228%40210878e1_0d99_18ebb78a1b9_c500%4001%40eyJmbG9vcklkIjo4NjcwNiiwiic3BtQiiI6Il9wb3J0YWxfdjJfcGFnZXNfcHJvbW9fc2hvcF9jYW1wYWlnbl9wYWdlX2RldGFpbF9pbmRleF9odG0iifQieie%3Brecoveryid%3A190704888_0%401726797597594">
				<strong><span><font color={'FFFFFF'} size={"4"}> 去购买 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://item.taobao.com/item.htm?ali_trackid=2%3Amm_6255465658_3080750459_115671950478%3A1726797597594_190704888_0&bxsign=tbkJd0fuBCwQtcoi1haFnXe2Hnq8mRtuRH5qo3UnETC9ZPIeLn0CChiEgJZS-2HnvhZg6YpUbW9UknwmAenNZQwqz2NIBjS_OKQdZjsVLoEYNTKoRGFNv8AnxnldYShqG3t5szCrrWgDf1jBXSR6yPzaKXZim5C4rOdpLiojkkvCMunpGTd6CvUudcEvxij637n&id=607624979977&skuId=4982681045963&union_lens=lensId%3APUB%401712542228%40210878e1_0d99_18ebb78a1b9_c500%4001%40eyJmbG9vcklkIjo4NjcwNiiwiic3BtQiiI6Il9wb3J0YWxfdjJfcGFnZXNfcHJvbW9fc2hvcF9jYW1wYWlnbl9wYWdlX2RldGFpbF9pbmRleF9odG0iifQieie%3Brecoveryid%3A190704888_0%401726797597594">
				<strong><span><font color={'FFFFFF'} size={"4"}> 去购买 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>


在后续的测试过程中，我们用到了一款比较实用的AI工具——海螺AI！（[有问题，找海螺AI](https://hailuoai.com/)）它是MiniMax旗下的一款自研AI平台，专注于解决实际问题，可以让工作更高效、更便捷！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-VoiceRecognition-MiniMax-TTS/2.png" style={{width:'auto', height:'auto'}}/></div>

本文本作为输入海螺AI，生成了以下文案，效果还是不错的👍👍👍

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-VoiceRecognition-MiniMax-TTS/3.png" style={{width:'auto', height:'auto'}}/></div>


## 功能模块概述

首先串口输入“1”字符，随后麦克风采集2s声音数据，对接百度在线语音识别，将返回文本结果丢入MiniMax模型，进而返回第二次结果文本，实现语言对话文本效果。经过以上两次调用后，载入TTS模块就可完整对话，实现精准的语音播报功能。

### 语音输入

百度在线语音接入教程：

[【ESP32S3 Sense接入百度在线语音识别】](https://wiki.seeedstudio.com/cn/voice_baidu_with_xiao_esp32s3/)


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-VoiceRecognition-MiniMax-TTS/4.png" style={{width:'auto', height:'auto'}}/></div>


使用Seeed XIAO ESP32S3 Sense开发板接入百度智能云实现在线语音识别。自带麦克风模块用做语音输入，通过串口发送字符“1”来控制数据的采集和上传。


### 大模型接入

国产大模型接入分享如下：

- [【ESP32接入国产大模型之MiniMax】](https://vor2345.blog.csdn.net/article/details/136768206)
- [【ESP32接入语言大模型之智谱清言】](https://vor2345.blog.csdn.net/article/details/135522961)
- [【ESP32接入国产大模型之文心一言】](https://vor2345.blog.csdn.net/article/details/135372118)
- [【ESP32接入语言大模型之通义千问】](https://blog.csdn.net/vor234/article/details/135395143)

本文使用的是MiniMax大模型

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-VoiceRecognition-MiniMax-TTS/5.png" style={{width:'auto', height:'auto'}}/></div>

|模型|响应时间|内容质量|免费token次数|
|::|::|::|::|
|[MiniMax](https://www.minimaxi.com/)|3s|8分|500万+2000亿token|
|[智谱清言](https://open.bigmodel.cn/)|7s|8分|300万|
|[文心一言](https://cloud.baidu.com/doc/WENXINWORKSHOP/s/Nlks5zkzu)|10s|9分|500万|
|[通义千问](https://tongyi.aliyun.com/qianwen/)|8s|8分|800万|

结合以上图表对比，MiniMax在回复文本的质量与速度方面都比较良好，而MiniMax是海螺的母公司，因此本文选择使用海螺AI！！！😘😘😘

STT语音接入+大模型Chat接入整合教程见：[【ESP32S3 Sense接入语音识别+MiniMax模型对话】](https://wiki.seeedstudio.com/cn/voice_recognition_minimax_tts_with_xiao_esp32s3/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-VoiceRecognition-MiniMax-TTS/6.png" style={{width:'auto', height:'auto'}}/></div>

### TTS模块接入

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-VoiceRecognition-MiniMax-TTS/7.png" style={{width:'auto', height:'auto'}}/></div>


SNR9816TTS 是基于独家语音合成算法开发的一款高流畅度，高自然度的优美人声语音合成模块。该模块方案基于新一代的神经网络算法，纯中文版支持女声发音人(默认)和男声发音人(指令切换)，中英文版只支持女声发音人，以满足各种应用场景的合成播报。

:::note提示

模块以中文为主，支持数字、英文(纯中文版:单个字母发音、中英文版:英文单词发音)，文本编码支持GB2312。优异的合成效果(可懂度、清晰度、自然度、表现力、节奏/停顿、语速、语调、音质、音色、理解程度)方面有显著提升。

:::

## 先决条件

在继续此项目之前，请确保检查以下先决条件。我们将使用 Arduino IDE 对 ESP32/ESP8266 开发板进行编程，因此在继续本教程之前，请确保已在 Arduino IDE 中安装这些开发板。此外，为了实现ESP32C3与SNR9816TTS模块的串口通信，请确保您已经安装了ESPSoftwareSerial和UTF8ToGB2312库。💕💕💕

### 环境配置

1. Arduino IDE：下载并安装 Arduino IDE；

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>下载 Arduino IDE</font></span></strong>
    </a>
</div>

2. ESP32 开发板库：在 Arduino IDE 中添加 ESP32 支持；

:::tip提示

参考wiki：[【esp32s3配置arduino IDE教程】](https://wiki.seeedstudio.com/cn/xiao_esp32s3_getting_started/#%E8%BD%AF%E4%BB%B6%E5%87%86%E5%A4%87)

为安装过程留出一些时间，具体时间可能因您的互联网连接而异。

:::


### 所需零件

要学习本教程，您需要1个ESP32S3 Sense

|名称|端口|功能|
|::|::|::|
|[XIAO ESP32S3 Sense](https://item.taobao.com/item.htm?id=607624979977&ali_trackid=2:mm_6255465658_3080750459_115671950478:1726742485212_190704904_0&union_lens=lensId:PUB@1712542228@210878e1_0d99_18ebb78a1b9_c500@01@eyJmbG9vcklkIjo4NjcwNiiwiic3BtQiiI6Il9wb3J0YWxfdjJfcGFnZXNfcHJvbW9fc2hvcF9jYW1wYWlnbl9wYWdlX2RldGFpbF9pbmRleF9odG0iifQieie;recoveryid:190704904_0@1726742485212&bxsign=tbksz-aWT1TvSUTRmowjFVG32HU6LFnEWn7YEC8mC0SgkTvgsmaCdNZAxRCKMjXkzkMOrUG21-fLgCCXnRS_yq9edRUHH_oB_HkP0F_3BdiAjXAozvkJ2brH6QRHj1iHyBea_8p0lc_TT5aLBKsU9FIJBtXsrUVUvKRYehVJrcBPplP43ypu3YDaCXacfQv6eux)|TXGPIO01 RXGPIO02|主控|
|中文版 SNR9816TTS|TXRX RXTX|TTS模块|

### 硬件连接步骤

1. 电源连接：将SNR9816TTS模块的5V电源引脚连接到ESP32S3的5V输出端，模块的GND引脚连接到ESP32C3的GND。
2. 串口通信：将SNR9816TTS模块的RX引脚连接到ESP32S3的GPIO01的TX引脚，模块的TX引脚连接到Arduino的GPIO02的RX引脚。这里使用软件串口（SoftwareSerial）库模拟额外的串行通信端口。
3. 音响：喇叭(第 3、4 引脚)接到对应SPKN和SPKP引脚上，官方喇叭响度有点大。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-VoiceRecognition-MiniMax-TTS/8.png" style={{width:'auto', height:'auto'}}/></div>



## 核心代码

下面准备进行了基于 ESP32S3 Sense 的硬件测试，此部分有源码分享和代码解析两部分

### 源码分享

Arduino代码如下

```cpp

#include <Arduino.h>
#include "base64.h"
#include <WiFi.h>
#include "HTTPClient.h"
#include "cJSON.h"
#include <I2S.h>
#include <ArduinoJson.h>
#include <SoftwareSerial.h>
#include "UTF8ToGB2312.h"
#define MYPORT_TX 1
#define MYPORT_RX 2

EspSoftwareSerial::UART myPort;

uint8_t voicedata[] = { 0xFD, 0x00, 0x06, 0x01, 0x01, 0x5B, 0x76, 0x31, 0x5D };  //voicedata[7] =  0x31 ~ 0x39
// #define data_len 16000
// #define key 4             //端口0
// #define ADC 2             //端口39
// #define led 15            //端口2

HTTPClient http_client;
// 1. Replace with your network credentials
const char *ssid = "J09 502";
const char *password = "qwertyuiop111";
// 2. Check your Aduio port
const int buttonPin = 1;  // the number of the pushbutton pin
const int ledPin = 21;    // the number of the LED pin
hw_timer_t *timer = NULL;
const int adc_data_len = 8000 * 3;
const int data_json_len = adc_data_len * 3;
uint16_t *adc_data;
char *data_json;
// uint16_t adc_data[data_len];    //16000个数据，8K采样率，即2秒，录音时间为2秒，想要实现更长时间的语音识别，就要改这个数组大小
// char data_json[json_len];          //用于储存json格式的数据,大一点,JSON编码后数据字节数变成原来的4/3,所以得计算好,避免出现越界
//和下面data_json数组的大小，改大一些。
uint8_t adc_start_flag = 0;     //开始标志
uint8_t adc_complete_flag = 0;  //完成标志


// 3. Replace with your MiniMax API key
const char *apiKey = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJHcm91cE5hbWUiOiIyMzQ1dm9yIiwiVXNlck5hbWUiOiIyMzQ1dm9yIiwiQWN.WlEj8Nk0j_WOMXZE9SbIC8sHpwJ6R6Pi8Spl5mahJsW3-Jsz7Ev53sGGz3v__Bd5dDkt7o9-Y8BOW0WZq2ImaN7Rof7YNtYnYnvPNDyGx23_xRqq5co9P5UkC3ciYEcIch2SUZ5QPkXR-sMUPzhdowSYvfdu1N25kdKJ8GE_63NfCnsdDVt8mv0wQSSweJK0yf_C8a8ADdB1uF4vg_WKMDjHlvzERsoNZgX6FYtr-bee85rIyu4U-OrbUvEpR1FLPXa7lTlx65QvhVIYGbIKde7ERIT_7QLOQoVFvPz0gX-H6V7UlmSRgRy4LK_R9mvV5TqCy3v90WK_AFuwEhPXcg";
// 3. Replace with your baidu voice detect token
String token = "24.8f6143793af71.2592000.1713789066.282335-57722200";
HTTPClient http;
String token_key = String("Bearer ") + apiKey;
// Send request to MiniMax API
String inputText = "你好，minimax！";
String apiUrl = "https://api.minimax.chat/v1/text/chatcompletion_v2";
int httpResponseCode;
String response, question, answer;
DynamicJsonDocument jsonDoc(1024);

uint32_t num = 0;
portMUX_TYPE timerMux = portMUX_INITIALIZER_UNLOCKED;
void IRAM_ATTR onTimer() {
  // Increment the counter and set the time of ISR
  portENTER_CRITICAL_ISR(&timerMux);
  if (adc_start_flag == 1) {
    //Serial.println("");
    // adc_data[num] = analogRead(ADC);
    adc_data[num] = I2S.read();
    num++;
    if (num >= adc_data_len) {
      adc_complete_flag = 1;
      adc_start_flag = 0;
      num = 0;
      //Serial.println(Complete_flag);
    }
  }
  portEXIT_CRITICAL_ISR(&timerMux);
}

String getGPTAnswer(String inputText) {
  http.begin(apiUrl);
  http.addHeader("Content-Type", "application/json");
  http.addHeader("Authorization", token_key);
  String payload = "{\"model\":\"abab5.5s-chat\",\"messages\":[{\"role\": \"system\",\"content\": \"你是鹏鹏的生活助手机器人，要求下面的回答严格控制在256字符以内。\"},{\"role\": \"user\",\"content\": \"" + inputText + "\"}]}";
  httpResponseCode = http.POST(payload);
  if (httpResponseCode == 200) {
    response = http.getString();
    http.end();
    Serial.println(response);
    // Parse JSON response
    deserializeJson(jsonDoc, response);
    String outputText = jsonDoc["choices"][0]["message"]["content"];
    return outputText;
    // Serial.println(outputText);
  } else {
    http.end();
    Serial.printf("Error %i \n", httpResponseCode);
    speech("语言大模型故障，请检查api是否失效");
    return "<error>";
  }
}

void speech(String data) {

  //0--空闲  1--繁忙  2--异常
  // while (workstate() > 0) {
  //   if (workstate() == 1) Serial.println("tts busy");
  //   if (workstate() == 2) Serial.println("tts wrong");
  // }
  String utf8_str = data;
  String gb2312_str = GB.get(utf8_str);
  unsigned char head[gb2312_str.length() + 6];
  // 定义无符号字符类型数组，将 GB2312 编码的字符串复制到数组中
  unsigned char gb2312_data[gb2312_str.length() + 1];
  memset(gb2312_data, 0, sizeof(gb2312_data));
  strncpy((char *)gb2312_data, gb2312_str.c_str(), gb2312_str.length());
  // head byte
  head[0] = 0xFD;
  // length bytes
  unsigned int dat_len = gb2312_str.length() + 3;
  head[1] = dat_len >> 8;
  head[2] = dat_len;
  // cmd byte
  head[3] = 0x01;
  // para byte
  head[4] = 0x01;
  // send each character individually
  for (int i = 0; i < gb2312_str.length(); i++) {
    head[i + 5] = gb2312_data[i];
  }
  // 计算异或值并添加到数组，额这个是syn那个芯片的例程，这个异或计算有没有用我懒得改了。反正代码能跑。
  head[gb2312_str.length() + 5] = head[0];
  for (int i = 1; i < gb2312_str.length() + 5; i++) {
    head[gb2312_str.length() + 5] ^= head[i];
  }
  // 发送字符数组到串口
  for (int j = 0; j < gb2312_str.length() + 6; j++) {
    myPort.write(head[j]);
  }
  delay(gb2312_str.length() * 100);
  // Serial.println(data);
}
// 查询tts合成工作状态 返回1表示繁忙 0表示空闲
int workstate() {
  unsigned char head[4] = { 0xFD, 0x00, 0x01, 0x21 };

  // 发送字符数组到串口
  for (int j = 0; j < 4; j++) {
    myPort.write(head[j]);
  }

  // 等待myPort的返回
  while (myPort.available() < 1) {
    // 可以在这里加入一些延时，以防止过快地查询
    delay(150);
  }

  // 读取并处理返回的数据
  byte response = myPort.read();

  // 返回相应的状态值
  if (response == 0x4E) {
    // 繁忙
    return 1;
  } else if (response == 0x4F) {
    // 空闲
    return 0;
  } else {
    // 未知状态，可以根据需要进行处理
    return 2;
  }
}


void setup() {

  //Serial.begin(921600);
  Serial.begin(115200);
  adc_data = (uint16_t *)ps_malloc(adc_data_len * sizeof(uint16_t));  //ps_malloc 指使用片外PSRAM内存
  if (!adc_data) {
    Serial.println("Failed to allocate memory for adc_data");
  }

  data_json = (char *)ps_malloc(data_json_len * sizeof(char));  // 根据需要调整大小
  if (!data_json) {
    Serial.println("Failed to allocate memory for data_json");
  }
  myPort.begin(115200, SWSERIAL_8N1, MYPORT_RX, MYPORT_TX, false);
  delay(1000);
  if (!myPort) {  // If the object did not initialize, then its configuration is invalid
    Serial.println("Invalid EspSoftwareSerial pin configuration, check config");
    while (1) {  // Don't continue with invalid configuration
      delay(1000);
    }
  }
  speech("系统开机");
  delay(1500);
  for (int i = 0; i < sizeof(voicedata) / sizeof(voicedata[0]); i++) {
    myPort.write(voicedata[i]);
  }
  delay(1000);
  speech("系统音量以调小");
  // pinMode(ADC, ANALOG);
  // pinMode(buttonPin, INPUT_PULLUP);
  pinMode(ledPin, OUTPUT);
  // start I2S at 16 kHz with 16-bits per sample
  I2S.setAllPins(-1, 42, 41, -1, -1);
  if (!I2S.begin(PDM_MONO_MODE, 16000, 16)) {
    Serial.println("Failed to initialize I2S!");
    while (1)
      ;  // do nothing
  }
  uint8_t count = 0;
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    count++;
    if (count >= 75) {
      Serial.printf("\r\n-- wifi connect fail! --");
      break;
    }
    vTaskDelay(200);
  }
  Serial.printf("\r\n-- wifi connect success! --\r\n");
  Serial.println(WiFi.localIP());
  http.setTimeout(4000);
  http_client.setTimeout(4000);
  // gain_token();

  timer = timerBegin(0, 80, true);    //  80M的时钟 80分频 1M
  timerAlarmWrite(timer, 125, true);  //  1M  计125个数进中断  8K
  timerAttachInterrupt(timer, &onTimer, true);
  timerAlarmEnable(timer);
  timerStop(timer);  //先暂停
}


uint32_t time1, time2;
void loop() {

  if (Serial.available() > 0)  //按键按下
  {
    if (Serial.read() == '1') {
      Serial.printf("Start recognition\r\n");
      digitalWrite(ledPin, HIGH);
      adc_start_flag = 1;
      timerStart(timer);

      // time1=micros();
      while (!adc_complete_flag)  //等待采集完成
      {
        ets_delay_us(10);
      }
      // time2=micros()-time1;

      timerStop(timer);
      adc_complete_flag = 0;  //清标志
      digitalWrite(ledPin, LOW);
      // memset(data_json, '\0', strlen(data_json));  //将数组清空
      memset(data_json, '\0', data_json_len * sizeof(char));
      strcat(data_json, "{");
      strcat(data_json, "\"format\":\"pcm\",");
      strcat(data_json, "\"rate\":16000,");
      strcat(data_json, "\"dev_pid\":1537,");
      strcat(data_json, "\"channel\":1,");
      strcat(data_json, "\"cuid\":\"666666\",");
      strcat(data_json, "\"token\":\"");
      strcat(data_json, token.c_str());
      strcat(data_json, "\",");
      sprintf(data_json + strlen(data_json), "\"len\":%d,", adc_data_len * 2);
      strcat(data_json, "\"speech\":\"");
      strcat(data_json, base64::encode((uint8_t *)adc_data, adc_data_len * sizeof(uint16_t)).c_str());
      strcat(data_json, "\"");
      strcat(data_json, "}");
      // Serial.println(data_json);
      int httpCode;
      http_client.begin("http://vop.baidu.com/server_api");  //https://vop.baidu.com/pro_api
      http_client.addHeader("Content-Type", "application/json");
      httpCode = http_client.POST(data_json);

      if (httpCode == 200) {
        if (httpCode == HTTP_CODE_OK) {
          response = http_client.getString();
          http_client.end();
          Serial.print(response);
          // Parse JSON response
          // DynamicJsonDocument jsonDoc(512);
          deserializeJson(jsonDoc, response);
          String question = jsonDoc["result"][0];
          // 访问"result"数组，并获取其第一个元
          // 输出结果
          Serial.println("Input:" + question);
          answer = getGPTAnswer(question);
          speech(answer);
          Serial.println("Answer: " + answer);
          // Serial.println("Enter a prompt:");

        } else {
          Serial.printf("[HTTP] GET... failed, error: %s\n", http_client.errorToString(httpCode).c_str());
          speech("语音识别在线故障，请检查api是否失效");
        }
      }
      // while (!digitalRead(buttonPin))
      //   ;
      Serial.println("Recognition complete\r\n");
    }
  }
  vTaskDelay(1);
}


```

### 代码解析

用于实现一个通过 I2S 接口采集音频信号并将其发送到百度语音识别 API 进行语音识别，然后将识别出的文本通过 MiniMax API 获取 AI 回答的功能。以下是代码的主要结构和功能说明：

1. 引入必要的库文件，包括
    1. Arduino.h：包含Arduino核心库，提供了基本的Arduino函数和结构
    2. base64.h：引入一个用于Base64编码和解码的库
    3. WiFi.h：用于连接WiFi网络的库
    4. HTTPClient.h：用于Arduino上进行HTTP请求的库
    5. cJSON.h：用于处理JSON数据的库
    6. I2S.h：I2S（Inter-IC Sound）库，用于在Arduino上进行音频处理
    7. ArduinoJson.h：ArduinoJson库，用于解析和生成JSON数据
    8. SoftwareSerial.h：软串口库，用于模拟多个串口
    9. UTF8ToGB2312.h：一个自定义的UTF-8到GB2312编码的转换库

然后，定义了一些必要的常量和变量。

2. 定义了一些全局变量，如 Wi-Fi 的 SSID 和密码，以及与音频采集和处理相关的变量，如 ADC 数据缓冲区、录音标志位、完成标志位、JSON 格式数据缓冲区，还有 MiniMax API 的密钥（apiKey）。

修改Wi-Fi 的 SSID 和密码

```cpp

// 1. Replace with your network credentials
const char* ssid = "J09 502";
const char* password = "qwertyuiop111";

```

修改MiniMax API 的密钥（apiKey）

```cpp

// 3. Replace with your MiniMax API key
const char* apiKey = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJHcm91cE5hbWUiOiIyMzQ1dm9yIiwiVXNlck5hbWUiOiIyMzQ1d6Im1pbmltYXgifQ.WlEj8Nk0j_WOMXZE9SbIC8sHpwJ6R6Pi8Spl5mahJsW3-Jsz7Ev53sGGz3v__Bd5dDkt7o9-Y8BOW0WZq2ImaN7Rof7YNtYnYnvPNDyGx23_xRqq5co9P5UkC3ciYEcIch2SUZ5QPkXR-sMUPzhdowSYvfdu1N25kdKJ8GE_63NfCnsdDVt8mv0wQSSweJK0yf_C8a8ADdB1uF4vg_WKMDjHlvzERsoNZgX6FYtr-bee85rIyu4U-OrbUvEpR1FLPXa7lTlx65QvhVIYGbIKde7ERIT_7QLOQoVFvPz0gX-H6V7UlmSRgRy4LK_R9mvV5TqCy3v90WK_AFuwEhPXcg";

```

修改百度api

```cpp

strcat(data_json, "\"token\":\"24.8f6143791.2592000.1713789066.282335-57722200\",");  //token	这里需要修改成自己申请到的token

```

3. 定义了一个 HTTPClient 实例 http_client，用于向 API 发送请求。
4. 构建函数 getGPTAnswer() ，用于向一个预先定义的API发送HTTP POST请求，以获取对特定输入文本的GPT模型生成的响应。
5. 构建函数 speech() ，用于将输入的文本数据转换为语音，并通过串口与语音合成模块进行通信，实现语音合成的功能。
6. 构建函数 workstate()，用于查询语音合成模块的工作状态，并返回相应的状态值。
7. setup()函数，它在程序开始时被调用，用于初始化设置和准备工作。具体来说，该函数会初始化系统各个部分的设置，包括串口通信、内存分配、软件串口、语音提示、GPIO设置、I2S音频初始化、Wi-Fi连接和定时器初始化。
8. loop()函数，它在程序运行过程中会一直执行，用于处理主要的逻辑流程。具体来说，它主要负责监听串口输入，控制语音识别的启动、停止和结果处理，与百度语音识别API的交互，以及延时等待。

## 上传验证

如果提示`Compilation error: ArduinoJson.h: No such file or directory`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-VoiceRecognition-MiniMax-TTS/9.png" style={{width:'auto', height:'auto'}}/></div>

直接在库管理安装`Arduinojson`库

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-VoiceRecognition-MiniMax-TTS/10.png" style={{width:'auto', height:'auto'}}/></div>

打开串口监视器，**注意右下角选择换行符，选择115200波特率**，输入你想问的问题，他就可以回答你

### 对话测试

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-VoiceRecognition-MiniMax-TTS/11.png" style={{width:'auto', height:'auto'}}/></div>

代码优化后可以减少动态内存使用：**3s语言输入**，**2s识别**，**5s交互播报**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-VoiceRecognition-MiniMax-TTS/12.png" style={{width:'auto', height:'auto'}}/></div>

串口发送“1”，开始录音，然后返回对话结果，进行TTS语音播报。


### 报错

1. 如果返回error ，大家对照列表查询错误代码，结合提示排查解决

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-VoiceRecognition-MiniMax-TTS/13.jpg" style={{width:'auto', height:'auto'}}/></div>


2. 如果第一次可以使用，但是第二次使用时自动重启了，可以配置下载程序运行在core0

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-VoiceRecognition-MiniMax-TTS/14.jpg" style={{width:'auto', height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-VoiceRecognition-MiniMax-TTS/15.png" style={{width:'auto', height:'auto'}}/></div>

3. 百度在线语音识别错误码自查表

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-VoiceRecognition-MiniMax-TTS/16.png" style={{width:'auto', height:'auto'}}/></div>


## 总结

在本教程中，您学习了如何使用ESP32S3 Sense接入语音识别+MiniMax模型+TTS模块实现语音播报功能。从而实现对外部世界进行感知，充分认识这个有机与无机的环境。🥳🥳🥳

参考文档：[ESP32S3 Sense接入语音识别+MiniMax模型+TTS模块语音播报](https://vor2345.blog.csdn.net/article/details/137232851)


## 技术支持和产品讨论
感谢您选择我们的产品!我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的喜好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>