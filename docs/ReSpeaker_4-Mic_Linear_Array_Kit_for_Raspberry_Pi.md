---
name: ReSpeaker 4-Mic Linear Array Kit
category: ReSpeaker
bzurl:
oldwikiname: ReSpeaker 4-Mic Linear Array Kit
prodimagename: cover.JPG
surveyurl: 
sku: 107990056
---

![enter image description here](https://github.com/SeeedDocument/ReSpeaker_4-Mics_Linear_Array_Kit/raw/master/img/main_wiki.jpg)


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

ReSpeaker 4-Mic Linear Array Kit for
Raspberry Pi support 8 input & 8 output
channels in Raspbian system. The first 6
input channel for microphone
recording(only first 4 input channels are
valid capture data), rest of 2 input channel
are echo channel of playback. The first 2
output channel for playing, rest of 6 output
channel are dummy.



<p style=":center"><a href="https://www.seeedstudio.com/ReSpeaker-4-Mic-Linear-Array-Kit-p-3066.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>



## Features

- 2 ADC chips and 1 DAC chip
- 8 input and 8 output channels
- Four microphones array
- Grove support
- Raspberry Pi compatible(Support Raspberry Pi Zero and Zero W, Raspberry Pi B+, Raspberry Pi 2 B, Raspberry Pi 3 B, Raspberry Pi 3 B+, Raspberry Pi 3 A+ and Raspberry Pi 4)
- Headset and speaker voice output



## Specification

- 2 x X-Power AC108 ADC
- 4 x high performance analog microphones
- 1 x X-Power AC101 DAC
- Voice output:
    - 3.5mm headset audio jack
    - Speaker jack
- Compatible with Raspberry Pi 40-pin headers
- Microphones: MSM321A3729H9CP
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

<a href="https://github.com/SeeedDocument/ReSpeaker_4-Mics_Linear_Array_Kit/raw/master/img/voice_hat_acc.png" target="_blank"><img src="https://github.com/SeeedDocument/ReSpeaker_4-Mics_Linear_Array_Kit/raw/master/img/voice_hat_acc.png"/></a>

**Interface**

![](https://github.com/SeeedDocument/ReSpeaker_4-Mics_Linear_Array_Kit/raw/master/img/Hardware.jpg)

!!!Note
    
    After connecting, be sure to use a multimeter to determine if the conduction of the circuit is as indicated in the figure above.

    
## Assembly drawing  

![](https://github.com/SeeedDocument/Bazaar_file/raw/master/107990055/img/ab.png)


## Getting Started

### Hardware

**Prerequisites**


ReSpeaker 4-Mic Linear Array Kit    x1

[Raspberry Pi 3B or 3B+](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B%2B-p-3037.html?utm_source=homepage&utm_medium=homepagebanner&utm_campaign=hp_0605)              x1

[Micro-USB Cable](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)                     x1

PC                                  x1

Earphone or Speaker                 x1


!!!Tips
        Actually the ReSpeaker 4-Mic Circular Array support Raspberry Pi Zero, Raspberry Pi 1 B+, Raspberry Pi 2 B, Raspberry Pi 3 B and Raspberry Pi 3 model B+ and Raspberry Pi 3 A+, in this wiki we are using Raspberry Pi 3.


**Connection**


**Step 1.**  Connect the *ReSpeaker Voice Accessory HAT* with *ReSpeaker 4-Mic linear Array* via the Ribbon Cable

**Step 2.**  Plug the *ReSpeaker Voice Accessory HAT* into the *Raspberry Pi* via the 40 Pin GPIO

**Step 3.**  Plug the *earphone* into the *3.5mm headset audio jack* or plug the *speaker* into the *JST 2.0 speaker jack*

**Step 4.**  Connect the *Raspberry Pi* with the *PC* via the micro-USB cable


![Pics here](https://github.com/SeeedDocument/ReSpeaker_4-Mics_Linear_Array_Kit/raw/master/img/4-mic.jpg)


### Software

**Prerequisites**

*Plan A*

[PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

You need to use *Putty* or other *ssh* tools to connect with your raspberry pi. Before started, please make sure:

1- Open *ssh* fuction of your pi to let the putty in. If you do not know how to open *ssh*, please google `how to setup ssh raspberry pi`   

2- Your raspberry pi and your PC are working on the same WiFi net. If you do not know how to config WiFi, please google `how to setup wifi raspberry pi`

3- Get the ip address of your raspberry pi, if you do not know how to get the ip address please refer to [raspberry offical documentation](https://www.raspberrypi.org/documentation/remote-access/ip-address.md)

4- Use the ip address to connect the raspberry pi with your PC via putty ssh serve.

![pic](https://github.com/SeeedDocument/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/raw/master/img/putty.png)

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

#Doing capture && playback the same time
arecord -D hw:1,0 -f S32_LE -r 16000 -c 8 to_be_record.wav &
#mono_to_play.wav is a mono channel wave file to play
aplay -D plughw:1,0 -r 16000 mono_to_play.wav

```

!!!Note
        Limit for developer using 4-Mic linear Array Kit(or 4-Mic Linear Array Kit) doing capture & playback the same time:
            
        -1. capture must be start first, or else the capture channels will possibly be disorder.
            
        -2. playback output channels must fill with 8 same channels data or 4 same stereo channels data, or else the speaker or headphone will output nothing possibly.
        
        -3. If you want to play and record at the same time, the aplay music file must be mono, or you can not use this command to play.


Also you can play and record with Audacity. 

!!!Tips
        You should open Audacity via VNC or you can just use a monitor to open it



```
$ sudo apt update
$ sudo apt install audacity
$ audacity                      // run audacity

```


![](https://github.com/SeeedDocument/ReSpeaker_4-Mics_Linear_Array_Kit/raw/master/img/audacity.png)





### Voice assistant SDK


**Step 1. Set the python-virtualenv environment**

```

sudo apt install python-virtualenv          # install python virtualenv tool
virtualenv --system-site-packages ~/env     # create a virtual python environment
source ~/env/bin/activate                   # activate the virtual environment
(env) pi@raspberrypi:~ $

```

**Step 2. Install AVS**

```
(env) pi@raspberrypi:~ $ cd ~/
(env) pi@raspberrypi:~ $ git clone https://github.com/respeaker/avs
(env) pi@raspberrypi:~ $ cd avs    # install Requirements
(env) pi@raspberrypi:~ $ python setup.py install 
(env) pi@raspberrypi:~ $ sudo apt-get install gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly gir1.2-gstreamer-1.0 python-gi python-gst-1.0
(env) pi@raspberrypi:~ $ sudo apt remove gstreamer1.0-omx gstreamer1.0-omx-rpi
```

**Step 3. Get Alexa or Baidu authorization**


To get the authorization, you need to open the *Internet Brownser* to log in your Amazon or Baidu ID, so you need to use VNC Viewer or just do it via monitor and keyboard. The same as *ssh*, you need the IP of your raspberry to log in VNC.


#### Alexa SDK

```
pi@raspberrypi:~ $ source ~/env/bin/activate
(env) pi@raspberrypi:~ $ alexa-auth
```

![](https://github.com/SeeedDocument/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/raw/master/img/auth.png)



When you log in successfully, you can tap the following command to run Alexa

```
pi@raspberrypi:~ $ source ~/env/bin/activate
(env) pi@raspberrypi:~ $ alexa-tap
```

Then you can tap the ++enter++ key to ask Alexa question and talk with Alexa.




#### Dueros SDK

If we want to switch between `alexa-auth` and `dueros-auth`, please delete `/home/pi/.avs.json` first. The file is hidden and use the `ls -la` to list the file.

```
rm -f /home/pi/.avs.json
```

Then you can use the command in VNC to log in Baidu ID

```
pi@raspberrypi:~ $ source ~/env/bin/activate
(env) pi@raspberrypi:~ $ dueros-auth
```

When you log in successfully, you can tap the following command to run Dueros.

```
pi@raspberrypi:~ $ source ~/env/bin/activate
(env) pi@raspberrypi:~ $ alexa-tap
```


#### Snowboy SDK
    
To do this part, you also need to get the authorization of Alexa or Baidu at first.

As you may see, the demos above trigger the Alexa or Dueros by tapping the ++enter++ key. What if you want to wake up the Alexa by voice?
Well, you can use snowboy. And you only need simple steps to make that happen.


```
cd ~
git clone https://github.com/respeaker/4mics_hat.git
source ~/env/bin/activate              # activate the virtual, if we have already activated, skip this step
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

After you configure this snowboy, please do the following:

```
source ~/env/bin/activate 
cd ~/voice-engine/examples
python kws_alexa_for_4mic_liner_pihat.py
```

You can call `Snowboy` to wake it up. 


## Extract Voice

We use [PyAudio python library](https://people.csail.mit.edu/hubert/pyaudio/) to extract voice.

- Step 1, We need to run the following script to get the device index number of 4 Mic pi hat:

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
Input Device id  2  -  seeed-8mic-voicecard: - (hw:1,0)
```

- Step 5, change `RESPEAKER_INDEX = 2` to index number. Run python script record.py to record a speech.

```Python
import pyaudio
import wave

RESPEAKER_RATE = 16000
RESPEAKER_CHANNELS = 8 
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

- Step 6. If you want to extract channel 0 data from 8 channels, please follow below code. For other channel X, please change [0::8] to [X::8].

```python
import pyaudio
import wave
import numpy as np

RESPEAKER_RATE = 16000
RESPEAKER_CHANNELS = 8
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
    # extract channel 0 data from 8 channels, if you want to extract channel 1, please change to [1::8]
    a = np.fromstring(data,dtype=np.int16)[0::8]
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


## FAQ

**Q1: There are only 4 Mic in the Mic Array, how could it be 8 channels?**

A1: There are 2 AC108 in this array, and each AC108 chip has 4 channel output. So it comes a total of 8 channels here, 4 of which are for the microphone, two channels for the playback and the the rest 2 channels are not used.

**Q2: If Raspberry can detect ReSpeaker 2-mics hat, but can't detect ReSpeaker 4-mics linear array?**

A2: Please click raspberry -> Preferences -> Raspberry Pi Configuration, then select the Interfaces tab, make sure the 1-Wire is Disabled.



## Resources

- **[PDF]** [AC101 Datasheet](https://github.com/SeeedDocument/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/raw/master/reg/AC101_User_Manual_v1.1.pdf)
- **[PDF]** [AC108 Datesheet](https://github.com/SeeedDocument/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/raw/master/reg/AC108_Datasheet_V1.2.pdf)
- **[Driver]** [Seeed-Voice Driver](https://github.com/respeaker/seeed-voicecard)
- **[Algorithms]** [Algorithms includes DOA, VAD, NS](https://github.com/respeaker/mic_array)
- **[Voice Engine** [Voice Engine project, provides building blocks to create voice enabled objects](https://github.com/voice-engine/voice-engine)
- **[Algorithms]** [AEC](https://github.com/voice-engine/ec)
- **[Mechanical Drawing]** [2D Drawing](https://github.com/SeeedDocument/ReSpeaker_4-Mics_Linear_Array_Kit/raw/master/res/2d.zip)

## Projects

**Mojing Mojing - A Smart Mirror with ReSpeaker!**: A smart mirror with voice interface control via ReSpeaker. We also connect with Wio Link to control other objects! Based on Raspberry Pi. 

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/SeeedStudio/mojing-mojing-a-smart-mirror-with-respeaker-e1ae20/embed' width='350'></iframe>

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/).

<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>