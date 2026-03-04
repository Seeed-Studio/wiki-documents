---
description: Turn your Raspberry Pi into a powerful mobile Wi-Fi hotspot with this guide. Easily connect to the internet anywhere with a Raspberry Pi 4G LTE Hat.
title: Setting Up a Hotspot with Raspberry Pi 4G LTE Hat on Raspberry Pi OS
keywords:
  - Raspberry Pi Hat
  - Getting started
  - Hotspot
  - Mobile Data
  - 4G LTE
  - Edge Computing
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/1-114993408-LTE-CAT-4-EG25-GL-4G-HAT-for-Raspberry-Pi.webp
slug: /4g_lte_hotspot_on_raspberry_pi_os
last_update:
  date: 12/24/2024
  author: Kasun Thushara
---

## Introduction 

This guide will walk you through the process of setting up a 4G LTE hotspot on your Raspberry Pi using the 4G LTE Hat. We'll cover the necessary hardware and software components, including the Raspberry Pi, the 4G LTE Hat, with Raspberry Pi OS (Bookworm). You'll learn how to configure the 4G module, establish a Wi-Fi network, and securely share your internet connection with other devices.

## Prerequisites

### Hardware Requirements 

<div class="table-center">
  <table align="center">
    <tr>
        <th>Raspberry Pi 5</th>
         <th>Raspberry Pi 4G LTE CAT4 HAT</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102110919-raspberry-pi-5-8gb-45font.jpg" style={{width:250, height:'auto'}}/></div></td>    
         <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_23_1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-CAT-4-EG25-GL-HAT-for-Raspberry-Pi-p-6325.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Software Requirements 

- A Raspberry Pi with Bookworm OS installed is required.

- A Quectel LTE 4G module configured for internet access. Ensure LTE connectivity is properly set up using RNIDS or similar configurations. [Link](https://wiki.seeedstudio.com/raspberry_pi_4g_hat_rndis_mobile_internet/)

## Steps to Enable the Hotspot

###  Connect to the LTE Network

Ensure your Quectel LTE module is connected and providing internet access. Confirm connectivity using:

```bash
ping -c 4 google.com
```

###  Create a Hotspot
To broadcast a hotspot network using the built-in Wi-Fi module:

- Open the terminal.
- Run the following command, replacing `hotspot name` and `hotspot password` with your desired SSID and password:

```bash
 sudo nmcli device wifi hotspot ssid <hotspot name> password <hotspot password> ifname wlan0
```

- **ssid**: Sets the name of your hotspot network.
- **password**: Sets the password to access the hotspot.
- **ifname wlan0**: Specifies the Wi-Fi interface to use.

## Manage the Hotspot

### Disable the Hotspot

To stop the hotspot and restore the Wi-Fi interface to client mode:

```bash
sudo nmcli device disconnect wlan0
```
### Reconnect to Another Wi-Fi Network

To connect to a different Wi-Fi network after disabling the hotspot:

```bash
sudo nmcli device up wlan0
```
## Additional Notes


- You can now use your Raspberry Pi as a portable router or Wi-Fi access point.
- Ensure your Raspberry Pi's power source is stable when broadcasting a hotspot for long durations.
- You can refer this [document](https://www.raspberrypi.com/tutorials/host-a-hotel-wifi-hotspot/) for futher 

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>