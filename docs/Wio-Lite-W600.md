---
name: Wio Lite W600 - ATSAMD21 Cortex-M0 Wireless Development Board
category: Arduino
bzurl: 
oldwikiname: 
prodimagename: 
surveyurl: 
sku: 102991180
---

![](https://github.com/SeeedDocument/Wio-Lite-W600/raw/master/img/Wio-Lite-W600-wiki.jpg)


Wio Lite W600 is a cost-effective Arduino compatible board with the W600 WiFi module. The Wio Lite W600 features Atmel® | SMART™ SAM D21 ARM Cortex-M0+ based microcontroller and the W600 WiFi core is a 2.4GHz WiFi module features ARM Cortex-M3. Since the Wio Lite W600 uses SAM D21(the same chip used in Arduino Zero) as its Arduino Core, in theory, it is fully compatible with Arduino zero. 


It broken out the SAM D21 pins, the I/O level of this board is 3.3V. There are 6 analog pins and 14 digital pins, and also one UART, one I2C, one ICSP port is available. You can power this board with 5V USB Type C and 3.5V~4.2V Lipo battery.

As for the WiFi core, it's our old friend - W600 Module. We've already released the W600 Module and [Grove -  W600](https://www.seeedstudio.com/W600-Module-p-4020.html), Wio Lite W600 is a new member of  the [W600 family](https://www.seeedstudio.com/tag/W600-WIFI.html). W600 Module features ARM Cortex-M3 with 1MB on-chip flash and freeRTOS kernel. It is CE/FCC certificated and supports 802.11 b/g/n. We also provide a full Arduino W600 library including demos for Ap/Station/Ap-Station/Transparent Transmission/TCP, etc.


On top of that, we've released the [Grove Shield for Wio Lite](https://www.seeedstudio.com/Grove-Shield-for-Wio-Lite-p-4156.html) at the same time. With this shield, we bring over 200 Grove sensors, actuators and displays to Wio Lite series and the Feather community.  
 


<div align="center">
<figure>
  <a href="https://github.com/SeeedDocument/Grove-Shield-for-Wio-Lite/raw/master/img/Grove-Shield-for-Wio-Lite-V1.0-detail.jpg" target="_blank"><img src="https://github.com/SeeedDocument/Grove-Shield-for-Wio-Lite/raw/master/img/Grove-Shield-for-Wio-Lite-V1.0-detail.jpg" height="450" width="600" alt="Seeed relay quick selection diagram"  />
  </a>
</figure>
</div>




Goodbye, complex wiring with the breadboard and annoying welding with the soldering iron. 

Hello, [Grove](http://wiki.seeedstudio.com/Grove_System/)! 


<p style=":center"><a href="https://www.seeedstudio.com/Wio-Lite-W600-p-4155.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>






## Feature

- Arduino Zero Compatible/ Adafruit Feather Compatible
- 2.4GHz onboard WiFi module supports 802.11 b/g/n
- Support 200+ Grove modules
- Cost-effective



## Specification

|Item|Value|
|------------|-----------|
|Microcontroller|SAM D21 |
|Maximum CPU frequency|48 MHz|
|SRAM|32 KB|
|Flash Memory|256 KB|
|Power Input|USB Type C 5V<br>Lipo Battery 3.5 V ~ 4.2 V|
|Digital I/O Pins|14|
|Analog Input Channels|6|
|DC Current per I/O Pin|40 mA|
|IO Input Voltage|3.3 V|
|||
|WiFi Core|W600|
|CPU|32bit Embedded Cortex-M3|
|RAM|288 KB|
|Flash|1 MB|
|Wi‐Fi Mode|IEEE802.11b/g/n|
|Frequency Range|2.4~2.4835 GHz|
|Network Type|STA/AP/AP+STA/Wi‐Fi Direct|
|Network protocol|TCP/UDP/ARP/ICMP/DHCP/DNS/HTTP|
|Verification|WEP/WPA‐PSK/WPA2‐PSK|
|Encryption|WEP64/WEP128/TKIP/CCMP(AES)|




## Hardware Overview


![](https://github.com/SeeedDocument/Wio-Lite-W600/raw/master/img/hardware-overview.jpg) 
 



## Getting Started


### Hardware

**Materials required**

- Wio Lite W600 x1 
- Computer x1
- USB typc cable x1



!!!Tip
    Some USB cables can only supply power and cannot transfer data. If you don't have a usb cable or don't know if your usb cable can transmit data, you can check [seeed USB type C support USB 3.1 ](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html).





Connect the Wio Lite W600 to your computer using the USB cable. 



### Software


- **Step 1. You need to Install an Arduino Software.**

[![](https://raw.githubusercontent.com/SeeedDocument/Seeeduino_Stalker_V3_1/master/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)


**Launch the Arduino application**

Double-click the Arduino application (arduino.exe) you have previously downloaded.

!!!Note
    If the Arduino Software loads in a different language, you can change it in the preferences dialog. See the [Arduino Software (IDE) page](https://www.arduino.cc/en/Guide/Environment#languages) for details.



- **Step 2. Add the Wio Lite W600 Board to Your Arduino IDE**   

Please follow the [Seeed Board Intallation Guide](http://wiki.seeedstudio.com/Seeed_Arduino_Boards/) and serch the key word **seeeduino_samd_zero** to add the **Wio Lite W600** into your Arduino IDE. 


<div align="center">
<figure>
  <img src="https://github.com/SeeedDocument/Wio-Lite-W600/raw/master/img/IDE-1.jpg"/>
  <figcaption> <i>The key word is **seeeduino_samd_zero**</i> </figcaption>
</figure>
</div>



- **Step 3. Add the W600 Library into Your Arduino IDE**  

Download the [W600 Library](https://github.com/Seeed-Studio/Grove_w600) from Seeed Github. Then Refer to [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.


- **Step 4.** Restart the Arduino IDE. Open the AP-Station example, you can open it in the Arduino IDE by the path: **File --> Examples -->seeed_W600_wifi-->ap_sta_mode**.


![](https://github.com/SeeedDocument/Wio-Lite-W600/raw/master/img/IDE-3.jpg)


- **Step 5.** Modify the code with your own AP and Station. In the following picture, Wio Lite W600 work as a station to join the AP marked **A** and the the Wio Lite W600 will creat the **B AP** for other devieces. You should change both AP name and password.


![](https://github.com/SeeedDocument/Wio-Lite-W600/raw/master/img/IDE-4.jpg)




- **Step 6. Select your board and port**  
 
You'll need to select the entry in the **Tools > Board** menu that corresponds to your Arduino.
Selecting a **Seeeduino Wio Lite W600**.

<div align="center">
<figure>
  <img src="https://github.com/SeeedDocument/Wio-Lite-W600/raw/master/img/IDE-2.jpg"/>
  <figcaption><i>Choose the right board</i></figcaption>
</figure>
</div>


Select the serial device of the Arduino board from the Tools | Serial Port menu. This is likely to be COM3 or higher (**COM1** and **COM2** are usually reserved for hardware serial ports). To find out, you can disconnect your Arduino board and re-open the menu; the entry that disappears should be the Arduino board. Reconnect the board and select that serial port.








- **Step 7.Upload the code**  
Now, simply click the "Upload" button in the environment. Wait a few seconds and if the upload is successful, the message "Done uploading." will appear in the status bar.

<div align="center">
<figure>
  <img src="https://raw.githubusercontent.com/SeeedDocument/Seeeduino_GPRS/master/img/upload_image.png"/>
  <figcaption><i>Upload the code</i></figcaption>
</figure>
</div>


A few seconds after the upload finishes, then the Wio Lite W600 will access the AP you set and you can use your phone to accees the AP created by Wio Lite W600


## Resources

- **[ZIP]** [Wio Lite W600 Eagle file](https://github.com/SeeedDocument/Wio-Lite-W600/raw/master/res/Wio-Lite-W600.zip)
- **[PDF]** [W600-datasheet](https://github.com/SeeedDocument/W600_Module/blob/master/res/WM_W60X_SDK_User%20Manual_V1.0.0.pdf)



## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). 
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>