---
name: Grove - 80cm Infrared Proximity Sensor
category: Sensor
bzurl: https://seeedstudio.com/Grove-80cm-Infrared-Proximity-Sensor-p-788.html
oldwikiname: Grove_-_80cm_Infrared_Proximity_Sensor
prodimagename: Image_of_PSD.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/product/Proximity.jpg
surveyurl: https://www.research.net/r/Grove-80cm_Infrared_Proximity_Sensor
sku: 101020042
tags: grove_analog, io_3v3, io_5v, plat_duino，plat_pi
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-80cm_Infrared_Proximity_Sensor/master/img/Image_of_PSD.jpg)

The 80cm Infrared Proximity Sensor is a General Purpose Type Distance Measuring Sensor. This sensor SharpGP2Y0A21YK, boasts a small package and very low current consumption, takes a continuous distance reading and returns a corresponding analog voltage with a range of 10cm (4") to 80cm (30"). Can be used in TVs, personal computers, cars and so on.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/Grove-80cm-Infrared-Proximity-Sensor-p-788.html)


Features
--------

-   Easy to use
-   Wide supply voltage range: 2.5V–7V
-   Grove Interface

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)

Application Ideas
-----------------

-   Waterdrop conservation
-   Toys
-   Robotics

Specifications
-------------

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
Item
</th>
<th scope="col">
Minimum
</th>
<th scope="col">
Typical
</th>
<th scope="col">
Maximum
</th>
</tr>
<tr align="center">
<th scope="row">
Working Voltage
</th>
<td>
2.5V
</td>
<td>
5V
</td>
<td>
7V
</td>
</tr>
<tr align="center">
<th scope="row">
Analog Output Voltage(80cm)
</th>
<td>
0.25V
</td>
<td>
0.4V
</td>
<td>
0.5V
</td>
</tr>
<tr align="center">
<th scope="row">
Average Current Consumption
</th>
<td>
-
</td>
<td>
33mA
</td>
<td>
50mA
</td>
</tr>
</table>

Platforms Supported
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             | BeagleBone                                                                                      | Wio                                                                                               | LinkIt ONE                                                                                         |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/arduino_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/raspberry_pi_logo.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/bbg_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/wio_logo_n.jpg) | ![](https://raw.githubusercontent.com/SeeedDocument/wiki_english/master/docs/images/linkit_logo_n.jpg) |

!!!Caution
    The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.

Usage
-----

### With Arduino

The Infrared Proximity sensor is easy to use. The relationship between the voltage reading and the distance as shown below. When we read the voltage, which indicate the distance from the object in front to this sensor.

-   Connect the 3-pin connector to the sensor, and connect the 4-pin connector to the A1 port of the **Grove-Base Shield**.

<div class="admonition note">
<p class="admonition-title">Note</p>
This sensor is quite small and use a tiny connector called the Japan Solderless Terminal (JST) connector. These connectors have three wires: Ground, Vcc, and the Output signal. Because this sensor fires continuously and doesn't need any clock to initiate a reading cycle, it is easy to interface with any microcontroller. For Arduino & Seeeduino, we prepared a 4-pin to 3-pin wire to convert the 3-pin connecter on the sensor to 4-pin connecter on the Grove Base Shield, to compatible with the Seeeduino Grove interface.
</div>

-   Connect Arduino/Seeeduino via a USB cable.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-80cm_Infrared_Proximity_Sensor/master/img/80cm_Infrared.jpg)

-   Copy and paste code below to a new Arduino sketch.

```
    #define IR_PROXIMITY_SENSOR A1 // Analog input pin that  is attached to the sensor
    #define ADC_REF 5//reference voltage of ADC is 5v.If the Vcc switch on the Seeeduino
                     //board switches to 3V3, the ADC_REF should be 3.3
    float voltage;//the sensor voltage, you can calculate or find the distance
                    // to the reflective object according to the figures
                    //on page 4 or page 5 of the datasheet of the GP2Y0A21YK.

    void setup()
    {
        // initialise serial communications at 9600 bps:
        Serial.begin(9600);
    }

    void loop()
    {
        voltage = getVoltage();
        Serial.print("sensor voltage  = " );                       
        Serial.print(voltage);
        // wait 500 milliseconds before the next loop
        delay(500);
    }
    /****************************************************************************/
    /*Function: Get voltage from the sensor pin that is connected with analog pin*/
    /*Parameter:-void                                                       */
    /*Return:   -float,the voltage of the analog pin                        */
    float getVoltage()
    {
        int sensor_value;
        int sum;  
        // read the analog in value:
        for (int i = 0;i < 20;i ++)//Continuous sampling 20 times
        {
            sensor_value = analogRead(IR_PROXIMITY_SENSOR);
            sum += sensor_value;
        }
        sensor_value = sum / 20;
        float voltage;
        voltage = (float)sensor_value*ADC_REF/1024;
        return voltage;
    }
```

-   Upload the code.
-   Open the Serial Monitor, you can get the voltage. you can calculate or find the distance to the reflective object according to the below figures.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-80cm_Infrared_Proximity_Sensor/master/img/Infrared_Proximity.jpg)

<div class="admonition note">
<p class="admonition-title">Note</p>
Because of some basic trigonometry within the triangle from the emitter to reflection spot to receiver, the output of the detector is non-linear with respect to the distance being measured.
</div>

### With Raspberry Pi

1.You should have got a raspberry pi and a grovepi or grovepi+.

2.You should have completed configuring the development environment, otherwise follow [here](/GrovePi_Plus).

3.Connection

-   Plug the sensor to grovepi socket D4 by using a grove cable.

4.Navigate to the demos' directory:

       cd yourpath/GrovePi/Software/Python/

-   To see the code

```
    nano grove_infrared_distance_interrupt.py    # "Ctrl+x" to exit #
```
```
    import time
    import grovepi

    # Connect the Grove Infrared Distance Interrupt Sensor to digital port D4
    # SIG,NC,VCC,GND
    sensor = 4

    grovepi.pinMode(sensor,"INPUT")

    while True:
        try:
            # Sensor returns LOW and onboard LED lights up when the
            # received infrared light intensity exceeds the calibrated level
            if grovepi.digitalRead(sensor) == 0:
                print "found something"
            else:
                print "nothing"

            time.sleep(.5)

        except IOError:
            print "Error"
```

5.Run the demo.
```
    sudo python grove_infrared_distance_interrupt.py
```

Reference
---------

This new rangers use triangulation and a small linear CCD array to compute the distance and/or presence of objects in the field of view. The basic idea is this: a pulse of IR light is emitted by the emitter. This light travels out in the field of view and either hits an object or just keeps on going. In the case of no object, the light is never reflected and the reading shows no object. If the light reflects off an object, it returns to the detector and creates a triangle between the point of reflection, the emitter, and the detector.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-80cm_Infrared_Proximity_Sensor/master/img/Theory_of_PSD.jpg)

The angles in this triangle vary based on the distance to the object. The receiver portion of these new detectors is actually a precision lens that transmits the reflected light onto various portions of the enclosed linear CCD array based on the angle of the triangle described above. The CCD array can then determine what angle the reflected light came back at and therefore, it can calculate the distance to the object.

This new method of ranging is almost immune to interference from ambient light and offers amazing indifference to the color of object being detected. Detecting a black wall in full sunlight is now possible.


Resources
---------

- [GP2Y0A21YK datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-80cm_Infrared_Proximity_Sensor/master/res/GP2Y0A21YK.pdf)


## Project

**Arduino101 BLE Autonomous Rover** Augmenting the Arduino101 BLE Rover with sensors for autonomous driving.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/31926/arduino101-ble-autonomous-rover-2cb19f/embed' width='350'></iframe>

<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_80cm_Infrared_Proximity_Sensor -->

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>