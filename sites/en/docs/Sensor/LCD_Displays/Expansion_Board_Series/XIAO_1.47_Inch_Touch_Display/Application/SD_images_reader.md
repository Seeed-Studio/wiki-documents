---
description: Read and display BMP images from a microSD card with XIAO 1.47 Inch Touch Display
title: Display Images from a microSD Card
keywords:
  - XIAO
  - Display
  - microSD
  - BMP
image: TODO
slug: /xiao_1_47_inch_touch_display_sd_image_reader
sidebar_position: 3
sku: TODO
last_update:
  date: 06/22/2026
  author: Seeed Studio
createdAt: '2026-06-22'
updatedAt: '2026-06-22'
url: https://wiki.seeedstudio.com/xiao_1_47_inch_touch_display_sd_image_reader/
---

# Display Images from a microSD Card

<div style={{textAlign:'center'}}>
  <img src="TODO_SD_IMAGE_READER_COVER_IMAGE" style={{width:600, height:'auto'}}/>
</div>

This tutorial shows how to read BMP images from a microSD card and display them on the XIAO 1.47 Inch Touch Display. The demo scans the root directory of the card, finds supported BMP files, and displays them one by one at two-second intervals.

The program performs the following:

- Mounts the microSD card through the shared SPI bus.
- Scans the root directory for BMP files.
- Supports uncompressed 16-bit, 24-bit, and 32-bit BMP images.
- Converts 24-bit and 32-bit RGB data to RGB565 for the LCD.
- Centers images smaller than the 172 × 320 display.
- Center-crops images larger than the display.
- Automatically switches to the next image every two seconds.

:::note
The demo reads images only from the root directory of the microSD card. It does not scan subdirectories.
:::

## Environment Preparation

### Hardware

For this project, you need:

- Seeed Studio XIAO 1.47 Inch Touch Display
- USB-C cable that supports data transfer
- microSD card

### Software Preparation

Before starting this application, complete the basic setup guide:

- [Getting Started with Seeed Studio XIAO 1.47 Inch Touch Display](https://wiki.seeedstudio.com/getting_started_with_XIAO_1.47_inch_touch_display/)

Make sure the following basic examples work correctly:

- Display
- microSD card

The demo uses these libraries:

- Seeed nRF52 Boards package
- Adafruit TinyUSB Library
- Seeed_GFX / TFT_eSPI
- SdFat included with the Seeed nRF52 Boards package

:::note
The Seeed nRF52 Boards package already includes SdFat. Do not install another SdFat copy unless the bundled version is unavailable.
:::

:::caution
When using Seeed_GFX, remove the original TFT_eSPI library from your Arduino libraries folder if it causes a library conflict.
:::

## Prepare the microSD Card

### Supported Image Format

The demo supports BMP files with the following properties:

<table align="center">
 <tr>
     <th>Item</th>
     <th>Requirement</th>
 </tr>
 <tr>
     <td>File extension</td>
     <td><code>.bmp</code>, case-insensitive</td>
 </tr>
 <tr>
     <td>Compression</td>
     <td>Uncompressed</td>
 </tr>
 <tr>
     <td>Color depth</td>
     <td>16-bit, 24-bit, or 32-bit</td>
 </tr>
 <tr>
     <td>Maximum source width</td>
     <td>360 pixels</td>
 </tr>
 <tr>
     <td>Recommended resolution</td>
     <td>172 × 320 pixels</td>
 </tr>
 <tr>
     <td>File location</td>
     <td>Root directory of the microSD card</td>
 </tr>
 <tr>
     <td>Maximum indexed files</td>
     <td>24</td>
 </tr>
</table>

:::tip
For the best result and the lowest processing overhead, resize images to `172 × 320` before copying them to the microSD card.
:::

### Copy Images to the Card

1. Prepare one or more supported BMP images.
2. Copy the BMP files to the root directory of the microSD card.
3. Safely eject the card from the computer.
4. Insert the card into the onboard microSD card slot.

TODO: Add a screenshot showing the BMP files in the microSD card root directory.

## Hardware Pin Mapping

The display and microSD card share the hardware SPI bus and use separate chip-select pins.

<table align="center">
 <tr>
     <th>Function</th>
     <th>Pin</th>
     <th>Description</th>
 </tr>
 <tr>
     <td>LCD CS</td>
     <td>D2</td>
     <td>Display chip select</td>
 </tr>
 <tr>
     <td>LCD DC</td>
     <td>D3</td>
     <td>Display data/command control</td>
 </tr>
 <tr>
     <td>SD CS</td>
     <td>D6</td>
     <td>microSD card chip select</td>
 </tr>
 <tr>
     <td>SPI SCK</td>
     <td>D8</td>
     <td>Shared SPI clock</td>
 </tr>
 <tr>
     <td>SPI MISO</td>
     <td>D9</td>
     <td>microSD card data output</td>
 </tr>
 <tr>
     <td>SPI MOSI</td>
     <td>D10</td>
     <td>Shared SPI data output</td>
 </tr>
 <tr>
     <td>LCD RST</td>
     <td>D17</td>
     <td>Display hardware reset</td>
 </tr>
 <tr>
     <td>LCD BL</td>
     <td>D18</td>
     <td>Display backlight control</td>
 </tr>
</table>

## Code

### Step 1. Paste the Main Sketch

Paste the following code into your Arduino IDE sketch.

```cpp
/*
  XIAO nRF52840 Plus SD image reader.

  Direct display support:
    - BMP: uncompressed 16/24/32-bit, center-cropped to the 172x320 LCD.

  Put image files in the SD card root directory.
*/

#include "driver.h"
#include <Arduino.h>
#include <Adafruit_TinyUSB.h>
#include <SPI.h>
#include <SdFat.h>
#include <TFT_eSPI.h>

static constexpr uint8_t LCD_CS_PIN = D2;
static constexpr uint8_t LCD_DC_PIN = D3;
static constexpr uint8_t SD_CS_PIN = D6;
static constexpr uint8_t LCD_SCK_PIN = D8;
static constexpr uint8_t LCD_MOSI_PIN = D10;
static constexpr uint8_t LCD_RST_PIN = D17;
static constexpr uint8_t LCD_BL_PIN = D18;

static constexpr int LCD_W = 172;
static constexpr int LCD_H = 320;
static constexpr int MAX_FILES = 24;
static constexpr int MAX_PATH_LEN = 64;
static constexpr int BMP_MAX_SRC_W = 360;

TFT_eSPI tft;
SdFat sdCard;

char imagePaths[MAX_FILES][MAX_PATH_LEN];
int imageCount = 0;
int imageIndex = 0;
uint32_t mountedFreq = 0;

static uint8_t rowBuf[BMP_MAX_SRC_W * 4 + 8];
static uint16_t lineBuf[LCD_W];

static void acquireForLcd() {
  pinMode(SD_CS_PIN, OUTPUT);
  digitalWrite(SD_CS_PIN, HIGH);
  pinMode(LCD_CS_PIN, OUTPUT);
  digitalWrite(LCD_CS_PIN, HIGH);
  delayMicroseconds(2);
}

static void acquireForSd() {
  pinMode(LCD_CS_PIN, OUTPUT);
  digitalWrite(LCD_CS_PIN, HIGH);
  pinMode(SD_CS_PIN, OUTPUT);
  digitalWrite(SD_CS_PIN, HIGH);
  delayMicroseconds(2);
}

static void preparePins() {
  pinMode(LCD_CS_PIN, OUTPUT);
  pinMode(LCD_DC_PIN, OUTPUT);
  pinMode(LCD_SCK_PIN, OUTPUT);
  pinMode(LCD_MOSI_PIN, OUTPUT);
  pinMode(SD_CS_PIN, OUTPUT);
  digitalWrite(LCD_CS_PIN, HIGH);
  digitalWrite(LCD_DC_PIN, HIGH);
  digitalWrite(LCD_SCK_PIN, LOW);
  digitalWrite(LCD_MOSI_PIN, LOW);
  digitalWrite(SD_CS_PIN, HIGH);
}

static void hardResetPanel() {
  pinMode(LCD_RST_PIN, OUTPUT);
  digitalWrite(LCD_RST_PIN, HIGH);
  delay(20);
  digitalWrite(LCD_RST_PIN, LOW);
  delay(80);
  digitalWrite(LCD_RST_PIN, HIGH);
  delay(180);
}

static void applyPanelFix() {
  acquireForLcd();
  tft.writecommand(0x36);
  tft.writedata(0x48);
  delay(10);
}

static void initLcd() {
  pinMode(LCD_BL_PIN, OUTPUT);
  digitalWrite(LCD_BL_PIN, HIGH);
  analogWrite(LCD_BL_PIN, 255);
  hardResetPanel();
  tft.init();
  tft.setSwapBytes(true);
  tft.setRotation(0);
  applyPanelFix();
  tft.invertDisplay(false);
  tft.fillScreen(TFT_BLACK);
}

static void showMessage(const char *title, const String &line1, const String &line2 = "") {
  acquireForLcd();
  tft.fillScreen(TFT_BLACK);
  tft.setTextSize(1);
  tft.setTextColor(TFT_CYAN, TFT_BLACK);
  tft.setCursor(4, 4);
  tft.print(title);
  tft.drawFastHLine(0, 18, LCD_W, TFT_CYAN);
  tft.setTextColor(TFT_WHITE, TFT_BLACK);
  tft.setCursor(4, 34);
  tft.print(line1);
  if (line2.length()) {
    tft.setCursor(4, 50);
    tft.print(line2);
  }
}

static bool beginSd() {
  acquireForSd();
  SPI.begin();
  const uint32_t freqs[] = {8000000, 4000000, 1000000, 400000};
  for (size_t i = 0; i < sizeof(freqs) / sizeof(freqs[0]); ++i) {
    SdSpiConfig cfg(SD_CS_PIN, SHARED_SPI, freqs[i], &SPI);
    if (sdCard.begin(cfg)) {
      mountedFreq = freqs[i];
      return true;
    }
    delay(100);
  }
  return false;
}

static bool endsWithNoCase(const char *name, const char *ext) {
  size_t n = strlen(name);
  size_t e = strlen(ext);
  if (n < e) return false;
  for (size_t i = 0; i < e; ++i) {
    if (tolower(name[n - e + i]) != tolower(ext[i])) return false;
  }
  return true;
}

static bool isBmpFile(const char *name) {
  return endsWithNoCase(name, ".bmp");
}

static void scanImages() {
  imageCount = 0;
  File32 root;
  if (!root.open("/")) return;

  File32 entry;
  while (imageCount < MAX_FILES && entry.openNext(&root, O_RDONLY)) {
    if (!entry.isDir()) {
      char name[MAX_PATH_LEN];
      entry.getName(name, sizeof(name));
      if (isBmpFile(name)) {
        snprintf(imagePaths[imageCount], MAX_PATH_LEN, "/%s", name);
        Serial.print("[IMAGE] ");
        Serial.println(imagePaths[imageCount]);
        imageCount++;
      }
    }
    entry.close();
  }
  root.close();
}

static uint16_t readLE16(File32 &f) {
  uint8_t b[2];
  if (f.read(b, 2) != 2) return 0;
  return (uint16_t)b[0] | ((uint16_t)b[1] << 8);
}

static uint32_t readLE32(File32 &f) {
  uint8_t b[4];
  if (f.read(b, 4) != 4) return 0;
  return (uint32_t)b[0] |
         ((uint32_t)b[1] << 8) |
         ((uint32_t)b[2] << 16) |
         ((uint32_t)b[3] << 24);
}

static uint16_t rgb888To565(uint8_t r, uint8_t g, uint8_t b) {
  return ((r & 0xF8) << 8) | ((g & 0xFC) << 3) | (b >> 3);
}

static bool drawBmp(const char *path) {
  File32 f;
  if (!f.open(path, O_RDONLY)) return false;
  if (readLE16(f) != 0x4D42) {
    f.close();
    return false;
  }

  (void)readLE32(f);
  (void)readLE16(f);
  (void)readLE16(f);
  uint32_t dataOffset = readLE32(f);
  uint32_t headerSize = readLE32(f);
  int32_t srcW = (int32_t)readLE32(f);
  int32_t srcHRaw = (int32_t)readLE32(f);
  uint16_t planes = readLE16(f);
  uint16_t bpp = readLE16(f);
  uint32_t compression = readLE32(f);

  if (headerSize < 40 || planes != 1 || compression != 0 ||
      srcW <= 0 || srcW > BMP_MAX_SRC_W ||
      !(bpp == 16 || bpp == 24 || bpp == 32)) {
    f.close();
    return false;
  }

  bool topDown = srcHRaw < 0;
  int32_t srcH = topDown ? -srcHRaw : srcHRaw;
  if (srcH <= 0) {
    f.close();
    return false;
  }

  uint32_t rowSize = ((uint32_t)srcW * bpp + 31) / 32 * 4;
  if (rowSize > sizeof(rowBuf)) {
    f.close();
    return false;
  }

  int drawW = min((int)srcW, LCD_W);
  int drawH = min((int)srcH, LCD_H);
  int cropX = srcW > LCD_W ? (srcW - LCD_W) / 2 : 0;
  int cropY = srcH > LCD_H ? (srcH - LCD_H) / 2 : 0;
  int dstX = srcW < LCD_W ? (LCD_W - srcW) / 2 : 0;
  int dstY = srcH < LCD_H ? (LCD_H - srcH) / 2 : 0;

  acquireForLcd();
  tft.fillScreen(TFT_BLACK);

  for (int y = 0; y < drawH; ++y) {
    int srcY = cropY + y;
    int fileY = topDown ? srcY : srcH - 1 - srcY;
    uint32_t rowOffset = dataOffset + (uint32_t)fileY * rowSize;
    if (!f.seekSet(rowOffset) || f.read(rowBuf, rowSize) != (int)rowSize) {
      f.close();
      return false;
    }

    for (int x = 0; x < drawW; ++x) {
      int srcX = cropX + x;
      if (bpp == 24) {
        int p = srcX * 3;
        lineBuf[x] = rgb888To565(rowBuf[p + 2], rowBuf[p + 1], rowBuf[p]);
      } else if (bpp == 32) {
        int p = srcX * 4;
        lineBuf[x] = rgb888To565(rowBuf[p + 2], rowBuf[p + 1], rowBuf[p]);
      } else {
        int p = srcX * 2;
        lineBuf[x] = (uint16_t)rowBuf[p] | ((uint16_t)rowBuf[p + 1] << 8);
      }
    }

    acquireForLcd();
    tft.pushImage(dstX, dstY + y, drawW, 1, lineBuf);
  }

  f.close();
  return true;
}

void setup() {
  Serial.begin(115200);
  delay(800);
  preparePins();
  initLcd();
  showMessage("SD image reader", "Mounting SD...");

  if (!beginSd()) {
    showMessage("SD image reader", "SD mount failed");
    while (1) delay(1000);
  }

  scanImages();
  Serial.print("[SD] mounted @ ");
  Serial.println(mountedFreq);
  if (imageCount == 0) showMessage("SD image reader", "No BMP found");
}

void loop() {
  if (imageCount == 0) {
    delay(1000);
    return;
  }

  const char *path = imagePaths[imageIndex];
  if (!drawBmp(path)) showMessage(path, "BMP decode failed");

  delay(2000);
  imageIndex = (imageIndex + 1) % imageCount;
}
```

### Step 2. Create `driver.h`

Create a new file named `driver.h` in the same folder as your Arduino sketch by clicking on the arrow next to the example tab and selecting **New Tab**.

Name the new file as `driver.h`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/12_create_driver_h.png" style={{width:1000, height:'auto'}}/></div>

Paste the following configuration into `driver.h`:

```cpp
#define BOARD_SCREEN_COMBO 75
#define USE_XIAO_TFT_DISPLAY_BOARD
```

### Step 3. Upload and Test

1. Insert the prepared microSD card.
2. Open Arduino IDE.
3. Select the XIAO nRF52840 Plus board.
4. Select the correct serial port.
5. Paste the main sketch.
6. Create `driver.h` in the same sketch folder.
7. Compile and upload the sketch.
8. Open Serial Monitor at `115200` baud if you want to view the detected files and SD mount frequency.

## Expected Result

After the sketch starts, the display shows `Mounting SD...`. When the card is mounted successfully, the program scans the root directory and displays each supported BMP image for two seconds.

Images smaller than the screen are centered against a black background. Images larger than the screen are center-cropped to the 172 × 320 display area.

TODO: Add the final SD image reader result image or GIF.

<div style={{textAlign:'center'}}>
  <img src="TODO_SD_IMAGE_READER_RESULT" style={{width:600, height:'auto'}}/>
</div>

## Code Function Explanation

### TFT Display Functions

The demo uses several TFT_eSPI / Seeed_GFX functions to initialize the display and draw decoded image data.

- **`tft.init()`**: Initializes the display driver and the SPI communication required by the LCD. Call this function before using other TFT drawing functions.

- **`tft.setSwapBytes(true)`**: Enables byte swapping for 16-bit pixel data. RGB565 pixels are stored as two bytes, and the decoded image buffer may use a different byte order from the display. This setting allows `tft.pushImage()` to send the `uint16_t` RGB565 buffer correctly. If it is incorrect, the image may display with abnormal colors.

- **`tft.setRotation(0)`**: Sets the display orientation. The value `0` selects the portrait orientation used by this `172 × 320` demo. Changing the rotation also changes the coordinate system and display dimensions.

- **`tft.invertDisplay(false)`**: Disables display color inversion. Change it only if the panel requires inverted colors. If colors look unusual, verify the BMP format and byte-swapping setting first.

- **`tft.fillScreen(TFT_BLACK)`**: Fills the entire display with one color. The demo uses it to clear the previous image and create a black background before drawing a new image.

- **`tft.pushImage(x, y, width, height, buffer)`**: Transfers an RGB565 pixel buffer to a rectangular area of the display. The demo decodes and draws one BMP row at a time:

```cpp
tft.pushImage(dstX, dstY + y, drawW, 1, lineBuf);
```

Using a one-row buffer reduces RAM usage because the complete image does not need to be loaded into memory.

- **`tft.writecommand()` and `tft.writedata()`**: Send a command and its associated data directly to the LCD controller. The demo uses the following panel-specific memory access configuration:

```cpp
tft.writecommand(0x36);
tft.writedata(0x48);
```

- **`tft.setTextSize()`**: Sets the text scale.

- **`tft.setTextColor()`**: Sets the foreground and background text colors.

- **`tft.setCursor()`**: Sets the starting position for text.

- **`tft.print()`**: Draws text on the display.

- **`tft.drawFastHLine()`**: Draws a horizontal line. The demo uses these text and drawing APIs to display status and error messages.

### SPI and SdFat APIs

- **`SPI.begin()`**: Initializes the hardware SPI bus used by the display and microSD card. Both devices share SCK and MOSI, while the microSD card also uses MISO.

- **`SdSpiConfig(csPin, options, frequency, spiPort)`**: Creates the SPI configuration used by SdFat:

```cpp
SdSpiConfig cfg(SD_CS_PIN, SHARED_SPI, freqs[i], &SPI);
```

  Here, `SD_CS_PIN` selects the card through D6, `SHARED_SPI` indicates that the bus is shared, `freqs[i]` sets the clock frequency, and `&SPI` selects the hardware SPI object.

- **`sdCard.begin(cfg)`**: Mounts and initializes the microSD card using the supplied configuration. It returns `true` on success. The demo retries with lower SPI frequencies if mounting fails.

### File32 APIs

- **`File32::open(path, flags)`**: Opens a file or directory. The demo opens the root directory and individual BMP files as follows:

```cpp
root.open("/");
f.open(path, O_RDONLY);
```

- **`File32::openNext(directory, flags)`**: Opens the next entry in a directory. Repeated calls allow the program to iterate through every file in the root directory.

- **`File32::isDir()`**: Returns whether the current entry is a directory. The demo skips directories.

- **`File32::getName(buffer, length)`**: Copies the current entry name into a character buffer. The buffer must include enough space for the filename and terminating null character.

- **`File32::read(buffer, length)`**: Reads raw bytes from the current file position. The BMP decoder uses it to read header fields and pixel rows.

- **`File32::seekSet(position)`**: Moves the file cursor to an absolute byte offset. This allows the decoder to locate each BMP row, including bottom-up BMP files.

- **`File32::close()`**: Closes the current file or directory and releases its resources.

### User-Adjustable Settings

- **Slideshow interval**: The delay between images is controlled in `loop()`:

```cpp
delay(2000);
```

  The value is measured in milliseconds. Use `5000` to display each image for five seconds.

- **SD card SPI frequency**: The demo tries several SPI frequencies:

```cpp
const uint32_t freqs[] = {8000000, 4000000, 1000000, 400000};
```

  Higher frequencies read faster, while lower frequencies may improve compatibility. Change the values or order when debugging mount failures.

- **Maximum number of images**: `MAX_FILES` controls how many BMP paths can be indexed. Increasing it consumes additional RAM.

```cpp
static constexpr int MAX_FILES = 24;
```

- **Maximum path length**: `MAX_PATH_LEN` controls the reserved path length. Increase it for longer filenames, although short root-directory filenames are recommended.

```cpp
static constexpr int MAX_PATH_LEN = 64;
```

- **Maximum BMP width**: `BMP_MAX_SRC_W` controls the largest source width and directly affects `rowBuf` RAM usage.

```cpp
static constexpr int BMP_MAX_SRC_W = 360;
static uint8_t rowBuf[BMP_MAX_SRC_W * 4 + 8];
```

- **Display rotation**: Change `tft.setRotation(0)` for another orientation, and update `LCD_W` and `LCD_H` to match.

- **Display color inversion**: Change `tft.invertDisplay(false)` to `true` only if the panel requires inverted colors.

- **Backlight brightness**: The demo uses `analogWrite(LCD_BL_PIN, 255)` for full brightness. Use a lower PWM value to reduce brightness and power consumption.

## Troubleshooting

### The display shows `SD mount failed`

- Confirm that the microSD card is inserted correctly.
- Confirm that the microSD basic example works.
- Reformat the card with a supported FAT filesystem.
- Try another microSD card.
- Check the shared SPI wiring and D6 chip-select pin.

### The display shows `No BMP found`

- Confirm that the files use the `.bmp` extension.
- Place the files in the root directory, not a subdirectory.
- Confirm that the filenames are shorter than the configured path buffer.

### The display shows `BMP decode failed`

- Confirm that the BMP is uncompressed.
- Confirm that the image uses 16-bit, 24-bit, or 32-bit color.
- Confirm that the image width does not exceed 360 pixels.
- Re-export the image as a standard Windows BMP file.

### The image is cropped

The code does not resize images. Images larger than `172 × 320` are center-cropped. Resize the source image to the display resolution if you want the complete image to appear.

### The image colors are incorrect

- Confirm that the file is a supported uncompressed BMP.
- Try exporting the image as a 24-bit BMP.
- Confirm that `tft.setSwapBytes(true)` is present in the display initialization.

## Resources

- [Getting Started with Seeed Studio XIAO 1.47 Inch Touch Display](https://wiki.seeedstudio.com/getting_started_with_XIAO_1.47_inch_touch_display/)
- [Seeed_GFX GitHub Repository](https://github.com/Seeed-Studio/Seeed_GFX)
- [SdFat GitHub Repository](https://github.com/greiman/SdFat)
- TODO: Demo code repository
- TODO: Schematic

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
