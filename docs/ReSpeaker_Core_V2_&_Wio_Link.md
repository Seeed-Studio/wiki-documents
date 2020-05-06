---
name: ReSpeaker 4-Mic Array for Raspberry Pi
category: ReSpeaker
bzurl: https://www.seeedstudio.com/ReSpeaker-4-Mic-Array-for-Raspberry-Pi-p-2941.html
oldwikiname:
prodimagename:
surveyurl: https://www.research.net/r/ReSpeaker_4-Mic_Array_for_Raspberry_Pi
sku: 103030216
---

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/overview.jpg)

ReSpeaker 4-Mic Array for Raspberry Pi is a quad-microphone expansion board for Raspberry Pi designed for AI and voice applications. This means that we can build a more powerful and flexible voice product that integrates Amazon Alexa Voice Service, Google Assistant, and so on.


Different from [ReSpeaker 2-Mics Pi HAT](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT-p-2874.html), this board is developed based on AC108, a highly integrated quad-channel ADC with I2S/TDM output transition for high definition voice capture, which allows the device to pick up sounds in a 3 meters radius. Besides, this 4-Mics version provides a super cool LED ring, which contains 12 APA102 programable LEDs. With that 4 microphones and the LED ring, Raspberry Pi would have ability to do VAD(Voice Activity Detection), estimate DOA(Direction of Arrival), do KWS(Keyword Search) and show the direction via LED ring, just like Amazon Echo or Google Home.

<iframe width="800" height="450" src="https://www.youtube.com/embed/uAQf0RKBNHo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/ReSpeaker-4-Mic-Array-for-Raspberry-Pi-p-2941.html)

## Features

* Raspberry Pi compatible(Support Raspberry Pi Zero and Zero W, Raspberry Pi B+, Raspberry Pi 2 B, Raspberry Pi 3 B, Raspberry Pi 3 B+, Raspberry Pi 3 A+ and Raspberry Pi 4)
* 4 Microphones
* 3 meters radius voice capture
* 2 Grove Interfaces
* 12 APA102 User LEDs
* Software Algorithm: VAD(Voice Activity Detection), DOA(Direction of Arrival) and KWS(Keyword Search)

!!!Note
    There is no audio output interface on ReSpeaker 4-Mic Array for Raspberry Pi. It is only for voice capture. We can use the [headphone jack](https://www.raspberrypi.org/documentation/configuration/audio-config.md) on Raspberry Pi for audio output.

## Application Ideas

* Voice Interaction Application
* AI Assistant

## Hardware Overview

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/features.png)

- MIC: 4 analog microphones
- LED: 12 APA102 programable RGB LEDs, connected to SPI interface
- Raspberry Pi 40-Pin Headers: support Raspberry Pi Zero, Raspberry Pi 1 B+, Raspberry Pi 2 B, Raspberry Pi 3 B and Raspberry Pi 3 B+
- AC108: highly integrated quad-channel ADC with I2S/TDM output transition
- I2C: Grove I2C port, connected to I2C-1
- GPIO12: Grove digital port, connected to GPIO12 & GPIO13

!!!Note
    If we want to use the APA102 RGB LEDs, please write HIGH to `GPIO5` first to enable VCC of the LEDs.

## Getting Started

**Connect ReSpeaker 4-Mic Array to Raspberry Pi**

Mount ReSpeaker 4-Mic Array on Raspberry Pi, make sure that the pins are properly aligned when stacking the ReSpeaker 4-Mic Array for Raspberry Pi.

!!!Note
    Hot-plugging ReSpeaker 4-Mic Array is not allowed.It will damage the respeaker.

![connection pic1](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/connect1.jpg)
![connection pic2](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/connect2.jpg)

**Install driver**

The AC108 codec is not supported by Pi kernel builds currently, we have to build it manually.

- Step 1. Please Make sure running [the lastest Raspbian Operating System(debian 9)](https://www.raspberrypi.org/downloads/raspbian/) on Pi. *(updated at 2018.11.13)*

- Step 2. Get the seeed voice card source code.

```
sudo apt-get update
sudo apt-get upgrade
git clone https://github.com/respeaker/seeed-voicecard.git
cd seeed-voicecard
sudo ./install.sh
reboot
```

- Step 3. Then select the headphone jack on Raspberry Pi for audio output:

```
sudo raspi-config
# Select 7 Advanced Options
# Select A4 Audio
# Select 1 Force 3.5mm ('headphone') jack
# Select Finish
```

- Step 4. Check that the sound card name looks like this:

```
pi@raspberrypi:~ $ arecord -L
null
    Discard all samples (playback) or generate zero samples (capture)
jack
    JACK Audio Connection Kit
pulse
    PulseAudio Sound Server
default
playback
ac108
sysdefault:CARD=seeed4micvoicec
    seeed-4mic-voicecard, 
    Default Audio Device
dmix:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard, 
    Direct sample mixing device
dsnoop:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard, 
    Direct sample snooping device
hw:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard, 
    Direct hardware device without any conversions
plughw:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard, 
    Hardware device with all software conversions
usbstream:CARD=seeed4micvoicec
    seeed-4mic-voicecard
    USB Stream Output
usbstream:CARD=ALSA
    bcm2835 ALSA
    USB Stream Output
```

If we want to change the alsa settings, we can use `sudo alsactl --file=ac108_asound.state store` to save it. And when we need to use the settings again, copy it to: `sudo cp ~/seeed-voicecard/ac108_asound.state /var/lib/alsa/asound.state`

- Step 5. Open Audacity and select **AC108 & 4 channels** as input and **bcm2835 alsa: - (hw:0:0)** as output to test:

```
$ sudo apt update
$ sudo apt install audacity
$ audacity                      // run audacity
```

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/audacity.png)

- Step 6. Or we could record with `arecord` and play with `aplay`:

```
arecord -Dac108 -f S32_LE -r 16000 -c 4 hello.wav    // only support 4 channels
aplay hello.wav                                      // make sure default device
                                                     // Audio will come out via audio jack of Raspberry Pi
```

**Play with APA102 LEDs**

Each on-board APA102 LED has an additional driver chip. The driver chip takes care of receiving the desired color via its input lines, and then holding this color until a new command is received.

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/rainbow.jpg)

- Step 1. Activate SPI:
    - sudo raspi-config
    - Go to "Interfacing Options"
    - Go to "SPI"
    - Enable SPI
    - Exit the tool
- Step 2. Get APA102 LEDs Library and examples

```
pi@raspberrypi:~ $ cd /home/pi
pi@raspberrypi:~ $ git clone https://github.com/respeaker/4mics_hat.git
pi@raspberrypi:~ $ cd /home/pi/4mics_hat
pi@raspberrypi:~/4mics_hat $ sudo apt install python-virtualenv          # install python virtualenv tool
pi@raspberrypi:~/4mics_hat $ virtualenv --system-site-packages ~/env     # create a virtual python environment
pi@raspberrypi:~/4mics_hat $ source ~/env/bin/activate                   # activate the virtual environment
(env) pi@raspberrypi:~/4mics_hat $ pip install spidev gpiozero           # install spidev and gpiozero
```

- Step 3. Then run the example code under virtualenv, now we can see the LEDs blink like Google Assistant.

```
(env) pi@raspberrypi:~/4mics_hat $ python pixels_demo.py
```



## DoA

**DOA with Keywords**

With DoA(Direction of Arrial), ReSpeaker 4-Mic Array is able to find the direction where the sound source is located.

- Step 1. setup voice engine

```
pi@raspberrypi:~ $ source ~/env/bin/activate                    # activate the virtual, if we have already activated, skip this step
(env) pi@raspberrypi:~ $ cd ~/4mics_hat
(env) pi@raspberrypi:~/4mics_hat $ sudo apt install libatlas-base-dev     # install snowboy dependencies
(env) pi@raspberrypi:~/4mics_hat $ sudo apt install python-pyaudio        # install pyaudio
(env) pi@raspberrypi:~/4mics_hat $ pip install ./snowboy*.whl             # install snowboy for KWS
---
name: ReSpeaker 6-Mic Circular Array Kit for Raspberry Pi
category: ReSpeaker
bzurl:
oldwikiname: ReSpeaker 6-Mic Circular Array Kit for Raspberry Pi
prodimagename: cover.JPG
surveyurl:  
sku: 107990055
---

![enter image description here](https://files.seeedstudio.com/products/107990055/01.png)


Seeed’s ReSpeaker 6-Mic Circular Array Kit
is an extension board, aka HAT designed for
Raspberry Pi. It's a circular microphone
array kit, comes with six microphones and
designed for AI and voice applications. That
means you can build a more powerful and
flexible voice product with Raspberry Pi
which can integrate Amazon Alexa Voice
Service, Google Assistant, and so on.

ReSpeaker 6-Mic Circular Array Kit for
Raspberry Pi consists of two boards, one is
voice accessory HAT, another is six
microphones circular array.

ReSpeaker 6-Mic Circular Array Kit for
Raspberry Pi support 8 input & 8 output
channels in Raspbian system. The first 6
input channel for microphone recording,
rest of 2 input channel are echo channel of
playback. The first 2 output channel for
playing, rest of 6 output channel are
dummy.


<iframe width="800" height="450" src="https://www.youtube.com/embed/NxZx9nz67Bc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p style=":center"><a href="https://www.seeedstudio.com/ReSpeaker-6-Mic-Circular-Array-Kit-for-Raspberry-Pi-p-3067.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>




## Features

- 2 ADC chips and 1 DAC chip
- 8 input and 8 output channels
- Six microphones array
- Grove support
- Raspberry Pi compatible(Support Raspberry Pi Zero and Zero W, Raspberry Pi B+, Raspberry Pi 2 B, Raspberry Pi 3 B, Raspberry Pi 3 B+, Raspberry Pi 3 A+ and Raspberry Pi 4)
- Headset and speaker voice output



## Specification

- 2 x X-Power AC108 ADC
- 6 x high performance microphones
- 1 x X-Power AC101 DAC
- Voice output:
    - 3.5mm headset audio jack
    - Speaker jack
- Compatible with Raspberry Pi 40-pin headers
- Microphones: MSM321A3729H9CP
- Sensitivity: -22 dBFS (Omnidirectional)
- SNR: 59 dB
- Max Sample Rate: 48Khz


## Applications

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

<a href="https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/voice_hat_acc.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/voice_hat_acc.png"/></a>

**Interface**

![](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/hardware.jpg)

!!!Note
    
    After connecting, be sure to use a multimeter to determine if the conduction of the circuit is as indicated in the figure above.

## Assembly Drawing   

![](https://files.seeedstudio.com/wiki/Bazaar_file/107990055/img/ab.png)

<p style=":center"><img src="https://files.seeedstudio.com/wiki/Bazaar_file/107990055/img/6-mic_array_assemble.gif" /></p>


## Getting Started

### Hardware

**Prerequisites**


ReSpeaker 6-Mic Circular Array    x1

[Raspberry Pi 3B or 3B+](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B%2B-p-3037.html?utm_source=homepage&utm_medium=homepagebanner&utm_campaign=hp_0605)              x1

[Micro-USB Cable](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)                     x1

PC                                  x1

Earphone or Speaker                 x1


!!!Tips
        Actually the ReSpeaker 6-Mic Circular Array support Raspberry Pi Zero, Raspberry Pi 1 B+, Raspberry Pi 2 B, Raspberry Pi 3 B, Raspberry Pi 3 model B+ and Raspberry Pi 3 A+, in this wiki we are using Raspberry Pi 3.


**Connection**


**Step 1.**  Connect the *ReSpeaker Voice Accessory HAT* with *ReSpeaker 6-Mic circular Array* via the Ribbon Cable

**Step 2.**  Plug the *ReSpeaker Voice Accessory HAT* into the *Raspberry Pi* via the 40 Pin GPIO

**Step 3.**  Plug the *earphone* into the *3.5mm headset audio jack* or plug the *speaker* into the *JST 2.0 speaker jack*

**Step 4.**  Connect the *Raspberry Pi* with the *PC* via the micro-USB cable


![Pics here](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/6-mic.jpg)


### Software

**Prerequisites**

*Plan A*

[PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

You need to use *Putty* or other *ssh* tools to connect with your raspberry pi. Before started, please make sure:

1- Open *ssh* fuction of your pi to let the putty in. If you do not know how to open *ssh*, please google `how to setup ssh raspberry pi`   

2- Your raspberry pi and your PC are working on the same WiFi net. If you do not know how to config WiFi, please google `how to setup wifi raspberry pi`

3- Get the ip address of your raspberry pi, if you do not know how to get the ip address please refer to [raspberry offical documentation](https://www.raspberrypi.org/documentation/remote-access/ip-address.md)

4- Use the ip address to connect the raspberry pi with your PC via putty ssh serve.

![pic](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/putty.png)

Then please tap the host name and the password. the default ID is `pi` and the password is `raspberry`.

```
login as: pi
pi@192.168.43.210's password:raspberry

```

Now you are in, and you can tap the command in putty and play with your raspberry.


[VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/)

To make this kit work with alexa or dueros, you need to open a web site to get the authorization. So you need to use *VNC Viewer* to log in your amazon or baidu account. So please make sure you have open the *VNC* service of your raspberry.

Or you can just consider plan B. 


*Plan B*


If you are tired of all above, you can just use a HDMI Monitor and plug the USB Keyboard and USB mouse in to your raspberry, it works too, simple and easy.


**Step 1. Install seeed-voicecard**

Get the seeed voice card source code. and install all linux kernel drivers.

```
sudo apt-get update
sudo apt-get upgrade
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
---
name: ReSpeaker 4-Mic Array for Raspberry Pi
category: ReSpeaker
bzurl: https://www.seeedstudio.com/ReSpeaker-4-Mic-Array-for-Raspberry-Pi-p-2941.html
oldwikiname:
prodimagename:
surveyurl: https://www.research.net/r/ReSpeaker_4-Mic_Array_for_Raspberry_Pi
sku: 103030216
---

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/overview.jpg)

ReSpeaker 4-Mic Array for Raspberry Pi is a quad-microphone expansion board for Raspberry Pi designed for AI and voice applications. This means that we can build a more powerful and flexible voice product that integrates Amazon Alexa Voice Service, Google Assistant, and so on.


Different from [ReSpeaker 2-Mics Pi HAT](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT-p-2874.html), this board is developed based on AC108, a highly integrated quad-channel ADC with I2S/TDM output transition for high definition voice capture, which allows the device to pick up sounds in a 3 meters radius. Besides, this 4-Mics version provides a super cool LED ring, which contains 12 APA102 programable LEDs. With that 4 microphones and the LED ring, Raspberry Pi would have ability to do VAD(Voice Activity Detection), estimate DOA(Direction of Arrival), do KWS(Keyword Search) and show the direction via LED ring, just like Amazon Echo or Google Home.

<iframe width="800" height="450" src="https://www.youtube.com/embed/uAQf0RKBNHo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/ReSpeaker-4-Mic-Array-for-Raspberry-Pi-p-2941.html)

## Features

* Raspberry Pi compatible(Support Raspberry Pi Zero and Zero W, Raspberry Pi B+, Raspberry Pi 2 B, Raspberry Pi 3 B, Raspberry Pi 3 B+, Raspberry Pi 3 A+ and Raspberry Pi 4)
* 4 Microphones
* 3 meters radius voice capture
* 2 Grove Interfaces
* 12 APA102 User LEDs
* Software Algorithm: VAD(Voice Activity Detection), DOA(Direction of Arrival) and KWS(Keyword Search)

!!!Note
    There is no audio output interface on ReSpeaker 4-Mic Array for Raspberry Pi. It is only for voice capture. We can use the [headphone jack](https://www.raspberrypi.org/documentation/configuration/audio-config.md) on Raspberry Pi for audio output.

## Application Ideas

* Voice Interaction Application
* AI Assistant

## Hardware Overview

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/features.png)

- MIC: 4 analog microphones
- LED: 12 APA102 programable RGB LEDs, connected to SPI interface
- Raspberry Pi 40-Pin Headers: support Raspberry Pi Zero, Raspberry Pi 1 B+, Raspberry Pi 2 B, Raspberry Pi 3 B and Raspberry Pi 3 B+
- AC108: highly integrated quad-channel ADC with I2S/TDM output transition
- I2C: Grove I2C port, connected to I2C-1
- GPIO12: Grove digital port, connected to GPIO12 & GPIO13

!!!Note
    If we want to use the APA102 RGB LEDs, please write HIGH to `GPIO5` first to enable VCC of the LEDs.

## Getting Started

**Connect ReSpeaker 4-Mic Array to Raspberry Pi**

Mount ReSpeaker 4-Mic Array on Raspberry Pi, make sure that the pins are properly aligned when stacking the ReSpeaker 4-Mic Array for Raspberry Pi.

!!!Note
    Hot-plugging ReSpeaker 4-Mic Array is not allowed.It will damage the respeaker.

![connection pic1](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/connect1.jpg)
![connection pic2](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/connect2.jpg)

**Install driver**

The AC108 codec is not supported by Pi kernel builds currently, we have to build it manually.

- Step 1. Please Make sure running [the lastest Raspbian Operating System(debian 9)](https://www.raspberrypi.org/downloads/raspbian/) on Pi. *(updated at 2018.11.13)*

- Step 2. Get the seeed voice card source code.

```
sudo apt-get update
sudo apt-get upgrade
git clone https://github.com/respeaker/seeed-voicecard.git
cd seeed-voicecard
sudo ./install.sh
reboot
```

- Step 3. Then select the headphone jack on Raspberry Pi for audio output:

```
sudo raspi-config
# Select 7 Advanced Options
# Select A4 Audio
# Select 1 Force 3.5mm ('headphone') jack
# Select Finish
```

- Step 4. Check that the sound card name looks like this:

```
pi@raspberrypi:~ $ arecord -L
null
    Discard all samples (playback) or generate zero samples (capture)
jack
    JACK Audio Connection Kit
pulse
    PulseAudio Sound Server
default
playback
ac108
sysdefault:CARD=seeed4micvoicec
    seeed-4mic-voicecard, 
    Default Audio Device
dmix:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard, 
    Direct sample mixing device
dsnoop:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard, 
    Direct sample snooping device
hw:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard, 
    Direct hardware device without any conversions
plughw:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard, 
    Hardware device with all software conversions
usbstream:CARD=seeed4micvoicec
    seeed-4mic-voicecard
    USB Stream Output
usbstream:CARD=ALSA
    bcm2835 ALSA
    USB Stream Output
```

If we want to change the alsa settings, we can use `sudo alsactl --file=ac108_asound.state store` to save it. And when we need to use the settings again, copy it to: `sudo cp ~/seeed-voicecard/ac108_asound.state /var/lib/alsa/asound.state`

- Step 5. Open Audacity and select **AC108 & 4 channels** as input and **bcm2835 alsa: - (hw:0:0)** as output to test:

```
$ sudo apt update
$ sudo apt install audacity
$ audacity                      // run audacity
```

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/audacity.png)

- Step 6. Or we could record with `arecord` and play with `aplay`:

```
arecord -Dac108 -f S32_LE -r 16000 -c 4 hello.wav    // only support 4 channels
aplay hello.wav                                      // make sure default device
                                                     // Audio will come out via audio jack of Raspberry Pi
```

**Play with APA102 LEDs**

Each on-board APA102 LED has an additional driver chip. The driver chip takes care of receiving the desired color via its input lines, and then holding this color until a new command is received.

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/rainbow.jpg)

- Step 1. Activate SPI:
    - sudo raspi-config
    - Go to "Interfacing Options"
    - Go to "SPI"
    - Enable SPI
    - Exit the tool
- Step 2. Get APA102 LEDs Library and examples

```
pi@raspberrypi:~ $ cd /home/pi
pi@raspberrypi:~ $ git clone https://github.com/respeaker/4mics_hat.git
pi@raspberrypi:~ $ cd /home/pi/4mics_hat
pi@raspberrypi:~/4mics_hat $ sudo apt install python-virtualenv          # install python virtualenv tool
pi@raspberrypi:~/4mics_hat $ virtualenv --system-site-packages ~/env     # create a virtual python environment
pi@raspberrypi:~/4mics_hat $ source ~/env/bin/activate                   # activate the virtual environment
(env) pi@raspberrypi:~/4mics_hat $ pip install spidev gpiozero           # install spidev and gpiozero
```

- Step 3. Then run the example code under virtualenv, now we can see the LEDs blink like Google Assistant.

```
(env) pi@raspberrypi:~/4mics_hat $ python pixels_demo.py
```



## DoA

**DOA with Keywords**

With DoA(Direction of Arrial), ReSpeaker 4-Mic Array is able to find the direction where the sound source is located.

- Step 1. setup voice engine

```
pi@raspberrypi:~ $ source ~/env/bin/activate                    # activate the virtual, if we have already activated, skip this step
(env) pi@raspberrypi:~ $ cd ~/4mics_hat
(env) pi@raspberrypi:~/4mics_hat $ sudo apt install libatlas-base-dev     # install snowboy dependencies
(env) pi@raspberrypi:~/4mics_hat $ sudo apt install python-pyaudio        # install pyaudio
(env) pi@raspberrypi:~/4mics_hat $ pip install ./snowboy*.whl             # install snowboy for KWS
---
name: ReSpeaker 6-Mic Circular Array Kit for Raspberry Pi
category: ReSpeaker
bzurl:
oldwikiname: ReSpeaker 6-Mic Circular Array Kit for Raspberry Pi
prodimagename: cover.JPG
surveyurl:  
sku: 107990055
---

![enter image description here](https://files.seeedstudio.com/products/107990055/01.png)


Seeed’s ReSpeaker 6-Mic Circular Array Kit
is an extension board, aka HAT designed for
Raspberry Pi. It's a circular microphone
array kit, comes with six microphones and
designed for AI and voice applications. That
means you can build a more powerful and
flexible voice product with Raspberry Pi
which can integrate Amazon Alexa Voice
Service, Google Assistant, and so on.

ReSpeaker 6-Mic Circular Array Kit for
Raspberry Pi consists of two boards, one is
voice accessory HAT, another is six
microphones circular array.

ReSpeaker 6-Mic Circular Array Kit for
Raspberry Pi support 8 input & 8 output
channels in Raspbian system. The first 6
input channel for microphone recording,
rest of 2 input channel are echo channel of
playback. The first 2 output channel for
playing, rest of 6 output channel are
dummy.


<iframe width="800" height="450" src="https://www.youtube.com/embed/NxZx9nz67Bc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p style=":center"><a href="https://www.seeedstudio.com/ReSpeaker-6-Mic-Circular-Array-Kit-for-Raspberry-Pi-p-3067.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>




## Features

- 2 ADC chips and 1 DAC chip
- 8 input and 8 output channels
- Six microphones array
- Grove support
- Raspberry Pi compatible(Support Raspberry Pi Zero and Zero W, Raspberry Pi B+, Raspberry Pi 2 B, Raspberry Pi 3 B, Raspberry Pi 3 B+, Raspberry Pi 3 A+ and Raspberry Pi 4)
- Headset and speaker voice output



## Specification

- 2 x X-Power AC108 ADC
- 6 x high performance microphones
- 1 x X-Power AC101 DAC
- Voice output:
    - 3.5mm headset audio jack
    - Speaker jack
- Compatible with Raspberry Pi 40-pin headers
- Microphones: MSM321A3729H9CP
- Sensitivity: -22 dBFS (Omnidirectional)
- SNR: 59 dB
- Max Sample Rate: 48Khz


## Applications

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

<a href="https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/voice_hat_acc.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/voice_hat_acc.png"/></a>

**Interface**

![](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/hardware.jpg)

!!!Note
    
    After connecting, be sure to use a multimeter to determine if the conduction of the circuit is as indicated in the figure above.

## Assembly Drawing   

![](https://files.seeedstudio.com/wiki/Bazaar_file/107990055/img/ab.png)

<p style=":center"><img src="https://files.seeedstudio.com/wiki/Bazaar_file/107990055/img/6-mic_array_assemble.gif" /></p>


## Getting Started

### Hardware

**Prerequisites**


ReSpeaker 6-Mic Circular Array    x1

[Raspberry Pi 3B or 3B+](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B%2B-p-3037.html?utm_source=homepage&utm_medium=homepagebanner&utm_campaign=hp_0605)              x1

[Micro-USB Cable](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)                     x1

PC                                  x1

Earphone or Speaker                 x1


!!!Tips
        Actually the ReSpeaker 6-Mic Circular Array support Raspberry Pi Zero, Raspberry Pi 1 B+, Raspberry Pi 2 B, Raspberry Pi 3 B, Raspberry Pi 3 model B+ and Raspberry Pi 3 A+, in this wiki we are using Raspberry Pi 3.


**Connection**


**Step 1.**  Connect the *ReSpeaker Voice Accessory HAT* with *ReSpeaker 6-Mic circular Array* via the Ribbon Cable

**Step 2.**  Plug the *ReSpeaker Voice Accessory HAT* into the *Raspberry Pi* via the 40 Pin GPIO

**Step 3.**  Plug the *earphone* into the *3.5mm headset audio jack* or plug the *speaker* into the *JST 2.0 speaker jack*

**Step 4.**  Connect the *Raspberry Pi* with the *PC* via the micro-USB cable


![Pics here](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/6-mic.jpg)


### Software

**Prerequisites**

*Plan A*

[PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

You need to use *Putty* or other *ssh* tools to connect with your raspberry pi. Before started, please make sure:

1- Open *ssh* fuction of your pi to let the putty in. If you do not know how to open *ssh*, please google `how to setup ssh raspberry pi`   

2- Your raspberry pi and your PC are working on the same WiFi net. If you do not know how to config WiFi, please google `how to setup wifi raspberry pi`

3- Get the ip address of your raspberry pi, if you do not know how to get the ip address please refer to [raspberry offical documentation](https://www.raspberrypi.org/documentation/remote-access/ip-address.md)

4- Use the ip address to connect the raspberry pi with your PC via putty ssh serve.

![pic](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/putty.png)

Then please tap the host name and the password. the default ID is `pi` and the password is `raspberry`.

```
login as: pi
pi@192.168.43.210's password:raspberry

```

Now you are in, and you can tap the command in putty and play with your raspberry.


[VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/)

To make this kit work with alexa or dueros, you need to open a web site to get the authorization. So you need to use *VNC Viewer* to log in your amazon or baidu account. So please make sure you have open the *VNC* service of your raspberry.

Or you can just consider plan B. 


*Plan B*


If you are tired of all above, you can just use a HDMI Monitor and plug the USB Keyboard and USB mouse in to your raspberry, it works too, simple and easy.


**Step 1. Install seeed-voicecard**

Get the seeed voice card source code. and install all linux kernel drivers.

```
sudo apt-get update
sudo apt-get upgrade
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
---
name: ReSpeaker 4-Mic Array for Raspberry Pi
category: ReSpeaker
bzurl: https://www.seeedstudio.com/ReSpeaker-4-Mic-Array-for-Raspberry-Pi-p-2941.html
oldwikiname:
prodimagename:
surveyurl: https://www.research.net/r/ReSpeaker_4-Mic_Array_for_Raspberry_Pi
sku: 103030216
---

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/overview.jpg)

ReSpeaker 4-Mic Array for Raspberry Pi is a quad-microphone expansion board for Raspberry Pi designed for AI and voice applications. This means that we can build a more powerful and flexible voice product that integrates Amazon Alexa Voice Service, Google Assistant, and so on.


Different from [ReSpeaker 2-Mics Pi HAT](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT-p-2874.html), this board is developed based on AC108, a highly integrated quad-channel ADC with I2S/TDM output transition for high definition voice capture, which allows the device to pick up sounds in a 3 meters radius. Besides, this 4-Mics version provides a super cool LED ring, which contains 12 APA102 programable LEDs. With that 4 microphones and the LED ring, Raspberry Pi would have ability to do VAD(Voice Activity Detection), estimate DOA(Direction of Arrival), do KWS(Keyword Search) and show the direction via LED ring, just like Amazon Echo or Google Home.

<iframe width="800" height="450" src="https://www.youtube.com/embed/uAQf0RKBNHo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/ReSpeaker-4-Mic-Array-for-Raspberry-Pi-p-2941.html)

## Features

* Raspberry Pi compatible(Support Raspberry Pi Zero and Zero W, Raspberry Pi B+, Raspberry Pi 2 B, Raspberry Pi 3 B, Raspberry Pi 3 B+, Raspberry Pi 3 A+ and Raspberry Pi 4)
* 4 Microphones
* 3 meters radius voice capture
* 2 Grove Interfaces
* 12 APA102 User LEDs
* Software Algorithm: VAD(Voice Activity Detection), DOA(Direction of Arrival) and KWS(Keyword Search)

!!!Note
    There is no audio output interface on ReSpeaker 4-Mic Array for Raspberry Pi. It is only for voice capture. We can use the [headphone jack](https://www.raspberrypi.org/documentation/configuration/audio-config.md) on Raspberry Pi for audio output.

## Application Ideas

* Voice Interaction Application
* AI Assistant

## Hardware Overview

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/features.png)

- MIC: 4 analog microphones
- LED: 12 APA102 programable RGB LEDs, connected to SPI interface
- Raspberry Pi 40-Pin Headers: support Raspberry Pi Zero, Raspberry Pi 1 B+, Raspberry Pi 2 B, Raspberry Pi 3 B and Raspberry Pi 3 B+
- AC108: highly integrated quad-channel ADC with I2S/TDM output transition
- I2C: Grove I2C port, connected to I2C-1
- GPIO12: Grove digital port, connected to GPIO12 & GPIO13

!!!Note
    If we want to use the APA102 RGB LEDs, please write HIGH to `GPIO5` first to enable VCC of the LEDs.

## Getting Started

**Connect ReSpeaker 4-Mic Array to Raspberry Pi**

Mount ReSpeaker 4-Mic Array on Raspberry Pi, make sure that the pins are properly aligned when stacking the ReSpeaker 4-Mic Array for Raspberry Pi.

!!!Note
    Hot-plugging ReSpeaker 4-Mic Array is not allowed.It will damage the respeaker.

![connection pic1](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/connect1.jpg)
![connection pic2](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/connect2.jpg)

**Install driver**

The AC108 codec is not supported by Pi kernel builds currently, we have to build it manually.

- Step 1. Please Make sure running [the lastest Raspbian Operating System(debian 9)](https://www.raspberrypi.org/downloads/raspbian/) on Pi. *(updated at 2018.11.13)*

- Step 2. Get the seeed voice card source code.

```
sudo apt-get update
sudo apt-get upgrade
git clone https://github.com/respeaker/seeed-voicecard.git
cd seeed-voicecard
sudo ./install.sh
reboot
```

- Step 3. Then select the headphone jack on Raspberry Pi for audio output:

```
sudo raspi-config
# Select 7 Advanced Options
# Select A4 Audio
# Select 1 Force 3.5mm ('headphone') jack
# Select Finish
```

- Step 4. Check that the sound card name looks like this:

```
pi@raspberrypi:~ $ arecord -L
null
    Discard all samples (playback) or generate zero samples (capture)
jack
    JACK Audio Connection Kit
pulse
    PulseAudio Sound Server
default
playback
ac108
sysdefault:CARD=seeed4micvoicec
    seeed-4mic-voicecard, 
    Default Audio Device
dmix:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard, 
    Direct sample mixing device
dsnoop:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard, 
    Direct sample snooping device
hw:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard, 
    Direct hardware device without any conversions
plughw:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard, 
    Hardware device with all software conversions
usbstream:CARD=seeed4micvoicec
    seeed-4mic-voicecard
    USB Stream Output
usbstream:CARD=ALSA
    bcm2835 ALSA
    USB Stream Output
```

If we want to change the alsa settings, we can use `sudo alsactl --file=ac108_asound.state store` to save it. And when we need to use the settings again, copy it to: `sudo cp ~/seeed-voicecard/ac108_asound.state /var/lib/alsa/asound.state`

- Step 5. Open Audacity and select **AC108 & 4 channels** as input and **bcm2835 alsa: - (hw:0:0)** as output to test:

```
$ sudo apt update
$ sudo apt install audacity
$ audacity                      // run audacity
```

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/audacity.png)

- Step 6. Or we could record with `arecord` and play with `aplay`:

```
arecord -Dac108 -f S32_LE -r 16000 -c 4 hello.wav    // only support 4 channels
aplay hello.wav                                      // make sure default device
                                                     // Audio will come out via audio jack of Raspberry Pi
```

**Play with APA102 LEDs**

Each on-board APA102 LED has an additional driver chip. The driver chip takes care of receiving the desired color via its input lines, and then holding this color until a new command is received.

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/rainbow.jpg)

- Step 1. Activate SPI:
    - sudo raspi-config
    - Go to "Interfacing Options"
    - Go to "SPI"
    - Enable SPI
    - Exit the tool
- Step 2. Get APA102 LEDs Library and examples

```
pi@raspberrypi:~ $ cd /home/pi
pi@raspberrypi:~ $ git clone https://github.com/respeaker/4mics_hat.git
pi@raspberrypi:~ $ cd /home/pi/4mics_hat
pi@raspberrypi:~/4mics_hat $ sudo apt install python-virtualenv          # install python virtualenv tool
pi@raspberrypi:~/4mics_hat $ virtualenv --system-site-packages ~/env     # create a virtual python environment
pi@raspberrypi:~/4mics_hat $ source ~/env/bin/activate                   # activate the virtual environment
(env) pi@raspberrypi:~/4mics_hat $ pip install spidev gpiozero           # install spidev and gpiozero
```

- Step 3. Then run the example code under virtualenv, now we can see the LEDs blink like Google Assistant.

```
(env) pi@raspberrypi:~/4mics_hat $ python pixels_demo.py
```



## DoA

**DOA with Keywords**

With DoA(Direction of Arrial), ReSpeaker 4-Mic Array is able to find the direction where the sound source is located.

- Step 1. setup voice engine

```
pi@raspberrypi:~ $ source ~/env/bin/activate                    # activate the virtual, if we have already activated, skip this step
(env) pi@raspberrypi:~ $ cd ~/4mics_hat
(env) pi@raspberrypi:~/4mics_hat $ sudo apt install libatlas-base-dev     # install snowboy dependencies
(env) pi@raspberrypi:~/4mics_hat $ sudo apt install python-pyaudio        # install pyaudio
(env) pi@raspberrypi:~/4mics_hat $ pip install ./snowboy*.whl             # install snowboy for KWS
---
name: ReSpeaker 6-Mic Circular Array Kit for Raspberry Pi
category: ReSpeaker
bzurl:
oldwikiname: ReSpeaker 6-Mic Circular Array Kit for Raspberry Pi
prodimagename: cover.JPG
surveyurl:  
sku: 107990055
---

![enter image description here](https://files.seeedstudio.com/products/107990055/01.png)


Seeed’s ReSpeaker 6-Mic Circular Array Kit
is an extension board, aka HAT designed for
Raspberry Pi. It's a circular microphone
array kit, comes with six microphones and
designed for AI and voice applications. That
means you can build a more powerful and
flexible voice product with Raspberry Pi
which can integrate Amazon Alexa Voice
Service, Google Assistant, and so on.

ReSpeaker 6-Mic Circular Array Kit for
Raspberry Pi consists of two boards, one is
voice accessory HAT, another is six
microphones circular array.

ReSpeaker 6-Mic Circular Array Kit for
Raspberry Pi support 8 input & 8 output
channels in Raspbian system. The first 6
input channel for microphone recording,
rest of 2 input channel are echo channel of
playback. The first 2 output channel for
playing, rest of 6 output channel are
dummy.


<iframe width="800" height="450" src="https://www.youtube.com/embed/NxZx9nz67Bc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p style=":center"><a href="https://www.seeedstudio.com/ReSpeaker-6-Mic-Circular-Array-Kit-for-Raspberry-Pi-p-3067.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>




## Features

- 2 ADC chips and 1 DAC chip
- 8 input and 8 output channels
- Six microphones array
- Grove support
- Raspberry Pi compatible(Support Raspberry Pi Zero and Zero W, Raspberry Pi B+, Raspberry Pi 2 B, Raspberry Pi 3 B, Raspberry Pi 3 B+, Raspberry Pi 3 A+ and Raspberry Pi 4)
- Headset and speaker voice output



## Specification

- 2 x X-Power AC108 ADC
- 6 x high performance microphones
- 1 x X-Power AC101 DAC
- Voice output:
    - 3.5mm headset audio jack
    - Speaker jack
- Compatible with Raspberry Pi 40-pin headers
- Microphones: MSM321A3729H9CP
- Sensitivity: -22 dBFS (Omnidirectional)
- SNR: 59 dB
- Max Sample Rate: 48Khz


## Applications

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

<a href="https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/voice_hat_acc.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/voice_hat_acc.png"/></a>

**Interface**

![](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/hardware.jpg)

!!!Note
    
    After connecting, be sure to use a multimeter to determine if the conduction of the circuit is as indicated in the figure above.

## Assembly Drawing   

![](https://files.seeedstudio.com/wiki/Bazaar_file/107990055/img/ab.png)

<p style=":center"><img src="https://files.seeedstudio.com/wiki/Bazaar_file/107990055/img/6-mic_array_assemble.gif" /></p>


## Getting Started

### Hardware

**Prerequisites**


ReSpeaker 6-Mic Circular Array    x1

[Raspberry Pi 3B or 3B+](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B%2B-p-3037.html?utm_source=homepage&utm_medium=homepagebanner&utm_campaign=hp_0605)              x1

[Micro-USB Cable](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)                     x1

PC                                  x1

Earphone or Speaker                 x1


!!!Tips
        Actually the ReSpeaker 6-Mic Circular Array support Raspberry Pi Zero, Raspberry Pi 1 B+, Raspberry Pi 2 B, Raspberry Pi 3 B, Raspberry Pi 3 model B+ and Raspberry Pi 3 A+, in this wiki we are using Raspberry Pi 3.


**Connection**


**Step 1.**  Connect the *ReSpeaker Voice Accessory HAT* with *ReSpeaker 6-Mic circular Array* via the Ribbon Cable

**Step 2.**  Plug the *ReSpeaker Voice Accessory HAT* into the *Raspberry Pi* via the 40 Pin GPIO

**Step 3.**  Plug the *earphone* into the *3.5mm headset audio jack* or plug the *speaker* into the *JST 2.0 speaker jack*

**Step 4.**  Connect the *Raspberry Pi* with the *PC* via the micro-USB cable


![Pics here](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/6-mic.jpg)


### Software

**Prerequisites**

*Plan A*

[PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

You need to use *Putty* or other *ssh* tools to connect with your raspberry pi. Before started, please make sure:

1- Open *ssh* fuction of your pi to let the putty in. If you do not know how to open *ssh*, please google `how to setup ssh raspberry pi`   

2- Your raspberry pi and your PC are working on the same WiFi net. If you do not know how to config WiFi, please google `how to setup wifi raspberry pi`

3- Get the ip address of your raspberry pi, if you do not know how to get the ip address please refer to [raspberry offical documentation](https://www.raspberrypi.org/documentation/remote-access/ip-address.md)

4- Use the ip address to connect the raspberry pi with your PC via putty ssh serve.

![pic](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/putty.png)

Then please tap the host name and the password. the default ID is `pi` and the password is `raspberry`.

```
login as: pi
pi@192.168.43.210's password:raspberry

```

Now you are in, and you can tap the command in putty and play with your raspberry.


[VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/)

To make this kit work with alexa or dueros, you need to open a web site to get the authorization. So you need to use *VNC Viewer* to log in your amazon or baidu account. So please make sure you have open the *VNC* service of your raspberry.

Or you can just consider plan B. 


*Plan B*


If you are tired of all above, you can just use a HDMI Monitor and plug the USB Keyboard and USB mouse in to your raspberry, it works too, simple and easy.


**Step 1. Install seeed-voicecard**

Get the seeed voice card source code. and install all linux kernel drivers.

```
sudo apt-get update
sudo apt-get upgrade
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
---
name: ReSpeaker 4-Mic Array for Raspberry Pi
category: ReSpeaker
bzurl: https://www.seeedstudio.com/ReSpeaker-4-Mic-Array-for-Raspberry-Pi-p-2941.html
oldwikiname:
prodimagename:
surveyurl: https://www.research.net/r/ReSpeaker_4-Mic_Array_for_Raspberry_Pi
sku: 103030216
---

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/overview.jpg)

ReSpeaker 4-Mic Array for Raspberry Pi is a quad-microphone expansion board for Raspberry Pi designed for AI and voice applications. This means that we can build a more powerful and flexible voice product that integrates Amazon Alexa Voice Service, Google Assistant, and so on.


Different from [ReSpeaker 2-Mics Pi HAT](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT-p-2874.html), this board is developed based on AC108, a highly integrated quad-channel ADC with I2S/TDM output transition for high definition voice capture, which allows the device to pick up sounds in a 3 meters radius. Besides, this 4-Mics version provides a super cool LED ring, which contains 12 APA102 programable LEDs. With that 4 microphones and the LED ring, Raspberry Pi would have ability to do VAD(Voice Activity Detection), estimate DOA(Direction of Arrival), do KWS(Keyword Search) and show the direction via LED ring, just like Amazon Echo or Google Home.

<iframe width="800" height="450" src="https://www.youtube.com/embed/uAQf0RKBNHo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/ReSpeaker-4-Mic-Array-for-Raspberry-Pi-p-2941.html)

## Features

* Raspberry Pi compatible(Support Raspberry Pi Zero and Zero W, Raspberry Pi B+, Raspberry Pi 2 B, Raspberry Pi 3 B, Raspberry Pi 3 B+, Raspberry Pi 3 A+ and Raspberry Pi 4)
* 4 Microphones
* 3 meters radius voice capture
* 2 Grove Interfaces
* 12 APA102 User LEDs
* Software Algorithm: VAD(Voice Activity Detection), DOA(Direction of Arrival) and KWS(Keyword Search)

!!!Note
    There is no audio output interface on ReSpeaker 4-Mic Array for Raspberry Pi. It is only for voice capture. We can use the [headphone jack](https://www.raspberrypi.org/documentation/configuration/audio-config.md) on Raspberry Pi for audio output.

## Application Ideas

* Voice Interaction Application
* AI Assistant

## Hardware Overview

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/features.png)

- MIC: 4 analog microphones
- LED: 12 APA102 programable RGB LEDs, connected to SPI interface
- Raspberry Pi 40-Pin Headers: support Raspberry Pi Zero, Raspberry Pi 1 B+, Raspberry Pi 2 B, Raspberry Pi 3 B and Raspberry Pi 3 B+
- AC108: highly integrated quad-channel ADC with I2S/TDM output transition
- I2C: Grove I2C port, connected to I2C-1
- GPIO12: Grove digital port, connected to GPIO12 & GPIO13

!!!Note
    If we want to use the APA102 RGB LEDs, please write HIGH to `GPIO5` first to enable VCC of the LEDs.

## Getting Started

**Connect ReSpeaker 4-Mic Array to Raspberry Pi**

Mount ReSpeaker 4-Mic Array on Raspberry Pi, make sure that the pins are properly aligned when stacking the ReSpeaker 4-Mic Array for Raspberry Pi.

!!!Note
    Hot-plugging ReSpeaker 4-Mic Array is not allowed.It will damage the respeaker.

![connection pic1](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/connect1.jpg)
![connection pic2](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/connect2.jpg)

**Install driver**

The AC108 codec is not supported by Pi kernel builds currently, we have to build it manually.

- Step 1. Please Make sure running [the lastest Raspbian Operating System(debian 9)](https://www.raspberrypi.org/downloads/raspbian/) on Pi. *(updated at 2018.11.13)*

- Step 2. Get the seeed voice card source code.

```
sudo apt-get update
sudo apt-get upgrade
git clone https://github.com/respeaker/seeed-voicecard.git
cd seeed-voicecard
sudo ./install.sh
reboot
```

- Step 3. Then select the headphone jack on Raspberry Pi for audio output:

```
sudo raspi-config
# Select 7 Advanced Options
# Select A4 Audio
# Select 1 Force 3.5mm ('headphone') jack
# Select Finish
```

- Step 4. Check that the sound card name looks like this:

```
pi@raspberrypi:~ $ arecord -L
null
    Discard all samples (playback) or generate zero samples (capture)
jack
    JACK Audio Connection Kit
pulse
    PulseAudio Sound Server
default
playback
ac108
sysdefault:CARD=seeed4micvoicec
    seeed-4mic-voicecard, 
    Default Audio Device
dmix:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard, 
    Direct sample mixing device
dsnoop:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard, 
    Direct sample snooping device
hw:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard, 
    Direct hardware device without any conversions
plughw:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard, 
    Hardware device with all software conversions
usbstream:CARD=seeed4micvoicec
    seeed-4mic-voicecard
    USB Stream Output
usbstream:CARD=ALSA
    bcm2835 ALSA
    USB Stream Output
```

If we want to change the alsa settings, we can use `sudo alsactl --file=ac108_asound.state store` to save it. And when we need to use the settings again, copy it to: `sudo cp ~/seeed-voicecard/ac108_asound.state /var/lib/alsa/asound.state`

- Step 5. Open Audacity and select **AC108 & 4 channels** as input and **bcm2835 alsa: - (hw:0:0)** as output to test:

```
$ sudo apt update
$ sudo apt install audacity
$ audacity                      // run audacity
```

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/audacity.png)

- Step 6. Or we could record with `arecord` and play with `aplay`:

```
arecord -Dac108 -f S32_LE -r 16000 -c 4 hello.wav    // only support 4 channels
aplay hello.wav                                      // make sure default device
                                                     // Audio will come out via audio jack of Raspberry Pi
```

**Play with APA102 LEDs**

Each on-board APA102 LED has an additional driver chip. The driver chip takes care of receiving the desired color via its input lines, and then holding this color until a new command is received.

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/rainbow.jpg)

- Step 1. Activate SPI:
    - sudo raspi-config
    - Go to "Interfacing Options"
    - Go to "SPI"
    - Enable SPI
    - Exit the tool
- Step 2. Get APA102 LEDs Library and examples

```
pi@raspberrypi:~ $ cd /home/pi
pi@raspberrypi:~ $ git clone https://github.com/respeaker/4mics_hat.git
pi@raspberrypi:~ $ cd /home/pi/4mics_hat
pi@raspberrypi:~/4mics_hat $ sudo apt install python-virtualenv          # install python virtualenv tool
pi@raspberrypi:~/4mics_hat $ virtualenv --system-site-packages ~/env     # create a virtual python environment
pi@raspberrypi:~/4mics_hat $ source ~/env/bin/activate                   # activate the virtual environment
(env) pi@raspberrypi:~/4mics_hat $ pip install spidev gpiozero           # install spidev and gpiozero
```

- Step 3. Then run the example code under virtualenv, now we can see the LEDs blink like Google Assistant.

```
(env) pi@raspberrypi:~/4mics_hat $ python pixels_demo.py
```



## DoA

**DOA with Keywords**

With DoA(Direction of Arrial), ReSpeaker 4-Mic Array is able to find the direction where the sound source is located.

- Step 1. setup voice engine

```
pi@raspberrypi:~ $ source ~/env/bin/activate                    # activate the virtual, if we have already activated, skip this step
(env) pi@raspberrypi:~ $ cd ~/4mics_hat
(env) pi@raspberrypi:~/4mics_hat $ sudo apt install libatlas-base-dev     # install snowboy dependencies
(env) pi@raspberrypi:~/4mics_hat $ sudo apt install python-pyaudio        # install pyaudio
(env) pi@raspberrypi:~/4mics_hat $ pip install ./snowboy*.whl             # install snowboy for KWS
---
name: ReSpeaker 6-Mic Circular Array Kit for Raspberry Pi
category: ReSpeaker
bzurl:
oldwikiname: ReSpeaker 6-Mic Circular Array Kit for Raspberry Pi
prodimagename: cover.JPG
surveyurl:  
sku: 107990055
---

![enter image description here](https://files.seeedstudio.com/products/107990055/01.png)


Seeed’s ReSpeaker 6-Mic Circular Array Kit
is an extension board, aka HAT designed for
Raspberry Pi. It's a circular microphone
array kit, comes with six microphones and
designed for AI and voice applications. That
means you can build a more powerful and
flexible voice product with Raspberry Pi
which can integrate Amazon Alexa Voice
Service, Google Assistant, and so on.

ReSpeaker 6-Mic Circular Array Kit for
Raspberry Pi consists of two boards, one is
voice accessory HAT, another is six
microphones circular array.

ReSpeaker 6-Mic Circular Array Kit for
Raspberry Pi support 8 input & 8 output
channels in Raspbian system. The first 6
input channel for microphone recording,
rest of 2 input channel are echo channel of
playback. The first 2 output channel for
playing, rest of 6 output channel are
dummy.


<iframe width="800" height="450" src="https://www.youtube.com/embed/NxZx9nz67Bc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p style=":center"><a href="https://www.seeedstudio.com/ReSpeaker-6-Mic-Circular-Array-Kit-for-Raspberry-Pi-p-3067.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>




## Features

- 2 ADC chips and 1 DAC chip
- 8 input and 8 output channels
- Six microphones array
- Grove support
- Raspberry Pi compatible(Support Raspberry Pi Zero and Zero W, Raspberry Pi B+, Raspberry Pi 2 B, Raspberry Pi 3 B, Raspberry Pi 3 B+, Raspberry Pi 3 A+ and Raspberry Pi 4)
- Headset and speaker voice output



## Specification

- 2 x X-Power AC108 ADC
- 6 x high performance microphones
- 1 x X-Power AC101 DAC
- Voice output:
    - 3.5mm headset audio jack
    - Speaker jack
- Compatible with Raspberry Pi 40-pin headers
- Microphones: MSM321A3729H9CP
- Sensitivity: -22 dBFS (Omnidirectional)
- SNR: 59 dB
- Max Sample Rate: 48Khz


## Applications

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

<a href="https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/voice_hat_acc.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/voice_hat_acc.png"/></a>

**Interface**

![](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/hardware.jpg)

!!!Note
    
    After connecting, be sure to use a multimeter to determine if the conduction of the circuit is as indicated in the figure above.

## Assembly Drawing   

![](https://files.seeedstudio.com/wiki/Bazaar_file/107990055/img/ab.png)

<p style=":center"><img src="https://files.seeedstudio.com/wiki/Bazaar_file/107990055/img/6-mic_array_assemble.gif" /></p>


## Getting Started

### Hardware

**Prerequisites**


ReSpeaker 6-Mic Circular Array    x1

[Raspberry Pi 3B or 3B+](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B%2B-p-3037.html?utm_source=homepage&utm_medium=homepagebanner&utm_campaign=hp_0605)              x1

[Micro-USB Cable](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)                     x1

PC                                  x1

Earphone or Speaker                 x1


!!!Tips
        Actually the ReSpeaker 6-Mic Circular Array support Raspberry Pi Zero, Raspberry Pi 1 B+, Raspberry Pi 2 B, Raspberry Pi 3 B, Raspberry Pi 3 model B+ and Raspberry Pi 3 A+, in this wiki we are using Raspberry Pi 3.


**Connection**


**Step 1.**  Connect the *ReSpeaker Voice Accessory HAT* with *ReSpeaker 6-Mic circular Array* via the Ribbon Cable

**Step 2.**  Plug the *ReSpeaker Voice Accessory HAT* into the *Raspberry Pi* via the 40 Pin GPIO

**Step 3.**  Plug the *earphone* into the *3.5mm headset audio jack* or plug the *speaker* into the *JST 2.0 speaker jack*

**Step 4.**  Connect the *Raspberry Pi* with the *PC* via the micro-USB cable


![Pics here](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/6-mic.jpg)


### Software

**Prerequisites**

*Plan A*

[PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

You need to use *Putty* or other *ssh* tools to connect with your raspberry pi. Before started, please make sure:

1- Open *ssh* fuction of your pi to let the putty in. If you do not know how to open *ssh*, please google `how to setup ssh raspberry pi`   

2- Your raspberry pi and your PC are working on the same WiFi net. If you do not know how to config WiFi, please google `how to setup wifi raspberry pi`

3- Get the ip address of your raspberry pi, if you do not know how to get the ip address please refer to [raspberry offical documentation](https://www.raspberrypi.org/documentation/remote-access/ip-address.md)

4- Use the ip address to connect the raspberry pi with your PC via putty ssh serve.

![pic](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/putty.png)

Then please tap the host name and the password. the default ID is `pi` and the password is `raspberry`.

```
login as: pi
pi@192.168.43.210's password:raspberry

```

Now you are in, and you can tap the command in putty and play with your raspberry.


[VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/)

To make this kit work with alexa or dueros, you need to open a web site to get the authorization. So you need to use *VNC Viewer* to log in your amazon or baidu account. So please make sure you have open the *VNC* service of your raspberry.

Or you can just consider plan B. 


*Plan B*


If you are tired of all above, you can just use a HDMI Monitor and plug the USB Keyboard and USB mouse in to your raspberry, it works too, simple and easy.


**Step 1. Install seeed-voicecard**

Get the seeed voice card source code. and install all linux kernel drivers.

```
sudo apt-get update
sudo apt-get upgrade
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
---
name: ReSpeaker 4-Mic Array for Raspberry Pi
category: ReSpeaker
bzurl: https://www.seeedstudio.com/ReSpeaker-4-Mic-Array-for-Raspberry-Pi-p-2941.html
oldwikiname:
prodimagename:
surveyurl: https://www.research.net/r/ReSpeaker_4-Mic_Array_for_Raspberry_Pi
sku: 103030216
---

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/overview.jpg)

ReSpeaker 4-Mic Array for Raspberry Pi is a quad-microphone expansion board for Raspberry Pi designed for AI and voice applications. This means that we can build a more powerful and flexible voice product that integrates Amazon Alexa Voice Service, Google Assistant, and so on.


Different from [ReSpeaker 2-Mics Pi HAT](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT-p-2874.html), this board is developed based on AC108, a highly integrated quad-channel ADC with I2S/TDM output transition for high definition voice capture, which allows the device to pick up sounds in a 3 meters radius. Besides, this 4-Mics version provides a super cool LED ring, which contains 12 APA102 programable LEDs. With that 4 microphones and the LED ring, Raspberry Pi would have ability to do VAD(Voice Activity Detection), estimate DOA(Direction of Arrival), do KWS(Keyword Search) and show the direction via LED ring, just like Amazon Echo or Google Home.

<iframe width="800" height="450" src="https://www.youtube.com/embed/uAQf0RKBNHo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/ReSpeaker-4-Mic-Array-for-Raspberry-Pi-p-2941.html)

## Features

* Raspberry Pi compatible(Support Raspberry Pi Zero and Zero W, Raspberry Pi B+, Raspberry Pi 2 B, Raspberry Pi 3 B, Raspberry Pi 3 B+, Raspberry Pi 3 A+ and Raspberry Pi 4)
* 4 Microphones
* 3 meters radius voice capture
* 2 Grove Interfaces
* 12 APA102 User LEDs
* Software Algorithm: VAD(Voice Activity Detection), DOA(Direction of Arrival) and KWS(Keyword Search)

!!!Note
    There is no audio output interface on ReSpeaker 4-Mic Array for Raspberry Pi. It is only for voice capture. We can use the [headphone jack](https://www.raspberrypi.org/documentation/configuration/audio-config.md) on Raspberry Pi for audio output.

## Application Ideas

* Voice Interaction Application
* AI Assistant

## Hardware Overview

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/features.png)

- MIC: 4 analog microphones
- LED: 12 APA102 programable RGB LEDs, connected to SPI interface
- Raspberry Pi 40-Pin Headers: support Raspberry Pi Zero, Raspberry Pi 1 B+, Raspberry Pi 2 B, Raspberry Pi 3 B and Raspberry Pi 3 B+
- AC108: highly integrated quad-channel ADC with I2S/TDM output transition
- I2C: Grove I2C port, connected to I2C-1
- GPIO12: Grove digital port, connected to GPIO12 & GPIO13

!!!Note
    If we want to use the APA102 RGB LEDs, please write HIGH to `GPIO5` first to enable VCC of the LEDs.

## Getting Started

**Connect ReSpeaker 4-Mic Array to Raspberry Pi**

Mount ReSpeaker 4-Mic Array on Raspberry Pi, make sure that the pins are properly aligned when stacking the ReSpeaker 4-Mic Array for Raspberry Pi.

!!!Note
    Hot-plugging ReSpeaker 4-Mic Array is not allowed.It will damage the respeaker.

![connection pic1](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/connect1.jpg)
![connection pic2](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/connect2.jpg)

**Install driver**

The AC108 codec is not supported by Pi kernel builds currently, we have to build it manually.

- Step 1. Please Make sure running [the lastest Raspbian Operating System(debian 9)](https://www.raspberrypi.org/downloads/raspbian/) on Pi. *(updated at 2018.11.13)*

- Step 2. Get the seeed voice card source code.

```
sudo apt-get update
sudo apt-get upgrade
git clone https://github.com/respeaker/seeed-voicecard.git
cd seeed-voicecard
sudo ./install.sh
reboot
```

- Step 3. Then select the headphone jack on Raspberry Pi for audio output:

```
sudo raspi-config
# Select 7 Advanced Options
# Select A4 Audio
# Select 1 Force 3.5mm ('headphone') jack
# Select Finish
```

- Step 4. Check that the sound card name looks like this:

```
pi@raspberrypi:~ $ arecord -L
null
    Discard all samples (playback) or generate zero samples (capture)
jack
    JACK Audio Connection Kit
pulse
    PulseAudio Sound Server
default
playback
ac108
sysdefault:CARD=seeed4micvoicec
    seeed-4mic-voicecard, 
    Default Audio Device
dmix:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard, 
    Direct sample mixing device
dsnoop:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard, 
    Direct sample snooping device
hw:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard, 
    Direct hardware device without any conversions
plughw:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard, 
    Hardware device with all software conversions
usbstream:CARD=seeed4micvoicec
    seeed-4mic-voicecard
    USB Stream Output
usbstream:CARD=ALSA
    bcm2835 ALSA
    USB Stream Output
```

If we want to change the alsa settings, we can use `sudo alsactl --file=ac108_asound.state store` to save it. And when we need to use the settings again, copy it to: `sudo cp ~/seeed-voicecard/ac108_asound.state /var/lib/alsa/asound.state`

- Step 5. Open Audacity and select **AC108 & 4 channels** as input and **bcm2835 alsa: - (hw:0:0)** as output to test:

```
$ sudo apt update
$ sudo apt install audacity
$ audacity                      // run audacity
```

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/audacity.png)

- Step 6. Or we could record with `arecord` and play with `aplay`:

```
arecord -Dac108 -f S32_LE -r 16000 -c 4 hello.wav    // only support 4 channels
aplay hello.wav                                      // make sure default device
                                                     // Audio will come out via audio jack of Raspberry Pi
```

**Play with APA102 LEDs**

Each on-board APA102 LED has an additional driver chip. The driver chip takes care of receiving the desired color via its input lines, and then holding this color until a new command is received.

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/rainbow.jpg)

- Step 1. Activate SPI:
    - sudo raspi-config
    - Go to "Interfacing Options"
    - Go to "SPI"
    - Enable SPI
    - Exit the tool
- Step 2. Get APA102 LEDs Library and examples

```
pi@raspberrypi:~ $ cd /home/pi
pi@raspberrypi:~ $ git clone https://github.com/respeaker/4mics_hat.git
pi@raspberrypi:~ $ cd /home/pi/4mics_hat
pi@raspberrypi:~/4mics_hat $ sudo apt install python-virtualenv          # install python virtualenv tool
pi@raspberrypi:~/4mics_hat $ virtualenv --system-site-packages ~/env     # create a virtual python environment
pi@raspberrypi:~/4mics_hat $ source ~/env/bin/activate                   # activate the virtual environment
(env) pi@raspberrypi:~/4mics_hat $ pip install spidev gpiozero           # install spidev and gpiozero
```

- Step 3. Then run the example code under virtualenv, now we can see the LEDs blink like Google Assistant.

```
(env) pi@raspberrypi:~/4mics_hat $ python pixels_demo.py
```



## DoA

**DOA with Keywords**

With DoA(Direction of Arrial), ReSpeaker 4-Mic Array is able to find the direction where the sound source is located.

- Step 1. setup voice engine

```
pi@raspberrypi:~ $ source ~/env/bin/activate                    # activate the virtual, if we have already activated, skip this step
(env) pi@raspberrypi:~ $ cd ~/4mics_hat
(env) pi@raspberrypi:~/4mics_hat $ sudo apt install libatlas-base-dev     # install snowboy dependencies
(env) pi@raspberrypi:~/4mics_hat $ sudo apt install python-pyaudio        # install pyaudio
(env) pi@raspberrypi:~/4mics_hat $ pip install ./snowboy*.whl             # install snowboy for KWS
---
name: ReSpeaker 6-Mic Circular Array Kit for Raspberry Pi
category: ReSpeaker
bzurl:
oldwikiname: ReSpeaker 6-Mic Circular Array Kit for Raspberry Pi
prodimagename: cover.JPG
surveyurl:  
sku: 107990055
---

![enter image description here](https://files.seeedstudio.com/products/107990055/01.png)


Seeed’s ReSpeaker 6-Mic Circular Array Kit
is an extension board, aka HAT designed for
Raspberry Pi. It's a circular microphone
array kit, comes with six microphones and
designed for AI and voice applications. That
means you can build a more powerful and
flexible voice product with Raspberry Pi
which can integrate Amazon Alexa Voice
Service, Google Assistant, and so on.

ReSpeaker 6-Mic Circular Array Kit for
Raspberry Pi consists of two boards, one is
voice accessory HAT, another is six
microphones circular array.

ReSpeaker 6-Mic Circular Array Kit for
Raspberry Pi support 8 input & 8 output
channels in Raspbian system. The first 6
input channel for microphone recording,
rest of 2 input channel are echo channel of
playback. The first 2 output channel for
playing, rest of 6 output channel are
dummy.


<iframe width="800" height="450" src="https://www.youtube.com/embed/NxZx9nz67Bc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p style=":center"><a href="https://www.seeedstudio.com/ReSpeaker-6-Mic-Circular-Array-Kit-for-Raspberry-Pi-p-3067.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>




## Features

- 2 ADC chips and 1 DAC chip
- 8 input and 8 output channels
- Six microphones array
- Grove support
- Raspberry Pi compatible(Support Raspberry Pi Zero and Zero W, Raspberry Pi B+, Raspberry Pi 2 B, Raspberry Pi 3 B, Raspberry Pi 3 B+, Raspberry Pi 3 A+ and Raspberry Pi 4)
- Headset and speaker voice output



## Specification

- 2 x X-Power AC108 ADC
- 6 x high performance microphones
- 1 x X-Power AC101 DAC
- Voice output:
    - 3.5mm headset audio jack
    - Speaker jack
- Compatible with Raspberry Pi 40-pin headers
- Microphones: MSM321A3729H9CP
- Sensitivity: -22 dBFS (Omnidirectional)
- SNR: 59 dB
- Max Sample Rate: 48Khz


## Applications

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

<a href="https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/voice_hat_acc.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/voice_hat_acc.png"/></a>

**Interface**

![](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/hardware.jpg)

!!!Note
    
    After connecting, be sure to use a multimeter to determine if the conduction of the circuit is as indicated in the figure above.

## Assembly Drawing   

![](https://files.seeedstudio.com/wiki/Bazaar_file/107990055/img/ab.png)

<p style=":center"><img src="https://files.seeedstudio.com/wiki/Bazaar_file/107990055/img/6-mic_array_assemble.gif" /></p>


## Getting Started

### Hardware

**Prerequisites**


ReSpeaker 6-Mic Circular Array    x1

[Raspberry Pi 3B or 3B+](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B%2B-p-3037.html?utm_source=homepage&utm_medium=homepagebanner&utm_campaign=hp_0605)              x1

[Micro-USB Cable](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)                     x1

PC                                  x1

Earphone or Speaker                 x1


!!!Tips
        Actually the ReSpeaker 6-Mic Circular Array support Raspberry Pi Zero, Raspberry Pi 1 B+, Raspberry Pi 2 B, Raspberry Pi 3 B, Raspberry Pi 3 model B+ and Raspberry Pi 3 A+, in this wiki we are using Raspberry Pi 3.


**Connection**


**Step 1.**  Connect the *ReSpeaker Voice Accessory HAT* with *ReSpeaker 6-Mic circular Array* via the Ribbon Cable

**Step 2.**  Plug the *ReSpeaker Voice Accessory HAT* into the *Raspberry Pi* via the 40 Pin GPIO

**Step 3.**  Plug the *earphone* into the *3.5mm headset audio jack* or plug the *speaker* into the *JST 2.0 speaker jack*

**Step 4.**  Connect the *Raspberry Pi* with the *PC* via the micro-USB cable


![Pics here](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/6-mic.jpg)


### Software

**Prerequisites**

*Plan A*

[PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

You need to use *Putty* or other *ssh* tools to connect with your raspberry pi. Before started, please make sure:

1- Open *ssh* fuction of your pi to let the putty in. If you do not know how to open *ssh*, please google `how to setup ssh raspberry pi`   

2- Your raspberry pi and your PC are working on the same WiFi net. If you do not know how to config WiFi, please google `how to setup wifi raspberry pi`

3- Get the ip address of your raspberry pi, if you do not know how to get the ip address please refer to [raspberry offical documentation](https://www.raspberrypi.org/documentation/remote-access/ip-address.md)

4- Use the ip address to connect the raspberry pi with your PC via putty ssh serve.

![pic](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/putty.png)

Then please tap the host name and the password. the default ID is `pi` and the password is `raspberry`.

```
login as: pi
pi@192.168.43.210's password:raspberry

```

Now you are in, and you can tap the command in putty and play with your raspberry.


[VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/)

To make this kit work with alexa or dueros, you need to open a web site to get the authorization. So you need to use *VNC Viewer* to log in your amazon or baidu account. So please make sure you have open the *VNC* service of your raspberry.

Or you can just consider plan B. 


*Plan B*


If you are tired of all above, you can just use a HDMI Monitor and plug the USB Keyboard and USB mouse in to your raspberry, it works too, simple and easy.


**Step 1. Install seeed-voicecard**

Get the seeed voice card source code. and install all linux kernel drivers.

```
sudo apt-get update
sudo apt-get upgrade
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
---
name: ReSpeaker 4-Mic Array for Raspberry Pi
category: ReSpeaker
bzurl: https://www.seeedstudio.com/ReSpeaker-4-Mic-Array-for-Raspberry-Pi-p-2941.html
oldwikiname:
prodimagename:
surveyurl: https://www.research.net/r/ReSpeaker_4-Mic_Array_for_Raspberry_Pi
sku: 103030216
---

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/overview.jpg)

ReSpeaker 4-Mic Array for Raspberry Pi is a quad-microphone expansion board for Raspberry Pi designed for AI and voice applications. This means that we can build a more powerful and flexible voice product that integrates Amazon Alexa Voice Service, Google Assistant, and so on.


Different from [ReSpeaker 2-Mics Pi HAT](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT-p-2874.html), this board is developed based on AC108, a highly integrated quad-channel ADC with I2S/TDM output transition for high definition voice capture, which allows the device to pick up sounds in a 3 meters radius. Besides, this 4-Mics version provides a super cool LED ring, which contains 12 APA102 programable LEDs. With that 4 microphones and the LED ring, Raspberry Pi would have ability to do VAD(Voice Activity Detection), estimate DOA(Direction of Arrival), do KWS(Keyword Search) and show the direction via LED ring, just like Amazon Echo or Google Home.

<iframe width="800" height="450" src="https://www.youtube.com/embed/uAQf0RKBNHo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/ReSpeaker-4-Mic-Array-for-Raspberry-Pi-p-2941.html)

## Features

* Raspberry Pi compatible(Support Raspberry Pi Zero and Zero W, Raspberry Pi B+, Raspberry Pi 2 B, Raspberry Pi 3 B, Raspberry Pi 3 B+, Raspberry Pi 3 A+ and Raspberry Pi 4)
* 4 Microphones
* 3 meters radius voice capture
* 2 Grove Interfaces
* 12 APA102 User LEDs
* Software Algorithm: VAD(Voice Activity Detection), DOA(Direction of Arrival) and KWS(Keyword Search)

!!!Note
    There is no audio output interface on ReSpeaker 4-Mic Array for Raspberry Pi. It is only for voice capture. We can use the [headphone jack](https://www.raspberrypi.org/documentation/configuration/audio-config.md) on Raspberry Pi for audio output.

## Application Ideas

* Voice Interaction Application
* AI Assistant

## Hardware Overview

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/features.png)

- MIC: 4 analog microphones
- LED: 12 APA102 programable RGB LEDs, connected to SPI interface
- Raspberry Pi 40-Pin Headers: support Raspberry Pi Zero, Raspberry Pi 1 B+, Raspberry Pi 2 B, Raspberry Pi 3 B and Raspberry Pi 3 B+
- AC108: highly integrated quad-channel ADC with I2S/TDM output transition
- I2C: Grove I2C port, connected to I2C-1
- GPIO12: Grove digital port, connected to GPIO12 & GPIO13

!!!Note
    If we want to use the APA102 RGB LEDs, please write HIGH to `GPIO5` first to enable VCC of the LEDs.

## Getting Started

**Connect ReSpeaker 4-Mic Array to Raspberry Pi**

Mount ReSpeaker 4-Mic Array on Raspberry Pi, make sure that the pins are properly aligned when stacking the ReSpeaker 4-Mic Array for Raspberry Pi.

!!!Note
    Hot-plugging ReSpeaker 4-Mic Array is not allowed.It will damage the respeaker.

![connection pic1](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/connect1.jpg)
![connection pic2](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/connect2.jpg)

**Install driver**

The AC108 codec is not supported by Pi kernel builds currently, we have to build it manually.

- Step 1. Please Make sure running [the lastest Raspbian Operating System(debian 9)](https://www.raspberrypi.org/downloads/raspbian/) on Pi. *(updated at 2018.11.13)*

- Step 2. Get the seeed voice card source code.

```
sudo apt-get update
sudo apt-get upgrade
git clone https://github.com/respeaker/seeed-voicecard.git
cd seeed-voicecard
sudo ./install.sh
reboot
```

- Step 3. Then select the headphone jack on Raspberry Pi for audio output:

```
sudo raspi-config
# Select 7 Advanced Options
# Select A4 Audio
# Select 1 Force 3.5mm ('headphone') jack
# Select Finish
```

- Step 4. Check that the sound card name looks like this:

```
pi@raspberrypi:~ $ arecord -L
null
    Discard all samples (playback) or generate zero samples (capture)
jack
    JACK Audio Connection Kit
pulse
    PulseAudio Sound Server
default
playback
ac108
sysdefault:CARD=seeed4micvoicec
    seeed-4mic-voicecard, 
    Default Audio Device
dmix:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard, 
    Direct sample mixing device
dsnoop:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard, 
    Direct sample snooping device
hw:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard, 
    Direct hardware device without any conversions
plughw:CARD=seeed4micvoicec,DEV=0
    seeed-4mic-voicecard, 
    Hardware device with all software conversions
usbstream:CARD=seeed4micvoicec
    seeed-4mic-voicecard
    USB Stream Output
usbstream:CARD=ALSA
    bcm2835 ALSA
    USB Stream Output
```

If we want to change the alsa settings, we can use `sudo alsactl --file=ac108_asound.state store` to save it. And when we need to use the settings again, copy it to: `sudo cp ~/seeed-voicecard/ac108_asound.state /var/lib/alsa/asound.state`

- Step 5. Open Audacity and select **AC108 & 4 channels** as input and **bcm2835 alsa: - (hw:0:0)** as output to test:

```
$ sudo apt update
$ sudo apt install audacity
$ audacity                      // run audacity
```

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/audacity.png)

- Step 6. Or we could record with `arecord` and play with `aplay`:

```
arecord -Dac108 -f S32_LE -r 16000 -c 4 hello.wav    // only support 4 channels
aplay hello.wav                                      // make sure default device
                                                     // Audio will come out via audio jack of Raspberry Pi
```

**Play with APA102 LEDs**

Each on-board APA102 LED has an additional driver chip. The driver chip takes care of receiving the desired color via its input lines, and then holding this color until a new command is received.

![](https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/rainbow.jpg)

- Step 1. Activate SPI:
    - sudo raspi-config
    - Go to "Interfacing Options"
    - Go to "SPI"
    - Enable SPI
    - Exit the tool
- Step 2. Get APA102 LEDs Library and examples

```
pi@raspberrypi:~ $ cd /home/pi
pi@raspberrypi:~ $ git clone https://github.com/respeaker/4mics_hat.git
pi@raspberrypi:~ $ cd /home/pi/4mics_hat
pi@raspberrypi:~/4mics_hat $ sudo apt install python-virtualenv          # install python virtualenv tool
pi@raspberrypi:~/4mics_hat $ virtualenv --system-site-packages ~/env     # create a virtual python environment
pi@raspberrypi:~/4mics_hat $ source ~/env/bin/activate                   # activate the virtual environment
(env) pi@raspberrypi:~/4mics_hat $ pip install spidev gpiozero           # install spidev and gpiozero
```

- Step 3. Then run the example code under virtualenv, now we can see the LEDs blink like Google Assistant.

```
(env) pi@raspberrypi:~/4mics_hat $ python pixels_demo.py
```



## DoA

**DOA with Keywords**

With DoA(Direction of Arrial), ReSpeaker 4-Mic Array is able to find the direction where the sound source is located.

- Step 1. setup voice engine

```
pi@raspberrypi:~ $ source ~/env/bin/activate                    # activate the virtual, if we have already activated, skip this step
(env) pi@raspberrypi:~ $ cd ~/4mics_hat
(env) pi@raspberrypi:~/4mics_hat $ sudo apt install libatlas-base-dev     # install snowboy dependencies
(env) pi@raspberrypi:~/4mics_hat $ sudo apt install python-pyaudio        # install pyaudio
(env) pi@raspberrypi:~/4mics_hat $ pip install ./snowboy*.whl             # install snowboy for KWS
---
name: ReSpeaker 6-Mic Circular Array Kit for Raspberry Pi
category: ReSpeaker
bzurl:
oldwikiname: ReSpeaker 6-Mic Circular Array Kit for Raspberry Pi
prodimagename: cover.JPG
surveyurl:  
sku: 107990055
---

![enter image description here](https://files.seeedstudio.com/products/107990055/01.png)


Seeed’s ReSpeaker 6-Mic Circular Array Kit
is an extension board, aka HAT designed for
Raspberry Pi. It's a circular microphone
array kit, comes with six microphones and
designed for AI and voice applications. That
means you can build a more powerful and
flexible voice product with Raspberry Pi
which can integrate Amazon Alexa Voice
Service, Google Assistant, and so on.

ReSpeaker 6-Mic Circular Array Kit for
Raspberry Pi consists of two boards, one is
voice accessory HAT, another is six
microphones circular array.

ReSpeaker 6-Mic Circular Array Kit for
Raspberry Pi support 8 input & 8 output
channels in Raspbian system. The first 6
input channel for microphone recording,
rest of 2 input channel are echo channel of
playback. The first 2 output channel for
playing, rest of 6 output channel are
dummy.


<iframe width="800" height="450" src="https://www.youtube.com/embed/NxZx9nz67Bc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p style=":center"><a href="https://www.seeedstudio.com/ReSpeaker-6-Mic-Circular-Array-Kit-for-Raspberry-Pi-p-3067.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>




## Features

- 2 ADC chips and 1 DAC chip
- 8 input and 8 output channels
- Six microphones array
- Grove support
- Raspberry Pi compatible(Support Raspberry Pi Zero and Zero W, Raspberry Pi B+, Raspberry Pi 2 B, Raspberry Pi 3 B, Raspberry Pi 3 B+, Raspberry Pi 3 A+ and Raspberry Pi 4)
- Headset and speaker voice output



## Specification

- 2 x X-Power AC108 ADC
- 6 x high performance microphones
- 1 x X-Power AC101 DAC
- Voice output:
    - 3.5mm headset audio jack
    - Speaker jack
- Compatible with Raspberry Pi 40-pin headers
- Microphones: MSM321A3729H9CP
- Sensitivity: -22 dBFS (Omnidirectional)
- SNR: 59 dB
- Max Sample Rate: 48Khz


## Applications

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

<a href="https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/voice_hat_acc.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_4-Mics_Linear_Array_Kit/img/voice_hat_acc.png"/></a>

**Interface**

![](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/hardware.jpg)

!!!Note
    
    After connecting, be sure to use a multimeter to determine if the conduction of the circuit is as indicated in the figure above.

## Assembly Drawing   

![](https://files.seeedstudio.com/wiki/Bazaar_file/107990055/img/ab.png)

<p style=":center"><img src="https://files.seeedstudio.com/wiki/Bazaar_file/107990055/img/6-mic_array_assemble.gif" /></p>


## Getting Started

### Hardware

**Prerequisites**


ReSpeaker 6-Mic Circular Array    x1

[Raspberry Pi 3B or 3B+](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B%2B-p-3037.html?utm_source=homepage&utm_medium=homepagebanner&utm_campaign=hp_0605)              x1

[Micro-USB Cable](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)                     x1

PC                                  x1

Earphone or Speaker                 x1


!!!Tips
        Actually the ReSpeaker 6-Mic Circular Array support Raspberry Pi Zero, Raspberry Pi 1 B+, Raspberry Pi 2 B, Raspberry Pi 3 B, Raspberry Pi 3 model B+ and Raspberry Pi 3 A+, in this wiki we are using Raspberry Pi 3.


**Connection**


**Step 1.**  Connect the *ReSpeaker Voice Accessory HAT* with *ReSpeaker 6-Mic circular Array* via the Ribbon Cable

**Step 2.**  Plug the *ReSpeaker Voice Accessory HAT* into the *Raspberry Pi* via the 40 Pin GPIO

**Step 3.**  Plug the *earphone* into the *3.5mm headset audio jack* or plug the *speaker* into the *JST 2.0 speaker jack*

**Step 4.**  Connect the *Raspberry Pi* with the *PC* via the micro-USB cable


![Pics here](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/6-mic.jpg)


### Software

**Prerequisites**

*Plan A*

[PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

You need to use *Putty* or other *ssh* tools to connect with your raspberry pi. Before started, please make sure:

1- Open *ssh* fuction of your pi to let the putty in. If you do not know how to open *ssh*, please google `how to setup ssh raspberry pi`   

2- Your raspberry pi and your PC are working on the same WiFi net. If you do not know how to config WiFi, please google `how to setup wifi raspberry pi`

3- Get the ip address of your raspberry pi, if you do not know how to get the ip address please refer to [raspberry offical documentation](https://www.raspberrypi.org/documentation/remote-access/ip-address.md)

4- Use the ip address to connect the raspberry pi with your PC via putty ssh serve.

![pic](https://files.seeedstudio.com/wiki/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/img/putty.png)

Then please tap the host name and the password. the default ID is `pi` and the password is `raspberry`.

```
login as: pi
pi@192.168.43.210's password:raspberry

```

Now you are in, and you can tap the command in putty and play with your raspberry.


[VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/)

To make this kit work with alexa or dueros, you need to open a web site to get the authorization. So you need to use *VNC Viewer* to log in your amazon or baidu account. So please make sure you have open the *VNC* service of your raspberry.

Or you can just consider plan B. 


*Plan B*


If you are tired of all above, you can just use a HDMI Monitor and plug the USB Keyboard and USB mouse in to your raspberry, it works too, simple and easy.


**Step 1. Install seeed-voicecard**

Get the seeed voice card source code. and install all linux kernel drivers.

```
sudo apt-get update
sudo apt-get upgrade
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
---
name: ReSpeaker Core V2 & Wio Link
category: Tutorial
bzurl: 
oldwikiname: 
prodimagename: 
bzprodimageurl: 
surveyurl: 
sku: 
tags: 
---

Here is the tutorial about how to use the ReSpeaker Core V2 to control [Wio Link](https://wiki.seeedstudio.com/Wio_Link/) through [IFTTT](https://ifttt.com/).

## 1. Setup ReSpeaker Core v2.0

Follow ReSpeaker Core v2.0 [Out of Box Demo](https://wiki.seeedstudio.com/ReSpeaker_Core_v2.0/#out-of-box-demo) to setup the respeaker core and login into alexa with username password. 

## 2. Setup Wio Link through Wio APP

Follow [Wio Link Get Starting](https://wiki.seeedstudio.com/Wio_Link/#get-started) to connect a LED on the D0 port and setup Wio APP.

## 3. Setup IFTTT

- Step 1. Sign up a [IFTTT account](https://ifttt.com/join).
- Step 2. Select **My Applets**
- Step 3. Select **New Applet**
- Step 4. Click  **+this**

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/this.png)

- Step 5. Select **amazon alexa** and login in the same amazon account as ReSpeaker Core v2.0. 

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/alexa.png)

- Step 6. Select  **Say a specific phrase**

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/say_a_specific_phase.png)

- Step 7. Enter lower-case characters keyword **on** and then click **Create Trigger**

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/key_word.png)

- Step 8. Click **+that**

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/that.png)

- Step 9. Choose **Seeed Wio** as action service.

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/wio.png)

- Step 10. Select **on, off or trigger Grove**

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/choose_action.png)

- Step 11. Select correct online Grove module and **on** as **do**.

![](https://files.seeedstudio.com/wiki/ReSpeaker_Core_V2_-_Wio_Link/on.png)

- Step 12. Follow Step 3 ~ Step 11 to add the **off** function. 

## 4. Have Fun with the Alexa

Let say "Alexa trigger on" and we can see the Grove-LED is on and LED is off when we say "Alexa trigger off". We also can use the other functions on Wio Link, such as LED string and so on. 

!!!Note
    We can also can use the google assitant to work with Wio Link.


<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>