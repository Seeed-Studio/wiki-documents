---
title: Grove - Buzzer
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-Buzzer/
slug: /Grove-Buzzer
last_update:
  date: 01/09/2022
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/Grove_Buzzer/images/Grove%20Buzzer.jpg)

The Grove - Buzzer module has a [piezo buzzer](https://en.wikipedia.org/wiki/Buzzer#Piezoelectric) as the main component. The piezo can be connected to digital outputs, and will emit a tone when the output is HIGH. Alternatively, it can be connected to an analog pulse-width modulation output to generate various tones and effects.

[![](https://files.seeedstudio.com/wiki/Grove_Buzzer/images/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)

## Version

| Product Version              | Changes                                                                                                                                                                                    | Released Date |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove-Buzzer V1.0| Initial                                                                                                                                                                                    | Nov 25 2010      |
| Grove-Buzzer V1.1 | Add S9013 Transistor                                                                                                                                                                                    | May 30 2014      |

## Features

- Easy to use piezoelectric buzzer
- Uses Standard 4-pin Grove Cables to connect to other Grove modules such as - Grove Power Modules and Grove - Base Shield

:::tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::

## Specifications

| Items              | Specification |
|--------------------|---------------|
| Operating Voltage  | 3.3V/5V       |
| Sound Output       | ≥85dB         |
| Resonant Frequency | 2300±300Hz    |

## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

## Getting Started

### Play With Arduino

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield|  Grove - Buzzer |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Buzzer/img/buzzer_s.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|

- **Step 2.** Connect Grove-Buzzer to port D6 of Grove-Base Shield.
- **Step 3.** Plug Grove - Base Shield into Seeeduino.
- **Step 4.** Connect Seeeduino to PC through a USB cable.

![](https://files.seeedstudio.com/wiki/Grove_Buzzer/img/seeeduino_buzzer.jpg)

:::note
 If we don't have Grove Base Shield, We also can directly connect Grove-buzzer to Seeeduino as below.
:::
| Seeeduino       | Grove-Buzzer |
|---------------|-------------------------|
| 5V           | Red                     |
| GND           | Black                   |
| Not Conencted | White                   |
| D6            | Yellow                  |

#### Software

- Step 1. Copy the code into Arduino IDE and upload.

```c
void setup()
{
  pinMode(6, OUTPUT);
}

void loop()
{
  digitalWrite(6, HIGH);
  delay(1000);
  digitalWrite(6, LOW);
  delay(1000);
}
```

- Step 2. We will hear the buzzer on and off.

### Play with Codecraft

#### Hardware

**Step 1.** Connect Grove - Buzzer to port D6 of a Base Shield.

**Step 2.** Plug the Base Shield to your Seeeduino/Arduino.

**Step 3.** Link Seeeduino/Arduino to your PC via an USB cable.

#### Software

**Step 1.** Open [Codecraft](https://ide.chmakered.com/), add Arduino support, and drag a main procedure to working area.

:::note
    If this is your first time using Codecraft, see also [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).
:::
**Step 2.** Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page.

![cc](https://files.seeedstudio.com/wiki/Grove_Buzzer/img/cc_Buzzer.png)

Upload the program to your Arduino/Seeeduino.

:::success
    When the code finishes uploaded, you will hear the buzzer sound intermittently.
:::

### Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)

#### Hardware

- **Step 1**. Things used in this project:

| Raspberry pi | Grove Base Hat for RasPi| Grove -  Buzzer|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Buzzer/img/buzzer_s.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|

- **Step 2**. Plug the Grove Base Hat into Raspberry Pi.
- **Step 3**. Connect the Grove Buzzer to PWM port of the Base Hat.
- **Step 4**. Connect the Raspberry Pi to PC through USB cable.
![](https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect1.jpg)

#### Software

:::note
     If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.
:::

- **Step 1**. Follow [Setting Software](https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation) to configure the development environment，and install the grove.py to your raspberry pi.

- **Step 2**. Excute below command to run the code.

```
# virutalenv for Python3
virtualenv -p python3 env
source env/bin/activate
# enter commmand
grove_pwm_buzzer
```

Following is the grove_pwm_buzzer.py code.

```python
from __future__ import print_function

import time
import RPi.GPIO as GPIO

def main():
    from grove.helper import helper
    # helper.root_check()

    print("Insert Grove-Buzzer to Grove-Base-Hat slot PWM[12 13 VCC GND]")
    # Grove Base Hat for Raspberry Pi
    pin = 12
    GPIO.setmode(GPIO.BCM)
    GPIO.setup(pin, GPIO.OUT)

    # create PWM instance
    pwm = GPIO.PWM(pin, 10)
    pwm.start(0) 

    chords = [1047, 1175, 1319, 1397, 1568, 1760, 1976]
    # Play sound (DO, RE, MI, etc.), pausing for 0.5 seconds between notes
    try:
        for note in chords:
            pwm.ChangeFrequency(note)
            pwm.ChangeDutyCycle(95)
            time.sleep(0.5) 
    finally:
        pwm.stop()
        GPIO.cleanup()

    print("Exiting application")

if __name__ == '__main__':
    main()
```

:::success
    If everything goes well, the buzzer will ring a few times and then stop, the program will automatically exit.
 :::

You can quit this program by simply press **ctrl+c**.

### Play With Raspberry Pi (with GrovePi_Plus)

#### Hardware

- **Step 1.** Prepare the below stuffs:

| Raspberry pi | GrovePi_Plus | Grove - Buzzer |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Buzzer/img/buzzer_s.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|

- **Step 2.** Plug the GrovePi_Plus into Raspberry.
- **Step 3.** Connect Grove-Buzzer to D8 port of GrovePi_Plus.
- **Step 4.** Connect the Raspberry to PC through USB cable.

![](https://files.seeedstudio.com/wiki/Grove_Buzzer/img/rasp_buzzer.jpg)

#### Software

:::note
     If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.
:::

- **Step 1.** Follow [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) to configure the development environment.
- **Step 2.** Git clone the Github repository.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Step 3.** Excute below commands.

```
cd ~/GrovePi/Software/Python
python3 grove_buzzer.py
```

Here is the grove_buzzer.py code.

```python
import time
import grovepi

# Connect the Grove Buzzer to digital port D8
# SIG,NC,VCC,GND
buzzer = 8

grovepi.pinMode(buzzer,"OUTPUT")

while True:
    try:
        # Buzz for 1 second
        grovepi.digitalWrite(buzzer,1)
        print ('start')
        time.sleep(1)

        # Stop buzzing for 1 second and repeat
        grovepi.digitalWrite(buzzer,0)
        print ('stop')
        time.sleep(1)

    except KeyboardInterrupt:
        grovepi.digitalWrite(buzzer,0)
        break
    except IOError:
        print ("Error")
```

- Step 4. We will hear the buzzer on and off.

```
(env)pi@raspberrypi:~ grove_pwm_buzzer
start
stop
start
stop
```

### Play With TI LaunchPad

#### Hardware

- This example shows how to use the Grove buzzer module to play melodies. It sends a square wave of the appropriate frequency to the buzzer, generating the corresponding tone.

![](https://files.seeedstudio.com/wiki/Grove_Buzzer/images/Buzzer.jpg)

#### Software

```c
/*
  Buzzer
 The example use a buzzer to play melodies. It sends a square wave of the
 appropriate frequency to the buzzer, generating the corresponding tone.

 The circuit:
 * Buzzer attached to pin39 (J14 plug on Grove Base BoosterPack)
 * one side pin (either one) to ground
 * the other side pin to VCC
 * LED anode (long leg) attached to RED_LED
 * LED cathode (short leg) attached to ground

 * Note:
 This example code is in the public domain.

 https://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Kit_v1.1b#Grove_-_Buzzer

*/

/* Macro Define */
#define BUZZER_PIN               39            /* sig pin of the buzzer */

int length = 15;         /* the number of notes */
char notes[] = "ccggaagffeeddc ";
int beats[] = { 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 4 };
int tempo = 300;

void setup()
{
    /* set buzzer pin as output */
    pinMode(BUZZER_PIN, OUTPUT);
}

void loop()
{
    for(int i = 0; i < length; i++) {
        if(notes[i] == ' ') {
            delay(beats[i] * tempo);
        } else {
            playNote(notes[i], beats[i] * tempo);
        }
        delay(tempo / 2);    /* delay between notes */
    }

}

/* play tone */
void playTone(int tone, int duration) {
    for (long i = 0; i < duration * 1000L; i += tone * 2) {
        digitalWrite(BUZZER_PIN, HIGH);
        delayMicroseconds(tone);
        digitalWrite(BUZZER_PIN, LOW);
        delayMicroseconds(tone);
    }
}

void playNote(char note, int duration) {
    char names[] = { 'c', 'd', 'e', 'f', 'g', 'a', 'b', 'C' };
    int tones[] = { 1915, 1700, 1519, 1432, 1275, 1136, 1014, 956 };

    // play the tone corresponding to the note name
    for (int i = 0; i < 8; i++) {
        if (names[i] == note) {
            playTone(tones[i], duration);
        }
    }
}
```

# Grove - Buzzer Schematic Files v1.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Buzzer/resources/Grove_-_Buzzer_v1.0_Source_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

# Grove - Buzzer Schematic Files v1.1

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Buzzer/resources/Grove-Buzzer_V1.1_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resources

- **[Eagle&PDF]** [Grove - Buzzer Schematic Files v1.1](https://files.seeedstudio.com/wiki/Grove_Buzzer/resources/Grove-Buzzer_V1.1_eagle.zip)
- **[Eagle&PDF]** [Grove - Buzzer Schematic Files v1.0](https://files.seeedstudio.com/wiki/Grove_Buzzer/resources/Grove_-_Buzzer_v1.0_Source_File.zip)
- **[DataSheet]** [S9013datasheet](https://files.seeedstudio.com/wiki/Grove_Buzzer/resources/S9013.pdf)
- **[More Reading]** [Wooden Laser Gun](https://www.instructables.com/id/DIY-a-Wooden-Laser-Gun-As-a-Xmas-Present-for-Your-/)
- **[Codecraft]** [CDC File](https://files.seeedstudio.com/wiki/Grove_Buzzer/res/Grove_Buzzer_CDC_File.zip)

![](https://files.seeedstudio.com/wiki/Grove_Button/img/gun.jpg)

Inspired by OVERWATCH, we have made a very cool Wooden Laser Gun toy for fun these day!

The Wooden Laser Gun and the Gun Target are all based on an Arduino board called Seeeduino Lotus. The laser emitter on the Laser Gun is controlled to fire laser pulse to "activate" the Gun Target. And there are 3 light sensors on the Gun Target to detect the laser pulse. It seems very simple right? If you are interested in our project, please make one for yourself or your child! It's worth to spend one day DIY it as a Xmas present.

## Proejcts

**Grove - Introduction in a Buzzer**: My first steps with the Grove 'plug & play' components. This is primarily a Buzzer.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/ingo-lohs/grove-introduction-in-a-buzzer-981efd/embed' width='350'></iframe>

**Water Waste Monitor**: Millions of gallons of water are wasted every year. Learn to conserve water with this project!

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/exp0nge/water-waste-monitor-98378e/embed' width='350'></iframe>

**Buzzer Grove module**:

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/XBqvG6R1ueA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/ug8dJHPmdMA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

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
