---
description: One Wire Temperature Sensor DS18B20
title: One Wire Temperature Sensor DS18B20
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /One-Wire-Temperature-Sensor-DS18B20
last_update:
  date: 1/4/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/One-Wire-Temperature/one-wire.png" /></div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/One-Wire-Temperature-Sensor-p-1235.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border="0" /></a></p>

This 2m long One Wire Temperature Sensor has a waterproof probe and long wire shape, suitable for immersive temperature detection. The chip inside this sensor is **DS18B20** which is widely adopted.The original one includes three wires inside, you need to add an extra resistance to get it working. For this sensor, we adjusted it into a Grove port and had a resistance pre-assembled inside so that you can use it as a regular Grove sensor. This article is going to illustrate the usage of the sensor on Raspberry Pi and have a fun!

## Upgradable to Industrial Sensors

With the SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) and [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), you can easily turn the Grove into a LoRaWAN® sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust [industrial sensors](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

SenseCAP S210x series industrial sensors provide an out-of-box experience for environmental sensing. Please refer to the S2101 Wireless Temperature and Humidity Sensor with higher performance and robustness for air quality monitoring. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) for your next successful industrial project.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody><tr><td align="center"><font size={4}><strong>SenseCAP Industrial Sensor</strong></font></td>
    </tr>
    <tr>
      <td><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="20%" src="https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 Air Temp &amp; Humidity</strong></a></td>
    </tr>
  </tbody></table>

## Features

---

- Requires only one wire for data interface
- Waterproof
- Grove compatible
- Accepts 3.0V to 5.5V power supply
- Wide temperature range: -55°C to +125°C
- High accuracy: ±0.5°C( -10°C to +85°C)

:::caution
The cable part cannot be put under temperature higher than 70°C for a long time.
:::

## Specification

|||
|--------|---------|
|Operating Voltage |3.0-5.5V|
|Chip|DS18B20|
|Length |2m|
|Operating Temperature| -55°C to +125°C |

## Platform Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

## Getting Started

---
After this section, you can make One Wire Temperature Sensor run with only few steps.

### Play with Arduino

#### Materials Required

| Seeeduino Lotus V1.1 |One Wire Temperature Sensor|
|--------------|--------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/small.png" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/small.png" /></div>|
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface.html)|[Get ONE Now](https://www.seeedstudio.com/One-Wire-Temperature-Sensor-p-1235.html)|

#### Hardware Connection

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/hardware-1-wire.jpg" /></div>

:::tip
Please plug the USB cable，One Wire Temperature Sensor Interface into Seeeduino Lotus V1.1 Interface gently, otherwise you may damage the port.
:::

- **Step 1.** Plug One Wire Temperature Sensor into **D2** interface of Seeeduino Lotus V1.1 with a Grove Cable.

- **Step 2.** Connect Seeeduino Lotus V1.1 to PC via a USB cable.

- **Step 3.** Download the code, please refer to the software part.

- **Step 4.** Run the code and the outcome will display on the screen of **Serial Monitor** in your Arduino IDE .

#### Software

:::caution
If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

- **Step 1.** Download the [Library for Onewire](https://github.com/PaulStoffregen/OneWire/archive/master.zip) and [Library for Arduino Temperature Control](https://github.com/milesburton/Arduino-Temperature-Control-Library/archive/master.zip)

- **Step 2.** Copy the whole **OneWire** and **Arduino-Temperature-Control-Library** files and paste them into your Arduino IDE library file.

- **Step 3.** Upload the demo code from **Software Code** below. If you do not know how to upload the code, please check [How to upload code](https://wiki.seeedstudio.com/Upload_Code/).

**Software Code**

```cpp
// Include the libraries we need
#include <OneWire.h>
#include <DallasTemperature.h>

// Data wire is plugged into port 2 on the Arduino
#define ONE_WIRE_BUS 2


// Setup a oneWire instance to communicate with any OneWire devices (not just Maxim/Dallas temperature ICs)
OneWire oneWire(ONE_WIRE_BUS);

// Pass our oneWire reference to Dallas Temperature. 
DallasTemperature sensors(&oneWire);

/*
 * The setup function. We only start the sensors here
 */
void setup(void)
{
  // start serial port
  Serial.begin(115200);
  Serial.println("Dallas Temperature IC Control Library Demo");

  // Start up the library
  sensors.begin();
}

/*
 * Main function, get and show the temperature
 */
void loop(void)
{ 
  // call sensors.requestTemperatures() to issue a global temperature 
  // request to all devices on the bus
  Serial.print("Requesting temperatures...");
  sensors.requestTemperatures(); // Send the command to get temperatures
  Serial.println("DONE");
  // After we got the temperatures, we can print them here.
  // We use the function ByIndex, and as an example get the temperature from the first sensor only.
  float tempC = sensors.getTempCByIndex(0);

  // Check if reading was successful
  if(tempC != DEVICE_DISCONNECTED_C) 
  {
    Serial.print("Temperature for the device 1 (index 0) is: ");
    Serial.println(tempC);
  } 
  else
  {
    Serial.println("Error: Could not read temperature data");
  }
}
```

:::tipsuccess
  If everything goes well, you can go to **Serial Monitor** to see an outcome as following:
:::

<div align="center">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/outcome-1-wire.png" alt="1-wire'' OUTCOME" title="demo" />
    <figcaption><b /><i /></figcaption>
  </figure>
</div>

### Play with Raspberry Pi

#### Materials required

| Raspberry Pi 4 Model B |Grove - Base Hat for Raspberry Pi|One Wire Temperature Sensor|
|--------------|-------------|-----------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/raspberry_pi.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/hat.png" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/small.png" /></div>|
|[Get One Now](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html)|[Get One Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[Get One Now](https://www.seeedstudio.com/One-Wire-Temperature-Sensor-p-1235.html)|

#### Connecting hardware

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/connection.jpg" /></div>

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

#### Software

```python
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

:::caution
When running the demo code on Raspberry Pi, you **MIGHT** be reminded to enable the **1-Wire** interface. Then you should use the command **sudo raspi-config** and reboot to enable the 1-Wire device:
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/1.png" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/1.png" /></div>

**Step 4.** Run the demo by the following command:

```Shell
cd Seeed_Python_DS18B20
```

```Shell
python3 examples/BasicRead.py 
```

:::tipsuccess
          The outcome will display as following if everything goes well:
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/TEM.png" /></div>

## Resource

**[PDF]** [DS18B20-Datasheet](https://files.seeedstudio.com/wiki/One-Wire-Temperature/res/DS18B20-Datasheet.pdf).

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

