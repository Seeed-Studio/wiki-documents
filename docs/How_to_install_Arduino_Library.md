---
name: How to install an Arduino library
category: Tutorial
---

!!!Note
    This tutorial is based on Arduino 1.6.9.


Here we will show you how to install an Arduino library. You should notice that almost all of our library was stored at [Github](https://github.com/Seeed-Studio). We will provide Arduino library when a product need a library. For some simple product, there is no need to write a library such as Grove - Button.

## Download the Library

There are two ways to download a Arduino library.

### 1.Dowload in the product page
Normally, if a product needs a library, you will find a download library button bar like this below:

[![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Grove_OLED_1.12/master/images/library.png)](https://github.com/Seeed-Studio/OLED_Display_96X96/archive/master.zip)

Click on the button to start downloading. Seconds you will get a package.

### 2.Download from github

If you need to download from a Github page, then you can click on the **Clond or download >Download ZIP** button to get the library package.

![enter image description here](https://raw.githubusercontent.com/SeeedDocument/Tutorial_Add_Arduino_Library/master/images/github_download.png)

## Add the library

Also there are two ways to add a library to Arduino IDE.

### 1.Add ZIP Library

Since you have downloaded the zip Library, open your Arduino IDE, click on **Sketch > Include Library > Add .ZIP Library**.

![enter image description here](https://github.com/SeeedDocument/Get_Started_With_Arduino/raw/master/img/Add_Zip.png)

Choose the zip file you just downloaded，and if the library install correct, you will see **Library added to your libraries** in the notice window. Which means the library is installed successfully.

![](https://github.com/SeeedDocument/Get_Started_With_Arduino/raw/master/img/upload_complete.png)

### 2.Add Library folder manually
Sometimes you can not add a ZIP library correctly, because the root folder of the Zip Library lacks of .cpp or .h file, the Arduino can not recognize. Then you can Unzip the zip file and copy the Library folder into the following path **...\Arduino\libraries**. **....\** is the path you setup Arduino. In my case is **D:\Workwork\Software\Arduino\libraries**.

![](https://github.com/SeeedDocument/Get_Started_With_Arduino/raw/master/img/Location_lib.png)











### Check
Then let's check if the library install correctly.

When you add a library successfully, there will be a demo in the Example. In this case, click on **File > Example > OLED_Display_96x96-master > OLED_Hello_World** to open an example, click on the Verify button, if there's no error, congratulation, the library is installed perfectly. 


![enter image description here](https://github.com/SeeedDocument/Get_Started_With_Arduino/raw/master/img/successlly.png)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>