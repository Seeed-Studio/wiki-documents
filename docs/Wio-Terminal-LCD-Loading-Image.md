# loading Images

This repo describes how to load and display images from the SD card to the TFT LCD screen on Wio Terminal. This can be very useful implementation to your design and can be used in various places!

<div align=center><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WechatIMG2314.jpeg.jpg"/></div>

## Libraries Installation

### Installing the SD Card library for Wio Terminal

- visit [File System Overview](https://wiki.seeedstudio.com/Wio-Terminal-FS-Overview/)

### Installing the TFT LCD Library For Wio Terminal

- visit [TFT LCD Overview](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/)

## Image Format configuration

**1. Convert image format to Windows BMP format**

First, we need to resize and convert the image format to the windows `.bmp` format. Here, we recommend to use `Microsoft paint` to do so. Simply rescale the image to required size and `save as` the `24-bit bitmap (.bmp)`  file.

**2. Convert the Windows BMP format to the "special" `.bmp`  format through the our Python script**

To display bmp images on our embedded system, we need to get rid of some information (head files) in our Windows bmp format. We wrote a python script to do this for us, here is instruction how to use it:

- Create a folder name  `bmp` and save your Windows `.bmp` format images inside this folder.

- Download the Python script [`bmp_converter.py`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/bmp_converter.py) , and save it in the same directory with the `bmp folder`.

- Open `cmd` or `terminal` to run the Python script. First, `cd` to the directory that saved the `bmp_converter.py` and `bmp folder`, then run the Python script.

- Two options: Enter `1` for 8-bit colour convert; Enter `2` for 16-bit colour convert
  
- Now, you are able to find converted the `.bmp` images inside another folder name `rgb332`(8-bit) or `rgb565`(16-bit) in the bmp folder.

<div align=center><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/PythonScript.gif"/></div>

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
#include"TFT_eSPI.h"
#include "Seeed_FS.h" //Including SD card library
#include"RawImage.h"  //Including image processing library
TFT_eSPI tft;

void setup() {
    //Initialise SD card
    if (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {
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