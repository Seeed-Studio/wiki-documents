---
name: One Wire Temperature Sensor DS18B20
category: Sensor
bzurl: 
oldwikiname: 
prodimagename: 
surveyurl: 
sku: 101990019
---

<div align=center><img src="https://files.seeedstudio.com/wiki/One-Wire-Temperature/one-wire.png"/><figcaption><b></b><i></i></figcaption></a>
</figure></div>

<p style="text-align:center"><a href="https://www.seeedstudio.com/One-Wire-Temperature-Sensor-p-1235.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p> 

This 2m long One Wire Temperature Sensor has a waterproof probe and long wire shape, suitable for immersive temperature detection. The chip inside this sensor is **DS18B20** which is widely adopted.The original one includes three wires inside, you need to add an extra resistance to get it working. For this sensor, we adjusted it into a Grove port and had a resistance pre-assembled inside so that you can use it as a regular Grove sensor. This article is going to illustrate the usage of the sensor on Raspberry Pi and have a fun! 

## Features
---
- Requires only one wire for data interface
- Waterproof
- Grove compatible
- Accepts 3.0V to 5.5V power supply
- Wide temperature range: -55°C to +125°C
- High accuracy: ±0.5°C( -10°C to +85°C)

!!!Attention
         The cable part cannot be put under temperature higher than 70°C for a long time.

## Specification
|||
|--------|---------|
|Operating Voltage	|3.0-5.5V|
|Chip|DS18B20|
|Length	|2m|
|Operating Temperature|	-55°C to +125°C |

## Getting Started
---
After this section, you can make One Wire Temperature Sensor run with only few steps.

### Play with Raspberry Pi

**Materials required**

| Raspberry Pi 4 Model B |Grove - Base Hat for Raspberry Pi|One Wire Temperature Sensor|
|--------------|-------------|-----------|
|![enter image description here](https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/raspberry_pi.png)|![enter image description here](https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/hat.png)|![enter image description here](https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/small.png)|
|[Get One Now](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html)|[Get One Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[Get One Now](https://www.seeedstudio.com/One-Wire-Temperature-Sensor-p-1235.html)|

**Connecting hardware**

![](https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/connection.jpg)

**Step 1.** Connect One Wire Temperature Sensor to port **D5** of Grove - Base Hat for Raspberry Pi, Plugged into Raspberry Pi 4 Model B. And then connect the Raspberry Pi 4 Model B with a PC.

**Step 2.** After accessing the system of Raspberry Pi, git clone **[Seeed_Python_DS18B20](https://github.com/Seeed-Studio/Seeed_Python_DS18B20.git)** and install **grove.py** by inserting the following command:

```shell
pip3 install Seeed-grove.py
```

Or on supported GNU/Linux systems like the Raspberry Pi, you can install the driver locally from PyPI:

```Shell
pip3 install seeed-python-Ds18b20
```

**Step 3.** To install system-wide (this may be required in some cases):

```Shell
sudo pip3 install seeed-python-Ds18b20
```
And you can insert the following command to upgrade the driver locally from PyPI:

```Shell
pip3 install --upgrade seeed-python-Ds18b20
```

**Software**

```Python
import seeed_ds18b20
import time

def main():
    DS18B20 = seeed_ds18b20.grove_ds18b20()
    print("Please use Ctrl C to quit")
    while True:
        temp_c,temp_f = DS18B20.read_temp
        print('temp_c %.2f C   temp_f %.2f F' % (temp_c,temp_f),end=" ")
        print('\r', end='')
        time.sleep(0.5)

if __name__ == "__main__":
    main()   
```

!!!Attention
          When running the demo code on Raspberry Pi, you **MIGHT** be reminded to enable the **1-Wire** interface. Then you should use the command **sudo raspi-config** and reboot to enable the 1-Wire device:

![](https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/1.png)
![](https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/1.png)

**Step 4.** Run the demo by the following command:

```Shell
cd Seeed_Python_DS18B20
```

```Shell
python3 examples/BasicRead.py 
```

!!!Success
          The outcome will display as following if everything goes well:

![](https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/TEM.png)

## Tech Support
Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>