---
description: SenseCAP Watcher is an AI watcher to help you monitor anomalies within a space and then take actions. Simply speak to Watcher to give commands, and it will execute your desired tasks when the event occurs.
title: Getting Started with Watcher
image: https://files.seeedstudio.com/wiki/watcher_getting_started/0.JPG
slug: /getting_started_with_watcher
sidebar_position: 1
last_update:
  date: 09/14/2024
  author: Citric, Djair
---

# Getting Started with SenseCAP Watcher

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcherKS.jpg" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now</font></span></strong>
    </a>
</div>

## Introduction

SenseCAP Watcher is an AI watcher to help you monitor anomalies within a space and then take actions. Simply speak to Watcher to give commands, and it will execute your desired tasks when the event occurs. 

As a new comer for smart building / smart home system, SenseCAP Watcher is far more intelligent compared to current sensors and actuators. It understands what is happening within the space and then takes actions accordingly.


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

- High efficiency architecture with on-device + server AI processing
- Extensive with Infinite Modal 
- Ensuring Privacy with Open Source and On-Premise Deployment 
- Customizable Emotional Responses


## Hardware Overview

Before everything starts, it is quite essential to have some basic parameters of the product. The following table provides information about the characteristics of SenseCAP Watcher.

### Front View

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/hardware-1.png" style={{width:1000, height:'auto'}}/></div>

### Back View

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/hardware-2.png" style={{width:1000, height:'auto'}}/></div>

### Inside

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/hardware-3.png" style={{width:1000, height:'auto'}}/></div>

### Mounting Interface

On the back of your Watcher device, you will find a Mounting Bracket that allows you to securely attach the device to various surfaces or accessories. Currently, we offer two types of mounting brackets to accommodate different placement needs:

:::tip
Please note that the Watcher body does not come with any of the stands below, so if you need a stand, please purchase it separately.
:::

- **360° Rotate Bracket**

   - This bracket is designed for easy installation on walls or other vertical surfaces.
   - It provides a full 360 degrees of rotation, allowing you to adjust the orientation of your Watcher device to achieve the desired viewing angle.
   - The rotate bracket offers flexibility in positioning and ensures a secure attachment to the wall.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/omni_wheel_bracket.gif" style={{width:650, height:'auto'}}/></div><br />

- **1/4 Thread Tripod Bracket**

   - This bracket is ideal for placing your Watcher on flat surfaces such as desks, tables, or shelves.
   - It features a standard 1/4-inch thread, making it compatible with most tripods and other mounting accessories.
   - The tripod bracket provides stability and allows you to position your Watcher at various heights and angles, depending on your specific needs.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/threaded_bracket.gif" style={{width:650, height:'auto'}}/></div><br />

To use either of these mounting brackets, follow these general steps:

1. Choose the appropriate bracket based on your intended placement location (wall or flat surface).

2. Attach the selected bracket to the Mounting Bracket on the back of your Watcher device. Ensure a secure connection to prevent any accidental detachment.

3. For the 360° Rotate Bracket:
   - Identify the desired location on the wall where you want to install your Watcher.
   - Use the provided screws and anchors (if necessary) to securely attach the bracket to the wall.
   - Adjust the orientation of your Watcher by rotating it to the desired angle.

4. For the 1/4 Thread Tripod Bracket:
   - Select a stable flat surface where you want to place your Watcher.
   - If using a tripod, attach the tripod to the bracket using the 1/4-inch thread.
   - Adjust the height and angle of the tripod to achieve the optimal viewing position for your Watcher.

5. Once your Watcher is securely mounted using either bracket, you can proceed to connect it to power and configure it according to your preferences.

By offering these two mounting bracket options, we aim to provide flexibility and convenience in integrating your Watcher device into various environments. Whether you prefer a wall-mounted setup or a desk-friendly arrangement, our brackets ensure a secure and adjustable installation.

:::tip
Please note that the Watcher body does not come with any of the stands below, so if you need a stand, please purchase it separately.
:::

### Hardware Diagram

Continuing with the hardware architecture of the Watcher, let's dive into the details provided in the diagram.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/Diagram.png" style={{width:1000, height:'auto'}}/></div>

The heart of the Watcher is the Main MCU, which is an **ESP32-S3** chip. This powerful microcontroller operates at 240MHz and comes with 8MB of PSRAM for efficient processing and memory management.

The ESP32-S3 communicates with various peripherals and interfaces:

1. **Display**: It connects to a **1.45-inch 412*412** LCD Touch Screen via the SPI/I2C interface, allowing for intuitive user interaction and vibrant visual output.

2. **Audio**: The I2S interface enables the ESP32-S3 to communicate with a speaker and a microphone, facilitating audio input and output capabilities.

3. **Storage**: The Watcher is equipped with a Flash 32M module, connected via the SPI interface, providing ample storage for firmware, data, and user files.

4. **Wireless Connectivity**: The ESP32-S3 integrates Wi-Fi and BLE functionality, enabling seamless wireless communication with other devices and networks.

5. **Expandability**: An Expansion Port, connected via the I2C interface, allows for future hardware additions and customization.

6. **User Input**: A Dial Wheel, connected via GPIO/PWM, offers an intuitive way for users to navigate and control the Watcher's functions.

7. **External Storage**: A Micro SD Card slot, interfaced via SPI, enables users to extend the storage capacity of the Watcher for additional data and media files.

8. **Power and Data**: A USB port is available for charging the 400mAh battery and transferring data between the Watcher and other devices.

The AI MCU, a Himax HX6538 chip with Cortex M55 and US5 cores, works alongside the Main MCU to handle AI-related tasks and computations, enhancing the Watcher's intelligent capabilities.

Lastly, the Watcher features a Camera OV5647 module, likely connected via the MIPI interface, enabling computer vision applications and visual sensing.

This comprehensive hardware architecture allows the Watcher to deliver a feature-rich and versatile user experience, combining display, audio, wireless connectivity, storage, and AI capabilities in a compact and efficient design.

## Operation Guidelines

This section of the Wiki provides a comprehensive guide on how to power on the Watcher, navigate through its menu pages, and understand its operational logic. By following these instructions, you will be able to effectively utilize the Watcher's features and functionalities.

### Installation Packaging

The Watcher comes with a unique packaging that doubles as a stylish, calendar-like stand. By placing the Watcher inside this stand, you can create an attractive decoration for your home. Follow the step-by-step instructions below and refer to the accompanying video for a visual guide on how to install your Watcher in its stand.

<div class="table-center">
<iframe width="760" height="415" src="https://files.seeedstudio.com/wiki/watcher_getting_started/watcher-packaging.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

### Power On

To power on your Watcher device, press and hold the wheel button located on the upper right corner for approximately 3 seconds until the Seeed Studio logo appears on the screen.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/power_on.gif" style={{width:650, height:'auto'}}/></div>

<br />

Once the logo is displayed, release the button and allow the device to complete its initialization process. After a few moments, the Watcher will display its main menu, indicating that it is ready for use. If the device won't turn on with a long press, the device may be low on power and you may need to connect a cable to power it up before you can wake up the Watcher.

### Power Off

To power off the Watcher, you need to access the Setting menu. Using the wheel button, navigate to the Setting option and press the button to enter the menu. Once inside, scroll down to the Shutdown option and press the wheel button to select it. Finally, swipe the slider from left to right to confirm the shutdown process, and the Watcher will power off.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/power_off.gif" style={{width:650, height:'auto'}}/></div>

:::tip
If your Watcher is connected to a power cord, the device's Shutdown button becomes a Reboot button, at which point the device is not allowed to shut down. Similarly, a device that is switched off will automatically switch on when the power cord is connected.
:::

At the bottom of your Watcher device, you will find a small hole. This hole provides access to the hardware power off button, which allows you to turn off the device when needed.

To power off your Watcher using the hardware button, follow these steps:

1. Locate a thin, pointed object, such as a paperclip or a small needle.

2. Carefully insert the pointed object into the small hole at the bottom of your Watcher.

3. Gently press the power off button inside the hole and your Watcher will power off.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/power_off_button.gif" style={{width:650, height:'auto'}}/></div><br />

:::note
It is important to exercise caution when using a pointed object to press the reset button. Be gentle and avoid applying excessive force to prevent damage to the device.

Please note that performing a hardware reset will not erase any user data stored on your Watcher. The reset operation is designed to restart the device in case of any software-related issues or if the device becomes unresponsive.

If you encounter persistent problems with your Watcher that are not resolved by a hardware reset, you may need to consider performing a factory reset through the device's settings menu. However, keep in mind that a factory reset will erase all user data, so it should only be used as a last resort.

Remember to handle your Watcher with care and only use the hardware reset button when necessary to ensure the longevity and proper functioning of your device.
:::

### Operating Logic

The Watcher's operational logic revolves around the wheel button, which serves as the primary means of navigation and selection. Rotating the wheel button counterclockwise allows you to move up or left within menus, while rotating it clockwise enables you to move down or right.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/logic.gif" style={{width:650, height:'auto'}}/></div>

<br />

To confirm a selection or enter a submenu, simply press the wheel button.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/enter.gif" style={{width:650, height:'auto'}}/></div>

<br />

However, it's important to note that in certain situations where there may be potential for operational ambiguity, the wheel button's selection and confirmation logic may deviate from this standard. In such cases, the touch screen interface provides an alternative means of interaction, allowing you to complete the desired action by tapping on the appropriate on-screen elements.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/touch.gif" style={{width:650, height:'auto'}}/></div><br />

Throughout the Wiki, specific instructions will be provided for navigating and selecting options within each menu, taking into account any exceptions to the general wheel button logic. By familiarizing yourself with both the wheel button and touch screen controls, you'll be able to efficiently operate your Watcher device and access its various features and settings.

### Push to Talk

The Watcher's Push to Talk feature allows you to interact with the device using voice commands from any screen or interface. Simply press and hold the Wheel Button located in the top-right corner of the device to activate the voice input interface. While holding the button, speak your command or message, such as assigning a task or initiating a conversation. Once you release the button, the Watcher will process your voice input and respond accordingly. If further clarification is needed, press and hold the button again to provide additional voice input.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/push_to_talk.gif" style={{width:650, height:'auto'}}/></div><br />

:::tip
1. Currently the voice dialogue only supports the use of English. Please note that if you use other languages, unexpected situations may occur.

2. If you start a dialogue while Watcher is running a task, then Watcher will first pause the current task, and then re-enter your original task once the dialogue is over.

3. To find out how to assign tasks, read the **[Run - Sending Task to Watcher by Speaking](#run---sending-task-to-watcher-by-speaking)** and **[How to assign tasks to Watcher](https://wiki.seeedstudio.com/getting_started_with_watcher_task/)** tutorial first.
:::

### Menu Overview

The Watcher offers four main menu options: **Task Templates**, **Current Task**, **Extension**, and **Setting**. These menus provide access to various features and functions of the device.

The Task Templates menu contains a selection of pre-configured tasks that are ready for use. These tasks include human detection, pet detection, and gesture detection. By choosing one of these templates, you can quickly set up the Watcher to perform the desired task without the need for extensive configuration.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/task_templates.gif" style={{width:700, height:'auto'}}/></div>

<br />

The Current Task menu option provides a convenient way to access and manage the actively running task on the Watcher. If you need to navigate away from the current task to adjust device settings like volume, brightness, or LED light switch, you can easily return to your task by selecting the Current Task option from the main menu, ensuring a seamless and efficient user experience.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/current_task.gif" style={{width:700, height:'auto'}}/></div>

<br />

The Extension menu, currently accessible on the Watcher, serves as a hub for displaying data from a select range of connected Grove sensors, specifically the **[Grove SHT41](https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT41-p-5383.html)**, **[Grove SHT40](https://www.seeedstudio.com/Grove-Temp-Humi-Sensor-SHT40-p-5384.html)**, and **[Grove SCD41](https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD41-p-5025.html)**.

This feature allows users to seamlessly integrate one of these supported Grove sensors at a time with their Watcher device, enabling real-time monitoring and visualization of sensor data. By navigating to the Extension menu, users can view the values and readings from their connected sensor, empowering them to gather insights and make informed decisions based on the collected data.

As the Watcher platform continues to evolve, the Extension menu may expand to include support for a wider array of Grove sensors and additional features and functionalities, further enhancing the device's capabilities and user experience. Stay tuned for updates and announcements regarding future enhancements to the Extension menu.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/connect_grove.gif" style={{width:700, height:'auto'}}/></div>

<br />

Lastly, the Setting menu is where you can access and modify the general settings of the Watcher. This menu provides options for customizing various aspects of the device, such as display brightness, sound volume, connectivity settings, and more. By exploring the Setting menu, you can tailor the Watcher's performance and behavior to your preferences, ensuring a personalized user experience.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/settings.gif" style={{width:700, height:'auto'}}/></div>


## Device Binding and OTA Upgrade

After powering on your Watcher, if it has not been previously bound to a device, it will prompt you to connect to the SenseCraft app. Alternatively, you can find the "Connect to APP" option in the Settings menu. The Watcher will then display a QR code to download the SenseCraft app.

You can either scan the QR code or use the provided link to download the app.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft-app-download.seeed.cc">
            <strong><span><font color={'FFFFFF'} size={"4"}> Download APP 🖱️</font></span></strong>
    </a>
</div>

<br />

To proceed with binding your Watcher to the SenseCraft app, follow these steps:

**Step 1.** On your Watcher, rotate the wheel button clockwise to enter the QR code interface for binding the device.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/1.svg" style={{width:550, height:'auto'}}/></div>

**Step 2.** Open the SenseCraft app on your mobile device and tap the plus sign (+) in the top right corner to add your Watcher by scanning the QR code.

:::tip
Ensure that your mobile device's Bluetooth permissions are enabled, as the binding process requires a Bluetooth connection.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/2.svg" style={{width:550, height:'auto'}}/></div>

**Step 3.** After successfully scanning the QR code, the app will navigate to the network configuration page. Select a 2.4GHz Wi-Fi network to connect your Watcher to the internet.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/3.svg" style={{width:550, height:'auto'}}/></div>

Tap the "Next" button to proceed.

**Step 4.** Choose a name for your Watcher and select an appropriate group for it.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/4.svg" style={{width:550, height:'auto'}}/></div>

Tap the "Finish" button to complete the setup process.

**Step 5.** The SenseCraft app will display a tutorial page, providing guidance on how to use your Watcher. Take a moment to familiarize yourself with the instructions.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/5.svg" style={{width:550, height:'auto'}}/></div>

Once the setup is complete, the app will open a chat window to communicate with your Watcher, while the Watcher will return to its main menu.


With the binding process finished, your Watcher is now connected to the SenseCraft app, and you can start exploring its features and capabilities. The app serves as a convenient way to interact with your Watcher, adjust settings, and receive notifications remotely.

## Run - Task Templates

To run a task from the Task Templates on your Watcher, follow these steps:

**Step 1.** From the main menu, use the wheel button to navigate to the **Task Templates** option.

**Step 2.** Press the wheel button to enter the Task Templates submenu.

**Step 3.** Scroll through the available task templates using the wheel button until you find the desired model task.

**Step 4.** Press the wheel button to select and start running the chosen task.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/run_template.gif" style={{width:650, height:'auto'}}/></div>

<br />

Once the task begins, the Watcher will display an animated emoji face on the screen. This emoji indicates that the device is actively monitoring for the target object specified by the selected task template.

When the Watcher detects the target object, the display will switch from the emoji animation to a real-time view of the detected object. This allows you to see what the Watcher has identified.

If the target object moves out of the Watcher's view or is no longer detected, the display will automatically return to the animated emoji face, signifying that the device is still monitoring for the target.

To end a running task:
1. Tap the screen once or press the wheel button.
2. A confirmation prompt will appear, asking if you want to end the current task.
3. Confirm your choice to stop the task and return to the main menu.

Task Templates:

- Human Detection:
   - This task template is designed to detect the presence of human beings.
   - When the Watcher identifies a person, it will trigger an alarm notification.

- Pet Detection:
   - The Pet Detection task template focuses on recognizing cats or dogs.
   - If the Watcher detects a cat or dog, it will trigger an alarm notification.

- Gesture Detection:
   - This task template is configured to identify the "paper" hand gesture.
   - When the Watcher recognizes the paper gesture, it will trigger an alarm notification.

Each of these task templates has specific alarm triggering conditions based on the detection of their respective targets: humans, cats, or the paper gesture. By using these templates, you can quickly set up the Watcher to monitor for the desired object without the need for extensive configuration.


## Run - Sending Task to Watcher via SenseCraft APP

:::danger
Fees may apply for using some of SenseCraft AI's services, please refer to the documentation below for details:

**[SenseCraft AI for Watcher Plans and Benefits](https://wiki.seeedstudio.com/watcher_price/)**
:::

The SenseCraft APP allows you to send Tasks to your Watcher device. In this example, we will demonstrate the process of sending a task using one of the sample tasks provided by Watcher. Let's use the command *If you see a candles, please notify me*.

**Step 1.** Open the SenseCraft APP and navigate to the chat window for your connected Watcher device.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/6.svg" style={{width:550, height:'auto'}}/></div><br />

**Step 2.** In the chat window, either select the desired task from the available options or manually type in the command *If you see a candles, please notify me*. Send the command to your Watcher by tapping the send button or pressing enter.

**Step 3.** Upon receiving the command, Watcher will interpret it and break it down into a task flow consisting of **When**, **Do**, and **Capture Frequency** components.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/7.svg" style={{width:550, height:'auto'}}/></div>

<br />

Review the parsed task flow to ensure that Watcher has correctly understood your command. The app will display the interpreted task details for your verification. If any part of the task flow does not align with your intended command, you can modify the task details by accessing the **Detail Config** section within the app.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/8.svg" style={{width:550, height:'auto'}}/></div>

<br />

**Step 4.** Once you have confirmed or adjusted the task details, click the **Run** button to send the finalized task to your Watcher.

Watcher will download the task instructions, and once the download is complete, it will transform into a vigilant monitoring system, ready to detect any instances of candles.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/9.svg" style={{width:700, height:'auto'}}/></div>

<br />

**Step 5.** If Watcher identifies a candles, it will send an alert based on the predefined settings, which may include flashing lights, audible alarms, and notifications through the SenseCraft APP.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/10.svg" style={{width:550, height:'auto'}}/></div>

:::note
Please note that due to the time constraints of the task flow, **there will be a minimum interval between consecutive alerts to avoid excessive notifications**.
:::

By following these steps, you can effectively send commands to your Watcher using the SenseCraft APP, enabling it to perform specific monitoring tasks and notify you when the specified conditions are met.

Remember to regularly review and adjust your Watcher's settings and task flows to ensure optimal performance and alignment with your monitoring requirements. For a more detailed description and explanation of the APP's tasks and options, as well as a detailed description of the intervals, please read **[Watcher Quick Start Series 1# : Concepts and Classification of Tasks](https://wiki.seeedstudio.com/getting_started_with_watcher_task/)** to learn more.

## Run - Sending Task to Watcher by Speaking

:::danger
Fees may apply for using some of SenseCraft AI's services, please refer to the documentation below for details:

**[SenseCraft AI for Watcher Plans and Benefits](https://wiki.seeedstudio.com/watcher_price/)**
:::

The Watcher offers a convenient and intuitive way to send tasks or engage in conversation using voice commands, thanks to its "Push to Talk" feature. This functionality is accessible from any screen or interface on the device, making it easy to interact with the Watcher without navigating through menus. Here's a step-by-step guide on how to use this feature:

1. Activate Push to Talk:

   - Locate the Wheel Button on the top-right corner of the Watcher.
   - Press and hold the Wheel Button to enter the voice input interface.

2. Speak Your Command or Message:

   - While holding the Wheel Button, clearly speak your task or message to the Watcher.
   - You can assign tasks, such as "Tell me if the baby is crying" or "If the dog is stealing food, say stop copper".
   - Alternatively, you can engage in conversation by asking questions or making statements, like "Tell me a joke".

3. Release the Wheel Button:

   - Once you have finished speaking, release the Wheel Button.
   - The Watcher will process your voice input and determine whether it is a task assignment or a conversation.

4. Task Assignment:

   - If the Watcher recognizes your voice input as a task assignment, it will automatically break down your task into relevant components.
   - The Watcher will display cards on its screen, showing the **Object** (what to monitor), **Behavior** (what action to look for), **Notification** (how to alert you), **Time Range** (when to monitor), and **Frequency** (how often to monitor).
   - Review the displayed information to ensure it accurately represents your intended task.
   - If the details are correct, confirm the task, and the Watcher will begin executing it according to the specified parameters.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/80.jpg" style={{width:650, height:'auto'}}/></div>

5. Conversation:

   - If the Watcher determines that you are engaging in conversation, it will respond to your queries or statements using both the screen and voice output.
   - The Watcher will display its response on the screen while simultaneously speaking it out loud.
   - After each conversation turn, there will be a brief buffer period.
   - If you press and hold the Wheel Button and speak again within this buffer period, you can continue the conversation seamlessly.
   - However, if you do not speak within the buffer period, the Watcher will consider the conversation ended and return to its previous state.

<br /><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/81.png" style={{width:600, height:'auto'}}/></div><br />

Tips for Optimal Usage:

- Speak clearly and at a moderate pace to ensure accurate voice recognition.
- When speaking, please get as close to Watcher as possible, about **3 ~ 10cm** distance speaking recognition accuracy is best.
- Minimize background noise to improve the Watcher's ability to understand your voice commands.
- Be specific and concise when assigning tasks to help the Watcher accurately interpret your intentions.
- If the Watcher misinterprets your task or conversation, simply press and hold the Wheel Button again to provide clarification or corrections.

By leveraging the Push to Talk feature, you can effortlessly send tasks and engage in conversations with the Watcher, making your interaction with the device more natural and efficient.

:::note
If you encounter an error of **0x7002**, it means that the current Watcher's network status is not good and the audio service call failed, please change the network or location and retry again.
:::

## Watcher Setting

This guide will walk you through the various settings options available on your Watcher device and explain their functions.

- **Connect App**:
   - The Connect App setting allows you to establish a connection between your Watcher and a companion mobile application.
   - By connecting your Watcher to the app, you can access additional features, remote control capabilities, and receive notifications on your mobile device.

- **Wi-Fi**:
   - The Wi-Fi setting on the Watcher device displays information about the currently connected wireless network.
   - If no network has been configured, the Wi-Fi setting will not display any information.
   - Please note that configuring Wi-Fi networks can only be done through the companion mobile app and is not supported on the Watcher device itself.

- **Bluetooth**:
   - The Bluetooth setting allows you to toggle the Bluetooth functionality on or off.

- **Sound**:
   - The Sound setting lets you adjust the volume of your Watcher's audio output.
   - You can increase or decrease the volume to suit your preferences or environment.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/sound_setting.gif" style={{width:650, height:'auto'}}/></div>

<br />

- **Brightness**:
   - The Brightness setting allows you to control the brightness level of your Watcher's display.
   - Adjusting the brightness can help improve visibility in different lighting conditions and conserve battery life.

- **RGB Light**:
   - The RGB Light setting is a toggle switch that allows you to turn the LED indicator light on or off.

- **About Device**:
   - The About Device section provides important information about your Watcher, such as the model number, firmware version, and serial number.
   - This information can be helpful when troubleshooting issues or checking for available updates.

- **Shutdown/Reboot**:
   - The Shutdown/Reboot setting allows you to restart or power off your Watcher device, depending on the power source.
   - When the Watcher is connected to a power source, the "Reboot" option will be displayed, allowing you to restart the device. Shutting down is not allowed while connected to power.
   - When the Watcher is running on battery power, the "Shutdown" option will be available, enabling you to power off the device.

- **Factory Reset**:
   - The Factory Reset option restores your Watcher to its original factory settings.
   - This action will erase all user data, preferences, and configurations, returning the device to its default state.
   - Use this option with caution, as it cannot be undone, and you will need to set up your Watcher again after a factory reset.

By familiarizing yourself with these settings options, you can customize and optimize your Watcher experience to best suit your needs. Keep in mind that certain settings, such as Wi-Fi and Bluetooth configuration, can only be accessed and modified through the companion mobile app.

## Connecting to Serial Console

When you connect your Watcher via USB, Windows registers two new serial ports. In my case, COM23 and COM24. I decided to do an experiment and see what would appear on a serial terminal, because I am a Circuitpython fan, and I love the REPL! For this I used Putty and configured it to use the serial port at 115200 baud rate (I was lucky, the first COM23 port was already the one I needed to discover the command console). But the other one, COM24 is used to upgrade firmware using Xmodem protocol in the same way as Grove Vision AI V2.

Right away, the terminal displays a series of information about the device's memory. If you press enter, a prompt appears and you can type some commands that I list below:

```
help  [<string>] 
Print the summary of all registered commands if no arguments are given, otherwise print summary of given command, where <string> is the name of command

wifi_sta  [-s <ssid>] [-p <password>]
WiFi is station mode, join specified soft-AP
s <ssid> SSID of AP
p <password> password of AP
ota  [-t <int>] [--url=<string>] force ota, ignoring version check
-t, --ota_type=<int> 0: ai model, 1: himax, 2: esp32
-url=<string> url for ai model, himax or esp32 firmware

taskflow  [-iej] [-f <string>]
i, --import import taskflow
e, --export export taskflow
f, --file=<string> File path, import or export taskflow json string by SD, eg: test.json
j, --json import taskflow json string by stdin

Example: Import taskflow by json string or SD file: taskflow -i -f "test.json".
Example: Export taskflow to stdout or SD file: taskflow -e -f "test.json"

factory_info
Get factory infomation

battery
Get battery percent

bsp  subcmd [subcmd args] 
Bsp call bsp functions

Example Scan the specified i2c bus: bsp i2cdetect <0|1>

reboot 
Reboot the device

factory_reset 
Factory reset and reboot the device

record  [-t <int>] [-f <string>]
Record audio and save to SD.
-t, --time=<int> record time, s
-f, --file=<string> File path, Store PCM audio data in SD card

vi_ctrl  [-sec] [-z <int>] 
Voice interaction ctrl (Probably will be used with Push to Talk function)
-s, --start start wakeup, and start record
-e, --end end record
-c, --stop stop voice interaction when analyzing or palying, Put it into idle.
-z, --exit=<int> 0: exit vi, 1:exit vi then run new taskflow

iperf  [-suVa] [-c <ip>] [-p <port>] [-l <length>] [-i <interval>] [-t <time>] [-b <bandwidth>]
Check conection performance. Similar to iperf linux command.
-c, --client=<ip> run in client mode, connecting to <host>
-s, --server run in server mode
-u, --udp use UDP rather than TCP
-V, --ipv6_domain use IPV6 address rather than IPV4
-p, --port=<port> server port to listen on/connect to
-l, --len=<length> Set read/write buffer size
-i, --interval=<interval> seconds between periodic bandwidth reports
-t, --time=<time> time in seconds to transmit for (default 10 secs)
-b, --bandwidth=<bandwidth> bandwidth to send at in Mbits/sec
-a, --abort abort running iperf

rgb  [-r <int>] [-g <int>] [-b <int>] [-m <int>] [-v <int>] [-t <int>]
Set the rgb LED value. eg: rgb -r 255 -g 0 -b 0 -m 3
-r, --red=<int> red value, 0~255
-g, --green=<int> green value, 0~255
-b, --blue=<int> blue value, 0~255
-m, --mode=<int> 1: breath, 2: blink, 3:solid, default 3
-v, --step_value=<int> RGB step value, default 3
-t, --step_time_ms=<int> RGB step time(ms), default 5
``` 

## Resources

- [Getting Started with SenseCAP Watcher](https://wiki.seeedstudio.com/getting_started_with_watcher/)

- [Watcher Quick Start Series 1# : How to assign tasks to Watcher](https://wiki.seeedstudio.com/getting_started_with_watcher_task/)

- [Watcher Quick Start Series 2# : Watcher Looks & SenseCraft Tools](https://wiki.seeedstudio.com/getting_started_with_watcher_look_tool)

- [Watcher Quick Start Series 3# : As a sensor & Use Grove](https://wiki.seeedstudio.com/watcher_as_grove)

- [Watcher Quick Start Series 4# : Deploy Watcher's AI capabilities locally](https://wiki.seeedstudio.com/watcher_local_deploy)

- Watcher Quick Start Series 5# : Training a model for Watcher

- [Watcher Quick Start Series 6# : What does Watcher do](https://wiki.seeedstudio.com/what_does_watcher_do)


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
