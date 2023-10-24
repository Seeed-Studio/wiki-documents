---
description: Getting Started with Ignition Edge
title: Getting Started with Ignition Edge
keywords:
  - Edge
  - Edgebox RPI 200
  - Ignition Edge
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Edgebox-rpi-200-ignition-edge
last_update:
  date: 10/13/2023
  author: Corey Thompson
---
#  Edgebox RPI 200 Getting Started with Ignition Edge

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/EdgeBox-200-Ignition/EdgeBox-200_Ignition_Edge.png" />
</p>

> Capturing, processing, and visualizing critical data at the remote edge of the network can be difficult and expensive. Ignition Edge by Inductive Automation® is a line of limited, lightweight Ignition® software solutions designed specifically for devices used in the field and OEM devices at the edge of the network. With Ignition Edge, edge computing is easier and more affordable than ever, so you can extend your data collection, visualization, and system management all the way to the edge of your network.
>
> — [inductiveautomation.com](https://inductiveautomation.com/ignition/edge)

Ignition Edge offers several products that can be mixed and matched on an edge device to create powerful solutions at the edge of the network:
- **Ignition Edge IIoT**: Publish field-device data through MQTT.
- **Ignition Edge Panel**: Create local HMIs for field devices.
- **Ignition Edge Compute**: Add true edge computing to your network.
- **Ignition Edge Sync Services**: Synchronize data from the edge of the network.
- **Ignition Edge EAM**: Combine with other Edge products for central management.

By embedding Ignition Edge into field and OEM devices at the edge of the network, Ignition superpowers can function even on your most remote devices. The Edgebox RPI 200 is equipped with industrial reliability and hybrid connectivity, such as Digital I/O, RS485, RS232 and powerful wireless communication capabilities such as WiFi, BLE, \*4G, and \*LoRa® which makes it an excellent option to host combinations of the powerful apps from the Ignition Edge collection.

> \*4G and LoRa® modules are not included by default, please purchase the relevant modules accordingly.

## Hardware Prerequisite
- PC / Mac with SSH terminal capability
- PC / Mac with available hard drive capacity to install Ignition's Designer applciations.
- 12-24V DC power supply
- Ethernet cable
- Edgebox RPI 200 x 1

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

<br />

:::note
*This guide assumes your Edgebox is running the factory installation of SenseCraft Edge OS with SSH terminal access from another client device.*
:::

## Installing Ignition Edge

To install Ignition Edge on your device is simple.

:::tip
The default SenseCraft Edge OS is a 32-bit installation, ensure you download the proper installer.
:::

1. Visit [Ignition's Download Page](https://inductiveautomation.com/downloads/)
2. Download the version of the application you wish to use - you will be prompted to enter your information before you can download the package. 
3. Copy the compressed package to your edge device, where you wish it to be installed (I have chosen a location under /opt/)
4. Extract the package at the current location
5. Delete the leftover original package
6. Modify permissions to execute the Ignition start script
7. Launch the Igntion start script

A convenience script has been written that automates these steps. To use it, you simply need to get the ignition edge download/install script. Once you've downloaded the script, mark it as executable and run it. You may need superuser credentials in order to create the necessary directories. Go ahead and grab a coffee, this will take a few minutes to install.

```bash
curl -o download-ignition-edge.sh https://raw.githubusercontent.com/tulsasoftware/reterminal-ignition-edge-panel/main/download-ignition-edge.sh
chmod +x ./download-ignition-edge.sh
./download-ignition-edge.sh
```

### Uninstalling

If you wish to uninstall the package (as installed by the installer script), simply download and execute the uninstall script. Inductive Automation does not suggest a default location for their application, so *this will only work for this custom installation*.

```bash
curl -o uninstall-ignition-edge.sh https://raw.githubusercontent.com/tulsasoftware/reterminal-ignition-edge-panel/main/uninstall-ignition-edge.sh
chmod +x ./uninstall-ignition-edge.sh
./uninstall-ignition-edge.sh
```

## Launching Ignition Edge Gateway For The First Time

When the installation is complete you will need to start the service. You can [setup the gateway to start on boot](#launch-ignition-edge-gateway-on-boot) and perform a reboot of the device or you can choose to start the service manually.

 ```bash
/opt/ignitionedge/ignition.sh start
```

:::tip
You can easily check if the service is running if you are able to load the Ignition Edge Gateway's home page. 
:::

To load the gateway's home page, launch a web browser either on the Edgebox itself at `localhost:8088` OR from another device on the network at `{edgeboxhostname}:8088` OR from anywhere on the network with the IP address of the Edgebox itself at `{edgeboxip}:8088`

<p style={{textAlign: 'center'}}>
  <img src ="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-eula-screenshot.png" />
</p>

### Launch Ignition Edge Gateway On Boot
:::note
It is recommended to launch the gateway's service automatically on boot of the device. There are multiple ways this can be accomplished and it is ultimately up to the user to decide how to do this.
:::

One way to launch the service on boot is to add the launch command to your `.bashrc`. To do this, simply open your `.bashrc` in a text editor of your choice.
```bash
nano ~/.bashrc
```
Append the launch command to the the file
```bash
/opt/ignitionedge/ignition.sh start
```

<p style={{textAlign: 'center'}}>
  <img alt="Launch On Boot Setup" src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-gateway-launch-setup.png" />
</p>

And don't forget to save the file! 
(`ctrl + x` in the example above using nano)

:::warning
This method does not launch the gateway on save, so reboot the Edgebox to ensure the change works as expected.
:::

## Configuring Ignition Edge

Configuring the gateway is a straight-forward process. Proceed by accepting the EULA and then create a default user / password for Ignition. Remember this information as it will be created with admin credentials and be used for system configuration throughout this series.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-create-user.png" />
</p>

:::note
Although Ignition Edge is configured by default to communicate to a master SCADA system, it is not required to use a SCADA server. Ignition Edge is a completely standalone product that is configured to easily tie into a SCADA network in the future if desired.
:::

After you have a user, you will be asked if you would like to change any of the default port configurations for the installation. I do not have a network with any conflicting ports, so I have chosen to accept the defaults. These ports will be used to communicate back to the primary SCADA installation, so if you are configuring to work with an existing installation Ignition, ensure that this page matches your expected values. Note that these are the core ports used for the application, but if you choose to install modules in the future you will likely have more ports to configure later.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-configure-ports.png" />
</p>

You are now ready to initialize and launch the service! This takes a couple minutes to setup and does not require any interaction so you are free to check back later. It will redirect to the designer home page when it is complete and you are free to begin work!

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/reTerminal-DM-Ignition/ignition-edge-launch-screen.png" />
</p>

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
