---
description: 5 Minutes to Develop an Industrial LoRaWAN Sensor
title: 5 Minutes to Develop an Industrial LoRaWAN Sensor
keywords:
- LoRaWAN
- Sensor
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /develop_an_industrial_lorawan_sensor
last_update:
  date: 9/15/2023
  author: Jessie
---

Let's quickly build an industrial-grade LoRaWAN wireless sensor for direct commercial use in 5 minutes.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519816/_CFY3itZc4v.blob?auto=compress%2Cformat&w=900&h=675&fit=min" alt="pir" width={600} height="auto" /></p>

When prototyping for a commercial data acquisition project, it takes a lot of time and cost to prototype. For example, we need to make a wireless pH sensor for an agricultural project. We need to 1) Find the development board and sensor probe. 2) Write code. 3) 3D print the shell. 4) Final assembly test. By the time we complete the prototype, it can take days or even weeks.

Today, we can use a wireless LoRa collector, set up sensors to connect to an app via Bluetooth and build a product in five minutes, directly into a commercial project.

### Preparation

Prepare data logger, sensor probe, gateway, and tools.

1) [Data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html): It is a LoRaWAN converter that converts MODBUS RS485/Analog/GPIO sensors into LoRa-enabled sensors and therefore transfers data through the LoRaWAN protocol.

2) Sensor probe: prepare a sensor probe with a cable and output one of the signals of RS485 / 4-20mA /0-10V / pulse/level. The tutorial uses an RS485 ultrasonic sensor for liquid-level measurement.

3) Cross screwdriver: Used to assemble the sensor probe.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519859/image_iq7PU8q7nt.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

4) Gateway: The LoRaWAN sensor transmits data to a LoRaWAN gateway, which then transmits it to the cloud server. If you don't have a gateway, there are two options:

**Option 1**: Sensors work in areas covered by Helium Network(Check on [Helium Explorer](https://explorer.helium.com/)). Wherever the helium network is available, you can use sensors to transfer data without purchasing a gateway.
**Option 2**: Buy a [gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html).
5) Download the SenseCAP Mate App for configuration:

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519867/image_hQX9CstNtP.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={500} height="auto" /></p>

The preparation is done. Let's get started!

### Network Architecture

Let's start with LoRaWAN network.

The data logger converts sensor data into LoRa data and uploads the data to the gateway. The gateway uploads the data to the server.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519879/image_SUwd9Yyglx.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

### Hook up the Sensor

1) Disassemble the Data Logger.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519881/image_TmNcqHz98z.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

2) Connect the sensor to the terminal, and power the sensor via a built-in battery.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519884/image_XZETiBWTBz.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

:::info Tip
If you are using another protocol, such as 4-20mA, please refer to the pin table:
:::

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519889/image_RHiaxQkid9.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>
3) Assemble the sensor.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519904/image_6qTGLlXoOZ.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519908/image_LDPEOEC9ik.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519912/image_jStYF3uKW6.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

### Configure the sensor via App

1) Open and log in to the SenseCAP App.

2) Select "S2100 Data Logger" and Click “Setup” on the config page.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519915/image_au0YfmfVoo.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>
3) Press the button and hold for 3 seconds, the green LED will flash at 1s frequency. Then click “Scan” to start scanning the data logger's Bluetooth.

<center>
<iframe width="220" height="380" src="https://hackster.imgix.net/uploads/attachments/1520082/video_ZKG2GDw54j.gif?auto=compress&gifq=35&w=740&h=555&fit=max&fm=mp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</center>

4) Configure the lorawan and sensor parameters(includes RS485 Modbus-RTU command).

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1520084/image_tAKr7NohSn.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

```cpp
#########Basic Setting#############
Platform: 
    -SenseCAP for helium (use helium network)
    -SenseCAP for The Things Network (use SenseCAP gateway)
Frequency Plan: EU868 (Select this based on the frequency or region of the gateway)
Uplink Interval: 5 min
Packet Policy: 2C+1N (use the default parameter)

#########Sensor Setting#############
Protocol: RS485 Modbus RTU
Baud Rate: 9600
Modbus Address: 128 (Sensor's modbus address)
Power Type: Periodic power (Power the sensor before data collection, and power off the sensor after data collection)
Power Voltage: 5V
Sensor Warm-up Time: 100ms
Response Timeout: 100ms
Startup Time: 100ms
Measurement Number: 2 (distance and temperature)

#########Measurement1#############
Register Address: 256 (DEC)
Function code: 03
Data Type: Unsigned 16bit integer,0xAB
Precision: 0,# (No decimal number)
FactoryA: 1 (Y=Ax+B, “Y”: It is the value of Data Logger will upload.
“x”: It is the original current value.If only raw values are uploaded, set A=1 and B=0.)
FactoryB: 0
Write Strategy: None

#########Measurement2#############
Register Address: 258 (DEC)
Function code: 03
Data Type: Unsigned 16bit integer,0xAB
Precision: 0,# (No decimal number)
FactoryA: 0.1 (The final value is divided by 10)
FactoryB: 0
Write Strategy: None
```

5) Click Send and Test the sensor by clicking "Measure"

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1520088/image_iAmOflFRIQ.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

The distance and temperature of the sensor are obtained successfully!

### Upload the data to SenseCAP Portal and Mate App

Before uploading data, make sure the gateway is working properly or has helium network coverage.

1) The App returns to the home page and disconnects the Bluetooth connection. The data logger will try to join the LoRaWAN network.

Waiting to join LoRa network: red breathing light flashing
Join LoRa network success: green LED flashes fast for 2s

<center>
<iframe width="220" height="380" src="https://hackster.imgix.net/uploads/attachments/1520108/video(1)_yWY0orezqU.gif?auto=compress&gifq=35&w=740&h=555&fit=max&fm=mp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</center>

2) Binding the data logger via scanning the QR code.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1520115/image_9JdYx3MCrg.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

3) Check the data on App and Portal (https://sensecap.seeed.cc/).

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1520128/image_K6j6TDHXX4.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

### Test the sensor in a real environment

Fast application to the outdoor real scene for long-term monitoring.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1520150/image_MoA2h9E8lq.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

At present, a LoRaWAN sensor has been developed.

Come and try new solutions for your project!

### Resource

[5 Minutes to Develop an Industrial LoRaWAN Sensor](https://www.hackster.io/jenkinlu001/5-minutes-to-develop-an-industrial-lorawan-sensor-6631dc)

[SenseCAP S2100 Data Logger User Guide](https://files.seeedstudio.com/products/SenseCAP/S2100/SenseCAP%20S2100%20LoRaWAN%20Data%20Logger%20User%20Guide.pdf)
