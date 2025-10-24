---
description: Grove - 16x2 LCD
title: Grove - 16x2 LCD
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-16x2_LCD_Series
last_update:
  date: 1/7/2023
  author: shuxu hu
---

<!-- <div align=center><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/main.jpg"/><figcaption><b></b><i></i></figcaption></a>
</figure></div> -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/main.jpg" alt="pir" width={600} height="auto" /></p>

Grove - 16 x 2 LCD is a perfect I2C LCD display for Arduino and Raspberry Pi with high contrast and easy deployment. 16x2 means two lines and each line has 16 columns, 32 characters in total. With the help of Grove I2C connector, only 2 signal pins and 2 power pins are needed. You don't even need to care about how to connect these pins. Just plug it into the I2C interface on Seeeduino or Arduino/Raspberry Pi+baseshield via the Grove cable. There won't be complicated wiring, soldering, worrying about burning the LCD caused by the wrong current limiting resistor.

## Versions

|Version|Order|
|---|---|
|The Grove - 16 x 2 LCD (Black on Yellow)|[Buy Now](https://www.seeedstudio.com/Grove-16-x-2-LCD-%28Black-on-Yellow%29-p-3198.html)|
|The Grove - 16 x 2 LCD (Black on Red)|[Buy Now](https://www.seeedstudio.com/Grove-16-x-2-LCD-%28Black-on-Red%29-p-3197.html)|
|The Grove - 16 x 2 LCD (White on Blue) |[Buy Now](https://www.seeedstudio.com/Grove-16-x-2-LCD-%28White-on-Blue%29-p-3196.html)|

:::note
         The [Grove - LCD RGB Backlight](https://wiki.seeedstudio.com/Grove-LCD_RGB_Backlight/) has been well received since its inception. Based on customer feedback, now, we bring more cost-effective monochrome backlight derivative for you.
:::
Except for RGB backlights, these three products are almost identical to the the Grove - LCD RGB Backlight, they are all 16 characters wide, 2 rows with high brightness backlight.

## Pre-reading

An introduction of **What is a Grove - 16 x 2 LCD** and **How does it work** is strongly recommended reading ahead if you are not familiar with it. Please visit our **[blog](https://www.seeedstudio.com/blog/2020/01/20/how-to-use-16x2-lcd-with-arduino-grove-lcd-rgb-backlight/)** for detailed information.

## Features

- Display construction: 16 Characters * 2 Lines
- Display mode: STN
- On board MCU
- I2C-bus interface
- Support English and Japanese fonts

## Specification

|Item|Value|
|---|---|
|Operating Voltage|3.3V / 5V|
|Operating temperature|0 to 50℃|
|Storage temperature|-10 to 60℃|
|Driving method|1/16 duty, 1/5 bias|
|Interface|I^2^C|
|I^2^C Address|0X3E|

## Typical Applications

- Temperature display
- Time display
- Any project that requires a simple display

## Platforms Supported

|Arduino|Raspberry|ArduPy|
|---|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/ArduPy-Logo.png" alt="pir" width={600} height="auto" /></p>|

:::caution
         The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

## Getting Started

### Play With Arduino

#### Materials required

| Seeeduino V4.2 | Base Shield|  Grove - 16 x 2 LCD |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/perspective.jpg" alt="pir" width={600} height="auto" /></p>|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-16-x-2-LCD-%28Black-on-Yellow%29-p-3198.html)|

:::note
        * Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy.
    
        * Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.

#### Hardware Overview

**I2C Pull-Up Resistor**

The first version of Grove - 16 x 2 LCD series does not have a built-in pull-up resistor, nor does it provide a pad to solder the optional pull-up resistor. We have redesigned the module, and the new version has built-in pull-up resistors.  

 If you have an older version on your hand, you can solder a 10kΩ DIP resistor yourself on the back pad of the Grove connector. Please follow the picture below, solder a 10kΩ DIP resistor between **VCC** and **SCL** pins and a 10kΩ DIP resistor between **VCC** and **SDA** pins.

<!-- <div align=center><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/I2C-R.jpg"/><figcaption><b></b><i></i></figcaption></a>
</figure></div> -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/I2C-R.jpg" alt="pir" width={600} height="auto" /></p>

**Outline**

<!-- <div align=center><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/outline.jpg"/><figcaption><b></b><i></i></figcaption></a>
</figure></div> -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/outline.jpg" alt="pir" width={600} height="auto" /></p>

#### Hardware Connection

<!-- ![](https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/connect.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/connect.jpg" alt="pir" width={600} height="auto" /></p>

| Seeeduino      |  Grove Cable       | Grove - 16 x 2 LCD |
|--------------- |--------------------|-----|
| GND            | Black              | GND |
| 5V or 3.3V     | Red                | VCC |
| SDA            | White              | SDA |
| SCL            | Yellow             | SCL |

- **Step 1.** Connect the Grove - 16 x 2 LCD to port **I^2^C** of Grove-Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino and connect Seeeduino to PC via a USB cable.

#### Software

:::tip
   If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

- **Step 1.** Download the [Grove-LCD RGB Backlight](https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip) Library from Github.

:::tip
        The Grove - 16 x 2 LCD shares the same library with the [Grove-LCD RGB Backlight](https://wiki.seeedstudio.com/Grove-LCD_RGB_Backlight/). Their usage is almost the same, except that the Grove - 16 x 2 LCD does not support the RGB color API, such as **setRGB()**.
:::

- **Step 2.** Refer to [How to install library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) to install library for Arduino.

- **Step 3.** Restart the Arduino IDE. Open the example, you can open it in the following three ways：

**1).** Open it directly in the Arduino IDE via the path: **File --> Examples --> Grove - LCD RGB Backlight --> HelloWorld**.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/path_1.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/path_1.jpg" alt="pir" width={600} height="auto" /></p>

**2).** Open it in your computer by click the **HelloWorld.ino** which you can find in the folder **XXXX\Arduino\libraries\Grove_LCD_RGB_Backlight-master\examples\HelloWorld**, **XXXX** is the location you installed the Arduino IDE.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/path_2.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/path_2.jpg" alt="pir" width={600} height="auto" /></p>

**3).** Or, you can just click the icon

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" alt="pir" width={50} height="auto" /></p>

in upper right corner of the code block to copy the following code into a new sketch in the Arduino IDE.

```cpp
#include <Wire.h>
#include "rgb_lcd.h"

rgb_lcd lcd;

/*
const int colorR = 255;
const int colorG = 0;
const int colorB = 0;
*/

void setup() 
{
    // set up the LCD's number of columns and rows:
    lcd.begin(16, 2);
    
    //lcd.setRGB(colorR, colorG, colorB);
    
    // Print a message to the LCD.
    lcd.print("hello, world!");

    delay(1000);
}

void loop() 
{
    // set the cursor to column 0, line 1
    // (note: line 1 is the second row, since counting begins with 0):
    lcd.setCursor(0, 1);
    // print the number of seconds since reset:
    lcd.print(millis()/1000);

    delay(100);
}
```

:::note
        * The library file may be updated. This code may not be applicable to the updated library file, so we recommend that you use the first two methods.  

        * Since the **Grove - 16 x 2 LCD** series are all monochrome backlight, you need to comment out the RGB color related code. In the demo code above, i.e., line 6 and line 17.
:::

- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](https://wiki.seeedstudio.com/Upload_Code/).

:::success
        If every thing goes well, you will see the LCD shows the classic sentence: **hello world**.
:::

<!-- <div align=center><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/20200624150013.jpg"/><figcaption><b></b><i></i></figcaption></a>
</figure></div> -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/20200624150013.jpg" alt="pir" width={600} height="auto" /></p>

:::note
        If there's no Base Shield with you, Seeeduino VX Series with I2C interface do work as well.
:::

### Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)

#### Hardware

- **Step 1.** Things used in this project:

<div class="table-center">
 <table>
  <tr>
   <th>Raspberry pi</th>
      <th>Grove Base Hat for RasPi </th>
      <th>Grove - 16x2 LCD</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/perspective.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-16-x-2-LCD-Black-on-Yellow.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

- **Step 2.** Plug the Grove Base Hat into Raspberry.
- **Step 3.** Connect the Grove - 16 x 2 LCD to I2C port of the Base Hat.
- **Step 4.** Connect the Raspberry Pi to PC through USB cable.

#### Software

- **Step 1.** Follow [Setting Software](https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) to configure the development environment install the grove.py to your raspberry pi.
- **Step 2.** Excute below commands to run the code.

```
# virutalenv for Python3
virtualenv -p python3 env
source env/bin/activate
#enter commmand
grove_16x2_lcd
```

Following is the jhd1802.py code.

```python

from grove.display.base import *
from grove.i2c import Bus
import time
import sys

# sphinx autoapi required
__all__ = ["JHD1802"]

class JHD1802(Display):
    '''
    Grove - 16 x 2 LCD, using chip JHD1802.
        - Grove - 16 x 2 LCD (Black on Yellow)
        - Grove - 16 x 2 LCD (Black on Red)
        - Grove - 16 x 2 LCD (White on Blue)

    Also, it's our class name,
    which could drive the above three LCDs.

    Args:
        address(int): I2C device address, default to 0x3E.
    '''
    def __init__(self, address = 0x3E):
        self._bus = Bus()
        self._addr = address
        if self._bus.write_byte(self._addr, 0):
            print("Check if the LCD {} inserted, then try again"
                    .format(self.name))
            sys.exit(1)
        self.textCommand(0x02)
        time.sleep(0.1)
        self.textCommand(0x08 | 0x04) # display on, no cursor
        self.textCommand(0x28)

    @property
    def name(self):
        '''
        Get device name

        Returns:
            string: JHD1802
        '''
        return "JHD1802"

    def type(self):
        '''
        Get device type

        Returns:
            int: ``TYPE_CHAR``
        '''
        return TYPE_CHAR

    def size(self):
        '''
        Get display size

        Returns:
            (Rows, Columns): the display size, in characters.
        '''
        # Charactor 16x2
        # return (Rows, Columns)
        return 2, 16

    def clear(self):
        '''
        Clears the screen and positions the cursor in the upper-left corner.
        '''
        self.textCommand(0x01)

    def draw(self, data, bytes):
        '''
        Not implement for char type display device.
        '''
        return False

    def home(self):
        '''
        Positions the cursor in the upper-left of the LCD.
        That is, use that location in outputting subsequent text to the display.
        '''
        self.textCommand(0x02)
        time.sleep(0.2)

    def setCursor(self, row, column):
        '''
        Position the LCD cursor; that is, set the location
        at which subsequent text written to the LCD will be displayed.

        Args:
            row   (int): the row at which to position cursor, with 0 being the first row
            column(int): the column at which to position cursor, with 0 being the first column

 Returns:
     None
        '''
        # print("setCursor: row={}, column={}".format(row,column))
        self.textCommand((0x40 * row) + (column % 0x10) + 0x80)

    def write(self, msg):
        '''
        Write character(s) to the LCD.

        Args:
            msg (string): the character(s) to write to the display

        Returns:
            None
        '''
        for c in msg:
            self._bus.write_byte_data(self._addr,0x40,ord(c))

    def _cursor_on(self, enable):
        if enable:
            self.textCommand(0x0E)
        else:
            self.textCommand(0x0C)
            
            
    def textCommand(self, cmd):
        self._bus.write_byte_data(self._addr,0x80,cmd)
        
def main():
    import time

    lcd = JHD1802()
    rows, cols = lcd.size()
    print("LCD model: {}".format(lcd.name))
    print("LCD type : {} x {}".format(cols, rows))

    lcd.backlight(False)
    time.sleep(1)

    lcd.backlight(True)
    lcd.setCursor(0, 0)
    lcd.write("hello world!")
    lcd.setCursor(0, cols - 1)
    lcd.write('X')
    lcd.setCursor(rows - 1, 0)
    for i in range(cols):
        lcd.write(chr(ord('A') + i))

    time.sleep(3)
    lcd.clear()

if __name__ == '__main__':
    main()

```

```python
(env)pi@raspberrypi:~ grove_16x2_lcd
```

:::tip success
If everything goes well, you will be able to see the following result
:::

- The backlight will turn off for 1 second, then turn back on.
- LCD will display:

```
hello world!   X
ABCDEFGHIJKLMNOP
```

- After 3 seconds, the entire display will be cleared, and the screen will be blank.

You can quit this program by simply press `ctrl`+`c`.

### Play With Wio Terminal (ArduPy)

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Wio Terminal | Grove - 16 x 2 LCD |
|--------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/perspective.jpg" alt="pir" width={600} height="auto" /></p>|
|[Get One Now](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[Get One Now](https://www.seeedstudio.com/Grove-16-x-2-LCD-%28Black-on-Yellow%29-p-3198.html)|

- **Step 2.** Connect Grove - 16 x 2 LCD to **I2C** port of Wio Terminal.

- **Step 3.** Connect the Wio Terminal to PC through USB Type-C cable.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/WT-LCD.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/WT-LCD.png" alt="pir" width={600} height="auto" /></p>

#### Software

- **Step 1.** Follow [**ArduPy Getting Started**](https://wiki.seeedstudio.com/ArduPy/) to configure the ArduPy development environment on Wio Terminal.

- **Step 2.** Make sure that the ArduPy firmware contains the Grove - 16 x 2 LCD ArduPy library using the following commands. For more information, please follow [**here**](https://wiki.seeedstudio.com/ArduPy/#using-aip-to-include-other-ardupy-librariesfrom-arduino-libraries-example).

```sh
aip install Seeed-Studio/seeed-ardupy-lcd1602
aip build
aip flash
```

- **Step 3.** Copy the following code and save it as `ArduPy-LCD1602.py`:

```python
from arduino import grove_lcd1602
import time

lcd = grove_lcd1602()

def main():
    lcd.print("hello, world!")
    lcd.is_blink_cursor = True
    i = 0
    while True:
        lcd.set_cursor(1, 2) #column 1, row 2
        lcd.print(i)
        time.sleep(1)
        i = i + 1

if __name__ == "__main__":
    main()
```

:::note
       For more API reference, please refer to [**here**](https://github.com/Seeed-Studio/seeed-ardupy-lcd1602).
:::

- **Step 4.** Save the `ArduPy-LCD1602.py` in a location that you know. Run the following command and **replace** `<YourPythonFilePath>` with your `ArduPy-LCD1602.py` location.

```sh
aip shell -n -c "runfile <YourPythonFilePath>"
# Example:
# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-LCD1602.py"
```

- **Step 5.** We will see the results on the Grove - 16 x 2 LCD.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/Ardupy-LCD1602.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/img/Ardupy-LCD1602.png" alt="pir" width={600} height="auto" /></p>

## Resources

- **[PDF]** [JDH_1804_Datasheet](https://files.seeedstudio.com/wiki/Grove-16x2_LCD_Series/res/JDH_1804_Datasheet.pdf)

## Project

This is the introduction Video of this product, simple demos, you can have a try.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/3slfeHKSSCw?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

**Grove IR Universal Remote Project**：Have multiple remotes? Have an Arduino? Operate multiple devices with a single press of a Keyes IR remote.

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/ArduinoBasics/grove-ir-universal-remote-project-7ab87f" width={350} />

**Range tests made easy with the RE-Mote and LCD**：Reduce the number of equipment and preparations required for field testing (2.4GHz and 868MHz), pack everything you need in your hand.

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/alinan/range-tests-made-easy-with-the-re-mote-and-lcd-6e78b3" width={350} />

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
