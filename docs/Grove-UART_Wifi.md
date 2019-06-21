---
name: Grove - UART Wi-Fi
category: Communication
bzurl: https://www.seeedstudio.com/Grove-Uart-Wifi-p-2495.html
oldwikiname:
prodimagename: Grove-uart-wifi-01.jpg
surveyurl: https://www.surveymonkey.com/r/grove_uart_wifi
sku: 113020010
---


![enter image description here](https://github.com/SeeedDocument/Grove-Uart_Wifi/raw/master/img/main.jpg)

Grove - UART WiFi is a serial transceiver module featuring the ubiquitous ESP8266 IoT SoC. With integrated TCP/IP protocol stack, this module lets your micro-controller interact with WiFi networks with only a few lines of code. Each ESP8266 module comes pre-programmed with an AT command set firmware, meaning you can send simple text commands to control the device. The SoC features integrated WEP, WPA/WPA2, TKIP, AES, and WAPI engines, can act as an access point with DHCP, can join existing WiFi networks and has configurable MAC and IP addresses.


<p style=":center"><a href="https://www.seeedstudio.com/Grove-Uart-Wifi-p-2495.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>



## Version

| Parameter     | V1.0     |V2.0     |
| :------------- | :------------- |:------------- |
| Product Release Date       | 24th Jue 2016       |26th Mach 2018|
|WiFi Chip|ESP8266| ESP8285|
|Antenna Type| External |On-board|
|LEDs| 3 LEDs-Power/WiFi/AT Command|2 LEDs- Power/WiFi|
|Button|1 Button: <br>Short press to **Reset** <br>Long press to enter **UART boot mode**</br>|2 Buttons for those two functions|


![](https://github.com/SeeedDocument/Grove-Uart_Wifi/raw/master/img/Version_tracker.jpg)



!!!Note
        You may ask what is the difference between ESP8266 and ESP8285. The ESP8285 is an update version of ESP8266, which adds a build-in 1MB flash. Except that, they are almost the same.





## Features

* Grove 4-pin connector (RX,TX,VCC,GND)
* 802.11 b/g/n protocol (2.4GHz)
* WiFi Direct (P2P), soft-AP
* Supports three modes: AP, STA and AP+STA coexistence mode
* Integrated TCP/IP protocol stack
* LwIP (lightweight IP)
* Integrated low power 32-bit CPU could be reprogrammed as an application processor
* Integrated temperature sensor
* Serial UART Interface
* Multi-queue QoS management
* Wake up and transmit packets in < 2ms
* Metal shielding
* On-board ceramic antenna
* Reset switch

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)





## Hardware Overview

Here is block diagram of Grove - UART WiF module which consists of following parts.

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove-Uart_Wifi/master/img/Grove_uart_wifi_wiki_hardware_overview.jpg)

* Grove - Used to connect to a processor through socket on a base board such as a Seeeduino or Grove Base Shield.
* WiFi antenna - Antenna for ESP8266(Module model)
* Button - With multi-functions
    * Reset - Press down and release quickly.
    * Set ESP8266(Module model) into UART boot mode - Press and hold button until centred red LED indicator light on.
* Led Indicator - Used to indicate working status and for operations by user.
    * Left - a blue LED indicator - Controlled by user through command "AT+LEDON" and "AT+LEDOFF".
    * Middle - a red LED indicator - light on while Wifi connected or go into UART boot mode
    * Right - a green LED indicator - light on while power on.





## Specifications

* Input voltage: 3V / 5V
* Baud Rate: 115200
* Based on ESP8266 ESP-06 SoC
* AT Firmware: esp_iot_sdk_v1.1.0 + Seeed modifications:
    * 2x additional AT commands to control blue Link LED.
    * Register red WiFi LED to the ESP8266 wifi state LED.
* AT command set
* SDIO 1.1/2.0, SPI, UART
* Five power states: OFF, DEEP_SLEEP, SLEEP, WAKEUP and ON.
* Standby power consumption of < 1.0mW (DTIM=3)
* Integrated TR switch, balun, LNA, power amplifier and matching network
* Integrated PLLs, regulators, DCXO and power management units
* +19.5dBm output power in 802.11b mode
* Power down leakage current of <10uA
* Hardware accelerators for CCMP (CBC-MAC, counter mode), TKIP (MIC, RC4), WAPI (SMS4), WEP (RC4), CRC
* WPA/WPA2 PSK, and WPS driver
* A-MPDU & A-MSDU aggregation & 0.4ms guard interval
* Dimensions: 25.43mm x 20.35mm

**Ultra-low power technology**

The ESP8266 was designed to achieve very low energy consumption with patented power management technology that reduces non-essential functions and regulates sleep patterns. There are five power states:

* OFF
* DEEP_SLEEP - the real-time clock runs but all other parts of the chip are closed
* SLEEP - consumes less than 12uA with only real-time clock and watchdog running. The chip will wake on MAC, host, RTC or external interrupt.
* WAKEUP - the system is changing from a sleep to on state. Crystal oscillator and PLL are enabled.
* ON - consumes less than 1.0mW (DTIM = 3) or 0.5mW (DTIM = 10).

The Real-time clock can be programmed to wake the ESP8266 within a specified period of time.

The higher the DTIM period, the longer the device may sleep and therefore the more power the device may potentially save.

To meet the power requirements of mobile applications and wearable electronics, to reduce the overall power consumption, the PA output power can be customised in the firmware.





## Application Ideas

* Home automation
* Sensor networks
* Mesh networking
* Wearable electronics
* Baby monitor
* Network camera
* Industrial wireless control
* WiFi beacons
* Smart power plug
* Location-aware applications





## Getting Started

After this section, you can make Grove - UART WiFi run with only few steps.

### Play With Arduino
!!!Note
    If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.


#### Materials required

| Seeeduino Lite | Grove-OLED |Grove-UART Wifi|
|--------------|-----------------|-----|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/lite.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove_OLED_Display_0.96/raw/master/images/grove%20oled%200.96_s.jpg)|![](https://github.com/SeeedDocument/Grove-Uart_Wifi/raw/master/img/thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-Lite-p-1487.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove---OLED-Display-0.96%22-p-781.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-Uart-Wifi-p-2495.html" target="_blank">Get One Now</a>|


!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy




#### Hardware

- **Step 1.** Connect Grove-UART Wifi to port **SERIAL** of Seeeduino Lite.

- **Step 2.** Connect Grove-OLED to port **I2C** of Seeeduino Lite.

- **Step 3.** Connect Seeeduino Lite to PC via a Micro-USB cable.


![](https://github.com/SeeedDocument/Grove-Uart_Wifi/raw/master/img/Arduino_connect_1.jpg)



#### Software


- **Step 1.** Download the [128X64 OLED library](https://github.com/Seeed-Studio/OLED_Display_128X64/archive/master.zip) from Github.

- **Step 2.** Refer to [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3.** Open the Arduino IDE and copy the following code into a new sketch. 


```
// test grove - uart wifi
// scan ap and display on Grove - OLED 0.96'
// Loovee @ 2015-7-28

#include <Wire.h>
#include <SeeedOLED.h>

char ap_buf[30][16];
int ap_cnt = 0;

void setup()
{
    Serial1.begin(115200);

    delay(3000);
    Wire.begin();
    SeeedOled.init();                   // initialze SEEED OLED display

    SeeedOled.clearDisplay();           // clear the screen and set start position to top left corner
    SeeedOled.setNormalDisplay();       // Set display to normal mode (i.e non-inverse mode)
    SeeedOled.setPageMode();            // Set addressing mode to Page Mode

}


void loop()
{
    ap_cnt = 0;
    SeeedOled.clearDisplay();
    SeeedOled.setTextXY(3,0);    
    SeeedOled.putString("Wifi Scan..."); 

    cmd_send("AT+CWLAP");
    wait_result();
    
    display_ap();
    delay(5000);
}

// send command
void cmd_send(char *cmd)
{
    if(NULL == cmd)return;
    Serial1.println(cmd);
}


// wait result of ap scan
// +CWLAP:(3,"360WiFi-UZ",-81,"08:57:00:01:61:ec",1)
void wait_result()
{
    while(1)
    {
LOOP1:
        char c1=0;
        if(Serial1.available()>=2)
        {
            c1 = Serial1.read();
            if(c1 == 'O' && 'K' == Serial1.read())return;       // OK means over
        }
        
        if('('==c1)
        {
            while(Serial1.available()<3);
            Serial1.read();
            Serial1.read();
            Serial1.read();

            int d = 0;
            while(1)
            {
                if(Serial1.available() && '"' == Serial1.read());      // find "
                {
                    while(1)
                    {
                        if(Serial1.available())
                        {
                            char c = Serial1.read();
                            ap_buf[ap_cnt][d++] = c;
                            if(c == '"' || d==16)
                            {
                                ap_buf[ap_cnt][d-1] = '\0';
                                ap_cnt++;
                                goto LOOP1;
                            }
                        }
                    }
                }
            }
        }
    }
}

// display
void display_ap()
{
    char strtmp[16];
    sprintf(strtmp, "get %d ap", ap_cnt);
    
    SeeedOled.clearDisplay();           // clear
    SeeedOled.setTextXY(3,3);           // Set the cursor to Xth Page, Yth Column
    SeeedOled.putString(strtmp);        // Print the String
 
    delay(2000);
    
    int cnt = ap_cnt;
    int offset = 0;
    while(1)
    {
        SeeedOled.clearDisplay(); 
        if(cnt>=8)
        {
            for(int i=0; i<8; i++)
            {
                SeeedOled.setTextXY(i,0);           // Set the cursor to Xth Page, Yth Column
                SeeedOled.putString(ap_buf[8*offset+i]);        // Print the String
            }
            cnt-=8;
            offset++;
        }
        else 
        {
            for(int i=0; i<cnt; i++)
            {
                SeeedOled.setTextXY(i,0);           // Set the cursor to Xth Page, Yth Column
                SeeedOled.putString(ap_buf[8*offset+i]);        // Print the String
            }
            
            return;
        }
        
        delay(2000);
    }
}

```

- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](http://wiki.seeedstudio.com/Upload_Code/).


Then you will see the OLED show the wifi AP around you.


![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove-Uart_Wifi/master/img/Grove_uart_wifi_result.jpg)




## Firmware update

!!!Warning
        This firmware only support V1, if you burn this firmware into the Grove UART WIFI V2, it will brick your module. 


Our module board got a firmware burned into it for factory settings, you can burn other firmware to it if you like. Click [here](https://raw.githubusercontent.com/SeeedDocument/Grove-Uart_Wifi/master/res/Grove-Uart_Wifi_Firmware-code.zip) to download source code of factory setting firmware.



### Materials required

* A USB to serial converter is required for firmware updating, you can choose [UartSBee V5](https://www.seeedstudio.com/UartSBee-V5-p-1752.html) if you don't know where to get one.
* A [Grove-Jump converting cable](https://www.seeedstudio.com/Grove-4-pin-Female-Jumper-to-Grove-4-pin-Conversion-Cable-%285-PCs-per-PAck%29-p-1020.html) is required and we also offered for sale. 
* A micro USB cable(type A to type C) is required.

### Hardware

**Step 1.** Connect one end of Grove-Jump converting cable with grove socket on Grove - Uart Wifi and connect other end with UartSBee V5 which shown as following.



![](https://github.com/SeeedDocument/Grove-Uart_Wifi/raw/master/img/UART_v1.jpg)


**Step 2.** Then connecting cables like following figure:

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove-Uart_Wifi/master/img/Grove_uart_wifi_firmware_connect2.jpg)




### Software

**Step 1.** Download burning tool and firmware

* [FLASH DOWNLOAD TOOLS](https://github.com/SeeedDocument/Grove-Uart_Wifi/raw/master/res/FLASH_DOWNLOAD_TOOLS_v1.2_150512.zip)
* [Bin files of firmware](https://github.com/SeeedDocument/Grove-Uart_Wifi/raw/master/res/Grove-uart-wifi-firmware-bin.zip)



**Step 2.** Press and hold button until the red LED indicator turn on which means it is ready to burn firmware.


**Step 3.** Start executable files in FLASH DOWNLOAD TOOLS files (double click) to make configurations like following steps:

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove-Uart_Wifi/master/img/Grove_uart_wifi_firmware_tools1.jpg)

**1.** Choose desired files from firmware bin file downloaded.

**2.** Select the **SpiAutoSet** checkbox.

**3.** Choose COM port and BAUDRATE.

**4.** Click **START** button


* Progress bar will be displayed in firmware-burning process.

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove-Uart_Wifi/master/img/Grove_uart_wifi_firmware_tools2.1.jpg)

* Finally, firmware-burning is done.

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove-Uart_Wifi/master/img/Grove_uart_wifi_firmware_tools3.jpg)




## AT Commands



### Quick start of AT Commands

#### Hardware

The **Materials required** and **Hardware connection** are the same as [Firmware update](http://wiki.seeedstudio.com/Grove-UART_Wifi/#firmware-update)


Let's go to software part  

#### Software

You can use any serial Tools you like, we use Arduino here. And please make sure you have connect the **USB to serial converter** to your PC. 



**Step 1.** Open the Arduino IDE, Click **Tools** choose the corresponding **Port**.

![](https://github.com/SeeedDocument/Grove-Uart_Wifi/raw/master/img/1.png)


**Step 2.** Then click the <embed src="https://github.com/SeeedDocument/Grove-Uart_Wifi/raw/master/img/COM.png"> button on the upper right corner to open the **Serial Monitor** of Arduino.

**Step 3.** Set the Serial Monitor as the following picture. Particularly :2- Select **Both NL & CR**, 3-Set the **baud rate** to 115200


![](https://github.com/SeeedDocument/Grove-Uart_Wifi/raw/master/img/result.png)

**Step 3.** Tap the AT command you need in the command line then click the **Send** button. You will see the return information as the picture above.



### Basic AT Commands

| Command | Description |
|-------------|---------------|
|AT	|Test AT startup|
|AT+RST|	Restart module|
|AT+GMR|	View version info|
|AT+GSLP|	Enter deep-sleep mode|
|ATE|	Enable/Disable AT commands echo|
|AT+RESTORE|	Factory Reset|
|AT+UART|	UART configuration(Deprecated)|
|AT+UART_CUR|	UART current configuration (Won't save to Flash)|
|AT+UART_DEF|	UART default configuration (Save to Flash)|
|AT+SLEEP	|Sleep mode|
|AT+RFPOWER|	Set RF TX Power|
|AT+RFVDD|	Set RF TX Power according to VDD33|

### WiFi AT Commands

|Command	|Description|
|--------------|-------------|
|AT+CWMODE	|WIFI mode (Deprecated)|
|AT+CWMODE_CUR	|Current WIFI mode (Won't save to Flash)|
|AT+CWMODE_DEF|	Default WIFI mode (Save to Flash)|
|AT+CWJAP|	Connect to AP (Deprecated)|
|AT+CWJAP_CUR|	Current Connect to AP (Won't save to Flash)|
|AT+CWJAP_DEF|	Default Connect to AP (Save to Flash)|
|AT+CWLAP|	Lists available APs|
|AT+CWQAP|	Disconnect from AP|
|AT+CWSAP|	Configure softAP (Deprecated)|
|AT+CWSAP_CUR|	Configure current softAP (Won't save to Flash)|
|AT+CWSAP_DEF|	Configure default softAP (Save to Flash)|
|AT+CWLIF|	List stations connected to softAP|
|AT+CWDHCP|	Enable/Disable DHCP (Deprecated)|
|AT+CWDHCP_CUR|	Current Enable/Disable DHCP (Won't save to Flash)|
|AT+CWDHCP_DEF|	Default Enable/Disable DHCP (Save to Flash)|
|AT+CWAUTOCONN|	Connect to AP automatically when power on|
|AT+CIPSTAMAC|	Set station mac address (Deprecated)|
|AT+CIPSTAMAC_CUR|	Set station mac address (Won't save to Flash)|
|AT+CIPSTAMAC_DEF|	Set station mac address (Save to Flash)|
|AT+CIPAPMAC|	Set softAP mac address (Deprecated)|
|AT+CIPAPMAC_CUR|	Set softAP mac address (Won't save to Flash)|
|AT+CIPAPMAC_DEF|	Set softAP mac address (Save to Flash)|
|AT+CIPSTA|	Set station IP address (Deprecated)|
|AT+CIPSTA_CUR|	Set station IP address (Won't save to Flash)|
|AT+CIPSTA_DEF|	Set station IP address (Save to Flash)|
|AT+CIPAP|	Set softAP IP address (Deprecated)|
|AT+CIPAP_CUR|	Set softAP IP address (Won't save to Flash)|
|AT+CIPAP_DEF|	Set softAP IP address (Save to Flash)|
|AT+CWSTARTSMART|	Start SmartConfig|
|AT+CWSTOPSMART|	Stop SmartConfig|

### TCP/IP AT Commands

|Command	|Description|
|-------------|--------------|
|AT+CIPSTATUS|	Get connection status|
|AT+CIPSTART|	Establish TCP connection or register UDP port|
|AT+CIPSEND|	Send data|
|AT+CIPSENDEX|	Send data, if <length> or "\0" is met, data will be sent|
|AT+CIPSENDBUF|	Write data into TCP-send-buffer|
|AT+CIPBUFRESET|	Reset segment ID count|
|AT+CIPBUFSTATUS|	Check status of TCP-send-buffer|
|AT+CIPCHECKSEQ|	Check if a specific segment is sent or not|
|AT+CIPCLOSE|	Close TCP/UDP connection|
|AT+CIFSR|	Get local IP address|
|AT+CIPMUX|	Set multiple connections mode|
|AT+CIPSERVER|	Configure as server|
|AT+CIPMODE|	Set transmission mode|
|AT+SAVETRANSLINK|	Save transparent transmission link to Flash|
|AT+CIPSTO|	Set timeout when ESP8266 runs as TCP server|
|AT+CIUPDATE|	Upgrade firmware through network|
|AT+PING|	Ping an IP address or hostname|


### Seeed AT Commands

|Command	|Description|
|-------------|---------------|
|AT+LEDON|	Turn the blue LINK led on|
|AT+LEDOFF	|Turn the blue LINK led off|


## Resources

- **[PDF]** [Schematic in PDF](https://raw.githubusercontent.com/SeeedDocument/Grove-Uart_Wifi/master/res/Grove-UART_WiFi_v1.0.pdf)
* **[Zip]** [Schematic in Eagle](https://raw.githubusercontent.com/SeeedDocument/Grove-Uart_Wifi/master/res/Grove-UART_WiFi_sch_pcb.zip)
* **[Datasheet]** [Espressif Systems ESP8266](http://espressif.com/en/products/esp8266/)
* **[PDF]** [Espressif Systems ESP8266 AT Instruction Set - v0.24](http://bbs.espressif.com/download/file.php?id=450)
* **[MoreReading]** [http://www.esp8266.com](http://www.esp8266.com)
* **[MoreReading]** [ESP-06](http://www.esp8266.com/wiki/doku.php?id=esp8266-module-family#esp-06)
* **[MoreReading]** [ESP8266 on Hackaday](http://hackaday.com/tag/esp8266/)
* **[MoreReading]** [https://nurdspace.nl/ESP8266](https://nurdspace.nl/ESP8266)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>