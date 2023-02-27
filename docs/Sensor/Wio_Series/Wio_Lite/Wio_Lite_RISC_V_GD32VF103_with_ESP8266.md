---
title: Wio Lite RISC V GD32VF103 with ESP8266
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio_Lite_RISC_V_GD32VF103_with_ESP8266/
slug: /Wio_Lite_RISC_V_GD32VF103_with_ESP8266
last_update:
  date: 01/11/2022
  author: gunengyu
---


<!-- ！[](https://files.seeedstudio.com/wiki/Wio-Lite-RISC-V-GD32VF103/img/%E4%BA%A7%E5%93%81%E6%8B%8D%E6%91%84%E6%A8%A1%E6%9D%BF_perspective-09.png) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Lite-RISC-V-GD32VF103/img/%E4%BA%A7%E5%93%81%E6%8B%8D%E6%91%84%E6%A8%A1%E6%9D%BF_perspective-09.png" alt="pir" width={600} height="auto" /></p>


Wio Lite RISC-V is a  feather form factor RISC-V development board Based on GD32VF103, with the onboard ESP8266 Wio Core, it also features WiFi function. 

 

GD32VF103CBT6 is a Bumblebee core based on Nuclei System Technology. Support RV32IMAC instruction set and ECLIC fast interrupt function. Core power consumption is only 1/3 of that of traditional Cortex-M3.   

 

Onboard ESP8266 WiFi core and Lipo charging circuit make it a perfect IoT control board. There is also a micro SD slot at the backside of this board, which can expand system resources. 

 

Meanwhile, as a Wio Lite Board, Wio Lite RISC-V definitely can work with the [Grove Shield for Wio Lite](https://www.seeedstudio.com/Grove-Shield-for-Wio-Lite-p-4156.html). With this shield, [over 200 Grove sensors, actuators and displays](https://www.seeedstudio.com/grove.html) are all yours. For instance, you can choose whatever [grove OLED](https://www.seeedstudio.com/catalogsearch/result/?cat=&q=grove+OLED) you like to make it a visual development board.


<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Wio-Lite-RISC-V-GD32VF103-p-4293.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width={200} height={38} border={0} /></a></p>



## Features

+ RISC-V MCU GD32VF103CBT6
+ ESP8266 WiFi Wio Core
+ Feather form factor
+ JST2.0 Lipo Port
+ Onboard SD Slot
+ USB Type C

## Hardware Overview
![](https://files.seeedstudio.com/wiki/Wio-Lite-RISC-V-GD32VF103/img/hardware.png)

### Platform Supported


| PlatformIO                                                                                            | Arduino                                                                                             | Raspberry Pi                                                                                      |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/products/102991310/img/platformio-logo.png) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) |


## Getting Started

### Getting Started by PlatformIO

#### Hardware

**Materials required**

+ [Wio Lite RISC-V (GD32VF103) - With ESP8266](https://www.seeedstudio.com/Wio-Lite-RISC-V-GD32VF103-p-4293.html)
+ [USB 3.1 Type C to A Cable](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A.html)

- **Step 1** Connect the Wio Lite and your PC by USB Type C to A Cable for power and downloading serial port.


#### Software

:::note
	RISC-V GD32 has already supported PlatformIO IDE with Arduino framework, but has not supported Arduino IDE so far.
:::
- **Step 1** 

Set up the platformIO IDE, platformIO IDE is based on Visual Studio Code.
Download the [Visual Studio Code](https://code.visualstudio.com/).
Click the "Extensions" icon, you can find it on the left side of the Visual Studio Code.


![](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki1.png)


Type "platformIO" in the search engine to install it. 


![](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki2.png)

- **Step 2**

Open PlatformIO IDE and click "New project" to creat the project. Type the project name and choose GD32VF103V-EVAL(Sipeed) for the board. The framework is Arduino. click "finish".

- **Step 3**

Edit your code of Arduino framework, click compile botton at the bottom of the Visual Studio  Code.


![](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki5.png)


- **Step 4**

The code is compiled to a binary file. You can use [DFU tool](https://files.seeedstudio.com/wiki/GD32VF103/res/GD32_MCU_Dfu_Tool_V3.8.1.5784_1.rar) to download the binary file to the board. Besides you need to install the DFU firmware to let the board download the code in the way of DFU. The DFU firmware is in the same document of the [DFU tool](https://files.seeedstudio.com/wiki/GD32VF103/res/GD32_MCU_Dfu_Tool_V3.8.1.5784_1.rar).

- **Step 5**

Press reset botton on the Wio Lite with boot switch on the left and DFU tool will recognise your board after you install the DFU tool frameware.


![](https://files.seeedstudio.com/wiki/GD32VF103/img/wiki6.png)


Now turn the boot swich on the right, find your compiled binary file and downlard it to the flash of the board. click "Leave DFU" to let the board disconnect the DFU tool, and your code is correctly burned into your board. 



### Demo of controlling the on-board user LED by the website


#### Hardware

**Materials required**

+ [Wio Lite RISC-V (GD32VF103) - With ESP8266](https://www.seeedstudio.com/Wio-Lite-RISC-V-GD32VF103-p-4293.html)
+ Any USB to TTL adapter like [UartSBee V5](https://www.seeedstudio.com/UartSBee-V5.html)
+ [USB 3.1 Type C to A Cable](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A.html)


- **Step 1** Use the USB to TTL adapter to connect with the serial port of Wio Lite.(Wio Lite's Serial port is pin PA9-TX. PA10-RX)
- **Step 2** Use another USB to TTL adapter to connect with the serial port of ESP8266 (If you want to monitor the data transmission of ESP8266)
- **Step 3** Connect the Wio Lite and your PC by USB Type C to A Cable for power and downloading serial port.


#### Software code

```
#include <Arduino.h>
const bool printReply = true;
const char line[] = "-----\n\r";
int loopCount=0;
 
char html[50];
char command[20];
char reply[500]; // you wouldn't normally do this
 
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
  Serial.begin(115200);  //serial port of GD32
  Serial1.begin(115200);  //serial port of ESP8266
  pinMode(LED_BUILTIN, OUTPUT);
  
  delay(3000);

  Serial1.println("AT+CWQAP");
  getReply(2000);

  Serial1.println("AT+CWMODE=1");
  getReply(2000);

  Serial1.println("AT+CWJAP=\"Your WiFi SSID\",\"Password\""); // add your own wifi
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
          if(Serial1.available()) // check if the ESO8266 is sending data
        {
          // this is the +IPD reply - it is quite long. 
          // normally you would not need to copy the whole message in to a variable you can copy up to "HOST" only
          // or you can just search the data character by character as you read the serial port.
        
          getReply( 2000 );      
 
 
          bool foundIPD = false;
          for (int i=0; i<strlen(reply); i++)
          {
               if (  (reply[i]=='I') && (reply[i+1]=='P') && (reply[i+2]=='D')   ) { foundIPD = true;    }
          }


 
 
          if ( foundIPD  )  
          {
 
              loopCount++;
              // Serial.print( "Have a request.  Loop = ");  Serial.println(loopCount); Serial.println(""); 

            bool LEDstate = false;
            int LEDstatepos = 0;
              for (int i=0; i<strlen(reply); i++)
              {
                   if (!LEDstate) // just get the first occurrence of name
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
 
              if (LEDstate) { Serial.print( "LED state = ");  Serial.println(LED); Serial.println("");
                         
              } 
              else          { Serial.println( "format incorrect");   Serial.println("");           }
              
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


            strcpy(html,"<h1>LED Test</h1>");
            strcpy(command,"AT+CIPSEND=0,17\r\n");
            Serial1.print(command); 
            getReply(2000);      
            Serial1.print(html);
            getReply(2000);

            strcpy(html,"<p>LED Statment</p>");
            strcpy(command,"AT+CIPSEND=0,19\r\n");
            Serial1.print(command);  
            getReply(2000);     
            Serial1.print(html);
            getReply(2000);


            
                if (LEDstate)
             {
                  // write name
                  strcpy(html,"<p>LED state is "); strcat(html, LED ); strcat(html,"</p>");
 
                  // need the length of html for the cipsend command
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
 
              strcpy(html,"LEDstate:<br><input type=\"text\" name=\"LED\">");
              strcpy(command,"AT+CIPSEND=0,43\r\n");
              Serial1.print(command);
              getReply( 2000 );
              Serial1.print(html);         
              getReply( 2000 );         
 
              strcpy(html,"<input type=\"submit\" value=\"Submit\"></form>");
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
 
      // drop to here and wait for next request.
}



```

- **Step 1** Crate an PlatformIO Arduino framework like above, copy this code and compile it. Use the DFU tool to download it on the board.


- **Step 2** Use an Serial assistant like Mobaxterm, set the correct bundrate and the serial port. 

- **Step 3** Press reset button, you will see the "AT command" printed on the Serial assistant.

- **Step 4** After printing "AT+CIPSERVER=1,80"; Set your ip address of your ESP8266 for the website address and open it, you will see a website to control the on-board LED after the Serial prints "AT+CIPCLOSE=0".


![](https://files.seeedstudio.com/products/102991310/img/wiki2.png)


- **Step 5** Type "on" or "off" and submit, the on-board user LED will be turned on or off. And the statment of LED will be printed on the website. And your on-board LED will follow the statment.


![](https://files.seeedstudio.com/products/102991310/img/wiki3.png)



![](https://files.seeedstudio.com/products/102991310/img/wiki4.png)



## Resourse

- **[PDF]** [GD32VF103_Datasheet_Rev1.0](https://files.seeedstudio.com/wiki/Bazaar_Document/GD32VF103_Datasheet_Rev1.0.pdf)
- **[PDF]** [GD32VF103_User_Manual_EN_V1.0](https://files.seeedstudio.com/wiki/Bazaar_Document/GD32VF103_User_Manual_EN_V1.0.pdf)
- **[Zip]** [DFU Tool](https://files.seeedstudio.com/wiki/GD32VF103/res/GD32_MCU_Dfu_Tool_V3.8.1.5784_1.rar)


## Tech Support
 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/). 
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>

