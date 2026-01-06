---
description: Getting Started with XIAO W5500 Ethernet Adapter
title: Getting Started with XIAO W5500 Ethernet Adapter
keywords:
  - ethernet
  - w5500
image: https://files.seeedstudio.com/wiki/xiao_w5500_poe/0.webp
sidebar_position: 9
slug: /xiao_w5500_ethernet_adapter
last_update:
  date: 06/04/2025
  author: Citric
---

## Introduction

A compact PoE development board featuring the XIAO ESP32S3 Plus, with an integrated, isolated PoE module and TPS563201-based power conversion that delivers a clean 5V supply to power the microcontroller. Ideal for IoT projects, smart home devices, and industrial automation—where a versatile combination of reliable Ethernet connectivity and low-power wireless processing simplifies installation and enhances system performance.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/0.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-W5500-Ethernet-Adapter-p-6472.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
</a></div>

### Feature

- **High-Performance Microcontroller**: Built on the XIAO ESP32S3 Plus platform, our board delivers robust processing power and efficient wireless connectivity, making it ideal for complex IoT and embedded applications.

- **Integrated PoE with Isolation & Power Conversion**: Featuring a robust PoE module with built-in isolation, the board safely accepts a 12V Ethernet power input. A high-efficiency TPS563201 buck converter then steps the 12V down to a stable 5V rail, providing optimal power to the XIAO ESP32S3 Plus.

- **Reliable Ethernet Connectivity**: Equipped with an onboard W5500 Ethernet chip and a standard RJ45 jack, the board ensures stable wired network access for seamless data transmission and remote management.

- **Versatile I/O Options**: With dual-sided I/O outputs, you can easily expand functionality and interface with a range of sensors and peripherals to customize your application to exact specifications.

- **Compact & Ready-to-Deploy Design**: Combining integrated PoE, isolation circuitry, and Ethernet connectivity in a small form factor, this board simplifies prototyping and enables efficient deployment in smart home, industrial automation, or network appliance projects.

### Specification

<div class="table-center">
 <table align="center">
  <tr>
   <th>Parameter</th>
   <th>Description</th>
  </tr>
  <tr>
   <td>MCU</td>
   <td>XIAO ESP32-S3 Plus</td>
  </tr>
  <tr>
   <td>Antenna</td>
   <td>2.4GHz Rod Antenna (2.81dBi)</td>
  </tr>
  <tr>
   <td>USB Type-C</td>
   <td>Input voltage (Type-C): 5V</td>
  </tr>
  <tr>
   <td>PoE Chip</td>
   <td>MQ7813T120</td>
  </tr>
  <tr>
   <td>PoE Power Supply</td>
   <td>PoE IEEE802.3af<br />Output Current: 12V/1.1A<br />High Efficiency 86% (Input 48V, Load 12V@1.1A)</td>
  </tr>
  <tr>
   <td>Ethernet Chip</td>
   <td>WIZnet W5500</td>
  </tr>
  <tr>
   <td>Ethernet Interface</td>
   <td>RJ45<br />10 or 100Mbps Ethernet</td>
  </tr>
  <tr>
   <td>TCP/IP Protocols</td>
   <td>TCP, UDP, ICMP, IPv4, ARP, IGMP, PPPoE</td>
  </tr>
  <tr>
   <td>LED Indicator</td>
   <td>Power x 1<br />User x 1</td>
  </tr>
  <tr>
   <td>Button</td>
   <td>Reset</td>
  </tr>
  <tr>
   <td>I/O Interface</td>
   <td></td>
  </tr>
  <tr>
   <td>Product Size</td>
   <td>83 x 118 x 26 mm</td>
  </tr>
  <tr>
   <td>Product Weight</td>
   <td>75g</td>
  </tr>
  <tr>
   <td>Enclosure</td>
   <td>3D-Printed in White</td>
  </tr>
 </table>
</div>

## Hardware Overview

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Product Appearance" label="Product Appearance">

The images below show the external design of the XIAO W5500 Ethernet Adapter. You can see the compact form factor, the Ethernet port, and the interface for connecting to the XIAO series microcontroller. This design allows for easy integration into various projects where space and reliability are important.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/2.jpg" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/3.jpg" style={{width:800, height:'auto'}}/></div>

</TabItem>

<TabItem value="Inside the Product" label="Inside the Product">

The following image provides a look inside the XIAO W5500 Ethernet Adapter. Here, you can observe the internal PCB layout, the W5500 Ethernet controller chip, and the supporting circuitry that enables stable Ethernet communication and optional Power over Ethernet (PoE) functionality.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/1.jpg" style={{width:800, height:'auto'}}/></div>

</TabItem>
</Tabs>

## Getting Started

### Wiring Instructions

There are two recommended ways to connect your XIAO W5500 Ethernet Adapter to your network:

1. **Using a PoE-enabled Switch or Router:**
   - Connect the device directly to a PoE-capable switch or router using a standard RJ45 Ethernet cable. This setup allows both data and power to be delivered over the same cable, so you do not need to provide separate power to the XIAO board.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/4.jpg" style={{width:600, height:'auto'}}/></div>

2. **Using a Standard Ethernet Cable:**
   - If you are using a regular Ethernet cable (without PoE), connect one end to your network and the other to the XIAO W5500 Ethernet Adapter. In this case, you must also power the XIAO board via its USB-C port with a stable 5V supply, as the Ethernet cable will only provide data connectivity.

   <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/6.jpg" style={{width:600, height:'auto'}}/></div>

> **Tip:** Make sure your Ethernet cable is long enough for your setup and is in good condition to ensure reliable communication.

### Reset Button

The XIAO W5500 Ethernet Adapter is equipped with a Reset button. If your device's program is not running as expected or you need to restart the system, simply press the Reset button once. This will reboot the device and reinitialize the program, helping to recover from unexpected states or errors.

## ESP32 Arduino Ethernet Library

The XIAO W5500 Ethernet Adapter utilizes the ESP32 Arduino Ethernet library for network connectivity. This library provides a set of APIs and examples for managing Ethernet connections, handling events, and building networked applications on ESP32-based boards.

For more details, advanced usage, and the latest updates, please refer to the official Espressif documentation: [ESP32 Arduino Ethernet Library Documentation](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/ethernet.html)

## XIAO Example

Now that you have installed the required libraries and understand the basic functions, let's explore some practical examples for the XIAO W5500 Ethernet Adapter. These demos will help you get started and show how to adapt the code for your own projects.

**Step 1.** Launch the Arduino application.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
</div><br />

**Step 2.** Select your development board model and add it to the Arduino IDE.

- To use **Seeed Studio XIAO ESP32-S3 Plus** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started#software-preparation)** to finish adding.

**Step 3.** Materials Required

To complete the following examples, you will need the hardware listed below. In addition to the XIAO W5500 Ethernet Adapter, make sure you have an Ethernet cable of sufficient length for your setup. You can use a cable with Power over Ethernet (PoE) capability, or a standard Ethernet cable. If you use a standard Ethernet cable (without PoE), please ensure that your XIAO board is powered separately with a stable 5V supply.

<div class="table-center">
 <table align="center">
  <tr>
   <th>XIAO W5500 Ethernet Adapter</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_w5500_poe/5.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/xiao_w5500_ethernet_adapter" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Demo 1: Ethernet Event Logger

**Purpose:**
This demo logs Ethernet events to the serial console, including the MAC address and current IP address (assigned by DHCP). It demonstrates how to initialize the W5500 Ethernet interface and monitor its status.

**Typical Use Case:**
Use this as a starting point to verify your hardware setup and network connectivity. It's useful for debugging and for projects where you need to monitor Ethernet status or log network events.

```cpp
#include <SPI.h>
#include <ETH.h>
#include <WiFi.h>

static bool eth_connected = false;

#ifndef ETH_PHY_CS
#define ETH_PHY_TYPE ETH_PHY_W5500
#define ETH_PHY_ADDR 1
#define ETH_PHY_CS   D1
#define ETH_PHY_IRQ  -1
#define ETH_PHY_RST  -1
#endif

// SPI pins
#define ETH_SPI_SCK  D8
#define ETH_SPI_MISO D9
#define ETH_SPI_MOSI D10


// React to Ethernet events:
void onEvent(arduino_event_id_t event, arduino_event_info_t info)
{
  switch (event) {

    case ARDUINO_EVENT_ETH_START:
      // This will happen during setup, when the Ethernet service starts
      Serial.println("ETH Started");
      //set eth hostname here
      ETH.setHostname("esp32-ethernet");
      break;

    case ARDUINO_EVENT_ETH_CONNECTED:
      // This will happen when the Ethernet cable is plugged 
      Serial.println("ETH Connected");
      break;

    case ARDUINO_EVENT_ETH_GOT_IP:
    // This will happen when we obtain an IP address through DHCP:
      Serial.print("Got an IP Address for ETH MAC: ");
      Serial.print(ETH.macAddress());
      Serial.print(", IPv4: ");
      Serial.print(ETH.localIP());
      if (ETH.fullDuplex()) {
        Serial.print(", FULL_DUPLEX");
      }
      Serial.print(", ");
      Serial.print(ETH.linkSpeed());
      Serial.println("Mbps");
      eth_connected = true;

      // Uncomment to automatically make a test connection to a server:
      // testClient( "192.168.0.1", 80 );

      break;

    case ARDUINO_EVENT_ETH_DISCONNECTED:
      // This will happen when the Ethernet cable is unplugged 
      Serial.println("ETH Disconnected");
      eth_connected = false;
      break;

    case ARDUINO_EVENT_ETH_STOP:
      // This will happen when the ETH interface is stopped but this never happens
      Serial.println("ETH Stopped");
      eth_connected = false;
      break;

    default:
      break;
  }
}

// Try to read something from a webserver:
void testClient(const char * host, uint16_t port)
{
  Serial.print("\nConnecting to ");
  Serial.print(host);
  Serial.print(":");
  Serial.println(port);

  NetworkClient client;
  if (!client.connect(host, port)) {
    Serial.println("connection failed");
    return;
  }
  client.printf("GET / HTTP/1.1\r\nHost: %s\r\n\r\n", host);
  while (client.connected() && !client.available());
  while (client.available()) {
    Serial.write(client.read());
  }

  Serial.println("closing connection\n");
  client.stop();
}

// Initializing everything at start up / after reset:
void setup()
{
  // Wait for the hardware to initialize:
  delay(500);

  // This sketch will log some information to the serial console:
  Serial.begin(115200); // Assuming computer will be connected to serial port at 115200 bauds
  Serial.println("Setup...");
  
  Serial.println("Registering event handler for ETH events...");
  Network.onEvent(onEvent);
  
  // Starth Ethernet (this does NOT start WiFi at the same time)
  Serial.println("Starting ETH interface...");
  SPI.begin(ETH_SPI_SCK, ETH_SPI_MISO, ETH_SPI_MOSI);
  ETH.begin(ETH_PHY_TYPE, ETH_PHY_ADDR, ETH_PHY_CS, ETH_PHY_IRQ, ETH_PHY_RST, SPI);

  Serial.println("Waiting for Ethernet connection");
  while (!eth_connected) {
    delay(500);
    Serial.print(".");
  }
}

void loop()
{
  if (eth_connected) {
    testClient("baidu.com", 80);
  }
  delay(20000);
}
```

Open the Serial Monitor at 115200 baud to view Ethernet events and IP information. The code will attempt to connect to "baidu.com" every 20 seconds as a connectivity test.

**Customization:**

- Change the test server in `testClient("baidu.com", 80);` to your own server or local network device.
- Use the event handler to trigger custom actions on network events.

### Demo 2: Simple Ethernet Web Server

**Purpose:**
This demo sets up a basic HTTP web server on the XIAO ESP32-S3 using the W5500 Ethernet Adapter. It responds to requests at the root URL and provides a simple 404 handler for unknown routes.

**Typical Use Case:**
Ideal for IoT projects where you want to serve web pages or REST APIs directly from your device over a wired Ethernet connection.

```cpp
#include <ETH.h>
#include <WebServer.h>
#include <ESPmDNS.h>


#ifndef ETH_PHY_CS
#define ETH_PHY_TYPE ETH_PHY_W5500
#define ETH_PHY_ADDR 1
#define ETH_PHY_CS   D1
#define ETH_PHY_IRQ  -1
#define ETH_PHY_RST  -1
#endif

// SPI pins
#define ETH_SPI_SCK  D8
#define ETH_SPI_MISO D9
#define ETH_SPI_MOSI D10

static bool eth_connected = false;
WebServer server(80);

// ESP32-POE doesn't have an onboard LED so if you want to use a LED you have to attach one to the extended pins on either UEXT or one of the 10 pin extentions.
// in this example the default value is 13 which is UEXT pin 6, or Extention 2 pin 1. If you want to attach the LED to another pin you need to change this value accordingly.
const int led_pin = 21;

// Web Server: handle a request to / (root of the server)
void handleRoot() {
  digitalWrite(led_pin, 1);
  server.send(200, "text/plain", "hello from esp32!");
  delay(100);    // Wait x ms so we have time to see the Led blinking
  digitalWrite(led_pin, 0);
}

// Web Server: handle a request to an unknown URI (unknown "File")
void handleNotFound() {
  digitalWrite(led_pin, 1);
  String message = "File Not Found\n\n";
  message += "URI: ";
  message += server.uri();
  message += "\nMethod: ";
  message += (server.method() == HTTP_GET) ? "GET" : "POST";
  message += "\nArguments: ";
  message += server.args();
  message += "\n";
  for (uint8_t i = 0; i < server.args(); i++) {
    message += " " + server.argName(i) + ": " + server.arg(i) + "\n";
  }
  server.send(404, "text/plain", message);
  // digitalWrite(led_pin, 0);  // If this is commented out, the LED will stay on in case of 404 error
}

// Handle Ethernet Events:
void onEvent(arduino_event_id_t event, arduino_event_info_t info)
{
  switch (event) {

    case ARDUINO_EVENT_ETH_START:
      // This will happen during setup, when the Ethernet service starts
      Serial.println("ETH Started");
      //set eth hostname here
      ETH.setHostname("esp32-ethernet");
      break;

    case ARDUINO_EVENT_ETH_CONNECTED:
      // This will happen when the Ethernet cable is plugged 
      Serial.println("ETH Connected");
      break;

    case ARDUINO_EVENT_ETH_GOT_IP:
    // This will happen when we obtain an IP address through DHCP:
      Serial.print("Got an IP Address for ETH MAC: ");
      Serial.print(ETH.macAddress());
      Serial.print(", IPv4: ");
      Serial.print(ETH.localIP());
      if (ETH.fullDuplex()) {
        Serial.print(", FULL_DUPLEX");
      }
      Serial.print(", ");
      Serial.print(ETH.linkSpeed());
      Serial.println("Mbps");
      eth_connected = true;

      // Uncomment to automatically make a test connection to a server:
      // testClient( "192.168.0.1", 80 );

      break;

    case ARDUINO_EVENT_ETH_DISCONNECTED:
      // This will happen when the Ethernet cable is unplugged 
      Serial.println("ETH Disconnected");
      eth_connected = false;
      break;

    case ARDUINO_EVENT_ETH_STOP:
      // This will happen when the ETH interface is stopped but this never happens
      Serial.println("ETH Stopped");
      eth_connected = false;
      break;

    default:
      break;
  }
}

// Try to read something from a webserver:
void testClient(const char * host, uint16_t port)
{
  Serial.print("\nConnecting to ");
  Serial.print(host);
  Serial.print(":");
  Serial.println(port);

  NetworkClient client;
  if (!client.connect(host, port)) {
    Serial.println("connection failed");
    return;
  }
  client.printf("GET / HTTP/1.1\r\nHost: %s\r\n\r\n", host);
  while (client.connected() && !client.available());
  while (client.available()) {
    Serial.write(client.read());
  }

  Serial.println("closing connection\n");
  client.stop();
}

// Initializing everything at start up / after reset:
void setup()
{
  // Wait for the hardware to initialize:
  delay(500);

  // This sketch will log some information to the serial console:


  Serial.begin(115200); // Assuming computer will be connected to serial port at 115200 bauds
  Serial.print("Setup...");
  

  Serial.print("Registering event handler for ETH events...");
  Network.onEvent(onEvent);
  
  // Starth Ethernet (this does NOT start WiFi at the same time)
  Serial.print("Starting ETH interface...");
  SPI.begin(ETH_SPI_SCK, ETH_SPI_MISO, ETH_SPI_MOSI, ETH_PHY_CS);
  ETH.begin(ETH_PHY_TYPE, ETH_PHY_ADDR, ETH_PHY_CS, ETH_PHY_IRQ, ETH_PHY_RST, SPI);

  
  // multicast DNS (mDNS) allows to resolve hostnames to IP addresses without a DNS server
  if (MDNS.begin("esp32")) {  // using mDNS name "esp32"
    Serial.println("MDNS responder started");
  }

  // Web Server handlers: 
  // Handle a request to / (root of the server)
  server.on("/", handleRoot);
  // Minimalistic handling of another URI (LED will not flash on this one):
  server.on("/inline", []() {
    server.send(200, "text/plain", "this works as well");
  });
  // Handle all other URIs:
  server.onNotFound(handleNotFound);

  server.begin();
  Serial.println("HTTP server started");
  
  pinMode( led_pin, OUTPUT);  // Initialize the LED pin as a digital output (on/off)
}

void loop ()
{
  server.handleClient();
  delay(2);//allow the cpu to switch to other tasks
}
```

Once the device obtains an IP address (shown in the Serial Monitor), open a browser and navigate to `http://<your_device_ip>/`. The root endpoint will respond with "hello from esp32!" and blink an LED. Try accessing `/inline` or any other path to see different responses.

**Customization:**

- Add more endpoints using `server.on("/yourpath", handlerFunction);`.
- Integrate sensor readings or device controls into your web server responses.

### Demo 3: Ethernet Camera Streaming Server

> **Reminder:**
> This demo requires the camera module from the [XIAO ESP32-S3 Sense](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Sense-Pre-Soldered-p-6335.html) board. The XIAO W5500 Ethernet Adapter itself does not include a camera, and the camera socket is not currently sold separately. If you have previously purchased the XIAO ESP32-S3 Sense board, you can use its camera with this demo. For a neat installation, refer to the [Resources](#resources) section for a 3D-printable enclosure with a camera hole that is compatible with this setup.

**Purpose:**
This advanced demo combines the XIAO ESP32-S3 camera module with the W5500 Ethernet Adapter to stream camera images over Ethernet. It demonstrates how to initialize the camera, configure the Ethernet interface, and start a web server for video streaming.

**Typical Use Case:**
Perfect for surveillance, remote monitoring, or any project requiring real-time image streaming over a reliable wired connection.

:::tip
The following program is for .ino files only, some header files are needed to compile this program. You can get the full source code of the project at the link below.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/XIAO_W5500_Ehernet_Adapter_Example/tree/main/XIAO_PoE_CameraWebServer" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />
:::

```cpp
#include "esp_camera.h"
#include <ETH.h>
#include <WiFi.h>  // For event handling

// Define the camera model being used
#define CAMERA_MODEL_XIAO_ESP32S3  // Has PSRAM

// Include camera pin definitions
#include "camera_pins.h"

#define USE_TWO_ETH_PORTS 0

// Ethernet PHY and SPI pin definitions (adjust according to your hardware)
#ifndef ETH_PHY_CS
#define ETH_PHY_TYPE ETH_PHY_W5500
#define ETH_PHY_ADDR 1
#define ETH_PHY_CS D1
#define ETH_PHY_IRQ -1
#define ETH_PHY_RST -1
#endif

#define ETH_SPI_SCK D8
#define ETH_SPI_MISO D9
#define ETH_SPI_MOSI D10

// Global variable to track Ethernet connection status
static bool eth_connected = false;

// Function declarations
void startCameraServer();
void setupLedFlash(int pin);
void onEvent(arduino_event_id_t event, arduino_event_info_t info);

void setup() {
  Serial.begin(115200);
  delay(2000);
  // Register Ethernet event handler
  Network.onEvent(onEvent);

  // Initialize SPI and Ethernet
  SPI.begin(ETH_SPI_SCK, ETH_SPI_MISO, ETH_SPI_MOSI, ETH_PHY_CS);
  ETH.begin(ETH_PHY_TYPE, ETH_PHY_ADDR, ETH_PHY_CS, ETH_PHY_IRQ, ETH_PHY_RST, SPI);

  // Wait for Ethernet connection
  Serial.print("Waiting for Ethernet connection");
  while (!eth_connected) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("Ethernet connected");

  Serial.setDebugOutput(true);
  Serial.println();

  // Camera configuration structure
  camera_config_t config;
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sccb_sda = SIOD_GPIO_NUM;
  config.pin_sccb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.frame_size = FRAMESIZE_UXGA;
  config.pixel_format = PIXFORMAT_JPEG;  // Use JPEG for streaming
  config.grab_mode = CAMERA_GRAB_WHEN_EMPTY;
  config.fb_location = CAMERA_FB_IN_PSRAM;
  config.jpeg_quality = 12;
  config.fb_count = 1;

  // Adjust configuration based on PSRAM availability
  if (config.pixel_format == PIXFORMAT_JPEG) {
    if (psramFound()) {
      config.jpeg_quality = 10;
      config.fb_count = 2;
      config.grab_mode = CAMERA_GRAB_LATEST;
    } else {
      config.frame_size = FRAMESIZE_SVGA;
      config.fb_location = CAMERA_FB_IN_DRAM;
    }
  } else {
    config.frame_size = FRAMESIZE_240X240;
#if CONFIG_IDF_TARGET_ESP32S3
    config.fb_count = 2;
#endif
  }

#if defined(CAMERA_MODEL_ESP_EYE)
  // Special pin setup for ESP-EYE
  pinMode(13, INPUT_PULLUP);
  pinMode(14, INPUT_PULLUP);
#endif

  // Initialize the camera
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    return;
  }

  // Adjust sensor settings for specific camera modules
  sensor_t *s = esp_camera_sensor_get();
  if (s->id.PID == OV3660_PID) {
    s->set_vflip(s, 1);        // Vertical flip
    s->set_brightness(s, 1);   // Increase brightness
    s->set_saturation(s, -2);  // Decrease saturation
  }
  if (config.pixel_format == PIXFORMAT_JPEG) {
    s->set_framesize(s, FRAMESIZE_QVGA);  // Lower initial frame size
  }

#if defined(CAMERA_MODEL_M5STACK_WIDE) || defined(CAMERA_MODEL_M5STACK_ESP32CAM)
  s->set_vflip(s, 1);
  s->set_hmirror(s, 1);
#endif

#if defined(CAMERA_MODEL_ESP32S3_EYE)
  s->set_vflip(s, 1);
#endif

  // Setup LED flash if the pin is defined
#if defined(LED_GPIO_NUM)
  setupLedFlash(LED_GPIO_NUM);
#endif

  // Start the camera web server
  startCameraServer();

  // Print the access URL to the serial monitor
  Serial.print("Camera Ready! Use 'http://");
  Serial.print(ETH.localIP());
  Serial.println("' to connect");
}

void loop() {
  // No additional processing needed; camera server runs in another task
  delay(10000);
}

// Ethernet event handler
void onEvent(arduino_event_id_t event, arduino_event_info_t info) {
  switch (event) {
    case ARDUINO_EVENT_ETH_START:
      Serial.println("ETH Started");
      // Set Ethernet hostname here
      ETH.setHostname("esp32-eth0");
      break;
    case ARDUINO_EVENT_ETH_CONNECTED:
      Serial.println("ETH Connected");
      break;
    case ARDUINO_EVENT_ETH_GOT_IP:
      Serial.printf("ETH Got IP: '%s'\n", esp_netif_get_desc(info.got_ip.esp_netif));
      Serial.println(ETH);
      eth_connected = true;
      break;
    case ARDUINO_EVENT_ETH_LOST_IP:
      Serial.println("ETH Lost IP");
      eth_connected = false;
      break;
    case ARDUINO_EVENT_ETH_DISCONNECTED:
      Serial.println("ETH Disconnected");
      eth_connected = false;
      break;
    case ARDUINO_EVENT_ETH_STOP:
      Serial.println("ETH Stopped");
      eth_connected = false;
      break;
    default:
      break;
  }
}
```

Open the Serial Monitor to find the device's IP address after it connects to the network. Enter the IP address in your browser to access the camera stream.

**Customization:**

- Adjust camera settings (resolution, quality, frame size) in the `camera_config_t` structure.
- Modify the web server code to add authentication or additional endpoints.
- Adapt the Ethernet pin definitions to match your custom hardware.

## FAQ

### Q1: Why does the W5500 Adapter have a poor network signal? Is there any solution?

It is possible to add a code segment for adjusting power inside all codes that use WiFi, and by adjusting the transmit power, the signal strength can be significantly improved.

Such as the following code snippet, is added to adjust the power of the function inside the `Setup()`.

```cpp
    // 1. Set WiFi to Station mode
    WiFi.mode(WIFI_STA);

    // 2. Adjust WiFi transmit power (Key correction)
    int8_t power_dbm = 15;
    int8_t power_param = (int8_t)(power_dbm / 0.25);
    esp_err_t err = esp_wifi_set_max_tx_power(power_param);
    
    if (err == ESP_OK) {
        Serial.print("Successfully set WiFi TX Power to: ");
        Serial.print(power_dbm);
        Serial.println(" dBm");
    } else {
        Serial.println("Failed to set WiFi TX Power.");
    }
    
    // 3. Start connecting to WiFi
    WiFi.begin(ssid, password);

    Serial.print("Connecting to WiFi network: ");
    Serial.println(ssid);
```

It has been verified that setting the power to the above code gives the best results.

## Resources

- **[PDF]** [W5500 Datasheet](https://files.seeedstudio.com/wiki/xiao_w5500_poe/res/W5500_ds_datasheet.pdf)
- **[PDF]** [XIAO W5500 Ethernet Adapter SCH](https://files.seeedstudio.com/wiki/xiao_w5500_poe/res/XIAO_POE_RJ45_V20_SCH_20250422B.pdf)
- **[STEP]** [XIAO W5500 Ethernet Adapter 3D STEP](https://files.seeedstudio.com/wiki/xiao_w5500_poe/res/XIAO_POE_RJ45_V20.step)
- **[STEP]** [XIAO W5500 Ethernet Adapter Shell 3D STEP (No pre-drilled camera holes)](https://files.seeedstudio.com/wiki/xiao_w5500_poe/res/xiao_w5500_eth_adapter_shell.stp)
- **[STEP]** [XIAO W5500 Ethernet Adapter Covers 3D STEP](https://files.seeedstudio.com/wiki/xiao_w5500_poe/res/xiao_w5500_eth_adapter_covers.stp)
- **[KICAD]** [XIAO W5500 Ethernet Adapter PCB](https://files.seeedstudio.com/wiki/xiao_w5500_poe/res/XIAO_POE_RJ45_V20.kicad_pcb)
- **[GITHUB]** [XIAO W5500 Ethernet Adapter Repository](https://github.com/Seeed-Projects/XIAO_W5500_Ehernet_Adapter_Example)

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
