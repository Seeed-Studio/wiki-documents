---
name: Seeeduino GPRS
category: Arduino
bzurl: https://www.seeedstudio.com/Seeeduino-GPRS-p-1909.html
oldwikiname: Seeeduino_GPRS
prodimagename: seeeduino_gprs_cover.jpg
surveyurl: https://www.surveymonkey.com/r/Seeeduino_GPRS
sku: 102010016
---

![](https://raw.githubusercontent.com/SeeedDocument/Seeeduino_GPRS/master/img/seeeduino_gprs_cover.jpg)

Seeeduino GPRS is a IoT panel, you can connect to the internet through GPRS wireless network with it. Making/answering voice calls and sending/receiving SMS messages are also supported. Meanwhile, Seeeduino GPRS supports FM radio function and bluetooth communication. Seeeduino GPRS is base on Atmage32U4 and SIM800H. Atmage32U4 is a microcontroller and it is compatible with Arduino. SIM800H support Quad-band 850/900/1800/1900MHz, it can transmit Voice, SMS and data information with low power consumption. SIM800H also brings some extra features like for example Bluetooth and FM radio. It is designed with power saving technique so that the current consumption is as low as 0.1mA in sleep mode.

[![](https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now.png)](https://www.seeedstudio.com/Seeeduino-GPRS-p-1909.html)


## Application Ideas

* Internet of Things  
* Smart House
* Wearable Designed
* DIY Phone
* Industrial

Here is some funny project for your reference.

|Arduino GPS/GSM Tracker|Arduino Phone 2.0|Arduino GPRS Weather Station|
|----------|----------|---------|
|![](https://raw.githubusercontent.com/SeeedDocument/Seeeduino_GPRS/master/img/example_1.jpg)|![](https://raw.githubusercontent.com/SeeedDocument/Seeeduino_GPRS/master/img/example_2.jpg)|![](https://raw.githubusercontent.com/SeeedDocument/Seeeduino_GPRS/master/img/example_3.jpg)|
|[Make it Now](http://www.instructables.com/id/Arduino-GPSGSM-Tracker/)|[Make it Now](http://www.instructables.com/id/ArduinoPhone-20-an-Open-Source-Mobile-Phone-Based-/)|[Make it Now](http://www.instructables.com/id/Arduino-GPRS-Weather-Station-Part-1/)|

## Features

* Compatible with standard Arduino Leonardo
* Quad-Band 850/900/1800/1900MHz
* Headset jack
* Convenient external SIM card holder
* Control via AT commands
* Supports Bluetooth
* Supports FM Radio
* Current < 2A
* Arduino Leonardob Bootloader

## Specification

**SIM800H Model**

|Parameter|Value|
|------------|------------|
|GPRS Model|SIM800H|
|Quad-Band|850/900/1800/1900MHz|
|GPRS multi-slot class|12/10|
|GPRS mobile station class|B|
|Standard GSM phase|2/2+|
|FM|76~109MHz|
|Bluetooth|Compliant with 3.0+EDR|
|Supply voltage range|3.4 ~ 4.4V|


**AVR Arduino Microcontroller**

|Parameter|Value|
|------------|-------------|
|Microcontroller|ATmega32u4|
|Flash Memory|32KB|
|SRAM|2.5kB|
|EEPROM|1kB|
|Clock Speed|16MHz|
|Operating Voltage|5V|
|Digital I/O Pins|20|
|PWM Channels|7|
|Analog Input Channels|12|

## Hardware Overview

The images below show an overview of Seeeduino GPRS hardware features. The pin-out and alternate functions of various pins of Seeeduino GPRS are shown in the pin-out diagram. This could be used as a quick reference.

![](https://raw.githubusercontent.com/SeeedDocument/Seeeduino_GPRS/master/img/seeeduino_gprs_hardware2.png)

* **Power Switch**
Slide switch used to change the logic level and power output of the board to either 5V or 3.3V.
Nowadays many new and great sensors are being develop to work with 3.3V, with other duino boards you would need to place a logic level converter between the board and these sensor(s), with the Seeeduino GPRS board all you have to do is slide the switch!

* **DC Input**
The DC Input allows your Seeeduino GPRS board to be powered from a wall adapter so that you can supply more power to your project if needed, for example when using DC motors or other high power devices. The DC input can be 9V-12V and peak current is 2A.
But there's a hardware bug in Seeeduino GPRS that you have to notice. When an external power input, there's very short 6V at the 5V pin, last about 2ms. **It is risk to destroy the device that connected to 5V.** So we recommend that don't use the DC Input to power the system. And we had considered to fix the bug already, but will not come out very soon.

* **Breakout for SIM800h**
You can debug Sim800h by this interface.

* **ICSP**
This is the ICSP connection for the ATMEGA32U4-MUR, it is located in the standard ICSP/SPI position for Arduino Uno, Due, Mega, and Leonardo compatible hardware (e.g. shields) that may use this connector. The SPI pins in this port: MISO, SCK, and MOSI, please note that those pins DIDN'T connect to D11~D13.

* **LED PWR2**
SIM800H Power Indication

* **LED STA**
Operating Status Indication

* **LED NET**

|Status|SIM800H Behavior|
|------------|-------------|
|Off|SIM800H is not running|
|64ms on/800ms off|SIM800H not registered the network|
|64ms on/3000ms off|SIM800H registered the network|
|64ms on/300ms off|SIM800H communication is established|


## Install the Driver



First of all, you need to:

* **Get a Micro-USB cable**
You need a Micro-USB cable first; the data cable of an Android Phone will do fine.
If you can't find one, you can buy one [here](http://www.seeedstudio.com/depot/Micro-USB-Cable-48cm-p-1475.html?cPath=98_100).

* **Connect the board**
Connect the Arduino board to your computer using the USB cable. The green power LED (labelled **PWR**) should go on.

**For Windows**

!!!Note
    This drive is available for Windows XP, Windows Vista, Windows 7, Windows 8/8.1 and Windows 10.

[![](https://raw.githubusercontent.com/SeeedDocument/Seeeduino_Mega/master/img/download_driver.png)](https://github.com/Seeed-Studio/Signed_USB_Serial_Driver/archive/master.zip)

- Plug in your board and wait for Windows to begin its driver installation process. After a few moments, the process will fail, despite best efforts.
- Click on the Start Menu, and open up the Control Panel.
- While in the Control Panel, navigate to System and Security. Next, click on System. Once the System window is up, open the **Device Manager**.
- Look under Ports (COM & LPT). You should find an open port named "Seeeduino GPRS". If there is no COM & LPT section, look under "Other Devices" for "Unknown Device".
- Right click on the "Seeeduino GPRS" port and choose the "Update Driver Software" option.
- Next, choose the "Browse my computer for Driver software" option.
- Finally, navigate to and select the driver file named "seeed_usb_serial.inf"
- Windows will finish up the driver installation from there.

**For Mac OSX**

You don't need to install any drivers.


## Getting Started

!!!Note
    If this is your first time using Arduino, we highly recommend you to refer to [Getting Started with Arduino](http://wiki.seeed.cc/Getting_Started_with_Arduino)


First of all, you need to Install an Arduino Software.

[![](https://raw.githubusercontent.com/SeeedDocument/Seeeduino_Stalker_V3_1/master/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)


**Launch the Arduino application**

Double-click the Arduino application (arduino.exe) you have previously downloaded.

!!!Note
    If the Arduino Software loads in a different language, you can change it in the preferences dialog. See the [Arduino Software (IDE) page](https://www.arduino.cc/en/Guide/Environment#languages) for details.


**Open the Blink example**

Open the LED blink example sketch: **File > Examples >01.Basics > Blink**.

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Seeeduino_GPRS/master/img/select_blink.png)

**Select your board**

You'll need to select the entry in the **Tools > Board** menu that corresponds to your Arduino.
Selecting a **Arduino Leonardo**. If you can not find the Arduino Leonardo, please check [How to Add Seeed boards to Arduino IDE](http://wiki.seeedstudio.com/Seeed_Arduino_Boards/)


![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Seeeduino_GPRS/master/img/seeeduino_gprs_select_board.png)

**Select your serial port**

Select the serial device of the Arduino board from the Tools | Serial Port menu. This is likely to be COM3 or higher (**COM1** and **COM2** are usually reserved for hardware serial ports). To find out, you can disconnect your Arduino board and re-open the menu; the entry that disappears should be the Arduino board. Reconnect the board and select that serial port.

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Seeeduino_GPRS/master/img/seeeduino_gprs_select_com.png)

!!!Note
    On the Mac, this should be something with **/dev/tty.USBmodem**.

**Upload the program**

Now, simply click the "Upload" button in the environment. Wait a few seconds and if the upload is successful, the message "Done uploading." will appear in the status bar.

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Seeeduino_GPRS/master/img/upload_image.png)

A few seconds after the upload finishes, you should see the pin 13 (LED Pin 13) LED on the board start to blink (in green). If it does, congratulations! You've gotten Arduino up-and-running. If you have problems, please see the troubleshooting suggestions.

## Getting Started on Linux

For using on Linux, please go to [Installing Arduino on Linux](http://playground.arduino.cc/Learning/Linux)

**GPRS Function**

Seeeduino GPRS offers the function of a mobile phone such as making/receiving voice calls, sending/receiving SMSes, make a TCP connection etc. Here are the [Seeeduino GPRS Library](https://github.com/Seeed-Studio/Seeeduino_GPRS), please download it to your computer to use Seeeduino GPRS. Here is a brief introduction.

To start to play with the Seeeduino GPRS, a headphone and a SIM card are required.

![](https://raw.githubusercontent.com/SeeedDocument/Seeeduino_GPRS/master/img/500px-Seeeduino_gprs_t.jpg)

![](https://raw.githubusercontent.com/SeeedDocument/Seeeduino_GPRS/master/img/500px-Seeeduino_gprs_b.jpg)

**To make a call**

Open the example sketch **GPRS_CallUp** in libraries/Seeeduino_GPRS/example/GPRS_CallUp/, replace the phone number in callUp function, then compile the sketch and upload it to your board. Seeeduino GPRS will call the number specified in the code.

```
#include <gprs.h>
#include <SoftwareSerial.h>

GPRS gprs;

void setup() {
    Serial.begin(9600);
    Serial.println("GPRS - Call up Test...");
    gprs.preInit();//power on SIM800
    delay(1000);
    while(0 != gprs.init()) { //gprs init
        delay(1000);
        Serial.print("init error\r\n");
    }
    Serial.println("Init success, start to call...");
    gprs.callUp("150****9566");
}

void loop() {
    //nothing to do
}

```

**To send an SMS**

Just like calling, an SMS can be sent with Seeeduino GPRS. Open the example sketch **GPRS_SendSMS** in libraries/Seeeduino_GPRS/example/GPRS_SendSMS/, and replace the phone number and message in sendSMS function, then compile the sketch and upload it to your board. Seeeduino GPRS will send the message to the number specified in the code.

```
#include <gprs.h>
#include <SoftwareSerial.h>

GPRS gprs;

void setup() {
    Serial.begin(9600);
    Serial.println("GPRS - Send SMS Test ...");
    gprs.preInit();
    delay(1000);
    while(0 != gprs.init()) {
        delay(1000);
        Serial.print("init error\r\n");
    }
    Serial.println("Init success, start to send SMS message...");
    gprs.sendSMS("130****3364","hello,world"); //define phone number and text
}

void loop() {
    //nothing to do
}

```

**To answer a Call & read an SMS**

If someone calls or send a message to you, Seeeduino GPRS can also answer the call or read the message out. Open the example sketch **GPRS_LoopHandle** in libraries/Seeeduino_GPRS/example/GPRS_LoopHandle/, then compile the sketch and upload it to your board, the Seeeduino GPRS will poll to check if there is an incoming call or SMS. If there is an incoming call, Seeeduino GPRS will answer the call automatically. If there is an incoming SMS, Seeeduino GPRS will show the message in Serial Monitor.

```
#include <gprs.h>
#include <SoftwareSerial.h>
#include <stdio.h>

char gprsBuffer[64];
int i = 0;
char *s = NULL;
int inComing = 0;

GPRS gprs;

void setup() {
    Serial.begin(9600);
    Serial.println("GPRS - LoopHandle Test...");
    gprs.preInit();
    while(0 != gprs.init()) {
        delay(1000);
        Serial.print("init error\r\n");
    }
    Serial.println("Init success, start to monitor your call or message...");
}

void loop() {
    if(gprs.serialSIM800.available()) {
        inComing = 1;
    }else{
        delay(100);
    }

    if(inComing){
        gprs.readBuffer(gprsBuffer,32,DEFAULT_TIMEOUT);
        Serial.print(gprsBuffer);

        if(NULL != strstr(gprsBuffer,"RING")) {
            gprs.answer();
        }else if(NULL != (s = strstr(gprsBuffer,"+CMTI: \"SM\""))) { //SMS: $$+CMTI: "SM",24$$
            char message[MESSAGE_LENGTH];
            int messageIndex = atoi(s+12);
            gprs.readSMS(messageIndex, message,MESSAGE_LENGTH);
            Serial.print(message);
        }
        gprs.cleanBuffer(gprsBuffer,32);
        inComing = 0;
    }
}
```


**FM Radio Function**

Seeeduino GPRS has a FM radio function. Open the example sketch **FM_Test** in libraries/Seeeduino_GPRS/example/FM_Test/, and connect a button to your board, then compile the sketch and upload it to your board, Seeeduino GPRS functions like an FM radio. Even the channel can be changed with the button.

```
#include <fm.h>
#include <SoftwareSerial.h>

int channelButton = 5; //used for changing channel
FM fm;

void setup() {
    pinMode(channelButton,INPUT);
    Serial.begin(9600);
    Serial.println("FM Test...");
    fm.preInit();
    while(0 != fm.powerOn()){
        Serial.println("FM power on failed, try again...");
        delay(2000);
    }
    fm.setVolume(6); //0,1,2,3,4,5,6
    fm.scanChannel();
    Serial.println("FM init success");
}

void loop() {
    while(HIGH == digitalRead(channelButton)){
        delay(50);
    }
    Serial.print("change Channel\r\n");
    fm.channelNext();
    while(LOW == digitalRead(channelButton)){
        delay(50);
    }
}
```

**Bluetooth Function**

Seeeduino GPRS can be used as a bluetooth device, but it is still not very stable yet. There are two examples sketches in library. The first one is **Bluetooth AT Command**, you can send AT command to Seeeduino GPRS through it, and the other one is **Bluetooth_Communicate**, you can communicate with Seeeduino GPRS in SPP profile with it, but it may go wrong while connecting to your bluetooth device or mobile. Below is the code of Bluetooth AT Command.

```
#include <bluetooth.h>
#include <SoftwareSerial.h>

#define DEFAULT_TIMEOUT 5
#define BT_BUF_LEN      32
BlueTooth bluetooth;

char bluetoothBuffer[BT_BUF_LEN];
int start = 0;

void setup() {
    Serial.begin(9600);
    Serial.println("Bluetooth AT Command Test...");
    bluetooth.preInit();
    delay(3*1000);
    while(0 != bluetooth.powerOn()){ //bluetooth PowerOn
        Serial.println("bluetooth power on failed, try again...");
        delay(2000);
    }
}

void loop() {
    if(bluetooth.serialSIM800.available()) {
        start = 1;
    }else{
        delay(500);
    }

    if(start){
        //bluetooth.cleanBuffer(bluetoothBuffer,64);
        bluetooth.readBuffer(bluetoothBuffer,BT_BUF_LEN,DEFAULT_TIMEOUT);
        if(NULL != strstr(bluetoothBuffer,"+BTPAIRING:")){
            bluetooth.acceptPairing();
        }
        if(NULL != strstr(bluetoothBuffer,"+BTCONNECTING:")){
            bluetooth.acceptConnect();
        }
        start = 0;
    }
}
```


## Resources

* **Schematic**

    [Seeeduino GPRS Eagle file](https://github.com/SeeedDocument/Seeeduino_GPRS/raw/master/res/Seeeduino_GPRS_v1.0_Eagle.zip)

    [Seeeduino GPRS PDF file](https://github.com/SeeedDocument/Seeeduino_GPRS/raw/master/res/Seeeduino_GPRS_v1.0_Schematic.pdf)

* **Firmware**     

    [Seeeduino GPRS Firmware & Update Guide](https://github.com/SeeedDocument/Seeeduino_GPRS/raw/master/res/Firmware_update_for_Seeeduino_GPRS_v1.0.zip)

* **SIM800 AT Command**    

    [SIM800 Series AT Command PDF](https://github.com/SeeedDocument/Seeeduino_GPRS/raw/master/res/SIM800_Series_AT_Command_Manual_V1.01%20(2).pdf)

* **Seeeduino GPRS Library**  

    [Seeeduino GPRS Library on GitHub](https://github.com/Seeed-Studio/Seeeduino_GPRS)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>