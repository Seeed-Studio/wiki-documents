# LoRa Node with AIoTs_GPS_state_tester

## Introduction

The AIoTs GPS & state tester is basic on Wio Terminal Chassis-LoRa-E5 and GNSS to develop. It compares with the traditional IoTs has more conciseness and intelligence. The traditional one basically just receives some data then does a command action regardless of the data whether is correct. And yet the AIoTs using neural network algorithm is able to filter the useless data to get the correct ones. In this project, it will be used a built-in 3 axis accelerometer sensor and the neural network algorithm to build up an intelligent recognition system. Based on the movement of Wio Terminal, it can show you its state in real-time. Generally, the example project here included three trained states which are Stop(WT idle state), Turn(rolling-over WT device), and Wave(take WT to wave your hand). It is encouraged that you can go to [Edge Impulse](https://www.edgeimpulse.com/) website to add more training action.

<div align=center><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/banner.png"/></div>

## Features

- The LoRa device can display the DevEui, APPEui and Appkey on the first page.
- Neural network algorithm correct data
- High accurately detect Wio Terminal state
- Display longitude, latitude and satellites number.
- Display the device and TTN connection status.

## Hardware

### Hardware Required

In this demo you will need the devices list as below:

- [WioTerminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [Wio Terminal Chassis - LoRa-E5 and GNSS](https://www.seeedstudio.com/Wio-Terminal-Chassis-LoRa-E5-and-GNSS-p-5053.html)
- [Wio Terminal Chassis - Battery (Optional)](https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html)

### Hardware Connect

It is connected to a computer through the Type-C cable.

![](https://files.seeedstudio.com/wiki/Alots/Alots23.png)

## Usage

The project is based on the Arduino platform which means Arduino IDE and various Arduino libraries are required. If this is your first time using the Wio terminal, we have a guide to quickly [Get Started with Wio Terminal](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/).

Require library:

- Seeed_Arduino_SFUD

### Edge Impulse training

- Step 1. Open the [Edge Impulse website](https://studio.edgeimpulse.com/login?next=%2Fstudio%2Fselect-project%3Fautoredirect%3D1), and register an account.

![](https://files.seeedstudio.com/wiki/Alots/Alots1.png)

- Step 2. Create a new project.

![](https://files.seeedstudio.com/wiki/Alots/Alots2.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots3.png)

- Step 3. Download the [wio-terminal-ei-1.4.0.uf2](https://github.com/Seeed-Studio/Seeed_Arduino_edgeimpulse/releases/tag/1.4.0) for connecting to the website.

Double dropping down the left button on Wio terminal, you will see a driver popup on the computer. Then you can draw the [wio-terminal-ei-1.4.0.uf2]() firmware to the driver, the driver will disappear which means the firmware has been uploaded.

![](https://files.seeedstudio.com/wiki/Alots/Alots5.png)

- Step 4. Once set up the firmware, click "connect using WebUSB" to connect the Wio Terminal to the website. And it is time to start training the action.

![](https://files.seeedstudio.com/wiki/Alots/Alots4.png)

When this popup, it means connection is done and the data acquisition can be activitied.

![](https://files.seeedstudio.com/wiki/Alots/Alots6.png)

- Step 5. Enter "Label", "Sample length (ms.)" and click "Start sampling"

![](https://files.seeedstudio.com/wiki/Alots/Alots8.png)

It is recommended that samples the data more than 10 times. 

![](https://files.seeedstudio.com/wiki/Alots/Alots9.png)

- Step 6. After sampling the data, click "creat impulse" to process the data.

![](https://files.seeedstudio.com/wiki/Alots/Alots10.png)

The processing blcok and learning block we selected as recommended. Once blcoks are set up, click "Save Impluse" to store the impulse.

![](https://files.seeedstudio.com/wiki/Alots/Alots11.png)

- Step 7. Move to the "Spectral features" page, to the bottom click "Save parameters" then it may move automatically to the "Generate feature" side.

![](https://files.seeedstudio.com/wiki/Alots/Alots12.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots13.png)

Click "Generate feature" and the page should like:

![](https://files.seeedstudio.com/wiki/Alots/Alots15.png)

- Step 8. Move to the "NN Classifier" page, to the bottom click "Start training".

![](https://files.seeedstudio.com/wiki/Alots/Alots16.png)

When you see the output, it means job done.

![](https://files.seeedstudio.com/wiki/Alots/Alots17.png)

- Step 8. Select and click "Deployment" page. Then chose "Arduino Library", to the bottom select "build" to create the library. It will automatically download a zip file that includes the third-party library.

![](https://files.seeedstudio.com/wiki/Alots/Alots18.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots19.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots20.png)

The name of wanted library is about the name of the project.

![](https://files.seeedstudio.com/wiki/Alots/Alots21.png)

- Step 9. Download the [code](https://github.com/0hotpotman0/AIoTs_GPS_state_tester) file from github and open it with Arduino IDE. Change the third-party library of your own and run the code.

![](https://files.seeedstudio.com/wiki/Alots/Alots22.png)

The result should be something like:

![](https://files.seeedstudio.com/wiki/Alots/Alots23.png)

!!!Note
If you want to know more about the Edge Impulse or there is something that still unclear, please go to [Wio Terminal Edge Impulse Getting Started](https://wiki.seeedstudio.com/Wio-Terminal-TinyML-EI-1/) to get more information.

## TheThingsNetwork Console Configuration Setup

In this project, The data will display on [TheThingsNetwork](https://www.thethingsnetwork.org/) platform, the instruction as below:

Step 1: Load into [TTN website](https://id.thethingsnetwork.org/oidc/interaction/3v59Li6ZEHe8cq1O0Ft1w) and create your account, then go to gateways start to set up your device.

![](https://files.seeedstudio.com/wiki/Alots/Alots24.png)

Step 2: Add the gateway device:

- Owner
- Gateway ID
- Gateway EUI
- Gateway Name

![](https://files.seeedstudio.com/wiki/Alots/Alots25.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots26.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots27.png)

Step 3: Add Application:

- Owner
- Application ID
- Application name

![](https://files.seeedstudio.com/wiki/Alots/Alots28.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots29.png)

Step 4：Add the LoRa node:

- Brand (Select Sense CAP)
- Model (Select LoRa-E5)
- Hardware Ver (Default)
- Firmware Ver (Default)
- Profile (The Region is according to your location)
- Frequency plan
- AppEUI
- DEVEUI
- AppKey
- End Device ID

![](https://files.seeedstudio.com/wiki/Alots/Alots30.png)

![](https://files.seeedstudio.com/wiki/Alots/Alots31.png)

Step 5: Add the code for decoding data:

![](https://files.seeedstudio.com/wiki/Alots/Alots32.png)

``` c++
function Decoder(bytes, port) {
 
  var decoded = {};
  if (port === 8) {
    decoded.Stop   = bytes[1];
    decoded.Turn   = bytes[3];
    decoded.Wave   = bytes[5];
  }
 
  return decoded;
}
```

Step 6: Check the result on TheThingsNetwork

Finally, go to the gateway, then click "Live data".

![](https://files.seeedstudio.com/wiki/Alots/Alots33.png)

Each LoRa device has a unique serial number. After you connect the LoRa device to the Wio terminal, there will display the DEVEUI, APPEUI, and APPKEY on the first page. It is requeired to fill the LoRa ID and gateway ID in the server.
![](https://files.seeedstudio.com/wiki/Alots/Alots34.png)
