---
title: Wio Lite MG126
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-Lite-MG126/
slug: /Wio-Lite-MG126
last_update:
  date: 01/11/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/Wio-Lite-MG126-wiki.jpg)



Wio Lite MG126 is a cost-effective SAMD21 based development board with the on-board MG126 Bluetooth Module. SAM D21 is an ARM Cortex-M0+ based microcontroller and the MG126 is a 2.4GHz single-mode Bluetooth transceiver module. The same with Wio Lite W600, this board is also compatible with Arduino zero( Used the same Arduino Core SAM D21) and has the same compatible form factor with Adafruit Feather series.   
 
We break out the 3.3V I/O pins of SAM D21, SAM D21 chip has rich I / O resources, including 14 digital pins, 6 analog pins, 1 UART port, 1 I2C port, and 1 ICSP port. More and more boards in Seeed use type C interfaces to supply power and transmit data, so does the Wio Lite MG126. Meanwhile, there is a JST2.0 Li-Po battery port, you can use 3.5V or 4.2V Li-Po battery to power this board.  
 

Now, let's talk about the Bluetooth Core, the MG126. MG126 is a 2.4GHz BLE RF transceiver with software configurable registers, embedded packet handling engine. It can work with ultra-low power. The Bluetooth air data rate of MG126 is 1Mbps and MG126 can talks with Arduino core at the speed of 4Mbps via the SPI interface.


<p style={{}}><a href="https://www.seeedstudio.com/Wio-Lite-MG126-p-4189.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>



## Features


- Arduino Zero Compatible/ Adafruit Feather Compatible
- 2.4GHz ISM band operation with 2MHz channel spacing
- 1Mbps air data rate
- Ultra-low power






## Specification


|Parameter|Value|
|---|--------|
|**Main Controller**||
|Microcontroller|SAM D21|
|Digital I/O Pins|14|
|Analog Input Channels|6|
|DC Current per I/O Pin|40 mA|
|IO Input Voltage|3.3 V|
|SRAM|32 KB|
|Flash|256 KB|
|Maximum CPU Frequency|48 MHz|
|**Bluetooth**||
|Bluetooth Core|MG126|
|Frequency Band|2.4GHz ISM|
|Data Rate|1Mbps air data rate|
|Communication with MCU|SPI (Max. 4Mbps)|
|Transmitter|Programmable output power: -28 ~ +4 dBm without an external RF PA 20mA at 0dBm output power|
|Receiver|Integrated channel filters -85 dBm sensitivity Programmable LNA gain|
|Antenna|On-board PCB antenna|
|Max. Bluetooth Connect Distance|10 m|
|**Others**||
|Power Input Port|USB Type C JST2.0 Lipo Battery|
|Operating Voltage|USB 5V Battery 4.2 V|
|Recoverable fuse|Protection current 1A|
|Battery Charge Current|400 mA|


 


## Hardware Overview

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/Hardware-overview.jpg)


:::tip
    - The PCB antenna should not be shielded by metal when it is mounted, otherwise it will cause the attenuation of the Bluetooth signal;
    - The positive and negative terminals of the battery are indicated on the back of the module. It is strictly prohibited to reverse the positive and negative terminals of the battery.
:::



## Getting Started


Before the start, please download the **nRF Connect** app from Google/Apple Store. **nRF Connect** is compatible with standard Bluetooth protocol functions, all examples are tested based on this app. 



## Hardware

**Materials required**

- Wio Lite Mg126 x1
- Computer x1
- USB typc cable x1
- Jumper x1


:::tip
        Some USB cables can only supply power and cannot transfer data. If you don't have a usb cable or don't know if your usb cable can transmit data, you can check [Seeed USB type C support USB 3.1](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html).
:::

Connect the Wio Lite MG126 to your computer via the USB cable.



## Software


### Step 1. You need to Install an Arduino Software.

[![](https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png)](https://www.arduino.cc/en/Main/Software)


**Launch the Arduino application**

Double-click the Arduino application (arduino.exe) you have previously downloaded.

:::note
    If the Arduino Software loads in a different language, you can change it in the preferences dialog. See the [Arduino Software (IDE) page](https://www.arduino.cc/en/Guide/Environment#languages) for details.
:::

### Step 2. Add the Wio Lite MG126 Board into Arduino IDE

Open your Arudino IDE, click on **File > Preferences**, and copy the following url to Additional Boards Manager URLs

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/preference.png)


Click on **Toos > Board > Board Manager**. Search the board by name, just search the key word `Seeeduino_Wio_Lite_MG126` and install the corresponding board.

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/IDE-2.jpg)




### Step 3. Select your board and port
You'll need to select the entry in the **Tools > Board** menu that corresponds to your Arduino.
Selecting the **Wio Lite MG126**.


![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/IDE-4.jpg)


Select the serial device of the Arduino board from the Tools | Serial Port menu. This is likely to be COM3 or higher (**COM1** and **COM2** are usually reserved for hardware serial ports). To find out, you can disconnect your Arduino board and re-open the menu; the entry that disappears should be the Arduino board. Reconnect the board and select that serial port.


:::caution
        You may not find the MG126 examples in the **File > Examples** tab before you select the wio Lite MG126 board. When you select the board, the examples will appear here.
:::





### Step 4. Open the demo

Download the [MG126 Library](https://github.com/Seeed-Studio/Seeed_Arduino_MG126) from Seeed Github. Then Refer to [How to install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.
Click on **File > Examples >Seeeduino Wio Lite MG126 >analog_output**.

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/IDE-5.png)

You can find 7 demos in this folder. The `button`/`get_bat_vol` demos do not use the bluetooth library, and the rest do.

![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/IDE-6.jpg)




|Demo Name|Function|DeviceInfo|
|-----|-----|----|
|analog_output|The analog value on the development board is obtained via Bluetooth and displayed on the mobile app.|Wio_BLE_Analog|
|button|Press onboard user button and print in the serial monitor.||
|echo_ble|Bluetooth echo server, that is, the mobile phone receives the data sent by the development board.|Wio_Lite_BLE|
|get_bat_vol|Get the external battery voltage||
|rgb_led_matrix_control|Control the [Grove - RGB LED Matrix](https://www.seeedstudio.com/Grove-RGB-LED-Matrix-w-Driver.html) to display|Wio_Led_matrix|
|serial_transparent_transmission|The serial port data is transparently transmitted, that is, the data sent by the mobile phone will be sent from the serial port of the development board, and the data sent to the serial port of the development board will be sent to the mobile phone.|Wio_Lite_Serial|
|temp_humidity|get the information from [Grove - I2C High Accuracy Temp&Humi Sensor (SHT35)](https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temp-Humi-Sensor-SHT35.html),and sent it to your phone.|Wio_BLE_T&H|







### Step 5. Upload the program

Now, simply click the "Upload" button in the environment. Wait a few seconds and if the upload is successful, the message "Done uploading." will appear in the status bar.

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" />
  </figure>
</div>



When it is finished the information **Done Uploading** will Pop up in the lower left corner of Arduino IDE.



### Step 6. Use the phone to connect MG126**  

Open the [nRF Connect](#getting-started) app, click on the **SCANNER** and search for the name of the DeviceInfo in the page. Different demos have different DeviceInfo, the and the corresponding DeviceInfo of analog_output is `Wio_BLE_Analog`.

So, please choose the `Wio_BLE_Analog` in the bluetooth device list. Tap **CONNECT**, then click **Automation IO > Analog**, and the value of A0 pin will be displayed.



![](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/ana-0.jpg)




:::caution
        Due to the caching function of Bluetooth, every time you modify the feature value of Bluetooth (that is, download the example using different Bluetooth functions), you need to clear the cache of the app once, also you need to restart the phone.
:::


## Function interface

### WiFi function interface

- 1. Bluetooth package class

```
MG126_Ble  
```



- 2. Initialize the Bluetooth protocol stack and turn on Bluetooth

```
MG126_Ble .ble_init();
```



- 3. Reporting messages via Bluetooth

```
sconn_notifydata();
```


Only some common interfaces are listed here, and other interfaces can view example.



## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wio-Lite-MG126/res/Wio%20Lite%20MG126.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>




## Resouces



- **[ZIP]** [Wio lite MG126 schematic files](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/res/Wio%20Lite%20MG126.zip)

- **[PDF]** [DS-MG126-BLE-Datasheet](https://files.seeedstudio.com/wiki/Wio-Lite-MG126/res/DS-MG126-BLE.pdf)



## Tech Support
 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/). 
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>