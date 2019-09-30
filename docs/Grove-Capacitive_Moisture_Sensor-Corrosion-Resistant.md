---
name: Grove - Capacitive Moisture Sensor (Corrosion Resistant)
category: Grove
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 101020614
tags:
---

![](https://github.com/SeeedDocument/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/raw/master/img/main.jpg)

The Grove - Capacitive Moisture Sensor (Corrosion Resistant) is a soil moisture sensor based on capacitance changes. Compared with resistive sensors, capacitive sensors do not require direct exposure of the metal electrodes, which can significantly reduce the erosion of the electrodes. Hence, we call it **Corrosion Resistant**.

It is important to note that this sensor can only qualitatively test the humidity of the soil and cannot measure quantitatively. Which means when the humidity of the soil rises, the value of the output decreases; conversely, when the humidity decreases, the output value becomes higher.


<p style=":center"><a href="https://www.seeedstudio.com/Grove-Capacitive-Moisture-Sensor-Corrosion-Resistant-p-2850.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Version

| Product Version  | Changes                                                                                               | Released Date |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - Capacitive Moisture Sensor (Corrosion Resistant)  | Initial                                                                                               | Sep 2018      |


## Feature 

- Capacitive Style
- Corrosion Resistant
- Built-in Amplifier


## Specification

|Item|Value|
|---|---|
|Operating Voltage|3.3V / 5V|
|Output Interface|Analog|
|Length|92.1mm|
|Width|23.5mm|
|Height|6.5mm|
|size|L: 40mm W: 20mm H: 13mm| 
|Weight|10.6g|
|Package size|L: 150mm W: 100mm H: 15mm|
|Gross Weight|19g|


## Typical Applications

- Soil moisture detection
- Automatic watering of plants



## Hardware Overview

### Pin Out

![](https://github.com/SeeedDocument/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/raw/master/img/pin_out.jpg)


!!!Attention
        The part of the sensor inserted into the soil cannot exceed the highest position line.


## Platforms Supported


| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |


!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's hardware or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.To do means not be supported now, may or may not be supported in the future.



## Getting Started


### Play With Arduino


#### Hardware

**Materials required**

| Seeeduino V4.2 | Base Shield | Grove - Capacitive Moisture Sensor  |
|--------------|-------------|-----------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/raw/master/img/thumbnail.jpg)|
|<a href="http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-Capacitive-Moisture-Sensor-Corrosion-Resistant-p-2850.html" target="_blank">Get One Now</a>|


!!!note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.


!!!important
    **1**. If the you uses Arduino UNO as the motherboard, it is recommended that use the DC power supply. Otherwise, the maximum ripple of VCC may exceed 100mV. If you use Seeeduino V4.2 as the motherboard, you do not need to connect DC power.

    **2**. Hot swap is not supported.



- **Step 1.** Connect the Grove - Capacitive Moisture Sensor to port **A0** of Grove-Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Insert the Grove - Capacitive Moisture Sensor into the soil to be tested.

!!!Attention
        The part of the sensor inserted into the soil cannot exceed this white line.

![](https://github.com/SeeedDocument/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/raw/master/img/line.jpg)


- **Step 4.** Connect Seeeduino to PC via a USB cable.


![](https://github.com/SeeedDocument/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/raw/master/img/connect.jpg)



!!!Note
        If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.


| Seeeduino      |  Grove Cable       | Grove - Capacitive Moisture Sensor |
|--------------- |--------------------|-----|
| GND            | Black              | GND |
| 5V or 3.3V     | Red                | VCC |
|Not connection           | White              |NC |
|A0           | Yellow             | SIG|



#### Software

!!!Attention
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](http://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.



**Step 1.** Copy the code below, and download it to your arduino. If you do not know how to upload the code, please check [How to upload code](http://wiki.seeedstudio.com/Upload_Code/).

```C++
/*
  AnalogReadSerial

  Reads an analog input on pin 0, prints the result to the Serial Monitor.
  Graphical representation is available using Serial Plotter (Tools > Serial Plotter menu).
  Attach the center pin of a potentiometer to pin A0, and the outside pins to +5V and ground.

  This example code is in the public domain.

  http://www.arduino.cc/en/Tutorial/AnalogReadSerial
*/

// the setup routine runs once when you press reset:
void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
}

// the loop routine runs over and over again forever:
void loop() {
  // read the input on analog pin 0:
  int sensorValue = analogRead(A0);
  // print out the value you read:
  Serial.println(sensorValue);
  delay(100);        // delay in between reads for stability
}
```


- **Step 2.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. Set the baud rate to **9600**.


!!!Success
        If every thing goes well, when you open the Serial Monitor it may show as below:


```C++
678
663
631
615
615
624
616
618
620
616
614
614
610
614
614
616
615
612
605
```

!!!Attention
        Due to individual differences in components, different module measurements in the same environment may vary.


## Play with Raspberry Pi

If you want to use this module with Raspberry Pi, you may need to use any of the following hat:

- [4-Channel 16-Bit ADC for Raspberry Pi(ADS1115)](https://www.seeedstudio.com/4-Channel-16-Bit-ADC-for-Raspberry-Pi-ADS1115.html)
- [8-Channel 12-Bit ADC for Raspberry Pi (STM32F030)](https://www.seeedstudio.com/8-Channel-12-Bit-ADC-for-Raspberry-Pi(STM32F030).html)
- [Grove Base Hat for Raspberry Pi](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)
- [Grove Base Hat for Raspberry Pi Zero](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-Zero-p-3187.html)

And you can find the demo in the wiki of those hats.


## Schematic Online Viewer


<div class="altium-ecad-viewer" data-project-src="https://github.com/SeeedDocument/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/raw/master/res/Grove-Capacitive%20Moisture%20Sensor%20(Corrosion%20Resistant).zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>


## Resources

- **[Zip]** [Grove - Capacitive Moisture Sensor (Corrosion Resistant) Eagle Files](https://github.com/SeeedDocument/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/raw/master/res/Grove-Capacitive%20Moisture%20Sensor%20(Corrosion%20Resistant).zip)

- **[PDF]** [NE555DR Datasheet](https://github.com/SeeedDocument/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/raw/master/res/NE555DR.pdf)

- **[PDF]** [PDF Format Wiki](https://github.com/SeeedDocument/Grove-Capacitive_Moisture_Sensor_Corrosion_Resistant/raw/master/res/Grove-Capacitive_Moisture_Sensor-Corrosion-Resistant.pdf)



## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/)<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>