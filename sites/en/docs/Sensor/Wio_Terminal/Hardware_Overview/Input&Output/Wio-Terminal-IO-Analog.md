---
title: Analog
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-Terminal-IO-Analog/
slug: /Wio-Terminal-IO-Analog
last_update:
  date: 01/11/2022
  author: gunengyu
---
# Using the Grove Analog Port on Wio Terminal

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/2019-12-12%2011-36-22.2019-12-12%2011_37_02.gif" /></div>

This repo demonstrates how to use Analog as inputs on Wio Terminal. To use analog pins on Wio Terminal, you must use RPI pins.

## RPI Analog Pins

The Raspberry Pi pinouts are defined as:

- `RPI_A0` -> `RPI_A8`

## Grove Port Configurations

To use the **Grove configurable A/D Port** as Analog port, simply define it as follow:

```cpp
void setup() {
    pinMode(A0, INPUT);
}
```

Now, connect your Grove sensor to the physical pin!

## Example Code

In this example, a Grove Loudness sensor is used to demonstrate:

```cpp
void setup() {
    Serial.begin(115200);
    pinMode(A0, INPUT);
}
void loop() {
    int loudness = analogRead(A0);
    Serial.print("Loudness: ");
    Serial.println(loudness);
    delay(50);
}
```

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
