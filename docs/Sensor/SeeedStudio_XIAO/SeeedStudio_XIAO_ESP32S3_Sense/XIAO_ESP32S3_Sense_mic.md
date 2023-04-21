---
description: This article describes how to use the microphone on the XIAO ESP32S3 Sense expansion board.
title: Usage of Seeed Studio XIAO ESP32S3 microphone
keywords:
- Template
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao_esp32s3_sense_mic
last_update:
  date: 04/14/2023
  author: MengDu
---

# Usage of Seeed Studio XIAO ESP32S3 microphone

In this tutorial, we will bring you how to use the microphone of XIAO ESP32S3 Sense expansion board. First is the very basic use of the I2S pin, we will get the loudness of the current environment by using I2S and the microphone, and display it in the serial waveform graph. Then we will explain how to record sound and save the recorded sound to the SD card. Finally, we will make a web page with a tuner to bring out the powerful musical capabilities of the XIAO ESP32S3 Sense.

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3 Sense</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

:::caution
All contents of this tutorial are applicable to XIAO ESP32S3 Sense only.
:::

## Getting Started

Before starting the content of the tutorial, you may need to prepare the following hardware and software in advance.

### Installation of expansion boards (for Sense)

Installing the expansion board is very simple, you just need to align the connector on the expansion board with the B2B connector on the XIAO ESP32S3, press it hard and hear a "click", the installation is complete.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif" style={{width:500, height:'auto'}}/></div>

### Prepare the microSD card

You may need a MicroSD card when working on a project where recordings are saved.

XIAO ESP32S3 Sense supports microSD cards up to **32GB**, so if you are ready to buy a microSD card for XIAO, please refer to this specification. And format the microSD card to **FAT32** format before using the microSD card.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/67.png" style={{width:250, height:'auto'}}/></div>

After formatting, you can insert the microSD card into the microSD card slot. Please note the direction of insertion, the side with the gold finger should face inward.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/66.jpg" style={{width:500, height:'auto'}}/></div>

## Detection of sound loudness

For the first project case, let's detect the noise in the environment and show the ambient loudness detected by the microphone using the Arduino IDE's serial port waveform graph.

The following is the complete sample program.

```cpp
#include <I2S.h>

void setup() {
  // Open serial communications and wait for port to open:
  // A baud rate of 115200 is used instead of 9600 for a faster data rate
  // on non-native USB ports
  Serial.begin(115200);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }

  // start I2S at 16 kHz with 16-bits per sample
  I2S.setAllPins(-1, 42, 41, -1, -1);
  if (!I2S.begin(PDM_MONO_MODE, 16000, 16)) {
    Serial.println("Failed to initialize I2S!");
    while (1); // do nothing
  }
}

void loop() {
  // read a sample
  int sample = I2S.read();

  if (sample && sample != -1 && sample != 1) {
    Serial.println(sample);
  }
}
```

Upload this program for XIAO ESP32S3 Sense and open **Serial Plotter**, you will see the loudness change curve of the sound.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/83.png" style={{width:600, height:'auto'}}/></div>

### Program annotation

At the beginning of the program, we need to first import the I2S library in order to use the microphone pins.

```c
#include <I2S.h>
```

The `setAllPins()` function is called on the I2S object to configure the pins used for the I2S interface. The function takes five integer parameters that represent the GPIO pins connected to the I2S interface's bit clock, word select, data input, data output, and channel select lines, respectively.

```c
I2S.setAllPins(-1, 42, 41, -1, -1);
```

In this specific code, the `-1` values indicate that the corresponding pins are not used, while the `42` and `41` values represent the GPIO pins connected to the word select and data input lines, respectively. The data output and channel select lines are not used in this configuration and are set to `-1`.

```c
if (!I2S.begin(PDM_MONO_MODE, 16000, 16)) {
    Serial.println("Failed to initialize I2S!");
    while (1); // do nothing
}
```

The `begin()` function is called on the I2S object to initialize the I2S interface with the specified parameters: `PDM_MONO_MODE`, `16000` Hz sample rate, and `16-bit` resolution.

:::tip
It should be noted that for the current ESP32-S3 chip, we can only use `PDM_MONO_MODE` and the sampling bit width can only be `16bit`. only the sampling rate can be modified, but after testing, the sampling rate at 16kHz is relatively stable.
:::

```c
int sample = I2S.read();

if (sample && sample != -1 && sample != 1) {
    Serial.println(sample);
}
```

The `read()` function is called on the I2S object to read a single audio sample from the I2S interface. The if statement checks the value of the sample variable. If the sample value is not 0, -1, or 1, it is considered a valid audio sample, and the code inside the if block will be executed. In this case, the sample value is printed to the serial console using the `Serial.println()` function.

## Save recorded sound



## Online Voice Changer



## Troubleshooting




## Tech Support

Please submit any technical issues into our [forum](https://forum.seeedstudio.com/).

<p style={{textAlign:'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>









