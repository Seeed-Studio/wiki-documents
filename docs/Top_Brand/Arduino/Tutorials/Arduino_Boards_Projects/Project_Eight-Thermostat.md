---
description: Project Eight - Thermostat
title: Project Eight - Thermostat
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Project_Eight-Thermostat
last_update:
  date: 2/15/2023
  author: jianjing Huang
---

<!-- ---
name: Project Eight - Thermostat
category: Tutorial
oldwikiname:  Project Eight - Thermostat
prodimagename:  
surveyurl: https://www.research.net/r/Project_Eight-Thermostat
--- -->

The final project in our series may seem complex, but is quite simple. We use the potentiometer to allow user input of a temperature value, and using the temperature sensor – if the ambient temperature rises above the value set via the potentiometer the relay is activated.

1. Connect the Temperature Sensor to the Analog A0/A1 input jack, like it was in Project 7.
2. The Grove produces an analog voltage on its D1 output, which is connected to Arduino A0 analog input on the A0/A1 input jack.

3. Connect the Potentiometer to the Analog A4/A5 input jack.

4. The Potentiometer produces an analog voltage on its D1 output, which is connected to Arduino A4 analog input on the A4/A5 input jack.
 Connect the Relay to the D2/D3 input jack.

5. The Arduino's D2 pin sends a signal to the Relay on the D1 connector. The Relay's red light indicates whether the relay is on or off, and the relay makes a clicking sound when it switches.

 ![](https://files.seeedstudio.com/wiki/Project_Eight-Thermostat/img/Conn-eight.jpg)

 _**Now upload the following Arduino sketch:**_

```cpp
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

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
