---
name: Driver for Seeeduino
category: Tutorial
---

##   Install the driver

###   Installing drivers for the Seeeduino with window7

<dl><dd>

*Plug in your board and wait for Windows to begin its driver installation process. After a few moments, the process will fail.
*   Open the Device Manager by right clicking “My computer” and selecting control panel.

*   Look under Ports (COM &amp; LPT). You should see an open port named "USB Serial Port" Right click on the "USB Serial Port" and choose the "Update Driver Software" option.
</dd></dl>

![](https://github.com/SeeedDocument/Download_Arduino_and_install_Arduino_driver/raw/master/img/Driver1.jpg)

<dl><dd>

*   Next, choose the "Browse my computer for Driver software" option.
</dd></dl>

![](https://github.com/SeeedDocument/Download_Arduino_and_install_Arduino_driver/raw/master/img/Driver2.jpg)

<dl><dd>

*   Finally, select the driver file named "FTDI USB Drivers", located in the "Drivers" folder of the Arduino Software download.
</dd></dl>

![](https://github.com/SeeedDocument/Download_Arduino_and_install_Arduino_driver/raw/master/img/Driver3.jpg)

<font color="red">**Note:** the FTDI USB Drivers are from Arduino. But when you install drivers for other Controllers, such as Xadow Main Board, Seeeduino Clio, Seeeduino Lite,

you need to download corresponding driver file and save it. And select the driver file you have downloaded.</font>

<dl><dd>

*   The below dialog boxes automatically appears if you have installed driver successfully.
</dd></dl>

![](https://github.com/SeeedDocument/Download_Arduino_and_install_Arduino_driver/raw/master/img/Driver4.jpg)

<dl><dd>

*   You can check that the drivers have been installed by opening the Windows Device Manager. Look for a "USB Serial Port" in the Ports section.
</dd></dl>

![](https://github.com/SeeedDocument/Download_Arduino_and_install_Arduino_driver/raw/master/img/Driver5.jpg)

<dl><dd>

*   You can also see the serial port in Arduino environment.
</dd></dl>

![](https://github.com/SeeedDocument/Download_Arduino_and_install_Arduino_driver/raw/master/img/Driver6.jpg)

###   Installing drivers for the Seeeduino with window8

You should save these files which you are editing before installing driver with window8，because there will several power off during operating.

<dl><dd>

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
</dd></dl>

###   Installing drivers for the Seeeduino with Mac OS

<dl><dd>

*   Enter page: [http://www.ftdichip.com](http://www.ftdichip.com).
</dd></dl>
<dl><dd>

*   Download Driver for the Mac OS X version, named 2.2.18 (32bit)
</dd></dl>

![](https://github.com/SeeedDocument/Download_Arduino_and_install_Arduino_driver/raw/master/img/Driver7.png)

<dl><dd>

*   Open the driver file which you just download, and double click FTDIUSBSerialDriver_10_4_10_5_10_6_10_7.mpkg
</dd></dl>

![](https://github.com/SeeedDocument/Download_Arduino_and_install_Arduino_driver/raw/master/img/Driver8.png)

<dl><dd>

*   After double click, you will see an installer window.
</dd></dl>

![](https://github.com/SeeedDocument/Download_Arduino_and_install_Arduino_driver/raw/master/img/Driver9.png)

<dl><dd>

*   Click “Continue”.
</dd></dl>

![](https://github.com/SeeedDocument/Download_Arduino_and_install_Arduino_driver/raw/master/img/Driver10.png)

<dl><dd>

*   You can see the below dialog boxes if you have installed driver successfully.
</dd></dl>

![](https://github.com/SeeedDocument/Download_Arduino_and_install_Arduino_driver/raw/master/img/Driver11.png)

<dl><dd>

*   Test it with Seeeduino
</dd></dl>

![](https://github.com/SeeedDocument/Download_Arduino_and_install_Arduino_driver/raw/master/img/Driver12.png)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>