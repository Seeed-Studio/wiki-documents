---
description: Low Data Consumption Mode Config(for 4G version)
title: Low Data Consumption Mode Config(for 4G version)
keywords:
- SenseCAP_M2
- Gateway
image: https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/sensecap_m2.jpg
slug: /traffic_saving_config
last_update:
  date: 12/4/2024
  author: Jessie
---


This tutorial will guide users to configure the low data consumption mode for the M2 Multi-Platform Gateway **4G version**. In this mode, the traffic per month is expected to be around **60M**. The specific traffic depends on the nodes packets, etc.

:::caution note

1. The status display of the APP may be delayed
2. The network switch and RGB indicator light will change after 5 minutes
:::

### Check Firmware Version

Before configuring the low data consumption mode, check the OS and firmware version first.

:::tip
The OS version needs to be  newer than 0.9.5<br/>
The firmware version needs to be newer than 1.1.6
:::

Check the [Quick Start](https://wiki.seeedstudio.com/quick_start_with_M2_MP/) to log in the Luci page.

Navigate to `Status` -> `Overview`, check the current OS and firmware version.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/version-check.png" alt="pir" width={800} height="auto" /></p>

#### Upgrade OS

The firmware will be upgraded automatically, but user needs to upgrade the OS version manually.

Navigate to `System` -> `Backup/Flash Firmware`, click `Update`.

:::danger
Keep the power connection during the upgrade period.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/online-update.png" alt="pir" width={800} height="auto" /></p>

### White List Config

This tab is used to filter out nodes you don't need to save traffic.

- For `SenseCAP` Mode, Nodes other than SenseCAP will be automatically filtered, don’t need additional configuration.

- For `Packet Forwarder` and `Basic Station` Mode, need to enable the White List Mode.

 :::tip
 If you are using AWS platform, you can skip this step, just config the white list on AWS console.
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/aws-white-list.png" alt="pir" width={600} height="auto" /></p>
 :::

 `OUI List`: The first three bytes of the node EUI.    *Used to filter join-request packets*.<br/>
  eg. for SenseCAP node, the OUI is '2CF7F1'

  `Network ID List`/`DevAddr`:  *Used to filter uplink packets*.<br/>
 eg. for SenseCAP node,the NetID is '000013', DevAddr is '27000000 - 27FFFFFF'

  More details refer to [NetID and DevAddr Prefix Assignments](https://www.thethingsnetwork.org/docs/lorawan/prefix-assignments/)
  
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/white-list-config.png" alt="pir" width={800} height="auto" /></p>

### Set PING Params

Used to check if the link is up, leave it blank to assume interface is always online.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/mwan3.png" alt="pir" width={800} height="auto" /></p>

### Enable Low Data Consumption Mode

Enable the `Low Data Consumption Mode`, and set the `alive time`, default in SesneCAP Platform: 86400.

After settings, please restart the gateway to apply the changes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/mode-enable.png" alt="pir" width={800} height="auto" /></p>
