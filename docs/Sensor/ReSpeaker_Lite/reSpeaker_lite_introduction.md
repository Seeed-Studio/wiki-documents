---
description: ReSpeaker Lite
title: Get Started
keywords:
- ReSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reSpeaker_lite_introduction
last_update:
  date: 6/28/2024
  author: Jessie
---

## Introduction


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/intro.png" alt="pir" width={800} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>



ReSpeaker Lite is a plug-and-play modular voice interface to hack things around you. Let you interact with your home appliances, your plant, your office, your internet-equipped devices, or any other things in your daily life, all by your voice. The ReSpeaker project provides hardware components and software libraries to build voice-enabled device.

## Features

* **USB Plug-and-Play Convenience**： Support UAC 2.0

* **Audio Versatility**: Supports both 5W speaker and 3.5mm audio jack

* **Intuitive Privacy Controls**: Take control of your privacy with the accessible MUTE and USER buttons

* **Smart Home Ready**: Fully compatible with Home Assistant through the XIAO controller

* **Built-in audio processing algorithms**:
 Speech algorithms and features<br/>
 Voice Activity Detection<br/>
 Noise Suppression<br/>
 De-reverberation<br/>
 Acoustic Echo Cancellation<br/>

## Specification


## Hardware Overview

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/hardware.png" alt="pir" width={500} height="auto" /></p>


## Get Started

### Update firmware


* **Install DFU Util**

[dfu-util](http://dfu-util.sourceforge.net/) is a command line tool for Device Firmware Upgrade via USB port.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="win" label="Windows">

* Download the latest version of [dfu-util](http://dfu-util.sourceforge.net/releases) to your local system, e.g., under `D:\dfu-util`.

* Install `dfu-util.exe`

* Append the path of the `dfu-util.exe` to the system environment variable `Path`: "My Computer" > "Properties" > "Advanced" > "Environment Variables" > "Path". 

Please note that paths in the variable `Path` are seperated by semicolon `;`. This will allow dfu-util to be executed globally in command prompt.

* Install the [driver](https://zadig.akeo.ie/)


</TabItem>

<TabItem value="mac" label="MacOS">

Use "brew" to install or follow the instructions from [the official website](http://dfu-util.sourceforge.net/).

* Install [brew](http://brew.sh/) or start the Terminal to install it directly:

ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

* In the Teminal, type this command to install the dfu-util:

```
brew install dfu-util
```

* Add the path of `dfu-util` to `PATH`:
```
export PATH=$PATH:PATH_TO_DFU_UTIL
```

This will allow dfu-util to be executed globally in command prompt.


</TabItem>

<TabItem value="lin" label="Linux">

* Download the [dfu-util](http://dfu-util.sourceforge.net/releases/dfu-util-0.8-binaries/linux-i386/) or use the package manager of your distribution to get the latest version:

```
$ sudo apt-get install dfu-util
```
* Add UDEV rule:

```
sudo nano /etc/udev/rules.d/77-mm-usb-device-blacklist.rules
```

Simply add this single line:

ATTRS{idProduct}=="d058", ATTRS{idVendor}=="2b04", MODE="664", GROUP="plugdev"

If it prompts "Cannot open DFU device", just reboot to try again.
</TabItem>

</Tabs>




* **Flash Firmware**


* Connect the ReSpeaker board to your PC.

* Run the following command:
```
dfu-util -e -a 1 -D ffva_ua_v2.0.3.bin
```
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/flash-done.png" alt="pir" width={500} height="auto" /></p>

:::tip
After flashing is completed, please restart the board.
:::







### Tuning

For Linux/Mac/Windows: We can configure some parameters of built-in algorithms.

```
git clone https://github.com/respeaker/usb_4_mic_array.git
cd usb_4_mic_array
python tuning.py -p
```



<details>

<summary>Parameters of built-in algorithms</summary>

```
name			type	max	min	r/w	info
-------------------------------
AECFREEZEONOFF  	int	1	0	rw	Adaptive Echo Canceler updates inhibit.
                                                            0 = Adaptation enabled
                                                            1 = Freeze adaptation, filter only
AECNORM         	float	16	0.25	rw	Limit on norm of AEC filter coefficients
AECPATHCHANGE   	int	1	0	ro	AEC Path Change Detection.
                                                            0 = false (no path change detected)
                                                            1 = true (path change detected)
AECSILENCELEVEL 	float	1	1e-09	rw	Threshold for signal detection in AEC [-inf .. 0] dBov (Default: -80dBov = 10log10(1x10-8))
AECSILENCEMODE  	int	1	0	ro	AEC far-end silence detection status. 
                                                            0 = false (signal detected) 
                                                            1 = true (silence detected)
AGCDESIREDLEVEL 	float	0.99	1e-08	rw	Target power level of the output signal. 
                                                            [-inf .. 0] dBov (default: -23dBov = 10log10(0.005))
AGCGAIN         	float	1000	1	rw	Current AGC gain factor. 
                                                            [0 .. 60] dB (default: 0.0dB = 20log10(1.0))
AGCMAXGAIN      	float	1000	1	rw	Maximum AGC gain factor. 
                                                            [0 .. 60] dB (default 30dB = 20log10(31.6))
AGCONOFF        	int	1	0	rw	Automatic Gain Control. 
                                                            0 = OFF 
                                                            1 = ON
AGCTIME         	float	1	0.1	rw	Ramps-up / down time-constant in seconds.
CNIONOFF        	int	1	0	rw	Comfort Noise Insertion.
                                                            0 = OFF
                                                            1 = ON
DOAANGLE        	int	359	0	ro	DOA angle. Current value. Orientation depends on build configuration.
ECHOONOFF       	int	1	0	rw	Echo suppression.
                                                            0 = OFF
                                                            1 = ON
FREEZEONOFF     	int	1	0	rw	Adaptive beamformer updates.
                                                            0 = Adaptation enabled
                                                            1 = Freeze adaptation, filter only
FSBPATHCHANGE   	int	1	0	ro	FSB Path Change Detection.
                                                            0 = false (no path change detected)
                                                            1 = true (path change detected)
FSBUPDATED      	int	1	0	ro	FSB Update Decision.
                                                            0 = false (FSB was not updated)
                                                            1 = true (FSB was updated)
GAMMAVAD_SR     	float	1000	0	rw	Set the threshold for voice activity detection.
                                                            [-inf .. 60] dB (default: 3.5dB 20log10(1.5))
GAMMA_E         	float	3	0	rw	Over-subtraction factor of echo (direct and early components). min .. max attenuation
GAMMA_ENL       	float	5	0	rw	Over-subtraction factor of non-linear echo. min .. max attenuation
GAMMA_ETAIL     	float	3	0	rw	Over-subtraction factor of echo (tail components). min .. max attenuation
GAMMA_NN        	float	3	0	rw	Over-subtraction factor of non- stationary noise. min .. max attenuation
GAMMA_NN_SR     	float	3	0	rw	Over-subtraction factor of non-stationary noise for ASR. 
                                                            [0.0 .. 3.0] (default: 1.1)
GAMMA_NS        	float	3	0	rw	Over-subtraction factor of stationary noise. min .. max attenuation
GAMMA_NS_SR     	float	3	0	rw	Over-subtraction factor of stationary noise for ASR. 
                                                            [0.0 .. 3.0] (default: 1.0)
HPFONOFF        	int	3	0	rw	High-pass Filter on microphone signals.
                                                            0 = OFF
                                                            1 = ON - 70 Hz cut-off
                                                            2 = ON - 125 Hz cut-off
                                                            3 = ON - 180 Hz cut-off
MIN_NN          	float	1	0	rw	Gain-floor for non-stationary noise suppression.
                                                            [-inf .. 0] dB (default: -10dB = 20log10(0.3))
MIN_NN_SR       	float	1	0	rw	Gain-floor for non-stationary noise suppression for ASR.
                                                            [-inf .. 0] dB (default: -10dB = 20log10(0.3))
MIN_NS          	float	1	0	rw	Gain-floor for stationary noise suppression.
                                                            [-inf .. 0] dB (default: -16dB = 20log10(0.15))
MIN_NS_SR       	float	1	0	rw	Gain-floor for stationary noise suppression for ASR.
                                                            [-inf .. 0] dB (default: -16dB = 20log10(0.15))
NLAEC_MODE      	int	2	0	rw	Non-Linear AEC training mode.
                                                            0 = OFF
                                                            1 = ON - phase 1
                                                            2 = ON - phase 2
NLATTENONOFF    	int	1	0	rw	Non-Linear echo attenuation.
                                                            0 = OFF
                                                            1 = ON
NONSTATNOISEONOFF	int	1	0	rw	Non-stationary noise suppression.
                                                            0 = OFF
                                                            1 = ON
NONSTATNOISEONOFF_SR	int	1	0	rw	Non-stationary noise suppression for ASR.
                                                            0 = OFF
                                                            1 = ON
RT60            	float	0.9	0.25	ro	Current RT60 estimate in seconds
RT60ONOFF       	int	1	0	rw	RT60 Estimation for AES. 0 = OFF 1 = ON
SPEECHDETECTED  	int	1	0	ro	Speech detection status.
                                                            0 = false (no speech detected)
                                                            1 = true (speech detected)
STATNOISEONOFF  	int	1	0	rw	Stationary noise suppression.
                                                            0 = OFF
                                                            1 = ON
STATNOISEONOFF_SR	int	1	0	rw	Stationary noise suppression for ASR.
                                                            0 = OFF
                                                            1 = ON
TRANSIENTONOFF  	int	1	0	rw	Transient echo suppression.
                                                            0 = OFF
                                                            1 = ON
VOICEACTIVITY   	int	1	0	ro	VAD voice activity status.
                                                            0 = false (no voice activity)
                                                            1 = true (voice activity)
```

</details>

Example, to turn off the Automatic Gain Control (AGC):
```
sudo python tuning.py AGCONOFF 0
```




### AEC


<audio controls="controls">
  <source type="audio/wav" src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/aec.wav"></source>
</audio>


### NS


<audio controls="controls">
  <source type="audio/wav" src="https://files.seeedstudio.com/wiki/SenseCAP/respeaker/ns.wav"></source>
</audio>



### VAD


* Step 1. Create a vad.py with below code:

```cpp
from tuning import Tuning
import usb.core
import usb.util
import time

dev = usb.core.find(idVendor=0x2886, idProduct=0x0018)
#print dev
if dev:
    Mic_tuning = Tuning(dev)
    print Mic_tuning.is_voice()
    while True:
        try:
            print Mic_tuning.is_voice()
            time.sleep(1)
        except KeyboardInterrupt:
            break
```

Run:
```
sudo python vad.py
```

* Step 2. We will see the result below, when there is a voice detected, the value should be 1.

```
jessie@JessiedeAir usb_4_mic_array % sudo python3 vad.py
0
0
0
1
0
1
0
```


## Resource

[Respeaker Lite](https://github.com/respeaker/usb_4_mic_array)