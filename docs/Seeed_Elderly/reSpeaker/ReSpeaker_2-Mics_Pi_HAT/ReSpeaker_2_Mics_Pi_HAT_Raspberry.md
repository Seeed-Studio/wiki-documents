---
description: Getting Started with Raspberry Pi
title: Getting Started with Raspberry Pi
keywords:
- ReSpeaker_2-Mics_Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ReSpeaker_2_Mics_Pi_HAT_Raspberry
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

### Driver installation and configuration

**1. Connect ReSpeaker 2-Mics Pi HAT to Raspberry Pi**

Mount ReSpeaker 2-Mics Pi HAT on your Raspberry Pi, make sure that the pins are properly aligned when stacking the ReSpeaker 2-Mics Pi HAT.

Raspberry Pi Connection

![connection picture1](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/pi.png)

Raspberry Pi Zero Connection

![connection picture2](https://files.seeedstudio.com/products/107100001/01.png)

**2. Setup the driver on Raspberry Pi**

Make sure that you are running [the latest Raspberry Pi OS](https://www.raspberrypi.org/downloads/raspbian/) on your Pi. *(updated at 2021.05.01)*

- Step 1. Get the Seeed voice card source code, install and reboot.

```bash
sudo apt-get update
git clone https://github.com/Seeed-Projects/seeed-voicecard.git
cd seeed-voicecard
sudo ./install.sh
sudo reboot now
```

- Step 2. Check that the sound card name matches the source code seeed-voicecard by command ```aplay -l``` and ```arecord -l```.

```shell
pi@raspberrypi:~/Desktop/mic_hat $ aplay -l
**** List of PLAYBACK Hardware Devices ****
card 0: Headphones [bcm2835 Headphones], device 0: bcm2835 Headphones [bcm2835 Headphones]
  Subdevices: 8/8
  Subdevice #0: subdevice #0
  Subdevice #1: subdevice #1
  Subdevice #2: subdevice #2
  Subdevice #3: subdevice #3
  Subdevice #4: subdevice #4
  Subdevice #5: subdevice #5
  Subdevice #6: subdevice #6
  Subdevice #7: subdevice #7
card 1: vc4hdmi0 [vc4-hdmi-0], device 0: MAI PCM i2s-hifi-0 [MAI PCM i2s-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 2: vc4hdmi1 [vc4-hdmi-1], device 0: MAI PCM i2s-hifi-0 [MAI PCM i2s-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
card 3: seeed2micvoicec [seeed-2mic-voicecard], device 0: bcm2835-i2s-wm8960-hifi wm8960-hifi-0 [bcm2835-i2s-wm8960-hifi wm8960-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0

pi@raspberrypi:~/Desktop/mic_hat $ arecord -l
**** List of CAPTURE Hardware Devices ****
card 3: seeed2micvoicec [seeed-2mic-voicecard], device 0: bcm2835-i2s-wm8960-hifi wm8960-hifi-0 [bcm2835-i2s-wm8960-hifi wm8960-hifi-0]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

- Step 3. Test, you will hear what you say to the microphones(don't forget to plug in an earphone or a speaker):

```bash
arecord -D "plughw:3,0" -f S16_LE -r 16000 -d 5 -t wav test.wav
aplay -D "plughw:3,0" test.wav
```

**Note:**  "plughw:3,0" is the recording(or playback device number) , depending on your system this number may differ (for example on Raspberry Pi 0 it will be 0, since it doesn't have audio jack) We can find it via "arecord -l" and "aplay -l".

**3. Configure sound settings and adjust the volume with alsamixer**

**alsamixer** is a graphical mixer program for the Advanced Linux Sound Architecture (ALSA) that is used to configure sound settings and adjust the volume.

```bash
pi@raspberrypi:~ $ alsamixer
```

![](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/alsamixer.png)

The Left and right arrow keys are used to select the channel or device and the Up and Down Arrows control the volume for the currently selected device. Quit the program with ALT+Q, or by hitting the Esc key. [More information](https://en.wikipedia.org/wiki/Alsamixer)

:::caution
    Please use the F6 to select seeed-2mic-voicecard device first.
:::

## Usage overview

To run the following examples, clone <https://github.com/respeaker/mic_hat.git> repository to your Raspberry Pi

```bash
git clone https://github.com/respeaker/mic_hat.git
cd mic_hat
```

All the Python scripts, mentioned in the examples below can be found inside this repository. To install the necessary dependencies, from mic_hat repository folder, run

```bash
sudo apt-get install portaudio19-dev libatlas-base-dev
pip3 install -r requirements.txt
```

**APA102 LEDs**

Each on-board APA102 LED has an additional driver chip. The driver chip takes care of receiving the desired color via its input lines, and then holding this color until a new command is received.

```bash
python3 interfaces/pixels.py
```

<video width={512} height={384} controls preload>
  <source src="https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/led.mp4" />
  <source src="https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/led.webmhd.webm" />
</video>

**User Button**

There is an on-board User Button, which is connected to GPIO17. Now we will try to detect it with python and RPi.GPIO.

Execute the following code from mic_hat folder repository, which you cloned at Step 4.

```bash
python3 interfaces/button.py
```

It should display "on" when you press the button:

```bash
python3 button.py
```

Output like

```txt
pi@raspberrypi:~ $ python3 button.py
off
off
on
on
off
```

### Record sound with Python

We use [PyAudio python library](https://people.csail.mit.edu/hubert/pyaudio/) to record sound with Python.

First, run the following script to get the device index number of 2 Mic pi hat:

```bash
python3 recording_examples/get_device_index.py
```

You will see the device ID as below.

```bash
Input Device id  2  -  seeed-2mic-voicecard: - (hw:1,0)
```

To record the sound, open ```recording_examples/record.py``` file with nano or other text editor and change  `RESPEAKER_INDEX = 2` to index number of ReSpeaker on your system. Then run python script record.py to make a recording:

```bash
python3 recording_examples/record.py
```

If you want to extract channel 0 data from 2 channels, have a look at the content of ```record_one_channel.py```. For other channel X, please change [0::2] to [X::2].

```bash
python3 recording_examples/record_one_channel.py
```

To play the recorded samples you can either use aplay system utility, for example

```bash
aplay -f cd -Dhw:1 output.wav #for Stereo sound
aplay -D plughw:1,0 output_one_channel.wav #for Mono sound from one channel
```

Alternatively you can use recording_examples/play.py script to play the .wav files with PyAudio.

```bash
python3 recording_examples/play.py path-to-wav-file
```

Make sure to specify the right output device index in play.py - otherwise PyAudio will freeze!

### Picovoice with ReSpeaker 2-Mic Pi HAT and Raspberry Pi

**Step 1.** Follow the **above step-by-step tutorial of ReSpeaker 2-Mic Pi HAT with Raspberry Pi** before the following.

**Note:** Please make sure that the `APA102` LEDs are working properly on the ReSpeaker 2-Mic Pi HAT with Raspberry Pi.

**Step 2.** Type the following command on the terminal to **install the Picovoice demo for ReSpeaker 2-Mic Pi HAT**.

```bash
pip3 install pvrespeakerdemo
```

**Note:** On fresh Raspberry Pi OS installation you might notice the following warning when installing this demo:
  The script picovoice_respeaker_demo is installed in '/home/pi/.local/bin' which is not on PATH.

It means that in order to run the demo, you need to add /home/pi/.local/bin to your system PATH:

```bash
echo 'export PATH="$HOME/bin:$HOME/.local/bin:$PATH"' >> ~/.bashrc
```

#### Demo Usage

The demo utilizes the ReSpeaker 2-Mic Pi HAT on a Raspberry Pi with Picovoice technology to control the LEDs. **This demo is triggered by the wake word "`Picovoice`" and will be ready to take follow-on actions, such as turning LEDs on and off, and changing LED colors.**

After the installation is finished, type this command to run the demo on the terminal:

```sh
picovoice_respeaker_demo
```

#### Voice Commands

Here are voice commands for this demo:

- **Picovoice**

The demo outputs:

```txt
wake word
```

- **Turn on the lights**

You should see the lights turned on and the following message on the terminal:

```json
{
    is_understood : 'true',
    intent : 'turnLights',
    slots : {
        'state' : 'on',
    }
}
```

The list of commands are shown on the terminal:

```yaml
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

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/mPfZZQXjWMI" frameBorder={0} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></p>

#### Demo Source Code

The demo is built with the **[Picovoice SDK](https://github.com/Picovoice/picovoice)**. The demo source code is available on GitHub at <https://github.com/Picovoice/picovoice/tree/master/demo/respeaker>.

#### Different Wake Words

The [**Picovoice SDK**](https://github.com/Picovoice/picovoice) includes free sample wake words licensed under Apache 2.0, including major voice assistants (e.g. "**`Hey Google`**", "**`Alexa`**") and fun ones like "**`Computer`**" and "**`Jarvis`**".

#### Custom Voice Commands

The lighting commands are defined by a Picovoice *Speech-to-Intent context*. You can design and train contexts by typing in the allowed grammar using Picovoice Console. You can test your changes in-browser as you edit with the microphone button. Go to Picovoice Console (<https://picovoice.ai/console/>) and sign up for an account. Use the **Rhino Speech-to-Intent editor** to make contexts, then train them for Raspberry Pi.

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/respeaker_demo_console_edit.gif"/></div>

### Multiple Wake Word Examples

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/GqxWHoQ560g" frameBorder={0} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></p>

### Porcupine

**Porcupine** is a highly-accurate and lightweight wake word engine. It enables building always-listening voice-enabled
applications. It is

- using deep neural networks trained in real-world environments.
- compact and computationally-efficient. It is perfect for IoT.
- cross-platform. Raspberry Pi, BeagleBone, Android, iOS, Linux (x86_64), macOS (x86_64), Windows (x86_64), and web
  browsers are supported. Additionally, enterprise customers have access to the ARM Cortex-M SDK.
- scalable. It can detect multiple always-listening voice commands with no added runtime footprint.
- self-service. Developers can train custom wake word models using [Picovoice Console](https://picovoice.ai/console/).

To demonstrate the Picovoice's capability we have also prepared a multi wake word examples using ReSpeaker 2-Mic Pi HAT with Raspberry Pi! Different wake word can set to execute certain tasks.

*This package contains a command line demo for controlling ReSpeaker 2-Mic Pi HAT LEDs using Porcupine.*

#### Multi Wake Word Getting Started

Running the following command in terminal to install demo driver:

```sh
pip3 install ppnrespeakerdemo
```

#### Multi Wake Word Usage

Run the following in terminal after the driver installation:

```sh
porcupine_respeaker_demo
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

Please see the complete source code of this example here: <https://github.com/Picovoice/porcupine/tree/master/demo/respeaker>.

## Keyword spotting with ReSpeaker 2-Mic Pi HAT and Mycroft Precise

Mycroft Precise is a completely open-source keyword detection engine. While it has more limited functionality comparing to Picovoice, it also has more permissive license (Apache 2.0), which allows modification and redistribution, including closed-source and commercial, as long as license is preserved.

To get started with Mycroft Precise, install latest stable version of Seeed's Mycroft Precise fork:

```bash
sudo apt-get install libatlas-base-dev
pip3 install git+https://github.com/respeaker/mycroft_runner_simple.git
```

**Note:** On fresh Raspberry Pi OS installation you might notice the following warning when installing this demo:
  The script picovoice_respeaker_demo is installed in '/home/pi/.local/bin' which is not on PATH.

It means that in order to run the demo, you need to add /home/pi/.local/bin to your system PATH:

```bash
echo 'export PATH="$HOME/bin:$HOME/.local/bin:$PATH"' >> ~/.bashrc
```

Then you can test Mycroft Precise installation simply by running

```bash
mycroft-precise --model hey-mycroft
```

If you'd like to integrate Mycroft Precise into your own project, check Github repository README file for more information on the API.

## Intelligent Assistant with ReSpeaker 2-Mic Pi HAT and Mycroft Core

Mycroft is a hackable open source voice assistant. It is similar in functionality to Amazon Alexa or Google Assistant, but has a more permissive license (Apache 2.0), which allows modification and redistribution, including closed-source and commercial, as long as license is preserved.

**This section is currently under development, we'll add more details about using Mycroft Core with Respeaker**

## Picovoice with ReSpeaker 2-Mic Pi HAT and Raspberry Pi Zero Getting Started

**Step 1.** Install the drivers and configure the device as described in **Driver installation and configuration**.

Then git clone Picovoice github repository:

```bash
git clone --recurse-submodules https://github.com/Picovoice/picovoice.git
cd picovoice
```

**Note:** Please make sure that the `APA102` LEDs are working properly on the ReSpeaker 2-Mic Pi HAT with Raspberry Pi Zero.

**Step 2.** Install the `wiringpi` library by typing the following on the terminal.

```sh
sudo apt-get install wiringpi
```

**Step 3.** From the root of the repository, type the following command on the terminal to **install the Picovoice demo for ReSpeaker 2-Mic Pi HAT**.

```sh
gcc -std=c99 -O3 -o demo/respeaker-rpi0/picovoice_demo_mic \
-I sdk/c/include/ demo/respeaker-rpi0/picovoice_demo_mic.c \
-ldl -lasound -lwiringPi
```

### Demo Usage

The demo utilizes the ReSpeaker 2-Mic Pi HAT on a Raspberry Pi Zero with Picovoice technology to control the LEDs. **This demo is triggered by the wake word "`Picovoice`" and will be ready to take follow-on actions, such as turning LEDs on and off, and changing LED colors.**

After the installation is finished, type this command from the root of the repository, to run the demo on the terminal:

```sh
./demo/respeaker-rpi0/picovoice_demo_mic \
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

```txt
wake word
```

- **Turn on the lights**

You should see the lights turned on and the following message on the terminal:

```json
{
    is_understood : 'true',
    intent : 'turnLights',
    slots : {
        'state' : 'on',
    }
}
```

The list of commands are shown on the terminal:

```yaml
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

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/X12N2Rn-q5o" frameBorder={0} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></p>

### Demo Source Code

The demo is built with the **[Picovoice SDK](https://github.com/Picovoice/picovoice)**. The demo source code is available on GitHub at <https://github.com/Picovoice/picovoice/tree/master/demo/respeaker-rpi0>.

### Different Wake Words

The [**Picovoice SDK**](https://github.com/Picovoice/picovoice) includes free sample wake words licensed under Apache 2.0, including major voice assistants (e.g. "**`Hey Google`**", "**`Alexa`**") and fun ones like "**`Computer`**" and "**`Jarvis`**".

### Custom Voice Commands

The lighting commands are defined by a Picovoice *Speech-to-Intent context*. You can design and train contexts by typing in the allowed grammar using Picovoice Console. You can test your changes in-browser as you edit with the microphone button. Go to Picovoice Console (<https://picovoice.ai/console/>) and sign up for an account. Use the **Rhino Speech-to-Intent editor** to make contexts, then train them for Raspberry Pi Zero.

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/respeaker_demo_console_edit.gif"/></div>

### Multiple Wake Word Examples

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/Fi_IJEcNr3I" frameBorder={0} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></p>

To demonstrate the Picovoice's capability we have also prepared a multi wake word examples using ReSpeaker 2-Mic Pi HAT with Raspberry Pi Zero! Different wake word can set to execute certain tasks.

*This package contains a command line demo for controlling ReSpeaker 2-Mic Pi HAT LEDs using Porcupine.*

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
sudo apt-get install wiringpi
```

Then git clone Picovoice github repository:

```bash
git clone --recurse-submodules https://github.com/Picovoice/porcupine.git
cd picovoice
```

**Step 2.** From the root of the repository, type the following command on the terminal to **install the Porcupine demo for ReSpeaker 2-Mic Pi HAT**.

```sh
gcc -std=c99 -O3 -o demo/respeaker-rpi0/porcupine_demo_mic \
-I include/ demo/respeaker-rpi0/porcupine_demo_mic.c \
-ldl -lasound -lwiringPi
```

#### Multi Wake Word Usage

Run the following in terminal from the root of the repository:

```sh
./demo/respeaker-rpi0/porcupine_demo_mic \
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

Please see the complete source code of this example here: <https://github.com/Picovoice/porcupine/tree/master/demo/respeaker-rpi0>.

### Picovoice Tech Support

If you encounter technical problems using Picovoice, please visit **[Picovoice](https://github.com/Picovoice)** for discussions.

## FAQ

**Q1: #include "portaudio.h" Error when run "sudo pip install pyaudio".**

A1: Please run below command to solve the issue.

```bash
sudo apt-get install portaudio19-dev
```

**Q2: How to change the Raspbian Mirrors source?**

A2: Please refer to [Raspbian Mirrors](http://www.raspbian.org/RaspbianMirrors) and follow below instructions to modify the source at beginning.

```bash
pi@raspberrypi ~ $ sudo nano /etc/apt/sources.list
```

For example, we suggest use the Tsinghua source for China users. So please modify the sources.list as below.

```d
deb http://mirrors.tuna.tsinghua.edu.cn/raspbian/raspbian/ stretch main non-free contrib
deb-src http://mirrors.tuna.tsinghua.edu.cn/raspbian/raspbian/ stretch main non-free contrib
```
