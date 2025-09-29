---
description: Getting started with Grove Ultrasonic Sensor (SMS812)
title: Grove Ultrasonic Sensor (SMS812)
keywords:
- ultrasonic
- sms812
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /grove_ultrasonic_sensor_sms812
last_update:
  date: 08/16/2023
  author: ZouXiong.Xiao
---

# Grove Ultrasonic Sensor (SMS812)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ultrasonic-sms812/1.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/grove_ultrasonic_sensor_sms812" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Introduction

Grove Ultrasonic Sensor (SMS812) is a miniature, ultra-low power ranging sensor. Grove Ultrasonic Sensor (SMS812) is based on the ultrasonic time-off-light (ToF)  principle, and is designed with related acoustics, electricity and algorithms. High precision distance measurement is achieved through the energy difference of ultrasonic echo signals on the surface of different materials, and output millimeter-level distance information and its echo energy intensity value, and can also output flag bits to distinguish soft and hard materials. Furthermore, it can be used for cleaning robots to identify ground materials and measure distances within a certain range. It is small size and easy to install.

### Application

- The cleaning robot recognizes the soft and hard materials on the ground
- Home service robot or robot vacuum cleaner to obtain ground information
- 3D printer lever detection

### Features

- Millimeter-level ranging accuracy, great ranging stability
- Recognize soft and hard materials and output I/O information
- The detection distance up to 20-50mm and blind area is small
- Arduino support

### Hardware Overview

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ultrasonic-sms812/2.png" style={{width:600, height:'auto'}}/></div>

1. The structure of this sensor is a cylindrical and made by plastic injection molding.
2. The dimensions in the above figure are in millimeters.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ultrasonic-sms812/3.png" style={{width:600, height:'auto'}}/></div>

This interface is PH1.0-4P plug connector. And the definition of the pin is below:

<div class="table-center">
    <table align="center">
        <tbody>
            <tr>
                <td align="center">Pin</td>
                <td align="center">Type</td>
                <td align="center">Description</td>
                <td align="center">Defaults</td>
                <td align="center">Data stream</td>
            </tr>
            <tr>
                <td align="center">GND</td>
                <td align="center">Power supply</td>
                <td align="center">Negative</td>
                <td align="center">0V</td>
                <td align="center"/>
            </tr>
            <tr>
                <td align="center">Tx</td>
                <td align="center">Output</td>
                <td align="center">System serial port output</td>
                <td align="center"/>
                <td align="center">Ladar to Peripherals</td>
            </tr>
            <tr>
                <td align="center">Rx</td>
                <td align="center">Input</td>
                <td align="center">System serial port input</td>
                <td align="center"/>
                <td align="center">Peripherals to Ladar</td>
            </tr>
            <tr>
                <td align="center">VCC</td>
                <td align="center">Power supply</td>
                <td align="center">Positive</td>
                <td align="center">3.3V</td>
                <td align="center"/>
            </tr>
        </tbody></table>
</div>

## Getting Started

### Hardware Preparation

This routine will introduce the use of this ultrasonic radar using the XIAO SAMD21 as the master control. For the convenience of wiring, we will also use the Grove expansion board. You can choose one according to your actual needs.

<div class="table-center">
 <table align="center">
  <tr>
   <th>XIAO SAMD21</th>
   <th>Grove Base for XIAO</th>
            <th>Grove Ultrasonic Sensor (SMS812)</th>
  </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ultrasonic-sms812/4.jpg" style={{width:250, height:'auto'}}/></div></td>
        </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/grove_ultrasonic_sensor_sms812" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

Then, connect the ultrasonic radar to the UART interface of the XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ultrasonic-sms812/5.jpg" style={{width:700, height:'auto'}}/></div>

## Arduino Library Overview

:::tip
If this is your first time using Arduino, we highly recommend you to refer to [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) or see the simple tutorial below:
:::

The button below will take you directly to our Arduino program library for the Grove Ultrasonic Sensor (SMS812).

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio_SMS812_Sensor/tree/main" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Function

Before we get started developing a sketch, let's look at the available functions of the library.

- `void setIOMode()` —— This function is used to set the radar to IO mode, which is mainly used to detect the target material.

- `void setUARTMode()` —— This function is used to set the radar to UART mode, UART mode radar will actively report distance and material information.

- `void setUARTREQMode()` —— This function is used to set the radar to UART REQ mode, in which the distance and material information can only be queried by sending a query command.

- `void checkUARTREQ(int delaytime = 0, bool showSwitch = true)` —— This function is used in UART REQ mode to query the detected material and distance.

    **Input Parameters**

  - `delaytime`: The default value is 0. This parameter controls the time in milliseconds for the query command to be issued.
  - `showSwitch`: The default is on. This parameter controls whether the original data frame is printed out.

- `bool getFrame(bool showSwitch = true)` —— This function is used to get the original data frame.

    **Input Parameters**

  - `showSwitch`: The default is on. This parameter controls whether the original data frame is printed out.

- `bool parseDatagram(bool showSwitch = false)` —— This function is used to parse the original data frame.

    **Input Parameters**

  - `showSwitch`: The default is off. This parameter controls whether the original data frame is printed out.

### Installation

Since you have downloaded the zip Library, open your Arduino IDE, click on **Sketch > Include Library > Add .ZIP Library**. Choose the zip file you just downloaded，and if the library install correct, you will see **Library added to your libraries** in the notice window. Which means the library is installed successfully.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

## XIAO Example

**Step 1.** You need to Install an Arduino Software.

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></div></a></p>

**Step 2.** Launch the Arduino application.

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

**Step 3.** Select your development board model and add it to the Arduino IDE.

- If you want to use **Seeeduino V4.2** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/Seeed_Arduino_Boards/)** to finish adding.

- If you want to use **XIAO SAMD21(Seeeduino XIAO)** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/Seeeduino-XIAO/#software)** to finish adding.

- If you want to use **XIAO RP2040** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#software-setup)** to finish adding.

- If you want to use **XIAO nRF52840** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup)** to finish adding.

- If you want to use **XIAO ESP32C3** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started/#software-setup)** to finish adding.

- If you want to use **XIAO ESP32S3** for the later routines, please refer to **[this tutorial](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started#software-preparation)** to finish adding.

:::caution
For **XIAO nRF52840**, please select **Seeed nRF52 mbed-enabled Boards**, otherwise an error may be reported when running programs.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SeeednRFmbed.png" style={{width:600, height:'auto'}}/></div>

:::

**Step 4.** Install the Arduino code library.

### Demo 1: IO Mode Usage

This example will guide you through the process of printing out the flag bits to distinguish soft and hard materials. Here is the reference code for arduino:

```c
#include "sms812.h"

const int radarPin = A7;

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A6
//#define TX_Pin A7

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//SMS812_Sensor radar = SMS812_Sensor(&mySerial);

// can also try hardware serial with
SMS812_Sensor radar = SMS812_Sensor(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  
  Serial1.begin(115200);
  //  mySerial.begin(115200);

  pinMode(radarPin, INPUT);

  while(!Serial);   //When the serial port is opened, the program starts to execute.
  Serial.println("Ready");

  radar.setIOMode();
}

void loop() {
  // put your main code here, to run repeatedly:
  int value = analogRead(radarPin); // Read level status of D7 pin
  Serial.println(value);
  delay(500);
}

```

After you activate the IO mode, you should know that if the US5 sensor recognize the soft material, its TX pin will send the flag bits `0x01` to the board, otherwise, the hard material is `0x00`, so you should set the `radarPin` as **A0**(which connect the TX pin of sensor) or the pin which support analog inputs.

The high value above 1000 means recognizing the hard material, and the value below the 20 means recognizing the soft material or air.

So, when you move the sensor in front of the will see the serial output like below:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ultrasonic-sms812/6.png" style={{width:700, height:'auto'}}/></div>

### Demo 2: UART Mode Usage

For UART mode, the radar outputs measurements at a rate of 100Hz. The format of the data telegram is shown in the table below.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Header frame</th>
   <th>Command frame</th>
            <th>Data length frame</th>
            <th>Data frame</th>
            <th>Checksum frame</th>
  </tr>
  <tr>
   <td align="center">0xAA 0xAA</td>
   <td align="center">0xFD</td>
            <td align="center">0x04</td>
            <td align="center">--</td>
            <td align="center">CS</td>
  </tr>
 </table>
</div>

The data bits occupy 4 Byte. the first 1 Byte is the material flag bit, 0 means hard material and 1 means soft material. For soft materials, it will be impossible to measure the distance. Then there is the distance value, which accounts for 2 Byte in millimeters. The last 1Byte is the intensity value, indicating the strength of the received ultrasonic signal.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Material flag bit</th>
   <th>Distance value</th>
            <th>Strength</th>
  </tr>
  <tr>
   <td align="center">1 Byte</td>
   <td align="center">2 Byte</td>
            <td align="center">1 Byte</td>
  </tr>
 </table>
</div>

In this example, we will use the functions in the library to parse the received data frames and print out all the feature data reported by the Sensor active via the serial port.

The **hardware serial port**on the board XIAO SAMD21 is the UART interface pin **A6** and **A7**.You can also use any two pins as the software serial.

```c
#include "sms812.h"

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//SMS812_Sensor radar = SMS812_Sensor(&mySerial);

// can also try hardware serial with
SMS812_Sensor radar = SMS812_Sensor(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  
  Serial1.begin(115200);
  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.
  Serial.println("Ready");

  radar.setUARTMode();
}

void loop() {
  // put your main code here, to run repeatedly:
  
  // Prints only the acquired raw data frames
//   radar.getFrame();
//   delay(1);                //Add time delay to avoid program jam

  // Parses the contents of the data frame. If the function parseDatagram is given a true argument, the raw data frame display is enabled.
  if(radar.parseDatagram(true)){
    if(radar.material == 0x00){
      Serial.println("No blankets detected.");
      Serial.print("The measured distance is: ");
      Serial.print(radar.distance);
      Serial.println(" mm");
      Serial.print("The ultrasonic signal strength is: ");
      Serial.println(radar.strength);
    }
  }
  delay(1);                //Add time delay to avoid program jam
}
```

After upload the code to the board, you move the sensor in front of the **hard material**(soft material will not output the parsed data), you can see the parsed data below:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ultrasonic-sms812/7.png" style={{width:1000, height:'auto'}}/></div>

### Demo 3: UART REQ Mode Usage

In this example, we set the delaytime parameter to 1000, meaning that we poll for 1 second to send a command query. And the sensor will feedback the ranging result by the raw message, which length is 9 bytes.

```c
#include "sms812.h"

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//SMS812_Sensor radar = SMS812_Sensor(&mySerial);

// can also try hardware serial with
SMS812_Sensor radar = SMS812_Sensor(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200);
  pinMode(A7, INPUT);

  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Ready");

  radar.setUARTREQMode();
}

void loop() {
  // put your main code here, to run repeatedly:
  radar.checkUARTREQ(1000, true);      // Check radar information every second. And turn on raw data frame display.

  // Parses the contents of the data frame. If the function parseDatagram is given a true argument, the raw data frame display is enabled.
  if(radar.material == 0x00){
    Serial.println("No blankets detected.");
    Serial.print("The measured distance is: ");
    Serial.print(radar.distance);
    Serial.println(" mm");
    Serial.print("The ultrasonic signal strength is: ");
    Serial.println(radar.strength);
  }
}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ultrasonic-sms812/7.png" style={{width:1000, height:'auto'}}/></div>

## Resources

- **[PDF]** [Development Manual Alpha V0.2.0](https://files.seeedstudio.com/wiki/ultrasonic-sms812/sms812_Development_Manual_Alpha_V0.2.0.pdf)
- **[PDF]** [DataSheet Alpha V0.1.3](https://files.seeedstudio.com/wiki/ultrasonic-sms812/sms812_DataSheet_Alpha_V0.1.3.pdf)

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
