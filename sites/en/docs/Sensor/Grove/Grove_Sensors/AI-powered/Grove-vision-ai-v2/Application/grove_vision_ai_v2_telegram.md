---
description: This project combines the XIAO ESP32S3 and Grove Vision AI V2 to create a compact person detection device. The V2 module, equipped with a person detection model, identifies human presence and sends the results to the ESP32S3. The microcontroller then processes the information and forwards the detection alerts to a designated Telegram account, providing real-time notifications whenever a person is detected in the monitored area.
title: Deploy Grove Vision AI V2 To Notifies You Via Telegram
image: https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/headimage2.png
slug: /grove_vision_ai_v2_telegram
last_update:
  date: 05/27/2024
  author: Allen
---

<div class="table-center">
<iframe width="400" height="700" src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/xiao_telegram.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

This project combines the XIAO ESP32S3 and Grove Vision AI V2 to create a compact person detection device. The V2 module, equipped with a person detection model, identifies human presence and sends the results to the ESP32S3. The microcontroller then processes the information and forwards the detection alerts to a designated Telegram account, providing real-time notifications whenever a person is detected in the monitored area.

## Material Required

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO ESP32S3</th>
			<th>Grove Vision AI V2 Kit</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/00.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-V2-Kit-p-5852.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## Part 1. Telegram API

If we want to send something to Telegram, we need to get Telegram's **Token** and **ChatId** to access Telegram's API. So let's get them in the following steps.

### Step 1. Use BotFather create a new bot

Open your Telegram and get into BotFather page, send **/start** and BotFather will give you some feedback.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/2.png" style={{width:500, height:'auto'}}/></div>

Click the **/newbot** link. BotFather will create a new bot for you and you should give your bot a name according the rule.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/3.png" style={{width:500, height:'auto'}}/></div>

### Step 2. Get your Token And ChatId

According to previous step, BotFather will give you some feedback when you created your bot. You will find **Token** in the feedback and the format would be like: **123456789:AoUJnnpoFlkkdfJbCXlo...**. And then use your Token to access this link to get your **ChatId**.

```python
#access this link using your Token
https://api.telegram.org/bot{Token}/getUpdates

#example
https://api.telegram.org/bot123456789:AoUJnnpoFlkkdfJbCXlo.../getUpdates
```

You will find your **ChatId** following the image below. The ChatId would be like: **12234556**. **Save your Token and ChatId**, we will use them later.

:::tip
If you see nothing in this page, please send something to your bot and refresh this page again.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/1.png" style={{width:1000, height:'auto'}}/></div>

## Part 2. People Detection Model

#### Step 3. Choose model

First, we need to open the main SenseCraft AI Model Assistant page.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/home" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>Go to SenseCraft AI</font></span></strong></a>
</div>
<br />

Choose the model you want to deploy and click into it.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/4.png" style={{width:1000, height:'auto'}}/></div>

You can see the description of this model here and if it suit to you, click the **Deploy Model** button at the right side.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/5.png" style={{width:1000, height:'auto'}}/></div>

### Step 4. Connect the module and upload a suitable model

Please use a Type-C type cable to connect Grove Vision AI V2 to your computer and then click **Connect** button.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a3.png" style={{width:600, height:'auto'}}/></div>

Click **Confirm** button. In the upper left corner of the this page, you can select **USB Single Serial**. Then click the **Connect** button.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a4.png" style={{width:600, height:'auto'}}/></div>

Please remain on this page for 1-2 minutes until the model is successfully uploaded. Kindly note that switching to another page tab during this process may result in an unsuccessful upload (our team is actively working on resolving this issue, and it will be fixed soon).

### Step 5. Observations

Once the model is uploaded successfully, you will be able to see the live feed from the Grove Vision AI V2 camera in the Preview on the left.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/6.png" style={{width:800, height:'auto'}}/></div>

Congratulations! So far so good, next we are going to write some code to send something to Telegram via XIAO ESP32 series.

## Part 3. Send Notification to Telegram

### Step 6. Installation

First, connect XIAO ESP32S3 to Grove Vision AI V2 via pin, and then connect antenna to XIAO ESP32S3. Finally, connect the XIAO ESP32S3 to your computer via Type-C cable.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/8.png" style={{width:500, height:'auto'}}/></div>

### Step 7. Coding

First we need to download [SSCMA Library](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA) in this page.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/10.png" style={{width:1000, height:'auto'}}/></div>

And then we need to add this zip package to Arduino IDE.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/11.png" style={{width:800, height:'auto'}}/></div>

Now, create a new sketch in Arduino IDE and past the following code to the sketch and upload.

:::tip
Please change to your 2.4G Wi-Fi **ssid**, **password** and your Telegram **Token**, **ChatId** saved before.
:::

```cpp
#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>
#include <Seeed_Arduino_SSCMA.h>

//change to your ssid and password
const char* ssid = "xxx";
const char* password = "xxx";

//change to your token and chatid
const String botToken = "xxx";
const String chatId = "xxx";

SSCMA AI;

void setup()
{
    AI.begin();
    Serial.begin(9600);
    WiFi.begin(ssid, password); 
    while (WiFi.status() != WL_CONNECTED) {
      delay(1000);
      Serial.println("Connecting to WiFi...");
    }
}

void loop()
{
    if (!AI.invoke()){
      for (int i = 0; i < AI.boxes().size(); i++){
          //Get the model inference
          if(AI.boxes()[i].score>70){
            Serial.println("People detected");
            //Call the function to send the monitering result to Telegram
            if(WiFi.status() == WL_CONNECTED) {
              sendMessage("People Detected");
              delay(1000);
            }
          }
      }
    }
}

//The function that access Telegram and send some message
void sendMessage(String text) {
  String url = "https://api.telegram.org/bot" + botToken + "/sendMessage";
  String payload = "{\"chat_id\":\"" + chatId + "\",\"text\":\"" + text + "\"}";
  
  HTTPClient http;
  http.begin(url);
  http.addHeader("Content-Type", "application/json");
  
  int statusCode = http.POST(payload);
  if (statusCode == 200) {
    Serial.println("Message sent successfully!");
  } else {
    Serial.println("Failed to send message.");
  }
  http.end();
}
```

After uploading code, open serial monitor and use Grove Vision AI V2 to detect people. You will see the following results when Vision AI V2 has detected people.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/7.png" style={{width:800, height:'auto'}}/></div>

Now, open your bot chatting page in Telegram and you will see some messages sent from XIAO ESP32S3. Also you can use power bank to supply eletricity like the vedio.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/9.png" style={{width:500, height:'auto'}}/></div>

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