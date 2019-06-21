---
name: Grove - Chest Strap Heart Rate Sensor
category: Sensor
bzurl: https://seeedstudio.com/Grove-Chest-Strap-Heart-Rate-Sensor-p-1115.html
oldwikiname: Grove_-_Chest_Strap_Heart_Rate_Sensor
prodimagename: Heart_rate_chest_belt_kit.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/P3212441.jpg
surveyurl: https://www.research.net/r/Grove-Chest_Strap_Heart_Rate_Sensor
sku: 101020066
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Chest_Strap_Heart_Rate_Sensor/master/img/Heart_rate_chest_belt_kit.jpg)

This heart rate chest strap kit contains a chest belt and a 5.3 KHz AM receiver module. The heart rate measurement kit can be used to monitor the heart rate of patients and athletes, meanwhile the result can be displayed on a screen via serial port and saved for analysis. The entire system has lots of advantages, e.g. high sensitivity, low power consumption and portability. Because the modules communicate with each other via AM, it is very convenient to let you move (notice that the effective distance is 30cm).

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Chest-Strap-Heart-Rate-Sensor-p-1115.html)

Features
--------

-   Low power consumption
-   Wireless
-   Convenient to use
-   Built-in ferrite antenna
-   High sensitivity
-   Fully RoHS compliant

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeedstudio.com/Grove_System/)
    
Specifications
--------------

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
5.5
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
bust range
</th>
<td>
65
</td>
<td>
-
</td>
<td>
145
</td>
<td>
cm
</td>
</tr>
<tr align="center">
<th scope="row">
Modulation mode
</th>
<td colspan="3">
5.3KHz AM modulate
</td>
<td>
/
</td>
</tr>
<tr align="center">
<th scope="row">
Battery life
</th>
<td colspan="3">
more than a half year (depending on your usage)
</td>
<td>
/
</td>
</tr>
<tr align="center">
<th scope="row">
Effective receiving distance
</th>
<td colspan="3">
30
</td>
<td>
cm
</td>
</tr>
<tr align="center">
<th scope="row">
Receiving modules
</th>
<td colspan="3">
48 X 25 X 10
</td>
<td>
mm
</td>
</tr>
</table>

Application Ideas
-----------------

-   Heart rate monitor.

<div class="admonition warning">
<p class="admonition-title">Caution</p>
<p><ol><li>The chest belt is powered by a CR2032 coin battery. Open the back cover with a coin to replace it.</li>
<li>If not used for a long time please remove the battery.</li></ol></p>
</div>

Usage
-----

The following sketch demonstrates a simple application of using the Chest Strap Heart Rate Sensor to measure heart rate.

-   Connect this module to the digital port D2 on your [base shield](http://www.seeedstudio.com/depot/grove-base-shield-p-754.html?cPath=132). And connect Grove-LED to Digital port 4.
-   Plug the Base Shield into Arduino/Seeeduino.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Chest_Strap_Heart_Rate_Sensor/master/img/Grove-Chest_Strap_Heart_Rate_Sensor.jpg)

-   Copy and paste code below to a new Arduino sketch.

```
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
-   This is the signal when we are measuring the heart rate:

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Chest_Strap_Heart_Rate_Sensor/master/img/GROVE_heart_rate_chest_belt.bmp) 

![](https://raw.githubusercontent.com/SeeedDocument/Grove-Chest_Strap_Heart_Rate_Sensor/master/img/Grove-heart_rate_serial.jpg)

In the first of the figures which is a waveform diagram of the detected heartbeat, a high pulse comes when beating. 

<div class="admonition note">
<p class="admonition-title">Notes</p>
<p> 1) The chest belt's wings must have contact with your skin to get a high accuracy.</p>
<p>2) The maximal distance between chest belt and receive module must be less than 30cm.</p>
</div>


Resources
---------

-   [Grove - Chest Strap Heart Rate Sensor EAGLE File](https://raw.githubusercontent.com/SeeedDocument/Grove-Chest_Strap_Heart_Rate_Sensor/master/res/Grove-Heart_rate_chest_belt_V1.0eagle_file.zip)
-   [Chest Strap Heart Rate Sensor Demo Code](https://raw.githubusercontent.com/SeeedDocument/Grove-Chest_Strap_Heart_Rate_Sensor/master/res/MeasureHeartRate.zip)


<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_Chest_Strap_Heart_Rate_Sensor -->

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>