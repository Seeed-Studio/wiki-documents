---
title: Grove - Temperature&Humidity Sensor
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Temp&Humi-Sensor-p-745.html
oldwikiname: Grove_-_Temperature&Humidity_Sensor
prodimagename: Grove-TempAndHumiSensor.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/101020011 1.jpg
surveyurl: https://www.research.net/r/Grove-TemperatureAndHumidity_Sensor
sku: 101020011
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-TemperatureAndHumidity_Sensor/master/img/Grove-TempAndHumiSensor.jpg)

This temperature & humidity sensor provides a pre-calibrated digital output. A unique capacitive sensor element measures relative humidity and the temperature is measured by a negative temperature coefficient (NTC) thermistor. It has excellent reliability and long term stability. Please note that this sensor will not work for temperatures below 0 degree.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html)



Features
--------

-   Relative Humidity and temperature measurement
-   Full range temperature compensation Calibrated
-   Digital signal
-   Long term stability
-   Long transmission distance(>20m)
-   Low power consumption

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeed.cc/Grove_System/)

Applications Ideas
------------------

-   Consumption product
-   Weather station
-   Humidity regulator
-   Air conditioner

Hardware Overview
-----------------

![](https://raw.githubusercontent.com/SeeedDocument/Grove-TemperatureAndHumidity_Sensor/master/img/Temp_Humi_sch.jpg)

Specifications
--------------

### Key Specifications

| Items        |   Min                  |
|--------------|------------------------|
| PCB Size     | 2.0cm*4.0cm            |
| Interface    | 2.0mm pitch pin header |
| IO Structure | SIG,VCC,GND,NC         |
| ROHS         | YES                    |

### Electronic Characterstics

<table border="1">
<tr>
<th>
Items
</th>
<th>
Conditions
</th>
<th>
Min
</th>
<th>
Norm
</th>
<th>
Max
</th>
<th>
Unit
</th>
</tr>
<tr align="center">
<td>
VCC
</td>
<td>
-
</td>
<td>
3.3
</td>
<td>
-
</td>
<td>
5
</td>
<td>
Volts
</td>
</tr>
<tr align="center">
<td>
Measuring Current Supply
</td>
<td>
-
</td>
<td>
1.3 
</td>
<td>
- 
</td>
<td>
2.1
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<td>
Average Current Supply
</td>
<td>
-
</td>
<td>
0.5
</td>
<td>
-
</td>
<td>
1.1
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<td rowspan="2">
Measuring Range
</td>
<td>
Humidity
</td>
<td>
20%
</td>
<td>
-
</td>
<td>
90%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
Temperature
</td>
<td>
0
</td>
<td>
-
</td>
<td>
50
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td rowspan="2">
Accuracy
</td>
<td>
Humidity
</td>
<td>
-
</td>
<td>
-
</td>
<td>
±5%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
Temperature
</td>
<td>
</td>
<td>
</td>
<td>
±2
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td rowspan="2">
 Sensitivity
</td>
<td>
Humidity
</td>
<td>
</td>
<td>
-
</td>
<td>
1%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
Temperature
</td>
<td>
</td>
<td>
</td>
<td>
1
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td rowspan="2">
Repeatability
</td>
<td>
Humidity
</td>
<td>
</td>
<td>
</td>
<td>
±1%
</td>
<td>
RH
</td>
</tr>
<tr align="center">
<td>
Temperature
</td>
<td>
</td>
<td>
</td>
<td>
±1
</td>
<td>
°C
</td>
</tr>
<tr align="center">
<td>
Long-term Stability
</td>
<td>
</td>
<td>
</td>
<td>
</td>
<td>
±1%
</td>
<td>
RH/year
</td>
</tr>
<tr align="center">
<td>
Signal Collecting Period
</td>
<td>
</td>
<td>
</td>
<td>
2
</td>
<td>
</td>
<td>
S
</td>
</tr>
</table>

Usage
-----

When MCU sends a trigger signal, sensor will change from low power consumption mode to active mode. After the trigger signal sensor will send a response signal back to MCU, then 40 bit collected data is sent out and a new signal collecting is trigged.(Note that the 40 bit collected data which is sent from sensor to MCU is already collected before the trigger signal comes.) One trigger signal receives one time 40 bit response data from sensor. Single-bus data is used for communication between MCU and sensor.
The communication process is shown below:

![](https://raw.githubusercontent.com/SeeedDocument/Grove-TemperatureAndHumidity_Sensor/master/img/Twig-Temperature_Humidity.jpg)

It costs 5ms for single time communication.The high-order bit of data sends out first. Signal Data is 40 bit, comprised of 16 bit humidity data, 16 bit temperature data and 8 bit checksum.The data format is:

    8bits integer part of humidity+8bits decimal part of humidity
    +8bits integer part of temperature+8bits decimal part of temperature
    +8bits checksum.

Programming
-----------

Connect the Temperature and Humidity sensor to analog port A0.Then you can use the following programme to gain the temperature and humidity of the environment.(The code is for seeeduino only,if you use seeeduino mega you should change the code a little. See below, if you use seeeduino mega, you should change PINC to PINF, change DDRC to DDRF and change PORTC to PORTF)

![](https://raw.githubusercontent.com/SeeedDocument/Grove-TemperatureAndHumidity_Sensor/master/img/Temperature_Sensor.jpg)

```
#define DHT11_PIN 0      // ADC0

byte read_dht11_dat()
{
    byte i = 0;
    byte result=0;
    for(i=0; i< 8; i++){

        while(!(PINC & _BV(DHT11_PIN)));  // wait for 50us
        delayMicroseconds(30);

        if(PINC & _BV(DHT11_PIN))
        result |=(1<<(7-i));
        while((PINC & _BV(DHT11_PIN)));  // wait '1' finish
    }
    return result;
}

void setup()
{
    DDRC |= _BV(DHT11_PIN);
    PORTC |= _BV(DHT11_PIN);

    Serial.begin(9600);
    Serial.println("Ready");
}

void loop()
{
    byte dht11_dat[5];
    byte dht11_in;
    byte i;
    // start condition
    // 1. pull-down i/o pin from 18ms
    PORTC &= ~_BV(DHT11_PIN);
    delay(18);
    PORTC |= _BV(DHT11_PIN);
    delayMicroseconds(40);

    DDRC &= ~_BV(DHT11_PIN);
    delayMicroseconds(40);

    dht11_in = PINC & _BV(DHT11_PIN);

    if(dht11_in){
        Serial.println("dht11 start condition 1 not met");
        return;
    }
    delayMicroseconds(80);

    dht11_in = PINC & _BV(DHT11_PIN);

    if(!dht11_in){
        Serial.println("dht11 start condition 2 not met");
        return;
    }
    delayMicroseconds(80);
    // now ready for data reception
    for (i=0; i<5; i++)
    dht11_dat[i] = read_dht11_dat();

    DDRC |= _BV(DHT11_PIN);
    PORTC |= _BV(DHT11_PIN);

    byte dht11_check_sum = dht11_dat[0]+dht11_dat[1]+dht11_dat[2]+dht11_dat[3];
    // check check_sum
    if(dht11_dat[4]!= dht11_check_sum)
    {
        Serial.println("DHT11 checksum error");
    }

    Serial.print("Current humdity = ");
    Serial.print(dht11_dat[0], DEC);
    Serial.print(".");
    Serial.print(dht11_dat[1], DEC);
    Serial.print("%  ");
    Serial.print("temperature = ");
    Serial.print(dht11_dat[2], DEC);
    Serial.print(".");
    Serial.print(dht11_dat[3], DEC);
    Serial.println("C  ");

    delay(2000);
}
```

Resources
---------

- [Temperature Humidity.zip](https://raw.githubusercontent.com/SeeedDocument/Grove-TemperatureAndHumidity_Sensor/master/res/Temperature_Humidity.zip)
- [Schematic at Easyeda](https://easyeda.com/Seeed/Grove_TemperatureHumidity_Sensor_v1_2-d24e88017bba4040907d4cee6c7edd74)

<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_Temperature&Humidity_Sensor -->
