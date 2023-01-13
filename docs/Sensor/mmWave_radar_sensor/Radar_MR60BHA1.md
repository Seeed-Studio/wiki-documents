---
description: mmWave Breathing and Heartbeat Module
title: mmWave Breathing and Heartbeat Module
keywords:
- mmWave_radar_sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
last_update:
  date: 1/12/2022
  author: jianjing Huang
---


<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"/></div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p>

## Introduction

The MR60BHA1 60GHz radar module applies FMCW detected theory to implement simultaneous personal breathing rate and heart rate detention in high accuracy, providing a fully total private and secure environment, independently from other noisy influences. It is a standard biotic radar system in consumer electronics, healthcare as well as industrial applications. In this wiki, we will introduce you how to utilize it.

### Application

- Smart home
- Health care
- Breathing rate detection
- Heartbeat rate detection
- Smart hotel
- Medical assistants

### Feature

- Enabled theory: Implement radar detection based on FMCW FM continuous wave signals
- Standard algorithm: Sense and output simultaneously human respiratory rate and heart rhythm in the self-adaption environment
- Perfect privacy protection: Apply FMCW monitoring technology to provide surveillance capabilities without identification
- Health-friendly working status: Output power as low as harmless to the human body
- High stability: Independ from temperature, humidity, noise, airflow, dust, light, and other environmental influences
- High measured accuracy: Achieve heartbeat accuracy up to 85% and achieve breathing accuracy up to 90 %
- High flexibility hardware design radar: Support secondary development, adapt to various scenarios applications

### Specification

| Parameter content                 |  Minimum |  Typical |  Maximum |  Unit |
|-----------------------------------|----------|----------|----------|-------|
|  **Performance**                      |          |          |          |       |
|  Detection distance (thoracic)    |  0.4     |          |  2       |  m    |
|  Respiratory measurement accuracy |          |  90      |          |  %    |
|  Heartbeat measurement accuracy   |          |  85      |          |  %    |
|  Refresh time                     |  1       |          |  30      |  S    |
|  Observation set-up time          |          |  20      |          |  S    |
|  **Operating parameters**             |          |          |          |       |
|  Operating voltage (VCC)          |  4.6     |  5       |  6       |  V    |
|  Operating current (ICC)          |          |  150     |          |  mA   |
|  Operating temperature (TOP)      |  -20     |          |  60      |  ℃    |
|  Storage temperature (TST)        |  -40     |          |  80      |  ℃    |
|  **Launch parameters**                |          |          |          |       |
|  Operating frequency (fTX)        |  58      |  60      |  63.5    |  GHz  |
|  Transmitted power (Pout)         |          |  6       |          |  dBm  |
|  **Antenna parameters**               |          |          |          |       |
|  Antenna gain (GANT)              |          |  4       |          |  dBi  |
|  Horizontal beam (-3dB)           |  -40     |          |  40      |  o    |
|  Vertical beam (-3dB)             |  -40     |          |  40      |  o    |

## Hardware Overview

Before everything starts, it is quite essential to have some basic parameters of the product. The following table provides information about the characteristics of 60GHz mmWave Breathing and Heartbeat Module.

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/pinout2.png"/></div>

## Getting Started

## Arduino Library Overview

:::tip
If this is your first time using Arduino, we highly recommend you to refer to [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).
:::

The library code used in this example can be downloaded by clicking the icon below.

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/Seeed_60GHz_BreathingHeartRadar" target="_blank"><div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></div></a></p>

### Function

Before we get started developing a sketch, let's look at the available functions of the library.

- `void recvRadarBytes()` —— This function takes the length of the current frame returned by radar. The frames are stored in an array according to that length.
**Input parameters:** None
**Return value:** None

- `void Situation_judgment(byte inf[])` —— This function is mainly used to resolve the current motion of the detector. The motion situation includes whether there is someone, whether the person's motion is close or far away, whether there is a pattern, etc.. The information will be printed out through the serial port. At the same time, some data content about the features will be output. The larger the value of the features, the greater the magnitude of the human motion, and the user can develop specific functions to be completed according to the magnitude of the motion accordingly.
**Input parameters:**
  - `byte inf[]` —— Data frames sent by the radar.

    **Return value:** None

- `void Breath_Heart(byte inf[])` —— This function completes the decoding of the respiratory heart rate information returned by the radar and prints the results of the radar detection through the serial port. Respiratory heart rate information includes: heart rate condition, heart rate value, respiration condition, respiration rate. In addition to this, there are contents of warning messages for the monitor leaving the monitoring range and distance and angle information to the radar.
**Input parameters:**
  - `byte inf[]` —— Data frames sent by the radar.

    **Return value:** None

- `void SerialInit()` —— Set the radar serial port baud rate to 115200. If it is a Seeeduino board, set the soft serial port to RX: 2, TX: 3.
**Input parameters:** None
**Return value:** None

### Default Variables

```c
#define MESSAGE_HEAD 0x53       //Data frame header
#define MESSAGE_TAIL 0x54       //Data frame tail

#define HUMAN_PSE_RADAR 0x80    //Human presence data

#define PRESENCE_INF 0x01       //Presence Information
#define SOMEONE_HERE 0x01       //Someone here
#define NOONE_HERE 0x00         //Noone here

#define MOVE_INF 0x02           //Campaign Information
#define NONE 0x00               //None
#define CA_CLOSE 0x01           //Someone approaches
#define CA_AWAY 0x02            //Some people stay away
#define DISORDER 0x03           //Disorderly movement

#define BODY_SIG 0x03           //Body movement information

#define HEART_RATE_RADAR 0x81   //Respiratory heart rate data

#define RATE_DATA 0x01          //Heartbeat Pack
#define RATE_NORMAL 0x01        //Normal heart rate
#define RATE_RAPID 0x02         //Rapid heart rate
#define RATE_SLOW 0x03          //Slow heart rate

#define HEART_RATE 0x02         //Breathing rate

#define HEART_RATE_WAVE 0x03    //Heart rate waveform (No analysis for now)

#define BREATH_DATA 0x04        //Breathing data
#define BREATH_NORMAL 0x01      //Normal breathing
#define BREATH_RAPID 0x02       //Acute respiratory abnormalities
#define BREATH_SLOW 0x03        //Slow heartbeat

#define BREATH_VAL 0x05         //Breathing values

#define BREATH_WAVE 0x06        //Respiratory waveform (No analysis for now)

#define LOCA_DET_ANOMAL 0x07    //Location detection anomaly
#define OUT_OF_RANGE 0x00       //Detection of targets out of range
#define WITHIN_RANGE 0x01       //Within the scope

#define DISTANCE 0x08           //Distance at rest
#define ANGLE 0x09              //Angle at rest

const byte MsgLen = 12;         //Data frame maximum length value
byte dataLen = 12;              //Real data frame length
byte Msg[12];                   //Set a fixed array to receive the first data
boolean newData = false;        //Controlling the reception of a new set of data
```

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

Start by getting the code base from [GitHub](https://github.com/limengdu/Seeed_60GHz_BreathingHeartRadar) and downloading it to your local computer.

Since you have downloaded the zip Library, open your Arduino IDE, click on **Sketch > Include Library > Add .ZIP Library**. Choose the zip file you just downloaded，and if the library install correct, you will see **Library added to your libraries** in the notice window. Which means the library is installed successfully.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png"/></div>

## Arduino Example

Now that we have our library installed and we understand the basic functions, let's run some examples for our XIAO BLE to see how it behaves.

### Materials Required

Before completing the following examples, you will need to prepare the following materials.

|              |              |              |
|:--------------:|:--------------:|:--------------:|
|<div align="center"><img width ="{210}" src="https://files.seeedstudio.com/wiki/60GHzradar/newpic.png"/></div>| <div align="center"><img width ="{210}" src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg"/></div>| <div align="center"><img width ="{150}" src="https://files.seeedstudio.com/wiki/60GHzradar/dupont.jpg"/></div>|
|[**60GHz mmWave Radar Sensor**](https://www.seeedstudio.com/60GHz-mmWave-Radar-Sensor-Breathing-and-Heartbeat-Module-p-5305.html)|[**Seeed XIAO BLE nRF52840 Sense**](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html?queryID=4bbd8c09f20216aa26f6b5a9040504d0&objectID=5253&indexName=bazaar_retailer_products)|**2mm to 2.54mm Pitch Ribbon Cable**|

**Step 1.** Connect the device to the computer through the main board. The wiring diagram is shown in the table below.

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/30.png" /></div></td>
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

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/60GHzradar/3.png"/></div>

In this example, we will demonstrate how the radar works with our popular product XIAO BLE.

### Demo1 Decode built-in radar algorithm data output human presence information

The radar has a complete set of built-in algorithms that can directly output the human presence information obtained by the radar judgment. This routine will describe how to print out the human presence information detected by the radar directly through the serial port via code.

The code in this example is as follows.

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/60GHzradar/31.png"/></div>

```c++
//Human_State_Data_Decoding_Example.ino

#include <60ghzbreathheart.h>

BreathHeart_60GHz radar;

void setup()
{
  radar.SerialInit();
  Serial.begin(115200);
  delay(1500);
  Serial.println("Readly");
}

void loop()
{
 radar.recvRadarBytes();                       //Receive radar data and start processing
 if (radar.newData == true) {                  //The data is received and transferred to the new list dataMsg[]
    byte dataMsg[radar.dataLen+3] = {0x00};
    dataMsg[0] = 0x53;                         //Add the header frame as the first element of the array
    for (byte n = 0; n < radar.dataLen; n++)dataMsg[n+1] = radar.Msg[n];  //Frame-by-frame transfer
    dataMsg[radar.dataLen+1] = 0x54;
    dataMsg[radar.dataLen+2] = 0x43;
    radar.newData = false;                     //A complete set of data frames is saved
    
    //radar.ShowData(dataMsg);                 //Serial port prints a set of received data frames
    radar.Situation_judgment(dataMsg);         //Use radar built-in algorithm to output human motion status
  }
  
}
```

In the `setup()` code, we turn on the **Serial port** and the **Serial1 port** on the XIAO BLE. Serial is used for data printing and Serial1 is used for communication between the XIAO BLE and the radar. According to the baud rate of the radar, we set the baud rate of both serial ports to 115200. When it is ready, the serial monitor will print **Ready**.

```c
adar.recvRadarBytes();
 if (radar.newData == true) {
    byte dataMsg[radar.dataLen+3] = {0x00};
    dataMsg[0] = 0x53;
    for (byte n = 0; n < radar.dataLen; n++)dataMsg[n+1] = radar.Msg[n];
    dataMsg[radar.dataLen+1] = 0x54;
    dataMsg[radar.dataLen+2] = 0x43;
    radar.newData = false;
}
```

In the loop, we first use the `recvRadarBytes()` function to store the data sent by the radar in a fixed-length array `Msg[12]`. Due to the complexity of radar data, a single fixed-length array is not sufficient for our data processing task, so we need an array that can be resized to store the set of data according to the current data frame length. This is where the array `dataMsg[dataLen]` comes into play, seeing that `dataLen` is the actual length of the current data frame. As you can see, we are adding frames to the array of dataMsg here, which is adding the first and last frames to it.

```c
radar.Situation_judgment(dataMsg);
```

When the dataMsg list is completely obtained, it will be used as the parameter of the `Situation_judgment()` function to complete the output of human presence information, and the output result will be printed directly on the serial monitor.

Upload program. Opening your serial monitor to a baud rate of 115200 should show the result. The output should look something like the below image.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/32.png"/></div>

:::tip
If you do not receive data other than the physical parameters, it may be normal. The acquisition of this part of the radar data depends on the changes in human movement within the radar monitoring range. Only when the movement of the person within range changes, the radar will send data, and only then will the data be printed out.

If you want to see what data is returned by radar, you can uncomment `radar.ShowData(dataMsg);`, which will output the complete set of received data frames through the serial monitor.
:::

### Demo 2 Acquisition of respiratory and heartbeat data

The ability to detect the respiratory and heartbeat data of the subject is a special feature of this sensor. We can complete the output of detection data by the following code example.

The code in this example is as follows.

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/60GHzradar/33.png"/></div>

```c++
//Respiratory_Heart_Data_Decoding.ino

#include <60ghzbreathheart.h>

BreathHeart_60GHz radar;

void setup()
{
  radar.SerialInit();
  Serial.begin(115200);
  delay(1500);
  Serial.println("Readly");
}

void loop()
{
 radar.recvRadarBytes();                       //Receive radar data and start processing
 if (radar.newData == true) {                  //The data is received and transferred to the new list dataMsg[]
    byte dataMsg[radar.dataLen+3] = {0x00};
    dataMsg[0] = 0x53;                         //Add the header frame as the first element of the array
    for (byte n = 0; n < radar.dataLen; n++)dataMsg[n+1] = radar.Msg[n];  //Frame-by-frame transfer
    dataMsg[radar.dataLen+1] = 0x54;
    dataMsg[radar.dataLen+2] = 0x43;
    radar.newData = false;                     //A complete set of data frames is saved
    
    //radar.ShowData(dataMsg);                 //Serial port prints a set of received data frames
    radar.Breath_Heart(dataMsg);         //Use radar built-in algorithm to output human motion status
  }
}
```

```c
radar.Breath_Heart(dataMsg);
```

When the dataMsg list is completely obtained, it will be used as the parameter of the `Breath_Heart(dataMsg);` function to complete the output of respiratory and heartbeat data, and the output result will be printed directly on the serial monitor.

Upload program. Opening your serial monitor to a baud rate of 115200 should show the result. The output should look something like the below image.

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/60GHzradar/34.png"/></div>

:::tip
The respiratory heartbeat data received here are sent automatically.

The data includes a set of data called "angle of repose" that can be used to understand the angle of the monitored person relative to the radar. The distribution of this angle range is shown in the figure below.
<div align="center"><img width ="{400}" src="https://files.seeedstudio.com/wiki/60GHzradar/35.png"/></div>
:::

### Demo 3 Sending data to radar

:::caution
The protocol of 60GHz respiratory heartbeat radar is only completed for human presence radar and respiratory heartbeat radar, and the subsequent functions are to be improved.
:::

Radar opens a very large number of interfaces for us to get information and to set the radar working mode, etc. This routine will instruct the user how to use the user manual to send data messages to the radar to adjust the parameters of the radar or to obtain the desired data information.

**Step 1.** Obtain data frames based on the desired query.

Download the [user manual](https://files.seeedstudio.com/wiki/60GHzradar/60G-protocol1.pdf) in the Resource area, and in **Chapter 4.1**, find the content of the frames you need to query or set up, and organize them.

In this example, suppose you want to query the radar for heartbeat packet data, then you first need to find the frame corresponding to the table.

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/36.png"/></div>

The query form shows that to get the data of the heartbeat packet, the data frame to be sent to the radar is:

```
0x53 0x59 0x01 0x01 0x00 0x01 0x0f $<sum> 0x54 0x43
```

The environment variable `$<sum>` refers to the checksum field, how to get it we will introduce in the **step 2.**.

**Step 2.** Get the checksum field.
The checksum field is calculated as follows:

**Frame headers + Control charaters + Command words + Length marking + Data, then take the lower eight bits and convert to hexadecimal numbers**.

For example, in **step 1.**, the frame we want to send is:

```
0x53 0x59 0x01 0x01 0x00 0x01 0x0f $<sum> 0x54 0x43
```

So,

```
Frame headers + Control charaters + Command words + Length marking + Data =
0x53 + 0x59 + 0x01 + 0x01 + 0x00 + 0x01 + 0x0f = 
0xBE =
0000 0000 1011 1110 (Binary)
```

Then take the lower eight digits of it.

```
1011 1110 (Binary) = 
0xBE
```

So the check sum field in the frame we should send to the radar is 0xBE.

**Step 3.** Send data frames to the radar.

Connect the radar directly to the computer's usb port via a [**UART to USB** device](https://www.seeedstudio.com/USB-To-Uart-5V-p-1833.html?queryID=588a892811a774ad3005ea0d31427532&objectID=1111&indexName=bazaar_retailer_products). The wiring is shown in the table below.

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/uart.png" /></div></td>
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

<div align="center"><img width ="{200}" src="https://files.seeedstudio.com/wiki/60GHzradar/37.png"/></div>

:::caution
60GHz radar needs 5V power supply, otherwise the radar may not work properly.
:::

After a successful connection, you will see the radar sending a steady stream of messages.

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/60GHzradar/39.png"/></div>

Paste the complete data frame we obtained in **step 2.** onto the send area of the software. Then click Send.

```
0x53 0x59 0x01 0x01 0x00 0x01 0x0f 0xBE 0x54 0x43
```

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/60GHzradar/40.png"/></div>

You can look out for a set of data returned. This set of data is the information obtained after the query. If you send data that adjusts the parameters of the radar, it will also return such information.

:::caution
If you choose **ASCII** as the format for sending data, each data set needs to be prefixed with **0x**. If you choose **HEX**, then each set of data does not need to be prefixed with **0x**.
:::

## Troubleshooting

### FAQ1: How to apply the code to Seeeduino (or Arduino)?

> Because of the different hardware design, the serial port of XIAO series or Wio Terminal are named Serial1, while Seeeduino or Arduino need to use soft serial port. If you want to use the radar for Seeeduino, you can change the soft serial port or use pins 2 (RX) and 3 (TX).
> <div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/19.png"/></div>

### FAQ2: What should I do if XIAO BLE and Radar collect data for a long time and cannot upload the code?

> At this time, you can use your finger to lightly press the reset button on top of XIAO BLE to re-upload the program to run.

### FAQ3: Why do some data not output decoded results?

> There are some features that we are still developing at the moment, such as heart rate and breathing waveform data. For this type of data, our code will output the data information directly without the decoded information.

## Resources

- **[PDF]** [Breathing and Heartbeat Radar Sensor Datasheet](https://files.seeedstudio.com/wiki/mmWave-radar/MR60BHA1_Datasheet.pdf)
- **[ZIP]** [Breathing and Heartbeat Radar Sensor User Manual](https://files.seeedstudio.com/wiki/60GHzradar/MR60BHA1_usermanual.zip)
- **[EXE]** [Upper Computer Software_old version](https://files.seeedstudio.com/wiki/60GHzradar/Human-Vital-Sign-Radar.exe)
- **[EXE]** [Upper Computer Software_new version](https://files.seeedstudio.com/wiki/60GHzradar/MR60BHA1_new.exe)
- **[PPTX]** [Seeed mmWave sensor series V2.0](https://files.seeedstudio.com/wiki/mmWave-radar/Seeed-mmWave-sensor-series-V2.0.pptx)
- **[ZIP]** [60G-Radar-heartbeat-3D](https://files.seeedstudio.com/wiki/mmWave-radar/60G-Radar-heartbeat-3D.zip)

## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).

<div>
  <p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
