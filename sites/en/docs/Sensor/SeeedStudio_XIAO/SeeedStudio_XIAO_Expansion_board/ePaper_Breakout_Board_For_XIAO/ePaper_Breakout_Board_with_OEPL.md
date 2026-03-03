---
description: Use the OpenEPaperLink configuration generator to generate the configuration for the e-paper
title: OpenEPaperLink Config Builder for ePaper
keywords:
- XIAO eInk Expansion
- XIAO
- OEPL Config Builder
image: https://files.seeedstudio.com/wiki/eInk/xiao-expansion/OEPL_Config_img.webp
slug: /epaper_breakout_board_with_oepl
sidebar_position: 2
last_update:
  date: 10/23/2025
  author: Zovey
---

# OpenEPaperLink and ePaper config builder

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/seeed_logo_2.jpg" style={{width:500, height:'auto'}}/></div>

## Introduction

[OpenEPaperLink](https://openepaperlink.de/) (The following text will refer to this project as "OEPL") is an alternative protocol and firmware implementation for electronic shelf labels. Multiple displays are supported with ESP32-based access points and 802.15.4 radio communication. This is an open-source electronic paper label communication system, which enables users to update the display content of the electronic ink screen wirelessly. The system consists of an access point (AP) and label devices, and supports various types of electronic ink screens. It provides a wide range of content generation and transmission functions. Now, this project is also compatible with Seeed Studio XIAO nRF52840 Sense Plus.

After you purchase the ePaper Breakout Board, you may have the need to replace the electronic paper screen with a different specification. In this tutorial, we will use two tools for the process: OPEL Config Builder is used to modify the parameters of the electronic paper, and OEPL Image Uploader is used to upload images.

[OEPL Config Builder](https://config.openepaperlink.org/) is a low-code electronic paper parameter configuration tool that uses the BLE protocol for wireless transmission. Users no longer need to write complicated configuration codes; they can simply operate the mouse on the website to complete the configuration.

[OEPL Image Uploader](https://atc1441.github.io/ATC_BLE_OEPL_Image_Upload.html) is also a tool that performs wireless transmission via the BLE protocol. The difference is that this tool transmits photos.

## Hardware Preparation
  
<table align="center">
  <tr>
    <th>4.26" Monochrome ePaper Display</th>
    <th>ePaper Breakout Board for Seeed Studio XIAO</th>
    <th>Seeed Studio XIAO nRF52840 Sense Plus</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114993631-4.26-monochrome-eink--epaper-display.jpg" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/4/-/4-105990172-epaper-breakout-board-45back.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102010694-seeedstudio-xiao-nrf52840-sense-plus-45font_1.jpg" style={{width:500, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/ePaper-Breakout-Board-p-5804.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Sense-Plus-p-6360.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
        </a>
    </div></td>
  </tr>
</table>

:::tip
The MCU of the XIAO nRF52840 series all support this tool, not limited to the XIAO nRF52840 Sense Plus. The ePaper screen only supports a 4.26-inch display. However, we will continue to update in the future to support more screen sizes.
:::

## Usage of OEPL Config Builder

### Step 1: Burn the BLE firmware

The first step is that you can obtain the OEPL_BLE firmware from the official repository of OEPL.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/OpenEPaperLink/OEPL_BLE/releases/tag/test7" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/hub_oepl.png" style={{width:700, height:'auto'}}/></div>

After connecting Seeed Studio XIAO nRF52840 Sense Plus, the ePaper Breakout Board and the screen together.Then connect the computer to the nRF52840 using a USB data cable, and then press the reset button twice consecutively.Then you will see a file manager pop up on the PC side.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/file_pic.png" style={{width:700, height:'auto'}}/></div>

Then, copy the `.uf2` file that was just obtained from the USB drive into the file manager of the nRF52840. The next time the MCU is powered on, it will automatically execute this `.uf2` firmware.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/firmware.jpg" style={{width:700, height:'auto'}}/></div>

### Step 2: Use BLE to connect to the Builder

In the Builder interface, connect the devices via the BLE protocol(If no device is displayed, please reflash the firmware).This website can only achieve the following wireless upload function when it is connected via the BLE protocol.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Connect_demo_2.png" style={{width:700, height:'auto'}}/></div>

If the connection is successful, you can see the words "Connected" in the terminal box.

- **Read Config**: Read the configuration in the MCU.
- **Write Config**: Write the configuration to the MCU.
- **Reboot**: Reboot the MCU.

### Step 3: Builder panel

Just select the corresponding variables or input parameters on the panel to complete the configuration.

- **Parameters of Config Builder**
  - **system_config**: Holds information about host IC and power management pins
  - **manufacturer_data**: Manufacturer identifier and board information
  - **power_option**: Power supply and sleep related options
  - **display**: Display / panel information (optional). Can appear multiple times for devices with several displays.
  - **led**: Optional LED configuration (repeatable).
  - **sensor_data**: Optional sensor readings / definitions (repeatable).
  - **data_bus**: Global bus definitions (I2C/SPI etc).
  - **binary_inputs**: Optional binary inputs (buttons, switches).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Builder_demo_1.png" style={{width:700, height:'auto'}}/></div>

If you want to save the configuration you have set, you can export it as a `.bin`, `Hex` and `JSON` file within this panel. Conversely, this panel also supports importing `JSON` files for configuration purposes. The 4.26 screen configuration file can be obtained here.

<div align="center">
<a href="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/oep_config_base.json" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Click here to get</button></p>
</a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Package_import_1.png" style={{width:700, height:'auto'}}/></div>

After setting the configuration, you can upload it to the MCU by using the **Write Config** function.

## Usage of the OEPL Image Uploader

OEPL Image Uploader is an online electronic paper upload tool, and it also operates via the BLE protocol. This tool is extremely lightweight and code-free, eliminating the hassle of the slow update speed of traditional e-paper. Its usage method is similar to OEPL Config Builder.

### Step 1: Connect to the Uploader

The connection method is similar to that of Builder. The device is connected via BLE.However, it should be noted that due to some conflicts between the previous firmware and the pins required for this image upload, some modifications to the firmware are necessary before using this web function. Here, a new firmware is provided for burning. Just follow the steps mentioned earlier to perform the burning process.

<div align="center">
<a href="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/oep_config_base.json" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Click here to get</button></p>
</a>
</div>

The variable in the "E-Paper prefix filter(s)" section needs to be changed to "OEPL"; otherwise, the device cannot be retrieved.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_4.png" style={{width:350, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_6.png" style={{width:500, height:'auto'}}/></div>

### Step 2: Upload Image

Then click the "Select File" button to choose a local file for upload.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_2.png" style={{width:550, height:'auto'}}/></div>

After the file transfer is completed, simply click the "Upload Image" button to upload it to the electronic paper.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/eInk/xiao-expansion/Image_Upload_5.png" style={{width:350, height:'auto'}}/></div>

When "Upload Complete" is displayed, it indicates that the burning process has been successful! Then you will be able to see that the picture on the screen has changed.

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
