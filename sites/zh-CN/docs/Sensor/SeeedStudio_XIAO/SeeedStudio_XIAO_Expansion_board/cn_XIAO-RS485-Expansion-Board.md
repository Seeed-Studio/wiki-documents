---
description: 本指南将帮助你快速完成 Seeed Studio XIAO RS485 扩展板的设置，并开始进行 RS485 通信。
title: XIAO 的 RS485 扩展板
keywords:
  - xiao
image: https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/top.webp
slug: /XIAO-RS485-Expansion-Board
sku: 113991354
last_update:
  date: 10/20/2026
  author: Zeller
createdAt: '2024-11-26'
updatedAt: '2026-10-20'
url: https://wiki.seeedstudio.com/cn/XIAO-RS485-Expansion-Board/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';
import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Seeed Studio XIAO-RS485-Expansion-Board 入门指南

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/top.jpg" style={{width:600, height:'auto'}}/></div>

<div className="table-center">
  <table align="center">
        <div className="get_one_now_container" style={{textAlign: 'center'}}>
          <a
            className="get_one_now_item"
            href="https://www.seeedstudio.com/RS485-Breakout-Board-for-XIAO-p-6306.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>
              <span>
                <font color="#FFFFFF" size="4">
                  立即获取 🖱️
                </font>
              </span>
            </strong>
          </a>
        </div>
  </table>
</div>


:::tip

- V1.1 及更早版本使用**软件方向控制**。请参阅[软件到软件方向示例](#软件方向到软件方向)。

:::

## 特性

- **兼容 Seeed Studio XIAO**：专为 Seeed Studio XIAO 开发板设计。
- **长距离通信**：支持最长 1,200 m（约 3,937 ft）的 RS-485 通信距离。
- **5V 或 12V 直流输入**：支持任一供电电压，板载电路可将 12V 转换为 5V。
- **两个 3 针端子**：分别用于 RS-485 信号（A、B、GND）和电源（INT、5V、12V）。
- **紧凑设计**：尺寸大约为两个 XIAO 板大小，适用于空间受限的项目。
- **可选方向控制**：可通过板载 0 Ω 电阻配置为硬件自动或软件控制的 RS-485 收发切换。出厂默认配置为硬件自动方向控制。
- **RX/TX 活动指示灯**：指示数据接收和发送状态。
- **5V 和 12V 电源指示灯**：指示对应输入电压是否存在。

## 硬件概览

<Tabs>
<TabItem value="XIAO RS485 Expansion Board " label="XIAO RS485 扩展板 " default>

- XIAO RS485 扩展板指示图 V1.2 正面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_front_1.png" style={{width:1000, height:'auto'}}/></div>
<br/>
- XIAO RS485 扩展板指示图 V1.2 背面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_back.png" style={{width:1000, height:'auto'}}/></div>

</TabItem>
</Tabs>

### 准备材料

<div class="table-center">
 <table align="center">
  <tr>
   <th>Seeed Studio XIAO RS485-Expansion-Board × 2</th>
   <th>Seeed Studio XIAO ESP32-C3 × 2 </th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/hadware.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/esp32.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-Breakout-Board-for-XIAO-p-6306.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>


### 连接示意图

- XIAO RS-485 扩展板 V1.2 使用 TP8485E-SR 收发器。RS-485 信号与 XIAO 引脚的对应关系如下：`RS485_TX` 接 D4，`RS485_RX` 接 D5，`RS485_DE` 接 D2。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_sch_1.png" style={{width:700, height:'auto'}}/></div>
<br/>
<div class="table-center">
  <table align="center">
    <tr>
        <th>两个 RS485 扩展板的连接</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_connect.png" style={{width:700, height:'auto'}}/></div></td>
    </tr>
  </table>
</div>

- **5V OUT/IN 开关**：控制 5V 端子电源的方向。当本板向其他设备提供 5V 时，将其设置为 `OUT`；当本板通过端子接收 5V 时，将其设置为 `IN`。 
- **120R 开关**：设置为 `ON` 时，将板载 120 Ω 终端电阻接在 RS-485 的 A 和 B 线上；设置为 `NC` 时断开该电阻。对于长距离布线，应在总线物理两端启用终端电阻；中间节点保持断开。
- **INT**：预留中断连接。

:::tip

- V1.2 默认配置为**硬件自动方向控制**，因此示例程序无需通过 D2 切换方向。若要使用软件方向控制，需要更改板载 0 Ω 电阻的位置。

:::

- 硬件自动方向所用零欧电阻的位置

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/RS_485_Hardware.png" style={{width:600, height:'auto'}}/></div>

- 软件手动方向所用零欧电阻的位置

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/RS_485_Software.png" style={{width:600, height:'auto'}}/></div>

## 软件概览

在本项目中，XIAO ESP32C3 通过 D4（GPIO6）和 D5（GPIO7）与 RS485 扩展板通信。

### 硬件自动方向到硬件自动方向

当选择硬件自动方向控制时，示例程序无需控制 DE 引脚。

**1. 发送端代码**

```cpp
#include <Arduino.h>

// Hardware -> Hardware: sender (XIAO ESP32C3, RS485 board V1.2).
// Fit R23/R24 for automatic direction; D2 is unused.
void setup() {
  Serial.begin(115200); // USB serial monitor.
  Serial1.begin(9600, SERIAL_8N1, D5, D4); // RS485: RX=D5, TX=D4.
  Serial.println("Hardware -> Hardware sender ready");
  delay(500);
}

void loop() {
  Serial1.println("Hello from hardware sender"); // Send over the RS485 bus.
  Serial.println("Sent: Hello from hardware sender"); // Show status via USB.
  delay(1000);
}
```

- `Serial.begin(115200)` 启动用于串口监视器的 USB 串口输出。
- `Serial1.begin(9600, SERIAL_8N1, D5, D4)` 以 9600 波特率启动 RS-485 通信。D5 为 RX，D4 为 TX。
- 开发板自动控制传输方向，因此该示例程序不使用 D2。
- `Serial1.println()` 每秒发送一行文本。`Serial.println()` 通过 USB 显示本地发送状态，它并不能确认接收端是否收到了消息。

**2. 接收端代码**

```cpp
#include <Arduino.h>

// Hardware -> Hardware: receiver (XIAO ESP32C3, RS485 board V1.2).
// Fit R23/R24 for automatic direction; D2 is unused.
void setup() {
  Serial.begin(115200); // USB serial monitor.
  Serial1.begin(9600, SERIAL_8N1, D5, D4); // RS485: RX=D5, TX=D4.
  Serial.println("Hardware -> Hardware receiver ready");
  delay(500);
}

void loop() {
  if (Serial1.available()) {
    String message = Serial1.readStringUntil('\n'); // Read one RS485 line.
    message.trim();
    if (message.length() > 0) {
      Serial.print("Received: "); // Display on the USB serial monitor.
      Serial.println(message);
    }
  }
}
```

- `Serial` 通过 USB 显示消息。`Serial1` 通过 D5 从 RS-485 收发器接收数据。
- `Serial1.available()` 检查 UART 缓冲区中是否有等待处理的接收字节。
- `Serial1.readStringUntil('\n')` 读取直到换行符或超时。`message.trim()` 会移除首尾空白字符，包括由 `println()` 发送的回车符。
- 如果最终得到的消息非空，则通过 `Serial.print()` 和 `Serial.println()` 在 USB 串口监视器中显示。
- 开发板自动控制方向，因此该示例程序不使用 D2。

**3. 测试结果**

- 为每块 XIAO 打开 USB 串口监视器，以查看发送和接收的消息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_h-t-h.png" style={{width:600, height:'auto'}}/></div>

- 在数据传输过程中，板载 TX 和 RX 指示灯会闪烁以显示相应的活动状态。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_h-t-h.gif" style={{width:600, height:'auto'}}/></div>

### 硬件自动方向到软件方向

**1. 发送端代码**

```cpp
#include <Arduino.h>

// Hardware -> Software: sender (XIAO ESP32C3, RS485 board V1.2).
// Fit R23/R24 for automatic direction; D2 is unused.
void setup() {
  Serial.begin(115200); // USB serial monitor.
  Serial1.begin(9600, SERIAL_8N1, D5, D4); // RS485: RX=D5, TX=D4.
  Serial.println("Hardware -> Software sender ready");
}

void loop() {
  Serial1.println("Hello from hardware sender"); // Send over the RS485 bus.
  Serial.println("Sent: Hello from hardware sender"); // Show status via USB.
  delay(1000);
}
```

- `Serial.begin(115200)` 启动 USB 串口输出。`Serial1.begin(9600, SERIAL_8N1, D5, D4)` 启动 RS-485 UART，其中 D5 为 RX，D4 为 TX。
- 此板使用硬件自动方向控制，因此发送端无需操作 D2。
- 在 `loop()` 中，`Serial1.println()` 每秒通过 RS-485 发送一行文本。
- `Serial.println()` 通过 USB 显示本地发送状态。检查接收端的串口监视器以确认是否收到数据。

**2. 接收端代码**

在软件方向控制模式下，将 D2 配置为输出，并在接收端保持为 LOW 以启用接收模式。

```cpp
#include <Arduino.h>

// Hardware -> Software: receiver (XIAO ESP32C3, RS485 board V1.2).
// Fit R25/R26 for software direction; D2 stays LOW to receive.
void setup() {
  Serial.begin(115200); // USB serial monitor.
  Serial1.begin(9600, SERIAL_8N1, D5, D4); // RS485: RX=D5, TX=D4.
  pinMode(D2, OUTPUT);
  digitalWrite(D2, LOW); // Keep RS485 in receive mode.
  Serial.println("Hardware -> Software receiver ready");
}

void loop() {
  if (Serial1.available()) {
    String message = Serial1.readStringUntil('\n'); // Read one RS485 line.
    message.trim();
    if (message.length() > 0) {
      Serial.print("Received: "); // Display on the USB serial monitor.
      Serial.println(message);
    }
  }
}
```

- `Serial` 用于 USB 串口监视器，而 `Serial1` 通过 D5 接收 RS-485 数据。
- `pinMode(D2, OUTPUT)` 将 D2 配置为方向控制引脚。保持 D2 为 LOW 选择接收模式。
- `Serial1.available()` 检查缓冲区中的数据。`readStringUntil('\n')` 读取一行，`trim()` 去除首尾空白字符。
- `message.length() > 0` 用于过滤空消息。有效的接收文本会通过 USB 串口监视器显示。


**3. 测试结果**

- 为每个 XIAO 打开 USB 串口监视器，以查看发送和接收的消息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_h-t-r.png" style={{width:600, height:'auto'}}/></div>

- 在数据传输过程中，板载 TX 和 RX 指示灯会闪烁以显示对应的活动。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_h-t-h.gif" style={{width:600, height:'auto'}}/></div>

### 软件方向到软件方向

在软件方向控制中，D2 用于选择工作模式：LOW 为接收，HIGH 为发送。

**1. 发送端代码**

```cpp
#include <Arduino.h>

// Software -> Software: sender (XIAO ESP32C3, RS485 board V1.2).
// Fit R25/R26 for software direction; D2 controls transmit/receive.
void setup() {
  Serial.begin(115200); // USB serial monitor.
  Serial1.begin(9600, SERIAL_8N1, D5, D4); // RS485: RX=D5, TX=D4.
  pinMode(D2, OUTPUT);
  digitalWrite(D2, LOW); // Keep RS485 in receive mode.
  Serial.println("Software -> Software sender ready");
}

void loop() {
  digitalWrite(D2, HIGH); // Enable RS485 transmission.
  delayMicroseconds(100); // Allow the transceiver to switch.
  Serial1.println("Hello from software sender"); // Send over the RS485 bus.
  Serial1.flush(true); // Wait for TX only; keep RX buffer intact.
  digitalWrite(D2, LOW); // Return to receive mode.
  Serial.println("Sent: Hello from software sender"); // Show status via USB.
  delay(1000);
}
```

- `Serial` 通过 USB 显示状态。`Serial1` 通过 D4 以 9600 波特率发送 RS-485 数据。
- D2 控制方向：LOW 选择接收模式，HIGH 选择发送模式。
- 在发送之前，程序将 D2 置为 HIGH，并短暂等待收发器切换模式。
- `Serial1.println()` 发送文本。`Serial1.flush(true)` 在不清除接收数据的情况下等待 UART 发送完成。
- 发送完成后，程序将 D2 置为 LOW，并通过 USB 显示本地发送状态。

**2. 接收端代码**

```cpp
#include <Arduino.h>

// Software -> Software: receiver (XIAO ESP32C3, RS485 board V1.2).
// Fit R25/R26 for software direction; D2 stays LOW to receive.
void setup() {
  Serial.begin(115200); // USB serial monitor.
  Serial1.begin(9600, SERIAL_8N1, D5, D4); // RS485: RX=D5, TX=D4.
  pinMode(D2, OUTPUT);
  digitalWrite(D2, LOW); // Keep RS485 in receive mode.
  Serial.println("Software -> Software receiver ready");
}

void loop() {
  if (Serial1.available()) {
    String message = Serial1.readStringUntil('\n'); // Read one RS485 line.
    message.trim();
    if (message.length() > 0) {
      Serial.print("Received: "); // Display on the USB serial monitor.
      Serial.println(message);
    }
  }
}
```

- `Serial.begin(115200)` 启动 USB 串口输出。`Serial1.begin(9600, SERIAL_8N1, D5, D4)` 启动 RS-485 UART，其中 RX 为 D5，TX 为 D4。
- D2 被配置为方向控制引脚并保持为 LOW，使收发器保持在接收模式。
- 当 `Serial1.available()` 报告有缓冲数据时，`readStringUntil('\n')` 会读取一行。
- `trim()` 去除首尾空白字符。如果消息不为空，程序会通过 USB 显示它。

**3. 测试结果**

- 为每个 XIAO 打开 USB 串口监视器，以查看发送和接收的消息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_r-t-r.png" style={{width:600, height:'auto'}}/></div>

- 在数据传输过程中，板载 TX 和 RX 指示灯会闪烁以显示对应的活动。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/rs485_v1.2_h-t-h.gif" style={{width:600, height:'auto'}}/></div>

## 资源

- **📄[原理图]** [Seeed Studio XIAO-RS485-Expansion-Board Schematic V1.2](https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/RS485-Breakout-Board-for-XIAO_V1.2_SCH_20260917.pdf)
- **🗃️[PCB 设计文件]** [Seeed Studio XIAO-RS485-Expansion-Board V1.2 Project](https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/RS485-Breakout-Board-for-XIAO_V1.2_SCH&PCB_20260917.zip)
<br/>

- **📄[原理图]** [Seeed Studio XIAO-RS485-Expansion-Board Schematic V1.1](https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/Seeed_Studio_XIAO_RS485_Expansion_Board.pdf)
- **🗃️[KiCad 原理图]** [Seeed Studio XIAO-RS485-Expansion-Board V1.1 SCH](https://files.seeedstudio.com/wiki/rs485_ExpansionBoard/Seeed_Studio_XIAO_RS485_Expansion_Board.kicad_sch)

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，以确保您在使用我们产品时拥有尽可能顺畅的体验。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
