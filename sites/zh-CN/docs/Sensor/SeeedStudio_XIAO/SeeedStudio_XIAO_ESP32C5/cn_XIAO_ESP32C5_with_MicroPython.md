---
title: Seeed Studio XIAO ESP32-C5 与 Micropython
description: ''
keywords:
  - xiao
  - esp32c5
  - micropython
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_1.webp
slug: /xiao_esp32c5_with_micropyhton
last_update:
  date: 12/22/2025
  author: Zeller
createdAt: '2025-12-15'
updatedAt: '2025-12-26'
url: https://wiki.seeedstudio.com/cn/xiao_esp32c5_with_micropyhton/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[MicroPython](https://github.com/micropython/micropython/wiki) 是一个支持原生代码生成的 Python 解释器，用于性能关键代码。它提供了 Python 3.6+ 核心功能的子集，针对微控制器和资源受限系统进行了优化。它与 CPython 不同，您可以在 [MicroPython vs CPython differences](https://github.com/micropython/micropython/wiki/Differences) 页面中了解更多差异。

## 在 XIAO ESP32-C5 上使用 MicroPython

接下来，我将指导您如何在 **XIAO ESP32-C5** 上使用 **MicroPython**，并使用 [Thonny IDE](https://thonny.org/) 进行编程，基于 Windows 操作系统。

### 硬件准备

开始之前，您需要准备一块 XIAO ESP32-C5 开发板。

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### 部署 MicroPython 固件

接下来，我们将指导您如何在 XIAO ESP32-C5 上部署 MicroPython 固件。

#### 安装 esptool

在为 ESP32-C5 安装 MicroPython 固件之前，您需要先安装 [esptool](https://docs.espressif.com/projects/esptool/en/latest/esp32c5/)。我们将使用 esptool.py 来擦除和烧录固件到开发板上。<br/>

在任意文件夹中打开终端并输入以下命令。

```bash
pip install esptool
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_1.png" style={{width:800, height:'auto'}}/></div>

#### 擦除

:::tip
在 Windows 操作系统上，安装的程序可能已从 `esptool.py` 重命名为 `esptool`。
:::

如果您是第一次在 **XIAO ESP32-C5** 上安装 MicroPython，请使用以下命令先擦除 Flash。<br/>

```bash
esptool.py eraase_flash
```

:::tip
`esptool.py` 将尝试自动检测带有 ESP32 的串口。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_2.png" style={{width:800, height:'auto'}}/></div><br/>

 但如果检测失败或您的计算机上可能连接了多个基于 Espressif 的设备，则请使用 --port 选项传递目标串口的名称。例如：

```bash
esptool.py --port PORTNAME erase_flash
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_3.png" style={{width:800, height:'auto'}}/></div><br/>

#### 烧录

**步骤 1.** 点击链接，选择适合的 ESP32-C5 MicroPython 固件版本进行下载，这里选择 v1.27.0 版本。[ESP32_GENERIC_C5 MicroPython](https://micropython.org/download/ESP32_GENERIC_C5/)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_4_1.png" style={{width:800, height:'auto'}}/></div><br/>

**步骤 2.** 将固件部署到开发板，从地址 0x2000 开始。

为了避免丢失固件文件，建议您将下载的 MicroPython 固件放在单独的文件夹中，然后在此文件夹中右键打开终端。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_5.png" style={{width:800, height:'auto'}}/></div><br/>

输入以下命令并将 `ESP32_BOARD_NAME-DATE-VERSION.bin` 替换为 `ESP32_GENERIC_C5-20251209-v1.27.0.bin`。

```bash
esptool.py --baud 460800 write_flash 0x2000 ESP32_BOARD_NAME-DATE-VERSION.bin
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_6.png" style={{width:800, height:'auto'}}/></div><br/>

如果 esptool.py 无法自动检测串口，则可以在命令行中明确传递串口。

```bash
esptool.py --port PORTNAME --baud 460800 write_flash 0x2000 ESP32_BOARD_NAME-DATE-VERSION.bin
```

- 在 Windows 上，端口名称通常类似于 `COM4`。
- 在 Linux 上，端口名称通常类似于 `/dev/ttyUSB` 或 `/dev/ttyACM0`。
- 在 Mac 上，端口名称通常类似于 `/dev/cu.usbmodem01`。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_7.png" style={{width:800, height:'auto'}}/></div><br/>

:::tip
如果烧录开始后中途失败，请尝试移除 `--baud 460800` 选项以使用较慢的默认速度进行烧录。
:::

### 安装 [Thonny IDE](https://thonny.org/)

选择适合的版本进行安装。这里我在 Windows 系统上安装，所以选择了 Windows 版本。

按照所需 Python 版本的说明进行操作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54L15/Getting_Start/thonny_ide_1.png" style={{width:800, height:'auto'}}/></div>

然后，只需按照默认步骤进行配置即可。

### LED 闪烁示例

这里我们将向您展示如何使用 MicroPython 和 Thonny IDE 点亮 XIAO ESP32-C5 上的 L LED。

#### **步骤 1.** 解释器配置

- 打开 Thonny IDE，然后点击界面右下角的 **Configure interpreter** 选项。选择 MicroPython (generic) 和端口

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_8.png" style={{width:800, height:'auto'}}/></div><br/>

连接成功后，下方的 shell 窗口将输出 MicroPython 固件版本信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_9.png" style={{width:800, height:'auto'}}/></div><br/>

#### **步骤 2.** 新建 led_blink.py 文件

- 点击左上角的 **File** -> **New** 创建新文件，然后按 **Ctrl + S** 将其命名为 led_blink 并保存到您的计算机。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_10.png" style={{width:400, height:'auto'}}/></div><br/>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_11.png" style={{width:400, height:'auto'}}/></div><br/>

- 点击左上角的 **View** -> **Files** 进行勾选（旁边会出现 **√**），左侧将显示一个显示您存储文件位置的窗口。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_12.png" style={{width:400, height:'auto'}}/></div><br/>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_13_1.png" style={{width:600, height:'auto'}}/></div><br/>

#### **步骤 3.** 编写示例代码

对于 XIAO ESP32-C5 上的 L LED，对应的引脚是 GPIO27，它通过低电平信号点亮。

- 将示例代码复制到 `led_blink.py` 文件中。

```py
from machine import Pin
import time

# Define GPIO27
led = Pin(27, Pin.OUT)

while True:
    # Low-level illumination
    led.value(0)
    print("LED ON")
    time.sleep(1) # Wait for 1 second

    # High-level extinction
    led.value(1)
    print("LED OFF")
    time.sleep(1) 
```

#### **步骤 4.** 运行代码

- 点击右上角显示的图标或按 F5 运行代码，LED 信息将被打印出来。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_14_1.png" style={{width:600, height:'auto'}}/></div><br/>

- 板载 L LED 将以 1 秒间隔闪烁。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/upload_2.gif" style={{width:400, height:'auto'}}/></div>

### 5 GHz Wi-Fi 连接示例

XIAO ESP-C5 支持 2.4 GHz 和 5 GHz 双频 Wi-Fi 6。此示例将演示连接到 5 GHz Wi-Fi 网络的效果。

- 创建一个名为 `wifi_connect.py` 的新文件，并将以下示例代码复制到其中。

```py
import network
import time


def connect_wifi(ssid, password):
    # Create a Station interface (STA_IF = client mode, connects to a router/AP)
    wlan = network.WLAN(network.STA_IF)

    # If already connected, return immediately
    if wlan.isconnected():
        print("Already connected before, skipping connection step.")
        print("Network config:", wlan.ifconfig())
        return True

    # Enable the Wi-Fi interface
    wlan.active(True)

    print(f"Connecting to network: {ssid} ...")
    wlan.connect(ssid, password)

    # Wait for connection with a timeout (e.g., 10 seconds)
    max_wait = 10
    while max_wait > 0:
        if wlan.isconnected():
            break
        max_wait -= 1
        print("Waiting for connection...")
        time.sleep(1)

    # Check connection result
    if wlan.isconnected():
        print("Connected successfully!")
        print("Network config (IP/Mask/Gateway/DNS):", wlan.ifconfig())

        # led.value(0)  # If you want to turn on an LED after connection succeeds, add code here
        return True
    else:
        print("Connection failed. Please check SSID or password.")
        return False


# ==========================================
# Main Program
# ==========================================

# Fill in your Wi-Fi SSID and password here
SSID = "YourWiFiName"
PASSWORD = "YourWiFiPassword"

# Call the function
connect_wifi(SSID, PASSWORD)
```

- 在您的环境中输入 5GHz WiFi 的 SSID 和 PASSWORD，然后运行代码，连接信息将被打印出来。

:::tip
在运行新的示例代码之前，您需要点击左上角的 **Stop** 图标或按 **Ctrl + F2** 退出之前的运行环境。
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_15.png" style={{width:600, height:'auto'}}/></div><br/>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/pio_6.png" style={{width:600, height:'auto'}}/></div><br/>

这证明了 **XIAO ESP32-C5** 连接到 5GHz WiFi 网络是可行的。

### BLE 示例

此示例将向您展示 **XIAO ESP32-C5** 的 BLE 功能，并演示如何使用 nRF Connect App 发现并连接到它。

- 创建一个名为 `BLE_connect.py` 的新文件，并将以下示例代码复制到其中。

<details>

<summary>BLE 连接参考代码</summary>

```py
import bluetooth
import random
import struct
import time
from machine import Pin
from micropython import const

# --- Configuration ---
# Define the LED pin (Using GPIO 27 as per your previous request)
# Active LOW: 0 = On, 1 = Off
LED_PIN = 27
DEVICE_NAME = "XIAO ESP32-C5-BLE"

# --- BLE Constants (UUIDs) ---
# We use standard UUIDs for simplicity, but you can use 128-bit custom UUIDs.
# 0x181A is "Environmental Sensing" Service
_IRQ_CENTRAL_CONNECT = const(1)
_IRQ_CENTRAL_DISCONNECT = const(2)
_IRQ_GATTS_WRITE = const(3)

_FLAG_READ = const(0x0002)
_FLAG_WRITE = const(0x0008)
_FLAG_NOTIFY = const(0x0010)

# Define a Service with one Characteristic (Read/Write/Notify)
# Service UUID: 0x181A
# Characteristic UUID: 0x2A6E (Temperature - just as an example)
_UART_UUID = bluetooth.UUID(0x181A)
_UART_TX = (
    bluetooth.UUID(0x2A6E),
    _FLAG_READ | _FLAG_WRITE | _FLAG_NOTIFY,
)
_UART_SERVICE = (
    _UART_UUID,
    (_UART_TX,),
)

# --- Helper: Advertising Payload Generator ---
def advertising_payload(limited_disc=False, br_edr=False, name=None, services=None, appearance=0):
    payload = bytearray()

    def _append(adv_type, value):
        nonlocal payload
        payload += struct.pack("BB", len(value) + 1, adv_type) + value

    _append(
        0x01,  # Flags
        struct.pack("B", (0x02 if not limited_disc else 0x01) | (0x04 if not br_edr else 0x00)),
    )

    if name:
        _append(0x09, name)  # Complete Local Name

    if services:
        for uuid in services:
            b = bytes(uuid)
            if len(b) == 2:
                _append(0x03, b)  # 16-bit Service Class UUIDs
            elif len(b) == 16:
                _append(0x06, b)  # 128-bit Service Class UUIDs

    if appearance:
        _append(0x19, struct.pack("<h", appearance))

    return payload

# --- BLE Class ---
class BLEPeripheral:
    def __init__(self, ble, name="ESP32"):
        self._ble = ble
        self._ble.active(True)
        self._ble.irq(self._irq)

        # Register services
        ((self._handle_tx,),) = self._ble.gatts_register_services((_UART_SERVICE,))

        self._connections = set()
        self._payload = advertising_payload(name=name, services=[_UART_UUID])

        # Initialize LED
        self._led = Pin(LED_PIN, Pin.OUT)
        self._led.value(1) # Turn OFF initially (High)

        self._advertise()
        print(f"BLE Active. Device Name: {name}")

    def _irq(self, event, data):
        # Track connections so we can send notifications
        if event == _IRQ_CENTRAL_CONNECT:
            conn_handle, _, _ = data
            print(f"New connection: {conn_handle}")
            self._connections.add(conn_handle)
            self._led.value(0) # Turn LED ON (Active Low)

        elif event == _IRQ_CENTRAL_DISCONNECT:
            conn_handle, _, _ = data
            print(f"Disconnected: {conn_handle}")
            self._connections.remove(conn_handle)
            self._led.value(1) # Turn LED OFF
            # Start advertising again to allow new connections
            self._advertise()

        elif event == _IRQ_GATTS_WRITE:
            conn_handle, value_handle = data
            value = self._ble.gatts_read(value_handle)
            if value_handle == self._handle_tx:
                print(f"Received write request: {value}")
                # You can parse 'value' here to control hardware

    def update_value(self, data):
        # Write the local value to the handle
        self._ble.gatts_write(self._handle_tx, data)
        # Notify all connected centrals
        for conn_handle in self._connections:
            self._ble.gatts_notify(conn_handle, self._handle_tx, data)

    def _advertise(self):
        self._ble.gap_advertise(100, adv_data=self._payload)
        print("Advertising...")

# --- Main Execution ---
def demo():
    ble = bluetooth.BLE()
    p = BLEPeripheral(ble, name=DEVICE_NAME)

    counter = 0

    try:
        while True:
            # Only update value if connected, to save power/cpu (optional)
            if p._connections:
                # Create a string data: "Count: 1", "Count: 2"...
                data_str = f"Count: {counter}"
                print(f"Sending notification: {data_str}")

                # Send data (must be bytes)
                p.update_value(data_str.encode('utf-8'))

                counter += 1

            time.sleep(2) # Wait 2 seconds

    except KeyboardInterrupt:
        print("Stopping...")
        ble.active(False)

if __name__ == "__main__":
    demo()
```

</details>

- 然后运行代码，在您的手机上打开 nRF Connect 应用，您将发现名为 **XIAO ESP32-C5-BLE** 的设备。连接成功后，板载 L LED 将点亮，同时传输计数信息也将被打印出来。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/micropython_16.png" style={{width:800, height:'auto'}}/></div><br/>

<div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%'}}>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/ble_1.jpg" style={{width:'90%', height:'auto'}}/></div>
  <div style={{flex:1}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/ble_2.jpg" style={{width:'90%', height:'auto'}}/></div>
</div><br/>

恭喜！完成上述所有示例后，我们相信您已经掌握了如何使用 Thonny IDE 在 **XIAO ESP32-C5** 上使用 MicroPython 开发项目。我们期待看到您更多的创作！

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
