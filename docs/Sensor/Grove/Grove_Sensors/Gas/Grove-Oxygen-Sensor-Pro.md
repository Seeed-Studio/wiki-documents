---
description: Grove - Oxygen Sensor Pro(GGC2330-O2)
title: Grove - Oxygen Sensor Pro(GGC2330-O2)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Oxygen-Sensor-Pro
last_update:
  date: 1/4/2023
  author: shuxu hu
---
<!-- tags: io_3v3, io_5v, grove_i2c, grove_analog, grove_digital, grove_uart, plat_duino, plat_bbg, plat_pi, plat_wio, plat_linkit -->

<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/img/IMG_9621.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/img/IMG_9621.png" alt="pir" width={600} height="auto" /></p>


Grove - Oxygen Sensor Pro(GGC2330-O2) is a kind of sensor to test the oxygen concentration in air, which is based on the principle of the electrochemical cell to the original work.When it starts to work, it will produce a current proportional to the concentration of oxygen, then you can determine the concentration of oxygen by measuring the Current size.

Grove - Oxygen Sensor Pro(GGC2330-O2) is an enhanced version of Grove - Oxygen Sensor(GG2020-O2), Compared to the Grove - Oxygen Sensor(GG2020-O2), It has a built-in temperature sensor to make temperature compensation, which can correct the measurement error caused by the temperature difference and make the measurement more accurate.On top of that, it is equipped with a high-performance microprocessor, which allows it to have digital output and analog voltage output capabilities at the same time, making the sensor easier to use and calibrate and shorten the development period.

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Oxygen-Sensor-Pro-Pre-calibration-p-4896.html)

:::tip
    We've released the [Seeed Gas Sensor Selection Guide](https://wiki.seeedstudio.com/Sensor_gas/), it will help you choose the gas sensor that best suits your needs.
:::
## Feature

* Pre-calibration(With build-in MCU and temperature sensor)
* High precision and resolution
* Long life, low power consumption
* Strong anti-interference ability
* Good stability
* UART signal output

:::tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::


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

:::note
    The aging time of power-on is not less than 5min; 
    Avoid long-term contact with organic volatile solvents; 
    The use or storage environment cannot be an acid-base environment.
:::





## Applications
* Portable gas detector
* Fixed gas alarm and detector
  

## Platforms Supported

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------| -->
<!-- | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

## Getting Started

:::note
    This chapter is based on Win10 and Arduino IDE 1.7.9
:::
This new Grove - Oxygen Sensor Pro(GGC2330-O2) usage method is is not used in the same way as the Grove - Oxygen Sensor(GG2020-O2) [GG2020-O2](https://wiki.seeedstudio.com/Grove-Gas_Sensor-O2-MIX8410/).

Here we will show you how this Grove - Oxygen Sensor Pro(GGC2330-O2) works via a simple demo. First of all, you need to prepare the below stuffs:

| Seeeduino Cortex-M0+ | Grove - Oxygen Sensor Pro(GGC2330-O2) | Base Shield |
|--------------|----------------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Seeeduino-Cortex-M0-/img/102010248-wiki210x158.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/img/Grove_Oxygen_Sensor_Pro_Preview-07-210x157.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={500} height="auto" /></p>|
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Oxygen-Sensor-Pro-Pre-calibration-p-4896.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Universal-4-Pin-20cm-Unbuckled-Cable-%285-PCs-Pack%29-p-749.html)|



### Connection 

Thanks to the benefit of Grove series modules, you don't need to make soldering or bread board, what you need to do is connect the modules to the right port of Base Shield. For this demo, we have only one Grove module. 

* Grove - Oxygen Sensor Pro(GGC2330-O2) is an analog input module, we connect it to **UART** in this demo.

<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/img/IMG_9626.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/img/IMG_9626.jpg" alt="pir" width={600} height="auto" /></p>



### Upload the code to Arduino

Copy the below code to Arduino IDE.


```
void setup() {
  Serial.begin(9600);
  Serial2.begin(9600);
}
void loop() {
  if (Serial2.available()){
    uint8_t begin_code = Serial2.read();
    delay(10);
    uint8_t state_code = Serial2.read();
    delay(10);
    uint8_t high_code = Serial2.read();
    delay(10);
    uint8_t low_code = Serial2.read();
    delay(10);
    uint8_t check_code = Serial2.read();
    delay(10);
    uint8_t checkk_code = Serial2.read();
    delay(10);
    uint8_t checkkk_code = Serial2.read();
    delay(10);
    uint8_t checkkkk_code = Serial2.read();
    delay(10);
    uint8_t checkkkkk_code = Serial2.read();
    delay(10);

    if(begin_code == 255 && state_code == 134){
 
      float O2_val = ((high_code * 256) + low_code) * 0.1 ;
      Serial.print("O2: ");
      Serial.print(O2_val);
      Serial.println(" %");
      }
    }
    while(Serial2.read()>=0);    //clear buffer
}
```

Then choose the right Board and COM port, and then click on the Upload button, this process take few seconds. 

### Get data

Open serial monitor of your Arduino IDE, and you will get the data now.

:::warning
    It need about 20~30 minutes to preheat the sensor, or you will get a larger value.
 :::   
<!-- ![enter image description here](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/data.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/data.png" alt="pir" width={600} height="auto" /></p>


## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="http://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/res/Grove-OxygenSensorPro1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Resources

* [Grove - Oxygen Sensor Pro Datasheet](https://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/res/GGC2330-O2-1.0.pdf)
* [Schematic in Eagle File](http://files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/res/Grove-OxygenSensorPro1.0.zip)
* [Github Repository of this Document](https://github.com/SeeedDocument/Grove_Gas_Sensor_O2)
* [PDF SCH](#files.seeedstudio.com/wiki/Grove_Oxygen_Sensor_Pro/res/GroveOxygenSensorProv1.0sch.pdf)

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

