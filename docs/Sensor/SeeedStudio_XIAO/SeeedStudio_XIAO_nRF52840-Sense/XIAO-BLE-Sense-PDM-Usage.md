---
description: PDM Microphone Usage on Seeed Studio XIAO nRF52840 Sense
title: PDM Usage for XIAO nRF52840 Sense
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-BLE-Sense-PDM-Usage
last_update:
  date: 06/25/2024
  author: Spencer
---

# The PDM Microphone Usage on Seeed Studio XIAO nRF52840 Sense

## Overview

**Seeed Studio XIAO nRF52840 Sense** is equipped with a **PDM (Pulse Density Modulation) Microphone** which can receive audio data in real-time and can be used for audio recognition. With its wireless connectivity and fine performance in processing audio data thanks to the FPU, it is ideal for interesting TinyML projects like remote voice controlling of devices.

:::note Note

- **Seeed Studio XIAO nRF52840** is not equipped with this PDM Microphone module.
- The PDM Microphone will perform better when we use the *Seeed nrf52 mbed-enabled Boards Library*, so we highly recommend that.

:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new7.png" alt="pir" width={680} height="auto" /></p>

This wiki will introduce the basics of **using the PDM Microphone** on this board and include two examples:

1. [Visualizing Raw Data](#demo1): This example demonstrates how to visualize raw data from the microphone in real-time.
2. [Saving Recorded Audio](#demo2): This example shows how to save recorded audio from the microphone onto an SD card.

Let's explore these examples now!

## Example 1: Visualize Raw Data from PDM Microphone in Real-Time {#demo1}

In this example, we will visualize the raw data from the PDM Microphone on a **Serial Monitor** and **Serial Plotter** in real-time.

### Prerequisites

- **Step 1**. Get the Arduino Library, [Download Seeed_Arduino_Mic Library](https://github.com/Seeed-Studio/Seeed_Arduino_Mic) as a zip file

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-zip.png" alt="pir" width={1000} height="auto" /></p>

- **Step 2**. Open Arduino IDE, navigate to `Sketch > Include Library > Add .ZIP Library...` and open the downloaded zip file

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>

### Run Example

- **Step 3.** Navigate to `File > Examples > Seeed Arduino Mic > mic_serial_plotter` to open **mic_serial_plotter**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-install.png" alt="pir" width={550} height="auto" /></p>

- **Step 4.** Upload the codes and open the **Serial Monitor**

:::note Note
Once you upload the codes, it will not be executed automatically until you click **Serial Monitor** on the upper right corner of the Arduino window.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-output-serial.png" alt="pir" width={550} height="auto" /></p>

Now you will see the raw microphone data displayed in real-time on the serial monitor as shown above!

### Visualizing Raw Data

- **Step 5.** If you navigate to `Tools > Serial Plotter` and open **Serial Plotter**, you will see the raw microphone data displayed in real-time on a waveform graph!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-output-graph.png" alt="pir" width={700} height="auto" /></p>

## Example 2: Save Recorded Audio from the Microphone onto an SD Card {#demo2}

Just like the Seeed Studio XIAO series, Seeed Studio XIAO nRF52840 Sense is perfectly compatible with [Seeeduino Seeed Studio XIAO Expansion board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html). It can be installed on the expansion board, allowing you to use the SD card module on the board. If you prefer not to use the expansion board, you can connect a separate SD card module through the **SPI** interface.

### Prerequisites

- **Step 1.** Attach the Seeed Studio XIAO nRF52840 Sense to a Seeed Studio XIAO Expansion Board and insert an SD card into the SD card slot of the expansion board.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SD-connect.png" alt="pir" width={500} height="auto" /></p>

:::tip

When you see the light on the expansion board regularly flashing **green**, the connection is successful.

> Since we have already installed the *Seeed_Arduino_Mic Library* before, we do not need to install it again for this example. However, if you do not have it installed, please follow the instructions from the example above.
:::

- **Step 2**. [Download Seeed_Arduino_FS Library](https://github.com/Seeed-Studio/Seeed_Arduino_FS) as a zip file

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/arduino-fs-zip.png" alt="pir" width={1000} height="auto" /></p>

**Note:** This library is needed to access the SD card and save the data.

### Run Example

- **Step 3**. Open Arduino IDE, navigate to `Sketch > Include Library > Add .ZIP Library...` and open the downloaded zip file.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>

- **Step 4.** Navigate to `File > Examples > Seeed Arduino Mic > mic_Saved_OnSDcard` to open **mic_Saved_OnSDcard**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-sd-install.jpg" alt="pir" width={550} height="auto" /></p>

- **Step 5.** Upload the codes and open the **Serial Monitor**

### Saving data

**Note:** Once you upload the codes, they will not execute automatically until you click **Serial Monitor** in the upper right corner of the Arduino window.

Now the audio data will start sampling, record for 5 minutes, and save the data to the SD card automatically.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDMsavecodeoncard.png" alt="pir" width={800} height="auto" /></p>

This **test.9568.wav** is a 5-second audio file and it is saved on the SD card.

:::note Sample Again?
If you want to resample audio data, you should push the reset button and then click **Serial Monitor** again to start sampling.
:::