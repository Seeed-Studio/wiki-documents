---
title: Grove - GPS
category: Communication
bzurl: https://seeedstudio.com/Grove-GPS-p-959.html
oldwikiname: Grove_-_GPS
prodimagename: Grove-GPS.jpg
bzprodimageurl: http://statics3.seeedstudio.com/images/113020003 1.jpg
surveyurl: https://www.research.net/r/Grove-GPS
sku: 113020003
tags: grove_uart, io_3v3, io_5v, plat_duino, plat_bbg, plat_pi, plat_linkit,
---

![](https://raw.githubusercontent.com/SeeedDocument/Grove-GPS/master/img/Grove-GPS.jpg)

This Grove - GPS module is a cost-efficient and field-programmable gadget armed with a SIM28 (u-blox 6 is the old version) and serial communication configuration. It features 22 tracking / 66 acquisition channels GPS receiver. The sensitivity of tracking and acquisition both reach up to -160dBm, making it a great choice for personal navigation projects and location services, as well as an outstanding one among products of the same price class.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.seeedstudio.com/depot/grove-gps-p-959.html)

## Features
--------

-   Supports NMEA and u-blox 6 protocols. ( Till Jan,10 2014, after that SIM28 instead)
-   Low power consumption
-   Baud rates configurable
-   Grove compatible interface

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeed.cc/Grove_System/)


## Specifications
-------------

| **Parameter**    | **Range/Value**              |
|------------------|------------------------------|
| Input Voltage    | 3.3/5V                       |
| BaudRate         | 4800 - 57600(u-blox version) |
| BaudRate         | 9600 - 115200(SIM28 version) |
| Default BaudRate | 9600                         |

## Platforms Supported
-------------------

## Getting Started
---------------

Following [Grove system](http://wiki.seeed.cc/Grove_System/) to help the user getting started with Grove.

### With Arduino
This sample simply reads from the GPS by using software serial and sends it back on the serial port.

#### Connection
Here we will show you how this Grove - GPS works via a simple demo. First of all, we need to prepare the below stuffs:

| Seeeduino V4 | Grove - GPS | Base Shield |
|--------------|----------------------|-----------------|
|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_1.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-GPS/raw/master/img/Grove-GPS_s.jpg)|![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_Light_Sensor/master/images/gs_4.jpg)|
|[Get ONE Now](http://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-GPS-p-959.html)|[Get ONE Now](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|

- Connect the Grove-GPS to **Digital Port 2** on the Grove - Base Shield by using a Grove Universal 4 pin cable.
- Plug the base Shield into Seeeduino-V4.
- Connect Arduino to PC by using a USB cable.

![](https://github.com/SeeedDocument/Grove-GPS/raw/master/img/Connection.jpg)

#### Software

!!!Note
    Please note that the u-center software is for windows only.

-   Install [u-center](https://www.u-blox.com/en/product/u-center-windows) software.
- Upload the code below to your Arduino/Seeeduino.

```
#include <SoftwareSerial.h>
SoftwareSerial SoftSerial(2, 3);
unsigned char buffer[64];                   // buffer array for data receive over serial port
int count=0;                                // counter for buffer array
void setup()
{
    SoftSerial.begin(9600);                 // the SoftSerial baud rate
    Serial.begin(9600);                     // the Serial port of Arduino baud rate.
}

void loop()
{
    if (SoftSerial.available())                     // if date is coming from software serial port ==> data is coming from SoftSerial shield
    {
        while(SoftSerial.available())               // reading data into char array
        {
            buffer[count++]=SoftSerial.read();      // writing data into array
            if(count == 64)break;
        }
        Serial.write(buffer,count);                 // if no data transmission ends, write buffer to hardware serial port
        clearBufferArray();                         // call clearBufferArray function to clear the stored data from the array
        count = 0;                                  // set counter of while loop to zero 
    }
    if (Serial.available())                 // if data is available on hardware serial port ==> data is coming from PC or notebook
    SoftSerial.write(Serial.read());        // write it to the SoftSerial shield
}


void clearBufferArray()                     // function to clear buffer array
{
    for (int i=0; i<count;i++)
    {
        buffer[i]=NULL;
    }                      // clear all index of array with command NULL
}
```


- Open U-center.
-  Click Receiver -> Port and select the COM port that the Arduino is using.
-  Click Receiver -> Baudrate and make sure 9600 is selected.
-  Click View -> Text Console and you should get a window that will stream NMEA data.
-  Open the serial monitor,You can see as show below:

![](https://raw.githubusercontent.com/SeeedDocument/Grove-GPS/master/img/GPS_result.jpg)


**We also can view data in Google Earth:**

1. Click File -&gt; Database Export -&gt; Google Earth KML
2. This should launch Google Earth with the history that was captured by u-center.
3. Alternatively, data can be recorded by pressing the red circle on the toolbar which will then ask where you want to save the record.
4. When we have captured enough data, click the black square to stop recording.
5. We can then convert the .ubx file generated to KML by using uploading the ubx file to [GPSVisualizer](http://www.gpsvisualizer.com/).

### With Raspberry Pi

#### Connection
First of all, we need to prepare the below stuffs:

| Raspberry pi | Grove - GPS | GrovePi_Plus |
|--------------|-------------|-----------------|
|![enter image description here](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/img/pi.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-GPS/raw/master/img/Grove-GPS_s.jpg)|![enter image description here](https://github.com/SeeedDocument/Grove-Temperature_and_Humidity_Sensor_Pro/raw/master/img/grovepi%2B.jpg)|
|[Get ONE Now](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-GPS-p-959.html)|[Get ONE Now](https://www.seeedstudio.com/GrovePi%2B-p-2241.html)|

- Follow [instruction](http://wiki.seeed.cc/GrovePi_Plus/) to configure the development environment.
- Plug the sensor to grovepi+ socket **RPISER** by using a grove cable.

![](https://github.com/SeeedDocument/Grove-GPS/raw/master/img/Pi_Connection.jpg)

#### Software

- Navigate to the demos' directory:
```
    cd yourpath/GrovePi/Software/Python/
```
-   To see the code
```
    nano grove_gps.py   # "Ctrl+x" to exit #
```

```
import serial, time
import smbus
import math
import RPi.GPIO as GPIO
import struct
import sys
 
ser = serial.Serial('/dev/ttyAMA0',  9600, timeout = 0)   #Open the serial port at 9600 baud
ser.flush()
 
class GPS:
    #The GPS module used is a Grove GPS module http://www.seeedstudio.com/depot/Grove-GPS-p-959.html
    inp=[]
    # Refer to SIM28 NMEA spec file https://raw.githubusercontent.com/SeeedDocument/Grove-GPS/master/res/SIM28_DATA_File.zip
    GGA=[]
 
    #Read data from the GPS
    def read(self):
        while True:
            GPS.inp=ser.readline()
            if GPS.inp[:6] =='$GPGGA': # GGA data , packet 1, has all the data we need
                break
            time.sleep(0.1)
        try:
            ind=GPS.inp.index('$GPGGA',5,len(GPS.inp)) #Sometimes multiple GPS data packets come into the stream. Take the data only after the last '$GPGGA' is seen
            GPS.inp=GPS.inp[ind:]
        except ValueError:
            print ""
        GPS.GGA=GPS.inp.split(",")   #Split the stream into individual parts
        return [GPS.GGA]
 
    #Split the data into individual elements
    def vals(self):
        time=GPS.GGA[1]
        lat=GPS.GGA[2]
        lat_ns=GPS.GGA[3]
        long=GPS.GGA[4]
        long_ew=GPS.GGA[5]
        fix=GPS.GGA[6]
        sats=GPS.GGA[7]
        alt=GPS.GGA[9]
        return [time,fix,sats,alt,lat,lat_ns,long,long_ew]
 
g=GPS()
f=open("gps_data.csv",'w')   #Open file to log the data
f.write("name,latitude,longitude\n")   #Write the header to the top of the file
ind=0
while True:
    try:
        x=g.read()  #Read from GPS
        [t,fix,sats,alt,lat,lat_ns,long,long_ew]=g.vals() #Get the individial values
        print "Time:",t,"Fix status:",fix,"Sats in view:",sats,"Altitude",alt,"Lat:",lat,lat_ns,"Long:",long,long_ew
        s=str(t)+","+str(float(lat)/100)+","+str(float(long)/100)+"\n"   
        f.write(s)   #Save to file
        time.sleep(2)
    except IndexError:
        print "Unable to read"
    except KeyboardInterrupt:
        f.close()
        print "Exiting"
        sys.exit(0)
```

- Run the demo.
```
    sudo python grove_gps.py
```

- Here is the result.

![](https://raw.githubusercontent.com/SeeedDocument/Grove-GPS/master/img/Grovepi_gps_00.jpg)

<div class="admonition note">
<p class="admonition-title">Note</p>
GPS is better used outdoors. It is recommended to put your raspberry pi outside the window or any place outdoors.
</div>

## SIM28 module Note:
------------------

1.  Grove－GPS  has change the module as SIM28 which the same footprint as origin version.
2. We should use ["SIMCom GPS DEMO"](https://raw.githubusercontent.com/SeeedDocument/Grove-GPS/master/res/SIMCom_GPS_DEMO_V1.07.zip) tools to receive SIM28 module data.
3. Open SIMCom_GPS_DEMO tools, go to Module->properties->module->select SIM28.
4. SIMCom_GPS_DEMO_V1.07 is for Windows only.

    ![](https://raw.githubusercontent.com/SeeedDocument/Grove-GPS/master/img/SIM28_module_select.jpg)

5. Open SIMCom_GPS_DEMO tools, go to Module->connect. Select the serial port which the GPS module used.

    ![](https://raw.githubusercontent.com/SeeedDocument/Grove-GPS/master/img/SIM28_module_tools_pannel.jpg)

## Resources
---------

-   **[Eagle]** [Grove-GPS Eagle File](https://raw.githubusercontent.com/SeeedDocument/Grove-GPS/master/res/GPS.zip)
-   **[PDF]** [GPS Schematic(PDF)](https://raw.githubusercontent.com/SeeedDocument/Grove-GPS/master/res/GPS.pdf)
-   **[Datasheet]** [E-1612-UB Datasheet](https://raw.githubusercontent.com/SeeedDocument/Grove-GPS/master/res/E-1612-UB_Datasheets_Sheet.pdf)
-   **[Datasheet]** [U-Blox6 Receiver Description Protocol Spec](https://raw.githubusercontent.com/SeeedDocument/Grove-GPS/master/res/U-blox-6-Receiver-Description-Including-Protocol-Specification.zip)
-   **[Software]** [U-Blox u-center GPS evaluation software](https://www.u-blox.com/en/product/u-center-windows)
- **[Document]**  [SIM28\_DATA\_File](https://raw.githubusercontent.com/SeeedDocument/Grove-GPS/master/res/SIM28_DATA_File.zip)
-  **[Document]** [SIMCom\_GPS\_DEMO\_V1.07](https://raw.githubusercontent.com/SeeedDocument/Grove-GPS/master/res/SIMCom_GPS_DEMO_V1.07.zip)

<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Grove_-_GPS -->
