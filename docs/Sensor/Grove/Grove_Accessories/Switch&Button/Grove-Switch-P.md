---
description: Grove - Switch(P)
title: Grove - Switch(P)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Switch-P
last_update:
  date: 1/31/2023
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/switch_p.jpg)

This Grove – Switch is a mini SPDT slide, great for “ON/OFF” situations. It is a reliable switch of great build quality that we adopt it on many of our boards. You should stock some for your Grove prototyping system.

What does “P” mean? “P” stands for “panel mount” in this product.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Switch(P)-p-1252.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border="0" /></a></p>

## Version

| Product Version              | Changes                                   | Released Date |
|------------------------------|-------------------------------------------|---------------|
|Grove-Switch(P) V1.0          | Initial                                   | Jul 2012      |

## Features

- Grove Interface
- Easy to use
- Basic Grove element

:::tip
More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::

## Specification

| Parameter             | Value/Range    |
|-----------------------|----------------|
| Operating voltage     | 3.3/5V         |
| Electrical Life       | 10,000 cycles  |
| Operation Force       | 200 ± 50gf     |
| Operation Temperature | -20℃ to +80℃   |
| Size                  | 20mmX20mm      |

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

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield|  Grove-Switch(P) |Grove - Purple LED (3mm)|
|--------------|-------------|-----------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/SwitchP_s.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/grove_led_s.jpg)|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Switch(P)-p-1252.html)|[Get One Now](https://www.seeedstudio.com/Grove-Purple-LED-%283mm%29-p-1143.html)|

- **Step 2.** Connect Grove-Switch(P) to **D2** port of Grove-Base Shield.
- **Step 3.** Connect Grove-LED to **D6** port of Grove-Base Shield.
- **Step 4.** Plug Grove - Base Shield into Seeeduino.
- **Step 5.** Connect Seeeduino to PC via a USB cable.

![](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/seeeduino_switch_led.jpg)

:::note
If we don't have Grove Base Shield, We also can directly connect Grove-Switch(P) and Grove - Purple LED (3mm) to Seeeduino as below.
:::

| Seeeduino | Grove-Switch(P) | Seeeduino | Grove - Purple LED (3mm) |
|-----------|-----------------|-----------|--------------------------|
| 5V        | Red             | 5V        | Red                      |
| GND       | Black           | GND       | Black                    |
| NC        | White           | NC        | White                    |
| D2        | Yellow          | D6        | Yellow                   |

**Software**

- **Step 1.** Please copy below code to Arduio IDE and upload to arduino. If you do not know how to upload the code, please check [how to upload code](https://wiki.seeedstudio.com/Upload_Code/).

```
const int switchPin = 2;     // the number of the pushbutton pin
const int ledPin =  6;      // the number of the LED pin

int switchState = 0;         // variable for reading the pushbutton status

void setup() {
    // initialize the LED pin as an output:
    pinMode(ledPin, OUTPUT);
    // initialize the switch pin as an input:
    pinMode(switchPin, INPUT);
    Serial.begin(9600);
}

void loop(){
    // read the state of the switch value:
    switchState = digitalRead(switchPin);

    if (switchState == HIGH) {
        //turn LED on:
        digitalWrite(ledPin, HIGH);
        Serial.println("switch high!");
    }
    else {
        //turn LED off:
        digitalWrite(ledPin, LOW);
        Serial.println("switch low");
    }
}

```

- **Step 2.** When we switch to high and the LED will be on. We also can see the Serial output as  below.

```
switch high!
switch high!
switch high!
```

### Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)

#### Hardware

- **Step 1**. Things used in this project:

| Raspberry pi | Grove Base Hat for RasPi| Grove - Switch P |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/SwitchP_s.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Switch(P)-p-1252.html)|

- **Step 2**. Plug the Grove Base Hat into Raspberry.
- **Step 3**. Connect the Switch to port 12 of the Base Hat.
- **Step 4**. Connect the Raspberry Pi to PC through USB cable.

![](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/Switch_Hat.jpg)

:::note
For step 3 you are able to connect the switch to **any GPIO Port** but make sure you change the command with the corresponding port number.
:::

#### Software

:::caution
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
python3 grove_switch.py 12

```

Following is the grove_switch.py code.

```python


import time
from grove.gpio import GPIO


class GroveTiltSwitch(GPIO):
    def __init__(self, pin):
        super(GroveTiltSwitch, self).__init__(pin, GPIO.IN)

    @property
    def state(self):
        return super(GroveTiltSwitch, self).read()


Grove = GroveTiltSwitch


def main():
    import sys

    if len(sys.argv) < 2:
        print('Usage: {} pin'.format(sys.argv[0]))
        sys.exit(1)

    swicth = GroveTiltSwitch(int(sys.argv[1]))


    while True:
        if swicth.state is 1:
            print("on")
        else:
            print("off")
        time.sleep(1)


if __name__ == '__main__':
    main()


```

:::tipsuccess
    If everything goes well, you will be able to see the following result
:::

```python

pi@raspberrypi:~/grove.py/grove $ python3 grove_switch.py 12
off
off
on
off
on
on
off
^CTraceback (most recent call last):
  File "grove_switch.py", line 70, in <module>
    main()
  File "grove_switch.py", line 66, in main
    time.sleep(1)
KeyboardInterrupt


```

You can quit this program by simply press ++ctrl+c++.

### Play With Raspberry Pi (with GrovePi_Plus)

**Hardware**

- **Step 1.** Prepare the below stuffs:

| Raspberry pi | GrovePi_Plus | Grove-Switch(P) |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/SwitchP_s.jpg)|
|[Get One Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get One Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Get One Now](https://www.seeedstudio.com/Grove-Switch(P)-p-1252.html)|

- **Step 2.** Plug the GrovePi_Plus into Raspberry.
- **Step 3.** Connect Grove-Switch(P) to **D3** port of GrovePi_Plus.
- **Step 4.** Connect the Raspberry to PC through USB cable.

![](https://files.seeedstudio.com/wiki/Grove-Switch-P/img/rpi_switch.jpg)

**Software**

:::caution
If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.
:::

- **Step 1.** Follow [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) to configure the development environment.
- **Step 2.** Git clone the Github repository.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Step 3.** Excute below commands to monitor the switch status.

```python
cd ~/GrovePi/Software/Python
python3 grove_switch.py
```

Here is the grove_switch.py code.

```python
import time
import grovepi

# Connect the Grove Switch to digital port D3
# SIG,NC,VCC,GND
switch = 3

grovepi.pinMode(switch,"INPUT")

while True:
    try:
        print(grovepi.digitalRead(switch))
        time.sleep(.5)

    except IOError:
        print ("Error")
```

- **Step 4.** We will see the switch status as below.

```python
pi@raspberrypi:~/GrovePi/Software/Python $ python3 grove_switch.py 
1
1
0
0
0
```

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Switch-P/res/Grove-Switch-P-Eagle_File_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[Eagle&PDF]** [Grove-Switch(P) Schematic](https://files.seeedstudio.com/wiki/Grove-Switch-P/res/Grove-Switch-P-Eagle_File_v1.0.zip)

## Projects

**Using a Switch to Open and Close a Relay**: You will learn the value of a switch, with its High and Low function. In addition you will learn how to use a relay as an actuator.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/sodaqmoja/using-a-switch-to-open-and-close-a-relay-3329ec/embed' width='350'></iframe>

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
