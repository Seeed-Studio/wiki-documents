---
title: Gear Stepper Motor Driver Pack
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Gear_Stepper_Motor_Driver_Pack/
slug: /Gear_Stepper_Motor_Driver_Pack
last_update:
  date: 02/03/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/main.jpg)

The Gear Stepper Motor Driver Pack includes a stepper motor and a motor drive board. It's a four-phase eight-stepping stepper motor, and you can easily control this stepper motor via the drive board.

You can use this pack for position control.

<p style={{}}><a href="https://www.seeedstudio.com/Gear-Stepper-Motor-Driver-Pack-p-3200.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Features

- Low noise
- Large torque
- Built-in gearbox

## Specification

|Item|Value|
|---|---|
|Operating Voltage|5V|
|Phase|4|
|Reduction ratio|1/64|
|Step Angle|5.625°/64|
|Diameter|28mm / Nema 11|
|Idle In-traction Frequency|>500HZ|
|Idle Out-traction Frequency|>1000HZ|
|Resistance|21±7%|
|Noise|≤40dB|
|Drive mode|four-phase eight-stepping|

## Typical applications

- Desktop printers
- Plotters
- 3d printers
- CNC milling machines

## Hardware Overview

### Pin Out

![](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/pin_out_1.jpg)

![](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/pin_out_2.jpg)

### Mechanical drawing

you can click it to see the original picture.

<p style={{}}><a href="https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/mechanical.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/mechanical.jpg" /></a></p>

## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::tip
The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

## Getting Started

### Play With Arduino

#### Hardware

**Materials required**

| Seeeduino V4.2 | Gear Stepper Motor Driver Pack |Female-Male jumpers|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/jumper.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Gear-Stepper-Motor-Driver-Pack-p-3200.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/1-Pin-Female-Male-Jumper-Wire-125mm-50pcs-pac-p-1319.html" target="_blank">Get One Now</a>|

:::note
**1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy

**2** To make the Gear-Stepper-Motor-Driver-Pack work with your Arduino, several Female-Male jumpers is also required. In case you do not have jumpers, you can click [here](https://www.seeedstudio.com/1-Pin-Female-Male-Jumper-Wire-125mm-50pcs-pac-p-1319.html) to buy.
:::note

- **Step 1.** Connect the Gear Stepper Motor Driver Board to your seeedunio via jumppers.

|Seeeduino|Gear Stepper Motor Driver Board|
|---|---|
|Digital Pin 8|IN1|
|Digital Pin 9|IN2|
|Digital Pin 10|IN3|
|Digital Pin 11|IN4|
|GND|GND|
|VCC_5V|VCC|
|VCC_5V |VM|

:::tip
You can connect the VM pin to VCC_5V or you can just do not use it as long as you choose the VCC in the switch.
:::

- **Step 2.** Plug the stepper motor into the Gear Stepper Motor Driver Board.

- **Step 3.** Connect Seeeduino to PC via a USB cable.

![](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/connect.jpg)

#### Software

:::note
If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

- **Step 1.** Click the icon ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) in upper right corner of the code block to copy the following code into a new sketch in the Arduino IDE.

```cpp
int pwm1=9;
int pwm2=10;
int ctr_a =9;
int ctr_b =8;
int ctr_c =11;
int ctr_d =10;
int sd =6;
int i=0;
int t=1500;

void setup()
{
    pinMode(ctr_a,OUTPUT);
    pinMode(ctr_b,OUTPUT);
    pinMode(ctr_c,OUTPUT);
    pinMode(ctr_d,OUTPUT); 
    delay(1);     
}


void loop ()
{
   for(i=1500;i>=1;i--)
   {
       digitalWrite(ctr_a,LOW);//A
       digitalWrite(ctr_b,HIGH);
       digitalWrite(ctr_c,HIGH);
       digitalWrite(ctr_d,HIGH);
       delayMicroseconds(t);
       digitalWrite(ctr_a,LOW);
       digitalWrite(ctr_b,LOW);//AB
       digitalWrite(ctr_c,HIGH);
       digitalWrite(ctr_d,HIGH);
       delayMicroseconds(t);
       digitalWrite(ctr_a,HIGH);
       digitalWrite(ctr_b,LOW);//B
       digitalWrite(ctr_c,HIGH);
       digitalWrite(ctr_d,HIGH);
       delayMicroseconds(t);
       digitalWrite(ctr_a,HIGH);
       digitalWrite(ctr_b,LOW);
       digitalWrite(ctr_c,LOW);//BC
        digitalWrite(ctr_d,HIGH);
       delayMicroseconds(t);
       digitalWrite(ctr_a,HIGH);
       digitalWrite(ctr_b,HIGH);
       digitalWrite(ctr_c,LOW);//C
       digitalWrite(ctr_d,HIGH);
       delayMicroseconds(t);
       digitalWrite(ctr_a,HIGH);
       digitalWrite(ctr_b,HIGH);
       digitalWrite(ctr_c,LOW);//CD
       digitalWrite(ctr_d,LOW);
       delayMicroseconds(t);
        digitalWrite(ctr_a,HIGH);
       digitalWrite(ctr_b,HIGH);
       digitalWrite(ctr_c,HIGH);//D
       digitalWrite(ctr_d,LOW);
       delayMicroseconds(t);
       digitalWrite(ctr_a,LOW);
       digitalWrite(ctr_b,HIGH);
       digitalWrite(ctr_c,HIGH);//DA
       digitalWrite(ctr_d,LOW);
       delayMicroseconds(t);
       
   }
}
```

- **Step 2.** Upload the demo. If you do not know how to upload the code, please check [How to upload code](https://wiki.seeedstudio.com/Upload_Code/).

:::tip
     If every thing goes well, you can see the motor run:
:::

![](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/_DAS7726.MOV_20181115_134717.gif)

### Raspberry Pi + Python

#### Materials required

| Pi Pico | Gear Stepper Motor Driver Pack | Female-Female jumpers|
|--------------|-------------|-----------------|
|![A Raspberry Pi Pico](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Picoboard1.jpg)|![Gear Stepper Motor Driver Pack](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/thumbnail.jpg)|![Female-Female jumpers](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/jumper.jpg)|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/Gear-Stepper-Motor-Driver-Pack-p-3200.html" target="_blank">Get One Now</a>|<a href="https://www.seeedstudio.com/1-pin-dual-female-jumper-wire-100mm-50pcs-pack-p-260.html" target="_blank">Get One Now</a>|

#### Background

The stepper motor has 4 separate electromagnets inside which you must power one by one in sequence in order to turn one notch on the gear. The gear has 64 notches, so you need to do this 64 times for one complete revolution of the axle.

You can do this yourself by powering the pins one by one, or using a library such as [RpiMotorLib](https://github.com/gavinlyonsrepo/RpiMotorLib).

#### Method

1. If you didn't already, [follow this guide](https://projects.raspberrypi.org/en/pathways/pico-intro) to get set up with your Raspberry Pi Pico running Python through Thonny + picozero on your computer.

1. Connect the Gear Stepper Motor Driver Board to your Pi Pico using jumpers.

    |Pi Pico|Gear Stepper Motor Driver Board
    |---|---|
    |VBUS|VCC|
    |GND|GND|
    |GP2|IN1|
    |GP3|IN2|
    |GP4|IN3|
    |GP5|IN4|

1. Look closely at your Gear Stepper Motor Driver Board and you'll see a teeny tiny switch which says VCC at one end and VM on the other. This lets you choose whether to power the motor from the same pin as the driver (VCC), or a separate voltage source (VM). For now we'll just use VCC. Make sure the switch is on VCC.

1. Plug your Pi Pico into your computer over USB (or connect to it wirelessly) and load up Thonny.

1. Upload the following code to Thonny and run it.

```python
from gpiozero import Button, LED
from time import sleep

wait = 0.001 # seconds

ctrA = LED(2) # IN1
ctrB = LED(3) # IN2
ctrC = LED(4) # IN3
ctrD = LED(5) # IN4

while True:
  # A
  ctrA.on()
  ctrB.off()
  ctrC.off()
  ctrD.off()
  sleep(wait)

  # AB
  ctrA.on()
  ctrB.on()
  ctrC.off()
  ctrD.off()
  sleep(wait)

  # B
  ctrA.off()
  ctrB.on()
  ctrC.off()
  ctrD.off()
  sleep(wait)

  # BC
  ctrA.off()
  ctrB.on()
  ctrC.on()
  ctrD.off()
  sleep(wait)

  # C
  ctrA.off()
  ctrB.off()
  ctrC.on()
  ctrD.off()
  sleep(wait)

  # CD
  ctrA.off()
  ctrB.off()
  ctrC.on()
  ctrD.on()
  sleep(wait)

  # D
  ctrA.off()
  ctrB.off()
  ctrC.off()
  ctrD.on()
  sleep(wait)

  # DA
  ctrA.on()
  ctrB.off()
  ctrC.off()
  ctrD.on()
  sleep(wait)
```

:::tip
_What's going on here?_
The stepper motor has 4 separate electromagnets inside. You are powering them one by one in a loop, which turns the gear by one notch. Do this 64 times very fast and the axle turns one full rotation!
:::

#### Using a library

You can also use libraries like [RpiMotorLib](https://github.com/gavinlyonsrepo/RpiMotorLib) to cut out the hard part:

1. Thonny -> Tools -> Manage packages -> search for `RpiMotorLib` -> install

1. Follow the same wiring steps from the previous section

1. Replace your code with this:

```
from RpiMotorLib import RpiMotorLib

GpioPins = [2, 3, 4, 5]
mymotortest = RpiMotorLib.BYJMotor("MyMotorName", "28BYJ")
mymotortest.motor_run(GpioPins, 0.001, 512, False, False, "half", 0.05)
```

:::tip
The "28BYJ" bit above refers to the model of stepper motor you're using. You can find explanations for the other arguments [in the RpiMotorLib documentation.](https://github.com/gavinlyonsrepo/RpiMotorLib/blob/master/Documentation/28BYJ.md) (this uses a different driver board but most stuff is the same).
:::

## Resources

- **[Zip]** [Gear Stepper Motor Driver Board Eagle Files](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/res/Stepper%20Motor%20Driver.rar)

- **[PDF]** [Datasheet CX28BYJ48 Motor](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/res/CX28BYJ48.pdf)

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
