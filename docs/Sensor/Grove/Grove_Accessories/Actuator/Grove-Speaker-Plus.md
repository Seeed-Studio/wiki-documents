---
title: Grove - Speaker Plus
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-Speaker-Plus/
slug: /Grove-Speaker-Plus
last_update:
  date: 01/09/2022
  author: gunengyu
---

<!--     -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Speaker_Plus/IMG/03.png" alt="pir" width={600} height="auto" /></p>

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Speaker-Plus-p-4592.html)

Grove Speaker Plus consists of a powerful amplifier driver board and high-quality speaker. The speaker generates different tones with different input frequency, easy to control with PWM signal. You could create distinctive sound effects, play your favourite songs, or build your own music box with easy coding or a large number of existing music code.

Compare to the last version of Grove Speaker, Grove Speaker Plus has a better quality speaker with separated and replaceable speaker design, which enables you to replace with other loudspeakers you like. With the help of the on-board potentiometer, you can easily adjust the output volume. Already tired of fixed speaker with poor sound quality? Want to connect and play your own speaker? Here is your choice.

Features
-------

- Good sound quality speaker with high volume
- Separated and replaceable speaker design
- Sound adjustable function with onboard potentiometer
- Easy to use plug and play interface

:::tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::

Specifications
-------------

| Parameters           | Values |
|------|-----|
| Dimensions | 130mm x90mm x12mm|
|Weight   |G.W 12g|

Platforms Supported
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

## Getting Started

#### Materials Requied

| Seeeduino Lotus | Grove Speaker Plus|
|--------------|--------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/Seeeduino_Lotus.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Speaker_Plus/IMG/small.png)|
|[Get ONE Now](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Speaker-Plus-p-4592.html)|

#### Hardware Connection

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/Grove-Speaker_Plus/IMG/Hardware_Connection.jpg" alt="Grove-Speaker Plus'' OUTCOME" title="demo" />
<figcaption><b></b><i></i></figcaption>
</figure>
</div>

Usage
-----

### Play with Arduino

The speaker can emit a variety of sounds like a car horn, doorbell and ignition . The different sounds are based on the frequency of the input signal.

You can supply different frequency signal to this module with Arduino. Arduino generates these signal via PWM or even digital write and delay. Here we are going to show you how to generate these signals using *delay()*, the speaker sound bass 1~7.

|Note|Corresponding frequency|Half cycle|
|---|---|----|
|1| 261.6255653 |1911.128216|
|1.5|277.182631|1803.864832|
|2|293.6647679|1702.621678|
|2.5|311.1269837|1607.060866|
|3|329.6275569|1516.863471|
|4|349.2282314|1431.728466|
|4.5|369.9944227|1351.371722|
|5|391.995436|1275.525055|
|5.5|415.3046976|1203.935334|
|6|440|1136.363636|
|6.5|466.1637615|1072.584446|
|7|493.8833013|1012.384907|

#### Software Code

**Step 1.** Connect Grove - Speaker Plus to port **D3** in a Base Shield and plug the Base Shield to your Seeeduino.

**Step 2.** Link Seeeduino to your PC via an USB cable.

**Step 3.** Upload the code below into your Arduino IDE.

:::tip
        If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

```C++
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

:::tip
     When the code finishes uploaded, you will hear the Speaker making a DO to SI sound.
:::

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Speaker_Plus/202002903_Grove-Speaker_Plus_v1.0_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Resources
--------

- [How to generate different tone with MCU](https://files.seeedstudio.com/wiki/Grove-Speaker/res/Tone.pdf)
- [LM386 Low Voltage Audio Power Amplifier Datasheet](https://files.seeedstudio.com/wiki/Grove-Speaker/res/LM386_Low_Voltage_Audio_Power_Amplifier_Datasheet.pdf)

## Tech Support

 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/).
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
