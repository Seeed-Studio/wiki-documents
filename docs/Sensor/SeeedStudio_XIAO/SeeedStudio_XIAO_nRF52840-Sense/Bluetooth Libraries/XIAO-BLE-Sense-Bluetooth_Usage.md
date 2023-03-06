---
description: For Seeed nRF52 Boards Library
title: For Seeed nRF52 Boards Library
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-BLE-Sense-Bluetooth_Usage
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# Bluetooth Usage (Seeed nRF52 Boards Library)

**Seeed Studio XIAO nRF52840** and **Seeed Studio XIAO nRF52840 Sense** both support Bluetooth connectivity. This wiki will introduce the basics Bluetooth function used by "Seeed nRF52 Boards Library".

## Getting Started

### Hardware Required

- 1 x [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html) or [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- 1 x Smartphone with bluetooth connectivity
- 1 x USB Type-C cable

### Software Required

- [nRF Connect for Mobile (Android)](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp)
- [LightBlue App (Apple)](https://apps.apple.com/us/app/lightblue/id557428110)

### Installation

> Since the function we apply is packing in the "Seeed nRF52 Boards Library", we don't have to install another third-party library. You can skip the step.

- **Method One** (This method is available for both of the above code libraries.)

Since you have downloaded the zip Library, open your Arduino IDE, click on **Sketch > Include Library > Add .ZIP Library**. Choose the zip file you just downloaded，and if the library install correct, you will see **Library added to your libraries** in the notice window. Which means the library is installed successfully.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" /></div>


- **Method Two** (Only the ArduinoBLE library can be installed.)

The library manager was added starting with Arduino IDE versions 1.5 and greater (1.6.x). It is found in the 'Sketch' menu under 'Include Library', 'Manage Libraries...'

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/seeed_logo/Library.jpg" /></div>


When you open the Library Manager you will find a large list of libraries ready for one-click install. To find a library for your product, search for the product name or a keyword such as 'k type' or 'digitizer', and the library you want should show up. Click on the desired library, and the 'Install' button will appear. Click that button, and the library should install automatically. When installation finishes, close the Library Manager.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/SeeednRF.png" /></div>

## Application examples

We here will introduce you Bluetooth applications.

### Wireless Connect a PC Keyboard to the Mobile Phone

**Step 1.** Launch the Arduino application.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" /></div>


**Step 2.** Select your development board model and add it to the Arduino IDE. Here we are using "Seeed nRF52 Boards Library".

> For the board libraries installation, please refer to [this tutorial](https://wiki.seeedstudio.com/XIAO_BLE/#software-setup) to finish installation.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new.png" /></div>


**Step 3.** Nevigate to **"File -> Examples -> Adafruit Bluefruit nRF52 Libraries -> Peripheral -> blehid_keyboard"** and open the "blehid_keyboard" exapmle file.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new1.png" /></div>


**Step 4.** Click "Upload" and then open the "monitor" on the upper right corner of the Arduino IDE. The monitor will be shown as:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new3.png" /></div>


**Step 5.** Open the "nRF Connect for Mobile" App or "LightBlue" App on your mobile phone, meanwhile make sure your phone is connecting with Bluetooth. After a while, you will find a device named "XIAO nRF52840" listed.

- For **nRF Connect for Mobile APP** it should be like:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new5.jpg" /></div>


- For **LightBlue APP** it should be like:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new4.jpg" /></div>


**Step 6.** Simply click the device and the connection will be completed automatically. After that we can type characters into the monitor with PC keyboard, and then see what happens on your mobile phone.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new6.gif" /></div>


## What's more?

If you want to try out more examples you can navigate to `File > Examples > INCOMPATIBLE > ArduinoBLE` and check all the examples under **ArduinoBLE**


## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>

