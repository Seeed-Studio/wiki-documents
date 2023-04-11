---
description: Grove - TDS Sensor
title: Grove - TDS Sensor
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-TDS-Sensor
last_update:
  date: 1/6/2023
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Grove-TDS-Sensor-connect.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Grove-TDS-Sensor-connect.jpg" alt="pir" width={600} height="auto" /></p>
The Grove - TDS Sensor detects the Total Dissolved Solids (TDS) levels in the water which can be used to indicate the water quality. The Grove - TDS Sensor can be applied in water quality applications such as TDS meter, well water, aquarium, hydroponics, etc.

It supports 3.3 / 5V input voltage and 0 ~ 2.3V Output Voltage making it easy to be compatible with all Arduino Boards. The sensor also provides a waterproof probe, making the testing process much easier to handle.
<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-TDS-Sensor-p-4400.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-TDS-Sensor-p-4400.html)
## Feature

- Analog Signal, easy to implement
- Support 3.3 / 5V Input Voltage
- Good Arduino Compatibility, where 0 ~ 2.3V Output Voltage can be easily implemented in 3.3 / 5V control system
- Waterproof TDS Probe

## Specification

|Parameter|Value|
|---|---|
|Input voltage|3.3V / 5V|
|Output Voltage| 0 ~ 2.3V |
|Working Current| 3 ~ 6 mA|
|TDS Measurement Range|0 ~ 1000ppm|
|Connection Interface|Grove 4-Pin / XHB 2.54mm 2P|
|Interface|Analog|
|Cable Length|60cm|
|Connection Interface|XHB 2.54mm 2P|

## Hardware Overview

<div align="center">
  <figure>
    <p style={{}}><a href="https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Hardware-overview.jpeg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Hardware-overview.jpeg" /></a></p>
  </figure>
</div>



## Platforms Supported

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

## Getting Started

### Play With Arduino


**Materials required**


| Seeeduino V4.2 | Base Shield | Grove - TDS Sensor|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Grove-TDS-Sensor-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-TDS-Sensor-p-4400.html)|

>In addition, you can consider our new [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), which is equivalent to the combination of Seeeduino V4.2 and Baseshield.

#### Hardware Connection

- **Step 1.** Plug Grove - TDS Sensor to **A0** port of Grove - Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to a PC via a USB cable.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Connection%20Pic.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Connection%20Pic.jpg" alt="pir" width={600} height="auto" /></p>
#### Software

:::note
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

- **Step 1.**  Open the Arduino IDE and create a new file, then copy the following code into the new file.

```C++
#define SERIAL Serial
#define sensorPin A0

int sensorValue = 0;
float tdsValue = 0;
float Voltage = 0;

void setup() {
    SERIAL.begin(9600);
}
void loop() {
    sensorValue = analogRead(sensorPin);
    Voltage = sensorValue*5/1024.0; //Convert analog reading to Voltage
    tdsValue=(133.42/Voltage*Voltage*Voltage - 255.86*Voltage*Voltage + 857.39*Voltage)*0.5; //Convert voltage value to TDS value
    SERIAL.print("TDS Value = "); 
    SERIAL.print(tdsValue);
    SERIAL.println(" ppm");
    delay(1000);
}
```

- **Step 3.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](https://wiki.seeedstudio.com/Upload_Code/).

- **Step 4.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. Set the baud rate to **9600**.

- **Step 5.** The result should be like this when the probe is in water:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Results.gif" /></div>



### Play With Raspberry Pi

**Materials required**

| Raspberry Pi | Grove Base Hat for RasPi | Grove - TDS Sensor|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Grove-TDS-Sensor-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-TDS-Sensor-p-4400.html)|

- **Step 2.** Plug the Grove Base Hat into Raspberry Pi.

- **Step 3.** Connect the Grove - TDS sensor to port **A0** of the Base Hat.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Grove-TDS-rasp.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Grove-TDS-rasp.jpg" alt="pir" width={600} height="auto" /></p>
- **Step 4.** Connect the Raspberry Pi to PC through USB cable.

#### Software

- **Step 1.** Follow [Setting Software](https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) to configure the development environment.

- **Step 2.** Download the source file by cloning the grove python library.

```sh
cd ~
git clone https://github.com/Seeed-Studio/grove.py
```

- **Step 3.** Execute below commands to create the python code.

```sh
cd grove.py/grove/
nano TDS.py
```

- **Step 4.** Copy the following code into the file:

```py
import math
import sys
import time
from grove.adc import ADC

class GroveTDS:

    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()

    @property
    def TDS(self):
        value = self.adc.read(self.channel)
        if value != 0:
            voltage = value*5/1024.0
            tdsValue = (133.42/voltage*voltage*voltage-255.86*voltage*voltage+857.39*voltage)*0.5
            return tdsValue
        else:
            return 0

Grove = GroveTDS

def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)

    sensor = GroveTDS(int(sys.argv[1]))
    print('Detecting TDS...')

    while True:
        print('TDS Value: {0}'.format(sensor.TDS))
        time.sleep(1)

if __name__ == '__main__':
    main()
```

- **Step 5.** Use **Ctrl+O** to save and **Ctrl+X** to quit.

- **Step 6**. Run the following to execute:

```sh
python TDS.py 0
```

!!!Success
        If everything goes well, you will be able to see the following result:

```sh
pi@raspberrypi:~/grove.py/grove$ python TDS.py 0
Detecting TDS...
TDS Value: 0
TDS Value: 0
TDS Value: 0
TDS Value: 0
TDS Value: 2.41591963768
TDS Value: 28.5884239197
TDS Value: 33.2677587509
TDS Value: 30.9311414242
TDS Value: 30.9311414242
```



## FAQ

**Q1#** Limitations of Grove - TDS Sensor/Meter For Water Quality (Total Dissolved Solids)?

**A1:** Limitations are as followed:

- The Waterproof TDS probe cannot be used in water above 70°C.
- The sensor cannot be used to measure flowing water.
- The sensor cannot be used to measure water with high pollution concentration.
- The Grove sensor itself is not waterproof.

## Schematic Online Viewer


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/res/Grove-TDS-Sensor-v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Resources

- **[ZIP]** [Grove - TDS Sensor/Meter For Water Quality (Total Dissolved Solids) Schematic file](https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/res/Grove-TDS-Sensor-v1.0.zip)
- **[PDF]** [LMV324 Datasheet](https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/res/LMV324-Datasheet.pdf)
- **[PDF]** [CD4060BM Datasheet](https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/res/CD4060BM-Datasheet.pdf)

## Tech Support
Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).

## Upgradable to Industrial Sensors
With the SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) and [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), you can easily turn the Grove into a LoRaWAN® sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust [industrial sensors](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN® network, built-in 19 Ah battery, and powerful support from APP make the [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>


