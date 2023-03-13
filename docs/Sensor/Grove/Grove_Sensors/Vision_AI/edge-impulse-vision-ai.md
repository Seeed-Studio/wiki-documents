---
description: Train and Deploy Your Own AI Model with Edge Impulse
title: Train and Deploy Your Own AI Model with Edge Impulse
keywords:
- Sensor Vision_AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /edge-impulse-vision-ai
last_update:
  date: 1/31/2023
  author: jianjing Huang
---


# Fast training of models for Grove Vision AI using Edge Impulse

[Grove - Vision AI Module](https://wiki.seeedstudio.com/Grove-Vision-AI-Module) is a thumb-sized board based on Himax HX6537-A processor which is equipped with a 2-Megapixel OV2640 camera, microphone, 3-axis accelerometer and 3-axis gyroscope. It offers storage with 32 MB SPI flash, comes pre-installed with ML algorithms for face recognition and people detection and supports customized models as well. It is compatible with the XIAO ecosystem and Arduino, all of which makes it perfect for getting started with AI-powered camera projects!

It is fully supported by Edge Impulse which means you will be able to sample raw data from the camera, build models, and deploy trained machine learning models to the module directly from the studio without any programming required. Grove - Vision AI Module is available for purchase directly from [Seeed Studio Bazaar](https://www.seeedstudio.com/Grove-Vision-AI-Module-p-5457.html).

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/1.jpg"/></div>

The Edge Impulse firmware for this board is open source and hosted on GitHub: [edgeimpulse/firmware-seeed-vision-ai-internal](https://github.com/edgeimpulse/firmware-seeed-vision-ai-internal/tree/edge-impulse-firmware)

Quick links access:

- Firmware source code: [GitHub repository](https://github.com/edgeimpulse/firmware-seeed-grove-vision-ai)
- Pre-compiled firmware: [seeed-grove-vision-ai.zip](https://cdn.edgeimpulse.com/firmware/seeed-grove-vision-ai.zip)

## Installing dependencies

To set this board up in Edge Impulse, you will need to install the following software:

1. [Edge Impulse CLI](https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation).
2. On Linux:
   - GNU Screen: install for example via `sudo apt install screen`.
3. Download the latest [Bouffalo Lab Dev Cube](https://dev.bouffalolab.com/download)

:::tip
**Problems installing the Edge Impulse CLI?**
See the [Installation and troubleshooting guide](https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation).
:::

## Connecting to Edge Impulse

With all the software in place it's time to connect the board to Edge Impulse.

### Step 1. Update BL702 chip firmware

BL702 is the USB-UART chip which enables the communication between the PC and the Himax chip. You need to update this firmware in order for the Edge Impulse firmware to work properly.

1. Download [BL702-firmware-grove-vision-ai.zip](https://cdn.edgeimpulse.com/build-system/BL702-firmware-grove-vision-ai.zip) and extract it to obtain **tinyuf2-grove_vision_ai.bin** file.

2. Connect the board to the PC via a USB Type-C cable while holding down the **Boot** button on the board.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/2.jpg" /></div>

3. Open previously installed Bouffalo Lab Dev Cube software, select **BL702/704/706**, and then click **Finish**.

<div align="center"><img width={200} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/3.png" /></div>

4. Go to **MCU** tab. Under **Image file**, click **Browse** and select the firmware you just downloaded.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/4.png" /></div>

5. Click **Refresh**, choose the **Port** related to the connected board, set **Chip Erase** to **True**, click **Open UART**, click **Creat & Download** and wait for the process to be completed .

<div align="center"><img width ={200} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/5.png"/></div>

You will see the output as **All Success** if it went well.

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/6.png"/></div>

:::note
If the flashing throws an error, try to click **Create & Download** multiple times until you see the **All Success** message.
:::

### Step 2. Update Edge Impulse firmware

The board does not come with the right Edge Impulse firmware yet. To update the firmware:

1. [Download the latest Edge Impulse firmware](https://cdn.edgeimpulse.com/firmware/seeed-grove-vision-ai.zip) and extract it to obtain **firmware.uf2** file.

2. Connect the board again to the PC via USB Type-C cable and double-click the **Boot** button on the board to enter **mass storage mode**.

3. After this you will see a new storage drive shown on your file explorer as **GROVEAI**. Drag and drop the **firmware.uf2** file to GROVEAI drive.

<div align="center"><img width ={200} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/7.jpg"/></div>

Once the copying is finished **GROVEAI** drive will disapper. This is how we can check whether the copying is successful or not.

### Step 3. Setting keys

From a command prompt or terminal, run:

```
edge-impulse-daemon
```

This will start a wizard which will ask you to log in, and choose an Edge Impulse project. If you want to switch projects run the command with `--clean`.

Alternatively, recent versions of Google Chrome and Microsoft Edge can collect data directly from your board, without the need for the Edge Impulse CLI. See [this blog post](https://www.edgeimpulse.com/blog/collect-sensor-data-straight-from-your-web-browser) for more information.

### Step 4. Verifying that the device is connected

That's all! Your device is now connected to Edge Impulse. To verify this, go to [your Edge Impulse project](https://studio.edgeimpulse.com/studio/select-project?autoredirect=1), and click **Devices**. The device will be listed here.

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/8.png"/></div>

## Collecting data from Grove - Vision AI

With everything set up you can now build and run your first machine learning model with these tutorials:

- [Adding sight to your sensors](https://docs.edgeimpulse.com/docs/tutorials/image-classification).
- [Object detection](https://docs.edgeimpulse.com/docs/tutorials/object-detection).
- [Counting objects using FOMO](https://docs.edgeimpulse.com/docs/tutorials/detect-objects-using-fomo).

Frames from the onboard camera can be directly captured from the studio:

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/9.png"/></div>

Finally, once a model is trained, it can be easily deployed to the Grove – Vision AI Module to start inferencing!

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/10.png"/></div>

## Deploy model to Grove - Vision AI

After building the machine learning model and downloading the Edge Impulse firmware from Edge Impulse Studio, deploy the model uf2 to Grove - Vision AI by following steps 1 and 2 under [Update Edge Impulse firmware section](https://docs.edgeimpulse.com/docs/development-platforms/officially-supported-mcu-targets/seeed-grove-vision-ai#2.-update-edge-impulse-firmware).

## Compile Edge Impulse firmware from the source

If you want to compile the Edge Impulse firmware from source code, you can visit [this GitHub repo](https://github.com/edgeimpulse/firmware-seeed-grove-vision-ai) and follow the instructions included in the README. The model used for the official firmware can be found in this [public project](https://studio.edgeimpulse.com/public/87291/latest).

## Tech Support

Please do not hesitate to submit the issue into our [forum](https://forum.seeedstudio.com/).

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
