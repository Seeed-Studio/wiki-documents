---
description: SenseCAP M2 Data Only Local Console
title: SenseCAP M2 Data Only Local Console
keywords:
- SenseCAP Network
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
last_update:
  date: 02/14/2023
  author: Matthew
---

**How to access the Local Console**
===================================

There are two ways to access the Local Console.

* * *

**Access via router**
---------------------

*   **Step 1**: Connect your computer and Hotspot to the same router.

You can connect the device to the router via a network cable， or you can set up the WI-FI connection via SenseCAP Hotspot APP.

**Note**: Your computer and device should be connected to the same router/network.

![SenseCAP M2 Local Console Step 1](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-3.png)

*   **Step 2**: Get IP Address of your device

If you do not have an account of SenseCAP MX Dashboard, or haven't added your device to the Dashboard, please find the IP Address of your device on your router admin page, or run diagnostic on your Helium APP to get the IP Address.

If you already have registered an account of SenseCAP MX Dashboard and added your device, you can find your device IP Address from the dashboard:

*   *   If you are connected via Wi-Fi, you will see the device's Wi-Fi IP address to click.
    *   If you are connected via Ethernet cable or local LAN, you will see the device LAN address to click.

*   **Step 3**: Get your device Username and Password

Get the Username and Password from the information on the back of the device.

**For security reasons, each device has a unique password. After logging in, you can change the password.**

![SenseCAP M2 Local Console Step 3](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-4.png)

*   **Step 4**: Open the browser on the pc and log in

Input the IP Address(you get) in a browser to enter the Local Console. Then input your device username and password, and click the Login button.

![SenseCAP M2 Local Console Login](https://www.sensecapmx.com/wp-content/uploads/2022/07/login.png)

* * *

**Access via device AP hotspot**
--------------------------------

*   **Step 1**: Turn on the device AP hotspot

Press the button for 5s until the blue indicator flashes slowly to enter configuration mode.

*   **Step 2**: Connect to the AP hotspot

AP hotspot name is SenseCAP\_XXXXXX (6-figure MAC address), Connect your computer to this AP hotspot.

*   **Step 3**: Get your device Username and Password
*   **Step 4**: Open the browser on the pc and log in

Input the IP Address (**192.168.168.1**)  in a browser to enter the Local Console. Then input your device username and password, and click the Login button.

* * *

**Status**
==========

In the home page, there are mainly some status displays, such as network connection, LoRa packets sent and received, system information, memory usage, etc.

**NOTE:** You will need to wait a while for the full message to appear.

![SenseCAP M2 Local Console Guide](https://www.sensecapmx.com/wp-content/uploads/2022/07/image-5.png)

**NOTE:** In the Lora Packets histogram, not necessarily valid Helium Packets Network.

In the system information, you can see the version of the helium program, the address of hotspots, and the region parameter currently in use.

![SenseCAP M2 Local Console Guide Region](https://www.sensecapmx.com/wp-content/uploads/2022/07/system.png)

* * *

**System**
==========

**System and Time**
-------------------

*   _Page Path_：System -> System

Here you can configure the fundamental aspects of your device like its hostname or the time zone. and You can modify the time synchronization configuration. Of course, in general, you don't have to change anything on this page.

![SenseCAP M2 Local Console Guide Time](https://www.sensecapmx.com/wp-content/uploads/2022/07/time.png)

* * *

**Breathing Light**
-------------------

*   _Page Path_： System -> Breathing Light

Breathing Light is a hotspot device indicator, you can configure the behavior of the light.

![SenseCAP M2 Local Console Guide Breathing Light](https://www.sensecapmx.com/wp-content/uploads/2022/07/breathing-light.png)

* * *

**Region**
----------

*   _Page Path_：System -> Region

Here you can change the region parameter. The factory default is ‘AUTO’, which means：

*   If you do not have an asserted location for the hotspot, the region used is based on your hotspot type, for example, the device model M2-EU868 uses the region EU868.
*   If you have asserted location on the hotspot, Automatic adjustment of the region according to location.

In general, you do not need to set a region. In special cases: If you do not have an asserted location for a hotspot( Data-Only)， you can choose another region. For example, the device model of M2-US915 can be set to AU915 in Australia.

![SenseCAP M2 Local Console Guide Breathing Region Config](https://www.sensecapmx.com/wp-content/uploads/2022/07/region.png)

**NOTE:** If you have asserted location on the hotspot, The Region config MUST be **AUTO**.

* * *

**LuCi Password**
-----------------

*   **Page Path**：System -> Administration

Here you can change the LuCi Password.

![SenseCAP M2 Local Console Guide Breathing LuCi Password](https://www.sensecapmx.com/wp-content/uploads/2022/07/change-password.png)

* * *

**Restore Factory Defaults**
----------------------------

*   _Page Path_：System -> Firmware

You can recover your LuCi password by restoring the factory settings if you have forgotten it. However, after restoring the factory settings, the device will be updated again.

![SenseCAP M2 Local Console Guide Breathing LuCi Password](https://www.sensecapmx.com/wp-content/uploads/2022/07/change-password.png)

* * *

**Reboot**
----------

*   _Page Path_：System -> Reboot

You can reset the device here or configure a timed reset of the device.

![SenseCAP M2 Local Console Reboot](https://www.sensecapmx.com/wp-content/uploads/2022/07/reboot.png)

* * *

**Network**
===========

**Interfaces**
--------------

*   _Page Path_： Network -> Interfaces

You can get information about the network interface here. LAN IP default is "192.168.168.1". When your router's gateway IP is also this, you need to change the LAN IP of the device.

![SenseCAP M2 Local Console Guide Network Interface](https://www.sensecapmx.com/wp-content/uploads/2022/07/network_interface.png)

**Wireless**
------------

*   _Page Path_： Network -> Wireless

You can connect to Wi-Fi here. The steps below:

*   **Step 1**: Click the '**scan**' button to scan for Wi-Fi in your area.

![SenseCAP M2 Local Console Guide Network Interface Wireless](https://www.sensecapmx.com/wp-content/uploads/2022/07/wireless_home.png)

*   **Step 2**:  Select your WI-FI to join the network.

![SenseCAP M2 Local Console Guide Network Interface Wifi](https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi_join.png)

*   **Step 3**: Input your Wi-Fi password, then submit and save.

![SenseCAP M2 Local Console Guide Network Interface Wifi Guide](https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi_submit.png)

![SenseCAP M2 Local Console Guide Network Interface Wifi Save](https://www.sensecapmx.com/wp-content/uploads/2022/07/wifi_save.png)

In a few moments, you will be able to connect to WiFi, as you can see in the interface page.

* * *

**MultiWan**
------------

*   _Page Path_： Network -> MultiWan

Here you can see the priority and status of the network interfaces. MultiWAN priority is: wan(ETH) > wwan(Wi-Fi) > wwan0 (4G\*).

![SenseCAP M2 Local Console Guide Network Interface MultiWan](https://www.sensecapmx.com/wp-content/uploads/2022/07/multiwan.png)

* * *

**Diagnostics**
---------------

*   _Page Path_：Network -> Diagnostics

Here you can measure the speed of your Internet connection.

![SenseCAP M2 Local Console Guide Network Interface Network Test](https://www.sensecapmx.com/wp-content/uploads/2022/07/network_test.png)