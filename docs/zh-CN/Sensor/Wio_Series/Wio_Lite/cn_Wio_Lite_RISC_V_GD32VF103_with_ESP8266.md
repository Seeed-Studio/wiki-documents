---
title: Wio Lite RISC V GD32VF103 with ESP8266
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Wio_Lite_RISC_V_GD32VF103_with_ESP8266/
slug: /cn/Wio_Lite_RISC_V_GD32VF103_with_ESP8266
last_update:
  date: 01/11/2022
  author: gunengyu
---


<!-- ！[](https://files.seeedstudio.com/wiki/Wio-Lite-RISC-V-GD32VF103/img/%E4%BA%A7%E5%93%81%E6%8B%8D%E6%91%84%E6%A8%A1%E6%9D%BF_perspective-09.png) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Lite-RISC-V-GD32VF103/img/%E4%BA%A7%E5%93%81%E6%8B%8D%E6%91%84%E6%A8%A1%E6%9D%BF_perspective-09.png" alt="pir" width={600} height="auto" /></p>


Wio Lite RISC-V 是一款基于 GD32VF103 的羽毛形状因子 RISC-V 开发板，板载 ESP8266 Wio Core，同时具备 WiFi 功能。

 

GD32VF103CBT6 是基于芯来科技的蜂鸟内核。支持 RV32IMAC 指令集和 ECLIC 快速中断功能。内核功耗仅为传统 Cortex-M3 的 1/3。   

 

板载 ESP8266 WiFi 内核和锂电池充电电路使其成为完美的物联网控制板。该板背面还有一个 micro SD 插槽，可以扩展系统资源。 

 

同时，作为 Wio Lite 开发板，Wio Lite RISC-V 绝对可以与 [Grove Shield for Wio Lite](https://www.seeedstudio.com/Grove-Shield-for-Wio-Lite-p-4156.html) 配合使用。有了这个扩展板，[超过 200 种 Grove 传感器、执行器和显示器](https://www.seeedstudio.com/grove.html)都可以为您所用。例如，您可以选择任何您喜欢的 [grove OLED](https://www.seeedstudio.com/catalogsearch/result/?cat=&q=grove+OLED) 来制作可视化开发板。


<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Wio-Lite-RISC-V-GD32VF103-p-4293.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width={200} height={38} border={0} /></a></p>


## 特性

+ RISC-V MCU GD32VF103CBT6
+ ESP8266 WiFi Wio Core
+ 羽毛形状因子
+ JST2.0 锂电池接口
+ 板载 SD 插槽
+ USB Type C

## 硬件概述
![](https://files.seeedstudio.com/wiki/Wio-Lite-RISC-V-GD32VF103/img/hardware.png)

### 支持的平台


| PlatformIO                                                                                            | Arduino                                                                                             | Raspberry Pi                                                                                      |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/products/102991310/img/platformio-logo.png) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) |

## 开始使用

### 通过 PlatformIO 开始使用

#### 硬件

**所需材料**

+ [Wio Lite RISC-V (GD32VF103) - 带有 ESP8266](https://www.seeedstudio.com/Wio-Lite-RISC-V-GD32VF103-p-4293.html)
+ [USB 3.1 Type C 转 A 线缆](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A.html)

- **步骤 1** 使用 USB Type C 转 A 线缆连接 Wio Lite 和您的 PC，用于供电和下载串口。


#### 软件

:::note
	RISC-V GD32 已经支持带有 Arduino 框架的 PlatformIO IDE，但目前还不支持 Arduino IDE。
:::
- **步骤 1** 

设置 platformIO IDE，platformIO IDE 基于 Visual Studio Code。
下载 [Visual Studio Code](https://code.visualstudio.com/)。
点击"扩展"图标，您可以在 Visual Studio Code 的左侧找到它。


![](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki1.png)


在搜索引擎中输入"platformIO"来安装它。


![](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki2.png)

- **步骤 2**

打开 PlatformIO IDE 并点击"New project"创建项目。输入项目名称并选择 GD32VF103V-EVAL(Sipeed) 作为开发板。框架是 Arduino。点击"finish"。

- **步骤 3**

编辑您的 Arduino 框架代码，点击 Visual Studio Code 底部的编译按钮。


![](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki5.png)


- **步骤 4**

代码被编译为二进制文件。您可以使用 [DFU 工具](https://files.seeedstudio.com/wiki/GD32VF103/res/GD32_MCU_Dfu_Tool_V3.8.1.5784_1.rar) 将二进制文件下载到开发板。此外，您需要安装 DFU 固件，让开发板以 DFU 方式下载代码。DFU 固件与 [DFU 工具](https://files.seeedstudio.com/wiki/GD32VF103/res/GD32_MCU_Dfu_Tool_V3.8.1.5784_1.rar) 在同一文档中。

- **步骤 5**

在 Wio Lite 上按下复位按钮，同时将启动开关拨到左侧，安装 DFU 工具固件后，DFU 工具将识别您的开发板。


![](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki6.png)


现在将启动开关拨到右侧，找到您编译的二进制文件并将其下载到开发板的闪存中。点击"Leave DFU"让开发板断开与 DFU 工具的连接，您的代码就正确烧录到开发板中了。


### 通过网站控制板载用户 LED 的演示


#### 硬件

**所需材料**

+ [Wio Lite RISC-V (GD32VF103) - With ESP8266](https://www.seeedstudio.com/Wio-Lite-RISC-V-GD32VF103-p-4293.html)
+ 任何 USB 转 TTL 适配器，如 [UartSBee V5](https://www.seeedstudio.com/UartSBee-V5.html)
+ [USB 3.1 Type C to A Cable](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A.html)


- **步骤 1** 使用 USB 转 TTL 适配器连接 Wio Lite 的串口。（Wio Lite 的串口是引脚 PA9-TX。PA10-RX）
- **步骤 2** 使用另一个 USB 转 TTL 适配器连接 ESP8266 的串口（如果您想监控 ESP8266 的数据传输）
- **步骤 3** 使用 USB Type C 转 A 线缆连接 Wio Lite 和您的 PC，用于供电和下载串口。


#### 软件代码

```
#include <Arduino.h>
const bool printReply = true;
const char line[] = "-----\n\r";
int loopCount=0;
 
char html[50];
char command[20];
char reply[500]; // 通常你不会这样做
 
char ipAddress [20];
char LED[30];
int lenHtml = 0;
char temp[5];
 
void getReply(int wait)
{ 
    int tempPos = 0;
    long int time = millis();
    while( (time + wait) > millis())
    {   
        while(Serial1.available()>0)
        {   
            char c = Serial1.read(); 
            if (tempPos < 500) { reply[tempPos] = c; tempPos++;   }
        }
        reply[tempPos] = 0;
    } 
   
    if (printReply) { Serial.println( reply );  Serial.println(line);     }
}
void setup() 
{
  Serial.begin(115200);  //GD32的串口
  Serial1.begin(115200);  //ESP8266的串口
  pinMode(LED_BUILTIN, OUTPUT);
  
  delay(3000);

  Serial1.println("AT+CWQAP");
  getReply(2000);

  Serial1.println("AT+CWMODE=1");
  getReply(2000);

  Serial1.println("AT+CWJAP=\"Your WiFi SSID\",\"Password\""); // 添加你自己的wifi
  getReply(5000);

  Serial1.print("AT+CIFSR\r\n");
  getReply(2000);
  
   int len = strlen( reply ); 
      bool done=false;
      bool error = false;
      int pos = 0;
      while (!done)
      {
           if ( reply[pos] == 34) { done = true;} 
           pos++;
           if (pos > len) { done = true;  error = true;}
      }
 
      if (!error)
      {
            int buffpos = 0;
            done = false;
            while (!done)
            {
               if ( reply[pos] == 34 ) { done = true; }
               else { ipAddress[buffpos] = reply[pos];    buffpos++; pos++;   }
            }
            ipAddress[buffpos] = 0;
      }
      else { strcpy(ipAddress,"ERROR"); }


      Serial.println(ipAddress);

      Serial1.print("AT+CIPMUX=1\r\n");
      getReply( 1500 );

      Serial1.print("AT+CIPSERVER=1,80\r\n");
      getReply( 1500 );
      
      
}

void loop()
{
          if(Serial1.available()) // 检查ESP8266是否正在发送数据
        {
          // 这是+IPD回复 - 它相当长。
          // 通常你不需要将整个消息复制到变量中，你可以只复制到"HOST"
          // 或者你可以在读取串口时逐字符搜索数据。
        
          getReply( 2000 );      
 
 
          bool foundIPD = false;
          for (int i=0; i<strlen(reply); i++)
          {
               if (  (reply[i]=='I') && (reply[i+1]=='P') && (reply[i+2]=='D')   ) { foundIPD = true;    }
          }


 
 
          if ( foundIPD  )  
          {
 
              loopCount++;
              // Serial.print( "有一个请求。循环 = ");  Serial.println(loopCount); Serial.println(""); 

            bool LEDstate = false;
            int LEDstatepos = 0;
              for (int i=0; i<strlen(reply); i++)
              {
                   if (!LEDstate) // 只获取name的第一次出现
                   {
                         if ( (reply[i]=='L') &&  (reply[i+1]=='E')&&  (reply[i+2]=='D')&&  (reply[i+3]=='=')) 
                         { 
                             LEDstate = true;
                             LEDstatepos = i+4;
                           
                         }
                        
                   }     
              }

                  if (LEDstate)
              {
                    int tempPos = 0;
                    bool finishedCopying = false;
                    for (int i= LEDstatepos; i<strlen(reply); i++)
                    {
                         if ( (reply[i]==' ') && !finishedCopying )  { finishedCopying = true;   } 
                         if ( !finishedCopying )                     { LED[tempPos] = reply[i];   tempPos++; }
                    }              
                    //LED[tempPos] = 0;
              }
 
              if (LEDstate) { Serial.print( "LED状态 = ");  Serial.println(LED); Serial.println("");
                         
              } 
              else          { Serial.println( "格式不正确");   Serial.println("");           }
              
              Serial.println("111");
              Serial.println(LED);
              Serial.println("000");
                  if(strcmp(LED,"on")==0){digitalWrite(LED_BUILTIN, HIGH); }
                  if(strcmp(LED ,"off")==0){digitalWrite(LED_BUILTIN, LOW); }
            strcpy(html,"<html><head></head><body>");
            strcpy(command,"AT+CIPSEND=0,25\r\n");
            Serial1.print(command);
            getReply(2000);
            Serial1.print(html);
            getReply(2000);


            strcpy(html,"<h1>LED测试</h1>");
            strcpy(command,"AT+CIPSEND=0,17\r\n");
            Serial1.print(command); 
            getReply(2000);      
            Serial1.print(html);
            getReply(2000);

            strcpy(html,"<p>LED状态</p>");
            strcpy(command,"AT+CIPSEND=0,19\r\n");
            Serial1.print(command);  
            getReply(2000);     
            Serial1.print(html);
            getReply(2000);


            
                if (LEDstate)
             {
                  // 写入名称
                  strcpy(html,"<p>LED状态是 "); strcat(html, LED ); strcat(html,"</p>");
 
                  // 需要html的长度用于cipsend命令
                  lenHtml = strlen( html );
                  strcpy(command,"AT+CIPSEND=0,"); __itoa( lenHtml, temp, 10); strcat(command, temp); strcat(command, "\r\n");
                  Serial1.print(command);
                  getReply( 2000 );          
                  Serial1.print(html);
                  getReply( 2000 );                           
             }
 
 
              strcpy(html,"<form action=\""); strcat(html, ipAddress); strcat(html, "\" method=\"GET\">"); strcat(command, "\r\n");
 
              lenHtml = strlen( html );
              __itoa( lenHtml, temp, 10);
              strcpy(command,"AT+CIPSEND=0,"); 
              __itoa( lenHtml, temp, 10); 
              strcat(command, temp);  
              strcat(command, "\r\n");
 
              Serial1.print(command);
              getReply( 2000 );          
              Serial1.print(html);
              getReply( 2000 );          
 
              strcpy(html,"LED状态:<br><input type=\"text\" name=\"LED\">");
              strcpy(command,"AT+CIPSEND=0,43\r\n");
              Serial1.print(command);
              getReply( 2000 );
              Serial1.print(html);         
              getReply( 2000 );         
 
              strcpy(html,"<input type=\"submit\" value=\"提交\"></form>");
              strcpy(command,"AT+CIPSEND=0,43\r\n");
              Serial1.print(command);
              getReply( 2000 );       
              Serial1.print(html);
              getReply( 2000 );   
   
              
 
            strcpy(html,"</body></html>");
            strcpy(command,"AT+CIPSEND=0,14\r\n");
            Serial1.print(command);
            getReply( 2000 ); 
            Serial1.print(html);
            getReply( 2000 ); 

            Serial1.print( "AT+CIPCLOSE=0\r\n" );
            getReply( 1500 ); 
 
          } // if(espSerial.find("+IPD"))
      } //if(espSerial.available())
 
      for (int i=0; i<3 ;i++)
      {LED[i]=NULL;}
      delay (100);
 
      // 跳转到这里等待下一个请求。
}


```

- **步骤 1** 创建一个如上所示的 PlatformIO Arduino 框架，复制此代码并编译它。使用 DFU 工具将其下载到开发板上。


- **步骤 2** 使用串口助手如 Mobaxterm，设置正确的波特率和串口。

- **步骤 3** 按下复位按钮，您将在串口助手上看到打印的"AT command"。

- **步骤 4** 在打印"AT+CIPSERVER=1,80"后；为网站地址设置您的 ESP8266 的 IP 地址并打开它，在串口打印"AT+CIPCLOSE=0"后，您将看到一个控制板载 LED 的网站。


![](https://files.seeedstudio.com/products/102991310/img/wiki2.png)


- **步骤 5** 输入"on"或"off"并提交，板载用户 LED 将被打开或关闭。LED 的状态将在网站上打印。您的板载 LED 将跟随该状态。


![](https://files.seeedstudio.com/products/102991310/img/wiki3.png)


![](https://files.seeedstudio.com/products/102991310/img/wiki4.png)


## 资源

- **[PDF]** [GD32VF103_Datasheet_Rev1.0](https://files.seeedstudio.com/wiki/Bazaar_Document/GD32VF103_Datasheet_Rev1.0.pdf)
- **[PDF]** [GD32VF103_User_Manual_EN_V1.0](https://files.seeedstudio.com/wiki/Bazaar_Document/GD32VF103_User_Manual_EN_V1.0.pdf)
- **[Zip]** [DFU 工具](https://files.seeedstudio.com/wiki/GD32VF103/res/GD32_MCU_Dfu_Tool_V3.8.1.5784_1.rar)


## 技术支持与产品讨论
如果您有任何技术问题，请将问题提交到我们的[论坛](http://forum.seeedstudio.com/)。
感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>