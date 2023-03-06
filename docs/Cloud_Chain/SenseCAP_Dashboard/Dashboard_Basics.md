---
description: Dashboard Basics
title: Dashboard Basics
keywords:
- Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
last_update:
  date: 02/14/2023
  author: Matthew
---

# Dashboard Basics


**Main Dashboard Screen**
=========================

Once you’ve registered your hotspot to the dashboard, you will find the following (see screenshot below).

![SenseCAP M1 Dashboard](https://www.sensecapmx.com/wp-content/uploads/2022/07/sensecap-m1-dashboard.png)

You will quickly be able to see all status updates of the hotspot on this page. If you register more than 1 hotspot, they will be added as separate rows.

Simply click the hotspot name or SN to view further details explained below.

* * *

**What Information You Can Find**
=================================

The dashboard allows you to monitor your hotspots settings, including **CPU temperature, network settings**, **blockchain syncing progress, and much more**. Below is a breakdown of what each setting represents.

**Note**: The information presented inside the dashboard is updated every 5 minutes. If you update network configuration changes,  refreshing the dashboard in 5 minutes will provide updated data.

**Hotspot Details**
-------------------

*   **SN**: Your registered hotspot serial number.
*   **Hotspot Name**: Name of your registered hotspot on the blockchain.
*   **Hotspot Online** Status: Based on your hotspot.
*   **Helium Online** Status: Hotspot status is strictly based on helium API or ETL-API, depending on which P2P data is up-to-date.
*   **Hotspot Address**: The blockchain address of your hotspot. You can click the hotspot address to view your hotspot on the Helium Explorer website.
*   **Hotspot Owner**: Your wallet (whom the hotspot is registered to on the ‘Helium App’) You can click the hotspot owner to view details of your entire account on the Helium Explorer website.
*   **Public IP Address:** Your Hotspots public IP address.

**Additional Hotspot Details Continued**
----------------------------------------

*   **Collection Time**: Last the data was collected from the hotspot. -UTC7.
*   **Added to Helium Network**: Displays when the hotspot was registered on the Helium blockchain. -UTC7.
*   **Production Time**: Displays when the hotspot was manufactured. -UTC7.

**Antenna & Region Details**
----------------------------

*   **Antenna**: The gain of antenna data is from Helium APP. If you've changed the antenna, you will need to complete the "Update Antenna" process in the Helium APP to show the correct gain here.
*   **Region**: This region is based on the asserted location of the hotspot in the Helium APP.
    *   You may not see a "**Region**" until you assert a location, it may result in "Unknown".
*   **Coordinates**: Displays the GPS coordinates of your Hotspots asserted location.

**Additional Details**
----------------------

*   **Batch Name**: Manufactured date of the hotspot.
*   **Custom Tag**: Any custom tag you've associated with this Hotspot.
    *   If you are running multiple hotspots in different locations, we’ve made it easier for you to tag each hotspot and sort by tags within the dashboard. Simply add a custom tag to differentiate hotspots between different locations/hosts.

**Additional Network Details**
------------------------------

*   **Wi-fi Name**: If the hotspot is connected via Wi-Fi, it will display the Wi-Fi name here, if it is connected via Ethernet cable, it will not display anything.
*   **Wi-Fi IP Address**: If your Hotspot is connected with Wi-Fi, you will see your internal network's IP address here.
*   **LAN IP Address**: If your Hotspot is connected with an Ethernet cable, you will see your internal network address here.

**Hotspot Hardware Details**
----------------------------

*   **Firmware Version**: Current firmware version installed on your Hotspot.
*   **Uptime**: Uptime indicates the duration time started from last power-on time of the hotspot, which will be updated when there is internet connection. If we cannot detect a status within 30 mins, the uptime would show **NONE**.
*   **CPU ID:** The CPU ID # of your hotspots CPU.
    *   The CPU ID will be required to enter when you wish to **TurboSync** your device. You may click the icon to the right of the CPU ID to copy.
*   **CPU Temperature**: Current running temperature of your CPU.
*   **Fan Status**: Displays if the fan is running with date + timestamp of the last status when it was ON or OFF.
    *   The fan will automatically turn on when the CPU temperature is above 70℃, and will not turn off until it is cooled down to 45℃.
*   **CPU Usage**: Displays the current usage of the CPU in % units.
*   **Memory Usage**: Displays the current memory usage in % units.
*   **Note**: Depending on the model you purchase, you may see different memory details.
    *   1900 MB = 2GB Raspberry Pi
    *   3845 MB = 4GB Raspberry Pi
    *   7690 MB = 8GB Raspberry Pi
*   **SD Usage**: Displays the current SD Card memory usage.
    *   58776 MB = 64GB SD card

**Hotspot Reward Details**
--------------------------

**Hotspot Rewards**: Displays your HNT rewards.

*   **Last 24H**: What your last 24-hour reward was (rolling 24H window).
*   **Last 7D**: What your last 7-day reward was (rolling 7D window).
*   **Last 30D:** What your last 30-day reward was (rolling 30D window).
*   **Total**: Displays total HNT rewarded since online.

There is a complex mechanism for the rewards. As long as the network settings, hotspot placement, antenna, internet connection and hotspot status are in good standing/healthy, the device will perform accordingly. The Helium Doc is always a great place to learn more on the rewards mechanism. >>[**https://docs.helium.com/blockchain/**](https://docs.helium.com/blockchain/mining)

**Useful Links Details**
------------------------

![Useful Links](https://www.sensecapmx.com/wp-content/uploads/2022/07/useful-links-1.png)

*   **Doc Center**: >> Link to SenseCAP Document/Support Center
*   **Port Checker**: Link to >> PortChecker.co to determine if your PORT is open.
*   **Find IP Address**: Link to WhatIsMyIPAddress.com to display your current IP.

**Account Details**
-------------------

After you log-in to your dashboard, you should be presented with a navigation pane on the left side as follows.

![SenseCAP Dashboard](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-13-1.png)

*   **Dashboard**: Dashboard home page.
*   **Hotspot**: List’s all your hotspots that are registered.
*   **Account**: Account management page, including API credentials, password resets, etc.


