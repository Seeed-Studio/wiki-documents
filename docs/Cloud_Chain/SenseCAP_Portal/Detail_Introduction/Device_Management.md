---
description: SenseCAP Portal Device Management
title: Device Management
keywords:
- Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png        
last_update:
  date: 02/14/2023
  author: Matthew
---


<div class="post-content">
<div class="summary">

Here you are offered several methods to manage SenseCAP devices, including Gateway Management, Node Group Management, and Sensor Node Management.

</div>
<div id="toc">

&nbsp;

</div>
<h2 id="gateway" class="clickable-header top-level-header">Gateway</h2>
<i class="icon-arrow-up back-to-top"></i>① Filter the gateway based on EUI, frequency, status, and registration time.
② List of gateways, displaying EUI, name, status, and so on.
③ Click EUI to enter the device details page to view basic information, location, binding, etc.
<figure><img class="docimage" src="https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-1.jpg" alt="" /></figure>
<h2 id="node-group-management" class="clickable-header top-level-header">Node Group Management</h2>
<i class="icon-arrow-up back-to-top"></i>You can manage devices conveniently by groups. You can create new groups, delete groups or move devices to a certain group.
<figure><img class="docimage" src="https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-2.jpg" alt="" /></figure>
<h2 id="sensor-node-management" class="clickable-header top-level-header">Sensor Node Management</h2>
<i class="icon-arrow-up back-to-top"></i>On the Sensor Node page, you can see all the Sensor Nodes bound to your account.
① Devices contain types such as “LoRa” and “NB-IoT” and can be viewed by category.
② Filter criteria, according to EUI, frequency, group, status, and registration time filter node.
③ Sensor Node list, displaying EUI, name, status, data type, and so on.
④ Click EUI to enter the device details page.
<figure><img class="docimage" src="https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-3.jpg" alt="" /></figure>
<h2 id="general-information" class="clickable-header top-level-header">General Information</h2>
<i class="icon-arrow-up back-to-top"></i>On the general information page, you can set the device name, and check the device status, battery status, recent online record and etc..
<ul>
 	<li>Battery Status: if it displays “Insufficient Battery”, it means the battery is below 10%.</li>
 	<li>Recent online record: the gateway will go offline within minutes, and other devices will go offline later (typically three upload intervals).</li>
</ul>
<figure><img class="docimage" src="https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-4.jpg" alt="" /></figure>
<h2 id="channel" class="clickable-header top-level-header">Channel</h2>
<i class="icon-arrow-up back-to-top"></i>Single Channel Device: Only one channel, which means the node can only connect one probe, such as LoRaWAN Sensor Node.
<figure><img class="docimage" src="https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-5.jpg" alt="" /></figure>
Multichannel Device: With multiple channels, multiple sensor probes can be connected, such as Sensor Hub.
<figure><img class="docimage" src="https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-6.jpg" alt="" /></figure>
<h2 id="data" class="clickable-header top-level-header">Data</h2>
<i class="icon-arrow-up back-to-top"></i>You can check the period data of each channel, as well as the device status data.
<figure><img class="docimage" src="https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-7.jpg" alt="" /></figure>
<h2 id="settings" class="clickable-header top-level-header">Settings</h2>
<i class="icon-arrow-up back-to-top"></i>Only Read Key / Full Access Key: This is used with API.
Device Settings: Adjust the data collection frequency of the device, ranging from 5 to 43,200 minutes. The new collection frequency will take effect the next time the device uploads data.
<figure><img class="docimage" src="https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-8.jpg" alt="" /></figure>
<h2 id="location" class="clickable-header top-level-header">Location</h2>
<i class="icon-arrow-up back-to-top"></i>If the device has GPS function, the location information will be automatically updated here.
If the device does not have GPS, you can manually set the GPS: “Search location” - “Map punctuation” - “Set as address”.
<ul>
 	<li>Note: When using the Device’s GPS, try to place the device outdoors with no shielding above.</li>
</ul>
<figure><img class="docimage" src="https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-9.jpg" alt="" /></figure>
<h2 id="bind-device" class="clickable-header top-level-header">Bind Device</h2>
<i class="icon-arrow-up back-to-top"></i>If you want to change the device to another account or delete the device, you can do on this page.
<figure><img class="docimage" src="https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-device_management-10.jpg" alt="" /></figure>
</div>