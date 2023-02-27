---
title: Water Flow Sensor
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Water-Flow-Sensor/
slug: /Water-Flow-Sensor
last_update:
  date: 02/03/2022
  author: gunengyu
---

<div align="center">
  <figure>
    <img src="https://static-cdn.seeedstudio.site/media/catalog/product/cache/ab187aaa5f626ad16c8031644cd2de5b/h/t/httpsstatics3.seeedstudio.comseeedfile2017-06bazaar483771_1.jpg" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
    <figcaption><b /><i /></figcaption>
  </figure>
</div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Water-Flow-Sensor-YF-B1-p-2878.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

Water flow sensor consists of a copper body, a water rotor, and a hall-effect sensor. When water flows through the rotor, rotor rolls, its speed changes with different rate of flow. And the hall-effect sensor outputs the corresponding pulse signal. This one is suitable to detect flow in water dispenser or coffee machine. **More importantly, the life of the copper one is longer than that of plastic body.**

## Feature

- Compact, Easy to Install
- High Sealing Performance
- High Quality Hall Effect Sensor
- RoHS Compliant

## Specification

|Parameters|Value|
|---|---|
|Dimensions |0mm x0mm x0mm|
|Weight| G.W 79g|
|Battery |Exclude|
|Mini. Wokring Voltage| DC 4.5V|
|Max. Working Current| 15mA (DC 5V)|
|Working Voltage |DC 5V~15V|
|Interface Dimensions| G1/2Inch|
|Flow Rate Range |1~25L/min|
|Frequency |F=(11*Q)Q=L/MIN±3%|
|Error Range |(1~30L\MIN) ±3%|
|Load Capacity |≤10mA (DC 5V)|
|Operating Temperature| 0 ~ 80℃|
|Liquid Temperature |≤120℃|
|Operating Humidity |35%～90%RH|
|Water Pressure| ≤1.75MPa|
|Material Description |H57Copper+POM|
|Storage Temperature |-25～+ 80℃|
|Storage Humidity |25%～95%RH|
|Output Pulse High Level |>DC 4.7V (Input Voltage DC5V)|
|Output Pulse Low Level |<DC 0.5V (Input Voltage DC5V)|
|Output Pulse Duty Cycle| 50%±10%|

## What is a water flow sensor (meter)

We use a water flow sensor to measure the water flow rate. The water flow rate is the volume of fluid that passes per unit time. People often use water flow sensor for automatic water heater control, DIY coffee machines, water vending machines, etc. There are a variety of flow sensors of different principles, but for makers using Arduino or Raspberry Pi, the most common flow sensor is based on a Hall device. For example, the most classic water flow sensor [YF-S402](https://www.seeedstudio.com/M11-1-25-Water-Flow-Sensor-p-1345.html) and [YF-S201](https://www.seeedstudio.com/G1-2-Water-Flow-Sensor-p-635.html) rely on Hall sensors.

## How does the water flow sensor work

<div align="center">
<figure>
<img src="https://blog.seeedstudio.com/wp-content/uploads/2020/05/DSC03966-1030x686.jpg" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
<figcaption><b>Figure 1</b>. <i>All components of YF-402</i></figcaption>
</figure>
</div>

<div align="center">
<figure>
<img src="https://blog.seeedstudio.com/wp-content/uploads/2020/05/how-does-water-flow-sensor-work-1030x599.jpg" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
<figcaption><b>Figure 2</b>. <i>Water flow sensor work principle</i></figcaption>
</figure>
</div>

It’s quite simple inside. The main components are the Hall Effect sensor, turbine wheel, and magnet. The water flows in through the inlet and out through the outlet. The water current drove the wheel to turn, and the magnet on the wheel turned with it. Magnetic field rotation triggers the Hall sensor, which outputs high and low level square waves ( pulse ).

<div align="center">
<figure>
<img src="https://blog.seeedstudio.com/wp-content/uploads/2020/05/Water-flow-sensor-principle-1.gif" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
<figcaption><b>Figure 3</b>. <i>Water flow sensor working principle</i></figcaption>
</figure>
</div>

For every round of the wheel, the volume of water flowing through is a certain amount, as is the number of square waves output. Therefore, we can calculate the flow of water by counting the number of square waves ( pulse ).

## Platform Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Getting Started

#### Materials Requied

|Seeeduino Board |Grove Base Shield|Water Flow Sensor|
|--------------|--------------|--------------|
|![enter image description here](https://files.seeedstudio.com/wiki/SeeeduinoV4/images/Seeeduino_s.png)| ![enter image description here](https://files.seeedstudio.com/wiki/Base_Shield_V2/img/base_shield.png)| ![enter image description here](https://files.seeedstudio.com/wiki/Water_Flow_Sensor/IMG/Water-Flow-Sensor.png)
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2.html)|[Get ONE Now](https://www.seeedstudio.com/catalogsearch/result/?q=Water+flow+sensor)|

#### Hardware Connection

For the YF serial, there are 3 wires:

- Red for Vcc
- Black for GND
- Yellow for pulse output.

For the Atmega 328-based board like [Seeeduino V4.2](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html). There are two digital pins that can be used as an interrupt. Digital pin 2 for **interrupt 0**, and digital pin 3 for ***interrupt 1**. In this blog, we use the **D2** pin to detect the pulse output by the water flow sensor. If you are using Seeeduino + [Grove base shield](https://www.seeedstudio.com/Base-Shield-V2.html), just plug the water flow sensor to the D2 connecter. If you are using other Arduino board please use jumper cables to connect to the right pin.

<div align="center">
<figure>
<img src="https://blog.seeedstudio.com/wp-content/uploads/2020/05/image-34.png" alt="Grove-Doppler-Radar'' OUTCOME" title="demo" />
<figcaption><b>Figure 4</b>. <i>Water flow sensor connect with Arduino</i></figcaption>
</figure>
</div>

:::tip
    Please plug the USB cable, Water Flow Sensor Interface into Seeeduino board Interface gently, otherwise you may damage the port.
:::

#### Software

Of course, you can use digitalread() in the **LOOP** function to read the output of the water flow sensor. Count number plus one whenever a high level is read. However, this approach is not real-time, and the program requires a certain waiting time for each execution, during which new pulses are not detected. For such real-time demanding applications, we typically use interrupt. Whenever the rising edge of the pulse is detected, an interruption is triggered, counting plus one.

<div align="center">
<figure>
<img src="https://blog.seeedstudio.com/wp-content/uploads/2020/05/image-33.png" alt="Water-Flow-Sensor'' OUTCOME" title="demo" />
<figcaption><b></b><i></i></figcaption>
</figure>
</div>

For more detail about **interrupt** please check [attachinterrupt](https://www.arduino.cc/reference/en/language/functions/external-interrupts/attachinterrupt/).

:::caution
If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

- **Step 1.** Plug Grove Base board with the Water Flow Sensor into Seeeduino board and connect Seeeduino board to PC via a USB cable.

- **Step 2.** Then open your Arduino IDE and copy the code below. At last, download the code into Arduino.

:::note
The code here **WORKS** for the most classic YF – S201, YF - S402 and other Water Flow Sensors at Seeed, so does the working principle of water flow sensors.
:::

#### Software Code

```C++
/*
YF‐ S201 Water Flow Sensor
Water Flow Sensor output processed to read in litres/hour
Adaptation Courtesy: www.hobbytronics.co.uk
*/

volatile int flow_frequency; // Measures flow sensor pulsesunsigned 

int l_hour; // Calculated litres/hour
unsigned char flowsensor = 2; // Sensor Input
unsigned long currentTime;
unsigned long cloopTime;

void flow () // Interrupt function

{
   flow_frequency++;
}

   void setup()
 {
   pinMode(flowsensor, INPUT);
   digitalWrite(flowsensor, HIGH); // Optional Internal Pull-Up
   Serial.begin(9600);
   attachInterrupt(0, flow, RISING); // Setup Interrupt
   sei(); // Enable interrupts
   currentTime = millis();
   cloopTime = currentTime;
}

   void loop ()
{
   currentTime = millis();// Every second, calculate and print litres/hour
   if(currentTime >= (cloopTime + 1000))
   {
      cloopTime = currentTime; // Updates cloopTime
      // Pulse frequency (Hz) = 7.5Q, Q is flow rate in L/min.
      l_hour = (flow_frequency * 60 / 7.5); // (Pulse frequency x 60 min) / 7.5Q = flowrate in L/hour
      flow_frequency = 0; // Reset Counter
      Serial.print(l_hour, DEC); // Print litres/hour
      Serial.println(" L/hour");
   }
}
```

:::tipsuccess
If everything goes well, open the serial monitor tool and set the baud rate to 9600. as the water through, the flow value will print to the appropriate window.
:::

## The Formula for the calculation of water flow sensor

In the code section, we used the following formula, so how did this formula come about?

```C++
l_hour = (flow_frequency * 60 / 7.5)
```

Earlier we mentioned that with each revolution of the wheel, the volume of fluid flowing through is certain. At the same time, the number of pulses generated per revolution of the wheel is also a certain amount. Thus, we can establish an equation between the number of pulses and the water flow.

For the YF-S201, every liter of water that flows, the Hall Sensor outputs 450 pulses. Let’s do little math here. 450 pulse for 1 liter, so each pulse means 1/450 liter water flowing through. We take the total volume of liquid flowing through the water flow sensor at a certain time **t**(unit s) as **V_total**(unit L), and the total number of pulses detected as **N**. Then we get:

```C++
V_total(L) = N* 1/450(L) 
```

Also, the total volume of fluid flowing through the water flow sensor is equal to the **water flow rate(Q - unit L/s)** multiplied by time **t**(unit s) .

```C++
V_total(L) = Q(L/s)*t(s) 
```

So we get:

```C++
N* 1/450 = Q(L/s)*t(s) 
N/t = 450 * Q(L/s) 
```

**N/t** happen to be frequency **f**, so:

```C++
f = 450*Q(L/s); 
Q(L/s) = f/450; 
Q(L/min) = f*60/450 = f/7.5 
Q(L/hour) = f*60*60/450 = f*60 /7.5 
```

For the YF – S402, every liter of water that flows, the Hall Sensor outputs 4380 pulses. So, the formula should be:

```C++
f = 4380*Q(L/s); 
Q(L/s) = f/4380; 
Q(L/min) = f*60/4380 = f/73 
Q(L/hour) = f*60*60/4380 = f*60 /73 
```

## Water Flow Sensors at Seeed

:::tip
There are numerous Water Flow Sensors on sale at Seeed, including [YF - 402](https://www.seeedstudio.com/M11-1-25-Water-Flow-Sensor-p-1345.html) and [YF - S201](https://www.seeedstudio.com/G1-2-Water-Flow-Sensor-p-635.html). Besides, we offer a variety of Water Flow Sensors with different dimensions, detecting ranges, material and etc as following:
:::

|   Type   | Dimensions(DN) | Working Voltage | Flow Rate Range | Length |    Male & Female   | Length of Thread | Material |
|:--------:|:--------------:|:---------------:|:---------------:|:------:|:------------------:|:----------------:|:--------:|
|   [YF-B1](https://www.seeedstudio.com/Water-Flow-Sensor-YF-B1-p-2878.html)  |      DN15      |    5V~15V(DC)   |    1~25L/min    |  44mm  |     Double Male    |       10mm       |  Copper  |
|   [YF-B2](https://www.seeedstudio.com/Water-Flow-Sensor-YF-B2-p-2879.html)  |      DN15      |    5V~15V(DC)   |    1~25L/min    |  50mm  | Male in Female out |       10mm       |  Copper  |
|   [YF-B3](https://www.seeedstudio.com/Water-Flow-Sensor-YF-B3-p-2880.html)  |      DN15      |    5V~15V(DC)   |    1~25L/min    |  66mm  |     Double Male    |       18mm       |  Copper  |
|   [YF-B4](https://www.seeedstudio.com/Water-Flow-Sensor-YF-B4-p-2881.html)  |      DN15      |    5V~15V(DC)   |    1~25L/min    |  66mm  | Male in Female out |       10mm       |  Copper  |
|   [YF-B5](https://www.seeedstudio.com/Water-Flow-Sensor-YF-B5-p-2882.html)  |      DN20      |    5V~15V(DC)   |    1~30L/min    |  50mm  |     Double Male    |       10mm       |  Copper  |
|   [YF-B6](https://www.seeedstudio.com/Water-Flow-Sensor-YF-B6-p-2883.html)  |      DN20      |    5V~15V(DC)   |    1~30L/min    |  60mm  |     Double Male    |       11mm       |  Copper  |
|   [YF-B7](https://www.seeedstudio.com/Water-Flow-Sensor-YF-B7-p-2884.html)  |      DN15      |    5V~15V(DC)   |    1~25L/min    |  66mm  |     Double Male    |       10mm       |  Copper  |
|   [G1&2](https://www.seeedstudio.com/G1-2-Water-Flow-Sensor-Enclosure-p-1915.html)   |      DN15      |    5V~24V(DC)   |    1~30L/min    |    -   |     Double Male    |         -        |  Plastic |
|   [G3&4](https://www.seeedstudio.com/G3-4-Water-Flow-Sensor-p-1083.html)   |      DN20      |    5V~24V(DC)   |    1~60L/min    |    -   |     Double Male    |         -        |  Plastic |
|   [G1&2](https://www.seeedstudio.com/G1-2-Water-Flow-Sensor-p-635.html)   |      DN15      |    5V~24V(DC)   |    1~30L/min    |  60mm  |     Double Male    |       13mm       |  Plastic |
|   [G1&8](https://www.seeedstudio.com/G1-8-Water-Flow-Sensor-p-1346.html)   |        -       |    5V~24V(DC)   |    0.3~6L/min   |    -   |          -         |         -        |  Plastic |
| [M11*1.25](https://www.seeedstudio.com/M11-1-25-Water-Flow-Sensor-p-1345.html) |        -       |    5V~24V(DC)   |    0.3~6L/min   |    -   |          -         |         -        |  Plastic |

## Tech Support

 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/).
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
