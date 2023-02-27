---
title: Grove - Analog Microphone


nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-Analog-Microphone/
slug: /Grove-Analog-Microphone
last_update:
  date: 01/06/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/04.png)

The Grove - Analog Microphone is a based on high-performance **SiSonic MEMS** technology, offering an extremely-low-noise, low-current, reliable, and small microphone to opensource hardware industry, and it has improved performance under severe conditions.

Grove - Analog Microphone is an ideal choice of sound sensors where excellent audio performance is required. It can provide up to 20dB of gain and it also features low current, max RF protection, which makes it a perfect microphone for Arduino and Raspberry Pi. Our featured product <a href="https://www.seeedstudio.com/ReSpeaker-Core-v2-0.html">ReSpeaker Core v2.0</a> also adopts MEMS technology and the same microphone as Grove - Analog Microphone does. If you are going to get a fancy microphone, here is the choice.

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width={200} height={38} border={0} /></a></p>

## Features

- High-performance SiSonic MEMS technology
- Extremely-low-noise, low-current, and reliable
- Compact and elegant design

:::warning
    This sound sensor is used to detect whether there's sound surround or not, please don't use the module to collect sound signal. For example, you can use it to make a sound control lamp, but not as a recording device.
:::

## Applications

- Sound sensor
- Collecting of sound signal
- Voice recognition
- Recording

## Specifications

|Item|Value|
|-----|------|
|Dimensions |20mm x 20mm|
|Operating Voltage |3.3V|
|Operating Current| 5mA|
|Operating Temperature Range|-40 °C to 100 °C|

:::tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::

## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

## Getting Started

:::note
    If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

### Play With Arduino

**Hardware**

|Seeeduino V4.2| Base Shield|Grove-Analog Microphone|
|--------------|------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/small.png)|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html)|

- **Step 1.** Connect Grove-Sound Sensor to port **A0** of Grove-Base Shield.
- **Step 2.** Plug Grove - Base Shield into Seeeduino and connect Seeeduino to PC via a USB cable.

![](https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/hardware_connection.jpg)

:::note
 If we don't have Grove Base Shield, We also can directly connect Grove-Sound Sensor to Seeeduino as below.
:::

| Seeeduino     | Grove-Sound Sensor      |
|---------------|-------------------------|
| 5V            | Red                     |
| GND           | Black                   |
| A1            | White                   |
| A0            | Yellow                  |

**Software**

- **Step 1.** Please copy below code to Arduio IDE and upload to arduino. If you do not know how to upload the code, please check [how to upload code](https://wiki.seeedstudio.com/Upload_Code/).

```c
/*
  Analog input, analog output, serial output

  Reads an analog input pin, maps the result to a range from 0 to 255 and uses
  the result to set the pulse width modulation (PWM) of an output pin.
  Also prints the results to the Serial Monitor.
*/

// These constants won't change. They're used to give names to the pins used:
const int analogInPin = A0;  // Analog input pin that the potentiometer is attached to
const int analogOutPin = 9; // Analog output pin that the LED is attached to

int sensorValue = 0;        // value read from the pot
int outputValue = 0;        // value output to the PWM (analog out)

void setup() {             
  Serial.begin(9600);      // initialize serial communications at 9600 bps
}

void loop() {
  sensorValue = analogRead(analogInPin);        // read the analog in value
  outputValue = map(sensorValue, 0, 1023, 0, 255);       // map it to the range of the analog out
  analogWrite(analogOutPin, outputValue);               // change the analog out value

  Serial.println(outputValue);    // print the results to the Serial Monitor

  // wait 2 milliseconds before the next loop for the analog-to-digital
  // converter to settle after the last reading:
  delay(2);
}
```

- **Step 2.** Click on **Serial > Plotter** to get the changing curve of the sensor. Please make a noise to view the change of the value.

![](https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/outcome.png)

### Play With Wio Terminal

**Hardware**

|Wio Terminal|Grove-Analog Microphone|
|--------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/small.png)|
|[Get One Now](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[Get One Now](https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html)|

#### Hardware Connection

![](https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/connection.jpg)

**Step 1** Plug Grove-Analog Microphone to Wio Terminal via Grove cable and also connect Wio Terminal to PC through a USB cable.

**Step 2** Copy the demo code into your Arduino IDE and upload.

**Software**

```C
#include "seeed_line_chart.h" //include the library

TFT_eSPI tft;
#define LINE_DIS 0X00
#define STRING_DIS 0X01
#define max_size 30 //maximum size of data
doubles data;       //Initilising a doubles type to store data
int brightness;
TFT_eSprite spr = TFT_eSprite(&tft); // Sprite

const int MIC = A0; //the microphone amplifier output is connected to pin A0
int adc;
int dB, PdB; //the variable that will hold the value read from the microphone each time
uint8_t mode = LINE_DIS;
void setup()
{
    Serial.begin(9600); //sets the baud rate at 9600 so we can check the values the microphone is obtaining on the Serial Monitor
    pinMode(A0, INPUT);
    pinMode(WIO_KEY_C, INPUT_PULLUP);
    pinMode(WIO_BUZZER, OUTPUT);
    tft.begin();
    spr.createSprite(TFT_HEIGHT, TFT_WIDTH);
    spr.setRotation(3);
    tft.setRotation(3);
}

void loop() {
 
    if (digitalRead(WIO_KEY_C) == LOW) {
        mode ++;
        if(mode > STRING_DIS ) mode = LINE_DIS;
        while(!digitalRead(WIO_KEY_C));
    }
    display(mode);
}

void display(uint8_t mode)
{
    adc = analogRead(MIC); //Read the ADC value from amplifer
    //Serial.println (adc);//Print ADC for initial calculation
    dB = (adc + 83.2073) / 7.003; //Convert ADC value to dB using Regression values

    if(dB > 50)
    {
        analogWrite(WIO_BUZZER, 128);

    }else{
        analogWrite(WIO_BUZZER, 0);
    }

    spr.fillSprite(TFT_WHITE);

    if (data.size() == max_size)
    {
        data.pop(); //this is used to remove the first read variable
    }
    data.push(dB); //read variables and store in data

    //Settings for the line graph title
    auto header = text(0, 0)
                      .value("MIC DB Readings")
                      .align(center)
                      .valign(vcenter)
                      .width(tft.width())
                      .thickness(2);

    header.height(header.font_height() * 2);
    header.draw(); //Header height is the twice the height of the font
    if (LINE_DIS == mode){
    //Settings for the line graph
    auto content = line_chart(20, header.height()); //(x,y) where the line graph begins
    content
        .height(tft.height() - header.height() * 1.5) //actual height of the line chart
        .width(tft.width() - content.x() * 2)         //actual width of the line chart
        .based_on(0.0)                                //Starting point of y-axis, must be a float
        .show_circle(false)                           //drawing a cirle at each point, default is on.
        .value(data)                                  //passing through the data to line graph
        .color(TFT_RED)                               //Setting the color for the line
        .draw();
    } else if (STRING_DIS == mode){
        for(int8_t line_index = 0;line_index < 5 ; line_index++)
        {
            spr.drawLine(0, 50 + line_index, tft.width(), 50 + line_index, TFT_GREEN);
        }        
        auto header =  text(0, 0)
                    .thickness(1);
        spr.setFreeFont(&FreeSansBoldOblique24pt7b); 
        if(dB > 50){
            spr.setTextColor(TFT_RED);
        }else{
            spr.setTextColor(TFT_BLUE);
        }
        spr.drawFloat(dB,2,70,110);
        spr.drawString(" dB",80 + 100,110,1);
    }
    spr.pushSprite(0, 0);
    delay(100);
}
```

:::success
   The image will display on the screen of Wio Terminal if everything goes well.
:::

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/02.gif" alt="Grove-Analog Microphone'' OUTCOME" title="demo" />
<figcaption><b></b><i></i></figcaption>
</figure>
</div>

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/res/202002902_Grove-Analog_Microphone_v1.0_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- [**ZIP**] [Grove-Analog_Microphone_v1.0_SCH&PCB.zip](https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/res/202002902_Grove-Analog_Microphone_v1.0_SCH&PCB.zip)
- [**PDF**] [SMD Mic OMNI-22DB_Specification.pdf](https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/res/SMD_Mic_OMNI-22DB_Specification.pdf)

## Tech Support

 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/).

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
