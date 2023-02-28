---
title: Wio LTE Cat M1/NB-IoT Tracker
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio_LTE_Cat_M1_NB-IoT_Tracker/
slug: /Wio_LTE_Cat_M1_NB-IoT_Tracker
last_update:
  date: 01/11/2022
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Wio_LTE_Cat_M1_NB-IoT_Tracker/img/NBIOT1.JPG)

Seeed’s Wio LTE CAT M1/NB-IoT is designed for Low-Power Wide-Area Network (LPWAN) with CAT M1(eMTC) and NB-IoT combo module. Besides, It has an ARM Cortex-M4 MCU and GNSS module.

It’s an Arduino compatible development board helps to track nearly any moving thing on the planet and then upload that data wirelessly. By integrating Grove connector, the Wio LTE CAT M1/NB-IoT allows for flexible communication solutions with Grove systems.

Wio LTE CAT M1/NB-IoT is well suited for outdoor projects where the device can connect to the satellite navigation system and provide a real-time location of the item it is attached to.


<p style={{}}><a href="https://www.seeedstudio.com/Wio-LTE-Cat-M1-NB1-p-3055.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>


**Are you looking for the Twilio Developer Kit for T-Mobile Narrowband? Find the docs [here](https://www.twilio.com/docs/wireless/nb)**


## Version
| Product Version               | Changes                                  | Released Date |
|-------------------------------|------------------------------------------|---------------|
| Wio LTE Cat M1/NB-IoT v1.0    | Initial                                  | May 26, 2018  |


##　pecifications

- ARM Cortex-M4 microcontroller LTE CAT M1 and NB-IoT combo for
global
- GPS/GLONASS GNSS supported
- Arduino IDE compatible
- 6 x Grove port on-board, support 180 Grove modules at most
- Easy migration from Wio LTE CAT.1
    

## Hardware Features

- STM32F405RG，ARM Cortex-M4, CPU
running up to 168MHZ
- 1Mbytes Flash
- 192+4KBytes RAM
- System
    - Operating voltage: 3.3V
    - Low power: Sleep/Standby modes/Stop
    - CRC-32 generator
- LTE Connectivity
    - LTE CAT M1 and NB-IoT, Cat M1 Half-duplex (375 kb/s DL and UL) Cat NB1 Half-duplex (27.2 kb/s DL, 62.5 UL)
    - Embed protocol: TCP/UDP/FTP/HTTP/HTTPS/FTPS/TLS/MQTT/CoAP
- GNSS
    - GPS/GLONASS
    - 2.5m CEP(GPS), 4.0m CEP(GLONASS)
- Peripheral
    - 1 x USB for power supply and DFU
    - JST 1.0 connector for battery
    - 3 Buttons: MCU Reset Button, MCU Boot (DFU) Button，EC21 Power Button
    - Nano SIM and TF card 2 in 1 socket
- Grove
    - 2 x Digital Port
    - 2 x Analog Port
    - 1 x UART
    - 1 x I2C

:::tip
    Use Grove modules to expand your application. There are 6 Grove connects on board. If this is your first time to hear about Grove, please put had on [Grove System](https://wiki.seeedstudio.com/Grove_System/) for more details. In brief, Groves is hundreds of sensor that in standard style, which is consist of sensors, actuators, displays as well as communication.
:::

## Applications
- Smart city
- Smart meter
- Smart energy
- Smart agriculture
- Smart retail
- Smart supply chain
- Smart transportation
- Connected car
- Connected building
- Connected Health
- Sports equipment
- Pet tracking
- Property security
- Shared bicycle
- Logistics transport positioning system
- Others


## Hardware Overview


![](https://files.seeedstudio.com/wiki/Wio_LTE_Cat_M1_NB-IoT_Tracker/img/front.png)

![](https://files.seeedstudio.com/wiki/Wio_LTE_Cat_M1_NB-IoT_Tracker/img/back.png)

:::tip
    If you want to use the on-board Grove connector, please use digitalWrite(B10, HIGH) to open 3V3_B. except D38 power on by default. Otherwise you can't provide power to Grove modules.
:::

![](https://files.seeedstudio.com/wiki/Wio_LTE_Cat_M1_NB-IoT_Tracker/img/h3.png)


## Getting Started

### Install USB driver

- **Windows Users**: Most versions of Windows won't automatically load the built-in driver for USB com ports. You'll have to download ST's USB driver [STM32 Virtual COM Port Driver](https://www.st.com/en/development-tools/stsw-stm32102.html#get-software).

- **Mac OS X and Chromebook Users**: The board will just plug in and work, without drivers!

### Change DFU driver

**For windows users**: 

- Step 1. Press and hold BOOT button and connect to computer you will see **STM32 Device in DFU Mode** at device manager as below.

![](https://files.seeedstudio.com/wiki/Wio_LTE/img/before_driver_installation.png)

- Step 2. This says that you need to use [zadig_xx.exe](https://files.seeedstudio.com/wiki/Wio_LTE/res/zadig_2.1.2.exe) to change DFU driver from **STTub30** to **WinUSB** as below. If we can't see any info on the Zadig, please click Options--> List All Devices, then select STM32 Virtual COM Ports.

![](https://files.seeedstudio.com/wiki/Wio_LTE/img/zadig.png)

- Step 3. You will see the "STMicroelectronics Virtual COM Port" on device manager as below.

![](https://files.seeedstudio.com/wiki/Wio_LTE/img/after_driver_installation.png)


### Play with Arduino

**1. Software Configuration**

- Step 1. Install Arduino IDE, recommand IDE version upon 1.8.0.
- Step 2. Follow [How to Add Seeed boards to Arduino IDE](https://wiki.seeedstudio.com/Seeed_Arduino_Boards/) to add Seeed STM32F4 Boards into arduino board manager.
- Step 3. Download the [WioLTE_Cat_NB1_Arduino_Library](https://github.com/lanselambor/WioLTE_Cat_NB1_Arduino_Library) from Github.
- Step 4. Refer [How to install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.
- Step 5. Before uploading the sketch, press and hold both BOOT0 and RST buttons, release the RST button than the BOOT0 button, in this way the board will go into STM BOOLARDER mode.
- Step 6. Don't choose any Serial port to upload the sketch in tools label just click upload icon.

**2. Play with On board RGB LED**

- Step 1. Select File--> Examples-->WioLTE_Cat_NB1_Arduino_Library-->Seeed_WS2812b sketch.
- Step 2. Press and hold BOOT button at back side of the Wio LTE Cat NB1 and plug the USB to PC.
- Step 3. We will see **STM BOOTLARDER** in device manager.
- Step 4. Select Tools-->Boards-->Wio_Tracker_LTE.
- Step 5. Keep COM Port blank.
- Step 6. Select Sketch-->Upload to upload the code to Wio_LTE.


```c++

#include <Seeed_ws2812.h>
#include <ublox_sara_r4.h>

#define LEN_NUM 1

Ublox_sara_r4 ublox = Ublox_sara_r4();
WS2812 strip = WS2812(LEN_NUM, ublox.RGB_LED_PIN);

void setup() {
  // Set RGB LED power pin high
  ublox.turnOnRGBPower();
  strip.begin();
  strip.brightness = 20;
}

void loop() {  
  strip.RGBCycle(1000);   
  strip.rainbowCycle(20);
}

```

- Step 7. Press **RST**, then you can see the on board RGB LED work.


**3. Play with GNSS**

- Step 1. Plug the Nano SIM card into Nano SIM slot, near PCB board side.
- Step 2. Select File--> Examples-->WioLTE_Cat_NB1_Arduino_Library-->GNNS-->GNSS sketch.
- Step 3. Press and hold BOOT button at back side of the Wio LTE Cat NB1 and plug the USB to PC.
- Step 4. We will see **STM BOOTLARDER** in device manager.
- Step 5. Select Tools-->Boards-->Wio_Tracker_LTE.
- Step 6. Keep COM Port blank.
- Step 7. Select Sketch-->Upload to upload the code to Wio LTE Cat NB1.
- Step 8. Press **RST** button to enable the COM port.

```c++

#include <ublox_sara_r4_gnss.h>

UBLOX_SARA_R4_GNSS gnss = UBLOX_SARA_R4_GNSS();

void setup()  
{
  // Open GNSS module
  gnss.open_GNSS();
  delay(3000);
  SerialDebug.println("_Start");
}

void loop() {
  gnss.dataFlowMode();
}

```

- Step 9. Use COM monitor tools to print the serial message. **Please do not use Arduino IDE COM monitor! That may cause the next time downloading fail, but reopen Arduino IDE can recover that issue**.
- Step 10. We will see lat, lon info printed on screen.

```C++
$GNRMC,,V,,,,,,,,,,N*4D
$GNVTG,,,,,,,,,N*2E
$GNGGA,,,,,,0,00,99.99,,,,,,*56
$GNGSA,A,1,,,,,,,,,,,,,99.99,99.99,99.99*2E
$GNGSA,A,1,,,,,,,,,,,,,99.99,99.99,99.99*2E
$GPGSV,1,1,01,30,,,44*7B
$GLGSV,1,1,00*65
$GNGLL,,,,,,V,N*7A
$GNRMC,,V,,,,,,,,,,N*4D
$GNVTG,,,,,,,,,N*2E
$GNGGA,,,,,,0,00,99.99,,,,,,*56
$GNGSA,A,1,,,,,,,,,,,,,99.99,99.99,99.99*2E
$GNGSA,A,1,,,,,,,,,,,,,99.99,99.99,99.99*2E
$GPGSV,1,1,04,07,,,43,17,,,38,18,,,39,30,,,44*70
$GLGSV,1,1,00*65
$GNGLL,,,,,,V,N*7A
$GNRMC,,V,,,,,,,,,,N*4D
$GNVTG,,,,,,,,,N*2E
$GNGGA,,,,,,0,00,99.99,,,,,,*56
$GNGSA,A,1,,,,,,,,,,,,,99.99,99.99,99.99*2E
$GNGSA,A,1,,,,,,,,,,,,,99.99,99.99,99.99*2E
$GPGSV,2,1,06,07,,,44,09,,,41,17,,,40,18,,,41*79
$GPGSV,2,2,06,28,,,40,30,,,45*73
$GLGSV,1,1,00*65
$GNGLL,,,,,,V,N*7A
```

**4. Play with SD Card**

- Step 1. Plug micro SD card to the SD card slot.
- Step 2. Select File--> Examples-->SD-->CardInfo sketch.
- Step 3. Press and hold BOOT button at back side of the Wio LTE Cat NB1 and plug the USB to PC.
- Step 4. We will see **STM BOOTLARDER** in device manager.
- Step 5. Select Tools-->Boards-->Wio Tracker LTE.
- Step 6. Keep COM Port blank.
- Step 7. Select Sketch-->Upload to upload the code to Wio_LTE.


```C++
// include the SD library:
#include <SD.h>

// set up variables using the SD utility library functions:
Sd2Card card;
SdVolume volume;
SdFile root;

// change this to match your SD shield or module;
// Arduino Ethernet shield: pin 4
// Adafruit SD shields and modules: pin 10
// Sparkfun SD shield: pin 8
const int chipSelect = 43;

void setup()
{
 // Open serial communications and wait for port to open:
  // SerialUSB.begin(115200);
  //  while (!Serial) {
  //   ; // wait for serial port to connect. Needed for Leonardo only
  // }


  SerialUSB.print("\nInitializing SD card...");
  // On the Ethernet Shield, CS is pin 4. It's set as an output by default.
  // Note that even if it's not used as the CS pin, the hardware SS pin 
  // (10 on most Arduino boards, 53 on the Mega) must be left as an output 
  // or the SD library functions will not work. 
  pinMode(SS, OUTPUT);


  // we'll use the initialization code from the utility libraries
  // since we're just testing if the card is working!
  while (!card.init(SPI_HALF_SPEED, chipSelect)) {
    SerialUSB.println("initialization failed. Things to check:");
    SerialUSB.println("* is a card is inserted?");
    SerialUSB.println("* Is your wiring correct?");
    SerialUSB.println("* did you change the chipSelect pin to match your shield or module?");
  } 
  
  // print the type of card
  SerialUSB.print("\nCard type: ");
  switch(card.type()) {
    case SD_CARD_TYPE_SD1:
      SerialUSB.println("SD1");
      break;
    case SD_CARD_TYPE_SD2:
      SerialUSB.println("SD2");
      break;
    case SD_CARD_TYPE_SDHC:
      SerialUSB.println("SDHC");
      break;
    default:
      SerialUSB.println("Unknown");
  }

  // Now we will try to open the 'volume'/'partition' - it should be FAT16 or FAT32
  if (!volume.init(card)) {
    SerialUSB.println("Could not find FAT16/FAT32 partition.\nMake sure you've formatted the card");
    return;
  }


  // print the type and size of the first FAT-type volume
  uint32_t volumesize;
  SerialUSB.print("\nVolume type is FAT");
  SerialUSB.println(volume.fatType(), DEC);
  SerialUSB.println();
  
  volumesize = volume.blocksPerCluster();    // clusters are collections of blocks
  volumesize *= volume.clusterCount();       // we'll have a lot of clusters
  volumesize *= 512;                            // SD card blocks are always 512 bytes
  SerialUSB.print("Volume size (bytes): ");
  SerialUSB.println(volumesize);
  SerialUSB.print("Volume size (Kbytes): ");
  volumesize /= 1024;
  SerialUSB.println(volumesize);
  SerialUSB.print("Volume size (Mbytes): ");
  volumesize /= 1024;
  SerialUSB.println(volumesize);

  
  SerialUSB.println("\nFiles found on the card (name, date and size in bytes): ");
  root.openRoot(volume);
  
  // list all files in the card with date and size
  root.ls(LS_R | LS_DATE | LS_SIZE);
}


void loop(void) {
  
}

```

- Step 8. Press **RST** button to enable the COM port.
- Step 9.Use COM monitor tools to print the serial message. **Please do not use Arduino IDE COM monitor! That may cause the next time downloading fail, but reopen Arduino IDE can recover that issue**.
- Step 10. Open serial monitor, we will see below info on screen.

```C++
Initializing SD card...
Card type: SDHC

Volume type is FAT32

Volume size (bytes): 2689048576
Volume size (Kbytes): 2626024
Volume size (Mbytes): 2564

Files found on the card (name, date and size in bytes):
```

**5. Play with Network RSSI**

- Step 1. Select File--> Examples-->WioLTE_Cat_NB1_Arduino_Library-->RSSI sketch.
- Step 2. Press and hold BOOT button at back side of the Wio LTE Cat NB1 and plug the USB to PC.
- Step 3. We will see **STM BOOTLARDER** in device manager.
- Step 4. Select Tools-->Boards-->Wio_Tracker_LTE.
- Step 5. Keep COM Port blank.
- Step 6. Select Sketch-->Upload to upload the code to Wio_LTE.


```c++
#include <ublox_sara_r4.h>
#include <UART_Interface.h>

Ublox_sara_r4 ublox = Ublox_sara_r4();

void setup() {
  
  SerialDebug.println("Begin...");
  ublox.powerOn();
  while(false == ublox.Check_If_Power_On()){
    SerialDebug.println("Waitting for module to alvie...");
    delay(1000);
  }  
  SerialDebug.println("Power On O.K!");

  delay(100);
  check_with_cmd("AT+UGPIOC=23,10\r\n", "OK", CMD);
  check_with_cmd("AT+UGPIOC=16,2\r\n", "OK", CMD);
}

void loop() {
	int signal;
	if(ublox.getSignalStrength(&signal)) {
		SerialDebug.print("RSSI: ");
		SerialDebug.println(signal, DEC);
	} else {
		SerialDebug.print("Error");
	}

	delay(1000);
 
}

```

- Step 7. Press **RST**, then you can see below info on screen.

```c++
AT+CSQ

+CSQ: 99,99

OKRSSI: 99

AT+CSQ

+CSQ: 99,99

OKRSSI: 99

AT+CSQ

+CSQ: 99,99

OKRSSI: 99

AT+CSQ

+CSQ: 99,99
```


**6. Play with Arduino Example TCP**

- Step 1. Select File--> Examples-->WioLTE_Cat_NB1_Arduino_Library-->Network-->tcp_directLink sketch. 
- Step 2. Press and hold BOOT button at back side of the Wio LTE Cat NB1 and plug the USB to PC.
- Step 3. We will see **STM BOOTLARDER** in device manager.
- Step 4. Select Tools-->Boards-->Wio_Tracker_LTE.
- Step 5. Keep COM Port blank.
- Step 6. Select Sketch-->Upload to upload the code to Wio_LTE.

```c++
#include <ublox_sara_r4.h>

Ublox_sara_r4 ublox = Ublox_sara_r4();

char *server = "www.arduino.cc";
uint16_t port = 80;
int sockId = -1;

void setup() {
	bool network_attached = false;

	Log_info("Begin...");
	
	ublox.powerOn();
	Log_info("Waitting for module to alvie...");
	while(false == ublox.isAlive()){
		Log(".");
		delay(100);
	} 
	Logln(); 

	Log_info("Initializing network..");
	if(!ublox.network_Init(120)) { 
		Log_error("Network initialize timeout.");
		while(1);
	}
	Log_info("APN: " + String(ublox._apn));
	Log_info("Local IP: " + String(ublox._str_ip));
	Log_info("Operator: " + String(ublox._operator));
	Log_info("Network attached.");
	
	// This method is import for setting transparent session
	// use disableDirectLinkMode() to use nontransparent session  
	ublox.enableDirectLinkMode();

	if(-1 == (sockId = ublox.createSocket(TCP))) {
		Log_error("Create socket error!");
		return;
	}
	if(!ublox.sockConnect(sockId, server, port)) {
		Log_error("connect to server failed.");
	}			
	Log_info("Sent TCP message in direct link mode.");
		
}	

void loop() {
	static uint8_t tries = 0;
	String str_msg = "ublox random number " + String(random(0,100));
	// String str_msg = "/txt HTTP"; 

	ublox.socketWrite((uint8_t *)str_msg.c_str(), (uint16_t)str_msg.length());
	Log_info("Send msg: " + str_msg);

	tries++;
	if(tries > 5) {
		if(ublox.sockClose(sockId)) {
			Log_info("Close socket.");
		}
		Log_info("Enter AT command mode.");
		while(true) AT_bypass();
	}

	delay(2000);
}


```

- Step 7. Press **RST**, then you can see below info on screen.

```c++
[INFO] Begin...
[INFO] Waitting for module to alvie...
...
[INFO] Initializing network..
.............................[INFO] APN: ctnb
[INFO] Local IP: 10.14.8.161
[INFO] Operator: 460 11 ????
[INFO] Network attached.
[INFO] Sent TCP message in direct link mode.
[INFO] Send msg: ublox random number 33
[INFO] Send msg: ublox random number 43
[INFO] Send msg: ublox random number 62
[INFO] Send msg: ublox random number 29
[INFO] Send msg: ublox random number 0
[INFO] Send msg: ublox random number 8
```


**7. Play with Arduino Example UDP**

- Step 1. Select File--> Examples-->WioLTE_Cat_NB1_Arduino_Library-->Network-->udp_directLink sketch. 
- Step 2. Press and hold BOOT button at back side of the Wio LTE Cat NB1 and plug the USB to PC.
- Step 3. We will see **STM BOOTLARDER** in device manager.
- Step 4. Select Tools-->Boards-->Wio_Tracker_LTE.
- Step 5. Keep COM Port blank.
- Step 6. Select Sketch-->Upload to upload the code to Wio_LTE.

```c++
#include <ublox_sara_r4.h>

Ublox_sara_r4 ublox = Ublox_sara_r4();

char *server = "time.nist.gov";
uint16_t port = 8888;
int sockId = -1;

void setup() {
	bool network_attached = false;

	Log_info("Begin...");
	
	ublox.powerOn();
	Log_info("Waitting for module to alvie...");
	while(false == ublox.isAlive()) {
		Log(".");
		delay(100);
	}  
	Logln("");

	Log_info("Initializing network..");
	if(!ublox.network_Init(120)) { 
		Log_error("Network initialize timeout.");
		while(1);
	}
	Log_info("APN: " + String(ublox._apn));
	Log_info("Local IP: " + String(ublox._str_ip));
	Log_info("Operator: " + String(ublox._operator));
	Log_info("Network attached.");
	
	if(-1 == (sockId = ublox.createSocket(UDP))) {
		Log_error("Create socket error!");
	}
	Log("[INFO] Create socket id: ");
	Logln(sockId);

	ublox.enableDirectLinkMode();
	if(!ublox.sockConnect(sockId, server, port)) {
		Log_error("connect to server failed.");
	}
	Log_info("Sent UDP message in direct link mode.");


		
}	

void loop() {
	static uint8_t tries = 0;

	String str_msg = "ublox random number " + String(random(0,100));

	ublox.socketWrite((uint8_t *)str_msg.c_str(), (uint16_t)str_msg.length());
	Log_info("Send msg: " + str_msg);

	tries++;
	if(tries > 5) {
		if(ublox.sockClose(sockId)) {
			Log_info("Close socket.");
		}
		while(true) AT_bypass();
	}

	delay(2000);
}

```

- Step 7. Press **RST**, then you can see below info on screen.

```
[INFO] Waitting for module to alvie...
...
[INFO] Initializing network..
....................[INFO] APN: ctnb
[INFO] Local IP: 10.178.48.90
[INFO] Operator: 460 11 ????
[INFO] Network attached.
[INFO] Create socket id: 0
[INFO] Sent UDP message in direct link mode.
[INFO] Send msg: ublox random number 33
[INFO] Send msg: ublox random number 43
[INFO] Send msg: ublox random number 62
[INFO] Send msg: ublox random number 29
[INFO] Send msg: ublox random number 0
[INFO] Send msg: ublox random number 8
[INFO] Close socket.
```

**8. Play with Arduino Example MQTT Subscribe**

- Step 1. Select File--> Examples-->WioLTE_Cat_NB1_Arduino_Library-->MQTTClient-->mqtt_sub sketch. 
- Step 2. Press and hold BOOT button at back side of the Wio LTE Cat NB1 and plug the USB to PC.
- Step 3. We will see **STM BOOTLARDER** in device manager.
- Step 4. Select Tools-->Boards-->Wio_Tracker_LTE.
- Step 5. Keep COM Port blank.
- Step 6. Select Sketch-->Upload to upload the code to Wio_LTE.

```c++
#include <Arduino.h>

#include <math.h>

#include <ublox_sara_r4.h>
#include <ublox_sara_r4_mqtt.h>
#include <UART_Interface.h>

#define PRE_FIX  "[MQTT] "

MQTT mqtt;
Ublox_sara_r4 ublox = Ublox_sara_r4();

char *server = "test.mosquitto.org";
uint16_t port = 1883;

void setup() {
	Log_info("Begin...");
	
	ublox.powerOn();
	Log_info("Waitting for module to alive...");
	while(false == ublox.isAlive()) {
		Log(".");
		delay(100);
	}  
	Logln();

	Log_info("Initializing network...");	
	if(!ublox.network_Init()) { 
		Log_error("Network initialize timeout.");
		return;
	}

	// Set MQTT server 
	if(!mqtt.setServer(server, port)) {
		Log_error("Set MQTT server failed");
		return;
	} else {
		Logln(PRE_FIX"Set MQTT server success.");
	}

	// Set will
	if(!mqtt.setWill("Heat", "ublox n/r410")) {
		Log_error("Set MQTT will failed");
		return;
	} else {
		Logln(PRE_FIX"Set MQTT will success.");
	}

	// Connect to server
	Logln(PRE_FIX"Connecting to server: " + String(server));
	while(!mqtt.connect()) {}
	Logln(CRLF PRE_FIX"Connected\n\r");
}	

void loop() 
{				
	static uint8_t tries = 0;	
	const char *topic = "Heat";
	String msg = String(random(2000, 3000)*1.0/100.0) + " degree";
	
		
	if(mqtt.publish(topic, msg.c_str())) {
		Logln(PRE_FIX" published Topic " + String(topic) + " Messagea " + msg);	
	} else {
		Log_error("MQTT publish failed");
		// while(true);
	}

	tries++;
	if(tries > 5)
	{
		if(mqtt.disconnect()) {
			Logln(PRE_FIX"Disconnect.");
		}
		Log_info("Enter AT command loop");
		while(true) AT_bypass();
	}
	
	delay(2000);
}

```


- Step 7. Press **RST**, then you can see below info on screen.

**9. Play with Arduino Example MQTT Publish**

- Step 1. Select File--> Examples-->WioLTE_Cat_NB1_Arduino_Library-->MQTTClient-->mqtt_pub sketch. 
- Step 2. Press and hold BOOT button at back side of the Wio LTE Cat NB1 and plug the USB to PC.
- Step 3. We will see **STM BOOTLARDER** in device manager.
- Step 4. Select Tools-->Boards-->Wio_Tracker_LTE.
- Step 5. Keep COM Port blank.
- Step 6. Select Sketch-->Upload to upload the code to Wio_LTE.

```c++
#include <Arduino.h>

#include <math.h>

#include <ublox_sara_r4.h>
#include <ublox_sara_r4_mqtt.h>
#include <UART_Interface.h>

#define PRE_FIX  "[MQTT] "

MQTT mqtt;
Ublox_sara_r4 ublox = Ublox_sara_r4();

char *server = "server name or IP";
uint16_t port = 1883;

void setup() {
	Log_info("Begin...");
	
	ublox.powerOn();
	Log_info("Waitting for module to alive...");
	while(false == ublox.isAlive()) {
		Log(".");
		delay(100);
	}  
	Logln();

	Log_info("Initializing network...");	
	if(!ublox.network_Init()) { 
		Log_error("Network initialize timeout.");
		return;
	}

	// Set MQTT server 
	if(!mqtt.setServer(server, port)) {
		Log_error("Set MQTT server failed");
		return;
	} else {
		Logln(PRE_FIX"Set MQTT server success.");
	}

	// Set will
	if(!mqtt.setWill("Heat", "ublox n/r410")) {
		Log_error("Set MQTT will failed");
		return;
	} else {
		Logln(PRE_FIX"Set MQTT will success.");
	}

	// Connect to server
	Logln(PRE_FIX"Connecting to server: " + String(server));
	while(!mqtt.connect()) {}
	Logln(CRLF PRE_FIX"Connected\n\r");
}	

void loop() 
{				
	static uint8_t tries = 0;	
	const char *topic = "Heat";
	String msg = String(random(2000, 3000)*1.0/100.0) + " degree";
	
		
	if(mqtt.publish(topic, msg.c_str())) {
		Logln(PRE_FIX" published Topic " + String(topic) + " Messagea " + msg);	
	} else {
		Log_error("MQTT publish failed");
		// while(true);
	}

	tries++;
	if(tries > 5)
	{
		if(mqtt.disconnect()) {
			Logln(PRE_FIX"Disconnect.");
		}
		Log_info("Enter AT command loop");
		while(true) AT_bypass();
	}
	
	delay(2000);
}

```
- Step 7. Press **RST**, then you can see below info on screen.



## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio_LTE_Cat_M1_NB-IoT_Tracker/res/WioLTE_Cat_NB1_Eagle-master.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



## Resource

- **[Eagle&PDF]** [WioLTE_Cat_NB1](https://files.seeedstudio.com/wiki/Wio_LTE_Cat_M1_NB-IoT_Tracker/res/WioLTE_Cat_NB1_Eagle-master.zip)

- **[Library]** [WioLTE_Cat_NB1_Arduino_Library](https://github.com/Seeed-Studio/WioLTE_Cat_NB1_Arduino_Library)

- **[Datasheet]** [AT Command](https://files.seeedstudio.com/wiki/Wio_LTE_Cat_M1_NB-IoT_Tracker/res/SARA-R4-SARA-N4_ATCommands_(UBX-17003787).pdf)


## Tech Support
 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/). 
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>