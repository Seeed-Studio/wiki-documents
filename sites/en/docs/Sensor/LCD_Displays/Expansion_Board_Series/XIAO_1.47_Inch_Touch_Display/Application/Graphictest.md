---
description: Graphic test demo for XIAO 1.47 Inch Touch Display
title: Graphic Test on XIAO 1.47 Inch Touch Display
keywords:
  - XIAO
  - Display
  - TFT
  - GFX
  - Graphic Test
image: TODO
slug: /xiao_1_47_inch_touch_display_graphictest
sidebar_position: 4
sku: TODO
last_update:
  date: 06/25/2026
  author: Seeed Studio
createdAt: '2026-06-25'
updatedAt: '2026-06-25'
url: https://wiki.seeedstudio.com/xiao_1_47_inch_touch_display_graphictest/
---

# Graphic Test on XIAO 1.47 Inch Touch Display

<div style={{textAlign:'center'}}>
  <img src="TODO_GRAPHICTEST_COVER_IMAGE" style={{width:600, height:'auto'}}/>
</div>

This tutorial shows how to run a compact graphics test on the XIAO 1.47 Inch Touch Display. The demo uses the same Seeed_GFX / TFT_eSPI setup as the basic display example, then draws a sequence of test patterns to verify color output, geometric primitives, text rendering, and pixel-level drawing.

The program performs the following:

- Initializes the 1.47-inch LCD and turns on the backlight.
- Draws color bars to verify basic color output.
- Draws lines, fast horizontal and vertical lines.
- Draws rectangles, filled rectangles, circles, triangles, and rounded rectangles.
- Draws text with different colors and fonts.
- Draws a pixel gradient using `drawPixel()`.
- Prints the rendering time of each test to Serial Monitor.

## Environment Preparation

### Hardware

For this project, you need:

- Seeed Studio XIAO 1.47 Inch Touch Display
- USB-C cable that supports data transfer

### Software Preparation

Before starting this application, complete the basic setup guide:

- [Getting Started with Seeed Studio XIAO 1.47 Inch Touch Display](https://wiki.seeedstudio.com/getting_started_with_XIAO_1.47_inch_touch_display/)

Make sure the basic display example works correctly before continuing.

The demo uses these libraries:

- Seeed nRF52 Boards package
- Adafruit TinyUSB Library
- Seeed_GFX / TFT_eSPI

:::caution
When using Seeed_GFX, remove the original TFT_eSPI library from your Arduino libraries folder if it causes a library conflict.
:::

## Hardware Pin Mapping

The graphic test uses the following display pins.

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
     <td>LCD SCK</td>
     <td>D8</td>
     <td>Display SPI clock</td>
 </tr>
 <tr>
     <td>LCD MOSI</td>
     <td>D10</td>
     <td>Display SPI data output</td>
 </tr>
 <tr>
     <td>LCD RST</td>
     <td>D17</td>
     <td>Display hardware reset</td>
 </tr>
 <tr>
     <td>LCD BL</td>
     <td>D18</td>
     <td>Display backlight PWM control</td>
 </tr>
</table>

## Code

### Step 1. Paste the Main Sketch

Paste the following code into your Arduino IDE sketch.

```cpp
/*
  XIAO nRF52840 Plus 1.47 Inch Touch Display graphic test.

  This sketch uses the same Seeed_GFX / TFT_eSPI setup as
  example/basic/display, then runs a compact graphics benchmark:
    - color bars
    - lines
    - rectangles
    - circles
    - triangles
    - rounded rectangles
    - text
    - pixel gradient

  Required libraries:
    - Seeed_GFX / TFT_eSPI
    - Adafruit_TinyUSB
*/

#include "driver.h"
#include <Arduino.h>
#include <Adafruit_TinyUSB.h>
#include <SPI.h>
#include <TFT_eSPI.h>

TFT_eSPI tft;

static constexpr uint8_t LCD_CS_PIN = D2;
static constexpr uint8_t LCD_DC_PIN = D3;
static constexpr uint8_t LCD_SCK_PIN = D8;
static constexpr uint8_t LCD_MOSI_PIN = D10;
static constexpr uint8_t LCD_RST_PIN = D17;
static constexpr uint8_t LCD_BL_PIN = D18;

static void applyXIAO147PanelFix() {
  // The 172x320 JD9853A panel needs this MADCTL value for correct orientation.
  tft.writecommand(0x36);
  tft.writedata(0x48);
  delay(10);
}

static void setXIAO147Rotation(uint8_t rotation) {
  tft.setRotation(rotation);
  if (rotation == 0) {
    applyXIAO147PanelFix();
  }
}

static void preparePins() {
  pinMode(LCD_CS_PIN, OUTPUT);
  pinMode(LCD_DC_PIN, OUTPUT);
  pinMode(LCD_SCK_PIN, OUTPUT);
  pinMode(LCD_MOSI_PIN, OUTPUT);

  digitalWrite(LCD_CS_PIN, HIGH);
  digitalWrite(LCD_DC_PIN, HIGH);
  digitalWrite(LCD_SCK_PIN, LOW);
  digitalWrite(LCD_MOSI_PIN, LOW);
}

static void forceBacklightOn() {
  pinMode(LCD_BL_PIN, OUTPUT);
  digitalWrite(LCD_BL_PIN, HIGH);
  analogWrite(LCD_BL_PIN, 255);
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

static void initDisplay() {
  preparePins();
  forceBacklightOn();
  hardResetPanel();

  tft.init();
  setXIAO147Rotation(0);
  // This JD9853A panel requires inversion to be disabled for normal colors.
  tft.invertDisplay(false);
  tft.fillScreen(TFT_BLACK);
}

static void showTitle(const char *title) {
  tft.fillScreen(TFT_BLACK);
  tft.setTextDatum(MC_DATUM);
  tft.setTextColor(TFT_CYAN, TFT_BLACK);
  tft.drawString(title, tft.width() / 2, 130, 2);
  tft.setTextColor(TFT_DARKGREY, TFT_BLACK);
  tft.drawString("XIAO nRF52840 Plus", tft.width() / 2, 156, 2);
  delay(650);
}

static uint16_t colorWheel(uint8_t pos) {
  pos = 255 - pos;
  if (pos < 85) {
    return tft.color565(255 - pos * 3, 0, pos * 3);
  }
  if (pos < 170) {
    pos -= 85;
    return tft.color565(0, pos * 3, 255 - pos * 3);
  }
  pos -= 170;
  return tft.color565(pos * 3, 255 - pos * 3, 0);
}

static unsigned long testColorBars() {
  unsigned long start = micros();
  const uint16_t colors[] = {
    TFT_RED,
    TFT_GREEN,
    TFT_BLUE,
    TFT_CYAN,
    TFT_MAGENTA,
    TFT_YELLOW,
    TFT_WHITE,
    TFT_BLACK
  };
  int barH = tft.height() / 8;
  for (int i = 0; i < 8; ++i) {
    tft.fillRect(0, i * barH, tft.width(), barH, colors[i]);
  }
  return micros() - start;
}

static unsigned long testLines(uint16_t color) {
  unsigned long start = micros();
  int w = tft.width();
  int h = tft.height();
  tft.fillScreen(TFT_BLACK);

  for (int x = 0; x < w; x += 8) tft.drawLine(0, 0, x, h - 1, color);
  for (int y = 0; y < h; y += 8) tft.drawLine(0, 0, w - 1, y, color);
  for (int x = 0; x < w; x += 8) tft.drawLine(w - 1, h - 1, x, 0, TFT_YELLOW);
  for (int y = 0; y < h; y += 8) tft.drawLine(w - 1, h - 1, 0, y, TFT_YELLOW);

  return micros() - start;
}

static unsigned long testFastLines() {
  unsigned long start = micros();
  tft.fillScreen(TFT_BLACK);
  for (int y = 0; y < tft.height(); y += 5) {
    tft.drawFastHLine(0, y, tft.width(), TFT_RED);
  }
  for (int x = 0; x < tft.width(); x += 5) {
    tft.drawFastVLine(x, 0, tft.height(), TFT_BLUE);
  }
  return micros() - start;
}

static unsigned long testRects() {
  unsigned long start = micros();
  tft.fillScreen(TFT_BLACK);
  int cx = tft.width() / 2;
  int cy = tft.height() / 2;
  int maxSize = min(tft.width(), tft.height());

  for (int size = maxSize; size > 8; size -= 10) {
    int x = cx - size / 2;
    int y = cy - size / 2;
    tft.drawRect(x, y, size, size, colorWheel(size * 2));
  }
  return micros() - start;
}

static unsigned long testFilledRects() {
  unsigned long start = micros();
  tft.fillScreen(TFT_BLACK);
  int cx = tft.width() / 2;
  int cy = tft.height() / 2;
  int maxSize = min(tft.width(), tft.height());

  for (int size = maxSize; size > 8; size -= 12) {
    int x = cx - size / 2;
    int y = cy - size / 2;
    tft.fillRect(x, y, size, size, colorWheel(size * 3));
    tft.drawRect(x, y, size, size, TFT_WHITE);
  }
  return micros() - start;
}

static unsigned long testCircles() {
  unsigned long start = micros();
  tft.fillScreen(TFT_BLACK);
  for (int r = 8; r < 88; r += 8) {
    tft.drawCircle(tft.width() / 2, tft.height() / 2, r, colorWheel(r * 2));
  }
  for (int y = 24; y < tft.height(); y += 48) {
    for (int x = 20; x < tft.width(); x += 44) {
      tft.fillCircle(x, y, 10, colorWheel(x + y));
    }
  }
  return micros() - start;
}

static unsigned long testTriangles() {
  unsigned long start = micros();
  tft.fillScreen(TFT_BLACK);
  int cx = tft.width() / 2;
  int cy = tft.height() / 2;

  for (int i = 0; i < 80; i += 10) {
    tft.drawTriangle(
      cx, cy - i,
      cx - i, cy + i,
      cx + i, cy + i,
      colorWheel(i * 3)
    );
  }
  for (int i = 70; i > 0; i -= 14) {
    tft.fillTriangle(
      cx, cy - i,
      cx - i, cy + i,
      cx + i, cy + i,
      colorWheel(200 - i)
    );
  }
  return micros() - start;
}

static unsigned long testRoundRects() {
  unsigned long start = micros();
  tft.fillScreen(TFT_BLACK);
  for (int i = 0; i < 70; i += 8) {
    tft.drawRoundRect(
      4 + i / 2,
      8 + i,
      tft.width() - 8 - i,
      tft.height() - 16 - i * 2,
      8,
      colorWheel(i * 4)
    );
  }
  return micros() - start;
}

static unsigned long testText() {
  unsigned long start = micros();
  tft.fillScreen(TFT_BLACK);
  tft.setTextDatum(TL_DATUM);

  tft.setTextColor(TFT_GREEN, TFT_BLACK);
  tft.drawString("Graphic Test", 8, 18, 4);

  tft.setTextColor(TFT_CYAN, TFT_BLACK);
  tft.drawString("172 x 320 TFT", 10, 76, 2);

  tft.setTextColor(TFT_YELLOW, TFT_BLACK);
  tft.drawString("TFT_eSPI", 10, 106, 2);

  tft.setTextColor(TFT_WHITE, TFT_BLACK);
  for (int i = 0; i < 9; ++i) {
    tft.setCursor(10, 142 + i * 16);
    tft.print("Line ");
    tft.print(i + 1);
    tft.print(" 0x");
    tft.print(0x1000 + i * 137, HEX);
  }
  return micros() - start;
}

static unsigned long testGradient() {
  unsigned long start = micros();
  int w = tft.width();
  int h = tft.height();
  for (int y = 0; y < h; ++y) {
    for (int x = 0; x < w; ++x) {
      uint8_t r = map(x, 0, w - 1, 0, 255);
      uint8_t g = map(y, 0, h - 1, 0, 255);
      uint8_t b = (x + y) & 0xFF;
      tft.drawPixel(x, y, tft.color565(r, g, b));
    }
  }
  return micros() - start;
}

static void printResult(const char *name, unsigned long us) {
  Serial.print(name);
  Serial.print(": ");
  Serial.print(us / 1000.0f, 2);
  Serial.println(" ms");
}

static void showResultScreen() {
  tft.fillScreen(TFT_BLACK);
  tft.setTextDatum(MC_DATUM);
  tft.setTextColor(TFT_GREEN, TFT_BLACK);
  tft.drawString("Graphic Test", tft.width() / 2, 86, 4);
  tft.setTextColor(TFT_WHITE, TFT_BLACK);
  tft.drawString("Finished", tft.width() / 2, 132, 4);
  tft.setTextColor(TFT_CYAN, TFT_BLACK);
  tft.drawString("Reset to run again", tft.width() / 2, 184, 2);
  tft.drawRoundRect(8, 8, tft.width() - 16, tft.height() - 16, 8, TFT_BLUE);
}

void setup() {
  Serial.begin(115200);
  delay(800);

  Serial.println();
  Serial.println("=== XIAO nRF52840 Plus graphic test ===");

  initDisplay();

  Serial.print("LCD width: ");
  Serial.println(tft.width());
  Serial.print("LCD height: ");
  Serial.println(tft.height());

  showTitle("Graphic Test");

  unsigned long us;

  us = testColorBars();
  printResult("Color bars", us);
  delay(900);

  us = testLines(TFT_CYAN);
  printResult("Lines", us);
  delay(900);

  us = testFastLines();
  printResult("Fast lines", us);
  delay(900);

  us = testRects();
  printResult("Rectangles", us);
  delay(900);

  us = testFilledRects();
  printResult("Filled rectangles", us);
  delay(900);

  us = testCircles();
  printResult("Circles", us);
  delay(900);

  us = testTriangles();
  printResult("Triangles", us);
  delay(900);

  us = testRoundRects();
  printResult("Round rectangles", us);
  delay(900);

  us = testText();
  printResult("Text", us);
  delay(1100);

  us = testGradient();
  printResult("Pixel gradient", us);
  delay(1200);

  showResultScreen();
  Serial.println("Graphic test finished.");
}

void loop() {
  delay(1000);
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

1. Open Arduino IDE.
2. Select the XIAO nRF52840 Plus board.
3. Select the correct serial port.
4. Paste the main sketch.
5. Create `driver.h` in the same sketch folder.
6. Compile and upload the sketch.
7. Open Serial Monitor at `115200` baud to view the rendering time for each graphics test.

:::caution

**Known Behavior and Debug Summary**

During testing, the graphic test may behave differently depending on whether a microSD card is inserted. If the graphic test runs normally without a microSD card but stalls when a card is inserted, the LCD hardware is likely working. The `sd_image_reader` demo proves that the display and SD card can share the SPI bus correctly when the card is initialized with `SPI.begin()` and `SdFat.begin(SdSpiConfig(..., SHARED_SPI, ...))`.

The issue is more likely related to startup state and traffic pattern: after a cold boot, an inserted SD card may remain in an undefined or half-initialized state, while the `Lines` test generates many small `drawLine()` SPI transactions. This is more stressful than block-style operations such as `fillRect()` or `pushImage()`.

:::

## Expected Result

After uploading the sketch, the display runs through a sequence of graphics tests, including color bars, lines, rectangles, circles, triangles, rounded rectangles, text, and a pixel gradient. The Serial Monitor prints the rendering time for each test in milliseconds.

At the end of the test sequence, the display shows a finished screen. Reset the board to run the test again.

TODO: Add the final graphic test result image or GIF.

<div style={{textAlign:'center'}}>
  <img src="TODO_GRAPHICTEST_RESULT_IMAGE" style={{width:600, height:'auto'}}/>
</div>

## TFT Display APIs

- **`tft.init()`**: Initializes the TFT display driver and its SPI communication.

- **`tft.setRotation(0)`**: Sets the screen orientation. The demo uses portrait orientation for the 172 × 320 display.

- **`tft.invertDisplay(false)`**: Disables display color inversion. If colors look reversed or abnormal, verify this setting together with the panel initialization sequence.

- **`tft.writecommand()` and `tft.writedata()`**: Send a command and data directly to the LCD controller. The demo uses these APIs to apply the panel-specific memory access configuration.

- **`tft.fillScreen(color)`**: Fills the entire display with one color. The demo uses it to clear the screen before each test.

- **`tft.fillRect(x, y, width, height, color)`**: Draws a filled rectangle. It is used for color bars and filled-rectangle tests.

- **`tft.drawLine(x0, y0, x1, y1, color)`**: Draws a line between two points.

- **`tft.drawFastHLine(x, y, width, color)`**: Draws a horizontal line faster than the generic line API.

- **`tft.drawFastVLine(x, y, height, color)`**: Draws a vertical line faster than the generic line API.

- **`tft.drawRect()` and `tft.fillRect()`**: Draw outlined and filled rectangles.

- **`tft.drawCircle()` and `tft.fillCircle()`**: Draw outlined and filled circles.

- **`tft.drawTriangle()` and `tft.fillTriangle()`**: Draw outlined and filled triangles.

- **`tft.drawRoundRect()`**: Draws a rounded rectangle. The final result screen also uses this API for the border.

- **`tft.drawPixel(x, y, color)`**: Draws a single pixel. The gradient test uses it to draw every pixel individually.

- **`tft.color565(r, g, b)`**: Converts 8-bit RGB values to RGB565 format used by the display.

- **`tft.setTextDatum()`**: Sets the text alignment reference point. The demo uses center alignment for title/result screens and top-left alignment for the text test.

- **`tft.setTextColor(foreground, background)`**: Sets the text and background colors.

- **`tft.drawString(text, x, y, font)`**: Draws a string at a position with the selected built-in font.

- **`tft.setCursor(x, y)` and `tft.print()`**: Draw text using cursor-based printing.

- **`tft.width()` and `tft.height()`**: Return the current display dimensions after rotation.

## Troubleshooting

### Serial Monitor shows no output

- Confirm that the Serial Monitor baud rate is set to `115200`.
- Install Adafruit TinyUSB Library if your local nRF52 environment requires it.

## Resources

- [Getting Started with Seeed Studio XIAO 1.47 Inch Touch Display](https://wiki.seeedstudio.com/getting_started_with_XIAO_1.47_inch_touch_display/)
- [Seeed_GFX GitHub Repository](https://github.com/Seeed-Studio/Seeed_GFX)
- TODO: Demo code repository
- TODO: Result image or GIF

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
