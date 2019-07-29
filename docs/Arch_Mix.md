---
name: Arch Mix
category: SBC
bzurl: 
oldwikiname: 
prodimagename: 
surveyurl: 
sku: 102080027
---


![](https://github.com/SeeedDocument/Arch_Mix/raw/master/img/main1.jpg)


Arch Mix is a thin, lightweight development board based on NXP i.MX RT1052 processor(3020 CoreMark/1284 DMIPS @ 600 MHz). This development board comes pre-installed RT-Thread real-time operating system and built-in micro-python. Which makes it suitable for industrial control, especially for scenes with large code and high real-time application requirements.

The i.MX RT1052 is a new processor family featuring NXP’s advanced implementation of the Arm Cortex®-M7 core. Currently, the i.MX RT1052 is the highest performing Cortex-M7 solution delivering 3036 CoreMarks, which is 13 times better than the LPC1788 microcontroller. In addition to the high-speed performance it provides fast real-time responsiveness. The i.MX RT1050 also has rich audio and video features, including LCD display, basic 2D graphics, camera interface, SPDIF, and I2S audio interface.

The RT-Thread is an open source IoT operating system for embedded devices. The kernel has real-time multi-task scheduling, semaphore, mutex, mail box, message queue, signal etc. This is a lightweight system that loads quickly. For more detail about the RTOS, please refer to the [Github Page](https://github.com/RT-Thread/rt-thread).



<p style=":center"><a href="https://www.seeedstudio.com/Arch-Mix-p-2901.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>




## Application Ideas

- Industrial Control
- Smart Building
- Industrial Human Machine Interfaces
- Automation & Process Control
- Robot



## Feature

- ARM® Cortex®-M7 600MHz microcontroller(NXP i.MX RT1052)
- Comes with real-time operating system RT-Thread
- Build-in micro-python
- Ultra-fast system loading speed
- Rich peripheral interface: RMII, CAN, I2C, UART, CSI, I2S, ADC, SPDIF IN/OUT, SWD
- Smaller than other Demo boards of RT1052/1050: 67mm x 39mm





## Specification

|Parameters|Value|
|----|----|
|**Processor: NXP i.MX RT1052**||
|Platform|ARM Cortex-M7 MPCore|
|Frequency|600 MHz|
|Boot ROM|96KB|
|ON-Chip RAM|512KB|
|**Memory**||
|SDRAM|32MB|
|QSPI Flash|8MB|
|HyperFlash(Optional)|64MB|
|**Connectivity**||
|USB 2.0 Host|x1|
|USB 2.0 OTG, and DC 5V Power In|x1|
|Boot configuration DIP switch|x1|
|LED|Power LED x1<br>User RGB LED x1|
|Buttons|Reset button x1, On/Off button x1, User button x1|
|24bit RGB LCD interface|x1|
|Micro SD card connector|x1|
|RTC 3V battery connector|x1|
|22Pin header|RMII, CAN, I2C, UART, CSI, I2S,<br> ADC, SPDIF IN/OUT, SWD|

<div align="center"><b>Table 1.</b><i>Specification</i></div>




## Hardware Overview



<div align="center">
<figure>
  <p style=":center"><a href="https://raw.githubusercontent.com/SeeedDocument/Arch_Mix/master/img/pinout_f.jpg" target="_blank"><img src="https://github.com/SeeedDocument/Arch_Mix/raw/master/img/pinout_f.jpg" /></a></p>
  <figcaption><b>Figure 1</b>. <i>Front Hardware Overview</i></figcaption>
</figure>
</div>


<div align="center">
<figure>
  <p style=":center"><a href="https://raw.githubusercontent.com/SeeedDocument/Arch_Mix/master/img/pinout_b.jpg" target="_blank"><img src="https://github.com/SeeedDocument/Arch_Mix/raw/master/img/pinout_b.jpg" /></a></p>
  <figcaption><b>Figure 2</b>. <i>Back Hardware Overview</i></figcaption>
</figure>
</div>


!!!Annotation
    <font color="red"><b>*0</b></font> You need to power the Arch Mix by the USB OTG port. For the difference between the USB HOST and USB OTG, Please check [here](https://www.quora.com/What-is-the-difference-between-USB-host-VS-USB-OTG). 
    
    <font color="red"><b>*1</b></font> We provide two options for the flash, you can use 64M HyperFlash(U7-default DNP) or 8M QSPI Flash(U11-default selection). 
    
    <font color="red"><b>*2</b></font> After the board is powered by USB OTG, you can switch the system on and off by pressing and holding(about 3~5 seconds) this button. 

    <font color="red"><b>*3</b></font> Please note that this port is a 1.25mm CR2032 Battery port, do not plug in a Li-Po battery. If you want to use the RTC function, you can search the ‘CR2032 Battery with Wire Leads’ in the Amazon or other web.



**Power**

Please supply power through the Micro-USB **OTG** port. 


!!!Danger
        - The input power supply voltage is 5V, can not exceed 5.5V.  
        - All digital and analog IO interface levels are 3.3V. Please do not input more than 3.3V, otherwise the CPU may be damaged.  
        - RTC's battery-powered interface(J6) can only be connected to a button battery of about 3V, and the voltage cannot exceed 3.6V.


**Switch**

The Arch Mix can be configured into three different boot modes: HyperFlash, QSPI Flash and SD Card. We use QSPI Flash by default, when you change the boot mode, you need to change the DIP switch to the corresponding position.


DEVICE | BOOT_CFG | SW1 four keys value
---|---|---
HyperFlash|0x02_00|0 , 1 , 1 , 0
QSPI Flash|0x00_00|0 , 0 , 1 , 0
SD|0x00_40|1 , 0 , 1 , 0

<div align="center"><b>Table 2.</b><i>BOOT Configuration</i></div>



**Button**

There are three buttons on this board, please check the function table.

Name|Function|Detail
---|---|---
SW2|User Button|For user configure, for this development board No. 125 pin is SW2
SW3|RESET|System reset, when you press this button the system will restart
SW4|Power On/OFF|Switch the system on and off by pressing and holding(about 3~5 seconds) this button


<div align="center"><b>Table 3.</b><i>Button Function table</i></div>



**LCD Interface**

As you can see, there is a 50 pin LCD Interface on this board, it Support up to 1366 x 768 WXGA resolution. In case you need a LCD screen for this board, you can use the LCD8000 serial screen. Check the links below.

[LCD from NXP](https://www.nxp.com/support/developer-resources/software-development-tools/i.mx-developer-resources/evaluation-kit-for-the-i.mx-6ull-and-6ulz-applications-processor:MCIMX6ULL-EVK?tab=Buy_Parametric_Tab#/)  
[LCD from Embest](http://www.embest-tech.com/prod_view.aspx?TypeId=118&Id=277)
 


### Pinout


<div align="center">
<figure>
  <p style=":center"><a href="https://raw.githubusercontent.com/SeeedDocument/Arch_Mix/master/img/pinout.png" target="_blank"><img src="https://github.com/SeeedDocument/Arch_Mix/raw/master/img/pinout.png" /></a></p>
  <figcaption><b>Figure 3</b>. <i>Pinout, ckick the image to view the original file</i></figcaption>
</figure>
</div>

!!!Tip
    Most of the pins of NXP i.MX RT1050 processor have multiplexing function, you can click the attachment below to view the detailed pin multiplexing.

 [Arch Mix Pin Definition Table](https://github.com/SeeedDocument/Arch_Mix/raw/master/res/Arch%20Mix_v1.0_Pin.xlsx)


### Blcok Diagram

<div align="center">
<figure>
  <p style=":center"><a href="https://raw.githubusercontent.com/SeeedDocument/Arch_Mix/master/img/Block.jpg" target="_blank"><img src="https://github.com/SeeedDocument/Arch_Mix/raw/master/img/Block.jpg" /></a></p>
  <figcaption><b>Figure 4</b>. <i>Arch Mix Blcok Diagram, ckick the image to view the original file</i></figcaption>
</figure>
</div>


### Dimension Diagram


<div align="center">
<figure>
  <p style=":center"><a href="https://raw.githubusercontent.com/SeeedDocument/Arch_Mix/master/img/D1.jpg" target="_blank"><img src="https://github.com/SeeedDocument/Arch_Mix/raw/master/img/D1.jpg" /></a></p>
</figure>
</div>


<div align="center">
<figure>
  <p style=":center"><a href="https://raw.githubusercontent.com/SeeedDocument/Arch_Mix/master/img/D2.jpg" target="_blank"><img src="https://github.com/SeeedDocument/Arch_Mix/raw/master/img/D2.jpg" /></a></p>
  <figcaption><b>Figure 5</b>. <i>Board Dimension, Unit(mm)</i></figcaption>
</figure>
</div>







## Hardware Connection


**Materials required**


[Arch Mix x1](https://www.seeedstudio.com/Arch-Mix-p-2901.html)<br> 
[USB to Serial (TTL) Module&Adapter x1](https://www.seeedstudio.com/PL2303-USB-to-Serial-TTL-Module-Adapter-p-2358.html)<br> 
[Micro USB Cable X1](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)  
[Dual-female jumper x4](https://www.seeedstudio.com/1-pin-dual-female-jumper-wire-100mm-50pcs-pack-p-260.html)



- **Step 1.** Connect Arch Mix and USB to Serial (TTL) Module&Adapter using the Dual-female jumper.


Module|PIN Connection||||
---|---|---|---|---
Arch Mix|VCC|GND|TXD|RXD
USB to Serial Module|VCC|GND|RX|TX

<div align="center"><b>Table 4.</b><i>UART connection</i></div>


<div align="center">
<figure>
  <p style=":center"><a href="https://raw.githubusercontent.com/SeeedDocument/Arch_Mix/master/img/UART.jpg" target="_blank"><img src="https://github.com/SeeedDocument/Arch_Mix/raw/master/img/UART.jpg" /></a></p>
  <figcaption><b>Figure 6</b>. <i>UART Connection</i></figcaption>
</figure>
</div>


- **Step 2.** Plug the USB to Serial Module to your computer.

- **Step 3.** Power Arch Mix through the OTG port. The on-board Power LED will light up and RGB LED will turn green.

<div align="center">
<figure>
  <p style=":center"><a href="https://raw.githubusercontent.com/SeeedDocument/Arch_Mix/master/img/RTT1.jpg" target="_blank"><img src="https://github.com/SeeedDocument/Arch_Mix/raw/master/img/on.jpg" /></a></p>
  <figcaption><b>Figure 7</b>. <i>Power On</i></figcaption>
</figure>
</div>


- **Step 4.** Open your **Computer Management**, find **Device Manager**. You will see The **RT-Thread Debug Bridge** and the correponding COM port, keep in mind the COM port number. As you can see, this tutorial is COM8.

<div align="center">
<figure>
  <p style=":center"><a href="https://raw.githubusercontent.com/SeeedDocument/Arch_Mix/master/img/RTT1.jpg" target="_blank"><img src="https://github.com/SeeedDocument/Arch_Mix/raw/master/img/RTT1.jpg" /></a></p>
  <figcaption><b>Figure 8</b>. <i>Check the COM port, ckick the image to view the original file</i></figcaption>
</figure>
</div>

- **Step 5.** Use the serial port tool (For example: [Putty](https://www.putty.org/)) to read the serial port data.  Select the corresponding port, set the baud rate to **115200**.



<div align="center">
<figure>
  <p style=":center"><a href="https://raw.githubusercontent.com/SeeedDocument/Arch_Mix/master/img/COM22.jpg" target="_blank"><img src="https://github.com/SeeedDocument/Arch_Mix/raw/master/img/COM22.jpg" /></a></p>
  <figcaption><b>Figure 9</b>. <i>Configure the serial tool</i></figcaption>
</figure>
</div>


- **Step 6.** Press the **Reset** button, to refresh the serial output.




## RT-Thread


### About RT-Thread

The RT-Thread was born in 2006, the license is similar to FreeRTOS and is released in an open source, free way. Unlike FreeRTOS and uC/OS, RT-Thread was released with a middleware platform that included components such as the network, file system, and GUI interface. After a short transition period, the Cortex M MCU was supported in 2009 and received a lot of developer recognition and support. After 2011, due to its mature and stable components, it is widely used in industrial control, electric power, new energy, high-speed rail, medical equipment, water conservancy, consumer electronics and other industries. We've made a comparison table for those three RTOS.

| Item                              | FreeRTOS                                                     | µC/OS                                                        | RT-Thread                                                    |
| --------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Kernel size                       | 5KB ROM, 2KB RAM                                             | 6KB ROM, 1KB RAM                                             | 3KB ROM,1KB RAM                                              |
| Kernel mechanism                  | Mailbox  <font color='red'><b>✘</b></font> <br>Event <font color='red'><b>✔</b></font> <br>Coroutine <font color='red'><b>✔</b></font> | Mailbox  <font color='red'><b>✔</b></font> <br>Event <font color='red'><b>✔</b></font> | Mailbox  <font color='red'><b>✔</b></font> <br>Event <font color='red'><b>✔</b></font><br/>Message queue<font color='red'><b>✔</b></font> |
| Development tools                 | Support a variety of mainstream tools, full toolchain        | Support a variety of mainstream tools, full toolchain        | Support a variety of mainstream tools, full toolchain, provide accessibility tools |
| Debug tools                       | Shell<br/>SystemView                                         | SystemView                                                   | Shell<br/>Logging system<br/>NetUtils<br/>ADB<br/>SystemView<br/> |
| Testing system                    | Don't support                                                | Don't support                                                | Unit test framework<br/>Auto test system                     |
| Support chip and CPU architecture | Support ARM, MIPS, RISC-V, xtensa and other mainstream CPU architecture | Support ARM, MIPS and other mainstream CPU architecture      | Support ARM, MIPS, RISC-V and other mainstream CPU architecture |
| File system                       | Support FAT                                                  | Need authorization                                           | Provide various file systems layer. Support fatfs, littlefs, jffs2, romfs and the popular file systems. |
| Low power consumption             | Partial support                                              | Partial support                                              | Support                                                      |
| GUI                               | None                                                         | µC/GUI                                                       | Provide GUI engine                                           |
| Component ecology                 | Provide network, debugging, security related components      | There are some, but need to be authorized                    | Provide a software package platform, currently about 100 components, covering a wide range |
| IoT component                     | TCP/UDP/AWS                                                  | Need authorization                                           | TCP/UDP, Azure, Ayla, Aliyun，onenet, webclient, mqtt， websocket, WebNet... |


<div align="center"><b>Table 5.</b><i>Technical and ecological comparison of three embedded operating systems</i></div>


### RT-Thread Resource and Manual

Thanks the RT-Thread official team, they will continue to translate relevant resources and documents, we will publish the latest English documents here.

- [RT-Thread Programming-Manual](https://github.com/RT-Thread/rtthread-manual-doc)


### Running MicroPython


This development board comes pre-installed RT-Thread real-time operating system(RTOS) and built-in micro-python, so when you follow the steps above to connect the hardware and power on the system, you will see the system log.
The RTOS is a lightweight system which loads very quickly, one or two seconds later, the system starts up and you will see the following interface:



<div align="center">
<figure>
  <p style=":center"><a href="https://raw.githubusercontent.com/SeeedDocument/Arch_Mix/master/img/RTT2.jpg" target="_blank"><img src="https://github.com/SeeedDocument/Arch_Mix/raw/master/img/RTT2.jpg" /></a></p>
  <figcaption><b>Figure 10</b>. <i>RTOS Startup Interface</i></figcaption>
</figure>
</div>



Enter `python` in the Finsh/MSH command line to enter MicroPython's interactive command line -- REPL(Read-Evaluate-Print-Loop). You can see the following interface on the terminal:


<div align="center">
<figure>
  <p style=":center"><a href="https://raw.githubusercontent.com/SeeedDocument/Arch_Mix/master/img/RTT3.jpg" target="_blank"><img src="https://github.com/SeeedDocument/Arch_Mix/raw/master/img/RTT3.jpg" /></a></p>
  <figcaption><b>Figure 11</b>. <i>Enter the REPL(Read-Evaluate-Print-Loop)</i></figcaption>
</figure>
</div>


You can tap ++ctrl+d++ or input `quit()` or `exit()` to exit REPL and return to RT-Thread Finsh/MSH.


#### Paste Mode


MicroPython is a lean and efficient implementation of the Python 3 programming language that includes a small subset of the Python standard library and is optimised to run on microcontrollers and in constrained environments.

- MicroPython has a special paste mode than the normal python interactive environment, which can be used to paste multiple lines of python code at a time.
- At the command line prompt, press ++ctrl+e++, and the prompt will appear: paste mode;

- ++ctrl+c++ to cancel, ++ctrl+d++ to finish. After pasting the code you need to run, press ++ctrl+d++ to exit the paste mode and the code you enter will be executed automatically.


<div align="center">
<figure>
  <p style=":center"><a href="https://raw.githubusercontent.com/SeeedDocument/Arch_Mix/master/img/RTT4.jpg" target="_blank"><img src="https://github.com/SeeedDocument/Arch_Mix/raw/master/img/RTT4.jpg" /></a></p>
  <figcaption><b>Figure 12</b>. <i>Paste Mode</i></figcaption>
</figure>
</div>


### MicroPython Demo

#### Flashing Light

As you can see there is a RGB LED on this board, usually this LED shows green. This demo will show you how to control the RGB LED.   


!!!Note
        The RGB LED connected to the No. 52 pin of RT1052 chip.  

- You can press ++ctrl+e++ to enter paste mode.  
- Then paste the following code block into the command line.  
- Press the ++ctrl+d++ to exit the paste mode and the code you enter will be executed automatically

```python
import time
from machine import Pin

LED = Pin(("LED1", 52), Pin.OUT_PP)          #Set pin 52 to output mode
while True:
    LED.value(1)
    time.sleep_ms(500)
    LED.value(0)
    time.sleep_ms(500)
```

Now you will see the RGB LED flashing.


#### Button Light

Beside the RGB LED, you can find a USER button, this demo will show you how to use the USER button to control the RGB LED.

!!!Note
    - The RGB LED connected to the No. 52 pin of RT1052 chip.  
    - The button connected to the No. 152 pin of RT1052 chip.


- You can press ++ctrl+e++ to enter paste mode.  
- Then paste the following code block into the command line.  
- Press the ++ctrl+d++ to exit the paste mode and the code you enter will be executed automatically


```python
from machine import Pin

led = Pin(("LED1", 52), Pin.OUT_PP)
key = Pin(("KEY", 125), Pin.IN, Pin.PULL_UP) #Set pin 125 to pull-up input mode
while True:
    if key.value():
        led.value(0)
    else:
        led.value(1)

```

Now the code is running, the RGB LED will turn yellow, and when you press and hold the USER button, the RGB LED will turn green.



### Firmware upgrade


This Arch Mix comes pre-installed RT-Thread real-time operating system(RTOS) and built-in micro-python. In case you need to burn the firmware or upgrade the firmware, you can refer the Guide and download the tools.



[Arch Mix Firmware Guide](https://github.com/SeeedDocument/Arch_Mix/raw/master/res/micropython_firmware.pdf)  
[Tools](https://github.com/SeeedDocument/GM6020/raw/master/res/Firmware_and_Tools.zip)





## Resources

- **[ZIP]** [Schematic](https://github.com/SeeedDocument/Arch_Mix/raw/master/res/202001930_PCBA_Arch%20Mix_v1.0_SCH%20%26%20PCB.zip)
- **[ZIP]** [Firmware and Tools]()
- **[PDF]** [PDF Format Wiki](https://github.com/SeeedDocument/Arch_Mix/raw/master/res/Arch_Mix.pdf)
- **[PDF]** [i.MX RT1050 Datasheet](https://github.com/SeeedDocument/Arch_Mix/raw/master/res/i.MX%20RT1050.pdf)
- **[PDF]** [Dimension Diagram](https://github.com/SeeedDocument/Arch_Mix/raw/master/res/ARCH%20MIX_V1.0_Dimension.pdf)
- **[xlsx]** [Arch Mix_v1.0_Pin Function](https://github.com/SeeedDocument/Arch_Mix/raw/master/res/Arch%20Mix_v1.0_Pin.xlsx)




## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>