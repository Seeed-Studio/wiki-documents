---
description: Grove - Gas O₂ Sensor(MIX8410)
title: Grove - Gas O₂ Sensor(MIX8410)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Gas_Sensor-O2-MIX8410
last_update:
  date: 1/3/2023
  author: shuxu hu
---
<!-- tags: io_3v3, io_5v, grove_i2c, grove_analog, grove_digital, grove_uart, plat_duino, plat_bbg, plat_pi, plat_wio, plat_linkit -->

<!-- ![enter image description here](https://files.seeedstudio.com/products/101990680/101990680_preview-34.png) -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/101990680/101990680_preview-34.png" alt="pir" width={600} height="auto" /></p>

Grove - Oxygen Sensor(MIX8410) is a kind of sensor to test the oxygen concentration in air, which is based on the principle of the electrochemical cell to the original work. You can know clearly the current oxygen concentration when you output voltage values proportional to the concentration of oxygen and refer to the oxygen concentration linear characteristic graph. It's very suitable for detecting oxygen concentration in the environment protection. Grove - Oxygen Sensor(MIX8410) is an organic reaction module, it can provide a little current while putting it in the air, we don't need to provide an external power to it, and output voltage will change as time current changes. 

Grove - Oxygen Sensor(MIX8410) is a new release version compared to the old one Grove - Oxygen Sensor(ME2-O2-Ф20). So in what areas have we updated? The new version has advanced anti-leakage treatment, which greatly reduces the probability of leakage and solves the problem of leakage in the old version.The output current of the new version is lower, so the electrolyte consumption is slower and the sensor life is longer. In addition, the bottom pins, physical dimensions, top driver board, and usage methods of the new and old versions are the same.

<iframe width="800" height="450" src="https://www.youtube.com/embed/4df5kaaKa6I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[<p><img src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Wireless/images/get_one_now.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Oxygen-Sensor-MIX8410-p-4697.html) 


:::tip
    We've released the [Seeed Gas Sensor Selection Guide](https://wiki.seeedstudio.com/Sensor_gas/), it will help you choose the gas sensor that best suits your needs.
:::

## Feature

* High sensitivity (0.1±0.03 mA) with linear output
* High stability with <10s response time
* Environmental protection design
* Advanced anti-leakage technology which greatly reduces the probability of leakage
* Low output current for longer sensor life

:::tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::


## Specification

|Items	| Parameter |
|-------|---------------|
|Measurement Range	| 0-25% |
|Overload concentration| 30%|
|Sensitivity	| 0.05~0.15 mA(in air) |
|Repeatability  | ±2% |
|responsible time(t90) | ＜ 10s |
|stability| ＜ 2% / moth |
|Recommended load| 100Ω |
|Long-term drift|  ＜ 5% / year|
|Temperature Range |	-20 °C~50 °C |
|Preheat Time	| 20 minutes|
|Storage temperature| 0-25 °C|
|Input voltage|3.3V / 5V|
|Detect Life	| two years(air) |

:::note
    Leads can be welded during installation, and soldering is forbidden to touch the sensor; 
    The aging time of power-on is not less than 30min; 
    Avoid long-term contact with organic volatile solvents; 
    The use or storage environment cannot be an acid-base environment.
:::





## Hardware

**Voltage Convertor**

<!-- ![](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/Converter.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/Converter.png" alt="pir" width={600} height="auto" /></p>


The XC6206332MR converts 3.3v/5v input to 3.3v.

**Current Source**

<!-- ![](https://files.seeedstudio.com/products/101990680/currentsource.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/101990680/currentsource.png" alt="pir" width={600} height="auto" /></p>


The MIX8410-O2 is current source. The voltage of the label #3 point is R7 * Current(MIX8410-O2).

**Amplifer**

<!-- ![](https://files.seeedstudio.com/products/101990680/MIX8410Amplifer.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/101990680/MIX8410Amplifer.png" alt="pir" width={600} height="auto" /></p>


The gain of the amplifer is 241, SIGA voltage is 241 times of label #3 point voltage. 

<!-- ![](https://files.seeedstudio.com/products/101990680/outputcurrent.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/101990680/outputcurrent.png" alt="pir" width={600} height="auto" /></p>


Here is the correlation between MIX8410 output current and concentration of O2. The current of 20% concentration O2 is around 96uA. So the Grove SIGA voltage @ 20% concentration = R7 * Current(MIX8410) * 241 = 100 * 96uA * 241 = 2.314V. 

:::warning
    The current ranage of MIX8410 is 8uA~100uA due to individual difference. So the sensor ouput voltage also will different. Please explosure the sensor to fresh air and get reading of output voltage as reference at beginning. You can refer to [this example](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/resources/Read_O2_value.zip) to get the calibration at beginning and then read the sensor values.   
:::

## Platforms Supported

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->

|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::


##Getting Started

:::note
    This chapter is based on Win10 and Arduino IDE 1.7.9
:::

This new Grove Gas Sensor O2(MIX8410) usage method is exactly the same as the old [ME2-O2-Ф20](https://wiki.seeedstudio.com/Grove-Gas_Sensor-O2/).

This an easy-to-use module, what you need to do is connect the signal pin (the YELLOW pin of Grove cable) to the ADC input of your controller. If there's no internal ADC in your controller, [Grove - I2C ADC](https://www.seeedstudio.com/Grove-I2C-ADC-p-1580.html) is recommend. 

Here we will show you how this Grove - Oxygen Sensor(MIX8410) works via a simple demo. First of all, you need to prepare the below stuffs:

| Seeeduino V4 | Grove - Oxygen Sensor(MIX8410) | Base Shield |
|--------------|----------------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/products/101990680/101990680overview.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/grove-gas-sensoro2-p-1541.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Universal-4-Pin-20cm-Unbuckled-Cable-%285-PCs-Pack%29-p-749.html)|



###Connection 

Thanks to the benefit of Grove series modules, you don't need to make soldering or bread board, what you need to do is connect the modules to the right port of Base Shield. For this demo, we have only one Grove module. 

* Grove - Oxygen Sensor(MIX8410) is an analog input module, we connect it to **A0** at this demo

<!-- ![enter image description here](https://files.seeedstudio.com/products/101990680/hardwareconnection1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/101990680/hardwareconnection1.jpg" alt="pir" width={600} height="auto" /></p>



###Upload the code to Arduino

Copy the below code to Arduino IDE.


```
// Grove - Gas Sensor(O2) test code
// Note:
// 1. It need about about 5-10 minutes to preheat the sensor
// 2. modify VRefer if needed

const float VRefer = 3.3;       // voltage of adc reference

const int pinAdc   = A0;

void setup() 
{
    // put your setup code here, to run once:
    Serial.begin(9600);
    Serial.println("Grove - Oxygen Sensor(MIX8410) Test Code...");
}

void loop() 
{
    // put your main code here, to run repeatedly:
    float Vout =0;
    Serial.print("Vout =");

    Vout = readO2Vout();
    Serial.print(Vout);
    Serial.print(" V, Concentration of O2 is ");
    Serial.println(readConcentration());
    delay(500);
}

float readO2Vout()
{
    long sum = 0;
    for(int i=0; i<32; i++)
    {
        sum += analogRead(pinAdc);
    }
    
    sum >>= 5;
    
    float MeasuredVout = sum * (VRefer / 1023.0);
    return MeasuredVout;
}

float readConcentration()
{
    // Vout samples are with reference to 3.3V
    float MeasuredVout = readO2Vout();
    
    //float Concentration = FmultiMap(MeasuredVout, VoutArray,O2ConArray, 6);
    //when its output voltage is 2.0V,
    float Concentration = MeasuredVout * 0.21 / 2.0;
    float Concentration_Percentage=Concentration*100;
    return Concentration_Percentage;
}

```

Then choose the right Board and COM port, and then click on the Upload button, this process take few seconds. 

###Get data

Open serial monitor of your Arduino IDE, and you will get the data now. 

:::warning
    It need about 20~30 minutes to preheat the sensor, or you will get a larger value.
:::
    
<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/data.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/data.png" alt="pir" width={600} height="auto" /></p>


## Getting Started with Raspberry Pi(With Grove Base Hat for Raspberry Pi)

#### Hardware

- **Step 1**. Things used in this project:

| Raspberry pi | Grove Base Hat for RasPi| Grove - Gas Sensor O₂(MIX8410)|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/products/101990680/MIX8410py.png" alt="pir" width={600} height="auto" /></p>|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Oxygen-Sensor-MIX8410-p-4697.html)|


- **Step 2**. Plug the Grove Base Hat into Raspberry.
- **Step 3**. Connect Grove - Gas Sensor O₂(MIX8410) to analog port A0 of the Base Hat.
- **Step 4**. Connect the Raspberry Pi to PC through USB cable.


<!-- ![](https://files.seeedstudio.com/products/101990680/MIX8410hardwareconnection1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/101990680/MIX8410hardwareconnection1.jpg" alt="pir" width={600} height="auto" /></p>




#### Software

- **Step 1**. Follow [Setting Software](https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) to configure the development environment.
- **Step 2**. Download the source file by cloning the grove.py library. 

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Step 3**. Execute below commands to create the python code.

```
cd grove.py/grove/
nano MIX8410.py


```
- **Step 4**. Copy the following code into the file:


```python
import time , sys, math
from adc import ADC

__all__ = ["GroveMix8410Sensor"]

VRefer = 3.3
total = 0
Measuredvout = 0

class GroveMix8410:



    def __init__(self, channel):
        self.channel = channel
        self.adc = ADC()
    
    @property
    def Mix8410(self):
        value = self.adc.read(self.channel)
        if value != 0:
            voltage = value*3.3/1024.0
            Mix8410Value = voltage* 0.21 *100/ 2.0
            return Mix8410Value
        else:
            return 0

Grove = GroveMix8410

def main():
    if len(sys.argv) < 2:
        print('Usage: {} adc_channel'.format(sys.argv[0]))
        sys.exit(1)
 
    sensor = GroveMix8410(int(sys.argv[1]))
    print('Detecting 02 value...')
 
    while True:
        print('Mix8410 Value: {0}'.format(sensor.Mix8410))
        time.sleep(1)
 
if __name__ == '__main__':
    main()  

```

- **Step 5**. Use Ctrl+O to save and Ctrl+X to quit.
- **Step 6**. Run the following to execute:
```
python MIX8410.py 0
```

:::success
    If everything goes well, you will be able to see the following result.
:::   
```python

pi@raspberrypi:~/grove.py/grove$ python MIX8410.py 0

Detecting 02 value...
Mix8410 Value: 23.6419354839
Mix8410 Value: 23.9129032258
Mix8410 Value: 23.9467741935
Mix8410 Value: 23.9467741935
Mix8410 Value: 23.8451612903
Mix8410 Value: 23.9467741935
Mix8410 Value: 23.9467741935
Mix8410 Value: 23.9467741935
Mix8410 Value: 23.9806451613
Mix8410 Value: 23.9467741935
Mix8410 Value: 23.9467741935
Mix8410 Value: 23.9806451613
Mix8410 Value: 23.9467741935
Mix8410 Value: 23.9129032258
Mix8410 Value: 23.9129032258
Mix8410 Value: 23.9129032258
Mix8410 Value: 23.9467741935
Mix8410 Value: 23.9129032258


```





## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="http://files.seeedstudio.com/products/101990680/MIX8410v1.0_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>




## Resources

* [MIX8410 Datasheet](https://files.seeedstudio.com/products/101990680/MIX841datasheetV1.6.pdf)
* [Schematic in Eagle File](http://files.seeedstudio.com/products/101990680/MIX8410v1.0_SCH&PCB.zip)
* [Github Repository of this Document](https://github.com/SeeedDocument/Grove_Gas_Sensor_O2)
* [PDF SCH](https://files.seeedstudio.com/products/101990680/MIX841v1.0_SCH_200811.pdf)

## Projects

**LoRa IoTea**: An automatic information collection system applied to tea plantation. It is part of intelligent agricultural information collection.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed' width='350'></iframe>

**A Plant Box with Lighting and Raining** You never seen such a way to water you plant.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/team-seeed-ae/a-plant-box-with-lighting-and-raining-bfc59b/embed' width='350'></iframe>

## Tech Support
Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).

## Upgradable to Industrial Sensors
With the SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) and [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), you can easily turn the Grove into a LoRaWAN® sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust [industrial sensors](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN® network, built-in 19 Ah battery, and powerful support from APP make the [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>


