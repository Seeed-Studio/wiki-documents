---
description: This guide explains the installation of Reticulous, in order to connect to the Reticulum mesh network using the Seeed Studio L2 Pro.
title: Get Started with Reticulous
keywords:
    - reticulum
    - L2 Pro
    - reticulous
    - mesh network
    - network stack
    - LoRa mesh
    - transport-agnostic
image: https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/L2First.png
slug: /reticulum_l2_pro_reticulous
sku: 100029766
sidebar_position: 1
last_update:
  date: 11/27/2026
  author: Michelle Huang
createdAt: '2026-11-27'
updatedAt: '2026-11-27'
url: https://wiki.seeedstudio.com/reticulum_l2_pro_reticulous/
---

# Reticulum on the L2 Pro with Reticulous

## What is Reticulum?

[Reticulum](ihttps://reticulum.network/) is a transport-agnostic mesh _network stack_, allowing for mesh networks going way beyond the sole use of LoRa: With Reticulum, nodes interconnect over LoRa, Wifi, bluetooth BLE, any other available type of radio (FM, AM, UHF, etc.), but also via the internet, or anything that will come in the future, _all at the same time_. 

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/reticulumdescription.png" style={{width:900, height:'auto'}}/>
</div>

Reticulum is also different from previous attempts at LoRa-only mesh networks as it is a full _network stack_, not just a messaging protocol. Protocols and applications can be built and used with no limits _on top of_ Reticulum itself. Reticulum is truly a new [philosophy](https://reticulum.network/manual/zen.html) for mesh networks and communications, for _post-internet_ networking.

Reticulum Network Stack (RNS) has immense set of possibilities that is now just barely starting to be explored. Its [documentation](https://reticulum.network/manual/index.html) is extensive, and the place to start for anyone who would like to understand it in depth and build upon it. 

Anyone willing to explore Reticulum can do so using any computer running any OS. Using a package manager (apt, pip, pipx) to easily install the base _reticulum_ package, and its terminal-based companion app _nomadnet_ or graphical program _sideband_ is a good start. Some may prefer a more modern, integrated ways of connecting to Reticulum, such as [ratspeak](https://ratspeak.org/) or [meshchatX](https://meshchatx.com/). Many such applications exist to allow for phones and computers to connect to the Reticulum network, via local wifi or the internet for instance.

## Reticulous.

One simple, integrated way of connecting to Reticulum that require little-to-no prior technical knowledge is [Reticulous](https://reticulous.net/), that is the object of this quick tutorial. 

Reticulous is a fully-integrated suite for the ESP32 series of microcontrollers, running a full Reticulum stack, a graphical OS (including a web UI) and numerous easy-to-use apps to send messages, browse nomadnet pages, place voice calls, participate to voice conferences, and much much more, using lora, bluetooth and wifi.

Reticulous is mainly developped by Rop Gonggrijp, a Dutch pioneer of the internet. It has been carefully engineered and exclusively programmed through the use of LLM.

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/1_reticulous-website.png" style={{width:900, height:'auto'}}/>
</div>

### Installing Reticulous on the L2 Pro


1. Use a web browser compatible with _WebSerial_ protocol. That is FireFox with a version more recent than v.151 (previous versions require the installation of a [Webserial addon](https://addons.mozilla.org/en-US/firefox/addon/webserial-for-firefox/).), or any Chrome-based browser.

2. Connect your browser to the [reticulous website](https://reticulous.net), click _"flashing"_ and the link [open flashmon](https://reticulous.net/flashmon/), or connect directly to [flashmon](https://reticulous.net/flashmon/), the flashing application for Reticulous.

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/2_reticulous-flashing.png" style={{width:600, height:'auto'}}/>
</div>

3. Make sure your device is connected via USB. you may have to authorize the browser to _access the serial port_ in different ways, depending on the browser and your OS. 

For users of linux-based OS, your user must be added to the _dialout_ group, by issuing the command:

```
sudo adduser [name-of-your-user] dialout
``` 

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/2_L2-usb-connect.jpg" style={{width:600, height:'auto'}}/>
</div>

4. The device has to be put in DFU mode for the flashing to be possible. Press the _user_ ("U/B") button, located at the center on the right of the device and keep it pressed while turning the device on, or while pressing the _reset_ button if it was already on. The screen will be black, the device is now in DFU mode, ready for flashing.

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/3_reticulous-flashing-detecting.png" style={{width:600, height:'auto'}}/>
</div>

5. Reticulous Flashmon should detect the correct model of device and present you with a dialog box. Press _"Flash Reticulous to seeed-l2pro"_.

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/4_reticulous-flashing-in-progress.png" style={{width:600, height:'auto'}}/>
</div>

6. Wait for flash to finish, and the device shall reboot.


### Configuring Reticulous

After the successful flashing, there are several ways of configuring Reticulous:

#### Through the on-screen onboarding app

The screen of the device will invite you to configure basic parameters: connect to a wifi network, choose a master password for the device, input some LoRa parameters.

#### Through the WebUI

A useful feature of Reticulous is its webUI. One can from a web browser control all the functions of reticulous, with more ease and more space than on the device's own screen. This can also be used remotely (in the case of embedded devices like a Xiao sitting in an enclosure on a rooftop or a balcony) and for devices (such as a the Xiao) that do not even have a screen or an interface.

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/5_reticulous-webui-LXMF.png" style={{width:900, height:'auto'}}/>
</div>

During the first 10 minutes after booting, reticulous will create a wifi network with a name starting with _"reticulous_". Connect to it, and open your web browser to https://reticulous.local (It may complain about the certificate, this is normal, just connect anyways).

Here you will be presented with the same onboarding options as if you were on the device itself: master password, wifi configuration, LoRa parameters, etc. 


#### Interfaces

One key notion in Reticulum is the notion of _interfaces_. As Reticulum is transport-agnostic, it means it can connect through any possible mean. Each _interface_ is one connection mean. It must be properly configured, then Reticulum will route information seemlessly through all interfaces, depending on where a destination is located. When one interface is down, traffic will continue through the remaining interfaces.

Interfaces can be configured in the "settings" / "reticulum mesh" / "interfaces" menu, and can be of many different types:

- _TCP_: a type of interface that connects to Reticulum through the Internet. A good place to start if you want to connect to a wider portion of the Reticulum network. Find addresses to use as TCP interfaces on the [RNS recipes directory](https://directory.rns.recipes/)

- _auto_: the "auto" interface uses available connectivity (wifi, bluetooth BLE) to automatically connect to other devices within range having an "auto" interface connected. It's the simplest to get two devices connected in a local network.

- _LoRa_: configuring shared settings for LoRa such as a base frequency, bandwidth and a spread factor (SF) enables multiple devices to connect together over long distances. Those settings must be the object of a local consensus, depending on local regulations, frequency occupation and your specific needs.

- _Bluetooth_: if activated, the device can connect to other devices with bluetooth interfaces activated. It is quite limited compared to wifi or LoRa, but can be useful in some cases (nRF52-based devices do not have a bluetooth connection for instance...)

- _rnode_: a special type of interface that connects a LoRa-capable device to another device that is NOT LoRa capable, in order to provide it with LoRa capability (like a "LoRa modem" somehow). Reticulous allows this function, so your L2 Pro device can be used to provide a _rnode_ interface to a laptop or a phone, enabling it to connect to Reticulum through LoRa, through an USB cable or through a Bluetooth connection. You can provide connectivity to a device (laptop, phone) using a rnode interface, while at the same time using all the other functionalities of Reticulous. 


### Using Reticulous

#### Through the webUI

Once your wifi network has been configured, you can return into the wifi configuration screen (by going to the _"settings"_ menu, then _"wifi"_ sub-menu), to check the IP address of the L2 Pro, and type its IP address in your web browser from a computer connected to the same network, in order to access the WebUI.

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/5_reticulous-touchscreenUI-wifi-settings.png" style={{width:300, height:'auto'}}/>
</div>

After you input your _master password_ you can access all the functionalities of Reticulous in your browser, in a windowed environment.

#### On the device using the touch screen

Reticulous present a "phone-like" interface, with a bunch of dedicated applications for using different protocols over the Reticulum network. Click every app to use it, and use the _user_ button (on the middle on the right of the device) to come back to the _app drawer_ at any time. Here are a few examples of applications:


<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/5_reticulous-touchscreenUI-main-menu.png" style={{width:300, height:'auto'}}/>
</div>


##### LXMF

LXMF (the Lightweight Extensible Message Format) is the protocol used to send encrypted messages via Reticulum. Enter the LXMF address of someone, or wait for their destination to be announced and displayed in the _"on the mesh"_ section of the LXMF app, and start chatting!

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/5_reticulous-touchscreenUI-LXMF.png" style={{width:300, height:'auto'}}/>
</div>


##### Nomadnet

Some nodes on Reticulum are Nomadnet Nodes, serving very simple text-based pages, using the _Micron_ markup. Use the Nomadnet app to either input manually the _destination_ of one such page (for instance the Aleph Rngit page is where the main source code of Reticulum is being distributed by its author, Mark Qvist, on the following destination: "a8d24177d946de4f1f0a0fe1af9a1338"), or wait for some destinations to appear as _announces_ in the _on the mesh_ section of the Nomadnet app.

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/6_reticulous-webui-Nomadnet.png" alt="Nomad Browser displaying a chat room in the Reticulous web UI" style={{width:900, height:'auto'}} />
</div>

##### RRC

RRC is the Reticulum Relay Chat, a protocol like the antique IRC protocol used on the internet, that allows for group chats in rooms. 

Add the destination of a known _hub_ (for instance the popular _rnscommunity_ hub's destination is "28c7c1a68c735693aa8e6b8193ed44b2"), or wait for one to appear announced in the _on the mesh_ section of the app, then connect to it and select a room to join, or create your own.


##### The only limit is the sky!

Explore many other applications within the Reticulous suite, learn more about Reticulum and its endless possibilities, join a community of thousands of users, call for public local meetups with your friends and witness the birth of the post-internet network! You may want to develop your own protocols and applications for Reticulum... but this would be beyond the scope of this tutorial.


### Connect to other devices

In order to connect locally to other devices, or to build a mesh network (whether it is connected or not to the rest of the Reticulum network), you need to ensure the following:

1. The original Reticulum software is so minimal and frugal that it can run on any computer that is less than 20 years old. Use any old laptop or an old Raspberry Pi or any other SBC for a node. Any phone would do. Any other microcontroller-based device such as another L2 Pro, or a Xiao, would make a perfect Reticulum node as well...

2. Install Reticulum on the other device (or Reticulous if it's an ESP32-based device);

3. Make sure both devices have either similar LoRa parameters if you want to use LoRa, or that both are using Wifi on networks that are interconnected, or that both are using the _"auto"_ interface and have their wifi or bluetooth activated, or that both have a TCP interface connecting them to the internet;

4. Wait until both devices have _announced_ their _destination_ to each other, and use the LXMF application on one device to click the destination of the other device, once it appeared in the "on the mesh" list, to start a chat;

TIP: The Reticulum Network Stack relies for its routing on _announces_ by nodes of their _destination_, and _path requests_ sent by a node to its neighbors to attempt to find a _path_ to a specific destination. In order to connect to another device running Reticulum, make sure that both devices have _announced_ their destination to their neighbors. Usually it is done automatically when Reticulous boots, and then every 30 minutes afterwards.

## Tech Support & Product Discussion

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>