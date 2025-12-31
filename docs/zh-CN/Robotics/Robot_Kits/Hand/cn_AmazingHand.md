---
description: 构建和控制 AmazingHand，一个低成本、开源、8 自由度、3D 可打印的机械手。
title: AmazingHand 
keywords:
- Lerobot
- Huggingface
- Hand
- Robotics
- 3D Printing
- Open Source
- Humanoid Robot
- Arduino
- Python
slug: /cn/hand_amazinghand
last_update:
  date: 9/10/2025
  author: TienjuiWong

---

<div align="center">
  <img width="600" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-100063642_amazing_hand_right-1_1.jpg"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Amazing-Hand-Right-Hand-The-Open-Source-Robotic-Hand-Developer-Kit.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
</a>
</div>

**AmazingHand** 是一个开源机械手项目，旨在让人形机器人操作的研究和实验变得易于获取且价格合理。传统的机械手往往价格昂贵，并且依赖复杂、笨重的前臂执行器。AmazingHand 通过将所有电机直接集成到紧凑的 3D 可打印设计中来解决这个问题。

其设计灵感来自"ILDA hand"研究项目，但经过简化以降低学生、爱好者和研究人员的入门门槛。腕部接口专为 Reachy2 机器人设计，但可以轻松适配任何平台。

<div align="center">
  <img width ="600" src="https://raw.githubusercontent.com/pollen-robotics/AmazingHand/main/assets/Patterns_Overview.jpg"/>  
</div>

:::tip[您将学到什么]

- AmazingHand 的关键特性和架构。
- 在哪里找到构建自己机械手的所有资源（BOM、CAD、指南）。
- 如何使用 Python 或 Arduino 设置控制。
- 如何运行基本演示以及在哪里找到更高级的示例。

:::

## 关键特性和规格

AmazingHand 将令人印象深刻的功能打包到轻量级且易于获取的包装中。

| 特性               | 规格                                                              |
| :-------------------- | :------------------------------------------------------------------------- |
| **自由度**| **8-DOF**（4 个手指，每个手指 2 自由度）                                    |
| **驱动** | 并联机构，每个手指配备 2 个 Feetech SCS0009 舵机               |
| **运动** | 通过差动电机运动实现屈伸和内收/外展    |
| **构造** | 完全 3D 可打印，具有刚性"骨骼"和柔性 TPU 外壳              |
| **重量** | \~400g                                                                      |
| **控制接口** | 串行总线           |
| **许可证** | 代码：**Apache 2.0**，机械设计：**CC BY 4.0** |

每个手指由两个并联的电机驱动。这种巧妙的设计通过控制舵机的差动运动，既可以实现弯曲（屈伸）运动，也可以实现左右（内收/外展）运动。手掌也是一个柔性部件，可以更安全、更顺应地抓取物体。

<div align="center">
  <img width ="600" src="https://raw.githubusercontent.com/pollen-robotics/AmazingHand/main/assets/Hand_Overview.jpg"/>  
</div>

<div align="center">
  <img width ="600" src="https://raw.githubusercontent.com/pollen-robotics/AmazingHand/main/assets/Both_Hands-IDs.jpg"/>  
</div>

## 构建资源 🛠️

构建自己的 AmazingHand 所需的一切都可以在项目的 GitHub 仓库中找到。

- **物料清单（BOM）：** 所有必需的电子和硬件组件的完整列表可以在这里找到：

  - [**AmazingHand BOM**](https://docs.google.com/spreadsheets/d/1QH2ePseqXjAhkWdS9oBYAcHPrxaxkSRCgM_kOK0m52E/edit?gid=1269903342#gid=1269903342)

- **CAD 文件和 3D 打印：** 提供所有 STL 和 STEP 文件。请注意，虽然手指设计是通用的，但一些手掌组件是专门为左手或右手设计的。

  - **CAD 文件：** [**CAD 文件夹链接**](https://github.com/pollen-robotics/AmazingHand/tree/main/cad)
  - **3D 打印指南：** [**零件打印说明**](https://raw.githubusercontent.com/pollen-robotics/AmazingHand/main/docs/AmazingHand_3DprintingTips.pdf)

- **组装指南：** 详细的分步组装指南。

  - [**组装指南 PDF**](https://raw.githubusercontent.com/pollen-robotics/AmazingHand/main/docs/AmazingHand_Assembly.pdf)

## 控制方法

您有两个主要选项来通过串行总线控制机械手的舵机。

1. **MPU：** 在主机（如树莓派或 PC）上使用 Python 脚本，通过串行总线驱动器（例如，[总线舵机驱动板](https://www.seeedstudio.com/Bus-Servo-Driver-Board-for-XIAO-p-6413.html)）连接。这非常适合与更大的机器人框架（如 ROS）集成。

2. **MCU：** 使用像 Arduino 这样的微控制器配合[总线舵机驱动板](https://www.seeedstudio.com/Bus-Servo-Driver-Board-for-XIAO-p-6413.html)。这对于独立项目或当需要专用微控制器处理实时控制时是理想的选择。

为两种方法都提供了校准脚本，以帮助您在组装过程中正确设置手指。

## 运行演示

组装完成后，您可以使用提供的演示程序测试您的 AmazingHand。

:::caution[需要外部电源]
机械手中的八个舵机需要稳定的电源。一个简单的 5V / 2A 直流适配器配备插头连接器就足够了。**不要尝试直接从计算机的 USB 端口为舵机供电。**
:::

### 基本演示

组装完成后，您可以使用提供的演示程序测试您的 AmazingHand。首先，将项目仓库克隆到您的计算机以获取所有必要的代码：

```bash
git clone https://github.com/pollen-robotics/AmazingHand
cd AmazingHand
```

:::caution[需要外部电源]
机械手中的八个舵机需要稳定的电源。一个简单的 5V / 2A 直流适配器配备插头连接器就足够了。**不要尝试直接从计算机的 USB 端口为舵机供电。**
:::

#### Python 示例

`PythonExample` 目录包含几个用于测试和控制的有用脚本。导航到此目录（`cd PythonExample`）来运行它们。

- **`AmazingHand_Demo.py`**：这是主要演示。它让机械手循环执行几个预编程的手势。这是确保一切正常工作的完美首次测试。
- **`AmazingHand_Demo_Both.py`**：专门用于控制连接到同一串行总线的左右两只手的演示。
- **`AmazingHand_FingerTest.py`**：测试单个手指运动的脚本，在组装过程中调试时非常有用。
- **`AmazingHand_Hand_FingerMiddlePos.py`**：用于校准的实用脚本，将手指设置到中性的中间位置。

要运行主要演示，请在 `PythonExample` 文件夹内执行以下命令：

```bash
python3 AmazingHand_Demo.py
```

#### Arduino 示例

对于独立控制，`ArduinoExample` 目录包含可以直接上传到微控制器的代码。

- **`Amazing_Hand_Demo.ino`**：主要演示代码，让机械手循环执行与 Python 版本相同的手势。
- **`Amazing_Hand-Finger_Test.ino`**：测试单个手指的简单代码，对校准和调试硬件连接很有用。

要使用这些代码，在 Arduino IDE 中打开 `.ino` 文件，确保已安装所需的 `SCServo` 库，然后编译并上传到您的 Arduino 板。

### 应变片遥控演示

:::info 🖐️ 直观的基于力的控制
这个高级演示允许对机械手的抓握和手势进行直观的基于力的控制。
:::

**操作原理**

这个演示的核心是创建一个数据手套，将您的手指运动转换为 **AmazingHand** 的命令。我们通过利用**应变片**的电学特性来实现这一点，应变片在弯曲时会改变其电阻。

<div style={{
  maxWidth: '504px',
  margin: 'auto',
  border: '1px solid #ddd',
  borderRadius: '8px',
  overflow: 'hidden'
}}>
  <iframe
    src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7359424679310233601?compact=1"
    height="399"
    width="504"
    frameborder="0"
    allowfullscreen=""
    title="Embedded post"
    style={{
      display: 'block',
      width: '100%',
      height: '399px'
    }}>
  </iframe>
</div>

工作流程如下：

1. **感知手指弯曲**：我们将应变片附着到手套或手指上。当您弯曲手指时，应变片随之弯曲，导致其电阻发生可测量的变化。

2. **数据采集**：使用 **Seeed Studio XIAO ESP32-S3** 微控制器读取这些电阻变化。每个应变片电路连接到 ESP32 的一个**模数转换器（ADC）**引脚，将模拟电阻信号转换为数字数值（通常从 0 到 4095）。

3. **串行通信**：ESP32 持续通过 USB 串口将这些数字 ADC 读数发送到主机。

4. **处理和映射**：在主机上运行的 Python 脚本监听串口，接收原始 ADC 值。然后将这些值从 ADC 的范围（0-4095）映射到 AmazingHand 所需的舵机角度范围。

5. **机械手控制**：最后，脚本将计算出的目标角度发送到 AmazingHand 的控制器，使机械手指实时模仿您自己手指的运动。

这创建了一个完整的闭环系统，您的物理手势直接指挥机械手。

<details>
<summary><strong>点击展开代码和设置说明</strong></summary>

要运行此演示，您需要将数据采集固件刷入 ESP32 并在主机上运行 Python 控制脚本。

1. XIAO ESP32-S3 固件

此固件负责读取连接到 ADC 引脚的应变片的值，并以"value1,value2"格式通过串口发送。

```cpp title="XIAO_ESP32_S3_C3_Firmware.ino"
/**
 * @file    XIAO_ESP32_Universal_Firmware_EN.ino
 * @brief   Firmware for XIAO ESP32-S3 and C3 to read 4 ADC channels and output 2 processed values for a Python script.
 * @author  TienjuiWong
 * @version 1.2
 * @date    2025-09-10
 *
 * @details
 * - Platform Compatibility: Seeed Studio XIAO ESP32-S3 & XIAO ESP32-C3.
 * - Functionality:
 * 1. Reads analog signals from pins D0, D1, and D2.
 * 2. Averages these three readings to create a single control value for the main fingers.
 * 3. Reads the analog signal from pin D3 for independent thumb control.
 * 4. Transmits data over USB Serial in the format "fingers_avg,thumb_val\n".
 * 5. The communication baud rate is set to 115200 to match the host script.
 */

// --- Pin Definitions ---
// These pin definitions are valid ADC pins for both the XIAO ESP32-S3 and C3.
// Pins for the three main fingers (e.g., Index, Middle, Ring).
const int FINGER_SENSOR_1_PIN = D0;
const int FINGER_SENSOR_2_PIN = D1;
const int FINGER_SENSOR_3_PIN = D2;

// Dedicated pin for the thumb.
const int THUMB_SENSOR_PIN    = D3;


void setup() {
  // Initialize serial communication at 115200 baud to match the Python script.
  Serial.begin(115200);

  // Wait for the serial port to initialize. This is good practice.
  while (!Serial) {
    delay(10); 
  }

  // Set the ADC resolution to 12-bit for a 0-4095 reading range.
  // This setting is supported by both the ESP32-S3 and ESP32-C3.
  analogReadResolution(12);
}

void loop() {
  // 1. Read the values from the three main finger sensors.
  int fingerVal1 = analogRead(FINGER_SENSOR_1_PIN);
  int fingerVal2 = analogRead(FINGER_SENSOR_2_PIN);
  int fingerVal3 = analogRead(FINGER_SENSOR_3_PIN);

  // 2. Calculate the average of the main finger values.
  // This single value will control the group of fingers in the Python script.
  int avgFingersValue = (fingerVal1 + fingerVal2 + fingerVal3) / 3;

  // 3. Read the independent value for the thumb sensor.
  int thumbValue = analogRead(THUMB_SENSOR_PIN);

  // 4. Send the processed data in the required "value1,value2" format.
  Serial.print(avgFingersValue);
  Serial.print(",");
  Serial.println(thumbValue); // println automatically adds the required newline character.

  // 5. Add a short delay to maintain a stable data stream and allow time for processing on the receiver.
  delay(50); 
}
```

2. Python 控制服务器

```python title="control.py"
import time
import numpy as np
import serial  # <--- Added import for serial library
from rustypot import Scs0009PyController

# --- 1. Define Finger Configuration and Servo Parameters ---
# The FINGERS list defines the mapping between fingers and their corresponding servos.
FINGERS = [
    {'name': 'Index',  'm1_id': 1, 'm2_id': 2},
    {'name': 'Middle', 'm1_id': 3, 'm2_id': 4},
    {'name': 'Ring',   'm1_id': 5, 'm2_id': 6},
    {'name': 'Thumb',  'm1_id': 7, 'm2_id': 8}, # Thumb is controlled by an independent ADC channel
]

# Defines the motion range: an offset of -30 degrees when open, and +90 degrees when closed.
# The servos will move in real-time within this [-30, 90] degree range based on the ADC value.
CLOSE_ANGLE_OFFSET = 90
OPEN_ANGLE_OFFSET = -30 # Using a negative value more intuitively represents the offset in the opening direction

# --- 2. Initialize Controllers ---
# !!! NOTE: Please ensure the serial ports for the hand controller and the ESP32 are correct !!!
SERVO_CONTROLLER_PORT = "/dev/ttyACM0"      # Serial port for the robotic hand controller
ESP32_ADC_PORT = "/dev/ttyACM1"            # Serial port for the ESP32 development board

try:
    # Initialize the robotic hand controller
    c = Scs0009PyController(
        serial_port=SERVO_CONTROLLER_PORT,
        baudrate=1000000,
        timeout=0.5,
    )
    # Initialize the serial port for receiving data from ESP32
    adc_port = serial.Serial(ESP32_ADC_PORT, 115200, timeout=1)
    # Flush the input buffer to prevent reading old data
    adc_port.flushInput()
except serial.SerialException as e:
    print(f"Serial Error: {e}")
    print("Please confirm your serial port settings are correct and the devices are connected.")
    exit()


def map_value(x, in_min, in_max, out_min, out_max):
    """
    Core function: Linearly maps a value from one range to another.
    Used to map the ADC's 0-4095 range to the servo angle offset range
    from OPEN_ANGLE_OFFSET to CLOSE_ANGLE_OFFSET.
    """
    # Avoid division by zero
    if in_max == in_min:
        return out_min
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min


def main():
    """Main function: Starts the motors and enters the real-time remote control loop."""
    # Get all servo IDs to be controlled from the configuration
    all_servo_ids = [id for finger in FINGERS for id in (finger['m1_id'], finger['m2_id'])]

    print(f"Servo IDs to be controlled: {all_servo_ids}")
    print(f"Connected to Hand Controller: {SERVO_CONTROLLER_PORT}")
    print(f"Connected to ADC Data Source (ESP32): {ESP32_ADC_PORT}")

    try:
        # -- Start and initialize all motors --
        enable_values = [1] * len(all_servo_ids)
        c.sync_write_torque_enable(all_servo_ids, enable_values)
        print("Torque enabled for all motors.")

        speeds = [6] * len(all_servo_ids) # 6 is generally a fast speed
        c.sync_write_goal_speed(all_servo_ids, speeds)
        print("All motor speeds have been set.")
        time.sleep(0.5)

        # -- Enter real-time remote control main loop --
        print("\nEntering real-time control mode... Press Ctrl+C to exit.")
        while True:
            # Read only when data is available in the serial buffer to avoid blocking
            if adc_port.in_waiting > 0:
                # 1. Read and parse the serial data from the ESP32
                line = adc_port.readline().decode('utf-8').strip()

                # Must ensure the data format is "value1,value2"
                if ',' not in line:
                    continue # If the format is incorrect, skip this iteration

                try:
                    val1_str, val2_str = line.split(',')
                    adc_val_fingers = int(val1_str) # The first value controls the main three fingers
                    adc_val_thumb = int(val2_str)   # The second value controls the thumb
                except ValueError:
                    print(f"Warning: Could not parse data '{line}', skipping.")
                    continue

                # 2. Map the ADC values to angle offsets
                # Map ADC range 0-4095 to angle range -30 (Open) to +90 (Close)
                fingers_offset = map_value(adc_val_fingers, 0, 4095, OPEN_ANGLE_OFFSET, CLOSE_ANGLE_OFFSET)
                thumb_offset = map_value(adc_val_thumb, 0, 4095, OPEN_ANGLE_OFFSET, CLOSE_ANGLE_OFFSET)

                # (Optional) Print the current status for debugging
                # print(f"ADC: {adc_val_fingers},{adc_val_thumb} -> Angle Offset: Fingers={fingers_offset:.1f}, Thumb={thumb_offset:.1f}")

                # 3. Prepare the synchronous write command
                all_ids = []
                positions_deg = []
                for finger in FINGERS:
                    all_ids.extend([finger['m1_id'], finger['m2_id']])

                    # Apply the corresponding angle offset based on the finger's name
                    if finger['name'] == 'Thumb':
                        current_offset = thumb_offset
                    else: # Index, Middle, Ring
                        current_offset = fingers_offset

                    # M1 and M2 move in opposite directions from the 0-degree center
                    positions_deg.append(0 + current_offset)
                    positions_deg.append(0 - current_offset)

                # 4. Convert units and send the command to the hand
                positions_rad = np.deg2rad(positions_deg).tolist()
                c.sync_write_goal_position(all_ids, positions_rad)

    except KeyboardInterrupt:
        print("\nUser interrupt detected (Ctrl+C)...")

    finally:
        # Before the program ends, safely disable the torque on all motors
        print("Disabling torque on all motors...")
        if 'all_servo_ids' in locals() and all_servo_ids:
            disable_values = [0] * len(all_servo_ids)
            c.sync_write_torque_enable(all_servo_ids, disable_values)
        print("Torque disabled. Program terminated.")


if __name__ == '__main__':
    main()
```

</details>

### MediaPipe 手部追踪演示

通过镜像您自己手部的动作来实时控制机械手，使用简单的网络摄像头和 Google 的 MediaPipe 框架进行追踪。这个高级演示使用 Python 后端来运行复杂的手部追踪 AI 模型，而简单的 HTML 前端捕获您的摄像头画面。两者通过 WebSocket 进行通信，只需将您的手展示给摄像头，就能实现对 AmazingHand 的流畅、低延迟控制。

<div style={{
  position: 'relative',
  paddingBottom: '56.25%', // 16:9 aspect ratio
  height: 0,
  overflow: 'hidden',
}}>
  <div class="video-container">
  <iframe
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    }}
    src="https://www.youtube.com/embed/GwxKmJLR0Mk?start=1645"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
  </div>
</div>

要运行此演示，您需要两个文件：用于浏览器界面的 `index.html` 和用于服务器端处理的 `backend.py`。

**步骤 1：保存代码文件**

首先，在同一目录中创建两个必需的文件。将 HTML 代码复制到名为 `index.html` 的文件中，将 Python 代码复制到名为 `backend.py` 的文件中。

- **`index.html`**：此文件创建简单的网页，请求访问您的网络摄像头并将视频流传输到后端。
- **`backend.py`**：此脚本启动本地 WebSocket 服务器。它接收视频流，使用 MediaPipe 库检测每帧中的手部关键点，然后将这些关键点位置转换为 AmazingHand 的电机命令。

**步骤 2：运行后端服务器**

打开终端或命令提示符，导航到保存文件的目录，然后运行以下命令启动 Python 服务器：

```bash
python backend.py
```

您应该在终端中看到一条消息，表明服务器已启动并正在等待连接，例如：`WebSocket server started on ws://localhost:8765`。

**步骤 3：启动前端**

最后，在文件资源管理器中导航到同一目录，双击 `index.html` 文件。它将在您的默认网络浏览器中打开。浏览器可能会请求使用您的网络摄像头的权限；请允许它。

页面加载后，您将看到您的摄像头画面。Python 脚本将开始处理视频，您可以通过在摄像头前移动手部来控制 AmazingHand。

<Details>

```python title="backend.py"
import asyncio
import websockets
import serial
import json
import time
import numpy as np
from rustypot import Scs0009PyController

# --- 1. Configuration ---

# Dexterous hand finger configuration (Pinky finger is not controlled)

FINGERS = [
    {'name': 'Index',  'm1_id': 1, 'm2_id': 2},
    {'name': 'Middle', 'm1_id': 3, 'm2_id': 4},
    {'name': 'Ring',   'm1_id': 5, 'm2_id': 6},
    {'name': 'Thumb',  'm1_id': 7, 'm2_id': 8},
]

# Servo motion range definition

CLOSE_ANGLE_OFFSET = 90
OPEN_ANGLE_OFFSET = -30

# Gesture recognition angle input range (set based on actual values observed from the front-end)

# Approximately 10-20 degrees when extended, 140-160 degrees when flexed

# We are setting a relatively tolerant range

GESTURE_ANGLE_MIN = 20  # Corresponds to OPEN_ANGLE_OFFSET
GESTURE_ANGLE_MAX = 160 # Corresponds to CLOSE_ANGLE_OFFSET

# !!! NOTE: Please ensure the serial port for the hand controller is correct

# On Windows, it might be "COM3", "COM4", etc

# On Linux/Mac, it might be "/dev/ttyACM0", etc

SERVO_CONTROLLER_PORT = "/dev/ttyACM0"

# --- 2. Initialize Controller ---

try:
    c = Scs0009PyController(
        serial_port=SERVO_CONTROLLER_PORT,
        baudrate=1000000,
        timeout=0.5,
    )
    print(f"Successfully connected to the hand controller: {SERVO_CONTROLLER_PORT}")
except serial.SerialException as e:
    print(f"Serial Error: {e}")
    print("Please confirm your serial port settings are correct and the device is connected.")
    exit()

def map_value(x, in_min, in_max, out_min, out_max):
    """
    Core function: Linearly maps a value from one range to another.
    It also clamps the input value to the source range to prevent exceeding the target range.
    """
    # Clamp the input value to the source range
    x = max(in_min, min(x, in_max))
    # Avoid division by zero
    if in_max == in_min:
        return out_min
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min

def setup_servos(controller, finger_config):
    """Starts and initializes all motors."""
    all_servo_ids = [id for finger in finger_config for id in (finger['m1_id'], finger['m2_id'])]
    print(f"Servo IDs to be controlled: {all_servo_ids}")

    enable_values = [1] * len(all_servo_ids)
    controller.sync_write_torque_enable(all_servo_ids, enable_values)
    print("Torque enabled for all motors.")

    speeds = [6] * len(all_servo_ids) # 6 is generally a fast speed
    controller.sync_write_goal_speed(all_servo_ids, speeds)
    print("All motor speeds have been set.")
    time.sleep(0.5)
    return all_servo_ids

async def handler(websocket, controller):
    """WebSocket server logic: receives data and controls the servos."""
    print("Web front-end connected.")
    try:
        async for message in websocket:
            try:
                # 1. Parse the JSON data received from the front-end
                data = json.loads(message)

                # 2. Calculate the target angle offset for each finger
                thumb_offset = map_value(data.get('thumb', 0), GESTURE_ANGLE_MIN, GESTURE_ANGLE_MAX, OPEN_ANGLE_OFFSET, CLOSE_ANGLE_OFFSET)
                index_offset = map_value(data.get('index', 0), GESTURE_ANGLE_MIN, GESTURE_ANGLE_MAX, OPEN_ANGLE_OFFSET, CLOSE_ANGLE_OFFSET)
                middle_offset = map_value(data.get('middle', 0), GESTURE_ANGLE_MIN, GESTURE_ANGLE_MAX, OPEN_ANGLE_OFFSET, CLOSE_ANGLE_OFFSET)
                ring_offset = map_value(data.get('ring', 0), GESTURE_ANGLE_MIN, GESTURE_ANGLE_MAX, OPEN_ANGLE_OFFSET, CLOSE_ANGLE_OFFSET)

                # 3. Prepare the synchronous write command
                all_ids = []
                positions_deg = []

                offsets = {
                    'Thumb': thumb_offset,
                    'Index': index_offset,
                    'Middle': middle_offset,
                    'Ring': ring_offset,
                }

                for finger in FINGERS:
                    finger_name = finger['name']
                    current_offset = offsets.get(finger_name, 0)
                    all_ids.extend([finger['m1_id'], finger['m2_id']])
                    positions_deg.append(0 + current_offset)
                    positions_deg.append(0 - current_offset)

                # 4. Convert units and send the command using the passed controller object
                positions_rad = np.deg2rad(positions_deg).tolist()
                controller.sync_write_goal_position(all_ids, positions_rad)

            except json.JSONDecodeError:
                print(f"Warning: Received non-JSON data: {message}")
            except Exception as e:
                print(f"Error processing message: {e}")

    except websockets.exceptions.ConnectionClosed:
        print("Web front-end disconnected.")

async def main():
    """Main function: Initializes servos and starts the WebSocket server."""
    # 'c' is the controller instance initialized in the global scope
    all_servo_ids = setup_servos(c, FINGERS)

    # Use a lambda function to pass the controller instance 'c' to the handler
    handler_with_controller = lambda ws, path: handler(ws, c)

    try:
        # Use the new handler_with_controller
        async with websockets.serve(handler_with_controller, "0.0.0.0", 8765):
            print("\nWebSocket server started at ws://localhost:8765")
            print("Waiting for the web front-end to connect...")
            await asyncio.Future()  # Run forever
    except KeyboardInterrupt:
        print("\nUser interrupt detected (Ctrl+C)...")
    finally:
        # Before the program exits, safely disable the torque on all motors
        print("Disabling torque on all motors...")
        if all_servo_ids:
            disable_values = [0] * len(all_servo_ids)
            c.sync_write_torque_enable(all_servo_ids, disable_values)
        print("Torque disabled. Program terminated.")

if **name** == '**main**':
    asyncio.run(main())
```

</Details>

<Details>

```html title="index.html"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Real-time Hand Tracking & Finger Angle Detection</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-color: #1a1a2e;
            --primary-color: #0f3460;
            --accent-color: #3f72af;
            --highlight-color: #e94560;
            --text-color: #dbe2ef;
            --success-color: #28a745;
            --error-color: #dc3545;
        }
        body {
            font-family: 'Roboto', sans-serif;
            margin: 0;
            padding: 2rem;
            background-color: var(--bg-color);
            color: var(--text-color);
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            box-sizing: border-box;
        }
        h1 {
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--text-color);
            margin-bottom: 0.5rem;
            text-shadow: 0 0 10px rgba(63, 114, 175, 0.5);
        }
        p {
            color: #a9b3c9;
            margin-bottom: 2rem;
            font-weight: 300;
        }
        .main-container {
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            justify-content: center;
            align-items: flex-start;
            width: 100%;
            max-width: 1600px;
        }
        #video-container {
            position: relative;
            flex-grow: 1;
            max-width: 1280px;
            aspect-ratio: 16 / 9;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 0 25px rgba(15, 52, 96, 0.8);
            border: 2px solid var(--accent-color);
            background-color: #000;
        }
        #webcam, #outputCanvas {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transform: scaleX(-1);
        }
        #angle-output {
            background: rgba(15, 52, 96, 0.5);
            backdrop-filter: blur(10px);
            border: 1px solid var(--accent-color);
            border-radius: 16px;
            width: 320px;
            padding: 1.5rem;
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
            flex-shrink: 0;
        }
        #angle-output h3 {
            margin-top: 0;
            color: var(--text-color);
            border-bottom: 1px solid var(--accent-color);
            padding-bottom: 1rem;
            margin-bottom: 1.5rem;
            text-align: center;
            font-size: 1.25rem;
            font-weight: 400;
        }
        .finger-angle {
            margin-bottom: 1.25rem;
        }
        .finger-label {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.5rem;
            font-size: 1rem;
        }
        .progress-bar-container {
            width: 100%;
            height: 12px;
            background-color: rgba(0, 0, 0, 0.3);
            border-radius: 6px;
            overflow: hidden;
        }
        .progress-bar {
            width: 0%;
            height: 100%;
            background: linear-gradient(90deg, var(--accent-color), var(--highlight-color));
            border-radius: 6px;
            transition: width 0.1s linear;
        }
        .loading {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 1.5em;
            text-align: center;
            padding: 20px;
            background-color: rgba(0,0,0,0.7);
            border-radius: 10px;
        }
        #socket-status {
            display: flex;
            align-items: center;
            gap: 8px;
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 8px 16px;
            border-radius: 20px;
            color: white;
            font-size: 0.9em;
            font-weight: 500;
            transition: all 0.3s ease;
            backdrop-filter: blur(5px);
        }
        #socket-status::before {
            content: '';
            width: 10px;
            height: 10px;
            border-radius: 50%;
            display: inline-block;
            transition: background-color 0.3s ease;
        }
        #socket-status.connected {
            background-color: rgba(40, 167, 69, 0.3);
            border: 1px solid var(--success-color);
        }
        #socket-status.connected::before { background-color: var(--success-color); }
        #socket-status.disconnected {
            background-color: rgba(220, 53, 69, 0.3);
            border: 1px solid var(--error-color);
        }
        #socket-status.disconnected::before { background-color: var(--error-color); }
    </style>
</head>
<body>
    <div id="socket-status" class="disconnected"><span>Disconnected</span></div>
    <h1>Robotic Hand Visual Teleoperation</h1>
    <p>Present your palm to the camera to begin real-time control.</p>
    <div class="main-container">
        <div id="video-container">
            <video id="webcam" autoplay playsinline></video>
            <canvas id="outputCanvas"></canvas>
            <div id="loading-message" class="loading">Initializing...</div>
        </div>
        <div id="angle-output">
            <h3>Finger Bending Status</h3>
            <div class="finger-angle">
                <div class="finger-label"><span>👍 Thumb</span><strong id="thumb-angle-value">--°</strong></div>
                <div class="progress-bar-container"><div id="thumb-progress" class="progress-bar"></div></div>
            </div>
            <div class="finger-angle">
                <div class="finger-label"><span>☝️ Index Finger</span><strong id="index-angle-value">--°</strong></div>
                <div class="progress-bar-container"><div id="index-progress" class="progress-bar"></div></div>
            </div>
            <div class="finger-angle">
                <div class="finger-label"><span>🖕 Middle Finger</span><strong id="middle-angle-value">--°</strong></div>
                <div class="progress-bar-container"><div id="middle-progress" class="progress-bar"></div></div>
            </div>
            <div class="finger-angle">
                <div class="finger-label"><span>💍 Ring Finger</span><strong id="ring-angle-value">--°</strong></div>
                <div class="progress-bar-container"><div id="ring-progress" class="progress-bar"></div></div>
            </div>
            <div class="finger-angle">
                <div class="finger-label"><span>- Pinky (Not Controlled)</span><strong id="pinky-angle-value">--°</strong></div>
                <div class="progress-bar-container"><div id="pinky-progress" class="progress-bar"></div></div>
            </div>
        </div>
    </div>

    <script type="module">
        import { HandLandmarker, FilesetResolver, DrawingUtils } from "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest";

        const video = document.getElementById("webcam");
        const canvasElement = document.getElementById("outputCanvas");
        const canvasCtx = canvasElement.getContext("2d");
        const loadingMessage = document.getElementById("loading-message");
        const socketStatus = document.querySelector("#socket-status span");

        let handLandmarker;
        let lastVideoTime = -1;
        let socket;

        function setupWebSocket() {
            socket = new WebSocket('ws://127.0.0.1:8765');
            const statusIndicator = document.getElementById("socket-status");
            socket.onopen = () => {
                console.log("Successfully connected to the local WebSocket server.");
                socketStatus.textContent = "Connected";
                statusIndicator.className = "connected";
            };
            socket.onclose = () => {
                console.log("Connection to the WebSocket server has been closed.");
                socketStatus.textContent = "Disconnected";
                statusIndicator.className = "disconnected";
            };
            socket.onerror = () => {
                console.error("WebSocket connection error.");
                socketStatus.textContent = "Connection Error";
                statusIndicator.className = "disconnected";
            };
        }

        async function createHandLandmarker() {
            try {
                const vision = await FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm");
                handLandmarker = await HandLandmarker.createFromOptions(vision, {
                    baseOptions: {
                        modelAssetPath: `https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task`,
                        delegate: "GPU"
                    },
                    runningMode: "VIDEO",
                    numHands: 1
                });
            } catch (error) {
                throw new Error("Failed to load hand gesture model. Please check your network connection.");
            }
        }

        async function setupWebcam() {
            if (!navigator.mediaDevices?.getUserMedia) throw new Error("Browser does not support camera access.");
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: { width: 1280, height: 720 } });
                video.srcObject = stream;
                video.addEventListener("loadeddata", () => {
                    loadingMessage.style.display = 'none';
                    predictWebcam();
                });
            } catch (err) {
                throw new Error("Failed to access camera, please check permissions.");
            }
        }

        function predictWebcam() {
            if (!handLandmarker) {
                requestAnimationFrame(predictWebcam);
                return;
            }
            const nowInMs = Date.now();
            if (video.currentTime !== lastVideoTime) {
                lastVideoTime = video.currentTime;
                const results = handLandmarker.detectForVideo(video, nowInMs);

                canvasElement.width = video.videoWidth;
                canvasElement.height = video.videoHeight;
                canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);

                if (results.landmarks?.length) {
                    const drawingUtils = new DrawingUtils(canvasCtx);
                    for (const landmarks of results.landmarks) {
                        drawingUtils.drawConnectors(landmarks, HandLandmarker.HAND_CONNECTIONS, { color: "#00FF00", lineWidth: 5 });
                        drawingUtils.drawLandmarks(landmarks, { color: "#FF0000", radius: 5 });
                        calculateAndSendAngles(landmarks);
                    }
                }
            }
            requestAnimationFrame(predictWebcam);
        }

        function calculateAndSendAngles(landmarks) {
            const getAngle = (p1, p2, p3) => {
                const vec1 = { x: p1.x - p2.x, y: p1.y - p2.y, z: p1.z - p2.z };
                const vec2 = { x: p3.x - p2.x, y: p3.y - p2.y, z: p3.z - p2.z };
                const dot = vec1.x * vec2.x + vec1.y * vec2.y + vec1.z * vec2.z;
                const mag1 = Math.sqrt(vec1.x**2 + vec1.y**2 + vec1.z**2);
                const mag2 = Math.sqrt(vec2.x**2 + vec2.y**2 + vec2.z**2);
                const cosTheta = dot / (mag1 * mag2);
                return Math.round(Math.acos(Math.min(1, Math.max(-1, cosTheta))) * 180 / Math.PI);
            };

            const angles = {
                index: 180 - getAngle(landmarks[0], landmarks[5], landmarks[8]),
                middle: 180 - getAngle(landmarks[0], landmarks[9], landmarks[12]),
                ring: 180 - getAngle(landmarks[0], landmarks[13], landmarks[16]),
                thumb: 180 - getAngle(landmarks[2], landmarks[3], landmarks[4]),
                pinky: 180 - getAngle(landmarks[0], landmarks[17], landmarks[20])
            };

            const updateFingerUI = (fingerName, angle) => {
                const percentage = Math.max(0, Math.min(100, (angle / 180) * 100));
                document.getElementById(`${fingerName}-angle-value`).textContent = `${angle}°`;
                document.getElementById(`${fingerName}-progress`).style.width = `${percentage}%`;
            };

            Object.entries(angles).forEach(([key, value]) => updateFingerUI(key, value));

            if (socket?.readyState === WebSocket.OPEN) {
                const { pinky, ...dataToSend } = angles; // Exclude pinky finger
                socket.send(JSON.stringify(dataToSend));
            }
        }

        async function main() {
            try {
                loadingMessage.innerText = "Loading model...";
                await createHandLandmarker();
                loadingMessage.innerText = "Starting camera...";
                await setupWebcam();
                loadingMessage.innerText = "Connecting to server...";
                setupWebSocket();
            } catch (error) {
                console.error("Initialization failed:", error);
                loadingMessage.classList.add("error");
                loadingMessage.innerText = `Initialization failed:\n${error.message}`;
            }
        }
        main();
    </script>
</body>
</html>
```

</Details>

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
