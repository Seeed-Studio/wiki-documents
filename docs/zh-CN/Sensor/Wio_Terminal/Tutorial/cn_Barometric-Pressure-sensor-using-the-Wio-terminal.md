---
description: 使用 Wio terminal 的压力传感器
title: 使用 Wio terminal 的压力传感器
keywords:
- Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Barometric-Pressure-sensor-using-the-Wio-terminal
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# 使用 Wio terminal 的高精度气压传感器

<div align="center"><img src="https://files.seeedstudio.com/wiki/Barometric-Pressure-sensor-using-the-Wio-terminal/pre_temp_222gGIF.gif" /></div>

## 概述

该演示展示了 Grove 高精度压力传感器 DPS310 与 Wio terminal 完全兼容，其测量具有高精度。

## 特性

- 可通过表盘颜色显示正常大气压值范围
- 带时间显示的温度度数
- 高精度气压和温度检测

## 硬件

- [**Wio terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [**Grove 高精度压力传感器 DPS310**](https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html)

### 硬件连接

<div align="center"><img src="https://files.seeedstudio.com/wiki/Barometric-Pressure-sensor-using-the-Wio-terminal/111111.png" /></div>

## 软件

如果您没有 Arduino IDE，请查看 [**Wio Terminal 入门指南**](https://wiki.seeedstudio.com/cn/Wio-Terminal-Getting-Started/)

- 安装 LCD 屏幕库 `Seeed_Arduino_LCD`，请访问 [Wio Terminal LCD](https://wiki.seeedstudio.com/cn/Wio-Terminal-LCD-Overview/)。

- 安装 DPS310 压力传感器库 `#include <Dps310.h>`，请访问 [DPS310-Pressure-Sensor](https://wiki.seeedstudio.com/cn/Grove-High-Precision-Barometric-Pressure-Sensor-DPS310/)。

## 代码

```cpp
#include <Dps310.h>
#include <SPI.h>
#include <TFT_eSPI.h>       // 硬件特定库
TFT_eSPI tft = TFT_eSPI(); 

#define TFT_GREY 0x5AEB
#define LOOP_PERIOD 35 // 显示每35毫秒更新一次

Dps310 Dps310PressureSensor = Dps310();

#define M_SIZE 1.4

TFT_eSprite spr = TFT_eSprite(&tft);  // 精灵

float ltx = 0;    // 保存的指针底部x坐标
uint16_t osx = M_SIZE * 120, osy = M_SIZE * 120; // 保存的x和y坐标
uint32_t updateTime = 0;       // 下次更新时间

int old_analog =  -999; // 上次显示的值

int value[6] = {0, 0, 0, 0, 0, 0};
int d = 0;

void setup(void) {
    tft.begin();
    tft.init();
    tft.setRotation(3);
    Serial.begin(57600); // 用于调试
    tft.fillScreen(TFT_WHITE);
    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);
    spr.setRotation(3);

    Dps310PressureSensor.begin(Wire);
    analogMeter(); // 绘制模拟仪表

    updateTime = millis(); // 下次更新时间
}


void loop() {
  float temperature;
  float pressure;
  uint8_t oversampling = 7;
  int16_t ret;

  ret = Dps310PressureSensor.measureTempOnce(temperature, oversampling);
  ret = Dps310PressureSensor.measurePressureOnce(pressure, oversampling);
  Serial.println(pressure);

    if (updateTime <= millis()) {
        updateTime = millis() + 35; // 每35毫秒更新一次仪表

        // 创建正弦波用于测试
        d += 4;
        if (d >= 360) {
            d = 0;
        }
        ////////////////////////////////////////////////////////
        // 这是一个示例，你只需要删除'- 100050'
        ////////////////////////////////////////////////////////
        plotNeedle(pressure-100050, 0); // 重新绘制指针需要2到12毫秒，延迟为零
    }

delay(100);
    spr.fillSprite(TFT_WHITE);
    spr.createSprite(250, 40);
    spr.fillSprite(TFT_WHITE);
    spr.setTextColor(TFT_BLACK, TFT_WHITE);
    spr.setFreeFont(&FreeSansBoldOblique12pt7b);
    spr.drawNumber(temperature, 0, 0);
    spr.drawString(" °C", 30, 0);
    spr.drawNumber(pressure, 120,0);
    spr.drawString("Pa", 210,0); 
    spr.pushSprite(30, 190); 
    spr.deleteSprite();

}


// #########################################################################
//  在屏幕上绘制模拟仪表
// #########################################################################
void analogMeter() {

    // 仪表轮廓
    tft.fillRect(0, 0, M_SIZE * 239, M_SIZE * 126, TFT_GREY);
    tft.fillRect(5, 3, M_SIZE * 230, M_SIZE * 119, TFT_WHITE);

    tft.setTextColor(TFT_BLACK);  // 文本颜色

    // 从-50到+50度每5度绘制刻度（100度满量程摆动）
    for (int i = -50; i < 51; i += 5) {
        // 长刻度线长度
        int tl = 15;

        // 要绘制的刻度坐标
        float sx = cos((i - 90) * 0.0174532925);
        float sy = sin((i - 90) * 0.0174532925);
        uint16_t x0 = sx * (M_SIZE * 100 + tl) + M_SIZE * 120;
        uint16_t y0 = sy * (M_SIZE * 100 + tl) + M_SIZE * 140;
        uint16_t x1 = sx * M_SIZE * 100 + M_SIZE * 120;
        uint16_t y1 = sy * M_SIZE * 100 + M_SIZE * 140;

        // 下一个刻度的坐标用于区域填充
        float sx2 = cos((i + 5 - 90) * 0.0174532925);
        float sy2 = sin((i + 5 - 90) * 0.0174532925);
        int x2 = sx2 * (M_SIZE * 100 + tl) + M_SIZE * 120;
        int y2 = sy2 * (M_SIZE * 100 + tl) + M_SIZE * 140;
        int x3 = sx2 * M_SIZE * 100 + M_SIZE * 120;
        int y3 = sy2 * M_SIZE * 100 + M_SIZE * 140;

        // 黄色区域限制
        if (i >= -50 && i < -25) {
          tft.fillTriangle(x0, y0, x1, y1, x2, y2, TFT_GREEN);
          tft.fillTriangle(x1, y1, x2, y2, x3, y3, TFT_GREEN);
        }
        
        if (i >= -25 && i < 0) {
          tft.fillTriangle(x0, y0, x1, y1, x2, y2, TFT_YELLOW);
          tft.fillTriangle(x1, y1, x2, y2, x3, y3, TFT_YELLOW);
        }

        // 绿色区域限制
        if (i >= 0 && i < 25) {
            tft.fillTriangle(x0, y0, x1, y1, x2, y2, TFT_RED);
            tft.fillTriangle(x1, y1, x2, y2, x3, y3, TFT_RED);
        }

        // 橙色区域限制
        if (i >= 25 && i < 50) {
            tft.fillTriangle(x0, y0, x1, y1, x2, y2, TFT_RED);
            tft.fillTriangle(x1, y1, x2, y2, x3, y3, TFT_RED);
        }

        // 短刻度线长度
        if (i % 25 != 0) {
            tl = 8;
        }

        // 重新计算坐标以防刻度长度改变
        x0 = sx * (M_SIZE * 100 + tl) + M_SIZE * 120;
        y0 = sy * (M_SIZE * 100 + tl) + M_SIZE * 140;
        x1 = sx * M_SIZE * 100 + M_SIZE * 120;
        y1 = sy * M_SIZE * 100 + M_SIZE * 140;

        // 绘制刻度
        tft.drawLine(x0, y0, x1, y1, TFT_BLACK);

        // 检查是否应该绘制标签，并调整位置
        if (i % 25 == 0) {
            // 计算标签位置
            x0 = sx * (M_SIZE * 100 + tl + 10) + M_SIZE * 120;
            y0 = sy * (M_SIZE * 100 + tl + 10) + M_SIZE * 140;

            ////////////////////////////////////////////////////////////
            //  在这里，你可以更改刻度盘
            ////////////////////////////////////////////////////////////
            switch (i / 25) {
                case -2: tft.drawCentreString("100000", x0, y0 - 12, 2); break;
                case -1: tft.drawCentreString("100025", x0, y0 - 9, 2); break;
                case 0: tft.drawCentreString("100050", x0, y0 - 7, 2); break;
                case 1: tft.drawCentreString("100075", x0, y0 - 9, 2); break;
                case 2: tft.drawCentreString("100100", x0, y0 - 12, 2); break;
            }
        }

        // 现在绘制刻度弧
        sx = cos((i + 5 - 90) * 0.0174532925);
        sy = sin((i + 5 - 90) * 0.0174532925);
        x0 = sx * M_SIZE * 100 + M_SIZE * 120;
        y0 = sy * M_SIZE * 100 + M_SIZE * 140;
        // 绘制刻度弧，不绘制最后部分
        if (i < 50) {
            tft.drawLine(x0, y0, x1, y1, TFT_BLACK);
        }
    }

    //tft.drawString("%RH", M_SIZE * (5 + 230 - 40), M_SIZE * (119 - 20), 2); // 右下角单位
    tft.drawCentreString("K/Pa", M_SIZE * 120, M_SIZE * 80, 4); // 注释掉以避免字体4
    tft.drawRect(5, 3, M_SIZE * 230, M_SIZE * 119, TFT_BLACK); // 绘制边框线

    plotNeedle(0, 0); // 将仪表指针置于0
}

// #########################################################################
// 更新指针位置
// 此函数在指针移动时阻塞，时间取决于ms_delay
// 10ms可最小化指针闪烁，如果在指针扫描区域内绘制文本
// 如果文本不在扫描区域内，较小的值也可以，零表示瞬间移动但
// 看起来不真实...（注意：满量程偏转为100个增量）
// #########################################################################
void plotNeedle(int value, byte ms_delay) {

    if (value < -10) {
        value = -10;    // 限制值以模拟指针端点停止
    }
    if (value > 110) {
        value = 110;
    }

    // 移动指针直到达到新值
    while (!(value == old_analog)) {
        if (old_analog < value) {
            old_analog++;
        } else {
            old_analog--;
        }

        if (ms_delay == 0) {
            old_analog = value;    // 如果延迟为0则立即更新
        }

        float sdeg = map(old_analog, -10, 110, -150, -30); // 将值映射到角度
        // 计算指针尖端坐标
        float sx = cos(sdeg * 0.0174532925);
        float sy = sin(sdeg * 0.0174532925);

        // 计算指针起点的x增量（不从枢轴点开始）
        float tx = tan((sdeg + 90) * 0.0174532925);

        // 擦除旧指针图像
        tft.drawLine(M_SIZE * (120 + 20 * ltx - 1), M_SIZE * (140 - 20), osx - 1, osy, TFT_WHITE);
        tft.drawLine(M_SIZE * (120 + 20 * ltx), M_SIZE * (140 - 20), osx, osy, TFT_WHITE);
        tft.drawLine(M_SIZE * (120 + 20 * ltx + 1), M_SIZE * (140 - 20), osx + 1, osy, TFT_WHITE);

        // 重新绘制指针下方的文本
        tft.setTextColor(TFT_BLACK);
        tft.drawCentreString("K/Pa", M_SIZE * 120, M_SIZE * 80, 4); // // 注释掉以避免字体4
        
        // 存储新指针端点坐标用于下次擦除
        ltx = tx;
        osx = M_SIZE * (sx * 98 + 120);
        osy = M_SIZE * (sy * 98 + 140);

        // 在新位置绘制指针，洋红色使指针更粗一些
        // 绘制3条线来加粗指针
        tft.drawLine(M_SIZE * (120 + 20 * ltx - 1), M_SIZE * (140 - 20), osx - 1, osy, TFT_RED);
        tft.drawLine(M_SIZE * (120 + 20 * ltx), M_SIZE * (140 - 20), osx, osy, TFT_MAGENTA);
        tft.drawLine(M_SIZE * (120 + 20 * ltx + 1), M_SIZE * (140 - 20), osx + 1, osy, TFT_RED);

        // 当指针接近新位置时稍微减慢速度
        if (abs(old_analog - value) < 10) {
            ms_delay += ms_delay / 5;
        }

        // 等待下次更新
        delay(ms_delay);
    }
}

```