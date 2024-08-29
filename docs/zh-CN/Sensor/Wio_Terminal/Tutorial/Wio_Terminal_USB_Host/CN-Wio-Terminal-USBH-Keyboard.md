---
description: Keyboard
title: 键盘
keywords:
- Wio_terminal USB_Host
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-USBH-Keyboard
last_update:
  date: 3/07/2024
  author: jessie
---

# 在Wio Terminal上使用USB键盘

本教程介绍了如何在Wio Terminal上使用USB键盘。您可以使用此示例将键盘输入的数据传输到Wio Terminal上！

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200108143407.gif"/></div>

## 要求

要使用此示例，您需要一个 **USB OTG 适配器** 和一个 **USB 串口模块**, 其中OTG适配器用于连接键盘，USB串口模块用于读取Wio Terminal的输出。

## 步骤

1. 使用 `Arduino IDE` 将代码上传到Wio Terminal。

2. 从Wio Terminal上拔掉用于上传代码的USB Type-C数据线。

3. 将你的 **键盘** 连接到 **OTG 适配器**， 然后然后将OTG适配器连接到 Wio Terminal的USB-C端口。
      - **`键盘`** -> **`OTG 适配器`** -> **`Wio TerminalType-C端口）`**

4. 按照以下方式将 **USB 串口模块** 连接到 Wio Terminal：
      - **`TXD(USB 串口模块)`** -> **`RXD(Wio Terminal的引脚10)`**
      - **`RXD(USB 串口模块)`** -> **`TXD(Wio Terminal的引脚8)`**
      - **`3.3V(USB 串口模块)`** -> **`3.3V(Wio Terminal的引脚1)`**
      - **`GND(USB 串口模块)`** -> **`GND(Wio Terminal的引脚6)`**

5. 将USB串口模块连接到您的计算机。根据使用的USB串口模块的不同, **下载模块的USB驱动程序** 以便您的计算机可以识别它。

6. 对于Windows用户，您可以打开设备管理器来检查是否识别。一个新的 `COM` 端口应该出现。
      - 对于Mac用户，在终端中使用命令 `ls /dev/cu.*` 来检查模块的可用性。

7. 查看串口数据：
      - **Windows:** 下载并安装 [PuTTY](https://www.putty.org/)。 选择 `Serial` 并将Serial line中的 `COM` 更改为设备管理器中出现的COM端口号，同时将Speed更改为 `115200` 然后点击打开。一个终端窗口应该出现。现在，如果您开始在连接的键盘上键入，您应该看到串口输出！

      - **Mac:** 打开终端并使用 `brew install screen` 命令安装  `screen` 安装完成后，使用命令 **`screen /dev/cu.usbserial 115200`** ，其中 `/dev/cu.usbserial` 应该与上面的匹配。您应该能够从Wio Terminal看到串口输出！

**重要提示:** 由于Wio Terminal的USB端口正在用于USB连接，如果要向Wio Terminal上传另一个程序，需要通过按两次电源按钮进入引导模式（LED灯会变暗），然后您应该能够再次看到端口。

## USB 主机配置
要在Wio Terminal上启用USB主机功能，您需要配置两个引脚。需要将 `PIN_USB_HOST_ENABLE` 设为 **LOW** 将 `OUTPUT_CTR_5V` 设为 **HIGH**。

您可以通过在 `void setup()` 中添加以下代码来完成这个操作：

```cpp
digitalWrite(PIN_USB_HOST_ENABLE, LOW);
digitalWrite(OUTPUT_CTR_5V, HIGH);
```

## 完整代码

```cpp
#include <KeyboardController.h>
#define SerialDebug Serial1


// Initialize USB Controller
USBHost usb;

// Attach keyboard controller to USB
KeyboardController keyboard(usb);

void printKey();

// This function intercepts key press
void keyPressed() {
  SerialDebug.print("Pressed:  ");
  printKey();
}

// This function intercepts key release
void keyReleased() {
  SerialDebug.print("Released: ");
  printKey();
}

void printKey() {
  // getOemKey() returns the OEM-code associated with the key
  SerialDebug.print(" key:");
  SerialDebug.print(keyboard.getOemKey());

  // getModifiers() returns a bits field with the modifiers-keys
  int mod = keyboard.getModifiers();
  SerialDebug.print(" mod:");
  SerialDebug.print(mod);

  SerialDebug.print(" => ");

  if (mod & LeftCtrl)
    SerialDebug.print("L-Ctrl ");
  if (mod & LeftShift)
    SerialDebug.print("L-Shift ");
  if (mod & Alt)
    SerialDebug.print("Alt ");
  if (mod & LeftCmd)
    SerialDebug.print("L-Cmd ");
  if (mod & RightCtrl)
    SerialDebug.print("R-Ctrl ");
  if (mod & RightShift)
    SerialDebug.print("R-Shift ");
  if (mod & AltGr)
    SerialDebug.print("AltGr ");
  if (mod & RightCmd)
    SerialDebug.print("R-Cmd ");

  // getKey() returns the ASCII translation of OEM key
  // combined with modifiers.
  SerialDebug.write(keyboard.getKey());
  SerialDebug.println();
}

uint32_t lastUSBstate = 0;

void setup()
{
  SerialDebug.begin( 115200 );
  SerialDebug.println("Keyboard Controller Program started");

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
