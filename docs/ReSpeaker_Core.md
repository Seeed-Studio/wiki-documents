---
name: ReSpeaker Core
category: ReSpeaker
bzurl: https://www.seeedstudio.com/ReSpeaker-Core-Based-On-MT7688-and-OpenWRT-p-2716.html
oldwikiname:  Respeaker Core
prodimagename:  respeaker_core.jpg
surveyurl:  https://www.research.net/r/Respeaker_Core
sku:     102010088
---
![](https://github.com/SeeedDocument/Respeaker_Core/raw/master/img/respeaker_core.jpg)

ReSpeaker is an open modular voice interface to hack things around you. Let you interact with your home appliances, your plant, your office, your internet-equipped devices or any other things in your daily life, all by your voice.

- **It’s a voice-enabled extension for your surroundings**

  ReSpeaker supports both online cognitive services and offline lightweight speech recognition engine. You can add ReSpeaker to things around you to make them smart(smarter).

- **It’s a device for music streaming**

  Voice interface has never been apart from music entertainment, so does ReSpeaker. ReSpeaker supports Airplay/DLNA for wireless music streaming. Just connect ReSpeaker to any ordinary speaker with an AUX cable, then you can start enjoying the music you love without pressing a single button.

- **It’s a learning tool for kids**

  Rather than the on board MT7688 Wi-Fi module which runs the Linux based OpenWrt, ReSpeaker is also powered by the ATmega32u4 chip and absolutely Arduino compatible, which means, we can use ReSpeaker as a powerful Arduino board and do many ‘Arduino’ things. It’s for learning, it’s for practicing, and it’s for fun.


[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/ReSpeaker-Core-Based-On-MT7688-and-OpenWRT-p-2716.html)

##   Features
---
![](https://github.com/SeeedDocument/Respeaker_Core/raw/master/img/respeaker_core_futures.jpg)

- Set Your Hands Free: Speech recognition with or without the Internet
- Wireless Streaming: stream music via Airplay/DLNA
- Easy-to-use SDK: For Python and C/C++ developers
- Growing Features: Download and plug-in to enrich its features and functionalities.
- Plug-n-play Add-ons: Extendable with Mic Array, Grove Extension Board, Grove Modules.
- Installation-free App: Set all things on webbased App. (Not Available Yet)

##   Specifications
---
![](https://github.com/SeeedDocument/Respeaker_Core/raw/master/img/respeaker_core_hardware%20overview.jpg)

**Technology Specs**


- AI7688 Wi-Fi Module:

    - Operation system: GNU/Linux based OpenWrt
    - Wi-Fi Network: Support Legacy 802.11b/g and HT 802.11n modes
    - Expansion: Two expansion headers for I2C, GPIO and USB 2.0 host
    - Interfaces: Built-in 3.5mm AUX port, Micro USB and SD card slot

- ATMega32U4 Coprocessor:

    - USB CDC virtual serial port for linux console
    - 12 programmable RGB LED indicators
    - 8 on board touch sensors

- Codec WM8960:

    - DAC SNR 98dB (‘A’ weighted), THD -84dB at 48kHz, 3.3V  
    - ADC SNR 94dB (‘A’ weighted), THD -82dB at 48kHz, 3.3V  
    - Stereo Class D Speaker Driver with 87% efficiency (1W output)  
    - On-chip Headphone Driver  
    - 40mW output power into 16Ω at 3.3V  
    - THD -75dB at 20mW, SNR 90dB with 16Ω load  
    - On-chip PLL provides flexible clocking scheme  
    - Sample rates: 8, 11.025, 12, 16, 22.05, 24, 32, 44.1, 48 kHz

- Power Supply: 5V DC  

- Dimensions: 70mm diameter  

- Weight: 17g

**Pin-out Diagram**

![](https://github.com/SeeedDocument/Respeaker_Core/raw/master/img/respeaker_core_pinmap.png)

- GPIO0/I2S_ADC: Drive external encoder/decoder, ADC signal
- GPIO1/I2S_DAC: Drive external encoder/decoder, DAC signal
- GPIO2/I2S_LRCLK: Drive external encoder/decoder, Left/right channel sample clock
- GPIO3/I2S_BCLK: Drive external encoder/decoder, Bit clock
- MCLK_OUT: Master clock for external device
- HP\_SEL: Headphone channel select. If use ReSpeaker Mic Array to output audio, set HP_SEL high
- HP\_L: Analog audio left channel from ReSpeaker Mic Array
- HP_R: Analog audio right channel from ReSpeaker Mic Array
- AGND: Analog ground for audio


##   Getting Started
---

### What should I do when I first get a ReSpeaker Core

**1. Preparations**
- ReSpeaker Core
- PC or Mac
- Wi-Fi network
- SD card

**2. Connect to serial console**

- For Windows, [putty](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html) is recommended.

    - Connect ReSpeaker to your PC via USB, check "Device Manager" for COM port. Here my ReSpeaker COM port is COM31.

    ![](https://github.com/SeeedDocument/Respeaker_Core/raw/master/img/putty1.png)

    - Select Serial under Connection type. In the Serial line field, enter the COM port for your ReSpeaker. In the Speed field, type 57600.

    ![](https://github.com/SeeedDocument/Respeaker_Core/raw/master/img/putty2.png)

    - Click Open. When you see a blank screen, press the Enter key.

    ![](https://github.com/SeeedDocument/Respeaker_Core/raw/master/img/putty3.png)

- For Linux/Mac

    - Connect ReSpeaker to your PC via USB
    - Open a Terminal session
    - Type ls /dev/tty.usb* in the Terminal. We should see a list of devices. Look for something like tty.usbmodemXXXXX where XXXXX is usually a random identifier. This is the serial device used to access the system console. Then Use the screen utility to connect to the serial port and set the baudrate to 57600. This is because the baudrate of the system console is 57600 by default.

```
$ ls /dev/tty.usb*
/dev/tty.usbmodem14221
$ screen /dev/tty.usbmodem14221 57600
```

**3. Setup Wi-Fi**

ReSpeaker is set to Repeater Mode as default, and you have to connect it to an existing wireless network before enjoying the speech recognition with the Internet.

When you first power on ReSpeaker, it will create a Wi-Fi network called "ReSpeakerXXXXXX". Here "XXXXXX" is the last 6 of your ReSpeaker MAC address, which is marked on the board. Connect your computer to this network.

![](https://github.com/SeeedDocument/Respeaker_Core/raw/master/img/wifi1.png)

!!!Note
    If "ReSpeakerXXXXXX" does not appear, but "LinkIt_Smart_7688_XXXXXX" is found. Please click [here](http://wiki.seeed.cc/ReSpeaker_Core/#q20-system-recovery-by-factory-image).


Once you've obtained an IP address, open a web browser, and enter 192.168.100.1 in the address bar. After a few seconds, a web page will appear asking for ssid and password of an existing Wi-Fi network.

![](https://github.com/SeeedDocument/Respeaker_Core/raw/master/img/wifi2.png)

Select the Wi-Fi you wish to connect to and enter the password. When you press the OK button, ReSpeaker will join the specified network.

Now your ReSpeaker is able to visit the Internet.

Also, here is other way to setup Wi-Fi with command line.
We can use wictl to scan the wifi and connect it.

```
root@mylinkit:~# wictl
0, SEEED-MKT
1, Xiaomi_Youth
2, ChinaNet-Z5C4
3, STU-EE
4, EMBEST_WIFI
5, SEEED-MKT
6, nobody
7, SEEED-MKT
8, se.VPN
9, Moovent_HK_2G
10, LinkIt_Smart_7688_1D917A
11, SEEED-MKT
12, SEEED-MKT
13, zhongrixing
Please choose your wifi: 8
Please input the wifi password: 88888888
udhcpc (v1.23.2) started
Sending discover...
Sending discover...
Sending select for 192.168.199.153...
Lease of 192.168.199.153 obtained, lease time 43200
udhcpc: ifconfig apcli0 192.168.199.153 netmask 255.255.255.0 broadcast 192.168.199.255
udhcpc: setting default routers: 192.168.199.1
success
root@mylinkit:~#
```

!!!Note
    If you can't connect Wifi with above methods, please  do the factory reset by entering firstboot command.


After the Wifi function being enabled, we can use SSH to connect Respeaker by below command. We can get the Respeaker IP address from
http://192.168.100.1/#!/overview WAN IP. The password is root.

```
ssh root@ssh *.*.*.*

```

**4. Use SD Card to Extend Storage**

More often than not, a limited amount of storage is available on embedded devices(ReSpeaker has only 5M on-board flash storage left for users). More storage for applications and data can expand ReSpeaker's potential, so use SD card to extend storage as an **extroot** is a good choice.

By employing **extroot**, expansion of the storage capacity of your root file system is accomplished by using an added storage device.
During the boot process, external storage space is mounted as the root file system, or in an overlay configuration over the original file system.

- Make sure your SD card is plugged into ReSpeaker and /dev/mmcblk0p1 can be detected by df -h or ls /dev.

```
root@ReSpeaker:/# df -h
Filesystem                Size      Used Available Use% Mounted on
rootfs                    1.8M    832.0K    960.0K  46% /
/dev/root                29.0M     29.0M         0 100% /rom
tmpfs                    61.7M    276.0K     61.5M   0% /tmp
/dev/mtdblock6            1.8M    832.0K    960.0K  46% /overlay
overlayfs:/overlay        1.8M    832.0K    960.0K  46% /
tmpfs                   512.0K         0    512.0K   0% /dev
/dev/mmcblk0p1            7.4G      2.5M      7.4G   0% /tmp/run/mountd/mmcblk0p1
```

- Format your SD card into two partitions, one is FAT32, the other is EXT4. EXT4 file system will be as an extroot while FAT32 will be as a normal storage device, which is able to transfer files between ReSpeaker and your PC.

```
	umount /dev/mmcblk0p1
	fdisk /dev/mmcblk0
	 ------------------ fdisk ------------------------
	>Command (m for help):o
	>Created a new DOS disklabel
	>Command (m for help):n
	>Partition type
	p   primary (0 primary, 0 extended, 4 free)
	e   extended (container for logical partitions)
	>Select (default p):p
	>Partition number (1-4, default 1):1
	>First sector (2048-15523839, default 2048):
	>Last sector, +sectors or +size{K,M,G,T,P} (2048-15523839, default 15523839): +2G
	>Command (m for help):n
	>Partition type
	p   primary (1 primary, 0 extended, 3 free)
	e   extended (container for logical partitions)
	>Select (default p):p
	>Partition number (1-4, default 2):2
	>First sector (4196352-15523839, default 4196352):
	>Last sector, +sectors or +size{K,M,G,T,P} (4196352-15523839, default 15523839):
	>Command (m for help):w
	>The partition table has been altered.
	>Calling i[  292.010000]  mmcblk0: p1 p2
	>octl() to re-read partition table.
	>Syncing disks.
	 ------------------ end ------------------------

	mkfs.fat /dev/mmcblk0p1
	mkfs.ext4 /dev/mmcblk0p2

	# reload mtk_sd kernel module
	rmmod mtk_sd
	insmod mtk_sd

```

- Prepare your external storage root overlay.

```
mount /dev/mmcblk0p2 /mnt ; tar -C /overlay -cvf - . | tar -C /mnt -xf - ; umount /mnt
```

- Create fstab with the following command. This command will create a fstab template enabling all partitions and setting '/mnt/mmcblk0p2' partition as '/overlay' partition.

```
	block detect > /etc/config/fstab;
	sed -i s/option$'\t'enabled$'\t'\'0\'/option$'\t'enabled$'\t'\'1\'/ /etc/config/fstab;
	sed -i s#/mnt/mmcblk0p2#/overlay# /etc/config/fstab;
	cat /etc/config/fstab;
```

- Check if it is mountable to overlay.

```
	root@mylinkit:/# mount /dev/mmcblk0p2 /overlay/
	root@ReSpeaker:/# df -h
  Filesystem                Size      Used Available Use% Mounted on
  rootfs                    1.8M    832.0K    960.0K  46% /
  /dev/root                29.0M     29.0M         0 100% /rom
  tmpfs                    61.7M    276.0K     61.5M   0% /tmp
  /dev/mtdblock6            5.2G     11.8M      4.9G   0% /overlay
  overlayfs:/overlay        1.8M    832.0K    960.0K  46% /
  tmpfs                   512.0K         0    512.0K   0% /dev
  /dev/mmcblk0p2            5.2G     11.8M      4.9G   0% /tmp/run/mountd/mmcblk0p2
  /dev/mmcblk0p1            2.0G      4.0K      2.0G   0% /tmp/run/mountd/mmcblk0p1
  /dev/mmcblk0p2            5.2G     11.8M      4.9G   0% /overlay
```

-  Reboot ReSpeaker and check again. If SD card is mounted automatically, you are done. More informations about **extroot**, please click [here](https://wiki.openwrt.org/doc/howto/extroot).

**5. Install software on ReSpeaker**

After extending storage with a SD card, there are enough storage to install software on ReSpeaker.

Install git

```
	opkg update
	opkg install git git-http
```

**6. Update Python Library**

```
git clone https://github.com/respeaker/respeaker_python_library.git
cd respeaker_python_library
python setup.py install
```

### First impression with Voice Interaction - ReSpeaker, play music!

With Bing Speech API, ReSpeaker can turn on and recognize audio coming from the microphone in real-time, or recognize audio from a file.

To use Bing Speech API, first you have to get a key of Microsoft Cognitive Services from [here](https://www.microsoft.com/cognitive-services/en-us/speech-api), and copy it to BING_KEY = '' , then save the following code in playmusic.py and run it

```
//stop mopidy and alexa to avoid USB device occupation
/etc/init.d/mopidy stop
/etc/init.d/alexa stop
python playmusic.py
```

![](https://github.com/SeeedDocument/Respeaker_Core/raw/master/img/getbingapi.png)

```
import logging
import time
import os
from threading import Thread, Event
from respeaker import Microphone
from respeaker.bing_speech_api import BingSpeechAPI

# use madplay to play mp3 file     
os.system('madplay')               

# get a key from https://www.microsoft.com/cognitive-services/en-us/speech-api
BING_KEY = ''      


def task(quit_event):                                                         
    mic = Microphone(quit_event=quit_event)                                   
    bing = BingSpeechAPI(key=BING_KEY)                                        

    while not quit_event.is_set():
        if mic.wakeup('respeaker'):        
            print('Wake up')               
            data = mic.listen()            
            try:                      
                text = bing.recognize(data)
                if text:           
                    print('Recognized %s' % text)
                    if 'play music' in text:
                        print('I will play music!')
                        os.system('madplay Tchaikovsky_Concerto_No.1p.mp3')
            except Exception as e:               
                print(e.message)                 

def main():                                                              
    logging.basicConfig(level=logging.DEBUG)                                                           
    quit_event = Event()        
    thread = Thread(target=task, args=(quit_event,))
    thread.start()                          
    while True:                             
        try:                                
            time.sleep(1)                           
        except KeyboardInterrupt:                   
            print('Quit')                           
            quit_event.set()
            break        
    thread.join()                

if __name__ == '__main__':       
    main()                  
```

After "INFO:mic:Start Detecting" coming out, try to say "ReSpeaker" to wake up the program, and say "play music" to let it play music. Then ReSpeaker will play "Tchaikovsky\_Concerto\_No.1p.mp3" in the current path with **madplay** tool.

![](https://github.com/SeeedDocument/Respeaker_Core/raw/master/img/bingplaymusic.png)

If you see below error code, the mopidy is running in background and is using the USB device. So try to run /etc/init.d/mopidy stop mopidy and run your command again.

```
root@ReSpeaker:~# python playmusic.py
Usage: madplay [OPTIONS] FILE [...]
Try `madplay --help' for more information.
Exception in thread Thread-2:
Traceback (most recent call last):
File "/usr/lib/python2.7/threading.py", line 810, in __bootstrap_inner
```


## Application
---

### Fruit piano

![](https://github.com/SeeedDocument/Respeaker_Core/raw/master/img/fruitpiano.PNG)

Rather than the on board MT7688 Wi-FI module which runs the Linux based OpenWrt, ReSpeaker is also powered by the ATmega32u4 chip and it’s absolutely Arduino compatible, which means, we can use ReSpeaker as a powerful Arduino board and do many ‘Arduino’ things. It’s for learning, it’s for practicing, and it’s for fun.

For example, you can program it with Arduino IDE to have a special DIY piano that is built on 8 cherry tomatoes connecting to the 8 touch sensors of ReSpeaker.
![](https://github.com/SeeedDocument/Respeaker_Core/raw/master/img/fruitpiano2.PNG)

1. git clone https://github.com/respeaker/piano.git  On ReSpeaker, download the repository
2. Download [ReSpeaker Arduino Library](https://github.com/respeaker/respeaker_arduino_library) in your computer
3. Upload [piano.ino](https://github.com/respeaker/piano/blob/master/arduino/piano.ino) to ReSpeaker's Arduino Leonardo (ATmega32U4)
4. Run python piano.py on ReSpeaker's serial console


### Weather Cloud

![](https://github.com/SeeedDocument/Respeaker_Core/raw/master/img/weathercloud.jpg)

Weather Cloud is an awesome project for ReSpeaker. This cool build turns a ReSpeaker into a Weather Cloud, which is able to show you the whether with vivid light and sounds.

In this project, Openwrt is in charge of getting realtime weather information from the Internet, making voice interaction and audio output, while Arduino is responsible for controlling the colorful RGB LEDs.

1. git clone https://github.com/jerryyip/WeatherCloud.git  on ReSpeaker, download the repository
2. Download [ReSpeaker Arduino Library](https://github.com/respeaker/respeaker_arduino_library) in your computer
3. Upload [pixels_pattern.ino](https://github.com/respeaker/respeaker_arduino_library/blob/master/examples/pixels_pattern/pixels_pattern.ino) in ReSpeaker Arduino  Library to ReSpeaker's Arduino
4. Get OpenWeatherMap appid from [here](http://openweathermap.org/appid) and copy it to appID = "" in main.py, don't forget to add your city in city=""
5. Stop mopidy service on OpenWrt before using SPI bridge
/etc/init.d/mopidy stop
6. Run python main.py and say "ReSpeaker, what is the weather like?" to ReSpeaker.
7. For more details about how to make a Weather Could, please click [here](http://www.instructables.com/id/How-to-DIY-an-in-House-Weather-telling-Cloud/).


##   ReSpeaker Mic Array
---
### [ReSpeaker Mic Array](https://www.seeedstudio.com/ReSpeaker-Mic-Array-Far-field-w%2F-7-PDM-Microphones--p-2719.html)

The ReSpeaker Mic Array can be stacked (connected) right onto the top of ReSpeaker Core to significantly improve the voice interaction experience. It is developed based on the XVSM-2000 Smart Microphone from XMOS. The board integrates 7 PDM microphones to help enhance ReSpeaker's acoustic DSP performance to a much higher level.

##   About our software
---

### [ReSpeaker Arduino Library](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/ReSpeakerArduinoLibrary.md#respeaker-arduino-library)

ReSpeaker Arudino Library provides the following features:

- Supported capacitive touch sensing
- Implemented WS2812 RGB LED driver
- Built USB to Serial bridge and SPI bridge between - Arduino (ATmega32U4) and linux based OpenWrt (MT7688)

### [ReSpeaker Python Library](https://github.com/respeaker/respeaker_python_library)

ReSpeaker is an open project to create voice enabled objects. ReSpeaker python library is an open source python library to provide basic functions of voice interaction.

It uses PocketSphinx for keyword spotting and uses webrtcvad for voice activity detecting.

### [More informations please go to our GitHub Repositories](https://github.com/respeaker)


##   FAQ
---
**Q1: How to do Factory Reset?**

- Open the serial console or a ssh session and run firstboot. [More detail](https://github.com/respeaker/get_started_with_respeaker/wiki/factory-reset).

**Q2: How to Rescue from a failed upgrade?**

- When the respeaker failed to boot into its openwrt system, we can't access the system through web terminal, ssh or serial console. We can follow [Rescue instruction](https://github.com/respeaker/get_started_with_respeaker/wiki/Rescue-from-a-failed-upgrade) to recover it.

**Q3: ReSpeaker fail to find my Wi-Fi**

- Try [factory reset](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/faq.md#factory-reset) first.
- And the Wi-Fi Channel 12 is not supported by ReSpeaker. Make sure your router is not using that channel.

**Q4: Wifi-Config**

- We advise you to configure Wi-Fi via [WEB-UI](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/QuickStart.md#setup-wi-fi) and if it can't be used, try command line tool [wictl](https://github.com/respeaker/get_started_with_respeaker/wiki/WiFi) at the serial console.

**Q5: How to change BING speech api recognize language**

- If you don't need to change the wake up words, just change text = bing.recognize(data) into text = bing.recognize(data,language="zh-CN") is fine. [More details](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/bing_speech_api.py).


**Q6: Got SD card warning message "Volume was not properly unmounted. Some data may be corrupt. Please run fsck"**

- If the files on the SD card are fine, ignore it. Otherwise, try to format it with [sd card formatter](https://www.sdcard.org/downloads/formatter_4/).


**Q7: Bad flash from Arduino**

- Re-flash the bootloader on openwrt.

```
/etc/init.d/mopidy stop  # stop mopidy if it's running, mopidy-hallo plugin will use SPI
/etc/init.d/alexa stop      # stop alexa if it's running
mt7688_pinmux set ephy gpio
cd /etc/arduino
avrdude -c linuxgpio -p m32u4 -e -U lfuse:w:0xFF:m -U hfuse:w:0xD8:m -U efuse:w:0xCB:m  -U flash:w:Caterina-ReSpeaker.hex -u -U lock:w:0xEF:m
```

**Q8: Forgot the password of WebUI**

- Reset the juci password

```
orangectl passwd root 12345678  //replace 12345678 with the password you want to set
```

**Q9: How to support google speech or other Speach TO Text(STT) Engine?**

- Install speech\_recognition library following the [guide](https://github.com/respeaker/get_started_with_respeaker/wiki/Use-speech_recognition-python-library)


**Q10: Failed to run Alexa with error "IOError: [Errno -9998] Invalid number of channels"**

- There is another application or alexa instance using the audio input device. Run /etc/init.d/alexa stop and /etc/init.d/mopidy stop to stop them. To disable mopidy to startup, run /etc/init.d/mopidy disable.


**Q11: Failed to run python playmusic.py**

- It should be that mopidy is running in background and is using the USB device. try to run /etc/init.d/mopidy stop to stop mopidy and run your command again.


**Q12: Don't have a RPC connection**

- You need to reflash the firmware, following the [guide](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/QuickStart.md#update-for-old-version)

**Q13: SFTP & FTP**
- We don't have a FTP on respeaker, just SFTP.


**Q14: Serial Console locked up**

- Try to update the [arduino code](https://github.com/respeaker/respeaker_arduino_library/blob/master/examples/pixels_pattern/pixels_pattern.ino).

**Q15: How to disable 'ap' mode**
- We could set the 'ssid' flag of the 'ap' interface to '' at vi /etc/config/wireless. Then the ap will be hidden.

**Q16: I2C Sound card issue**
- We need check  codec driver compatible name and codec i2c address. Then rebuild the image firmware.

**Q17: Respeaker is often wakeup even no voice.**

- We can reduce the false positive rate by increase the threshold in the keyword.txt, but it also reduce the sensibility.
- Another way is to adapt your voice with current acoustic module, more detail via http://cmusphinx.sourceforge.net/wiki/tutorialadapt.
- It will effectively improve individual keyword recognition, but may make the recognizer less general.

**Q18: How to control GPIO pins from respeaker?**

- We can use https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/gpio.py
- The example is https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/spi.py, which uses GPIOs to simulate SPI

**Q19: How to change wake up word?**

- keywords.txt contains keywords and their threshold. For example, keywords.txt from [here](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/pocketsphinx-data/keywords.txt) is

	```
	respeaker /1e-30/
	alexa /1e-30/
	play music /1e-40/
	```

	respeaker is a keyword, 1e-30 is its threshold. To improve sensitive, we can decrease the threshold, for example, 1e-50. We should know  decreasing the threshold will increase False Acceptance Rate.

	If you want to add new keyword, you should firstly add the keyword to  [dictionary.txt](https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/pocketsphinx-data/dictionary.txt).  The dictionary.txt is like:

	```
	respeaker	R IY S P IY K ER
	alexa	AH L EH K S AH
	play	P L EY
	music	M Y UW Z IH K
	```

	The first part is a name (respeaker, alexa or music), the second part is its phonemes. You can find words in a large dictionary at [here](https://github.com/respeaker/pocketsphinx-data/blob/master/dictionary.txt).

- then change the code:

	```
	if mic.wakeup('respeaker'):
	```
    
- The directoy of the keyword is /root/respeaker_python_library/respeaker/pocketsphinx-data

**Q20: System recovery by factory image.**

Note: If you can not update your ReSpeaker via Web or can not visit http://192.168.100.1/home.html, please click [here](https://s3-us-west-2.amazonaws.com/respeaker.io/firmware/ramips-openwrt-latest-LinkIt7688-squashfs-sysupgrade.bin). to download the lastest firmware on your computer, copy it to a SD card and plug the SD card into ReSpeaker.

Connect to the [serial console](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/QuickStart.md#serial-console). of ReSpeaker, type the following command lines to update the firmware:

```
mount /dev/mmcblk0p1 /mnt
cd /mnt
sysupgrade -n -F ramips-openwrt-latest-LinkIt7688-squashfs-sysupgrade.bin
```
It will cost about 3 minutes for ReSpeaker to install the firmware and reboot, please **don't turn off** ReSpeaker when updating.

![](https://github.com/SeeedDocument/Respeaker_Core/raw/master/img/systemupdate2.png)

## Resources
----

- **[Eagle]**[ReSpeaker Core v1.0 SCH](https://github.com/SeeedDocument/Respeaker_Core/raw/master/res/RespeakerCorev1.0_SCH.sch.zip)
- **[Eagle]**[ReSpeaker Core v1.0 BRD](https://github.com/SeeedDocument/Respeaker_Core/raw/master/res/RespeakerCorev1.0_BRD.brd.zip)
- **[PDF]**[ReSpeaker Core v1.0 Schematic(pdf)](https://github.com/respeaker/get_started_with_respeaker/blob/master/files/RespeakerCorev1.0_Schematic.pdf)
- **[PDF]**[ReSpeaker Core v1.0 PCB bottom(pdf)](https://github.com/respeaker/get_started_with_respeaker/blob/master/files/RespeakerCorev1.0_PCB_bottom.pdf)
- **[PDF]**[ReSpeaker Core v1.0 PCB top(pdf)](https://github.com/respeaker/get_started_with_respeaker/blob/master/files/RespeakerCorev1.0_PCB_top.pdf)
- **[Document]**[ReSpeaker_Detail](https://github.com/respeaker/get_started_with_respeaker/blob/master/docs/ReSpeaker/README.md)
- **[PDF]** [AI7688 Datasheet](https://github.com/SeeedDocument/Bazaar_file/raw/master/AI7688.pdf)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>