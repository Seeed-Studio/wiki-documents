---
sidebar_position: 1
title: Overview
description: Quick start guide for SenseCraft Data Platform — manage your SenseCAP devices and visualize sensor data with a secure and reliable cloud platform.
keywords:
- Cloud and Chain
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png        
slug: /cloud/sensecraft-data/sensecraft-data-platform/overview
aliases:
  - /Cloud_Chain/SenseCAP_Portal/QuickStart
last_update:
  date: 06/06/2025
  author: Matthew
---

# SenseCraft Data Platform Quick Start

:::tip
**Notice:**  
Starting from 2025, **SenseCAP Portal** has been officially renamed to **SenseCraft Data Platform**. The functionality remains the same, with ongoing enhancements to better support AIoT and multi-sensor scenarios.
:::

How to work with SenseCraft Data Platform? Let’s go!

## Introduction

The main function of the SenseCraft Data Platform is to manage SenseCAP devices and store data. It is built on Azure, a secure and reliable cloud service from Microsoft. You can apply for an account and bind all devices to this account. SenseCraft provides a web platform and API. The web platform includes Dashboard, Device Management, Data Management, and Access Key Management, while the API is open to users for further development.

## Website

- Global Station: <a href="https://sensecap.seeed.cc/">https://sensecap.seeed.cc</a>

## Create a new account

① Select "Register Account", enter email information, and click “Register”. A registration email will be sent to your mailbox.

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-register-1.jpg)

② Open the "SenseCAP..." or "SenseCraft…" email, click the link, fill in the relevant information, and complete the registration.
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-register-2.jpg)

③ Return to the login interface and complete the login.
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-register-3.jpg)

:::note
If you can’t find the email, it may be automatically identified as “spam” and put in the “trash can”.<br />
If you forget your password when logging in, you can retrieve it through your email.
:::

## Download the SenseCAP App

Install `SenseCraft App` and log in.

- Android: <a href="http://sensecap-app-download.seeed.cn/">Download App</a> here, and scan the QR code.
- iOS: Search for “SenseCraft” in the App Store.

## Bind Device

Each SenseCAP device has a label on the enclosure as shown in the figure below. The EUI is the unique code of a SenseCAP device. The Key is an encryption field, and it can be ignored.
On the SenseCAP App main page, click the “Bind” button, then scan the QR code to bind the device.

![](https://sensecap-docs.seeed.cc/images/sensecap_portal/label.jpg)

## Check Data

Log in to `SenseCraft Data Platform`, check the device status and basic information in the “Device/Sensor Node” section, and view the sensor data in the “Data/Table” section.
![](https://sensecap-docs.seeed.cc/images/sensecap_portal/data_overview.jpg)
