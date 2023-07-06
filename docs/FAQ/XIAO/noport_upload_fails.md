---
description: XIAO-FAQ
title:  What to do when upload fails/the program runs abnormally/the device port is not found?
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /noport_upload_fails
last_update:
  date: 6/21/2023
  author: Seraphina
---


There are times when we use the wrong program to make XIAO appear to lose ports or not work properly. The specific performance is:

- Connected to computer, but no port number found for XIAO.

- The computer is connected and the port number appears, but the upload program fails.

In this Wiki, you can find solutions. Different models of XIAO have different troubleshooting methods, so please choose the corresponding solution for your model.

:::successQuick browse
Here are the troubleshooting methods for upload failures, abnormal program behavior, or device port not found errors for various types of XIAO. You can quickly index through the link below:

- [**XIAO SAMD21**](/noport_upload_fails/#for-xiao-samd21)
- [**XIAO RP2040**](/noport_upload_fails/#for-xiao-rp2040)
- [**XIAO nRF52840(Sense)**](/noport_upload_fails/#for-xiao-nrf52840-sense)
- [**XIAO ESP32C3**](/noport_upload_fails/#for-xiao-esp32c3)
- [**XIAO ESP32S3(Sense)**](/noport_upload_fails/#for-xiao-esp32s3-sense)
:::

## **For XIAO SAMD21**

Sometimes the Seeed Studio XIAO SAMD21 port may disappear when user programming process fails. we can solve this problem by the following operation:

### Reset

First, you can try to reset XIAO SAMD21. The steps are as follow:

- Connect the Seeed Studio XIAO SAMD21 to your computer.
- Use tweezers or short lines to short the RST pins **only once**
- The orange LED lights flicker on and light up.

:::note
The behavior of the built-in LED is reversed to the one on an Arduino. On the Seeed Studio XIAO SAMD21 , the pin has to be pulled low, whereas on other micro-controllers it has to be pulled high.
:::

If that does not work, please try to enter **bootloader mode**:

### Enter Bootloader Mode

When you encounter the above two situations, you can try to put XIAO into BootLoader mode, which can solve most of the problems of unrecognized devices and failed uploads. The specific method is:  

- Connect the Seeed Studio XIAO SAMD21 to your computer.
- Use tweezers or short lines to short the RST pins in the diagram **twice**.
- The orange LED lights flicker on and light up.

At this point, the chip enters Bootloader mode and the burn port appears again. Because the samd21 chip has two partitions, one is the Bootloader and the other is the user program. The product will burn a bootloader code in the system memory when it leaves the factory. We can switch modes by performing the above steps.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/XIAO-reset.gif" alt="pir" width={600} height="auto" /></p>

If that also doesn't work, disconnect the board from the PC, and connect the board again.

## **For XIAO RP2040**

Sometimes the Seeed Studio XIAO RP2040 port may disappear when user programming process fails. We can solve this problem by the following operation:

### Reset

First, you can try to reset XIAO RP2040. The steps are as follow:

- Connect the Seeed Studio XIAO RP2040 to your computer.
- Press the "R" pins **once**.

:::note
The behavior of the built-in programmable Single-colour LEDs(two are blue, one is green) are reversed to the one on an Arduino. On the Seeed Studio XIAO RP2040, the pin has to be pulled low to enable.
:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg" alt="pir" width={600} height="auto" /></p>

If that does not work, please try to enter **bootloader mode**:

### Enter Bootloader Mode

When you encounter the above two situations, you can try to put XIAO into BootLoader mode, which can solve most of the problems of unrecognized devices and failed uploads. The specific method is:  

- Long press the "B" button.
- Connect the Seeed Studio XIAO PR2040 to your computer.
- The computer will appear a disk driver.

At this point, the chip enters Bootloader mode and the burn port appears again. Because the RP2040 chip has two partitions, one is the Bootloader and the other is the user program. The product will burn a bootloader code in the system memory when it leaves the factory. We can switch modes by performing the above steps.

<!-- ![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg) -->

If that also doesn't work, disconnect the board from the PC, and connect the board again.

## **For XIAO nRF52840 (Sense)**

Sometimes the Seeed Studio XIAO nRF52840 (Sense) port may disappear when user programming process fails. we can solve this problem by the following operation:

### Reset

First, you can try to **reset** XIAO nRF52840 (Sense). The steps are as follow:

- Connect the Seeed Studio XIAO nRF52840 (Sense) to your computer.
- Press the "Reset button" **once**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/functional2a.jpg" alt="pir" width={700} height="auto" /></p>

If that does not work, please try to enter **bootloader mode**:

### Enter Bootloader Mode

When you encounter the above two situations, you can try to put XIAO into BootLoader mode, which can solve most of the problems of unrecognized devices and failed uploads. The specific method is:  

- Connect the Seeed Studio XIAO nRF52840 (Sense) to your computer.
- Press the "Reset button" **twice**.

If that also doesn't work, disconnect the board from the PC, and connect the board again.

## **For XIAO ESP32C3**

Sometimes the Seeed Studio XIAO ESP32C3 port may disappear when user programming process fails. we can solve this problem by the following operation:

### Reset

First, you can try to reset XIAO ESP32C3. The steps are as follow:

- Connect the Seeed Studio XIAO ESP32C3 to your computer.
- Press the "RESET BUTTON" **once**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/front-label-3.png" style={{width:500, height:'auto'}}/></div>

If that does not work, please try to enter **bootloader mode**:

### Enter Bootloader Mode

When you encounter the above two situations, you can try to put XIAO into BootLoader mode, which can solve most of the problems of unrecognized devices and failed uploads. The specific method is:  

- Long press the "BOOT BUTTON".
- Connect the Seeed Studio XIAO ESP32C3 to your computer while holding the **BOOT BUTTON**.
- Release it to enter **bootloader mode**

## **For XIAO ESP32S3 (Sense)**

Sometimes the Seeed Studio XIAO ESP32S3(Sense) port may disappear when user programming process fails. we can solve this problem by the following operation:

### Reset

First, you can try to reset XIAO ESP32S3. The steps are as follow:

- Connect the Seeed Studio XIAO ESP32S3 to your computer.
- Press the "RESET BUTTON" **once**.

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/wysiwyg/esp32s3.png" style={{width:700, height:'auto'}}/></div>

If that does not work, please try to enter **bootloader mode**:

### Enter BootLoader Mode

When you encounter the above two situations, you can try to put XIAO into BootLoader mode, which can solve most of the problems of unrecognized devices and failed uploads. The specific method is:

- **Step 1**. Press and hold the BOOT button on the XIAO ESP32S3 without releasing it.

- **Step 2**. Keep the BOOT button pressed and then connect to the computer via the data cable. Release the BOOT button after connecting to the computer.

:::note
When you press and hold the BOOT key while powering up and then press the Reset key once, you can also enter BootLoader mode.
:::

- **Step 3**. Upload the **Blink** program to check the operation of the XIAO ESP32S3.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/15.gif" style={{width:500, height:'auto'}}/></div>
