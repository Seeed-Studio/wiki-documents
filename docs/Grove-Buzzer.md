---
title: Grove - Buzzer
category: Actuator
bzurl: https://www.seeedstudio.com/Grove-Buzzer-p-768.html
oldwikiname: Grove - Buzzer
prodimagename: Grove%20Buzzer.jpg
surveyurl: https://www.surveymonkey.com/r/grove-buzzer
sku: 107020000
---

---
![](https://github.com/SeeedDocument/Grove_Buzzer/raw/master/images/Grove%20Buzzer.jpg)
The Grove - Buzzer module has a [piezo buzzer](https://en.wikipedia.org/wiki/Buzzer#Piezoelectric) as the main component. The piezo can be connected to digital outputs, and will emit a tone when the output is HIGH. Alternatively, it can be connected to an analog pulse-width modulation output to generate various tones and effects.

[![](https://github.com/SeeedDocument/Grove_Buzzer/raw/master/images/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)

## Features
---
- Easy to use piezoelectric buzzer
- Uses Standard 4-pin Grove Cables to connect to other Grove modules such as - [Grove Power Modules](/Grove/Grove_System/) and Grove - Base Shield

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeed.cc/Grove_System/)

## Specifications
---
- Operating Voltage: 4-8V
- Sound Output: ≥85dB
- Resonant Frequency: 2300±300Hz

## Usage
---
**Standalone**

Follow these steps to build a sample circuit using this module but without using any microcontroller:

1. Connect the buzzer module to the output side of your circuit (to the right of the power module). On the input side of the circuit, you may use a range of sensor based input modules (**Grove - Light Sensor**, **Grove - Button** or **Grove - Slide Potentiometer**).
2. Power up the circuit.
3. The buzzer will start to "buzz" when the input module supplies a trigger:
  - If using with a momentary switch like the one on the **Grove - Button module**, simply press the button to turn ON the buzzer.
  - If using with a **Grove - Slide Potentiometer**, move the slider from the GND position to VCC and see how the tone and frequency of the buzzer vary as the supplied voltage increases.
  - If using with a **Grove - Light Sensor** connected directly to the input side of the circuit, you should hear the buzzer in bright light and it should stop "buzzing" in the dark. If you want the buzzer to sound only in the dark, add a **Grove - NOT** module between the light sensor and the power module.

You can use either the **Grove - USB Power** module or the **Grove - DC Jack Power** module for the Grove circuit.

**With Arduino**

Follow these simple steps to build a Grove circuit using the buzzer:
1. When using the module in conjunction with an Arduino or a **Seeeduino**, use the **Grove - Base Shield** and connect the Grove - Buzzer module to the shield using a designated Grove Interface as shown below:

![](https://github.com/SeeedDocument/Grove_Buzzer/raw/master/images/Conn-four.jpg)

2. Upload the following sample sketch to make the Buzzer make a beeping noise:

```c
// Project Four - Noise maker
//

void setup()
{
  pinMode(6, OUTPUT);
}

void loop()
{
  digitalWrite(6, HIGH);
  delay(analogRead(0));
  digitalWrite(6, LOW);
  delay(analogRead(0));
}
```
**With TI LaunchPad**

Playing Music (Buzzer)

- This example shows how to use the Grove buzzer module to play melodies. It sends a square wave of the appropriate frequency to the buzzer, generating the corresponding tone.

![](https://github.com/SeeedDocument/Grove_Buzzer/raw/master/images/Buzzer.jpg)

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

 http://www.seeedstudio.com/wiki/index.php?title=GROVE_-_Starter_Kit_v1.1b#Grove_-_Buzzer

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
**With Raspberry Pi**
The following is a simple example to show how to use the Grove - Buzzer module on Raspberry Pi. The buzzer makes noise and delays one second. Then quiet for a second.It repeats the above action.

![](https://github.com/SeeedDocument/Grove_Buzzer/raw/master/images/GrovePi%2B_Grove_buzzer.jpg)

```python
# GrovePi + Grove Buzzer
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
        print 'start'
        time.sleep(1)

        # Stop buzzing for 1 second and repeat
        grovepi.digitalWrite(buzzer,0)
        print 'stop'
        time.sleep(1)

    except KeyboardInterrupt:
        grovepi.digitalWrite(buzzer,0)
        break
    except IOError:
        print "Error"
```
**Run the program**

Find the path to the file(According to your own path)
```cd GrovePi/Software/Python/
```
Run Program
```sudo python grove_buzzer.py
```

##Project

![](https://raw.githubusercontent.com/SeeedDocument/Seeeduino_Lotus/master/img/gun.jpg)

Inspired by OVERWATCH, we have made a very cool Wooden Laser Gun toy for fun these day!

The Wooden Laser Gun and the Gun Target are all based on an Arduino board called Seeeduino Lotus. The laser emitter on the Laser Gun is controlled to fire laser pulse to "activate" the Gun Target. And there are 3 light sensors on the Gun Target to detect the laser pulse. It seems very simple right? If you are interested in our project, please make one for yourself or your child! It's worth to spend one day DIY it as a Xmas present.    

[![](https://raw.githubusercontent.com/SeeedDocument/Seeed-WiKi/master/docs/images/make.png)](http://www.instructables.com/id/DIY-a-Wooden-Laser-Gun-As-a-Xmas-Present-for-Your-/)


## Resources
---
- [Grove - Buzzer Source Files v1.1](https://github.com/SeeedDocument/Grove_Buzzer/raw/master/resources/Grove-Buzzer_V1.1_eagle.zip)
- [Grove - Buzzer Source Files v1.0 (Eagle and pdf)](https://github.com/SeeedDocument/Grove_Buzzer/raw/master/resources/Grove_-_Buzzer_v1.0_Source_File.zip)
- [S9013datasheet](https://github.com/SeeedDocument/Grove_Buzzer/raw/master/resources/S9013.pdf)
- [Schematic at Easyeda](https://easyeda.com/Seeed/Grove_Buzzer_v1_2-c713baf3c1774da39ce0c995544ce5da)