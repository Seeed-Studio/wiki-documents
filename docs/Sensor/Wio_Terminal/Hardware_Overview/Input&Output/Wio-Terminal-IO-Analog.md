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

## Tech Support

 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/).
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
