---
name: Grove - Temperature&Humidity Sensor
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Temp&Humi-Sensor-p-745.html
oldwikiname: Grove_-_Temperature&Humidity_Sensor
prodimagename: Grove-TempAndHumiSensor.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/101020011 1.jpg
surveyurl: https://www.research.net/r/Grove-TemperatureAndHumidity_Sensor
sku: 101020011
---

![](https://github.com/SeeedDocument/Grove-TemperatureAndHumidity_Sensor/raw/master/img/main.jpg)

This Temperature&Humidity sensor provides a pre-calibrated digital output. A unique capacitive sensor element measures relative humidity and the temperature is measured by a negative temperature coefficient (NTC) thermistor. It has excellent reliability and long term stability. Please note that this sensor will not work for temperatures below 0 degree.


<p style=":center"><a href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT1-p-745.html" target="_blank"><img src="https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/get_one_now_small.png" width="210" height="41"  border=0 /></a></p>



## Features
--------

-   Relative Humidity and temperature measurement
-   Full range temperature compensation Calibrated
-   Digital signal
-   Long term stability
-   Long transmission distance(>20m)
-   Low power consumption

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)

## Applications Ideas
------------------

-   Consumption product
-   Weather station
-   Humidity regulator
-   Air conditioner


## Specifications
--------------

### Key Specifications

| Items        |   Min                  |
|--------------|------------------------|
| PCB Size     | 2.0cm*4.0cm            |
| Interface    | 2.0mm pitch pin header |
| IO Structure | SIG,VCC,GND,NC         |
| ROHS         | YES                    |

### Electronic Characterstics

<table border="1">
<tr>
<th>
Items
</th>
<th>
Conditions
</th>
<th>
Min
</th>
<th>
Norm
</th>
<th>
Max
</th>
<th>
Unit
</th>
</tr>
<tr align="center">
<td>
VCC
</td>
<td>
-
</td>
<td>
3.3
</td>
<td>
-
</td>
<td>
5
</td>
<td>
Volts
</td>
</tr>
<tr align="center">
<td>
Measuring Current Supply
</td>
<td>
-
</td>
<td>
1.3 
</td>
<td>
- 
</td>
<td>
2.1
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<td>
Average Current Supply
</td>
<td>
-
</td>
<td>
0.5
</td>
<td>
-
</td>
<td>
1.1
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<td rowspan="2">
Measuring Range
</td>
<td>
Humidity
</td>
<td>
20%
</td>
<td>
-
</td>
<td>
90%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
Temperature
</td>
<td>
0
</td>
<td>
-
</td>
<td>
50
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td rowspan="2">
Accuracy
</td>
<td>
Humidity
</td>
<td>
-
</td>
<td>
-
</td>
<td>
±5%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
Temperature
</td>
<td>
</td>
<td>
</td>
<td>
±2
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td rowspan="2">
 Sensitivity
</td>
<td>
Humidity
</td>
<td>
</td>
<td>
-
</td>
<td>
1%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
Temperature
</td>
<td>
</td>
<td>
</td>
<td>
1
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td rowspan="2">
Repeatability
</td>
<td>
Humidity
</td>
<td>
</td>
<td>
</td>
<td>
±1%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
Temperature
</td>
<td>
</td>
<td>
</td>
<td>
±1
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td>
Long-term Stability
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
±1%
</td>
<td>
RH/year
</td>
</tr>
<tr align="center">
<td>
Signal Collecting Period
</td>
<td>
</td>
<td>
</td>
<td>
2
</td>
<td>
</td>
<td>
S
</td>
</tr>
</table>



Platforms Supported
------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |

!!!Note
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.



Getting Started


When MCU sends a trigger signal, sensor will change from low power consumption mode to active mode. After the trigger signal sensor will send a response signal back to MCU, then 40 bit collected data is sent out and a new signal collecting is trigged.(Note that the 40 bit collected data which is sent from sensor to MCU is already collected before the trigger signal comes.) One trigger signal receives one time 40 bit response data from sensor. Single-bus data is used for communication between MCU and sensor.
The communication process is shown below:

![](https://raw.githubusercontent.com/SeeedDocument/Grove-TemperatureAndHumidity_Sensor/master/img/Twig-Temperature_Humidity.jpg)

It costs 5ms for single time communication.The high-order bit of data sends out first. Signal Data is 40 bit, comprised of 16 bit humidity data, 16 bit temperature data and 8 bit checksum.The data format is:

    8bits integer part of humidity+8bits decimal part of humidity
    +8bits integer part of temperature+8bits decimal part of temperature
    +8bits checksum.

!!!Note
    If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.


### Play With Arduino

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield| Temperature&Humidity Sensor|
|--------------|-------------|-----------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-TemperatureAndHumidity_Sensor/raw/master/img/list.jpg)|
|[Get One Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html)|


- **Step 2.** Connect Grove - Temperature&Humidity Sensor to port **D2** of Grove-Base Shield.

- **Step 3.** Plug Grove - Base Shield into Seeeduino.

- **Step 4.** Connect Seeeduino to PC via a USB cable.

![](https://github.com/SeeedDocument/Grove-TemperatureAndHumidity_Sensor/raw/master/img/connect_arduino.jpg)


!!!Note
	If we don't have Grove Base Shield, We also can directly connect Grove - Temperature and Humidity Sensor Pro to Seeeduino as below.


| Seeeduino       | Temperature&Humidity Sensor |
|---------------|-------------------------|
| 5V            | Red                     |
| GND           | Black                   |
| Not Conencted | White                   |
| D2            | Yellow                  |


#### Software

- **Step 1.** Download the  [ Seeed DHT library](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor)  from Github.

- **Step 2.** Refer [How to install library](http://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3.** Restart the Arduino IDE. Open “ DHTtester” example via the path: **File --> Examples --> Grove_Humidity_Temperature_Sensor-master --> DHTtester**. Through this demo, we can read the temperature and relative humidity information of the environment.

![](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/img/path.png)


!!!Note
    This Grove - Temperature&Humidity Sensor and our another product [Grove-Temperature&Humidity Sensor pro](http://wiki.seeedstudio.com/Grove-Temperature_and_Humidity_Sensor_Pro/) are sharing this library. No matter which product you are using, make sure that you have made the definition line of the sensor of your board into effect and commented out the definition lines of other specs. For example, the sensor we used on Grove - Temperature&Humidity Sensor is DHT 11. So the definition part of the sensor spec should be:

```
#define DHTTYPE DHT11   // DHT 11
//#define DHTTYPE DHT22   // DHT 22  (AM2302)
//#define DHTTYPE DHT21   // DHT 21 (AM2301)
```

The default setting of the library is `DHT 22`, so you need to change it into `DHT 11` manually.


- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [how to upload code](http://wiki.seeedstudio.com/Upload_Code/).



- **Step 5.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. if every thing goes well, you will get the temperature.

The result should be like:

![](https://github.com/SeeedDocument/Grove-TemperatureAndHumidity_Sensor/raw/master/img/result_ar.png)

### Play with Codecraft

#### Hardware

**Step 1.** Connect a Grove - Temperature&Humidity Sensor to port D2 a Base Shield.

**Step 2.** Plug the Base Shield to your Seeeduino/Arduino.

**Step 3.** Link Seeeduino/Arduino to your PC via an USB cable.

#### Software

**Step 1.** Open [Codecraft](https://ide.chmakered.com/), add Arduino support, and drag a main procedure to working area.

!!!Note
    If this is your first time using Codecraft, see also [Guide for Codecraft using Arduino](http://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).

**Step 2.** Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page.

![cc](https://raw.githubusercontent.com/SeeedDocument/Grove-TemperatureAndHumidity_Sensor/master/img/cc_Temperature_Humidity.png)

Upload the program to your Arduino/Seeeduino.

!!!Success
    When the code finishes uploaded, you will see temperature and humidity displayed in the Serial Monitor.

### Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)

#### Hardware

- **Step 1**. Things used in this project:

| Raspberry pi | Grove Base Hat for RasPi| Grove - Temp & Hum Sensor|
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/rasp.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove_Base_Hat_for_Raspberry_Pi/raw/master/img/thumbnail.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-TemperatureAndHumidity_Sensor/raw/master/img/list.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html)|


- **Step 2**. Plug the Grove Base Hat into Raspberry.
- **Step 3**. Connect the temperature and humidity sensor to Port 12 of the Base Hat.
- **Step 4**. Connect the Raspberry Pi to PC through USB cable.


![](https://github.com/SeeedDocument/Grove-TemperatureAndHumidity_Sensor/raw/master/img/Temp_Hum_Hat.jpg)


!!! Note
    For step 3 you are able to connect the temperature and humidity sensor to **any GPIO Port** but make sure you change the command with the corresponding port number.


#### Software

- **Step 1**. Follow [Setting Software](http://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) to configure the development environment.
- **Step 2**. Download the source file by cloning the grove.py library. 

```
cd ~
git clone https://github.com/Seeed-Studio/Seeed_Python_DHT.git

```

- **Step 3**. Excute below commands to run the code.

```
cd Seeed_Python_DHT
sudo python setup.py install
cd ~/Seeed_Python_DHT/examples
python dht_simpleread.py 
```


Following is the dht_simpleread.py code.

```python
import time
import seeed_dht
def main():

    # for DHT11/DHT22
    sensor = seeed_dht.DHT("11", 12)
    # for DHT10
    # sensor = seeed_dht.DHT("10")
    
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

pi@raspberrypi:~/Seeed_Python_DHT/examples $ python dht_simpleread.py 
DHT11, humidity 39.2%, temperature 29.1*
DHT11, humidity 39.2%, temperature 29.1*
DHT11, humidity 39.2%, temperature 29.1*
DHT11, humidity 39.1%, temperature 29.1*
DHT11, humidity 40.0%, temperature 29.1*
DHT11, humidity 39.9%, temperature 29.1*
DHT11, humidity 40.3%, temperature 29.1*
DHT11, humidity 42.0%, temperature 29.1*
```


You can quit this program by simply press ++ctrl+c++.



### Play With Raspberry Pi (with GrovePi_Plus)

#### Hardware
First, You need to prepare the below stuffs:

- **Step 1.** Prepare the below stuffs:

| Raspberry pi | GrovePi_Plus | Temperature&Humidity Sensor|
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/img/rasp.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove_Ultrasonic_Ranger/raw/master/img/Grovepi%2B.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-TemperatureAndHumidity_Sensor/raw/master/img/list.jpg)|
|[Get One Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get One Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Get One Now](https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html)|


- **Step 2.** Plug the GrovePi_Plus into Raspberry.

- **Step 3.** Connect Grove - Temperature&Humidity Sensor to **D4** port of GrovePi_Plus.

- **Step 4.** Connect the Raspberry to PC via USB cable.

![](https://github.com/SeeedDocument/Grove-TemperatureAndHumidity_Sensor/raw/master/img/connect_pi.jpg)


#### Software
- **Step 1.** Follow [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) to configure the development environment.

- **Step 2.** Follow [Updating the Firmware](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) to update the newest firmware of GrovePi.


!!!Tip
    In this wiki we use the path **~/GrovePi/** instead of **/home/pi/Desktop/GrovePi**, you need to make sure Step 2 and Step 3 use the same path.

!!!Note
    We firmly suggest you to update the firmware, or for some sensors you may get errors.


- **Step 3.** Git clone the Github repository.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

-	**Step 4.** Check the code.

```python

cd ~/GrovePi/Software/Python
sudo nano grove_dht_pro.py

```

The code should be like:
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
        [temp,humidity] = grovepi.dht(sensor,blue)  
        if math.isnan(temp) == False and math.isnan(humidity) == False:
            print("temp = %.02f C humidity =%.02f%%"%(temp, humidity))

    except IOError:
        print ("Error")

```

Then tap ++ctrl+x++ to quit nano.

!!!Note
    The Grove - Temperature&Humidity Sensor and the Grove - Temperature&Humidity Sensor pro share the same python code which named
    `grove_dht_pro.py`.  The only difference is that for the sentence `[temp,humidity] = grovepi.dht(sensor,blue)`. We use the parameter
    `blue` for Grove - Temperature&Humidity Sensor while we use `white` for the Grove - Temperature&Humidity Sensor pro. The default value
    is blue, so for this sensor you do not need to change the code.

-	**Step 5.** Excute below commands to get the value.

```
sudo python grove_dht_pro.py
```

The result should be like:

```python

pi@raspberrypi:~/GrovePi/Software/Python $ sudo python grove_dht_pro.py
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%
temp = 26.00 C humidity =40.00%

```



## Resources


- **[Zip]** [Temperature&Humidity Sensor eagle file](https://raw.githubusercontent.com/SeeedDocument/Grove-TemperatureAndHumidity_Sensor/master/res/Temperature_Humidity.zip)

- **[Zip]** [Temperature&Humidity Sensor Library](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor)

- **[Codecraft]** [CDC File](https://raw.githubusercontent.com/SeeedDocument/Grove-TemperatureAndHumidity_Sensor/master/res/Grove_Temperature_and_Humidity_Sensor_CDC_File.zip)


## Projects

**Toilet Management System**: Using the system multiple persons can share a single toilet efficiently.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://project.seeedstudio.com/taifur/toilet-management-system-8e2786/embed' width='350'></iframe>


## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>