---
description: 将 Arduino Wi-Fi 示例构建并上传到 XIAO ESP32C6，然后在 Visual Studio 中使用内置 USB JTAG 单步调试信号阈值比较。
title: 在 Visual Studio 中使用 XIAO ESP32C6
keywords:
  - XIAO
  - ESP32C6
  - Visual Studio
  - Arduino
  - USB JTAG
slug: /xiao_esp32c6_with_visual_studio
---

本教程基于 XIAO ESP32C6 的 [Wi-Fi 扫描示例](https://wiki.seeedstudio.com/cn/xiao_wifi_usage_esp32c6/#扫描附近的 wifi 网络)。你将上传一个 Arduino 示例程序，对采样到的最强 2.4 GHz 信号进行分类，然后在比较处暂停，并在单步执行时观察数值变化。XIAO 的内置 USB JTAG 通过与你上传示例程序相同的 USB 数据线工作。[Espressif 内置 USB JTAG 参考](https://docs.espressif.com/projects/esp-idf/en/stable/esp32c6/api-guides/jtag-debugging/configure-builtin-jtag.html)

## 你需要准备什么

- 一块 Seeed Studio XIAO ESP32C6 和一根直接连接到 Windows 电脑的 USB-C 数据线。
- Microsoft Visual Studio 2022 或 2026，并安装 **Desktop development with C++** 工作负载以及 [Visual Micro 扩展](https://marketplace.visualstudio.com/items?itemName=VisualMicro.ArduinoIDEforVisualStudio)。Visual Micro 是第三方扩展，提供试用版和付费许可。
- 范围内有一个处于活动状态的 2.4 GHz Wi-Fi 接入点。示例程序会扫描附近网络，而不会加入它们。

## 选择开发板和端口

1. 在 Visual Micro 工具栏中，选择你要使用的 Arduino 环境。**Arduino 2** 选项会使用你的 Arduino IDE 2 配置。如果该环境中已安装 **esp32 by Espressif Systems**，请转到步骤 2。否则，使用 **Micro Explorer → Board Manager** 安装稳定版包。如果 Board Manager 中缺少 Espressif，请在 **IDE Locations → Additional board manager JSON URLs** 中添加 Seeed 文档中的包索引，保存后在 Board Manager 中选择 **Check for Updates**。 [Seeed 的开发板设置](https://wiki.seeedstudio.com/cn/xiao_esp32c6_getting_started/#添加开发板) · [Visual Micro Board Manager](https://www.visualmicro.com/page/User-Guide.aspx?doc=Board-Manager.html)
2. 选择 **vMicro → New Arduino Project** 并将其命名为 `XiaoC6WifiSignal`。将开发板设为 `XIAO_ESP32C6`，并选择连接 XIAO 时出现的 COM 端口。
3. 在 **vMicro → Board Options** 中将 **USB CDC On Boot** 设置为 **Enabled**。这会将示例程序的 `Serial` 输出路由到 XIAO 的 USB 接口。

## 上传 Wi-Fi 示例程序

将 `XiaoC6WifiSignal.ino` 的内容替换为下面的示例程序。它会扫描网络，记录以 dBm 为单位的最强采样 RSSI，并将其与 `-70 dBm` 比较。读数达到或高于 `-70 dBm` 即视为信号强。

```cpp
#include <WiFi.h>

volatile int32_t thresholdDbm = -70;
volatile int32_t strongestDbm = -127;
volatile bool strongSignal = false;

void setup() {
  Serial.begin(115200);
  WiFi.STA.begin(false);
}

void loop() {
  const int count = WiFi.scanNetworks();

  if (count > 0) {
    // WiFi.RSSI() takes an 8-bit scan-result index.
    const int sampleCount = min(count, 256);
    int32_t bestDbm = WiFi.RSSI(0);
    for (int index = 1; index < sampleCount; ++index) {
      const int32_t rssi = WiFi.RSSI(index);
      if (rssi > bestDbm) {
        bestDbm = rssi;
      }
    }

    strongestDbm = bestDbm;
    strongSignal = strongestDbm >= thresholdDbm;  // Set a breakpoint here.
    Serial.printf("%ld dBm (%s)\n", static_cast<long>(strongestDbm),
                  strongSignal ? "strong" : "weak");
  } else {
    Serial.println(count == 0 ? "No networks found" : "Wi-Fi scan failed");
  }

  WiFi.scanDelete();
  delay(4000);
}
```

选择 **vMicro → Build & Upload**。打开该开发板 COM 端口的 Visual Micro **Serial Monitor**，将其设置为 **115200 baud** 并点击 **Connect**。一次扫描后，你应能看到类似 `-68 dBm (strong)` 或 `-71 dBm (weak)` 的输出。如果希望在之后上传释放端口后，已打开的监视器自动重新连接，请启用 **Auto-Recon**。

## 单步执行信号比较

1. 选择 **Debug** 构建配置。在 Visual Micro 工具栏中，将调试器模式设置为 **Hardware** 并选择 **ESP32C6-USB**。保持开发板设置为 `XIAO_ESP32C6`。为与开发板测试保持一致，在 **vMicro → Debugger → Disable Optimization → No Project + Libraries Optimization** 中选择对应选项。

   ![Visual Micro 工具栏显示 XIAO_ESP32C6、COM 端口、Hardware 调试和 ESP32C6-USB](./visual-studio-wifi/xiao-esp32-c6-setup.png)

2. 在 `strongSignal = strongestDbm >= thresholdDbm;` 这一行的左侧边距中点击，设置一个断点。按 **F5** 开始调试。一旦扫描到网络，示例程序会在该行暂停。
3. 在 Visual Studio 中，打开 **Debug → Windows → Watch → Watch 1**。添加 `strongestDbm`、`thresholdDbm` 和 `strongSignal`。此时，`strongSignal` 仍保持其之前的值。
4. 按一次 **F10** 执行该比较。调试器会移动到 `Serial.printf` 这一行。在下面展示的开发板测试中，`strongestDbm` 为 `-71`，`thresholdDbm` 为 `-70`，赋值操作将 `strongSignal` 从 `true` 改为 `false`。你的结果取决于周围的网络情况。截图在 **Autos** 中显示了这些数值。

   ![按下 F10 后，执行停在打印行，Autos 显示 strongestDbm 为 -71、thresholdDbm 为 -70、strongSignal 为 false](./visual-studio-wifi/xiao-esp32-c6-f10-result.png)

5. 按 **F5** 继续运行。Serial Monitor 会打印分类结果。然后示例程序会等待四秒并开始下一次扫描。若希望其持续扫描而不再暂停，请清除断点并再次按 **F5**。

截图展示的是最初的板载测试。上面的示例程序使用了相同的比较逻辑，并将索引的扫描结果数量限制为 256。该修订版使用 Arduino-ESP32 3.3.13 编译。

## 故障排除

- **断点从未命中。** 只有在扫描到至少一个网络时才会运行比较。如果 Serial Monitor 显示 `No networks found`，请将 XIAO 移近一个 2.4 GHz 接入点。如果需要在示例程序暂停时手动连接监视器，请先按 **F5** 恢复运行，再点击 **Connect**。
- **COM 端口缺失或上传超时。** 检查数据线是否支持数据传输，重新连接开发板并选择当前 COM 端口。如果 Windows 仍未检测到，请按照 [Seeed 的引导加载程序恢复步骤](https://wiki.seeedstudio.com/cn/xiao_esp32c6_getting_started/#bootloader-模式)操作。
- **USB JTAG 断开连接或调试器卡住。** 拔下并重新连接 XIAO，然后等待 Windows 识别它。如果调试器仍在等待，请停止调试并按 **F5** 启动新的调试会话。有关 OpenOCD 错误或调试器配置检查，请参阅 [ESP32-C6 USB JTAG 故障排除](https://www.visualmicro.com/page/ESP32C6-USB-Debugging.aspx#usb-jtag-troubleshooting)。

## 另请参阅

- [在 PlatformIO 中使用 XIAO ESP32C6](https://wiki.seeedstudio.com/cn/xiao_esp32c6_with_platform_io/)
- [XIAO ESP32C6 上的 Wi-Fi 使用方法](https://wiki.seeedstudio.com/cn/xiao_wifi_usage_esp32c6/)
