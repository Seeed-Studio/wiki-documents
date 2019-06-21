---
name: DSO Nano
category: MakerPro
bzurl: https://www.seeedstudio.com/DSO-Nano-v3-p-1358.html
oldwikiname:  DSO Nano
prodimagename:  Dsonanointro.jpg
surveyurl: https://www.research.net/r/DSO_Nano
sku:   109990013
---

The DSO Nano is a one-channel handheld oscilloscope, suitable for quick field measurements and more. You will find it very simple to use, but it is nonetheless a quite amazing little tool.

Being a new and dynamic open-hardware and open-source project, the information tends to be scattered around quite a bit. This page will try to collect the most relevant information in a single place, in order to help newcomers find their way through the wealth of unorganized material already available.

Click the image to get to different version of DSO Nano.

|[![](https://github.com/SeeedDocument/DSO_Nano/raw/master/img/Dsonanointro.jpg)](https://www.seeedstudio.com/DSO-nano-Pocket-size-digital-storage-oscilloscope-p-512.html)|[![](https://github.com/SeeedDocument/DSO_Nano/raw/master/img/Dsonanov2intro.jpg)](https://www.seeedstudio.com/DSO-Nano-v2-p-681.html)|[![](https://github.com/SeeedDocument/DSO_Nano/raw/master/img/Nano_v3.jpg)](https://www.seeedstudio.com/DSO-Nano-v3-p-1358.html)|
|:---:|:---:|:---:|
|[DSO Nano v1](https://www.seeedstudio.com/DSO-nano-Pocket-size-digital-storage-oscilloscope-p-512.html)<br>**(Discontinued)**|[DSO Nano v2](https://www.seeedstudio.com/DSO-Nano-v2-p-681.html)<br>**(Discontinued)**|[DSO Nano v3](https://www.seeedstudio.com/DSO-Nano-v3-p-1358.html)

##   Hardware details
---
So far there have been three major versions of the DSO Nano, the original one in 2009, and the DSO Nano V2 in 2010. (A significant hardware upgrade including dual channels was introduced with the [DSO Quad](http://wiki.seeedstudio.com/DSO_Quad).) Apart from the improved charging unit in V2, and a redesigned PCB, the specifications are pretty much the same. They can use the same firmware.

A photo from inside the V2 was posted to the [forum](https://community.seeedstudio.com/discover.html?t=DSO).

<table >
<tr>
<td> CPU
</td>
<td> ARM Cortex™-M3 (STM32F103VBT6)
</td></tr>
<tr>
<td> RAM
</td>
<td> 20k
</td></tr>
<tr>
<td> Flash ROM
</td>
<td> 128k
</td></tr>
<tr>
<td> Clock frequency
</td>
<td> 72MHz
</td></tr>
<tr>
<td> Display
</td>
<td> 2.8″ Color TFT LCD
</td></tr>
<tr>
<td> Display Resolution
</td>
<td> 320×240
</td></tr>
<tr>
<td> Display Color
</td>
<td> 65K
</td></tr>
<tr>
<td> PC connection via USB
</td>
<td> as SD card reader
</td></tr>
<tr>
<td> Upgrade
</td>
<td> by bootloader via USB
</td></tr>
<tr>
<td> Power supply
</td>
<td> 3.7V Chargeable lithium battery / USB (LTC4054 charger controller)
</td></tr></table>

##   Upgrading the firmware
---
The DSO Nano you hold in your hand took some time to reach you; it is more than likely that a newer version of the firmware is already available.

The newest firmware from BenF is available from the [Tech Support](http://forum.seeedstudio.com/viewtopic.php?f=12&amp;t=1793)(This link is broken, if you are looking for the firmware please refer to the wiki of [DSO Nano V3](http://wiki.seeed.cc/DSO_Nano_v3/)) forum. Inside the ZIP file you will also find the operating manual for this firmware release.

To upgrade the firmware to the latest version, you have a few options:

*   If you work with Windows, follow the instructions contained in the official [v2 User Manual](https://github.com/SeeedDocument/DSO_Nano/raw/master/res/DSO%20Nano%20v2%20Manual.pdf) (pages 8-10). The required utility DfuSeDemo.exe is also available [here](http://dsonano.googlecode.com/files/um0412.zip).
*   On Linux and Mac OS X you can use [Dfu-util](http://wiki.seeedstudio.com/Dfu-util) (0.5 or newer).

##   Capabilities
---
<table >
<tr>
<td> Analog bandwidth
</td>
<td> 0 - 1MHz
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
<td> 1μS/Div～10S/Div (1-2-5 Step)
</td></tr>
<tr>
<td> Horizontal position
</td>
<td> adjustable with indicator
</td></tr>
<tr>
<td> Vertical sensitivity
</td>
<td> 10mV/Div～10V/Div (with ×1 probe)
</td></tr>
<tr>
<td>
</td>
<td> 0.5V/Div～100V/Div (with ×10 probe)
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
<td> 80Vpp (by ×1 probe)
</td></tr>
<tr>
<td> Coupling
</td>
<td> DC
</td></tr>
<tr>
<td> Trig modes
</td>
<td> Auto, Normal, Single, None and Scan
</td></tr>
<tr>
<td> Functionalities:
</td>
<td> Automatic measurement: frequency, cycle, duty,
</td></tr>
<tr>
<td>
</td>
<td> V<sub>pp</sub>, V<sub>ram</sub>, V<sub>avg</sub> and DC voltage
</td></tr>
<tr>
<td>
</td>
<td> Precise vertical measurement with markers
</td></tr>
<tr>
<td>
</td>
<td> Precise horizontal measurement with markers
</td></tr>
<tr>
<td>
</td>
<td> Rising/falling edge trigger
</td></tr>
<tr>
<td>
</td>
<td> Trig level adjustable with indicator
</td></tr>
<tr>
<td>
</td>
<td> Trig sensitivity adjustable with indicator
</td></tr>
<tr>
<td>
</td>
<td> Hold/run feature
</td></tr>
<tr>
<td> Test signal
</td>
<td> Built-in 10Hz～1MHz (1-2-5 Step)
</td></tr>
<tr>
<td> Waveform storage
</td>
<td> SD card
</td></tr>
<tr>
<td> PC connection via USB
</td>
<td> as SD card reader
</td></tr></table>

##   Resources
---
*   Please visit our [DSO Nano forum](https://community.seeedstudio.com/discover.html?t=DSO) for prompt technical support and usage discussion.
*   [Official firmware, schematics and development documentation](http://code.google.com/p/dsonano/)

*   [Community firmware source git tree](http://gitorious.org/dsonano/dso-firmware) (for gcc and IAR)

*   [MOD your DSO nano UI](https://github.com/SeeedDocument/DSO_Nano/raw/master/res/DSOUI.pdf)

*   [Sewa Mobil Jakarta](http://www.awanirentcar.com), [Aksesoris mobil](http://kiosauto.com)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>