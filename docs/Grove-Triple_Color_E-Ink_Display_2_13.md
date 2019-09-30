---
name: Grove - Triple Color E-Ink Display 2.13''
category:  Sensor
bzurl:  
oldwikiname:  
prodimagename:
surveyurl: 
sku: 104020130
---

![](https://github.com/SeeedDocument/Grove-Triple_Color_E-Ink_Display_2.13/raw/master/img/main.jpg)



The Grove - Triple Color E-Ink Display 2.13'' is a screen that can still be displayed after power off, we call it E-Paper(electronic paper) or E-Ink. The display is a TFT active matrix electrophoretic display, with interface and a 
reference system design.The 2.13 inch active area contains 212x104 pixels, and has 1-bit white/black and 1-bit red full display capabilities.


Due to the advantages like ultra low power consumption, wide viewing angle, clear display without electricity, it is an ideal choice for applications such as shelf label, industrial instrument, and so on.




<p style=":center"><a href="https://www.seeedstudio.com/Grove-Triple-Color-E-Ink-Display-2-13-p-2889.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

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
|Display resolution|212(H) x 104(V) pixel|
|DPI|111|
|Interface|UART|
|Baud rate with Arduino|230400|


!!!Attention
        Frequent continuous refresh will cause irreparable damage to E-Ink. It is recommended that the refresh interval be greater than 180s.


## Pinout



<div align="center">
<figure>
<img src="https://github.com/SeeedDocument/Grove-Triple_Color_E-Ink_Display_2.13/raw/master/img/pinout.jpg" alt="Grove - Triple Color E-Ink Display 2.13'' pinout" title="Pinout" />
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


| Seeeduino V4.2 | Base Shield | Grove - Triple Color E-Ink Display 2.13''|
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/base_shield.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Triple_Color_E-Ink_Display_2.13/raw/master/img/thumbnail.jpg)
|[Get ONE Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Triple-Color-E-Ink-Display-2-13-p-2889.html)|


!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy 
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.


- **Step 1.** Plug Grove - Base Shield into Seeeduino. 

- **Step 2.** Connect Seeeduino to PC via a USB cable.

- **Step 3.** Download the code, please refer to the software part.

- **Step 4.** Connect the Grove - Triple Color E-Ink Display 2.13'' to port **UART** of Grove-Base Shield.



<div align="center">
<figure>
<img src="https://github.com/SeeedDocument/Grove-Triple_Color_E-Ink_Display_2.13/raw/master/img/connect.jpg" alt="Grove - Triple Color E-Ink Display 2.13'' connect" title="connect" />
<figcaption><b>Figure 2</b>. <i>connect</i></figcaption>
</figure>
</div>




!!!Note
      This module communicate with the control board via the UART interface. If you use the Atmega328p board like Arduino UNO or Seeeduino V4.2, you need to unplug this module before download the code, beacause there is only one hardware serial port.
      If this module occupied the UART port, the download program cannot use the serial port. However if you use SAMD board, like seeeduino Lotus, Arduino Mega, there are two or more hardware serial port available. So there is no need to unplug the module before download.  




#### Software

!!!Attention
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.




- **Step 1.** Download the [Demo code](https://github.com/Seeed-Studio/Grove_Triple_Color_E-lnk_2.13/tree/master/examples/Eink_factory_code_213) from Github.

- **Step 2.** Open the **Eink_factory_code_213.ino** file with your Arduino IDE.

- **Step 3.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](http://wiki.seeedstudio.com/Upload_Code/).



!!!Success
		If everything goes well, you will see the display flickering, and the the display will show the seeed logo




### DIY



<div align="center">
<figure>
<img src="https://github.com/SeeedDocument/Grove-Triple_Color_E-Ink_Display_2.13/raw/master/img/demo.jpg" alt="Grove - Triple Color E-Ink Display 2.13'' DIY" title="DIY demo" />
<figcaption><b>Figure 3</b>. <i>DIY demo</i></figcaption>
</figure>
</div>


It will be a lot fun to display your own image, now, let's show you how to DIY your own E-paper.

Before the start, please check the **Eink_factory_code_213.ino** again. You can find the two array easily.


```c++
const unsigned char IMAGE_BLACK[] PROGMEM = { /* 0X00,0X01,0XC8,0X00,0XC8,0X00, */
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
....
....
....
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,};
```

and


```c++
const unsigned char IMAGE_RED[] PROGMEM = { /* 0X00,0X01,0XC8,0X00,0XC8,0X00, */
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
....
....
....
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,
0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,0XFF,};
```

As you can see, the two array is called **const unsigned char IMAGE_BLACK[]** and **const unsigned char IMAGE_RED[]**, 
> **const unsigned char IMAGE_BLACK[]** is used for black image display  
> **const unsigned char IMAGE_RED[]** is used for red image display

Actually, to display your own image, you just need to replace those two image array. That is to say, you just need to get your own image array. Luckily, there is a tool **Image2LCD**, you can google it, it's not difficult to find. Suppose you have downloaded and installed this software. Next, we will show you how to use this software.


- **Step 1.** Prepare a picture of 104*212 pixels.

!!!Tip
        The ink screen only supports pictures with gray level of second-order, that is, black and white. If the gray level of the picture is too much, the whole color cannot be completely displayed.


- **Step 2.** Open the **Image2LCD** software and click the Open icon to open your picture. You will see the fallowing window.


<div align="center">
<figure>
<img src="https://github.com/SeeedDocument/Grove-Triple_Color_E-Ink_Display_2.13/raw/master/img/image2LCD.png" alt="Grove - Triple Color E-Ink Display 2.13'' DIY" title="DIY demo" />
<figcaption><b>Figure 4</b>. <i>Image2LCD configuration</i></figcaption>
</figure>
</div>


Please check the corresponding option as shown above.

>1. Output file type -> *.C  
>2. Scan mode -> Horizon Scan  
>3. BitsPixel -> monochrome  
>4. Max Width and Height -> 104 x 212  
>5. Reverse color:  Whether you need to check this option is based on the effect you need to display. For more detail please check the **Table 1** below.


- **Step 3.** After you configure the above options, you only need to click the **Save** button in the upper left corner to generate the corresponding image array. Then replace the the factoryCode array with your own image array.


<div align="center">
<figure>
<img src="https://github.com/SeeedDocument/Grove-Triple_Color_E-Ink_Display_2.13/raw/master/img/code.jpg" alt="Grove - Triple Color E-Ink Display 2.13'' DIY" title="" />
<figcaption><b>Figure 5</b>. <i>Just replace the part selected with the red box, which means you should keep the array name</i></figcaption>
</figure>
</div>


As we mentioned above, there are two arrays, you may be cofused: which one to replace? Well, it depends on what display effect do you want. Check the **Table 1**.


|<br>Display|<p style="background:black"><font color="red">Black background<br> Red image</font></p>|<p style="background:white"><font color="red">White background<br> Red image</font></p>|<p style="background:red"><font color="black">Red background<br> Black image</font></p>|<p style="background:red"><font color="white">Red background<br> White image</font></p> |
|---|----|----|----|----|
|Black Array|00|FF|00|FF|
|Red Array|Image(Reversed)|Image(Reversed)|Image|Image|



|<br>Display|<p style="background:red"><font color="red">Full screen <br>red</font></p>|<p style="background:white"><font color="black">White background<br> Black image</font></p>|<p style="background:red"><font color="red">Red background<br> red</font></p>|<p style="background:black"><font color="white">Black background<br> White image</font></p> |
|---|----|----|----|----|
|Black Array|Image(Reversed)|Image(Reversed)|Image|Image|
|Red Array|00|FF|00|FF|

<div align="center"><b>Table 1.</b><i>Array display effect</i></div>


!!!Note
        a.**00** means all elements in the array are 0x00, actually you need 2756 0x00   
        b.**FF** means all elements in the array are 0xFF, actually you need 2756 0xFF  
        c.**Image(Reversed)** means you need to check the **Reverse color** option in the **Step 2(Figure 4)**  
        b.**Image** means do not check the **Reverse color** option in the **Step 2(Figure 4)**

!!!Tip
        *Make a 2756 0x00 or 0xFF array?*  
        *Don't worry, we feel you pain, you can just click the 0x00.c and 0xFF.c file and copy into your code.*

[0x00.c](https://raw.githubusercontent.com/SeeedDocument/Grove-Triple_Color_E-Ink_Display_2.13/master/res/00.c)  
[0xff.c](https://raw.githubusercontent.com/SeeedDocument/Grove-Triple_Color_E-Ink_Display_2.13/master/res/ff.c)



We consider the original state is full screen white. When updating the image, the black array is updated first, then the red array is updated, and the image of the red array overwrites the black image.


This display is 104 x 212, so there are 104x212=22048 pixels, each pixel is controled by one bit. The element in the array is a two-digit hexadecimal number, like **0xF0**. Convert **0xF0** to a binary number we will get
**1111 0000**. A pixel with a value of 1 will display white, and a pixel with a value of 0 will display the color of the corresponding array (red or black). Which means each element in the image array controls 8 pixels. So you need an array of 22048/8=2756 elements.


**Step 4.** Download the code into your arduino, then you plug the display module into the arduino board. After blinking for a while, you will see the pattern you set.


## Schematic Online Viewer


<div class="altium-ecad-viewer" data-project-src="https://github.com/SeeedDocument/Grove-Triple_Color_E-Ink_Display_2.13/raw/master/res/Triple_Color_E-Ink_Display_2_13.zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>


## Resources

- **[Zip]** [Grove - Triple Color E-Ink Display 2.13'' Eagle Files](https://github.com/SeeedDocument/Grove-Triple_Color_E-Ink_Display_2.13/raw/master/res/Triple_Color_E-Ink_Display_2_13.zip)

- **[PDF]** [E-paper 2.13inch Datasheet](https://github.com/SeeedDocument/Grove-Triple_Color_E-Ink_Display_2.13/raw/master/res/E-paper_2.13_inch.pdf)




## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/) or drop mail to [techsupport@seeed.cc](techsupport@seeed.cc).

<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>