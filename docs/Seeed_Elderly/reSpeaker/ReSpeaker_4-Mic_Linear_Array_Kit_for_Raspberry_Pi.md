---
description: ReSpeaker 4-Mic Linear Array Kit
title: ReSpeaker 4-Mic Linear Array Kit
keywords:
- reSpeaker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ReSpeaker_4-Mic_Linear_Array_Kit_for_Raspberry_Pi
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

![enter image description here](https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/main_wiki.jpg)

Seeed’s ReSpeaker 4-Mic Linear Array Kit is
an extension board, aka HAT designed for Raspberry Pi. It's a linear microphone array
kit, comes with four microphones and
designed for AI and voice applications. That
means you can build a more powerful and
flexible voice product with Raspberry Pi
which can integrate Amazon Alexa Voice
Service, Google Assistant, and so on.

ReSpeaker 4-Mic Linear Array Kit for
Raspberry Pi consists of two boards, one is
voice accessory HAT, another is four
microphones linear array.

<iframe width="800" height="450" src="https://www.youtube.com/embed/NxZx9nz67Bc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

ReSpeaker 4-Mic Linear Array Kit for
Raspberry Pi support 8 input & 8 output
channels in Raspberry Pi OS. The first 6
input channels for microphone
recording (only first 4 input channels are
valid capture data), rest of 2 input channel
are echo channel of playback. The first 2
output channel are for sound output, the rest of 6 output
channels are dummy.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/ReSpeaker-4-Mic-Linear-Array-Kit-p-3066.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Features

- 2 ADC chips and 1 DAC chip
- 8 input and 8 output channels
- Four microphones array
- Grove support
- Raspberry Pi compatible (Support Raspberry Pi Zero and Zero W, Raspberry Pi B+, Raspberry Pi 2 B, Raspberry Pi 3 B, Raspberry Pi 3 B+, Raspberry Pi 3 A+ and Raspberry Pi 4)
- Headset and speaker voice output

## Specification

- 2 x X-Power AC108 ADC
- 4 x high performance analog microphones
- 1 x X-Power AC101 DAC
- Voice output:
  - 3.5mm headset audio jack
  - Speaker jack
- Compatible with Raspberry Pi 40-pin headers
- Microphones: MSM321A3729H9BP
- Sensitivity: -22 dBFS (Omnidirectional)
- SNR: 59 dB
- Max Sample Rate: 48Khz

## Application Ideas

- Smart speaker
- Intelligent voice assistant systems
- Voice recorders
- Voice conferencing system
- Meeting communicating equipment
- Voice interacting robot
- Car voice assistant
- Other scenarios need voice command

## Hardware Overview

**System Diagram**

<a href="https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/voice_hat_acc-correct.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/voice_hat_acc-correct.png"/></a>

**Interface**

![](https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/Hardware.jpg)

:::note
After connecting, be sure to use a multimeter to determine if the conduction of the circuit is as indicated in the figure above.
:::

## Assembly drawing  

![](https://files.seeedstudio.com/wiki/Bazaar_file/107990055/img/ab.png)

## Getting Started

**Connect ReSpeaker 4-Mic Array to Raspberry Pi**

**Step 1.**  Connect the *ReSpeaker Voice Accessory HAT* with *ReSpeaker 4-Mic linear Array* via the Ribbon Cable

**Step 2.**  Plug the *ReSpeaker Voice Accessory HAT* into the *Raspberry Pi* via the 40 Pin GPIO

**Step 3.**  Plug the *earphone* into the *3.5mm headset audio jack* or plug the *speaker* into the *JST 2.0 speaker jack*

**Step 4.**  Connect the *Raspberry Pi* with the *PC* via the micro-USB cable

![Pics here](https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/4-mic.jpg)

### Software

**Step 1. Install seeed-voicecard**

Get the seeed voice card source code. and install all linux kernel drivers.

```
sudo apt-get update
git clone https://github.com/respeaker/seeed-voicecard.git
cd seeed-voicecard
sudo ./install.sh  
sudo reboot

```

**Step 2. Check the Sound Card**

Tap the command below to check the record device.

```
pi@raspberrypi:~ $ arecord -L
```

It should be like:

```
pi@raspberrypi:~ $ arecord -L
null
    Discard all samples (playback) or generate zero samples (capture)
default
    Playback/recording through the PulseAudio sound server
ac108
dmixer
ac101
sysdefault:CARD=seeed8micvoicec
    seeed-8mic-voicecard, 
    Default Audio Device
dmix:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard, 
    Direct sample mixing device
dsnoop:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard, 
    Direct sample snooping device
hw:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard, 
    Direct hardware device without any conversions
plughw:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard, 
    Hardware device with all software conversions
```

Use the following command to check the play device.

```
pi@raspberrypi:~ $ aplay -L
```

It should be like:

```
pi@raspberrypi:~ $ aplay -L
null
    Discard all samples (playback) or generate zero samples (capture)
default
    Playback/recording through the PulseAudio sound server
ac108
dmixer
ac101
sysdefault:CARD=ALSA
    bcm2835 ALSA, bcm2835 ALSA
    Default Audio Device
dmix:CARD=ALSA,DEV=0
    bcm2835 ALSA, bcm2835 ALSA
    Direct sample mixing device
dmix:CARD=ALSA,DEV=1
    bcm2835 ALSA, bcm2835 IEC958/HDMI
    Direct sample mixing device
dsnoop:CARD=ALSA,DEV=0
    bcm2835 ALSA, bcm2835 ALSA
    Direct sample snooping device
dsnoop:CARD=ALSA,DEV=1
    bcm2835 ALSA, bcm2835 IEC958/HDMI
    Direct sample snooping device
hw:CARD=ALSA,DEV=0
    bcm2835 ALSA, bcm2835 ALSA
    Direct hardware device without any conversions
hw:CARD=ALSA,DEV=1
    bcm2835 ALSA, bcm2835 IEC958/HDMI
    Direct hardware device without any conversions
plughw:CARD=ALSA,DEV=0
    bcm2835 ALSA, bcm2835 ALSA
    Hardware device with all software conversions
plughw:CARD=ALSA,DEV=1
    bcm2835 ALSA, bcm2835 IEC958/HDMI
    Hardware device with all software conversions
sysdefault:CARD=seeed8micvoicec
    seeed-8mic-voicecard, 
    Default Audio Device
dmix:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard, 
    Direct sample mixing device
dsnoop:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard, 
    Direct sample snooping device
hw:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard, 
    Direct hardware device without any conversions
plughw:CARD=seeed8micvoicec,DEV=0
    seeed-8mic-voicecard, 
    Hardware device with all software conversions

```

**Step 3. Record and Play**

You can record then play, or you can record and play at the same time.

```
#It will capture sound on AC108 and save as a.wav
arecord -Dac108 -f S32_LE -r 16000 -c 8 a.wav
#Take care of that the captured mic audio is on the first 6 channels

#It will play sound file a.wav on AC101
aplay -D ac101 a.wav
#Do not use -D plughw:1,0 directly except your wave file is single channel only.

```

:::note
Limit for developer using 4-Mic Linear Array Kit doing capture & playback the same time:

-1. capture must be start first, or else the capture channels will possibly be disorder.

-2. playback output channels must fill with 8 same channels data or 4 same stereo channels data, or else the speaker or headphone will output nothing possibly.

-3. If you want to play and record at the same time, the aplay music file must be mono, or you can not use this command to play.
:::

Also you can play and record with Audacity.

:::tip
        You should open Audacity via VNC or you can just use a monitor to open it
:::

```
sudo apt update
sudo apt install audacity
audacity                      // run audacity

```

![](https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/audacity.png)

## Usage overview

To run the following examples, clone <https://github.com/respeaker/4mics_hat.git> repository to your Raspberry Pi

```
git clone https://github.com/respeaker/4mics_hat.git
```

All the Python scripts, mentioned in the examples below can be found inside this repository. To install the necessary dependencies, from mic_hat repository folder, run

```
sudo apt-get install portaudio19-dev libatlas-base-dev
pip3 install -r requirements.txt
```

### Record sound with Python

We use [PyAudio python library](https://people.csail.mit.edu/hubert/pyaudio/) to record sound with Python.

First, run the following script to get the device index number of 2 Mic pi hat:

```
python3 recording_examples/get_device_index.py
```

You will see the device ID as below.

```
Input Device id  2  -  seeed-8mic-voicecard: - (hw:1,0)
```

To record the sound, open ```recording_examples/record.py``` file with nano or other text editor and change  `RESPEAKER_INDEX = 2` to index number of ReSpeaker on your system. Then run python script record.py to make a recording:

```
python3 recording_examples/record.py
```

- Step 6. If you want to extract channel 0 data from 8 channels, have a look at the content of ```record_one_channel.py```. For other channel X, please change [0::8] to [X::8].

```
python3 recording_examples/record_one_channel.py
```

To play the recorded samples you can either use aplay system utility, for example

```bash
aplay -f cd -Dhw:0 output.wav #for Stereo sound
aplay -D plughw:0,0 output_one_channel.wav #for Mono sound from one channel
```

## FAQ

**Q1: There are only 4 Mic in the Mic Array, how could it be 8 channels?**

A1: There are 2 AC108 in this array, and each AC108 chip has 4 channel output. So it comes a total of 8 channels here, 4 of which are for the microphone, two channels for the playback and the the rest 2 channels are not used.

**Q2: If Raspberry can detect ReSpeaker 2-mics hat, but can't detect ReSpeaker 4-mics linear array?**

A2: Please click raspberry -> Preferences -> Raspberry Pi Configuration, then select the Interfaces tab, make sure the 1-Wire is Disabled.

## Resources

- **[PDF]** [AC101 Datasheet](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/AC101_User_Manual_v1.1.pdf)
- **[PDF]** [AC108 Datesheet](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/reg/AC108_Datasheet_V1.2.pdf)
- **[Driver]** [Seeed-Voice Driver](https://github.com/respeaker/seeed-voicecard)
- **[Algorithms]** [Algorithms includes DOA, VAD, NS](https://github.com/respeaker/mic_array)
- **[Voice Engine** [Voice Engine project, provides building blocks to create voice enabled objects](https://github.com/voice-engine/voice-engine)
- **[Algorithms]** [AEC](https://github.com/voice-engine/ec)
- **[Mechanical Drawing]** [2D Drawing](https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/res/2d.zip)

## Projects

[Mojing Mojing - A Smart Mirror with ReSpeaker!](https://www.hackster.io/SeeedStudio/mojing-mojing-a-smart-mirror-with-respeaker-e1ae20): A smart mirror with voice interface control via ReSpeaker. We also connect with Wio Link to control other objects! Based on Raspberry Pi.

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
