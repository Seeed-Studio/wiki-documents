---
description: 本项目结合了 XIAO ESP32S3 和 Grove Vision AI V2，创建了一个紧凑型人员检测设备。V2 模块配备了人员检测模型，可识别人的存在并将结果发送到 ESP32S3。微控制器随后处理信息并将检测警报转发到指定的 Telegram 账户，提供实时通知，提醒监控区域内是否有人。
title: 部署 Grove Vision AI V2，通过 Telegram 通知您
image: https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/headimage2.png
slug: /cn/grove_vision_ai_v2_telegram
last_update:
  date: 05/27/2024
  author: Allen
---

<div class="table-center">
<iframe width="400" height="700" src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/xiao_telegram.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

本项目结合了 XIAO ESP32S3 和 Grove Vision AI V2，创建了一个紧凑型人员检测设备。V2 模块配备了人员检测模型，可识别人的存在并将结果发送到 ESP32S3。微控制器随后处理信息并将检测警报转发到指定的 Telegram 账户，提供实时通知，提醒监控区域内是否有人。

## 所需材料

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO ESP32S3</th>
			<th>Grove Vision AI V2 套件</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/00.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-V2-Kit-p-5852.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## 第 1 部分：Telegram API

如果我们想向 Telegram 发送信息，需要获取 Telegram 的 **Token** 和 **ChatId** 来访问 Telegram 的 API。按照以下步骤获取它们。

### 第 1 步：使用 BotFather 创建一个新机器人

打开 Telegram 并进入 BotFather 页面，发送 **/start**，BotFather 会给出一些反馈。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/2.png" style={{width:500, height:'auto'}}/></div>

点击 **/newbot** 链接。BotFather 会为您创建一个新机器人，您需要根据规则为您的机器人命名。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/3.png" style={{width:500, height:'auto'}}/></div>

### 第 2 步：获取您的 Token 和 ChatId

根据上一步，BotFather 会在您创建机器人后给出一些反馈。您可以在反馈中找到 **Token**，格式类似于：**123456789:AoUJnnpoFlkkdfJbCXlo...**。然后使用您的 Token 访问以下链接以获取 **ChatId**。

```python
# 使用您的 Token 访问此链接
https://api.telegram.org/bot{Token}/getUpdates

# 示例
https://api.telegram.org/bot123456789:AoUJnnpoFlkkdfJbCXlo.../getUpdates
```

您可以按照下图找到您的 **ChatId**。ChatId 的格式类似于：**12234556**。**保存您的 Token 和 ChatId**，我们稍后会用到它们。

:::提示
如果您在页面中看不到任何内容，请向您的机器人发送一些消息，然后刷新页面。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/1.png" style={{width:1000, height:'auto'}}/></div>

## 第 2 部分. 人体检测模型

#### 第 3 步. 选择模型

首先，我们需要打开 SenseCraft AI 模型助手的主页面。

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/home" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>前往 SenseCraft AI</font></span></strong></a>
</div>
<br />

选择您想要部署的模型并点击进入。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/4.png" style={{width:1000, height:'auto'}}/></div>

您可以在这里查看该模型的描述，如果适合您的需求，请点击右侧的 **Deploy Model** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/5.png" style={{width:1000, height:'auto'}}/></div>

### 第 4 步. 连接模块并上传合适的模型

请使用 Type-C 类型的线缆将 Grove Vision AI V2 连接到您的电脑，然后点击 **Connect** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a3.png" style={{width:600, height:'auto'}}/></div>

点击 **Confirm** 按钮。在页面的左上角，您可以选择 **USB Single Serial**，然后点击 **Connect** 按钮。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a4.png" style={{width:600, height:'auto'}}/></div>

请保持在此页面停留 1-2 分钟，直到模型成功上传。请注意，在此过程中切换到其他页面可能会导致上传失败（我们的团队正在积极解决此问题，很快将修复）。

### 第 5 步. 观察结果

模型成功上传后，您将能够在左侧的预览中看到来自 Grove Vision AI V2 摄像头的实时画面。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/6.png" style={{width:800, height:'auto'}}/></div>

恭喜您！到目前为止一切顺利，接下来我们将编写一些代码，通过 XIAO ESP32 系列向 Telegram 发送消息。

## 第 3 部分. 向 Telegram 发送通知

### 第 6 步. 安装

首先，通过引脚将 XIAO ESP32S3 连接到 Grove Vision AI V2，然后将天线连接到 XIAO ESP32S3。最后，通过 Type-C 线缆将 XIAO ESP32S3 连接到您的电脑。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/8.png" style={{width:500, height:'auto'}}/></div>

### 第 7 步. 编写代码

首先，我们需要在此页面下载 [SSCMA 库](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA)。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/10.png" style={{width:1000, height:'auto'}}/></div>

然后，我们需要将此 zip 包添加到 Arduino IDE。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/11.png" style={{width:800, height:'auto'}}/></div>

现在，在 Arduino IDE 中创建一个新草图，并将以下代码粘贴到草图中并上传。

:::tip
请将代码中的 2.4G Wi-Fi **ssid**、**password** 以及您的 Telegram **Token** 和 **ChatId** 替换为您之前保存的信息。
:::

```cpp
#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>
#include <Seeed_Arduino_SSCMA.h>

//更改为您的 ssid 和密码
const char* ssid = "xxx";
const char* password = "xxx";

//更改为您的 token 和 chatid
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
          //获取模型推断结果
          if(AI.boxes()[i].score>70){
            Serial.println("检测到人");
            //调用函数将监控结果发送到 Telegram
            if(WiFi.status() == WL_CONNECTED) {
              sendMessage("检测到人");
              delay(1000);
            }
          }
      }
    }
}

//访问 Telegram 并发送消息的函数
void sendMessage(String text) {
  String url = "https://api.telegram.org/bot" + botToken + "/sendMessage";
  String payload = "{\"chat_id\":\"" + chatId + "\",\"text\":\"" + text + "\"}";
  
  HTTPClient http;
  http.begin(url);
  http.addHeader("Content-Type", "application/json");
  
  int statusCode = http.POST(payload);
  if (statusCode == 200) {
    Serial.println("消息发送成功！");
  } else {
    Serial.println("消息发送失败。");
  }
  http.end();
}
```

上传代码后，打开串口监视器并使用 Grove Vision AI V2 检测人。Vision AI V2 检测到人时，您将看到以下结果。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/7.png" style={{width:800, height:'auto'}}/></div>

现在，打开 Telegram 中您的机器人聊天页面，您将看到一些由 XIAO ESP32S3 发送的消息。您还可以像视频中一样使用移动电源供电。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/9.png" style={{width:500, height:'auto'}}/></div>

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，确保您使用我们的产品时体验顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>