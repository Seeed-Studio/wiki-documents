---
name: Grove - Gas Sensor(O₂)
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Gas-Sensor(O2)-p-1541.html
oldwikiname: Grove_-_Gas_Sensor(O₂)
prodimagename: cover.jpg
surveyurl: https://www.research.net/r/Gas_Sensor_O2
sku: 101020002
tags: plat_duino, grove_analog, io_3v3, io_5v
---
<!-- tags: io_3v3, io_5v, grove_i2c, grove_analog, grove_digital, grove_uart, plat_duino, plat_bbg, plat_pi, plat_wio, plat_linkit -->

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Gas_Sensor_O2/master/images/cover.jpg)

Grove-Gas Sensor (O2) is a kind of sensor to test the oxygen concentration in air, which is based on the principle of the electrochemical cell to the original work. You can know clearly the current oxygen concentration when you output voltage values proportional to the concentration of oxygen and refer to the oxygen concentration linear characteristic graph. It's very suitable for detecting oxygen concentration in the environment protection. Grove - Gas Sensor(O2) is an organic reaction module, it can provide a little current while putting it in the air, we don't need to provide an external power to it, and output voltage will change as time current changes. 


<iframe width="800" height="450" src="https://www.youtube.com/embed/4df5kaaKa6I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[![](https://github.com/SeeedDocument/BeagleBone_Green_Wireless/blob/master/images/get_one_now.png?raw=true)](http://www.seeedstudio.com/grove-gas-sensoro2-p-1541.html)

!!!Tip
    We've released the [Seeed Gas Sensor Selection Guide](http://wiki.seeedstudio.com/Seeed_Gas_Sensor_Selection_Guide/), it will help you choose the gas sensor that best suits your needs.

##Feature

* High-precision
* High sensitivity
* Wide linearity range
* Strong anti-interference ability
* Extraordinary reliability

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)

##Specification

|Items	| Parameter |
|-------|---------------|
|Measurement Range	| 0-25% |
| Detect Life	| two years |
|Sensitivity	| 0.05~0.15 mA(in air) |
|Temperature Range |	-20 oC~50 oC |
|Preheat Time	| 20 minutes|
|Input voltage|3.3V / 5V|


## Hardware

**Voltage Convertor**

![](https://github.com/SeeedDocument/Grove_Gas_Sensor_O2/raw/master/images/Converter.png)

The XC6206332MR converts 3.3v/5v input to 3.3v.

**ME2-O2 current source**

![](https://github.com/SeeedDocument/Grove_Gas_Sensor_O2/raw/master/images/ME2-O2.png)

The ME2-O2 is current source. The voltage of the label #3 point is R7 * Current(ME2-O2).


**Amplifer**

![](https://github.com/SeeedDocument/Grove_Gas_Sensor_O2/raw/master/images/Amplifer.png)

The gain of the amplifer is 121, SIGA voltage is 121 times of label #3 point voltage. 

![](https://github.com/SeeedDocument/Grove_Gas_Sensor_O2/raw/master/images/concentration_current.png)

Here is the correlation between ME2-O2 output current and concentration of O2. The current of 20% concentration O2 is around 120uA. So the Grove SIGA voltage @ 20% concentration = R7 * Current(ME2-O2) * 121 = 100 * 120uA * 121 = 1.452V. 

!!!warning
    The current ranage of ME2-O2 is 80uA~160uA due to individual difference. So the sensor ouput voltage also will different. Please explosure the sensor to fresh air and get reading of output voltage as reference at beginning. You can refer to [this example](https://github.com/SeeedDocument/Grove_Gas_Sensor_O2/raw/master/resources/Read_O2_value.zip) to get the calibration at beginning and then read the sensor values.   

## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.


##Getting Started

!!!Note
    This chapter is based on Win10 and Arduino IDE 1.6.9

This an easy-to-use module, what you need to do is connect the signal pin (the YELLOW pin of Grove cable) to the ADC input of your controller. If there's no internal ADC in your controller, [Grove - I2C ADC](http://www.seeedstudio.com/Grove-I2C-ADC-p-1580.html) is recommend. 

Here we will show you how this Grove - Gas Sensor(O2) works via a simple demo. First of all, you need to prepare the below stuffs:

| Seeeduino V4 | Grove - Gas Sensor(O2) | Base Shield |
|--------------|----------------------|-----------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Gas_Sensor_O2/master/images/gas_sensor_210.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|
|[Get ONE Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](http://www.seeedstudio.com/grove-gas-sensoro2-p-1541.html)|[Get ONE Now](http://www.seeedstudio.com/Grove-Universal-4-Pin-20cm-Unbuckled-Cable-%285-PCs-Pack%29-p-749.html)|



###Connection 

Thanks to the benefit of Grove series modules, you don't need to make soldering or bread board, what you need to do is connect the modules to the right port of Base Shield. For this demo, we have only one Grove module. 

* Grove - Sound Sensor is an analog output module, we connect it to **A0** at this demo

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Gas_Sensor_O2/master/images/connection.jpeg)


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
    Serial.println("Grove - Gas Sensor Test Code...");
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

!!!Warning
    It need about 20~30 minutes to preheat the sensor, or you will get a larger value.
    
![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Gas_Sensor_O2/master/images/data.png)






## Resources

* [ME2-O2 Datasheet](https://github.com/SeeedDocument/Grove_Gas_Sensor_O2/raw/master/resources/ME2-O2-D20%200-25%25%20Manual%20%28ver1.2%29.pdf)
* [Schematic in Eagle File](https://github.com/SeeedDocument/Grove_Gas_Sensor_O2/raw/master/resources/Schematics_O2.zip)
* [Github Repository of this Document](https://github.com/SeeedDocument/Grove_Gas_Sensor_O2)


## Projects

**LoRa IoTea**: An automatic information collection system applied to tea plantation. It is part of intelligent agricultural information collection.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed' width='350'></iframe>

**A Plant Box with Lighting and Raining** You never seen such a way to water you plant.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/team-seeed-ae/a-plant-box-with-lighting-and-raining-bfc59b/embed' width='350'></iframe>

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>