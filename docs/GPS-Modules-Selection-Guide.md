We have released various types of GPS Modules in recent years. Let's take a close look at them and work out which one is best suited for you!

For all the GPS or Communication modules in our bazaar, please click [Seeed Studio Bazaar](https://www.seeedstudio.com/) to check.


## Introduction to GPS and GPS Modules 

One of the global positioning system (GPS) devices ultilizes data from satellites to locate a specific point on the Earth in a process named trilateration. Meanwhile, a GPS receiver measures the distances to satellites using radio signals to trilaterate. And trilateration is similar to triangulation, which measures angles, depicted in this illustration (Tim Gunther, 2020). GPS modules contain tiny processors and antennas that directly receive data sent by satellites through dedicated RF frequencies. From there, it’ll receive timestamp from each visible satellites, along with other pieces of data. If the module’s antenna can spot 4 or more satellites, it’s able to accurately calculate its position and time.

Three GPS modules are going to be introduced and compared in this article: **NEO-6M**, **Grove – GPS** and **Grove – GPS ( Air530 )**. These GPS modules are compatible with Arduino and Raspberry Pi, making it easy for you to start to try out.

<div align=center><img src="https://files.seeedstudio.com/wiki/Grove-GPS/img/28251.jpg"/><figcaption><b>Figure 1</b>. <i> Illustration of globe with three satellites triangulating a precise location. ( Tim Gunther,2020 ) </i></figcaption></a>
</figure></div>

## Operating Principle

You ought to acknowledge the principles of GPS modules before purchasing and the table below is provding some information.

| Class of GPS Modules        | Operating principle                                                                                                                                                                                                    |
|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Size | Sizing matters as it may affect things like lock time and accuracy if the antenna doesn’t fit. If your project requires it to be pocket sized, size matters as well.|
|Update Rate| Update rate refers to how often the GPS module recalculates and reports its position.|
|Baud Rate|Baud Rate refers to how fast data is sent over a serial line. And higher the baud rate allows for faster GPS data to be sent.|
|Navigation Sensitivity| dBm figure dictates how prone the gps module is able to capture the frequency. Higher dbm indicates that the module is able to better pickup satalite signals.|
| Power Requirements| GPS modules can consume a substantial amount of power. Average being 30mA at 3.3V.|
| Number of Channels| Number of channels that the module runs will affect time to first fix. More frequencies that you can check at once, allow for faster fix time. 12 – 14 channels work fine for tracking if you don’t mind waiting a little longer.|
|Antennas|Each antenna is designed to pickup GPS L1 frequency of 1.5752 GHz. Position and design of antenna is crucial for optimal performance of GPS.|
|Accuracy|Lower the distance it can get down to = Higher accuracy. Usually able to find out your location within 30 seconds, down to +/- 10m and most modules can get it down to +/-3m.|

## Field of Applicaitons

There are a numerous ultilizations of GPS Modules. Particularly, plenty of social activities are able to be developed by applications of these GPS Modules. Therefore, GPS Modules play important roles in various sectors, which are including Environmental Measurement, Transportation, Emergency Rescue, Agriculture, Entertainment and etc. 


| Field of application| Function|
|---------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Measurement|In the field of surveying and mapping, GPS technology has been widely used in geodesy, resource exploration, crustal movement, cadastral survey and other fields. It uses carrier phase differential technology (RTK) to process the carrier phase of two observation stations in real time with an accuracy of centimeter level. And the GPS technology has obvious advantages: high measurement accuracy; easy operation; small size of the instrument; easy to carry; all-weather operation; no visual observation between observation points; measurement results are unified in WGS84 coordinates, information is automatically received and stored, reducing cumbersome intermediate processing Link.|
|Transportation|Civil aviation transportation uses GPS receiving equipment to enable the pilot to accurately align with the runway when landing, and at the same time to make the aircraft compactly arranged, improve airport utilization, and guide the aircraft to safely enter and depart. It's difficult to imagine a ship is not equipped with GPS navigation systems and equipment. Navigation applications have literally become the largest users of GPS navigation applications. This is unmatched by users in any other field. GPS can be used for autonomous navigation, port management and entry guidance, route traffic management and tracking and monitoring. GPS plays an important role in vehicle navigation. Vehicle-mounted equipment uses GPS for precise positioning, combined with electronic maps and real-time traffic conditions, automatically matches the optimal path, and implements autonomous navigation of the vehicle, thereby reducing energy consumption and saving operating costs.|
|Emergency Rescue|Using GPS positioning technology, emergency dispatch of fire, ambulance and police can be carried out, and the emergency response department's response efficiency to fire, crime scene, traffic accident, traffic jam and other emergency events can be improved. Special vehicles (such as banknote transporters) can alert and locate emergencies to minimize losses. With the help of GPS, rescuers can effectively search and rescue the missing persons in the sea, mountains, and deserts in inaccessible and harsh conditions. A fishing boat equipped with a GPS device can quickly locate and alarm when a dangerous situation occurs, so that it can obtain rescue faster and more timely.|
|Agriculture|At present, developed countries have begun to introduce GPS technology into agricultural production, so-called "precision agricultural farming". The method uses GPS to locate and acquire farmland information, including yield monitoring, soil sample collection, etc. The computer system determines the management measures of farmland plots by analyzing and processing the data, and loads the yield and soil status information into the GPS equipment In the spray applicator, it can accurately fertilize and spray the farmland. By implementing precision farming, it is possible to reduce agricultural production costs without reducing production as much as possible, effectively avoid waste of resources, and reduce environmental pollution caused by fertilization and insect removal.|
|Entertainment|With the miniaturization of GPS receivers and the reduction of prices, GPS has gradually entered people's daily life and become a good helper for people to travel and explore. Through GPS, people can quickly find their destination in an unfamiliar city, and can travel on the optimal path; campers carry GPS receivers to quickly find suitable camping locations without worrying about getting lost; even some high-end video games , GPS simulation technology is also used.|

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
