---
description: Getting Started with Grove D7S Vibration Sensor
title: Grove - D7S Vibration Sensor
keywords:
- Grove
- vibration
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /grove-d7s-vibration-sensor
last_update:
  date: 6/6/2023
  author: Stephen Lo
---

# Grove - D7S Vibration Sensor

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/main.jpg" alt="pir" width={500} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-D7S-Vibration-Sensor-p-5701.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

<br />

The Grove - D7S Vibration Sensor is a powerful earthquake detection module that provides real-time monitoring of seismic activities. It is based on the advanced D7S module developed by Omron Corporation, a leading manufacturer of sensing technology.

Featuring a high-precision three-axis accelerometer and sophisticated earthquake algorithms, the Grove - D7S Vibration Sensor offers accurate and reliable detection of seismic events. It can detect various types of vibrations and classify them based on their severity, providing valuable information for earthquake monitoring and safety applications.

Designed with simplicity and versatility in mind, the Grove - D7S Vibration Sensor integrates seamlessly with Grove system, a modular prototyping platform. Its standardized interface allows for easy connection to Arduino boards and other compatible development platforms.

## Introduction

### Features

- High-Precision Accelerometer: Equipped with a three-axis accelerometer, the sensor provides accurate measurements of vibrations and seismic activity.
- Real-Time Earthquake Detection: The Grove - D7S Vibration Sensor uses advanced algorithms to detect and classify seismic events in real time. It can differentiate between different magnitudes of earthquakes and provide corresponding alert signals.
- Easy Integration with Grove System: The sensor features a Grove-compatible interface, allowing for easy connection to Arduino boards and other compatible platforms. No complex wiring or soldering is required, making it accessible to users of all skill levels.
- Compact and Robust Design: The Grove - D7S Vibration Sensor has a compact form factor, making it suitable for various applications where space is limited. Its robust construction ensures durability and reliable performance, even in harsh environments.
- Low Power Consumption: The sensor is designed to operate with low power consumption, making it suitable for long-term monitoring applications without draining the power source quickly.

### Specification

- Chip: D7S
- Measurement Range: ±6g
- Communication interface: I2C
- Grove connector: 4-pin HY2.0
- Operating voltage: 3.3/5V

### In the Box

- 1 x Grove - D7S Vibration Sensor Board
- 1 x Grove Cable(20cm)

### Applications

The Grove - D7S Vibration Sensor can be used in a wide range of applications, including but not limited to:

- Earthquake Monitoring Systems: Deploying the sensor in buildings, bridges, and critical infrastructure allows for real-time monitoring of seismic activities. It enables early detection and alert systems, contributing to improved safety and disaster response.
- Seismic Research and Analysis: Researchers can utilize the Grove - D7S Vibration Sensor to collect data for seismic studies and analysis. The sensor's high-precision measurements provide valuable insights into earthquake patterns and characteristics.
- Structural Safety Assessment: The sensor can be integrated into structural health monitoring systems to evaluate the integrity and stability of buildings, bridges, and other structures. It helps identify potential structural weaknesses caused by seismic events.
- IoT-based Seismic Monitoring Networks: By deploying multiple Grove - D7S Vibration Sensors in a network, it is possible to create a distributed system for comprehensive seismic monitoring over a larger area. This setup enables efficient data collection and analysis for improved earthquake preparedness.

These are just a few examples of the diverse applications that the Grove - D7S Vibration Sensor enables. Its versatility and high-performance make it a valuable tool in earthquake-related projects.

## Hardware Overview

### Pin Map

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/pinmap.png" alt="pir" width={500} height="auto" /></p>

## Getting Started

:::note
If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

### Play With Arduino

#### Hardware

**Materials required**

| Seeeduino V4.2 | Base Shield| Grove - D7S Vibration Sensor |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={250} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={250} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/main.jpg" alt="pir" width={250} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-D7S-Vibration-Sensor-p-5701.html" target="_blank">Get One Now</a>|

:::note
**1.** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
    
**2.** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.
:::

- **Step 1.** Connect Grove - D7S Vibration Sensor to **I2C** port of Grove-Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.


| Seeeduino     | Grove - D7S Vibration Sensor |
|---------------|-------------------------|
| 3.3/5V        | Red                     |
| GND           | Black                   |
| SDA           | White                   |
| SCL           | Yellow                  |

#### Software

- **Step 1.** Download the [Grove - D7S Vibration Sensor](https://github.com/limengdu/d7s-grove-arduino) from Github.

- **Step 2.** Refer to [How to install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3.** After downloading and installing the library correctly, you can find an example program named sample.ino in the examples folder. This program is designed for the D7S module.

```cpp
#include <D7S.h>

//old earthquake data
float oldSI = 0;
float oldPGA = 0;

//flag variables to handle collapse/shutoff only one time during an earthquake
bool shutoffHandled = false;
bool collapseHandled = false;

//function to handle collapse event
void handleCollapse()
{
    //put here the code to handle the collapse event
    Serial.println("-------------------- COLLAPSE! --------------------");
}

void setup()
{
    // Open serial communications and wait for port to open:
    Serial.begin(9600);
    while (!Serial)
    {
        ; // wait for serial port to connect. Needed for native USB port only
    }

    Serial.print("Starting D7S communications (it may take some time)...");
    //start D7S connection
    D7S.begin();
    //wait until the D7S is ready
    while (!D7S.isReady())
    {
        Serial.print(".");
        delay(500);
    }
    Serial.println("STARTED");

    //setting the D7S to switch the axis at inizialization time
    Serial.println("Setting D7S sensor to switch axis at inizialization time.");
    D7S.setAxis(SWITCH_AT_INSTALLATION);

    Serial.println("Initializing the D7S sensor in 2 seconds. Please keep it steady during the initializing process.");
    delay(2000);
    Serial.print("Initializing...");
    //start the initial installation procedure
    D7S.initialize();
    //wait until the D7S is ready (the initializing process is ended)
    while (!D7S.isReady())
    {
        Serial.print(".");
        delay(500);
    }
    Serial.println("INITIALIZED!");

    //check if there there was a collapse (if this is the first time the D7S is put in place the installation data may be wrong)
    if (D7S.isInCollapse())
    {
        handleCollapse();
    }

    //reset the events shutoff/collapse memorized into the D7S
    D7S.resetEvents();

    Serial.println("\nListening for earthquakes!");
}

void loop()
{

    //checking if there is an earthquake occuring right now
    if (D7S.isEarthquakeOccuring())
    {

        //check if the shutoff event has been handled and if the shutoff condition is met
        //the call of D7S.isInShutoff() is executed after to prevent useless I2C call
        if (!collapseHandled && D7S.isInCollapse())
        {
            handleCollapse();
            collapseHandled = true;
        }

        //print information about the current earthquake
        float currentSI = D7S.getInstantaneusSI();
        float currentPGA = D7S.getInstantaneusPGA();

        if (currentSI > oldSI || currentPGA > oldPGA)
        {
            //getting instantaneus SI
            Serial.print("\tInstantaneus SI: ");
            Serial.print(currentSI);
            Serial.println(" [m/s]");

            //getting instantaneus PGA
            Serial.print("\tInstantaneus PGA (Peak Ground Acceleration): ");
            Serial.print(currentPGA);
            Serial.println(" [m/s^2]\n");

            //save the current data
            oldSI = currentSI;
            oldPGA = currentPGA;
        }
    }
    else
    {
        //reset the old earthquake data
        oldPGA = 0;
        oldSI = 0;
        //reset the flag of the handled events
        shutoffHandled = false;
        collapseHandled = false;
        //reset D7S events
        D7S.resetEvents();
    }
}
```

- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](https://wiki.seeedstudio.com/Upload_Code/).

- **Step 5.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. you can generate some vibrations, for example, by tapping the table, and you will obtain the following results.

:::note
The initialisation of the sensor takes approximately 3 to 5 minutes.
:::


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/output.png" style={{width:1000, height:'auto'}}/></div>

## Troubleshooting

### Q1: Can the Grove - D7S Vibration Sensor detect all types of earthquakes?

The Grove - D7S Vibration Sensor is designed to detect a wide range of seismic activities, including both minor and major earthquakes. However, the detection range and sensitivity may vary depending on the magnitude and proximity of the earthquake.

### Q2: Can I use the Grove - D7S Vibration Sensor with other development boards apart from Arduino?

Yes, the Grove - D7S Vibration Sensor is compatible with other development boards that support the I2C interface. Ensure that you have the necessary libraries and resources available for your chosen platform.

### Q3: What is the power requirement for the Grove - D7S Vibration Sensor?

The sensor can operate at either 3.3V.

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/D7S-Vibration-Sensor.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[ZIP]** [Grove - D7S Vibration Sensor SCH&PCB](https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/D7S-Vibration-Sensor.zip)
- **[PDF]** [D7S Datasheet](https://files.seeedstudio.com/wiki/grove-d7s-vibration-sensor/en-d7s-957666.pdf)

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


