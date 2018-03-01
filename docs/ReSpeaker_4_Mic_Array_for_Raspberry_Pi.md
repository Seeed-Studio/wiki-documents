---
title: ReSpeaker 4-Mic Array for Raspberry Pi
category: ReSpeaker
bzurl: https://www.seeedstudio.com/ReSpeaker-4-Mic-Array-for-Raspberry-Pi-p-2941.html
oldwikiname:
prodimagename:
surveyurl: https://www.research.net/r/ReSpeaker_4-Mic_Array_for_Raspberry_Pi
sku: 103030216
---

![](https://github.com/SeeedDocument/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/blob/master/img/overview.jpg?raw=true)

ReSpeaker 4-Mic Array for Raspberry Pi is a quad-microphone expansion board for Raspberry Pi designed for AI and voice applications. This means that we can build a more powerful and flexible voice product that integrates Amazon Alexa Voice Service, Google Assistant, and so on.


Different from [ReSpeaker 2-Mics Pi HAT](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT-p-2874.html), this board is developed based on AC108, a highly integrated quad-channel ADC with I2S/TDM output transition for high definition voice capture, which allows the device to pick up sounds in a 3 meters radius. Besides, this 4-Mics version provides a super cool LED ring, which contains 12 APA102 programable LEDs. With that 4 microphones and the LED ring, Raspberry Pi would have ability to do VAD(Voice Activity Detection), estimate DOA(Direction of Arrival), do KWS(Keyword Search) and show the direction via LED ring, just like Amazon Echo or Google Home.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/ReSpeaker-4-Mic-Array-for-Raspberry-Pi-p-2941.html)

## Features

* Raspberry Pi compatible(Support Raspberry Pi Zero and Zero W, Raspberry Pi B+, Raspberry Pi 2 B and Raspberry Pi 3 B)
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

![](https://github.com/SeeedDocument/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/blob/master/img/features.png?raw=true)

- MIC: 4 analog microphones
- LED: 12 APA102 programable RGB LEDs, connected to SPI interface
- Raspberry Pi 40-Pin Headers: support Raspberry Pi Zero, Raspberry Pi 1 B+, Raspberry Pi 2 B and Raspberry Pi 3 B
- AC108: highly integrated quad-channel ADC with I2S/TDM output transition
- I2C: Grove I2C port, connected to I2C-1
- GPIO12: Grove digital port, connected to GPIO12 & GPIO13

!!!Note
    If we want to use the APA102 RGB LEDs, please write HIGH to `GPIO5` first to enable VCC of the LEDs.

## Getting Started

### Connect ReSpeaker 4-Mic Array to Raspberry Pi

Mount ReSpeaker 4-Mic Array on Raspberry Pi, make sure that the pins are properly aligned when stacking the ReSpeaker 4-Mic Array for Raspberry Pi.

!!!Note
    Hot-plugging ReSpeaker 4-Mic Array is not allowed.It will damage the respeaker.

![connection pic1](https://github.com/SeeedDocument/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/blob/master/img/connect1.jpg?raw=true)
![connection pic2](https://github.com/SeeedDocument/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/blob/master/img/connect2.jpg?raw=true)

### Install driver

The AC108 codec is not supported by Pi kernel builds currently, we have to build it manually.

#### 1. Please Make sure running [the lastest Raspbian Operating System(debian 9)](https://www.raspberrypi.org/downloads/raspbian/) on Pi. *(updated at 2017.09.15)*

#### 2. Get the seeed voice card source code.
```
git clone https://github.com/respeaker/seeed-voicecard.git
cd seeed-voicecard
sudo ./install.sh 4mic
reboot
```

#### 3. Then select the headphone jack on Raspberry Pi for audio output:
```
sudo raspi-config
# Select 7 Advanced Options
# Select A4 Audio
# Select 1 Force 3.5mm ('headphone') jack
# Select Finish
```

#### 4. Check that the sound card name looks like this:
```
pi@raspberrypi:~/seeed-voicecard $ arecord -L
null
    Discard all samples (playback) or generate zero samples (capture)
playback
capture
dmixed
array
ac108
default:CARD=seeed4micvoicec
    seeed-4mic-voicecard,
    Default Audio Device
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
```

If we want to change the alsa settings, we can use `sudo alsactl --file=ac108_asound.state store` to save it. And when we need to use the settings again, copy it to: `sudo cp ~/seeed-voicecard/ac108_asound.state /var/lib/alsa/asound.state`

#### 5. Open Audacity and select **AC108 & 4 channels** as input and **bcm2835 alsa: - (hw:0:0)** as output to test:
```
$ sudo apt update
$ sudo apt install audacity
$ audacity                      // run audacity
```

![](https://github.com/SeeedDocument/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/blob/master/img/audacity.png?raw=true)

#### 6. Or we could record with `arecord` and play with `aplay`:

```
arecord -Dac108 -f S32_LE -r 16000 -c 4 hello.wav    // only support 4 channels
aplay hello.wav                                      // make sure default device
                                                     // Audio will come out via audio jack of Raspberry Pi
```

### Play with APA102 LEDs

Each on-board APA102 LED has an additional driver chip. The driver chip takes care of receiving the desired color via its input lines, and then holding this color until a new command is received.

![](https://github.com/SeeedDocument/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/blob/master/img/rainbow.jpg?raw=true)

#### 1. Activate SPI:
    - sudo raspi-config
    - Go to "Interfacing Options"
    - Go to "SPI"
    - Enable SPI
    - Exit the tool
#### 2. Get APA102 LEDs Library and examples

```
pi@raspberrypi:~ $ cd /home/pi
pi@raspberrypi:~ $ git clone https://github.com/respeaker/4mics_hat.git
pi@raspberrypi:~ $ cd /home/pi/4mics_hat
pi@raspberrypi:~/4mics_hat $ sudo apt install python-virtualenv          # install python virtualenv tool
pi@raspberrypi:~/4mics_hat $ virtualenv --system-site-packages ~/env     # create a virtual python environment
pi@raspberrypi:~/4mics_hat $ source ~/env/bin/activate                   # activate the virtual environment
(env) pi@raspberrypi:~/4mics_hat $ pip install spidev gpiozero           # install spidev and gpiozero
```

#### 3. Then run the example code under virtualenv, now we can see the LEDs blink like Google Assistant.

```
(env) pi@raspberrypi:~/4mics_hat $ python pixels_demo.py
```



### DoA on ReSpeaker 4-Mic Array for Raspberry Pi

With DoA(Direction of Arrial), ReSpeaker 4-Mic Array is able to find the direction where the sound source is located.

#### 1. setup voice engine

```
pi@raspberrypi:~ $ source ~/env/bin/activate                    # activate the virtual, if we have already activated, skip this step
(env) pi@raspberrypi:~ $ cd ~/4mics_hat
(env) pi@raspberrypi:~/4mics_hat $ sudo apt install libatlas-base-dev     # install snowboy dependencies
(env) pi@raspberrypi:~/4mics_hat $ sudo apt install python-pyaudio        # install pyaudio
(env) pi@raspberrypi:~/4mics_hat $ pip install ./snowboy*.whl             # install snowboy for KWS
(env) pi@raspberrypi:~/4mics_hat $ pip install ./webrtc*.whl              # install webrtc for DoA
(env) pi@raspberrypi:~/4mics_hat $ cd ~/
(env) pi@raspberrypi:~ $ git clone https://github.com/voice-engine/voice-engine
(env) pi@raspberrypi:~ $ cd voice-engine/
(env) pi@raspberrypi:~/voice-engine $ python setup.py install
```

#### 2. Run the demo under virtualenv. Please wake up respeaker with saying `snowboy` and we will see the direction.

```
(env) pi@raspberrypi:~/voice-engine $ cd ~/4mics_hat
(env) pi@raspberrypi:~/4mics_hat $ python kws_doa.py
```




### Play with Alexa, Baidu and Snowboy

#### 1. Get Alexa or Baidu authorization

```
pi@raspberrypi:~ $ source ~/env/bin/activate                    # activate the virtual, if we have already activated, skip this step
(env) pi@raspberrypi:~ $ cd ~/
(env) pi@raspberrypi:~ $ git clone https://github.com/respeaker/avs
(env) pi@raspberrypi:~ $ cd avs                                 # install Requirements
(env) pi@raspberrypi:~ $ python setup.py install                               
(env) pi@raspberrypi:~/avs $ sudo apt install gstreamer1.0 gstreamer1.0-plugins-good gstreamer1.0-plugins-ugly
(env) pi@raspberrypi:~/avs $ sudo apt install python-gi gir1.2-gstreamer-1.0
(env) pi@raspberrypi:~/avs $ pip install tornado
```
Then open a terminal at [VNC](https://www.raspberrypi.org/documentation/remote-access/vnc/), switch to the python virtual env with 
```
# note: this is in the VNC terminal
pi@raspberrypi:~ $ source ~/env/bin/activate
(env) pi@raspberrypi:~ $ alexa-auth
```

Run `alexa-auth` in the terminal to get Alexa authorization or run `dueros-auth` to get Baidu authorization. The authorization file will be saved in `/home/pi/.avs.json`.

![](https://github.com/SeeedDocument/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/raw/master/img/auth.png)

!!!Note
    If we want to switch between `alexa-auth` and `dueros-auth`, please delete `/home/pi/.avs.json` first. The file is hidden and use the `ls -la` to list the file.

#### 2. Let's Enjoy!

Now run `python ns_kws_doa_alexa_with_light.py` under virtualenv, we will see lots of debug message rasing in the terminal. When we see **status code: 204**, try to wake up respeaker with saying `snowboy`. Then the leds will light up, and now we can speak to it, for example, asking "who is the most handsome guy in the world?" or "Do you know how to beat-box?". Just enjoy it!

```
(env) pi@raspberrypi:~/avs $ cd ~/4mics_hat
(env) pi@raspberrypi:~/4mics_hat $ python ns_kws_doa_alexa_with_light.py
```



## Resources

**[PDF]** [ ReSpeaker 4-Mic Array for Raspberry Pi(PDF)](https://github.com/SeeedDocument/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/blob/master/src/ReSpeaker%204-Mic%20Array%20for%20Raspberry%20Pi%20%20v1.0.pdf)
