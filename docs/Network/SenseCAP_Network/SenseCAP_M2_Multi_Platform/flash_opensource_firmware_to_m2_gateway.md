---
description: This wiki will guide you on how to flash open source LoRaWAN® firmware for your M2 gateway. Based on the open source LoRaWAN® firmware, you can deeply customise your M2 gateway.
title: Flash Opensource Firmware to M2 Gateway
image: https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/m2-white.webp
slug: /flash_opensource_firmware_to_m2_gateway
last_update:
  date: 4/22/2025
  author: Leo
---

The SenseCAP M2 gateways represent a cost-effective solution for LoRa gateways, powered by the mature hardware solution MT7628 and the Semtech SX1302 baseband Long Range chip. The specific models are distinguished by the factory-set frequency band (EU868/US915/AS923/AU915), optional module (4G/GPS) and supported LoRa network (LoRaWAN®/Helium network)

This wiki will guide you on how to flash open source firmware for your M2 gateway. Based on the open source firmware, you can deeply customise your M2 gateway, such as adding additional features or changing the operating band (antennas need to be adapted to the band)

:::danger Warning
After flashing the open source firmware, you **CAN NOT** revert to the **factory firmware**.

Seeed studio is **NOT responsible** for any damage to the device caused by the user **using open source firmware or third party firmware**.
:::

## Supported Products List

- <a  href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html" target="_blank"><span> <b>M2 Multi-Platform LoRaWAN Indoor Gateway(SX1302)</b></span></a>
- <a  href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-4G-EU868-p-5599.html" target="_blank"><span> <b>M2 Multi-Platform LoRaWAN Indoor Gateway(SX1302-4G)</b></span></a>
- <a  href="https://www.seeedstudio.com/SenseCAP-M2-Data-Only-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5339.html" target="_blank"><span> <b>M2 Data-Only LoRaWAN Indoor Gateway(SX1302)</b></span></a>

## Prepare the firmware

### Download the pre-built firmware

If you want to experience open source firmware at your convenience, we provide some compiled firmwares. You can download from <a  href="https://github.com/Seeed-Solution/LoRa_Gateway_OpenWRT/releases" target="_blank"><span> Seeed-Solution/LoRa_Gateway_OpenWRT/Release</span></a>

:::tip Note
Check the suffix of the .bin file to verify that the firmware is compatible with your M2 gateway

E.g. the **openwrt-...-EU868-4G.bin** firmware is compiled for M2 gateways operating in the **EU868 band with a 4G module**
:::

### Build your firmware

If your gateway does not compatitate with our pre-built firmware or if you want to develop it further, you can build your own firmware as follows

To build your own firmware you need a **GNU/Linux, BSD or MacOSX system** (case sensitive filesystem required). Cygwin is unsupported because of the lack of a case sensitive file system

**Step 1:** clone the source code from <a  href="https://github.com/Seeed-Solution/LoRa_Gateway_OpenWRT" target="_blank"><span> Seeed-Solution/LoRa_Gateway_OpenWRT</span></a>

```git
git clone https://github.com/Seeed-Solution/LoRa_Gateway_OpenWRT.git
```

**Step 2:** Install prerequisite packages refer to <a  href="https://openwrt.org/docs/guide-developer/toolchain/install-buildsystem" target="_blank"><span> Build system setup</span></a>

:::caution Note
Please perform the following steps with a **non-root** user.
:::

**Step 3:** Go to the source code folder, Run `./scripts/feeds update -a` to obtain all the latest package definitions defined in feeds.conf / feeds.conf.default

**Step 4:** Run `./scripts/feeds install -a` to install symlinks for all obtained packages into package/feeds/

**Step 5:** Run `cp diffconfig-sensecap-general .config` to use SenseCAP diff file, and run `make defconfig` to expand full config

**Step 6:** Run `make menuconfig` to select your SenseCAP Hardware information

- SenseCAP Hardware->Have 4G ( Whether it contains 4G Hardware)

- SenseCAP Hardware->Have GPS ( Whether it contains GPS Hardware)

- SenseCAP Hardware->REGION (select your default REGION)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource1.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource2.png" alt="pir" width={800} height="auto" /></p>

**Step 7:** Run `make` to build your firmware

This will download all sources, build the cross-compile toolchain and then cross-compile the GNU/Linux kernel & all chosen applications for your target system

After compiling, you can find the firmware named `openwrt-21.02.0-ramips-mt76x8-sensecap_wm7628n-squashfs-sysupgrade.bin` in the `<prj>/bin/targets/ramips/mt76x8/` directory

## Flash the firmware

You can flash the firmware into your gateway in one of three ways

### Flash firmware via Luci

Login Luci and navigate to **System** > **Backup/Flash Firmware**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource5.png" alt="pir" width={800} height="auto" /></p>

Scoll down and navigate to **Local upgrade** and click **Flash image...**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource6.png" alt="pir" width={800} height="auto" /></p>

Browse folders and upload firmware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource7.png" alt="pir" width={800} height="auto" /></p>

When the upload is complete, confirm that the uploaded firmware information is correct and click **Continue**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource8.png" alt="pir" width={800} height="auto" /></p>

After that, the gateway will start installing the firmware and the LED will enter the orange slow blinking state until the installation is completed.

### Flash firmware via TFTP

Before you begin, you will need to install the TFTP server tool on your computer and place the firmware in the appropriate directory.

**Step 1:** Use a Type-C cable to connect the device to the computer, and use a network cable to place the device and the computer in the same LAN.

**Step 2:** Connect to the device using the serial port called `USB-SERIAL CH340` with **baudrate 57600**.

**Step 3:** Restart the device. When the device enters uboot, **select command 2** to enter the system update.

**Step 4:** Enter **device ip**, where the device ip network segment must be the network segment of your own network; enter **server ip**, which is the IP of your computer, and enter **the name of the firmware** to be flashed (the file suffix must be included).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource3.png" alt="pir" width={800} height="auto" /></p>

**Step 5:** Wait for the firmware update to complete. The gateway will start installing the firmware and the LED will enter the orange slow blinking state until the installation is completed.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource4.png" alt="pir" width={800} height="auto" /></p>

### Flash firmware via Serial

:::tip
Before you begin the following step, we recommend download the lastest version of [TeraTerm](https://github.com/TeraTermProject/teraterm/releases) as the following operations in this wiki are all based on TeraTerm.
:::

**Step 1:** Use a Type-C cable to connect the device to the computer.

**Step 2:** Connect to the device using the serial port called `USB-SERIAL CH340` with **baudrate 57600**.

**Step 3:** Restart the device. When the device enters uboot, **select command 0** to enter the system update.

**Step 4:** Switch the buadrate to 230400, then press ENTER. The device will then prompt `Ready for binary (kermit) download to 0x80100000 at 230400 bps...`

**Step 5:** Upload the firmware using kermit protocol. Teraterm has provide kermit transmit tool. you can refer to the image upload firmware below.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource12.png" alt="pir" width={800} height="auto" /></p>

**Step 6:** Wait for the firmware to finish uploading, after which the device will prompt `Switch baudrate to 57600 bps and press ESC...`. Follow the device prompts. Then device will automatically install the firmware and reboot.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource11.png" alt="pir" width={800} height="auto" /></p>

## Login into Console

After the firmware is installed, the device will automatically open an AP hotspot, name **SenseCAP_XXXX**

Use your phone or computer to connect to the hotspot, no password

Enter **192.168.168.1** in the browser to enter the LuCI interface

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource9.png" alt="pir" width={800} height="auto" /></p>

Login into console with username **root** and **no password**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/M2_Multi-Platform/opensource10.png" alt="pir" width={800} height="auto" /></p>

## Resources

- \[**Website**\] <a  href="https://koen.vervloesem.eu/blog/how-to-install-alternative-firmware-to-the-sensecap-m2-data-only-lorawan-indoor-gateway/" target="_blank"><span> How to install alternative firmware to the SenseCAP M2 Data Only LoRaWAN Indoor Gateway - By Koen Vervloesem</span></a>
- \[**Website**\] <a  href="https://github.com/Seeed-Solution/LoRa_Gateway_OpenWRT" target="_blank"><span> GitHub-Seeed-Solution/Lora_Gateway_OpenWRT</span></a>
- \[**Website**\] <a  href="https://openwrt.org/" target="_blank"><span> OpenWrt offical website</span></a>
- \[**PDF**\] <a  href="https://files.seeedstudio.com/products/SenseCAP/M2OpensourceHarewareDescription.pdf" target="_blank"><span> M2 Gateway Hardware Description</span></a>

## Tech Support

**Having trouble with open source firmware? Feel free to discuss it with community members via the Discord link below.**

<div class="button_tech_support_container">
<a href="https://discord.gg/nFByJZnC5H" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
