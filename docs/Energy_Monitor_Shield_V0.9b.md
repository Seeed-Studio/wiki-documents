---
name: Energy Monitor Shield V0.9b‏‎
category: Discontinued
bzurl:
oldwikiname: Energy_Monitor_Shield_V0.9b‏‎
prodimagename:
bzprodimageurl: https://www.research.net/r/Energy_Monitor_Shield_V0-9b
sku:
tags:

---

![](https://github.com/SeeedDocument/Energy_Monitor_Shield_V0.9b/raw/master/img/EMS_intro.jpg)

![](https://github.com/SeeedDocument/Energy_Monitor_Shield_V0.9b/raw/master/img/EMS_h.jpg)

Energy Monitor Shield is an Arduino-compatible expansion card designed for building energy monitoring system with LCD screen and an interface for connecting the wireless transceiver nRF24L01 +.

Model: [830070001](https://www.seeedstudio.com/)



##   Features

*   Connect up to three sensors AC (30-100A).

*   Support for LCD Screen Nokia LCD5110

*   Turn off the LCD backlight with a jumper

*   Two buttons to control (operate one analog pin)

*   Interface to connect the transceiver to 2.4G nRF24L01 +

*   GROVE-compatible connector: I2C

*   Fully compatible with Ethernet Shield (Wiznet 5100 + SD)

##   Layout and schematics

![](https://github.com/SeeedDocument/Energy_Monitor_Shield_V0.9b/raw/master/img/Em-top.jpg)

The left side of EM Shield are three connectors for current sensors, right - connector for LCD-screen.

Jumper JP1 is used to enable / disable real-backlight LCD-screen.

In the upper right corner - I2C-connector.

On the right are two buttons (labeled S1 and S2).

In the center of the board (just to the right LCD-screen) - connector for nRF24L01 +.

**Schematic of the device**

##   Basic functionality

In the basic version (without using Ethernet Shield) may organize monitoring of energy consumption in three different circuits using current sensors.

Information about the current level of consumption can be displayed on the LCD screen.

Device Management can be organized using two buttons on the Shield.

The obtained data can be transmitted by the transceiver nRF24L01 +.

##  Expansion Capabilities

Additionally EM Shield can connect any device using i2c Grove-compatible connector (sensors, displays, etc.).
EM Shield was designed to be fully compatible with the Ethernet Shield (Wiznet 5100 + SD) - so you can use these two Shields together to create even more advanced device monitoring electricity (logging on SD-card and presenting data on a web page).

##  Interfaces

*   A0, A1, A2 - involved for connecting sensors AC

*   A4 (SDA), A5 (SCL) - displayed on the connector "I2C" (the other two pin connector - VCC and GND for sensor supply)

*   Interface for connecting RF-module nRF24L01+:

    *   D11 - MOSI

        *   D12 - MISO
    *   D13 - SCK

        *   D8 - RF_CE

        *   D7 - RF_CSN

        *   D2 - RF_IRQ

*   Interface for connecting LCD5110:

    *   D11 - MOSI
    *   D13 - SCK

        *   D5 - LCD_D/C

        *   D6 - LCD_RST

        *   D3 - LCD_CS

*   A3 - Buttons

##  Libraries

###   Necessary libraries

To use Energy Monitor Shield requires the following libraries:

*   Working with the transceiver nRF24L01+ - [RF24](https://github.com/maniacbug/RF24/archive/master.zip)

*   Using the display LCD 51110 (supporting SPI) - [LCD5110_Graph_SPI](https://github.com/stepanovalex/LCD5110_Graph_SPI/archive/master.zip)

*   Work with current sensors - [EmonLib](https://github.com/openenergymonitor/EmonLib/archive/master.zip)

*   You must use the library from - [www.mysensors.org](https://github.com/mysensors/Arduino/tree/master)

*   MySensors Arduino Library [(v1.5)](http://www.mysensors.org/download/sensor_api_15)

Requires the libraries that are used when working RF24 and LCD-display: SPI

###   Features using libraries

Library has used examples of them just to understand how they work.

Initialization RF-module as follows:

<pre>...

//RF24 radio(CE,CSN);
RF24 radio(7,8);

...</pre>

Initialize LCD-display is as follows:

<pre>...

//LCD5110 myGLCD(DC,RST,CS);
LCD5110 myGLCD(5,6,3);

...</pre>

##  Simple demonstration

<pre>
#include &lt;SPI.h&gt;
#include &lt;LCD5110_Graph_SPI.h&gt;
#include "EmonLib.h"   

#define WINDOW 15
#define DELTA 1500

EnergyMonitor emon1;

double sIrms;
float Pcur;
float Pmax;
float Pmin=100;

LCD5110 myGLCD(5,6,3);

extern unsigned char SmallFont[];

unsigned long measureTime;
boolean flag=false;
double delta=0;

#define DELTAMEASURE 30000

void setup(void)
{
  myGLCD.InitLCD(70);
  myGLCD.setFont(SmallFont);

  myGLCD.update();

  emon1.current(0, 111.1);             // Current: input pin, calibration.
  double Irms[WINDOW];
  // Calibrate (find offset)
  double cIrms = 0;
  flag = false;

  while (!flag) {
    myGLCD.print("calibrating", 0, 0);
    myGLCD.update();
    Irms[0] = emon1.calcIrms(1480); // the first value in the measurement obviously "crooked"
      //Serial.println("calculate delta");
      for (int i=0; i&lt;WINDOW; i++) {
        Irms[i] = emon1.calcIrms(1480);
        cIrms = cIrms + Irms[i];
        delay(100);
      }
      delta = cIrms/WINDOW;
      flag = true;
  }

//myGLCD.print(" ready", 0, 0);
    //myGLCD.update();    

}

void loop(void)
{
  // write the current value
  sIrms = emon1.calcIrms(1480) - delta;  // Calculate Irms only
  sIrms = abs(sIrms);
  Pcur = sIrms*0.220;

    // the received data is printed
    char tbuf[6];
    dtostrf(Pcur,5,5,tbuf);
    myGLCD.print(tbuf, 0, 0);
    dtostrf(analogRead(A3),4,0,tbuf);
    myGLCD.print(tbuf, 30, 15);

    myGLCD.update();

    delay(250);

}
</pre>

##  Simple demonstration  with wireless technology

<div class="mw-geshi mw-code mw-content-ltr container" dir="ltr"><div class="arduino source-arduino"><pre class="de1"> 
<span class="coMULTI">/*
 This example code is in the public domain.
 */</span>

<span class="co2">#include &lt;SPI.h&gt;</span>
<span class="co2">#include &lt;MySensor.h&gt;  // Include MySensors.org Library V1.5</span>
<span class="co2">#include "EmonLib.h" // Include Emon Library</span>
<span class="co2">#include &lt;LCD5110_Graph_SPI.h&gt; // Include NOKIA5110 Library</span>

<span class="co2">#define CHILD_ID_POWER 0</span>

EnergyMonitor emon<span class="sy4">;</span>

LCD5110 myGLCD<span class="br0">(</span><span class="nu0">5</span>,<span class="nu0">6</span>,<span class="nu0">3</span><span class="br0">)</span><span class="sy4">;</span>
<span class="kw4">extern</span> <span class="kw4">unsigned</span> <span class="kw4">char</span> SmallFont<span class="br0">[</span><span class="br0">]</span><span class="sy4">;</span>

MyTransportNRF24 transport<span class="br0">(</span><span class="nu0">7</span>, <span class="nu0">8</span><span class="br0">)</span><span class="sy4">;</span> <span class="co1">//for EMv1</span>
MySensor gw<span class="br0">(</span>transport<span class="br0">)</span><span class="sy4">;</span>

<span class="kw4">unsigned</span> <span class="kw4">long</span> lastSend<span class="sy4">;</span>
<span class="kw4">unsigned</span> <span class="kw4">long</span> SEND_FREQUENCY <span class="sy1">=</span> <span class="nu0">20000</span><span class="sy4">;</span> <span class="co1">// Minimum time between send (in milliseconds). We don't wnat to spam the gateway.</span>

<span class="kw4">float</span> Irms<span class="sy4">;</span>
<span class="kw4">float</span> lastIrms <span class="sy1">=</span> <span class="sy2">-</span><span class="nu0">99</span><span class="sy4">;</span>

<span class="kw4">char</span> tbuf<span class="br0">[</span><span class="nu0">8</span><span class="br0">]</span><span class="sy4">;</span>
<span class="kw4">char</span> sbuf<span class="br0">[</span><span class="nu0">12</span><span class="br0">]</span><span class="sy4">;</span>

MyMessage IrmsMsg<span class="br0">(</span>CHILD_ID_POWER, V_KWH<span class="br0">)</span><span class="sy4">;</span>

<span class="kw4">void</span> <span class="kw2">setup</span><span class="br0">(</span><span class="br0">)</span>  
<span class="br0">{</span>
  myGLCD.<span class="me1">InitLCD</span><span class="br0">(</span><span class="br0">)</span><span class="sy4">;</span>
  myGLCD.<span class="me1">setFont</span><span class="br0">(</span>SmallFont<span class="br0">)</span><span class="sy4">;</span>
  myGLCD.<span class="me1">update</span><span class="br0">(</span><span class="br0">)</span><span class="sy4">;</span>

  <span class="co1">// The third argument enables repeater mode.</span>
  gw.<span class="kw3">begin</span><span class="br0">(</span><span class="kw2">NULL</span>, AUTO, <span class="kw2">true</span><span class="br0">)</span>,
  gw.<span class="me1">sendSketchInfo</span><span class="br0">(</span><span class="st0">"Energy Monitor v1"</span>, <span class="st0">"1.0"</span><span class="br0">)</span><span class="sy4">;</span>

<span class="co1">//  emon.current(0, 111.1);             // Current: input pin, calibration.</span>
   emon.<span class="me1">current</span><span class="br0">(</span><span class="nu0">0</span>, <span class="nu16">66.5</span><span class="br0">)</span><span class="sy4">;</span>

  <span class="co1">// Register all sensors to gw (they will be created as child devices)</span>

  gw.<span class="me1">present</span><span class="br0">(</span>CHILD_ID_POWER, S_POWER<span class="br0">)</span><span class="sy4">;</span>
<span class="br0">}</span>

<span class="kw4">void</span> <span class="kw2">loop</span><span class="br0">(</span><span class="br0">)</span>      
<span class="br0">{</span>      
  gw.<span class="me1">process</span><span class="br0">(</span><span class="br0">)</span><span class="sy4">;</span>
  <span class="kw4">unsigned</span> <span class="kw4">long</span> now <span class="sy1">=</span> <span class="kw3">millis</span><span class="br0">(</span><span class="br0">)</span><span class="sy4">;</span>

  <span class="kw4">double</span> Irms <span class="sy1">=</span> emon.<span class="me1">calcIrms</span><span class="br0">(</span><span class="nu0">1480</span><span class="br0">)</span><span class="sy4">;</span>  <span class="co1">// Calculate Irms only</span>
  <span class="kw4">float</span> realIrms  <span class="sy1">=</span> emon.<span class="me1">Irms</span><span class="sy2">*</span><span class="nu0">220</span><span class="sy4">;</span>        <span class="co1">//extract Real Power into variable</span>

 <span class="kw1">if</span> <span class="br0">(</span>realIrms <span class="sy3">!</span><span class="sy1">=</span> lastIrms<span class="br0">)</span> <span class="br0">{</span>
      gw.<span class="kw3">send</span><span class="br0">(</span>IrmsMsg.<span class="me1">set</span><span class="br0">(</span>realIrms, <span class="nu0">1</span><span class="br0">)</span><span class="br0">)</span><span class="sy4">;</span> <span class="co1">//send to gateway</span>

  lastIrms<span class="sy1">=</span>realIrms<span class="sy4">;</span>
  <span class="br0">}</span>

   dtostrf<span class="br0">(</span>realIrms,<span class="nu0">5</span>,<span class="nu0">2</span>,tbuf<span class="br0">)</span><span class="sy4">;</span>
    <span class="kw3">sprintf</span><span class="br0">(</span>sbuf, <span class="st0">"  %s kWt"</span>, tbuf<span class="br0">)</span><span class="sy4">;</span>
    myGLCD.<span class="kw3">print</span><span class="br0">(</span>sbuf, <span class="nu0">20</span>, <span class="nu0">0</span><span class="br0">)</span><span class="sy4">;</span>   
    myGLCD.<span class="kw3">print</span><span class="br0">(</span><span class="st0">"Powr:"</span>, <span class="nu0">0</span>, <span class="nu0">0</span><span class="br0">)</span><span class="sy4">;</span>  

    dtostrf<span class="br0">(</span>Irms,<span class="nu0">5</span>,<span class="nu0">2</span>,tbuf<span class="br0">)</span><span class="sy4">;</span>
    <span class="kw3">sprintf</span><span class="br0">(</span>sbuf, <span class="st0">"  %s Amp"</span>, tbuf<span class="br0">)</span><span class="sy4">;</span>
    myGLCD.<span class="kw3">print</span><span class="br0">(</span>sbuf, <span class="nu0">20</span>, <span class="nu0">10</span><span class="br0">)</span><span class="sy4">;</span>   
    myGLCD.<span class="kw3">print</span><span class="br0">(</span><span class="st0">"Irms:"</span>, <span class="nu0">0</span>, <span class="nu0">10</span><span class="br0">)</span><span class="sy4">;</span>  

    myGLCD.<span class="me1">update</span><span class="br0">(</span><span class="br0">)</span><span class="sy4">;</span>

      <span class="kw2">Serial</span>.<span class="kw3">print</span><span class="br0">(</span><span class="st0">"Power: "</span><span class="br0">)</span><span class="sy4">;</span>
      <span class="kw2">Serial</span>.<span class="kw3">println</span><span class="br0">(</span>realIrms<span class="br0">)</span><span class="sy4">;</span>

  gw.<span class="me1">sleep</span><span class="br0">(</span>SEND_FREQUENCY<span class="br0">)</span><span class="sy4">;</span>
  <span class="br0">}</span></pre></div></div>

##  Version Tracker

<table  cellpadding="5" cellspacing="0">
<tr>
<td width="150"> **Revision**
</td>
<td width="450"> **Description**
</td>
<td width="80"> **Release**
</td></tr>
<tr style="font-size: 90%">
<td> 1.0
</td>
<td> Public version
</td>
<td> 01.04.2014
</td></tr>
<tr style="font-size: 90%">
<td> 0.9b
</td>
<td> Public version (Not produced)
</td>
<td> 20.10.2013
</td></tr>
<tr style="font-size: 90%">
<td> 0.9
</td>
<td> Prototype
</td>
<td> 10.09.2013
</td></tr></table>

##   Questions and Answers

*   Blog [Energy Monitor Shield - Wireless energy monitoring](//devicter.blogspot.ru/2014/03/energy-monitor-shield.html#more) RU

*   Ask a question by e-mail support@devicter.ru

##   How to buy  

This product can be purchased:

*   China (shipping worldwide)

    *   [Seeed store](http://www.seeedstudio.com/depot/Energy-Monitor-Shield-Monitoring-System-with-Nokia-LCD-Screen-p-1775.html)



*   Russia

    *   [Devicter store](http://devicter.ru/goods/EM-Shield)

##   Licensing  

This documentation is licensed under the Creative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/) Source code and libraries are

licensed under [GPL/LGPL](http://www.gnu.org/licenses/gpl.html), see source code files for details.

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>