---
description: SenseCAP_Tracker_T1000-A/B_FAQ
title: FAQ
keywords:
- Tracker
- FAQ
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /faq_for_SenseCAP_T1000
last_update:
  date: 9/20/2023
  author: Jessie
---


## Location Related

### Why there is no GPS location data?

* GPS location may not be available when the tracker is indoors. GNSS positioning requires an open outdoor environment. If you're indoors, the GPS location may be time out due to the weak signal. Make sure the device is placed outdoors for GPS accuracy.

* Ensure proper device installation by orienting the device with its front facing upward to prevent obstruction of the antenna's position

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/install.png" alt="pir" width={700} height="auto" /></p>



### Why doesn't Wi-Fi or Bluetooth location display on the SenseCAP App map?

* Wi-Fi location requires a third-party map parsing service, which must be invoked by users for parsing. Currently, the Mate App supports GNSS positioning display only.

* Bluetooth positioning relies on Bluetooth beacons and their respective locations for accurate tracking.
block the position of the antenna. 



### Bluetooth Positioning

To use Bluetooth location, users need to install some [Bluetooth beacons](https://www.seeedstudio.com/E5-Location-Beacon-p-5791.html) beforehand, Bluetooth positioning algorithm, and a custom map.

* Deploy Bluetooth beacons

A Bluetooth beacon is a small and wireless battery-powered radio transmitter that uses BLE as its
transmission protocol. This mini-radio transmission device can be “discovered” and seen by all BLE
scanners within a certain radius. The Bluetooth beacon, however, cannot “see” anyone back.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/BLE1.png" alt="pir" width={700} height="auto" /></p>


Bluetooth beacons work by transmitting packets of data that are picked up by the tracker via radio
waves. The tracker periodically scans around up to 8 Bluetooth beacons and sorts according
to RSSI, uploading the UUID and RSSI of the 3 Bluetooth beacons with the best signal
strength via LoRa.

A Bluetooth beacon has a theoretical maximum radius distance of less than 100m. Most Bluetooth
beacons can reliably transmit up to approximately 30 meters without any physical obstructions. A
typical operating range is around 2 to 5 meters, depending on the transmit power. The higher the
range, the higher the battery consumption.

It is necessary to consider the density of the beacon deployment according to the indoor situation,
such as whether there is shelter, which also determines the accuracy of the Bluetooth positioning.
There are plenty of tutorials on YouTube or Google on how to install and use beacons.




* Bluetooth positioning algorithm and map

There are many experts have provided Bluetooth based positioning calculation methods, the most
common is trilateral positioning method, refer to the article: [A Comparison Analysis of BLE-Based
Algorithms for Localization in Industrial Environments](https://www.researchgate.net/publication/338241733_A_Comparison_Analysis_of_BLE-Based_Algorithms_for_Localization_in_Industrial_Environments). The SenseCAP tracker provides the UUID and RSSI required by the algorithm, and then calculates the final target location based on the actual deployment location of the user.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/BLE2.png" alt="pir" width={600} height="auto" /></p>

Check [Indoor Positioning System Guide](https://wiki.seeedstudio.com/IPS_For_SenseCAP_T1000_Traker/) for more details.

## Network Related

### Helium Network

:::caution note
For users operating with the **EU868**/**RU864** region:

It is **not recommended** to set the upload interval to less than 4 minutes.

If you set an upload interval of less than 4 minutes, you may notice a timestamp misalignment between the device's uplink and the current time.
:::

**Here's the rationale**:

Given the [1% duty cycle](https://www.thethingsnetwork.org/docs/lorawan/duty-cycle/#maximum-duty-cycle) constraint in EU868, the device must patiently wait approximately 4 minutes for each uplink transmission. Additionally, the Helium network initiates data-rate and power corrections only after accumulating 20 consecutive uplink packets marked with the [ADR](https://docs.helium.com/console/profiles/#adr-algorithm) bit set to 1.

So if the upload interval you set is less than 4 minutes, real-time data will be temporarily stored in RAM and held until the Helium network triggers data rate and power corrections before uploading.


## Battery Related

### Battery Life

Battery life depends on factors such as uplink interval, sensor usage, LoRa transmission distance, and operating temperature. Predicted battery life is based on a typical working environment (25°C) and serves as a reference. Actual battery life may vary.

#### EU868(1C/SF12)


|Upload Interval|1 minute|5 minutes |60 minutes|1 day|
|--|--|--|--|--|
|Battery Life(day)|2.62|27.21|106.78|209.3|

#### US915(1C/SF9)

|Upload Interval|1 minute|5 minutes |60 minutes|1 day|
|--|--|--|--|--|
|Battery Life(day)|3.02|37.52|117.32|210.7|

For detailed battery life calculations, refer to the [Battery Life Calculation Form](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker/Trcaker_Battery_%20Life_Calculation_T1000_AB.xlsx).



### Charge Status

|Status|Indicator|
|----|----|
|Charging| The LED will flash once every 3 seconds.|
|Fully charged| The LED will stay always on.|
|Charging anomaly|When the device is charged below 0 ° C or above 45 ° C, the device will enter the charge protection state and cannot be charged.<br/>The LED will flash rapidly.|

:::caution note
Charging abnormality Alarm
:::

If the indicator `flashes quickly` while charging, it may be that the power voltage is insufficient or poor contact. Please check your power supply or try another power adaptor.

### How long does it take to fully charge?

It typically takes about **2 hours** to fully charge.

### Can it continue uploading data while charging?

Yes, it can continue uploading data while charging.



## Cache Data

Since the device can only cache about 1,000 offline data, if you are in a place without LoRaWAN network coverage for a long time, when the offline data reaches the limit, some old data will be overwritten by new data, so you may 'lose' some data.





## Integration

Integrating an application can be done in a variety of ways, depending on your needs and goals. Here are some common integration options:

* **SenseCAP API**:

Using an Application Programming Interface (API) is a common way to allow your application to communicate with other applications or services, you can connect your device to SenseCAP Cloud and then use the SenseCAP API to get the data.

SenseCAP API is for users to manage IoT devices and data. It combines three types of API methods: HTTP protocol, MQTT protocol, and WebSocket protocol.

Check [SenseCAP API](https://wiki.seeedstudio.com/Cloud_Chain/SenseCAP_API/SenseCAP_API_Introduction/) for more details.

* **LoRaWAN Network Server**：

You can use the [SenseCAP M2 Multi-Platform gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html), then you can directly use the built-in LoRaWAN Network Server for integration. 

Check the [LNS Configuration](https://wiki.seeedstudio.com/SenseCAP_m2_LNS_config) for more details.

