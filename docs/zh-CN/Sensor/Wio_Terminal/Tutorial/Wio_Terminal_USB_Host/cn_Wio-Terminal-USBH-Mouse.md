---
description: 鼠标
title: 鼠标
keywords:
- Wio_terminal USB_Host
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-USBH-Mouse
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# 在 Wio Terminal 上使用 USB 鼠标

本教程介绍如何在 Wio Terminal 上使用 USB 鼠标。您可以通过这个示例实现从鼠标向 Wio Terminal 输入数据！

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200108160611.gif"/></div>

## 要求

要使用此示例，您需要一个 **USB OTG 适配器** 和一个 **USB 转串口模块**，其中 OTG 适配器用于连接鼠标，USB 转串口模块用于读取 Wio Terminal 的输出。

## 步骤

1. 使用 `Arduino IDE` 将代码上传到 Wio Terminal。

2. 拔掉用于上传代码的 USB Type-C 线缆。

3. 将您的 **鼠标** 连接到 **OTG 适配器**，然后连接到 Wio Terminal 的 USB-C 端口。
      - **`鼠标`** -> **`OTG 适配器`** -> **`Wio Terminal(Type-C 端口)`**

4. 按以下方式将 **USB 转串口模块** 连接到 Wio Terminal：
      - **`TXD(USB 转串口模块)`** -> **`RXD(Wio Terminal 的引脚 10)`**
      - **`RXD(USB 转串口模块)`** -> **`TXD(Wio Terminal 的引脚 8)`**
      - **`3.3V(USB 转串口模块)`** -> **`3.3V(Wio Terminal 的引脚 1)`**
      - **`GND(USB 转串口模块)`** -> **`GND(Wio Terminal 的引脚 6)`**

5. 将 USB 转串口模块连接到您的计算机。根据所使用的 USB 转串口模块，**下载相应的 USB 驱动程序**，以便您的计算机能够识别它。

6. 对于 Windows 用户，您可以打开设备管理器检查是否被识别。应该会出现一个新的 `COM` 端口。
      - 对于 Mac 用户，在终端中使用 `ls /dev/cu.*` 来检查模块的可用性。

7. 查看串口数据：
      - **Windows：** 下载并安装 [PuTTY](https://www.putty.org/)。选择 `Serial`，将串行线路中的 `COM` 更改为设备管理器中出现的 COM 端口，同时将速度更改为 `115200` 并按 Open。应该会出现一个终端。现在，如果您开始按下并移动鼠标，您应该能看到串口输出！

      - **Mac：** 打开终端并使用 `brew install screen` 安装 `screen`。安装完成后，使用命令 **`screen /dev/cu.usbserial 115200`**，其中 `/dev/cu.usbserial` 应与上面的匹配。您应该能看到来自 Wio Terminal 的串口输出！

**重要提示：** 由于 Wio Terminal 的 USB 端口正在用于 USB 功能，要向 Wio Terminal 上传另一个程序需要通过按两次电源按钮进入引导加载程序模式（LED 会变暗），然后您应该能再次看到端口。

## USB 主机配置

要在 Wio Terminal 上启用 USB 主机功能，您必须配置两个引脚。需要将 `PIN_USB_HOST_ENABLE` 设置为 **LOW**，将 `OUTPUT_CTR_5V` 设置为 **HIGH**。

您可以通过在 `void setup()` 中添加以下代码来简单实现：

```cpp
digitalWrite(PIN_USB_HOST_ENABLE, LOW);
digitalWrite(OUTPUT_CTR_5V, HIGH);
```

## 完整代码

```cpp
#include <MouseController.h>
#define SerialDebug Serial1

uint32_t lastUSBstate = 0;

// 初始化USB控制器
USBHost usb;

// 将鼠标控制器连接到USB
MouseController mouse(usb);

// 鼠标按钮状态变量
bool leftButton = false;
bool middleButton = false;
bool rightButton = false;

// 此函数拦截鼠标移动
void mouseMoved() {
  SerialDebug.print("移动: ");
  SerialDebug.print(mouse.getXChange());
  SerialDebug.print(", ");
  SerialDebug.println(mouse.getYChange());
}

// 此函数拦截按下按钮时的鼠标移动
void mouseDragged() {
  SerialDebug.print("拖拽: ");
  SerialDebug.print(mouse.getXChange());
  SerialDebug.print(", ");
  SerialDebug.println(mouse.getYChange());
}

// 此函数拦截鼠标按钮按下
void mousePressed() {
  SerialDebug.print("按下: ");
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

// 此函数拦截鼠标按钮释放
void mouseReleased() {
  SerialDebug.print("释放: ");
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
  SerialDebug.println("鼠标控制器程序已启动");

  if (usb.Init())
      SerialDebug.println("USB主机未启动。");

  delay( 20 );

  //配置引脚以在Wio Terminal上启用USB主机
  digitalWrite(PIN_USB_HOST_ENABLE, LOW);
  digitalWrite(OUTPUT_CTR_5V, HIGH);

}

void loop()
{
  // 处理USB任务
  usb.Task();

  uint32_t currentUSBstate = usb.getUsbTaskState();
  if (lastUSBstate != currentUSBstate) {
    SerialDebug.print("USB状态已更改: 0x");
    SerialDebug.print(lastUSBstate, HEX);
    SerialDebug.print(" -> 0x");
    SerialDebug.println(currentUSBstate, HEX);
    switch (currentUSBstate) {
      case USB_ATTACHED_SUBSTATE_SETTLE: SerialDebug.println("设备已连接"); break;
      case USB_DETACHED_SUBSTATE_WAIT_FOR_DEVICE: SerialDebug.println("已断开连接，等待设备"); break;
      case USB_ATTACHED_SUBSTATE_RESET_DEVICE: SerialDebug.println("正在重置设备"); break;
      case USB_ATTACHED_SUBSTATE_WAIT_RESET_COMPLETE: SerialDebug.println("重置完成"); break;
      case USB_STATE_CONFIGURING: SerialDebug.println("USB配置中"); break;
      case USB_STATE_RUNNING: SerialDebug.println("USB运行中"); break;
    }
    lastUSBstate = currentUSBstate;
  }
}
```
