---
name: Grove - Oxygen Sensor Pro(GGC2330-O2)
category: Sensor
bzurl:    https://www.seeedstudio.com/Grove-Oxygen-Sensor-MIX8410-p-4697.html
oldwikiname:
prodimagename: 
surveyurl: https://www.research.net/r/Gas_Sensor_O2
sku: 101990680
tags: plat_duino, grove_analog, io_3v3, io_5v
---
<!-- tags: io_3v3, io_5v, grove_i2c, grove_analog, grove_digital, grove_uart, plat_duino, plat_bbg, plat_pi, plat_wio, plat_linkit -->

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro_MIX2801/img/IMG_9621.png)

Grove - Oxygen Sensor Pro(GGC2330-O2) is a kind of sensor to test the oxygen concentration in air, which is based on the principle of the electrochemical cell to the original work.When it starts to work, it will produce a current proportional to the concentration of oxygen, then you can determine the concentration of oxygen by measuring the Current size.

Grove - Oxygen Sensor Pro(GGC2330-O2) is an enhanced version of Grove - Oxygen Sensor(GG2020-O2), Compared to the Grove - Oxygen Sensor(GG2020-O2), It has a built-in temperature sensor to make temperature compensation, which can correct the measurement error caused by the temperature difference and make the measurement more accurate.On top of that, it is equipped with a high-performance microprocessor, which allows it to have digital output and analog voltage output capabilities at the same time, making the sensor easier to use and calibrate and shorten the development period.

[![](https://files.seeedstudio.com/wiki/BeagleBone_Green_Wireless/images/get_one_now.png)](https://www.seeedstudio.com/Grove-Oxygen-Sensor-MIX8410-p-4697.html)

!!!Tip
    We've released the [Seeed Gas Sensor Selection Guide](https://wiki.seeedstudio.com/Sensor_gas/), it will help you choose the gas sensor that best suits your needs.

## Feature

* Pre-calibration(With build-in MCU and temperature sensor)
* High precision and resolution
* Long life, low power consumption
* Strong anti-interference ability
* Good stability
* UART and analog voltage signal output

!!!Tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)



## Specification

|Items  | Parameter |
|-------|---------------|
|Target Gas | O2 |
|Resolution| 0.1%VOL |
|Measurement Range  | 0-25%VOL |
|ReOperating Voltage  | DC 5±0.1V DC |
|Operating Current | ＜ 10 mA |
|Output| Output UART(TTL electrical Level, 3V)Analog voltage(refer table 2 for sensor original amplifying signal) |
|Operating Conditions| -20～25℃/15～90%RH(no condensation) |
|Storage Conditions|  -20～50℃/15～90%RH(no condensation) |
|Size | ø23.5mm*24.5mm |
|Life Expectancy    | 2 years(in air)|

!!!Note
    The aging time of power-on is not less than 5min; 
    Avoid long-term contact with organic volatile solvents; 
    The use or storage environment cannot be an acid-base environment.






## Applications
* Portable gas detector
* Fixed gas alarm and detector
  

## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.


## Getting Started

!!!Note
    This chapter is based on Win10 and Arduino IDE 1.7.9

This new Grove - Oxygen Sensor Pro(GGC2330-O2) usage method is is not used in the same way as the Grove - Oxygen Sensor(GG2020-O2) [GG2020-O2](https://wiki.seeedstudio.com/Grove-Gas_Sensor-O2-MIX8410/).


Here we will show you how this Grove - Oxygen Sensor Pro(GGC2330-O2) works via a simple demo. First of all, you need to prepare the below stuffs:

| Seeeduino V4 | Grove - Oxygen Sensor Pro(GGC2330-O2) | Base Shield |
|--------------|----------------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro_MIX2801/img/Grove_Oxygen_Sensor_Pro_Preview-07-210x157.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/grove-gas-sensoro2-p-1541.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Universal-4-Pin-20cm-Unbuckled-Cable-%285-PCs-Pack%29-p-749.html)|



### Connection 

Thanks to the benefit of Grove series modules, you don't need to make soldering or bread board, what you need to do is connect the modules to the right port of Base Shield. For this demo, we have only one Grove module. 

* Grove - Oxygen Sensor Pro(GGC2330-O2) is an analog input module, we connect it to **A0** at this demo

![enter image description here](https://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro_MIX2801/img/IMG_9620.png)


### Upload the code to Arduino

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
    Serial.println("Grove_Oxygen_Sensor_Pro(GGC2330-O2) Test Code...");
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

### Get data

Open serial monitor of your Arduino IDE, and you will get the data now. 

!!!Warning
    It need about 20~30 minutes to preheat the sensor, or you will get a larger value.
    
![enter image description here](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/data.png)

## Schematic Online Viewer

<div class="altium-ecad-viewer" data-project-src="http:///files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro_MIX2801/res/Grove-OxygenSensorProv1.0.zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>

## Resources

* [Grove - Oxygen Sensor Pro Datasheet](https://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro_MIX2801/res/GGC2330-O2.pdf)
* [Schematic in Eagle File](http://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro_MIX2801/res/Grove-OxygenSensorProv1.0.zip)
* [Github Repository of this Document](https://github.com/SeeedDocument/Grove_Gas_Sensor_O2)
* [PDF SCH](files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro_MIX2801/res/GroveOxygenSensorProv1.0sch.pdf)

## Projects

**LoRa IoTea**: An automatic information collection system applied to tea plantation. It is part of intelligent agricultural information collection.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed' width='350'></iframe>

**A Plant Box with Lighting and Raining** You never seen such a way to water you plant.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/team-seeed-ae/a-plant-box-with-lighting-and-raining-bfc59b/embed' width='350'></iframe>

## Tech Support
Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>