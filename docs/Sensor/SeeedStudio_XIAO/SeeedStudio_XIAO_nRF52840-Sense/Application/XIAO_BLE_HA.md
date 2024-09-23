---
description: BTHome Protocol for Home Assistant usage on Seeed Studio XIAO nRF52840 Sense
title: BTHome Protocol with XIAO nRF52840 Sense(CircuitPython) 
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /XIAO_BLE_HA
last_update:
  date: 09/18/2023
  author: Bruno Santos (Feiticeir0)
---

# Project Overview

In this wiki, we will show how to use the Bluetooth 5.0 BLE capabilities of the Seeed Studio XIAO nRF52840 with the Seeed Studio Grove Temperature & Humidity Sensor (DHT20) to broadcast measurements of temperature and humidity to Home Assistant using the BTHome protocol.

We will be using **CircuitPython** for the code.

## Getting Started

To follow this tutorial , you need the following hardware

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO nRF52840-Sense</th>
        <th>Seeed Studio Grove Temperature&Humidity Sensor V2.0 (DHT20)</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Tem-humidity-sensor1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Hardware Preparation

The Grove DHT20 sensor uses I2C for communication. We need to connect it to the I2C pins of the XIAO nRF52840 Sense:

- We can use a XIAO Grove Shield with a Universal 4 pin Unbuckled cable
- Connect the DHT20 sensor directly to the XIAO nRF52840 Sense using a 4 pin Female Jumper to Grove 4 pin Conversion Cable

#### Here's the pinout for XIAO nRF52840 Sense and XIAO Grove Shield

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/XIAO_nRF52840_pinout.png" alt="pir" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/XIAO_shield_Pinout.png" alt="pir" width={600} height="auto" /></p>

### Hardware setup

Wiring is straight forward. Either using the Shield or not, the following Fritzing Schematic show how to wire the components together. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/wiring.jpg" alt="Wiring" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/XIAO_Shield_wiring.jpg" alt="Wiring" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/Simple_Wiring.jpg" alt="Wiring" width={600} height="auto" /></p>

## Software Preparation

We're going to use Thonny IDE software (Linux) and some related libraries and files. These are the steps we're going to take:

1. Install CircuitPython on the XIAO nRF52840 Sense
2. Install the necessary libraries
3. Code our sensor using the BTHome protocol
4. Configure Home Assistant

### Step 1 - Install CircuitPython

Let's install CircuitPython.

Go to <a  href="https://circuitpython.org/" target="_blank"><span>CircuitPython</span></a> and download a version for the XIAO nRF52840 Sense. 
Choose Downloads and in the search field start writing the XIAO nRF52840 until the results show the sensor.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython1.png" alt="CircuitPython Download" width={600} height="auto" /></p>

Next, press the download button to get the file for our device. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython2.png" alt="CircuitPython Download" width="{600}" height="auto" /></p>

You should have a .uf2 file. To install it we need to enter bootloader mode. Connect the XIAO nRF52840 Sense to your computer and press the reset button twice.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/functional2b.jpg" alt="CircuitPython Download" width={600} height="auto" /></p>

A new drive should have appeared on your computer called XIAO-SENSE.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython3.png" alt="XIAO nRF52840 Sense drive" width={600} height="auto" /></p>

Next, copy the downloaded file to the drive. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython4.png" alt="XIAO nRF52840 Sense drive" width={600} height="auto" /></p>

After a while, a new drive appears named CIRCUITPY. We have CircuitPython installed on our microcontroller. 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython5.png" alt="XIAO nRF52840 Sense drive" width={600} height="auto" /></p>

### Step 2 - Install libraries

To use our Grove Temperature & Humidity sensor V2.0 (DHT20), we need the <a  href="https://learn.adafruit.com/adafruit-aht20/python-circuitpython" target="_blank"><span> Adafruit's AHT20 library</span></a>.

The previous website has instructions on how to install libraries.

After installed, we should have the following files (this are the required for our DHT20 sensor):
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/circuitpython6.png" alt="XIAO nRF52840 Sense drive" width={600} height="auto" /></p>

### Step 3 - Upload Code

Before going for the code, we need to understand what BTHome is.

<p style={{textAlign: 'center'}}><img src="https://bthome.io/images/logo.png" alt="BTHome logo" width="25%" height="auto" /></p>

#### BTHome

BTHome is an open standard for broadcasting sensor data and button presses over Bluetooth Low Energy (BLE). It is designed to be energy efficient, flexible, and secure. BTHome is supported by popular home automation platforms, such as Home Assistant, out of the box.

Some benefits of BTHome:

- Is an open standard, so devices from different manufacturers can work together.
- Devices are designed to be energy efficient, so they can run for a long time on a single battery.
- Data is encrypted, so it is secure from unauthorized access.
- Is a flexible format, so it can be used to transmit a variety of sensor data and button presses.

BTHome is a versatile and powerful standard for broadcasting sensor data and button presses over BLE. It is a good option for anyone who wants to add sensor data and button presses to their smart home.

You can read more about it and learn about the data format on the <a  href="https://bthome.io/" target="_blank"><span>official site</span></a>.

#### Code

Here's the CircuitPython code.

<details>
<summary>Click to copy the CircuitPython code</summary>

```python
# BTHome with DHT20
# This code is based on the excelent code by Koen Vervloesem
# https://github.com/koenvervloesem/BTHome-Inertial-Sensor-in-CircuitPython
# We don't use deep sleep because it just doesn't work
# on the XIAO nRF52840 Sense. It's a pitty. 

from _bleio import adapter
from time import sleep
import board
# for the Grove sensor
import adafruit_ahtx0


# The size of the name is important. 
DEVICE_NAME = "XIAO nRF52840 Sense"
INTERVAL = 0.1

# Because this is delaying just 0.1s - 100 milliseconds, we don't need to read the sensor
# values everytime. It's overkill - let's just read every 5 minutes. 
# Let's create a timer that will add every INTERVAL
# when it reaches 30 - it will be 5 minutes passed
# then we read the sensor
# INTERVAL * 60 seconds * 5 minutes
# CONVERTING 0.1ms to seconds * 60s * minutes = 300
MINUTES_PER_READING = 5
readTimer = INTERVAL * 10 * 60 * MINUTES_PER_READING


# convert the measurement value to the BTHome format
def value_to_little_endian (measurement):
    
    # Calculate the integer value by dividing the temperature by the factor
    integer_value = int(measurement / 0.01)

    # Extract the lower and upper bytes for little-endian representation
    lower_byte = integer_value & 0xFF
    upper_byte = (integer_value >> 8) & 0xFF

    # Reverse the order of the bytes
    little_endian_bytes = bytes([upper_byte, lower_byte])
    return little_endian_bytes

class BTHomeAdvertisement:
    _ADV_FLAGS = [0x02, 0x01, 0x06]
    _ADV_SVC_DATA = [0x0a, 0x16, 0xd2, 0xfc, 0x40, 0x02, 0x00, 0x00, 0x03, 0xbf, 0x13]    

    def _name2adv(self, local_name):
        adv_element = bytearray([len(local_name) + 1, 0x09])
        adv_element.extend(bytes(local_name, "utf-8"))
        return adv_element

    def __init__(self, local_name=None):
        if local_name:
            self.adv_local_name = self._name2adv(local_name)
        else:
            self.adv_local_name = self._name2adv(adapter.name)

    def adv_data(self, temperature, humidity):
        adv_data = bytearray(self._ADV_FLAGS)
        adv_svc_data = bytearray(self._ADV_SVC_DATA)
        # temperature
        # change values according - 
        temp = value_to_little_endian (temperature)
        # returned value is list
        adv_svc_data[6] = temp[1]
        adv_svc_data[7]= temp[0]
        # humidity
        # change values according - 
        hum = value_to_little_endian (humidity)
        # returned value is list
        adv_svc_data[9] = hum[1]
        adv_svc_data[10]= hum[0]
        adv_data.extend(adv_svc_data)
        adv_data.extend(self.adv_local_name)
        return adv_data


# BTHome
bthome = BTHomeAdvertisement(DEVICE_NAME)

# Create sensor object
sensor = adafruit_ahtx0.AHTx0(board.I2C())

# because we want a initial reading
# let's initialize with the readTimer variable
# so we force the script to read the values
currentTimer = 0
# inital reading
temp = sensor.temperature
hum = sensor.relative_humidity

#DEBUG
#print("\nTemperature: %0.1f C" % temp)
#print("Humidity: %0.1f %%" % hum)
 
while True:
    adv_data = bthome.adv_data(temp,hum)
    adapter.start_advertising(
        adv_data, scan_response=None, connectable=False, interval=INTERVAL * 2
    )
    sleep(INTERVAL)
    adapter.stop_advertising()
    # increase currentTimer
    currentTimer += INTERVAL
    #print (f"Current timer: {currentTimer}")
    if (currentTimer >= readTimer):
        #print (f'Read new values')
        # Read new values
        temp = sensor.temperature
        hum = sensor.relative_humidity
        #reset counter
        currentTimer = 0


```
</details>

Remember to save it as `code.py` so it gets executed on boot.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-MicroPy/C3-MicroPython6.png" alt="BTHome logo" width="500" height="auto" /></p>

#### A bit of code explaining

- The code is full of comments to explain it a bit. 
- Basically, every 0.2s it is broadcasting the temperature and humidity coming from the DHT20 sensor. 
- Because we don't want to overload the sensor and read values every 0.2s, we've placed a timer. It will only read the values every 5 minutes. This time is controlled by the `MINUTES_PER_READING` variable. 

### Step 4 - Display data on Home Assistant

#### Step 4.1 - Add XIAO nRF52840 Sense on Home Assistant

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/home-assistant-icon-flat.png" alt="Home Assistant Logo" width="15%" height="auto" /></p>

Home Assistant is a free and open-source software for home automation. It is designed to be a central control system for smart home devices with a focus on local control and privacy.

Home Assistant acts as a central smart home controller hub by combining different devices and services in a single place and integrating them as entities. The provided rule-based system for automation allows creating custom routines based on a trigger event, conditions and actions, including scripts. These enable building automation, alarm management of security alarms and video surveillance for home security system as well as monitoring of energy measuring devices. 

You can read more about it on the <a  href="https://www.home-assistant.io/" target="_blank"><span>official site</span></a>.

#### Requirements

One crucial requirement is that HA (Home Assistant) **has Bluetooth**. If you're running HA on a Raspberry PI, chances are you have. All is dependent on the RPi version.

#### Configuration

On "Step 3 - Upload Code", we coded the XIAO nRF52840 and for the next step, it must be running, so HA can detect it.

Open your HA installation. Go to Settings -> Devices and Services
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/0_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>
Now, your Integrations page shows up. Select Bluetooth
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/1_HA.png" alt="Home Assistant" width="90%" height="auto" /></p>

And the Integration should appear. 
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/2_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

<b>NOTE:</b> If something is not working, check if Passive scanning <b>is not selected</b>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/3_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

When entering the Integrations page, if you have the XIAO nRF52840 Sense connected, it should already have been detected and will appear on the page. 
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/5_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

Press "Configure" to configure this new Integration. Press Submit. 
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/6_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

Now you just need to select the area where to put this new sensor and were done.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/7_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

Next, go again to Settings -> Integrations and select the new BTHome integration 
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/10_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>
We then are taken to the integration page. We can see that we have 1 device and 3 entities. 
The entities are the temperature, humidity and signal strength 
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/11_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>
If we click on the entities, we get a new page where we can have a view of them all.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/12_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

If instead, we pressed on device, we get the device page with all the options as well the current values. Using this page, we can add it to the dashboard. 
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/13_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>
By pressing "ADD to DASHBOARD", we get to choose the view where to put it. 
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/14_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

After that, we get a view of the card. Just press "ADD TO DASHBOARD" to add it to the dashboard. 
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/15_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

If we go to the dashboard, our newly added card with the temperature and humidity broadcasted by the XIAO nRF52840 Sense.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-HA/17_HA.png" alt="Home Assistant" width="auto" height="auto" /></p>

## What's More - Deep Sleep Function

I couldn't make it work. If someone has a solution, please leave a comment. You can share your thoughts at [GitHub](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=35979237)

## ✨ Contributor Project

- This project is supported by the Seeed Studio [Contributor Project](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479).
- Thanks [Bruno's efforts](https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=35979237) and your work will be [exhibited](https://wiki.seeedstudio.com/Honorary-Contributors/).

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
