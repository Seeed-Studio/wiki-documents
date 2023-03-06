---
description: SenseCAP API Pricing
title: SenseCAP API Pricing
keywords:
- Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png        
last_update:
  date: 02/14/2023
  author: Matthew
---

# SenseCAP API Pricing

===============


With SenseCAP Portal, you pay only for what you use with no minimum fees or mandatory service usage.

*   um (up-message): The number of messages uploaded by the sensor.
*   dm(download-message): The number of messages that get historical data through the API.

Rules
-----

1.  Add a sensor device to each user account, and the system will distribute a certain amount of um and dm for free.
2.  For each data uploaded by the sensor, 1 um is consumed.
3.  Get a piece of historical data by HTTP, and consume 1 dm.
4.  Subscription to sensor data by means of MQTT will not consume dm.
5.  um /dm can purchase the recharge code online, and then input the recharge code in the account to complete the recharge.
6.  When um/dm is 0, the system will send a message to remind the user of the overdue fee. If the time is more than 1 month, the account function will not be able to be used.

Free Tier  

------------

| Device Type (one device) | um (up-message) | dm (download-message) |
| --- | --- | --- |
| LoRaWAN Sensor Node | 100,000 | 1000,000 |
| SensorHub | 250,000 | 2,500,000 |

Fees  

-------

| Pricing | um (up-message) | dm (download-message) |
| --- | --- | --- |
| $ 0.99 | 100,000 | 1,000,000 |

Pre-paid
--------

Please contact the SenseCAP sales staff to recharge.

Tips
----

*   It is recommended to subscribe to sensor data using MQTT without consuming the number of dm (download-message).
*   The data upload of LoRaWAN Sensor is affected by the Internet (the gateway connects to Portal over the Internet). When access to the Internet is unstable, the Sensor Node will resend the data up to three times to ensure that the data can be successfully transmitted to the SenseCAP Portal. The Free Tier is based on the worst-case scenario of the network, so how long you use it depends on the situation.

Example
-------

According to device type and data upload interval, the approximate time available is as follows:

| Device Type (one device)                | Data Interval | Time          |
|-----------------------------------------|---------------|---------------|
| LoRaWAN Temperature and Humidity Sensor | 1 hour        | 2 ~ 5 years   |
|                                         | 30 minutes    | 1 ~ 2.5 years |
|                                         | 5 minutes     | 4 ~ 10 months |
| LoRaWAN Light Intensity Sensor          | 1 hour        | 4 ~ 10 years  |
|                                         | 30 minutes    | 2 ~ 5 years   |
|                                         | 5 minutes     | 8 ~ 20 months |
| SensorHub (5 types of measurements)     | 1 hour        | 5.6 years     |
|                                         | 30 minutes    | 2.8 years     |
|                                         | 5 minutes     | 11 months     |
| SensorHub (7 types of measurements)     | 1 hour        | 4 years       |
|                                         | 30 minutes    | 2 years       |
|                                         | 5 minutes     | 8 months      |