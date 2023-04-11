---
description: PDM Microphone Usage on Seeed Studio XIAO nRF52840 Sense
title: PDM Microphone Usage on Seeed Studio XIAO nRF52840 Sense
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-BLE-Sense-PDM-Usage
last_update:
  date: 1/11/2023
  author: shuxu hu
---

# The PDM Microphone Usage on Seeed Studio XIAO nRF52840 Sense

**Seeed Studio XIAO nRF52840 Sense** is equipped with a **PDM (Pulse Density Modulation) Microphone** which can receive audio data in real-time and can be used for audio recognition. With the wireless connection and fine performance in processing audio data because of the FPU, it can be used for more interesting TinyML projects like remote voice controlling of devices.

**Note:**

- **Seeed Studio XIAO nRF52840** is not equipped with this PDM Microphone module.
- The PDM Microphone will perform better when we use the "Seeed nrf52 mbed-enabled Boards Library", so we highly recommon that.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new7.png" alt="pir" width={600} height="auto" /></p>

This wiki will introduce the basics of using this PDM Microphone on this board and includes 2 examples. One example focuses on visualizing raw data from the microphone in real-time and another example focuses on saving recorded audio from the microphone on an SD card. Let's explore them now!

## Visualize raw data from PDM Microphone in real-time

In this example, we are going to visualize the raw data from the PDM Microphone on a **Serial Monitor** and **Serial Plotter** in real-time.

- **Step 1**. [Download Seeed_Arduino_Mic Library](https://github.com/Seeed-Studio/Seeed_Arduino_Mic) as a zip file

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-zip.png" alt="pir" width={1000} height="auto" /></p>

- **Step 2**. Open Arduino IDE, navigate to `Sketch > Include Library > Add .ZIP Library...` and open the downloaded zip file

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>

- **Step 3.** Navigate to `File > Examples > Seeed Arduino Mic > mic_serial_plotter` to open **mic_serial_plotter**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-install.png" alt="pir" width={550} height="auto" /></p>

- **Step 4.** Upload the codes and open the **Serial Monitor**

**Note:** Once you upload the codes, it will not be executed automatically until you click **Serial Monitor** on the upper right corner of the Arduino window.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-output-serial.png" alt="pir" width={550} height="auto" /></p>

Now you will see the raw microphone data displayed in real-time on the serial monitor as above!

- **Step 5.** If you navigate to `Tools > Serial Plotter` and open **Serial Plotter**, you will see the raw microphone data displayed in real-time on a graph!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-output-graph.png" alt="pir" width={700} height="auto" /></p>

## Save recorded audio from the microphone on an SD card

Just like the Seeed Studio XIAO series, Seeed Studio XIAO nRF52840 Sense is perfectly compatible with [Seeeduino Seeed Studio XIAO Expansion board](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html). It is pin to pin installed on the expansion board which means you can use the SD card module on the expansion board. If you don't want to use the expansion board, you can connect it with a separate SD card module through the **SPI** interface.

- **Step 1.** Attach the Seeed Studio XIAO nRF52840 Sense on a Seeed Studio XIAO Expansion board and insert an SD card into the SD card slot of the expansion board.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SD-connect.png" alt="pir" width={500} height="auto" /></p>

**Note:** When you see the light on the expansion board regularly flashing green, the connection is successful.

Since we already installed **Seeed_Arduino_Mic Library** before, we do not need to install again for this example. However, if you have not yet installed it, please follow the above example.

- **Step 2**. [Download Seeed_Arduino_FS Library](https://github.com/Seeed-Studio/Seeed_Arduino_Mic) as a zip file

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/arduino-fs-zip.png" alt="pir" width={1000} height="auto" /></p>

**Note:** This library is needed to access the SD card and save the data

- **Step 3**. Open Arduino IDE, navigate to `Sketch > Include Library > Add .ZIP Library...` and open the downloaded zip file

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png" alt="pir" width={600} height="auto" /></p>

- **Step 4.** Navigate to `File > Examples > Seeed Arduino Mic > mic_Saved_OnSDcard` to open **mic_Saved_OnSDcard**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-sd-install.jpg" alt="pir" width={550} height="auto" /></p>

- **Step 5.** Upload the codes and open the **Serial Monitor**

**Note:** Once you upload the codes, it will not be executed automatically until you click **Serial Monitor** on the upper right corner of the Arduino window.

Now the audio data will start sampling, record for 5 minutes and save the data to SD card automatically.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/PDMsavecodeoncard.png" alt="pir" width={800} height="auto" /></p>

This **test.9568.wav** is a 5-second audio file and it is saved on the SD card.

:::note

If you want to resample audio data, you should push the reset button and then click "serial monitor" again to sample.
:::
