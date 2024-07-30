---
title: 数字端口
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Wio-Terminal-IO-Digital/
slug: /cn/Wio-Terminal-IO-Digital
last_update:
  date: 3/10/2024
  author: 金菊
---

# 在Wio Terminal上使用Grove数字端口

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/2019-12-12%2014-55-44.2019-12-12%2014_56_10.gif" /></div>

这个仓库演示了如何将Wio Terminal上的Grove端口用作数字端口。您可以使用这个功能来与Grove生态系统进行实验！

## RPI 数字引脚

Raspberry Pi 引脚定义如下

- `RPI_D0` -> `RPI_D8`

## Grove 端口配置

要将 **Grove 可配置的A/D端口** 用作数字端口，只需按如下方式定义：

```cpp
void setup() {
    pinMode(D0, INPUT); //Configure UART TX as Digital port
}
```

### 将Grove I2C端口用作数字端口

The **Grove I2C 端口** 也可以在Wio Terminal上用作数字端口：

```cpp
void setup() {
    pinMode(PIN_WIRE_SCL, INPUT); //Defined SCL of I2C port as Digital Input
```

现在，将您的Grove传感器连接到物理Grove端口上！

**注:** 有关更多定义的引脚名称，请查看原理图和 `variant.h` 文件。

## 示例代码

在这个示例中，使用了一个Grove按钮和Grove LED来演示：

```cpp
#define BUTTON D0 //Button to Grove UART Port
#define LED PIN_WIRE_SCL //LED to Grove I2C Port

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

## PWM输出示例代码（舵机）

在这个示例中，使用了一个Grove舵机来演示PWM输出:

```cpp
#include <Servo.h>
Servo myservo;

int pos = 0;

void setup() {
  myservo.attach(D0); //Connect servo to Grove Digital Port
}

void loop() {
  for (pos = 0; pos <= 180; pos += 1) {
    // in steps of 1 degree
    myservo.write(pos);
    delay(15);
  }
  for (pos = 180; pos >= 0; pos -= 1) {
    myservo.write(pos);
    delay(15);
  }
}
```

**注:** 要在Wio Terminal上使用舵机库，请包含 [Adafruit 的版本](https://github.com/PaintYourDragon/Servo) 以支持SAMD51功能。

## UART 串口

- Wio Terminal上的USB串口: `Serial`

- 外部的UART端口: `Serial1`

## 技术支持 & 产品讨论

感谢您选择我们的产品！我们致力于为您提供不同的支持，以确保您对我们的产品拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
