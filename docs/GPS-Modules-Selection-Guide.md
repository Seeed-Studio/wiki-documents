We have released various types of GPS Modules in recent years. Let's take a close look at them and work out which one is best suited for you!

For all the GPS or Communication modules in our bazaar, please click [Seeed Studio Bazaar](https://www.seeedstudio.com/) to check.


## Introduction to GPS and GPS Modules 

One of the global positioning system (GPS) devices ultilizes data from satellites to locate a specific point on the Earth in a process named trilateration. Meanwhile, a GPS receiver measures the distances to satellites using radio signals to trilaterate. And trilateration is similar to triangulation, which measures angles, depicted in this illustration (Tim Gunther, 2020). GPS modules contain tiny processors and antennas that directly receive data sent by satellites through dedicated RF frequencies. From there, it’ll receive timestamp from each visible satellites, along with other pieces of data. If the module’s antenna can spot 4 or more satellites, it’s able to accurately calculate its position and time.

Three GPS modules are going to be introduced and compared in this article: **NEO-6M**, **Grove – GPS** and **Grove – GPS ( Air530 )**. These GPS modules are compatible with Arduino and Raspberry Pi, making it easy for you to start to try out.

<div align=center><img src="https://files.seeedstudio.com/wiki/Grove-GPS/img/28251.jpg"/><figcaption><b>Figure 1</b>. <i> Illustration of globe with three satellites triangulating a precise location. ( Tim Gunther,2020 ) </i></figcaption></a>
</figure></div>

## Operating Principle

You ought to acknowledge the principles of GPS modules before purchasing and the table below is provding some information.

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-15hm{background-color:#ffffff;border-color:#c0c0c0;color:#000000;font-size:16px;text-align:center;vertical-align:top}
.tg .tg-zbcp{background-color:#656565;border-color:#c0c0c0;color:#ffffff;font-size:16px;text-align:center;vertical-align:top}
.tg .tg-jhd7{background-color:#656565;border-color:#c0c0c0;color:#ffffff;font-size:16px;text-align:left;vertical-align:top}
.tg .tg-byy0{background-color:#ffffff;border-color:#c0c0c0;color:#000000;font-size:16px;text-align:left;vertical-align:top}
</style>
<table class="tg" style="undefined;table-layout: fixed; width: 826px">
<colgroup>
<col style="width: 237px">
<col style="width: 589px">
</colgroup>
<thead>
  <tr>
    <th class="tg-zbcp">Term of GPS Modules</th>
    <th class="tg-jhd7">Operating principle</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-15hm"><br><br>Chipset</td>
    <td class="tg-byy0">The GPS chip is one of the key parts of the GPS system. The quality of the core chip largely determines the performance difference of different GPS products and determines the actual performance of the receiving terminal. It can be said that the GPS core chip is directly related to GPS Product technical indicators and future development trend.</td>
  </tr>
  <tr>
    <td class="tg-15hm"><br><br>DGPS</td>
    <td class="tg-byy0">DGPS is a differential GPS reference station that uses known accurate three-dimensional coordinates to obtain the pseudorange correction amount or position correction amount, and then sends this correction amount to the user (GPS navigator in real time or afterwards) t o correct the user's measurement data to improve GPS positioning accuracy.</td>
  </tr>
  <tr>
    <td class="tg-15hm">Update Rate</td>
    <td class="tg-byy0">Update rate refers to how often the GPS module recalculates and reports its position.</td>
  </tr>
  <tr>
    <td class="tg-15hm">Baud Rate</td>
    <td class="tg-byy0">Baud Rate refers to how fast data is sent over a serial line. And higher the baud rate allows for faster GPS data to be sent.</td>
  </tr>
  <tr>
    <td class="tg-15hm">Navigation Sensitivity</td>
    <td class="tg-byy0">dBm figure dictates how prone the gps module is able to capture the frequency. Higher dbm indicates that the module is able to better pickup satalite signals.</td>
  </tr>
  <tr>
    <td class="tg-15hm">Power Requirements</td>
    <td class="tg-byy0">GPS modules can consume a substantial amount of power. Average being 30mA at 3.3V.</td>
  </tr>
  <tr>
    <td class="tg-15hm"><br>Number of Channels</td>
    <td class="tg-byy0">Number of channels that the module runs will affect time to first fix. More frequencies that you can check at once, allow for faster fix time. 12 – 14 channels work fine for tracking if you don’t mind waiting a little longer.</td>
  </tr>
  <tr>
    <td class="tg-15hm">Antennas<br></td>
    <td class="tg-byy0">Each antenna is designed to pickup GPS L1 frequency of 1.5752 GHz. Position and design of antenna is crucial for optimal performance of GPS.</td>
  </tr>
  <tr>
    <td class="tg-15hm"><br>Accuracy</td>
    <td class="tg-byy0">Lower the distance it can get down to = Higher accuracy. Usually able to find out your location within 30 seconds, down to +/- 10m and most modules can get it down to +/-3m.</td>
  </tr>
  <tr>
    <td class="tg-15hm"><br><br>Hot Start</td>
    <td class="tg-byy0">It means that there has not been too much movement in the place where the power was turned off last time, and the time from the last positioning is less than 2 hours. When positioning again, the GPS chip can continue to use the previous ephemeris to quickly search for stars through software, to achieve second positioning</td>
  </tr>
  <tr>
    <td class="tg-15hm">Warm Start</td>
    <td class="tg-byy0">Refers to the situation where the positioning time is more than 2 hours from the last positioning time, and the search time is between cold start and hot start.</td>
  </tr>
  <tr>
    <td class="tg-15hm"><br>Cold Start</td>
    <td class="tg-byy0">If the module power is turned off for a long time, and the backup capacitor disappears, the data will be lost. Next time you power up, GPS will need to download new almanac and ephemeris data</td>
  </tr>
</tbody>
</table>

## Field of Applicaitons

There are a numerous ultilizations of GPS Modules. Particularly, plenty of social activities are able to be developed by applications of these GPS Modules. Therefore, GPS Modules play important roles in various sectors, which are including Environmental Measurement, Transportation, Emergency Rescue, Agriculture, Entertainment and etc. 


<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-15hm{background-color:#ffffff;border-color:#c0c0c0;color:#000000;font-size:16px;text-align:center;vertical-align:top}
.tg .tg-zbcp{background-color:#656565;border-color:#c0c0c0;color:#ffffff;font-size:16px;text-align:center;vertical-align:top}
.tg .tg-jhd7{background-color:#656565;border-color:#c0c0c0;color:#ffffff;font-size:16px;text-align:left;vertical-align:top}
.tg .tg-byy0{background-color:#ffffff;border-color:#c0c0c0;color:#000000;font-size:16px;text-align:left;vertical-align:top}
</style>
<table class="tg" style="undefined;table-layout: fixed; width: 825px">
<colgroup>
<col style="width: 217px">
<col style="width: 608px">
</colgroup>
<thead>
  <tr>
    <th class="tg-zbcp">Field of application</th>
    <th class="tg-jhd7">Function</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-15hm"><br>Measurement<br></td>
    <td class="tg-byy0">It uses carrier phase differential technology (RTK) to process the carrier phase of two observation stations in real time with an accuracy of centimeter level. Measurement results are unified in WGS84 coordinates, information is automatically received and stored, reducing cumbersome intermediate processing Link.</td>
  </tr>
  <tr>
    <td class="tg-15hm"><br><br>Transportation<br></td>
    <td class="tg-byy0">GPS can be used for autonomous navigation, port management and entry guidance, route traffic management and tracking and monitoring. Vehicle-mounted equipment uses GPS for precise positioning, combined with electronic maps and real-time traffic conditions, automatically matches the optimal path, and implements autonomous navigation of the vehicle.</td>
  </tr>
  <tr>
    <td class="tg-15hm"><br><br>Emergency Rescue<br></td>
    <td class="tg-byy0">Using GPS positioning technology, emergency dispatch of fire, ambulance and police can be carried out, and the emergency response department's response efficiency to fire, crime scene, traffic accident, traffic jam and other emergency events can be improved. A fishing boat equipped with a GPS device can quickly locate and alarm when a dangerous situation occurs, so that it can obtain rescue faster and more timely.</td>
  </tr>
  <tr>
    <td class="tg-15hm"><br><br>Agriculture<br><br></td>
    <td class="tg-byy0">A GPS is used to locate and acquire farmland information, including yield monitoring, soil sample collection and etc. The computer system determines the management measures of farmland plots by analyzing and processing the data, and loads the yield and soil status information into the GPS equipment. In the spray applicator, it can accurately fertilize and spray the farmland.</td>
  </tr>
  <tr>
    <td class="tg-15hm"><br>Entertainment<br></td>
    <td class="tg-byy0">Through GPS, people can quickly find their destination in an unfamiliar city, and can travel on the optimal path; campers carry GPS receivers to quickly find suitable camping locations without worrying about getting lost; even some high-end video games , GPS simulation technology is also used.</td>
  </tr>
</tbody>
</table>

## GPS Modules at Seeed

For all the GPS or Communication modules in our bazaar, please click [Seeed Studio Bazaar](https://www.seeedstudio.com/) to check.

| Name| Thumbnail| Size |Update Rate| Baud Rate| Navigation Sensitivity|Power Requirements|Number of Channels| Time to first start | Antennas |Accuracy |Click to Buy|
|-----------------------------------------------------------------|----------------------------------------------------------------------------------------------|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|------------|------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|-----------|-------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------|--------------------------|
| [NEO-6M](https://www.electroschematics.com/neo-6m-gps-module/)  | <img src="https://files.seeedstudio.com/wiki/Grove-GPS/img/1-Ublox-NEO-6M-Module.jpg"/>|23mm x 30mm|1Hz, max 5Hz| Default 9,600, max 230400|-161dBm|3V – 5V|22 tracking, 50 channels|Cold start: 27s; Warm start: 27s; Hot start: 1s| External patch antenna|2.5m GPS Horizontal Position Accuracy|/|
| [Grove – GPS](https://wiki.seeedstudio.com/Grove-GPS/)  | <img src="https://files.seeedstudio.com/wiki/Grove-GPS/img/gps-module.jpg"/>|40mm x 20mm x 13mm|1Hz, max 10Hz|9,600 – 115,200|-160dBm|3.3V - 5V|22 tracking, 66 channels|Cold start: 13s; Warm start: 1-2s; Hot start: <1s|Antenna included|2.5m GPS Horizontal Position Accuracy|[Order Now](https://www.seeedstudio.com/Grove-GPS-Module.html?utm_source=blog&utm_medium=blog)|
| [Grove – GPS (Air530)](https://wiki.seeedstudio.com/Grove-GPS-Air530/)  | <img src="https://files.seeedstudio.com/wiki/Grove-GPS/img/03_11.png"/>|40mm x 20mm x 13mm|/|/|/|3.3V - 5V|/|Cold start: 30s; Warm start: 4s;|Antenna included|2.5m Horizontal positioning accuracy|[Order Now](https://www.seeedstudio.com/Grove-GPS-Air530-p-4584.html)|

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

<iframe frameborder='0' height='327.5' scrolling='no' src='https://hackster.imgix.net/uploads/attachments/1038379/FZNOC7NK0MP38U3.jpg?auto=compress%2Cformat&w=900&h=675&fit=min' width='350'></iframe>

**LED Bike Speedometer**: Want to find out how fast you are riding? With this DIY bike speedometer, using GPS technology for speed sensing, you can tell how fast you are going! It also features an RGB LED to indicate the speed to the rider. Visit [here](https://create.arduino.cc/projecthub/JeremySCook/gps-led-bike-speedometer-c8f956?ref=tag&ref_id=gps&offset=26) for detailed information.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.youtube.com/watch?v=CeStrH-5Llo&feature=emb_rel_end' width='350'></iframe>

**Personal GPS Assistant**: This project is a device that lets you monitor people and things, and tell you continuously their location, and the values of the sensors attached to it. One of the feature allows you to set limit values for the sensors, and when these are exceeded an SMS alert is sent to you. You can also set restrictions from some places, where alerts will be given to you when the device leaves the area. It’s also possible to communicate with the device through SMS, in order to get information about it. 

Visit [here](https://create.arduino.cc/projecthub/Momy93/sandro-your-personal-gps-assistant-26dfa3?ref=tag&ref_id=gps&offset=32) for detailed information.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://youtu.be/3lcP4YtxlCg' width='350'></iframe>

## Resource

[**Reference**] [Triangulation from Tim Gunther, National Geographic (2020)](https://www.nationalgeographic.org/photo/triangulation-sized/)

## Tech Support
 if you have any technical issue. submit the issue into our [forum](http://forum.seeedstudio.com/). 


<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
