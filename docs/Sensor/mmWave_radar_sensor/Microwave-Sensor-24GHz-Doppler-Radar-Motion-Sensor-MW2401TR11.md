---
description: Microwave Sensor - 24GHz Doppler Radar Motion Sensor - MW2401TR11
title: Microwave Sensor - 24GHz Doppler Radar Motion Sensor - MW2401TR11
keywords:
- mmWave_radar_sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Microwave-Sensor-24GHz-Doppler-Radar-Motion-Sensor-MW2401TR11
last_update:
  date: 1/12/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/MW2401TR11/img/102110464_Preview-07.png)

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Microwave-Sensor-24GHz-Doppler-Radar-Motion-Sensor-MW2401TR11-p-4690.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border="0" /></a></p>

**MW2401TR11** is a **24GHz** human motion microwave sensor module product with high integration and a high intelligent algorithm, it equipped with the high-performance transceiver. The antenna not only has good directivity, but can also adjust the coverage area through software settings according to different application scenarios, and filter out interference through smart algorithms, Also it is able to effectively identify the subtle movement of objects.

## Features

- Recognize people tiny movement sensitively
- **24Ghz** Microwave module can high effectively recognize object state
- Support original signal and digital high level or low level signal output
- sense of Distance and sensitive are support to adjustable (Maximum: 20 meter)
- minisize antenna with **170 °** azimuth angle detection function
- There are reserve I/O port and support to communicate UART port
- FCC/CE/RS authentication test standards

## Specification  

<!-- <style type="text/css">
.tg  {border-collapse:"collapse";border-spacing:"0";}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-llyw{background-color:#c0c0c0;border-color:inherit;text-align:left;vertical-align:top}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style> -->

<table className="tg">
  <thead>
    <tr>
      <th className="tg-llyw"><span style={{fontWeight: 'bold'}}>item</span></th>
      <th className="tg-llyw"><span style={{fontWeight: 'bold'}}>Value</span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="tg-0pky">Power supply</td>
      <td className="tg-0pky"> 5 - 12 V</td>
    </tr>
    <tr>
      <td className="tg-0pky">Current consumption</td>
      <td className="tg-0pky"> 50-56 mA (Current can reduce by the distance required)</td>
    </tr>
    <tr>
      <td className="tg-0pky">operating temperature </td>
      <td className="tg-0pky"> -30 - 85 °C</td>
    </tr>
    <tr>
      <td className="tg-0pky">working frequency</td>
      <td className="tg-0pky"> 50HZ - 60HZ</td>
    </tr>
    <tr>
      <td className="tg-0pky">Output delay</td>
      <td className="tg-0pky"> 2s - infinite (Adjustable by software)</td>
    </tr>
    <tr>
      <td className="tg-0pky">Transmitting frequency</td>
      <td className="tg-0pky"> 24 - 24.25 GHz</td>
    </tr>
    <tr>
      <td className="tg-0pky">Digital high-level signal</td>
      <td className="tg-0pky"> 3.2 - 3.3 V</td>
    </tr>
    <tr>
      <td className="tg-0pky">Digital low-level signal</td>
      <td className="tg-0pky"> 0 - 0.2 V</td>
    </tr>
    <tr>
      <td className="tg-0pky">Hanging height</td>
      <td className="tg-0pky"> 3 - 10 meter (Adjustable by software)</td>
    </tr>
    <tr>
      <td className="tg-0pky">Radius of reaction</td>
      <td className="tg-0pky">2 - 5 meter (Adjustable by software)</td>
    </tr>
    <tr>
      <td className="tg-0pky">Radius of Micro</td>
      <td className="tg-0pky">0.5 - 3 meter (Adjustable by software)</td>
    </tr>
    <tr>
      <td className="tg-0pky">Detection angle</td>
      <td className="tg-0pky">150 - 170°</td>
    </tr>
  </tbody>
</table>

## Dimensions

- 20mm x 20mm x 2.54mm

## Hardware Overview

![](https://files.seeedstudio.com/wiki/MW2401TR11/img/MW2401TR11.png)

ip
    R2 is reserved I/O interface.

## Technical details

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-baqh{text-align:center;vertical-align:top}
.tg .tg-6qw1{background-color:#c0c0c0;text-align:center;vertical-align:top}
</style> -->

<table class="tg">
<thead>
  <tr>
    <th class="tg-6qw1" colspan="3">Define of interface</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-baqh">Number</td>
    <td class="tg-baqh">Pin</td>
    <td class="tg-baqh">Function</td>
  </tr>
  <tr>
    <td class="tg-baqh">1</td>
    <td class="tg-baqh">TX</td>
    <td class="tg-baqh">TX port can be used as I/O with ADC function (voltage: 3.3 V)</td>
  </tr>
  <tr>
    <td class="tg-baqh">2</td>
    <td class="tg-baqh">GND</td>
    <td class="tg-baqh">Ground connection</td>
  </tr>
  <tr>
    <td class="tg-baqh">3</td>
    <td class="tg-baqh">OUT</td>
    <td class="tg-baqh">Sense output I/O port (voltage: 3.3 V &amp; user-defined output waveform)</td>
  </tr>
  <tr>
    <td class="tg-baqh">4</td>
    <td class="tg-baqh">VIN</td>
    <td class="tg-baqh">5 - 12 V</td>
  </tr>
  <tr>
    <td class="tg-baqh">5</td>
    <td class="tg-baqh">RX</td>
    <td class="tg-baqh">RX port can be used as I/O with ADC function (voltage: 3.3 V)</td>
  </tr>
</tbody>
</table>

## Platform Supported

| Arduino                                                                                             |                                                                                              |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/MW2401TR11/img/emptyyyy6.png) | ![](https://files.seeedstudio.com/wiki/MW2401TR11/img/emptyyyy6.png) | ![](https://files.seeedstudio.com/wiki/MW2401TR11/img/emptyyyy6.png) | ![](https://files.seeedstudio.com/wiki/MW2401TR11/img/emptyyyy6.png) |

## Getting Started

### Materials Required

| Seeeduino Cortex-M0+ |MW2401TR11|
|--------------|--------------|
|![enter image description here](https://files.seeedstudio.com/wiki/MW2401TR11/img/clearseeedriono%20pic.png)| ![enter image description here](https://files.seeedstudio.com/wiki/MW2401TR11/img/clearnMWpic6.png)|
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-Cortex-M0-p-4070.html)|[Get ONE Now](https://www.seeedstudio.com/Microwave-Sensor-24GHz-Doppler-Radar-Motion-Sensor-MW2401TR11-p-4690.html)|

:::tip
it just an example， you are able to use other devices with RX and TX port or set up a software serial port to simulate TX and TX port, also you can just use OUT port to output high-level signal or low-level signal without RX and TX.
:::

## Hardware

 ![MW2401TR11 with seeeduino Cortex-M0+ connection](https://files.seeedstudio.com/wiki/MW2401TR11/img/MW_Seeeduino.png)

- **step 1. Following above picture to connect wire**.
- **step 2. Plug tpye-c power cable to seeeduino Cortex-MO+**.

## Software

- **step 1. Download the** [arduino IDE](https://www.arduino.cc/en/main/software)
- **step 2. setup Seeeduino Cortex-MO+, please follow** [seeedruino Cortex-MO+ instructions](https://wiki.seeedstudio.com/Seeeduino-Cortex-M0/)
- **step 3. copy the code into arduino IDE then upload.** [upload code guide](https://wiki.seeedstudio.com/Upload_Code/)

```C
int MW_out = 2;   
// set pin 2 as OUT port
void setup() {
  Serial.begin(9600);
  Serial1.begin(115200);
  pinMode(MW_out, INPUT);
}

void loop() {
  Serial.println(analogRead(MW_out));
  delay(2000);
  if (Serial1.available()){
    //Serial.println("data be ready to present");
    uint8_t begin_code = Serial1.read();
    delay(10);
    uint8_t state_code = Serial1.read();
    delay(10);
    uint8_t gear_code = Serial1.read();
    delay(10);
    uint8_t delay_code = Serial1.read();
    delay(10);
    uint8_t check_code = Serial1.read();

    if(begin_code == 170){  //confirm the hearder alway present 0xaa
      check_code = begin_code + state_code + gear_code + delay_code;
      if(check_code == 175) Serial.println("object state:stop");
      if(check_code == 176) Serial.println("object state:closing_5");
      if(check_code == 177) Serial.println("object state:leaving");
      if(check_code == 172) Serial.println("object state:closing_1");
    }
    else Serial.println("no data recived");   
    }
    while(Serial1.read()>=0);    //clear buffer
}

```

- **step 4. open the Serial Monitor you will see the data print**.

![](https://files.seeedstudio.com/wiki/MW2401TR11/img/monitor2.png)

**The 1018 and 1019 are mean high-level signal, 4 and 5 is mean low-level signal, normally if the low-level signal presented, it will be not present action data.**

**There is a simple show when my hand is leaving, the monitor is displaying object state: leaving**
![when my hand is leaving](https://files.seeedstudio.com/wiki/MW2401TR11/img/MW2401TR11_gGIF.gif)

![](https://files.seeedstudio.com/wiki/MW2401TR11/img/MW2401TR11_GIF.gif)

## Resource

- **[PDF]** [Microwave Sensor - 24GHz Doppler Radar Motion Sensor - MW2401TR11](http://wiki.seeedstudio.com/Microwave-Sensor-24GHz-Doppler-Radar-Motion-Sensor-MW2401TR11/MW2401TR11_datasheet.zip)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/)
<div><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
