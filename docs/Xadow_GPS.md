---
name: Xadow - GPS
category: RePhone
bzurl: https://www.seeedstudio.com/Xadow-GPS-p-1600.html
oldwikiname: Xadow - GPS
prodimagename: Xadow_gps.jpg
surveyurl: https://www.research.net/r/xadow_gps
sku: 113040001
---
![](https://github.com/SeeedDocument/Xadow_GPS/raw/master/img/Xadow_gps.jpg)

Xadow GPS is an OEM GNSS receiver module, including the Fastrax IT530M and a tiny 12mm squared ceramic patch antenna. The low power module outputs a series of standard NMEA format data which provides position, satellite information and time, etc. This module can be easily connected directly to Xadow Main board to display and record the above-mentioned information. It features acquisition and tracking capability of weak signals, making it a great choice for navigation projects.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-GPS-p-1600.html)

## Specifications
---
- Working voltage: 5.0 VDC
- Channels: 99/33 (search/track)
- Navigation sensitivity: -165dBm
- Tracking sensitivity: -148 dBm
- Time to First Fix(cold acq): 23s
- Time to First Fix(warm acq): 23s
- Time to First Fix (hot acq): 1s
- Update rate: 1 Hz (configurable up to 10 Hz)
- Data protocol: NMEA-0183 rev. 3.01
- Communication Mode: UART
- Default baud rate: 115200 b/s
- Operating temperature: -40°C ~+85°C
- Dimensions: 25.43mm x 20.35mm

## Demonstration
---
There is an example showing how to read data from the GPS using software serial and sends it back out on the serial port.

![](https://github.com/SeeedDocument/Xadow_GPS/raw/master/img/IMG_4200.JPG)

!!!Note
When connect Xadow GPS to Xadow Main Board, you should concern about the connection direction. The connection method is that the unfilled corner of one Xadow module need to connect to the right angle of another module(see four corners of each Xadow module).
```
#define SerialBaud   9600
#define Serial1Baud  9600
void setup()
{
    Serial.begin(SerialBaud);
    Serial1.begin(Serial1Baud);
}

void loop()
{
    for(;;)
    {
        // copy from virtual serial line to uart and vice versa
   /*
    */
        if (Serial.available())
        {
            Serial1.write(Serial.read());
        }
        if (Serial1.available())
        {
            Serial.write(Serial1.read());
        }
    }
}
```

- Open the serial monitor, you can see:

![](https://github.com/SeeedDocument/Xadow_GPS/raw/master/img/Read_data_from_serial_monitor.jpg)

There is all the information about NMEA 0183 communication protocol. In fact, we only need to pick out the locate data, others can be ignored. The $GPRMC data is useful for us, Now let’s analysis its detail meaning:

$GPRMC,091308.000,A,2235.1683,N,11356.3607,E,0.37,259.79,050813,,,A*6E

- 091308.000－－means Greenwich Mean Time (the standard world time) 09:13:8 am. Standard - time in Beijing is eight hours ahead of Greenwich Mean Time, so Beijing Time is 5:13 pm.
- A－－means the data is valid, If the letter is V, which means $GPRMC data is valid.
- 2235.1683,N－－Latitude 22.351683 degrees.
- 11356.3607,E－－east longitude 113.563607 degrees.
- 0.37 -- means motion rate.
- 259.79－－means motion direction. the north is 0 degrees, east is 90 degrees, south is 180 degrees, west is 270 degrees.
- 050813－－means August 5, 2013.

**We can also observe this data using u-center.**
- Download [u-center](https://www.u-blox.com/en/product/u-center-windows) and install it on your computer.
- Click Receiver - > Port and select the COM port that the Xadow Main Board is using. If you are opening serial monitor of Arduino IDE, please close it.
- Click Receiver -> Baudrate and make sure 9600 is selected.
- Click View -> Text Console and you should get a window that will stream NMEA data as show below.

![](https://github.com/SeeedDocument/Xadow_GPS/raw/master/img/Read_data_from_u-_center.jpg)

- The right part in the picture above is Satellite Position, World Position, Compass, Watch. You can click View -> Docking Windows and select the windows you want to see.

## Resources
---
- [Xadow GPS Eagle File](https://github.com/SeeedDocument/Xadow_GPS/raw/master/res/Xadow_GPS_Eagle_File.zip)
- [Xadow GPS Schematic in PDF](https://github.com/SeeedDocument/Xadow_GPS/raw/master/res/Xadow_GPS_in_Schematic.pdf)
- [Fastrax IT530M Datasheet](https://github.com/SeeedDocument/Xadow_GPS/raw/master/res/IT530M_DataSheet.pdf)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>