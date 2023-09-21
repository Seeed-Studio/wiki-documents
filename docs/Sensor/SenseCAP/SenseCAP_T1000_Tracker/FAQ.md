---
description: SenseCAP_Tracker_T1000-A/B_FAQ
title: FAQ
keywords:
- Tracker
- Wio
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

## Battery Related

### Charge Status

|Status|Indicator|
|----|----|
|Charging| The LED will flash once every 3 seconds.|
|Fully charged| The LED will stay always on.|
|Charging anomaly|When the device is charged below 0 ° C or above 45 ° C, the device will enter the charge protection state and cannot be charged.<br/>The LED will flash rapidly.|


### How long does it take to fully charge?

It typically takes about **2 hours** to fully charge.

### Can it continue uploading data while charging?

Yes, it can continue uploading data while charging.

### Battery Life

Battery life depends on factors such as uplink interval, sensor usage, LoRa transmission distance, and operating temperature. Predicted battery life is based on a typical working environment (25°C) and serves as a reference. Actual battery life may vary.

For detailed battery life calculations, refer to the [Battery Life Calculation Form](https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker/Trcaker_Battery_%20Life_Calculation_T1000_AB.xlsx).





