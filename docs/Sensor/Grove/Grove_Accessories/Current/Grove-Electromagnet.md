---
description: Grove - Electromagnet
title: Grove - Electromagnet
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Electromagnet
last_update:
  date: 2/22/2023
  author: jianjing Huang
---
<!-- ---
name: Grove - Electromagnet
category: Sensor
bzurl: https://seeedstudio.com/Grove-Electromagnet-p-1820.html
oldwikiname: Grove_-_Electromagnet
prodimagename: Grove_Electromagnet_02.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/product/Grove Electromagnet.jpg
surveyurl: https://www.research.net/r/Grove-Electromagnet
sku: 101020073
tags: grove_digital, io_5v, plat_duino, plat_wio
--- -->

![](https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/Grove_Electromagnet_02.jpg)

An electromagnet is a type of magnet in which the magnetic field is produced by electric current. An electric current flowing in a wire creates a magnetic field around the wire, due to Ampere's law(see drawing below). To concentrate the magnetic field, in an electromagnet the wire is wound into a coil with many turns of wire lying side by side. The magnetic field of all the turns of wire passes through the center of the coil, creating a strong magnetic field there. Grove - Electromagnet can suck 1KG weight and hold on. It is easy to use, to learn electromagnet principle.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Electromagnet-p-1820.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border={0} /></a></p>

## Features

- Grove shape
- 1KG peak suction
- Low standby current

## Specifications

| Item            | Value |
|-----------------|-------|
| Working Voltage | DC 5V |
| Working Current | 400mA |
| Standby Current | 200uA |
| Load Weight     | 1KG   |

:::tip
More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::

## Platforms Supported

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

## Getting Started

:::note
If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
:::

### Play With Arduino

**Hardware**

- **Step 1.** Prepare the below stuffs:

| Seeeduino V4.2 | Base Shield|Grove-Electromagnet|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/Grove_Electromagnet_02%20-%20%E5%89%AF%E6%9C%AC.jpg)|
|[Get One Now](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get One Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Get One Now](https://www.seeedstudio.com/Grove-Electromagnet-p-1820.html)|

- **Step 2.** Connect Grove-Electromagnet to port **D2** of Grove-Base Shield.
- **Step 3.** Plug Grove - Base Shield into Seeeduino.
- **Step 4.** Connect Seeeduino to PC via a USB cable.

![](https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/2-connect.jpg)

:::note
If we don't have Grove Base Shield, We also can directly connect Grove-Electromagnet to Seeeduino as below.
:::

| Seeeduino       | Grove-Ultrasonic Ranger |
|---------------|-------------------------|
| 5V           | Red                     |
| GND           | Black                   |
| Not Conencted | White                   |
| D2            | Yellow                  |

**Software**

- **Step 1.** Please copy below code to Arduio IDE and upload to arduino. If you do not know how to upload the code, please check [how to upload code](https://wiki.seeedstudio.com/Upload_Code/).

```c
/*
  Turns on an Electromagnet on for one second, then off for one second, repeatedly.
  This example code is in the public domain.
*/

int Electromagnet = 2;
int LED = 13;

// the setup routine runs once when you press reset:
void setup() {
    // initialize the digital pin as an output.
    pinMode(Electromagnet, OUTPUT);
    pinMode(LED, OUTPUT);
}

// the loop routine runs over and over again forever:
void loop() {
    digitalWrite(Electromagnet, HIGH);  // turn the Electromagnet on (HIGH is the voltage level)
    digitalWrite(LED, HIGH);            // turn the LED on (HIGH is the voltage level)
    delay(1000);                        // wait for a second
    digitalWrite(Electromagnet, LOW);   // turn the Electromagnet off by making the voltage LOW
    digitalWrite(LED, LOW);             // turn the LED off by making the voltage LOW
    delay(1000);                        // wait for a second
}
```

- **Step 2.** Grove-Electromagnet worked.

![](https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/Grove_Electromagnet-3.png)

### Play with Codecraft

#### Hardware

**Step 1.** Connect Grove - Electromagnet to port D2 of a Base Shield.

**Step 2.** Plug the Base Shield to your Seeeduino/Arduino.

**Step 3.** Link Seeeduino/Arduino to your PC via an USB cable.

#### Software

**Step 1.** Open [Codecraft](https://ide.chmakered.com/), add Arduino support, and drag a main procedure to working area.

:::note
If this is your first time using Codecraft, see also [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).
:::

**Step 2.** Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page.

![cc](https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/cc_Electromagnet.png)

Upload the program to your Arduino/Seeeduino.

:::tipsuccess
When the code finishes uploaded, you can try to bring the ironwork close to the electromagnet. The LED on the Arduino 13 pin will be lighted up when the electromagnet is working.
:::

### Play With Raspberry Pi

**Hardware**

- **Step 1.** Prepare the below stuffs:

| Raspberry pi | GrovePi_Plus | Grove-Electromagnet |
|--------------|--------------|---------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/Grove_Electromagnet_02%20-%20%E5%89%AF%E6%9C%AC.jpg)|
|[Get One Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get One Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|[Get One Now](https://www.seeedstudio.com/Grove-Electromagnet-p-1820.html)|

- **Step 2.** Plug the GrovePi_Plus into Raspberry.

- **Step 3.** Connect Grove-Electromagnet to **D4** port of GrovePi_Plus.

- **Step 4.** Connect the Raspberry to PC through USB cable.

![](https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/1_pi_connect.jpg)

**Software**

- **Step 1.** Follow [Setting Software](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/) to configure the development environment.

- **Step 2.** Follow [Updating the Firmware](https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/) to update the newest firmware of GrovePi.

:::tip
In this wiki we use the path **~/GrovePi/** instead of **/home/pi/Desktop/GrovePi**, you need to make sure Step 2 and Step 3 use the same path.
:::

:::note
We firmly suggest you to update the firmware, or for some sensors you may get errors.
:::

- **Step 3.** Git clone the Github repository.

```
cd ~
git clone https://github.com/DexterInd/GrovePi.git

```

- **Step 4.** Navigate to the demos' directory:

```
cd yourpath/GrovePi/Software/Python/
```

Here is the grove_electromagnet.py code.

```python
    import time
    import grovepi

    # The electromagnet can hold a 1KG weight

    # Connect the Grove Electromagnet to digital port D4
    # SIG,NC,VCC,GND
    electromagnet = 4

    grovepi.pinMode(electromagnet,"OUTPUT")
    time.sleep(1)

    while True:
        try:
            # Switch on electromagnet
            grovepi.digitalWrite(electromagnet,1)
            print "on"
            time.sleep(2)

            # Switch off electromagnet
            grovepi.digitalWrite(electromagnet,0)
            print "off"
            time.sleep(2)

        except KeyboardInterrupt:
            grovepi.digitalWrite(electromagnet,0)
            break
        except IOError:
            print "Error"
```

5.Run the demo.

```
    sudo python grove_electromagnet.py
```

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Electromagnet/res/Grove_Electromagnet_v1.0_SCH_PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Resources
--------

- **[**Eagle**]**[Grove Electromagnet v1.0 SCH PCB.zip](https://files.seeedstudio.com/wiki/Grove-Electromagnet/res/Grove_Electromagnet_v1.0_SCH_PCB.zip)
- **[**Datasheet**]**[Datasheet ZYE1-P20-15 PDF](https://files.seeedstudio.com/wiki/Bazaar_file/101020073/ZYE1-P%20electro%20holding%20magnets.pdf)
- **[**Codecraft**]**[CDC File](https://files.seeedstudio.com/wiki/Grove-Electromagnet/res/Grove_Electromagnet_CDC_File.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Electromagnet -->

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
