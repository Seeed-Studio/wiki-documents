---
description: How to install an Arduino library
title: How to install an Arduino library
tags:
  - Tutorial
keywords:
  - Tutorial
image: https://avatars.githubusercontent.com/u/10758833
slug: /How_to_install_Arduino_Library
last_update:
  date: 02/02/2023
  author: w0x7ce

no_comments: false # for Disqus

---


:::note

    This tutorial is based on Arduino 1.6.9.
:::

Here we will show you how to install an Arduino library. You should notice that almost all of our library was stored at [Github](https://github.com/Seeed-Studio). We will provide Arduino library when a product need a library. For some simple product, there is no need to write a library such as Grove - Button.

## Download the Library

There are two ways to download a Arduino library.

### 1.Download in the product page
Normally, if a product needs a library, you will find a download library button bar like this below:

[![enter image description here](https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/library.png)](https://github.com/Seeed-Studio/OLED_Display_96X96/archive/master.zip)

Click on the button to start downloading. Seconds you will get a package.

### 2.Download from github

If you need to download from a Github page, then you can click on the **Clone or download >Download ZIP** button to get the library package.

![enter image description here](https://files.seeedstudio.com/wiki/Tutorial_Add_Arduino_Library/images/github_download.png)

## Add the library

Also there are two ways to add a library to Arduino IDE.

### 1.Add ZIP Library

Since you have downloaded the zip Library, open your Arduino IDE, click on **Sketch > Include Library > Add .ZIP Library**.

![enter image description here](https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png)

Choose the zip file you just downloaded，and if the library install correct, you will see **Library added to your libraries** in the notice window. Which means the library is installed successfully.

![](https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/upload_complete.png)

### 2.Add Library folder manually
Sometimes you can not add a ZIP library correctly, because the root folder of the Zip Library lacks of .cpp or .h file, the Arduino can not recognize. Then you can Unzip the zip file and copy the Library folder into the following path **...\Arduino\libraries**. **....\** is the path you setup Arduino. In my case is **D:\Workwork\Software\Arduino\libraries**.

![](https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Location_lib.png)

### Check
Then let's check if the library install correctly.

When you add a library successfully, there will be a demo in the Example. In this case, click on **File > Example > OLED_Display_96x96-master > OLED_Hello_World** to open an example, click on the Verify button, if there's no error, congratulation, the library is installed perfectly. 


![enter image description here](https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/successlly.png)

## Tech Support
Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). 
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
