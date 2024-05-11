---
description: Introduces how to install and configure the ESP-Matter environment.
title: Matter Development with XIAO ESP32C6
keywords:
- ESP-IDF
- matter
- XIAO
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao_esp32c6_matter_env
last_update:
  date: 05/10/2024
  author: Citric
---

# Matter Development with XIAO ESP32C6

:::tip
This article is the third tutorial in the Seeed Studio XIAO ESP32 Development Matter series. If you haven't configured your ESP-IDF environment yet, please read the first tutorial first:

- **[Developed on XIAO using Espressif ESP-IDF](https://wiki.seeedstudio.com/xiao_idf)**
- **[Getting Started with Matter Quickly with XIAO ESP32 Series](https://wiki.seeedstudio.com/getting_started_with_matter)**
:::

In the rapidly evolving landscape of the Internet of Things (IoT), a new player has emerged to revolutionize the way smart home devices communicate and interact with each other. Meet Matter, the unifying protocol that promises to bridge the gap between various smart home ecosystems and create a seamless, interoperable experience for users worldwide.

So, what exactly is Matter, and why is it generating so much excitement in the IoT community? Matter is an open-source, standardized protocol that enables smart home devices from different manufacturers to work together effortlessly. It aims to simplify the development and deployment of IoT devices by providing a common language and framework for communication.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/Matter-stack.png" style={{width:700, height:'auto'}}/></div>

- Communication protocol for smart home devices.
- 1.0 version launched on October 4, 2022, after being postponed twice.
- Standardized set of commands, so devices from different manufacturers can talk to each other.
- Runs on top of IP networks, using either Thread, Wi-Fi, or Ethernet.
- Uses Security by Design and Zero-Trust.
- Runs locally – typically connects to the cloud via a Matter hub.
- Exists alongside other smart home standards like Zigbee, Z-Wave, and 433MHz.
- Battery life and range dependent on wireless networking technology.
- Coordinated by a Matter hub.

The value proposition of Matter is clear: it offers a path to a more connected, user-friendly, and secure smart home experience. By adopting Matter, device manufacturers can ensure that their products are compatible with a wide range of smart home platforms and assistants, such as Amazon Alexa, Google Home, and Apple HomeKit. This interoperability not only benefits consumers but also opens up new opportunities for developers and businesses in the IoT space.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/Matter-network.jpg" style={{width:800, height:'auto'}}/></div>

As a developer, embracing Matter means tapping into a vast ecosystem of devices and services, allowing you to create innovative solutions that can seamlessly integrate with existing smart home setups. By leveraging the power of Matter, you can focus on building compelling user experiences and functionalities, rather than worrying about the intricacies of device communication and compatibility.

To embark on your Matter development journey, you'll need the right tools and environment. In this tutorial, we'll guide you through the process of setting up a Matter development environment using the Seeed Studio XIAO ESP32C6, a compact and powerful board specifically designed for IoT applications. With its ESP32-C6 microcontroller and extensive peripheral interfaces, the XIAO ESP32C6 is an ideal choice for developing Matter-compatible devices.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/Thread-matter-smart-homes.png" style={{width:800, height:'auto'}}/></div>

In the following sections, we'll walk you through the steps to configure your Matter development environment, including installing the necessary software, setting up the Seeed Studio XIAO ESP32C6 board, and running your first Matter example program. By the end of this tutorial, you'll have a solid foundation to start building your own Matter devices and contribute to the growing ecosystem of interoperable smart home solutions.

So, let's dive in and unlock the potential of Matter development with the Seeed Studio XIAO ESP32C6!

## Prepare the Software

Below I will list the system version, ESP-IDF version, and ESP-Matter version used in this article for reference. This is a stable version that has been tested to work properly.

- **Host**: [Ubuntu 22.04 LTS (Jammy Jellyfish)](https://releases.ubuntu.com/jammy/).
- **ESP-IDF**: Tags [v5.2.1](https://github.com/espressif/esp-idf/tree/v5.2.1).
- **ESP-Matter**: main branch, as of 10 May 2024, commit [bf56832](https://github.com/espressif/esp-matter/commit/bf568327d41ca29167fcf2743ace1941432e4aa5).
- **connectedhomeip**: currently works with commit [13ab158f10](https://github.com/project-chip/connectedhomeip/tree/13ab158f10), as of 10 May 2024.
- **[Git](https://git-scm.com/)**
- **[Visual Studio Code](https://code.visualstudio.com/)**

## Prepare the Hardware

In this section, we will detail how to configure the use of ESP-IDF in Ubuntu's environment and execute the lighting example provided by ESP-IDF. So for this article, you only need to prepare any of the following XIAO ESP32 series.

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO ESP32C3</th>
			<th>XIAO ESP32S3</th>
            <th>XIAO ESP32C6</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:110, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>



## Resources

- **[ESPRESSIF Matter - Developing with the SDK](https://docs.espressif.com/projects/esp-matter/en/latest/esp32/developing.html#)**

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>

