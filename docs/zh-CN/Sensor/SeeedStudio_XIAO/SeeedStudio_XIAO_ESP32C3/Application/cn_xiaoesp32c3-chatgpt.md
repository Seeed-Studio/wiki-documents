---
description: XIAO ESP32C3-Chatgpt
title: 在 XIAO ESP32C3 上调用大语言模型接口
keywords:
- XIAO ESP32C3
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/xiaoesp32c3-chatgpt
last_update:
  date: 1/11/2023
  author: Xin Ping Li
---
# 在 XIAO ESP32C3 上调用大语言模型接口

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/18.png"/></div>

ChatGPT是一种新的聊天机器人模型，是人工智能技术支持的自然语言处理工具，由人工智能研究实验室OpenAI于2022年11月30日发布。


它能够通过学习和理解人类语言来进行对话，也可以根据聊天的上下文进行交互，像人类一样真正地聊天和交流，甚至执行诸如写电子邮件、视频脚本、文案、翻译和编码等任务。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/2.png"/></div>

在嵌入式系统中，ChatGPT可以是一个很好的助手，帮助我们编写简单的程序，甚至检查和修复程序中出现的错误。

令人兴奋的是，OpenAI正式提供了调用GPT-3模型的接口，这允许我们调用这些接口并通过许多方法将这个伟大的模型部署到我们自己的嵌入式系统中。

Seeed Studio XIAO ESP32C3是一款基于Espressif ESP32-C3 WiFi/蓝牙双模芯片的物联网迷你开发板。它具有优异的射频性能，支持IEEE 802.11 b/g/n WiFi和Bluetooth 5 (LE)协议。能够很好地支持ESP32官方提供的WiFi客户端和WiFi服务器服务。当然，它能够完美地支持Arduino。

<div align="center"><img width ="200" src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
    </a>
</div>


因此，在本教程中，我们将指导用户学习和使用XIAO ESP32C3 WiFiClient和HTTPClient库，如何连接到网络，如何发布web页面以及HTTP GET和POST的基础知识。我们的目标是调用OpenAI ChatGPT并创建自己的问答网站。
## 开始

在本教程中，我们将使用一个XIAO ESP32C3来配置我们自己的ChatGPT问答页面。在这个页面中，你可以输入你的问题，XIAO ESP32C3会记录你的问题，并使用OpenAI提供的API调用方法，使用HTTP Client发送请求命令，获取ChatGPT的答案，并在串口上打印出来。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/19.png"/></div>

本教程中的任务可以分为以下四个主要步骤。


1.  [配置XIAO ESP32C3连接网络](#配置XIAO-ESP32C3连接到网络) : 在这一步中，我们将学习使用XIAO ESP32C3的基本WiFi配置流程，学习XIAO ESP32C3的基本操作，如网络配置、连接网络服务、获取IP地址。



2. [构建嵌入式网页](#构建嵌入式网页):在这一步中，我们主要接触WiFi客户端库。通过使用这个库的GET和POST函数，我们可以使用HTML编写自己的问答网页，并将其部署在XIAO ESP32C3之上。


3. [通过内置网页提交问题](#通过内置网页提交问题):在这一步中，我们将主要学习使用HTTP客户端中的POST方法，根据OpenAI API标准发布我们提出的问题。我们将主要关注如何从web页面中收集和存储问题的过程。


4. [从ChatGPT获取答案](#Get-answers-from-ChatGPT):在这一步中，我们学习如何在HTTP客户端中使用POST方法，并从返回的消息中提取我们需要的问题的答案。最后一步是整理代码的结构并进行最终的集成。

### 所需材料

<table align="center">
 <tr>
     <th>Material</th>
 </tr>
    <tr>
     <td align="center"><div align="center"><img width ="130" src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png"/></div></td>
 </tr>
 <tr>
     <td align="center"><a href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html"><strong>点击购买</strong></a></td>
 </tr>
</table>

### 初步准备

本教程中的所有过程和步骤都是基于XIAO ESP32C3完成的。在准备阶段，我们首先需要完成使用XIAO ESP32C3的环境配置。

**步骤 1.**通过USB Type-C数据线将XIAO ESP32C3连接到计算机.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/cable-connect.png" alt="pir" width="120" height="auto"/></div>

**步骤  2.** 根据您的操作系统下载并安装最新版本的Arduino IDE

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/software"><img src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" alt="pir" width="600" height="auto"/></a></p>

**步骤  3.** 启动Arduino应用程序。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

- **步骤  4.** 将ESP32板包添加到您的Arduino IDE中

导航到 **File > Preferences**, 并使用以下URL填充 **"Additional Boards Manager URLs"** 
*<https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_dev_index.json>*

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/4.png"/></div>

导航到 **工具>板>板管理器…**, 在搜索框中输入关键字 "**esp32**" 选择最新版本 ****esp32****, 并安装。

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/add_esp32c3.png" alt="pir" width="650" height="auto"/></div>

- **步骤 5.** 选择你的板和端口。

导航到 **Tools > Board > ESP32 Arduino** 并选择 "**XIAO_ESP32C3**"。 板的列表有点长，你需要滚动到底部才能到达它。

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeed-Studio-XIAO-ESP32/XIAO_ESP32_board.png" alt="pir" width="800" height="auto"/></div>

切换到 **Tools > Port** 选择连接的XIAO ESP32C3的串口名称。这可能是COM3或更高 (**COM1** 和**COM2** 通常留给硬件串口)。

## 配置XIAO ESP32C3接入网络

[XIAO ESP32C3 tutorial on using WiFi](https://wiki.seeedstudio.com/XIAO_ESP32C3_WiFi_Usage/#connect-to-a-wifi-network)中详细描述了WiFi的使用。

当ESP32被设置为Wi-Fi站时，它可以连接到其他网络(如你的路由器)。在这种情况下，路由器为您的ESP板分配一个唯一的IP地址。


要使用ESP32 Wi-Fi功能，你需要做的第一件事是在代码中包含WiFi.h库，如下所示:

```c
#include <WiFi.h>
```

ESP32连接到特定的Wi-Fi网络时，需要知道SSID和密码。此外，该网络必须在ESP32 Wi-Fi范围内。


首先，设置Wi-Fi模式。如果ESP32将连接到另一个网络(接入点/热点)，它必须是站模式。
```c
WiFi.mode(WIFI_STA);
```

然后，使用`WiFi.begin()`连接网络。您必须将网络SSID和密码作为参数传递。


连接到Wi-Fi网络可能需要一段时间，所以我们通常添加一个while循环，通过使用`WiFi.status()`来不断检查连接是否已经建立。当连接成功建立后，它返回`WL_CONNECTED`。


当ESP32被设置为Wi-Fi站时，它可以连接到其他网络(如你的路由器)。在这种情况下，路由器为您的ESP32板分配一个唯一的IP地址。要获取板的IP地址，你需要在与网络建立连接后调用`WiFi.localIP()`。
```c
void WiFiConnect(void){
    WiFi.begin(ssid, password);
    Serial.print("Connecting to ");
    Serial.println(ssid);

    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }

    Serial.println("");
    Serial.println("WiFi connected!");
    Serial.print("IP address: ");
    Serial.println(WiFi.localIP());
}
```

`ssid`和`password`变量保存了你想要连接的网络的ssid和密码。

```c
// Replace with your network credentials
const char* ssid = "REPLACE_WITH_YOUR_SSID";
const char* password = "REPLACE_WITH_YOUR_PASSWORD";
```

这是一个非常简单的WiFi连接程序，将程序上传到XIAO ESP32C3，然后打开串口助手，将波特率设置为115200。如果连接正常，可以看到XIAO的IP地址。

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/5.png"/></div>

如果您有兴趣阅读有关WiFi中的ESP32C3应用程序和功能的更多信息，我们建议阅读<a href="https://randomnerdtutorials.com/esp32-useful-wi- fi-functions-arduino/">ESP32有用的Wi-Fi库函数</a>。

## 构建嵌入式web页面

ESP32在wi - fi库中集成了许多非常有用的WiFiClient函数，它允许我们设计和开发嵌入式网页而无需添加额外的库。


创建一个新的WiFiServer对象，以便使用该对象来控制已建立的XIAO ESP32C3物联网服务器。
```c
WiFiServer server(80);
WiFiClient client1;
```

在上面的步骤中，我们让XIAO ESP32C3连接WiFi。WiFi连接成功后，就可以从串口监视器上获取XIAO的当前IP地址。此时，XIAO已经成功地设置好了web服务器。您可以通过XIAO的IP地址访问此web服务器。


假设你的XIAO ESP32C3的IP地址是' 192.168.7.152 '。然后你就可以通过浏览器输入这个IP地址了。


输入这个IP地址后，我们可能只能看到一个空白页。这是因为我们还没有发布该页面的页面内容。

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/6.png"/></div>

现在让我们用C语言创建一个数组来存储我们想要布局的页面内容，也就是HTML代码。
```c
const char html_page[] PROGMEM = {
    "HTTP/1.1 200 OK\r\n"
    "Content-Type: text/html\r\n"
    "Connection: close\r\n"  // the connection will be closed after completion of the response
    //"Refresh: 1\r\n"         // refresh the page automatically every n sec
    "\r\n"
    "<!DOCTYPE HTML>\r\n"
    "<html>\r\n"
    "<head>\r\n"
      "<meta charset=\"UTF-8\">\r\n"
      "<title>Cloud Printer: ChatGPT</title>\r\n"
      "<link rel=\"icon\" href=\"https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/chatgpt-logo.png\" type=\"image/x-icon\">\r\n"
    "</head>\r\n"
    "<body>\r\n"
    "<img alt=\"SEEED\" src=\"https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/logo.png\" height=\"100\" width=\"410\">\r\n"
    "<p style=\"text-align:center;\">\r\n"
    "<img alt=\"ChatGPT\" src=\"https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/chatgpt-logo.png\" height=\"200\" width=\"200\">\r\n"
    "<h1 align=\"center\">Cloud Printer</h1>\r\n" 
    "<h1 align=\"center\">OpenAI ChatGPT</h1>\r\n" 
    "<div style=\"text-align:center;vertical-align:middle;\">"
    "<form action=\"/\" method=\"post\">"
    "<input type=\"text\" placeholder=\"Please enter your question\" size=\"35\" name=\"chatgpttext\" required=\"required\"/>\r\n"
    "<input type=\"submit\" value=\"Submit\" style=\"height:30px; width:80px;\"/>"
    "</form>"
    "</div>"
    "</p>\r\n"
    "</body>\r\n"
    "<html>\r\n"
};
```

这段代码为我们提供了如下图所示的页面效果。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/7.png"/></div>

:::提示
网页的HTML语法超出了本教程的范围。您可以自己学习使用HTML，或者，我们可以使用现有的生成工具来完成代码生成工作。我们推荐使用[HTML生成器](https://webcode.tools/generators/html)。

值得注意的是，在C程序中，"\\"和""是特殊字符，如果你想在程序中保留这些特殊字符的功能，就需要在它们前面添加一个右斜杠。
:::

Client1是指建立web服务器后的Socket客户端，下面的代码是web服务器的处理流程。

```c
client1 = server.available();
if (client1){
    Serial.println("New Client.");           // print a message out the serial port
    // an http request ends with a blank line
    boolean currentLineIsBlank = true;    
    while (client1.connected()){
        if (client1.available()){  // Check if the client is connected
            char c = client1.read();
            json_String += c;
            if (c == '\n' && currentLineIsBlank) {                                 
                dataStr = json_String.substring(0, 4);
                Serial.println(dataStr);
                if(dataStr == "GET "){
                    client1.print(html_page);  //Send the response body to the client
                }         
                else if(dataStr == "POST"){
                    json_String = "";
                    while(client1.available()){
                        json_String += (char)client1.read();
                    }
                    Serial.println(json_String); 
                    dataStart = json_String.indexOf("chatgpttext=") + strlen("chatgpttext=");
                    chatgpt_Q = json_String.substring(dataStart, json_String.length());                    
                    client1.print(html_page);        
                    // close the connection:
                    delay(10);
                    client1.stop();       
                }
                json_String = "";
                break;
            }
            if (c == '\n') {
                // you're starting a new line
                currentLineIsBlank = true;
            }
            else if (c != '\r') {
                // you've gotten a character on the current line
                currentLineIsBlank = false;
            }
        }
    }
}
```

在上面的示例程序中，我们需要使用`server.begin()`来启动物联网服务器。这条语句需要放在`setup`函数中。

```c
void setup()
{
    Serial.begin(115200);
 
    // Set WiFi to station mode and disconnect from an AP if it was previously connected
    WiFi.mode(WIFI_STA);
    WiFi.disconnect();
    while(!Serial);

    Serial.println("WiFi Setup done!");
    WiFiConnect();

    // Start the TCP server server
    server.begin();
}
```

运行上述程序，并在浏览器中输入XIAO ESP32C3的IP地址(前提是您的主机也需要与XIAO ESP32C3在同一局域网中)，然后将开始执行WiFiClient的GET步骤。此时，借助客户端print方法，我们提交了页面的HTML代码。

```c
if(dataStr == "GET "){
    client1.print(html_page);
}
```

并且，我们在页面中设计了用于问题输入的输入框，在用户输入内容并点击**提交**按钮后，网页将获得按钮的状态并将输入的问题存储在字符串变量`chatgpt_Q`中。

```c
json_String = "";
while(client1.available()){
    json_String += (char)client1.read();
}
Serial.println(json_String); 
dataStart = json_String.indexOf("chatgpttext=") + strlen("chatgpttext=");
chatgpt_Q = json_String.substring(dataStart, json_String.length());                    
client1.print(html_page);        
// close the connection:
delay(10);
client1.stop();      
```

运行效果如下所示。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/15.png"/></div>

## 通过内置网页提交问题
在上述步骤的页面中，有一个输入框。输入框是我们需要用户输入他们想问的问题的地方。我们需要做的就是获取这个问题，并通过OpenAI提供的API请求将其发送出去。

**步骤 1.** 注册一个OpenAI账户。

你可以点击[这里](https://beta.openai.com/signup)访问OpenAI的注册地址。如果您之前已经注册了它的帐户，那么您可以跳过这一步。

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/8.png"/></div>

**步骤 2.** 获取OpenAI API。

登录[OpenAI网站](https://platform.openai.com/overview)，点击右上角的账户头像，然后选择**查看API密钥**。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/9.png"/></div>

在新的弹出页面中选择 **+Create new secret key**,然后复制您的密钥并保存它。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/10.png"/></div>

与此同时，我们可以在程序中创建字符串变量，并将这个键复制到这里。
```c
char chatgpt_token[] = "sk**********Rj9DYiXLJJH";
```

:::提示
截至2023年2月15日，OpenAI将向每个新用户免费赠送价值**18美元**的积分。详细的费率可以在OpenAI的[文档](https://openai.com/api/pricing/)中找到。

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/11.png"/></div>
:::

**步骤  3.** 根据OpenAI的HTTP请求编写程序。

OpenAI提供了非常详细的[API使用说明](https://platform.openai.com/docs/api-reference/making-requests)，以便用户可以使用他们自己的API密钥来调用ChatGPT。

根据ChatGPT的文档，我们需要发送的请求格式如下:

```shell
curl https://api.openai.com/v1/completions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR_API_KEY" \
-d '{"model": "text-davinci-003", "prompt": "Say this is a test", "temperature": 0, "max_tokens": 7}'
```

超文本传输协议(HTTP)作为客户端和服务器之间的请求-响应协议工作。

**GET**用于从指定资源请求数据。它通常用于从api中获取值。

**POST**用于向服务器发送数据以创建/更新资源。

ESP32可以使用三种不同类型的body请求来发起HTTP POST请求:URL编码，JSON对象或纯文本。这些是最常见的方法，应该与大多数api或web服务集成。


以上信息非常重要，为编写HTTP POST程序提供了理论依据。首先，我们导入HTTPClient库。
```c
#include <HTTPClient.h>
```

你还需要输入OpenAI域名，因此ESP会将问题发布给ChatGPT。不要忘记OpenAI API密钥。

```c
HTTPClient https;

const char* chatgpt_token = "YOUR_API_KEY";
char chatgpt_server[] = "https://api.openai.com/v1/completions";
```

我们需要使用JSON对象发起一个HTTP POST请求。

```c
if (https.begin(chatgpt_server)) {  // HTTPS
    https.addHeader("Content-Type", "application/json"); 
    String token_key = String("Bearer ") + chatgpt_token;
    https.addHeader("Authorization", token_key);
    String payload = String("{\"model\": \"text-davinci-003\", \"prompt\": \"") + chatgpt_Q + String("\", \"temperature\": 0, \"max_tokens\": 100}"); //Instead of TEXT as Payload, can be JSON as Paylaod
    httpCode = https.POST(payload);   // start connection and send HTTP header
    payload = "";
}
else {
    Serial.println("[HTTPS] Unable to connect");
    delay(1000);
}
```

在程序中，我们通过`POST()`方法将`payload`发送给服务器。`chatgpt_Q`是我们要发送给ChatGPT的问题的内容，可以在Get question页面中找到。

如果您对ESP32C3 HTTPClient的更多功能感兴趣，我们建议您阅读[带Arduino IDE的ESP32 HTTP GET和HTTP POST](https://randomnerdtutorials.com/esp32-http-get-post-arduino/)。

## 从ChatGPT中获取答案

下一步是整个教程的最后一步，我们如何获取ChatGPT的答案并记录它。

让我们继续阅读OpenAI提供的[API文档](https://platform.openai.com/docs/api-reference/making-requests)，以了解ChatGPT返回的消息内容的结构是什么样的。这将允许我们编写程序来解析我们需要的内容。

```shell
{
    "id": "cmpl-GERzeJQ4lvqPk8SkZu4XMIuR",
    "object": "text_completion",
    "created": 1586839808,
    "model": "text-davinci:003",
    "choices": [
        {
            "text": "\n\nThis is indeed a test",
            "index": 0,
            "logprobs": null,
            "finish_reason": "length"
        }
    ],
    "usage": {
        "prompt_tokens": 5,
        "completion_tokens": 7,
        "total_tokens": 12
    }
}
```

从OpenAI提供的参考文档中，我们知道接口返回的消息中问题的答案在`{"choices": [{"text": "\n\nxxxxxxx"，}]}`中。

所以现在我们可以确定，我们需要的“答案”应该以**\n\n**开始，以**，**结束。然后，在程序中，我们可以使用`indexOf()`方法获取文本开始和结束的位置，并存储返回的答案的内容。

```c
dataStart = payload.indexOf("\\n\\n") + strlen("\\n\\n");
dataEnd = payload.indexOf("\",\"", dataStart); 
chatgpt_A = payload.substring(dataStart, dataEnd);
```

总而言之，我们可以使用switch方法结合程序的当前状态来确定应该执行程序的哪一步。

```c
typedef enum 
{
  do_webserver_index,
  send_chatgpt_request,
  get_chatgpt_list,
}STATE_;

STATE_ currentState;

switch(currentState){
    case do_webserver_index:
        ...
    case send_chatgpt_request:
        ...
    case get_chatgpt_list:
        ...
}
```

在这一点上，整个程序的逻辑是结构化的。点击下图可以获得完整的程序代码。请不要急于上传程序，你需要将程序的**ssid、密码和chatgpt_token**更改为你自己的。

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/xiaoesp32c3-chatgpt" target="_blank"><div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></div></a></p>

然后，随意使用它!

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/16.gif"/></div>

## 接下来是什么?

在本教程中，我们提供了在Arduino - XIAO ESP32C3这样的嵌入式开发板上使用ChatGPT调用OpenAI接口的基本方法。接下来，你可以尽情发挥你的创造力了!


例如，你是否可以考虑添加一个屏幕或键盘，使他成为一个只适用于你的独立显示设备?来看看加文的创意，他做了一个特别有趣的监控装置!我们还要特别感谢他为本教程提供必要的步骤和想法。

- [Gavin - ChatGPT录音机和监视器](https://www.hackster.io/gavinchiong/chatgpt-recorder-monitor-601ef6)

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/14.jpg"/></div>

或者更进一步，添加一个语音识别模块，从现在开始摆脱键盘和鼠标，制作一个自己的语音助手，等等。总而言之，我们很乐意看到您分享您的工作与XIAO ESP32C3这样的伟大产品!

## 故障排除

### 问题1: 使用地理位置或网络，通过使用XIAO ESP32C3调用OpenAI API来获得答案，是否有任何限制?

> 答:截至2023年2月17日测试，中国大陆的作者和使用中国网络的作者也可以非常顺利地获得ChatGPT回复，目前没有任何限制。只要我们能得到OpenAI API的密钥，调用就会顺利完成

### 问题2: 为什么我得到超时错误返回?

>答:这可能是因为ChatGPT等待太长时间来回复消息，这可能会导致程序错误地认为它没有响应。

## 技术支持和产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺利。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
