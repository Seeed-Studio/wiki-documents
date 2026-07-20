---
description: Screen raise to wake application for XIAO 1.47 Inch Touch Display
title: Screen Raise to Wake with XIAO 1.47 Inch Touch Display
keywords:
  - XIAO
  - Display
  - Touch
  - IMU
image: TODO
slug: /xiao_1_47_inch_touch_display_Screen_raise_to_wake
sidebar_position: 1
sku: TODO
last_update:
  date: 06/16/2026
  author: Seeed Studio
createdAt: '2026-06-11'
updatedAt: '2026-06-16'
url: https://wiki.seeedstudio.com/xiao_1_47_inch_touch_display_Screen_raise_to_wake/
---

# Screen Raise to Wake with XIAO 1.47 Inch Touch Display

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/xiao_display_board/wake_up3.gif" style={{width:600, height:'auto'}}/>
</div>

This tutorial shows how to build a Screen-raise-to-wake demo with the XIAO 1.47 Inch Touch Display. The demo uses the onboard 6-axis IMU to detect motion, turns off the display backlight after a timeout, enters nRF52840 System ON sleep, and wakes the screen again when the IMU interrupt is triggered.

:::note
This demo is a standalone validation firmware for the XIAO nRF52840 Plus version. It uses nRF52840 System ON sleep, not System OFF deep sleep.
:::

## Environment Preparation

### Hardware

For this project, you need:

- Seeed Studio XIAO 1.47 Inch Touch Display
- USB-C cable for programming
- Optional: 3.7V lithium battery for portable testing
- Optional: strap, case, or wearable mount

### Software Preparation

Before starting this application, complete the basic setup guide:

- [Getting Started with Seeed Studio XIAO 1.47 Inch Touch Display](https://wiki.seeedstudio.com/getting_started_with_XIAO_1.47_inch_touch_display/)

Make sure the following basic examples work correctly before continuing:

- Display
- IMU
- IMU interrupt
- Battery, if you want to test battery-powered behavior

## Hardware Pin Mapping

The wake-up demo uses the following pins.

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
     <td>IMU INT</td>
     <td>D14</td>
     <td>IMU wake-up interrupt</td>
 </tr>
 <tr>
     <td>LCD RST</td>
     <td>D17</td>
     <td>Display hardware reset</td>
 </tr>
 <tr>
     <td>LCD BL</td>
     <td>D18</td>
     <td>Display backlight PWM</td>
 </tr>
 <tr>
     <td>USR1</td>
     <td>D19</td>
     <td>Manual sleep test button</td>
 </tr>
 <tr>
     <td>USR2</td>
     <td>D15</td>
     <td>Manual wake test button</td>
 </tr>
 <tr>
     <td>READ_BAT</td>
     <td>P0.14</td>
     <td>Battery divider enable</td>
 </tr>
 <tr>
     <td>CHG</td>
     <td>P0.17</td>
     <td>Charging status input</td>
 </tr>
 <tr>
     <td>VBAT ADC</td>
     <td>PIN_VBAT</td>
     <td>Battery voltage ADC input</td>
 </tr>
</table>

:::note
On the XIAO nRF52840 Plus version, D14 and D15 may be shared with NFC-related functions by default. Make sure they are available as GPIO before using the IMU interrupt and USR2 wake button.
:::

## Code

The demo starts in the awake state. While awake, it refreshes the display UI, updates IMU readings, reads battery voltage, and checks for button input. If there is no activity for 8 seconds, the firmware calls the screen sleep routine.

In the sleep state, the LCD content is cleared, a short sleeping message is shown, and then the backlight is turned off. UI refresh and sensor polling are paused. The nRF52840 then waits in System ON sleep until an interrupt or event wakes the CPU.

### Step 1. Paste the Main Sketch

Paste the wake-up demo code into your Arduino IDE sketch.

```cpp
/*
  XIAO nRF52840 Plus + 1.47 Touch Display
  IMU D14 Wake Screen Sleep Demo v0.2 - nRF System ON Sleep

  Target behavior:
    Device screen sleeps -> nRF52840 enters System ON sleep -> user picks up/moves device
    -> LSM6DS3 INT1 triggers D14 -> nRF wakes -> screen lights up.

  This is still a standalone validation firmware.
  Compared with v0.1:
    - LCD backlight off = screen sleep
    - UI refresh paused while sleeping
    - nRF52840 executes WFE-based System ON sleep while screen is off
    - IMU wake-up/motion interrupt on D14 wakes CPU and screen

  It does NOT use nRF System OFF deep sleep. State is preserved and wake is fast.
  After this behavior is verified, merge the same state machine into the factory dashboard.

  Hardware assumptions from the current verified 1.47 nRF52840 Plus firmware:
    LCD CS  = D2
    LCD DC  = D3
    I2C SDA = D4
    I2C SCL = D5
    LCD SCK = D8
    LCD MOSI= D10
    IMU INT = D14
    LCD RST = D17
    LCD BL  = D18
    USR1    = D19
    USR2    = D15
    READ_BAT= P0.14
    CHG     = P0.17
    VBAT ADC= PIN_VBAT

  Required Arduino libraries:
    - Seeed_GFX
    - Seeed_Arduino_LSM6DS3
    - Adafruit TinyUSB Library
*/

#include "driver.h"
#include <Arduino.h>
#include <Adafruit_TinyUSB.h>
#include <Wire.h>
#include <SPI.h>
#include <TFT_eSPI.h>
#include "LSM6DS3.h"
#include <nrf.h>
#include <nrf_gpio.h>

// ========================= Pins =========================

static constexpr uint8_t LCD_CS_PIN    = D2;
static constexpr uint8_t LCD_DC_PIN    = D3;
static constexpr uint8_t I2C_SDA_PIN   = D4;
static constexpr uint8_t I2C_SCL_PIN   = D5;
static constexpr uint8_t LCD_SCK_PIN   = D8;
static constexpr uint8_t LCD_MOSI_PIN  = D10;
static constexpr uint8_t IMU_INT_PIN   = D14;
static constexpr uint8_t LCD_BL_PIN    = D18;
static constexpr uint8_t LCD_RST_PIN   = D17;

// Optional manual test buttons.
static constexpr uint8_t USR1_PIN = D19; // force sleep
static constexpr uint8_t USR2_PIN = D15; // force wake

// nRF52840 Plus battery measurement pins.
static constexpr uint8_t READ_BAT_P0_PIN = 14; // P0.14 / READ_BAT, active-low divider enable.
static constexpr uint8_t CHG_P0_PIN = 17;      // P0.17 / CHG, active-low charging status.

#ifndef PIN_VBAT
#define PIN_VBAT 35
#endif

// ========================= LCD =========================

TFT_eSPI tft;

// ========================= IMU =========================

LSM6DS3 myIMU(I2C_MODE, 0x6A);

static constexpr uint8_t LSM6DS3_ADDR      = 0x6A;
static constexpr uint8_t REG_WAKE_UP_SRC   = 0x1B;
static constexpr uint8_t REG_CTRL1_XL      = 0x10;
static constexpr uint8_t REG_CTRL3_C       = 0x12;
static constexpr uint8_t REG_TAP_CFG       = 0x58;
static constexpr uint8_t REG_WAKE_UP_THS   = 0x5B;
static constexpr uint8_t REG_WAKE_UP_DUR   = 0x5C;
static constexpr uint8_t REG_MD1_CFG       = 0x5E;

// ========================= UI / timing =========================

static constexpr uint32_t AUTO_SLEEP_MS = 8000;
static constexpr uint32_t UI_REFRESH_MS = 250;
static constexpr uint32_t BAT_REFRESH_MS = 1000;
static constexpr uint32_t WAKE_LOCK_MS  = 1200;
static constexpr uint32_t SLEEP_STATUS_MS = 2000;

// Wake-up sensitivity.
// Lower threshold: easier to wake, but more false triggers.
// Higher threshold: harder to wake.
// Suggested tuning range: 0x03 ~ 0x0A
static constexpr uint8_t IMU_WAKE_THRESHOLD = 0x05;

static constexpr uint8_t BACKLIGHT_AWAKE_PWM = 120;
static constexpr uint8_t BACKLIGHT_SLEEP_PWM = 0;

static constexpr uint16_t C_BLACK  = TFT_BLACK;
static constexpr uint16_t C_WHITE  = TFT_WHITE;
static constexpr uint16_t C_GREEN  = TFT_GREEN;
static constexpr uint16_t C_CYAN   = TFT_CYAN;
static constexpr uint16_t C_YELLOW = TFT_YELLOW;
static constexpr uint16_t C_RED    = TFT_RED;
static constexpr uint16_t C_GRAY   = 0x8410;
static constexpr uint16_t C_LINE   = 0x39E7;

// Battery ADC conversion, aligned with example/basic/bat.
static constexpr int ADC_BITS = 12;
static constexpr int ADC_MAX = (1 << ADC_BITS) - 1;
static constexpr float ADC_FULL_SCALE_V = 3.600f;
static constexpr float BAT_DIVIDER_RATIO = (1000.0f + 510.0f) / 510.0f;

// ========================= Runtime state =========================

volatile bool g_imuWakeFlag = false;
volatile bool g_usrWakeFlag = false;

bool g_screenAwake = true;
uint32_t g_lastActivityMs = 0;
uint32_t g_lastUiMs = 0;
uint32_t g_lastBatMs = 0;
uint32_t g_wakeCount = 0;
uint32_t g_intCount = 0;
uint32_t g_lastWakeMs = 0;
uint32_t g_sleepEnterMs = 0;
uint32_t g_lastSleepStatusMs = 0;
uint32_t g_sleepLoopCount = 0;

float g_ax = 0.0f;
float g_ay = 0.0f;
float g_az = 0.0f;
float g_gx = 0.0f;
float g_gy = 0.0f;
float g_gz = 0.0f;
uint8_t g_lastWakeSrc = 0;

struct BatteryState {
  uint16_t raw = 0;
  float vadc = 0.0f;
  float vbat = 0.0f;
  int percent = 0;
  bool charging = false;
};

BatteryState g_bat;

// ========================= Helpers =========================

static bool imuWriteReg(uint8_t reg, uint8_t val) {
  Wire.beginTransmission(LSM6DS3_ADDR);
  Wire.write(reg);
  Wire.write(val);
  return Wire.endTransmission() == 0;
}

static bool imuReadReg(uint8_t reg, uint8_t &val) {
  Wire.beginTransmission(LSM6DS3_ADDR);
  Wire.write(reg);
  if (Wire.endTransmission(false) != 0) return false;

  if (Wire.requestFrom((int)LSM6DS3_ADDR, 1) != 1) return false;
  val = Wire.read();
  return true;
}

void imuWakeIsr() {
  g_imuWakeFlag = true;
  g_intCount++;
}

void usrWakeIsr() {
  g_usrWakeFlag = true;
}

static void prepareLcdPins() {
  pinMode(LCD_CS_PIN, OUTPUT);
  pinMode(LCD_DC_PIN, OUTPUT);
  pinMode(LCD_SCK_PIN, OUTPUT);
  pinMode(LCD_MOSI_PIN, OUTPUT);

  digitalWrite(LCD_CS_PIN, HIGH);
  digitalWrite(LCD_DC_PIN, HIGH);
  digitalWrite(LCD_SCK_PIN, LOW);
  digitalWrite(LCD_MOSI_PIN, LOW);
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

static void applyXIAO147PanelFix() {
  tft.writecommand(0x36);
  tft.writedata(0x48);
  delay(10);
}

static void setBacklight(uint8_t pwm) {
  pinMode(LCD_BL_PIN, OUTPUT);
  analogWrite(LCD_BL_PIN, pwm);
}

static void enableBatteryDivider() {
  NRF_P0->OUTCLR = (1UL << READ_BAT_P0_PIN);
  NRF_P0->DIRSET = (1UL << READ_BAT_P0_PIN);
}

static void disableBatteryDivider() {
  NRF_P0->DIRCLR = (1UL << READ_BAT_P0_PIN);
}

static int lipoPercent(float voltage) {
  struct BatPoint {
    float v;
    int p;
  };

  static const BatPoint table[] = {
    {4.20f, 100}, {4.10f, 90}, {4.00f, 80}, {3.90f, 70}, {3.80f, 60},
    {3.75f, 50},  {3.70f, 40}, {3.65f, 30}, {3.60f, 20}, {3.45f, 10},
    {3.30f, 0}
  };

  if (voltage >= table[0].v) return 100;
  if (voltage <= table[10].v) return 0;

  for (uint8_t i = 0; i < 10; i++) {
    if (voltage <= table[i].v && voltage >= table[i + 1].v) {
      float span = table[i].v - table[i + 1].v;
      float t = (voltage - table[i + 1].v) / span;
      return table[i + 1].p + (int)(t * (table[i].p - table[i + 1].p) + 0.5f);
    }
  }

  return 0;
}

static uint16_t readBatteryRaw() {
  uint32_t sum = 0;

  for (uint8_t i = 0; i < 6; i++) {
    (void)analogRead(PIN_VBAT);
    delay(2);
  }

  for (uint8_t i = 0; i < 16; i++) {
    sum += analogRead(PIN_VBAT);
    delay(2);
  }

  return (uint16_t)(sum / 16);
}

static void updateBattery() {
  enableBatteryDivider();
  delay(30);

  g_bat.raw = readBatteryRaw();
  disableBatteryDivider();

  g_bat.vadc = ((float)g_bat.raw * ADC_FULL_SCALE_V) / (float)ADC_MAX;
  g_bat.vbat = g_bat.vadc * BAT_DIVIDER_RATIO;
  g_bat.percent = lipoPercent(g_bat.vbat);
  g_bat.charging = (NRF_P0->IN & (1UL << CHG_P0_PIN)) == 0;
}

static uint16_t batteryColor() {
  if (g_bat.percent <= 15) return C_RED;
  if (g_bat.percent <= 35) return C_YELLOW;
  return C_GREEN;
}

static void drawChargeIcon(bool charging) {
  tft.fillRect(144, 126, 16, 18, C_BLACK);
  if (!charging) return;

  tft.fillTriangle(151, 126, 145, 136, 151, 136, C_YELLOW);
  tft.fillTriangle(151, 134, 157, 134, 149, 144, C_YELLOW);
}

// ========================= nRF System ON sleep =========================
//
// WFE = Wait For Event. In System ON sleep, RAM/state are preserved.
// Any enabled GPIO interrupt, including D14 from IMU, wakes the CPU and loop continues.
//
// The SEV/WFE/WFE pattern clears any stale event first, then actually sleeps.
// This avoids immediately falling through because of a previous event flag.
static void systemOnSleepOnce() {
#if defined(NRF52840_XXAA) || defined(NRF52_SERIES) || defined(ARDUINO_ARCH_NRF52)
  __SEV();
  __WFE();
  __WFE();
#else
  delay(10);
#endif
}

static void enterSystemOnSleepLoop() {
  // Keep Serial alive for debug, but note USB itself will dominate current if connected.
  g_sleepLoopCount++;

  // Avoid spamming serial while asleep.
  uint32_t now = millis();
  if (now - g_lastSleepStatusMs >= SLEEP_STATUS_MS) {
    g_lastSleepStatusMs = now;
    Serial.print("[SYS_ON_SLEEP] waiting, sleepLoops=");
    Serial.print((unsigned long)g_sleepLoopCount);
    Serial.print(" D14=");
    Serial.print(digitalRead(IMU_INT_PIN));
    Serial.print(" awake=");
    Serial.println(g_screenAwake ? "Y" : "N");
  }

  // Enter nRF System ON sleep until an interrupt/event arrives.
  systemOnSleepOnce();
}

static void printFixed(int x, int y, uint16_t color, const String &text, int width) {
  String out = text;
  while ((int)out.length() < width) out += ' ';
  if ((int)out.length() > width) out = out.substring(0, width);

  tft.setTextSize(1);
  tft.setTextColor(color, C_BLACK);
  tft.setCursor(x, y);
  tft.print(out);
}

// ========================= LCD UI =========================

static bool initLcd() {
  prepareLcdPins();
  setBacklight(BACKLIGHT_AWAKE_PWM);
  hardResetPanel();

  tft.init();
  tft.setRotation(0);
  applyXIAO147PanelFix();
  tft.fillScreen(C_BLACK);
  return true;
}

static void drawAwakeLayout() {
  tft.fillScreen(C_BLACK);

  tft.setTextSize(2);
  tft.setTextColor(C_GREEN, C_BLACK);
  tft.setCursor(8, 10);
  tft.print("Hello,XIAO!");

  tft.setTextSize(1);
  tft.setTextColor(C_CYAN, C_BLACK);
  tft.setCursor(10, 36);
  tft.print("IMU D14 Wake Demo");

  tft.drawFastHLine(8, 52, 156, C_LINE);

  tft.drawRoundRect(8, 66, 156, 82, 6, C_CYAN);
  tft.setTextColor(C_CYAN, C_BLACK);
  tft.setCursor(18, 78);
  tft.print("POWER STATE");
  tft.setTextColor(C_WHITE, C_BLACK);
  tft.setCursor(18, 98);
  tft.print("Screen");
  tft.setCursor(18, 116);
  tft.print("WakeCnt");
  tft.setCursor(18, 134);
  tft.print("BAT");

  tft.drawRoundRect(8, 156, 156, 90, 6, C_YELLOW);
  tft.setTextColor(C_YELLOW, C_BLACK);
  tft.setCursor(18, 168);
  tft.print("MOTION");
  tft.setTextColor(C_WHITE, C_BLACK);
  tft.setCursor(18, 190);
  tft.print("Acc");
  tft.setCursor(18, 210);
  tft.print("Gyr");
  tft.setCursor(18, 230);
  tft.print("INT");

  tft.drawRoundRect(8, 258, 156, 42, 6, C_GREEN);
  tft.setTextColor(C_GREEN, C_BLACK);
  tft.setCursor(18, 270);
  tft.print("TEST");
  tft.setTextColor(C_WHITE, C_BLACK);
  tft.setCursor(18, 288);
  tft.print("USR1 sleep  USR2 wake");
}

static void updateAwakeUi() {
  char buf[48];

  printFixed(78, 98, C_GREEN, "AWAKE", 12);

  snprintf(buf, sizeof(buf), "%lu", (unsigned long)g_wakeCount);
  printFixed(78, 116, C_YELLOW, buf, 12);

  snprintf(buf, sizeof(buf), "%.2fV %d%%", g_bat.vbat, g_bat.percent);
  printFixed(48, 134, batteryColor(), buf, 12);
  drawChargeIcon(g_bat.charging);

  snprintf(buf, sizeof(buf), "%.1f %.1f %.1f", g_ax, g_ay, g_az);
  printFixed(48, 190, C_WHITE, buf, 16);

  snprintf(buf, sizeof(buf), "%.1f %.1f %.1f", g_gx, g_gy, g_gz);
  printFixed(48, 210, C_WHITE, buf, 16);

  snprintf(buf, sizeof(buf), "D14:%lu src:0x%02X", (unsigned long)g_intCount, g_lastWakeSrc);
  printFixed(48, 230, C_CYAN, buf, 16);

  uint32_t remain = 0;
  uint32_t now = millis();
  if (now - g_lastActivityMs < AUTO_SLEEP_MS) {
    remain = (AUTO_SLEEP_MS - (now - g_lastActivityMs)) / 1000;
  }
  snprintf(buf, sizeof(buf), "Auto sleep in %lus", (unsigned long)remain);
  printFixed(18, 306, C_GRAY, buf, 20);
}

static void screenWake(const char *reason) {
  if (g_screenAwake && (millis() - g_lastWakeMs < WAKE_LOCK_MS)) return;

  g_screenAwake = true;
  g_lastActivityMs = millis();
  g_lastWakeMs = millis();
  g_wakeCount++;

  setBacklight(BACKLIGHT_AWAKE_PWM);
  drawAwakeLayout();
  updateAwakeUi();

  Serial.print("[WAKE] reason=");
  Serial.print(reason);
  Serial.print(" wakeCount=");
  Serial.print(g_wakeCount);
  Serial.print(" sleptMs=");
  Serial.print((unsigned long)(millis() - g_sleepEnterMs));
  Serial.print(" sleepLoops=");
  Serial.println((unsigned long)g_sleepLoopCount);
}

static void screenSleep() {
  if (!g_screenAwake) return;

  Serial.println("[SLEEP] screen backlight off, waiting for IMU D14 wake");

  tft.fillScreen(C_BLACK);
  tft.setTextSize(2);
  tft.setTextColor(C_CYAN, C_BLACK);
  tft.setCursor(18, 120);
  tft.print("Sleeping...");
  tft.setTextSize(1);
  tft.setCursor(18, 150);
  tft.print("Pick up device to wake");
  delay(500);

  setBacklight(BACKLIGHT_SLEEP_PWM);
  g_screenAwake = false;
  g_sleepEnterMs = millis();
  g_lastSleepStatusMs = 0;
  g_sleepLoopCount = 0;

  // Clear stale GPIO/source states before entering WFE loop.
  uint8_t dummy = 0;
  imuReadReg(REG_WAKE_UP_SRC, dummy);
  g_imuWakeFlag = false;
  g_usrWakeFlag = false;
}

// ========================= IMU wake config =========================

static bool initImuWakeInterrupt() {
  Wire.begin();

  int imuOk = myIMU.begin();
  Serial.print("[IMU] Seeed LSM6DS3 begin=");
  Serial.println(imuOk);

  bool ok = true;

  // BDU=1 and register auto-increment enabled.
  ok &= imuWriteReg(REG_CTRL3_C, 0x44);

  // Accelerometer: 104Hz, +/-2g.
  // Wake-up event uses accelerometer.
  ok &= imuWriteReg(REG_CTRL1_XL, 0x40);

  // Enable embedded interrupts.
  ok &= imuWriteReg(REG_TAP_CFG, 0x80);

  // Wake-up threshold.
  // 0x05 is a medium-low threshold for "pick up / move device".
  ok &= imuWriteReg(REG_WAKE_UP_THS, IMU_WAKE_THRESHOLD);

  // No extra wake duration, responsive wake.
  ok &= imuWriteReg(REG_WAKE_UP_DUR, 0x00);

  // Route wake-up interrupt to INT1.
  // MD1_CFG bit5 = INT1_WU.
  ok &= imuWriteReg(REG_MD1_CFG, 0x20);

  uint8_t dummy = 0;
  imuReadReg(REG_WAKE_UP_SRC, dummy); // clear stale event.

  pinMode(IMU_INT_PIN, INPUT_PULLDOWN);
  attachInterrupt(digitalPinToInterrupt(IMU_INT_PIN), imuWakeIsr, RISING);

  Serial.print("[IMU] D14 wake interrupt ");
  Serial.println(ok ? "OK" : "FAILED");
  Serial.print("[IMU] wake threshold=0x");
  Serial.println(IMU_WAKE_THRESHOLD, HEX);

  return ok;
}

static void updateImuData() {
  g_ax = myIMU.readFloatAccelX();
  g_ay = myIMU.readFloatAccelY();
  g_az = myIMU.readFloatAccelZ();
  g_gx = myIMU.readFloatGyroX();
  g_gy = myIMU.readFloatGyroY();
  g_gz = myIMU.readFloatGyroZ();
}

static void handleWakeEvents() {
  bool imuPending = false;
  bool usrPending = false;

  noInterrupts();
  if (g_imuWakeFlag) {
    g_imuWakeFlag = false;
    imuPending = true;
  }
  if (g_usrWakeFlag) {
    g_usrWakeFlag = false;
    usrPending = true;
  }
  interrupts();

  if (usrPending) {
    screenWake("USR2_INT");
    return;
  }

  // Polling fallback: if the edge is missed but INT is held high briefly, still wake.
  if (digitalRead(IMU_INT_PIN) == HIGH) {
    imuPending = true;
  }

  if (!imuPending) return;

  uint8_t src = 0;
  if (imuReadReg(REG_WAKE_UP_SRC, src)) {
    g_lastWakeSrc = src;
  }

  // WAKE_UP_SRC bit3 WU_IA indicates wake-up event latched.
  // But some boards may only expose axis bits, so wake on any non-zero source too.
  if ((src & 0x08) || (src & 0x07) || !g_screenAwake) {
    screenWake("IMU_D14");
  }
}

// ========================= Setup / loop =========================

void setup() {
  Serial.begin(115200);
  delay(800);

  pinMode(USR1_PIN, INPUT_PULLUP);
  pinMode(USR2_PIN, INPUT_PULLUP);
  attachInterrupt(digitalPinToInterrupt(USR2_PIN), usrWakeIsr, FALLING);

  analogReadResolution(ADC_BITS);
  nrf_gpio_cfg_input(CHG_P0_PIN, NRF_GPIO_PIN_PULLUP);
  disableBatteryDivider();

  Serial.println();
  Serial.println("=== XIAO nRF52840 Plus 1.47 IMU D14 Wake Demo v0.2 ===");
  Serial.println("Screen sleeps by backlight off, then nRF enters System ON sleep.");
  Serial.println("D14 IMU wake-up interrupt wakes CPU and turns screen on.");

  initImuWakeInterrupt();

  if (!initLcd()) {
    Serial.println("[FAIL] LCD init failed");
    return;
  }

  updateBattery();
  g_lastBatMs = millis();
  g_lastActivityMs = millis();
  drawAwakeLayout();
  updateAwakeUi();
}

void loop() {
  handleWakeEvents();

  if (!g_screenAwake) {
    // In sleep state, do not refresh UI or poll sensors.
    // CPU sleeps here and wakes on IMU D14 or USR2 interrupt.
    enterSystemOnSleepLoop();
    handleWakeEvents();
    delay(1);
    return;
  }

  // Manual test while awake:
  // USR1: force sleep.
  // USR2: force wake.
  if (digitalRead(USR1_PIN) == LOW) {
    delay(30);
    if (digitalRead(USR1_PIN) == LOW) {
      screenSleep();
      while (digitalRead(USR1_PIN) == LOW) delay(5);
    }
  }

  if (digitalRead(USR2_PIN) == LOW) {
    delay(30);
    if (digitalRead(USR2_PIN) == LOW) {
      screenWake("USR2");
      while (digitalRead(USR2_PIN) == LOW) delay(5);
    }
  }

  uint32_t now = millis();

  if (g_screenAwake) {
    if (now - g_lastBatMs >= BAT_REFRESH_MS) {
      g_lastBatMs = now;
      updateBattery();
    }

    if (now - g_lastUiMs >= UI_REFRESH_MS) {
      g_lastUiMs = now;
      updateImuData();
      updateAwakeUi();
    }

    if (now - g_lastActivityMs >= AUTO_SLEEP_MS) {
      screenSleep();
    }
  }

  delay(5);
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
6. Upload the sketch.
7. Open Serial Monitor if you want to view debug logs.
8. Wait for the display to enter sleep, then pick up or move the device to trigger wake-up.

## Expected Result

After uploading the sketch, the display shows the wake demo dashboard. If the device is idle for about 8 seconds, the screen shows a sleeping message and the backlight turns off. When you pick up or move the device, the IMU interrupt wakes the MCU and the display turns on again.

USR1 can be used to force sleep, and USR2 can be used to force wake during testing.

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/xiao_display_board/wake_up1.jpg" style={{width:600, height:'auto'}}/>
</div>

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/xiao_display_board/wake_up2.jpg" style={{width:600, height:'auto'}}/>
</div>

## Code Function Explanation

This section explains the library APIs used by the demo and the settings users can adjust.

### TFT Display APIs

- **`tft.init()`**: Initializes the TFT display driver and its SPI communication.

- **`tft.setRotation(0)`**: Sets the screen orientation. The demo uses portrait orientation for the 172 × 320 display.

- **`tft.writecommand()` and `tft.writedata()`**: Send a command and data directly to the LCD controller. The demo writes the panel-specific memory access value required for the correct orientation.

- **`tft.fillScreen(color)`**: Fills the complete display with one color. It is used to clear the screen and prepare the awake or sleeping interface.

- **`tft.setTextSize(size)`**: Sets the scale of text drawn by the TFT library.

- **`tft.setTextColor(foreground, background)`**: Sets the text and background colors.

- **`tft.setCursor(x, y)`**: Sets the position where the next text operation begins.

- **`tft.print(value)`**: Draws text or values at the current cursor position.

- **`tft.drawFastHLine(x, y, width, color)`**: Draws a horizontal line. The demo uses it as a UI separator.

- **`tft.drawRoundRect(x, y, width, height, radius, color)`**: Draws a rounded rectangle used to separate dashboard information areas.

- **`tft.fillRect()` and `tft.fillTriangle()`**: Draw filled shapes. The demo uses these APIs to clear regions and draw the charging indicator.

### LSM6DS3 and I2C APIs

- **`Wire.begin()`**: Initializes the I2C bus used by the onboard LSM6DS3 IMU.

- **`myIMU.begin()`**: Initializes the LSM6DS3 through the Seeed_Arduino_LSM6DS3 library.

- **`myIMU.readFloatAccelX/Y/Z()`**: Reads acceleration values for the X, Y, and Z axes.

- **`myIMU.readFloatGyroX/Y/Z()`**: Reads gyroscope values for the X, Y, and Z axes.

- **`Wire.beginTransmission(address)`**: Starts an I2C write transaction with the specified device address.

- **`Wire.write(value)`**: Adds a register address or data byte to the current I2C transaction.

- **`Wire.endTransmission()`**: Sends the queued I2C data and completes the write transaction.

- **`Wire.requestFrom(address, length)`**: Requests one or more bytes from the IMU.

- **`Wire.read()`**: Reads a byte returned by the IMU. The demo uses direct register access to configure and inspect the LSM6DS3 wake-up interrupt.

### Arduino and nRF52840 APIs

- **`attachInterrupt(digitalPinToInterrupt(pin), handler, mode)`**: Registers an interrupt handler for a GPIO pin. D14 uses a rising-edge interrupt from the IMU, while USR2 uses a falling-edge button interrupt.

- **`pinMode(pin, mode)`**: Configures a pin as an input or output. The demo uses pull-up and pull-down modes for buttons and interrupt signals.

- **`digitalRead(pin)`**: Reads a digital input state. It is used for button checks and as a polling fallback for the IMU interrupt.

- **`digitalWrite(pin, value)`**: Sets an output pin high or low. It is used during display reset and pin preparation.

- **`analogWrite(pin, value)`**: Outputs a PWM value to the display backlight pin. A value of `0` turns the backlight off.

- **`analogReadResolution(bits)`**: Sets the ADC resolution. The demo uses 12-bit battery measurements.

- **`analogRead(pin)`**: Reads the battery ADC input. Multiple readings are averaged to reduce noise.

- **`noInterrupts()` and `interrupts()`**: Temporarily disable and re-enable interrupts while copying shared interrupt flags.

- **`__SEV()`, `__WFE()`, and `__WFE()`**: Implement the nRF52840 System ON sleep sequence. RAM and program state are retained, and an enabled interrupt can wake the CPU.

- **`nrf_gpio_cfg_input(pin, pull)`**: Configures a native nRF GPIO input. The demo uses it for the active-low charging status pin.

### User-Adjustable Settings

- **Automatic sleep timeout**: `AUTO_SLEEP_MS` controls how long the screen remains awake without activity.

```cpp
static constexpr uint32_t AUTO_SLEEP_MS = 8000;
```

- **UI refresh interval**: `UI_REFRESH_MS` controls how frequently IMU values and dashboard information are redrawn.

```cpp
static constexpr uint32_t UI_REFRESH_MS = 250;
```

- **Battery refresh interval**: `BAT_REFRESH_MS` controls how frequently battery voltage and charging status are updated.

```cpp
static constexpr uint32_t BAT_REFRESH_MS = 1000;
```

- **Wake lock time**: `WAKE_LOCK_MS` prevents repeated wake events immediately after the screen turns on.

```cpp
static constexpr uint32_t WAKE_LOCK_MS = 1200;
```

- **IMU wake-up sensitivity**: `IMU_WAKE_THRESHOLD` controls the motion threshold. Lower values wake more easily but may create false triggers. The suggested range is `0x03` to `0x0A`.

```cpp
static constexpr uint8_t IMU_WAKE_THRESHOLD = 0x05;
```

- **Backlight brightness**: `BACKLIGHT_AWAKE_PWM` controls awake brightness, while `BACKLIGHT_SLEEP_PWM` controls the sleep-state brightness.

```cpp
static constexpr uint8_t BACKLIGHT_AWAKE_PWM = 120;
static constexpr uint8_t BACKLIGHT_SLEEP_PWM = 0;
```

## Resources

- [Getting Started with Seeed Studio XIAO 1.47 Inch Touch Display](https://wiki.seeedstudio.com/getting_started_with_XIAO_1.47_inch_touch_display/)
- [Seeed_Arduino_LSM6DS3 GitHub Repository](https://github.com/Seeed-Studio/Seeed_Arduino_LSM6DS3)
- [Seeed_GFX GitHub Repository](https://github.com/Seeed-Studio/Seeed_GFX)
- TODO: 原理图等


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
