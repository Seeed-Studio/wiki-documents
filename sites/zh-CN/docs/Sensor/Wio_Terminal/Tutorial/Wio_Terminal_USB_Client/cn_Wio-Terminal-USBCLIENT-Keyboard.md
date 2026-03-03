---
description: 键盘
title: 键盘
keywords:
- Wio_terminal USB_Client
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-USBCLIENT-Keyboard
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# 将 Wio Terminal 用作键盘

本教程介绍如何将 Wio Terminal 用作简单键盘。它将 Wio Terminal 上的 3 个按钮分别分配为按键 `s`、`e`、`d`。这可以轻松集成到您的设计中，用于更具挑战性的任务。

## 安装库

此示例还需要一个额外的 Arduino 键盘库：

1. 访问 [Arduino Keyboard Library](https://github.com/arduino-libraries/Keyboard) 仓库，将整个仓库下载到您的本地驱动器。

2. 现在，可以将库安装到 Arduino IDE 中。打开 Arduino IDE，点击 `sketch` -> `Include Library` -> `Add .ZIP Library`，然后选择您刚刚下载的 `Keyboard-master` 文件。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## 完整代码

如需更多功能，请参考 Arduino 官方的[键盘函数](https://www.arduino.cc/reference/en/language/functions/usb/keyboard/)。

```cpp
#include "Keyboard.h" //键盘库 

void setup() { 
  //将按钮引脚设置为输入
  pinMode(WIO_KEY_A, INPUT);
  pinMode(WIO_KEY_B, INPUT);
  pinMode(WIO_KEY_C, INPUT);
  
  Keyboard.begin(); //开始键盘通信
}

void loop() {  
  if (digitalRead(WIO_KEY_A) == LOW) { //检测按钮按下
    Keyboard.write('s'); //按下单个按键（字符） 
  }
  if (digitalRead(WIO_KEY_B) == LOW) {   
    Keyboard.write('e'); 
  }  
  if (digitalRead(WIO_KEY_C) == LOW) {        
    Keyboard.write('d');  
  } 
  
  delay(200); //按键之间的延迟
  
}
```