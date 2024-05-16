---
description: The code of light is used as an example to introduce the development framework of Matter.
title: Matter Development Framework Overview
keywords:
- matter
- XIAO
- light
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /matter_development_framework
last_update:
  date: 05/15/2024
  author: Citric
---

# Matter Development Framework Overview

:::tip
This article is the fourth tutorial in the Seeed Studio XIAO ESP32 Development Matter series. If you have not read the previous tutorials, we recommend that you read them first to check that your device is and has been configured as required.

- **[Developed on XIAO using Espressif ESP-IDF](https://wiki.seeedstudio.com/xiao_idf)**
- **[Getting Started with Matter Quickly with XIAO ESP32 Series](https://wiki.seeedstudio.com/getting_started_with_matter)**
- **[Matter Development with XIAO ESP32 Series](https://wiki.seeedstudio.com/xiao_esp32_matter_env/)**
:::

Embark on an illuminating journey into the world of Matter development with our comprehensive tutorial. Through the lens of the quintessential light example, we'll shed light on the fundamental concepts and knowledge that form the bedrock of Matter development. From clusters and attributes to commands and beyond, this tutorial will equip you with the tools to navigate the Matter framework with confidence. Get ready to flip the switch on your Matter development skills and let's dive into the brilliant world of connected devices!

**Tutorial Outline**

1. **[Understanding the Light Example](#understanding-the-light-example)**
   - Overview of the light example and its functionality
   - Exploring the project structure and main components

1. **[Clusters in Matter](#clusters-in-matter)**
   - Introduction to clusters and their role in Matter
   - Examining the light cluster and its attributes
   - Implementing cluster functionality in the light example

1. **[Attributes and Data Types](#attributes-and-data-types)**
   - Understanding attributes and their significance in Matter
   - Exploring common data types used in Matter attributes
   - Defining and manipulating attributes in the light example

1. **[Commands and Actions](#commands-and-actions)**
   - Introduction to commands and actions in Matter
   - Implementing toggle, on, and off commands in the light example
   - Handling command execution and response

1. **[Event Handling and Notifications](#event-handling-and-notifications)**
   - Understanding event handling in Matter
   - Subscribing to and handling events in the light example
   - Generating and sending notifications for state changes

1. **[Device Discovery and Provisioning](#device-discovery-and-provisioning)**
   - Overview of device discovery and provisioning in Matter
   - Implementing device discovery and provisioning in the light example
   - Best practices for secure device onboarding

In this section, we will focus on the [light](https://github.com/espressif/esp-matter/tree/main/examples/light) example provided in ESP-Matter, which describes in detail the basic concepts of clusters, attributes and commands in the Matter development framework. By reading this article, you will be able to gain a better understanding of the structure and awareness of the Matter development framework.

## Understanding the Light Example


### Overview of the light example and its functionality


### Exploring the project structure and main components


## Clusters in Matter

### Introduction to clusters and their role in Matter

### Examining the light cluster and its attributes

### Implementing cluster functionality in the light example


## Attributes and Data Types

### Understanding attributes and their significance in Matter

### Exploring common data types used in Matter attributes


### Defining and manipulating attributes in the light example



## Commands and Actions

### Introduction to commands and actions in Matter


### Implementing toggle, on, and off commands in the light example


### Handling command execution and response




## Event Handling and Notifications

### Understanding event handling in Matter

### Subscribing to and handling events in the light example

### Generating and sending notifications for state changes





## Device Discovery and Provisioning

### Overview of device discovery and provisioning in Matter


### Implementing device discovery and provisioning in the light example


### Best practices for secure device onboarding

Device onboarding is a critical process in Matter that involves provisioning and authenticating new devices to join the network securely. Implementing secure device onboarding practices is essential to protect the integrity and privacy of the Matter ecosystem. Here are some best practices to follow:

1. Use Secure Commissioning Methods
   - Matter supports various commissioning methods, such as QR code scanning, near-field communication (NFC), and Bluetooth Low Energy (BLE).
   - Ensure that the chosen commissioning method is secure and protects against unauthorized access or tampering.
   - Follow the recommended guidelines and security measures specific to each commissioning method.

2. Implement Robust Authentication Mechanisms
   - Matter utilizes authentication mechanisms to verify the identity of devices during onboarding.
   - Implement strong authentication protocols, such as using unique device certificates, to prevent unauthorized devices from joining the network.
   - Use secure key exchange mechanisms to establish trust between the commissioner (e.g., a smartphone app) and the device being onboarded.

3. Encrypt Communication Channels
   - During the onboarding process, sensitive information is exchanged between devices and the commissioner.
   - Ensure that all communication channels used for onboarding, such as BLE or Wi-Fi, are encrypted using strong encryption algorithms.
   - Use secure protocols like Transport Layer Security (TLS) or Datagram Transport Layer Security (DTLS) to protect data transmission.

4. Verify Device Authenticity
   - Implement mechanisms to verify the authenticity of devices during onboarding.
   - Use device certificates or other means to ensure that the device being onboarded is genuine and hasn't been tampered with.
   - Validate the device's certificate chain against trusted root certificates to establish trust.

5. Perform Secure Software Updates
   - Regularly update the software and firmware of Matter devices to address security vulnerabilities and bugs.
   - Implement secure software update mechanisms, such as code signing and integrity checks, to prevent unauthorized modifications.
   - Ensure that software updates are downloaded from trusted sources and are properly authenticated before installation.

6. Implement Secure Factory Reset
   - Provide a secure factory reset mechanism to erase all sensitive data and configurations when a device is decommissioned or sold.
   - Ensure that the factory reset process is authenticated and cannot be triggered by unauthorized entities.
   - Verify that all data is securely erased and cannot be recovered after the factory reset.

7. Educate Users about Security Best Practices
   - Provide clear instructions and guidelines to users on how to securely onboard and manage Matter devices.
   - Educate users about the importance of keeping their commissioner devices (e.g., smartphones) secure and up to date.
   - Encourage users to use strong and unique passwords for their Matter network and to regularly update device software.

8. Conduct Security Audits and Penetration Testing
   - Regularly perform security audits and penetration testing on Matter devices and the onboarding process.
   - Identify and address any security vulnerabilities or weaknesses discovered during the audits.
   - Engage with the Matter community and security researchers to stay informed about the latest security best practices and findings.

By following these best practices, developers can ensure a secure and robust device onboarding process in Matter. It is crucial to prioritize security throughout the development lifecycle and to continuously update and improve the security measures based on the latest industry standards and emerging threats.

























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
