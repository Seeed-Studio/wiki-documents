---
name: Weight Sensor (Load Cell)0-500g
category: MakerPro
bzurl: https://www.seeedstudio.com/weight-sensor-load-cell-0500g-p-525.html?cPath=144_150
oldwikiname:  Weight Sensor (Load Cell)0-500g
prodimagename:  loadcell500.jpg
surveyurl: https://www.research.net/r/Weight_Sensor-Load-Cell-0-500g
sku:      314990000
---
![](https://github.com/SeeedDocument/Weight_Sensor_Load_Cell_0-500g/raw/master/img/loadcell500.jpg)


Applicable to electronic scale, price computering scale, electronic platform scale, digital scale; parcel post scale, electronic balance and all varieties of commercial scales by single load cell.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/weight-sensor-load-cell-0500g-p-525.html?cPath=144_150)

##   Specification
---
*   capacity g 500g

*   Output sensitivity mv/v 0.5±0.1

*   Nonlinearty %.F.S 0.05

*   Hysteresis %F.S 0.05

*   Repeatability %F.S 0.05

*   Creep(30min) %.F.S 0.05

*   Temperature effect on sensitivity %F.S/10℃ 0.05

*   Temperature effect on zero %F.S/10℃ 0.05

*   Zero Balance %F.S ±0.5

*   Input resistance Ω(ohms) 1120±10

*   Output resistance Ω(ohms) 1000±10

*   Insulation resistance MΩ(ohms) ≥2000

*   Recommended excitation voltage v 5v

*   Method of Connecting wire red： Exc + black： Exc –

*   green： Sig + white：Sig -

##   Usage
---
###  **Hardware install**

![](https://github.com/SeeedDocument/Weight_Sensor_Load_Cell_0-500g/raw/master/img/Weight_Sensor.png)

**Note**: Weight sensor output 0V when the load less than 150g,so we can not directly measure the load .My method is using a 200g local avoid measure blind spot.Read the analog data of 200g weight as no-load(0g),read the analog data of 700g weight as full load(500g).

###  **Programming**
```
void setup()
{
    Serial.begin(9600);
}

void loop()
{
    int value;
    value = analogRead(0);
    Serial.println(value);
}
```

###   external link

[How to use with Arduino](http://cerulean.dk/words/?page_id=42).

##   Sourse
---
- [INA125 datasheet](https://github.com/SeeedDocument/Weight_Sensor_Load_Cell_0-500g/raw/master/res/INA125.pdf)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>