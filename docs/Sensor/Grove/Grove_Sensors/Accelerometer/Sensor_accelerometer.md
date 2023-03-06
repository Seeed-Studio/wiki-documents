---
description: Sensor - Accelerometer
title: Sensor - Accelerometer
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Sensor_accelerometer
last_update:
  date: 1/5/2023
  author: shuxu hu
---
# Seeed Accelerometer Selection Guide

We have released various types of Accelerometer sensors in the recent years. You may find it difficult to make a choice between them. We feel your pain and let's take a close look at them and workout which one is best suited for you!

For all the Accelerometer sensors in our bazaar, please click [Bazaar Accelerometer tag](https://www.seeedstudio.com/tag/Accelerometer.html) to check.

## What is Accelerometer

An accelerometer is a sensor capable of measuring objects' acceleration. During the movement process, the acceleration value is obtained by measuring the inertial force of the mass and Newton's Second law. According to the different sensitive elements of the sensor, common acceleration sensors are including capacitive, inductive, strain, piezoresistive, piezoelectric and etc. Via measuring the acceleration due to gravity, you can calculate the tilt angle of the device relative to the horizontal. And you can also figure out motions of device by analyzing dynamic acceleration. 

For instance, recently a ninety-year-old American old lady said that after experiencing a traffic accident, the fall detection function of a smart watch successfully saved her life. When she walked out of the store and went home, a woman knocked her down while driving. At that time, the old lady could not find the phone to call the emergency service, but the smart watch she was wearing detected that she had fallen and started to ask her family for help.Thanks to a new generation of three-axis MEMS acceleration sensor and gyroscope chip technology, some smart watches now are capable of recognizing a variety of falling postures.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Sensor_accelerometer/IMG/Accelerometer.png" /><figcaption><b>Figure 1</b>. <i>Smart watch with a 3-axis accelerometer ( Image from Sensorexpert, 2015 )</i></figcaption>
</div>


### How does an accelerometer work

There exist two ways where an accelerometer works: Piezoelectric effect, and Change in Capacitance. Following is the illustration:

#### Piezoelectric effect

<div align="center"><img src="https://files.seeedstudio.com/wiki/Sensor_accelerometer/IMG/Piezoelectric effect.png" /><figcaption><b>Figure 2</b>. <i>Working principle of Piezoelectric effect ( Image from explainthatstuff, 2019 )</i></figcaption>
</div>



As shown in the model in the figure above, accelerometers contain microscopic crystal structures, generating voltages when vibrations occur, and then voltage generated will create a reading of how much acceleration there is.

#### Change in Capacitance

<div align="center"><img src="https://files.seeedstudio.com/wiki/Sensor_accelerometer/IMG/Change in Capacitance.png" /><figcaption><b>Figure 3</b>. <i>Working principle of Change in Capacitance ( Image from explainthatstuff, 2019 )</i></figcaption>
</div>


This method plays with the formula in finding acceleration. Since we know that Force = Mass x Acceleration, to find acceleration, it’ll take the Force present / Mass of an object.

This is how the capacitance effect in a MEMS accelerometer works:

1. 2 capacitive plates are present.
2. The mass of an object presses on one of the capacitor plates, changing the capacitance and allowing the force to be measured.
3. With force and mass of object known, acceleration is eventually measured.


## Field of Applicaitons

There are a numerous use of these accelerometer sensors. Particularly, using these kinds of sensors, human beings can be monitored and benifitted or even saved from different conditions. Therefore the accelerometer sensors play important roles in various sectors, which include industry, medical, social applications, and domestic applications for monitoring motions of variety objects.


| Field of application                                          | Function |
|--------------------------------|-----------------------------------------|
| Automobile safety  | The acceleration sensor is mainly used in the safety performance of automobile airbags, anti-lock braking systems, traction control systems, etc. | Heart rate, EMG, GSR|
| Game control | The acceleration sensor can detect the change of the inclination angle of up, down, left and right, so it is very simple to control the direction of the front, back, left and right of the objects in the game by tilting the handheld device forward and backward. |
| Automatic image flip| Use the acceleration sensor to detect the rotation and direction of the handheld device to achieve the normalization of the image to be displayed.|
| Anti-shake function | Use the acceleration sensor to detect the vibration / shake amplitude of the handheld device. When the vibration / shake amplitude is too large, lock the camera shutter so that the captured image is always clear|
| Electronic compass tilt correction | The magnetic sensor determines the direction by measuring the magnitude of the magnetic flux. When the magnetic sensor is tilted, the geomagnetic flux passing through the magnetic sensor will change, resulting in an error in the direction. The principle that the acceleration sensor can measure the tilt angle can compensate for the tilt of the electronic compass.| 
| Pedometer function| The acceleration sensor can detect the AC signal and the vibration of the object. When a person walks, it will generate a certain regular vibration, and the acceleration sensor can detect the zero crossing of the vibration, so as to calculate the number of steps taken by the person or the number of steps taken by the runner. Thereby calculating the displacement that the person moves. And using a certain formula can calculate the calorie consumption.|
| Compensation for dead angle of GPS navigation system | The GPS system determines the position of the object by receiving three satellite signals distributed at 120 degrees. On some special occasions and landforms, such as tunnels, tall buildings, and jungle areas, the GPS signal will become weak or even completely lost. This is the so-called dead end. And by installing an acceleration sensor and the inertial navigation that we have used before, the dead zone of the system can be measured. Integrating the acceleration sensor once becomes the amount of speed change per unit time, thereby measuring the movement of objects in the dead zone.|

## Accelerometer Sensors at Seeed
There're various accelerometers at Seeed and the following image illustrates a typical Grove - 3-Axis Digital Accelerometer ±16g Ultra-low Power (BMA400):

![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/pin_out.jpg)
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/pin_out.jpg" alt="pir" width={600} height="auto" /></p>


<!-- ![](https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/pin_out_back.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/pin_out_back.jpg" alt="pir" width={600} height="auto" /></p>


### Which One is Your Preference



|Name|Thumbnail|Operate voltage|Measurement Range|Sensitivity|Input interface|Power Consumption|Click to buy|
|----|-----|-----|------|------|------|-----|------|
|[Grove - 3-Axis Digital Accelerometer ±16g Ultra-low Power (BMA400)](https://wiki.seeedstudio.com/Grove-3-Axis_Digital_Accelerometer%C2%B116g_Ultra-low_Power-BMA400/)|<img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-16g_Ultra-low_Power-BMA400/img/thumbnail.jpg"/>|3.3V-5V|±2g,±4g,±8g,±16g|1024LSB/g@±2g 512LSB/g@±4g 256LSB/g@±8g 128LSB/g@±16g|I2C|18uA@5V 14uA@3.3V|[Buy Now](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-16g-Ultra-low-Power-BMA400.html)|
|[Grove - 3 Axis Digital Accelerometer(±16g)](https://wiki.seeedstudio.com/Grove-3-Axis_Digital_Accelerometer-16g/)|<img src="https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/images/Thumb.png" />|3V-5.5V|±16g|3.9mg / LSB|I2C|/|[Buy Now](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-16g.html)|
|[Grove - 3-Axis Compass V1.0](https://wiki.seeedstudio.com/Grove-3-Axis_Compass_V1.0/)|<img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Compass_V1.0/img/thumbnail.jpg" />|3.3V-5V|/|/|I2C|/|[Buy Now](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass.html)|
|[Grove - 3-Axis Digitial Compass v2.0](https://wiki.seeedstudio.com/Grove-3-Axis_Digitial_Compass_v2.0/)|<img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digitial_Compass_v2.0/img/45d_small.jpg" />|3.3V-5V|/|/|I2C, SPI|/|[Buy Now](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-V2.html)|
|[Grove - 3-Axis Digital Accelerometer(±1.5g)](https://wiki.seeedstudio.com/Grove-3-Axis_Digital_Accelerometer-1.5g/)|<img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-1.5g/img/3_aix_acc.jpg" />|3V-5.5V|±1.5g|21LSB/g|I2C|47μA@1 ODR|[Buy Now](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-1-5g.html)|
|[Grove - 3-Axis Digital Accelerometer(±400g)](https://wiki.seeedstudio.com/Grove-3-Axis_Digital_Accelerometer-400g/)|<img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-400g/img/45d_small.jpg" />|3.3V-5V|±100g,±200g,±400g|/|I2C|300μA@3.3V|[Buy Now](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-400g.html)|
|[Grove - 3-Axis Analog Accelerometer](https://wiki.seeedstudio.com/Grove-3-Axis_Analog_Accelerometer/)|<img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Analog_Accelerometer/img/thumb1.png" />|3V-5V|±3g|/|Analog|350μA@3V|[Buy Now](https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-ADXL335.html)|
| [Grove - 3-Axis Digital Gyro](https://wiki.seeedstudio.com/Grove-3-Axis_Digital_Gyro/)|<img src="https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Thumb3.png" />|3.3V-5V|/|14 LSBs per °/sec|I2C|/|[Buy Now](https://www.seeedstudio.com/Grove-3-Axis-Digital-Gyro.html)|
|[Grove - 6-Axis Accelerometer&Gyroscope](https://wiki.seeedstudio.com/Grove-6-Axis_AccelerometerAndGyroscope/)|<img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndGyroscope/img/Thumb4.png" />|3.3V-5V|±2,±4,±8,±16g|0.061(FS=±2) 0.122(FS=±4) 0.244(FS=±8) 0.488(FS=±16)mg/LSB|I2C|0.9μA3.3V 1.25μA@5V|[Buy Now](https://www.seeedstudio.com/Grove-6-Axis-Accelerometer-Gyroscope.html)|
|[Grove - 6-Axis Accelerometer&Compass V2.0](https://wiki.seeedstudio.com/Grove-6-Axis_AccelerometerAndCompass_V2.0/)|<img src="https://files.seeedstudio.com/wiki/Grove-6-Axis_AccelerometerAndCompass_V2.0/img/45d_small.JPG" />|5V|±2g,±4g,±8g,±16g|/|I2C,SPI|/|[Buy Now](https://www.seeedstudio.com/Grove-6-Axis-Accelerometer-Compass-v2-0.html)|
|[Grove - IMU 9DOF v2.0](https://wiki.seeedstudio.com/Grove-IMU_9DOF_v2.0/)|<img src="https://files.seeedstudio.com/wiki/Grove-IMU_9DOF_v2.0/img/45d_small.jpg" />|3.3V-5V|±2,±4,±8,±16g|/|I2C,SPI|/|[Buy Now](https://www.seeedstudio.com/Grove-IMU-9DOF-v2-0.html)|
|[Grove - IMU 10DOF ](https://wiki.seeedstudio.com/Grove-IMU_10DOF/)|<img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF/img/45d_small.jpg" />|3.3V-5V|±2,±4,±8,±16g|/|I2C|/|[Buy Now](https://www.seeedstudio.com/Grove-IMU-10DOF-p-2386.html)|
|[Grove - IMU 10DOF v2.0](https://wiki.seeedstudio.com/Grove-IMU_10DOF_v2.0/)|<img src="https://files.seeedstudio.com/wiki/Grove-IMU_10DOF_v2.0/img/Grove-imu-10dof-v2.0_s.jpg" />|3.3V-5V|±2g,±4g,±8g,±16g|/|I2C|2.7μA@1Hz|[Buy Now](https://www.seeedstudio.com/Grove-IMU-10DOF-v2-0.html)|

### Warmly Notice

The chart above tells a variety of attributions of each accelerometer with different measurement ranges, sensitivities and power consumptions, you can choose the one that is the most suited for you. What's more, if communication interface is one of the considerations when doing preferences, we would suggest that SPI communication can operate faster than I2C, which may be an advantage in some conditions.

For more detailed information of individuals, please visit their own pages via the links left beside the images of the products.

## Resource

  - Reference
      - [Application history of 3-axis acceleration sensor in step counting of electronic products.](http://old.sensorexpert.com.cn/Article/qiantansanzhoujiasud_1.html)
      - [Accelerometers](https://www.explainthatstuff.com/accelerometers.html) 

## Project

**Plug 'n Play Remote Control Sailboat**

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/simon-werner/plug-n-play-remote-control-sailboat-b5724e/embed' width='350'></iframe>    

**Motorcycle Data App**: Learn from your ride like a pro! Motorcycle race teams have used IMU data for years, with RideData+Arduino it's easy for you to do the same.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/RideData/motorcycle-data-app-11698f/embed' width='350'></iframe>

## Tech Support
Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>

