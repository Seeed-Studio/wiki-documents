---
name: Project One - Double Blink
category: Tutorial
oldwikiname:  Project One - Double Blink
prodimagename:  
surveyurl: https://www.research.net/r/Project_One-Double_Blink
---
The purpose of this project is to demonstrate a simple digital-out display using the LED Grove. Connect your equipment as shown in the image below:
Connect the LED Grove to the D1/D2 Digital I/O jack on the Grove Shield.
Arduino Pin D1 powers the Red LED on the Grove's D1 connector, and Arduino Pin D2 powers the Green LED on the Grove's D2 connector.

![](https://github.com/SeeedDocument/Project_One-Double_Blink/raw/master/img/Conn-one.jpg)

_**Now upload the following Arduino sketch:**_

```
// Project One - Double Blink
//

int del=500; // adjust for blink rate

void setup()
{
    pinMode(1, OUTPUT);
    pinMode(2, OUTPUT);
}

void loop()
{
    digitalWrite(1, HIGH);
    digitalWrite(2, LOW);
    delay(del);
    digitalWrite(1, LOW);
    digitalWrite(2, HIGH);
    delay(del);
}
```
As you can see, it is quite simple. The two LEDs alternately blink, with the delay between the two set by the variable del. However, in doing so you can experience for yourself how simple the Grove system is to use.

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>