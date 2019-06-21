---
name:  Wifi Bee‏‎
category: Discontinued
bzurl:
oldwikiname: Wifi_Bee‏‎
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Wifi_Bee
sku:
tags:
---

![](https://github.com/SeeedDocument/Wifi_Bee/raw/master/img/Seeedstudio_Wifibee_MRF24WB0MA.jpg) ![](https://github.com/SeeedDocument/Wifi_Bee/raw/master/img/SeeedStudio_Wifibee_ATMega328.jpg)

**Wifi Bee** is a xBee Pro socket compatible standalone MCU node useful for Wireless Sensor Network. It integrates Microchip IEEE 802.11 Wi-Fi transceiver module [MRF24WB0MA](http://www.microchip.com/wwwproducts/Devices.aspx?dDocName=en548014) and a 8bit AVR MCU [ATMega328P](http://www.atmel.com/dyn/products/product_card.asp?part_id=4198). The smart and xBee Pro Socket compatible outlook makes it very easy to integrate in your product. The **ATMega328P** could be directly programmed under the open source Arduino IDE when you plug it on to the [UartSBee](https://seeeddoc.github.io/UartSBee/)  or [Grove - XBee Carrier](https://seeeddoc.github.io/Grove-XBee_Carrier/) . The SPI pins on MCU are connected to the corresponding pins of MRF24WB0MA to communicate with each other, while some of the other pins (DIO, AD,PWM etc.) are brought out to the 20 pins of 2.0 mm male pin headers. Please note there is no dedicated firmware for Wifi Bee yet now, but you may use the firmware of [WiShield](https://github.com/asynclabs/WiShield) from AsyncLabs. Please make sure you can use it before you buy.

Model: [WLS48188P](http://www.seeedstudio.com/depot/wifi-bee-p-823.html?cPath=139_141&amp;zenid=15bcf2644eb7ecf4b3722eb98c79b074)



##   Features   ##

- xBee compatible headers

- Programmable using Arduino IDE

- Arduino Duemilanove bootloader preprogrammed

- Supports low power and low data rate Wi-Fi.

- 802.11b compatible

- WEP, WPA-PSK, WPA2-PSK Security

- LEDs for PWR and Wi-Fi connection indication.

##   Application Ideas   ##

- Wireless Local Area Network

- Wireless Sensor Network using [Grove - XBee Carrier](https://seeeddoc.github.io/Grove-XBee_Carrier/)
- Internet connectivity

- Build endless network applications with [uIP TCP/IP Stack](https://en.wikipedia.org/wiki/UIP_(micro_IP))
- Ideal for people wanting to learn and experiment with TCP/IP Stack

##   Schematic   ##

![](https://github.com/SeeedDocument/Wifi_Bee/raw/master/img/Wifi_Bee_v0.91b.png)

[Click here to open schematic in PDF format](http://wiki.seeedstudio.com/images/9/9f/WifiBee_v0.91b.pdf)

##   Key Specification   ##

 |Item|Minimum| Typical| Maximum
 |---|---|---|---|
 |Operate voltage|3.0V|3.3V|3.6V
 |Working temperature|0°C to +70°C|||
 |Working frequency|16MHz|||
 |MCU|ATmega328P||||

##   Mechanical Dimensions   ##

Wifi Bee is of 27.2mm x 35.7mm size.

![](https://github.com/SeeedDocument/Wifi_Bee/raw/master/img/Wifi_Bee_v0.91b_pcb.png)

##   Hardware  ##

![](https://github.com/SeeedDocument/Wifi_Bee/raw/master/img/Seeedstudio_WifiBee_Parts.png)
**Wifi Bee** - Parts

###   Pin definition & Rating   ###

|Pin|#|Pad Type|Description|Arduino Pin Number|
|---|---|---|---|---|
|3V3|1|Supply input|VCC, +3.3V|-|
|TX|2|Output|Uart Tx port|1(DIO)|
|RX|3|Input|Uart Rx port|0(DIO)|
|PB0|4|Input/Output|ATmega328P PB0|8(DIO)|
|!RESET|5|Input|ATmega328 Reset port|||
|PD7|6|Input/Output|ATmega328P PD7|7(DIO)|
|PD6|7|Input/Output|ATmega328P PD6|6(DIO)|
|PD5|8|Input/Output|ATmega328P PD5|5(DIO)|
|!DTR|9|Input|Used for programming the ATmega328P|  -
|GND|10|GND|GND| -|
|PC1|11|Input/Output|ATmega328P PC1|1(Analog input)/15(DIO)|
|PC0|12|Input/Output|ATmega328P PC0|0(Analog input)/14(DIO)|
|AD7|13|Input|ATmega328P ADC7|7(Analog input)|
|VREF|14|Input|ATmega328P AREF port| -|
|AD6|15|Input|ATmega328P ADC6|6(Analog input)|
|INT1|16|Input/Output|ATmega328P PD3|3(DIO)|
|PC3|17|Input/Output|ATmega328P PC3|3(Analog input)/17(DIO)|
|PC2|18|Input/Output|ATmega328P PC2|2(Analog input)/16(DIO)|
|SCLSCL	|19	|Input/Output|	ATmega328P |PC5	5(Analog input)/19(DIO)|
|SDA	|20|	Input/Output|	ATmega328P PC4	|4(Analog input)/18(DIO)|

##   Usage   ##

###   Hardware Installation   ###

- The best way to use Wifi Bee is to connect it to [Grove - XBee Carrier](https://seeeddoc.github.io/Grove-XBee_Carrier/) . [Grove - XBee Carrier](https://seeeddoc.github.io/Grove-XBee_Carrier/)  provides USB-UART connectivity for programming and Power Supply with its built-in 3.3V LDO regulator.

![](https://github.com/SeeedDocument/Wifi_Bee/raw/master/img/Bee_Stem_Connected_to_Wifi_BEE_and_A_Twig.jpg)
Grove - XBee Carrier - Connected to **Wifi Bee** and  Powered By USB

###   Programming   ###

####   Wireless Network Setup   ####

This section gives a brief overview on setting up a Home Network with a WiFi router suitable for **Wifi Bee**.

![](https://github.com/SeeedDocument/Wifi_Bee/raw/master/img/WifiBee_Network_Architecture.jpg)
Wireless Sensor Network - Sample Architecture with Wifi Bee Nodes

1.Login to web configuration interface of WiFi router using a web browser. Normally a default IP address like 192.168.0.1 and a Login id:admin and Password:password is provided by the router manufacturer. Use this.

2.In the above case the router IP address 192.168.0.1 is also the Gateway IP Address of the Wireless Network. The subnet mask for this IP address is 255.255.255.0
3.Set a name or SSID for the Wireless Network. Let us set it to HOMENETWORK. This name will be used throughout the tutorial.

4.Any node that connects to a router gets an IP address through DHCP. But, Wifi Bee does not support DHCP. We have to assign a static IP address. Many routers provide address reservation using MAC address for network devices. In LAN setup section of wireless router, reserve IP address 192.168.0.4 for **Wifi Bee**.

- 1.Enter the IP address to be reserved as 192.168.0.4. This is the IP address of **Wifi Bee**
- 2.You need to enter the MAC address displayed on Wifi Bee in the form of AB:CD:EF:GH:IJ:KL
- 3.Give the device-name as WIFIBEE. This name can be any word and not very important.

5.Configure the Security options of the Network. Wifi Bee supports **Open(Security disabled), WEP (Wired Equivalent Privacy), WPA-PSK (Wi-Fi Protected Access Pre-Shared Key) and WPA2-PSK (Wi-Fi Protected Access 2 with Pre-Shared Key)**. Set a suitable security option. This setting is used by **Wifi Bee** for establishing connection.

- 1.Let us set security option to WPA-PSK.

- 2.WPA-PSK mode requires WPA-PSK Security Encryption Network Key. Set this key to 12345678

6.Consult the router's user guide for configuring other setting like connecting to internet, etc..

####   Downloading and configuring the Library for running the application examples  ####

The application examples uses the WiSheild library of Asynclabs. There is no other dedicated firmware for **Wifi Bee**. This library uses **uip TCP/IP stack** of Adam Dunkels.
This library is provided under GPL v2 by the original author. Hence, any application that could be built with WiShield should also be GPLv2 compatible.

1.Download the library from [WiShield](https://github.com/asynclabs/WiShield).

2.Extract the contents to Arduino **/libraries/WiShield directory**.

3.The library comes with many application examples. It is written in a configurable manner such that only the required functionality is built. This saves FLASH.

- This configuration is handled in **/libraries/WiShield/apps-conf.h**.

- Uncomment the desired mode for the application that you are building like WEB-SERVER or WEB-CLIENT or SOCKET Application, etc.. in **/libraries/WiShield/apps-conf.h file**.

- For example if you want to build a Web Server Application the **#define APP_WEBSERVER** should have been uncommented and all other modes are commented. These change requires rebuild of the library. Hence close and re-open Arduino IDE.

4.Let us build the WebServer example.

- Set the mode configuration as APP_WEBSERVER in **/libraries/WiShield/apps-conf.h**.

- Open /libraries/WiShield/examples/WebServer/**WebServer.pde** sketch in Arduino IDE

- Set the  **local_ip[]** array to **{192,168,0.4}**. This the IP address **Wifi Bee** as configured above.

- Set the **gateway_ip[]** array to **{192,168,0,1}**. This is the router's IP address as configured in network setup above.

- Set the **subnet_mask[]** array to **{255,255,255,0}**. This is the sub-net mask for the local wireless network.

- Set **prog_char ssid[]** to **{"HOMENETWORK"}**. This name was also assigned during network setup.

- Next step is to set the **security_type** to security options configured during network setup. Set to 2 (i.e WPA) as configured in Wifi router.

- `//unsigned char security_type = 2;	// 0 - open; 1 - WEP; 2 - WPA; 3 - WPA2 `

- Also set ` const prog_char security_passphrase[] PROGMEM = {"12345678"} `

5.The modified WebServer.pde sketch looks like the code listed below.

6.Set the board type to **Arduino Duemilanove** and compile the sketch.

7.Upload it  **Wifi Bee** and press the Reset button

8.If every thing goes fine the Wifi Bee connects to HOMENETWORK and the BLUE LED (WIFI LED) glows

9.Open a web browser from a PC connected to HOMENETWORK and type the URL `[http://192.168.0.4]`

10.You would get the message `Hello World!! I am WifiBee.`

```
/*
 * Web Server: Modified WebServer.pde example.
 * A simple web server example using the WiShield library and WiBee.
 */

#include <WiShield.h>

#define WIRELESS_MODE_INFRA	1
#define WIRELESS_MODE_ADHOC	2

// Wireless configuration parameters ----------------------------------------
unsigned char local_ip[] = {192,168,0,4};	// IP address of Wifi Bee
unsigned char gateway_ip[] = {192,168,0,1};	// router or gateway IP address
unsigned char subnet_mask[] = {255,255,255,0};	// subnet mask for the local Wireless network
const prog_char ssid[] PROGMEM = {"HOMENETWORK"};	// max 32 bytes

unsigned char security_type = 2;	// 0 - open; 1 - WEP; 2 - WPA; 3 - WPA2

// WPA/WPA2 passphrase
const prog_char security_passphrase[] PROGMEM = {"12345678"};	// max 64 characters. The network name.

// WEP 128-bit keys
// sample HEX keys
prog_uchar wep_keys[] PROGMEM = {	0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d,	// Key 0
					0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,	0x00,	// Key 1
					0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,	0x00,	// Key 2
					0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,	0x00	// Key 3
				};

// setup the wireless mode
// infrastructure - connect to AP
// adhoc - connect to another WiFi device
unsigned char wireless_mode = WIRELESS_MODE_INFRA;

unsigned char ssid_len;
unsigned char security_passphrase_len;
//---------------------------------------------------------------------------

void setup()
{
	WiFi.init();
}

// This is the webpage that is served up by the webserver
const prog_char webpage[] PROGMEM = {"HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n<center><h1>Hello World!! I am WifiBee.</h1></center>"};

void loop()
{
	WiFi.run();
}
```

###   Examples   ###

####   Simple Web Server that sends sensor value to Web browser  ####

-  Use the network setup as describe above.

-  Use the [Grove - XBee Carrier](https://seeeddoc.github.io/Grove-XBee_Carrier/) for programming and power.

-  Configure apps-conf.h, such that only APP_WISERVER mode is used.

-  Compile and upload the following sketch to **Wifi Bee** using Arduino IDE as described for above example.

-  Press the reset button. Wait for the Wifi Bee to connect to WiFi network (Blue LED glows).

-  Verbose information of the network communication can be seen; if, serial port terminal is open in Arduino IDE (with 57600 baud).

-  Open a web browser from a PC connected to HOMENETWORK and type the URL `[http://192.168.0.4]`
-  WifiBee serves the Sensor value to browser. The HTML code is written in such a way that it auto refreshes every 10 seconds.

```
/*
 * A simple sketch that uses WiServer and Seeedstudios Wifi Bee to serve a webpage.
 * An analog sensor is connected to A2 of Wifi Bee (use Grove - XBee Carrier). This value is sent to the
 * client (a web browser). The HTML page is prepared based on sensor value. It also has direction
 * to refresh itself automatically.
 */

/*This example is based on SimpleServer.pde. Copyrights rests with original author */

/* for this example to work, modify apps-conf.h file as below ; only APP_WISERVER mode is enabled :
--------------------------------------------------------------------

//Here we include the header file for the application(s) we use in our project.
//#define APP_WEBSERVER
//#define APP_WEBCLIENT
//#define APP_SOCKAPP
//#define APP_UDPAPP
#define APP_WISERVER
----------------------------------------------------------------------
*/

#include <WiServer.h>

#define WIRELESS_MODE_INFRA	1
#define WIRELESS_MODE_ADHOC	2

// Wireless configuration parameters ----------------------------------------
unsigned char local_ip[] = {192,168,0,4};	// IP address of WifiBee
unsigned char gateway_ip[] = {192,168,0,1};	// router or gateway IP address
unsigned char subnet_mask[] = {255,255,255,0};	// subnet mask for the local network
const prog_char ssid[] PROGMEM = {"HOMENETWORK"};	// max 32 bytes

unsigned char security_type = 2;	// 0 - open; 1 - WEP; 2 - WPA; 3 - WPA2

// WPA/WPA2 passphrase
const prog_char security_passphrase[] PROGMEM = {"12345678"};	// max 64 characters

// WEP 128-bit keys
// sample HEX keys
prog_uchar wep_keys[] PROGMEM = { 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d,	// Key 0
				  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,	// Key 1
				  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,	// Key 2
				  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00	// Key 3
				};

// setup the wireless mode
// infrastructure - connect to AP
// adhoc - connect to another WiFi device
unsigned char wireless_mode = WIRELESS_MODE_INFRA;
unsigned int  sensorValue;
unsigned char ssid_len;
unsigned char security_passphrase_len;
// End of wireless configuration parameters ----------------------------------------

int counter;
// This is our page serving function that generates web pages
boolean sendMyPage(char* URL) {

    // Check if the requested URL matches "/"
    if (strcmp(URL, "/") == 0) {
        // Use WiServer's print and println functions to write out the page content
        WiServer.print("<html>");

        // Instruct the web broweser to refersh every 10 seconds
        WiServer.print("<head><meta http-equiv=\"refresh\" content=\"10\"> </head>");
        WiServer.println("<H1>WifiBee Connected...<H1>");
        WiServer.print("<H2>Sensor Value = ");
        WiServer.print(sensorValue);  //A2 is connected to an exernal sensor. The RAW value is send to the client.
        WiServer.print("</H2></html>");
        return true;
    }
    // URL not found
    return false;
}

void setup() {

  // Initialize WiServer and have it use the sendMyPage function to serve pages
  WiServer.init(sendMyPage);

  // Enable Serial output and ask WiServer to generate log messages (optional)
  Serial.begin(57600);
  WiServer.enableVerboseMode(true);
}

void loop(){
  sensorValue = analogRead(A2);  //A2 is connected to an exernal sensor via Grove interface in Grove - XBee Carrier .
  // Run WiServer
  WiServer.server_task();
  delay(10);
}
```

####   Simple Web Client that sends sensor feeds to Pachube.com  ####

` This section will be revised later `

-  Use the network setup as describe above.

-  Use the [Grove - XBee Carrier](https://seeeddoc.github.io/Grove-XBee_Carrier/)  for programming and power.

-  Configure apps-conf.h, such that only APP_WISERVER mode is used.

-  Compile and upload the following sketch to **Wifi Bee** using Arduino IDE as described for above example.

-  Press the reset button. Wait for the Wifi Bee to connect to WiFi network (Blue LED glows).

-  Verbose information of the network communication can be seen; if, serial port terminal is open in Arduino IDE (with 57600 baud).

-  Wifi Bee periodically feeds the data to Pachube.com

```
/*
 * A simple sketch that uses WiServer library and Seeedstudio's WifiBee to send sensor
 * feed to pachube.com ;
 * This is modified version SimpleClient.pde. Copyright rests with original author.
 */

/* for this example to work, modify apps-conf.h file as below ; only APP_WISERVER mode is enabled :
--------------------------------------------------------------------
//Here we include the header file for the application(s) we use in our project.
//#define APP_WEBSERVER
//#define APP_WEBCLIENT
//#define APP_SOCKAPP
//#define APP_UDPAPP
#define APP_WISERVER
----------------------------------------------------------------------
*/


#include <WiServer.h>

#define WIRELESS_MODE_INFRA	1
#define WIRELESS_MODE_ADHOC	2

// Wireless configuration parameters ----------------------------------------
unsigned char local_ip[] = {192,168,0,4};	// IP address of WifiBee
unsigned char gateway_ip[] = {192,168,0,1};	// router or gateway IP address
unsigned char subnet_mask[] = {255,255,255,0};	// subnet mask for the local network
const prog_char ssid[] PROGMEM = {"HOMENETWORK"};// max 32 bytes

unsigned char security_type = 2;	// 0 - open; 1 - WEP; 2 - WPA; 3 - WPA2

// WPA/WPA2 passphrase
const prog_char security_passphrase[] PROGMEM = {"12345678"};	// max 64 characters

// WEP 128-bit keys
// sample HEX keys
prog_uchar wep_keys[] PROGMEM =
{ 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d,	// Key 0
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,	// Key 1
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,	// Key 2
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00	// Key 3
};

// setup the wireless mode
// infrastructure - connect to AP
// adhoc - connect to another WiFi device
unsigned char wireless_mode = WIRELESS_MODE_INFRA;

unsigned char ssid_len;
unsigned char security_passphrase_len;
// End of wireless configuration parameters ----------------------------------------


// Function that prints data from the server
void printData(char* data, int len) {

  // Print the data returned by the server
  // Note that the data is not null-terminated, may be broken up into smaller packets, and
  // includes the HTTP header.
  while (len-- > 0) {
    Serial.print(*(data++));
  }
}

int sensorValue=0;
//Prepare data to the feed
void pachubefeedData()
{
   sensorValue=analogRead(A2);   //Read analog sensor connected to A2 (Use Grove - XBee Carrier interface)
   WiServer.print(sensorValue);
}



// IP Address for pachube.com
uint8 ip[] = {173,203,98,29};

char hostName[] = "www.pachube.com\nX-PachubeApiKey: YOUR_API_KEY_HERE\nConnection: close"; // Replace YOUR_API_KEY_HERE , with your API key
char url[] = "/api/12345.csv?_method=put"; //Replace 12345 with your feed number

// A request that POSTS data to Pachube
POSTrequest postPachubeFeed(ip, 80, hostName, url, pachubefeedData);


void setup() {
    // Initialize WiServer (we'll pass NULL for the page serving function since we don't need to serve web pages)
  WiServer.init(NULL);

  // Enable Serial output and ask WiServer to generate log messages (optional)
  Serial.begin(57600);
  WiServer.enableVerboseMode(true);

  // Have the processData function called when data is returned by the server
  postPachubeFeed.setReturnFunc(printData);
}


// Time (in millis) when the data should be retrieved
long updateTime = 0;

void loop(){

  // Check if it's time to send an update
  if (millis() >= updateTime) {
    postPachubeFeed.submit();    
    // Send another update after a min
    updateTime += 60;
  }

  // Run WiServer
  WiServer.server_task();

  delay(10);
}
```

##   Bill of Materials (BOM) /parts list   ##

|Part|Quantity|Value|Package|
|---|---|---|---|
|C1|1|10u|C_TAN_3X3.5|
|C2,C3|2|1u|0603|
|C4|1|100n|0603|
|J1|1|CK_2X3_2.0|CK_2X3_2.0|
|PWR|1|red|LED0603|
|R1|1|10k|0603|
|R2,R3,R4,R5,R7|5|4.7k|0603|
|R6|1|1k|0603|
|U1|1|OPEN_BEE|XBEE_EXT_SMD|
|U3|1|MRF24WB0MA|MRF24WB0MA|
|U4|1|ATmega328P_MU1040|MLF32X|
|WIFI|1|blue|LED0603|
|X1|1|16MHz|XTAL_3X2|

##   Support   ##

If you have questions or other better design ideas, you can go to our [forum](http://www.seeedstudio.com/forum) or **wish** to discuss.

##   Version Tracker   ##

 |Revision|Descriptions|Release|
 |----|----|----|
 |v0.91b|Initial public release|April 6, 2011|
 |v1.0|Change the width of the signal wire from 6 mil to 8 mil|Dec 13, 2011|

##   Resources   ##

- **[Eagle]**[WifiBee v1.0 Eagle Files.zip](https://github.com/SeeedDocument/Wifi_Bee/raw/master/res/WifiBee_v1.0_Eagle_Files.zip)
- **[PDF]**[WifiBee v1.0 PCB](https://github.com/SeeedDocument/Wifi_Bee/raw/master/res/WifiBee%20v1.0%20PCB.pdf)
- **[PDF]**[WifiBee v1.0 SCH](https://github.com/SeeedDocument/Wifi_Bee/raw/master/res/WifiBee%20v1.0%20Sch.pdf)
- **[PDF]**[WifiBee v0.91b schematics in pdf format](http://wiki.seeedstudio.com/images/9/9f/WifiBee_v0.91b.pdf)
- **[EAGLE]**[Wifi Bee v0.91b design files in Eagle format](http://wiki.seeedstudio.com/images/f/ff/Wifi_Bee_v0.91b_eagle.zip)
- **[Library]**[WiShield Library](https://github.com/asynclabs/WiShield)
- **[Library]**[a more up to date WiShield Library, compatible with Arduino 1.0](https://github.com/CapnBry/WiShield_user_contrib)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>