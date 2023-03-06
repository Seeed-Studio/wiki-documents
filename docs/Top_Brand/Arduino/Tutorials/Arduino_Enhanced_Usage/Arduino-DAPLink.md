---
description: Use Arduino Borads as DAPLink Device
title: Use Arduino Borads as DAPLink Device
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Arduino-DAPLink
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# How to use Arduino Boards as DAPLink Device

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/eclipse-10.png"/></div>

## What is DAPLink

**[Arm Mbed DAPLink](https://armmbed.github.io/DAPLink/)** is an open source software project that programs and debugs application software running on **Arm Cortex CPUs**. DAPLink is often referred to as interface firmware and runs on an auxiliary MCU connected to the SWD or JTAG port of the application MCU. This configuration is available on almost all development boards. It creates a bridge between your development computer and the CPU debug access port.

>Please also visit [DAPLink](https://github.com/ARMmbed/DAPLink) for more information.

### DAPLink For Arduino Boards

Now, we have **developed the DAPLink firmware running on your Arduino Boards**(*SAMD Series*) such as [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) and [Seeeduino Xiao](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html) so that you can upload and debug development boards that support DAPLink in a most cost-effective way!

### Features

- Debug and Flash Arm Cortex CPUs
- Provides a virtual serial port, eliminating the need for a usb to serial port
- Drag and drop to upload firmware(coming soon)

## Supported Boards

It supports all the SAMD boards by Seeed:

- [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [Seeeduino XIAO](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)
- Seeeduino Zero Series:
  - [Seeeduino Cortex-M0+](https://www.seeedstudio.com/Seeeduino-Cortex-M0-p-4070.html)
  - [Seeeduino Lotus Cortex-M0+](https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html)
  - [Wio Lite W600 - ATSAMD21 Cortex-M0 Wireless Development Board](https://www.seeedstudio.com/Wio-Lite-W600-p-4155.html)
  - [Wio Lite MG126 - ATSAMD21 Cortex-M0 Blue Wireless Development Board](https://www.seeedstudio.com/Wio-Lite-MG126-p-4189.html)
- [Seeeduino LoRaWAN](https://www.seeedstudio.com/Seeeduino-LoRaWAN-p-2780.html)

:::note
Please make sure you have installed the **latest ArduinoSAMD board library for Seeed (>=1.8.1)** for this to work!
:::

## Get Started

### 1. Installing the DAPLink Arduino Libraries

1. Visit the [**Seeed_Arduino_DAPLink**](https://github.com/Seeed-Studio/Seeed_Arduino_DAPLink/) repositories and download the entire repo to your local drive.

2. Now, the Seeed_Arduino_DAPLink library can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `Seeed_Arduino_DAPLink` file that you've have just downloaded.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### 2. Installing the Adafruit_TinyUSB_Arduino Library

1. Visit the [**Adafruit_TinyUSB_Arduino**](https://github.com/adafruit/Adafruit_TinyUSB_Arduino) repositories and download the entire repo to your local drive.

2. Now, the Adafruit_TinyUSB_Arduino library can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `Adafruit_TinyUSB_Arduino` file that you've have just downloaded.

### Customizing Pin Definitions

If you are using **Wio Terminal** or **Seeeduino Xiao**, you may skip this section and just use the default definitions.

- The pins definitions for DAPLink is defined in **`DAP_config.h`** under `Seeed_Arduino_DAPLink/src`, reference the followings:

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/pins-new.png"/></div>

### Upload to Arduino Boards

Open the `simple_daplink.ino` under `Seeed_Arduino_DAPLink/example` using Arduino IDE. Under `Tools` -> `USB Stack` and choose **TinyUSB**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/usbstack.png"/></div>

Compile and upload the code!

## Hardware Connection Example

In this wiki, we have used the [STM32F410RB development board](https://www.st.com/en/microcontrollers-microprocessors/stm32f410rb.html) as connection example:

>If you have changed pinout definitions, please connect according to your own defines.

- Seeeduino Xiao Connection Example

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/daplink-xiao.jpg"/></div>

- Wio Terminal Connection Example

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/daplink-wt.jpg"/></div>

## Debug and Flash Example for IDEs

Our Arduino board now becomes our DAPLink device for uploading for MCUs! Let's have some examples for different IDEs for reference.

### Debugging with OpenOCD

- Connect the Arduino DAPLink to target Development according to the connection above, and to your PC.

- Make sure you have installed OpenOCD.

- Open Terminal and run the following:

Change to your device target according to your development board, you may check the [official document](http://openocd.org/doc/html/CPU-Configuration.html) for reference.

```sh
openocd -f interface/cmsis-dap.cfg -f target/stm32f4x.cfg
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/openocd-1.png"/></div>

- Under your development board project build path, run the gcc, which looks something like below:

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/openocd-2.png"/></div>

- under gdb, connect to local host by running the following:

```sh
target remote 127.0.0.1:3333
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/openocd-3.png"/></div>

- Now the development board is connected, you may start to debug or upload!

Run `load` to upload to development board:

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/openocd-4.png"/></div>

Some useful commands for GDB:

- `continue/cont`
- `ctrl`+`c`
- `next`
- `break`
- `info break`
- `clear`
- `delete`
- `list`

### Debugging with Eclipse

For Eclipse, it's very similar to the OpenOCD as it can use the OpenOCD as backend.

- Navigate to **Help** -> **Eclipse Marketplace**, search and download **Eclipse Embedded CDT**:

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/eclipse-2.png"/></div>

- Navigate to **Window** -> **Preference** -> **MCU** -> **Global OpenOCD Path** and fill in your OpenOCD path as follow:

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/eclipse-3.png"/></div>

- Build your project. Under **Run Last Tool**, click on **External Tools Configurations**:

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/eclipse-5.png"/></div>

- Copy the following settings, please change to your path (also your target board).

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/eclipse-6.png"/></div>

If it goes well, it should look something like this:

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/eclipse-8.png"/></div>

- Under **Debug**, click **Debug Configurations**, select **Debugger** section, and fill in your gcc path:

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/eclipse-9.png"/></div>

Now it's all good and ready to debug!

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/eclipse-10.png"/></div>

More reference, please check [here](https://gnu-mcu-eclipse.github.io/debug/openocd/).

### Debugging with Keil

- Connect the Arduino DAPLink to target Development according to the connection above and to your PC.

To use our Arduino DAPLink in Keil, check the following:

- Open your project with Keil, click on the **Options for target**.

You should see a window just like below. Make sure the device matches with your device. Navigate to **Debug** section and select **CMSIS-DAP Debugger**.

- Click on the **settings** next to the **CMSIS-DAP Debugger**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/keil-1.png"/></div>

- Choose **Seeed CMSIS-DAP**(our Arduino board) and you should see that it's connected.

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/keil-2.png"/></div>

- You may also want to navigate to the **Flash Download** section to make sure it's the right device and Click **OK**.

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/keil-3.png"/></div>

- Click on **Build** and **Flash**!

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/keil-4.png"/></div>

### Debugging with IAR Embedded Workbench

- Connect the Arduino DAPLink to target Development according to the connection above and to your PC.

- Open your project, and navigate to **Project** -> **Options**. In the Options menu, select **Debugger**:

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/iar-1.png"/></div>

- In the **Setup** tab, select **CMSIS DAP** from the Driver drop-down menu.

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/iar-2.png"/></div>

- In the **Download** tab, check Verify download and Use **flash loader(s)**

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/iar-3.png"/></div>

- Select **CMSIS DAP** from the menu on the left, select the **Interface** tab and configure the **SWD** protocol.

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/iar-4.png"/></div>

- Click **OK**, and you can click **Download and Debug**!

<div align="center"><img src="https://files.seeedstudio.com/wiki/DAPLink/iar-5.png"/></div>

## Serial Usage

To make life easier, we also implemented a USB to Serial function to the Arduino Sketch which saves you the need of additional hardware!

- By default, it is defined as `Serial1` and it's the Hardware Serial pins. For example, it's pin 6 and 7 for Seeeduino XIAO.

:::note
    You may define your own Serial in the Arduino Sketch.
:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-pinout.jpg"/></div>

>Reference usage, check [here](https://wiki.seeedstudio.com/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI/).

## Resources

- [DAPLink Official Github](https://github.com/ARMmbed/DAPLink)
- [OpenOCD Documents](http://openocd.org/doc/html/index.html)

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/)<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
