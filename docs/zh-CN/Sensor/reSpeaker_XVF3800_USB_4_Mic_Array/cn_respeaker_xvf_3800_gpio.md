---
description: ReSpeaker XVF3800 USB 4-Mic Array 是一款专业的圆形麦克风阵列，具有 AEC、波束成形、噪声抑制和 360° 语音捕获功能。与 XIAO ESP32S3 配对，可为智能设备、机器人和物联网应用提供先进的语音控制。探索无缝集成和双模式灵活性。

title: 通过 XIAO ESP32-S3 控制 reSpeaker XVF3800 GPIO

keywords:
- reSpeaker
- XIAO
- ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/6-ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3.jpg
slug: /cn/respeaker_xvf3800_xiao_gpio
last_update:
  date: 9/3/2025
  author: Kasun Thushara
---


## 目标

本指南说明如何使用 I2C 接口**读取和控制 XVF3800 语音处理器上的 GPIO 引脚**。您将学习如何：

- **读取 GPI 和 GPO 引脚状态**
- **控制输出引脚（例如，静音麦克风、控制 LED、放大器）**
- **了解 GPIO 映射及其用途**

## GPIO 概述

reSpeaker XVF3800 提供 3 个输入引脚 (GPI) 和 5 个输出引脚 (GPO) 用于外部控制。您可以使用这些引脚读取按钮状态或控制硬件，如静音 LED、放大器或 LED。

| **引脚名称** | **方向** | **功能**                                         |
|--------------|----------|--------------------------------------------------|
| X1D09        | 输入 (RO)    | 静音按钮状态（释放时为高电平）              |
| X1D13        | 输入 (RO)    | 浮空                                             |
| X1D34        | 输入 (RO)    | 浮空                                             |
| X0D11        | 输出 (RW)   | 浮空                                             |
| X0D30        | 输出 (RW)   | 静音 LED + 麦克风静音控制（高电平 = 静音）            |
| X0D31        | 输出 (RW)   | 放大器使能（低电平 = 使能）                     |
| X0D33        | 输出 (RW)   | WS2812 LED 电源控制（高电平 = 开启）                 |
| X0D39        | 输出 (RW)   | 浮空                                             |

## 读取 GPO 引脚状态

**目标**：检查所有**输出功能 GPIO (GPO)** 的逻辑电平。
**代码要点**：

- 使用以下参数发送读取请求：
  - 资源 ID：20 (GPO)
  - 命令 ID：0 (GPO_READ_VALUES)
- 按顺序读取 5 个 GPO 引脚状态：X0D11 → X0D30 → X0D31 → X0D33 → X0D39
- 包含状态字节以验证响应

```c
#include <Wire.h>

#define XMOS_ADDR 0x2C  // I2C 7-bit address

#define GPO_SERVICER_RESID 20
#define GPO_SERVICER_RESID_GPO_READ_VALUES 0
#define GPO_GPO_READ_NUM_BYTES 5

void setup() {
  Serial.begin(115200);
  while (!Serial);
  Wire.begin();
  delay(1000);
  Serial.println("XVF3800 GPO Read Test Starting...");
}

void loop() {
  uint8_t gpo_values[GPO_GPO_READ_NUM_BYTES] = {0};
  uint8_t status = 0xFF;

  bool success = read_gpo_values(gpo_values, &status);

  if (success) {
    Serial.print("I2C Communication SUCCESS. Status byte: 0x");
    Serial.print(status, HEX);
    Serial.print(" | GPO Output Values: ");
    for (uint8_t i = 0; i < GPO_GPO_READ_NUM_BYTES; i++) {
      Serial.print("0x");
      Serial.print(gpo_values[i], HEX);
      Serial.print(" ");
    }
    Serial.println();
  } else {
    Serial.println("Failed to read GPO values.");
  }

  delay(1000);
}

bool read_gpo_values(uint8_t *buffer, uint8_t *status) {
  const uint8_t resid = GPO_SERVICER_RESID;
  const uint8_t cmd = GPO_SERVICER_RESID_GPO_READ_VALUES | 0x80;
  const uint8_t read_len = GPO_GPO_READ_NUM_BYTES;

  // Step 1: Write command
  Wire.beginTransmission(XMOS_ADDR);
  Wire.write(resid);
  Wire.write(cmd);
  Wire.write(read_len + 1);
  uint8_t result = Wire.endTransmission();

  if (result != 0) {
    Serial.print("I2C Write Error: ");
    Serial.println(result);
    return false;
  }

  // Step 2: Read response (status + payload)
  Wire.requestFrom(XMOS_ADDR, (uint8_t)(read_len + 1));
  if (Wire.available() < read_len + 1) {
    Serial.println("I2C Read Error: Not enough data received.");
    return false;
  }

  *status = Wire.read();
  for (uint8_t i = 0; i < read_len; i++) {
    buffer[i] = Wire.read();
  }

  return true;
}


```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/GPO.PNG" alt="pir" width={600} height="auto" /></p>

## 读取 GPI 引脚状态

**目标**：检查**支持输入的 GPIO** 的状态（例如，静音按钮状态）。
**代码要点**：

- 发送命令到：
  - 资源 ID：36 (IO_CONFIG)
  - 命令 ID：6 (GPI_VALUE_ALL)
- 接收 3 个 GPI，表示 X1D09、X1D13 和 X1D34 的状态

```bash
#include <Wire.h>

#define XMOS_ADDR 0x2C  // I2C 7-bit address of XVF3800

// Resource and command IDs for GPI
#define IO_CONFIG_SERVICER_RESID 36
#define IO_CONFIG_SERVICER_RESID_GPI_READ_VALUES 0
#define GPI_READ_NUM_BYTES 3   // From header: IO_CONFIG_SERVICER_RESID_GPI_READ_VALUES_NUM_VALUES

void setup() {
  Serial.begin(115200);
  while (!Serial);
  Wire.begin();
  delay(1000);
  Serial.println("XVF3800 GPI Read Test Starting...");
}

void loop() {
  uint8_t gpi_values[GPI_READ_NUM_BYTES] = {0};
  uint8_t status = 0xFF;

  bool success = read_gpi_values(gpi_values, &status);

  if (success) {
    Serial.print("I2C Communication SUCCESS. Status byte: 0x");
    Serial.print(status, HEX);
    Serial.print(" | GPI Input Values: ");
    for (uint8_t i = 0; i < GPI_READ_NUM_BYTES; i++) {
      Serial.print("0x");
      Serial.print(gpi_values[i], HEX);
      Serial.print(" ");
    }
    Serial.println();
  } else {
    Serial.println("Failed to read GPI values.");
  }

  delay(1000);
}

bool read_gpi_values(uint8_t *buffer, uint8_t *status) {
  const uint8_t resid = IO_CONFIG_SERVICER_RESID;
  const uint8_t cmd = IO_CONFIG_SERVICER_RESID_GPI_READ_VALUES | 0x80;  // Read command
  const uint8_t read_len = GPI_READ_NUM_BYTES;

  // Step 1: Send the command
  Wire.beginTransmission(XMOS_ADDR);
  Wire.write(resid);
  Wire.write(cmd);
  Wire.write(read_len + 1);  // +1 for status byte
  uint8_t result = Wire.endTransmission();

  if (result != 0) {
    Serial.print("I2C Write Error: ");
    Serial.println(result);
    return false;
  }

  // Step 2: Read response (status + payload)
  Wire.requestFrom(XMOS_ADDR, (uint8_t)(read_len + 1));
  if (Wire.available() < read_len + 1) {
    Serial.println("I2C Read Error: Not enough data received.");
    return false;
  }

  *status = Wire.read();  // first byte is status
  for (uint8_t i = 0; i < read_len; i++) {
    buffer[i] = Wire.read();
  }

  return true;
}

```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/GPI.PNG" alt="pir" width={600} height="auto" /></p>

## 写入 GPO 引脚 – 静音麦克风示例

**目标**：控制输出 GPIO，例如，通过切换 GPIO 30 (X0D30) 来静音麦克风。
**代码要点**：

- 发送写入命令到：
  - 资源 ID：20
  - 命令 ID：1 (GPO_WRITE_VALUE)
  - 载荷：引脚编号，值 `例如，{30, 1} 来静音`
  
**便利函数**：

- muteMic() → 设置 GPIO 30 为高电平以**静音麦克风并点亮红色 LED**
- unmuteMic() → 设置 GPIO 30 为低电平以**取消静音麦克风并关闭 LED**

```bash
#include <Wire.h>

// Define the 7-bit I2C address of the XVF3800 device
#define XMOS_ADDR 0x2C  

// Define XVF3800 Resource and Command IDs
#define GPO_SERVICER_RESID 20                         // Resource ID for GPIO Output (GPO)
#define GPO_SERVICER_RESID_GPO_WRITE_VALUE 1          // Command ID to write value to GPIO
#define IO_CONFIG_SERVICER_RESID 36                   // Resource ID for IO Configuration
#define IO_CONFIG_SERVICER_RESID_GPI_VALUE_ALL 6      // Command ID to read all GPIO input values

void setup() {
  Wire.begin();                 // Initialize I2C communication
  Serial.begin(115200);        // Initialize serial communication for debugging
  delay(1000);                 // Short delay to allow device startup

  Serial.println("Muting Mic (Setting GPIO 30 HIGH)");
  muteMic();                   // Set GPIO 30 HIGH to mute microphone
  delay(5000);                 // Wait for 5 seconds

  Serial.println("Unmuting Mic (Setting GPIO 30 LOW)");
  unmuteMic();                 // Set GPIO 30 LOW to unmute microphone
  delay(3000);                 // Wait for 3 seconds

  Serial.println("Reading GPIO Status...");
  readGPIOStatus();            // Read and print the status of all GPIOs
}

void loop() {
  // Empty loop - no repeated actions for now
}

// Function to set GPIO 30 to a specific logic level (0 = LOW, 1 = HIGH)
void setGPIO30(uint8_t level) {
  uint8_t payload[2] = {30, level};  // Payload format: [GPIO index, value]
  xmos_write_bytes(GPO_SERVICER_RESID, GPO_SERVICER_RESID_GPO_WRITE_VALUE, payload, 2);
  
  Serial.print("Command Sent: GPIO 30 = ");
  Serial.println(level);
}

// Convenience function to mute the microphone (set GPIO 30 HIGH)
void muteMic() {
  setGPIO30(1);  // Logic HIGH to mute
}

// Convenience function to unmute the microphone (set GPIO 30 LOW)
void unmuteMic() {
  setGPIO30(0);  // Logic LOW to unmute
}

// Function to write a sequence of bytes over I2C to the XVF3800
void xmos_write_bytes(uint8_t resid, uint8_t cmd, uint8_t *value, uint8_t write_byte_num) {
  Wire.beginTransmission(XMOS_ADDR); // Begin I2C transmission to XVF3800
  Wire.write(resid);                 // Write the resource ID
  Wire.write(cmd);                   // Write the command ID
  Wire.write(write_byte_num);       // Write number of payload bytes
  for (uint8_t i = 0; i < write_byte_num; i++) {
    Wire.write(value[i]);           // Write each payload byte
  }
  Wire.endTransmission();           // End the I2C transmission
}

// Function to read the status of all GPIO inputs (32 bits) from XVF3800
void readGPIOStatus() {
  uint8_t buffer[4] = {0};  // Buffer to hold the 4-byte GPIO status response

  // --- Write phase: Send read request ---
  Wire.beginTransmission(XMOS_ADDR);                        // Begin I2C write transaction
  Wire.write(IO_CONFIG_SERVICER_RESID);                     // Write the resource ID for IO config
  Wire.write(IO_CONFIG_SERVICER_RESID_GPI_VALUE_ALL);       // Write the command ID to get all GPIO values
  Wire.write(1);                                             // Payload length (1 byte)
  Wire.endTransmission(false);                              // End transmission with repeated start (no stop)

  // --- Read phase: Read response from device ---
  Wire.requestFrom(XMOS_ADDR, 5); // Request 5 bytes: 1 status byte + 4 data bytes

  if (Wire.available() < 5) {
    Serial.println("Error: Not enough bytes received from XVF3800.");
    return;
  }

  uint8_t status = Wire.read();  // Read the status byte (should be 0 for success)

  // Read the 4-byte GPIO input status value
  for (int i = 0; i < 4; i++) {
    buffer[i] = Wire.read();
  }

  // Combine 4 bytes into a single 32-bit unsigned integer
  uint32_t gpio_status = ((uint32_t)buffer[3] << 24) |
                         ((uint32_t)buffer[2] << 16) |
                         ((uint32_t)buffer[1] << 8)  |
                         ((uint32_t)buffer[0]);

  Serial.print("GPIO Status Register = 0x");
  Serial.println(gpio_status, HEX);

  // Check and print the state of GPIO 30 specifically
  bool gpio30 = (gpio_status >> 30) & 0x01;
  Serial.print("GPIO 30 State: ");
  Serial.println(gpio30 ? "HIGH (Muted)" : "LOW (Unmuted)");
}

```

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
