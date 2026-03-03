---
description: Seeed Studio XIAO nRF52840 with PlatformIO
title: XIAO nRF52840-Sense with PlatformIO
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/nRF52840_PlatformIO/1.png
slug: /xiao_nrf52840_with_platform_io
last_update:
  date: 08/14/2024
  author: Jason
---

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/nRF52840_PlatformIO/1.png" /></div>

# **Seeed Studio XIAO nRF52840 with PlatformIO**

PlatformIO is a development platform that integrates many types of development boards and has good scalability. If the platform does not have the type you need, you can manually add the type of development board yourself. The code you write on Arduino can use it, just add the corresponding library

In this wiki , we wiil introduce how to install and run the sample code in PlatformIO

## Use PlatformIO For XIAO nRF52840

### Setup 1 . Install [PlatformIO](https://platformio.org/platformio-ide) in official website

if you have not install software of PlatformIO , you can click on the link above.

### Setup 2 . Create any project in PlatformIO

Because the platform already has our XIAO ESP32S3 and XIAO ESP32C3 development board options, we can choose one of them to create our files. Of course, other files are also fine, it doesn't matter. The project name can also be chosen arbitrarily.Here I use the XIAO ESP32 C3 as an example.

<table align="center">
  <tr>
      <th>Operation one</th>
        <th>Operation two</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_platformio/4.png" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/esp32c6_platformio/3.png" style={{width:700, height:'auto'}}/></div></td>
  </tr>
</table>

:::tip
Before this, I had already installed the XIAO ESP32C6 and XIAO nRF52840 installation package, so you can see that the image in operation two has the option for XIAO ESP32C6 and XIAO nRF52840, but you don't have it when you perform the operation
:::

### Setup 3 . Modify platformio.ini file

When you successfully create the PlatformIO file, there will be many files appearing in the left column. We can see a file named platform.ini. Next, we need to replace the contents inside it
<table align="center">
  <tr>
      <th>Operation three</th>
  </tr>
  <tr>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/XIAO_PlatformIO/platformIO_file.jpg" /></div>
  </tr>
</table>

You need to copy the following code and replace the content in platform.ini file

```
[env:seeed_xiao_nrf52840_sense]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-afruitnrf52-nrf52840
framework = arduino
```
:::tip
Remember save the file , ctrl+s , it will loading
:::

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