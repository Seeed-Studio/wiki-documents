---
name: Grove - Speaker
category: Actuator
bzurl: https://seeedstudio.com/Grove-Speaker-p-1445.html
oldwikiname: Grove_-_Speaker
prodimagename: Grove_Speaker_01.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/product/Grove Speaker.jpg
surveyurl: https://www.research.net/r/Grove-Speaker
sku: 107020001
tags: grove_digital, io_5v, plat_duino, plat_wio
---

![](https://files.seeedstudio.com/wiki/Grove-Speaker/img/Grove_Speaker_01.jpg)

The Grove- Speaker is a module which consists of power amplification and voice outputs. The loudness can be adjusted by the on-board potentiometer. With different input frequencies, the loud-speaker generates different tones. Coding the music into arduino, DIY your own music box!

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Speaker-p-1445.html)

Features
-------

-   Volume Adjustable
-   Grove Interface

!!!Tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)


Specifications
-------------

| Item            | Min | Typical | Max | Unit |
|-----------------|-----|---------|-----|------|
| Working Voltage | 4.0 | 5.0     | 5.5 | VDC  |
| Voltage Gain    | -   | -       | 46  | db   |
| Band Width      | -   | -       | 20  | KHz  |

Platforms Supported
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.


Usage
-----

### Play with Arduino

The speaker can emit a variety of sounds like a car horn, doorbell and ignition . The different sounds are based on the frequency of the input signal.

You can supply different frequency signal to this module with Arduino. Arduino generates these signal via PWM or even digital write and delay.Here we are going to show you how to generate these signals using *delay()*, the speaker sound bass 1~7.

![](https://files.seeedstudio.com/wiki/Grove-Speaker/img/Tone.jpg)

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

### Play with Codecraft

#### Hardware

**Step 1.** Connect Grove - Speaker to port D3 in a Base Shield

**Step 2.** Plug the Base Shield to your Seeeduino/Arduino.

**Step 3.** Link Seeeduino/Arduino to your PC via an USB cable.

#### Software

**Step 1.** Open [Codecraft](https://ide.chmakered.com/), add Arduino support, and drag a main procedure to working area.

!!!Note
    If this is your first time using Codecraft, see also [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).

**Step 2.** Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page.

![](https://files.seeedstudio.com/wiki/Grove-Speaker/img/Speaker.png)

Upload the program to your Arduino/Seeeduino.

!!!Success
    When the code finishes uploaded, you will hear the Speaker making a DO to SI sound.


## Schematic Online Viewer

<div class="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Speaker/res/Grove-Speaker_Eagle_File.zip" style="border-radius: 0px 0px 4px 4px; height: 500px; border-style: solid; border-width: 1px; border-color: rgb(241, 241, 241); overflow: hidden; max-width: 1280px; max-height: 700px; box-sizing: border-box;" />
</div>


Resources
--------

-   [Grove - Speaker Eagle File](https://files.seeedstudio.com/wiki/Grove-Speaker/res/Grove-Speaker_Eagle_File.zip)
-   [How to generate different tone with MCU](https://files.seeedstudio.com/wiki/Grove-Speaker/res/Tone.pdf)
-   [Grove\_-\_Speaker\_v1.0\_brd.pdf](https://files.seeedstudio.com/wiki/Grove-Speaker/res/Grove-Speaker_v1.0_brd.pdf)
-   [Grove\_-\_Speaker\_v1.0\_sch.pdf](https://files.seeedstudio.com/wiki/Grove-Speaker/res/Grove-Speaker_v1.0_sch.pdf)
-   [LM386 Low Voltage Audio Power Amplifier Datasheet](https://files.seeedstudio.com/wiki/Grove-Speaker/res/LM386_Low_Voltage_Audio_Power_Amplifier_Datasheet.pdf)
-   [CodeCraft Code](https://files.seeedstudio.com/wiki/Grove-Speaker/res/Speaker.zip)


<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Speaker -->

## Tech Support
Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>