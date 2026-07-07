---
title: Matter for XIAO nRF54LM20A
description: ''
keywords:
  - xiao
  - nrf54lm20a
  - pin_multiplexing
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/XIAO_nRF54LM20A_Matter.webp
slug: /xiao_nrf54lm20a_with_matter
sku: 100018440
last_update:
  date: 05/26/2026
  author: Zeller
createdAt: '2025-05-26'
updatedAt: '2026-06-15'
url: https://wiki.seeedstudio.com/xiao_nrf54lm20a_with_matter/
---

# Matter for XIAO nRF54LM20A

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/XIAO_nRF54LM20A_Matter.png" style={{width:600, height:'auto'}}/></div>

<div className="table-center">
  <table align="center">
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  Get One Now 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
  </table>
</div>


## Introduction

Powered by the nRF54LM20A SoC, the XIAO nRF54LM20A Seires supports Bluetooth LE, Matter, Thread, Zigbee and 2.4GHz proprietary protocols, delivering a peak data rate of 4 Mbps ideal for low-latency scenarios.

This tutorial uses two XIAO nRF54LM20A boards to verify Matter networking: one serves as a border router connected to Home Assistant, and the other operates as a Matter device joining the Thread network to display simulated temperature and humidity data on the Home Assistant dashboard.

***Thanks to the author [@tutoduino](https://tutoduino.fr/en/tutorials/matter-xiao-mg24/) for the WiKi thoughts***

:::tip

This tutorial is based on VS Code and the nRF Connect Extension. If you are new to them, you can refer to [XIAO nRF54LM20A nRFConnect SDK Usage](https://wiki.seeedstudio.com/xiao_nrf54lm20a_ncs/)

:::

### What is Matter

Matter (formerly CHIP) is a universal application-layer standard developed by the Connectivity Standards Alliance (CSA).

- Cross-vendor interoperability over IP networks (Wi-Fi/Ethernet/Thread)
- Standardized device types (e.g., lights, door locks, thermostats)
- Secure commissioning using QR codes/NFC
- End-to-end encryption with Distributed Compliance Ledger (DCL)

### What is OpenThread

OpenThread is an open-source implementation of the Thread networking protocol. It creates low-power, secure mesh networks for IoT devices using IEEE 802.15.4 radio technology. Key features:

- Built-in IPv6 support (6LoWPAN)
- Self-organizing network topology
- AES-128 encryption for all communications
- Compatible with devices as small as light bulbs or sensors

### What is the relationship between Matter and Thread

***Thanks to the author[@tutoduino](https://tutoduino.fr/en/tutorials/matter-xiao-mg24/) for a very detailed explanation of this point, quoting from it!***

After this short introduction to Matter and Thread, you now understand that Thread and Matter serve different purposes and operate at different layers of the technology stack. To recap:

Thread:

- Thread is a low-power, wireless mesh networking protocol designed for connected home devices. It provides a reliable and secure way for devices to communicate with each other and the internet.
- Thread creates a local network that allows devices to talk to each other even if the internet goes down.

Matter:

- Matter is an application-layer protocol that sits on top of networking protocols like Thread, Wi-Fi, and Ethernet. It aims to simplify and unify the smart home ecosystem by ensuring that devices from different manufacturers can work together seamlessly.
- Matter defines how devices communicate and interact at the application level, focusing on interoperability, security, and ease of use.

Connection between Thread and Matter:

- Matter can use Thread as one of its underlying network protocols. This means that devices using the Matter protocol can communicate over a Thread network.
- The combination of Matter and Thread allows for a robust, secure, and interoperable smart home ecosystem where devices can communicate locally and efficiently.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/TOPPLOGY.jpg" style={{width:900, height:'auto'}}/></div>

## Introduction to [Home Assistant](https://www.home-assistant.io/)

Home Assistant is a powerful open-source home automation platform that allows you to control and monitor your smart home devices from a single, unified interface. It acts as the central hub for your smart home, enabling you to automate routines, monitor sensors, and create a more intelligent living space.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/204.png" style={{width:600, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> Learn More 🖱️</font></span></strong></a>
</div>

## Hardware Preperation

Two XIAO nRF54LM20A Sense are required for hardware preparation.

<div className="table-center">
<table align="center">
    <tr>
        <th>Home Assistant Green</th>
        <th>SeeedStudio XIAO nRF54LM20A × 2</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/Gree_HA.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
            </a>
        </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
</table>
</div>

## Bluetooth Antenna

This board uses an external Bluetooth antenna. To ensure a better quality of Bluetooth signal and enhance your Bluetooth usage experience, it is recommended to install a Bluetooth antenna.
The connection method is shown below:

<div style={{textAlign: 'center'}}>
  <img
    src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/gst_6.gif"
    alt="Bluetooth antenna connection"
    style={{width: 600, height: 'auto'}}
  />
</div>

## Connect to HomeAssistant by Matter

### Install the Add-on

Navigate to Settings -> Apps and select Install app to add the add-on.

1. Add the **Open Thread Border Router** and modify its configuration.

- Go to Settings -> Apps, select Install app to add the add-on, then search for **Open Thread Border Router** and complete the installation.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_1.png" style={{width:800, height:'auto'}}/></div>

2. Add the **Matter Server**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_2.png" style={{width:800, height:'auto'}}/></div>

### Configure Thread routing

Follow the steps below to flash one XIAO nRF54LM20A as a Coprocessor to emulate a border router device.

:::tip

Thread routing devices such as Connect ZBT-1, Connect ZBT-2 or Home Assistant Yellow can also be used.

:::

#### Flash the XIAO nRF54LM20A with RCP Coprocessor firmware

:::tip

This tutorial is based on VS Code and the nRF Connect Extension. If you are new to them, you can refer to [XIAO nRF54LM20A nRFConnect SDK Usage](https://wiki.seeedstudio.com/xiao_nrf54lm20a_ncs/#getting-started-with-ncs)

:::

1. Select Create a new application, choose copy a sample, search for Coprocessor and create the project.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_3.png" style={{width:800, height:'auto'}}/></div>

2. Add and modify device tree configuration files under the boards folder. Disable the I2C configuration used by the PMIC to avoid conflicts, and set the baud rate of UART20 to 1000000.

File path: ~/boards：

- xiao_nrf54lm20a_nrf54lm20a_cpuapp.overlay.

```dts
&uart20 {
        current-speed = <1000000>;
        status = "okay";
        hw-flow-control;
};

/ {
        chosen {
                zephyr,ot-uart = &uart20;
        };
};

&pmic_i2c {
        status = "disabled";
};

&pmic {
        status = "disabled";

        charger {
                status = "disabled";
        };

        regulators {
                status = "disabled";

                LDO1 {
                        status = "disabled";
                };
        };
};
```

- xiao_nrf54lm20a_nrf54lm20a_cpuapp.conf.

```conf
#
# Copyright (c) 2025 Nordic Semiconductor ASA
#
# SPDX-License-Identifier: LicenseRef-Nordic-5-Clause
#

CONFIG_SPI_NOR=n

# Increase Main and shell stack sizes to avoid stack overflow
# while using CRACEN
CONFIG_MAIN_STACK_SIZE=2048
```

3. Build and enable the configuration.

- Configure and build the project.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/matter-1.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/matter-2.png" style={{width:800, height:'auto'}}/></div>

- Flash the firmware using `west flash`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/matter_9_mt5.png" style={{width:800, height:'auto'}}/></div>
<br/>
4. To detect the device in Home Assistant, connect the XIAO nRF54LM20A flashed with the Coprocessor firmware to Home Assistant Green via USB-C.

- Open the Add-on store, locate Open Thread Border Router and configure it. You will see the device named XIAO nRF54LM20A; configure the baud rate and other parameters, then save the settings.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_6.png" style={{width:800, height:'auto'}}/></div>

- Select Start under the Info tab.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_7.png" style={{width:800, height:'auto'}}/></div>

- You can check the configuration status in the Log — the configuration is successful as shown in the figure below.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_8.png" style={{width:800, height:'auto'}}/></div>

- Go to Settings -> Thread to discover the device, which is typically named `ha-thread-c6c8`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_9.png" style={{width:800, height:'auto'}}/></div>

### Configure the Matter device

1. Choose Create a new application, pick copy a sample, search for Matter-Template and create the project.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_10.png" style={{width:800, height:'auto'}}/></div>

2. Modify the device tree files and configuration files.

- Due to hardware differences between the XIAO nRF54LM20A and Nordic’s official evaluation board, revisions to device tree and configuration files are required. The official evaluation board is equipped with an external MX25R64 flash chip, whereas the XIAO nRF54LM20A uses a PY25Q64; corresponding adjustments must be made.

- Files to be added are listed below:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/matter-8.png" style={{width:350, height:'auto'}}/></div>

File path: ~/boards：

- xiao_nrf54lm20a_nrf54lm20a_cpuapp_internal.overlay
- xiao_nrf54lm20a_nrf54lm20a_cpuapp.overlay

<details>

<summary>xiao_nrf54lm20a_nrf54lm20a_cpuapp_internal.overlay</summary>

```dts
/*
 * Copyright (c) 2025 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: LicenseRef-Nordic-5-Clause
 */

/ {
	aliases {
		/* Use watchdog wdt31 as the application watchdog */
		watchdog0 = &wdt31;
	};
};

&py25q64 {
	status = "disabled";
};

&wdt31 {
	status = "okay";
};
```

</details>

<details>

<summary>xiao_nrf54lm20a_nrf54lm20a_cpuapp.overlay</summary>

```dts
/*
 * Copyright (c) 2025 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: LicenseRef-Nordic-5-Clause
 */

/ {
	chosen {
		nordic,pm-ext-flash = &py25q64;
	};

	aliases {
		/* Use watchdog wdt31 as the application watchdog */
		watchdog0 = &wdt31;
	};
};

&py25q64 {
	status = "okay";
};

&wdt31 {
	status = "okay";
};
```

</details>

File path: ~/sysbuild/mcuboot/boards：


<details>

<summary>xiao_nrf54lm20a_nrf54lm20a_cpuapp_internal.conf</summary>

```conf
#
# Copyright (c) 2025 Nordic Semiconductor ASA
#
# SPDX-License-Identifier: LicenseRef-Nordic-5-Clause
#

CONFIG_HW_STACK_PROTECTION=n
CONFIG_BOOT_WATCHDOG_FEED=n

# Disable all debug features
CONFIG_ASSERT_VERBOSE=n
CONFIG_ASSERT_NO_FILE_INFO=y
CONFIG_PRINTK=n

# Bootloader size optimization to fit into 28 KB partition.
# These options can be safely disabled because in this configuration,
# the secondary slot resides in the internal RRAM, so features
# needed to handle the external flash are not needed.
CONFIG_SPI_NOR=n
CONFIG_SPI=n

# Increase the maximum number of sectors to 512 to fit the big image size (> 1024 kB).
CONFIG_BOOT_MAX_IMG_SECTORS=512

# Currently, without tickless kernel, the SYSCOUNTER value after the software
# reset is not set properly and due to that the first system interrupt is not called
# in the proper time - the SYSCOUNTER value is set to the value from before
# reset + 1. Hence, the reboot time increases more and more.
# To avoid it enable tickless kernel for mcuboot.
CONFIG_TICKLESS_KERNEL=y

```

</details>

<details>

<summary>xiao_nrf54lm20a_nrf54lm20a_cpuapp_internal.overlay</summary>

```dts
/*
 * Copyright (c) 2025 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: LicenseRef-Nordic-5-Clause
 */

/* Disable the external flash, as it's not needed
 * for the configuration with secondary slot residing
 * in the internal RRAM.
 */
&py25q64 {
	status = "disabled";
};
```

</details>

<details>

<summary>xiao_nrf54lm20a_nrf54lm20a_cpuapp.conf</summary>

```conf
#
# Copyright (c) 2025 Nordic Semiconductor ASA
#
# SPDX-License-Identifier: LicenseRef-Nordic-5-Clause
#

CONFIG_HW_STACK_PROTECTION=n
CONFIG_BOOT_WATCHDOG_FEED=n

# XIAO nRF54LM20A uses SPI NOR external flash (PY25Q64)
CONFIG_GPIO=y
CONFIG_SPI=y
CONFIG_SPI_NOR=y
CONFIG_SPI_NOR_SFDP_DEVICETREE=y
CONFIG_SPI_NOR_FLASH_LAYOUT_PAGE_SIZE=4096

# Increase the maximum number of sectors to 512 to fit the big image size (> 1024 kB).
CONFIG_BOOT_MAX_IMG_SECTORS=512

# Currently, without tickless kernel, the SYSCOUNTER value after the software
# reset is not set properly and due to that the first system interrupt is not called
# in the proper time - the SYSCOUNTER value is set to the value from before
# reset + 1. Hence, the reboot time increases more and more.
# To avoid it enable tickless kernel for mcuboot.
CONFIG_TICKLESS_KERNEL=y
```

</details>

<details>

<summary>xiao_nrf54lm20a_nrf54lm20a_cpuapp.overlay</summary>

```conf
/*
 * Copyright (c) 2025 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: LicenseRef-Nordic-5-Clause
 */

/ {
	chosen {
		nordic,pm-ext-flash = &py25q64;
	};
};

&py25q64 {
	status = "okay";
};
```

</details>

Project path ~/ :

<details>

<summary>pm_static_xiao_nrf54lm20a_nrf54lm20a_cpuapp_internal.yml</summary>

```yml
mcuboot:
  address: 0x0
  region: flash_primary
  size: 0xA000
mcuboot_pad:
  address: 0xA000
  region: flash_primary
  size: 0x800
app:
  address: 0xA800
  region: flash_primary
  size: 0x125800
mcuboot_primary:
  address: 0xA000
  orig_span: &id001
  - app
  - mcuboot_pad
  region: flash_primary
  size: 0x126000
  span: *id001
mcuboot_primary_app:
  address: 0xA800
  orig_span: &id002
  - app
  region: flash_primary
  size: 0x125800
  span: *id002
mcuboot_secondary:
  address: 0x130000
  orig_span: &id003
  - mcuboot_secondary_pad
  - mcuboot_secondary_app
  region: flash_primary
  size: 0xC0000
  span: *id003
mcuboot_secondary_pad:
  region: flash_primary
  address: 0x130000
  size: 0x800
# Compression rate 34.75%
mcuboot_secondary_app:
  region: flash_primary
  address: 0x130800
  size: 0xBF800
factory_data:
  address: 0x1F0000
  region: flash_primary
  size: 0x1000
settings_storage:
  address: 0x1F1000
  region: flash_primary
  size: 0xC000
```

</details>

<details>

<summary>pm_static_xiao_nrf54lm20a_nrf54lm20a_cpuapp.yml</summary>

```yml
mcuboot:
  address: 0x0
  region: flash_primary
  size: 0xD000
mcuboot_pad:
  address: 0xD000
  region: flash_primary
  size: 0x800
app:
  address: 0xD800
  region: flash_primary
  size: 0x1E2800
mcuboot_primary:
  address: 0xD000
  orig_span: &id001
  - app
  - mcuboot_pad
  region: flash_primary
  size: 0x1E3000
  span: *id001
mcuboot_primary_app:
  address: 0xD800
  orig_span: &id002
  - app
  region: flash_primary
  size: 0x1E2800
  span: *id002
factory_data:
  address: 0x1F0000
  region: flash_primary
  size: 0x1000
settings_storage:
  address: 0x1F1000
  region: flash_primary
  size: 0xC000
mcuboot_secondary:
  address: 0x0
  orig_span: &id003
  - mcuboot_secondary_pad
  - mcuboot_secondary_app
  region: external_flash
  size: 0x1E3000
  span: *id003
mcuboot_secondary_pad:
  region: external_flash
  address: 0x0
  size: 0x800
mcuboot_secondary_app:
  region: external_flash
  address: 0x800
  size: 0x1E2800
external_flash:
  address: 0x1E3000
  size: 0x5DB000
  device: PY25Q64
  region: external_flash
```

</details>

:::tip

For the last two files, you need to create the files yourself and paste the code

:::

#### Description of the purpose of added files

<table>
  <thead>
    <tr>
      <th>File</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>

    <tr>
      <td colspan="2"><strong>1. Board Overlay Files (<code>boards/</code>)</strong><br/>
      Application-level device tree overlays for the XIAO nRF54LM20A.</td>
    </tr>
    <tr>
      <td><code>xiao_nrf54lm20a_nrf54lm20a_cpuapp.overlay</code></td>
      <td>
        <strong>External Flash variant:</strong> Enables PY25Q64 SPI NOR Flash as the OTA secondary slot;<br/>
        enables wdt31 watchdog;<br/>
        declares <code>nordic,pm-ext-flash</code> so the Partition Manager can recognize the external Flash.
      </td>
    </tr>
    <tr>
      <td><code>xiao_nrf54lm20a_nrf54lm20a_cpuapp_internal.overlay</code></td>
      <td>
        <strong>Internal Flash variant:</strong> Disables PY25Q64 (reduces BOM cost and power consumption);<br/>
        places the OTA secondary slot in internal RRAM;<br/>
        enables wdt31 watchdog.
      </td>
    </tr>

    <tr>
      <td colspan="2"><strong>2. MCUboot Configuration Files (<code>sysbuild/mcuboot/boards/</code>)</strong><br/>
      MCUboot is a standalone Zephyr image requiring its own Kconfig and device tree overlay files.</td>
    </tr>
    <tr>
      <td><code>xiao_nrf54lm20a_nrf54lm20a_cpuapp.conf</code></td>
      <td>
        <strong>External Flash — Kconfig:</strong> Enables SPI/SPI_NOR drivers for PY25Q64 access;<br/>
        sets <code>BOOT_MAX_IMG_SECTORS=512</code> for large firmware;<br/>
        enables tickless kernel.
      </td>
    </tr>
    <tr>
      <td><code>xiao_nrf54lm20a_nrf54lm20a_cpuapp.overlay</code></td>
      <td>
        <strong>External Flash — DTS Overlay:</strong> Enables PY25Q64 as <code>pm-ext-flash</code>,
        allowing MCUboot to access the OTA image on external Flash at boot.
      </td>
    </tr>
    <tr>
      <td><code>xiao_nrf54lm20a_nrf54lm20a_cpuapp_internal.conf</code></td>
      <td>
        <strong>Internal Flash — Kconfig:</strong> Disables SPI/SPI_NOR;<br/>
        disables debug output (<code>PRINTK=n</code>, <code>ASSERT=n</code>) to reduce MCUboot size for the 40 KB partition;<br/>
        sets <code>BOOT_MAX_IMG_SECTORS=512</code>.
      </td>
    </tr>
    <tr>
      <td><code>xiao_nrf54lm20a_nrf54lm20a_cpuapp_internal.overlay</code></td>
      <td>
        <strong>Internal Flash — DTS Overlay:</strong> Disables PY25Q64, ensuring MCUboot uses only internal Flash.
      </td>
    </tr>

    <tr>
      <td colspan="2"><strong>3. Static Partition Files (<code>pm_static_*.yml</code>)</strong><br/>
      Static partition tables for the Partition Manager, defining the full Flash layout for MCUboot, APP, OTA, Factory Data, and Settings.</td>
    </tr>
    <tr>
      <td><code>pm_static_xiao_nrf54lm20a_nrf54lm20a_cpuapp.yml</code></td>
      <td>
        <strong>External Flash variant:</strong> <code>mcuboot_secondary</code> (OTA image) resides on external Flash (PY25Q64);<br/>
        APP usable size is <code>0x1E2800</code> (~1.9 MB).
      </td>
    </tr>
    <tr>
      <td><code>pm_static_xiao_nrf54lm20a_nrf54lm20a_cpuapp_internal.yml</code></td>
      <td>
        <strong>Internal Flash variant:</strong> <code>mcuboot_secondary</code> resides on internal Flash;<br/>
        MCUboot reduced to <code>0xA000</code> (40 KB);<br/>
        APP reduced to <code>0x125800</code> (~1.2 MB);<br/>
        OTA image requires compression.
      </td>
    </tr>

  </tbody>
</table>



#### Flash and download to the device

- Proceed with build configuration.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/matter-3.png" style={{width:800, height:'auto'}}/></div>

- Select another XIAO nRF54LM20A as the target device, launch OpenTerminal, and flash the firmware using the `west flash` command.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/matter-4.png" style={{width:800, height:'auto'}}/></div>

### Connect the Matter device using the Home Assistant App.

1. Connect the Matter device and generate the device QR code.

- In the NCS development environment, open the nRF Serial Terminal.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/matter-5.2.png" style={{width:800, height:'auto'}}/></div>
<br/>
- A serial port list pops up at the top of the interface; select the serial port corresponding to XIAO nRF54LM20A.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/matter-6.png" style={{width:800, height:'auto'}}/></div>
<br/>
- Matter device information and the pairing QR code link will be output via serial logs.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/fix/nfc/matter-7.2.png" style={{width:800, height:'auto'}}/></div>
<br/>
- Tap the QR code link directly or copy the link to a web browser separately.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_16.png" style={{width:800, height:'auto'}}/></div>
<br/>
2. Download the Home Assistant App.

- Matter device inclusion into Home Assistant is completed via the mobile application; scan the provided QR code to download the App.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_17.png" style={{width:800, height:'auto'}}/></div>
<br/>
3. Navigate to settings to add the Matter device, then scan the QR code generated in the browser to finish pairing.

<table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_18.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_19.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_20.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_21.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_22.jpg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
</table>

4. Matter device information can be viewed on Home Assistant's browser dashboard.

<table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_23.jpg" style={{width:600, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_24.png" style={{width:600, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_25.png" style={{width:600, height:'auto'}}/></div></td>
    </tr>
</table>

5. Add the device to the dashboard.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_26.png" style={{width:800, height:'auto'}}/></div>
<br/>
6. Real-time data of the Matter device will be displayed on the dashboard.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_27.png" style={{width:800, height:'auto'}}/></div>

## Summary

Following the above procedures, we have set up a Matter over Thread network using two XIAO nRF54LM20A modules and successfully connected the network to Home Assistant. The Matter protocol supports access to a wider range of sensor types, while the above demo only simulates temperature and humidity data acquisition. When integrating other sensor devices, verify whether matching Clusters are defined within the Matter specification. For further details, refer to the official documentation at [Home Assistant Matter](https://www.home-assistant.io/integrations/matter).

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
