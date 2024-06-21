---
description: Get Started with Wio Tracker Dev Kit for Meshtastic® 
title:  Get Started
keywords:
- Meshtastic
- Tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /get_started_with_Meshtastic_kit
last_update:
  date: 6/17/2024
  author: Jessie
---




## Hardware Connection


Connect the Grove-GPS module to the `UART` port, and the Grove-OLED Display to the I2C port.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/mesh-kit.png" alt="pir" width={800} height="auto" /></p>


Power on the board. 


## Configuration

Different connection types, find out which client is best for your type of connection.


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="app" label="App">

* Download the `Meshtastic` App.<br/>
* The display will show the name and PIN code, enter the code and then connect the device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/hardware-connect.png" alt="pir" width={800} height="auto" /></p>


  
</TabItem>

<TabItem value="web" label="Web Client">

https://meshtastic.org/docs/software/web-client/

</TabItem>

<TabItem value="cli" label="Python CLI">


This library provides a command-line interface (CLI) for managing the user settings of Meshtastic nodes and provides an easy API for sending and receiving messages over mesh radios. 

[Installation](https://meshtastic.org/docs/software/python/cli/installation/)
[Usage](https://meshtastic.org/docs/software/python/cli/usage/)

</TabItem>
</Tabs>


### Parameters


In order to start communicating over the mesh, you must set your region. This setting controls which frequency range your device uses and should be set according to your regional location.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Sidewalk_Kit/mesh-kit.png" alt="pir" width={800} height="auto" /></p>

