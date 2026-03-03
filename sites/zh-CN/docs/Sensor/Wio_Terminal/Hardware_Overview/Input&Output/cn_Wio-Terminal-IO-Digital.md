---
title: 数字端口
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/cn/Wio-Terminal-IO-Digital/
slug: /cn/Wio-Terminal-IO-Digital
last_update:
  date: 01/11/2022
  author: gunengyu
---
# 在 Wio Terminal 上使用 Grove 数字端口

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/2019-12-12%2014-55-44.2019-12-12%2014_56_10.gif" /></div>

本教程演示如何将 Wio Terminal 上的 Grove 端口用作数字端口。您可以简单地使用此功能来体验 Grove 生态系统！

## RPI 数字引脚

树莓派引脚定义如下：

- `RPI_D0` -> `RPI_D8`

## Grove 端口配置

要将 **Grove 可配置 A/D 端口** 用作数字端口，只需按如下方式定义：

```cpp
void setup() {
    pinMode(D0, INPUT); //将 UART TX 配置为数字端口
}
```

### 将 Grove I2C 端口用作数字端口

**Grove I2C 端口** 也可以在 Wio Terminal 上用作数字端口：

```cpp
void setup() {
    pinMode(PIN_WIRE_SCL, INPUT); //将 I2C 端口的 SCL 定义为数字输入
```

现在，将您的 Grove 传感器连接到物理 Grove 端口！

**注意：** 有关更多已定义的变量引脚名称，请查看原理图和 `variant.h`

## 示例代码

在此示例中，使用 Grove 按钮和 Grove LED 进行演示：

```cpp
#define BUTTON D0 //按钮连接到 Grove UART 端口
#define LED PIN_WIRE_SCL //LED 连接到 Grove I2C 端口

void setup() {
  Serial.begin(115200);
  pinMode(BUTTON, INPUT);
  pinMode(LED, OUTPUT);
}

void loop() {
  int buttonState = digitalRead(BUTTON);
  Serial.print("Button State: ");
  Serial.println(buttonState);

  if (buttonState == HIGH) {
    digitalWrite(LED, HIGH);
  }
  else {
    digitalWrite(LED, LOW);
  }
  delay(50);
}
```

## PWM 输出示例代码（舵机）

在此示例中，使用 Grove 舵机演示 PWM 输出：

```cpp
#include <Servo.h>
Servo myservo;

int pos = 0;

void setup() {
  myservo.attach(D0); //将舵机连接到 Grove 数字端口
}

void loop() {
  for (pos = 0; pos <= 180; pos += 1) {
    // 以 1 度为步长
    myservo.write(pos);
    delay(15);
  }
  for (pos = 180; pos >= 0; pos -= 1) {
    myservo.write(pos);
    delay(15);
  }
}
```

**注意：** 要在 Wio Terminal 上使用 Servo 库，请包含 [Adafruit 版本](https://github.com/PaintYourDragon/Servo) 以支持 SAMD51 功能。

## UART 串口

- Wio Terminal 中的 USB 串口：`Serial`

- 引出的 UART 端口：`Serial1`

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>