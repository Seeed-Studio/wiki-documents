---
title: AI Human Detection and Meshtastic Notification Demo
description: This wiki demonstrates an AI-driven human detection system using an AI camera and XIAO ESP32S3 & Wio SX1262 Meshtastic networking to broadcast real-time alerts.
keywords:
    - AI Human Detection
    - XIAO ESP32S3
    - ESP-Mesh
    - Edge AI
    - GPIO Trigger
slug: /ai_human_detection_mesh_broadcast
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
sidebar_position: 1
last_update:
    date: 2026-01-27
    author: Your Name
---

## Introduction
This demo showcases a powerful Edge AI solution integrating the reCamera with a Meshtastic LoRa mesh network. By running a local YOLO11n model, the reCamera identifies humans in real-time and triggers a GPIO signal. This physical signal prompts a XIAO ESP32S3 node to broadcast a "Human detected" alert across the decentralized network. This setup allows for autonomous, off-grid monitoring and security without relying on internet infrastructure. The guide covers hardware assembly for the PoE baseboard, C++ deployment, and Mesh node configuration to bridge AI vision with long-range communication.

## Hardware Preparation
<table align="center">
<tbody><tr>
<th>Seeed Studio reCamera HQ PoE 8GB/64GB</th>
<th>XIAO ESP32S3 & Wio-SX1262 Kit for Meshtastic & LoRa</th>
<th>Wio Tracker L1 Pro</th>
</tr>
<tr>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:210, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t2.jpg" style={{width:300, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t3.jpg" style={{width:210, height:'auto'}}/></div></td>
</tr>
<tr>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Check More🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-Tracker-L1-Pro-p-6454.html" target="_blank" rel="noopener noreferrer">
<strong><span><font color={'FFFFFF'} size={"4"}> Check More🖱️</font></span></strong>
</a>
</div></td>
</tr>
</tbody></table>

## Setup Demo
To achieve this demo, we need to configure the reCamera and two Mesh nodes differently. First, run a C++ program on the reCamera, which will trigger a GPIO signal when a person is detected. Subsequently, we need to flash the Meshtastic firmware onto the first Mesh node, enabling this Mesh node to monitor the GPIO signal and send a message to the Meshtastic network when the signal is triggered. The broadcasted message will be received by the second Mesh node; finally, by connecting a phone to the second Mesh node via Bluetooth, the sent message can be viewed on the phone.

### reCamera Configuration
:::warning
Please ensure that the reCamera baseboard you have is the PoE version, as only the PoE version of reCamera has GPIO interfaces. Regarding the differences between the standard version and the PoE version of reCamera, please refer to[reCamera 2002(w) 8GB/64GB Hardware Specification](https://wiki.seeedstudio.com/recamera_hardware_and_specs/)and[reCamera HQ PoE 8GB/64GB Hardware Specification](https://wiki.seeedstudio.com/recamera_hq_poe_hardware/).

If you have purchased the PoE version of reCamera[reCamera HQ PoE 8GB/64GB](https://www.seeedstudio.com/reCamera-2002-HQ-PoE-8GB-p-6558.html) you can use it directly to reproduce this demo.

If you have purchased the standard version of reCamera[reCamera 2002(w) 8GB/64GB](https://www.seeedstudio.com/reCamera-2002-8GB-p-6251.html) you need to purchase an additional PoE baseboard[reCamera Base Board PoE](https://www.seeedstudio.com/reCamera-2002-Base-Board-PoE-p-6559.html) and install it on the reCamera, replacing the standard baseboard.
:::

The purpose of the following configuration is to deploy a **object detection** application on the **reCamera**. By stopping the default Node-RED services, we release the necessary hardware resources to run a dedicated C++ executable called `model_detector`. 

This setup utilizes a YOLO11n model (trained on the COCO dataset) to perform real-time edge computing. The ultimate goal is to enable the reCamera to autonomously detect specific objects (humans in this case). Once a detection occurs, the system will trigger a hardware signal by pulling **GPIO 490** to a **High** level. This hardware trigger serves as the bridge to communicate with the **XIAO ESP32S3 + Wio SX1262** Meshtastic node.

#### Expose GPIO Pins
To expose the GPIO pins on the reCamera PoE baseboard, we need to unscrew the baseboard's screws and remove the cover. Then, use a hex wrench to remove the cover. You will find a connector on the baseboard, which has 6 pins. We will use GPIO 490 from this connector. For more information about the interfaces on the baseboard, please refer to[reCamera Base Board with PoE Hardware Specification](https://wiki.seeedstudio.com/recamera_hq_poe_hardware/#b3_poe).

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_1_1.jpg" /></div>

Next, from the reCamera PoE package or the reCamera Base Board with PoE package, extract the MX1.25-Dupont,6P,6Color:Red-Black-Yellow-Green-Blue-White wire.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_1_2.jpg" /></div>

Connect the wire to the GPIO 490 interface on the baseboard. The final connection should look like the image shown below. GPIO 490 is connected to the green wire.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_1_3.jpg" /></div>

#### Login to reCamera
First, upgrade your reCamera to the latest version 0.2.2 following this tutorial. If your version is already 0.2.2, you can skip this step. [reCamera OS UPgrade Tutorial](https://wiki.seeedstudio.com/recamera_os_version_control/)

:::note
Since reCamera's camera resources are exclusive, the Node-RED and related AI services running by default will occupy the underlying image driver for a long time. If the C++ object detection program is started directly while these services are running, it will cause conflicts between multiple processes, leading to the C++ program failing to start due to the inability to access the camera normally. Therefore, we need to access the reCamera via SSH to ensure the device can still be controlled remotely after closing the Web services; subsequently, execute commands in the reCamera terminal via SSH to stop background processes such as Node-RED, thereby releasing the lock on the camera and clearing the necessary hardware access path for the model_detector program.
:::

#### Establish SSH Connection
Use tools like **MobaXTerm** to log in to **reCamera** via SSH. Default IP: Usually `192.168.42.1`
* After logging in, it is recommended to switch to the `/userdata/` directory, as it is typically used for storing user data and models.

#### Stop Node-RED Related Services
Since the Node-RED service running by default on reCamera consumes significant system resources, you must execute the following three commands to stop it before running the C++ Demo:

```bash
sudo /etc/init.d/S03node-red stop
sudo /etc/init.d/S91sscma-node stop
sudo /etc/init.d/S93sscma-supervisor stop
```
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_2_1.jpg" /></div>

#### Upload Model and Firmware

Use **MobaXTerm’s file transfer function** (the upload icon in the left file panel) to upload the following files to the `/userdata/` directory.

**Compiled firmware**: e.g., `model_detector`
**Quantized model**: e.g., `yolo11n_cv181x_int8.cvimodel`

The `model_detector` here is an executable file. It is generated by configuring the **reCamera SDK** and **cross-compiling** C++ source code. The logic of this program is as follows: It uses the uploaded `yolo.cvimodel` to detect if a human exists in the frame. If a human is detected, **GPIO 490** on the reCamera PoE base board will be set to **High**; otherwise, it will remain **Low**.

Since setting up the cross-compilation environment can be complex, we have provided the pre-compiled executable for your convenience. You can simply download and upload it directly to your reCamera. [Compiled C++ Model Detector Code](https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/model_detector)

Regarding the model file, it is a YOLO11n detection model trained based on the **COCO dataset**. It contains 80 classes and can recognize common everyday objects such as humans and vehicles. Similarly, we provide a download link so you do not need to train or convert the model yourself. After downloading, you can upload it directly to your reCamera. [reCamera Yolo Models](https://wiki.seeedstudio.com/recamera_on_device_models/)

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_2_2.jpg" /></div>

:::note
Modifying the source code and performing cross-compilation is recommended for those with experience in embedded systems. If you are interested in exploring this further, please refer to the document.
:::

#### Grant Permissions and Run
In the terminal, first visit the folder where you upload the compiled firmware and quantized model. Then add execution permissions to the firmware and start the detection program.
```bash
chmod +x model_detector
```
Execute the following command (using `0.5`(50%) as the confidence threshold example):

```bash
sudo ./model_detector yolo11n_cv181x_int8.cvimodel 0.5
```

After successful execution, you will see real-time detected class information (e.g., `Class 0`) and their coordinates in the terminal.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_3_1.jpg" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/1_3_2.jpg" /></div>

### XIAO ESP32S3 + Wio-SX1262(Meshtastic Node) Configuration
Now, we will configure the **first Mesh node**. This node is responsible for receiving the IO output from the reCamera and broadcasting a text message: **"Human detected"**.

#### Firmware Flashing
A specific Mesh firmware must be flashed to the device. Due to the unique channel management mechanism of Mesh networks, information output by the **DetectionSensor** module to **Channel 0** in standard firmware is typically discarded. This design is intentional to prevent high-frequency detection data from clogging the Mesh network channels. Please follow steps below:

:::note
Before flashing, temporarily remove the **Wio SX1262 expansion board** from the XIAO. While the expansion board does not interfere with the flashing process itself, it physically obstructs the **BOOT** button on the XIAO ESP32S3.
:::

1.  First, download the pre-compiled Mesh firmware [Custom Meshtastic Firmware](https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/firmware-seeed-xiao-s3-2.7.17.63aadba52.factory.bin).
2.  Connect the XIAO ESP32S3 to your computer via a USB cable and **enter Bootloader mode**. You can refer to this guide [XIAO S3 bootloader guide](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/#bootloader-mode)
3.  Use a web-based flashing tool[Meshtastic Web Flasher](https://flasher.meshtastic.org/) select the **Seeed XIAO esp32s3** device, then select firmware you just downloaded and finally click the **Flash** button to burn the firmware onto the XIAO ESP32S3.
A video tutorial is available but remind flash the download firmware rather than Meshtastic official firmware[Flash Firmware Video](https://wiki.seeedstudio.com/xiao_esp32s3_&_wio_SX1262_kit_for_meshtastic/#flash-firmware).
4.  Once the flashing is complete and no errors are reported, unplug the XIAO ESP32S3 to power it off. Reinstall the Wio SX1262 expansion board, and then reconnect the USB cable to your computer. The device will now boot up with the new firmware.

#### Configure the Mesh Node
There are two ways to configure Mesh nodes. First, connect the device to your computer with a USB cable, and then you can 1: Use another Mesh web tool: [Meshtastic Web Client](https://client.meshtastic.org/messages/broadcast/0) to access the mesh node via serial 2: Download the Meshtastic mobile app to access the Mesh node via Bluetooth on your phone. Here we demonstrate using the [Meshtastic Web Client](https://client.meshtastic.org/messages/broadcast/0) on a PC to configure the esp32s3 and Wio Tracker.

:::note
The UI of the Mesh app on iOS and Android, as well as the UI of the meshtastic web client tool, may be different, but specific configurations, such as configuring LoRa frequency bands, can all be found in their corresponding configuration options. Therefore, if you do not have iOS, there is no need to worry; apps on other platforms will certainly have the corresponding configuration options.
:::

:::note
[Meshtastic Web Flasher](https://flasher.meshtastic.org/)and[Meshtastic Web Client](https://client.meshtastic.org/messages/broadcast/0), are two official web tools provided by Meshtastic. They are used to configure Mesh nodes and flash Mesh firmware, respectively. Please do not confuse them with each other.
:::

1.Ensure your XIAO esp32s3 Mesh node is connected to the computer via a USB cable. Open the [Meshtastic Web Client](https://client.meshtastic.org/messages/broadcast/0) and you will see the initial page. Now click "+ New Connection".

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_1.png" /></div>

2.Click "Serial", then click "New Device", and select the port for your Mesh node.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_2.png" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_3.png" /></div>

3.Enter the device configuration page; here, my device name is "Meshtastic ff28". 

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_4.png" /></div>

4.Click'Config' -> 'Radio config' -> 'LoRa'

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_5.png" /></div>

5.Set 'Region' and 'Modem Preset' to 'US' and 'Short Turbo' respectively:
:::note
Actually, there are no strict restrictions on the Region and Modem Preset configurations, but you must ensure that the Region and Modem Preset settings of the two Mesh node devices you have are consistent. In this document, we use 'US' and 'Short Turbo' as examples.
:::

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_6.png" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_7.png" /></div>

6.Now, let's go to 'Module Config' and select 'DetectionSensor'.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_11.png" /></div>

7.Enable this module, and then set the transmission interval to 15 seconds.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_12.png" /></div>

8.Friendly Name is set to 'Human', Monitor Pin is set to '3', and Detection Triggered Type is set to 'LOGIC_HIGH'.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_13.png" /></div>

9.Now, let's go to 'Channel Config' and select 'Ch1'.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_8.png" /></div>

10.Set 'Role' to 'SECONDARY' and select '128 bit' for Pre-Shared Key format. Then click 'Generate' to create a random 128-bit Pre-Shared Key. **Remember this Key, and save it to a text file for later use.** Also, set the Name to 'reCamera'.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_9.png" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_10.png" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_15.png" /></div>

11.Finally, click 'Save' to save the configuration. Wait for the device to save the configuration and then restart.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/2_2_14.png" /></div>

SjVzNWwzNTEwQWZUWlo0Yg==

### Wio Tracker L1(Meshtastic Node) Configuration
The configuration for Wio Tracker is simliar about, we still use[Meshtastic Web Flasher](https://flasher.meshtastic.org/)select 'Wio Tracker L1' and burn **Official Meshtastic Firmware** rather thant the custom firmware you downloaded about. Please refer to [Wio Tracker L1 Firmware Flashing Tutorial](https://wiki.seeedstudio.com/get_started_with_meshtastic_wio_tracker_l1/#part-2-firmware-flashing)

Same as above, we set the Region and Modem Preset to 'US' and 'Short Turbo' for Wio Tracker L1. Then, enable its Channel1 and set the Pre-Shared Key to the 128-bit Key you generated above.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/3_1_1.png" /></div>

### Assembly
Same as above, we connect GPIO490(Green wire) on reCamera to D2 on XIAO esp32s3. Then, the system will run.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/4_1_1.jpg" /></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/4_1_2.jpg" /></div>

When the connection is established, you will hear a sound from Wio Tracker L1, and the display on Wio Tracker L1 will show 'Human detected' text.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/4_1_3.jpg" /></div>

## Tech Support & Product Discussion

Thank you for choosing our products! If you need guidance on specific customization goals or want to extend the workflow further, feel free to reach out. We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>