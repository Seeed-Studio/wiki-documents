---
description:  How to Use Wio Terminal as RTL8720DN Dev Board
title:  How to Use Wio Terminal as RTL8720DN Dev Board
keywords:
- Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-8720-dev
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# How to Use Wio Terminal as RTL8720DN Dev Board

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/BLE.gif" /></div>

Wio Terminal is equipped with the Atmel SAMD51 core with the Realtek RTL8720DN wireless core. Won't it be cool if you can also use Wio Terminal as a simple RTL8720DN dev board. In this wiki, you will learn how to use Wio Terminal as a RTL8720DN dev board to develop the Wi-Fi and Bluetooth connectivity!

## Get Started

- Please follow [**Wio Terminal Get Started**](https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/) first before the following.

### Add the Realtek Board Library to Arduino

1.Open your Arduino IDE, click on **File** > **Preferences**, and copy below url to **Additional Boards Manager URLs**:

```sh
https://github.com/ambiot/ambd_arduino/raw/master/Arduino_package/package_realtek.com_amebad_index.json
```

2.Click on **Tools** > **Board** > **Board Manager** and Search **realtek** in the Boards Manager

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/realtek-board.png" /></div>

## Communication Program Between SAMD51 and RTL8720DN

We've prepared an Arduino example code that can be used to communicate Wio Terminal's SAMD51 core to RTL8720DN. Download the complete source code [**here**](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/WioTerminal_USB2Serial_Burn8720).

- Upload the code to Wio Terminal by selecting the Board as **Wio Terminal**.

**Note:** This program is uploaded to Wio Terminal's SAMD51 core.

There are **2 modes** in this Arduino program.

### MODE 1 - RTL8720DN Burning Firmware Mode

Press the button (Right button) to enter this mode. This is **the mode where you use to burn Arduino code into the RTL8720DN**. Now, you can choose one of the RTL8720DN example code to upload to the RTL8720DN core. You must select this mode to upload to RTL8720DN core and **select board as RTL8720**.

### MODE 2 - USB to Serial Mode

Press the button (Middle button) to enter this mode. This is **the mode used to view serial outputs from the RTL8720DN core.** In this mode, the SAMD51 core is acting as a USB to Serial module.

## Wi-Fi Example

Let's take an example to walk through the procedures!

- Upload the **Communication program between SAMD51 and RTL8720DN to Wio Terminal** (select board as **Wio Terminal**).

- Once uploaded the program, navigate to **Tools** -> **Board** and select board as **RTL8722DM** as followed:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/8720-board.png" /></div>

- Navigate to **Files** -> **Examples** and under **Examples for RTL8720DM**, you can choose examples for RTL8720DN. Let me just take ScanNetworks as example.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/8720-example.png" /></div>

:::note
If using Wi-Fi related examples, please check [here](https://wiki.seeedstudio.com/Wio-Terminal-Network-Overview/) first to erase RTL8720DN core firmware first.
:::

- Make sure that the Wio Terminal is in the **RTL8720DN Burning Firmware Mode** as followed. Select board as **RTL8722DM** and click upload.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/burn.png" /></div>

- Once uploaded the Wi-Fi example into the RTL8720DN core. Reset Wio Terminal and switch to **USB to Serial Mode** by pressing the middle button of Wio Terminal.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/USB-serial.png" /></div>

- Now, if you open the Serial Monitor you should be able to see results printing from the RTL8720DN core! Now you can use Wio Terminal's RTL8720DN core as a dev board!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/result.png" /></div>

## Bluetooth Example

Let's also have a Bluetooth example.

- Upload the **Communication program between SAMD51 and RTL8720DN to Wio Terminal** (select board as **Wio Terminal**).

- Once uploaded the program, navigate to **Tools** -> **Board** and select board as **RTL8722DM**. Navigate to **Files** -> **Examples** and under **Examples for RTL8720DM**, you can choose examples for RTL8720DN. Let me just take ScanNetworks as example.

- Make sure that the Wio Terminal is in the **RTL8720DN Burning Firmware Mode**. Select board as **RTL8722DM** and click upload.

- Once uploaded the Wi-Fi example into the RTL8720DN core. Reset Wio Terminal and switch to **USB to Serial Mode** by pressing the middle button of Wio Terminal.

- Now, if you open the Serial Monitor you should be able to see results printing from the RTL8720DN core! Now you can use Wio Terminal's RTL8720DN core as a dev board!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/BLE.png" /></div>

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/)<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
