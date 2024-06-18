---
description: Create a doc page with rich content.
title: Getting Started with SenseCAP Watcher
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /getting_started_with_watcher
last_update:
  date: 06/17/2024
  author: Citric
---

# Getting Started with SenseCAP Watcher

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/watcher">
            <strong><span><font color={'FFFFFF'} size={"4"}> Learn More 🖱️</font></span></strong>
    </a>
</div>

## Introduction

SenseCAP Watcher is an AI watcher to help you monitor anomaly within a space and then take actions, which is for spatial intelligence.
It has a playful name called "Nobody," signifying that it is a robot with no body.

By simply speaking out your command, it can assist in:

1. Monitoring a designated space;
2. Identifying and interacting with targets of your interest;
3. Spotting noteworthy matters and feeding data to form insights.

### Specification

<div class="table-center">
	<table align="center">
        <tr>
            <th>Hardware</th>
            <th>Description</th>
        </tr>
        <tr>
            <td align="center">MCU</td>
            <td align="center">ESP32-S3 @240MHz 8MB PSRAM</td>
        </tr>
        <tr>
            <td align="center">Built-in AI Processor</td>
            <td align="center">Himax HX6538 (Cortex M55 + Ethos-U55)</td>
        </tr>
        <tr>
            <td align="center">Camera</td>
            <td align="center">OV5647 120° FOV <br /> Fixed Focal 3 meters</td>
        </tr>
        <tr>
            <td align="center">Wi-Fi</td>
            <td align="center">IEEE 802.11b/g/n-compliant<br />2.4GHz Band<br />Wireless Range: Up to 100 meters (open space test)</td>
        </tr>
        <tr>
            <td align="center">Bluetooth LE</td>
            <td align="center">Bluetooth 5</td>
        </tr>
        <tr>
            <td align="center">Antenna</td>
            <td align="center">Built-in Wi-Fi and BLE antenna</td>
        </tr>
        <tr>
            <td align="center">Display</td>
            <td align="center">Touchscreen with 1.45-inch, 412×412 resolution</td>
        </tr>
        <tr>
            <td align="center">Microphone</td>
            <td align="center">Single microphone</td>
        </tr>
        <tr>
            <td align="center">Speaker</td>
            <td align="center">1W speaker output</td>
        </tr>
        <tr>
            <td align="center">Wheel</td>
            <td align="center">Supports scrolling up&down and button</td>
        </tr>
        <tr>
            <td align="center">LED</td>
            <td align="center">1xRGB light for indication</td>
        </tr>
        <tr>
            <td align="center">microSD Card Slot</td>
            <td align="center">Supports up to 32GB FAT32 microSD card</td>
        </tr>
        <tr>
            <td align="center">Flash</td>
            <td align="center">32MB Flash for ESP32-S3<br />16MB Flash for Himax HX6538</td>
        </tr>
        <tr>
            <td align="center">Extension Interface</td>
            <td align="center">1xGrove IIC interface<br />2x4 Female header(1xIIC, 2xGPIO, 2xGND, 1x3.3V_OUT, 1x5V_IN)</td>
        </tr>
        <tr>
            <td align="center">USB-C</td>
            <td align="center">1x USB-C on the back(power supply only)<br />1x USB-C on the bottom(power supply and programming)</td>
        </tr>
        <tr>
            <td align="center">Reset Button</td>
            <td align="center">1xRST button in the bottom hole</td>
        </tr>
        <tr>
            <td align="center">Power Supply</td>
            <td align="center">5V DC power</td>
        </tr>
        <tr>
            <td align="center">Battery</td>
            <td align="center">3.7V 400mAh Li-ion battery as backup power</td>
        </tr>
        <tr>
            <td align="center">Operating Temperature</td>
            <td align="center">0 ~ 45°C</td>
        </tr>
        <tr>
            <td align="center">Mounting Bracket</td>
            <td align="center">Supports wall, desktop and bracket installation<br />1 x Universal wheel and base plate with adhesive<br />1 x 1/4" Female adapter set</td>
        </tr>
    </table>
</div>

### Features

- 
- 
- 

## Hardware Overview

Before everything starts, it is quite essential to have some basic parameters of the product. The following table provides information about the characteristics of SenseCAP Watcher.

### Front View

### Back View

### Inside

### Mounting Interface

## Operation Guidelines

This section of the Wiki provides a comprehensive guide on how to power on the Watcher, navigate through its menu pages, and understand its operational logic. By following these instructions, you will be able to effectively utilize the Watcher's features and functionalities.

### Power On

To power on your Watcher device, press and hold the wheel button located on the upper right corner for approximately 3 seconds until the Seeed Studio logo appears on the screen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/power_on.gif" style={{width:700, height:'auto'}}/></div>

Once the logo is displayed, release the button and allow the device to complete its initialization process. After a few moments, the Watcher will display its main menu, indicating that it is ready for use. If the device won't turn on with a long press, the device may be low on power and you may need to connect a cable to power it up before you can wake up the Watcher.

### Power Off

To power off the Watcher, you need to access the Setting menu. Using the wheel button, navigate to the Setting option and press the button to enter the menu. Once inside, scroll down to the Shutdown option and press the wheel button to select it. Finally, swipe the slider from left to right to confirm the shutdown process, and the Watcher will power off.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/power_off.gif" style={{width:700, height:'auto'}}/></div>

:::tip
If your Watcher is connected to a power cord, the device's Shutdown button becomes a Reboot button, at which point the device is not allowed to shut down. Similarly, a device that is switched off will automatically switch on when the power cord is connected.
:::

### Hardware Reset


### Operating logic

The Watcher's operational logic revolves around the wheel button, which serves as the primary means of navigation and selection. Rotating the wheel button counterclockwise allows you to move up or left within menus, 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/down_or_right.gif" style={{width:700, height:'auto'}}/></div>

while rotating it clockwise enables you to move down or right.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/up_or_left.gif" style={{width:700, height:'auto'}}/></div>

To confirm a selection or enter a submenu, simply press the wheel button.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/enter.gif" style={{width:700, height:'auto'}}/></div>

However, it's important to note that in certain situations where there may be potential for operational ambiguity, the wheel button's selection and confirmation logic may deviate from this standard. In such cases, the touch screen interface provides an alternative means of interaction, allowing you to complete the desired action by tapping on the appropriate on-screen elements.

Throughout the Wiki, specific instructions will be provided for navigating and selecting options within each menu, taking into account any exceptions to the general wheel button logic. By familiarizing yourself with both the wheel button and touch screen controls, you'll be able to efficiently operate your Watcher device and access its various features and settings.

加一个触摸屏幕的gif

### Menu Overview

The Watcher offers four main menu options: **Task Templates**, **Current Task**, **Extension**, and **Setting**. These menus provide access to various features and functions of the device.

The Task Templates menu contains a selection of pre-configured tasks that are ready for use. These tasks include human detection, pet detection, and gesture detection. By choosing one of these templates, you can quickly set up the Watcher to perform the desired task without the need for extensive configuration.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task_templates.gif" style={{width:700, height:'auto'}}/></div>

The Current Task menu option provides a convenient way to access and manage the actively running task on the Watcher. If you need to navigate away from the current task to adjust device settings like volume, brightness, or LED light switch, you can easily return to your task by selecting the Current Task option from the main menu, ensuring a seamless and efficient user experience.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/current_task.gif" style={{width:700, height:'auto'}}/></div>

The Extension menu is a placeholder for future expandability. As the Watcher continues to evolve, this menu will serve as a gateway to additional features and functionalities that will be made available to users. Keep an eye out for updates and announcements regarding the Extension menu, as it may offer exciting new capabilities for your device.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/extension.gif" style={{width:700, height:'auto'}}/></div>

Lastly, the Setting menu is where you can access and modify the general settings of the Watcher. This menu provides options for customizing various aspects of the device, such as display brightness, sound volume, connectivity settings, and more. By exploring the Setting menu, you can tailor the Watcher's performance and behavior to your preferences, ensuring a personalized user experience.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/settings.gif" style={{width:700, height:'auto'}}/></div>


## Device Binding and OTA Upgrade





## Run - Task Templates

To run a task from the Task Templates on your Watcher, follow these steps:

1. From the main menu, use the wheel button to navigate to the "Task Templates" option.
2. Press the wheel button to enter the Task Templates submenu.
3. Scroll through the available task templates using the wheel button until you find the desired model task.
4. Press the wheel button to select and start running the chosen task.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/run_template.gif" style={{width:700, height:'auto'}}/></div>

Once the task begins, the Watcher will display an animated emoji face on the screen. This emoji indicates that the device is actively monitoring for the target object specified by the selected task template.

When the Watcher detects the target object, the display will switch from the emoji animation to a real-time view of the detected object. This allows you to see what the Watcher has identified.

If the target object moves out of the Watcher's view or is no longer detected, the display will automatically return to the animated emoji face, signifying that the device is still monitoring for the target.

To end a running task:
1. Tap the screen once or press the wheel button.
2. A confirmation prompt will appear, asking if you want to end the current task.
3. Confirm your choice to stop the task and return to the main menu.

Task Templates:

1. Human Detection:
   - This task template is designed to detect the presence of human beings.
   - When the Watcher identifies a person, it will trigger an alarm notification.

2. Pet Detection:
   - The Pet Detection task template focuses on recognizing cats or dogs.
   - If the Watcher detects a cat or dog, it will trigger an alarm notification.

3. Gesture Detection:
   - This task template is configured to identify the "paper" hand gesture.
   - When the Watcher recognizes the paper gesture, it will trigger an alarm notification.

Each of these task templates has specific alarm triggering conditions based on the detection of their respective targets: humans, cats, or the paper gesture. By using these templates, you can quickly set up the Watcher to monitor for the desired object without the need for extensive configuration.


## Run - App Task






## Setting

This guide will walk you through the various settings options available on your Watcher device and explain their functions.

1. Connect App:
   - The Connect App setting allows you to establish a connection between your Watcher and a companion mobile application.
   - By connecting your Watcher to the app, you can access additional features, remote control capabilities, and receive notifications on your mobile device.

2. Wi-Fi:
   - The Wi-Fi setting on the Watcher device displays information about the currently connected wireless network.
   - If no network has been configured, the Wi-Fi setting will not display any information.
   - Please note that configuring Wi-Fi networks can only be done through the companion mobile app and is not supported on the Watcher device itself.

3. Bluetooth:
   - The Bluetooth setting allows you to toggle the Bluetooth functionality on or off.

4. Sound:
   - The Sound setting lets you adjust the volume of your Watcher's audio output.
   - You can increase or decrease the volume to suit your preferences or environment.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/sound_setting.gif" style={{width:700, height:'auto'}}/></div>

5. Brightness:
   - The Brightness setting allows you to control the brightness level of your Watcher's display.
   - Adjusting the brightness can help improve visibility in different lighting conditions and conserve battery life.

6. RGB Light:
   - The RGB Light setting is a toggle switch that allows you to turn the LED indicator light on or off.

7. About Device:
   - The About Device section provides important information about your Watcher, such as the model number, firmware version, and serial number.
   - This information can be helpful when troubleshooting issues or checking for available updates.

8. Shutdown/Reboot:
   - The Shutdown/Reboot setting allows you to restart or power off your Watcher device, depending on the power source.
   - When the Watcher is connected to a power source, the "Reboot" option will be displayed, allowing you to restart the device. Shutting down is not allowed while connected to power.
   - When the Watcher is running on battery power, the "Shutdown" option will be available, enabling you to power off the device.

9. Factory Reset:
   - The Factory Reset option restores your Watcher to its original factory settings.
   - This action will erase all user data, preferences, and configurations, returning the device to its default state.
   - Use this option with caution, as it cannot be undone, and you will need to set up your Watcher again after a factory reset.

By familiarizing yourself with these settings options, you can customize and optimize your Watcher experience to best suit your needs. Keep in mind that certain settings, such as Wi-Fi and Bluetooth configuration, can only be accessed and modified through the companion mobile app.






## Resources

**[Watcher Quick Start Series 1# : Concepts and Classification of Tasks](/sensecap_watcher_getting_started)**

**[Watcher Quick Start Series 2# : Creating and Updating Watcher Emojis](/sensecap_watcher_getting_started)**

**[Watcher Quick Start Series 3# : What does Watcher do](/sensecap_watcher_getting_started)**

**[Watcher Quick Start Series 4# : As a Grove sensor](/sensecap_watcher_getting_started)**

**[Watcher Quick Start Series 5# : Training a model for Watcher](/sensecap_watcher_getting_started)**


## Troubleshooting

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


