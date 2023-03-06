---
description: mmWave Fall Detection Sensor
title: mmWave Fall Detection Sensor
keywords:
- mmWave_radar_sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Radar_MR24FDB1
last_update:
  date: 1/12/2023
  author: jianjing Huang
---


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mmWave-radar/radar.jpg" style={{width:400, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Fall-Detection-Module-p-5268.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Intrdocution

The mmWave Radar fall detection module is a self-contained, privacy-protectively, safety mmWave module operating at 24GHz. With the enhanced Infineon Doppler radar and the standard algorithm, the module is an ideal solution for individual applications like elderly health care, smart home, and danger alarm.

### Application

- Fall Detection
- Smart Home
- Health Care

### **Features**

- Reliable tech: Infineon mmWave FMCW industrial radar
- Enabled theory: Apply Doppler radar technology with Near Distance Sensor(NDS) operating at 24GHz
- Standard algorithm: Distinguish occupied/unoccupied conditions and identify human activities in the self-adaption environment
- Singular fall detection: Detect simultaneously, privacy-protectively, wirelessly, wearable-freely of suspect falling/rapid fall/abnormal long stay in an area up to 20 squre meter
- Perfect privacy protection: Provide surveillance capabilities without identification
- Flexible install location: Operate properly regardless of the shelter blocks
- Harmless working status: Output 10 dBm harmless energy power
- High accuracy: Decrease the interference of non-living objects and the output results achieve more than 95% accuracy
- High robustness: Maintain proper functioning in a complex environment containing different temperatures, humidity, noise, air currents, dust, light and so on.
- High performing antenna: Sense even micromotion in a fan-beam pattern where Horizontal90°/ Vertical60°
- Measurement distance:
  - Motion perception maximum distance: up to 12 meters
  - Micromotion perception maximum distance: up to 5 meters
  - Body perception maximum distance: up to 3 meters
- Detecting time:
  - Unoccupied to occupied status: within 0.5 seconds
  - Manned to unmanned status: above 1 minute
- Customizable radar: Support secondary development including radar parameter, protocol, antenna, function

### **Hardware Overview**

![](https://files.seeedstudio.com/wiki/mmWave-radar/yinjiaotu.png)

1. S1 output: high level - occupied, low level - unoccupied.
2. S2 output: high level - active, low level - stationary
3. GP1 to GP4 are parameter selection controls, which can be redefined
according to user requirements.
4. The output signals of this interface are all at 3.3V level.

:::caution  
The power consumption of the product is 500mW, which is not suitable for long-term power supply.
:::

### **Characteristic**

![](https://files.seeedstudio.com/wiki/mmWave-radar/radar1.png)

## Getting Started

### Arduino Library Overview

:::tip
If this is your first time using Arduino, we highly recommend you to refer to [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).
:::

The library code used in this example can be downloaded by clicking the icon below.

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/Seeed_24GHz_mmWave_Radar_Sensor" target="_blank"><div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></div></a></p>

Before we get started developing a sketch, let's look at the available functions of the library.

- `void recvRadarBytes()` —— This function takes the length of the current frame returned by radar. The frames are stored in an array according to that length.
**Input parameters:** None
**Return value:** None

- `void Bodysign_judgment(byte inf[], float Move_min, float Move_max)` —— The data returned by the radar contains a large amount of physical data. The user has the flexibility to adjust the detected motion information based on the sign data and the decoding algorithm provided by the function. The content of the judgment will be output via the serial port.
**Input parameters:**
  - `byte inf[]` —— Data frames sent by the radar.
  - `float Move_min` —— Determine the threshold of the user being in a stationary or unoccupied state.
  - `float Move_max` —— Determine the threshold value for the user to be in a stationary state or a state where someone is in motion.

    **Return value:** None
    About the description of the sign parameters: Theoretically, the calculated values of the sign parameters range from **0 to 100**. When the calculated value is **0**, it means that **no one** is detected in the surrounding environment. When the calculated value is **1**, it means that the environment is detected to be occupied and in a **stationary state**. A calculated value of **2 to 100** indicates that the surroundings are detected to be occupied and **active**.

- `void Situation_judgment(byte inf[])` —— This function detects whether the human body is approaching or moving away from the location where the radar is located and determines the movement of the human body, according to the algorithm inside the radar. This information will be output through the serial port.
**Input parameters:**
  - `byte inf[]` —— Data frames sent by the radar.

    **Return value:** None

- `void Fall_inf(byte inf[])` —— This function completes the decoding of the fall detection information returned by the radar and prints the results of the radar detection through the serial port.
**Input parameters:**
  - `byte inf[]` —— Data frames sent by the radar.

    **Return value:** None

- `unsigned short int us_CalculateCrc16(unsigned char *lpuc_Frame, unsigned short int lus_Len)` —— This function is used to generate CRC16 checksum.
**Input parameters:**
  - `unsigned char *lpuc_Frame` —— The data frame you want to send to the radar (not including the final 2 Byte checksum frame).
  - `unsigned short int lus_Len` —— The length of the data frame you want to send to the radar.

    **Return value:** 2 Byte integer type check digit.

    **Return value:** None

- `void SerialInit()` —— Set the radar serial port baud rate to 9600. If it is a Seeeduino board, set the soft serial port to RX: 2, TX: 3.
**Input parameters:** None
**Return value:** None

### Installation

**Step 1.** You need to Install an Arduino Software.

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></div></a></p>

**Step 2.** Launch the Arduino application.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

**Step 3.** Select your development board model and add it to the Arduino IDE.

- If you want to use **Seeeduino V4.2** for the later routines, please refer to [this tutorial](https://wiki.seeedstudio.com/Seeed_Arduino_Boards/) to finish adding.

- If you want to use **Seeeduino XIAO** for the later routines, please refer to [this tutorial](https://wiki.seeedstudio.com/Seeeduino-XIAO/#software) to finish adding.

- If you want to use **XIAO RP2040** for the later routines, please refer to [this tutorial](https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#software-setup) to finish adding.

- If you want to use **XIAO BLE** for the later routines, please refer to [this tutorial](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup) to finish adding.

**Step 4.** Install the Arduino code library.

Start by getting the code base from [GitHub](https://github.com/limengdu/Seeed_24GHz_mmWave_Radar_Sensor) and downloading it to your local computer.

Since you have downloaded the zip Library, open your Arduino IDE, click on **Sketch > Include Library > Add .ZIP Library**. Choose the zip file you just downloaded，and if the library install correct, you will see **Library added to your libraries** in the notice window. Which means the library is installed successfully.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png"/></div>

### Materials Required

Before completing the following examples, you will need to prepare the following materials.

|              |              |              |
|:--------------:|:--------------:|:--------------:|
|<div align="center"><img width ="{210}" src="https://files.seeedstudio.com/wiki/mmWave-radar/radar.jpg"/></div>| <div align="center"><img width ="{210}" src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg"/></div>| <div align="center"><img width ="{150}" src="https://files.seeedstudio.com/wiki/60GHzradar/dupont.jpg"/></div>|
|[**24GHz mmWave Radar Sensor**](https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Fall-Detection-Module-p-5268.html)|[**Seeed XIAO BLE nRF52840 Sense**](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)|**2mm to 2.54mm Pitch Ribbon Cable**|

**Step 1.** Connect the device to the computer through the main board. The wiring diagram is shown in the table below.

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/mmWave-radar/radarconnect.png" /></div></td>
    </tr>
    <tr>
      <td align="center">Radar Sensor</td>
      <td align="center" />
      <td align="center">Main Board</td>
    </tr>
    <tr>
      <td align="center">5V</td>
      <td align="center">--&gt;</td>
      <td align="center">5V</td>
    </tr>
    <tr>
      <td align="center">GND</td>
      <td align="center">--&gt;</td>
      <td align="center">GND</td>
    </tr>
    <tr>
      <td align="center">RX</td>
      <td align="center">--&gt;</td>
      <td align="center">D6</td>
    </tr>
    <tr>
      <td align="center">TX</td>
      <td align="center">--&gt;</td>
      <td align="center">D7</td>
    </tr>
  </tbody></table>

**Step 2.** In the menu bar in the upper left corner of the Arduino IDE, select **tool**, choose the type of development board you are using, and select the corresponding serial port.

:::tip
If you are using **MacOS**, the serial port name of the device will often start with **/dev/cu.usbmodem xxx**, ending with the name of the device. If you are using **Windows**, the device's serial port name will often begin with **COM**, again ending with the device's name.
:::

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/3.png"/></div>

In this example, we will demonstrate how the radar works with our popular product XIAO BLE.

### Demo1 Decode built-in radar algorithm data output environment status

The radar has a complete set of built-in algorithms that can directly output the environmental conditions obtained by the radar judgment. This routine will describe how to print out the environmental conditions detected by the radar directly through the serial port via code.

The code in this example is as follows.

```c++
#include <falldetectionradar.h>

FallDetectionRadar radar;

void setup()
{
  radar.SerialInit();
  Serial.begin(9600);
  delay(1500);
  Serial.println("Readly");
}

void loop()
{
 radar.recvRadarBytes();                       //Receive radar data and start processing
 if (radar.newData == true) {                  //The data is received and transferred to the new list dataMsg[]
    byte dataMsg[radar.dataLen+1] = {0x00};
    dataMsg[0] = 0x55;                         //Add the header frame as the first element of the array
    for (byte n = 0; n < radar.dataLen; n++)dataMsg[n+1] = radar.Msg[n];  //Frame-by-frame transfer
    radar.newData = false;                     //A complete set of data frames is saved
    
    //radar.ShowData(dataMsg);                 //Serial port prints a set of received data frames
    radar.Fall_inf(dataMsg);                  //Sleep information output
  }
  
}
```

In the `setup()` code, we turn on the **Serial port** and the **Serial1 port** on the XIAO BLE. Serial is used for data printing and Serial1 is used for communication between the XIAO BLE and the radar. According to the baud rate of the radar, we set the baud rate of both serial ports to 9600. When it is ready, the serial monitor will print **Ready**.

```c
radar.Situation_judgment(dataMsg);
```

When the dataMsg list is completely obtained, it will be used as the parameter of the `Situation_judgment()` function to complete the output of environmental monitoring data, and the output result will be printed directly on the serial monitor.

Upload program. Opening your serial monitor to a baud rate of 9600 should show the result. The output should look something like the below image.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/5.png"/></div>

:::tip
If you do not see data after opening the serial monitor it may be normal. The acquisition of this part of the radar data depends on the changes in human movement within the radar monitoring range. Only when the movement of the person within range changes, the radar will send data, and only then will the data be printed out.

If you want to see what data is returned by radar, you can uncomment `radar.ShowData(dataMsg);`, which will output the complete set of received data frames through the serial monitor.
:::

### Demo2 Obtaining human motion using feature parameter analysis

Among the large amount of data returned by radar, information on physical data makes up the majority of the information. Sometimes, over-reliance on the radar's own algorithms can yield less than satisfactory results in some scenarios. Then, we can choose to use the information returned by the radar to make suitable adjustments according to the actual application scenarios.

The code in this example is as follows.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/1.png"/></div>

```c++
//Physical_Parameters_Example.ino

#include <sleepbreathingradar.h>

SleepBreathingRadar radar;

void setup()
{
  radar.SerialInit();
  Serial.begin(9600);
  delay(1500);
  Serial.println("Readly");
}

void loop()
{
 radar.recvRadarBytes();                       //Receive radar data and start processing
 if (radar.newData == true) {                  //The data is received and transferred to the new list dataMsg[]
    byte dataMsg[radar.dataLen+1] = {0x00};
    dataMsg[0] = 0x55;                         //Add the header frame as the first element of the array
    for (byte n = 0; n < radar.dataLen; n++)dataMsg[n+1] = radar.Msg[n];  //Frame-by-frame transfer
    radar.newData = false;                     //A complete set of data frames is saved
    
    //radar.ShowData(dataMsg);                 //Serial port prints a set of received data frames
    radar.Bodysign_judgment(dataMsg, 1, 15); //Output of human movement using sign parameters
  }
}
```

```c
radar.Bodysign_judgment(dataMsg, 1, 15);
```

Once the dataMsg array is obtained, we can pass the data of this array as the first argument to the `Bodysign_judgment()` function, which parses the sign parameters.

The second and third parameters of the function `Bodysign_judgment()` are the critical values for judging the unoccupied and the human body at rest, the critical values for the human body at rest and in motion, respectively.

(1, 15) means that when the calculated value of the body sign is less than 1, output no one is in the environment. When the somatic value is greater than or equal to 1 and less than 15, the output is that the current environment is occupied by someone in a stationary state. When the value of body sign is greater than or equal to 35, it outputs that there is someone moving in the environment.

Upload program. Opening your serial monitor to a baud rate of 9600 should show the result. The output should look something like the below image.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/2.png"/></div>

:::tip
The values following the output data frame represent the calculated sign values.
:::

### Demo 3 Sending data to radar

Radar opens a very large number of interfaces for us to get information and to set the radar sensitivity or scene. This routine will instruct the user how to use the user manual to send data messages to the radar to adjust the parameters of the radar or to obtain the desired data information.

**Step 1.** Obtain data frames based on the desired query.

Download the [user manual](https://files.seeedstudio.com/wiki/60GHzradar/24GHz-Sleep-monitorng-user-manual.pdf) in the Resource area, and in **Chapter 8.2**, find the content of the frames you need to query or set up, and organize them.

In this example, assuming you want to look up the ID of the radar device, you should be able to get the desired function code, address code 1 and address code 2.

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/60GHzradar/11.png"/></div>

**Step 2.** Open the sample code in Arduino IDE.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/9.png"/></div>

The code in this example is as follows.

```c
//CRC_Checksum_Generation.ino

#include <sleepbreathingradar.h>

SleepBreathingRadar radar;
char buff[30];

void setup()
{
  radar.SerialInit();
  Serial.begin(9600);
  delay(1500);
  Serial.println("Readly");
}

void loop()
{
  //Please fill in the data frame you want to set according to the datasheet(Excluding 2 Byte checksum frames)
  unsigned char data[] = {0x55, 0x08, 0x00, 0x05, 0x01, 0x04, 0x03};
  
  unsigned int length = sizeof(data)/sizeof(unsigned char);
  unsigned char datas[length + 2];
  for (int n = 0; n < length; n++)datas[n] = data[n];
  unsigned short int crc_data = radar.us_CalculateCrc16(data, length);
  sprintf(buff, "The CRC16 values is: %04x", crc_data);
  Serial.println(buff);
  datas[length] = (crc_data & 0xff00) >> 8;
  datas[length+1] = crc_data & 0xff;
  Serial.print("The datas send to the radar: ");
  for (int n = 0; n < length + 2; n++){
    char buffsend[1];
    sprintf(buffsend, "0x%02x ", datas[n]);
    Serial.print(buffsend);
  }
  Serial.println();
  delay(6000);
}
```

**Step 3.** Modifies the content of the data frame to generate the complete data frame sent to the radar.

What we need to modify is the `data[]` array in the loop.

```c
//Please fill in the data frame you want to set according to the datasheet(Excluding 2 Byte checksum frames)
unsigned char data[] = {0x55, 0x08, 0x00, 0x05, 0x01, 0x04, 0x03};
```

The places we need to modify are the second element, the fourth to the last element. The header frame 0x55 is fixed and does not need to be modified. The second frame is the length frame, please modify it according to the length of the data you send. The third frame is fixed to 0x00. The fourth frame is the function code, the fifth frame is the address code 1, and so on.

:::tip
About the length frame calculation method:
    Length = Data Length + Function Code + Address Code 1 + Address Code 2 + Data + Checksum. (Head frames are not counted)

See Chapter 8 of the [user manual](https://files.seeedstudio.com/wiki/60GHzradar/24GHz-Sleep-monitorng-user-manual.pdf) for more information on frame formats and rules.
:::

Upload program. Opening your serial monitor to a baud rate of 9600 should show the result. The output should look something like the below image.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/10.png"/></div>

The complete data that needs to be sent to the radar will be displayed in the serial monitor.

**Other ways**

If you don't want to use any master to generate complete data frames, you can also paste this code below into an editor that can run C programs. Follow the above procedure and fill in the array data with the contents of your frames.

```c
#include <stdio.h>

const unsigned char cuc_CRCHi[256]= {
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40
};

const unsigned char  cuc_CRCLo[256]= {
  0x00, 0xC0, 0xC1, 0x01, 0xC3, 0x03, 0x02, 0xC2, 0xC6, 0x06, 0x07, 0xC7,
  0x05, 0xC5, 0xC4, 0x04, 0xCC, 0x0C, 0x0D, 0xCD, 0x0F, 0xCF, 0xCE, 0x0E,
  0x0A, 0xCA, 0xCB, 0x0B, 0xC9, 0x09, 0x08, 0xC8, 0xD8, 0x18, 0x19, 0xD9,
  0x1B, 0xDB, 0xDA, 0x1A, 0x1E, 0xDE, 0xDF, 0x1F, 0xDD, 0x1D, 0x1C, 0xDC,
  0x14, 0xD4, 0xD5, 0x15, 0xD7, 0x17, 0x16, 0xD6, 0xD2, 0x12, 0x13, 0xD3,
  0x11, 0xD1, 0xD0, 0x10, 0xF0, 0x30, 0x31, 0xF1, 0x33, 0xF3, 0xF2, 0x32,
  0x36, 0xF6, 0xF7, 0x37, 0xF5, 0x35, 0x34, 0xF4, 0x3C, 0xFC, 0xFD, 0x3D,
  0xFF, 0x3F, 0x3E, 0xFE, 0xFA, 0x3A, 0x3B, 0xFB, 0x39, 0xF9, 0xF8, 0x38,
  0x28, 0xE8, 0xE9, 0x29, 0xEB, 0x2B, 0x2A, 0xEA, 0xEE, 0x2E, 0x2F, 0xEF,
  0x2D, 0xED, 0xEC, 0x2C, 0xE4, 0x24, 0x25, 0xE5, 0x27, 0xE7, 0xE6, 0x26,
  0x22, 0xE2, 0xE3, 0x23, 0xE1, 0x21, 0x20, 0xE0, 0xA0, 0x60, 0x61, 0xA1,
  0x63, 0xA3, 0xA2, 0x62, 0x66, 0xA6, 0xA7, 0x67, 0xA5, 0x65, 0x64, 0xA4,
  0x6C, 0xAC, 0xAD, 0x6D, 0xAF, 0x6F, 0x6E, 0xAE, 0xAA, 0x6A, 0x6B, 0xAB,
  0x69, 0xA9, 0xA8, 0x68, 0x78, 0xB8, 0xB9, 0x79, 0xBB, 0x7B, 0x7A, 0xBA,
  0xBE, 0x7E, 0x7F, 0xBF, 0x7D, 0xBD, 0xBC, 0x7C, 0xB4, 0x74, 0x75, 0xB5,
  0x77, 0xB7, 0xB6, 0x76, 0x72, 0xB2, 0xB3, 0x73, 0xB1, 0x71, 0x70, 0xB0,
  0x50, 0x90, 0x91, 0x51, 0x93, 0x53, 0x52, 0x92, 0x96, 0x56, 0x57, 0x97,
  0x55, 0x95, 0x94, 0x54, 0x9C, 0x5C, 0x5D, 0x9D, 0x5F, 0x9F, 0x9E, 0x5E,
  0x5A, 0x9A, 0x9B, 0x5B, 0x99, 0x59, 0x58, 0x98, 0x88, 0x48, 0x49, 0x89,
  0x4B, 0x8B, 0x8A, 0x4A, 0x4E, 0x8E, 0x8F, 0x4F, 0x8D, 0x4D, 0x4C, 0x8C,
  0x44, 0x84, 0x85, 0x45, 0x87, 0x47, 0x46, 0x86, 0x82, 0x42, 0x43, 0x83,
  0x41, 0x81, 0x80, 0x40
};

static unsigned short int us_CalculateCrc16(unsigned char *lpuc_Frame, unsigned short int lus_Len){
  unsigned char luc_CRCHi = 0xFF;
  unsigned char luc_CRCLo = 0xFF;
  int li_Index=0;
  while(lus_Len--){
    li_Index = luc_CRCLo ^ *( lpuc_Frame++);
    luc_CRCLo = (unsigned char)( luc_CRCHi ^ cuc_CRCHi[li_Index]);
    luc_CRCHi = cuc_CRCLo[li_Index];
  }
  return (unsigned short int )(luc_CRCLo << 8 | luc_CRCHi);
}

int main() {
    //Please fill in the data frame you want to set according to the datasheet(Excluding 2 Byte checksum frames)
    unsigned char data[] = {0x55, 0x07, 0x00, 0x01, 0x01, 0x01};

    unsigned short int crc_data = 0x0000;
    unsigned int length = sizeof(data)/sizeof(unsigned char);
    unsigned char datas[length + 2];
    for (int n = 0; n < length; n++)datas[n] = data[n];
    printf("The data frame length is: %d\n", length);
    crc_data = us_CalculateCrc16(data, length);
    datas[length] = (crc_data & 0xff00) >> 8;
    datas[length+1] = crc_data & 0xff;
    printf("The last two CRC check digits are: %04x\n", crc_data);
    printf("The datas send to the radar: ");
    for (int n = 0; n < length + 2; n++){
        printf("0x%02x ", datas[n]);
    }
    printf("\n");
    return 0;
}
```

After the editor execution, it is also possible to output the complete data frames that need to be sent to the radar.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/8.png"/></div>

**Step 4.** Send data frames to the radar.

Connect the radar directly to the computer's usb port via a [**UART to USB** device](https://www.seeedstudio.com/USB-To-Uart-5V-p-1833.html?queryID=588a892811a774ad3005ea0d31427532&objectID=1111&indexName=bazaar_retailer_products). The wiring is shown in the table below.

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/22.png" /></div></td>
    </tr>
    <tr>
      <td align="center">Radar Sensor</td>
      <td align="center" />
      <td align="center">Main Board</td>
    </tr>
    <tr>
      <td align="center">5V</td>
      <td align="center">--&gt;</td>
      <td align="center">5V</td>
    </tr>
    <tr>
      <td align="center">GND</td>
      <td align="center">--&gt;</td>
      <td align="center">GND</td>
    </tr>
    <tr>
      <td align="center">RX</td>
      <td align="center">--&gt;</td>
      <td align="center">TX</td>
    </tr>
    <tr>
      <td align="center">TX</td>
      <td align="center">--&gt;</td>
      <td align="center">RX</td>
    </tr>
  </tbody></table>

Use a software like serial debugging assistant to select the serial port where the radar is located.

<div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/60GHzradar/17.png"/></div>

:::caution
24GHz radar needs 5V power supply, otherwise the radar may not work properly.
:::

After a successful connection, you will see the radar sending a steady stream of messages.

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/16.png"/></div>

Paste the complete data frame we obtained in **step3** onto the send area of the software. Then click Send.

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/18.png"/></div>

You can look out for a set of data returned with the third element being 0x03. This set of data is the information obtained after the query. If you send data that adjusts the parameters of the radar, it will also return such information.

:::caution
If you choose **ASCII** as the format for sending data, each data set needs to be prefixed with **0x**. If you choose **HEX**, then each set of data does not need to be prefixed with **0x**.
:::

## Troubleshooting

**FAQ1: How to apply the code to Seeeduino (or Arduino)?**

> Because of the different hardware design, the serial port of XIAO series or Wio Terminal are named Serial1, while Seeeduino or Arduino need to use soft serial port. If you want to use the radar for Seeeduino, you can change the soft serial port or use pins 2 (RX) and 3 (TX).
> <div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/19.png"/></div>

**FAQ2: What should I do if XIAO BLE and Radar collect data for a long time and cannot upload the code?**

> At this time, you can use your finger to lightly press the reset button on top of XIAO BLE to re-upload the program to run.

## Resources

- **[PDF]** [Sleep Breathing Radar Sensor Datasheet](http://files.seeedstudio.com/wiki/mmWave-radar/MR24FDB1_Datasheet.pdf)
- **[ZIP]** [24GHz Respiratory schematic](https://files.seeedstudio.com/wiki/60GHzradar/24GHz-respiratory-schematic.zip)
- **[PDF]** [User manual](https://files.seeedstudio.com/wiki/mmWave-radar/MR24FDB1_User_manual.pdf)
- **[PPTX]** [Seeed mmWave sensor series V2.0](https://files.seeedstudio.com/wiki/mmWave-radar/Seeed-mmWave-sensor-series-V2.0.pptx)

## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).

<div>
  <p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
