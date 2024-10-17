---
description: Operation guideline of the SenseCAP Watcher.
title: Operation Guideline
image: https://files.seeedstudio.com/wiki/watcher_getting_started/0.JPG
slug: /watcher_operation_guideline
sidebar_position: 2
last_update:
  date: 10/17/2024
  author: Citric
---

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



