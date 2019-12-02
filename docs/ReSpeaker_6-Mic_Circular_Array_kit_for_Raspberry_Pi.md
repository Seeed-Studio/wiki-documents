---
name: ReSpeaker 6-Mic Circular Array Kit for Raspberry Pi
category: ReSpeaker
bzurl:
oldwikiname: ReSpeaker 6-Mic Circular Array Kit for Raspberry Pi
prodimagename: cover.JPG
surveyurl:  
sku: 107990055
---

![enter image description here](https://github.com/SeeedDocument/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/raw/master/img/IMG_6051.jpg)


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

<p style=":center"><a href="https://www.seeedstudio.com/ReSpeaker-6-Mic-Circular-Array-Kit-for-Raspberry-Pi-p-3067.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>




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

<a href="https://github.com/SeeedDocument/ReSpeaker_4-Mics_Linear_Array_Kit/raw/master/img/voice_hat_acc.png" target="_blank"><img src="https://github.com/SeeedDocument/ReSpeaker_4-Mics_Linear_Array_Kit/raw/master/img/voice_hat_acc.png"/></a>

**Interface**

![](https://github.com/SeeedDocument/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/raw/master/img/hardware.jpg)

!!!Note
    
    After connecting, be sure to use a multimeter to determine if the conduction of the circuit is as indicated in the figure above.

## Assembly Drawing   

![](https://github.com/SeeedDocument/Bazaar_file/raw/master/107990055/img/ab.png)

<p style=":center"><img src="https://github.com/SeeedDocument/Bazaar_file/raw/master/107990055/img/6-mic_array_assemble.gif" /></p>




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


![Pics here](https://github.com/SeeedDocument/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/raw/master/img/6-mic.jpg)


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
        Limit for developer using 6-Mic Circular Array Kit(or 4-Mics Linear Array Kit) doing capture & playback the same time:
            
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


![](https://github.com/SeeedDocument/Respeaker_V2/raw/master/img/audacity.png)


### Play with LEDs


There are 12 GRB LEDs in the 6-mic circular array, you can configure the LEDs yourself, now let's see how to light them up.

```
git clone --depth 1 https://github.com/respeaker/pixel_ring.git
cd pixel_ring
pip install -U -e .
python examples/respeaker_4mic_array.py

```

You will see LEDs light and run. And you can refer to the `python examples/respeaker_4mic_array.py` file to make your own effects.




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

Then you can tap the ++enter++ key to ask Dueros question and talk with her.



#### Play with Snowboy（With Doa Function）

    
To do this part, you also need to get the authorization of Alexa or Baidu at first.

As you may see, the demos above trigger the Alexa or Dueros by tapping the ++enter++ key. What if you want to wake up the Alexa by voice?
Well, you can use snowboy. And you only need simple steps to make that happen.

**Step 1. Install Snowboy**
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

**Step 2. Configure Pulse Audio**
```
cd ~
sudo apt install pulseaudio
cd seeed-voicecard
cd pulseaudio
cd pulse_config_6mic
sudo cp seeed-voicecard.conf /usr/share/pulseaudio/alsa-mixer/profile-sets/
```
Then you need to edit the rules.
As the system start, when the card "seeed8micvoicec" is detected, the PULSE_PROFILE_SET variable will be set in the udev database, and PulseAudio will be forced to use `seeed-voicecard.conf`.
At first, please use the following command to check the rule.
```
sudo nano /lib/udev/rules.d/90-pulseaudio.rules

```
Then add the following lines at about line 87(behind the setting for some laptops and before the line GOTO="pulseaudio_end")
```
# Seeed Voicecard
ATTR{id}=="seeed8micvoicec",ATTR{number}=="1",ENV{PULSE_PROFILE_SET}="seeed-voicecard.conf"

```
It should be like:
![](https://github.com/respeaker/seeed-voicecard/raw/master/pulseaudio/udev_rules_6mic.png)
Then presss ++ctrl+x++ to quite, and tap ++y++ to save the modification you've just made.
The value of ATTR{number} can be found with command:
```
udevadm info -a -p /sys/class/sound/card1/:
```

**Step 3. config `default.pa` and `daemon.conf`**
```
sudo cp default.pa /etc/pulse/
sudo cp daemon.conf /etc/pulse/
```

**Step 4. reboot raspberry pi and check**
```
sudo reboot
pulseaudio --start  # start pulse at first
pactl info  # check the setting

# The output should be like this
# You could see the default sink is seeed-2ch and default source is seeed-8ch
pi@raspberrypi:~ $ pactl info
Server String: /run/user/1000/pulse/native
Library Protocol Version: 32
Server Protocol Version: 32
Is Local: yes
Client Index: 6
Tile Size: 65496
User Name: pi
Host Name: raspberrypi
Server Name: pulseaudio
Server Version: 10.0
Default Sample Specification: s32le 8ch 96000Hz
Default Channel Map: front-left,front-left-of-center,front-center,front-right,front-right-of-center,rear-center,aux0,aux1
Default Sink: alsa_output.platform-soc_sound.seeed-2ch
Default Source: alsa_input.platform-soc_sound.seeed-8ch
Cookie: 3523:e5af
```

After you configure this snowboy, please do the following:


```
source ~/env/bin/activate 
cd ~/voice-engine/examples
python kws_doa_alexa_for_6mic_array_pihat.py
```
Then you will see the LEDs light up, and you can call `Snowboy` to wake it up. The <font color ="Green">Green LED</font> will point to the direction of wake up word.

## Librespeaker Aduio Process

Librespeaker is an audio processing library which can perform noise suppression, direction of arrival calculation, beamforming, hotword searching. It reads the microphoone stream from linux sound server, e.g. PulseAudio.

### Install librespeaker

**1. Add the apt repository of Seeed**

```shell
echo "deb https://seeed-studio.github.io/pi_repo/ stretch main" | sudo tee /etc/apt/sources.list.d/seeed.list
curl https://seeed-studio.github.io/pi_repo/public.key | sudo apt-key add -
sudo apt update
```

**2. Install librespeaker and dependencies** 
 
```shell
sudo apt install -y librespeaker-dev libsndfile1-dev libasound2-dev 
# Reboot to make configuration effective
sudo reboot 
```

### Librespeaker Examples

Here is the list of examples in [Librespeaker Documentation](http://wiki.seeedstudio.com/librespeaker_doc/examples.html). These examples will help you understand how to make different applications with librespeaker. 

First of all, as an audio processing application, we always have to collect audio stream. In librespeaker, we have 3 ways to capture audio stream: PulseAudio Server, ALSA API and a wav file.

**1. PulseAudio Server**

PulseAudio is a sound system for POSIX OSes, meaning that it is a proxy for your sound applications. It allows you to do advanced operations on your sound data as it passes between your application and your hardware.

- Step1. PulseAudio Configuration 

To use PulseAudio on Raspberry Pi with 6-Mics Circular Array Kit, please follow below steps. If you done the [Play with Snowboy（With Doa Function](http://wiki.seeedstudio.com/ReSpeaker_6-Mic_Circular_Array_kit_for_Raspberry_Pi/#play-with-snowboywith-doa-function), please bypass this step. For more info, please refer to [this guide](https://github.com/respeaker/seeed-voicecard/tree/master/pulseaudio#pulseaudio-configuration-for-seeed-voicecard). 


```
sudo apt install pulseaudio
cd ~/seeed-voicecard/pulseaudio/
sudo cp pulse_config_6mic/seeed-voicecard.conf /usr/share/pulseaudio/alsa-mixer/profile-sets/seeed-voicecard-8mic.conf
sudo cp 91-seeedvoicecard.rules /etc/udev/rules.d/91-seeedvoicecard.rules
sudo cp pulse_config_6mic/default.pa /etc/pulse/
sudo cp pulse_config_6mic/daemon.conf /etc/pulse/
sudo reboot
pulseaudio --start 
pactl info 
```

You will see the output as below. 

```
pi@raspberrypi:~ $ pactl info 
Server String: unix:/run/user/1000/pulse/native
Library Protocol Version: 32
Server Protocol Version: 32
Is Local: yes
Client Index: 8
Tile Size: 65496
User Name: pi
Host Name: raspberrypi
Server Name: pulseaudio
Server Version: 10.0
Default Sample Specification: s32le 8ch 96000Hz
Default Channel Map: front-left,front-left-of-center,front-center,front-right,front-right-of-center,rear-center,aux0,aux1
Default Sink: alsa_output.platform-soc_sound.seeed-2ch
Default Source: alsa_input.platform-soc_sound.seeed-8ch
Cookie: ba71:cba6
```

- Step2. C++ Coding

The example [pulse_snowboy_1b_test.cc](http://wiki.seeedstudio.com/librespeaker_doc/pulse_snowboy_1b_test_8cc-example.html) shows how to use the VepAecBeamformingNode node, the Snowboy1bDoaKwsNode node and the ReSpeaker supervisor, to make a simple snowboy KWS demo. This example supports keyword "alexa" and "snowboy", adjustable target gain level and wav log.


```shell
cd ~
#copy above link code to pulse_snowboy_1b_test.cc, then press Ctrl+X, and Y to save the file.
nano pulse_snowboy_1b_test.cc
# compile
g++ pulse_snowboy_1b_test.cc -o pulse_snowboy_1b_test -lrespeaker -lsndfile -fPIC -std=c++11 -fpermissive -I/usr/include/respeaker/ -DWEBRTC_LINUX -DWEBRTC_POSIX -DWEBRTC_NS_FLOAT -DWEBRTC_APM_DEBUG_DUMP=0 -DWEBRTC_INTELLIGIBILITY_ENHANCER=0
# run, then say "snowboy" to test the KWS engine
./pulse_snowboy_1b_test
# show the help page of this example
./pulse_snowboy_1b_test --help
```

Here is the output as below. We can see the DOA as 60, hotword dectect count as 12 times, the major audio comes from channel 0. 

```
collector: 18, vep_1beam: 0, snowboy_kws: 0
collector: 8, vep_1beam: 0, snowboy_kws: 0
collector: 4, vep_1beam: 0, snowboy_kws: 0
collector: 19, vep_1beam: 0, snowboy_kws: 0
collector: 7, vep_1beam: 1, snowboy_kws: 0
collector: 6, vep_1beam: 0, snowboy_kws: 0
collector: 20, vep_1beam: 0, snowboy_kws: 0
collector: 7, vep_1beam: 0, snowboy_kws: 0
(155274ms)DEBUG -- DoA: 60 Vep: 1902, 2045, 1555, 1704, 1728, 2064, 1881 Chan: 0 Chan_real: 0  [snowboy_1b_doa_kws_node.cc:429]
(155274ms)DEBUG -- DoA: 60 Vep: 1912, 2055, 1564, 1713, 1738, 2074, 1890 Chan: 0 Chan_real: 0  [snowboy_1b_doa_kws_node.cc:429]
(155275ms)DEBUG -- DoA: 60 Vep: 1921, 2065, 1574, 1723, 1748, 2084, 1900 Chan: 0 Chan_real: 0  [snowboy_1b_doa_kws_node.cc:429]
(155275ms)DEBUG -- DoA: 60 Vep: 1931, 2075, 1584, 1733, 1758, 2093, 1910 Chan: 0 Chan_real: 0  [snowboy_1b_doa_kws_node.cc:429]
(155275ms)DEBUG -- DoA: 60 Vep: 1940, 2085, 1593, 1742, 1768, 2103, 1920 Chan: 0 Chan_real: 0  [snowboy_1b_doa_kws_node.cc:429]
(155275ms)DEBUG -- DoA: 60 Vep: 1948, 2094, 1602, 1750, 1777, 2111, 1928 Chan: 0 Chan_real: 0  [snowboy_1b_doa_kws_node.cc:429]
(155275ms)DEBUG -- DoA: 60 Vep: 1952, 2102, 1608, 1757, 1784, 2117, 1934 Chan: 0 Chan_real: 0  [snowboy_1b_doa_kws_node.cc:429]
(155275ms)DEBUG -- DoA: 60 Vep: 1951, 2110, 1612, 1765, 1788, 2120, 1938 Chan: 0 Chan_real: 0  [snowboy_1b_doa_kws_node.cc:429]
(155275ms)DEBUG -- DoA: 60 Vep: 1947, 2114, 1615, 1770, 1789, 2122, 1941 Chan: 0 Chan_real: 0  [snowboy_1b_doa_kws_node.cc:429]
(155275ms)DEBUG -- DoA: 60 Vep: 1946, 2118, 1617, 1775, 1787, 2125, 1944 Chan: 0 Chan_real: 0  [snowboy_1b_doa_kws_node.cc:429]
hotword_count = 12
```

!!!Note
    If you need to see the process audio, you can set **bool enable_wav = false;** to true. Then you can get **pulse_snowboy_1b_test.wav** processed audio file.

**2. ALSA API**

ALSA stands for Advanced Linux Sound Architecture. It provides audio and MIDI functionality to the Linux operating system. If you want a more efficient(low latency and low CPU consumption) way to capture voice, ALSA will be your choice.

- Step1. Audio Setting 

If pulseaudio is running, the output of the **ps aux|grep pulse** will be as below. 

```shell
pi@raspberrypi:~ $ ps aux|grep pulse
pi         978  0.1  0.9 112456  9236 ?        S<l  18:48   0:01 /usr/bin/pulseaudio --start --log-target=syslog
pi        1247  0.0  0.0   4376   564 pts/0    S+   18:57   0:00 grep --color=auto pulse
```

please make sure that **pulseaudio is not running** by below commands: 

```shell
$ pulseaudio --k
$ ps aux|grep pulse
pi        1355  0.0  0.0   4376   568 pts/0    S+   16:48   0:00 grep --color=auto pulse
```
    
- Step2. C++ Coding

The example [alsa_snips_1b_test.cc](http://wiki.seeedstudio.com/librespeaker_doc/alsa_snips_1b_test_8cc-example.html) shows how to use the AlsaCollectorNode node with VepAecBeamformingNode node and Snips1bDoaKwsNode node.


```shell
cd ~
#copy above link code to alsa_snips_1b_test.cc, then press Ctrl+X, and Y to save the file.
nano alsa_snips_1b_test.cc
# compile
g++ alsa_snips_1b_test.cc -o alsa_snips_1b_test -lrespeaker -lsndfile -fPIC -std=c++11 -fpermissive -I/usr/include/respeaker/ -DWEBRTC_LINUX -DWEBRTC_POSIX -DWEBRTC_NS_FLOAT -DWEBRTC_APM_DEBUG_DUMP=0 -DWEBRTC_INTELLIGIBILITY_ENHANCER=0
# run, then say "hey, snips" to test the KWS engine
./alsa_snips_1b_test
# show the help page of this example
./alsa_snips_1b_test --help
```

Here is the output as below. We can see the DOA as 30, hotword dectect count as 2 times, the major audio comes from channel 0. 

```
collector: 0, vep_1beam: 16, snips_kws: 0
collector: 1, vep_1beam: 0, snips_kws: 0
collector: 0, vep_1beam: 16, snips_kws: 0
collector: 2, vep_1beam: 0, snips_kws: 0
collector: 2, vep_1beam: 0, snips_kws: 5
collector: 2, vep_1beam: 0, snips_kws: 0
(9560ms)DEBUG -- DoA: 30 Vep: 1674, 1078, 1348, 1196, 1351, 1796, 1596 Chan: 0  [snips_1b_doa_kws_node.cc:423]
(9560ms)DEBUG -- DoA: 30 Vep: 1667, 1065, 1339, 1185, 1342, 1787, 1588 Chan: 0  [snips_1b_doa_kws_node.cc:423]
(9560ms)DEBUG -- DoA: 30 Vep: 1661, 1055, 1331, 1175, 1333, 1779, 1580 Chan: 0  [snips_1b_doa_kws_node.cc:423]
(9560ms)DEBUG -- DoA: 30 Vep: 1655, 1046, 1321, 1166, 1324, 1771, 1573 Chan: 0  [snips_1b_doa_kws_node.cc:423]
(9560ms)DEBUG -- DoA: 30 Vep: 1646, 1036, 1311, 1155, 1314, 1763, 1564 Chan: 0  [snips_1b_doa_kws_node.cc:423]
hotword_count = 2
```

**3. WAV FILE**

If you need to test the performance of KWS, ASR, NLP or something else, it is not a good way to test it with your mouth repeatly. It is recommanded to record a testing recording first, and just send the recording to your program to get the result.

[file_1beam_test.cc](http://wiki.seeedstudio.com/librespeaker_doc/file_1beam_test_8cc-example.html) shows how to read a 8-channels 16K 16-bit wav file, send the recording stream to VepAecBeamformingNode node and detect hotword from the output beam. This example supports keyword "alexa", "snowboy" and "heysnips", adjustable target gain level and wav log.


```shell
cd ~
#copy above link code to file_1beam_test.cc, then press Ctrl+X, and Y to save the file.
nano file_1beam_test.cc
# compile
g++ file_1beam_test.cc -o file_1beam_test -lrespeaker -lsndfile -fPIC -std=c++11 -fpermissive -I/usr/include/respeaker/ -DWEBRTC_LINUX -DWEBRTC_POSIX -DWEBRTC_NS_FLOAT -DWEBRTC_APM_DEBUG_DUMP=0 -DWEBRTC_INTELLIGIBILITY_ENHANCER=0
# record a testing wav file to test keyword "snowboy"
arecord -Dac108 -c 8 -r 16000 -f S16_LE my_test.wav
# run
./file_1beam_test -f my_test.wav
# you need to press Ctrl+C to exit when the log is stopped
```

Here is the output as below. We can see the DOA as 330, hotword dectect count as 1 times, the major audio comes from channel 4. 

```
......................(1932ms)DEBUG -- DoA: 330 Vep: 4212, 4382, 4218, 4737, 4884, 5013, 4776 Chan: 4 Chan_real: 4  [snowboy_1b_doa_kws_node.cc:429]
(1933ms)DEBUG -- DoA: 330 Vep: 4206, 4376, 4212, 4729, 4877, 5006, 4770 Chan: 4 Chan_real: 4  [snowboy_1b_doa_kws_node.cc:429]
(1933ms)DEBUG -- DoA: 330 Vep: 4200, 4369, 4205, 4720, 4869, 4999, 4764 Chan: 4 Chan_real: 4  [snowboy_1b_doa_kws_node.cc:429]
(1933ms)DEBUG -- DoA: 330 Vep: 4193, 4363, 4200, 4712, 4861, 4992, 4757 Chan: 4 Chan_real: 4  [snowboy_1b_doa_kws_node.cc:429]
(1933ms)DEBUG -- DoA: 330 Vep: 4187, 4357, 4194, 4703, 4854, 4985, 4751 Chan: 4 Chan_real: 4  [snowboy_1b_doa_kws_node.cc:429]
(1933ms)DEBUG -- DoA: 330 Vep: 4180, 4351, 4188, 4691, 4845, 4976, 4743 Chan: 4 Chan_real: 4  [snowboy_1b_doa_kws_node.cc:429]
(1933ms)DEBUG -- DoA: 330 Vep: 4168, 4343, 4181, 4677, 4836, 4967, 4733 Chan: 4 Chan_real: 4  [snowboy_1b_doa_kws_node.cc:429]
(1933ms)DEBUG -- DoA: 330 Vep: 4158, 4336, 4173, 4664, 4825, 4957, 4724 Chan: 4 Chan_real: 4  [snowboy_1b_doa_kws_node.cc:429]
(1933ms)DEBUG -- DoA: 330 Vep: 4149, 4327, 4162, 4653, 4811, 4944, 4712 Chan: 4 Chan_real: 4  [snowboy_1b_doa_kws_node.cc:429]
(1933ms)DEBUG -- DoA: 330 Vep: 4141, 4317, 4149, 4642, 4794, 4929, 4700 Chan: 4 Chan_real: 4  [snowboy_1b_doa_kws_node.cc:429]
hotword_count = 1
```


**4. Another way to output processed audio: ALOOP** 

AloopOutputNode is designed to redirect the processed audio stream into a specific Alsa device(Loopback PCM). In this way, some third-party voice assistants can get  real-time processed audio stream from a PCM device, which provides a convenient way to build your application.

[alsa_aloop_test.cc](http://wiki.seeedstudio.com/librespeaker_doc/alsa_aloop_test_8cc-example.html) shows how to achieve it. To run this example, you have to run 'sudo modprobe snd-aloop' first. And make sure "pulseaudio" doesn't start, then, after runing this example, you can open another terminal and use `arecord -Dhw:Loopback,1,0 -c 1 -r 16000 -f S16_LE loop_test.wav` to arecord the processed audio stream. Further more, you can setup a third party voice assistant to capture voice from "hw:Loopback,1,0", to run the assistant directly. Check [respeaker::AloopOutputNode Class Reference](http://wiki.seeedstudio.com/librespeaker_doc/classrespeaker_1_1AloopOutputNode.html) for more details of this node.

```shell
cd ~
#copy above link code to alsa_aloop_test.cc, then press Ctrl+X, and Y to save the file.
nano alsa_aloop_test.cc
# compile
g++ alsa_aloop_test.cc -o alsa_aloop_test -lrespeaker -lsndfile -fPIC -std=c++11 -fpermissive -I/usr/include/respeaker/ -DWEBRTC_LINUX -DWEBRTC_POSIX -DWEBRTC_NS_FLOAT -DWEBRTC_APM_DEBUG_DUMP=0 -DWEBRTC_INTELLIGIBILITY_ENHANCER=0
```

## Respeakerd Aduio Process

Respeakerd is the server application for the microphone array solutions of SEEED, based on librespeaker which combines the audio front-end processing algorithms.

The guide of respeakerd can be found at [here](https://github.com/respeaker/respeakerd/tree/master). Download that repository to your Pi. Don't forget to do `Alexa authorization` and update avs `sudo pip install -U avs` before you run python client of respeakerd `python ~/respeakerd/clients/Python/demo_pi_vep_alexa.py`.

## Realtime Sound Source Localization and Tracking

[ODAS](https://github.com/introlab/odas) stands for Open embeddeD Audition System. This is a library dedicated to perform sound source localization, tracking, separation and post-filtering. Let's have a fun with it.

- Step 1. Get ODAS and build it.

```
sudo apt-get install libfftw3-dev libconfig-dev libasound2-dev libgconf-2-4
sudo apt-get install cmake
git clone https://github.com/introlab/odas.git
mkdir odas/build
cd odas/build
cmake ..
make
```

- Step 2. Get [ODAS Studio](https://github.com/introlab/odas_web/releases)  and open it.

- Step 3. The odascore will be at **odas/bin/odaslive**, the **config file** is at [here](https://raw.githubusercontent.com/xiongyihui/odas/master/config/odaslive/respeaker_6_mic_array.cfg). 

![](https://github.com/SeeedDocument/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/raw/master/img/odas.png)


## Extract Voice

We use [PyAudio python library](https://people.csail.mit.edu/hubert/pyaudio/) to extract voice.

- Step 1, We need to run the following script to get the device index number of 6 Mic pi hat:

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

## DOA

### DOA with Keywords

**Requirements**

- pyaudio
- numpy
- snowboy

**Installation**

Install pyaudio, numpy and snowboy, use virtualenv a virtual python environment.

```shell
sudo apt install python-pyaudio python-numpy python-virtualenv
sudo apt-get install swig python-dev libatlas-base-dev build-essential make
git clone --depth 1 https://github.com/Kitt-AI/snowboy.git
cd snowboy
virtualenv --system-site-packages env
source env/bin/activate
python setup.py build
python setup.py bdist_wheel
pip install dist/snowboy*.whl
git clone https://github.com/voice-engine/voice-engine.git
cd voice-engine
python setup.py bdist_wheel
pip install dist/*.whl
```

**Let's say snowboy**

- Step 1. Run the kws_doa.py 

```shell
cd ~/voice-engine/examples/respeaker_6mic_array_for_pi/
python kws_doa.py
```

Here is the code of the kws_doa.py

```python
"""
Search the keyword "snowboy".
After finding the keyword, Direction Of Arrival (DOA) is estimated.

Hardware: ReSpeaker 6 Mic Array for Raspberry Pi
"""

import sys
import time
from voice_engine.source import Source
from voice_engine.channel_picker import ChannelPicker
from voice_engine.kws import KWS
from voice_engine.doa_respeaker_6mic_array import DOA


def main():
    src = Source(rate=16000, channels=8)
    ch0 = ChannelPicker(channels=src.channels, pick=0)
    kws = KWS(model='snowboy', sensitivity=0.6, verbose=True)
    doa = DOA(rate=16000)

    src.link(ch0)
    ch0.link(kws)
    src.link(doa)

    def on_detected(keyword):
        print('detected {} at direction {}'.format(keyword, doa.get_direction()))

    kws.set_callback(on_detected)

    src.recursive_start()
    while True:
        try:
            time.sleep(1)
        except KeyboardInterrupt:
            break

    src.recursive_stop()

    # wait a second to allow other threads to exit
    time.sleep(1)


if __name__ == '__main__':
    main()
```


- Step 2. Let's say snowboy and here is output of DOA.

```shell
(env) pi@raspberrypi:~/voice-engine/examples/respeaker_6mic_array_for_pi $ python kws_doa.py 
['arecord', '-t', 'raw', '-f', 'S16_LE', '-c', '8', '-r', '16000', '-D', 'default', '-q']
0000000000000000000000000000000000000000000000000000000000000000000000000000000002222222222222222222222222222222222222222222222/usr/local/lib/python2.7/dist-packages/voice_engine-0.1.3-py2.7.egg/voice_engine/gcc_phat.py:22: RuntimeWarning: invalid value encountered in divide
  cc = np.fft.irfft(R / np.abs(R), n=(interp * n))
detected 1 at direction 283.32811392
3000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002222222222222222222222222222222222222222222222detected 1 at direction 210.0
30000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002222222222222222222222222222222222222222222222detected 1 at direction 62.5448292531
30000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002222222222222222222222222222222222222222222222222detected 1 at direction 62.5448292531
300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002222222222222222222222222222222222222222222detected 1 at direction 223.32811392
300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022222222222222222222222222222222222222222222222222detected 1 at direction 223.32811392
30000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000222222222222222222222222222222222222222detected 1 at direction 283.32811392
300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002222222222222222222222222222222222222222222detected 1 at direction 237.455170747
```

## Buton

if you want to check that your respeaker_6-Mic is installed correctly on raspberry . The Buton is a good idea. we can use the below code to check.

```python

import RPi.GPIO as GPIO
import time

BUTTON = 26

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


## FAQ

**Q1: There are only 6 Mic in the Mic Array, how could it be 8 channels?**

A1: There are 2 AC108 in this array, and each AC108 chip has 4 channel output. So it comes a total of 8 channels here, 6 of which are for the microphone, and the the rest 2 are the playback channels.

**Q2: If Raspberry can detect ReSpeaker 2-mics hat, but can't detect ReSpeaker 6-mics Circular array?**

A2: Please click raspberry -> Preferences -> Raspberry Pi Configuration, then select the Interfaces tab, make sure the 1-Wire is Disabled.


## Resources

- **[PDF]** [AC101 Datasheet](https://github.com/SeeedDocument/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/raw/master/reg/AC101_User_Manual_v1.1.pdf)
- **[PDF]** [AC108 Datesheet](https://github.com/SeeedDocument/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/raw/master/reg/AC108_Datasheet_V1.2.pdf)
- **[Dxf]** [ReSpeaker Circular Array for Voice Accessory HAT with 6 Microphones case file](https://github.com/SeeedDocument/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/raw/master/reg/ReSpeaker%20Circular%20Array%20for%20Voice%20Accessory%20HAT%20with%206%20Microphones.dxf)
- **[Dxf]** [ReSpeaker Circular Array for Voice Accessory HAT with 6 Microphone 2D File](https://github.com/SeeedDocument/ReSpeaker_6-Mics_Circular_Array_kit_for_Raspberry_Pi/raw/master/reg/2d.zip)
- **[Driver]** [Seeed-Voice Driver](https://github.com/respeaker/seeed-voicecard)
- **[Algorithms]** [Algorithms includes DOA, VAD, NS](https://github.com/respeaker/mic_array)
- **[Voice Engine** [Voice Engine project, provides building blocks to create voice enabled objects](https://github.com/voice-engine/voice-engine)
- **[Algorithms]** [AEC](https://github.com/voice-engine/ec)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/).


<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>