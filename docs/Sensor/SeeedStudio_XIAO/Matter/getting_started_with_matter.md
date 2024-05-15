---
description: An introduction to how to quickly experience Matter Lighting using Espressif's Matter Deployment Tool.
title: Getting Started with Matter Quickly with XIAO ESP32
keywords:
- ESP-IDF
- XIAO
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /getting_started_with_matter
last_update:
  date: 05/11/2024
  author: Citric
---

# Getting Started with Matter Quickly with XIAO ESP32 Series

:::tip
This article is the second tutorial in the Seeed Studio XIAO ESP32 Development Matter series. If you haven't configured your ESP-IDF environment yet, please read the first tutorial first:

- **[Developed on XIAO using Espressif ESP-IDF](https://wiki.seeedstudio.com/xiao_idf)**

This tutorial applies to the XIAO ESP32C3, XIAO ESP32S3. The Matter example provided by Espressif is temporarily unavailable for the XIAO ESP32C6 because the GPIO8 pin is not pinned out.
:::

In the world of smart home technology, Matter has emerged as a game-changer, promising to revolutionize the way devices communicate and interact with each other. Matter is an open-source, standardized protocol that enables seamless interoperability between smart home devices from various manufacturers. By providing a common language and framework, Matter aims to simplify the development and deployment of IoT devices, creating a more connected and user-friendly smart home experience.

As a developer or enthusiast, you may be eager to explore the potential of Matter and start building your own Matter-compatible devices. That's where the XIAO ESP32 series and ESPLaunchPad come into play. The XIAO ESP32 series, particularly the XIAO ESP32C3, XIAO ESP32S3 and XIAO ESP32C6, are compact and powerful development boards that offer an ideal platform for creating Matter devices. With their robust features and extensive peripheral interfaces, these boards provide the necessary hardware foundation for your Matter projects.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/15.png" style={{width:800, height:'auto'}}/></div>

To streamline the development process and make it more accessible, Espressif Systems has introduced ESPLaunchPad, a comprehensive platform that simplifies the firmware flashing and provisioning of ESP32 devices. ESPLaunchPad leverages the power of the ESP RainMaker ecosystem, allowing you to easily configure and control your devices using a smartphone app. By combining the XIAO ESP32 series with ESPLaunchPad, you can quickly get started with Matter development and experience the benefits of this transformative protocol.

In this tutorial, we will guide you through the process of using ESPLaunchPad to swiftly flash firmware onto your XIAO ESP32 board and pair it with your iPhone using a QR code. By following these steps, you'll be able to establish a connection between your phone and the XIAO ESP32 device, enabling you to control and interact with it seamlessly. This hands-on experience will provide you with a foundational understanding of Matter and its potential in the smart home ecosystem.

Throughout this tutorial, you'll learn how to:
1. Set up your XIAO ESP32 board and prepare it for firmware flashing.
2. Use ESPLaunchPad to effortlessly flash the Matter firmware onto your XIAO ESP32 device.
3. Pair your XIAO ESP32 board with your iPhone using a QR code.
4. Control and interact with your Matter device using the iPhone app.
5. Explore the basic functionalities and capabilities of Matter in a practical setting.

By the end of this tutorial, you'll have gained a solid understanding of Matter and its implementation using the XIAO ESP32 series and ESPLaunchPad. You'll be equipped with the knowledge and skills to take your Matter development further, creating innovative smart home solutions that leverage the power of this groundbreaking protocol.

So, let's dive in and embark on an exciting journey into the world of Matter with the XIAO ESP32 series and ESPLaunchPad!

## Prepare the Software

The following lists the systems and versions supported for use in this tutorial.

- **Host**: [Ubuntu 22.04 LTS (Jammy Jellyfish)](https://releases.ubuntu.com/jammy/) or macOS 10.15 or later.

Matter's ESPLaunchPad is **not supported on Windows**.

## Prepare the Hardware

At the end of this tutorial, we will show you how to add the XIAO ESP32 series as a Matter Endpoint to Apple Home to control the LED strips through Apple's ecosystem. So far, this tutorial supports the following XIAOs, and you can choose them directly for the content of this course.

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO ESP32C3</th>
			<th>XIAO ESP32S3</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:110, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
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
				</a></div></td>
		</tr>
	</table>
</div>

In addition to the XIAO, we also need the WS281x model light bar or light bead. Currently the light example provided by Espressif only supports a single bead, so whether you use a strip or a bead, it will only light up one light. We would also recommend that you pick up Grove Base for XIAO for ease of wiring.

<div class="table-center">
	<table align="center">
		<tr>
			<th>Grove Base for XIAO</th>
			<th>Grove - RGB LED Ring (20 - WS2813 Mini)</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-RGB_LED_Ring-20-WS2813Mini/img/main.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-RGB-LED-Ring-20-WS2813-Mini.html">
				<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
				</a></div></td>
		</tr>
	</table>
</div>

If you are using the XIAO ESP32C3, connect the LED strip to pin **D8**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/16.png" style={{width:400, height:'auto'}}/></div>

If you are using the XIAO ESP32S3, connect the LED strip to pin **D9**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/17.png" style={{width:400, height:'auto'}}/></div>

This tutorial will use the **XIAO ESP32C3** as an example to give you an overview of how to flash the firmware, add devices and the rest.

## Video Tutorials

<div class="table-center">
<iframe width="750" height="450" src="https://www.youtube.com/embed/bhHVbRe_Gtw?si=iH-oouOl_ItkG7vF?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## Step 1. Flash Matter Firmware for XIAO ESP32

Connect the XIAO ESP32C3 board to your computer using a USB cable. Ensure that the board is properly recognized by your computer.

:::caution
Please do not use a Windows computer, you will notice that the Flash button is always greyed out on Windows computers.
:::

Open the ESPLaunchPad Website on your computer.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://espressif.github.io/esp-launchpad/?flashConfigURL=https://espressif.github.io/esp-matter/launchpad.toml">
            <strong><span><font color={'FFFFFF'} size={"4"}>Go to ESPLaunchPAD</font></span></strong>
    </a>
</div>

<br />

Select **light** in **Select Application** and select **ESP32C3** in **ESP Chipset Type**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/18.png" style={{width:800, height:'auto'}}/></div>

Then click on the **Connect** button in the upper right corner and select the XIAO device you have connected to your computer.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/19.png" style={{width:800, height:'auto'}}/></div>

Then click the **flash** button below and wait for the firmware to upload.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/20.png" style={{width:800, height:'auto'}}/></div>

Once the firmware upload is complete, you'll see some action alert boxes as well as a QR code, and we'll just click **Done**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/21.png" style={{width:800, height:'auto'}}/></div>

Then click the **Reset Device** button on the right side of the screen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/22.png" style={{width:800, height:'auto'}}/></div>

When you see the debug message, it means that everything is going very well. We can now proceed with the device binding.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/23.png" style={{width:800, height:'auto'}}/></div>

## Step 2. Add a device by scanning the code using the iPhone Home APP

In the section on adding devices, we'll take Apple's device as an example (since that's all I have on hand). If you have [Google's device](https://support.google.com/googlenest/answer/12391458?hl=en&co=GENIE.Platform%3DAndroid) or [Amazon's device](https://developer.amazon.com/en-US/alexa/matter) on hand, maybe you can use them as well.

If, as in this article, you want to add devices using the Home APP for iPhone, you need to have an Apple device as a home hub. The devices currently supported by Home Hub are HomePod and Apple TV, read the [Apple website for more details](https://support.apple.com/en-hk/102557). For the purpose of this tutorial, it is assumed that you have already added the Home Hub in the Home APP.

Home APP is installed by default on iOS devices. If you have ever deleted it, you can [search for it](https://apps.apple.com/cn/app/home/id1110145103?l=en-GB) again in the App Store and download it.

Open the Home App on your iPhone. Tap the **+** button in the top right corner of the screen. Select **Add or Scan Accessory** from the menu. Use your iPhone camera to scan the QR code provided with the XIAO ESP32C3 . The Home App will recognize the Matter Accessory and display it as a new accessory. Tap **Add to Home** to add the XIAO ESP32C3 to your Home App. Please refer to the detailed operation pictures below.

<div class="table-center">
  <table align="center">
    <tr>
      <th>Page 1</th>
      <th>Page 2</th>
      <th>Page 3</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/24.png" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/25.png" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/26.png" style={{width:600, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <th>Page 4</th>
      <th>Page 5</th>
      <th>Page 6</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/27.png" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/28.png" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/32.png" style={{width:600, height:'auto'}}/></div></td>
    </tr>
    <tr>
      <th>Page 7</th>
      <th>Page 8</th>
      <th>Page 9</th>
    </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/29.png" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/31.png" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

## Step 3. Using the XIAO in the Home APP

In the Home App, locate the newly added XIAO ESP32C3 accessory. Tap on the accessory to access its controls. Use the brightness slider to adjust the brightness of the connected lights. Tap on the color icon to change the color of the lights. You can choose from a variety of predefined colors or use the color picker to create custom colors. The lights connected to the XIAO ESP32C3 will respond in real-time to the adjustments made in the Home App.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiaoc6-matter/30.png" style={{width:300, height:'auto'}}/></div>

Congratulations! You have successfully flashed the light firmware onto the XIAO ESP32C3 board using ESPLaunchPad and paired it with your iPhone's Home App. You can now control the brightness and color of the connected lights directly from your iPhone, creating a personalized and convenient lighting experience.

Feel free to explore more advanced features and customization options available in the Home App and experiment with different light accessories compatible with the XIAO ESP32C3 board. With this foundation, you can further expand your smart home setup and create a truly connected and automated living space.

## Troubleshooting

### Q1: Failed to connect to the device for a long time in Home APP.

If you fail to connect to the device for an extended period of time, make sure you see the log message after uploading the firmware. If you have not paired the device for a long time at this point, the XIAO may go into standby mode, at which point you will need to press the Reset button on the XIAO or use Reset Device on the ESPLaunchPad to reboot the device. After that try adding it again.

Apart from that, there could be network issues. Please make sure that XIAO and your iPhone are under the same LAN. And they both need to be connected to a 2.4GHz network, no 5GHz network. After the configuration is done, the phone can use other networks. But XIAO only supports 2.4GHz network.

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



