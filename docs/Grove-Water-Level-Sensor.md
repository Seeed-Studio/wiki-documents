---
name: Grove - Water Level Sensor (10CM) for Arduino
category: 
bzurl: 
oldwikiname: 
prodimagename: 
surveyurl: 
sku: 101020635
---


![](https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/img/Grove-Water-Level-Sensor-10CM-wiki.jpg)

The Grove Water Level Sensor is a very accurate sensor that can be helpful in water level sensing applications. It is completely waterproof and uses capacitive pads to detect water levels up to 10cm.

We used capacitive pads on the PCB of the module and did conformal coating over the PCB to make the sensor protect against moisture, dust, chemicals and high temperatures. We believe that this technique will allow you to make accurate water level measurements (±5mm accuracy) easily.

<p style=":center"><a href="https://www.seeedstudio.com/Grove-Water-Level-Sensor-10CM-p-4443.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Feature

- Easy to use (Use Grove Connector without soldering)
- Based on capacitive sensing
- Waterproof
- Conformal Coating
- Corrosion Resistant
- Detect up to 10cm water levels
- I2C Interface

## Specification

|Parameter|Value|
|---|---|
|Input voltage|3.3V / 5V|
|Measurement Accuracy| ±5mm |
|Working Temperature Range|-40°C to 105°C|
|I2C Addresses|0x78 and 0x77|
|Interface|I2C|
|Dimensions|20mm x 133mm|

## Hardware Overview

<div align="center">
<figure>
  <p style=":center"><a href="https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/img/Grove-Water-Level-Sensor-pinout-1.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/img/Grove-Water-Level-Sensor-pinout-1.jpg" /></a></p>
</figure>
</div>

<div align="center">
<figure>
  <p style=":center"><a href="https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/img/Grove-Water-Level-Sensor-UPDI.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/img/Grove-Water-Level-Sensor-UPDI.png" /></a></p>
</figure>
</div>


## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |


## Getting Started

### Play With Arduino


**Materials required**


| Seeeduino V4.2 | Base Shield | Grove - Water Level Sensor|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/img/Grove-Water-Level-Sensor-10CM-thumbnail.jpg)
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Water-Level-Sensor-10CM-p-4443.html)|

>In addition, you can consider our new [Seeeduino Lotus M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html), which is equivalent to the combination of Seeeduino V4.2 and Baseshield.

#### Hardware Connection

- **Step 1.** Plug Grove - Water Level Sensor to **I2C** port of Grove - Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to a PC via a USB cable.

![](https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/img/Connection.png)

#### Software

!!!Attention
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.


- **Step 1.**  Open the Arduino IDE and create a new file, then copy the following code into the new file.

```C++
#include <Wire.h>

#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
#define SERIAL SerialUSB
#else
#define SERIAL Serial
#endif

unsigned char low_data[8] = {0};
unsigned char high_data[12] = {0};


#define NO_TOUCH       0xFE
#define THRESHOLD      100
#define ATTINY1_HIGH_ADDR   0x78
#define ATTINY2_LOW_ADDR   0x77

void getHigh12SectionValue(void)
{
  memset(high_data, 0, sizeof(high_data));
  Wire.requestFrom(ATTINY1_HIGH_ADDR, 12);
  while (12 != Wire.available());

  for (int i = 0; i < 12; i++) {
    high_data[i] = Wire.read();
  }
  delay(10);
}

void getLow8SectionValue(void)
{
  memset(low_data, 0, sizeof(low_data));
  Wire.requestFrom(ATTINY2_LOW_ADDR, 8);
  while (8 != Wire.available());

  for (int i = 0; i < 8 ; i++) {
    low_data[i] = Wire.read(); // receive a byte as character
  }
  delay(10);
}

void check()
{
  int sensorvalue_min = 250;
  int sensorvalue_max = 255;
  int low_count = 0;
  int high_count = 0;
  while (1)
  {
    uint32_t touch_val = 0;
    uint8_t trig_section = 0;
    low_count = 0;
    high_count = 0;
    getLow8SectionValue();
    getHigh12SectionValue();

    Serial.println("low 8 sections value = ");
    for (int i = 0; i < 8; i++)
    {
      Serial.print(low_data[i]);
      Serial.print(".");
      if (low_data[i] >= sensorvalue_min && low_data[i] <= sensorvalue_max)
      {
        low_count++;
      }
      if (low_count == 8)
      {
        Serial.print("      ");
        Serial.print("PASS");
      }
    }
    Serial.println("  ");
    Serial.println("  ");
    Serial.println("high 12 sections value = ");
    for (int i = 0; i < 12; i++)
    {
      Serial.print(high_data[i]);
      Serial.print(".");

      if (high_data[i] >= sensorvalue_min && high_data[i] <= sensorvalue_max)
      {
        high_count++;
      }
      if (high_count == 12)
      {
        Serial.print("      ");
        Serial.print("PASS");
      }
    }

    Serial.println("  ");
    Serial.println("  ");

    for (int i = 0 ; i < 8; i++) {
      if (low_data[i] > THRESHOLD) {
        touch_val |= 1 << i;

      }
    }
    for (int i = 0 ; i < 12; i++) {
      if (high_data[i] > THRESHOLD) {
        touch_val |= (uint32_t)1 << (8 + i);
      }
    }

    while (touch_val & 0x01)
    {
      trig_section++;
      touch_val >>= 1;
    }
    SERIAL.print("water level = ");
    SERIAL.print(trig_section * 5);
    SERIAL.println("% ");
    SERIAL.println(" ");
    SERIAL.println("*********************************************************");
    delay(1000);
  }
}

void setup() {
  SERIAL.begin(115200);
  Wire.begin();
}

void loop()
{
  check();
}
```

- **Step 3.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](https://wiki.seeedstudio.com/Upload_Code/).

- **Step 4.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. Set the baud rate to **115200**.

- **Step 5.** The result should be like this when the sensor is in water:

<div align=center><img src="https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/img/Result.gif"/></div>

### FAQ

**Q1#** Useful Applications?

**A1:** Here provides a simple application using the **Grove - Water Level Sensor** with **Buzzer** and **LED module** for water level detecting. Please check the [full code](https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/water-level-sensor-demo.ino) here.

![](https://files.seeedstudio.com/products/101020635/img/water%20level.2020-01-17%2018_27_47.gif)

## Schematic Online Viewer


<div class="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/res/Grove%20-%20Water%20Level%20Sensor%20(10CM)_SCH%26PCB.zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>

## Resources

- **[ZIP]** [Grove - Water Level Sensor (10CM) Schematic file](https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/res/Grove%20-%20Water%20Level%20Sensor%20(10CM)_SCH%26PCB.zip)
- **[PDF]** [ATtiny1616-1617-Automotive-Data-Sheet](https://files.seeedstudio.com/wiki/Grove-Water-Level-Sensor/res/ATtiny1616-1617-Automotive-Data-Sheet.pdf)

## Tech Support
Please submit any technical issue into our [forum](https://forum.seeedstudio.com/)<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>