---
description: 鼠标
title: 鼠标
keywords:
- Wio_terminal USB_Client
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-USBCLIENT-Mouse
last_update:
  date: 1/17/2023
  author: jianjing Huang
---


# 将 Wio Terminal 用作鼠标

本教程介绍如何将 Wio Terminal 用作简单的鼠标。这可以用来模拟鼠标的上、下、左、右移动。此外，还可以实现左/右鼠标按钮点击、上/下滚动等功能。

## 安装库

此示例还需要一个额外的 Arduino 鼠标库：

1. 访问 [Arduino Mouse Library](https://github.com/arduino-libraries/Mouse) 仓库，将整个仓库下载到本地驱动器。

2. 现在，可以将库安装到 Arduino IDE 中。打开 Arduino IDE，点击 `sketch` -> `Include Library` -> `Add .ZIP Library`，选择刚刚下载的 `Mouse-master` 文件。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## 完整代码

请查看以下代码或从 github [这里](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/blob/master/examples/WioTerminal_ButtonMouseControl/WioTerminal_ButtonMouseControl.ino) 获取。此外，如需更多功能，请参考 Arduino 官方的 [鼠标函数](https://www.arduino.cc/reference/en/language/functions/usb/mouse/)。

```cpp
/*    
 * Wio Terminal 通过按钮模拟鼠标的演示程序。
 * 包括鼠标上移、鼠标下移、鼠标左移、鼠标右移、
 * 点击鼠标左键、点击鼠标右键、
 * 向上滚动、向下滚动等功能。
 *   
 * Copyright (c) 2020 seeed technology co., ltd.  
 * Author      : weihong.cai (weihong.cai@seeed.cc)  
 * Create Time : July 2020
 * Change Log  : 
 *
 * The MIT License (MIT)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software istm
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS INcommInterface
 * THE SOFTWARE.
 * 
 * 使用方法(在 Wio Terminal 上):
 *    按下 WIO_5S_UP    --------------------> 鼠标上移
 *    按下 WIO_5S_DOWN  --------------------> 鼠标下移
 *    按下 WIO_5S_LEFT  --------------------> 鼠标左移
 *    按下 WIO_5S_RIGHT --------------------> 鼠标右移
 *    按下 BUTTON_3 ------------------------> 点击鼠标左键
 *    按下 BUTTON_2 ------------------------> 点击鼠标右键    
 *    按下 WIO_5S_PRESS 和 WIO_5S_UP   ----> 向上滚动
 *    按下 WIO_5S_PRESS 和 WIO_5S_DOWN ----> 向下滚动
 * 
 * 一些提示:
 * 1. 如果您的 PC 无法识别 USB 设备导致 Wio Terminal 无法工作。
 *    您可以通过更新 ArduinoCore 来解决这个问题。
 *    请参考: https://forum.seeedstudio.com/t/seeeduino-xiao-cant-simulate-keys-pressed/252819/6?u=weihong.cai
 * 
 * 您可以从这里了解更多关于 Wio Terminal 的信息: https://wiki.seeedstudio.com/cn/Wio-Terminal-Getting-Started/
 * 如果您有任何问题，可以在论坛留言: https://forum.seeedstudio.com
 */

#include "Mouse.h"

/*----------------定义按钮引脚---------------------------*/ 
const int upButton        = WIO_5S_UP;
const int downButton      = WIO_5S_DOWN;
const int leftButton      = WIO_5S_LEFT;
const int rightButton     = WIO_5S_RIGHT;
const int mouseWheel      = WIO_5S_PRESS;
const int mouseBttonLeft  = BUTTON_3;
const int mouseBttonRight = BUTTON_2;

  // X 或 Y 移动的输出范围；影响移动速度          
int range = 2;

  // 鼠标的响应延迟，单位为毫秒
int responseDelay = 5;

  // 时间记录参数
unsigned long _currentMillis;
unsigned long _previousMillis;

void setup() {
  // 初始化按钮输入:
  pinMode(upButton,         INPUT);
  pinMode(downButton,       INPUT);
  pinMode(leftButton,       INPUT);
  pinMode(rightButton,      INPUT);
  pinMode(mouseWheel,       INPUT);
  pinMode(mouseBttonLeft,   INPUT);
  pinMode(mouseBttonRight,  INPUT);
  
  // 初始化鼠标控制:
  Mouse.begin();
}

void loop() {
  // 读取按钮状态:
  int upState                     = digitalRead(upButton);
  int downState                   = digitalRead(downButton);
  int rightState                  = digitalRead(rightButton);
  int leftState                   = digitalRead(leftButton);
  int clickState_mouseWheel       = digitalRead(mouseWheel);
  int clickState_mouseButtonLeft  = digitalRead(mouseBttonLeft);
  int clickState_mouseButtonRight = digitalRead(mouseBttonRight);

  // 根据按钮状态计算移动距离:
  int  xDistance = (leftState - rightState) * range;
  int  yDistance = (upState   - downState)  * range;

/*------------------鼠标移动--------------------------------------*/
  // 如果 X 或 Y 不为零，则移动:
  if ((xDistance != 0) || (yDistance != 0)) {
    Mouse.move(xDistance, yDistance, 0);
  }
  
/*-------------鼠标左键点击------------------------------*/
  // 如果鼠标左键被按下:
  if (clickState_mouseButtonLeft == LOW) {
    // 如果鼠标没有被按下，则按下它:
    if (!Mouse.isPressed(MOUSE_LEFT)) {
      Mouse.press(MOUSE_LEFT);
      //Mouse.click(MOUSE_LEFT);
    }
  }
  // 否则鼠标左键没有被按下:
  else {
    // 如果鼠标被按下，则释放它:
    if (Mouse.isPressed(MOUSE_LEFT)) {
      Mouse.release(MOUSE_LEFT);
    }
  }
  
/*-------------鼠标右键点击-----------------------------*/
    // 如果鼠标右键被按下:
  if (clickState_mouseButtonRight == LOW) {
    // 如果鼠标没有被按下，则按下它:
    if (!Mouse.isPressed(MOUSE_RIGHT)) {
      Mouse.press(MOUSE_RIGHT);
      //Mouse.click(MOUSE_RIGHT);
    }
  }
  // 否则鼠标右键没有被按下:
  else {
    // 如果鼠标被按下，则释放它:
    if (Mouse.isPressed(MOUSE_RIGHT)) {
      Mouse.release(MOUSE_RIGHT);
    }
  }

/*------------------向上滚动----------------------------------------*/
  if ((upState == LOW) && (clickState_mouseWheel == LOW)) {
    Mouse.move(0, 0, 1);
    My_delay(200);
  }

/*------------------向下滚动--------------------------------------*/
  if ((downState == LOW) && (clickState_mouseWheel == LOW)) {
    Mouse.move(0, 0, -1);
    My_delay(200);
  }
    
/*-----------------------------------------------------------------*/ 
  // 延迟以防止鼠标移动过快:
  My_delay(responseDelay);
}

// 使用 millis() 的延迟函数
void My_delay(int Time)
{
  while((_currentMillis - _previousMillis) <= Time)
  {
      _currentMillis = millis();
  }
  _previousMillis = _currentMillis; 
}
```