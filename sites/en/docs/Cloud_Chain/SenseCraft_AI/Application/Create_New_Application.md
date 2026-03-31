---
description: How to create a new application in SenseCraft AI.
title: Creating a New Application
keywords:
  - create application
  - sensecraft ai
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /sensecraft-ai/application/create-new-application
sidebar_position: 1
last_update:
  date: 03/30/2026
  author: Rida
createdAt: '2026-03-30'
updatedAt: '2026-03-30'
url: https://wiki.seeedstudio.com/sensecraft-ai/application/create-new-application/
---
# Creating a New Application in SenseCraft AI

## Create Application

Go to the **My Applications** page, and click **Create App** > **Upload**.

To protect your work, once you enter the editing page, your changes will be **saved automatically**, and the navigation bar will show the save status in real time.

## Building the Application

The application creation process is divided into four clear steps, which you can switch between at any time using the top navigation bar.

### Step 1: App Information

This is the first way others will learn about your application. Please consider it carefully to make your app more engaging.

- **Application Name**: Give your application a clear name so others can understand what it does at a glance.

- **Application Excerpt**: Summarize the core scenario, technologies, devices, and so on in concise language.

- **Scene**: Choose the most appropriate category tag for your application. This matters for discovery and promotion.

- **License**: Set your license here, including whether others may copy and modify your work, and whether commercial use is allowed.

:::caution
If you change the license later, actions that already took place before the change (such as duplicating) and their outcomes are not affected.
:::

- **Images**: Display images strongly influence how attractive your application looks. The first image is used as the cover by default. You can upload up to 16 images; each file must be 2MB or smaller. A **4:3** aspect ratio is recommended.

### Step 2: Documentation

This is the core area of your application. Write a detailed **application introduction** and **deployment** workflow. Use the button in the upper-right corner to show or hide the live preview at any time so you can review the deployment flow and test deployment from another user's perspective.

#### Edit with Markdown

The text editor uses Markdown. Type `/` while editing to open a shortcut menu for inserting headings or tool blocks (coming in a future update).

#### Application introduction

Here you can describe the background, principles, and design of your project in free text. In this section you cannot add Tool Blocks that call SenseCraft capabilities.

#### Application deployment

Describe your deployment process step by step so others can reproduce your application, including prerequisites for each step. Click the `+` control to add operation steps. Keep the order logical and the instructions detailed. Toggle the live preview to check whether someone else could follow your steps successfully.

#### Using Tool Blocks

In the deployment flow you can insert SenseCraft AI integrated features in one click. They streamline both your authoring experience and end-user deployment.

##### AI Vision

Deploy AI vision models for object recognition, detection, classification, and related tasks on supported hardware. Inference results can be streamed in real time via MQTT, GPIO, or serial (Serial), depending on configuration.

The tool block currently supports **Detection** and **Classification**. Segmentation and pose estimation are planned for a later release.

**Supported devices:**

- [XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)
- [Grove - Vision AI V2](https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html)
- [SenseCAP Watcher](https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html)
- [SenseCAP A1102](https://www.seeedstudio.com/SenseCAP-A1102-LoRaWAN-Vision-AI-Sensor-p-6347.html)
- [reCamera](https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html)

**SenseCraft AI model:** Select high-quality models shared publicly by the community from the model library.

**My model:** Pick a model from your private saved list.

:::caution
When you publish an application that includes this model to the community, the private model will automatically become public.
:::

- **Upload model:** Upload model files trained on third-party platforms. You must provide the model name, task type (Task), model categories (Class ID and Class Name), attach the model file, and select supported devices. After upload, the model appears under **My model**.

- **Train model:** To train a new model or retrain from an existing one, open the training entry and follow the wizard. When finished, open **Historical models**, choose **Send to SenseCraft**, complete the upload flow, and save the result to **My model**.

**Select device:** From the drop-down, choose the hardware you actually use from the list supported by this model.

**Adjust recommended parameters:** Tune inference and device settings for your scenario. These values are written to the device as defaults at deployment time.

- **Confidence threshold:** Criterion for whether the model emits a final prediction. Raising the threshold tends to reduce false positives; lowering it tends to reduce false negatives.

- **IOU threshold:** In detection tasks, IoU compares predicted boxes to ground truth. A higher threshold helps separate overlapping objects but may produce duplicate boxes on one object if set too high. A lower threshold merges duplicates but may merge two nearby objects if set too low.

- **Output mode**

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

##### AI Audio

Deploy AI audio models for speech recognition on supported hardware. Results can be streamed via MQTT, GPIO, or serial, depending on configuration.

**Supported devices:**

- [XIAO ESP32S3 Sense](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html)

**SenseCraft AI model:** Select community-shared models from the library.

**My model:** Choose from your private list.

:::caution
When you publish an application that includes this model to the community, the private model will automatically become public.
:::

- **Upload model:** Upload model files trained on third-party platforms. Provide the model name and categories (Class ID and Class Name). After upload, the model appears under **My model**.

- **Train model:** Train a new or updated model, then send it to SenseCraft from **Historical models** as with vision models.

**Select device:** Audio models currently support XIAO ESP32S3 Sense only.

**Adjust recommended parameters:** Fine-tune values for your scenario.

- **Confidence threshold:** Same role as for vision; adjust the trade-off between missed and spurious outputs.

- **Output mode:** Default output path for the audio model.

##### AI Vibration

Deploy vibration anomaly detection by learning “normal” vibration and flagging deviations.

**Supported devices:**

- XIAO ESP32S3 Sense (with [3-axis accelerometer](https://seeedstudio.feishu.cn/record/QFIprpQsmesStwcOpZWc98Ccn9n))

**Adjust recommended parameters:** Tune sampling, power-on behavior, GPIO, and output for your setup.

- **Sampling window:** Samples per time unit. Too large slows inference; too small may underfit normal vibration.

- **Enable default power-on inference:** When off, inference does not auto-start at power-on; use an external trigger for low-power use.

- **GPIO:** Drive pins on abnormal vibration—for example set a level or toggle an LED.

- **Output mode:** Default output path for the vibration model.

##### Node-RED

The Node-RED block helps you build visual logic flows for reCamera.

**Prepare your workflow:** After you add the Node-RED block, configure the flow in either of these ways:

1. **Create new workflow:** Connect to reCamera (wired or wireless), open its Dashboard, and edit online.

2. **Upload local file:** Upload a JSON flow you already built. The system validates file type so it can be parsed reliably.

**Select AI vision model:** JSON flows do not embed model binaries. Specify which model this flow should use:

1. **Device built-in:** Use models preinstalled on reCamera, including YOLO11n variants for classification, detection, segmentation, and pose.

2. **Public models:** Browse SenseCraft public models shared by others for reCamera.

3. **My model:** Choose from your private library.

:::caution
**Publishing:** If you use a private model under **My model** and publish the app to the public community, that model will be made public as well. You will be prompted before publishing.
:::

##### Aily Blockly

Aily Blockly is a visual programming environment. With this block you can flash programs you built in Aily Blockly to edge devices in one step.

**Supported products:**

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

**Bind Project ID:** Enter the project code that points to your public Aily Blockly template.

- **How do I get a Project ID?** Open the Aily Blockly desktop app. In **CLOUD SPACE** on the right, find your project card. The string under the card (for example `prj_be881f`) is your Project ID.

![](https://seeedstudio.feishu.cn/space/api/box/stream/download/asynccode/?code=YjczYzljYmQ3NjhlNDg4NzhlNDBiZmM1YjZlNTYzOWRfa1VaTU5hNEFRN2g3WFF6a1g1c0VMNGFkcDNxcWoyTjVfVG9rZW46WWFmSmJER09yb3JVaUh4RmZITGNueFlSbmNlXzE3NzQ4NTczMzg6MTc3NDg2MDkzOF9WNA)

**Deployment device:** Select your hardware from the drop-down.

##### Deploy container app (coming soon)

##### Flash firmware (coming soon)

##### Configure MQTT (coming soon)

##### Debug tools (coming soon)

### Step 3: Bill of Materials (BOM)

List everything needed to reproduce your application.

#### From Seeed Studio

Search and add official Seeed hardware directly.

#### Other materials

For parts that are not from Seeed (fasteners, special cables, 3D-printed parts, and so on), provide name, short description, and quantity. Purchase links are helpful.

#### Software and platforms (coming soon)

List required software or platforms—for example Arduino IDE, Home Assistant, or Edge Impulse.

### Step 4: Preview and publish

Review the full application as an end user would. Before **Publish**, confirm required fields are complete, you have the right to distribute the code and assets, and nothing confidential or illegal is included.

After you publish, the app enters review. You cannot keep editing that draft until the review state changes. If you are not ready to publish, exit the editor—progress is still saved automatically.

## Publishing the application

:::caution
If your application uses models that are not yet public (for example ones you trained yourself), publishing the app will publish those models as well. We will remind you before it happens.
:::

:::caution
If your application depends on someone else's model and that model is later removed, you will be notified. Your application can stay published, but deployments can no longer use that model.
:::

### Application review

:::tip
After you submit for review, you can withdraw the request anytime if you need to keep editing.
:::

Administrators check the following areas:

1. **Content and security**

   - **Copyright and open-source licenses:** You must own or have rights to all code, models, images, and assets, or comply strictly with upstream licenses (MIT, Apache, and so on).

   - **Privacy and data security:** Especially for camera or microphone use, there must be no hidden exfiltration, unauthorized uploads, or backdoors.

   - **Law and community standards:** No trade secrets, illegal material, malware, or violent, sexual, or hateful content.

2. **Model quality and hardware fit**

   - **Model usability:** Custom models must load and parse correctly on the platform.

   - **Accuracy:** Real-world performance should match what you describe—no overstated claims.

   - **Hardware match:** Model size and logic must fit the boards you claim to support.

3. **Documentation and reproducibility**

   - **Clear basics:** Name, excerpt, tags, and cover image are accurate and not misleading.

   - **Accurate BOM:** Listed hardware matches what the deployment steps actually use.

   - **Reproducible deployment:** Steps are coherent; pin wiring, thresholds, MQTT settings, and similar details are explicit.

4. **Community guidelines**

   - **No spam:** Meaningless duplicates or ads without technical value are not allowed.

:::caution
To keep the SenseCraft AI community safe and high quality, the platform keeps final say on review decisions. Projects that break laws, policies, or security expectations may be rejected or removed at any time.
:::

## App management

### Manage public apps in the Application Store

When you open **your own published** application from the store, you can manage the **currently published** revision.

- **Duplicate:** Copy the stable published revision into a brand-new project.

- **Edit:** Open the draft for this app (same as **My Applications** > **Edit**).

- **Unpublish:** Temporarily hide the app from the public; its status becomes private.

### Manage apps in My Applications

- **Edit:** Open the editor. Edits apply to the **draft** only and do not change the live published version.

- **Duplicate:** Copy the current draft into a new standalone project.

- **Publish / Publish update:** Submit for review. After approval, the listing updates in the Application Store and replaces the previous public version when applicable.

- **Unpublish:** If the app is public, you can pull it back to private here.

:::tip
If your draft and the published version differ, after unpublish you may lose convenient access to the published snapshot. **Duplicate** the published version before unpublishing if you need to continue from it.
:::

- **Delete:** Remove the application entirely.

:::caution
If the app is currently published, delete will unpublish it from the store and then delete it permanently. Proceed carefully.
:::
