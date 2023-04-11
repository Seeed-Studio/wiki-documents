---
description: W5500_Ethernet_Shield_v1.0
title: W5500 Ethernet Shield v1.0
tags:
  - Shield
keywords:
  - Shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /W5500_Ethernet_Shield_v1.0
last_update:
  date: 01/30/2023  
  author: Eico 

no_comments: false # for Disqus

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/img/W5500.jpg" alt="pir" width={600} height="auto" /></p>

The W5500 Ethernet Shield v1.0 can provide your projects with internet connectivity. W5500 enables users to have the Internet connectivity in their applications by using the single chip, in which TCP/IP stack, 10 / 100 Ethernet MAC and PHY embedded. The shield also has two Grove connectors and a microSD card socket to support projects which require storing large amounts of data from Grove sensor. The RJ45 port (where the Ethernet cable is connected to) is low enough to allow you to stack more shields on top of this one if needed.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/W5500-Ethernet-Shield-p-2433.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Features

--------

- Supports Hardwired TCP/IP Protocols : TCP, UDP, ICMP, IPv4, ARP, IGMP, PPPoE
- Supports 8 independent sockets simultaneously
- Supports Power down mode
- Supports Wake on LAN over UDP
- Supports High Speed Serial Peripheral Interface(SPI MODE 0, 3)
- Internal 32Kbytes Memory for TX/RX Buffers
- 10BaseT/100BaseTX Ethernet PHY embedded
- Supports Auto Negotiation (Full and half duplex, 10 and 100\* based )
- Not supports IP Fragmentation
- 3.3V operation with 5V I/O signal tolerance
- LED outputs (Full/Half duplex, Link, Speed, Active)
- Micro-SD card socket
- Grove connectors for I2C and UART

## Hardware Overview

-----------------
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/img/W5500_Interface.jpg" alt="pir" width={600} height="auto" /></p>

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

:::note
Both W5500 and SD card communicate with Arduino via SPI bus. Pin 10 and pin 4 are chip Selection pins for W5500 and SD slot. They cannot be used as general I/O.
:::

Usage
-----

We will show you an example.This example can upload data to webpage and store your sensor data to SD Card.

### Hardware

**Part List:**
<table align="center">
  <tbody>
  <tr>
    <td><h3>Name</h3></td>
    <td><h3>Function</h3></td>
    <td><h3>Qty</h3></td>
  </tr>
  <tr>
    <td><h4><a href="https://www.seeedstudio.com/W5500-Ethernet-Shield-p-2433.html" target="_blank"><span>W5500 Ethernet Shield</span></a></h4></td>
    <td><h4>Provide Ethernet connectivity</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4><a href="https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html?queryID=dcb7226252c34d7139135b4fd97cafc5&objectID=627&indexName=bazaar_retailer_products" target="_blank"><span>Seeeduino V4.2</span></a></h4></td>
    <td><h4>Controller</h4></td>
    <td><h4>1</h4></td>
  </tr>  
  <tr>
    <td><h4><a href="https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html" target="_blank"><span>Grove-Temp&Humi Sensor</span></a></h4></td>
    <td><h4>Sensor</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4><a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank"><span>Base Shield V2</span></a></h4></td>
    <td><h4>Base Shield</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Micro SD Card</h4></td>
    <td><h4>Store data</h4></td>
    <td><h4>1</h4></td>
  </tr>
  </tbody></table>

**Procedure:**

1. Mount W5500 Ethernet Shield v1.0 on your Arduino, mount Base Shield V2 on Ethernet Shield, and connect Grove-Temp&Humi sensor to Base Shield D5 Grove port, attach the SD card.
2. Connect the Ethernet shield to network with a standard Ethernet cable;
3. Connect Arduino to PC via USB cable;

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/img/temp%26humi%20hardware.jpg" alt="pir" width={600} height="auto" /></p>

### Software

- Please follow [how to install an arduino library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/) procedures to install library.
- Click on below button to download W5500 Ethernet Shield libraries.

<p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/res/WIZ_Ethernet_Library-IDE1.6.x-master.zip" target="_blank"><img src="https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/img/download%20W5500%20library.png" /></a></p>

- Install the library to your Arduino IDE when it is downloaded.
- Copy below code into sketch and then upload:

```cpp
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

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/img/temp%26humi%20on%20web.png" alt="pir" width={600} height="auto" /></p>

Isn't it very easy? You can begin your project.

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/res/W5500_Ethernet_Shield_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- [W5500 Ethernet Shield in Eagle format](https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/res/W5500_Ethernet_Shield_v1.0.zip)
- [W5500 Ethernet Shield Schematic in PDF format](https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/res/W5500_Ethernet_Shield_v1.0.pdf)
- [W5500 Ethernet Shield PCB in PDF format](https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/res/W5500%20Ethernet%20Shield%20v1.0%20PCB.pdf)
- [W5500 Ethernet Shield Library](https://github.com/embeddist/WIZ_Ethernet_Library-IDE1.6.x)
- [W5500 Ethernet Shield Datasheet.pdf](https://files.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0/res/W5500_datasheet_v1.0.2.pdf)
<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/W5500_Ethernet_Shield_v1.0 -->

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
