---
name: Project Seven - Temperature
category: Tutorial
oldwikiname:  Project Seven - TemperatureProject Seven - Temperature
prodimagename:
surveyurl: https://www.research.net/r/Project_Seven-Temperature
---

Next on our Grove journey is the temperature sensor . It is an analog form of input, and as described earlier returns a voltage potential relative to the ambient temperature. We measure this voltage using an analog pin, and convert it to a temperature.

Connect the Temperature Sensor to the Analog A0/A1 input jack.
The Grove unit produces an analog voltage on its D1 output, which is connected to Arduino A0 analog input on the A0/A1 input jack.

![](https://github.com/SeeedDocument/Project_Seven-Temperature/raw/master/img/Conn-seven.jpg)

_**Now upload the following Arduino sketch:**_

```
// Project Seven - temperature
//

int a;
int del=1000; // duration between temperature readings
float ctemperature;
float ftemperature;
int B=3975;
float resistance;

void setup()
{
  Serial.begin(9600);
}

void loop()
{
  a=analogRead(0);
  resistance=(float)(1023-a)*10000/a;
  ctemperature=1/(log(resistance/10000)/B+1/298.15)-273.15;
  ftemperature=ctemperature*9/5+32;
  Serial.print(ctemperature);
  Serial.print("C ");
  Serial.print(ftemperature);
  Serial.println("F");
  delay(del);
}
```

You can copy and paste the lines above to add temperature capability to your own sketches.

After you have uploaded the sketch, open the serial monitor window in the Arduino IDE, and you should be presented with a box similar to this:

![](https://github.com/SeeedDocument/Project_Seven-Temperature/raw/master/img/Aq0PYQjuq.png)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>