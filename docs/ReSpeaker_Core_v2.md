---
title: ReSpeaker Core v2
category: ReSpeaker
bzurl: 
oldwikiname: ReSpeaker Core v2
prodimagename: cover.JPG
surveyurl:  https://www.research.net/r/Respeaker_Core
sku: 
---

![enter image description here](https://github.com/SeeedDocument/Respeaker_V2/raw/master/img/ReSpeaker_V2_front.JPG)

Seeed ReSpeaker Core v2 is designed for voice interactive applications. It based on quad-core ARM Cortex-A7, up to 1.5Ghz, and 1GB RAM on-board. Besides, it features six microphone array with necessary speech algorithm, like DoA(Direction of arrival), BF(Beam-Forming), AEC(Acoustic echo cancellation) and etc.

ReSpeaker Core v2 runs GNU/Linux operation system. It benefits from powerful and active community, we can use lot of existing software/tools for development, testing and deploy, so that rapid product development become available.

ReSpeaker Core v2 is not only designed for makers/enthusiast, but also a turnkey solution for business company. The hardware consists of two parts, one is the minimized SoC module which is small and easy to manufacturing and ready for final product. Another is a bottom board can be full customizable.


[![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now_small.png)](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)


## Features

### Hardware

- High performance SoC
- 1GB RAM & 4GB eMMC
- 6 Microphone Array  
- USB OTG, USB device
- WiFi b/g/n and BLE 4.0
- detect range: ~5 meter
- Grove socket for other sensor
- 3.5mm audio jack & JST connector
- 8 channel ADCs for 6 microphone array and 2 loopback (hardware loopback)


### Software

- Debian-based Linux system
- SDK for speech algorithm with Full documents
- C++ SDK and Python wrapper
- Speech algorithms and features
- Keyword wake-up
- BF(Beam-Forming)
- DoA (Direction of arrival)
- NS(Noise suppression)
- AEC (Acoustic echo cancellation) and AGC (Automatic gain control)



## Specification


<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#999;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:#999;color:#fff;background-color:#26ADE4;}
.tg .tg-vn4c{background-color:#D2E4FC}
.tg .tg-5hyy{background-color:#;text-align:center}
.tg .tg-5hgy{background-color:#D2E4FC;text-align:center}
.tg .tg-yw4l{vertical-align:top}
.tg .tg-6k2t{background-color:#D2E4FC;vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-031e" colspan="3">Features</th>
  </tr>
  <tr>
    <td class="tg-5hgy" rowspan="6">Soc<br>(Rockchip RK3229)</td>
    <td class="tg-vn4c">CPU</td>
    <td class="tg-vn4c">Quad-Core Cortex-A7,up to 1.5GHz</td>
  </tr>
  <tr>
    <td class="tg-031e">GPU</td>
    <td class="tg-031e">Mali400MP, Support OpenGL ES1.1/2.0</td>
  </tr>
  <tr>
    <td class="tg-vn4c">Memory</td>
    <td class="tg-vn4c">1GB RAM(Core Module includes RAM and PMU)</td>
  </tr>
  <tr>
    <td class="tg-031e" rowspan="3">System</td>
    <td class="tg-031e">Operating Voltage:3.6-5V</td>
  </tr>
  <tr>
    <td class="tg-vn4c">80 pins on-module</td>
  </tr>
  <tr>
    <td class="tg-031e">PMU on-module</td>
  </tr>
  <tr>
    <td class="tg-5hyy" rowspan="7">Peripheral</td>
    <td class="tg-vn4c">Networks</td>
    <td class="tg-vn4c">WiFi b/g/n;<br>BLE 4.0;<br>Ethernet</td>
  </tr>
  <tr>
    <td class="tg-031e">USB</td>
    <td class="tg-031e">2 x USB Host;<br>1 x USB OTG;<br>1 x USB power</td>
  </tr>
  <tr>
    <td class="tg-vn4c">Grove</td>
    <td class="tg-vn4c">1 x Grove socket (I2C and Digital)</td>
  </tr>
  <tr>
    <td class="tg-031e">Vedio</td>
    <td class="tg-031e">HDMI 2.0 with HDCP 1.4/2.2, up to 4K/60Hz</td>
  </tr>
  <tr>
    <td class="tg-vn4c">Audio</td>
    <td class="tg-vn4c">6 Microphone Array;<br>3.5mm Audio Jack;<br>JST audio output connector</td>
  </tr>
  <tr>
    <td class="tg-yw4l">Storage</td>
    <td class="tg-yw4l">4GB eMMC on-board;<br>SD slot</td>
  </tr>
  <tr>
    <td class="tg-6k2t">Others</td>
    <td class="tg-6k2t">12 x RGB LEDs;<br>Some pins</td>
  </tr>


</table>


## Hardware Overview
![](https://github.com/SeeedDocument/Respeaker_V2/raw/master/img/hardware_overview.png)



- <font face="" size=3 font color="ff0000">①</font> **3.5mm Headphone jack:**
Output audio. You can plug active speakers or Headphones into this port.

- <font face="" size=3 font color="ff0000">②</font> **USB OTG:**
This USB Port is used to connect to your computer via serial mode of putty (or other serial tools).

- <font face="" size=3 font color="ff0000">③</font> **USB Power Input:**
This port is used to provide power for Respeaker Core v2.

- <font face="" size=3 font color="ff0000">④</font> **Speaker:**
Output audio for passive speakers.

- <font face="" size=3 font color="ff0000">⑤</font> **UART:**
You also can connect the ReSpeaker Core v2 with your computer via this UART port.

- <font face="" size=3 font color="ff0000">⑥</font> **GPIO:**
General Purpose Input Output interface for extended applications.

- <font face="" size=3 font color="ff0000">⑦</font> **SD Card Slot:**
To plug in micro-SD card.

- <font face="" size=3 font color="ff0000">⑧</font> **eMMC:**
Embedded Multi Media Card. You can burn the image into eMMC, so that the ReSpeaker Core v2 can boot from the eMMC.

- <font face="" size=3 font color="ff0000">⑨</font> **USB Host:**
You can plug USB device, such as USB mouse and USB keyboard, into ReSpeaker Core v2 via those two USB hosts.

- <font face="" size=4 font color="ff0000">Ⓐ</font> **Ethernet:**
Access to the Internet.

- <font face="" size=4 font color="ff0000">Ⓑ</font> **HDMI:**
Output video.

- <font face="" size=4 font color="ff0000">Ⓒ</font> **Bluetooth and WIFI Antenna:**
The onboard Antenna is for WIFI and Bluetooth. Also we provide a interface for 2.4G Antenna or PCB Antenna.

- <font face="" size=4 font color="ff0000">Ⓓ</font> **Grove Interface:**
Grove interface for digital or I2C.





## Applications

- Smart speaker
- Intelligent voice assistant systems
- Voice recorders
- Voice conferencing system
- Meeting communicating equipment
- Voice interacting robot
- Car voice assistant
- Other scenarios need voice command



## Getting Started


### Prerequisites

- ReSpeaker Core V2
- Wi-Fi Network
- 4GB (or more) SD card and SD card reader
- PC or Mac
- [USB To Uart Adapter](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html)
- 5V 1A Micro USB adapter for power
- two Micro-USB cables

<div class="admonition warning" style="background:#f0b37e; color:#FFF">
<p class="admonition-title">Caution</p>
<font face="Georgia" size=2 font color="white">Please plug the USB cable gently, otherwise you may damage the interface.Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click <a href="https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html"><B>here</B></a> to buy</font>
</div>


### Image Installation

Similar to the Raspberry Pi, you need to install the ReSpeaker Core v2 image from an SD card to get up and running. We offer two ways to boot the Respeaker core v2. You can either boot from the SD card or [boot from the eMMC](/boot from the eMMC).

#### A. boot from the SD card
**step 1.**

Click the OneDrive icon below to download our latest image zip files: ```respeaker-debian-9-lxqt-sd-********-4gb.img.xz``` or ```respeaker-debian-9-iot-sd-********-4gb.img.xz```.



<p style="text-align:center"><a href="https://bfaceafsieduau-my.sharepoint.com/personal/miaojg22_off365_cn/_layouts/15/guestaccess.aspx?folderid=0bb3c4f3f122d4c2bb0f65eee2b5938f8&authkey=AfLSkcE8QeeUHTQ8GGfrrsU" target="_blank"><img src="https://github.com/SeeedDocument/Respeaker_V2/raw/master/img/onedrive.png" width="200" height="40"  border=0 /></a></p>



<div class="admonition note" style="background:#6ab0de; color:#FFF">
<p class="admonition-title">Note</p>
<font face="Georgia" size=2 font color="white">The lxqt version comes with Debian desktop and the iot version does not. If you are new to ReSpeaker Core v2, lxqt version is recommended.
</font>
</div>

**step 2.**

Plug the SD card into your PC or MAC with an SD card reader.You need an SD card with a capacity of more than 4G.


**step 3.**

<font face="">Click to download <a href="https://etcher.io/">Etcher</a> here, and burn the ```*.img.xz``` file directly to your SD card with Etcher. Or unzip the ```*.img.xz``` file to a ```*.img``` file, then burn it to SD card with other image writing tools.
<br>
<br>Click the Plus icon to add the image you just download, the software will automatically select the SD card you plug.Then click Flash! to start burning. It will takes about 10 minutes to finish. </font>

![](https://github.com/SeeedDocument/Respeaker_V2/raw/master/img/v2-flash-sd.png)


**step 4.**

After writing the image to the SD card, insert the SD card in your ReSpeaker Core V2. Power the board using the PWR_IN micro usb port and DO NOT remove the SD card after powering on. ReSpeaker Core V2 will boot from the SD card, and you can see USER1 and USER2 LEDs light up. USER1 is typically configured at boot to blink in a heartbeat pattern and USER2 is typically configured at boot to light during SD card accesses. Now, you should go to the next part: Serial Console.


#### B. boot from the eMMC

You may also directly flash the ReSpeaker image files to the ReSpeaker's eMMC (onboard flash memory) using your PC or Mac. Then the ReSpeaker will boot from it's eMMC (onboard flash memory) and not from the SD card.

**step 1.**

Download our latest image zip file ```respeaker-debian-9-iot-flasher-********-4gb.img.xz``` or ```respeaker-debian-9-lxqt-flasher-********-4gb.img.xz``` at OneDrive. The lxqt version comes with Debian desktop and the iot version does not. And the flasher version is for flashing eMMC, and the sd version is for booting from SD card.

**step 2.**

Burn the ```*.img.xz``` file directly to SD card with Etcher, or unzip the ```*.img.xz``` file to a ```*.img``` file, then burn it to SD card with other image writing tools.

**step 3.**

After burning SD card, insert the SD card in the ReSpeaker Core V2. Power the board using the PWR_IN micro usb port and do not remove the SD card while it's flashing.

During the flashing process, you'll see the USER1 and USER2 LEDs blink alternately. It will take about 10 minutes to complete. When the LEDs turn off, you can power off the board, pull out the SD card and power again. If the LEDs light up, that means the image was flashed to the eMMC correctly.

You can also check the image version with this command: cat /etc/issue.net.



### Serial Console

Now that your ReSpeaker can boot (it runs Debian Linux), you might want to get access to the Linux system by a console, to setup the ssh server, or setup WiFi, etc. You will have two choices to get the console, but please note that the first choice depends on your hardware version and your system version.

- A. The OTG USB port, for hardware version not earlier than "8/5/2017" (see the silk-screen on the board) and system image version not earlier than "20171023".

- B. The UART port


#### A. Connection via OTG

- Step 1. Power the ReSpeaker Core v2 with Micro-USB able and 5V 1A Micro USB adapter via the **PWR_IN** Port.

- Step 2. Find a micro USB cable, and please make sure it's a data cable (not just a power cable), plug the micro USB end to the ReSpeaker's **OTG** micro USB port (There're two micro USB ports on the ReSpeaker board, which are labeled with different silk-screen, one is PWR_IN and another is OTG), then another end of this cable into your computer.

![](https://github.com/SeeedDocument/Respeaker_V2/raw/master/img/otg_connect.jpg)

- step 3. Check at your computer if the serial port has risen:

    - Windows: check the device manager, there should be new serial deviced named ```COMx``` which x is an increasing number. If you use windows XP/7/8, maybe you need install [windows CDC drivers](https://github.com/respeaker/get_started_with_respeaker/blob/master/files/ReSpeaker_Gadget_CDC_driver.7z).
    - Linux: ls ```/dev/ttyACM*```, you should get ```/dev/ttyACMx``` where x will vary depending on which USB port you used.
    - Mac: ls ```/dev/cu.usb*```, you should get ```/dev/cu.usbmodem14xx``` where xx will vary depending on which USB port you used.


- step 4. Use your favorite serial debugging tool to connect the serial port, the serial has: 115200 baud rate, 8Bits, Parity None, Stop Bits 1, Flow Control None. For examples:

    - Windows: use [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), select ```Serial``` protocol, fill in the correct COM port of ReSpeaker Core V2, ```115200``` baud, 8Bits, Parity None, Stop Bits 1, Flow Control None.
    - Linux: Depend on your USB To TTL Adapter, it could be ```screen /dev/ttyACM0(,1, and so on)``` 115200 or ```screen /dev/ttyUSB0(,1, and so on) 115200```
    - Mac: Depend on your USB To TTL Adapter, it could be ```screen /dev/cu.usbserial1412(,1422, and so on) 115200``` or ```screen /dev/cu.usbmodem1412(,1422, and so on) 115200```


- step 5. The default user name is ```respeaker```, and password is ```respeaker``` too.

#### B. Connection via The UART port

In this section we will guide you how to establish a connection from your computer to your ReSpeaker using your USB to TTL adapter which will be connected to the ReSpeaker's Uart port (Uart port located just to the left of the ReSpeaker speaker plug).

- step 1. Connect Uart port and your PC/Mac with an USB To TTL Adapter. Note that the voltage of RX/TX are 3.3V. If you don't have an USB To TTL Adapter, you can click [here](https://www.seeedstudio.com/USB-To-Uart-5V%26amp%3B3V3-p-1832.html) to get one.

- step 2. Use the following Serial debugging tools with 115200 baud:
    - Windows: use [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), select ```Serial``` protocol, fill in the correct COM port of ReSpeaker Core V2, 115200 baud, 8Bits, Parity None, Stop Bits 1, Flow Control None.
    - Linux: Depend on your USB To TTL Adapter, it could be ```screen /dev/ttyACM0(,1, and so on) 115200``` or ```screen /dev/ttyUSB0(,1, and so on) 115200```.
    - Mac: Depend on your USB To TTL Adapter, it could be ```screen /dev/cu.usbserial1412(,1422, and so on) 115200``` or ```screen /dev/cu.usbmodem1412(,1422, and so on) 115200```.

- step 3. The login user name is respeaker, and password is respeaker too.

- step 4. If you do not have a USB to TTL Adapter, you may also use an Arduino. If using an Arduino, connect one end of a jumper wire to the RESET pin on the Arduino and the other end to the GND pin on the Arduino. This will bypass your Arduino's ATMEGA MCU and turn your Arduino into a USB to TTL adapter, see video tutorial here. Now connect the GND pin on the Arduino to the GND pin on the Uart port of the Respeaker. Connect the Rx pin on the Arduino to the Rx pin on the Uart port of the Respeaker. Connect the Tx pin on the Arduino to the Tx pin on the Uart port of the Respeaker. And lastly, connect the Arduino to your PC/Mac via the Arduino's USB cable. Now check that your Mac or Linux PC finds your Arduino by typing this command:

```
ls /dev/cu.usb* (Mac)
ls /dev/ttyACM* (Linux)
```
You should get back something like:

```
/dev/cu.usbmodem14XX where XX will vary depending on which USB port you used (on Mac)
/dev/ttyACMX where X will vary depending on which USB port you used  (on Linux)
```
Now follow step 2 above to connect to your Respeaker over this serial connection. And note this is a one time procedure as you'll next setup your Respeaker for Wi-Fi connectivity and then connect via ssh or VNC going forward.


### Network Setting Up

#### 1. Wi-Fi Setting Up

Configure your ReSpeaker's network with the Network Manager tool, nmtui. nmtui will already be installed on the ReSpeaker image.

```
respeaker@v2:~$ sudo nmtui              # respeaker user needs sudo
```
Then you will see a config page like this, select ```Activate a connection``` and press ```Enter``` key.

![](https://github.com/SeeedDocument/Respeaker_V2/raw/master/img/nmtui1-1.png)

Select your Wi-Fi for ReSpeaker V2, press ```Enter``` key and type your Wi-Fi password and press ```Enter``` key again. When you see a ```*``` mark, it means that your ReSpeaker has successfully connected to your Wi-Fi network. Tap ```Esc``` key twice to leave the network manager config tool.

![](https://github.com/SeeedDocument/Respeaker_V2/raw/master/img/nmtui1-2.png)

Now find the IP address of your ReSpeaker by using the command below.

```
ip address
```
In the example below, we can see that this ReSpeaker's IP address is ```192.168.7.108```

```
root@v2:/home/respeaker# ip address

1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
2: sit0@NONE: <NOARP> mtu 1480 qdisc noop state DOWN group default qlen 1
    link/sit 0.0.0.0 brd 0.0.0.0
3: wlan0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
    link/ether e0:76:d0:37:38:6d brd ff:ff:ff:ff:ff:ff
    inet **192.168.7.108**/24 brd 192.168.7.255 scope global dynamic wlan0
       valid_lft 604332sec preferred_lft 604332sec
    inet6 2601:647:4680:ebf0:ec0a:5965:e710:f329/64 scope global noprefixroute dynamic
       valid_lft 345598sec preferred_lft 345598sec
    inet6 fe80::64de:cac8:65ef:aac8/64 scope link
       valid_lft forever preferred_lft forever
```


In addition to the Networ Manager GUI interface, Network Manager also has a command line tool. If you are connecting to a hidden Wi-Fi network, you'll need to use this command line tool:

```
nmcli c add type wifi con-name mywifi ifname wlan0 ssid your_wifi_ssid
nmcli con modify mywifi wifi-sec.key-mgmt wpa-psk
nmcli con modify mywifi wifi-sec.psk your_wifi_password
nmcli con up mywifi
```

#### 2. Ethernet Connectivity

You can connect to a network using an Ethernet cable. Just plug the Ethernet cable which has connected to the Internet will be OK.


### SSH & VNC

#### 1.SSH

SSH server starts automatically in ReSpeaker V2. For Windows Users, third-party SSH clients are available. For Linux/Mac Users, SSH client is built in.

- Windows: Use PUTTY, select SSH protocol, fill in correct IP address and click open. Login as respeaker user and password is respeaker too.

- Linux/Mac:
```
ssh respeaker@192.168.***.***
// password: respeaker
```

<div class="admonition note" style="background:#6ab0de; color:#FFF">
<p class="admonition-title">Note</p>
<font face="Georgia" size=2 font color="white">Note that if experience slow performance using SSH, please switch to a less crowded WiFi network.
</font>
</div>

#### 2. VNC

The VNC service also starts automatically. Use [VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/) or [VNC Viewer for Google Chrome](https://chrome.google.com/webstore/detail/vnc%C2%AE-viewer-for-google-ch/iabmpiboiopbgfabjmgeedhcmjenhbla?hl=en) to connect to the desktop of ReSpeaker Core v2.

To use VNC, connect your PC/Mac and ReSpeaker v2 to the same Wi-Fi network. Then open VNC Viewer, type ```192.168.xxx.xxx:5901``` at the address bar. ```192.168.xxx.xxx``` is IP address of the board and ```5901``` is the default port of VNC service. If you meet ```Unencrypted connection```, click Continue to go on. The password is ```respeaker```.
![](https://github.com/SeeedDocument/Respeaker_V2/raw/master/img/VNC-1.png)

If nothing appears in the VNC desktop, please right-click on the gray area, then select terminal, type lxpanel in the terminal.

If you find the VNC is not working smoothly, please switch to a faster network.


If you can connect to the Respeaker Core v2 but can not do any operation, please make sure you do not choose the ```View-only``` option.

![](https://github.com/SeeedDocument/Respeaker_V2/raw/master/img/vnc_2.png)


### Setup and Setting

#### ALSA Setting

Download Github repository with ```respeaker``` user:

```
su respeaker && cd     # skip this steps if you are already using respeaker user
git clone https://github.com/respeaker/respeaker_v2_eval.git       # skip this step if you have already downloaded
cd ~/respeaker_v2_eval
sudo cp asound.conf /etc/
```

#### PulseAudio Setting
```
su respeaker && cd     # skip this steps if you are already using respeaker user
git clone https://github.com/respeaker/respeaker_v2_eval.git       # skip this step if you have already downloaded
cd ~/respeaker_v2_eval
sudo cp pulse/default.pa /etc/pulse/            # config pulseaudio
cp pulse/client.conf ~/.config/pulse/
pulseaudio -k && pulseaudio -D                  # restart pulseaudio, don't run it as root user
```
#### Voice Capture and Playback
```
// record & playback 2channels
arecord -Dhw:0,0 -f S16_LE -r 16000 -c 2 hello.wav
aplay -Dhw:0,2 -r 16000 -c 2 hello.wav
arecord -v -f cd hello.wav
aplay hello.wav
// record 8channels
// there are 6 microphones on board, and ac108 compose the 2 remaining channels.
arecord -Dhw:0,0 -f S16_LE -r 16000 -c 8 hello.wav
```

#### Virtual Environment
```
pip install virtualenv                                     # install virtualenv
python -m virtualenv --system-site-packages ~/env          # create python virtual environment
source ~/env/bin/activate                                  # activate python venv
deactivate                                                 # deactivate python venv
```
#### Voice Engine Setting

Install and configure ReSpeaker Voice Engine in virtual environment:
```
source ~/env/bin/activate                                  # activate python venv
cd ~/respeaker_v2_eval
sudo apt update
sudo apt install libatlas-base-dev                         
pip install ./webrtc*.whl
pip install ./snowboy*.whl
pip install avs
pip install voice-engine
```


#### Install gstreamer
```
sudo apt-get install gstreamer1.0-plugins-good gstreamer1.0-plugins-bad gstreamer1.0-plugins-ugly gir1.2-gstreamer-1.0 python-gi python-gst-1.0 python-pyaudio
```

After installation, free feel to build your own AVS(Amazon Voice Service) on ReSpeaker Core V2.

### AVS(Amazon Voice Service) Guide
This guide will shows you how to build AVS on ReSpeaker Core V2.

#### Get Alexa Authorization

run authorization command in terminal with respeaker user:
```
source ~/env/bin/activate
alexa-auth
```
Then visit ```127.0.0.1:3000``` at VNC web browser. Sign in to ReSpeaker AVS with your Amazon account, if you do not have one you can create a new one at the same page:

![](https://github.com/SeeedDocument/Respeaker_V2/raw/master/img/aus-1.png)

Succeed:

![](https://github.com/SeeedDocument/Respeaker_V2/raw/master/img/aus-2.png)

#### Kill pulseaudio
Have to kill pulseaudio to use AVS:
```
echo "autospawn = no" > ~/.config/pulse/client.conf
reboot -f
```
#### Alexa Tap to Play
```
source ~/env/bin/activate
alexa-tap
```
Press ```enter``` key and talk to ReSpeaker V2, it will answer you.

#### Alexa && snowboy
```
cd ~/respeaker_v2_eval/alexa
pip install numpy
python ns_kws_doa_alexa.py
```
#### Alexa works with pixel light:
```
pip install spidev
sudo su
cp /home/respeaker/.avs.json /root/.avs.json    # copy respeaker user alexa authorization to root user
source /home/respeaker/env/bin/activate         # activate python venv
python ns_kws_doa_alexa_with_light.py
```

### FAQs
