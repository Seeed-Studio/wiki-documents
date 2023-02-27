---
title: WT OTA for Blynk
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Blynk-wireless-OTA-functionality-to-Wio-Terminal/
slug: /Blynk-wireless-OTA-functionality-to-Wio-Terminal
last_update:
  date: 01/11/2022
  author: gunengyu
---
# Use Blynk wireless OTA functionality to Wio Terminal

In this wiki we will describe how to use Blynk wireless OTA functionality to Wio Terminal.

- **What is Blynk**

[**Blynk**](https://blynk.io/) is a new platform that allows you to quickly build interfaces for controlling and monitoring your hardware projects from your iOS and Android device. After downloading the Blynk app, you can create a project dashboard and arrange buttons, sliders, graphs, and other widgets onto the screen.

## Hardware Required

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- Mobile Phone
- Download Blynk App from App Store
- WiFi

## Preparatory work

Go to [**Blynk to register and log in**](https://blynk.cloud/dashboard/login), go to the Templates screen, and create a new template.

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/1.png)

Then edit the name and select the device and connection mode, in this case "Seeed Wio Terminal" and "WiFi".
![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/60.jpg)

Make a note of BLYNK_TEMPLATE_ID and BLYNK_DEVICE_NAME.
In the example, they are:

```C++
#define BLYNK_TEMPLATE_ID "TMPLCc16MxA1"
#define BLYNK_DEVICE_NAME "WioTerminal"
```

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/3.png)

Then click the save button in the upper right corner.

## Set up the Arduino IDE and tune the code

Next, download and open the sample code in the Ardunio IDE.

[**Edgent_Wio_Terminal_0-2.zip**](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/Edgent_Wio_Terminal_0-2.zip)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/4.jpg)

Select the Wio Terminal device from the development board options ( [**see the Wio Terminal wiki page**](https://blynk.cloud/dashboard/login) for how to add Wio Terminal in the Ardunio IDE).

Add [**blynk-library**](https://github.com/blynkkk/blynk-library)

Search for and add the following library files in the Ardunio IDE library manager:

- Seeed Arduino rpcunified
- Seeed Arduino rpcWiFi
- Seeed Arduino SFUD
- Seeed Arduino FS
- Seeed Arduino mbedtls
- ArduinoOTA
- ArduinoHttpClient

In lines 16 and 17 of the code, fill in the ID and NAME that the system just generated:

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/5.jpg)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/6.jpg)

Then compile and upload the code to Wio Terminal (if a library file is missing during compilation, search the library manager and download it)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/7.png)

After the program is successfully uploaded, open the serial port monitor and set the baud rate to 115200. Wait for 5-10s. The serial port displays the following information :(if the serial port monitor does not respond, please try to reconnect the data cable and reopen the serial port monitor.)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/8.jpg)

## Mobile APP Settings

Download Blynk IoT APP：

Android: <https://play.google.com/store/apps/details?id=cloud.blynk&hl=en_IN&gl=US>

IOS: <https://apps.apple.com/us/app/blynk-iot/id1559317868>

Log in to the main screen

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/xinshouji111.png)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/xinshouji222.png)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/xinshouji333.png)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/xinshouji4454.png)

After the APP configuration is successful, the serial port monitor will prompt the network connection status. When 'Ready' is displayed, the WiFi connection is successful.

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/21.jpg)

Now it's time to try the OTA feature.

## OTA: Update BLYNK_FIRMWARE_VERSION

You can write a personal program in "edgent_wio_terminal_0-2" with "void setup()" and "void loop()". In this example, we will change the version information of the program directly for the sake of demonstration. If the program is successfully uploaded, the version information will change.
We changed BLYNK_FIRMWARE_VERSION from "0.2.0" to "0.2.11"

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/22.jpg)

Then click "Export compiled Binary" and wait for the build to complete.

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/23.jpg)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/24.png)

Then open the folder and go to the BIN file.

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/25.jpg)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/26.jpg)

Open Blynk Air and select "New Shipping" in the upper right corner.Click down on this screen to find the "Firmware" option.

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/27.jpg)

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/28.jpg)

Select the bin. file you just generated here, and you will see that the software version is changed to "0.2.11" which we just set. Then click the "Start Shipping" button in the lower right corner to start the wireless upload program.

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/29.jpg)

You can see real-time uploads on the web page or on the serial monitor.

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/30.jpg)

Wait about 2 minutes if your serial port monitor does not have output then try to restart the device and turn on the serial port monitor again and you will see the upload in real time.

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/31.jpg)

Restart the device and you can see that the software version here has changed to "0.2.11" which we just changed.

![](https://files.seeedstudio.com/wiki/Blynk-wireless-OTA-functionality-to-Wio-Termina/32.jpg)

## Tech Support

 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/).
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
