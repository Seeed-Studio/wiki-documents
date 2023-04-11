---
description: Grove - 3-Axis Digital Accelerometer(±1.5g)
title: Grove - 3-Axis Digital Accelerometer(±1.5g)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-3-Axis_Digital_Accelerometer-1.5g
last_update:
  date: 1/5/2023
  author: shuxu hu
---

<div>
  <table>
    <colgroup>
      <col width="50%" />
      <col width="50%" />
    </colgroup>
    <tbody>
      <tr className="odd">
        <td><div className="center">
            <div className="floatnone">
              <img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/3_aix_acc.jpg" />
            </div>
          </div></td>
        <td><div className="center">
            <div className="floatnone">
              <img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/Grove-3-Axis_v1.3.jpg" />
            </div>
          </div></td>
      </tr>
      <tr className="even">
        <td><div style={{}}>
            Grove - 3-Axis Digital Accelerometer v1.2
          </div></td>
        <td><div style={{}}>
            Grove - 3-Axis Digital Accelerometer v1.2b
          </div></td>
      </tr>
    </tbody>
  </table>
  3-Axis Digital Accelerometer is the key part in projects like orientation detection, gesture detection and Motion detection. This 3-Axis Digital Accelerometer(±1.5g) is based on Freescale's low power consumption module, MMA7660FC. It features up to 10,000g high shock survivability and configurable Samples per Second rate. For generous applications that don't require too large measurement range, this is a great choice because it's durable, energy saving and cost-efficient.
</div>


[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer(%C2%B11.5g)-p-765.html)


Specifications
--------------

-   Working voltage: 3.0 - 5.5V
-   Off Mode Current: 0.4μA
-   Standby Mode Current: 2μA
-   Active Mode Current: 47 μA at 1 ODR
-   Test Range: ±1.5g
-   Sensitivity: 21LSB/g
-   Suli-compatible Library

:::tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::
Platforms Supported
-------------------

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" alt="pir" width={200} height="auto" /></p>|

:::caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::


Demonstration
-------------

### With Arduino

Here we are going to show you how to get raw data and data measured by "g" from this sensor. 

Connect this module to the I2C port of Grove - Base Shield via a Grove cable.

<div class="admonition note">
<p class="admonition-title">Note</p>
If you want to activate the Interrupt function of this module, you need to connect the INT soldering pad we broke out on the board with a pin of Arduino that's capable of Interrupt Service Routine. 
</div>

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/Digital_Accelerometer_Sensor_Connector1.5g.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/Digital_Accelerometer_Sensor_Connector1.5g.jpg" alt="pir" width={600} height="auto" /></p>

Install the library we provide in the resources section.

Open the code directly by the path:File -> Example ->DigitalAccelerometer_MMA7660FC ->MMA7660FC_Demo.

In this program, acceleration information are sent from the sensor to Seeeduino via I2C bus and then Seeeduino printed them onto the serial monitor.
Open the serial monitor to check the result.

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/Grove-3-Axis_Digital_Accelerometer-1.5g-.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/Grove-3-Axis_Digital_Accelerometer-1.5g-.jpg" alt="pir" width={600} height="auto" /></p>

The outputs of this sensor consist of two parts: raw data and 3-axis acceleration info converted into the unit of gravity, "g".


### With Raspberry Pi

1.You should have got a raspberry pi and a grovepi or grovepi+.

2.You should have completed configuring the development enviroment, otherwise follow [here](/GrovePi_Plus/).

3.Connection

-   Plug the sensor to grovepi socket i2c-x(1~3) by using a grove cable.

4.Navigate to the demos' directory:

       cd yourpath/GrovePi/Software/Python/

-   To see the code

```
    nano grove_i2c_accelerometer.py   # "Ctrl+x" to exit #
```
```
    import time
    import grovepi

    # Connect the Grove Accelerometer (+/- 1.5g) to any I2C port eg. I2C-1
    # Can be found at I2C address 0x4c
    # SCL,SDA,VCC,GND

    while True:
        try:
            print grovepi.acc_xyz()
            time.sleep(.5)

        except IOError:
            print "Error"
```

5.Run the demo.
```
    sudo python grove_i2c_accelerometer.py
```

Reference
---------

Below are two figures helping you understand the physical meaning of the result.

The first figure is about the direction of each axis:
<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/MMA7660_Direction.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/MMA7660_Direction.jpg" alt="pir" width={600} height="auto" /></p>

The second figure gives some examples:

<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/Sensing_Direction_1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/Sensing_Direction_1.jpg" alt="pir" width={600} height="auto" /></p>


## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/res/Grove-3-Axis_Digital_Accelerometer-1.5g-Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



Resources
---------

-   [Datasheet of MMA7660FC](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/res/MMA7660FC.pdf)
-   [Grove - 3-Axis Digital Accelerometer Eagle File](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/res/Grove-3-Axis_Digital_Accelerometer-1.5g-Eagle_File.zip)
-   [github repository for 3-Axis Digital Accelerometer(±1.5g)](https://github.com/Seeed-Studio/Accelerometer_MMA7660)


## Project

**Tilt Activated Spinning Fan Light Stick** Portable LED color stick reacts to your shaking motion. With extra fan and alarm.

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/chuartdo/tilt-activated-spinning-fan-light-stick-e05cec/embed" width={350} />


**Lean Green RC Sailing Machine**
An Internet connected device that controls servos and sends sensor (GPS/gyro/accel/compass) updates in real time over a GSM cell link.

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/anemoi/lean-green-rc-sailing-machine-2cdde5/embed" width={350} />

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_3-Axis_Digital_Accelerometer(±1.5g) -->

## Tech Support
Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>