---
name: ReSpeaker 2-Mics Pi HAT
category: ReSpeaker
bzurl: https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT-p-2874.html
prodimagename: 2mics-zero-high-res.jpg
surveyurl: https://www.research.net/r/ReSpeaker_2-Mics_Pi_HAT
sku: 107100001
---

![](https://files.seeedstudio.com/products/107100001/01.png)

ReSpeaker 2-Mics Pi HAT is a dual-microphone expansion board for Raspberry Pi designed for AI and voice applications. This means that you can build a more powerful and flexible voice product that integrates Amazon Alexa Voice Service, Google Assistant, and so on.

The board is developed based on WM8960, a low power stereo codec. There are 2 microphones on both sides of the board for collecting sounds and it also provides 3 APA102 RGB LEDs, 1 User Button and 2 on-board Grove interfaces for expanding your applications. What is more, 3.5mm Audio Jack or JST 2.0 Speaker Out are both available for audio output.

<iframe width="800" height="450" src="https://www.youtube.com/embed/MwLEawbP0ZU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT-p-2874.html)


## Features

* Raspberry Pi compatible(Support Raspberry Pi Zero and Zero W, Raspberry Pi B+, Raspberry Pi 2 B, Raspberry Pi 3 B, Raspberry Pi 3 B+, Raspberry Pi 3 A+ and Raspberry Pi 4)
* 2 Microphones
* 2 Grove Interfaces
* 1 User Button
* 3.5mm Audio Jack
* JST2.0 Speaker Out
* Max Sample Rate: 48Khz

## Application Ideas

* Voice Interaction Application
* AI Assistant

## Hardware Overview

![](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/mic_hatv1.0.png)

- BUTTON: a User Button, connected to GPIO17
- MIC_Land MIC_R: 2 Microphones on both sides of the board
- RGB LED: 3 APA102 RGB LEDs, connected to SPI interface
- WM8960: a low power stereo codec
- Raspberry Pi 40-Pin Headers: support Raspberry Pi Zero, Raspberry Pi 1 B+, Raspberry Pi 2 B , Raspberry Pi 3 B and Raspberry Pi 3 B+
- POWER: Micro USB port for powering the ReSpeaker 2-Mics Pi HAT, please power the board for providing enough current when using the speaker.
- I2C: Grove I2C port, connected to I2C-1
- GPIO12: Grove digital port, connected to GPIO12 & GPIO13
- JST 2.0 SPEAKER OUT: for connecting speaker with JST 2.0 connector
- 3.5mm AUDIO JACK: for connecting headphone or speaker with 3.5mm Audio Plug

## Platform Supported

<div align=center><img src="https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/IMX6-2MIC-removebg-preview.png"/></div>

- **[Get started with NPi i.MX6ULL Dev Board Linux SBC](https://wiki.seeedstudio.com/NPi-i.MX6ULL-Dev-Board-Linux-SBC/#iis)**

<div align=center><img src="https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/STM32-2MIC-removebg-preview.png"/></div>

- **[Get started with ODYSSEY – STM32MP157C](https://wiki.seeedstudio.com/ODYSSEY-STM32MP157C/#i2s-on-odyssey-stm32mp157c)**

<div align=center><img src="https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/JetsonNano-2MICS.png"/></div>

- **[Get started with Nvidia Jetson Nano Series](https://wiki.seeedstudio.com/ReSpeaker_2_Mics_Pi_HAT/#get-started-with-nvidia-jetson-nano-series)**

## Getting Started

**1. Connect ReSpeaker 2-Mics Pi HAT to Raspberry Pi**

Mount ReSpeaker 2-Mics Pi HAT on your Raspberry Pi, make sure that the pins are properly aligned when stacking the ReSpeaker 2-Mics Pi HAT.

Raspberry Pi Connection

![connection picture1](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/pi.jpg)

Raspberry Pi zero Connection

![connection picture2](https://files.seeedstudio.com/products/107100001/01.png)

**2. Setup the driver on Raspberry Pi**

While the upstream wm8960 codec is not currently supported by current Pi kernel builds, upstream wm8960 has some bugs, we had fixed it. We must build it manually.

Make sure that you are running [the lastest Raspbian Operating System(debian 9)](https://www.raspberrypi.org/downloads/raspbian/) on your Pi. *(updated at 2018.11.13)*

- Step 1. Get the seeed voice card source code, install and reboot.

```
sudo apt-get update
sudo apt-get upgrade
git clone https://github.com/respeaker/seeed-voicecard.git
cd seeed-voicecard
sudo ./install.sh
reboot
```

- Step 2. Check that the sound card name matches the source code seeed-voicecard by command aplay -l and arecord -l.

```
pi@raspberrypi:~/seeed-voicecard $ aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: ALSA [bcm2835 ALSA], device 0: bcm2835 ALSA [bcm2835 ALSA]
  Subdevices: 8/8
  Subdevice #0: subdevice #0
  Subdevice #1: subdevice #1
  Subdevice #2: subdevice #2
  Subdevice #3: subdevice #3
  Subdevice #4: subdevice #4
  Subdevice #5: subdevice #5
  Subdevice #6: subdevice #6
  Subdevice #7: subdevice #7
card 0: ALSA [bcm2835 ALSA], device 1: bcm2835 ALSA [bcm2835 IEC958/HDMI]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 1: seeed2micvoicec [seeed-2mic-voicecard], device 0: bcm2835-i2s-wm8960-hifi wm8960-hifi-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0

pi@raspberrypi:~/seeed-voicecard $ arecord -l
**** List of CAPTURE Hardware Devices ****
card 1: seeed2micvoicec [seeed-2mic-voicecard], device 0: bcm2835-i2s-wm8960-hifi wm8960-hifi-0 []
  Subdevices: 1/1
  Subdevice #0: subdevice #0
pi@raspberrypi:~/seeed-voicecard $
```

- Step 3. Test, you will hear what you say to the microphones(don't forget to plug in an earphone or a speaker):

```
arecord -f cd -Dhw:1 | aplay -Dhw:1
```

**3. Configure sound settings and adjust the volume with alsamixer**

**alsamixer** is a graphical mixer program for the Advanced Linux Sound Architecture (ALSA) that is used to configure sound settings and adjust the volume.

```
pi@raspberrypi:~ $ alsamixer
```

![](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/alsamixer.png)

The Left and right arrow keys are used to select the channel or device and the Up and Down Arrows control the volume for the currently selected device. Quit the program with ALT+Q, or by hitting the Esc key. [More information](https://en.wikipedia.org/wiki/Alsamixer)

!!!Warning
    Please use the F6 to select seeed-2mic-voicecard device first.

**4. Use the on-board APA102 LEDs**

Each on-board APA102 LED has an additional driver chip. The driver chip takes care of receiving the desired color via its input lines, and then holding this color until a new command is received.

```
sudo pip install spidev
cd ~/
git clone https://github.com/respeaker/mic_hat.git
cd mic_hat
python pixels.py
```
<video width="512" height="384" controls preload>
    <source src="https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/led.mp4"></source>
    <source src="https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/led.webmhd.webm"></source>
</video>


**5. How to use User Button**

There is an on-board User Button, which is connected to GPIO17. Now we will try to detect it with python and RPi.GPIO.

```
sudo pip install rpi.gpio    // install RPi.GPIO library
nano button.py               // copy the following code in button.py
```

```
import RPi.GPIO as GPIO
import time

BUTTON = 17

GPIO.setmode(GPIO.BCM)
GPIO.setup(BUTTON, GPIO.IN)

while True:
    state = GPIO.input(BUTTON)
    if state:
        print("off")
    else:
        print("on")
    time.sleep(1)
```

Save the code as button.py, then run it. It should display "on" when you press the button:

```
pi@raspberrypi:~ $ python button.py
off
off
on
on
off
```





## Extract Voice

We use [PyAudio python library](https://people.csail.mit.edu/hubert/pyaudio/) to extract voice.

- Step 1, We need to run the following script to get the device index number of 2 Mic pi hat:

```Python
sudo pip install pyaudio
cd ~
nano get_index.py
```

- Step 2, copy below code and paste on get_index.py.

```Python
import pyaudio

p = pyaudio.PyAudio()
info = p.get_host_api_info_by_index(0)
numdevices = info.get('deviceCount')

for i in range(0, numdevices):
        if (p.get_device_info_by_host_api_device_index(0, i).get('maxInputChannels')) > 0:
            print "Input Device id ", i, " - ", p.get_device_info_by_host_api_device_index(0, i).get('name')
```

- Step 3, press Ctrl + X to exit and press Y to save.

- Step 4, run 'sudo python get_index.py' and we will see the device ID as below.

```
Input Device id  2  -  seeed-2mic-voicecard: - (hw:1,0)
```

- Step 5, change `RESPEAKER_INDEX = 2` to index number. Run python script record.py to record a speech.

```Python
import pyaudio
import wave

RESPEAKER_RATE = 16000
RESPEAKER_CHANNELS = 2 
RESPEAKER_WIDTH = 2
# run getDeviceInfo.py to get index
RESPEAKER_INDEX = 2  # refer to input device id
CHUNK = 1024
RECORD_SECONDS = 5
WAVE_OUTPUT_FILENAME = "output.wav"

p = pyaudio.PyAudio()

stream = p.open(
            rate=RESPEAKER_RATE,
            format=p.get_format_from_width(RESPEAKER_WIDTH),
            channels=RESPEAKER_CHANNELS,
            input=True,
            input_device_index=RESPEAKER_INDEX,)

print("* recording")

frames = []

for i in range(0, int(RESPEAKER_RATE / CHUNK * RECORD_SECONDS)):
    data = stream.read(CHUNK)
    frames.append(data)

print("* done recording")

stream.stop_stream()
stream.close()
p.terminate()

wf = wave.open(WAVE_OUTPUT_FILENAME, 'wb')
wf.setnchannels(RESPEAKER_CHANNELS)
wf.setsampwidth(p.get_sample_size(p.get_format_from_width(RESPEAKER_WIDTH)))
wf.setframerate(RESPEAKER_RATE)
wf.writeframes(b''.join(frames))
wf.close()
```

- Step 6. If you want to extract channel 0 data from 2 channels, please follow below code. For other channel X, please change [0::2] to [X::2].

```
import pyaudio
import wave
import numpy as np

RESPEAKER_RATE = 16000
RESPEAKER_CHANNELS = 2
RESPEAKER_WIDTH = 2
# run getDeviceInfo.py to get index
RESPEAKER_INDEX = 2  # refer to input device id
CHUNK = 1024
RECORD_SECONDS = 3
WAVE_OUTPUT_FILENAME = "output.wav"

p = pyaudio.PyAudio()

stream = p.open(
            rate=RESPEAKER_RATE,
            format=p.get_format_from_width(RESPEAKER_WIDTH),
            channels=RESPEAKER_CHANNELS,
            input=True,
            input_device_index=RESPEAKER_INDEX,)

print("* recording")

frames = [] 

for i in range(0, int(RESPEAKER_RATE / CHUNK * RECORD_SECONDS)):
    data = stream.read(CHUNK)
    # extract channel 0 data from 2 channels, if you want to extract channel 1, please change to [1::2]
    a = np.fromstring(data,dtype=np.int16)[0::2]
    frames.append(a.tostring())

print("* done recording")

stream.stop_stream()
stream.close()
p.terminate()

wf = wave.open(WAVE_OUTPUT_FILENAME, 'wb')
wf.setnchannels(1)
wf.setsampwidth(p.get_sample_size(p.get_format_from_width(RESPEAKER_WIDTH)))
wf.setframerate(RESPEAKER_RATE)
wf.writeframes(b''.join(frames))
wf.close()
```

## Get Started with Nvidia Jetson Nano Series

The wm8960/Respeaker-2-Mic-Hat driver now works on the Jetson Nano platform, here follows the testing steps:

### Install WM8960 from seeed-linux-dtoverlays

!!!Note
        This is tested for Jetson source R32.4.2 or JetPack Image 4.4.

**STEP 1.** Clone the repo

```sh
cd ~
git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays
cd ~/seeed-linux-dtoverlays
```

**STEP 2.** Build dtbo & driver

```sh
export CUSTOM_MOD_FILTER_OUT="lis3lv02d mcp25xxfd gt9xx seeed-voicecard"
KBUILD=/usr/src/linux-headers-4.9.140-tegra-ubuntu18.04_aarch64/kernel-4.9 make all_jetsonnano
```

**STEP 3.** Install the Driver

```sh
sudo -E KBUILD=/usr/src/linux-headers-4.9.140-tegra-ubuntu18.04_aarch64/kernel-4.9 make install_jetsonnano
```

**STEP 4.** Install dtbo

```sh
sudo cp overlays/jetsonnano/jetson-seeed-2mic-wm8960.dtbo /boot
sudo /opt/nvidia/jetson-io/config-by-hardware.py -n "Seeed Voice Card 2MIC"
```

**STEP 5.** Reboot

```sh
sudo reboot
```

**STEP 6.** Restore Alsa widgets settings

!!!Note
        Must wait a momemnt the time sound card busy after login.

```sh
cd ~/seeed-linux-dtoverlays
alsactl -f extras/wm8960_asound.state-jetson-nano restore 1
```

**STEP 7.** Capture & Playback

```sh
arecord -D hw:1,0 -f S32_LE -r 48000 -c 2 | aplay -D hw:1,0 -f S32_LE -r 48000 -c 2
```

## Enabling Voice Recognition at the Edge with Picovoice

<div align=center><img width = 700 src="https://files.seeedstudio.com/wiki/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/banner.gif"/></div>

[**Picovoice**](https://picovoice.ai/) **enables enterprises to innovate and differentiate rapidly with private voice AI**. Build a unified AI strategy around your brand and products with our speech recognition and [**Natural-language understanding (NLU) technologies**](https://searchenterpriseai.techtarget.com/definition/natural-language-understanding-NLU). 

**Seeed has partnered with Picovoice to bring Speech Recognition solution at the edge using [ReSpeaker 2-Mic Pi HAT](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT-p-2874.html) for developers.**

Picovoice is an end-to-end platform for building voice products on your terms. It enables creating voice experiences similar to Alexa and Google. But it entirely runs 100% on-device. There are advantages of Picovoice:

- **Private**: Everything is processed offline. Intrinsically HIPAA and GDPR compliant.
- **Reliable**: Runs without needing constant connectivity.
- **Zero Latency**: Edge-first architecture eliminates unpredictable network delay.
- **Accurate**: Resilient to noise and reverberation. It outperforms cloud-based alternatives by wide margins.
- **Cross-Platform**: Design once, deploy anywhere. Build using familiar languages and frameworks.


## Picovoice with ReSpeaker 2-Mic Pi HAT and Raspberry Pi Getting Started 

**Step 1.** Follow the **above step-by-step tutorial of ReSpeaker 2-Mic Pi HAT with Raspberry Pi** before the following.

**Note:** Please make sure that the `APA102` LEDs are working properly on the ReSpeaker 2-Mic Pi HAT with Raspberry Pi.

**Step 2.** Type the following command on the terminal to **install the Picovoice demo for ReSpeaker 2-Mic Pi HAT**.

```sh
$ sudo pip3 install pvrespeakerdemo
```

**Note:** Please make sure you have `pip3` installed on your Raspberry Pi

### Demo Usage

The demo utilises the ReSpeaker 2-Mic Pi HAT on a Raspberry Pi with Picovoice technology to control the LEDs. **This demo is triggered by the wake word "`Picovoice`" and will be ready to take follow-on actions, such as turning LEDs on and off, and changing LED colors.**

After the installation is finished, type this command to run the demo on the terminal:

```sh
$ picovoice_respeaker_demo
```

### Voice Commands

Here are voice commands for this demo:

- **Picovoice** 

The demo outputs: 

```
wake word
```

- **Turn on the lights**

You should see the lights turned on and the following message on the terminal:

```
{
    is_understood : 'true',
    intent : 'turnLights',
    slots : {
        'state' : 'on',
    }
}
```

The list of commands are shown on the terminal:

```
context:
  expressions:
    turnLights:
      - "[switch, turn] $state:state (all) (the) [light, lights]"
      - "[switch, turn] (all) (the) [light, lights] $state:state"
    changeColor:
      - "[change, set, switch] (all) (the) (light, lights) (color) (to) $color:color"
  slots:
    state:
      - "off"
      - "on"
    color:
      - "blue"
      - "green"
      - "orange"
      - "pink"
      - "purple"
      - "red"
      - "white"
      - "yellow"
```

also, you can try this command to change the colour by:

- **Picovoice, set the lights to orange**

Turn off the lights by:

- **Picovoice, turn off all lights**

**Demo Video Demonstration**

<p style="text-align:center;"><iframe width="720" height="480" src="https://www.youtube.com/embed/mPfZZQXjWMI" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

### Demo Source Code

The demo is built with the **[Picovoice SDK](https://github.com/Picovoice/picovoice)**. The demo source code is available on GitHub at https://github.com/Picovoice/picovoice/tree/master/demo/respeaker.

### Different Wake Words

The [**Picovoice SDK**](https://github.com/Picovoice/picovoice) includes free sample wake words licensed under Apache 2.0, including major voice assistants (e.g. "**`Hey Google`**", "**`Alexa`**") and fun ones like "**`Computer`**" and "**`Jarvis`**".

### Custom Voice Commands

The lighting commands are defined by a Picovoice *Speech-to-Intent context*. You can design and train contexts by typing in the allowed grammar using Picovoice Console. You can test your changes in-browser as you edit with the microphone button. Go to Picovoice Console (https://picovoice.ai/console/) and sign up for an account. Use the **Rhino Speech-to-Intent editor** to make contexts, then train them for Raspberry Pi.

<div align=center><img width = 700 src="https://files.seeedstudio.com/wiki/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/respeaker_demo_console_edit.gif"/></div>

### Multiple Wake Word Examples

<p style="text-align:center;"><iframe width="720" height="480" src="https://www.youtube.com/embed/GqxWHoQ560g" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

To demonstrate the Picovoice's cabability we have also prepared a multi wake word examples using ReSpeaker 2-Mic Pi HAT with Raspberry Pi! Different wake word can set to execute certain tasks.

*This package contains a commandline demo for controlling ReSpeaker 2-Mic Pi HAT LEDs using Porcupine.*

### Porcupine

**Porcupine** is a highly-accurate and lightweight wake word engine. It enables building always-listening voice-enabled
applications. It is

- using deep neural networks trained in real-world environments.
- compact and computationally-efficient. It is perfect for IoT.
- cross-platform. Raspberry Pi, BeagleBone, Android, iOS, Linux (x86_64), macOS (x86_64), Windows (x86_64), and web
  browsers are supported. Additionally, enterprise customers have access to the ARM Cortex-M SDK.
- scalable. It can detect multiple always-listening voice commands with no added runtime footprint.
- self-service. Developers can train custom wake word models using [Picovoice Console](https://picovoice.ai/console/).


#### Multi Wake Word Getting Started

Running the following command in terminal to install demo driver:

```sh
$ sudo pip3 install ppnrespeakerdemo
```

#### Multi Wake Word Usage

Run the following in terminal after the driver installation:

```sh
$ porcupine_respeaker_demo
```

Wait for the demo to initialize and print `[Listening]` in the terminal. Say:

> Picovoice

The demo outputs:

```text
detected 'Picovoice'
```

The lights are now set to `green`. Say:

> Alexa

The lights are set to `yellow` now. Say:

> Terminator

to turn off the lights.

#### Wake Word to Colors

Below are the colors associated with supported wake words for this demo:

- ![#ffff33](https://via.placeholder.com/15/ffff33/000000?text=+) `Alexa`
- ![#ff8000](https://via.placeholder.com/15/ff8000/000000?text=+) `Bumblebee`
- ![#ffffff](https://via.placeholder.com/15/ffffff/000000?text=+) `Computer`
- ![#ff0000](https://via.placeholder.com/15/ff0000/000000?text=+) `Hey Google`
- ![#800080](https://via.placeholder.com/15/800080/000000?text=+) `Hey Siri`
- ![#ff3399](https://via.placeholder.com/15/ff3399/000000?text=+) `Jarvis`
- ![#00ff00](https://via.placeholder.com/15/00ff00/000000?text=+) `Picovoice`
- ![#0000ff](https://via.placeholder.com/15/0000ff/000000?text=+) `Porcupine`
- ![#000000](https://via.placeholder.com/15/000000/000000?text=+) `Terminator`

#### Multiple Wake Word Example Source Code

Please see the complete source code of this example here: https://github.com/Picovoice/porcupine/tree/master/demo/respeaker.

## Picovoice with ReSpeaker 2-Mic Pi HAT and Raspberry Pi Zero Getting Started 

**Step 1.** Follow the **above step-by-step tutorial of ReSpeaker 2-Mic Pi HAT with Raspberry Pi Zero** before the following.

**Note:** Please make sure that the `APA102` LEDs are working properly on the ReSpeaker 2-Mic Pi HAT with Raspberry Pi Zero.

**Step 2.** Install the `wiringpi` library by typing the following on the terminal.

```sh
$ sudo apt-get install wiringpi
```

**Step 3.** From the root of the repository, type the following command on the terminal to **install the Picovoice demo for ReSpeaker 2-Mic Pi HAT**.

```sh
$ gcc -std=c99 -O3 -o demo/respeaker-rpi0/picovoice_demo_mic \
-I sdk/c/include/ demo/respeaker-rpi0/picovoice_demo_mic.c \
-ldl -lasound -lwiringPi
```

### Demo Usage

The demo utilises the ReSpeaker 2-Mic Pi HAT on a Raspberry Pi Zero with Picovoice technology to control the LEDs. **This demo is triggered by the wake word "`Picovoice`" and will be ready to take follow-on actions, such as turning LEDs on and off, and changing LED colors.**

After the installation is finished, type this command from the root of the repository, to run the demo on the terminal:

```sh
$ ./demo/respeaker-rpi0/picovoice_demo_mic \
sdk/c/lib/raspberry-pi/arm11/libpicovoice.so \
resources/porcupine/lib/common/porcupine_params.pv \
resources/porcupine/resources/keyword_files/raspberry-pi/picovoice_raspberry-pi.ppn \
0.65 \
resources/rhino/lib/common/rhino_params.pv \
demo/respeaker/pvrespeakerdemo/respeaker_raspberry-pi.rhn \
0.5 \
plughw:CARD=seeed2micvoicec,DEV=0
```

### Voice Commands

Here are voice commands for this demo:

- **Picovoice** 

The demo outputs: 

```
wake word
```

- **Turn on the lights**

You should see the lights turned on and the following message on the terminal:

```
{
    is_understood : 'true',
    intent : 'turnLights',
    slots : {
        'state' : 'on',
    }
}
```

The list of commands are shown on the terminal:

```
context:
  expressions:
    turnLights:
      - "[switch, turn] $state:state (all) (the) [light, lights]"
      - "[switch, turn] (all) (the) [light, lights] $state:state"
    changeColor:
      - "[change, set, switch] (all) (the) (light, lights) (color) (to) $color:color"
  slots:
    state:
      - "off"
      - "on"
    color:
      - "blue"
      - "green"
      - "orange"
      - "pink"
      - "purple"
      - "red"
      - "white"
      - "yellow"
```

also, you can try this command to change the colour by:

- **Picovoice, set the lights to orange**

Turn off the lights by:

- **Picovoice, turn off all lights**

**Demo Video Demonstration**

<p style="text-align:center;"><iframe width="720" height="480" src="https://www.youtube.com/embed/X12N2Rn-q5o" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

### Demo Source Code

The demo is built with the **[Picovoice SDK](https://github.com/Picovoice/picovoice)**. The demo source code is available on GitHub at https://github.com/Picovoice/picovoice/tree/master/demo/respeaker-rpi0.

### Different Wake Words

The [**Picovoice SDK**](https://github.com/Picovoice/picovoice) includes free sample wake words licensed under Apache 2.0, including major voice assistants (e.g. "**`Hey Google`**", "**`Alexa`**") and fun ones like "**`Computer`**" and "**`Jarvis`**".

### Custom Voice Commands

The lighting commands are defined by a Picovoice *Speech-to-Intent context*. You can design and train contexts by typing in the allowed grammar using Picovoice Console. You can test your changes in-browser as you edit with the microphone button. Go to Picovoice Console (https://picovoice.ai/console/) and sign up for an account. Use the **Rhino Speech-to-Intent editor** to make contexts, then train them for Raspberry Pi Zero.

<div align=center><img width = 700 src="https://files.seeedstudio.com/wiki/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/respeaker_demo_console_edit.gif"/></div>

### Multiple Wake Word Examples

<p style="text-align:center;"><iframe width="720" height="480" src="https://www.youtube.com/embed/Fi_IJEcNr3I" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

To demonstrate the Picovoice's cabability we have also prepared a multi wake word examples using ReSpeaker 2-Mic Pi HAT with Raspberry Pi Zero! Different wake word can set to execute certain tasks.

*This package contains a commandline demo for controlling ReSpeaker 2-Mic Pi HAT LEDs using Porcupine.*

### Porcupine

**Porcupine** is a highly-accurate and lightweight wake word engine. It enables building always-listening voice-enabled
applications. It is

- using deep neural networks trained in real-world environments.
- compact and computationally-efficient. It is perfect for IoT.
- cross-platform. Raspberry Pi, BeagleBone, Android, iOS, Linux (x86_64), macOS (x86_64), Windows (x86_64), and web
  browsers are supported. Additionally, enterprise customers have access to the ARM Cortex-M SDK.
- scalable. It can detect multiple always-listening voice commands with no added runtime footprint.
- self-service. Developers can train custom wake word models using [Picovoice Console](https://picovoice.ai/console/).


#### Multi Wake Word Getting Started

**Step 1** Install the `wiringpi` library (if you haven't installed already) by typing the following on the terminal.

```sh
$ sudo apt-get install wiringpi
```

**Step 2.** From the root of the repository, type the following command on the terminal to **install the Porcupine demo for ReSpeaker 2-Mic Pi HAT**.

```sh
$ gcc -std=c99 -O3 -o demo/respeaker-rpi0/porcupine_demo_mic \
-I include/ demo/respeaker-rpi0/porcupine_demo_mic.c \
-ldl -lasound -lwiringPi
```

#### Multi Wake Word Usage

Run the following in terminal from the root of the repository:

```sh
$ ./demo/respeaker-rpi0/porcupine_demo_mic \
lib/raspberry-pi/arm11/libpv_porcupine.so \
lib/common/porcupine_params.pv \
0.65 \
plughw:CARD=seeed2micvoicec,DEV=0 \
resources/keyword_files/raspberry-pi/alexa_raspberry-pi.ppn \
resources/keyword_files/raspberry-pi/computer_raspberry-pi.ppn \
resources/keyword_files/raspberry-pi/hey\ google_raspberry-pi.ppn \
resources/keyword_files/raspberry-pi/hey\ siri_raspberry-pi.ppn \
resources/keyword_files/raspberry-pi/jarvis_raspberry-pi.ppn \
resources/keyword_files/raspberry-pi/picovoice_raspberry-pi.ppn \
resources/keyword_files/raspberry-pi/porcupine_raspberry-pi.ppn \
resources/keyword_files/raspberry-pi/bumblebee_raspberry-pi.ppn \
resources/keyword_files/raspberry-pi/terminator_raspberry-pi.ppn
```

Wait for the demo to initialize and print `[Listening]` in the terminal. Say:

> Picovoice

The demo outputs:

```text
detected 'Picovoice'
```

The lights are now set to `green`. Say:

> Alexa

The lights are set to `yellow` now. Say:

> Terminator

to turn off the lights.

#### Wake Word to Colors

Below are the colors associated with supported wake words for this demo:

- ![#ffff33](https://via.placeholder.com/15/ffff33/000000?text=+) `Alexa`
- ![#ff8000](https://via.placeholder.com/15/ff8000/000000?text=+) `Bumblebee`
- ![#ffffff](https://via.placeholder.com/15/ffffff/000000?text=+) `Computer`
- ![#ff0000](https://via.placeholder.com/15/ff0000/000000?text=+) `Hey Google`
- ![#800080](https://via.placeholder.com/15/800080/000000?text=+) `Hey Siri`
- ![#ff3399](https://via.placeholder.com/15/ff3399/000000?text=+) `Jarvis`
- ![#00ff00](https://via.placeholder.com/15/00ff00/000000?text=+) `Picovoice`
- ![#0000ff](https://via.placeholder.com/15/0000ff/000000?text=+) `Porcupine`
- ![#000000](https://via.placeholder.com/15/000000/000000?text=+) `Terminator`

#### Multiple Wake Word Example Source Code

Please see the complete source code of this example here: https://github.com/Picovoice/porcupine/tree/master/demo/respeaker-rpi0.

### Picovoice Tech Support

If you encounter technical problems using Picovoice, please visit **[Picovoice](https://github.com/Picovoice)** for discussions.

## FAQ

**Q1: #include "portaudio.h" Error when run "sudo pip install pyaudio".**

A1: Please run below command to solve the issue. 

```
sudo apt-get install portaudio19-dev
```


**Q2: How to change the Raspbian Mirrors source?**

A2: Please refer to [Raspbian Mirrors](http://www.raspbian.org/RaspbianMirrors) and follow below instructions to modify the source at begining. 

```
pi@raspberrypi ~ $ sudo nano /etc/apt/sources.list
```

For example, we suggest use the tsinghua source for China users. So please modify the sources.list as below.

```
deb http://mirrors.tuna.tsinghua.edu.cn/raspbian/raspbian/ stretch main non-free contrib
deb-src http://mirrors.tuna.tsinghua.edu.cn/raspbian/raspbian/ stretch main non-free contrib
```


## Schematic Online Viewer

<div class="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/ReSpeaker 2-Mics Pi HAT.zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>


## Resources

- **[Eagle]** [Respeaker_2_Mics_Pi_HAT_SCH](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT_SCH.zip)
- **[Eagle]** [Respeaker_2_Mics_Pi_HAT_PCB](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT_PCB.zip)
- **[PDF]** [Respeaker_2_Mics_Pi_HAT_SCH](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT_SCH.pdf)
- **[PDF]** [Respeaker_2_Mics_Pi_HAT_PCB](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT_PCB.pdf)
- **[3D]** [ReSpeaker 2 Mics Pi HAT 3D](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT.zip)
- **[Driver]** [Seeed-Voice Driver](https://github.com/respeaker/seeed-voicecard)
- **[Algorithms]** [Algorithms includes DOA, VAD, NS](https://github.com/respeaker/mic_array)
- **[Voice Engine]** [Voice Engine project, provides building blocks to create voice enabled objects](https://github.com/voice-engine/voice-engine)
- **[Algorithms]** [AEC](https://github.com/voice-engine/ec)

## Projects

**Build Your Own Amazon Echo Using a RPI and ReSpeaker HAT**: How to build your own Amazon Echo using a Raspberry Pi and ReSpeaker 2-Mics HAT. 

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/idreams/build-your-own-amazon-echo-using-a-rpi-and-respeaker-hat-7f44a0/embed' width='350'></iframe>

**Your personal home barista comes to life with this voice-enabled coffee machine**: An open-source, private-by-design coffee machine that keeps your favorite coffee and caffeination schedule private.

<iframe width="800" height="450" src="https://www.youtube.com/embed/4gN1bvl24ZM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Tech Support
Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).



<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>