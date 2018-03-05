---
title: Grove - Speaker
category: Actuator
bzurl: https://seeedstudio.com/Grove-Speaker-p-1445.html
oldwikiname: Grove_-_Speaker
prodimagename: Grove_Speaker_01.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/product/Grove Speaker.jpg
surveyurl: https://www.research.net/r/Grove-Speaker
sku: 107020001
tags: grove_digital, io_5v, plat_duino, plat_wio
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Speaker/master/img/Grove_Speaker_01.jpg)

The Grove- Speaker is a module which consists of power amplification and voice outputs. The loudness can be adjusted by the on-board potentiometer. With different input frequencies, the loud-speaker generates different tones. Coding the music into arduino, DIY your own music box!

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/Grove-Speaker-p-1445.html)

Features
-------

-   Volume Adjustable
-   Grove Interface

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeed.cc/Grove_System/)


Specifications
-------------

| Item            | Min | Typical | Max | Unit |
|-----------------|-----|---------|-----|------|
| Working Voltage | 4.0 | 5.0     | 5.5 | VDC  |
| Voltage Gain    | -   | -       | 46  | db   |
| Band Width      | -   | -       | 20  | KHz  |

Platforms Supported
-------------------

Usage
-----

The speaker can emit a variety of sounds like a car horn, doorbell and ignition . The different sounds are based on the frequency of the input signal.

You can supply different frequency signal to this module with Arduino. Arduino generates these signal via PWM or even digital write and delay.Here we are going to show you how to generate these signals using *delay()*, the speaker sound bass 1~7.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Speaker/master/img/Tone.jpg)

```
/*macro definition of Speaker pin*/
#define SPEAKER 3

int BassTab[]={1911,1702,1516,1431,1275,1136,1012};//bass 1~7

void setup()
{
    pinInit();
}
void loop()
{
        /*sound bass 1~7*/
    for(int note_index=0;note_index<7;note_index++)
    {
        sound(note_index);
        delay(500);
    }
}
void pinInit()
{
    pinMode(SPEAKER,OUTPUT);
    digitalWrite(SPEAKER,LOW);
}
void sound(uint8_t note_index)
{
    for(int i=0;i<100;i++)
    {
        digitalWrite(SPEAKER,HIGH);
        delayMicroseconds(BassTab[note_index]);
        digitalWrite(SPEAKER,LOW);
        delayMicroseconds(BassTab[note_index]);
    }
}
```
<div class="admonition note">
<p class="admonition-title">Note</p>
Due to the influence of the capacitance, the module can only output the bass signal, and the treble is unable to emit.
</div>

Resources
--------

-   [Grove - Speaker Eagle File](https://raw.githubusercontent.com/SeeedDocument/Grove-Speaker/master/res/Grove-Speaker_Eagle_File.zip)
-   [How to generate different tone with MCU](https://raw.githubusercontent.com/SeeedDocument/Grove-Speaker/master/res/Tone.pdf)
-   [Grove\_-\_Speaker\_v1.0\_brd.pdf](https://raw.githubusercontent.com/SeeedDocument/Grove-Speaker/master/res/Grove-Speaker_v1.0_brd.pdf)
-   [Grove\_-\_Speaker\_v1.0\_sch.pdf](https://raw.githubusercontent.com/SeeedDocument/Grove-Speaker/master/res/Grove-Speaker_v1.0_sch.pdf)
-   [LM386 Low Voltage Audio Power Amplifier Datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-Speaker/master/res/LM386_Low_Voltage_Audio_Power_Amplifier_Datasheet.pdf)


<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_Speaker -->
