---
name: Grove - Starter Kit for mbed
category: mbed
bzurl: https://www.seeedstudio.com/Grove-Starter-Kit-for-mbed-p-2032.html
oldwikiname: Grove - Starter Kit for mbed
prodimagename: Grove%20Starter%20Kit%20for%20mbed%201.jpg
surveyurl: https://www.research.net/r/Starter_Kit_for_mbed
sku: 110990421
---
![](https://github.com/SeeedDocument/Grove-Starter_Kit_for_mbed/raw/master/img/Grove%20Starter%20Kit%20for%20mbed%201.jpg)

**About mbed and Grove**

mbed is an open source development platform for rapid prototyping with microcontrollers. It provides free software libraries, hardware designs and development tools to build projects very easily and fast.

Grove is a modular electronics platform for quick prototyping that does not involve soldering or bread boarding.

**About this kit**

This kit is designed for you to get started with mbed as soon as possible. It contains many plug-n-play Grove modules to start exploring the mbed world. One goal is to have fun and build confidence with hardware and software in the journey.

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)

## Get Started
---
All the things to get started are:
- This kit
- [An Arch](https://www.seeedstudio.com/Arch-p-1561.html)
- [A USB Micro B cable](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)
- A computer with Internet

### Hello, world

1.Click this [link](https://developer.mbed.org/accounts/login/?next=%2Fcompiler%2F#import:https://mbed.org/users/viswesr/code/Arch_GPIO_Ex1;platform:Seeeduino-Arch)to **signup or login mbed**, then you will get the mbed online compiler.

2.Import the program and open main.cpp, you will see the code.

![](https://github.com/SeeedDocument/Grove-Starter_Kit_for_mbed/raw/master/img/Import_arch_gpio_ex1.png)

3.On mbed online IDE, click "Compile" of the top toolbar (or use CTRL + D) to compile the code and the binary file - Arch_GPIO_Ex1_LPC11U24.bin.

![](https://github.com/SeeedDocument/Grove-Starter_Kit_for_mbed/raw/master/img/Compile_mbed_program.png)

4.Connect the Arch board to the computer and **long press** the button, a USB drive named CRP DISABLD will pop up.

5.Delete firmware.bin and copy Arch_GPIO_Ex1_LPC11U24.bin to the USB drive.

6.**Quick press** the button, the program will be running, an LED will be blinking.

```
#include "mbed.h"

/* Configure a GPIO pin as output for controlling a LED. 'led' is user assigned name and
 'LED1' is a internal name given to a port pin P1_8 in this Arch platform. */
DigitalOut led(LED1);

int main()
{
    while(1) {
        led = 1;    // Switch ON the LED.
        wait(0.5);  // Wait for 0.5 Seconds.
        led = 0;    // Switch OFF the LED.
        wait(0.5);  // Wait for 0.5 Seconds.
    }
}
```

The above program uses **DigitalOut** class and **wait()** function of mbed C/C++ SDK. LED1 is an pseudonym of I/O pin **P1_8** and is labelled D1 in the Arch board. The state of LED1 is changed by writing either 0 or 1 to **led**. The **wait()** function produces a delay in seconds. The state of the **led** is continuous toggled every 0.5 seconds inside the endless **while()** loop.

More details of **DigitalOut** can be find in [DigitalOut page of mbed handbook](https://developer.mbed.org/handbook/DigitalOut) Similarly the wait() function is documented in [wait page](https://developer.mbed.org/handbook/Wait).

### Fruit Piano

A piano built with a basket of fruit, a microcontroller and a computer.

The idea is from [Makey Makey](http://makeymakey.com/), but uses different hardware and software. An mbed enabled microcontroller with USB is used.

![](https://github.com/SeeedDocument/Grove-Starter_Kit_for_mbed/raw/master/img/Piano.png)
![](https://github.com/SeeedDocument/Grove-Starter_Kit_for_mbed/raw/master/img/Fruit_Piano_Hardware.jpg)

**Hardware**
- An Arch board
- A basket of fruit
- A computer with AC power
- Some wires

**Software**
1. Click this [link](https://developer.mbed.org/accounts/login/?next=%2Fcompiler%2F#import:http://mbed.org/teams/Seeed/code/Fruit_Piano;platform:Seeeduino-Arch) to import the program to mbed online compiler.
2. Compile the code and download the binary file - Fruit_Piano_LPC11U24.bin.
3. Connect the Arch board to the computer and long press the button, a USB drive named CRP DISABLD will pop up.
4. Delete firmware.bin and copy Arch_GPIO_Ex1_LPC11U24.bin to the USB drive.
5. Quick press the button to run the program
6. Wire some apples or bananas to A0 - A5 (P0_11 - P0_14, P0_16, P0_22) pins of the Arch board
7. Open [Fruit Piano](http://xiongyihui.github.io/piano/) and play.


## More, Step By Step
---
- [Digital Input - Button: use a button to control an LED](https://developer.mbed.org/teams/Seeed/wiki/Button)
- [Analog Input - Potentiometer: use a potentiometer to control the blinking of an LED](https://developer.mbed.org/teams/Seeed/wiki/Potentiometer)
- [Temperature Sensing: use a analog temperature sensor to make a thermometer](https://developer.mbed.org/teams/Seeed/wiki/Analog-Temperature-Sensor)
- [PWM Ouput - Buzzer: use a buzzer to play a melody](https://developer.mbed.org/teams/Seeed/wiki/Grove-Buzzer)
- [Display: make a digital clock](https://developer.mbed.org/teams/Seeed/wiki/Grove-4-Digit-Display)
- [A thermometer](https://developer.mbed.org/teams/Seeed/wiki/Thermometer)
- [Infrared keyboard](https://developer.mbed.org/teams/Seeed/wiki/Infrared-keybaord)
- [Colorful light](https://developer.mbed.org/teams/Seeed/wiki/Grove-Chainable-RGB-LED)
- [Temperature controls color](https://developer.mbed.org/teams/Seeed/wiki/Temperature-Color)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>