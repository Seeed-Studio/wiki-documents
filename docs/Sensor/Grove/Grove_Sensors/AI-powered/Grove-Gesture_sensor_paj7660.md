---
description: Getting started for the Grove Gesture sensor PAJ7660.
title: Grove Smart IR Gesture Sensor (PAJ7660)
keywords:
- gesture
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /grove_gesture_paj7660
last_update:
  date: 06/28/2023
  author: Citric
---

# Grove Smart IR Gesture Sensor (PAJ7660)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/main.jpg" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Smart-IR-Gesture-Sensor-p-5721.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>


## Introduction

Grove Smart IR Gesture Sensor is an intelligent gesture recognition module equipped with an infrared camera sensor and applied AI algorithm. It can detect over 15 gestures with wide detection while supporting both IIC and SPI communication. This module also allows Grove, Type-C, and Seeed Studio XIAO direct connecting.

### Feature

- **Compact AI gesture sensor**: Equip with an infrared camera sensor and apply AI algorithm to achieve gesture detection, in a compact size board of 4.3cm x 2.1cm
- **Over 15 gestures with wide detection**: Support various gestures such as N-finger push, pinch, tap, grab, rotation, thumb up/down, static, etc, with a detection range of 5-40cm
- **High compatibility**: Compatible with the XIAO series interface and the Grove connector through I2C communication while supporting images displayed on PC through SPI communication
- **Flexible Voltage Selection**: Grove Interface Compatible with 3.3V and 5V Systems

## Hardware Overview

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/hardware.png" style={{width:1000, height:'auto'}}/></div>

## Getting Started

### Operating Plane

The gesture operation distance is 15 to 30 cm, the farthest cannot exceed 35 cm. Based on Sensor FOV 78.3° (horizontal) and 62.9°(vertical), and the operating area is 48 x 36 cm² at 30 cm.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/1.png" style={{width:700, height:'auto'}}/></div>

In addition to the distance to the sensor, you also need to pay attention to where the sensor is placed. On the front of the sensor, in the upper left corner, there is a small human shape. If you see the figure standing upright, then you have placed it in the correct position. If it is upside down, then it is likely that you will not get an accurate recognition result.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/13.png" style={{width:400, height:'auto'}}/></div>

### Background Interference

As background noise may impact the accuracy of gesture recognition, it is recommended to avoid the relative higher reflective background object behind the palm. In normal gesture recognition condition, recommend at least 35cm distance between palm and background.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/2.png" style={{width:600, height:'auto'}}/></div>


### Gesture Types

All supported gesture types are described in the following sections.

#### Gesture Definition

<div class="table-center">
	<table align="center">
		<tr>
			<th>Gesture</th>
			<th>Description</th>
            <th>Note</th>
		</tr>
		<tr>
			<td>N Finger (N=0~5)</td>
			<td>0 ~ 5 fingers at top of fist <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/3.png" style={{width:250, height:'auto'}}/></div></td>
            <td>Operation Distance 15 to 30 cm <br /> Static</td>
		</tr>
		<tr>
			<td>N Finger Push (N=1~5)</td>
			<td>N fingers move forward toward sensor <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/4.png" style={{width:250, height:'auto'}}/></div></td>
            <td>Operation Distance 15 to 30 cm <br /> Programmable threshold</td>
		</tr>
        <tr>
            <td>Pinch</td>
            <td>2-finger close to pinch, open to release <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/5.png" style={{width:100, height:'auto'}}/></div></td>
            <td>Operation Distance 15 to 30 cm <br /> Can use palm center coordinate as cursor and Report Pinch result</td>
        </tr>
        <tr>
            <td>Rotation CW/CCW</td>
            <td>Move wrist in a circular pattern <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/6.png" style={{width:150, height:'auto'}}/></div></td>
            <td>Operation Distance 15 to 30 cm <br /> Gesture detected angle can be set, can report angle value</td>
        </tr>
        <tr>
            <td>Hand Swipe Right or Left</td>
            <td>Swipe and move both hands away from each other for some distance <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/7.png" style={{width:300, height:'auto'}}/></div></td>
            <td>Operation Distance 15 to 30 cm <br /> Programmable threshold</td>
        </tr>
        <tr>
            <td>Tap</td>
            <td>1-finger click (fingers disappear) <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/8.png" style={{width:200, height:'auto'}}/></div></td>
            <td>Operation Distance 15 to 30 cm <br /> Can use palm center coordinate as cursor</td>
        </tr>
        <tr>
            <td>Grab</td>
            <td>5-finger to 0-finger <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/9.png" style={{width:200, height:'auto'}}/></div></td>
            <td>Operation Distance 15 to 30 cm <br /> Can use palm center coordinate as cursor <br /> Report Grab result</td>
        </tr>
        <tr>
            <td>Thumb Up</td>
            <td>Thumb at top of fist <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/10.png" style={{width:180, height:'auto'}}/></div></td>
            <td>Operation Distance 15 to 25cm</td>
        </tr>
        <tr>
            <td>Thumb Down</td>
            <td>Thumb at bottom of fist <br /> <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/11.png" style={{width:180, height:'auto'}}/></div></td>
            <td>Operation Distance 15 to 25cm</td>
        </tr>
	</table>
</div>

#### Gesture Operation Mode

There are 3 gesture modes: thumb, cursor, and gesture modes. Each of them defines specific gesture types for certain user scenarios or applications. The default combined mode includes all gestures except thumbs.

<div class="table-center">
	<table align="center">
		<tr>
			<th>Mode</th>
			<th>Default Connection</th>
            <th>Gesture Types</th>
		</tr>
		<tr>
			<td>2</td>
			<td>Thumb Mode</td>
            <td>Thumb Up/Down</td>
		</tr>
		<tr>
			<td>4</td>
			<td>Cursor Mode</td>
            <td>Static Finger <br /> Push <br /> Rotate <br /> Tap <br /> Pinch <br /> Grab</td>
		</tr>
        <tr>
			<td>5</td>
			<td>Gesture Mode (Default)</td>
            <td>Static Finger <br /> Push <br /> Swipe <br /> Rotate <br /> Tap (IS_SELECT flag = 1)  <br /> Pinch (IS_SELECT flag = 1) <br /> Grab (IS_SELECT flag = 1)</td>
		</tr>
	</table>
</div>

### Hardware Types

The Grove Smart IR Gesture Sensor supports a wide range of communication protocols with a choice of IIC, SPI and USB. The different modes are selected directly via a 4 position DIP switch on the back.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/back.png" style={{width:400, height:'auto'}}/></div>

<br />

The diagram and table below will show you how to select the mode you wish to use with the 4 position DIP switch.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/12.png" style={{width:300, height:'auto'}}/></div>

<div class="table-center">
	<table align="center">
		<tr>
			<th> </th>
			<th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
		</tr>
		<tr>
			<th>I2C Mode</th>
			<td>ON</td>
            <td>OFF</td>
            <td>ON</td>
            <td>ON</td>
		</tr>
		<tr>
			<th>SPI Mode</th>
			<td>ON</td>
            <td>ON</td>
            <td>ON</td>
            <td>ON</td>
		</tr>
        <tr>
			<th>USB Mode</th>
			<td>OFF</td>
            <td>OFF</td>
            <td>OFF</td>
            <td>OFF</td>
		</tr>
	</table>
</div>

:::note
The wiring and code may also be slightly different when using different patterns. We will tell you more about this in the following examples.
:::


## Use of the upper computer software

If you want to connect the Grove Gesture Sensor to your computer via a USB cable and see the recognition in real time and the results, then using the upper computer software is best for you.

### Step 1. Download and open the software

You can download the software as a zip file first by clicking **[here](https://files.seeedstudio.com/wiki/grove-gesture-paj7620/res/GestureDemo_220620_Customer.zip)**. Then, please unzip the downloaded zip file, open the unpacked **GestureDemo_220620_Customer** folder and double-click to run the **GestureDemo_220620_Customer.exe** file.

:::tip
At this point an error window may pop up telling us that the Geture Sensor was not found, we can simply close the error message.
:::

### Step 2. Connect the Grove Gesture Sensor to PC

Next, make sure that the Grove Gesture Sensor is in USB mode by turning the 4-position DIP switch all the way to OFF.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/14.png" style={{width:150, height:'auto'}}/></div>

Then using a high quality data cable, connect the Grove Gesture Sensor's USB-C port to your computer's USB port.

### Step 3. View results in the software

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/16.png" style={{width:1000, height:'auto'}}/></div>

Once connected to the computer, we click on the **Run** button in the top left corner of the software and then select **Gesture** mode to see the results in real time.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/17.png" style={{width:1000, height:'auto'}}/></div>

The types of gestures and their introduction can be found in the **[previous sections](#gesture-types)**.

## Arduino Library Overview

:::tip
If this is your first time using Arduino, we highly recommend you to refer to [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).
:::


<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Grove_Gesture/tree/dev">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### Function

Before we get started developing a sketch, let's look at the available functions of the library.

1. `bool init()` —— This function initialises the Grove Gesture Sensor and returns **True** if the initialisation is successful and **False** if it fails.

2. `bool getResult(paj7620_gesture_t& res)` —— The function serves to obtain the result of the sensor's recognition of the gesture.

### Installation

Since you have downloaded the zip Library, open your Arduino IDE, click on **Sketch > Include Library > Add .ZIP Library**. Choose the zip file you just downloaded，and if the library install correct, you will see **Library added to your libraries** in the notice window. Which means the library is installed successfully.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

<br></br>

## Demo 1: Connect sensors to MCU by IIC

### Step 1. Turn the 4-position DIP switch to the IIC position.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/IIC.png" style={{width:100, height:'auto'}}/></div>

The second gear from left to right needs to be set to OFF, all others are ON.

### Step 2. Connect the MCU to the Grove Gesture Sensor via the Grove cable.

The IIC interface is compatible with the XIAO series and the Arduino/Seeeduino series. If you are using an Arduino/Seeeduino then you may need to use a Grove cable to connect to their IIC interface.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/18.jpg" style={{width:600, height:'auto'}}/></div>

If you are using XIAO, then everything is easy, you just need to plug it straight in to the Grove Gesture Sensor's female connector and use it. Please note that the USB-C port is always facing outwards.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/19.png" style={{width:250, height:'auto'}}/></div>

### Step 3. Upload procedure

Copy the following program into the Arduino IDE, select the XIAO development board you are using, compile and upload the program.

#### Code 1: Gesture Mode (Default)

```cpp
#include "Gesture.h"

pag7660 Gesture; // Combined mode is used by default

void setup() {
    Serial.begin(9600);
    while(!Serial) {
        delay(100);
    }
    Serial.println("\nPAG7660 TEST DEMO: Gesture combined mode.");
    
    if(Gesture.init()) {
        Serial.println("PAG7660 initialization success");
    } else {
        Serial.println("PAG7660 initialization failed");
    }
    Serial.println("Please input your gestures:\n");
}

void loop() {
    pag7660_gesture_t result;
    if (Gesture.getResult(result)) {
        printResultCombinedMode(result);
    }
    delay(100);
}

void printResultCombinedMode(const pag7660_gesture_t& result) {
    const char *cursor_str[] = {
        NULL,
        "Tap",
        "Grab",
        "Pinch",
    };
    switch (result.type) {
    case 0:
        switch (result.cursor.type) {
        case 1:
        case 2:
        case 3:
            if (result.cursor.select)
                Serial.println(cursor_str[result.cursor.type]);
            break;
        default:
            break;
        }
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        Serial.print(result.type);
        Serial.println("-finger");
        break;
    case 6:
        Serial.print("Rotate Right ");
        Serial.println(result.rotate);
        break;
    case 7:
        Serial.print("Rotate Left ");
        Serial.println(result.rotate);
        break;
    case 8:
        Serial.println("Swipe Left");
        break;
    case 9:
        Serial.println("Swipe Right");
        break;
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
        Serial.print(result.type - 19 + 1);
        Serial.println("-finger push");
        break;
    default:
        break;
    }
}
```

If all goes well, gesture directly at the Grove Gesture Sensor and it will output the result in the serial monitor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/20.png" style={{width:800, height:'auto'}}/></div>

#### Code 2: Thumb Mode

```cpp
#include "Gesture.h"

pag7660 Gesture(GESTURE_THUMB_MODE); // Thumb mode is used

void setup() {
    Serial.begin(9600);
    while(!Serial) {
        delay(100);
    }
    Serial.println("\nPAG7660 TEST DEMO: Gesture thumb mode.");

    // initialize with a SPI chip select pin number to use SPI
    if(Gesture.init()) {
        Serial.println("PAG7660 initialization success");
    } else {
        Serial.println("PAG7660 initialization failed");
    }
    Serial.println("Please input your gestures:\n");
}

void loop() {
    pag7660_gesture_t result;
    if (Gesture.getResult(result)) {
        if (result.thumb.up)
            Serial.println("Thumb Up");
        else if (result.thumb.down)
            Serial.println("Thumb Down");
        }
    delay(100);
}
```

If all goes well, gesture directly at the Grove Gesture Sensor and it will output the result in the serial monitor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/21.png" style={{width:800, height:'auto'}}/></div>

:::tip
There are three different modes of the Grove Gesture Sensor. We have completed the development of the program for the two self-contained modes and make them available here, please refer to [Gesture Operation Mode](#gesture-operation-mode) for more information on the differences between the different modes.
:::

## Demo 2: Connect sensors to XIAO by SPI

If you wish to use the SPI approach rather than the IIC, then you can refer to the steps here to complete your project.

### Step 1. Turn the 4-position DIP switch to the SPI position.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/SPI.png" style={{width:100, height:'auto'}}/></div>

All switches need to be toggled to the ON position.

### Step 2. Connect the XIAO to the Grove Gesture Sensor.

Plug XIAO straight in to the Grove Gesture Sensor's female connector and use it. Please note that the USB-C port is always facing outwards.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/19.png" style={{width:250, height:'auto'}}/></div>

### Step 3. Upload procedure

Copy the following program into the Arduino IDE, select the XIAO development board you are using, compile and upload the program.

#### Code 1: Gesture Mode (Default)

```cpp
#include "Gesture.h"

#define PAG7660_CS D3
pag7660 Gesture; // Combined mode is used by default

void setup() {
    Serial.begin(9600);
    while(!Serial) {
        delay(100);
    }
    Serial.println("\nPAG7660 TEST DEMO: Gesture combined mode.");
    
    if(Gesture.init(PAG7660_CS)) {
        Serial.println("PAG7660 initialization success");
    } else {
        Serial.println("PAG7660 initialization failed");
    }
    Serial.println("Please input your gestures:\n");
}

void loop() {
    pag7660_gesture_t result;
    if (Gesture.getResult(result)) {
        printResultCombinedMode(result);
    }
    delay(100);
}

void printResultCombinedMode(const pag7660_gesture_t& result) {
    const char *cursor_str[] = {
        NULL,
        "Tap",
        "Grab",
        "Pinch",
    };
    switch (result.type) {
    case 0:
        switch (result.cursor.type) {
        case 1:
        case 2:
        case 3:
            if (result.cursor.select)
                Serial.println(cursor_str[result.cursor.type]);
            break;
        default:
            break;
        }
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        Serial.print(result.type);
        Serial.println("-finger");
        break;
    case 6:
        Serial.print("Rotate Right ");
        Serial.println(result.rotate);
        break;
    case 7:
        Serial.print("Rotate Left ");
        Serial.println(result.rotate);
        break;
    case 8:
        Serial.println("Swipe Left");
        break;
    case 9:
        Serial.println("Swipe Right");
        break;
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
        Serial.print(result.type - 19 + 1);
        Serial.println("-finger push");
        break;
    default:
        break;
    }
}
```

If all goes well, gesture directly at the Grove Gesture Sensor and it will output the result in the serial monitor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/22.png" style={{width:800, height:'auto'}}/></div>

#### Code 2: Thumb Mode

```cpp
#include "Gesture.h"

#define PAG7660_CS D3
pag7660 Gesture(GESTURE_THUMB_MODE); // Thumb mode is used

void setup() {
    Serial.begin(9600);
    while(!Serial) {
        delay(100);
    }
    Serial.println("\nPAG7660 TEST DEMO: Gesture thumb mode.");

    // initialize with a SPI chip select pin number to use SPI
    if(Gesture.init(PAG7660_CS)) {
        Serial.println("PAG7660 initialization success");
    } else {
        Serial.println("PAG7660 initialization failed");
    }
    Serial.println("Please input your gestures:\n");
}

void loop() {
    pag7660_gesture_t result;
    if (Gesture.getResult(result)) {
        if (result.thumb.up)
            Serial.println("Thumb Up");
        else if (result.thumb.down)
            Serial.println("Thumb Down");
        }
    delay(100);
}
```

If all goes well, gesture directly at the Grove Gesture Sensor and it will output the result in the serial monitor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-gesture-paj7620/23.png" style={{width:800, height:'auto'}}/></div>

:::tip
There are three different modes of the Grove Gesture Sensor. We have completed the development of the program for the two self-contained modes and make them available here, please refer to [Gesture Operation Mode](#gesture-operation-mode) for more information on the differences between the different modes.
:::

## Resources

- **[ZIP]** [Grove Gesture Sensor SCH&PCB](https://files.seeedstudio.com/wiki/grove-gesture-paj7620/res/Grove-Smart-IR-Gesture-Sensor_v1.0_SCH&PCB.zip)
- **[PDF]** [Grove Gesture Sensor SCH](https://files.seeedstudio.com/wiki/grove-gesture-paj7620/res/Grove-Smart-IR-Gesture-Sensor_v1.0_SCH_PDF.pdf)
- **[Datasheet]** [PAG7661QN_FW-DS_V0.8_05072022_Confidential.pdf](https://files.seeedstudio.com/wiki/grove-gesture-paj7620/res/PAG7661QN_FW-DS_V0.8_05072022_Confidential.pdf)


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

















