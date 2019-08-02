---
name: Seeeduino Cortex-M0+
category: Arduino
bzurl: 
oldwikiname: 
prodimagename: 
surveyurl: 
sku: 102010248
---

![](https://github.com/SeeedDocument/Seeeduino-Cortex-M0-/raw/master/img/102010248-wiki.jpg)

The Seeeduino Cortex-M0+ features an Atmel SAMD21 MCU which is based on a 32-bit ARM® Cortex®-M0+ processor. With the help of this powerful core, SAMD21 is much more powerful than AVR and can achieve many functions and more complex calculations that cannot be implemented on AVR chips.


The [Seeeduino M0+](https://www.seeedstudio.com/tag/Seeeduino-M0%2B.html) is a brand new product line that is fully compatible with Arduino Zero and we currently have Seeeduino Cortex-M0+ and [Seeeduino Lotus Cortex-M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html) in this serial.


The Seeeduino Cortex-M0+ has the same header pinout as the Seeeduino Lotus Cortex-M0+, including 14 digital I/O (10 PWM output) and 6 analog I/O. On the meantime, it provides 3 on-board Grove connector: two I2C and 1 UART. If you want to use more grove port, you can use a [Base Shield V2](https://www.seeedstudio.com/Base-Shield-V2.html) to work with this board.


On top of that, Seeeduino Cortex-M0+ is the first Seeeduino development board with a USB type C interface. USB Type C is the future trend: the plugs are reversible, higher data transfer rate, and more scalable functions. We will introduce more development boards with Type C. You can use type C to supply power and transmit data or use the 7~15V DC jack to supply power for this board.



<p style=":center"><a href="https://www.seeedstudio.com/Seeeduino-Cortex-M0-p-4070.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>






## Feature

- ARM Cortex-M0+ CPU running at up to 48MHz
- 256KB in-system self-programmable Flash
- 32KB SRAM Memory
- Compatible with Arduino Zero
- 10-bit, 350ksps Digital-to-Analog Converter (DAC)
- One 12-bit, 350ksps Analog-to-Digital Converter (ADC) with up to 20 channels
- USB type C for power and data



## Specification

|Item|Value|
|------------|-----------|
|Microcontroller|SAM D21|
|Power Input|USB Type C|
|Operating Voltage|USB:5V|
|Digital I/O Pins|14|
|PWM Channels|10|
|Analog Input Channels|6|
|DC Current per I/O Pin|40 mA|
|IO Input Voltage|3.3V|
|SRAM|32 KB|
|Flash Memory|256KB|
|Maximum CPU frequency|48 MHz|



## Hardware Overview


![](https://github.com/SeeedDocument/Seeeduino-Cortex-M0-/raw/master/img/hardware.png) 


### UART


For the [Seeed M0 serial board](https://www.seeedstudio.com/tag/SEEEDUINO-M0%2B.html), there are 3 UART port as the following picture shown. When you code with Arduino IDE, you should use the corresponding port name, which is:

```
SerialUSB
```
for type C port;

```
Serial
```

for Grove UART port;

and 

```
Serial1
```
for UART pins in the header


![](https://github.com/SeeedDocument/Seeeduino-Cortex-M0-/raw/master/img/UART.jpg)




### Pinout
 
![](https://github.com/SeeedDocument/Seeeduino-Cortex-M0-/raw/master/img/102010248-pinout.jpg)



## Getting Started


### Hardware

**Materials required**

- Seeeduino Cortex-M0+ x1 
- Computer x1
- USB typc cable x1

!!!Tip
    Some USB cables can only supply power and cannot transfer data. If you don't have a usb cable or don't know if your usb cable can transmit data, you can check [seeed USB type C support USB 3.1 ](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html).





Connect the Seeeduino Cortex-M0+ to your computer using the USB cable. The blue power LED (labelled **PWR**) should light on.



### Software


- **Step 1. You need to Install an Arduino Software.**

[![](https://raw.githubusercontent.com/SeeedDocument/Seeeduino_Stalker_V3_1/master/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)


**Launch the Arduino application**

Double-click the Arduino application (arduino.exe) you have previously downloaded.

!!!Note
    If the Arduino Software loads in a different language, you can change it in the preferences dialog. See the [Arduino Software (IDE) page](https://www.arduino.cc/en/Guide/Environment#languages) for details.


- **Step 2. Open the Blink example**  
Open the LED blink example sketch: **File > Examples >01.Basics > Blink**.


<div align="center">
<figure>
  <img src="https://raw.githubusercontent.com/SeeedDocument/Seeeduino_GPRS/master/img/select_blink.png"/>
  <figcaption><i>Blink Path</i></figcaption>
</figure>
</div>



- **Step 3. Add the Seeed Board**  
Please follow the [Seeed Board Intallation Guide](http://wiki.seeedstudio.com/Seeed_Arduino_Boards/) and serch the key word **samd_zero** to add the **Seeeduino Cortex-M0+** into your Arduino IDE. 


<div align="center">
<figure>
  <img src="https://github.com/SeeedDocument/Seeeduino-Cortex-M0-/raw/master/img/Arduino-IDE-0.jpg"/>
  <figcaption><i>The key word is <b>samd_zero</b> </i></figcaption>
</figure>
</div>






- **Step 4. Select your board and port**  
You'll need to select the entry in the **Tools > Board** menu that corresponds to your Arduino.
Selecting the **Seeeduino Cortex-M0+**.

<div align="center">
<figure>
  <img src="https://github.com/SeeedDocument/Seeeduino-Cortex-M0-/raw/master/img/Arduino-IDE-2.jpg"/>
  <figcaption> <i>Choose the right board</i></figcaption>
</figure>
</div>


Select the serial device of the Arduino board from the Tools | Serial Port menu. This is likely to be COM3 or higher (**COM1** and **COM2** are usually reserved for hardware serial ports). To find out, you can disconnect your Arduino board and re-open the menu; the entry that disappears should be the Arduino board. Reconnect the board and select that serial port.

<div align="center">
<figure>
  <img src="https://github.com/SeeedDocument/Seeeduino-Cortex-M0-/raw/master/img/Arduino-IDE-1.jpg"/>
  <figcaption><i>Choose the right port</i></figcaption>
</figure>
</div>






- **Step 5.Upload the program**  
Now, simply click the "Upload" button in the environment. Wait a few seconds and if the upload is successful, the message "Done uploading." will appear in the status bar.

<div align="center">
<figure>
  <img src="https://raw.githubusercontent.com/SeeedDocument/Seeeduino_GPRS/master/img/upload_image.png"/>
  <figcaption><i>Upload the code</i></figcaption>
</figure>
</div>


A few seconds after the upload finishes, you should see the pin 13 (L) LED on the board start to blink. If it does, congratulations! You've gotten Arduino up-and-running. If you have problems, please see the troubleshooting suggestions.


## Resources

- **[ZIP]** [Seeeduino Cortex-M0+ v1.0 Eagle file](https://github.com/SeeedDocument/Seeeduino-Cortex-M0-/raw/master/res/Seeeduino%20Cortex-M0%2B%20v1.0.zip)
- **[PDF]** [SAMD21-Datasheet](https://github.com/SeeedDocument/Seeeduino-Cortex-M0-/raw/master/res/SAM-D21-Datasheet.pdf)



!!!Attention
        To use the UART of Seeeduino Cortex-M0+, you need to use ``



## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). 
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>`