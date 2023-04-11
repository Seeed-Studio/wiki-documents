---
description: Relay_Shield_v3
title: Relay Shield v3
tags:
  - Shield
keywords:
  - Shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Relay_Shield_v3
last_update:
  date: 01/11/2023  
  author: Eico 

no_comments: false # for Disqus

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/img/Relay_Shield_L_v3.0.jpg" alt="pir" width={600} height="auto" /></p>

The Relay Shield provides a solution for controlling high current devices that cannot be controlled by Arduino’s Digital I/O pins due to current and voltage limits.

The Relay Shield features four high quality relays and provides NO/NC interfaces, four dynamic LED indicators to show the on/off state of each relay, and the standardized shield form factor to provide a smooth connection to the Arduino/Seeeduino board or other Arduino compatible boards.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Relay-Shield-v3.0-p-2440.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Features

---

- Arudino Uno/Leonardo/Seeeduino compatible; Other board or microcontroller via jumper cables
- Interface via digital I/O pins 4,5,6, and 7
- Relay screw terminals
- Standardized shield shape and design
- LED working status indicators for each relay
- High quality relays
- COM, NO (Normally Open), and NC (Normally Closed) relay pins for each relay
- Update pin SCL, SDA, IOREF, NC.

## Specification

<table align="center">
  <tbody>
  <tr>
    <td><h3>Item</h3></td>
    <td><h3>Min</h3></td>
    <td><h3>Typical</h3></td>
    <td><h3>Max</h3></td>
    <td><h3>Unit</h3></td>
  </tr>
  <tr>
    <td><h4>Supply Voltage</h4></td>
    <td><h4>4.75</h4></td>
    <td><h4>5</h4></td>
    <td><h4>5.25</h4></td>
    <td><h4>VDC</h4></td>
  </tr>
  <tr>
    <td><h4>Working Current</h4></td>
    <td><h4>8</h4></td>
    <td><h4>-</h4></td>
    <td><h4>250</h4></td>
    <td><h4>mA</h4></td>
  </tr>  
  <tr>
    <td><h4>Switching Voltage</h4></td>
    <td><h4>-</h4></td>
    <td><h4>-</h4></td>
    <td><h4>30</h4></td>
    <td><h4>VDC</h4></td>
  </tr>
    <tr>
    <td><h4>Switching Current</h4></td>
    <td><h4>-</h4></td>
    <td><h4>-</h4></td>
    <td><h4>8</h4></td>
    <td><h4>A</h4></td>
  </tr>
    <tr>
    <td><h4>Frequency</h4></td>
    <td><h4>-</h4></td>
    <td><h4>1</h4></td>
    <td><h4>-</h4></td>
    <td><h4>HZ</h4></td>
  </tr>
    <tr>
    <td><h4>Switching Power</h4></td>
    <td><h4>-</h4></td>
    <td><h4>-</h4></td>
    <td><h4>70</h4></td>
    <td><h4>W</h4></td>
  </tr>
    <tr>
    <td><h4>Relay Life</h4></td>
    <td><h4>100000</h4></td>
    <td><h4>-</h4></td>
    <td><h4>-</h4></td>
    <td><h4>Cycle</h4></td>
  </tr>
    <tr>
    <td><h4>ESD contact discharge </h4></td>
    <td><h4>-</h4></td>
    <td><h4>±4</h4></td>
    <td><h4>-</h4></td>
    <td><h4>KV</h4></td>
  </tr>
    <tr>
    <td><h4>ESD air discharge</h4></td>
    <td><h4>-</h4></td>
    <td><h4>±8</h4></td>
    <td><h4>-</h4></td>
    <td><h4>KV</h4></td>
  </tr>
    <tr>
    <td><h4>Dimension</h4></td>
    <td><h4>-</h4></td>
    <td><h4>68.7X53.5X30.8</h4></td>
    <td><h4>-</h4></td>
    <td><h4>mm</h4></td>
  </tr>
    <tr>
    <td><h4>Net Weight</h4></td>
    <td><h4>-</h4></td>
    <td><h4>55±2</h4></td>
    <td><h4>-</h4></td>
    <td><h4>g</h4></td>
  </tr>
  </tbody></table>

:::caution

1. Please place 2 layers of electrical tape on the top of the Arduino's usb connector. This will prevent the relay shield from making contact.
2. Do not operate voltage more than 35V DC.
:::

## Shield Interface Description

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/img/Relay_Shield_v3.0.png" alt="pir" width={600} height="auto" /></p>

- Digital 4 – controls RELAY4’s COM4 pin (located in J4)
- Digital 5 – controls RELAY3’s COM3 pin (located in J3)
- Digital 6 – controls RELAY2’s COM2 pin (located in J2)
- Digital 7 – controls RELAY1’s COM1 pin (located in J1)

**J1 Interface/Terminal Pin Description:**

- **COM1 (Common Pin)** : The relay pin controlled from the digital pin.

- **NC1 (Normally Closed)**: This terminal will be connected to COM1 when the RELAY1 control pin (Digital 7 I/O pin) is set low and disconnected when the RELAY1 control pin is set high.

- **NO1 (Normally Open)**: This terminal will be connected to COM1 when the RELAY1 control pin (Digital 7 I/O pin) is set high and disconnected when the RELAY1 control pin is set low.

**Terminals J2-4 are similar to J1 except that they control RELAY2-RELAY4 respectively.**

:::note
Only four Arduino Digital I/O pins, pins 4-7, are required to control the four different relays. Additionally the 5V and two GND Arduino pins are also required to power up the Relay Shield.
:::

## Relays Operation/Tutorial

---
Relays are basically electromagnetic switches: when the relay is energized by the control circuit (i.e. when a voltage and current is applied to the coil), the current and coil create a magnetic field which is able to attract the COM terminal towards the NO terminal, when the control circuit removes the applied voltage and current the COM terminal returns to contact the NC terminal due to a mechanical force (usually a spring).

Some practical relay applications include: control of high voltage using low voltage, motor control, remote control, anti-hearing alarm, automatic temperature alarm, incubators and son on.

A motor control application with one relay and one motor is shown below:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/img/Low_Level_Control4.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/img/High_Level_Control3.jpg" alt="pir" width={600} height="auto" /></p>

In the case of the Relay Shield, the two “Control Circuit” terminals for each of the four relays are controlled by only one Arduino Digital I/O pin. Pins 4, 5, 6, and 7 control relays 4, 3, 2, and 1 respectively.

## Relay Shield Example(s)/Usage

Now that you know how a relay works internally, let us show you how to use the Relay Shield.

**Example #1: DC Motor Control**

1.Stack the Relay Shield onto the Arduino development board.

2.Connect Arduino to your PC using a USB cable.

3.We will use RELAY3 to control the DC motor. Connect the DC motor and Relay Shield as shown in the schematic and figure below:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/img/Motor-shield-schematic-drawing.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/img/Relay_Shield_Connector.jpg" alt="pir" width={600} height="auto" /></p>

:::note
The external power supply in the figure above can be a battery or power supply. The external supply must be able to provide enough current and be set to the correct voltage for the motor. In our testing, we used a lithium battery as the external power supply for the motor.
:::

4.Start the Arduino IDE and upload the following code to the Arduino board:

```CPP
int MotorControl = 5;    // Digital Arduino Pin used to control the motor

// the setup routine runs once when you press reset:
void setup()  {
  // declare pin 5 to be an output:
  pinMode(MotorControl, OUTPUT);
}

// the loop routine runs over and over again forever:
void loop()  {
  digitalWrite(MotorControl,HIGH);// NO3 and COM3 Connected (the motor is running)
  delay(1000); // wait 1000 milliseconds (1 second)
  digitalWrite(MotorControl,LOW);// NO3 and COM3 Disconnected (the motor is not running)
  delay(1000); // wait 1000 milliseconds (1 second)
}
```

When you have uploaded the code to your Arduino/Seeeduino board the motor should run one second, stop for another second and repeat the process indefinitely. When the motor is running (NO3 and COM3 are connected), the NO3 LED indicator will be lit.

**Example #2: How to Use More Than One Relay Shield With Only One Arduino/Seeeduino Board**

Because the Relay Shield uses digital pins on the Arduino to control each the relays, more than one Relay Shield can be used with the same Arduino board, to do so simply follow these steps:

1.Stack one of the Relay Shields (let’s call this one Relay Shield #1) onto the Arduino development board

2.Connect another Relay Shield (let’s call this one Relay Shield #2) using jumper cables/wires to Relay Shield #1 as shown in the figure below:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/img/Two-relay-shields-one-arduino.png" alt="pir" width={600} height="auto" /></p>

- Relay Shield #1 GND pin is connected to Relay Shield #2 GND pin
- Relay Shield #1 5V pin is connected to Relay Shield #2 5V pin
- Relay Shield #1 Digital Pins 8, 9, 10, and 11, are connected to Relay Shield #2 Digital Pins 7, 6, 5, and 4 respectively.

3.Now you can control relays 1, 2, 3, and 4 in Relay Shield #2 using the Arduino’s 8, 9, 10, and 11 digital I/O pins. See sample code below for controlling RELAY1 in Relay Shield #2:

```CPP
int relay1inShield2 = 8;    // Digital Arduino Pin 8 is used to control relay 1 in Relay Shield #2

// the setup routine runs once when you press reset:
void setup()  {
  // declare pin 8 to be an output:
  pinMode(relay1inShield2, OUTPUT);
}

// the loop routine runs over and over again forever:
void loop()  {
  digitalWrite(relay1inShield2,HIGH); // relay is energized (NO is connected to COM)
  delay(1000); // wait 1000 milliseconds (1 second)
  digitalWrite(relay1inShield2,LOW); // NO is disconnected from COM
  delay(1000); // wait 1000 milliseconds (1 second)
}
```

## Related Reading

---

- [FAQ of Relay Shield](http://support.seeedstudio.com/knowledgebase/articles/462030-relay-shield-sku-sld01101p)

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/res/Relay_Shield_v3.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Resource

---

- [Relay Shield v3.0](https://files.seeedstudio.com/wiki/Relay_Shield_v3.0/res/Relay_Shield_v3.0.zip)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
