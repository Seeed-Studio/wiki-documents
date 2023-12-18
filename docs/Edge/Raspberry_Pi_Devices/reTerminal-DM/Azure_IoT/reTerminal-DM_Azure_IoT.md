---
description: Azure IoT Edge Runtime on reTerminal DM
title: Azure IoT Edge Runtime on reTerminal DM
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminal-DM_Azure_IoT
last_update:
  date: 11/6/2023
  author: Takashi
---

# Run Azure IoT Edge Runtime on reTerminal DM device running Debian 11 (ARM32v7)

<div style={{textAlign:'center'}}><iframe width={270} height={358} frameBorder={0} src="https://devicecatalog.azure.com/embed/c40637ad-a9bf-494e-8975-f4d37e43cf6f" title="reTerminal DM - Azure Certified Device" /></div>


## Introduction

reTerminal DM is a Panel PC, HMI, PLC, IIoT Gateway all-in-one device powered by Raspberry Pi CM4, with
10.1'' IP65 front panel and rich industrial interfaces, and natively integrated with Node-RED and supports
Raspberry Pi-based software ecosystem.

This document describes how to connect reTerminal DM device running Debian 11 (ARM32v7) with Azure IoT
Edge Runtime pre-installed and Device Management. This multi-step process includes:

- Configuring Azure IoT Hub
- Registering your IoT device
- Build and Deploy client component to test device management capability

## Step 1: Prerequisites

You should have the following items ready before beginning the process:

1. [Create an Azure account](https://azure.microsoft.com/en-us/free/)
2. [Sign up to Azure Portal](https://portal.azure.com/#home)
3. [Setup your IoT hub](https://github.com/Azure/azure-iot-device-ecosystem/blob/master/setup_iothub.md)
4. [Add the Edge Device](https://docs.microsoft.com/en-us/azure/iot-edge/quickstart-linux)
5. [Add the Edge Modules](https://docs.microsoft.com/en-us/azure/iot-edge/quickstart-linux?view=iotedge-2018-06#deploy-a-module)

## Step 2: Prepare your Device

1. Power on the device. Connect a 12~24V power supply to the 2-pin power terminal block connctor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Azure-IoT/reTerminal-DM-Azure-IoT-EDGE.png" style={{width:300, height:'auto'}}/></div>

2. Check the OS version, bit number and architecture.

```
$ lsb_release -irc
Distributor ID: Raspbian
Release: 11
Codename: bullseye
$ getconf LONG_BIT
32
$ uname -m
armv7l
```

:::tip
If your OS is older than Debian 11 (Bullseye) or LOG_BIT is 64, please install latest Raspberry Pi OS 32-
bit. Please refer to [Steps for Flashing Raspbian OS](https://wiki.seeedstudio.com/reterminal-dm-flash-OS/#steps-for-flashing-raspbian-os).
:::

:::tip
If uname -m is aarch64, your OS running 64-bit kernel. Please change to 32-bit kernel. Refer to [32-bit OS driver](https://wiki.seeedstudio.com/reterminal-dm-flash-OS/#32-bit-os-driver).
:::

## Step 3: Manual Test for Azure IoT Edge on device

### 3.1 Edge Runtime Enabled

1. [Register your device](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-provision-single-device-linux-symmetric?view=iotedge-1.4&tabs=azure-portal%2Cdebian#register-your-device)

2. [View registered devices and retrieve provisioning information](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-provision-single-device-linux-symmetric?view=iotedge-1.4&tabs=azure-portal%2Cdebian#view-registered-devices-and-retrieve-provisioning-information)

3. [Install IoT Edge](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-provision-single-device-linux-symmetric?view=iotedge-1.4&tabs=azure-portal%2Cdebian#install-iot-edge)

```
$ curl https://packages.microsoft.com/config/debian/11/packages-microsoft-
prod.deb > ./packages-microsoft-prod.deb
$ sudo apt install ./packages-microsoft-prod.deb
$ rm ./packages-microsoft-prod.deb
```

4. [Install a container engine](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-provision-single-device-linux-symmetric?view=iotedge-1.4&tabs=azure-portal%2Cdebian#install-a-container-engine)

```
$ sudo apt-get update
$ sudo apt-get install moby-engine
$ sudo vi /etc/docker/daemon.json
$ sudo systemctl restart docker
```

Set the default logging driver to the local logging driver as shown in the example below.

```cpp
"log-driver": "local"
```

5. [Install the IoT Edge runtime](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-provision-single-device-linux-symmetric?view=iotedge-1.4&tabs=azure-portal%2Cdebian#install-the-iot-edge-runtime)

```
$ sudo apt-get update
$ sudo apt-get install aziot-edge defender-iot-micro-agent-edge
```

6. [Provision the device with its cloud identity](https://learn.microsoft.com/en-us/azure/iot-edge/how-to-provision-single-device-linux-symmetric?view=iotedge-1.4&tabs=azure-portal%2Cdebian#provision-the-device-with-its-cloud-identity)

```
$ sudo iotedge config mp --connection-string 'PRIMARY_CONNECTION_STRING'
$ sudo iotedge config apply
```

### 3.2 Check the iotedge daemon

Open the command prompt on your IoT Edge device , confirm that the Azure IoT edge Daemon is under
running state

```
sudo iotedge system status
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Azure-IoT/reTerminal-DM-Azure-IoT-EDGE2.png" style={{width:900, height:'auto'}}/></div>

Open the command prompt on your IoT Edge device, confirm that the module deployed from the cloud is
running on your IoT Edge device

```
$ sudo iotedge list
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Azure-IoT/reTerminal-DM-Azure-IoT-EDGE3.png" style={{width:900, height:'auto'}}/></div>

On the device details page of the Azure, you should see the runtime modules - edgeAgent, edgeHub and
SimulatedTemperatureSensor modules are under running status

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Azure-IoT/reTerminal-DM-Azure-IoT-EDGE4.png" style={{width:900, height:'auto'}}/></div>


## Additional Links

- [What is Azure IoT Edge](https://learn.microsoft.com/en-us/azure/iot-edge/about-iot-edge)
- [Azure IoT Edge supported platforms](https://docs.microsoft.com/en-us/azure/iot-edge/support)
- [Develop your own IoT Edge modules](https://docs.microsoft.com/en-us/azure/iot-edge/module-development)

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
