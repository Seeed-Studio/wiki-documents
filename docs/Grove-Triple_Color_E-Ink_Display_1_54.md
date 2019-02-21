---
name: Grove - Triple Color E-Ink Display 1.54''
category:  Sensor
bzurl:  
oldwikiname:  
prodimagename:
surveyurl: 
sku: 104020130
---

![](https://github.com/SeeedDocument/Grove-Triple_Color_E-Ink_Display_1.54/raw/master/img/main.jpg)



The Grove - Triple Color E-Ink Display 1.54'' is a screen that can still be displayed after power off, we call it E-Paper(electronic paper) or E-Ink. The display is a TFT active matrix electrophoretic display, with interface and a 
reference system design.The 1.54 inch active area contains 152x152 pixels, and has 1-bit white/black and 1-bit red full display capabilities.


Due to the advantages like ultra low power consumption, wide viewing angle, clear display without electricity, it is an ideal choice for applications such as shelf label, industrial instrument, and so on.




<p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-Triple-Color-E-Ink-Display-1-54-p-2890.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Feature 

- High contrast
- High reflectance
- Ultra wide viewing angle
- Ultra low power consumption
- On-chip display RAM



##Specification

|Item|Value|
|---|---|
|Supply voltage|3.3V / 5V|
|Operating temperature| 0～40℃|
|Storage temperature| -25～60℃|
|Humidity range|40~70%RH|
|Display resolution|152(H) x 152(V) pixel|
|DPI|140|
|Interface|UART|
|Baud rate with Arduino|230400|


!!!Attention
        Frequent continuous refresh will cause irreparable damage to E-Ink. It is recommended that the refresh interval be greater than 180s.


## Pinout



<div align="center">
<figure>
<img src="https://github.com/SeeedDocument/Grove-Triple_Color_E-Ink_Display_1.54/raw/master/img/pinout.jpg" alt="Grove - Triple Color E-Ink Display 1.54'' pinout" title="Pinout" />
<figcaption><b>Figure 1</b>. <i>pinout</i></figcaption>
</figure>
</div>









## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |




## Getting Started


### Play With Arduino


#### Hardware

**Materials required**


| Seeeduino V4.2 | Base Shield | Grove - Triple Color E-Ink Display 1.54''|
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/base_shield.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Triple_Color_E-Ink_Display_1.54/raw/master/img/thumbnail.jpg)
|[Get ONE Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Triple-Color-E-Ink-Display-1-54-p-2890.html)|


!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy 
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.


- **Step 1.** Plug Grove - Base Shield into Seeeduino. 

- **Step 2.** Connect Seeeduino to PC via a USB cable.

- **Step 3.** Download the code, please refer to the software part.

- **Step 4.** Connect the Grove - Triple Color E-Ink Display 1.54'' to port **UART** of Grove-Base Shield.



<div align="center">
<figure>
<img src="https://github.com/SeeedDocument/Grove-Triple_Color_E-Ink_Display_1.54/raw/master/img/connect.jpg" alt="Grove - Triple Color E-Ink Display 1.54'' connect" title="connect" />
<figcaption><b>Figure 2</b>. <i>connect</i></figcaption>
</figure>
</div>




!!!Note
      This module communicate with the control board via the UART interface. If you use the Atmega328p board like Arduino UNO or Seeeduino V4.2, you need to unplug this module before download the code, beacause there is only one hardware serial port.
      If this module occupied the UART port, the download program cannot use the serial port. However if you use SAMD board, like seeeduino Lotus, Arduino Mega, there are two or more hardware serial port available. So there is no need to unplug the module before download.  




#### Software

!!!Attention
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.




- **Step 1.** Download the [Demo code](https://github.com/Seeed-Studio/Grove_Triple_Color_E-lnk_1.54/tree/master/examples/E_ink154_factoryCode) from Github.

- **Step 2.** Open the **E_ink154_factoryCode.ino** file with your Arduino IDE.

- **Step 3.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](http://wiki.seeedstudio.com/Upload_Code/).



!!!Success
		If everything goes well, you will see the display flickering, and the the display will show the seeed logo







## Resources

- **[Zip]** [Grove - Triple Color E-Ink Display 1.54'' Eagle Files](https://github.com/SeeedDocument/Grove-Triple_Color_E-Ink_Display_1.54/raw/master/res/Grove%20-%20Triple%20Color%20E-Ink%20Display%201.54.zip)

- **[PDF]** [E-paper 1.54inch Datasheet](https://github.com/SeeedDocument/Grove-Triple_Color_E-Ink_Display_1.54/raw/master/res/E-Ink%20152X152-Black%2CWhite%20and%20Red-1.54inch.pdf)




## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/) or drop mail to [techsupport@seeed.cc](techsupport@seeed.cc).

