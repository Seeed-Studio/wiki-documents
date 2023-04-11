---
description: Grove - Ear-clip Heart Rate Sensor
title: Grove - Ear-clip Heart Rate Sensor
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Ear-clip_Heart_Rate_Sensor
last_update:
  date: 1/6/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Ear-clip_Heart_Rate_Sensor/img/Heart_rate_ear_clip_kit.jpg" /></div>

The Heart Rate Ear clip kit contains a ear clip and a receiver module. The heart rate measure kit can be used to monitor heart rate of patient and athlete. The result can be displayed on a screen via the serial port and can be saved for analysis. The entire system is a high sensitivity, low power consumption and portable.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Ear-clip-Heart-Rate-Sensor-p-1116.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

Features
--------

- Low power consumption
- Convenient to use
- High sensitivity
- Fully RoHS compliant

:::tip
More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::

Specifications
-------------

<table border="1" cellspacing="0" width="60%">
<tr>
<th scope="col">
Item
</th>
<th scope="col">
Min
</th>
<th scope="col">
Typical
</th>
<th scope="col">
Max
</th>
<th scope="col">
Unit
</th>
</tr>
<tr align="center">
<th scope="row">
Voltage
</th>
<td>
3.0
</td>
<td>
5.0
</td>
<td>
5.25
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
Work Current
</th>
<td colspan="3">
6.5
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<th scope="row">
Length of ear clip wire
</th>
<td colspan="3">
120
</td>
<td>
cm
</td>
</tr>
<tr align="center">
<th scope="row">
Measures Range
</th>
<td colspan="3">
≥30/min
</td>
<td>
-
</td>
</tr>
</table>

Application Ideas
-----------------

- Heart rate monitor.

Platforms Supported
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.
:::

Usage
-----

The following sketch demonstrates a simple application of using the Ear-clip Heart Rate Sensor to measure heart rate.

- Connect this module to the digital port D2 on [Grove-Base shield](https://www.seeedstudio.com/depot/grove-base-shield-p-754.html?cPath=132). And connect Grove-LED to Digital port 4.
- Plug the Base Shield into Arduino/Seeeduino.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Ear-clip_Heart_Rate_Sensor/img/with_ardu.jpg" /></div>

- Copy and paste code below to a new Arduino sketch.

```
    // Function: This program can be used to measure heart rate, the lowest pulse in the program be set to 30.
    //         Use an external interrupt to measure it.
    // Hardware: Grove - Ear-clip Heart Rate Sensor, Grove - Base Shield, Grove - LED
    // Arduino IDE: Arduino-1.0
    // Author: FrankieChu       
    // Date: Jan 22, 2013
    // Version: v1.0
    // by www.seeedstudio.com
    #define LED 4//indicator, Grove - LED is connected with D4 of Arduino
    boolean led_state = LOW;//state of LED, each time an external interrupt 
                                    //will change the state of LED
    unsigned char counter;
    unsigned long temp[21];
    unsigned long sub;
    bool data_effect=true;
    unsigned int heart_rate;//the measurement result of heart rate

    const int max_heartpluse_duty = 2000;//you can change it follow your system's request.
                            //2000 meams 2 seconds. System return error 
                            //if the duty overtrip 2 second.
    void setup()
    {
        pinMode(LED, OUTPUT);
        Serial.begin(9600);
        Serial.println("Please ready your chest belt.");
        delay(5000);
        arrayInit();
        Serial.println("Heart rate test begin.");
        attachInterrupt(0, interrupt, RISING);//set interrupt 0,digital port 2
    }
    void loop()
    {
        digitalWrite(LED, led_state);//Update the state of the indicator
    }
    /*Function: calculate the heart rate*/
    void sum()
    {
     if(data_effect)
        {
          heart_rate=1200000/(temp[20]-temp[0]);//60*20*1000/20_total_time 
          Serial.print("Heart_rate_is:\t");
          Serial.println(heart_rate);
        }
       data_effect=1;//sign bit
    }
    /*Function: Interrupt service routine.Get the sigal from the external interrupt*/
    void interrupt()
    {
        temp[counter]=millis();
        Serial.println(counter,DEC);
        Serial.println(temp[counter]);
        switch(counter)
        {
            case 0:
                sub=temp[counter]-temp[20];
                Serial.println(sub);
                break;
            default:
                sub=temp[counter]-temp[counter-1];
                Serial.println(sub);
                break;
        }
        if(sub>max_heartpluse_duty)//set 2 seconds as max heart pluse duty
        {
            data_effect=0;//sign bit
            counter=0;
            Serial.println("Heart rate measure error,test will restart!" );
            arrayInit();
        }
        if (counter==20&&data_effect)
        {
            counter=0;
            sum();
        }
        else if(counter!=20&&data_effect)
        counter++;
        else 
        {
            counter=0;
            data_effect=1;
        }
        
    }
    /*Function: Initialization for the array(temp)*/
    void arrayInit()
    {
        for(unsigned char i=0;i < 20;i ++)
        {
            temp[i]=0;
        }
        temp[20]=millis();
    }
```

- Upload the code.
- Make sure the sensor contacts your ear skin. This is the signal when we are measuring the heart rate:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Ear-clip_Heart_Rate_Sensor/img/ardu_serial1.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Ear-clip_Heart_Rate_Sensor/img/ardu_serial2.jpg" /></div>

In the first of the figures, which is a waveform diagram of the detected heartbeat, a high pulse comes when beating.

:::note
If the serial monitor return an error message, please change the position of the sensor.
:::

Resources
---------

- [Grove - Ear-clip Heart Rate Sensor Demo code](https://files.seeedstudio.com/wiki/Grove-Ear-clip_Heart_Rate_Sensor/res/Grove-Heart_rate_chest_belt_V1.0.zip)
- [PPG Sensor System](https://files.seeedstudio.com/wiki/Grove-Ear-clip_Heart_Rate_Sensor/res/PPG%20Sensor%20System.pdf)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Ear-clip_Heart_Rate_Sensor -->

## Projects

**Transportation data visualization with Google Map**：We use the Wio LTE cat.1 to monitor transportation GPS and other info. For cold chain, we can monitor the GPS location together with temperature and humidity. For the bicycling,  we can monitor the GPS location together with the hear rate.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/SeeedStudio/atmospheric-pollution-visualization-1940f4/' width='350'></iframe>

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
