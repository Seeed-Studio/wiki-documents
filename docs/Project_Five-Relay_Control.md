---
name: Project Five – Relay Control
category: Tutorial
oldwikiname:  Project Five – Relay Control
prodimagename:
surveyurl: https://www.research.net/r/Project_Five-Relay_Control
---

In this project we will demonstrate using the relay . Using the button , button one will turn the relay on, and button two turns it off. As noted earlier, the relay can handle a peak voltage capability of 250V at 10 amps.

Even though you may be capable with low voltages and microelectronics, if you are not qualified for working with mains voltages, consult a licensed electrician to complete the work.

Connect the Twin Button to the D1/D2 input jack.

The Twin Button Grove's red button uses the D1 connector to send a signal to the Arduino's D1 digital input, and the green button uses the D2 connector to send a signal to the Arduino's D2 digital input.

Connect the Relay to the D6/D7 input jack.

The Arduino's D6 pin sends a signal to the Relay on the D1 connector.  The Relay Grove's red light indicates whether the relay is on or off, and the relay makes a clicking sound when it switches.

![](https://github.com/SeeedDocument/Project_Five-Relay_Control/raw/master/img/Conn-five.jpg)

_**Now upload the following Arduino sketch:**_

```
// Project Five - Relay Control
//

void setup()
{
  pinMode(1, INPUT);
  pinMode(2, INPUT);
  pinMode(6, OUTPUT);
}

void loop()
{
  if (digitalRead(1)==HIGH)
  {
    digitalWrite(6, HIGH);
    delay(100);
  }
  if (digitalRead(2)==HIGH)
  {
    digitalWrite(6, LOW);
  }
}
```

<font color="magenta">
When using this with an XBee Carrier, please be aware that you should set output 16 low to ensure that the mosfet on the XBee carrier provides enough power to reliably pull in the relay
</font>

The reason for the delay function after setting the relay high or low is to allow the sketch to pause – in doing so ignoring the buttons for one tenth of a second. This is more commonly known as 'software de-bouncing”. Although doing so may not seem necessary in this particular example, doing so is a good habit to start with.

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>