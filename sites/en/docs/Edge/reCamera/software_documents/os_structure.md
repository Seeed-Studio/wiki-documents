---
description: in depth look at the operating system (OS) structure of the reCamera
title: reCamera OS Structure
keywords:
  - Edge
  - reCamera
  - opereating system
  - OS
image: https://files.seeedstudio.com/wiki/reCamera/recam_OS_structure.webp
slug: /recamera_os_structure
sidebar_position: 2
last_update:
  date: 02/15/2025
  author: Dawn Yao
---

# reCamera Software Structure

The software comes with a stable reCamera OS that supports firmware OTA updates. Additionally, Node-RED and Sensecraft AI platform is integrated in the device for easier deployment experience. This integration offers novice developers a modular programming experience based on Node-RED nodes.  For advanced developers, the in-depth Linux-based development and python are also there for twist and play.

We warmly welcome developers proficient in JavaScript, C/C++, Python, Linux OS, buildroot, as well as geeks, students, and beginners, to engage in further development and explore applications.

## reCamera OS

This is an embedded operating system built on Buildroot, integrating services `supervisor`, `sscma` (Seeed SenseCraft Model Assistant), and `Node-RED`. The architecture diagram is shown below:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/recam_OS_structure.png" /></div>

The [source code](https://github.com/Seeed-Studio/reCamera-OS) of the OS is available on GitHub. Our team is also striving to make the OS more user-friendly and versatile, each update will be published [here](https://github.com/Seeed-Studio/reCamera-OS/releases). New version can be OTA with the Web interface or [manually update](https://wiki.seeedstudio.com/recamera_os_version_control).

### 🧩 Supervisor

Supervisor is a lightweight process manager that monitors and manages the other services. It is responsible for starting and stopping services, as well as handling system events, and providing interfaces for other services or UI. It provides the services below:

#### System Services

- ***Device management***: Identify and configure connected devices, storage devices, etc.
- ***User Management***: Manage user accounts, credentials, and SSH keys.
- ***Network configuration***: Configure wired and wireless network connections.
- ***File system operations***: Manage device files.
- ***Device Discovery***:
  - Uses mDNS to broadcast device information. The device hostname is recamera.local.
  - When a web interface sends a request, the recamera device scans the local network for other recamera devices via mDNS, generates a list of discovered devices, formats the data, and returns it to the web interface. (Note: Currently, only one device’s information is returned.)

#### Update Service

- Package/firmware download management
- Security verification
- Installation automation

#### Daemon Service

- System health monitoring
- Automatic application recovery

#### Logging Service

- Runtime status tracking
- Error diagnostics

#### Application Service

- Application Deployment
- Application Packaging

### 🧩 Basic Web Interface

The basic web interface provides a user-friendly interface for users to manage the device. It will obtain data from the Supervisor and form the basic web interface of reCamera when power-on. The interface is shown below:

- Starting Page: `ip_address/#/init`
- Workspace: `ip_address/#/workspace` (for os version 0.1.4 and above)
- Network Configuration: `ip_address/#/network`
- Security: `ip_address/#/security`
- Terminal: `ip_address/#/terminal`
- System: `ip_address/#/system`
- Power: `ip_address/#/power`

These basic web interfaces allow users to have a secure access to the device core config functionalities when power-on. [Source code](https://github.com/Seeed-Studio/sscma-example-sg200x/tree/main/solutions/supervisor/www) is also available on Github if you would like to modify the front-end of the basic web interface.

### 🧩 Node-RED Modules

#### sscma-node

This is the server-side module for Node-RED to enable the communication between the Node-RED client and the sscma service. [Source code](https://github.com/Seeed-Studio/sscma-example-sg200x/tree/main/solutions/sscma-node) is on Github for any C/C++ developers to do extended development. It provides the following features:

- Image processing service
- AI model management
- Media streaming service
- Data storage service

#### node-red-sscma

`node-red-contrib-sscma` is the Node-RED node component designed to facilitate the quick deployment of AI models through flow-based programming. [Source code](https://github.com/Seeed-Studio/node-red-contrib-sscma) is also on Github for any developers to do extended development following the [protocol](https://wiki.seeedstudio.com/node_red_protocol). This allows for seamless integration of AI model outputs with other devices, enabling smart automation and intelligent workflows.

An example of how `camera node` and `model node` are communicated is shown below:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/vision_inference.png" /></div>

### 🧩 SenseCraft Integration

There is also an interface to the SenseCraft Platform for models and application flows. Node-Red flow can be stored on SenseCraft Cloud Service. You can also train your own model and public to the Super easy one click to deploy different application on the device.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/sensecraft_applications.png" /></div>

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
