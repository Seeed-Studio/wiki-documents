---
description: Music_Shield_V2.2
title: Music Shield V2.2
tags:
  - Shield
keywords:
  - Shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Music_Shield_V2.2
last_update:
  date: 01/30/2023  
  author: Eico 

no_comments: false # for Disqus

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Music_Shield_Picture.jpg" alt="pir" width={600} height="auto" /></p>

Time to build your real-time MIDI instrument/music player! It can play many format including MP3, WMA, WAV, AAC, MIDI, Ogg Vorbis. The Music Shield is an audio encoder/decoder compatible with Arduino, Seeeduino, Seeeduino Mega and Arduino Mega. It is based on the VC1053B chip, which enabled it to play sound files from SD card and do short-time recording as well. You can also use it to play MIDI notes by slightly changing its hardware installations. Due to the SPI communication mode, it keeps a minimum number of IO port that facilitates users’ own developments of this device. Additionally, the new multifunction button provides greater convenience for users to control.

:::note
The recording function works with Seeeduino Mega and Arduino Mega only. And the maximum size SD card you can use is 2GB.
:::

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/depot/Music-Shield-V20-p-1372.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

Hardware Overview
-----------------

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Music_shield_frame.jpg" alt="pir" width={600} height="auto" /></p>

**Multifunction button:** Change volume and select songs.

**Play/Pause indicator LED (GREEN)：**Blinks while playing.

**Headsets interface:** It can drive 16 ohm or 32 Ohm earphone and could serve as a external audio input port.

**Micro SD card**: Can be FAT16 or FAT32, the maximum size SD card you can use is 2GB.

**U2:** VS1053B IC,Ogg Vorbis/MP3/AAC/WMA/FLAC/MIDI audio codec.

**U3,U7:** 74VHC125 IC, Quad Buffer

**I2S:** For digital audio input/output.

**ISP interface**: for bringing SPI port when using with Mega series products.

***Pins usage on Arduino***

**Pins used for Play Control:**

D3 - Receiving signal from button for Volume Up.

D4 - Receiving signal from switch for Next Song function.

D5 - Receiving signal from switch for Play&Stop and Record function.

D6 - Receiving signal from switch for Previous Song function.

D7 - Receiving signal from button for Volume Down.

D8 - Green Led instructions.

**Pins Used for SPI Interface:**

D10 - SPI Chip Select

D11 - SPI MOSI

D12 - SPI MISO

D13 - SPI SCK

**Pins Used for VS1053 Interface:**

A0 - Reset of VS1053

A1 - Data Require of VS1053

A2 - Data Select of VS1053

A3 - Chip Select of VS1053

Getting Started
---------------

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Music_shield4.jpg" alt="pir" width={600} height="auto" /></p>

:::note
<ol><li>If you want to use MIDI function, you need to change the hardware installation.</li>
<li>If you changed the hardware installation in order to use MIDI function, you are not able to use playback & recording functions until you restore it to the original condition.</li></ol>
:::

### **Play music**

1. Make sure there are songs in the micro SD card.
2. Download [Music shield V2.0 library](https://github.com/Seeed-Studio/Music_Shield)
3. Unzip and copy the folder to Arduino’s library path: ..\arduino-1.0\libraries.

:::note

1. Change the folder name of the extracted library if Arduino throws an error while loading.<br />
2. Change the included header (to Arduino.h) in the example file if there is a `arduino.h: No such file or directory` error while compiling.
:::

**Demo 1: Play songs (e.g. in shuffle mode)**

In order to use the playback function, you need to create a playlist first.

1. Restart the Arduino IDE. Open “creatList” example via the path: File --> Examples --> MusicPlayer --> creatList as below.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/OpenCreatListCode.jpg" alt="pir" width={600} height="auto" /></p>

2. Set the play mode. In “creatList”, the function we use is described as follows.

    **Name:** setPlayMode(unsigned char playmode);

    **Function:** Set the play mode. There are four modes you can set: MODE_NORMAL, MODE_SHUFFLE, MODE_REPEAT_LIST, MODE_REPEAT_ONE. Each mode stands for different playing orders.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Play_Mode.jpg" alt="pir" width={600} height="auto" /></p>

3. Select the type of Arduino board that you are using by the path: Tools --> Board --> for example Arduino UNO.
4. Select the correct serial port you are using by the path: Tools --> Serial Port --> for example COM3.
5. Upload the code. Click to Serial Monitor when “Done uploading” appears, you will find the order of songs is randomized on the list.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Play_List.jpg" alt="pir" width={600} height="auto" /></p>

When multifunction button is pressed up or down, the volume will change. Of course, you can try others play modes.

**Demo 2: Play selected songs**

1. This demo will show you how to play part of the songs from all songs in the SD card. Open the “addToList” example via the path: File --> Examples --> MusicPlayer --> addToList.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Select_play.jpg" alt="pir" width={600} height="auto" /></p>

2. Select songs from the playlist.You just need to list songs you want to play by name correctly in the function addToPlayList(char *songName) .
But you must ensure that the song has been stored in the SD card and the format of those songs must be one of MP3,WMA,WAV,AAC,MIDI,Ogg Vorbis.

3. Upload code. When you complete the upload,new add songs will be played.

**Demo 3: Control Volume by analog port**

1. Plug the Grove-Base Shield onto the Music shield, Connect the Grove socket of the Rotary and analog port 4 of the Base Shield with a Grove cable. You can change to the digital port as well. But don't forget to change the port number in the definition of the demo code at the same time.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Music_shield_5.jpg" alt="pir" width={600} height="auto" /></p>

2. Open the “analogInputControl” example and upload it onto your Arduino Board.

3. Rotate the knob to change music volume.

**Demo 4: Record music:(Only support ATmega1280 and ATmega2560 based board)**

1. Upload any sketch in Music Shield library, for example the sketch "creatList". Open the Serial Monitor and it will play audio files on SD card.
2. Press down the multifunction button for 5 seconds, then the indicator LED will light off.
3. Press down the multifunction button for 5 seconds again, then the music shield will begin to record, the green indicator LED will blink.
4. Quickly press down the multifunction button again, it will stop recording.
5. Record will be played in the last place.

**Demo 5: Using MIDI**

1. This demo will show you how to play notes from 3.5mm using MIDI.Open the "MidiDemoPlayer" example via the path: File --> Examples --> MusicPlayer --> MidiDemoPlayer.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/Music_shield_midi_demo.jpeg" alt="pir" width={600} height="auto" /></p>

2. Upload Code to your arduino UNO.

Reference
---------

**MIDI number to note reference list**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/img/MIDIlist.gif" alt="pir" width={600} height="auto" /></p>

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Music_Shield_V2.2/res/Music_Shield_v2.2.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Resources
---------

- [Music Shield V2.2 Eagle Files](https://files.seeedstudio.com/wiki/Music_Shield_V2.2/res/Music_Shield_v2.2.zip)
- [Music Shield V2.2 Schematic.pdf](https://files.seeedstudio.com/wiki/Music_Shield_V2.2/res/Music_Shield_v2.2_pdf.pdf)
- [VS1053 Datasheet](https://files.seeedstudio.com/wiki/Music_Shield_V2.2/res/VS1053.pdf)
- [Music Shield libraries](https://github.com/Seeed-Studio/Music_Shield)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Music_Shield_V2.2 -->

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
