---
description: reSpeaker Clip is an open wearable AI recorder with 360-degree audio pickup, OLED status display, vibration feedback, BLE and Wi-Fi connectivity, and open firmware and SDK support for transcription, AI notes, meeting summaries, and enterprise voice AI applications.
title: reSpeaker Clip Getting Started
keywords:
  - reSpeaker
  - AI Recorder
  - SenseCraft Voice
  - Wearable AI Recorder
  - Voice to Text
  - LLM Summary
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_render_02.png
slug: /respeaker_clip
sku: 100020126
last_update:
  date: 6/30/2026
  author: Ray
createdAt: '2026-06-30'
updatedAt: '2026-08-20'
url: https://wiki.seeedstudio.com/respeaker_clip/
---

# reSpeaker Clip Getting Started

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_render_02.png" alt="reSpeaker Clip" width={600} height="auto" /></p>

reSpeaker Clip is an open wearable AI recorder designed for retail, meetings, interviews, classrooms, service training, and other scenarios that require high-quality voice recording and follow-up content organization. It integrates dual PDM microphones for 360-degree omnidirectional pickup up to 3 meters, independent recording, mobile file management, AI transcription, and AI summarization, helping users complete the full workflow from on-site recording to structured content.

reSpeaker Clip is also designed as an open hardware and developer-friendly product. It provides open-source firmware, a demo app, and SDK support, allowing developers to customize device behavior and application workflows. Enterprises can also integrate it with internal office systems, privately deployed LLMs, or voice analytics pipelines to build AI voice applications that meet their data security requirements.

reSpeaker Clip works with the SenseCraft Voice App and cloud services, and can also be integrated with local or cloud AI models. Through the app, users can pair the device, manage recordings, export files, transcribe audio, generate AI summaries, customize templates, and perform Q&A retrieval.

:::note
This document is an initial Wiki draft for reSpeaker Clip. Some SDK URLs, protocol documents, and resource package links will be added after the product materials are confirmed.
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/respeaker-clip-wearable-ai-recorder.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now </font></span></strong>
    </a>
</div>

## Product Overview

reSpeaker Clip is positioned as an open wearable AI recorder. It can be used not only as a portable recording device, but also as a voice data entry point for enterprise service training, interview records, meeting minutes, and on-site communication review.

The device uses a compact wearable form factor and includes 2GB of internal storage, allowing it to record independently without relying on a phone. It also features a programmable 0.5-inch OLED display and vibration feedback, helping users quickly check recording status, mark important segments, and switch between recording workflows through the screen, button, and haptic feedback.

### Key Features

- **360-degree pickup, up to 3 meters**: Dual high-performance PDM microphones support omnidirectional pickup for meetings, interviews, retail conversations, and other multi-speaker scenarios.
- **Dual recording workflows**: Select the appropriate recording behavior based on the environment, from daily wearable notes to multi-person meetings.
- **Independent recording and local storage**: Built-in 2GB storage lets the device work as a standalone recorder even when the phone is not nearby.
- **OLED display and vibration feedback**: The 0.5-inch OLED display shows device status, while vibration feedback makes recording control more intuitive.
- **Open firmware and SDK**: Developers can customize device behavior, button logic, display content, and application-side workflows.
- **AI transcription and summarization**: Use cloud or local AI models for speech-to-text, AI notes, meeting minutes, and voice Q&A.
- **Enterprise integration ready**: Connect to internal enterprise systems or privately deployed LLMs for workflows that require data security and customization.

### Specifications

This section summarizes the hardware, audio, physical, and battery-related specifications of reSpeaker Clip.

#### Hardware Specifications

| Specification | Details |
| --- | --- |
| Main Control | nRF5340+nRF7002 |
| Display | 0.5-inch 88*48 OLED |
| Microphone | Dual PDM, up to 16 kHz sampling rate |
| Audio Output | Noise-reduced audio |
| Connectivity | Bluetooth (BLE 5.3),<br />Wi-Fi (for high-speed audio export) |
| Internal Storage | 2GB (stores approx. 250+ hours<br />of compressed audio) |
| Battery Life | 14-18 hours of continuous recording |
| Interaction | Action Button, vibration motor |
| Charging Interface | 4-pin Magnetic |

#### Audio Parameters

| Item | Parameter |
| --- | --- |
| Microphone | Dual PDM microphones |
| Sampling Rate | Up to 16 kHz |
| Pickup Direction | 360-degree omnidirectional pickup |
| Pickup Range | Up to 3 meters |
| Audio Output | Noise-reduced mono audio |
| Compressed Audio Format | Opus mono, 32 kbps |
| Audio Storage | 2GB stores approx. 250+ hours of compressed audio |
| Continuous Recording Time | 14-18 hours |

#### Physical Parameters

| Item | Parameter |
| --- | --- |
| Display | 0.5-inch 88*48 OLED |
| Internal Storage | 2GB |
| Interaction | Action Button, vibration motor |
| Charging Method | Magnetic charging base |
| Charging Interface | 4-pin Magnetic |
| Charging Base Power Input | USB-C |
| Wearing Methods | Magnetic attachment, lapel clip, neck lanyard |
| Temperature Note | Avoid use in extreme temperatures from -20°C to 60°C |

### Target Scenarios

- Retail service recording and training review
- Long-form audio recording for meetings, interviews, and classes
- Customer communication, sales visits, service quality inspection, and other business scenarios
- Workflows that need to convert voice content into structured text and summaries

### Core Capabilities

- Dual PDM microphones with 360-degree pickup
- Independent recording
- 2GB internal storage
- 0.5-inch OLED status display
- Vibration feedback
- BLE and Wi-Fi connectivity
- AI audio transcription
- AI summarization and structured extraction
- Multiple wearing methods
- Mobile file management
- SenseCraft Voice App and cloud service support
- Open-source firmware, demo app, and SDK support

### Hardware Overview

reSpeaker Clip uses a portable clip-style form factor. The top side integrates an OLED display, dual microphones, and an Action Button. The bottom side and the charging base both include magnetic charging contacts. The charging base is powered through USB-C, making it easy to switch between desktop charging and wearable recording.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_hardware_cropped.jpg" alt="reSpeaker Clip hardware overview" width={680} height="auto" /></p>

### What's in the Box

<div style={{width: '100%', overflowX: 'auto'}}>
  <table style={{display: 'table', width: '680px', maxWidth: '100%', margin: '0 auto'}}>
    <thead>
      <tr>
        <th>Item</th>
        <th style={{textAlign: 'center'}}>Quantity</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>reSpeaker Clip device</td>
        <td style={{textAlign: 'center'}}>1</td>
        <td>Portable recording device</td>
      </tr>
      <tr>
        <td>Magnetic lapel clip</td>
        <td style={{textAlign: 'center'}}>1</td>
        <td>For attaching the device to clothing</td>
      </tr>
      <tr>
        <td>Magnetic patch</td>
        <td style={{textAlign: 'center'}}>1</td>
        <td>For magnetic attachment</td>
      </tr>
      <tr>
        <td>Charging base</td>
        <td style={{textAlign: 'center'}}>1</td>
        <td>For charging the device</td>
      </tr>
      <tr>
        <td>0.5 m Type-C cable</td>
        <td style={{textAlign: 'center'}}>1</td>
        <td>For powering the charging base</td>
      </tr>
      <tr>
        <td>Neck lanyard</td>
        <td style={{textAlign: 'center'}}>1</td>
        <td>For neck hanging</td>
      </tr>
    </tbody>
  </table>
</div>

## Quick Start

This section introduces the basic workflow from device preparation and app connection to recording and AI summarization. For first-time use, follow the steps in order.

### Device Preparation

1. Place reSpeaker Clip into the charging base.
2. Use a Type-C cable to connect the charging base to a power adapter or a computer USB port.
3. Wait for the device to charge.
4. Press and hold the power button to turn on the device.
5. Select the wearing method based on your use case.

### Wearing Methods

reSpeaker Clip supports three wearing methods: magnetic attachment, lapel clip, and neck lanyard. Choose the most suitable method for meetings, interviews, service training, or mobile recording.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_wearing_methods.jpg" alt="reSpeaker Clip wearing methods" width={640} height="auto" /></p>

### SenseCraft Voice App

#### Download the App

Scan the QR code below with your phone, or open the [SenseCraft Voice App download page](https://sensecraft-voice-download.seeed.cc/) to download and install the app.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_download_qr.png" alt="SenseCraft Voice App download QR code" width={360} height="auto" /></p>

#### Connect the Device

1. Open the SenseCraft Voice App and sign in.
2. Press and hold the side button on the device to power it on, then wait until the device is ready to connect.
3. Tap **Add Device** on the app home page.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_add_device.jpg" alt="Tap Add Device" width={320} height="auto" /></p>

4. The app automatically searches for nearby devices. Match the identifier shown on the device with the device name shown in the app, such as `Clip EAE0`. After confirming that the names match, tap **Connect** for the corresponding device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_scan_device.jpg" alt="Select and connect to the matching reSpeaker Clip device" width={320} height="auto" /></p>

5. When the Bluetooth pairing request appears on your phone, confirm the name again and tap **Pair**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_pair_device.jpg" alt="Confirm the Bluetooth pairing request" width={320} height="auto" /></p>

6. After pairing is complete, follow the app instructions to finish the remaining setup.

:::tip
If the app cannot find the device, first confirm that the device is powered on and has sufficient battery. If the battery is low, charge the device before pairing again. Also make sure the device is in Bluetooth pairing state, move the phone close to the device, and scan again.
:::

### Recording Operations

reSpeaker Clip can quickly control recording through the side button.

- Press and hold the button to start or stop recording.
- During recording, short press the button once to mark the current segment as important.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_recording_operation.png" alt="reSpeaker Clip recording operations" width={640} height="auto" /></p>

During recording, the device uses the screen display and vibration feedback to indicate the current status.

### File Management

After recording, you can manage audio files in the SenseCraft Voice App.

- Play back recordings
- Trim audio
- Transfer files through Wi-Fi or BLE
- Export audio or text results
- View marked important segments

### AI Features

reSpeaker Clip can work with the SenseCraft Voice App and cloud services for intelligent audio processing.

#### Confirm STT / LLM Service Configuration

Before using audio transcription, AI summarization, or Q&A retrieval, open the **AI CONFIG** page at the bottom of the app and confirm that both **STT Service** and **LLM Service** are configured. The STT service is used for audio transcription, while the LLM service is used for summary generation and Q&A processing.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_ai_config_stt.jpg" alt="Confirm STT Service configuration" width={320} height="auto" /></p>

If **STT Service** shows `Not configured`, tap the configuration entry on the right side of STT Service to enter the STT Providers page. Fill in Provider, Base URL, API Key, and Language according to the transcription service you use. Tap **Test Connection**, and after the test passes, tap **Save Configuration**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_stt_provider_form.png" alt="Fill in and save STT service configuration" width={320} height="auto" /></p>

If **LLM Service** shows `Not configured`, continue to the LLM Providers page and tap **Add New Configuration** or the `+` button in the upper-right corner to add a new service configuration.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_llm_provider_add.jpg" alt="Add LLM service configuration" width={320} height="auto" /></p>

After filling in API Key, Base URL, and Model Name, tap **Test Connection**. After the test passes, tap **Save Configuration**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_llm_provider_form.png" alt="Fill in and save LLM service configuration" width={320} height="auto" /></p>

#### Audio Transcription

After uploading or syncing a recording, tap the recording you want to process in the file list to enter the recording detail page. If the recording has no transcript yet, the page displays a **Transcribe & Summarize** button. Tap it to enter the transcription and summarization settings page.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_transcribe_entry.png" alt="Open a recording and tap Transcribe & Summarize" width={320} height="auto" /></p>

#### AI Summary

On the **Transcribe & Summarize** page, you can select a summary template and confirm Audio Language, STT Model, and LLM Model. The template controls the structure of the summary output, such as meeting summary, class summary, or daily conversation summary. After confirming the configuration, tap **Generate Now** to start transcription and summarization.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_app_transcribe_summary_options.png" alt="Select a template and start transcription and summarization" width={320} height="auto" /></p>

#### AI Q&A Retrieval

Users can perform Q&A retrieval based on the recording transcript, such as querying tasks, time points, product issues, or customer feedback mentioned in a meeting.

### Device Management

In the app, you can view and manage device status.

- Battery monitoring
- Firmware version check
- OTA upgrade
- Device unbinding
- Factory reset

### Firmware Update Guide

reSpeaker Clip supports two firmware update methods that do not require a debug probe:

1. **Bluetooth OTA**: Send the firmware package to the device through BLE. This is suitable for daily updates.
2. **Recovery mode flashing**: Put the device into USB serial recovery mode and transfer the firmware package through a USB serial port.

Both methods use MCUboot's mcumgr Simple Management Protocol (SMP). Bluetooth OTA uses BLE transport, while Recovery mode flashing uses USB CDC-ACM serial transport. reSpeaker Clip does not use native USB DFU flows such as `dfu-util`.

#### Firmware File Types

Firmware releases may include the following files:

| File Type | Description | Usage |
| --- | --- | --- |
| `clip-<version>-*-single.*` | Single application partition update package, suitable for updating only the Clip SDK / app partition | USB serial DFU |
| `clip-<version>-*-signed.bin` | Signed application firmware image | USB serial DFU, BLE OTA |
| `clip-<version>-*-ota.zip` | Multi-image update package, usually including app and network core | USB serial DFU, BLE OTA |
| `clip-<version>-*-merged.hex` | Full image including MCUboot, app, and network core | Requires a debugger such as J-Link |
| `clip-<version>-*-merged_CPUNET.hex` | Network core image only | Requires a debugger such as J-Link |

For regular Bluetooth OTA updates, use `-ota.zip` first. For developer flashing through Recovery mode, prefer firmware packages with the `single` suffix. Typical Clip SDK changes only affect the application partition and do not require updating the network core. `-merged.hex` and `-merged_CPUNET.hex` are mainly used for development, production, or debugger-based flashing.

#### Method 1: Bluetooth OTA

Bluetooth OTA is suitable when the device can boot normally and can be discovered by a phone through BLE. It is recommended to use the mobile nRF Connect app for OTA. The BLE tool in nRF Connect for Desktop usually requires an additional Nordic BLE adapter.

Basic workflow:

1. Prepare the `clip-<version>-*-ota.zip` firmware package.
2. Send the firmware package to your phone.
3. Open nRF Connect on your phone.
4. Search for and connect to reSpeaker Clip through BLE.
5. After connection, confirm that **SMP Service** is visible.
6. Tap the **DFU** icon in the upper-right corner and select the `-ota.zip` or `-signed.bin` firmware package.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_ble_ota_dfu_button.png" alt="Tap the DFU button in mobile nRF Connect" width={320} height="auto" /></p>

7. Keep the default **Test and Confirm** mode and tap **OK** to start the update.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_ble_ota_mode.png" alt="Select Test and Confirm for Bluetooth OTA" width={320} height="auto" /></p>

8. Wait for transfer, verification, and automatic device reboot to complete.
9. Reconnect to the device and check the firmware version.

:::tip
During OTA, keep the phone close to the device, do not send nRF Connect to the background, and make sure the device is not connected to the SenseCraft Voice App at the same time.
:::

#### Method 2: Recovery Mode Flashing

Recovery mode is a developer-oriented USB flashing mode. It transfers firmware through a USB CDC-ACM serial port using the MCUboot / mcumgr SMP protocol. It is recommended to use the `nrfutil mcu-manager` command line workflow.

##### Enter Recovery Mode

Recovery mode provides flashing capability through MCUboot USB serial recovery. To enter it:

1. Confirm that the USB cable supports data transfer.
2. Plug the USB cable into the charging base.
3. Place reSpeaker Clip onto the charging base and gently twist the device so that the charging contacts are firmly connected.
4. After the screen shows the USB / charging icon, press and hold the **Action Button** until the screen shows **Recovery Mode**.
5. When **Recovery Mode** is displayed, the device has successfully entered USB serial recovery mode and should enumerate as a serial port:
   - Windows: `COMx`
   - macOS: `/dev/cu.usbmodem*`
   - Linux: `/dev/ttyACM0`

On Windows, the device may enumerate multiple virtual serial ports, for example:

```text
Product         reSpeaker Clip DFU
Ports           COM10, vcom: 0
                COM11, vcom: 1
Traits          serialPorts, usb
```

For flashing, try the serial port corresponding to `vcom: 1` first, such as `COM11` in the example above. If connection or upload fails, try the other serial port.

:::note
Recovery mode requires USB/VBUS detection. Before entering this mode, make sure the charging base contacts are firmly connected. If the screen does not show a USB / charging icon, the device may be physically placed on the base but not actually connected to USB.
:::

##### Flash with nrfutil mcu-manager

nrfutil is Nordic's command line tool. Use version 8.x or later and install the `mcu-manager` plugin.

Newer versions of nrfutil use a subcommand plugin mechanism. For first-time use, install the `device` and `mcu-manager` subcommands:

```bash
nrfutil install device
nrfutil install mcu-manager
```

If `nrfutil device list` reports `nrfutil command device not found`, the `device` subcommand has not been installed. Run `nrfutil install device` first.

List current serial devices:

```bash
nrfutil device list
```

Upload the application partition firmware. Prefer the firmware package with the `single` suffix:

```bash
nrfutil mcu-manager serial image-upload \
    --firmware clip-<version>-production-single.zip \
    --serial-port COMx
```

If the release package provides a signed application image, you can also upload `-signed.bin`:

```bash
nrfutil mcu-manager serial image-upload \
    --firmware clip-<version>-production-signed.bin \
    --serial-port COMx
```

For a full app + network core update, upload `-ota.zip`:

```bash
nrfutil mcu-manager serial image-upload \
    --firmware clip-<version>-production-ota.zip \
    --serial-port COMx
```

After upload, reset the device to apply the new firmware:

```bash
nrfutil mcu-manager serial reset --serial-port COMx
```

Replace `COMx` with the actual serial port shown in Windows Device Manager or `nrfutil device list`. If the device shows multiple `vcom` ports, try the port corresponding to `vcom: 1` first. If connection or upload fails, switch to the other port and try again. On macOS / Linux, use `/dev/cu.usbmodem*` or `/dev/ttyACM0`.

:::tip
If the flashing progress stays at 100% and the tool does not exit automatically, do not repeatedly unplug and replug the device. Run:

```bash
nrfutil mcu-manager serial reset --serial-port COMx
```

Then check the firmware version after the device restarts.
:::

#### More Firmware Update Methods

For debugger-based flashing or more Recovery mode troubleshooting methods, refer to the reSpeaker Clip Advanced Firmware Update Guide (coming soon).

## Development Guide

For developer and enterprise integration scenarios, reSpeaker Clip can be extended through the firmware SDK, application SDK, and communication protocols.

### Firmware SDK

The reSpeaker Clip firmware is built on nRF Connect SDK / Zephyr RTOS and runs on the nRF5340 + nRF7002 platform. It is not a single driver example, but a device-side framework organized around audio capture, state machine, BLE / Wi-Fi communication, file management, firmware update, and low-power management.

Firmware system architecture:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_system_architecture.png" alt="reSpeaker Clip firmware system architecture" width={900} height="auto" /></p>

From a development perspective, the firmware is mainly divided into the following layers:

- **Application Layer**: Handles event dispatching, AT Server, button processing, and user interaction states.
- **Service Layer**: Handles BLE / UDP transport abstraction, file transfer, configuration management, and NVS storage.
- **Processing Layer**: Handles audio capture, SpeexDSP noise reduction / dynamic range processing, and Opus encoding.
- **Hardware Abstraction Layer**: Encapsulates PDM microphone, SD FAT32, BLE, Wi-Fi, PMIC, and other hardware capabilities.
- **Zephyr RTOS Kernel**: Provides kernel primitives such as `k_msgq`, `k_sem`, `k_mutex`, `k_thread`, and `k_mem_slab`.

A typical development workflow is: set up the Zephyr / nRF Connect SDK environment, obtain the reSpeaker Clip firmware project, confirm the board target and configuration files, build and flash the firmware, check serial logs, and finally verify recording, file sync, and firmware update through the SenseCraft Voice App or BLE / Wi-Fi protocols.

Go to the Firmware SDK documentation for the next steps:

- [Getting Started with the reSpeaker Clip Firmware SDK](/respeaker_clip_firmware_quick_start/) covers environment setup, build, flash, and smoke testing.
- [reSpeaker Clip Firmware Development Guide](/respeaker_clip_firmware_development_guide/) explains the firmware architecture, communication protocol, update and recovery paths, validation, and production release.
- [Customization: Add a Custom AT Command](/respeaker_clip_customization_at_command/) shows how to add and validate a new AT command, including an AI prompt that uses the repository firmware Skill.

### Application SDK

The application SDK can be used for mobile app or host-side application integration.

| Platform | Language | Status |
| --- | --- | --- |
| iOS | Swift | Coming soon |
| Android | Kotlin | Coming soon |
| Desktop / Server | Python | [Available](/respeaker_clip_basic_sdk_guide) |

## Applications

reSpeaker Clip can be used in To B business scenarios and integrated with enterprise toolchains, forming a complete workflow from audio capture and transcription to intelligent summarization and business system archiving.

### Retail Service Training

Retail sales and service staff can wear reSpeaker Clip to record customer conversations. After the conversation, AI can generate customer requirement summaries and actionable to-do lists from the recording, helping teams improve service quality, follow-up efficiency, and conversion rates.

### Meeting Minutes

In meeting scenarios, reSpeaker Clip's 360-degree omnidirectional pickup can cover multi-person discussions. Users can mark important moments with the button during recording, and automatically generate structured minutes, highlights, and action items after the meeting.

### Interviews and Research

For user interviews, market research, and customer visits, reSpeaker Clip helps capture raw voice data and organize recordings into searchable and reviewable text materials.

### Enterprise Customization

Enterprises can use the open SDK to integrate reSpeaker Clip with internal office systems, CRM, knowledge bases, project management tools, or privately deployed LLMs. Organizations with data compliance requirements can also build dedicated AI voice assistants and private voice analytics workflows.

## Choose the Right reSpeaker Clip Guide

The reSpeaker Clip documentation is organized by development layer. Start with **Getting Started** for product setup and normal workflows. Use the **Basic SDK** when a host application needs to control the device or download recordings. Continue to **Service Integration** when a long-running service needs to own the device connection and expose APIs. Use the **Firmware SDK** only when you need to change device-side behavior, protocols, or audio processing.

<div className="row">
  <div className="col col--6 margin-bottom--lg">
    <a
      href="/respeaker_clip/"
      aria-label="Open the reSpeaker Clip Getting Started guide"
      aria-current="page"
      className="card shadow--md respeaker-clip-nav-card respeaker-clip-nav-card--active"
      style={{position: 'relative', display: 'block', overflow: 'hidden', borderRadius: '18px', color: '#172033', textDecoration: 'none'}}
    >
      <img
        src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-style/respeaker_clip_nav_getting_started.png"
        alt=""
        style={{display: 'block', width: '100%', aspectRatio: '2.5 / 1', objectFit: 'cover'}}
      />
      <div style={{position: 'absolute', top: '50%', right: '5%', left: '49%', transform: 'translateY(-50%)'}}>
        <h3 style={{margin: '0 0 0.4rem', fontSize: '1.05rem'}}>Getting Started</h3>
        <p style={{margin: 0, fontSize: '0.78rem', lineHeight: 1.45}}>Product overview, hardware setup, and first-use workflows.</p>
      </div>
    </a>
  </div>

  <div className="col col--6 margin-bottom--lg">
    <a
      href="/respeaker_clip_basic_sdk_guide/"
      aria-label="Open the reSpeaker Clip Basic SDK guide"
      className="card shadow--md respeaker-clip-nav-card"
      style={{position: 'relative', display: 'block', overflow: 'hidden', borderRadius: '18px', color: '#172033', textDecoration: 'none'}}
    >
      <img
        src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-style/respeaker_clip_nav_basic_sdk.png"
        alt=""
        style={{display: 'block', width: '100%', aspectRatio: '2.5 / 1', objectFit: 'cover'}}
      />
      <div style={{position: 'absolute', top: '50%', right: '5%', left: '49%', transform: 'translateY(-50%)'}}>
        <h3 style={{margin: '0 0 0.4rem', fontSize: '1.05rem'}}>Basic SDK</h3>
        <p style={{margin: 0, fontSize: '0.78rem', lineHeight: 1.45}}>Control the device, manage recordings, and download audio without changing firmware.</p>
      </div>
    </a>
  </div>

  <div className="col col--6 margin-bottom--lg">
    <a
      href="/respeaker_clip_service_integration/"
      aria-label="Open the reSpeaker Clip Service Integration guide"
      className="card shadow--md respeaker-clip-nav-card"
      style={{position: 'relative', display: 'block', overflow: 'hidden', borderRadius: '18px', color: '#172033', textDecoration: 'none'}}
    >
      <img
        src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-style/respeaker_clip_nav_service_integration.png"
        alt=""
        style={{display: 'block', width: '100%', aspectRatio: '2.5 / 1', objectFit: 'cover'}}
      />
      <div style={{position: 'absolute', top: '50%', right: '4%', left: '54%', transform: 'translateY(-50%)'}}>
        <h3 style={{margin: '0 0 0.4rem', fontSize: '1.05rem'}}>Service Integration</h3>
        <p style={{margin: 0, fontSize: '0.78rem', lineHeight: 1.45}}>Add reSpeaker Clip to a long-running Python service through an adapter and API routes.</p>
      </div>
    </a>
  </div>

  <div className="col col--6 margin-bottom--lg">
    <a
      href="/respeaker_clip_firmware_quick_start/"
      aria-label="Open the reSpeaker Clip Firmware SDK quick start"
      className="card shadow--md respeaker-clip-nav-card"
      style={{position: 'relative', display: 'block', overflow: 'hidden', borderRadius: '18px', color: '#172033', textDecoration: 'none'}}
    >
      <img
        src="https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-style/respeaker_clip_nav_firmware_sdk.png"
        alt=""
        style={{display: 'block', width: '100%', aspectRatio: '2.5 / 1', objectFit: 'cover'}}
      />
      <div style={{position: 'absolute', top: '50%', right: '5%', left: '49%', transform: 'translateY(-50%)'}}>
        <h3 style={{margin: '0 0 0.4rem', fontSize: '1.05rem'}}>Firmware SDK</h3>
        <p style={{margin: 0, fontSize: '0.78rem', lineHeight: 1.45}}>Build, flash, debug, and customize device-side behavior.</p>
      </div>
    </a>
  </div>
</div>

## Q&A

### Cannot Power On / Charge

If the device cannot power on or charge, check the following:

- Confirm that the device is correctly placed in the charging base and that the magnetic contacts are not misaligned.
- Check whether the USB-C cable and power adapter work properly.
- Clean the magnetic charging contacts on the bottom of the device and on the charging base to avoid dust or foreign objects affecting contact.
- Charge for 10 minutes, then press and hold the power button again.
- If the device still does not respond, record the device status and contact technical support.

### Bluetooth Pairing Failed

If the phone cannot pair with reSpeaker Clip, try the following:

- Confirm that the device is powered on and is not connected to another phone.
- Enable Bluetooth permissions on your phone and allow the SenseCraft Voice App to use Bluetooth.
- Move the phone closer to the device and scan again.
- Delete old reSpeaker Clip pairing records from the phone system Bluetooth list, then pair again.
- Restart the device and the app, then try again.

### Recording File Transfer Interrupted

If a recording file transfer is interrupted, check the following:

- Keep the phone and device close to each other.
- Confirm that the device has sufficient battery.
- Check whether Wi-Fi or BLE connectivity is stable.
- Keep the app running in the foreground.
- Reconnect the device and transfer the file again. For large files, use a stable Wi-Fi environment.

### Wi-Fi Provisioning Failed

If the device cannot complete Wi-Fi provisioning, confirm the following:

- The Wi-Fi name and password are correct.
- The router does not block new devices.
- The phone and device are close to the router.
- The current network can access the internet normally.
- If you are using an enterprise network or a public network that requires web authentication, switch to a normal home network or phone hotspot for testing.

### App Cannot Find the Device

If the SenseCraft Voice App cannot find the device, try the following:

- Confirm that the device is powered on and ready to connect.
- Confirm that Bluetooth, location, or nearby device permissions have been granted to the app.
- Move the phone closer to the device and scan again.
- Exit and reopen the app.
- Restart reSpeaker Clip and add the device again.

### Firmware Update Failed

If OTA or firmware update fails, try the following:

- Make sure the device has sufficient battery and do not power it off during the update.
- Keep the phone, device, and network connection stable.
- Do not close the app or switch networks during the update.
- If the device can still boot normally after the failed update, open the app and start the update again.
- If the device cannot boot normally, follow the later recovery mode or firmware flashing documentation and contact technical support.

## Resources

| Resource | Link |
| --- | --- |
| Product Page | [reSpeaker Clip Wearable AI Recorder](https://www.seeedstudio.com/respeaker-clip-wearable-ai-recorder.html) |
| SenseCraft Voice App Download | [Download Page](https://sensecraft-voice-download.seeed.cc/) |
| Firmware Download | Coming soon |
| Firmware SDK Documentation | [Getting Started with the Firmware SDK](/respeaker_clip_firmware_quick_start) |
| SDK Repository | [reSpeaker Clip GitHub](https://github.com/Seeed-Studio/reSpeaker_Clip) |
| User Manual | <a href="https://files.seeedstudio.com/wiki/reSpeaker_Clip/respeaker_clip_user_manual.pdf" target="_blank" rel="noopener noreferrer">reSpeaker Clip User Manual</a> |
| Datasheet | Coming soon |
| Mechanical Drawing | Coming soon |

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
