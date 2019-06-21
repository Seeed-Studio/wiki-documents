---
name:  Wifi Shield V1.1‏‎
category: Discontinued
bzurl:
oldwikiname: Wifi_Shield_V1.1‏‎
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Wifi_Shield_V1-1
sku:
tags:
---

This Wifi Shield utilizes a RN171 wifi module to provide your Arduino/Seeeduino with serial Ethernet's function. It only takes two pins to hook your device up to 802.11b/g wireless networks with this shield. It features an independent antenna which can cover a wider range and transmit stronger signals. With supports for common TCP, UDP and FTP communication protocols, this Wifi Shield can meet needs of most wireless network projects, like smart home networks, robot controls or personal weather stations,etc. We prepared an easy and convenient command set for this shield so that you can use neat and concise code to run the function.

##   Specification   ##

- Voltage：3.3~5.5 V

- Current：25~400mA

- Transmit power：0-10 dBm

- Frequency：2402~2480 MHz

- Channal：0~13

- Network rate：1-11 Mbps for 802.11b/6-54Mbps for 802.11g

- Dimension：60X56X19 mm

- Net Weight：24±1 g

- Secure WiFi authentication：WEP-128, WPA-PSK (TKIP), WPA2-PSK (AES)

- Built-in networking applications：DHCP client, DNS client, ARP, ICMP ping, FTP, TELNET, HTTP, UDP, TCP

![](https://github.com/SeeedDocument/Wifi_Shield_V1.1/raw/master/img/WIFI_Shield_Interface_Function.jpg)

- **RN-171：**WIFLY GSX 802.11 b/g Wireless LAN Module.

- **Software Serial Port Configuration Area:** Choose the digital pins you would like to use as RX and TX of RN171.

- **Reset button:** Reset the Wifi Shield.

- **Status indicators illustration:**
- Two LEDs(D1,D5) will blink alternately when no connection exists.

- After connected to router, the Association to AP status Indicator(D1) will blink.

- After connected to router and TCP Sever, the AP status Indicator(D1) will always be on.

##   Get started  ##

###   Demo: Wifly_Test  ###

Download the [Wifi Shield Library](https://github.com/Seeed-Studio/WiFi_Shield) on github, unzip it into the libraries folder of Arduino.

```

#include <Arduino.h>
#include <SoftwareSerial.h>
#include "WiFly.h"

#define SSID      "YourAP"
#define KEY       "password"
#define AUTH      WIFLY_AUTH_WPA2_PSK     // or WIFLY_AUTH_WPA1, WIFLY_AUTH_WEP, WIFLY_AUTH_OPEN

// Pins' connection
// Arduino       WiFly
//  2    <---->    TX
//  3    <---->    RX
SoftwareSerial uart(2, 3);
WiFly wifly(&uart);
//WiFly wifly(&Serial1);     // for leonardo, use hardware serial - Serial1

void setup() {
  uart.begin(9600);

  Serial.begin(9600);
  Serial.println("--------- WIFLY TEST --------");

  // wait for initilization of wifly
  delay(3000);

  uart.begin(9600);     // WiFly UART Baud Rate: 9600

  wifly.reset();

  Serial.println("Join " SSID );
  if (wifly.join(SSID, KEY, AUTH)) {
    Serial.println("OK");
  } else {
    Serial.println("Failed");
  }

  // get WiFly params
  wifly.sendCommand("get everthing\r");
  char c;
  while (wifly.receive((uint8_t *)&c, 1, 300) > 0) {
    Serial.print((char)c);
  }

  if (wifly.commandMode()) {
    Serial.println("Enter command mode. Send \"exit\"(with \\r) to exit command mode");
  }
}

void loop() {
  while (wifly.available()) {
    Serial.write(wifly.read());
  }

  while (Serial.available()) {
    wifly.write(Serial.read());
  }
}

```

1.Connect D2(RX) and D3(TX) of software serial port with TX and RX of WiFi shield.

![](https://github.com/SeeedDocument/Wifi_Shield_V1.1/raw/master/img/WIFI_Shield_UART.jpg)

2.Change the code to update your access point info

```

#define SSID      "YourAP"
#define KEY       "password"
#define AUTH      WIFLY_AUTH_WPA2_PSK     // or WIFLY_AUTH_WPA1, WIFLY_AUTH_WEP, WIFLY_AUTH_OPEN

```

3.Download the sketch to Arduino, open Serial Monitor, set baud rate to 9600, set enter key to Carriage return. WiFi Shield will output some messages and enter command mode. In command mode, you can enter some commands to interact:


  **get wlan** - get wlan info

  **join** - join a network

 **ping** seeedstudio.com - ping seeed!

  For more command, please refer to [WiFi Module User Manual](https://github.com/SeeedDocument/Wifi_Shield_V1.1/raw/master/res/WiFly-RN-UM.pdf)


  ![](https://github.com/SeeedDocument/Wifi_Shield_V1.1/raw/master/img/Wi-Fi_Info.png)

4.For further usage, please try other examples of the WiFi shield library.

###   Demo for Others   ###

##  Touble Shooting ##

If the Wifi Shield doesn't response any commands, try to do factory reset following [the guide](https://seeeddoc.github.io/Wifly_171_troubleshooting/)

##  Resource ##

- **[Eagle]** [WiFi Shield Eagle Files](https://github.com/SeeedDocument/Wifi_Shield_V1.1/raw/master/res/WIFI_Shield_Eagle_Files.zip)
- **[PDF]**[wifi Shield V1.1 PCB](https://github.com/SeeedDocument/Wifi_Shield_V1.1/raw/master/res/wifi%20Shield%20V1.1.pdf)
- **[PDF]**[wifi Shield V1.1 SCH](https://github.com/SeeedDocument/Wifi_Shield_V1.1/raw/master/res/wifi%20Shield%20V1.1%20SCH.pdf)
- **[Datasheet]**[RN-171 Datasheet](https://github.com/SeeedDocument/Wifi_Shield_V1.1/raw/master/res/WiFly-RN-171.pdf)
- **[Library]**[Wifi Shield Library](https://github.com/Seeed-Studio/WiFi_Shield)
- **[Manual]**[WiFi Module User Manual](https://github.com/SeeedDocument/Wifi_Shield_V1.1/raw/master/res/WiFly-RN-UM.pdf)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>