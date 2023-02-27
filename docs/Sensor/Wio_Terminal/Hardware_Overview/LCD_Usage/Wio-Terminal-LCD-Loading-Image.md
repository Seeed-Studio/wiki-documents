---
title: Loading Image
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-Terminal-LCD-Loading-Image/
slug: /Wio-Terminal-LCD-Loading-Image
last_update:
  date: 01/11/2022
  author: gunengyu
---


# loading Images

This repo describes how to load and display images from the SD card to the TFT LCD screen on Wio Terminal. This can be very useful implementation to your design and can be used in various places!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WechatIMG2314.jpeg.jpg" /></div>

## Libraries Installation

### Installing the SD Card library for Wio Terminal

- visit [File System Overview](https://wiki.seeedstudio.com/Wio-Terminal-FS-Overview/)

### Installing the TFT LCD Library For Wio Terminal

- visit [TFT LCD Overview](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/)

## Image Format configuration

### STEP 1: Prepare the image
:::note
    We need to convert the image format to Windows 24-bit BMP format and put the image in the right folder setup ready. We recommend to use `Microsoft paint` to do so.
:::
 - **Step 1-1:** Using `Microsoft paint` to resize the image to fit into the maximum pixel size of your screen display area

 - **Step 1-2:** Then save the image by clicking `Save as` followed by `BMP picture` then from the file type dropdown select `24-bit bitmap (.bmp)`  file.
  
 - **Step 1-3:** Create a folder name `bmp` and save your Windows `.bmp` format images inside this folder.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/wioterminaltu.png" /></div>

### STEP 2: Convert the `24-bit bitmap` image to the microcontroller readable `8-bit or 16-bit bmp`  format
:::note
    To display bmp images on our embedded system, we need to get rid of some information (head files) in our Windows bmp format. We wrote a python script to do this for us, so please choose one of the following two options to convert you images.
:::
#### Option 1: Using Prebuilt Windows Executables (Windows only):

- **Step 2-1-1:** We have prepared the executable by using the [Pyinstaller](https://pyinstaller.org/en/stable/){target=_blank} package, you can download the executable by simply clicking [bmp_converter.exe](https://files.seeedstudio.com/wiki/Wio-Terminal/res/bmp_converter.exe)

- **Step 2-1-2:** Put the downloaded `bmp_converter.exe` into the same directory with the `bmp folder` created in `Step 1-3`.

- **Step 2-1-3:** Double click to run the `bmp_converter.exe`, then in the pop up `terminal` select one of the two options: "Enter `1` for 8-bit colour convert; Enter `2` for 16-bit colour convert".

#### Option 2: Using Python Source Code (for cross platform)
:::note
    You should have python installed on your computer
:::
- **Step 2-2-1:** Download the Python script [bmp_converter.py](https://files.seeedstudio.com/wiki/Wio-Terminal/res/bmp_converter.py) , and save it in the same directory with the `bmp folder` created in `Step 1-3`.

- **Step 2-2-2:** Open `cmd` or `terminal` to run the Python script. First, `cd` to the directory that saved the `bmp_converter.py` and `bmp folder`, then run the Python script.

- **Step 2-2-3:** Two options: Enter `1` for 8-bit colour convert; Enter `2` for 16-bit colour convert

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/PythonScript.gif" /></div>

### STEP 3: Image ready

Now, you are able to find converted the `.bmp` images inside another folder name `rgb332`(8-bit) or `rgb565`(16-bit) in the bmp folder.

## Getting Started

### Install the [`RawImage.h`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/RawImage.h) library

This library is used to make loading and displaying images much easier. Download the [`RawImage.h`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/RawImage.h) and attach this header file to your sketch location.

### Image Initialisation in Arduino

- **To display images on the screen**

```Cpp
//To draw on 8-bit color image on screen, starting from point (x, y):
drawImage<uint8_t>("path to sd card iamge", x, y);

//To draw on 16-bit color image on screen, starting from point  (x, y):
drawImage<uint16_t>("path to sd card iamge", x, y);
```

- **To initialise image (Not needed if using the above drawImage function)**

```Cpp
//when using 8-bit colour, initialise the image following this:
Raw8 * img8 = newImage<uint8_t>("path to sd card image");

//when using 16-bit colour, initialise the image following this:
Raw16 * img16 = newImage<uint16_t>("path to sd card image");
```

## Example code

```cpp

# include"TFT_eSPI.h"
# include "Seeed_FS.h" //Including SD card library
# include"RawImage.h"  //Including image processing library
TFT_eSPI tft;

void setup() {
    //Initialise SD card
    if(!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {
        while (1);
    }
    tft.begin();
    tft.setRotation(3);

    drawImage<uint8_t>("test.bmp", 0, 0); //Display this 8-bit image in sd card from (0, 0)

}

void loop() {
}

```

## FAQs

**If `ImportError: No module named PIL`  happened:**

- Install the python module by entering `pip install pillow` in the cmd or terminal
## Tech Support
 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/).
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
