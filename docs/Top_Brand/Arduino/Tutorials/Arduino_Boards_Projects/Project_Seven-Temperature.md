---
description: Project Seven - Temperature
title: Project Seven - Temperature
keywords:
- Arduino
- Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Project_Seven-Temperature
last_update:
  date: 2/15/2023
  author: jianjing Huang
---
<!-- ---
name: Project Seven - Temperature
category: Tutorial
oldwikiname:  Project Seven - TemperatureProject Seven - Temperature
prodimagename:
surveyurl: https://www.research.net/r/Project_Seven-Temperature
--- -->

Next on our Grove journey is the temperature sensor . It is an analog form of input, and as described earlier returns a voltage potential relative to the ambient temperature. We measure this voltage using an analog pin, and convert it to a temperature.

Connect the Temperature Sensor to the Analog A0/A1 input jack.
The Grove unit produces an analog voltage on its D1 output, which is connected to Arduino A0 analog input on the A0/A1 input jack.

![](https://files.seeedstudio.com/wiki/Project_Seven-Temperature/img/Conn-seven.jpg)

_**Now upload the following Arduino sketch:**_

```cpp
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

![](https://files.seeedstudio.com/wiki/Project_Seven-Temperature/img/Aq0PYQjuq.png)

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
