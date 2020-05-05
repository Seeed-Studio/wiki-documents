---
name: Grove - TDS Sensor/Meter For Water Quality (Total Dissolved Solids)
category: 
bzurl: 
oldwikiname: 
prodimagename: 
surveyurl: 
sku: 101020753
---


![](https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Grove-TDS-Sensor-connect.jpg)

The Grove - TDS Sensor detects the Total Dissolved Solids (TDS) levels in the water which can be used to indicate the water quality. The Grove - TDS Sensor can be applied in water quality applications such as TDS meter, well water, aquarium, hydroponics, etc.

It supports 3.3/5V input voltage and 0 ~ 2.3V Output Voltage making it easy to be compatible with all Arduino Boards. The sensor also provides a waterproof probe, making the testing process much easier to handle.
<p style=":center"><a href="https://www.seeedstudio.com/Grove-TDS-Sensor-p-4400.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Feature

- Analog Signal, easy to implement
- Support 3.3/5V Input Voltage
- Good Arduino Compatibility, where 0 ~ 2.3V Output Voltage can be easily implemented in 3.3/5V control system
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
  <p style=":center"><a href="https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Hardware-overview.jpeg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Hardware-overview.jpeg" /></a></p>
</figure>
</div>


## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |


## Getting Started

### Play With Arduino


**Materials required**


| Seeeduino V4.2 | Base Shield | Grove - TDS Sensor|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Grove-TDS-Sensor-thumbnail.jpg)
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-TDS-Sensor-p-4400.html)|

>In addition, you can consider our new [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), which is equivalent to the combination of Seeeduino V4.2 and Baseshield.

#### Hardware Connection

- **Step 1.** Plug Grove - TDS Sensor to **A0** port of Grove - Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to a PC via a USB cable.

![](https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Connection%20Pic.jpg)

#### Software

!!!Attention
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.


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
    tdsValue=(133.42*Voltage*Voltage*Voltage - 255.86*Voltage*Voltage + 857.39*Voltage)*0.5; //Convert voltage value to TDS value
    SERIAL.print("TDS Value = "); 
    SERIAL.print(tdsValue);
    SERIAL.println(" ppm");
    delay(1000);
}
```

- **Step 3.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](https://wiki.seeedstudio.com/Upload_Code/).

- **Step 4.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. Set the baud rate to **9600**.

- **Step 5.** The result should be like this when the probe is in water:

<div align=center><img src="https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Results.gif"/></div>


### Play With Raspberry Pi

**Materials required**

| Raspberry Pi | Grove Base Hat for RasPi | Grove - TDS Sensor|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Grove-TDS-Sensor-thumbnail.jpg)
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-TDS-Sensor-p-4400.html)|

- **Step 2.** Plug the Grove Base Hat into Raspberry Pi.

- **Step 3.** Connect the Grove - TDS sensor to port **A0** of the Base Hat.

![](https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/img/Grove-TDS-rasp.jpg)

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


<div class="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/res/Grove-TDS-Sensor-v1.0.zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>

## Resources

- **[ZIP]** [Grove - TDS Sensor/Meter For Water Quality (Total Dissolved Solids) Schematic file](https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/res/Grove-TDS-Sensor-v1.0.zip)
- **[PDF]** [LMV324 Datasheet](https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/res/LMV324-Datasheet.pdf)
- **[PDF]** [CD4060BM Datasheet](https://files.seeedstudio.com/wiki/Grove-TDS-Sensor/res/CD4060BM-Datasheet.pdf)

## Tech Support
Please submit any technical issue into our [forum](https://forum.seeedstudio.com/)<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>