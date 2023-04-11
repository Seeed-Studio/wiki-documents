---
description: Grove_Inventor_Kit_for_microbit
title: Grove Inventor Kit for microbit
tags:
  - micro_bit
keywords:
  - micro_bit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove_Inventor_Kit_for_microbit
last_update:
  date: 01/05/2022 
  author: Eico 

no_comments: false # for Disqus

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/zoro_im_kitbox.jpg" alt="pir" width={600} height="auto" /></p>


The BBC micro:bit is a pocket-sized computer that can easily realize your creativity without much electrical and coding knowledge. There are numerous possibility of creation you can dig out by micro:bit, from robots to musical instruments. However if you want to create more things, just 1 micro:bit is barely not enough, That’s why we introduce the Grove Inventor Kit for micro:bit to you.

The Grove Inventor Kit for Micro:bit brings endless possibilities to your micro:bit. The core board in this kit is the Grove shield for micro:bit, with which you can use plenty of Grove modules including sensors, display, actuator to interact with micro:bit. If you never used and have no idea what grove is, here is the introduction of Grove. All you need to know is that with Grove, there is no need of soldering or jump wires any more. Your prototyping will be easier and much more convenient.

We have already prepared 8 grove modules to let you get started with micro:bit. With these grove modules, you can measure distance and display it, use gesture to play different music, or make a smart guard for your desk or room. We have prepared all the necessary libraries(packages) for free download. If you are a beginner to micro:bit, don’t worry because we have also prepare 12 different project which can teach you step by step. If you are an advanced user, this kit will help you more creative project than others.


:::note

The output voltage of micro:bit is around 3.0V, use microbit or AA battery to power the circuit may cause malfunction of Grove modules which requires high input voltage and drive current(e.g Grove - Ultrasonic Ranger). In order to make these kind of Grove function well, please use the micro-USB port on Grove shield for microbit to power the circuit.
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Inventor-Kit-for-micro%3Abit-p-2891.html"><strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

## Features

  - Cool extension shield with rich and convenient peripherals;
  - 10 well selected Grove modules for working with micro:bit;
  - 12 awesome projects to let you get started quickly;
  - Well documented instruction.


##  Hardware Overview

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/first_im.jpg" alt="pir" width={600} height="auto" /></p>

###  **Parts list**

<table align="center">
  <tbody>
  <tr>
    <td><h3>Part name</h3></td>
    <td><h3>Quantity</h3></td>
  </tr>
  <tr>
    <td><h4>Grove Shield for micro:bit</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - Rotary Angle Sensor(P)</h4></td>
    <td><h4>1</h4></td>
  </tr>  
  <tr>
    <td><h4>Grove - Speaker </h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - Ultrasonic Ranger</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - Light Sensor v1.2</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - WS2812 Waterproof LED Strip - 30 LEDs 1 meter</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - Gesture</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - 4-Digit Display</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - Red LED</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Micro USB Cable - 48cm</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>12 Projects Manual</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Alligator Cable</h4></td>
    <td><h4>10</h4></td>
  </tr>
  <tr>
    <td><h4>Grove Cable</h4></td>
    <td><h4>7</h4></td>
  </tr>
  </tbody></table>

##  Getting Started

###  Fundamentals with  Micro:bit

You need to know some essential knowledge if it is the first time that you get involved with Micro:bit. You can click [ **here** ](https://microbit.org/code/) to see more about Micro:bit.

Micro:bit offers two type of editor - JavaScript Block Editor and Python Editor. JavaScript Block Editor support graphical programming, it's easy to learn. So this Tutorial is based on JavaScript Block Editor.

Here are two simple steps before you enjoy our kit, after that we can start program.

####  Step1.Open the Editor

Please click to open the **[JavaScript Block Editor](https://makecode.microbit.org/)** , and you will see a graphical programming web.


####  Step2.Add Grove Package
  - Click the gear in the top right corner > select **Add Package**

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/0-1.png" alt="pir" width={800} height="auto" /></p>

  - Enter project URL: **github.com/seeed-studio/pxt-grove**

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/0-2.png" alt="pir" width={800} height="auto" /></p>

  - Now you can find **Grove**  in the toolbar.

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/0-3.png" alt="pir" width={800} height="auto" /></p>

### Demo 1. Gesture Recognition

The gesture sensor can recognize 9 different gestures, in this demo, you will learn how to display the recognized
gesture name on micro:bit.


#### Part list



<table align="center">
  <tbody>
  <tr>
    <td><h3>Part name</h3></td>
    <td><h4>Number</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - Gesture</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove Shield for micro:bit</h4></td>
    <td><h4>1</h4></td>
  </tr>  
  <tr>
    <td><h4>micro:bit</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove Universal 4 pin cable</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Micro-USB cable</h4></td>
    <td><h4>1</h4></td>
  </tr>
  
  </tbody></table>

#### Connection

  - Plug the **micro:bit** into **Grove Shield for micro:bit**.
  - Connect the Grove-Gesture to **I2C** Port of micro:bit via a Grove Universal 4 pin cable.
  - Connect micro:bit to PC via a Micro-USB cable.

:::warning

please make sure the LED Array is faced up when you plug the micro:bit, or you may damage the board.

:::

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/Gesture%20Recognition.png" alt="pir" width={600} height="auto" /></p>


#### Software
  - Step1:

  Add On Gesture Block
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-1.png" alt="pir" width={600} height="auto" /></p>

  - Step2:

  Select Right, so that the sensor can recognize when you move your hand from right to the left.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-2.png" alt="pir" width={600} height="auto" /></p>

  - Step3:

  Add Basic block **show string** and embed it into the Gesture block.Then double click "Hello!", change it to "Right".
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-3.png" alt="pir" width={600} height="auto" /></p>

  - Step4:

  Add "Left" and "Clockwise" the same way, and embed **show icon** into "Clockwise".
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-4.png" alt="pir" width={600} height="auto" /></p>

  - Step5:

  When you finish all this above, rename the project "gesture". Then you can download the project to your board. Click **Download** in the Bottom left corner, download the file **microbit-gesture.hex** into the flash of MICROBIT.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/1-5.png" alt="pir" width={600} height="auto" /></p>

  Now enjoy your project.

:::tip
  You can find the blocks by color. For example, if you don't where **show icon** is ,since it's blue and the Module **Basic** is blue,you can find it here. Simple and effective, isn't it?
:::

### Demo 2. Ultrasonic Meter

In this demo, you will learn how to use the ultrasonic sensor to measure distance and show the value on a
display.

#### Part list

<table align="center">
  <tbody>
  <tr>
    <td><h3>Part name</h3></td>
    <td><h4>Number</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - Ultrasonic Ranger</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove - 4-Digit Display</h4></td>
    <td><h4>1</h4></td>
  </tr>  
  <tr>
    <td><h4>Grove Shield for micro:bit</h4></td>
    <td><h4>1</h4></td>
  </tr>  
  <tr>
    <td><h4>micro:bit</h4></td>
    <td><h4>1</h4></td>
  </tr>
  <tr>
    <td><h4>Grove Universal 4 pin cable</h4></td>
    <td><h4>2</h4></td>
  </tr>
  <tr>
    <td><h4>Micro-USB cable</h4></td>
    <td><h4>1</h4></td>
  </tr>
  </tbody></table>

#### Connection

  - Plug the **micro:bit** into **Grove Shield for micro:bit**.

:::warning 
please make sure the LED Array is faced up when you plug the micro:bit, or you may damage the board.
:::

  - Connect the Grove-Ultrasonic Ranger to **P0/P14** Port of micro:bit via a Grove Universal 4 pin cable.
  - Connect the Grove-4-Digit Display to **P1/P15** Port of micro:bit via a Grove Universal 4 pin cable.
  - Connect micro:bit to PC via a Micro-USB cable.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/Ultrasonic_Meter.png" alt="pir" width={600} height="auto" /></p>

#### software

  - Step1:

  Add basic block **on start**, then add variable blocks **set item to 0**, rename ‘items’ to ‘Display’. If you have successfully added the Grove package, replace “0”with Grove block 4-Digit Display at P1 and P15.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/2-1.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/2-2.png" alt="pir" width={600} height="auto" /></p>

  - Step2:

  Add basic block forever, then add Grove block item show number 0, rename ‘item’ to ‘Display’, replace ‘0’ with Grove block Ultrasonic Sensor (in cm) at P0.

  - Step3:

  Add basic block pause (ms) (100).
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/img/2-3.png" alt="pir" width={600} height="auto" /></p>

  - Step4:

  Rename the project "Ultrasonic Meter", download and enjoy.


## Schematic Online Viewer


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Bazzar_Attachment/103030195/202001587_Grove%20Shield%20for%20BBC%20microbit%20V1.2_eagle%20file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Resources

  [**Grove Inventor Kit for micro:bit User Manual**](https://files.seeedstudio.com/wiki/Grove_kit_for_microbit/res/Guide_Grove_kit_for_microbit.pdf)

  [**micro:bit Getting Started Videos**](http://microbit.org/start/)

  [**About micro:bit**](http://microbit.org/about/)

  [**micro:bit Hardware**](http://microbit.org/guide/hardware/)

  [**micro:bit Apps**](http://microbit.org/code/)

  [**Grove Shield for microbit_eagle file.zip**](https://files.seeedstudio.com/wiki/Bazzar_Attachment/103030195/202001587_Grove%20Shield%20for%20BBC%20microbit%20V1.2_eagle%20file.zip)

## Tech Support
Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
