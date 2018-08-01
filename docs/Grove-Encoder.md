---
title: Grove - Encoder
category: Sensor
bzurl: https://seeedstudio.com/Grove-Gas-Sensor(MQ2)-p-937.html
oldwikiname:
prodimagename: Twig-Gas_Sensor.bmp
bzprodimageurl: http://statics3.seeedstudio.com/images/product/Gas Sensor MQ.jpg
surveyurl: https://www.research.net/r/Grove-Gas_Sensor-MQ2
sku: 111020001
tags:
---

![](https://statics3.seeedstudio.com/images/product/Grove%20Encoder.jpg)



This module is an incremental rotary encoder. It encodes the rotation signal from the axis and output the signal by electronic pulse. The Grove – Encoder is one of the Grove series and has a standard Grove interface.
When you need to add a rotary knob to your project, for example a volume knob for a speaker, a selection panel or a digital input, this will be your first choice.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Encoder-p-1352.html)

## Features

*   Incremental encoder.
*   Grove Interface.
*   360 degree rotary.

## Specification

| Item | Min | Typical | Max | Unit |
|--|--|--|--|--|
| Voltage | 4.5 | 5 | 5.5 | V |
| Current | 10 | 20 | 30 | mA |
| Dimension | |20x 20 | |mm |
| Net Weight || 12 || g |

## Getting Started

This Grove-Encoder is very easy to use with the [Encoder Lib](https://seeeddoc.github.io/Grove-Encoder/res/Encoder.zip) designed by seeedstudio. Simply connect this module to the D2 connector of Base Shield and you can start using. The following is a introduction of how to make a [Circular LED bar](https://www.seeedstudio.com/Grove-Circular-LED-p-1353.html) (the idea came from [seeedstudio wish](http://www.seeedstudio.com/wish/)）.

*   This Circular LED bar consists of an Encoder and a Grove-CircularLED module. Connect the two modules to Base shield as the following picture:<b

![](https://seeeddoc.github.io/Grove-Encoder/img/Cirhard.jpg)

*   In the project, the [TimeOne Lib](https://seeeddoc.github.io/Grove-Encoder/res/TimerOne.zip) and [Encoder Lib](https://seeeddoc.github.io/Grove-Encoder/res/Encoder.zip) and [CircularLED Library](https://seeeddoc.github.io/Grove-Encoder/res/CircularLED.zip) are needed. Download all the librarys and install them to your Arduino IDE.

*   Restart the Arduino IDE and open the example by the path :**File->Examples->Encoder->EncodeCircuiBar.**

```
#include <CircularLED.h>
#include <Encoder.h>
#include <TimerOne.h>
CircularLED circularLED;
unsigned int LED[24];
int index_LED;
void setup()
{
  encoder.Timer_init();
}
void loop()
{
    if (encoder.rotate_flag ==1)
  {
    if (encoder.direct==1)
    {
      index_LED++;
      if (index_LED>23)
      index_LED=24;
      SenttocircularBar(index_LED);
    }
     else
     {
      index_LED--;
      if(index_LED<0)
      index_LED=0;
      SenttocircularBar(index_LED);
     }
    encoder.rotate_flag =0;
  }
}
void SenttocircularBar(int index)
{
  for (int i=0;i<24;i++)
  {
    if (i<index)
    {
      LED[i]=0xff;
    }
    else
    LED[i]=0;
  }
  circularLED.CircularLEDWrite(LED);
}
```

*   Upload it to your Arduino/Seeeduino, please refer to [here](https://seeeddoc.github.io/Upload_Code) to learn how to upload sketches. You can see:

![](https://seeeddoc.github.io/Grove-Encoder/img/EncoderAndCircular_LED.gif)

!!!Note
  It is able to generate another signal when it’s being pressed down. However due to the limitation of the number of Grove signal cable, the module is made without output of this signal.

## Resources

*   [Encoder Spec](https://seeeddoc.github.io/Grove-Encoder/res/Encoder_Spe.zip)

*   [Demo in Arduino forum](http://www.arduino.cc/playground/Main/RotaryEncoders)

*   [TimeOne Lib](https://seeeddoc.github.io/Grove-Encoder/res/TimerOne.zip)

*   [Encoder Lib](https://seeeddoc.github.io/Grove-Encoder/res/Encoder.zip)

*   [Grove-Encoder Eagle files](https://seeeddoc.github.io/Grove-Encoder/res/Grove-Encoder_eagle_files.zip)


## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/).
