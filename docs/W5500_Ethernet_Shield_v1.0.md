---
name: W5500 Ethernet Shield v1.0
category: Shield
bzurl: https://www.seeedstudio.com/W5500-Ethernet-Shield-p-2433.html
oldwikiname: W5500_Ethernet_Shield_v1.0
prodimagename: W5500.jpg
bzprodimageurl: https://statics3.seeedstudio.com/upload/master/img/20160519080008-2ccc2b.JPG
surveyurl: https://www.research.net/r/W5500_Ethernet_Shield_v1_0
sku: 103030021
---

![](https://raw.githubusercontent.com/SeeedDocument/W5500_Ethernet_Shield_v1.0/master/img/W5500.jpg)

The W5500 Ethernet Shield v1.0 can provide your projects with internet connectivity. W5500 enables users to have the Internet connectivity in their applications by using the single chip, in which TCP/IP stack, 10 / 100 Ethernet MAC and PHY embedded. The shield also has two Grove connectors and a microSD card socket to support projects which require storing large amounts of data from Grove sensor. The RJ45 port (where the Ethernet cable is connected to) is low enough to allow you to stack more shields on top of this one if needed.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](https://www.seeedstudio.com/W5500-Ethernet-Shield-p-2433.html)

## Features
--------

-   Supports Hardwired TCP/IP Protocols : TCP, UDP, ICMP, IPv4, ARP, IGMP, PPPoE
-   Supports 8 independent sockets simultaneously
-   Supports Power down mode
-   Supports Wake on LAN over UDP
-   Supports High Speed Serial Peripheral Interface(SPI MODE 0, 3)
-   Internal 32Kbytes Memory for TX/RX Buffers
-   10BaseT/100BaseTX Ethernet PHY embedded
-   Supports Auto Negotiation (Full and half duplex, 10 and 100\* based )
-   Not supports IP Fragmentation
-   3.3V operation with 5V I/O signal tolerance
-   LED outputs (Full/Half duplex, Link, Speed, Active)
-   Micro-SD card socket
-   Grove connectors for I2C and UART

## Compatibility

We have produced a lot of extension boards that can make your platform board more powerful, however not every extension board is compatible with all the platform boards, here we use a table to illustrate the compatibilities between extension boards and platform boards.

!!!note
    Please note that "Not recommended" means that it might have chance to work with the platform board however requires extra work such as jump wires or rewriting the code. If you are interested in digging more, welcome to contact with techsupport@seeed.cc.

**Click to see full picture**
[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/Shield%20Compatibility.png)](https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/Shield%20Compatibility.png)

## Hardware Overview
-----------------
![](https://github.com/SeeedDocument/W5500_Ethernet_Shield_v1.0/raw/master/img/W5500_Interface.jpg)


**Hardware Configuration**

1. RJ45: Ethernet Port;
2. IC W5500: a hardwired TCP/IP Ethernet Controller;
3. Reset Button: Reset Ethernet shield ;
4. SD Card Socket: support Micro SD card in FAT16 or FAT32; maximum storage is 2GB.
5. I2C Interface
6. UART Interface

**Pins usage on Arduino**

1. D4：  SD card chip Selection
2. D10： W5200 Chip Selection
3. D11： SPI MOSI
4. D12： SPI MISO
5. D13： SPI SCK

<div class="admonition note">
<p class="admonition-title">Note</p>
Both W5500 and SD card communicate with Arduino via SPI bus. Pin 10 and pin 4 are chip Selection pins for W5500 and SD slot. They cannot be used as general I/O.
</div>

Usage
-----

We will show you an example.This example can upload data to webpage and store your sensor data to SD Card.

### Hardware

**Part List:**

|Name|Function|Qty|
|----|--------|---|
|[W5500 Ethernet Shield](https://www.seeedstudio.com/W5500-Ethernet-Shield-p-2433.html) |Provide Ethernet connectivity | 1 |
|[Seeeduino V4.2](http://www.seeedstudio.com/item_detail.html?p_id=2517)|Controller|1|
|[Grove-Temp&Humi Sensor](https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html)|Sensor|1|
|[Base Shield V2](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|Base Shield|1|
|Micro SD Card |Store data|1|

**Procedure:**

1. Mount W5500 Ethernet Shield v1.0 on your Arduino, mount Base Shield V2 on Ethernet Shield, and connect Grove-Temp&Humi sensor to Base Shield D5 Grove port, attach the SD card.
2. Connect the Ethernet shield to network with a standard Ethernet cable;
3. Connect Arduino to PC via USB cable;
![](https://github.com/SeeedDocument/W5500_Ethernet_Shield_v1.0/raw/master/img/temp%26humi%20hardware.jpg)


### Software

- Please follow [how to install an arduino library](http://wiki.seeed.cc/How_to_install_Arduino_Library/) procedures to install library.
- Click on below button to download W5500 Ethernet Shield libraries.
[![](https://github.com/SeeedDocument/W5500_Ethernet_Shield_v1.0/raw/master/img/download%20W5500%20library.png)](https://github.com/SeeedDocument/W5500_Ethernet_Shield_v1.0/raw/master/res/WIZ_Ethernet_Library-IDE1.6.x-master.zip)

- Install the library to your Arduino IDE when it is downloaded.
- Copy below code into sketch and then upload:

```
//This sketch uses W5500 Ethernet Shield,Seeeduino V4.2,Grove-Temp&Humi,
//Base Shield V2 Sensor and Micro SD Card to design a temperature and humidity collection station.
//attach the temperature and humidity sensor to base shield D5 grove port.
//It publishes the temperature and humidity data to webpage
//and refresh every 5 seconds, store the data into SD card datalog.txt file.

#include <SD.h>
#include <SPI.h>
#include <Ethernet.h>
#include <dht11.h>
dht11 DHT;
#define DHT11_PIN 5
const int chipSelect = 4;

// Please update IP address according to your local network
#if defined(WIZ550io_WITH_MACADDRESS) // Use assigned MAC address of WIZ550io
;
#else
byte mac[] = {0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED};
#endif  
IPAddress ip(192,168,0,177);

// Initialize the Ethernet server library
// with the IP address and port you want to use
// (port 80 is default for HTTP):
EthernetServer server(80);

void setup() {
 // Open serial communications and wait for port to open:
  Serial.begin(9600);
   while (!Serial) {
    ; // wait for serial port to connect. Needed for Leonardo only
  }

  // start the Ethernet connection and the server:
#if defined(WIZ550io_WITH_MACADDRESS)
  Ethernet.begin(ip);
#else
  Ethernet.begin(mac, ip);
#endif  
  server.begin();
  Serial.print("server is at ");
  Serial.println(Ethernet.localIP());

  //initializing the SD card
  Serial.print("Initializing SD card...");

  // see if the card is present and can be initialized:
  if (!SD.begin(chipSelect)) {
    Serial.println("Card failed, or not present");
    // don't do anything more:
    return;
  }
  Serial.println("card initialized.");
}


void loop() {
  // listen for incoming clients
  EthernetClient client = server.available();
  if (client) {
    Serial.println("new client");
    // an http request ends with a blank line
    boolean currentLineIsBlank = true;
    while (client.connected()) {
      if (client.available()) {
        char c = client.read();
        Serial.write(c);
        // if you've gotten to the end of the line (received a newline
        // character) and the line is blank, the http request has ended,
        // so you can send a reply
        if (c == '\n' && currentLineIsBlank) {
          // send a standard http response header
          client.println("HTTP/1.1 200 OK");
          client.println("Content-Type: text/html");
          client.println("Connection: close");  // the connection will be closed after completion of the response
	  client.println("Refresh: 5");  // refresh the page automatically every 5 sec
          client.println();
          client.println("<!DOCTYPE HTML>");
          client.println("<html>");

          // output the value of input pin on web
          int chk;
          chk = DHT.read(DHT11_PIN);    // READ DATA
          client.print("Humidity: ");
          client.print(DHT.humidity);
          client.println("<br />");
          client.print("Temperature: ");
          client.print(DHT.temperature);   

          //write value of input pin into SD card
          // make a string for assembling the data to log:
          String dataString = "";
          // read the humidity and temperature and append to the string:
          dataString = String(DHT.humidity) + String(DHT.temperature);
          // open the file. note that only one file can be open at a time,
          // so you have to close this one before opening another.
          File dataFile = SD.open("datalog.txt", FILE_WRITE);
          // if the file is available, write to it:
          if (dataFile) {
          dataFile.println(dataString);
          dataFile.close();
          // print to the serial port too:
          Serial.println(dataString);
          }
          // if the file isn't open, pop up an error:
          else {
          Serial.println("error opening datalog.txt");
          }
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
    // give the web browser time to receive the data
    delay(1);
    // close the connection:
    client.stop();
    Serial.println("client disconnected");
  }
}

```

### Results

Now, we will show result.

1. Put your SD card into the computer,you will see some temperature and humidity information.
2. What's more, we can see information from web.

![](https://github.com/SeeedDocument/W5500_Ethernet_Shield_v1.0/raw/master/img/temp%26humi%20on%20web.png)

Isn't it very easy? You can begin your project.

## Resources
- [W5500 Ethernet Shield in Eagle format](https://raw.githubusercontent.com/SeeedDocument/W5500_Ethernet_Shield_v1.0/master/res/W5500_Ethernet_Shield_v1.0.zip)
- [W5500 Ethernet Shield Schematic in PDF format](https://raw.githubusercontent.com/SeeedDocument/W5500_Ethernet_Shield_v1.0/master/res/W5500_Ethernet_Shield_v1.0.pdf)
- [W5500 Ethernet Shield PCB in PDF format](https://github.com/SeeedDocument/W5500_Ethernet_Shield_v1.0/raw/master/res/W5500%20Ethernet%20Shield%20v1.0%20PCB.pdf)
- [W5500 Ethernet Shield Library](https://github.com/embeddist/WIZ_Ethernet_Library-IDE1.6.x)
- [W5500 Ethernet Shield Datasheet.pdf](https://raw.githubusercontent.com/SeeedDocument/W5500_Ethernet_Shield_v1.0/master/res/W5500_datasheet_v1.0.2.pdf)
<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0 -->

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>