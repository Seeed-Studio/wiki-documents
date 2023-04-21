---
description:  Grove - Vision AI Module
title:  Grove - Vision AI Module
keywords:
- grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Vision-AI-Module
last_update:
  date: 3/22/2023
  author: MengDu
---

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/camera.jpg" /></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-p-5457.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Introduction

Grove Vision AI Module Sensor represents a thumb-sized AI camera, customized sensor which has been already installed ML algorithm for people detection, and other customized models. Being easily deployed and displayed within minutes, it works under ultra-low power model, and provides two ways of singal transmission and multiple onboard modules, all of which make it perfect for getting started with AI-powered camera.

In this wiki, we will show you how to utilize the Grove Vision AI module Sensor connecting seeed studio XIAO Series and Arduino, to detect people, panda, and then display it on the website.

### Specification

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-c3ow{border-color:inherit;text-align:center;vertical-align:top}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style> -->
<table class="tg">
<thead>
  <tr>
    <th class="tg-c3ow">Parameters</th>
    <th class="tg-c3ow">Description</th>
    <th class="tg-c3ow">Note</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-c3ow" rowspan="3">Connector</td>
    <td class="tg-0pky">Grove (Grove base for Arduino)</td>
    <td class="tg-0pky">5V Charge and Data Transmission</td>
  </tr>
  <tr>
    <td class="tg-0pky"><span>Double row 7pin socket (seeed duino XIAO)</span></td>
    <td class="tg-0pky">5V Charge and Data Transmission</td>
  </tr>
  <tr>
    <td class="tg-0pky"><span>USB Type-C</span></td>
    <td class="tg-0pky">5V Charge and Firmware burn</td>
  </tr>
  <tr>
    <td class="tg-0pky">Communication Mode</td>
    <td class="tg-0pky">IIC</td>
    <td class="tg-0pky"></td>
  </tr>
  <tr>
    <td class="tg-0pky">Processor</td>
    <td class="tg-0pky">Himax HX6537-A </td>
    <td class="tg-0pky"><span>400Mhz DSP (ultra low power consumption)</span></td>
  </tr>
  <tr>
    <td class="tg-0pky">Camera Sensor</td>
    <td class="tg-0pky">OV2640 chip</td>
    <td class="tg-0pky">Resolution Ratio 1600*1200</td>
  </tr>
  <tr>
    <td class="tg-0pky">Microphone</td>
    <td class="tg-0pky">MSM261D3526H1CPM chip</td>
    <td class="tg-0pky">-26dBFs sensitivity</td>
  </tr>
  <tr>
    <td class="tg-0pky">Accelerometer Sensor</td>
    <td class="tg-0pky">STLSM6DS3TR-C Sensor</td>
    <td class="tg-0pky">3D accelerometer and 3D gyroscope</td>
  </tr>
</tbody>
</table>

### Feature

- Easy-to-use AI Camera: Apply Edge Machine Learning algorithm in the camera sensor perfectly for detecting obejcts
- Plug and Play: Make toilless effort to perform full function and display within minutes
- Ultra-low Power consumption: Activate while detected objects moving for power saving
- Compact AI-powered Camera Sensor: The device itself is thumb-sized, vision-based, and suitable for Edge Intelligence
- Customized Sensor Design: Support custom ML models by users define
- Two Signal Transmission Supported: Refer to seeed studio XIAO elegant connecting and Grove base for Arduino simple connection
- Onboard Camera Sensor: Corporate OV2640 chip with 1600*1200 resolution ratio
- Onboard Microphone: Corporate MSM261D3526H1CPM chip with -26dBFs sensitivity
- Onboard Accelerometer Sensor: Corporate STLSM6DS3TR-C sensor for 3D accelerometer and 3D gyroscope detected
- Onboard 32 MB SPI Ultra Low Power Flash
- One wire for all data output: Represent Grove family simplified connection for only one Grove cable required between the sensor and the single board

## Hardware Overview

We assume you might want to be aware of some basic parameters of the product. The following tables present information about the characteristics and pinout of Grove Vision AI Module Sensor.

| Characteristic                         | Value     | Unit      |
| :-------:                              | :-------: | :-------: |
| Operating Voltage                      |   5    |     V       |
| Rate   |    115200     |          |
| I2C Interface                          | seeed studio XIAO & Arduino   | -         |
| Power Supply | dual 7-pin connector & Tpye-C    | -         |
| Downloading & Firmware Burn Interface | Type-C    | -         |
| Dimensions                             |   40*20*13        | mm        |

### Pinout Overview

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/pinout1.png" style={{width:800, height:'auto'}}/></div>

- 2 —— BL702
- 3 —— MIC MSM261D3526H1CPM
- 4 —— 6-axis LSM6DS3TR-C
- 5 —— SPI Flash
- 9 —— USB type C
- 10 —— Dual 7-pin female socket
- 11 —— **Reset button**
- 12 —— **BOOT button**
- 13 —— **USER button**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/pinout2.png" style={{width:800, height:'auto'}}/></div>

- 1 —— HX6537-A
- 6 —— Camera Connector
- 7 —— DC-DC Chip
- 8 —— Grove Connector
- 14 —— Power Light
- 15 —— Burning indicator light

## Getting Started

We will show you the basic function about the module, and then introduce you the customized way that you can build the ML model of your own. But before we fully apply the module to our projects, it will take us serval steps to get the module ready.

### Preparation

**Hardware**

- Grove Vision AI Module Sensor
- **Windows host** PC (Win10 tested)
- Type-C cable

### Arduino Library Overview

:::tip
If this is your first time using Arduino, we highly recommend you to refer to [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).
:::

The code we use here provides serval methods of classification and selectable models, including customized models. The default we select here is object detection method and pre-trained model.

*Seeed Studio will develop more methods and models for the foreseeable future, stay tuned with us.*

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

#### Function

Before we get started developing a sketch, let's look at the available functions of the library.

1. `if (ai.begin(ALGO_OBJECT_DETECTION, MODEL_EXT_INDEX_1))` - This is where we can select our methods of classification and the models.

  You can change `ALGO_OBJECT_DETECTION` to `ALGO_OBJECT_COUNT` or `ALGO_IMAGE_CLASSIFICATION`. 

  Meanwhile, if you also burn your customized model(firmware) into the module, you can change `MODEL_EXT_INDEX_1` to `MODEL_EXT_INDEX_2` or 3, 4, as you named it.

2. `object_detection_t data` - This is the struct dataset where the result output. 

  If you change the classification method, you need to change `object_detection_t` correspondingly to `image_classification_t` or `object_count_t`.

3. `uint8_t len = ai.get_result_len()` - The "len" here means how many human face it detects.

4. `object_detection_t data` - The data here represent a **struct** format and the tpye is "object_detection_t" that is pre-defined.

  Meanwhile, if you choose other methods of classification, you need to change it to `image_classification_t data` or `object_count_t data`.

5. `Serial.print(data.confidence)` - The **struct** format can not be directly used to print, it should point to the specific type which is defined in the head file.

```C
typedef struct
{
    uint16_t x;
    uint16_t y;
    uint16_t w;
    uint16_t h;
    uint8_t confidence;
    uint8_t target;
} object_detection_t;
```

:::tip
The "confidence" we want to print here shows how much "confidence" the camera has to detect the object.
:::

### Library Installation

Since we have downloaded the zip Library, open your Arduino IDE, click on **Sketch > Include Library > Add .ZIP Library**. Choose the zip file you just downloaded，and if the library install correct, you will see **Library added to your libraries** in the notice window. Which means the library is installed successfully.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:600, height:'auto'}}/></div>

### Library Upgrading

In the foreseeable future, we will optimize and upgrade the product library for more interesting function. According to the library installation methods provided above, we here introduce you the way to upgrade.

We will update the link when the library is optimized. You can **delete the original library folder** in your computer's folder, then download the latest version, unzip it and put it in the Arduino IDE library directory. (**...\Arduino\libraries. ....** is the path you setup Arduino)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Location_lib.png" style={{width:600, height:'auto'}}/></div>

## Seeed Studio XIAO / Seeeduino / Arduino Example

Now that we have our library installed and the firmware burned. we can now run some examples with Grove AI module sensor on Seeed Studio XIAO nRF52840 and Seeeduino V4.2 to see how it behaves.

**Step 1.** Launch the Arduino application.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

**Step 2.** Select your development board model and add it to the Arduino IDE.

- If you want to use **Seeeduino** for the later routines, please refer to [this tutorial](https://wiki.seeedstudio.com/Seeed_Arduino_Boards/) to finish adding.

- If you want to use **Seeed Studio XIAO SAMD21** for the later routines, please refer to [this tutorial](https://wiki.seeedstudio.com/Seeeduino-XIAO/#software) to finish adding.

- If you want to use **Seeed Studio XIAO RP2040** for the later routines, please refer to [this tutorial](https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#software-setup) to finish adding.

- If you want to use **Seeed Studio XIAO nRF52840** for the later routines, please refer to [this tutorial](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup) to finish adding.

### Demo 1 Human Detection with Seeed Studio XIAO nRF52840 / Seeeduino / Arduino

In this demo, we will detect human face and count how many people the module detects on both <a href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank"><span>Seeed Studio XIAO nRF52840 Sense</span></a> and Seeeduino V4.2 (Arduino UNO). Meanwhile, Seeed Studio provives a [website](https://files.seeedstudio.com/grove_ai_vision/index.html) to display what the module sees.

#### Materials Required

- **For seeed studio XIAO BLE Sense**

|    Seeed Studio XIAO nRF52840 Sense          | Grove AI Camera  |
|--------------|--------------|
| <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:220, height:'auto'}}/></div> | <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/camera.jpg" style={{width:210, height:'auto'}}/></div> |
| <div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html"><strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong></a></div> | <div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-p-5457.html"><strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong></a></div> |

- **For Seeeduino V4.2**

| Seeeduino V4.2 | Base Shield | Grove AI Camera|
|--------------|-------------|-----------------|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" style={{width:220, height:'auto'}}/></div> | <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" style={{width:210, height:'auto'}}/></div> | <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/camera.jpg" style={{width:210, height:'auto'}}/></div> |
| <div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"><strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong></a></div> | <div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"><strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong></a></div> | <div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-p-5457.html"><strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong></a></div> |

#### Operation Steps

- **Step 3 (Seeed Studio XIAO).** Parpare a Type-C cable and connect it to one seeed studio XIAO Series board. Plug it pin by pin into the Grove AI Module and use another Type-C cable to connect the module.

  Both Type-C cable should be connected with the PC. In the end, the direction of the Type-C connector on the module should be the same as Type-C connector on the seeed studio XIAO samd21. For instance:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI11.JPG" style={{width:600, height:'auto'}}/></div>

- **Step 3 (Arduino).** Parpare a Grove cable and connect it to one Arduino board. Use another Type-C cable to connect the module.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI13.png" style={{width:400, height:'auto'}}/></div>

- **Step 4.** Upload the program.

```c
#include "Seeed_Arduino_GroveAI.h"
#include <Wire.h>

GroveAI ai(Wire);
uint8_t state = 0;
void setup()
{
  Wire.begin();
  Serial.begin(115200);
  
   Serial.println("begin");
  if (ai.begin(ALGO_OBJECT_DETECTION, (MODEL_INDEX_T)0x11)) // Object detection and pre-trained model 1
  {
    Serial.print("Version: ");
    Serial.println(ai.version());
    Serial.print("ID: ");
    Serial.println( ai.id());
    Serial.print("Algo: ");
    Serial.println( ai.algo());
    Serial.print("Model: ");
    Serial.println(ai.model());
    Serial.print("Confidence: ");
    Serial.println(ai.confidence());
    state = 1;
  }
  else
  {
    Serial.println("Algo begin failed.");
  }
}

void loop()
{
  if (state == 1)
  {
    uint32_t tick = millis();
    if (ai.invoke()) // begin invoke
    {
      while (1) // wait for invoking finished
      {
        CMD_STATE_T ret = ai.state(); 
        if (ret == CMD_STATE_IDLE)
        {
          break;
        }
        delay(20);
      }

     uint8_t len = ai.get_result_len(); // receive how many people detect
     if(len)
     {
       int time1 = millis() - tick; 
       Serial.print("Time consuming: ");
       Serial.println(time1);
       Serial.print("Number of people: ");
       Serial.println(len);
       object_detection_t data;       //get data

       for (int i = 0; i < len; i++)
       {
          Serial.println("result:detected");
          Serial.print("Detecting and calculating: ");
          Serial.println(i+1);
          ai.get_result(i, (uint8_t*)&data, sizeof(object_detection_t)); //get result
  
          Serial.print("confidence:");
          Serial.print(data.confidence);
          Serial.println();
        }
     }
     else
     {
       Serial.println("No identification");
     }
    }
    else
    {
      delay(1000);
      Serial.println("Invoke Failed.");
    }
  }
  else
  {
    state == 0;
  }
}
```

Open the serial monitor and set baud rate as 115200 and the result of people detection should be showed continuously. Meanwhile, the image that is captured by the module also will display on the [website](https://files.seeedstudio.com/grove_ai_vision/index.html). The successful ongong output should be like:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI12.png" style={{width:400, height:'auto'}}/></div>

On the display [website](https://files.seeedstudio.com/grove_ai_vision/index.html), you can see that two faces are framed with dual number. Number 0 means the human face that module detected, and the other number means the confidence.

:::note
Not all browsers support the display of Vision AI results. Please refer to the table below for the support of each major browser.

| Chrome | Edge | Firefox | Opera | Safari |
|--------|------|---------|-------|--------|
| Support | Support | Not support |  Support | Not support |
:::


## Customize Trainning Model

The Seeed Studio has provided pre-trained people detected model and will provide more models in the foreseeable future. You can directly use them to quickly get to know AI camera.

You can find our firmware and models for Grove Vision AI at the following locations.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Firware</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

- **People Detected Model**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI20.png" style={{width:800, height:'auto'}}/></div>

- If you want to customize your own firmware, you can refer to <a href="https://github.com/Seeed-Studio/yolov5-swift" target="_blank"><span>here</span></a> which is powered by YOLOV5.

  Or refer to [the tutorial here](https://wiki.seeedstudio.com/Train-Deploy-AI-Model-Grove-Vision-AI/) and train your own model to suit your needs.


## Burn Model file into the Module

The training models are all represented as ".uf2" file, which is what we need.

- **Step 1**. Connect module to the host PC with a Type-C cable and **double click** BOOT button on the module.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI21.png" style={{width:800, height:'auto'}}/></div>

  There will be a "GROVEAI" disk pop up.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/19.jpg" style={{width:300, height:'auto'}}/></div>

- **Step 2**. Re-flash the factory firmware

:::caution
In general, we do not need to reflash the factory firmware unless your device is always not working properly. For more details, please read the **[Restore Factory Firmware](#restore-factory-firmware)**. If your device is working properly, skip this step.
:::

- **Step 3**. Please copy the Model `.uf2` file to the GROVEAI disk to complete the firmware flash.

  If you need to flash the factory firmware, copy the factory firmware to the GROVEAI first, then reconnect the Vision AI and finally flash the model firmware.

  If you only need to flash the model firmware, just copy the model firmware directly into GROVEAI.

  We can see that Work LED on the module flash in speed, that means the process is ongoing. After the disk disapper, the process of burnning firmware is finished.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI10.png" style={{width:600, height:'auto'}}/></div>

## Restore Factory Firmware

:::tip
If ever uploading firmware on the latest version of Windows 11 has rendered the device unusable, you may need to refer to the section on [Update BootLoader](#update-bootloader).
:::

It is important to note that not all properly functioning Grove Vision AI's require flash factory firmware. If you are not experiencing the conditions described below, please do not flash the factory firmware lightly.

If you ever do it wrong and upload the wrong firmware to Grove Vision AI, it may cause Grove Vision AI not to work properly. The method to determine if Grove Vision AI is working properly is as follows.

Connect the Grove Vision AI to your computer via the USB-C port. Then use a serial port monitoring tool to select the port where the added Grove Vision AI is located. The baud rate is set to **921600**.

Then press Reset on the Grove Vison AI and if the device is working properly, then you should see the following message.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI22.png" style={{width:800, height:'auto'}}/></div>

If you can see the above serial message, then it proves that your device is fine and there is no need to restore the factory firmware, you can try to re-upload your model firmware to continue the later tasks.

If you don't get any messages from your serial port, then it might be a case where we need to restore the factory firmware.

- **Step 1**. Erase firmware

Please use the Arduino motherboard you have, the Seeed Studio XIAO series, Wio Terminal or Seeeduino are recommended. Connect the Grove Vision AI to the motherboard via the IIC interface.

Open the Arduino IDE and upload the program to erase the firmware.

```c
#include "Seeed_Arduino_GroveAI.h"
#include <Wire.h>
WEI wei(Wire);

void setup()
{
    Wire.begin();
    Serial.begin(115200);
    while (!Serial)
    {
        /* code */
    }
    delay(1000);
    Serial.println("Press any key to start erase");
}

void loop()
{
    if (Serial.available())
    {
        while (Serial.available())
        {
            Serial.read();
        }
        uint32_t id = wei.ID();
        Serial.print("ID: 0x");
        Serial.println(id, HEX);
        wei.enter_bootloader();
        Serial.println("Erase");
        wei.erase();
        Serial.println("Erase done");
    }
}
```

Open the serial monitor and if you see the following message, then it proves that the firmware erase was successful. We can go to the next step.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI23.png" style={{width:800, height:'auto'}}/></div>

- **Step 2**. Connect module to the host PC with a Type-C cable and **double click** BOOT button on the module.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI21.png" style={{width:800, height:'auto'}}/></div>

  There will be a "GROVEAI" disk pop up.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/19.jpg" style={{width:300, height:'auto'}}/></div>

- **Step 3**. Download the factory firmware.

Please download the latest version of the factory firmware in the link below. The name of the factory firmware is usually `grove_ai_without_crc_vxx.uf2`.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Firware</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

- **Step 4**. Flash the factory firmware.

  Copy the `grove_ai_without_crc_vxx.uf2` file to the GROVEAI disk to complete the firmware flash.

## Check BootLoader Version

You may need to detect if the BootLoader version needs to be updated to decide if the update should be done. The method to check the version number is as follows.

Connect the Grove Vision AI to your computer via the USB-C port. Then use a serial port monitoring tool to select the port where the added Grove Vision AI is located. The baud rate is set to **921600**.

Then press Reset on the Grove Vison AI and if the device is working properly, then you should see the following message.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI22.png" style={{width:800, height:'auto'}}/></div>

You can see that the third line of the picture is the version number of BootLoader. If it is the same as the version number we released, you don't need to update BootLoader.

## Update BootLoader

If your Grove Vision AI is not recognized by your computer and behaves as no port number, then you may need to update the BootLoader.

- **Step 1**. Download the BootLoader `.bin` file on the windows PC.

Please download the latest version of the BootLoader file in the link below. The name of the BootLoader is usually `tinyuf2-grove_vision_ai_vx.x.x.bin`.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Firware</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

This is the firmware that controls the BL702 chip that builds the connection between the computer and the Himax chip. The latest version of the BootLoader has now fixed the problem of Vision AI not being able to be recognised by Mac and Linux.

- **Step 2**. Download and open [**BLDevCube.exe**](https://files.seeedstudio.com/wiki/Grove_AI_Module/BouffaloLabDevCube-1.6.6-win32.rar) software, select **BL702/704/706**, and then click **Finish**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI01a.png" style={{width:300, height:'auto'}}/></div>

- **Step 3**. Click **View**, choose **MCU** first. Move to **Image file**, click **Browse** and select the firmware you just downloaded.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/1.png" style={{width:800, height:'auto'}}/></div>

- **Step 4**. Make sure there are no other devices connect to the PC. Then hold the Boot button on the module, connect it to the PC.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI05.png" style={{width:600, height:'auto'}}/></div>

  We can see 5V light and 3.3V LED light are lighting on the back of the module, then loose the Boot button.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI06.png" style={{width:600, height:'auto'}}/></div>

- **Step 5**. Back to the BLDevCube software on the PC, click **Refresh** and choose a proper port. Then click **Open UART** and set **Chip Erase** to **True**, then clink **Creat&Program**, wait for the process done.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_AI_Module/GroveAI07.png" style={{width:800, height:'auto'}}/></div>


## Trouble Shooting

### Q1: What is the main method of connection?

- a. Link the microcontroller and the module first.
- b. Connect the microcontroller with host PC second.
- c. Connect the module with host PC at last.

### Q2: Why can't I see the image display on the website? Nor the detecting?

- a. Is the module heated? Connect the module only will cost heat problem and let the module not functioning for a moment.
- b. Is connecting after the correct method?

### Q3: Why does Grove Vision AI suddenly get an "Algo begin failed." error one day while in use?

If this is the error, then it is likely that there is a problem with your model, please re-upload your model based on the [Burn Model file into the Module](#burn-model-file-into-the-module) section and retry again.

## Tech Support

<div>
  Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>

