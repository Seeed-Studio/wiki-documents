---
name: Wio LTE Cat M1/NB-IoT Tracker
category: Actuator
bzurl: https://seeedstudio.com/Grove-Infrared-Emitter-p-993.html
oldwikiname: Grove_-_Infrared_Emitter
prodimagename: Grove-Infrared_Emitter.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/101020026 1.jpg
surveyurl: https://www.research.net/r/Grove-Infrared_Emitter
sku: 101020026
tags: grove_digital, io_3v3, io_5v, plat_duino, plat_pi, plat_wio
---


![](https://github.com/SeeedDocument/Wio_LTE_Cat_M1_NB-IoT_Tracker/raw/master/img/NBIOT1.JPG)

Seeed’s Wio LTE CAT M1/NB-IoT is designed for Low-Power Wide-Area Network (LPWAN) with CAT M1(eMTC) and NB-IoT combo module. Besides, It has an ARM Cortex-M4 MCU and GNSS module.

It’s Arduino and Espruino(JavaScript) compatible development board helps to track nearly any moving thing on the planet and then upload that data wirelessly. By integrating Grove connector, the Wio LTE CAT M1/NB-IoT allows for flexible communication solutions with Grove systems.

Wio LTE CAT M1/NB-IoT is well suited for outdoor projects where the device can connect to the satellite navigation system and provide a real-time location of the item it is attached to.

Wio LTE CAT M1/NB-IoT support Espruino(JavaScript) engine so that anyone can build IoT project rapidly, especially while you can use lot of resource of JavaScript community.


<p style=":center"><a href="https://www.seeedstudio.com/Wio-LTE-Cat-M1-NB1-p-3055.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

**Are you looking for the Twilio Developer Kit for T-Mobile Narrowband? Find the docs [here](https://www.twilio.com/docs/wireless/nb)**


## Version
| Product Version               | Changes                                  | Released Date |
|-------------------------------|------------------------------------------|---------------|
| Wio LTE Cat M1/NB-IoT v1.0    | Initial                                  | May 26, 2018  |


##　Specifications

- ARM Cortex-M4 microcontroller LTE CAT M1 and NB-IoT combo for
global
- GPS/GLONASS GNSS supported
- Espruino(JavaScript) compatible
- Arduino IDE compatible (partly)
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

!!!Tip
    Use Grove modules to expand your application. There are 6 Grove connects on board. If this is your first time to hear about Grove, please put had on [Grove System](http://wiki.seeedstudio.com/Grove_System/) for more details. In brief, Groves is hundreds of sensor that in standard style, which is consist of sensors, actuators, displays as well as communication.


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


![](https://github.com/SeeedDocument/Wio_LTE_Cat_M1_NB-IoT_Tracker/raw/master/img/front.png)

![](https://github.com/SeeedDocument/Wio_LTE_Cat_M1_NB-IoT_Tracker/raw/master/img/back.png)

!!!Tip
    If you want to use the on-board Grove connector, please use digitalWrite(B10, HIGH) to open 3V3_B. except D38 power on by default. Otherwise you can't provide power to Grove modules.

![](https://github.com/SeeedDocument/Wio_LTE_Cat_M1_NB-IoT_Tracker/raw/master/img/h3.png)


## Getting Started

### Install USB driver

- **Windows Users**: Most versions of Windows won't automatically load the built-in driver for USB com ports. You'll have to download ST's USB driver:

    - Non-Windows XP [Users download version 1.4.0 drivers](http://www.espruino.com/files/stm32_vcp_1.4.0.zip). Unzip the file, run the executable, and then go to C:\Program Files (x86)\STMicroelectronics\Software\Virtual comport driver in Windows Explorer and double-click either dpinst_amd64.exe for 64 bit systems, or dpinst_x86.exe for 32 bit.

    - Windows XP [Users download version 1.3.1 drivers](http://www.espruino.com/files/stm32_vcp_1.3.1.zip). Unzip the file, run VCP_V1.3.1_Setup.exe, and then go to C:\Program Files\STMicroelectronics\Software\Virtual comport driver in Windows Explorer and double-click the executable.

- **Linux users** to ensure that you have the correct permissions to connect as a normal user you'll need to copy the file [45-espruino.rules](https://github.com/espruino/Espruino/blob/master/misc/45-espruino.rules) to /etc/udev/rules.d, reload rules with udevadm control --reload-rules, and ensure your user is in the plugdev group (you can check by typing groups). You add it by typing sudo adduser $USER plugdev and then logging out and back in. Arch Linux users need to add their user to uucp and lock groups instead.

- **Mac OS X and Chromebook Users**: The board will just plug in and work, without drivers!

### Change DFU driver

**For windows users**: 

- Step 1. Press and hold BOOT button and connect to computer you will see **STM32 Device in DFU Mode** at device manager as below.

![](https://github.com/SeeedDocument/Wio_LTE/raw/master/img/before_driver_installation.png)

- Step 2. This says that you need to use [zadig_xx.exe](https://github.com/SeeedDocument/Wio_LTE/raw/master/res/zadig_2.1.2.exe) to change DFU driver from **STTub30** to **WinUSB** as below. If we can't see any info on the Zadig, please click Options--> List All Devices, then select STM32 Virtual COM Ports.

![](https://github.com/SeeedDocument/Wio_LTE/raw/master/img/zadig.png)

- Step 3. You will see the "STMicroelectronics Virtual COM Port" on device manager as below.

![](https://github.com/SeeedDocument/Wio_LTE/raw/master/img/after_driver_installation.png)


### Play with Arduino

**1. Software Configuration**

- Step 1. Install Arduino IDE, recommand IDE version upon 1.8.0.
- Step 2. Follow [How to Add Seeed boards to Arduino IDE](http://wiki.seeedstudio.com/Seeed_Arduino_Boards/) to add Seeed STM32F4 Boards into arduino board manager.
- Step 3. Download the [WioLTE_Cat_NB1_Arduino_Library](https://github.com/lanselambor/WioLTE_Cat_NB1_Arduino_Library) from Github.
- Step 4. Refer [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.
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


### Play with Javascript

Thanks to G.Williams for providing Espruino the Javascript interpreter, so that we can prototype things with Javascript.

**Update Firmware**

- Step 1: For the latest firmware, you can download from [**here**](http://www.espruino.com/binaries/).  The firmware is named as **espruino_xxx_Wio_LTE.bin**.  
- Step 2: Install [dfu-util](http://dfu-util.sourceforge.net/releases/), add **dfu-util** to **PATH** or **Environment Variables**, so that we can use it directlly in **command line**.
- Step 3: Press and hold **BOOT0** button before connect to computer, release after connect.
- Step 4: The Wio LTE board will access **DFU mode**.
- Step 5: In **command line windows** type **dfu-util -d 0483:df11 -c 1 -i 0 -a 0 -s 0x08000000 -D xxx.bin**. For windows, Please enter the full path of the bin file.

![dfu-flash](https://github.com/SeeedDocument/Wio_LTE/blob/master/img/wio_tracker_lte_v1_dfu-flash.png?raw=true)


**1. Install Espruino web IDE**

- Step 1: Install [Chrome Web Browser](https://www.google.com/intl/en/chrome/browser/)
- Step 2: [Click here to get Espruino Web IDE](https://chrome.google.com/webstore/detail/espruino-web-ide/bleoifhkdalbjfbobjackfdifdneehpo)
- Step 3: Run Espruino Web IDE from chrome's home screen or the App Launcher (type **chrome://apps*** at the address bar)

![Espruino Web IDE](https://github.com/SeeedDocument/Wio_LTE/blob/master/img/wio_tracker_lte_v1_WebIDE.png?raw=true)

**2. How to use Espruino Web IDE**

- Step 1: Connect the Wio LTE board to computer using a micro USB cable. On device manager you can see a new COM Port device, on MacOS it is  **STM32 Virtual ComPort**, on windows it is **STMicroelectronic Virtual COM Port**.

- Step 2: On the Web IDE click the left top icon, choose Espruino board in the select box.

![](https://github.com/SeeedDocument/Wio_LTE/blob/master/img/wio_tracker_lte_v1_connectWebIDE.png?raw=true)

- Step 3: To learn more about the IDE, please click help and then tour as below.

![](https://github.com/SeeedDocument/Wio_LTE/blob/master/img/wio_tracker_lte_v1_WebIDEGuide.png?raw=true)


**3. How to load modules**

In Espruino, Modules are pieces of pre-written code (libraries) that perform common tasks, such as interfacing to different bits of hardware.

They can currently be used in a few different ways:

**3.1. Espruino Web IDE**

If you're using the Espruino Web IDE, simply write require("modulename") on the right-hand side - as you would have seen in the reference pages. When you click the Send to Espruino button, the Web IDE will automatically look online for minified versions of the modules you need, download them, and load them onto the board. You don't need an SD card or an internet connection to the Espruino board itself.

**3.2. Load Module - the default mechanism**

If you are using the Web IDE as is, the modules will be loaded from [http://www.espruino.com/modules/](http://www.espruino.com/modules/). This URL can be changed in Web IDE settings.

To save space, most modules are provided as a minified version and the Web IDE tries to load minified versions first with default configuration.

For example, using require("ADNS5050"); will make the Web IDE loading the minified module from [http://www.espruino.com/modules/ADNS5050.min.js](http://www.espruino.com/modules/ADNS5050.min.js).

**3.3. Load Module from Github**

For now, as you can type a URL into require, you can actually just pull a module right off GitHub:
```
require("https://github.com/espruino/EspruinoDocs/blob/master/devices/PCD8544.js");
```
You can even look at the history of something on GitHub, and can then require a specific version of that file with:
```
require("https://github.com/espruino/EspruinoDocs/blob/d4996cb3179abe260c030ed02bcb0d2384db6bbd/devices/PCD8544.js");
```
The URL comes from clicking **<>** by the commit you were interested in.

**3.4. Load Module from NPM**

If you activate this option in Web IDE, you can load modules from the NPM repository. Right now it:

- only loads the latest version there.
- only works if the module contains a single file.
- can cause some confusion with Espruino's modules, for instance clock.

For example using require("async"); will make the Web IDE loading the tar.gz file (with automatic extraction) of the module from [http://registry.npmjs.org/async](http://registry.npmjs.org/async).

**3.5. Load Module from local folder**

If you are using a local project folder, the Web IDE will automatically create an empty modules folder inside. Put a module there and you can load it with require("myCustomModule");.

![](https://github.com/SeeedDocument/Wio_LTE/blob/master/img/wio_tracker_lte_v1_projectFiles.png?raw=true)

With default Web IDE configuration, it will look for modules following this order:

* local minified
* online minified
* local normal
* online normal

If your own module has the same name as one of the existing ones, the Web IDE will use the minified version from online first.

If you need it anyway, you can provide a local minified version or you can change the Web IDE configuration from .min.js|.js to .js|.min.js or even myCustomModule.js|.min.js|.js to get it working.

**3.6. Stand-alone Espruino**

If you have an Espruino with an SD card (but you're not using the Web IDE), you can copy the modules you need into a directory called 'node_modules' on the SD card. Now, whenever you write require("modulename") the module will be used.

**3.7. Internet-enabled Espruino**

Right now there isn't a way to make Espruino automatically load a module from the internet when **required** without the Web IDE. This may be added in the future, but the fact that require is synchronous while network connections are asynchronous makes this difficult to do reliably until **yield** is added into the interpreter.

Until then, the following asyncronous code will dynamically load a module from the internet on demand.

```javascript
function loadModule(moduleName, callback) {
  require("http").get("http://www.espruino.com/modules/"+moduleName+".js", function(res) {
    var contents = "";
    res.on('data', function(data) { contents += data; });
    res.on('close', function() {
      Modules.addCached(moduleName, contents);
      if (callback) callback();
    });
  }).on('error', function(e) {
    console.log("ERROR", e);
  });
}
```


**4. Play with Onboard RGB LED**

- Step 1. Config the R, G, B numbers, the arrange is 0~255.
- Step 2. Copy the code to IDE and upload to board.
- Step 3. The on board RBG LED will be turned on.

```javascript
WioLTE.setLEDPower(true);
WioLTE.LED(r,g,b); // please modify the RGB to values with range 0..255)
```

```Javascript
// Dynamic colors show
WioLTE.setLEDPower(true);

var rgb = new Uint8ClampedArray(3);
var pos = 0;
function getPattern() {
  pos++;
  for (var i=0;i<rgb.length;) {
    rgb[i++] = (1 + Math.sin((i+pos)*0.1324)) * 10;
    rgb[i++] = (1 + Math.sin((i+pos)*0.1654)) * 10;
    rgb[i++] = (1 + Math.sin((i+pos)*0.1)) * 10;
  }
  return rgb;
}
setInterval(function() {
  var color = getPattern();
  WioLTE.LED(color[0], color[1], color[2]);
}, 100);
```

**5. Play with SD Card**

!!!Note
    Epruino firmware v1.94 is not support SD card drive, please use v1.96 or later, the latest version is v1.99.

- Step 1. Plug a micro SD card to the card slot, please format the SD card as FAT32.
- Step 2. Copy the code to Espruino IDE and upload it.

```javascript
var fs = require('fs');

// Init SDCard
WioLTE.init;

// List files
console.log('List files on root path:\r\n', fs.readdirSync());
// Write file  
fs.writeFileSync("hello.txt", "Hello World");
// read file
console.log(fs.readFileSync("hello.txt"));
// append file
fs.appendFileSync("hello.txt", "!!!");
// read again
console.log(fs.readFileSync("hello.txt"));
```

**6. Play with Grove Module**

**6.1. Play with Digital Ports**

**6.1.1 Grove-Button (Input)**

- Step 1. Conenct Grove-Button to Wio LTE D38 port.
- Step 2. Copy the code to IDE and upload to board.
- Step 3. We will see the "Pressed" when we press the button. Or else, we will see "Released" printed on screen.

```javascript
WioLTE.setGrovePower(true);
var button = new (require("GroveButton"))(WioLTE.D38, function(e) {
  if (e.state) console.log("Pressed");
  else console.log("Released");
});
```

**6.1.2 Grove-Ralay (Output)**

- Step 1. Conenct Grove-Ralay to Wio LTE D38 port.
- Step 2. Copy the code to IDE and upload to board.
- Step 3. We will hear the Relay switch and see the "Done" printed on screen.

```javascript
WioLTE.setGrovePower(true);
var relay = new (require('GroveRelay'))(WioLTE.D38);
setInterval(function() {
  relay.off();
  relay.pulse(1000, function() {
    console.log("Done!");
});
}, 2000);
```

**6.2. Play with Analog Ports**

- Step 1. Conenct Grove-Light Sensor to Wio LTE A4 port.
- Step 2. Copy the code to IDE and upload to board.
- Step 3. We will see the numbers printed on screen.
```javascript
WioLTE.setGrovePower(true);
var light = new (require('GroveLightSensor'))(WioLTE.A4);
setInterval(function() {
  console.log(light.read());
}, 500);
```

**6.3. Play with UART Ports**

- Step 1. Conenct Grove-GPS to Wio LTE UART port.
- Step 2. Copy the code to IDE and upload to board.

```javascript
WioLTE.setGrovePower(true);
Serial1.setup(9600,{tx:WioLTE.UART[1],rx:WioLTE.UART[0]});
var gps = new (require('GPS')).connect(Serial1, function(data) {
  console.log(data);
});
```
- Step 3. We will see time, lat, lon, satellites and altitude info printed on screen as below.
```
{  "time": "09:35:02", "lat": 30.69766, "lon": 104.05367833333, "fix": 1, "satellites": 6, "altitude": 537.2 }
{  "time": "09:35:03", "lat": 30.69765166666, "lon": 104.05366166666, "fix": 1, "satellites": 6, "altitude": 537.2 }
{  "time": "09:35:04", "lat": 30.69765, "lon": 104.05363833333, "fix": 1, "satellites": 6, "altitude": 537.1 }
```

**6.4. Play with I2C Ports**

- Step 1. Conenct Grove 3-Axis Digital Accerlerometer(±16g) to Wio LTE I2C port.
- Step 2. Copy the code to IDE and upload to board.

```javascript
WioLTE.setGrovePower(true);
I2C1.setup({scl:WioLTE.I2C[0], sda:WioLTE.I2C[1]});
var accel = require("ADXL345").connect(I2C1,0,0);
accel.measure(true);
setInterval(function(){
  console.log(accel.read());
},2000);
```
- Step 3. We will see x, y and z info printed on screen as below.

```
{ "x": -0.05859375, "y": -0.46484375, "z": 0.76953125 }
{ "x": -0.0546875, "y": -0.46484375, "z": 0.765625 }
{ "x": -0.0546875, "y": -0.46875, "z": 0.7578125 }
{ "x": -0.05078125, "y": -0.47265625, "z": 0.765625 }
{ "x": -0.0546875, "y": -0.46484375, "z": 0.77734375 }
{ "x": -0.0546875, "y": -0.46875, "z": 0.765625 }
{ "x": -0.0546875, "y": -0.46875, "z": 0.765625 }
{ "x": -0.05078125, "y": -0.47265625, "z": 0.765625 }
```

**6.5 Javascript APIs**

For more info, please refer to [Wio_LTE_Module](http://www.espruino.com/modules/wiolte.js)

- debug(boolean, boolean) - choose debug level
- reset(callback) - Reset LTE
- init(callback) - Initialise LTE
- getVersion(callback) - returns LTE firmware version
- connect(apn, username, password, callback) - Connect to mobile network
- getVersion(callback) - returns current version
- getIP(callback) - Get current IP address
- geoLocStart(period_in_milliseconds) - Start getting geolocation data
- geoLocStop() - Stop getting geolocation data
- geoLocGet(callback) - Get last location
- geoLocConvert(callback(err,latlong)) - Get last location as latitude/longitude
- board.SMS - SMS functionality with init/read/send/list/delete functions based on the [[ATSMS]] module
- board.Call, with:
  - call(number, callback)
  - answer(callback)
  - hangup(callback)
  - handleRing(boolean) - if trie, will call any function added with board.on('RING', ...)
- sleep(callback) -  LTE modem get into sleep mode, it can save about 100mA
- wake(callback) -  LTE modem wake up from sleep mode


## Resource

- **[Eagle&PDF]** [WioLTE_Cat_NB1](https://github.com/SeeedDocument/Wio_LTE_Cat_M1_NB-IoT_Tracker/raw/master/res/WioLTE_Cat_NB1_Eagle-master.zip)

- **[Library]** [WioLTE_Cat_NB1_Arduino_Library](https://github.com/Seeed-Studio/WioLTE_Cat_NB1_Arduino_Library)

- **[Datasheet]** [AT Command](https://github.com/SeeedDocument/Wio_LTE_Cat_M1_NB-IoT_Tracker/raw/master/res/SARA-R4-SARA-N4_ATCommands_(UBX-17003787).pdf)


## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>