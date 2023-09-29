---
description: Using WiFi technology to enable geolocate tracker
title: Use WiFi Geolocation For Tracker
keywords:
- SenseCAP_T1000_tracker
# image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
last_update:
  date: 9/26/2023
  author: JoJang
---

# Using Wi-Fi technology to enable geolocation for your tracker

## 1. Obtaining Wi-Fi information from The Things Network
- **Step 1.**  We establish the connection between the tracker and The Things Network (TTN) by following the step-by-step tutorial provided on Seeed Studio's [Wiki](https://wiki.seeedstudio.com/SenseCAP_T1000_tracker_TTN/)


- **Step 2.**  Extracting the necessary MAC address, RSSI (Received Signal Strength Indication), and timestamp from the parsed payload, as these data will be utilized for Wi-Fi geolocation in subsequent steps. 

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/wifi_tacker1.jpg"/></div>




## 2. Making location requests through the API provided by a location service provider

Recommended geolocation service providers：

**1. Google Geolocation**

**2. Baidu Map**

**3. Unwired Labs**

In this tutorial, we have chosen to use the intelligent hardware positioning service provided by the **Baidu Map** Open Platform to perform location analysis on the Wi-Fi information we have obtained. The access methods may vary for different location service providers, and here we are using IP whitelist authentication. The specific access process involves defining the data package we need to parse and then making a POST request to the API service address. Below is the JSON data package we have defined.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/wifi_tracker2.jpg"/></div>

Next, we navigate to the directory where the JSON file is located, open the terminal, and enter the request command：


  ```post
  curl -X POST -H "Content-Type: application/json" -d @request.json https://api.map.baidu.com/locapi/v2
  ```

Then we can receive the parsed data that is returned：
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/wifi_tracker3.jpg"/></div>

## 3. Displaying the location on a map

The final step is to input the parsed coordinates into the map to display the location. Here, we are using the Google Maps link: https://www.google.com/maps/@36.5626,136.362305,5z?entry=ttu
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/wifi_tracker4.png"/></div>
You can enter the parsed coordinates in the map's search bar to view the specific location on the map.


