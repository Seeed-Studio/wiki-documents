---
name: MW2401TR11
category:
bzurl:
oldwikiname:
prodimagename:
sku: 102110464
---

![](https://files.seeedstudio.com/wiki/MW2401TR11/img/102110464_Preview-07.png)

<p style="text-align:center"><a href="https://www.seeedstudio.com/Microwave-Sensor-24GHz-Doppler-Radar-Motion-Sensor-MW2401TR11-p-4690.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p> 

**MW2401TR11** is a high integration and intelligence algorithm **24 GHz** Microwave induction of human motion with high performance Transmit and receive antennas, the MW2401TR11 is able to according to place required to adjust cover range, also it can through intelligence algorithm to anti-interference of environment, and it can recognize object movement.


MW2401TR11 is a 24GHz human motion microwave sensor module product with high integration and high intelligent algorithm, it equipped with high-performance transceiver. The antenna not only has good directivity, but can also adjust the coverage area through software settings according to different application scenarios, and filter out interference through smart algorithms, Also it is able to effectively identify the subtle movement of objects.

## Features

- Recognize people tiny movement sensitively
- **24Ghz** Microwave module can high effectively recognize object state
- Support original signal and digital high level or low level signal output
- sense of Distance and sensitive are support to adjustable (Maximum: 20 meter)
- minisize antenna with **170 °** azimuth angle detection function
- There are reserve I/O port and support to communicate UART port
- FCC/CE/RS authentication test standards


## Specification  

<table>
<tbody>
<tr>
<table border = "2">
<td style="text-align:left;font-weight:bold">item</td>
<td style="text-align:left;font-weight:bold">Value</td>
</tr>
<tr>
<td>Operating Voltage</td>
<td>5 - 12 V</td>
</tr>
<tr>
<td>Operating current</td>
<td>50 - 56 mA (Current can reduce by the distance required)</td>
</tr>
<tr>
<td>Operating temperature range</td>
<td>-30 - 85 &deg;C</td>
</tr>
<tr>
<td>Working frequency</td>
<td>50 HZ or 60 HZ</td>
</tr>
<tr>
<td>Output delay</td>
<td>2 s - infinite (Software adjustable)</td>
</tr>
<tr>
<td>Transmitting frequency</td>
<td>24 - 24.25 GHz</td>
</tr>
<tr>
<td>Digital high-level signal</td>
<td>3.2 - 3.3 V</td>
</tr>
<tr>
<td>Digital low-level signal</td>
<td>0 - 0.2 V</td>
</tr>
<tr>
<td>hanging height</td>
<td>3 - 10 meter (Software adjustable)</td>
</tr>
<tr>
<td>Radius of reaction</td>
<td>2 - 5 meter (Software adjustable)</td>
</tr>
<tr>
<td>Radius of Micro</td>
<td>0.5 - 3 meter (Software adjustable)</td>
</tr>
<tr>
<td>detection angle</td>
<td>150 - 170 &deg;</td>
</tr>
</tbody>
</table>



## Dimensions

- 20mm x 20mm x 2.54mm


## Hardware Overview
![](https://files.seeedstudio.com/wiki/MW2401TR11/img/MW2401TR11.png)


## Technical details 

<table>
<tbody>
<tr>
<table border="2" bordercolor="black" width="550" cellspacing="0" cellpadding="5">
<th colspan = "3">Define of interface</th>
</tr>
<tr>
<td>Number</td>
<td>Pin</td>
<td>function</td>
</tr>
<tr>
<td>1</td>
<td>TX</td>
<td>TX port can be used as I/O with ADC function (voltage: 3.3 V)</td>
</tr>
<tr>
<td>2</td>
<td>GND</td>
<td>ground connection</td>
</tr>
<tr>
<td>3</td>
<td>OUT</td>
<td>sense output I/O port (voltage: 3.3 V & user-difined output waveform)</td>
</tr>
<tr>
<td>4</td>
<td>VIN</td>
<td> 5 - 12 V</td>
</tr>
<tr>
<td>5</td>
<td>RX</td>
<td>RX port can be used as I/O with ADC function (voltage: 3.3 V)</td>
</tr>
</tbody>
</table>


## Platform Supported
| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |


## Getting Started

### Materials Required

| Seeeduino Cortex-M0+ |MW2401TR11| 
|--------------|--------------|
|![enter image description here](https://files.seeedstudio.com/wiki/MW2401TR11/img/seeeduinoMO.png)| ![enter image description here](https://files.seeedstudio.com/wiki/MW2401TR11/img/MW_250.png)|
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-Cortex-M0-p-4070.html)|[Get ONE Now](https://www.seeedstudio.com/Microwave-Sensor-24GHz-Doppler-Radar-Motion-Sensor-MW2401TR11-p-4690.html)|

!!!Tip
    it just an example， you are able to use other devices with RX and TX port or set up a software serial port to simulate TX and TX port, also you can just use OUT port to output high-level signal or low-level signal without RX and TX.


## Hardware 

 ![MW2401TR11 with seeeduino Cortex-M0+ connection](https://files.seeedstudio.com/wiki/MW2401TR11/img/MW_Seeeduino.png)

 - **step 1. Following above picture to connect wire.** 
 - **step 2. Plug tpye-c power cable to seeeduino Cortex-MO+.** 
 
 ## Software

 - **step 1. Download the [arduino IDE](https://www.arduino.cc/en/main/software)**
 - **step 2. setup Wio terminal device, please follow [seeedruino Cortex-MO+ instructions](https://wiki.seeedstudio.com/Seeeduino-Cortex-M0/)**
 - **step 3. copy the code into arduino IDE then upload. [upload code guide](https://wiki.seeedstudio.com/Upload_Code/)**



 ```C
 int MW_out = 2;   // set pin 2 as OUT port

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

- **step 4. open the Serial Monitor you will see the data print.** 

