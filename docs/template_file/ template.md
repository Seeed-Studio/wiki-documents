---
description: Template wiki
title: Template wiki 
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /Name_your_website
last_update:
  date: 08/09/2023
  author: Example name
---

# Project Overview

:::note
This is just the basic guideline for writing a Wiki, including the common writing code.
:::

This is the overview for this wiki. It should contain these contents:

1. Application shown display diagram or pictures of mainly used products
2. Application principle
3. Brief introduction to the Project

## Hardware Preparation

I am using (Seeed Products) as the hardware here. The contents here should include:

1. List all the products used in the Seeed Studio, with horizontal table written with text, plus "Get One Now" product link. The example code is shown below.
2. Use graphics to show the hardware connection method of the project

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3(example)</th>
        <th>Seeed Studio Grove OLED Display 0.96(example)</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/r/grove-oled-displey-0.96-ssd1315-preview.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## Software Preparation

I am using Thonny IDE software(Windows) and some related libraries and files. The contents here should include:

1. Application software and download address
2. Open the software and install necessary dependencies or libraries

<div class="table-center">
  <table align="center">
    <tr>
        <th>Arduino IDE</th>
        <th>related files(libraries)</th>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.arduino.cc/en/software">
              <strong><span><font color={'FFFFFF'} size={"4"}> Download ⏬</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/S3-CIRCUITPY/related-mpy.zip">
              <strong><span><font color={'FFFFFF'} size={"4"}> Download ⏬</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

## Getting Started

### Step by step description: How is the project implemented

1. Upload the first step code to a certain product, and the effect appears
2. Upload the second step code to a product, and the effect appears
3. ...

## What's more

Something you want to add up, something you want to extend, like:

- The extension of this application
- Open up the field
- Offer expanded thinking

## Trouble Shooting

Some problems might encounter in the process of hardware connection, software debugging or uploading.

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

## ✨ The other wiki feature code

### Code at the first（mandatory）

```
---
description: // One sentence introduction of the project
title: // One short words introduction of the project
keywords:
//Enter the upper-level directory where the file is stored (Grove，SenseCAP，reTerminal...)
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: / The name of file
last_update:
  date: //The data finished wiki
  author: // author
---
```

### The picture code

```cpp
<p style={{textAlign: 'center'}}><img src="image_link" alt="pir" width={600} height="auto" /></p>
```

### Video code

```cpp
<div class="table-center">
<iframe width="100%" height="315" src="URL" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>
```

### Hyperlink

```cpp
<a  href="link" target="_blank"><span> PDF Download of SenseCAP S210X Sereis User Guide</span></a>
```


### Highlight code

```cpp

{code}

```

### Hide the code

<details>

<summary> title here</summary>

```cpp
#include
Print "code here"
```

</details>

### Download Arduino IDEBbutton

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div>

### Download Github Library Button

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/tree/main/tft_espi-base-dial">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>


### Table code
There includes hyperlinks, image links, table title

<table align="center">
  <caption> <h2>title</h2> </caption>
  <tbody>
    <tr>
    <td><h4>Sensor</h4></td>
    <td><h4>Gas Type</h4></td>
    <td><h4>Get One Now</h4></td>
    </tr>
    <tr>
    <td><a href="https://wiki.seeedstudio.com/Grove-Gas_Sensor-MQ2/" target="_blank"><span>MQ2</span></a></td>
    <td>Combustible Gas, Smoke</td>
    <td><div class="document">
<a href="https://www.seeedstudio.com/Grove-Gas-Sensor(MQ2)-p-937.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" alt="" width={200} height="auto"/></a>
</div></td>
    </tr>
        <tr>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    </tr>
  </tbody></table>



### note 

:::note
Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::


### tip 

:::tip
Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::

### info 

:::info
Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::

### danger 

:::danger
Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::


### Caution 

:::caution
Some **content** with _Markdown_ `syntax`. Check [this `api`](#).
:::






