---
description: Enjoy reliable internet access anywhere with a Raspberry Pi 5, OpenWrt, and a 4G LTE HAT. Learn how to create a high-performance portable hotspot for home, travel, and remote locations.

title: Setting Up OpenWrt on Raspberry Pi 5 with a 4G LTE Module
keywords:
  - Raspberry Pi Hat
  - Getting started
  - Hotspot
  - Mobile Data
  - 4G LTE
  - OpenWRT
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mobile-cop.webp
slug: /4g_lte_hat_and_raspberry_pi_router_with_openwrt
last_update:
  date: 12/25/2024
  author: Kasun Thushara
---

## Introduction

The Raspberry Pi 5, paired with **OpenWrt** and a 4G LTE HAT , offers a powerful and flexible solution for creating a portable hotspot. This setup is ideal for providing internet access in remote locations, supporting IoT devices, or creating a personal wireless network on the go. OpenWrt’s customizability ensures seamless integration with 4G LTE modules, allowing users to harness the full potential of Raspberry Pi 5 as a reliable and high-performance wireless router. Whether for home, travel, or professional use, this guide will help you transform your Raspberry Pi 5 into a fully functional hotspot powered by OpenWrt and 4G LTE connectivity.

## Prerequisites

### Hardware Requirements

<div class="table-center">
  <table align="center">
    <tr>
        <th>Raspberry Pi 5</th>
         <th>Raspberry Pi 4G LTE CAT4 HAT</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102110919-raspberry-pi-5-8gb-45font.jpg" style={{width:250, height:'auto'}}/></div></td>
         <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_23_1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-CAT-4-EG25-GL-HAT-for-Raspberry-Pi-p-6325.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## Build the OpenWrt Image

### Choose the OpenWrt Snapshot

To work with a 4G LTE module, certain dependencies are required. The OpenWrt Firmware Selector provides the flexibility to include these dependencies during the image creation process, allowing you to compile a customized firmware. Without this approach, you would need an alternative internet source to install the dependencies on the Raspberry Pi after setup. Therefore, it is recommended to build a firmware image that already includes the necessary dependencies.

- **Go to the [OpenWrt firmware selector](https://firmware-selector.openwrt.org/?version=SNAPSHOT&target=bcm27xx%2Fbcm2712&id=rpi-5) and choose the snapshot version.**

- Snapshots are updated frequently and are ideal for advanced users.

- Click the `Customize installed packages and/or first boot script`.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-build-1.PNG"
    style={{ width: 500}}
  />
</div>

Ensure the following packages are included during the custom build process:

- kmod-usb-net-cdc-ether
- kmod-usb-serial-option
- picocom
- minicom

### Steps to Build

- Add the required packages to your configuration file.
- Compile the OpenWrt firmware.
- Download the generated factory image after compilation.

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-build.PNG"
    style={{ width: 500}}
  />
</div>

## Install OpenWrt on Raspberry Pi 5

- Burn the compiled image to an SD card using tools like **Balena Etcher**.
- Insert the SD card into the Raspberry Pi 5.
- Connect your Raspberry Pi to a 4G LTE modul

### Check Device Connection

Access the Raspberry Pi using SSH:

```bash
ssh root@192.168.1.1
```

### Verify Device Details

- Use dmesg to check for connected devices:

```bash
dmesg | grep usb
```

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-dmsg.PNG"
    style={{ width: 500}}
  />
</div>

- View USB details:

```bash
cat/sys/kernel/debug/usb/devices
```

:::note
This will display information about the manufacturer, product, and other device-specific details.Please ensure the module is powered on.
:::

## Configure the LTE Module

### Use Minicom to Adjust Settings

Open **Minicom**

```bash
minicom -s
```

You will be find this kind of interface . Select Serial port setup by arrow keys

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-minicom-serial.PNG"
    style={{ width: 500}}
  />
</div>

Configure settings:

- Set the baud rate to match your 4G module (e.g., 9600).
- Select the correct COM port (e.g., /dev/ttyUSB2).

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-minicom.PNG"
    style={{ width: 500}}
  />
</div>

- And Save setup as default

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-minicom-save.PNG"
    style={{ width: 500}}
  />
</div>

### Enable ECM / Dial-Up Mode

Send the following AT commands to configure the USB networking mode:

```bash
minicom -D /dev/ttyUSB2
```

```bash
AT+QCFG="usbnet"
AT+QCFG="usbnet",1 
```

### Add a New Network Interface

- Log in to the OpenWrt LuCI web interface via web browser **192.168.1.1**.
- Go to **Network > Interfaces > Add New Interface**.
- Set up the interface:
  - Select the detected device (**eth1** or **usb0**).
  - Use the **DHCP Client** protocol.
  - Name the interface (e.g., **USB_Modem**).

<div style={{ textAlign: 'center' }}>
  <img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-new-interface.PNG"
    style={{ width: 500}}
  />
</div>

- Configure firewall settings:
  - Assign the interface to the WAN zone.

<div style={{ textAlign: 'center' }}>  
<img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-firewall-interface.PNG"
    style={{ width: 500}}
  />
</div>

- Under DHCP Server, enable Ignore Interface.

### Set Up a Wireless Access Point

- In the LuCI web interface, navigate to **Network > Wireless > Add**.

<div style={{ textAlign: 'center' }}>  
<img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-wireless.PNG"
    style={{ width: 500}}
  />
</div>

- Configure the new wireless interface:
  - **SSID**: Keep the default or customize it.
  - **Mode**: Access Point.
  - **Network**: LAN.

<div style={{ textAlign: 'center' }}>  
<img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-wireless-settings.PNG"
    style={{ width: 500}}
  />
</div>

- For **Wireless Security**
  - Set encryption to **WPA2**.
  - Create a strong password.

<div style={{ textAlign: 'center' }}>  
<img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-password-wireless.PNG"
    style={{ width: 500}}
  />
</div>

- Reboot the device.

### Test the Wireless Network

- Your wireless SSID should now be visible on nearby devices.
- Connect using the configured password to access the 4G LTE internet.

<div style={{ textAlign: 'center' }}>  
<img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/openwrt-connection.PNG"
    style={{ width: 500}}
  />
</div>

<div style={{ textAlign: 'center' }}>  
<img
    src="https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/mobile-cop.png"
    style={{ width: 500}}
  />
</div>

## Resources

- **[Web Page]** [LTE EG25-G](https://www.quectel.com/product/lte-eg25-g/)

- **[Web Page]** [OpenWRT Uses cdc_ether driver based dongles for WAN connection](https://openwrt.org/docs/guide-user/network/wan/wwan/ethernetoverusb_cdc)

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
