---
description: Seeed Studio XIAO MG24 with PlatformIO
title: XIAO MG24 with PlatformIO
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/mg24_platform/top_mg24_platform02.webp
slug: /xiao_mg24_with_platform_io
last_update:
  date: 03/17/2024
  author: Jason
  sidebar_position: 5
---


<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/mg24_platform/top_mg24_platform02.webp" /></div>

## PlatformIO Introduce

PlatformIO is a development platform that integrates many types of development boards and has good scalability. If the platform does not have the type you need, you can manually add the type of development board yourself. The code you write on Arduino can use it, just add the corresponding library

In this wiki , we wiil introduce how to install and run the sample code in PlatformIO

## Use PlatformIO For XIAO MG24

### Setup 1 . Install [PlatformIO](https://platformio.org/platformio-ide) in official website

if you have not install software of PlatformIO , you can click on the link above.

### Setup 2 . Create any project in PlatformIO

Here you can choose any one of the development version to create a project file, I take XIAO ESP32 C3 for example.

<table align="center">
  <tr>
      <th>Operation one</th>
        <th>Operation two</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/mg24_platform/mg24patform2.jpg" style={{width:400, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_PlatformIO/mg24_platformIO.jpg" style={{width:500, height:'auto'}}/></div></td>
  </tr>
</table>


### Setup 3 . Modify platformio.ini file

When you successfully create the PlatformIO file, there will be many files appearing in the left column. We can see a file named platform.ini. Next, we need to replace the contents inside it
<table align="center">
  <tr>
      <th>Operation three</th>
  </tr>
  <tr>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/mg24_platform/mg24platform.jpg"/></div>
  </tr>
</table>

You need to copy the following code and replace the content in platform.ini file

```
[env:seeed_xiao_mg24]
platform = https://github.com/Seeed-Studio/platform-seeedboards.git
board = seeed-xiao-mg24
framework = arduino
```

:::tip
Remember save the file , ctrl+s , it will loading
:::

### Setup 4 . Compile and Burn

**Next we compile and burn using this code**

```cpp
#include <Arduino.h>
void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(LED_BUILTIN, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);  // turn the LED on (HIGH is the voltage level)
  delay(1000);                      // wait for a second
  digitalWrite(LED_BUILTIN, LOW);   // turn the LED off by making the voltage LOW
  delay(1000);                      // wait for a second
}
```


<table align="center">
  <tr>
      <th>Operation four</th>
  </tr>
  <tr>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/mg24_platform/mg.png" /></div>
  </tr>
</table>

It says that it has been compiled successfully, and then we can access the XIAO MG24 to burn it in.


### Setup 5 . Result

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_MG24/Getting_Start/00.gif" style={{width:500, height:'auto'}}/></div>

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