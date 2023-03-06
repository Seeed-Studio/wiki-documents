---
description: Grove - Tilt Switch
title: Grove - Tilt Switch
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Tilt_Switch
last_update:
  date: 1/6/2023
  author: shuxu hu
---

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Tilt1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Tilt1.jpg" alt="pir" width={600} height="auto" /></p>

The Grove-Tilt Switch is the equivalent of a button, and is used as a digital input. Inside the tilt switch is a pair of balls that make contact with the pins when the case is upright. Tilt the case over and the balls don't touch, thus not making a connection. It is wired to the SIG line, NC is not used on this Grove.

[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Tilt-Switch-p-771.html)

Features
--------

-   Grove Interface
-   Easy to use
-   Simple Grove module

:::tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::   
Specifications
--------------

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
Item
</th>
<th scope="col">
Min
</th>
<th scope="col">
Typical
</th>
<th scope="col">
Max
</th>
<th scope="col">
Unit
</th>
</tr>
<tr align="center">
<th scope="row">
Voltage
</th>
<td>
3
</td>
<td>
5.0
</td>
<td>
5.25
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
Connecting Angle
</th>
<td colspan="3">
10° ~170°
</td>
<td>
-
</td>
</tr>
<tr align="center">
<th scope="row">
Disconnect angle
</th>
<td colspan="3">
190° ~350°
</td>
<td>
-
</td>
</tr>
<tr align="center">
<th scope="row">
Electrical Life
</th>
<td colspan="3">
100,000
</td>
<td>
Cycle
</td>
</tr>
</table>

Platforms Supported
-------------------

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|
:::caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

## Getting Started

### Play With Arduino

The SIG pin of the Grove - Tilt Switch output LOW normally. When the Tilt Switch is upright, a pair of balls inside the tilt switch will contact with the pins and the SIG pin will output HIGH.

The following sketch demonstrates a simple application of using the Tilt Switch and Grove - Button to control the led.

-   As the following picture indicates, the Tilt Switch is connected to digital port 5 of the Grove - Base Shield and the Grove-Button to digital port 7. The LED is connected to digital port 1. The hardware installation is as follows:

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Digitalv1.0b.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Digitalv1.0b.jpg" alt="pir" width={600} height="auto" /></p>

-   Copy and paste code below to a new Arduino sketch.

```
void setup()
{
    pinMode(1, OUTPUT);
    pinMode(5, INPUT);
    pinMode(7, INPUT);
}

void loop()
{

    if (digitalRead(5)==HIGH)
    {
        digitalWrite(1, HIGH);
        delay(100);
        digitalWrite(1, LOW);
    }

    if (digitalRead(7)==HIGH)
    {
        digitalWrite(1, HIGH);
        delay(200);
        digitalWrite(1, LOW);
    }

}
```

-   Upload the code.
-   Then the LED will light when you press the button or activate the tilt-switch. Have a try!

### Play with Codecraft

#### Hardware

**Step 1.** Connect a Grove - Tilt Switch to port D5, then connect a Grove - Button and Grove - Red LED to port D7 and D2 of a Base Shield.

**Step 2.** Plug the Base Shield to your Seeeduino/Arduino.

**Step 3.** Link Seeeduino/Arduino to your PC via an USB cable.

#### Software

**Step 1.** Open [Codecraft](https://ide.chmakered.com/), add Arduino support, and drag a main procedure to working area.

:::note
    If this is your first time using Codecraft, see also [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).
:::
**Step 2.** Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page.

<!-- ![cc](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/cc_Tilt_Switch.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/cc_Tilt_Switch.png" alt="pir" width={600} height="auto" /></p>

Upload the program to your Arduino/Seeeduino.

:::success
    When the code finishes uploaded, tilt the tilt switch or press the button, the LED will goes on.
:::
### Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)

#### Hardware

- **Step 1**. Things used in this project:

| Raspberry pi | Grove Base Hat for RasPi| Grove - Tilt Switch |
|--------------|-------------|-----------------|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Tilt-Switch-p-771.html)|

- **Step 2**. Plug the Grove Base Hat into Raspberry.
- **Step 3**. Connect the tilt switch to port 12 of the Base Hat.
- **Step 4**. Connect the Raspberry Pi to PC through USB cable.


<!-- ![](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Tilt_Hat.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Tilt_Hat.jpg" alt="pir" width={600} height="auto" /></p>

:::note
    For step 3 you are able to connect the tilt switch to **any GPIO Port** but make sure you change the command with the corresponding port number.
:::

#### Software


:::note
     If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.
:::
- **Step 1**. Follow [Setting Software](https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) to configure the development environment.
- **Step 2**. Download the source file by cloning the grove.py library. 

```
cd ~
git clone https://github.com/Seeed-Studio/grove.py

```

- **Step 3**. Excute below commands to run the code.

```
cd grove.py/grove
python3 grove_tilt_switch.py 12

```

Following is the grove_tilt_switch.py code.

```python

import time
from grove.gpio import GPIO


class GroveTiltSwitch(GPIO):
    def __init__(self, pin):
        super(GroveTiltSwitch, self).__init__(pin, GPIO.IN)
        self._on_trigger = None
        self._on_release = None

    @property
    def on_trigger(self):
        return self._on_trigger

    @on_trigger.setter
    def on_trigger(self, callback):
        if not callable(callback):
            return

        if self.on_event is None:
            self.on_event = self._handle_event

        self._on_trigger = callback

    @property
    def on_release(self):
        return self._on_release

    @on_release.setter
    def on_release(self, callback):
        if not callable(callback):
            return

        if self.on_event is None:
            self.on_event = self._handle_event

        self._on_release = callback

    def _handle_event(self, pin, value):

        if value:
            if callable(self._on_trigger):
                self._on_trigger()
        else:
            if callable(self._on_release):
                self._on_release()

Grove = GroveTiltSwitch


def main():
    import sys

    if len(sys.argv) < 2:
        print('Usage: {} pin'.format(sys.argv[0]))
        sys.exit(1)

    swicth = GroveTiltSwitch(int(sys.argv[1]))

    def on_trigger():
        print('Triggered')
    def on_release():
        print("Released.")

    swicth.on_trigger = on_trigger
    swicth.on_release = on_release

    while True:
        time.sleep(1)


if __name__ == '__main__':
    main()


```

:::success
    If everything goes well, you will be able to see the following result when you touch the tilt switch
:::
```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_tilt_switch.py 12
Triggered
Released.
Triggered
^CTraceback (most recent call last):
  File "grove_tilt_switch.py", line 106, in <module>
    main()
  File "grove_tilt_switch.py", line 102, in main
    time.sleep(1)
KeyboardInterrupt

```


You can quit this program by simply press ++ctrl+c++.




### Play With Raspberry Pi (with GrovePi_Plus)


### With Raspberry Pi


:::note
     If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.
:::
1.You should have a Raspberry Pi and a Grovepi or Grovepi+. 

2.You should have completed configuring the development enviroment, otherwise follow [here](/GrovePi_Plus/).

3.Connection

-   Plug Tilt_Switch into grovepi socket D3 by using a grove cable.

4.Navigate to the demos' directory:
```
       cd yourpath/GrovePi/Software/Python/
```
-   To see the code
```
    nano grovepi_tilt_switch.py   # "Ctrl+x" to exit #
```
```
    import time
    import grovepi

    # Connect the Grove Tilt Switch to digital port D3
    # SIG,NC,VCC,GND
    tilt_switch = 3

    grovepi.pinMode(tilt_switch,"INPUT")

    while True:
        try:
            print grovepi.digitalRead(tilt_switch)
            time.sleep(.5)

        except IOError:
            print "Error"
```

5.Run the demo.

```
    sudo python grove_tilt_switch.py
```

6.Result: Put the sensor upright by one side, the SIG pin will output HIGH.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Grovepi_tilt_Switch_00.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Grovepi_tilt_Switch_00.png" alt="pir" width={600} height="auto" /></p>



Reference
---------

The operating angle of Grove-Tilt Switch as shown below:

<!-- ![](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Tilt_Switch_Operate.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Tilt_Switch_Operate.jpg" alt="pir" width={600} height="auto" /></p>

<div class="admonition note">
<p class="admonition-title">Note</p>
The mark J1 on the Grove is the reference terminal.
</div>

# Grove - Tilt Switch v1.0 Eagle File
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/res/Grove-Tilt_Switch_v1.0_Source_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


# Grove - Tilt Switch v1.1 Eagle File
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/res/Grove-Tilt_Switch_v1.1_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


Resources
---------

-   [Grove - Tilt Switch v1.0 Eagle File](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/res/Grove-Tilt_Switch_v1.0_Source_File.zip)
-   [Grove - Tilt Switch v1.1 PDF File](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/res/Grove-Tilt_Switch_v1.1_PDF_File.pdf)
-   [Grove - Tilt Switch v1.1 Eagle File](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/res/Grove-Tilt_Switch_v1.1_Eagle_File.zip)
-   [SW200D Datasheet](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/res/SW200D_datasheet.pdf)
-   [Codecraft CDC File](https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/res/Grove_Tilt_Switch_CDC_File.zip)


<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Tilt_Switch -->

## Tech Support
Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
