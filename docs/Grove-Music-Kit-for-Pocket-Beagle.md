# Grove Music Kit for Pocket Beagle


![](https://github.com/SeeedDocument/Grove-Music-Kit-for-Pocket-Beagle/raw/master/img/_DAS6325.jpg)



PocketBeagle is an ultra-tiny-yet-complete open-source USB-key-fob computer. PocketBeagle features an incredibly low cost, slick design, and simple usage, making PocketBeagle the ideal development board for beginners and professionals alike. Its rich features allow users to programmatically control external devices and obtain data from external devices.

Grove is a modular, standardized connector prototyping system. Consisting of Sensor, Actuator, Display, Communication, and Other function modules. Grove takes a building block approach to assemble electronics. Compared to the jumper or solder based system, it is easier to connect, experiment and build and simplifies the learning system. 

The Grove Music Kit for Pocket Beagle combines the Grove sensor modules with the powerful programming capabilities of Pocket Beagle, allowing students to interact with music using real-world information such as light, touch, keyboard, Slide Potentiometer, posture and so on, to create cool projects.




## Haedware Overview

![](https://github.com/SeeedDocument/Grove-Music-Kit-for-Pocket-Beagle/raw/master/img/pin.jpg)



**Part List:**

- <font size="4" color="red">①</font> [Grove - Sound Sensor](http://wiki.seeedstudio.com/Grove-Sound_Sensor/)
- <font size="4" color="red">②</font> [Grove - Chainable RGB LED](http://wiki.seeedstudio.com/Grove-Chainable_RGB_LED/)
- <font size="4" color="red">③</font> [Grove - Ultrasonic Distance Sensor](http://wiki.seeedstudio.com/Grove-Ultrasonic_Ranger/)
- <font size="4" color="red">④</font> [Grove - Rotary Angle Sensor](http://wiki.seeedstudio.com/Grove-Rotary_Angle_Sensor/)
- <font size="4" color="red">⑤</font> [Grove - Slide Potentiometer](http://wiki.seeedstudio.com/Grove-Slide_Potentiometer/)
- <font size="4" color="red">⑥</font> [Grove – Button](http://wiki.seeedstudio.com/Grove-Button/)
- <font size="4" color="red">⑦</font> [Grove - 12 Key Capacitive I2C Touch Sensor V2](http://wiki.seeedstudio.com/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/)
- <font size="4" color="red">⑧</font> [Grove - 3 Axis Digital Accelerometer](http://wiki.seeedstudio.com/Grove-3-Axis_Digital_Accelerometer-16g/)
- <font size="4" color="red">⑨</font> [Grove – Speaker](http://wiki.seeedstudio.com/Grove-Speaker/)
- <font size="4" color="red">⑩</font> [Grove – 16x2 LCD](http://wiki.seeedstudio.com/Grove-16x2_LCD_Series/)
- <font size="4" color="red">⑪</font> [Pocket Beaglebone with Grove shield](https://www.seeedstudio.com/PocketBeagle-OSD3358ARM-Cortex-A8-512MB-RAM-p-2888.html)
- <font size="4" color="red">⑫</font> [10pcs Alligator Cable](https://www.seeedstudio.com/10pcs-alligator-clip-test-lead-500mm-22awg-p-3087.html)
- <font size="4" color="red">⑬</font> SD+TF Card Reader
- <font size="4" color="red">⑭</font> WiFi Dongle
- <font size="4" color="red">⑮</font> Acrylic shell

```
nano libgpiod_install.sh

#!/bin/sh

apt-get install -y libtool pkg-config autoconf-archive python3-dev
apt-get install -y build-essential
wget https://git.kernel.org/pub/scm/libs/libgpiod/libgpiod.git/snapshot/libgpiod-1.1.1.tar.gz
tar xvf libgpiod-1.1.1.tar.gz
cd libgpiod-1.1.1

export PYTHON_VERSION=3
./autogen.sh --enable-tools=yes --enable-bindings-python --prefix=/usr/local

sudo make
sudo make install
sudo ldconfig

chmod 777 libgpiod_install.sh

./libgpiod_install.sh

git clone -b beagle-master https://github.com/turmary/bb.org-overlays.git
cd ~/bb.org-overlays
make && sudo make install
sudo nano /boot/uEnv.txt
uboot_overlay_addr0=/lib/firmware/PB-I2C1-TLV320AIC3104.dtbo
sudo reboot
wget https://github.com/beagleboard/bb.org-overlays/files/3877583/tlv320aic3104.state.txt 
mv tlv320aic3104.state.txt  tlv320aic3104.state
alsactl restore 0 -f tlv320aic3104.state
sudo apt update
sudo apt-get install python-pyaudio -y
sudo apt-get install build-essential python-dev python-pip -y
git clone git://github.com/adafruit/adafruit-beaglebone-io-python.git
cd adafruit-beaglebone-io-python
sudo python setup.py install
git clone https://github.com/hansonCc/Grove_Music_Kit_for_Pocket-Beagle_Cc.git
```

---------------

## Lesson – 1. Control the Light

### Description:

In this lesson, students will light up the RGB LED, and learn how to use sound and rotary angle to change the light of RGB LED.

### Hardware Requirement:

- [Grove - Sound Sensor](http://wiki.seeedstudio.com/Grove-Sound_Sensor/)
- [Grove - Rotary Angle Sensor](http://wiki.seeedstudio.com/Grove-Rotary_Angle_Sensor/)
- [Grove - Chainable RGB LED](http://wiki.seeedstudio.com/Grove-Chainable_RGB_LED/)


### Hardware Connection
 
- Plug the Grove - Sound Sensor into **A5** port
- Plug the Grove - Rotary Angle Sensor into **A2** port
- Grove - Chainable RGB LED into **A0** port
- Power the Pocket Beagle via the **micro USB** port


![](https://github.com/SeeedDocument/Grove-Music-Kit-for-Pocket-Beagle/raw/master/img/_DAS6312.jpg)


### Software

```
nano Control_the_Light.py
```
```
import time
import grove_sound_sensor as SoundSensor
import grove_rotary_angle_sensor as RotaryAngleSensor
import grove_chainable_rgb_led as ChainableLED
from grove_overlay import A5,A2,A0,PWM
def main():
    _SoundSensor = SoundSensor.GroveSoundSensor(A5)
    _RotaryAngleSensor = RotaryAngleSensor.GroveRotaryAngleSensor(A2)
    _ChainableLED1 = ChainableLED.GroveChainableLED(PWM,1)
    _ChainableLED2 = ChainableLED.GroveChainableLED(A0,1)
    while True:
        time.sleep(0.1)
        _ChainableLED1.setColorRGB(0, int(255*_RotaryAngleSensor.get_data()), 0, 0)
        _ChainableLED2.setColorRGB(0, 0, int(255*_SoundSensor.get_data()), 0)
if __name__ == "__main__":
    main()
```

!!!success
        Now please turn the rotary angle sensor slowly, and see how the RGB LED changes its light.


-------------

## Lesson – 2. Musical Note

### Description:

In this lesson, students can move their hand in front of the ultrasonic distance sensor, the LCD will show the distance of the hand, and speaker will play different musical note based on different distance.

### Hardware Requirement:

- [Grove - Ultrasonic Distance Sensor](http://wiki.seeedstudio.com/Grove-Ultrasonic_Ranger/)
- [Grove – 16x2 LCD](http://wiki.seeedstudio.com/Grove-16x2_LCD_Series/)
- [Grove – Speaker](http://wiki.seeedstudio.com/Grove-Speaker/)


### Hardware Connection
 
- Plug the Grove - Ultrasonic Distance Sensor into **A2** port
- Plug the Grove – 16x2 LCD into **I2C1** port
- Plug the Grove – Speaker into **PWM** port
- Power the Pocket Beagle via the **micro USB** port

![](https://github.com/SeeedDocument/Grove-Music-Kit-for-Pocket-Beagle/raw/master/img/project2.jpg)


### Software

```
import time
import grove_rgb_lcd as Lcd
import grove_ultrasonic_ranger as UltrasonicRanger
import grove_speaker as Speaker
from grove_speaker import BassTab
from grove_overlay import A2,I2C1,PWM
def main():
    _Lcd = Lcd.GroveRgbLcd(I2C1)
    _UltrasonicRanger = UltrasonicRanger.GroveUltrasonicRanger(A2)
    _Speaker = Speaker.GroveSpeaker(PWM)
    while True:
        time.sleep(0.1)
        distance = _UltrasonicRanger._get_distance()
        lcd.setText_norefresh('The distance is:\n{}cm'.format(distance))
        if distance < 70 :
            _Speaker.Speaker_enable()
            _Speaker.Speaker_sound(BassTab[distance/10])
            time.sleep(1)
            _Speaker.Speaker_enable(False) 
if __name__ == "__main__":
    main()

```


!!!success
        Now please please slowly change the distance between your hand and the ultrasonic distance sensor, you can find the distance value in the LCD change and the music switched by the distance.




--------


## Lesson – 3. Switch the Music

### Description:

In this lesson, students will learn how to use the 2 buttons to select the next song or the last song. The LCD will show the name of the song.

### Hardware Requirement:

- [Grove – Button x 2](http://wiki.seeedstudio.com/Grove-Button/)
- [Grove – Speaker](http://wiki.seeedstudio.com/Grove-Speaker/)
- [Grove – 16x2 LCD](http://wiki.seeedstudio.com/Grove-16x2_LCD_Series/)


### Hardware Connection
 
- Plug the Grove – Button into **A2** and **A0** port
- Plug the Grove – 16x2 LCD into **I2C** port
- Plug the Grove – Speaker into **A5** port
- Power the Pocket Beagle via the **micro USB** port


![](https://github.com/SeeedDocument/Grove-Music-Kit-for-Pocket-Beagle/raw/master/img/project-3.jpg)


### Software

```
sudo apt-get install python-pyaudio
```
```
to be continue ... ...
```


!!!success
        Now please try to press the two buttons, check the LCD, and listen to the music.



-----

## Lesson – 4. Download Music via the WIFI dongle

### Description:
In this lesson, students will learn how to download mp3 files from the Internet via the WIFI dongle, and they can also practice the skill learn from Lesson3 to switch the music.

### Hardware Requirement:

- [Grove – Button x 2](http://wiki.seeedstudio.com/Grove-Button/)
- [Grove – Speaker](http://wiki.seeedstudio.com/Grove-Speaker/)
- [Grove – 16x2 LCD](http://wiki.seeedstudio.com/Grove-16x2_LCD_Series/)
- USB WIFI dongle


### Hardware Connection
 
- Plug the Grove – Button into **A2** and **A0** port
- Plug the Grove – 16x2 LCD into **I2C** port
- Plug the Grove – Speaker into **A5** port
- Plug the WiFi dongle into the **USB** Port
- Power the Pocket Beagle via the **micro USB** port


![](https://github.com/SeeedDocument/Grove-Music-Kit-for-Pocket-Beagle/raw/master/img/project-4.jpg)


### Software

```
to be continue ... ...
```


!!!success
        Default music is boring and bad taste? Now, with the help of WiFi, you can download the music meet your own flavor.

----


## Lesson – 5. KeyBoard Player

### Description:

In this lesson, students will learn how to use the capacitive touch sensor to play different musical note.

### Hardware Requirement:

- [Grove - 12 Key Capacitive I2C Touch Sensor V2](http://wiki.seeedstudio.com/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/)
- [Grove – Speaker](http://wiki.seeedstudio.com/Grove-Speaker/)


### Hardware Connection
 
- Plug the Grove – Speaker into **A5** port
- Plug the Grove - 12 Key Capacitive I2C Touch Sensor V2 into **I2C** port
- Power the Pocket Beagle via the **micro USB** port


![](https://github.com/SeeedDocument/Grove-Music-Kit-for-Pocket-Beagle/raw/master/img/project-5.jpg)


### Software

```
to be continue ... ...
```


!!!success
        Try to touch the Capacitive key, image it as a keyboard, and play your music.


----


## Lesson – 6. Start the Party


### Description:

In this lesson, students will learn how to use the capacitive touch sensor to play the song <Twinkle Star>. And the RGB LED will have different color based on different music note.

### Hardware Requirement:

- [Grove - 12 Key Capacitive I2C Touch Sensor V2](http://wiki.seeedstudio.com/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/)
- [Grove – Speaker](http://wiki.seeedstudio.com/Grove-Speaker/)
- [Grove - Slide Potentiometer](http://wiki.seeedstudio.com/Grove-Slide_Potentiometer/)
- [Grove - Chainable RGB LED](http://wiki.seeedstudio.com/Grove-Chainable_RGB_LED/)



### Hardware Connection
 
- Plug the Grove – Speaker into **A5** port
- Plug the Grove - 12 Key Capacitive I2C Touch Sensor V2 into **I2C** port
- Plug the Grove - Slide Potentiometer into **A2** port
- Plug the Chainable RGB LED into **PWM** port
- Power the Pocket Beagle via the **micro USB** port


![](https://github.com/SeeedDocument/Grove-Music-Kit-for-Pocket-Beagle/raw/master/img/project-6.jpg)


### Software

```
to be continue ... ...
```


!!!success
        Just control the music as lesson 5, and you can see the color of RGB LED change.



----


## Lesson – 7. Music Box

### Description:

In this lesson, students will learn how to use the Grove – 3-Axis Accelerometer to control RGB LED and Speaker. At last, he can make a smart box, by putting different side of the box on the table, the box will have different color and play different music.


### Hardware Requirement:

- [Grove - 3 Axis Digital Accelerometer](http://wiki.seeedstudio.com/Grove-3-Axis_Digital_Accelerometer-16g/)
- [Grove – Speaker](http://wiki.seeedstudio.com/Grove-Speaker/)
- [Grove - Chainable RGB LED](http://wiki.seeedstudio.com/Grove-Chainable_RGB_LED/)


### Hardware Connection

- Plug the Grove – Speaker into **A5** port
- Plug the Grove - 3 Axis Digital Accelerometer into **A2** port
- Plug the Chainable RGB LED into **PWM** port
- Power the Pocket Beagle via the **micro USB** port

![](https://github.com/SeeedDocument/Grove-Music-Kit-for-Pocket-Beagle/raw/master/img/project-7.jpg)


### Software

```
to be continue ... ...
```


!!!success
        Here you go, a smart music box. Just rotate the music box and dance with different music.

----