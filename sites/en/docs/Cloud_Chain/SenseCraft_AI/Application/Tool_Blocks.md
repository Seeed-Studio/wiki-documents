---
description: Reference for the Tool Blocks available when authoring a SenseCraft AI application.
title: Tool Blocks
keywords:
  - tool blocks
  - sensecraft ai
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /sensecraft-ai/application/tool-blocks
sidebar_position: 2
last_update:
  date: 03/30/2026
  author: Rida
createdAt: '2026-03-30'
updatedAt: '2026-03-30'
url: https://wiki.seeedstudio.com/sensecraft-ai/application/tool-blocks/
---
# Using Tool Blocks

In the deployment flow you can insert SenseCraft AI integrated features in one click. They streamline both your authoring experience and end-user deployment.

## AI Vision

<svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24" style={{verticalAlign:'-0.3em',marginRight:'0.35em',color:'var(--ifm-color-primary)'}}><path fill="currentColor" d="M12 4c2.787 0 5.263 1.257 7.026 2.813c.885.781 1.614 1.658 2.128 2.531c.505.857.846 1.786.846 2.656s-.34 1.799-.846 2.656c-.514.873-1.243 1.75-2.128 2.531C17.263 18.743 14.786 20 12 20c-2.787 0-5.263-1.257-7.026-2.813c-.885-.781-1.614-1.658-2.128-2.531C2.34 13.799 2 12.87 2 12s.34-1.799.846-2.656c.514-.873 1.243-1.75 2.128-2.531C6.737 5.257 9.214 4 12 4m0 2c-2.184 0-4.208.993-5.702 2.312c-.744.656-1.332 1.373-1.729 2.047C4.163 11.049 4 11.62 4 12s.163.951.569 1.641c.397.674.985 1.39 1.729 2.047C7.792 17.007 9.816 18 12 18s4.208-.993 5.702-2.312c.744-.657 1.332-1.373 1.729-2.047c.406-.69.569-1.261.569-1.641s-.163-.951-.569-1.641c-.397-.674-.985-1.39-1.729-2.047C16.208 6.993 14.184 6 12 6m0 3q.132 0 .261.011a2 2 0 0 0 2.728 2.728A3 3 0 1 1 12 9"/></svg>Deploy AI vision models for object recognition, detection, classification, and related tasks on supported hardware. Inference results can be streamed in real time via MQTT, GPIO, or serial (Serial), depending on configuration.

The tool block currently supports **Detection** and **Classification**. Segmentation and pose estimation are planned for a later release.

### Supported devices

- [XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)
- [Grove - Vision AI V2](https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html)
- [SenseCAP Watcher](https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html)
- [SenseCAP A1102](https://www.seeedstudio.com/SenseCAP-A1102-LoRaWAN-Vision-AI-Sensor-p-6347.html)
- [reCamera](https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html)

### Select a model

- **SenseCraft AI model:** Select high-quality models shared publicly by the community from the model library.
- **My model:** Pick a model from your private saved list.
- **Upload model:** Upload model files trained on third-party platforms. You must provide the model name, task type (Task), model categories (Class ID and Class Name), attach the model file, and select supported devices. After upload, the model appears under **My model**.
- **Train model:** To train a new model or retrain from an existing one, open the training entry and follow the wizard. When finished, open **Historical models**, choose **Send to SenseCraft**, complete the upload flow, and save the result to **My model**.

:::caution
When you publish an application that includes a private model to the community, that model will automatically become public.
:::

### Select device

From the drop-down, choose the hardware you actually use from the list supported by this model.

### Recommended parameters

Tune inference and device settings for your scenario. These values are written to the device as defaults at deployment time.

- **Confidence threshold:** Criterion for whether the model emits a final prediction. Raising the threshold tends to reduce false positives; lowering it tends to reduce false negatives.
- **IOU threshold:** In detection tasks, IoU compares predicted boxes to ground truth. A higher threshold helps separate overlapping objects but may produce duplicate boxes on one object if set too high. A lower threshold merges duplicates but may merge two nearby objects if set too low.

#### Output mode

- **None:** After power-on, inference does not start until another trigger runs. Suited to low-power setups where inference runs only when needed.
- **MQTT:** Start inference immediately after power-on and send results over Wi-Fi via MQTT.
  - **SenseCraft official service (recommended):** Select or create a Dev Kit for your application and MQTT is configured automatically. Open the [SenseCraft Data platform](https://sensecap.seeed.cc) to view and process incoming data.
  - **Third-party service:** Use your own or a third-party MQTT broker and configure parameters manually.
- **GPIO:** Drive GPIO pins with level signals.
  - **Trigger conditions:** Define rules with object, condition, and confidence threshold.
  - **Trigger actions:** When conditions match, the device can pull a pin high/low, save captures to SD card, light an LED, and so on.
- **Serial:** Use the [SSCMACore library](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA?tab=readme-ov-file#seeed_arduino_sscma-library) to export inference data over UART (GPIO), I2C, or SPI.

```text
**UART (GPIO)**
Baud Rate Value: 921600
Data Format: 8N1
TX: GPIO43
RX: GPIO44

**I2C**
Slave Address: 0x62
SDA: GPIO5 (PULLUP)
SCL: GPIO6 (PULLUP)
Protocol:
- READ：0x10，0x01, LEN << 8, LEN & 0xff
- WRITE: 0x10，0x02, LEN << 8, LEN & 0xff
- AVAIL(to read): 0x10，0x03
- RESET(clear buffer): 0x10，0x06

**SPI**
Slave CPOL0 CPHA0
MOSI GPIO9 (PULLUP)
MISO GPIO8,
SCLK GPIO7 (PULLUP)
CS GPIO4 (PULLUP)
Protocol:
- READ：0x10，0x01, LEN << 8, LEN & 0xff
- WRITE: 0x10，0x02, LEN << 8, LEN & 0xff
- AVAIL(to read): 0x10，0x03
- RESET(clear buffer): 0x10，0x06
```

## AI Audio

<svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24" style={{verticalAlign:'-0.3em',marginRight:'0.35em',color:'var(--ifm-color-primary)'}}><path fill="currentColor" d="M12 3a1 1 0 0 1 .993.883L13 4v16a1 1 0 0 1-1.993.117L11 20V4a1 1 0 0 1 1-1M8 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1m8 0a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1M4 9a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m16 0a1 1 0 0 1 .993.883L21 10v4a1 1 0 0 1-1.993.117L19 14v-4a1 1 0 0 1 1-1"/></svg>Deploy AI audio models for speech recognition on supported hardware. Results can be streamed via MQTT, GPIO, or serial, depending on configuration.

### Supported devices

- [XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)

### Select a model

- **SenseCraft AI model:** Select community-shared models from the library.
- **My model:** Choose from your private list.
- **Upload model:** Upload model files trained on third-party platforms. Provide the model name and categories (Class ID and Class Name). After upload, the model appears under **My model**.
- **Train model:** Train a new or updated model, then send it to SenseCraft from **Historical models** as with vision models.

:::caution
When you publish an application that includes a private model to the community, that model will automatically become public.
:::

### Select device

Audio models currently support XIAO ESP32S3 Sense only.

### Recommended parameters

Fine-tune values for your scenario.

- **Confidence threshold:** Same role as for vision; adjust the trade-off between missed and spurious outputs.
- **Output mode:** Default output path for the audio model.

## AI Vibration

<svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24" style={{verticalAlign:'-0.3em',marginRight:'0.35em',color:'var(--ifm-color-primary)'}}><path fill="currentColor" d="M7.71 5.012a1 1 0 0 1 .76.582l1.147 2.582l2.524-2.84a1 1 0 0 1 1.662.258l1.147 2.582l2.525-2.84a1 1 0 0 1 1.661.258l1.778 4a1 1 0 0 1-1.828.812L17.94 7.824l-2.525 2.84a1 1 0 0 1-1.661-.258l-1.148-2.582l-2.524 2.84a1 1 0 0 1-1.661-.258L7.272 7.824l-2.525 2.84a1 1 0 0 1-1.494-1.328l3.555-4a1 1 0 0 1 .901-.324m0 8a1 1 0 0 1 .76.582l1.147 2.582l2.524-2.84a1 1 0 0 1 1.662.258l1.147 2.582l2.525-2.84a1 1 0 0 1 1.661.258l1.778 4a1 1 0 0 1-1.828.812l-1.147-2.582l-2.525 2.84a1 1 0 0 1-1.661-.258l-1.148-2.582l-2.524 2.84a1 1 0 0 1-1.661-.258l-1.148-2.582l-2.525 2.84a1 1 0 0 1-1.494-1.328l3.555-4a1 1 0 0 1 .901-.324"/></svg>Deploy vibration anomaly detection by learning “normal” vibration and flagging deviations.

### Supported devices

- XIAO ESP32S3 Sense (with [3-axis accelerometer](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR-p-4533.html))

### Recommended parameters

Tune sampling, power-on behavior, GPIO, and output for your setup.

- **Sampling window:** Samples per time unit. Too large slows inference; too small may underfit normal vibration.
- **Enable default power-on inference:** When off, inference does not auto-start at power-on; use an external trigger for low-power use.
- **GPIO:** Drive pins on abnormal vibration—for example set a level or toggle an LED.
- **Output mode:** Default output path for the vibration model.

## Deploy Container App

<svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24" style={{verticalAlign:'-0.3em',marginRight:'0.35em',color:'var(--ifm-color-primary)'}}><path fill="currentColor" d="M12.01 2.378a2.5 2.5 0 0 1 2.985 2.29l.005.161v.551c1.503-.3 2.9.792 2.995 2.288l.005.161v.55c1.503-.3 2.9.793 2.995 2.289l.005.162v6.53a3 3 0 0 1-2.239 2.902l-.173.04l-6.598 1.32a2.5 2.5 0 0 1-2.985-2.29L9 19.17v-.55l-.01.002a2.5 2.5 0 0 1-2.985-2.29L6 16.17v-.55l-.01.002a2.5 2.5 0 0 1-2.985-2.29L3 13.17V6.64a3 3 0 0 1 2.238-2.902l.174-.04zm6.392 7.961l-6.598 1.32a1 1 0 0 0-.804.98v6.531a.5.5 0 0 0 .598.49l6.598-1.32a1 1 0 0 0 .804-.98v-6.53a.5.5 0 0 0-.598-.49m-3-3L8.804 8.66A1 1 0 0 0 8 9.64v6.531a.5.5 0 0 0 .598.49L9 16.58v-3.94a3 3 0 0 1 2.412-2.942L16 8.78v-.95a.5.5 0 0 0-.598-.49m-3-3L5.804 5.66A1 1 0 0 0 5 6.64v6.531a.5.5 0 0 0 .598.49L6 13.58V9.64a3 3 0 0 1 2.412-2.942L13 5.78v-.95a.5.5 0 0 0-.598-.49"/></svg>Deploy container applications to edge devices in a few clicks.

### Featured apps

The built-in library includes (and continues to grow):

- **Home Assistant** — open-source home automation hub
- **Ollama** — run open-source large language models locally on the edge
- **OpenClaw** — open-source platform for deploying and managing containerized edge applications
- **reComputer AI Suite** — Computer Vision (CV), Vision-Language Models (VLM), and Large Language Models (LLM) optimized for reComputer hardware

Compatible with **M1 Gate**, **Raspberry Pi 4 / 5**, **NVIDIA Jetson**, and **Seeed reComputer**.

### How it works with SenseCraft Fleet

Container apps are managed on [**SenseCraft Fleet**](https://seeed-fleet.com) and deployed through [**SenseCraft AI**](https://sensecraft.seeed.cc/ai/home):

- **SenseCraft Fleet** is where container images live—you upload images, define their configuration schema, and bind your devices.
- **SenseCraft AI** is where you pick an app from your library, choose a target device, configure it, and trigger deployment.

Your SenseCraft AI account is linked with SenseCraft Fleet automatically; bound devices and apps stay in sync across both platforms.

### Supported platforms

Apps are platform-specific—the image and target device must match:

- **Linux / ARM64** — e.g., Seeed reComputer, Raspberry Pi 4 / 5, NVIDIA Jetson, M1 Gate
- *Linux / AMD64 — coming soon*

### Configuration workflow

**Select an app:** Choose from the app library on SenseCraft Fleet—the built-in catalog. If you prefer to upload your customized container app, you will need to add it through [**SenseCraft Fleet**](https://seeed-fleet.com).

**Configure the app:** Each app exposes the configuration items its author defined on SenseCraft Fleet. Typically you shouldn't need to configure anything, unless you have unique requirements.

### Deployment workflow

**Step 1 — Select an app:** Click **Deploy Container App**. SenseCraft AI loads your full app library from SenseCraft Fleet (built-in catalog plus any custom apps you've uploaded), each shown with name, icon, and description.

**Step 2 – Bind a device:** If you already have a bound device, skip to Step 3. Otherwise, power on the device, connect it to the network, then bind it based on your hardware:

- **Seeed device running the Seeed factory image:** Enter the last 6 digits of the device's **CPU ID** or **MAC address** to bind instantly.
- **Seeed device without the factory image, or third-party device:** Get the device's IP address, open a terminal and SSH into it, then run the binding command shown in the binding flow.

Once binding completes, the device appears in your bound device list.

**Step 3 — Select a target device:** Pick from the list of bound devices compatible with the app's platform. Incompatible devices are filtered out automatically.

**Step 4 — Configure the app:** Fill in the configuration items exposed by the app author. See the [Configuration workflow](#configuration-workflow) section above for control types and defaults.

**Step 5 — One-click deploy:** Click **Deploy**. SenseCraft AI shows a live progress indicator and streams status through each phase. If anything fails, the exact error appears in a popup so you can fix and retry. Re-deploy with new values to update an existing deployment—the previous one is replaced automatically.

:::note
Single-image Docker apps are supported today. Docker Compose (multi-container apps) is on the roadmap.
:::

## Flash firmware

<svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 24 24" style={{verticalAlign:'-0.3em',marginRight:'0.35em',color:'var(--ifm-color-primary)'}}><path fill="currentColor" d="M16.586 3A2 2 0 0 1 18 3.586L20.414 6A2 2 0 0 1 21 7.414V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7.414A2 2 0 0 1 3.586 6L6 3.586A2 2 0 0 1 7.414 3zM19 9H5v10h14zm-7 1a1 1 0 0 1 1 1v3.186l.414-.414a1 1 0 1 1 1.414 1.414l-2.12 2.121a1 1 0 0 1-1.415 0l-2.121-2.121a1 1 0 1 1 1.414-1.414l.414.414V11a1 1 0 0 1 1-1m4.586-5H7.414l-2 2h13.172z"/></svg>Flash a precompiled firmware binary to an ESP32 device directly from the browser, without installing a separate flashing tool. Use this when your firmware is already compiled with all parameters baked in.

**Supported devices:**

- [Seeed Studio XIAO ESP32C3](https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html)
- [Seeed Studio XIAO ESP32C6](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html)
- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)
- [Seeed Studio XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)
- [Seeed Studio XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)
- [Seeed Studio XIAO ESP32S3 Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Plus-p-6361.html)
- [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html)
- [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- [Seeed Studio XIAO nRF52840 Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Plus-p-6359.html)
- [Seeed Studio XIAO nRF52840 Sense Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Sense-Plus-p-6360.html)
- [Seeed Studio XIAO RP2040](https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html)
- [Seeed Studio XIAO RP2350](https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html)
- [Seeed Studio XIAO RA4M1](https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html)
- [Seeed Studio XIAO MG24](https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html)
- [Seeed Studio XIAO MG24 Sense](https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html)
- [Wio Terminal (D51R)](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) *(coming soon)*
- [Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface.html) *(coming soon)*
- [Grove Beginner Kit for Arduino](https://www.seeedstudio.com/Grove-Beginner-Kit-for-Arduino-p-4549.html) *(coming soon)*

### Prerequisites:

**A single merged `.bin` file.** If you have separate bootloader, partition, and app binaries, merge them before uploading.

- **Arduino IDE 2.x:** A merged binary is **only** produced when you run **Sketch → Export Compiled Binary**. The output `*.ino.merged.bin` is written to a `build/` folder next to your `.ino` file.
- **Older Arduino IDE / manual merge:** **Export Compiled Binary** writes separate bootloader, partition, and app `.bin` files — merge them with `esptool.py merge_bin` before uploading. See the Seeed Studio forum guide: [How to export a single merged `.bin` file from Arduino IDE](https://forum.seeedstudio.com/t/how-to-export-compiled-binary-create-a-single-bin-file-for-production-and-test/274990).

### Configuration Workflow

1. Click **Upload firmware** and upload your `.bin` file.
2. **Select device type** from the drop-down.

### Deployment Workflow

1. Connect the device to your computer.
2. Click **Flash firmware**. The button shows the current phase, with a progress bar and debug log below it: connect serial → detect device → flash → reboot.
3. After flashing completes, verify behavior in the preview window.

If any step fails, an error popup explains the cause so you can fix and retry.

## Node-RED

<svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.25em" viewBox="0 0 128 128" style={{verticalAlign:'-0.3em',marginRight:'0.35em',color:'#8F0000'}}><path fill="currentColor" d="M64 0L8.61 32.033v63.979L64 128l55.39-31.986V32.053zm.023 5.3a1 1 0 0 1 .471.132l50.022 28.873c.306.176.523.502.523.855v57.744c0 .354-.217.68-.523.856l-50.022 28.879a.99.99 0 0 1-.988 0l-50.1-28.877a.99.99 0 0 1-.494-.856V35.16c0-.353.188-.679.494-.855l50.1-28.873a1 1 0 0 1 .517-.131zM64 7.43l-49.06 28.3v17.088h20.308c3.273.019 6.052 2.326 6.363 5.524c2.41-.304 3.891-.97 4.95-1.94c1.24-1.138 2.095-2.763 3.136-4.652c1.042-1.889 2.316-4.057 4.643-5.654c1.88-1.291 4.649-1.93 7.902-2.09v-1.127c0-3.478 2.713-6.281 6.192-6.281h25.183c3.479 0 6.586 2.803 6.586 6.28v6.188c0 3.479-3.121 6.325-6.6 6.325h-25.18c-3.478 0-6.18-2.846-6.18-6.325v-.802c-2.46.146-4.36.605-5.472 1.369c-1.43.98-2.323 2.4-3.311 4.191c-.92 1.667-1.95 3.622-3.666 5.342c9.2 1.46 13.774 4.955 17.426 8.148c4.393 3.842 7.916 6.9 19.728 6.987v-.856c0-3.478 2.979-6.383 6.457-6.383h19.657V35.73zm4.434 33.52c-1.175 0-2.143.754-2.143 1.929v6.187c0 1.175.956 1.973 2.13 1.973h25.184c1.175 0 2.047-.798 2.047-1.973V42.88c0-1.175-.86-1.93-2.035-1.93zM14.94 56.774v10.287h20.307c1.175 0 2.047-.776 2.047-1.95v-6.188c0-1.175-.873-2.149-2.047-2.149zm26.793 5.983l-.002 2.353c0 3.479-3.004 6.303-6.482 6.303H14.941v20.92L64 120.641l49.06-28.307v-6.479H93.407c-3.478 0-6.457-2.744-6.457-6.222v-1.074c-12.79-.17-18.177-4.186-22.554-8.014c-4.562-3.989-8.474-7.564-22.66-7.787zm51.674 8.656c-1.174 0-2.107.857-2.107 2.031v6.08c0 1.175.933 1.979 2.107 1.979h19.655v-10.09z"/></svg>The [Node-RED](https://nodered.org) block helps you build visual logic flows for reCamera.

### Official resources

- [GitHub](https://github.com/node-red/node-red)
- [Documentation](https://nodered.org/docs/)

### Supported devices

- [reCamera](https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html)

### Prepare your workflow

After you add the Node-RED block, configure the flow in either of these ways:

1. **Create new workflow:** Connect to reCamera (wired or wireless), open its Dashboard, and edit online.
2. **Upload local file:** Upload a JSON flow you already built. The system validates file type so it can be parsed reliably.

### Select AI vision model

JSON flows do not embed model binaries. Specify which model this flow should use:

- **Device built-in:** Use models preinstalled on reCamera, including YOLO11n variants for classification, detection, segmentation, and pose.
- **Public models:** Browse SenseCraft public models shared by others for reCamera.
- **My model:** Choose from your private library.

:::caution
If you use a private model under **My model** and publish the app to the public community, that model will be made public as well. You will be prompted before publishing.
:::

## Aily Blockly

<img src="https://github.com/ailyProject.png" alt="" style={{width:'1.25em',height:'1.25em',verticalAlign:'-0.3em',marginRight:'0.35em',borderRadius:'4px'}}/>[Aily Blockly](https://aily.pro) is a visual programming environment. With this block you can flash programs you built in Aily Blockly to edge devices in one step.

### Official resources

- [GitHub](https://github.com/ailyProject/aily-blockly)
- [Documentation - Global site](https://aily.pro/doc)
- [Documentation - Mainland China site](https://yiyu.pro/doc)

### Supported devices

- [Seeed Studio XIAO ESP32C3](https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html)
- [Seeed Studio XIAO ESP32C6](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html)
- [Seeed Studio XIAO SAMD21](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)
- [Seeed Studio XIAO ESP32S3](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)
- [Seeed Studio XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)
- [Seeed Studio XIAO ESP32S3 Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32S3-Plus-p-6361.html)
- [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html)
- [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- [Seeed Studio XIAO nRF52840 Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Plus-p-6359.html)
- [Seeed Studio XIAO nRF52840 Sense Plus](https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Sense-Plus-p-6360.html)
- [Seeed Studio XIAO RP2040](https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html)
- [Seeed Studio XIAO RP2350](https://www.seeedstudio.com/Seeed-XIAO-RP2350-p-5944.html)
- [Seeed Studio XIAO RA4M1](https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html)
- [Seeed Studio XIAO MG24](https://www.seeedstudio.com/Seeed-Studio-XIAO-MG24-p-6247.html)
- [Seeed Studio XIAO MG24 Sense](https://www.seeedstudio.com/Seeed-XIAO-MG24-Sense-p-6248.html)
- [Wio Terminal (D51R)](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [Seeeduino Lotus](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface.html)
- [Grove Beginner Kit for Arduino](https://www.seeedstudio.com/Grove-Beginner-Kit-for-Arduino-p-4549.html)

### Bind Project ID

Enter the project code that points to your public Aily Blockly template.

#### How to get a Project ID

1. Build your project in Aily Blockly, then click **`Build (F5)`** to compile.
2. After a successful compile, open the **Cloud Space** panel and click **`Sync this project to cloud`**.
3. Your Project ID appears in the labeled area (**`ID: …`**), only use the numbers.
4. Repeat these steps whenever you change the project so the cloud copy stays up to date.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/tool_blocks/aily-get-project-id.png" alt="How to get an Aily Blockly Project ID" style={{width:1000, height:'auto'}}/></div>
