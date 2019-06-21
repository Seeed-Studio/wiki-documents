---
name: Project Eight - Thermostat
category: Tutorial
oldwikiname:  Project Eight - Thermostat
prodimagename:  
surveyurl: https://www.research.net/r/Project_Eight-Thermostat
---

The final project in our series may seem complex, but is quite simple. We use the potentiometer to allow user input of a temperature value, and using the temperature sensor – if the ambient temperature rises above the value set via the potentiometer the relay is activated.

1.  Connect the Temperature Sensor to the Analog A0/A1 input jack, like it was in Project 7.
2.  The Grove produces an analog voltage on its D1 output, which is connected to Arduino A0 analog input on the A0/A1 input jack.

3.  Connect the Potentiometer to the Analog A4/A5 input jack.

4.  The Potentiometer produces an analog voltage on its D1 output, which is connected to Arduino A4 analog input on the A4/A5 input jack.
 Connect the Relay to the D2/D3 input jack.

5.  The Arduino's D2 pin sends a signal to the Relay on the D1 connector. The Relay's red light indicates whether the relay is on or off, and the relay makes a clicking sound when it switches.

 ![](https://github.com/SeeedDocument/Project_Eight-Thermostat/raw/master/img/Conn-eight.jpg)

 _**Now upload the following Arduino sketch:**_

```
// Project Eight - Thermostat
//

int a,c,d;
int z=3975;
int relaypin=2;
float b, q, resistance, temperature;

void setup()
{
  pinMode(relaypin, OUTPUT);
}

void loop()
{
  a=analogRead(4);
  b=0.0488*a;
  c=int(b);
  q=analogRead(0);
  resistance=(float)(1023-q)*10000/q;
  temperature=1/(log(resistance/10000)/z+1/298.15)-273.15;
  d=int(temperature);
  if (d&gt;=c)
  {
    digitalWrite(relaypin, HIGH);
    delay(500);
  }
  if (d&lt;c)
  {
    digitalWrite(relaypin, LOW);
    delay(500);
  }
}
```
Try turning the potentiometer to the right and left and see if the relay turns on or off.

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>