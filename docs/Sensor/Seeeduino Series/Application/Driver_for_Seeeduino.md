---
description: Driver for Seeeduino
title: Driver for Seeeduino
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Driver_for_Seeeduino
last_update:
  date: 1/31/2023
  author: shuxu hu
---

##   Install the driver

###   Installing drivers for the Seeeduino with window7



*Plug in your board and wait for Windows to begin its driver installation process. After a few moments, the process will fail.
*   Open the Device Manager by right clicking “My computer” and selecting control panel.

*   Look under Ports (COM &amp; LPT). You should see an open port named "USB Serial Port" Right click on the "USB Serial Port" and choose the "Update Driver Software" option.


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver1.jpg)



*   Next, choose the "Browse my computer for Driver software" option.


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver2.jpg)



*   Finally, select the driver file named "FTDI USB Drivers", located in the "Drivers" folder of the Arduino Software download.


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver3.jpg)

**Note:** the FTDI USB Drivers are from Arduino. But when you install drivers for other Controllers, such as Xadow Main Board, Seeeduino Clio, Seeeduino Lite,

you need to download corresponding driver file and save it. And select the driver file you have downloaded.



*   The below dialog boxes automatically appears if you have installed driver successfully.


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver4.jpg)



*   You can check that the drivers have been installed by opening the Windows Device Manager. Look for a "USB Serial Port" in the Ports section.


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver5.jpg)



*   You can also see the serial port in Arduino environment.


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver6.jpg)

###   Installing drivers for the Seeeduino with window8

You should save these files which you are editing before installing driver with window8，because there will several power off during operating.



*   Press “Windows Key” +”R”

*   Enter shutdown.exe /r /o /f /t 00

*   Click the "OK" button.

*   System will restart to a "Choose an option" screen

*   Select "Troubleshoot" from "Choose an option" screen

*   Select "Advanced options" from "Troubleshoot" screen

*   Select "Windows Startup Settings" from "Advanced options" screen

*   Click "Restart" button

*   System will restart to "Advanced Boot Options" screen

*   Select "Disable Driver Signature Enforcement"

*   Once the system starts, you can install the Arduino drivers as same as Windows


###   Installing drivers for the Seeeduino with Mac OS



*   Enter page: [https://www.ftdichip.com](https://www.ftdichip.com).


*   Download Driver for the Mac OS X version, named 2.2.18 (32bit)


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver7.png)



*   Open the driver file which you just download, and double click FTDIUSBSerialDriver_10_4_10_5_10_6_10_7.mpkg


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver8.png)



*   After double click, you will see an installer window.


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver9.png)



*   Click “Continue”.


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver10.png)



*   You can see the below dialog boxes if you have installed driver successfully.


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver11.png)



*   Test it with Seeeduino


![enter image description here](https://files.seeedstudio.com/wiki/Download_Arduino_and_install_Arduino_driver/img/Driver12.png)

## Tech Support
<div>
  Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
