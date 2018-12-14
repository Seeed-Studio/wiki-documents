---
title: Grove - Temperature&Humidity Sensor Pro
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html
oldwikiname: Grove - Temperature and Humidity Sensor Pro
prodimagename:
surveyurl: https://www.surveymonkey.com/r/Grove_Temperature_and_Humidity_Sensor_Pro
sku: 101020019
tags: io_3v3, io_5v, plat_duino, plat_pi

---


![](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/img/main.jpg)


 This is a powerful sister version of our Grove - Temperature&Humidity Sensor Pro. It has more complete and accurate performance than the basic version. The detecting range of this sensor is 5% RH - 99% RH, and -40°C - 80°C. And its accuracy reaches up to 2% RH and 0.5°C. A professional choice for applications that have relatively strict requirements.

<p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro%EF%BC%88AM2302%EF%BC%89-p-838.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Specification


|Item|		Min	|Norm	|Max	|Unit|
|---|---|---|---|---|
|Input voltage (VCC)	|	3.3|	-|	6|	V|
|I/O Logic Level|-|based on VCC|-| V|
|Measuring Current Supply	|	1|	-|	1.5|	mA|
|Standby Current Supply	|	40|	-|	50|	uA|
|Measuring range **(Humidity)**	|5%|	-|	99%|	RH|
|Measuring range **(Temperature)**|	-40|	-	|80|	°C|
|Accuracy	**(Humidity)**|-	|	-|	±2%|	RH|
|Accuracy **(Temperature)**	|-|-|	±0.5|	°C|
|Resolution	**(Humidity)**	|-|	-|	0.1%	|RH|
|Resolution **(Temperature)**	| -|-|	0.1|	°C|
|Repeatability	**(Humidity)**|	-|	-|	±0.3%|	RH|
|Repeatability **(Temperature)**|	-	|-	|±0.2|	°C|
|Long-term Stability|		-|	-	|±0.5%	|RH/year|
|Signal Collecting Period	|-|	2|	-|	S|
|Respond Time	1/e(63%)|	6|	-	|20|	S|
|Signal pin mode|-|Digital|-|-|


!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)


## Platforms Supported


| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.



## Getting Started

!!!Note
    If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.



### Play With Arduino

#### Hardware

**Materials required**

| Seeeduino V4.2 | Base Shield| Temperature&Humidity Sensor Pro |
|--------------|-------------|-----------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/img/Thumbnail.jpg)|
|<a href="http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html" target="_blank">Get One Now</a>|



!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy 




- **Step 1.** Connect Grove - Temperature&Humidity Sensor Pro to port **D2** of Grove-Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.

![](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/img/connect_arduino.jpg)



!!!Note
	If we don't have Grove Base Shield, We also can directly connect Grove - Temperature and Humidity Sensor Pro to Seeeduino as below.


| Seeeduino       | Temperature&Humidity Sensor Pro |
|---------------|-------------------------|
| 5V           | Red                     |
| GND           | Black                   |
| Not Conencted | White                   |
| D2            | Yellow                  |





#### Software

- **Step 1.** Download the [Seeed DHT library](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor) from Github.

- **Step 2.** Refer to [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3.** Restart the Arduino IDE. Open “ DHTtester” example via the path: **File --> Examples --> Grove_Humidity_Temperature_Sensor-master --> DHTtester**. Through this demo, we can read the temperature and relative humidity information of the environment.

![](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/img/path.png)


!!!Note
    This Grove - Temperature&Humidity Sensor Pro and our another product [Grove-Temperature and Humidity Sensor](http://wiki.seeedstudio.com/Grove-Temperature_Humidity_Pressure_Gas_Sensor_BME680/) are sharing this library. No matter which product you are using, make sure that you have made the definition line of the sensor of your board into effect and commented out the definition lines of other specs. For example, the sensor we used on Grove - Temperature and Humidity Sensor Pro is DHT 22. So the definition part of the sensor spec should be:

```
//#define DHTTYPE DHT11   // DHT 11
#define DHTTYPE DHT22   // DHT 22  (AM2302)
//#define DHTTYPE DHT21   // DHT 21 (AM2301)
```


- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](http://wiki.seeedstudio.com/Upload_Code/).

- **Step 5.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. if every thing goes well, you will get the result.


The result should be like:

![](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/img/result_arduino.png)



### Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)

#### Hardware

- **Step 1**. Things used in this project:

| Raspberry pi | Grove Base Hat for RasPi| Grove - Temp & Hum Sensor Pro|
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/img/Thumbnail.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-Pro-AM230-p-838.html)|


- **Step 2**. Plug the Grove Base Hat into Raspberry.
- **Step 3**. Connect the temperature and humidity sensor pro to port 12 of the Base Hat.
- **Step 4**. Connect the Raspberry Pi to PC through USB cable.


![](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/img/Temp&Hum_Pro_Hat.jpg)


!!! Note
    For step 3 you are able to connect the temperature and humidity sensor pro to **any GPIO Port** but make sure you change the command with the corresponding port number.


#### Software

- **Step 1**. Follow [Setting Software](http://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) to configure the development environment.
- **Step 2**. Download the source file by cloning the grove.py library. 

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Step 3**. Excute below commands to run the code.

```
cd grove.py/grove
python grove_temperature_humidity_sensor.py 22 12

```

!!!Note
    1.  To run this program, the command line should be +++python grove_temperature_humidity_sensor.py DHT type pin+++. As for this module, DHT type is 22 and we connected temperature and humidity sensor to pin 12 in the above case.
    2. This Grove - Temperature&Humidity Sensor Pro and our another product [Grove-Temperature and Humidity Sensor](http://wiki.seeedstudio.com/Grove-TemperatureAndHumidity_Sensor/) are sharing the same python code which named 'grove_temperature_humidity_sensor.py'. The only difference is that the DHT type is 22 for Temperature &Humidity Sensor Pro and 11 for Temperature & Humidity Sensor.


Following is the grove_temperature_humidity_sensor.py code.

```python

import RPi.GPIO as GPIO
# from grove.helper import *
def set_max_priority(): pass
def set_default_priority(): pass
from time import sleep

GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

PULSES_CNT = 41

class DHT(object):
    DHT_TYPE = {
        'DHT11': '11',
        'DHT22': '22'
    }

    MAX_CNT = 320

    def __init__(self, dht_type, pin):        
        self.pin = pin
        if dht_type != self.DHT_TYPE['DHT11'] and dht_type != self.DHT_TYPE['DHT22']:
            print('ERROR: Please use 11|22 as dht type.')
            exit(1)
        self._dht_type = '11'
        self.dht_type = dht_type
        GPIO.setup(self.pin, GPIO.OUT)

    @property
    def dht_type(self):
        return self._dht_type

    @dht_type.setter
    def dht_type(self, type):
        self._dht_type = type
        self._last_temp = 0.0
        self._last_humi = 0.0

    def _read(self):
        # Send Falling signal to trigger sensor output data
        # Wait for 20ms to collect 42 bytes data
        GPIO.setup(self.pin, GPIO.OUT)
        set_max_priority()

        GPIO.output(self.pin, 1)
        sleep(.2)

        GPIO.output(self.pin, 0)
        sleep(.018)

        GPIO.setup(self.pin, GPIO.IN)
        # a short delay needed
        for i in range(10):
            pass

        # pullup by host 20-40 us
        count = 0
        while GPIO.input(self.pin):
            count += 1
            if count > self.MAX_CNT:
                # print("pullup by host 20-40us failed")
                set_default_priority()
                return None, "pullup by host 20-40us failed"

        pulse_cnt = [0] * (2 * PULSES_CNT)
        fix_crc = False
        for i in range(0, PULSES_CNT * 2, 2):
            while not GPIO.input(self.pin):
                pulse_cnt[i] += 1
                if pulse_cnt[i] > self.MAX_CNT:
                    # print("pulldown by DHT timeout %d" % i)
                    set_default_priority()
                    return None, "pulldown by DHT timeout %d" % i

            while GPIO.input(self.pin):
                pulse_cnt[i + 1] += 1
                if pulse_cnt[i + 1] > self.MAX_CNT:
                    # print("pullup by DHT timeout %d" % (i + 1))
                    if i == (PULSES_CNT - 1) * 2:
                        # fix_crc = True
                        # break
                        pass
                    set_default_priority()
                    return None, "pullup by DHT timeout %d" % i

        # back to normal priority
        set_default_priority()

        total_cnt = 0
        for i in range(2, 2 * PULSES_CNT, 2):
            total_cnt += pulse_cnt[i]

        # Low level ( 50 us) average counter
        average_cnt = total_cnt / (PULSES_CNT - 1)
        # print("low level average loop = %d" % average_cnt)
       
        data = ''
        for i in range(3, 2 * PULSES_CNT, 2):
            if pulse_cnt[i] > average_cnt:
                data += '1'
            else:
                data += '0'
        
        data0 = int(data[ 0: 8], 2)
        data1 = int(data[ 8:16], 2)
        data2 = int(data[16:24], 2)
        data3 = int(data[24:32], 2)
        data4 = int(data[32:40], 2)

        if fix_crc and data4 != ((data0 + data1 + data2 + data3) & 0xFF):
            data4 = data4 ^ 0x01
            data = data[0: PULSES_CNT - 2] + ('1' if data4 & 0x01 else '0')

        if data4 == ((data0 + data1 + data2 + data3) & 0xFF):
            if self._dht_type == self.DHT_TYPE['DHT11']:
                humi = int(data0)
                temp = int(data2)
            elif self._dht_type == self.DHT_TYPE['DHT22']:
                humi = float(int(data[ 0:16], 2)*0.1)
                temp = float(int(data[17:32], 2)*0.2*(0.5-int(data[16], 2)))
        else:
            # print("checksum error!")
            return None, "checksum error!"

        return humi, temp

    def read(self, retries = 15):
        for i in range(retries):
            humi, temp = self._read()
            if not humi is None:
                break
        if humi is None:
            return self._last_humi, self._last_temp
        self._last_humi,self._last_temp = humi, temp
        return humi, temp

Grove = DHT


def main():
    import sys
    import time

    if len(sys.argv) < 3:
        print('Usage: {} dht_type pin'.format(sys.argv[0]))
        sys.exit(1)

    typ = sys.argv[1]
    sensor = DHT(typ, int(sys.argv[2]))
    
    while True:
        humi, temp = sensor.read()
        if not humi is None:
            print('DHT{0}, humidity {1:.1f}%, temperature {2:.1f}*'.format(sensor.dht_type, humi, temp))
        else:
            print('DHT{0}, humidity & temperature: {1}'.format(sensor.dht_type, temp))
        time.sleep(1)


if __name__ == '__main__':
    main()

```

!!!success
    If everything goes well, you will be able to see the following result
    
```python

pi@raspberrypi:~/grove.py/grove $ python grove_temperature_humidity_sensor.py 22 12
DHT22, humidity 49.2%, temperature 21.8*
DHT22, humidity 48.5%, temperature 21.9*
DHT22, humidity 48.1%, temperature 21.9*
DHT22, humidity 47.7%, temperature 22.0*
DHT22, humidity 47.1%, temperature 22.0*
DHT22, humidity 46.9%, temperature 22.0*
DHT22, humidity 49.3%, temperature 22.1*
DHT22, humidity 56.1%, temperature 22.2*
^CTraceback (most recent call last):
  File "grove_temperature_humidity_sensor.py", line 192, in <module>
    main()
  File "grove_temperature_humidity_sensor.py", line 183, in main
    humi, temp = sensor.read()
  File "grove_temperature_humidity_sensor.py", line 160, in read
    humi, temp = self._read()
  File "grove_temperature_humidity_sensor.py", line 77, in _read
    sleep(.2)
KeyboardInterrupt


```

You can quit this program by simply press ++ctrl+c++.




### Play With Raspberry Pi (with GrovePi_Plus)

#### Hardware

**Materials required**

| Raspberry pi | GrovePi_Plus | Temperature&Humidity Sensor Pro |
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/img/rasp.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/img/Grovepi%2B.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/img/Thumbnail.jpg)|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/GrovePi%2B-p-2241.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html" target="_blank">Get One Now</a>|



- **Step 1.** Plug the GrovePi_Plus into Raspberry.

- **Step 2.** Connect Grove - Temperature&Humidity Sensor Pro to **D4** port of GrovePi_Plus.

- **Step 3.** Connect the Raspberry to PC via USB cable.

![](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/img/connect_pi.jpg)



#### Software

If this is the first time you use GrovePi, please do this part step by step. If you are an old friend with GrovePi, you can skip **Step1** and **Step2**.


- **Step 1.** Setting Up The Software. In the command line, type the following commands:

```
sudo curl -kL dexterindustries.com/update_grovepi | bash

```

```
sudo reboot
```

```
cd /home/pi/Desktop
```
```
git clone https://github.com/DexterInd/GrovePi.git
```

For more detail about this part, please refer to [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/).


- **Step 2.** Follow [Updating the Firmware](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) to update the newest firmware of GrovePi.


!!!Note
    We firmly suggest you to update the firmware, or for some sensors you may get errors.



- **Step 3.** Configure the parameter

```

cd /home/pi/Desktop/GrovePi/Software/Python/
sudo nano grove_dht_pro.py

```

!!!Note
    The Grove - Temperature&Humidity Sensor and the Grove - Temperature&Humidity Sensor pro share the same python code which named
    `grove_dht_pro.py`.  The only difference is that for the sentence `[temp,humidity] = grovepi.dht(sensor,blue)`. We use the parameter
    `blue` for Grove - Temperature&Humidity Sensor while we use `white` for the Grove - Temperature&Humidity Sensor pro. The default value
    is blue, so for this sensor you need to change the code.


Change the default parameter `[temp,humidity] = grovepi.dht(sensor,blue)` into `[temp,humidity] = grovepi.dht(sensor,white)`. Then the code should be like:


```python
import grovepi
import math
# Connect the Grove Temperature & Humidity Sensor Pro to digital port D4
# This example uses the blue colored sensor.
# SIG,NC,VCC,GND
sensor = 4  # The Sensor goes on digital port 4.

# temp_humidity_sensor_type
# Grove Base Kit comes with the blue sensor.
blue = 0    # The Blue colored sensor.
white = 1   # The White colored sensor.

while True:
    try:
        # This example uses the blue colored sensor.
        # The first parameter is the port, the second parameter is the type of sensor.
        [temp,humidity] = grovepi.dht(sensor,white)  
        if math.isnan(temp) == False and math.isnan(humidity) == False:
            print("temp = %.02f C humidity =%.02f%%"%(temp, humidity))

    except IOError:
        print ("Error")

```

Then tap ++ctrl+x++ to quit nano. Tap ++y++ to save the change.


- **Step 4.** Run the following command to get the result.

```
sudo python grove_dht_pro.py
```

The result should be like:

```python

pi@raspberrypi:~/GrovePi/Software/Python $ sudo python grove_dht_pro.py
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%
temp = 22.90 C humidity =42.30%

```

## Resources

- **[Zip]** [Temperature&Humidity Sensor Pro in eagle format](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/res/Temp_Humi_Pro_eagle_files.zip)
- **[PDF]** [Temperature&Humidity Sensor Pro PCB in PDF format](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/res/TemperatureHumidiy%20Pro%20PCB.pdf)
- **[PDF]** [Temperature&Humidity Sensor Pro Schematic in PDF format](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/res/TemperatureHumidiy%20Pro%20Schematic.pdf)
- **[Library]** [Temperature&Humidity Sensor Pro library](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/res/Humidity_Temperature_Sensor_pro.zip)
- **[Datasheet]** [AM2302-CN.pdf](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/res/AM2302-CN.pdf)
- **[Datasheet]**  [AM2302-EN.pdf](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/res/AM2302-EN.pdf)

## Projects

**Temperature Humidity Data Logger**: This project helps to monitor temperature and humidity values of a particular location along with device battery level.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/alpha007/temperature-humidity-data-logger-767570/embed' width='350'></iframe>

**LinkIt ONE IoT Demo**: An IoT demo made by LinkIt ONE.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/loovee/linkit-one-iot-demo-546a9c/embed' width='350'></iframe>

**Automated Snake Enclosure with Camera**: Interactive snake enclosure that is temperature and humidity controlled and uses lat-long to mimic natural light cycles, with an online cam.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/hagakure/automated-snake-enclosure-with-camera-a56ea9/embed' width='350'></iframe>

**Foton - The connected lightsaber**: Foton is a special lightsaber, which can monitor temperature and humidity of a room, detect movements, and send those data to a smartphone.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/Momy93/foton-the-connected-lightsaber-a6c159/embed' width='350'></iframe>

## Tech Support
Please do not hesitate to contact [techsupport@seeed.cc](techsupport@seeed.cc) if you have any technical issue. Or submit the issue into our [forum](https://forum.seeedstudio.com/).







