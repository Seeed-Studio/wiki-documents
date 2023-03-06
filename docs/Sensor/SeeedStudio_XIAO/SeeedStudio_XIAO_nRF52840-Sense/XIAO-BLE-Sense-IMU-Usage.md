---
description: 6-Axis IMU Usage on Seeed Studio XIAO nRF52840 Sense
title: 6-Axis IMU Usage on Seeed Studio XIAO nRF52840 Sense
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-BLE-Sense-IMU-Usage
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# The 6-Axis IMU Usage on Seeed Studio XIAO nRF52840 Sense

**Seeed Studio XIAO nRF52840 Sense** is equipped with a high-precision  **6-Axis Inertial Measurement Unit (IMU)** which includes a **3-axis accelerometer** and a **3-axis gyroscope**. There is also an **embedded temperature sensor** on this module. We believe that this module can greatly help in your TinyML projects. This wiki will introduce the basics of using this IMU on this board.

**Note**

- **Seeed Studio XIAO nRF52840** is not equipped with this IMU module.
- The IMU function will perform better when we use the "Seeed nrf52 mbed-enabled Boards Library", so we highly recommon that.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new7.png" alt="pir" width={600} height="auto" /></p>


## View accelerometer, gyroscope and temperature data on serial monitor

In this example, we are going to view the accelerometer, gyroscope and temperature data from the Seeed Studio XIAO nRF52840 Sense on the Arduino Serial Monitor.

- **Step 1**. [Download Seeed_Arduino_LSM6DS3 Library](https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3) as a zip file

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/LSM6DS3-github-zip.png" alt="pir" width={1000} height="auto" /></p>


- **Step 2**. Open Arduino IDE, navigate to `Sketch > Include Library > Add .ZIP Library...` and open the downloaded zip file.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>


- **Step 3.** Navigate to `File > Examples > Accelerometer And Gyroscope LSM6DS3 > HighLevelExample` to open the **HighLevelExample**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/IMU-install.png" alt="pir" width={550} height="auto" /></p>


- **Step 4.** Upload the codes and open the **Serial Monitor**

**Note:** Once you upload the codes, it will not be executed automatically until you click **Serial Monitor** on the upper right corner of the Arduino window.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/IMU-example-output.png" alt="pir" width={600} height="auto" /></p>

Now you will see the accelerometer, gyroscope and temperature data displayed one after the other on the serial monitor as above!

## What's more?

If you want to try out more examples you can navigate to `File > Examples > Accelerometer And Gyroscope LSM6DS3` and check all the examples under **Accelerometer And Gyroscope LSM6DS3**