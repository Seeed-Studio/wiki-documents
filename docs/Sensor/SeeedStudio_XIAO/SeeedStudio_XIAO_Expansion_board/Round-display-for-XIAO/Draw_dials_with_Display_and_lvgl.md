---
description: Drawing dials with circular screens and lvgl
title: Drawing dials with Seeed Studio Round Display for XIAO and LVGL
keywords:
- XIAO
- Round Dislay
- lvgl
- draw dials
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /draw_dials_with_display_and_lvgl
last_update:
  date: 03/017/2023
  author: MengDu
---

# Drawing dials with Seeed Studio Round Display for XIAO and LVGL

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="购买链接">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

Thank you for purchased Seeed Studio Round Display products. In this section of the tutorial, we will focus on how to use the `tft_eSPI` library and `LVGL` library to draw various rich and interesting dial patterns on the Round Display, and introduce the usage of some common functions of these two useful but complex libraries from simple to deep. Through the content of this tutorial, I hope you can use this product to draw your ideal dial pattern. Have a great learning experience!

## Getting Started

Before you enter the study, we would like you to be prepared for the following.

### Hardware Preparation

For demonstration purposes, this tutorial will use the **XIAO ESP32S3** as the master control. If you want to use other XIAO products, the tutorials and methods in this article are also applicable.

<table align="center">
	<tr>
	    <th>Seeed Studio Round Display for XIAO</th>
	    <th>Seeed Studio XIAO ESP32S3</th>
	</tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="" style={{width:210, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:210, height:'auto'}}/></div></td>
    </tr>
	<tr>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="购买链接">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    		</a>
		</div></td>
	    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    		<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    		</a>
		</div></td>
	</tr>
</table>

When installing the XIAO with Round Display, please let the XIAO's Type-C connector face the outside of the Round Display, and then connect each pin against the dual 7-pin headers.



### Software Preparation

For the software part, you need to download and install the Arduino IDE in advance. Then, add the required libraries to the environment.

:::tip

If this is your first time using Arduino, we highly recommend you to refer to [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).

:::

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/tree/main/libraries">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Libraries</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

- **Installation Method One**

Since you have downloaded the zip Library, open your Arduino IDE, click on **Sketch > Include Library > Add .ZIP Library**. Choose the zip file you just downloaded，and if the library install correct, you will see **Library added to your libraries** in the notice window. Which means the library is installed successfully.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:600, height:'auto'}}/></div>

<br></br>

- **Installation  Method Two**

The library manager was added starting with Arduino IDE versions 1.5 and greater (1.6.x). It is found in the 'Sketch' menu under 'Include Library', 'Manage Libraries...'

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/Library.jpg" style={{width:600, height:'auto'}}/></div>

When you open the Library Manager you will find a large list of libraries ready for one-click install. To find a library for your product, search for the product name or a keyword such as 'k type' or 'digitizer', and the library you want should show up. Click on the desired library, and the 'Install' button will appear. Click that button, and the library should install automatically. When installation finishes, close the Library Manager.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/library_manager.jpg" style={{width:800, height:'auto'}}/></div>


## Drawing simple dials using the tft_eSPI library










