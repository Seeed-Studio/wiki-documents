---
description: Which LoRaWAN Network Should I Select
title: Which LoRaWAN Network Should I Select
keywords:
- LoRaWAN
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /select_lorawan_network
last_update:
  date: 1/9/2023
  author: Jessie
---


In the rapidly expanding realm of IoT (Internet of Things), LoRaWAN networks have surged in popularity, offering extended range and low-power communication capabilities for diverse IoT applications. Lately, we've been inundated with inquiries: "**Which LoRaWAN network should I choose for my specific project?**"

In this article, we’ll take you through the components of a LoRaWAN network, explore the differences between public and private LoRaWAN networks, and offer references to help you make an informed decision.

### What is a LoRaWAN Network?

**LoRaWAN** (Long Range Wide Area Network) is a wireless protocol designed for low-power, long-range communications that enables Internet of Things (IoT) devices to connect and exchange data with servers or applications.
It offers a cost-effective, and secure solution for deploying IoT devices across a wide range of applications, including smart cities, agriculture, asset tracking, environmental monitoring, and more.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/lorawan-server.png" alt="pir" width={800} height="auto" /></p>

### How does  LoRaWAN Network Work?

A typical LoRaWAN network consists of the following basic elements: End devices, gateway, network server and application server.

End devices communicate with nearby gateways and  gateway is connected to the Network Server.The Network Server forwards the data to the application server.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/lorawan-server2.png" alt="pir" width={800} height="auto" /></p>

### Differences between Public LNS and Private LNS

LoRaWAN networks can be broadly categorized as public or private. Public LoRaWAN networks rely on the network providers like TTN, Helium,etc, whereas private networks put network elements such as gateways and servers under the user's control.You can select the public LNS, or build your own private network.

|Factor|Public LoRaWAN Networks|Private LoRaWAN Networks|
|--|--|--|
|Ownership| Managed by network providers|Under user's control|
|Coverage|Available in specific regions|Free to cover the area you care|
|Security|Shared infrastructure |Enhanced control and security|
|Steup cost|Relatively low cost of entry|Significant infrastructure costs at launch|
|Data transmission cost|High subscription fees for end devices data transmission|No subscription|

The choice between public and private LoRaWAN networks largely depends on your project's nature and requirements. Here's a brief overview:

**Private LoRaWAN Networks are suited for:**

- Industrial automation networks requiring secure end-to-end data integrity.
- Medical applications requiring ultra-secure communication between devices.
- Smart building security systems with sensitive information.

**Public LoRaWAN Networks are suited for:**

- Agricultural scenarios like crop monitoring.
- Smart cities with applications such as traffic monitoring, smart lighting, and smart parking systems.

### If I choose Public LoRaWAN Networks, what should I do?

If you're considering a public LoRaWAN network, there are several global providers to choose from, including TTN, Helium, Loriot, and Chirp Stack,etc. To make an final decision,  you could consider the following factors:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/lorawan-map.png" alt="pir" width={800} height="auto" /></p>

#### Is there a public LoRaWAN network available in my area?

Determine if there's a public LoRaWAN network available in your area by visiting Semtech’s LoRa Ecosystem [Network Providers](https://www.semtech.com/lora/ecosystem/networks) page, or consulting the LoRa Alliance's [Global Coverage Map](https://lora-alliance.org/#tabs-1)。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/lorawan-map2.png" alt="pir" width={800} height="auto" /></p>

To help you choose the most suitable provider and development area, we recommend conducting field testing, [Wio Terminal LoRaWAN Field Tester](https://www.seeedstudio.com/WioField-Tester-Kit-p-5282.html) will help you particularly know how many gateways around can be touched for a given position, enrich the network mappers to know each other and share the real network coverage.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/server-helium.png" alt="pir" width={700} height="auto" /></p>

### If I choose Private LoRaWAN Networks, what should I do?

Building a private LoRaWAN network can be a viable option, especially for routine area deployments like factories or campuses. A typical private LoRaWAN network involves three major components—LoRaWAN devices, gateways, and servers, here's what you may need to consider:

#### What gateway should I choose?

To build your own LoRaWAN network, start by selecting a suitable gateway, which plays an important role in connecting end devices and network servers. There are many types of gateway, when you are making a choice, consider factors such as cost, functionality, and deployment options. For a quick and easy setup, just check out the  [SenseCAP Multi-Platform LoRaWAN Indoor Gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html) - It's as simple as setting up a Wi-Fi router, and comes with a built-in ChirpStack LNS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/introduction/server-gateway.png" alt="pir" width={800} height="auto" /></p>

#### Start deploying your end devices

Once your gateway is set up, it's time to deploy your first device! Just try the [SenseCAP T1000 LoRaWAN Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html), an ideal for a truly reliable tracking solution.

When it comes to deploying end devices, you might wonder how many devices can connect to a gateway. The answer depends on several variables, notably the data payload size transmitted by end devices and their specified transmission intervals, environmental conditions also play a role in this assessment.To ascertain the maximum number of supported devices without risking packet loss, practical experimentation at the deployment site is often the most reliable approach.

Typically, a gateway can handle messages from hundreds of devices, for [SenseCAP Multi-Platform LoRaWAN Indoor Gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html), it allows the connection of approximately 600 [SenseCAP T1000 LoRaWAN Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) (with 5 minutes upload interval) .

Now that you're better informed about the options available for LoRaWAN networking, you can make a confident decision when deploying LoRa-based applications. Let's begin the LoRaWAN journey by setting up your first gateway!
