---
description: reTerminal and Pi camera modules intergration 
title: reTerminal and Pi camera modules
keywords:
  - Edge
  - reTerminal 
  - piCamera
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal-piCam
last_update:
  date: 5/17/2023
  author: Kasun Thushara
---
# reTerminal and Pi camera modules
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/cam_images.jpg" alt="pir" width="600" height="auto"/></p>

The Raspberry Pi Camera, commonly referred to as PiCam, is a camera module specifically designed for the Raspberry Pi single-board computers. It offers a compact and convenient solution for capturing images and recording videos directly from your Raspberry Pi device.

Here are the specifications for each version of the PiCam:

**PiCam v1 (Camera Module v1.3):**

- Sensor: OmniVision OV5647
- Resolution: 5 megapixels
- Video Modes: 1080p30, 720p60, 640x480p60/90

**PiCam v2 (Camera Module v2):**
- Sensor: Sony IMX219
- Resolution: 8 megapixels (3280 x 2464 pixels)
- Video Modes: 1080p30, 720p60, 640x480p90


**PiCam v3 (Camera Module 3):**
- Sensor: Sony IMX708
- Resolution: 12 megapixels (4056 x 3040 pixels)
- Video Modes: 1080p30, 720p60, 640x480p90

| Raspberry Pi Camera Module V1|Raspberry Pi Camera Module V2| Raspberry Pi Camera Module 3 |
|----------|---------------------|--------------|
|![enter image description here](https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/ReTerminal/Picam/pi_cam3.jpg)|
|[BUY ONE NOW!](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-p-1659.html?queryID=9e37f656a0eb0086c424e93bcfffadf4&objectID=1242&indexName=bazaar_retailer_products)|[BUY ONE NOW!](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html)|[BUY ONE NOW!](https://www.seeedstudio.com/Raspberry-Pi-Camera-3-p-5574.html?queryID=11243e5e9f95c4f4f0716b229dd8dcf0&objectID=5574&indexName=bazaar_retailer_products)|

|Raspberry Pi Camera Module 3 Wide NoIR | Raspberry Pi Camera Module 3 NoIR | Raspberry Pi Camera Module 3 Wide |
|----------|---------------------|--------------|
|![enter image description here](https://files.seeedstudio.com/wiki/ReTerminal/Picam/picamWN.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/ReTerminal/Picam/picamnoir.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam3w.jpg)|
|[BUY ONE NOW!](https://www.seeedstudio.com/Raspberry-Pi-Camera-3-Wide-NoIR-p-5577.html?queryID=f7e448b5e2e91156540a55c164fe9806&objectID=5577&indexName=bazaar_retailer_products)|[BUY ONE NOW!](https://www.seeedstudio.com/Raspberry-Pi-Camera-3-NoIR-p-5575.html?queryID=580ed0215d20c7d125b592090e007ba6&objectID=5575&indexName=bazaar_retailer_products)|[BUY ONE NOW!](https://www.seeedstudio.com/Raspberry-Pi-Camera-3-Wide-p-5576.html?queryID=b165ed9d2e2ff82f45003dbb7c921182&objectID=5576&indexName=bazaar_retailer_products)|

All versions of the PiCam connect to the Raspberry Pi via the MIPI CSI-2 interface, providing a direct and high-speed connection for transmitting image and video data.

The PiCam offers a range of features and capabilities that make it suitable for various applications, **including photography, videography, computer vision projects, surveillance, and more**. Its small form factor and easy integration with the Raspberry Pi make it a popular choice among hobbyists, makers, and professionals.

Note that the specifications mentioned above are for the standard PiCam modules, and there may be variations or alternative camera modules available from third-party manufacturers.

When it comes to installing the PiCam, you have two options. The first option is to use pre-built images provided by Seeed Studio, which can be found on our wiki page. These pre-built images are specifically configured for the PiCam, ensuring compatibility and ease of use. However, please note that these images only work with PiCam v1 (OmniVision OV5647 sensor).

Alternatively, you can choose to install the latest version of the Raspberry Pi OS from the official website. By doing so, you'll have access to the most recent features and improvements. Seeed Studio recommends this approach and provides instructions on our wiki page for installing the necessary drivers and related components to ensure proper functionality of the PiCam on the fresh Raspberry Pi OS installation.

## Using pre-built raspberry pi Images.

To install the PiCam for Seeed Studio reTerminal, you have the option of using pre-built images provided by Seeed Studio. These images are available on our wiki page and are specifically designed for the reTerminal.

:::note

It's important to note that the pre-built images currently support **only the PiCam v1, which utilizes the OmniVision OV5647 sensor**. This means you can capture images or record videos using the `raspistill` command.

:::



- **Step 1** Visit the Seeed Studio wiki page dedicated to reTerminal and navigate to the section providing the pre-built images.( you can refer this link to get images and acknowledge installation procedure. if you have already done please skip this step. [This Link](https://wiki.seeedstudio.com/reTerminal-FAQ/#q2-how-can-i-flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal))
- **Step 2** 	Power off the reTerminal and connect the PiCam v1 module to the camera interface on the reTerminal. Ensure it is securely attached.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/reterminal_inside.png" alt="pir" width="600" height="auto"/></p>

- **Step 3** Assemble the reTerminal and boot the reTerminal. Go to reTerminal icon which you can find in the desktop and enable camera and reboot. 

- **Step 4** Open a terminal or SSH into the reTerminal to access the command line interface. 
- **Step 5** Use the `raspistill` command to capture images. You can visit this site for more commands. [Link](https://projects.raspberrypi.org/en/projects/getting-started-with-picamera/3)
```sh
raspistill -o Desktop/image.jpg
``` 
## For fresh raspberry pi OS 

We recommend Raspbian Bullseye 64-bit fresh image from raspberry pi official web-site for Seeed Studio reTerminal:
- **Step 1** Seeed Studio provides detailed instructions on how to install the drivers after flashing a new Raspberry Pi OS or other OS. Refer to the Seeed Studio wiki page for reTerminal and follow the instructions provided in the ["Flash new Raspberry Pi OS" ](https://wiki.seeedstudio.com/reTerminal#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc) section and ["How to install reTerminal drivers"](https://wiki.seeedstudio.com/reTerminal/#install-reterminal-drivers-after-flashing-new-raspberry-pi-os-ubuntu-os-or-other-os) section If you already have done please skip this step.

- **Step 2** Power off the reTerminal and connect the PiCam module to the camera interface on the reTerminal. Ensure it is securely attached.

- **Step 3** Open a terminal or SSH into your reTerminal and execute the following command to edit the config.txt file:

```sh
sudo nano /boot/config.txt 
``` 
- **Step 4** Within the config.txt file, you need to make specific changes to enable the PiCam. Follow these steps:

    - Locate the line camera_auto_detect=1 and comment it out by adding a "#" at the beginning of the line. This step is necessary to disable the auto-detection of the camera module.

    - Add the following lines to the config.txt file:
        - dtoverlay=ov5647,cam0 
        - dtoverlay=camera-mux-2port 

            
:::note

If you are using PiCam v3 NoIR wide instead of PiCam v1, use **dtoverlay=imx708,cam0** instead of **dtoverlay=ov5647,cam0**. The dtoverlay configuration specifies the camera module being used and the camera multiplexer.

:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/muxcam.PNG" alt="pir" width="600" height="auto"/></p>

- **Step 5** : Save the changes made to the config.txt file by pressing Ctrl + X, followed by Y, and then Enter to confirm. Finally, reboot the reTerminal to apply the modifications:

```sh
sudo reboot
``` 
 After the reboot, the PiCam should be configured and ready to use with your Seeed Studio reTerminal. You can now proceed with capturing images or recording videos using the libcamera.

 - **Step 6** :Open the terminal and write following code to test everything is work. 

```sh
sudo libcamera-hello
``` 
libcamera-hello is the equivalent of a "hello world" application for the camera. It starts the camera, displays a preview window, and does nothing else.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Picam/imx708.PNG" alt="pir" width="600" height="auto"/></p>

you can refer the following documents for more details about [libcamera](https://www.raspberrypi.com/documentation/computers/camera_software.html ) 








