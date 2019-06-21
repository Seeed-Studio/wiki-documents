---
name: Ultra Sonic range measurement module
category: MakerPro
bzurl: https://www.seeedstudio.com/ultra-sonic-range-measurement-module-p-626.html?cPath=144_149
oldwikiname:  Ultra Sonic range measurement module
prodimagename:  Mini_Soldering_Iron_product_view.jpg
surveyurl: https://www.research.net/r/Ultra_Sonic_range_measurement_module
sku:     101990004
---
![](https://github.com/SeeedDocument/Ultra_Sonic_range_measurement_module/raw/master/img/front.jpg)

Seeed ultrasonic sensor is non-contact distance measurement module, which is also compatible with electronic brick.
It’s designed for easy modular project
usage with industrial performance.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](https://www.seeedstudio.com/ultra-sonic-range-measurement-module-p-626.html?cPath=144_149)

##   Features

*   Detecting range: 3cm-4m
*   Best in 30 degree angle
*   Electronic brick compatible interface
*   5VDC power supply
*   Breadboard friendly
*   Dual transducer
*   Arduino library ready

##   Specification

<table>
<tr>
<td width="400px"> Supply voltage
</td>
<td width="200px"> 5V
</td></tr>
<tr>
<td> Global Current Consumption
</td>
<td> 15 mA
</td></tr>
<tr>
<td>Ultrasonic Frequency
</td>
<td> 40k Hz
</td></tr>
<tr>
<td> Maximal Range
</td>
<td> 400 cm
</td></tr>
<tr>
<td> Minimal Range
</td>
<td> 3 cm
</td></tr>
<tr>
<td> Resolution
</td>
<td> 1 cm
</td></tr>
<tr>
<td> Trigger Pulse Width
</td>
<td> 10 μs
</td></tr>
<tr>
<td> Outline Dimension
</td>
<td> 43x20x15 mm
</td></tr></table>

## Getting started


A short ultrasonic pulse is transmitted at the time 0, reflected by an object. The sensor receives this signal and converts it to an electric signal. The next pulse can be transmitted when the echo is faded away. This time period is called cycle period. The recommend cycle period should be no less than 50ms. If a 10μs width trigger pulse is sent to the signal pin, the Ultrasonic module will output eight 40kHz ultrasonic signal and detect the echo back. The measured distance is proportional to the echo pulse width and can be calculated by the formula above. If no obstacle is detected, the output pin will give a 38ms high level signal.

### Play with Arduino

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield| Ultra_Sonic_range_measurement_module |
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/base_shield.jpg)|![enter image description here](https://github.com/SeeedDocument/Ultra_Sonic_range_measurement_module/raw/master/img/45d_small.jpg)|
|[Get One Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/ultra-sonic-range-measurement-module-p-626.html?cPath=144_149)|

- **Step 2.** Connect  Ultra_Sonic_range_measurement_module to port **D2** of Grove-Base Shield.
- **Step 3.** Plug Grove - Base Shield into Seeeduino.
- **Step 4.** Connect Seeeduino to PC via a USB cable.

!!!Note
	If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.

| Seeeduino       |  ??? |
|---------------|-------------------------|
| 5V           | Red                     |
| GND           | Black                   |
| Not Conencted | White                   |
| D2            | Yellow                  |

#### Software

**Step 1.** Copy the code and flash it into the controller board.
**Step 2.**  Upload the code and open monitor window.

```C
#include "Arduino.h"
class Ultrasonic
{
    public:
    Ultrasonic(int pin);
    void DistanceMeasure(void);
    double microsecondsToCentimeters(void);
    double microsecondsToInches(void);
    private:
    int this_pin;//pin number of Arduino that is connected with SIG pin of Ultrasonic Ranger.
    long duration;// the Pulse time received;
};
Ultrasonic::Ultrasonic(int pin)
{
    this_pin = pin;
}
/*Begin the detection and get the pulse back signal*/
void Ultrasonic::DistanceMeasure(void)
{
    pinMode(this_pin, OUTPUT);
    digitalWrite(this_pin, LOW);
    delayMicroseconds(2);
    digitalWrite(this_pin, HIGH);
    delayMicroseconds(5);
    digitalWrite(this_pin,LOW);
    pinMode(this_pin,INPUT);
    duration = pulseIn(this_pin,HIGH);
}
/*The measured distance from the range 0 to 400 Centimeters*/
double Ultrasonic::microsecondsToCentimeters(void)
{
    return duration/29.0/2.0;
}
/*The measured distance from the range 0 to 157 Inches*/
double Ultrasonic::microsecondsToInches(void)
{
    return duration/74.0/2.0;
}

Ultrasonic ultrasonic(2);
void setup()
{
    Serial.begin(9600);
}
void loop()
{
    double RangeInInches;
    double RangeInCentimeters;
    ultrasonic.DistanceMeasure();// get the current signal time;
    RangeInInches = ultrasonic.microsecondsToInches();//convert the time to inches;
    RangeInCentimeters = ultrasonic.microsecondsToCentimeters();//convert the time to centimeters
    Serial.println("The distance to obstacles in front is: ");
    Serial.print(RangeInInches);//0~157 inches
    Serial.println(" inch");
    Serial.print(RangeInCentimeters);//0~400cm
    Serial.println(" cm");
    delay(1000);
}
```

## Tech Support

Please submit any technical issue into our [forum](http://forum.seeedstudio.com/).
<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>