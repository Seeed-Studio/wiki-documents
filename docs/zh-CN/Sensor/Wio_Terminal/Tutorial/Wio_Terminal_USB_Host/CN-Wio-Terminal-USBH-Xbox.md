---
description: Xbox
title: Xbox
keywords:
- Wio_terminal USB_Host
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-USBH-Xbox
last_update:
  date: 3/07/2024
  author: jessie
---

# 在Wio Terminal上使用Xbox ONE控制器

本教程介绍了如何在Wio Terminal上使用Xbox ONE控制器。使用此示例，您可以使用Wio Terminal来使用Xbox控制器玩游戏！

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200109132336.gif"/></div>

## 要求

要使用此示例，您需要一个 **USB OTG 适配器** 和一个 **USB 转串口模块**, 其中，OTG适配器用于连接Xbox控制器，USB转串口模块用于读取Wio Terminal的输出。

**注:** 此示例中使用的是 `XBOXOLD.ino` 控制器。如果使用Xbox 360控制器或克隆控制器，请查看示例中的XBOXOLD.ino文件。

## 步骤

1. 将 `Arduino IDE`将代码上传到Wio Terminal。

2. 将用于上传代码的USB Type-C电缆从Wio Terminal上拔下。

3. 将你的 **Xbox ONE 控制器** 连接到 **OTG 适配器** 然后连接到Wio Terminal的USB-C端口。
      - **`Xbox ONE 控制器`** -> **`OTG 适配器`** -> **`Wio Terminal(Type-C 端口)`**

4. 将 **USB 转串口模块** 连接到 Wio Terminal as follow:
      - **`TXD(USB 转串口模块)`** -> **`RXD(Wio Terminal的引脚10)`**
      - **`RXD(USB 转串口模块)`** -> **`TXD(Wio Terminal的引脚8)`**
      - **`3.3V(USB 转串口模块)`** -> **`3.3V(Wio Terminal的引脚1)`**
      - **`GND(USB 转串口模块)`** -> **`GND(Wio Terminal的引脚6)`**

5. 将USB转串口模块连接到您的计算机。根据使用的USB转串口模块的不同， **下载该模块的USB驱动程序** ，以便您的计算机可以识别它。

6. 对于Windows用户，您可以打开设备管理器查看是否被识别。应该会出现一个新的 `COM` 端口。
      - 对于Mac用户，在终端中使用命令 `ls /dev/cu.*` 检查模块的可用性。

7. 查看串口数据：
      - **Windows:** 下载并安装 [PuTTY](https://www.putty.org/)。选择 `Serial` 并将串行行中的 `COM` 更改为在设备管理器中出现的COM端口，然后将速度更改为 `115200` ，点击打开。一个终端窗口应该会出现。现在，如果您开始按下Xbox ONE控制器上的按钮，您应该可以看到串口输出！

      - **Mac:** 打开终端并使用 `brew install screen`命令安装 `screen` ，安装完成后，使用命令**`screen /dev/cu.usbserial 115200`**，其中 `/dev/cu.usbserial` 应该与上面匹配。您应该能够看到来自Wio Terminal的串口输出！

**重要提示:** 由于Wio Terminal的USB端口正在用于USB功能，所以要上传另一个程序到Wio Terminal，需要通过按两次电源按钮（LED灯会变暗）进入引导模式，然后您应该能够再次看到端口。

## USB主机配置

要在Wio Terminal上启用USB主机功能，您必须配置两个引脚。需要将 `PIN_USB_HOST_ENABLE` 设置为 **LOW** 将 `OUTPUT_CTR_5V` 设置为**HIGH**。

您可以通过在 `void setup()` 中添加以下代码来完成这个简单的配置：

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
    SerialDebug.print(F("\r\nUSB host did not start"));
    while (1); //halt
  }
  SerialDebug.print(F("\r\nXBOX USB Library Started"));

  //Coqnfigure pins to enable USB Host on Wio Terminal
  digitalWrite(PIN_USB_HOST_ENABLE, LOW);
  digitalWrite(OUTPUT_CTR_5V, HIGH);

}
void loop() {
  UsbH.Task();
  if (Xbox.XboxOneConnected) {
    if (Xbox.getAnalogHat(LeftHatX) > 7500 || Xbox.getAnalogHat(LeftHatX) < -7500 || Xbox.getAnalogHat(LeftHatY) > 7500 || Xbox.getAnalogHat(LeftHatY) < -7500 || Xbox.getAnalogHat(RightHatX) > 7500 || Xbox.getAnalogHat(RightHatX) < -7500 || Xbox.getAnalogHat(RightHatY) > 7500 || Xbox.getAnalogHat(RightHatY) < -7500) {
      if (Xbox.getAnalogHat(LeftHatX) > 7500 || Xbox.getAnalogHat(LeftHatX) < -7500) {
        SerialDebug.print(F("LeftHatX: "));
        SerialDebug.print(Xbox.getAnalogHat(LeftHatX));
        SerialDebug.print("\t");
      }
      if (Xbox.getAnalogHat(LeftHatY) > 7500 || Xbox.getAnalogHat(LeftHatY) < -7500) {
        SerialDebug.print(F("LeftHatY: "));
        SerialDebug.print(Xbox.getAnalogHat(LeftHatY));
        SerialDebug.print("\t");
      }
      if (Xbox.getAnalogHat(RightHatX) > 7500 || Xbox.getAnalogHat(RightHatX) < -7500) {
        SerialDebug.print(F("RightHatX: "));
        SerialDebug.print(Xbox.getAnalogHat(RightHatX));
        SerialDebug.print("\t");
      }
      if (Xbox.getAnalogHat(RightHatY) > 7500 || Xbox.getAnalogHat(RightHatY) < -7500) {
        SerialDebug.print(F("RightHatY: "));
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

    // Set rumble effect
    static uint16_t oldL2Value, oldR2Value;
    if (Xbox.getButtonPress(L2) != oldL2Value || Xbox.getButtonPress(R2) != oldR2Value) {
      oldL2Value = Xbox.getButtonPress(L2);
      oldR2Value = Xbox.getButtonPress(R2);
      uint8_t leftRumble = map(oldL2Value, 0, 1023, 0, 255); // Map the trigger values into a byte
      uint8_t rightRumble = map(oldR2Value, 0, 1023, 0, 255);
      if (leftRumble > 0 || rightRumble > 0)
        Xbox.setRumbleOn(leftRumble, rightRumble, leftRumble, rightRumble);
      else
        Xbox.setRumbleOff();
    }

    if (Xbox.getButtonClick(UP))
      SerialDebug.println(F("Up"));
    if (Xbox.getButtonClick(DOWN))
      SerialDebug.println(F("Down"));
    if (Xbox.getButtonClick(LEFT))
      SerialDebug.println(F("Left"));
    if (Xbox.getButtonClick(RIGHT))
      SerialDebug.println(F("Right"));

    if (Xbox.getButtonClick(START))
      SerialDebug.println(F("Start"));
    if (Xbox.getButtonClick(BACK))
      SerialDebug.println(F("Back"));
    if (Xbox.getButtonClick(XBOX))
      SerialDebug.println(F("Xbox"));
    if (Xbox.getButtonClick(SYNC))
      SerialDebug.println(F("Sync"));

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
