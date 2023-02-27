---
description: GPS-Modules-Selection-Guide
title: GPS Modules Selection Guide
tags:
  - Tutorial
keywords:
  - Tutorial
image: https://avatars.githubusercontent.com/u/10758833
slug: /GPS-Modules-Selection-Guide
last_update:
  date: 02/01/2023
  author: w0x7ce

no_comments: false # for Disqus

---

We have released various types of GPS Modules in recent years. Let's take a close look at them and figure out which one is best suited for you!

For all the GPS or Communication modules in our bazaar, please click [Seeed Studio Bazaar](https://www.seeedstudio.com/) to check.

## Introduction to GPS and GPS Modules

One of the global positioning system (GPS) devices ultilizes data from satellites to locate a specific point on the Earth in a process named trilateration. Meanwhile, a GPS receiver measures the distances to satellites using radio signals to trilaterate. And trilateration is similar to triangulation, which measures angles, depicted in this illustration (Tim Gunther, 2020). GPS modules contain tiny processors and antennas that directly receive data sent by satellites through dedicated RF frequencies. From there, it’ll receive timestamp from each visible satellites, along with other pieces of data. If the module’s antenna can spot 4 or more satellites, it’s able to accurately calculate its position and time.

The four well-known Global Navigation Satellite System include GPS, BDS(Beidou), GLONASS and GALILEO four satellite navigation systems. The earliest appeared in the United States is GPS (Global Positioning System), which is the most complete technology at this stage. BDS, GLONASS and GALILEO have become the other largest satellite navigation systems in the world and are currently in the process of modernization.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Grove-GPS/img/28251.jpg" /><figcaption><b>Figure 1</b>. <i> Illustration of globe with three satellites triangulating a precise location. ( Tim Gunther, 2020 ) </i></figcaption>
</div>

We will introduce and compare these two GPS modules:

- [Grove – GPS Module](https://wiki.seeedstudio.com/Grove-GPS/)  
- [Grove – GPS(Air530)](https://wiki.seeedstudio.com/Grove-GPS-Air530/)

These GPS modules are compatible with Arduino and Raspberry Pi, making it easy for you to start to try out.The Air 530 Module in **Grove - GPS(Air530)** is a high-performance, highly integrated multi-mode statelite positioning and navigation module. It supports GPS / Beidou / Glonass / Galileo / QZSS / SBAS, which makes it suitable for GNSS positioning applications such as car navigation, smart wear and drone. And Air530 module is also supporting NMEA 0183 V4.1 protocol and compatible with previous versions.

Meanwhile, the E-1612-UB module series of **Grove - GPS Module** is a family of stand-alone GPS receivers featuring the high performance u-blox 5 positioning engine. The 50-channel u-blox 5 positioning engine boasts a Time-To-First-Fix ( TTFF ) of under 1 second. The dedicated acquisition engine, with over 1 million correlators, is capable of massive parallel time / frequency space searches, enabling it to find satellites instantly.

## Operating Principle

You ought to acknowledge the principles of GPS modules before purchasing and the table below is provding some information.

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-5hs1{background-color:#656565;border-color:#c0c0c0;color:#FFF;font-size:18px;text-align:center;vertical-align:top}
.tg .tg-q854{background-color:#ffffff;border-color:#c0c0c0;color:#000000;font-size:18px;text-align:center;vertical-align:top}
.tg .tg-uxnu{background-color:#ffffff;border-color:#c0c0c0;color:#000000;font-size:18px;text-align:left;vertical-align:top}
</style> -->
<!-- <table class="tg" style="undefined;table-layout: fixed; width: 791px">
<colgroup>
<col style="width: 200px">
<col style="width: 591px">
</colgroup>
<thead>
  <tr>
    <th class="tg-5hs1">Term of GPS Modules</th>
    <th class="tg-5hs1">Operating principle</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-q854"><br><br>DGPS<br></td>
    <td class="tg-uxnu">DGPS is a differential GPS reference station that uses known accurate three-dimensional coordinates to obtain the pseudorange correction amount or position correction amount, and then sends this correction amount to the user (GPS navigator in real time or afterwards) to correct the user's measurement data to improve GPS positioning accuracy.</td>
  </tr>
  <tr>
    <td class="tg-q854"><br><br>Channels</td>
    <td class="tg-uxnu">The number of channels that the GPS module runs will affect your time to first fix (TTFF). Since the module does not know that it is looking at the satellite, it can check more frequencies/channels at a time, and it can accordingly find repairs faster. After the module is locked or repaired, some modules will close the extra channel blocks to save power.</td>
  </tr>
  <tr>
    <td class="tg-q854">TTFF</td>
    <td class="tg-uxnu">Time to first fix. A specification detailing time required for a GPS receiver to acquire a position after power-on.</td>
  </tr>
  <tr>
    <td class="tg-q854"><br><br><br>NMEA</td>
    <td class="tg-uxnu">NMEA is a standard format developed by the National Marine Electronics Association for marine electronic equipment.NMEA data is displayed in sentences and sent out of the GPS modules serial transmit (TX) pin."GGA" is the most commonly used format, it includes positioning time, latitude, longitude, altitude, the number of satellites used for positioning, DOP value, differential status and correction period, etc.</td>
  </tr>
  <tr>
    <td class="tg-q854">Update Rate</td>
    <td class="tg-uxnu">Update rate refers to how often the GPS module recalculates and reports its position.</td>
  </tr>
  <tr>
    <td class="tg-q854">Baud Rate</td>
    <td class="tg-uxnu">Baud Rate refers to how fast data is sent over a serial line. And higher the baud rate allows for faster GPS data to be sent.</td>
  </tr>
  <tr>
    <td class="tg-q854"><br>Sensitivity</td>
    <td class="tg-uxnu">dBm figure dictates how prone the gps module is able to capture the frequency. Higher dbm indicates that the module is able to better pickup satalite signals.</td>
  </tr>
  <tr>
    <td class="tg-q854">Power Requirements</td>
    <td class="tg-uxnu">GPS modules can consume a substantial amount of power. Average being 30mA at 3.3V.</td>
  </tr>
  <tr>
    <td class="tg-q854"><br>Antennas<br></td>
    <td class="tg-uxnu">Each antenna is designed to pickup GPS L1 frequency of 1.5752 GHz. Position and design of antenna is crucial for optimal performance of GPS.</td>
  </tr>
  <tr>
    <td class="tg-q854"><br>Accuracy<br></td>
    <td class="tg-uxnu">Lower the distance it can get down to = Higher accuracy. Usually able to find out your location within 30 seconds, down to +/- 10m and most modules can get it down to +/-3m.</td>
  </tr>
  <tr>
    <td class="tg-q854"><br><br>Hot Start<br></td>
    <td class="tg-uxnu">It means that there has not been too much movement in the place where the power was turned off last time, and the time from the last positioning is less than 2 hours. When positioning again, the GPS chip can continue to use the previous ephemeris to quickly search for stars through software, to achieve second positioning.</td>
  </tr>
  <tr>
    <td class="tg-q854"><br>Warm Start</td>
    <td class="tg-uxnu">Refers to the situation where the positioning time is more than 2 hours from the last positioning time, and the search time is between cold start and hot start.</td>
  </tr>
  <tr>
    <td class="tg-q854"><br>Cold Start<br></td>
    <td class="tg-uxnu">If the module power is turned off for a long time, and the backup capacitor disappears, the data will be lost. Next time you power up, GPS will need to download new almanac and ephemeris data.</td>
  </tr>
</tbody>
</table> -->

## Field of Applicaitons

There are a numerous ultilizations of GPS Modules. Particularly, plenty of social activities are able to be developed by applications of these GPS Modules. Therefore, GPS Modules play important roles in various sectors, which are including Environmental Measurement, Transportation, Emergency Rescue, Agriculture, Entertainment and etc.
<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-5hs1{background-color:#656565;border-color:#c0c0c0;color:#FFF;font-size:18px;text-align:center;vertical-align:top}
.tg .tg-5z8m{background-color:#FFF;border-color:#c0c0c0;color:#000000;font-size:18px;text-align:center;vertical-align:top}
.tg .tg-ut4k{background-color:#FFF;border-color:#c0c0c0;color:#000000;font-size:18px;text-align:left;vertical-align:top}
</style> -->
<table className="tg" style={{tableLayout: 'fixed', width: 792}}>
  <colgroup>
    <col style={{width: 201}} />
    <col style={{width: 591}} />
  </colgroup>
  <thead>
    <tr>
      <th className="tg-5hs1">Field of application</th>
      <th className="tg-5hs1">Function</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="tg-5z8m"><br /><br />Measurement<br /></td>
      <td className="tg-ut4k">It uses carrier phase differential technology (RTK) to process the carrier phase of two observation stations in real time with an accuracy of centimeter level. Measurement results are unified in WGS84 coordinates, information is automatically received and stored, reducing cumbersome intermediate processing Link.</td>
    </tr>
    <tr>
      <td className="tg-5z8m"><br /><br />Transportation<br /></td>
      <td className="tg-ut4k">GPS modules can be used for autonomous navigation, port management and entry guidance, route traffic management and tracking and monitoring. Vehicle-mounted equipment uses GPS for precise positioning, combined with electronic maps and real-time traffic conditions, automatically matches the optimal path, and implements autonomous navigation of the vehicle.</td>
    </tr>
    <tr>
      <td className="tg-5z8m"><br /><br /><br />Emergency Rescue<br /></td>
      <td className="tg-ut4k">Using GPS positioning technology, emergency dispatch of fire, ambulance and police can be carried out, and the emergency response department's response efficiency to fire, crime scene, traffic accident, traffic jam and other emergency events can be improved. A fishing boat equipped with a GPS module can quickly locate and alarm when a dangerous situation occurs, so that it can obtain rescue faster and more timely.</td>
    </tr>
    <tr>
      <td className="tg-5z8m"><br /><br />Agriculture<br /><br /></td>
      <td className="tg-ut4k">A GPS module is used to locate and acquire farmland information, including yield monitoring, soil sample collection and etc. The computer system determines the management measures of farmland plots by analyzing and processing the data, and loads the yield and soil status information into the GPS equipment. In the spray applicator, it can accurately fertilize and spray the farmland.</td>
    </tr>
    <tr>
      <td className="tg-5z8m"><br /><br />Entertainment<br /></td>
      <td className="tg-ut4k">Through GPS modules, people can quickly find their destination in an unfamiliar city, and can travel on the optimal path; campers carry GPS receivers to quickly find suitable camping locations without worrying about getting lost; even some high-end video games , GPS simulation technology is also used.</td>
    </tr>
  </tbody>
</table>

## GPS Modules at Seeed

| Name| Thumbnail| Size |Update Rate| Baud Rate| Navigation Sensitivity|Power Requirements|Number of Channels| Time to first start | Antennas |Accuracy |Click to Buy|
|-----------------------------------------------------------------|----------------------------------------------------------------------------------------------|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|------------|------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|-----------|-------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|--------------------------|
| [Grove – GPS Module](https://wiki.seeedstudio.com/Grove-GPS/)  | <img src="https://files.seeedstudio.com/wiki/Grove-GPS/img/gps-module.jpg"/>|40mm x 20mm x 13mm|1Hz, max 10Hz|9,600bps – 115,200bps|-160dBm|3.3V - 5V|22 tracking, 66 channels|Cold start: 13s; Warm start: 1-2s; Hot start: <1s|Antenna included|2.5m GPS Horizontal Position Accuracy|[Order Now](https://www.seeedstudio.com/Grove-GPS-Module.html?utm_source=blog&utm_medium=blog)|
| [Grove – GPS (Air530)](https://wiki.seeedstudio.com/Grove-GPS-Air530/)  | <img src="https://files.seeedstudio.com/wiki/Grove-GPS/img/03_11.png"/>|40mm x 20mm x 13mm|/|Default 9,600bps|-148dB|3.3V - 5V|/|Cold start: 27s; Warm start: 4s;|Antenna included|2.5m Horizontal positioning accuracy|[Order Now](https://www.seeedstudio.com/Grove-GPS-Air530-p-4584.html)|

### Which GPS Module is better

#### Better power consumption

The **Grove – GPS (Air530)** has a ultra-low power consumption at only 31uA, low power mode at 0.85 mA, which makes it be the better GPS with lower power consumption.

#### Scalability

With a higher maximum update rate, the **Grove - GPS** is able to be used for projects that involve objects that travel at a faster speed. Furthermore, having more channels open up for other applications as well, the **Grove- GPS (Air 530)** has a multi-mode satellite positioning & navigation and supports more than 6 satellites at the same time.

#### Accuracy

Featuring Horizontal positioning accuracy of 2.5m, High positioning accuracy of 3.5m, speed accuracy of 0.1m/s, and a time transfer accuracy of 30ns, the **Grove -GPS (Air530)** is able to position quickly and accurately even under the condition of a bad signal.

## Projects

**Project of GPS/GPRS Tracker**: In this new project we will present our GPS Tracker connected using the GPRS technique and MQTT protocol.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/OHAlgerie/project-of-gps-gprs-tracker-36c425/embed' width='350'></iframe>

**Vehicle Tracking System**: Now that you have just picked your GPS module, here are some projects that you can do with your Arduino and GPS module. Visit [here](https://create.arduino.cc/projecthub/muchika/vehicle-tracking-system-based-on-gps-and-gsm-57b814?ref=tag&ref_id=gps&offset=15) for detailed information.

<iframe frameborder='560' height='327.5' scrolling='no' src='https://hackster.imgix.net/uploads/attachments/1038379/FZNOC7NK0MP38U3.jpg?auto=compress%2Cformat&w=900&h=675&fit=min' width='350'></iframe>

**LED Bike Speedometer**: Want to find out how fast you are riding? With this DIY bike speedometer, using GPS technology for speed sensing, you can tell how fast you are going! It also features an RGB LED to indicate the speed to the rider. Visit [here](https://create.arduino.cc/projecthub/JeremySCook/gps-led-bike-speedometer-c8f956?ref=tag&ref_id=gps&offset=26) for detailed information.

<iframe width="560" height="315" src="https://www.youtube.com/watch?v=CeStrH-5Llo&feature=emb_rel_end" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

**Personal GPS Assistant**: This project is a device that lets you monitor people and things, and tell you continuously their location, and the values of the sensors attached to it. One of the feature allows you to set limit values for the sensors, and when these are exceeded an SMS alert is sent to you. You can also set restrictions from some places, where alerts will be given to you when the device leaves the area. It’s also possible to communicate with the device through SMS, in order to get information about it.

Visit [here](https://create.arduino.cc/projecthub/Momy93/sandro-your-personal-gps-assistant-26dfa3?ref=tag&ref_id=gps&offset=32) for detailed information.

<iframe width="560" height="315" src="https://youtu.be/3lcP4YtxlCg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Resource

**[Reference]** [Triangulation from Tim Gunther, National Geographic (2020)](https://www.nationalgeographic.org/photo/triangulation-sized/)

**[ZIP]** [E-1612-UB Datasheets](https://files.seeedstudio.com/wiki/Grove-GPS/res/E-1612-UB_Datasheets_Sheet.pdf)

**[ZIP]** [Air530 Datasheets](https://files.seeedstudio.com/wiki/Grove-GPS_Air_530/Air530_GPS_User_Booklet.V1.7.pdf)

## Tech Support

 If you have any technical issue. submit the issue into our [forum](http://forum.seeedstudio.com/).

<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
