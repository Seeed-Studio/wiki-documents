---
description: Keyboard
title: 键盘
keywords:
- Wio_terminal USB_Client
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-USBCLIENT-Keyboard
last_update:
  date: 3/07/2024
  author: jessie
---

# 将Wio Terminal用作键盘

本 wiki 介绍了如何将Wio Terminal用作简单的键盘。它将Wio Terminal上的3个按钮分别映射为键盘上的 `s`、`e`和`d`键。这可以方便地应用于设计中，以实现更具挑战性的任务。

## 安装库

此示例还需要一个额外的Arduino键盘库：

1. 访问 [Arduino 键盘库](https://github.com/arduino-libraries/Keyboard) 存储库，并将整个存储库下载到本地驱动器上。

2. 现在，可以将库安装到Arduino IDE中。打开Arduino IDE，点击 `sketch` -> `Include Library` -> `Add .ZIP Library`, 然后选择刚刚下载的 `Keyboard-master` 文件。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## 完整代码

要获取更多功能，请参考Arduino官方的 [键盘函数](https://www.arduino.cc/reference/en/language/functions/usb/keyboard/)。

```cpp
#include "Keyboard.h" //keyboard library 

void setup() { 
  //set button pins as inputs
  pinMode(WIO_KEY_A, INPUT);
  pinMode(WIO_KEY_B, INPUT);
  pinMode(WIO_KEY_C, INPUT);
  
  Keyboard.begin(); //start keyboard communication
}

void loop() {  
  if (digitalRead(WIO_KEY_A) == LOW) { //detect button press
    Keyboard.write('s'); //single key is pressed (character) 
  }
  if (digitalRead(WIO_KEY_B) == LOW) {   
    Keyboard.write('e'); 
  }  
  if (digitalRead(WIO_KEY_C) == LOW) {        
    Keyboard.write('d');  
  } 
  
  delay(200); //delay between keypresses
  
}
```
