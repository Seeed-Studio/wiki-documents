---
name: DSO Nano v3
category: MakerPro
bzurl: https://www.seeedstudio.com/DSO-Nano-v3-p-1358.html
oldwikiname:  DSO Nano v3
prodimagename:  Nano_v3.jpg
surveyurl: https://www.research.net/r/DSO_Nano_v3
sku:     109990013
---
![](https://github.com/SeeedDocument/DSO_Nano_v3/raw/master/img/Nano_v3.jpg)

DSO Nano v3 is a portable digital storage oscilloscope. Based on a 32-bit ARM Cortex-M3 microcontroller, it is equipped with 320*240 color display, USB port and recharging function. It is compact, simple to operate; meets the basic demands of school labs, electrical repairs and engineering. The version 3 of DSO Nano differs from version 2 in that it does not use a white plastic case. Instead, it uses a black metal case which is more durable and strong.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/DSO-Nano-v3-p-1358.html)

##   Features
---
*   Portable and lightweight
*   Color display
*   Waveform storage and playback
*   6 trigger modes
*   200KHz analog bandwidth
*   Complete measurement markers and signal characteristics
*   Built-in signal generator
*   Accessories available
*   Open-source hardware and firmware

##   General Safety Rules
---
To ensure your safety &amp; avoid any damages to the product/connected devices, please read the following safety rules carefully. To avoid any possible dangers, please use this product according to the rules.

*   **Use appropriate power cord.** Please use dedicated power cord which is certified in the country/region.
*   **Connect/disconnect properly.** Do not plug/unplug when the probe(s)/test lead(s) is connected to the power source. Before you plug/unplug the current probes, please disconnect the power to the circuit-under-test.
*   **Observe all terminal ratings.** To avoid fire/electric shock, please don’t measure signal with DC100V or above, or the device might be destroyed. Please read the manual carefully to know the detailed info of related ratings before connection.
*   **Please do not operate in humid environment.**

*   **Please do not operate in inflammable/explosive environment.**

*   **Please keep the surface of the product clean and dry.**

##   Specifications
---
###   Key Specs

<table>
<tr>
<td width="400px"> Display
</td>
<td width="600px"> Full Color 2.8" TFT LCD 65K 320×240
</td></tr>
<tr>
<td> Analog bandwidth
</td>
<td> 0 - 200KHz
</td></tr>
<tr>
<td> Max sample rate
</td>
<td> 1Msps 12Bits
</td></tr>
<tr>
<td> Sample memory depth
</td>
<td> 4096 Point
</td></tr>
<tr>
<td> Horizontal sensitivity
</td>
<td> 1uS/Div~10S/Div
</td></tr>
<tr>
<td> Horizontal position
</td>
<td> adjustable with indicator
</td></tr>
<tr>
<td rowspan="2"> Vertical sensitivity
</td>
<td> 10mV/Div~10V/Div (with ×1 probe)
</td></tr>
<tr>
<td> 0.5V/Div~100V/Div (with ×10 probe)
</td></tr>
<tr>
<td> Vertical position
</td>
<td> adjustable with indicator
</td></tr>
<tr>
<td> Input impedance
</td>
<td> &gt;500KΩ
</td></tr>
<tr>
<td> Max input voltage
</td>
<td> 40Vpp (by ×1 probe)
</td></tr>
<tr>
<td> Coupling
</td>
<td> DCs
</td></tr>
<tr>
<td rowspan="4"> Trig modes
</td>
<td> Auto, Normal, Single, None, Scan and Fit
</td></tr>
<tr>
<td> Rising/Falling edge/level trigger
</td></tr>
<tr>
<td> Trig level adjustable with indicator
</td></tr>
<tr>
<td> Trig sensitivity adjustable with indicator
</td></tr>
<tr>
<td rowspan="4"> Waveform Functions
</td>
<td> Auto measurement: frequency, cycle time, duty cycle, peak voltage, RMS voltage, Average voltage and DC voltage
</td></tr>
<tr>
<td> Precise vertical measurement with markers
</td></tr>
<tr>
<td> Precise horizontal measurement with markers
</td></tr>
<tr>
<td> Hold/Run
</td></tr>
<tr>
<td> Signal Generator
</td>
<td> 10Hz~1MHz square wave
</td></tr>
<tr>
<td> Waveform storage
</td>
<td> Micro SD card
</td></tr>
<tr>
<td> PC connection via USB
</td>
<td> as SD card reader
</td></tr>
<tr>
<td> Upgrade
</td>
<td> USB
</td></tr>
<tr>
<td> Power supply
</td>
<td> 500mAh 3.7V Lithium battery / USB
</td></tr>
<tr>
<td> Dimension (w/o probe)
</td>
<td> 91mm*62mm*13mm
</td></tr></table>

###   Structure

![](https://github.com/SeeedDocument/DSO_Nano_v3/raw/master/img/DSO_Nano_v3_Structure.jpg)

Note: My device (Serial E1C5A0C1) does NOT have the indicated "TF card slot".  There is no slot in the metal case and even if you open the case, there is no connector on the board (nor even a place to have put a connector).

##   Usage
---
###   Basic Operation

**Left/Right buttons** are mainly used to navigate through menu items. The selected menu item will be highlighted; its corresponding screen element will blink. Press **UP/Down buttons** to adjust. The **OK button** controls display/hide markers or confirm operations.

Pressing **A (Run/Stop) Button** once will freeze the current display. Press 'A' again to resume. The **B (Shift) Button** is used for quick functions.

Throughout this text, adjustable items will be labeled in <span style="color:red;">red</span>.

![](https://github.com/SeeedDocument/DSO_Nano_v3/raw/master/img/Dsonanov2-user-interface-1.jpg)

###   User Interface Overview

The screen is broken into a central display area and 3 operation bars around it. The menu on the top provides the most frequently-used adjustments to signal display. The status bar on the bottom provides precise measurement results and monitoring status. Adjust more advanced functions with the column of function icons on the right.

###   Zooming on Signals

Move the cursor to the <font color="red">Vertical Scale </font>and <font color="red">Time Base</font> to start exploring the signal display. Press the up/down buttons to adjust the voltage/div or time/div. Each “div” is a grid unit "division" of the screen; count the divisions to estimate a quick measurement. The vertical scale ranges from 10mV/div to 10V/div. The time base ranges from 1uS/div to 10S/div. Beware that in the larger time bases the display may look frozen, since 10S/div means it takes 120 seconds to refresh whole the screen (12 divs wide).

The waveform might be out of the range of the display even in the appropriate voltage/div setting. You can change the Y position to move the waveform up and down to center the wave onscreen. The <font color="red">Y position marker</font> indicates 0V for your reference.

Press button A to freeze the current display (setting the <font color="red">status</font> to HOLD) and press again to resume refreshing (status RUN). With the status on HOLD, you can select the <font color="red">T0</font> icon and press the up/down buttons to pan back and forth. Press the OK button to display or hide the X position marker (a yellow dotted vertical line).

###   Triggering Modes

The Nano has six triggering modes, accessible in the top left corner of the screen. These are:

**AUTO**: Always refresh the display, and synchronize when triggered.
 **NORM (al)**: Display synchronized waveform when triggered, and blank if not triggering.
 **SING (le)**: Display triggered waveform and hold, then blank again before triggering.
 **SCAN:** Repeatedly sweep waveform onscreen left to right.
 **NONE:** Refresh unsynchronized waveform ignoring triggering.
 **FIT:** Automatically adjust vertical and horizontal scale to display waveform.

<table >
<caption> Comparison table of the triggering modes
</caption>
<tr>
<th> Mode
</th>
<th> Trigger
</th>
<th> Display Waveform
</th>
<th> Synchronization
</th>
<th> Example Applications
</th></tr>
<tr>
<td width="150px"> AUTO
</td>
<td width="150px"> Yes
</td>
<td width="200px"> Always
</td>
<td width="200px"> Yes
</td>
<td width="300px"> General use
</td></tr>
<tr>
<td> NORM
</td>
<td> Yes
</td>
<td> Triggered
</td>
<td> Yes
</td>
<td> Only watch periodic signals
</td></tr>
<tr>
<td> SING
</td>
<td> Yes
</td>
<td> Triggered
</td>
<td> Auto-hold
</td>
<td> Capture a random pulse
</td></tr>
<tr>
<td> SCAN
</td>
<td> No
</td>
<td> Always
</td>
<td> No
</td>
<td> Keep monitoring signals
</td></tr>
<tr>
<td> NONE
</td>
<td> No
</td>
<td> Always
</td>
<td> No
</td>
<td> Watch an unsynchronized waveform
</td></tr>
<tr>
<td> FIT
</td>
<td> Yes
</td>
<td> Auto-adjust
</td>
<td> Yes
</td>
<td> Easily watch periodic signals
</td></tr></table>

To set the triggering level, move cursor to <font color="red">Vt = ??.?mV </font>and press the up/down buttons. Press OK to display or hide the trigger level markers (horizontal green dotted lines). To fine tune triggering, you may tweak the trigger sensitivity range <font color="red">TR </font> and the <font color="red">trigger type</font>. By default the trigger type is set to <font color="red">up S</font> which means the trigger will fire when the signal crosses from the lower trigger line to the higher line. <font color="red">Down S </font>will likewise trigger on a falling signal edge.

This could prevent mistaken triggering caused by noise, especially while measuring fast low-amplitude signals. If you set the sensitivity to 0, where the two trigger level markers overlap each other, you get level triggering. Please refer to [Wikipedia for more informaiton on oscilloscope triggering](https://en.wikipedia.org/wiki/Oscilloscope#Triggered_sweeps).

###   Measurement

![](https://github.com/SeeedDocument/DSO_Nano_v3/raw/master/img/Dsonanov2measurement.jpg)

Auto measurement is useful for quickly exploring signal characteristics. Measurement options include frequency, cycle time, duty cycle, peak voltage, RMS voltage, average voltage and DC voltage. Please note that frequency, cycle time and duty cycle can only be measured while triggering.

To get a more precise measurement, use the measurement markers. T2 and T1 control the time markers, the two vertical dotted lines. A precise time difference between two marker positions is displayed in "time measure" near bottom of the screen. The V1 marker and V2 marker can be adjusted directly from the "voltage measure" result panel ("V1-V2=? V") at the bottom center of the screen.

Pressing the OK button in a menu item will hide or show the corresponding line onscreen.

###   Waveform Storage

Waveforms can be saved to an mirco SD card or loaded to the display. You need a micro SD card to do this (not included). Please note that SDHC cards (high-speed cards larger than 2 GB) are not supported for now. Follow the below steps to set up your microSD card:

1.  Make sure your SD card supports SPI mode. (Max.menory: 2G)
2.  Format your SD card with the FAT16 filesystem.

When the microSD card is prepared, the **FS** (file save), **FL** (file load) and **SI**(image save) icons are enabled. Press the OK button on **FS** to save a waveform, or on **FL** to load the waveform from the microSD card. Also you could select **SI **for saving oscillogram in PNG format.

###   Signal Generator

The 3.5mm audio jack under the mini USB port is used for the signal generator. It outputs a square wave from 10Hz to 1MHz. Frequency can be adjusted via Fo ("frequency out"). The peak voltage is the same as the supplied power, or approximately 3.7v if powered from battery, and 5v when powered by USB.

###   Power Supply

The DSO Nano can be powered by the internal 500mAh LiPo battery or by the external mini-USB port. Charging takes about 2 hours 20 minutes to reach 4.12V. A brand-new unit can only run about 1 hour by battery, but the battery life will be extended after the LiPo battery is fully charged.

![](https://github.com/SeeedDocument/DSO_Nano_v3/raw/master/img/Dsonanov2-charging.JPG)

###   Firmware Upgrades

To upgrade firmware, please perform following steps:

1.  Download the latest applicable firmware to your PC.

2.  Simultaneously press **"D'**_own Key" '_and turn on power supply, enter DFU firmware upgrade mode.
3.  Use USB cable to connect DSO Nano v3 to your PC, a removable disk named DFU V3_11_A will appear on your PC. Copy the hex firmware to the root directory of your disk. After the extension of the firmware changes from “hex” to “rdy”, restart DSO Nano v3, thus firmware is upgraded.

**NOTE** that if there are multiple hex files (e.g. the BenF firmware) you must copy EACH file ONE at a time and wait for it to change to "RDY" before you copy the next one.  So, if you have file1.hex and file2.hex then the process would be:

1.  Copy file1.hex

2.  Wait for file1.rdy

3.  Copy file2.hex

4.  Wait for file2.rdy

Under windows you will see the "drive" disappear after you copy each hex file and reappear with the rdy file.

![](https://github.com/SeeedDocument/DSO_Nano_v3/raw/master/img/DSO_Nano_v3_Firmware_Upgrades1.png)

 ![](https://github.com/SeeedDocument/DSO_Nano_v3/raw/master/img/DSO_Nano_v3_Firmware_Upgrades2.png)

##   FAQ
---
*   What is the hardware version and firmware version of DSO Nano v3 ?

  DSO Nano v3 is of hardware v2.6 and firmware app v2.6 , you could find them on Resources.

*   What is the main difference between DSO Nano v2 and v3 ?

  Acutall, both of they are the with  same hardware and firmware, also they of the same version of DFU which is used for upgrading firmware. So the main difference is the shell, DSO Nan v3 is with black metal shell instead of the white plastic shell on DSO Nano v2.

##   Resources
---
*   [DSO_Nano_V3_User_Manual v4.22.pdf](https://github.com/SeeedDocument/DSO_Nano_v3/raw/master/res/DS201V_4.22%20User%20Manual%EF%BC%88Increase%20the%20alignment%20and%20hidden%20reference%20line%EF%BC%89.pdf)
*   [DSO Nano Official Firmware V4.32](https://github.com/SeeedDocument/DSO_Nano_v3/raw/master/res/DS201.V4.32.zip)
*   [DSO Nano Official Firmware App2.6](https://github.com/SeeedDocument/DSO_Nano_v3/raw/master/res/DSO_Nano_2.6_firmware.zip)

*   [BenF Firmware v3.64](https://github.com/SeeedDocument/DSO_Nano_v3/raw/master/res/BenF364_LIB353.zip)    Thank **Benf **for sharing this great firmware and **Alf **arranging it to work with DFU Ver3.22. Note that the BenF firmware v3.64 **WILL NOT SAVE** to the internal memory of the V3.  If your V3 does not have an external card slot then you will not be able to save images or data.

*   [DSO Nano Hardware v2.6 Layout.pdf](https://github.com/SeeedDocument/DSO_Nano_v3/raw/master/res/DSO_Nano_V2.6_VCT_PCB_Layout.pdf)

*   [DSO Nano Hardware v2.6 Shcematic.pdf](https://github.com/SeeedDocument/DSO_Nano_v3/raw/master/res/DSO_Nano_V2.6_VCT_Schematic.pdf)

*   [DSO_Nano_V3_User_Manual.pdf](https://github.com/SeeedDocument/DSO_Nano_v3/raw/master/res/DSO_Nano_V3_User_Manual.pdf)

###   DFU Hex/Binaries

Can be used when your DSO's bricked.

*   [DFU_D329_VB_2M_SEEED_for_nano_v3.hex.zip](https://github.com/SeeedDocument/DSO_Nano_v3/raw/master/res/DFU_D329_VB_2M_SEEED_for_nano_v3.hex.zip)

*   [DFU_A322_for_nano_v3.hex.zip](https://github.com/SeeedDocument/DSO_Nano_v3/raw/master/res/DFU_A322_for_nano_v3.hex.zip)

*   [Bootloader_for_nano_v2.bin.zip](https://github.com/SeeedDocument/DSO_Nano_v3/raw/master/res/Bootloader_for_nano_v2.bin.zip)

*   [DFU_D326_SD_MINI_for_hw1.7.hex.zip](https://github.com/SeeedDocument/DSO_Nano_v3/raw/master/res/DFU_D326_SD_MINI_for_hw1.7.hex.zip)

##   External Links

*   [DSO Nano On SeeedStudio Forum](http://forum.seeedstudio.com/viewforum.php?f=22)

*   [Pocket Oscilloscope-DS0201 forum](http://www.minidso.com/bbs/thread.php?fid=6)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>