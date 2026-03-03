---
description: Seeed Studio XIAO SAMD21 with PlatformIO
title: XIAO SAMD21 with PlatformIO
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/samd21_with_platformio.webp
slug: /xiao_samd21_with_platform_io
sidebar_class_name: hidden
last_update:
  date: 04/07/2025
  author: Hugo
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/samd21_with_platformio.jpg" /></div>

## PlatformIO Introduce

PlatformIO is a development platform that integrates many types of development boards and has good scalability. If the platform does not have the type you need, you can manually add the type of development board yourself. The code you write on Arduino can use it, just add the corresponding library.

In this wiki, we wiil introduce how to install and run the sample code in PlatformIO.

## Use PlatformIO For XIAO SAMD21

### Setup 1 . Install [PlatformIO](https://platformio.org/platformio-ide) in official website

if you have not install software of PlatformIO , you can click on the link above.

### Setup 2 . Create any project in PlatformIO

Because the platform already has our XIAO ESP32S3 and XIAO ESP32C3 development board options, we can choose one of them to create our files. Of course, other files are also fine, it doesn't matter. The project name can also be chosen arbitrarily.

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
Before this, I had already installed the XIAO SAMD21 installation package, so you can see that the image in operation two has the option for XIAO SAMD21, but you don't have it when you perform the operation.
:::

### Setup 3 . Modify platformio.ini file

When you successfully create the PlatformIO file, there will be many files appearing in the left column. We can see a file named platform.ini. Next, we need to replace the contents inside it.

<table align="center">
  <tr>
      <th>Operation three</th>
  </tr>
  <tr>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/esp32c6_platformio/2.png" /></div>
  </tr>
</table>

You need to copy the following code and replace the content in platform.ini file.

```
[env:seeed_xiao_samd]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-samd
framework = arduino
```

:::tip
Remember to save the file by pressing Ctrl + S; it will start loading.
:::

### Setup 4 . Compile and Burn

<table align="center">  
  <tr>  
      <th>Operation four</th>  
  </tr>  
  <tr>  
      <td>  
          <div align="center">  
              <img width="500" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/samd21_platformio_complied.png" />  
          </div>  
      </td>  
  </tr>  
</table>  


In the end, if you see the same result as in the picture above, it means you have successfully added the XIAO SAMD21 Development Board. When you create a project again, you will see the XIAO SAMD21 option available.

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