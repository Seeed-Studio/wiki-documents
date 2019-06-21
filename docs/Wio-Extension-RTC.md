---
name: Wio-Extension-RTC
category: 
bzurl: 
oldwikiname: 
prodimagename: 
surveyurl: 
sku: 103100082

---

![](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/p/r/preview_4_2.png)


The Wio Extension - RTC is an extension board for Wio LTE, it can provide the Real-Time Clock function via the I2C port. This board is based on NXP PCF8523 chip, which can provide year, month, day, weekday, hours, minutes, and seconds information. 
  
This board is powered by Micro-USB port, communicate with the Wio LTE via I2C port, and we also provide a USB power output which can be turned off/on by a on-board switch, so that you can use the Wio Extension - RTC board to power the Wio LTE. When the power supply to Wio boards ( Like the following picture), the standby current of whole system is less than 1 uA.



<p style=":center"><a href="https://www.seeedstudio.com/Wio-Extension-RTC-p-4002.html" target="_blank"><img   src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>



## Feature  
 
- Extensibility
- Able to supply Wio boards with 3.3 voltage.





## Hardware Overview



<div align="center">
<figure>
  <p style=":center"><a href="https://raw.githubusercontent.com/SeeedDocument/Wio_Extension-RTC/master/img/pinout.jpg" target="_blank"><img src="https://raw.githubusercontent.com/SeeedDocument/Wio_Extension-RTC/master/img/pinout.jpg" /></a></p> 
  </div>


![](https://github.com/SeeedDocument/Wio_Extension-RTC/raw/master/img/rtc_diagram.png)


## Platforms Supported
    



| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |







## Getting Started


### Play With Arduino


**Materials required**

| Wio LTE Boards |   Wio-Extension-RTC  |  Grove - Buzzer |Grove - Red LED |
|--------------|-------------|-----------------|---------|
|![enter image description here](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/h/t/httpsstatics3.seeedstudio.comseeedfile2018-06bazaar837387_img_0005a.jpg)|![enter image description here](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/p/r/preview_4_2.png)|![enter image description here](https://github.com/SeeedDocument/Grove_Buzzer/raw/master/images/Grove%20Buzzer.jpg)|![enter image description here](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/h/t/httpsstatics3.seeedstudio.comseeedfile2018-09bazaar939479_1040300054.jpg)|
|[Get ONE Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Wio-Extension-RTC-p-4002.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Buzzer.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|    








>Since Wio Extension - RTC just controlling USB power supply set from I2C, you can use this board to manage the power supply almost for every MCU boards powering from USB.




!!!note
        **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy 
    
        **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.                   




                 




#### Hardware            






  
- **Step 1.** Connect the Wio-Extension-RTC to the **I2C** port of the Wio LTE Boards.

- **Step 2.**  Connect Wio LTE Boards.to PC via a USB cable.

- **Step 3.** Connect [Grove - Buzzer](https://www.seeedstudio.com/Grove-Buzzer-p-768.html) or [Grove - Red LED](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html) to D38 of Wio LTE.


<div align="center">
<figure>
  <p style=":center"><a href="https://github.com/SeeedDocument/Wio_Extension-RTC/raw/master/img/connection.png" target="_blank"><img src="https://github.com/SeeedDocument/Wio_Extension-RTC/raw/master/img/connection.png" /></a></p>  </div>



#### Software

!!!Attention
    If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.The driver of this board is rely on the head file of   `Seeed STM32F4 Board(JP mirror) by Seeed K.K.` , so whether you have installed your wio board with the  tutorial of  [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/), you need to do the following step.

**Step 1** Install library
Open your Arudino IDE, click on File > Preferences, and copy below url to Additional Boards Manager URLs.  
`http://www.seeed.co.jp/package_SeeedJP_index.json`  
![](https://github.com/Seeed-Studio/Wio_Extension_RTC/raw/master/Preferences.png)  

Click on Toos > Board > Board Manager, and enter `Wio` to the text box.

![](https://github.com/Seeed-Studio/Wio_Extension_RTC/raw/master/Boards_Manager.png)

Click `Seeed STM32F4 Board(JP mirror) by Seeed K.K.` then an Install button appear, click on it to finish the step, this process takes about 5 minutes to half an hour, which depend on the speed of your network.
Click on Tools > Manage Libraries, and enter `Wio` to the text box.

![](https://github.com/Seeed-Studio/Wio_Extension_RTC/raw/master/Library_Manager.png)
Click `Wio LTE for Arduino by Seeed K.K.` then an Install button appear, click on it to finish the step.

Unzip the [sample sketch](https://github.com/Seeed-Studio/Wio_Extension_RTC/raw/master/wiortc-sample.zip), and open `wiortc-sample.ino` with Arduino IDE.


**Step2** Download the code

1. Press and hold BOOT button at back side of the Wio LTE and plug the USB to PC.
2. We will see STM BOOTLARDER in device manager.
3. Select Tools→Boards→Wio_Tracker_LTE.
![Alt text](https://raw.githubusercontent.com/SeeedDocument/Wio_Extension-RTC/master/img/Snipaste_2019-04-10_15-15-20.jpg)

4. Select Sketch→Upload to upload the code to Wio_LTE.
5. Press RST button to enable the COM port.
**Tips**
>When you download most Arduino bords, you need to choose a right COM port, but for this board, you must keep the COM configuration to be blank. 

>![Alt text](https://raw.githubusercontent.com/SeeedDocument/Wio_Extension-RTC/master/img/port.jpg)

6. Use Serial monitor to print the serial message. 


```c++
#include <WioLTEforArduino.h>
#include "WioRTC.h"

////////////////////////////////////////////////////////////////////////////////
// Defines

#define BOOT_INTERVAL   (30)  // [sec.]

////////////////////////////////////////////////////////////////////////////////
// Global variables

WioLTE Wio;
WioRTC Rtc;

////////////////////////////////////////////////////////////////////////////////
// setup and loop

void setup()
{
  delay(200);

  SerialUSB.begin(115200);
  SerialUSB.println("");
  SerialUSB.println("--- START ---------------------------------------------------");

  ////////////////////////////////////////
  // Low-level initialize

  SerialUSB.println("### I/O Initialize.");
  Wio.Init();

  SerialUSB.println("### Power supply ON.");
  Wio.PowerSupplyGrove(true);
  delay(500);
  
  ////////////////////////////////////////
  // Device initialize
  
  SerialUSB.println("### Device initialize.");
  Wire.begin();
  Rtc.begin();

  ////////////////////////////////////////
  // Completed

  SerialUSB.println("### Completed.");
}

void loop()
{
  uint8_t val;
  Rtc.EepromRead(0, &val, sizeof(val));
  SerialUSB.print("EEPROM value is ");
  SerialUSB.println(val);
  
  val++;
  Rtc.EepromWrite(0, &val, sizeof(val));
  
  SerialUSB.println("Beep.");
  pinMode(WIO_D38, OUTPUT);
  digitalWrite(WIO_D38, HIGH);
  delay(200);
  digitalWrite(WIO_D38, LOW);
  
  SerialUSB.println("Shutdown.");
  Rtc.SetWakeupPeriod(BOOT_INTERVAL);
  Rtc.Shutdown();
  while (1) {}
}
```



## Resources

- **[ZIP]** [ Wio-Extension-RTC](https://github.com/SeeedDocument/Wio_Extension-RTC/blob/master/res/Wio%20Extension%20%E2%80%93%20RTC%20v1.0.zip)
- **[Sample]** [Wio-Extension-RTC Sample Code](https://github.com/Seeed-Studio/Wio_Extension_RTC/blob/master/wiortc-sample.zip)





## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/)<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>