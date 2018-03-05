---
title: Grove - Ear-clip Heart Rate Sensor
category: Sensor
bzurl: https://seeedstudio.com/Grove-Ear-clip-Heart-Rate-Sensor-p-1116.html
oldwikiname: Grove_-_Ear-clip_Heart_Rate_Sensor
prodimagename: Heart_rate_ear_clip_kit.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/product/P3212438.jpg
surveyurl: https://www.research.net/r/Grove-Ear-clip_Heart_Rate_Sensor
sku: 101020033
tags: grove_digital, io_3v3, io_5v, plat_duino, plat_pi, plat_bbg
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Ear-clip_Heart_Rate_Sensor/master/img/Heart_rate_ear_clip_kit.jpg)

The Heart Rate Ear clip kit contains a ear clip and a receiver module. The heart rate measure kit can be used to monitor heart rate of patient and athlete. The result can be displayed on a screen via the serial port and can be saved for analysis. The entire system is a high sensitivity, low power consumption and portable.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/Grove-Ear-clip-Heart-Rate-Sensor-p-1116.html)

Features
--------

-   Low power consumption
-   Convenient to use
-   High sensitivity
-   Fully RoHS compliant

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeed.cc/Grove_System/)
    
Specifications
-------------

<table border="1" cellspacing="0" width="80%">
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

-   Heart rate monitor.

Platforms Supported
-------------------

Usage
-----

The following sketch demonstrates a simple application of using the Ear-clip Heart Rate Sensor to measure heart rate.

-   Connect this module to the digital port D2 on [Grove-Base shield](http://www.seeedstudio.com/depot/grove-base-shield-p-754.html?cPath=132). And connect Grove-LED to Digital port 4.
-   Plug the Base Shield into Arduino/Seeeduino.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Ear-clip_Heart_Rate_Sensor/master/img/Ear_Clip_Heart_Rate.jpg)

-   Copy and paste code below to a new Arduino sketch.

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

-   Upload the code.
-   Make sure the sensor contacts your ear skin. This is the signal when we are measuring the heart rate:

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Ear-clip_Heart_Rate_Sensor/master/img/GROVE_heart_rate_chest_belt.bmp)

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Ear-clip_Heart_Rate_Sensor/master/img/Grove-heart_rate_serial.jpg)

In the first of the figures, which is a waveform diagram of the detected heartbeat, a high pulse comes when beating. 

<div class="admonition note">
<p class="admonition-title">Note</p>
If the serial monitor return an error message, please change the position of the sensor.
</div>

Resources
---------

- [Grove - Ear-clip Heart Rate Sensor Demo code](https://raw.githubusercontent.com/SeeedDocument/Grove-Ear-clip_Heart_Rate_Sensor/master/res/Grove-Heart_rate_chest_belt_V1.0.zip)

<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_Ear-clip_Heart_Rate_Sensor -->
