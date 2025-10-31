---
description: Getting Started with reCamera
title: Quick Start Guide
keywords:
  - Edge
  - reCamera
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /recamera_getting_started
sidebar_position: 1
last_update:
  date: 02/15/2025
  author: Evelyn Chen
---

# reCamera Quick Start Guide

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" /></div>

Welcome to reCamera! This guide will help you quickly set up your device and start using it to unlock powerful AI-Vision features. Whether you're a beginner or an experienced user, this step-by-step walkthrough will guide you through the installation, configuration, and first use.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱</font></span></strong>
    </a>
</div>

# Product Series

There are 4 version of reCamera:

<table border="1">
    <tr>
        <th> </th>
        <th>reCamera 2002 8GB</th>
        <th>reCamera 2002 64GB</th>
        <th>reCamera 2002w 8GB</th>
        <th>reCamera 2002w 64GB</th>
    </tr>
    <tr>
        <td>Core Board</td>
        <td>Core 2002 8GB</td>
        <td>Core 2002 64GB</td>
        <td>Core 2002w 8GB</td>
        <td>Core 2002w 64GB</td>
    </tr>
    <tr>
        <td>Sensor Board</td>
        <td>S101(OV5647)</td>
        <td>S101(OV5647)</td>
        <td>S101(OV5647)</td>
        <td>S101(OV5647)</td>
    </tr>
    <tr>
        <td>Base Board</td>
        <td>B101</td>
        <td>B101</td>
        <td>B101</td>
        <td>B101</td>
    </tr>
    <tr>
        <td>Wireless(Wi-Fi/BT)</td>
        <td> </td>
        <td> </td>
        <td>✅</td>
        <td>✅</td>
    </tr>
    <tr>
        <td>Mounting Method</td>
        <td>Magnetic/Camera Bracket Mount</td>
        <td>Magnetic/Camera Bracket Mount</td>
        <td>Magnetic/Camera Bracket Mount</td>
        <td>Magnetic/Camera Bracket Mount</td>
    </tr>
    <tr>
        <td>Power Supply</td>
        <td>Type - C cable</td>
        <td>Type - C cable</td>
        <td>Type - C cable</td>
        <td>Type - C cable</td>
    </tr>
</table>

## Unboxing and Power On

Start by unpacking your reCamera. Inside the box, you should find:

- reCamera
- Type-C Cable
- Ethernet Cable

Make sure all parts are included.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/part_list.jpg" /></div>

Simply power on the device with the type-C cable provided. When you see the green light is on, that means the reCamera is ready to connect to the world.

## Network Connection

There are three methods to connect the reCamera to your network:

### Method 1: USB cable

**Wired Network Configuration via USB cable**

Connect the USB cable from reCamera to your PC, you can then visit ```192.168.42.1``` to view the loading page for reCamera.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/usbmode.png" /></div>

If you have reCamera with wireless function, we recommend to set up Wi-Fi connection. Only 2002w version will have the Wi-Fi Selection UI.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Wi-Fi_list.png" /></div>

If you encounter any problems, please view the [network troubleshoot](https://wiki.seeedstudio.com/recamera_network_connection/).

### Method 2: Ethernet

**Ethernet Port Network Configuration**

If you would like use ethernet port, you can use the cable in the box to connect to your router. Note, this is **not a POE (Power over Ethernet)**. You still need the type-c to power on the device. You can **unscrew the back** of the camera and connect through the port.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/IPmode.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/ethernet_cable.png" /></div>

Once connected, you can find the IP of reCamera on your router backend, then visit the website and Node-RED platform.

### Method 3: AP mode (only available with 2002w versions)

**Wireless Network Configuration in AP mode**

When power-on, reCamera will turn on the Access Point(AP) for you to change the network preference. Open your phone or laptop's Wi-Fi list, you should be able to see a Wi-Fi name called `reCamera_******`.
The naming system is ``"recamera_" + the last six digits of the mac address`` on this device.
Default password is `12345678`.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/laptop_wifi_list.png" /></div>

Connect to this AP, and a website should automatically pop out for you. If not, you can always type **192.168.16.1** in your browser to visit the page. Then you can select which wifi you want the reCamera to connect to.
If you have more than one reCamera, you can refer to the [Device Management](https://wiki.seeedstudio.com/recamera_getting_started/#multi-devices-management) to find out which one is which.

## Basic Webs Access

Once you have connected the reCamera to your network, you can visit the website interface for reCamera by accessing the ip adress in the browser.

- USB connection IP: 192.168.42.1
- Wi-Fi or Ethernet connection IP: Use `ifconfig` to find out or check with your router network management.

Web urls:

- **Home Page**: `ip_address/#/init`
- **Workspace**: `ip_address/#/workspace` (for os version 0.1.4 and above)
- **Network Configuration**: `ip_address/#/network`
- **Security**: `ip_address/#/security`
- **Terminal**: `ip_address/#/terminal`
- **System**: `ip_address/#/system`
- **Power**: `ip_address/#/power`
- **Original Node-RED**: ```ip_address:1880```

**Please check your device OS version**. There is a major upgrade between version 0.1.3 and 0.1.4. For smoother user-experience, we recommand upgrade to 0.1.5 and above. Please go to ```Sidebar -> System -> Software Update``` to check the software version, and apply and install the latest version of the OS. Update instruction please refer to [OTA upgrade guideline](https://wiki.seeedstudio.com/recamera_getting_started/#ota-upgrade-from-013-to-latest-version).

### OTA Upgrade from 0.1.3 to latest version

If you got the first batch of reCamera, you can upgrade the OS to the latest version following this instruction.

**Step 1**: Open the website and navigate to ```Sidebar -> System -> Software Update```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade1.png" /></div>

**Step 2**: Check your OS version, and click **Check** and **Apply**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade2.png" /></div>

**Step 3**: Wait for few minutes to update the system.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade3.png" /></div>

**Step 4**: Restart the device and refresh the website.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade4.png" /></div>

**Step 5**: You will enter the loading page to change the password.Now you can experience the newest version reCamera with Node-RED dashboard by following [this downloading instruction](https://wiki.seeedstudio.com/recamera_getting_started/#access-recamera-preview-dashboard).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/OSupgrade5.png" /></div>

### Access reCamera preview dashboard

By integrated device with Node-RED, We provided a build-in dashboard UI example where you can preview the video stream, change the desire models. You can freely twist and integrate with your own application.

If your OS version is 0.1.5 or above OS version, the preview dashboard would be shown once you login in.

If you upgrade the OS by yourself, you can download the dashboard jsonflow from Sensecraft AI

**Step 1**. After upgrade finished, access the web either by `192.168.42.1` or network IP, then click ```Download dashborad flow```

 <div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload1.png" /></div>

**Step 2**. Navigate to Sensecraft AI platform, select the first official Dashboard Demo and click ```Clone```. Login is needed for this website.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload2.png" /></div>

**Step 3**. Select the connection method for your device.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload3.png" /></div>

**Step 4**. Then the Node-RED workspace with the pre-built flow would be shown.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload4.png" /></div>

**Step 5**. Click ```Deploy``` and check the flow is start already, then click ```dashboard```, that dashboard would be shown.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload5.png" /></div>

Make sure to check the flow is started or not. Sometimes importing a flow will not automatically start the flow, thus dashboard will be empty. Please click `Start`  in the dropdown menu.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload6.png" /></div>

Succeed!
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload7.png" /></div>

**Step 6**. You can adjust the threshold of ```IoU``` and ```Confidence``` to get a more accurate result.

- IoU=0,Confidence=0:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard2.png" /></div>

- IoU=25,Confidence=33:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard3.png" /></div>

### Quick understanding to flow

In this example flow we built a demo of counting numbers of desired object such as Person, Cat, Dog, and Bottle with a **Counting Selection** drop down list.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard1.png" /></div>

By changing the `function nodes` in the flow, you are able to add more object to be counted, or completely change this function to some other computer vision applications.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/counting_demo.png" /></div>

You can view what kind of objects can be detected by viewing the `model node`.
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/model_list.png" /></div>

Feel free to twist and play with flow in any way you want. Just be careful **do not** put too many `debug nodes` or `preview nodes` after the model nodes, as printing out multiple result from AI model will comsume CPU and cause the device crashing.

### Computer Vision Model

For these provided workflow, `YOLO11n detection model` is selected by default, which is the latest computer vision model for real-time object detection model. You can also replace it with other models in the node. If you want to see what other models are available, you can refer to this [wiki](https://wiki.seeedstudio.com/recamera_on_device_models/).

**Intersection over Union (IoU)**: IoU is a metric used to evaluate the overlap between the predicted bounding box and the ground truth bounding box. It is calculated as the ratio of the intersection area of the two boxes to the union area of the two boxes. The value of IoU is typically in the range from 0 to 1. We standardized it to a scale of 0 - 100, an IoU value of 0 represents no overlap between the predicted box and the ground - truth box. A value of 100 indicates a perfect match, meaning the two boxes completely overlap.

**Confidence**: Confidence in the YOLO model represents the probability that a predicted bounding box contains an object and how accurate the prediction is. It is a value between 0 and 100.0

## Customized your dashboard and share to Community

We encourage users to share the dashboards they develop and create in the community. We have created a folder on [GitHub](https://github.com/Seeed-Studio/OSHW-reCamera-Series/tree/main/Node-RED_Flow/public_flow). We hope that everyone will share their dashboards there by **pull request**, and we will organize and display them.
Here we will take adding a fill light function to the dashboard as an example to simply add a node and control reCamera.

**Step 1**. Drag the ```button group``` node to the workspace. and edit it by the following setting.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard1.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard2.png" /></div>

**Step 2**. Add a new ui-group config node named "Control Button", then save it.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard3.png" /></div>

**Step 3**. Go to the dashboard 2.0, and place the control button frame under the model selection.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard4.png" /></div>

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard5.png" /></div>

**Step 4**. Deploy the flow and go to dashboard.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard6.png" /></div>

**Demo**:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard5.gif" /></div>

**Step 5**: Don't forget to export json file of the flow and share it to the our github.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/customizeddashboard7.png" /></div>

## Port List

The following lists the ports used by reCamera:

- **Port 22**: Utilized for remote SSH login and is open.
- **Port 53**: Associated with DNS domain name resolution and is essential for web redirection. It is open by default.
- **Port 80**: Serves as the web dashboard interface for HTTP display of the Node-RED Application.
- **Port 554**: Employed for RTSP video streaming.
- **Port 9090**: Intended for web terminal access, which requires a password for login.
- **Port 1880**: Dedicated to Node-RED operations.

## Factory Reset

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-12.png" /></div>

If you would like to reset the device such as forgetting your device's passcode, you can long pressing the **User** button and then connecting the  device to power. When the `red light` of the device is **constantly on** instead of blinking, release the User button.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/image-1.gif" /></div>

:::note
This will delete user information, including applications you have developed, or any local storage image and video. Please operate with caution.
:::

If you want to restore the firmware of your device to a specific version, please visit [os version control](https://wiki.seeedstudio.com/recamera_os_version_control)

## Multi Devices Management

If you have more than one reCamera, you can distinguish them by the **mac address** or **S/N number** on the back of the device.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/mac_address_tag.png" /></div>

Or, once you connect the device to your laptop through USB or AP, you can view the mac address by using the following command

```
ifconfig wlan0
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/last_six_digits.png" /></div>

## Camera Orientation

The default camera view orientation is like the image below where type-c is **facing down**. Please be awared that other orientation might effect the accuracy of model based on how you trained the detection model.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/default_orientation.jpeg" /></div>

## Resources

- [reCamera Flyer](https://files.seeedstudio.com/wiki/reCamera/reCamera_one_pager.pdf)

- [reCamera OS](https://github.com/Seeed-Studio/reCamera-OS)

- [reCamera Series](https://github.com/Seeed-Studio/OSHW-reCamera-Series)

- [reCamera SSCMA](https://github.com/Seeed-Studio/sscma-example-sg200x)

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
