---
description: Getting Started with reCamera Gimbal
title: Getting Started
keywords:
  - AI
  - reCamera
  - Gimbal
image: https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.webp
slug: /recamera_gimbal_getting_started
sidebar_position: 1
last_update:
  date: 02/27/2025
  author: Parker Hu
---

# Getting Started with reCamera Gimbal

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" /></div>

## Introduction

The reCamera gimbal 2002 series is the first open-source camera control system, composed of one tiny AI camera - reCamera 2002w 8GB/64GB, and one compatible 2-Axis gimbal basement with 2 brushless motors. It is powered by an RISC-V SoC, providing 1 TOPS AI performance with video encoding at 5MP @ 30 FPS. It offers a Lego-like self-assembly package and integrates the Sensecraft AI platform and Node-RED platform for smooth graphical programming and pipeline construction, enabling rapid self-training, model conversion, and deployment of AI models such as Yolo v5/v8/11.


## Unboxing

Start by unpacking your reCamera Gimbal. Inside the box, you should find:

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_Partlist.png" /></div>

Make sure all parts are included.

### Hardware Assembly

Assemble the reCamea Gimbal according to the assembly instructions on Box or [User manual](https://files.seeedstudio.com/gimbal/GIMBAL_Manual0206.pdf).

:::note
Please make sure all screws are tightened, otherwise it will affect the operation of the motor.
:::


### Setup device and login

**Step1:** After assembling the Gimbal, connect the reCamera Gimbal via XT30 to DC jack cable to 12-19V power adapter, and connect the usb cable between your pc and device. Navigate to `192.168.42.1` on website and change the default password. 

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_1.png" /></div>

:::note
Please remember your password, otherwise all logs will be erased to reset your device. Please [factory reset](https://wiki.seeedstudio.com/recamera_getting_started/#factory-reset) your device, if you forget the password.
:::

**Step2:** Here you'll be taken to the Gimbal Preview Dashboard. Click the button at the bottom right to take you to the workspace.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_2.png" /></div>

**Step3:** If you log in for the first time, you'll be introduced to Node-RED 4.0, keep clicking `Next` or log out.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_3.png" /></div>

**Step4:** Then configure the network and connect to Wi-Fi.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_4.png" /></div>

**Step5:**  Click on the network you are connecting to and remember the IP address of the network you are connecting to.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_5.png" /></div>

**Step6:**  Then you can disconnect the USB connection and remove the USB cable, which will impede the motor operation. And access the `IP address` on website just after power on. 

:::note

It should be connected the power adapter with voltage range between 12~24V.

:::

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_6.jpg" /></div>

**Step7:** Once power on the device, it will automatically calibrate the motors. 

:::note

During automatic calibration, avoid interfering with the device's operation as this could result in calibration failure.

:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_preview.png" /></div>

## Basic Web Access

Web urls:

- **Preview Page**: `ip_address/#/dashboard`

- **Home Page**: `ip_address/#/init`
- **Workspace**: `ip_address/#/workspace`
- **Network Configuration**: `ip_address/#/network`
- **Security**: `ip_address/#/security`
- **Terminal**: `ip_address/#/terminal`
- **System**: `ip_address/#/system`
- **Power**: `ip_address/#/power`
- **Original Node-RED**: `ip_address:1880`

### OTA OS upgrade
Please refer to the [OTA Upgrade Instruction](https://wiki.seeedstudio.com/recamera_getting_started/#ota-upgrade-from-013-to-latest-version).

### Quick Start with Gimbal flow:

Visit this address to access Gimbal's preview screen: `ip_address/#/dashboard`

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_preview.png" /></div>

#### Parameters
**Yaw Abosilute Angle**(Left and right): The absolute angle of the yaw axis, which is the angle of rotation around the yaw axis. The range of this value is from 0 to 360 degrees for absolute position.

Example: parsing in `180` to the `Yaw Axis Absolute Position`, the motor will rotate to 180 degrees. 

**Pitch Abosilute Angle**(up and down): The absolute angle of the pitch axis, which is the angle of rotation around the pitch axis. The range of this value is from 0 to 180 degrees for absolute position.

Example: parsing in `5` to the `Pitch Axis Absolute Position`, the motor will rotate to 5 degrees.

**Motor Speed**: The speed of the motor. The range of this value is from 0 to 65535 dps/LSB.

Example: parsing in `100` to the `Pitch Axis Speed Setpoint`, means that the yaw axis speed will be set to `10000 dps/LSB`.

:::note
Please do not set the motor to extreme values such as 0, 180, or 360. Prolonged stay at these angles may cause damage to the motor.
:::

**Confidence**: Confidence in the YOLO model represents the probability that a predicted bounding box contains an object and how accurate the prediction is. It is a value between 0 and 100.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_confidence.png" /></div>


**Intersection over Union (IoU)**: IoU is a metric used to evaluate the overlap between the predicted bounding box and the ground truth bounding box. It is calculated as the ratio of the intersection area of the two boxes to the union area of the two boxes. The value of IoU is typically in the range from 0 to 1. We standardized it to a scale of 0 - 100, an IoU value of 0 represents no overlap between the predicted box and the ground - truth box. A value of 100 indicates a perfect match, meaning the two boxes completely overlap.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_iou.png" /></div>

#### Manual Control

Yaw axis slider is used to control the left and right movement of the motor; Pitch axis slider is used to control the pitch motor moving up and down; The Speed axis slider is used to control the movement speed of the motor.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_manual_control.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_manual_control2.png" /></div>

#### Target Track

Select the object to be tracked, click `Start Tracking` to start Tracking the identified object, and click `Stop Tracking` to stop tracking the object.

:::note

This function is currently being optimized and will be updated in the next OS version.

:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_tarck.png" /></div>

#### Shortcut Button

Click the `Sleep` button to set the yaw motor angle as 180 degrees and the pitch motor angle as 175 degrees, then will exit the camera recording mode.

:::note

The Sleep button does not put the device into a low-power sleep state.

:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_sleep.png" /></div>

Click the `Standby` button to set the yaw motor angle as 180 degrees and the pitch motor angle as 90 degrees. This value is the middle value of the Yaw axis and Pitch axis of the Gimbal.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_standby.png" /></div>



### Quick start with Gimbal Node

Visit this address to access Gimbal's Node-RED workspace : `ip_address/#/workspace`

You would be asked to login sensecraft account and click the `+` icon sign to add a new application. Then you can start working on your flow.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_7.png" /></div>

#### Node Modules

Gimbal adds four new modules over the default reCamera:

- CAN read : Send out all the input data from CANBus.
- CAN write: Write data frame to CANBus.
- CAN response：Read the response of the specified CAN request frame in CAN response node.
- Motor Config：Set the control command of the Gimbal motor.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_8.png" /></div>

You can copy and import the jsonflow below to test the preliminary control of the yaw-pitch motor.

The first input can control the motor to rotate to 90 degrees. The second input can increase the motor angle by 5 degrees. And the third input can control the motor operation speed.

```json
[{"id":"90baeaed20766129","type":"tab","label":"Flow 1","disabled":false,"info":"","env":[]},{"id":"3594e777fcc5b427","type":"motor-config","z":"90baeaed20766129","name":"","input":"payload","input-type":"msg","output":"0","outputs":1,"x":290,"y":160,"wires":[["0feecb3a12148d2e"]]},{"id":"0feecb3a12148d2e","type":"can-response","z":"90baeaed20766129","name":"","client":"cee3b964b8e66e49","x":480,"y":160,"wires":[["71115d1a5921fa8d"]]},{"id":"184c323b8bcfde15","type":"inject","z":"90baeaed20766129","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"90","payloadType":"num","x":110,"y":160,"wires":[["3594e777fcc5b427"]]},{"id":"71115d1a5921fa8d","type":"debug","z":"90baeaed20766129","name":"debug 1","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","statusVal":"","statusType":"auto","x":680,"y":160,"wires":[]},{"id":"a375a76518432903","type":"motor-config","z":"90baeaed20766129","name":"","input":"payload","input-type":"msg","output":"1","outputs":1,"x":290,"y":240,"wires":[["76f0f22a496a619e"]]},{"id":"76f0f22a496a619e","type":"can-response","z":"90baeaed20766129","name":"","client":"cee3b964b8e66e49","x":480,"y":240,"wires":[["e110ae6b3b6169de"]]},{"id":"e110ae6b3b6169de","type":"debug","z":"90baeaed20766129","name":"debug 2","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","statusVal":"","statusType":"auto","x":680,"y":240,"wires":[]},{"id":"c6cfc31c419ed9d0","type":"motor-config","z":"90baeaed20766129","name":"","input":"payload","input-type":"msg","output":"2","outputs":0,"x":290,"y":300,"wires":[]},{"id":"9025c238e9b8c14b","type":"inject","z":"90baeaed20766129","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"5","payloadType":"num","x":110,"y":240,"wires":[["a375a76518432903"]]},{"id":"07b201c6f852db04","type":"inject","z":"90baeaed20766129","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"180","payloadType":"num","x":110,"y":300,"wires":[["c6cfc31c419ed9d0"]]},{"id":"cee3b964b8e66e49","type":"can-config","name":"","baud":"1000000","interface":"can0"}]
```

#### Motor Config

In the Input Node, enter payload and below that, select the configuration you want to control the motor.

The input value of this module is digital, and the output is the CAN protocol control command frame of the motor.

The outlet CAN access `CAN write` or `CAN response` to execute control instructions.

More instructions on motor control can be found in this [document](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/reCamera_Gimbal/MotorTools/CN/通讯协议/瓴控电机CAN协议说明 V2.36.pdf).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_9.png" /></div>

#### CAN response

Click the plus icon to configure the CANBus interface as `can0` and `Baud rate` as 1000k bps.

The configuration of `CAN write` and `CAN read` is the same as that of this module.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_10.png" /></div>

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_11.png" /></div>

The communication mode of the CAN protocol is request-response, and the CAN response will return the reply frame of the command you sent. After the CAN response, access the debug module to view the content of the reply frame.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_12.png" /></div>

CAN write and CAN read are the write and read operations to CAN bus data.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_13.png" /></div>

## Port List

The following lists the ports used by reCamera Gimbal:

- **Port 22**: Utilized for remote SSH login and is open.
- **Port 53**: Associated with DNS domain name resolution and is essential for web redirection. It is open by default.
- **Port 80**: Serves as the web dashboard interface for HTTP display of the Node-RED Application.
- **Port 554**: Employed for RTSP video streaming.
- **Port 9090**: Intended for web terminal access, which requires a password for login.
- **Port 1880**: Dedicated to Node-RED operations.




## Apply cloud management and backup

You can view and manage your apps [reCamera - SenseCraft AI](https://sensecraft.seeed.cc/ai/#/recamera).

:::note

You need to register an account before you can login through the platform to sync your applications.

:::

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/Gimbal_14.png" /></div> 


## Resources

- [reCamera Gimbal User Manual](https://files.seeedstudio.com/gimbal/GIMBAL_Manual0206.pdf)

- [Github](https://github.com/Seeed-Studio/OSHW-reCamera-Series)



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
