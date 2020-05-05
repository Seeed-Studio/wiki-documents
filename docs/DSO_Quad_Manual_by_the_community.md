---
name: DSO Quad
category: MakerPro
bzurl: https://www.seeedstudio.com/DSO-Quad-Aluminium-Alloy-Silver-p-1033.html?cPath=63_65
oldwikiname:  DSO Quad
prodimagename:  P10308912-1024x684.jpg
surveyurl: https://www.research.net/r/DSO_Quad
sku:   109990016
---
![](https://files.seeedstudio.com/wiki/DSO_Quad/img/P10308912-1024x684.jpg)

DSO Quad also known as DSO203 is a pocket size 4 channel digital oscilloscope for common electronic engineering tasks. It's based on ARM cortex M3 (STM32F103VCT6), providing 72MS/s sampling rate with integrated FPGA and high speed ADC. An internal 2MB USB disk can be used to store waveform captures, user applications and to upgrade firmware.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/DSO-Quad-Aluminium-Alloy-Silver-p-1033.html?cPath=63_65)

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

*   GCC port with FFT, spectrogram and various fixes [by pmos69 and marcosin](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2957)

*   Alternative user interface [by gabonator1](https://forum.seeedstudio.com/viewtopic.php?f=10&amp;t=2362)

*   GCC port of the default firmware [by tmbinc](https://forum.seeedstudio.com/viewtopic.php?f=10&amp;t=2274)

*   Frequency response plotter [by jpa](https://forum.seeedstudio.com/viewtopic.php?f=10&amp;t=2485)

*   FFT example application [by gabonator1](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2098)

*   Logic analyzer [by jpa](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2861)

*   Pawn programming environment and various applications [by jpa](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=3239)

*   Port of SYS to gcc: [[1]](https://github.com/neilstockbridge/dsoquad-BIOS)

*   Tetris [by LinX](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2344)

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
---
name: DSO Quad
category: MakerPro
bzurl: https://www.seeedstudio.com/DSO-Quad-Aluminium-Alloy-Silver-p-1033.html?cPath=63_65
oldwikiname:  DSO Quad
prodimagename:  P10308912-1024x684.jpg
surveyurl: https://www.research.net/r/DSO_Quad
sku:   109990016
---
![](https://files.seeedstudio.com/wiki/DSO_Quad/img/P10308912-1024x684.jpg)

DSO Quad also known as DSO203 is a pocket size 4 channel digital oscilloscope for common electronic engineering tasks. It's based on ARM cortex M3 (STM32F103VCT6), providing 72MS/s sampling rate with integrated FPGA and high speed ADC. An internal 2MB USB disk can be used to store waveform captures, user applications and to upgrade firmware.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/DSO-Quad-Aluminium-Alloy-Silver-p-1033.html?cPath=63_65)

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

*   GCC port with FFT, spectrogram and various fixes [by pmos69 and marcosin](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2957)

*   Alternative user interface [by gabonator1](https://forum.seeedstudio.com/viewtopic.php?f=10&amp;t=2362)

*   GCC port of the default firmware [by tmbinc](https://forum.seeedstudio.com/viewtopic.php?f=10&amp;t=2274)

*   Frequency response plotter [by jpa](https://forum.seeedstudio.com/viewtopic.php?f=10&amp;t=2485)

*   FFT example application [by gabonator1](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2098)

*   Logic analyzer [by jpa](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2861)

*   Pawn programming environment and various applications [by jpa](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=3239)

*   Port of SYS to gcc: [[1]](https://github.com/neilstockbridge/dsoquad-BIOS)

*   Tetris [by LinX](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2344)

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
---
name: DSO Quad
category: MakerPro
bzurl: https://www.seeedstudio.com/DSO-Quad-Aluminium-Alloy-Silver-p-1033.html?cPath=63_65
oldwikiname:  DSO Quad
prodimagename:  P10308912-1024x684.jpg
surveyurl: https://www.research.net/r/DSO_Quad
sku:   109990016
---
![](https://files.seeedstudio.com/wiki/DSO_Quad/img/P10308912-1024x684.jpg)

DSO Quad also known as DSO203 is a pocket size 4 channel digital oscilloscope for common electronic engineering tasks. It's based on ARM cortex M3 (STM32F103VCT6), providing 72MS/s sampling rate with integrated FPGA and high speed ADC. An internal 2MB USB disk can be used to store waveform captures, user applications and to upgrade firmware.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/DSO-Quad-Aluminium-Alloy-Silver-p-1033.html?cPath=63_65)

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

*   GCC port with FFT, spectrogram and various fixes [by pmos69 and marcosin](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2957)

*   Alternative user interface [by gabonator1](https://forum.seeedstudio.com/viewtopic.php?f=10&amp;t=2362)

*   GCC port of the default firmware [by tmbinc](https://forum.seeedstudio.com/viewtopic.php?f=10&amp;t=2274)

*   Frequency response plotter [by jpa](https://forum.seeedstudio.com/viewtopic.php?f=10&amp;t=2485)

*   FFT example application [by gabonator1](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2098)

*   Logic analyzer [by jpa](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2861)

*   Pawn programming environment and various applications [by jpa](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=3239)

*   Port of SYS to gcc: [[1]](https://github.com/neilstockbridge/dsoquad-BIOS)

*   Tetris [by LinX](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2344)

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
---
name: DSO Quad
category: MakerPro
bzurl: https://www.seeedstudio.com/DSO-Quad-Aluminium-Alloy-Silver-p-1033.html?cPath=63_65
oldwikiname:  DSO Quad
prodimagename:  P10308912-1024x684.jpg
surveyurl: https://www.research.net/r/DSO_Quad
sku:   109990016
---
![](https://files.seeedstudio.com/wiki/DSO_Quad/img/P10308912-1024x684.jpg)

DSO Quad also known as DSO203 is a pocket size 4 channel digital oscilloscope for common electronic engineering tasks. It's based on ARM cortex M3 (STM32F103VCT6), providing 72MS/s sampling rate with integrated FPGA and high speed ADC. An internal 2MB USB disk can be used to store waveform captures, user applications and to upgrade firmware.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/DSO-Quad-Aluminium-Alloy-Silver-p-1033.html?cPath=63_65)

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

*   GCC port with FFT, spectrogram and various fixes [by pmos69 and marcosin](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2957)

*   Alternative user interface [by gabonator1](https://forum.seeedstudio.com/viewtopic.php?f=10&amp;t=2362)

*   GCC port of the default firmware [by tmbinc](https://forum.seeedstudio.com/viewtopic.php?f=10&amp;t=2274)

*   Frequency response plotter [by jpa](https://forum.seeedstudio.com/viewtopic.php?f=10&amp;t=2485)

*   FFT example application [by gabonator1](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2098)

*   Logic analyzer [by jpa](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2861)

*   Pawn programming environment and various applications [by jpa](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=3239)

*   Port of SYS to gcc: [[1]](https://github.com/neilstockbridge/dsoquad-BIOS)

*   Tetris [by LinX](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2344)

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
---
name: DSO Quad
category: MakerPro
bzurl: https://www.seeedstudio.com/DSO-Quad-Aluminium-Alloy-Silver-p-1033.html?cPath=63_65
oldwikiname:  DSO Quad
prodimagename:  P10308912-1024x684.jpg
surveyurl: https://www.research.net/r/DSO_Quad
sku:   109990016
---
![](https://files.seeedstudio.com/wiki/DSO_Quad/img/P10308912-1024x684.jpg)

DSO Quad also known as DSO203 is a pocket size 4 channel digital oscilloscope for common electronic engineering tasks. It's based on ARM cortex M3 (STM32F103VCT6), providing 72MS/s sampling rate with integrated FPGA and high speed ADC. An internal 2MB USB disk can be used to store waveform captures, user applications and to upgrade firmware.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/DSO-Quad-Aluminium-Alloy-Silver-p-1033.html?cPath=63_65)

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

*   GCC port with FFT, spectrogram and various fixes [by pmos69 and marcosin](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2957)

*   Alternative user interface [by gabonator1](https://forum.seeedstudio.com/viewtopic.php?f=10&amp;t=2362)

*   GCC port of the default firmware [by tmbinc](https://forum.seeedstudio.com/viewtopic.php?f=10&amp;t=2274)

*   Frequency response plotter [by jpa](https://forum.seeedstudio.com/viewtopic.php?f=10&amp;t=2485)

*   FFT example application [by gabonator1](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2098)

*   Logic analyzer [by jpa](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2861)

*   Pawn programming environment and various applications [by jpa](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=3239)

*   Port of SYS to gcc: [[1]](https://github.com/neilstockbridge/dsoquad-BIOS)

*   Tetris [by LinX](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2344)

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
---
name: DSO Quad
category: MakerPro
bzurl: https://www.seeedstudio.com/DSO-Quad-Aluminium-Alloy-Silver-p-1033.html?cPath=63_65
oldwikiname:  DSO Quad
prodimagename:  P10308912-1024x684.jpg
surveyurl: https://www.research.net/r/DSO_Quad
sku:   109990016
---
![](https://files.seeedstudio.com/wiki/DSO_Quad/img/P10308912-1024x684.jpg)

DSO Quad also known as DSO203 is a pocket size 4 channel digital oscilloscope for common electronic engineering tasks. It's based on ARM cortex M3 (STM32F103VCT6), providing 72MS/s sampling rate with integrated FPGA and high speed ADC. An internal 2MB USB disk can be used to store waveform captures, user applications and to upgrade firmware.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/DSO-Quad-Aluminium-Alloy-Silver-p-1033.html?cPath=63_65)

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

*   GCC port with FFT, spectrogram and various fixes [by pmos69 and marcosin](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2957)

*   Alternative user interface [by gabonator1](https://forum.seeedstudio.com/viewtopic.php?f=10&amp;t=2362)

*   GCC port of the default firmware [by tmbinc](https://forum.seeedstudio.com/viewtopic.php?f=10&amp;t=2274)

*   Frequency response plotter [by jpa](https://forum.seeedstudio.com/viewtopic.php?f=10&amp;t=2485)

*   FFT example application [by gabonator1](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2098)

*   Logic analyzer [by jpa](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2861)

*   Pawn programming environment and various applications [by jpa](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=3239)

*   Port of SYS to gcc: [[1]](https://github.com/neilstockbridge/dsoquad-BIOS)

*   Tetris [by LinX](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2344)

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
---
name: DSO Quad Manual (by the community)
category: MakerPro
bzurl:
oldwikiname:  DSO Quad Manual (by the community)
prodimagename:  P10308912-1024x684.jpg
surveyurl: https://www.research.net/r/DSO_Quad_Manual_by_the_community
sku:
---
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/P10308912-1024x684.jpg)

The DSO Quad is a pocket oscilloscope. It has lots of great features in a small package:

*   2 Analog Inputs at 72 MS/s (10[Vpp](#Definitions) using the [x1 probe](#Definitions), 80[Vpp](#Definitions) is possible with an upgrade).

*   2 Digital Inputs at (3.3V max, diode designed to permit higher voltages needs an upgrade). Digital probes not included.

*   Signal Generator Output, 10 Hz-20kHz analog or 10 Hz-100kHz digital (8 MHz digital output is possible with an upgrade).

*   Auto, Normal, Single, Scan, and free-running triggering modes.

If this is your first time using the DSO Quad, please read the [Getting Started](#getting-started) section.

The [Specifications](#Specifications) section has all the details about the DSO Quad's capabilities.

[&gt; Download this manual as a PDF &lt;](#PDF)

_**Note: The DSO Quad is currently a BETA product. This means significant hardware and software issues still exist in the product. Every attempt has been made to accurately describe the current product in this manual. However, this manual comes with ABSOLUTELY NO WARRANTY.**_

##  Why Another Manual?

Seeedstudio's official manual can be downloaded [here](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1929). I started this page as a project in my spare time to answer all the questions I had when I first got my DSO Quad.

This manual may help if you're wondering:

1.  How do I install the battery? (I'm concerned my battery might be backwards! How can I be sure?)

2.  How do I open the back cover?

3.  How do I power on the unit?

4.  What do the charging indicator LEDs mean?

5.  How do I upgrade the firmware?

6.  How do I test the unit?

7.  What are the buttons for?

I felt like this all belongs in one place -- a manual -- and I just kept working on it until it is what you see now.

###  Other Seeedstudio Documentation

*   [DSO Quad Manual (official wiki page)](/DSO_Quad "DSO Quad")

*   [DSO Quad Building Firmware](/DSO_Quad-Building_Firmware "DSO Quad Building Firmware")

*   [DSO Quad battery installation tutorial with video](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2074)

##  Getting Started

When you receive the DSO Quad, you should have something like this:

![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_plastic_cover.jpg)
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_usb_cable.jpg)
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_pouch.jpg)
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_probes.jpg)
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_battery.jpg) (This is the Lithium-Polymer battery, still in its static bag)

###  Install the Battery

1.  First, be sure the DSO Quad on/off switch is **off**:
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Turn_off.jpg)
</dd></dl>

2.  Hold the DSO Quad so that you are looking at the text on the back face, right-side up as shown:
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Back_right_side_up.jpg)
</dd></dl>

3.  Slide the back face to the left:
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Back_slide_to_left.jpg)
</dd></dl>

4.  The back face should then fall off easily, revealing the empty battery cavity:
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_back_removed.jpg)
</dd><dd> **Note:** There are [reports of reverse-polarity batteries.](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1911) _**This will destroy your charging circuit if not corrected.**_ Please carefully check for the proper alignment of red and black wires.
</dd></dl>

5.  Check that the red wire is closest to the outside of the DSO Quad. The black wire is on the inside.
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_observe_polarity.jpg)
</dd></dl>

6.  If your battery was connected incorrectly, _**do not plug it in!**_ Go to [this forum thread](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1911) for help.

7.  If your battery is connected correctly, thread the wires through the clips on the left side:

8.  Slide the back cover into place.
Hold the left side tightly while sliding the cover to the right. See [http://www.flickr.com/photos/seeedstudio/5807556545/in/photostream/](http://www.flickr.com/photos/seeedstudio/5807556545/in/photostream/) for a demonstration.
</dd></dl>

9.  <div class="thumb tright"><div class="thumbinner" style="width:202px;">![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_red_charging_led.jpg) <div class="thumbcaption">Red "charging" LED</div></div></div> Turn the DSO Quad upright and connect the USB cable. You should see the red "charging" LED. Please charge your DSO Quad for at least 1 hour the first time before using it.

10.  Please [update your firmware](#Firmware_Updates) to the latest version.

###  LED Indicators and Power Modes

The DSO Quad is charged by connecting the USB cable. The LTC4054 battery controller [will not charge the battery](https://forum.seeedstudio.com/viewtopic.php?p=6922#p6922) while the power switch is on. This is best explained in a table:

<table>
<tr>
<th> Power Switch
</th>
<th> USB Cable
</th>
<th> Battery
</th>
<th> What you see
</th>
<th> DSO Quad Power Mode
</th></tr>
<tr>
<td> OFF
</td>
<td> Disconnected
</td>
<td> Idle
</td>
<td> LEDs off, display off
</td>
<td> Powered off
</td></tr>
<tr>
<td> ON
</td>
<td> Disconnected
</td>
<td> Draining
</td>
<td> LEDs off, display on
</td>
<td> Normal (power on)
</td></tr>
<tr>
<td> ON
</td>
<td> Disconnected
</td>
<td> Draining
</td>
<td> Green LED on, display off
</td>
<td> Power save mode: after 600 seconds of no button presses, the screen is blanked
</td></tr>
<tr>
<td> ON
</td>
<td> Disconnected
</td>
<td> Empty
</td>
<td> LEDs off, display off
</td>
<td> No battery, power off. Please connect the USB cable: battery needs to be charged
</td></tr>
<tr>
<td> ON
</td>
<td> Connected to 5V/500mA USB
</td>
<td> Idle
</td>
<td> Red LED on, display on
</td>
<td> Powered on, [battery will not charge while on](https://forum.seeedstudio.com/viewtopic.php?p=6922#p6922)
</td></tr>
<tr>
<td> OFF
</td>
<td> Connected to 5V/500mA USB
</td>
<td> Charging
</td>
<td> Red LED on, display off
</td>
<td> Powered off, battery charging
</td></tr>
<tr>
<td> OFF
</td>
<td> USB port is not supplying power*
</td>
<td> Idle
</td>
<td> LEDs off, display off
</td>
<td> Powered off, unable to charge
</td></tr>
<tr>
<td> OFF
</td>
<td> Connected to 5V/500mA USB
</td>
<td> Full
</td>
<td> LEDs off, display off
</td>
<td> Powered off, battery is full
</td></tr>
<tr>
<td> OFF
</td>
<td> Connected to 5V/500mA USB
</td>
<td> No battery installed
</td>
<td> Red LED on dimly, display off
</td>
<td> Powered off, no battery installed
</td></tr></table>

*** USB port is not supplying power:** if your DSO quad is not charging, it may be the USB port. Here are some troubleshooting tips:

1.  Please be sure the USB cable is correctly connected.

2.  Please try a different port on the computer. Some USB hubs cannot supply enough power, especially if several devices are connected.

3.  Please try a different port on another computer. Some laptops may turn off power to USB ports when in sleep mode.

###  Firmware Updates

There are several versions of the DSO Quad, and the firmware for each is different. Please carefully identify your hardware. When you first turn on the DSO Quad, look for the hardware version. Compare what you see to the following table:

Check here for the latest firmware: [DSO Quad Building Firmware](/DSO_Quad-Building_Firmware "DSO Quad Building Firmware")

<table>
<tr>
<th> Boot Screen
</th>
<th> Hardware Ver
</th>
<th> Factory FW
</th>
<th> Latest FW Update
</th>
<th> Notes
</th></tr>
<tr>
<td>
</td>
<td> 2.7
</td>
<td> APP 2.53

SYS 1.52

FPGA 2.61

</td>
<td> APP P1.00

SYS B1.52

FPGA 2.61

</td>
<td> Seeed Studio ships this version.

This firmware has a much better GUI!

(Also, the factory firmware on 2.7 freezed a lot, so this firmware is highly recommended)

![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_hw_ver_26.jpg)
</td>
<td> 2.6
</td>
<td> APP 2.33

SYS 1.33
FPGA 2.5

</td>
<td> APP 2.53

SYS 1.52
FPGA 2.61

Seeed Studio shipped this version

 ![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_hw_ver_22.jpg)

 2.2
 APP

SYS 1.02

</td>
<td> [APP 2.34?](https://forum.seeedstudio.com/viewtopic.php?p=6760#p6760)

[SYS 1.32?](https://forum.seeedstudio.com/viewtopic.php?p=6760#p6760)

</td>
<td> Ver 2.2 devices were only given to Beta testers, with a [free upgrade to 2.6](http://ourdev.cn/bbs/bbs_content_all.jsp?bbs_sn=4138839). This version will not receive any further software updates.
</td></tr></table>

You might find more info on [https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1929](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1929).

The firmware source code is available [here](http://github.com/Seeed-Studio/DSOQuad_SourceCode). **Note:** Seeedstudio does not recommend you create your own FPGA firmware, because of the risk of damaging the hardware.

###  Calibration

The DSO Quad requires calibration before the first use, and should be re-calibrated after extended use. The two parameters to be calibrated are gain and bias (DC offset).

####  Old GUI (app version 2.x)

1.  Bias Calibration

    1.  Hold the button marked with a square for 2 seconds, and the calibration "spreadsheet" appears

        2.  Dial the values to 0 in each box. Move up/down by rotating the right-most "navigation" switch left/right. Move columns by clicking in the right-most "navigation" switch.

        3.  Cancel the calibration by leaving some entries unchanged. Or, save the calibration after calibrating at each level. Follow the instructions an the top.

2.  Gain Calibration

    1.  (Look at the regular manual for this)

####  New GUI (hardware 2.7, app version P1.00 and above)

(i'm not sure whats going on with the version numbering, perhaps its a beta or preview, but its not clear to me)

1.  Bias Calibration

    1.  Press square button one time

        2.  Select "Calibrat" in the menu.

        3.  Follow the instructions

More details see here: [DSO Quad:Calibration](/DSO_Quad-Calibration "DSO Quad:Calibration")

Note: I noticed the calibration is different when you connect or disconnect a powersupply to the micro USB connection. So calibrate it the way you will use it the most.

1.  Gain Calibration

    1.  (Look at the regular manual for this)

##  Using The DSO Quad

The most important switches are the two rotating switches on the right. The right-most is the "navigation" switch for changing which main part of the UI is currently blinking. The other switch is the "submenu" switch used to change Volts/div, microseconds, trigger positions, etc.

Each of these switches can be rotated left or right, and clicked in like a push button.

The main screen has these blocks:

<table>
<tr>
<th> Title
</th>
<th> Description of block
</th></tr>
<tr>
<td> RUN/HOLD
</td>
<td> Pausing the scope, and start running again
</td></tr>
<tr>
<td> CH(A)
</td>
<td> cyan colored plot and measurements
</td></tr>
<tr>
<td> CH(B)
</td>
<td> yellow colored plot and measurements
</td></tr>
<tr>
<td> CH(C)
</td>
<td> purple colored plot and measurements
</td></tr>
<tr>
<td> CH(D)
</td>
<td> green colored plot and measurements
</td></tr>
<tr>
<td> SCAN
</td>
<td> brown colored SCAN/AUTO/NORM (NORMAL)/SINGL (SINGLE)/NONE trigger mode
</td></tr>
<tr>
<td> Signal Generator
</td>
<td> blue colored digital and analog "wave out"
</td></tr>
<tr>
<td> Trigger
</td>
<td> All trigger levels (for CH(A) through CH(D)) and the triggering mode
</td></tr>
<tr>
<td> YPOS
</td>
<td> YPOS
</td></tr>
<tr>
<td> V1
</td>
<td> V1
</td></tr>
<tr>
<td> V2
</td>
<td> V2
</td></tr>
<tr>
<td> Horizontal scroller
</td>
<td> Horizontal scroller
</td></tr>
<tr>
<td> T1
</td>
<td> T1
</td></tr>
<tr>
<td> T2
</td>
<td> T2
</td></tr>
<tr>
<td> XPOS
</td>
<td> XPOS
</td></tr>
<tr>
<td> Delta V
</td>
<td> difference between V1 and V2 markers
</td></tr>
<tr>
<td> Delta T
</td>
<td> difference between T1 and T2 markers
</td></tr>
<tr>
<td> live measurements
</td>
<td> customizable measurement read-outs. For example, Vbt, FPS, Vdc, RMS, Max, Min, Vpp, FRQ, DUT, CIR, TL, TH
</td></tr></table>

###  Measuring Voltage

Vmax, Vmin, Vpp, Vdc (average V), Vrms (sqrt(average(V*V)))

##  Specifications

Sampling 0.1 usec - 1 sec

Digital input bandwidth [This forum thread](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1978)

###  Definitions

<table>
<tr>
<th> Vpp
</th>
<td> Volts peak-to-peak
</td></tr>
<tr>
<th> x1 probe
</th>
<td> Measures low voltage signals. Do not exceed 80Vpp or you may damage your DSO Quad. (Can be used as a low impedance probe.)
</td></tr>
<tr>
<th> x10 probe
</th>
<td> Measures high voltage signals. Do not exceed 400Vpp or you may damage your DSO Quad. (Can be used as a high impedance probe.)

Note that the values on screen are 1/10 of the input, so please multiply by 10 in your head.

</td></tr>
<tr>
<th> ...
</th>
<td> ...
</td></tr></table>

###  Requirements

The DSO Quad can be charged from any normal USB port. Please charge your DSO Quad for at least 1 hour before using it.

The DSO Quad firmware does a rapid USB disconnect-reconnect to do a "live" firmware update. This method is incompatible with Mac OS X or Linux. Please see [this forum thread](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1934) for more information.  See [DSO Quad Building Firmware](/DSO_Quad-Building_Firmware "DSO Quad Building Firmware") for how to upgrade firmware from Linux.

## Tech Support
Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>