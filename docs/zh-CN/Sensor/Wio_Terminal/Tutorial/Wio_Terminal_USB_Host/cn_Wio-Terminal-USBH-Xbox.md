---
description: Xbox
title: Xbox
keywords:
- Wio_terminal USB_Host
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-USBH-Xbox
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# 在 Wio Terminal 上使用 Xbox ONE 控制器

本教程介绍如何在 Wio Terminal 上使用 Xbox ONE 控制器。通过这个示例，您可以实现使用 Xbox 控制器在 Wio Terminal 上玩游戏！

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200109132336.gif"/></div>

## 需求

要使用此示例，您需要一个 **USB OTG 适配器** 和一个 **USB 转串口模块**，其中 OTG 适配器用于连接 Xbox 控制器，USB 转串口模块用于读取 Wio Terminal 的输出。

**注意：** 此示例使用 Xbox ONE 控制器。如果使用 Xbox 360 控制器或克隆版本，请查看示例中的 `XBOXOLD.ino`。

## 步骤

1. 使用 `Arduino IDE` 将代码上传到 Wio Terminal。

2. 拔掉用于上传代码的 USB Type-C 线缆。

3. 将您的 **Xbox ONE 控制器** 连接到 **OTG 适配器**，然后连接到 Wio Terminal 的 USB-C 端口。
      - **`Xbox ONE 控制器`** -> **`OTG 适配器`** -> **`Wio Terminal(Type-C 端口)`**

4. 按以下方式将 **USB 转串口模块** 连接到 Wio Terminal：
      - **`TXD(USB 转串口模块)`** -> **`RXD(Wio Terminal 的引脚 10)`**
      - **`RXD(USB 转串口模块)`** -> **`TXD(Wio Terminal 的引脚 8)`**
      - **`3.3V(USB 转串口模块)`** -> **`3.3V(Wio Terminal 的引脚 1)`**
      - **`GND(USB 转串口模块)`** -> **`GND(Wio Terminal 的引脚 6)`**

5. 将 USB 转串口模块连接到您的计算机。根据所使用的 USB 转串口模块，**下载相应的 USB 驱动程序**，以便您的计算机能够识别它。

6. 对于 Windows 用户，您可以打开设备管理器检查是否被识别。应该会出现一个新的 `COM` 端口。
      - 对于 Mac 用户，在终端中使用 `ls /dev/cu.*` 检查模块可用性。

7. 查看串口数据：
      - **Windows：** 下载并安装 [PuTTY](https://www.putty.org/)。选择 `Serial`，将串行线路中的 `COM` 更改为设备管理器中出现的 COM 端口，同时将速度更改为 `115200` 并按 Open。应该会出现一个终端。现在，如果您开始按 Xbox ONE 控制器上的按钮，您应该能看到串口输出！

      - **Mac：** 打开终端并使用 `brew install screen` 安装 `screen`。安装完成后，使用命令 **`screen /dev/cu.usbserial 115200`**，其中 `/dev/cu.usbserial` 应与上面的匹配。您应该能看到来自 Wio Terminal 的串口输出！

**重要提示：** 由于 Wio Terminal 的 USB 端口正在用于 USB 功能，要向 Wio Terminal 上传另一个程序需要通过按两次电源按钮进入引导加载程序模式（LED 会变暗），然后您应该能再次看到端口。

## USB 主机配置

要在 Wio Terminal 上启用 USB 主机，您必须配置两个引脚。需要将 `PIN_USB_HOST_ENABLE` 设置为 **LOW**，将 `OUTPUT_CTR_5V` 设置为 **HIGH**。

您可以通过在 `void setup()` 中添加以下代码来简单实现：

```cpp
digitalWrite(PIN_USB_HOST_ENABLE, LOW);
digitalWrite(OUTPUT_CTR_5V, HIGH);
```

## 完整代码

```cpp
#include <XBOXONE.h>
#define SerialDebug Serial1

USBHost UsbH;
XBOXONE Xbox(&UsbH);

void setup() {
  SerialDebug.begin(115200);
  if (UsbH.Init()) {
    SerialDebug.print(F("\r\nUSB主机未启动"));
    while (1); //停止
  }
  SerialDebug.print(F("\r\nXBOX USB库已启动"));

  //配置引脚以在Wio Terminal上启用USB主机
  digitalWrite(PIN_USB_HOST_ENABLE, LOW);
  digitalWrite(OUTPUT_CTR_5V, HIGH);

}
void loop() {
  UsbH.Task();
  if (Xbox.XboxOneConnected) {
    if (Xbox.getAnalogHat(LeftHatX) > 7500 || Xbox.getAnalogHat(LeftHatX) < -7500 || Xbox.getAnalogHat(LeftHatY) > 7500 || Xbox.getAnalogHat(LeftHatY) < -7500 || Xbox.getAnalogHat(RightHatX) > 7500 || Xbox.getAnalogHat(RightHatX) < -7500 || Xbox.getAnalogHat(RightHatY) > 7500 || Xbox.getAnalogHat(RightHatY) < -7500) {
      if (Xbox.getAnalogHat(LeftHatX) > 7500 || Xbox.getAnalogHat(LeftHatX) < -7500) {
        SerialDebug.print(F("左摇杆X: "));
        SerialDebug.print(Xbox.getAnalogHat(LeftHatX));
        SerialDebug.print("\t");
      }
      if (Xbox.getAnalogHat(LeftHatY) > 7500 || Xbox.getAnalogHat(LeftHatY) < -7500) {
        SerialDebug.print(F("左摇杆Y: "));
        SerialDebug.print(Xbox.getAnalogHat(LeftHatY));
        SerialDebug.print("\t");
      }
      if (Xbox.getAnalogHat(RightHatX) > 7500 || Xbox.getAnalogHat(RightHatX) < -7500) {
        SerialDebug.print(F("右摇杆X: "));
        SerialDebug.print(Xbox.getAnalogHat(RightHatX));
        SerialDebug.print("\t");
      }
      if (Xbox.getAnalogHat(RightHatY) > 7500 || Xbox.getAnalogHat(RightHatY) < -7500) {
        SerialDebug.print(F("右摇杆Y: "));
        SerialDebug.print(Xbox.getAnalogHat(RightHatY));
      }
      SerialDebug.println();
    }

    if (Xbox.getButtonPress(L2) > 0 || Xbox.getButtonPress(R2) > 0) {
      if (Xbox.getButtonPress(L2) > 0) {
        SerialDebug.print(F("L2: "));
        SerialDebug.print(Xbox.getButtonPress(L2));
        SerialDebug.print("\t");
      }
      if (Xbox.getButtonPress(R2) > 0) {
        SerialDebug.print(F("R2: "));
        SerialDebug.print(Xbox.getButtonPress(R2));
        SerialDebug.print("\t");
      }
      SerialDebug.println();
    }

    // 设置震动效果
    static uint16_t oldL2Value, oldR2Value;
    if (Xbox.getButtonPress(L2) != oldL2Value || Xbox.getButtonPress(R2) != oldR2Value) {
      oldL2Value = Xbox.getButtonPress(L2);
      oldR2Value = Xbox.getButtonPress(R2);
      uint8_t leftRumble = map(oldL2Value, 0, 1023, 0, 255); // 将扳机值映射为字节
      uint8_t rightRumble = map(oldR2Value, 0, 1023, 0, 255);
      if (leftRumble > 0 || rightRumble > 0)
        Xbox.setRumbleOn(leftRumble, rightRumble, leftRumble, rightRumble);
      else
        Xbox.setRumbleOff();
    }

    if (Xbox.getButtonClick(UP))
      SerialDebug.println(F("上"));
    if (Xbox.getButtonClick(DOWN))
      SerialDebug.println(F("下"));
    if (Xbox.getButtonClick(LEFT))
      SerialDebug.println(F("左"));
    if (Xbox.getButtonClick(RIGHT))
      SerialDebug.println(F("右"));

    if (Xbox.getButtonClick(START))
      SerialDebug.println(F("开始"));
    if (Xbox.getButtonClick(BACK))
      SerialDebug.println(F("返回"));
    if (Xbox.getButtonClick(XBOX))
      SerialDebug.println(F("Xbox"));
    if (Xbox.getButtonClick(SYNC))
      SerialDebug.println(F("同步"));

    if (Xbox.getButtonClick(L1))
      SerialDebug.println(F("L1"));
    if (Xbox.getButtonClick(R1))
      SerialDebug.println(F("R1"));
    if (Xbox.getButtonClick(L2))
      SerialDebug.println(F("L2"));
    if (Xbox.getButtonClick(R2))
      SerialDebug.println(F("R2"));
    if (Xbox.getButtonClick(L3))
      SerialDebug.println(F("L3"));
    if (Xbox.getButtonClick(R3))
      SerialDebug.println(F("R3"));


    if (Xbox.getButtonClick(A))
      SerialDebug.println(F("A"));
    if (Xbox.getButtonClick(B))
      SerialDebug.println(F("B"));
    if (Xbox.getButtonClick(X))
      SerialDebug.println(F("X"));
    if (Xbox.getButtonClick(Y))
      SerialDebug.println(F("Y"));
  }
  delay(1);
}
```
