---
name: WiFi Serial Transceiver Module
category: MakerPro
bzurl: https://www.seeedstudio.com/WiFi-Serial-Transceiver-Module-w-ESP8266-p-1994.html
oldwikiname: WiFi Serial Transceiver Module
prodimagename: WiFi%20Serial%20Transceiver%20Module.jpg
surveyurl: https://www.research.net/r/WiFi_Serial_Transceiver_Module
sku: 114990085
---
![](https://github.com/SeeedDocument/WiFi_Serial_Transceiver_Module/raw/master/img/WiFi%20Serial%20Transceiver%20Module.jpg)

In this tutorial, we'll use a seeeduino to control the ESP8266 WiFi module to request a static page from the internet. This is a basic use of TCP socket, for other usage, please refer to the AT command guide of the module.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/WiFi-Serial-Transceiver-Module-w-ESP8266-p-1994.html)

**Material list:**

- [Seeeduino V3](https://www.seeedstudio.com/Seeeduino-V30-Atmega-328P-p-669.html) / Arduino Uno
- [ESP8266 Serial WiFi module](http://www.seeedstudio.com/depot/WiFi-Serial-Transceiver-Module-w-ESP8266-p-1994.html)
- [UartSBee v4](https://www.seeedstudio.com/UartSBee-V4-p-688.html) / other USB to TTL converter

!!!Note
    We used a software serial to print some debugging information as there’s only one hardware serial on seeeduino board. But the limitation of software serial is that it can’t communicate in a higher baud rate than 19200. So part of the output from ESP module will be dropped because the baud rate 57600 of ESP module is higher than that of the software serial. If you have a board with more than one hardware serial (e.g. Arduino Mega 2560), the case will be easier.

## Step-By-Step
---
- **Step 1**: connect module as the following picture

![](https://github.com/SeeedDocument/WiFi_Serial_Transceiver_Module/raw/master/img/Wifi_connection.jpg)

- **Step 2**: Programe the seeeduino board.

   - Open Arduino IDE and create a new sketch;
   - Parse the following code into the sketch editor (need modifying the SSID and PASS macros into your own situation);

```c
#include <SoftwareSerial.h>
   #define SSID "xxxxxxxx"
   #define PASS "xxxxxxxx"
   #define DST_IP "220.181.111.85" //baidu.com
   SoftwareSerial dbgSerial(10, 11); // RX, TX
   void setup()
   {
     // Open serial communications and wait for port to open:
     Serial.begin(57600);
     Serial.setTimeout(5000);
     dbgSerial.begin(9600); //can't be faster than 19200 for softserial
     dbgSerial.println("ESP8266 Demo");
     //test if the module is ready
     Serial.println("AT+RST");
     delay(1000);
     if(Serial.find("ready"))
     {
       dbgSerial.println("Module is ready");
     }
     else
     {
       dbgSerial.println("Module have no response.");
       while(1);
     }
     delay(1000);
     //connect to the wifi
     boolean connected=false;
     for(int i=0;i<5;i++)
     {
       if(connectWiFi())
       {
         connected = true;
         break;
       }
     }
     if (!connected){while(1);}
     delay(5000);
     //print the ip addr
     /*Serial.println("AT+CIFSR");
     dbgSerial.println("ip address:");
     while (Serial.available())
     dbgSerial.write(Serial.read());*/
     //set the single connection mode
     Serial.println("AT+CIPMUX=0");
   }
   void loop()
   {
     String cmd = "AT+CIPSTART=\"TCP\",\"";
     cmd += DST_IP;
     cmd += "\",80";
     Serial.println(cmd);
     dbgSerial.println(cmd);
     if(Serial.find("Error")) return;
     cmd = "GET / HTTP/1.0\r\n\r\n";
     Serial.print("AT+CIPSEND=");
     Serial.println(cmd.length());
     if(Serial.find(">"))
     {
       dbgSerial.print(">");
       }else
       {
         Serial.println("AT+CIPCLOSE");
         dbgSerial.println("connect timeout");
         delay(1000);
         return;
       }
       Serial.print(cmd);
       delay(2000);
       //Serial.find("+IPD");
       while (Serial.available())
       {
         char c = Serial.read();
         dbgSerial.write(c);
         if(c=='\r') dbgSerial.print('\n');
       }
       dbgSerial.println("====");
       delay(1000);
     }
     boolean connectWiFi()
     {
       Serial.println("AT+CWMODE=1");
       String cmd="AT+CWJAP=\"";
       cmd+=SSID;
       cmd+="\",\"";
       cmd+=PASS;
       cmd+="\"";
       dbgSerial.println(cmd);
       Serial.println(cmd);
       delay(2000);
       if(Serial.find("OK"))
       {
         dbgSerial.println("OK, Connected to WiFi.");
         return true;
         }else
         {
           dbgSerial.println("Can not connect to the WiFi.");
           return false;
         }
       }
```

- **Step 3**: Open Serial Monitor and press the reset button of seeeduino board, you’ll see the output.

At last, Happy Hakcing! :)

## Related Projects
---
[Recipe Community](http://www.seeedstudio.com/recipe/) is an awesome place where makers share their amazing works here. Our makers have made a lot of awesome projects with esp8266, check this out!

**WiFi Scanner -Know the WiFi Signal around you**

![](https://github.com/SeeedDocument/WiFi_Serial_Transceiver_Module/raw/master/img/Recipe-WiFi_Scanner-Know_the_WiFi_Signal_around_you.jpg)

Build your own Wifi Scanner with few simple steps, all you need to do is prepare:

- A NodeMcu Dev. Board
- An I2C OLED.
- Some cables
- And most importantly, a HOT HEART ON ESP8266

[So, why not make one for yourself?](https://community.seeedstudio.com/project_detail.html?id=220)


**Primary IoT Make with NodeMcu >ESP8266<**

![](https://github.com/SeeedDocument/WiFi_Serial_Transceiver_Module/raw/master/img/Recipe-Primary_IoT_Make_with_NodeMcu--ESP8266--.jpg)

An online Temperature&Humidity Monitor made with:

- A NodeMcu Dev. Board
- Grove - Temp&Humi Sensor
- Some cables



Another easy trick, [why not make one for yourself?](https://community.seeedstudio.com/project_detail.html?id=232)

Na, not enough? More [Awesome Projects with ESP8266](https://community.seeedstudio.com/discover.html?t=wio).

Even more Awesome Projects On [Recipe](https://community.seeedstudio.com/projects.html#recipe)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>