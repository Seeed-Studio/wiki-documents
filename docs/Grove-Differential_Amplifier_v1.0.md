---
name: Grove - Differential Amplifier v1.0
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Differential-Amplifier-p-1284.html
oldwikiname:  Grove - Differential Amplifier v1.0
prodimagename:  Amplifier_V2.jpg
surveyurl: https://www.research.net/r/Grove-Differential_Amplifier_v1
sku:    103020016
---
![](https://github.com/SeeedDocument/Grove-Differential_Amplifier_v1.0/raw/master/img/Amplifier_V2.jpg)

Have you found that setting up an amplifier IC on the breadboard is a troublesome and totally no-need-to-repeat job? This Grove module can save you clutter to settle up such an IC by integrating the whole operating circuit. It's designed for precise differential-input amplification. Input the differential signals of your sensor to this module through the male pins, then your Arduino will get a precisely amplified output from the Grove interface. The gain scale factor is selectable. You can get a 304 times or 971 times amplification via a switch on the board.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Differential-Amplifier-p-1284.html)

##  Feature
---
*   High amplifying precision

*   Selectable scale factor

*   Can be conveniently read by Arduino

*   Strong input protection: ±40V

##  Application
---
*   Data acquisition

*   Battery operated systems

*   Pressure and temperature bridge amplifiers

*   General purpose instrumentation

##   Specification
---
<table  cellspacing="0" width="80%">
<tr>
<th colspan="2" scope="col"> Item
</th>
<th scope="col"> Min
</th>
<th scope="col"> Typical
</th>
<th scope="col"> Max
</th>
<th scope="col"> Unit
</th></tr>
<tr>
<th colspan="2" scope="row"> Operating Voltage
</th>
<td> 2.7
</td>
<td> 5.0
</td>
<td> 36
</td>
<td> VDC
</td></tr>
<tr>
<th colspan="2" scope="row"> Input Voltage

</th>
<td> 0.1
</td>
<td> \
</td>
<td> (Vcc-0.8)/Gain
</td>
<td> mV
</td></tr>
<tr>
<th colspan="2" scope="row"> Output Voltage
</th>
<td> 0
</td>
<td> \
</td>
<td> Vcc-0.80
</td>
<td> mV
</td></tr>
<tr>
<th rowspan="2"> Gain
</th>
<td> Select 304
</td>
<td> 297.92
</td>
<td> 304
</td>
<td> 310.08
</td>
<td colspan="2" rowspan="2"> /
</td></tr>
<tr>
<td> Select 971
</td>
<td> 951.58
</td>
<td> 971
</td>
<td> 990.42
</td></tr></table>

##  Interface Function
---
![](https://github.com/SeeedDocument/Grove-Differential_Amplifier_v1.0/raw/master/img/Amplifier_Interface3.jpg)

**J2：**Signal Source Interface

**J1：**Output Interface, Standard Grove Interface

**R1：**62Ω gain resistor

**R3:** 200Ω gain resistor

**U1:** INA125 IC, Instrumentation amplifier

##  Usage
---
**1. Sensor Choosing**

The amplifier can turn signals in mA scale up to A scale. Before using it, make sure the output range of your sensor is in mA scale. For example, [Weight Sensor](/Weight_Sensor_Load_Cell_0-500g) is one of them.

**2. Connector Reforming**

To pair the weight sensor up with the male pins on the amplifier, female connectors need to be soldered on its wires.

![](https://github.com/SeeedDocument/Grove-Differential_Amplifier_v1.0/raw/master/img/Solder.jpg)

**3. Hardware Hookup**

Connect the weight sensor to the amplifier as the picture depicts below.

![](https://github.com/SeeedDocument/Grove-Differential_Amplifier_v1.0/raw/master/img/Connect5.jpg)

**4. Measurement**

Copy and paste the demo code below to Arduino IDE and upload it.
```
void setup()
{
    Serial.begin(9600);
    Serial.println("start");
}

void loop()
{
    int i;
    int value;
    float V,Vo;
    float Sum=0;
    for(i=0;i&lt;10;i++)
    {
        value=analogRead(4);
        V=value*5.00/1023;
        Sum+=V;
        delay(10);
    }
    Vo=Sum/10;
    Serial.print("Output score:");
    Serial.println(Vo);
    delay(1000);
}
```
You can view the amplified signals via serial monitor. For the value of the input signal, you need to use the multimeter to measure the voltage difference between VIN+ and VIN-.

##  Amplifier Precision Test
---
Next is a test to find out the precision of amplifier. We collected 100 groups of input signals and output signals of amplifier, under either 304 or 971 scale factor condition, and plotted following two graphs.

We gradually added the load of weight sensor by adding water drop by drop into a bottle tied to it.

![](https://github.com/SeeedDocument/Grove-Differential_Amplifier_v1.0/raw/master/img/TEST_Score1.jpg)

![](https://github.com/SeeedDocument/Grove-Differential_Amplifier_v1.0/raw/master/img/Test_Score_Picture2.jpg)

The horizontal axis represents the input voltage and the vertical axis represents the output voltage. With the weight increase of the bottle, the input signal turns up linearly. The actual gain of the first graph is 300.1 which has 1.3% deviation from theoretical gain, 304. And the actual gain of the second graph is 971. The deviation is 0.8% compared to 964.2.

The measurement range is determined by power supply voltage VCC , the maximum output voltage is between (VCC-1.2) and (VCC-0.8).

##  Resource
---
- [Amplifier 1.0 Eagle File](https://github.com/SeeedDocument/Grove-Differential_Amplifier_v1.0/raw/master/res/Amplifier_eagle_file.zip)

- [Amplifier1.0 Schematic](https://github.com/SeeedDocument/Grove-Differential_Amplifier_v1.0/raw/master/res/Amplifier.pdf)

- [INA125 Datasheet](https://github.com/SeeedDocument/Grove-Differential_Amplifier_v1.0/raw/master/res/INA125.pdf)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>