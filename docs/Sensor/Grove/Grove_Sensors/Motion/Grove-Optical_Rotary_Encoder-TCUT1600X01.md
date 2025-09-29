---
description: Grove - Optical Rotary Encoder(TCUT1600X01)
title: Grove - Optical Rotary Encoder(TCUT1600X01)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Optical_Rotary_Encoder-TCUT1600X01
last_update:
  date: 1/7/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/main.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/main.jpg" alt="pir" width={600} height="auto" /></p>

The Grove - Optical Rotary Encoder(TCUT1600X01) is a transmissive sensor that includes an infrared emitter and two phototransistor detectors. Usually, the infrared emitter emits infrared rays, the phototransistor detectors receives the infrared rays, then the phototransistor is turned on, both of the output is High, the on-board LED indicators light up. When there is an obstacle blocking, the phototransistor can not receive the infrared rays, so the phototransistor will be turned off and both of the output will be Low, the on-board LED indicators fade away.

You can use this sensor as a rotary encoder to detect the speed or rotation, and thanks to the two phototransistor detectors, you even can detect the rotation direction.

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Grove-Optical-Rotary-Encoder%28TCUT1600X01%29-p-3142.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p> -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Optical-Rotary-Encoder%28TCUT1600X01%29-p-3142.html)

## Features

- Double phototransistor detectors, can determine the direction of rotation
- On-board LED indicators
- Grove Interface

## Specification

|Item|Value|
|---|---|
|Operating voltage|3.3V / 5V|
|Operating temperature|-40°C to +105°C|
|Storage temperature Range|-40°C to +125°C|
|Emitter wavelength| 950 nm|
|Gap|3 mm|
|Interface|Digital|

## Applications

- Automotive optical sensors
- Accurate position sensor for encoder
- Sensor for motion, speed, and direction
- Sensor for “turn and push” encoding

## Hardware Overview

### Pin Map

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/pin_map.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/pin_map.jpg" alt="pir" width={600} height="auto" /></p>

### Schemaitc

**Power**
<!-- ![](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/schematic.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/schematic.jpg" alt="pir" width={600} height="auto" /></p>

The typical voltage of TCUT1600X01 is 5V, so we use the [MP3120](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/res/MP3120.pdf) current mode step-up converter to provide a stable 5V. The input of MP3120 ranges from 0.8V to 5V, so you can use this module with your Arduino both
in 3.3V and 5V.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/schematic_1.jpg)  -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/schematic_1.jpg" alt="pir" width={600} height="auto" /></p>

When the phototransistor detectors receive the infrared signal, the output should be High, and when the obstacle blocks the infrared, the OUT1 and OUIT2 should be Low. However due to the leakage current, it won't be 0V. The leakage voltage varies with the input voltage.

### Mechanical Drawing
<!-- 
![](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/Mechanical.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/Mechanical.jpg" alt="pir" width={600} height="auto" /></p>

### Directional Detection

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/principle.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/principle.jpg" alt="pir" width={600} height="auto" /></p>

:::tip
    Thanks to the two phototransistor detectors, we can detect the moving direction. If the obstacle moves from the left to right, The output states change should be **11 --> 01 --> 00 --> 10**; in the same way, if the obstacle moves from the right to left, it should be **11 --> 10 --> 00 -->01**.
:::

## Platforms Supported

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg)  | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

## Getting Started

### Play With Arduino

#### Hardware

**Materials required**

| Seeeduino V4.2 | Base Shield | Grove - Optical Rotary Encoder|
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Grove-Optical-Rotary-Encoder%28TCUT1600X01%29-p-3142.html" target="_blank">Get One Now</a>|

:::note
    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy
    
    **2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.
:::

- **Step 1.** Connect the Grove - Optical Rotary Encoder to the **D5** port of the Base Shield.

- **Step 2.** Plug Grove - Base Shield into Seeeduino.

- **Step 3.** Connect Seeeduino to PC via a USB cable.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/connect.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/connect.jpg" alt="pir" width={600} height="auto" /></p>

:::note
        If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.
:::

| Seeeduino     |  Grove - Optical Rotary Encoder         |
|---------------|-------------------------|
| 5V            | Red                     |
| GND           | Black                   |
| D6           | White                    |
| D5           | Yellow                   |

#### Software

:::note
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

- **Step 1.** Install the **Encoder Library** in the Arduino IDE. You can find this library by the following path: **Sketch-->Include Library-->Manage Libraries**

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/path.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/path.jpg" alt="pir" width={600} height="auto" /></p>

Then search for the **encoder** in the pop-up window. Find the **Encoder by Paul Stoffregen**, choose the **Version1.4.1**, then click **Install**.
<p><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/path_1.jpg" alt="pir" width={600} height="auto" /></p>

<!-- When the library is installed you will see <font style="font-weight:bold;color:#00C3CE">INSTALLED</font>, click **Close** then.  -->

When the library is installed you will see **INSTALLED** , click **Close** then.

<p><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/path_2.jpg" alt="pir" width={600} height="auto" /></p>

>Thanks for Paul for his splendid library.

- **Step 2.** Restart the Arduino IDE. Open the example, you can open it in the following three ways：
    1. Open it directly in the Arduino IDE via the path: **File --> Examples --> Encoder --> Basic**.
  
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/path_3.jpg" alt="pir" width={600} height="auto" /></p>

    2. Open it in your computer by click the **Basic.pde** which you can find in the **xxxx\Arduino\libraries\Encoder\examples\Basic**, **XXXX** is the location you installed the Arduino IDE.

  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/path_4.jpg" alt="pir" width={600} height="auto" /></p>

    3. Or, you can just click the icon
     <!-- ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg)   -->
     <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg" alt="pir" width={50} height="auto" /></p>

      in upper right corner of the code block to copy the following code into a new sketch in the Arduino IDE.

```cpp
/* Encoder Library - Basic Example
 * http://www.pjrc.com/teensy/td_libs_Encoder.html
 *
 * This example code is in the public domain.
 */

#include <Encoder.h>

// Change these two numbers to the pins connected to your encoder.
//   Best Performance: both pins have interrupt capability
//   Good Performance: only the first pin has interrupt capability
//   Low Performance:  neither pin has interrupt capability
Encoder myEnc(5, 6);
//   avoid using pins with LEDs attached

void setup() {
  Serial.begin(9600);
  Serial.println("Basic Encoder Test:");
}

long oldPosition  = -999;

void loop() {
  long newPosition = myEnc.read();
  if (newPosition != oldPosition) {
    oldPosition = newPosition;
    Serial.println(newPosition);
  }
}
```

:::tip
    You can change two numbers to the pins connected to your encoder, for the Best Performance: both pins have interrupt capability, so you can change the code line 13 into <mark>Encoder myEnc(2, 3);</mark>, meanwhile, you should connect this sensor to the **D2** of the baseshield.
:::

- **Step 4.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](https://wiki.seeedstudio.com/Upload_Code/).

- **Step 5.** Open the **Serial Monitor** of Arduino IDE by click **Tool-> Serial Monitor**. Or tap the ++ctrl+shift+m++ key at the same time. Set the baud rate to **9600**.

:::success
     If every thing goes well, you will get the result. When you move the obstacle from left to right, the count value will increase by 1; when you move the obstacle from right to left, the count value will be decremented by 1.
:::

```cpp
Basic Encoder Test:
0
1
2
3
4
3
2
1
0
-1
-2
-3
-4
```

### Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)

#### Hardware

- **Step 1.** Things used in this project:

<div class="table-center">
 <table>
  <tr>
   <th>Raspberry pi</th>
      <th>Grove Base Hat for RasPi </th>
      <th>Grove - Optical Rotary Encoder</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/img/main.jpg" style={{width:250, height:'auto'}}/></div></td>
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
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Optical-Rotary-Encoder%28TCUT1600X01%29-p-3142.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

- **Step 2.** Plug the Grove Base Hat into Raspberry.
- **Step 3.** Connect the Grove - OLED Display 1.12'' to I2C port of the Base Hat.
- **Step 4.** Connect the Raspberry Pi to PC through USB cable.

#### Software

- **Step 1.** Follow [Setting Software](https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) to configure the development environment install the grove.py to your raspberry pi.
- **Step 2.** Excute below commands to run the code.

```
# virutalenv for Python3
virtualenv -p python3 env
source env/bin/activate
#enter commmand
grove_optical_rotary_encoder
```

Following is the grove_optical_rotary_encoder.py code.

```python

'''
This is the code for
    - Grove - Optical Rotary Encoder(TCUT1600X01) <https://www.seeedstudio.com/Grove-Optical-Rotary-Encoder-TCUT1600X0-p-3142.html>`_

Examples:

    .. code-block:: python

        from grove.grove_button import GroveButton
        import time, sys

        # connect to pin 5 (slot D5)
        PIN = 5
        encoder = GroveOpticalRotaryEncoder(PIN)

        # Read the value every second and detect motion
        while True:
            print("\rPosition: {0}  ".format(encoder.position()), file=sys.stderr, end='')
            time.sleep(0.001)

'''
from __future__ import print_function
import time, sys, signal, atexit
from grove.gpio import GPIO

__all__ = ["GroveOpticalRotaryEncoder"]

# The UPM version rotaryencoder has bug result in segment fault.
# This pure python version could work well.
class GroveOpticalRotaryEncoder(object):
    '''
    Grove optical Rotary Encoder(TCUT1600X01) class

    Args:
        pin(int): the number of gpio/slot your grove device connected.
    '''
    def __init__(self, pin1, pin2 = None):
        pin2 = pin1 + 1 if pin2 is None else pin2
        self.__gpio  = GPIO(pin1, GPIO.IN)
        self.__gpio2 = GPIO(pin2, GPIO.IN)
        self.__gpio.on_event = self.__gpio_event
        self._pos = 0

    # called by GPIO library
    def __gpio_event(self, pin, value):
        v1 = self.__gpio.read()
        if not v1: return
        v2 = self.__gpio2.read()
        self._pos += 1 if v2 else -1

    def position(self, pos = None):
        '''
        set or get the position counter

        Args:
            pos(int):
                optinal, the position counter to be set.

                if not specified, only get the current counter

        Returns:
            (int): current position counter
        '''
        if not pos is None:
            self._pos = pos
        return self._pos

def main():
    from grove.helper import SlotHelper
    sh = SlotHelper(SlotHelper.GPIO)
    pin = sh.argv2pin()

    '''
    from upm.pyupm_rotaryencoder import RotaryEncoder as GroveOpticalRotaryEncoder
    from mraa import getGpioLookup

    mraa_pin1 = getGpioLookup("GPIO%02d" % (pin + 0))
    mraa_pin2 = getGpioLookup("GPIO%02d" % (pin + 1))

    # Instantiate a Grove Rotary Encoder, using signal pins mraa_pin1 & mraa_pin2
    myRotaryEncoder = GroveOpticalRotaryEncoder(mraa_pin1, mraa_pin2);
    '''
    myRotaryEncoder = GroveOpticalRotaryEncoder(pin)

    ## Exit handlers ##
    # This function stops python from printing a stacktrace when you hit control-C
    def SIGINTHandler(signum, frame):
        raise SystemExit

    # This function lets you run code on exit, including functions from myRotaryEncoder
    def exitHandler():
        print("Exiting")
        sys.exit(0)

    # Register exit handlers
    atexit.register(exitHandler)
    signal.signal(signal.SIGINT, SIGINTHandler)

    # Read the value every second and detect motion
    counter = 0
    while True:
        print("\rPosition: {0}  ".format(myRotaryEncoder.position()), file=sys.stderr, end='')
        counter += 1
        if counter >= 5000:
            print("")
            counter = 0
        time.sleep(0.001)

if __name__ == '__main__':
    main()
```

```python
（env）pi@raspberrypi:~ grove_optical_rotary_encoder
```

:::tip success
When the command runs successfully, it will print out the value every second and detect motion.
:::

```python
# Read the value every second and detect motion
        while True:
            print("\rPosition: {0}  ".format(encoder.position()), file=sys.stderr, end='')
            time.sleep(0.001)
```

You can quit this program by simply press `ctrl`+`c`.

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/res/Grove-Optical_Rotary_Encoder-TCUT1600X01.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[Zip]** [Grove - Optical Rotary Encoder eagle files](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/res/Grove-Optical_Rotary_Encoder-TCUT1600X01.zip)

- **[PDF]** [Datasheet of TCUT1600X01](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/res/Optical_Sensor.pdf)

- **[PDF]** [Datasheet of MP3120](https://files.seeedstudio.com/wiki/Grove-Optical_Rotary_Encoder-TCUT1600X01/res/MP3120.pdf)

## Project

This is the introduction Video of this product, simple demos, you can have a try.

<iframe width={560} height={315} src="https://www.youtube.com/embed/Ds7kBVdeY4U?rel=0" frameBorder={0} allow="autoplay; encrypted-media" allowFullScreen />

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
