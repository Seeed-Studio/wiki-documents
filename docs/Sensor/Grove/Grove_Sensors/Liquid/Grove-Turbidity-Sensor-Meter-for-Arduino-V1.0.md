---
description: Grove - Turbidity Sensor Meter for Arduino V1.0
title: Grove - Turbidity Sensor Meter for Arduino V1.0
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Turbidity-Sensor-Meter-for-Arduino-V1.0
last_update:
  date: 1/6/2023
  author: shuxu hu
---


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/Grove-Turbidity-Sensor-wiki.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/Grove-Turbidity-Sensor-wiki.jpg" alt="pir" width={600} height="auto" /></p>

The Grove turbidity sensor can measure the turbidity of the water (the number of suspended particles).

 
The optical sensor of this module can measure the density of turbid water and the concentration of extraneous matter using the refraction of wavelength between photo transistor and diode. By using an optical transistor and optical diodes, an optical sensor measures the amount of light coming from the source of the light to the light receiver, in order to calculate turbidity of water.

 
The output mode can be selected by adjusting the switch on the board. Supports analog and digital output. The sensitivity can be adjusted by the on-board knob.


<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Turbidity-Sensor-p-4399.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Turbidity-Sensor-p-4399.html)

## Features

 - Low power consumption
 - Small size: 2.0cm x 4.0cm Grove module
 - Only 3 pins needed, save I/O resources
 - Easy to use: Grove connector, plug and play
 - Output mode optional, support analog output and digital output


:::tip

    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::



## Specification

|Parameter|Value/Range|
|---|---|
| Operating Voltage |	3.3V/5V DC |
| Output Interface  | Analog / Digital |
| Connector | 1 Grove / 1 Power interface |
| Size   | 20*40mm |


## Typical applications

- Measure the water pollution degree of washing machines such as dishwashers to determine the optimal washing time and rinsing times.
- Industrial site control.
- Environmental wastewater treatment.


## Hardware Overview


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/Grove-Turbidity-Sensor-pin.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/Grove-Turbidity-Sensor-pin.jpg" alt="pir" width={600} height="auto" /></p>
- **Digital to Analog Switch**

  - "D" is the digital output, the threshold of high and low level can be adjusted by on-board knob.
  - "A" is the analog output, the output value will decrease with the increase of liquid turbidity.




## Platforms Supported


| Arduino| Raspberry Pi| BeagleBone| Wio| LinkIt ONE|
|--------|-------------|-----------|----|-----------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" alt="pir" width={200} height="auto" /></p> |


:::caution  

    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::



## Getting Started


### Play With Arduino


:::note

    If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::



**Materials required**


| Seeeduino V4.2 | Grove - Turbidity Sensor | Base Shield |
|--------------|----------------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/Grove-Turbidity-Sensor.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Grove-Turbidity-Sensor-p-4399.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|


:::note


	**1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy. 
    
	**2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.
:::

#### Analog Output


##### Hardware Connection


- **Step 1.** The switch on the sensor selects **A**.

- **Step 1.** Connect Grove - Turbidity Sensor to port **A0** of Grove-Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/connect.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/connect.jpg" alt="pir" width={600} height="auto" /></p>

:::note   
     
    If we don't have Grove Base Shield, We also can directly connect Grove - Turbidity Sensor to Seeeduino as below.
:::




| Seeeduino     | Grove - Turbidity Sensor|
|---------------|-------------------------|
| 5V            | Red                     |
| GND           | Black                   |
| Not Conencted | White                   |
| A0            | Yellow                  |



##### Software


- **Step 1.** Copy the code below into Arduino IDE and upload. If you do not know how to upload the code, please check [how to upload code](https://wiki.seeedstudio.com/Upload_Code/).


```c
void setup() {

  Serial.begin(9600); //Baud rate: 9600
}

void loop() {
  int sensorValue = analogRead(A0);// read the input on analog pin 0:
  float voltage = sensorValue * (5.0 / 1024.0); // Convert the analog reading (which goes from 0 - 1023) to a voltage (0 - 5V):
  Serial.println(voltage); // print out the value you read:
  delay(500);
}

```


- **Step 2.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor** or tap the **Ctrl+Shift+M** key at the same time. Set the baud rate to **9600**.


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/result.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/result.png" alt="pir" width={600} height="auto" /></p>

- **Step 3.**  Now you can use this sensor, and the output will be like this:


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/serial-port.png) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/img/serial-port.png" alt="pir" width={600} height="auto" /></p>

#### Digital Output


##### Hardware Connection


- **Step 1.** The switch on the sensor selects **D**.

- **Step 1.** Connect Grove - Turbidity Sensor to port **D2** of Grove-Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.




:::note   
     
    If we don't have Grove Base Shield, We also can directly connect Grove - Turbidity Sensor to Seeeduino as below.
:::




| Seeeduino     | Grove - Turbidity Sensor|
|---------------|-------------------------|
| 5V            | Red                     |
| GND           | Black                   |
| Not Conencted | White                   |
| D2            | Yellow                  |



##### Software


- **Step 1.** Copy the code below into Arduino IDE and upload. If you do not know how to upload the code, please check [how to upload code](https://wiki.seeedstudio.com/Upload_Code/).


```c
int ledPin = 3;               
int sensor_in = 2;                 // Turbidity sensor on Digital Pin 2

void setup(){
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);      // Set ledPin as output mode
  pinMode(sensor_in, INPUT);       //Set Turbidity sensor pin to input mode
}

void loop(){
   int sensorValue = digitalRead(sensor_in);
   Serial.println(sensorValue);
   if(sensorValue==HIGH){       //Read sensor signal 
        digitalWrite(ledPin, HIGH);   // if sensor is LOW, then turn on
     }else{
        digitalWrite(ledPin, LOW);    // if sensor is HIGH, then turn off the led
     }
    delay(500);
}
```


- **Step 2.** We use digital output and raise or lower the trigger by adjusting the potentiometer to make the LED turn on and off.


## Schematic Online Viewer


<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/res/Grove-Turbidity-Sensor-v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241,241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}} />



## Resources


- **[ZIP]** [Schematic Diagram](https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/res/Grove-Turbidity-Sensor-v1.0.zip)

- **[PDF]** [LMV358 Datasheet](https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/res/LMV358-Datasheet.pdf)

- **[PDF]** [MPX5700AP Datasheet](https://files.seeedstudio.com/wiki/Grove-Turbidity-Sensor/res/Turbidity-Sensor-Datasheet.pdf)





## Tech Support


Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).


## Upgradable to Industrial Sensors
With the SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) and [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), you can easily turn the Grove into a LoRaWAN® sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust [industrial sensors](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN® network, built-in 19 Ah battery, and powerful support from APP make the [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>


