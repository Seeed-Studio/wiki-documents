---
title: Matter for XIAO nRF54LM20B
sidebar_label: Matter for XIAO
description: ''
keywords:
  - xiao
  - nrf54lm20b
  - matter
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/getting_start/xiao_nrf54lm20b_matter.webp
slug: /xiao_nrf54lm20b_with_matter
sku:
last_update:
  date: 11/10/2026
  author: Brandy
createdAt: '2026-10-19'
updatedAt: '2026-11-10'
url: https://wiki.seeedstudio.com/xiao_nrf54lm20b_with_matter/
---

# Building a Matter over Thread Network with XIAO nRF54LM20B and Home Assistant

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/XIAO_nRF54LM20B_Wiki_Banners/XIAO_nRF54LM20B_Matter_Usage.png" style={{width:600, height:'auto'}}/></div>

## Introduction

Matter is a smart-home application-layer connectivity standard developed by the Connectivity Standards Alliance (CSA) so that smart-home devices from different vendors can communicate over a single unified protocol. Thread is a low-power wireless mesh network protocol designed for smart-home devices, with IPv6 support, that can serve as the underlying transport for Matter devices. The relationship between the two is that Matter handles the application layer — what gets said — while Thread handles the network layer — how it gets delivered — and Matter over Thread simply runs Matter on top of Thread.

This tutorial builds a Matter over Thread network around a Home Assistant Green, using only two XIAO nRF54LM20B boards for the whole setup. One board runs Thread RCP firmware and acts as the Thread radio co-processor; the other runs a Matter application and acts as the Matter over Thread end device. The Home Assistant Green runs the OpenThread Border Router and the Matter Server, taking care of Thread network and Matter device management.

The RCP configuration flow follows the Coprocessor section of the [XIAO nRF54LM20A Matter tutorial](https://wiki.seeedstudio.com/xiao_nrf54lm20a_with_matter/), but both boards here are 20B, so the build target and board-level configuration are set for the 20B. Note that although the two 20B boards are identical hardware, they take on different roles and run different firmware — one is flashed with the RCP firmware to act as the radio co-processor for the OTBR, the other is flashed with the Matter application to act as the end device, and the two projects and their configurations must not be mixed up.

:::tip

This tutorial is based on VS Code and the nRF Connect extension. If you have not used this toolchain before, start with the [XIAO nRF54LM20B nRF Connect SDK guide](https://wiki.seeedstudio.com/xiao_nrf54lm20b_ncs/).

:::

### System Architecture

<div className="table-center">

| Device | Role | Main Function |
|---|---|---|
| Home Assistant Green | Matter controller and Thread Border Router host | Runs the Matter Server and OpenThread Border Router |
| XIAO nRF54LM20B (RCP) | Thread RCP | Provides 802.15.4 radio for the OpenThread Border Router |
| XIAO nRF54LM20B (end device) | Matter end device | Runs the Matter application and joins the Thread network |

</div>

## Hardware Preparation

Building this Matter over Thread environment takes one Home Assistant Green and two XIAO nRF54LM20B boards: one flashed with the RCP firmware as the Thread co-processor, one flashed with the Matter application as the end device.

<!-- TODO: replace the placeholder 20A Sense link and image below once the official 20B product link and product photo are available -->
<div className="table-center">
<table align="center">
    <tr>
        <th>Home Assistant Green</th>
        <th>Seeed Studio XIAO nRF54LM20B × 2</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/HA_OpenThread/Gree_HA.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/1X1A9197.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Home-Assistant-Green-p-5792.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
            </a>
        </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
            <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
            </a>
        </div></td>
    </tr>
</table>
</div>

You will also need two 2.4 GHz antennas (to improve radio communication), two USB-C data cables (to connect the RCP, the dev computer, and for power), and a phone with the Home Assistant Companion App installed (to complete Matter commissioning).

Both XIAO boards need their 2.4 GHz antennas attached. For the first test, place the two boards close together and away from metal obstructions, to keep the radio link from interfering with the first commissioning.

## 1. Prepare Home Assistant

This tutorial uses a Home Assistant Green as the smart-home control center. Open Home Assistant and go to **Settings → Apps** to install these two applications: OpenThread Border Router and Matter Server.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/matter/1.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/matter/2.png" style={{width:800, height:'auto'}}/></div>

If the Matter integration is not configured yet, go to **Settings → Devices & services → Add Integration → Matter** and follow the on-screen prompts to set up the integration and connect it to the Matter Server. Menu names may differ slightly between Home Assistant versions — on older versions, Apps may appear as Add-ons.

## 2. Configure the Thread Border Router

The Thread Border Router bridges the Thread network and the IP network so that Home Assistant can talk to Thread devices. In this setup, one of the XIAO nRF54LM20B boards runs the RCP firmware to give the OTBR its Thread radio.

### 2.1 Flash the RCP Firmware onto the XIAO nRF54LM20B

An RCP project that already includes the board-level changes described below (USB-CDC Spinel, PMIC disabled, UART20 adjustments) can be downloaded directly from this repository:
<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/XIAO_nRF54LM20B_wiki_examples/tree/main/13_matter/coprocessor_1" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Coprocessor Project</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>


The RCP configuration flow here follows the Coprocessor section of the [XIAO nRF54LM20A Matter tutorial](https://wiki.seeedstudio.com/xiao_nrf54lm20a_with_matter/) (disabling the PMIC I2C, setting the UART20 baud rate to 1000000, and so on), with the difference that the build target is the 20B. In VS Code with the nRF Connect extension:

1. Choose **Create a new application**.
2. Choose **Copy a sample**.
3. Search for and select the matching **Coprocessor** sample.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/matter/3.png" style={{width:800, height:'auto'}}/></div>

4. Create the project and select the XIAO nRF54LM20B build target `xiao_nrf54lm20b/nrf54lm20b/cpuapp`.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/matter/4.png" style={{width:800, height:'auto'}}/></div>

5. Add the matching board-level configuration files (PMIC I2C disabled, UART20 baud rate set to 1000000).
6. Build the project.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/matter/5.png" style={{width:800, height:'auto'}}/></div>

#### RCP Board-level Changes for the 20B



The official Coprocessor sample uses a physical UART by default; on the 20B this has to be switched to Spinel-over-USB-CDC, and the on-board PMIC has to be handled. Three files change:

**Board overlay** (`boards/xiao_nrf54lm20b_nrf54lm20b_cpuapp.overlay`): point the OpenThread Spinel channel at the USB CDC ACM, and disable the unused UART20 and PMIC subtrees:

```devicetree
&uart20 { current-speed = <1000000>; status = "disabled"; };

/ {
    chosen { zephyr,ot-uart = &cdc_acm_uart; };   /* Spinel NCP over USB CDC */
};

&pmic_i2c { status = "disabled"; };
&pmic      { status = "disabled"; charger { status = "disabled"; };
             regulators { status = "disabled"; LDO1 { status = "disabled"; }; }; };
```

**Board conf** (`boards/xiao_nrf54lm20b_nrf54lm20b_cpuapp.conf`): enable the nRF54L USB CDC ACM device stack, turn on logging for boot diagnostics, and at the same time silence the USB driver's log spam so it does not corrupt the Spinel HDLC frames:

```kconfig
CONFIG_SPI_NOR=n
CONFIG_MAIN_STACK_SIZE=2048                       # prevent stack overflow under CRACEN
CONFIG_USB_DEVICE_STACK_NEXT=y                    # nRF54L uses the next device stack
CONFIG_CDC_ACM_SERIAL_INITIALIZE_AT_BOOT=y
CONFIG_LOG=y
CONFIG_UDC_DRIVER_LOG_LEVEL_OFF=y                 # silence "Prepare RX" log spam
```

**`src/main.c`**: in RCP mode the Spinel NCP runs on the OpenThread work queue, so `main()` has nothing to do — put it to sleep forever so heartbeat text does not interfere with the OTBR's HDLC decoding; print the ot-uart device status once at boot for diagnostics:

```c
static const struct device *const ot_uart_diag =
	DEVICE_DT_GET(DT_CHOSEN(zephyr_ot_uart));

int main(void)
{
	LOG_INF(WELCOME_TEXT);
	LOG_INF("ot-uart device: %s, ready=%d",
		ot_uart_diag->name, device_is_ready(ot_uart_diag));
#if defined(CONFIG_RCP_SAMPLE_HCI)
	run_hci();
#endif
	k_sleep(K_FOREVER);   /* keep CDC carrying only Spinel HDLC frames */
	return 0;
}
```

This way the same USB cable carries Spinel to the OTBR and also exposes a one-shot boot diagnostic line on the serial port.

Flash the built RCP firmware onto this XIAO nRF54LM20B. Note that the RCP firmware and the Matter end-device firmware that comes later are two different projects, and their board-level configurations cannot be swapped between them.

### 2.2 Connect the RCP to Home Assistant Green


Use a USB-C data cable to connect the XIAO nRF54LM20B flashed with the RCP firmware to the Home Assistant Green. Go to **Settings → Apps → OpenThread Border Router → Configuration**, select the serial device that the system identified for this XIAO nRF54LM20B, set the serial parameters as in the table below, save, and start the OpenThread Border Router.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/matter/7.png" style={{width:800, height:'auto'}}/></div>

### 2.3 Check the OTBR Connection Status

Open the **Log** page of the OpenThread Border Router application and confirm that the RCP is responding. Look in particular at whether the Spinel RESET and property requests get responses, whether `otbr-agent successfully started` and `Thread version 1.4.0` appear, and whether the Thread network interface `wpan0` initializes successfully. The exact log content varies with firmware and software versions. If the OTBR can communicate with the RCP normally, Home Assistant can already use this 20B as its Thread radio interface.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/matter/8.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/matter/9.png" style={{width:800, height:'auto'}}/></div>


### 2.4 Check the Thread Network in Home Assistant

Go to **Settings → Devices & services → Thread** and confirm that Home Assistant has discovered the Thread network and that the OpenThread Border Router shows up correctly. If there is more than one Thread network, set the one you want to use as the Preferred Thread Network. The Thread network name, PAN ID, and Channel depend on the current network configuration and differ between environments.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/matter/10.png" style={{width:800, height:'auto'}}/></div>


## 3. Build a Matter Application for the XIAO nRF54LM20B

The other XIAO nRF54LM20B runs the Matter application, and this tutorial uses the Matter Template sample from the nRF Connect SDK. A Matter Template project that already includes the 20B board-level changes can be downloaded directly from this repository:
<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/XIAO_nRF54LM20B_wiki_examples/tree/main/13_matter/template_1" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Template Project</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

### 3.1 Create the Matter Template Project

In VS Code with the nRF Connect extension, choose **Create a new application** → **Copy a sample**, search for **Matter-Template**, and create the project with the XIAO nRF54LM20B build target `xiao_nrf54lm20b/nrf54lm20b/cpuapp`. Confirm that the installed SDK already includes board support for the XIAO nRF54LM20B.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/matter/11.png" style={{width:800, height:'auto'}}/></div>



### 3.2 Check the Board-specific Configuration

The external flash on the XIAO nRF54LM20B is a PY25Q128HA (16 MB), which is different from both the Nordic official DK and the PY25Q64 (8 MB) used in the 20A Matter tutorial. So do not copy the `xiao_nrf54lm20a_nrf54lm20a_cpuapp.overlay`, the `xiao_nrf54lm20a_nrf54lm20a_cpuapp_internal.overlay`, the matching 20A MCUboot configuration files, or the 20A static partition configuration files (`pm_static_*.yml`) straight into the 20B project. Use the matching 20B board definition and flash configuration instead — the application, MCUboot, and partition layout must match the actual board hardware and bootloader.

<div className="table-center">

| Board | External Flash |
|---|---|
| XIAO nRF54LM20A | PY25Q64, 8 MB |
| XIAO nRF54LM20B | PY25Q128HA, 16 MB |

</div>

#### Matter Template Changes for the 20B

On top of the official Matter Template, the 20B changes come down to five spots: the external flash node, the static partition table, the MCUboot board configuration, the application-layer startup progress LED, and the project configuration.

**1. External flash node replacement** (all board overlays and MCUboot overlays): replace the official DK `&mx25r64` with the 20B on-board `&py25q128` everywhere, and update the partition manager external flash device name to `PY25Q128`:

```devicetree
/ { chosen { nordic,pm-ext-flash = &py25q128; }; };
&py25q128 { status = "okay"; };
```

**2. Static partition table** (`pm_static_xiao_nrf54lm20b_nrf54lm20b_cpuapp.yml`): the 20B uses a preinstalled MCUboot, so slot-0 starts at 0x6000 (not the DK's 0xD000), the partitions are rearranged accordingly, and the external NOR secondary slot is expanded to 16 MB:

```text
mcuboot:         0x0,      size 0x6000       # DK original 0xD000
app:             0x6800,   size 0x1BD800
firmware_loader: 0x1C4000, size 0x1D000      # replaces original factory_data
settings_storage:0x1E1000, size 0x1C000
external_flash:  0x1E3000, size 0xE1D000     # PY25Q128 16 MB, device=PY25Q128
```

The built-in RRAM configuration (`*_cpuapp_internal.yml`) also compresses the secondary image to fit the smaller built-in slot.

**3. MCUboot board configuration** (`sysbuild/mcuboot/boards/xiao_*.conf`): keep the DK's SPI NOR and tickless settings, and additionally disable the firmware loader GPIO entrance:

```kconfig
CONFIG_BOOT_FIRMWARE_LOADER_ENTRANCE_GPIO=n
CONFIG_BOOT_MAX_IMG_SECTORS=512
CONFIG_TICKLESS_KERNEL=y
```

**4. Application-layer startup progress LED** (`src/app_task.cpp` / `app_task.h` / `main.cpp`): after `Board::Init()` succeeds, blink the on-board LED a number of times to mark three startup phases; on startup failure, fast-blink the LED to signal the error and keep USB CDC alive for diagnostics:

```cpp
// app_task.cpp — Init() three-stage progress
sLedReady = true;  FlashLedTimes(1);                 // 1: onboard peripherals ready
Nrf::Matter::RegisterEventHandler(...);
FlashLedTimes(2);                                   // 2: Matter event handler registered
ReturnErrorOnFailure(Nrf::Matter::StartServer());
FlashLedTimes(3);                                   // 3: server started

// main.cpp — no longer exits on failure
AppTask::Instance().IndicateFatalError();           // LED fast-blink error
while (true) { k_sleep(K_SECONDS(1)); }             // keep CDC/shell available for diagnostics
```

**5. Project configuration** (`prj.conf` / `sysbuild.conf`): temporarily use the NONE backend to bypass the factory-data loader while debugging a crash, and adopt overwrite-only upgrades (no swap):

```kconfig
# prj.conf
CONFIG_CHIP_FACTORY_DATA_NONE=y
CONFIG_CHIP_FACTORY_DATA_BUILD=n
CONFIG_BOOTLOADER_MCUBOOT=y

# sysbuild.conf
SB_CONFIG_PARTITION_MANAGER=y
SB_CONFIG_MCUBOOT_MODE_OVERWRITE_ONLY=y
SB_CONFIG_MATTER_FACTORY_DATA_GENERATE=n            # NCS 3.3 controlled via sysbuild option
```

After these changes, the `Matter application starting` and `matter server started, entering main loop` lines you see on the serial port in section 4 are the output of the `LOG_INF` calls above; if startup stalls, the LED blink count points directly to which step it stopped at.

### 3.3 Build and Flash the Firmware

Build the Matter Template project with the 20B build target and configuration. The 20B uses a preinstalled MCUboot bootloader; when you update the application over the factory USB DFU, the firmware image must already be signed and in the format the bootloader expects — do not flash another board's MCUboot firmware onto the 20B. To enter Bootloader USB load mode, hold Button 0 while powering or resetting the board, then upload the application image over the USB CDC ACM interface with MCUmgr.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/matter/12.png" style={{width:800, height:'auto'}}/></div>

Once the firmware is flashed, connect the XIAO nRF54LM20B to the dev computer and open a serial terminal.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/matter/13.png" style={{width:800, height:'auto'}}/></div>

Select the serial port.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/matter/14.png" style={{width:800, height:'auto'}}/></div>

## 4. Get the Matter Commissioning QR Code

After the Matter application starts, it prints device information and commissioning data over the serial port. Look for these startup lines in particular:

```text
Matter application starting
OpenThread started: OK
Setting OpenThread device type to MINIMAL END DEVICE
Matter server started, entering main loop
CHIPoBLE advertising started
```

The device then prints something like:

```text
Device Configuration:
  Vendor Id: ...
  Product Id: ...
  Product Name: Matter Template
  Setup Pin Code: ...
  Setup Discriminator: ...

SetupQRCode: [...]
Manual pairing code: [...]
```

Here the Vendor ID is the vendor identifier, the Product ID is the product identifier, the Product Name is the product name, the Setup Pin Code is the Matter commissioning PIN, the Setup Discriminator is the commissioning discriminator, the SetupQRCode is the data behind the commissioning QR code, and the Manual pairing code is the manual pairing code. These values are generated by the running firmware — when you do this yourself, use the output from your own board's serial port, and do not reuse the QR code or pairing code from another sample.

The serial output usually also includes a URL for generating the commissioning QR code. Copy that URL from the serial terminal, open it in a browser, and the page shows the matching Matter commissioning QR code, which you keep for the Home Assistant commissioning later.



<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/matter/15.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/matter/16.png" style={{width:800, height:'auto'}}/></div>

## 5. Add the XIAO nRF54LM20B to Home Assistant

Before you start commissioning, make sure these conditions are met: the Home Assistant Matter integration is configured, the Matter Server is running, the OpenThread Border Router is running, the XIAO nRF54LM20B is powered on, the Matter application has started and is broadcasting commissioning information, and Home Assistant can already use the matching Thread network.

### 5.1 Start Matter Commissioning


1. Download and open the Home Assistant phone app.

- Matter devices join Home Assistant through the phone app; scan the QR code on the page to download the app.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_17.png" style={{width:800, height:'auto'}}/></div>
<br/>
2. In the app, go to the add-device setting and scan the commissioning QR code generated in section 4 to complete pairing.

<table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_18.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_19.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_20.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_21.jpg" style={{width:200, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/mt_22.jpg" style={{width:200, height:'auto'}}/></div></td>
    </tr>
</table>


### 5.2 Wait for Commissioning to Complete

Matter commissioning is not just scanning a QR code and being done — it runs through several security authentication and network configuration steps: establishing a PASE secure session, reading device information, arming the Commissioning Fail-safe, performing Device Attestation, exchanging certificates and operational credentials, adding the device to the Matter Fabric, configuring or confirming the device's network connection, and finally completing commissioning and disarming the Fail-safe. Note in particular that a successful QR scan, a successful device discovery, or even a successfully established PASE session do not mean commissioning is finished — wait for the whole flow to end, and cross-check the logs on both the device side and the Home Assistant side to confirm.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/matter/18.png" style={{width:800, height:'auto'}}/></div>

## 6. Verify the Device Connection Status

After commissioning succeeds, go to **Settings → Devices & services → Matter** and check whether the Matter integration has registered the new device; you can also go to **Settings → Devices & services → Devices** for the full device list. The name the device shows in Home Assistant may not exactly match the `Product Name` in the firmware, so do not rely on searching for `Matter Template` to tell whether the device is there.

### 6.1 Check the Thread Connection via Device Logs

Look at the XIAO nRF54LM20B serial log to confirm the device has joined the Thread network. Look in particular for:

```text
Device Role: CHILD
SRP update succeeded
```

`Device Role: CHILD` means the device has attached to the Thread network as a child device, and `SRP update succeeded` means the device has updated its service registration with the Thread SRP Server. If the device stays in the `DETACHED` state, it has not attached to the Thread network yet.

### 6.2 Check the Matter Commissioning Result via Device Logs

After Matter commissioning succeeds, the device log should show lines like these:

```text
CASE Session established
Received CommissioningComplete
Metadata for Fabric persisted to storage
Fail-safe cleanly disarmed
Commissioning completed successfully
```

These mean respectively that the CASE secure session was established, the device received the commissioning-complete command, the Fabric information was saved to device storage, the Fail-safe was cleanly disarmed, and the Matter commissioning flow completed. Of these, `Commissioning completed successfully` is the key line for confirming that Matter commissioning finished on the device side.

### 6.3 Commissioning Result

Back in Home Assistant, you can confirm that the XIAO nRF54LM20B has been registered as a Matter device, and that it reports data on the device panel and dashboard.

<div className="table-center">
<table align="center">
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/matter/20261110-152043.726-6.jpg" style={{width:300, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/matter/20261110-152043.726-7.jpg" style={{width:300, height:'auto'}}/></div></td>
    </tr>
</table>
</div>


#### Enable Test-net DCL

If you are working with a trusted dev board and test firmware, you can enable test-network certificate support with these steps: go to **Settings → Apps → Matter Server** → **Configuration**, find the **Enable test-net DCL usage** option and turn it on, save the configuration, restart the Matter Server, and then run through the Matter commissioning flow again. Once enabled, the Matter Server can use the PAA root certificates and related device information from the test-network DCL.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/matter/17.png" style={{width:800, height:'auto'}}/></div>

:::note

This option is mainly for development and test environments, and should only be turned on after confirming that the device and its firmware are from a trusted source. It does not mean the device has passed formal Matter production certification, and it cannot replace the formal certification process.

:::

## Summary

This tutorial built a Matter over Thread test environment with two XIAO nRF54LM20B boards: one runs the RCP firmware to give the OTBR its Thread radio, the other runs the Matter application as the end device that joins the Thread network, and the Home Assistant Green runs the OpenThread Border Router and Matter Server to manage the Thread network and Matter devices. Two issues in particular are worth watching during testing. The first is the Thread radio link — antenna connection, device placement, and the surrounding environment all affect link quality, and shortening the distance between devices improves RSSI and LQI and helps the device attach to the Thread network. The second is Matter test-certificate verification — the 20B Matter Template firmware carries a test/development certificate, and the Matter Server's default production trust policy rejects its Attestation request; once you confirm the dev board and firmware are trusted, turning on `Enable test-net DCL usage` lets the test device finish commissioning.

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
