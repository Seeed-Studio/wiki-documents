---
description: Send camera images between two Wio-LR2021 Dev Kits over FLRC at 913.76 MHz, run face, gesture and water-meter models on the transmitter, and view the result in a browser.
title: Wio-LR2021 Dev Kit FLRC Image Transmission Demo
keywords:
  - Wio-LR2021
  - LR2021
  - FLRC
  - image transmission
  - camera
  - face detector
  - gesture recognition
  - water meter
  - ESP32-S3
image: https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/1-100038329-Wio-LR2021-Dev-Kit.webp
slug: /wio_lr2021_dev_kit_flrc_image_transmission_demo
sku: 100038329
type: project
sidebar_position: 1
last_update:
  date: 11/19/2026
  author: David Du
createdAt: '2026-11-19'
updatedAt: '2026-11-20'
url: https://wiki.seeedstudio.com/wio_lr2021_dev_kit_flrc_image_transmission_demo/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Wio-LR2021 Dev Kit FLRC Image Transmission Demo

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/1-100038329-Wio-LR2021-Dev-Kit.webp" style={{width:600, height:'auto'}}/>
</div>

<div className="table-center">
  <table align="center">
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/Wio-LR2021-Dev-Kit-p-7040.html"
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

Two Wio-LR2021 Dev Kits are enough to build a complete wireless camera link. One kit captures a `320 × 240` frame, runs a small detector on the **ESP32-S3**, draws the result, and compresses the frame as JPEG. It sends the JPEG over **FLRC** at 2.6 Mbps. The second kit reassembles the image in PSRAM and serves it from a web page. A phone or laptop joins the receiver's access point and watches the link in a browser, with no application to install. The result is a sequence of still images, not a video stream.

The demo has four transmitter builds. Three run a model: **face detection**, **hand-gesture recognition**, and **water-meter reading**. The fourth sends the camera image without inference and sets the baseline for the link. You flash one build at a time, so the same transmitter hardware can show any of the four modes.

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/video/flrc_demo_summary.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::note
The face build is a **face detector**, not a face-recognition system. It finds a face and draws a box around it. It does not identify who the person is, and it is not suitable for authentication.
:::

### What You Will Build

- A **transmitter** that captures an image, runs a Swift-YOLO model, draws boxes and labels, and sends the annotated JPEG over FLRC.
- A **receiver** that reassembles the image, checks it, and publishes the newest complete frame over Wi-Fi.
- A **browser view** at `192.168.4.1` that shows the image, the completed-image count and the current frame rate.

## How It Works

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/flrc_demo_architecture.png" style={{width:1000, height:'auto'}} alt="Block diagram of the FLRC camera link: camera, ESP32-S3 inference and JPEG, LR2021 transmitter, FLRC burst, LR2021 receiver, PSRAM reassembly, SoftAP and browser"/>
</div>

### Transmitter Path

The transmitter runs the whole pipeline on one board:

1. The **GC2145** camera on the Media HAT captures a `320 × 240 RGB565` frame.
2. The **ESP32-S3** resizes the frame to the model input and runs inference.
3. The firmware draws each detection on the frame, including the class label and a confidence percentage. The water-meter build also draws a per-digit score and a `READING:` line.
4. The annotated frame is compressed as JPEG.
5. The LR2021 splits the JPEG into fragments, adds an image ID and a CRC32, and sends the image in an FLRC burst.

The camera and the JPEG encoder are fixed in this firmware build. 

### Receiver Path

The receiver does not run a model. It listens on the same FLRC frequency and moves received packets into PSRAM with SPI DMA. The ESP32-S3 reassembles the fragments, checks the size and CRC32, and publishes the newest complete image. An incomplete image is discarded instead of being shown in parts.

The ESP32-S3 also runs a `SoftAP` and a small HTTP server. The page requests the newest JPEG and the counters about every 200 ms, so the browser always shows the latest complete frame. All inference and drawing happen before transmission; the browser receives a finished JPEG.

### Why FLRC

LoRa trades data rate for range. FLRC does the opposite: it sends a short burst at a high rate and accepts a shorter range. At 2.6 Mbps, one 320 × 240 JPEG takes a fraction of a second of air time. That is what makes a camera demo possible on a LoRa-class radio.

The 2.6 Mbps figure is the FLRC air rate, not the frame rate. Capture, inference, JPEG encoding, transmission and reassembly all add time. The [Performance](#performance) section shows the receiver-side rates measured in the clips.

## Hardware Preparation

### What You Need

| Item | Quantity | Notes |
| --- | --- | --- |
| Wio-LR2021 Dev Kit | 2 | One transmitter, one receiver |
| Media HAT with GC2145 camera | 1 | Fits the transmitter only |
| Sub-GHz antenna | 2 | One on each board, marked `SUB-1G` |
| 2.4 GHz antenna | 1 | Receiver only; fits the ESP32-S3 2.4 GHz U.FL pad, not the `LR-2.4G` SMA |
| USB-C cable | 2 | Data-capable, not charge-only |
| USB power source | 2 | 5 V; a computer port is enough |
| Phone or laptop | 1 | 2.4 GHz Wi-Fi |

### Step 1 — Fit the Antennas

Screw the sub-GHz antenna onto the `SUB-1G` connector on each board. Tighten by hand only. On the receiver, fit the 2.4 GHz antenna to the ESP32-S3 U.FL pad marked `2.4G`. Leave the `LR-2.4G` SMA empty.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/install_antenna.jpg" style={{width:600, height:'auto'}}/>
</div>

:::caution
Transmitting into an open antenna port can stress the power amplifier. Fit the antenna before you power on either board.
:::

### Step 2 — Fit the Camera HAT to the Transmitter

Line up the two 16-pin sockets on the Media HAT with the headers on the transmitter, pin 1 to pin 1. Press down evenly on both ends. The camera is part of the HAT, so no separate FPC cable is needed.

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/video/connect_media_hat.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::caution
Do not connect or remove the camera HAT while the board is powered. Power off the board and unplug USB-C first.
:::

Leave the receiver without a camera HAT. It uses the sub-GHz antenna, the 2.4 GHz antenna and power, but no camera.

### Step 3 — Mark the Roles

Label the boards before you flash them:

- **Transmitter:** camera HAT, sub-GHz antenna, USB-C for power and flashing.
- **Receiver:** sub-GHz antenna, 2.4 GHz antenna on the ESP32-S3 U.FL pad, USB-C to a computer or charger.

Both boards look the same, and the firmware is different. A label on the back saves a reflash later.

### Step 4 — Power Both Boards

Connect USB-C to both boards. The receiver needs power for the access point and the web server; the transmitter needs power for the camera and the radio. The recorded demo uses USB power.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/power_dev_kit.jpg" style={{width:600, height:'auto'}}/>
</div>

## Software Preparation

Download the firmware for the **Receiver**: 
 - [Receiver Firmware](https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/res/demo_firmware/flrc-rx-260914-1522.bin)

Download the firmware for the **Transmitter**:
  - [Face Detection Firmware](https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/res/demo_firmware/flrc-tx-face-detection-260914-1520.bin)
  - [Gesture Detection Firmware](https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/res/demo_firmware/flrc-tx-gesture-detection-260914-1525.bin)
  - [Meter Reading Firmware](https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/res/demo_firmware/flrc-tx-digital-meter-water-260914-1523.bin)

### Flash the Receiver

<Tabs groupId="flash-tool">
<TabItem value="esptool" label="esptool">

Close any serial terminal that is using the port, then run:

```bash
python -m esptool -p <PORT> -b 115200 --before default-reset --after hard-reset write-flash 0x0 flrc-rx-260914-1522.bin
```

Replace `<PORT>` with the port of the board:

| System | Port |
| --- | --- |
| Windows | `COM5` or the number in Device Manager |
| macOS | `/dev/cu.usbmodem*` |
| Linux | `/dev/ttyACM0` |

</TabItem>
<TabItem value="gui" label="ESP Flash Download Tool">

1. Open **ESP Flash Download Tool** and select **ESP32-S3**.
2. Add `flrc-rx-260914-1522.bin`.
3. Set the download address to `0x0`.
4. Select the port and start the download.
5. Press **RESET** on the board when the tool finishes.

</TabItem>
</Tabs>

### Flash the Transmitter

Repeat the same procedure with one transmitter build. Start with the face build:

```bash
python -m esptool -p <PORT> -b 115200 --before default-reset --after hard-reset write-flash 0x0 flrc-tx-face-detection-260914-1520.bin
```

To change the mode, flash a different transmitter build. The receiver stays as it is.

:::caution
Write the merged image at `0x0`. Do not use the bootloader or application offsets from a split build. Do not unplug the board while the write is in progress. Flashing replaces the factory firmware.
:::

### Open the Serial Log

Both builds print boot and status messages at `115200` baud rate, `8 data bits`, `no parity` and `1 stop bit`. The port is USB CDC, so the baud rate is nominal.

- The AI transmitters print the model name, the camera mode and the FLRC settings.
- The receiver prints the access point, the image counter and any discarded images.

## Run the Demo

### Step 1 — Boot the Receiver

Connect the receiver to USB-C and press **RESET** once. Wait for the access point to appear. The SSID starts with `Wio-LR2021-FLRC-RX-` and ends with four hex characters derived from the receiver's Wi-Fi MAC address. The password is `12345678`.

If the network does not appear, open the serial log and look for the access-point message. Check that the receiver build is flashed and that the 2.4 GHz antenna is fitted to the ESP32-S3 U.FL pad. Confirm that the board has a stable 5 V supply.

### Step 2 — Connect Your Browser Device

Join the `Wio-LR2021-FLRC-RX-xxxx` network from a phone or laptop. Keep the device on this network; it does not need internet access.

On some phones, mobile data takes over when the access point has no internet. Turn off mobile data for the test, or choose the option that keeps the Wi-Fi connection.

### Step 3 — Open the Page

Open a browser and go to:

```
http://192.168.4.1
```

The page shows a black background, two lines of white text and the newest image. There is no login and no control panel.

### Step 4 — Point the Transmitter

Power the transmitter and point the camera at the subject. The first image may take a few seconds. For the best result:

- Keep the subject inside the frame and at a comfortable distance.
- Use even lighting. Strong backlight or glare hides the subject.

## What You See

### The Page Header

The page shows two counters and a rate above the image:

```
Received frames: 174 (image 23)
FPS: 2.22
```

- **Received frames** counts the JPEG images the receiver has completed.
- **image** is the image ID assigned by the transmitter.
- **FPS** is the end-to-end rate the receiver measured.

The frame count and image ID are separate and do not need to match. They can differ after a reset.

### Face Detection

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/video/face_detect.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

The face build draws a magenta box around the detected face and a label bar with `face` and a confidence percentage. The bar sits at the top-left corner of the box. The page does not rotate frames; mount the camera in the orientation you want to see.

The detector does not identify the person. Two different people produce the same `face` label.

### Gesture Recognition

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/video/gesture_meter_recognition.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

The gesture build draws a box around the hand and labels it `paper`, `rock` or `scissors`. In this frame the model returned two overlapping candidates for the same fist, so the transmitter drew two boxes and two labels. The firmware does not merge duplicate candidates. The larger score is the better candidate.

Show one hand at a time and keep the fingers inside the frame. Avoid a busy background. The model is trained on the three gestures, not on arbitrary hand poses.

### Water-Meter Reading

The water-meter build draws a box around each digit and prints a score above the box. It adds a yellow `READING:` line at the bottom of the image. The reading is assembled from the detected digits. It can change from frame to frame when the meter is angled or the digits are partly hidden.

This is a reading aid, not a certified meter reader. Check the reading against the meter before you use it in any billing or reporting workflow.

### Raw Camera Baseline

<div class="table-center">
<iframe width="600" height="350" src="https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/video/raw_camera.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

The raw build sends the camera image without inference. It is the fastest mode in the demo and the best way to check the link before you add a model. The clip shows an inverted image; the receiver displays the JPEG as it arrives and does not rotate it. Mount the camera upright for an upright view.

## Performance

These rates were read from the receiver page in the demo clips. They are end-to-end rates: capture, inference, drawing, JPEG encoding, FLRC transmission and reassembly are all included.

| Transmitter build | On-device work | Observed rate |
| --- | --- | --- |
| Raw camera | Capture, JPEG, FLRC | 7.6–9.9 fps, peak `11.27` fps |
| Face detection | 96 × 96 model, draw, JPEG, FLRC | about `2.2` fps |
| Gesture recognition | 192 × 192 model, draw, JPEG, FLRC | about `0.9` fps |
| Water-meter reading | 192 × 192 model, draw, JPEG, FLRC | about `0.8` fps |

In this demo, the raw build is the ceiling for the pipeline, not a guaranteed rate. The AI builds are slower because the model runs on every frame. The 192 × 192 models also take longer than the 96 × 96 face model. The 2.6 Mbps FLRC rate is not the frame rate; the image size and per-frame processing dominate.

## Resources

### Firmware

- 🗃️ [**Wio-LR2021 Dev Kit FLRC Image Demo Firmware Set**](https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/res/demo_firmware/FLRC_Image_Demo_Firmware_Set.zip)

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
