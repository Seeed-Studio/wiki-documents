---
description: ESP32S3 Sense接入语音识别+MiniMax模型对话。
title: ESP32S3 Sense接入语音识别+MiniMax模型对话
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/voice_recognition_minimax_with_xiao_esp32s3
last_update:
  date: 09/20/2024
  author: Frank
---

# ESP32S3 Sense接入语音识别+MiniMax模型对话

## 前言

本文围绕ESP32S3 Sense接入语音识别+MiniMax模型对话展开，首先串口输入“1”字符，随后麦克风采集2s声音数据，对接百度在线语音识别，将返回文本结果丢入MiniMax模型，进而返回第二次结果文本，实现语言对话文本效果。以上一共有两次调用，后期只需加入tts模块就可完整对话。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-VoiceRecognition-MiniMax/1.jpg" style={{width:'auto', height:'auto'}}/></div>

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
|[MiniMax](https://www.minimaxi.com/)|3s|8分|500万|
|[智谱清言](https://open.bigmodel.cn/)|7s|8分|300万|
|[文心一言](https://cloud.baidu.com/doc/WENXINWORKSHOP/s/Nlks5zkzu)|10s|9分|500万|
|[通义千问](https://tongyi.aliyun.com/qianwen/)|8s|8分|800万|

本文采用Arduino编程，可以让开发轻松许多。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-VoiceRecognition-MiniMax-TTS/6.png" style={{width:'auto', height:'auto'}}/></div>

## 先决条件

在此项目开始之前，请确保检查以下先决条件。

我们将使用 Arduino IDE 对 ESP32/ESP8266 开发板进行编程，因此在继续本教程之前，请确保已在 Arduino IDE 中安装这些开发板。

### 配置环境

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

要学习本教程，您需要1个 ESP32 开发板+麦克风或者XIAO ESP32S3 Sense。本文推荐使用XIAO ESP32S3 Sense因为它可以轻松调用代码。


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



## 核心代码

提供两种硬件测试

1. ESP32S3 Sense
2. ESP32 + max9814麦克风模块用做语音输入，一个按键来控制数据的采集和上传

### ESP32S3 Sense

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-VoiceRecognition-MiniMax/2.jpg" style={{width:'auto', height:'auto'}}/></div>

ESP32S3 Sense自带麦克风直接烧录

Arduino代码如下

```cpp

#include <Arduino.h>
#include "base64.h"
#include <WiFi.h>
#include "HTTPClient.h"
#include "cJSON.h"
#include <I2S.h>
#include <ArduinoJson.h>
#define data_len 16000
// #define key 4             //端口0
// #define ADC 2             //端口39
// #define led 15            //端口2

HTTPClient http_client;
// 1. Replace with your network credentials
const char* ssid = "J09 502";
const char* password = "qwertyuiop111";
// 2. Check your Aduio port
const int buttonPin = 1;  // the number of the pushbutton pin
const int ledPin = 21;    // the number of the LED pin
hw_timer_t* timer = NULL;
uint16_t adc_data[data_len];    //16000个数据，8K采样率，即2秒，录音时间为2秒，想要实现更长时间的语音识别，就要改这个数组大小
                                //和下面data_json数组的大小，改大一些。
uint8_t adc_start_flag = 0;     //开始标志
uint8_t adc_complete_flag = 0;  //完成标志
char data_json[45000];          //用于储存json格式的数据,大一点,JSON编码后数据字节数变成原来的4/3,所以得计算好,避免出现越界

// 3. Replace with your MiniMax API key
const char* apiKey = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJHcm91cE5hbWUiOiIyMzQ1dm9yIiwiVXNlck5hbWUiOiIyMzQ1dm9yIiwiQWNjb3VudCI6IiIsIlN1YmjE3NTk0ODIxODAxMDAxNzAyMDgiLCJQI6IjE3NTk0ODIxODAwOTU5NzU5MDQiLCJQYWdlTmFtZSI6IiIsIk1haWwiOiIiLCJDcmVhdGVUaW1lIjoiMjAyNC0wMy0xNiAxMzoyNDoxOCIsImlzcyI6Im1pbmltYXgifQ.WlEj8Nk0j_WOMXZE9SbIC8sHpwJ6R6Pi8Spl5mahJsW3-Jsz7Ev53sGGz3v__Bd5dDkt7o9-Y8BOW0WZq2ImaN7Rof7YNtYnYnvPNDyGx23_xRqq5co9P5UkC3ciYEcIch2SUZ5QPkXR-sMUPzhdowSYvfdu1N25kdKJ8GE_63NfCnsdDVt8mv0wQSSweJK0yf_C8a8ADdB1uF4vg_WKMDjHlvzERsoNZgX6FYtr-bee85rIyu4U-OrbUvEpR1FLPXa7lTlx65QvhVIYGbIKde7ERIT_7QLOQoVFvPz0gX-H6V7UlmSRgRy4LK_R9mvV5TqCy3v90WK_AFuwEhPXcg";
HTTPClient http;
String token_key = String("Bearer ") + apiKey;
// Send request to MiniMax API
String inputText = "你好，minimax！";
String apiUrl = "https://api.minimax.chat/v1/text/chatcompletion_v2";
int httpResponseCode;
String response,question,answer;
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
    if (num >= data_len) {
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
    return "<error>";
  }
}

void setup() {

  //Serial.begin(921600);
  Serial.begin(115200);
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
  http.setTimeout(10000);
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
      Serial.printf("Start recognition\r\n\r\n");
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
      memset(data_json, '\0', strlen(data_json));  //将数组清空
      strcat(data_json, "{");
      strcat(data_json, "\"format\":\"pcm\",");
      strcat(data_json, "\"rate\":16000,");                                                                        //采样率    如果采样率改变了，记得修改该值，只有16000、8000两个固定采样率
      strcat(data_json, "\"dev_pid\":1537,");                                                                      //中文普通话
      strcat(data_json, "\"channel\":1,");                                                                         //单声道
      strcat(data_json, "\"cuid\":\"666666\",");                                                                   //识别码    随便打几个字符，但最好唯一
      strcat(data_json, "\"token\":\"24.8f6143793af76e02f5e191.2592000.1713789066.282335-57722200\",");  //token	这里需要修改成自己申请到的token
      strcat(data_json, "\"len\":32000,");                                                                         //数据长度  如果传输的数据长度改变了，记得修改该值，该值是ADC采集的数据字节数，不是base64编码后的长度
      strcat(data_json, "\"speech\":\"");
      strcat(data_json, base64::encode((uint8_t*)adc_data, sizeof(adc_data)).c_str());  //base64编码数据
      strcat(data_json, "\"");
      strcat(data_json, "}");
      // Serial.println(data_json);
      int httpCode;
      http_client.setTimeout(5000);
      http_client.begin("http://vop.baidu.com/server_api");  //https://vop.baidu.com/pro_api
      http_client.addHeader("Content-Type", "application/json");
      httpCode = http_client.POST(data_json);

      if (httpCode == 200) {
        if (httpCode == HTTP_CODE_OK) {
          response = http_client.getString();
          http_client.end();
          Serial.println(response);
          // Parse JSON response
          // DynamicJsonDocument jsonDoc(512);
          deserializeJson(jsonDoc, response);
          String question = jsonDoc["result"][0];
          // 访问"result"数组，并获取其第一个元
          // 输出结果
          Serial.println("\n Input:"+question);
          answer = getGPTAnswer(question);
          Serial.println("Answer: " + answer);
          Serial.println("Enter a prompt:");

        } else {
          Serial.printf("[HTTP] GET... failed, error: %s\n", http_client.errorToString(httpCode).c_str());
        }
      }
      // while (!digitalRead(buttonPin))
      //   ;
      Serial.printf("Recognition complete\r\n");
    }
  }
  vTaskDelay(1);
}

```

用于实现一个通过 I2S 接口采集音频信号并将其发送到百度语音识别 API 进行语音识别，然后将识别出的文本通过 MiniMax API 获取 AI 回答的功能。以下是代码的主要结构和功能说明：

1. 引入必要的库文件，包括 Arduino.h、base64.h、WiFi.h、HTTPClient.h、cJSON.h、I2S.h 和 ArduinoJson.h，这些库分别提供了基本的 Arduino 功能、Base64 编解码、Wi-Fi 连接、HTTP 客户端操作、JSON 数据处理和 I2S 音频接口驱动。
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
const char* apiKey = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJHcm91cE5hbWUiOiIyMzQ1dm9yIiwiVXNlck5hbWUiOiIyMzQ1dm9yIiwiQWNjb3VudCI6IiIsIlN1YmjE3NTk0ODIxODAxMDAxNzAyMDgiLCJQI6IjE3NTk0ODIxODAwOTU5NzU5MDQiLCJQYWdlTmFtZSI6IiIsIk1haWwiOiIiLCJDcmVhdGVUaW1lIjoiMjAyNC0wMy0xNiAxMzoyNDoxOCIsImlzcyI6Im1pbmltYXgifQ.WlEj8Nk0j_WOMXZE9SbIC8sHpwJ6R6Pi8Spl5mahJsW3-Jsz7Ev53sGGz3v__Bd5dDkt7o9-Y8BOW0WZq2ImaN7Rof7YNtYnYnvPNDyGx23_xRqq5co9P5UkC3ciYEcIch2SUZ5QPkXR-sMUPzhdowSYvfdu1N25kdKJ8GE_63NfCnsdDVt8mv0wQSSweJK0yf_C8a8ADdB1uF4vg_WKMDjHlvzERsoNZgX6FYtr-bee85rIyu4U-OrbUvEpR1FLPXa7lTlx65QvhVIYGbIKde7ERIT_7QLOQoVFvPz0gX-H6V7UlmSRgRy4LK_R9mvV5TqCy3v90WK_AFuwEhPXcg";

```

修改百度api

```cpp

strcat(data_json, "\"token\":\"24.8f6143793af76e02f5e191.2592000.1713789066.282335-57722200\",");  //token	这里需要修改成自己申请到的token

```

3. 定义了一个 HTTPClient 实例 http_client，用于向 API 发送请求。

4. 函数 getGPTAnswer() 负责调用 MiniMax API，并传入用户输入文本以获取 AI 的回答。

5. onTimer() 函数是一个中断服务程序，每当定时器触发时会读取 I2S 接口上的音频数据并存入缓冲区 adc_data 中。当缓冲区满或者录音结束时，会设置完成标志。

6. setup() 函数负责初始化串口通信、配置 I2S 接口、连接 Wi-Fi，并设置定时器和中断。

7. loop() 函数是 Arduino 主循环函数，在循环中检查是否有按键输入（这里未实际使用）。如果有特定输入，开始音频采集过程，并在采集完成后将音频数据转换为 Base64 编码，构建一个 JSON 请求体，然后通过 HTTP POST 方式发送到百度语音识别 API。收到识别结果后，调用 getGPTAnswer() 函数获取 AI 回答，并打印在控制台上。


### ESP32 + max9814

ESP32 + max9814麦克风模块用做语音输入，一个按键来控制数据的采集和上传

注意端口：

```cpp

#define key 0   //按键端口0
#define ADC 32  //max9814麦克风模块端口39
#define led 2   //LED端口2

```

`stt_chat_max.ino`

```cpp

#include <Arduino.h>
#include "base64.h"
#include <WiFi.h>  //#include "WiFi.h"
#include "HTTPClient.h"
#include "cJSON.h"
// #include <I2S.h>
#include <ArduinoJson.h>
#define data_len 16000

#define key 0   //端口0
#define ADC 32  //端口39
#define led 2   //端口2
HTTPClient http_client;
// 1. Replace with your network credentials
const char* ssid = "J09 502";
const char* password = "qwertyuiop111";
// 2. Check your Aduio port
// const int buttonPin = 1;  // the number of the pushbutton pin
// const int ledPin = 21;    // the number of the LED pin
hw_timer_t* timer = NULL;
uint16_t adc_data[data_len];    //16000个数据，8K采样率，即2秒，录音时间为2秒，想要实现更长时间的语音识别，就要改这个数组大小
                                //和下面data_json数组的大小，改大一些。
uint8_t adc_start_flag = 0;     //开始标志
uint8_t adc_complete_flag = 0;  //完成标志
char data_json[45000];          //用于储存json格式的数据,大一点,JSON编码后数据字节数变成原来的4/3,所以得计算好,避免出现越界

// 3. Replace with your MiniMax API key
const char* apiKey = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJHcm91iOiIyMzQ1dm9yIiwiQWNjb3VudCI6IiIsIlN1YmplY3RJRCI6IjE3NTk0ODIxODAxMDAxNzAyMDgiLCJQaG9uZSI6IjE1MDcyNjQxNTYxIiwiR3JvdXBJRCI6IjE3NTk0ODIxODAwOTU5NzU5MDQiLCJQYWdlTmFtZSI6IiIsIk1haWwiOiIiLCJDcmVhdGVUaW1lIjoiMjAyNC0wMy0xNiAxMzoyNDoxOCIsImlzcyI6Im1pbmltYXgifQ.WlEj8Nk0j_WOMXZE9SbIC8sHpwJ6R6Pi8Spl5mahJsW3-Jsz7Ev53sGGz3v__Bd5dDkt7o9-Y8BOW0WZq2ImaN7Rof7YNtYnYnvPNDyGx23_xRqq5co9P5UkC3ciYEcIch2SUZ5QPkXR-sMUPzhdowSYvfdu1N25kdKJ8GE_63NfCnsdDVt8mv0wQSSweJK0yf_C8a8ADdB1uF4vg_WKMDjHlvzERsoNZgX6FYtr-bee85rIyu4U-OrbUvEpR1FLPXa7lTlx65QvhVIYGbIKde7ERIT_7QLOQoVFvPz0gX-H6V7UlmSRgRy4LK_R9mvV5TqCy3v90WK_AFuwEhPXcg";
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
    adc_data[num] = analogRead(ADC);
    // adc_data[num] = I2S.read();
    num++;
    if (num >= data_len) {
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
    return "<error>";
  }
}

void setup() {

  //Serial.begin(921600);
  Serial.begin(115200);
  pinMode(ADC, ANALOG);
  pinMode(key, INPUT_PULLUP);
  pinMode(led, OUTPUT);
  // pinMode(ADC, ANALOG);
  // pinMode(buttonPin, INPUT_PULLUP);
  // pinMode(ledPin, OUTPUT);
  // start I2S at 16 kHz with 16-bits per sample
  // I2S.setAllPins(-1, 42, 41, -1, -1);
  // if (!I2S.begin(PDM_MONO_MODE, 16000, 16)) {
  //   Serial.println("Failed to initialize I2S!");
  //   while (1)
  //     ;  // do nothing
  // }
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
  http.setTimeout(10000);
  // gain_token();

  timer = timerBegin(0, 80, true);    //  80M的时钟 80分频 1M
  timerAlarmWrite(timer, 125, true);  //  1M  计125个数进中断  8K
  timerAttachInterrupt(timer, &onTimer, true);
  timerAlarmEnable(timer);
  timerStop(timer);  //先暂停
}


uint32_t time1, time2;
void loop() {

    if (digitalRead(key)==0) {
      Serial.printf("Start recognition\r\n\r\n");
      digitalWrite(led,HIGH);
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
      digitalWrite(led, LOW);
      memset(data_json, '\0', strlen(data_json));  //将数组清空
      strcat(data_json, "{");
      strcat(data_json, "\"format\":\"pcm\",");
      strcat(data_json, "\"rate\":8000,");                                                                        //采样率    如果采样率改变了，记得修改该值，只有16000、8000两个固定采样率
      strcat(data_json, "\"dev_pid\":1537,");                                                                      //中文普通话
      strcat(data_json, "\"channel\":1,");                                                                         //单声道
      strcat(data_json, "\"cuid\":\"666666\",");                                                                   //识别码    随便打几个字符，但最好唯一
      strcat(data_json, "\"token\":\"24.8f6143793af76191.2592000.1713789066.282335-57722200\",");  //token	这里需要修改成自己申请到的token
      strcat(data_json, "\"len\":32000,");                                                                         //数据长度  如果传输的数据长度改变了，记得修改该值，该值是ADC采集的数据字节数，不是base64编码后的长度
      strcat(data_json, "\"speech\":\"");
      strcat(data_json, base64::encode((uint8_t*)adc_data, sizeof(adc_data)).c_str());  //base64编码数据
      strcat(data_json, "\"");
      strcat(data_json, "}");
      // Serial.println(data_json);
      int httpCode;
      http_client.setTimeout(5000);
      http_client.begin("http://vop.baidu.com/server_api");  //https://vop.baidu.com/pro_api
      http_client.addHeader("Content-Type", "application/json");
      httpCode = http_client.POST(data_json);

      if (httpCode == 200) {
        if (httpCode == HTTP_CODE_OK) {
          response = http_client.getString();
          http_client.end();
          Serial.println(response);
          // Parse JSON response
          // DynamicJsonDocument jsonDoc(512);
          deserializeJson(jsonDoc, response);
          String question = jsonDoc["result"][0];
          // 访问"result"数组，并获取其第一个元
          // 输出结果
          Serial.println("\n Input:" + question);
          answer = getGPTAnswer(question);
          Serial.println("Answer: " + answer);
          Serial.println("Enter a prompt:");

        } else {
          Serial.printf("[HTTP] GET... failed, error: %s\n", http_client.errorToString(httpCode).c_str());
        }
      }
      // while (!digitalRead(buttonPin))
      //   ;
      Serial.printf("Recognition complete\r\n");
    }
  // }
  vTaskDelay(1);
}

```

## 上传验证

如果提示`Compilation error: ArduinoJson.h: No such file or directory`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-VoiceRecognition-MiniMax/3.png" style={{width:'auto', height:'auto'}}/></div>

直接在库管理安装Arduinojson库

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-VoiceRecognition-MiniMax/4.png" style={{width:'auto', height:'auto'}}/></div>

打开串口监视器，**注意右下角选择换行符，选择115200波特率**，输入你想问的问题，他就可以回答你


### 对话测试



<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-VoiceRecognition-MiniMax/5.png" style={{width:'auto', height:'auto'}}/></div>



串口发送“1”，开始录音，然后返回对话结果，以上是两次连续对话效果😘😘😘



### 报错

1. 如果返回error ，大家对照列表查询错误代码，结合提示排查解决

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-VoiceRecognition-MiniMax/6.jpg" style={{width:'auto', height:'auto'}}/></div>


2. 如果第一次可以运行，但是二次时会自动重启，可以配置下载程序运行在core0

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-VoiceRecognition-MiniMax/7.jpg" style={{width:'auto', height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-VoiceRecognition-MiniMax/8.png" style={{width:'auto', height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-VoiceRecognition-MiniMax/9.png" style={{width:'auto', height:'auto'}}/></div>


## 总结

在本教程中，您学习了如何使用ESP32S3 Sense接入语音识别+MiniMax模型对话。从而实现对外部世界进行感知，充分认识这个有机与无机的环境。🥳🥳🥳

参考文档：[ESP32S3 Sense接入语音识别+MiniMax模型对话](https://vor2345.blog.csdn.net/article/details/137090698)


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