---
description: Getting Started with Seeeduino
title: Getting Started with Seeeduino
keywords:
- Seeeduino_Series
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Getting_Started_with_Seeeduino
last_update:
  date: 1/12/2022
  author: hushuxu
---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Getting_Started_with_Seeeduino/img/Hello_world.jpg" alt="pir" width={600} height="auto" /></p>

### **0. Hello world**

Generally, teacher will teach us to write a simple Hello World example when start to learn a programming language. This is only a basic introductory，but it is a very important process. Although you are not familiar about Arduino, do not worry. You can learn the hello world about Arduino: light up a LED.
Now we take Seeeduino as example to learn how to light up a LED which is controlled by Digital 13 pin.  Before doing this, please make sure that you have downloaded the Arduino Environment and installed the Seeeduino Driver successfully. If not, please click here to learn the specific steps.

### 1. Connect Seeeduino to PC

Connect the Seeeduino board to your computer using the USB cable. The green power LED (labeled PWR) should go on.
(When Seeeduino works independently, you can select USB or power adapter to power for Seeeduino.)

### 2. Open the Blink example

Open the LED blink example sketch: **File&gt;Examples&gt;01.Basics&gt;Blink**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Getting_Started_with_Seeeduino/img/Getting_Started1.png" alt="pir" width={600} height="auto" /></p>

### 3. Select your board

You'll need to select the entry in the Tools &gt; Board menu that corresponds to your Arduino. 在Here we need to select ATmega328.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Getting_Started_with_Seeeduino/img/Getting_Started2.png" alt="pir" width={600} height="auto" /></p>

### 4. Select your Serial Port

Select the serial device of the Arduino board from the Tools | Serial Port menu.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Getting_Started_with_Seeeduino/img/Getting_Started3.png" alt="pir" width={600} height="auto" /></p>

### 5. Upload the program

Now, simply click the "Upload" button in the environment. Wait a few seconds - you should see the RX and TX leds on the board flashing. If the upload is successful, the message "Done uploading." will appear in the status bar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Getting_Started_with_Seeeduino/img/Getting_Started4.png" alt="pir" width={600} height="auto" /></p>

### 6. Result

A few seconds after the upload finishes, you should see the pin 13 (L) LED on the board start to blink (in orange). If it does, congratulations! You've gotten Arduino up-and-running.

## Tech Support

  Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
  <div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
