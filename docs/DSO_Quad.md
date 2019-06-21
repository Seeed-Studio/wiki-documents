---
name: DSO Quad
category: MakerPro
bzurl: https://www.seeedstudio.com/DSO-Quad-Aluminium-Alloy-Silver-p-1033.html?cPath=63_65
oldwikiname:  DSO Quad
prodimagename:  P10308912-1024x684.jpg
surveyurl: https://www.research.net/r/DSO_Quad
sku:   109990016
---
![](https://github.com/SeeedDocument/DSO_Quad/raw/master/img/P10308912-1024x684.jpg)

DSO Quad also known as DSO203 is a pocket size 4 channel digital oscilloscope for common electronic engineering tasks. It's based on ARM cortex M3 (STM32F103VCT6), providing 72MS/s sampling rate with integrated FPGA and high speed ADC. An internal 2MB USB disk can be used to store waveform captures, user applications and to upgrade firmware.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/DSO-Quad-Aluminium-Alloy-Silver-p-1033.html?cPath=63_65)

##   Features
---
*   Pocket size and light weight
*   Two 36MS/s analog channels, Upto 72MS/s if configured to single channel.**(Upgrade to Two 72MS/s analog channels, Upto 144MS/s if configured to single channel from .sys version v1.31)**
*   Two digital channels
*   Signal Generator
*   Various Triggering Option
*   Easy waveform storage
*   Firmware upgrade
*   User applications
*   Open source

**Source(s):** [Features support](http://www.downloadranking.com/privacypolicy.php)

##   Application Ideas
---
###   User applications

Ongoing projects:

*   GCC port with FFT, spectrogram and various fixes [by pmos69 and marcosin](http://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2957)

*   Alternative user interface [by gabonator1](http://forum.seeedstudio.com/viewtopic.php?f=10&amp;t=2362)

*   GCC port of the default firmware [by tmbinc](http://forum.seeedstudio.com/viewtopic.php?f=10&amp;t=2274)

*   Frequency response plotter [by jpa](http://forum.seeedstudio.com/viewtopic.php?f=10&amp;t=2485)

*   FFT example application [by gabonator1](http://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2098)

*   Logic analyzer [by jpa](http://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2861)

*   Pawn programming environment and various applications [by jpa](http://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=3239)

*   Port of SYS to gcc: [[1]](https://github.com/neilstockbridge/dsoquad-BIOS)

*   Tetris [by LinX](http://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2344)

<big>Idea Collection </big>

**Applications **

*   "Simple Mode" - where only the most basic functions are available to help people without experience.
*   ["Multimeter mode" - basic multimeter functions (AC/DC VOM, peak/rms/delta would be nice)](https://github.com/PetteriAimonen/QuadPawn/wiki/Advanced-Volt-Meter)

    *   Detailed at [https://github.com/PetteriAimonen/QuadPawn/wiki/Advanced-Volt-Meter](https://github.com/PetteriAimonen/QuadPawn/wiki/Advanced-Volt-Meter)
*   Protocol analysis/data capture - Serial, I2C, SPI, CAN
*   LCR (uH, uF and R) measurement capability - The inbuilt signal generator makes this a natural. Three methods exist, all requiring an external component(s) [Example](http://www.edn.com/design/test-and-measurement/4363759/Circuit-measures-capacitance-or-inductance)
*   Semiconductor Analyzer - Use the DAC to test and chart the voltage response of a diode / transistor (and simply identify components, such as transistor pinout and polarity)
*   RF spectrum analyzer
*   A 2D X-Y mode that plots the analog channels against each other on two axes with a digital channel optionally functioning as a "beam" enable/disable.
    *   [Something](https://forum.seeedstudio.com/) seems to exist? Not in APP2.50 yet.

*   A DMX Decoder/Analyser and generator (used in conjunction with an external RS485 IC) would make this a VERY useful gadget for theatre techs.

*   Television mode (analog TV) : Display frame/field/line (select field A/B) or line number. Display vectorscope diagram. Display content (ie: the TV image).

*   Synchronization with a second DSO Quad for a 4 channel analog/digital signal, perhaps similar USBscope50 [moved from HARDWARE]

use 'wave out' to generate a pulse/step when master unit triggers, use C/D as trigger for slave(s)

*   Create USB remote control software, such that if LCD breaks, you can still use it with PC software. [moved from HARDWARE]
*   Stream data to PC - Use PC as storage buffer, with additional processing power. A PC could decode I2C words and other protocols where the Quad wouldn't. [moved from HARDWARE]

*   White noise function - add to the functions generator

**Enhancements**

*   A spectrum analyzer displaying a view from a frequency/time perspective
*   Fast Fourier Transform, would be nice and easy for viewing spectrum data of a single signal.

**Hardware/Device-Oriented**

*   SDR (Software defined radio) note we only have USB full speed (12Mb/s)

*   Preamplifier 10x badly needed!!!
*   Add bezel buttons for easier to access menus.
*   Add 2 more analog channels, Perhaps via USB dongle.

*   Add port for expansion devices, such that and add-on device can offer more capabilities, like RF generation, or a function generator that is capable of larger amplitudes. In particular a +5v and 3.3v output would be useful.

**Other**

*   Service application for technical support staff. Could split the screen and display instructions like "Check if port 3, pin 5 has a signal, if not xyz might be broken". There could be a next button and for each step the text, the right timescale, trigger values etc. are selected
*   My phone is ARM based, perhaps make a USB version of this and an app for my phone, that allows my phone to be the display / insured touch screen display.
*   Simple math functions on both analog channels and generated signal.

*   Two totally ground separated input would enable measureing inputs, which are not the same ground referenced. (like in the Velleman two-channel personal scope)
*   Input overvoltage protection diode should be added to protect device form HV spikes

*   Oversampling and its software implementation could decrease noise, and increase effective bit depth
*   Special technique equivalent time sampling, could increase bandwidth for repetitive signals

*   Non-storage mode which constantly sweeps the visible area instead of storing into a huge offscreen buffer. I set the sample rate to 50ms in the current version (eg. to look at an audio signal) it only updates the screen once every few seconds, it should update continuously.

*   _Please add more ideas..._

See also information on application development for the DSO Quad

##   Specifications
---
<table >
<tr>
<td> Analog channel * 2                </td>
<td> [CH_A] [CH_B]
</td></tr>
<tr>
<td> Digital channel * 2               </td>
<td> [CH_C] [CH_D]
</td></tr>
<tr>
<td> Vertical Scale                    </td>
<td> 20mV-10V/div (1-2-5 step) on x1 probe / 200mV -100V/div (1-2-5 step) on x10 probe
</td></tr>
<tr>
<td> Vertical resolution               </td>
<td> 8 bit
</td></tr>
<tr>
<td> Input coupling                    </td>
<td> AC/DC
</td></tr>
<tr>
<td> Max input voltage                 </td>
<td> 80Vpp (x1 probe) / 400Vpp (x10 probe)
</td></tr>
<tr>
<td> Storage                           </td>
<td> 4K per channel / 8K on single channel
</td></tr>
<tr>
<td> Software trigger type             </td>
<td> edge, pulse, level (to be added)
</td></tr>
<tr>
<td> Hardware trigger type             </td>
<td> edge
</td></tr>
<tr>
<td> Trigger source                    </td>
<td> CH1/CH2/EXT
</td></tr>
<tr>
<td> Trigger mode                      </td>
<td> Auto, Normal, Single, SCAN, None
</td></tr>
<tr>
<td> Test Signal generator             </td>
<td> 10Hz to 8MHz 2.8Vpp Square Wave, duty cycle 10~90% adjustable / 10Hz to 20kHz 2.8Vpp Sine, Square, Sawtooth, Triangle wave
</td></tr>
<tr>
<td> Storage                           </td>
<td> internal 2MB USB disk, BMP, DAT file
</td></tr>
<tr>
<td> Auto measure                      </td>
<td> Vmax, Vmin, Vpp, Vavr, Vrms, Freq, Period, Pulse, Duty
</td></tr>
<tr>
<td> Cursor measurement                </td>
<td> Level, Voltage
</td></tr>
<tr>
<td> Display mode                      </td>
<td> CH1, CH2, EXT, CH1+CH2, CH1-CH2
</td></tr>
<tr>
<td> Sampling mode                     </td>
<td> real time
</td></tr>
<tr>
<td> Sampling rate                     </td>
<td> 30S/s - 72MS/s
</td></tr>
<tr>
<td> Power                             </td>
<td> LiPo battery
</td></tr>
<tr>
<td> Dimension                         </td>
<td> 98 * 60 * 14.5 (mm)
</td></tr>
<tr>
<td> Weight                            </td>
<td> 80g (without battery)
</td></tr>
<tr>
<td> Accesories within Pack            </td>
<td> 2 mcx osilloscope probe, 2 mcx digital probe
</td></tr></table>

##   Components
---
Please add links to core components data-sheets like

<table >
<tr>
<td> CPU                 </td>
<td> 72 Mhz - ARM 32-bit Cortex™-M3 CPU - STM32F103VC [[2]](http://www.st.com/internet/mcu/product/164492.jsp)
</td></tr>
<tr>
<td> FPGA                </td>
<td>ICE65F_VQ100 [[3]](http://www.siliconbluetech.com/media/downloads/iCE65L04DiCEDatasheet.pdf)
</td></tr>
<tr>
<td> TFT                 </td>
<td>
</td></tr>
<tr>
<td> ADC                 </td>
<td> AD9288-40 [[4]](http://www.analog.com/static/imported-files/data_sheets/AD9288.pdf)
</td></tr>
<tr>
<td> OP-Amps             </td>
<td> OPA2354 [[5]](http://www.datasheetcatalog.org/datasheet/texasinstruments/opa354.pdf)
</td></tr>
<tr>
<td> MOSFET-Switches     </td>
<td>
</td></tr>
<tr>
<td> USB-Storage         </td>
<td>
</td></tr>
<tr>
<td> (add more here)     </td>
<td>
</td></tr></table>

##   Caution
---
Improper operation of this device could result in physical injury and/or damage to the device. Note all necessary precautions, and be sure to read all documentation before using the device.


##   Upgrading firmware
---
Please note that this procedure currently only works under Windows. [Instructions For Linux are here](/DSO_Quad/#upgrading-firmware "DSO_Quad/#upgrading-firmware"). (2011-04-29) If we can get the upgrade disk to work on Linux and Mac, it would be quite easy to write an application to automate this process for less experienced users. It might even be possible to have the upgrade program check the hardware version to prevent uploading the wrong firmware.

###   Where to find firmware

Here is the [latest firmware](https://github.com/SeeedDocument/DSO_Quad/raw/master/res/PA1_V113.zip).

You could also [build the firmware from source](/DSO_Quad-Building_Firmware "DSO Quad:Building Firmware").

###   Version warning

**WARNING: **It is important that you use the firmware for your particular hardware version. The hardware version is shown on the splash screen when you boot the device. Ask for help in the forums if you can't determine your hardware version. If you upload the wrong firmware, you could brick the device.

###   Upgrade procedure

(Windows only) Connect the DSO Quad to your PC with a mini USB cable. Hold down the "&gt;||" (play/pause) button while turning on the device. Your device is now in firmware upgrade mode, and a USB disk should appear on your system. You copy the firmware files one at a time, and each time you copy a new file, the device will disconnect to prepare the file. When the disk reconnects, the extension of the file you uploaded will change (".rdy" means the upload worked properly).

The order that you upload the files in DOES matter. Start by uploading the .hex files (order unimportant). To upload the .BIN files, you need to first upload the corresponding .ADR file. This tells the device where to put the binary file (e.g. upload CFG_FPGA.ADR first, then upload xxxxFPGA.BIN immediately after). If you make a mistake, delete all the files and start again.

When you're finished uploading all the firmware files, turn off the device to complete the upgrade. When you boot the device again, your firmware versions should be updated. If you get an error at the splash screen, try uploading the firmware again, carefully following the instructions above.

More details and Linux instructions here: [DSO_Quad:Upgrading_Firmware](/DSO_Quad/#upgrading-firmware "DSO_Quad/#upgrading-firmware")

###   File Descriptions

<table>
<tr>
<th> File Type </th>
<th> Filename Format </th>
<th> Description
</th></tr>
<tr>
<td> FPGA File </td>
<td> xxxxFPGA.BIN </td>
<td> configuration data for the FPGA
</td></tr>
<tr>
<td> Logo File </td>
<td> logo_xxx.BIN </td>
<td> Create any 16 color 64*256 .BMP file (filesize = 46.9KB), and change the extension to .INF. This is the image displayed on the splash screen.
</td></tr>
<tr>
<td> System File </td>
<td> SYS_xxxx.hex </td>
<td> ??? (description needed)
</td></tr>
<tr>
<td> Application File </td>
<td> APP_xxxx.hex </td>
<td> ??? (description needed)
</td></tr>
<tr>
<td> Address File </td>
<td> xxxx.ADR </td>
<td> These files tell the device where to put the next .BIN file you upload. There is one for the FPGA file, and one for the LOGO file. The files are named so that you know which goes with which.
</td></tr></table>

**note:** as newer versions become available, these filenames may appear slightly different. The x's represent values that could change over time.

###   Memory layout

![](https://github.com/SeeedDocument/DSO_Quad/raw/master/img/DSOQuad-bug-2.jpg)

<table  cellpadding="1" cellspacing="1">
<tr>
<td> Begin
</td>
<td> End
</td>
<td> Size
</td>
<td> note
</td></tr>
<tr>
<td> 0x00000
</td>
<td> 0x03fff
</td>
<td> 16384
</td>
<td> DFU
</td></tr>
<tr>
<td> 0x04000
</td>
<td> 0x0bfff
</td>
<td> 32768
</td>
<td> SYS
</td></tr>
<tr>
<td> 0x0c000
</td>
<td> 0x13fff
</td>
<td> 32768
</td>
<td> APP1 (default)
</td></tr>
<tr>
<td> 0x14000
</td>
<td> 0x1bfff
</td>
<td> 32768
</td>
<td> APP2
</td></tr>
<tr>
<td> 0x1c000
</td>
<td> 0x23fff
</td>
<td> 32768
</td>
<td> APP3
</td></tr>
<tr>
<td> 0x24000
</td>
<td> 0x2bfff
</td>
<td> 32768
</td>
<td> APP4
</td></tr>
<tr>
<td> 0x2c000
</td>
<td> 0x3d7ff
</td>
<td> 71680
</td>
<td> FPGA bitstream (Datasheet says maximum size is 533KBit, so this is a bit large)
</td></tr>
<tr>
<td> 0x3d800
</td>
<td> 0x3ffff
</td>
<td> 10240
</td>
<td> Logo (bmp, 256x64, 4 bit)
</td></tr></table>

 Note: The flash base address is 0x08000000, but is mirrored by the chip at 0x00000000 when BOOT0 is low.


##   Related Pages

*   [DSO Quad:Calibration](http://wiki.seeedstudio.com/DSO_Quad-Calibration)

*   [DSO Quad:Upgrading Firmware](http://wiki.seeedstudio.com/DSO_Quad/#upgrading-firmware)

*   [DSO Quad:Beta HW](http://wiki.seeedstudio.com/DSO_Quad-Beta_HW)

##   External Links

1.  Seeedstudio Blog [[6]](http://www.seeedstudio.com/blog/tag/dso-quad/)

2.  More photos on flickr [[7]](http://www.flickr.com/photos/seeedstudio/tags/dsoquad/)

3.  [DS203 application in BMW inspection (Chinese, translated automatically in to english)](http://translate.google.gr/translate?js=n&amp;prev=_t&amp;hl=zh-CN&amp;ie=UTF-8&amp;layout=2&amp;eotf=1&amp;sl=zh-CN&amp;tl=en&amp;u=http%3A%2F%2Fwww.minidso.com%2Fforum%2Fviewtopic.php%3Ff%3D4%26t%3D54) [[Original page](http://www.minidso.com/forum/viewtopic.php?f=4&amp;t=54) ] - Some guys working for BMW inspected the car with a DSO203, besides the palm size and handy performance, DSO203 operates perfectly in inspecting the BWM bus:FlexRay.

##   Resources
---
- [Schematic and firmware (HW2.2 ~ HW2.72)](http://wiki.seeedstudio.com/DSO_Quad/#upgrading-firmware)

- [Discussion board with resouces for HW2.6](http://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1929)

- [DS203_yijian_app_user_manual.rar‎](https://github.com/SeeedDocument/DSO_Quad/raw/master/res/DS203_yijian_app_user_manual.rar)

- [DSO Quad Manual](https://github.com/SeeedDocument/DSO_Quad/raw/master/res/DSO203_user_Guide_2.pdf)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>