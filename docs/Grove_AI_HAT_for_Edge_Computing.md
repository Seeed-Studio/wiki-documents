---
name: Grove AI HAT for Edge Computing
category: 
bzurl: 
oldwikiname: 
prodimagename: 
surveyurl: 
sku: 102991187
---

![](https://github.com/SeeedDocument/Grove-AI-HAT-for-Edge-Computing/raw/master/img/Grove%20AI%20HAT%20for-Edge-Computing-wiki-front.jpg)

The Grove AI HAT for Edge Computing(hereafter called 'Grove AI HAT') is built around Sipeed MAix M1 AI MODULE with Kendryte K210 processor inside. It's a low cost but powerful raspberry pi AI hat which assists raspberry pi run the AI at the edge, it also can work independently for edge computing applications.

The  MAix M1 is a powerful RISC-V 600MHz AI module features dual core 64-bit cpu, 230GMULps 16-bit KPU(Neural Network Processor), FPU(Float Point Unit) supports DP&SP, and APU(Audio Processor) supports 8 mics. 


In addition to the powerful Kendryte K210 processor, the Grove AI HAT for Edge Computing board provide a wealth of peripherals: I2C/UART/SPI/I2S/PWM/GPIO. The hat also offers LCD and camera interface, which support the Sipeed 2.4inch QVGA LCD and DVP camera, it will be helpful and convenience with your AI vision project. Just like the <a href="https://www.seeedstudio.com/Sipeed-MAix-BiT-for-RISC-V-AI-IoT-1-p-2873.html" target="_blank">Sipeed MAix BiT Kit for RISC-V AI+IoT</a>, we will release the kit with camera and LCD soon. For AI voice recognition applications, we add a high-quality microphone. And for robot or motion applications, there is a onboard 3-axis accelerometers sensor, which is more accurate and easy to use compared to external sensors.


We have released varies of SIPPED AI products, we believe it is time to make it Grove, and bring all our hundreds of grove senors and grove acvotors to your AI applications. So here comes the  Grove AI HAT for Edge Computing. We've added 6 grove connectors to this hat, including 1xDigital IO, 2xAnalog IO, 1xI2C, 1xUART and 1xPWM. On top of that, based on <a href="https://github.com/kendryte/kendryte-standalone-sdk" target="_blank">kendryte-standalone-sdk</a>, we added the full <a href="https://github.com/Seeed-Studio/ArduinoCore-k210" target="_blank">ArduinoCore-API</a> interface to support Arduino IDE, Linux, Windows, Mac OS X and other development environments. Which means you can run Grove Arduino Libraries and many <a href="https://www.arduinolibraries.info/" target="_blank">excellent Arduino libraries</a> on this board easily. 


We hope this board may help you with your edge computing, AI vision, voice recognition, and other AI projects, just enjoy it.


<iframe width="800" height="450" src="https://www.youtube.com/embed/5BF3ExL1HOQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


<p style=":center"><a href="https://www.seeedstudio.com/Grove-AI-HAT-for-Edge-Computing-p-4026.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>



## Features

- Processor: Sipeed MAIX-I module w/o WiFi ( 1st RISC-V 64 AI Module, K210 inside )
- 1x USB 2.0 Device, Type C(Power and Programming)
- 6x Grove Interface: include 1x Digital IO, 1x PWM, 1x I2C, 1x UART, 2x ADC
- 1x Power LED, 1x Boot LED
- 1x Reset Button, 1x Boot Button
- 1x LCD Interface
- 1x Camera Interface
- 1x Digital Mic
- 1x Accelerometers Sensor
- 1x JTAG & ISP UART Pin Header
- 2x 20 Pin Header with I2C, UART, SPI, I2S, PWM, GPIO



## Specification

|Parameter|Value|
|---|---|
|CPU|K210 RISC-V Dual Core 64bit, 400Mh(Max. 600Mhz) |
|FPU|IEEE754-2008 compliant high-performance pipelined FPU|
|KPU(Neural Network Processor )|• Supports the fixed-point model that the mainstream training framework trains according to specific restriction rules<br>• Support for 1x1 and 3x3 convolution kernels<br>• Support for any form of activation function<br>• The maximum supported neural network parameter size for real-time work is 5MiB to 5.9MiB|
|APU(Audio Processor)|• Up to 192kHz sample rate<br>• Up to 8 channels of audio input data, ie 4 stereo channels|
|Debugging Support|High-speed UART and JTAG interface for debugging|
|Supply Voltage|5V<br>can not exceed 5.5V|
|IO Voltage|3.3V|
|Operating Ambient Temperature| -20 – 70℃|
|ADC|Onboard 16-bit ADC|
|3-Axis Accelerometers|ADXL345 ±2 g/±4 g/±8 g/±16 g|
|Micrephone|Sensitivity:-26 dB;SNR:61 dB|
|GPIO|2x 20 Pin Header compatible with Raspberry Pi|
|Grove Interface|1x Digital IO, 1x PWM, 1x I2C, 1x UART, 2x ADC|
|USB Interface|USB 2.0 Device, Type C(Power and Programming)|
|LCD Interface|8bit MCU LCD 24P 0.5mm FPC connector|
|DVP Camera Interface|24P 0.5mm FPC connector|
|Button|1x Reset Button, 1x Boot Button (can be used as User Button)|
|LED|1x Power LED, 1x Boot LED(can be used as User LED)|


!!!Attention
    - All digital and analog IO interface levels are 3.3V. Please do not input more than 3.3V, otherwise the CPU may be damaged.  
    - The input power supply voltage is 5V and cannot exceed 5.5V. 





## Applications

- AI for Edge Computing
- Smart Building
- Medical equipment
- Automation & Process Control
- Robot


## Hardware Overview

<div align="center">
<figure>
  <img src="https://github.com/SeeedDocument/Grove-AI-HAT-for-Edge-Computing/raw/master/img/pinout1.jpg" alt="Grove AI HAT for Edge Computing hardware overview" title="hardware overview" />
  <figcaption><b>Figure 1</b>. <i>Grove AI HAT for Edge Computing hardware overview</i></figcaption>
</figure>
</div>



## Platforms Supported


| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |



## Getting Started


!!!ReadMe
    - When the board is used in standalone mode, please turn the toggle switch J4 to the ON terminal. Then the Pin2 and Pin4 of the 2x20Pin socket J6 will connect to 5V power.  
    - When the board is plugged into the Raspberry Pi, if only one board is powered, J4 needs to be dialed to the ON end; if the board and the Raspberry Pi use different USB power at the same time, J4 needs to be dialed to the OFF end to disconnect The two sets of 5V connections on the J6 avoid the two USB power supplies being directly connected.


### Play With Arduino

!!!Attention
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.


In theory, Grove AI HAT can be compatible with all Grove modules, but inevitably there will be compatibility issues. If you find a Grove module that is not compatible with the Grove AI HAT, please submit it to our [Github Page](https://github.com/Seeed-Studio/ArduinoCore-k210/issues). 


#### Arduino config


- **Step 1.** Configure the Arduino Board Manager URL.  
Click **File --> Preference**, copy the following URL into the **Additional Boards Manager URLs**

```
https://raw.githubusercontent.com/Seeed-Studio/Seeed_Platform/master/package_seeeduino_boards_index.json

``` 



<div align="center">
<figure>
  <img src="https://github.com/SeeedDocument/Grove-AI-HAT-for-Edge-Computing/raw/master/img/wiki-Arduino-1.jpg" alt="Grove AI HAT Arduino config" title="Grove AI HAT Arduino config" />
  <figcaption><b>Figure 2</b>. <i>Arduino Board URL config</i></figcaption>
</figure>
</div>

<div align="center">
<figure>
  <img src="https://github.com/SeeedDocument/Grove-AI-HAT-for-Edge-Computing/raw/master/img/wiki-Arduino-2.jpg" alt="Grove AI HAT Arduino config" title="Grove AI HAT Arduino config" />
  <figcaption><b>Figure 3</b>. <i>Arduino Board URL config</i></figcaption>
</figure>
</div>


- **Step 2.** Add the Grove AI HAT board into Arduino IDE.  
Click **Tools --> Board:"xxxx" -->Boards Manager**, tap **K210** into the search bar.  
Find the **Grove AI HAT for Edge Computing by Seeed Studio**, click Install button. 


<div align="center">
<figure>
  <img src="https://github.com/SeeedDocument/Grove-AI-HAT-for-Edge-Computing/raw/master/img/wiki-Arduino-3.jpg" alt="Grove AI HAT Arduino config" title="Grove AI HAT Arduino config" />
  <figcaption><b>Figure 4</b>. <i>Open Board Manager</i></figcaption>
</figure>
</div>

<div align="center">
<figure>
  <img src="https://github.com/SeeedDocument/Grove-AI-HAT-for-Edge-Computing/raw/master/img/wiki-Arduino-4.jpg" alt="Grove AI HAT Arduino config" title="Grove AI HAT Arduino config" />
  <figcaption><b>Figure 5</b>. <i>Install the Grove AI HAT Board</i></figcaption>
</figure>
</div>

When the installation is complete, you can find the **Seeed K210 Pi** board in the Arduino board list.


<div align="center">
<figure>
  <img src="https://github.com/SeeedDocument/Grove-AI-HAT-for-Edge-Computing/raw/master/img/wiki-Arduino-5.jpg" alt="Grove AI HAT Arduino config" title="Grove AI HAT Arduino config" />
  <figcaption><b>Figure 6</b>. <i>Select Seeed K210 Pi</i></figcaption>
</figure>
</div>

Also, to use the Grove AI HAT in the Arduino IDE, you need to select the **K-flash** Programmer at the Arduino Programmer list.

<div align="center">
<figure>
  <img src="https://github.com/SeeedDocument/Grove-AI-HAT-for-Edge-Computing/raw/master/img/wiki-Arduino-6.jpg" alt="Grove AI HAT Arduino config" title="Grove AI HAT Arduino config" />
  <figcaption><b>Figure 7</b>. <i>Select K-flash Programmer</i></figcaption>
</figure>
</div>


#### Digital Demo



**Materials required**

- [Grove AI HAT for Edge Computing](https://www.seeedstudio.com/Grove-AI-HAT-for-Edge-Computing-p-4026.html) x1
- [Grove - LED](https://www.seeedstudio.com/Grove-White-LED-p-1140.html) x1
- USB Type C cable x1


##### Hardware Connection

- 1 Connect the Grove - LED to the Grove **J2** port(D13 pin) of the Grove AI HAT
- 2 Connect the Grove AI HAT to the computer via USB Type C port.


<div align="center">
<figure>
  <img src="https://github.com/SeeedDocument/Grove-AI-HAT-for-Edge-Computing/raw/master/img/Grove-AI-HAT-for-Edge-Computing-connect.png" alt="Grove AI HAT Arduino demo" title="Grove AI HAT Arduino demo" />
  <figcaption><b>Figure 8</b>. <i>Hardware connection</i></figcaption>
</figure>
</div>


##### Software


- **Step 1.** Creat a new blank sketch in your Arduino IDE, copy the following code into that sketch.

```C++
void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(13, OUTPUT);
}


void loop() {
  digitalWrite(13, HIGH);   // 
  delay(1000);                       // wait for a second
  digitalWrite(13, LOW);    // 
  delay(1000);                       // wait for a second
}

```

- **Step 2.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](http://wiki.seeedstudio.com/Upload_Code/).

After done uploading, the Grove - LED will flash.


#### Analog Demo

**Materials required**


- [Grove AI HAT for Edge Computing](https://www.seeedstudio.com/Grove-AI-HAT-for-Edge-Computing-p-4026.html) x1
- [Grove - Round Force Sensor (FSR402)](https://www.seeedstudio.com/Grove-Round-Force-Sensor-FSR40-p-3110.html) x1
- USB Type C cable x1


##### Hardware Connection

- 1 Conect the Grove - Round Force Sensor (FSR402) to the Grove **J11** port(A0 pin) of the Grove AI HAT
- 2 Conect the Grove AI HAT to the computer via USB Type C port.

<div align="center">
<figure>
  <img src="https://github.com/SeeedDocument/Grove-AI-HAT-for-Edge-Computing/raw/master/img/Grove-AI-HAT-for-Edge-Computing-connect2(1).png" alt="Grove AI HAT Arduino demo" title="Grove AI HAT Arduino demo" />
  <figcaption><b>Figure 9</b>. <i>Hardware connection</i></figcaption>
</figure>
</div>



##### Software

- **Step 1.** Download the [ADS1115 library](https://github.com/baorepo/ADS1115/archive/master.zip)

- **Step 2.** Open the demo at **File --> Examples -->ADS-1115-master -->Example -->ADS1115_ReadVoltage**

<div align="center">
<figure>
  <img src="https://github.com/SeeedDocument/Grove-AI-HAT-for-Edge-Computing/raw/master/img/path-analog.jpg" alt="Grove AI HAT Arduino demo" title="Grove AI HAT Arduino demo" />
  <figcaption><b>Figure 10</b>. <i>ADC Demo Path</i></figcaption>
</figure>
</div>

- **Step 3.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](http://wiki.seeedstudio.com/Upload_Code/).

- **Step 4.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. Set the baud rate to **115200**.


Then, press the Grove -  Round Force Sensor, the A0 valnue will change. 


<div align="center">
<figure>
  <img src="https://github.com/SeeedDocument/Grove-AI-HAT-for-Edge-Computing/raw/master/img/result-analog.jpg" alt="Grove AI HAT Arduino demo" title="Grove AI HAT Arduino demo" />
  <figcaption><b>Figure 11</b>. <i>Output</i></figcaption>
</figure>
</div>




### kendryte k210 Standalone SDK

In order to use the kendryte k210 Standalone SDK with Grove AI HAT you should config the Arduino IDE as the previous chapter [Play with Arduino](http://wiki.seeedstudio.com/Grove_AI_HAT_for_Edge_Computing/#play-with-arduino).  

Now let's assume that you have downloaded the K210 development board in the Arduino IDE, selected **Seeed K210 Pi** board and **k-flash**.

First of all download the [kendryte-standalone-demo](https://github.com/kendryte/kendryte-standalone-demo) at github.

We will take the [face_detect](https://github.com/kendryte/kendryte-standalone-demo/tree/develop/face_detect) for instance.





#### Face Detect Demo


**Materials required**

- [Grove AI HAT for Edge Computing](https://www.seeedstudio.com/Grove-AI-HAT-for-Edge-Computing-p-4026.html) x1
- [OV2640 Camera](http://seeedstudio.com/OV2640-Fisheye-Camera-p-4048.html) x1
- [2.4 inch TFT LCD](http://seeedstudio.com/2-4-TFT-LCD-p-4049.html) x1
- USB Type C cable x1


##### Hardware Connection

- a. Connect the OV2640 camera into the Grove AI Hat 24 pin FPC camera connector
- b. Connect the 2.4 inch TFT LCD into the Grove AI Hat 24 pin FPC LCD connector 
- c. Connect the Grove AI HAT to the computer via USB Type C port.


<div align="center">
<figure>
  <img src="https://github.com/SeeedDocument/Grove-AI-HAT-for-Edge-Computing/raw/master/img/wiki-connect.jpg" alt="Grove AI HAT face detect demo-1" title="" />
  <figcaption><b>Figure 12</b>. <i>Hardware connection of face detect demo</i></figcaption>
</figure>
</div>



##### Software


###### Download the AI module

- Step 1. Enter the folder, **D:XXXXXX\kendryte-standalone-demo\face_detect\kfpkg**, **D:XXXXXX** is the path where you download the **kendryte-standalone-demo**. You will find four files as following:

<div align="center">
<figure>
  <img src="https://github.com/SeeedDocument/Grove-AI-HAT-for-Edge-Computing/raw/master/img/face_detect_demo-01.jpg" alt="Grove AI HAT face detect demo-1" title="" />
  <figcaption><b>Figure 13</b>. <i>This folder contains the AI module of face detect</i></figcaption>
</figure>
</div>


- Step 2. Open the Arduino IDE, click **File --> Preferences**, click on the part marked in the red box to open the Arduino package folder.

<div align="center">
<figure>
  <img src="https://github.com/SeeedDocument/Grove-AI-HAT-for-Edge-Computing/raw/master/img/face_detect_demo-02.jpg" alt="Grove AI HAT face detect demo-2" title="" />
  <figcaption><b>Figure 14</b>. <i>Open preferences windows</i></figcaption>
</figure>
</div>

<div align="center">
<figure>
  <img src="https://github.com/SeeedDocument/Grove-AI-HAT-for-Edge-Computing/raw/master/img/face_detect_demo-03.jpg" alt="Grove AI HAT face detect demo-3" title="" />
  <figcaption><b>Figure 15</b>. <i>Click on the part marked in the red box</i></figcaption>
</figure>
</div>

<div align="center">
<figure>
  <img src="https://github.com/SeeedDocument/Grove-AI-HAT-for-Edge-Computing/raw/master/img/face_detect_demo-04.jpg" alt="Grove AI HAT face detect demo-4" title="" />
  <figcaption><b>Figure 16</b>. <i>Click on the part marked in the red box</i></figcaption>
</figure>
</div>



- Step 3. Find the **Kflash_py.exe** in the path **XXXXX\packages\Seeeduino\tools\kflash\1.1.0**, XXXX is the folder you just open by click the links in the Arduino references Windows. For instance mine is `C:\Users\seeed\AppData\Local\Arduino15\packages\Seeeduino\tools\kflash\1.1.0`, copy the whole path of your own, we need to use it in the next step. 


<div align="center">
<figure>
  <img src="https://github.com/SeeedDocument/Grove-AI-HAT-for-Edge-Computing/raw/master/img/face_detect_demo-05.jpg" alt="Grove AI HAT face detect demo-5" title="" />
  <figcaption><b>Figure 17</b>. <i>Copy the path of Kflash_py.exe</i></figcaption>
</figure>
</div>


- Step 4. Back to the **kfpkg** folder, enter a command console, you can use any console you like. If you don't know how to open one, for win10 user, you can click **File -->Open Windows Power Shell -->Open Windows Power Shell**


<div align="center">
<figure>
  <img src="https://github.com/SeeedDocument/Grove-AI-HAT-for-Edge-Computing/raw/master/img/face_detect_demo-06.jpg" alt="Grove AI HAT face detect demo-6" title="" />
  <figcaption><b>Figure 18</b>. <i>Open power shell</i></figcaption>
</figure>
</div>


<div align="center">
<figure>
  <img src="https://github.com/SeeedDocument/Grove-AI-HAT-for-Edge-Computing/raw/master/img/face_detect_demo-07.jpg" alt="Grove AI HAT face detect demo-7" title="" />
  <figcaption><b>Figure 19</b>. <i>Open power shell</i></figcaption>
</figure>
</div>


- Step 5. Download the AI module into your Grove AI Hat  
Remember the path we copied in the **step3**? Mine is:

```C
C:\Users\seeed\AppData\Local\Arduino15\packages\Seeeduino\tools\kflash\1.1.0
``` 

For windows user, you should change all the `\` in the path into `/`, then we get:

```c
C:/Users/seeed/AppData/Local/Arduino15/packages/Seeeduino/tools/kflash/1.1.0
```

Replace the following command with you own Path

```C
C:/Users/seeed/AppData/Local/Arduino15/packages/Seeeduino/tools/kflash/1.1.0/kflash_py -n -p COM31 -b 2000000 -B dan face_detect.kfpkg
```


Check your COM number in the Computer Device Manager 

<div align="center">
<figure>
  <img src="https://github.com/SeeedDocument/Grove-AI-HAT-for-Edge-Computing/raw/master/img/face_detect_demo-08.jpg" alt="Grove AI HAT face detect demo-8" title="" />
  <figcaption><b>Figure 20</b>. <i>Check the COM number</i></figcaption>
</figure>
</div>


Replace the COM number with your own COM number, as you can see, mine is COM21, then enter the following command and run:


```C
C:/Users/seeed/AppData/Local/Arduino15/packages/Seeeduino/tools/kflash/1.1.0/kflash_py -n -p COM21 -b 2000000 -B dan face_detect.kfpkg
```

<div align="center">
<figure>
  <img src="https://github.com/SeeedDocument/Grove-AI-HAT-for-Edge-Computing/raw/master/img/face_detect_demo-09.jpg" alt="Grove AI HAT face detect demo-9" title="" />
  <figcaption><b>Figure 21</b>. <i>Replace the Path of kflash_py and the COM port number with your own path and COM port</i></figcaption>
</figure>
</div>



When the download is finish, you will see:


<div align="center">
<figure>
  <img src="https://github.com/SeeedDocument/Grove-AI-HAT-for-Edge-Computing/raw/master/img/face_detect_demo-10.jpg" alt="Grove AI HAT face detect demo-10" title="" />
  <figcaption><b>Figure 22</b>. <i>Download Success</i></figcaption>
</figure>
</div>


Now you will see the LCD screen light on with full white. Let's move to next step.


###### Download Demo code


- Step 1. Creat a new folder, creat a new blank `xxx.ino` file. `xxx` must be the same as the folder name. For instance both of mine is `Face_Detect_Demo`


!!!Attention
    Please make sure the .ino file is blank and the .ino name is the same as your folder.


<div align="center">
<figure>
  <img src="https://github.com/SeeedDocument/Grove-AI-HAT-for-Edge-Computing/raw/master/img/face_detect_demo-1.jpg" alt="Grove AI HAT face detect download-1" title="" />
  <figcaption><b>Figure 23</b>. <i>Great blank ino</i></figcaption>
</figure>
</div>


- Step 2. Copy all the files in the folder `XXXXX\kendryte-standalone-demo\face_detect` into the new folder you've just created.

<div align="center">
<figure>
  <img src="https://github.com/SeeedDocument/Grove-AI-HAT-for-Edge-Computing/raw/master/img/face_detect_demo-2.jpg" alt="Grove AI HAT face detect download-2" title="" />
  <figcaption><b>Figure 24</b>. <i>Copy file into the ino folder</i></figcaption>
</figure>
</div>


- Step 3. Open the .ino file with your Arduino IDE. The whole project will opened in the Arduino IDE.

<div align="center">
<figure>
  <img src="https://github.com/SeeedDocument/Grove-AI-HAT-for-Edge-Computing/raw/master/img/face_detect_demo-3.jpg" alt="Grove AI HAT face detect download-3" title="" />
  <figcaption><b>Figure 25</b>. <i>Open the .ino file with Arduino IDE</i></figcaption>
</figure>
</div>


- Step 4. Board Config. Before building, we need to config the camera and LED. In this demo, we use OV2604 and Grove AI Hat.  
The code for Grove AI Hat is `BOARD_LICHEEDAN`, so we need to config as below:


<div align="center">
<figure>
  <img src="https://github.com/SeeedDocument/Grove-AI-HAT-for-Edge-Computing/raw/master/img/face_detect_demo-4.jpg" alt="Grove AI HAT face detect download-4" title="" />
  <figcaption><b>Figure 26</b>. <i>Board Config</i></figcaption>
</figure>
</div>


- Step 5. Build the main.c, please make sure you have selected the right board and flasher.  
K-flash/Seeed k210 Pi/  


<div align="center">
<figure>
  <img src="https://github.com/SeeedDocument/Grove-AI-HAT-for-Edge-Computing/raw/master/img/face_detect_demo-6.jpg" alt="Grove AI HAT face detect download-6" title="" />
  <figcaption><b>Figure 27</b>. <i>Board Select</i></figcaption>
</figure>
</div>


<div align="center">
<figure>
  <img src="https://github.com/SeeedDocument/Grove-AI-HAT-for-Edge-Computing/raw/master/img/face_detect_demo-5.jpg" alt="Grove AI HAT face detect download-5" title="" />
  <figcaption><b>Figure 28</b>. <i>Build the main.c</i></figcaption>
</figure>
</div>



- Step 6. Download the face_detect_demo into your Grove AI Hat. When the downloading is success, you can see as below:

<div align="center">
<figure>
  <img src="https://github.com/SeeedDocument/Grove-AI-HAT-for-Edge-Computing/raw/master/img/face_detect_demo-7.jpg" alt="Grove AI HAT face detect download-7" title="" />
  <figcaption><b>Figure 29</b>. <i>Success</i></figcaption>
</figure>
</div>


Now you can use the camera to shoot faces, rotate the focus ring on the camera or adjust the distance from the camera to the face to make the face clear. A red box appears when it recognizes a face.




## Resources

- **[PDF]** [Grove AI HAT for Edge Computing Schematic file](https://github.com/SeeedDocument/Grove-AI-HAT-for-Edge-Computing/raw/master/res/Grove%20AI%20HAT%20for%20Edge%20Computing_v1.0_SCH_190426.pdf)
- **[PDF]** [Accelerometers_Sensor_datasheet Datasheet](https://github.com/SeeedDocument/Grove-AI-HAT-for-Edge-Computing/raw/master/res/Accelerometers_Sensor_datasheet.pdf)
- **[PDF]** [ADS1115 Datasheet](https://github.com/SeeedDocument/Grove-AI-HAT-for-Edge-Computing/raw/master/res/ADS1115.pdf)


## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/)<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>