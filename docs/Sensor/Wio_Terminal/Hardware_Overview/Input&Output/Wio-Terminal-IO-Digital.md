---
title: Digital
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-Terminal-IO-Digital/
slug: /Wio-Terminal-IO-Digital
last_update:
  date: 01/11/2022
  author: gunengyu
---
# Using the Grove Digital Port on Wio Terminal

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/2019-12-12%2014-55-44.2019-12-12%2014_56_10.gif" /></div>

This repo demonstrates how to use the Grove Ports on Wio Terminal as Digital Ports. You can simply use this functionality to play with the Grove Ecosystem!

## RPI Digital Pins

The Raspberry Pi pinouts are defined as:

- `RPI_D0` -> `RPI_D8`

## Grove Port Configurations

To use the **Grove configurable A/D Port** as Digital port, simply define it as follow:

```cpp
void setup() {
    pinMode(D0, INPUT); //Configure UART TX as Digital port
}
```

### Using the Grove I2C Port as Digital Port

The **Grove I2C port** can also be used as Digital Port on Wio Terminal:

```cpp
void setup() {
    pinMode(PIN_WIRE_SCL, INPUT); //Defined SCL of I2C port as Digital Input
```

Now, connect your Grove sensor to the physical Grove Port!

**Note:** For more defined variant pin name, please check Schematic and `variant.h`

## Example Code

In this example, a Grove Button and Grove LED are used to demonstrate:

```cpp
#define BUTTON D0 //Button to Grove UART Port
#define LED PIN_WIRE_SCL //LED to Grove I2C Port

void setup() {
  Serial.begin(115200);
  pinMode(BUTTON, INPUT);
  pinMode(LED, OUTPUT);
}

void loop() {
  int buttonState = digitalRead(BUTTON);
  Serial.print("Button State: ");
  Serial.println(buttonState);

  if (buttonState == HIGH) {
    digitalWrite(LED, HIGH);
  }
  else {
    digitalWrite(LED, LOW);
  }
  delay(50);
}
```

## PWM Output Example Code (Servo)

In this example, a Grove Servo is used to demonstrate PWM output:

```cpp
#include <Servo.h>
Servo myservo;

int pos = 0;

void setup() {
  myservo.attach(D0); //Connect servo to Grove Digital Port
}

void loop() {
  for (pos = 0; pos <= 180; pos += 1) {
    // in steps of 1 degree
    myservo.write(pos);
    delay(15);
  }
  for (pos = 180; pos >= 0; pos -= 1) {
    myservo.write(pos);
    delay(15);
  }
}
```

**Note:** To use the Servo library with Wio Terminal, please include [Adafruit's version](https://github.com/PaintYourDragon/Servo) for SAMD51 capability.

## UART Serial

- The USB Serial in Wio Terminal: `Serial`

- The broken out UART port: `Serial1`

## Tech Support

 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/).
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
