---
sidebar_position: 1
description: SenseCraft App Event Version 2.9.0 User Manual
title: Event Management
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /sensecraft-app/tutorials/event-management
aliases:
  - /sensecap_mate_app_event
last_update:
  date: 03/20/2023
  author: Matthew
---

# Event Management in SenseCraft App

## Event Functions

SenseCraft App version 2.9.0 introduces a new Event alarm function that allows users to create events and set device trigger conditions. When devices meet these conditions, alarm messages will be pushed to users. The device page now includes a new message center function where you can view device-triggered alarm messages and system notifications, enabling real-time alerts, remote monitoring, and remote management.

### Install SenseCraft App V2.9.0

- Log in to your account in the SenseCraft App and navigate to the Event page
- Follow these steps to configure Event alerts:

#### Step 1: Create an Event Alert

Click the Add icon or "Add Event" button to create an Event alert. On the Add Event page, go to Conditions to add condition options, then click the Add button to select a device.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_2.png" style={{width:1000, height:'auto'}}/></div>

#### Step 2: Configure Device and Conditions

Select the device and choose the measurement type. Set the alarm conditions by selecting options such as "greater than" or "less than," then drag the progress bar to set the threshold value. Click "Next Step" to continue.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_3.png" style={{width:1000, height:'auto'}}/></div>

#### Step 3: Set Recovery Actions

On the Add Event page, configure "Back to normal actions" for when the device returns to normal conditions. Choose whether to send a notification, then click "Save." Enter an Event name and click "Submit" to successfully add the Event alarm and return to the Event list.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_4.png" style={{width:1000, height:'auto'}}/></div>

#### Step 4: View Alarm Messages

On the Device page, click "Message Center" to view alarm messages. This shows two types of messages:

- **Device Warnings**: Device-triggered alarm notifications
- **System Notifications**: System messages

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_5.png" style={{width:1000, height:'auto'}}/></div>

#### Step 5: Manage Alarm Messages

Click on an alarm message to view details when a device triggers the configured conditions. After viewing, return to the alarm list where the status changes to "read." Click the edit button to select messages for various operations such as marking as read or deleting.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_6.png" style={{width:1000, height:'auto'}}/></div>

#### Step 6: View System Messages

Navigate to system messages and click to view detailed system notifications.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_7.png" style={{width:1000, height:'auto'}}/></div>
