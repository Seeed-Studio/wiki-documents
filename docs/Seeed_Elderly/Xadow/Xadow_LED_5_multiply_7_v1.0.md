---
description: Xadow - LED 5x7 v1.0
title: Xadow - LED 5x7 v1.0
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Xadow_LED_5_multiply_7_v1.0
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Xadow_LED_5_multiply_7_v1.0/img/Xadow_LED_01.jpg)

The Xadow LED 5x7 contains two parts: an LED panel and an LED controller. The LED panel is a 5x7 Monochrome matrix. The LED controller is a control module for controlling the LED panel using 12 I/O pins of the Atmega168PV. You can send command to LED controller through I2C interface. Then let the led controller to control the LED display. For example, display alphabet and number, or enter sleep mode to reduce the consumption.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/depot/xadow-led-p-1518.html)

##  Specification
---
*   Working Voltage: 3.3V
*   Built-in Microcontroller
*   Control Mode: I2C (address 0x04)
*   Dimensions: 25.43mm x 20.35mm

##  Demonstration
---
As described in the introduction, the LED  can display alphabet and number. Next we will show you the interesting demo.

The Hardware installation as shown below:

![](https://files.seeedstudio.com/wiki/Xadow_LED_5_multiply_7_v1.0/img/XadowLED5X7.jpg)

Note: when connect Xadow LED 5X7 to Xadow Main Board, you should concern about the connection direction. The connection method is that the unfilled corner of one Xadow module need to connect to the right angle of another module(see four corners of each Xadow module).
The test code for displaying string or charring:
```
```
#include "Wire.h"
#define XADOW_DEBUG 1
#define LEDAddress 0x04

#define DISP_CHAR_5X7    0x80
#define DISP_STRING        0x81
#define SET_DISP_ORIENTATION 0x82
/*Marco definitions for the display orientation of the LED matrix*/
#define RIGHT_TO_LEFT 0
#define LEFT_TO_RIGHT 1
#define POWER_DOWN  0x83
uint8_t buffer[24];
int error;
int n;
char *str = "SeeedStudio123";
void setup(void)
{
    Wire.begin();
    delay(100);
#if 0
    TESTIO();
    if(error==0)
    {
        DDRB|=0x80;
        PORTB&amp;=~0x80;
    }
#endif

}
void loop(void)
{
    for(n=0;n&lt;100;n++)
    {
        dispString(str,strlen(str),150);
        delay(300);
    }
    //display the "seeed0728"(9 characters) on the
    //Xadow LED and the character moving one step costs 150m

}

/**********************************************************************/
/*Function: Send command to Xadow LED to display a string by the I2C. */
/*Parameter:-char* data_,Store a string to display on the Xadow LED.  */
/*          -uint8_t len,The length of the data_.                     */
/*            -uint16_t time,The time of the character moving one    step. */
/*Return:    void                                                        */
void dispString(char* data_,uint8_t len,uint16_t time)
{
    Wire.beginTransmission(LEDAddress);
    Wire.write(DISP_STRING);
    Wire.write(len);
    Wire.write((uint8_t*)data_,len);
    Wire.write(time&gt;&gt;8); //high byte of time
    Wire.write(time);//low byte of time
    Wire.endTransmission();
}
void dispChar(uint8_t data_,uint16_t time)
{
    Wire.beginTransmission(LEDAddress);
    Wire.write(DISP_CHAR_5X7);
    Wire.write(data_);
    Wire.write(time&gt;&gt;8); //high byte of time
    Wire.write(time);//low byte of time
    Wire.endTransmission();
}
void setDispOrientation(uint8_t orientation)
{
    Wire.beginTransmission(LEDAddress);
    Wire.write(SET_DISP_ORIENTATION);
    Wire.write(orientation);
    Wire.endTransmission();
}
void powerDown()
{
    Wire.beginTransmission(LEDAddress);
    Wire.write(POWER_DOWN);
    Wire.endTransmission();
    digitalWrite(3,HIGH);
}
void wakeUp()
{
    Wire.beginTransmission(LEDAddress);
    Wire.endTransmission();
}

void TESTIO(void)
{

    DDRB|=0x0e;
    PORTB&amp;=~0x0e;
    DDRF|=0x01;
    PORTF&amp;=~0x01;
    DDRD&amp;=~0x0f;

    PORTB|=0x04;
    PORTF|=0x01;
    delay(30);
    if(!(PIND&amp;0x01))
    {
        error=1;
    }
    if(PIND&amp;0x02)
    {
        error=1;
    }
    if(!(PIND&amp;0x04))
    {
        error=1;
    }
    if(PIND&amp;0x08)
    {
        error=1;
    }
    PORTB&amp;=~0x04;
    PORTB|=0x0a;
    PORTF&amp;=~0x01;
    delay(30);
    if(PIND&amp;0x01)
    {
        error=1;
    }
    if(!(PIND&amp;0x02))
    {
        error=1;
    }
    if(PIND&amp;0x04)
    {
        error=1;
    }
    if(!(PIND&amp;0x08))
    {
        error=1;
    }
    Serial.println(error);
}
```
You can see the belowing scene after uploading the code to Xadow Main Board.

![](https://files.seeedstudio.com/wiki/Xadow_LED_5_multiply_7_v1.0/img/LED_Effect_Diagram_.JPG)


## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_LED_5_multiply_7_v1.0/res/Xadow_LED_5X7_eagle_file.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


##  Resources
---
*   [Xadow LED 5X7 Eagle File](https://files.seeedstudio.com/wiki/Xadow_LED_5_multiply_7_v1.0/res/Xadow_LED_5X7_eagle_file.zip)

*   [Xadow LED Firmware](https://files.seeedstudio.com/wiki/Xadow_LED_5_multiply_7_v1.0/res/Xadow_LED_Firmware.zip)

## Tech Support
Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>