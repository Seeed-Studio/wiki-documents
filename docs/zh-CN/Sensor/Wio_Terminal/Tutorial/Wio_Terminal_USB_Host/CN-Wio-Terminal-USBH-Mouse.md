---
description: Mouse
title: 鼠标
keywords:
- Wio_terminal USB_Host
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-USBH-Mouse
last_update:
  date: 3/07/2024
  author: jessie
---

# 在Wio Terminal上使用USB鼠标

本教程介绍了如何在Wio Terminal上使用USB鼠标。您可以将此示例用于从鼠标输入数据到Wio Terminal！

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200108160611.gif"/></div>

## 要求

要使用此示例，您需要一个 **USB OTG 适配器** 和一个 **USB 转串口模块**, 其中，OTG适配器用于连接鼠标，USB转串口模块用于读取Wio Terminal的输出。

## 步骤
1. 使用 `Arduino IDE` 将代码上传到Wio Terminal。

2. 将用于上传代码的USB Type-C数据线从Wio Terminal上拔下。

3. 将 **鼠标** 连接到 **OTG 适配器** 然后连接到Wio Terminal的USB-C端口。
      - **`Mouse`** -> **`OTG Adaptor`** -> **`Wio Terminal(Type-C Port)`**

4. 将 **USB 转串口模块** 连接到Wio Terminal上，连接方式如下：
      - **`TXD(USB 转串口模块)`** -> **`RXD(Wio Terminal的引脚10)`**
      - **`RXD(USB 转串口模块)`** -> **`TXD(Wio Terminal的引脚8)`**
      - **`3.3V(USB 转串口模块)`** -> **`3.3V(Wio Terminal的引脚1)`**
      - **`GND(USB 转串口模块)`** -> **`GND(Wio Terminal的引脚6)`**

5. 将USB转串口模块连接到计算机。根据使用的USB转串口模块不同, **下载相应的USB驱动程序** 以便计算机可以识别它。

6. 对于Windows用户，您可以打开设备管理器以检查是否识别。一个新的 `COM` 端口应该会出现 。
      - 对于Mac用户，在终端中使用 `ls /dev/cu.*` 命令来检查模块的可用性。

7. 查看串口数据：
      - **Windows:** 下载并安装 [PuTTY](https://www.putty.org/)。 选择 `Serial` ，将Serial line中的 `COM` 更改为设备管理器中出现的COM端口, 并更改速率为 `115200`， 然后点击Open，一个终端窗口应该会出现。现在，如果您开始按下并移动鼠标，您应该能够看到串口输出！

      - **Mac:** 打开终端并使用 `brew install screen` 命令安装 `screen` ，安装完成后，使用命令 **`screen /dev/cu.usbserial 115200` ，其中 `/dev/cu.usbserial` 应与上述相匹配。您应该能够从Wio Terminal看到串口输出！** 

**重要提示:** 由于Wio Terminal的USB端口正在用于USB功能，如果要上传另一个程序到Wio Terminal，需要通过按两次电源按钮（LED会变暗）进入引导程序模式，然后您应该能够再次看到该端口。

## USB主机配置

要在Wio Terminal上启用USB主机功能，您需要配置两个引脚。需要将 `PIN_USB_HOST_ENABLE` 设置为 **LOW** ，将 `OUTPUT_CTR_5V` 设置为 **HIGH**。

您可以通过在 `void setup()` 中添加以下代码来完成这个简单的配置：

```cpp
digitalWrite(PIN_USB_HOST_ENABLE, LOW);
digitalWrite(OUTPUT_CTR_5V, HIGH);
```

## 完整代码

```cpp
#include <MouseController.h>
#define SerialDebug Serial1

uint32_t lastUSBstate = 0;

// Initialize USB Controller
USBHost usb;

// Attach mouse controller to USB
MouseController mouse(usb);

// variables for mouse button states
bool leftButton = false;
bool middleButton = false;
bool rightButton = false;

// This function intercepts mouse movements
void mouseMoved() {
  SerialDebug.print("Move: ");
  SerialDebug.print(mouse.getXChange());
  SerialDebug.print(", ");
  SerialDebug.println(mouse.getYChange());
}

// This function intercepts mouse movements while a button is pressed
void mouseDragged() {
  SerialDebug.print("DRAG: ");
  SerialDebug.print(mouse.getXChange());
  SerialDebug.print(", ");
  SerialDebug.println(mouse.getYChange());
}

// This function intercepts mouse button press
void mousePressed() {
  SerialDebug.print("Pressed: ");
  if (mouse.getButton(LEFT_BUTTON)) {
    SerialDebug.print("L");
    leftButton = true;
  }
  if (mouse.getButton(MIDDLE_BUTTON)) {
    SerialDebug.print("M");
    middleButton = true;
  }
  if (mouse.getButton(RIGHT_BUTTON)) {
    SerialDebug.print("R");
    rightButton = true;
  }
  SerialDebug.println();
}

// This function intercepts mouse button release
void mouseReleased() {
  SerialDebug.print("Released: ");
  if (!mouse.getButton(LEFT_BUTTON) && leftButton == true) {
    SerialDebug.print("L");
    leftButton = false;
  }
  if (!mouse.getButton(MIDDLE_BUTTON) && middleButton == true) {
    SerialDebug.print("M");
    middleButton = false;
  }
  if (!mouse.getButton(RIGHT_BUTTON) && rightButton == true) {
    SerialDebug.print("R");
    rightButton = false;
  }
  SerialDebug.println();
}

void setup()
{
  SerialDebug.begin( 115200 );
  SerialDebug.println("Mouse Controller Program started");

  if (usb.Init())
      SerialDebug.println("USB host did not start.");

  delay( 20 );

  //Coqnfigure pins to enable USB Host on Wio Terminal
  digitalWrite(PIN_USB_HOST_ENABLE, LOW);
  digitalWrite(OUTPUT_CTR_5V, HIGH);

}

void loop()
{
  // Process USB tasks
  usb.Task();

  uint32_t currentUSBstate = usb.getUsbTaskState();
  if (lastUSBstate != currentUSBstate) {
    SerialDebug.print("USB state changed: 0x");
    SerialDebug.print(lastUSBstate, HEX);
    SerialDebug.print(" -> 0x");
    SerialDebug.println(currentUSBstate, HEX);
    switch (currentUSBstate) {
      case USB_ATTACHED_SUBSTATE_SETTLE: SerialDebug.println("Device Attached"); break;
      case USB_DETACHED_SUBSTATE_WAIT_FOR_DEVICE: SerialDebug.println("Detached, waiting for Device"); break;
      case USB_ATTACHED_SUBSTATE_RESET_DEVICE: SerialDebug.println("Resetting Device"); break;
      case USB_ATTACHED_SUBSTATE_WAIT_RESET_COMPLETE: SerialDebug.println("Reset complete"); break;
      case USB_STATE_CONFIGURING: SerialDebug.println("USB Configuring"); break;
      case USB_STATE_RUNNING: SerialDebug.println("USB Running"); break;
    }
    lastUSBstate = currentUSBstate;
  }
}
```
