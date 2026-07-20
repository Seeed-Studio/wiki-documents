---
description: Electronic quicksand IMU fluid demo for XIAO 1.47 Inch Touch Display
title: Electronic Quicksand with XIAO 1.47 Inch Touch Display
keywords:
  - XIAO
  - Display
  - IMU
  - Fluid
  - Particle
image: TODO
slug: /xiao_1_47_inch_touch_display_electronic_quicksand
sidebar_position: 1
sku: TODO
last_update:
  date: 07/08/2026
  author: Seeed Studio
createdAt: '2026-07-08'
updatedAt: '2026-07-08'
url: https://wiki.seeedstudio.com/xiao_1_47_inch_touch_display_electronic_quicksand/
---

# Electronic Quicksand with XIAO 1.47 Inch Touch Display

This tutorial shows how to build an electronic quicksand demo with the XIAO 1.47 Inch Touch Display. The demo reads the onboard 6-axis IMU, converts the board tilt direction into a gravity vector, and simulates flowing particles on the 1.47-inch screen.

Unlike a full-frame animation, this demo runs the fluid effect on a low-resolution occupancy grid and redraws only the cells that changed. This keeps the animation responsive on the small LCD while still producing a physical, sand-like motion effect.

:::note
This demo is designed for the XIAO nRF52840 Plus version of the XIAO 1.47 Inch Touch Display. It uses the onboard LCD and the onboard LSM6DS3 IMU.
:::

## Environment Preparation

### Hardware

For this project, you need:

- Seeed Studio XIAO 1.47 Inch Touch Display
- USB-C cable for programming
- Optional: 3.7V lithium battery for portable testing

### Software Preparation

Before starting this application, complete the basic setup guide:

- [Getting Started with Seeed Studio XIAO 1.47 Inch Touch Display](https://wiki.seeedstudio.com/getting_started_with_XIAO_1.47_inch_touch_display/)

Make sure the following basic examples work correctly before continuing:

- Display
- IMU

The demo uses the following Arduino libraries and board components:

- Seeed nRF52 Boards
- Adafruit TinyUSB Library
- Seeed_GFX / TFT_eSPI display configuration
- Seeed_Arduino_LSM6DS3

## Hardware Pin Mapping

The electronic quicksand demo uses the following pins.

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
     <td>I2C SDA</td>
     <td>D4</td>
     <td>IMU I2C data</td>
 </tr>
 <tr>
     <td>I2C SCL</td>
     <td>D5</td>
     <td>IMU I2C clock</td>
 </tr>
 <tr>
     <td>LCD SCK</td>
     <td>D8</td>
     <td>Display SPI clock</td>
 </tr>
 <tr>
     <td>LCD MOSI</td>
     <td>D10</td>
     <td>Display SPI data</td>
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

The demo initializes the display, starts the LSM6DS3 IMU, creates a group of sand particles near the bottom of the grid, and then updates the particle positions continuously according to the current board tilt.

Each particle has a position, velocity, previous cell, current cell, and color. The simulation uses an occupancy grid to avoid expensive particle-to-particle collision checks. During each frame, the sketch:

- Reads the accelerometer direction.
- Smooths the accelerometer value into a gravity vector.
- Sorts particles by depth along the gravity direction.
- Moves each particle into a nearby available cell.
- Clears old cells and redraws only changed cells.

### Step 1. Paste the Main Sketch

Paste the `electronic_quicksand` demo code into your Arduino IDE sketch.

```cpp
/*
  XIAO nRF52840 Plus 1.47 Inch Touch Display electronic quicksand demo.

  This version follows the practical trick used by small LED-matrix fluid toys:
  run the fluid on a low-resolution occupancy grid, then draw only the cells
  that changed. It reacts much faster than redrawing a full LCD frame or doing
  all-pairs particle collisions.
*/

#include "driver.h"
#include <Arduino.h>
#include <Adafruit_TinyUSB.h>
#include <SPI.h>
#include <TFT_eSPI.h>
#include <Wire.h>
#include "LSM6DS3.h"
#include <math.h>

static constexpr uint8_t LCD_CS_PIN = D2;
static constexpr uint8_t LCD_DC_PIN = D3;
static constexpr uint8_t LCD_SCK_PIN = D8;
static constexpr uint8_t LCD_MOSI_PIN = D10;
static constexpr uint8_t LCD_RST_PIN = D17;
static constexpr uint8_t LCD_BL_PIN = D18;

static constexpr uint8_t GRID_W = 24;
static constexpr uint8_t GRID_H = 45;
static constexpr uint8_t CELL_SIZE = 7;
static constexpr uint16_t FLUID_PARTICLES = 180;
static constexpr float GRAVITY = 0.34f;
static constexpr float DAMPING = 0.88f;
static constexpr float MAX_VELOCITY = 1.25f;
static constexpr float TOP_MOBILITY = 1.35f;
static constexpr float BOTTOM_MOBILITY = 0.52f;
static constexpr uint8_t FRAME_INTERVAL_MS = 8;

TFT_eSPI tft;
LSM6DS3 imu(I2C_MODE, 0x6A);

struct Particle {
  float x;
  float y;
  float vx;
  float vy;
  int8_t cellX;
  int8_t cellY;
  int8_t oldCellX;
  int8_t oldCellY;
  uint16_t color;
};

Particle particles[FLUID_PARTICLES];
bool occupied[GRID_W][GRID_H];
uint16_t particleOrder[FLUID_PARTICLES];

float accelX = 0.0f;
float accelY = 0.0f;
float gravityX = 0.0f;
float gravityY = 1.0f;
float depthMinScore = 0.0f;
float depthSpan = 1.0f;
int16_t gridOriginX = 0;
int16_t gridOriginY = 0;
uint32_t lastFrameMs = 0;

static uint16_t rgb565(uint8_t r, uint8_t g, uint8_t b) {
  return ((r & 0xF8) << 8) | ((g & 0xFC) << 3) | (b >> 3);
}

static uint16_t blendColor(uint16_t a, uint16_t b, uint8_t amount) {
  uint8_t ar = (a >> 11) & 0x1F;
  uint8_t ag = (a >> 5) & 0x3F;
  uint8_t ab = a & 0x1F;
  uint8_t br = (b >> 11) & 0x1F;
  uint8_t bg = (b >> 5) & 0x3F;
  uint8_t bb = b & 0x1F;

  uint8_t rr = ar + ((int16_t)(br - ar) * amount) / 255;
  uint8_t rg = ag + ((int16_t)(bg - ag) * amount) / 255;
  uint8_t rb = ab + ((int16_t)(bb - ab) * amount) / 255;
  return (rr << 11) | (rg << 5) | rb;
}

static void applyXIAO147PanelFix() {
  tft.writecommand(0x36);
  tft.writedata(0x48);
  delay(10);
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

static void prepareDisplayPins() {
  pinMode(LCD_CS_PIN, OUTPUT);
  pinMode(LCD_DC_PIN, OUTPUT);
  pinMode(LCD_SCK_PIN, OUTPUT);
  pinMode(LCD_MOSI_PIN, OUTPUT);
  digitalWrite(LCD_CS_PIN, HIGH);
  digitalWrite(LCD_DC_PIN, HIGH);
  digitalWrite(LCD_SCK_PIN, LOW);
  digitalWrite(LCD_MOSI_PIN, LOW);
}

static void initDisplay() {
  prepareDisplayPins();
  forceBacklightOn();
  hardResetPanel();

  tft.init();
  tft.setRotation(0);
  applyXIAO147PanelFix();
  tft.invertDisplay(false);
  tft.fillScreen(TFT_BLACK);

  gridOriginX = (tft.width() - GRID_W * CELL_SIZE) / 2;
  gridOriginY = (tft.height() - GRID_H * CELL_SIZE) / 2;
}

static void drawBackground() {
  tft.fillScreen(TFT_BLACK);
}

static void showMessage(const char *title, const char *line) {
  tft.fillScreen(TFT_BLACK);
  tft.setTextDatum(MC_DATUM);
  tft.setTextColor(rgb565(255, 220, 80), TFT_BLACK);
  tft.drawString(title, tft.width() / 2, 118, 4);
  tft.setTextColor(TFT_WHITE, TFT_BLACK);
  tft.drawString(line, tft.width() / 2, 160, 2);
}

static void drawCell(int8_t x, int8_t y, uint16_t color) {
  int16_t px = gridOriginX + x * CELL_SIZE;
  int16_t py = gridOriginY + y * CELL_SIZE;
  tft.fillRect(px + 1, py + 1, CELL_SIZE - 2, CELL_SIZE - 2, color);
}

static void clearCell(int8_t x, int8_t y) {
  if (x < 0 || x >= GRID_W || y < 0 || y >= GRID_H) return;
  drawCell(x, y, TFT_BLACK);
}

static float randUnit() {
  return random(-1000, 1001) * 0.001f;
}

static void clearOccupancy() {
  memset(occupied, 0, sizeof(occupied));
}

static void resetParticles() {
  const uint16_t deep = rgb565(196, 128, 18);
  const uint16_t bright = rgb565(255, 236, 92);
  uint16_t index = 0;

  clearOccupancy();
  for (int8_t y = GRID_H - 8; y < GRID_H && index < FLUID_PARTICLES; ++y) {
    for (int8_t x = 0; x < GRID_W && index < FLUID_PARTICLES; ++x) {
      Particle &p = particles[index++];
      p.x = x;
      p.y = y;
      p.vx = randUnit() * 0.2f;
      p.vy = randUnit() * 0.2f;
      p.cellX = x;
      p.cellY = y;
      p.oldCellX = -1;
      p.oldCellY = -1;
      p.color = blendColor(deep, bright, random(50, 230));
      occupied[x][y] = true;
    }
  }

  for (uint16_t i = 0; i < FLUID_PARTICLES; ++i) {
    particleOrder[i] = i;
  }
}

static void readGravity() {
  float x = imu.readFloatAccelX();
  float y = imu.readFloatAccelY();

  accelX = accelX * 0.78f + x * 0.22f;
  accelY = accelY * 0.78f + y * 0.22f;

  float len = sqrtf(accelX * accelX + accelY * accelY);
  if (len < 0.06f) return;

  gravityX = gravityX * 0.72f + (accelX / len) * 0.28f;
  gravityY = gravityY * 0.72f + (accelY / len) * 0.28f;
}

static void updateDepthRange() {
  float minScore = 100000.0f;
  float maxScore = -100000.0f;
  const float corners[4][2] = {
    {0.0f, 0.0f},
    {(float)(GRID_W - 1), 0.0f},
    {0.0f, (float)(GRID_H - 1)},
    {(float)(GRID_W - 1), (float)(GRID_H - 1)}
  };

  for (uint8_t i = 0; i < 4; ++i) {
    float score = corners[i][0] * gravityX + corners[i][1] * gravityY;
    if (score < minScore) minScore = score;
    if (score > maxScore) maxScore = score;
  }

  depthMinScore = minScore;
  depthSpan = maxScore - minScore;
  if (depthSpan < 0.001f) depthSpan = 1.0f;
}

static float particleDepth(const Particle &p) {
  float current = p.cellX * gravityX + p.cellY * gravityY;
  return constrain((current - depthMinScore) / depthSpan, 0.0f, 1.0f);
}

static float particleMobility(const Particle &p) {
  float depth = particleDepth(p);
  return TOP_MOBILITY + (BOTTOM_MOBILITY - TOP_MOBILITY) * depth;
}

static float clampVelocity(float v, float limit) {
  if (v > limit) return limit;
  if (v < -limit) return -limit;
  return v;
}

static void constrainToScreen(Particle &p) {
  if (p.x < 0.0f) {
    p.x = 0.0f;
    if (p.vx < 0.0f) p.vx *= -0.25f;
  } else if (p.x > GRID_W - 1) {
    p.x = GRID_W - 1;
    if (p.vx > 0.0f) p.vx *= -0.25f;
  }

  if (p.y < 0.0f) {
    p.y = 0.0f;
    if (p.vy < 0.0f) p.vy *= -0.25f;
  } else if (p.y > GRID_H - 1) {
    p.y = GRID_H - 1;
    if (p.vy > 0.0f) p.vy *= -0.25f;
  }
}

static bool pickCell(
  Particle &p,
  int8_t wantX,
  int8_t wantY,
  int8_t &outX,
  int8_t &outY,
  float mobility
) {
  float bestScore = 100000.0f;
  bool found = false;

  for (int8_t radius = 0; radius <= 1; ++radius) {
    for (int8_t dy = -radius; dy <= radius; ++dy) {
      for (int8_t dx = -radius; dx <= radius; ++dx) {
        if (abs(dx) + abs(dy) != radius) continue;

        int8_t cx = wantX + dx;
        int8_t cy = wantY + dy;
        if (cx < 0 || cx >= GRID_W || cy < 0 || cy >= GRID_H) continue;
        if (occupied[cx][cy]) continue;

        float px = (float)cx - p.x;
        float py = (float)cy - p.y;
        float flowBonus = px * gravityX + py * gravityY;
        float score = px * px + py * py - flowBonus * (0.40f + mobility * 0.28f);
        if (score < bestScore) {
          bestScore = score;
          outX = cx;
          outY = cy;
          found = true;
        }
      }
    }
    if (found) return true;
  }

  return false;
}

static void updateParticles() {
  clearOccupancy();

  for (uint16_t i = 1; i < FLUID_PARTICLES; ++i) {
    uint16_t key = particleOrder[i];
    float keyScore = particles[key].cellX * gravityX + particles[key].cellY * gravityY;
    int16_t j = i - 1;
    while (j >= 0) {
      Particle &p = particles[particleOrder[j]];
      float score = p.cellX * gravityX + p.cellY * gravityY;
      if (score >= keyScore) break;
      particleOrder[j + 1] = particleOrder[j];
      --j;
    }
    particleOrder[j + 1] = key;
  }

  for (uint16_t i = 0; i < FLUID_PARTICLES; ++i) {
    Particle &p = particles[particleOrder[i]];
    float mobility = particleMobility(p);
    float localDamping = 0.74f + mobility * 0.15f;
    float localGravity = GRAVITY * mobility;
    float localMaxVelocity = MAX_VELOCITY * (0.52f + mobility * 0.42f);

    p.vx = clampVelocity((p.vx + gravityX * localGravity) * localDamping,
                         localMaxVelocity);
    p.vy = clampVelocity((p.vy + gravityY * localGravity) * localDamping,
                         localMaxVelocity);
    p.x += p.vx;
    p.y += p.vy;
    constrainToScreen(p);

    int8_t wantX = constrain((int)roundf(p.x), 0, GRID_W - 1);
    int8_t wantY = constrain((int)roundf(p.y), 0, GRID_H - 1);
    int8_t cellX = p.cellX;
    int8_t cellY = p.cellY;

    if (!pickCell(p, wantX, wantY, cellX, cellY, mobility)) {
      cellX = p.cellX;
      cellY = p.cellY;
      p.vx *= -0.18f;
      p.vy *= -0.18f;
    }

    p.x = p.x * 0.35f + cellX * 0.65f;
    p.y = p.y * 0.35f + cellY * 0.65f;
    p.oldCellX = p.cellX;
    p.oldCellY = p.cellY;
    p.cellX = cellX;
    p.cellY = cellY;
    occupied[cellX][cellY] = true;
  }
}

static void drawParticles() {
  for (uint16_t i = 0; i < FLUID_PARTICLES; ++i) {
    Particle &p = particles[i];
    if (p.oldCellX != p.cellX || p.oldCellY != p.cellY) {
      clearCell(p.oldCellX, p.oldCellY);
    }
  }

  for (uint16_t i = 0; i < FLUID_PARTICLES; ++i) {
    Particle &p = particles[i];
    if (p.oldCellX != p.cellX || p.oldCellY != p.cellY) {
      drawCell(p.cellX, p.cellY, p.color);
    }
  }

}

void setup() {
  Serial.begin(115200);
  delay(500);

  initDisplay();
  showMessage("Fluid", "Starting IMU...");

  Wire.begin();
  int ret = imu.begin();
  Serial.println();
  Serial.println("=== Electronic Quicksand ===");
  Serial.print("imu.begin=");
  Serial.println(ret);

  if (ret != 0) {
    showMessage("IMU Error", "Check LSM6DS3");
    while (1) delay(1000);
  }

  randomSeed((uint32_t)micros());
  drawBackground();
  resetParticles();
  for (uint16_t i = 0; i < FLUID_PARTICLES; ++i) {
    drawCell(particles[i].cellX, particles[i].cellY, particles[i].color);
  }
  lastFrameMs = millis();
}

void loop() {
  uint32_t now = millis();
  if (now - lastFrameMs < FRAME_INTERVAL_MS) return;
  lastFrameMs = now;

  readGravity();
  updateDepthRange();
  updateParticles();
  drawParticles();
}

```

### Step 2. Create `driver.h`

Create a new file named `driver.h` in the same folder as your Arduino sketch by clicking on the arrow next to the example tab and selecting **New Tab**.

Name the new file as `driver.h`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/12_create_driver_h.png" style={{width:1000, height:'auto'}}/></div>

Paste the following configuration into `driver.h`:

```cpp
// Seeed_GFX setup for ST7789 172x320 TFT.
// User_Setup_Select.h loads this file from the sketch folder.

// This combo selects Seeed's predefined XIAO TFT Display Board profile.
#define BOARD_SCREEN_COMBO 75
#define USE_XIAO_TFT_DISPLAY_BOARD
```

### Step 3. Upload and Test

1. Open Arduino IDE.
2. Select the XIAO nRF52840 Plus board.
3. Select the correct serial port.
4. Paste the main sketch.
5. Create `driver.h` in the same sketch folder.
6. Upload the sketch.
7. Tilt or rotate the board and observe the particle motion on the display.
8. Open Serial Monitor if you want to check the IMU initialization result.

## Expected Result

After uploading the sketch, the screen briefly shows the startup message and then displays a group of yellow-orange particles. When you tilt the board, the particles flow toward the new gravity direction, creating an electronic quicksand effect.

If the IMU is not detected, the screen shows an IMU error message and the program stops.

## Code Function Explanation

This section explains the library APIs used by the demo and the settings users can adjust.

### TFT Display APIs

- **`tft.init()`**: Initializes the TFT display driver and its SPI communication.

- **`tft.setRotation(0)`**: Sets the screen orientation. The demo uses portrait orientation for the 172 x 320 display.

- **`tft.writecommand()` and `tft.writedata()`**: Send a command and data directly to the LCD controller. The demo writes a panel-specific memory access value for the correct display direction.

- **`tft.invertDisplay(false)`**: Controls display color inversion. If the displayed colors appear inverted, this setting is one of the first items to check.

- **`tft.fillScreen(color)`**: Fills the complete display with one color. The demo uses it to clear the screen during startup and background drawing.

- **`tft.setTextDatum(MC_DATUM)`**: Sets the text reference point. `MC_DATUM` centers text around the specified coordinate.

- **`tft.setTextColor(foreground, background)`**: Sets text and background colors.

- **`tft.drawString(text, x, y, font)`**: Draws startup and error messages at fixed positions.

- **`tft.fillRect(x, y, width, height, color)`**: Draws each simulated particle cell. The demo also uses black rectangles to clear cells that changed position.

### LSM6DS3 and I2C APIs

- **`Wire.begin()`**: Initializes the I2C bus used by the onboard LSM6DS3 IMU.

- **`LSM6DS3 imu(I2C_MODE, 0x6A)`**: Creates an IMU object using I2C mode and the default LSM6DS3 I2C address.

- **`imu.begin()`**: Initializes the LSM6DS3 sensor. The demo stops and shows an error message if initialization fails.

- **`imu.readFloatAccelX()`**: Reads acceleration on the X axis. The demo uses this value to calculate the horizontal component of simulated gravity.

- **`imu.readFloatAccelY()`**: Reads acceleration on the Y axis. The demo uses this value to calculate the vertical component of simulated gravity.

### Math and Simulation APIs

- **`sqrtf(value)`**: Calculates the accelerometer vector length before normalizing the gravity direction.

- **`roundf(value)`**: Converts floating-point particle positions to grid cell coordinates.

- **`constrain(value, min, max)`**: Keeps particle positions, cell coordinates, and depth values inside valid ranges.

- **`abs(value)`**: Checks neighboring cells while searching for available particle movement targets.

- **`memset(buffer, value, size)`**: Clears the occupancy grid before recalculating particle positions.

### User-Adjustable Settings

- **Grid width and height**: `GRID_W` and `GRID_H` control the simulation resolution. Higher values provide more detail but require more updates.

```cpp
static constexpr uint8_t GRID_W = 24;
static constexpr uint8_t GRID_H = 45;
```

- **Cell size**: `CELL_SIZE` controls the size of each rendered particle cell.

```cpp
static constexpr uint8_t CELL_SIZE = 7;
```

- **Particle count**: `FLUID_PARTICLES` controls how many particles are simulated. More particles look denser but increase CPU and drawing load.

```cpp
static constexpr uint16_t FLUID_PARTICLES = 180;
```

- **Gravity strength**: `GRAVITY` controls how strongly particles accelerate along the tilt direction.

```cpp
static constexpr float GRAVITY = 0.34f;
```

- **Velocity damping**: `DAMPING` reduces particle velocity over time.

```cpp
static constexpr float DAMPING = 0.88f;
```

- **Maximum velocity**: `MAX_VELOCITY` limits how fast a particle can move across the grid.

```cpp
static constexpr float MAX_VELOCITY = 1.25f;
```

- **Top and bottom mobility**: `TOP_MOBILITY` and `BOTTOM_MOBILITY` make particles near the surface more mobile and particles deeper in the pile less mobile.

```cpp
static constexpr float TOP_MOBILITY = 1.35f;
static constexpr float BOTTOM_MOBILITY = 0.52f;
```

- **Frame interval**: `FRAME_INTERVAL_MS` controls the target animation update interval.

```cpp
static constexpr uint8_t FRAME_INTERVAL_MS = 8;
```

## Troubleshooting

- **The screen stays on "IMU Error"**: Make sure the IMU basic example works first. Also confirm that the LSM6DS3 library is installed and the board is the XIAO nRF52840 Plus version.

- **Particles do not move when the board is tilted**: Check the Serial Monitor for the `imu.begin` result. If initialization succeeds, try tilting the board more slowly and across both axes.

- **Animation is too slow**: Reduce `FLUID_PARTICLES`, increase `CELL_SIZE`, or increase `FRAME_INTERVAL_MS`.

- **Animation looks too sparse**: Increase `FLUID_PARTICLES`, but keep enough free grid cells for particles to move.

- **Colors or orientation look wrong**: Check `tft.invertDisplay(false)`, `tft.setRotation(0)`, and the panel command in `applyXIAO147PanelFix()`.

## Resources

- [Getting Started with Seeed Studio XIAO 1.47 Inch Touch Display](https://wiki.seeedstudio.com/getting_started_with_XIAO_1.47_inch_touch_display/)
- [Seeed_Arduino_LSM6DS3 GitHub Repository](https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3)
- [Seeed_GFX GitHub Repository](https://github.com/Seeed-Studio/Seeed_GFX)
- TODO: Product page
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
