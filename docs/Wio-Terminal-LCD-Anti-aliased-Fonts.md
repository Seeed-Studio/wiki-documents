# Displaying Anti-aliased Fonts

This repo demonstrates how to use Anti-aliased fonts in Wio Terminal (i.e. Displaying Japanese characters,Greek characters and other UCS-2 glyphs! Further, smooth fonts can also be used to display Normal English characters with your favorite font in your computer.

<div align=center><img width = 600 src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117131650.gif"/></div>

## Libraries Installation

### Installing the SD Card library for Wio Terminal

1. Visit the [Seeed-Arduino-FS](https://github.com/Seeed-Studio/Seeed_Arduino_FS/tree/beta) repositories and download the entire repo to your local drive.

2. Now, the SD card library can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `Seeed_Arduino_FS` file that you've have just downloaded.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### Installing the TFT LCD Library For Wio Terminal

- visit [TFT LCD Overview](http://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/)

## Generate vlw Font file

Here demonstrates how to generate a vlw font file that can be used for smooth font in Wio Terminal.

### Step 1

Download the [**Processing**](https://processing.org/) software and download according to your operating system.

<div align=center><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117095509.jpg"/></div>

### Step 2

Open **Processing**, and navigate to `Tools` -> `Create Font...`

<div align=center><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117100029.jpg"/></div>

### Step 3

A **Create Font** Window will appear. You are able to choose the font available from your computer. Change the font size, and click `Characters...`. You can also change the Filename of the vlw file.

<div align=center><img width = 600 src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117100808.jpg"/></div>

### Step 4

A **Character Selector** window will appear, and you are able to choose the specific language Unicode Characters Blocks(i.e Basic Latin in this case). Click `OK` to save font settings.

<div align=center><img width = 500 src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117104728.jpg"/></div>

### Step 5

Navigate to `File` -> `Save` and save the sketch file into your local drive in your computer. Now, we have generated the vlw font file!

<div align=center><img width = 500 src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117105224.jpg"/></div>

## Storing into SD Card

Once generated the vlw font file, you can find the vlw file inside **`data`** folder inside the sketch file you saved in the previous step.

Now, copy the vlw font file into the SD card and put the SD card back in Wio Terminal.

## Displaying

- **To load font from SD card to Wio Terminal:**

```cpp
void loadFont(String fontName);
```

where `fontName` is the name of the vlw font file.

- **To show all the characters inside vlw on screen:**

```cpp
void showFont(uint32_t td);
```

where `td` is the delay time between screens while showing all the characters.

- **To unload fonts:**

```cpp
void unloadFont();
```
To display characters in screen, you can use the functions just like in the tft libraries using **`tft.println()`**. Further, you can use other functions like **`tft.setCursor()`** and **`tft.setTextColor`** to change the position and color of character displaying.

**Note**: Please check the `User_Setup.h` in the LCD library and make sure that `#define SMOOTH_FONT` is uncommented.

## Complete Code

```cpp
#include<SPI.h>
#include "Seeed_FS.h"
#include "SD/Seeed_SD.h"
#include"TFT_eSPI.h"

TFT_eSPI tft;

void setup() {
    tft.begin();
    Serial.begin(115200);
    tft.setRotation(3);
    tft.fillScreen(TFT_BLACK); //Black background

    while(!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)){
        Serial.println("SD card error!\n");
        while(1);
  }
  delay(1000);

  tft.loadFont("Apple-Chancery-24");
  // Show all characters on screen with 2 second (2000ms) delay between screens
  tft.showFont(2000); // Note: This function moves the cursor position!

  tft.setTextColor(TFT_RED,TFT_BLACK);
  tft.setCursor(0,0);

  tft.println("Konnichiwa");
  tft.println("Sayonara");
  tft.println();
  tft.unloadFont();

  tft.loadFont("Latin-Hiragana-24");
  tft.setTextColor(TFT_GREEN,TFT_BLACK);
  tft.println("こんにちは");
  tft.println("さようなら");
  tft.unloadFont();
  
}
void loop(){}
```
