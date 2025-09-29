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

### GPS Positioning Accuracy

GPS satellites broadcast their signals in space with a certain accuracy, but what you receive depends on additional factors, including satellite geometry, signal blockage, atmospheric conditions, and receiver design features/quality.

Many things can degrade GPS positioning accuracy. Common causes include:

- Satellite signal blockage due to buildings, bridges, trees, etc.
- Indoor or underground use
- Signals reflected off buildings or walls ("multipath")

Therefore, in a wide unobstructed area you will get a better GPS signal, thereby getting more accurate positioning results.

### Why there is no GPS location data?

- GPS location may not be available when the tracker is indoors. GNSS positioning requires an open outdoor environment. If you're indoors, the GPS location may be time out due to the weak signal. Make sure the device is placed outdoors for GPS accuracy.

- Ensure proper device installation by orienting the device with its front facing upward to prevent obstruction of the antenna's position

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/install.png" alt="pir" width={700} height="auto" /></p>

### Why doesn't Wi-Fi or Bluetooth location display on the SenseCAP App map?

- Wi-Fi location requires a third-party map parsing service, which must be invoked by users for parsing. Currently, the Mate App supports GNSS positioning display only.

- Bluetooth positioning relies on Bluetooth beacons and their respective locations for accurate tracking. block the position of the antenna.

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

### How to get the keys

On the settings page, select a platform other than SenseCAP to obtain the keys.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/get-keys.png" alt="pir" width={700} height="auto" /></p>

## Button Related

### Join Network

Press and hold the button for 3 seconds, the green light will flash slowly, then press the button once, the green light will breathe, and then the device will try to join the loRaWAN network.

### Force reboot

Press and hold the button, then connect the charging cable, release the button after connecting, the green light will breathe, and then the device will be forced to restart.

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

:::caution Charging abnormality Alarm
If the indicator `flashes quickly` while charging, it may be that the power voltage is insufficient or poor contact.

Please check your power supply or try another power adaptor.
:::

### How long does it take to fully charge?

It typically takes about **2 hours** to fully charge.

### Can it continue uploading data while charging?

Yes, it can continue uploading data while charging.

## Sensor Related

### No sensor data

To save power, the temperature/light sensor function is disable by default, so you need to enable it on the SenseCAP Mate APP first.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/enable-sensor.png" alt="pir" width={500} height="auto" /></p>

## Cache Data

### How does it work

When the LoRaWAN signal is weak or there is no network coverage, the data will be saved in the device. When the device returns to an area with the LoRaWAN network coverage, it will send the real-time data first, and then upload the cache data.

During each upload period, it will upload the latest location first, and then the cache data.
Only a few packets of historical data are uploaded per cycle, so this will not affect the duty cycle.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/cache.png" alt="pir" width={700} height="auto" /></p>

### Note

Since the device can only cache about 1,000 offline data, if you are in a place without LoRaWAN network coverage for a long time, when the offline data reaches the limit, some old data will be overwritten by new data, so you may 'lose' some data.

## How to batch configure

Please check the [Quick Start](https://wiki.seeedstudio.com/Get_Started_with_SenseCAP_T1000_tracker/#connect-to-sensecap-mate-app) to setup the first device, and then click the `Template` module in the upper right corner.

Click `Save as Template`, name your template and then click `Confirm`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/template-save.png" alt="pir" width={600} height="auto" /></p>

When you configure other devices later, you can directly select the template you saved.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/choose-template.png" alt="pir" width={600} height="auto" /></p>

If you want to share your template to others, you can choose `Copy Link to Share` or `Download Template`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/share-temp.png" alt="pir" width={600} height="auto" /></p>

Other users can choose to use your template by copying the shared URL or importing the template file.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/import-temp.png" alt="pir" width={600} height="auto" /></p>

## Timestamp error

If you found the timesatmp in the payload is wrong, please upgrade the firmware to the latest version.

Check [Firmware Upgrade and Release Note](https://wiki.seeedstudio.com/fm_release_for_SenseCAP_T1000/) for more details.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/time-error.png" alt="pir" width={400} height="auto" /></p>

## Integration

Integrating an application can be done in a variety of ways, depending on your needs and goals. Here are some common integration options:

- **SenseCAP API**:

Using an Application Programming Interface (API) is a common way to allow your application to communicate with other applications or services, you can connect your device to SenseCAP Cloud and then use the SenseCAP API to get the data.

SenseCAP API is for users to manage IoT devices and data. It combines three types of API methods: HTTP protocol, MQTT protocol, and WebSocket protocol.

Check [SenseCAP API](https://wiki.seeedstudio.com/Cloud_Chain/SenseCAP_API/SenseCAP_API_Introduction/) for more details.

- **LoRaWAN Network Server**：

You can use the [SenseCAP M2 Multi-Platform gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html), then you can directly use the built-in LoRaWAN Network Server for integration.

Check the [LNS Configuration](https://wiki.seeedstudio.com/SenseCAP_m2_LNS_config) for more details.
