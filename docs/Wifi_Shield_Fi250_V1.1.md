---
name: Wifi Shield (Fi250) V1.1
category: Shield
bzurl: https://www.seeedstudio.com/Wifi-Shield-(Fi250)-V1.1-p-2449.html
oldwikiname:  Wifi Shield (Fi250) V1.1
prodimagename:  Fi250_board1.jpg
surveyurl: https://www.research.net/r/Wifi_Shield_Fi250_V1_1
sku:    103030027
---

![](https://github.com/SeeedDocument/Wifi_Shield_Fi250_V1.1/raw/master/img/Fi250_board1.jpg)

Wifi Shield (Fi250) V1.1 is a economic internet solution with Arduino. The Wi-Fi module support IEEE 802.11b/g/n mode, maximum speed up to 65Mbit/s. Wifi Shield (Fi250) V1.1 combine on board antenna; it’s easy to build you project in a small box. The module reserve a UFL connector, you can use an extra antenna to improve the signal range. There is a key on the board, just push one time to change wifi shield as AP mode. The module have a computer interface software, you can control and upgrade the module via USB-UART convertor.
The wifi shield contain a Micro SD card socket, it’s like a recorder when wifi shield working as TCP, UDP server.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Wifi-Shield-(Fi250)-V1.1-p-2449.html)


##   Specifications
---
<table  cellpadding="1" cellspacing="1" width="555">
<tr>
<td> Module
</td>
<td>WIZnet FI250
</td></tr>
<tr>
<td> Operating Voltage
</td>
<td> 5V or 3.3V (Auto select)
</td></tr>
<tr>
<td> Current
</td>
<td> 300mA (maximum)
</td></tr>
<tr>
<td>Single band
</td>
<td>2.4GHz IEEE 802.11b/g/n
</td></tr>
<tr>
<td>Antenna
</td>
<td>On board PCB antenna (reserver UFL connector)
</td></tr>
<tr>
<td>Memory
</td>
<td>1MB Flash Memory, 128KB SRAM, 1MB Serial Flash
</td></tr>
<tr>
<td>Interface
</td>
<td>UART(default)/SPI(upgrade firmware)
</td></tr>
<tr>
<td>Dimensions
</td>
<td>69.0x53.5x23.5 mm
</td></tr>
<tr>
<td>Weight
</td>
<td>
</td></tr></table>

## Compatibility

We have produced a lot of extension board that can make your platform board more powerful, however not every extension board is compatible with all the platform board, here we use a table to illustrate how are those boards compatible with platform board.

!!!note
    Please note that "Not recommended" means that it might have chance to work with the platform board however requires extra work such as jump wires or rewriting the code. If you are interested in digging more, welcome to contact with techsupport@seeed.cc.

**Click to see full picture**
[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/Shield%20Compatibility.png)](https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/Shield%20Compatibility.png)

##   Usage
---
The demo we use a Arduino Leonardo, we suggest you use a hardware serial port, software is not fast enough to communicate with the Wifi module.

![](https://github.com/SeeedDocument/Wifi_Shield_Fi250_V1.1/raw/master/img/Fi250_board.jpg)

###  TCP Client

Install Wifi Shield (Fi250) library, download demo code Wizfi250_Client.
```
/*
//This demo use Arduino Leonardo or Seeeduino Lite. The jumper connect D0-WIFI_TX, D1_WIFI_RX; Let the boot pin not connect
*/
#include <Arduino.h>
#include "WizFi250.h"

#define SSID      "STEST" //Set your SSID
#define KEY       "87654321" //Set your phrase
#define AUTH       "WPA2" // Set the encrypt type


#define  HOST_IP       "192.168.168.185" //Set the TCP Server IP
#define  REMOTE_PORT    9090 //Set the port
#define LOCAL_PORT      1234  //Set the port

#define spi_CS  8

WizFi250 wizfi250(&Serial1);
boolean returnValue=false;
void setup() {

    Serial.begin(115200);
    Serial1.begin(115200);
    while (!Serial);
    pinMode(spi_CS,OUTPUT);
    Serial.println("--------- WIZFI250 TEST --------");
    // wait for initilization of Wizfi250
    delay(1000);
    Serial.println("Join " SSID );
    wizfi250.reset();
    delay(1000);
    wizfi250.sendCommand("AT+WLEAVE\r");
    delay(1000);
    if (!wizfi250.join(SSID, KEY, AUTH)) {
        Serial.println("Failed join " SSID);
        Serial.println("Please Restart");
    } else {

        Serial.println("Successfully join " SSID);
        wizfi250.sendCommand("AT+WSTAT\r");
        delay(5);
        char c;
        while(wizfi250.receive((uint8_t *)&c, 1, 100) > 0) {
            Serial.print((char)c);
        }
        delay(2000);
        returnValue=wizfi250.connect(HOST_IP,REMOTE_PORT,LOCAL_PORT);
        if(returnValue)
        Serial.println("Now you can send data to Server or receive data from Server!");
    }
}
void loop() {
    if(wizfi250.available()) {
        Serial.print((char)wizfi250.read());
    }
    if(Serial.available()) {
        wizfi250.print((char)Serial.read());
    }
}
```


![](https://github.com/SeeedDocument/Wifi_Shield_Fi250_V1.1/raw/master/img/FI_250_client.bmp)

![](https://github.com/SeeedDocument/Wifi_Shield_Fi250_V1.1/raw/master/img/FI_250_client_arduino.png)

###  Http Connect

Install Wifi Shield (Fi250) library, download demo code Wizfi250_http.

```
/*
//This demo use Arduino Leonardo or Seeeduino Lite. The jumper connect D0-WIFI_TX, D1_WIFI_RX; Let the boot pin not connect
*/
#include <Arduino.h>
#include <SoftwareSerial.h>
#include "WizFi250.h"

#define SSID      "STEST"   //Set your SSID
#define KEY       "87654321" //Set your phrase
#define AUTH       "WPA2" //Set the encrypt type

#define TSN_HOST_IP        "74.125.128.103" //google.com server
//#define TSN_HOST_IP        "115.239.210.26" //baidu.com server
//#define TSN_HOST_IP      "192.168.1.254"      // broadcast
#define TSN_REMOTE_PORT    80
#define LOCAL_PORT     9000

#define spi_CS  8

//SoftwareSerial sprintSerial(4,5);   // The software serial port is not stable.
WizFi250 wizfi250(&Serial1);
void setup() {

    Serial.begin(115200);
    Serial1.begin(115200);
    while (!Serial);
    pinMode(spi_CS,OUTPUT);
    digitalWrite(spi_CS,HIGH);
    Serial.println("--------- WIZFI250 TEST --------");
    // wait for initilization of Wizfi250
    delay(1000);
    Serial.println("Join " SSID );
    delay(10);
    if (!wizfi250.join(SSID, KEY, AUTH)) {
        Serial.println("Failed join " SSID);
    } else {
        Serial.println("Successfully join  "  SSID);

        wizfi250.clear();

        wizfi250.connect(TSN_HOST_IP,TSN_REMOTE_PORT,LOCAL_PORT);
        delay(10);
        wizfi250.send("GET / HTTP/1.1\r\n\r\n");
    }
    char c;
    for(int i=0;i<320;i++){
        if (wizfi250.receive((uint8_t *)&c, 1, 100) > 0) {
            Serial.print((char)c);
        }
    }
}
void loop() {
    while (wizfi250.available()) {
        Serial.write(wizfi250.read());
    }
    while (Serial.available()) {
        wizfi250.write(Serial.read());
    }
}
```

![](https://github.com/SeeedDocument/Wifi_Shield_Fi250_V1.1/raw/master/img/FI_250_HTTP.jpg)

###  Reset the module

*   If you need to reset the module as factory default. press the function three times as fast speed. The MODE and WIF LED flash, wait the module reset.

*   If the module reset as default, the baud rate change to 115200. kindly note that.

![](https://github.com/SeeedDocument/Wifi_Shield_Fi250_V1.1/raw/master/img/Fi250_reset.png)

###  One press set AP mode

*   It's easy to enter AP mode. Press the Function button, wait the WIFI LED change as red. You can scan the wifi signal, WizFi250_AP_*******

*   Press the wifi shield Fi250 reset button exit AP mode.

![](https://github.com/SeeedDocument/Wifi_Shield_Fi250_V1.1/raw/master/img/FI2350_AP.png)

![](https://github.com/SeeedDocument/Wifi_Shield_Fi250_V1.1/raw/master/img/FI250APshow.png)

###   Upgrade firmware

The step for upgrade F/W show as below: <big>Connect your wifi shield(Fi250) via UART directly,you can use a UartSBee or other UART tools</big>

Before upgrade your F/W, you may set the module to Program mode (short BOOT jumper pin)  <big>[wizfi250firmware](http://wizwiki.net/wiki/doku.php?id=products:wizfi250:wizfi250firmware:start)</big>

![](https://github.com/SeeedDocument/Wifi_Shield_Fi250_V1.1/raw/master/img/Fi250_update_firmware副本.png)

1st action

![](https://github.com/SeeedDocument/Wifi_Shield_Fi250_V1.1/raw/master/img/WizFi250_firmware1.png)

2nd action

![](https://github.com/SeeedDocument/Wifi_Shield_Fi250_V1.1/raw/master/img/WizFi250_firmware2.png)

3nd action

![](https://github.com/SeeedDocument/Wifi_Shield_Fi250_V1.1/raw/master/img/WizFi250_firmware3.png)

*   When you update successful, move the jumper and restart the module.

##   Resources
---
*   [Wifi_Shield_(Fi250)_V1.1_sch_pcb.zip ](https://github.com/SeeedDocument/Wifi_Shield_Fi250_V1.1/raw/master/res/Eagle_File_Wifi_Shield-Fi250-V1.1_sch_pcb.zip)

*   [Wizfi250_programmer_s_guide.pdf](https://github.com/SeeedDocument/Wifi_Shield_Fi250_V1.1/raw/master/res/Wizfi250_programmer_s_guide.pdf)

*   [Wizfi250_quick_start_guide.pdf](https://github.com/SeeedDocument/Wifi_Shield_Fi250_V1.1/raw/master/res/Wizfi250_quick_start_guide.pdf)

*   [Wizfi250_datasheet.pdf](https://github.com/SeeedDocument/Wifi_Shield_Fi250_V1.1/raw/master/res/Wizfi250_datasheet.pdf)

*   [Wizfi250 library](https://github.com/SeeedDocument/Wifi_Shield_Fi250_V1.1/raw/master/res/Wizfi250.zip)

*   [PDF_Wifi_Shield_(Fi250)_V1.1](https://github.com/SeeedDocument/Wifi_Shield_Fi250_V1.1/raw/master/res/Wifi_Shield-Fi250-V1.1.pdf)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>